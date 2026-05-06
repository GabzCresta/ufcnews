-- Migration 009: Drop locale suffix columns from analises
--
-- Non-PT locale content has been fully migrated to analises_content_locales
-- (see migration 008). All read and write paths now route non-PT translations
-- through that table. The suffix columns on analises are safe to drop.
--
-- Covered by this migration:
--   analises.full_analysis_en, .full_analysis_es, .full_analysis_fr
--   analises.prelims_analysis_en, .prelims_analysis_es, .prelims_analysis_fr
--
-- PT content remains in analises.full_analysis and analises.prelims_analysis
-- (authoritative source, used as COALESCE fallback for non-PT reads).

BEGIN;

-- Sanity check: confirm analises_content_locales has translations that were
-- previously in the suffix columns before dropping. Abort if migration 008
-- didn't run.
DO $$
DECLARE
  locale_rows INT;
  legacy_rows INT;
BEGIN
  SELECT COUNT(*) INTO locale_rows FROM analises_content_locales;
  SELECT
    (SELECT COUNT(*) FROM analises WHERE full_analysis_en IS NOT NULL)
    + (SELECT COUNT(*) FROM analises WHERE full_analysis_es IS NOT NULL)
    + (SELECT COUNT(*) FROM analises WHERE full_analysis_fr IS NOT NULL)
    + (SELECT COUNT(*) FROM analises WHERE prelims_analysis_en IS NOT NULL)
    + (SELECT COUNT(*) FROM analises WHERE prelims_analysis_es IS NOT NULL)
    + (SELECT COUNT(*) FROM analises WHERE prelims_analysis_fr IS NOT NULL)
  INTO legacy_rows;

  IF locale_rows < legacy_rows THEN
    RAISE EXCEPTION 'analises_content_locales has % rows but legacy suffix columns hold % rows. Run migration 008 first.', locale_rows, legacy_rows;
  END IF;
END$$;

ALTER TABLE analises DROP COLUMN IF EXISTS full_analysis_en;
ALTER TABLE analises DROP COLUMN IF EXISTS full_analysis_es;
ALTER TABLE analises DROP COLUMN IF EXISTS full_analysis_fr;
ALTER TABLE analises DROP COLUMN IF EXISTS prelims_analysis_en;
ALTER TABLE analises DROP COLUMN IF EXISTS prelims_analysis_es;
ALTER TABLE analises DROP COLUMN IF EXISTS prelims_analysis_fr;

COMMIT;
