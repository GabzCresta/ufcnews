'use client';

import { Zap, CheckCircle2, XCircle, Clock, Trophy } from 'lucide-react';
import { sobrenome } from '@/components/arena/shared';

interface UserPick {
  vencedor_previsto_id: string;
  acertou_vencedor: boolean | null;
  pontos_ganhos: number;
}

interface LiveLuta {
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
  userPick: UserPick | null;
}

interface LiveCurrentFightProps {
  luta: LiveLuta;
}

function tipoLabel(tipo: string): string {
  const map: Record<string, string> = {
    main_event: 'MAIN EVENT', co_main: 'CO-MAIN', card_principal: 'MAIN CARD',
    preliminar: 'PRELIMINAR', early_prelim: 'EARLY PRELIM',
  };
  return map[tipo] ?? tipo.toUpperCase();
}

export function LiveCurrentFight({ luta }: LiveCurrentFightProps) {
  const isLive = luta.status === 'ao_vivo';
  const isFinished = luta.status === 'finalizada';
  const isNext = !isLive && !isFinished;
  const pick = luta.userPick;

  const winnerIs1 = luta.vencedor_id === luta.lutador1_id;
  const winnerIs2 = luta.vencedor_id === luta.lutador2_id;

  const pickName = pick
    ? pick.vencedor_previsto_id === luta.lutador1_id
      ? sobrenome(luta.lutador1_nome)
      : sobrenome(luta.lutador2_nome)
    : null;

  const pickCorrect = pick?.acertou_vencedor === true;
  const pickWrong = pick?.acertou_vencedor === false;
  const pickPending = pick?.acertou_vencedor === null;

  // ── Container classes per state ────────────────────────────────────────────
  const cardClasses = isLive
    ? 'relative overflow-hidden rounded-2xl backdrop-blur-md animate-slide-in-up border-2 border-ufc-red/60 bg-gradient-to-br from-red-950/90 via-black/80 to-red-950/60 animate-glow-red-border'
    : isFinished
    ? 'relative overflow-hidden rounded-2xl backdrop-blur-md animate-slide-in-up border-2 border-green-500/40 bg-gradient-to-br from-green-950/60 via-black/80 to-green-950/40'
    : 'relative overflow-hidden rounded-2xl backdrop-blur-md animate-slide-in-up border border-white/10 bg-gradient-to-br from-[#111] to-[#0a0a0a]';

  const containerShadow = isLive
    ? { boxShadow: '0 0 30px rgba(210,10,10,0.4), 0 0 60px rgba(210,10,10,0.15)' }
    : isFinished
    ? { boxShadow: '0 0 30px rgba(34,197,94,0.2), 0 0 60px rgba(34,197,94,0.08)' }
    : undefined;

  return (
    <div className={cardClasses} style={containerShadow}>

      {/* Live: red radial glow at top center */}
      {isLive && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(210,10,10,0.35) 0%, rgba(210,10,10,0.12) 40%, transparent 70%)',
          }}
        />
      )}

      {/* Live: scanline texture overlay */}
      {isLive && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
          }}
        />
      )}

      {/* Finished: green flash */}
      {isFinished && (
        <div className="pointer-events-none absolute inset-0 animate-flash-result rounded-2xl" />
      )}

      {/* Finished: green radial glow */}
      {isFinished && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(34,197,94,0.18) 0%, transparent 65%)',
          }}
        />
      )}

      <div className="relative z-10 p-5 space-y-5">

        {/* ── Header row: fight type + status badge ── */}
        <div className="flex items-center justify-between">
          <span
            className={`text-[11px] font-display tracking-[0.2em] uppercase ${
              isLive ? 'text-ufc-red' : isFinished ? 'text-green-400/70' : 'text-white/30'
            }`}
          >
            {tipoLabel(luta.tipo)}
          </span>

          {isLive && (
            <div
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-ufc-red font-display uppercase tracking-widest"
              style={{ boxShadow: '0 0 16px rgba(210,10,10,0.6), 0 0 32px rgba(210,10,10,0.25)' }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <span className="text-[12px] font-black text-white tracking-widest">
                EM ANDAMENTO
              </span>
            </div>
          )}

          {isFinished && (
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/40"
              style={{ boxShadow: '0 0 12px rgba(34,197,94,0.2)' }}
            >
              <Trophy className="w-3.5 h-3.5 text-green-400" />
              <span className="text-[11px] font-bold text-green-400 uppercase tracking-widest">
                Finalizada
              </span>
            </div>
          )}

          {isNext && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <Clock className="w-3 h-3 text-white/25" />
              <span className="text-[10px] font-bold text-white/25 uppercase tracking-widest">
                Proxima
              </span>
            </div>
          )}
        </div>

        {/* ── Fighter names + VS divider ── */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Fighter 1 */}
          <div
            className={`flex-1 text-center transition-all duration-500 ${
              isFinished && !winnerIs1 ? 'opacity-20 grayscale' : ''
            }`}
          >
            {isFinished && winnerIs1 && (
              <div className="mb-1 flex items-center justify-center gap-1">
                <div
                  className="px-2 py-0.5 rounded-sm bg-green-500/20 border border-green-400/40"
                  style={{ boxShadow: '0 0 8px rgba(34,197,94,0.3)' }}
                >
                  <span className="text-[9px] font-black text-green-400 uppercase tracking-[0.2em]">
                    VENCEDOR
                  </span>
                </div>
              </div>
            )}
            <div
              className={`font-display text-3xl sm:text-4xl uppercase leading-tight tracking-wide ${
                isFinished && winnerIs1
                  ? 'text-green-300'
                  : isLive
                  ? 'text-white'
                  : 'text-white/60'
              }`}
              style={
                isLive
                  ? { textShadow: '0 0 20px rgba(210,10,10,0.6), 0 0 40px rgba(210,10,10,0.3)' }
                  : isFinished && winnerIs1
                  ? { textShadow: '0 0 20px rgba(34,197,94,0.5), 0 0 40px rgba(34,197,94,0.25)' }
                  : undefined
              }
            >
              {sobrenome(luta.lutador1_nome)}
            </div>
          </div>

          {/* VS divider */}
          <div className="flex flex-col items-center shrink-0 gap-0">
            {isLive ? (
              <>
                {/* Top gradient line */}
                <div
                  className="w-px h-6"
                  style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(210,10,10,0.8))',
                  }}
                />
                {/* Red diamond with zap */}
                <div
                  className="w-8 h-8 rotate-45 bg-ufc-red flex items-center justify-center animate-pulse-red"
                  style={{
                    boxShadow:
                      '0 0 16px rgba(210,10,10,0.8), 0 0 32px rgba(210,10,10,0.4), 0 0 48px rgba(210,10,10,0.2)',
                  }}
                >
                  <Zap className="-rotate-45 w-4 h-4 text-white fill-white" />
                </div>
                {/* Bottom gradient line */}
                <div
                  className="w-px h-6"
                  style={{
                    background: 'linear-gradient(to top, transparent, rgba(210,10,10,0.8))',
                  }}
                />
              </>
            ) : isFinished ? (
              <span className="font-display text-sm text-green-500/30 tracking-widest">VS</span>
            ) : (
              <span className="font-display text-sm text-white/15 tracking-widest">VS</span>
            )}
          </div>

          {/* Fighter 2 */}
          <div
            className={`flex-1 text-center transition-all duration-500 ${
              isFinished && !winnerIs2 ? 'opacity-20 grayscale' : ''
            }`}
          >
            {isFinished && winnerIs2 && (
              <div className="mb-1 flex items-center justify-center gap-1">
                <div
                  className="px-2 py-0.5 rounded-sm bg-green-500/20 border border-green-400/40"
                  style={{ boxShadow: '0 0 8px rgba(34,197,94,0.3)' }}
                >
                  <span className="text-[9px] font-black text-green-400 uppercase tracking-[0.2em]">
                    VENCEDOR
                  </span>
                </div>
              </div>
            )}
            <div
              className={`font-display text-3xl sm:text-4xl uppercase leading-tight tracking-wide ${
                isFinished && winnerIs2
                  ? 'text-green-300'
                  : isLive
                  ? 'text-white'
                  : 'text-white/60'
              }`}
              style={
                isLive
                  ? { textShadow: '0 0 20px rgba(210,10,10,0.6), 0 0 40px rgba(210,10,10,0.3)' }
                  : isFinished && winnerIs2
                  ? { textShadow: '0 0 20px rgba(34,197,94,0.5), 0 0 40px rgba(34,197,94,0.25)' }
                  : undefined
              }
            >
              {sobrenome(luta.lutador2_nome)}
            </div>
          </div>
        </div>

        {/* ── Result method + round (finished only) ── */}
        {isFinished && luta.metodo && (
          <div className="text-center">
            <span
              className="inline-block px-4 py-1.5 rounded-sm border border-green-500/30 bg-green-500/10 text-sm font-display uppercase tracking-widest text-green-300"
              style={{ boxShadow: '0 0 12px rgba(34,197,94,0.15)' }}
            >
              {luta.metodo}
              {luta.round_final ? (
                <span className="ml-2 text-green-400/60">R{luta.round_final}</span>
              ) : null}
            </span>
          </div>
        )}

        {/* ── Divider ── */}
        <div
          className="h-px w-full"
          style={{
            background: isLive
              ? 'linear-gradient(to right, transparent, rgba(210,10,10,0.5), transparent)'
              : isFinished
              ? 'linear-gradient(to right, transparent, rgba(34,197,94,0.3), transparent)'
              : 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)',
          }}
        />

        {/* ── User pick section ── */}
        {pick ? (
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
              pickCorrect
                ? 'border-green-500/40 bg-green-500/10'
                : pickWrong
                ? 'border-red-500/30 bg-red-900/10'
                : isLive
                ? 'border-ufc-red/25 bg-ufc-red/5'
                : 'border-white/[0.07] bg-white/[0.03]'
            }`}
            style={
              pickCorrect
                ? { boxShadow: '0 0 20px rgba(34,197,94,0.15), inset 0 0 20px rgba(34,197,94,0.05)' }
                : pickWrong
                ? { boxShadow: '0 0 20px rgba(210,10,10,0.12), inset 0 0 20px rgba(210,10,10,0.04)' }
                : undefined
            }
          >
            {/* Icon */}
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                pickCorrect
                  ? 'bg-green-500/20'
                  : pickWrong
                  ? 'bg-red-500/15'
                  : isLive
                  ? 'bg-ufc-red/10'
                  : 'bg-white/[0.06]'
              }`}
              style={
                pickCorrect
                  ? { boxShadow: '0 0 10px rgba(34,197,94,0.3)' }
                  : pickWrong
                  ? { boxShadow: '0 0 10px rgba(210,10,10,0.2)' }
                  : undefined
              }
            >
              {pickCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              ) : pickWrong ? (
                <XCircle className="w-5 h-5 text-red-400" />
              ) : (
                <Zap
                  className={`w-5 h-5 ${isLive ? 'text-ufc-red' : 'text-white/30'}`}
                />
              )}
            </div>

            {/* Pick info */}
            <div className="flex-1 min-w-0">
              <div
                className={`text-[10px] uppercase tracking-widest font-bold mb-0.5 ${
                  pickCorrect
                    ? 'text-green-400/70'
                    : pickWrong
                    ? 'text-red-400/60'
                    : 'text-white/30'
                }`}
              >
                Seu Pick
              </div>
              <div
                className={`font-display text-lg uppercase tracking-wide truncate ${
                  pickCorrect
                    ? 'text-green-300'
                    : pickWrong
                    ? 'text-red-400'
                    : isLive
                    ? 'text-white'
                    : 'text-white/60'
                }`}
                style={
                  pickCorrect
                    ? { textShadow: '0 0 12px rgba(34,197,94,0.4)' }
                    : pickWrong
                    ? { textShadow: '0 0 12px rgba(210,10,10,0.3)' }
                    : undefined
                }
              >
                {pickName}
              </div>
            </div>

            {/* Points badge */}
            {pickCorrect && (
              <div className="shrink-0 flex flex-col items-end">
                <span
                  className="font-display text-2xl text-green-300 leading-tight"
                  style={{ textShadow: '0 0 14px rgba(34,197,94,0.6)' }}
                >
                  +{pick.pontos_ganhos}
                </span>
                <span className="text-[9px] text-green-400/60 uppercase tracking-widest">pts</span>
              </div>
            )}
            {pickWrong && (
              <div className="shrink-0">
                <span className="font-display text-xl text-red-400/60 leading-tight">0 pts</span>
              </div>
            )}
            {pickPending && (
              <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                <span className="text-[10px] text-amber-400/80 uppercase tracking-widest font-bold">
                  Ao vivo
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 py-2">
            <Zap className="w-3.5 h-3.5 text-white/15" />
            <span className="text-xs text-white/20 italic">Sem pick para esta luta</span>
          </div>
        )}
      </div>
    </div>
  );
}
