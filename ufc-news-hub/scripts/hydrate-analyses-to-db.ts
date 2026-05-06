/**
 * Hydrate analyses from static files into the database.
 *
 * Reads page.tsx files (PT-BR data) + data-{en,es,fr}.ts translations
 * from src/app/[locale]/hub/analise/[slug]/ directories and
 * UPSERTS them into the analises table.
 *
 * Usage: npx tsx scripts/hydrate-analyses-to-db.ts [--event moicano-vs-duncan]
 */

import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub';
const pool = new Pool({ connectionString: DATABASE_URL, max: 5 });

const ANALISE_DIR = path.resolve(__dirname, '../src/app/[locale]/hub/analise');

// ═══════════════════════════════════════════════════════════
// Extract the data object from a TypeScript file
// ═══════════════════════════════════════════════════════════

function extractAnaliseObject(filePath: string): unknown | null {
  if (!fs.existsSync(filePath)) return null;

  const content = fs.readFileSync(filePath, 'utf-8');

  // For page.tsx: extract the const analise/analisePT: ... = { ... } block
  // For data-{locale}.ts: extract export const analise: ... = { ... }

  // Strategy: use a bracket-matching parser to find the object
  let startIdx = -1;

  // Try multiple variable name patterns
  const patterns = [
    /const\s+analise\s*:\s*\w+\s*=\s*\{/,
    /const\s+analisePT\s*:\s*\w+\s*=\s*\{/,
    /const\s+data\s*:\s*\w+\s*=\s*\{/,
    /export\s+const\s+analise\s*:\s*\w+\s*=\s*\{/,
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match && match.index !== undefined) {
      startIdx = content.indexOf('{', match.index);
      break;
    }
  }

  if (startIdx === -1) return null;

  // Bracket-matching to find the closing brace
  let depth = 0;
  let endIdx = -1;
  let inString = false;
  let stringChar = '';
  let escaped = false;

  for (let i = startIdx; i < content.length; i++) {
    const ch = content[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      escaped = true;
      continue;
    }

    if (inString) {
      if (ch === stringChar) inString = false;
      continue;
    }

    if (ch === "'" || ch === '"' || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }

    if (ch === '{' || ch === '[') depth++;
    else if (ch === '}' || ch === ']') {
      depth--;
      if (depth === 0) {
        endIdx = i;
        break;
      }
    }
  }

  if (endIdx === -1) return null;

  let objStr = content.substring(startIdx, endIdx + 1);

  // Clean TS-specific syntax for JSON eval:
  // 1. Remove trailing commas before } or ]
  objStr = objStr.replace(/,(\s*[}\]])/g, '$1');
  // 2. Convert single-quoted strings to double-quoted (rough)
  // 3. Remove type assertions "as Type"

  // Use Function constructor to eval as JS (safer than eval, runs in isolated scope)
  try {
    const fn = new Function(`return (${objStr});`);
    return fn();
  } catch {
    // If direct eval fails, try cleaning more aggressively
    try {
      // Remove TypeScript type annotations in object keys
      const cleaned = objStr
        .replace(/as\s+\w+(\[\])?\s*[,}\]]/g, (m) => m.slice(m.indexOf(',') >= 0 ? m.indexOf(',') : m.indexOf('}') >= 0 ? m.indexOf('}') : m.indexOf(']')))
        .replace(/\/\/[^\n]*/g, '') // remove single-line comments
        .replace(/\/\*[\s\S]*?\*\//g, ''); // remove multi-line comments
      const fn2 = new Function(`return (${cleaned});`);
      return fn2();
    } catch (e2) {
      console.error(`  Failed to parse ${filePath}: ${(e2 as Error).message}`);
      return null;
    }
  }
}

// ═══════════════════════════════════════════════════════════
// Detect analysis type from the page.tsx imports
// ═══════════════════════════════════════════════════════════

function detectAnalysisType(pagePath: string): 'full_single' | 'prelims' | 'unknown' {
  const content = fs.readFileSync(pagePath, 'utf-8');
  if (content.includes('FullAnalysisView')) return 'full_single';
  if (content.includes('PrelimsAnalysisView')) return 'prelims';
  return 'unknown';
}

// ═══════════════════════════════════════════════════════════
// Build metadata from the analysis object
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
// Parse Portuguese date strings to ISO dates
// ═══════════════════════════════════════════════════════════

