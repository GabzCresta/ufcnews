import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'susurkaev-vs-santos',
  evento_id: null,
  slug: 'susurkaev-vs-santos',
  titulo: 'Susurkaev vs Santos: O Russo Invicto vs Resistência Brasileira',
  subtitulo:
    'Susurkaev é o russo invicto que veio do Contender Series 2024 com 2 finishes UFC (incluindo TKO R3 sobre McConico landing 105 strikes 73% de precisão). Santos é o brasileiro 1-1 UFC, perdeu pra Diaz na estreia mas voltou com UD sobre Barlow. Momento contra durabilidade.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,83m', envergadura: '188cm', idade: 26, academia: 'Akhmat MMA' },
      fighter2: { altura: '1,80m', envergadura: '183cm', idade: 27, academia: 'N/D' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'KO/TKO ou Decisão',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Baisangur Susurkaev',
    apelido: '',
    record: '11-0-0',
    ranking: 'N/R Peso Médio',
    ultimasLutas: [
      { result: 'W', opponent: 'Eric McConico', method: 'TKO R3', event: 'UFC 322' },
      { result: 'W', opponent: 'UFC Estreia', method: 'TKO', event: 'UFC Fight Night 257' },
      { result: 'W', opponent: 'DWCS', method: 'Sub', event: 'DWCS 2025' },
    ],
  },
  fighter2_info: {
    nome: 'Djorden Santos',
    apelido: '',
    record: '8-2-0',
    ranking: 'N/R Peso Médio',
    ultimasLutas: [
      { result: 'W', opponent: 'Danny Barlow', method: 'Decisão Unânime', event: 'UFC Fight Night 254' },
      { result: 'L', opponent: 'Ozzy Diaz', method: 'Decisão Unânime', event: 'UFC 313' },
      { result: 'W', opponent: 'DWCS', method: 'TKO', event: 'DWCS 2024' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Peso Médio (185 lbs)',
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
      categoria_peso: 'Peso Médio (185 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Russo Invicto vs Brasileiro Durável',
      tagline_sub: 'Susurkaev 11-0 com 2 finishes UFC. Santos 1-1 UFC com UD sobre Barlow. Momento contra durabilidade. Camp Akhmat em ascensão.',
      fighter1: {
        nome_completo: 'Baisangur Susurkaev',
        apelido: '',
        sobrenome: 'Susurkaev',
        record: '11-0-0',
        ranking: 'N/R Peso Médio',
        info_extra: 'Chechênia | 26 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/SUSURKAEV_BAISANGUR_L_11-15.png?itok=Q9PQ4-Up',
      },
      fighter2: {
        nome_completo: 'Djorden Santos',
        apelido: '',
        sobrenome: 'Santos',
        record: '11-2-0',
        ranking: 'N/R Peso Médio',
        info_extra: 'Brasil | 27 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/SANTOS_DJORDEN_L_03-08.png?itok=Tc_C5Nff',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'Russo Invicto Com 105 Strikes em 73% de Precisão',
      insight:
        'Susurkaev é o knockout machine invicto do Contender Series 2024, 11-0 carreira com 2 finishes UFC seguidos (estreia em UFC FN 257, depois TKO R3 sobre Eric McConico em UFC 322 onde acertou 105 strikes a 73% de precisão). Camp Akhmat em ascensão. Santos é o brasileiro 1-1 UFC: perdeu por UD pra Ozzy Diaz na estreia em UFC 313, mas voltou com UD sobre Danny Barlow em outubro. Momento esmagador a favor do russo, mas Santos provou durabilidade indo a decisão duas vezes seguidas. Stylistically, é striker russo em alta vs durable journeyman.',
    },

    momento_atual: {
      fighter1: {
        nome: 'Baisangur Susurkaev', color: 'red', momentum_score: 9, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: 'Invicto 11-0. 2 finishes UFC seguidos (estreia em UFC FN 257, TKO R3 McConico em UFC 322). 105 strikes a 73% precisão na última. Camp Akhmat.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Eric McConico', result: 'W', method: 'TKO R3', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'TKO R3, 105 strikes 73%.' },
          { date: 'Set 2025', opponent: 'UFC Estreia', method: 'TKO', result: 'W', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Estreia UFC 4 dias após DWCS.' },
          { date: 'Set 2025', opponent: 'DWCS Contract', method: 'Sub', result: 'W', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Contender Series, contrato UFC.' },
          { date: 'Mai 2025', opponent: 'Regional', method: 'TKO', result: 'W', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Vitória regional.' },
          { date: 'Mar 2025', opponent: 'Regional', method: 'KO', result: 'W', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'KO regional.' },
        ],
      },
      fighter2: {
        nome: 'Djorden Santos', color: 'blue', momentum_score: 6, momentum_label: 'Estável (com ressalvas)', momentum_trend: 'stable',
        momentum_note: '1-1 UFC. Vem de UD sobre Danny Barlow em outubro de 2025. Antes disso, perdeu UD pro Ozzy Diaz na estreia UFC.',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Danny Barlow', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'UD em 3 rounds.' },
          { date: 'Mar 2025', opponent: 'Ozzy Diaz', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'UD pra Diaz.' },
          { date: 'Set 2024', opponent: 'DWCS', result: 'W', method: 'TKO', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Contender Series, contrato UFC.' },
          { date: 'Mai 2024', opponent: 'Regional', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Vitória regional.' },
          { date: 'Mar 2024', opponent: 'Regional', result: 'W', method: 'TKO', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'TKO regional.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Susurkaev', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: '5V-0D (últimas 5)', contra_top5: '0V-0D' },
      fighter2: { nome: 'Santos', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: '4V-1D (últimas 5)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Calibre baixo dos dois (UFC newcomers contra outros novatos), mas Susurkaev em momentum esmagador (5-0 últimas com 4 finishes). Santos 4-1 com vitórias por decisão.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 5.5, valueB: 3.5, maxVal: 7, format: 'decimal', note: 'Susurkaev volume superior.' },
        { label: 'Precisão de Strikes (%)', valueA: 65, valueB: 50, maxVal: 100, format: 'percent', note: 'Susurkaev 73% na última, média 65%.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.0, valueB: 4.0, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Susurkaev absorve menos.' },
        { label: 'Defesa de Strikes (%)', valueA: 60, valueB: 50, maxVal: 100, format: 'percent', note: 'Susurkaev vantagem.' },
        { label: 'Takedowns por 15 Min', valueA: 1.5, valueB: 1.0, maxVal: 5, format: 'decimal', note: 'Equilibrado.' },
        { label: 'Defesa de Takedown (%)', valueA: 75, valueB: 60, maxVal: 100, format: 'percent', note: 'Susurkaev melhor TDD.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '26 anos', fighter2: '27 anos', note: 'Mesma idade praticamente.' },
        { label: 'Altura', fighter1: '1,83m', fighter2: '1,80m', note: 'Susurkaev 3 cm mais alto.' },
        { label: 'Envergadura', fighter1: '188 cm', fighter2: '183 cm', note: 'Susurkaev 5 cm a mais.' },
        { label: 'Stance', fighter1: 'Destro', fighter2: 'Destro', note: 'Mesmo stance.' },
        { label: 'Academia', fighter1: 'Akhmat MMA', fighter2: 'N/D', note: 'Camp russo elite vs camp não confirmado.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking / Volume', advantage: 'fighter1', gap: 4, note: 'Susurkaev 5.5 SLpM com 73% precisão na última. Santos 3.5 SLpM.' },
        { label: 'Poder de Nocaute', advantage: 'fighter1', gap: 3, note: 'Susurkaev 8 finishes em 11 vitórias. Santos só 1 finish UFC.' },
        { label: 'Wrestling / Quedas', advantage: 'even', gap: 1, note: 'Equilibrado, ambos privilegiam striking.' },
        { label: 'Defesa de Striking', advantage: 'fighter1', gap: 2, note: 'Susurkaev 60% Str.Def vs 50%.' },
        { label: 'Cardio / 3 Rounds', advantage: 'fighter2', gap: 1, note: 'Santos provou em 2 UDs. Susurkaev finalizou no R3 contra McConico, cardio OK.' },
        { label: 'Experiência UFC', advantage: 'fighter2', gap: 1, note: 'Santos 2 UFC (1-1). Susurkaev 2 UFC (2-0).' },
      ],
      summary: 'Susurkaev domina em quase todas as métricas (volume, precisão, KO power). Santos só tem durabilidade. Pra Santos vencer, precisa absorver tudo e levar pros cards.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Susurkaev', ko_tko: { count: 9, percent: 82 }, submission: { count: 1, percent: 9 }, decision: { count: 1, percent: 9 }, total_wins: 11 },
      fighter2: { nome: 'Santos', ko_tko: { count: 3, percent: 27 }, submission: { count: 4, percent: 36 }, decision: { count: 4, percent: 37 }, total_wins: 11 },
      insight: 'Susurkaev 82% das vitórias por KO/TKO (9 em 11) — finalizador extremo. Santos distribuído entre KO (27%), sub (36%) e dec (37%) — perfil de grappler-jiu-jitseiro mais que durable journeyman. Ambos 11 vitórias na carreira.',
    },

    previsao_final: {
      winner_name: 'Baisangur Susurkaev',
      winner_side: 'fighter1',
      predicted_method: 'KO/TKO ou Decisão',
      confidence_score: 7,
      confidence_label: 'MÉDIA-ALTA',
      explanation:
        'A pick é Susurkaev por KO/TKO ou decisão. Análise individual converge em quatro dimensões: stats (5.5 SLpM com 73% precisão, 5 cm reach a mais), momento (11-0 invicto vs 1-1), estilo (finalizador russo vs durable journeyman) e qualitative (camp Akhmat em ascensão). Santos tem caminho real (32%): provou durabilidade, foi 25 minutos com Diaz e Barlow, se aguentar primeiros 5 minutos pode levar pros cards. Convicção 7.',
      x_factor: { title: 'Pressão Russa', description: 'Susurkaev acertou 105 strikes a 73% no McConico. Se mantém ritmo similar, Santos absorve dano cumulativo.' },
      upset_alert: { title: 'Santos Aguenta e Vence Por Cards', description: 'Santos é durável, foi 25 minutos com Diaz e Barlow seguidos. Se sobreviver pressure inicial, pode ganhar cards. Probabilidade 32%.' },
      probabilities: { fighter1: { nome: 'Susurkaev', percent: 65 }, fighter2: { nome: 'Santos', percent: 32 }, draw: 3 },
      conviction: {
        thesis: 'A tese é: Susurkaev vence porque, primeiro, é invicto 11-0 com 2 finishes UFC e 105 strikes a 73% precisão na última. Segundo, 5 cm de envergadura sobre Santos e camp Akhmat. Terceiro, Santos tem perfil de durabilidade mas sem KO power pra ameaçar russo. Caminho: pressure desde R1, busca finish ou cards 30-27. Desmorona se Santos absorver tudo e cardio do russo falhar.',
        conviction_score: 7,
        conviction_rationale: 'Convicção 7 porque quatro dimensões convergem mas calibre dos dois é baixo (newcomers contra newcomers).',
        conviction_breakers: ['Santos absorve tudo nos primeiros 10 minutos', 'Cardio do Susurkaev falhar no R3', 'Santos pegar timing em pé', 'Russo perder paciência e cometer erro'],
        underdog_path: {
          viable: true, probability_estimate: 32,
          key_scenario: 'Santos aguenta a pressure de Susurkaev nos primeiros 2 rounds com defesa absorvente. Cardio do russo cai no R3. Santos acumula no late e ganha cards apertados.',
          required_conditions: ['Aguentar pressure nos rounds 1-2', 'Cardio melhor que russo', 'Volume cumulativo no R3', 'Não ser finalizado'],
          historical_precedent: 'Santos foi 25 minutos com Diaz e Barlow seguidos. Durabilidade provada. Mas Susurkaev é grau acima.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Baisangur Susurkaev', odds: '-300 (estimado)', reasoning: 'Probabilidade 65%, implícita -300 = 75%. Sem grande edge.' },
          { type: 'Método', pick: 'Susurkaev por KO/TKO', odds: '+100 (estimado)', reasoning: 'Susurkaev 45% KO + Santos durável mas sem chin de granito. Probabilidade real 35-40%, edge em +100.' },
        ],
        best_bet: { pick: 'Susurkaev por KO/TKO em +100', reasoning: 'Russo invicto com 73% precisão na última.' },
      },
      key_stats: [
        { value: '11-0', label: 'Record invicto do Susurkaev', sublabel: '2 finishes UFC seguidos.' },
        { value: '105', label: 'Strikes acertados em UFC 322', sublabel: '73% de precisão. Volume e accuracy.' },
        { value: '1-1', label: 'Record UFC do Santos', sublabel: 'UD sobre Barlow após L pra Diaz na estreia.' },
        { value: '+5cm', label: 'Vantagem de envergadura do Susurkaev', sublabel: '188 vs 183.' },
      ],
      odds: {
        fighter1_odds: '-300', fighter2_odds: '+240',
        fighter1_name: 'Susurkaev', fighter2_name: 'Santos',
        source: 'DraftKings/FanDuel Susurkaev -300 / Santos +240 em abril de 2026 (estimado).',
      },
      armadilha: {
        titulo: 'Armadilha: Santos por Decisão',
        descricao: 'Mercado pode pagar Santos por decisão pela durabilidade. Mas Susurkaev tem 8 finishes em 11 e camp Akhmat — perfil de finalizar contra durables também.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'susurkaev-vs-santos');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
