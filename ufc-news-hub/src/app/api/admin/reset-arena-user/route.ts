import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { requireAdmin } from '@/lib/admin-sessions';

export async function POST(request: NextRequest) {
  try {
    const unauthorized = requireAdmin(request);
    if (unauthorized) return unauthorized;

    const body = await request.json() as { usuario_id?: string; username?: string };
    const { usuario_id, username } = body;

    if (!usuario_id && !username) {
      return NextResponse.json({ error: 'Informe usuario_id ou username' }, { status: 400 });
    }

    // Find user
    const findField = usuario_id ? 'id' : 'username';
    const findValue = usuario_id ?? username;
    const users = await query<{ id: string; username: string }>(
      `SELECT id, username FROM usuarios_arena WHERE ${findField} = $1`,
      [findValue]
    );

    if (users.length === 0) {
      return NextResponse.json({ error: 'Usuario nao encontrado' }, { status: 404 });
    }

    const userId = users[0].id;
    const user = users[0].username;

    // Delete previsoes_liga first (FK to previsoes)
    await query(
      `DELETE FROM previsoes_liga WHERE previsao_id IN (SELECT id FROM previsoes WHERE usuario_id = $1)`,
      [userId]
    );

    // Delete evento_pontuacao
    await query(
      `DELETE FROM evento_pontuacao WHERE usuario_id = $1`,
      [userId]
    );

    // Delete all predictions
    const deleted = await query<{ count: number }>(
      `WITH deleted AS (DELETE FROM previsoes WHERE usuario_id = $1 RETURNING id) SELECT COUNT(*)::int as count FROM deleted`,
      [userId]
    );

    // Reset user stats
    await query(
      `UPDATE usuarios_arena SET
        pontos_totais = 0,
        xp_total = 0,
        total_previsoes = 0,
        previsoes_corretas = 0,
        previsoes_perfeitas = 0,
        streak_atual = 0,
        melhor_streak = 0,
        streak_main_event = 0,
        melhor_streak_main_event = 0,
        underdogs_acertados = 0,
        kos_acertados = 0,
        subs_acertados = 0,
        decisoes_acertadas = 0,
        nivel = 'iniciante'
      WHERE id = $1`,
      [userId]
    );

    return NextResponse.json({
      success: true,
      usuario: user,
      previsoes_deletadas: deleted[0]?.count ?? 0,
      message: `Usuario ${user} resetado com sucesso`,
    });
  } catch (error) {
    console.error('[API admin/reset-arena-user] Error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
