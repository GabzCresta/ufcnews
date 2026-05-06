'use client';

import { Link } from '@/i18n/routing';
import FighterImage from '@/components/ui/FighterImage';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export interface EventFightCard {
  slug: string;
  fighter1: { nome: string; record: string; foto_url?: string };
  fighter2: { nome: string; record: string; foto_url?: string };
  categoria_peso: string;
  num_rounds: number;
  predicted_winner: string;
  predicted_method: string;
  confidence_label: string;
  is_main_event?: boolean;
}

const sizeStyles = {
  card: {
    name: 'text-lg sm:text-xl md:text-2xl',
    record: 'text-[10px] md:text-xs',
    avatar: 'w-11 h-11 md:w-12 md:h-12',
    avatarPx: 48,
    container: 'p-4 md:p-5',
    vs: 'text-xs md:text-sm',
  },
  prelim: {
    name: 'text-sm sm:text-base md:text-lg',
    record: 'text-[10px]',
    avatar: 'w-9 h-9 md:w-10 md:h-10',
    avatarPx: 40,
    container: 'p-3 md:p-4',
    vs: 'text-[10px] md:text-xs',
  },
} as const;

export function EventAnalysisCard({
  fight,
  size = 'card',
  showMeta = true,
  showPrediction = true,
}: {
  fight: EventFightCard;
  size?: 'card' | 'prelim';
  showMeta?: boolean;
  showPrediction?: boolean;
}) {
  const styles = sizeStyles[size];
  const t = useTranslations('analise');
  const isWinnerFighter1 = fight.predicted_winner === fight.fighter1.nome;

  return (
    <Link
      href={`/analise/${fight.slug}`}
      className={`group relative block overflow-hidden rounded-xl ${styles.container} border border-white/[0.06] bg-zinc-900/40 backdrop-blur-sm transition-all duration-200 hover:border-ufc-red/40 hover:bg-zinc-900/60`}
    >
      {/* Accent left bar — subtle on prelim, more present on card */}
      <div className={`absolute inset-y-0 left-0 w-[2px] ${size === 'card' ? 'bg-ufc-red/30 group-hover:bg-ufc-red/70' : 'bg-white/[0.06] group-hover:bg-ufc-red/40'} transition-colors`} />

      {/* Fighters row */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Fighter 1 */}
        <div className="min-w-0 flex-1 flex items-center justify-end gap-2 sm:gap-3">
          {fight.fighter1.foto_url && (
            <div className={`${styles.avatar} rounded-full overflow-hidden bg-zinc-800 ring-1 ring-white/[0.06] shrink-0`}>
              <FighterImage
                src={fight.fighter1.foto_url}
                alt={fight.fighter1.nome}
                width={styles.avatarPx}
                height={styles.avatarPx}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}
          <div className="min-w-0 text-right">
            <p className={`font-display uppercase leading-[0.95] tracking-wide truncate ${styles.name} ${
              isWinnerFighter1 ? 'text-white' : 'text-neutral-400'
            }`}>
              {fight.fighter1.nome}
            </p>
            <p className={`mt-1 text-neutral-500 ${styles.record}`}>{fight.fighter1.record}</p>
          </div>
        </div>

        {/* VS — clean text */}
        <span className={`shrink-0 font-display ${styles.vs} text-white/25 tracking-wider`}>VS</span>

        {/* Fighter 2 */}
        <div className="min-w-0 flex-1 flex items-center justify-start gap-2 sm:gap-3">
          <div className="min-w-0 text-left">
            <p className={`font-display uppercase leading-[0.95] tracking-wide truncate ${styles.name} ${
              !isWinnerFighter1 ? 'text-white' : 'text-neutral-400'
            }`}>
              {fight.fighter2.nome}
            </p>
            <p className={`mt-1 text-neutral-500 ${styles.record}`}>{fight.fighter2.record}</p>
          </div>
          {fight.fighter2.foto_url && (
            <div className={`${styles.avatar} rounded-full overflow-hidden bg-zinc-800 ring-1 ring-white/[0.06] shrink-0`}>
              <FighterImage
                src={fight.fighter2.foto_url}
                alt={fight.fighter2.nome}
                width={styles.avatarPx}
                height={styles.avatarPx}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}
        </div>
      </div>

      {/* Meta + prediction footer */}
      {(showMeta || showPrediction) && (
        <div className="mt-3 md:mt-4 pt-3 border-t border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-3">
          {showMeta && (
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              {fight.categoria_peso} · {fight.num_rounds}R
            </span>
          )}
          {showPrediction && (
            <span className="text-[11px] md:text-xs text-neutral-300 inline-flex items-center gap-1">
              <ArrowRight className="h-3 w-3 text-ufc-red group-hover:translate-x-0.5 transition-transform" />
              <span className="text-ufc-red font-semibold">{fight.predicted_winner}</span>
              <span className="text-neutral-500">{t('por')} {fight.predicted_method}</span>
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
