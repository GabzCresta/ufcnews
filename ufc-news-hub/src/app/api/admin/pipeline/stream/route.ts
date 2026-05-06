import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { getExecution, pipelineEvents, type LogEntry } from '@/lib/pipeline-runner';

// ═══════════════════════════════════════════════════════════
// GET: SSE stream via EventEmitter (no polling, instant)
// Pattern: OpenClaw's onAgentEvent → writeSseEvent
// ═══════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const executionIdParam = request.nextUrl.searchParams.get('execution_id');
  if (!executionIdParam) {
    return new Response(JSON.stringify({ error: 'execution_id obrigatorio' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const executionId = executionIdParam;
  const execution = getExecution(executionId);
  if (!execution) {
    return new Response(JSON.stringify({ error: 'Execucao nao encontrada' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      // 1. Send metadata
      controller.enqueue(encoder.encode(
        `event: meta\ndata: ${JSON.stringify({
          execution_id: execution.execution_id,
          current_phase: execution.current_phase,
          evento_nome: execution.evento_nome,
        })}\n\n`
      ));

      // 2. Send all existing logs (catch up)
      for (const log of execution.logs) {
        controller.enqueue(encoder.encode(
          `event: log\ndata: ${JSON.stringify(log)}\n\n`
        ));
      }

      // 3. If terminal state (completed/failed), send status and close
      if (execution.status !== 'running' && execution.status !== 'waiting_confirmation') {
        controller.enqueue(encoder.encode(
          `event: status\ndata: ${JSON.stringify({ status: execution.status, finished_at: execution.finished_at })}\n\n`
        ));
        controller.close();
        return;
      }

      // 3b. If waiting_confirmation, send current status (but keep stream open)
      if (execution.status === 'waiting_confirmation') {
        controller.enqueue(encoder.encode(
          `event: status\ndata: ${JSON.stringify({ status: execution.status })}\n\n`
        ));
      }

      // 4. Subscribe to new events via EventEmitter (instant, no polling)
      const onLog = (log: LogEntry) => {
        try {
          controller.enqueue(encoder.encode(
            `event: log\ndata: ${JSON.stringify(log)}\n\n`
          ));
        } catch {
          cleanup();
        }
      };

      const onStatus = (status: string) => {
        try {
          const exec = getExecution(executionId);
          controller.enqueue(encoder.encode(
            `event: status\ndata: ${JSON.stringify({ status, finished_at: exec?.finished_at })}\n\n`
          ));
          // Only close stream on terminal states
          if (status === 'completed' || status === 'failed') {
            controller.close();
            cleanup();
          }
        } catch {
          cleanup();
        }
      };

      function cleanup() {
        pipelineEvents.off(executionId, onLog);
        pipelineEvents.off(`${executionId}:status`, onStatus);
      }

      pipelineEvents.on(executionId, onLog);
      pipelineEvents.on(`${executionId}:status`, onStatus);

      // 5. Heartbeat every 15s to keep connection alive through proxies
      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(`: heartbeat\n\n`));
        } catch {
          clearInterval(heartbeat);
          cleanup();
        }
      }, 15_000);

      // Extend cleanup to clear heartbeat
      const originalCleanup = cleanup;
      // eslint-disable-next-line no-inner-declarations
      function fullCleanup() {
        clearInterval(heartbeat);
        originalCleanup();
      }
      // Override cleanup reference for onLog/onStatus error paths
      Object.assign(cleanup, fullCleanup);
    },

    cancel() {
      pipelineEvents.removeAllListeners(executionId);
      pipelineEvents.removeAllListeners(`${executionId}:status`);
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-store',
      'Connection': 'keep-alive',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
