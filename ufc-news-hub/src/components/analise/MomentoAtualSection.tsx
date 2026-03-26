'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, Activity, AlertTriangle, X, ChevronDown } from 'lucide-react';
import type { MomentoAtualSectionData, MomentoAtualFighter, RecentFight } from '@/types/analise';
import { getLabels, type Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';

function FightRow({ fight }: { fight: RecentFight }) {
  const isWin = fight.result === 'W';
  const isLoss = fight.result === 'L';

  return (
    <div className="py-4 border-b border-white/[0.04] last:border-b-0">
      <div className="flex items-baseline justify-between mb-1.5">
        <div className="flex items-baseline gap-2.5">
          <span className={`font-display text-sm font-bold ${isWin ? 'text-emerald-400' : isLoss ? 'text-red-400' : 'text-white/40'}`}>
            {fight.result}
          </span>
          <span className="text-sm text-white/80">{fight.opponent}</span>
          {fight.opponent_rank && fight.opponent_rank !== 'N/R' && (
            <span className="text-[10px] font-semibold text-white/50 bg-white/[0.05] rounded px-1.5 py-0.5">{fight.opponent_rank}</span>
          )}
        </div>
        <span className="text-[10px] text-white/25 tabular-nums">{fight.date}</span>
      </div>
      <div className="flex items-baseline justify-between">
        <p className="text-[11px] text-white/35 leading-relaxed max-w-[85%]">{fight.note}</p>
        <span className="text-[10px] text-white/40 font-medium whitespace-nowrap">{fight.method}</span>
      </div>
    </div>
  );
}

function FighterTimeline({ fighter }: { fighter: MomentoAtualFighter }) {
  const [showHistory, setShowHistory] = useState(false);
  const isRed = fighter.color === 'red';
  const accentColor = isRed ? 'text-ufc-red' : 'text-blue-400';
  const accentBorder = isRed ? 'border-ufc-red/30' : 'border-blue-400/30';

  const trendBadge = fighter.momentum_trend === 'descending'
    ? 'text-red-400'
    : fighter.momentum_trend === 'ascending'
    ? 'text-emerald-400'
    : 'text-blue-400';

  const TrendIcon = fighter.momentum_trend === 'descending' ? TrendingDown
    : fighter.momentum_trend === 'resilient' ? Activity
    : TrendingUp;

  return (
    <div>
      {/* Header */}
      <div className={`flex items-center justify-between mb-2 pb-3 border-b-2 ${accentBorder}`}>
        <h3 className={`font-display text-lg uppercase tracking-wide ${accentColor}`}>{fighter.nome}</h3>
      </div>

      {/* Fights */}
      <div>
        {fighter.recent_fights.map((fight, i) => (
          <FightRow key={i} fight={fight} />
        ))}
      </div>

      {/* History button */}
      {fighter.full_fight_history && fighter.full_fight_history.length > 0 && (
        <button
          onClick={() => setShowHistory(true)}
          className="mt-3 flex w-full items-center justify-center gap-1.5 py-2.5 text-[10px] uppercase tracking-wider text-white/25 hover:text-white/50 transition-colors"
        >
          <ChevronDown className="h-3 w-3" />
          Historico completo
        </button>
      )}

      {/* Modal */}
      {showHistory && fighter.full_fight_history && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowHistory(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg max-h-[80vh] rounded-2xl border border-white/[0.08] bg-[#111] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.06] bg-[#111] px-6 py-4">
              <h3 className={`font-display text-base uppercase ${accentColor}`}>{fighter.nome}</h3>
              <button onClick={() => setShowHistory(false)} className="text-white/30 hover:text-white/60 transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-2" style={{ maxHeight: 'calc(80vh - 60px)' }}>
              {fighter.full_fight_history.map((fight, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/[0.04] last:border-b-0">
                  <div className="flex items-center gap-2.5">
                    <span className={`font-display text-xs font-bold ${fight.result === 'W' ? 'text-emerald-400' : fight.result === 'L' ? 'text-red-400' : 'text-white/40'}`}>
                      {fight.result}
                    </span>
                    <span className="text-xs text-white/70">{fight.opponent}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-white/35">{fight.method}</span>
                    <span className="text-[10px] text-white/20">{fight.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Layoff Warning */}
      {fighter.layoff_warning && (
        <div className="mt-4 flex items-center gap-2.5 py-3 border-t border-amber-500/20">
          <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0 text-amber-400" />
          <span className="text-xs text-amber-400">{fighter.layoff_warning}</span>
        </div>
      )}

      {/* Momentum */}
      <div className="mt-4 pt-4 border-t border-white/[0.04]">
        <div className="flex items-center gap-2 mb-2">
          <TrendIcon className={`h-3.5 w-3.5 ${trendBadge}`} />
          <span className={`text-xs font-bold uppercase tracking-wider ${trendBadge}`}>{fighter.momentum_label}</span>
        </div>
        <p className="text-[11px] text-white/30 leading-relaxed">{fighter.momentum_note}</p>
      </div>
    </div>
  );
}

export function MomentoAtualSection({ data, lang = 'pt' }: { data: MomentoAtualSectionData; lang?: Lang }) {
  const t = getLabels(lang);
  return (
    <section>
      <SectionHeader number="02" title={t.momento_title} accent={t.momento_accent} />
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <FighterTimeline fighter={data.fighter1} />
        <FighterTimeline fighter={data.fighter2} />
      </div>
    </section>
  );
}
