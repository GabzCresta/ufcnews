import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { log } from '@/lib/log';

const REQUIRED_ENV_VARS = [
  'DATABASE_URL', 'ANTHROPIC_API_KEY', 'ADMIN_PASSWORD', 'ADMIN_PASSWORD_HASH', 'CRON_SECRET',
] as const;

interface SubsystemStatus {
  ok: boolean;
  detail?: unknown;
}

async function checkDb(): Promise<SubsystemStatus> {
  try {
    const t0 = Date.now();
    await pool.query('SELECT 1');
    return { ok: true, detail: { latency_ms: Date.now() - t0 } };
  } catch (e) {
    return { ok: false, detail: String(e) };
  }
}

async function checkRt(): Promise<SubsystemStatus> {
  try {
    const res = await fetch('http://localhost:3011/health', { signal: AbortSignal.timeout(2000) });
    if (!res.ok) return { ok: false, detail: `status ${res.status}` };
    return { ok: true, detail: await res.json() };
  } catch (e) {
    return { ok: false, detail: String(e) };
  }
}

async function lastCronRun(): Promise<Record<string, string | null>> {
  try {
    const rows = (await pool.query<{ endpoint: string; last: string }>(
      `SELECT
         'scoring' AS endpoint,
         (SELECT MAX(processada_em)::text FROM previsoes) AS last
       UNION ALL
       SELECT
         'eventos_status_change' AS endpoint,
         (SELECT MAX(updated_at)::text FROM eventos) AS last
       UNION ALL
       SELECT
         'fotos_refresh' AS endpoint,
         (SELECT MAX(imagem_updated_at)::text FROM lutadores) AS last`
    )).rows;
    return Object.fromEntries(rows.map(r => [r.endpoint, r.last]));
  } catch {
    return {};
  }
}

export async function GET() {
  const env = Object.fromEntries(REQUIRED_ENV_VARS.map(k => [k, !!process.env[k]]));

  const [db, rt, crons] = await Promise.all([checkDb(), checkRt(), lastCronRun()]);

  const ok = db.ok; // DB is the hard requirement; rt down is degraded but not "unhealthy"
  const status = db.ok ? (rt.ok ? 'ok' : 'degraded') : 'error';

  const payload = {
    status,
    timestamp: new Date().toISOString(),
    uptime_s: Math.floor(process.uptime()),
    build_id: process.env.NEXT_BUILD_ID ?? null,
    db,
    rt,
    crons,
    env,
  };

  if (!ok) log.error(payload, 'healthcheck failed');

  return NextResponse.json(payload, {
    status: ok ? 200 : 500,
    headers: { 'Cache-Control': 'no-store' },
  });
}
