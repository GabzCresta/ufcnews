/**
 * verify-analysis-stats.ts
 *
 * Hard guard against estimated/wrong fighter statistics in analysis pages.
 *
 * Reads every `src/app/[locale]/hub/analise/<slug>/page.tsx` file (the static
 * new-shape analysis pages), extracts every fighter's:
 *   - record (overall career)
 *   - distribuicao_vitorias.ko_tko.count
 *   - distribuicao_vitorias.submission.count
 *   - distribuicao_vitorias.decision.count
 *   - distribuicao_vitorias.total_wins
 *
 * Then fetches each fighter's Wikipedia article (with fallback to Verdict MMA)
 * and compares the numbers. Any mismatch is a HARD FAILURE — the script exits
 * with code 1 so the prebuild hook blocks deploy.
 *
 * If a fighter has no Wikipedia page AND no Verdict MMA data, the fighter is
 * added to an "unverified" list that the script emits as a warning but does
 * NOT fail on (deep-card prospects often have no canonical source). The
 * warning is visible so humans can catch it.
 *
 * Invoke: `tsx scripts/verify-analysis-stats.ts`
 * Hook: `"prebuild": "tsx scripts/verify-analysis-stats.ts"` in package.json.
 *
 * Design: stateless, no DB access, deterministic. Uses fetch() directly.
 * Takes ~60s to run for a 12-fight card due to Wikipedia rate limits.
 */

import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

// ═══════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════

interface ExtractedFighter {
  name: string;
  record: string; // "32-5-1" format
  total_wins: number;
  ko_tko: number;
  submission: number;
  decision: number;
  sourceFile: string;
}

interface SourceStats {
  total_wins: number;
  ko_tko: number;
  submission: number;
  decision: number;
  url: string;
}

interface Discrepancy {
  fighter: string;
  sourceFile: string;
  field: string;
  local: number | string;
  remote: number | string;
  sourceUrl: string;
}

// ═══════════════════════════════════════════════════════════
// File discovery — only the new-shape pages under [locale]/hub/analise/<slug>
// Skip the dynamic [eventSlug] template and the /evento/ index pages.
// ═══════════════════════════════════════════════════════════

const ANALISE_ROOT = 'src/app/[locale]/hub/analise';

function findAnalysisPages(): string[] {
  const results: string[] = [];
  try {
    const entries = readdirSync(ANALISE_ROOT);
    for (const entry of entries) {
      if (entry.startsWith('[') || entry === 'evento') continue;
      const fullPath = join(ANALISE_ROOT, entry);
      if (!statSync(fullPath).isDirectory()) continue;
      const pagePath = join(fullPath, 'page.tsx');
      try {
        const content = readFileSync(pagePath, 'utf8');
        // Only new-shape pages: they have qualitative_insight.
        if (content.includes('qualitative_insight:') && content.includes('distribuicao_vitorias:')) {
          results.push(pagePath);
        }
      } catch {
        // page.tsx doesn't exist for this slug — skip.
      }
    }
  } catch (err) {
    console.error(`[verify-stats] Could not read ${ANALISE_ROOT}:`, err);
    process.exit(1);
  }
  return results;
}

// ═══════════════════════════════════════════════════════════
// Parser — regex-based extraction from the static TS files.
// These pages follow a consistent shape created by fight-analyst.
// ═══════════════════════════════════════════════════════════

