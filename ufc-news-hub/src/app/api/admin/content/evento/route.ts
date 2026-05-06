import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { query } from '@/lib/db';

interface EventoGroup {
  evento_nome: string;
  evento_slug: string;
  total_analises: string;
  criado_em: string;
  acertos: string;
  erros: string;
  avaliadas: string;
  status: string;
}

interface AnaliseDetalhe {
  id: string;
  slug: string;
  titulo: string;
  predicted_winner_name: string | null;
  predicted_method: string | null;
  confidence_score: number | null;
  actual_winner_name: string | null;
  prediction_correct: boolean | null;
  status: string;
  created_at: string;
}

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const eventoSlug = request.nextUrl.searchParams.get('evento');

  try {
    if (eventoSlug) {
      // Detalhe de um evento especifico
      const eventoNome = decodeURIComponent(eventoSlug);
      const analises = await query<AnaliseDetalhe>(
        `SELECT id, slug, titulo, predicted_winner_name, predicted_method,
                confidence_score, actual_winner_name, prediction_correct, status, created_at
         FROM analises
         WHERE evento_nome = $1
         ORDER BY slug`,
        [eventoNome]
      );

      const acertos = analises.filter(a => a.prediction_correct === true).length;
      const avaliadas = analises.filter(a => a.prediction_correct !== null).length;
      const taxa = avaliadas > 0 ? Math.round((acertos / avaliadas) * 100) : 0;

      // Breakdown: normal vs pos-weighins
      const normais = analises.filter(a => !a.slug.includes('pos-weighins'));
      const weighins = analises.filter(a => a.slug.includes('pos-weighins'));
      const normaisAvaliadas = normais.filter(a => a.prediction_correct !== null);
      const weighinsAvaliadas = weighins.filter(a => a.prediction_correct !== null);

      const breakdown = {
        normal: {
          total: normais.length,
          acertos: normaisAvaliadas.filter(a => a.prediction_correct === true).length,
          erros: normaisAvaliadas.filter(a => a.prediction_correct === false).length,
          taxa: normaisAvaliadas.length > 0
            ? Math.round(normaisAvaliadas.filter(a => a.prediction_correct === true).length / normaisAvaliadas.length * 100) : 0,
        },
        weighin: {
          total: weighins.length,
          acertos: weighinsAvaliadas.filter(a => a.prediction_correct === true).length,
          erros: weighinsAvaliadas.filter(a => a.prediction_correct === false).length,
          taxa: weighinsAvaliadas.length > 0
            ? Math.round(weighinsAvaliadas.filter(a => a.prediction_correct === true).length / weighinsAvaliadas.length * 100) : 0,
        },
        has_weighins: weighins.length > 0,
      };

      // Mudanças de previsão após weigh-in
      const mudancas = normais
        .filter(n => n.prediction_correct !== null)
        .map(normal => {
          const wi = weighins.find(w => w.slug === normal.slug + '-pos-weighins');
          if (!wi || !wi.predicted_winner_name) return null;
          const mudou = normal.predicted_winner_name !== wi.predicted_winner_name;
          return {
            slug: normal.slug,
            previsao_normal: normal.predicted_winner_name,
            previsao_weighin: wi.predicted_winner_name,
            vencedor_real: normal.actual_winner_name,
            mudou,
            normal_acertou: normal.prediction_correct,
            weighin_acertou: wi.prediction_correct,
            impacto: !mudou ? 'manteve' : (wi.prediction_correct && !normal.prediction_correct) ? 'corrigiu' : (!wi.prediction_correct && normal.prediction_correct) ? 'piorou' : 'neutro',
          };
        })
        .filter(Boolean);

      return NextResponse.json({
        evento_nome: eventoNome,
        total: analises.length,
        acertos,
        avaliadas,
        taxa,
        analises,
        breakdown,
        mudancas,
      });
    }

    // Lista agrupada por evento
    const eventos = await query<EventoGroup>(
      `SELECT
        evento_nome,
        REPLACE(REPLACE(LOWER(evento_nome), ' ', '-'), ':', '') as evento_slug,
        COUNT(*)::text as total_analises,
        MIN(created_at)::text as criado_em,
        COUNT(*) FILTER (WHERE prediction_correct = true)::text as acertos,
        COUNT(*) FILTER (WHERE prediction_correct = false)::text as erros,
        COUNT(*) FILTER (WHERE prediction_correct IS NOT NULL)::text as avaliadas,
        CASE
          WHEN COUNT(*) FILTER (WHERE status = 'publicado') = COUNT(*) THEN 'publicado'
          WHEN COUNT(*) FILTER (WHERE status = 'publicado') > 0 THEN 'parcial'
          ELSE 'rascunho'
        END as status
       FROM analises
       WHERE evento_nome IS NOT NULL AND evento_nome != ''
       GROUP BY evento_nome
       ORDER BY MIN(created_at) DESC`
    );

    return NextResponse.json({
      eventos: eventos.map(e => ({
        evento_nome: e.evento_nome,
        evento_slug: e.evento_slug,
        total_analises: parseInt(e.total_analises),
        criado_em: e.criado_em,
        acertos: parseInt(e.acertos),
        erros: parseInt(e.erros),
        avaliadas: parseInt(e.avaliadas),
        taxa: parseInt(e.avaliadas) > 0 ? Math.round(parseInt(e.acertos) / parseInt(e.avaliadas) * 100) : 0,
        status: e.status,
      })),
    });
  } catch (error) {
    console.error('[API /admin/content/evento] Error:', error);
    return NextResponse.json({ error: 'Erro ao buscar eventos' }, { status: 500 });
  }
}
