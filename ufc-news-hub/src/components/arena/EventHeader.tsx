'use client';

import { EventoNome, Countdown, type Evento } from '@/components/arena/shared';

interface EventHeaderProps {
  evento: Evento;
  size?: 'sm' | 'lg';
  className?: string;
}

export function EventHeader({ evento, size = 'sm', className = '' }: EventHeaderProps) {
  return (
    <div className={`rounded-xl bg-black/60 backdrop-blur-sm px-5 py-4 space-y-3 ${className}`}>
      <EventoNome nome={evento.nome} size={size} />
      {evento.local && <div className="text-xs text-white/50">{evento.local}</div>}
      {evento.status === 'ao_vivo' ? (
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ufc-red w-fit mx-auto">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="text-xs font-bold text-white uppercase">Ao Vivo</span>
        </div>
      ) : (
        <div className="flex justify-center">
          <Countdown targetDate={evento.data_evento} />
        </div>
      )}
    </div>
  );
}
