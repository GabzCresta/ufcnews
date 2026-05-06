import { notFound } from 'next/navigation';
import { query } from '@/lib/db';
import { EVENT_REGISTRY } from '@/lib/event-registry';
import { EventAnalysisView, type EventAnalysisData } from '@/components/analise/EventAnalysisView';
import type { EventFightCard } from '@/components/analise/EventAnalysisCard';
import { enrichEventWithPhotos } from '@/lib/enrich-event-photos';
import { translateAnalysis } from '@/lib/translate-analysis';
import type { Lang } from '@/lib/i18n-labels';

// ═══════════════════════════════════════════════════════════
// Dynamic event overview page — reads from event-registry + DB
// ═══════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';

interface AnaliseRow {
  slug: string;
  titulo: string;
  analysis_type: string;
  categoria_peso: string | null;
  num_rounds: number;
  is_titulo: boolean;
  predicted_winner_name: string | null;
  predicted_winner_side: string | null;
  predicted_method: string | null;
  confidence_score: number | null;
  fighter1_info: Record<string, unknown> | null;
  fighter2_info: Record<string, unknown> | null;
  full_analysis: Record<string, unknown> | null;
  prelims_analysis: Record<string, unknown> | null;
}

function toConfidenceLabel(score: number | null): string {
  if (!score) return 'MEDIA';
  if (score >= 8) return 'ALTA';
  if (score >= 7) return 'MEDIA-ALTA';
  if (score >= 5) return 'MEDIA';
  return 'BAIXA';
}

function buildFightCard(row: AnaliseRow, isMainEvent: boolean): EventFightCard {
  // Extract fighter info from the analysis JSONB or from fighter1_info/fighter2_info
  let f1Nome = '';
  let f1Record = '';
  let f2Nome = '';
  let f2Record = '';

  if (row.analysis_type === 'full_single' && row.full_analysis) {
    const hero = (row.full_analysis as Record<string, unknown>).hero as Record<string, unknown> | undefined;
    if (hero) {
      const h1 = hero.fighter1 as Record<string, unknown> | undefined;
      const h2 = hero.fighter2 as Record<string, unknown> | undefined;
      f1Nome = (h1?.nome_completo as string) || (h1?.sobrenome as string) || '';
      f1Record = (h1?.record as string) || '';
      f2Nome = (h2?.nome_completo as string) || (h2?.sobrenome as string) || '';
      f2Record = (h2?.record as string) || '';
    }
  }

  if (row.analysis_type === 'prelims' && row.prelims_analysis) {
    const hero = (row.prelims_analysis as Record<string, unknown>).hero as Record<string, unknown> | undefined;
    if (hero) {
      const h1 = hero.fighter1 as Record<string, unknown> | undefined;
      const h2 = hero.fighter2 as Record<string, unknown> | undefined;
      f1Nome = (h1?.nome as string) || '';
      f1Record = (h1?.record as string) || '';
      f2Nome = (h2?.nome as string) || '';
      f2Record = (h2?.record as string) || '';
    }
  }

  // Fallback to fighter_info columns
  if (!f1Nome && row.fighter1_info) {
    f1Nome = (row.fighter1_info.nome as string) || '';
    f1Record = (row.fighter1_info.record as string) || '';
  }
  if (!f2Nome && row.fighter2_info) {
    f2Nome = (row.fighter2_info.nome as string) || '';
    f2Record = (row.fighter2_info.record as string) || '';
  }

  // Clean nickname from nome_completo (e.g. 'Max "Blessed" Holloway' -> 'Max Holloway')
  const cleanName = (n: string) => n.replace(/"[^"]*"\s*/g, '').replace(/\s+/g, ' ').trim();

  return {
    slug: row.slug,
    fighter1: { nome: cleanName(f1Nome), record: f1Record },
    fighter2: { nome: cleanName(f2Nome), record: f2Record },
    categoria_peso: row.categoria_peso || '',
    num_rounds: row.num_rounds,
    predicted_winner: row.predicted_winner_name || '',
    predicted_method: row.predicted_method || '',
    confidence_label: toConfidenceLabel(row.confidence_score),
    is_main_event: isMainEvent,
  };
}

export default async function EventoPage({
  params,
}: {
  params: Promise<{ locale: string; eventSlug: string }>;
}) {
  const { locale, eventSlug } = await params;

  // Find event in registry
  const event = EVENT_REGISTRY.find((e) => e.slug === eventSlug);
  if (!event) notFound();

  // Fetch all analyses for this event
  const rows = await query<AnaliseRow>(
    `SELECT slug, titulo, analysis_type, categoria_peso, num_rounds, is_titulo,
            predicted_winner_name, predicted_winner_side, predicted_method, confidence_score,
            fighter1_info, fighter2_info, full_analysis, prelims_analysis
     FROM analises
     WHERE evento_nome = $1 AND status = 'publicado'
     ORDER BY card_position ASC, num_rounds DESC, slug`,
    [event.evento_nome],
  );

  if (rows.length === 0) notFound();

  // Split into main card and prelims based on analysis_type
  // Fights marked as full_single are main card; prelims are prelims
  const mainCardRows = rows.filter((r) => r.analysis_type === 'full_single');
  const prelimRows = rows.filter((r) => r.analysis_type === 'prelims');

  // Find main event (5 rounds or first main card fight)
  const mainEventRow = mainCardRows.find((r) => r.num_rounds === 5) || mainCardRows[0];
  const mainEventSlug = mainEventRow?.slug;

  const mainCard: EventFightCard[] = mainCardRows.map((r) =>
    buildFightCard(r, r.slug === mainEventSlug),
  );

  const prelims: EventFightCard[] = prelimRows.map((r) =>
    buildFightCard(r, false),
  );

  const eventData: EventAnalysisData = {
    evento_nome: event.evento_nome,
    evento_data: event.evento_data,
    evento_local: event.evento_local,
    main_card: mainCard,
    prelims,
  };

  const translatedData = translateAnalysis(eventData, locale as Lang);
  const enrichedData = await enrichEventWithPhotos(translatedData);

  return <EventAnalysisView data={enrichedData} />;
}
