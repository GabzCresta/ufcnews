import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { query } from '@/lib/db';
import type { PostCardEventoListItem, PostCardStatus } from '@/types/post-card';

interface EventoRow {
  evento_nome: string;
  evento_data: string | null;
  total_analises: string;
  acertos: string;
  avaliadas: string;
  has_post_card: boolean;
  post_card_status: PostCardStatus | null;
  post_card_updated_at: string | null;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[:]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const rows = await query<EventoRow>(
      `SELECT
         a.evento_nome,
         MAX(a.evento_data)::text                                            AS evento_data,
         COUNT(*)::text                                                      AS total_analises,
         COUNT(*) FILTER (WHERE a.prediction_correct = true)::text          AS acertos,
         COUNT(*) FILTER (WHERE a.prediction_correct IS NOT NULL)::text     AS avaliadas,
         (pc.id IS NOT NULL)                                                 AS has_post_card,
         pc.status                                                           AS post_card_status,
         pc.updated_at::text                                                 AS post_card_updated_at
       FROM analises a
       LEFT JOIN post_card_analyses pc ON pc.evento_nome = a.evento_nome
       WHERE a.evento_nome IS NOT NULL AND a.evento_nome != ''
       GROUP BY a.evento_nome, pc.id, pc.status, pc.updated_at
       ORDER BY MAX(a.evento_data) DESC NULLS LAST, MAX(a.created_at) DESC`
    );

    const eventos: PostCardEventoListItem[] = rows.map((row) => {
      const acertos = parseInt(row.acertos, 10);
      const avaliadas = parseInt(row.avaliadas, 10);
      return {
        evento_nome: row.evento_nome,
        evento_slug: slugify(row.evento_nome),
        evento_data: row.evento_data,
        total_analises: parseInt(row.total_analises, 10),
        acertos,
        avaliadas,
        taxa: avaliadas > 0 ? Math.round((acertos / avaliadas) * 100) : 0,
        has_post_card: row.has_post_card,
        post_card_status: row.post_card_status,
        post_card_updated_at: row.post_card_updated_at,
      };
    });

    return NextResponse.json({ eventos });
  } catch (error) {
    console.error('[API /admin/post-card] Error:', error);
    return NextResponse.json({ error: 'Erro ao buscar eventos' }, { status: 500 });
  }
}
