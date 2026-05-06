import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { readdirSync } from 'fs';
import path from 'path';
import { spawnClaude } from '@/lib/claude-cli';
import type { ChildProcess } from 'child_process';
import {
  createConversation, getConversation, updateConversation,
  saveUserMessage, saveAssistantMessage,
} from '@/lib/war-room/persistence';
import { runPipeline } from '@/lib/pipeline-runner';
import { startBridge } from '@/lib/war-room/pipeline-bridge';

// ═══════════════════════════════════════════════════════════
// POST /api/admin/claude/chat — Chat with persistence
// GET  /api/admin/claude/chat — List available agents
//
// Flow:
// 1. Create/get conversation in BD
// 2. Save user message in BD
// 3. Spawn claude CLI (with --resume if continuing)
// 4. Stream SSE to browser
// 5. On completion: save assistant message in BD
// ═══════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// ── Active process tracking (survives HMR) ──

const gProc = globalThis as unknown as { __claudeProcs?: Map<string, ChildProcess> };
if (!gProc.__claudeProcs) gProc.__claudeProcs = new Map();
const activeProcesses = gProc.__claudeProcs;

// ── GET: List available agents ──

const AGENTS_DIR = path.join(process.env.HOME || '/root', 'ufc-news-hub/.claude/agents');

const PIPELINE_AGENTS = new Set([
  'ceo', 'card-scraper', 'fight-analyst',
  'card-validator', 'event-page-generator', 'translator',
]);

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const entries = readdirSync(AGENTS_DIR, { withFileTypes: true });
    const agents = entries
      .filter(e => e.isFile() && e.name.endsWith('.md'))
      .map(e => ({ id: e.name.replace('.md', '') }))
      .filter(a => PIPELINE_AGENTS.has(a.id));
    return Response.json({ agents });
  } catch {
    return Response.json({ agents: [] });
  }
}

// ── POST: Chat with agent (SSE streaming + persistence) ──

