import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'volkov-vs-cortes-acosta',
  evento_id: null,
  slug: 'volkov-vs-cortes-acosta',
  titulo: 'Volkov vs Cortes-Acosta: Range vs Hype',
  subtitulo:
    "Volkov has 80 inches of reach and the fight IQ of 50 pro fights. Cortes-Acosta rolls in off three KOs in four months — Lewis, Gaziev, Delija — power for days. But the transitivity points to the Russian: Volkov beat Pavlovich in 2024, and that same Pavlovich beat the Dominican in August 2025. Lines opened Volkov -175.",
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '6\'7"', envergadura: '80"', idade: 36, academia: 'Strela Team, Moscow' },
      fighter2: { altura: '6\'4"', envergadura: '78"', idade: 34, academia: 'Ultimate Kombat Training Center' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decision or KO/TKO',
    confidence: 'MEDIUM',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Alexander Volkov',
    apelido: 'Drago',
    record: '39-11-0',
    ranking: '#2 Heavyweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Jailton Almeida', method: 'Split Decision', event: 'UFC 321' },
      { result: 'L', opponent: 'Ciryl Gane', method: 'Split Decision', event: 'UFC 310' },
      { result: 'W', opponent: 'Sergei Pavlovich', method: 'UD', event: 'UFC on ABC 6' },
    ],
  },
  fighter2_info: {
    nome: 'Waldo Cortes-Acosta',
    apelido: 'Salsa Boy',
    record: '17-2-0',
    ranking: '#4 Heavyweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Derrick Lewis', method: 'TKO R2', event: 'UFC 324' },
      { result: 'W', opponent: 'Shamil Gaziev', method: 'KO R1', event: 'UFC Fight Night 265' },
      { result: 'W', opponent: 'Ante Delija', method: 'KO R1', event: 'UFC Fight Night 263' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: 'May 9, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Heavyweight (265 lbs)',
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
      categoria_peso: 'Heavyweight (265 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Range vs Hype',
      tagline_sub: 'Volkov brings 80 inches of reach and the fight IQ of 50 pro fights. Cortes-Acosta rolls in off three KOs in four months. The Dominican comes flying — but he has to get past the Russian\'s jab first.',
      fighter1: {
        nome_completo: 'Alexander "Drago" Volkov',
        apelido: 'Drago',
        sobrenome: 'Volkov',
        record: '39-11-0',
        ranking: '#2 Heavyweight',
        info_extra: 'Moscow, Russia | Age 36',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-10/VOLKOV_ALEXANDER_L_10-25.png?itok=6BGigt1n',
      },
      fighter2: {
        nome_completo: 'Waldo "Salsa Boy" Cortes-Acosta',
        apelido: 'Salsa Boy',
        sobrenome: 'Cortes-Acosta',
        record: '17-2-0',
        ranking: '#4 Heavyweight',
        info_extra: 'Barahona, Dominican Republic | Age 34',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/CORTES_ACOSTA_WALDO_L_01-24.png?itok=ltqBsxTz',
      },
    },

    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: "The Russian's Jab Already Solved Pavlovich",
      insight:
        "The easy story is Cortes-Acosta dropping the 36-year-old Russian the same way he dropped Lewis, Gaziev, and Delija — three KOs in four months. Look fight by fight and the picture flips. Volkov has 80 inches of reach (one of the longest in the heavyweight division), 1,138 career UFC significant strikes (second-most in division history), and dictated the pace against Sergei Pavlovich in June 2024 for a clean unanimous decision. That same Pavlovich beat Cortes-Acosta in August 2025. Volkov beat Pavlovich, Pavlovich beat Cortes-Acosta — that's the most direct evidence on the card. More: the Dominican's three recent KOs came against fighters with chin question marks (Delija banged up, Gaziev a 1-D striker, Lewis 40 years old and gassed). Volkov has never been knocked out by a pure boxer in his UFC run — only by explosive wrestlers and one TKO via leg kicks. The angle: Cortes-Acosta has real KO power, but he has to get inside Volkov's range to use it. The Russian has spent 11 UFC years keeping exactly this archetype at distance.",
      tension: {
        truth_a: "Cortes-Acosta rolls in off three KOs in four months — Lewis (TKO R2 in January), Gaziev (KO R1), Delija (KO R1). 5.76 sig strikes per minute with 75% of strikes targeting the head. Surging into the top 4 after dropping former contender Lewis in January. Younger, with overwhelming momentum. Market opened Volkov -175, but Cortes-Acosta at +145 has real KO upset value.",
        truth_b: "Volkov has 80 inches of reach, 1,138 career UFC sig strikes (2nd-most in heavyweight history), the fight IQ of 50 pro fights (39-11). Just beat Almeida (elite jiu-jitsu fighter) via split decision at UFC 321. Beat Pavlovich in 2024, who later beat Cortes-Acosta. 3 inches taller, 2 inches more reach, 11 years of UFC experience holding distance against explosive strikers.",
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Alexander Volkov',
        color: 'red',
        momentum_score: 7,
        momentum_label: 'On Fire',
        momentum_trend: 'ascending',
        momentum_note: "Coming off a split decision over Jailton Almeida at UFC 321 (October 2025), holding distance against an elite jiu-jitsu fighter for three rounds. Bounced back from a tight split-decision loss to Ciryl Gane at UFC 310 (December 2024). In 2024 he beat Sergei Pavlovich via clean unanimous decision. At 36 he's still running the classic range-fighter game — 80 inches of reach and the fight IQ of 50 pro fights. Trains at Strela Team in Moscow.",
        recent_fights: [
          { date: 'Oct 2025', opponent: 'Jailton Almeida', result: 'W', method: 'Split Decision', opponent_rank: 'Top 5 Heavyweight', quality_score: 4, quality_label: 'Very Good', note: 'Held distance against elite BJJ for three rounds.' },
          { date: 'Dec 2024', opponent: 'Ciryl Gane', result: 'L', method: 'Split Decision', opponent_rank: 'Top 3 Heavyweight', quality_score: 5, quality_label: 'Excellent', note: 'Tight split decision against a former title challenger.' },
          { date: 'Jun 2024', opponent: 'Sergei Pavlovich', result: 'W', method: 'UD', opponent_rank: 'Top 5 Heavyweight', quality_score: 4, quality_label: 'Very Good', note: 'Neutralized the Russian striker\'s KO power, dictated distance.' },
          { date: 'Sep 2023', opponent: 'Tai Tuivasa', result: 'W', method: 'Sub R2 (Ezekiel)', opponent_rank: 'Top 10 Heavyweight', quality_score: 3, quality_label: 'Good', note: 'Rare Ezekiel choke finish.' },
          { date: 'Mar 2023', opponent: 'Alexander Romanov', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'R1 TKO.' },
        ],
      },
      fighter2: {
        nome: 'Waldo Cortes-Acosta',
        color: 'blue',
        momentum_score: 9,
        momentum_label: 'On Fire',
        momentum_trend: 'ascending',
        momentum_note: "Three KOs in four months: Lewis TKO R2 in January 2026, Gaziev KO R1 in November 2025, Delija KO R1 in November 2025. Bounced back from a decision loss to Sergei Pavlovich in August 2025 with a brutal run. Dominican from Barahona, former baseball player who came to the United States. Trains at Ultimate Kombat Training Center with Javier Torres (former Tristar). At 34 still ascending, momentum overwhelming.",
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Derrick Lewis', result: 'W', method: 'TKO R2', opponent_rank: 'Top 10 Heavyweight', quality_score: 4, quality_label: 'Very Good', note: 'TKO over former #1 contender, late R2 finish.' },
          { date: 'Nov 2025', opponent: 'Shamil Gaziev', result: 'W', method: 'KO R1', opponent_rank: 'Top 15 Heavyweight', quality_score: 3, quality_label: 'Good', note: 'KO in 1 round against a Russian striker.' },
          { date: 'Nov 2025', opponent: 'Ante Delija', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'KO in R1, showed power.' },
          { date: 'Aug 2025', opponent: 'Sergei Pavlovich', result: 'L', method: 'UD', opponent_rank: 'Top 5 Heavyweight', quality_score: 4, quality_label: 'Very Good', note: 'Lost decision to the Russian. Same Pavlovich Volkov beat.' },
          { date: 'Jun 2025', opponent: 'Serghei Spivac', result: 'W', method: 'UD', opponent_rank: 'Top 10 Heavyweight', quality_score: 4, quality_label: 'Very Good', note: 'UD over Ukrainian wrestler.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Volkov', media_oponentes: 4, media_oponentes_label: 'Very Good', aproveitamento: '4W-1L (last 5)', contra_top5: '3W-1L' },
      fighter2: { nome: 'Cortes-Acosta', media_oponentes: 3, media_oponentes_label: 'Good', aproveitamento: '4W-1L (last 5)', contra_top5: '0W-1L' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: "Decisive common opponent: Sergei Pavlovich. Volkov beat Pavlovich via UD at UFC on ABC 6 (June 2024), neutralizing the Russian's KO power across three rounds. Cortes-Acosta lost to Pavlovich via decision at UFC Fight Night 257 (August 2025). Volkov sits 0W-1L against top 5 (loss to Gane was a split). Cortes-Acosta is 0W-1L against top 5 with the loss being to Pavlovich. Volkov calibre averages Very Good (4), Cortes-Acosta Good (3) — real 1-point gap.",
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 4.05, valueB: 5.76, maxVal: 7, format: 'decimal', note: 'Cortes-Acosta has the volume edge on the feet, classic boxer profile.' },
        { label: 'Striking Accuracy (%)', valueA: 56, valueB: 49, maxVal: 100, format: 'percent', note: 'Volkov more accurate, kickboxer technique.' },
        { label: 'Strikes Absorbed/Min', valueA: 3.2, valueB: 4.1, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Volkov absorbs less via range, Cortes-Acosta accepts trades.' },
        { label: 'Striking Defense (%)', valueA: 56, valueB: 55, maxVal: 100, format: 'percent', note: 'Even.' },
        { label: 'Takedowns per 15 Min', valueA: 0.5, valueB: 0.49, maxVal: 5, format: 'decimal', note: 'Both strikers, minimal offensive wrestling.' },
        { label: 'Takedown Defense (%)', valueA: 73, valueB: 67, maxVal: 100, format: 'percent', note: 'Volkov slight edge in TDD.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '36 years', fighter2: '34 years', note: 'Cortes-Acosta 2 years younger.' },
        { label: 'Height', fighter1: '6\'7"', fighter2: '6\'4"', note: 'Volkov 3 inches taller.' },
        { label: 'Reach', fighter1: '80"', fighter2: '78"', note: 'Volkov +2 inches reach. Range edge.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Same stance.' },
        { label: 'Camp', fighter1: 'Strela Team', fighter2: 'Ultimate Kombat', note: 'Russian veteran camp vs ascending American camp.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking at Range', advantage: 'fighter1', gap: 3, note: 'Volkov 80" reach, jab + teep, technical kickboxer.' },
        { label: 'Striking in the Pocket', advantage: 'fighter2', gap: 3, note: 'Cortes-Acosta pure boxer, 75% strikes to the head, KO power.' },
        { label: 'Knockout Power', advantage: 'fighter2', gap: 2, note: 'Cortes-Acosta 9 KOs in 17 wins (53%) with 3 recent KOs. Volkov 24 in 39 (62%) but at a controlled pace.' },
        { label: 'Striking Defense', advantage: 'fighter1', gap: 1, note: 'Volkov slight edge via footwork and range.' },
        { label: 'Cardio and Fight IQ', advantage: 'fighter1', gap: 3, note: 'Volkov 50 pro fights, dictated distance against Pavlovich and Almeida in decisions.' },
        { label: 'Momentum', advantage: 'fighter2', gap: 3, note: 'Cortes-Acosta 3 KOs in 4 months. Volkov coming off 4-1.' },
      ],
      summary: "Volkov dominates where range matters (jab, teep, distance). Cortes-Acosta dominates where the trade happens (pocket, heavy hands). The pivot question is whether the Dominican can close the distance without eating the jab on the way in.",
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Volkov', ko_tko: { count: 24, percent: 62 }, submission: { count: 4, percent: 10 }, decision: { count: 11, percent: 28 }, total_wins: 39 },
      fighter2: { nome: 'Cortes-Acosta', ko_tko: { count: 9, percent: 53 }, submission: { count: 1, percent: 6 }, decision: { count: 7, percent: 41 }, total_wins: 17 },
      insight: "Volkov finishes 62% by KO/TKO, but recent decisions (Almeida, Pavlovich, Gane) show that against disciplined strikers the Russian wins on the cards. Cortes-Acosta finishes 53% by KO but has 41% career decisions — boxer profile that takes it to the cards when the finish doesn't come. With 3 rounds, the fight has more finish potential than decision.",
    },

    previsao_final: {
      winner_name: 'Alexander Volkov',
      winner_side: 'fighter1',
      predicted_method: 'Decision or KO/TKO',
      confidence_score: 6,
      confidence_label: 'MEDIUM',
      explanation:
        "The pick is Alexander Volkov by decision or KO/TKO. Looking fight by fight, the edge appears across four dimensions: stats (80\" reach + jab + teep), competition level (Volkov beat Pavlovich, who beat Cortes-Acosta), style (technical range kickboxer vs pure pocket boxer), and fight IQ (50 pro fights dictating distance). Cortes-Acosta has a real path (41%): 3 KOs in four months, genuine power, and Volkov at 36 may be in decline. But to use the power, the Dominican has to close the distance without eating the jab. Volkov did exactly that against Pavlovich and Rozenstruik (TKO R1 via leg kicks). Conviction 6 because it's heavyweight (variance is huge, anyone can end it in one round) and Cortes-Acosta has the kind of momentum that breaks game plans. I see this being competitive, but I see a clear path where Volkov wins because his pace neutralizes the Dominican's.",
      x_factor: {
        title: "Round 1 Dictates the Rest",
        description: "If Cortes-Acosta lands a clean cross in the first 90 seconds and Volkov stumbles, the Dominican goes hunting and finds the KO. If Volkov survives the first 5 minutes with jab + teep dictating distance, the fight enters his terrain and he wins on the cards. Round 1 will tell you which scenario takes over.",
      },
      upset_alert: {
        title: 'Cortes-Acosta Closes the Distance and Lands the KO',
        description: "Cortes-Acosta has 3 KOs in four months over Lewis, Gaziev, and Delija. He's at 5.76 SLpM with 75% of strikes targeting the head. If he closes the distance and lands a clean cross, it's a wrap. Volkov has been knocked out by Bader and Rozenstruik (leg kicks) in his career. At 36, any chin question can matter. Probability sits around 41%, high for a betting underdog.",
      },
      probabilities: { fighter1: { nome: 'Volkov', percent: 56 }, fighter2: { nome: 'Cortes-Acosta', percent: 41 }, draw: 3 },
      conviction: {
        thesis:
          "The thesis is: Alexander Volkov wins because, first, he has 80 inches of reach (one of the longest in the UFC heavyweight division) and 1,138 career sig strikes (2nd-most in division history) — sustaining the range-fighter game across three rounds. Second, he beat Sergei Pavlovich via UD in June 2024, and that same Pavlovich beat Cortes-Acosta in August 2025 — direct calibre transitivity. Third, in 11 UFC years Volkov has repeatedly survived explosive strikers (Pavlovich, Rozenstruik, Tuivasa) using jab + teep + Russian kickboxer footwork. Path to victory: Volkov keeps distance in the first 90 seconds of round 1, starts stacking jabs and teeps, dictates a controlled pace through rounds 2 and 3, takes 30-27 or 29-28 cards. Falls apart if Cortes-Acosta lands a cross early and dictates the fight in the pocket, where he has 9 KOs in 17 wins (53%).",
        conviction_score: 6,
        conviction_rationale: "Conviction 6 because four dimensions converge (stats, calibre, style, fight IQ) but it's heavyweight and variance is absurd. Cortes-Acosta has real KO power and the kind of momentum that breaks everything in one round. Not 7 because the Dominican rolls in off three straight finishes and Volkov's age 36 is a real factor. I see this fight being competitive, but I see a clear path where Volkov wins on a controlled pace.",
        conviction_breakers: [
          'Cortes-Acosta lands a cross in the first 90 seconds of R1 and finishes',
          "Volkov shows ring rust at 36 and can't hold distance",
          'The Dominican uses pocket pressure to force trades where he has the KO power',
          'Volkov absorbs cumulative damage in the first two rounds and loses cards',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 41,
          key_scenario: "Cortes-Acosta closes the distance in the first 60-90 seconds of R1 with constant pressure, forces a trade in the pocket where he has 9 KOs in 17 wins. Lands a clean cross or hook to the head (75% of his strikes go to the head). KO or TKO in rounds 1 or 2.",
          required_conditions: [
            'Close the distance without eating jab + teep in the first minutes',
            "Land at least one clean cross to Volkov's head",
            'Keep the pressure so the Russian can\'t reset',
            "Take advantage of Volkov's age 36 (any rust matters)",
          ],
          historical_precedent: "Volkov has been KO'd by Curtis Blaydes (TKO R1 in 2017) and submitted by Derrick Lewis (KO R3 in 2018) in his UFC run. Cortes-Acosta has comparable KO power. But back then Volkov was a UFC newcomer; now he has 11 years of distance-dictating experience.",
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Alexander Volkov', odds: '-175', reasoning: "Real probability 56%, implied at -175 = 63.6%. No edge on the moneyline — the market lines up with the read. Safe play but no value." },
          { type: 'Method', pick: 'Volkov by Decision', odds: '+200 to +250 (estimated)', reasoning: "Volkov rolls in off 3 straight decisions (Almeida, Gane L, Pavlovich) dictating distance. Cortes-Acosta finishes 41% by decision (boxer profile that takes it to the cards). Real probability 35-45%. At +200 the implied probability is 33%, real edge." },
          { type: 'Method', pick: 'Cortes-Acosta by KO/TKO', odds: '+250 to +300 (estimated)', reasoning: "Risk play with a base: 3 KOs in 4 months, real power, Volkov age 36. Real probability 25-30%. At +300 the implied is 25%, slight edge if you trust the KO momentum." },
        ],
        best_bet: { pick: 'Volkov by Decision at +200 to +250', reasoning: "Highest expected edge on the fight. Volkov has the controlled-pace range-fighter profile (3 of last 5 went to decision), Cortes-Acosta's two losses (Pavlovich, Bektic in 2022) both came by decision. Most likely scenario among Volkov wins is 30-27 or 29-28." },
      },
      key_stats: [
        { value: '80"', label: "Volkov's reach in inches", sublabel: 'One of the longest in the UFC heavyweight division. 2-inch edge over Cortes-Acosta.' },
        { value: '3', label: "Cortes-Acosta's KOs in 4 months", sublabel: 'Lewis TKO R2, Gaziev KO R1, Delija KO R1. Brutal momentum.' },
        { value: '1,138', label: "Volkov's career UFC sig strikes", sublabel: '2nd-most in heavyweight history. Controlled volume.' },
        { value: '50', label: "Volkov's pro fights", sublabel: 'Fight IQ forged across 39W-11L, 11 UFC years.' },
      ],
      odds: {
        fighter1_odds: '-175',
        fighter2_odds: '+145',
        fighter1_name: 'Volkov',
        fighter2_name: 'Cortes-Acosta',
        source: 'DraftKings/FanDuel Volkov -175 / Cortes-Acosta +145 in April 2026. Polymarket aligned. Market has Volkov as moderate favorite via superior calibre.',
      },
      armadilha: {
        titulo: 'The Trap: Cortes-Acosta by KO at -120',
        descricao: "The market is going to load up on 'Cortes-Acosta by KO' based on the three straight finishes. But those KOs came against fighters with chin question marks: Lewis 40 and gassed, Gaziev a 1-D striker, Delija banged up. Volkov isn't any of the three. He's a technical range fighter who survives the first 90 seconds with jab + teep, and in 11 UFC years has never been KO'd by a pure boxer. Betting on a fast KO ignores that Volkov has neutralized this exact archetype (Pavlovich, Rozenstruik) repeatedly. If a finish comes, it comes late by accumulation, not fast.",
      },
    },
  },
};