const PT_MONTHS: Record<string, string> = {
  'janeiro': '01', 'fevereiro': '02', 'marco': '03', 'abril': '04',
  'maio': '05', 'junho': '06', 'julho': '07', 'agosto': '08',
  'setembro': '09', 'outubro': '10', 'novembro': '11', 'dezembro': '12',
};

function parsePtDate(dateStr: string | null): string | null {
  if (!dateStr) return null;
  // Format: "4 de Abril, 2026" or "28 de Marco, 2026"
  const match = dateStr.match(/(\d{1,2})\s+de\s+(\w+),?\s+(\d{4})/i);
  if (!match) return null;
  const day = match[1].padStart(2, '0');
  const monthName = match[2].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const month = PT_MONTHS[monthName];
  if (!month) return null;
  return `${match[3]}-${month}-${day}`;
}

type LocaleCode = 'en' | 'es' | 'fr';

interface AnalysisRow {
  slug: string;
  titulo: string;
  subtitulo: string | null;
  evento_nome: string | null;
  evento_data: string | null;
  evento_local: string | null;
  categoria_peso: string | null;
  num_rounds: number;
  is_titulo: boolean;
  analysis_type: string;
  status: string;
  // JSONB PT columns (authoritative for PT; non-PT lives in analises_content_locales)
  full_analysis: unknown | null;
  prelims_analysis: unknown | null;
  // Prediction tracking
  predicted_winner_name: string | null;
  predicted_winner_side: string | null;
  predicted_method: string | null;
  confidence_score: number | null;
  // Translations (written to analises_content_locales, not to analises)
  locales: Partial<Record<LocaleCode, { full?: unknown; prelims?: unknown }>>;
}

function buildRow(slug: string, data: Record<string, unknown>, type: string): AnalysisRow {
  const row: AnalysisRow = {
    slug,
    titulo: (data.titulo as string) || slug,
    subtitulo: (data.subtitulo as string) || null,
    evento_nome: null,
    evento_data: null,
    evento_local: null,
    categoria_peso: (data.categoria_peso as string) || null,
    num_rounds: (data.num_rounds as number) || 3,
    is_titulo: (data.is_titulo as boolean) || false,
    analysis_type: type,
    status: 'publicado',
    full_analysis: null,
    prelims_analysis: null,
    locales: {},
    predicted_winner_name: null,
    predicted_winner_side: null,
    predicted_method: null,
    confidence_score: null,
  };

  // Extract event info from hero section or top-level
  if (type === 'full_single' && data.full_analysis) {
    const fa = data.full_analysis as Record<string, unknown>;
    const hero = fa.hero as Record<string, unknown> | undefined;
    if (hero) {
      row.evento_nome = (hero.evento_nome as string) || null;
      row.evento_data = (hero.evento_data as string) || null;
      row.evento_local = (hero.evento_local as string) || null;
      row.categoria_peso = (hero.categoria_peso as string) || row.categoria_peso;
      row.num_rounds = (hero.num_rounds as number) || row.num_rounds;
    }
    row.full_analysis = fa;

    // Extract prediction
    const prev = fa.previsao_final as Record<string, unknown> | undefined;
    if (prev) {
      row.predicted_winner_name = (prev.winner_name as string) || null;
      row.predicted_winner_side = (prev.winner_side as string) || null;
      row.predicted_method = (prev.predicted_method as string) || null;
      row.confidence_score = (prev.confidence_score as number) || null;
    }
  } else if (type === 'prelims' && data.prelims_analysis) {
    const pa = data.prelims_analysis as Record<string, unknown>;
    const hero = pa.hero as Record<string, unknown> | undefined;
    if (hero) {
      row.evento_nome = (hero.evento_nome as string) || null;
      row.evento_data = (hero.evento_data as string) || null;
      row.categoria_peso = (hero.categoria_peso as string) || row.categoria_peso;
      row.num_rounds = (hero.num_rounds as number) || row.num_rounds;
    }
    row.prelims_analysis = pa;

    // Extract prediction
    const prev = pa.previsao_final as Record<string, unknown> | undefined;
    if (prev) {
      row.predicted_winner_name = (prev.winner_name as string) || null;
      row.predicted_winner_side = (prev.winner_side as string) || null;
      row.predicted_method = (prev.predicted_method as string) || null;
      row.confidence_score = (prev.confidence_score as number) || null;
    }
  }

  // Fallback event info from top-level fields
  if (!row.evento_nome) row.evento_nome = (data.evento_nome as string) || null;
  if (!row.evento_data) row.evento_data = (data.evento_data as string) || null;
  if (!row.evento_local) row.evento_local = (data.evento_local as string) || null;

  // Convert PT date string to ISO for the timestamp column
  row.evento_data = parsePtDate(row.evento_data);

  return row;
}

