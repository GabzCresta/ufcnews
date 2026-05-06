import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'gautier-vs-diaz',
  evento_id: null,
  slug: 'gautier-vs-diaz',
  titulo: 'Gautier vs Diaz: Nine Straight',
  subtitulo:
    "Gautier rolls in off nine straight wins, 4-0 UFC with three R1 KOs. Diaz ate a R1 KO in his UFC debut and sits 1-1 in the division. Same height (6'4\") but Gautier brings 2 extra inches of reach and ten years of youth. Lines opened Gautier -1000.",
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '6\'4"', envergadura: '81"', idade: 24, academia: 'Manchester Top Team' },
      fighter2: { altura: '6\'4"', envergadura: '79"', idade: 34, academia: 'N/D' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'KO/TKO or Decision',
    confidence: 'HIGH',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Ateba Gautier',
    apelido: 'The Storm',
    record: '10-1-0',
    ranking: 'N/R Middleweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Andrey Pulyaev', method: 'UD', event: 'UFC 324' },
      { result: 'W', opponent: 'Tre\'ston Vines', method: 'KO R1', event: 'UFC 320' },
      { result: 'W', opponent: 'Robert Valentin', method: 'TKO R1', event: 'UFC 318' },
    ],
  },
  fighter2_info: {
    nome: 'Ozzy Diaz',
    apelido: '',
    record: '10-3-0',
    ranking: 'N/R Middleweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Djorden Santos', method: 'UD', event: 'UFC 313' },
      { result: 'L', opponent: 'Zhang Mingyang', method: 'TKO R1', event: 'UFC Macau' },
      { result: 'L', opponent: 'Joe Pyfer', method: 'TKO R2', event: 'DWCS 2022' },
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
      tagline: 'The Storm and the Veteran',
      tagline_sub: "Gautier rolls in off nine straight wins, 4-0 UFC with three R1 KOs. Diaz ate a R1 KO in his UFC debut and sits 1-1. 24-year-old Cameroonian with 2 inches of reach over a 34-year-old American. Lines opened -1000.",
      fighter1: {
        nome_completo: 'Ateba "The Storm" Gautier',
        apelido: 'The Storm',
        sobrenome: 'Gautier',
        record: '10-1-0',
        ranking: 'N/R Middleweight',
        info_extra: 'Cameroon | Age 24',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/GAUTIER_ATEBA_L_01-24.png?itok=uIxSBKQu',
      },
      fighter2: {
        nome_completo: 'Ozzy Diaz',
        apelido: '',
        sobrenome: 'Diaz',
        record: '10-3-0',
        ranking: 'N/R Middleweight',
        info_extra: 'Los Angeles, California | Age 34',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/1/DIAZ_OZZY_L_CS.png?itok=fp4JS5bf',
      },
    },

    qualitative_insight: {
      tag: 'THE X-FACTOR',
      headline: 'Gautier Is the Definition of Hot Prospect',
      insight:
        "Gautier rolls in off nine straight wins (10-1 career), 4-0 in the UFC with three R1 KOs (Vines, Valentin, Medina) plus a recent UD over Pulyaev at UFC 324. At 24 he's UFC.com's #2 Newcomer of the Year for 2025 with two Performance of the Night bonuses. He's got 81 inches of reach (one of the longest in the middleweight division), real power, and trains at Manchester Top Team. Diaz, on the other side, is the opposite story: 34 years old, 10-3 career, ate a R1 KO in his UFC debut against Zhang Mingyang in November 2024, then beat Santos by decision in March 2025. Same height (6'4\") but Gautier has 2 inches of reach, ten years of youth, and overwhelming momentum. The market opened Gautier -1000 — and they're right.",
    },

    momento_atual: {
      fighter1: {
        nome: 'Ateba Gautier',
        color: 'red',
        momentum_score: 10,
        momentum_label: 'On Fire',
        momentum_trend: 'ascending',
        momentum_note: "Coming off a UD over Pulyaev at UFC 324 (January 2026), 4-0 UFC with three R1 KOs (Vines KO October 2025, Valentin TKO July 2025, Medina KO March 2025). Nine career wins in a row (10-1). 24-year-old Cameroonian, 81 inches of reach, two Performance of the Night bonuses. UFC.com #2 Newcomer of the Year 2025. Trains at Manchester Top Team.",
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Andrey Pulyaev', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD at UFC 324, first 3-round fight in the UFC.' },
          { date: 'Oct 2025', opponent: 'Tre\'ston Vines', result: 'W', method: 'KO R1 (elbows/punches)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'R1 KO.' },
          { date: 'Jul 2025', opponent: 'Robert Valentin', result: 'W', method: 'TKO R1 (punches)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'R1 TKO.' },
          { date: 'Mar 2025', opponent: 'José Medina', result: 'W', method: 'KO R1 (punches/knee)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'R1 KO, first UFC fight.' },
          { date: 'Sep 2024', opponent: 'Yura Naito', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'R2 TKO at Contender Series, UFC contract.' },
        ],
      },
      fighter2: {
        nome: 'Ozzy Diaz',
        color: 'blue',
        momentum_score: 5,
        momentum_label: 'Mixed Momentum',
        momentum_trend: 'stable',
        momentum_note: "Coming off a UD over Djorden Santos at UFC 313 (March 2025), his first UFC win. Before that, lost his UFC debut to Zhang Mingyang at UFC Macau (November 2024) via R1 TKO. 1-1 in the division. At 34, former LFA Middleweight Champion, American from Los Angeles with Guatemalan parents.",
        recent_fights: [
          { date: 'Mar 2025', opponent: 'Djorden Santos', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'First UFC win, UD over 3 rounds.' },
          { date: 'Nov 2024', opponent: 'Zhang Mingyang', result: 'L', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'UFC debut, R1 KO loss.' },
          { date: 'Jul 2022', opponent: 'Joe Pyfer', result: 'L', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'DWCS R2 TKO loss.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Gautier', media_oponentes: 1, media_oponentes_label: 'Poor', aproveitamento: '5W-0L (last 5)', contra_top5: '0W-0L' },
      fighter2: { nome: 'Diaz', media_oponentes: 1, media_oponentes_label: 'Poor', aproveitamento: '1W-2L (last 3 UFC + DWCS)', contra_top5: '0W-0L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: "No common opponents. Calibre is low for both (UFC newcomers facing other newcomers), but the momentum gap is brutal: Gautier 5W-0L in last 5 with four R1 finishes. Diaz 1W-2L in his last 3 relevant fights (1 UFC W, 1 UFC L, 1 DWCS L).",
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 4.8, valueB: 3.5, maxVal: 7, format: 'decimal', note: 'Gautier volume edge, finisher profile.' },
        { label: 'Striking Accuracy (%)', valueA: 60, valueB: 48, maxVal: 100, format: 'percent', note: 'Gautier more accurate via height and reach.' },
        { label: 'Strikes Absorbed/Min', valueA: 2.8, valueB: 4.2, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Gautier absorbs less via range, Diaz takes trades.' },
        { label: 'Striking Defense (%)', valueA: 60, valueB: 52, maxVal: 100, format: 'percent', note: 'Gautier edge.' },
        { label: 'Takedowns per 15 Min', valueA: 0.5, valueB: 0.3, maxVal: 5, format: 'decimal', note: 'Both strikers.' },
        { label: 'Takedown Defense (%)', valueA: 75, valueB: 60, maxVal: 100, format: 'percent', note: 'Gautier better TDD.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '24 years', fighter2: '34 years', note: 'Gautier 10 years younger. Loud gap.' },
        { label: 'Height', fighter1: '6\'4"', fighter2: '6\'4"', note: 'Same height.' },
        { label: 'Reach', fighter1: '81"', fighter2: '79"', note: 'Gautier +2 inches reach.' },
        { label: 'Stance', fighter1: 'Switch', fighter2: 'Orthodox', note: 'Gautier switches stance.' },
        { label: 'Camp', fighter1: 'Manchester Top Team', fighter2: 'N/D', note: 'Elite European camp vs unconfirmed camp.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Knockout Power', advantage: 'fighter1', gap: 4, note: 'Gautier 80% KO/TKO finish rate (8 of 10), 4 R1 KOs in last fights.' },
        { label: 'Strike Volume', advantage: 'fighter1', gap: 3, note: 'Gautier 4.8 SLpM vs Diaz 3.5. Volume edge.' },
        { label: 'Striking at Range', advantage: 'fighter1', gap: 3, note: 'Gautier 2 inches more reach plus 9 wins with dominant striking.' },
        { label: 'Striking Defense', advantage: 'fighter1', gap: 2, note: 'Gautier 60% Str.Def vs 52% for Diaz. Showed it against Pulyaev in UD.' },
        { label: 'Cardio (3 rounds)', advantage: 'fighter1', gap: 2, note: 'Gautier 24 with fresh cardio. Diaz 34 with thinner fight history.' },
        { label: 'UFC Experience', advantage: 'even', gap: 0, note: 'Both UFC newcomers: Gautier 4-0, Diaz 1-1.' },
      ],
      summary: "Gautier dominates almost every metric (power, volume, age, defense). Diaz only has the experience of his KO loss as 'exposure,' but that's a negative, not a positive. For Diaz to win, he needs Gautier to drop a round and capitalize.",
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Gautier', ko_tko: { count: 8, percent: 80 }, submission: { count: 0, percent: 0 }, decision: { count: 2, percent: 20 }, total_wins: 10 },
      fighter2: { nome: 'Diaz', ko_tko: { count: 5, percent: 50 }, submission: { count: 2, percent: 20 }, decision: { count: 3, percent: 30 }, total_wins: 10 },
      insight: 'Gautier finishes 80% by KO/TKO with zero career submissions (pure striker with finishing instinct). Diaz more spread out (50% KO, 20% sub, 30% dec) but lost his UFC debut by R1 TKO, exposing the exact vulnerability against explosive strikers.',
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Gautier', ko_tko: { count: 0, percent: 0 }, submission: { count: 0, percent: 0 }, decision: { count: 1, percent: 100 }, total_losses: 1 },
      fighter2: { nome: 'Diaz', ko_tko: { count: 3, percent: 100 }, submission: { count: 0, percent: 0 }, decision: { count: 0, percent: 0 }, total_losses: 3 },
      insight: "Gautier has only 1 loss in 11 pro fights (10-1), a split decision to Glenn Williams in July 2022 early in his regional career. Never KO'd, never submitted. Diaz has 3 losses and ALL by KO/TKO (100%): UFC debut to Mingyang Zhang ended elbows + ground-and-pound R1 at 2:25. Pattern is bare and crystal clear: Diaz folds against heavy striking, and Gautier finishes 80% by KO. For value bets: Gautier by KO is the most natural path on the card, with documented vulnerability and matching arsenal.",
    },

    previsao_final: {
      winner_name: 'Ateba Gautier',
      winner_side: 'fighter1',
      predicted_method: 'KO/TKO or Decision',
      confidence_score: 8,
      confidence_label: 'HIGH',
      explanation:
        "The pick is Ateba Gautier by KO/TKO or decision. Looking fight by fight, the edge appears across five dimensions: stats (Gautier 80% KO/TKO finish rate vs Diaz 50% with a debut KO loss), physical (2 inches more reach, 10 years younger), style (explosive striker with 4 R1 KOs vs a fighter who ate a KO from a Chinese striker), momentum (4-0 UFC vs 1-1 UFC with a debut loss), and calibre (same low level but Gautier 9-0 in last 9 vs Diaz 1-2). Diaz has a real path (17%): if he survives the first two rounds, maybe Gautier's cardio fades and the American can take a split decision. But it's an unlikely scenario given Gautier's history (3 R1 KOs in 4 UFC fights). Conviction 8 because all five dimensions converge strongly and the only caveat is Gautier's UFC inexperience (4 fights).",
      x_factor: {
        title: "The First 5 Minutes",
        description: "Gautier finishes in R1 in 75% of his UFC wins (3 of 4). Diaz ate a R1 KO in his UFC debut. The first 5 minutes are decisive: if Gautier lands early, it's a wrap; if Diaz survives, the fight goes to rounds 2-3 where cardio starts mattering.",
      },
      upset_alert: {
        title: 'Diaz Survives and Capitalizes on Cardio',
        description: "Diaz is the veteran at 34 with a 10-3 record. If he holds against Gautier's initial explosion (Gautier showed at UFC 324 he can go 3 rounds, but with more difficulty), the Cameroonian's cardio could fade in rounds 2-3 and Diaz could take a split decision via grinding work. Probability sits around 17% — low because of the momentum gap.",
      },
      probabilities: { fighter1: { nome: 'Gautier', percent: 80 }, fighter2: { nome: 'Diaz', percent: 17 }, draw: 3 },
      conviction: {
        thesis:
          "The thesis is: Ateba Gautier wins because, first, he rolls in off nine straight wins with 4-0 UFC and three R1 KOs (Vines, Valentin, Medina) showing elite finishing instinct against any opponent. Second, he has 10 years of youth over Diaz (24 vs 34) plus 2 inches of reach with the same height — real physical advantages. Third, Diaz ate a R1 KO in his UFC debut against Zhang Mingyang, exposing the exact vulnerability against explosive strikers like Gautier. Path to victory: Gautier lands in the first 90 seconds of R1, KO or TKO between R1 and R2. Falls apart if Diaz survives the early explosion and Gautier's cardio fades in rounds 2-3.",
        conviction_score: 8,
        conviction_rationale: "Conviction 8 because five dimensions converge strongly (power, physical, style, momentum, opponent vulnerability). Not 9-10 because Gautier still has only 4 UFC fights (low calibre) and has never been tested in late rounds against a durable striker. But the gap on every metric is overwhelming.",
        conviction_breakers: [
          'Diaz holds the first 5 minutes without getting KO\'d',
          "Gautier's cardio doesn't sustain 3 full rounds against a veteran",
          'Diaz capitalizes in rounds 2-3 with cumulative volume',
          "Gautier's inexperience in late rounds shows under pressure",
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 17,
          key_scenario: "Diaz survives the first 5 minutes of R1 with a defensive head and clinch. Gautier starts to fade in rounds 2-3. Diaz stacks volume with the jab and capitalizes via superior cardio. Tight split or majority decision on the cards.",
          required_conditions: [
            "Hold the first 5 minutes without eating a KO",
            "Gautier's cardio fades in rounds 2-3",
            "Capitalize with cumulative volume in the second half",
            "Avoid getting hung up in the clinch where the youngster has a bicycle's worth of strength",
          ],
          historical_precedent: "Gautier went 3 rounds with Pulyaev to UD at UFC 324 — his first long fight in the UFC. Showed he can fade, but still won. The Diaz scenario requires him to do what Pulyaev almost did, plus take the cards.",
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Ateba Gautier', odds: '-1000', reasoning: "Real probability 80%, implied at -1000 = 91%. No edge, juice is overwhelming. Risk-free play, minimum return." },
          { type: 'Method', pick: 'Gautier by KO/TKO', odds: '-200 to -250 (estimated)', reasoning: "Gautier 80% career KO/TKO finish rate, three R1 UFC KOs. Diaz ate a debut KO. Real probability 60-65%. At -250 the implied is 71%, slightly overpriced but still aligned." },
          { type: 'Round Group', pick: 'Gautier KO R1', odds: '+150 to +200 (estimated)', reasoning: "Three of Gautier's four UFC finishes came in R1. Diaz rolls in off a R1 KO debut loss. Real probability 35-40%. At +200 the implied is 33%, real edge." },
        ],
        best_bet: { pick: 'Gautier by KO R1 at +150 to +200', reasoning: "Highest expected edge on the fight. Gautier's historical pattern (3 R1 KOs in 4 UFC fights) plus Diaz's vulnerability to explosive strikers (R1 KO debut). Most likely scenario among Gautier wins is a fast finish." },
      },
      key_stats: [
        { value: '9', label: "Gautier's career win streak", sublabel: 'Includes 4-0 UFC with three R1 KOs.' },
        { value: '+10', label: "Years of age advantage for Gautier", sublabel: '24 vs 34. Loud gap at middleweight.' },
        { value: '80%', label: "Gautier's career KO/TKO finish rate", sublabel: '8 of 10 wins. Pure striker with finishing instinct.' },
        { value: '-1000', label: "Gautier's opening odds", sublabel: 'Market paying him as a near-certainty. 91% implied probability.' },
      ],
      odds: {
        fighter1_odds: '-1000',
        fighter2_odds: '+650',
        fighter1_name: 'Gautier',
        fighter2_name: 'Diaz',
        source: 'DraftKings/FanDuel Gautier -1000 / Diaz +650 in April 2026. Polymarket Gautier 82% / Diaz 19%. Market converged on Gautier as overwhelming favorite.',
      },
      armadilha: {
        titulo: 'The Trap: Diaz by Decision',
        descricao: "The market will pay heavy on 'Diaz by decision' based on his 30% career decision rate and the recent UD over Santos at UFC 313. But to reach a decision, Diaz has to survive Gautier in the first 5 minutes — something Mingyang couldn't do against Gautier in a similar style. Diaz doesn't have the ground game to stall Gautier on the mat and doesn't have the boxing to win a striking battle. Betting decision is betting on multiple Gautier failures.",
      },
    },
  },
};
