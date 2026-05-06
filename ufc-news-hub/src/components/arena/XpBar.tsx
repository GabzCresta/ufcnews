'use client';

import { useMemo } from 'react';
import { ChevronsUp } from 'lucide-react';
import { calcularProgresso } from '@/lib/arena/xp-shared';
import type { NivelUsuario } from '@/types/arena';

const NIVEL_LABEL: Record<NivelUsuario, string> = {
  iniciante: 'Iniciante',
  amateur: 'Amador',
  contender: 'Contender',
  challenger: 'Desafiante',
  elite: 'Elite',
  champion: 'Campeão',
  legend: 'Lenda',
};

interface XpBarProps {
  xpTotal: number;
  compact?: boolean;
  className?: string;
}

export function XpBar({ xpTotal, compact = false, className }: XpBarProps) {
  const p = useMemo(() => calcularProgresso(xpTotal), [xpTotal]);
  const widthPct = `${(p.progresso * 100).toFixed(1)}%`;

  if (compact) {
    return (
      <div
        className={`flex items-center gap-2 ${className ?? ''}`}
        title={
          p.nivelSeguinte
            ? `${p.xpAtual.toLocaleString('pt-BR')} XP — faltam ${p.xpParaProximo.toLocaleString('pt-BR')} para ${NIVEL_LABEL[p.nivelSeguinte]}`
            : `${p.xpAtual.toLocaleString('pt-BR')} XP — faixa máxima`
        }
      >
        <span className="hidden sm:inline text-[10px] font-display uppercase tracking-[0.18em] text-dark-textMuted">
          {NIVEL_LABEL[p.nivel]}
        </span>
        <div className="relative h-1.5 w-20 sm:w-28 overflow-hidden rounded-full bg-dark-border/60">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-ufc-red via-ufc-redLight to-ufc-gold transition-[width] duration-700 ease-out"
            style={{ width: widthPct }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`neu-inset rounded-xl p-4 ${className ?? ''}`}>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm uppercase tracking-[0.18em] text-dark-text">
            {NIVEL_LABEL[p.nivel]}
          </span>
          {p.nivelSeguinte && (
            <>
              <ChevronsUp className="h-3 w-3 text-dark-textMuted" />
              <span className="text-xs text-dark-textMuted">
                {NIVEL_LABEL[p.nivelSeguinte]}
              </span>
            </>
          )}
        </div>
        <span className="text-xs tabular-nums text-dark-textMuted">
          {p.xpAtual.toLocaleString('pt-BR')} XP
        </span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-dark-border/60">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-ufc-red via-ufc-redLight to-ufc-gold transition-[width] duration-700 ease-out"
          style={{ width: widthPct }}
        />
      </div>
      {p.nivelSeguinte ? (
        <div className="mt-1.5 text-[10px] uppercase tracking-wider text-dark-textMuted">
          Faltam {p.xpParaProximo.toLocaleString('pt-BR')} XP para {NIVEL_LABEL[p.nivelSeguinte]}
        </div>
      ) : (
        <div className="mt-1.5 text-[10px] uppercase tracking-wider text-ufc-gold">
          Faixa máxima atingida
        </div>
      )}
    </div>
  );
}
