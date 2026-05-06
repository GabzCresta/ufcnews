'use client';

import { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import { ChevronRight, ArrowLeft, Trophy } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LiveResultCard } from '@/components/arena/LiveResultCard';
import { LiveLeaderboard } from '@/components/arena/LiveLeaderboard';
import { LiveCurrentFight } from '@/components/arena/LiveCurrentFight';
import { LiveChat } from '@/components/arena/LiveChat';
import { OctagonTexture, EventoNome, Countdown } from '@/components/arena/shared';

// ═══════════════════════════════════════════════════════════════
// Pick Result Overlay — GTA style
// ═══════════════════════════════════════════════════════════════

function PickResultOverlay({ type, onDone }: { type: 'win' | 'lose'; onDone: () => void }) {
  const t = useTranslations('arena');

  useEffect(() => {
    const timer = setTimeout(onDone, 2500);
    return () => clearTimeout(timer);
  }, [onDone]);

  if (type === 'win') {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none animate-fade-in">
        {/* Green radial glow */}
        <div className="absolute inset-0 bg-gradient-radial from-green-500/20 via-transparent to-transparent" />
        <div className="text-center animate-pick-result-bounce">
          <p className="font-display text-5xl sm:text-7xl uppercase tracking-widest text-green-400 drop-shadow-[0_0_40px_rgba(34,197,94,0.8)]">
            {t('live_overlay_win_line1')}
          </p>
          <p className="font-display text-6xl sm:text-8xl uppercase tracking-widest text-green-300 mt-2 animate-pulse drop-shadow-[0_0_60px_rgba(34,197,94,1)]">
            {t('live_overlay_win_line2')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none animate-fade-in">
      {/* Red desaturated overlay like GTA Wasted */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply" />
      <div className="text-center animate-pick-result-slide">
        <p className="font-display text-5xl sm:text-8xl uppercase tracking-[0.3em] text-red-500 drop-shadow-[0_0_50px_rgba(210,10,10,0.9)]"
           style={{ textShadow: '0 0 30px rgba(210,10,10,0.8), 0 0 60px rgba(210,10,10,0.4), 0 4px 0 rgba(0,0,0,0.5)' }}>
          {t('live_overlay_lose')}
        </p>
      </div>
    </div>
  );
}
import { FloatingReactions } from '@/components/arena/FloatingReactions';
import { useProximoEvento } from '@/hooks/useProximoEvento';
import { useArenaAuth } from '@/hooks/useArenaAuth';
import { useArenaEventoRoom } from '@/hooks/useArenaSocket';
import { useTenant } from '@/hooks/useTenant';

// ═══════════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════════

interface UserPick {
  vencedor_previsto_id: string;
  acertou_vencedor: boolean | null;
  pontos_ganhos: number;
  pontos_confianca: number;
}

interface Luta {
  luta_id: string;
  ordem: number;
  tipo: string;
  status: string;
  vencedor_id: string | null;
  metodo: string | null;
  round_final: number | null;
  lutador1_id: string;
  lutador1_nome: string;
  lutador2_id: string;
  lutador2_nome: string;
  lutador1_foto: string | null;
  lutador2_foto: string | null;
  userPick: UserPick | null;
  liveRound: number | null;
  liveRoundStartTime: string | null;
  liveBetweenRounds: boolean;
}

interface LeaderboardEntry {
  usuario_id: string;
  username: string;
  display_name: string | null;
  pontos_totais: number;
  acertos: number;
  total_lutas: number;
}

interface EventInfo {
  id: string;
  nome: string;
  status: string;
  data_evento: string;
  local_evento: string | null;
}

interface LiveData {
  evento: EventInfo;
  lutas: Luta[];
  leaderboard: LeaderboardEntry[];
  lutas_finalizadas: number;
  total_lutas?: number;
  usuario_id: string | null;
}

interface EventoRecente {
  id: string;
  nome: string;
  data_evento: string;
  local_evento: string | null;
  total_lutas: number;
  lutas_finalizadas: number;
}

const fetcher = (url: string) => fetch(url).then(r => {
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
});

// ═══════════════════════════════════════════════════════════════
// Countdown helper
// ═══════════════════════════════════════════════════════════════

function useCountdown(targetDate: string | undefined, soonLabel = '...') {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    if (!targetDate) return;
    function calc() {
      const diff = new Date(targetDate!).getTime() - Date.now();
      if (diff <= 0) { setTimeLeft(soonLabel); return; }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft(`${d}d ${h}h ${m}m`);
    }
    calc();
    const id = setInterval(calc, 60000);
    return () => clearInterval(id);
  }, [targetDate, soonLabel]);

  return timeLeft;
}

