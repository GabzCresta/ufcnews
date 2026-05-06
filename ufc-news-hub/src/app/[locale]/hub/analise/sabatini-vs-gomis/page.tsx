import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'sabatini-vs-gomis',
  evento_id: null,
  slug: 'sabatini-vs-gomis',
  titulo: 'Sabatini vs Gomis: Wrestler vs Striker Francês',
  subtitulo:
    'Sabatini vem de 3 vitórias seguidas com 13 finalizações em 21 vitórias (62% sub rate) e 4.48 takedowns por 15 minutos. Gomis é striker francês com 5 vitórias em 6 lutas UFC. Wrestler em casa contra striker em alta. Mercado abriu Sabatini -205.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,73m', envergadura: '178cm', idade: 33, academia: 'Philadelphia BJJ' },
      fighter2: { altura: '1,80m', envergadura: '183cm', idade: 28, academia: 'MMA Factory, Paris' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Submissão ou Decisão',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Pat Sabatini',
    apelido: '',
    record: '21-5-0',
    ranking: 'N/R Peso Pena',
    ultimasLutas: [
      { result: 'W', opponent: 'Joanderson Brito', method: 'Decisão Unânime', event: 'UFC 318' },
      { result: 'W', opponent: 'Chepe Mariscal', method: 'Decisão Unânime', event: 'UFC Fight Night 244' },
      { result: 'W', opponent: 'Jonathan Pearce', method: 'Sub R2', event: 'UFC Fight Night 234' },
    ],
  },
  fighter2_info: {
    nome: 'William Gomis',
    apelido: '',
    record: '15-2-0',
    ranking: 'N/R Peso Pena',
    ultimasLutas: [
      { result: 'W', opponent: 'Robert Ruchala', method: 'Decisão Unânime', event: 'UFC Fight Night 256' },
      { result: 'W', opponent: 'Hyder Amil', method: 'Decisão Unânime', event: 'UFC Fight Night 245' },
      { result: 'L', opponent: 'Joanderson Brito', method: 'Decisão Unânime', event: 'UFC Fight Night 240' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Peso Pena (145 lbs)',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC 328: Chimaev vs Strickland',
      evento_data: '9 de Maio, 2026',
      evento_local: 'Prudential Center, Newark, New Jersey',
      categoria_peso: 'Peso Pena (145 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Wrestler vs Striker Francês',
      tagline_sub: 'Sabatini 4.48 TD/15min, 62% sub rate, 3 vitórias seguidas. Gomis francês striker com 5 wins em 6 UFC. Wrestler americano vs striker francês. Padrão clássico.',
      fighter1: {
        nome_completo: 'Pat Sabatini',
        apelido: '',
        sobrenome: 'Sabatini',
        record: '21-5-0',
        ranking: 'N/R Peso Pena',
        info_extra: 'Filadélfia, Pensilvânia | 33 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/SABATINI_PAT_L_11-15.png?itok=UyToqZ-o',
      },
      fighter2: {
        nome_completo: 'William Gomis',
        apelido: '',
        sobrenome: 'Gomis',
        record: '15-2-0',
        ranking: 'N/R Peso Pena',
        info_extra: 'Paris, França | 28 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-09/GOMIS_WILLIAM_L_09-06.png?itok=zDqQAPQ7',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Wrestling Pressão vs Striker Sem TDD Provada',
      insight:
        'Sabatini é o wrestler-grappler americano (21-5, 62% subs na carreira) com 4.48 takedowns por 15 minutos, número entre os mais altos do peso pena UFC. Vem de 3 vitórias seguidas (Brito UD, Mariscal UD, Pearce sub R2). Gomis é striker francês (15-2, 5W em 6 UFC) com perfil de boxer técnico e cardio bom, mas TDD não testada por wrestler de elite. Stylistically, é a definição de matchup grappler-vs-striker: se Sabatini conseguir derrubar (e tem 4.48 TD/15min como histórico), o francês vai pro chão onde tem desvantagem clara. Mercado abriu Sabatini -205 com razão.',
    },

    momento_atual: {
      fighter1: {
        nome: 'Pat Sabatini', color: 'red', momentum_score: 8, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: '3 vitórias seguidas no UFC (Brito UD, Mariscal UD, Pearce sub R2). 62% das vitórias por sub na carreira. 4.48 TD/15min. Treina BJJ em Filadélfia.',
        recent_fights: [
          { date: 'Jul 2025', opponent: 'Joanderson Brito', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD wrestling-heavy.' },
          { date: 'Jul 2024', opponent: 'Chepe Mariscal', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD em 3 rounds.' },
          { date: 'Jan 2024', opponent: 'Jonathan Pearce', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Sub no R2.' },
          { date: 'Mai 2023', opponent: 'Lucas Almeida', result: 'L', method: 'KO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'KO no R1.' },
          { date: 'Out 2022', opponent: 'Damon Jackson', result: 'L', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'TKO no R1.' },
        ],
      },
      fighter2: {
        nome: 'William Gomis', color: 'blue', momentum_score: 7, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: '5 vitórias em 6 lutas UFC. Vem de UD sobre Robert Ruchala em UFC FN 256 (maio 2025). Striker técnico francês de 28 anos.',
        recent_fights: [
          { date: 'Mai 2025', opponent: 'Robert Ruchala', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD em 3 rounds.' },
          { date: 'Jul 2024', opponent: 'Hyder Amil', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD em 3 rounds.' },
          { date: 'Mar 2024', opponent: 'Joanderson Brito', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD pra Brito.' },
          { date: 'Set 2023', opponent: 'Yanis Ghemmouri', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'UD em 3 rounds.' },
          { date: 'Jun 2023', opponent: 'Joel Alvarez', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD pro espanhol.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Sabatini', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-0D' },
      fighter2: { nome: 'Gomis', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: 'Oponente em comum: Joanderson Brito. AMBOS venceram o Brito. Sabatini venceu Brito por UD em julho de 2025, Gomis venceu Brito por SD em setembro de 2024. Transitividade neutra. Ambos provaram capacidade de derrotar prospect ranqueado.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.2, valueB: 4.5, maxVal: 7, format: 'decimal', note: 'Gomis volume superior em pé.' },
        { label: 'Precisão de Strikes (%)', valueA: 48, valueB: 52, maxVal: 100, format: 'percent', note: 'Gomis leve vantagem.' },
        { label: 'Takedowns por 15 Min', valueA: 4.48, valueB: 0.5, maxVal: 5, format: 'decimal', note: 'Sabatini 9x mais wrestling ofensivo.' },
        { label: 'Submissões por 15 Min', valueA: 2.5, valueB: 0.2, maxVal: 3, format: 'decimal', note: 'Sabatini submission specialist.' },
        { label: 'Defesa de Takedown (%)', valueA: 70, valueB: 58, maxVal: 100, format: 'percent', note: 'Sabatini melhor TDD.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '28 anos', note: 'Gomis 5 anos mais novo.' },
        { label: 'Altura', fighter1: '1,73m', fighter2: '1,80m', note: 'Gomis 7 cm mais alto.' },
        { label: 'Envergadura', fighter1: '178 cm', fighter2: '183 cm', note: 'Gomis 5 cm a mais.' },
        { label: 'Stance', fighter1: 'Destro', fighter2: 'Destro', note: 'Mesmo stance.' },
        { label: 'Academia', fighter1: 'Philadelphia BJJ', fighter2: 'MMA Factory Paris', note: 'Camp BJJ-heavy vs camp francês.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Wrestling / Quedas', advantage: 'fighter1', gap: 5, note: 'Sabatini 4.48 TD/15min vs 0.5 do Gomis. Identidade.' },
        { label: 'Jogo de Chão / BJJ', advantage: 'fighter1', gap: 5, note: '62% finalização sub do Sabatini. Gomis sem ground game ofensivo.' },
        { label: 'Striking em Pé', advantage: 'fighter2', gap: 3, note: 'Gomis 4.5 SLpM vs 3.2. Striker técnico.' },
        { label: 'Defesa de Quedas', advantage: 'fighter1', gap: 2, note: 'Sabatini 70% TDD vs 58%.' },
        { label: 'Cardio / 3 Rounds', advantage: 'even', gap: 0, note: 'Ambos provados em 3 rounds.' },
        { label: 'Range / Físico', advantage: 'fighter2', gap: 2, note: 'Gomis 5 cm reach + 7 cm altura.' },
      ],
      summary: 'Sabatini domina onde a luta vai pro chão. Gomis em pé. Pra Gomis vencer, precisa defender 70%+ das quedas em 3 rounds.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Sabatini', ko_tko: { count: 2, percent: 10 }, submission: { count: 13, percent: 62 }, decision: { count: 6, percent: 28 }, total_wins: 21 },
      fighter2: { nome: 'Gomis', ko_tko: { count: 7, percent: 47 }, submission: { count: 1, percent: 7 }, decision: { count: 7, percent: 46 }, total_wins: 15 },
      insight: 'Sabatini 62% por sub (perfil clássico de jiu-jitseiro). Gomis 47% por KO/TKO + 46% por decisão (striker técnico francês com KO power maior do que parece). Apenas 1 sub na carreira do francês.',
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Sabatini', ko_tko: { count: 3, percent: 60 }, submission: { count: 0, percent: 0 }, decision: { count: 2, percent: 40 }, total_losses: 5 },
      fighter2: { nome: 'Gomis', ko_tko: { count: 0, percent: 0 }, submission: { count: 1, percent: 33 }, decision: { count: 2, percent: 67 }, total_losses: 3 },
      insight: 'Sabatini 60% das derrotas por KO/TKO (3 em 5): Damon Jackson TKO R1 (UFC Fight Night 210), Diego Lopes KO R1 (UFC 295), Gonzalez TKO R1 em CFFC (lesão de braço quebrado, 46 segundos). Padrão: cai rápido contra strikers explosivos quando striking começa franco. Gomis tem 3 derrotas, ZERO por KO — queixo francês confiável. 1 sub (Charriere 2016 cedo na carreira) e 2 dec (incluindo Hyder Amil em mar/2025). Para value bet: Gomis por KO/TKO é caminho realista dado padrão Sabatini contra strikers; Sabatini por sub esbarra na blindagem do francês contra finalização.',
    },

    previsao_final: {
      winner_name: 'Pat Sabatini',
      winner_side: 'fighter1',
      predicted_method: 'Submissão ou Decisão',
      confidence_score: 7,
      confidence_label: 'MÉDIA-ALTA',
      explanation:
        'A pick é Sabatini por submissão ou decisão. Análise individual converge em três dimensões: stats (4.48 TD/15min + 62% sub rate), estilo (wrestler-grappler vs striker sem TDD provada), e momento (3 vitórias seguidas vs 5W-1L recente). Gomis tem caminho real (28%): striker técnico de 28 anos com volume superior, se defender quedas pode vencer em pé. Mas TDD 58% contra wrestler 4.48 TD/15min é matemática difícil. Convicção 7.',
      x_factor: { title: 'A Primeira Tentativa de Queda', description: 'Sabatini vai tentar derrubar nos primeiros 60 segundos. Se conseguir, controla 4-5 minutos por round. Se Gomis sprawl, abre o jogo em pé.' },
      upset_alert: { title: 'Gomis Defende Tudo e Vence Em Pé', description: 'Gomis striker técnico francês com 5W em 6 UFC. Se defender quedas pelos 3 rounds, ganha cards 30-27. Probabilidade 28%.' },
      probabilities: { fighter1: { nome: 'Sabatini', percent: 65 }, fighter2: { nome: 'Gomis', percent: 32 }, draw: 3 },
      conviction: {
        thesis: 'A tese é: Pat Sabatini vence porque, primeiro, tem 4.48 takedowns por 15 minutos (entre as mais altas do peso pena UFC) e 70% TDD. Segundo, 62% das vitórias por sub na carreira contra striker sem ground game ofensivo. Terceiro, oponente em comum Brito mostra transitividade leve a favor. Caminho da vitória: queda no R1, busca finalização ou top control 3 rounds. Desmorona se Gomis defender 70%+ das quedas.',
        conviction_score: 7,
        conviction_rationale: 'Convicção 7 porque três dimensões convergem fortemente. Não é 8 porque Gomis é striker em alta com 5W em 6 UFC e cardio bom.',
        conviction_breakers: ['Gomis defende todas as quedas em 3 rounds', 'Sabatini sem cardio pra wrestling cumulativo', 'Gomis encaixa shot em transição', 'Idade 33 do Sabatini pesa contra striker 28'],
        underdog_path: {
          viable: true, probability_estimate: 28,
          key_scenario: 'Gomis sprawla as quedas, mantém distância em pé, acumula volume com 4.5 SLpM. Cards 30-27 ou KO no R3.',
          required_conditions: ['TDD 70%+ em 3 rounds', 'Manter distância em pé', 'Cardio aguentar pressure de wrestling', 'Não ser pego em scrambles'],
          historical_precedent: 'Gomis perdeu pra Brito (que perdeu pro Sabatini) por UD. Precedente direto contrário, mas Gomis pode aprender.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Pat Sabatini', odds: '-205', reasoning: 'Probabilidade real 65%, implícita -205 = 67%. Sem grande edge.' },
          { type: 'Método', pick: 'Sabatini por Submissão', odds: '+150 (estimado)', reasoning: 'Sabatini 62% sub rate + 13 subs em 21 vitórias. Gomis sem defesa de fundo. Probabilidade real 35-40%, edge real em +150.' },
          { type: 'Total Rounds', pick: 'Sabatini ITD (vitória dentro do tempo)', odds: '+200 (estimado)', reasoning: 'Probabilidade real 30-35%, edge em +200.' },
        ],
        best_bet: { pick: 'Sabatini por Submissão em +150', reasoning: 'Maior edge esperado da luta. Sabatini tem perfil específico de finalização e Gomis sem defesa de fundo.' },
      },
      key_stats: [
        { value: '4.48', label: 'Takedowns por 15 minutos do Sabatini', sublabel: 'Entre as mais altas do peso pena UFC.' },
        { value: '13', label: 'Finalizações do Sabatini em 21 vitórias', sublabel: '62% sub rate. Submission specialist.' },
        { value: '3', label: 'Vitórias seguidas do Sabatini', sublabel: 'Brito, Mariscal, Pearce.' },
        { value: '58%', label: 'TDD do Gomis', sublabel: 'Não testada por wrestler 4.48 TD/15min.' },
      ],
      odds: {
        fighter1_odds: '-205', fighter2_odds: '+170',
        fighter1_name: 'Sabatini', fighter2_name: 'Gomis',
        source: 'DraftKings/FanDuel Sabatini -205 / Gomis +170 em abril de 2026.',
      },
      armadilha: {
        titulo: 'Armadilha: Gomis por Decisão',
        descricao: 'O mercado pode pagar Gomis por decisão baseado nos 5W UFC. Mas pra Gomis chegar a decisão precisa defender quedas Sabatini por 3 rounds, algo que TDD 58% não sustenta contra 4.48 TD/15min.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'sabatini-vs-gomis');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
