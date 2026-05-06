export interface StatComparison {
  label: string;
  fighter1Value: number;
  fighter2Value: number;
  advantage: 'fighter1' | 'fighter2' | 'even';
  suffix?: string;
}

export interface RadarDataPoint {
  axis: string;
  fighter1: number;
  fighter2: number;
}

export interface TaleOfTapeFighter {
  altura: string;
  envergadura: string;
  idade: number;
  academia: string;
}

export interface PathToVictory {
  title: string;
  description: string;
}

export interface DangerZone {
  round: string;
  description: string;
}

export interface TacticalBreakdownData {
  stats: StatComparison[];
  radarData: RadarDataPoint[];
  taleOfTape: {
    fighter1: TaleOfTapeFighter;
    fighter2: TaleOfTapeFighter;
  };
  pathsToVictory: {
    fighter1: PathToVictory[];
    fighter2: PathToVictory[];
  };
  dangerZones: DangerZone[];
  reachAdvantage?: {
    fighter: 'fighter1' | 'fighter2';
    inches: number;
    description: string;
  };
}

export interface PredictionScenario {
  method: string;
  probability: number;
  description: string;
}

export interface KeyFactor {
  factor: string;
  edge: 'fighter1' | 'fighter2';
  impact: number;
  description: string;
}

export interface XFactor {
  title: string;
  description: string;
  details?: string;
  smartBet?: string;
}

export interface FightPredictionData {
  predictedWinner: 'fighter1' | 'fighter2';
  predictedMethod: string;
  confidence: string;
  fighter1Scenarios: PredictionScenario[];
  fighter2Scenarios: PredictionScenario[];
  keyFactors: KeyFactor[];
  xFactor: XFactor;
}

export interface FighterLastFight {
  result: 'W' | 'L' | 'D' | 'NC';
  opponent: string;
  method: string;
  event: string;
}

export interface FighterInfo {
  nome: string;
  apelido?: string;
  pais?: string;
  cidade?: string;
  record: string;
  ranking?: string;
  imagem_url?: string;
  ultimasLutas: FighterLastFight[];
  sigStrikesPerMin?: number;
  strikeAccuracy?: number;
  strikeDefense?: number;
  tdAccuracy?: number;
  tdDefense?: number;
  subAttemptsPer15?: number;
}

export interface Analise {
  id: string;
  evento_id: string | null;
  slug: string;
  titulo: string;
  subtitulo: string | null;
  lutador1_id: string | null;
  lutador2_id: string | null;
  evento_nome: string | null;
  evento_data: string | null;
  evento_local: string | null;
  categoria_peso: string | null;
  num_rounds: number;
  is_titulo: boolean;
  broadcast: string | null;
  status: string;
  analysis_type?: string;
  created_at: string;
  updated_at: string;
  // Deprecated placeholder fields kept for type compatibility with legacy static
  // page.tsx files. No DB column backs them (dropped in migration 010) and no
  // current view renders them. Safe to omit in new code.
  artigo_conteudo: string;
  tactical_breakdown: TacticalBreakdownData;
  fight_prediction: FightPredictionData;
  fighter1_info: FighterInfo;
  fighter2_info: FighterInfo;
}

// ==========================================
// Full Card Analysis Types
// ==========================================

export interface BettingValue {
  moneyline: {
    pick: 'fighter1' | 'fighter2';
    fighter_name: string;
    confidence: number; // 1-10
    reasoning: string;
  };
  method: {
    pick: string;
    value_rating: number; // 1-10
    reasoning: string;
  };
  over_under: {
    pick: 'over' | 'under';
    rounds: number;
    reasoning: string;
  };
  bestBet: string;
  avoidBet: string;
}

export interface FightAnalysisItem {
  fight_id: string;
  fight_label: string; // e.g. "Main Event", "Co-Main Event"
  fight_type: string; // main_event, co_main, card_principal
  ordem: number;
  categoria_peso: string;
  num_rounds: number;
  is_titulo: boolean;
  fighter1_info: FighterInfo;
  fighter2_info: FighterInfo;
  artigo_conteudo: string;
  tactical_breakdown: TacticalBreakdownData;
  fight_prediction: FightPredictionData;
  betting_value: BettingValue;
}

export interface BestBet {
  fight_label: string;
  bet_type: string; // "Moneyline", "Method", "Over/Under"
  pick: string;
  reasoning: string;
  confidence: number; // 1-10
  value_rating: number; // 1-10
}

export interface ParlaySuggestion {
  legs: string[];
  reasoning: string;
  risk_level: 'low' | 'medium' | 'high';
}

