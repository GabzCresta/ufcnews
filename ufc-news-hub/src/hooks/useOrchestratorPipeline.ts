'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useAdminAuth } from '@/components/admin/AdminAuthContext';
import type { ToolCallInfo, ConnectionState } from '@/components/admin/dashboard/openclaw-terminal/types';
import type { AgentSession, AgentMessage, PipelineStatus } from '@/components/admin/dashboard/orchestrator/types';

// ═══════════════════════════════════════════════════════════
// useOrchestratorPipeline — HTTP SSE hook (v4, Claude CLI)
//
// Replaces WebSocket → OpenClaw gateway with:
// - Agent list: GET /api/admin/claude/chat
// - Direct chat: POST /api/admin/claude/chat (SSE streaming)
// - Pipeline: existing EventEmitter SSE via /api/admin/pipeline/stream
// - Abort: POST /api/admin/claude/chat/abort
//
// No WebSocket, no subagent detection, no auto-promote.
// Pipeline is triggered explicitly via /api/admin/pipeline/trigger.
// ═══════════════════════════════════════════════════════════

// ── Mutable direct chat state ──
interface DirectState {
  messages: AgentMessage[];
  isRunning: boolean;
  streamingText: string;
  toolCalls: ToolCallInfo[];
}

interface SessionInfo { key: string; agentId: string; updatedAt: number; preview: string }

