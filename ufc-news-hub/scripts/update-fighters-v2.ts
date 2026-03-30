/**
 * Script COMPLETO para atualizar dados dos lutadores.
 * Usa TRES fontes com fallback:
 *
 * UFC.com: foto (fullbody + headshot), record (W-L-D), divisao, estilo_luta
 * UFCStats.com: envergadura, stance, stats de luta (slpm, str_acc, etc), altura, DOB (fallback)
 * Sherdog: DOB (principal), altura, nickname, nacionalidade, academia, cidade
 *
 * Prioridade de merge por campo:
 *   DOB: Sherdog > UFCStats
 *   Altura: UFCStats > Sherdog
 *   Envergadura: UFCStats (unica fonte)
 *   Apelido: Sherdog > UFC.com
 *   Pais/cidade/academia: Sherdog > UFC.com
 *   Imagens: UFC.com (unica fonte fullbody)
 *   Stats de luta: UFCStats (unica fonte)
 *
 * Uso: npx tsx scripts/update-fighters-v2.ts
 * Cron: toda segunda 3h UTC
 */

import { Pool } from 'pg';
import * as cheerio from 'cheerio';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub',
  max: 5,
});

const BATCH_SIZE = 30;
const DELAY_MS = 4000;
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// Per-field failure tracking
const fieldFailures: Record<string, Record<string, number>> = {};
function trackFailure(source: string, field: string) {
  if (!fieldFailures[source]) fieldFailures[source] = {};
  fieldFailures[source][field] = (fieldFailures[source][field] || 0) + 1;
}

interface FighterRow {
  id: string;
  nome: string;
  ufc_slug: string | null;
}

interface ScrapedData {
  // UFC.com
  apelido: string | null;
  categoria_peso: string | null;
  pais: string | null;
  cidade_natal: string | null;
  vitorias: number | null;
  derrotas: number | null;
  empates: number | null;
  imagem_url: string | null;
  imagem_fullbody_url: string | null;
  url_perfil: string | null;
  // UFCStats.com
  altura: string | null;
  envergadura: string | null;
  data_nascimento: string | null;
  idade: number | null;
  stance: string | null;
  slpm: number | null;
  str_acc: number | null;
  sapm: number | null;
  str_def: number | null;
  td_avg: number | null;
  td_acc: number | null;
  td_def: number | null;
  sub_avg: number | null;
  nocautes: number | null;
  finalizacoes: number | null;
  decisoes: number | null;
  academia: string | null;
  estilo_luta: string | null;
}

async function fetchPage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': UA,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      if (res.status === 403) trackFailure('http', `403_${new URL(url).hostname}`);
      return null;
    }
    return await res.text();
  } catch {
    trackFailure('http', `timeout_${new URL(url).hostname}`);
    return null;
  }
}

function parseFloat2(s: string | undefined): number | null {
  if (!s) return null;
  const n = parseFloat(s.replace('%', ''));
  return isNaN(n) ? null : n;
}

