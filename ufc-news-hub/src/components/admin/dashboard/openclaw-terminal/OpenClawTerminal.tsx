'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { Monitor, Wifi, WifiOff, Maximize2, Minimize2 } from 'lucide-react';
import { useClaudeChat } from '@/hooks/useClaudeChat';
import { MessageBubble } from './MessageBubble';
import { AgentSelector } from './AgentSelector';
import { ChatInput } from './ChatInput';

// ═══════════════════════════════════════════════════════════
// Claude Terminal — HTTP SSE chat with Claude Code CLI agents
// Migrated from OpenClaw WebSocket to Claude CLI (April 2026)
// ═══════════════════════════════════════════════════════════

export function OpenClawTerminal() {
  const {
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
  } = useClaudeChat();

  const [expanded, setExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const userScrolledRef = useRef(false);

  // ── Auto-scroll ──
  const scrollToBottom = useCallback(() => {
    if (!userScrolledRef.current) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages.length, streamingText, scrollToBottom]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 100;
    userScrolledRef.current = !atBottom;
  }, []);

  // ── Connection dot ──
  const dotColor = connectionState === 'connected'
    ? 'bg-emerald-400'
    : connectionState === 'connecting'
      ? 'bg-yellow-400 animate-pulse'
      : 'bg-red-400';

  const dotLabel = connectionState === 'connected'
    ? 'Conectado'
    : connectionState === 'connecting'
      ? 'Conectando...'
      : 'Desconectado';

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Monitor className="h-5 w-5 text-ufc-red" />
          <h2 className="font-display text-2xl text-white tracking-wide">Claude Terminal</h2>
          <div className="flex items-center gap-1.5 ml-2">
            <span className={`w-2 h-2 rounded-full ${dotColor}`} />
            <span className="text-[10px] text-gray-500">{dotLabel}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {connectionState === 'error' && (
            <button
              onClick={connect}
              className="neu-button px-3 py-2 text-sm text-ufc-red border border-ufc-red/30 hover:bg-ufc-red/10 transition-colors"
            >
              Reconectar
            </button>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="neu-button p-2 text-gray-400 hover:text-white transition-colors"
            title={expanded ? 'Reduzir' : 'Expandir'}
          >
            {expanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Terminal container */}
      <div className={`neu-card border border-[#1e1e2e] flex flex-col transition-all duration-300 ${
        expanded ? 'h-[85vh]' : 'h-[600px]'
      }`}>
        {/* Agent selector */}
        <div className="p-3 border-b border-[#1e1e2e]">
          <AgentSelector
            agents={agents}
            activeAgent={activeAgent}
            onChange={setActiveAgent}
            disabled={isAgentRunning}
          />
        </div>

        {/* Messages area */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto py-4 space-y-4 scrollbar-hide"
        >
          {messages.length === 0 && !isAgentRunning && (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1a1a2e] border border-[#2a2a3a] flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-sm text-gray-500 max-w-sm">
                {connectionState === 'connected'
                  ? `Conectado ao agente ${activeAgent || '...'}. Envie uma mensagem para comecar.`
                  : connectionState === 'connecting'
                    ? 'Conectando ao servidor...'
                    : 'Desconectado. Clique em Reconectar.'}
              </p>
            </div>
          )}

          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              streamingText={msg.role === 'assistant' && msg.isStreaming ? streamingText : undefined}
            />
          ))}

          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <div className="p-3 border-t border-[#1e1e2e]">
          <ChatInput
            onSend={sendMessage}
            onAbort={abortRun}
            isRunning={isAgentRunning}
            connectionState={connectionState}
          />
        </div>
      </div>
    </div>
  );
}
