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

await page.goto('http://localhost:3010/pt/hub/analise/prochazka-vs-ulberg', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(1500);

// Shoot each major section center-framed
const targets = [
  { selector: 'text="Tale of"', file: '/tmp/ord-tale.png', offset: -80 },
  { selector: 'text="Momento Atual"', file: '/tmp/ord-historico.png', offset: -80 },
  { selector: 'text="Nivel de"', file: '/tmp/ord-nivel.png', offset: -80 },
  { selector: 'text="Comparacao"', file: '/tmp/ord-comparacao.png', offset: -80 },
  { selector: 'text="Distribuicao"', file: '/tmp/ord-vitorias.png', offset: -80 },
  { selector: 'text="Perfil de"', file: '/tmp/ord-perfil.png', offset: -80 },
];

for (const t of targets) {
  const loc = page.locator(t.selector).first();
  if (await loc.count()) {
    await loc.scrollIntoViewIfNeeded();
    await page.evaluate((o) => window.scrollBy(0, o), t.offset);
    await page.waitForTimeout(350);
    await page.screenshot({ path: t.file, fullPage: false });
    console.log('OK', t.file);
  } else {
    console.log('MISS', t.selector);
  }
}

await browser.close();
console.log('DONE');