// ═══════════════════════════════════════════════════════════
// UPSERT into database
// ═══════════════════════════════════════════════════════════

async function upsertAnalysis(row: AnalysisRow): Promise<void> {
  const sql = `
    INSERT INTO analises (
      slug, titulo, subtitulo, evento_nome, evento_data, evento_local,
      categoria_peso, num_rounds, is_titulo, analysis_type, status,
      full_analysis, prelims_analysis,
      predicted_winner_name, predicted_winner_side, predicted_method, confidence_score
    ) VALUES (
      $1, $2, $3, $4, $5, $6,
      $7, $8, $9, $10, $11,
      $12, $13,
      $14, $15, $16, $17
    )
    ON CONFLICT (slug) DO UPDATE SET
      titulo = EXCLUDED.titulo,
      subtitulo = EXCLUDED.subtitulo,
      evento_nome = EXCLUDED.evento_nome,
      evento_data = EXCLUDED.evento_data,
      evento_local = EXCLUDED.evento_local,
      categoria_peso = EXCLUDED.categoria_peso,
      num_rounds = EXCLUDED.num_rounds,
      is_titulo = EXCLUDED.is_titulo,
      analysis_type = EXCLUDED.analysis_type,
      status = EXCLUDED.status,
      full_analysis = COALESCE(EXCLUDED.full_analysis, analises.full_analysis),
      prelims_analysis = COALESCE(EXCLUDED.prelims_analysis, analises.prelims_analysis),
      predicted_winner_name = COALESCE(EXCLUDED.predicted_winner_name, analises.predicted_winner_name),
      predicted_winner_side = COALESCE(EXCLUDED.predicted_winner_side, analises.predicted_winner_side),
      predicted_method = COALESCE(EXCLUDED.predicted_method, analises.predicted_method),
      confidence_score = COALESCE(EXCLUDED.confidence_score, analises.confidence_score),
      updated_at = NOW()
    RETURNING id
  `;

  const toJson = (v: unknown) => v ? JSON.stringify(v) : null;

  const { rows } = await pool.query<{ id: string }>(sql, [
    row.slug, row.titulo, row.subtitulo, row.evento_nome, row.evento_data, row.evento_local,
    row.categoria_peso, row.num_rounds, row.is_titulo, row.analysis_type, row.status,
    toJson(row.full_analysis), toJson(row.prelims_analysis),
    row.predicted_winner_name, row.predicted_winner_side,
    row.predicted_method, row.confidence_score,
  ]);

  const analiseId = rows[0]?.id;
  if (!analiseId) return;

  // Upsert translations into analises_content_locales
  for (const [locale, payload] of Object.entries(row.locales)) {
    if (!payload) continue;
    if (payload.full) {
      await pool.query(
        `INSERT INTO analises_content_locales (analise_id, locale, content_type, content)
         VALUES ($1, $2, 'full_analysis', $3)
         ON CONFLICT (analise_id, locale, content_type)
         DO UPDATE SET content = EXCLUDED.content, updated_at = NOW()`,
        [analiseId, locale, toJson(payload.full)],
      );
    }
    if (payload.prelims) {
      await pool.query(
        `INSERT INTO analises_content_locales (analise_id, locale, content_type, content)
         VALUES ($1, $2, 'prelims_analysis', $3)
         ON CONFLICT (analise_id, locale, content_type)
         DO UPDATE SET content = EXCLUDED.content, updated_at = NOW()`,
        [analiseId, locale, toJson(payload.prelims)],
      );
    }
  }
}

// ═══════════════════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════════════════

