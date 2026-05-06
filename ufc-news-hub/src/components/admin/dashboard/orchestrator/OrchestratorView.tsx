'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import type { JSX } from 'react';
import {
  Monitor, Square, Maximize2, Minimize2,
  SendHorizontal, Bot, Menu, X, Plus, Clock,
  Loader2, CheckCircle2,
} from 'lucide-react';
import { useOrchestratorPipeline } from '@/hooks/useOrchestratorPipeline';
import { ToolCallCard } from '../openclaw-terminal/ToolCallCard';
import { MarkdownContent } from '../openclaw-terminal/MarkdownRenderer';
import { PipelineProgress } from './PipelineProgress';
import { AGENT_LABELS, AGENT_DOT_COLORS } from './types';
import type { AgentMessage } from './types';
import type { ToolCallInfo } from '../openclaw-terminal/types';

// ═══════════════════════════════════════════════════════════
// Unified Pipeline View (v6) — Single chat, auto-promote
//
// One input, one timeline. When CEO spawns agents, pipeline
// mode activates automatically. Progress bar appears.
// All agents visible in real-time. No buttons to click.
// ═══════════════════════════════════════════════════════════

function isInternalMessage(content: string): boolean {
  return content.includes('OpenClaw runtime context') ||
         content.includes('<<<BEGIN_UNTRUSTED') ||
         content.includes('[Internal task completion') ||
         content.includes('Action:\nA completed subagent');
}

function renderText(text: string): JSX.Element {
  if (!text) return <></>;
  return <MarkdownContent text={text} />;
}

function TimelineMessage({ msg, agentId }: { msg: AgentMessage; agentId: string }) {
  const label = AGENT_LABELS[agentId] || agentId;
  const dotColor = AGENT_DOT_COLORS[agentId] || 'bg-gray-500';
  const tools = msg.toolCalls || [];

  if (msg.role === 'user') {
    return (
      <div className="flex justify-end px-2">
        <div className="max-w-[80%] bg-ufc-red/10 border border-ufc-red/20 rounded-2xl rounded-br-md px-4 py-3">
          <p className="text-sm text-white whitespace-pre-wrap">{msg.content}</p>
        </div>
      </div>
    );
  }

  if (isInternalMessage(msg.content)) return null;

  return (
    <div className="px-2">
      <div className="flex items-center gap-2 mb-1.5">
        <span className={`w-2 h-2 rounded-full ${dotColor} ${msg.isStreaming ? 'animate-pulse' : ''}`} />
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{label}</span>
        {msg.isStreaming && <Loader2 className="w-3 h-3 text-ufc-red animate-spin" />}
        {!msg.isStreaming && msg.content && <CheckCircle2 className="w-3 h-3 text-emerald-500/50" />}
      </div>

      {tools.length > 0 && (
        <div className="ml-4 space-y-1 mb-2">
          {tools.map(tc => <ToolCallCard key={tc.id} tool={tc} />)}
        </div>
      )}

      {msg.content ? (
        <div className="ml-4 bg-[#1a1a24] border border-[#2a2a3a] rounded-2xl rounded-tl-md px-4 py-3">
          {renderText(msg.content)}
          {msg.isStreaming && <span className="inline-block w-0.5 h-4 bg-ufc-red ml-0.5 animate-pulse align-middle" />}
        </div>
      ) : msg.isStreaming && tools.length === 0 ? (
        <div className="ml-4 flex items-center gap-1.5 py-2">
          <span className="w-1 h-1 bg-ufc-red rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-1 h-1 bg-ufc-red rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-1 h-1 bg-ufc-red rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          <span className="text-[10px] text-gray-600 ml-1">Pensando...</span>
        </div>
      ) : null}
    </div>
  );
}

