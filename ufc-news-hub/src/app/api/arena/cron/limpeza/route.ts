import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// ═══════════════════════════════════════════════════════════════
// Cron: Limpeza semanal (Monday 3h UTC)
// Removes stale data to keep the database lean
// ═══════════════════════════════════════════════════════════════

interface DeleteResult {
  count: number;
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const userAgent = request.headers.get('user-agent') || '';
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 503 });
  }

  const isVercelCron = userAgent.startsWith('vercel-cron');
  if (!isVercelCron && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  console.log(`[LIMPEZA CRON] Iniciando - ${new Date().toISOString()}`);

  const results: Record<string, number | string> = {};

  // 1. card_monitor_logs > 30 dias
  try {
    const rows = await query<DeleteResult>(
      `DELETE FROM card_monitor_logs WHERE created_at < NOW() - INTERVAL '30 days' RETURNING 1 AS count`
    );
    results.card_monitor_logs = rows.length;
    console.log(`[LIMPEZA CRON] card_monitor_logs: ${rows.length} removidos`);
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown';
    results.card_monitor_logs = `erro: ${msg}`;
    console.error('[LIMPEZA CRON] card_monitor_logs erro:', msg);
  }

  // 2. card_snapshots nao-latest > 30 dias
  try {
    const rows = await query<DeleteResult>(
      `DELETE FROM card_snapshots WHERE is_latest = false AND created_at < NOW() - INTERVAL '30 days' RETURNING 1 AS count`
    );
    results.card_snapshots = rows.length;
    console.log(`[LIMPEZA CRON] card_snapshots: ${rows.length} removidos`);
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown';
    results.card_snapshots = `erro: ${msg}`;
    console.error('[LIMPEZA CRON] card_snapshots erro:', msg);
  }

  // 3. atividades > 60 dias
  try {
    const rows = await query<DeleteResult>(
      `DELETE FROM atividades WHERE created_at < NOW() - INTERVAL '60 days' RETURNING 1 AS count`
    );
    results.atividades = rows.length;
    console.log(`[LIMPEZA CRON] atividades: ${rows.length} removidos`);
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown';
    results.atividades = `erro: ${msg}`;
    console.error('[LIMPEZA CRON] atividades erro:', msg);
  }

  // 4. notificacoes lidas > 30 dias
  try {
    const rows = await query<DeleteResult>(
      `DELETE FROM notificacoes WHERE lida = true AND created_at < NOW() - INTERVAL '30 days' RETURNING 1 AS count`
    );
    results.notificacoes = rows.length;
    console.log(`[LIMPEZA CRON] notificacoes: ${rows.length} removidos`);
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown';
    results.notificacoes = `erro: ${msg}`;
    console.error('[LIMPEZA CRON] notificacoes erro:', msg);
  }

  // 5. chat_evento mensagens > 30 dias
  try {
    const rows = await query<DeleteResult>(
      `DELETE FROM chat_evento WHERE created_at < NOW() - INTERVAL '30 days' RETURNING 1 AS count`
    );
    results.chat_evento = rows.length;
    console.log(`[LIMPEZA CRON] chat_evento: ${rows.length} removidos`);
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown';
    results.chat_evento = `erro: ${msg}`;
    console.error('[LIMPEZA CRON] chat_evento erro:', msg);
  }

  // 6. sessoes expiradas
  try {
    const rows = await query<DeleteResult>(
      `DELETE FROM sessions WHERE expires_at < NOW() RETURNING 1 AS count`
    );
    results.sessions = rows.length;
    console.log(`[LIMPEZA CRON] sessions: ${rows.length} removidos`);
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown';
    results.sessions = `erro: ${msg}`;
    console.error('[LIMPEZA CRON] sessions erro:', msg);
  }

  console.log(`[LIMPEZA CRON] Finalizado - ${JSON.stringify(results)}`);

  return NextResponse.json({
    success: true,
    deleted: results,
    timestamp: new Date().toISOString(),
  });
}
