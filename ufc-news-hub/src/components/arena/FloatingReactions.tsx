'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useArenaEventoRoom } from '@/hooks/useArenaSocket';

// ═══════════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════════

interface CurrentFightData {
  luta_id: string;
  status: string;
  lutador1_id: string;
  lutador1_nome: string;
  lutador1_foto: string | null;
  lutador2_id: string;
  lutador2_nome: string;
  lutador2_foto: string | null;
}

interface FloatingReactionsProps {
  currentFight: CurrentFightData | null;
  eventoId: string;
  isAuthenticated: boolean;
  username?: string;
}

interface FloatingReaction {
  id: number;
  foto: string | null;
  nome: string;
  side: 'red' | 'blue';
  x: number;
}

interface RecentReaction {
  id: string;
  lutador_id: string;
  username: string;
}

// ═══════════════════════════════════════════════════════════════
// Fighter Avatar (with fallback)
// ═══════════════════════════════════════════════════════════════

function FighterAvatar({
  foto,
  nome,
  side,
  size = 40,
}: {
  foto: string | null;
  nome: string;
  side: 'red' | 'blue';
  size?: number;
}) {
  const [imgError, setImgError] = useState(false);
  const borderColor = side === 'red' ? 'border-ufc-red' : 'border-blue-400';
  const bgColor = side === 'red' ? 'bg-ufc-red' : 'bg-blue-500';
  const initial = nome.charAt(0).toUpperCase();

  if (!foto || imgError) {
    return (
      <div
        className={`rounded-full ${bgColor} flex items-center justify-center text-white font-bold text-sm border-2 ${borderColor}`}
        style={{ width: size, height: size }}
      >
        {initial}
      </div>
    );
  }

  return (
    <div
      className={`rounded-full overflow-hidden border-2 ${borderColor}`}
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={foto}
        alt={nome}
        width={size}
        height={size}
        className="object-cover w-full h-full"
        onError={() => setImgError(true)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// Main Component
// ═══════════════════════════════════════════════════════════════

export function FloatingReactions({ currentFight, eventoId, isAuthenticated, username }: FloatingReactionsProps) {
  const t = useTranslations('arena');
  const socket = useArenaEventoRoom(eventoId);
  const [reactions, setReactions] = useState<FloatingReaction[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [cooldown, setCooldown] = useState(false);
  const [showLoginHint, setShowLoginHint] = useState(false);
  const nextIdRef = useRef(0);
  const timeoutsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());
  const seenIdsRef = useRef<Set<string>>(new Set());

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(t => clearTimeout(t));
    };
  }, []);

  // Initial counts snapshot (one-shot), then socket push keeps us in sync.
  // Lightweight fallback: re-fetch every 60s in case socket drops unnoticed.
  useEffect(() => {
    if (!currentFight) return;
    let active = true;

    async function snapshot() {
      try {
        const res = await fetch(`/api/arena/live/reactions?luta_id=${currentFight!.luta_id}`);
        if (!res.ok || !active) return;
        const data = await res.json() as { counts: Record<string, number>; recent: RecentReaction[] };
        if (!active) return;
        setCounts(data.counts);
        // mark existing as seen so socket stream doesn't replay them
        for (const r of data.recent) seenIdsRef.current.add(r.id);
      } catch { /* noop */ }
    }

    snapshot();
    const interval = setInterval(snapshot, 60_000);
    return () => { active = false; clearInterval(interval); };
  }, [currentFight?.luta_id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Real-time: socket push for reaction:new
  useEffect(() => {
    if (!socket || !currentFight) return;

    function onReaction(r: { id: string; luta_id: string; lutador_id: string; username: string }) {
      if (!currentFight || r.luta_id !== currentFight.luta_id) return;
      if (seenIdsRef.current.has(r.id)) return;
      seenIdsRef.current.add(r.id);

      // Increment count from push
      setCounts(prev => ({ ...prev, [r.lutador_id]: (prev[r.lutador_id] || 0) + 1 }));

      // Skip animation for own reactions (already shown optimistically)
      if (username && r.username === username) return;

      const isF1 = r.lutador_id === currentFight.lutador1_id;
      const side: 'red' | 'blue' = isF1 ? 'red' : 'blue';
      const foto = isF1 ? currentFight.lutador1_foto : currentFight.lutador2_foto;
      const nome = isF1 ? currentFight.lutador1_nome : currentFight.lutador2_nome;
      addFloatingReaction(foto, nome, side);
    }

    socket.on('reaction:new', onReaction);
    return () => { socket.off('reaction:new', onReaction); };
  }, [socket, currentFight?.luta_id, username]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reset when fight changes
  useEffect(() => {
    if (!currentFight) return;
    setReactions([]);
    setCounts({});
    seenIdsRef.current.clear();
  }, [currentFight?.luta_id]); // eslint-disable-line react-hooks/exhaustive-deps

  const addFloatingReaction = useCallback((foto: string | null, nome: string, side: 'red' | 'blue') => {
    const id = nextIdRef.current++;
    const x = 20 + Math.random() * 60;
    setReactions(prev => [...prev.slice(-30), { id, foto, nome, side, x }]);

    const timeout = setTimeout(() => {
      setReactions(prev => prev.filter(r => r.id !== id));
      timeoutsRef.current.delete(timeout);
    }, 2000);
    timeoutsRef.current.add(timeout);
  }, []);

  // Disabled for finalized fights
  const isDisabled = useMemo(() => {
    if (!currentFight || currentFight.status !== 'finalizada') return false;
    return true;
  }, [currentFight]);

  const handleClick = useCallback(async (lutadorId: string, foto: string | null, nome: string, side: 'red' | 'blue') => {
    if (!isAuthenticated) {
      setShowLoginHint(true);
      setTimeout(() => setShowLoginHint(false), 2000);
      return;
    }

    if (cooldown || !currentFight || isDisabled) return;

    setCooldown(true);
    setTimeout(() => setCooldown(false), 500);

    // Optimistic: animation + counter increment immediately
    addFloatingReaction(foto, nome, side);
    setCounts(prev => ({
      ...prev,
      [lutadorId]: (prev[lutadorId] || 0) + 1,
    }));

    try {
      const res = await fetch('/api/arena/live/reactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ luta_id: currentFight.luta_id, lutador_id: lutadorId }),
      });

      if (!res.ok) {
        setCounts(prev => ({
          ...prev,
          [lutadorId]: Math.max(0, (prev[lutadorId] || 1) - 1),
        }));
      }
    } catch {
      setCounts(prev => ({
        ...prev,
        [lutadorId]: Math.max(0, (prev[lutadorId] || 1) - 1),
      }));
    }
  }, [isAuthenticated, cooldown, currentFight, isDisabled, addFloatingReaction]);

  if (!currentFight) return null;

  const f1Count = counts[currentFight.lutador1_id] || 0;
  const f2Count = counts[currentFight.lutador2_id] || 0;

  return (
    <div className="relative">
      {/* Floating reactions area */}
      <div className="absolute bottom-full left-0 right-0 h-40 pointer-events-none overflow-hidden">
        {reactions.map(r => (
          <div
            key={r.id}
            className="absolute animate-float-up"
            style={{ left: `${r.x}%`, bottom: 0 }}
          >
            <FighterAvatar foto={r.foto} nome={r.nome} side={r.side} size={40} />
          </div>
        ))}
      </div>

      {/* Fighter reaction buttons */}
      <div className="flex items-center justify-center gap-4 py-2">
        {/* Fighter 1 (Red) */}
        <button
          onClick={() => handleClick(
            currentFight.lutador1_id,
            currentFight.lutador1_foto,
            currentFight.lutador1_nome,
            'red'
          )}
          disabled={cooldown || isDisabled}
          className={`flex flex-col items-center gap-1 transition-all ${
            cooldown || isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
          }`}
          aria-label={`Reagir com ${currentFight.lutador1_nome}`}
        >
          <FighterAvatar
            foto={currentFight.lutador1_foto}
            nome={currentFight.lutador1_nome}
            side="red"
            size={48}
          />
          <span className="text-xs text-ufc-red font-bold tabular-nums">
            {f1Count > 0 ? f1Count.toLocaleString() : ''}
          </span>
        </button>

        {/* VS divider */}
        <span className="text-xs text-dark-textMuted font-display uppercase tracking-widest">vs</span>

        {/* Fighter 2 (Blue) */}
        <button
          onClick={() => handleClick(
            currentFight.lutador2_id,
            currentFight.lutador2_foto,
            currentFight.lutador2_nome,
            'blue'
          )}
          disabled={cooldown || isDisabled}
          className={`flex flex-col items-center gap-1 transition-all ${
            cooldown || isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
          }`}
          aria-label={`Reagir com ${currentFight.lutador2_nome}`}
        >
          <FighterAvatar
            foto={currentFight.lutador2_foto}
            nome={currentFight.lutador2_nome}
            side="blue"
            size={48}
          />
          <span className="text-xs text-blue-400 font-bold tabular-nums">
            {f2Count > 0 ? f2Count.toLocaleString() : ''}
          </span>
        </button>
      </div>

      {/* Login hint */}
      {showLoginHint && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-dark-card border border-dark-border rounded-lg px-3 py-1.5 text-xs text-dark-textMuted shadow-lg">
          {t('login_to_react')}
        </div>
      )}
    </div>
  );
}
