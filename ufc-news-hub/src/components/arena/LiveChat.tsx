'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import useSWR from 'swr';
import { useTranslations } from 'next-intl';
import { Send, MessageCircle } from 'lucide-react';
import { useArenaSocket } from '@/hooks/useArenaSocket';

interface ChatMessage {
  id: string;
  usuario_id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  mensagem: string;
  created_at: string;
}

interface ChatResponse {
  mensagens: ChatMessage[];
  online_count?: number;
}

interface LiveChatProps {
  eventoId: string;
  ligaId?: string;
  ligaNome?: string;
  currentUserId?: string;
}

const fetcher = (url: string) => fetch(url).then(r => {
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
});

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'agora';
  if (mins < 60) return `${mins}m`;
  return `${Math.floor(mins / 60)}h`;
}

export function LiveChat({ eventoId, ligaId, ligaNome, currentUserId }: LiveChatProps) {
  const t = useTranslations('arena');
  const [activeTab, setActiveTab] = useState<'geral' | 'liga'>('geral');
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [localMessages, setLocalMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Stable SWR key — always fetch last 50, dedup in useEffect
  const chatUrl = activeTab === 'geral'
    ? `/api/arena/live/chat?evento_id=${eventoId}&limit=50`
    : ligaId
      ? `/api/arena/ligas/${ligaId}/chat?limit=50`
      : null;

  // Initial fetch: just once (fallback interval kept for socket-dead edge cases)
  const { data } = useSWR<ChatResponse>(
    chatUrl,
    fetcher,
    { refreshInterval: 30_000, revalidateOnFocus: false, dedupingInterval: 3000 }
  );

  useEffect(() => {
    if (!data?.mensagens?.length) return;
    setLocalMessages(prev => {
      const existingIds = new Set(prev.map(m => m.id));
      const newMsgs = data.mensagens.filter(m => !existingIds.has(m.id));
      if (newMsgs.length === 0) return prev;
      const merged = [...prev, ...newMsgs];
      return merged.slice(-100);
    });
  }, [data?.mensagens]);

  // Real-time: chat:msg push via crenas-rt socket
  const { socket } = useArenaSocket();
  useEffect(() => {
    if (!socket) return;
    socket.emit('evento:join', eventoId);
    if (activeTab === 'liga' && ligaId) socket.emit('liga:join', ligaId);

    function onEventoMsg(msg: ChatMessage & { evento_id?: string }) {
      if (activeTab !== 'geral') return;
      if (msg.evento_id && msg.evento_id !== eventoId) return;
      setLocalMessages(prev => {
        if (prev.some(m => m.id === msg.id)) return prev;
        return [...prev, msg].slice(-100);
      });
    }
    function onLigaMsg(msg: ChatMessage & { liga_id?: string }) {
      if (activeTab !== 'liga' || !ligaId) return;
      if (msg.liga_id && msg.liga_id !== ligaId) return;
      setLocalMessages(prev => {
        if (prev.some(m => m.id === msg.id)) return prev;
        return [...prev, msg].slice(-100);
      });
    }

    socket.on('chat:msg', onEventoMsg);
    socket.on('liga_chat:msg', onLigaMsg);
    return () => {
      socket.off('chat:msg', onEventoMsg);
      socket.off('liga_chat:msg', onLigaMsg);
    };
  }, [socket, eventoId, ligaId, activeTab]);

  useEffect(() => {
    setLocalMessages([]);
  }, [activeTab]);

  const messageCount = localMessages.length;
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || messageCount === 0) return;
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
    if (isNearBottom) {
      // scrollTop no container apenas — NÃO usar scrollIntoView que rola a página inteira
      container.scrollTop = container.scrollHeight;
    }
  }, [messageCount]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isSending || cooldown) return;

    const mensagem = input.trim();
    if (mensagem.length > 280) return;

    setIsSending(true);
    setInput('');
    setSendError(null);

    try {
      const url = activeTab === 'geral'
        ? '/api/arena/live/chat'
        : `/api/arena/ligas/${ligaId}/chat`;

      const body = activeTab === 'geral'
        ? { evento_id: eventoId, mensagem }
        : { mensagem };

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const raw: unknown = await res.json();
        const msg = (raw && typeof raw === 'object' && 'mensagem' in raw && typeof (raw as Record<string, unknown>).mensagem === 'object')
          ? (raw as { mensagem: ChatMessage }).mensagem
          : raw as ChatMessage;
        // Dedup by id — socket push may have already delivered the same message.
        setLocalMessages(prev => {
          if (prev.some(m => m.id === msg.id)) return prev;
          return [...prev, msg];
        });
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
        setCooldown(true);
        setTimeout(() => setCooldown(false), 2000);
      } else {
        // Show WHY the send failed — 401 login, 400 event, 429 cooldown, etc.
        let errMsg = `Falha (HTTP ${res.status})`;
        try {
          const data = await res.json() as { error?: string };
          if (data.error) errMsg = data.error;
        } catch { /* noop */ }
        setSendError(errMsg);
        setInput(mensagem); // restaura texto pro user tentar de novo
        setTimeout(() => setSendError(null), 4000);
      }
    } catch {
      setSendError('Falha de conexao');
      setInput(mensagem);
      setTimeout(() => setSendError(null), 4000);
    }
    setIsSending(false);
  }, [input, isSending, cooldown, activeTab, eventoId, ligaId]);

  const onlineCount = (data as ChatResponse)?.online_count ?? 0;

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-white/40" />
          {ligaId ? (
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab('geral')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ufc-red/60 ${
                  activeTab === 'geral' ? 'bg-ufc-red text-white' : 'text-white/40 hover:text-white/60'
                }`}
              >
                {t('general_tab')}
              </button>
              <button
                onClick={() => setActiveTab('liga')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ufc-red/60 ${
                  activeTab === 'liga' ? 'bg-ufc-red text-white' : 'text-white/40 hover:text-white/60'
                }`}
              >
                {ligaNome ?? 'Liga'}
              </button>
            </div>
          ) : (
            <span className="text-xs font-display uppercase text-white/50">{t('live_chat_title')}</span>
          )}
        </div>
        {onlineCount > 0 && (
          <span className="text-[10px] text-white/30">{onlineCount} online</span>
        )}
      </div>

      <div ref={scrollContainerRef} className="h-72 overflow-y-auto px-4 py-3 space-y-2.5">
        {localMessages.length === 0 && (
          <div className="flex items-center justify-center h-full text-sm text-white/20">
            {t('no_messages_yet')}
          </div>
        )}
        {localMessages.map(msg => {
          const isMe = currentUserId && msg.usuario_id === currentUserId;
          return (
            <div key={msg.id} className={`flex items-end gap-2 ${isMe ? 'flex-row-reverse' : ''}`}>
              {!isMe && (
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[8px] font-bold text-white/30 shrink-0">
                  {(msg.display_name ?? msg.username).slice(0, 2).toUpperCase()}
                </div>
              )}
              <div className={`max-w-[75%] rounded-2xl px-3 py-2 ${
                isMe
                  ? 'bg-ufc-red/20 border border-ufc-red/30 rounded-br-sm'
                  : 'bg-white/5 border border-white/10 rounded-bl-sm'
              }`}>
                {!isMe && (
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-semibold text-white/60">{msg.display_name ?? msg.username}</span>
                    <span className="text-[10px] text-white/20">{timeAgo(msg.created_at)}</span>
                  </div>
                )}
                <p className={`text-sm break-words ${isMe ? 'text-white/80' : 'text-white/60'}`}>{msg.mensagem}</p>
                {isMe && (
                  <p className="text-[10px] text-white/20 text-right mt-0.5">{timeAgo(msg.created_at)}</p>
                )}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {sendError && (
        <div className="px-4 py-2 text-xs text-red-400 bg-red-500/10 border-t border-red-500/20 text-center">
          {sendError}
        </div>
      )}
      <div className="flex items-center gap-2 px-4 py-3 border-t border-white/10">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
          placeholder={t('type_your_message')}
          maxLength={280}
          className="flex-1 neu-inset rounded-lg px-3 py-2 text-sm text-dark-text placeholder:text-dark-textMuted focus:outline-none focus:ring-1 focus:ring-ufc-red/50"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isSending || cooldown}
          className="w-11 h-11 flex items-center justify-center rounded-xl neu-button bg-ufc-red hover:bg-ufc-redLight disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