export interface CardOverview {
  card_summary: string; // HTML
  best_bets: BestBet[];
  parlay: ParlaySuggestion;
  total_fights: number;
}

export interface CardAnalise extends Analise {
  fights_analysis: FightAnalysisItem[];
  card_overview: CardOverview;
  analysis_type: 'full_card';
}

export function isCardAnalise(analise: Analise): analise is CardAnalise {
  return analise.analysis_type === 'full_card'
    && 'fights_analysis' in analise
    && Array.isArray((analise as CardAnalise).fights_analysis);
}

// ==========================================
// Full Single Analysis (15 Sections) Types
// ==========================================

export interface HeroSectionData {
  evento_nome: string;
  evento_data: string;
  evento_local: string;
  categoria_peso: string;
  num_rounds: number;
  titulo_em_jogo: string | null; // e.g. "Titulo BMF"
  tagline: string;
  tagline_sub: string;
  fighter1: {
    nome_completo: string;
    apelido: string;
    sobrenome: string;
    record: string;
    ranking: string;
    info_extra: string; // e.g. "Waianae, Hawaii | 34 anos"
    imagem_fullbody_url: string | null;
    imagem_head_url?: string | null; // headshot, renders as circular avatar above the name
  };
  fighter2: {
    nome_completo: string;
    apelido: string;
    sobrenome: string;
    record: string;
    ranking: string;
    info_extra: string;
    imagem_fullbody_url: string | null;
    imagem_head_url?: string | null;
  };
}

export type HeroFighterData = HeroSectionData['fighter1'];

export interface StakeRow {
  dimensao: string;
  fighter1: string;
  fighter2: string;
}

export interface FuturoConsequencia {
  tag: string; // e.g. "LEGADO", "RANKING", "PROXIMA LUTA"
  texto: string;
}

export interface FuturoCenario {
  titulo: string; // dramatic headline e.g. "A COROACAO DO BLESSED"
  subtitulo: string; // one-liner summary
  consequencias: FuturoConsequencia[];
  proxima_luta: string; // what fight comes next
}

export interface NarrativaSectionData {
  html_content: string; // HTML prose with the fight narrative
  stakes: StakeRow[];
  prognostico?: {
    fighter1_vence: FuturoCenario;
    fighter2_vence: FuturoCenario;
  };
}

export interface RecentFight {
  date: string;
  opponent: string;
  result: 'W' | 'L' | 'D' | 'NC';
  method: string;
  opponent_rank: string;
  quality_score: number; // 1-5 (1=Ruim, 2=Medio, 3=Bom, 4=Muito Bom, 5=Excelente)
  quality_label?: string; // "Ruim" | "Medio" | "Bom" | "Muito Bom" | "Excelente"
  note: string;
}

export interface MomentoAtualFighter {
  nome: string;
  color: 'red' | 'blue';
  recent_fights: RecentFight[];
  full_fight_history?: RecentFight[];
  layoff_warning?: string | null;
  momentum_score: number; // 0-10
  momentum_label: string;
  momentum_trend: 'ascending' | 'descending' | 'stable' | 'resilient';
  momentum_note: string;
}

export interface MomentoAtualSectionData {
  fighter1: MomentoAtualFighter;
  fighter2: MomentoAtualFighter;
}

export interface NivelCompeticaoFighter {
  nome: string;
  media_oponentes: number; // 1-5 (1=Ruim, 2=Medio, 3=Bom, 4=Muito Bom, 5=Excelente)
  media_oponentes_label?: string; // "Ruim" | "Medio" | "Bom" | "Muito Bom" | "Excelente"
  aproveitamento: string; // e.g. "4W-1L (80%)"
  contra_top5: string; // e.g. "2W-1L"
}

export interface NivelCompeticaoSectionData {
  fighter1: NivelCompeticaoFighter;
  fighter2: NivelCompeticaoFighter;
  oponentes_em_comum_count: { fighter1: number; fighter2: number };
  oponentes_em_comum_note: string;
}

export interface OponenteComumResult {
  resultado: string;
  metodo: string;
  duracao: string;
  contexto: string;
  performance: string;
  evento: string;
  data: string;
}

export interface OponenteComumSectionData {
  oponente_nome: string;
  fighter1_result: OponenteComumResult;
  fighter2_result: OponenteComumResult;
  insight: string;
}

export interface StatBarData {
  label: string;
  valueA: number;
  valueB: number;
  maxVal: number;
  format?: 'decimal' | 'percent' | 'integer';
  note?: string;
  reverseWinner?: boolean;
}

