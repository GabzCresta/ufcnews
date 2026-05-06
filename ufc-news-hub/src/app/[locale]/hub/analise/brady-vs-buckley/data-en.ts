import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'brady-vs-buckley',
  evento_id: null,
  slug: 'brady-vs-buckley',
  titulo: 'Brady vs Buckley: The Wrestler-BJJ vs the Power-Puncher',
  subtitulo:
    "Brady is a Renzo Gracie black belt with 6 subs in 18 wins, finished Edwards via RNC R4 (Mar 2025) and Burns 50-45 dominating 17 takedown attempts over 5 rounds (Sept 2024). But he ate a TKO R1 to Morales in Nov 2025 via pure jab-overhand. Buckley is coming off a UD loss to Usman with 12:57 of bottom control absorbed (4 of 13 TDs taken), and before that he shut down Covington's wrestling at 1/8 (12.5%). 4 inches of reach on Brady, 71% career KO/TKO finishes, 4 KOs absorbed.",
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'10"', envergadura: '72"', idade: 33, academia: 'Renzo Gracie Philly' },
      fighter2: { altura: '5\'10"', envergadura: '76"', idade: 32, academia: "Finney's MMA / Murcielago MMA" },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decision or late submission',
    confidence: 'MEDIUM-HIGH',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Sean Brady',
    apelido: '',
    record: '18-2-0',
    ranking: '#6 Welterweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Michael Morales', method: 'TKO R1 (jab+overhand, 3:27)', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Leon Edwards', method: 'Sub R4 (RNC, 1:39)', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Gilbert Burns', method: 'UD (30-27, 29-28, 29-28)', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Joaquin Buckley',
    apelido: 'New Mansa',
    record: '21-7-0',
    ranking: '#9 Welterweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Kamaru Usman', method: 'UD (49-46 x2, 48-47)', event: 'UFC on ESPN 69' },
      { result: 'W', opponent: 'Colby Covington', method: 'TKO R3 (cut + uppercut)', event: 'UFC on ESPN 63' },
      { result: 'W', opponent: 'Stephen Thompson', method: 'KO R3 (right hook + GnP, 2:17)', event: 'UFC 307' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: 'May 9, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Welterweight (170 lbs)',
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
      categoria_peso: 'Welterweight (170 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Wrestler-BJJ vs Power-Puncher',
      tagline_sub: "Brady 87% TDD elite + 6 career subs. Buckley shut down Covington's wrestling at 1/8 (12.5%) but absorbed 12:57 from Usman. Brady ate a TKO R1 from Morales in Nov 2025 via jab-overhand. Chin questions on both sides.",
      fighter1: {
        nome_completo: 'Sean Brady',
        apelido: '',
        sobrenome: 'Brady',
        record: '18-2-0',
        ranking: '#6 Welterweight',
        info_extra: 'Philadelphia, Pennsylvania | Age 33',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/BRADY_SEAN_L_11-15.png?itok=36TkDsO7',
      },
      fighter2: {
        nome_completo: 'Joaquin "New Mansa" Buckley',
        apelido: 'New Mansa',
        sobrenome: 'Buckley',
        record: '21-7-0',
        ranking: '#9 Welterweight',
        info_extra: 'St. Louis, Missouri | Age 32',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/BUCKLEY_JOAQUIN_L_05-11.png?itok=bdTVYbkP',
      },
    },

    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'Brady Has the Wrestling. Buckley Has the Power. The Vulnerabilities Run Crosswise.',
      insight:
        "The lazy read is 'wrestler vs striker, wrestler wins.' The honest read has more nuance. In June 2025, Kamaru Usman landed 4 takedowns on 13 attempts (30.7% TDA) against Buckley at UFC on ESPN 69, with 12:57 of accumulated control and a 137-51 striking differential. Buckley dropped UD 49-46 x2 and 48-47, stuffed Usman 0/6 in R5 but had already lost the fight. That's the evidence Buckley can be dominated by an elite wrestler. BUT in December 2024 (UFC Tampa), Buckley shut down Colby Covington's wrestling at 1/8 (12.5% TDA) — Cov is the top-1 wrestler all-time in UFC welterweight history — and finished TKO R3 via accumulated cut + uppercut. Buckley's TDD isn't binary. On the other side, Brady has 87% elite TDD (UFC.com), Renzo Gracie black belt with 6 subs in 18 wins (3 RNCs, 3 guillotines, 1 kimura, 1 arm triangle), finished Leon Edwards via RNC R4 (March 2025) on 5/7 takedowns, 10:16 of control, and a 221-23 strike differential. But Brady ate a TKO R1 to Michael Morales in November 2025 — a KO loss that was NOT wrestling-driven, it was pure jab-overhand from Morales. And Brady's other UFC loss (Belal Muhammad, UFC 280, October 2022) was also a STRIKING-PRESSURE loss (Belal went 0/5 on takedowns, Brady defended wrestling perfectly, Belal won via volume). Brady is a wrestler-grappler who wins where wrestling is the dominant variable. Brady is vulnerable where he has to accept prolonged exchanges on the feet against pressure-strikers. Buckley is an explosive striker with real KO power and 4 inches of reach. But Brady's wrestling is grades above anything Buckley has faced, and Usman is the ONLY elite wrestler Buckley has fought (and that one ended in a UD).",
      tension: {
        truth_a: "Buckley dropped a UD to Usman but flashed cardio in R5 + a recovery. Before that he shut down Covington's wrestling at 1/8 (12.5%) and KO'd Wonderboy R3 against the fence. 71% career wins by KO/TKO. 4 inches of reach on Brady. Brady just ate a TKO R1 from Morales via pure jab-overhand.",
        truth_b: "Brady is at 87% elite TDD per UFC.com, Renzo Gracie black belt with 6 subs (including an RNC over former champ Edwards in March 2025). Buckley already has 4 KOs absorbed in his career (Holland, Di Chirico, Gosh, Curtis). Brady's wrestling is grades above anything Buckley has faced except Usman. If Brady avoids prolonged exchanges, the fight is his.",
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Sean Brady',
        color: 'red',
        momentum_score: 6,
        momentum_label: 'Recovering',
        momentum_trend: 'descending',
        momentum_note: "Coming off a TKO R1 (3:27) loss to Michael Morales in November 2025 that broke an 8-fight win streak. The KO came on a pure jab + overhand from Morales — NOT wrestling. Before that, he had Edwards (RNC R4, 5/7 TDs, 10:16 control, 221-23 strikes in March 2025) and Burns (UD 30-27/29-28/29-28 with 17 TD attempts, 15+ min control in September 2024). 87% elite TDD per UFC.com, 3.62 TD/15min offensively (50% TD accuracy). Renzo Gracie BJJ black belt under Daniel Gracie in Philly, has trained against Craig Jones (2x ADCC silver, beat in Fury Pro Grappling 3) and Ben Saunders (10th Planet black belt, kimura sub Fury Pro 4). Brady has gone public: \"I'm submitting Joaquin Buckley.\"",
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Michael Morales', result: 'L', method: 'TKO R1 (jab + overhand, 3:27)', opponent_rank: 'Top 5 Welterweight', quality_score: 4, quality_label: 'Very Good', note: 'KO came on PURE STRIKING. Morales technical jab opened the door, dropped Brady with overhand-uppercut. Not wrestling.' },
          { date: 'Mar 2025', opponent: 'Leon Edwards', result: 'W', method: 'Sub R4 (RNC, 1:39)', opponent_rank: 'Former Welterweight Champion', quality_score: 5, quality_label: 'Excellent', note: '5/7 TDs (71%), 10:16 control, 221-23 strikes (9.6:1). Performance of the Night.' },
          { date: 'Sep 2024', opponent: 'Gilbert Burns', result: 'W', method: 'UD (30-27, 29-28, 29-28)', opponent_rank: 'Top 5-7 Welterweight', quality_score: 5, quality_label: 'Excellent', note: '17 TD attempts in 5R (currently 3 rounds), 15+ min control. 5R cardio proven.' },
          { date: 'Dec 2023', opponent: 'Kelvin Gastelum', result: 'W', method: 'Sub R3 (kimura, 1:43)', opponent_rank: 'Top 15 Welterweight', quality_score: 3, quality_label: 'Good', note: 'Finish in R3.' },
          { date: 'Oct 2022', opponent: 'Belal Muhammad', result: 'L', method: 'TKO R2 (4:47)', opponent_rank: 'Top 5 Welterweight', quality_score: 5, quality_label: 'Excellent', note: 'IMPORTANT: this loss was via STRIKING-PRESSURE. Belal went 0/5 on takedowns (Brady defended everything). Belal won on pure volume, technical jab, broke Brady with cumulative pressure.' },
        ],
      },
      fighter2: {
        nome: 'Joaquin Buckley',
        color: 'blue',
        momentum_score: 5,
        momentum_label: 'Stable (with caveats)',
        momentum_trend: 'descending',
        momentum_note: "Coming off a UD loss to Usman (UFC ESPN 69, June 2025): 4/13 TDs absorbed (30.7% TDA), 12:57 of control, 137-51 strike differential, 49-46 x2 and 48-47 (R5 stuffed 0/6 and won the round but already lost the fight). Before that, in December 2024, he shut down Covington's wrestling at 1/8 (12.5%), TKO R3 via cut + uppercut (not a medical stoppage as commonly reported). KO'd Wonderboy R3 with a right hook against the fence (October 2024). 71% career KO/TKO finishes. 4 KOs absorbed (Holland, Di Chirico, Gosh, Curtis). UFC.com TDD 73%. Trains Finney's MMA in St. Louis + Murcielago MMA.",
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Kamaru Usman', result: 'L', method: 'UD (49-46 x2, 48-47)', opponent_rank: 'Former Welterweight Champion', quality_score: 5, quality_label: 'Excellent', note: '4/13 TDs absorbed (30.7% TDA), 12:57 of control. R5 stuffed 0/6, recovered cardio.' },
          { date: 'Dec 2024', opponent: 'Colby Covington', result: 'W', method: 'TKO R3 (cut + uppercut)', opponent_rank: 'Former Top 3 Welterweight', quality_score: 5, quality_label: 'Excellent', note: "CRUCIAL: Buckley shut down Cov's wrestling at 1/8 (12.5%). Top-1 wrestler all-time UFC. Buckley dropped Cov in R1 with a right." },
          { date: 'Oct 2024', opponent: 'Stephen Thompson', result: 'W', method: 'KO R3 (right hook + GnP, 2:17)', opponent_rank: 'Top 10 Welterweight', quality_score: 4, quality_label: 'Very Good', note: "R1-R2 dropped to Wonderboy's karate striking, R3 hunted him against the fence with a Tyson-esque hook." },
          { date: 'May 2024', opponent: 'Nursulton Ruziboev', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD over 3R, cardio held.' },
          { date: 'Mar 2024', opponent: 'Vicente Luque', result: 'W', method: 'TKO R2 (GnP, 3:17)', opponent_rank: 'Top 15 Welterweight', quality_score: 3, quality_label: 'Good', note: 'Luque pulled guard in R2 and Buckley hunted him with top-position GnP.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Brady', media_oponentes: 4, media_oponentes_label: 'Very Good', aproveitamento: '4W-1L (last 5)', contra_top5: '2W-2L' },
      fighter2: { nome: 'Buckley', media_oponentes: 4, media_oponentes_label: 'Very Good', aproveitamento: '4W-1L (last 5)', contra_top5: '2W-1L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: "No recent common opponents. Calibre tied at 4. Brady 2W-2L vs top 5 (Edwards W, Burns W, Morales L, Belal L). Buckley 2W-1L top 5 (Covington W, Thompson W KO, Usman L UD). Important qualitative gap: BOTH of Brady's losses came via STRIKING-PRESSURE (Belal volume jab; Morales jab+overhand). Brady wasn't taken down in either loss. Brady \"only loses where he accepts prolonged exchanges on the feet.\" Buckley's loss was a UD wrestling-controlled by Usman (top-3 elite wrestler). Buckley shut down Covington 1/8 on takedowns (12.5%), proving TDD works against a wrestler of similar calibre — but Brady is a wrestler-grappler with offensive BJJ a grade above Cov.",
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 3.96, valueB: 3.88, maxVal: 7, format: 'decimal', note: 'Even, both controlled profiles.' },
        { label: 'Striking Accuracy (%)', valueA: 55, valueB: 37, maxVal: 100, format: 'percent', note: 'Brady much more accurate.' },
        { label: 'Strikes Absorbed/Min', valueA: 3.05, valueB: 2.93, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Even.' },
        { label: 'Striking Defense (%)', valueA: 58, valueB: 55, maxVal: 100, format: 'percent', note: 'Even.' },
        { label: 'Takedowns per 15 Min', valueA: 3.62, valueB: 0.7, maxVal: 5, format: 'decimal', note: 'Brady 5x more wrestling-heavy than Buckley.' },
        { label: 'Takedown Accuracy (%)', valueA: 50, valueB: 45, maxVal: 100, format: 'percent', note: 'Even.' },
        { label: 'Takedown Defense (%)', valueA: 87, valueB: 73, maxVal: 100, format: 'percent', note: 'Brady ELITE. Buckley 73% (held up vs Cov 1/8 but exposed by Usman 4/13).' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '33', fighter2: '32', note: 'Buckley 1 year younger.' },
        { label: 'Height', fighter1: '5\'10"', fighter2: '5\'10"', note: 'Same height.' },
        { label: 'Reach', fighter1: '72"', fighter2: '76"', note: 'Buckley 4 inches more. Stand-up edge.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Same stance.' },
        { label: 'Camp', fighter1: 'Renzo Gracie Philly', fighter2: "Finney's MMA", note: 'BJJ-heavy camp vs American striking gym.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Wrestling / Takedowns', advantage: 'fighter1', gap: 5, note: 'Brady 3.62 TD/15min vs 0.7 from Buckley. Identity-level edge.' },
        { label: 'Takedown Defense', advantage: 'fighter1', gap: 3, note: 'Brady 87% TDD elite. Buckley 73% but Usman landed 4/13.' },
        { label: 'Ground Game / BJJ', advantage: 'fighter1', gap: 5, note: 'Brady black belt with 6 subs. Buckley 0 subs in 21 wins, no ground offense.' },
        { label: 'Striking on the Feet', advantage: 'fighter2', gap: 3, note: 'Buckley 71% career KO/TKO finish, 4 inches of reach. Plus brevity.' },
        { label: 'Chin / Durability', advantage: 'fighter2', gap: 1, note: 'Brady recent KO (Morales R1). Buckley 4 KOs absorbed career (Holland, Di Chirico, Gosh, Curtis).' },
        { label: 'Cardio / 3 Rounds', advantage: 'fighter1', gap: 1, note: 'Brady went 5R with Burns, 4+ rounds with Edwards before the sub. Buckley went 5R with Usman absorbing damage.' },
      ],
      summary: "Brady dominates where the fight goes to the ground (5x wrestling, BJJ, 87% elite TDD). Buckley only on the feet. To win, Brady takes him down and holds him. To win, Buckley has to do what he didn't do against Usman: defend wrestling.",
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Brady', ko_tko: { count: 3, percent: 17 }, submission: { count: 6, percent: 33 }, decision: { count: 9, percent: 50 }, total_wins: 18 },
      fighter2: { nome: 'Buckley', ko_tko: { count: 15, percent: 71 }, submission: { count: 0, percent: 0 }, decision: { count: 6, percent: 29 }, total_wins: 21 },
      insight: "Brady 50% by decision and 33% by sub (wrestler-grappler profile). Buckley 71% by KO/TKO and ZERO submissions (pure striker, no ground offense). Distributions mirror the polar styles.",
    },

    previsao_final: {
      winner_name: 'Sean Brady',
      winner_side: 'fighter1',
      predicted_method: 'Decision or late submission',
      confidence_score: 7,
      confidence_label: 'MEDIUM-HIGH',
      explanation:
        "The pick is Sean Brady by dominant decision or late submission. Looking fight by fight, the edge appears across four dimensions: stats (Brady 87% elite TDD + 3.62 TD/15min at 50% accuracy vs Buckley TDD 73%), style (wrestler-grappler with 6 subs vs striker with 0 subs and zero offensive ground game), competition level (Brady wrestled Edwards and Burns over 5 rounds and controlled; Buckley got UD-controlled by Usman 12:57), and qualitative intel (Renzo Gracie BJJ + 5/7 TDs over Edwards is grades above what Buckley has faced in a wrestler-grappler). Buckley has a viable path (35%): 4 inches of reach, real KO power, shut down Covington 1/8 on TDs (12.5%) proving TDD can work, and Brady ate a TKO R1 from Morales 6 months ago via jab+overhand. But Brady doesn't have to brawl on the feet: he runs aggressive wrestling and hunts subs in transition. BOTH of Brady's losses came against pressure-strikers (Belal volume; Morales jab+overhand) — neither came against a wrestler. For Buckley to win, he has to replicate the Belal recipe (constant volume striking over 2 rounds) or land a 1-shot KO before Brady closes for wrestling. Conviction 7 because four dimensions converge but not 8 because Brady's chin question is real (2 recent KOs), Buckley has KO power + better TDD than reports suggest (Cov 1/8), and Brady is a wrestler-grappler who has to navigate a round of striking exchanges to get to wrestling.",
      x_factor: {
        title: 'The First Takedown Attempt in R1',
        description: "Brady shoots in the first 60-90s. If he lands, he runs 4-5 min/round and hunts a late sub or 30-27. If Buckley sprawls clean (the way he went 7 of 8 against Cov), Brady has to navigate 5+ minutes on the feet against a striker with 4 inches of reach and real KO power. Brady has 2 recent TKO losses where he accepted prolonged exchanges. R1 will be the read.",
      },
      upset_alert: {
        title: 'Buckley Defends Wrestling Like He Did Against Cov',
        description: "Buckley shut down Covington (top-1 wrestler all-time UFC) at 1/8 (12.5%) in December 2024 and finished TKO R3 via striking pressure and accumulated uppercut. If Buckley defends 6-8 of Brady's 10 attempts, keeps distance with the 4-inch reach edge, and lands heavy combinations (right hand + left hook, 11 KOs in 21 wins via pure striking), he can replicate the Morales/Belal blueprint. Brady is 0-2 against strikers who maintain pressure + power. Probability 35%, real because the Cov 1/8 is precedent for functional TDD + Brady has 2 recent TKO losses to strikers.",
      },
      probabilities: { fighter1: { nome: 'Brady', percent: 60 }, fighter2: { nome: 'Buckley', percent: 37 }, draw: 3 },
      conviction: {
        thesis:
          "The thesis is: Sean Brady wins because, first, he has 87% elite TDD (UFC.com) and 3.62 TD/15min at 50% accuracy, dominating where the fight goes to the ground (Edwards 5/7 TDs with 10:16 control and 221-23 strikes). Second, Brady is a Renzo Gracie black belt with 6 subs in 18 wins (3 RNCs, 3 guillotines, 1 kimura, 1 arm triangle), and Buckley has ZERO submissions in 21 wins with no offensive ground game. Third, Brady has already proven 5R cardio against an elite wrestler (Burns UD wrestling-heavy with 17 TD attempts), while the only time Buckley faced an elite wrestler (Usman) ended in a UD-controlled 12:57. Path: aggressive takedown in R1, top control with sub attempts in transition (Edwards finish style), late finish or 30-27 cards. Falls apart if Buckley defends wrestling the way he did against Covington (1/8) and Brady accepts prolonged exchanges where he was broken by Morales (TKO R1 jab+overhand) and Belal (TKO R2 volume striking pressure).",
        conviction_score: 7,
        conviction_rationale: "Conviction 7 because four dimensions converge (elite TDD stats, direct exposure of Buckley by Usman, offensive BJJ a grade above, similar calibre). Not 8 because BOTH of Brady's losses came against pressure-strikers (not a wrestler), Buckley shut down Cov 1/8 proving TDD works against an elite wrestler when striking pressure is constant, and Brady has 2 recent KO losses that open a real chin question. Not 6 because Brady's wrestling + BJJ is a grade above anything Buckley has faced except Usman, and the gameplan clearly is NOT to brawl.",
        conviction_breakers: [
          'Brady accepts prolonged exchanges like he did vs Morales (TKO R1) and Belal (TKO R2)',
          'Buckley defends wrestling with sprawl + bodylock the way he did with Cov 1/8 (12.5%)',
          "Brady's recent chin issues against a power-puncher with 4 inches of reach",
          "Brady's cardio cracks over 3R with cumulative striking pressure",
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 37,
          key_scenario: "Buckley sprawls Brady's first 2-3 takedown attempts (Cov template, 7/8 sprawls). Keeps distance on the feet with the 4-inch reach edge. Brady forces dangerous entries to wrestling repeatedly. Buckley lands a cross or right hook against the fence (his profile, 11 KOs via pure striking). KO/TKO R2-R3 or dominant striking UD.",
          required_conditions: [
            "Defend 6+ of the first 10 takedown attempts (60% TDD in this fight)",
            'Keep distance with the 4-inch reach edge and reverse cage cutting',
            'Land a heavy power shot (right hook/overhand, jab+1-2)',
            "Cardio holds for 15 minutes of repeated pressure without cracking",
          ],
          historical_precedent: "Buckley shut down Covington 1/8 (12.5%) in December 2024 and won TKO R3 — Cov is the top-1 wrestler all-time UFC. Brady is a wrestler-grappler with offensive BJJ (clear edge over Cov), but Buckley proved TDD can hold against an elite wrestler. Plus Brady was broken twice by pressure-strikers recently (Morales 2025, Belal 2022). Buckley's path is the Belal recipe: volume + pressure + capitalize on Brady's recent chin question.",
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Sean Brady', odds: '-200 to -215 (DK/FanDuel Apr 2026)', reasoning: 'Real probability 60%, implied at -200 = 67%. Market pays slightly above the real estimate. No big edge on the ML.' },
          { type: 'Method', pick: 'Brady by Decision', odds: '+150 to +200 (estimated)', reasoning: 'Brady decides 50% of his wins (wrestler-grappler runs rounds). Buckley has never been subbed in 28 fights. The most likely scenario is a UD 30-27 wrestling-heavy. At +180 implied is 36%, real edge.' },
          { type: 'Method', pick: 'Brady by Submission', odds: '+400 to +500 (estimated)', reasoning: 'Brady 33% sub rate, finished Edwards (RNC R4) and Gastelum (kimura) recently. But Buckley has never been finished in 28 fights. Real probability 18-22%. At +450 implied is 18%, slight edge.' },
        ],
        best_bet: { pick: 'Brady by Decision at +180', reasoning: 'Highest expected edge on the fight. Brady cumulative wrestling (3.62 TD/15min + 87% TDD), Buckley already lost a UD to a wrestler (Usman). The most likely scenario is Brady running 30-27 or 29-28 dominant. The ML is too expensive.' },
      },
      key_stats: [
        { value: '87%', label: "Brady's takedown defense per UFC.com", sublabel: 'Elite stat. Above most welterweight wrestlers.' },
        { value: '4 / 13', label: "Takedowns Usman landed against Buckley (UFC ESPN 69)", sublabel: '30.7% TDA, 12:57 of control, 137-51 strikes. Buckley UD-controlled by an elite wrestler.' },
        { value: '1 / 8', label: 'Takedowns Covington landed against Buckley (UFC Tampa 2024)', sublabel: '12.5% TDA. Buckley shut down the top-1 wrestler all-time UFC. TDD CAN work.' },
        { value: '0', label: "Buckley's submissions in 21 wins", sublabel: 'Pure striker with no offensive ground game. Brady has 6 subs.' },
        { value: '2', label: "KOs absorbed by Brady in his 2 UFC losses", sublabel: 'Belal R2 (volume striking) and Morales R1 (jab+overhand). BOTH via pressure-striking, NOT wrestling.' },
      ],
      odds: {
        fighter1_odds: '-200',
        fighter2_odds: '+170',
        fighter1_name: 'Brady',
        fighter2_name: 'Buckley',
        source: 'DraftKings/FanDuel Brady -200 to -215 / Buckley +164 to +170 in April 2026. Polymarket aligned. Market pays Brady as the moderate favorite on the wrestling pedigree.',
      },
      armadilha: {
        titulo: 'The Trap: Buckley by Quick R1 KO',
        descricao: "The market will pay heavy on \"Buckley by KO\" based on his 71% career KO/TKO finish rate and Brady's recent KO loss to Morales. But Brady is a wrestler-grappler who's going to force aggressive wrestling early (3.62 TD/15min, 87% TDD). For Buckley to land a KO he needs to defend wrestling first — which failed against Usman (4/13 absorbed) but worked against Cov (1/8). And even if the fight stays on the feet, the more likely scenario is Brady navigating the early minutes to get to wrestling, not accepting prolonged exchanges. Betting a specific R1 KO ignores how likely Brady is to force wrestling early.",
      },
    },
  },
};
