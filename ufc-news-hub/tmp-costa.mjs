import { chromium } from 'playwright';
import { createHmac } from 'crypto';
const ts = Date.now().toString();
const sig = createHmac('sha256', 'ufc-admin-2024').update(ts).digest('hex');
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1300 }, deviceScaleFactor: 2 });
await ctx.addCookies([{ name: 'admin_token', value: `${ts}.${sig}`, domain: 'localhost', path: '/', httpOnly: false, secure: false, sameSite: 'Lax' }]);
const page = await ctx.newPage();
const r = await page.goto('http://localhost:3010/pt/hub/analise/costa-vs-murzakanov', { waitUntil: 'networkidle', timeout: 60000 });
console.log('STATUS', r?.status(), 'URL', page.url());
await page.waitForTimeout(1500);
await page.screenshot({ path: '/tmp/costa-hero.png', fullPage: false });
console.log('HERO OK');
// Tale of tape
const tale = page.locator('text="Tale of"').first();
if (await tale.count()) {
  await tale.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -60));
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/costa-tale.png', fullPage: false });
  console.log('TALE OK');
}
// Verdict
const ver = page.locator('text="Veredito"').first();
if (await ver.count()) {
  await ver.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -60));
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/costa-verdict.png', fullPage: false });
  console.log('VERDICT OK');
}
await browser.close();
console.log('DONE');
