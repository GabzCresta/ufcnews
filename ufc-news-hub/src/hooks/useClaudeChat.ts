'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useAdminAuth } from '@/components/admin/AdminAuthContext';
import type {
  AgentInfo, ChatMessage, ToolCallInfo, ConnectionState,
} from '@/components/admin/dashboard/openclaw-terminal/types';

// ═══════════════════════════════════════════════════════════
// useClaudeChat — HTTP SSE hook for Claude Code CLI
//
// Replaces useOpenClawChat (WebSocket → OpenClaw gateway)
// with direct HTTP SSE → Next.js API → claude CLI subprocess.
//
// Same public API so OpenClawTerminal.tsx needs minimal changes.
// Architecture: mutable ref + requestAnimationFrame flush (same pattern).
// ═══════════════════════════════════════════════════════���═══

interface MutableState {
  messages: ChatMessage[];
  streamingText: string;
  toolCalls: ToolCallInfo[];
  isRunning: boolean;
  dirty: boolean;
}

export function useClaudeChat() {
  const { authFetch } = useAdminAuth();

  // ── React state (read by components) ──
  const [connectionState, setConnectionState] = useState<ConnectionState>('disconnected');
  const [agents, setAgents] = useState<AgentInfo[]>([]);
  const [activeAgent, setActiveAgentState] = useState<string>(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('claude-terminal-agent') || '';
    return '';
  });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isAgentRunning, setIsAgentRunning] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [activeToolCalls, setActiveToolCalls] = useState<ToolCallInfo[]>([]);

  // ── Refs ──
  const mountedRef = useRef(true);
  const flushRafRef = useRef<number | null>(null);
  const sessionMapRef = useRef<Map<string, string>>(new Map()); // agentId → sessionId
  const abortRef = useRef<AbortController | null>(null);

  const mRef = useRef<MutableState>({
    messages: [],
    streamingText: '',
    toolCalls: [],
    isRunning: false,
    dirty: false,
  });

  // ── Flush mutable state to React state ──
  const flushToReact = useCallback(() => {
    flushRafRef.current = null;
    if (!mountedRef.current) return;
    const m = mRef.current;
    if (!m.dirty) return;
    m.dirty = false;
    setMessages([...m.messages]);
    setIsAgentRunning(m.isRunning);
    setStreamingText(m.streamingText);
    setActiveToolCalls([...m.toolCalls]);
  }, []);

  const scheduleFlush = useCallback(() => {
    mRef.current.dirty = true;
    if (!flushRafRef.current) {
      flushRafRef.current = requestAnimationFrame(flushToReact);
    }
  }, [flushToReact]);

  // ── Cleanup on unmount ──
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (flushRafRef.current) cancelAnimationFrame(flushRafRef.current);
      abortRef.current?.abort();
    };
  }, []);

  // ── Connect: fetch agent list (no WebSocket needed) ──
  const connect = useCallback(async () => {
    if (!mountedRef.current) return;
    setConnectionState('connecting');

    try {
      const res = await authFetch('/api/admin/claude/chat');
      if (!res.ok) {
        setConnectionState('error');
        return;
      }
      const data = await res.json();
      const list = (data.agents || []) as AgentInfo[];
      setAgents(list);

      const saved = typeof window !== 'undefined'
        ? localStorage.getItem('claude-terminal-agent')
        : null;

      if (saved && list.some(a => a.id === saved)) {
        setActiveAgentState(saved);
      } else if (list.length > 0) {
        setActiveAgentState(list[0].id);
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
    setActiveAgentState(agentId);
    localStorage.setItem('claude-terminal-agent', agentId);
    abortRef.current?.abort();
    mRef.current = { messages: [], streamingText: '', toolCalls: [], isRunning: false, dirty: false };
    setMessages([]);
    setStreamingText('');
    setActiveToolCalls([]);
    setIsAgentRunning(false);
  }, []);

  // ── Parse SSE stream from /api/admin/claude/chat ──
  const parseSSEStream = useCallback(async (response: Response) => {
    const m = mRef.current;
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
                // Save session ID for conversation continuity
                const sid = parsed.sessionId as string;
                if (sid && activeAgent) {
                  sessionMapRef.current.set(activeAgent, sid);
                }
                break;
              }

              case 'text': {
                const delta = parsed.delta as string;
                if (delta) {
                  m.streamingText += delta;
                  // Also update the streaming message content
                  const last = m.messages[m.messages.length - 1];
                  if (last?.role === 'assistant' && last.isStreaming) {
                    last.content = m.streamingText;
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
                m.toolCalls = [...m.toolCalls, tool];
                // Update streaming message
                const last = m.messages[m.messages.length - 1];
                if (last?.role === 'assistant' && last.isStreaming) {
                  last.toolCalls = [...m.toolCalls];
                }
                scheduleFlush();
                break;
              }

              case 'tool_input': {
                // Accumulate partial JSON for the tool args
                const toolId = parsed.id as string;
                const tc = m.toolCalls.find(t => t.id === toolId);
                if (tc) {
                  const partial = parsed.partial as string;
                  if (!tc.meta) tc.meta = '';
                  tc.meta += partial;
                  // Try to parse accumulated JSON
                  try {
                    tc.args = JSON.parse(tc.meta);
                  } catch { /* partial JSON, not ready yet */ }
                }
                break;
              }

              case 'tool_result': {
                const toolId = parsed.id as string;
                const isError = parsed.isError as boolean;
                m.toolCalls = m.toolCalls.map(tc =>
                  tc.id === toolId
                    ? { ...tc, phase: isError ? 'error' as const : 'done' as const, meta: (parsed.content as string)?.substring(0, 200), endTime: Date.now() }
                    : tc
                );
                const last = m.messages[m.messages.length - 1];
                if (last?.role === 'assistant' && last.isStreaming) {
                  last.toolCalls = [...m.toolCalls];
                }
                scheduleFlush();
                break;
              }

              case 'done': {
                const finalText = (parsed.text as string) || m.streamingText;
                const sid = parsed.sessionId as string;
                if (sid && activeAgent) {
                  sessionMapRef.current.set(activeAgent, sid);
                }
                // Finalize the streaming message
                m.messages = m.messages.map((msg, i) => {
                  if (i === m.messages.length - 1 && msg.role === 'assistant' && msg.isStreaming) {
                    return { ...msg, content: finalText, toolCalls: [...m.toolCalls], isStreaming: false };
                  }
                  return msg;
                });
                m.isRunning = false;
                m.streamingText = '';
                m.toolCalls = [];
                scheduleFlush();
                break;
              }

              case 'error': {
                const errMsg = parsed.message as string || 'Erro desconhecido';
                m.messages = m.messages.map((msg, i) => {
                  if (i === m.messages.length - 1 && msg.role === 'assistant' && msg.isStreaming) {
                    return { ...msg, content: `Erro: ${errMsg}`, isStreaming: false };
                  }
                  return msg;
                });
                m.isRunning = false;
                m.streamingText = '';
                m.toolCalls = [];
                scheduleFlush();
                break;
              }
            }
          } catch { /* skip non-JSON */ }
        }
      }
    } catch {
      // Stream ended (abort, network error, etc.)
    }

    // If still running when stream ends unexpectedly, finalize
    if (m.isRunning) {
      const last = m.messages[m.messages.length - 1];
      if (last?.role === 'assistant' && last.isStreaming) {
        last.content = m.streamingText || last.content || '';
        last.isStreaming = false;
      }
      m.isRunning = false;
      m.streamingText = '';
      m.toolCalls = [];
      scheduleFlush();
    }
  }, [activeAgent, scheduleFlush]);

  // ── Send message ──
  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;
    const m = mRef.current;
    if (m.isRunning) return;

    // Add user message
    const userMsg: ChatMessage = {
      role: 'user',
      id: `user-${Date.now()}`,
      content: text.trim(),
      timestamp: Date.now(),
    };
    m.messages = [...m.messages, userMsg];

    // Add streaming placeholder
    m.messages = [...m.messages, {
      role: 'assistant' as const,
      id: `stream-${Date.now()}`,
      content: '',
      toolCalls: [],
      timestamp: Date.now(),
      isStreaming: true,
    }];
    m.isRunning = true;
    m.streamingText = '';
    m.toolCalls = [];
    scheduleFlush();

    // Prepare request
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
        const errData = await res.json().catch(() => ({ error: 'Erro na conexao' }));
        m.messages = m.messages.map((msg, i) => {
          if (i === m.messages.length - 1 && msg.role === 'assistant' && msg.isStreaming) {
            return { ...msg, content: `Erro: ${(errData as { error?: string }).error || res.statusText}`, isStreaming: false };
          }
          return msg;
        });
        m.isRunning = false;
        scheduleFlush();
        return;
      }

      await parseSSEStream(res);
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        // User aborted — finalize message
        const last = m.messages[m.messages.length - 1];
        if (last?.role === 'assistant' && last.isStreaming) {
          last.content = m.streamingText || '(Cancelado)';
          last.isStreaming = false;
        }
        m.isRunning = false;
        m.streamingText = '';
        m.toolCalls = [];
        scheduleFlush();
        return;
      }

      m.messages = [...m.messages.slice(0, -1), {
        role: 'assistant' as const,
        id: `err-${Date.now()}`,
        content: `Erro: ${err instanceof Error ? err.message : 'Falha na conexao'}`,
        toolCalls: [],
        timestamp: Date.now(),
      }];
      m.isRunning = false;
      scheduleFlush();
    }
  }, [activeAgent, authFetch, parseSSEStream, scheduleFlush]);

  // ── Abort current run ──
  const abortRun = useCallback(async () => {
    // Abort the fetch (kills SSE stream)
    abortRef.current?.abort();

    // Also tell backend to kill the process
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

    const m = mRef.current;
    const last = m.messages[m.messages.length - 1];
    if (last?.role === 'assistant' && last.isStreaming) {
      last.content = m.streamingText || '(Cancelado)';
      last.isStreaming = false;
    }
    m.isRunning = false;
    m.streamingText = '';
    m.toolCalls = [];
    scheduleFlush();
  }, [activeAgent, authFetch, scheduleFlush]);

  // ── Auto-connect on mount ──
  useEffect(() => { connect(); }, [connect]);

  return {
    connectionState,
    agents,
    activeAgent,
    setActiveAgent,
    messages,
    isAgentRunning,
    streamingText,
    activeToolCalls,
    sendMessage,
    abortRun,
    connect,
    disconnect,
  };
}