async function main() {
  const eventFilter = process.argv.includes('--event')
    ? process.argv[process.argv.indexOf('--event') + 1]
    : null;

  console.log(`\n🔄 Hydrating analyses from ${ANALISE_DIR}`);
  if (eventFilter) console.log(`   Filtering to event slug containing: ${eventFilter}`);

  const dirs = fs.readdirSync(ANALISE_DIR).filter((d) => {
    if (d === '[slug]' || d === 'evento') return false;
    const fullPath = path.join(ANALISE_DIR, d);
    return fs.statSync(fullPath).isDirectory() && fs.existsSync(path.join(fullPath, 'page.tsx'));
  });

  console.log(`   Found ${dirs.length} analysis directories\n`);

  if (dirs.length === 0) {
    const isBuild = process.env.npm_lifecycle_event === 'build' || process.env.VERCEL === '1';
    console.warn(`\n⚠️  WARNING: Zero analysis directories found in ${ANALISE_DIR}`);
    if (!isBuild) {
      console.error('❌ Aborting: no analysis directories found.');
      await pool.end();
      process.exit(1);
    }
    console.warn('   (build mode: continuing gracefully)');
    await pool.end();
    process.exit(0);
  }

  let inserted = 0;
  let skipped = 0;
  let failed = 0;

  for (const slug of dirs) {
    const dir = path.join(ANALISE_DIR, slug);
    const pagePath = path.join(dir, 'page.tsx');

    // Filter by event if specified
    if (eventFilter && !slug.includes(eventFilter)) {
      // Check if this analysis belongs to the event by reading its content
      const content = fs.readFileSync(pagePath, 'utf-8');
      const eventNameMatch = content.match(/evento_nome['":\s]+['"]([^'"]+)['"]/);
      if (!eventNameMatch || !eventNameMatch[1].toLowerCase().includes(eventFilter.toLowerCase())) {
        skipped++;
        continue;
      }
    }

    const type = detectAnalysisType(pagePath);
    if (type === 'unknown') {
      console.log(`  ⚠ ${slug}: unknown analysis type, skipping`);
      skipped++;
      continue;
    }

    console.log(`  📄 ${slug} (${type})`);

    // Extract PT data from page.tsx
    const ptData = extractAnaliseObject(pagePath) as Record<string, unknown> | null;
    if (!ptData) {
      console.log(`     ❌ Failed to parse page.tsx`);
      failed++;
      continue;
    }

    const row = buildRow(slug, ptData, type);

    // Extract translations into the locales map (written to analises_content_locales)
    for (const locale of ['en', 'es', 'fr'] as const) {
      const dataPath = path.join(dir, `data-${locale}.ts`);
      const localeData = extractAnaliseObject(dataPath) as Record<string, unknown> | null;
      if (localeData) {
        if (type === 'full_single' && localeData.full_analysis) {
          row.locales[locale] = { ...row.locales[locale], full: localeData.full_analysis };
        } else if (type === 'prelims' && localeData.prelims_analysis) {
          row.locales[locale] = { ...row.locales[locale], prelims: localeData.prelims_analysis };
        }
        console.log(`     ✅ ${locale}`);
      } else {
        console.log(`     ⬜ ${locale} (no file or parse failed)`);
      }
    }

    try {
      await upsertAnalysis(row);
      inserted++;
      console.log(`     ✅ DB upserted`);
    } catch (err) {
      console.error(`     ❌ DB error: ${(err as Error).message}`);
      failed++;
    }
  }

  const isBuild = process.env.npm_lifecycle_event === 'build' || process.env.VERCEL === '1';

  if (dirs.length > 0 && inserted === 0) {
    console.warn(`\n⚠️  WARNING: Found ${dirs.length} analysis directories but inserted 0 records.`);
    console.warn('   Check if analyses are already in DB or if there is a data mismatch.');
  }

  const exitCode = (failed > 0 || (dirs.length > 0 && inserted === 0 && !isBuild)) ? 1 : 0;

  console.log(`\n📊 HYDRATION_SUMMARY=${JSON.stringify({ dirs: dirs.length, inserted, skipped, failed, exit_code: exitCode })}`);
  console.log(`\n✅ Done: ${inserted} upserted, ${skipped} skipped, ${failed} failed`);
  await pool.end();
  process.exit(exitCode);
}

main().catch((err) => {
  // During build, DB may not be available (e.g. local dev without DB).
  // Log the error but don't fail the build — the dynamic [slug] page
  // will simply return 404 until the DB is hydrated.
  const isBuild = process.env.npm_lifecycle_event === 'build' || process.env.VERCEL === '1';
  if (isBuild) {
    console.warn('\n⚠️  Hydration skipped (DB unavailable during build):', (err as Error).message);
    console.warn('⚠️  HYDRATION SKIPPED: DB unavailable. Pages will return 404 until DB is hydrated manually.');
    console.warn('   Run: npm run hydrate');
    process.exit(0);
  }
  console.error('Fatal error:', err);
  process.exit(1);
});
