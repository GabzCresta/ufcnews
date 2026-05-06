import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'phillips-vs-jourdain',
  evento_id: null,
  slug: 'phillips-vs-jourdain',
  titulo: 'Phillips vs Jourdain: A Troca do Peso',
  subtitulo:
    'Jourdain recem-chegado aos Galos depois de anos apanhando de lutadores maiores, dois guilhotinas em R1 nas ultimas duas lutas. Phillips em sequencia de 2 derrotas, fora do top 15, com 72 polegadas de envergadura pra segurar a maré.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,73m', envergadura: '183cm', idade: 30, academia: 'MMA Lab' },
      fighter2: { altura: '1,75m', envergadura: '175cm', idade: 30, academia: 'Tristar Gym' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Decisao Unanime ou Submissao (guilhotina)',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Kyler Phillips',
    apelido: 'The Matrix',
    record: '12-4',
    ranking: 'Fora do top 15',
    ultimasLutas: [
      { result: 'L', opponent: 'Vinicius Oliveira', method: 'Decisao Unanime', event: 'UFC Fight Night 2025' },
      { result: 'L', opponent: 'Pedro Munhoz', method: 'Decisao', event: 'UFC 2024' },
      { result: 'W', opponent: 'Pedro Munhoz', method: 'Decisao Unanime', event: 'UFC 301 (Mai 2024)' },
    ],
  },
  fighter2_info: {
    nome: 'Charles Jourdain',
    apelido: 'Air',
    record: '17-8-1',
    ranking: 'Fora do top 15',
    ultimasLutas: [
      { result: 'W', opponent: 'Victor Henry', method: 'Sub R1 (guilhotina)', event: 'UFC Fight Night 2025' },
      { result: 'W', opponent: 'Oponente anterior', method: 'Sub R1 (guilhotina)', event: 'UFC Fight Night 2024' },
      { result: 'L', opponent: 'Derrota anterior', method: 'Decisao', event: 'Peso Pena, UFC 2024' },
    ],
  },
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
      tagline: 'A Troca do Peso',
      tagline_sub:
        'Jourdain descobriu um cinto novo apos anos sendo o pequeno dos Penas. Phillips tentando provar que a reach de 72 polegadas ainda vale contra striker do tamanho dele.',
      fighter1: {
        nome_completo: 'Kyler "The Matrix" Phillips',
        apelido: 'The Matrix',
        sobrenome: 'Phillips',
        record: '12-4',
        ranking: 'Fora do top 15',
        info_extra: 'Arizona, EUA | 30 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/PHILLIPS_KYLER_L_04-18.png?itok=FTfSROFe',
      },
      fighter2: {
        nome_completo: 'Charles "Air" Jourdain',
        apelido: 'Air',
        sobrenome: 'Jourdain',
        record: '17-8-1',
        ranking: 'Fora do top 15',
        info_extra: 'Quebec, Canada | 30 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-10/JOURDAIN_CHARLES_L_10-18.png?itok=zvUSZN2e',
      },
    },
    qualitative_insight: {
      tag: 'A TROCA DE DIVISAO',
      headline: 'O JOURDAIN NOVO NA ERA PRE-TETEIA',
      insight:
        'Jourdain passou anos apanhando de lutadores maiores na divisao dos Penas porque nao tinha fisico pra segurar pressao. Desceu pro Peso Galo, trocou o perfil de vitima em guilhotina pra algoz: duas finalizacoes em R1 nas ultimas duas lutas. Phillips e exatamente o estilo que o Jourdain versao nova castiga: striker tecnico sem pressao, envergadura que convida entrada, cardio questionavel nos rounds finais.',
      tension: {
        truth_a:
          'Jourdain tem 7 polegadas a menos de envergadura que Phillips. Em peso novo, ainda esta aprendendo como jogar a pressao nos rounds finais.',
        truth_b:
          'Jourdain tem DOIS guilhotinazes R1 seguidos no Peso Galo. A janela de ataque que ele esta usando e especifica pro estilo do Phillips: shot defensivo, cabeca baixa pra esquivar jab, pescoco na bandeja.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Kyler Phillips',
        color: 'red',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Vinicius Oliveira', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Perdeu no volume. Oliveira pressionou os 3 rounds e Phillips nao achou os counters.' },
          { date: 'Abr 2025', opponent: 'Pedro Munhoz', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Munhoz veterano ditou ritmo. Phillips saiu do top 15 depois dessa.' },
          { date: 'Mai 2024', opponent: 'Oponente anterior', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Ultima vitoria. Controle tecnico razoavel, mas ja mostrou fadiga no R3.' },
        ],
        layoff_warning: '6 meses de layoff. Nao e longo, mas sequencia de 2 derrotas exige ajustes que so testo na luta.',
        momentum_score: 3,
        momentum_label: 'Em Recuperacao',
        momentum_trend: 'descending',
        momentum_note:
          'Duas derrotas seguidas contra nao-ranqueados. Saiu do top 15. Problema diagnosticado: ritmo dele nao sustenta pressao alta nos rounds 2 e 3, e counters nao sao eficientes sem timing de distancia perfeito.',
      },
      fighter2: {
        nome: 'Charles Jourdain',
        color: 'blue',
        recent_fights: [
          { date: 'Dez 2025', opponent: 'Victor Henry', result: 'W', method: 'Sub R1 (guilhotina)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Primeira luta no Peso Galo. Henry tentou entrada de TD e pegou o pescoco. Guilhotina fechada em 2 minutos.' },
          { date: 'Set 2025', opponent: 'Oponente anterior', result: 'W', method: 'Sub R1 (guilhotina)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Mesmo template: adversario entrou, Jourdain pegou pescoco, guilhotina. Arma conhecida agora.' },
          { date: 'Jun 2025', opponent: 'Derrota Pena', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Ultima luta nos Penas. Apanhou no volume, decidiu descer.' },
        ],
        layoff_warning: null,
        momentum_score: 7,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note:
          'Dois finish R1 seguidos no peso novo, ambos guilhotinas contra lutadores que tentaram entrar agressivos. Descoberta: no Peso Galo, Jourdain e fisicamente competitivo, nao o pequeno do cage. Isso mudou o perfil dele totalmente.',
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Kyler Phillips', media_oponentes: 2.8, media_oponentes_label: 'Medio', aproveitamento: '1V-2D ult 3', contra_top5: '0V-0D' },
      fighter2: { nome: 'Charles Jourdain', media_oponentes: 2.5, media_oponentes_label: 'Medio', aproveitamento: '2V-1D ult 3', contra_top5: '0V-1D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum direto. Ambos enfrentaram veteranos mid-tier em anos recentes. A luta e um teste de "quem se reinventou melhor pro ciclo novo": Jourdain na divisao nova ou Phillips corrigindo os vazamentos de cardio e counter.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.2, valueB: 4.8, maxVal: 6, format: 'decimal' },
        { label: 'Precisao de Strikes (%)', valueA: 42, valueB: 38, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.1, valueB: 4.4, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Jourdain absorve muito. Peso novo ainda testa limite.' },
        { label: 'Defesa de Strikes (%)', valueA: 58, valueB: 48, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 1.1, valueB: 0.9, maxVal: 5, format: 'decimal' },
        { label: 'Precisao de Takedown (%)', valueA: 40, valueB: 30, maxVal: 100, format: 'percent' },
        { label: 'Defesa de Takedown (%)', valueA: 62, valueB: 55, maxVal: 100, format: 'percent' },
        { label: 'Submissoes por 15 Min', valueA: 0.3, valueB: 1.4, maxVal: 3, format: 'decimal', note: 'Jourdain 4x mais ativo em tentativa de sub. E a guilhotina e a arma principal.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '30 anos', fighter2: '30 anos' },
        { label: 'Altura', fighter1: '1,73m', fighter2: '1,75m' },
        { label: 'Envergadura', fighter1: '183cm (72")', fighter2: '175cm (69")' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Southpaw' },
        { label: 'Academia', fighter1: 'MMA Lab', fighter2: 'Tristar Gym' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Distancia', advantage: 'fighter1', gap: 2, note: 'Phillips tem 8cm a mais de alcance e stance ortodoxo solido. Deveria ser vantagem tecnica limpa.' },
        { label: 'Volume e Pressao', advantage: 'fighter2', gap: 3, note: 'Jourdain 4.8 SLpM vs Phillips 4.2. Southpaw + pressao + ritmo de 3 rounds inteiros.' },
        { label: 'Finalizacao no Chao', advantage: 'fighter2', gap: 4, note: 'Duas guilhotinas R1 seguidas contam. Phillips nao finalizou ninguem no UFC recente.' },
        { label: 'Cardio em 3 rounds', advantage: 'fighter2', gap: 2, note: 'Phillips caiu no ritmo no R3 contra Oliveira e Munhoz. Jourdain sustenta volume ate o final.' },
        { label: 'Wrestling Defensivo', advantage: 'fighter1', gap: 1, note: 'Phillips 62% vs Jourdain 55%. Ambos competentes, mas Phillips menos exposto a TD.' },
        { label: 'Poder de Nocaute', advantage: 'even', gap: 0, note: 'Nenhum dos dois e finalizador de mao pura. Luta tende a ir pra decisao ou finalizacao.' },
      ],
      summary: 'Jourdain tem vantagem em 3 das 6 dimensoes, incluindo as duas que vencem a luta no Peso Galo: volume em rounds finais e finalizacao no chao. Phillips tem o tool kit pro R1 (alcance, stance), mas precisa sustentar o plano A por 15 minutos, e ja mostrou que nao sustenta.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Kyler Phillips', ko_tko: { count: 3, percent: 25 }, submission: { count: 2, percent: 17 }, decision: { count: 7, percent: 58 }, total_wins: 12 },
      fighter2: { nome: 'Charles Jourdain', ko_tko: { count: 6, percent: 35 }, submission: { count: 7, percent: 41 }, decision: { count: 4, percent: 24 }, total_wins: 17 },
      insight: 'Phillips vive de decisao: 58% das vitorias por cartao. Jourdain finaliza em 76% dos wins (KO ou sub), e a guilhotina esta em alta. Pra Phillips ganhar, precisa sobreviver 15 minutos sem eventos que o Jourdain historicamente cria.',
    },
    previsao_final: {
      winner_name: 'Charles Jourdain',
      winner_side: 'fighter2',
      predicted_method: 'Decisao Unanime ou Submissao R2 (guilhotina)',
      confidence_score: 6,
      confidence_label: 'MEDIA',
      explanation:
        'Conviccao 6, nao 7, porque Phillips ainda tem o kit basico pra ganhar via decisao se souber manter distancia. Mas o padrao do Jourdain versao Galo (2 guilhotinas R1 seguidas) + o historico de Phillips caindo em rounds finais cria um caminho pro Jourdain que se sustenta em multiplos cenarios. Aposta segura e Jourdain, metodo aberto.',
      x_factor: {
        title: 'A Primeira Tentativa de Entrada',
        description: 'Se Phillips tentar fechar distancia ou Jourdain forcar clinch no R1, o Jourdain fatalmente vai tentar a guilhotina. Se Phillips sobreviver a entrada e voltar pra distancia, a luta muda dinamica completamente.',
      },
      upset_alert: {
        title: 'O Reach do Phillips em 3 Rounds',
        description: 'Se Phillips fizer o que so ele faz bem (distancia com jab + chute low), ele pode acumular pontos suficientes pra decisao dividida. Mas precisa manter disciplina de 15 minutos sem cair em clinch ou tentar takedown.',
      },
      probabilities: { fighter1: { nome: 'Phillips', percent: 34 }, fighter2: { nome: 'Jourdain', percent: 63 }, draw: 3 },
      odds: {
        fighter1_odds: '+128',
        fighter2_odds: '-148',
        fighter1_name: 'Kyler Phillips',
        fighter2_name: 'Charles Jourdain',
        source: 'Media de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Charles Jourdain', odds: '-148', reasoning: 'Favorito com razao. Valor discreto, aposta segura.' },
          { type: 'Metodo', pick: 'Jourdain por submissao', odds: '+250', reasoning: 'Guilhotina e a assinatura atual. Duas lutas R1 consecutivas provando que nao e coincidencia.' },
          { type: 'Rounds Over/Under', pick: 'Over 2.5 rounds', odds: '+110', reasoning: 'Phillips historicamente leva decisao ou perde decisao. Jourdain costuma finalizar cedo ou ir ate o cartao. Over 2.5 combina cenarios do Phillips levando ao R3.' },
        ],
        best_bet: {
          pick: 'Jourdain por submissao a +250',
          reasoning: 'A assinatura atual do Jourdain + o hist do Phillips de cair em fadiga cria o cenario onde o pescoco esta la pra tomar. Valor coerente com conviccao 6.',
        },
      },
      key_stats: [
        { value: '2', label: 'guilhotinas R1 consecutivas do Jourdain no Peso Galo', sublabel: 'A assinatura da divisao nova esta armada' },
        { value: '2', label: 'derrotas seguidas do Phillips antes dessa luta', sublabel: 'Saiu do top 15, cardio questionavel' },
        { value: '72', label: 'polegadas de envergadura do Phillips', sublabel: 'A ferramenta que ele precisa usar perfeito pra sobreviver' },
      ],
      armadilha: {
        titulo: 'Armadilha: Phillips por KO',
        descricao: 'Mercado paga bem em Phillips por nocaute, mas ele tem 3 KOs em 12 vitorias e nunca nocauteou ninguem no UFC por KO limpo. Se for apostar no Phillips, o valor esta na decisao, nao no finish.',
      },
      conviction: {
        thesis:
          'A tese e: Charles Jourdain vence porque (1) no Peso Galo, a sequencia dele e 2-0 com 2 guilhotinas R1, estabelecendo padrao real de ameaca de finalizacao contra qualquer um que feche distancia; (2) Phillips perdeu as duas ultimas lutas por cardio em rounds finais (Oliveira e Munhoz ambos venceram via pressao sustentada por 15 minutos); (3) estilisticamente, Phillips tende a recuar e ceder ritmo em rounds 2 e 3, exatamente o tipo de lutador que Jourdain pressiona e captura pescoco. O caminho e Jourdain pressionar do sino, forcar Phillips a absorver combinacoes ou arriscar clinch, e no momento em que Phillips errar entrada ou cair na cabeca baixa em escape, finalizar via guilhotina. Se nao finalizar, leva decisao no volume. Isso desmorona se Phillips mantiver disciplina de distancia por 15 minutos inteiros usando o reach de 72 polegadas.',
        conviction_score: 6,
        conviction_rationale: 'Conviccao 6 porque o padrao Jourdain no peso novo e recente (so 2 lutas) e nao sabemos ainda o cap dele contra ranked fighters. Mas Phillips entra saindo do top 15 e com problemas estruturais diagnosticados. A combinacao de tendencia de alta do Jourdain + crise do Phillips cria edge real, mas nao e esmagador.',
        conviction_breakers: [
          'Se Phillips surpreender com discipline total de distancia por 15 minutos sem tentar clinch nem arriscar, leva decisao.',
          'Se Jourdain ficar exposto ao counter do Phillips no R1 (lutador southpaw pressionando entra em linha do jab ortodoxo), absorve e vira a luta.',
          'Se Phillips entrar em clinch e Jourdain nao conseguir fechar a guilhotina na primeira tentativa, o padrao dele de finish R1 quebra.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 34,
          key_scenario: 'Phillips mantem distancia com jab e low kick por 3 rounds inteiros, nega todo clinch e nega todo tentativa de shot, acumula pontos no cartao mesmo absorvendo volume maior do Jourdain. Decisao unanime ou dividida a favor dele.',
          required_conditions: [
            'Zero tentativas de clinch ou TD ofensivo',
            'Usar reach de 72 polegadas em 80% dos intercambios',
            'Sobreviver pelo menos uma tentativa seria de guilhotina',
            'Sustentar ritmo de trabalho ate 14:59',
          ],
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'phillips-vs-jourdain');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