export function useOrchestratorPipeline() {
  const { authFetch } = useAdminAuth();

  const [connectionState, setConnectionState] = useState<ConnectionState>('disconnected');
  const [agents, setAgents] = useState<Array<{ id: string }>>([]);
  const [activeAgent, setActiveAgentRaw] = useState(() =>
    typeof window !== 'undefined' ? localStorage.getItem('claude-terminal-agent') || 'card-scraper' : 'card-scraper'
  );
  const [pipelineStatus, setPipelineStatus] = useState<PipelineStatus>('idle');
  const [sessions, setSessions] = useState<AgentSession[]>([]);
  const [directMessages, setDirectMessages] = useState<AgentMessage[]>([]);
  const [isDirectRunning, setIsDirectRunning] = useState(false);
  const [sessionList] = useState<SessionInfo[]>([]);

  const mountedRef = useRef(true);
  const flushRafRef = useRef<number | null>(null);
  const directRef = useRef<DirectState>({ messages: [], isRunning: false, streamingText: '', toolCalls: [] });
  const dirtyRef = useRef(false);
  const sessionMapRef = useRef<Map<string, string>>(new Map()); // agentId → sessionId
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (flushRafRef.current) cancelAnimationFrame(flushRafRef.current);
      abortRef.current?.abort();
    };
  }, []);

  const flushToReact = useCallback(() => {
    flushRafRef.current = null;
    if (!mountedRef.current || !dirtyRef.current) return;
    dirtyRef.current = false;
    const d = directRef.current;
    setDirectMessages([...d.messages]);
    setIsDirectRunning(d.isRunning);
  }, []);

  const scheduleFlush = useCallback(() => {
    dirtyRef.current = true;
    if (!flushRafRef.current) flushRafRef.current = requestAnimationFrame(flushToReact);
  }, [flushToReact]);

  // ── Connect: fetch agent list ──
  const connect = useCallback(async () => {
    if (!mountedRef.current) return;
    setConnectionState('connecting');

    try {
      const res = await authFetch('/api/admin/claude/chat');
      if (!res.ok) { setConnectionState('error'); return; }
      const data = await res.json();
      const list = (data.agents || []) as Array<{ id: string }>;
      setAgents(list);

      const saved = typeof window !== 'undefined' ? localStorage.getItem('claude-terminal-agent') : null;
      if (saved && list.some(a => a.id === saved)) {
        setActiveAgentRaw(saved);
      } else if (list.length > 0) {
        setActiveAgentRaw(list[0].id);
      }

      setConnectionState('connected');
    } catch {
      setConnectionState('error');
    }
  }, [authFetch]);

  const disconnect = useCallback(() => {
    abortRef.current?.abort();
    setConnectionState('disconnected');
  }, []);

  // ── Set active agent ──
  const setActiveAgent = useCallback((agentId: string) => {
    setActiveAgentRaw(agentId);
    localStorage.setItem('claude-terminal-agent', agentId);
    abortRef.current?.abort();
    directRef.current = { messages: [], isRunning: false, streamingText: '', toolCalls: [] };
    scheduleFlush();
  }, [scheduleFlush]);

  // ── Parse SSE from chat endpoint ──
  const parseSSEStream = useCallback(async (response: Response) => {
    const d = directRef.current;
    if (!response.body) return;

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const blocks = buffer.split('\n\n');
        buffer = blocks.pop() || '';

        for (const block of blocks) {
          const lines = block.trim().split('\n');
          let eventType = '';
          let eventData = '';

          for (const line of lines) {
            if (line.startsWith('event: ')) eventType = line.slice(7);
            if (line.startsWith('data: ')) eventData = line.slice(6);
          }

          if (!eventData) continue;

          try {
            const parsed = JSON.parse(eventData);

            switch (eventType) {
              case 'init': {
                const sid = parsed.sessionId as string;
                if (sid) sessionMapRef.current.set(activeAgent, sid);
                break;
              }

              case 'text': {
                const delta = parsed.delta as string;
                if (delta) {
                  d.streamingText += delta;
                  const last = d.messages[d.messages.length - 1];
                  if (last?.role === 'assistant' && last.isStreaming) {
                    last.content = d.streamingText;
                  }
                  scheduleFlush();
                }
                break;
              }

              case 'tool_start': {
                const tool: ToolCallInfo = {
                  id: parsed.id as string,
                  name: parsed.name as string,
                  args: {},
                  phase: 'running',
                  startTime: Date.now(),
                };
                d.toolCalls = [...d.toolCalls, tool];
                const last = d.messages[d.messages.length - 1];
                if (last?.role === 'assistant' && last.isStreaming) {
                  last.toolCalls = [...d.toolCalls];
                }
                scheduleFlush();
                break;
              }

              case 'tool_input': {
                const toolId = parsed.id as string;
                const tc = d.toolCalls.find(t => t.id === toolId);
                if (tc) {
                  if (!tc.meta) tc.meta = '';
                  tc.meta += parsed.partial as string;
                  try { tc.args = JSON.parse(tc.meta); } catch { /* partial */ }
                }
                break;
              }

              case 'tool_result': {
                const toolId = parsed.id as string;
                const isError = parsed.isError as boolean;
                d.toolCalls = d.toolCalls.map(tc =>
                  tc.id === toolId
                    ? { ...tc, phase: isError ? 'error' as const : 'done' as const, meta: (parsed.content as string)?.substring(0, 200), endTime: Date.now() }
                    : tc
                );
                const last = d.messages[d.messages.length - 1];
                if (last?.role === 'assistant' && last.isStreaming) {
                  last.toolCalls = [...d.toolCalls];
                }
                scheduleFlush();
                break;
              }

              case 'done': {
                const finalText = (parsed.text as string) || d.streamingText;
                const sid = parsed.sessionId as string;
                if (sid) sessionMapRef.current.set(activeAgent, sid);
                d.messages = d.messages.map((msg, i) => {
                  if (i === d.messages.length - 1 && msg.role === 'assistant' && msg.isStreaming) {
                    return { ...msg, content: finalText, toolCalls: [...d.toolCalls], isStreaming: false };
                  }
                  return msg;
                });
                d.isRunning = false;
                d.streamingText = '';
                d.toolCalls = [];
                scheduleFlush();
                break;
              }

              case 'error': {
                const errMsg = parsed.message as string || 'Erro';
                d.messages = d.messages.map((msg, i) => {
                  if (i === d.messages.length - 1 && msg.role === 'assistant' && msg.isStreaming) {
                    return { ...msg, content: `Erro: ${errMsg}`, isStreaming: false };
                  }
                  return msg;
                });
                d.isRunning = false;
                d.streamingText = '';
                d.toolCalls = [];
                scheduleFlush();
                break;
              }
            }
          } catch { /* skip non-JSON */ }
        }
      }
    } catch {
      // Stream ended
    }

    // Finalize if still running
    if (d.isRunning) {
      const last = d.messages[d.messages.length - 1];
      if (last?.role === 'assistant' && last.isStreaming) {
        last.content = d.streamingText || last.content || '';
        last.isStreaming = false;
      }
      d.isRunning = false;
      d.streamingText = '';
      d.toolCalls = [];
      scheduleFlush();
    }
  }, [activeAgent, scheduleFlush]);

  // ── Send message ──
  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;
    const d = directRef.current;
    if (d.isRunning) return;

    // Add user message
    d.messages = [...d.messages, {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: Date.now(),
    }];

    // Add streaming placeholder
    d.messages = [...d.messages, {
      id: `s-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
      isStreaming: true,
      toolCalls: [],
    }];
    d.isRunning = true;
    d.streamingText = '';
    d.toolCalls = [];
    scheduleFlush();

    const agent = activeAgent || 'card-scraper';
    const existingSession = sessionMapRef.current.get(agent);
    const abortController = new AbortController();
    abortRef.current = abortController;

    try {
      const res = await authFetch('/api/admin/claude/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentId: agent,
          message: text.trim(),
          sessionId: existingSession || undefined,
        }),
        signal: abortController.signal,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({ error: 'Erro' }));
        d.messages = d.messages.map((msg, i) => {
          if (i === d.messages.length - 1 && msg.role === 'assistant' && msg.isStreaming) {
            return { ...msg, content: `Erro: ${(errData as { error?: string }).error || res.statusText}`, isStreaming: false };
          }
          return msg;
        });
        d.isRunning = false;
        scheduleFlush();
        return;
      }

      await parseSSEStream(res);
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        const last = d.messages[d.messages.length - 1];
        if (last?.role === 'assistant' && last.isStreaming) {
          last.content = d.streamingText || '(Cancelado)';
          last.isStreaming = false;
        }
        d.isRunning = false;
        d.streamingText = '';
        d.toolCalls = [];
        scheduleFlush();
        return;
      }

      d.messages = [...d.messages.slice(0, -1), {
        id: `e-${Date.now()}`,
        role: 'assistant' as const,
        content: `Erro: ${err instanceof Error ? err.message : 'Falha'}`,
        timestamp: Date.now(),
      }];
      d.isRunning = false;
      scheduleFlush();
    }
  }, [activeAgent, authFetch, parseSSEStream, scheduleFlush]);

  // ── Abort ──
  const abort = useCallback(async () => {
    abortRef.current?.abort();

    const agent = activeAgent || '';
    const sessionId = sessionMapRef.current.get(agent);
    if (sessionId) {
      try {
        await authFetch('/api/admin/claude/chat/abort', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        });
      } catch { /* best effort */ }
    }

    const d = directRef.current;
    const last = d.messages[d.messages.length - 1];
    if (last?.role === 'assistant' && last.isStreaming) {
      last.content = d.streamingText || '(Cancelado)';
      last.isStreaming = false;
    }
    d.isRunning = false;
    d.streamingText = '';
    d.toolCalls = [];
    scheduleFlush();
  }, [activeAgent, authFetch, scheduleFlush]);

  // ── Session management stubs (no gateway sessions anymore) ──
  const fetchSessionList = useCallback(async () => { /* no-op */ }, []);
  const switchSession = useCallback((_key: string) => { /* no-op */ }, []);
  const newSession = useCallback((agentId: string) => {
    setActiveAgentRaw(agentId);
    sessionMapRef.current.delete(agentId);
    directRef.current = { messages: [], isRunning: false, streamingText: '', toolCalls: [] };
    scheduleFlush();
  }, [scheduleFlush]);

  // ── Auto-connect on mount ──
  useEffect(() => { connect(); }, [connect]);

  return {
    connectionState, connect, disconnect, agents,
    activeAgent, setActiveAgent, directMessages, isDirectRunning,
    sendMessage, abort,
    pipelineStatus, sessions,
    sessionList, fetchSessionList, switchSession, newSession,
  };
}
