import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const body = await request.json();
    const { pipeline_id, agent_id, session_key, parent_session, label, status,
            task_prompt, result_summary, error_message } = body;

    if (!pipeline_id || !agent_id) {
      return NextResponse.json({ error: 'pipeline_id e agent_id obrigatorios' }, { status: 400 });
    }

    // Upsert by (pipeline_id, session_key)
    await query(
      `INSERT INTO pipeline_agent_runs (pipeline_id, agent_id, session_key, parent_session, label, status, task_prompt, started_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
       ON CONFLICT (pipeline_id, session_key) DO UPDATE SET
         status = EXCLUDED.status,
         completed_at = CASE WHEN EXCLUDED.status IN ('completed', 'failed') THEN NOW() ELSE pipeline_agent_runs.completed_at END,
         duration_sec = CASE WHEN EXCLUDED.status IN ('completed', 'failed')
           THEN EXTRACT(EPOCH FROM (NOW() - pipeline_agent_runs.started_at))::int
           ELSE pipeline_agent_runs.duration_sec END`,
      [pipeline_id, agent_id, session_key, parent_session, label, status || 'running', task_prompt]
    );

    if (status === 'completed' || status === 'failed') {
      if (result_summary || error_message) {
        await query(
          `UPDATE pipeline_agent_runs SET result_summary = COALESCE($1, result_summary), error_message = $2
           WHERE pipeline_id = $3 AND session_key = $4`,
          [result_summary, error_message, pipeline_id, session_key]
        );
      }

      // Auto-complete pipeline if all agents done
      const pending = await query<{ count: string }>(
        `SELECT count(*) as count FROM pipeline_agent_runs
         WHERE pipeline_id = $1 AND status NOT IN ('completed', 'failed')`,
        [pipeline_id]
      );
      if (parseInt(pending[0]?.count || '0') === 0) {
        const failures = await query<{ count: string }>(
          `SELECT count(*) as count FROM pipeline_agent_runs WHERE pipeline_id = $1 AND status = 'failed'`,
          [pipeline_id]
        );
        const finalStatus = parseInt(failures[0]?.count || '0') > 0 ? 'erro' : 'concluido';
        await query(
          `UPDATE pipeline_execucoes SET status = $1, concluido_em = NOW(),
           tempo_total_min = EXTRACT(EPOCH FROM (NOW() - iniciado_em))::int / 60
           WHERE id = $2`,
          [finalStatus, pipeline_id]
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[AgentRun] POST error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
