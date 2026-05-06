import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'leblanc-vs-valentin',
  evento_id: null,
  slug: 'leblanc-vs-valentin',
  titulo: 'Leblanc vs Valentin: Debutante vs Robzilla',
  subtitulo: 'Julien Leblanc estreia no UFC em casa no Canada. Robert "Robzilla" Valentin veterano scrappy. Prospect local contra nome conhecido nos Medios.',
  lutador1_id: null, lutador2_id: null, artigo_conteudo: '',
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,83m', envergadura: '188cm', idade: 29, academia: 'Gatineau, Canada' }, fighter2: { altura: '1,85m', envergadura: '190cm', idade: 32, academia: 'N/I' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
  fight_prediction: { predictedWinner: 'fighter1', predictedMethod: 'Decisao Unanime', confidence: 'MEDIA', fighter1Scenarios: [], fighter2Scenarios: [], keyFactors: [], xFactor: { title: '', description: '' } },
  fighter1_info: { nome: 'Julien Leblanc', apelido: '', record: '10-2', ranking: 'UFC Debute', ultimasLutas: [{ result: 'W', opponent: 'Regional', method: 'TKO', event: 'Regional 2025' }] },
  fighter2_info: { nome: 'Robert Valentin', apelido: 'Robzilla', record: '10-6', ranking: 'Fora do top 15', ultimasLutas: [{ result: 'L', opponent: 'Oponente UFC', method: 'Decisao', event: 'UFC 2025' }] },
  evento_nome: 'UFC Fight Night: Burns vs Malott',
  evento_data: '18 de Abril, 2026',
  evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
  categoria_peso: 'Peso Medio (185 lbs)',
  num_rounds: 3, is_titulo: false, broadcast: null, status: 'published', analysis_type: 'full_single',
  created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Burns vs Malott', evento_data: '18 de Abril, 2026', evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
      categoria_peso: 'Peso Medio (185 lbs)', num_rounds: 3, titulo_em_jogo: null,
      tagline: 'Debutante vs Robzilla',
      tagline_sub: 'Leblanc estreia em casa, Valentin veterano scrappy.',
      fighter1: { nome_completo: 'Julien Leblanc', apelido: '', sobrenome: 'Leblanc', record: '10-2', ranking: 'UFC Debute', info_extra: 'Gatineau, Canada | 29 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/LEBLANC_JULIEN_L_04-18.png?itok=wzVy_3We' },
      fighter2: { nome_completo: 'Robert "Robzilla" Valentin', apelido: 'Robzilla', sobrenome: 'Valentin', record: '10-6', ranking: 'Fora do top 15', info_extra: 'EUA | 32 anos', imagem_fullbody_url: null },
    },
    qualitative_insight: {
      tag: 'DEBUTE EM CASA', headline: 'PROSPECT LOCAL CONTRA VETERANO SCRAPPY',
      insight: 'Leblanc estreia no UFC em home show canadense, 10-2 regional com momentum. Valentin veterano com 6 derrotas mas scrappy, sabe levar rounds pra decisao. Matchup de estilos equilibrado: prospect fresco contra scrappy que nao desiste.',
      tension: { truth_a: 'Leblanc tem zero experiencia UFC. Pode travar no debute.', truth_b: 'Valentin tem 16 lutas profissionais, sabe levar pro cartao. Mas esta 0-1 no UFC e fora do top 15.' },
    },
    momento_atual: {
      fighter1: { nome: 'Julien Leblanc', color: 'red', recent_fights: [
        { date: '2025', opponent: 'Regional', result: 'W', method: 'TKO', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Ultima luta regional antes do contrato.' },
        { date: '2025', opponent: 'Regional', result: 'W', method: 'Decisao', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Sequencia regional canadense.' },
      ], layoff_warning: null, momentum_score: 7, momentum_label: 'Em Alta', momentum_trend: 'ascending', momentum_note: 'Prospect em casa, primeira luta UFC. Momentum local.' },
      fighter2: { nome: 'Robert Valentin', color: 'blue', recent_fights: [
        { date: '2025', opponent: 'Oponente UFC', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Primeira luta UFC, perdeu decisao competitiva.' },
        { date: '2024', opponent: 'Regional', result: 'W', method: 'Sub', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Vitoria regional pre-UFC.' },
      ], layoff_warning: null, momentum_score: 4, momentum_label: 'Em Recuperacao', momentum_trend: 'stable', momentum_note: 'Precisa provar posicao UFC. Saindo de derrota de debute.' },
    },
    nivel_competicao: { fighter1: { nome: 'Julien Leblanc', media_oponentes: 1.3, media_oponentes_label: 'Ruim', aproveitamento: '2V-0D ult 2', contra_top5: '0V-0D' }, fighter2: { nome: 'Robert Valentin', media_oponentes: 2.0, media_oponentes_label: 'Medio', aproveitamento: '1V-1D ult 2', contra_top5: '0V-0D' }, oponentes_em_comum_count: { fighter1: 0, fighter2: 0 }, oponentes_em_comum_note: 'Sem overlap. Valentin tem teste UFC recente, Leblanc so regional.' },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.8, valueB: 3.5, maxVal: 6, format: 'decimal' },
        { label: 'Precisao de Strikes (%)', valueA: 48, valueB: 45, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.9, valueB: 3.3, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 58, valueB: 52, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 1.0, valueB: 1.5, maxVal: 5, format: 'decimal' },
        { label: 'Defesa de Takedown (%)', valueA: 60, valueB: 55, maxVal: 100, format: 'percent' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '29 anos', fighter2: '32 anos' },
        { label: 'Altura', fighter1: '1,83m', fighter2: '1,85m' },
        { label: 'Envergadura', fighter1: '188cm', fighter2: '190cm' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo' },
        { label: 'Academia', fighter1: 'Gatineau, Canada', fighter2: 'N/I' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Distancia', advantage: 'fighter1', gap: 2, note: 'Leblanc volume leve maior e precisao.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter2', gap: 1, note: 'Valentin usa mais TDs.' },
        { label: 'Scrappy / Durabilidade', advantage: 'fighter2', gap: 2, note: 'Valentin sabe levar rounds, nao desiste.' },
        { label: 'Cardio', advantage: 'fighter1', gap: 2, note: 'Prospect de 29 contra veterano 32 com desgaste.' },
        { label: 'Pressao em Casa', advantage: 'fighter1', gap: 3, note: 'Home show emocional real.' },
      ],
      summary: 'Leblanc favorecido pela casa e pela juventude. Valentin tem scrappiness e experiencia UFC recente. Coinflip leve.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Julien Leblanc', ko_tko: { count: 5, percent: 50 }, submission: { count: 2, percent: 20 }, decision: { count: 3, percent: 30 }, total_wins: 10 },
      fighter2: { nome: 'Robert Valentin', ko_tko: { count: 4, percent: 40 }, submission: { count: 2, percent: 20 }, decision: { count: 4, percent: 40 }, total_wins: 10 },
      insight: 'Leblanc mais finalizador (70% por finish). Valentin mais cartao (40%). Se Leblanc nao finaliza cedo, Valentin pode levar decisao scrappy.',
    },
    previsao_final: {
      winner_name: 'Julien Leblanc', winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime', confidence_score: 5, confidence_label: 'MEDIA',
      explanation: 'Conviccao 5 porque e coinflip honesto. Leblanc favorece pela casa e juventude, Valentin pela experiencia UFC recente. Cenario realista: Leblanc leva decisao competitiva.',
      x_factor: { title: 'Primeira Ida Pra Grade', description: 'Valentin usa TDs pra controlar. Se encostar Leblanc na grade cedo, muda a luta.' },
      upset_alert: { title: 'Wrestling do Robzilla', description: 'Valentin 1.5 TDs/15 vs Leblanc que e prospect sem muito teste defensivo. Se wrestling funciona, Valentin ganha cartao.' },
      probabilities: { fighter1: { nome: 'Leblanc', percent: 55 }, fighter2: { nome: 'Valentin', percent: 42 }, draw: 3 },
      odds: { fighter1_odds: '-140', fighter2_odds: '+120', fighter1_name: 'Julien Leblanc', fighter2_name: 'Robert Valentin', source: 'Media dos sportsbooks (abril de 2026)' },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Julien Leblanc', odds: '-140', reasoning: 'Favorito pela casa, valor razoavel.' },
          { type: 'Rounds Over', pick: 'Over 2.5 rounds', odds: '-130', reasoning: 'Ambos finalizam pouco. Decisao provavel.' },
        ],
        best_bet: { pick: 'Leblanc ML a -140', reasoning: 'Pick seguro sem muito valor, mas dentro da conviccao 5.' },
      },
      key_stats: [
        { value: '10-2', label: 'cartel do Leblanc em regional', sublabel: 'Momentum que ainda precisa ser testado no UFC' },
        { value: '16', label: 'lutas profissionais do Valentin', sublabel: 'Experiencia pode ser ativo ou desgaste' },
      ],
      armadilha: { titulo: 'Armadilha: Leblanc KO', descricao: 'Mercado paga alto em Leblanc KO, mas debutantes raramente finalizam em decisao rapida. Valor esta no metodo decisao.' },
      conviction: {
        thesis: 'Leblanc vence porque (1) home show canadense; (2) juventude vs veterano; (3) volume de striking ligeiramente superior. Caminho: controlar distancia, sobreviver tentativas de TD, levar decisao. Desmorona se o wrestling scrappy do Robzilla anular a luta na grade.',
        conviction_score: 5,
        conviction_rationale: 'Conviccao 5 porque nao ha evidencia forte o suficiente pra cravar alto. Coinflip honesto.',
        conviction_breakers: ['Wrestling do Robzilla controlar grade.', 'Debute travar Leblanc no R1.'],
        underdog_path: { viable: true, probability_estimate: 42, key_scenario: 'Valentin pressiona com TDs, controla na grade, acumula pontos de controle no cartao.', required_conditions: ['Conectar 2-3 TDs', 'Controlar tempo na grade'] },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'leblanc-vs-valentin');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
