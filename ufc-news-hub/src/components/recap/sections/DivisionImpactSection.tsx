import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { RecapDivisionImpact } from '@/types/recap';

const impactDot: Record<string, string> = {
  high: 'bg-ufc-red',
  medium: 'bg-ufc-gold',
  low: 'bg-neutral-500',
};

export function DivisionImpactSection({ data }: { data: RecapDivisionImpact[] }) {
  return (
    <section className="space-y-4">
      {data.map((div) => (
        <div
          key={div.division}
          className="rounded-2xl bg-[#111111] border border-[#1a1a1a] p-5 md:p-6 shadow-[4px_4px_10px_rgba(0,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.025)]"
        >
          {/* Division header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-display text-lg uppercase text-white md:text-xl">{div.division}</p>
              <p className="text-[10px] text-neutral-600">{div.fights_on_card} fights on card</p>
            </div>
          </div>

          {/* Title picture impact */}
          <div className="rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] p-4 mb-4">
            <p className="text-[9px] font-bold uppercase tracking-wider text-ufc-red/70 mb-1">Title Picture Impact</p>
            <p className="text-xs leading-relaxed text-neutral-300">{div.title_picture_impact}</p>
          </div>

          {/* Movers */}
          <div className="space-y-2">
            {div.movers.map((mover) => (
              <div key={mover.fighter} className="flex items-center gap-3">
                <div className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  mover.result === 'W' ? 'bg-emerald-500/10' : 'bg-red-500/10'
                }`}>
                  {mover.result === 'W'
                    ? <TrendingUp className="h-3 w-3 text-emerald-400" />
                    : <TrendingDown className="h-3 w-3 text-red-400" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-white font-medium truncate">{mover.fighter}</p>
                    <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${impactDot[mover.impact_level]}`} />
                  </div>
                  <p className="text-[11px] text-neutral-500">{mover.one_liner}</p>
                </div>
                <span className={`text-[9px] font-bold uppercase ${
                  mover.result === 'W' ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {mover.result === 'W' ? 'WIN' : 'LOSS'}
                </span>
              </div>
            ))}
          </div>

          {/* Division narrative */}
          <p className="mt-4 text-xs leading-relaxed text-neutral-400 border-t border-[#1a1a1a] pt-3">
            {div.narrative}
          </p>
        </div>
      ))}
    </section>
  );
}
