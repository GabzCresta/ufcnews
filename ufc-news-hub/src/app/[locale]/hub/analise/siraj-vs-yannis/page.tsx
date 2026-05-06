import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'siraj-vs-yannis',
  evento_id: null,
  slug: 'siraj-vs-yannis',
  titulo: 'Siraj vs Yannis: Debute do Gremlin',
  subtitulo:
    'Jamie "Gremlin" Siraj 14-3 estreia no UFC com cartel solido. John "Juice" Yannis 9-4 descendo pro Galo apos derrota nos Penas. Prospect contra veterano procurando reinventar.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,70m', envergadura: '173cm', idade: 29, academia: 'Regional' }, fighter2: { altura: '1,68m', envergadura: '170cm', idade: 30, academia: 'EUA' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
  fight_prediction: { predictedWinner: 'fighter1', predictedMethod: 'Decisao Unanime', confidence: 'MEDIA', fighter1Scenarios: [], fighter2Scenarios: [], keyFactors: [], xFactor: { title: '', description: '' } },
  fighter1_info: { nome: 'Jamie Siraj', apelido: 'The Gremlin', record: '14-3', ranking: 'UFC Debute', ultimasLutas: [{ result: 'W', opponent: 'Regional', method: 'Decisao', event: 'Regional 2025' }, { result: 'W', opponent: 'Regional', method: 'TKO', event: 'Regional 2024' }, { result: 'W', opponent: 'Regional', method: 'Decisao', event: 'Regional 2024' }] },
  fighter2_info: { nome: 'John Yannis', apelido: 'The Juice', record: '9-4', ranking: 'Fora do top 15', ultimasLutas: [{ result: 'L', opponent: 'UFC debut opponent', method: 'Decisao', event: 'UFC 2025' }, { result: 'W', opponent: 'Regional', method: 'TKO', event: 'Regional 2024' }, { result: 'W', opponent: 'Regional', method: 'Decisao', event: 'Regional 2024' }] },
  evento_nome: 'UFC Fight Night: Burns vs Malott',
  evento_data: '18 de Abril, 2026',
  evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
  categoria_peso: 'Peso Galo (135 lbs)',
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
      categoria_peso: 'Peso Galo (135 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Debute do Gremlin',
      tagline_sub: 'Siraj estreia UFC com 14-3. Yannis descendo de peso apos derrota.',
      fighter1: { nome_completo: 'Jamie "The Gremlin" Siraj', apelido: 'The Gremlin', sobrenome: 'Siraj', record: '14-3', ranking: 'UFC Debute', info_extra: '29 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/SIRAJ_JAMIE_L_04-18.png?itok=F3VZn1zv' },
      fighter2: { nome_completo: 'John "The Juice" Yannis', apelido: 'The Juice', sobrenome: 'Yannis', record: '9-4', ranking: 'Fora do top 15', info_extra: 'EUA | 30 anos', imagem_fullbody_url: null },
    },
    qualitative_insight: {
      tag: 'DEBUTE CONTRA REDEFINICAO',
      headline: 'PROSPECT FRESCO CONTRA VETERANO ESCOLHENDO NOVA DIVISAO',
      insight: 'Siraj entra no UFC com 14-3 e sequencia solida regional. Yannis 0-1 UFC perdendo no debute, desceu pra Galo buscando reinicio. E padrao comum: prospect fresco ganha contra veterano em reposicionamento. Matchmaker desenhou estreia bem-casada.',
      tension: { truth_a: 'Yannis tem luta UFC. Conhece o palco em que Siraj nao pisou.', truth_b: 'Descida de peso pode afetar cardio e poder. Yannis nao tem certeza de como o corpo responde.' },
    },
    momento_atual: {
      fighter1: { nome: 'Jamie Siraj', color: 'red', recent_fights: [{ date: '2025', opponent: 'Regional', result: 'W', method: 'Decisao', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Vitoria regional solida.' }, { date: '2024', opponent: 'Regional', result: 'W', method: 'TKO', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Finish na sequencia.' }, { date: '2024', opponent: 'Regional', result: 'W', method: 'Decisao', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Mais uma.' }], layoff_warning: null, momentum_score: 7, momentum_label: 'Em Alta', momentum_trend: 'ascending', momentum_note: 'Sequencia regional. Cartel 14-3 entra em UFC em momentum positivo.' },
      fighter2: { nome: 'John Yannis', color: 'blue', recent_fights: [{ date: '2025', opponent: 'UFC debut', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Debute UFC. Perdeu cartao nos Penas.' }, { date: '2024', opponent: 'Regional', result: 'W', method: 'TKO', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Finish regional.' }, { date: '2024', opponent: 'Regional', result: 'W', method: 'Decisao', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Regional.' }], layoff_warning: null, momentum_score: 4, momentum_label: 'Em Recuperacao', momentum_trend: 'descending', momentum_note: 'Perdeu debute UFC. Fase de redefinir posicao descendo de peso.' },
    },
    nivel_competicao: {
      fighter1: { nome: 'Jamie Siraj', media_oponentes: 1.3, media_oponentes_label: 'Ruim', aproveitamento: '3V-0D ult 3', contra_top5: '0V-0D' },
      fighter2: { nome: 'John Yannis', media_oponentes: 1.8, media_oponentes_label: 'Ruim a Medio', aproveitamento: '2V-1D ult 3', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Ambos em nivel regional recente. Yannis tem 1 luta UFC como diferencial.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.0, valueB: 3.5, maxVal: 6, format: 'decimal' },
        { label: 'Precisao de Strikes (%)', valueA: 50, valueB: 44, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.0, valueB: 3.8, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 60, valueB: 52, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 1.3, valueB: 0.8, maxVal: 5, format: 'decimal' },
        { label: 'Defesa de Takedown (%)', valueA: 65, valueB: 55, maxVal: 100, format: 'percent' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '29 anos', fighter2: '30 anos' },
        { label: 'Altura', fighter1: '1,70m', fighter2: '1,68m' },
        { label: 'Envergadura', fighter1: '173cm', fighter2: '170cm' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo' },
        { label: 'Academia', fighter1: 'Regional', fighter2: 'EUA' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking', advantage: 'fighter1', gap: 2, note: 'Siraj volume + precisao mais alta.' },
        { label: 'Wrestling', advantage: 'fighter1', gap: 2, note: 'TDs 1.3 vs 0.8.' },
        { label: 'Cardio (Peso Novo)', advantage: 'fighter1', gap: 2, note: 'Yannis descendo peso, incerto.' },
        { label: 'Experiencia UFC', advantage: 'fighter2', gap: 2, note: 'Yannis 1 luta UFC. Siraj estreia.' },
        { label: 'Durabilidade', advantage: 'even', gap: 0, note: 'Sem alertas.' },
      ],
      summary: 'Siraj vantagem em 3 dimensoes tecnicas. Yannis em experiencia UFC. Peso novo do Yannis e variavel desconhecida.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Jamie Siraj', ko_tko: { count: 6, percent: 43 }, submission: { count: 3, percent: 21 }, decision: { count: 5, percent: 36 }, total_wins: 14 },
      fighter2: { nome: 'John Yannis', ko_tko: { count: 4, percent: 44 }, submission: { count: 2, percent: 22 }, decision: { count: 3, percent: 34 }, total_wins: 9 },
      insight: 'Distribuicao quase identica. Ambos finisher moderado. Decisao ou finish tardio sao cenarios mais provaveis.',
    },
    previsao_final: {
      winner_name: 'Jamie Siraj',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime',
      confidence_score: 5,
      confidence_label: 'MEDIA',
      explanation: 'Conviccao 5 porque debute sempre tem variavel alta, e Yannis nao e fraco. Mas Siraj tem vantagens tecnicas + Yannis em peso novo incerto.',
      x_factor: { title: 'Como O Corpo do Yannis Responde', description: 'Primeiro corte pro Galo. Se cardio holding, competitivo. Se nao, Siraj domina R2-R3.' },
      upset_alert: { title: 'Experiencia UFC', description: 'Yannis ja sabe como o palco e. Siraj nunca.' },
      probabilities: { fighter1: { nome: 'Siraj', percent: 54 }, fighter2: { nome: 'Yannis', percent: 42 }, draw: 4 },
      odds: { fighter1_odds: '-130', fighter2_odds: '+110', fighter1_name: 'Jamie Siraj', fighter2_name: 'John Yannis', source: 'Media dos sportsbooks (abril de 2026)' },
      value_picks_v2: { picks: [{ type: 'Moneyline', pick: 'Jamie Siraj', odds: '-130', reasoning: 'Tecnica + momento.' }, { type: 'Rounds Over', pick: 'Over 2.5 rounds', odds: '-110', reasoning: 'Ambos tendem a decisao.' }], best_bet: { pick: 'Siraj moneyline', reasoning: 'Vantagem pequena mas clara.' } },
      key_stats: [{ value: '14-3', label: 'cartel do Siraj pre-UFC', sublabel: 'Momentum solido regional' }, { value: '0-1', label: 'Yannis no UFC', sublabel: 'Descendo de peso buscando reset' }],
      armadilha: { titulo: 'Armadilha: Yannis por finish', descricao: 'Ele perdeu debute e desceu peso. Finish e improvavel nesse contexto.' },
      conviction: {
        thesis: 'A tese e: Jamie Siraj vence porque (1) cartel 14-3 entra em momentum alto, Yannis em 0-1 UFC descendo peso em reset; (2) vantagens tecnicas em volume, wrestling e defesa; (3) peso novo do Yannis e variavel desfavoravel pra cardio de 15 minutos. Caminho e Siraj solta striking cedo, acumula wrestling, explora R2-R3 com cardio saudavel. Desmorona se ansiedade do debute travar ou se Yannis acessar ferramenta UFC que nao apareceu no debute.',
        conviction_score: 5,
        conviction_rationale: 'Conviccao 5 porque vantagens pequenas + ambos em momento de incerteza. Coinflip honesto com edge pro Siraj.',
        conviction_breakers: ['Ansiedade de debute travar Siraj', 'Yannis holding cardio no peso novo', 'Experiencia UFC compensar vantagens tecnicas'],
        underdog_path: { viable: true, probability_estimate: 42, key_scenario: 'Yannis usa experiencia UFC pra ditar ritmo tranquilo, testa nervoso do debute, acumula pontos moderados. Leva cartao em decisao dividida.', required_conditions: ['Cardio segurar em peso novo', 'Paciencia no R1 pra testar debute', 'Conectar R3 com volume final'] },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'siraj-vs-yannis');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
