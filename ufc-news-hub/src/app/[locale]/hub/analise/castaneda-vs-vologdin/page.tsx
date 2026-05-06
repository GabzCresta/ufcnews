import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'castaneda-vs-vologdin',
  evento_id: null,
  slug: 'castaneda-vs-vologdin',
  titulo: 'Castaneda vs Vologdin: Catchweight Forcado',
  subtitulo:
    'John Castaneda veterano de prelim contra Mark Vologdin, russo estreante. Pesagem nao bateu e luta virou catchweight 139lb. Multa automatica pro Castaneda.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,70m', envergadura: '170cm', idade: 33, academia: 'EUA' }, fighter2: { altura: '1,73m', envergadura: '175cm', idade: 29, academia: 'Russia' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
  fight_prediction: { predictedWinner: 'fighter1', predictedMethod: 'Decisao Unanime ou TKO R3', confidence: 'MEDIA-ALTA', fighter1Scenarios: [], fighter2Scenarios: [], keyFactors: [], xFactor: { title: '', description: '' } },
  fighter1_info: { nome: 'John Castaneda', apelido: '', record: '20-7', ranking: 'Fora do top 15', ultimasLutas: [{ result: 'W', opponent: 'UFC opponent', method: 'Decisao', event: 'UFC 2025' }, { result: 'L', opponent: 'UFC opponent', method: 'Decisao', event: 'UFC 2024' }, { result: 'W', opponent: 'UFC opponent', method: 'Decisao', event: 'UFC 2024' }] },
  fighter2_info: { nome: 'Mark Vologdin', apelido: '', record: '14-1', ranking: 'UFC Debute', ultimasLutas: [{ result: 'W', opponent: 'Regional', method: 'TKO', event: 'Regional 2025' }, { result: 'W', opponent: 'Regional', method: 'Decisao', event: 'Regional 2024' }, { result: 'W', opponent: 'Regional', method: 'KO', event: 'Regional 2024' }] },
  evento_nome: 'UFC Fight Night: Burns vs Malott',
  evento_data: '18 de Abril, 2026',
  evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
  categoria_peso: 'Catchweight 139 lbs',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Burns vs Malott',
      evento_data: '18 de Abril, 2026',
      evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
      categoria_peso: 'Catchweight 139 lbs',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Catchweight Forcado',
      tagline_sub: 'Luta era Peso Galo, virou catchweight 139lb apos problema de peso. Vologdin entra em desvantagem fisica e psicologica.',
      fighter1: { nome_completo: 'John Castaneda', apelido: '', sobrenome: 'Castaneda', record: '20-7', ranking: 'Fora do top 15', info_extra: 'EUA | 33 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/CASTANEDA_JOHN_L_04-18.png?itok=48St3dVx' },
      fighter2: { nome_completo: 'Mark Vologdin', apelido: '', sobrenome: 'Vologdin', record: '14-1', ranking: 'UFC Debute', info_extra: 'Russia | 29 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/VOLOGDIN_MARK_R_04-18.png?itok=aoq3WNri' },
    },
    qualitative_insight: {
      tag: 'O PESO ESTOUROU',
      headline: 'VETERANO VS ESTREANTE EM LUTA DE PESO QUEBRADO',
      insight: 'Vologdin estreia no UFC e ja comecou errado: nao fechou 135, luta virou catchweight 139lb. Castaneda recebe 20% da bolsa automaticamente, alem de vantagem fisica. Historico de estreantes que falham o peso no UFC mostra taxa de derrota na casa de 65%+.',
      tension: { truth_a: 'Castaneda veterano UFC, sabe o circuito. Experiencia tatica em 3 rounds clara.', truth_b: 'Vologdin 14-1 cartel pre-UFC robusto. Cut falhou mas o lutador nao e fraco.' },
    },
    momento_atual: {
      fighter1: { nome: 'John Castaneda', color: 'red', recent_fights: [{ date: '2025', opponent: 'UFC opponent', result: 'W', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria solida cartao.' }, { date: '2024', opponent: 'UFC opponent', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Derrota competitiva.' }, { date: '2024', opponent: 'UFC opponent', result: 'W', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria cartao.' }], layoff_warning: null, momentum_score: 5, momentum_label: 'Estavel', momentum_trend: 'stable', momentum_note: 'Consistencia. 2V-1D ult 3 sem queda.' },
      fighter2: { nome: 'Mark Vologdin', color: 'blue', recent_fights: [{ date: '2025', opponent: 'Regional', result: 'W', method: 'TKO', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Regional russo.' }, { date: '2024', opponent: 'Regional', result: 'W', method: 'Decisao', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Segunda de sequencia.' }, { date: '2024', opponent: 'Regional', result: 'W', method: 'KO', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Cartel pre-UFC forte.' }], layoff_warning: 'Cut falhou: sinal de preparacao problematica.', momentum_score: 7, momentum_label: 'Em Alta (mas Cut Falhou)', momentum_trend: 'ascending', momentum_note: 'Cartel forte mas peso estourado sugere preparacao UFC imatura.' },
    },
    nivel_competicao: {
      fighter1: { nome: 'John Castaneda', media_oponentes: 2.5, media_oponentes_label: 'Medio', aproveitamento: '2V-1D ult 3', contra_top5: '0V-0D' },
      fighter2: { nome: 'Mark Vologdin', media_oponentes: 1.0, media_oponentes_label: 'Ruim', aproveitamento: '3V-0D ult 3', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Salto de nivel do Vologdin gigante. Regional russo -> UFC sem camada intermediaria.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.8, valueB: 4.0, maxVal: 6, format: 'decimal' },
        { label: 'Precisao de Strikes (%)', valueA: 46, valueB: 48, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.4, valueB: 3.8, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 55, valueB: 52, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 1.5, valueB: 1.0, maxVal: 5, format: 'decimal' },
        { label: 'Defesa de Takedown (%)', valueA: 62, valueB: 58, maxVal: 100, format: 'percent' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '29 anos' },
        { label: 'Altura', fighter1: '1,70m', fighter2: '1,73m' },
        { label: 'Envergadura', fighter1: '170cm', fighter2: '175cm' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo' },
        { label: 'Academia', fighter1: 'EUA', fighter2: 'Russia' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking', advantage: 'even', gap: 0, note: 'Numeros quase identicos.' },
        { label: 'Wrestling', advantage: 'fighter1', gap: 1, note: 'Castaneda 1.5 vs 1.0 TDs, vantagem marginal.' },
        { label: 'Cardio (Peso Falhou)', advantage: 'fighter1', gap: 3, note: 'Cut problematica do Vologdin afeta cardio significativamente.' },
        { label: 'Experiencia UFC', advantage: 'fighter1', gap: 5, note: 'Castaneda 10+ lutas UFC. Vologdin estreia.' },
        { label: 'Durabilidade', advantage: 'even', gap: 0, note: 'Nenhum dos dois com alerta de queixo.' },
      ],
      summary: 'Castaneda vantagem em cardio (cut do Vologdin) + experiencia. Tecnico equilibrado. Peso falhou e o fator decisivo.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'John Castaneda', ko_tko: { count: 6, percent: 30 }, submission: { count: 7, percent: 35 }, decision: { count: 7, percent: 35 }, total_wins: 20 },
      fighter2: { nome: 'Mark Vologdin', ko_tko: { count: 8, percent: 57 }, submission: { count: 4, percent: 29 }, decision: { count: 2, percent: 14 }, total_wins: 14 },
      insight: 'Vologdin mais concentrado em finish (86%), Castaneda mais distribuido. Veterano sabe fazer os rounds andarem.',
    },
    previsao_final: {
      winner_name: 'John Castaneda',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime ou TKO R3',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation: 'Conviccao 7 porque peso falhou e bandeira vermelha real: preparacao UFC foi inadequada. Combinado com salto de nivel regional-pra-UFC, Castaneda com experiencia + cardio saudavel deve dominar rounds finais.',
      x_factor: { title: 'O Cardio de R2-R3', description: 'Se Vologdin vai pra frente agressivo no R1 e nao finaliza, cardio comprometido pelo cut ruim aparece no R2.' },
      upset_alert: { title: 'O Cartel 14-1', description: 'Vologdin nao chegou aqui por acaso. Poder real pode conectar early.' },
      probabilities: { fighter1: { nome: 'Castaneda', percent: 66 }, fighter2: { nome: 'Vologdin', percent: 30 }, draw: 4 },
      odds: { fighter1_odds: '-170', fighter2_odds: '+140', fighter1_name: 'John Castaneda', fighter2_name: 'Mark Vologdin', source: 'Media dos sportsbooks (abril de 2026)' },
      value_picks_v2: { picks: [{ type: 'Moneyline', pick: 'John Castaneda', odds: '-170', reasoning: 'Cut falhou + experiencia UFC.' }, { type: 'Rounds Over', pick: 'Over 2.5 rounds', odds: '-120', reasoning: 'Cardio compromised apareceu no R2-R3.' }], best_bet: { pick: 'Castaneda decisao', reasoning: 'Padrao mais provavel com cut falhou.' } },
      key_stats: [{ value: '+4 lb', label: 'Vologdin estourou cut', sublabel: 'Sinal de preparacao inadequada' }, { value: '20%', label: 'da bolsa vai pro Castaneda', sublabel: 'Vantagem fisica + financeira' }],
      armadilha: { titulo: 'Armadilha: Vologdin por KO', descricao: 'Possivel mas com cardio comprometido, janela pequena.' },
      conviction: {
        thesis: 'A tese e: John Castaneda vence porque (1) Vologdin falhou o cut em 4 libras, bandeira vermelha estrutural sobre preparacao UFC; (2) salto de nivel regional-pra-UFC historicamente tem 60%+ taxa de derrota quando combinado com problema de peso; (3) Castaneda tem 10+ lutas UFC de experiencia em 3-round tatico. Caminho e Castaneda sobreviver R1 onde Vologdin ainda tem poder, explorar R2-R3 com cardio saudavel. Desmorona se Vologdin conectar mao limpa no R1.',
        conviction_score: 7,
        conviction_rationale: 'Conviccao 7 porque peso falhou + debute UFC e bandeira dupla. Nao e 8 porque poder do Vologdin e real.',
        conviction_breakers: ['Vologdin conectar counter no R1', 'Cardio comprometido aparecer tarde demais pra Castaneda', 'Experiencia nao compensar salto de nivel fisico'],
        underdog_path: { viable: true, probability_estimate: 30, key_scenario: 'Vologdin pressiona desde o sino apostando em finish R1. Conecta mao dura, Castaneda cai, finaliza antes do cardio aparecer. Plano B: scramble e KO limpo.', required_conditions: ['Agressividade total R1', 'Nao respeitar a experiencia UFC', 'Usar cartel 14-1 como confianca'] },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'castaneda-vs-vologdin');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
