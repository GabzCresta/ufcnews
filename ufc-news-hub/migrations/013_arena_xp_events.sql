-- ═══════════════════════════════════════════════════════════════
-- 013_arena_xp_events.sql
-- Event sourcing append-only para concessão de XP + recálculo
-- atômico de nível + notificação via pg_notify.
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS arena_xp_events (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id      UUID NOT NULL REFERENCES usuarios_arena(id) ON DELETE CASCADE,
  fonte           VARCHAR(40) NOT NULL,
  xp_delta        INT NOT NULL,
  idempotency_key VARCHAR(120) NOT NULL,
  metadata        JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (usuario_id, idempotency_key)
);

CREATE INDEX IF NOT EXISTS idx_arena_xp_events_usuario_created
  ON arena_xp_events (usuario_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_arena_xp_events_fonte
  ON arena_xp_events (fonte);

-- Recalcula nivel a partir dos thresholds; idempotente.
-- Retorna 1 row somente quando nivel mudou.
CREATE OR REPLACE FUNCTION arena_recalcular_nivel(p_usuario_id UUID)
RETURNS TABLE(nivel_anterior nivel_usuario, nivel_novo nivel_usuario) AS $$
DECLARE
  v_antes  nivel_usuario;
  v_depois nivel_usuario;
  v_xp     INT;
BEGIN
  SELECT nivel, COALESCE(xp_total, 0) INTO v_antes, v_xp
    FROM usuarios_arena WHERE id = p_usuario_id;

  v_depois := CASE
    WHEN v_xp >= 15000 THEN 'legend'::nivel_usuario
    WHEN v_xp >= 7000  THEN 'champion'::nivel_usuario
    WHEN v_xp >= 3500  THEN 'elite'::nivel_usuario
    WHEN v_xp >= 1500  THEN 'challenger'::nivel_usuario
    WHEN v_xp >= 500   THEN 'contender'::nivel_usuario
    WHEN v_xp >= 100   THEN 'amateur'::nivel_usuario
    ELSE 'iniciante'::nivel_usuario
  END;

  IF v_antes IS DISTINCT FROM v_depois THEN
    UPDATE usuarios_arena SET nivel = v_depois WHERE id = p_usuario_id;
    nivel_anterior := v_antes;
    nivel_novo     := v_depois;
    RETURN NEXT;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Concessão atômica: insert idempotente + update xp_total + recalcular + notify.
-- Retorna sempre 1 row: aplicado=false se idempotency_key já existia.
CREATE OR REPLACE FUNCTION arena_conceder_xp(
  p_usuario_id      UUID,
  p_fonte           VARCHAR,
  p_xp_delta        INT,
  p_idempotency_key VARCHAR,
  p_metadata        JSONB DEFAULT '{}'::jsonb
)
RETURNS TABLE(
  aplicado       BOOLEAN,
  nivel_anterior nivel_usuario,
  nivel_novo     nivel_usuario
) AS $$
DECLARE
  v_inserted_id UUID;
  v_nivel_ant   nivel_usuario;
  v_nivel_nov   nivel_usuario;
BEGIN
  INSERT INTO arena_xp_events (usuario_id, fonte, xp_delta, idempotency_key, metadata)
    VALUES (p_usuario_id, p_fonte, p_xp_delta, p_idempotency_key, p_metadata)
    ON CONFLICT (usuario_id, idempotency_key) DO NOTHING
    RETURNING id INTO v_inserted_id;

  IF v_inserted_id IS NULL THEN
    aplicado       := FALSE;
    nivel_anterior := NULL;
    nivel_novo     := NULL;
    RETURN NEXT;
    RETURN;
  END IF;

  UPDATE usuarios_arena
     SET xp_total = COALESCE(xp_total, 0) + p_xp_delta
   WHERE id = p_usuario_id;

  SELECT r.nivel_anterior, r.nivel_novo INTO v_nivel_ant, v_nivel_nov
    FROM arena_recalcular_nivel(p_usuario_id) r;

  IF v_nivel_ant IS NOT NULL AND v_nivel_ant IS DISTINCT FROM v_nivel_nov THEN
    INSERT INTO notificacoes (usuario_id, tipo, titulo, mensagem, dados)
      VALUES (
        p_usuario_id,
        'level_up',
        'Nova faixa desbloqueada',
        v_nivel_ant::text || ' → ' || v_nivel_nov::text,
        jsonb_build_object('de', v_nivel_ant, 'para', v_nivel_nov, 'fonte', p_fonte)
      );

    INSERT INTO atividades (usuario_id, tipo, titulo, descricao, dados)
      VALUES (
        p_usuario_id,
        'level_up',
        'Promovido a ' || v_nivel_nov::text,
        'Avançou de ' || v_nivel_ant::text || ' para ' || v_nivel_nov::text,
        jsonb_build_object('de', v_nivel_ant, 'para', v_nivel_nov)
      );

    PERFORM pg_notify(
      'arena_user_' || p_usuario_id::text,
      jsonb_build_object(
        'type', 'level_up',
        'de', v_nivel_ant,
        'para', v_nivel_nov,
        'xp_delta', p_xp_delta,
        'fonte', p_fonte
      )::text
    );
  END IF;

  aplicado       := TRUE;
  nivel_anterior := v_nivel_ant;
  nivel_novo     := v_nivel_nov;
  RETURN NEXT;
END;
$$ LANGUAGE plpgsql;

-- Backfill: sincroniza enum nivel com o xp_total atual dos usuarios existentes.
-- Não cria xp_events legacy (mantém audit trail limpo — só conta evento novo em diante).
DO $$
DECLARE
  u RECORD;
BEGIN
  FOR u IN SELECT id FROM usuarios_arena LOOP
    PERFORM arena_recalcular_nivel(u.id);
  END LOOP;
END $$;
