'use client';

import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  sublabel?: string;
  color?: 'red' | 'gold' | 'green' | 'blue' | 'gray';
}

const COLOR_MAP = {
  red: 'text-ufc-red bg-ufc-red/10',
  gold: 'text-ufc-gold bg-ufc-gold/10',
  green: 'text-emerald-400 bg-emerald-400/10',
  blue: 'text-blue-400 bg-blue-400/10',
  gray: 'text-gray-400 bg-gray-500/10',
};

export function StatCard({ icon: Icon, label, value, sublabel, color = 'red' }: StatCardProps) {
  return (
    <div className="neu-card p-4 flex items-center gap-4">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${COLOR_MAP[color]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <p className="text-2xl font-bold text-white leading-tight">{value}</p>
        <p className="text-xs text-gray-400 truncate">{label}</p>
        {sublabel && <p className="text-[10px] text-gray-500 truncate">{sublabel}</p>}
      </div>
    </div>
  );
}
