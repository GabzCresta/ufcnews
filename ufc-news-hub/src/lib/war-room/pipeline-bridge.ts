import { pipelineEvents, type LogEntry, type PipelineExecution } from '@/lib/pipeline-runner';
import { saveAssistantMessage, createConversation, updateConversation } from './persistence';
import { EventEmitter } from 'events';

// ═══════════════════════════════════════════════════════════
// Pipeline → War Room Bridge v2
//
// Every pipeline event becomes a War Room feed message.
// Every agent gets their own conversation in the BD.
// The feed-stream SSE pushes to frontend in real-time.
// ═══════════════════════════════════════════════════════════

export interface FeedMessage {
  id: string;
  role: 'assistant' | 'system';
  agentId: string;
  content: string;
  timestamp: number;
  type: LogEntry['type'];
  toolName?: string;
  executionId: string;
}

const g = globalThis as unknown as { __warRoomFeed?: EventEmitter };
if (!g.__warRoomFeed) {
  const emitter = new EventEmitter();
  emitter.setMaxListeners(50);
  g.__warRoomFeed = emitter;
}
export const warRoomFeed = g.__warRoomFeed;

// Track which agent is currently active based on pipeline phase
function getAgentFromLog(log: LogEntry, currentAgent: string): string {
  const msg = log.message;

  // Agent start markers from pipeline-runner: "▶ agent-name"
  if (msg.startsWith('▶ ')) return msg.replace('▶ ', '').split(' ')[0].split('(')[0];

  // Cost markers
  if (msg.startsWith('💰 [COST]') || msg.startsWith('[COST]')) {
    if (msg.includes('Card Scraper')) return 'card-scraper';
    if (msg.includes('Fight Analyst') || msg.includes('Analyst')) return 'fight-analyst';
    if (msg.includes('Validator')) return 'card-validator';
    if (msg.includes('Translator')) return 'translator';
    if (msg.includes('Event Page')) return 'event-page-generator';
  }

  // Tool markers: attribute to current active agent
  if (log.type === 'tool') return currentAgent;

  // Phase markers
  if (log.type === 'phase') {
    if (msg.includes('FASE 1') || msg.includes('card')) return 'card-scraper';
    if (msg.includes('FASE 2') || msg.includes('Analises')) return 'fight-analyst';
    if (msg.includes('FASE 3') || msg.includes('Validacao')) return 'card-validator';
    if (msg.includes('FASE 4') || msg.includes('Traducao')) return 'translator';
    if (msg.includes('FASE 5') || msg.includes('Hydration')) return 'ceo';
    if (msg.includes('FASE 6') || msg.includes('Deploy')) return 'ceo';
    if (msg.includes('RELATORIO') || msg.includes('CONCLUIDO')) return 'ceo';
  }

  return currentAgent;
}

let counter = 0;

export function startBridge(execution: PipelineExecution): () => void {
  const execId = execution.execution_id;
  let currentAgent = 'ceo';

  // Per-agent conversation cache for this pipeline
  const convCache = new Map<string, string>();

  const onLog = async (log: LogEntry) => {
    // Update current agent
    const detectedAgent = getAgentFromLog(log, currentAgent);
    if (detectedAgent !== currentAgent) currentAgent = detectedAgent;

    counter++;
    const feedMsg: FeedMessage = {
      id: `pl-${execId.slice(-6)}-${counter}`,
      role: log.type === 'phase' ? 'system' : 'assistant',
      agentId: currentAgent,
      content: log.message,
      timestamp: new Date(log.ts).getTime(),
      type: log.type,
      toolName: log.type === 'tool' ? log.message.replace(/^🔧\s*/, '') : undefined,
      executionId: execId,
    };

    // Emit to SSE subscribers
    warRoomFeed.emit('message', feedMsg);

    // Persist to BD (every message, not just important ones)
    try {
      let convId = convCache.get(currentAgent);
      if (!convId) {
        const conv = await createConversation(currentAgent, `Pipeline: ${execution.evento_nome}`);
        convId = conv.id;
        convCache.set(currentAgent, convId);
      }
      await saveAssistantMessage(convId, currentAgent, log.message);
      await updateConversation(convId, { message_count_increment: 1 });
    } catch {
      // DB failure should not break pipeline
    }
  };

  const onStatus = (status: string) => {
    warRoomFeed.emit('pipeline_status', { executionId: execId, status });
  };

  pipelineEvents.on(execId, onLog);
  pipelineEvents.on(`${execId}:status`, onStatus);

  return () => {
    pipelineEvents.off(execId, onLog);
    pipelineEvents.off(`${execId}:status`, onStatus);
  };
}
