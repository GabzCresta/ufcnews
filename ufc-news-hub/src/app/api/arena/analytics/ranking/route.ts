import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';

interface RankingRow {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  nivel: string;
  pontos_totais: number;
  previsoes_corretas: number;
  total_previsoes: number;
  taxa_acerto: number;
  posicao: number;
}

interface TotalRow {
  total: string;
}

const RANKING_SQL = `
  SELECT u.id, u.username, u.display_name, u.avatar_url, u.nivel,
         u.pontos_totais, u.previsoes_corretas, u.total_previsoes,
         CASE WHEN u.total_previsoes > 0
           THEN ROUND(u.previsoes_corretas::numeric / u.total_previsoes * 100, 1)
           ELSE 0 END AS taxa_acerto,
         ROW_NUMBER() OVER (ORDER BY u.pontos_totais DESC)::int as posicao
  FROM usuarios_arena u
  WHERE u.total_previsoes > 0
  ORDER BY u.pontos_totais DESC
  LIMIT $1
`;

const USER_POSITION_SQL = `
  SELECT posicao, id, username, display_name, avatar_url, nivel,
         pontos_totais, previsoes_corretas, total_previsoes, taxa_acerto
  FROM (
    SELECT u.id, u.username, u.display_name, u.avatar_url, u.nivel,
           u.pontos_totais, u.previsoes_corretas, u.total_previsoes,
           CASE WHEN u.total_previsoes > 0
             THEN ROUND(u.previsoes_corretas::numeric / u.total_previsoes * 100, 1)
             ELSE 0 END AS taxa_acerto,
           ROW_NUMBER() OVER (ORDER BY u.pontos_totais DESC)::int as posicao
    FROM usuarios_arena u
    WHERE u.total_previsoes > 0
  ) ranked
  WHERE id = $1
`;

const TOTAL_SQL = `
  SELECT COUNT(*)::text as total
  FROM usuarios_arena
  WHERE total_previsoes > 0
`;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const limitParam = searchParams.get('limit');
    const includeUserId = searchParams.get('include_user_id');

    // Determine if new params were provided (for backward compatibility)
    const isNewFormat = limitParam !== null || includeUserId !== null;

    const rawLimit = limitParam !== null ? parseInt(limitParam, 10) : 50;
    const limit = isNaN(rawLimit) ? 50 : Math.min(Math.max(rawLimit, 1), 100);

    const ranking = await query<RankingRow>(RANKING_SQL, [limit]);

    // Legacy format: flat array
    if (!isNewFormat) {
      return NextResponse.json(ranking, {
        headers: { 'Cache-Control': 'public, s-maxage=120' },
      });
    }

    // New format: enriched response object
    const totalRow = await queryOne<TotalRow>(TOTAL_SQL);
    const total_participantes = totalRow ? parseInt(totalRow.total, 10) : 0;

    let user_position: RankingRow | null = null;

    if (includeUserId) {
      const isInTopN = ranking.some((r) => r.id === includeUserId);
      if (!isInTopN) {
        user_position = await queryOne<RankingRow>(USER_POSITION_SQL, [includeUserId]);
      }
    }

    return NextResponse.json(
      { ranking, user_position, total_participantes },
      { headers: { 'Cache-Control': 'public, s-maxage=120' } }
    );
  } catch (error) {
    console.error('[API analytics/ranking] Error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
