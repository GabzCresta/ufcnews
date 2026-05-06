import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'mar-fan-vs-steele',
  evento_id: null,
  slug: 'mar-fan-vs-steele',
  titulo: 'Mar Fan vs Steele: Hometown Debutant vs CJJ Black Belt',
  subtitulo:
    'Dom Mar Fan UFC debutant, 9-2 with a 5-fight win streak, fighting at home in Perth. Kody Steele 0-1 in the UFC after Fight of the Night vs Rongzhu, 15-month layoff, Combat Jiu-Jitsu World Champion 2019. Mar Fan\'s 20% TDD is a real vulnerability against pure grappling pedigree.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'11"', envergadura: '75"', idade: 26, academia: 'Team Compton Brisbane' },
      fighter2: { altura: '5\'9"', envergadura: '71"', idade: 31, academia: 'Syndicate MMA Las Vegas' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decision or Late TKO',
    confidence: 'MEDIUM',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Dom Mar Fan', apelido: 'Street Buddha', record: '9-2-0', ranking: 'Unranked', ultimasLutas: [] },
  fighter2_info: { nome: 'Kody Steele', record: '7-1-0', ranking: 'Unranked', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: 'May 2, 2026',
  evento_local: 'RAC Arena, Perth, Australia',
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
      evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
      evento_data: 'May 2, 2026',
      evento_local: 'RAC Arena, Perth, Australia',
      categoria_peso: 'Lightweight (155 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Hometown Debutant vs CJJ Champ',
      tagline_sub: 'Mar Fan 5-fight Road to UFC streak. Steele CJJ World Champ 2019 + 15-month layoff. Debutant TDD 20% vulnerability.',
      fighter1: {
        nome_completo: 'Dom "Street Buddha" Mar Fan',
        apelido: 'Street Buddha',
        sobrenome: 'Mar Fan',
        record: '9-2-0',
        ranking: 'Unranked',
        info_extra: 'Brisbane, Queensland Australia | 26 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/MAR_FAN_DOM_R_01-31.png?itok=FLJtw-SZ',
      },
      fighter2: {
        nome_completo: 'Kody Steele',
        apelido: '',
        sobrenome: 'Steele',
        record: '7-1-0',
        ranking: 'Unranked',
        info_extra: 'Port Angeles, Washington (Vegas) | 31 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/STEELE_KODY_L_10-08.png?itok=DPfk8c-Z',
      },
    },
    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'Grappling Pedigree vs Reach + Hometown',
      insight:
        'Mar Fan is a UFC debutant with a 5-fight streak via Road to UFC contract. BJJ brown + athletic striker. Steele has absurd grappling pedigree (CJJ World Champion 2019, EBI brown belt champ, ADCC trials silver, beat DJ Jackson) but said after his UFC debut that "my jiu-jitsu didn\'t help me in a primarily striking fight." Quick fact: Mar Fan\'s 2 pro losses are BOTH to Quillan Salkilld (same card!) by RNC. Mar Fan\'s 20% TDD is a real red flag against a true grappler — but Steele has publicly stated he\'s in striking mode. If it stays standing, Mar Fan\'s 4 inches of reach + 2 inches of height + 5-year youth = wins. If it goes wrestling, Steele black belt + CJJ champ vs brown belt = serious problem.',
      tension: {
        truth_a: 'Mar Fan 26 years old, on the rise, hometown Perth, 4 inches of reach, 5-fight win streak (3 UDs Road to UFC + regional finishes).',
        truth_b: 'Steele CJJ World Champion + EBI brown belt + beat DJ Jackson at Third Coast. HS state wrestling champ. If he goes grappling, Mar Fan\'s 20% TDD is a massive gap.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Dom Mar Fan', color: 'red', momentum_score: 8, momentum_label: 'Hot', momentum_trend: 'ascending',
        momentum_note: '5-fight win streak, 0-0 UFC (debutant). UFC 325 (Road to UFC S4 Final) UD over Kim in Jan 2026 — fell behind in R1 (Kim found the back) but flipped it and finished the striking in R3. Before that: UD over Park (RtUFC semifinal), RNC sub over Pratt at Eternal 91, KO over Rogers Eternal 86, **L Salkilld R2 RNC sub** Eternal 82.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'SangWook Kim', result: 'W', method: 'Unanimous Decision (30-27 x3)', opponent_rank: 'RtUFC final', quality_score: 2, quality_label: 'Average', note: 'Road to UFC S4 final. Reversed an R1 deficit.' },
          { date: '2025', opponent: 'Jae Hyun Park', result: 'W', method: 'Unanimous Decision', opponent_rank: 'RtUFC', quality_score: 2, quality_label: 'Average', note: 'RtUFC semifinal.' },
          { date: 'Nov 2024', opponent: 'Tom Pratt', result: 'W', method: 'Sub RNC', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'Eternal 91.' },
          { date: 'Jun 2024', opponent: 'Tim Rogers', result: 'W', method: 'KO', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'Eternal 86.' },
          { date: 'Feb 2024', opponent: 'Quillan Salkilld', result: 'L', method: 'Sub R2 (RNC 3:03)', opponent_rank: 'Salkilld', quality_score: 4, quality_label: 'Very Good', note: 'Eternal 82 title. RNC.' },
        ],
      },
      fighter2: {
        nome: 'Kody Steele', color: 'blue', momentum_score: 5, momentum_label: 'Stable (with caveats)', momentum_trend: 'stable',
        momentum_note: '0-1 UFC. UFC 312 debut Feb 2025 = UD loss vs Rongzhu (Fight of the Night, $50K bonus). 15 MONTHS OFF entering this. Injury history (knee Glory MMA 2022, out one year). 31 years old. CJJ World Champion 2019 + EBI brown belt + ADCC trials silver.',
        recent_fights: [
          { date: 'Feb 2025', opponent: 'Rongzhu', result: 'L', method: 'Unanimous Decision (30-27 x3)', opponent_rank: 'UFC active', quality_score: 2, quality_label: 'Average', note: 'UFC debut. Fight of the Night.' },
          { date: 'Oct 2024', opponent: 'Chasen Blair', result: 'W', method: 'TKO R2 (4:07, left hook to liver)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'DWCS contract.' },
          { date: 'Apr 2024', opponent: 'Alejandro Martinez', result: 'W', method: 'TKO R3 (2:09)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'Fury FC 89.' },
          { date: 'Pre-2024', opponent: 'Regional', result: 'W', method: 'Submission + 3 stops', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'Pre-UFC 6-0 amateur run.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Mar Fan', media_oponentes: 1, media_oponentes_label: 'Poor', aproveitamento: '5W-0L recent regional', contra_top5: '0W-0L' },
      fighter2: { nome: 'Steele', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '2W-2L recent (UFC + DWCS)', contra_top5: '0W-0L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'No common opponents. Both with regional/DWCS calibre recently. Tiny sample.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 2.27, valueB: 5.27, maxVal: 6, format: 'decimal', note: 'Steele\'s SLpM is cherry-picked from the slugfest with Rongzhu. Not sustainable.' },
        { label: 'Strike Defense (%)', valueA: 34, valueB: 0, maxVal: 100, format: 'percent', note: 'Mar Fan\'s 34% strike def is a red flag. Steele not captured.' },
        { label: 'Takedowns per 15 Min', valueA: 0, valueB: 0, maxVal: 5, format: 'decimal', note: 'Steele 1 TD vs Rongzhu in 90s.' },
        { label: 'Takedown Defense (%)', valueA: 20, valueB: 0, maxVal: 100, format: 'percent', note: 'Mar Fan TDD 20% is a MASSIVE flag.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '26', fighter2: '31', note: 'Mar Fan 5 years younger.' },
        { label: 'Height', fighter1: '5\'11"', fighter2: '5\'9"', note: 'Mar Fan 2 inches taller.' },
        { label: 'Reach', fighter1: '75"', fighter2: '71"', note: 'Mar Fan 4 inches more reach. Clean edge.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'N/A', note: null },
        { label: 'Background', fighter1: 'BJJ brown + striker', fighter2: 'CJJ World Champ 2019 + HS wrestling', note: 'Important stylistic clash.' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume Striking', advantage: 'fighter2', gap: 1, note: 'Steele cherry-picked but showed volume vs Rongzhu.' },
        { label: 'Reach + Geometry', advantage: 'fighter1', gap: 3, note: '4 inches of reach kills the pocket Steele needs.' },
        { label: 'Offensive Wrestling', advantage: 'fighter2', gap: 3, note: 'HS state champion + DWCS TD.' },
        { label: 'Sub Game', advantage: 'fighter2', gap: 4, note: 'CJJ World Champ + EBI + ADCC trials.' },
        { label: 'Cardio / Activity', advantage: 'fighter1', gap: 2, note: 'Mar Fan 3 fights in 12 months. Steele 15 months off.' },
        { label: 'Hometown', advantage: 'fighter1', gap: 3, note: 'Perth.' },
      ],
      summary: 'Standing, Mar Fan wins (reach + age). On the floor, Steele dominates. Whoever dictates location wins — and Steele said he wants to strike.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Mar Fan', ko_tko: { count: 2, percent: 22 }, submission: { count: 2, percent: 22 }, decision: { count: 5, percent: 56 }, total_wins: 9 },
      fighter2: { nome: 'Steele', ko_tko: { count: 4, percent: 57 }, submission: { count: 1, percent: 14 }, decision: { count: 2, percent: 29 }, total_wins: 7 },
      insight: 'Mar Fan 56% decisions. Steele more of a finisher but offensive sub avg only 14% (sub specialist in the grappling room, not in MMA). Strong decision lean.',
    },
    previsao_final: {
      winner_name: 'Dom Mar Fan', winner_side: 'fighter1',
      predicted_method: 'Decision or Late TKO', confidence_score: 6, confidence_label: 'MEDIUM',
      explanation:
        'Pick is Mar Fan by decision or late TKO at conviction 6. Advantages: -5 years on age, +4 inches reach, +2 inches height, hometown Perth, 5-fight win streak vs Steele\'s 15 months off + post-loss recovery question. Steele has absurd grappling pedigree (CJJ World Champion is no exaggeration) — but stated after his UFC debut that jiu-jitsu didn\'t help him in a striking fight. Honest: Mar Fan\'s 20% TDD is a real vulnerability if Steele goes wrestling. Pure striking, Mar Fan wins on volume + reach.',
      x_factor: {
        title: 'Steele picks the location',
        description: 'If Steele enters in grappling mode like vs Mingaj DWCS, Mar Fan\'s 20% TDD is exploitable. If he comes in striking mode like vs Rongzhu, he loses to the reach. Whoever picks where the fight happens wins.',
      },
      upset_alert: {
        title: 'Steele lands repeated TDs + sub',
        description: 'CJJ World Champion is not hype. HS state wrestling champion. Goes grappling, Mar Fan TDD 20% collapses and Steele finishes on the floor. Around 37%.',
      },
      probabilities: { fighter1: { nome: 'Mar Fan', percent: 60 }, fighter2: { nome: 'Steele', percent: 37 }, draw: 3 },
      conviction: {
        thesis:
          'The thesis: Dom Mar Fan wins because he\'s 5 years younger, owns 4 inches of reach, fights at home in Perth, has 5-fight momentum, and Steele arrives off 15 months at 31 stating jiu-jitsu didn\'t help him in UFC striking. Path: works distance with the jab, defends early TDs, banks volume across three rounds. Collapses if Steele picks grappling mode and lands repeated TDs.',
        conviction_score: 6,
        conviction_rationale: 'Conviction 6 because the advantages are real but Mar Fan\'s 20% TDD is a structural vulnerability against a CJJ World Champ. Steele said he\'s in striking mode but can flip. Not 7 because of the grappling pedigree gap.',
        conviction_breakers: [
          'Steele picks grappling mode after the 15-month layoff',
          'Repeated TDs + sub in a scramble',
          'Mar Fan athletic striker but TDD collapses',
          'Tight cards favor Steele on volume',
        ],
        underdog_path: {
          viable: true, probability_estimate: 37,
          key_scenario: 'Steele enters with decisive grappling mode (opposite of his Rongzhu strategy), lands repeated TDs, top control, sub in a scramble (CJJ pedigree).',
          required_conditions: ['Repeated TDs against Mar Fan\'s 20% TDD', 'Pick grappling over striking', 'Find a finish on the floor before R3'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Method', pick: 'Mar Fan by Decision', odds: '-110 to -150', reasoning: 'UFC decision lean + superior volume + hometown advantage. Around 50%.' },
          { type: 'Rounds', pick: 'Over 2.5 Rounds', odds: '-150 to -180', reasoning: 'Mar Fan 56% decisions. Steele Fight of the Night vs Rongzhu (full 3R). Around 70%.' },
          { type: 'Longshot', pick: 'Steele by Sub', odds: '+400 to +600', reasoning: 'CJJ World Champ is not hype. Mar Fan TDD 20%. Around 15-20%, pays 4-6x.' },
          { type: 'Moneyline', pick: 'Mar Fan', odds: '-160 to -200', reasoning: 'Moderate edge across the board.' },
        ],
        best_bet: { pick: 'Over 2.5 Rounds at -150 to -180', reasoning: 'Clear decision lean. Steele FOTN vs Rongzhu showed 3R cardio. Mar Fan 3 recent decisions. Most defensible play.' },
      },
      key_stats: [
        { value: '+4"', label: 'Mar Fan reach', sublabel: 'Kills the pocket Steele operates in.' },
        { value: '15 months', label: 'Steele layoff', sublabel: 'Post-Rongzhu UD + injury history.' },
        { value: 'CJJ Champ', label: 'Steele pedigree', sublabel: 'Combat Jiu-Jitsu World Champion 2019.' },
        { value: '20%', label: 'Mar Fan TDD', sublabel: 'Real vulnerability against a grappler.' },
      ],
      odds: { fighter1_odds: '-180', fighter2_odds: '+150', fighter1_name: 'Mar Fan', fighter2_name: 'Steele', source: 'Opening lines expected. Best Fight Odds has the event but specific snapshot not captured.' },
      armadilha: {
        titulo: 'Trap: Steele by Submission at +400',
        descricao: 'Market pays it and the public hammers it on the absurd CJJ pedigree (World Champion 2019, EBI, ADCC). The trap: Steele said publicly after his UFC debut that "jiu-jitsu didn\'t help me in a primarily striking fight" — meaning the mindset isn\'t in grappling mode. To submit, he\'d need to flip his fighting strategy. Longshot is fine as a hedge if you believe in the mind-shift, but as a main play it\'s a trap.',
      },
    },
  },
};
