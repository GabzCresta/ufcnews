-- ═══════════════════════════════════════════════════════════════
-- Arena AAA Part 2 — chat + reactions NOTIFY triggers
-- Allows crenas-rt to push chat/reactions in real-time (no polling).
-- ═══════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION arena_notify_chat_evento() RETURNS trigger AS $$
DECLARE
  payload json;
  u RECORD;
BEGIN
  SELECT username, display_name, avatar_url INTO u
    FROM usuarios_arena WHERE id = NEW.usuario_id;
  payload := json_build_object(
    'type',         'chat:msg',
    'evento_id',    NEW.evento_id,
    'id',           NEW.id,
    'usuario_id',   NEW.usuario_id,
    'username',     u.username,
    'display_name', u.display_name,
    'avatar_url',   u.avatar_url,
    'mensagem',     NEW.mensagem,
    'created_at',   NEW.created_at
  );
  PERFORM pg_notify('arena_events', payload::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_arena_notify_chat_evento ON chat_evento;
CREATE TRIGGER trg_arena_notify_chat_evento
  AFTER INSERT ON chat_evento
  FOR EACH ROW EXECUTE FUNCTION arena_notify_chat_evento();

CREATE OR REPLACE FUNCTION arena_notify_reacao() RETURNS trigger AS $$
DECLARE
  payload json;
  evento_id_ uuid;
  u RECORD;
BEGIN
  SELECT evento_id INTO evento_id_ FROM lutas WHERE id = NEW.luta_id;
  SELECT username, display_name INTO u FROM usuarios_arena WHERE id = NEW.usuario_id;
  payload := json_build_object(
    'type',       'reaction:new',
    'evento_id',  evento_id_,
    'luta_id',    NEW.luta_id,
    'lutador_id', NEW.lutador_id,
    'usuario_id', NEW.usuario_id,
    'username',   u.username,
    'display_name', u.display_name,
    'id',         NEW.id
  );
  PERFORM pg_notify('arena_events', payload::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_arena_notify_reacao ON reacoes_luta;
CREATE TRIGGER trg_arena_notify_reacao
  AFTER INSERT ON reacoes_luta
  FOR EACH ROW EXECUTE FUNCTION arena_notify_reacao();

-- Also notify on liga_chat so liga:<id> rooms stream in realtime
CREATE OR REPLACE FUNCTION arena_notify_liga_chat() RETURNS trigger AS $$
DECLARE
  payload json;
  u RECORD;
BEGIN
  SELECT username, display_name, avatar_url INTO u
    FROM usuarios_arena WHERE id = NEW.usuario_id;
  payload := json_build_object(
    'type',         'liga_chat:msg',
    'liga_id',      NEW.liga_id,
    'id',           NEW.id,
    'usuario_id',   NEW.usuario_id,
    'username',     u.username,
    'display_name', u.display_name,
    'avatar_url',   u.avatar_url,
    'mensagem',     NEW.mensagem,
    'created_at',   NEW.created_at
  );
  PERFORM pg_notify('arena_events', payload::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_arena_notify_liga_chat ON liga_chat;
CREATE TRIGGER trg_arena_notify_liga_chat
  AFTER INSERT ON liga_chat
  FOR EACH ROW EXECUTE FUNCTION arena_notify_liga_chat();
