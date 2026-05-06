import { chromium } from 'playwright';
import { createHmac } from 'crypto';
const ts = Date.now().toString();
const sig = createHmac('sha256', 'ufc-admin-2024').update(ts).digest('hex');
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1300 }, deviceScaleFactor: 2 });
await ctx.addCookies([{ name: 'admin_token', value: `${ts}.${sig}`, domain: 'localhost', path: '/', httpOnly: false, secure: false, sameSite: 'Lax' }]);
const page = await ctx.newPage();
await page.goto('http://localhost:3010/pt/hub/analise/prochazka-vs-ulberg', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(1500);

// Find the "Veredito" header
const ver = page.locator('text="Veredito"').first();
if (await ver.count()) {
  await ver.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -80));
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/verdict-1.png', fullPage: false });
  console.log('VERDICT 1 OK');
}
// Scroll further to apostas
await page.evaluate(() => window.scrollBy(0, 850));
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/verdict-2.png', fullPage: false });
console.log('VERDICT 2 OK');

await page.evaluate(() => window.scrollBy(0, 850));
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/verdict-3.png', fullPage: false });
console.log('VERDICT 3 OK');

await page.evaluate(() => window.scrollBy(0, 850));
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/verdict-4.png', fullPage: false });
console.log('VERDICT 4 OK');

await browser.close();
console.log('DONE');
