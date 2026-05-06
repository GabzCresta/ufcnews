import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { Noticia, NoticiasPaginadas, CategoriaNoticia } from '@/types';
import { ITEMS_PER_PAGE } from '@/lib/constants';

const LOCALE_TITULO = {
  pt: 'titulo',
  en: 'COALESCE(titulo_en, titulo)',
  es: 'COALESCE(titulo_es, titulo)',
  fr: 'COALESCE(titulo_fr, titulo)',
} as const;

const LOCALE_SUBTITULO = {
  pt: 'subtitulo',
  en: 'COALESCE(subtitulo_en, subtitulo)',
  es: 'COALESCE(subtitulo_es, subtitulo)',
  fr: 'COALESCE(subtitulo_fr, subtitulo)',
} as const;

type SupportedLocale = keyof typeof LOCALE_TITULO;

function isValidLocale(l: string): l is SupportedLocale {
  return l in LOCALE_TITULO;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const categoria = searchParams.get('categoria') as CategoriaNoticia | null;
    const localeParam = searchParams.get('locale') || 'pt';
    const locale: SupportedLocale = isValidLocale(localeParam) ? localeParam : 'pt';
    const pagina = parseInt(searchParams.get('pagina') || '1', 10);
    const porPagina = parseInt(
      searchParams.get('porPagina') || String(ITEMS_PER_PAGE),
      10
    );
    const offset = (pagina - 1) * porPagina;

    const tituloCol = LOCALE_TITULO[locale];
    const subtituloCol = LOCALE_SUBTITULO[locale];

    let whereClause = 'WHERE eh_sobre_ufc = true';
    const baseParams: (string | number)[] = [];
    let paramIndex = 1;

    if (categoria && ['lutadores', 'lutas', 'backstage'].includes(categoria)) {
      whereClause += ` AND categoria = $${paramIndex}`;
      baseParams.push(categoria);
      paramIndex++;
    }

    const [noticias, countResult] = await Promise.all([
      query<Noticia>(
        `SELECT id, ${tituloCol} AS titulo, ${subtituloCol} AS subtitulo,
                imagem_url, fonte_url, fonte_nome,
                categoria, publicado_em, created_at, visualizacoes
         FROM noticias ${whereClause}
         ORDER BY publicado_em DESC
         LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`,
        [...baseParams, porPagina, offset]
      ),
      query<{ total: string }>(
        `SELECT COUNT(*) as total FROM noticias ${whereClause}`,
        baseParams
      ),
    ]);

    const total = parseInt(countResult[0]?.total || '0', 10);

    const response: NoticiasPaginadas = {
      noticias,
      total,
      pagina,
      porPagina,
      totalPaginas: Math.ceil(total / porPagina),
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
      },
    });
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar notícias' },
      { status: 500 }
    );
  }
}
