import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';
import { getUsuarioAtual } from '@/lib/arena/auth';

// ═══════════════════════════════════════════════════════════════
// GET /api/arena/live/reactions?luta_id=X — Counts + recent reactions
// Polled every 2s by client for real-time sync (simple HTTP polling; richer real-time goes via Socket.IO on a separate process)
// ═══════════════════════════════════════════════════════════════

interface RecentReaction {
  id: string;
  lutador_id: string;
  username: string;
  created_at: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lutaId = searchParams.get('luta_id');

    if (!lutaId) {
      return NextResponse.json({ error: 'luta_id obrigatorio' }, { status: 400 });
    }

    // Parallel: counts + recent reactions (last 3s for floating animations)
    const [countRows, recentRows] = await Promise.all([
      query<{ lutador_id: string; count: number }>(
        `SELECT lutador_id, COUNT(*)::int AS count
         FROM reacoes_luta
         WHERE luta_id = $1
         GROUP BY lutador_id`,
        [lutaId]
      ),
      query<RecentReaction>(
        `SELECT r.id, r.lutador_id, COALESCE(u.display_name, u.username) AS username, r.created_at
         FROM reacoes_luta r
         JOIN usuarios_arena u ON u.id = r.usuario_id
         WHERE r.luta_id = $1 AND r.created_at > NOW() - INTERVAL '3 seconds'
         ORDER BY r.created_at DESC
         LIMIT 20`,
        [lutaId]
      ),
    ]);

    const counts: Record<string, number> = {};
    for (const row of countRows) {
      counts[row.lutador_id] = row.count;
    }

    return NextResponse.json(
      { counts, recent: recentRows },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error) {
    console.error('[API /arena/live/reactions GET] Error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}

// ═══════════════════════════════════════════════════════════════
// POST /api/arena/live/reactions — Insert reaction + PG NOTIFY
// ═══════════════════════════════════════════════════════════════

export async function POST(request: NextRequest) {
  try {
    const usuario = await getUsuarioAtual();
    if (!usuario) {
      return NextResponse.json({ error: 'Nao autenticado' }, { status: 401 });
    }

    const body = await request.json() as { luta_id?: string; lutador_id?: string };
    const { luta_id, lutador_id } = body;

    if (!luta_id || !lutador_id) {
      return NextResponse.json({ error: 'luta_id e lutador_id obrigatorios' }, { status: 400 });
    }

    // Validar que a luta existe e aceita reacoes
    const luta = await queryOne<{ status: string; updated_at: string }>(
      `SELECT status::text, COALESCE(updated_at, created_at) AS updated_at FROM lutas WHERE id = $1`,
      [luta_id]
    );

    if (!luta) {
      return NextResponse.json({ error: 'Luta nao encontrada' }, { status: 404 });
    }

    // Permitir reacoes em lutas ao_vivo, agendadas, ou finalizadas ha menos de 5 min
    const isFinalizadaRecente = luta.status === 'finalizada' &&
      (Date.now() - new Date(luta.updated_at).getTime()) < 5 * 60 * 1000;

    if (luta.status !== 'ao_vivo' && luta.status !== 'agendada' && !isFinalizadaRecente) {
      return NextResponse.json({ error: 'Luta nao aceita reacoes' }, { status: 400 });
    }

    // Cooldown 500ms por usuario
    const lastReaction = await queryOne<{ created_at: string }>(
      `SELECT created_at FROM reacoes_luta
       WHERE usuario_id = $1 ORDER BY created_at DESC LIMIT 1`,
      [usuario.id]
    );

    if (lastReaction) {
      const diff = Date.now() - new Date(lastReaction.created_at).getTime();
      if (diff < 500) {
        return NextResponse.json({ error: 'Aguarde entre reacoes' }, { status: 429 });
      }
    }

    // INSERT + NOTIFY
    await query(
      `INSERT INTO reacoes_luta (luta_id, lutador_id, usuario_id)
       VALUES ($1, $2, $3)`,
      [luta_id, lutador_id, usuario.id]
    );

    const payload = JSON.stringify({
      luta_id,
      lutador_id,
      username: usuario.display_name || usuario.username,
    });
    await query(`SELECT pg_notify('reacoes_channel', $1)`, [payload]);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error('[API /arena/live/reactions POST] Error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
