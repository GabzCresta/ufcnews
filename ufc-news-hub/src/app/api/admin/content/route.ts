import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { query } from '@/lib/db';
interface NoticiaRow {
  id: string;
  titulo: string;
  categoria: string;
  fonte_nome: string;
  visualizacoes: number;
  publicado_em: string;
}

interface AnaliseRow {
  id: string;
  slug: string;
  titulo: string;
  evento_nome: string;
  status: string;
  created_at: string;
}

interface LutadorRow {
  id: string;
  nome: string;
  apelido: string | null;
  categoria_peso: string | null;
  vitorias: number;
  derrotas: number;
  empates: number;
  ranking_divisao: number | null;
}

interface StatsRow {
  total_noticias: string;
  total_analises: string;
  total_lutadores: string;
  total_eventos: string;
}

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const tab = request.nextUrl.searchParams.get('tab') || 'noticias';

  try {
    const [statsRows] = await Promise.all([
      query<StatsRow>(
        `SELECT
          (SELECT COUNT(*) FROM noticias WHERE eh_sobre_ufc = true AND imagem_url IS NOT NULL AND imagem_url NOT LIKE '%youtube.com%')::text as total_noticias,
          (SELECT COUNT(*) FROM analises)::text as total_analises,
          (SELECT COUNT(*) FROM lutadores)::text as total_lutadores,
          (SELECT COUNT(*) FROM eventos)::text as total_eventos`
      ),
    ]);

    const stats = {
      total_noticias: parseInt(statsRows[0]?.total_noticias ?? '0'),
      total_analises: parseInt(statsRows[0]?.total_analises ?? '0'),
      total_lutadores: parseInt(statsRows[0]?.total_lutadores ?? '0'),
      total_eventos: parseInt(statsRows[0]?.total_eventos ?? '0'),
    };

    let items: unknown[] = [];

    if (tab === 'noticias') {
      items = await query<NoticiaRow>(
        `SELECT id, titulo, categoria, fonte_nome, visualizacoes, publicado_em
         FROM noticias
         WHERE eh_sobre_ufc = true
           AND imagem_url IS NOT NULL
           AND imagem_url NOT LIKE '%youtube.com%'
         ORDER BY publicado_em DESC LIMIT 50`
      );
    } else if (tab === 'analises') {
      items = await query<AnaliseRow>(
        `SELECT id, slug, titulo, evento_nome, status, created_at
         FROM analises ORDER BY created_at DESC LIMIT 50`
      );
    } else if (tab === 'lutadores') {
      const search = request.nextUrl.searchParams.get('search') || '';
      const page = parseInt(request.nextUrl.searchParams.get('page') || '1');
      const pageSize = 100;
      const offset = (page - 1) * pageSize;

      if (search) {
        items = await query<LutadorRow>(
          `SELECT id, nome, apelido, categoria_peso, vitorias, derrotas, empates, ranking_divisao
           FROM lutadores WHERE nome ILIKE $1 OR apelido ILIKE $1
           ORDER BY ranking_divisao ASC NULLS LAST, nome ASC
           LIMIT $2 OFFSET $3`,
          [`%${search}%`, pageSize, offset]
        );
      } else {
        items = await query<LutadorRow>(
          `SELECT id, nome, apelido, categoria_peso, vitorias, derrotas, empates, ranking_divisao
           FROM lutadores
           ORDER BY ranking_divisao ASC NULLS LAST, nome ASC
           LIMIT $1 OFFSET $2`,
          [pageSize, offset]
        );
      }
    }

    return NextResponse.json({ stats, items });
  } catch (error) {
    console.error('[API /admin/content] Error:', error);
    return NextResponse.json({ error: 'Erro ao buscar conteudo' }, { status: 500 });
  }
}