export function OrchestratorView() {
  const {
    connectionState, connect, agents,
    activeAgent, setActiveAgent,
    directMessages, isDirectRunning,
    sendMessage, abort,
    pipelineStatus, sessions,
    sessionList, fetchSessionList, switchSession, newSession,
  } = useOrchestratorPipeline();

  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const userScrolledRef = useRef(false);

  const isPipelineActive = pipelineStatus === 'running' || pipelineStatus === 'human_gate';
  const isRunning = isPipelineActive || isDirectRunning;
  const hasProgress = sessions.length > 0 && pipelineStatus !== 'idle';

  // Build unified timeline
  interface TimelineEntry { msg: AgentMessage; agentId: string; ts: number }
  const timelineEntries: TimelineEntry[] = (() => {
    if (isPipelineActive || (pipelineStatus === 'completed' && sessions.length > 0)) {
      const entries: TimelineEntry[] = [];
      for (const sess of sessions) {
        for (const msg of sess.messages) {
          if (isInternalMessage(msg.content)) continue;
          entries.push({ msg, agentId: sess.agentId, ts: msg.timestamp });
        }
      }
      entries.sort((a, b) => a.ts - b.ts);
      return entries;
    }
    return directMessages
      .filter(m => !isInternalMessage(m.content))
      .map(m => ({ msg: m, agentId: activeAgent, ts: m.timestamp }));
  })();

  useEffect(() => {
    if (!userScrolledRef.current) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [timelineEntries.length, sessions]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    userScrolledRef.current = el.scrollHeight - el.scrollTop - el.clientHeight > 100;
  }, []);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = '0';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  }, [text]);

  const handleSend = useCallback(() => {
    if (!text.trim()) return;
    sendMessage(text);
    setText('');
  }, [text, sendMessage]);

  const handleOpenDrawer = useCallback(() => { fetchSessionList(); setDrawerOpen(true); }, [fetchSessionList]);
  const handleSelectSession = useCallback((key: string) => { switchSession(key); setDrawerOpen(false); }, [switchSession]);
  const handleNewSession = useCallback(() => { newSession(activeAgent); setDrawerOpen(false); }, [newSession, activeAgent]);

  const dotColor = connectionState === 'connected' ? 'bg-emerald-400' : connectionState === 'connecting' ? 'bg-yellow-400 animate-pulse' : 'bg-red-400';

  return (
    <div className="space-y-4 relative">
      {/* Session Drawer */}
      {drawerOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setDrawerOpen(false)} />
          <div className="fixed left-56 top-0 h-full w-80 bg-[#0d0d14] border-r border-[#1e1e2e] z-50 flex flex-col shadow-2xl">
            <div className="p-4 border-b border-[#1e1e2e] flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">Sessoes</h3>
              <div className="flex items-center gap-2">
                <button onClick={handleNewSession} className="neu-button p-2 text-ufc-red hover:bg-ufc-red/10 rounded-lg transition-colors" title="Nova conversa"><Plus className="w-4 h-4" /></button>
                <button onClick={() => setDrawerOpen(false)} className="p-2 text-gray-400 hover:text-white transition-colors"><X className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-hide">
              {sessionList.length === 0 && <p className="text-xs text-gray-600 text-center py-8">Nenhuma sessao</p>}
              {sessionList.map(s => {
                const label = AGENT_LABELS[s.agentId] || s.agentId;
                const dotCol = AGENT_DOT_COLORS[s.agentId] || 'bg-gray-500';
                const time = s.updatedAt ? new Date(s.updatedAt).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) : '';
                return (
                  <button key={s.key} onClick={() => handleSelectSession(s.key)} className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#1a1a2e] transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${dotCol} shrink-0`} />
                      <span className="text-xs font-semibold text-white truncate">{label}</span>
                      <span className="text-[9px] text-gray-600 ml-auto flex items-center gap-1"><Clock className="w-2.5 h-2.5" />{time}</span>
                    </div>
                    {s.preview && <p className="text-[10px] text-gray-500 truncate pl-4">{s.preview}</p>}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={handleOpenDrawer} className="neu-button p-2 text-gray-400 hover:text-white transition-colors" title="Sessoes"><Menu className="w-4 h-4" /></button>
          <Monitor className="h-5 w-5 text-ufc-red" />
          <h2 className="font-display text-2xl text-white tracking-wide">Pipeline</h2>
          <div className="flex items-center gap-1.5 ml-2">
            <span className={`w-2 h-2 rounded-full ${dotColor}`} />
            <span className="text-[10px] text-gray-500">
              {connectionState === 'connected' ? 'Conectado' : connectionState === 'connecting' ? 'Conectando...' : 'Desconectado'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select value={activeAgent} onChange={(e) => setActiveAgent(e.target.value)} disabled={isDirectRunning}
            className="bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl px-3 py-2 text-xs text-white focus:border-ufc-red/50 focus:outline-none transition-colors appearance-none w-[130px]"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'10\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23666\' stroke-width=\'2\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center' }}>
            {agents.map(a => <option key={a.id} value={a.id}>{a.id}</option>)}
          </select>
          {connectionState === 'error' && (
            <button onClick={connect} className="neu-button px-3 py-2 text-xs text-ufc-red border border-ufc-red/30 hover:bg-ufc-red/10 transition-colors">Reconectar</button>
          )}
          <button onClick={() => setExpanded(!expanded)} className="neu-button p-2 text-gray-400 hover:text-white transition-colors">
            {expanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main container */}
      <div className={`neu-card border border-[#1e1e2e] flex flex-col transition-all duration-300 ${expanded ? 'h-[85vh]' : 'h-[600px]'}`}>
        {/* Progress bar — appears automatically when pipeline activates */}
        {hasProgress && (
          <div className="p-3 border-b border-[#1e1e2e]">
            <PipelineProgress sessions={sessions} />
          </div>
        )}

        {/* Timeline */}
        <div ref={scrollRef} onScroll={handleScroll} className="flex-1 overflow-y-auto py-4 space-y-4 scrollbar-hide">
          {timelineEntries.length === 0 && !isRunning && (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1a1a2e] border border-[#2a2a3a] flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-sm text-gray-500 max-w-sm">
                {connectionState === 'connected'
                  ? `Conectado ao ${activeAgent}. Envie uma mensagem para comecar.`
                  : connectionState === 'connecting' ? 'Conectando ao servidor...' : 'Desconectado.'}
              </p>
            </div>
          )}

          {timelineEntries.map((entry, i) => (
            <TimelineMessage key={`${entry.msg.id}-${i}`} msg={entry.msg} agentId={entry.agentId} />
          ))}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-[#1e1e2e]">
          <div className="flex items-end gap-2">
            <textarea ref={textareaRef} value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
              placeholder={`Mensagem pro ${AGENT_LABELS[activeAgent] || activeAgent}...`}
              disabled={connectionState !== 'connected'} rows={1}
              className="flex-1 bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-ufc-red/50 focus:outline-none transition-colors disabled:opacity-40 disabled:cursor-not-allowed resize-none overflow-hidden" />
            {isRunning ? (
              <button onClick={abort} className="neu-button w-10 h-10 flex items-center justify-center rounded-xl text-red-400 border border-red-500/30 hover:bg-red-500/10 transition-colors shrink-0" title="Cancelar">
                <Square className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={handleSend} disabled={!text.trim() || connectionState !== 'connected'}
                className="neu-button w-10 h-10 flex items-center justify-center rounded-xl text-ufc-red border border-ufc-red/30 hover:bg-ufc-red/10 transition-colors shrink-0 disabled:opacity-30 disabled:cursor-not-allowed" title="Enviar">
                <SendHorizontal className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