export async function POST(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const body = await request.json() as {
      agentId?: string;
      message?: string;
      conversationId?: string;
    };

    const { message } = body;
    if (!message?.trim()) {
      return Response.json({ error: 'message obrigatoria' }, { status: 400 });
    }

    const agent = body.agentId || 'ceo';
    const msgText = message.trim();

    // ── 1. Get or create conversation ──
    let conversationId = body.conversationId || '';
    let claudeSessionId: string | null = null;

    if (conversationId) {
      const conv = await getConversation(conversationId);
      if (conv) {
        claudeSessionId = conv.claude_session_id;
      } else {
        conversationId = ''; // conversation not found, create new
      }
    }

    if (!conversationId) {
      const conv = await createConversation(agent, msgText.substring(0, 60));
      conversationId = conv.id;
    }

    // ── 2. Save user message in BD ──
    await saveUserMessage(conversationId, agent, msgText);
    await updateConversation(conversationId, { message_count_increment: 1 });

    // ── 2.5. Detect pipeline intent ──
    const hasPipelineKeyword = /pipeline|analise|analisa|roda.*analis|faz.*analis|fa[cç]a.*analis|gera.*analis|card.*semanal|analis.*semana|analis.*card|analis.*evento|analis.*ufc/i.test(msgText);
    const hasEventRef = /ufc\s*\d+|proximo\s+evento|essa\s+semana|desta\s+semana|pr[oó]ximo\s+card/i.test(msgText);
    const isPipelineIntent = hasPipelineKeyword && (hasEventRef || /pipeline/i.test(msgText));

    if (isPipelineIntent && agent === 'ceo') {
      const eventoMatch = msgText.match(/UFC\s*\d+[^.]*/i);
      const eventoNome = eventoMatch ? eventoMatch[0].trim() : 'Proximo Evento';

      // Start pipeline in background
      const execution = await runPipeline(eventoNome);

      if (!execution) {
        // Pipeline lock failed — another pipeline is running
        const encoder = new TextEncoder();
        const errorStream = new ReadableStream({
          start(controller) {
            controller.enqueue(encoder.encode(`event: init\ndata: ${JSON.stringify({ conversationId })}\n\n`));
            controller.enqueue(encoder.encode(`event: text\ndata: ${JSON.stringify({ delta: 'Ja existe um pipeline rodando. Aguarde a conclusao ou cancele antes de iniciar outro.' })}\n\n`));
            controller.enqueue(encoder.encode(`event: done\ndata: ${JSON.stringify({ text: 'Ja existe um pipeline rodando.', conversationId, isError: false })}\n\n`));
            controller.close();
          },
        });

        await saveAssistantMessage(conversationId, agent, 'Ja existe um pipeline rodando. Aguarde a conclusao ou cancele antes de iniciar outro.');
        await updateConversation(conversationId, { message_count_increment: 1 });

        return new Response(errorStream, {
          headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache, no-store' },
        });
      }

      // Connect pipeline events to War Room feed
      startBridge(execution);

      // Return immediate CEO response acknowledging pipeline start
      const encoder = new TextEncoder();
      const ackStream = new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(`event: init\ndata: ${JSON.stringify({ conversationId })}\n\n`));
          controller.enqueue(encoder.encode(`event: text\ndata: ${JSON.stringify({ delta: `Pipeline iniciado para **${eventoNome}**. Acompanhe o progresso aqui no feed — cada agente vai aparecer conforme for acionado. Voce pode acompanhar pelo tab Feed (Todos).` })}\n\n`));
          controller.enqueue(encoder.encode(`event: done\ndata: ${JSON.stringify({
            text: `Pipeline iniciado para ${eventoNome}. Acompanhe o progresso no feed.`,
            conversationId,
            isError: false,
            pipelineExecutionId: execution.execution_id,
          })}\n\n`));
          controller.close();
        },
      });

      await saveAssistantMessage(conversationId, agent, `Pipeline iniciado para ${eventoNome}. Acompanhe o progresso no feed — cada agente vai aparecer conforme for acionado.`);
      await updateConversation(conversationId, { message_count_increment: 1 });

      return new Response(ackStream, {
        headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache, no-store' },
      });
    }

    // ── 3. Spawn claude CLI (normal chat, no pipeline) ──
    const handle = spawnClaude({
      prompt: msgText,
      agent,
      permissionMode: 'acceptEdits',
      includePartialMessages: true,
      ...(claudeSessionId
        ? { resumeSessionId: claudeSessionId }
        : {}
      ),
    });

    activeProcesses.set(conversationId, handle.process);
    handle.process.on('exit', () => activeProcesses.delete(conversationId));

    // ── 4. Stream SSE + accumulate for persistence ──
    const encoder = new TextEncoder();
    let fullText = '';
    let returnedSessionId = '';
    let tokensIn = 0;
    let tokensOut = 0;
    let durationMs = 0;
    let modelUsed = '';
    const toolCallsAccum: unknown[] = [];

    const stream = new ReadableStream({
      async start(controller) {
        const send = (event: string, data: Record<string, unknown>) => {
          try {
            controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
          } catch { handle.kill(); }
        };

        // Send conversationId immediately so frontend can track it
        send('init', { conversationId });

        try {
          for await (const evt of handle.events) {
            switch (evt.type) {
              case 'init':
                returnedSessionId = evt.sessionId;
                modelUsed = evt.model;
                send('session', { sessionId: evt.sessionId, model: evt.model });
                break;

              case 'text_delta':
                fullText += evt.text;
                send('text', { delta: evt.text });
                break;

              case 'tool_start':
                toolCallsAccum.push({ id: evt.id, name: evt.name, phase: 'running' });
                send('tool_start', { id: evt.id, name: evt.name });
                break;

              case 'tool_input_delta':
                send('tool_input', { id: evt.id, partial: evt.partialJson });
                break;

              case 'tool_result': {
                const tc = toolCallsAccum.find((t: unknown) => (t as { id: string }).id === evt.toolUseId);
                if (tc) (tc as { phase: string; meta?: string }).phase = evt.isError ? 'error' : 'done';
                send('tool_result', { id: evt.toolUseId, content: evt.content, isError: evt.isError });
                break;
              }

              case 'result': {
                if (evt.text) fullText = evt.text;
                const usage = evt.usage as Record<string, unknown>;
                tokensIn = (usage.input_tokens as number) || 0;
                tokensOut = (usage.output_tokens as number) || 0;
                durationMs = evt.durationMs;
                if (evt.sessionId) returnedSessionId = evt.sessionId;

                send('done', {
                  text: evt.text,
                  conversationId,
                  sessionId: returnedSessionId,
                  isError: evt.isError,
                  durationMs: evt.durationMs,
                  usage: evt.usage,
                });
                break;
              }

              case 'error':
                send('error', { message: evt.message });
                break;

              case 'rate_limit':
                send('rate_limit', { utilization: evt.utilization, status: evt.status });
                break;
            }
          }
        } catch {
          // Stream ended
        }

        // ── 5. Persist assistant message after stream completes ──
        try {
          if (fullText) {
            await saveAssistantMessage(
              conversationId, agent, fullText,
              toolCallsAccum.length > 0 ? toolCallsAccum : undefined,
              { input: tokensIn, output: tokensOut, durationMs, model: modelUsed },
            );
            await updateConversation(conversationId, {
              claude_session_id: returnedSessionId || undefined,
              message_count_increment: 1,
            });
          }
        } catch (err) {
          console.error('[Chat] Failed to persist assistant message:', err);
        }

        try { controller.close(); } catch { /* already closed */ }
      },

      cancel() {
        handle.kill();
        activeProcesses.delete(conversationId);
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
  } catch (error) {
    console.error('[API /admin/claude/chat] error:', error);
    return Response.json({ error: 'Erro interno' }, { status: 500 });
  }
}
