'use client';

import { useRef, useEffect } from 'react';
import type { JSX } from 'react';
import { Loader2, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { ToolCallCard } from '../openclaw-terminal/ToolCallCard';
import { AGENT_COLORS, AGENT_DOT_COLORS, AGENT_LABELS } from './types';
import type { AgentSession } from './types';

function formatDuration(start: number, end?: number): string {
  const sec = Math.floor(((end || Date.now()) - start) / 1000);
  if (sec < 60) return `${sec}s`;
  return `${Math.floor(sec / 60)}m ${sec % 60}s`;
}

// Simple inline markdown
function renderText(text: string): JSX.Element {
  if (!text) return <></>;
  return (
    <div className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap break-words">
      {text.split('\n').map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line.replace(/\*\*([^*]+)\*\*/g, (_, t) => t)}
        </span>
      ))}
    </div>
  );
}

export function AgentLane({ session, isMain }: { session: AgentSession; isMain: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [session.messages, session.streamingText, session.toolCalls]);

  const borderColor = AGENT_COLORS[session.agentId] || 'border-l-gray-500';
  const dotColor = AGENT_DOT_COLORS[session.agentId] || 'bg-gray-500';
  const label = AGENT_LABELS[session.agentId] || session.agentId;
  const isRunning = session.status === 'running' || session.status === 'spawning';
  const isDone = session.status === 'completed';
  const isFailed = session.status === 'failed';

  return (
    <div className={`neu-card border-l-4 ${borderColor} flex flex-col min-w-[300px] max-w-[380px] w-[340px] shrink-0 h-full`}>
      {/* Header */}
      <div className="p-3 border-b border-[#1e1e2e] flex items-center gap-2">
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotColor} ${isRunning ? 'animate-pulse' : ''}`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white truncate">{label}</span>
            {isMain && <span className="text-[9px] bg-ufc-red/20 text-ufc-red px-1.5 py-0.5 rounded-full font-bold uppercase">CEO</span>}
          </div>
          {!isMain && session.parentSessionKey && (
            <span className="text-[10px] text-gray-600">CEO &gt; {label}</span>
          )}
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <Clock className="w-3 h-3 text-gray-600" />
          <span className="text-[10px] text-gray-500 font-mono">{formatDuration(session.startTime, session.endTime)}</span>
          {isRunning && <Loader2 className="w-3.5 h-3.5 text-ufc-red animate-spin" />}
          {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
          {isFailed && <AlertTriangle className="w-3.5 h-3.5 text-red-400" />}
        </div>
      </div>

      {/* Content */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-hide">
        {/* Tool calls */}
        {session.toolCalls.length > 0 && (
          <div className="space-y-1">
            {session.toolCalls.map(tc => (
              <ToolCallCard key={tc.id} tool={tc} />
            ))}
          </div>
        )}

        {/* Messages */}
        {session.messages.map(msg => (
          <div key={msg.id}>
            {msg.role === 'user' ? (
              <div className="bg-ufc-red/10 border border-ufc-red/20 rounded-lg px-3 py-2">
                <p className="text-xs text-gray-300">{msg.content}</p>
              </div>
            ) : (
              <div className="space-y-1">
                {msg.content && renderText(msg.content)}
                {msg.isStreaming && !msg.content && (
                  <div className="flex items-center gap-1.5 py-1">
                    <span className="w-1 h-1 bg-ufc-red rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1 h-1 bg-ufc-red rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1 h-1 bg-ufc-red rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-[10px] text-gray-600 ml-1">Pensando...</span>
                  </div>
                )}
                {msg.isStreaming && msg.content && (
                  <span className="inline-block w-0.5 h-3 bg-ufc-red animate-pulse" />
                )}
              </div>
            )}
          </div>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Footer status */}
      <div className="px-3 py-2 border-t border-[#1e1e2e]">
        <span className={`text-[10px] font-semibold uppercase ${
          isRunning ? 'text-ufc-red' : isDone ? 'text-emerald-400' : isFailed ? 'text-red-400' : 'text-gray-600'
        }`}>
          {isRunning ? 'Rodando...' : isDone ? 'Concluido' : isFailed ? 'Falhou' : 'Aguardando'}
        </span>
      </div>
    </div>
  );
}
