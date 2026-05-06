import { EventEmitter } from 'events';
import { spawn as nodeSpawn } from 'child_process';
import { spawnClaude } from '@/lib/claude-cli';
import {
  createPipelineRun, updatePipelineRun, acquirePipelineLock,
  aggregatePipelineCosts, markOrphanedPipelinesAsFailed,
  saveCardSnapshot, incrementManualIntervention,
  createAgentTask, claimAgentTask, completeAgentTask, failAgentTask, retryAgentTask,
  appendLog, setAgentStatus, calculateWeeklyScores, checkDemotions,
} from '@/lib/war-room/persistence';
import { formatCost } from '@/lib/war-room/cost';
import type { PipelineStatus } from '@/lib/war-room/types';

// ═══════════════════════════════════════════════════════════
// Pipeline Runner v2 — Production-grade orchestration
//
// Principles:
//   1. DB is the source of truth (not in-memory Map)
//   2. Orchestrate with CODE, not LLMs (CEO: 2 calls, not 11)
//   3. Failure is a trigger, not a stop (auto-retry)
//   4. Each phase emits cost (full observability)
//   5. Atomic lock (impossible to run 2 pipelines)
//   6. Recovery on startup (orphaned pipelines)
//   7. Card parsed as JSON (never truncated, persisted in DB)
//   8. Build async (doesn't block Node.js)
// ═══════════════════════════════════════════════════════════

// ── Types ──

export interface LogEntry {
  ts: string;
  type: 'info' | 'agent' | 'error' | 'system' | 'tool' | 'phase' | 'cost';
  message: string;
}

export interface PipelineExecution {
  execution_id: string;
  db_id: string | null;
  evento_nome: string;
  status: 'running' | 'completed' | 'failed' | 'waiting_confirmation';
  started_at: string;
  finished_at: string | null;
  result: string | null;
  logs: LogEntry[];
  current_phase: string;
  card_json: unknown | null;
}

// ── globalThis singleton (survives HMR) ──

interface PipelineGlobals {
  pipelineEvents: EventEmitter;
  executions: Map<string, PipelineExecution>;
  initialized: boolean;
}

const g = globalThis as unknown as { __pipeline?: PipelineGlobals };
if (!g.__pipeline) {
  const emitter = new EventEmitter();
  emitter.setMaxListeners(50);
  g.__pipeline = {
    pipelineEvents: emitter,
    executions: new Map(),
    initialized: false,
  };
}

export const pipelineEvents = g.__pipeline.pipelineEvents;
const executions = g.__pipeline.executions;

// ── Startup: recover orphaned pipelines ──

if (!g.__pipeline.initialized) {
  g.__pipeline.initialized = true;
  markOrphanedPipelinesAsFailed()
    .then((count) => { if (count > 0) console.log(`[Pipeline] Recovered ${count} orphaned pipeline(s)`); })
    .catch(() => {});
}

// ── Public API ──

export function getExecution(id: string): PipelineExecution | undefined {
  return executions.get(id);
}

export function getAllExecutions(): PipelineExecution[] {
  return Array.from(executions.values());
}

export function cancelExecution(id: string): void {
  const exec = executions.get(id);
  if (exec) {
    exec.status = 'failed';
    exec.finished_at = now();
    exec.current_phase = 'cancelled';
    emitStatus(id, 'failed');
    if (exec.db_id) {
      updatePipelineRun(exec.db_id, { status: 'failed', current_phase: 'cancelled' }).catch(() => {});
    }
  }
  executions.delete(id);
}

// ── Event helpers ──

function emit(id: string, log: LogEntry): void {
  const exec = executions.get(id);
  if (exec) exec.logs.push(log);
  pipelineEvents.emit(id, log);
}

function emitStatus(id: string, status: PipelineExecution['status']): void {
  pipelineEvents.emit(`${id}:status`, status);
}

