import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'croden-vs-zheleznyakova',
  evento_id: null,
  slug: 'croden-vs-zheleznyakova',
  titulo: 'Croden vs Zheleznyakova: Clinch vs Espaco',
  subtitulo: 'Melissa "Scare" Croden em casa, forca clinch + TDs + Muay Thai. Darya "Iron Lady" Zheleznyakova prefere distancia, precisa impedir grade.',
  lutador1_id: null, lutador2_id: null, artigo_conteudo: '',
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,68m', envergadura: '170cm', idade: 33, academia: 'Nova Escocia' }, fighter2: { altura: '1,65m', envergadura: '168cm', idade: 29, academia: 'Russia' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
  fight_prediction: { predictedWinner: 'fighter1', predictedMethod: 'Decisao Unanime (clinch + TDs)', confidence: 'MEDIA', fighter1Scenarios: [], fighter2Scenarios: [], keyFactors: [], xFactor: { title: '', description: '' } },
  fighter1_info: { nome: 'Melissa Croden', apelido: 'Scare', record: '7-3', ranking: 'Fora do top 15', ultimasLutas: [{ result: 'L', opponent: 'Luana Santos', method: 'Decisao', event: 'UFC 2025' }] },
  fighter2_info: { nome: 'Darya Zheleznyakova', apelido: 'Iron Lady', record: '10-2', ranking: 'Fora do top 15', ultimasLutas: [{ result: 'W', opponent: 'Oponente UFC', method: 'Decisao', event: 'UFC 2025' }] },
  evento_nome: 'UFC Fight Night: Burns vs Malott',
  evento_data: '18 de Abril, 2026',
  evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
  categoria_peso: 'Peso Galo Feminino (135 lbs)',
  num_rounds: 3, is_titulo: false, broadcast: null, status: 'published', analysis_type: 'full_single',
  created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Burns vs Malott', evento_data: '18 de Abril, 2026', evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
      categoria_peso: 'Peso Galo Feminino (135 lbs)', num_rounds: 3, titulo_em_jogo: null,
      tagline: 'Clinch vs Espaco',
      tagline_sub: 'Croden em casa com Muay Thai no clinch. Zheleznyakova precisa do espaco pra brilhar.',
      fighter1: { nome_completo: 'Melissa "Scare" Croden', apelido: 'Scare', sobrenome: 'Croden', record: '7-3', ranking: 'Fora do top 15', info_extra: 'Nova Escocia, Canada | 33 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-10/CRODEN_MELISSA_L_10-18.png?itok=mziAwXwc' },
      fighter2: { nome_completo: 'Darya "Iron Lady" Zheleznyakova', apelido: 'Iron Lady', sobrenome: 'Zheleznyakova', record: '10-2', ranking: 'Fora do top 15', info_extra: 'Russia | 29 anos', imagem_fullbody_url: null },
    },
    qualitative_insight: {
      tag: 'O ESPACO CONTROLADO', headline: 'CLINCH CONSTANTE CONTRA ESTILO DE DISTANCIA',
      insight: 'Croden luta no clinch: forca grade, Muay Thai curto, TDs de controle. Zheleznyakova prefere distancia, striking de espaco, boxing. O matchup resolve em quem impoe o territorio. Croden em casa, com torcida atras, tem vantagem emocional pra pressionar.',
      tension: { truth_a: 'Zheleznyakova e tecnicamente mais refinada em distancia. Se mantiver espaco, castiga.', truth_b: 'Croden e 2-1 UFC nao por acaso: o clinch canadense dela e arma real quando encosta a adversaria na grade.' },
    },
    momento_atual: {
      fighter1: { nome: 'Melissa Croden', color: 'red', recent_fights: [
        { date: '2025', opponent: 'Luana Santos', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Derrota competitiva. Santos anulou o clinch dela.' },
        { date: '2024', opponent: 'Oponente UFC', result: 'W', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria em home show anterior. Mesmo plano clinch + TDs.' },
      ], layoff_warning: null, momentum_score: 4, momentum_label: 'Em Recuperacao', momentum_trend: 'stable', momentum_note: 'Precisa voltar em casa. Perdeu ultima mas competitiva.' },
      fighter2: { nome: 'Darya Zheleznyakova', color: 'blue', recent_fights: [
        { date: '2025', opponent: 'Oponente UFC', result: 'W', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: '2-1 UFC. Controlou distancia e venceu UD.' },
        { date: '2024', opponent: 'Oponente anterior', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Perdeu quando foi forcada pro clinch.' },
      ], layoff_warning: null, momentum_score: 6, momentum_label: 'Estavel', momentum_trend: 'stable', momentum_note: '2-1 UFC, padrao ja conhecido.' },
    },
    nivel_competicao: { fighter1: { nome: 'Melissa Croden', media_oponentes: 2.5, media_oponentes_label: 'Medio', aproveitamento: '1V-1D ult 2', contra_top5: '0V-0D' }, fighter2: { nome: 'Darya Zheleznyakova', media_oponentes: 2.0, media_oponentes_label: 'Medio', aproveitamento: '1V-1D ult 2', contra_top5: '0V-0D' }, oponentes_em_comum_count: { fighter1: 0, fighter2: 0 }, oponentes_em_comum_note: 'Sem overlap direto. Ambas em zona mid-tier.' },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.2, valueB: 4.0, maxVal: 6, format: 'decimal' },
        { label: 'Precisao de Strikes (%)', valueA: 45, valueB: 48, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.8, valueB: 3.2, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 50, valueB: 55, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 2.5, valueB: 0.4, maxVal: 5, format: 'decimal', note: 'Croden e wrestle-clinch. Zheleznyakova nao usa TD.' },
        { label: 'Defesa de Takedown (%)', valueA: 55, valueB: 50, maxVal: 100, format: 'percent' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '29 anos' },
        { label: 'Altura', fighter1: '1,68m', fighter2: '1,65m' },
        { label: 'Envergadura', fighter1: '170cm', fighter2: '168cm' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo' },
        { label: 'Academia', fighter1: 'Nova Escocia', fighter2: 'Russia' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Distancia', advantage: 'fighter2', gap: 3, note: 'Zheleznyakova e boxer de distancia.' },
        { label: 'Clinch e Grade', advantage: 'fighter1', gap: 4, note: 'Croden vive no clinch com Muay Thai. Zheleznyakova evita grade.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter1', gap: 3, note: '2.5 TDs/15min contra 0.4. Diferenca real.' },
        { label: 'Cardio em 3 rounds', advantage: 'even', gap: 0, note: 'Ambas testadas.' },
        { label: 'Pressao em Casa', advantage: 'fighter1', gap: 2, note: 'Croden em home show nova escocia, conforto emocional.' },
      ],
      summary: 'Croden tem vantagem em 3 dimensoes incluindo as que decidem o matchup (clinch + wrestling). Zheleznyakova precisa manter espaco perfeito.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Melissa Croden', ko_tko: { count: 2, percent: 29 }, submission: { count: 1, percent: 14 }, decision: { count: 4, percent: 57 }, total_wins: 7 },
      fighter2: { nome: 'Darya Zheleznyakova', ko_tko: { count: 4, percent: 40 }, submission: { count: 2, percent: 20 }, decision: { count: 4, percent: 40 }, total_wins: 10 },
      insight: 'Ambas levam 40-57% por decisao. Croden mais previsivel de ir pro cartao. Se nao finaliza, Croden tem historico mais consistente.',
    },
    previsao_final: {
      winner_name: 'Melissa Croden', winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime (clinch + controle)', confidence_score: 6, confidence_label: 'MEDIA',
      explanation: 'Conviccao 6 porque o matchup estilistico + home show favorecem Croden. Zheleznyakova pode castigar em distancia, mas Croden tende a forcar clinch repetidamente ate grudar no plano.',
      x_factor: { title: 'Os 30 Segundos Iniciais', description: 'Se Croden encostar cedo e puxar pra grade, Zheleznyakova precisa girar e voltar ao centro. Esse movimento repete-se.' },
      upset_alert: { title: 'Distancia Perfeita', description: 'Se Zheleznyakova conseguir jab + teep em distancia ideal por 3 rounds inteiros, Croden nao entra na grade e Zheleznyakova acumula pontos.' },
      probabilities: { fighter1: { nome: 'Croden', percent: 58 }, fighter2: { nome: 'Zheleznyakova', percent: 38 }, draw: 4 },
      odds: { fighter1_odds: '-155', fighter2_odds: '+135', fighter1_name: 'Melissa Croden', fighter2_name: 'Darya Zheleznyakova', source: 'Media dos sportsbooks (abril de 2026)' },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Melissa Croden', odds: '-155', reasoning: 'Casa + matchup favorecem.' },
          { type: 'Metodo', pick: 'Croden por decisao', odds: '+110', reasoning: '57% das vitorias por cartao, padrao consistente.' },
        ],
        best_bet: { pick: 'Croden por decisao a +110', reasoning: 'Valor melhor que ML, coerente com conviccao 6.' },
      },
      key_stats: [
        { value: '2.5', label: 'TDs por 15min da Croden', sublabel: 'Contra 0.4 da Zheleznyakova, diferenca clara' },
        { value: 'Home', label: 'show pra Croden em Nova Escocia', sublabel: 'Ativo emocional real' },
      ],
      armadilha: { titulo: 'Armadilha: Zheleznyakova KO', descricao: 'Mercado paga alto, mas Zheleznyakova raramente finaliza por KO quando nao esta em ritmo perfeito.' },
      conviction: {
        thesis: 'Croden vence porque (1) matchup estilistico favorece clinch + wrestling dela; (2) home show Nova Escocia; (3) Zheleznyakova ja perdeu quando forcada pra clinch. Desmorona se Zheleznyakova sustentar distancia perfeita por 15 minutos.',
        conviction_score: 6,
        conviction_rationale: 'Conviccao 6 porque o matchup e claro mas Zheleznyakova tem ferramentas pra sustentar distancia se bem executado.',
        conviction_breakers: ['Zheleznyakova sustentar distancia perfeita.', 'Croden cair em um counter limpo no centro.'],
        underdog_path: { viable: true, probability_estimate: 38, key_scenario: 'Zheleznyakova usa jab + teep pra manter Croden fora do clinch, acumula pontos no cartao por volume limpo.', required_conditions: ['Negar 80% das entradas de clinch', 'Manter ritmo de striking em distancia'] },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'croden-vs-zheleznyakova');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