// =============================================
// FONTE 1: UFC.com
// =============================================
async function scrapeUFC(ufcSlug: string): Promise<Partial<ScrapedData>> {
  const url = `https://www.ufc.com/athlete/${ufcSlug}`;
  const html = await fetchPage(url);
  if (!html) return {};

  const $ = cheerio.load(html);
  const data: Partial<ScrapedData> = { url_perfil: url };

  // Nome e apelido
  const nickname = $('.hero-profile__nickname').text().trim().replace(/"/g, '');
  if (nickname) data.apelido = nickname;

  // Divisao
  const division = $('.hero-profile__division-title').text().trim();
  if (division) data.categoria_peso = division;

  // Record
  const recordText = $('.hero-profile__division-body').text().trim();
  const recordMatch = recordText.match(/(\d+)-(\d+)-(\d+)/);
  if (recordMatch) {
    data.vitorias = parseInt(recordMatch[1]);
    data.derrotas = parseInt(recordMatch[2]);
    data.empates = parseInt(recordMatch[3]);
  }

  // Bio fields
  $('.hero-profile__info .hero-profile__info-item').each(function() {
    const label = $(this).find('p').first().text().trim().toLowerCase();
    const value = $(this).find('p').last().text().trim();
    if (label === value.toLowerCase()) return;

    if (label.includes('hometown') || label.includes('city')) data.cidade_natal = value.slice(0, 100);
    if (label.includes('train') || label.includes('gym') || label.includes('camp')) data.academia = value.slice(0, 255);
    if (label.includes('fighting style') || label.includes('style')) data.estilo_luta = value.slice(0, 100);
    if (label.includes('country') || label.includes('place of birth')) data.pais = value.slice(0, 50);
  });

  // Pais do campo de localidade
  const locality = $('.hero-profile__locality').text().trim();
  if (locality && !data.pais) {
    const parts = locality.split(',').map(s => s.trim());
    if (parts.length >= 2) {
      data.pais = parts[parts.length - 1].slice(0, 50);
      if (!data.cidade_natal) data.cidade_natal = parts[0].slice(0, 100);
    }
  }

  // Imagens
  const fullBodyMatch = html.match(/https?:\/\/[^"'\s]+athlete_bio_full_body[^"'\s)]+/);
  if (fullBodyMatch) data.imagem_fullbody_url = fullBodyMatch[0].slice(0, 500);

  const headshotMatch = html.match(/https?:\/\/[^"'\s]+event_results_athlete_headshot[^"'\s)]+/);
  if (headshotMatch) data.imagem_url = headshotMatch[0].slice(0, 500);

  // Win methods
  const winMethodLabels = ['ko/tko', 'dec', 'sub'];
  const winMethodNums: number[] = [];
  $('.hero-profile__stat-numb, .c-overlap__stats-value').each(function() {
    const num = parseInt($(this).text().trim());
    if (!isNaN(num)) winMethodNums.push(num);
  });
  if (winMethodNums.length >= 3) {
    data.nocautes = winMethodNums[0];
    data.decisoes = winMethodNums[1];
    data.finalizacoes = winMethodNums[2];
  }

  return data;
}

// =============================================
// FONTE 2: UFCStats.com
// =============================================
async function scrapeUFCStats(fighterName: string): Promise<Partial<ScrapedData>> {
  // UFCStats busca por UMA palavra so (primeiro ou ultimo nome)
  // Buscar pelo sobrenome primeiro (mais especifico), fallback pro primeiro nome
  const nameParts2 = fighterName.trim().split(/\s+/);
  const searchLast = nameParts2[nameParts2.length - 1];
  const searchUrl = `http://ufcstats.com/statistics/fighters/search?query=${encodeURIComponent(searchLast)}`;
  const searchHtml = await fetchPage(searchUrl);
  if (!searchHtml) return {};

  const $search = cheerio.load(searchHtml);

  // Encontrar link do lutador — match por nome completo, nao apenas sobrenome
  let fighterUrl: string | null = null;
  const nameLower = fighterName.toLowerCase().trim();
  const nameParts = nameLower.split(/\s+/);
  const firstName = nameParts[0] || '';
  const lastName = nameParts[nameParts.length - 1] || '';

  // UFCStats retorna primeiro e ultimo nome em <a> tags SEPARADAS com mesmo href
  // Agrupar todos os textos por href
  const hrefTexts: Record<string, string[]> = {};
  $search('a.b-link.b-link_style_black').each(function() {
    const href = $search(this).attr('href');
    const text = $search(this).text().trim().toLowerCase();
    if (href && text) {
      if (!hrefTexts[href]) hrefTexts[href] = [];
      hrefTexts[href].push(text);
    }
  });

  // Montar candidatos com nome completo (juntando os textos do mesmo href)
  const candidates: { href: string; name: string }[] = [];
  for (const [href, texts] of Object.entries(hrefTexts)) {
    candidates.push({ href, name: texts.join(' ') });
  }

  // 1. Match exato pelo nome completo
  for (const c of candidates) {
    if (c.name === nameLower) {
      fighterUrl = c.href;
      break;
    }
  }

  // 2. Match por primeiro + ultimo nome (pra lidar com nomes do meio)
  if (!fighterUrl) {
    for (const c of candidates) {
      if (c.name.includes(firstName) && c.name.includes(lastName)) {
        fighterUrl = c.href;
        break;
      }
    }
  }

  // 3. Fallback: NÃO pegar primeiro resultado cegamente (causava dados errados)
  if (!fighterUrl) {
    trackFailure('ufcstats', 'fighter_not_found');
  }

  if (!fighterUrl) return {};

  const html = await fetchPage(fighterUrl);
  if (!html) return {};

  const $ = cheerio.load(html);
  const data: Partial<ScrapedData> = {};

  // Bio info (altura, envergadura, DOB, stance)
  $('li.b-list__box-list-item').each(function() {
    const text = $(this).text().trim();

    if (text.includes('Height:')) {
      const match = text.match(/Height:\s*(.+)/);
      if (match) {
        const h = match[1].trim();
        if (h !== '--' && h !== '') data.altura = h.slice(0, 20);
      }
    }

    if (text.includes('Reach:')) {
      const match = text.match(/Reach:\s*(.+)/);
      if (match) {
        const r = match[1].trim().replace('"', '');
        if (r !== '--' && r !== '') data.envergadura = r.slice(0, 20);
      }
    }

    if (text.includes('DOB:')) {
      const match = text.match(/DOB:\s*(.+)/);
      if (match) {
        const dobStr = match[1].trim();
        if (dobStr !== '--') {
          const d = new Date(dobStr);
          if (!isNaN(d.getTime())) {
            data.data_nascimento = d.toISOString().split('T')[0];
            data.idade = Math.floor((Date.now() - d.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
          }
        }
      }
    }

    if (text.includes('STANCE:')) {
      const match = text.match(/STANCE:\s*(.+)/);
      if (match) {
        const s = match[1].trim();
        if (s !== '--' && s !== '') data.stance = s.slice(0, 30);
      }
    }
  });

  // Career stats
  const statBoxes: string[] = [];
  $('div.b-list__info-box-left .b-list__info-box-left_item, li.b-list__box-list-item_type_block').each(function() {
    statBoxes.push($(this).text().trim());
  });

  for (const box of statBoxes) {
    if (box.includes('SLpM')) {
      data.slpm = parseFloat2(box.match(/SLpM:\s*([\d.]+)/)?.[1]);
    }
    if (box.includes('Str. Acc')) {
      data.str_acc = parseFloat2(box.match(/Str\. Acc\.?:?\s*([\d.]+)/)?.[1]);
    }
    if (box.includes('SApM')) {
      data.sapm = parseFloat2(box.match(/SApM:\s*([\d.]+)/)?.[1]);
    }
    if (box.includes('Str. Def')) {
      data.str_def = parseFloat2(box.match(/Str\. Def\.?:?\s*([\d.]+)/)?.[1]);
    }
    if (box.includes('TD Avg')) {
      data.td_avg = parseFloat2(box.match(/TD Avg\.?:?\s*([\d.]+)/)?.[1]);
    }
    if (box.includes('TD Acc')) {
      data.td_acc = parseFloat2(box.match(/TD Acc\.?:?\s*([\d.]+)/)?.[1]);
    }
    if (box.includes('TD Def')) {
      data.td_def = parseFloat2(box.match(/TD Def\.?:?\s*([\d.]+)/)?.[1]);
    }
    if (box.includes('Sub. Avg')) {
      data.sub_avg = parseFloat2(box.match(/Sub\. Avg\.?:?\s*([\d.]+)/)?.[1]);
    }
  }

  return data;
}

// =============================================
// FONTE 3: Sherdog (DOB, altura, nickname, nacionalidade, academia)
// =============================================
async function scrapeSherdog(fighterName: string): Promise<Partial<ScrapedData>> {
  // Sherdog busca por sobrenome
  const nameParts = fighterName.trim().split(/\s+/);
  const lastName = nameParts[nameParts.length - 1];
  const firstName = nameParts[0]?.toLowerCase() || '';

  const searchUrl = `https://www.sherdog.com/stats/fightfinder?SearchTxt=${encodeURIComponent(lastName)}&method=complete`;
  const searchHtml = await fetchPage(searchUrl);
  if (!searchHtml) {
    trackFailure('sherdog', 'search_failed');
    return {};
  }

  const $search = cheerio.load(searchHtml);

  // Encontrar link exato do fighter (match por primeiro + ultimo nome)
  let fighterUrl: string | null = null;
  const fighterLinks: { href: string; text: string }[] = [];

  $search('a[href^="/fighter/"]').each(function () {
    const href = $search(this).attr('href');
    const text = $search(this).text().trim().toLowerCase();
    if (href && text && !fighterLinks.some(l => l.href === href)) {
      fighterLinks.push({ href, text });
    }
  });

  // Match exato: primeiro nome + ultimo nome
  for (const link of fighterLinks) {
    if (link.text.includes(firstName) && link.text.includes(lastName.toLowerCase())) {
      fighterUrl = `https://www.sherdog.com${link.href}`;
      break;
    }
  }

  // Se nao encontrou na primeira pagina, tentar pagina 2
  if (!fighterUrl) {
    const page2Html = await fetchPage(`${searchUrl}&page=2`);
    if (page2Html) {
      const $p2 = cheerio.load(page2Html);
      $p2('a[href^="/fighter/"]').each(function () {
        const href = $p2(this).attr('href');
        const text = $p2(this).text().trim().toLowerCase();
        if (href && text && text.includes(firstName) && text.includes(lastName.toLowerCase())) {
          fighterUrl = `https://www.sherdog.com${href}`;
          return false;
        }
      });
    }
  }

  if (!fighterUrl) {
    trackFailure('sherdog', 'fighter_not_found');
    return {};
  }

  const html = await fetchPage(fighterUrl);
  if (!html) {
    trackFailure('sherdog', 'profile_fetch_failed');
    return {};
  }

  const $ = cheerio.load(html);
  const data: Partial<ScrapedData> = {};

  // DOB via itemprop
  const birthDate = $('[itemprop="birthDate"]').text().trim();
  if (birthDate && birthDate !== '--') {
    const d = new Date(birthDate);
    if (!isNaN(d.getTime())) {
      data.data_nascimento = d.toISOString().split('T')[0];
      data.idade = Math.floor((Date.now() - d.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
    } else {
      trackFailure('sherdog', 'dob_parse_error');
    }
  } else {
    trackFailure('sherdog', 'dob_missing');
  }

  // Altura via itemprop
  const height = $('[itemprop="height"]').text().trim();
  if (height && height !== '--') {
    data.altura = height.slice(0, 20);
  }

  // Nacionalidade via itemprop
  const nationality = $('[itemprop="nationality"]').text().trim();
  if (nationality && nationality !== '--') {
    data.pais = nationality.slice(0, 50);
  }

  // Nickname via itemprop ou meta tag
  const metaName = $('meta[itemprop="name"]').attr('content') || '';
  const nicknameMatch = metaName.match(/"([^"]+)"/);
  if (nicknameMatch) {
    data.apelido = nicknameMatch[1].slice(0, 255);
  } else {
    // Fallback: procurar no HTML
    const nicknameEl = $('span.nickname em').text().trim();
    if (nicknameEl) {
      data.apelido = nicknameEl.slice(0, 255);
    }
  }

  // Academia via memberOf
  const academias: string[] = [];
  $('[itemprop="memberOf"] [itemprop="name"]').each(function () {
    const name = $(this).text().trim();
    if (name) academias.push(name);
  });
  if (academias.length > 0) {
    data.academia = academias[0].slice(0, 255);
  }

  // Cidade (addressLocality)
  const city = $('[itemprop="addressLocality"]').text().trim();
  if (city && city !== '--') {
    data.cidade_natal = city.slice(0, 100);
  }

  return data;
}

// =============================================
// MERGE + UPDATE
// =============================================
async function updateFighter(id: string, data: ScrapedData) {
  const fields: [string, unknown][] = [];

  if (data.apelido) fields.push(['apelido', data.apelido]);
  if (data.categoria_peso) fields.push(['categoria_peso', data.categoria_peso]);
  if (data.pais) fields.push(['pais', data.pais]);
  if (data.cidade_natal) fields.push(['cidade_natal', data.cidade_natal]);
  if (data.academia) fields.push(['academia', data.academia]);
  if (data.estilo_luta) fields.push(['estilo_luta', data.estilo_luta]);
  if (data.altura) fields.push(['altura', data.altura]);
  if (data.envergadura) fields.push(['envergadura', data.envergadura]);
  if (data.data_nascimento) fields.push(['data_nascimento', data.data_nascimento]);
  if (data.idade) fields.push(['idade', data.idade]);
  if (data.stance) fields.push(['stance', data.stance]);
  if (data.imagem_url) fields.push(['imagem_url', data.imagem_url]);
  if (data.imagem_fullbody_url) fields.push(['imagem_fullbody_url', data.imagem_fullbody_url]);
  if (data.url_perfil) fields.push(['url_perfil', data.url_perfil]);
  if (data.vitorias !== null && data.vitorias !== undefined) fields.push(['vitorias', data.vitorias]);
  if (data.derrotas !== null && data.derrotas !== undefined) fields.push(['derrotas', data.derrotas]);
  if (data.empates !== null && data.empates !== undefined) fields.push(['empates', data.empates]);
  if (data.nocautes !== null && data.nocautes !== undefined) fields.push(['nocautes', data.nocautes]);
  if (data.finalizacoes !== null && data.finalizacoes !== undefined) fields.push(['finalizacoes', data.finalizacoes]);
  if (data.decisoes !== null && data.decisoes !== undefined) fields.push(['decisoes', data.decisoes]);
  if (data.slpm !== null && data.slpm !== undefined) fields.push(['slpm', data.slpm]);
  if (data.str_acc !== null && data.str_acc !== undefined) fields.push(['str_acc', data.str_acc]);
  if (data.sapm !== null && data.sapm !== undefined) fields.push(['sapm', data.sapm]);
  if (data.str_def !== null && data.str_def !== undefined) fields.push(['str_def', data.str_def]);
  if (data.td_avg !== null && data.td_avg !== undefined) fields.push(['td_avg', data.td_avg]);
  if (data.td_acc !== null && data.td_acc !== undefined) fields.push(['td_acc', data.td_acc]);
  if (data.td_def !== null && data.td_def !== undefined) fields.push(['td_def', data.td_def]);
  if (data.sub_avg !== null && data.sub_avg !== undefined) fields.push(['sub_avg', data.sub_avg]);

  fields.push(['last_stats_sync', new Date()]);
  fields.push(['updated_at', new Date()]);

  if (fields.length <= 2) return 0; // So timestamps

  const setClauses = fields.map((f, i) => `"${f[0]}" = $${i + 1}`);
  const values = fields.map(f => f[1]);
  values.push(id);

  await pool.query(
    `UPDATE lutadores SET ${setClauses.join(', ')} WHERE id = $${values.length}`,
    values
  );

  return fields.length - 2; // Campos reais atualizados
}

async function run() {
  console.log(`[Fighter Update V2] Starting at ${new Date().toISOString()}`);
  console.log(`[Fighter Update V2] Sources: UFC.com + UFCStats.com + Sherdog.com`);

  const { rows: fighters } = await pool.query<FighterRow>(
    `SELECT id, nome, ufc_slug FROM lutadores
     WHERE ufc_slug IS NOT NULL
     ORDER BY
       CASE WHEN slpm IS NULL THEN 0 ELSE 1 END,
       CASE WHEN data_nascimento IS NULL THEN 0 ELSE 1 END,
       CASE WHEN altura IS NULL OR altura = '0.00' THEN 0 ELSE 1 END,
       last_stats_sync ASC NULLS FIRST`
  );

  console.log(`[Fighter Update V2] ${fighters.length} fighters to process`);

  let totalUpdated = 0;
  let totalFields = 0;
  let errors = 0;

  for (let i = 0; i < fighters.length; i += BATCH_SIZE) {
    const batch = fighters.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(fighters.length / BATCH_SIZE);

    for (const fighter of batch) {
      try {
        // Fonte 1: UFC.com (imagens, record, divisao)
        const ufcData = fighter.ufc_slug ? await scrapeUFC(fighter.ufc_slug) : {};
        if (fighter.ufc_slug && Object.keys(ufcData).length <= 1) {
          trackFailure('ufc.com', 'blocked_or_empty');
        }

        // Fonte 2: UFCStats.com (stats de luta, envergadura)
        const statsData = await scrapeUFCStats(fighter.nome);

        // Fonte 3: Sherdog (DOB, altura, nickname, nacionalidade, academia)
        const sherdogData = await scrapeSherdog(fighter.nome);

        // Merge — prioridade por campo:
        // DOB/idade: Sherdog > UFCStats (Sherdog tem mais cobertura)
        // altura: UFCStats > Sherdog (formato mais preciso)
        // envergadura: UFCStats (unica fonte)
        // apelido: Sherdog > UFC.com
        // pais/cidade: Sherdog > UFC.com
        // academia: Sherdog > UFC.com
        // imagens: UFC.com (unica fonte com fullbody)
        // stats: UFCStats (unica fonte)
        const merged: ScrapedData = {
          apelido: sherdogData.apelido || ufcData.apelido || null,
          categoria_peso: ufcData.categoria_peso || null,
          pais: sherdogData.pais || ufcData.pais || null,
          cidade_natal: sherdogData.cidade_natal || ufcData.cidade_natal || null,
          academia: sherdogData.academia || ufcData.academia || null,
          estilo_luta: ufcData.estilo_luta || null,
          vitorias: ufcData.vitorias ?? null,
          derrotas: ufcData.derrotas ?? null,
          empates: ufcData.empates ?? null,
          imagem_url: ufcData.imagem_url || null,
          imagem_fullbody_url: ufcData.imagem_fullbody_url || null,
          url_perfil: ufcData.url_perfil || null,
          // DOB: Sherdog primeiro (maior cobertura), UFCStats como fallback
          data_nascimento: sherdogData.data_nascimento || statsData.data_nascimento || null,
          idade: sherdogData.idade || statsData.idade || null,
          // Altura: UFCStats > Sherdog > UFC.com
          altura: statsData.altura || sherdogData.altura || ufcData.altura || null,
          // Envergadura: so UFCStats tem
          envergadura: statsData.envergadura || null,
          stance: statsData.stance || null,
          slpm: statsData.slpm ?? null,
          str_acc: statsData.str_acc ?? null,
          sapm: statsData.sapm ?? null,
          str_def: statsData.str_def ?? null,
          td_avg: statsData.td_avg ?? null,
          td_acc: statsData.td_acc ?? null,
          td_def: statsData.td_def ?? null,
          sub_avg: statsData.sub_avg ?? null,
          nocautes: statsData.nocautes ?? ufcData.nocautes ?? null,
          finalizacoes: statsData.finalizacoes ?? ufcData.finalizacoes ?? null,
          decisoes: statsData.decisoes ?? ufcData.decisoes ?? null,
        };

        const fieldsUpdated = await updateFighter(fighter.id, merged);
        if (fieldsUpdated > 0) {
          totalUpdated++;
          totalFields += fieldsUpdated;
        }
      } catch (err) {
        const errMsg = err instanceof Error ? err.message : String(err);
        console.error(`  [ERROR] ${fighter.nome}: ${errMsg}`);
        errors++;
      }
    }

    console.log(`[Fighter Update V2] Batch ${batchNum}/${totalBatches} | ${Math.min(i + BATCH_SIZE, fighters.length)}/${fighters.length} | updated: ${totalUpdated} | fields: ${totalFields} | errors: ${errors}`);

    if (i + BATCH_SIZE < fighters.length) {
      await new Promise(r => setTimeout(r, DELAY_MS));
    }
  }

  console.log(`[Fighter Update V2] DONE. Updated: ${totalUpdated}, Fields: ${totalFields}, Errors: ${errors}`);

  // Relatorio de falhas por fonte
  if (Object.keys(fieldFailures).length > 0) {
    console.log('\n[Fighter Update V2] === FAILURE REPORT ===');
    for (const [source, failures] of Object.entries(fieldFailures)) {
      const details = Object.entries(failures).map(([k, v]) => `${k}=${v}`).join(', ');
      console.log(`  ${source}: ${details}`);
    }
  }

  await pool.end();
}

run().catch(err => {
  console.error('[Fighter Update V2] Fatal error:', err);
  process.exit(1);
});
