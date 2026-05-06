import { chromium, Browser, Page } from 'playwright';
import * as cheerio from 'cheerio';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    'postgresql://ufcnews:ufcnews123@localhost:5432/ufc_news_hub',
});

const SCRAPER_CONFIG = {
  baseUrl: 'https://www.ufc.com',
  delayBetweenRequests: 1500,
  userAgent: 'UFCNewsHub-Bot/1.0 (News Aggregator; educational project)',
};

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeNameForUrl(nome: string): string {
  return nome
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

function extractLastName(fullName: string): string {
  const parts = fullName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['']/g, '')
    .toUpperCase()
    .split(/\s+/);
  return parts[parts.length - 1] || parts[0] || '';
}

function isImageCorrect(imageUrl: string | null, fighterName: string): boolean {
  if (!imageUrl) return false;

  const lastName = extractLastName(fighterName);
  if (!lastName) return true; // Can't verify, assume correct

  // Check if the image URL contains the fighter's last name
  return imageUrl.toUpperCase().includes(lastName);
}

async function findCorrectHeadshot(page: Page, fighterName: string): Promise<string | null> {
  const urlSlug = normalizeNameForUrl(fighterName);
  const url = `${SCRAPER_CONFIG.baseUrl}/athlete/${urlSlug}`;
  const lastName = extractLastName(fighterName);

  try {
    const response = await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: 30000,
    });

    if (!response || response.status() === 404) {
      return null;
    }

    await delay(1000);

    const html = await page.content();
    const $ = cheerio.load(html);

    // Look for headshot with fighter's name in URL
    let correctHeadshot: string | null = null;

    $('img').each((_, el) => {
      const src = $(el).attr('src') || '';
      if (
        src.includes('event_results_athlete_headshot') &&
        src.toUpperCase().includes(lastName) &&
        !correctHeadshot
      ) {
        correctHeadshot = src;
      }
    });

    return correctHeadshot;
  } catch (error) {
    return null;
  }
}

async function fixWrongImages() {
  console.log('🔧 Corrigindo imagens incorretas dos lutadores...\n');

  let browser: Browser | null = null;

  try {
    // Find fighters with potentially wrong images OR missing (backfill).
    const fighters = await pool.query(`
      SELECT id, nome, imagem_url
      FROM lutadores
      ORDER BY nome
    `);

    console.log(`📊 Verificando ${fighters.rows.length} lutadores...\n`);

    // wrongImages = imagem faltando OU suspeita pelo check heurístico
    const wrongImages: Array<{ id: string; nome: string; imagem_url: string | null }> = [];

    for (const fighter of fighters.rows) {
      const faltando = !fighter.imagem_url || fighter.imagem_url === '';
      if (faltando || !isImageCorrect(fighter.imagem_url, fighter.nome)) {
        wrongImages.push(fighter);
      }
    }

    console.log(`⚠️ Encontrados ${wrongImages.length} lutadores com imagens potencialmente incorretas\n`);

    if (wrongImages.length === 0) {
      console.log('✅ Todas as imagens parecem estar corretas!');
      return;
    }

    // Launch browser to fix the wrong images
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      userAgent: SCRAPER_CONFIG.userAgent,
    });
    const page = await context.newPage();

    let fixed = 0;
    let notFound = 0;

    for (let i = 0; i < wrongImages.length; i++) {
      const fighter = wrongImages[i];
      process.stdout.write(
        `[${i + 1}/${wrongImages.length}] ${fighter.nome}... `
      );

      const correctUrl = await findCorrectHeadshot(page, fighter.nome);

      if (correctUrl) {
        await pool.query(
          `UPDATE lutadores SET imagem_url = $1 WHERE id = $2`,
          [correctUrl, fighter.id]
        );
        console.log('✅ corrigida');
        fixed++;
      } else {
        console.log('❌ não encontrada');
        notFound++;
      }

      if (i < wrongImages.length - 1) {
        await delay(SCRAPER_CONFIG.delayBetweenRequests);
      }
    }

    console.log('\n✅ Correção concluída!');
    console.log(`📊 Resultados:`);
    console.log(`   - Corrigidas: ${fixed}`);
    console.log(`   - Não encontradas: ${notFound}`);

  } catch (error) {
    console.error('❌ Erro:', error);
  } finally {
    if (browser) await browser.close();
    await pool.end();
  }
}

fixWrongImages();
