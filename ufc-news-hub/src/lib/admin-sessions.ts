import { createHmac, timingSafeEqual } from 'crypto';
import { NextResponse, type NextRequest } from 'next/server';

// ═══════════════════════════════════════
// HMAC-signed token auth for admin
// No server-side state — tokens are self-validating
// Survives HMR, restarts, everything
// ═══════════════════════════════════════

function getSecret(): string {
  const s = process.env.ADMIN_PASSWORD;
  if (!s) throw new Error('ADMIN_PASSWORD environment variable is required. Set it in .env or Vercel dashboard.');
  return s;
}

const TOKEN_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

// Create a signed token: "timestamp.hmac"
export function createToken(): string {
  const ts = Date.now().toString();
  const sig = createHmac('sha256', getSecret()).update(ts).digest('hex');
  return `${ts}.${sig}`;
}

// Validate a signed token (pure computation, no state)
export function validateToken(token: string): boolean {
  if (!token || !token.includes('.')) return false;

  const dotIndex = token.indexOf('.');
  const ts = token.substring(0, dotIndex);
  const sig = token.substring(dotIndex + 1);

  if (!ts || !sig) return false;

  const timestamp = parseInt(ts, 10);
  if (isNaN(timestamp)) return false;

  // Check expiry
  if (Date.now() - timestamp > TOKEN_TTL_MS) return false;

  // Check signature (timing-safe comparison)
  const expected = createHmac('sha256', getSecret()).update(ts).digest('hex');
  const sigBuf = Buffer.from(sig, 'hex');
  const expectedBuf = Buffer.from(expected, 'hex');
  if (sigBuf.length !== expectedBuf.length) return false;
  return timingSafeEqual(sigBuf, expectedBuf);
}

// Helper for API routes — validates the Authorization header
export function requireAdmin(request: NextRequest): NextResponse | null {
  const authHeader = request.headers.get('Authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token || !validateToken(token)) {
    return NextResponse.json(
      { error: 'Não autorizado. Faça login em /admin.' },
      { status: 401 }
    );
  }
  return null;
}
