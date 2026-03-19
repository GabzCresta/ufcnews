'use client';

import { Trophy, Target, Flame } from 'lucide-react';
import { useArenaAuth } from '@/hooks/useArenaAuth';

export function UserStats() {
  const { usuario } = useArenaAuth();
  if (!usuario) return null;

  const accuracy = (usuario.total_previsoes ?? 0) > 0
    ? Math.round(((usuario.previsoes_corretas ?? 0) / (usuario.total_previsoes ?? 1)) * 100)
    : 0;

  return (
    <div className="flex items-center justify-center gap-4 text-sm">
      <div className="flex items-center gap-1.5">
        <Trophy className="w-3.5 h-3.5 text-ufc-gold" />
        <span className="font-bold text-ufc-gold">{(usuario.pontos_totais ?? 0).toLocaleString()}</span>
        <span className="text-white/40 text-xs">pts</span>
      </div>
      <span className="text-white/15">·</span>
      <div className="flex items-center gap-1.5">
        <Target className="w-3.5 h-3.5 text-green-400" />
        <span className="font-bold text-green-400">{accuracy}%</span>
        <span className="text-white/40 text-xs">acc</span>
      </div>
      <span className="text-white/15">·</span>
      <div className="flex items-center gap-1.5">
        <Flame className="w-3.5 h-3.5 text-orange-400" />
        <span className="font-bold text-orange-400">{usuario.streak_atual ?? 0}</span>
        <span className="text-white/40 text-xs">streak</span>
      </div>
    </div>
  );
}
