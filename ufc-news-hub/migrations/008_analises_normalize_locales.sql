-- ════════════════════════════════════════════════════════════════
-- Migration 008: Normalize analises locale content + drop dead cols
--
-- PHASE A: Drop 4 columns with ZERO code references:
--   event_overview, event_overview_en, event_overview_es, event_overview_fr
--
-- PHASE B: Create analises_content_locales + migrate data
--   - One row per (analise_id, locale, content_type)
--   - content_type in ('full_analysis', 'prelims_analysis')
--   - locales: 'en', 'es', 'fr' (PT stays in analises.full_analysis / .prelims_analysis)
--   - Existing full_analysis_en/es/fr and prelims_analysis_en/es/fr kept
--     in place for now (dual write until code fully migrated). Drop in
--     a later migration once new table proven in prod.
-- ════════════════════════════════════════════════════════════════

BEGIN;

-- ═══ Phase A: Drop dead event_overview cols (0 code refs) ═══
ALTER TABLE analises
  DROP COLUMN IF EXISTS event_overview,
  DROP COLUMN IF EXISTS event_overview_en,
  DROP COLUMN IF EXISTS event_overview_es,
  DROP COLUMN IF EXISTS event_overview_fr;

-- ═══ Phase B: Create normalized locale content table ═══
CREATE TABLE IF NOT EXISTS analises_content_locales (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  analise_id      UUID NOT NULL REFERENCES analises(id) ON DELETE CASCADE,
  locale          VARCHAR(5) NOT NULL,
  content_type    VARCHAR(30) NOT NULL,
  content         JSONB NOT NULL,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW(),

  CONSTRAINT analises_content_locales_unique
    UNIQUE (analise_id, locale, content_type),

  CONSTRAINT analises_content_locales_locale_check
    CHECK (locale IN ('pt', 'en', 'es', 'fr')),

  CONSTRAINT analises_content_locales_type_check
    CHECK (content_type IN ('full_analysis', 'prelims_analysis'))
);

CREATE INDEX IF NOT EXISTS idx_analises_content_locales_lookup
  ON analises_content_locales (analise_id, locale, content_type);

-- Migrate existing data from suffix columns into normalized table.
-- Only insert non-null content. PT stays in analises for now.
INSERT INTO analises_content_locales (analise_id, locale, content_type, content)
SELECT id, 'en', 'full_analysis', full_analysis_en FROM analises WHERE full_analysis_en IS NOT NULL
ON CONFLICT (analise_id, locale, content_type) DO NOTHING;

INSERT INTO analises_content_locales (analise_id, locale, content_type, content)
SELECT id, 'es', 'full_analysis', full_analysis_es FROM analises WHERE full_analysis_es IS NOT NULL
ON CONFLICT (analise_id, locale, content_type) DO NOTHING;

INSERT INTO analises_content_locales (analise_id, locale, content_type, content)
SELECT id, 'fr', 'full_analysis', full_analysis_fr FROM analises WHERE full_analysis_fr IS NOT NULL
ON CONFLICT (analise_id, locale, content_type) DO NOTHING;

INSERT INTO analises_content_locales (analise_id, locale, content_type, content)
SELECT id, 'en', 'prelims_analysis', prelims_analysis_en FROM analises WHERE prelims_analysis_en IS NOT NULL
ON CONFLICT (analise_id, locale, content_type) DO NOTHING;

INSERT INTO analises_content_locales (analise_id, locale, content_type, content)
SELECT id, 'es', 'prelims_analysis', prelims_analysis_es FROM analises WHERE prelims_analysis_es IS NOT NULL
ON CONFLICT (analise_id, locale, content_type) DO NOTHING;

INSERT INTO analises_content_locales (analise_id, locale, content_type, content)
SELECT id, 'fr', 'prelims_analysis', prelims_analysis_fr FROM analises WHERE prelims_analysis_fr IS NOT NULL
ON CONFLICT (analise_id, locale, content_type) DO NOTHING;

COMMIT;

-- Verify: count migrated rows
-- SELECT locale, content_type, COUNT(*) FROM analises_content_locales GROUP BY locale, content_type;
