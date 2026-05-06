-- ════════════════════════════════════════════════════════════════
-- Migration 007: Add indices on analises foreign keys
--
-- Problem: analises.lutador1_id and analises.lutador2_id are declared
-- as FKs but have NO indices. Any query "find analyses where fighter X
-- participated" does a full table scan (linear in number of analyses).
--
-- Arena scoring + creator dashboard need to look up analyses by fighter
-- frequently, so these indices turn O(n) into O(log n).
--
-- Zero downtime: CREATE INDEX CONCURRENTLY does NOT lock the table.
-- Safe to run on live DB.
-- ════════════════════════════════════════════════════════════════

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_analises_lutador1_id
  ON analises (lutador1_id)
  WHERE lutador1_id IS NOT NULL;

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_analises_lutador2_id
  ON analises (lutador2_id)
  WHERE lutador2_id IS NOT NULL;

-- Composite for the common "analyses for this event, only published" query
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_analises_evento_status_created
  ON analises (evento_id, status, created_at DESC)
  WHERE evento_id IS NOT NULL;