export interface TaleOfTapeRow {
  label: string;
  fighter1: string;
  fighter2: string;
  note?: string | null;
}

export interface ComparacaoEstatisticaSectionData {
  stats: StatBarData[];
  tale_of_tape: TaleOfTapeRow[];
}

export interface SkillBarData {
  label: string;
  valueA: number; // 0-100 (drives bar width, displayed as label via valueToLabel)
  valueB: number; // 0-100
  labelA?: string; // "Ruim" | "Medio" | "Bom" | "Muito Bom" | "Excelente"
  labelB?: string; // "Ruim" | "Medio" | "Bom" | "Muito Bom" | "Excelente"
  advantage?: 'fighter1' | 'fighter2' | 'even';
  advantage_note?: string;
}

export interface PerfilHabilidadesSectionData {
  skills: SkillBarData[];
  insight?: string;
  fighter1_total?: number;
  fighter2_total?: number;
}

export interface WinMethodBreakdown {
  ko_tko: { count: number; percent: number };
  submission: { count: number; percent: number };
  decision: { count: number; percent: number };
  total_wins: number;
}

export interface DistribuicaoVitoriasSectionData {
  fighter1: { nome: string } & WinMethodBreakdown;
  fighter2: { nome: string } & WinMethodBreakdown;
  insight: string;
}

export interface LossMethodBreakdown {
  ko_tko: { count: number; percent: number };
  submission: { count: number; percent: number };
  decision: { count: number; percent: number };
  total_losses: number;
}

export interface DistribuicaoDerrotasSectionData {
  fighter1: { nome: string } & LossMethodBreakdown;
  fighter2: { nome: string } & LossMethodBreakdown;
  insight: string;
}

export interface DangerZoneCard {
  rounds: string; // e.g. "R1-R2"
  danger_level: number; // 1-10
  danger_label: string; // e.g. "VANTAGEM HOLLOWAY", "EQUILIBRADO"
  color: 'red' | 'gold' | 'green';
  title: string;
  description: string;
}

export interface DangerZonesSectionData {
  zones: DangerZoneCard[];
}

export interface IntangivelItem {
  icon: string; // Lucide icon name
  title: string;
  fighter: string;
  risk_level: string; // e.g. "RISCO ALTO", "POSITIVO", "NEUTRO"
  risk_color: 'red' | 'yellow' | 'green' | 'neutral';
  description: string;
}

export interface IntangiveisSectionData {
  items: IntangivelItem[];
}

export interface CaminhoVitoria {
  name: string;
  probability: number; // percent
  method: string;
  description: string;
}

export interface CaminhosVitoriaSectionData {
  fighter1: {
    nome: string;
    total_probability: number;
    scenarios: CaminhoVitoria[];
  };
  fighter2: {
    nome: string;
    total_probability: number;
    scenarios: CaminhoVitoria[];
  };
}

export interface UnderdogPath {
  viable: boolean;
  probability_estimate: number; // realistic % the underdog actually wins
  key_scenario: string; // step-by-step of HOW the underdog wins
  required_conditions: string[]; // what MUST happen
  historical_precedent?: string; // past fight with similar dynamic
}

export interface ConvictionData {
  thesis: string; // 3-sentence central thesis (see fight-analyst agent spec)
  conviction_score: number; // 1-10, capped at 5 if rationale is not specific
  conviction_rationale: string; // why THIS score and not +/-1
  conviction_breakers: string[]; // 2-4 specific conditions that invalidate the thesis
  underdog_path: UnderdogPath;
}

// ──────────────────────────────────────────────────────────
// Flexible value picks (NEW 2026-04-07)
// ──────────────────────────────────────────────────────────
// The legacy `value_picks` is locked to 3 fixed slots
// (moneyline + method + over_under), which forces every analysis
// into the same betting categories. The new model is a free-form
// array — any number of picks, any type label, any prop.
// Use whichever picks actually have value for THIS specific fight.

export interface ValuePickItem {
  type: string; // free text: "Moneyline", "Method", "Round Group", "Total Strikes", "Parlay", "Method Group", etc.
  pick: string; // "Ulberg +110", "Ulberg by KO/TKO", "Fight ends in R2 or R3", "Ulberg + Under 3.5"
  odds?: string; // optional: "+110", "+350", "-125"
  reasoning: string; // 1-2 sentences explaining the value
}

export interface ValuePicksBlock {
  picks: ValuePickItem[];
  best_bet?: {
    pick: string; // e.g. "Ulberg by KO at +350"
    reasoning: string; // why this is the single best bet of the fight
  };
}

