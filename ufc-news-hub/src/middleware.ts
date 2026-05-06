import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

// ═══════════════════════════════════════════════════════════
// Middleware: i18n + marketing URL rewrites + auth
//
// Pattern (from next-intl docs): run intlMiddleware first,
// then layer custom rewrites on top preserving i18n headers.
// ═══════════════════════════════════════════════════════════

const handleI18nRouting = createMiddleware(routing);

const PUBLIC_PATTERNS = [
  /^\/enterprise(\/|$)/,
  /^\/[a-z]{2}\/enterprise(\/|$)/,
  /^\/admin(\/|$)/,
  /^\/dashboard(\/|$)/,
];

function isPublicPath(pathname: string): boolean {
  return PUBLIC_PATTERNS.some((pattern) => pattern.test(pathname));
}

async function hasValidAdminCookie(request: NextRequest): Promise<boolean> {
  const cookie = request.cookies.get('admin_token');
  if (!cookie?.value) return false;

  const dotIndex = cookie.value.indexOf('.');
  if (dotIndex === -1) return false;

  const ts = cookie.value.substring(0, dotIndex);
  const sig = cookie.value.substring(dotIndex + 1);
  if (!ts || !sig) return false;

  const timestamp = parseInt(ts, 10);
  if (isNaN(timestamp)) return false;

  const TTL = 8 * 60 * 60 * 1000;
  if (Date.now() - timestamp > TTL) return false;

  // Verify HMAC signature using Web Crypto API (Edge Runtime compatible)
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) return false;

  try {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );
    const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(ts));
    const expected = Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('');
    // Constant-time comparison (length check + char-by-char without early exit)
    if (expected.length !== sig.length) return false;
    let mismatch = 0;
    for (let i = 0; i < expected.length; i++) {
      mismatch |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
    }
    return mismatch === 0;
  } catch {
    return false;
  }
}

// ── Marketing URL pattern: /analise/* is public-facing ──
// Internally resolves to /hub/analise/* in the app directory.
const ANALISE_PATTERN = /^(\/[a-z]{2})?\/(analise(?:s)?(?:\/.*)?)$/;

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── 1. Marketing rewrites: /analise/* → /hub/analise/* (public) ──
  // These bypass auth entirely. Rewrite happens before i18n so the
  // intl middleware resolves the correct [locale] segment.
  const analiseMatch = pathname.match(ANALISE_PATTERN);
  if (analiseMatch) {
    const localePrefix = analiseMatch[1]?.replace('/', '') || '';
    const rest = analiseMatch[2]; // e.g. "analise/evento/moicano-vs-duncan"
    const locale = localePrefix || routing.defaultLocale;

    // Mutate the internal pathname so intlMiddleware sees /hub/...
    request.nextUrl.pathname = `/${locale}/hub/${rest}`;
    const response = handleI18nRouting(request);

    // If intlMiddleware redirected (e.g., locale correction), honor it
    if (response.status >= 300 && response.status < 400) {
      return response;
    }

    // Rewrite to the hub path, preserving i18n headers (cookies, locale)
    const rewriteUrl = new URL(`/${locale}/hub/${rest}`, request.url);
    return NextResponse.rewrite(rewriteUrl, { headers: response.headers });
  }

  // ── 2. Root/landing paths ──
  const localeRoots = new Set(['/', '/pt', '/en', '/fr', '/es']);
  if (localeRoots.has(pathname)) {
    return handleI18nRouting(request);
  }

  // ── 3. Public paths (enterprise, admin login, dashboard login) ──
  if (isPublicPath(pathname)) {
    return handleI18nRouting(request);
  }

  // ── 4. Authenticated admin: full access ──
  if (await hasValidAdminCookie(request)) {
    return handleI18nRouting(request);
  }

  // ── 5. Arena is public (has its own auth system) ──
  if (/^(\/[a-z]{2})?\/hub\/arena(\/|$)/.test(pathname)) {
    return handleI18nRouting(request);
  }

  // ── 5b. Arena preview is public (read-only demo) ──
  if (/^(\/[a-z]{2})?\/arena(\/|$)/.test(pathname)) {
    return handleI18nRouting(request);
  }

  // ── 5c. Analises are PUBLIC (2026-04-09) ──
  // /hub/analise/* (individual fight pages, event index, and any sub-routes)
  // are exposed publicly. Only /dashboard and other /hub sub-sections remain
  // gated by admin cookie.
  if (/^(\/[a-z]{2})?\/hub\/analise(\/|$)/.test(pathname)) {
    return handleI18nRouting(request);
  }

  // ── 5d. Creator kits são PUBLIC — entregáveis brandados pra criadores.
  // Gabriel envia a URL direto pro creator como pitch; precisa ser acessível
  // sem login admin.
  if (/^(\/[a-z]{2})?\/hub\/creator-kit(\/|$)/.test(pathname)) {
    return handleI18nRouting(request);
  }

  // ── 5e. Recaps são PUBLIC — post-card analyses semanais.
  if (/^(\/[a-z]{2})?\/recap(\/|$)/.test(pathname)) {
    return handleI18nRouting(request);
  }

  // ── 6. Protected /hub routes: require admin cookie ──
  if (pathname.startsWith('/hub') || /^\/[a-z]{2}\/hub(\/|$)/.test(pathname)) {
    const url = new URL('/dashboard', request.url);
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  // ── 6. Legacy /dev → /hub redirect ──
  if (pathname.startsWith('/dev') || /^\/[a-z]{2}\/dev(\/|$)/.test(pathname)) {
    const newPath = pathname.replace('/dev', '/hub');
    return NextResponse.redirect(new URL(newPath, request.url), 301);
  }

  // ── 7. Everything else → landing page ──
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  // Skip API routes, static assets, Next.js internals, and admin/dashboard pages
  matcher: [
    '/((?!api|admin|dashboard|showcase|_next|.*\\..*|manifest\\.json|sw\\.js|icons).*)',
  ],
};