// ═══════════════════════════════════════════════════════════════
// Event result view (works for BOTH live and finalized)
// ═══════════════════════════════════════════════════════════════

function EventResultView({
  eventoId,
  onBack,
  liga,
}: {
  eventoId: string;
  onBack?: () => void;
  liga: { id: string; nome: string } | null;
}) {
  const t = useTranslations('arena');
  const { isAuthenticated, usuario } = useArenaAuth();
  const { tenant } = useTenant();
  // Leaderboard scope: 'global' | 'tenant' — only shown to tenant members
  const [leaderboardScope, setLeaderboardScope] = useState<'global' | 'tenant'>('global');
  const effectiveTenantId = leaderboardScope === 'tenant' && tenant ? tenant.id : null;

  // Smart fetching: SWR polls while ao_vivo, caches forever when finalizado
  // Socket.IO push (via crenas-rt) triggers mutate() for instant updates;
  // polling acts as safety net if socket drops.
  const { data, error, isValidating, mutate } = useSWR<LiveData>(
    effectiveTenantId
      ? `/api/arena/live?evento_id=${eventoId}&tenant_id=${effectiveTenantId}`
      : `/api/arena/live?evento_id=${eventoId}`,
    fetcher,
    {
      refreshInterval: (latestData: LiveData | undefined) => {
        if (latestData?.evento?.status === 'finalizado') return 0;
        return 5000; // 5s polling fallback — socket push is primary
      },
      revalidateOnFocus: true,
      dedupingInterval: 2000,
    }
  );

  // ── Real-time: listen for pushes from crenas-rt ──
  const socket = useArenaEventoRoom(eventoId);
  useEffect(() => {
    if (!socket) return;
    const onLuta = () => { void mutate(); };
    const onLeaderboard = () => { void mutate(); };
    const onEvento = () => { void mutate(); };
    socket.on('luta:finalizada', onLuta);
    socket.on('luta:ao_vivo', onLuta);
    socket.on('leaderboard:update', onLeaderboard);
    socket.on('evento:finalizado', onEvento);
    socket.on('evento:ao_vivo', onEvento);
    return () => {
      socket.off('luta:finalizada', onLuta);
      socket.off('luta:ao_vivo', onLuta);
      socket.off('leaderboard:update', onLeaderboard);
      socket.off('evento:finalizado', onEvento);
      socket.off('evento:ao_vivo', onEvento);
    };
  }, [socket, mutate]);

  // Track last update time for visual feedback
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  useEffect(() => {
    if (data) setLastUpdated(new Date());
  }, [data?.lutas_finalizadas, data?.leaderboard]);

  // ── Pick result overlay (GTA style) ──
  // Uses previous data comparison (ref) + sessionStorage to survive remounts.
  // Only shows overlay when acertou_vencedor transitions from null → true/false
  // between consecutive SWR polls — never on first load or remount.
  const [pickOverlay, setPickOverlay] = useState<'win' | 'lose' | null>(null);
  const prevLutasRef = useRef<Map<string, boolean | null> | null>(null);
  const isFirstFetchRef = useRef(true);
  const dismissOverlay = useCallback(() => setPickOverlay(null), []);

  useEffect(() => {
    if (!data?.lutas) return;

    // Build current state: luta_id → acertou_vencedor (null if unsettled)
    const currentState = new Map<string, boolean | null>();
    for (const luta of data.lutas) {
      if (!luta.userPick) continue;
      currentState.set(luta.luta_id, luta.userPick.acertou_vencedor);
    }

    // Load sessionStorage on first render to know what was already shown
    const storageKey = `overlay_shown_${eventoId}`;
    let alreadyShown: Set<string>;
    try {
      alreadyShown = new Set(JSON.parse(sessionStorage.getItem(storageKey) || '[]') as string[]);
    } catch {
      alreadyShown = new Set();
    }

    // First fetch: just save baseline, don't show anything
    if (isFirstFetchRef.current) {
      isFirstFetchRef.current = false;
      prevLutasRef.current = currentState;
      return;
    }

    // Subsequent polls: compare with previous state
    const prevState = prevLutasRef.current;
    if (prevState) {
      for (const [lutaId, acertou] of currentState) {
        if (acertou === null) continue; // not settled yet
        if (alreadyShown.has(lutaId)) continue; // already showed overlay this session
        const prevValue = prevState.get(lutaId);
        // Transition: null/undefined → true/false = result JUST came in
        if (prevValue === null || prevValue === undefined) {
          setPickOverlay(acertou ? 'win' : 'lose');
          alreadyShown.add(lutaId);
          try { sessionStorage.setItem(storageKey, JSON.stringify([...alreadyShown])); } catch { /* noop */ }
          break; // one at a time
        }
      }
    }

    // Update baseline for next poll
    prevLutasRef.current = currentState;
  }, [data?.lutas, eventoId]);

  // ── Ranking movement tracking ──
  const prevPositions = useRef<Map<string, number>>(new Map());
  const [movimentos, setMovimentos] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!data?.leaderboard) return;
    const newMovimentos: Record<string, number> = {};
    data.leaderboard.forEach((entry, i) => {
      const pos = i + 1;
      const prev = prevPositions.current.get(entry.usuario_id);
      if (prev !== undefined && prev !== pos) {
        newMovimentos[entry.usuario_id] = prev - pos;
      }
    });
    const newMap = new Map<string, number>();
    data.leaderboard.forEach((entry, i) => newMap.set(entry.usuario_id, i + 1));
    prevPositions.current = newMap;
    if (Object.keys(newMovimentos).length > 0) setMovimentos(newMovimentos);
  }, [data?.leaderboard]);

  // ── Current fight selection ──
  // ordem no banco: 14=first prelim (happens first), 1=main event (happens last)
  const currentFight = useMemo(() => {
    if (!data?.lutas) return null;
    // 1. If a fight is live, show it
    const live = data.lutas.find(l => l.status === 'ao_vivo');
    if (live) return live;
    // 2. If there are upcoming fights, show the NEXT one (highest ordem = next chronologically)
    const upcoming = [...data.lutas]
      .filter(l => l.status !== 'finalizada' && l.status !== 'ao_vivo')
      .sort((a, b) => b.ordem - a.ordem);
    if (upcoming.length > 0) return upcoming[0];
    // 3. All fights done — show the most recently finished (lowest ordem = last fight of the night)
    const finished = [...data.lutas]
      .filter(l => l.status === 'finalizada')
      .sort((a, b) => a.ordem - b.ordem);
    return finished[0] ?? null;
  }, [data?.lutas]);

  // Live order: finished fights first (most recent on top), then upcoming in chronological order
  // Chronological = lowest ordem first (prelims happen before main event)
  const sortedLutas = useMemo(() => {
    if (!data?.lutas) return [];
    const finished = [...data.lutas].filter(l => l.status === 'finalizada').sort((a, b) => b.ordem - a.ordem);
    const live = [...data.lutas].filter(l => l.status === 'ao_vivo');
    const upcoming = [...data.lutas].filter(l => l.status !== 'finalizada' && l.status !== 'ao_vivo').sort((a, b) => a.ordem - b.ordem);
    return [...finished, ...live, ...upcoming];
  }, [data?.lutas]);

  // Next pending pick (must be before early returns — React hooks rules)
  const nextPendingPick = useMemo(() => {
    if (!data?.lutas) return null;
    const pending = data.lutas
      .filter(l => l.status !== 'finalizada' && l.userPick && l.userPick.acertou_vencedor === null)
      .sort((a, b) => a.ordem - b.ordem);
    return pending[0]?.userPick ?? null;
  }, [data?.lutas]);

  if (!data && !error) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-dark-textMuted">{t('live_loading')}</p>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="neu-card rounded-lg p-6 text-center">
          <p className="text-red-400">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const { lutas, leaderboard, lutas_finalizadas, usuario_id } = data;
  // Use server-computed total (excludes canceled) when present, fallback to array length
  const totalLutas = data.total_lutas ?? lutas.filter(l => l.status !== 'cancelada').length;
  const isLive = data.evento.status === 'ao_vivo';
  const isFinished = data.evento.status === 'finalizado';
  const myEventPoints = usuario_id
    ? leaderboard.find(e => e.usuario_id === usuario_id)?.pontos_totais ?? 0
    : 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* GTA-style pick result overlay */}
      {pickOverlay && <PickResultOverlay type={pickOverlay} onDone={dismissOverlay} />}

      {/* Back button (when viewing a past event) */}
      {onBack && (
        <button
          onClick={onBack}
          className="mb-4 flex items-center gap-1.5 text-sm text-dark-textMuted hover:text-dark-text transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('live_back')}
        </button>
      )}

      {/* AO VIVO banner */}
      {isLive && (
        <div className="flex items-center justify-center gap-2 py-2 bg-ufc-red rounded-xl mb-4">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
          </span>
          <span className="font-display text-lg uppercase text-white tracking-widest">{t('live')}</span>
          <span className="text-white/60 text-sm">&middot; {lutas_finalizadas}/{totalLutas} {t('fights')}</span>
          {isValidating && (
            <span className="ml-1 h-1.5 w-1.5 rounded-full bg-white/50 animate-pulse" />
          )}
          {lastUpdated && (
            <span className="text-white/40 text-xs ml-auto">
              {lastUpdated.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
          )}
        </div>
      )}

      {/* 2-column grid: content + chat sidebar */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-6">
        {/* Left column: event content */}
        <div className="lg:col-span-2 space-y-5">
          {/* Event header */}
          <div className="neu-card rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h1 className="font-display text-2xl uppercase leading-tight text-dark-text">
                  {data.evento.nome}
                </h1>
                {data.evento.local_evento && (
                  <p className="mt-1 text-sm text-dark-textMuted">
                    {data.evento.local_evento}
                  </p>
                )}
              </div>
              {/* Event points status block — premium gold indicator */}
              {usuario_id ? (
                <div
                  className="shrink-0 relative rounded-xl px-5 py-3 text-right overflow-hidden"
                  style={{
                    background: 'radial-gradient(ellipse at 40% 30%, #D4AF37 0%, #A67C00 60%, #7A5C00 100%)',
                    boxShadow: 'inset 0 1px 1px rgba(255,223,120,0.4), inset 0 -1px 2px rgba(0,0,0,0.3), 0 0 20px rgba(212,175,55,0.15)',
                    border: '1px solid rgba(212,175,55,0.5)',
                  }}
                >
                  {/* Subtle top highlight for 3D depth */}
                  <div
                    className="absolute inset-x-0 top-0 h-[1px]"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,223,120,0.6), transparent)' }}
                  />
                  <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-black/50">
                    {t('live_points_label')}
                  </p>
                  <p className={`font-display text-2xl sm:text-3xl tabular-nums mt-0.5 font-black ${
                    myEventPoints > 0 ? 'text-[#1a1400]' : 'text-black/30'
                  }`}
                    style={{ textShadow: '0 1px 0 rgba(255,223,120,0.4)' }}
                  >
                    {myEventPoints.toLocaleString()} PTS
                  </p>
                  {nextPendingPick && (
                    <p className="text-[10px] text-black/40 mt-1">
                      {t('live_points_next_pick')}: <span className="text-[#1a1400] font-bold">+{nextPendingPick.pontos_confianca} pts</span>
                    </p>
                  )}
                </div>
              ) : isFinished ? (
                <div className="shrink-0 rounded-full bg-green-500/10 px-3 py-1.5">
                  <span className="font-display text-sm font-bold uppercase tracking-widest text-green-400">
                    {t('finished')}
                  </span>
                </div>
              ) : null}
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="mb-1.5 flex items-center justify-between text-xs text-dark-textMuted">
                <span>
                  {t('live_fights_finished', { done: lutas_finalizadas, total: totalLutas })}
                </span>
              </div>
              <div className="neu-inset h-2 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-ufc-red transition-all duration-700"
                  style={{
                    width: totalLutas > 0 ? `${(lutas_finalizadas / totalLutas) * 100}%` : '0%',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Current fight spotlight */}
          {currentFight && <LiveCurrentFight luta={currentFight} />}

          {/* Fight cards — chronological order (prelims first → main event last) */}
          <section className="space-y-3">
            {sortedLutas.filter(l => !currentFight || l.luta_id !== currentFight.luta_id).map(luta => (
              <LiveResultCard
                key={luta.luta_id}
                lutador1_nome={luta.lutador1_nome}
                lutador2_nome={luta.lutador2_nome}
                vencedor_id={luta.vencedor_id}
                lutador1_id={luta.lutador1_id}
                lutador2_id={luta.lutador2_id}
                metodo={luta.metodo}
                round_final={luta.round_final}
                tipo={luta.tipo}
                status={luta.status}
                userPick={luta.userPick}
              />
            ))}
          </section>

          {/* Leaderboard with header + scope toggle (only for tenant members) */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-ufc-red" />
                <h2 className="font-display text-lg uppercase tracking-wide text-dark-text">
                  {t('ranking')} <span className="text-ufc-red">{t('live')}</span>
                </h2>
              </div>
              {tenant && (
                <div className="inline-flex text-[10px] rounded-lg border border-white/10 p-0.5">
                  <button
                    onClick={() => setLeaderboardScope('global')}
                    className={`px-3 py-1 rounded-md uppercase tracking-wider font-bold ${
                      leaderboardScope === 'global'
                        ? 'bg-white/10 text-white'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    Global
                  </button>
                  <button
                    onClick={() => setLeaderboardScope('tenant')}
                    className={`px-3 py-1 rounded-md uppercase tracking-wider font-bold ${
                      leaderboardScope === 'tenant'
                        ? 'text-white'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                    style={leaderboardScope === 'tenant' ? { background: `${tenant.cor_primary}33` } : undefined}
                  >
                    {tenant.nome}
                  </button>
                </div>
              )}
            </div>
            <LiveLeaderboard leaderboard={leaderboard} meuUsuarioId={usuario_id} movimentos={movimentos} />
          </section>
        </div>

        {/* Right column: Chat sidebar + Reactions */}
        <div className="lg:col-span-1 mt-5 lg:mt-0 lg:sticky lg:top-4 lg:self-start space-y-3">
          <FloatingReactions
            currentFight={currentFight}
            eventoId={eventoId}
            isAuthenticated={isAuthenticated}
            username={usuario?.username}
          />
          <LiveChat eventoId={eventoId} ligaId={liga?.id} ligaNome={liga?.nome} currentUserId={usuario?.id} />
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// No live event → editorial: poster hero + countdown + recent events
// ═══════════════════════════════════════════════════════════════

function NoEventView({ onSelectEvento }: { onSelectEvento: (id: string) => void }) {
  const t = useTranslations('arena');
  const { evento, isLoading: proximoLoading } = useProximoEvento();

  // Fetch recent finalized events (immutable — won't re-fetch)
  const { data: recentData } = useSWRImmutable<{ eventos_recentes: EventoRecente[] }>(
    '/api/arena/live',
    fetcher
  );

  const recentes = recentData?.eventos_recentes ?? [];
  const posterUrl = (evento as { poster_url?: string } | null | undefined)?.poster_url ?? null;

  return (
    <>
      {/* ─── HERO: poster background + próximo evento ─── */}
      <OctagonTexture posterUrl={posterUrl} className={posterUrl ? 'min-h-[70vh] sm:min-h-[80vh]' : ''}>
        <div className={`container mx-auto px-4 ${posterUrl ? 'flex flex-col justify-center min-h-[70vh] sm:min-h-[80vh]' : 'py-14 sm:py-20'}`}>
          <div className="max-w-xl mx-auto text-center space-y-7 w-full">

            {/* Status strip (Swiss) */}
            <div className="flex items-center justify-center gap-3 font-display text-[10px] uppercase tracking-[0.32em] text-dark-textMuted">
              <span className="h-px w-8 bg-dark-border" />
              <span className="text-ufc-red">Offline</span>
              <span className="h-px w-8 bg-dark-border" />
            </div>

            <h1 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-dark-text">
              {t('live_no_event_now')}
            </h1>

            {proximoLoading ? (
              <div className="h-10 w-56 mx-auto bg-dark-card/60 animate-pulse rounded" />
            ) : evento ? (
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="font-display text-[10px] uppercase tracking-[0.28em] text-dark-textMuted">
                    {t('live_next_event')}
                  </p>
                  <EventoNome nome={evento.nome} size="sm" />
                </div>

                <div className="flex justify-center">
                  <Countdown targetDate={evento.data_evento} />
                </div>
              </div>
            ) : (
              <p className="text-sm text-dark-textMuted">
                {t('live_no_event_scheduled')}
              </p>
            )}
          </div>
        </div>
      </OctagonTexture>

      {/* ─── EVENTOS RECENTES (editorial lista) ─── */}
      {recentes.length > 0 && (
        <section className="container mx-auto max-w-3xl px-4 pb-16 pt-10">
          <div className="mb-5 flex items-baseline justify-between gap-4 border-t border-dark-border pt-4">
            <h2 className="font-display text-xs uppercase tracking-[0.32em] text-dark-text">
              {t('live_recent_events')}
            </h2>
            <span className="font-display text-[11px] uppercase tracking-[0.22em] tabular-nums text-dark-textMuted">
              {String(recentes.length).padStart(2, '0')} · Finalizados
            </span>
          </div>

          <ul className="divide-y divide-dark-border">
            {recentes.map((ev) => {
              const date = new Date(ev.data_evento);
              const dia = date.getDate();
              const mes = date.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '').toUpperCase();
              const ano = date.getFullYear();
              return (
                <li key={ev.id}>
                  <button
                    onClick={() => onSelectEvento(ev.id)}
                    className="group grid w-full grid-cols-12 items-center gap-4 py-5 text-left transition hover:bg-dark-card/20"
                  >
                    <div className="col-span-2 sm:col-span-1">
                      <div className="font-display leading-none tabular-nums text-dark-text text-2xl sm:text-3xl">
                        {String(dia).padStart(2, '0')}
                      </div>
                      <div className="mt-1 font-display text-[9px] uppercase tracking-[0.22em] text-dark-textMuted">
                        {mes} · {ano}
                      </div>
                    </div>

                    <div className="col-span-10 sm:col-span-9 min-w-0">
                      <h3 className="font-display text-sm sm:text-base uppercase tracking-[0.05em] text-dark-text leading-tight transition group-hover:text-ufc-red truncate">
                        {ev.nome}
                      </h3>
                      {ev.local_evento && (
                        <p className="mt-1 font-display text-[10px] uppercase tracking-[0.18em] text-dark-textMuted truncate">
                          {ev.local_evento}
                        </p>
                      )}
                      <p className="mt-1 font-display text-[10px] uppercase tracking-[0.18em] tabular-nums text-dark-textMuted">
                        {ev.lutas_finalizadas}/{ev.total_lutas}
                        <span className="mx-1.5 text-dark-border">·</span>
                        {t('live_fights_finished', { done: ev.lutas_finalizadas, total: ev.total_lutas }).replace(`${ev.lutas_finalizadas}/${ev.total_lutas} `, '')}
                      </p>
                    </div>

                    <div className="col-span-12 sm:col-span-2 flex justify-end">
                      <span className="inline-flex items-center gap-1 font-display text-[10px] uppercase tracking-[0.22em] text-dark-textMuted transition group-hover:text-ufc-red">
                        Ver resultado
                        <ChevronRight className="h-3 w-3 transition group-hover:translate-x-0.5" strokeWidth={2.4} />
                      </span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
}

// ═══════════════════════════════════════════════════════════════
// Page
// ═══════════════════════════════════════════════════════════════

export default function ArenaLivePage() {
  const t = useTranslations('arena');
  const { evento, isAoVivo, isLoading } = useProximoEvento();
  const [selectedEventoId, setSelectedEventoId] = useState<string | null>(null);

  // Fetch user's active liga for chat tab support
  const [liga, setLiga] = useState<{ id: string; nome: string } | null>(null);

  useEffect(() => {
    fetch('/api/arena/ligas?tipo=minhas&limit=1')
      .then(r => r.ok ? r.json() : null)
      .then((d: { ligas?: Array<{ id: string; nome: string }> } | null) => {
        if (d?.ligas?.[0]) setLiga(d.ligas[0]);
      })
      .catch(() => {});
  }, []);

  // Detect if event time has passed — show live view even if status hasn't transitioned yet
  const eventTimePassed = evento?.data_evento
    ? new Date(evento.data_evento).getTime() <= Date.now()
    : false;
  const shouldShowLive = (isAoVivo || eventTimePassed) && evento;

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-dark-textMuted">{t('live_loading')}</p>
      </div>
    );
  }

  // Viewing a specific past event's results
  if (selectedEventoId) {
    return (
      <EventResultView
        eventoId={selectedEventoId}
        onBack={() => setSelectedEventoId(null)}
        liga={liga}
      />
    );
  }

  // Live event happening now (or event time passed, waiting for status transition)
  if (shouldShowLive) {
    return <EventResultView eventoId={evento.id} liga={liga} />;
  }

  // No live event → show countdown + recent events
  return <NoEventView onSelectEvento={setSelectedEventoId} />;
}
