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

function hasValidAdminCookie(request: NextRequest): boolean {
  const cookie = request.cookies.get('admin_token');
  if (!cookie?.value) return false;
  const parts = cookie.value.split('.');
  if (parts.length !== 2) return false;
  const timestamp = parseInt(parts[0], 10);
  if (isNaN(timestamp)) return false;
  const TTL = 8 * 60 * 60 * 1000;
  return (Date.now() - timestamp) < TTL;
}

// ── Marketing URL pattern: /analise/* is public-facing ──
// Internally resolves to /hub/analise/* in the app directory.
const ANALISE_PATTERN = /^(\/[a-z]{2})?\/(analise(?:s)?(?:\/.*)?)$/;

export default function middleware(request: NextRequest) {
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
  if (hasValidAdminCookie(request)) {
    return handleI18nRouting(request);
  }

  // ── 5. Arena is public (has its own auth system) ──
  if (/^(\/[a-z]{2})?\/hub\/arena(\/|$)/.test(pathname)) {
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
