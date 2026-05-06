import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

interface ReelRow {
  id: string;
  titulo: string;
  subtitulo: string | null;
  reel_caption: string | null;
  imagem_url: string;
  fonte_url: string;
  fonte_nome: string;
  categoria: string;
  publicado_em: string;
  likes_count: number;
  user_liked: boolean;
  comments_count: number;
}

const MAX_REELS = 30;

const LOCALE_COLUMNS = {
  pt: { titulo: 'n.titulo', subtitulo: 'n.subtitulo' },
  en: { titulo: 'COALESCE(n.titulo_en, n.titulo)', subtitulo: 'COALESCE(n.subtitulo_en, n.subtitulo)' },
  es: { titulo: 'COALESCE(n.titulo_es, n.titulo)', subtitulo: 'COALESCE(n.subtitulo_es, n.subtitulo)' },
  fr: { titulo: 'COALESCE(n.titulo_fr, n.titulo)', subtitulo: 'COALESCE(n.subtitulo_fr, n.subtitulo)' },
} as const;

type SupportedLocale = keyof typeof LOCALE_COLUMNS;

function isValidLocale(l: string): l is SupportedLocale {
  return l in LOCALE_COLUMNS;
}

export async function GET(request: NextRequest) {
  try {
    const fingerprint = request.headers.get('x-user-fingerprint') || '';
    const localeParam = request.nextUrl.searchParams.get('locale') || 'pt';
    const locale: SupportedLocale = isValidLocale(localeParam) ? localeParam : 'pt';
    const cols = LOCALE_COLUMNS[locale];

    // Flexible time window: start with 72h, expand if not enough content
    const noticias = await query<ReelRow>(
      `WITH reels_recentes AS (
        SELECT
          n.id,
          ${cols.titulo} AS titulo,
          ${cols.subtitulo} AS subtitulo,
          n.reel_caption,
          n.imagem_url,
          n.fonte_url,
          n.fonte_nome,
          n.categoria,
          n.publicado_em,
          COALESCE(l.likes_count, 0)::int AS likes_count,
          CASE WHEN ul.id IS NOT NULL THEN true ELSE false END AS user_liked,
          COALESCE(c.comments_count, 0)::int AS comments_count
        FROM noticias n
        LEFT JOIN (
          SELECT noticia_id, COUNT(*) AS likes_count
          FROM news_likes
          GROUP BY noticia_id
        ) l ON l.noticia_id = n.id
        LEFT JOIN news_likes ul ON ul.noticia_id = n.id AND ul.user_fingerprint = $1
        LEFT JOIN (
          SELECT noticia_id, COUNT(*) AS comments_count
          FROM comentarios
          WHERE status = 'aprovado'
          GROUP BY noticia_id
        ) c ON c.noticia_id = n.id
        WHERE n.eh_sobre_ufc = true
          AND n.imagem_url IS NOT NULL
          AND n.imagem_url NOT LIKE '%youtube.com%'
          AND n.publicado_em > NOW() - INTERVAL '24 hours'
        ORDER BY n.publicado_em DESC
        LIMIT $2
      )
      SELECT * FROM reels_recentes
      ORDER BY publicado_em DESC`,
      [fingerprint, MAX_REELS]
    );

    return NextResponse.json({ noticias }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
    });
  } catch (error) {
    console.error('Erro ao buscar reels:', error);
    return NextResponse.json({ error: 'Erro ao buscar reels' }, { status: 500 });
  }
}
