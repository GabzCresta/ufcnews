import { NextRequest, NextResponse } from 'next/server';
import { createToken, validateToken } from '@/lib/admin-sessions';
import bcrypt from 'bcrypt';

// Para trocar o PIN:
// 1. Gere hash: node -e "require('bcrypt').hash('NOVO_PIN', 12).then(console.log)"
// 2. Atualize ADMIN_PASSWORD_HASH no .env (escape: \$2b\$12\$...)
// 3. pm2 restart crenas --update-env

// In-process brute-force guard. Survives HMR via globalThis.
// Single-process only (fine for current pm2 deploy). Migrate to Redis if scaling out.
interface AttemptRecord {
  count: number;
  firstFailAt: number;
  lockedUntil: number;
}
const g = globalThis as unknown as { __adminAuthAttempts?: Map<string, AttemptRecord> };
const attempts = g.__adminAuthAttempts ??= new Map<string, AttemptRecord>();

const WINDOW_MS = 5 * 60 * 1000;      // count resets if no failures for 5min
const LOCKOUT_MS = 15 * 60 * 1000;    // 15min lockout
const MAX_FAILS = 5;                  // 5 fails in window -> lockout
const DELAY_CAP_MS = 8000;            // max progressive delay

function getClientIp(request: NextRequest): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

function checkLockout(ip: string): number {
  const rec = attempts.get(ip);
  if (!rec) return 0;
  const now = Date.now();
  if (rec.lockedUntil > now) return Math.ceil((rec.lockedUntil - now) / 1000);
  // Expired lockout — clear it
  if (rec.lockedUntil && rec.lockedUntil <= now) {
    attempts.delete(ip);
  }
  return 0;
}

function registerFailure(ip: string): number {
  const now = Date.now();
  const rec = attempts.get(ip);
  if (!rec || now - rec.firstFailAt > WINDOW_MS) {
    attempts.set(ip, { count: 1, firstFailAt: now, lockedUntil: 0 });
    return 1;
  }
  rec.count += 1;
  if (rec.count >= MAX_FAILS) {
    rec.lockedUntil = now + LOCKOUT_MS;
  }
  return rec.count;
}

function clearAttempts(ip: string): void {
  attempts.delete(ip);
}

// POST /api/admin/auth — Login with bcrypt PIN verification
export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  try {
    const lockSeconds = checkLockout(ip);
    if (lockSeconds > 0) {
      return NextResponse.json(
        { error: `Muitas tentativas. Tente em ${Math.ceil(lockSeconds / 60)} min.` },
        { status: 429 },
      );
    }

    const passwordHash = process.env.ADMIN_PASSWORD_HASH;
    if (!passwordHash) {
      console.error('[admin/auth] ADMIN_PASSWORD_HASH not set in environment');
      return NextResponse.json({ error: 'Servidor mal configurado.' }, { status: 500 });
    }

    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    const password = body.password as string;

    if (!password || typeof password !== 'string') {
      return NextResponse.json({ error: 'PIN obrigatorio.' }, { status: 400 });
    }

    const isValid = await bcrypt.compare(password, passwordHash);

    if (!isValid) {
      const failCount = registerFailure(ip);
      const delayMs = Math.min(2 ** (failCount - 1) * 1000, DELAY_CAP_MS);
      await new Promise((resolve) => setTimeout(resolve, delayMs));

      const remaining = Math.max(0, MAX_FAILS - failCount);
      const msg = remaining > 0
        ? `PIN incorreto. ${remaining} tentativa${remaining === 1 ? '' : 's'} restante${remaining === 1 ? '' : 's'}.`
        : 'PIN incorreto. Conta bloqueada por 15 min.';
      return NextResponse.json({ error: msg }, { status: 401 });
    }

    clearAttempts(ip);
    const token = createToken();
    return NextResponse.json({ token });
  } catch (err) {
    console.error('[admin/auth] Unexpected error:', err);
    return NextResponse.json({ error: 'Erro no servidor.' }, { status: 500 });
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

// DELETE /api/admin/auth — Logout
export async function DELETE() {
  return NextResponse.json({ ok: true });
}
