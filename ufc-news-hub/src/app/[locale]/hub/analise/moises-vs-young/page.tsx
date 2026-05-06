import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'moises-vs-young',
  evento_id: null,
  slug: 'moises-vs-young',
  titulo: 'Moises vs Young: Veterano vs Geracao Nova',
  subtitulo:
    'Thiago Moises BJJ veterano 9-7 UFC, saindo de KO R1 pro Jared Gordon em maio 2025. Gauge Young striker de volume, 5.71 SLpM, 71% TD defense. Choque de eras no peso leve.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,75m', envergadura: '180cm', idade: 30, academia: 'Nova Uniao, Brasil' },
      fighter2: { altura: '1,78m', envergadura: '183cm', idade: 26, academia: 'Colorado gym' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Decisao Unanime',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Thiago Moises',
    apelido: 'Moises',
    record: '19-9',
    ranking: 'Fora do top 15',
    ultimasLutas: [
      { result: 'L', opponent: 'Jared Gordon', method: 'KO R1', event: 'UFC Fight Night (Mai 2025)' },
      { result: 'W', opponent: 'Trey Ogden', method: 'Decisao Unanime', event: 'UFC Fight Night (Jan 2025)' },
      { result: 'L', opponent: 'Ludovit Klein', method: 'Decisao', event: 'UFC 2024' },
    ],
  },
  fighter2_info: {
    nome: 'Gauge Young',
    apelido: 'Gee Money',
    record: '10-3',
    ranking: 'Fora do top 15',
    ultimasLutas: [
      { result: 'W', opponent: 'Maheshate', method: 'Decisao Unanime', event: 'UFC Fight Night (Out 2025)' },
      { result: 'L', opponent: 'Evan Elder', method: 'Decisao (short-notice)', event: 'UFC 2024' },
      { result: 'W', opponent: 'Adversario regional', method: 'TKO', event: 'Regional 2024' },
    ],
  },
  evento_nome: 'UFC Fight Night: Burns vs Malott',
  evento_data: '18 de Abril, 2026',
  evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
  categoria_peso: 'Peso Leve (155 lbs)',
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
      categoria_peso: 'Peso Leve (155 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Veterano vs Geracao Nova',
      tagline_sub:
        'Moises com 16 lutas UFC acumuladas, BJJ real mas wrestling insuficiente. Young chegou em 2024 com volume estilo nova escola. A ponte entre duas eras do Peso Leve.',
      fighter1: {
        nome_completo: 'Thiago "Moises" Moises',
        apelido: 'Moises',
        sobrenome: 'Moises',
        record: '19-9',
        ranking: 'Fora do top 15',
        info_extra: 'Brasil | 30 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/MOISES_THIAGO_L_04-18.png?itok=NzqQpT4Y',
      },
      fighter2: {
        nome_completo: 'Gauge "Gee Money" Young',
        apelido: 'Gee Money',
        sobrenome: 'Young',
        record: '10-3',
        ranking: 'Fora do top 15',
        info_extra: 'Colorado, EUA | 26 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/YOUNG_GAUGE_R_08-23.png?itok=DSS6A0oR',
      },
    },
    qualitative_insight: {
      tag: 'O CONFLITO DE ESTILOS',
      headline: 'BJJ VETERANO SEM WRESTLING CONTRA VOLUME PURO DE NOVA ESCOLA',
      insight:
        'Moises tem um dos melhores jogos de chao da divisao, 1.1 subs/15min e historico de finalizacoes. Mas Moises NAO e wrestler ofensivo: 1.31 TDs/15min, o que deveria ser o numero de quem usa BJJ como arma. Young tem 71% TD defense, numero mais alto do card inteiro. A matematica e direta: Moises nao consegue levar pro chao pra ativar BJJ, e Young fica a vontade trocando em pe.',
      tension: {
        truth_a:
          'Moises venceu Ogden em janeiro 2025 por decisao. Ainda tem ferramenta UFC-level quando chega inteiro no R3.',
        truth_b:
          'Gordon nocauteou Moises em R1 em maio 2025, 4 meses depois. O queixo tem limite contra counter puro, e Young e counterpuncher.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Thiago Moises',
        color: 'red',
        recent_fights: [
          { date: 'Mai 2025', opponent: 'Jared Gordon', result: 'L', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Nocaute rapido. Gordon counter limpo, queixo nao segurou. Alerta de durabilidade pro final da carreira.' },
          { date: 'Jan 2025', opponent: 'Trey Ogden', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Wrestling suficiente pra controlar rounds, venceu no cartao. Ultima performance funcional.' },
          { date: '2024', opponent: 'Ludovit Klein', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Perdeu pra striker puro. Padrao repetido: quando nao chega no chao, apanha.' },
        ],
        layoff_warning: '11 meses desde o KO do Gordon. Layoff longo pro veterano depois de nocaute = recuperacao incerta.',
        momentum_score: 3,
        momentum_label: 'Em Recuperacao',
        momentum_trend: 'descending',
        momentum_note:
          '1 vitoria em 3 lutas. O KO do Gordon plantou questao real de queixo. Aos 30 com 16 UFC lutas, ja esta na fase de dispersao.',
      },
      fighter2: {
        nome: 'Gauge Young',
        color: 'blue',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Maheshate', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria clara e convincente. Young fez ritmo dominante, controlou distancia.' },
          { date: '2024', opponent: 'Evan Elder', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Short-notice, performance nao ideal. Perdeu no cartao competitivo.' },
          { date: '2024', opponent: 'Regional', result: 'W', method: 'TKO', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Regional antes do UFC. Poder de mao mostrado.' },
        ],
        layoff_warning: null,
        momentum_score: 6,
        momentum_label: 'Em Ascensao',
        momentum_trend: 'ascending',
        momentum_note:
          'Vitoria convincente sobre Maheshate em outubro 2025. Momentum de escalada. Young entra no primeiro card de hype em casa do Moises como nome em subida.',
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Thiago Moises', media_oponentes: 2.8, media_oponentes_label: 'Medio', aproveitamento: '1V-2D ult 3', contra_top5: '0V-2D' },
      fighter2: { nome: 'Gauge Young', media_oponentes: 2.2, media_oponentes_label: 'Medio', aproveitamento: '2V-1D ult 3', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Ambos em zona mid-tier da divisao. Moises tem 16 lutas UFC acumuladas, Young apenas 2-3. Experiencia do Moises e ativo em rounds longos, mas Young tem fresh legs e volume por minuto maior.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 2.48, valueB: 5.71, maxVal: 7, format: 'decimal', note: 'Diferenca enorme. Young mais que dobra o volume do Moises.' },
        { label: 'Precisao de Strikes (%)', valueA: 44, valueB: 48, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.4, valueB: 2.8, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 55, valueB: 58, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 1.31, valueB: 0.5, maxVal: 5, format: 'decimal', note: 'Moises tem o numero de wrestle-BJJ mais baixo da pagina. Nao leva pro chao.' },
        { label: 'Precisao de Takedown (%)', valueA: 35, valueB: 40, maxVal: 100, format: 'percent' },
        { label: 'Defesa de Takedown (%)', valueA: 50, valueB: 71, maxVal: 100, format: 'percent', note: '71% do Young e a mais alta do card inteiro. Moises nao derruba ele.' },
        { label: 'Submissoes por 15 Min', valueA: 1.1, valueB: 0.3, maxVal: 3, format: 'decimal' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '30 anos', fighter2: '26 anos' },
        { label: 'Altura', fighter1: '1,75m', fighter2: '1,78m' },
        { label: 'Envergadura', fighter1: '180cm', fighter2: '183cm' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo' },
        { label: 'Academia', fighter1: 'Nova Uniao', fighter2: 'Colorado gym' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume de Striking', advantage: 'fighter2', gap: 4, note: '5.71 vs 2.48 SLpM. Diferenca de eras na divisao.' },
        { label: 'BJJ e Finalizacao', advantage: 'fighter1', gap: 4, note: 'Moises 1.1 subs/15min, arma real se chega no chao.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter1', gap: 1, note: '1.31 vs 0.5 TDs/15min. Vantagem teorica do Moises mas nao e exploravel contra 71% TD defense.' },
        { label: 'Wrestling Defensivo', advantage: 'fighter2', gap: 4, note: '71% defense do Young neutraliza 100% do plano A do Moises.' },
        { label: 'Cardio e Frescor', advantage: 'fighter2', gap: 2, note: '26 vs 30 anos + 11 meses de layoff do Moises. Young mais fresco.' },
        { label: 'Durabilidade', advantage: 'fighter2', gap: 3, note: 'Moises foi KO R1 pelo Gordon. Young nunca foi nocauteado.' },
      ],
      summary: 'Young tem vantagem em 4 das 6 dimensoes, incluindo a decisiva dessa luta: TD defense que neutraliza o caminho principal do Moises. Moises tem BJJ de classe se chegar la, mas as estatisticas dizem que nao chega.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Thiago Moises', ko_tko: { count: 4, percent: 21 }, submission: { count: 11, percent: 58 }, decision: { count: 4, percent: 21 }, total_wins: 19 },
      fighter2: { nome: 'Gauge Young', ko_tko: { count: 7, percent: 70 }, submission: { count: 1, percent: 10 }, decision: { count: 2, percent: 20 }, total_wins: 10 },
      insight: 'Moises vive de sub: 58% das vitorias. Young vive de KO: 70%. Os dois precisam chegar ao terreno deles. Pra Moises, e o chao (e ele nao leva pra la). Pra Young, e a troca (e Moises tem 70% de chance de ir pra troca porque nao derruba).',
    },
    previsao_final: {
      winner_name: 'Gauge Young',
      winner_side: 'fighter2',
      predicted_method: 'Decisao Unanime ou TKO R3',
      confidence_score: 5,
      confidence_label: 'MEDIA',
      explanation:
        'Conviccao 5 porque essa e uma luta de coinflip honesto. Young favorece nos numeros, mas a ameaca de sub do Moises nunca zera, e se Moises encontrar um spot de back take ou guillotine em transicao, acaba.',
      x_factor: {
        title: 'O Queixo do Moises',
        description: 'Young e counterpuncher com poder. Moises foi KO R1 pelo Gordon 11 meses atras. Se Young encontra timing parecido nos primeiros 5 minutos, a luta e curta.',
      },
      upset_alert: {
        title: 'Uma Transicao Errada',
        description: 'BJJ de classe mundial do Moises pode ativar em qualquer transicao no clinch ou queda. Young defende 71% dos TDs, mas nao precisa cair 100% pra ser finalizado. Uma abertura em scramble e suficiente.',
      },
      probabilities: { fighter1: { nome: 'Moises', percent: 42 }, fighter2: { nome: 'Young', percent: 55 }, draw: 3 },
      odds: { fighter1_odds: '+110', fighter2_odds: '-130', fighter1_name: 'Thiago Moises', fighter2_name: 'Gauge Young', source: 'Media dos sportsbooks (abril de 2026)' },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Gauge Young', odds: '-130', reasoning: 'Favorecimento pequeno mas justificavel. Volume e frescor vencem se a luta fica em pe.' },
          { type: 'Rounds Over', pick: 'Over 2.5 rounds', odds: '+115', reasoning: 'Young historicamente leva pra decisao, Moises defende bem fora do KO inicial. Over tem valor.' },
          { type: 'Moises por sub', pick: 'Moises vence por submissao', odds: '+450', reasoning: 'Longshot real mas coerente com o BJJ dele. Hedge pequeno.' },
        ],
        best_bet: { pick: 'Over 2.5 rounds a +115', reasoning: 'Matematica de ambos os estilos combina com decisao. Metodo mais robusto do que aposta em vencedor.' },
      },
      key_stats: [
        { value: '71%', label: 'TD defense do Young', sublabel: 'Mais alta do card. Neutraliza plano A do Moises.' },
        { value: '5.71', label: 'SLpM do Young vs 2.48 do Moises', sublabel: 'Diferenca de eras na divisao' },
        { value: 'KO R1', label: 'ultima derrota do Moises (Gordon)', sublabel: 'Alerta de queixo pra luta em pe' },
      ],
      armadilha: { titulo: 'Armadilha: Moises por sub R1', descricao: 'Mercado paga +900 em Moises sub R1, parecido com outros cenarios de sub-artist contra striker. Mas Young defende 71% de TDs e nao vai pro chao voluntariamente. Pra apostar no Moises, sub total (qualquer round) e mais realista que R1 especifico.' },
      conviction: {
        thesis: 'A tese e: Gauge Young vence porque (1) a combinacao de volume de striking (5.71 SLpM) + TD defense elite (71%) neutraliza o plano A do Moises (levar pro chao pra ativar BJJ); (2) o Moises foi KO R1 pelo Gordon 11 meses atras, alerta de queixo ativo, e Young tem poder de counter puro; (3) diferenca de 4 anos de idade e 11 meses de layoff favorecem o fresco Young. O caminho e Young manter distancia, castigar com volume, absorver entrada de TD caso Moises tente, e acumular cartao ou finalizar no R3 se Moises fadigar. Isso desmorona se Moises encontrar um back take em transicao ou guillotine no clinch, onde o BJJ dele ainda e tier 1.',
        conviction_score: 5,
        conviction_rationale: 'Conviccao 5 porque e coinflip honesto. Young tem razoes estruturais pra vencer, mas a ameaca de sub do Moises em qualquer momento mantem a incerteza aberta. Nao da pra cravar 7-8 num matchup onde a arma principal do underdog e finalizacao instantanea.',
        conviction_breakers: [
          'Se Moises encostar Young na grade e conseguir um scramble que termine em back mount, acaba.',
          'Se o queixo do Moises segurar e Young nao conectar counter decisivo no R1, o ritmo pode inverter pra Moises controlar.',
          'Se Young tentar forcar finish no Moises e errar, Moises tem espaco pra armar sub defensivo (kimura, guilhotina de clinch).',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 42,
          key_scenario: 'Moises absorve a primeira bateria de counters, fecha distancia no clinch, puxa guilhotina de uma tentativa de TD ou forca scramble em que tira as costas. Alternativa: se conseguir uma queda na grade, trabalha half guard pra mount, aplica mata-leao. BJJ de elite nao precisa de muito.',
          required_conditions: [
            'Nao ser nocauteado nos primeiros 5 minutos',
            'Conectar pelo menos uma queda ou clinch controlado',
            'Manter lucidez pra armar sub em qualquer transicao',
          ],
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'moises-vs-young');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
