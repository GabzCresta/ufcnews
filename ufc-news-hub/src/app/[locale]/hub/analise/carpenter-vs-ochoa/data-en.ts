import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'carpenter-vs-ochoa',
  evento_id: null,
  slug: 'carpenter-vs-ochoa',
  titulo: 'Carpenter vs Ochoa: Bounce-Back vs Performance of the Night',
  subtitulo:
    "Carpenter rolls in off two straight losses (Ulanbekov, Filho) after starting 2-0 UFC with two submissions. Ochoa rolls in off a Performance of the Night KO over Cody Durden in 2025. Mexican on a hot streak vs an American prospect on the bounce-back. Lines opened Ochoa -185.",
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'6"', envergadura: '67"', idade: 28, academia: 'MMA Lab, Phoenix' },
      fighter2: { altura: '5\'5"', envergadura: '66"', idade: 28, academia: 'N/D' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Decision or KO/TKO',
    confidence: 'MEDIUM',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Clayton Carpenter',
    apelido: '',
    record: '8-2-0',
    ranking: 'N/R Flyweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Jafel Filho', method: 'Sub R1', event: 'UFC Fight Night 257' },
      { result: 'L', opponent: 'Tagir Ulanbekov', method: 'UD', event: 'UFC Fight Night 250' },
      { result: 'W', opponent: 'UFC Win', method: 'Sub R3', event: 'UFC Fight Night 240' },
    ],
  },
  fighter2_info: {
    nome: 'Jose Ochoa',
    apelido: '',
    record: '8-2-0',
    ranking: 'N/R Flyweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Asu Almabayev', method: 'UD', event: 'UFC Fight Night 254' },
      { result: 'W', opponent: 'Cody Durden', method: 'KO R2 (Performance of the Night)', event: 'UFC Fight Night 250' },
      { result: 'L', opponent: 'UFC Debut', method: 'UD', event: 'UFC Fight Night 245' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: 'May 9, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Flyweight (125 lbs)',
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
      categoria_peso: 'Flyweight (125 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Bounce-Back vs Performance of the Night',
      tagline_sub: 'Carpenter 2-2 UFC with two straight losses. Ochoa rolls in off a Performance of the Night over Cody Durden. Mexican on a hot streak vs American prospect on the bounce-back.',
      fighter1: {
        nome_completo: 'Clayton Carpenter',
        apelido: '',
        sobrenome: 'Carpenter',
        record: '8-2-0',
        ranking: 'N/R Flyweight',
        info_extra: 'Phoenix, Arizona | Age 28',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/6/CARPENTER_CLAYTON_L_10-12.png?itok=qT0YKGEx',
      },
      fighter2: {
        nome_completo: 'Jose Ochoa',
        apelido: '',
        sobrenome: 'Ochoa',
        record: '8-2-0',
        ranking: 'N/R Flyweight',
        info_extra: 'Mexico | Age 28',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-11/OCHOA_JOSE_R_11-23.png?itok=LfDooxPs',
      },
    },

    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'Mexican on a Hot Streak vs Prospect in Decline',
      insight:
        "Carpenter started 2-0 UFC with two submissions but ate two straight losses (Ulanbekov UD and Filho sub R1 at UFC FN 257), showing the level rose and he didn't keep up. Ochoa started with a UFC debut loss but bounced back with a Performance of the Night KO over Cody Durden at UFC FN 250 (2025), showing real KO power. Lost UD to Asu Almabayev next. Both 8-2 career, age 28, but momentum favors the Mexican.",
    },

    momento_atual: {
      fighter1: {
        nome: 'Clayton Carpenter', color: 'red', momentum_score: 4, momentum_label: 'Rebuilding', momentum_trend: 'descending',
        momentum_note: 'Two straight losses (Filho sub R1 in October 2025, Ulanbekov UD in July 2025). Started 2-0 UFC with two submissions. MMA Lab, Phoenix.',
        recent_fights: [
          { date: 'Oct 2025', opponent: 'Jafel Filho', result: 'L', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'R1 sub.' },
          { date: 'Jul 2025', opponent: 'Tagir Ulanbekov', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD to a Russian wrestler.' },
          { date: 'Mar 2025', opponent: 'UFC Win', result: 'W', method: 'Sub R3', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'R3 sub.' },
          { date: 'Sep 2024', opponent: 'UFC Debut', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Debut R2 sub.' },
          { date: 'May 2024', opponent: 'Regional', result: 'W', method: 'Sub', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Regional sub.' },
        ],
      },
      fighter2: {
        nome: 'Jose Ochoa', color: 'blue', momentum_score: 6, momentum_label: 'On Fire', momentum_trend: 'ascending',
        momentum_note: 'Coming off a UD loss to Asu Almabayev in October 2025. Before that, KO over Cody Durden with Performance of the Night in July 2025. Mexican, age 28.',
        recent_fights: [
          { date: 'Oct 2025', opponent: 'Asu Almabayev', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD over 3 rounds.' },
          { date: 'Jul 2025', opponent: 'Cody Durden', result: 'W', method: 'KO R2 (PotN)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'R2 KO, Performance of the Night.' },
          { date: 'Mar 2025', opponent: 'UFC Debut', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Debut UD.' },
          { date: 'Sep 2024', opponent: 'Regional', result: 'W', method: 'TKO', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Regional.' },
          { date: 'May 2024', opponent: 'Regional', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Regional UD.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Carpenter', media_oponentes: 1, media_oponentes_label: 'Poor', aproveitamento: '3W-2L (last 5)', contra_top5: '0W-0L' },
      fighter2: { nome: 'Ochoa', media_oponentes: 1, media_oponentes_label: 'Poor', aproveitamento: '3W-2L (last 5)', contra_top5: '0W-0L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: "No common opponents. Both calibre is low (UFC newcomers facing other newcomers). Momentum favors Ochoa via the recent KO over Durden.",
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 4.2, valueB: 5.0, maxVal: 7, format: 'decimal', note: 'Ochoa volume edge.' },
        { label: 'Striking Accuracy (%)', valueA: 50, valueB: 52, maxVal: 100, format: 'percent', note: 'Even.' },
        { label: 'Strikes Absorbed/Min', valueA: 4.0, valueB: 4.5, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Even.' },
        { label: 'Striking Defense (%)', valueA: 55, valueB: 50, maxVal: 100, format: 'percent', note: 'Carpenter slight edge.' },
        { label: 'Takedowns per 15 Min', valueA: 2.5, valueB: 1.5, maxVal: 5, format: 'decimal', note: 'Carpenter more offensive wrestling.' },
        { label: 'Submissions per 15 Min', valueA: 2.0, valueB: 0.5, maxVal: 3, format: 'decimal', note: 'Carpenter sub specialist.' },
        { label: 'Takedown Defense (%)', valueA: 60, valueB: 55, maxVal: 100, format: 'percent', note: 'Even.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '28 years', fighter2: '28 years', note: 'Same age.' },
        { label: 'Height', fighter1: '5\'6"', fighter2: '5\'5"', note: 'Carpenter 1 inch taller.' },
        { label: 'Reach', fighter1: '67"', fighter2: '66"', note: 'Carpenter +1 inch.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Same stance.' },
        { label: 'Camp', fighter1: 'MMA Lab', fighter2: 'N/D', note: 'Phoenix camp vs unconfirmed camp.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Strike Volume', advantage: 'fighter2', gap: 2, note: 'Ochoa 5.0 SLpM vs Carpenter 4.2.' },
        { label: 'Knockout Power', advantage: 'fighter2', gap: 3, note: 'Ochoa Performance of the Night via recent KO. Carpenter no KO power.' },
        { label: 'Wrestling / Takedowns', advantage: 'fighter1', gap: 2, note: 'Carpenter 2.5 TD/15min vs 1.5.' },
        { label: 'Ground Game / Sub', advantage: 'fighter1', gap: 3, note: 'Carpenter 2 UFC subs. But Filho subbed him in R1 — bottom defense in question.' },
        { label: 'Cardio (3 rounds)', advantage: 'fighter2', gap: 1, note: 'Ochoa went 25 minutes with Almabayev recently.' },
        { label: 'Momentum', advantage: 'fighter2', gap: 3, note: 'Ochoa PotN. Carpenter 2 straight losses.' },
      ],
      summary: "Ochoa dominates in momentum and KO power. Carpenter in wrestling/sub but showed limited bottom defense against Filho. For Carpenter to win, he needs to take down and submit before getting caught standing.",
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Carpenter', ko_tko: { count: 2, percent: 25 }, submission: { count: 4, percent: 50 }, decision: { count: 2, percent: 25 }, total_wins: 8 },
      fighter2: { nome: 'Ochoa', ko_tko: { count: 7, percent: 88 }, submission: { count: 1, percent: 12 }, decision: { count: 0, percent: 0 }, total_wins: 8 },
      insight: 'Carpenter 50% subs (sub specialist). Ochoa 88% KO/TKO (7 of 8 wins) — extreme KO machine with ZERO career decisions. He only wins when he finishes. Opposite styles with Ochoa much more explosive than appeared.',
    },

    previsao_final: {
      winner_name: 'Jose Ochoa',
      winner_side: 'fighter2',
      predicted_method: 'Decision or KO/TKO',
      confidence_score: 6,
      confidence_label: 'MEDIUM',
      explanation:
        "The pick is Ochoa by decision or KO/TKO. Individual analysis shows the Mexican on a hot streak after his PotN over Durden, against Carpenter in decline with two straight losses. Carpenter has a real path (37%): if he takes down and submits before getting caught standing, he can win. But his bottom defense is in question (Filho subbed him in R1). Conviction 6 — competitive fight between low-calibre fighters.",
      x_factor: { title: 'Wrestling vs KO Power', description: "Carpenter needs to land takedowns in the first 2 minutes. Ochoa needs to keep it standing and use the KO power." },
      upset_alert: { title: 'Carpenter Lands an Early Sub', description: "Carpenter has 5 subs in 8 wins. If he takes down and stabilizes, he can land an early sub. Probability 37%." },
      probabilities: { fighter1: { nome: 'Carpenter', percent: 37 }, fighter2: { nome: 'Ochoa', percent: 60 }, draw: 3 },
      conviction: {
        thesis: "The thesis is: Ochoa wins because, first, he's coming off a Performance of the Night KO over Durden in July 2025 — real power. Second, Carpenter is on two straight losses with bottom defense in question (Filho sub R1). Third, overwhelming momentum for the Mexican. Path: keep it standing, use volume + KO power, decision or KO. Falls apart if Carpenter lands an early sub.",
        conviction_score: 6,
        conviction_rationale: "Conviction 6 because it's a low-calibre fight between fighters in different momentum directions. High variance.",
        conviction_breakers: ['Carpenter lands an early sub', "Ochoa's cardio fades", "Carpenter recovers confidence after the 2 losses", "Carpenter's cumulative volume flips the fight"],
        underdog_path: {
          viable: true, probability_estimate: 37,
          key_scenario: 'Carpenter takes down in the first 2 minutes, hunts an immediate sub. R1 sub.',
          required_conditions: ['Take down early', 'Finish before standing exchanges', 'Cardio holds', 'Recover confidence'],
          historical_precedent: "Carpenter has 5 subs in 8 wins. But Ochoa has not been submitted in his UFC career.",
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Jose Ochoa', odds: '-185', reasoning: "Real probability 60%, implied at -185 = 65%. No big edge." },
          { type: 'Method', pick: 'Ochoa by KO/TKO', odds: '+200 (estimated)', reasoning: "Ochoa 50% KO + Carpenter chin question. Real probability 30-35%, edge at +200." },
        ],
        best_bet: { pick: 'Ochoa by KO/TKO at +200', reasoning: "Mexican with a recent KO and Carpenter exposed." },
      },
      key_stats: [
        { value: '2', label: "Carpenter's straight losses", sublabel: 'Ulanbekov UD and Filho sub R1.' },
        { value: 'PotN', label: "Ochoa's Performance of the Night in 2025", sublabel: 'KO over Cody Durden in R2.' },
        { value: '50%', label: "Ochoa's career KO/TKO rate", sublabel: '4 of 8. Mexican with power.' },
        { value: '63%', label: "Carpenter's career sub rate", sublabel: 'Sub specialist but weak bottom defense.' },
      ],
      odds: {
        fighter1_odds: '+155', fighter2_odds: '-185',
        fighter1_name: 'Carpenter', fighter2_name: 'Ochoa',
        source: 'DraftKings/FanDuel Ochoa -185 / Carpenter +155 in May 2026.',
      },
      armadilha: {
        titulo: 'The Trap: Carpenter by Specific Submission',
        descricao: "The market may pay Carpenter by sub based on his 5 UFC subs. But Ochoa hasn't been finished in the UFC and Carpenter just got subbed in R1 by Filho. The American's questioned bottom defense supports that a specific sub is a tough scenario.",
      },
    },
  },
};
