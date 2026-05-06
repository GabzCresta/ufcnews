import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'miller-vs-gordon',
  evento_id: null,
  slug: 'miller-vs-gordon',
  titulo: 'Miller vs Gordon: The 47th UFC Fight',
  subtitulo:
    "Miller steps in for his 47th UFC fight, all-time leader in the promotion, fighting in his home state of New Jersey. 42 years old with 17 lightweight UFC wins (record) and 13 UFC submissions (2nd most ever). Gordon, 37, ate a recent TKO from Rafa Garcia. Hometown legend vs durable journeyman.",
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'10"', envergadura: '71"', idade: 42, academia: 'AMA Fight Club, New Jersey' },
      fighter2: { altura: '5\'8"', envergadura: '71"', idade: 37, academia: 'Tiger Schulmann\'s MMA' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decision or late submission',
    confidence: 'MEDIUM',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Jim Miller',
    apelido: 'A-10',
    record: '38-19-0',
    ranking: 'N/R Lightweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Chase Hooper', method: 'UD', event: 'UFC 314' },
      { result: 'W', opponent: 'Damon Jackson', method: 'Sub R1 (guillotine)', event: 'UFC 309' },
      { result: 'W', opponent: 'Vinc Pichel', method: 'Sub R1', event: 'UFC Fight Night 244' },
    ],
  },
  fighter2_info: {
    nome: 'Jared Gordon',
    apelido: 'Flash',
    record: '21-8-0',
    ranking: 'N/R Lightweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Rafa Garcia', method: 'TKO R3', event: 'UFC Fight Night 259' },
      { result: 'W', opponent: 'Thiago Moises', method: 'KO R1', event: 'UFC Fight Night 256' },
      { result: 'L', opponent: 'Diego Ferreira', method: 'UD', event: 'UFC Fight Night 247' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: 'May 9, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Lightweight (155 lbs)',
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
      categoria_peso: 'Lightweight (155 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'The 47th UFC Fight',
      tagline_sub: "Miller extends the all-time record. 42, fighting in Newark, 13 UFC submissions (2nd-most ever). Gordon 37 with a recent TKO loss. Legend vs journeyman.",
      fighter1: {
        nome_completo: 'Jim "A-10" Miller',
        apelido: 'A-10',
        sobrenome: 'Miller',
        record: '38-19-0',
        ranking: 'N/R Lightweight',
        info_extra: 'Sparta, New Jersey | Age 42',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-04/MILLER_JIM_L_04-12.png?itok=tti4mGLi',
      },
      fighter2: {
        nome_completo: 'Jared "Flash" Gordon',
        apelido: 'Flash',
        sobrenome: 'Gordon',
        record: '21-8-0',
        ranking: 'N/R Lightweight',
        info_extra: 'Queens, New York | Age 37',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-05/GORDON_JARED_L_05-17.png?itok=7BoiGI72',
      },
    },

    qualitative_insight: {
      tag: 'THE X-FACTOR',
      headline: 'Miller at Home, Legend Extends the Record',
      insight:
        "Miller steps into his 47th UFC fight (all-time promotion record) at home in New Jersey, with a 38-19 career mark (27-18 UFC), 17 UFC lightweight wins (record) and 13 UFC submissions (2nd-most ever, only Charles Oliveira ahead). At 42 he just submitted Damon Jackson via guillotine in R1 at UFC 309 (November 2024). Gordon is the durable journeyman at 37, 21-8 career (9-7 UFC), ate a R3 TKO from Rafa Garcia in September 2025 — but before that came a R1 KO over Thiago Moises. Close in age (5-year gap), Miller has the history, the home crowd, and the BJJ to land one more finish.",
    },

    momento_atual: {
      fighter1: {
        nome: 'Jim Miller', color: 'red', momentum_score: 6, momentum_label: 'Mixed Momentum', momentum_trend: 'stable',
        momentum_note: '47th UFC fight. Coming off a UD loss to Chase Hooper at UFC 314 (April 2025). Before that submitted Damon Jackson via guillotine in R1 at UFC 309 (November 2024). 42 years old, 38-19 career, BJJ black belt. Trains at AMA Fight Club in New Jersey.',
        recent_fights: [
          { date: 'Apr 2025', opponent: 'Chase Hooper', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD at UFC 314.' },
          { date: 'Nov 2024', opponent: 'Damon Jackson', result: 'W', method: 'Sub R1 (guillotine)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'Guillotine in R1.' },
          { date: 'Jul 2024', opponent: 'Vinc Pichel', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'R1 sub.' },
          { date: 'Apr 2024', opponent: 'Bobby King Green', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD to Green at UFC 300.' },
          { date: 'Sep 2023', opponent: 'Gabriel Benitez', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'R1 sub.' },
        ],
      },
      fighter2: {
        nome: 'Jared Gordon', color: 'blue', momentum_score: 5, momentum_label: 'Mixed Momentum', momentum_trend: 'stable',
        momentum_note: 'Coming off a R3 TKO loss to Rafa Garcia at UFC Fight Night 259 (September 2025). Before that, R1 KO over Thiago Moises at UFC FN 256 (May 2025). 21-8 career, 9-7 UFC, durable journeyman.',
        recent_fights: [
          { date: 'Sep 2025', opponent: 'Rafa Garcia', result: 'L', method: 'TKO R3', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'R3 TKO.' },
          { date: 'May 2025', opponent: 'Thiago Moises', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'R1 KO.' },
          { date: 'Mar 2025', opponent: 'Diego Ferreira', result: 'L', method: 'UD', opponent_rank: 'Top 15 Lightweight', quality_score: 3, quality_label: 'Good', note: 'UD over 3 rounds.' },
          { date: 'Oct 2024', opponent: 'Jim Miller', result: 'W', method: 'Split Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'Rematch context.' },
          { date: 'May 2024', opponent: 'Mark Madsen', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD over 3 rounds.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Miller', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '3W-2L (last 5)', contra_top5: '0W-0L' },
      fighter2: { nome: 'Gordon', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '3W-2L (last 5)', contra_top5: '0W-0L' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: "They've fought before in October 2024: Gordon beat Miller via split decision. Rematch in Miller's 47th UFC fight. Calibre similar between them with journeyman lateral profile.",
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 3.4, valueB: 4.0, maxVal: 7, format: 'decimal', note: 'Gordon volume edge on the feet.' },
        { label: 'Striking Accuracy (%)', valueA: 45, valueB: 48, maxVal: 100, format: 'percent', note: 'Even.' },
        { label: 'Strikes Absorbed/Min', valueA: 4.0, valueB: 4.5, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Even, Miller slight edge.' },
        { label: 'Striking Defense (%)', valueA: 55, valueB: 50, maxVal: 100, format: 'percent', note: 'Miller slight edge.' },
        { label: 'Takedowns per 15 Min', valueA: 1.5, valueB: 2.5, maxVal: 5, format: 'decimal', note: 'Gordon more offensive wrestling.' },
        { label: 'Submissions per 15 Min', valueA: 1.8, valueB: 0.5, maxVal: 3, format: 'decimal', note: 'Miller submission specialist.' },
        { label: 'Takedown Defense (%)', valueA: 65, valueB: 55, maxVal: 100, format: 'percent', note: 'Miller slight edge.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '42 years', fighter2: '37 years', note: 'Gordon 5 years younger.' },
        { label: 'Height', fighter1: '5\'10"', fighter2: '5\'8"', note: 'Miller 2 inches taller.' },
        { label: 'Reach', fighter1: '71"', fighter2: '71"', note: 'Even.' },
        { label: 'Stance', fighter1: 'Southpaw', fighter2: 'Orthodox', note: 'Southpaw vs orthodox matchup.' },
        { label: 'Camp', fighter1: 'AMA Fight Club', fighter2: 'Tiger Schulmann\'s', note: 'New Jersey camp vs New York camp.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Ground Game / BJJ', advantage: 'fighter1', gap: 4, note: 'Miller black belt with 13 UFC subs (2nd-most ever).' },
        { label: 'Volume / Stand-up Boxing', advantage: 'fighter2', gap: 1, note: 'Gordon 4.0 SLpM vs Miller 3.4.' },
        { label: 'Fight IQ / Experience', advantage: 'fighter1', gap: 3, note: 'Miller 47th UFC, all-time record. Gordon 17th UFC.' },
        { label: 'Wrestling', advantage: 'fighter2', gap: 1, note: 'Gordon more offensive wrestling.' },
        { label: 'Cardio (3 rounds)', advantage: 'even', gap: 0, note: 'Both proven across 3 rounds.' },
        { label: 'Home / Mental', advantage: 'fighter1', gap: 2, note: 'Miller fighting in Newark, 47th UFC, record to extend.' },
      ],
      summary: "Miller dominates on the ground (BJJ, finishes). Gordon has stand-up volume and offensive wrestling. For Miller to win, he needs to pull guard or force scrambles.",
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Miller', ko_tko: { count: 7, percent: 18 }, submission: { count: 21, percent: 55 }, decision: { count: 10, percent: 27 }, total_wins: 38 },
      fighter2: { nome: 'Gordon', ko_tko: { count: 8, percent: 38 }, submission: { count: 2, percent: 10 }, decision: { count: 11, percent: 52 }, total_wins: 21 },
      insight: "Miller finishes 55% by sub (classic UFC jiu-jitsu profile, 13 UFC subs = 2nd-most ever). Gordon decisions 52% (11 of 21) — durable journeyman profile that takes it to the cards. The numbers back the thesis of Miller hunting the ground.",
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Miller', ko_tko: { count: 2, percent: 11 }, submission: { count: 3, percent: 16 }, decision: { count: 14, percent: 74 }, total_losses: 19 },
      fighter2: { nome: 'Gordon', ko_tko: { count: 5, percent: 62 }, submission: { count: 1, percent: 13 }, decision: { count: 2, percent: 25 }, total_losses: 8 },
      insight: "Miller loses 74% by decision (14 of 19) — legendary durability at 41, a chin that held up 19 years in the UFC. Only 2 KOs absorbed (Hooker, Cerrone) in 38 UFC fights. The 3 subs came from specialists (Oliveira RNC, Chiesa, Diaz). Gordon 62% of losses by KO/TKO (5 of 8): Ferreira TKO R1, Joaquim Silva KO R3, García TKO R3. Plus 1 sub: Dawson RNC R3 (2022). Clear pattern: Gordon is finish-vulnerable (75% of losses by finish), exactly Miller's lane (55% sub finish rate plus vintage BJJ). For value bets: Miller by sub closes the thesis.",
    },

    previsao_final: {
      winner_name: 'Jim Miller',
      winner_side: 'fighter1',
      predicted_method: 'Decision or late submission',
      confidence_score: 5,
      confidence_label: 'MEDIUM',
      explanation:
        "The pick is Jim Miller by decision or late submission. I see this fight being competitive, but I see a clear path where Miller wins because he's at home, he's coming off a recent finish, and he has the BJJ to exploit Gordon's average sub defense. Gordon has a real path (45%): beat Miller in their first fight in October 2024 by SD, has stand-up volume edge, and 5 years of youth. Conviction 5 (MEDIUM) — coinflip between veterans.",
      x_factor: { title: 'Miller at Home, 47th UFC Fight', description: 'Newark is Miller\'s home. 47th UFC to extend the record. Real crowd advantage, scoring close fights matters. Veteran-at-home in a cards fight historically wins.' },
      upset_alert: { title: 'Gordon Wins for the 2nd Time', description: 'Gordon already beat Miller in October 2024 by SD. He has the blueprint, 5 years younger, rolls in off a recent KO over Moises. Repeating is a 45% scenario.' },
      probabilities: { fighter1: { nome: 'Miller', percent: 52 }, fighter2: { nome: 'Gordon', percent: 45 }, draw: 3 },
      conviction: {
        thesis:
          "The thesis is: Jim Miller wins because, first, he's at home in Newark for his 47th UFC fight (all-time record), a narrative that historically helps a hometown veteran in close decisions. Second, he just submitted Damon Jackson via guillotine in R1 at UFC 309 — the BJJ is still finishing at 42. Third, 13 UFC submissions (2nd-most ever) against Gordon who is not an elite grappler. Path: guillotine or D'Arce in scrambles in R1-R2, or 30-27 cards via veteran work. Falls apart if Gordon repeats the first-fight blueprint (stand-up volume, distance) and takes another SD.",
        conviction_score: 5,
        conviction_rationale: "Conviction 5 because it's a coinflip between veterans, with Gordon already taking the first fight. I see Miller winning via home crowd + BJJ + recent finish, but it's a tight one.",
        conviction_breakers: [
          'Gordon repeats the first-fight blueprint (SD October 2024)',
          "Miller's age 42 weighs against a fighter 5 years younger",
          'Gordon keeps distance and prevents scrambles',
          "Miller's cardio fades in R3",
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 45,
          key_scenario: "Gordon keeps distance on the feet, avoids the clinch and scrambles Miller wants. Stacks volume with 4.0 SLpM vs 3.4. 29-28 or 30-27 cards.",
          required_conditions: [
            "Sprawl Miller's takedown attempts",
            "Keep distance on the feet",
            "Cash in on 5 years of youth for cardio",
            "Cumulative volume across 3 rounds",
          ],
          historical_precedent: "Gordon beat Miller in October 2024 by SD. Direct precedent. For Miller to flip the script, he needs something different this time (more aggressive BJJ, home crowd).",
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Jim Miller', odds: '-130 (estimated)', reasoning: "Real probability 52%, implied at -130 = 56.5%. No big edge." },
          { type: 'Method', pick: 'Miller by Submission', odds: '+300 (estimated)', reasoning: "Miller 13 UFC subs (2nd-most ever). Just submitted Jackson via guillotine. Real probability 25-30%, real edge at +300." },
          { type: 'Total Rounds', pick: 'Over 2.5 rounds', odds: '-150 (estimated)', reasoning: "Both durable veterans, 5 of their last 8 combined went the distance." },
        ],
        best_bet: { pick: 'Miller by Submission at +300', reasoning: "Highest expected edge on the fight. Miller has a specific UFC finishing profile (13 subs all-time #2) and Gordon isn't an elite sub-defense fighter." },
      },
      key_stats: [
        { value: '47th', label: "Miller's UFC fight, all-time record", sublabel: 'Extends the promotion record, 38-19 career.' },
        { value: '13', label: "Miller's career UFC submissions", sublabel: '2nd-most ever, only Charles Oliveira ahead.' },
        { value: '17', label: "Miller's career UFC lightweight wins", sublabel: 'Division record.' },
        { value: 'SD', label: 'Result of their first fight', sublabel: 'Gordon won by split decision in October 2024.' },
      ],
      odds: {
        fighter1_odds: '-130',
        fighter2_odds: '+110',
        fighter1_name: 'Miller',
        fighter2_name: 'Gordon',
        source: 'DraftKings/FanDuel Miller -130 / Gordon +110 in April 2026 (estimated). Line near pickem.',
      },
      armadilha: {
        titulo: 'The Trap: Gordon Wins the Same Way',
        descricao: "The market may pay Gordon as 'won before, wins again' based on the 2024 SD. But Miller is at home, comes off a recent finish, and rematches between veterans historically favor the fighter coming in with something to prove (legend at home for the 47th UFC fight).",
      },
    },
  },
};
