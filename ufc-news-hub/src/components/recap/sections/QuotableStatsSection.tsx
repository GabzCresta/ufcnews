'use client';

import { useState } from 'react';
import {
  Copy, Check, TrendingUp, Flame, Target, Zap, Award, Clock,
} from 'lucide-react';
import type { RecapQuotableStat } from '@/types/recap';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-lg hover:bg-[#262626]/50 text-neutral-500 hover:text-white transition-colors"
      aria-label="Copy"
    >
      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
    </button>
  );
}

const categoryConfig: Record<RecapQuotableStat['category'], { color: string; bg: string; border: string }> = {
  breakout: { color: 'text-ufc-red', bg: 'bg-ufc-red/10', border: 'border-ufc-red/20' },
  streak: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  finish: { color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  model: { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  historical: { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  bonus: { color: 'text-ufc-gold', bg: 'bg-ufc-gold/10', border: 'border-ufc-gold/20' },
};

const iconMap: Record<string, React.ElementType> = {
  trending: TrendingUp, flame: Flame, target: Target, zap: Zap, award: Award, clock: Clock,
};

export function QuotableStatsSection({ data }: { data: RecapQuotableStat[] }) {
  const categories = ['all', ...new Set(data.map((s) => s.category))] as const;
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? data : data.filter((s) => s.category === filter);

  return (
    <section>
      {/* Filter chips */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors ${
              filter === cat
                ? 'bg-ufc-red/20 text-ufc-red border border-ufc-red/30'
                : 'bg-[#111111] text-neutral-500 border border-[#1a1a1a] hover:text-neutral-300'
            }`}
          >
            {cat === 'all' ? 'All' : cat}
          </button>
        ))}
      </div>

      {/* Stat cards - horizontal scroll */}
      <div className="flex gap-3 overflow-x-auto pb-4 snap-x">
        {filtered.map((stat, i) => {
          const cfg = categoryConfig[stat.category];
          const Icon = iconMap[stat.icon] || Zap;
          return (
            <div
              key={i}
              className={`min-w-[260px] max-w-[300px] flex-shrink-0 snap-start rounded-xl ${cfg.bg} border ${cfg.border} p-4`}
            >
              <div className="flex items-start justify-between">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${cfg.bg}`}>
                  <Icon className={`h-4 w-4 ${cfg.color}`} />
                </div>
                <CopyButton text={stat.shareable_text} />
              </div>
              {stat.fighter && (
                <p className={`mt-2 text-[10px] font-bold uppercase tracking-wider ${cfg.color}`}>
                  {stat.fighter}
                </p>
              )}
              <p className="mt-1 font-display text-xl uppercase text-white">{stat.stat}</p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">{stat.context}</p>
              <div className="mt-3 rounded-lg bg-black/20 px-3 py-2">
                <p className="text-[10px] text-neutral-500 italic">{stat.shareable_text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
