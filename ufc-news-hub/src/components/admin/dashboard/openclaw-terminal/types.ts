// ═══════════════════════════════════════════════════════════
// Terminal Types — Shared between Claude Terminal and Orchestrator
// Migrated from OpenClaw WebSocket to Claude CLI SSE (April 2026)
// ═══════════════════════════════════════════════════════════

export interface AgentInfo {
  id: string;
}

// ── Chat Messages ──

export type ChatMessage = UserMessage | AssistantMessage;

export interface UserMessage {
  role: 'user';
  id: string;
  content: string;
  timestamp: number;
}

export interface AssistantMessage {
  role: 'assistant';
  id: string;
  content: string;
  toolCalls: ToolCallInfo[];
  timestamp: number;
  isStreaming?: boolean;
}

export interface ToolCallInfo {
  id: string;
  name: string;
  args: Record<string, unknown>;
  phase: 'running' | 'done' | 'error';
  result?: string;
  meta?: string;
  startTime: number;
  endTime?: number;
}

// ── Connection State ──

export type ConnectionState = 'disconnected' | 'connecting' | 'connected' | 'error';
