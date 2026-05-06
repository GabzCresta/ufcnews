import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'kopylov-vs-tulio',
  evento_id: null,
  slug: 'kopylov-vs-tulio',
  titulo: 'Kopylov vs Tulio: Two Strikers on the Bounce-Back',
  subtitulo:
    "Kopylov rolls in off two straight losses (Rodrigues UD November 2025, Costa UD July 2025) with 86% of his career wins by KO/TKO. Tulio rolls in off a R2 KO loss to Christian Duncan in November 2025 — snapping a 10-fight win streak. Russian who's never been KO'd against a Brazilian with 71% KO rate and a freshly-exposed chin.",
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '6\'2"', envergadura: '76"', idade: 33, academia: 'N/D' },
      fighter2: { altura: '6\'1"', envergadura: '74"', idade: 31, academia: 'Chute Boxe' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decision or late KO',
    confidence: 'MEDIUM',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Roman Kopylov',
    apelido: '',
    record: '14-5-0',
    ranking: 'N/R Middleweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Gregory Rodrigues', method: 'UD', event: 'UFC 322' },
      { result: 'L', opponent: 'Paulo Costa', method: 'UD', event: 'UFC 318' },
      { result: 'W', opponent: 'Chris Curtis', method: 'TKO R3 (head kick)', event: 'UFC Fight Night 249' },
    ],
  },
  fighter2_info: {
    nome: 'Marco Tulio',
    apelido: 'Matuto',
    record: '14-2-0',
    ranking: 'N/R Middleweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Christian Leroy Duncan', method: 'KO R2 (3:20)', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Tresean Gore', method: 'TKO R2 (3:16)', event: 'UFC 314' },
      { result: 'W', opponent: 'Ihor Potieria', method: 'KO R1 (3:04)', event: 'UFC Fight Night' },
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
      tagline: 'Two Strikers on the Bounce-Back',
      tagline_sub: "Kopylov rolls in off 2 straight UD losses. Tulio rolls in off a R2 KO from Duncan. Russian has never been KO'd in 19 fights. Brazilian has 10 KOs in 14 wins but a freshly-exposed chin.",
      fighter1: {
        nome_completo: 'Roman Kopylov',
        apelido: '',
        sobrenome: 'Kopylov',
        record: '14-5-0',
        ranking: 'N/R Middleweight',
        info_extra: 'Moscow, Russia | Age 33',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/KOPYLOV_ROMAN_L_11-15.png?itok=vkU7He50',
      },
      fighter2: {
        nome_completo: 'Marco "Matuto" Tulio',
        apelido: 'Matuto',
        sobrenome: 'Tulio',
        record: '14-2-0',
        ranking: 'N/R Middleweight',
        info_extra: 'Brazil | Age 31',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/12/TULIO_MARCO_L_01-11.png?itok=1gXLlcIU',
      },
    },

    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'Granite Chin vs Freshly-Exposed Chin',
      insight:
        "Kopylov rolls in off two straight unanimous decision losses: Gregory Rodrigues at UFC 322 (November 2025, scorecards 30-27 / 30-27 / 29-28) and Paulo Costa at UFC 318 (July 2025, scorecards 30-27 / 30-27 / 29-28 with a knockdown absorbed early). Before that came the head kick TKO over Chris Curtis in January 2025. At 33, with a record of 14-5 and 12 KO/TKO finishes (86%), the Russian has NEVER been knocked out in 19 professional fights. Tulio is the 31-year-old Brazilian who came off the 2024 Contender Series with a 10-fight win streak and 71% KO/TKO finish rate, but ate a R2 KO from Christian Leroy Duncan in November 2025 — first UFC career loss, snapping the streak. Stylistically, this is a technical Russian striker (50% accuracy, 89% TDD per UFC.com) against a more explosive Brazilian striker (59% accuracy, 6.69 SLpM volume edge). The deciding point: Russian granite chin vs Brazilian freshly-exposed chin.",
      tension: {
        truth_a: 'Tulio 71% KO/TKO finish rate, 6.69 SLpM volume edge, 59% striking accuracy, age 31. Before the KO loss, came off a 10-fight win streak with 4 UFC finishes. Youth and real KO power.',
        truth_b: "Kopylov NEVER been KO'd in 19 pro fights (granite chin). 89% UFC.com TDD. Even off 2 UD losses, went 25 minutes with Rodrigues and Costa absorbing damage without falling. Tulio just ate a R2 KO from Duncan, recent chin question.",
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Roman Kopylov', color: 'red', momentum_score: 4, momentum_label: 'Rebuilding', momentum_trend: 'descending',
        momentum_note: "Coming off two straight unanimous decision losses to ranked strikers: Rodrigues at UFC 322 (November 2025) and Costa at UFC 318 (July 2025), both 30-27 / 30-27 / 29-28. Before that, a head kick TKO over Chris Curtis in January 2025. 33-year-old Russian, never been KO'd in 19 pro fights. UFC.com shows 50% accuracy, 89% TDD, 4.59 SLpM, 5.18 SApM.",
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Gregory Rodrigues', result: 'L', method: 'UD (30-27 x2, 29-28)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD at UFC 322. Rodrigues landed cleaner over 3 rounds.' },
          { date: 'Jul 2025', opponent: 'Paulo Costa', result: 'L', method: 'UD (30-27 x2, 29-28)', opponent_rank: 'Former Top 5 Middleweight', quality_score: 4, quality_label: 'Very Good', note: 'UD at UFC 318. Costa took him down early, dominated body kicks.' },
          { date: 'Jan 2025', opponent: 'Chris Curtis', result: 'W', method: 'TKO R3 (head kick, 4:59)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'Head kick TKO in R3, Performance of the Night.' },
          { date: 'Jun 2024', opponent: 'Cesar Almeida', result: 'W', method: 'Split Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'SD over 3 rounds.' },
          { date: 'Feb 2024', opponent: 'Anthony Hernandez', result: 'L', method: 'Sub R2 (RNC 3:23)', opponent_rank: 'Top 15 Middleweight', quality_score: 3, quality_label: 'Good', note: 'R2 sub.' },
        ],
      },
      fighter2: {
        nome: 'Marco Tulio', color: 'blue', momentum_score: 6, momentum_label: 'Mixed Momentum', momentum_trend: 'descending',
        momentum_note: 'Coming off a R2 KO loss to Christian Leroy Duncan in November 2025 — first UFC career loss, snapping a 10-fight win streak. Before that, a TKO over Tresean Gore in April 2025 and a KO over Ihor Potieria in January 2025. 31-year-old Brazilian out of Chute Boxe. UFC.com shows 59% accuracy, 6.69 SLpM (high volume), 27% TD Acc.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Christian Leroy Duncan', result: 'L', method: 'KO R2 (3:20)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'First UFC loss. Snapped a 10-fight win streak.' },
          { date: 'Apr 2025', opponent: 'Tresean Gore', result: 'W', method: 'TKO R2 (3:16)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'TKO at UFC 314.' },
          { date: 'Jan 2025', opponent: 'Ihor Potieria', result: 'W', method: 'KO R1 (3:04)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'R1 KO, UFC debut.' },
          { date: 'Aug 2024', opponent: 'Matthieu Letho Duclos', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Contender Series, UFC contract.' },
          { date: 'Aug 2023', opponent: 'Yousri Belgaroui', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'DWCS S7.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Kopylov', media_oponentes: 3, media_oponentes_label: 'Good', aproveitamento: '2W-3L (last 5)', contra_top5: '0W-1L' },
      fighter2: { nome: 'Tulio', media_oponentes: 1, media_oponentes_label: 'Poor', aproveitamento: '4W-1L (last 5 incl DWCS)', contra_top5: '0W-0L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'No common opponents. Kopylov has faced higher-level opposition recently (Rodrigues, Costa, Hernandez all UFC veterans). Tulio only 3 UFC fights, all against unranked opposition. Kopylov calibre 3, Tulio 1, real gap of 2 points.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 4.59, valueB: 6.69, maxVal: 7, format: 'decimal', note: 'Tulio volume edge, pressure-striker profile.' },
        { label: 'Striking Accuracy (%)', valueA: 50, valueB: 59, maxVal: 100, format: 'percent', note: 'Tulio more accurate.' },
        { label: 'Strikes Absorbed/Min', valueA: 5.18, valueB: 4.5, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Even. Kopylov absorbs more by accepting trades.' },
        { label: 'Striking Defense (%)', valueA: 50, valueB: 50, maxVal: 100, format: 'percent', note: 'Even.' },
        { label: 'Takedowns per 15 Min', valueA: 0.5, valueB: 0.3, maxVal: 5, format: 'decimal', note: 'Both strikers.' },
        { label: 'Takedown Defense (%)', valueA: 89, valueB: 60, maxVal: 100, format: 'percent', note: 'Kopylov 89% TDD elite per UFC.com.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '33 years', fighter2: '31 years', note: 'Tulio 2 years younger.' },
        { label: 'Height', fighter1: '6\'2"', fighter2: '6\'1"', note: 'Kopylov 1 inch taller.' },
        { label: 'Reach', fighter1: '76"', fighter2: '74"', note: 'Kopylov +2 inches.' },
        { label: 'Stance', fighter1: 'N/D', fighter2: 'N/D', note: 'Stance not confirmed in official sources.' },
        { label: 'Camp', fighter1: 'N/D', fighter2: 'Chute Boxe', note: 'Russian vs Brazilian.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume / Pressure', advantage: 'fighter2', gap: 3, note: 'Tulio 6.69 SLpM vs Kopylov 4.59. More aggressive Brazilian.' },
        { label: 'Striking Accuracy', advantage: 'fighter2', gap: 2, note: 'Tulio 59% vs Kopylov 50%.' },
        { label: 'Chin / Durability', advantage: 'fighter1', gap: 3, note: "Kopylov NEVER KO'd in 19 fights. Tulio just ate a R2 KO from Duncan." },
        { label: 'Range / Reach', advantage: 'fighter1', gap: 2, note: 'Kopylov 2 inches more reach.' },
        { label: 'UFC Experience', advantage: 'fighter1', gap: 3, note: 'Kopylov 9 UFC fights (5-4). Tulio only 3 (2-1).' },
        { label: 'Cardio (3 rounds)', advantage: 'fighter1', gap: 2, note: 'Kopylov went 25 minutes with Rodrigues and Costa absorbing damage. Tulio never went 25 minutes against elite.' },
      ],
      summary: 'Kopylov has the granite chin and UFC experience. Tulio has volume and KO power. Pivot question: does the Brazilian\'s recently-exposed chin hold against the Russian\'s technical strikes, or does Tulio\'s pressure expose the veteran\'s declining cardio?',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Kopylov', ko_tko: { count: 12, percent: 86 }, submission: { count: 0, percent: 0 }, decision: { count: 2, percent: 14 }, total_wins: 14 },
      fighter2: { nome: 'Tulio', ko_tko: { count: 10, percent: 71 }, submission: { count: 1, percent: 7 }, decision: { count: 3, percent: 22 }, total_wins: 14 },
      insight: 'Kopylov 86% career KO/TKO (12 of 14), zero subs (technical striker who finishes profile). Tulio 71% KO/TKO (10 of 14), 1 sub (more aggressive striker). Both natural finishers.',
    },

    previsao_final: {
      winner_name: 'Roman Kopylov',
      winner_side: 'fighter1',
      predicted_method: 'Decision or late KO',
      confidence_score: 5,
      confidence_label: 'MEDIUM',
      explanation:
        "The pick is Roman Kopylov by decision or late KO. I see this fight being competitive, but I see a clear path where Kopylov wins because he has a granite chin (NEVER KO'd in 19 pro fights) against a Tulio who just ate a R2 KO from Duncan in November 2025. Plus 2 inches of reach, 9 UFC fights vs 3 for the Brazilian, and a cardio profile tested across 25 minutes against Rodrigues and Costa in his last two. Tulio has a real path (45%): volume edge (6.69 vs 4.59 SLpM), higher accuracy (59% vs 50%), youth and KO power. But to capitalize he has to break a chin that hasn't been broken in 19 fights. Conviction 5 (MEDIUM) because it's a striker fight at middleweight with high variance and Kopylov rolls in off 2 straight losses, declining trend.",
      x_factor: {
        title: "Does Tulio's Chin Hold in R1?",
        description: "Tulio just ate a KO from Duncan in R2. If Kopylov lands a cross or head kick early (his profile, finished Curtis with a head kick), the Brazilian could drop again. If Tulio holds the first 5 minutes with a sprawl + defensive head, his volume edge can stack damage and expose the veteran's cardio.",
      },
      upset_alert: {
        title: "Tulio's Cumulative Volume + Russian Cardio",
        description: 'Tulio 6.69 SLpM vs Kopylov 4.59. Volume way bigger. Brazilian younger (31 vs 33), and Kopylov rolls in off 2 UD losses absorbing damage. If Tulio sustains pressure for 3 rounds and the Russian\'s cardio fades, he can take cards. Probability around 45%.',
      },
      probabilities: { fighter1: { nome: 'Kopylov', percent: 52 }, fighter2: { nome: 'Tulio', percent: 45 }, draw: 3 },
      conviction: {
        thesis:
          "The thesis is: Roman Kopylov wins because, first, he's NEVER been knocked out in 19 pro fights (real granite chin, all 5 losses came via sub or decision). Second, he has 2 inches of reach over Tulio and 89% TDD elite per UFC.com, keeping the fight where he wants. Third, Tulio just ate a R2 KO from Duncan in November 2025 — exposing a recent chin question — and only has 3 UFC fights against unranked opposition while Kopylov has 9 UFC fights against UFC veterans. Path to victory: controlled distance in the first 90 seconds, counter with cross or head kick, late KO or 30-27 / 29-28 cards stacking technical volume. Falls apart if Tulio imposes 6.69 SLpM cumulative volume across 3 rounds and the Russian's cardio fades like it did against Rodrigues and Costa.",
        conviction_score: 5,
        conviction_rationale: "Conviction 5 (MEDIUM) because Kopylov rolls in off 2 UD losses (real declining trend), but granite chin + UFC experience + Tulio's recent chin question converge. Competitive fight at middleweight with high variance — either could lose.",
        conviction_breakers: [
          'Tulio imposes superior volume (6.69 vs 4.59 SLpM) for 3 rounds',
          'Kopylov shows wear from the last 2 losses',
          "Tulio's recent chin question doesn't materialize against a technical striker",
          'Tulio lands a clean cross early in R1 and replicates Duncan',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 45,
          key_scenario: "Tulio sets a pressure pace from R1 with 6.69 SLpM. Stacks volume and cumulative damage. Kopylov absorbs more than he sustains (declining cardio in last 2). Tulio takes 30-27 or 29-28 cards, or lands a clean shot in R3 when the Russian fades.",
          required_conditions: [
            'Maintain 6+ SLpM volume across 3 rounds',
            'Cash in on 2 years of youth for cardio',
            "Don't give up the back or accept the clinch (Kopylov isn't a wrestler)",
            'Resist counter head kick / cross attempts',
          ],
          historical_precedent: "Rodrigues and Costa beat Kopylov via UD by stacking volume and pressure. Tulio has comparable volume (6.69 SLpM). Direct precedent for Tulio to replicate.",
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Roman Kopylov', odds: '-130 (estimated)', reasoning: "Real probability 52%, implied at -130 = 56.5%. Line near pickem. No big edge." },
          { type: 'Method', pick: 'Kopylov by Decision', odds: '+200 to +250 (estimated)', reasoning: "Kopylov went 25 minutes with Rodrigues and Costa in his last 2. Tulio has only been finished once. If Kopylov controls distance, decision is a real scenario. Edge at +200." },
          { type: 'Method', pick: 'Tulio by KO/TKO', odds: '+200 to +250 (estimated)', reasoning: "Tulio 71% KO/TKO finish rate. But Kopylov has never been KO'd. Real probability 25-30%, marginal edge." },
        ],
        best_bet: { pick: 'Kopylov by Decision at +200 to +250', reasoning: "Highest expected edge on the fight. Kopylov went 25 minutes against Rodrigues and Costa, Tulio has never gone 25 minutes against elite. Most likely scenario among Russian wins is a UD via cumulative technical volume." },
      },
      key_stats: [
        { value: '0', label: "Times Kopylov has been KO'd in 19 pro fights", sublabel: 'Granite chin. All 5 losses came via sub (2) or decision (3).' },
        { value: 'R2', label: 'Round Tulio took a recent KO from Duncan', sublabel: 'November 2025, first UFC loss, snapped a 10-fight win streak.' },
        { value: '2', label: "Kopylov's straight losses entering this fight", sublabel: 'Rodrigues UD Nov/2025 + Costa UD Jul/2025. Real declining trend.' },
        { value: '6.69', label: "Tulio's UFC.com SLpM", sublabel: 'Volume well above Kopylov\'s 4.59. Pressure striker.' },
      ],
      odds: {
        fighter1_odds: '-130',
        fighter2_odds: '+110',
        fighter1_name: 'Kopylov',
        fighter2_name: 'Tulio',
        source: 'DraftKings/FanDuel Kopylov -130 / Tulio +110 in April 2026 (estimated). Line near pickem.',
      },
      armadilha: {
        titulo: 'The Trap: Tulio by Quick KO',
        descricao: "The market will pay Tulio by quick KO based on his 71% KO/TKO finish rate. But Kopylov has NEVER been KO'd in 19 pro fights, and Tulio has only finished unranked strikers in his 3 UFC fights. Kopylov is a level higher (9 UFC fights against UFC veterans) and has a chin tested against Curtis, Almeida, Costa, Rodrigues. Betting on a quick KO is betting against the entire history of the Russian.",
      },
    },
  },
};