function emitCost(id: string, agentName: string, result: AgentResult): void {
  const tokens = result.tokensInput + result.tokensOutput;
  const cost = formatCost((tokens / 1_000_000) * 18); // rough estimate for sonnet
  const time = Math.round(result.durationMs / 1000);
  emit(id, {
    ts: now(),
    type: 'cost',
    message: `[COST] ${agentName}: ${cost} (${(tokens / 1000).toFixed(1)}k tokens, ${time}s)`,
  });
}

function now(): string { return new Date().toISOString(); }

// ── Persist log to DB ──

async function persistLog(
  taskId: string | null,
  pipelineId: string | null,
  agentId: string,
  level: LogEntry['type'],
  message: string,
): Promise<void> {
  if (!taskId && !pipelineId) return;
  try {
    await appendLog(taskId || '', pipelineId, agentId, level, message);
  } catch {
    // Log persistence failure should not break pipeline
  }
}

// ── Agent call with full persistence ──

const RETRY_BACKOFF_MS = [60_000, 120_000, 300_000];
const MAX_RETRIES = 3;

const AGENT_MAP: Record<string, string> = {
  'ceo': 'ceo',
  'card-scraper': 'card-scraper',
  'fight-analyst': 'fight-analyst',
  'card-validator': 'card-validator',
  'event-page-generator': 'event-page-generator',
  'translator': 'translator',
};

interface AgentResult {
  success: boolean;
  text: string;
  taskId: string | null;
  tokensInput: number;
  tokensOutput: number;
  durationMs: number;
}