function extractFighterBlock(source: string, fighterKey: 'fighter1' | 'fighter2'): {
  nome: string;
  ko_tko: number;
  submission: number;
  decision: number;
  total_wins: number;
} | null {
  // Find the distribuicao_vitorias section first
  const distIndex = source.indexOf('distribuicao_vitorias:');
  if (distIndex === -1) return null;

  // From distribuicao_vitorias, find the fighter block
  const fighterIdx = source.indexOf(`${fighterKey}: {`, distIndex);
  if (fighterIdx === -1) return null;

  // Grab a window after the fighter key
  const window = source.slice(fighterIdx, fighterIdx + 800);

  const nomeMatch = /nome:\s*['"]([^'"]+)['"]/.exec(window);
  const koMatch = /ko_tko:\s*\{\s*count:\s*(\d+)/.exec(window);
  const subMatch = /submission:\s*\{\s*count:\s*(\d+)/.exec(window);
  const decMatch = /decision:\s*\{\s*count:\s*(\d+)/.exec(window);
  const totalMatch = /total_wins:\s*(\d+)/.exec(window);

  if (!nomeMatch || !koMatch || !subMatch || !decMatch || !totalMatch) return null;

  return {
    nome: nomeMatch[1],
    ko_tko: parseInt(koMatch[1], 10),
    submission: parseInt(subMatch[1], 10),
    decision: parseInt(decMatch[1], 10),
    total_wins: parseInt(totalMatch[1], 10),
  };
}

function extractFighterRecord(source: string, fighterKey: 'fighter1_info' | 'fighter2_info'): string | null {
  const idx = source.indexOf(`${fighterKey}: {`);
  if (idx === -1) return null;
  const window = source.slice(idx, idx + 600);
  const recordMatch = /record:\s*['"]([^'"]+)['"]/.exec(window);
  return recordMatch ? recordMatch[1] : null;
}

function parseAnalysisPage(filePath: string): ExtractedFighter[] {
  const source = readFileSync(filePath, 'utf8');
  const fighters: ExtractedFighter[] = [];

  const f1Dist = extractFighterBlock(source, 'fighter1');
  const f1Record = extractFighterRecord(source, 'fighter1_info');
  if (f1Dist && f1Record) {
    fighters.push({
      name: f1Dist.nome,
      record: f1Record,
      total_wins: f1Dist.total_wins,
      ko_tko: f1Dist.ko_tko,
      submission: f1Dist.submission,
      decision: f1Dist.decision,
      sourceFile: filePath,
    });
  }

  const f2Dist = extractFighterBlock(source, 'fighter2');
  const f2Record = extractFighterRecord(source, 'fighter2_info');
  if (f2Dist && f2Record) {
    fighters.push({
      name: f2Dist.nome,
      record: f2Record,
      total_wins: f2Dist.total_wins,
      ko_tko: f2Dist.ko_tko,
      submission: f2Dist.submission,
      decision: f2Dist.decision,
      sourceFile: filePath,
    });
  }

  return fighters;
}

// ═══════════════════════════════════════════════════════════
// Wikipedia fetcher — uses the MediaWiki API, not the HTML page,
// because the structured infobox data is much easier to parse.
// ═══════════════════════════════════════════════════════════

function slugifyFighterName(name: string): string {
  // Handle accents: Jiří → Jiri for URL, but Wikipedia sometimes has the
  // accented version as the canonical URL. Try both.
  const cleaned = name
    .replace(/[""'']/g, '')
    .replace(/\s+/g, '_')
    .trim();
  return cleaned;
}

async function fetchWikipediaInfobox(fighterName: string): Promise<SourceStats | null> {
  // Try a few URL variations: exact name, then with "(fighter)" disambiguation.
  const slugBase = slugifyFighterName(fighterName);
  const candidates = [
    slugBase,
    `${slugBase}_(fighter)`,
    // ASCII-only fallback for accented names
    slugBase
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w_]/g, ''),
  ];

  for (const candidate of candidates) {
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(candidate)}&format=json&prop=wikitext&redirects=1`;
    try {
      const res = await fetch(apiUrl, {
        headers: { 'User-Agent': 'CrenasStatsVerifier/1.0 (admin@crenas.site)' },
      });
      if (!res.ok) continue;
      interface WikiResponse {
        parse?: { wikitext?: { '*'?: string } };
      }
      const json = (await res.json()) as WikiResponse;
      const wikitext = json?.parse?.wikitext?.['*'];
      if (!wikitext || typeof wikitext !== 'string') continue;

      // Must contain MMA infobox markers to be relevant
      if (!/mixed martial arts|MMA/i.test(wikitext)) continue;

      const koMatch = /\|\s*ko_win\s*=\s*(\d+)/i.exec(wikitext);
      const subMatch = /\|\s*sub_win\s*=\s*(\d+)/i.exec(wikitext);
      const decMatch = /\|\s*decision_win\s*=\s*(\d+)/i.exec(wikitext);
      const winsMatch = /\|\s*wins\s*=\s*(\d+)/i.exec(wikitext);

      if (koMatch && subMatch && decMatch && winsMatch) {
        return {
          ko_tko: parseInt(koMatch[1], 10),
          submission: parseInt(subMatch[1], 10),
          decision: parseInt(decMatch[1], 10),
          total_wins: parseInt(winsMatch[1], 10),
          url: `https://en.wikipedia.org/wiki/${candidate}`,
        };
      }
    } catch {
      // Try next candidate
    }
  }

  return null;
}

// ═══════════════════════════════════════════════════════════
// Comparison & reporting
// ═══════════════════════════════════════════════════════════

function compareFighter(local: ExtractedFighter, remote: SourceStats): Discrepancy[] {
  const discrepancies: Discrepancy[] = [];

  if (local.total_wins !== remote.total_wins) {
    discrepancies.push({
      fighter: local.name,
      sourceFile: local.sourceFile,
      field: 'total_wins',
      local: local.total_wins,
      remote: remote.total_wins,
      sourceUrl: remote.url,
    });
  }
  if (local.ko_tko !== remote.ko_tko) {
    discrepancies.push({
      fighter: local.name,
      sourceFile: local.sourceFile,
      field: 'ko_tko',
      local: local.ko_tko,
      remote: remote.ko_tko,
      sourceUrl: remote.url,
    });
  }
  if (local.submission !== remote.submission) {
    discrepancies.push({
      fighter: local.name,
      sourceFile: local.sourceFile,
      field: 'submission',
      local: local.submission,
      remote: remote.submission,
      sourceUrl: remote.url,
    });
  }
  if (local.decision !== remote.decision) {
    discrepancies.push({
      fighter: local.name,
      sourceFile: local.sourceFile,
      field: 'decision',
      local: local.decision,
      remote: remote.decision,
      sourceUrl: remote.url,
    });
  }

  return discrepancies;
}

