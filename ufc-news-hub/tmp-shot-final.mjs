import { chromium } from 'playwright';
import { createHmac } from 'crypto';

const ts = Date.now().toString();
const sig = createHmac('sha256', 'ufc-admin-2024').update(ts).digest('hex');

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 1100 },
  deviceScaleFactor: 2,
});
await ctx.addCookies([
  { name: 'admin_token', value: `${ts}.${sig}`, domain: 'localhost', path: '/', httpOnly: false, secure: false, sameSite: 'Lax' },
]);
const page = await ctx.newPage();

page.on('pageerror', (e) => console.error('PAGEERROR:', e.message));

const url = 'http://localhost:3010/pt/hub/analise/prochazka-vs-ulberg';
const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
console.log('STATUS', resp?.status(), 'FINAL', page.url());

await page.waitForTimeout(1500);

// Full page
await page.screenshot({ path: '/tmp/new-full.png', fullPage: true });
console.log('FULL OK');

// 1) Qualitative Insight block — "O PARADOXO DO FOCO" or "O X-FACTOR"
await page.evaluate(() => window.scrollTo({ top: 0 }));
await page.waitForTimeout(300);
const insight = page.locator('text="O Paradoxo do Foco"').first();
if (await insight.count()) {
  await insight.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -120));
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/new-insight.png', fullPage: false });
  console.log('INSIGHT SHOT OK');
} else {
  console.log('INSIGHT NOT FOUND');
}

// 2) Skills Profile V2 (head-to-head)
const skills = page.locator('text="Perfil de"').first();
if (await skills.count()) {
  await skills.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -60));
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/new-skills.png', fullPage: false });
  console.log('SKILLS SHOT OK');
}

// 3) Conviction block
const thesis = page.locator('text="A Tese"').first();
if (await thesis.count()) {
  await thesis.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -80));
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/new-thesis.png', fullPage: false });
  console.log('THESIS SHOT OK');
}

await browser.close();
console.log('DONE');
