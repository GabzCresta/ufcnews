import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const limit = parseInt(request.nextUrl.searchParams.get('limit') || '10');

    const pipelines = await query<{
      id: string;
      evento_nome: string;
      status: string;
      step_atual: string;
      modo: string;
      iniciado_em: string;
      concluido_em: string | null;
      tempo_total_min: number;
    }>(
      `SELECT id, evento_nome, status, step_atual, modo, iniciado_em, concluido_em, tempo_total_min
       FROM pipeline_execucoes
       WHERE modo = 'websocket'
       ORDER BY created_at DESC LIMIT $1`,
      [limit]
    );

    // Fetch agent runs for each pipeline
    const result = await Promise.all(pipelines.map(async (p) => {
      const runs = await query<{
        agent_id: string;
        status: string;
        label: string;
        started_at: string;
        completed_at: string | null;
        duration_sec: number;
        error_message: string | null;
      }>(
        `SELECT agent_id, status, label, started_at, completed_at, duration_sec, error_message
         FROM pipeline_agent_runs WHERE pipeline_id = $1 ORDER BY created_at`,
        [p.id]
      );
      return { ...p, agent_runs: runs };
    }));

    return NextResponse.json({ pipelines: result });
  } catch (error) {
    console.error('[OrchestratorHistory] GET error:', error);
    return NextResponse.json({ pipelines: [] });
  }
}
