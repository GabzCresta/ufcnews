'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import {
  SendHorizontal, Square, Maximize2, Minimize2,
  Loader2, Bot, X,
} from 'lucide-react';
import { useWarRoom } from '@/hooks/useWarRoom';
import { AgentList } from './AgentList';
import { AgentDetail } from './AgentDetail';
import { AgentAvatar } from './AgentAvatar';
import { getAgentConfig } from './agent-config';
import { GlobalStats } from './GlobalStats';
import { ToolCallCard } from '../openclaw-terminal/ToolCallCard';
import { MarkdownContent } from '../openclaw-terminal/MarkdownRenderer';

// ═══════════════════════════════════════════════════════════
// War Room — 3-column AI Company dashboard
// Left: Agent list + Stats | Center: Timeline | Right: Agent detail
// ═══════════════════════════════════════════════════════════

const AGENT_COLORS: Record<string, string> = {
  'ceo': '#D20A0A',
  'card-scraper': '#3b82f6',
  'fight-analyst': '#10b981',
  'card-validator': '#eab308',
  'event-page-generator': '#a855f7',
  'translator': '#f97316',
};

const AGENT_NAMES: Record<string, string> = {
  'ceo': 'CEO',
  'card-scraper': 'Card Scraper',
  'fight-analyst': 'Fight Analyst',
  'card-validator': 'Validator',
  'event-page-generator': 'Event Page',
  'translator': 'Translator',
  'user': 'Voce',
};

