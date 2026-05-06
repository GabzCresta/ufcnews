-- Migration 014: post_card_analyses
-- Stores the weekly post-card retrospective: self-evaluation, key points,
-- divisional impact and content-creator angles. One row per event.

CREATE TABLE IF NOT EXISTS post_card_analyses (
  id              uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  evento_id       uuid REFERENCES eventos(id) ON DELETE SET NULL,
  evento_nome     varchar(255) NOT NULL UNIQUE,
  performance     jsonb NOT NULL DEFAULT '{}'::jsonb,
  key_points      jsonb NOT NULL DEFAULT '[]'::jsonb,
  divisional      jsonb NOT NULL DEFAULT '[]'::jsonb,
  creator_angles  jsonb NOT NULL DEFAULT '[]'::jsonb,
  lessons         jsonb NOT NULL DEFAULT '[]'::jsonb,
  status          varchar(20) NOT NULL DEFAULT 'rascunho',
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_post_card_evento_id ON post_card_analyses(evento_id);
CREATE INDEX IF NOT EXISTS idx_post_card_status ON post_card_analyses(status);
CREATE INDEX IF NOT EXISTS idx_post_card_created ON post_card_analyses(created_at DESC);

CREATE OR REPLACE FUNCTION update_post_card_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_post_card_updated_at ON post_card_analyses;
CREATE TRIGGER trg_post_card_updated_at
BEFORE UPDATE ON post_card_analyses
FOR EACH ROW
EXECUTE FUNCTION update_post_card_updated_at();
