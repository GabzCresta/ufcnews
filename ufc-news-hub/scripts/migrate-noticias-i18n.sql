-- Migration: Add i18n columns to noticias table
-- Allows news to be displayed in EN/ES/FR with COALESCE fallback to PT-BR

ALTER TABLE noticias
  ADD COLUMN IF NOT EXISTS titulo_en VARCHAR(500),
  ADD COLUMN IF NOT EXISTS titulo_es VARCHAR(500),
  ADD COLUMN IF NOT EXISTS titulo_fr VARCHAR(500),
  ADD COLUMN IF NOT EXISTS subtitulo_en TEXT,
  ADD COLUMN IF NOT EXISTS subtitulo_es TEXT,
  ADD COLUMN IF NOT EXISTS subtitulo_fr TEXT,
  ADD COLUMN IF NOT EXISTS conteudo_en TEXT,
  ADD COLUMN IF NOT EXISTS conteudo_es TEXT,
  ADD COLUMN IF NOT EXISTS conteudo_fr TEXT;
