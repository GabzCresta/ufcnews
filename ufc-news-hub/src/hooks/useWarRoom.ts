'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useAdminAuth } from '@/components/admin/AdminAuthContext';
import type { WarRoomAgent, GlobalStats, AgentPerformance } from '@/lib/war-room/types';
import type { ToolCallInfo } from '@/components/admin/dashboard/openclaw-terminal/types';

// ═══════════════════════════════════════════════════════════
// useWarRoom — Chat with per-agent caching (tab model)
//
// Each agent has its own message cache, like a browser tab.
// Switching agents saves current state and restores target.
// Feed mode ("Todos") shows all agents combined.
// Conversations persisted in war_room_conversations + war_room_messages.
// ═══════════════════════════════════════════════════════════

export interface TimelineMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  agentId: string;
  content: string;
  timestamp: number;
  isStreaming?: boolean;
  toolCalls?: ToolCallInfo[];
}

export type StreamingPhase = 'connecting' | 'thinking' | 'tool_running' | 'writing' | 'idle';

interface MutableState {
  messages: TimelineMessage[];
  streamingText: string;
  toolCalls: ToolCallInfo[];
  isRunning: boolean;
  dirty: boolean;
  phase: StreamingPhase;
  phaseTool: string;
  phaseStartTime: number;
}

// ── Helpers ──

const FEED_KEY = '__feed__';

function emptyState(): MutableState {
  return { messages: [], streamingText: '', toolCalls: [], isRunning: false, dirty: false, phase: 'idle', phaseTool: '', phaseStartTime: 0 };
}

function cloneState(s: MutableState): MutableState {
  return {
    messages: [...s.messages],
    streamingText: s.streamingText,
    toolCalls: [...s.toolCalls],
    isRunning: s.isRunning,
    dirty: false,
    phase: s.phase,
    phaseTool: s.phaseTool,
    phaseStartTime: s.phaseStartTime,
  };
}

function addMsgToCache(cache: Map<string, MutableState>, key: string, msg: TimelineMessage): void {
  const existing = cache.get(key);
  if (existing) {
    existing.messages = [...existing.messages, msg];
  } else {
    const state = emptyState();
    state.messages = [msg];
    cache.set(key, state);
  }
}

// ═══════════════════════════════════════════════════════════

