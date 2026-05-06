import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';
import { Noticia, Lutador, NoticiaComLutadores } from '@/types';

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

const LOCALE_CONTEUDO = {
  pt: 'conteudo_completo',
  en: 'COALESCE(conteudo_en, conteudo_completo)',
  es: 'COALESCE(conteudo_es, conteudo_completo)',
  fr: 'COALESCE(conteudo_fr, conteudo_completo)',
} as const;

type SupportedLocale = keyof typeof LOCALE_TITULO;

function isValidLocale(l: string): l is SupportedLocale {
  return l in LOCALE_TITULO;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const localeParam = request.nextUrl.searchParams.get('locale') || 'pt';
    const locale: SupportedLocale = isValidLocale(localeParam) ? localeParam : 'pt';

    const tituloCol = LOCALE_TITULO[locale];
    const subtituloCol = LOCALE_SUBTITULO[locale];
    const conteudoCol = LOCALE_CONTEUDO[locale];

    const [noticia, lutadores] = await Promise.all([
      queryOne<Noticia>(
        `SELECT id, ${tituloCol} AS titulo, ${subtituloCol} AS subtitulo,
                ${conteudoCol} AS conteudo_completo, imagem_url,
                fonte_url, fonte_nome, categoria, publicado_em, created_at
         FROM noticias WHERE id = $1`,
        [id]
      ),
      query<Lutador>(
        `SELECT l.id, l.nome, l.apelido, l.categoria_peso, l.imagem_url, l.url_perfil
         FROM lutadores l
         JOIN noticia_entidades ne ON l.id = ne.lutador_id
         WHERE ne.noticia_id = $1
         ORDER BY l.nome`,
        [id]
      ),
    ]);

    if (!noticia) {
      return NextResponse.json(
        { error: 'Notícia não encontrada' },
        { status: 404 }
      );
    }

    const response: NoticiaComLutadores = {
      ...noticia,
      lutadores,
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
      },
    });
  } catch (error) {
    console.error('Erro ao buscar notícia:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar notícia' },
      { status: 500 }
    );
  }
}
