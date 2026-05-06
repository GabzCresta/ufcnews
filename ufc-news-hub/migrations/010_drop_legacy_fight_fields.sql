-- Migration 010: Drop legacy analises fields no longer rendered by any view.
--
-- The columns below were used by FightBreakdownCard + LegacySingleFightView
-- (retired in this cleanup pass). The current view layer consumes
-- `full_analysis` and `prelims_analysis` JSONBs exclusively, so the per-field
-- shapes have been dead data for all recent analyses.
--
-- Dropped columns:
--   tactical_breakdown  — JSONB stats/radar/tale-of-tape (now inside full_analysis)
--   fight_prediction    — JSONB prediction payload (now inside full_analysis.previsao_final)
--   fighter1_info       — JSONB fighter card data (now inside full_analysis.hero)
--   fighter2_info       — JSONB fighter card data
--   artigo_conteudo     — HTML prose body (now inside full_analysis.narrativa.html_content)
--
-- The sole `analysis_type='full_card'` row (ufc-326-preview) was deleted first;
-- AnalisePageClient no longer handles that shape.

BEGIN;

ALTER TABLE analises DROP COLUMN IF EXISTS tactical_breakdown;
ALTER TABLE analises DROP COLUMN IF EXISTS fight_prediction;
ALTER TABLE analises DROP COLUMN IF EXISTS fighter1_info;
ALTER TABLE analises DROP COLUMN IF EXISTS fighter2_info;
ALTER TABLE analises DROP COLUMN IF EXISTS artigo_conteudo;

COMMIT;
