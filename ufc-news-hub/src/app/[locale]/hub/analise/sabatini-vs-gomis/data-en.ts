import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'sabatini-vs-gomis',
  evento_id: null,
  slug: 'sabatini-vs-gomis',
  titulo: 'Sabatini vs Gomis: Wrestler vs French Striker',
  subtitulo:
    "Sabatini rolls in off three straight wins with 13 submissions in 21 wins (62% sub rate) and 4.48 takedowns per 15 minutes. Gomis is the French striker with 5 wins in his last 6 UFC fights. Wrestler vs striker, classic stylistic. Lines opened Sabatini -205.",
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'8"', envergadura: '70"', idade: 33, academia: 'Philadelphia BJJ' },
      fighter2: { altura: '5\'11"', envergadura: '72"', idade: 28, academia: 'MMA Factory, Paris' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Submission or Decision',
    confidence: 'MEDIUM-HIGH',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Pat Sabatini',
    apelido: '',
    record: '21-5-0',
    ranking: 'N/R Featherweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Joanderson Brito', method: 'UD', event: 'UFC 318' },
      { result: 'W', opponent: 'Chepe Mariscal', method: 'UD', event: 'UFC Fight Night 244' },
      { result: 'W', opponent: 'Jonathan Pearce', method: 'Sub R2', event: 'UFC Fight Night 234' },
    ],
  },
  fighter2_info: {
    nome: 'William Gomis',
    apelido: '',
    record: '15-2-0',
    ranking: 'N/R Featherweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Robert Ruchala', method: 'UD', event: 'UFC Fight Night 256' },
      { result: 'W', opponent: 'Hyder Amil', method: 'UD', event: 'UFC Fight Night 245' },
      { result: 'L', opponent: 'Joanderson Brito', method: 'UD', event: 'UFC Fight Night 240' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: 'May 9, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Featherweight (145 lbs)',
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
      evento_data: 'May 9, 2026',
      evento_local: 'Prudential Center, Newark, New Jersey',
      categoria_peso: 'Featherweight (145 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Wrestler vs French Striker',
      tagline_sub: "Sabatini 4.48 TD/15min, 62% sub rate, three straight wins. Gomis French striker with 5 wins in 6 UFC. Wrestler vs striker — classic.",
      fighter1: {
        nome_completo: 'Pat Sabatini',
        apelido: '',
        sobrenome: 'Sabatini',
        record: '21-5-0',
        ranking: 'N/R Featherweight',
        info_extra: 'Philadelphia, Pennsylvania | Age 33',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/SABATINI_PAT_L_11-15.png?itok=UyToqZ-o',
      },
      fighter2: {
        nome_completo: 'William Gomis',
        apelido: '',
        sobrenome: 'Gomis',
        record: '15-2-0',
        ranking: 'N/R Featherweight',
        info_extra: 'Paris, France | Age 28',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-09/GOMIS_WILLIAM_L_09-06.png?itok=zDqQAPQ7',
      },
    },

    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'Wrestling Pressure vs Striker Without Proven TDD',
      insight:
        "Sabatini is the American wrestler-grappler (21-5, 62% career sub rate) with 4.48 takedowns per 15 minutes — among the highest in UFC featherweight. Coming off three straight wins (Brito UD, Mariscal UD, Pearce sub R2). Gomis is the French striker (15-2, 5W in 6 UFC) with a technical-boxer profile and good cardio, but TDD that hasn't been tested by an elite wrestler. Stylistically, this is the textbook grappler-vs-striker fight: if Sabatini gets the takedown (and 4.48 TD/15min says he will), the Frenchman ends up on the ground with a clear disadvantage. Market opened Sabatini -205 — and they're right.",
    },

    momento_atual: {
      fighter1: {
        nome: 'Pat Sabatini', color: 'red', momentum_score: 8, momentum_label: 'On Fire', momentum_trend: 'ascending',
        momentum_note: 'Three straight UFC wins (Brito UD, Mariscal UD, Pearce sub R2). 62% career sub rate. 4.48 TD/15min. Trains BJJ in Philadelphia.',
        recent_fights: [
          { date: 'Jul 2025', opponent: 'Joanderson Brito', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'Wrestling-heavy UD.' },
          { date: 'Jul 2024', opponent: 'Chepe Mariscal', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD over 3 rounds.' },
          { date: 'Jan 2024', opponent: 'Jonathan Pearce', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'R2 sub.' },
          { date: 'May 2023', opponent: 'Lucas Almeida', result: 'L', method: 'KO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'R1 KO.' },
          { date: 'Oct 2022', opponent: 'Damon Jackson', result: 'L', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'R1 TKO.' },
        ],
      },
      fighter2: {
        nome: 'William Gomis', color: 'blue', momentum_score: 7, momentum_label: 'On Fire', momentum_trend: 'ascending',
        momentum_note: '5 wins in 6 UFC fights. Coming off a UD over Robert Ruchala at UFC FN 256 (May 2025). Technical French striker, age 28.',
        recent_fights: [
          { date: 'May 2025', opponent: 'Robert Ruchala', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD over 3 rounds.' },
          { date: 'Jul 2024', opponent: 'Hyder Amil', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD over 3 rounds.' },
          { date: 'Mar 2024', opponent: 'Joanderson Brito', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD to Brito.' },
          { date: 'Sep 2023', opponent: 'Yanis Ghemmouri', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'UD over 3 rounds.' },
          { date: 'Jun 2023', opponent: 'Joel Alvarez', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD to the Spaniard.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Sabatini', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '3W-2L (last 5)', contra_top5: '0W-0L' },
      fighter2: { nome: 'Gomis', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '3W-2L (last 5)', contra_top5: '0W-0L' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: 'Common opponent: Joanderson Brito. BOTH beat Brito. Sabatini beat Brito via UD in July 2025, Gomis beat Brito via SD in September 2024. Neutral transitivity. Both proved capable of beating a ranked prospect.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 3.2, valueB: 4.5, maxVal: 7, format: 'decimal', note: 'Gomis volume edge on the feet.' },
        { label: 'Striking Accuracy (%)', valueA: 48, valueB: 52, maxVal: 100, format: 'percent', note: 'Gomis slight edge.' },
        { label: 'Takedowns per 15 Min', valueA: 4.48, valueB: 0.5, maxVal: 5, format: 'decimal', note: 'Sabatini 9x more offensive wrestling.' },
        { label: 'Submissions per 15 Min', valueA: 2.5, valueB: 0.2, maxVal: 3, format: 'decimal', note: 'Sabatini submission specialist.' },
        { label: 'Takedown Defense (%)', valueA: 70, valueB: 58, maxVal: 100, format: 'percent', note: 'Sabatini better TDD.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '33 years', fighter2: '28 years', note: 'Gomis 5 years younger.' },
        { label: 'Height', fighter1: '5\'8"', fighter2: '5\'11"', note: 'Gomis 3 inches taller.' },
        { label: 'Reach', fighter1: '70"', fighter2: '72"', note: 'Gomis +2 inches.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Same stance.' },
        { label: 'Camp', fighter1: 'Philadelphia BJJ', fighter2: 'MMA Factory Paris', note: 'BJJ-heavy camp vs French camp.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Wrestling / Takedowns', advantage: 'fighter1', gap: 5, note: 'Sabatini 4.48 TD/15min vs Gomis 0.5. Identity.' },
        { label: 'Ground Game / BJJ', advantage: 'fighter1', gap: 5, note: '62% sub rate from Sabatini. Gomis without offensive ground game.' },
        { label: 'Striking on the Feet', advantage: 'fighter2', gap: 3, note: 'Gomis 4.5 SLpM vs 3.2. Technical striker.' },
        { label: 'Takedown Defense', advantage: 'fighter1', gap: 2, note: 'Sabatini 70% TDD vs 58%.' },
        { label: 'Cardio (3 rounds)', advantage: 'even', gap: 0, note: 'Both proven across 3 rounds.' },
        { label: 'Range / Physical', advantage: 'fighter2', gap: 2, note: 'Gomis 2 inches reach + 3 inches height.' },
      ],
      summary: 'Sabatini dominates on the ground. Gomis on the feet. For Gomis to win, he needs to defend 70%+ takedowns across 3 rounds.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Sabatini', ko_tko: { count: 2, percent: 10 }, submission: { count: 13, percent: 62 }, decision: { count: 6, percent: 28 }, total_wins: 21 },
      fighter2: { nome: 'Gomis', ko_tko: { count: 7, percent: 47 }, submission: { count: 1, percent: 7 }, decision: { count: 7, percent: 46 }, total_wins: 15 },
      insight: "Sabatini 62% by sub (classic jiu-jitsu profile). Gomis 47% by KO/TKO + 46% by decision (technical French striker with more KO power than the stereotype suggests). Only 1 career sub for the Frenchman.",
    },

    previsao_final: {
      winner_name: 'Pat Sabatini',
      winner_side: 'fighter1',
      predicted_method: 'Submission or Decision',
      confidence_score: 7,
      confidence_label: 'MEDIUM-HIGH',
      explanation:
        "The pick is Sabatini by submission or decision. Individual analysis converges across three dimensions: stats (4.48 TD/15min + 62% sub rate), style (wrestler-grappler vs striker without proven TDD), and momentum (3 straight wins vs 5W-1L recent). Gomis has a real path (28%): technical striker at 28 with volume edge, if he defends takedowns he can win on the feet. But TDD 58% against a wrestler hitting 4.48 TD/15min is rough math. Conviction 7.",
      x_factor: { title: 'The First Takedown Attempt', description: "Sabatini will shoot inside the first 60 seconds. If he lands, he runs 4-5 minutes a round. If Gomis sprawls, the fight opens up on the feet." },
      upset_alert: { title: 'Gomis Defends Everything and Wins on the Feet', description: 'Gomis is a technical French striker with 5W in 6 UFC. If he defends takedowns across 3 rounds, he takes 30-27 cards. Probability 28%.' },
      probabilities: { fighter1: { nome: 'Sabatini', percent: 65 }, fighter2: { nome: 'Gomis', percent: 32 }, draw: 3 },
      conviction: {
        thesis: "The thesis is: Pat Sabatini wins because, first, he has 4.48 takedowns per 15 minutes (among the highest in UFC featherweight) and 70% TDD. Second, 62% career sub rate against a striker without offensive ground game. Third, the Brito common opponent shows slight transitivity edge. Path: takedown in R1, hunt the sub or top control across 3 rounds. Falls apart if Gomis defends 70%+ of takedowns.",
        conviction_score: 7,
        conviction_rationale: "Conviction 7 because three dimensions converge strongly. Not 8 because Gomis is on a hot streak with 5W in 6 UFC and good cardio.",
        conviction_breakers: ['Gomis defends every takedown across 3 rounds', "Sabatini doesn't have cardio for cumulative wrestling", 'Gomis lands a shot in transition', "Sabatini's age 33 weighs against a striker 5 years younger"],
        underdog_path: {
          viable: true, probability_estimate: 28,
          key_scenario: 'Gomis sprawls the takedowns, keeps distance on the feet, stacks volume with 4.5 SLpM. 30-27 cards or KO in R3.',
          required_conditions: ['70%+ TDD across 3 rounds', 'Keep distance on the feet', 'Cardio holds against wrestling pressure', "Don't get caught in scrambles"],
          historical_precedent: 'Gomis lost to Brito (who lost to Sabatini) via UD. Direct precedent against him, but Gomis can learn.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Pat Sabatini', odds: '-205', reasoning: "Real probability 65%, implied at -205 = 67%. No big edge." },
          { type: 'Method', pick: 'Sabatini by Submission', odds: '+150 (estimated)', reasoning: "Sabatini 62% sub rate + 13 subs in 21 wins. Gomis without bottom defense. Real probability 35-40%, real edge at +150." },
          { type: 'Total Rounds', pick: 'Sabatini ITD (inside the distance)', odds: '+200 (estimated)', reasoning: 'Real probability 30-35%, edge at +200.' },
        ],
        best_bet: { pick: 'Sabatini by Submission at +150', reasoning: "Highest expected edge on the fight. Sabatini has a specific finishing profile and Gomis doesn't have the bottom defense." },
      },
      key_stats: [
        { value: '4.48', label: "Sabatini's takedowns per 15 minutes", sublabel: 'Among the highest in UFC featherweight.' },
        { value: '13', label: "Sabatini's submissions in 21 wins", sublabel: '62% sub rate. Submission specialist.' },
        { value: '3', label: "Sabatini's straight wins", sublabel: 'Brito, Mariscal, Pearce.' },
        { value: '58%', label: "Gomis's TDD", sublabel: 'Untested against a 4.48 TD/15min wrestler.' },
      ],
      odds: {
        fighter1_odds: '-205', fighter2_odds: '+170',
        fighter1_name: 'Sabatini', fighter2_name: 'Gomis',
        source: 'DraftKings/FanDuel Sabatini -205 / Gomis +170 in April 2026.',
      },
      armadilha: {
        titulo: 'The Trap: Gomis by Decision',
        descricao: "The market may pay Gomis by decision based on his 5W UFC. But for Gomis to reach a decision, he has to defend Sabatini takedowns across 3 rounds — something a 58% TDD doesn't sustain against 4.48 TD/15min.",
      },
    },
  },
};
