import { Star, Swords, Zap, AlertTriangle, Brain, Clock, Trophy } from 'lucide-react';
import type { RecapReplayFight } from '@/types/recap';

const categoryConfig: Record<RecapReplayFight['category'], { label: string; color: string; Icon: React.ElementType }> = {
  war: { label: 'WAR', color: 'text-ufc-red bg-ufc-red/10 border-ufc-red/20', Icon: Swords },
  masterclass: { label: 'MASTERCLASS', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', Icon: Trophy },
  upset: { label: 'UPSET', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20', Icon: AlertTriangle },
  finish: { label: 'FINISH', color: 'text-orange-400 bg-orange-500/10 border-orange-500/20', Icon: Zap },
  technical: { label: 'TECHNICAL', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20', Icon: Brain },
  boring: { label: 'SKIP', color: 'text-neutral-500 bg-neutral-500/10 border-neutral-500/20', Icon: Clock },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`h-3.5 w-3.5 ${n <= rating ? 'fill-ufc-gold text-ufc-gold' : 'text-neutral-700'}`}
        />
      ))}
    </div>
  );
}

export function ReplayGuideSection({ data }: { data: RecapReplayFight[] }) {
  const sorted = [...data].sort((a, b) => b.rewatch_rating - a.rewatch_rating);

  return (
    <section className="space-y-3">
      {sorted.map((fight) => {
        const cfg = categoryConfig[fight.category];
        const CatIcon = cfg.Icon;
        return (
          <div
            key={fight.slug}
            className={`rounded-xl bg-[#111111] border border-[#1a1a1a] p-4 transition-all duration-200 hover:border-ufc-red/15 ${
              fight.rewatch_rating >= 4 ? 'ring-1 ring-ufc-gold/15' : ''
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-display text-sm uppercase text-white md:text-base">
                    {fight.fighter1} vs {fight.fighter2}
                  </p>
                  <span className={`rounded-full border px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider ${cfg.color}`}>
                    <CatIcon className="mr-1 inline h-2.5 w-2.5" />
                    {cfg.label}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">{fight.why_watch}</p>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <StarRating rating={fight.rewatch_rating} />
                <span className="text-[9px] text-neutral-600">{fight.rewatch_label}</span>
              </div>
            </div>

            {/* Key moments */}
            {fight.key_moments.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {fight.key_moments.map((m, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-[#1a1a1a] px-2.5 py-1 text-[10px] text-neutral-300 border border-[#262626]"
                  >
                    <Clock className="mr-1 inline h-2.5 w-2.5 text-neutral-500" />
                    {m.timestamp} - {m.description}
                  </span>
                ))}
              </div>
            )}

            {fight.skip_to && (
              <p className="mt-2 text-[10px] text-ufc-gold">
                Skip to: {fight.skip_to}
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
}
