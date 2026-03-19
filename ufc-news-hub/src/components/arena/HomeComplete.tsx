'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Trophy, Share2, Pencil } from 'lucide-react';
import { useArenaAuth } from '@/hooks/useArenaAuth';
import { LiveRanking } from '@/components/arena/LiveRanking';
import { MinhasLigas } from '@/components/arena/MinhasLigas';
import { EventoNome, Countdown, OctagonTexture, type Evento } from '@/components/arena/shared';

interface HomeCompleteProps {
  evento: Evento | null;
  picks: Record<string, string>;
}

export function HomeComplete({ evento, picks }: HomeCompleteProps) {
  const { usuario } = useArenaAuth();
  const [copied, setCopied] = useState(false);
  const totalPicks = Object.keys(picks).length;
  // +100 acerto + 50 metodo + 50 round = 200 max per fight
  const pontos = totalPicks * 200;

  const handleCopyLink = () => {
    const url = `${window.location.origin}/arena`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  return (
    <OctagonTexture posterUrl={evento?.poster_url} className="min-h-screen">
      <div className="container mx-auto px-4 pt-6 pb-8">
        <div className="max-w-lg mx-auto space-y-5">

          {evento ? (
            <div className="rounded-xl bg-black/60 backdrop-blur-sm px-5 py-4 space-y-3">
              <EventoNome nome={evento.nome} size="sm" />
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
          ) : (
            <div className="text-center pt-8">
              <h2 className="font-display text-2xl text-white uppercase">Nenhum evento agendado</h2>
            </div>
          )}

          <div className="rounded-xl border border-ufc-gold/20 bg-ufc-gold/5 p-6 text-center space-y-3">
            <Trophy className="w-10 h-10 text-ufc-gold mx-auto" />
            <h2 className="font-display text-2xl uppercase text-white">Card Completo!</h2>
            <p className="text-sm text-white/50">
              {totalPicks}/{totalPicks} picks · {pontos.toLocaleString()} pts possiveis
            </p>
            {evento && (
              <Link
                href={`/arena/evento/${evento.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-white/60 hover:text-white hover:border-white/25 rounded-xl transition-colors text-sm"
              >
                <Pencil className="w-3.5 h-3.5" />
                Ver/Editar Previsoes
              </Link>
            )}
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-white/50" />
              <span className="text-sm font-medium text-white">Desafie seus amigos!</span>
            </div>
            <p className="text-xs text-white/40">Crie uma liga e veja quem acerta mais</p>
            <div className="flex gap-3">
              <Link
                href="/arena/ligas/criar"
                className="flex-1 py-2.5 bg-ufc-red hover:bg-ufc-redLight text-white font-display uppercase text-xs tracking-wide rounded-xl transition-all text-center"
              >
                Criar Liga
              </Link>
              <button
                onClick={handleCopyLink}
                className="flex-1 py-2.5 border border-white/15 text-white/60 hover:text-white hover:border-white/25 font-display uppercase text-xs tracking-wide rounded-xl transition-colors"
              >
                {copied ? 'Copiado!' : 'Copiar Link'}
              </button>
            </div>
          </div>

          <LiveRanking limit={3} highlightUserId={usuario?.id} />

          <MinhasLigas />

        </div>
      </div>
    </OctagonTexture>
  );
}
