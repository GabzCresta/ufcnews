import { notFound } from 'next/navigation';
import { queryOne } from '@/lib/db';
import type { Lang } from '@/lib/i18n-labels';
import type { FullSingleAnalise, PrelimsAnalise, Analise, CardAnalise, FightAnalysisItem, FighterInfo, TacticalBreakdownData, FightPredictionData, CardOverview } from '@/types/analise';
import { AnalisePageClient } from './AnalisePageClient';

// ═══════════════════════════════════════════════════════════
// Dynamic analysis page — reads from DB, supports 4 locales
// ═══════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';

const LOCALE_MAP = {
  pt: { full: 'full_analysis', prelims: 'prelims_analysis' },
  en: { full: 'full_analysis_en', prelims: 'prelims_analysis_en' },
  es: { full: 'full_analysis_es', prelims: 'prelims_analysis_es' },
  fr: { full: 'full_analysis_fr', prelims: 'prelims_analysis_fr' },
} as const;

type SupportedLocale = keyof typeof LOCALE_MAP;

interface AnaliseRow {
  id: string;
  slug: string;
  titulo: string;
  subtitulo: string | null;
  evento_nome: string | null;
  evento_data: string | null;
  evento_local: string | null;
  categoria_peso: string | null;
  num_rounds: number;
  is_titulo: boolean;
  broadcast: string | null;
  status: string;
  analysis_type: string;
  artigo_conteudo: string;
  created_at: string;
  updated_at: string;
  fighter1_info: unknown;
  fighter2_info: unknown;
  tactical_breakdown: unknown;
  fight_prediction: unknown;
  fights_analysis: unknown;
  card_overview: unknown;
  full_analysis: unknown;
  prelims_analysis: unknown;
}

function safeParse<T>(val: unknown): T | null {
  if (val === null || val === undefined) return null;
  if (typeof val === 'string') {
    try { return JSON.parse(val) as T; } catch { return null; }
  }
  return val as T;
}

function buildAnalise(row: AnaliseRow): FullSingleAnalise | PrelimsAnalise | CardAnalise | Analise {
  const base: Analise = {
    id: row.id,
    slug: row.slug,
    titulo: row.titulo,
    subtitulo: row.subtitulo,
    evento_id: null,
    lutador1_id: null,
    lutador2_id: null,
    evento_nome: row.evento_nome,
    evento_data: row.evento_data,
    evento_local: row.evento_local,
    categoria_peso: row.categoria_peso,
    num_rounds: row.num_rounds,
    is_titulo: row.is_titulo,
    broadcast: row.broadcast,
    status: row.status,
    analysis_type: row.analysis_type,
    artigo_conteudo: row.artigo_conteudo || '',
    created_at: row.created_at,
    updated_at: row.updated_at,
    fighter1_info: safeParse<FighterInfo>(row.fighter1_info) ?? { nome: '', record: '', ultimasLutas: [] } as FighterInfo,
    fighter2_info: safeParse<FighterInfo>(row.fighter2_info) ?? { nome: '', record: '', ultimasLutas: [] } as FighterInfo,
    tactical_breakdown: safeParse<TacticalBreakdownData>(row.tactical_breakdown) ?? { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '', envergadura: '', idade: 0, academia: '' }, fighter2: { altura: '', envergadura: '', idade: 0, academia: '' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] } as TacticalBreakdownData,
    fight_prediction: safeParse<FightPredictionData>(row.fight_prediction) ?? { predictedWinner: 'fighter1' as const, predictedMethod: '', confidence: '', fighter1Scenarios: [], fighter2Scenarios: [], keyFactors: [], xFactor: { title: '', description: '' } } as FightPredictionData,
  };

  if (row.analysis_type === 'full_single' && row.full_analysis) {
    return {
      ...base,
      analysis_type: 'full_single' as const,
      full_analysis: safeParse(row.full_analysis)!,
    } as FullSingleAnalise;
  }

  if (row.analysis_type === 'prelims' && row.prelims_analysis) {
    return {
      ...base,
      analysis_type: 'prelims' as const,
      prelims_analysis: safeParse(row.prelims_analysis)!,
    } as PrelimsAnalise;
  }

  if (row.analysis_type === 'full_card' && row.fights_analysis) {
    return {
      ...base,
      analysis_type: 'full_card' as const,
      fights_analysis: safeParse<FightAnalysisItem[]>(row.fights_analysis) ?? [] as FightAnalysisItem[],
      card_overview: safeParse<CardOverview>(row.card_overview) ?? { card_summary: '', best_bets: [], parlay: { legs: [], reasoning: '', risk_level: 'medium' as const }, total_fights: 0 } as CardOverview,
    } as CardAnalise;
  }

  return base;
}

export default async function AnalisePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = (locale in LOCALE_MAP ? locale : 'pt') as SupportedLocale;
  const cols = LOCALE_MAP[lang];
  const ptCols = LOCALE_MAP.pt;

  const row = await queryOne<AnaliseRow>(
    `SELECT *,
      COALESCE(${cols.full}, ${ptCols.full}) as full_analysis,
      COALESCE(${cols.prelims}, ${ptCols.prelims}) as prelims_analysis
    FROM analises
    WHERE slug = $1 AND status = 'publicado'`,
    [slug],
  );

  if (!row) notFound();

  const analise = buildAnalise(row);

  return <AnalisePageClient analise={analise} lang={lang as Lang} />;
}
