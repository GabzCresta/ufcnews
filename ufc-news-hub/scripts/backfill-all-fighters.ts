/**
 * Backfill multi-source de fotos de lutadores faltantes.
 *
 * Fontes em cascata: Cloudfront UFC → Wikipedia → Sherdog.
 * Primeira que responder imagem válida vence.
 *
 * Resume-safe: pega apenas `imagem_url IS NULL`.
 * Re-execução pula quem já tem foto.
 *
 * Roda como task unit: processa N lutadores em paralelo (padrão 3),
 * respeita rate limits de cada fonte, logs em stdout.
 */

import { Pool } from 'pg';

const DATABASE_URL =
  process.env.DATABASE_URL ||
  'postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub';

const CONCURRENCY = 3;
const HTTP_TIMEOUT_MS = 6000;

const DELAY = {
  cloudfront_probe: 40,
  wikipedia: 450,
  sherdog: 1800,
};

const UA_BROWSER =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const pool = new Pool({ connectionString: DATABASE_URL, max: 5 });

// ═════════════════════════════════════════════════════════════
// Helpers
// ═════════════════════════════════════════════════════════════

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function normalizeName(nome: string): {
  firstCap: string;
  lastCap: string;
  FIRST: string;
  LAST: string;
} {
  const clean = nome
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[''`]/g, '')
    .trim();
  const parts = clean.split(/\s+/);
  const first = parts[0] ?? clean;
  const last = parts.length > 1 ? parts[parts.length - 1] : first;
  const cap = (s: string) =>
    s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  return {
    firstCap: cap(first),
    lastCap: cap(last),
    FIRST: first.toUpperCase(),
    LAST: last.toUpperCase(),
  };
}

async function fetchWithTimeout(
  url: string,
  init: RequestInit = {},
  timeoutMs = HTTP_TIMEOUT_MS
): Promise<Response | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function urlReturnsImage(url: string): Promise<boolean> {
  const res = await fetchWithTimeout(url, { method: 'HEAD' }, 4000);
  if (!res) return false;
  if (!res.ok) return false;
  const ct = (res.headers.get('content-type') || '').toLowerCase();
  return ct.startsWith('image/');
}

// ═════════════════════════════════════════════════════════════
// Source 1 — UFC Cloudfront CDN (pattern guess)
// ═════════════════════════════════════════════════════════════

function cloudfrontCandidates(nome: string): string[] {
  const { firstCap, lastCap, FIRST, LAST } = normalizeName(nome);
  const slug = `${firstCap}_${lastCap}`;
  const base = 'https://dmxg5wxfqgb4u.cloudfront.net';

  const legacy = [
    `${base}/image/fighter_images/${slug}/${LAST}_${FIRST}_L.png`,
    `${base}/image/fighter_images/${slug}/${LAST}_${FIRST}_R.png`,
    `${base}/image/fighter_images/${slug}/${LAST}_${FIRST}.png`,
    `${base}/image/fighter_images/${slug}/${LAST}_${FIRST}_BELT_L.png`,
    `${base}/image/fighter_images/${slug}/${LAST}_${FIRST}_BELT_R.png`,
  ];

  // Recent month pattern (catches fighters from 2024-2026 that didn't match legacy)
  const now = new Date();
  const recent: string[] = [];
  for (let i = 0; i < 18; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const ym = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    recent.push(`${base}/${ym}/${LAST}_${FIRST}.png`);
    recent.push(`${base}/${ym}/${LAST}_${FIRST}_BELT.png`);
  }

  return [...legacy, ...recent];
}

async function tryCloudfront(nome: string): Promise<string | null> {
  const candidates = cloudfrontCandidates(nome);
  // Parallel probe in batches of 5
  for (let i = 0; i < candidates.length; i += 5) {
    const batch = candidates.slice(i, i + 5);
    const results = await Promise.all(
      batch.map(async (url) => ({
        url,
        ok: await urlReturnsImage(url),
      }))
    );
    const hit = results.find((r) => r.ok);
    if (hit) return hit.url;
    if (DELAY.cloudfront_probe > 0) await sleep(DELAY.cloudfront_probe);
  }
  return null;
}

// ═════════════════════════════════════════════════════════════
// Source 2 — Wikipedia REST API
// ═════════════════════════════════════════════════════════════

interface WikiPage {
  original?: { source?: string };
  pageimage?: string;
  missing?: string;
}

async function tryWikipedia(nome: string): Promise<string | null> {
  const title = encodeURIComponent(nome.replace(/\s+/g, '_'));
  const url =
    `https://en.wikipedia.org/w/api.php?action=query&titles=${title}` +
    `&prop=pageimages&format=json&piprop=original&pilicense=any&redirects=1`;

  const res = await fetchWithTimeout(url, {
    headers: {
      'User-Agent':
        'CrenasArena/1.0 (https://crenas.site; contact@crenas.site) backfill-bot',
    },
  });
  if (!res || !res.ok) return null;

  try {
    const data = (await res.json()) as {
      query?: { pages?: Record<string, WikiPage> };
    };
    const pages = data.query?.pages ?? {};
    const page = Object.values(pages)[0];
    if (!page || page.missing !== undefined) return null;
    const src = page.original?.source;
    if (src && /\.(png|jpg|jpeg|webp)(\?|$)/i.test(src)) return src;
    return null;
  } catch {
    return null;
  }
}

// ═════════════════════════════════════════════════════════════
// Source 3 — Sherdog
// ═════════════════════════════════════════════════════════════

async function trySherdog(nome: string): Promise<string | null> {
  const search = encodeURIComponent(nome);
  const searchRes = await fetchWithTimeout(
    `https://www.sherdog.com/stats/fightfinder?SearchTxt=${search}`,
    { headers: { 'User-Agent': UA_BROWSER } }
  );
  if (!searchRes || !searchRes.ok) return null;
  const html = await searchRes.text();

  // Find fighter links. Matches names tolerantly.
  const linkRe = /href="(\/fighter\/[A-Za-z0-9%-]+-\d+)"/g;
  const links: string[] = [];
  let lm: RegExpExecArray | null;
  while ((lm = linkRe.exec(html)) !== null) {
    links.push(lm[1]);
    if (links.length >= 10) break;
  }
  if (links.length === 0) return null;

  // Score candidates by last-name match
  const { LAST } = normalizeName(nome);
  const best =
    links.find((link) => link.toUpperCase().includes(LAST)) ?? links[0];

  await sleep(500);

  const fighterRes = await fetchWithTimeout(
    `https://www.sherdog.com${best}`,
    { headers: { 'User-Agent': UA_BROWSER } }
  );
  if (!fighterRes || !fighterRes.ok) return null;
  const fighterHtml = await fighterRes.text();

  // Try meta og:image first (most reliable)
  const og = fighterHtml.match(
    /<meta\s+property="og:image"\s+content="([^"]+)"/i
  );
  if (og && og[1] && /\.(png|jpg|jpeg|webp)/i.test(og[1])) {
    const src = og[1];
    return src.startsWith('http') ? src : `https://www.sherdog.com${src}`;
  }

  // Fallback to profile-image class
  const classMatch = fighterHtml.match(
    /<img[^>]*class="[^"]*profile-image[^"]*"[^>]*src="([^"]+)"/i
  );
  if (classMatch && classMatch[1]) {
    const src = classMatch[1];
    return src.startsWith('http') ? src : `https://www.sherdog.com${src}`;
  }

  return null;
}