async function callAgent(
  executionId: string,
  pipelineDbId: string | null,
  agentId: string,
  prompt: string,
  options?: { appendSystemPrompt?: string; maxTurns?: number },
): Promise<AgentResult> {
  const agentName = AGENT_MAP[agentId] || agentId;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    if (attempt > 0) {
      const waitSec = Math.round(RETRY_BACKOFF_MS[attempt - 1] / 1000);
      emit(executionId, { ts: now(), type: 'system', message: `⏳ Rate limit — retry ${attempt}/${MAX_RETRIES} em ${waitSec}s...` });
      await new Promise(r => setTimeout(r, RETRY_BACKOFF_MS[attempt - 1]));
    }

    // ── Create task in DB ──
    let taskId: string | null = null;
    try {
      const task = await createAgentTask({
        agent_id: agentName,
        pipeline_id: pipelineDbId,
        type: agentName === 'ceo' ? 'ceo_eval' : 'pipeline_step',
        input_prompt: prompt.substring(0, 10000),
      });
      taskId = task.id;
      await claimAgentTask(taskId);
      await setAgentStatus(agentName, 'running');
    } catch {
      // DB failure should not block pipeline
    }

    emit(executionId, { ts: now(), type: 'info', message: `▶ ${agentName}${attempt > 0 ? ` (tentativa ${attempt + 1})` : ''}` });
    await persistLog(taskId, pipelineDbId, agentName, 'info', `Agente iniciado (tentativa ${attempt + 1})`);

    let fullText = '';
    let isError = false;
    let gotRateLimit = false;
    let lineBuffer = '';
    let tokensIn = 0;
    let tokensOut = 0;
    let durationMs = 0;
    const startTime = Date.now();

    const AGENT_TIMEOUT_MS = 15 * 60 * 1000; // 15 minutes per agent (was 10)
    const controller = new AbortController();
    const agentTimeout = setTimeout(() => controller.abort(), AGENT_TIMEOUT_MS);

    try {
      const { events } = spawnClaude({
        prompt,
        agent: agentName,
        maxTurns: options?.maxTurns || 50,
        model: 'sonnet',
        permissionMode: 'auto',
        abortSignal: controller.signal,
        appendSystemPrompt: options?.appendSystemPrompt,
      });

      for await (const evt of events) {
        switch (evt.type) {
          case 'init':
            emit(executionId, { ts: now(), type: 'info', message: `Sessao iniciada (model: ${evt.model})` });
            break;

          case 'text_delta': {
            lineBuffer += evt.text;
            const lines = lineBuffer.split('\n');
            lineBuffer = lines.pop() || '';
            for (const line of lines) {
              if (line.trim()) {
                emit(executionId, { ts: now(), type: 'agent', message: line.trim() });
              }
            }
            break;
          }

          case 'tool_start':
            emit(executionId, { ts: now(), type: 'tool', message: `🔧 ${evt.name}` });
            await persistLog(taskId, pipelineDbId, agentName, 'tool', `Tool: ${evt.name}`);
            break;

          case 'tool_result':
            if (evt.content.trim()) {
              const preview = evt.content.substring(0, 200);
              emit(executionId, { ts: now(), type: 'info', message: `  ← ${preview.trim()}` });
            }
            break;

          case 'assistant_message':
            for (const block of evt.content) {
              if (block.type === 'text' && block.text) {
                fullText = block.text;
              }
            }
            break;

          case 'rate_limit':
            if (evt.status !== 'allowed_warning' && evt.status !== 'allowed') {
              gotRateLimit = true;
            }
            break;

          case 'result': {
            isError = evt.isError;
            if (evt.text) fullText = evt.text;
            durationMs = evt.durationMs;
            const usage = evt.usage as Record<string, unknown>;
            tokensIn = (usage.input_tokens as number) || 0;
            tokensOut = (usage.output_tokens as number) || 0;
            emit(executionId, { ts: now(), type: 'info', message: `✓ ${agentName}: ${Math.round(durationMs / 1000)}s (${evt.numTurns} turns, ${tokensIn + tokensOut} tokens)` });
            break;
          }

          case 'error':
            emit(executionId, { ts: now(), type: 'error', message: evt.message });
            isError = true;
            break;
        }
      }

      if (lineBuffer.trim()) {
        emit(executionId, { ts: now(), type: 'agent', message: lineBuffer.trim() });
      }
    } catch (err) {
      const isAbort = err instanceof Error && err.name === 'AbortError';
      const msg = isAbort ? `Agente excedeu timeout de ${AGENT_TIMEOUT_MS / 1000}s` : (err instanceof Error ? err.message : 'Erro desconhecido');
      emit(executionId, { ts: now(), type: 'error', message: `Agente falhou: ${msg}` });
      isError = true;
    } finally {
      clearTimeout(agentTimeout);
    }

    if (!durationMs) durationMs = Date.now() - startTime;

    // ── Rate limit retry (uses retryAgentTask — NO XP penalty) ──
    if (gotRateLimit && attempt < MAX_RETRIES) {
      if (taskId) await retryAgentTask(taskId, 'Rate limit').catch(() => {});
      continue;
    }
    if (isError && fullText.toLowerCase().includes('rate limit') && attempt < MAX_RETRIES) {
      if (taskId) await retryAgentTask(taskId, 'Rate limit (from error text)').catch(() => {});
      continue;
    }

    // ── Success ──
    if (!isError) {
      if (taskId) {
        try {
          await completeAgentTask(taskId, agentName, {
            output_text: fullText,
            tokens_input: tokensIn,
            tokens_output: tokensOut,
            duration_ms: durationMs,
          }, 'sonnet');
        } catch {
          // DB failure should not block pipeline
        }
      }
      await setAgentStatus(agentName, 'active').catch(() => {});
      return { success: true, text: fullText, taskId, tokensInput: tokensIn, tokensOutput: tokensOut, durationMs };
    }

    // ── Failure ──
    if (taskId) {
      await failAgentTask(taskId, agentName, fullText.substring(0, 500) || 'Erro desconhecido').catch(() => {});
    }
    await setAgentStatus(agentName, 'active').catch(() => {});

    if (attempt >= MAX_RETRIES) {
      emit(executionId, { ts: now(), type: 'error', message: `❌ ${agentName} falhou apos ${MAX_RETRIES + 1} tentativas` });
      await persistLog(taskId, pipelineDbId, agentName, 'error', `Falhou apos ${MAX_RETRIES + 1} tentativas`);
      return { success: false, text: fullText, taskId, tokensInput: tokensIn, tokensOutput: tokensOut, durationMs };
    }
  }

  return { success: false, text: '', taskId: null, tokensInput: 0, tokensOutput: 0, durationMs: 0 };
}

