import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

// POST: Create pipeline execution for WebSocket orchestrator
export async function POST(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const { evento_nome } = await request.json();
    if (!evento_nome?.trim()) {
      return NextResponse.json({ error: 'evento_nome obrigatorio' }, { status: 400 });
    }

    const sessionKey = `agent:main:pipeline-${Date.now()}`;
    const mondayOfWeek = getMondayOfWeek();

    const rows = await query<{ id: string }>(
      `INSERT INTO pipeline_execucoes (evento_nome, semana_inicio, status, step_atual, iniciado_em, is_test, modo, orchestrator_session)
       VALUES ($1, $2, 'rodando', 'pipeline', NOW(), true, 'websocket', $3) RETURNING id`,
      [evento_nome.trim(), mondayOfWeek, sessionKey]
    );

    const pipelineId = rows[0]?.id;
    if (!pipelineId) {
      return NextResponse.json({ error: 'Erro ao criar execucao' }, { status: 500 });
    }

    return NextResponse.json({
      pipeline_id: pipelineId,
      session_key: sessionKey,
      evento_nome: evento_nome.trim(),
    });
  } catch (error) {
    console.error('[Orchestrator] POST error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}

// GET: Get active orchestrator pipeline
export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const rows = await query<{
      id: string;
      evento_nome: string;
      status: string;
      orchestrator_session: string;
      iniciado_em: string;
    }>(
      `SELECT id, evento_nome, status, orchestrator_session, iniciado_em
       FROM pipeline_execucoes
       WHERE modo = 'websocket'
       ORDER BY created_at DESC LIMIT 1`
    );

    return NextResponse.json({ pipeline: rows[0] || null });
  } catch {
    return NextResponse.json({ pipeline: null });
  }
}

function getMondayOfWeek(): string {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  return d.toISOString().split('T')[0];
}
