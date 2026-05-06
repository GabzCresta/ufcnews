/**
 * Run the noticias i18n migration via Node.js (no psql needed).
 * Usage: npx tsx scripts/run-migration-noticias-i18n.ts
 */

import { Pool } from 'pg';

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub';
const pool = new Pool({ connectionString: DATABASE_URL, max: 2 });

async function main() {
  console.log('Adding i18n columns to noticias table...');

  await pool.query(`
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
  `);

  console.log('Done! 9 i18n columns added to noticias.');
  await pool.end();
}

main().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
