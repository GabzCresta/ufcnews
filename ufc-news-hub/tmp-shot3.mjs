import { chromium } from 'playwright';
import { createHmac } from 'crypto';

const ts = Date.now().toString();
const sig = createHmac('sha256', 'ufc-admin-2024').update(ts).digest('hex');

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
await ctx.addCookies([{ name: 'admin_token', value: `${ts}.${sig}`, domain: 'localhost', path: '/', httpOnly: false, secure: false, sameSite: 'Lax' }]);
const page = await ctx.newPage();

await page.goto('http://localhost:3010/en/hub/analise/prochazka-vs-ulberg', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(1500);

// Full page
await page.screenshot({ path: '/tmp/shot-full.png', fullPage: true });

// Scroll directly to "The Thesis" via locator (Playwright's text engine handles nested text)
const thesis = page.locator('text="The Thesis"').first();
if (await thesis.count()) {
  await thesis.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -100)); // give padding above
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/shot-thesis.png', fullPage: false });
  console.log('THESIS SHOT OK');
} else {
  console.log('THESIS NOT FOUND — trying "Conviction"');
  const c = page.locator('text="Conviction"').first();
  if (await c.count()) { await c.scrollIntoViewIfNeeded(); await page.waitForTimeout(300); await page.screenshot({ path: '/tmp/shot-thesis.png' }); }
}

// Scroll a bit more for the breakers + underdog block
await page.evaluate(() => window.scrollBy(0, 400));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/shot-breakers.png', fullPage: false });

// And one more for the winner reveal
await page.evaluate(() => window.scrollBy(0, 400));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/shot-winner.png', fullPage: false });

await browser.close();
console.log('DONE');
