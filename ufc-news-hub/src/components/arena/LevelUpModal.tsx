'use client';

import { useEffect, useState } from 'react';
import { ChevronsUp, X } from 'lucide-react';
import { useArenaAuth } from '@/hooks/useArenaAuth';
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

interface LevelUpPayload {
  type: 'level_up';
  de: NivelUsuario;
  para: NivelUsuario;
  xp_delta: number;
  fonte: string;
}

const FONTE_LABEL: Record<string, string> = {
  previsao_acerto: 'Previsão correta',
  conquista: 'Nova conquista',
  card_perfeito: 'Card perfeito',
  login_diario: 'Login diário',
  share_pick: 'Compartilhamento',
  amigo_convite: 'Convite aceito',
  amigo_aceito: 'Convite aceito',
};

export function LevelUpModal() {
  const { isAuthenticated } = useArenaAuth();
  const [payload, setPayload] = useState<LevelUpPayload | null>(null);

  useEffect(() => {
    if (!isAuthenticated) return;

    const es = new EventSource('/api/arena/notifications/stream');

    const handler = (ev: MessageEvent) => {
      try {
        const data = JSON.parse(ev.data) as LevelUpPayload;
        if (data?.type === 'level_up' && data.de && data.para) {
          setPayload(data);
        }
      } catch {
        // payload invalido
      }
    };

    es.addEventListener('notification', handler as EventListener);
    es.onerror = () => {
      // reconnect automatico do EventSource
    };

    return () => {
      es.removeEventListener('notification', handler as EventListener);
      es.close();
    };
  }, [isAuthenticated]);

  if (!payload) return null;

  const fonteLabel = FONTE_LABEL[payload.fonte] ?? payload.fonte.replace(/_/g, ' ');

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm animate-in"
      onClick={() => setPayload(null)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="neu-card relative w-full max-w-md rounded-2xl border border-ufc-red/40 p-8 animate-glow-pulse-border"
      >
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => setPayload(null)}
          className="absolute right-3 top-3 rounded-lg p-1.5 text-dark-textMuted transition hover:bg-dark-border/60 hover:text-dark-text"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <span className="text-[11px] font-display uppercase tracking-[0.32em] text-ufc-gold">
            Promoção
          </span>

          <h2 className="mt-2 bg-gradient-to-r from-ufc-red via-ufc-redLight to-ufc-gold bg-clip-text font-display text-4xl uppercase tracking-wide text-transparent">
            Nova Faixa
          </h2>

          <div className="mt-6 flex items-center gap-5">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-wider text-dark-textMuted">
                De
              </span>
              <span className="mt-1 font-display text-base uppercase text-dark-textMuted/70 line-through decoration-dark-textMuted/40">
                {NIVEL_LABEL[payload.de]}
              </span>
            </div>

            <ChevronsUp className="h-8 w-8 animate-pulse text-ufc-red" />

            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-wider text-ufc-gold">
                Agora
              </span>
              <span className="mt-1 font-display text-2xl uppercase text-dark-text">
                {NIVEL_LABEL[payload.para]}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-1">
            <span className="text-xl font-display text-ufc-gold">
              +{payload.xp_delta.toLocaleString('pt-BR')} XP
            </span>
            <span className="text-[11px] uppercase tracking-wider text-dark-textMuted">
              {fonteLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setPayload(null)}
            className="mt-7 rounded-xl bg-ufc-red px-8 py-2.5 font-display text-sm uppercase tracking-[0.2em] text-white shadow-lg shadow-ufc-red/30 transition hover:bg-ufc-redLight"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
