'use client';

import { useTranslations } from 'next-intl';
import type { EventoAtualLiga, MembroLiga } from '@/types/arena';

interface PicksPressureProps {
  eventoAtual: EventoAtualLiga;
  membros: MembroLiga[];
  mostrarNomesPendentes: boolean;
}

export function PicksPressure({ eventoAtual, membros, mostrarNomesPendentes }: PicksPressureProps) {
  const t = useTranslations('arena');
  const { total_membros, membros_com_picks } = eventoAtual;
  const percent = total_membros > 0 ? Math.round((membros_com_picks / total_membros) * 100) : 0;
  const todosProntos = membros_com_picks === total_membros;
  const isLive = eventoAtual.status === 'ao_vivo';

  const pendentes = membros
    .filter((m) => m.picks_status === 'pending')
    .map((m) => m.display_name || m.username);

  const accent = isLive ? 'text-ufc-red' : todosProntos ? 'text-green-400' : 'text-ufc-gold';
  const barColor = isLive ? 'bg-ufc-red' : todosProntos ? 'bg-green-400' : 'bg-ufc-gold';

  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        {isLive ? (
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ufc-red opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ufc-red" />
          </span>
        ) : null}
        <span className={`font-display text-[10px] uppercase tracking-[0.3em] ${accent}`}>
          {isLive ? t('live_label') : 'Evento ativo'}
        </span>
        <span className="h-px flex-1 bg-dark-border" />
        <span className="font-display text-[10px] uppercase tracking-[0.22em] tabular-nums text-dark-textMuted">
          {membros_com_picks} / {total_membros}
        </span>
      </div>

      <h3 className="font-display text-lg sm:text-xl uppercase tracking-[0.03em] text-dark-text leading-tight">
        {eventoAtual.nome}
      </h3>

      <p className="mt-1.5 font-display text-[11px] uppercase tracking-[0.2em] text-dark-textMuted">
        {todosProntos ? t('all_ready') : `${membros_com_picks}/${total_membros} ${t('made_picks')}`}
      </p>

      <div className="mt-4 h-0.5 w-full bg-dark-border/60 overflow-hidden">
        <div
          className={`h-full ${barColor} transition-[width] duration-700`}
          style={{ width: `${percent}%` }}
        />
      </div>

      {!todosProntos && mostrarNomesPendentes && pendentes.length > 0 && (
        <p className="mt-3 font-display text-[10px] uppercase tracking-[0.16em] text-dark-textMuted">
          <span className="text-dark-text">{t('missing')}</span> {pendentes.join(' · ')}
        </p>
      )}
    </div>
  );
}
