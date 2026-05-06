// ═══════════════════════════════════════════════════════════
// Orchestrator Types — Multi-Agent Pipeline Visualization
// ═══════════════════════════════════════════════════════════

import type { ToolCallInfo } from '../openclaw-terminal/types';

// ── Agent Session (one per spawned agent) ──

export interface AgentSession {
  sessionKey: string;
  agentId: string;
  label: string;
  parentSessionKey: string | null;
  status: 'spawning' | 'running' | 'completed' | 'failed';
  messages: AgentMessage[];
  streamingText: string;
  toolCalls: ToolCallInfo[];
  startTime: number;
  endTime?: number;
}

export interface AgentMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  isStreaming?: boolean;
  toolCalls?: ToolCallInfo[];
}

// ── Pipeline State ──

export type PipelineStatus = 'idle' | 'running' | 'human_gate' | 'completed' | 'failed';

export interface OrchestratorState {
  pipelineId: string | null;
  eventoNome: string;
  status: PipelineStatus;
  mainSessionKey: string;
  sessions: Map<string, AgentSession>;
  sessionOrder: string[];
  dirty: boolean;
}

// ── Visual Config ──

export const AGENT_COLORS: Record<string, string> = {
  'main': 'border-l-[#D20A0A]',
  'card-scraper': 'border-l-blue-500',
  'fight-analyst': 'border-l-emerald-500',
  'card-validator': 'border-l-yellow-500',
  'translator': 'border-l-orange-500',
  'event-page-generator': 'border-l-purple-500',
};

export const AGENT_DOT_COLORS: Record<string, string> = {
  'main': 'bg-[#D20A0A]',
  'card-scraper': 'bg-blue-500',
  'fight-analyst': 'bg-emerald-500',
  'card-validator': 'bg-yellow-500',
  'translator': 'bg-orange-500',
  'event-page-generator': 'bg-purple-500',
};

export const AGENT_LABELS: Record<string, string> = {
  'main': 'CEO',
  'card-scraper': 'Card Scraper',
  'fight-analyst': 'Fight Analyst',
  'card-validator': 'Validator',
  'translator': 'Tradutor',
  'event-page-generator': 'Event Page',
};

// ── Pipeline Phases ──

export const PIPELINE_PHASES = [
  { id: 'coleta', label: 'Coleta', agents: ['card-scraper'] },
  { id: 'analises', label: 'Analises', agents: ['fight-analyst'] },
  { id: 'validacao', label: 'Validacao', agents: ['card-validator'] },
  { id: 'traducao', label: 'Traducao', agents: ['translator'] },
  { id: 'publicacao', label: 'Publicacao', agents: ['event-page-generator'] },
] as const;

// ── Helper to extract agentId from session key ──

export function extractAgentId(sessionKey: string): string {
  // Format: "agent:card-scraper:subagent:uuid" or "agent:main:pipeline-123"
  const parts = sessionKey.split(':');
  return parts[1] || 'unknown';
}