// Inline anchor stat callouts (1-3 max), shown in the verdict block.
// Used for the "stats that actually matter" — not a flat edge list.
export interface KeyStat {
  value: string; // "88%", "NUNCA", "4/5", "+350"
  label: string; // "das derrotas do Jiri vieram por nocaute"
  sublabel?: string; // optional secondary line: "(Tapology, ultimas 12 lutas)"
}

export interface PrevisaoFinalSectionData {
  winner_name: string;
  winner_side: 'fighter1' | 'fighter2';
  predicted_method: string;
  confidence_score: number; // 1-10
  confidence_label: string; // e.g. "MEDIA-ALTA"
  explanation: string;
  x_factor: { title: string; description: string };
  upset_alert: { title: string; description: string };
  probabilities: {
    fighter1: { nome: string; percent: number };
    fighter2: { nome: string; percent: number };
    draw: number;
  };
  // LEGACY value picks — kept for backward compatibility with old pages.
  // New pages should use `value_picks_v2` instead.
  value_picks?: {
    moneyline: { pick: string; reasoning: string };
    method: { pick: string; reasoning: string };
    over_under: { pick: string; rounds: number; reasoning: string };
    best_value: string;
  };
  // NEW (2026-04-07) — flexible array of value picks, any number, any type.
  // When present, the verdict renders this and ignores the legacy shape.
  value_picks_v2?: ValuePicksBlock;
  // NEW — 1-3 anchor stats inline in the verdict (replaces flat edges list).
  key_stats?: KeyStat[];
  // NEW — odds moved into the verdict in the new shape (was in radar_apostador).
  odds?: OddsDisplay;
  // NEW — armadilha (trap warning) moved into the verdict in the new shape.
  armadilha?: { titulo: string; descricao: string };
  // Conviction backbone — optional for backward compatibility with legacy analyses.
  // New main-card analyses MUST populate this; prelims populate a reduced form.
  conviction?: ConvictionData;
}

export interface TalkingPoint {
  num: number;
  title: string;
  icon: string; // Lucide icon name
  description: string;
}

export interface OQueObservarSectionData {
  points: TalkingPoint[];
}

export interface InstagramSlide {
  slide_number: number;
  title: string;
  content: string;
  color: 'red' | 'blue' | 'gold';
}

export interface Tweet {
  num: string; // e.g. "1/6"
  text: string;
}

export interface VideoScriptSection {
  time: string; // e.g. "0-10s"
  title: string;
  text: string;
}

export interface TikTokScript {
  hook: string;
  body: string;
  cta: string;
}

export interface PodcastSegment {
  timestamp: string;
  title: string;
  talking_points: string[];
  discussion_questions?: string[];
}

export interface CreatorKitSectionData {
  instagram: InstagramSlide[];
  twitter: Tweet[];
  video: VideoScriptSection[];
  tiktok?: TikTokScript[];
  headlines?: string[];
  podcast?: PodcastSegment[];
}

export interface BettingValueSectionData {
  moneyline: {
    pick: 'fighter1' | 'fighter2';
    fighter_name: string;
    confidence: number;
    reasoning: string;
  };
  method: {
    pick: string;
    value_rating: number;
    reasoning: string;
  };
  over_under: {
    pick: 'over' | 'under';
    rounds: number;
    reasoning: string;
  };
  bestBet: string;
  avoidBet: string;
}

// ==========================================
// Radar do Apostador (Betting Insights)
// ==========================================

export interface OddsDisplay {
  fighter1_odds: string;
  fighter2_odds: string;
  fighter1_name: string;
  fighter2_name: string;
  source: string;
}

export interface EstatisticoEdge {
  icon: string;
  titulo: string;
  stat_headline: string;
  contexto: string;
  implicacao_aposta: string;
  edge_level: 'forte' | 'moderado' | 'leve';
  fighter_side?: 'fighter1' | 'fighter2' | 'neutral';
}

export interface ValuePick {
  tipo: string;
  pick: string;
  odds: string;
  confianca: 'baixa' | 'media' | 'alta';
  edge_vs_mercado?: string;
  raciocinio: string;
}

export interface RadarApostadorSectionData {
  odds: OddsDisplay;
  edges: EstatisticoEdge[];
  value_picks: ValuePick[];
  armadilha: {
    titulo: string;
    descricao: string;
  };
  disclaimer: string;
}

// ==========================================
// NEW (2026-04-06) — "Less is More" restructure
// ==========================================
// The analysis is being refactored to 9 dense sections instead of 15.
// Cut sections (narrativa, momento_atual, oponente_comum, danger_zones,
// intangiveis, caminhos_vitoria, o_que_observar, creator_kit) are now
// OPTIONAL so legacy pages keep rendering unchanged. New pages populate
// only the 9 sections below.