// ═══════════════════════════════════════════════════════════
// Parse scrapedCard JSON from scraper output
// ═══════════════════════════════════════════════════════════

function parseScrapedCard(text: string): unknown | null {
  // Look for ```json:scrapedCard block
  const jsonMatch = text.match(/```json:scrapedCard\s*\n([\s\S]*?)```/);
  if (jsonMatch) {
    try { return JSON.parse(jsonMatch[1]); } catch { /* fall through */ }
  }
  // Fallback: look for any JSON block with "main_card"
  const fallback = text.match(/```json\s*\n([\s\S]*?)```/g);
  if (fallback) {
    for (const block of fallback) {
      const inner = block.replace(/```json\s*\n/, '').replace(/```$/, '');
      try {
        const parsed = JSON.parse(inner);
        if (parsed.main_card) return parsed;
      } catch { continue; }
    }
  }
  return null;
}

// ═══════════════════════════════════════════════════════════
// Run pipeline — deterministic orchestration with DB persistence
// ═══════════════════════════════════════════════════════════

export async function runPipeline(eventoNome: string): Promise<PipelineExecution | null> {
  // ── Atomic lock: prevent duplicate pipelines ──
  const run = await acquirePipelineLock(eventoNome);
  if (!run) return null; // Another pipeline is running

  const executionId = `pipeline-${Date.now()}`;

  const execution: PipelineExecution = {
    execution_id: executionId,
    db_id: run.id,
    evento_nome: eventoNome,
    status: 'running',
    started_at: now(),
    finished_at: null,
    result: null,
    logs: [],
    current_phase: 'starting',
    card_json: null,
  };

  executions.set(executionId, execution);
  orchestrate(execution);
  return execution;
}

// ── Human gate timeout ──
const HUMAN_GATE_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

