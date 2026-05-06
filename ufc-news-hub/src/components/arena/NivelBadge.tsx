'use client';

import {
  Dumbbell,
  Swords,
  Target,
  Flame,
  Shield,
  Trophy,
  Crown,
  type LucideIcon,
} from 'lucide-react';
import type { NivelUsuario } from '@/types/arena';

export interface NivelMeta {
  label: string;
  icon: LucideIcon;
  tom: { fg: string; bg: string; borda: string };
}

export const NIVEL_META: Record<NivelUsuario, NivelMeta> = {
  iniciante: {
    label: 'Iniciante',
    icon: Dumbbell,
    tom: { fg: '#A3A3A3', bg: 'rgba(163,163,163,0.08)', borda: 'rgba(163,163,163,0.25)' },
  },
  amateur: {
    label: 'Amador',
    icon: Swords,
    tom: { fg: '#CD7F32', bg: 'rgba(205,127,50,0.10)', borda: 'rgba(205,127,50,0.28)' },
  },
  contender: {
    label: 'Contender',
    icon: Target,
    tom: { fg: '#E5E5E5', bg: 'rgba(229,229,229,0.08)', borda: 'rgba(229,229,229,0.22)' },
  },
  challenger: {
    label: 'Desafiante',
    icon: Flame,
    tom: { fg: '#FF1A1A', bg: 'rgba(255,26,26,0.10)', borda: 'rgba(255,26,26,0.30)' },
  },
  elite: {
    label: 'Elite',
    icon: Shield,
    tom: { fg: '#C9B037', bg: 'rgba(201,176,55,0.12)', borda: 'rgba(201,176,55,0.32)' },
  },
  champion: {
    label: 'Campeão',
    icon: Trophy,
    tom: { fg: '#D20A0A', bg: 'rgba(210,10,10,0.12)', borda: 'rgba(210,10,10,0.35)' },
  },
  legend: {
    label: 'Lenda',
    icon: Crown,
    tom: { fg: '#FFD700', bg: 'rgba(255,215,0,0.12)', borda: 'rgba(255,215,0,0.35)' },
  },
};

interface NivelBadgeProps {
  nivel: NivelUsuario;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES = {
  sm: { pad: 'px-2 py-0.5', text: 'text-[10px]', icon: 'w-3 h-3', gap: 'gap-1' },
  md: { pad: 'px-2.5 py-0.5', text: 'text-xs', icon: 'w-3.5 h-3.5', gap: 'gap-1.5' },
  lg: { pad: 'px-3 py-1', text: 'text-sm', icon: 'w-4 h-4', gap: 'gap-2' },
};

export function NivelBadge({ nivel, size = 'md', className }: NivelBadgeProps) {
  const meta = NIVEL_META[nivel];
  const s = SIZES[size];
  const Icon = meta.icon;
  return (
    <span
      className={`inline-flex items-center ${s.gap} ${s.pad} ${s.text} rounded-full font-display uppercase tracking-wider ${className ?? ''}`}
      style={{
        color: meta.tom.fg,
        backgroundColor: meta.tom.bg,
        border: `1px solid ${meta.tom.borda}`,
      }}
    >
      <Icon className={s.icon} strokeWidth={2.2} />
      {meta.label}
    </span>
  );
}
