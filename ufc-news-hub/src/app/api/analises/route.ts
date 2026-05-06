import { NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';

// ═══════════════════════════════════════════════════════════
// GET /api/analises
//
// Params:
//   slug     — single analysis by slug
//   locale   — language (pt|en|es|fr), default pt
//   evento   — all analyses for an event name (partial match)
//   latest   — most recent analysis
//   (none)   — list all published analyses
//
// PT reads from analises.full_analysis / analises.prelims_analysis.
// Non-PT locales read from analises_content_locales (falls back to PT).
// ═══════════════════════════════════════════════════════════

const SUPPORTED_LOCALES = ['pt', 'en', 'es', 'fr'] as const;
type SupportedLocale = typeof SUPPORTED_LOCALES[number];

function isValidLocale(l: string): l is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(l);
}

const LOCALE_SELECT = `
  COALESCE(acl_full.content, analises.full_analysis) as full_analysis,
  COALESCE(acl_prelim.content, analises.prelims_analysis) as prelims_analysis
`;

const LOCALE_JOIN = `
  LEFT JOIN analises_content_locales acl_full
    ON acl_full.analise_id = analises.id
    AND acl_full.locale = $LOCALE_PARAM
    AND acl_full.content_type = 'full_analysis'
  LEFT JOIN analises_content_locales acl_prelim
    ON acl_prelim.analise_id = analises.id
    AND acl_prelim.locale = $LOCALE_PARAM
    AND acl_prelim.content_type = 'prelims_analysis'
`;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const latest = url.searchParams.get('latest');
  const slug = url.searchParams.get('slug');
  const eventoId = url.searchParams.get('evento_id');
  const eventoName = url.searchParams.get('evento');
  const localeParam = url.searchParams.get('locale') || 'pt';
  const locale: SupportedLocale = isValidLocale(localeParam) ? localeParam : 'pt';

  try {
    if (slug) {
      const analise = await queryOne(
        `SELECT analises.*, ${LOCALE_SELECT}
         FROM analises
         ${LOCALE_JOIN.replace(/\$LOCALE_PARAM/g, '$2')}
         WHERE analises.slug = $1 AND analises.status = 'publicado'`,
        [slug, locale],
      );
      if (!analise) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
      }
      return NextResponse.json(analise, {
        headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
      });
    }

    if (eventoName) {
      const analises = await query(
        `SELECT slug, titulo, subtitulo, analysis_type, categoria_peso, num_rounds,
                is_titulo, evento_nome, evento_data, evento_local,
                predicted_winner_name, predicted_winner_side, predicted_method, confidence_score
         FROM analises
         WHERE evento_nome ILIKE $1 AND status = 'publicado'
         ORDER BY analysis_type, slug`,
        [`%${eventoName}%`],
      );
      return NextResponse.json(analises, {
        headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
      });
    }

    if (eventoId) {
      const analise = await queryOne<{ slug: string; titulo: string }>(
        `SELECT slug, titulo FROM analises WHERE evento_id = $1 AND status = 'publicado' ORDER BY created_at DESC LIMIT 1`,
        [eventoId],
      );
      return NextResponse.json(analise);
    }

    if (latest === 'true') {
      const analise = await queryOne(
        `SELECT analises.*, ${LOCALE_SELECT}
         FROM analises
         ${LOCALE_JOIN.replace(/\$LOCALE_PARAM/g, '$1')}
         WHERE analises.status = 'publicado'
         ORDER BY analises.created_at DESC
         LIMIT 1`,
        [locale],
      );
      return NextResponse.json(analise);
    }

    // Default: list all published analyses (lightweight, no locale content)
    const analises = await query(
      `SELECT id, slug, titulo, subtitulo, evento_nome, evento_data, evento_local,
              categoria_peso, is_titulo, created_at,
              analysis_type, predicted_winner_name, predicted_method, confidence_score,
              COALESCE(jsonb_array_length(fights_analysis), 0) as total_fights
       FROM analises
       WHERE status = 'publicado'
       ORDER BY created_at DESC
       LIMIT 50`,
    );
    return NextResponse.json(analises, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120' },
    });

  } catch (error) {
    console.error('[API /analises] Error:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