async function orchestrate(exec: PipelineExecution): Promise<void> {
  const id = exec.execution_id;
  const evento = exec.evento_nome;

  emit(id, { ts: now(), type: 'system', message: `Pipeline v2 iniciado para: ${evento}` });
  await persistLog(null, exec.db_id, 'system', 'system', `Pipeline iniciado para: ${evento}`);

  // ━━━ CEO INTRO (1 of 2 calls) ━━━
  await callAgent(id, exec.db_id, 'ceo',
    `Pipeline iniciado para: ${evento}. Responda APENAS com 2-3 frases confirmando que o pipeline comecou e que voce vai coordenar. NAO use nenhuma tool. NAO chame nenhum agente. NAO faca scraping. APENAS texto curto.`,
    { maxTurns: 3 },
  );

  // ━━━ FASE 1: Card Scraper ━━━
  exec.current_phase = 'card-scraper';
  if (exec.db_id) await updatePipelineRun(exec.db_id, { status: 'running', current_phase: 'card-scraper' }).catch(() => {});
  emit(id, { ts: now(), type: 'phase', message: '━━━ FASE 1: Coletando card do evento ━━━' });

  const scraper = await callAgent(id, exec.db_id, 'card-scraper',
    `Scrape o card do evento: ${evento}. Use UFC.com + Wikipedia + Tapology para cross-reference. Mostre TODAS as lutas. OBRIGATORIO: termine com bloco json:scrapedCard.`
  );

  if (!scraper.success) {
    emit(id, { ts: now(), type: 'error', message: '❌ Card Scraper falhou — pipeline abortado' });
    await finishPipeline(exec, 'failed');
    return;
  }

  emitCost(id, 'Card Scraper', scraper);
  if (exec.db_id) await updatePipelineRun(exec.db_id, { status: 'running', current_phase: 'card-scraper', phase_completed: 'card-scraper' }).catch(() => {});

  // Parse and persist card JSON
  const cardJson = parseScrapedCard(scraper.text);
  exec.card_json = cardJson;

  if (cardJson) {
    try {
      const card = cardJson as Record<string, unknown>;
      await saveCardSnapshot(evento, (card.data as string) || null, cardJson, exec.db_id || undefined);
      emit(id, { ts: now(), type: 'info', message: `✓ Card JSON parseado e salvo no BD` });
    } catch {
      emit(id, { ts: now(), type: 'error', message: '⚠ Card JSON nao pode ser salvo no BD' });
    }
  } else {
    emit(id, { ts: now(), type: 'error', message: '⚠ Card Scraper nao retornou JSON estruturado. Usando texto bruto.' });
  }

  // ── HUMAN GATE with timeout ──
  emit(id, { ts: now(), type: 'system', message: '🚦 HUMAN GATE: Card coletado. Aguardando confirmacao no dashboard.' });
  emit(id, { ts: now(), type: 'agent', message: scraper.text });
  exec.status = 'waiting_confirmation';
  exec.current_phase = 'human-gate';
  exec.result = scraper.text;
  emitStatus(id, 'waiting_confirmation');
  if (exec.db_id) {
    await updatePipelineRun(exec.db_id, { status: 'human_gate', current_phase: 'human-gate' }).catch(() => {});
    await incrementManualIntervention(exec.db_id).catch(() => {});
  }

  // Auto-fail after 30 minutes if no confirmation
  setTimeout(() => {
    if (exec.status === 'waiting_confirmation') {
      emit(id, { ts: now(), type: 'error', message: '⏰ Human gate expirou (30min). Pipeline cancelado.' });
      finishPipeline(exec, 'failed');
    }
  }, HUMAN_GATE_TIMEOUT_MS);
}

export function continueAfterHumanGate(executionId: string): boolean {
  const exec = executions.get(executionId);
  if (!exec || exec.status !== 'waiting_confirmation') return false;

  exec.status = 'running';
  emitStatus(executionId, 'running');
  if (exec.db_id) updatePipelineRun(exec.db_id, { status: 'running', current_phase: 'analysts' }).catch(() => {});

  continuePhases(exec);
  return true;
}

