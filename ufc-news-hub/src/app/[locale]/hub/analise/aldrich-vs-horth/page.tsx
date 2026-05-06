import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'aldrich-vs-horth',
  evento_id: null,
  slug: 'aldrich-vs-horth',
  titulo: 'Aldrich vs Horth: Veterana Contra Local',
  subtitulo:
    'JJ Aldrich veterana com 10 anos UFC, volume-striker classica. Jamey-Lyn Horth canadense em ascensao, forte no clinch. Crowd factor e geracao.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,65m', envergadura: '165cm', idade: 33, academia: 'Elevation Fight Team' }, fighter2: { altura: '1,68m', envergadura: '170cm', idade: 32, academia: 'Canada' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
  fight_prediction: { predictedWinner: 'fighter2', predictedMethod: 'Decisao Unanime', confidence: 'MEDIA', fighter1Scenarios: [], fighter2Scenarios: [], keyFactors: [], xFactor: { title: '', description: '' } },
  fighter1_info: { nome: 'JJ Aldrich', apelido: '', record: '13-6', ranking: 'Fora do top 15', ultimasLutas: [{ result: 'L', opponent: 'Derrota recente', method: 'Decisao', event: 'UFC 2025' }, { result: 'W', opponent: 'UFC opponent', method: 'Decisao', event: 'UFC 2024' }, { result: 'L', opponent: 'Derrota anterior', method: 'Decisao', event: 'UFC 2024' }] },
  fighter2_info: { nome: 'Jamey-Lyn Horth', apelido: '', record: '8-1', ranking: 'Fora do top 15', ultimasLutas: [{ result: 'W', opponent: 'UFC opponent', method: 'Decisao', event: 'UFC 2025' }, { result: 'W', opponent: 'UFC opponent', method: 'Decisao', event: 'UFC 2024' }, { result: 'L', opponent: 'UFC debut loss', method: 'Decisao', event: 'UFC 2023' }] },
  evento_nome: 'UFC Fight Night: Burns vs Malott',
  evento_data: '18 de Abril, 2026',
  evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
  categoria_peso: 'Peso Mosca Feminino (125 lbs)',
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
      categoria_peso: 'Peso Mosca Feminino (125 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Veterana Contra Local',
      tagline_sub: 'Aldrich UFC veteran vs Horth em home card com momentum.',
      fighter1: { nome_completo: 'JJ Aldrich', apelido: '', sobrenome: 'Aldrich', record: '13-6', ranking: 'Fora do top 15', info_extra: 'EUA | 33 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/ALDRICH_JJ_L_04-18.png?itok=38IhlLJk' },
      fighter2: { nome_completo: 'Jamey-Lyn Horth', apelido: '', sobrenome: 'Horth', record: '8-1', ranking: 'Fora do top 15', info_extra: 'Canada | 32 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/HORTH_JAMEY-LYN_L_12-13.png?itok=X2kiHND-' },
    },
    qualitative_insight: {
      tag: 'GERACAO EM TRANSICAO',
      headline: 'VETERANA TESTADA CONTRA ASCENDENTE EM CASA',
      insight: 'Aldrich tem 10 anos UFC e 13 wins, mas esta 1V-2D nas ultimas tres. Horth em ascensao com 2 wins UFC recentes e crowd home. Padrao de ponte entre geracao veterana e novo ciclo de moscas femininas.',
      tension: { truth_a: 'Aldrich 13-6 cartel UFC solido. Sabe navegar 3 rounds.', truth_b: 'Horth em momentum, home card, padrao de veteranas cedendo terreno pra nomes em ascensao.' },
    },
    momento_atual: {
      fighter1: { nome: 'JJ Aldrich', color: 'red', recent_fights: [{ date: '2025', opponent: 'UFC opponent', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Derrota cartao. Padrao de ceder rounds finais.' }, { date: '2024', opponent: 'UFC opponent', result: 'W', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria solida em rounds.' }, { date: '2024', opponent: 'UFC opponent', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Outra perdida.' }], layoff_warning: null, momentum_score: 4, momentum_label: 'Em Recuperacao', momentum_trend: 'descending', momentum_note: '1V-2D ult 3. Fase de sobrevivencia no roster.' },
      fighter2: { nome: 'Jamey-Lyn Horth', color: 'blue', recent_fights: [{ date: '2025', opponent: 'UFC opponent', result: 'W', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria consolidando posicao.' }, { date: '2024', opponent: 'UFC opponent', result: 'W', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Segunda vitoria UFC.' }, { date: '2023', opponent: 'UFC debut', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Derrota no debute, recuperou nas seguintes.' }], layoff_warning: null, momentum_score: 6, momentum_label: 'Em Ascensao', momentum_trend: 'ascending', momentum_note: '2V consecutivas. Trajectory ascendente.' },
    },
    nivel_competicao: {
      fighter1: { nome: 'JJ Aldrich', media_oponentes: 2.5, media_oponentes_label: 'Medio', aproveitamento: '1V-2D ult 3', contra_top5: '0V-0D' },
      fighter2: { nome: 'Jamey-Lyn Horth', media_oponentes: 2.0, media_oponentes_label: 'Medio', aproveitamento: '2V-0D ult 3', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem overlap direto. Ambas em nivel mid-tier da divisao.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.2, valueB: 3.6, maxVal: 6, format: 'decimal' },
        { label: 'Precisao de Strikes (%)', valueA: 44, valueB: 46, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.8, valueB: 3.0, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 52, valueB: 58, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 1.1, valueB: 1.8, maxVal: 5, format: 'decimal' },
        { label: 'Defesa de Takedown (%)', valueA: 58, valueB: 65, maxVal: 100, format: 'percent' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '32 anos' },
        { label: 'Altura', fighter1: '1,65m', fighter2: '1,68m' },
        { label: 'Envergadura', fighter1: '165cm', fighter2: '170cm' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo' },
        { label: 'Academia', fighter1: 'Elevation', fighter2: 'Canada' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume Striking', advantage: 'fighter1', gap: 1, note: 'Aldrich marginalmente mais volume.' },
        { label: 'Clinch e Wrestling', advantage: 'fighter2', gap: 3, note: 'Horth 1.8 vs 1.1 TDs. Estilo mais pesado.' },
        { label: 'Cardio', advantage: 'fighter2', gap: 2, note: 'Ascendente + frescor do Horth.' },
        { label: 'Home Crowd', advantage: 'fighter2', gap: 2, note: 'Winnipeg card eleva.' },
        { label: 'Experiencia UFC', advantage: 'fighter1', gap: 3, note: 'Aldrich 10 anos UFC.' },
      ],
      summary: 'Horth vantagem em clinch, cardio, crowd. Aldrich em volume e experiencia. Horth soma mais pra vencer.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'JJ Aldrich', ko_tko: { count: 2, percent: 15 }, submission: { count: 1, percent: 8 }, decision: { count: 10, percent: 77 }, total_wins: 13 },
      fighter2: { nome: 'Jamey-Lyn Horth', ko_tko: { count: 3, percent: 38 }, submission: { count: 1, percent: 12 }, decision: { count: 4, percent: 50 }, total_wins: 8 },
      insight: 'Aldrich vive de decisao 77%. Horth mais balanceado. Ambas historicamente levam ao cartao.',
    },
    previsao_final: {
      winner_name: 'Jamey-Lyn Horth',
      winner_side: 'fighter2',
      predicted_method: 'Decisao Unanime',
      confidence_score: 6,
      confidence_label: 'MEDIA',
      explanation: 'Conviccao 6 porque Horth soma pequenas vantagens em multiplas dimensoes + home card, mas Aldrich tem ferramenta UFC pra manter luta competitiva.',
      x_factor: { title: 'O Volume Inicial', description: 'Aldrich 4.2 SLpM pode acumular pontos se pegar ritmo. Horth precisa neutralizar via clinch.' },
      upset_alert: { title: 'A Veterana', description: 'Aldrich em luta de contrato pode acessar reserva tatica.' },
      probabilities: { fighter1: { nome: 'Aldrich', percent: 38 }, fighter2: { nome: 'Horth', percent: 58 }, draw: 4 },
      odds: { fighter1_odds: '+125', fighter2_odds: '-150', fighter1_name: 'JJ Aldrich', fighter2_name: 'Jamey-Lyn Horth', source: 'Media dos sportsbooks (abril de 2026)' },
      value_picks_v2: { picks: [{ type: 'Moneyline', pick: 'Jamey-Lyn Horth', odds: '-150', reasoning: 'Home card + trajectory.' }, { type: 'Rounds Over', pick: 'Over 2.5 rounds', odds: '-300', reasoning: 'Ambas levam ao cartao.' }], best_bet: { pick: 'Horth decisao', reasoning: 'Padrao claro.' } },
      key_stats: [{ value: '2V-0D', label: 'sequencia do Horth UFC', sublabel: 'Trajectory ascendente' }, { value: '77%', label: 'wins por decisao da Aldrich', sublabel: 'Vai pra 3 rounds sempre' }],
      armadilha: { titulo: 'Armadilha: Aldrich por finalizacao', descricao: 'Rarissimo. Nao aposte.' },
      conviction: {
        thesis: 'A tese e: Jamey-Lyn Horth vence porque (1) home card em Winnipeg com crowd canadense eleva performance; (2) vantagem em clinch e wrestling (1.8 vs 1.1 TDs/15min) neutraliza striking da Aldrich; (3) trajectory ascendente (2V consecutivas UFC) vs Aldrich em 1V-2D. Caminho e Horth forcar clinch, empurrar na grade, acumular posicoes dominantes pra cartao. Desmorona se Aldrich sustentar striking a distancia por 15 minutos sem cair no clinch.',
        conviction_score: 6,
        conviction_rationale: 'Conviccao 6 porque vantagens sao multiplas mas pequenas. Aldrich veterana ainda tem ferramenta real.',
        conviction_breakers: ['Aldrich sustentar volume distancia', 'Horth travar em pressao de performar em casa', 'Veterana acessar plano B tatico'],
        underdog_path: { viable: true, probability_estimate: 38, key_scenario: 'Aldrich joga fora do clinch, volume alto distancia, acumula pontos no R3. Experiencia UFC de 10 anos fecha cartao.', required_conditions: ['Negar clinch primeiros 90s', 'Sustentar 4+ SLpM', 'Finalizar R3 no mesmo ritmo'] },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'aldrich-vs-horth');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
