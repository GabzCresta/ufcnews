import { chromium } from 'playwright';
import { createHmac } from 'crypto';
const ts = Date.now().toString();
const sig = createHmac('sha256', 'ufc-admin-2024').update(ts).digest('hex');
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1300 }, deviceScaleFactor: 2 });
await ctx.addCookies([{ name: 'admin_token', value: `${ts}.${sig}`, domain: 'localhost', path: '/', httpOnly: false, secure: false, sameSite: 'Lax' }]);
const page = await ctx.newPage();
await page.goto('http://localhost:3010/pt/hub/analise/prochazka-vs-ulberg', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(1200);

// Shot 1: thesis + conviction number
const tese = page.locator('text="A Tese"').first();
await tese.scrollIntoViewIfNeeded();
await page.evaluate(() => window.scrollBy(0, -80));
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/conv-1.png', fullPage: false });

// Shot 2: breakers
const brk = page.locator('text="O Que Derruba"').first();
if (await brk.count()) {
  await brk.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -80));
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/conv-2.png', fullPage: false });
}

// Shot 3: underdog path
const und = page.locator('text="Caminho do Azarao"').first();
if (await und.count()) {
  await und.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -80));
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/conv-3.png', fullPage: false });
}

await browser.close();
console.log('OK');
