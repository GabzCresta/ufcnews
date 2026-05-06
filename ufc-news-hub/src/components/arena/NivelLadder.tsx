'use client';

import { useMemo } from 'react';
import { Check, Lock } from 'lucide-react';
import { NIVEL_META } from '@/components/arena/NivelBadge';
import { NIVEL_TIERS, calcularProgresso } from '@/lib/arena/xp-shared';
import type { NivelUsuario } from '@/types/arena';

interface NivelLadderProps {
  xpTotal: number;
  className?: string;
  variant?: 'card' | 'flat';
  showHeader?: boolean;
}

const LABEL_CURTO: Record<NivelUsuario, string> = {
  iniciante: 'Ini',
  amateur: 'Ama',
  contender: 'Con',
  challenger: 'Des',
  elite: 'Eli',
  champion: 'Cam',
  legend: 'Len',
};

export function NivelLadder({
  xpTotal,
  className,
  variant = 'card',
  showHeader = true,
}: NivelLadderProps) {
  const progresso = useMemo(() => calcularProgresso(xpTotal), [xpTotal]);
  const tierIndex = NIVEL_TIERS.findIndex((t) => t.nivel === progresso.nivel);
  const totalSegmentos = NIVEL_TIERS.length - 1;
  const filledFraction =
    totalSegmentos > 0
      ? Math.min(1, (tierIndex + progresso.progresso) / totalSegmentos)
      : 1;

  const wrapperClass =
    variant === 'card' ? `neu-inset rounded-xl p-4 ${className ?? ''}` : className ?? '';

  return (
    <div className={wrapperClass}>
      {showHeader && (
        <div className="mb-4 flex items-baseline justify-between">
          <h3 className="font-display text-sm uppercase tracking-[0.22em] text-dark-text">
            Carreira
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-dark-textMuted tabular-nums">
            {progresso.xpAtual.toLocaleString('pt-BR')} XP
          </span>
        </div>
      )}

      <div className="relative">
        <div className="absolute left-5 right-5 top-5 h-0.5 rounded-full bg-dark-border/70" />
        <div
          className="absolute left-5 top-5 h-0.5 rounded-full bg-gradient-to-r from-ufc-red via-ufc-redLight to-ufc-gold transition-[width] duration-700 ease-out"
          style={{ width: `calc((100% - 2.5rem) * ${filledFraction})` }}
        />

        <div className="relative flex justify-between">
          {NIVEL_TIERS.map((tier, idx) => {
            const meta = NIVEL_META[tier.nivel];
            const Icon = meta.icon;
            const atual = idx === tierIndex;
            const passado = idx < tierIndex;
            const atingido = idx <= tierIndex;

            return (
              <div key={tier.nivel} className="flex flex-col items-center">
                <div
                  className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition"
                  style={{
                    backgroundColor: atingido ? meta.tom.bg : '#0F0F0F',
                    borderColor: atingido ? meta.tom.borda : 'rgba(115,115,115,0.3)',
                    boxShadow: atual ? `0 0 0 3px ${meta.tom.bg}, 0 0 14px ${meta.tom.borda}` : undefined,
                  }}
                >
                  {passado ? (
                    <Check
                      className="h-4 w-4"
                      strokeWidth={2.6}
                      style={{ color: meta.tom.fg }}
                    />
                  ) : atual ? (
                    <Icon
                      className="h-4 w-4"
                      strokeWidth={2.4}
                      style={{ color: meta.tom.fg }}
                    />
                  ) : (
                    <Lock
                      className="h-3 w-3"
                      strokeWidth={2.2}
                      style={{ color: '#737373' }}
                    />
                  )}
                  {atual && (
                    <span
                      className="pointer-events-none absolute inset-0 rounded-full animate-pulse"
                      style={{ boxShadow: `inset 0 0 0 1px ${meta.tom.fg}` }}
                    />
                  )}
                </div>

                <span
                  className={`mt-2 font-display text-[9px] uppercase tracking-wider ${
                    atual
                      ? 'text-dark-text'
                      : atingido
                      ? 'text-dark-textMuted'
                      : 'text-dark-textMuted/50'
                  }`}
                  style={atual ? { color: meta.tom.fg } : undefined}
                >
                  {LABEL_CURTO[tier.nivel]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {progresso.nivelSeguinte ? (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center text-xs">
          <span className="uppercase tracking-wider text-dark-textMuted">Próximo:</span>
          <span className="font-display uppercase tracking-wider text-dark-text">
            {NIVEL_META[progresso.nivelSeguinte].label}
          </span>
          <span className="text-dark-textMuted">·</span>
          <span className="tabular-nums text-ufc-gold">
            faltam {progresso.xpParaProximo.toLocaleString('pt-BR')} XP
          </span>
        </div>
      ) : (
        <div className="mt-4 text-center text-xs font-display uppercase tracking-wider text-ufc-gold">
          Faixa máxima atingida
        </div>
      )}
    </div>
  );
}
