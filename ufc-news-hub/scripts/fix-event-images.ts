import { chromium } from 'playwright';
import * as cheerio from 'cheerio';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://crenas:crenas_ufc_2026@localhost:5432/ufc_news_hub',
});

function extractLastName(name: string): string {
  const parts = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/['']/g, '').toUpperCase().split(/\s+/);
  return parts[parts.length - 1] || parts[0] || '';
}

function normalizeSlug(nome: string): string {
  return nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').trim();
}

async function main() {
  // Get fighters from next event with NULL or wrong images
  const { rows: fighters } = await pool.query(`
    SELECT DISTINCT l2.id, l2.nome, l2.ufc_slug, l2.imagem_url
    FROM (
      SELECT lutador1_id as lid FROM lutas WHERE evento_id IN (SELECT id FROM eventos WHERE nome ILIKE '%MOICANO%')
      UNION
      SELECT lutador2_id FROM lutas WHERE evento_id IN (SELECT id FROM eventos WHERE nome ILIKE '%MOICANO%')
    ) x
    JOIN lutadores l2 ON l2.id = x.lid
    WHERE l2.imagem_url IS NULL OR l2.imagem_url = ''
  `);

  console.log(`Found ${fighters.length} fighters needing images\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });

  let fixed = 0;
  let failed = 0;

  for (const fighter of fighters) {
    const slug = fighter.ufc_slug || normalizeSlug(fighter.nome);
    const lastName = extractLastName(fighter.nome);
    const url = `https://www.ufc.com/athlete/${slug}`;

    console.log(`Fetching ${fighter.nome} (${slug})...`);

    try {
      const page = await context.newPage();
      const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      if (!resp || resp.status() === 404) {
        console.log(`  ❌ 404 - not found`);
        failed++;
        await page.close();
        continue;
      }

      await page.waitForTimeout(2000);
      const html = await page.content();
      const $ = cheerio.load(html);

      let headshot: string | null = null;

      // Look for headshot image with fighter's last name
      $('img').each((_, el) => {
        const src = $(el).attr('src') || '';
        if (src.includes('event_results_athlete_headshot') && src.toUpperCase().includes(lastName) && !headshot) {
          headshot = src;
        }
      });

      // Fallback: any image with the fighter name
      if (!headshot) {
        $('img').each((_, el) => {
          const src = $(el).attr('src') || '';
          if (src.toUpperCase().includes(lastName) && src.includes('ufc.com') && !headshot) {
            headshot = src;
          }
        });
      }

      if (headshot) {
        await pool.query('UPDATE lutadores SET imagem_url = $1 WHERE id = $2', [headshot, fighter.id]);
        console.log(`  ✅ ${(headshot as string).substring(0, 80)}...`);
        fixed++;
      } else {
        console.log(`  ⚠️ No image found`);
        failed++;
      }

      await page.close();
      await new Promise(r => setTimeout(r, 1500));
    } catch (err) {
      console.log(`  ❌ Error: ${(err as Error).message}`);
      failed++;
    }
  }

  await browser.close();
  await pool.end();

  console.log(`\nDone: ${fixed} fixed, ${failed} failed`);
}

main().catch(console.error);
