import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { query } from '@/lib/db';
import type { ArenaUser } from '@/types/admin';

interface StatsRow {
  total_usuarios: string;
  total_previsoes: string;
  media_acerto: string;
  usuarios_ativos_7d: string;
}

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const [users, statsRows, demografiaRows] = await Promise.all([
      query<ArenaUser & { pais_inferido: string | null; idioma_inferido: string | null; faixa_etaria: string | null }>(
        `SELECT id, username, display_name, email, nivel, pontos_totais,
                total_previsoes, previsoes_corretas, created_at,
                pais_inferido, idioma_inferido, faixa_etaria
         FROM usuarios_arena
         WHERE fonte_cadastro != 'teste' OR fonte_cadastro IS NULL
         ORDER BY pontos_totais DESC`
      ),
      query<StatsRow>(
        `SELECT
          (SELECT COUNT(*) FROM usuarios_arena WHERE fonte_cadastro != 'teste' OR fonte_cadastro IS NULL)::text as total_usuarios,
          (SELECT COUNT(*) FROM previsoes)::text as total_previsoes,
          COALESCE(
            (SELECT ROUND(AVG(CASE WHEN total_previsoes > 0
              THEN (previsoes_corretas::numeric / total_previsoes * 100)
              ELSE 0 END))
            FROM usuarios_arena WHERE total_previsoes > 0),
            0
          )::text as media_acerto,
          (SELECT COUNT(*) FROM usuarios_arena
           WHERE ultimo_acesso > NOW() - INTERVAL '7 days' AND (fonte_cadastro != 'teste' OR fonte_cadastro IS NULL))::text as usuarios_ativos_7d`
      ),
      // Demografia inferida
      query<{ campo: string; valor: string; total: string }>(`
        SELECT 'pais' as campo, COALESCE(pais_inferido, 'Desconhecido') as valor, COUNT(*)::text as total
        FROM usuarios_arena WHERE fonte_cadastro != 'teste' OR fonte_cadastro IS NULL
        GROUP BY pais_inferido
        UNION ALL
        SELECT 'idioma', COALESCE(idioma_inferido, 'Desconhecido'), COUNT(*)::text
        FROM usuarios_arena WHERE fonte_cadastro != 'teste' OR fonte_cadastro IS NULL
        GROUP BY idioma_inferido
        UNION ALL
        SELECT 'faixa_etaria', COALESCE(faixa_etaria, 'Desconhecido'), COUNT(*)::text
        FROM usuarios_arena WHERE fonte_cadastro != 'teste' OR fonte_cadastro IS NULL
        GROUP BY faixa_etaria
        ORDER BY campo, total DESC
      `),
    ]);

    const statsRow = statsRows[0];

    // Organizar demografia
    const demografia: Record<string, Record<string, number>> = {};
    for (const row of demografiaRows) {
      if (!demografia[row.campo]) demografia[row.campo] = {};
      demografia[row.campo][row.valor] = parseInt(row.total);
    }

    return NextResponse.json({
      users,
      stats: {
        total_usuarios: parseInt(statsRow?.total_usuarios ?? '0'),
        total_previsoes: parseInt(statsRow?.total_previsoes ?? '0'),
        media_acerto: parseInt(statsRow?.media_acerto ?? '0'),
        usuarios_ativos_7d: parseInt(statsRow?.usuarios_ativos_7d ?? '0'),
      },
      demografia,
    });
  } catch (error) {
    console.error('[API /admin/arena/overview] Error:', error);
    return NextResponse.json({ error: 'Erro ao buscar dados da arena' }, { status: 500 });
  }
}
