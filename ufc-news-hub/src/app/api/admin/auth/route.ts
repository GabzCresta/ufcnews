import { NextRequest, NextResponse } from 'next/server';
import { createToken, validateToken } from '@/lib/admin-sessions';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '1234';

// ═══════════════════════════════════════
// Rate limiter: max 5 attempts per IP per 15 min window
// ═══════════════════════════════════════
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const loginAttempts = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = loginAttempts.get(ip);

  if (!entry || now > entry.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + LOGIN_WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_ATTEMPTS) return false;
  entry.count++;
  return true;
}

// Cleanup stale entries every 30 min
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of loginAttempts) {
    if (now > entry.resetAt) loginAttempts.delete(ip);
  }
}, 30 * 60 * 1000);

// POST /api/admin/auth — Login
export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Muitas tentativas. Tente novamente em 15 minutos.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { password } = body;

    if (!password || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Senha incorreta.' },
        { status: 401 }
      );
    }

    // Reset rate limit on successful login
    loginAttempts.delete(ip);
    const token = createToken();

    return NextResponse.json({ token });
  } catch {
    return NextResponse.json(
      { error: 'Erro no servidor.' },
      { status: 500 }
    );
  }
}

// GET /api/admin/auth — Validate token
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('Authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token || !validateToken(token)) {
    return NextResponse.json({ valid: false }, { status: 401 });
  }

  return NextResponse.json({ valid: true });
}

// DELETE /api/admin/auth — Logout (no server state to clean, just confirm)
export async function DELETE() {
  return NextResponse.json({ ok: true });
}
