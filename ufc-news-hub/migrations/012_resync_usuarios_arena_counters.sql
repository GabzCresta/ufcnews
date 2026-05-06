-- Migration 012: Resync denormalized counters on usuarios_arena.
--
-- The fields total_previsoes, total_amigos, total_ligas on usuarios_arena are
-- denormalized counters that drift whenever rows are written to previsoes /
-- amizades / liga_membros without being updated in lockstep.
--
-- Drift observed before this migration: top user was 133 stored vs 15 actual
-- (9x off). The fix is a one-shot resync from the source-of-truth tables.
-- Run this migration again periodically, or add triggers, if drift comes back.
--
-- Not dropping the columns because many types (admin.ts, arena.ts, index.ts)
-- and API responses depend on them. A full refactor to compute-on-read is a
-- separate task.

BEGIN;

UPDATE usuarios_arena u SET
  total_previsoes = COALESCE((SELECT COUNT(*) FROM previsoes p WHERE p.usuario_id = u.id), 0),
  total_amigos = COALESCE((
    SELECT COUNT(*) FROM amizades a
    WHERE (a.usuario_id = u.id OR a.amigo_id = u.id) AND a.status = 'aceita'
  ), 0),
  total_ligas = COALESCE((SELECT COUNT(*) FROM liga_membros lm WHERE lm.usuario_id = u.id), 0);

COMMIT;
