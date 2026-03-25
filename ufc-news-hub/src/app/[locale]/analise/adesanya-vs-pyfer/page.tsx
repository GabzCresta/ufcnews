'use client';

import { useLocale } from 'next-intl';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

// ============================================================
// SHARED METADATA (same across all locales)
// ============================================================
const sharedMeta = {
  id: 'adesanya-vs-pyfer',
  evento_id: null,
  slug: 'adesanya-vs-pyfer',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,93m', envergadura: '203cm', idade: 36, academia: 'City Kickboxing' },
      fighter2: { altura: '1,88m', envergadura: '190cm', idade: 29, academia: 'Team Balance' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1' as const,
    predictedMethod: 'Decisao Unanime',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Israel Adesanya',
    record: '24-5-0',
    ultimasLutas: [
      { result: 'L' as const, opponent: 'Nassourdine Imavov', method: 'TKO R2', event: 'UFC Fight Night 250' },
      { result: 'L' as const, opponent: 'Dricus Du Plessis', method: 'Sub R4', event: 'UFC 305' },
      { result: 'L' as const, opponent: 'Sean Strickland', method: 'Decisao Unanime', event: 'UFC 293' },
    ],
  },
  fighter2_info: {
    nome: 'Joe Pyfer',
    record: '15-3-0',
    ultimasLutas: [
      { result: 'W' as const, opponent: 'Abusupiyan Magomedov', method: 'Sub R2', event: 'UFC 320' },
      { result: 'W' as const, opponent: 'Kelvin Gastelum', method: 'Decisao Unanime', event: 'UFC 316' },
      { result: 'W' as const, opponent: 'Marc-Andre Barriault', method: 'KO R1', event: 'UFC 303' },
    ],
  },
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Medio (185 lbs)',
  num_rounds: 5,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single' as const,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

// ============================================================
// SHARED FIGHT HISTORY DATA (same across all locales)
// ============================================================
const adesanyaFullHistory = [
  { date: 'Fev 2018', opponent: 'Rob Wilkinson', result: 'W' as const, method: 'TKO R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: '' },
  { date: 'Jun 2018', opponent: 'Marvin Vettori', result: 'W' as const, method: 'SD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: '' },
  { date: 'Nov 2018', opponent: 'Derek Brunson', result: 'W' as const, method: 'TKO R1', opponent_rank: '#9 MW', quality_score: 3, quality_label: 'Bom', note: '' },
  { date: 'Fev 2019', opponent: 'Anderson Silva', result: 'W' as const, method: 'UD', opponent_rank: '#15 MW', quality_score: 3, quality_label: 'Bom', note: '' },
  { date: 'Abr 2019', opponent: 'Kelvin Gastelum', result: 'W' as const, method: 'UD', opponent_rank: '#5 MW', quality_score: 4, quality_label: 'Muito Bom', note: '' },
  { date: 'Out 2019', opponent: 'Robert Whittaker', result: 'W' as const, method: 'KO R2', opponent_rank: 'Campeao MW', quality_score: 5, quality_label: 'Excelente', note: '' },
  { date: 'Mar 2020', opponent: 'Yoel Romero', result: 'W' as const, method: 'UD', opponent_rank: '#3 MW', quality_score: 4, quality_label: 'Muito Bom', note: '' },
  { date: 'Set 2020', opponent: 'Paulo Costa', result: 'W' as const, method: 'TKO R2', opponent_rank: '#2 MW', quality_score: 4, quality_label: 'Muito Bom', note: '' },
  { date: 'Mar 2021', opponent: 'Jan Blachowicz', result: 'L' as const, method: 'UD', opponent_rank: 'Campeao LHW', quality_score: 5, quality_label: 'Excelente', note: '' },
  { date: 'Jun 2021', opponent: 'Marvin Vettori', result: 'W' as const, method: 'UD', opponent_rank: '#3 MW', quality_score: 4, quality_label: 'Muito Bom', note: '' },
  { date: 'Fev 2022', opponent: 'Robert Whittaker', result: 'W' as const, method: 'UD', opponent_rank: '#1 MW', quality_score: 5, quality_label: 'Excelente', note: '' },
  { date: 'Jul 2022', opponent: 'Jared Cannonier', result: 'W' as const, method: 'UD', opponent_rank: '#2 MW', quality_score: 4, quality_label: 'Muito Bom', note: '' },
  { date: 'Nov 2022', opponent: 'Alex Pereira', result: 'L' as const, method: 'TKO R5', opponent_rank: '#4 MW', quality_score: 4, quality_label: 'Muito Bom', note: '' },
  { date: 'Abr 2023', opponent: 'Alex Pereira', result: 'W' as const, method: 'KO R2', opponent_rank: 'Campeao MW', quality_score: 5, quality_label: 'Excelente', note: '' },
  { date: 'Set 2023', opponent: 'Sean Strickland', result: 'L' as const, method: 'UD', opponent_rank: '#4 MW', quality_score: 4, quality_label: 'Muito Bom', note: '' },
  { date: 'Ago 2024', opponent: 'Dricus Du Plessis', result: 'L' as const, method: 'Sub R4', opponent_rank: 'Campeao MW', quality_score: 5, quality_label: 'Excelente', note: '' },
  { date: 'Fev 2025', opponent: 'Nassourdine Imavov', result: 'L' as const, method: 'TKO R2', opponent_rank: '#7 MW', quality_score: 4, quality_label: 'Muito Bom', note: '' },
];

const pyferFullHistory = [
  { date: 'Ago 2022', opponent: 'Alen Amedovski', result: 'W' as const, method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: '' },
  { date: 'Mar 2023', opponent: 'Gerald Meerschaert', result: 'W' as const, method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: '' },
  { date: 'Out 2023', opponent: 'Abdul Razak Alhassan', result: 'W' as const, method: 'Sub R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: '' },
  { date: 'Fev 2024', opponent: 'Jack Hermansson', result: 'L' as const, method: 'UD', opponent_rank: '#12 MW', quality_score: 3, quality_label: 'Bom', note: '' },
  { date: 'Jun 2024', opponent: 'Marc-Andre Barriault', result: 'W' as const, method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: '' },
  { date: 'Jun 2025', opponent: 'Kelvin Gastelum', result: 'W' as const, method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: '' },
  { date: 'Out 2025', opponent: 'Abusupiyan Magomedov', result: 'W' as const, method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: '' },
];

// ============================================================
// SHARED STATS (identical numbers across all locales)
// ============================================================
const sharedStats = [
  { label: 'Sig. Strikes por Minuto', valueA: 3.93, valueB: 3.72, maxVal: 6, format: 'decimal' as const },
  { label: 'Precisao de Strikes (%)', valueA: 48, valueB: 41, maxVal: 100, format: 'percent' as const },
  { label: 'Strikes Absorvidos/Min', valueA: 3.11, valueB: 3.48, maxVal: 6, format: 'decimal' as const, reverseWinner: true },
  { label: 'Defesa de Strikes (%)', valueA: 56, valueB: 52, maxVal: 100, format: 'percent' as const },
  { label: 'Takedowns por 15 Min', valueA: 0.05, valueB: 1.45, maxVal: 4, format: 'decimal' as const },
  { label: 'Precisao de Takedown (%)', valueA: 14, valueB: 83, maxVal: 100, format: 'percent' as const },
  { label: 'Defesa de Takedown (%)', valueA: 77, valueB: 50, maxVal: 100, format: 'percent' as const },
  { label: 'Submissoes por 15 Min', valueA: 0.1, valueB: 0.87, maxVal: 3, format: 'decimal' as const },
];

const sharedDistribuicao = {
  fighter1: {
    nome: 'Adesanya',
    ko_tko: { count: 16, percent: 67 },
    submission: { count: 0, percent: 0 },
    decision: { count: 8, percent: 33 },
    total_wins: 24,
  },
  fighter2: {
    nome: 'Pyfer',
    ko_tko: { count: 9, percent: 60 },
    submission: { count: 4, percent: 27 },
    decision: { count: 2, percent: 13 },
    total_wins: 15,
  },
};

const sharedOdds = {
  fighter1_odds: '-130',
  fighter2_odds: '+110',
  fighter1_name: 'Israel Adesanya',
  fighter2_name: 'Joe Pyfer',
};

const sharedProbabilities = {
  fighter1: { nome: 'Adesanya', percent: 52 },
  fighter2: { nome: 'Pyfer', percent: 45 },
  draw: 3,
};

// ============================================================
// PORTUGUESE (PT)
// ============================================================
const analisePT: FullSingleAnalise = {
  ...sharedMeta,
  titulo: 'Adesanya vs Pyfer: O Ultimo Teste do Stylebender',
  subtitulo: 'O ex-campeao busca encerrar sequencia de 3 derrotas contra o jovem nocauteador #14 do ranking',

  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
      evento_data: '28 de Marco, 2026',
      evento_local: 'Climate Pledge Arena, Seattle, Washington',
      categoria_peso: 'Peso Medio (185 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'Renascimento ou Aposentadoria?',
      tagline_sub: 'Tres derrotas seguidas. Um jovem faminto. A carreira de Izzy em jogo em Seattle.',
      fighter1: {
        nome_completo: 'Israel "The Last Stylebender" Adesanya',
        apelido: 'The Last Stylebender',
        sobrenome: 'Adesanya',
        record: '24-5-0',
        ranking: '#4 Peso Medio',
        info_extra: 'Auckland, Nova Zelandia | 36 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/ADESANYA_ISRAEL_L_02-01.png?itok=YGc30Vwe',
      },
      fighter2: {
        nome_completo: 'Joe "Bodybagz" Pyfer',
        apelido: 'Bodybagz',
        sobrenome: 'Pyfer',
        record: '15-3-0',
        ranking: '#14 Peso Medio',
        info_extra: 'Allentown, Pennsylvania | 29 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-06/PYFER_JOE_L_06-29.png?itok=prLW4_bl',
      },
    },

    narrativa: {
      html_content: `
        <h3 class="font-display text-xl uppercase text-ufc-red mb-4">O Crepusculo de um Rei</h3>
        <p class="mb-4">
          <strong class="text-ufc-red">Israel Adesanya</strong> ja foi o lutador mais dominante do peso medio do UFC. Duas vezes campeao, dono de um reinado que incluiu cinco defesas de titulo e performances que redefiniam o que era possivel no striking de MMA. Hoje, aos 36 anos, ele chega a Seattle com tres derrotas consecutivas e uma pergunta que ninguem quer fazer em voz alta: acabou?
        </p>
        <p class="mb-4">
          A queda comecou em setembro de 2023, quando Sean Strickland, um azarao massivo a +450, desmontou o reinado de Adesanya com um gameplan simples: pressao constante, jab na cara, e recusa total de dar espaco. Depois veio Dricus Du Plessis, que submeteu Izzy no quarto round no UFC 305 em Perth. E a mais recente, talvez a mais dolorosa: Nassourdine Imavov nocauteou Adesanya no segundo round na Arabia Saudita, em fevereiro de 2025. Um overhand right na mandibula, seguido de um uppercut esquerdo enquanto Izzy caia. Brutal. Rapido. Definitivo.
        </p>
        <h3 class="font-display text-xl uppercase text-ufc-red mb-4 mt-8">Bodybagz: A Nova Onda do Peso Medio</h3>
        <p class="mb-4">
          Do outro lado esta <strong class="text-blue-400">Joe Pyfer</strong>, 29 anos, apelido "Bodybagz", e com uma historia de vida que rivaliza com qualquer roteiro de filme. Cresceu numa situacao de rua em Allentown, Pennsylvania, superou uma infancia extremamente dificil, e canalizou tudo para o MMA. Hoje, com 15 vitorias (9 por nocaute, 4 por submissao), Pyfer e um dos prospectos mais perigosos do peso medio. Desde a derrota para Jack Hermansson em fevereiro de 2024, sao tres vitorias seguidas, incluindo um nocaute devastador sobre Barriault no primeiro round e uma submissao impressionante sobre Magomedov.
        </p>
        <h3 class="font-display text-xl uppercase text-ufc-red mb-4 mt-8">O Que Esta em Jogo</h3>
        <p class="mb-4">
          Para Adesanya, essa nao e apenas mais uma luta. E possivelmente a ultima chance de provar que ainda pertence a elite. Quatro derrotas nas ultimas cinco lutas significariam, para muitos, o sinal definitivo de que o tempo passou. Para Pyfer, a oportunidade e enorme. Vencer um ex-campeao com o nome de Adesanya, num main event de 5 rounds, e o tipo de vitoria que catapulta um lutador do #14 para o top 10. A diferenca de experiencia e absurda: Adesanya tem 13 lutas no UFC contra os melhores do mundo. Pyfer tem 7 lutas no UFC e nunca fez 5 rounds. Mas no MMA, juventude e poder bruto as vezes valem mais que curriculo.
        </p>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: '#4 Peso Medio', fighter2: '#14 Peso Medio' },
        { dimensao: 'Sequencia', fighter1: '3 derrotas consecutivas', fighter2: '3 vitorias consecutivas' },
        { dimensao: 'Objetivo', fighter1: 'Encerrar sequencia negativa, provar relevancia', fighter2: 'Entrar no top 10, construir nome' },
        { dimensao: 'Narrativa', fighter1: 'Ultimo capitulo ou renascimento?', fighter2: 'O jovem que derruba a lenda' },
        { dimensao: 'Risco', fighter1: 'Quarta derrota seguida, pressao por aposentadoria', fighter2: 'Derrota em main event de 5 rounds expoe inexperiencia' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'O STYLEBENDER RENASCE',
          subtitulo: 'Adesanya usa distancia, experiencia e QI de luta para dominar o jovem Pyfer',
          consequencias: [
            { tag: 'RANKING', texto: 'Adesanya se mantem no top 5 e respira na divisao. Volta a ser opcao para lutas grandes.' },
            { tag: 'LEGADO', texto: 'Narrativa de superacao: o ex-campeao que recusou desistir e voltou a vencer contra um jovem perigoso.' },
            { tag: 'DIVISAO', texto: 'Pyfer volta a ser projeto de longo prazo. Derrota nao e desastrosa pela diferenca de experiencia.' },
          ],
          proxima_luta: 'Adesanya vs um top 10 como Brendan Allen ou Caio Borralho',
        },
        fighter2_vence: {
          titulo: 'A NOVA ERA DO PESO MEDIO',
          subtitulo: 'Pyfer nocauteia o ex-campeao e entra no radar dos top 10',
          consequencias: [
            { tag: 'RANKING', texto: 'Pyfer salta para o top 8 com vitoria sobre ex-campeao em main event.' },
            { tag: 'LEGADO', texto: 'Adesanya acumula quarta derrota seguida. Pressao por aposentadoria se torna enorme.' },
            { tag: 'DIVISAO', texto: 'Pyfer se estabelece como o proximo nome a observar no peso medio, aos 29 anos.' },
          ],
          proxima_luta: 'Pyfer vs um top 5 como Nassourdine Imavov ou Robert Whittaker',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Israel Adesanya',
        color: 'red',
        recent_fights: [
          { date: 'Fev 2025', opponent: 'Nassourdine Imavov', result: 'L', method: 'TKO R2 (socos)', opponent_rank: '#7 MW', quality_score: 4, quality_label: 'Muito Bom', note: 'Nocauteado no segundo round por um overhand right seguido de uppercut. Adesanya vinha bem no primeiro round mas foi pego de forma limpa.' },
          { date: 'Ago 2024', opponent: 'Dricus Du Plessis', result: 'L', method: 'Sub R4 (mata-leao)', opponent_rank: 'Campeao MW', quality_score: 5, quality_label: 'Excelente', note: 'Luta competitiva por tres rounds, Adesanya chegou a dominar com body shots no R3, mas Du Plessis conectou no R4, pegou as costas e finalizou.' },
          { date: 'Set 2023', opponent: 'Sean Strickland', result: 'L', method: 'Decisao Unanime (49-46)', opponent_rank: '#4 MW', quality_score: 4, quality_label: 'Muito Bom', note: 'Upset historico. Strickland usou jab e pressao constante. Adesanya nao conseguiu encontrar ritmo em nenhum momento. Placares unanimes 49-46.' },
          { date: 'Nov 2022', opponent: 'Alex Pereira', result: 'L', method: 'TKO R5', opponent_rank: '#4 MW', quality_score: 4, quality_label: 'Muito Bom', note: 'Adesanya vencia nos placares quando Pereira conectou um left hook devastador no R5. Terceira derrota para Pereira contando kickboxing.' },
          { date: 'Jul 2022', opponent: 'Jared Cannonier', result: 'W', method: 'Decisao Unanime', opponent_rank: '#2 MW', quality_score: 4, quality_label: 'Muito Bom', note: 'Defesa de titulo controlada. Adesanya usou distancia e contragolpes precisos por 5 rounds sem ser ameacado.' },
        ],
        full_fight_history: adesanyaFullHistory,
        layoff_warning: 'Cerca de 13 meses desde a ultima luta (fevereiro 2025). Layoff moderado, mas vem de tres derrotas e dois nocautes recentes.',
        momentum_score: 2,
        momentum_label: 'Em Queda',
        momentum_trend: 'descending',
        momentum_note: 'Adesanya esta no pior momento da carreira. Tres derrotas consecutivas, sendo duas por nocaute/TKO e uma por submissao. A derrota para Imavov foi particularmente preocupante porque aconteceu rapido, no segundo round, contra um oponente que nao era campeao. O chin de Adesanya, antes considerado elite, parece comprometido aos 36 anos. A unica vitoria nas ultimas cinco lutas foi o KO sobre Pereira na revanche, em abril de 2023, ha quase tres anos.',
      },
      fighter2: {
        nome: 'Joe Pyfer',
        color: 'blue',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Abusupiyan Magomedov', result: 'W', method: 'Sub R2 (face crank)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria impressionante por submissao no segundo round contra striker perigoso. Mostrou evolucao no grappling.' },
          { date: 'Jun 2025', opponent: 'Kelvin Gastelum', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Dominou Gastelum com dois knockdowns ao longo de tres rounds. Primeira vitoria por decisao no UFC.' },
          { date: 'Jun 2024', opponent: 'Marc-Andre Barriault', result: 'W', method: 'KO R1 (1:25)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Nocaute relampago no primeiro round. Poder bruto impressionante.' },
          { date: 'Fev 2024', opponent: 'Jack Hermansson', result: 'L', method: 'Decisao Unanime', opponent_rank: '#12 MW', quality_score: 3, quality_label: 'Bom', note: 'Primeira luta de 5 rounds, perdeu por decisao. Hermansson controlou com wrestling e experiencia. Pyfer visivelmente cansado nos rounds finais.' },
          { date: 'Out 2023', opponent: 'Abdul Razak Alhassan', result: 'W', method: 'Sub R2 (arm-triangle)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Finalizacao tecnica no segundo round. Mostrou versatilidade alem do striking.' },
        ],
        full_fight_history: pyferFullHistory,
        layoff_warning: null,
        momentum_score: 7,
        momentum_label: 'Em Ascensao',
        momentum_trend: 'ascending',
        momentum_note: 'Pyfer vem de tres vitorias consecutivas desde a derrota para Hermansson, mostrando evolucao clara a cada luta. Passou de um nocauteador puro para alguem que consegue vencer por decisao (Gastelum) e submissao (Magomedov). A sequencia e contra oponentes de nivel medio, o que limita o entusiasmo, mas a evolucao tecnica e real. Aos 29 anos, esta no momento ideal de desenvolvimento.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Adesanya',
        media_oponentes: 5,
        media_oponentes_label: 'Excelente',
        aproveitamento: '13W-5L (72%)',
        contra_top5: '8W-4L',
      },
      fighter2: {
        nome: 'Pyfer',
        media_oponentes: 2,
        media_oponentes_label: 'Medio',
        aproveitamento: '6W-1L (86%)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: 'Kelvin Gastelum e o unico oponente em comum relevante. Adesanya venceu Gastelum em 2019 por decisao unanime numa luta epica de 5 rounds (Luta do Ano). Pyfer venceu Gastelum em 2025 por decisao unanime com dois knockdowns. Gastelum de 2019 era um lutador completamente diferente (top 5, vindo de nocautear Bisping) comparado ao Gastelum de 2025 (sem ranking, em declinio). A comparacao direta e limitada.',
    },

    oponente_comum: {
      oponente_nome: 'Kelvin Gastelum',
      fighter1_result: {
        resultado: 'Vitoria por Decisao Unanime',
        metodo: '48-46, 48-46, 48-46',
        duracao: '5 rounds (25:00)',
        contexto: 'Considerada uma das melhores lutas da historia do UFC. Gastelum derrubou Adesanya no quarto round e quase finalizou. Adesanya se recuperou e dominou o quinto round para selar a vitoria pelo titulo interino. Uma guerra de 25 minutos com trocas pesadas e momentos dramaticos em cada round.',
        performance: 'Adesanya mostrou coracao enorme, capacidade de recuperacao e QI de luta elite. Venceu uma guerra real contra um Gastelum que estava no auge.',
        evento: 'UFC 236',
        data: 'Abr 2019',
      },
      fighter2_result: {
        resultado: 'Vitoria por Decisao Unanime',
        metodo: 'Placares nao disponveis',
        duracao: '3 rounds (15:00)',
        contexto: 'Pyfer controlou a luta com pressao, derrubou Gastelum duas vezes com power shots, e venceu com clareza por tres rounds. Gastelum nao ofereceu resistencia significativa e ja estava claramente em fase descendente da carreira.',
        performance: 'Pyfer mostrou maturidade ao nao buscar o nocaute desesperadamente depois dos knockdowns, controlando o ritmo e vencendo nos pontos. Mas o nivel de Gastelum nessa fase era muito inferior ao de 2019.',
        evento: 'UFC 316',
        data: 'Jun 2025',
      },
      insight: 'A comparacao e injusta mas existe. Adesanya enfrentou um Gastelum elite em 2019, que o derrubou e quase finalizou, e venceu uma luta epica de 5 rounds. Pyfer enfrentou um Gastelum em declinio em 2025 e venceu com dois knockdowns. O contexto e completamente diferente, mas Pyfer mostrou algo que Adesanya tambem mostrou: poder para machucar Gastelum e inteligencia para nao se empolgar.',
    },

    comparacao_estatistica: {
      stats: sharedStats,
      tale_of_tape: [
        { label: 'Idade', fighter1: '36 anos', fighter2: '29 anos', note: 'Pyfer 7 anos mais jovem' },
        { label: 'Altura', fighter1: '1,93m (6\'4")', fighter2: '1,88m (6\'2")', note: 'Adesanya 2 polegadas mais alto' },
        { label: 'Envergadura', fighter1: '203cm (80")', fighter2: '190cm (75")', note: 'Adesanya com 5 polegadas de vantagem' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo', note: null },
        { label: 'Academia', fighter1: 'City Kickboxing, Auckland', fighter2: 'Team Balance, Philadelphia', note: null },
        { label: 'Estreia UFC', fighter1: 'Fevereiro 2018', fighter2: 'Agosto 2022', note: 'Adesanya com 4+ anos a mais de experiencia UFC' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking Tecnico', valueA: 88, valueB: 62, labelA: 'Muito Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Adesanya e um dos strikers mais tecnicos da historia do UFC. Footwork, timing e variacao de angulos de nivel mundial. Pyfer e mais limitado tecnicamente, dependendo mais de poder bruto.' },
        { label: 'Poder de Nocaute', valueA: 72, valueB: 85, labelA: 'Bom', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: 'Pyfer tem 9 KOs em 15 vitorias (60%). Poder one-punch real. Adesanya tem 16 KOs na carreira mas nos ultimos anos tem menos finalizacoes por nocaute.' },
        { label: 'Grappling Ofensivo', valueA: 25, valueB: 55, labelA: 'Ruim', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Adesanya quase nunca busca takedowns (0.05 por 15 min). Pyfer tem 4 submissoes na carreira e media de 1.45 TDs por 15 min. Vantagem clara no grappling ofensivo.' },
        { label: 'Defesa de Takedown', valueA: 80, valueB: 50, labelA: 'Muito Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Adesanya com 77% de defesa de TD na carreira. Pyfer foi dominado por Hermansson no chao, com apenas 50% de defesa.' },
        { label: 'Cardio e Resistencia', valueA: 78, valueB: 58, labelA: 'Muito Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Adesanya lutou 5 rounds diversas vezes e sempre manteve ritmo. Pyfer cansou visivelmente nos rounds finais contra Hermansson, sua unica luta de 5 rounds.' },
        { label: 'QI de Luta e Experiencia', valueA: 92, valueB: 48, labelA: 'Excelente', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Adesanya tem 18 lutas no UFC contra os melhores do mundo, cinco defesas de titulo e adaptacoes mid-fight comprovadas. Pyfer tem 7 lutas no UFC contra oponentes de nivel medio.' },
      ],
      insight: 'O matchup revela uma dinamica interessante: Adesanya e superior em quase todas as areas tecnicas, especialmente striking, experiencia e cardio. Mas Pyfer leva vantagem no poder bruto e no grappling ofensivo. A grande questao nao e tecnica, e fisica: o chin de Adesanya ainda aguenta o poder de Pyfer? Tecnicamente, Adesanya deveria dominar. Fisicamente, Pyfer pode encerrar a qualquer momento.',
    },

    distribuicao_vitorias: {
      ...sharedDistribuicao,
      insight: 'Dois finalizadores por natureza, mas com estilos diferentes. Adesanya construiu 67% das vitorias por nocaute ao longo da carreira, porem nao finaliza ninguem por KO no UFC desde a revanche contra Pereira em abril de 2023. Zero submissoes na carreira inteira. Pyfer e mais diversificado: 60% por KO, 27% por submissao, mostrando que pode encerrar a luta de multiplas formas. A diferenca crucial: Pyfer encerra lutas cedo (media de 7 minutos por luta), Adesanya historicamente precisa de tempo para encontrar o timing.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1-R2',
          danger_level: 8,
          danger_label: 'VANTAGEM PYFER',
          color: 'green',
          title: 'Territorio Perigoso para Adesanya',
          description: 'Os dois primeiros rounds sao onde Pyfer e mais letal. Das 9 vitorias por KO, a maioria veio nos dois primeiros rounds. Barriault caiu em 1:25 do R1. Adesanya, por outro lado, foi nocauteado por Imavov no R2 e sofreu TKO de Pereira no R5 quando foi pego. O chin de Adesanya esta sob questao, e Pyfer traz o tipo de poder que pode explorar essa fraqueza cedo. Se Adesanya sobreviver os primeiros 10 minutos sem ser abalado, a dinamica muda completamente.',
        },
        {
          rounds: 'R3',
          danger_level: 5,
          danger_label: 'EQUILIBRADO',
          color: 'gold',
          title: 'O Round de Transicao',
          description: 'O terceiro round e onde a experiencia comeca a pesar. Pyfer nunca venceu uma luta que chegou ao R3, exceto por decisao contra Gastelum. Adesanya, apesar da fase ruim, tem centenas de minutos de experiencia em championship distance. Se ambos chegarem ao R3 sem danos significativos, o round funciona como ponto de transicao, com Adesanya comecando a encontrar o timing e Pyfer comecando a gastar energia.',
        },
        {
          rounds: 'R4-R5',
          danger_level: 8,
          danger_label: 'VANTAGEM ADESANYA',
          color: 'red',
          title: 'Championship Rounds: Territorio do Veterano',
          description: 'Os rounds finais sao onde a experiencia de Adesanya se torna arma. Pyfer perdeu sua unica luta de 5 rounds (Hermansson) e visivelmente cansou nos rounds finais. Adesanya lutou 5 rounds sete vezes no UFC e sempre manteve ritmo. Se a luta chegar aqui sem nocaute, Adesanya sera o grande favorito, com mais gas, mais experiencia e capacidade de encontrar aberturas contra um oponente cansado.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'AlertTriangle', title: 'Chin Comprometido', fighter: 'Adesanya', risk_level: 'RISCO ALTO', risk_color: 'red', description: 'Adesanya foi nocauteado/TKO em duas das ultimas tres lutas (Pereira R5, Imavov R2). Aos 36 anos, a capacidade de absorver impacto diminui naturalmente. Contra o poder de Pyfer, isso e a maior preocupacao da luta.' },
        { icon: 'Clock', title: 'Layoff de 13 Meses', fighter: 'Adesanya', risk_level: 'RISCO MEDIO', risk_color: 'yellow', description: 'Adesanya nao luta desde fevereiro de 2025. Para um lutador de 36 anos vindo de nocaute, o layoff pode afetar timing e reflexos. Porem, tambem deu tempo de recuperacao fisica e mental.' },
        { icon: 'TrendingUp', title: 'Tres Vitorias Seguidas com Evolucao', fighter: 'Pyfer', risk_level: 'POSITIVO', risk_color: 'green', description: 'Pyfer vem em sequencia ascendente: KO, decisao e submissao nas ultimas tres. A diversificacao de metodos mostra maturidade e evolucao real do game.' },
        { icon: 'Brain', title: 'Experiencia em Main Events', fighter: 'Adesanya', risk_level: 'POSITIVO', risk_color: 'green', description: 'Adesanya ja fez 12 main events no UFC, incluindo lutas de titulo contra os melhores do mundo. Pyfer nunca lutou um main event no UFC. A pressao de ser a luta principal de 5 rounds contra um nome como Adesanya e completamente nova para ele.' },
        { icon: 'Zap', title: 'Poder de Nocaute de Pyfer', fighter: 'Pyfer', risk_level: 'POSITIVO', risk_color: 'green', description: 'Pyfer quebrou o recorde de Francis Ngannou na maquina de soco, segundo relatos. Com 60% das vitorias por KO, ele traz poder de one-punch knockout que pode encerrar a luta a qualquer momento, especialmente contra um chin questionado.' },
        { icon: 'Activity', title: 'Cardio em 5 Rounds', fighter: 'Pyfer', risk_level: 'RISCO MEDIO', risk_color: 'yellow', description: 'A unica vez que Pyfer lutou 5 rounds (Hermansson), ele perdeu e visivelmente cansou. Contra o ritmo de Adesanya em championship rounds, a fadiga pode ser fator decisivo.' },
        { icon: 'Shield', title: 'Vantagem de Envergadura', fighter: 'Adesanya', risk_level: 'POSITIVO', risk_color: 'green', description: 'Adesanya tem 5 polegadas de vantagem na envergadura (80" vs 75"). Em luta de striking puro, isso permite controlar a distancia e conectar jabs e front kicks sem entrar no raio de perigo de Pyfer.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Adesanya',
        total_probability: 52,
        scenarios: [
          { name: 'Aula de Distancia', probability: 28, method: 'Decisao Unanime', description: 'Adesanya usa a envergadura de 80 polegadas para manter Pyfer na ponta, conecta jabs, front kicks e contragolpes. Frustra o jovem com movimento e leva uma decisao clara, especialmente nos rounds finais quando o cardio de Pyfer cai.' },
          { name: 'Counter Strike Mortal', probability: 14, method: 'KO/TKO R3-R5', description: 'Pyfer avanca agressivamente, Adesanya encontra o timing no contragolpe (left hook ou check hook) e encerra quando o jovem estiver cansado e menos defensivo nos rounds intermediarios ou finais.' },
          { name: 'Dominio nos Championship Rounds', probability: 10, method: 'Decisao Dividida', description: 'Luta equilibrada nos primeiros rounds, com Pyfer vencendo alguns momentos. Mas Adesanya assume controle no R4-R5 quando a experiencia e o cardio fazem diferenca, vencendo uma decisao apertada.' },
        ],
      },
      fighter2: {
        nome: 'Pyfer',
        total_probability: 45,
        scenarios: [
          { name: 'Bomba nos Rounds Iniciais', probability: 22, method: 'KO/TKO R1-R2', description: 'Pyfer fecha a distancia cedo, absorve alguns jabs, e conecta um power shot na mandibula de Adesanya. Com o chin questionado do veterano, um unico golpe limpo pode acabar com tudo nos primeiros 10 minutos.' },
          { name: 'Pressao e Acumulo', probability: 13, method: 'TKO R2-R3', description: 'Pyfer mantem pressao constante, similar ao que Strickland fez. Empurra Adesanya para a grade, mistura socos e clinch, e acumula dano ate o arbitro intervir.' },
          { name: 'Versatilidade no Chao', probability: 10, method: 'Submissao R2-R3', description: 'Pyfer surpreende com um takedown, usa o grappling que mostrou contra Magomedov e Alhassan, e encontra uma submissao. Adesanya tem zero experiencia em lutas no chao ofensivamente e pode ser vulneravel se posto de costas.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Israel Adesanya',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime ou TKO tardio',
      confidence_score: 5,
      confidence_label: 'MEDIA',
      explanation: 'Essa e uma luta dificil de prever com confianca alta. Adesanya, mesmo aos 36 anos e vindo de tres derrotas, possui vantagens tecnicas claras sobre Pyfer: melhor striking, mais experiencia, melhor cardio, e 5 polegadas de vantagem na envergadura. O salto de qualidade dos oponentes que Pyfer enfrentou (Gastelum em declinio, Barriault, Magomedov) para Adesanya e enorme. Porem, o chin de Adesanya e a maior incognita. Se estivesse intacto, essa seria uma previsao de alta confianca. Como nao esta, Pyfer tem um caminho real para a vitoria com seu poder de nocaute. Prevejo Adesanya usando distancia e experiencia para controlar a luta, especialmente nos rounds finais, mas com risco real de ser nocauteado nos primeiros dois rounds.',
      x_factor: {
        title: 'A Envergadura de 5 Polegadas',
        description: 'Adesanya tem 80 polegadas de envergadura contra 75 de Pyfer. Em numeros de UFC, essa e uma vantagem massiva. Se Adesanya usar jabs, front kicks e side kicks para manter distancia, Pyfer vai ter dificuldade enorme para entrar no raio de alcance. Toda a luta pode ser decidida por essa diferenca fisica.',
      },
      upset_alert: {
        title: 'O Chin de Vidro?',
        description: 'Se Pyfer conectar um power shot limpo nos primeiros dois rounds, especialmente um overhand ou left hook, Adesanya pode ir ao chao. Dois TKOs nas ultimas tres lutas nao mentem. Pyfer nao precisa de muitas chances, precisa de uma.',
      },
      probabilities: sharedProbabilities,
      value_picks: {
        moneyline: { pick: 'Pyfer (+110)', reasoning: 'Se as odds se mantiverem nessa faixa, Pyfer como azarao leve oferece valor real dado o poder de nocaute e o chin questionado de Adesanya.' },
        method: { pick: 'Luta vai para decisao', reasoning: 'Apesar de ambos terem poder de nocaute, Adesanya historicamente favorece lutas longas (8 decisoes em 24 vitorias) e a envergadura pode manter distancia.' },
        over_under: { pick: 'Under 4.5 rounds', rounds: 4.5, reasoning: 'Adesanya foi finalizado em duas das ultimas tres lutas. Pyfer finaliza a maioria das lutas cedo. A probabilidade de finalizacao e maior que o normal.' },
        best_value: 'Pyfer dentro da distancia (+250 estimado) oferece o melhor valor. Se Pyfer vencer, provavelmente sera por nocaute nos primeiros rounds.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'O Jab e o Front Kick de Adesanya nos Primeiros 2 Minutos', icon: 'Target', description: 'Se Adesanya comecar a luta usando jab e front kick para manter distancia, e sinal de que o gameplan esta funcionando. Se Pyfer conseguir fechar distancia facilmente nesses primeiros minutos, a luta esta no territorio dele. Preste atencao na envergadura: Adesanya precisa usa-la ou vai desperdicar sua maior arma.' },
        { num: 2, title: 'A Reacao de Adesanya ao Primeiro Golpe Duro', icon: 'Shield', description: 'O momento mais revelador da luta sera quando Pyfer conectar o primeiro power shot limpo. A reacao do chin de Adesanya vai ditar tudo. Se ele absorver bem, a confianca sobe e ele pode dominar. Se balancear, Pyfer vai sentir o sangue e vir com tudo.' },
        { num: 3, title: 'O Gas de Pyfer no R3', icon: 'Activity', description: 'Pyfer cansou contra Hermansson nos rounds finais. Se a luta chegar ao terceiro round, observe o volume de strikes e a postura de Pyfer. Se as maos comecarem a baixar e o footwork ficar pesado, Adesanya vai capitalizar.' },
        { num: 4, title: 'Pyfer Tentando Takedowns', icon: 'Crosshair', description: 'Pyfer tem 83% de precisao de takedown e 1.45 por 15 minutos. Se ele misturar takedowns com striking, pode quebrar o ritmo de Adesanya de uma forma que strikers puros como Cannonier nao conseguiram. Fique atento a quando e como Pyfer muda de nivel.' },
        { num: 5, title: 'A Linguagem Corporal de Adesanya Entre Rounds', icon: 'Brain', description: 'Um Adesanya que esta se divertindo, dancando e provocando e um Adesanya perigoso. Um Adesanya quieto, sentando no banco e respirando pesado e sinal de que a idade esta pesando. A linguagem corporal entre rounds vai contar a historia real.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'MAIN EVENT SEATTLE', content: 'ADESANYA vs PYFER\nUFC Fight Night | 28 de Marco\nClimate Pledge Arena, Seattle\n\n3 derrotas seguidas vs 3 vitorias seguidas\nO ex-campeao luta pela sobrevivencia.', color: 'red' },
        { slide_number: 2, title: 'ADESANYA: OS NUMEROS', content: '#4 do ranking peso medio\n24-5 na carreira (16 KOs)\n2x campeao do UFC\n5 defesas de titulo\n3.93 sig. strikes por minuto\n80" de envergadura\nMAS: 3 derrotas seguidas\n2 nocautes sofridos nas ultimas 3', color: 'red' },
        { slide_number: 3, title: 'PYFER: BODYBAGZ', content: '#14 do ranking peso medio\n15-3 na carreira (9 KOs, 4 subs)\n3 vitorias seguidas\n60% de finalizacao por nocaute\n83% de precisao de takedown\n29 anos, em plena ascensao\nQuebrou o recorde de Ngannou na maquina de soco', color: 'blue' },
        { slide_number: 4, title: 'A GRANDE QUESTAO', content: 'O CHIN DE ADESANYA\n\nImavov: TKO R2 (Fev 2025)\nDu Plessis: Sub R4 (Ago 2024)\nStrickland: UD (Set 2023)\nPereira: TKO R5 (Nov 2022)\n\n1 vitoria nas ultimas 5 lutas\nO tempo passou?\nOu o Stylebender ainda vive?', color: 'gold' },
        { slide_number: 5, title: 'PREVISAO', content: 'ADESANYA por Decisao Unanime\n\nConfianca: MEDIA\n52% Adesanya / 45% Pyfer\n\nA envergadura e a experiencia\ndevem controlar a distancia.\nMas um unico soco de Pyfer\npode mudar tudo.', color: 'gold' },
      ],
      twitter: [
        { num: '1/6', text: 'Adesanya vs Pyfer sabado em Seattle. O ex-campeao mais dominante do peso medio na ultima decada, com 3 derrotas seguidas, contra o jovem nocauteador de 29 anos. A analise completa:' },
        { num: '2/6', text: 'O numero que define essa luta: 5 POLEGADAS. Adesanya tem 80" de envergadura. Pyfer tem 75". Se Izzy usar essa vantagem com jab e front kick, Pyfer vai passar a noite tentando entrar no raio de alcance. A distancia e tudo.' },
        { num: '3/6', text: 'A outra face da moeda: Adesanya foi nocauteado/TKO em 2 das ultimas 3 lutas. Aos 36 anos, o chin nao e o mesmo. Pyfer tem 9 KOs em 15 vitorias e poder de one-punch. Basta UMA entrada limpa.' },
        { num: '4/6', text: 'Detalhe que ninguem fala: Pyfer tem 83% de precisao de takedown e 4 submissoes na carreira. Ele nao e apenas um nocauteador. Se misturar takedowns com striking, pode quebrar o ritmo de Adesanya de um jeito novo.' },
        { num: '5/6', text: 'O problema de Pyfer: nunca venceu uma luta que passou do R2 por finalizacao. Contra Hermansson (5 rounds), cansou e perdeu. Adesanya ja fez 7 lutas de 5 rounds no UFC. Championship rounds = territorio do veterano.' },
        { num: '6/6', text: 'Minha pick: Adesanya por decisao, mas com confianca MEDIA. A envergadura, a experiencia e os championship rounds favorecem Izzy. Mas Pyfer dentro da distancia nos R1-R2 e a aposta de valor do card. Uma luta que pode acabar a qualquer segundo.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: 'Israel Adesanya era o cara mais dominante do peso medio. Cinco defesas de titulo. Striking de outro planeta. Hoje, tres derrotas seguidas e uma pergunta: acabou? Sabado em Seattle, ele precisa responder contra Joe Pyfer.' },
        { time: '10-25s', title: 'Contexto', text: 'Adesanya tem 36 anos, 24-5, e foi nocauteado duas vezes nas ultimas tres lutas. O chin nao e o mesmo. Pyfer tem 29 anos, 15-3, nove KOs e esta em ascensao com tres vitorias seguidas. A diferenca de envergadura e de 5 polegadas a favor de Izzy. Mas Pyfer traz poder para compensar.' },
        { time: '25-40s', title: 'Analise Tecnica', text: 'A chave da luta: distancia. Se Adesanya manter Pyfer na ponta com jab e front kick, ele domina. Tem mais tecnica, mais experiencia, melhor cardio. Mas se Pyfer fechar a distancia e conectar, o chin de Adesanya esta vulneravel. Imavov provou isso em fevereiro. Dois cenarios completamente diferentes dependendo de quem controla o espaco.' },
        { time: '40-55s', title: 'Championship Rounds', text: 'Aqui esta o fator decisivo: Pyfer nunca venceu uma luta que passou do R2 por finalizacao. Contra Hermansson em 5 rounds, ele cansou e perdeu. Adesanya ja fez sete lutas de 5 rounds no UFC. Se chegar ao R4 sem nocaute, Izzy e o grande favorito.' },
        { time: '55-70s', title: 'Previsao e Valor', text: 'Minha call: Adesanya por decisao, confianca media. Mas Pyfer dentro da distancia nos rounds iniciais e a aposta de valor. Se voce acredita que o chin de Izzy esta feito, Pyfer por KO R1-R2 paga bem. A luta mais imprevisivel do card.' },
      ],
      tiktok: [
        { hook: 'Adesanya com TRES derrotas seguidas. O cara que era INTOCAVEL no peso medio.', body: 'Strickland por decisao. Du Plessis por submissao. Imavov por nocaute no R2. Tres formas diferentes de perder. Agora enfrenta Joe Pyfer, 29 anos, 9 KOs em 15 lutas, que quebrou o recorde de Ngannou na maquina de soco. O chin de Adesanya aguenta?', cta: 'Comenta IZZY ou PYFER!' },
        { hook: 'CINCO polegadas. Essa e a diferenca que pode salvar Adesanya.', body: 'Adesanya tem 80 polegadas de envergadura. Pyfer tem 75. Sao 5 polegadas. Se Izzy usar jab e front kick pra manter distancia, Pyfer NUNCA entra. Mas se Pyfer fechar, basta UM soco na mandibula. Duas realidades completamente diferentes.', cta: 'Quem controla a distancia? Comenta!' },
        { hook: 'Pyfer NUNCA venceu uma luta que passou do R2 por finalizacao.', body: 'Contra Hermansson em 5 rounds, Pyfer CANSOU e perdeu. Adesanya ja fez SETE lutas de 5 rounds no UFC. Se chegar ao quarto round sem nocaute, Izzy domina. Mas Pyfer so precisa de um momento. UM soco. E com o chin de Adesanya questionado, esse momento pode vir a qualquer segundo.', cta: 'Vai pro nocaute ou pra decisao? Comenta!' },
      ],
      headlines: [
        'Adesanya vs Pyfer: Renascimento ou Aposentadoria do Stylebender em Seattle?',
        'O Chin de Adesanya Contra o Poder de Pyfer: A Luta Que Define uma Carreira',
        '5 Polegadas de Vantagem: Por Que a Envergadura Pode Salvar Adesanya',
        'De 3 Derrotas Seguidas a Main Event: O Dilema de Israel Adesanya',
        'Pyfer Bodybagz: O Nocauteador que Pode Aposentar Adesanya',
        'UFC Seattle: Por Que Pyfer por KO e a Aposta de Valor do Card',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        ...sharedOdds,
        source: 'Media de DraftKings e casas de apostas (marco 2026)',
      },
      edges: [
        { icon: 'Shield', titulo: 'Vantagem de Envergadura Massiva', stat_headline: '80" VS 75": 5 POLEGADAS DE DIFERENCA', contexto: 'Adesanya tem uma das maiores envergaduras do peso medio. Contra um oponente com bracos curtos como Pyfer, essa vantagem permite controlar distancia com jab e front kick de forma eficiente.', implicacao_aposta: 'Favorece Adesanya por decisao e Over em rounds.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Zap', titulo: 'Chin Comprometido de Adesanya', stat_headline: '2 TKO/KOS SOFRIDOS NAS ULTIMAS 3 LUTAS', contexto: 'Adesanya foi finalizado por Pereira (TKO R5) e Imavov (TKO R2). Aos 36 anos, a absorcao de impacto diminui. Contra o poder de one-punch de Pyfer, e o maior fator de risco.', implicacao_aposta: 'Favorece Pyfer dentro da distancia. Props de KO/TKO Pyfer R1-R2 tem valor.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Activity', titulo: 'Cardio em 5 Rounds', stat_headline: 'PYFER PERDEU SUA UNICA LUTA DE 5 ROUNDS (HERMANSSON)', contexto: 'Pyfer visivelmente cansou nos rounds finais contra Hermansson. Adesanya ja fez 7 lutas de 5 rounds no UFC. Se a luta passar do R3, a vantagem de cardio e experiencia de Adesanya cresce exponencialmente.', implicacao_aposta: 'Over 2.5 rounds favorece Adesanya significativamente.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Target', titulo: 'Grappling Ofensivo de Pyfer', stat_headline: '83% DE PRECISAO DE TAKEDOWN, 4 SUBMISSOES NA CARREIRA', contexto: 'Pyfer nao e apenas um nocauteador. Tem 4 submissoes e alta precisao de takedowns. Pode misturar niveis e quebrar o ritmo de striking de Adesanya de um jeito que strikers puros nao conseguiram.', implicacao_aposta: 'Pyfer por submissao e uma aposta de valor oculto.', edge_level: 'moderado', fighter_side: 'fighter2' },
        { icon: 'Clock', titulo: 'Layoff e Idade de Adesanya', stat_headline: '13 MESES SEM LUTAR, 36 ANOS, VINDO DE KO', contexto: 'Combinacao preocupante. Lutadores que voltam de nocaute apos layoff longo aos 36 anos historicamente tem performance reduzida. O timing e os reflexos podem nao ser os mesmos.', implicacao_aposta: 'Adiciona risco a Adesanya como favorito. Linha de -130 pode nao refletir o risco real.', edge_level: 'moderado', fighter_side: 'fighter2' },
      ],
      value_picks: [
        { tipo: 'Metodo', pick: 'Pyfer por KO/TKO', odds: '+250 (estimado)', confianca: 'media', edge_vs_mercado: 'Chin de Adesanya comprometido + poder de Pyfer = probabilidade real maior que as odds sugerem.', raciocinio: 'Se Pyfer vencer, a probabilidade de ser por nocaute nos primeiros rounds e altissima. O chin de Adesanya foi testado e falhou duas vezes recentemente. A +250, o retorno compensa o risco.' },
        { tipo: 'Over/Under', pick: 'Over 2.5 Rounds', odds: '-140 (estimado)', confianca: 'media', edge_vs_mercado: 'Apesar dos KOs recentes de Adesanya, ele tende a comecar lutas devagar.', raciocinio: 'Adesanya e um counter-striker que precisa de tempo para encontrar o timing. Pyfer, apesar do poder, pode demorar para fechar a distancia contra a envergadura. Provavel que os primeiros rounds sejam de estudo.' },
        { tipo: 'Duracao', pick: 'Nao vai para decisao', odds: '+120 (estimado)', confianca: 'baixa', edge_vs_mercado: 'Adesanya foi finalizado em 2 das ultimas 3 lutas. Pyfer finaliza 87% das vitorias.', raciocinio: 'Historicamente, lutas de Adesanya iam para decisao. Mas a fase atual sugere que ele esta mais vulneravel a finalizacoes. Com Pyfer trazendo poder e grappling, a chance de finalizacao e maior que o historico sugere.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Adesanya por KO',
        descricao: 'O ultimo nocaute de Adesanya no UFC foi contra Alex Pereira em abril de 2023, ha quase tres anos. Nas ultimas lutas, o poder ofensivo de finalizacao diminuiu visivelmente. Apostar em Adesanya por KO e jogar contra a tendencia recente. Se Adesanya vencer, provavelmente sera por decisao.',
      },
      disclaimer: 'Analise estatistica para fins informativos. Aposte com responsabilidade.',
    },
  },
};

// ============================================================
// ENGLISH (EN)
// ============================================================
const analiseEN: FullSingleAnalise = {
  ...sharedMeta,
  titulo: 'Adesanya vs Pyfer: The Last Test for the Stylebender',
  subtitulo: 'The former champion looks to snap a 3-fight losing streak against the young #14 ranked knockout artist',

  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
      evento_data: 'March 28, 2026',
      evento_local: 'Climate Pledge Arena, Seattle, Washington',
      categoria_peso: 'Middleweight (185 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'Renaissance or Retirement?',
      tagline_sub: 'Three straight losses. A hungry young contender. Izzy\'s career on the line in Seattle.',
      fighter1: {
        nome_completo: 'Israel "The Last Stylebender" Adesanya',
        apelido: 'The Last Stylebender',
        sobrenome: 'Adesanya',
        record: '24-5-0',
        ranking: '#4 Middleweight',
        info_extra: 'Auckland, New Zealand | 36 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/ADESANYA_ISRAEL_L_02-01.png?itok=YGc30Vwe',
      },
      fighter2: {
        nome_completo: 'Joe "Bodybagz" Pyfer',
        apelido: 'Bodybagz',
        sobrenome: 'Pyfer',
        record: '15-3-0',
        ranking: '#14 Middleweight',
        info_extra: 'Allentown, Pennsylvania | 29 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-06/PYFER_JOE_L_06-29.png?itok=prLW4_bl',
      },
    },

    narrativa: {
      html_content: `
        <h3 class="font-display text-xl uppercase text-ufc-red mb-4">The Twilight of a King</h3>
        <p class="mb-4">
          <strong class="text-ufc-red">Israel Adesanya</strong> was once the most dominant middleweight in UFC history. A two-time champion whose reign included five title defenses and performances that redefined what was possible in MMA striking. Today, at 36 years old, he arrives in Seattle with three consecutive losses and a question nobody wants to ask out loud: is it over?
        </p>
        <p class="mb-4">
          The fall began in September 2023, when Sean Strickland, a massive underdog at +450, dismantled Adesanya's reign with a simple gameplan: constant pressure, jab to the face, and a total refusal to give space. Then came Dricus Du Plessis, who submitted Izzy in the fourth round at UFC 305 in Perth. And the most recent, perhaps the most painful: Nassourdine Imavov knocked Adesanya out in the second round in Saudi Arabia, in February 2025. An overhand right to the jaw, followed by a left uppercut as Izzy was falling. Brutal. Fast. Definitive.
        </p>
        <h3 class="font-display text-xl uppercase text-ufc-red mb-4 mt-8">Bodybagz: The New Wave of Middleweight</h3>
        <p class="mb-4">
          On the other side stands <strong class="text-blue-400">Joe Pyfer</strong>, 29 years old, nicknamed "Bodybagz", with a life story that rivals any movie script. He grew up homeless in Allentown, Pennsylvania, overcame an extremely difficult childhood, and channeled everything into MMA. Today, with 15 wins (9 by knockout, 4 by submission), Pyfer is one of the most dangerous prospects at middleweight. Since his loss to Jack Hermansson in February 2024, he has three straight wins, including a devastating knockout of Barriault in the first round and an impressive submission of Magomedov.
        </p>
        <h3 class="font-display text-xl uppercase text-ufc-red mb-4 mt-8">What Is at Stake</h3>
        <p class="mb-4">
          For Adesanya, this is not just another fight. It is possibly his last chance to prove he still belongs among the elite. Four losses in the last five fights would mean, for many, the definitive sign that time has passed. For Pyfer, the opportunity is enormous. Beating a former champion with Adesanya's name, in a 5-round main event, is the kind of win that catapults a fighter from #14 to the top 10. The experience gap is absurd: Adesanya has 13 UFC fights against the best in the world. Pyfer has 7 UFC fights and has never gone 5 rounds. But in MMA, youth and raw power sometimes outweigh resumes.
        </p>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: '#4 Middleweight', fighter2: '#14 Middleweight' },
        { dimensao: 'Streak', fighter1: '3 consecutive losses', fighter2: '3 consecutive wins' },
        { dimensao: 'Goal', fighter1: 'Snap losing streak, prove relevance', fighter2: 'Break into top 10, build name recognition' },
        { dimensao: 'Narrative', fighter1: 'Final chapter or renaissance?', fighter2: 'The young gun who topples a legend' },
        { dimensao: 'Risk', fighter1: 'Fourth straight loss, retirement pressure', fighter2: 'Loss in 5-round main event exposes inexperience' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'THE STYLEBENDER REBORN',
          subtitulo: 'Adesanya uses distance, experience and fight IQ to dominate the young Pyfer',
          consequencias: [
            { tag: 'RANKING', texto: 'Adesanya stays in the top 5 and breathes new life into his career. Becomes an option for big fights again.' },
            { tag: 'LEGACY', texto: 'Redemption narrative: the former champion who refused to quit and beat a dangerous young fighter.' },
            { tag: 'DIVISION', texto: 'Pyfer returns to being a long-term project. Loss is not disastrous given the experience gap.' },
          ],
          proxima_luta: 'Adesanya vs a top 10 opponent like Brendan Allen or Caio Borralho',
        },
        fighter2_vence: {
          titulo: 'THE NEW ERA OF MIDDLEWEIGHT',
          subtitulo: 'Pyfer knocks out the former champion and enters the top 10 radar',
          consequencias: [
            { tag: 'RANKING', texto: 'Pyfer jumps to the top 8 with a win over a former champion in the main event.' },
            { tag: 'LEGACY', texto: 'Adesanya accumulates a fourth straight loss. Retirement pressure becomes enormous.' },
            { tag: 'DIVISION', texto: 'Pyfer establishes himself as the next name to watch at middleweight, at 29 years old.' },
          ],
          proxima_luta: 'Pyfer vs a top 5 like Nassourdine Imavov or Robert Whittaker',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Israel Adesanya',
        color: 'red',
        recent_fights: [
          { date: 'Feb 2025', opponent: 'Nassourdine Imavov', result: 'L', method: 'TKO R2 (punches)', opponent_rank: '#7 MW', quality_score: 4, quality_label: 'Very Good', note: 'Knocked out in the second round by an overhand right followed by an uppercut. Adesanya was doing well in the first round but got caught clean.' },
          { date: 'Aug 2024', opponent: 'Dricus Du Plessis', result: 'L', method: 'Sub R4 (rear-naked choke)', opponent_rank: 'Champion MW', quality_score: 5, quality_label: 'Excellent', note: 'Competitive fight for three rounds, Adesanya dominated with body shots in R3, but Du Plessis connected in R4, took the back and finished.' },
          { date: 'Sep 2023', opponent: 'Sean Strickland', result: 'L', method: 'Unanimous Decision (49-46)', opponent_rank: '#4 MW', quality_score: 4, quality_label: 'Very Good', note: 'Historic upset. Strickland used jab and constant pressure. Adesanya could not find his rhythm at any point. Unanimous scores 49-46.' },
          { date: 'Nov 2022', opponent: 'Alex Pereira', result: 'L', method: 'TKO R5', opponent_rank: '#4 MW', quality_score: 4, quality_label: 'Very Good', note: 'Adesanya was winning on the scorecards when Pereira landed a devastating left hook in R5. Third loss to Pereira counting kickboxing.' },
          { date: 'Jul 2022', opponent: 'Jared Cannonier', result: 'W', method: 'Unanimous Decision', opponent_rank: '#2 MW', quality_score: 4, quality_label: 'Very Good', note: 'Controlled title defense. Adesanya used distance and precise counters for 5 rounds without being threatened.' },
        ],
        full_fight_history: adesanyaFullHistory,
        layoff_warning: 'Approximately 13 months since last fight (February 2025). Moderate layoff, but coming off three losses and two recent knockouts.',
        momentum_score: 2,
        momentum_label: 'Declining',
        momentum_trend: 'descending',
        momentum_note: 'Adesanya is at the lowest point of his career. Three consecutive losses, two by knockout/TKO and one by submission. The loss to Imavov was particularly concerning because it happened fast, in the second round, against a non-champion opponent. Adesanya\'s chin, once considered elite, appears compromised at 36. His only win in the last five fights was the KO of Pereira in the rematch, in April 2023, nearly three years ago.',
      },
      fighter2: {
        nome: 'Joe Pyfer',
        color: 'blue',
        recent_fights: [
          { date: 'Oct 2025', opponent: 'Abusupiyan Magomedov', result: 'W', method: 'Sub R2 (face crank)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Impressive submission win in the second round against a dangerous striker. Showed grappling evolution.' },
          { date: 'Jun 2025', opponent: 'Kelvin Gastelum', result: 'W', method: 'Unanimous Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Dominated Gastelum with two knockdowns over three rounds. First decision win in the UFC.' },
          { date: 'Jun 2024', opponent: 'Marc-Andre Barriault', result: 'W', method: 'KO R1 (1:25)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Lightning knockout in the first round. Impressive raw power.' },
          { date: 'Feb 2024', opponent: 'Jack Hermansson', result: 'L', method: 'Unanimous Decision', opponent_rank: '#12 MW', quality_score: 3, quality_label: 'Good', note: 'First 5-round fight, lost by decision. Hermansson controlled with wrestling and experience. Pyfer visibly tired in the final rounds.' },
          { date: 'Oct 2023', opponent: 'Abdul Razak Alhassan', result: 'W', method: 'Sub R2 (arm-triangle)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Technical submission in the second round. Showed versatility beyond striking.' },
        ],
        full_fight_history: pyferFullHistory,
        layoff_warning: null,
        momentum_score: 7,
        momentum_label: 'Rising',
        momentum_trend: 'ascending',
        momentum_note: 'Pyfer has three consecutive wins since the Hermansson loss, showing clear evolution with each fight. He went from a pure knockout artist to someone who can win by decision (Gastelum) and submission (Magomedov). The streak is against mid-level opponents, which limits the excitement, but the technical evolution is real. At 29, he is at the ideal development stage.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Adesanya',
        media_oponentes: 5,
        media_oponentes_label: 'Excellent',
        aproveitamento: '13W-5L (72%)',
        contra_top5: '8W-4L',
      },
      fighter2: {
        nome: 'Pyfer',
        media_oponentes: 2,
        media_oponentes_label: 'Average',
        aproveitamento: '6W-1L (86%)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: 'Kelvin Gastelum is the only relevant common opponent. Adesanya beat Gastelum in 2019 by unanimous decision in an epic 5-round fight (Fight of the Year). Pyfer beat Gastelum in 2025 by unanimous decision with two knockdowns. The 2019 Gastelum was a completely different fighter (top 5, coming off knocking out Bisping) compared to the 2025 Gastelum (unranked, in decline). The direct comparison is limited.',
    },

    oponente_comum: {
      oponente_nome: 'Kelvin Gastelum',
      fighter1_result: {
        resultado: 'Win by Unanimous Decision',
        metodo: '48-46, 48-46, 48-46',
        duracao: '5 rounds (25:00)',
        contexto: 'Considered one of the greatest fights in UFC history. Gastelum dropped Adesanya in the fourth round and nearly finished him. Adesanya recovered and dominated the fifth round to seal the interim title victory. A 25-minute war with heavy exchanges and dramatic moments in every round.',
        performance: 'Adesanya showed tremendous heart, recovery ability and elite fight IQ. Won a real war against a Gastelum who was at his peak.',
        evento: 'UFC 236',
        data: 'Apr 2019',
      },
      fighter2_result: {
        resultado: 'Win by Unanimous Decision',
        metodo: 'Scorecards not available',
        duracao: '3 rounds (15:00)',
        contexto: 'Pyfer controlled the fight with pressure, dropped Gastelum twice with power shots, and won clearly over three rounds. Gastelum offered no significant resistance and was clearly in the declining phase of his career.',
        performance: 'Pyfer showed maturity by not desperately chasing the knockout after the knockdowns, controlling the pace and winning on points. But Gastelum\'s level at this stage was far inferior to 2019.',
        evento: 'UFC 316',
        data: 'Jun 2025',
      },
      insight: 'The comparison is unfair but it exists. Adesanya faced an elite Gastelum in 2019, who dropped him and nearly finished him, and won an epic 5-round fight. Pyfer faced a declining Gastelum in 2025 and won with two knockdowns. The context is completely different, but Pyfer showed something Adesanya also showed: the power to hurt Gastelum and the intelligence not to get carried away.',
    },

    comparacao_estatistica: {
      stats: sharedStats,
      tale_of_tape: [
        { label: 'Age', fighter1: '36 years old', fighter2: '29 years old', note: 'Pyfer 7 years younger' },
        { label: 'Height', fighter1: '6\'4" (1.93m)', fighter2: '6\'2" (1.88m)', note: 'Adesanya 2 inches taller' },
        { label: 'Reach', fighter1: '80" (203cm)', fighter2: '75" (190cm)', note: 'Adesanya with 5-inch reach advantage' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Gym', fighter1: 'City Kickboxing, Auckland', fighter2: 'Team Balance, Philadelphia', note: null },
        { label: 'UFC Debut', fighter1: 'February 2018', fighter2: 'August 2022', note: 'Adesanya with 4+ more years of UFC experience' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Technical Striking', valueA: 88, valueB: 62, labelA: 'Very Good', labelB: 'Good', advantage: 'fighter1', advantage_note: 'Adesanya is one of the most technical strikers in UFC history. World-class footwork, timing and angle variation. Pyfer is more technically limited, relying more on raw power.' },
        { label: 'Knockout Power', valueA: 72, valueB: 85, labelA: 'Good', labelB: 'Very Good', advantage: 'fighter2', advantage_note: 'Pyfer has 9 KOs in 15 wins (60%). Real one-punch power. Adesanya has 16 career KOs but has fewer knockout finishes in recent years.' },
        { label: 'Offensive Grappling', valueA: 25, valueB: 55, labelA: 'Poor', labelB: 'Good', advantage: 'fighter2', advantage_note: 'Adesanya almost never attempts takedowns (0.05 per 15 min). Pyfer has 4 career submissions and averages 1.45 TDs per 15 min. Clear advantage in offensive grappling.' },
        { label: 'Takedown Defense', valueA: 80, valueB: 50, labelA: 'Very Good', labelB: 'Average', advantage: 'fighter1', advantage_note: 'Adesanya with 77% career TD defense. Pyfer was dominated by Hermansson on the ground, with only 50% defense.' },
        { label: 'Cardio & Endurance', valueA: 78, valueB: 58, labelA: 'Very Good', labelB: 'Good', advantage: 'fighter1', advantage_note: 'Adesanya has fought 5 rounds multiple times and always maintained pace. Pyfer visibly tired in the final rounds against Hermansson, his only 5-round fight.' },
        { label: 'Fight IQ & Experience', valueA: 92, valueB: 48, labelA: 'Excellent', labelB: 'Average', advantage: 'fighter1', advantage_note: 'Adesanya has 18 UFC fights against the best in the world, five title defenses and proven mid-fight adjustments. Pyfer has 7 UFC fights against mid-level opponents.' },
      ],
      insight: 'The matchup reveals an interesting dynamic: Adesanya is superior in nearly every technical area, especially striking, experience and cardio. But Pyfer holds the advantage in raw power and offensive grappling. The big question is not technical, it is physical: can Adesanya\'s chin still withstand Pyfer\'s power? Technically, Adesanya should dominate. Physically, Pyfer could end it at any moment.',
    },

    distribuicao_vitorias: {
      ...sharedDistribuicao,
      insight: 'Two natural finishers, but with different styles. Adesanya built 67% of his wins by knockout throughout his career, but has not finished anyone by KO in the UFC since the Pereira rematch in April 2023. Zero submissions in his entire career. Pyfer is more diversified: 60% by KO, 27% by submission, showing he can end the fight in multiple ways. The crucial difference: Pyfer finishes fights early (average of 7 minutes per fight), Adesanya historically needs time to find his timing.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1-R2',
          danger_level: 8,
          danger_label: 'PYFER ADVANTAGE',
          color: 'green',
          title: 'Dangerous Territory for Adesanya',
          description: 'The first two rounds are where Pyfer is most lethal. Of his 9 KO wins, most came in the first two rounds. Barriault fell at 1:25 of R1. Adesanya, on the other hand, was knocked out by Imavov in R2 and suffered a TKO from Pereira in R5 when caught. Adesanya\'s chin is under question, and Pyfer brings the kind of power that can exploit that weakness early. If Adesanya survives the first 10 minutes without being hurt, the dynamic changes completely.',
        },
        {
          rounds: 'R3',
          danger_level: 5,
          danger_label: 'EVEN',
          color: 'gold',
          title: 'The Transition Round',
          description: 'The third round is where experience starts to weigh in. Pyfer has never won a fight that reached R3, except by decision against Gastelum. Adesanya, despite his bad phase, has hundreds of minutes of championship distance experience. If both reach R3 without significant damage, the round serves as a transition point, with Adesanya starting to find his timing and Pyfer starting to burn energy.',
        },
        {
          rounds: 'R4-R5',
          danger_level: 8,
          danger_label: 'ADESANYA ADVANTAGE',
          color: 'red',
          title: 'Championship Rounds: The Veteran\'s Territory',
          description: 'The final rounds are where Adesanya\'s experience becomes a weapon. Pyfer lost his only 5-round fight (Hermansson) and visibly tired in the final rounds. Adesanya has fought 5 rounds seven times in the UFC and always maintained his pace. If the fight gets here without a knockout, Adesanya will be the heavy favorite, with more gas, more experience and the ability to find openings against a tired opponent.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'AlertTriangle', title: 'Compromised Chin', fighter: 'Adesanya', risk_level: 'HIGH RISK', risk_color: 'red', description: 'Adesanya was knocked out/TKO\'d in two of his last three fights (Pereira R5, Imavov R2). At 36, the ability to absorb impact naturally diminishes. Against Pyfer\'s power, this is the biggest concern of the fight.' },
        { icon: 'Clock', title: '13-Month Layoff', fighter: 'Adesanya', risk_level: 'MEDIUM RISK', risk_color: 'yellow', description: 'Adesanya has not fought since February 2025. For a 36-year-old fighter coming off a knockout, the layoff can affect timing and reflexes. However, it also provided time for physical and mental recovery.' },
        { icon: 'TrendingUp', title: 'Three Straight Wins with Evolution', fighter: 'Pyfer', risk_level: 'POSITIVE', risk_color: 'green', description: 'Pyfer is on an ascending streak: KO, decision and submission in his last three. The diversification of methods shows maturity and real game evolution.' },
        { icon: 'Brain', title: 'Main Event Experience', fighter: 'Adesanya', risk_level: 'POSITIVE', risk_color: 'green', description: 'Adesanya has headlined 12 UFC events, including title fights against the best in the world. Pyfer has never fought in a UFC main event. The pressure of being in a 5-round main event against a name like Adesanya is completely new to him.' },
        { icon: 'Zap', title: 'Pyfer\'s Knockout Power', fighter: 'Pyfer', risk_level: 'POSITIVE', risk_color: 'green', description: 'Pyfer reportedly broke Francis Ngannou\'s punching machine record. With 60% of his wins by KO, he brings one-punch knockout power that can end the fight at any moment, especially against a questioned chin.' },
        { icon: 'Activity', title: '5-Round Cardio', fighter: 'Pyfer', risk_level: 'MEDIUM RISK', risk_color: 'yellow', description: 'The only time Pyfer fought 5 rounds (Hermansson), he lost and visibly tired. Against Adesanya\'s championship round pace, fatigue could be a decisive factor.' },
        { icon: 'Shield', title: 'Reach Advantage', fighter: 'Adesanya', risk_level: 'POSITIVE', risk_color: 'green', description: 'Adesanya has a 5-inch reach advantage (80" vs 75"). In a pure striking fight, this allows him to control distance and land jabs and front kicks without entering Pyfer\'s danger zone.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Adesanya',
        total_probability: 52,
        scenarios: [
          { name: 'Distance Masterclass', probability: 28, method: 'Unanimous Decision', description: 'Adesanya uses his 80-inch reach to keep Pyfer at the end of his punches, lands jabs, front kicks and counters. Frustrates the young fighter with movement and takes a clear decision, especially in the later rounds when Pyfer\'s cardio fades.' },
          { name: 'Deadly Counter Strike', probability: 14, method: 'KO/TKO R3-R5', description: 'Pyfer advances aggressively, Adesanya finds the timing on the counter (left hook or check hook) and finishes when the young fighter is tired and less defensive in the middle or late rounds.' },
          { name: 'Championship Round Dominance', probability: 10, method: 'Split Decision', description: 'Even fight in the early rounds, with Pyfer winning some moments. But Adesanya takes control in R4-R5 when experience and cardio make the difference, winning a close decision.' },
        ],
      },
      fighter2: {
        nome: 'Pyfer',
        total_probability: 45,
        scenarios: [
          { name: 'Early Round Bomb', probability: 22, method: 'KO/TKO R1-R2', description: 'Pyfer closes the distance early, absorbs some jabs, and lands a power shot on Adesanya\'s jaw. With the veteran\'s questioned chin, a single clean shot can end it all in the first 10 minutes.' },
          { name: 'Pressure and Accumulation', probability: 13, method: 'TKO R2-R3', description: 'Pyfer maintains constant pressure, similar to what Strickland did. Pushes Adesanya to the fence, mixes punches and clinch, and accumulates damage until the referee intervenes.' },
          { name: 'Ground Versatility', probability: 10, method: 'Submission R2-R3', description: 'Pyfer surprises with a takedown, uses the grappling he showed against Magomedov and Alhassan, and finds a submission. Adesanya has zero offensive ground game experience and may be vulnerable if put on his back.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Israel Adesanya',
      winner_side: 'fighter1',
      predicted_method: 'Unanimous Decision or late TKO',
      confidence_score: 5,
      confidence_label: 'MEDIUM',
      explanation: 'This is a fight that is hard to predict with high confidence. Adesanya, even at 36 and coming off three losses, has clear technical advantages over Pyfer: better striking, more experience, better cardio, and a 5-inch reach advantage. The quality jump from the opponents Pyfer has faced (declining Gastelum, Barriault, Magomedov) to Adesanya is enormous. However, Adesanya\'s chin is the biggest unknown. If it were intact, this would be a high-confidence prediction. Since it is not, Pyfer has a real path to victory with his knockout power. I predict Adesanya using distance and experience to control the fight, especially in the later rounds, but with real risk of being knocked out in the first two rounds.',
      x_factor: {
        title: 'The 5-Inch Reach Advantage',
        description: 'Adesanya has an 80-inch reach versus Pyfer\'s 75. In UFC terms, this is a massive advantage. If Adesanya uses jabs, front kicks and side kicks to maintain distance, Pyfer will have enormous difficulty getting into striking range. The entire fight could be decided by this physical difference.',
      },
      upset_alert: {
        title: 'Glass Chin?',
        description: 'If Pyfer lands a clean power shot in the first two rounds, especially an overhand or left hook, Adesanya could go down. Two TKOs in his last three fights do not lie. Pyfer does not need many chances, he needs one.',
      },
      probabilities: sharedProbabilities,
      value_picks: {
        moneyline: { pick: 'Pyfer (+110)', reasoning: 'If the odds stay in this range, Pyfer as a slight underdog offers real value given his knockout power and Adesanya\'s questioned chin.' },
        method: { pick: 'Fight goes to decision', reasoning: 'Despite both having knockout power, Adesanya historically favors long fights (8 decisions in 24 wins) and the reach can maintain distance.' },
        over_under: { pick: 'Under 4.5 rounds', rounds: 4.5, reasoning: 'Adesanya was finished in two of his last three fights. Pyfer finishes most of his fights early. The probability of a finish is higher than normal.' },
        best_value: 'Pyfer inside the distance (+250 estimated) offers the best value. If Pyfer wins, it will probably be by knockout in the early rounds.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Adesanya\'s Jab and Front Kick in the First 2 Minutes', icon: 'Target', description: 'If Adesanya starts the fight using jab and front kick to maintain distance, it is a sign the gameplan is working. If Pyfer can close distance easily in those first minutes, the fight is in his territory. Pay attention to the reach: Adesanya needs to use it or he will waste his biggest weapon.' },
        { num: 2, title: 'Adesanya\'s Reaction to the First Hard Shot', icon: 'Shield', description: 'The most revealing moment of the fight will be when Pyfer lands the first clean power shot. Adesanya\'s chin reaction will dictate everything. If he absorbs it well, confidence rises and he can dominate. If he wobbles, Pyfer will smell blood and come with everything.' },
        { num: 3, title: 'Pyfer\'s Gas Tank in R3', icon: 'Activity', description: 'Pyfer tired against Hermansson in the final rounds. If the fight reaches the third round, watch Pyfer\'s strike volume and posture. If his hands start dropping and footwork becomes heavy, Adesanya will capitalize.' },
        { num: 4, title: 'Pyfer Attempting Takedowns', icon: 'Crosshair', description: 'Pyfer has 83% takedown accuracy and 1.45 per 15 minutes. If he mixes takedowns with striking, he can break Adesanya\'s rhythm in a way that pure strikers like Cannonier could not. Watch for when and how Pyfer changes levels.' },
        { num: 5, title: 'Adesanya\'s Body Language Between Rounds', icon: 'Brain', description: 'An Adesanya who is having fun, dancing and taunting is a dangerous Adesanya. An Adesanya who is quiet, sitting on the stool and breathing heavily is a sign that age is weighing on him. Body language between rounds will tell the real story.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'MAIN EVENT SEATTLE', content: 'ADESANYA vs PYFER\nUFC Fight Night | March 28\nClimate Pledge Arena, Seattle\n\n3 straight losses vs 3 straight wins\nThe former champion fights for survival.', color: 'red' },
        { slide_number: 2, title: 'ADESANYA: THE NUMBERS', content: '#4 middleweight ranking\n24-5 career record (16 KOs)\n2x UFC champion\n5 title defenses\n3.93 sig. strikes per minute\n80" reach\nBUT: 3 straight losses\n2 knockouts suffered in last 3', color: 'red' },
        { slide_number: 3, title: 'PYFER: BODYBAGZ', content: '#14 middleweight ranking\n15-3 career record (9 KOs, 4 subs)\n3 straight wins\n60% knockout finish rate\n83% takedown accuracy\n29 years old, on the rise\nBroke Ngannou\'s punching machine record', color: 'blue' },
        { slide_number: 4, title: 'THE BIG QUESTION', content: 'ADESANYA\'S CHIN\n\nImavov: TKO R2 (Feb 2025)\nDu Plessis: Sub R4 (Aug 2024)\nStrickland: UD (Sep 2023)\nPereira: TKO R5 (Nov 2022)\n\n1 win in last 5 fights\nHas time passed?\nOr does the Stylebender still live?', color: 'gold' },
        { slide_number: 5, title: 'PREDICTION', content: 'ADESANYA by Unanimous Decision\n\nConfidence: MEDIUM\n52% Adesanya / 45% Pyfer\n\nReach and experience\nshould control distance.\nBut one single Pyfer punch\ncould change everything.', color: 'gold' },
      ],
      twitter: [
        { num: '1/6', text: 'Adesanya vs Pyfer Saturday in Seattle. The most dominant middleweight champion of the last decade, with 3 straight losses, against the 29-year-old knockout artist. Full analysis:' },
        { num: '2/6', text: 'The number that defines this fight: 5 INCHES. Adesanya has 80" reach. Pyfer has 75". If Izzy uses that advantage with jab and front kick, Pyfer will spend the night trying to get into range. Distance is everything.' },
        { num: '3/6', text: 'The other side of the coin: Adesanya was KO/TKO\'d in 2 of his last 3 fights. At 36, the chin is not the same. Pyfer has 9 KOs in 15 wins and one-punch power. One clean entry is all it takes.' },
        { num: '4/6', text: 'Detail nobody talks about: Pyfer has 83% takedown accuracy and 4 career submissions. He is not just a knockout artist. If he mixes takedowns with striking, he can break Adesanya\'s rhythm in a new way.' },
        { num: '5/6', text: 'Pyfer\'s problem: he has never won a fight that went past R2 by finish. Against Hermansson (5 rounds), he tired and lost. Adesanya has had 7 five-round fights in the UFC. Championship rounds = veteran territory.' },
        { num: '6/6', text: 'My pick: Adesanya by decision, but with MEDIUM confidence. Reach, experience and championship rounds favor Izzy. But Pyfer inside the distance in R1-R2 is the value bet of the card. A fight that could end at any second.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: 'Israel Adesanya was the most dominant middleweight in MMA. Five title defenses. Otherworldly striking. Today, three straight losses and a question: is it over? Saturday in Seattle, he needs to answer against Joe Pyfer.' },
        { time: '10-25s', title: 'Context', text: 'Adesanya is 36, 24-5, and was knocked out twice in his last three fights. The chin is not the same. Pyfer is 29, 15-3, nine KOs and rising with three straight wins. The reach difference is 5 inches in Izzy\'s favor. But Pyfer brings power to compensate.' },
        { time: '25-40s', title: 'Technical Analysis', text: 'The key to the fight: distance. If Adesanya keeps Pyfer at the end of his punches with jab and front kick, he dominates. More technique, more experience, better cardio. But if Pyfer closes the distance and connects, Adesanya\'s chin is vulnerable. Imavov proved that in February. Two completely different scenarios depending on who controls the space.' },
        { time: '40-55s', title: 'Championship Rounds', text: 'Here is the decisive factor: Pyfer has never won a fight that went past R2 by finish. Against Hermansson in 5 rounds, he tired and lost. Adesanya has had seven 5-round fights in the UFC. If it reaches R4 without a knockout, Izzy is the heavy favorite.' },
        { time: '55-70s', title: 'Prediction & Value', text: 'My call: Adesanya by decision, medium confidence. But Pyfer inside the distance in the early rounds is the value bet. If you believe Izzy\'s chin is done, Pyfer by KO R1-R2 pays well. The most unpredictable fight on the card.' },
      ],
      tiktok: [
        { hook: 'Adesanya with THREE straight losses. The guy who was UNTOUCHABLE at middleweight.', body: 'Strickland by decision. Du Plessis by submission. Imavov by knockout in R2. Three different ways to lose. Now he faces Joe Pyfer, 29 years old, 9 KOs in 15 fights, who broke Ngannou\'s punching machine record. Can Adesanya\'s chin hold up?', cta: 'Comment IZZY or PYFER!' },
        { hook: 'FIVE inches. That is the difference that could save Adesanya.', body: 'Adesanya has 80 inches of reach. Pyfer has 75. That is 5 inches. If Izzy uses jab and front kick to maintain distance, Pyfer NEVER gets in. But if Pyfer closes, one punch to the jaw is all it takes. Two completely different realities.', cta: 'Who controls the distance? Comment!' },
        { hook: 'Pyfer has NEVER won a fight that went past R2 by finish.', body: 'Against Hermansson in 5 rounds, Pyfer TIRED and lost. Adesanya has had SEVEN 5-round fights in the UFC. If it reaches the fourth round without a knockout, Izzy dominates. But Pyfer only needs one moment. ONE punch. And with Adesanya\'s chin in question, that moment could come at any second.', cta: 'Knockout or decision? Comment!' },
      ],
      headlines: [
        'Adesanya vs Pyfer: Renaissance or Retirement for the Stylebender in Seattle?',
        'Adesanya\'s Chin vs Pyfer\'s Power: The Fight That Defines a Career',
        '5-Inch Advantage: Why Reach Could Save Adesanya',
        'From 3 Straight Losses to Main Event: Israel Adesanya\'s Dilemma',
        'Pyfer Bodybagz: The Knockout Artist Who Could Retire Adesanya',
        'UFC Seattle: Why Pyfer by KO Is the Value Bet of the Card',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        ...sharedOdds,
        source: 'Average from DraftKings and sportsbooks (March 2026)',
      },
      edges: [
        { icon: 'Shield', titulo: 'Massive Reach Advantage', stat_headline: '80" VS 75": 5-INCH DIFFERENCE', contexto: 'Adesanya has one of the longest reaches at middleweight. Against a shorter-armed opponent like Pyfer, this advantage allows controlling distance with jab and front kick efficiently.', implicacao_aposta: 'Favors Adesanya by decision and Over on rounds.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Zap', titulo: 'Adesanya\'s Compromised Chin', stat_headline: '2 TKO/KOs SUFFERED IN LAST 3 FIGHTS', contexto: 'Adesanya was finished by Pereira (TKO R5) and Imavov (TKO R2). At 36, impact absorption diminishes. Against Pyfer\'s one-punch power, this is the biggest risk factor.', implicacao_aposta: 'Favors Pyfer inside the distance. KO/TKO Pyfer R1-R2 props have value.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Activity', titulo: '5-Round Cardio', stat_headline: 'PYFER LOST HIS ONLY 5-ROUND FIGHT (HERMANSSON)', contexto: 'Pyfer visibly tired in the final rounds against Hermansson. Adesanya has had 7 five-round fights in the UFC. If the fight goes past R3, Adesanya\'s cardio and experience advantage grows exponentially.', implicacao_aposta: 'Over 2.5 rounds significantly favors Adesanya.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Target', titulo: 'Pyfer\'s Offensive Grappling', stat_headline: '83% TAKEDOWN ACCURACY, 4 CAREER SUBMISSIONS', contexto: 'Pyfer is not just a knockout artist. He has 4 submissions and high takedown accuracy. He can mix levels and break Adesanya\'s striking rhythm in a way pure strikers could not.', implicacao_aposta: 'Pyfer by submission is a hidden value bet.', edge_level: 'moderado', fighter_side: 'fighter2' },
        { icon: 'Clock', titulo: 'Adesanya\'s Layoff and Age', stat_headline: '13 MONTHS WITHOUT FIGHTING, 36 YEARS OLD, COMING OFF KO', contexto: 'A concerning combination. Fighters returning from knockout after a long layoff at 36 historically have reduced performance. Timing and reflexes may not be the same.', implicacao_aposta: 'Adds risk to Adesanya as favorite. The -130 line may not reflect the real risk.', edge_level: 'moderado', fighter_side: 'fighter2' },
      ],
      value_picks: [
        { tipo: 'Method', pick: 'Pyfer by KO/TKO', odds: '+250 (estimated)', confianca: 'media', edge_vs_mercado: 'Adesanya\'s compromised chin + Pyfer\'s power = real probability higher than odds suggest.', raciocinio: 'If Pyfer wins, the probability of it being by knockout in the early rounds is very high. Adesanya\'s chin was tested and failed twice recently. At +250, the return compensates the risk.' },
        { tipo: 'Over/Under', pick: 'Over 2.5 Rounds', odds: '-140 (estimated)', confianca: 'media', edge_vs_mercado: 'Despite Adesanya\'s recent KOs, he tends to start fights slowly.', raciocinio: 'Adesanya is a counter-striker who needs time to find his timing. Pyfer, despite his power, may take time to close the distance against the reach. Likely the first rounds will be a feeling-out process.' },
        { tipo: 'Duration', pick: 'Does not go to decision', odds: '+120 (estimated)', confianca: 'baixa', edge_vs_mercado: 'Adesanya was finished in 2 of his last 3 fights. Pyfer finishes 87% of wins.', raciocinio: 'Historically, Adesanya fights went to decision. But the current phase suggests he is more vulnerable to finishes. With Pyfer bringing power and grappling, the chance of a finish is higher than history suggests.' },
      ],
      armadilha: {
        titulo: 'Trap: Adesanya by KO',
        descricao: 'Adesanya\'s last knockout in the UFC was against Alex Pereira in April 2023, nearly three years ago. In recent fights, his offensive finishing power has visibly diminished. Betting on Adesanya by KO is betting against the recent trend. If Adesanya wins, it will probably be by decision.',
      },
      disclaimer: 'Statistical analysis for informational purposes. Bet responsibly.',
    },
  },
};

// ============================================================
// FRENCH (FR)
// ============================================================
const analiseFR: FullSingleAnalise = {
  ...sharedMeta,
  titulo: 'Adesanya vs Pyfer : Le Dernier Test du Stylebender',
  subtitulo: 'L\'ancien champion cherche a mettre fin a une serie de 3 defaites contre le jeune frappeur #14 du classement',

  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
      evento_data: '28 mars 2026',
      evento_local: 'Climate Pledge Arena, Seattle, Washington',
      categoria_peso: 'Poids Moyen (185 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'Renaissance ou Retraite ?',
      tagline_sub: 'Trois defaites consecutives. Un jeune affame. La carriere d\'Izzy en jeu a Seattle.',
      fighter1: {
        nome_completo: 'Israel "The Last Stylebender" Adesanya',
        apelido: 'The Last Stylebender',
        sobrenome: 'Adesanya',
        record: '24-5-0',
        ranking: '#4 Poids Moyen',
        info_extra: 'Auckland, Nouvelle-Zelande | 36 ans',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/ADESANYA_ISRAEL_L_02-01.png?itok=YGc30Vwe',
      },
      fighter2: {
        nome_completo: 'Joe "Bodybagz" Pyfer',
        apelido: 'Bodybagz',
        sobrenome: 'Pyfer',
        record: '15-3-0',
        ranking: '#14 Poids Moyen',
        info_extra: 'Allentown, Pennsylvanie | 29 ans',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-06/PYFER_JOE_L_06-29.png?itok=prLW4_bl',
      },
    },

    narrativa: {
      html_content: `
        <h3 class="font-display text-xl uppercase text-ufc-red mb-4">Le Crepuscule d'un Roi</h3>
        <p class="mb-4">
          <strong class="text-ufc-red">Israel Adesanya</strong> etait autrefois le combattant le plus dominant des poids moyens de l'UFC. Double champion, son regne comprenait cinq defenses de titre et des performances qui redefinissaient ce qui etait possible dans le striking en MMA. Aujourd'hui, a 36 ans, il arrive a Seattle avec trois defaites consecutives et une question que personne ne veut poser a voix haute : est-ce fini ?
        </p>
        <p class="mb-4">
          La chute a commence en septembre 2023, quand Sean Strickland, un outsider massif a +450, a demonte le regne d'Adesanya avec un plan simple : pression constante, jab au visage, et refus total de donner de l'espace. Puis est venu Dricus Du Plessis, qui a soumis Izzy au quatrieme round a l'UFC 305 a Perth. Et la plus recente, peut-etre la plus douloureuse : Nassourdine Imavov a mis Adesanya KO au deuxieme round en Arabie Saoudite, en fevrier 2025. Un overhand droit a la machoire, suivi d'un uppercut gauche pendant qu'Izzy tombait. Brutal. Rapide. Definitif.
        </p>
        <h3 class="font-display text-xl uppercase text-ufc-red mb-4 mt-8">Bodybagz : La Nouvelle Vague des Poids Moyens</h3>
        <p class="mb-4">
          De l'autre cote se trouve <strong class="text-blue-400">Joe Pyfer</strong>, 29 ans, surnomme "Bodybagz", avec une histoire de vie qui rivalise avec n'importe quel scenario de film. Il a grandi sans domicile fixe a Allentown, en Pennsylvanie, a surmonte une enfance extremement difficile, et a canalise tout dans le MMA. Aujourd'hui, avec 15 victoires (9 par KO, 4 par soumission), Pyfer est l'un des prospects les plus dangereux des poids moyens. Depuis sa defaite contre Jack Hermansson en fevrier 2024, il enchaine trois victoires consecutives, dont un KO devastateur sur Barriault au premier round et une soumission impressionnante sur Magomedov.
        </p>
        <h3 class="font-display text-xl uppercase text-ufc-red mb-4 mt-8">Les Enjeux</h3>
        <p class="mb-4">
          Pour Adesanya, ce n'est pas juste un autre combat. C'est possiblement sa derniere chance de prouver qu'il appartient encore a l'elite. Quatre defaites sur les cinq derniers combats signifieraient, pour beaucoup, le signe definitif que le temps est passe. Pour Pyfer, l'opportunite est enorme. Battre un ancien champion du nom d'Adesanya, dans un main event de 5 rounds, c'est le type de victoire qui catapulte un combattant du #14 au top 10. L'ecart d'experience est absurde : Adesanya a 13 combats UFC contre les meilleurs du monde. Pyfer a 7 combats UFC et n'a jamais fait 5 rounds. Mais en MMA, la jeunesse et la puissance brute valent parfois plus qu'un curriculum vitae.
        </p>
      `,
      stakes: [
        { dimensao: 'Classement', fighter1: '#4 Poids Moyen', fighter2: '#14 Poids Moyen' },
        { dimensao: 'Serie', fighter1: '3 defaites consecutives', fighter2: '3 victoires consecutives' },
        { dimensao: 'Objectif', fighter1: 'Mettre fin a la serie negative, prouver sa pertinence', fighter2: 'Entrer dans le top 10, se faire un nom' },
        { dimensao: 'Recit', fighter1: 'Dernier chapitre ou renaissance ?', fighter2: 'Le jeune qui renverse la legende' },
        { dimensao: 'Risque', fighter1: 'Quatrieme defaite consecutive, pression pour la retraite', fighter2: 'Defaite en main event de 5 rounds expose l\'inexperience' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'LE STYLEBENDER RENAIT',
          subtitulo: 'Adesanya utilise la distance, l\'experience et le QI de combat pour dominer le jeune Pyfer',
          consequencias: [
            { tag: 'CLASSEMENT', texto: 'Adesanya reste dans le top 5 et donne un nouveau souffle a sa carriere. Redevient une option pour les grands combats.' },
            { tag: 'HERITAGE', texto: 'Recit de redemption : l\'ancien champion qui a refuse d\'abandonner et a battu un jeune dangereux.' },
            { tag: 'DIVISION', texto: 'Pyfer redevient un projet a long terme. La defaite n\'est pas desastreuse vu l\'ecart d\'experience.' },
          ],
          proxima_luta: 'Adesanya vs un top 10 comme Brendan Allen ou Caio Borralho',
        },
        fighter2_vence: {
          titulo: 'LA NOUVELLE ERE DES POIDS MOYENS',
          subtitulo: 'Pyfer met KO l\'ancien champion et entre dans le radar du top 10',
          consequencias: [
            { tag: 'CLASSEMENT', texto: 'Pyfer bondit dans le top 8 avec une victoire sur un ancien champion en main event.' },
            { tag: 'HERITAGE', texto: 'Adesanya accumule une quatrieme defaite consecutive. La pression pour la retraite devient enorme.' },
            { tag: 'DIVISION', texto: 'Pyfer s\'etablit comme le prochain nom a surveiller chez les poids moyens, a 29 ans.' },
          ],
          proxima_luta: 'Pyfer vs un top 5 comme Nassourdine Imavov ou Robert Whittaker',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Israel Adesanya',
        color: 'red',
        recent_fights: [
          { date: 'Fev 2025', opponent: 'Nassourdine Imavov', result: 'L', method: 'TKO R2 (coups de poing)', opponent_rank: '#7 MW', quality_score: 4, quality_label: 'Tres Bon', note: 'Mis KO au deuxieme round par un overhand droit suivi d\'un uppercut. Adesanya etait bien parti au premier round mais s\'est fait toucher proprement.' },
          { date: 'Aout 2024', opponent: 'Dricus Du Plessis', result: 'L', method: 'Sub R4 (etranglement arriere)', opponent_rank: 'Champion MW', quality_score: 5, quality_label: 'Excellent', note: 'Combat competitif pendant trois rounds, Adesanya a domine avec des body shots au R3, mais Du Plessis a connecte au R4, a pris le dos et a fini.' },
          { date: 'Sep 2023', opponent: 'Sean Strickland', result: 'L', method: 'Decision Unanime (49-46)', opponent_rank: '#4 MW', quality_score: 4, quality_label: 'Tres Bon', note: 'Upset historique. Strickland a utilise le jab et la pression constante. Adesanya n\'a jamais trouve son rythme. Scores unanimes 49-46.' },
          { date: 'Nov 2022', opponent: 'Alex Pereira', result: 'L', method: 'TKO R5', opponent_rank: '#4 MW', quality_score: 4, quality_label: 'Tres Bon', note: 'Adesanya menait aux tableaux de scores quand Pereira a connecte un left hook devastateur au R5. Troisieme defaite contre Pereira en comptant le kickboxing.' },
          { date: 'Jul 2022', opponent: 'Jared Cannonier', result: 'W', method: 'Decision Unanime', opponent_rank: '#2 MW', quality_score: 4, quality_label: 'Tres Bon', note: 'Defense de titre controlee. Adesanya a utilise la distance et des contres precis pendant 5 rounds sans etre menace.' },
        ],
        full_fight_history: adesanyaFullHistory,
        layoff_warning: 'Environ 13 mois depuis le dernier combat (fevrier 2025). Inactivite moderee, mais vient de trois defaites et deux KOs recents.',
        momentum_score: 2,
        momentum_label: 'En Declin',
        momentum_trend: 'descending',
        momentum_note: 'Adesanya est au plus bas de sa carriere. Trois defaites consecutives, dont deux par KO/TKO et une par soumission. La defaite contre Imavov etait particulierement inquietante car elle est arrivee vite, au deuxieme round, contre un adversaire qui n\'etait pas champion. Le menton d\'Adesanya, autrefois considere elite, semble compromis a 36 ans. Sa seule victoire sur les cinq derniers combats etait le KO sur Pereira en revanche, en avril 2023, il y a presque trois ans.',
      },
      fighter2: {
        nome: 'Joe Pyfer',
        color: 'blue',
        recent_fights: [
          { date: 'Oct 2025', opponent: 'Abusupiyan Magomedov', result: 'W', method: 'Sub R2 (face crank)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Victoire impressionnante par soumission au deuxieme round contre un striker dangereux. A montre une evolution en grappling.' },
          { date: 'Juin 2025', opponent: 'Kelvin Gastelum', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'A domine Gastelum avec deux knockdowns sur trois rounds. Premiere victoire par decision a l\'UFC.' },
          { date: 'Juin 2024', opponent: 'Marc-Andre Barriault', result: 'W', method: 'KO R1 (1:25)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'KO eclair au premier round. Puissance brute impressionnante.' },
          { date: 'Fev 2024', opponent: 'Jack Hermansson', result: 'L', method: 'Decision Unanime', opponent_rank: '#12 MW', quality_score: 3, quality_label: 'Bon', note: 'Premier combat de 5 rounds, perdu par decision. Hermansson a controle avec le wrestling et l\'experience. Pyfer visiblement fatigue dans les derniers rounds.' },
          { date: 'Oct 2023', opponent: 'Abdul Razak Alhassan', result: 'W', method: 'Sub R2 (arm-triangle)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Faible', note: 'Soumission technique au deuxieme round. A montre de la polyvalence au-dela du striking.' },
        ],
        full_fight_history: pyferFullHistory,
        layoff_warning: null,
        momentum_score: 7,
        momentum_label: 'En Ascension',
        momentum_trend: 'ascending',
        momentum_note: 'Pyfer enchaine trois victoires consecutives depuis la defaite contre Hermansson, montrant une evolution claire a chaque combat. Il est passe d\'un pur cogneurs a quelqu\'un qui peut gagner par decision (Gastelum) et soumission (Magomedov). La serie est contre des adversaires de niveau moyen, ce qui limite l\'enthousiasme, mais l\'evolution technique est reelle. A 29 ans, il est au stade ideal de developpement.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Adesanya',
        media_oponentes: 5,
        media_oponentes_label: 'Excellent',
        aproveitamento: '13W-5L (72%)',
        contra_top5: '8W-4L',
      },
      fighter2: {
        nome: 'Pyfer',
        media_oponentes: 2,
        media_oponentes_label: 'Moyen',
        aproveitamento: '6W-1L (86%)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: 'Kelvin Gastelum est le seul adversaire commun pertinent. Adesanya a battu Gastelum en 2019 par decision unanime dans un combat epique de 5 rounds (Combat de l\'Annee). Pyfer a battu Gastelum en 2025 par decision unanime avec deux knockdowns. Le Gastelum de 2019 etait un combattant completement different (top 5, venant de mettre KO Bisping) compare au Gastelum de 2025 (non classe, en declin). La comparaison directe est limitee.',
    },

    oponente_comum: {
      oponente_nome: 'Kelvin Gastelum',
      fighter1_result: {
        resultado: 'Victoire par Decision Unanime',
        metodo: '48-46, 48-46, 48-46',
        duracao: '5 rounds (25:00)',
        contexto: 'Considere comme l\'un des meilleurs combats de l\'histoire de l\'UFC. Gastelum a mis Adesanya au sol au quatrieme round et a failli finir. Adesanya s\'est releve et a domine le cinquieme round pour sceller la victoire pour le titre interimaire. Une guerre de 25 minutes avec des echanges lourds et des moments dramatiques a chaque round.',
        performance: 'Adesanya a montre un coeur enorme, une capacite de recuperation et un QI de combat elite. A gagne une vraie guerre contre un Gastelum a son apogee.',
        evento: 'UFC 236',
        data: 'Avr 2019',
      },
      fighter2_result: {
        resultado: 'Victoire par Decision Unanime',
        metodo: 'Tableaux de scores non disponibles',
        duracao: '3 rounds (15:00)',
        contexto: 'Pyfer a controle le combat avec la pression, a mis Gastelum au sol deux fois avec des coups puissants, et a gagne clairement sur trois rounds. Gastelum n\'a offert aucune resistance significative et etait clairement en phase descendante de sa carriere.',
        performance: 'Pyfer a montre de la maturite en ne cherchant pas desesperement le KO apres les knockdowns, controlant le rythme et gagnant aux points. Mais le niveau de Gastelum a ce stade etait bien inferieur a 2019.',
        evento: 'UFC 316',
        data: 'Juin 2025',
      },
      insight: 'La comparaison est injuste mais elle existe. Adesanya a affronte un Gastelum elite en 2019, qui l\'a mis au sol et a failli le finir, et a gagne un combat epique de 5 rounds. Pyfer a affronte un Gastelum en declin en 2025 et a gagne avec deux knockdowns. Le contexte est completement different, mais Pyfer a montre quelque chose qu\'Adesanya a aussi montre : la puissance pour blesser Gastelum et l\'intelligence de ne pas s\'emballer.',
    },

    comparacao_estatistica: {
      stats: sharedStats,
      tale_of_tape: [
        { label: 'Age', fighter1: '36 ans', fighter2: '29 ans', note: 'Pyfer 7 ans plus jeune' },
        { label: 'Taille', fighter1: '1,93m (6\'4")', fighter2: '1,88m (6\'2")', note: 'Adesanya 2 pouces plus grand' },
        { label: 'Allonge', fighter1: '203cm (80")', fighter2: '190cm (75")', note: 'Adesanya avec 5 pouces d\'avantage' },
        { label: 'Garde', fighter1: 'Orthodoxe', fighter2: 'Orthodoxe', note: null },
        { label: 'Salle', fighter1: 'City Kickboxing, Auckland', fighter2: 'Team Balance, Philadelphie', note: null },
        { label: 'Debut UFC', fighter1: 'Fevrier 2018', fighter2: 'Aout 2022', note: 'Adesanya avec 4+ ans d\'experience UFC en plus' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking Technique', valueA: 88, valueB: 62, labelA: 'Tres Bon', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'Adesanya est l\'un des strikers les plus techniques de l\'histoire de l\'UFC. Jeu de jambes, timing et variation d\'angles de niveau mondial. Pyfer est plus limite techniquement, dependant davantage de la puissance brute.' },
        { label: 'Puissance de KO', valueA: 72, valueB: 85, labelA: 'Bon', labelB: 'Tres Bon', advantage: 'fighter2', advantage_note: 'Pyfer a 9 KOs en 15 victoires (60%). Puissance reelle d\'un seul coup. Adesanya a 16 KOs en carriere mais a moins de finitions par KO ces dernieres annees.' },
        { label: 'Grappling Offensif', valueA: 25, valueB: 55, labelA: 'Faible', labelB: 'Bon', advantage: 'fighter2', advantage_note: 'Adesanya ne tente presque jamais de takedowns (0.05 par 15 min). Pyfer a 4 soumissions en carriere et une moyenne de 1.45 TDs par 15 min. Avantage clair en grappling offensif.' },
        { label: 'Defense de Takedown', valueA: 80, valueB: 50, labelA: 'Tres Bon', labelB: 'Moyen', advantage: 'fighter1', advantage_note: 'Adesanya avec 77% de defense de TD en carriere. Pyfer a ete domine par Hermansson au sol, avec seulement 50% de defense.' },
        { label: 'Cardio et Endurance', valueA: 78, valueB: 58, labelA: 'Tres Bon', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'Adesanya a combattu 5 rounds plusieurs fois et a toujours maintenu le rythme. Pyfer a visiblement fatigue dans les derniers rounds contre Hermansson, son seul combat de 5 rounds.' },
        { label: 'QI de Combat et Experience', valueA: 92, valueB: 48, labelA: 'Excellent', labelB: 'Moyen', advantage: 'fighter1', advantage_note: 'Adesanya a 18 combats UFC contre les meilleurs du monde, cinq defenses de titre et des ajustements en cours de combat prouves. Pyfer a 7 combats UFC contre des adversaires de niveau moyen.' },
      ],
      insight: 'Le matchup revele une dynamique interessante : Adesanya est superieur dans presque tous les domaines techniques, surtout le striking, l\'experience et le cardio. Mais Pyfer a l\'avantage en puissance brute et en grappling offensif. La grande question n\'est pas technique, elle est physique : le menton d\'Adesanya peut-il encore supporter la puissance de Pyfer ? Techniquement, Adesanya devrait dominer. Physiquement, Pyfer peut tout arreter a n\'importe quel moment.',
    },

    distribuicao_vitorias: {
      ...sharedDistribuicao,
      insight: 'Deux finisseurs par nature, mais avec des styles differents. Adesanya a construit 67% de ses victoires par KO au cours de sa carriere, mais n\'a fini personne par KO a l\'UFC depuis la revanche contre Pereira en avril 2023. Zero soumissions dans toute sa carriere. Pyfer est plus diversifie : 60% par KO, 27% par soumission, montrant qu\'il peut finir le combat de multiples facons. La difference cruciale : Pyfer finit les combats tot (moyenne de 7 minutes par combat), Adesanya a historiquement besoin de temps pour trouver son timing.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1-R2',
          danger_level: 8,
          danger_label: 'AVANTAGE PYFER',
          color: 'green',
          title: 'Territoire Dangereux pour Adesanya',
          description: 'Les deux premiers rounds sont la ou Pyfer est le plus letal. De ses 9 victoires par KO, la plupart sont venues dans les deux premiers rounds. Barriault est tombe a 1:25 du R1. Adesanya, de son cote, a ete mis KO par Imavov au R2 et a subi un TKO de Pereira au R5. Le menton d\'Adesanya est en question, et Pyfer apporte le type de puissance qui peut exploiter cette faiblesse tot. Si Adesanya survit les 10 premieres minutes sans etre touche, la dynamique change completement.',
        },
        {
          rounds: 'R3',
          danger_level: 5,
          danger_label: 'EQUILIBRE',
          color: 'gold',
          title: 'Le Round de Transition',
          description: 'Le troisieme round est la ou l\'experience commence a peser. Pyfer n\'a jamais gagne un combat qui a atteint le R3, sauf par decision contre Gastelum. Adesanya, malgre sa mauvaise passe, a des centaines de minutes d\'experience en championship distance. Si les deux arrivent au R3 sans dommages significatifs, le round sert de point de transition, avec Adesanya qui commence a trouver son timing et Pyfer qui commence a depenser son energie.',
        },
        {
          rounds: 'R4-R5',
          danger_level: 8,
          danger_label: 'AVANTAGE ADESANYA',
          color: 'red',
          title: 'Championship Rounds : Territoire du Veteran',
          description: 'Les rounds finaux sont la ou l\'experience d\'Adesanya devient une arme. Pyfer a perdu son seul combat de 5 rounds (Hermansson) et a visiblement fatigue dans les derniers rounds. Adesanya a combattu 5 rounds sept fois a l\'UFC et a toujours maintenu son rythme. Si le combat arrive ici sans KO, Adesanya sera le grand favori, avec plus d\'endurance, plus d\'experience et la capacite de trouver des ouvertures contre un adversaire fatigue.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'AlertTriangle', title: 'Menton Compromis', fighter: 'Adesanya', risk_level: 'RISQUE ELEVE', risk_color: 'red', description: 'Adesanya a ete mis KO/TKO dans deux de ses trois derniers combats (Pereira R5, Imavov R2). A 36 ans, la capacite a absorber les impacts diminue naturellement. Contre la puissance de Pyfer, c\'est la plus grande preoccupation du combat.' },
        { icon: 'Clock', title: 'Inactivite de 13 Mois', fighter: 'Adesanya', risk_level: 'RISQUE MOYEN', risk_color: 'yellow', description: 'Adesanya n\'a pas combattu depuis fevrier 2025. Pour un combattant de 36 ans venant d\'un KO, l\'inactivite peut affecter le timing et les reflexes. Cependant, cela a aussi donne du temps pour la recuperation physique et mentale.' },
        { icon: 'TrendingUp', title: 'Trois Victoires Consecutives en Progression', fighter: 'Pyfer', risk_level: 'POSITIF', risk_color: 'green', description: 'Pyfer est en serie ascendante : KO, decision et soumission dans ses trois derniers combats. La diversification des methodes montre de la maturite et une evolution reelle du jeu.' },
        { icon: 'Brain', title: 'Experience des Main Events', fighter: 'Adesanya', risk_level: 'POSITIF', risk_color: 'green', description: 'Adesanya a ete en tete d\'affiche de 12 evenements UFC, incluant des combats de titre contre les meilleurs du monde. Pyfer n\'a jamais combattu en main event de l\'UFC. La pression d\'etre en combat principal de 5 rounds contre un nom comme Adesanya est completement nouvelle pour lui.' },
        { icon: 'Zap', title: 'Puissance de KO de Pyfer', fighter: 'Pyfer', risk_level: 'POSITIF', risk_color: 'green', description: 'Pyfer aurait battu le record de Francis Ngannou a la machine a frapper. Avec 60% de ses victoires par KO, il apporte une puissance de KO en un seul coup qui peut mettre fin au combat a tout moment, surtout contre un menton questionne.' },
        { icon: 'Activity', title: 'Cardio en 5 Rounds', fighter: 'Pyfer', risk_level: 'RISQUE MOYEN', risk_color: 'yellow', description: 'La seule fois que Pyfer a combattu 5 rounds (Hermansson), il a perdu et a visiblement fatigue. Contre le rythme d\'Adesanya en championship rounds, la fatigue pourrait etre un facteur decisif.' },
        { icon: 'Shield', title: 'Avantage d\'Allonge', fighter: 'Adesanya', risk_level: 'POSITIF', risk_color: 'green', description: 'Adesanya a 5 pouces d\'avantage a l\'allonge (80" vs 75"). Dans un combat de pur striking, cela permet de controler la distance et de connecter jabs et front kicks sans entrer dans la zone de danger de Pyfer.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Adesanya',
        total_probability: 52,
        scenarios: [
          { name: 'Masterclass de Distance', probability: 28, method: 'Decision Unanime', description: 'Adesanya utilise son allonge de 80 pouces pour garder Pyfer au bout de ses poings, connecte jabs, front kicks et contres. Frustre le jeune avec son mouvement et remporte une decision claire, surtout dans les derniers rounds quand le cardio de Pyfer baisse.' },
          { name: 'Contre Mortel', probability: 14, method: 'KO/TKO R3-R5', description: 'Pyfer avance agressivement, Adesanya trouve le timing sur le contre (left hook ou check hook) et finit quand le jeune est fatigue et moins defensif dans les rounds intermediaires ou finaux.' },
          { name: 'Domination en Championship Rounds', probability: 10, method: 'Decision Partagee', description: 'Combat equilibre dans les premiers rounds, avec Pyfer gagnant certains moments. Mais Adesanya prend le controle aux R4-R5 quand l\'experience et le cardio font la difference, gagnant une decision serree.' },
        ],
      },
      fighter2: {
        nome: 'Pyfer',
        total_probability: 45,
        scenarios: [
          { name: 'Bombe des Premiers Rounds', probability: 22, method: 'KO/TKO R1-R2', description: 'Pyfer ferme la distance tot, absorbe quelques jabs, et connecte un power shot a la machoire d\'Adesanya. Avec le menton questionne du veteran, un seul coup propre peut tout arreter dans les 10 premieres minutes.' },
          { name: 'Pression et Accumulation', probability: 13, method: 'TKO R2-R3', description: 'Pyfer maintient une pression constante, similaire a ce que Strickland a fait. Pousse Adesanya contre la grille, melange coups et clinch, et accumule les degats jusqu\'a l\'intervention de l\'arbitre.' },
          { name: 'Polyvalence au Sol', probability: 10, method: 'Soumission R2-R3', description: 'Pyfer surprend avec un takedown, utilise le grappling qu\'il a montre contre Magomedov et Alhassan, et trouve une soumission. Adesanya a zero experience au sol offensivement et peut etre vulnerable s\'il est mis sur le dos.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Israel Adesanya',
      winner_side: 'fighter1',
      predicted_method: 'Decision Unanime ou TKO tardif',
      confidence_score: 5,
      confidence_label: 'MOYENNE',
      explanation: 'C\'est un combat difficile a predire avec une confiance elevee. Adesanya, meme a 36 ans et venant de trois defaites, possede des avantages techniques clairs sur Pyfer : meilleur striking, plus d\'experience, meilleur cardio, et 5 pouces d\'avantage a l\'allonge. Le saut de qualite des adversaires que Pyfer a affrontes (Gastelum en declin, Barriault, Magomedov) vers Adesanya est enorme. Cependant, le menton d\'Adesanya est la plus grande inconnue. S\'il etait intact, ce serait une prediction de haute confiance. Comme ce n\'est pas le cas, Pyfer a un chemin reel vers la victoire avec sa puissance de KO. Je prevois Adesanya utilisant la distance et l\'experience pour controler le combat, surtout dans les derniers rounds, mais avec un risque reel d\'etre mis KO dans les deux premiers rounds.',
      x_factor: {
        title: 'L\'Allonge de 5 Pouces',
        description: 'Adesanya a 80 pouces d\'allonge contre 75 pour Pyfer. En termes UFC, c\'est un avantage massif. Si Adesanya utilise jabs, front kicks et side kicks pour maintenir la distance, Pyfer aura enormement de mal a entrer dans le rayon de frappe. Tout le combat peut etre decide par cette difference physique.',
      },
      upset_alert: {
        title: 'Le Menton de Verre ?',
        description: 'Si Pyfer connecte un power shot propre dans les deux premiers rounds, surtout un overhand ou un left hook, Adesanya peut tomber. Deux TKOs dans ses trois derniers combats ne mentent pas. Pyfer n\'a pas besoin de beaucoup de chances, il en a besoin d\'une seule.',
      },
      probabilities: sharedProbabilities,
      value_picks: {
        moneyline: { pick: 'Pyfer (+110)', reasoning: 'Si les cotes restent dans cette fourchette, Pyfer en tant que leger outsider offre une valeur reelle vu sa puissance de KO et le menton questionne d\'Adesanya.' },
        method: { pick: 'Le combat va a la decision', reasoning: 'Malgre leur puissance de KO respective, Adesanya favorise historiquement les combats longs (8 decisions en 24 victoires) et l\'allonge peut maintenir la distance.' },
        over_under: { pick: 'Under 4.5 rounds', rounds: 4.5, reasoning: 'Adesanya a ete fini dans deux de ses trois derniers combats. Pyfer finit la plupart de ses combats tot. La probabilite d\'une finition est plus elevee que la normale.' },
        best_value: 'Pyfer dans la distance (+250 estime) offre la meilleure valeur. Si Pyfer gagne, ce sera probablement par KO dans les premiers rounds.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Le Jab et le Front Kick d\'Adesanya dans les 2 Premieres Minutes', icon: 'Target', description: 'Si Adesanya commence le combat en utilisant jab et front kick pour maintenir la distance, c\'est signe que le gameplan fonctionne. Si Pyfer peut fermer la distance facilement dans ces premieres minutes, le combat est dans son territoire. Faites attention a l\'allonge : Adesanya doit l\'utiliser ou il gaspillera sa plus grande arme.' },
        { num: 2, title: 'La Reaction d\'Adesanya au Premier Coup Dur', icon: 'Shield', description: 'Le moment le plus revelateur du combat sera quand Pyfer connectera le premier power shot propre. La reaction du menton d\'Adesanya dictera tout. S\'il absorbe bien, la confiance monte et il peut dominer. S\'il vacille, Pyfer sentira le sang et viendra avec tout.' },
        { num: 3, title: 'Le Cardio de Pyfer au R3', icon: 'Activity', description: 'Pyfer a fatigue contre Hermansson dans les derniers rounds. Si le combat atteint le troisieme round, observez le volume de strikes et la posture de Pyfer. Si ses mains commencent a baisser et son jeu de jambes devient lourd, Adesanya va capitaliser.' },
        { num: 4, title: 'Pyfer Tentant des Takedowns', icon: 'Crosshair', description: 'Pyfer a 83% de precision de takedown et 1.45 par 15 minutes. S\'il melange takedowns et striking, il peut briser le rythme d\'Adesanya d\'une facon que les strikers purs comme Cannonier n\'ont pas pu. Soyez attentifs a quand et comment Pyfer change de niveau.' },
        { num: 5, title: 'Le Langage Corporel d\'Adesanya Entre les Rounds', icon: 'Brain', description: 'Un Adesanya qui s\'amuse, danse et provoque est un Adesanya dangereux. Un Adesanya silencieux, assis sur le tabouret et respirant fort est signe que l\'age pese. Le langage corporel entre les rounds racontera la vraie histoire.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'MAIN EVENT SEATTLE', content: 'ADESANYA vs PYFER\nUFC Fight Night | 28 mars\nClimate Pledge Arena, Seattle\n\n3 defaites consecutives vs 3 victoires consecutives\nL\'ancien champion se bat pour survivre.', color: 'red' },
        { slide_number: 2, title: 'ADESANYA : LES CHIFFRES', content: '#4 du classement poids moyen\n24-5 en carriere (16 KOs)\n2x champion UFC\n5 defenses de titre\n3.93 frappes sig. par minute\n80" d\'allonge\nMAIS : 3 defaites consecutives\n2 KOs subis dans les 3 derniers combats', color: 'red' },
        { slide_number: 3, title: 'PYFER : BODYBAGZ', content: '#14 du classement poids moyen\n15-3 en carriere (9 KOs, 4 subs)\n3 victoires consecutives\n60% de finitions par KO\n83% de precision de takedown\n29 ans, en pleine ascension\nA battu le record de Ngannou a la machine a frapper', color: 'blue' },
        { slide_number: 4, title: 'LA GRANDE QUESTION', content: 'LE MENTON D\'ADESANYA\n\nImavov : TKO R2 (Fev 2025)\nDu Plessis : Sub R4 (Aout 2024)\nStrickland : UD (Sep 2023)\nPereira : TKO R5 (Nov 2022)\n\n1 victoire sur les 5 derniers combats\nLe temps est-il passe ?\nOu le Stylebender vit-il encore ?', color: 'gold' },
        { slide_number: 5, title: 'PREDICTION', content: 'ADESANYA par Decision Unanime\n\nConfiance : MOYENNE\n52% Adesanya / 45% Pyfer\n\nL\'allonge et l\'experience\ndevraient controler la distance.\nMais un seul coup de Pyfer\npourrait tout changer.', color: 'gold' },
      ],
      twitter: [
        { num: '1/6', text: 'Adesanya vs Pyfer samedi a Seattle. Le champion poids moyen le plus dominant de la derniere decennie, avec 3 defaites consecutives, contre le jeune cogneurs de 29 ans. L\'analyse complete :' },
        { num: '2/6', text: 'Le chiffre qui definit ce combat : 5 POUCES. Adesanya a 80" d\'allonge. Pyfer a 75". Si Izzy utilise cet avantage avec jab et front kick, Pyfer passera la soiree a essayer d\'entrer dans le rayon de frappe. La distance est tout.' },
        { num: '3/6', text: 'L\'autre face de la medaille : Adesanya a ete KO/TKO dans 2 de ses 3 derniers combats. A 36 ans, le menton n\'est plus le meme. Pyfer a 9 KOs en 15 victoires et une puissance d\'un seul coup. Il suffit d\'UNE entree propre.' },
        { num: '4/6', text: 'Detail dont personne ne parle : Pyfer a 83% de precision de takedown et 4 soumissions en carriere. Ce n\'est pas juste un cogneur. S\'il melange takedowns et striking, il peut briser le rythme d\'Adesanya d\'une nouvelle facon.' },
        { num: '5/6', text: 'Le probleme de Pyfer : il n\'a jamais gagne un combat qui a depasse le R2 par finition. Contre Hermansson (5 rounds), il a fatigue et perdu. Adesanya a fait 7 combats de 5 rounds a l\'UFC. Championship rounds = territoire du veteran.' },
        { num: '6/6', text: 'Mon choix : Adesanya par decision, mais avec confiance MOYENNE. L\'allonge, l\'experience et les championship rounds favorisent Izzy. Mais Pyfer dans la distance aux R1-R2 est le pari de valeur du card. Un combat qui peut finir a tout moment.' },
      ],
      video: [
        { time: '0-10s', title: 'Accroche', text: 'Israel Adesanya etait le poids moyen le plus dominant du MMA. Cinq defenses de titre. Striking d\'un autre monde. Aujourd\'hui, trois defaites consecutives et une question : est-ce fini ? Samedi a Seattle, il doit repondre contre Joe Pyfer.' },
        { time: '10-25s', title: 'Contexte', text: 'Adesanya a 36 ans, 24-5, et a ete mis KO deux fois dans ses trois derniers combats. Le menton n\'est plus le meme. Pyfer a 29 ans, 15-3, neuf KOs et en ascension avec trois victoires consecutives. La difference d\'allonge est de 5 pouces en faveur d\'Izzy. Mais Pyfer apporte la puissance pour compenser.' },
        { time: '25-40s', title: 'Analyse Technique', text: 'La cle du combat : la distance. Si Adesanya garde Pyfer au bout de ses poings avec jab et front kick, il domine. Plus de technique, plus d\'experience, meilleur cardio. Mais si Pyfer ferme la distance et connecte, le menton d\'Adesanya est vulnerable. Imavov l\'a prouve en fevrier. Deux scenarios completement differents selon qui controle l\'espace.' },
        { time: '40-55s', title: 'Championship Rounds', text: 'Voici le facteur decisif : Pyfer n\'a jamais gagne un combat qui a depasse le R2 par finition. Contre Hermansson en 5 rounds, il a fatigue et perdu. Adesanya a fait sept combats de 5 rounds a l\'UFC. Si on arrive au R4 sans KO, Izzy est le grand favori.' },
        { time: '55-70s', title: 'Prediction et Valeur', text: 'Mon appel : Adesanya par decision, confiance moyenne. Mais Pyfer dans la distance dans les premiers rounds est le pari de valeur. Si vous pensez que le menton d\'Izzy est fini, Pyfer par KO R1-R2 paie bien. Le combat le plus imprevisible du card.' },
      ],
      tiktok: [
        { hook: 'Adesanya avec TROIS defaites consecutives. Le gars qui etait INTOUCHABLE chez les poids moyens.', body: 'Strickland par decision. Du Plessis par soumission. Imavov par KO au R2. Trois facons differentes de perdre. Maintenant il affronte Joe Pyfer, 29 ans, 9 KOs en 15 combats, qui a battu le record de Ngannou a la machine a frapper. Le menton d\'Adesanya tient-il ?', cta: 'Commentez IZZY ou PYFER !' },
        { hook: 'CINQ pouces. C\'est la difference qui pourrait sauver Adesanya.', body: 'Adesanya a 80 pouces d\'allonge. Pyfer a 75. Ce sont 5 pouces. Si Izzy utilise jab et front kick pour maintenir la distance, Pyfer N\'ENTRE JAMAIS. Mais si Pyfer ferme, UN SEUL coup a la machoire suffit. Deux realites completement differentes.', cta: 'Qui controle la distance ? Commentez !' },
        { hook: 'Pyfer n\'a JAMAIS gagne un combat qui a depasse le R2 par finition.', body: 'Contre Hermansson en 5 rounds, Pyfer a FATIGUE et perdu. Adesanya a fait SEPT combats de 5 rounds a l\'UFC. Si on arrive au quatrieme round sans KO, Izzy domine. Mais Pyfer n\'a besoin que d\'un moment. UN coup. Et avec le menton d\'Adesanya en question, ce moment peut venir a tout instant.', cta: 'KO ou decision ? Commentez !' },
      ],
      headlines: [
        'Adesanya vs Pyfer : Renaissance ou Retraite du Stylebender a Seattle ?',
        'Le Menton d\'Adesanya Contre la Puissance de Pyfer : Le Combat Qui Definit une Carriere',
        '5 Pouces d\'Avantage : Pourquoi l\'Allonge Peut Sauver Adesanya',
        'De 3 Defaites Consecutives au Main Event : Le Dilemme d\'Israel Adesanya',
        'Pyfer Bodybagz : Le Cogneurs Qui Pourrait Mettre Adesanya a la Retraite',
        'UFC Seattle : Pourquoi Pyfer par KO Est le Pari de Valeur du Card',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        ...sharedOdds,
        source: 'Moyenne de DraftKings et des bookmakers (mars 2026)',
      },
      edges: [
        { icon: 'Shield', titulo: 'Avantage d\'Allonge Massif', stat_headline: '80" VS 75" : 5 POUCES DE DIFFERENCE', contexto: 'Adesanya a l\'une des plus grandes allonges des poids moyens. Contre un adversaire aux bras courts comme Pyfer, cet avantage permet de controler la distance avec jab et front kick efficacement.', implicacao_aposta: 'Favorise Adesanya par decision et Over en rounds.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Zap', titulo: 'Menton Compromis d\'Adesanya', stat_headline: '2 TKO/KOs SUBIS DANS LES 3 DERNIERS COMBATS', contexto: 'Adesanya a ete fini par Pereira (TKO R5) et Imavov (TKO R2). A 36 ans, l\'absorption d\'impact diminue. Contre la puissance d\'un seul coup de Pyfer, c\'est le plus grand facteur de risque.', implicacao_aposta: 'Favorise Pyfer dans la distance. Props KO/TKO Pyfer R1-R2 ont de la valeur.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Activity', titulo: 'Cardio en 5 Rounds', stat_headline: 'PYFER A PERDU SON SEUL COMBAT DE 5 ROUNDS (HERMANSSON)', contexto: 'Pyfer a visiblement fatigue dans les derniers rounds contre Hermansson. Adesanya a fait 7 combats de 5 rounds a l\'UFC. Si le combat depasse le R3, l\'avantage cardio et experience d\'Adesanya croit exponentiellement.', implicacao_aposta: 'Over 2.5 rounds favorise significativement Adesanya.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Target', titulo: 'Grappling Offensif de Pyfer', stat_headline: '83% DE PRECISION DE TAKEDOWN, 4 SOUMISSIONS EN CARRIERE', contexto: 'Pyfer n\'est pas qu\'un cogneur. Il a 4 soumissions et une haute precision de takedown. Il peut melanger les niveaux et briser le rythme de striking d\'Adesanya d\'une facon que les strikers purs n\'ont pas pu.', implicacao_aposta: 'Pyfer par soumission est un pari de valeur cache.', edge_level: 'moderado', fighter_side: 'fighter2' },
        { icon: 'Clock', titulo: 'Inactivite et Age d\'Adesanya', stat_headline: '13 MOIS SANS COMBATTRE, 36 ANS, VENANT D\'UN KO', contexto: 'Combinaison preoccupante. Les combattants revenant d\'un KO apres une longue inactivite a 36 ans ont historiquement des performances reduites. Le timing et les reflexes peuvent ne plus etre les memes.', implicacao_aposta: 'Ajoute du risque a Adesanya comme favori. La ligne de -130 peut ne pas refleter le risque reel.', edge_level: 'moderado', fighter_side: 'fighter2' },
      ],
      value_picks: [
        { tipo: 'Methode', pick: 'Pyfer par KO/TKO', odds: '+250 (estime)', confianca: 'media', edge_vs_mercado: 'Menton compromis d\'Adesanya + puissance de Pyfer = probabilite reelle superieure a ce que les cotes suggerent.', raciocinio: 'Si Pyfer gagne, la probabilite que ce soit par KO dans les premiers rounds est tres elevee. Le menton d\'Adesanya a ete teste et a cede deux fois recemment. A +250, le retour compense le risque.' },
        { tipo: 'Over/Under', pick: 'Over 2.5 Rounds', odds: '-140 (estime)', confianca: 'media', edge_vs_mercado: 'Malgre les KOs recents d\'Adesanya, il tend a commencer les combats lentement.', raciocinio: 'Adesanya est un counter-striker qui a besoin de temps pour trouver son timing. Pyfer, malgre sa puissance, peut mettre du temps a fermer la distance contre l\'allonge. Les premiers rounds seront probablement de l\'etude.' },
        { tipo: 'Duree', pick: 'Ne va pas a la decision', odds: '+120 (estime)', confianca: 'baixa', edge_vs_mercado: 'Adesanya a ete fini dans 2 de ses 3 derniers combats. Pyfer finit 87% de ses victoires.', raciocinio: 'Historiquement, les combats d\'Adesanya allaient a la decision. Mais la phase actuelle suggere qu\'il est plus vulnerable aux finitions. Avec Pyfer apportant puissance et grappling, la chance de finition est plus elevee que l\'historique ne le suggere.' },
      ],
      armadilha: {
        titulo: 'Piege : Adesanya par KO',
        descricao: 'Le dernier KO d\'Adesanya a l\'UFC etait contre Alex Pereira en avril 2023, il y a presque trois ans. Dans les combats recents, sa puissance offensive de finition a visiblement diminue. Parier sur Adesanya par KO c\'est parier contre la tendance recente. Si Adesanya gagne, ce sera probablement par decision.',
      },
      disclaimer: 'Analyse statistique a des fins informatives. Pariez de maniere responsable.',
    },
  },
};

// ============================================================
// SPANISH (ES)
// ============================================================
const analiseES: FullSingleAnalise = {
  ...sharedMeta,
  titulo: 'Adesanya vs Pyfer: La Ultima Prueba del Stylebender',
  subtitulo: 'El ex campeon busca cortar una racha de 3 derrotas contra el joven noqueador #14 del ranking',

  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
      evento_data: '28 de marzo, 2026',
      evento_local: 'Climate Pledge Arena, Seattle, Washington',
      categoria_peso: 'Peso Medio (185 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'Renacimiento o Retiro?',
      tagline_sub: 'Tres derrotas seguidas. Un joven hambriento. La carrera de Izzy en juego en Seattle.',
      fighter1: {
        nome_completo: 'Israel "The Last Stylebender" Adesanya',
        apelido: 'The Last Stylebender',
        sobrenome: 'Adesanya',
        record: '24-5-0',
        ranking: '#4 Peso Medio',
        info_extra: 'Auckland, Nueva Zelanda | 36 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/ADESANYA_ISRAEL_L_02-01.png?itok=YGc30Vwe',
      },
      fighter2: {
        nome_completo: 'Joe "Bodybagz" Pyfer',
        apelido: 'Bodybagz',
        sobrenome: 'Pyfer',
        record: '15-3-0',
        ranking: '#14 Peso Medio',
        info_extra: 'Allentown, Pensilvania | 29 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-06/PYFER_JOE_L_06-29.png?itok=prLW4_bl',
      },
    },

    narrativa: {
      html_content: `
        <h3 class="font-display text-xl uppercase text-ufc-red mb-4">El Crepusculo de un Rey</h3>
        <p class="mb-4">
          <strong class="text-ufc-red">Israel Adesanya</strong> fue una vez el peleador mas dominante del peso medio del UFC. Dos veces campeon, dueno de un reinado que incluyo cinco defensas del titulo y actuaciones que redefinieron lo que era posible en el striking de MMA. Hoy, a los 36 anos, llega a Seattle con tres derrotas consecutivas y una pregunta que nadie quiere hacer en voz alta: se acabo?
        </p>
        <p class="mb-4">
          La caida comenzo en septiembre de 2023, cuando Sean Strickland, un perdedor masivo a +450, desmantel el reinado de Adesanya con un plan simple: presion constante, jab a la cara, y negativa total de dar espacio. Despues vino Dricus Du Plessis, que sometio a Izzy en el cuarto round en UFC 305 en Perth. Y la mas reciente, quizas la mas dolorosa: Nassourdine Imavov noqueo a Adesanya en el segundo round en Arabia Saudita, en febrero de 2025. Un overhand derecho a la mandibula, seguido de un uppercut izquierdo mientras Izzy caia. Brutal. Rapido. Definitivo.
        </p>
        <h3 class="font-display text-xl uppercase text-ufc-red mb-4 mt-8">Bodybagz: La Nueva Ola del Peso Medio</h3>
        <p class="mb-4">
          Del otro lado esta <strong class="text-blue-400">Joe Pyfer</strong>, 29 anos, apodo "Bodybagz", y con una historia de vida que rivaliza con cualquier guion de pelicula. Crecio en situacion de calle en Allentown, Pensilvania, supero una infancia extremadamente dificil, y canalizo todo hacia el MMA. Hoy, con 15 victorias (9 por nocaut, 4 por sumision), Pyfer es uno de los prospectos mas peligrosos del peso medio. Desde la derrota ante Jack Hermansson en febrero de 2024, son tres victorias seguidas, incluyendo un nocaut devastador sobre Barriault en el primer round y una sumision impresionante sobre Magomedov.
        </p>
        <h3 class="font-display text-xl uppercase text-ufc-red mb-4 mt-8">Lo Que Esta en Juego</h3>
        <p class="mb-4">
          Para Adesanya, esta no es solo otra pelea. Es posiblemente la ultima oportunidad de demostrar que aun pertenece a la elite. Cuatro derrotas en las ultimas cinco peleas significarian, para muchos, la senal definitiva de que el tiempo paso. Para Pyfer, la oportunidad es enorme. Vencer a un ex campeon con el nombre de Adesanya, en un main event de 5 rounds, es el tipo de victoria que catapulta a un peleador del #14 al top 10. La diferencia de experiencia es absurda: Adesanya tiene 13 peleas en el UFC contra los mejores del mundo. Pyfer tiene 7 peleas en el UFC y nunca ha peleado 5 rounds. Pero en MMA, la juventud y el poder bruto a veces valen mas que un curriculo.
        </p>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: '#4 Peso Medio', fighter2: '#14 Peso Medio' },
        { dimensao: 'Racha', fighter1: '3 derrotas consecutivas', fighter2: '3 victorias consecutivas' },
        { dimensao: 'Objetivo', fighter1: 'Cortar racha negativa, probar relevancia', fighter2: 'Entrar al top 10, construir nombre' },
        { dimensao: 'Narrativa', fighter1: 'Ultimo capitulo o renacimiento?', fighter2: 'El joven que derriba a la leyenda' },
        { dimensao: 'Riesgo', fighter1: 'Cuarta derrota seguida, presion por retiro', fighter2: 'Derrota en main event de 5 rounds expone inexperiencia' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'EL STYLEBENDER RENACE',
          subtitulo: 'Adesanya usa distancia, experiencia e IQ de pelea para dominar al joven Pyfer',
          consequencias: [
            { tag: 'RANKING', texto: 'Adesanya se mantiene en el top 5 y respira en la division. Vuelve a ser opcion para peleas grandes.' },
            { tag: 'LEGADO', texto: 'Narrativa de superacion: el ex campeon que se nego a rendirse y vencio a un joven peligroso.' },
            { tag: 'DIVISION', texto: 'Pyfer vuelve a ser proyecto a largo plazo. La derrota no es desastrosa por la diferencia de experiencia.' },
          ],
          proxima_luta: 'Adesanya vs un top 10 como Brendan Allen o Caio Borralho',
        },
        fighter2_vence: {
          titulo: 'LA NUEVA ERA DEL PESO MEDIO',
          subtitulo: 'Pyfer noquea al ex campeon y entra en el radar del top 10',
          consequencias: [
            { tag: 'RANKING', texto: 'Pyfer salta al top 8 con victoria sobre ex campeon en main event.' },
            { tag: 'LEGADO', texto: 'Adesanya acumula cuarta derrota seguida. La presion por retiro se vuelve enorme.' },
            { tag: 'DIVISION', texto: 'Pyfer se establece como el proximo nombre a observar en peso medio, a los 29 anos.' },
          ],
          proxima_luta: 'Pyfer vs un top 5 como Nassourdine Imavov o Robert Whittaker',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Israel Adesanya',
        color: 'red',
        recent_fights: [
          { date: 'Feb 2025', opponent: 'Nassourdine Imavov', result: 'L', method: 'TKO R2 (golpes)', opponent_rank: '#7 MW', quality_score: 4, quality_label: 'Muy Bueno', note: 'Noqueado en el segundo round por un overhand derecho seguido de uppercut. Adesanya venia bien en el primer round pero fue atrapado limpiamente.' },
          { date: 'Ago 2024', opponent: 'Dricus Du Plessis', result: 'L', method: 'Sub R4 (mata-leon)', opponent_rank: 'Campeon MW', quality_score: 5, quality_label: 'Excelente', note: 'Pelea competitiva por tres rounds, Adesanya llego a dominar con body shots en el R3, pero Du Plessis conecto en el R4, tomo la espalda y finalizo.' },
          { date: 'Sep 2023', opponent: 'Sean Strickland', result: 'L', method: 'Decision Unanime (49-46)', opponent_rank: '#4 MW', quality_score: 4, quality_label: 'Muy Bueno', note: 'Upset historico. Strickland uso jab y presion constante. Adesanya no pudo encontrar ritmo en ningun momento. Tarjetas unanimes 49-46.' },
          { date: 'Nov 2022', opponent: 'Alex Pereira', result: 'L', method: 'TKO R5', opponent_rank: '#4 MW', quality_score: 4, quality_label: 'Muy Bueno', note: 'Adesanya ganaba en las tarjetas cuando Pereira conecto un left hook devastador en el R5. Tercera derrota ante Pereira contando kickboxing.' },
          { date: 'Jul 2022', opponent: 'Jared Cannonier', result: 'W', method: 'Decision Unanime', opponent_rank: '#2 MW', quality_score: 4, quality_label: 'Muy Bueno', note: 'Defensa de titulo controlada. Adesanya uso distancia y contragolpes precisos por 5 rounds sin ser amenazado.' },
        ],
        full_fight_history: adesanyaFullHistory,
        layoff_warning: 'Aproximadamente 13 meses desde la ultima pelea (febrero 2025). Inactividad moderada, pero viene de tres derrotas y dos nocauts recientes.',
        momentum_score: 2,
        momentum_label: 'En Caida',
        momentum_trend: 'descending',
        momentum_note: 'Adesanya esta en el peor momento de su carrera. Tres derrotas consecutivas, dos por nocaut/TKO y una por sumision. La derrota ante Imavov fue particularmente preocupante porque sucedio rapido, en el segundo round, contra un oponente que no era campeon. La quijada de Adesanya, antes considerada elite, parece comprometida a los 36 anos. Su unica victoria en las ultimas cinco peleas fue el KO sobre Pereira en la revancha, en abril de 2023, hace casi tres anos.',
      },
      fighter2: {
        nome: 'Joe Pyfer',
        color: 'blue',
        recent_fights: [
          { date: 'Oct 2025', opponent: 'Abusupiyan Magomedov', result: 'W', method: 'Sub R2 (face crank)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Victoria impresionante por sumision en el segundo round contra striker peligroso. Mostro evolucion en grappling.' },
          { date: 'Jun 2025', opponent: 'Kelvin Gastelum', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Domino a Gastelum con dos knockdowns a lo largo de tres rounds. Primera victoria por decision en el UFC.' },
          { date: 'Jun 2024', opponent: 'Marc-Andre Barriault', result: 'W', method: 'KO R1 (1:25)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Nocaut relampago en el primer round. Poder bruto impresionante.' },
          { date: 'Feb 2024', opponent: 'Jack Hermansson', result: 'L', method: 'Decision Unanime', opponent_rank: '#12 MW', quality_score: 3, quality_label: 'Bueno', note: 'Primera pelea de 5 rounds, perdio por decision. Hermansson controlo con wrestling y experiencia. Pyfer visiblemente cansado en los rounds finales.' },
          { date: 'Oct 2023', opponent: 'Abdul Razak Alhassan', result: 'W', method: 'Sub R2 (arm-triangle)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Malo', note: 'Sumision tecnica en el segundo round. Mostro versatilidad mas alla del striking.' },
        ],
        full_fight_history: pyferFullHistory,
        layoff_warning: null,
        momentum_score: 7,
        momentum_label: 'En Ascenso',
        momentum_trend: 'ascending',
        momentum_note: 'Pyfer viene de tres victorias consecutivas desde la derrota ante Hermansson, mostrando evolucion clara en cada pelea. Paso de ser un puro noqueador a alguien que puede ganar por decision (Gastelum) y sumision (Magomedov). La racha es contra oponentes de nivel medio, lo que limita el entusiasmo, pero la evolucion tecnica es real. A los 29 anos, esta en el momento ideal de desarrollo.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Adesanya',
        media_oponentes: 5,
        media_oponentes_label: 'Excelente',
        aproveitamento: '13W-5L (72%)',
        contra_top5: '8W-4L',
      },
      fighter2: {
        nome: 'Pyfer',
        media_oponentes: 2,
        media_oponentes_label: 'Regular',
        aproveitamento: '6W-1L (86%)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: 'Kelvin Gastelum es el unico oponente en comun relevante. Adesanya vencio a Gastelum en 2019 por decision unanime en una pelea epica de 5 rounds (Pelea del Ano). Pyfer vencio a Gastelum en 2025 por decision unanime con dos knockdowns. El Gastelum de 2019 era un peleador completamente diferente (top 5, viniendo de noquear a Bisping) comparado con el Gastelum de 2025 (sin ranking, en declive). La comparacion directa es limitada.',
    },

    oponente_comum: {
      oponente_nome: 'Kelvin Gastelum',
      fighter1_result: {
        resultado: 'Victoria por Decision Unanime',
        metodo: '48-46, 48-46, 48-46',
        duracao: '5 rounds (25:00)',
        contexto: 'Considerada una de las mejores peleas de la historia del UFC. Gastelum derribo a Adesanya en el cuarto round y casi lo finalizo. Adesanya se recupero y domino el quinto round para sellar la victoria por el titulo interino. Una guerra de 25 minutos con intercambios pesados y momentos dramaticos en cada round.',
        performance: 'Adesanya mostro un corazon enorme, capacidad de recuperacion e IQ de pelea elite. Gano una guerra real contra un Gastelum que estaba en su mejor momento.',
        evento: 'UFC 236',
        data: 'Abr 2019',
      },
      fighter2_result: {
        resultado: 'Victoria por Decision Unanime',
        metodo: 'Tarjetas no disponibles',
        duracao: '3 rounds (15:00)',
        contexto: 'Pyfer controlo la pelea con presion, derribo a Gastelum dos veces con power shots, y gano con claridad en tres rounds. Gastelum no ofrecio resistencia significativa y ya estaba claramente en fase descendente de su carrera.',
        performance: 'Pyfer mostro madurez al no buscar el nocaut desesperadamente despues de los knockdowns, controlando el ritmo y ganando en los puntos. Pero el nivel de Gastelum en esa fase era muy inferior al de 2019.',
        evento: 'UFC 316',
        data: 'Jun 2025',
      },
      insight: 'La comparacion es injusta pero existe. Adesanya enfrento a un Gastelum elite en 2019, que lo derribo y casi lo finalizo, y gano una pelea epica de 5 rounds. Pyfer enfrento a un Gastelum en declive en 2025 y gano con dos knockdowns. El contexto es completamente diferente, pero Pyfer mostro algo que Adesanya tambien mostro: poder para lastimar a Gastelum e inteligencia para no emocionarse.',
    },

    comparacao_estatistica: {
      stats: sharedStats,
      tale_of_tape: [
        { label: 'Edad', fighter1: '36 anos', fighter2: '29 anos', note: 'Pyfer 7 anos mas joven' },
        { label: 'Altura', fighter1: '1,93m (6\'4")', fighter2: '1,88m (6\'2")', note: 'Adesanya 2 pulgadas mas alto' },
        { label: 'Envergadura', fighter1: '203cm (80")', fighter2: '190cm (75")', note: 'Adesanya con 5 pulgadas de ventaja' },
        { label: 'Guardia', fighter1: 'Ortodoxa', fighter2: 'Ortodoxa', note: null },
        { label: 'Academia', fighter1: 'City Kickboxing, Auckland', fighter2: 'Team Balance, Filadelfia', note: null },
        { label: 'Debut UFC', fighter1: 'Febrero 2018', fighter2: 'Agosto 2022', note: 'Adesanya con 4+ anos mas de experiencia UFC' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking Tecnico', valueA: 88, valueB: 62, labelA: 'Muy Bueno', labelB: 'Bueno', advantage: 'fighter1', advantage_note: 'Adesanya es uno de los strikers mas tecnicos en la historia del UFC. Juego de pies, timing y variacion de angulos de nivel mundial. Pyfer es mas limitado tecnicamente, dependiendo mas del poder bruto.' },
        { label: 'Poder de Nocaut', valueA: 72, valueB: 85, labelA: 'Bueno', labelB: 'Muy Bueno', advantage: 'fighter2', advantage_note: 'Pyfer tiene 9 KOs en 15 victorias (60%). Poder real de un solo golpe. Adesanya tiene 16 KOs en su carrera pero en los ultimos anos tiene menos finalizaciones por nocaut.' },
        { label: 'Grappling Ofensivo', valueA: 25, valueB: 55, labelA: 'Malo', labelB: 'Bueno', advantage: 'fighter2', advantage_note: 'Adesanya casi nunca busca takedowns (0.05 por 15 min). Pyfer tiene 4 sumisiones en su carrera y promedio de 1.45 TDs por 15 min. Ventaja clara en grappling ofensivo.' },
        { label: 'Defensa de Takedown', valueA: 80, valueB: 50, labelA: 'Muy Bueno', labelB: 'Regular', advantage: 'fighter1', advantage_note: 'Adesanya con 77% de defensa de TD en su carrera. Pyfer fue dominado por Hermansson en el suelo, con solo 50% de defensa.' },
        { label: 'Cardio y Resistencia', valueA: 78, valueB: 58, labelA: 'Muy Bueno', labelB: 'Bueno', advantage: 'fighter1', advantage_note: 'Adesanya ha peleado 5 rounds varias veces y siempre mantuvo ritmo. Pyfer se canso visiblemente en los rounds finales contra Hermansson, su unica pelea de 5 rounds.' },
        { label: 'IQ de Pelea y Experiencia', valueA: 92, valueB: 48, labelA: 'Excelente', labelB: 'Regular', advantage: 'fighter1', advantage_note: 'Adesanya tiene 18 peleas en el UFC contra los mejores del mundo, cinco defensas de titulo y ajustes en mitad de pelea comprobados. Pyfer tiene 7 peleas en el UFC contra oponentes de nivel medio.' },
      ],
      insight: 'El matchup revela una dinamica interesante: Adesanya es superior en casi todas las areas tecnicas, especialmente striking, experiencia y cardio. Pero Pyfer lleva ventaja en poder bruto y grappling ofensivo. La gran pregunta no es tecnica, es fisica: la quijada de Adesanya aguanta el poder de Pyfer? Tecnicamente, Adesanya deberia dominar. Fisicamente, Pyfer puede terminar todo en cualquier momento.',
    },

    distribuicao_vitorias: {
      ...sharedDistribuicao,
      insight: 'Dos finalizadores por naturaleza, pero con estilos diferentes. Adesanya construyo el 67% de sus victorias por nocaut a lo largo de su carrera, pero no ha finalizado a nadie por KO en el UFC desde la revancha contra Pereira en abril de 2023. Cero sumisiones en toda su carrera. Pyfer es mas diversificado: 60% por KO, 27% por sumision, mostrando que puede terminar la pelea de multiples formas. La diferencia crucial: Pyfer termina peleas temprano (promedio de 7 minutos por pelea), Adesanya historicamente necesita tiempo para encontrar el timing.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1-R2',
          danger_level: 8,
          danger_label: 'VENTAJA PYFER',
          color: 'green',
          title: 'Territorio Peligroso para Adesanya',
          description: 'Los dos primeros rounds son donde Pyfer es mas letal. De sus 9 victorias por KO, la mayoria vinieron en los dos primeros rounds. Barriault cayo a 1:25 del R1. Adesanya, por otro lado, fue noqueado por Imavov en el R2 y sufrio TKO de Pereira en el R5 cuando fue atrapado. La quijada de Adesanya esta en duda, y Pyfer trae el tipo de poder que puede explotar esa debilidad temprano. Si Adesanya sobrevive los primeros 10 minutos sin ser lastimado, la dinamica cambia completamente.',
        },
        {
          rounds: 'R3',
          danger_level: 5,
          danger_label: 'EQUILIBRADO',
          color: 'gold',
          title: 'El Round de Transicion',
          description: 'El tercer round es donde la experiencia comienza a pesar. Pyfer nunca ha ganado una pelea que llego al R3, excepto por decision contra Gastelum. Adesanya, a pesar de su mala racha, tiene cientos de minutos de experiencia en championship distance. Si ambos llegan al R3 sin danos significativos, el round funciona como punto de transicion, con Adesanya comenzando a encontrar el timing y Pyfer comenzando a gastar energia.',
        },
        {
          rounds: 'R4-R5',
          danger_level: 8,
          danger_label: 'VENTAJA ADESANYA',
          color: 'red',
          title: 'Championship Rounds: Territorio del Veterano',
          description: 'Los rounds finales son donde la experiencia de Adesanya se convierte en arma. Pyfer perdio su unica pelea de 5 rounds (Hermansson) y visiblemente se canso en los rounds finales. Adesanya ha peleado 5 rounds siete veces en el UFC y siempre mantuvo ritmo. Si la pelea llega aqui sin nocaut, Adesanya sera el gran favorito, con mas gas, mas experiencia y capacidad de encontrar aperturas contra un oponente cansado.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'AlertTriangle', title: 'Quijada Comprometida', fighter: 'Adesanya', risk_level: 'RIESGO ALTO', risk_color: 'red', description: 'Adesanya fue noqueado/TKO en dos de sus ultimas tres peleas (Pereira R5, Imavov R2). A los 36 anos, la capacidad de absorber impacto disminuye naturalmente. Contra el poder de Pyfer, esta es la mayor preocupacion de la pelea.' },
        { icon: 'Clock', title: 'Inactividad de 13 Meses', fighter: 'Adesanya', risk_level: 'RIESGO MEDIO', risk_color: 'yellow', description: 'Adesanya no ha peleado desde febrero de 2025. Para un peleador de 36 anos que viene de un nocaut, la inactividad puede afectar timing y reflejos. Sin embargo, tambien dio tiempo de recuperacion fisica y mental.' },
        { icon: 'TrendingUp', title: 'Tres Victorias Seguidas con Evolucion', fighter: 'Pyfer', risk_level: 'POSITIVO', risk_color: 'green', description: 'Pyfer viene en racha ascendente: KO, decision y sumision en sus ultimas tres. La diversificacion de metodos muestra madurez y evolucion real del juego.' },
        { icon: 'Brain', title: 'Experiencia en Main Events', fighter: 'Adesanya', risk_level: 'POSITIVO', risk_color: 'green', description: 'Adesanya ha sido estelar de 12 eventos UFC, incluyendo peleas de titulo contra los mejores del mundo. Pyfer nunca ha peleado un main event del UFC. La presion de ser la pelea principal de 5 rounds contra un nombre como Adesanya es completamente nueva para el.' },
        { icon: 'Zap', title: 'Poder de Nocaut de Pyfer', fighter: 'Pyfer', risk_level: 'POSITIVO', risk_color: 'green', description: 'Pyfer rompio el record de Francis Ngannou en la maquina de golpeo, segun reportes. Con 60% de sus victorias por KO, trae poder de nocaut de un solo golpe que puede terminar la pelea en cualquier momento, especialmente contra una quijada cuestionada.' },
        { icon: 'Activity', title: 'Cardio en 5 Rounds', fighter: 'Pyfer', risk_level: 'RIESGO MEDIO', risk_color: 'yellow', description: 'La unica vez que Pyfer peleo 5 rounds (Hermansson), perdio y visiblemente se canso. Contra el ritmo de Adesanya en championship rounds, la fatiga puede ser factor decisivo.' },
        { icon: 'Shield', title: 'Ventaja de Envergadura', fighter: 'Adesanya', risk_level: 'POSITIVO', risk_color: 'green', description: 'Adesanya tiene 5 pulgadas de ventaja en envergadura (80" vs 75"). En pelea de striking puro, esto permite controlar la distancia y conectar jabs y front kicks sin entrar en la zona de peligro de Pyfer.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Adesanya',
        total_probability: 52,
        scenarios: [
          { name: 'Clase de Distancia', probability: 28, method: 'Decision Unanime', description: 'Adesanya usa la envergadura de 80 pulgadas para mantener a Pyfer en la punta, conecta jabs, front kicks y contragolpes. Frustra al joven con movimiento y se lleva una decision clara, especialmente en los rounds finales cuando el cardio de Pyfer cae.' },
          { name: 'Contragolpe Mortal', probability: 14, method: 'KO/TKO R3-R5', description: 'Pyfer avanza agresivamente, Adesanya encuentra el timing en el contragolpe (left hook o check hook) y termina cuando el joven esta cansado y menos defensivo en los rounds intermedios o finales.' },
          { name: 'Dominio en Championship Rounds', probability: 10, method: 'Decision Dividida', description: 'Pelea equilibrada en los primeros rounds, con Pyfer ganando algunos momentos. Pero Adesanya toma control en R4-R5 cuando la experiencia y el cardio hacen la diferencia, ganando una decision cerrada.' },
        ],
      },
      fighter2: {
        nome: 'Pyfer',
        total_probability: 45,
        scenarios: [
          { name: 'Bomba en Rounds Iniciales', probability: 22, method: 'KO/TKO R1-R2', description: 'Pyfer cierra la distancia temprano, absorbe algunos jabs, y conecta un power shot en la mandibula de Adesanya. Con la quijada cuestionada del veterano, un solo golpe limpio puede acabar con todo en los primeros 10 minutos.' },
          { name: 'Presion y Acumulacion', probability: 13, method: 'TKO R2-R3', description: 'Pyfer mantiene presion constante, similar a lo que hizo Strickland. Empuja a Adesanya contra la reja, mezcla golpes y clinch, y acumula dano hasta que el arbitro interviene.' },
          { name: 'Versatilidad en el Suelo', probability: 10, method: 'Sumision R2-R3', description: 'Pyfer sorprende con un takedown, usa el grappling que mostro contra Magomedov y Alhassan, y encuentra una sumision. Adesanya tiene cero experiencia en peleas de suelo ofensivamente y puede ser vulnerable si es puesto de espaldas.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Israel Adesanya',
      winner_side: 'fighter1',
      predicted_method: 'Decision Unanime o TKO tardio',
      confidence_score: 5,
      confidence_label: 'MEDIA',
      explanation: 'Esta es una pelea dificil de predecir con confianza alta. Adesanya, incluso a los 36 anos y viniendo de tres derrotas, posee ventajas tecnicas claras sobre Pyfer: mejor striking, mas experiencia, mejor cardio, y 5 pulgadas de ventaja en envergadura. El salto de calidad de los oponentes que Pyfer enfrento (Gastelum en declive, Barriault, Magomedov) a Adesanya es enorme. Sin embargo, la quijada de Adesanya es la mayor incognita. Si estuviera intacta, esta seria una prediccion de alta confianza. Como no lo esta, Pyfer tiene un camino real a la victoria con su poder de nocaut. Preveo a Adesanya usando distancia y experiencia para controlar la pelea, especialmente en los rounds finales, pero con riesgo real de ser noqueado en los dos primeros rounds.',
      x_factor: {
        title: 'La Envergadura de 5 Pulgadas',
        description: 'Adesanya tiene 80 pulgadas de envergadura contra 75 de Pyfer. En numeros de UFC, esta es una ventaja masiva. Si Adesanya usa jabs, front kicks y side kicks para mantener distancia, Pyfer va a tener dificultad enorme para entrar en el rango de alcance. Toda la pelea puede ser decidida por esta diferencia fisica.',
      },
      upset_alert: {
        title: 'La Quijada de Cristal?',
        description: 'Si Pyfer conecta un power shot limpio en los dos primeros rounds, especialmente un overhand o left hook, Adesanya puede ir al suelo. Dos TKOs en las ultimas tres peleas no mienten. Pyfer no necesita muchas oportunidades, necesita una.',
      },
      probabilities: sharedProbabilities,
      value_picks: {
        moneyline: { pick: 'Pyfer (+110)', reasoning: 'Si las cuotas se mantienen en este rango, Pyfer como ligero perdedor ofrece valor real dado el poder de nocaut y la quijada cuestionada de Adesanya.' },
        method: { pick: 'La pelea va a decision', reasoning: 'A pesar de que ambos tienen poder de nocaut, Adesanya historicamente favorece peleas largas (8 decisiones en 24 victorias) y la envergadura puede mantener distancia.' },
        over_under: { pick: 'Under 4.5 rounds', rounds: 4.5, reasoning: 'Adesanya fue finalizado en dos de sus ultimas tres peleas. Pyfer finaliza la mayoria de sus peleas temprano. La probabilidad de finalizacion es mayor que lo normal.' },
        best_value: 'Pyfer dentro de la distancia (+250 estimado) ofrece el mejor valor. Si Pyfer gana, probablemente sera por nocaut en los primeros rounds.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'El Jab y Front Kick de Adesanya en los Primeros 2 Minutos', icon: 'Target', description: 'Si Adesanya comienza la pelea usando jab y front kick para mantener distancia, es senal de que el gameplan esta funcionando. Si Pyfer puede cerrar distancia facilmente en esos primeros minutos, la pelea esta en su territorio. Presten atencion a la envergadura: Adesanya necesita usarla o desperdiciara su mayor arma.' },
        { num: 2, title: 'La Reaccion de Adesanya al Primer Golpe Duro', icon: 'Shield', description: 'El momento mas revelador de la pelea sera cuando Pyfer conecte el primer power shot limpio. La reaccion de la quijada de Adesanya dictara todo. Si absorbe bien, la confianza sube y puede dominar. Si tambalea, Pyfer va a oler sangre y venir con todo.' },
        { num: 3, title: 'El Gas de Pyfer en el R3', icon: 'Activity', description: 'Pyfer se canso contra Hermansson en los rounds finales. Si la pelea llega al tercer round, observen el volumen de strikes y la postura de Pyfer. Si las manos empiezan a bajar y el juego de pies se hace pesado, Adesanya va a capitalizar.' },
        { num: 4, title: 'Pyfer Intentando Takedowns', icon: 'Crosshair', description: 'Pyfer tiene 83% de precision de takedown y 1.45 por 15 minutos. Si mezcla takedowns con striking, puede romper el ritmo de Adesanya de una forma que strikers puros como Cannonier no lograron. Esten atentos a cuando y como Pyfer cambia de nivel.' },
        { num: 5, title: 'El Lenguaje Corporal de Adesanya Entre Rounds', icon: 'Brain', description: 'Un Adesanya que se esta divirtiendo, bailando y provocando es un Adesanya peligroso. Un Adesanya callado, sentado en el banco y respirando pesado es senal de que la edad esta pesando. El lenguaje corporal entre rounds contara la historia real.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'MAIN EVENT SEATTLE', content: 'ADESANYA vs PYFER\nUFC Fight Night | 28 de marzo\nClimate Pledge Arena, Seattle\n\n3 derrotas seguidas vs 3 victorias seguidas\nEl ex campeon pelea por sobrevivir.', color: 'red' },
        { slide_number: 2, title: 'ADESANYA: LOS NUMEROS', content: '#4 del ranking peso medio\n24-5 en su carrera (16 KOs)\n2x campeon del UFC\n5 defensas de titulo\n3.93 golpes sig. por minuto\n80" de envergadura\nPERO: 3 derrotas seguidas\n2 nocauts sufridos en las ultimas 3', color: 'red' },
        { slide_number: 3, title: 'PYFER: BODYBAGZ', content: '#14 del ranking peso medio\n15-3 en su carrera (9 KOs, 4 subs)\n3 victorias seguidas\n60% de finalizacion por nocaut\n83% de precision de takedown\n29 anos, en pleno ascenso\nRompio el record de Ngannou en la maquina de golpeo', color: 'blue' },
        { slide_number: 4, title: 'LA GRAN PREGUNTA', content: 'LA QUIJADA DE ADESANYA\n\nImavov: TKO R2 (Feb 2025)\nDu Plessis: Sub R4 (Ago 2024)\nStrickland: UD (Sep 2023)\nPereira: TKO R5 (Nov 2022)\n\n1 victoria en las ultimas 5 peleas\nEl tiempo paso?\nO el Stylebender sigue vivo?', color: 'gold' },
        { slide_number: 5, title: 'PREDICCION', content: 'ADESANYA por Decision Unanime\n\nConfianza: MEDIA\n52% Adesanya / 45% Pyfer\n\nLa envergadura y la experiencia\ndeben controlar la distancia.\nPero un solo golpe de Pyfer\npuede cambiarlo todo.', color: 'gold' },
      ],
      twitter: [
        { num: '1/6', text: 'Adesanya vs Pyfer sabado en Seattle. El campeon peso medio mas dominante de la ultima decada, con 3 derrotas seguidas, contra el joven noqueador de 29 anos. El analisis completo:' },
        { num: '2/6', text: 'El numero que define esta pelea: 5 PULGADAS. Adesanya tiene 80" de envergadura. Pyfer tiene 75". Si Izzy usa esa ventaja con jab y front kick, Pyfer pasara la noche intentando entrar en rango. La distancia lo es todo.' },
        { num: '3/6', text: 'La otra cara de la moneda: Adesanya fue noqueado/TKO en 2 de sus ultimas 3 peleas. A los 36, la quijada no es la misma. Pyfer tiene 9 KOs en 15 victorias y poder de un solo golpe. Basta UNA entrada limpia.' },
        { num: '4/6', text: 'Detalle del que nadie habla: Pyfer tiene 83% de precision de takedown y 4 sumisiones en su carrera. No es solo un noqueador. Si mezcla takedowns con striking, puede romper el ritmo de Adesanya de una forma nueva.' },
        { num: '5/6', text: 'El problema de Pyfer: nunca ha ganado una pelea que paso del R2 por finalizacion. Contra Hermansson (5 rounds), se canso y perdio. Adesanya ha tenido 7 peleas de 5 rounds en el UFC. Championship rounds = territorio del veterano.' },
        { num: '6/6', text: 'Mi pick: Adesanya por decision, pero con confianza MEDIA. La envergadura, la experiencia y los championship rounds favorecen a Izzy. Pero Pyfer dentro de la distancia en R1-R2 es la apuesta de valor de la cartelera. Una pelea que puede terminar en cualquier segundo.' },
      ],
      video: [
        { time: '0-10s', title: 'Gancho', text: 'Israel Adesanya era el peso medio mas dominante del MMA. Cinco defensas de titulo. Striking de otro planeta. Hoy, tres derrotas seguidas y una pregunta: se acabo? Sabado en Seattle, necesita responder contra Joe Pyfer.' },
        { time: '10-25s', title: 'Contexto', text: 'Adesanya tiene 36 anos, 24-5, y fue noqueado dos veces en sus ultimas tres peleas. La quijada no es la misma. Pyfer tiene 29 anos, 15-3, nueve KOs y esta en ascenso con tres victorias seguidas. La diferencia de envergadura es de 5 pulgadas a favor de Izzy. Pero Pyfer trae poder para compensar.' },
        { time: '25-40s', title: 'Analisis Tecnico', text: 'La clave de la pelea: distancia. Si Adesanya mantiene a Pyfer en la punta con jab y front kick, domina. Mas tecnica, mas experiencia, mejor cardio. Pero si Pyfer cierra la distancia y conecta, la quijada de Adesanya esta vulnerable. Imavov lo probo en febrero. Dos escenarios completamente diferentes dependiendo de quien controla el espacio.' },
        { time: '40-55s', title: 'Championship Rounds', text: 'Aqui esta el factor decisivo: Pyfer nunca ha ganado una pelea que paso del R2 por finalizacion. Contra Hermansson en 5 rounds, se canso y perdio. Adesanya ha tenido siete peleas de 5 rounds en el UFC. Si llega al R4 sin nocaut, Izzy es el gran favorito.' },
        { time: '55-70s', title: 'Prediccion y Valor', text: 'Mi call: Adesanya por decision, confianza media. Pero Pyfer dentro de la distancia en los rounds iniciales es la apuesta de valor. Si crees que la quijada de Izzy esta acabada, Pyfer por KO R1-R2 paga bien. La pelea mas impredecible de la cartelera.' },
      ],
      tiktok: [
        { hook: 'Adesanya con TRES derrotas seguidas. El tipo que era INTOCABLE en peso medio.', body: 'Strickland por decision. Du Plessis por sumision. Imavov por nocaut en R2. Tres formas diferentes de perder. Ahora enfrenta a Joe Pyfer, 29 anos, 9 KOs en 15 peleas, que rompio el record de Ngannou en la maquina de golpeo. La quijada de Adesanya aguanta?', cta: 'Comenta IZZY o PYFER!' },
        { hook: 'CINCO pulgadas. Esa es la diferencia que puede salvar a Adesanya.', body: 'Adesanya tiene 80 pulgadas de envergadura. Pyfer tiene 75. Son 5 pulgadas. Si Izzy usa jab y front kick para mantener distancia, Pyfer NUNCA entra. Pero si Pyfer cierra, basta UN golpe en la mandibula. Dos realidades completamente diferentes.', cta: 'Quien controla la distancia? Comenta!' },
        { hook: 'Pyfer NUNCA ha ganado una pelea que paso del R2 por finalizacion.', body: 'Contra Hermansson en 5 rounds, Pyfer SE CANSO y perdio. Adesanya ha tenido SIETE peleas de 5 rounds en el UFC. Si llega al cuarto round sin nocaut, Izzy domina. Pero Pyfer solo necesita un momento. UN golpe. Y con la quijada de Adesanya cuestionada, ese momento puede llegar en cualquier segundo.', cta: 'Va al nocaut o a la decision? Comenta!' },
      ],
      headlines: [
        'Adesanya vs Pyfer: Renacimiento o Retiro del Stylebender en Seattle?',
        'La Quijada de Adesanya Contra el Poder de Pyfer: La Pelea Que Define una Carrera',
        '5 Pulgadas de Ventaja: Por Que la Envergadura Puede Salvar a Adesanya',
        'De 3 Derrotas Seguidas al Main Event: El Dilema de Israel Adesanya',
        'Pyfer Bodybagz: El Noqueador que Puede Retirar a Adesanya',
        'UFC Seattle: Por Que Pyfer por KO Es la Apuesta de Valor de la Cartelera',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        ...sharedOdds,
        source: 'Promedio de DraftKings y casas de apuestas (marzo 2026)',
      },
      edges: [
        { icon: 'Shield', titulo: 'Ventaja de Envergadura Masiva', stat_headline: '80" VS 75": 5 PULGADAS DE DIFERENCIA', contexto: 'Adesanya tiene una de las envergaduras mas largas del peso medio. Contra un oponente con brazos cortos como Pyfer, esta ventaja permite controlar distancia con jab y front kick de forma eficiente.', implicacao_aposta: 'Favorece a Adesanya por decision y Over en rounds.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Zap', titulo: 'Quijada Comprometida de Adesanya', stat_headline: '2 TKO/KOs SUFRIDOS EN LAS ULTIMAS 3 PELEAS', contexto: 'Adesanya fue finalizado por Pereira (TKO R5) e Imavov (TKO R2). A los 36 anos, la absorcion de impacto disminuye. Contra el poder de un solo golpe de Pyfer, es el mayor factor de riesgo.', implicacao_aposta: 'Favorece a Pyfer dentro de la distancia. Props de KO/TKO Pyfer R1-R2 tienen valor.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Activity', titulo: 'Cardio en 5 Rounds', stat_headline: 'PYFER PERDIO SU UNICA PELEA DE 5 ROUNDS (HERMANSSON)', contexto: 'Pyfer visiblemente se canso en los rounds finales contra Hermansson. Adesanya ha tenido 7 peleas de 5 rounds en el UFC. Si la pelea pasa del R3, la ventaja de cardio y experiencia de Adesanya crece exponencialmente.', implicacao_aposta: 'Over 2.5 rounds favorece significativamente a Adesanya.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Target', titulo: 'Grappling Ofensivo de Pyfer', stat_headline: '83% DE PRECISION DE TAKEDOWN, 4 SUMISIONES EN SU CARRERA', contexto: 'Pyfer no es solo un noqueador. Tiene 4 sumisiones y alta precision de takedowns. Puede mezclar niveles y romper el ritmo de striking de Adesanya de una forma que strikers puros no lograron.', implicacao_aposta: 'Pyfer por sumision es una apuesta de valor oculto.', edge_level: 'moderado', fighter_side: 'fighter2' },
        { icon: 'Clock', titulo: 'Inactividad y Edad de Adesanya', stat_headline: '13 MESES SIN PELEAR, 36 ANOS, VINIENDO DE KO', contexto: 'Combinacion preocupante. Peleadores que vuelven de nocaut despues de inactividad larga a los 36 anos historicamente tienen rendimiento reducido. El timing y los reflejos pueden no ser los mismos.', implicacao_aposta: 'Agrega riesgo a Adesanya como favorito. La linea de -130 puede no reflejar el riesgo real.', edge_level: 'moderado', fighter_side: 'fighter2' },
      ],
      value_picks: [
        { tipo: 'Metodo', pick: 'Pyfer por KO/TKO', odds: '+250 (estimado)', confianca: 'media', edge_vs_mercado: 'Quijada comprometida de Adesanya + poder de Pyfer = probabilidad real mayor que lo que las cuotas sugieren.', raciocinio: 'Si Pyfer gana, la probabilidad de que sea por nocaut en los primeros rounds es altisima. La quijada de Adesanya fue probada y fallo dos veces recientemente. A +250, el retorno compensa el riesgo.' },
        { tipo: 'Over/Under', pick: 'Over 2.5 Rounds', odds: '-140 (estimado)', confianca: 'media', edge_vs_mercado: 'A pesar de los KOs recientes de Adesanya, tiende a comenzar peleas despacio.', raciocinio: 'Adesanya es un counter-striker que necesita tiempo para encontrar el timing. Pyfer, a pesar del poder, puede tardar en cerrar distancia contra la envergadura. Probable que los primeros rounds sean de estudio.' },
        { tipo: 'Duracion', pick: 'No va a decision', odds: '+120 (estimado)', confianca: 'baixa', edge_vs_mercado: 'Adesanya fue finalizado en 2 de sus ultimas 3 peleas. Pyfer finaliza 87% de sus victorias.', raciocinio: 'Historicamente, las peleas de Adesanya iban a decision. Pero la fase actual sugiere que es mas vulnerable a finalizaciones. Con Pyfer trayendo poder y grappling, la chance de finalizacion es mayor de lo que el historico sugiere.' },
      ],
      armadilha: {
        titulo: 'Trampa: Adesanya por KO',
        descricao: 'El ultimo nocaut de Adesanya en el UFC fue contra Alex Pereira en abril de 2023, hace casi tres anos. En las peleas recientes, el poder ofensivo de finalizacion disminuyo visiblemente. Apostar en Adesanya por KO es jugar contra la tendencia reciente. Si Adesanya gana, probablemente sera por decision.',
      },
      disclaimer: 'Analisis estadistico con fines informativos. Apueste con responsabilidad.',
    },
  },
};

// ============================================================
// LOCALE MAP & PAGE COMPONENT
// ============================================================
const analises: Record<string, FullSingleAnalise> = {
  pt: analisePT,
  en: analiseEN,
  fr: analiseFR,
  es: analiseES,
};

export default function Page() {
  const locale = useLocale();
  return <FullAnalysisView analise={analises[locale] || analisePT} />;
}
