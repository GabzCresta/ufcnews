import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'dawson-vs-rebecki',
  evento_id: null,
  slug: 'dawson-vs-rebecki',
  titulo: 'Dawson vs Rebecki: Wrestler vs Polish Striker',
  subtitulo:
    "Dawson rolls in off a R1 KO loss to Manuel Torres in January 2026. Rebecki rolls in off two straight decision losses (Duncan, Klein), both Fight of the Night. American wrestler vs Polish striker. Both have trained at American Top Team. Lines opened Dawson -148.",
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'9"', envergadura: '70"', idade: 31, academia: 'Glory MMA, Lee\'s Summit' },
      fighter2: { altura: '5\'7"', envergadura: '70"', idade: 33, academia: 'Berkut WCA Fight Team, Poland' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decision',
    confidence: 'MEDIUM',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Grant Dawson',
    apelido: 'KGD',
    record: '23-3-1',
    ranking: 'N/R Lightweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Manuel Torres', method: 'KO R1', event: 'UFC 323' },
      { result: 'W', opponent: 'Joe Solecki', method: 'UD', event: 'UFC Fight Night 245' },
      { result: 'W', opponent: 'Rafa Garcia', method: 'UD', event: 'UFC Fight Night 240' },
    ],
  },
  fighter2_info: {
    nome: 'Mateusz Rebecki',
    apelido: '',
    record: '20-4-0',
    ranking: 'N/R Lightweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Ludovit Klein', method: 'UD', event: 'UFC Fight Night 252' },
      { result: 'L', opponent: 'Chris Duncan', method: 'UD', event: 'UFC Fight Night 248' },
      { result: 'W', opponent: 'Myktybek Orolbai', method: 'Split Decision', event: 'UFC 308' },
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
      tagline: 'Wrestler vs Polish Striker',
      tagline_sub: "Dawson is fresh off a R1 KO loss. Rebecki rolls in off two competitive UD losses (FOTN). Both men have trained at American Top Team. Round 1 decides this.",
      fighter1: {
        nome_completo: 'Grant "KGD" Dawson',
        apelido: 'KGD',
        sobrenome: 'Dawson',
        record: '23-3-1',
        ranking: 'N/R Lightweight',
        info_extra: 'Lee\'s Summit, Missouri | Age 31',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/DAWSON_GRANT_L_12-06.png?itok=nBaL9FTJ',
      },
      fighter2: {
        nome_completo: 'Mateusz Rebecki',
        apelido: '',
        sobrenome: 'Rebecki',
        record: '20-4-0',
        ranking: 'N/R Lightweight',
        info_extra: 'Łódź, Poland | Age 33',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-07/REBECKI_MATEUSZ_L_08-02.png?itok=v5OHh52Y',
      },
    },

    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'Dawson Defends Wrestling, Rebecki Hunts the KO',
      insight:
        "Dawson is the American wrestler (23-3-1, 11-2-1 UFC) with the classic top-control-and-cards profile. Rolls in off a R1 KO loss to Manuel Torres in January 2026 that snapped a 3-fight win streak (Solecki, Garcia, Ferreira) — chin red flag at 31. Rebecki is the Polish striker (20-4, 4-3 UFC) with two recent Fight of the Night bonuses in losses (Duncan UD, Klein UD), both competitive. Real KO power (45% career KO/TKO finish rate) but couldn't finish in his last two fights. Both have trained at American Top Team at some point — they know each other's game plans. Market opened Dawson -148 — moderate favorite via the wrestling-heavy profile.",
    },

    momento_atual: {
      fighter1: {
        nome: 'Grant Dawson', color: 'red', momentum_score: 5, momentum_label: 'Rebuilding', momentum_trend: 'descending',
        momentum_note: 'Coming off a R1 KO loss to Manuel Torres at UFC 323 (January 2026), snapping a 3-fight win streak (Solecki UD, Garcia UD, Ferreira UD). Wrestling-heavy with a card-running profile.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Manuel Torres', result: 'L', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'R1 KO from a Mexican striker.' },
          { date: 'Jul 2025', opponent: 'Joe Solecki', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'Wrestling-heavy UD.' },
          { date: 'Mar 2025', opponent: 'Rafa Garcia', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD over 3 rounds.' },
          { date: 'Oct 2024', opponent: 'Diego Ferreira', result: 'W', method: 'UD', opponent_rank: 'Top 15 Lightweight', quality_score: 3, quality_label: 'Good', note: 'UD over a top-15 veteran.' },
          { date: 'Jul 2024', opponent: 'Bobby King Green', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD over 3 rounds at UFC 300.' },
        ],
      },
      fighter2: {
        nome: 'Mateusz Rebecki', color: 'blue', momentum_score: 5, momentum_label: 'Mixed Momentum', momentum_trend: 'descending',
        momentum_note: 'Coming off two straight decision losses (Klein UD May 2025, Duncan UD February 2025), both with Fight of the Night bonuses. Before that, SD over Myktybek Orolbai at UFC 308 (October 2024).',
        recent_fights: [
          { date: 'May 2025', opponent: 'Ludovit Klein', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'Competitive UD, FOTN.' },
          { date: 'Feb 2025', opponent: 'Chris Duncan', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'Competitive UD, FOTN.' },
          { date: 'Oct 2024', opponent: 'Myktybek Orolbai', result: 'W', method: 'Split Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'SD at UFC 308.' },
          { date: 'May 2024', opponent: 'Roosevelt Roberts', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'R2 TKO.' },
          { date: 'Dec 2023', opponent: 'Diego Ferreira', result: 'W', method: 'UD', opponent_rank: 'Top 15 Lightweight', quality_score: 3, quality_label: 'Good', note: 'UD over a veteran.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Dawson', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '3W-2L (last 5)', contra_top5: '0W-0L' },
      fighter2: { nome: 'Rebecki', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '3W-2L (last 5)', contra_top5: '0W-0L' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: "Common opponent: Diego Ferreira. Dawson beat Ferreira via UD in October 2024. Rebecki LOST to Ferreira via R3 TKO in May 2024. Transitivity Dawson > Ferreira > Rebecki. Similar calibre across last 5 but Dawson with a direct edge over the common opponent.",
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 3.5, valueB: 4.5, maxVal: 7, format: 'decimal', note: 'Rebecki volume edge on the feet, striker profile.' },
        { label: 'Striking Accuracy (%)', valueA: 48, valueB: 51, maxVal: 100, format: 'percent', note: 'Even.' },
        { label: 'Strikes Absorbed/Min', valueA: 2.5, valueB: 4.0, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Dawson absorbs less via wrestling.' },
        { label: 'Striking Defense (%)', valueA: 55, valueB: 52, maxVal: 100, format: 'percent', note: 'Even.' },
        { label: 'Takedowns per 15 Min', valueA: 4.2, valueB: 1.5, maxVal: 5, format: 'decimal', note: 'Dawson 3x more offensive wrestling.' },
        { label: 'Takedown Defense (%)', valueA: 70, valueB: 60, maxVal: 100, format: 'percent', note: 'Dawson better TDD.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '31 years', fighter2: '33 years', note: 'Dawson 2 years younger.' },
        { label: 'Height', fighter1: '5\'9"', fighter2: '5\'7"', note: 'Dawson 2 inches taller.' },
        { label: 'Reach', fighter1: '70"', fighter2: '70"', note: 'Even.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Same stance.' },
        { label: 'Camp', fighter1: 'Glory MMA', fighter2: 'Berkut WCA', note: 'American camp vs Polish camp.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Wrestling / Takedowns', advantage: 'fighter1', gap: 4, note: 'Dawson 4.2 TD/15min vs 1.5. American identity.' },
        { label: 'Striking / KO Power', advantage: 'fighter2', gap: 3, note: 'Rebecki 45% KO/TKO finish rate. Dawson 17%.' },
        { label: 'Stand-up Volume', advantage: 'fighter2', gap: 2, note: 'Rebecki 4.5 SLpM vs 3.5.' },
        { label: 'Ground Game', advantage: 'fighter1', gap: 3, note: 'Dawson has 6 subs in 23 (26%). Rebecki 6 in 20 (30%) but limited from below.' },
        { label: 'Cardio (3 rounds)', advantage: 'even', gap: 0, note: 'Both consistent across 3 rounds.' },
        { label: 'Chin / Durability', advantage: 'fighter2', gap: 2, note: 'Rebecki only 1 KO loss in 4 defeats. Dawson just ate a recent KO.' },
      ],
      summary: "Dawson dominates on the ground (wrestling, top control). Rebecki dominates standing (volume, KO power). Pivot question: can Dawson get the takedown and hold it?",
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Dawson', ko_tko: { count: 4, percent: 17 }, submission: { count: 6, percent: 26 }, decision: { count: 13, percent: 57 }, total_wins: 23 },
      fighter2: { nome: 'Rebecki', ko_tko: { count: 9, percent: 45 }, submission: { count: 6, percent: 30 }, decision: { count: 5, percent: 25 }, total_wins: 20 },
      insight: "Dawson decisions 57% of his wins (classic wrestler-runs-rounds profile). Rebecki finishes 75% by KO+sub combined. The numbers mirror the styles.",
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Dawson', ko_tko: { count: 3, percent: 100 }, submission: { count: 0, percent: 0 }, decision: { count: 0, percent: 0 }, total_losses: 3 },
      fighter2: { nome: 'Rebecki', ko_tko: { count: 1, percent: 25 }, submission: { count: 1, percent: 25 }, decision: { count: 2, percent: 50 }, total_losses: 4 },
      insight: "All THREE of Dawson's losses came by KO/TKO: Bobby Green KO 0:33 R1 (UFC Fight Night 229), Manuel Torres KO R1 (UFC 323), and his first career loss also by knockout. Crystal-clear pattern: chin exposed against heavy striking, exactly Rebecki's profile (45% finish rate by KO). Rebecki has 4 losses spread out (1 KO, 1 sub, 2 dec), more durable. For value bets: Rebecki by KO is a realistic path given the documented Dawson vulnerability in his last 2 fights.",
    },

    previsao_final: {
      winner_name: 'Grant Dawson',
      winner_side: 'fighter1',
      predicted_method: 'Decision',
      confidence_score: 6,
      confidence_label: 'MEDIUM',
      explanation:
        "The pick is Grant Dawson by dominant decision. Individual analysis converges on three dimensions: stats (4.2 TD/15min vs 1.5), style (wrestling-heavy vs ground-limited striker), and similar calibre but Dawson's card-running profile is more consistent. Rebecki has a real path (41%): real KO power, lands an overhand early in R1. But Dawson has 70% TDD and the profile to set the pace. Conviction 6 because Dawson's recent KO loss (Torres, January 2026) opens a chin question and Rebecki has real KO power.",
      x_factor: { title: 'The First 5 Minutes', description: "If Dawson lands the takedown in R1, he runs 4-5 minutes a round to decision. If Rebecki lands the overhand early, he can capitalize on Dawson's freshly-exposed chin." },
      upset_alert: { title: 'Rebecki Lands the Overhand', description: "Rebecki has 9 KOs in 20 wins (45%). Dawson just ate a R1 KO from Torres. If Rebecki lands an overhand early, the American can drop the way he did against the Mexican. Probability sits around 41%." },
      probabilities: { fighter1: { nome: 'Dawson', percent: 56 }, fighter2: { nome: 'Rebecki', percent: 41 }, draw: 3 },
      conviction: {
        thesis:
          "The thesis is: Grant Dawson wins because, first, he has 4.2 takedowns per 15 minutes and 70% TDD (wrestling-heavy identity). Second, consistent card-running profile (57% of wins via decision) against Rebecki who decisions 25% and rolls in off two straight UD losses. Third, Dawson 2 years younger with proven cardio in recent wins (Solecki, Garcia, Ferreira UDs). Path: takedown in R1, top control 4-5 min/round, 30-27 UD. Falls apart if Rebecki lands an overhand right in the first 90 seconds, capitalizing on the chin recently exposed by the Torres KO.",
        conviction_score: 6,
        conviction_rationale: "Conviction 6 because three dimensions converge but Dawson's chin question (KO loss January 2026) is a real red flag, and Rebecki has genuine KO power. I see Dawson winning if he can get takedowns in the early minutes.",
        conviction_breakers: [
          'Rebecki lands an overhand right in the first 90 seconds',
          "Dawson can't land takedowns in his first attempts",
          "Dawson's chin doesn't hold against a striker on the feet",
          "Dawson's cardio fades in R3",
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 41,
          key_scenario: "Rebecki sprawls Dawson's first takedown attempts, opens distance with volume and timing. Lands an overhand right or hook to the head (his profile, 9 KOs in 20 wins). KO or TKO in rounds 1-2.",
          required_conditions: [
            "Sprawl the first takedown attempts",
            "Land a clean shot in the first 5 minutes",
            "Take advantage of Dawson's recently-exposed chin",
            "Don't give up the back in transition (Dawson's specialty)",
          ],
          historical_precedent: "Dawson ate a R1 KO from Torres at UFC 323. Rebecki has comparable KO power. Direct precedent exists, but Rebecki rolls in off 2 UDs without a recent finish.",
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Grant Dawson', odds: '-148', reasoning: "Real probability 56%, implied at -148 = 60%. No big edge." },
          { type: 'Method', pick: 'Dawson by Decision', odds: '+150 to +180 (estimated)', reasoning: "Dawson 57% of wins via decision. Rebecki only finished once. Real probability 40-45%, real edge at +180." },
          { type: 'Round Group', pick: 'Over 2.5 rounds', odds: '-180 (estimated)', reasoning: "Rebecki only finished once in 24 fights. Dawson 57% decision. More likely the fight reaches the late rounds." },
        ],
        best_bet: { pick: 'Dawson by Decision at +150 to +180', reasoning: "Highest expected edge. Dawson has the cards profile (57%) against Rebecki who rolls in off 2 UDs. Most likely scenario is a 30-27 UD." },
      },
      key_stats: [
        { value: '4.2', label: "Dawson's takedowns per 15 min", sublabel: 'Elite wrestling. 3x more than Rebecki.' },
        { value: '57%', label: "Dawson's wins via decision", sublabel: 'Classic wrestler-decisions-rounds profile.' },
        { value: '45%', label: "Rebecki's career KO/TKO rate", sublabel: '9 KOs in 20 wins. Polish striker.' },
        { value: 'R1', label: "Round Dawson took a recent KO", sublabel: "Manuel Torres KO at UFC 323 (January 2026). Chin question." },
      ],
      odds: {
        fighter1_odds: '-148',
        fighter2_odds: '+124',
        fighter1_name: 'Dawson',
        fighter2_name: 'Rebecki',
        source: 'DraftKings/FanDuel Dawson -148 / Rebecki +124 in April 2026.',
      },
      armadilha: {
        titulo: 'The Trap: Rebecki by KO at -120',
        descricao: "The market will pay heavy on 'Rebecki by KO' based on his 9 career KOs and Dawson's recent KO loss to Torres. But Rebecki rolls in off 2 UD losses without a recent finish, and Dawson is a wrestling-heavy fighter who'll force wrestling early. A specific KO scenario requires Dawson to fail at takedowns AND get exposed standing — both possible, but unlikely to converge.",
      },
    },
  },
};
