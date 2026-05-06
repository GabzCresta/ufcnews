-- ═══════════════════════════════════════════════════════════════
-- Arena AAA migration — April 2026
-- 1) Photo versioning (fix write-once bug)
-- 2) Tenants (B2B: podcast white-label + invite gate)
-- 3) Postgres triggers for pg_notify → Socket.IO fan-out
-- ═══════════════════════════════════════════════════════════════

-- ─── 1) Photo versioning ───────────────────────────────────────
ALTER TABLE lutadores
  ADD COLUMN IF NOT EXISTS imagem_source     varchar(20),
  ADD COLUMN IF NOT EXISTS imagem_versao     integer DEFAULT 1,
  ADD COLUMN IF NOT EXISTS imagem_updated_at timestamptz DEFAULT now();

UPDATE lutadores
   SET imagem_versao = COALESCE(imagem_versao, 1),
       imagem_updated_at = COALESCE(imagem_updated_at, now())
 WHERE imagem_versao IS NULL OR imagem_updated_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_lutadores_imagem_stale
  ON lutadores(imagem_updated_at)
  WHERE ativo = true;

-- ─── 2) Tenants ────────────────────────────────────────────────
DO $$ BEGIN
  CREATE TYPE tenant_plano AS ENUM ('free', 'paid', 'founder');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE tenant_fonte AS ENUM ('invite_code', 'partner_invite', 'admin');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS tenants (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug           varchar(64) UNIQUE NOT NULL,
  nome           varchar(200) NOT NULL,
  logo_url       varchar(500),
  cor_primary    varchar(9)  DEFAULT '#D20A0A',
  cor_accent     varchar(9)  DEFAULT '#E2B400',
  dominio_custom varchar(100),
  plano          tenant_plano DEFAULT 'free',
  max_membros    integer,
  active         boolean DEFAULT true,
  created_by     uuid REFERENCES usuarios_arena(id) ON DELETE SET NULL,
  created_at     timestamptz DEFAULT now(),
  updated_at     timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tenant_codigos_convite (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id   uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  codigo      varchar(32) UNIQUE NOT NULL,
  rotulo      varchar(100),
  max_usos    integer,
  usos        integer DEFAULT 0,
  expira_em   timestamptz,
  created_at  timestamptz DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_tenant_codigos_tenant
  ON tenant_codigos_convite(tenant_id);

CREATE TABLE IF NOT EXISTS tenant_membros (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id     uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  usuario_id    uuid NOT NULL REFERENCES usuarios_arena(id) ON DELETE CASCADE,
  codigo_usado  uuid REFERENCES tenant_codigos_convite(id) ON DELETE SET NULL,
  fonte         tenant_fonte DEFAULT 'invite_code',
  entrou_em     timestamptz DEFAULT now(),
  UNIQUE(tenant_id, usuario_id)
);
CREATE INDEX IF NOT EXISTS idx_tenant_membros_user
  ON tenant_membros(usuario_id);
CREATE INDEX IF NOT EXISTS idx_tenant_membros_tenant
  ON tenant_membros(tenant_id);

ALTER TABLE usuarios_arena
  ADD COLUMN IF NOT EXISTS tenant_ativo_id uuid REFERENCES tenants(id) ON DELETE SET NULL;

-- ─── 3) pg_notify triggers for real-time fan-out ───────────────
-- Single channel: arena_events. Payload contains type + data.
-- crenas-rt LISTEN arena_events, routes to rooms by payload.

CREATE OR REPLACE FUNCTION arena_notify_luta() RETURNS trigger AS $$
DECLARE
  payload json;
BEGIN
  payload := json_build_object(
    'type',        'luta:' || NEW.status::text,
    'evento_id',   NEW.evento_id,
    'luta_id',     NEW.id,
    'status',      NEW.status::text,
    'vencedor_id', NEW.vencedor_id,
    'metodo',      NEW.metodo::text,
    'round_final', NEW.round_final,
    'tempo_final', NEW.tempo_final
  );
  PERFORM pg_notify('arena_events', payload::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_arena_notify_luta ON lutas;
CREATE TRIGGER trg_arena_notify_luta
  AFTER UPDATE OF status, vencedor_id, metodo, round_final ON lutas
  FOR EACH ROW
  WHEN (OLD.status IS DISTINCT FROM NEW.status
     OR OLD.vencedor_id IS DISTINCT FROM NEW.vencedor_id)
  EXECUTE FUNCTION arena_notify_luta();

CREATE OR REPLACE FUNCTION arena_notify_evento() RETURNS trigger AS $$
DECLARE
  payload json;
BEGIN
  payload := json_build_object(
    'type',      'evento:' || NEW.status::text,
    'evento_id', NEW.id,
    'status',    NEW.status::text,
    'nome',      NEW.nome
  );
  PERFORM pg_notify('arena_events', payload::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_arena_notify_evento ON eventos;
CREATE TRIGGER trg_arena_notify_evento
  AFTER UPDATE OF status ON eventos
  FOR EACH ROW
  WHEN (OLD.status IS DISTINCT FROM NEW.status)
  EXECUTE FUNCTION arena_notify_evento();

CREATE OR REPLACE FUNCTION arena_notify_previsao() RETURNS trigger AS $$
DECLARE
  payload json;
BEGIN
  -- Only fire when processada flips false→true (result just landed)
  IF OLD.processada = false AND NEW.processada = true THEN
    payload := json_build_object(
      'type',          'pick:resultado',
      'evento_id',     NEW.evento_id,
      'luta_id',       NEW.luta_id,
      'usuario_id',    NEW.usuario_id,
      'acertou',       NEW.acertou_vencedor,
      'pontos_ganhos', NEW.pontos_ganhos
    );
    PERFORM pg_notify('arena_events', payload::text);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_arena_notify_previsao ON previsoes;
CREATE TRIGGER trg_arena_notify_previsao
  AFTER UPDATE OF processada ON previsoes
  FOR EACH ROW
  EXECUTE FUNCTION arena_notify_previsao();

CREATE OR REPLACE FUNCTION arena_notify_evento_pontuacao() RETURNS trigger AS $$
DECLARE
  payload json;
BEGIN
  payload := json_build_object(
    'type',       'leaderboard:update',
    'evento_id',  NEW.evento_id,
    'usuario_id', NEW.usuario_id,
    'pontos',     NEW.pontos_totais,
    'acertos',    NEW.acertos,
    'total',      NEW.total_lutas
  );
  PERFORM pg_notify('arena_events', payload::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_arena_notify_evento_pontuacao ON evento_pontuacao;
CREATE TRIGGER trg_arena_notify_evento_pontuacao
  AFTER INSERT OR UPDATE ON evento_pontuacao
  FOR EACH ROW
  EXECUTE FUNCTION arena_notify_evento_pontuacao();
