import { notFound } from 'next/navigation';
import { queryOne } from '@/lib/db';
import type { Lang } from '@/lib/i18n-labels';
import type { FullSingleAnalise, PrelimsAnalise, Analise, TacticalBreakdownData, FightPredictionData, FighterInfo } from '@/types/analise';
import { AnalisePageClient } from './AnalisePageClient';

// Legacy placeholders — Analise type still declares these fields, but no
// DB column or view uses them. Kept only to satisfy the type shape.
const EMPTY_FIGHTER: FighterInfo = { nome: '', record: '', ultimasLutas: [] };
const EMPTY_TACTICAL: TacticalBreakdownData = {
  stats: [],
  radarData: [],
  taleOfTape: {
    fighter1: { altura: '', envergadura: '', idade: 0, academia: '' },
    fighter2: { altura: '', envergadura: '', idade: 0, academia: '' },
  },
  pathsToVictory: { fighter1: [], fighter2: [] },
  dangerZones: [],
};
const EMPTY_PREDICTION: FightPredictionData = {
  predictedWinner: 'fighter1',
  predictedMethod: '',
  confidence: '',
  fighter1Scenarios: [],
  fighter2Scenarios: [],
  keyFactors: [],
  xFactor: { title: '', description: '' },
};

// ═══════════════════════════════════════════════════════════
// Dynamic analysis page — reads from DB, supports 4 locales
// ═══════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';

const SUPPORTED_LOCALES = ['pt', 'en', 'es', 'fr'] as const;
type SupportedLocale = typeof SUPPORTED_LOCALES[number];

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
  created_at: string;
  updated_at: string;
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

function buildAnalise(row: AnaliseRow): FullSingleAnalise | PrelimsAnalise | Analise {
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
    created_at: row.created_at,
    updated_at: row.updated_at,
    artigo_conteudo: '',
    tactical_breakdown: EMPTY_TACTICAL,
    fight_prediction: EMPTY_PREDICTION,
    fighter1_info: EMPTY_FIGHTER,
    fighter2_info: EMPTY_FIGHTER,
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

  return base;
}

export default async function AnalisePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang: SupportedLocale = (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as SupportedLocale)
    : 'pt';

  const row = await queryOne<AnaliseRow>(
    `SELECT analises.id, analises.slug, analises.titulo, analises.subtitulo,
            analises.evento_nome, analises.evento_data, analises.evento_local,
            analises.categoria_peso, analises.num_rounds, analises.is_titulo,
            analises.broadcast, analises.status, analises.analysis_type,
            analises.created_at, analises.updated_at,
            COALESCE(acl_full.content, analises.full_analysis) as full_analysis,
            COALESCE(acl_prelim.content, analises.prelims_analysis) as prelims_analysis
    FROM analises
    LEFT JOIN analises_content_locales acl_full
      ON acl_full.analise_id = analises.id
      AND acl_full.locale = $2
      AND acl_full.content_type = 'full_analysis'
    LEFT JOIN analises_content_locales acl_prelim
      ON acl_prelim.analise_id = analises.id
      AND acl_prelim.locale = $2
      AND acl_prelim.content_type = 'prelims_analysis'
    WHERE analises.slug = $1 AND analises.status = 'publicado'`,
    [slug, lang],
  );

  if (!row) notFound();

  const analise = buildAnalise(row);

  return <AnalisePageClient analise={analise} lang={lang as Lang} />;
}
