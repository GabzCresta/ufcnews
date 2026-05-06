import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'micallef-vs-gorimbo',
  evento_id: null,
  slug: 'micallef-vs-gorimbo',
  titulo: 'Micallef vs Gorimbo: Australian Prospect vs Sliding Wrestler',
  subtitulo:
    'Jonathan Micallef sits 2-0 in the UFC with a recent first sub (RNC of Elliott), fighting at home in Perth. Themba Gorimbo (35) is on a 0-2 skid after his cardio failed against Wells and Luque finished him with an anaconda in 52s. Identical reach (77"). The veteran\'s back vulnerability lines up perfectly with Micallef\'s RNC.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '6\'0"', envergadura: '77"', idade: 26, academia: 'Sam Hayward AUS' },
      fighter2: { altura: '6\'1"', envergadura: '77"', idade: 35, academia: 'MMA Masters Miami' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decision or Late Sub',
    confidence: 'MEDIUM-HIGH',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Jonathan Micallef', apelido: 'The Captain', record: '9-1-0', ranking: 'Unranked', ultimasLutas: [] },
  fighter2_info: { nome: 'Themba Gorimbo', apelido: 'Mamba', record: '14-6-0', ranking: 'Unranked', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: 'May 2, 2026',
  evento_local: 'RAC Arena, Perth, Australia',
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
      evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
      evento_data: 'May 2, 2026',
      evento_local: 'RAC Arena, Perth, Australia',
      categoria_peso: 'Welterweight (170 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Hometown Prospect vs Sliding Wrestler',
      tagline_sub: 'Micallef 2-0 UFC, at home, age 26. Gorimbo 35, on an 0-2, cardio failed last fight.',
      fighter1: {
        nome_completo: 'Jonathan "The Captain" Micallef',
        apelido: 'The Captain',
        sobrenome: 'Micallef',
        record: '9-1-0',
        ranking: 'Unranked',
        info_extra: 'Werribee, Victoria Australia | 26 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/MICALLEF_JONATHAN_L_01-31.png?itok=UJUPNqDv',
      },
      fighter2: {
        nome_completo: 'Themba "Mamba" Gorimbo',
        apelido: 'Mamba',
        sobrenome: 'Gorimbo',
        record: '14-6-0',
        ranking: 'Unranked',
        info_extra: 'Bikita, Zimbabwe (Miami) | 35 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-10/GORIMBO_THEMBA_L_10-12.png?itok=lte6rgDo',
      },
    },
    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'Tired Veteran vs Young Sub Specialist',
      insight:
        'Gorimbo is a wrestler-grinder who dominated Niko Price (7 of 9 TDs, 9:14 control time) but took an anaconda in 52s from Luque (sub defense exposed) and his cardio failed against Wells UD. 35 years old, 0-2, snap-streak fight. Micallef is 26, with overwhelming momentum (RNC of Elliott + UD over Jousset with a head kick KD), identical reach (77"), at home in Perth. Decision-survivor gate fires: both with high recent decision rates — default predicted_method = Decision. But Gorimbo shooting takedowns against a striker with a sub game (Micallef RNC + DWCS triangle) is a classic trap.',
      tension: {
        truth_a: 'Gorimbo offensive wrestler (TD avg 1.32, 7 of 9 vs Price), heavy overhand right (KO of Rodriguez R1 0:32), EFC Zimbabwe champion background, Dwayne "The Rock" story line.',
        truth_b: 'Micallef 26 years old, on the rise, hometown Perth, transition sub specialist (RNC after the back take vs Elliott), identical reach neutralizes the physical edge.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Jonathan Micallef', color: 'red', momentum_score: 9, momentum_label: 'Hot', momentum_trend: 'ascending',
        momentum_note: '2-0 UFC. Win over Oban Elliott by RNC R2 3:31 at UFC 325 (Jan 2026) — was losing the striking R1 and early R2, flipped it via clinch + the only takedown of the fight + back take. Before that: UD over Jousset at UFC 312 Feb 2025 (R1 head kick knockdown). Style: primary volume striker with subs in transition.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Oban Elliott', result: 'W', method: 'Sub R2 (RNC 3:31)', opponent_rank: 'UFC active', quality_score: 2, quality_label: 'Average', note: 'Flipped R1 striking via clinch + back take.' },
          { date: 'Feb 2025', opponent: 'Kevin Jousset', result: 'W', method: 'Unanimous Decision (29-28 x3)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'R1 head kick knockdown. UFC 312.' },
          { date: 'Oct 2024', opponent: 'Mohamed Ado', result: 'W', method: 'Technical sub (triangle)', opponent_rank: 'DWCS', quality_score: 1, quality_label: 'Poor', note: 'DWCS contract.' },
          { date: 'Pre-UFC', opponent: 'Demolition WW + Hex', result: 'W', method: '3x amateur champion', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'Australian regional.' },
        ],
      },
      fighter2: {
        nome: 'Themba Gorimbo', color: 'blue', momentum_score: 3, momentum_label: 'Sliding', momentum_trend: 'descending',
        momentum_note: '0-2 skid. Wells UD Nov 2025 (cardio failed after multiple TD attempts), Luque sub R1 anaconda 0:52 Dec 2024 (sub defense exposed). Before: 4 straight wins including Niko Price UD (7 of 9 TDs, 9:14 control time). 35 years old.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Jeremiah Wells', result: 'L', method: 'Unanimous Decision (29-28 x3)', opponent_rank: 'UFC active', quality_score: 3, quality_label: 'Good', note: 'Cardio failed after multiple TD shots. Wells mounted in R2.' },
          { date: 'Dec 2024', opponent: 'Vicente Luque', result: 'L', method: 'Sub R1 (anaconda 0:52)', opponent_rank: 'Top 15 WW vet', quality_score: 4, quality_label: 'Very Good', note: 'Dropped early + guillotine converted to anaconda.' },
          { date: 'Oct 2024', opponent: 'Niko Price', result: 'W', method: 'Unanimous Decision (30-27 x3)', opponent_rank: 'Vet', quality_score: 3, quality_label: 'Good', note: '7 of 9 TDs, 9:14 control time. Domination.' },
          { date: 'May 2024', opponent: 'Ramiz Brahimaj', result: 'W', method: 'Unanimous Decision (30-27 x3)', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Average', note: 'Stuffed TDs + leg kicks.' },
          { date: 'Feb 2024', opponent: 'Pete Rodriguez', result: 'W', method: 'TKO R1 (0:32)', opponent_rank: 'Debutant', quality_score: 1, quality_label: 'Poor', note: 'Overhand right + GnP. R1 power.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Micallef', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '2W-0L UFC', contra_top5: '0W-0L' },
      fighter2: { nome: 'Gorimbo', media_oponentes: 3, media_oponentes_label: 'Good', aproveitamento: '3W-2L (last 5)', contra_top5: '0W-1L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'No common opponents. Gorimbo faced higher calibre (Luque, Wells, Price) but failed against the top tier. Gorimbo\'s stats are built on a mix: Niko Price (declining), Brahimaj (regional). When he stepped up (Luque, Wells), he lost.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 4.77, valueB: 2.30, maxVal: 6, format: 'decimal', note: 'Micallef volume edge. Gorimbo primary wrestler.' },
        { label: 'Strike Accuracy (%)', valueA: 45, valueB: 60, maxVal: 100, format: 'percent', note: 'Gorimbo accuracy higher but volume lower.' },
        { label: 'Takedowns per 15 Min', valueA: 0.5, valueB: 1.32, maxVal: 5, format: 'decimal', note: 'Gorimbo offensive wrestler.' },
        { label: 'Takedown Defense (%)', valueA: 50, valueB: 0, maxVal: 100, format: 'percent', note: 'Micallef small sample. Gorimbo TDD not captured.' },
        { label: 'Submissions per 15 Min', valueA: 0.8, valueB: 0, maxVal: 3, format: 'decimal', note: 'Micallef has an offensive sub avg.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '26', fighter2: '35', note: 'Micallef 9 years younger. Critical.' },
        { label: 'Height', fighter1: '6\'0"', fighter2: '6\'1"', note: 'Gorimbo 1 inch taller.' },
        { label: 'Reach', fighter1: '77"', fighter2: '77"', note: 'IDENTICAL reach.' },
        { label: 'Stance', fighter1: 'Southpaw', fighter2: 'Orthodox', note: 'Asymmetric stance.' },
        { label: 'Camp', fighter1: 'Sam Hayward AUS', fighter2: 'MMA Masters Miami (Rock partner)', note: null },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume Striking', advantage: 'fighter1', gap: 3, note: 'SLpM 4.77 vs 2.30. Significant.' },
        { label: 'Offensive Wrestling', advantage: 'fighter2', gap: 3, note: 'TD avg 1.32 + 7 of 9 vs Price.' },
        { label: 'Offensive Sub Game', advantage: 'fighter1', gap: 2, note: 'RNC + DWCS triangle. Gorimbo has zero subs.' },
        { label: 'Submission Defense', advantage: 'fighter1', gap: 3, note: 'Gorimbo gave up the anaconda 52s + arm-triangle threat.' },
        { label: 'Cardio (3R)', advantage: 'fighter1', gap: 3, note: 'Gorimbo 35 years old + cardio failed vs Wells.' },
        { label: 'R1 Power', advantage: 'fighter2', gap: 1, note: 'Overhand right (KO of Rodriguez 32s).' },
      ],
      summary: 'Micallef wins almost everything. Gorimbo\'s only real path is the overhand right early.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Micallef', ko_tko: { count: 3, percent: 33 }, submission: { count: 4, percent: 44 }, decision: { count: 2, percent: 22 }, total_wins: 9 },
      fighter2: { nome: 'Gorimbo', ko_tko: { count: 5, percent: 36 }, submission: { count: 0, percent: 0 }, decision: { count: 9, percent: 64 }, total_wins: 14 },
      insight: 'Gorimbo 64% UFC decisions, 0 offensive subs. Clean stylistic edge for Micallef in the ground game.',
    },
    previsao_final: {
      winner_name: 'Jonathan Micallef', winner_side: 'fighter1',
      predicted_method: 'Decision or Late Sub', confidence_score: 7, confidence_label: 'MEDIUM-HIGH',
      explanation:
        'Pick is Micallef by decision or late sub. Advantages: -9 years on age, hometown Perth, overwhelming momentum, superior striking volume (4.77 vs 2.30 SLpM), Gorimbo cardio failure last fight + sub defense exposed (anaconda 52s). Decision-survivor gate fires — both high decision rate. But Micallef has a viable (c) exception: power threat via head kick KD vs Jousset + transition sub specialist. Gorimbo shooting takedowns against a striker with a sub game = arm exactly the way Luque finished him.',
      x_factor: {
        title: 'Veteran cardio fades early',
        description: 'Gorimbo 35 + cardio failed vs Wells in rounds 2-3. If Micallef sustains volume in R1, R2-R3 are all his.',
      },
      upset_alert: {
        title: 'Gorimbo lands the overhand right early',
        description: 'KO of Rodriguez R1 0:32 with the overhand. Real power exists. Around 25%.',
      },
      probabilities: { fighter1: { nome: 'Micallef', percent: 72 }, fighter2: { nome: 'Gorimbo', percent: 25 }, draw: 3 },
      conviction: {
        thesis:
          'The thesis: Jonathan Micallef wins because he\'s 9 years younger (26 vs 35), home in Perth, with superior striking volume (4.77 SLpM), elite transition sub game (RNC + triangle), and Gorimbo\'s cardio failed vs Wells + sub defense was exposed (anaconda 52s by Luque). Path: dominate volume in R1, defend the early TD attempts, find the back in a scramble OR win cards on volume across three rounds. Collapses if Gorimbo lands the overhand right early or hits repeated takedowns in the first 5 minutes.',
        conviction_score: 7,
        conviction_rationale: 'Conviction 7 because 4 dimensions converge (physical/age, momentum, style, qualitative intel/hometown). Gate 2 fired but Micallef has a (c) exception via power KD threat. Not 8 because Gorimbo wrestling can control rounds.',
        conviction_breakers: [
          'Gorimbo lands the overhand right early',
          'Repeated TDs + control time wins cards',
          'Micallef cardio dips (tiny UFC sample)',
          'Decisions tilt toward the veteran',
        ],
        underdog_path: {
          viable: true, probability_estimate: 25,
          key_scenario: 'Gorimbo leverages the first 90 seconds for the overhand right or a TD attempt. On top control he banks 9-10 minutes of control time the way he did vs Price. OR lands a clean overhand in R1.',
          required_conditions: ['Repeated TDs with control time', 'Don\'t cede the back in a scramble', 'Cardio holds for 15 minutes'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Method', pick: 'Micallef by Decision', odds: '-110 to -130', reasoning: 'Decision-survivor gate fired. Volume edge + age cardio. Around 50%.' },
          { type: 'Method (Edge)', pick: 'Micallef by Submission', odds: '+250 to +350', reasoning: 'Transition sub specialist + Gorimbo sub defense exposed (anaconda 52s + arm-triangle threat). Around 25%, pays plenty.' },
          { type: 'Rounds', pick: 'Over 2.5 Rounds', odds: '-150 to -180', reasoning: 'Gorimbo holds 3R historically. Micallef sub R2 vs Elliott. Around 70%.' },
          { type: 'Avoid', pick: 'Gorimbo ML at +260', odds: '+260', reasoning: 'Cardio failed last fight + age + sub defense exposed = longshot only, not main.' },
        ],
        best_bet: { pick: 'Micallef by Submission at +250 to +350', reasoning: 'Real edge. Gorimbo sub defense exposed (Luque anaconda 52s, Wells arm-triangle threat) + Micallef transition sub specialist with RNC + DWCS triangle. Real probability ~25-30%, pays 2.5-4x.' },
      },
      key_stats: [
        { value: '9 years', label: 'Age gap', sublabel: 'Micallef 26 vs Gorimbo 35.' },
        { value: '0:52', label: 'Luque anaconda time', sublabel: 'Gorimbo\'s sub defense is a real gap.' },
        { value: '64%', label: 'Gorimbo\'s UFC decision rate', sublabel: 'Decision-survivor gate fires the default.' },
        { value: '4.77', label: 'Micallef SLpM', sublabel: '2x the volume of Gorimbo (2.30).' },
      ],
      odds: { fighter1_odds: '-330', fighter2_odds: '+260', fighter1_name: 'Micallef', fighter2_name: 'Gorimbo', source: 'DraftKings as of April 25, 2026.' },
      armadilha: {
        titulo: 'Trap: Gorimbo by TD/Decision at +260',
        descricao: 'Market offers and the public hammers it on the wrestler narrative + The Rock story line. But Gorimbo\'s cardio failed last fight (Wells), sub defense exposed (Luque 52s), 35 years old. Gorimbo\'s stats are built on a mix: Niko Price (declining), Brahimaj (regional). When he stepped up (Luque, Wells), he failed. Micallef is a rising prospect, not a fallen name. Longshot is fine as a hedge, not as a main play.',
      },
    },
  },
};