export function WarRoom() {
  const {
    connected, agents, activeAgent, setActiveAgent,
    selectedAgent, selectAgent, agentDetail,
    stats, messages, isRunning, streamingText,
    streamingPhase, streamingPhaseTool, streamingElapsed,
    sendMessage, abort,
    viewMode, switchToFeed,
  } = useWarRoom();

  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const userScrolledRef = useRef(false);

  // Auto-scroll
  useEffect(() => {
    if (!userScrolledRef.current) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, streamingText]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    userScrolledRef.current = el.scrollHeight - el.scrollTop - el.clientHeight > 100;
  }, []);

  // Auto-resize textarea
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

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="font-display text-2xl text-white tracking-wide">War Room</h2>
          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${connected ? 'bg-emerald-400' : 'bg-red-400'}`} />
            <span className="text-[10px] text-gray-500">{connected ? 'Online' : 'Offline'}</span>
          </div>
        </div>
        <button onClick={() => setExpanded(!expanded)} className="neu-button p-2 text-gray-400 hover:text-white transition-colors">
          {expanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* 3-Column Layout */}
      <div className={`grid grid-cols-[240px_1fr_280px] gap-3 transition-all duration-300 ${expanded ? 'h-[85vh]' : 'h-[650px]'}`}>

        {/* ── LEFT: Sidebar ── */}
        <div className="neu-card border border-[#1e1e2e] rounded-2xl flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-3 space-y-6 scrollbar-hide">
            <AgentList
              agents={agents}
              activeAgent={activeAgent}
              selectedAgent={selectedAgent}
              onSelect={(id) => { selectAgent(id); setActiveAgent(id); }}
              onActivate={(id) => { setActiveAgent(id); }}
            />
            <GlobalStats stats={stats} />
          </div>
        </div>

        {/* ── CENTER: Timeline ── */}
        <div className="neu-card border border-[#1e1e2e] rounded-2xl flex flex-col overflow-hidden">
          {/* Mode toggle */}
          <div className="px-3 pt-3 flex items-center gap-2">
            <button
              onClick={() => switchToFeed()}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
                viewMode === 'feed' ? 'bg-ufc-red/10 text-ufc-red border border-ufc-red/30' : 'text-gray-500 hover:text-white'
              }`}
            >
              Feed (Todos)
            </button>
            {viewMode === 'chat' && (
              <span className="text-[11px] text-gray-400">
                Chat: <strong className="text-white">{AGENT_NAMES[activeAgent] || activeAgent}</strong>
              </span>
            )}
          </div>

          {/* Messages */}
          <div ref={scrollRef} onScroll={handleScroll} className="flex-1 overflow-y-auto py-4 space-y-4 scrollbar-hide">
            {messages.length === 0 && !isRunning && (
              <div className="flex flex-col items-center justify-center h-full text-center px-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1a1a2e] border border-[#2a2a3a] flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-gray-600" />
                </div>
                <p className="text-sm text-gray-500 max-w-sm">
                  {viewMode === 'feed'
                    ? 'Envie uma mensagem pro CEO para comecar.'
                    : `Envie uma mensagem pro ${AGENT_NAMES[activeAgent] || activeAgent}.`}
                </p>
              </div>
            )}

            {messages.map((msg) => {
              const agentColor = AGENT_COLORS[msg.agentId] || '#888';
              const agentName = AGENT_NAMES[msg.agentId] || msg.agentId;
              const displayText = msg.isStreaming ? (streamingText || msg.content) : msg.content;

              if (msg.role === 'user') {
                return (
                  <div key={msg.id} className="flex justify-end px-3">
                    <div className="max-w-[80%] bg-ufc-red/10 border border-ufc-red/20 rounded-2xl rounded-br-md px-4 py-3">
                      <p className="text-sm text-white whitespace-pre-wrap">{msg.content}</p>
                      <span className="text-[10px] text-gray-600 mt-1 block text-right">
                        {new Date(msg.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <div key={msg.id} className="px-3">
                  {/* Agent label */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <AgentAvatar agentId={msg.agentId} size="sm" isRunning={msg.isStreaming} />
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: getAgentConfig(msg.agentId).color }}>{agentName}</span>
                    {msg.isStreaming && <Loader2 className="w-3 h-3 text-ufc-red animate-spin" />}
                  </div>

                  {/* Tool calls */}
                  {msg.toolCalls && msg.toolCalls.length > 0 && (
                    <div className="ml-4 space-y-1 mb-2">
                      {msg.toolCalls.map(tc => <ToolCallCard key={tc.id} tool={tc} />)}
                    </div>
                  )}

                  {/* Content */}
                  {displayText ? (
                    <div className={`ml-4 rounded-2xl rounded-tl-md px-4 py-3 ${
                      msg.agentId === 'ceo'
                        ? 'bg-[#1a1410] border border-[#3a2a1a]' // CEO: warm gold tint
                        : 'bg-[#1a1a24] border border-[#2a2a3a]'
                    }`}>
                      <MarkdownContent text={displayText} />
                      {msg.isStreaming && <span className="inline-block w-0.5 h-4 bg-ufc-red ml-0.5 animate-pulse align-middle" />}
                      {!msg.isStreaming && (
                        <span className="text-[10px] text-gray-600 mt-2 block">
                          {new Date(msg.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      )}
                    </div>
                  ) : msg.isStreaming && (!msg.toolCalls || msg.toolCalls.length === 0) ? (
                    <div className="ml-4 py-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-ufc-red rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-1.5 h-1.5 bg-ufc-red rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-1.5 h-1.5 bg-ufc-red rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                        <span className={`text-[10px] font-semibold ${
                          streamingPhase === 'connecting' ? 'text-yellow-400' :
                          streamingPhase === 'thinking' ? 'text-blue-400' :
                          streamingPhase === 'tool_running' ? 'text-purple-400' :
                          streamingPhase === 'writing' ? 'text-emerald-400' :
                          'text-gray-500'
                        }`}>
                          {streamingPhase === 'connecting' ? 'Conectando ao agente...' :
                           streamingPhase === 'thinking' ? 'Raciocinando...' :
                           streamingPhase === 'tool_running' ? `Executando ${streamingPhaseTool}...` :
                           streamingPhase === 'writing' ? 'Escrevendo resposta...' :
                           'Processando...'}
                        </span>
                        {Number.isFinite(streamingElapsed) && streamingElapsed > 0 && streamingElapsed < 600 && streamingPhase !== 'idle' && (
                          <span className="text-[9px] text-gray-700 tabular-nums">{streamingElapsed}s</span>
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[#1e1e2e]">
            <div className="flex items-end gap-2">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                placeholder={viewMode === 'feed' ? 'Mensagem pro CEO...' : `Mensagem pro ${AGENT_NAMES[activeAgent] || activeAgent}...`}
                disabled={!connected}
                rows={1}
                className="flex-1 bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-ufc-red/50 focus:outline-none transition-colors disabled:opacity-40 resize-none overflow-hidden"
              />
              {isRunning ? (
                <button onClick={abort} className="neu-button w-10 h-10 flex items-center justify-center rounded-xl text-red-400 border border-red-500/30 hover:bg-red-500/10 transition-colors shrink-0">
                  <Square className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={handleSend} disabled={!text.trim() || !connected}
                  className="neu-button w-10 h-10 flex items-center justify-center rounded-xl text-ufc-red border border-ufc-red/30 hover:bg-ufc-red/10 transition-colors shrink-0 disabled:opacity-30">
                  <SendHorizontal className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Detail Panel ── */}
        <div className="neu-card border border-[#1e1e2e] rounded-2xl overflow-hidden">
          <div className="h-full overflow-y-auto p-4 scrollbar-hide">
            {agentDetail ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold">Detalhes</span>
                  <button onClick={() => selectAgent(null)} className="p-1 text-gray-600 hover:text-white transition-colors">
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <AgentDetail agent={agentDetail.agent} performance={agentDetail.performance} />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-xs text-gray-600">Clique em um agente para ver detalhes</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
