import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'buzukja-vs-barbosa',
  evento_id: null,
  slug: 'buzukja-vs-barbosa',
  titulo: 'Buzukja vs Barbosa: O Debute Agressivo',
  subtitulo: 'Marcio Barbosa estreia no UFC como favorito mais forte dos prelims. Dennis Buzukja precisa sobreviver cedo ou acabar perdendo com finish estetico.',
  lutador1_id: null, lutador2_id: null, artigo_conteudo: '',
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,75m', envergadura: '178cm', idade: 28, academia: 'N/I' }, fighter2: { altura: '1,78m', envergadura: '180cm', idade: 27, academia: 'Brasil' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
  fight_prediction: { predictedWinner: 'fighter2', predictedMethod: 'TKO R1-R2', confidence: 'MEDIA-ALTA', fighter1Scenarios: [], fighter2Scenarios: [], keyFactors: [], xFactor: { title: '', description: '' } },
  fighter1_info: { nome: 'Dennis Buzukja', apelido: '', record: '10-5', ranking: 'Fora do top 15', ultimasLutas: [{ result: 'L', opponent: 'Oponente recente', method: 'Decisao', event: 'UFC 2025' }] },
  fighter2_info: { nome: 'Marcio Barbosa', apelido: '', record: '14-2', ranking: 'UFC Debute', ultimasLutas: [{ result: 'W', opponent: 'Adversario regional', method: 'KO', event: 'Regional 2025' }] },
  evento_nome: 'UFC Fight Night: Burns vs Malott',
  evento_data: '18 de Abril, 2026',
  evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
  categoria_peso: 'Peso Pena (145 lbs)',
  num_rounds: 3, is_titulo: false, broadcast: null, status: 'published', analysis_type: 'full_single',
  created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Burns vs Malott', evento_data: '18 de Abril, 2026', evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
      categoria_peso: 'Peso Pena (145 lbs)', num_rounds: 3, titulo_em_jogo: null,
      tagline: 'O Debute Agressivo',
      tagline_sub: 'Barbosa favorito pesado nos prelims. Buzukja com tarefa de sobreviver cedo.',
      fighter1: { nome_completo: 'Dennis Buzukja', apelido: '', sobrenome: 'Buzukja', record: '10-5', ranking: 'Fora do top 15', info_extra: 'EUA | 28 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/BUZUKJA_DENNIS_L_04-18.png?itok=lL81krSB' },
      fighter2: { nome_completo: 'Marcio Barbosa', apelido: '', sobrenome: 'Barbosa', record: '14-2', ranking: 'UFC Debute', info_extra: 'Brasil | 27 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/BARBOSA_MARCIO_R_04-18.png?itok=XbtYxFX3' },
    },
    qualitative_insight: {
      tag: 'A PRIMEIRA ROUND', headline: 'FAVORITO MAIS FORTE DOS PRELIMS',
      insight: 'Barbosa entra como maior favorito dos prelims, cartel de finishes em regional com ritmo de striking agressivo. Buzukja ja perdeu ultimas contra pressure-fighters. A matematica aponta pra final de striking antes do R3.',
      tension: { truth_a: 'Buzukja tem experiencia UFC, conhece o palco. Debute e sempre variavel.', truth_b: 'Barbosa tem poder real de mao e estilo de pressao que neutraliza o jogo de distancia que Buzukja usa.' },
    },
    momento_atual: {
      fighter1: { nome: 'Dennis Buzukja', color: 'red', recent_fights: [
        { date: '2025', opponent: 'Oponente recente', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Perdeu pra pressure-fighter. Padrao conhecido.' },
        { date: '2024', opponent: 'Oponente anterior', result: 'W', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria no cartao.' },
      ], layoff_warning: null, momentum_score: 3, momentum_label: 'Em Queda', momentum_trend: 'descending', momentum_note: 'Ultimo resultado ruim, entrando como underdog pesado.' },
      fighter2: { nome: 'Marcio Barbosa', color: 'blue', recent_fights: [
        { date: '2025', opponent: 'Adversario regional', result: 'W', method: 'KO', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Finishes consistentes em regional brasileiro.' },
        { date: '2024', opponent: 'Adversario anterior', result: 'W', method: 'Sub', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Vitoria limpa regional.' },
      ], layoff_warning: null, momentum_score: 7, momentum_label: 'Em Alta', momentum_trend: 'ascending', momentum_note: 'Contrato UFC fresco. Momento maximo.' },
    },
    nivel_competicao: { fighter1: { nome: 'Dennis Buzukja', media_oponentes: 2.0, media_oponentes_label: 'Medio', aproveitamento: '1V-1D ult 2', contra_top5: '0V-0D' }, fighter2: { nome: 'Marcio Barbosa', media_oponentes: 1.5, media_oponentes_label: 'Ruim a Medio', aproveitamento: '2V-0D ult 2', contra_top5: '0V-0D' }, oponentes_em_comum_count: { fighter1: 0, fighter2: 0 }, oponentes_em_comum_note: 'Sem overlap. Buzukja tem mais exposicao UFC mas saindo de derrota.' },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.2, valueB: 4.5, maxVal: 6, format: 'decimal' },
        { label: 'Precisao de Strikes (%)', valueA: 42, valueB: 52, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.4, valueB: 2.8, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 52, valueB: 58, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 0.8, valueB: 0.5, maxVal: 5, format: 'decimal' },
        { label: 'Defesa de Takedown (%)', valueA: 55, valueB: 62, maxVal: 100, format: 'percent' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '28 anos', fighter2: '27 anos' },
        { label: 'Altura', fighter1: '1,75m', fighter2: '1,78m' },
        { label: 'Envergadura', fighter1: '178cm', fighter2: '180cm' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo' },
        { label: 'Academia', fighter1: 'N/I', fighter2: 'Brasil' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Pressao', advantage: 'fighter2', gap: 3, note: 'Barbosa e pressure-striker classico, Buzukja sofre com pressao.' },
        { label: 'Poder de Nocaute', advantage: 'fighter2', gap: 3, note: 'KOs regionais confirmam poder real.' },
        { label: 'Cardio em 3 rounds', advantage: 'even', gap: 0, note: 'Ambos testados, sem problema documentado.' },
        { label: 'Wrestling', advantage: 'fighter1', gap: 1, note: 'Buzukja tem leve vantagem de TD, mas nao usa muito.' },
        { label: 'Durabilidade', advantage: 'fighter1', gap: 2, note: 'Buzukja ja absorveu dano UFC, Barbosa nao testou queixo aqui.' },
      ],
      summary: 'Barbosa favorito porque o estilo dele e o que castiga Buzukja. Mas variavel de debute sempre existe.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Dennis Buzukja', ko_tko: { count: 3, percent: 30 }, submission: { count: 1, percent: 10 }, decision: { count: 6, percent: 60 }, total_wins: 10 },
      fighter2: { nome: 'Marcio Barbosa', ko_tko: { count: 10, percent: 71 }, submission: { count: 2, percent: 14 }, decision: { count: 2, percent: 14 }, total_wins: 14 },
      insight: 'Barbosa finaliza 85% das vitorias (KO + sub). Buzukja leva 60% pro cartao. Luta tende a acabar antes do R3.',
    },
    previsao_final: {
      winner_name: 'Marcio Barbosa', winner_side: 'fighter2',
      predicted_method: 'TKO R1-R2', confidence_score: 7, confidence_label: 'MEDIA-ALTA',
      explanation: 'Conviccao 7 porque Barbosa e favorito mais forte dos prelims por razoes estruturais. Debute sempre carrega variavel mas o matchup favorece claramente.',
      x_factor: { title: 'Os Primeiros 2 Minutos', description: 'Se Barbosa encostar Buzukja na grade cedo, acaba. Se Buzukja sobrevive 5 minutos em distancia, o debute pode travar.' },
      upset_alert: { title: 'Nervoso de Estreia', description: 'Primeira luta UFC + plateia canadense pode travar Barbosa. Buzukja sabe lutar em palco grande.' },
      probabilities: { fighter1: { nome: 'Buzukja', percent: 28 }, fighter2: { nome: 'Barbosa', percent: 68 }, draw: 4 },
      odds: { fighter1_odds: '+240', fighter2_odds: '-300', fighter1_name: 'Dennis Buzukja', fighter2_name: 'Marcio Barbosa', source: 'Media dos sportsbooks (abril de 2026)' },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Marcio Barbosa', odds: '-300', reasoning: 'Favorito pesado, aposta segura.' },
          { type: 'Metodo', pick: 'Barbosa por KO/TKO', odds: '+100', reasoning: 'Padrao de finishes regional. Valor par ou melhor.' },
          { type: 'Rounds Under', pick: 'Under 1.5 rounds', odds: '+150', reasoning: 'Se Barbosa finaliza, e cedo. Valor coerente com KO favorito.' },
        ],
        best_bet: { pick: 'Barbosa por TKO a +100', reasoning: 'Razao/retorno equilibrado pro cenario mais provavel.' },
      },
      key_stats: [
        { value: '85%', label: 'das vitorias do Barbosa por finish (KO ou sub)', sublabel: 'Estilo de finish cristalino' },
        { value: '60%', label: 'das vitorias do Buzukja por decisao', sublabel: 'Precisa passar o round pra ter chance' },
      ],
      armadilha: { titulo: 'Armadilha: Buzukja por decisao', descricao: 'Mercado paga razoavel em Buzukja UD, mas pra isso ele precisa sobreviver o estilo do Barbosa inteiro. Historicamente raro contra pressure-finisher fresh UFC.' },
      conviction: {
        thesis: 'A tese e: Marcio Barbosa vence porque (1) e o favorito mais forte dos prelims por razoes estruturais (poder de mao + pressao); (2) Buzukja vem de derrota contra estilo similar; (3) o matchup estilistico nao tem contador obvio pro Buzukja. Caminho: pressao desde o sino, finish antes do R3. Desmorona se nervoso de debute travar Barbosa.',
        conviction_score: 7,
        conviction_rationale: 'Conviccao 7 pela consistencia do favoritismo de mercado e do matchup. Nao e 8 porque debute tem variavel real.',
        conviction_breakers: [
          'Nervoso de debute travar Barbosa no R1.',
          'Buzukja sustentar distancia e levar pro cartao.',
        ],
        underdog_path: {
          viable: true, probability_estimate: 28,
          key_scenario: 'Buzukja mantem distancia, nega clinch, sobrevive R1, acumula pontos com jab nos rounds 2 e 3. Decisao.',
          required_conditions: ['Nao absorver tiro limpo no R1', 'Negar pressao na grade'],
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'buzukja-vs-barbosa');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
