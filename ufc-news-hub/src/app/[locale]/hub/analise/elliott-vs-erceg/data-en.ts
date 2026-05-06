import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'elliott-vs-erceg',
  evento_id: null,
  slug: 'elliott-vs-erceg',
  titulo: 'Elliott vs Erceg: The Sub Specialist vs The Hometown Volume Striker',
  subtitulo:
    'Tim Elliott (39, all-time UFC flyweight takedown leader) rolls in off a submission win over Asakura. Steve Erceg fights at home in Perth — but his last fight in this same arena was a brutal Round 1 KO loss to Kara-France, and he\'s come out of his last camp asking out loud "was I a fraud all along?" Polymarket sits at Erceg 64%.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'7"', envergadura: '66"', idade: 39, academia: 'NEXT Generation MMA' },
      fighter2: { altura: '5\'8"', envergadura: '68.5"', idade: 30, academia: 'Wilkes MMA Perth' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Decision or late TKO',
    confidence: 'MEDIUM',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Tim Elliott',
    apelido: '',
    record: '22-13-1',
    ranking: '#11 Flyweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Kai Asakura', method: 'Submission R2 (mounted guillotine, 4:39)', event: 'UFC 319 (Aug 2025)' },
      { result: 'W', opponent: 'Sumudaerji', method: 'Submission R1 (arm-triangle, 4:02)', event: 'UFC Vegas 83 (Dec 2023)' },
      { result: 'L', opponent: 'Muhammad Mokaev', method: 'Submission R3 (arm-triangle)', event: 'UFC Fight Night (Oct 2023)' },
    ],
  },
  fighter2_info: {
    nome: 'Steve Erceg',
    apelido: 'Astroboy',
    record: '13-4-0',
    ranking: '#12 Flyweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Ode Osbourne', method: 'Unanimous Decision', event: 'UFC Vegas 109 (Aug 2025)' },
      { result: 'L', opponent: 'Brandon Moreno', method: 'Unanimous Decision (49-46 x3)', event: 'UFC ESPN Mexico (Mar 2025)' },
      { result: 'L', opponent: 'Kai Kara-France', method: 'KO R1 (4:04)', event: 'UFC 305 Perth (Aug 2024)' },
    ],
  },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: 'May 2, 2026',
  evento_local: 'RAC Arena, Perth, Australia',
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
      evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
      evento_data: 'May 2, 2026',
      evento_local: 'RAC Arena, Perth, Australia',
      categoria_peso: 'Flyweight (125 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'The Sub Specialist vs The Hometown Volume',
      tagline_sub: 'Elliott\'s 39, fresh off a submission of Asakura. Erceg\'s home in Perth — but he lost his last fight in this exact building. Real pickem.',
      fighter1: {
        nome_completo: 'Tim Elliott',
        apelido: '',
        sobrenome: 'Elliott',
        record: '22-13-1',
        ranking: '#11 Flyweight',
        info_extra: 'Lee\'s Summit, Missouri | 39 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/ELLIOTT_TIM_L_08-16.png?itok=jxN2XsFq',
      },
      fighter2: {
        nome_completo: 'Steve "Astroboy" Erceg',
        apelido: 'Astroboy',
        sobrenome: 'Erceg',
        record: '13-4-0',
        ranking: '#12 Flyweight',
        info_extra: 'Perth, Western Australia | 30 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/ERCEG_STEVE_L_08-09.png?itok=2_mHXG5N',
      },
    },

    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'Whoever Dictates Where The Fight Happens',
      insight:
        'Erceg is a volume striker (4.37 SLpM) with a 1.16 takedown average and a BJJ black belt. Elliott is a wrestler-grappler (3.73 takedowns per 15, all-time UFC flyweight TD leader) with a signature guillotine. Stand-up means Erceg wins on volume plus the 5-inch reach edge. Elliott on top means his sub game cooks — and Erceg\'s 60% TDD is not elite. The complication: Elliott is 39, broke his leg in round 1 against Asakura and spent nine months recovering, and has been submitted four-plus times in his UFC career. Erceg lost his last UFC Perth fight (Kara-France KO R1) in this exact arena, and he came out of his last camp publicly asking, "was I a fraud all along?"',
      tension: {
        truth_a: 'Elliott is the most dangerous submission specialist in the division, just pulled off an upset at +240 against Asakura, and showed elite cardio (he fought a full fight on a broken leg). 61 career UFC takedowns — division record.',
        truth_b: 'Erceg is nine years younger, has 5 inches of reach, fights at home in Perth, and his BJJ black belt gives him the sub defense he needs. Out-volumes on the feet. Went five rounds with both Pantoja and Moreno without fading.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Tim Elliott', color: 'red', momentum_score: 7, momentum_label: 'Hot', momentum_trend: 'ascending',
        momentum_note: 'Coming off a submission of Kai Asakura (mounted guillotine R2 4:39) as a +240 underdog — he broke his leg in round one and fought the entire fight injured. Performance bonus. Before that: a submission of Sumudaerji (Dec 2023, five-day notice replacement, Performance bonus). Over 600 days of layoff between those fights from the leg injury. He turns 40 in December — age curve is the obvious red flag.',
        recent_fights: [
          { date: 'Aug 2025', opponent: 'Kai Asakura', result: 'W', method: 'Submission R2 (mounted guillotine, 4:39)', opponent_rank: 'Former RIZIN champ', quality_score: 4, quality_label: 'Very Good', note: '+240 underdog. Broke his leg in R1 and finished the fight.' },
          { date: 'Dec 2023', opponent: 'Sumudaerji', result: 'W', method: 'Submission R1 (arm-triangle, 4:02)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Performance bonus. Five-day notice replacement.' },
          { date: 'Oct 2023', opponent: 'Muhammad Mokaev', result: 'L', method: 'Submission R3 (arm-triangle)', opponent_rank: 'Top 10 FW at the time', quality_score: 4, quality_label: 'Very Good', note: 'Mokaev got the Performance bonus.' },
          { date: 'Jun 2023', opponent: 'Victor Altamirano', result: 'W', method: 'Unanimous Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Solid decision.' },
          { date: 'Mar 2022', opponent: 'Tagir Ulanbekov', result: 'W', method: 'Unanimous Decision (29-28 x3)', opponent_rank: 'Prospect', quality_score: 3, quality_label: 'Good', note: 'Controversial decision — 12 of 17 media outlets scored it for Ulanbekov.' },
        ],
      },
      fighter2: {
        nome: 'Steve Erceg', color: 'blue', momentum_score: 5, momentum_label: 'Stable (with caveats)', momentum_trend: 'stable',
        momentum_note: 'Snap-streak fight. Came in off three straight losses (Kara-France KO R1, Pantoja UD title fight, Moreno UD 49-46) before beating Osbourne by decision in August. Got rocked in round 1 of that one before recovering. Confidence shaken — he literally said after the fight, "was I a fraud all along?" Last UFC Perth was a Round 1 KO at the hands of Kara-France in this same arena (UFC 305, August 2024).',
        recent_fights: [
          { date: 'Aug 2025', opponent: 'Ode Osbourne', result: 'W', method: 'Unanimous Decision (29-28 x3)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Snapped a three-fight skid. Got rocked in R1.' },
          { date: 'Mar 2025', opponent: 'Brandon Moreno', result: 'L', method: 'Unanimous Decision (49-46 x3)', opponent_rank: 'Former FW Champion', quality_score: 5, quality_label: 'Excellent', note: 'Five-rounder in Mexico City. Out-struck him 119-95 but lost the cards.' },
          { date: 'Aug 2024', opponent: 'Kai Kara-France', result: 'L', method: 'KO R1 (4:04)', opponent_rank: 'Top 10 FW', quality_score: 4, quality_label: 'Very Good', note: 'UFC 305 Perth. Same building. Overhand left into the cross.' },
          { date: 'May 2024', opponent: 'Alexandre Pantoja', result: 'L', method: 'Unanimous Decision (5R title)', opponent_rank: 'FW Champion', quality_score: 5, quality_label: 'Excellent', note: 'UFC 301. Competitive.' },
          { date: 'Mar 2024', opponent: 'Matt Schnell', result: 'W', method: 'KO R2 (0:26)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'One-punch left hook.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Elliott', media_oponentes: 3, media_oponentes_label: 'Good', aproveitamento: '4W-1L (last 5)', contra_top5: '0W-1L' },
      fighter2: { nome: 'Erceg', media_oponentes: 4, media_oponentes_label: 'Very Good', aproveitamento: '1W-3L (last 5 vs elite)', contra_top5: '0W-2L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'No common opponents. Erceg has faced higher-calibre names recently (Pantoja, Moreno, Kara-France) but lost all three. Elliott beat Asakura but hasn\'t fought a top-five opponent recently.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 3.39, valueB: 4.37, maxVal: 6, format: 'decimal', note: 'Erceg has the volume edge on the feet.' },
        { label: 'Strike Defense (%)', valueA: 56, valueB: 53, maxVal: 100, format: 'percent', note: 'Defense is similar. Erceg absorbs 4.22 SApM — almost as much as he lands.' },
        { label: 'Takedowns per 15 Min', valueA: 3.73, valueB: 1.16, maxVal: 5, format: 'decimal', note: 'Elliott averages 2.5 more takedowns. Career UFC FW record holder (61).' },
        { label: 'Takedown Accuracy (%)', valueA: 47, valueB: 26, maxVal: 100, format: 'percent', note: 'Elliott TD acc 47%. Erceg rarely shoots.' },
        { label: 'Takedown Defense (%)', valueA: 50, valueB: 60, maxVal: 100, format: 'percent', note: 'Erceg TDD at 60% — not elite.' },
        { label: 'Submissions per 15 Min', valueA: 1.5, valueB: 0.6, maxVal: 3, format: 'decimal', note: 'Elliott is a guillotine specialist.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '39', fighter2: '30', note: 'Erceg nine years younger.' },
        { label: 'Height', fighter1: '5\'7"', fighter2: '5\'8"', note: 'Erceg 1 inch taller.' },
        { label: 'Reach', fighter1: '66"', fighter2: '68.5"', note: 'Erceg owns 2.5 inches of reach.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Camp', fighter1: 'NEXT Generation MMA (Missouri)', fighter2: 'Wilkes MMA Perth', note: null },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume Striking', advantage: 'fighter2', gap: 2, note: 'Erceg 4.37 SLpM vs 3.39.' },
        { label: 'Offensive Wrestling', advantage: 'fighter1', gap: 4, note: 'Elliott is the all-time UFC FW takedown leader. Erceg doesn\'t wrestle.' },
        { label: 'Submission Game', advantage: 'fighter1', gap: 3, note: 'Guillotine specialist. Two subs in his last two wins.' },
        { label: 'Submission Defense', advantage: 'fighter2', gap: 1, note: 'Erceg is a BJJ black belt. Elliott has been submitted four-plus times.' },
        { label: 'Cardio (5R)', advantage: 'fighter2', gap: 1, note: 'Erceg has gone five with Pantoja and Moreno. Elliott fought on a broken leg.' },
        { label: 'Age / Durability', advantage: 'fighter2', gap: 3, note: 'Nine-year gap. Erceg\'s recent KO loss is a flag, not chronic.' },
      ],
      summary: 'Elliott controls where the fight happens via wrestling. Erceg wins the stand-up and owns the reach. The fight pivots on who dictates the location.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Elliott', ko_tko: { count: 4, percent: 18 }, submission: { count: 9, percent: 41 }, decision: { count: 9, percent: 41 }, total_wins: 22 },
      fighter2: { nome: 'Erceg', ko_tko: { count: 4, percent: 31 }, submission: { count: 6, percent: 46 }, decision: { count: 3, percent: 23 }, total_wins: 13 },
      insight: 'Elliott is a grappler-decision guy (41% submissions, 41% decisions). Erceg is more balanced career-wise but his recent UFC trend is decisions (3 of his last 4).',
    },

    previsao_final: {
      winner_name: 'Steve Erceg', winner_side: 'fighter2',
      predicted_method: 'Decision or late TKO', confidence_score: 6, confidence_label: 'MEDIUM',
      explanation:
        'The pick is Steve Erceg by decision or late TKO. The edge sits in three dimensions: physical (2.5 inches of reach, 1 inch of height, nine years younger), stats (4.37 SLpM volume edge), and style (volume striker against an aging wrestler whose primary submission threat gets neutralized partially by Erceg\'s BJJ black belt). Elliott\'s path (about 40-45%) is force this to the floor with his elite takedown game, hunt the guillotine or arm-triangle. But Erceg\'s 60% TDD plus his BJJ black belt means he\'s not getting submitted easily. Conviction 6 because the fight is competitive and Elliott has upset history written all over his last result.',
      x_factor: {
        title: 'Returning to the building that KO\'d him',
        description: 'Erceg lost a Round 1 KO to Kara-France in this exact RAC Arena in August 2024. Real scar tissue. The hometown crowd can become pressure instead of fuel. Then again, his "was I a fraud all along?" moment after the Osbourne fight could mean he\'s come back sharper from the reflection.',
      },
      upset_alert: {
        title: 'Elliott drags this to the mat and finds the finish',
        description: 'Elliott has nine career submissions, including subs in his last two wins. 3.73 takedowns per 15 with 47% accuracy. If he hits the clinch, drives the fight to the floor, and finds a guillotine in scrambles, it\'s a wrap. About a 40% shot — and the path is technical and real.',
      },
      probabilities: { fighter1: { nome: 'Elliott', percent: 40 }, fighter2: { nome: 'Erceg', percent: 57 }, draw: 3 },
      conviction: {
        thesis:
          'The thesis: Steve Erceg wins because he\'s nine years younger, owns 2.5 inches of reach, has the volume edge on the feet (4.37 SLpM), and his BJJ black belt neutralizes Elliott\'s primary sub threat. The path: Erceg manages distance with the jab and kicks, defends the early takedowns, and banks volume across three rounds. This collapses if Elliott repeats the clinch entries plus takedowns plus guillotine hunt.',
        conviction_score: 6,
        conviction_rationale: 'Conviction 6 because Erceg\'s path is technical but Elliott is the most dangerous sub specialist in the division and just pulled off a +240 upset. Not a 7 because Erceg getting KO\'d in this exact arena is a real flag.',
        conviction_breakers: [
          'Elliott forces repeated clinches in the first 90 seconds of round 1',
          'Erceg takes the bait to trade in the pocket where reach evaporates',
          'Guillotine or armbar in a scramble',
          'Erceg\'s shaken confidence shows up in tight cards',
        ],
        underdog_path: {
          viable: true, probability_estimate: 40,
          key_scenario: 'Elliott pressures from the opening bell, forces clinch against the cage to neutralize the reach, repeats takedowns. In scrambles he hunts back-take or guillotine. His cardio holds for 15 minutes. Submission win in round 2-3, or a decision if he can keep the volume close.',
          required_conditions: ['Force the clinch before Erceg can find his range', 'TD acc above 50%', 'Find back-take or neck in scrambles', 'Cardio for 15 minutes without fading'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Rounds', pick: 'Over 2.5 Rounds', odds: '-180 to -150', reasoning: 'Erceg went 5R with Pantoja, 5R with Moreno, 3R with Osbourne, 3R with Schnell — four of his last five hit the late rounds or finishes. Elliott\'s last two wins were R1-R2, but via guillotine rather than a power finish. Real probability of clearing 2.5 rounds is roughly 70%.' },
          { type: 'Moneyline', pick: 'Steve Erceg', odds: '-178', reasoning: 'Polymarket sits at 64%. Implied 64%. Marginal edge but aligned with the fight-by-fight read.' },
          { type: 'Longshot', pick: 'Elliott by Submission', odds: '+400 to +600', reasoning: 'Sub specialist with subs in his last two wins. Erceg\'s a BJJ black belt but his 60% TDD is not elite. Real probability 25-30%, pays plenty.' },
          { type: 'Method', pick: 'Erceg by Decision', odds: '+150 to +180', reasoning: 'Volume striking + reach + BJJ defense + tested 5R cardio = decision is the modal scenario. Real probability around 50%.' },
        ],
        best_bet: { pick: 'Over 2.5 Rounds at -180 to -150', reasoning: 'Erceg goes the distance over and over. Elliott at 39 with a leg coming off nine months of recovery isn\'t the explosive finisher anymore. Decision or late TKO is the modal scenario. Most defensible play on the card.' },
      },
      key_stats: [
        { value: '61', label: 'Career UFC takedowns by Elliott (FW record)', sublabel: 'Elite wrestling base.' },
        { value: 'KO R1', label: 'Erceg\'s last UFC Perth fight', sublabel: 'Kara-France in this same arena, August 2024.' },
        { value: '+240', label: 'Elliott\'s underdog odds vs Asakura', sublabel: 'Upset on a broken leg.' },
        { value: '+2.5"', label: 'Erceg\'s reach advantage', sublabel: 'Kills Elliott\'s jab range.' },
      ],
      odds: { fighter1_odds: '+156', fighter2_odds: '-178', fighter1_name: 'Elliott', fighter2_name: 'Erceg', source: 'Polymarket implies 64% Erceg as of April 25, 2026. DraftKings/FanDuel not captured at snapshot.' },
      armadilha: {
        titulo: 'Trap: Elliott by Submission at +400',
        descricao: 'The market pays Elliott by sub at +400 and the public will hammer it on his signature guillotine plus two submissions in his last two wins. The trap: Erceg\'s a BJJ black belt (decent sub defense), his 60% TDD is workable if not elite, and Elliott\'s been submitted four-plus times in his UFC career — meaning his sub game is also exploitable. The longshot is fine as a hedge. Treating it as your main play is the trap. Real edge sits in Over 2.5 rounds or Erceg by decision.',
      },
    },
  },
};
