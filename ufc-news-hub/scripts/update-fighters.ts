/**
 * Script para atualizar dados dos lutadores a partir do UFC.com
 * Roda em batches de 50 com delay de 3s entre batches
 *
 * Uso: npx tsx scripts/update-fighters.ts
 * Cron: toda segunda 3h UTC
 */

import { Pool } from 'pg';
import * as cheerio from 'cheerio';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub',
  max: 5,
});

const BATCH_SIZE = 50;
const DELAY_BETWEEN_BATCHES_MS = 3000;
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36';

interface FighterRow {
  id: string;
  nome: string;
  ufc_slug: string;
}

interface ScrapedData {
  altura: string | null;
  envergadura: string | null;
  idade: number | null;
  data_nascimento: string | null;
  vitorias: number | null;
  derrotas: number | null;
  empates: number | null;
  nocautes: number | null;
  finalizacoes: number | null;
  decisoes: number | null;
  categoria_peso: string | null;
  pais: string | null;
  cidade_natal: string | null;
  stance: string | null;
}

async function scrapeFighter(ufcSlug: string): Promise<ScrapedData | null> {
  try {
    const url = `https://www.ufc.com/athlete/${ufcSlug}`;
    const res = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT },
      signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) return null;

    const html = await res.text();
    const $ = cheerio.load(html);

    // Bio fields
    const bioFields: Record<string, string> = {};
    $('.c-bio__field, .c-bio__info-item').each(function () {
      const label = $(this).find('.c-bio__label').text().trim().toLowerCase();
      const value = $(this).find('.c-bio__text').text().trim();
      if (label && value) bioFields[label] = value;
    });

    // Alt: some pages have different structure
    $('.hero-profile__info-item').each(function () {
      const label = $(this).find('.hero-profile__info-label').text().trim().toLowerCase();
      const value = $(this).find('.hero-profile__info-value').text().trim();
      if (label && value) bioFields[label] = value;
    });

    // Record from hero section
    const recordText = $('.hero-profile__division-body, .c-hero__headline-suffix').text().trim();
    const recordMatch = recordText.match(/(\d+)-(\d+)-(\d+)/);

    // Win method breakdown
    const winMethods: Record<string, number> = {};
    $('.c-stat-compare__group').each(function () {
      const label = $(this).find('.c-stat-compare__label').text().trim().toLowerCase();
      const value = parseInt($(this).find('.c-stat-compare__number').text().trim()) || 0;
      if (label) winMethods[label] = value;
    });

    // Country/hometown
    const hometown = bioFields['hometown'] || bioFields['city'] || null;
    const country = bioFields['country'] || bioFields['trains at'] || null;

    // Height/reach parsing
    const height = bioFields['height'] || null;
    const reach = bioFields['reach'] || null;

    // DOB parsing
    const dobText = bioFields['age'] || bioFields['date of birth'] || '';
    let age: number | null = null;
    let dob: string | null = null;

    const ageMatch = dobText.match(/(\d+)\s*(?:years? old|anos?)?/i);
    if (ageMatch) age = parseInt(ageMatch[1]);

    const dobMatch = dobText.match(/(\w+)\s+(\d{1,2}),?\s+(\d{4})/);
    if (dobMatch) {
      const months: Record<string, string> = {
        jan: '01', january: '01', feb: '02', february: '02', mar: '03', march: '03',
        apr: '04', april: '04', may: '05', jun: '06', june: '06', jul: '07', july: '07',
        aug: '08', august: '08', sep: '09', september: '09', oct: '10', october: '10',
        nov: '11', november: '11', dec: '12', december: '12',
      };
      const monthNum = months[dobMatch[1].toLowerCase()] || '01';
      dob = `${dobMatch[3]}-${monthNum}-${dobMatch[2].padStart(2, '0')}`;
      if (!age) {
        age = Math.floor((Date.now() - new Date(dob).getTime()) / (365.25 * 24 * 60 * 60 * 1000));
      }
    }

    // Weight class
    const division = $('.hero-profile__division-title, .c-hero__division-title').text().trim() || null;

    const stance = bioFields['fighting style'] || bioFields['stance'] || null;

    return {
      altura: height,
      envergadura: reach,
      idade: age,
      data_nascimento: dob,
      vitorias: recordMatch ? parseInt(recordMatch[1]) : null,
      derrotas: recordMatch ? parseInt(recordMatch[2]) : null,
      empates: recordMatch ? parseInt(recordMatch[3]) : null,
      nocautes: winMethods['ko/tko'] || winMethods['knockout'] || null,
      finalizacoes: winMethods['sub'] || winMethods['submission'] || null,
      decisoes: winMethods['dec'] || winMethods['decision'] || null,
      categoria_peso: division,
      pais: country,
      cidade_natal: hometown,
      stance,
    };
  } catch {
    return null;
  }
}

