'use client';

import useSWR from 'swr';
import { Link } from '@/i18n/routing';
import { Trophy, ChevronRight } from 'lucide-react';

interface RankingUser {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  nivel: string;
  pontos_totais: number;
  posicao: number;
}

interface RankingResponse {
  ranking: RankingUser[];
  user_position: RankingUser | null;
  total_participantes: number;
}

interface LiveRankingProps {
  limit?: number;
  highlightUserId?: string;
  showTotal?: boolean;
}

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
});

const MEDALS = ['🥇', '🥈', '🥉'];

export function LiveRanking({ limit = 3, highlightUserId, showTotal = true }: LiveRankingProps) {
  const params = new URLSearchParams({ limit: String(limit) });
  if (highlightUserId) params.set('include_user_id', highlightUserId);

  const { data, isLoading, error } = useSWR<RankingResponse>(
    `/api/arena/analytics/ranking?${params}`,
    fetcher,
    { refreshInterval: 30000, revalidateOnFocus: true, dedupingInterval: 15000 }
  );

  if (error) return null;

  if (isLoading || !data) {
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-5">
        <div className="h-32 rounded-lg bg-white/5 animate-pulse" />
      </div>
    );
  }

  const { ranking, user_position, total_participantes } = data;
  const userInTop = highlightUserId ? ranking.some(r => r.id === highlightUserId) : false;

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-ufc-gold" />
          <span className="text-sm font-display uppercase text-white/70">Ranking</span>
        </div>
        <Link href="/arena/analytics" className="flex items-center gap-1 text-xs text-white/30 hover:text-white/50 transition-colors">
          ver tudo <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-1">
        {ranking.map((user, i) => {
          const isHighlighted = highlightUserId === user.id;
          return (
            <div
              key={user.id}
              className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                isHighlighted ? 'bg-ufc-red/10 border border-ufc-red/20' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm w-6 text-center">{MEDALS[i] ?? `#${user.posicao}`}</span>
                <span className={`text-sm font-medium ${isHighlighted ? 'text-white' : 'text-white/70'}`}>
                  {isHighlighted && '⭐ '}{user.display_name || user.username}
                </span>
              </div>
              <span className={`text-sm tabular-nums ${isHighlighted ? 'text-ufc-gold font-bold' : 'text-white/40'}`}>
                {user.pontos_totais.toLocaleString()} pts
              </span>
            </div>
          );
        })}

        {user_position && !userInTop && (
          <>
            <div className="text-center text-white/15 text-xs py-1">· · ·</div>
            <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-ufc-red/10 border border-ufc-red/20">
              <div className="flex items-center gap-3">
                <span className="text-sm w-6 text-center text-white/50">#{user_position.posicao}</span>
                <span className="text-sm font-medium text-white">
                  ⭐ {user_position.display_name || user_position.username}
                </span>
              </div>
              <span className="text-sm tabular-nums text-ufc-gold font-bold">
                {user_position.pontos_totais.toLocaleString()} pts
              </span>
            </div>
          </>
        )}
      </div>

      {showTotal && total_participantes > 0 && (
        <div className="text-center text-xs text-white/25 pt-1">
          {total_participantes} participantes
        </div>
      )}
    </div>
  );
}
