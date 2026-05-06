import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { runPipeline, continueAfterHumanGate, cancelExecution, getExecution, getAllExecutions } from '@/lib/pipeline-runner';

// ═══════════════════════════════════════════════════════════
// POST: Trigger pipeline via Claude Code CLI
// ═══════════════════════════════════════════════════════════

export async function POST(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const body = await request.json();
    const { evento_nome, action, execution_id: execId } = body as {
      evento_nome?: string;
      action?: string;
      execution_id?: string;
    };

    // Action: reset/cancel execution
    if (action === 'reset' && execId) {
      cancelExecution(execId);
      return NextResponse.json({ status: 'cancelled', execution_id: execId });
    }

    // Action: confirm human gate (sync — phases run fire-and-forget)
    if (action === 'confirm' && execId) {
      const ok = continueAfterHumanGate(execId);
      if (!ok) {
        return NextResponse.json({ error: 'Execucao nao encontrada ou nao esta aguardando confirmacao' }, { status: 400 });
      }
      return NextResponse.json({ status: 'confirmed', execution_id: execId });
    }

    // Action: start pipeline
    if (!evento_nome) {
      return NextResponse.json({ error: 'evento_nome eh obrigatorio' }, { status: 400 });
    }

    // In-memory check (fast path)
    const running = getAllExecutions().find((e) => e.status === 'running' || e.status === 'waiting_confirmation');
    if (running) {
      return NextResponse.json(
        { error: `Pipeline ja esta ${running.status === 'waiting_confirmation' ? 'aguardando confirmacao' : 'rodando'}`, execution_id: running.execution_id },
        { status: 409 }
      );
    }

    // Atomic DB lock + start pipeline
    const execution = await runPipeline(evento_nome);

    if (!execution) {
      return NextResponse.json(
        { error: 'Outro pipeline ja esta rodando (lock atomico no BD)' },
        { status: 409 }
      );
    }

    return NextResponse.json({
      execution_id: execution.execution_id,
      evento_nome: execution.evento_nome,
      status: execution.status,
      started_at: execution.started_at,
      message: `Pipeline v2 iniciado para: ${evento_nome}`,
    });
  } catch (error) {
    console.error('[API /admin/pipeline/trigger] POST error:', error);
    return NextResponse.json({ error: 'Erro ao iniciar pipeline' }, { status: 500 });
  }
}

// ═══════════════════════════════════════════════════════════
// GET: Check status of a specific execution or all active
// ═══════════════════════════════════════════════════════════

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const executionId = request.nextUrl.searchParams.get('execution_id');

  if (executionId) {
    const execution = getExecution(executionId);
    if (!execution) {
      return NextResponse.json({ error: 'Execucao nao encontrada' }, { status: 404 });
    }
    return NextResponse.json(execution);
  }

  return NextResponse.json({ executions: getAllExecutions() });
}
