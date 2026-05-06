import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'tuivasa-vs-sutherland',
  evento_id: null,
  slug: 'tuivasa-vs-sutherland',
  titulo: 'Tuivasa vs Sutherland: Two Broken Fighters, One at Home',
  subtitulo:
    'Tai Tuivasa rolls in off six straight losses (UFC HW skid record), 1-6 in his last seven. Louie Sutherland is a 9-day short-notice replacement for Sean Sharaf (broken nose), 0-2 in the UFC with two R1 finishes against him. Short notice UK-to-AUS off a March TKO. Honest take: Tuivasa\'s decline is real, hometown crowd or not.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '6\'2"', envergadura: '75"', idade: 33, academia: 'Plinio Cruz (recently)' },
      fighter2: { altura: '6\'3"', envergadura: '75"', idade: 32, academia: 'Team Titan (UK)' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'KO/TKO R1-R2',
    confidence: 'LOW',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Tai Tuivasa',
    apelido: 'Bam Bam',
    record: '15-9-0',
    ranking: 'Unranked',
    ultimasLutas: [
      { result: 'L', opponent: 'Tallison Teixeira', method: 'Unanimous Decision (29-28 x3)', event: 'UFC 325 (Jan 2026)' },
      { result: 'L', opponent: 'Jairzinho Rozenstruik', method: 'Split Decision', event: 'UFC 305 Perth (Aug 2024)' },
      { result: 'L', opponent: 'Marcin Tybura', method: 'Sub R1 (RNC, 4:08)', event: 'UFC FN (Mar 2024)' },
    ],
  },
  fighter2_info: {
    nome: 'Louie Sutherland',
    apelido: 'The Vanilla Gorilla',
    record: '10-5-0',
    ranking: 'Unranked',
    ultimasLutas: [
      { result: 'L', opponent: 'Brando Pericic', method: 'TKO R1 (1:48)', event: 'UFC London (Mar 2026)' },
      { result: 'L', opponent: 'Valter Walker', method: 'Sub R1 (heel hook, 1:24)', event: 'UFC 321 (Oct 2025)' },
      { result: 'W', opponent: 'Pre-UFC opponents', method: 'KO/TKO regional', event: 'Levels Fight League' },
    ],
  },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: 'May 2, 2026',
  evento_local: 'RAC Arena, Perth, Australia',
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
      evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
      evento_data: 'May 2, 2026',
      evento_local: 'RAC Arena, Perth, Australia',
      categoria_peso: 'Heavyweight (265 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Two Broken Fighters, One at Home',
      tagline_sub: 'Tuivasa on a UFC HW skid record. Sutherland 0-2 UFC + short notice. Coin flip despite the home crowd.',
      fighter1: {
        nome_completo: 'Tai "Bam Bam" Tuivasa',
        apelido: 'Bam Bam',
        sobrenome: 'Tuivasa',
        record: '15-9-0',
        ranking: 'Unranked',
        info_extra: 'Sydney, Australia (Indigenous Wiradjuri / Samoan) | 33 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/TUIVASA_TAI_L_01-31.png?itok=C37lDiCD',
      },
      fighter2: {
        nome_completo: 'Louie "The Vanilla Gorilla" Sutherland',
        apelido: 'The Vanilla Gorilla',
        sobrenome: 'Sutherland',
        record: '10-5-0',
        ranking: 'Unranked',
        info_extra: 'Scotland (London) | 32 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-03/SUTHERLAND_LOUIE_L_03-21.png?itok=ta-V7HZu',
      },
    },
    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'The Hometown Crowd Didn\'t Save Him Last Time',
      insight:
        'Tuivasa\'s fan-favorite status hides real decline. 1-6 over his last seven, winless since 2022. His last UFC Perth fight (Roze split decision in Aug 2024) at this SAME arena was also a loss (15 of 15 media outlets scored it for Roze). Volume is down (3.77 SLpM vs Teixeira), defense is leaky (SApM 4.86 > SLpM 4.41 — absorbs more than he lands), chin showing cracks (Pavlovich KO R1 Dec 2022). Sutherland is a short-notice replacement (UK to AUS off a March TKO), 0-2 in the UFC with two R1 finishes against him. But Sutherland is a striker (no offensive grappling), and 3 of Tuivasa\'s 6 losses are grappling — the stylistic angle favors Tuivasa standing.',
      tension: {
        truth_a: 'Tuivasa fights at home in Perth, new camp under Plinio Cruz (Pereira coach), genuine KO power (Bonza Bombs), Sutherland is 0-2 with a questionable chin, 9-day notice + 6-week turnaround.',
        truth_b: 'Tuivasa 1-6 in his last seven, lost to Roze in this same arena, leaky defense, the decline is real and measured. Sutherland has regional KO power and Tuivasa absorbs more than he lands.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Tai Tuivasa', color: 'red', momentum_score: 2, momentum_label: 'Free Fall', momentum_trend: 'descending',
        momentum_note: 'UFC HW losing-streak record: six straight losses. Returned from a 17-month layoff overweight (~40 lbs over) against Teixeira in January, lost the UD. Before that: Pavlovich KO R1, Volkov Sub R2, Tybura Sub R1, Roze SD in this same Perth arena. Fans called for retirement after UFC 325. UFC future reportedly on the line.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Tallison Teixeira', result: 'L', method: 'Unanimous Decision (29-28 x3)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Comeback after a 17-month layoff. Reported to be overweight.' },
          { date: 'Aug 2024', opponent: 'Jairzinho Rozenstruik', result: 'L', method: 'Split Decision', opponent_rank: 'Top 15 HW', quality_score: 3, quality_label: 'Good', note: 'SAME ARENA Perth. 15 of 15 media outlets scored it for Roze.' },
          { date: 'Mar 2024', opponent: 'Marcin Tybura', result: 'L', method: 'Sub R1 (RNC, 4:08)', opponent_rank: 'Top 15 HW', quality_score: 3, quality_label: 'Good', note: 'Main event finish.' },
          { date: 'Sep 2023', opponent: 'Alexander Volkov', result: 'L', method: 'Sub R2 (ezekiel)', opponent_rank: 'Top 10 HW', quality_score: 4, quality_label: 'Very Good', note: 'Grappling vulnerability.' },
          { date: 'Dec 2022', opponent: 'Sergei Pavlovich', result: 'L', method: 'KO R1', opponent_rank: 'Top 5 HW', quality_score: 5, quality_label: 'Excellent', note: 'Devastating KO. Chin starting to crack.' },
        ],
      },
      fighter2: {
        nome: 'Louie Sutherland', color: 'blue', momentum_score: 3, momentum_label: 'Sliding', momentum_trend: 'descending',
        momentum_note: '0-2 in the UFC, both R1 finishes. Submitted via heel hook by Walker in Oct 2025 (ground vulnerability). TKO\'d standing by Pericic at 1:48 of R1 in Mar 2026 (came forward, got countered, covered up). Short notice 9 days off the TKO (only 6-week turnaround). Pre-UFC: LFL HW champion, 80% finish rate (8 KOs in 10 wins, 0 subs).',
        recent_fights: [
          { date: 'Mar 2026', opponent: 'Brando Pericic', result: 'L', method: 'TKO R1 (1:48)', opponent_rank: 'N/R prospect', quality_score: 1, quality_label: 'Poor', note: 'Came forward, got countered, ground-and-pound stoppage.' },
          { date: 'Oct 2025', opponent: 'Valter Walker', result: 'L', method: 'Sub R1 (heel hook, 1:24)', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Average', note: 'Walker\'s 4th heel hook in a row. Ground vulnerability.' },
          { date: 'Pre-UFC', opponent: 'LFL champion run', result: 'W', method: 'Multiple KO/TKO', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'LFL HW title. 80% finish rate at the regional level.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Tuivasa', media_oponentes: 4, media_oponentes_label: 'Very Good', aproveitamento: '0W-5L (last 5)', contra_top5: '0W-2L' },
      fighter2: { nome: 'Sutherland', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '0W-2L UFC', contra_top5: '0W-0L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'R2 Tier 1 calibre flag: Tuivasa faced top tier (Pavlovich, Volkov, Tybura, Roze, Teixeira) vs Sutherland 0-2 with regional/prospect calibre. 2-tier gap in favor of Tuivasa (predicted winner). But Tier 2 doesn\'t fire — Tuivasa is 1-6 in his last seven, the high calibre doesn\'t translate to recent performance.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 4.41, valueB: 0, maxVal: 6, format: 'decimal', note: 'Sutherland\'s UFCStats SLpM not captured (sample of 2 R1 fights).' },
        { label: 'Sig. Strikes Absorbed/Min', valueA: 4.86, valueB: 0, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Tuivasa absorbs MORE than he lands — defensive red flag.' },
        { label: 'Strike Defense (%)', valueA: 59, valueB: 0, maxVal: 100, format: 'percent', note: 'Sutherland sample minimal.' },
        { label: 'Takedowns per 15 Min', valueA: 3.39, valueB: 0, maxVal: 5, format: 'decimal', note: 'Tuivasa TD avg 3.39 but TD def 71% (rarely uses it).' },
        { label: 'Takedown Defense (%)', valueA: 71, valueB: 0, maxVal: 100, format: 'percent', note: 'Tuivasa TDD 71% on paper but lost 3 fights to grappling.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '33', fighter2: '32', note: 'Similar ages.' },
        { label: 'Height', fighter1: '6\'2"', fighter2: '6\'3"', note: 'Sutherland 1 inch taller.' },
        { label: 'Reach', fighter1: '75"', fighter2: '75"', note: 'Identical reach.' },
        { label: 'Stance', fighter1: 'Southpaw', fighter2: 'Orthodox', note: 'Asymmetric stance.' },
        { label: 'Background', fighter1: 'Ex-rugby league', fighter2: 'Ex-rugby Scotland youth + boxing', note: 'Both contact-sport athletic backgrounds.' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Knockout Power', advantage: 'fighter1', gap: 2, note: 'Tuivasa\'s "Bonza Bombs" are historical. Sutherland\'s KOs are regional.' },
        { label: 'Striking Defense', advantage: 'fighter2', gap: 1, note: 'Tuivasa SApM > SLpM. Sutherland sample minimal.' },
        { label: 'Wrestling / Clinch', advantage: 'even', gap: 0, note: 'Neither is a primary wrestler. Sutherland zero offensive subs.' },
        { label: 'Submission Defense', advantage: 'fighter2', gap: 2, note: 'Tuivasa 3 grappling losses. Sutherland 1 recent sub loss too.' },
        { label: 'Cardio / Age', advantage: 'fighter2', gap: 1, note: 'Sutherland 6-week turnaround off the TKO. Tuivasa 3 months off the UD.' },
        { label: 'UFC Experience', advantage: 'fighter1', gap: 4, note: 'Tuivasa 17 UFC fights. Sutherland 2.' },
      ],
      summary: 'Tuivasa\'s power + UFC experience. Sutherland\'s geometry + identical reach + chin never tested at HW top tier. Real stylistic coin flip despite the narratives.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Tuivasa', ko_tko: { count: 12, percent: 80 }, submission: { count: 0, percent: 0 }, decision: { count: 3, percent: 20 }, total_wins: 15 },
      fighter2: { nome: 'Sutherland', ko_tko: { count: 8, percent: 80 }, submission: { count: 0, percent: 0 }, decision: { count: 2, percent: 20 }, total_wins: 10 },
      insight: 'Identical distribution: 80% KO, 0% sub, 20% decision. Pure striking matchup. Combined finish rate is high + HW base = Under 1.5 and ITD are mathematical plays.',
    },
    previsao_final: {
      winner_name: 'Tai Tuivasa', winner_side: 'fighter1',
      predicted_method: 'KO/TKO R1-R2', confidence_score: 5, confidence_label: 'LOW',
      explanation:
        'Pick is Tuivasa by KO/TKO in R1-R2 at conviction 5 (competitive fight, not a gimme). The advantages: overwhelming UFC experience (17 fights vs 2), tested top-tier power, hometown Perth, new camp under Plinio Cruz. The stylistic angle helps: 3 of Tuivasa\'s 6 losses are grappling, and Sutherland is a pure striker (zero offensive subs). Standing against a striker, Tuivasa has more tested tools. But: Tuivasa absorbs more than he lands (SApM > SLpM), 1-6 in his last seven, lost to Roze in this same arena. Sutherland has regional KO power and Tuivasa\'s chin is starting to crack.',
      x_factor: {
        title: 'Short notice vs chronic decline',
        description: 'Sutherland 9-day notice + UK-to-AUS off a 6-week TKO turnaround. Tuivasa 17-month layoff before Teixeira, now a 3-month turnaround. Who shows up "ready"? Sutherland\'s fresh-but-broken (chin just took one), Tuivasa\'s rusty-but-camped-up (new Pereira-style coach).',
      },
      upset_alert: {
        title: 'Sutherland lands first',
        description: 'Identical reach (75"), Sutherland 1 inch taller, real regional KO power. Tuivasa absorbs 4.86 SApM (more than he lands). If Sutherland lands clean in R1 (the way Pericic did at 1:48), real upset KO. Around 38%.',
      },
      probabilities: { fighter1: { nome: 'Tuivasa', percent: 58 }, fighter2: { nome: 'Sutherland', percent: 39 }, draw: 3 },
      conviction: {
        thesis:
          'The thesis: Tai Tuivasa wins because he has 17 UFC fights of experience, tested power against top tier (KO\'d Augusto, Lewis), home crowd in Perth, and Sutherland is a pure striker (zero ground threat) against a Tuivasa whose recent losses are predominantly grappling. Path: stand and trade, lands the Bonza Bombs in R1 or R2. Collapses if Sutherland lands first (identical reach, regional KO power) or if Tuivasa\'s chin collapses again.',
        conviction_score: 5,
        conviction_rationale: 'Honest 5 conviction because the fight is a coin flip despite the narratives. Tuivasa\'s hometown ÷ real decline, Sutherland fresh-but-broken ÷ regional KO power. Not 6-7 because Tuivasa\'s decline is measured (1-6 in last seven, SApM > SLpM, lost in this same arena).',
        conviction_breakers: [
          'Sutherland lands first with reach + power',
          'Tuivasa\'s chin collapses like vs Pavlovich',
          'Short notice didn\'t matter for Sutherland, who showed up fresh',
          'Hometown pressure flips against Tuivasa',
        ],
        underdog_path: {
          viable: true, probability_estimate: 39,
          key_scenario: 'Sutherland leverages identical reach + 1 inch of height, works the jab in R1, avoids pocket trades. When Tuivasa rushes for power, lands the straight or cross on the counter. Upset KO R1-R2.',
          required_conditions: ['Land first in the first 90 seconds', 'Stay off the floor', 'Hold up to Tuivasa power in trades'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Rounds', pick: 'Under 1.5 Rounds', odds: '-150 to -200', reasoning: 'Tuivasa 80% KO (12/15 W). Sutherland 80% finish (8/10 W). HW base finish rate 71%. Real probability of an R1 finish around 70%. Soundest pick.' },
          { type: 'Method Group', pick: 'Fight Inside the Distance', odds: '-300 to -400', reasoning: 'Combined finish rate + HW base = mathematical lock. Good for parlay leg.' },
          { type: 'Longshot', pick: 'Sutherland by KO in R1', odds: '+250 to +350', reasoning: 'Sutherland regional KO power + identical reach + Tuivasa\'s questionable chin. Real probability around 30%, pays 3-4x. Clear edge as a longshot.' },
          { type: 'Avoid', pick: 'Tuivasa ML at -200', odds: '-200', reasoning: 'NOT recommended. Edge is marginal to nonexistent. Tuivasa is 1-6 in his last seven. Take Under 1.5 or ITD as the ML alternative.' },
        ],
        best_bet: { pick: 'Under 1.5 Rounds at -150 to -200', reasoning: 'Doesn\'t require picking a winner. Combined 80%/80% finish rate + HW base. R1 KO either direction is the modal outcome.' },
      },
      key_stats: [
        { value: '6', label: 'Tuivasa\'s losing streak', sublabel: 'UFC HW skid record.' },
        { value: '4.86', label: 'Tuivasa\'s SApM', sublabel: 'Absorbs more than he lands (SLpM 4.41).' },
        { value: '0-2', label: 'Sutherland\'s UFC record', sublabel: 'Both R1 finishes against.' },
        { value: '9 days', label: 'Sutherland\'s short notice', sublabel: 'UK to AUS off a 6-week TKO.' },
      ],
      odds: { fighter1_odds: '-200', fighter2_odds: '+170', fighter1_name: 'Tuivasa', fighter2_name: 'Sutherland', source: 'Opening lines expected Tuivasa -200 to -300, Sutherland +180 to +250 (not confirmed in DraftKings/FanDuel snapshot).' },
      armadilha: {
        titulo: 'Trap: Tuivasa ML at -250',
        descricao: 'The market hammers Tuivasa on the home crowd + KO power + 0-2 opponent narrative. The trap ignores: Tuivasa 1-6 in his last seven, lost to Roze in this same Perth arena Aug 2024 (15/15 media scored for Roze), leaky defense (SApM > SLpM), chin starting to crack since Pavlovich. Paying -250 on a chronic-decline fighter against a striker with identical reach and KO power is mathematically wrong. Real edge sits in Under 1.5 or Sutherland upset KO at +250-350 as a longshot.',
      },
    },
  },
};