async function updateFighter(id: string, data: ScrapedData) {
  const updates: string[] = [];
  const values: unknown[] = [];
  let paramIndex = 1;

  if (data.altura) { updates.push(`altura = $${paramIndex++}`); values.push(data.altura); }
  if (data.envergadura) { updates.push(`envergadura = $${paramIndex++}`); values.push(data.envergadura); }
  if (data.idade) { updates.push(`idade = $${paramIndex++}`); values.push(data.idade); }
  if (data.data_nascimento) { updates.push(`data_nascimento = $${paramIndex++}`); values.push(data.data_nascimento); }
  if (data.vitorias !== null) { updates.push(`vitorias = $${paramIndex++}`); values.push(data.vitorias); }
  if (data.derrotas !== null) { updates.push(`derrotas = $${paramIndex++}`); values.push(data.derrotas); }
  if (data.empates !== null) { updates.push(`empates = $${paramIndex++}`); values.push(data.empates); }
  if (data.nocautes !== null) { updates.push(`nocautes = $${paramIndex++}`); values.push(data.nocautes); }
  if (data.finalizacoes !== null) { updates.push(`finalizacoes = $${paramIndex++}`); values.push(data.finalizacoes); }
  if (data.decisoes !== null) { updates.push(`decisoes = $${paramIndex++}`); values.push(data.decisoes); }
  if (data.pais) { updates.push(`pais = $${paramIndex++}`); values.push(data.pais.slice(0, 50)); }
  if (data.cidade_natal) { updates.push(`cidade_natal = $${paramIndex++}`); values.push(data.cidade_natal.slice(0, 100)); }
  if (data.stance) { updates.push(`stance = $${paramIndex++}`); values.push(data.stance.slice(0, 30)); }

  // Always update sync timestamp
  updates.push(`last_stats_sync = NOW()`);
  updates.push(`updated_at = NOW()`);

  if (updates.length <= 2) return false; // Only sync timestamps, no real data

  values.push(id);
  await pool.query(
    `UPDATE lutadores SET ${updates.join(', ')} WHERE id = $${paramIndex}`,
    values
  );
  return true;
}

async function run() {
  console.log(`[Fighter Update] Starting at ${new Date().toISOString()}`);

  // Get fighters that need updating (prioritize those missing age/height)
  const { rows: fighters } = await pool.query<FighterRow>(
    `SELECT id, nome, ufc_slug FROM lutadores
     WHERE ufc_slug IS NOT NULL
     ORDER BY
       CASE WHEN idade IS NULL THEN 0 ELSE 1 END,
       CASE WHEN altura IS NULL THEN 0 ELSE 1 END,
       last_stats_sync ASC NULLS FIRST
    `
  );

  console.log(`[Fighter Update] ${fighters.length} fighters to process`);

  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (let i = 0; i < fighters.length; i += BATCH_SIZE) {
    const batch = fighters.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(fighters.length / BATCH_SIZE);

    console.log(`[Fighter Update] Batch ${batchNum}/${totalBatches} (${batch.length} fighters)`);

    for (const fighter of batch) {
      const data = await scrapeFighter(fighter.ufc_slug);
      if (data) {
        const didUpdate = await updateFighter(fighter.id, data);
        if (didUpdate) {
          updated++;
        } else {
          skipped++;
          // Still mark as synced
          await pool.query('UPDATE lutadores SET last_stats_sync = NOW() WHERE id = $1', [fighter.id]);
        }
      } else {
        errors++;
      }
    }

    console.log(`[Fighter Update] Progress: ${Math.min(i + BATCH_SIZE, fighters.length)}/${fighters.length} (updated: ${updated}, skipped: ${skipped}, errors: ${errors})`);

    // Delay between batches
    if (i + BATCH_SIZE < fighters.length) {
      await new Promise(r => setTimeout(r, DELAY_BETWEEN_BATCHES_MS));
    }
  }

  console.log(`[Fighter Update] DONE. Updated: ${updated}, Skipped: ${skipped}, Errors: ${errors}`);

  await pool.end();
}

run().catch(err => {
  console.error('[Fighter Update] Fatal error:', err);
  process.exit(1);
});
