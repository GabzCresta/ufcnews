'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { SendHorizontal, Square } from 'lucide-react';
import type { ConnectionState } from './types';

export function ChatInput({ onSend, onAbort, isRunning, connectionState }: {
  onSend: (text: string) => void;
  onAbort: () => void;
  isRunning: boolean;
  connectionState: ConnectionState;
}) {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const disabled = connectionState !== 'connected';

  // Auto-resize textarea
  const adjustHeight = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = '0';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  }, []);

  useEffect(() => { adjustHeight(); }, [text, adjustHeight]);

  const handleSend = useCallback(() => {
    if (!text.trim() || disabled || isRunning) return;
    onSend(text);
    setText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  }, [text, disabled, isRunning, onSend]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  const placeholder = disabled
    ? 'Conectando ao gateway...'
    : isRunning
      ? 'Agente rodando...'
      : 'Mensagem para o agente...';

  return (
    <div className="flex items-end gap-2 px-1">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled || isRunning}
        rows={1}
        className="flex-1 bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl px-4 py-3 text-sm text-white
          placeholder:text-gray-600 focus:border-ufc-red/50 focus:outline-none transition-colors
          disabled:opacity-40 disabled:cursor-not-allowed resize-none overflow-hidden"
      />

      {isRunning ? (
        <button
          onClick={onAbort}
          className="neu-button w-10 h-10 flex items-center justify-center rounded-xl
            text-red-400 border border-red-500/30 hover:bg-red-500/10 transition-colors shrink-0"
          title="Cancelar"
        >
          <Square className="w-4 h-4" />
        </button>
      ) : (
        <button
          onClick={handleSend}
          disabled={!text.trim() || disabled}
          className="neu-button w-10 h-10 flex items-center justify-center rounded-xl
            text-ufc-red border border-ufc-red/30 hover:bg-ufc-red/10 transition-colors shrink-0
            disabled:opacity-30 disabled:cursor-not-allowed"
          title="Enviar"
        >
          <SendHorizontal className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