async function continuePhases(exec: PipelineExecution): Promise<void> {
  const id = exec.execution_id;
  const evento = exec.evento_nome;

  // ── Card context: full output, NOT truncated ──
  const cardContext = exec.card_json
    ? `\n\nCARD JSON (structured):\n${JSON.stringify(exec.card_json, null, 2)}`
    : exec.result
      ? `\n\nCard Scraper output:\n${exec.result}`
      : '';

  emit(id, { ts: now(), type: 'system', message: '✓ Card confirmado! Prosseguindo...' });

  // ━━━ FASE 2: Analises em paralelo ━━━
  exec.current_phase = 'analysts';
  emit(id, { ts: now(), type: 'phase', message: '━━━ FASE 2: Analises Main Card + Prelims (paralelo) ━━━' });

  const [mainResult, prelimsResult] = await Promise.all([
    callAgent(id, exec.db_id, 'fight-analyst',
      `Gere analise CONTRACT v2 (7 secoes) para TODAS as lutas do MAIN CARD do evento: ${evento}. Use densidade MAIN CARD descrita no agente.${cardContext}`
    ),
    callAgent(id, exec.db_id, 'fight-analyst',
      `Gere analise CONTRACT v2 (7 secoes) para TODAS as lutas do PRELIMINARY CARD do evento: ${evento}. Use densidade PRELIMS descrita no agente (estrutura identica, prosa mais enxuta).${cardContext}`
    ),
  ]);

  emitCost(id, 'Fight Analyst (main)', mainResult);
  emitCost(id, 'Fight Analyst (prelims)', prelimsResult);

  if (!mainResult.success) {
    emit(id, { ts: now(), type: 'error', message: '❌ Main Card analyst falhou — pipeline abortado' });
    await finishPipeline(exec, 'failed');
    return;
  }

  if (!prelimsResult.success) {
    emit(id, { ts: now(), type: 'error', message: '⚠ Prelims analyst falhou — continuando sem prelims' });
  }

  if (exec.db_id) await updatePipelineRun(exec.db_id, { status: 'running', current_phase: 'analysts', phase_completed: 'analysts' }).catch(() => {});

  // ━━━ FASE 3: Validacao (with auto-retry) ━━━
  exec.current_phase = 'validator';
  emit(id, { ts: now(), type: 'phase', message: '━━━ FASE 3: Validacao (7 checks) ━━━' });

  const validator = await callAgent(id, exec.db_id, 'card-validator',
    `Valide todas as analises geradas para o evento: ${evento}. Rode os 7 checks.${cardContext}`
  );

  emitCost(id, 'Validator', validator);

  if (!validator.success) {
    emit(id, { ts: now(), type: 'error', message: '❌ Card Validator falhou — pipeline abortado' });
    await finishPipeline(exec, 'failed');
    return;
  }

  // ── Auto-retry if validator found FAIL in specific fights ──
  if (validator.text.includes('FAIL')) {
    emit(id, { ts: now(), type: 'system', message: '⚠ Validator encontrou FAILs. Tentando auto-retry...' });

    // Determine which agent to re-run based on FAIL context
    const hasMainFail = validator.text.includes('main_card') && validator.text.includes('FAIL');
    const hasPrelimFail = validator.text.includes('prelim') && validator.text.includes('FAIL');

    if (hasMainFail) {
      emit(id, { ts: now(), type: 'system', message: '🔄 Re-rodando Fight Analyst para main card...' });
      const retry = await callAgent(id, exec.db_id, 'fight-analyst',
        `RETRY: O Validator encontrou problemas nas analises do main card para ${evento}. Validator output:\n${validator.text.substring(0, 3000)}\n\nCorrija APENAS as lutas com FAIL. Use densidade MAIN CARD.${cardContext}`
      );
      emitCost(id, 'Fight Analyst main (retry)', retry);
    }

    if (hasPrelimFail) {
      emit(id, { ts: now(), type: 'system', message: '🔄 Re-rodando Fight Analyst para prelims...' });
      const retry = await callAgent(id, exec.db_id, 'fight-analyst',
        `RETRY: O Validator encontrou problemas nas analises de prelims para ${evento}. Validator output:\n${validator.text.substring(0, 3000)}\n\nCorrija APENAS as lutas com FAIL. Use densidade PRELIMS.${cardContext}`
      );
      emitCost(id, 'Fight Analyst prelims (retry)', retry);
    }

    // Re-validate after retry
    if (hasMainFail || hasPrelimFail) {
      emit(id, { ts: now(), type: 'system', message: '🔄 Re-validando apos retry...' });
      const revalidation = await callAgent(id, exec.db_id, 'card-validator',
        `Re-valide todas as analises para ${evento} apos correcoes. Rode os 7 checks.${cardContext}`
      );
      emitCost(id, 'Validator (re-check)', revalidation);

      if (revalidation.text.includes('FAIL')) {
        emit(id, { ts: now(), type: 'error', message: '⚠ Validator ainda encontrou FAILs apos retry. Continuando com warnings.' });
      }
    }
  }

  if (exec.db_id) await updatePipelineRun(exec.db_id, { status: 'running', current_phase: 'validator', phase_completed: 'validator' }).catch(() => {});

  // ━━━ FASE 4: Translator + Event Page (PARALELO) ━━━
  exec.current_phase = 'translator-eventpage';
  emit(id, { ts: now(), type: 'phase', message: '━━━ FASE 4: Traducao + Event Page (paralelo) ━━━' });

  const [translatorResult, eventPageResult] = await Promise.all([
    callAgent(id, exec.db_id, 'translator',
      `Traduza TODAS as analises geradas para o evento: ${evento}. Gere data-en.ts, data-es.ts, data-fr.ts para cada luta.`
    ),
    callAgent(id, exec.db_id, 'event-page-generator',
      `Gere a pagina do evento para: ${evento}. Leia todas as analises, extraia previsoes, monte o EventAnalysisData e registre no event-registry.${cardContext}`
    ),
  ]);

  emitCost(id, 'Translator', translatorResult);
  emitCost(id, 'Event Page', eventPageResult);

  if (!translatorResult.success) {
    emit(id, { ts: now(), type: 'error', message: '⚠ Translator falhou — continuando sem traducoes' });
  }

  if (!eventPageResult.success) {
    emit(id, { ts: now(), type: 'error', message: '❌ Event Page Generator falhou — pipeline abortado' });
    await finishPipeline(exec, 'failed');
    return;
  }

  if (exec.db_id) await updatePipelineRun(exec.db_id, { status: 'running', current_phase: 'translator-eventpage', phase_completed: 'translator-eventpage' }).catch(() => {});

  // ━━━ FASE 5: Hydration ━━━
  exec.current_phase = 'hydration';
  emit(id, { ts: now(), type: 'phase', message: '━━━ FASE 5: Hydration (analyses → BD) ━━━' });

  try {
    const { execSync } = await import('child_process');
    const projectDir = '/root/ufc-news-hub/ufc-news-hub';
    execSync('npx tsx scripts/hydrate-analyses-to-db.ts', {
      cwd: projectDir,
      timeout: 120_000,
      stdio: 'pipe',
    });
    emit(id, { ts: now(), type: 'info', message: '✓ Hydration concluida — analyses no BD' });
  } catch (hydErr) {
    const msg = hydErr instanceof Error ? hydErr.message.substring(0, 300) : 'Hydration falhou';
    emit(id, { ts: now(), type: 'error', message: `⚠ Hydration falhou (nao bloqueia pipeline): ${msg}` });
  }

  if (exec.db_id) await updatePipelineRun(exec.db_id, { status: 'running', current_phase: 'hydration', phase_completed: 'hydration' }).catch(() => {});

  // ━━━ FASE 6: Build & Deploy (async spawn, not execSync) ━━━
  exec.current_phase = 'deploy';
  emit(id, { ts: now(), type: 'phase', message: '━━━ FASE 6: Build & Deploy ━━━' });

  try {
    emit(id, { ts: now(), type: 'system', message: 'Rodando next build...' });
    const projectDir = '/root/ufc-news-hub/ufc-news-hub';

    // Async build via spawn (does NOT block Node.js event loop)
    await new Promise<void>((resolve, reject) => {
      const build = nodeSpawn('npx', ['next', 'build'], {
        cwd: projectDir,
        stdio: 'pipe',
        env: { ...process.env },
      });

      const buildTimeout = setTimeout(() => {
        build.kill('SIGTERM');
        reject(new Error('Build timeout (5min)'));
      }, 300_000);

      let stderr = '';
      build.stderr?.on('data', (chunk: Buffer) => { stderr += chunk.toString(); });

      build.on('exit', (code) => {
        clearTimeout(buildTimeout);
        if (code === 0) resolve();
        else reject(new Error(`Build exit code ${code}: ${stderr.substring(0, 300)}`));
      });

      build.on('error', (err) => {
        clearTimeout(buildTimeout);
        reject(err);
      });
    });

    emit(id, { ts: now(), type: 'system', message: '✓ Build concluido! Reiniciando servidor...' });

    const { execSync } = await import('child_process');
    execSync('pm2 restart crenas', {
      cwd: projectDir,
      timeout: 30_000,
      stdio: 'pipe',
    });
    emit(id, { ts: now(), type: 'system', message: '✓ Servidor reiniciado! Analises no ar.' });
  } catch (buildErr) {
    const msg = buildErr instanceof Error ? buildErr.message.substring(0, 300) : 'Build falhou';
    emit(id, { ts: now(), type: 'error', message: `⚠ Deploy falhou: ${msg}` });
    emit(id, { ts: now(), type: 'system', message: 'Analises geradas mas NAO publicadas. Rode: npm run build && pm2 restart crenas' });
  }

  if (exec.db_id) await updatePipelineRun(exec.db_id, { status: 'running', current_phase: 'deploy', phase_completed: 'deploy' }).catch(() => {});

  // ━━━ CEO RELATORIO FINAL (2 of 2 calls) ━━━
  emit(id, { ts: now(), type: 'phase', message: '━━━ RELATORIO DE PERFORMANCE ━━━' });

  const allResults = [
    { name: 'Card Scraper', agentId: 'card-scraper', ...({ success: true, durationMs: 0, tokensInput: 0, tokensOutput: 0 }) },
    { name: 'Fight Analyst (main)', agentId: 'fight-analyst', ...mainResult },
    { name: 'Fight Analyst (prelims)', agentId: 'fight-analyst', ...prelimsResult },
    { name: 'Validator', agentId: 'card-validator', ...validator },
    { name: 'Translator', agentId: 'translator', ...translatorResult },
    { name: 'Event Page', agentId: 'event-page-generator', ...eventPageResult },
  ];

  const statsTable = allResults.map(s =>
    `| ${s.name} | ${Math.round(s.durationMs / 1000)}s | ${((s.tokensInput + s.tokensOutput) / 1000).toFixed(1)}k | ${s.success ? 'OK' : 'FALHOU'} |`
  ).join('\n');

  // Inject real metrics via appendSystemPrompt so CEO has data in context
  const ceoContext = `
## DADOS REAIS DO PIPELINE (use APENAS estes, NAO invente)

### Pipeline Atual
- Evento: ${evento}
- Status: ${allResults.every(r => r.success) ? 'CONCLUIDO' : 'CONCLUIDO COM WARNINGS'}

### Performance por Agente
| Agente | Tempo | Tokens | Status |
|--------|-------|--------|--------|
${statsTable}

### Benchmarks
| Agente | Meta Tempo |
|--------|-----------|
| Card Scraper | <60s |
| Fight Analyst Main | <12min/luta |
| Prelim Analyst | <8min/luta |
| Validator | <30s |
| Translator | <5min/luta |
| Event Page | <3min |
`;

  await callAgent(id, exec.db_id, 'ceo',
    `Pipeline "${evento}" CONCLUIDO. Gere o Relatorio de Performance completo usando o formato do seu protocolo.`,
    { appendSystemPrompt: ceoContext, maxTurns: 5 },
  );

  // ━━━ CONCLUIDO ━━━
  emit(id, { ts: now(), type: 'phase', message: '━━━ PIPELINE CONCLUIDO ━━━' });
  await finishPipeline(exec, 'completed');
}

async function finishPipeline(exec: PipelineExecution, status: 'completed' | 'failed'): Promise<void> {
  exec.status = status;
  exec.finished_at = now();
  exec.current_phase = status === 'completed' ? 'done' : 'error';
  emitStatus(exec.execution_id, status);

  if (exec.db_id) {
    const dbStatus: PipelineStatus = status === 'completed' ? 'completed' : 'failed';
    await updatePipelineRun(exec.db_id, { status: dbStatus, current_phase: exec.current_phase }).catch(() => {});
    // Aggregate costs from all tasks into pipeline total
    await aggregatePipelineCosts(exec.db_id).catch(() => {});
    // Recalculate weekly scores for all agents
    await calculateWeeklyScores().catch(() => {});
    // Check for demotions (weekly_score < 2.0)
    await checkDemotions().catch(() => {});
  }

  await persistLog(null, exec.db_id, 'system', status === 'completed' ? 'phase' : 'error',
    status === 'completed' ? 'Pipeline concluido com sucesso' : 'Pipeline falhou'
  );
}
