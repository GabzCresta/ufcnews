import { chromium } from 'playwright';
import { createHmac } from 'crypto';
const ts = Date.now().toString();
const sig = createHmac('sha256', 'ufc-admin-2024').update(ts).digest('hex');
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 2 });
await ctx.addCookies([{ name: 'admin_token', value: `${ts}.${sig}`, domain: 'localhost', path: '/', httpOnly: false, secure: false, sameSite: 'Lax' }]);
const page = await ctx.newPage();

for (const slug of ['blaydes-vs-hokit', 'reyes-vs-walker']) {
  await page.goto(`http://localhost:3010/pt/hub/analise/${slug}`, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `/tmp/batch1-${slug}.png`, fullPage: false });
  console.log(`OK ${slug}`);
}
await browser.close();