// Single high-value qualitative insight, shown right after the hero.
// Not a dossier — one thing that might decide the fight.
export interface QualitativeInsightSectionData {
  tag?: string; // e.g. "O X-FACTOR DA LUTA"
  headline: string; // The big statement
  insight: string; // 2-3 sentences of dense context, no inline citations
  // Optional tension block — two contradicting truths presented side-by-side.
  // Use when the insight is about a paradox (e.g., maximum focus vs structural stat problem).
  tension?: {
    truth_a: string;
    truth_b: string;
  };
}

// Head-to-head skill comparison (replaces the 0-100 scale with ruim/medio labels).
// No absolute scores — only who has the advantage and by how much.
export interface SkillComparison {
  label: string; // "Striking em Distancia"
  advantage: 'fighter1' | 'fighter2' | 'even';
  gap: number; // 0-5 magnitude of advantage (0 = even, 5 = dominant)
  note: string; // 1 sentence specific justification
}

export interface PerfilHabilidadesV2SectionData {
  skills: SkillComparison[]; // ~6 skills
  summary: string; // 1-2 sentences on overall balance
}

export interface FullAnalysisData {
  hero: HeroSectionData;
  // NEW: single qualitative insight, rendered right after hero
  qualitative_insight?: QualitativeInsightSectionData;
  // Legacy sections — now optional. New pages skip these.
  narrativa?: NarrativaSectionData;
  momento_atual?: MomentoAtualSectionData;
  nivel_competicao: NivelCompeticaoSectionData;
  oponente_comum?: OponenteComumSectionData | null;
  comparacao_estatistica: ComparacaoEstatisticaSectionData;
  // Legacy skills (0-100 + labels). Prefer perfil_habilidades_v2 for new pages.
  perfil_habilidades?: PerfilHabilidadesSectionData;
  // NEW: head-to-head skill comparison
  perfil_habilidades_v2?: PerfilHabilidadesV2SectionData;
  distribuicao_vitorias: DistribuicaoVitoriasSectionData;
  distribuicao_derrotas?: DistribuicaoDerrotasSectionData;
  danger_zones?: DangerZonesSectionData;
  intangiveis?: IntangiveisSectionData;
  caminhos_vitoria?: CaminhosVitoriaSectionData;
  previsao_final: PrevisaoFinalSectionData;
  o_que_observar?: OQueObservarSectionData;
  creator_kit?: CreatorKitSectionData;
  betting_value?: BettingValueSectionData | null;
  radar_apostador?: RadarApostadorSectionData | null;
}

export interface FullSingleAnalise extends Analise {
  full_analysis: FullAnalysisData;
  analysis_type: 'full_single';
}

export function isFullSingleAnalise(analise: Analise): analise is FullSingleAnalise {
  return analise.analysis_type === 'full_single'
    && 'full_analysis' in analise
    && (analise as FullSingleAnalise).full_analysis != null;
}

// ==========================================
// Prelims Analysis Types (6 Sections)
// ==========================================

export interface PrelimsHeroData {
  evento_nome: string;
  evento_data: string;
  categoria_peso: string;
  num_rounds: number;
  is_titulo: boolean;
  fighter1: {
    nome: string;
    record: string;
    ranking?: string;
    imagem_url?: string | null;
  };
  fighter2: {
    nome: string;
    record: string;
    ranking?: string;
    imagem_url?: string | null;
  };
}

export interface PrelimsHistoricoData {
  fighter1: {
    nome: string;
    recent_fights: RecentFight[];
  };
  fighter2: {
    nome: string;
    recent_fights: RecentFight[];
  };
}

export interface PrelimsAnalysisData {
  hero: PrelimsHeroData;
  comparacao_estatistica: ComparacaoEstatisticaSectionData;
  historico_lutas: PrelimsHistoricoData;
  perfil_habilidades: PerfilHabilidadesSectionData;
  distribuicao_vitorias: DistribuicaoVitoriasSectionData;
  distribuicao_derrotas?: DistribuicaoDerrotasSectionData;
  previsao_final: PrevisaoFinalSectionData;
}

export interface PrelimsAnalise extends Analise {
  prelims_analysis: PrelimsAnalysisData;
  analysis_type: 'prelims';
}

export function isPrelimsAnalise(analise: Analise): analise is PrelimsAnalise {
  return analise.analysis_type === 'prelims'
    && 'prelims_analysis' in analise
    && (analise as PrelimsAnalise).prelims_analysis != null;
}
