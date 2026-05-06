import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'alvarez-vs-amosov',
  evento_id: null,
  slug: 'alvarez-vs-amosov',
  titulo: 'Alvarez vs Amosov: The Tsarukyan Blueprint',
  subtitulo:
    "In February 2022, Arman Tsarukyan ended Alvarez via TKO R2 from on top, ground-and-pound, with the recap noting his sub attempts were \"activity, not danger.\" That's the only elite wrestler Alvarez has ever faced. Amosov is a harder version: 4-time sambo world champion, former Bellator champ at 29-1, anaconda choke over Magny in 3:14 of his UFC debut, never finished in 30 fights. The market opened Alvarez -400 and moved to Amosov -175.",
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '6\'3"', envergadura: '77"', idade: 33, academia: 'Bandog Fight Club, Gijón' },
      fighter2: { altura: '6\'0"', envergadura: '75"', idade: 32, academia: 'American Top Team' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Late submission (anaconda) or decision',
    confidence: 'HIGH',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Joel Alvarez',
    apelido: 'El Fenómeno',
    record: '23-3-0',
    ranking: 'N/R Welterweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Vicente Luque', method: 'UD (30-26 x3)', event: 'UFC Fight Night Rio' },
      { result: 'W', opponent: 'Drakkar Klose', method: 'KO R1 (flying knee, 2:48)', event: 'UFC Tampa' },
      { result: 'W', opponent: 'Elves Brener', method: 'TKO R3 (knees + ground strikes)', event: 'UFC Abu Dhabi' },
    ],
  },
  fighter2_info: {
    nome: 'Yaroslav Amosov',
    apelido: 'Dynamo',
    record: '29-1-0',
    ranking: 'N/R Welterweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Neil Magny', method: 'Sub R1 (anaconda, 3:14)', event: 'UFC on ESPN 73' },
      { result: 'L', opponent: 'Jason Jackson', method: 'TKO R3 (heavy hands + GnP, 2:08)', event: 'Bellator 301' },
      { result: 'W', opponent: 'Logan Storley', method: 'UD (50-45 x3)', event: 'Bellator 291 (unification)' },
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
      tagline: 'The Tsarukyan Blueprint',
      tagline_sub: "Tsarukyan ended Alvarez Feb 2022, TKO R2 from on top, GnP, sub attempts were 'activity not danger.' Amosov is a harder version. Market moved from Alvarez -400 to Amosov -175.",
      fighter1: {
        nome_completo: 'Joel "El Fenómeno" Alvarez',
        apelido: 'El Fenómeno',
        sobrenome: 'Alvarez',
        record: '23-3-0',
        ranking: 'N/R Welterweight',
        info_extra: 'Gijón, Asturias, Spain | Age 33',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/2/ALVAREZ_JOEL_L_12-14.png?itok=-YA8lRPj',
      },
      fighter2: {
        nome_completo: 'Yaroslav "Dynamo" Amosov',
        apelido: 'Dynamo',
        sobrenome: 'Amosov',
        record: '29-1-0',
        ranking: 'N/R Welterweight',
        info_extra: 'Irpin, Ukraine | Age 32',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/AMOSOV_YAROSLAV_R_12-13.png?itok=0HuVN0D3',
      },
    },

    qualitative_insight: {
      tag: 'THE X-FACTOR',
      headline: 'The Only Elite Wrestler Alvarez Has Ever Faced Ended Him in 6:57',
      insight:
        "Joel Alvarez rolls in 23-3 with four straight UFC wins and a black-belt jiu-jitsu game that finishes 17 of his 23 wins (74% sub rate). Here's the thing the streak hides: the only time he ever fought an elite wrestler was February 26, 2022, UFC Vegas 49 against Arman Tsarukyan. Tsarukyan took him down in R1, stayed on top until the bell, opened cuts with elbows. R2: takedown immediately, Alvarez \"covering up, bloodied, blind\" per Cageside Press, ref stop at 1:57. Total of 6:57 in bottom control, and the line that matters is in the recap: \"Alvarez wasn't able to threaten Tsarukyan with any submissions.\" The Spaniard's sub attempts were \"activity, not danger.\" Amosov is a harder version of Tsarukyan: 4-time sambo world champion, former Bellator champ at 29-1, defended his title against Lima (UD shutout 50-45), Storley twice (UD), Jackson (UD), and debuted in the UFC December 2025 with an anaconda choke over Neil Magny at R1 3:14 — a 3-minute fight to finish the welterweight division's all-time wins leader. Never finished in 30 fights. The market opened Alvarez -400 on the back of his four straight UFC finishes, then moved all the way to Amosov -175 once the sharp money came in. The line move is the tell.",
      tension: {
        truth_a: "Alvarez is on a 4-fight UFC win streak and just dominated Vicente Luque in his welterweight debut on a UD 30-26 x3 in October 2025. Black belt with 17 finishes in 23 wins. 6'3\" with a 77\" reach, 3 inches taller and 2 inches more reach than Amosov. Spanish striker who finally moved up to his natural weight class.",
        truth_b: "The only elite wrestler Alvarez has ever faced was Tsarukyan in February 2022. Result: TKO R2 1:57, 6:57 in bottom control, sub attempts ruled \"activity not danger\" by recap. Amosov is the same archetype, just with more cardio (five 5-round fights, all wins), more credentials (4-time sambo world champ, ex-Bellator champ), and never finished in 30 pro fights.",
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Joel Alvarez',
        color: 'red',
        momentum_score: 8,
        momentum_label: 'On Fire',
        momentum_trend: 'ascending',
        momentum_note: "Four straight UFC wins: Diakiese (D'Arce R2 with a head clash controversy, July 2023), Brener (TKO R3, August 2024), Klose (KO R1 flying knee, December 2024), Luque (UD 30-26 x3 in welterweight debut, October 2025). BJJ black belt out of Bandog Fight Club in Gijón. Career sub breakdown: 7 triangles, 4 guillotines, 2 armbars, 2 anacondas, 1 brabo, 1 arm triangle. ZERO rear-naked chokes. Age 33.",
        recent_fights: [
          { date: 'Oct 2025', opponent: 'Vicente Luque', result: 'W', method: 'UD (30-26 x3)', opponent_rank: 'Top 15 Welterweight', quality_score: 3, quality_label: 'Good', note: 'Welterweight debut. Outstruck Luque, took the back in R2, defended his desperate TD attempt in R3.' },
          { date: 'Dec 2024', opponent: 'Drakkar Klose', result: 'W', method: 'KO R1 (flying knee, 2:48)', opponent_rank: 'Top 25 Lightweight', quality_score: 3, quality_label: 'Good', note: 'Highlight-reel flying knee + GnP. Klose was on a 4-fight win streak.' },
          { date: 'Aug 2024', opponent: 'Elves Brener', result: 'W', method: 'TKO R3 (knees + GnP)', opponent_rank: 'N/R Lightweight', quality_score: 2, quality_label: 'Fair', note: 'Performance of the Night. Not a sub R1 as commonly reported.' },
          { date: 'Jul 2023', opponent: 'Marc Diakiese', result: 'W', method: "Sub R2 (D'Arce 4:26)", opponent_rank: 'N/R Lightweight', quality_score: 2, quality_label: 'Fair', note: 'Setup involved an unnoticed head clash that the ref let go.' },
          { date: 'Feb 2022', opponent: 'Arman Tsarukyan', result: 'L', method: 'TKO R2 (elbows + GnP, 1:57)', opponent_rank: 'Top 5 Lightweight', quality_score: 5, quality_label: 'Excellent', note: '6:57 in bottom control. Sub attempts were "activity, not danger." The exact blueprint for this fight.' },
        ],
      },
      fighter2: {
        nome: 'Yaroslav Amosov',
        color: 'blue',
        momentum_score: 9,
        momentum_label: 'On Fire',
        momentum_trend: 'ascending',
        momentum_note: 'Dominant UFC debut: anaconda choke over Neil Magny at R1 3:14 in December 2025, won Submission of the Month. Magny is the all-time UFC welterweight wins leader. Pre-UFC, former Bellator champ with title defenses over Lima (UD shutout 50-45), Storley (UD 50-45), Jackson (UD). Only career loss was a TKO R3 to Jason Jackson at Bellator 301 (Nov 2023) — got caught with a heavy combination that dropped him and Jackson finished on the ground. Sat out 14+ months (May 2022 to Feb 2023) defending Ukraine in the war. 4-time sambo world champion. Trains at American Top Team in Coconut Creek.',
        recent_fights: [
          { date: 'Dec 2025', opponent: 'Neil Magny', result: 'W', method: 'Sub R1 (anaconda, 3:14)', opponent_rank: 'Top 15 Welterweight', quality_score: 4, quality_label: 'Very Good', note: "Ended the all-time UFC welterweight wins leader in 3 minutes. Submission of the Month December 2025." },
          { date: 'May 2024', opponent: 'Logan Storley', result: 'W', method: 'UD', opponent_rank: 'Top 5 Bellator', quality_score: 4, quality_label: 'Very Good', note: 'PFL vs Bellator card. Third straight win over Storley.' },
          { date: 'Nov 2023', opponent: 'Jason Jackson', result: 'L', method: 'TKO R3 (combo + GnP, 2:08)', opponent_rank: 'Top 5 Bellator', quality_score: 4, quality_label: 'Very Good', note: 'Only career loss. Jackson landed a heavy combination, dropped Amosov, finished on the ground.' },
          { date: 'Feb 2023', opponent: 'Logan Storley', result: 'W', method: 'UD (50-45 x3)', opponent_rank: 'Top 5 Bellator', quality_score: 5, quality_label: 'Excellent', note: 'Bellator title unification. Return after a 14-month layoff defending Ukraine. 5R total shutout.' },
          { date: 'Jun 2021', opponent: 'Douglas Lima', result: 'W', method: 'UD (5R)', opponent_rank: 'Former Bellator Champion', quality_score: 5, quality_label: 'Excellent', note: 'Captured the Bellator title. Outwrestled Lima all 5 rounds.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Alvarez', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '5W-0L (last 5)', contra_top5: '0W-1L (Tsarukyan)' },
      fighter2: { nome: 'Amosov', media_oponentes: 4, media_oponentes_label: 'Very Good', aproveitamento: '4W-1L (last 5)', contra_top5: '0W-0L (UFC), 4W-1L (Bellator elite)' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: "No common opponents. Amosov calibre (4) above Alvarez (2). The Spaniard's 4 straight UFC finishes were over Diakiese (unranked), Brener (unranked), Klose (top 25 lightweight), Luque (top 15 in decline). Amosov beat Lima, Storley twice, Jackson, Magny, all either prime or only lightly past prime. Qualitative gap: Alvarez has never beaten a top-5 welterweight; Amosov was top 1 of another major promotion for years.",
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 4.8, valueB: 2.78, maxVal: 7, format: 'decimal', note: 'Alvarez higher volume, striker-grappler profile.' },
        { label: 'Striking Accuracy (%)', valueA: 53, valueB: 47, maxVal: 100, format: 'percent', note: 'Alvarez more accurate via reach.' },
        { label: 'Strikes Absorbed/Min', valueA: 3.8, valueB: 1.55, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Amosov absorbs less via defensive wrestling.' },
        { label: 'Striking Defense (%)', valueA: 58, valueB: 55, maxVal: 100, format: 'percent', note: 'Even.' },
        { label: 'Takedowns per 15 Min', valueA: 1.5, valueB: 4.8, maxVal: 5, format: 'decimal', note: 'Amosov 3x more offensive wrestling. His identity.' },
        { label: 'Submissions per 15 Min', valueA: 2.8, valueB: 4.64, maxVal: 5, format: 'decimal', note: 'Amosov attacks from the top, Alvarez from the bottom.' },
        { label: 'Takedown Defense (%)', valueA: 47, valueB: 78, maxVal: 100, format: 'percent', note: "Key stat. Alvarez TDD 47% (vulnerability), Amosov 78% (elite)." },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '33', fighter2: '32', note: 'Alvarez 6 months older. Amosov turns 33 in Sep 2026.' },
        { label: 'Height', fighter1: '6\'3"', fighter2: '6\'0"', note: 'Alvarez 3 inches taller.' },
        { label: 'Reach', fighter1: '77"', fighter2: '75"', note: 'Alvarez +2 inches. Stand-up edge.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Same stance.' },
        { label: 'Camp', fighter1: 'Bandog FC, Gijón', fighter2: 'American Top Team', note: 'Asturian striking gym vs elite American camp.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Offensive Wrestling', advantage: 'fighter2', gap: 5, note: "Amosov 4.8 TD/15min vs 1.5 from Alvarez. 4-time sambo world champion. Identity-level edge." },
        { label: 'Top Control / Ground Dominance', advantage: 'fighter2', gap: 5, note: "Amosov runs top and finishes (anaconda repertoire). Alvarez attacks from below — opposite profile." },
        { label: 'Takedown Defense', advantage: 'fighter2', gap: 4, note: "Amosov 78% TDD, Alvarez 47%. Alvarez himself: \"I'm not a specialist in wrestling.\"" },
        { label: 'Submission Defense', advantage: 'fighter2', gap: 3, note: 'Amosov has NEVER been finished in 30 fights. Alvarez was controlled by Tsarukyan but not subbed. Different sample sizes.' },
        { label: 'Striking on the Feet', advantage: 'fighter1', gap: 2, note: 'Alvarez 2 inches more reach, 3 inches taller, higher SLpM. But Amosov absorbs only 1.55/min — he avoids exchanges.' },
        { label: 'Cardio (3 and 5 Rounds)', advantage: 'fighter2', gap: 3, note: 'Amosov has gone 5 rounds five times in Bellator (all wins via UD). Alvarez has never gone past R3.' },
      ],
      summary: "Amosov dominates where the fight goes (ground, top control, wrestling). Alvarez has a strong tool (offensive BJJ) but needs to be on the bottom, a position Amosov controls. To win, Alvarez has to take down a wrestler who's never been consistently taken down, or accept guard against a guy who finished Magny in 3 minutes.",
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Alvarez', ko_tko: { count: 5, percent: 22 }, submission: { count: 17, percent: 74 }, decision: { count: 1, percent: 4 }, total_wins: 23 },
      fighter2: { nome: 'Amosov', ko_tko: { count: 9, percent: 31 }, submission: { count: 12, percent: 41 }, decision: { count: 8, percent: 28 }, total_wins: 29 },
      insight: "Alvarez 74% by sub: 7 triangles, 4 guillotines, 2 anacondas, 2 armbars, 1 brabo, 1 arm triangle. ZERO RNCs (despite the common reporting). Amosov 41% sub + 31% KO/TKO = 72% finish rate, complete profile. His last 5 finishes: Magny (anaconda R1), Cavalcanti (north-south R1), Rickels (D'Arce R2), CFFC return (anaconda R1) — chokes from the anaconda/D'Arce/north-south family are recurring repertoire.",
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Alvarez', ko_tko: { count: 2, percent: 67 }, submission: { count: 0, percent: 0 }, decision: { count: 1, percent: 33 }, total_losses: 3 },
      fighter2: { nome: 'Amosov', ko_tko: { count: 1, percent: 100 }, submission: { count: 0, percent: 0 }, decision: { count: 0, percent: 0 }, total_losses: 1 },
      insight: "Alvarez has lost 2 of 3 by KO/TKO: Arman Tsarukyan ground-and-pound R2 (UFC Fight Night 202) plus an early aggressive style by wrestlers who dictate pace. The 3rd loss was a UD to Damir Ismagulov in his 2019 UFC debut. Amosov has only ONE career loss (29-1) — Jason Jackson KO R3 at Bellator 301 defending the title; he was 27-0 going in. Rare-tier durability profile. Tiny sample on Amosov, but the only KO suffered signals that heavy strikers in transition can catch him. For value bets: Alvarez by sub remains the most natural path given his finisher profile.",
    },

    previsao_final: {
      winner_name: 'Yaroslav Amosov',
      winner_side: 'fighter2',
      predicted_method: 'Late submission (anaconda) or decision',
      confidence_score: 8,
      confidence_label: 'HIGH',
      explanation:
        "The pick is Yaroslav Amosov by anaconda choke or late submission from the D'Arce/north-south family, with dominant decision as the second scenario. Looking fight by fight, the edge appears across five dimensions: stats (TDD 78% and wrestling 4.8/15min vs 1.5 from Alvarez, plus Alvarez's TDD 47% vulnerability), competition level (Bellator champion at 29-1 with wins over Lima, Storley twice, Jackson, Magny vs Alvarez who's never beaten a top 5), style (top-control wrestler with anaconda sub repertoire vs bottom grappler), momentum (dominant 3-minute UFC debut over Magny vs Alvarez 4-0 in UFC but light on calibre), and the Tsarukyan blueprint (the only time Alvarez faced an elite wrestler ended in TKO R2 with sub attempts ruled \"activity not danger\"). Alvarez has a viable path (25%): use his 2-inch reach edge to keep distance on the feet, land the heavy right cross against a guy whose chin was already exposed by Jackson, or accept guard and lock a triangle (his actual specialty, not the RNC). But the math is heavy on the Ukrainian's side. Conviction 8 because five dimensions converge with direct precedent (Tsarukyan blueprint) and the market moved from Alvarez -400 opening to Amosov -175 current.",
      x_factor: {
        title: 'The Tsarukyan Blueprint',
        description: "In February 2022, Arman Tsarukyan handed in the exact recipe for beating Alvarez: takedown in R1, top control with elbows to open cuts, takedown immediately in R2, GnP until the ref stops it at 1:57. Total: 6:57 in bottom control. Alvarez's sub attempts were graded \"activity, not danger.\" Amosov is Tsarukyan with more cardio, more credentials (4-time sambo world champ vs juniors world champ), more experience (29-1 vs 22-3 at the time), and a finishing instinct already proven (anaconda Magny in 3 min). If he runs the blueprint, it's a wrap.",
      },
      upset_alert: {
        title: 'Alvarez Reads Distance and Finds the Heavy Hand',
        description: "The precedent for beating Amosov on the feet exists: Jason Jackson dropped the Ukrainian at Bellator 301 (November 2023) and finished TKO R3. That's not a repeatable script — it's proof Amosov can get caught when prolonged exchanges happen. Alvarez has 2 inches more reach than Amosov, 3 inches more height, and real KO power (5 KO/TKO in 23 wins, including the flying knee KO of Klose in December 2024). If he can dictate jab distance and Amosov gets uncomfortable in the exchange, the heavy-hand window opens. Probability sits around 25% — real because Amosov's stand-up ceiling has been exposed once already.",
      },
      probabilities: { fighter1: { nome: 'Alvarez', percent: 25 }, fighter2: { nome: 'Amosov', percent: 72 }, draw: 3 },
      conviction: {
        thesis:
          "The thesis is: Yaroslav Amosov wins because, first, he's a 4-time sambo world champion and former Bellator welterweight champion at 29-1 with TDD 78% and wrestling at 4.8/15min, sustaining the top-control scenario across 3 rounds. Second, Arman Tsarukyan already handed in the exact blueprint in February 2022 (TKO R2 1:57 with 6:57 of bottom control over Alvarez, sub attempts graded \"activity not danger\") and Amosov is a harder version of Tsarukyan. Third, his dominant anaconda choke over Magny at 3:14 of his UFC debut shows the anaconda/D'Arce family is recurring repertoire — he's already finished that way in CFFC, Bellator, and the UFC, not a one-off. Path: Amosov defends the early striking, gets the takedown in R1, runs top control 4-5 minutes a round, hunts the anaconda in transitions. Falls apart if Alvarez dictates distance on the feet and lands a heavy shot early, or if the Ukrainian makes a transition mistake on a guard pull.",
        conviction_score: 8,
        conviction_rationale: 'Conviction 8 because five dimensions converge (stats, calibre, style, momentum, qualitative) with direct precedent. The Tsarukyan blueprint is the strongest qualitative argument: the only elite wrestler Alvarez ever faced handed in a dominant loss recipe. The market moved from Alvarez -400 to Amosov -175, and the sharp money agrees. Not 9 because Jackson already proved Amosov can be dropped by a heavy combination, and Alvarez has the reach + height to try it, plus Amosov has only 1 UFC fight under his belt.',
        conviction_breakers: [
          'Alvarez dictates distance on the feet and lands a heavy shot early, dropping Amosov',
          "Amosov can't get takedowns in his first attempts and the fight stays on the feet",
          'Alvarez pulls comfortable guard and locks a triangle (his actual specialty) in transition',
          "Amosov's cardio fails for the first time in 30 fights",
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 25,
          key_scenario: "Alvarez uses his 2-inch reach edge and 3-inch height advantage to dictate jab distance. When Amosov closes for wrestling, Alvarez sprawls the first attempt and resets in the center of the cage. R1 stays mostly on the feet. Alvarez finds the heavy hand on Amosov's entry — straight right, left hook, or a flying knee like the one that put Klose down — and drops the Ukrainian. Follows with GnP until the stoppage. KO/TKO R1-R2.",
          required_conditions: [
            "Defend at least the first takedown attempt from Amosov",
            'Keep distance on the feet with the 2-inch reach edge',
            'Land a genuine heavy shot (real power, 5 KO/TKO career)',
            "Don't pull guard against a guy who finished Magny in 3 minutes",
          ],
          historical_precedent: "Jason Jackson dropped Amosov at Bellator 301 (November 2023) and finished TKO R3 — the first and only career loss in 30 fights. That doesn't mean Alvarez replicates the same exact sequence. It means Amosov's stand-up ceiling has been exposed once by a prolonged exchange. Alvarez has the reach, height, and KO power (5 KO/TKO in 23 wins) to create a similar window if the exchange happens. But Alvarez also lost to Damir Ismagulov (UFC Prague 2019) on a UD via pure striking — distance management on the feet isn't always his game either.",
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Yaroslav Amosov', odds: '-175 (BestFightOdds, Apr 2026)', reasoning: "Real probability estimated at 72%, implied at -175 = 64%. 8-point edge. Market opened Alvarez -400 and moved to Amosov -175 once the sharp money came in. The line agrees with the thesis." },
          { type: 'Method', pick: 'Amosov by Submission', odds: '+250 to +300 (estimated)', reasoning: "The Magny anaconda showed the finish is current repertoire (3:14 R1). The anaconda/D'Arce/north-south family is the recurring pattern across his last 4 wins. Alvarez was controlled 6:57 by Tsarukyan without threatening a sub. Real probability 35-40%, implied at +275 = 27%, real edge." },
          { type: 'Total Rounds', pick: 'Under 2.5 rounds', odds: '+110 to +130 (estimated)', reasoning: 'Amosov finished Magny in 3 minutes. Tsarukyan finished Alvarez in 6:57. Early-finish scenario is the more likely path.' },
        ],
        best_bet: { pick: 'Amosov by Submission at +275', reasoning: 'Highest expected edge on the fight. The Tsarukyan blueprint plus the recent anaconda repertoire. Real probability 35-40% vs implied 27%. Best bet on the prelims.' },
      },
      key_stats: [
        { value: '6:57', label: 'Bottom control absorbed by Alvarez vs Tsarukyan (Feb 2022)', sublabel: 'The only elite wrestler he\'s ever faced. Sub attempts ruled "activity, not danger."' },
        { value: '0', label: 'Times Amosov has been finished in 30 fights', sublabel: 'Sub defense history is bulletproof. 4-time sambo world champion.' },
        { value: '3:14', label: 'Time Amosov needed to finish Magny in his UFC debut', sublabel: 'Anaconda choke. Magny is the all-time UFC welterweight wins leader.' },
        { value: '-400 → -175', label: 'Line move from Alvarez favorite to Amosov favorite', sublabel: 'Sharp money moved drastically. The market read the Tsarukyan blueprint.' },
      ],
      odds: {
        fighter1_odds: '+150',
        fighter2_odds: '-175',
        fighter1_name: 'Alvarez',
        fighter2_name: 'Amosov',
        source: 'BestFightOdds Amosov -163 to -186 / Alvarez +130 to +156 in April 2026. Polymarket has Amosov 62%. Opening DraftKings/Vegas was Alvarez -400, moved drastically once sharp money came in.',
      },
      armadilha: {
        titulo: 'The Trap: Alvarez by Rear-Naked Choke',
        descricao: "The market will pay heavy on 'Alvarez by RNC' based on a misread of his finish history (4 straight UFC subs, '61% sub rate'). But Alvarez has ZERO RNCs in his career: his 17 subs break down to 7 triangles, 4 guillotines, 2 anacondas, 2 armbars, 1 brabo, 1 arm triangle. None of them rear-naked. Betting Alvarez by RNC is betting against the entire Spaniard's finish history. If you want an Alvarez sub bet, it's a triangle or a guillotine.",
      },
    },
  },
};
