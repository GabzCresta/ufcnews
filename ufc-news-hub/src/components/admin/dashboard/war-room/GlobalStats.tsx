'use client';

import { Zap, DollarSign, Clock, Hash } from 'lucide-react';
import type { GlobalStats as GlobalStatsType } from '@/lib/war-room/types';

export function GlobalStats({ stats }: { stats: GlobalStatsType | null }) {
  if (!stats) return null;

  const items = [
    { icon: Hash, label: 'Pipelines', value: `${stats.completed_pipelines}/${stats.total_pipelines}`, color: 'text-emerald-400' },
    { icon: Zap, label: 'Tokens', value: stats.total_tokens > 1_000_000 ? `${(stats.total_tokens / 1_000_000).toFixed(1)}M` : `${Math.round(stats.total_tokens / 1000)}k`, color: 'text-blue-400' },
    { icon: DollarSign, label: 'Custo', value: `$${stats.total_cost_usd.toFixed(2)}`, color: 'text-yellow-400' },
    { icon: Clock, label: 'Tempo med.', value: stats.avg_pipeline_duration_ms > 60000 ? `${Math.round(stats.avg_pipeline_duration_ms / 60000)}min` : `${Math.round(stats.avg_pipeline_duration_ms / 1000)}s`, color: 'text-purple-400' },
  ];

  return (
    <div className="space-y-1">
      <p className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold px-2 mb-2">Stats</p>
      <div className="grid grid-cols-2 gap-1.5 px-1">
        {items.map(item => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="neu-inset rounded-lg px-2.5 py-2">
              <div className="flex items-center gap-1.5">
                <Icon className={`w-3 h-3 ${item.color}`} />
                <span className="text-[10px] text-gray-500">{item.label}</span>
              </div>
              <p className={`text-sm font-bold ${item.color} mt-0.5`}>{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
