import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { query, queryOne } from '@/lib/db';

// Refreshes fighter photos for the upcoming event (fight-week job).
// - Scrapes UFC.com → Wikipedia fallback (same cascade as backfill-photos.ts)
// - Downloads binary, saves to /var/www/crenas-images/fighters/<uuid>-v<n>.<ext>
// - Bumps imagem_versao so clients bust cache with ?v=<n>
// - Updates lutadores.imagem_url to internal /img/fighters/<file>
// - Nginx serves /img/fighters/ with immutable cache
//
// Cron: ter + sex da fight week, called via curl + Authorization CRON_SECRET.

const IMAGE_DIR = process.env.IMAGE_DIR ?? '/var/www/crenas-images/fighters';
const PUBLIC_BASE = '/img/fighters';
const UA = 'Mozilla/5.0 (compatible; CrenasBot/1.0; +https://crenas.site)';

interface Fighter {
  id: string;
  nome: string;
  ufc_slug: string | null;
  imagem_updated_at: string | null;
  imagem_versao: number | null;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

async function fetchText(url: string, timeoutMs = 10_000): Promise<string | null> {
  try {
    const r = await fetch(url, {
      headers: { 'User-Agent': UA },
      signal: AbortSignal.timeout(timeoutMs),
      redirect: 'follow',
    });
    if (!r.ok) return null;
    return r.text();
  } catch { return null; }
}

async function fetchBinary(url: string, timeoutMs = 15_000): Promise<{ buf: Buffer; ext: string } | null> {
  try {
    const r = await fetch(url, {
      headers: { 'User-Agent': UA, Referer: 'https://www.ufc.com/' },
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!r.ok) return null;
    const buf = Buffer.from(await r.arrayBuffer());
    const ct = r.headers.get('content-type') ?? '';
    const ext = ct.includes('jpeg') || ct.includes('jpg') ? 'jpg'
              : ct.includes('webp') ? 'webp'
              : ct.includes('png')  ? 'png'
              : 'bin';
    return { buf, ext };
  } catch { return null; }
}

async function scrapeUfc(slug: string, nome: string): Promise<string | null> {
  const html = await fetchText(`https://www.ufc.com/athlete/${slug}`);
  if (!html) return null;
  const $ = cheerio.load(html);

  // Preferred: athlete_bio_full_body (highest quality, versioned by event)
  const hero = $('img.hero-profile__image').attr('src');
  if (hero && hero.includes('ufc.com')) return hero;

  // Fallback inside athlete page
  const bio = $('img[src*="athlete_bio_full_body"]').attr('src')
           || $('img[src*="event_results_athlete_headshot"]').attr('src')
           || $('img[src*="athlete_bio"]').attr('src');
  if (bio) return bio.startsWith('http') ? bio : `https://ufc.com${bio}`;

  // Last resort — any img whose src includes the uppercase last name
  const last = nome.split(' ').pop()?.toUpperCase();
  if (last) {
    let found: string | null = null;
    $('img').each((_, el) => {
      if (found) return;
      const src = $(el).attr('src') ?? '';
      if (src.toUpperCase().includes(last) && src.includes('ufc.com')) found = src;
    });
    if (found) return found;
  }

  return null;
}

async function scrapeWikipedia(nome: string): Promise<string | null> {
  for (const title of [nome, `${nome} (fighter)`, `${nome} (mixed martial artist)`]) {
    const t = title.replace(/\s+/g, '_');
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(t)}&prop=pageimages&format=json&pithumbsize=600`;
    const txt = await fetchText(url, 7_000);
    if (!txt) continue;
    try {
      const data = JSON.parse(txt) as { query?: { pages?: Record<string, { missing?: boolean; thumbnail?: { source?: string } }> } };
      const pages = data.query?.pages;
      if (!pages) continue;
      for (const page of Object.values(pages)) {
        if (page.missing) continue;
        const thumb = page.thumbnail?.source;
        if (thumb && !thumb.includes('question_mark') && !thumb.includes('no_image')) {
          return thumb;
        }
      }
    } catch { /* swallow */ }
  }
  return null;
}

async function refreshOne(f: Fighter): Promise<{ changed: boolean; source: string; reason: string }> {
  const slug = f.ufc_slug || slugify(f.nome);

  // Source cascade
  let extSourceUrl: string | null = null;
  let source = '';
  extSourceUrl = await scrapeUfc(slug, f.nome);
  if (extSourceUrl) source = 'ufc';
  if (!extSourceUrl) {
    extSourceUrl = await scrapeWikipedia(f.nome);
    if (extSourceUrl) source = 'wiki';
  }
  if (!extSourceUrl) return { changed: false, source: 'none', reason: 'no source' };

  const bin = await fetchBinary(extSourceUrl);
  if (!bin) return { changed: false, source, reason: 'download failed' };

  if (!existsSync(IMAGE_DIR)) await mkdir(IMAGE_DIR, { recursive: true });
  const nextVersion = (f.imagem_versao ?? 0) + 1;
  const filename = `${f.id}-v${nextVersion}.${bin.ext}`;
  const localPath = join(IMAGE_DIR, filename);
  await writeFile(localPath, bin.buf);

  const publicUrl = `${PUBLIC_BASE}/${filename}`;
  await query(
    `UPDATE lutadores
        SET imagem_url = $1,
            imagem_versao = $2,
            imagem_source = $3,
            imagem_updated_at = NOW()
      WHERE id = $4`,
    [publicUrl, nextVersion, source, f.id],
  );

  return { changed: true, source, reason: `saved ${filename}` };
}

async function fightersForEvento(eventoId?: string): Promise<Fighter[]> {
  if (eventoId) {
    return query<Fighter>(
      `SELECT DISTINCT l.id, l.nome, l.ufc_slug, l.imagem_updated_at, l.imagem_versao
         FROM lutadores l
         JOIN lutas lt ON lt.lutador1_id = l.id OR lt.lutador2_id = l.id
        WHERE lt.evento_id = $1`,
      [eventoId],
    );
  }
  // Auto-detect: upcoming event within 7 days
  return query<Fighter>(
    `SELECT DISTINCT l.id, l.nome, l.ufc_slug, l.imagem_updated_at, l.imagem_versao
       FROM lutadores l
       JOIN lutas lt ON lt.lutador1_id = l.id OR lt.lutador2_id = l.id
       JOIN eventos e ON e.id = lt.evento_id
      WHERE e.status IN ('agendado','ao_vivo')
        AND e.data_evento <= NOW() + INTERVAL '7 days'
        AND e.data_evento >= NOW() - INTERVAL '1 day'`,
  );
}

export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization');
  const secret = process.env.CRON_SECRET;
  if (!secret) return NextResponse.json({ error: 'CRON_SECRET not set' }, { status: 503 });
  if (auth !== `Bearer ${secret}`) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const url = new URL(request.url);
  const eventoId = url.searchParams.get('evento_id') || undefined;
  const forceAll = url.searchParams.get('force') === '1';

  const fighters = await fightersForEvento(eventoId);
  if (fighters.length === 0) {
    return NextResponse.json({ ok: true, message: 'no fighters to refresh' });
  }

  const results: Array<{ id: string; nome: string; changed: boolean; source: string; reason: string }> = [];
  let changed = 0;

  for (const f of fighters) {
    // Skip fighters refreshed in last 3 days unless forceAll
    if (!forceAll && !eventoId && f.imagem_updated_at) {
      const ageHours = (Date.now() - new Date(f.imagem_updated_at).getTime()) / 3_600_000;
      if (ageHours < 72) {
        results.push({ id: f.id, nome: f.nome, changed: false, source: 'skip', reason: 'fresh' });
        continue;
      }
    }
    try {
      const r = await refreshOne(f);
      if (r.changed) changed++;
      results.push({ id: f.id, nome: f.nome, ...r });
      // polite throttle
      await new Promise(res => setTimeout(res, 400));
    } catch (err) {
      results.push({ id: f.id, nome: f.nome, changed: false, source: 'error', reason: String(err) });
    }
  }

  return NextResponse.json(
    { ok: true, total: fighters.length, changed, results: results.slice(0, 50) },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
