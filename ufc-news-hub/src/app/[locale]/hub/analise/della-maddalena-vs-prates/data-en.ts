import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'della-maddalena-vs-prates',
  evento_id: null,
  slug: 'della-maddalena-vs-prates',
  titulo: 'Della Maddalena vs Prates: Homecoming or Heartbreak',
  subtitulo:
    'Former welterweight champ comes home off a 50-45 spanking from Makhachev. Across the cage, Prates is red-hot — fresh off a starching of Leon Edwards. Line opened Prates -165 and moved to JDM -120, but Polymarket sits at Prates 61%. Five inches of reach, one-punch power, and momentum all point to The Nightmare.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'11"', envergadura: '73"', idade: 29, academia: 'Scrappy MMA, Perth' },
      fighter2: { altura: '6\'1"', envergadura: '78"', idade: 32, academia: 'Fighting Nerds, Brazil' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'KO/TKO or Decision',
    confidence: 'MEDIUM-HIGH',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Jack Della Maddalena',
    apelido: 'JDM',
    record: '18-3-0',
    ranking: '#1 Welterweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Islam Makhachev', method: 'Unanimous Decision', event: 'UFC 322' },
      { result: 'W', opponent: 'Belal Muhammad', method: 'Unanimous Decision', event: 'UFC 315 (Title)' },
      { result: 'W', opponent: 'Gilbert Burns', method: 'TKO R3', event: 'UFC 299' },
    ],
  },
  fighter2_info: {
    nome: 'Carlos Prates',
    apelido: 'The Nightmare',
    record: '23-7-0',
    ranking: '#5 Welterweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Leon Edwards', method: 'KO R2 (1:28)', event: 'UFC 322' },
      { result: 'W', opponent: 'Geoff Neal', method: 'KO R1 (spinning back elbow)', event: 'UFC 319' },
      { result: 'L', opponent: 'Ian Garry', method: 'Unanimous Decision', event: 'UFC Fight Night Kansas City' },
    ],
  },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: 'May 2, 2026',
  evento_local: 'RAC Arena, Perth, Australia',
  categoria_peso: 'Welterweight (170 lbs)',
  num_rounds: 5,
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
      categoria_peso: 'Welterweight (170 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'Homecoming or Heartbreak',
      tagline_sub: 'JDM returns home after Makhachev handled him over five rounds. Prates rolls in red-hot. The geometry tilts hard toward The Nightmare.',
      fighter1: {
        nome_completo: 'Jack "JDM" Della Maddalena',
        apelido: 'JDM',
        sobrenome: 'Della Maddalena',
        record: '18-3-0',
        ranking: '#1 Welterweight',
        info_extra: 'Perth, Australia | 29 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/DELLA_MADDALENA_JACK_L_09-16.png?itok=s0owpxMp',
      },
      fighter2: {
        nome_completo: 'Carlos "The Nightmare" Prates',
        apelido: 'The Nightmare',
        sobrenome: 'Prates',
        record: '23-7-0',
        ranking: '#5 Welterweight',
        info_extra: 'Taubaté, Brazil | 32 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/PRATES_CARLOS_L_08-17.png?itok=84ZbFhHS',
      },
    },

    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'The Geometry Favors The Nightmare',
      insight:
        'The easy story is JDM coming home, the former champ using crisp boxing to neutralize the Brazilian. Read the fight tape and the story flips. Prates has five inches of reach, three of height, and one-punch power that lives in the all-time tier (18 KOs in 23 wins, 7th-best knockdown rate in UFC history). He rolls in off back-to-back KOs of top-tier names. JDM rolls in off a 50-45 sweep against Makhachev — three judges, no disagreement, and public chatter that he was hurt during the fight. Edwards\' round-one game plan against Prates (clinch, takedown, RNC fishing) is replicable for JDM, but he\'d have to hold that for 25 minutes instead of five. The current Fighting Nerds version of Prates was built specifically to defend that look.',
      tension: {
        truth_a: 'JDM is a former champion, BJJ black belt, has been to championship rounds against grapplers. Fighting at home in Perth with redemption-arc juice after the Makhachev humbling. Crisp boxing against a southpaw — proven against Belal.',
        truth_b: 'Prates has three inches of height, five of reach, southpaw straight left that put Edwards down at 1:28 of round 2. KO of a former champion in November. JDM is six months off, possible injury, came in admitting "laziness" in his last camp.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Jack Della Maddalena', color: 'red', momentum_score: 5, momentum_label: 'Recovering', momentum_trend: 'descending',
        momentum_note: 'Coming off a dominant loss to Islam Makhachev in November 2025 — roughly 20 minutes of bottom control and three 50-45 cards. He called the performance "lazy" himself and said he "should have been more aggressive." Analysts speculated about an ACL or leg fracture during the fight. Six months on the shelf before this homecoming.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Islam Makhachev', result: 'L', method: 'Unanimous Decision (50-45 x3)', opponent_rank: 'Former LW Champion', quality_score: 5, quality_label: 'Excellent', note: 'Outwrestled for 25 straight minutes. Lost the title.' },
          { date: 'May 2025', opponent: 'Belal Muhammad', result: 'W', method: 'Unanimous Decision', opponent_rank: 'Champion', quality_score: 5, quality_label: 'Excellent', note: 'Won the welterweight title in Montreal.' },
          { date: 'Mar 2024', opponent: 'Gilbert Burns', result: 'W', method: 'TKO R3', opponent_rank: '#5-7 WW', quality_score: 5, quality_label: 'Excellent', note: 'Veteran striker stopped on the feet.' },
          { date: 'Sep 2023', opponent: 'Kevin Holland', result: 'W', method: 'Split Decision', opponent_rank: 'Top 15 WW', quality_score: 4, quality_label: 'Very Good', note: 'Competitive split against an athletic striker.' },
          { date: 'Jul 2023', opponent: 'Bassil Hafez', result: 'W', method: 'Split Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Tight split against a debutant. Showed work to do.' },
        ],
      },
      fighter2: {
        nome: 'Carlos Prates', color: 'blue', momentum_score: 9, momentum_label: 'Hot', momentum_trend: 'ascending',
        momentum_note: 'Two top-tier KOs in five months: spinning back elbow on Geoff Neal at the end of round 1 in August, straight left on former champ Leon Edwards in round 2 in November. The only recent loss is a unanimous decision to Ian Garry in April 2025 — a five-round main event he made it through despite his self-admitted smoking habit, proof his gas tank holds. Riding the Fighting Nerds wave (Caio Borralho, Mauricio Ruffy, Jean Silva).',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Leon Edwards', result: 'W', method: 'KO R2 (1:28)', opponent_rank: 'Former WW Champion', quality_score: 5, quality_label: 'Excellent', note: 'Edwards owned R1 in the clinch. Straight left dropped him in R2.' },
          { date: 'Aug 2025', opponent: 'Geoff Neal', result: 'W', method: 'KO R1 (4:59)', opponent_rank: 'Top 10 WW', quality_score: 4, quality_label: 'Very Good', note: 'Rare spinning back elbow finish. Performance bonus.' },
          { date: 'Apr 2025', opponent: 'Ian Garry', result: 'L', method: 'Unanimous Decision', opponent_rank: 'Top 5 WW', quality_score: 5, quality_label: 'Excellent', note: 'Full five rounds. Cardio held. R5 comeback.' },
          { date: 'Nov 2024', opponent: 'Neil Magny', result: 'W', method: 'KO R1', opponent_rank: 'Veteran Top 15 WW', quality_score: 3, quality_label: 'Good', note: 'UFC veteran cracked early in round 1.' },
          { date: 'Aug 2024', opponent: 'Li Jingliang', result: 'W', method: 'KO R2', opponent_rank: 'Top 15 WW', quality_score: 3, quality_label: 'Good', note: 'First fighter ever to KO Jingliang.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Della Maddalena', media_oponentes: 5, media_oponentes_label: 'Excellent', aproveitamento: '4W-1L (last 5)', contra_top5: '2W-1L' },
      fighter2: { nome: 'Prates', media_oponentes: 4, media_oponentes_label: 'Very Good', aproveitamento: '4W-1L (last 5)', contra_top5: '1W-1L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'No recent common opponents. Calibre is comparable: JDM\'s cluster is more elite (Makhachev, Belal, Burns), Prates ran a mix of top 5 (Garry, Edwards) and top 15 (Neal, Magny, Jingliang). Calibre gap = 1, below the threshold for a flag.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 6.8, valueB: 3.8, maxVal: 8, format: 'decimal', note: 'JDM has the volume edge. Prates does more damage per shot.' },
        { label: 'Knockdowns per 15 Min', valueA: 0.8, valueB: 2.1, maxVal: 3, format: 'decimal', note: 'Prates ranks 7th-best in UFC history on this metric.' },
        { label: 'Sig. Strikes Absorbed/Min', valueA: 4.2, valueB: 3.5, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Prates is harder to hit — true counter-puncher profile.' },
        { label: 'Strike Defense (%)', valueA: 56, valueB: 62, maxVal: 100, format: 'percent', note: 'Slight edge for Prates — frame and reach.' },
        { label: 'Takedowns per 15 Min', valueA: 1.2, valueB: 0.4, maxVal: 5, format: 'decimal', note: 'JDM is the more active offensive wrestler.' },
        { label: 'Takedown Defense (%)', valueA: 60, valueB: 78, maxVal: 100, format: 'percent', note: 'Prates leveled up his TDD after Garry and Edwards.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '29', fighter2: '32', note: 'JDM is three years younger.' },
        { label: 'Height', fighter1: '5\'11"', fighter2: '6\'1"', note: 'Prates 2 inches taller.' },
        { label: 'Reach', fighter1: '73"', fighter2: '78"', note: 'Prates owns 5 inches of reach. Central edge.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Southpaw', note: 'Asymmetric stance matchup.' },
        { label: 'Camp', fighter1: 'Scrappy MMA', fighter2: 'Fighting Nerds', note: 'Boutique home gym vs rising-tide camp.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Boxing / Stand-Up Volume', advantage: 'fighter1', gap: 2, note: 'JDM out-volumes at mid-range.' },
        { label: 'Knockout Power', advantage: 'fighter2', gap: 3, note: 'Prates 18 KOs in 23 wins. JDM 12 in 18.' },
        { label: 'Reach / Range Control', advantage: 'fighter2', gap: 4, note: '5-inch reach gap. Mechanical edge is clean.' },
        { label: 'Wrestling / Clinch', advantage: 'fighter1', gap: 3, note: 'BJJ black belt with the toolset to run Edwards\' round 1.' },
        { label: 'Submission Defense', advantage: 'even', gap: 0, note: 'Both BJJ black belts.' },
        { label: 'Cardio / 5-Round Capacity', advantage: 'fighter1', gap: 1, note: 'JDM has 25 minutes against Belal and Makhachev. Prates went the distance with Garry.' },
      ],
      summary: 'Prates wins on physical (reach, height, power), JDM on volume and wrestling. The fight pivots on who controls the range.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Della Maddalena', ko_tko: { count: 12, percent: 67 }, submission: { count: 2, percent: 11 }, decision: { count: 4, percent: 22 }, total_wins: 18 },
      fighter2: { nome: 'Prates', ko_tko: { count: 18, percent: 78 }, submission: { count: 3, percent: 13 }, decision: { count: 2, percent: 9 }, total_wins: 23 },
      insight: 'Both finishers. Prates 78% KO rate, JDM 67%. But JDM has gone the distance in 80% of his last five UFC fights — a sign the calibre stepped up and he extends. Prates UFC decision rate is 20%, average fight time 9:10.',
    },

    previsao_final: {
      winner_name: 'Carlos Prates', winner_side: 'fighter2',
      predicted_method: 'KO/TKO or Decision', confidence_score: 7, confidence_label: 'MEDIUM-HIGH',
      explanation:
        'The pick is Carlos Prates by KO/TKO or decision. The fight-by-fight read points to an edge in five independent dimensions: physical (5 inches of reach, 3 inches of height, comparable age), stats (7th-best knockdown rate in UFC history), momentum (back-to-back KOs of top-tier names against JDM\'s dominant loss), style (southpaw with the straight left and long kicks against an orthodox who needs to close the pocket where Prates\' power lives), and qualitative intel (Fighting Nerds on the rise, Prates upgraded his clinch defense after Garry and Edwards). JDM has a viable path (39%): replicate Edwards\' round-one game plan with clinch and takedowns, then sustain it for 25 minutes. That requires fresh cardio, no residual injury from the Makhachev loss, and the discipline to not get baited into stand-up where Prates is the more dangerous fighter. Conviction 7 because the fight is competitive — but the edge is clean.',
      x_factor: {
        title: 'Round 1 sets the tone',
        description: 'If JDM can replicate Edwards\' round 1 (clinch, takedown, RNC fishing) and bank control time, he projects a Belal-style decision. If he can\'t and the fight stays standing, it\'s only a matter of time before Prates lands the straight left or a long kick. Round 1 will tell you what fight you\'re watching.',
      },
      upset_alert: {
        title: 'JDM runs Edwards\' game and sustains it',
        description: 'Edwards owned Prates for the entire first round with clinch work and a takedown attempt — then walked into the straight left in round 2 the moment he switched back to striking. JDM has the same toolkit (BJJ plus clinch boxing), but he\'d need to keep it up for five rounds instead of one. If he doesn\'t bite on the bait to stand and trade, and keeps the wrestling going start to finish, he wins by decision. About a 39% shot.',
      },
      probabilities: { fighter1: { nome: 'Della Maddalena', percent: 39 }, fighter2: { nome: 'Prates', percent: 58 }, draw: 3 },
      conviction: {
        thesis:
          'The thesis: Carlos Prates wins because, first, he owns crushing physical advantages in reach and height (5 inches and 3 inches) that block JDM from closing the pocket where his boxing operates. Second, he\'s coming off back-to-back KOs of top-tier names (Edwards R2, Neal R1 with a spinning back elbow) while JDM is coming off a 50-45 sweep and admitted "laziness" in camp. Third, Fighting Nerds prepped a clinch defense (Edwards owned R1 but couldn\'t finish, Prates came back and starched him in R2) — exactly the look JDM would have to sustain over 25 minutes. The path: Prates absorbs an early clinch attempt, lands the straight left or a kick, KO between rounds 1 and 3, or pulls away in stand-up if he survives the wrestling. This collapses if JDM replicates Edwards\' round one and holds it for five full rounds without biting on the stand-up.',
        conviction_score: 7,
        conviction_rationale: 'Conviction 7 because five independent dimensions (physical, stats, momentum, style, qualitative intel) all converge on Prates. Not 8 because JDM is a former champion, BJJ black belt, has been to championship rounds — and has a real path (39%) through sustained wrestling.',
        conviction_breakers: [
          'JDM replicates Edwards\' R1 and holds clinch + takedowns for the full 25 minutes',
          'Prates fights too defensively out of respect for the boxing and never lets the straight left go',
          'JDM grinds it to a decision with wrestling, banks tight cards at home',
          'The Makhachev injury sharpened JDM\'s prep through urgency rather than dulled him',
        ],
        underdog_path: {
          viable: true, probability_estimate: 39,
          key_scenario: 'JDM hits the clinch within the first 90 seconds, executes a takedown the way Edwards did, settles into top control. Repeats the pattern across all five rounds without biting on the stand-up bait. Wins on grappling and control time, with jab pressure when standing. Unanimous decision, Belal blueprint.',
          required_conditions: [
            'Full recovery from any lingering injury from the Makhachev fight',
            'Doesn\'t take the bait to stand and trade with Prates',
            'Cardio for 25 minutes of active clinch wrestling',
            'Defense against the southpaw straight left in transitions',
          ],
          historical_precedent: 'Edwards R1 vs Prates (UFC 322): clinch wrestling, takedown attempt, RNC fishing. It worked for five minutes. JDM would have to sustain the same look for five times longer.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Carlos Prates', odds: '-106 to +100', reasoning: 'Line opened Prates -165 and moved to JDM -120 on heavy Australian public action. Polymarket sits at Prates 61%, in line with our 58% read. Grab Prates before the line stabilizes near pickem. Edge of 7-8% over the implied probability at the books.' },
          { type: 'Method', pick: 'Prates by ITD (Inside the Distance)', odds: '+180 to +220 (estimate)', reasoning: 'Prates has finished 5 of 6 UFC wins by KO/TKO, four of them in rounds 1-2. Real finish probability sits in the 45-50% range. At +180 the implied is 35.7%, edge of 10-15%. Covers KO, TKO, and submission. Best bet on the card.' },
          { type: 'Rounds', pick: 'Over 1.5 rounds', odds: '-200 to -150', reasoning: 'Edwards fell at 1:28 of R2, Neal at 4:59 of R1. JDM has the clinch boxing to survive R1. Prates has stopped trying to wrap everything up in the first round. High probability this gets past the round-and-a-half mark.' },
        ],
        best_bet: { pick: 'Prates by ITD at +180 to +220', reasoning: 'Highest expected edge on the card. Prates is a finishing machine (5 of 6 UFC wins by KO) and he\'s not facing a wrestler like Garry — he\'s facing a striker who\'s going to operate in his space. If he lands once, it\'s a wrap.' },
      },
      key_stats: [
        { value: '7th', label: 'Highest knockdown rate in UFC history', sublabel: '2.1 KD/15 min for Prates. All-time-tier power.' },
        { value: '50-45', label: 'Unanimous cards against JDM', sublabel: 'Makhachev banked 20+ minutes of control time in November.' },
        { value: '+5"', label: 'Reach advantage for Prates', sublabel: '78" vs 73". Geometry is clean.' },
        { value: '78%', label: 'Prates\' finish rate', sublabel: '18 KOs in 23 wins. JDM is at 67%.' },
      ],
      odds: { fighter1_odds: '-120', fighter2_odds: '-106', fighter1_name: 'Della Maddalena', fighter2_name: 'Prates', source: 'Average from FanDuel, DraftKings, and BetMGM as of April 25, 2026. Line opened Prates -165 and moved to JDM -120 on heavy Australian public action. Polymarket sits at Prates 61%.' },
      armadilha: {
        titulo: 'Trap: JDM by Decision',
        descricao: 'The market is going to hammer JDM by decision off his 80% decision rate over the last five fights and the narrative that "he\'s already gone 25 minutes with Belal and Makhachev." Problem is, those decisions came against grapplers (Belal, Makhachev) or against strikers JDM chased (Burns ended in TKO R3). Prates isn\'t going to back up the way Belal did. Volume will be there for both — but damage per shot lives with Prates. JDM by decision asks him to win on terrain Prates has already shown he\'s learned to defend.',
      },
    },
  },
};