export function useWarRoom() {
  const { authFetch, token } = useAdminAuth();

  const [connected, setConnected] = useState(false);
  const [agents, setAgents] = useState<WarRoomAgent[]>([]);
  const [activeAgent, setActiveAgentRaw] = useState('ceo');
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [agentDetail, setAgentDetail] = useState<{ agent: WarRoomAgent; performance: AgentPerformance } | null>(null);
  const [stats, setStats] = useState<GlobalStats | null>(null);
  const [messages, setMessages] = useState<TimelineMessage[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [streamingPhase, setStreamingPhase] = useState<StreamingPhase>('idle');
  const [streamingPhaseTool, setStreamingPhaseTool] = useState('');
  const [streamingElapsed, setStreamingElapsed] = useState(0);
  const [viewMode, setViewModeState] = useState<'feed' | 'chat'>('feed');

  const mountedRef = useRef(true);
  const mRef = useRef<MutableState>(emptyState());
  const elapsedRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const flushRef = useRef<number | null>(null);
  const convMapRef = useRef<Map<string, string>>(new Map()); // agentId → conversationId
  const abortRef = useRef<AbortController | null>(null);

  // Per-view cache + stable refs for SSE closures
  const agentCacheRef = useRef<Map<string, MutableState>>(new Map());
  const viewModeRef = useRef<'feed' | 'chat'>('feed');
  const activeAgentRef = useRef('ceo');
  const historyLoadedRef = useRef<Set<string>>(new Set());

  // ── Flush mutable state → React state ──
  const flush = useCallback(() => {
    flushRef.current = null;
    if (!mountedRef.current) return;
    const m = mRef.current;
    if (!m.dirty) return;
    m.dirty = false;
    setMessages([...m.messages]);
    setIsRunning(m.isRunning);
    setStreamingText(m.streamingText);
    setStreamingPhase(m.phase);
    setStreamingPhaseTool(m.phaseTool);
    if (m.phase === 'idle') {
      setStreamingElapsed(0);
      if (elapsedRef.current) { clearInterval(elapsedRef.current); elapsedRef.current = null; }
    }
  }, []);

  const scheduleFlush = useCallback(() => {
    mRef.current.dirty = true;
    if (!flushRef.current) flushRef.current = requestAnimationFrame(flush);
  }, [flush]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (flushRef.current) cancelAnimationFrame(flushRef.current);
      abortRef.current?.abort();
    };
  }, []);

  // ── Subscribe to pipeline feed-stream (populates per-agent caches) ──
  useEffect(() => {
    if (!token) return;

    let aborted = false;
    const ctrl = new AbortController();

    async function connectFeedStream() {
      try {
        const res = await fetch('/api/admin/war-room/feed-stream', {
          headers: { 'Authorization': `Bearer ${token}` },
          signal: ctrl.signal,
        });
        if (!res.ok || !res.body) return;
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (!aborted) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          let eventType = '';
          for (const line of lines) {
            if (line.startsWith('event: ')) eventType = line.slice(7);
            else if (line.startsWith('data: ')) {
              try {
                const parsed = JSON.parse(line.slice(6));
                if (eventType === 'feed_message') {
                  const newMsg: TimelineMessage = {
                    id: parsed.id,
                    role: parsed.role,
                    agentId: parsed.agentId,
                    content: parsed.content,
                    timestamp: parsed.timestamp,
                    isStreaming: false,
                    toolCalls: parsed.toolName ? [{ id: parsed.id, name: parsed.toolName, args: {}, phase: 'done' as const, startTime: parsed.timestamp }] : [],
                  };

                  const cache = agentCacheRef.current;
                  const msgAgentId = parsed.agentId as string;

                  // Always populate feed + per-agent caches
                  addMsgToCache(cache, FEED_KEY, newMsg);
                  addMsgToCache(cache, msgAgentId, newMsg);

                  // Only render in current view if relevant
                  const isRelevant = viewModeRef.current === 'feed' || msgAgentId === activeAgentRef.current;
                  if (isRelevant) {
                    mRef.current.messages = [...mRef.current.messages, newMsg];
                    mRef.current.dirty = true;
                    scheduleFlush();
                  }

                  // Refresh agents/stats periodically
                  const feedCache = cache.get(FEED_KEY);
                  if (feedCache && feedCache.messages.length % 10 === 0) {
                    fetch('/api/admin/war-room/agents', { headers: { 'Authorization': `Bearer ${token}` } })
                      .then(r => r.ok ? r.json() : null)
                      .then(d => { if (d?.agents && mountedRef.current) setAgents(d.agents); })
                      .catch(() => {});
                    fetch('/api/admin/war-room/stats', { headers: { 'Authorization': `Bearer ${token}` } })
                      .then(r => r.ok ? r.json() : null)
                      .then(d => { if (d && mountedRef.current) setStats(d); })
                      .catch(() => {});
                  }
                } else if (eventType === 'pipeline_status') {
                  fetch('/api/admin/war-room/agents', { headers: { 'Authorization': `Bearer ${token}` } })
                    .then(r => r.ok ? r.json() : null)
                    .then(d => { if (d?.agents && mountedRef.current) setAgents(d.agents); })
                    .catch(() => {});
                  fetch('/api/admin/war-room/stats', { headers: { 'Authorization': `Bearer ${token}` } })
                    .then(r => r.ok ? r.json() : null)
                    .then(d => { if (d && mountedRef.current) setStats(d); })
                    .catch(() => {});
                }
              } catch { /* skip malformed SSE */ }
              eventType = '';
            } else if (line === '') {
              eventType = '';
            }
          }
        }
      } catch {
        // Stream ended or aborted — reconnect after 3s
        if (!aborted) setTimeout(connectFeedStream, 3000);
      }
    }

    connectFeedStream();

    return () => {
      aborted = true;
      ctrl.abort();
    };
  }, [token, scheduleFlush]);

  // ── Fetch agents + stats ──
  const fetchAgents = useCallback(async () => {
    try {
      const res = await authFetch('/api/admin/war-room/agents');
      if (res.ok) setAgents((await res.json()).agents || []);
    } catch { /* */ }
  }, [authFetch]);

  const fetchStats = useCallback(async () => {
    try {
      const res = await authFetch('/api/admin/war-room/stats');
      if (res.ok) setStats(await res.json());
    } catch { /* */ }
  }, [authFetch]);

  const fetchAgentDetail = useCallback(async (agentId: string) => {
    try {
      const res = await authFetch(`/api/admin/war-room/agents/${agentId}`);
      if (!res.ok) return;
      const data = await res.json();
      if (data?.agent && data?.performance) {
        setAgentDetail(data);
      }
    } catch { /* */ }
  }, [authFetch]);

  // ── Load chat history from BD (cold start fallback) ──
  const loadHistory = useCallback(async (agentId: string) => {
    try {
      const convRes = await authFetch(`/api/admin/war-room/conversations?agent_id=${agentId}`);
      if (!convRes.ok) return;
      const { conversations } = await convRes.json();
      if (!conversations || conversations.length === 0) return;

      const latestConv = conversations[0];
      convMapRef.current.set(agentId, latestConv.id);

      const msgRes = await authFetch(`/api/admin/war-room/conversations/${latestConv.id}/messages`);
      if (!msgRes.ok) return;
      const { messages: dbMessages } = await msgRes.json();
      if (!dbMessages || dbMessages.length === 0) return;

      const loaded: TimelineMessage[] = dbMessages.map((msg: { id: string; agent_id: string; role: string; content: string; tool_calls: unknown[] | null; created_at: string }) => ({
        id: msg.id,
        role: msg.role as 'user' | 'assistant',
        agentId: msg.role === 'user' ? 'user' : msg.agent_id,
        content: msg.content,
        timestamp: new Date(msg.created_at).getTime(),
        toolCalls: Array.isArray(msg.tool_calls) ? (msg.tool_calls as ToolCallInfo[]) : [],
      }));

      historyLoadedRef.current.add(agentId);

      // Update cache
      const cache = agentCacheRef.current;
      const existing = cache.get(agentId);
      if (!existing || existing.messages.length === 0) {
        cache.set(agentId, { ...emptyState(), messages: loaded });
      }

      // Only apply to UI if this agent is still the active view
      if (viewModeRef.current === 'chat' && activeAgentRef.current === agentId) {
        mRef.current.messages = loaded;
        mRef.current.dirty = true;
        scheduleFlush();
      }
    } catch (err) {
      console.error(`[useWarRoom] loadHistory(${agentId}) failed:`, err);
    }
  }, [authFetch, scheduleFlush]);

  // ── Connect ──
  const connect = useCallback(async () => {
    await fetchAgents();
    await fetchStats();
    setConnected(true);
  }, [fetchAgents, fetchStats]);

  useEffect(() => { connect(); }, [connect]);

  // ── Select agent (detail panel) ──
  const selectAgent = useCallback((agentId: string | null) => {
    setSelectedAgent(agentId);
    if (agentId) fetchAgentDetail(agentId);
  }, [fetchAgentDetail]);

  // ── Set active agent (chat mode) — save → restore cache ──
  const setActiveAgent = useCallback((agentId: string) => {
    const cache = agentCacheRef.current;
    const prevKey = viewModeRef.current === 'feed' ? FEED_KEY : activeAgentRef.current;

    // Save current state to cache
    cache.set(prevKey, cloneState(mRef.current));

    // Update refs + React state (no abort — let background streams complete)
    activeAgentRef.current = agentId;
    setActiveAgentRaw(agentId);
    viewModeRef.current = 'chat';
    setViewModeState('chat');

    // Restore from cache or start fresh
    const cached = cache.get(agentId);
    if (cached && cached.messages.length > 0) {
      mRef.current = { ...cached, dirty: true };
    } else {
      mRef.current = { ...emptyState(), dirty: true };
      // Load from BD as cold start fallback
      if (!historyLoadedRef.current.has(agentId)) {
        loadHistory(agentId);
      }
    }
    scheduleFlush();
  }, [scheduleFlush, loadHistory]);

  // ── Switch to feed mode ──
  const switchToFeed = useCallback(() => {
    const cache = agentCacheRef.current;

    // Save current agent state
    cache.set(activeAgentRef.current, cloneState(mRef.current));

    // Update refs + React state (no abort — let background streams complete)
    viewModeRef.current = 'feed';
    setViewModeState('feed');
    activeAgentRef.current = 'ceo'; // default send target in feed
    setActiveAgentRaw('ceo');

    // Restore feed cache or start fresh
    const feedCache = cache.get(FEED_KEY);
    if (feedCache && feedCache.messages.length > 0) {
      mRef.current = { ...feedCache, dirty: true };
    } else {
      mRef.current = { ...emptyState(), dirty: true };
    }
    scheduleFlush();
  }, [scheduleFlush]);

  // ── Parse SSE from chat API ──
  const parseSSE = useCallback(async (response: Response) => {
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
                const cid = parsed.conversationId as string;
                if (cid) convMapRef.current.set(activeAgentRef.current, cid);
                break;
              }
              case 'session':
                m.phase = 'thinking'; m.phaseTool = ''; m.phaseStartTime = Date.now();
                scheduleFlush();
                break;
              case 'text': {
                m.phase = 'writing'; m.phaseTool = '';
                m.streamingText += parsed.delta as string;
                const last = m.messages[m.messages.length - 1];
                if (last?.isStreaming) last.content = m.streamingText;
                scheduleFlush();
                break;
              }
              case 'tool_start': {
                m.phase = 'tool_running'; m.phaseTool = parsed.name as string; m.phaseStartTime = Date.now();
                const tool: ToolCallInfo = { id: parsed.id, name: parsed.name, args: {}, phase: 'running', startTime: Date.now() };
                m.toolCalls = [...m.toolCalls, tool];
                const last = m.messages[m.messages.length - 1];
                if (last?.isStreaming) last.toolCalls = [...m.toolCalls];
                scheduleFlush();
                break;
              }
              case 'tool_input': {
                const tc = m.toolCalls.find(t => t.id === parsed.id);
                if (tc) {
                  if (!tc.meta) tc.meta = '';
                  tc.meta += parsed.partial;
                  try { tc.args = JSON.parse(tc.meta); } catch { /* partial */ }
                }
                break;
              }
              case 'tool_result': {
                m.phase = 'thinking'; m.phaseTool = '';
                m.toolCalls = m.toolCalls.map(tc =>
                  tc.id === parsed.id
                    ? { ...tc, phase: parsed.isError ? 'error' as const : 'done' as const, meta: (parsed.content as string)?.substring(0, 200), endTime: Date.now() }
                    : tc
                );
                const last = m.messages[m.messages.length - 1];
                if (last?.isStreaming) last.toolCalls = [...m.toolCalls];
                scheduleFlush();
                break;
              }
              case 'done': {
                const finalText = (parsed.text as string) || m.streamingText;
                const cid = parsed.conversationId as string;
                if (cid) convMapRef.current.set(activeAgentRef.current, cid);
                m.messages = m.messages.map((msg, i) =>
                  i === m.messages.length - 1 && msg.isStreaming
                    ? { ...msg, content: finalText, toolCalls: [...m.toolCalls], isStreaming: false }
                    : msg
                );
                m.isRunning = false;
                m.streamingText = '';
                m.toolCalls = [];
                m.phase = 'idle'; m.phaseTool = '';
                scheduleFlush();
                fetchAgents();
                fetchStats();
                break;
              }
              case 'error': {
                m.messages = m.messages.map((msg, i) =>
                  i === m.messages.length - 1 && msg.isStreaming
                    ? { ...msg, content: `Erro: ${parsed.message}`, isStreaming: false }
                    : msg
                );
                m.isRunning = false;
                m.streamingText = '';
                m.toolCalls = [];
                m.phase = 'idle'; m.phaseTool = '';
                scheduleFlush();
                break;
              }
            }
          } catch { /* skip */ }
        }
      }
    } catch { /* stream ended */ }

    // Cleanup if stream ended mid-run
    if (m.isRunning) {
      const last = m.messages[m.messages.length - 1];
      if (last?.isStreaming) { last.content = m.streamingText || last.content; last.isStreaming = false; }
      m.isRunning = false;
      m.streamingText = '';
      m.toolCalls = [];
      m.phase = 'idle'; m.phaseTool = '';
      scheduleFlush();
    }
  }, [scheduleFlush, fetchAgents, fetchStats]);

  // ── Send message (with conversationId + cache persistence) ──
  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;
    const m = mRef.current;
    if (m.isRunning) return;

    const targetAgent = activeAgentRef.current;
    const targetKey = viewModeRef.current === 'feed' ? FEED_KEY : targetAgent;

    m.messages = [...m.messages,
      { id: `u-${Date.now()}`, role: 'user', agentId: 'user', content: text.trim(), timestamp: Date.now() },
      { id: `s-${Date.now()}`, role: 'assistant', agentId: targetAgent, content: '', timestamp: Date.now(), isStreaming: true, toolCalls: [] },
    ];
    m.isRunning = true;
    m.streamingText = '';
    m.toolCalls = [];
    m.phase = 'connecting'; m.phaseTool = ''; m.phaseStartTime = Date.now();
    // Start elapsed timer
    if (elapsedRef.current) clearInterval(elapsedRef.current);
    elapsedRef.current = setInterval(() => {
      if (!mountedRef.current || !mRef.current.isRunning) { clearInterval(elapsedRef.current!); elapsedRef.current = null; return; }
      const start = mRef.current.phaseStartTime;
      if (start > 0) {
        setStreamingElapsed(Math.round((Date.now() - start) / 1000));
      } else {
        setStreamingElapsed(0);
      }
    }, 1000);
    scheduleFlush();

    const existingConv = convMapRef.current.get(targetAgent);
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await authFetch('/api/admin/claude/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentId: targetAgent,
          message: text.trim(),
          conversationId: existingConv || undefined,
        }),
        signal: ctrl.signal,
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Erro' }));
        m.messages = m.messages.map((msg, i) =>
          i === m.messages.length - 1 && msg.isStreaming
            ? { ...msg, content: `Erro: ${(err as { error?: string }).error}`, isStreaming: false } : msg
        );
        m.isRunning = false;
        m.phase = 'idle'; m.phaseTool = '';
        scheduleFlush();
        return;
      }
      await parseSSE(res);
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        const last = m.messages[m.messages.length - 1];
        if (last?.isStreaming) { last.content = m.streamingText || '(Cancelado)'; last.isStreaming = false; }
        m.isRunning = false; m.streamingText = ''; m.toolCalls = [];
        m.phase = 'idle'; m.phaseTool = '';
        scheduleFlush();
        return;
      }
      m.messages = m.messages.map((msg, i) =>
        i === m.messages.length - 1 && msg.isStreaming
          ? { ...msg, content: `Erro: ${err instanceof Error ? err.message : 'Falha'}`, isStreaming: false } : msg
      );
      m.isRunning = false;
      m.phase = 'idle'; m.phaseTool = '';
      scheduleFlush();
    } finally {
      // Always persist final state to cache
      agentCacheRef.current.set(targetKey, cloneState(m));
    }
  }, [authFetch, parseSSE, scheduleFlush]);

  // ── Abort ──
  const abort = useCallback(async () => {
    abortRef.current?.abort();
    const convId = convMapRef.current.get(activeAgentRef.current);
    if (convId) {
      try { await authFetch('/api/admin/claude/chat/abort', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sessionId: convId }) }); } catch { /* */ }
    }
    const m = mRef.current;
    const last = m.messages[m.messages.length - 1];
    if (last?.isStreaming) { last.content = m.streamingText || '(Cancelado)'; last.isStreaming = false; }
    m.isRunning = false; m.streamingText = ''; m.toolCalls = [];
    m.phase = 'idle'; m.phaseTool = '';
    scheduleFlush();
  }, [authFetch, scheduleFlush]);

  return {
    connected, agents, activeAgent, setActiveAgent,
    selectedAgent, selectAgent, agentDetail,
    stats, messages, isRunning, streamingText,
    streamingPhase, streamingPhaseTool, streamingElapsed,
    sendMessage, abort, fetchAgents, fetchStats,
    viewMode, switchToFeed,
  };
}
