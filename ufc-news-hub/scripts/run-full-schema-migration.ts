/**
 * Full schema migration: sync DB with prisma/schema.prisma
 * Adds missing columns to `analises` and `noticias` tables.
 * Usage: npx tsx scripts/run-full-schema-migration.ts
 */

import { Pool } from 'pg';

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub';
const pool = new Pool({ connectionString: DATABASE_URL, max: 2 });

async function main() {
  const client = await pool.connect();
  try {
    console.log('=== UFC News Hub Schema Migration ===\n');

    // ─── Step 1: Check existing columns in analises ─────────────────────────
    const analisesCols = await client.query<{ column_name: string }>(
      `SELECT column_name FROM information_schema.columns WHERE table_name = 'analises' ORDER BY ordinal_position`
    );
    const existingAnalises = new Set(analisesCols.rows.map(r => r.column_name));
    console.log('analises existing columns:', [...existingAnalises].join(', '));

    // ─── Step 2: Check existing columns in noticias ──────────────────────────
    const noticiasCols = await client.query<{ column_name: string }>(
      `SELECT column_name FROM information_schema.columns WHERE table_name = 'noticias' ORDER BY ordinal_position`
    );
    const existingNoticias = new Set(noticiasCols.rows.map(r => r.column_name));
    console.log('noticias existing columns:', [...existingNoticias].join(', '));

    // ─── Step 3: Add missing analises columns ────────────────────────────────
    console.log('\n--- Migrating analises table ---');

    const analisesMigrations: Array<{ col: string; sql: string }> = [
      { col: 'fights_analysis', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS fights_analysis JSONB` },
      { col: 'card_overview', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS card_overview JSONB` },
      { col: 'analysis_type', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS analysis_type VARCHAR(20) DEFAULT 'single_fight'` },
      { col: 'full_analysis', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS full_analysis JSONB` },
      { col: 'prelims_analysis', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS prelims_analysis JSONB` },
      // Non-PT locales moved to analises_content_locales (migration 008). See analises_content_locales table.
      { col: 'predicted_winner_name', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS predicted_winner_name VARCHAR(255)` },
      { col: 'predicted_winner_side', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS predicted_winner_side VARCHAR(50)` },
      { col: 'predicted_method', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS predicted_method VARCHAR(100)` },
      { col: 'confidence_score', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS confidence_score FLOAT` },
      { col: 'actual_winner_name', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS actual_winner_name VARCHAR(255)` },
      { col: 'prediction_correct', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS prediction_correct BOOLEAN` },
      { col: 'method_correct', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS method_correct BOOLEAN` },
      { col: 'event_overview', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS event_overview JSONB` },
      { col: 'event_overview_en', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS event_overview_en JSONB` },
      { col: 'event_overview_es', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS event_overview_es JSONB` },
      { col: 'event_overview_fr', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS event_overview_fr JSONB` },
      { col: 'card_position', sql: `ALTER TABLE analises ADD COLUMN IF NOT EXISTS card_position VARCHAR(20)` },
    ];

    for (const { col, sql } of analisesMigrations) {
      if (!existingAnalises.has(col)) {
        await client.query(sql);
        console.log(`  ✅ Added: analises.${col}`);
      } else {
        console.log(`  ⏭  Skip (exists): analises.${col}`);
      }
    }

    // ─── Step 4: Add missing noticias i18n columns ──────────────────────────
    console.log('\n--- Migrating noticias table ---');

    const noticiasMigrations: Array<{ col: string; sql: string }> = [
      { col: 'titulo_en', sql: `ALTER TABLE noticias ADD COLUMN IF NOT EXISTS titulo_en VARCHAR(500)` },
      { col: 'titulo_es', sql: `ALTER TABLE noticias ADD COLUMN IF NOT EXISTS titulo_es VARCHAR(500)` },
      { col: 'titulo_fr', sql: `ALTER TABLE noticias ADD COLUMN IF NOT EXISTS titulo_fr VARCHAR(500)` },
      { col: 'subtitulo_en', sql: `ALTER TABLE noticias ADD COLUMN IF NOT EXISTS subtitulo_en TEXT` },
      { col: 'subtitulo_es', sql: `ALTER TABLE noticias ADD COLUMN IF NOT EXISTS subtitulo_es TEXT` },
      { col: 'subtitulo_fr', sql: `ALTER TABLE noticias ADD COLUMN IF NOT EXISTS subtitulo_fr TEXT` },
      { col: 'conteudo_en', sql: `ALTER TABLE noticias ADD COLUMN IF NOT EXISTS conteudo_en TEXT` },
      { col: 'conteudo_es', sql: `ALTER TABLE noticias ADD COLUMN IF NOT EXISTS conteudo_es TEXT` },
      { col: 'conteudo_fr', sql: `ALTER TABLE noticias ADD COLUMN IF NOT EXISTS conteudo_fr TEXT` },
      { col: 'reel_caption', sql: `ALTER TABLE noticias ADD COLUMN IF NOT EXISTS reel_caption TEXT` },
    ];

    for (const { col, sql } of noticiasMigrations) {
      if (!existingNoticias.has(col)) {
        await client.query(sql);
        console.log(`  ✅ Added: noticias.${col}`);
      } else {
        console.log(`  ⏭  Skip (exists): noticias.${col}`);
      }
    }

    // ─── Step 5: Verify final column counts ─────────────────────────────────
    console.log('\n--- Verification ---');

    const finalAnalises = await client.query<{ count: string }>(
      `SELECT COUNT(*) as count FROM information_schema.columns WHERE table_name = 'analises'`
    );
    const finalNoticias = await client.query<{ count: string }>(
      `SELECT COUNT(*) as count FROM information_schema.columns WHERE table_name = 'noticias'`
    );

    console.log(`analises total columns: ${finalAnalises.rows[0].count}`);
    console.log(`noticias total columns: ${finalNoticias.rows[0].count}`);

    console.log('\n✅ Migration complete!');
  } catch (err) {
    console.error('❌ Migration failed:', err);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

main();
