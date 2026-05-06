'use client';

import { User, Bot } from 'lucide-react';
import type { ChatMessage } from './types';
import { ToolCallCard } from './ToolCallCard';
import { MarkdownContent } from './MarkdownRenderer';

// ═══════════════════════════════════════════════════════════
// MessageBubble — Chat message with markdown rendering
// Used by OpenClawTerminal (standalone chat mode)
// ═══════════════════════════════════════════════════════════

export function MessageBubble({ message, streamingText }: {
  message: ChatMessage;
  streamingText?: string;
}) {
  if (message.role === 'user') {
    return (
      <div className="flex justify-end gap-2 px-2">
        <div className="max-w-[80%] bg-ufc-red/10 border border-ufc-red/20 rounded-2xl rounded-br-md px-4 py-3">
          <p className="text-sm text-white whitespace-pre-wrap">{message.content}</p>
          <span className="text-[10px] text-gray-600 mt-1 block text-right">
            {new Date(message.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className="w-7 h-7 rounded-full bg-ufc-red/20 flex items-center justify-center shrink-0 mt-1">
          <User className="w-3.5 h-3.5 text-ufc-red" />
        </div>
      </div>
    );
  }

  const displayText = message.isStreaming ? (streamingText ?? message.content) : message.content;
  const toolCalls = message.toolCalls || [];
  const isError = displayText.startsWith('Erro:');

  return (
    <div className="flex gap-2 px-2">
      <div className="w-7 h-7 rounded-full bg-[#1a1a2e] border border-[#2a2a3a] flex items-center justify-center shrink-0 mt-1">
        <Bot className="w-3.5 h-3.5 text-gray-400" />
      </div>
      <div className="max-w-[85%] space-y-0">
        {toolCalls.length > 0 && (
          <div className="space-y-0">
            {toolCalls.map(tc => (
              <ToolCallCard key={tc.id} tool={tc} />
            ))}
          </div>
        )}

        {(displayText || message.isStreaming) && (
          <div className={`rounded-2xl rounded-bl-md px-4 py-3 ${
            isError
              ? 'bg-red-500/10 border border-red-500/20'
              : 'bg-[#1a1a24] border border-[#2a2a3a]'
          }`}>
            <div>
              {isError
                ? <p className="text-sm text-red-400">{displayText}</p>
                : <MarkdownContent text={displayText} />
              }
              {message.isStreaming && (
                <span className="inline-block w-0.5 h-4 bg-ufc-red ml-0.5 animate-pulse align-middle" />
              )}
            </div>
            {!message.isStreaming && (
              <span className="text-[10px] text-gray-600 mt-2 block">
                {new Date(message.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </span>
            )}
          </div>
        )}

        {message.isStreaming && !displayText && toolCalls.length === 0 && (
          <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded-2xl rounded-bl-md px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-ufc-red rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-ufc-red rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-ufc-red rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-xs text-gray-500">Pensando...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
