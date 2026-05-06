import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// ═══════════════════════════════════════════════════════════
// Cron: Pre-evento auto-transition (runs hourly on Fri/Sat)
// Checks for upcoming events within 3h and sets them ao_vivo
// ═══════════════════════════════════════════════════════════

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 503 });
  }
  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  console.log(`[PRE-EVENTO CRON] Iniciando - ${new Date().toISOString()}`);

  try {
    // Find events with status 'agendado' happening within the next 3 hours
    // that have at least one fight registered
    const eventosProximos = await query<{
      id: string;
      nome: string;
      data_evento: string;
      total_lutas: number;
    }>(
      `SELECT e.id, e.nome, e.data_evento::text, COUNT(l.id)::int AS total_lutas
       FROM eventos e
       JOIN lutas l ON l.evento_id = e.id
       WHERE e.status = 'agendado'
         AND e.data_evento <= NOW() + INTERVAL '3 hours'
       GROUP BY e.id, e.nome, e.data_evento`
    );

    if (eventosProximos.length === 0) {
      console.log('[PRE-EVENTO CRON] Nenhum evento proximo para transicionar');
      return NextResponse.json({
        success: true,
        message: 'Nenhum evento proximo para transicionar',
        transicionados: 0,
      });
    }

    const transicionados: Array<{
      id: string;
      nome: string;
      data_evento: string;
      total_lutas: number;
    }> = [];

    for (const evento of eventosProximos) {
      await query(
        `UPDATE eventos SET status = 'ao_vivo' WHERE id = $1`,
        [evento.id]
      );

      transicionados.push(evento);

      console.log(
        `[PRE-EVENTO CRON] ${evento.nome} agendado → ao_vivo ` +
        `(${evento.total_lutas} lutas, data: ${evento.data_evento})`
      );
    }

    return NextResponse.json(
      {
        success: true,
        transicionados: transicionados.length,
        eventos: transicionados.map((e) => ({
          id: e.id,
          nome: e.nome,
          data_evento: e.data_evento,
          total_lutas: e.total_lutas,
        })),
      },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error) {
    console.error('[PRE-EVENTO CRON] Erro:', error);
    return NextResponse.json(
      {
        error: 'Erro ao processar pre-evento',
        details: error instanceof Error ? error.message : 'Unknown',
      },
      { status: 500 }
    );
  }
}
