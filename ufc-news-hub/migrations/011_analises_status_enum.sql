-- Migration 011: Convert analises.status from VARCHAR(20) to enum status_analise.
--
-- The current VARCHAR column allows any string. All existing rows are
-- 'publicado', but there is no type constraint preventing typos or bogus values
-- from being inserted. Aligning with the other status enums in the schema
-- (status_evento, status_luta, status_liga, status_duelo, status_amizade).

BEGIN;

-- Create enum with the three documented states. Keep names in Portuguese
-- per R-1 (All DB table/column names in Portuguese).
DO $$ BEGIN
  CREATE TYPE status_analise AS ENUM ('publicado', 'rascunho', 'arquivado');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- Convert column. No existing rows have values outside the enum.
ALTER TABLE analises
  ALTER COLUMN status DROP DEFAULT,
  ALTER COLUMN status TYPE status_analise
    USING status::status_analise,
  ALTER COLUMN status SET DEFAULT 'publicado'::status_analise;

COMMIT;
