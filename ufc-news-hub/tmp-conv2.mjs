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

const tese = page.locator('text="A Tese"').first();
await tese.scrollIntoViewIfNeeded();
await page.evaluate(() => window.scrollBy(0, -60));
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/conv-A.png', fullPage: false });

await page.evaluate(() => window.scrollBy(0, 900));
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/conv-B.png', fullPage: false });

await page.evaluate(() => window.scrollBy(0, 900));
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/conv-C.png', fullPage: false });

await browser.close();
console.log('OK');