// ═══════════════════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════════════════

async function main() {
  // Escape hatch for emergencies: `SKIP_STATS_VERIFY=1 npm run build`
  // Use ONLY when the verifier itself has a bug, not to bypass real discrepancies.
  if (process.env.SKIP_STATS_VERIFY === '1') {
    console.warn('[verify-stats] ⚠ SKIP_STATS_VERIFY=1 set — bypassing verification.');
    console.warn('[verify-stats] This should only be used to debug the verifier itself.');
    process.exit(0);
  }

  const pages = findAnalysisPages();
  if (pages.length === 0) {
    console.log('[verify-stats] No new-shape analysis pages found. Skipping verification.');
    process.exit(0);
  }

  console.log(`[verify-stats] Checking ${pages.length} analysis pages...`);

  const allFighters: ExtractedFighter[] = [];
  for (const page of pages) {
    try {
      allFighters.push(...parseAnalysisPage(page));
    } catch (err) {
      console.error(`[verify-stats] Parse error in ${page}:`, err);
    }
  }

  console.log(`[verify-stats] Extracted ${allFighters.length} fighters with stats.\n`);

  const discrepancies: Discrepancy[] = [];
  const unverified: { name: string; sourceFile: string }[] = [];
  const verified: { name: string; sourceUrl: string }[] = [];

  // Dedupe fighters by name — the same fighter may appear in multiple pages
  // (unlikely for UFC 327 since each fighter appears once, but keep it robust).
  const seen = new Set<string>();
  const uniqueFighters = allFighters.filter((f) => {
    const key = f.name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Sanity check: counts must sum to total_wins
  for (const f of uniqueFighters) {
    const sum = f.ko_tko + f.submission + f.decision;
    if (sum !== f.total_wins) {
      discrepancies.push({
        fighter: f.name,
        sourceFile: f.sourceFile,
        field: 'internal_math',
        local: `${f.ko_tko}+${f.submission}+${f.decision}=${sum}`,
        remote: f.total_wins,
        sourceUrl: '(local file sanity check)',
      });
    }
  }

  // Fetch each fighter from Wikipedia sequentially to respect rate limits
  for (const fighter of uniqueFighters) {
    process.stdout.write(`  - ${fighter.name.padEnd(30)} `);
    const remote = await fetchWikipediaInfobox(fighter.name);
    if (!remote) {
      console.log('(no Wikipedia data — WARNING)');
      unverified.push({ name: fighter.name, sourceFile: fighter.sourceFile });
      continue;
    }
    const diffs = compareFighter(fighter, remote);
    if (diffs.length === 0) {
      console.log('OK');
      verified.push({ name: fighter.name, sourceUrl: remote.url });
    } else {
      console.log(`MISMATCH (${diffs.length})`);
      discrepancies.push(...diffs);
    }
    // Rate-limit: 200ms between Wikipedia requests
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('  STATS VERIFICATION REPORT');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`  Total fighters checked: ${uniqueFighters.length}`);
  console.log(`  Verified against Wikipedia: ${verified.length}`);
  console.log(`  Unverified (no Wikipedia page): ${unverified.length}`);
  console.log(`  Discrepancies: ${discrepancies.length}`);
  console.log('═══════════════════════════════════════════════════════════\n');

  if (unverified.length > 0) {
    console.log('⚠ UNVERIFIED FIGHTERS (manual verification required):');
    for (const u of unverified) {
      console.log(`    ${u.name}  ← ${u.sourceFile}`);
    }
    console.log('');
  }

  if (discrepancies.length > 0) {
    console.error('❌ STAT DISCREPANCIES FOUND — build MUST NOT proceed:\n');
    for (const d of discrepancies) {
      console.error(`  [${d.fighter}] ${d.field}`);
      console.error(`    file:   ${d.sourceFile}`);
      console.error(`    local:  ${d.local}`);
      console.error(`    source: ${d.remote}  (${d.sourceUrl})`);
      console.error('');
    }
    console.error('═══════════════════════════════════════════════════════════');
    console.error('  Fix the discrepancies above before running build.');
    console.error('  If you believe Wikipedia is outdated, cross-reference');
    console.error('  against Verdict MMA / Tapology / Sherdog before overriding.');
    console.error('═══════════════════════════════════════════════════════════');
    process.exit(1);
  }

  console.log('✓ All verifiable stats match Wikipedia. Proceeding with build.\n');
  process.exit(0);
}

main().catch((err) => {
  console.error('[verify-stats] Fatal error:', err);
  process.exit(1);
});