// ═════════════════════════════════════════════════════════════
// Pipeline
// ═════════════════════════════════════════════════════════════

interface Fighter {
  id: string;
  nome: string;
}

interface Resultado {
  source: 'cloudfront' | 'wikipedia' | 'sherdog';
  url: string;
}

async function processOne(fighter: Fighter): Promise<Resultado | null> {
  // 1) Cloudfront — fast, free, no rate limit
  const cf = await tryCloudfront(fighter.nome);
  if (cf) return { source: 'cloudfront', url: cf };

  // 2) Wikipedia
  await sleep(DELAY.wikipedia);
  const wiki = await tryWikipedia(fighter.nome);
  if (wiki) return { source: 'wikipedia', url: wiki };

  // 3) Sherdog
  await sleep(DELAY.sherdog);
  const sherdog = await trySherdog(fighter.nome);
  if (sherdog) return { source: 'sherdog', url: sherdog };

  return null;
}

async function worker(
  queue: Fighter[],
  stats: Record<string, number>
): Promise<void> {
  while (queue.length > 0) {
    const fighter = queue.shift();
    if (!fighter) break;

    try {
      const result = await processOne(fighter);
      if (result) {
        await pool.query(
          'UPDATE lutadores SET imagem_url = $1 WHERE id = $2',
          [result.url, fighter.id]
        );
        stats.found++;
        stats[result.source] = (stats[result.source] ?? 0) + 1;
        console.log(`[${stats.found + stats.missed}/${stats.total}] OK  ${fighter.nome}  (${result.source})`);
      } else {
        stats.missed++;
        console.log(`[${stats.found + stats.missed}/${stats.total}] --  ${fighter.nome}`);
      }
    } catch (err) {
      stats.errors++;
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`[ERR] ${fighter.nome}: ${msg}`);
    }
  }
}

// ═════════════════════════════════════════════════════════════
// Main
// ═════════════════════════════════════════════════════════════

async function main(): Promise<void> {
  console.log(`[START] ${new Date().toISOString()}`);
  console.log(`Concorrência: ${CONCURRENCY}`);

  const res = await pool.query<Fighter>(
    `SELECT id, nome FROM lutadores
     WHERE imagem_url IS NULL
     ORDER BY
       CASE WHEN ranking_divisao IS NOT NULL THEN 0 ELSE 1 END,
       ranking_divisao NULLS LAST,
       nome`
  );
  const fighters = res.rows;

  console.log(`Total a processar: ${fighters.length}`);
  console.log('');

  const stats: Record<string, number> = {
    total: fighters.length,
    found: 0,
    missed: 0,
    errors: 0,
    cloudfront: 0,
    wikipedia: 0,
    sherdog: 0,
  };

  const queue = [...fighters];
  const workers = Array.from({ length: CONCURRENCY }, () =>
    worker(queue, stats)
  );
  await Promise.all(workers);

  console.log('');
  console.log('══════════════════════════════════════════════════════');
  console.log(' RESULTADO FINAL');
  console.log('══════════════════════════════════════════════════════');
  console.log(`Total processado:   ${stats.total}`);
  console.log(`Fotos recuperadas:  ${stats.found}  (${((stats.found / Math.max(1, stats.total)) * 100).toFixed(1)}%)`);
  console.log(`  ├─ Cloudfront:    ${stats.cloudfront}`);
  console.log(`  ├─ Wikipedia:     ${stats.wikipedia}`);
  console.log(`  └─ Sherdog:       ${stats.sherdog}`);
  console.log(`Não encontrados:    ${stats.missed}`);
  console.log(`Erros:              ${stats.errors}`);
  console.log('');
  console.log(`[END] ${new Date().toISOString()}`);

  await pool.end();
}

main().catch(async (err) => {
  console.error('FATAL:', err);
  try {
    await pool.end();
  } catch { /* noop */ }
  process.exit(1);
});
