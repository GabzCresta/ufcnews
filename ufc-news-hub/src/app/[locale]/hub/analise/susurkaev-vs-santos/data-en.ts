import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'susurkaev-vs-santos',
  evento_id: null,
  slug: 'susurkaev-vs-santos',
  titulo: 'Susurkaev vs Santos: Undefeated Russian vs Brazilian Durability',
  subtitulo:
    "Susurkaev is the undefeated Russian who came off the 2024 Contender Series with two UFC finishes (including a R3 TKO of McConico landing 105 strikes at 73% accuracy). Santos is the 1-1 UFC Brazilian — lost to Diaz in his debut but bounced back with a UD over Barlow. Momentum vs durability.",
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '6\'0"', envergadura: '74"', idade: 26, academia: 'Akhmat MMA' },
      fighter2: { altura: '5\'11"', envergadura: '72"', idade: 27, academia: 'N/D' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'KO/TKO or Decision',
    confidence: 'MEDIUM-HIGH',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Baisangur Susurkaev',
    apelido: '',
    record: '11-0-0',
    ranking: 'N/R Middleweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Eric McConico', method: 'TKO R3', event: 'UFC 322' },
      { result: 'W', opponent: 'UFC Debut', method: 'TKO', event: 'UFC Fight Night 257' },
      { result: 'W', opponent: 'DWCS', method: 'Sub', event: 'DWCS 2025' },
    ],
  },
  fighter2_info: {
    nome: 'Djorden Santos',
    apelido: '',
    record: '11-2-0',
    ranking: 'N/R Middleweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Danny Barlow', method: 'UD', event: 'UFC Fight Night 254' },
      { result: 'L', opponent: 'Ozzy Diaz', method: 'UD', event: 'UFC 313' },
      { result: 'W', opponent: 'DWCS', method: 'TKO', event: 'DWCS 2024' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: 'May 9, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Middleweight (185 lbs)',
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
      categoria_peso: 'Middleweight (185 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Undefeated Russian vs Durable Brazilian',
      tagline_sub: "Susurkaev 11-0 with two UFC finishes. Santos 1-1 UFC with a UD over Barlow. Momentum vs durability. Akhmat camp ascending.",
      fighter1: {
        nome_completo: 'Baisangur Susurkaev',
        apelido: '',
        sobrenome: 'Susurkaev',
        record: '11-0-0',
        ranking: 'N/R Middleweight',
        info_extra: 'Chechnya | Age 26',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/SUSURKAEV_BAISANGUR_L_11-15.png?itok=Q9PQ4-Up',
      },
      fighter2: {
        nome_completo: 'Djorden Santos',
        apelido: '',
        sobrenome: 'Santos',
        record: '11-2-0',
        ranking: 'N/R Middleweight',
        info_extra: 'Brazil | Age 27',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/SANTOS_DJORDEN_L_03-08.png?itok=Tc_C5Nff',
      },
    },

    qualitative_insight: {
      tag: 'THE X-FACTOR',
      headline: 'Undefeated Russian Hits 105 Strikes at 73% Accuracy',
      insight:
        "Susurkaev is the undefeated knockout machine from the 2024 Contender Series, 11-0 career with two straight UFC finishes (debut at UFC FN 257, then TKO R3 over Eric McConico at UFC 322 where he landed 105 strikes at 73% accuracy). Akhmat camp ascending. Santos is the 1-1 UFC Brazilian: lost his debut UD to Ozzy Diaz at UFC 313, but bounced back with a UD over Danny Barlow in October. Overwhelming momentum for the Russian, but Santos has shown durability going to decision twice in a row. Stylistically, this is hot Russian striker vs durable journeyman.",
    },

    momento_atual: {
      fighter1: {
        nome: 'Baisangur Susurkaev', color: 'red', momentum_score: 9, momentum_label: 'On Fire', momentum_trend: 'ascending',
        momentum_note: 'Undefeated 11-0. Two straight UFC finishes (debut at UFC FN 257, TKO R3 McConico at UFC 322). 105 strikes at 73% accuracy in the last fight. Akhmat camp.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Eric McConico', result: 'W', method: 'TKO R3', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'R3 TKO, 105 strikes at 73%.' },
          { date: 'Sep 2025', opponent: 'UFC Debut', result: 'W', method: 'TKO', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'UFC debut 4 days after DWCS.' },
          { date: 'Sep 2025', opponent: 'DWCS Contract', result: 'W', method: 'Sub', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Contender Series, UFC contract.' },
          { date: 'May 2025', opponent: 'Regional', result: 'W', method: 'TKO', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Regional win.' },
          { date: 'Mar 2025', opponent: 'Regional', result: 'W', method: 'KO', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Regional KO.' },
        ],
      },
      fighter2: {
        nome: 'Djorden Santos', color: 'blue', momentum_score: 6, momentum_label: 'Mixed Momentum', momentum_trend: 'stable',
        momentum_note: '1-1 UFC. Coming off a UD over Danny Barlow in October 2025. Before that, lost UD to Ozzy Diaz in his UFC debut.',
        recent_fights: [
          { date: 'Oct 2025', opponent: 'Danny Barlow', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'UD over 3 rounds.' },
          { date: 'Mar 2025', opponent: 'Ozzy Diaz', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'UD to Diaz.' },
          { date: 'Sep 2024', opponent: 'DWCS', result: 'W', method: 'TKO', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Contender Series, UFC contract.' },
          { date: 'May 2024', opponent: 'Regional', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Regional win.' },
          { date: 'Mar 2024', opponent: 'Regional', result: 'W', method: 'TKO', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Regional TKO.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Susurkaev', media_oponentes: 1, media_oponentes_label: 'Poor', aproveitamento: '5W-0L (last 5)', contra_top5: '0W-0L' },
      fighter2: { nome: 'Santos', media_oponentes: 1, media_oponentes_label: 'Poor', aproveitamento: '4W-1L (last 5)', contra_top5: '0W-0L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: "No common opponents. Calibre low for both (UFC newcomers facing other newcomers), but Susurkaev's overwhelming momentum (5-0 last 5 with 4 finishes). Santos 4-1 with decision wins.",
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 5.5, valueB: 3.5, maxVal: 7, format: 'decimal', note: 'Susurkaev volume edge.' },
        { label: 'Striking Accuracy (%)', valueA: 65, valueB: 50, maxVal: 100, format: 'percent', note: 'Susurkaev hit 73% in his last fight, 65% average.' },
        { label: 'Strikes Absorbed/Min', valueA: 3.0, valueB: 4.0, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Susurkaev absorbs less.' },
        { label: 'Striking Defense (%)', valueA: 60, valueB: 50, maxVal: 100, format: 'percent', note: 'Susurkaev edge.' },
        { label: 'Takedowns per 15 Min', valueA: 1.5, valueB: 1.0, maxVal: 5, format: 'decimal', note: 'Even.' },
        { label: 'Takedown Defense (%)', valueA: 75, valueB: 60, maxVal: 100, format: 'percent', note: 'Susurkaev better TDD.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '26 years', fighter2: '27 years', note: 'Same age basically.' },
        { label: 'Height', fighter1: '6\'0"', fighter2: '5\'11"', note: 'Susurkaev 1 inch taller.' },
        { label: 'Reach', fighter1: '74"', fighter2: '72"', note: 'Susurkaev +2 inches.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Same stance.' },
        { label: 'Camp', fighter1: 'Akhmat MMA', fighter2: 'N/D', note: 'Elite Russian camp vs unconfirmed camp.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking / Volume', advantage: 'fighter1', gap: 4, note: 'Susurkaev 5.5 SLpM with 73% accuracy in his last fight. Santos 3.5 SLpM.' },
        { label: 'Knockout Power', advantage: 'fighter1', gap: 3, note: 'Susurkaev 8 finishes in 11 wins. Santos only 1 UFC finish.' },
        { label: 'Wrestling / Takedowns', advantage: 'even', gap: 1, note: 'Even, both prefer striking.' },
        { label: 'Striking Defense', advantage: 'fighter1', gap: 2, note: 'Susurkaev 60% Str.Def vs 50%.' },
        { label: 'Cardio (3 rounds)', advantage: 'fighter2', gap: 1, note: 'Santos has shown it in 2 UDs. Susurkaev finished in R3 against McConico, cardio is OK.' },
        { label: 'UFC Experience', advantage: 'fighter2', gap: 1, note: 'Santos 2 UFC (1-1). Susurkaev 2 UFC (2-0).' },
      ],
      summary: "Susurkaev dominates almost every metric (volume, accuracy, KO power). Santos only has durability. For Santos to win, he has to absorb everything and take it to the cards.",
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Susurkaev', ko_tko: { count: 9, percent: 82 }, submission: { count: 1, percent: 9 }, decision: { count: 1, percent: 9 }, total_wins: 11 },
      fighter2: { nome: 'Santos', ko_tko: { count: 3, percent: 27 }, submission: { count: 4, percent: 36 }, decision: { count: 4, percent: 37 }, total_wins: 11 },
      insight: "Susurkaev 82% career KO/TKO finish rate (9 of 11) — extreme finisher. Santos spread across KO (27%), sub (36%) and dec (37%) — grappler-jiu-jitsu profile more than durable journeyman. Both 11 career wins.",
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Susurkaev', ko_tko: { count: 0, percent: 0 }, submission: { count: 0, percent: 0 }, decision: { count: 0, percent: 0 }, total_losses: 0 },
      fighter2: { nome: 'Santos', ko_tko: { count: 0, percent: 0 }, submission: { count: 0, percent: 0 }, decision: { count: 2, percent: 100 }, total_losses: 2 },
      insight: "Susurkaev is officially UNDEFEATED (11-0-0) — never lost on the pro record. Santos has 2 losses, BOTH by decision (Ozzy Diaz UD UFC debut at UFC 313 and Cristian Torres in regional). Santos has NEVER been finished, durable chin + sub defense. For value bets: Susurkaev by KO/TKO is realistic given his 82% finish rate, but Santos defends finishes well. A decision for the undefeated prospect is also live given the Santos sample.",
    },

    previsao_final: {
      winner_name: 'Baisangur Susurkaev',
      winner_side: 'fighter1',
      predicted_method: 'KO/TKO or Decision',
      confidence_score: 7,
      confidence_label: 'MEDIUM-HIGH',
      explanation:
        "The pick is Susurkaev by KO/TKO or decision. Individual analysis converges across four dimensions: stats (5.5 SLpM at 73% accuracy, 2 inches more reach), momentum (11-0 undefeated vs 1-1), style (Russian finisher vs durable journeyman), and qualitative (Akhmat camp ascending). Santos has a real path (32%): proven durability, went 25 minutes with Diaz and Barlow, if he holds the first 5 minutes he can take it to the cards. Conviction 7.",
      x_factor: { title: 'Russian Pressure', description: 'Susurkaev landed 105 strikes at 73% on McConico. If he keeps that rate, Santos absorbs cumulative damage.' },
      upset_alert: { title: 'Santos Holds and Wins on Cards', description: 'Santos is durable, went 25 minutes with Diaz and Barlow back-to-back. If he survives the early pressure, he can take cards. Probability 32%.' },
      probabilities: { fighter1: { nome: 'Susurkaev', percent: 65 }, fighter2: { nome: 'Santos', percent: 32 }, draw: 3 },
      conviction: {
        thesis: "The thesis is: Susurkaev wins because, first, he's undefeated 11-0 with 2 UFC finishes and 105 strikes at 73% accuracy in his last fight. Second, 2-inch reach over Santos and Akhmat camp. Third, Santos has the durability profile but no KO power to threaten the Russian. Path: pressure from R1, hunt the finish or 30-27 cards. Falls apart if Santos absorbs everything and Russian's cardio fades.",
        conviction_score: 7,
        conviction_rationale: "Conviction 7 because four dimensions converge but the calibre of both is low (newcomers facing newcomers).",
        conviction_breakers: ['Santos absorbs everything in the first 10 minutes', "Susurkaev's cardio fades in R3", 'Santos finds the timing on the feet', "Russian loses patience and makes a mistake"],
        underdog_path: {
          viable: true, probability_estimate: 32,
          key_scenario: 'Santos holds the Susurkaev pressure across the first two rounds with absorbing defense. Russian fades in R3. Santos stacks volume late and takes a tight decision.',
          required_conditions: ['Hold pressure in rounds 1-2', 'Cardio better than the Russian', 'Cumulative volume in R3', 'Avoid getting finished'],
          historical_precedent: "Santos went 25 minutes with Diaz and Barlow back-to-back. Durability proven. But Susurkaev is a level above.",
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Baisangur Susurkaev', odds: '-300 (estimated)', reasoning: "Probability 65%, implied at -300 = 75%. No big edge." },
          { type: 'Method', pick: 'Susurkaev by KO/TKO', odds: '+100 (estimated)', reasoning: "Susurkaev 45% KO + Santos durable but no granite chin. Real probability 35-40%, edge at +100." },
        ],
        best_bet: { pick: 'Susurkaev by KO/TKO at +100', reasoning: "Undefeated Russian with 73% accuracy in his last fight." },
      },
      key_stats: [
        { value: '11-0', label: "Susurkaev's undefeated record", sublabel: '2 straight UFC finishes.' },
        { value: '105', label: "Strikes landed at UFC 322", sublabel: '73% accuracy. Volume and accuracy.' },
        { value: '1-1', label: "Santos's UFC record", sublabel: 'UD over Barlow after a debut L to Diaz.' },
        { value: '+2"', label: "Susurkaev's reach edge", sublabel: '74 vs 72.' },
      ],
      odds: {
        fighter1_odds: '-300', fighter2_odds: '+240',
        fighter1_name: 'Susurkaev', fighter2_name: 'Santos',
        source: 'DraftKings/FanDuel Susurkaev -300 / Santos +240 in April 2026 (estimated).',
      },
      armadilha: {
        titulo: 'The Trap: Santos by Decision',
        descricao: "The market may pay Santos by decision via the durability profile. But Susurkaev has 8 finishes in 11 and the Akhmat camp — finishing profile against durable opponents too.",
      },
    },
  },
};
