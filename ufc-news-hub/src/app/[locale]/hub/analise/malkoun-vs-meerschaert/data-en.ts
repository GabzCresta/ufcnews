import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'malkoun-vs-meerschaert',
  evento_id: null,
  slug: 'malkoun-vs-meerschaert',
  titulo: 'Malkoun vs Meerschaert: Hometown Wrestler vs Falling Sub Specialist',
  subtitulo:
    'Jacob Malkoun on a 2-fight win streak, fighting at home in Sydney-to-Perth, training partner of Whittaker. Gerald Meerschaert on a 0-4 skid at 38, three recent finishes against him. He still holds the UFC middleweight submissions record. DraftKings: Malkoun -800.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'9"', envergadura: '73"', idade: 30, academia: 'Gracie Smeaton Grange' },
      fighter2: { altura: '6\'1"', envergadura: '77.5"', idade: 38, academia: 'Roufusport' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'TKO or Decision',
    confidence: 'MEDIUM-HIGH',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Jacob Malkoun', apelido: 'Mamba', record: '9-3-0', ranking: 'Unranked', ultimasLutas: [] },
  fighter2_info: { nome: 'Gerald Meerschaert', apelido: 'GM3', record: '37-21-0', ranking: 'Unranked', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: 'May 2, 2026',
  evento_local: 'RAC Arena, Perth, Australia',
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
      evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
      evento_data: 'May 2, 2026',
      evento_local: 'RAC Arena, Perth, Australia',
      categoria_peso: 'Middleweight (185 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Hometown Wrestler vs Falling Sub Specialist',
      tagline_sub: 'Malkoun TD avg 7.20 elite. Meerschaert 38, on an 0-4, fans called for retirement. Last-chance fight.',
      fighter1: {
        nome_completo: 'Jacob "Mamba" Malkoun',
        apelido: 'Mamba',
        sobrenome: 'Malkoun',
        record: '9-3-0',
        ranking: 'Unranked',
        info_extra: 'Sydney, Australia | 30 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/MALKOUN_JACOB_L_01-31.png?itok=83vEOHkP',
      },
      fighter2: {
        nome_completo: 'Gerald "GM3" Meerschaert',
        apelido: 'GM3',
        sobrenome: 'Meerschaert',
        record: '37-21-0',
        ranking: 'Unranked',
        info_extra: 'Racine, Wisconsin | 38 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/MEERSCHAERT_GERALD_L_08-16.png?itok=9EI3KA1I',
      },
    },
    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'Age, Momentum, and a Veteran Chin in Decline',
      insight:
        'Malkoun is a wrestler-grappler with a 7.20 TD/15 average (elite). Meerschaert is the all-time UFC middleweight submissions leader (12, passed Anderson Silva in Aug 2024). But Meerschaert is on an 0-4 skid: three recent finishes against him (Daukaus D\'Arce R1 0:50, Oleksiejczuk TKO R1 3:03, de Ridder arm-triangle R3) plus a UD loss to Tavares. At 38, with a clearly fading chin (left hands have put him down twice in the last few), Malkoun has cleaner striking quality than the veteran\'s recent opponents. Malkoun\'s 20% TDD is a flag — but Meerschaert\'s 31% TD accuracy means he won\'t land an offensive takedown. The only real threat from Meerschaert is the bottom-game submission (5 arm-triangles, including Shahbazyan).',
      tension: {
        truth_a: 'Malkoun TD avg 7.20 elite (vs Meerschaert\'s 1.86), age 30 vs 38, 2-fight win streak, hometown, Whittaker training partner.',
        truth_b: 'Meerschaert is the all-time UFC MW submissions leader. 5 arm-triangles. If Malkoun gets caught in a scramble with neck or arm exposed, the fight\'s over.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Jacob Malkoun', color: 'red', momentum_score: 8, momentum_label: 'Hot', momentum_trend: 'ascending',
        momentum_note: '2-fight win streak. UFC 325 Sydney UD over Finney (dominated the striking + nearly had the guillotine). Before that: TKO R2 over Petroski Mar 2024. 22 months off between those. 3-month turnaround now — sustained activity.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Torrez Finney', result: 'W', method: 'Unanimous Decision (30-27, 30-26, 30-26)', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Average', note: 'UFC 325 Sydney. Nearly had the guillotine.' },
          { date: 'Mar 2024', opponent: 'Andre Petroski', result: 'W', method: 'TKO R2 (0:39, GnP)', opponent_rank: 'UFC vet', quality_score: 3, quality_label: 'Good', note: 'Hard collision, ground finish.' },
          { date: 'Sep 2023', opponent: 'Cody Brundage', result: 'L', method: 'DQ R1 (4:15, illegal elbow)', opponent_rank: 'UFC vet', quality_score: 3, quality_label: 'Good', note: 'Was losing until the DQ.' },
          { date: 'Oct 2022', opponent: 'Nick Maximov', result: 'W', method: 'Unanimous Decision', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Average', note: 'UFC FN 212.' },
          { date: 'Jun 2022', opponent: 'Brendan Allen', result: 'L', method: 'Unanimous Decision', opponent_rank: 'Top 15 MW', quality_score: 4, quality_label: 'Very Good', note: 'UFC 275.' },
        ],
      },
      fighter2: {
        nome: 'Gerald Meerschaert', color: 'blue', momentum_score: 1, momentum_label: 'Free Fall', momentum_trend: 'descending',
        momentum_note: '0-4 skid, 3 of those losses came by quick finish (Daukaus D\'Arce R1 0:50, Oleksiejczuk TKO R1 3:03, de Ridder arm-triangle R3). Fans called for retirement after UFC 322. Possible last-chance fight. 38 years old, 49+ pro fights. UFC MW submissions record holder (12).',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Kyle Daukaus', result: 'L', method: 'Sub R1 (D\'Arce 0:50)', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Average', note: '6th-fastest sub in UFC MW history. Knockdown by left hand + sub.' },
          { date: 'Aug 2025', opponent: 'Michał Oleksiejczuk', result: 'L', method: 'TKO R1 (3:03)', opponent_rank: 'UFC active', quality_score: 3, quality_label: 'Good', note: 'Left hand + GnP.' },
          { date: 'Apr 2025', opponent: 'Brad Tavares', result: 'L', method: 'Unanimous Decision (29-28 x3)', opponent_rank: 'Long-time vet', quality_score: 4, quality_label: 'Very Good', note: 'Single-leg takedowns failed.' },
          { date: 'Nov 2024', opponent: 'Reinier de Ridder', result: 'L', method: 'Sub R3 (arm-triangle 1:44)', opponent_rank: 'Top prospect', quality_score: 4, quality_label: 'Very Good', note: 'UFC FN.' },
          { date: 'Aug 2024', opponent: 'Edmen Shahbazyan', result: 'W', method: 'Sub R2 (arm-triangle 4:12)', opponent_rank: 'Vet', quality_score: 3, quality_label: 'Good', note: 'UFC MW submissions record broken in this fight.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Malkoun', media_oponentes: 3, media_oponentes_label: 'Good', aproveitamento: '3W-2L (last 5)', contra_top5: '0W-1L' },
      fighter2: { nome: 'Meerschaert', media_oponentes: 3, media_oponentes_label: 'Good', aproveitamento: '1W-4L (last 5)', contra_top5: '0W-1L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Calibre similar. Gap = 0. The difference is momentum: Malkoun on the rise, Meerschaert sliding.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 3.89, valueB: 3.05, maxVal: 6, format: 'decimal', note: 'Malkoun has the volume edge + 56% accuracy.' },
        { label: 'Sig. Strikes Absorbed/Min', valueA: 2.49, valueB: 3.43, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Meerschaert absorbs more. The chin issue is real.' },
        { label: 'Takedowns per 15 Min', valueA: 7.20, valueB: 1.86, maxVal: 8, format: 'decimal', note: 'Malkoun TD avg ELITE.' },
        { label: 'Takedown Defense (%)', valueA: 20, valueB: 47, maxVal: 100, format: 'percent', note: 'Malkoun TDD 20% = flag. But Meerschaert TD acc 31%.' },
        { label: 'Submissions per 15 Min', valueA: 0.5, valueB: 1.40, maxVal: 3, format: 'decimal', note: 'Meerschaert sub avg ALL-TIME UFC elite.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '30', fighter2: '38', note: 'Malkoun 8 years younger. Critical.' },
        { label: 'Height', fighter1: '5\'9"', fighter2: '6\'1"', note: 'Meerschaert 4 inches taller.' },
        { label: 'Reach', fighter1: '73"', fighter2: '77.5"', note: 'Meerschaert 4.5 inches more reach.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Southpaw', note: 'Asymmetric stance.' },
        { label: 'Camp', fighter1: 'Gracie Smeaton Grange (Whittaker partner)', fighter2: 'Roufusport (Milwaukee)', note: null },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Offensive Wrestling', advantage: 'fighter1', gap: 4, note: 'TD avg 7.20 elite vs 1.86.' },
        { label: 'Striking Quality', advantage: 'fighter1', gap: 2, note: 'Volume + 56% accuracy.' },
        { label: 'Submission Game', advantage: 'fighter2', gap: 3, note: 'UFC MW record holder.' },
        { label: 'Submission Defense', advantage: 'fighter1', gap: 2, note: 'Wrestler base. But could fall to an arm-triangle (Shahbazyan).' },
        { label: 'Age / Durability', advantage: 'fighter1', gap: 4, note: '38 years old + chin sliding + 0-4.' },
        { label: 'Momentum', advantage: 'fighter1', gap: 5, note: '2W vs 0-4. Drastic.' },
      ],
      summary: 'Malkoun wins almost everything except sub game and reach. The only real path for Meerschaert is a sub in a scramble.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Malkoun', ko_tko: { count: 2, percent: 22 }, submission: { count: 2, percent: 22 }, decision: { count: 5, percent: 56 }, total_wins: 9 },
      fighter2: { nome: 'Meerschaert', ko_tko: { count: 6, percent: 16 }, submission: { count: 29, percent: 78 }, decision: { count: 2, percent: 5 }, total_wins: 37 },
      insight: 'Meerschaert 78% subs (29 of 37 wins). Malkoun more decisions. Malkoun\'s single risk is an arm-triangle in a scramble.',
    },
    previsao_final: {
      winner_name: 'Jacob Malkoun', winner_side: 'fighter1',
      predicted_method: 'TKO or Decision', confidence_score: 7, confidence_label: 'MEDIUM-HIGH',
      explanation:
        'Pick is Malkoun by TKO or decision. Advantages: TD avg 7.20 elite (Meerschaert TDD 47%, will get got), age -8 years, opposite momentum (2W vs 0-4), striking quality + 56% accuracy, hometown. Meerschaert at 38 with the fading chin (left hands have put him down in 2 of the last few) + a striker who\'s going to dominate Malkoun on volume. Meerschaert\'s only real path: sub in a scramble (5 arm-triangles, including Shahbazyan). Conviction 7 because the read is clear, but Meerschaert is the most dangerous historical sub specialist in middleweight.',
      x_factor: {
        title: 'Scramble with neck exposed',
        description: 'Malkoun\'s 20% TDD is the flag, but Meerschaert isn\'t an offensive wrestler (TD acc 31%). If Malkoun takes him down and gets on top, he has to mind the neck and the arm — exactly how Shahbazyan got caught in the arm-triangle.',
      },
      upset_alert: {
        title: 'Meerschaert finds a sub in transition',
        description: 'Sub avg 1.40 elite. Malkoun has lost 2 of 9 (DQ + Allen UD), none by sub, but a MW wrestler can fall to an arm-triangle. Around 12-15%.',
      },
      probabilities: { fighter1: { nome: 'Malkoun', percent: 87 }, fighter2: { nome: 'Meerschaert', percent: 11 }, draw: 2 },
      conviction: {
        thesis:
          'The thesis: Jacob Malkoun wins because he has TD avg 7.20 elite (Meerschaert TDD 47%), age 30 vs 38, opposing momentum (2W streak vs 0-4), 56% striking accuracy, and hometown Sydney-to-Perth. Path: drop Meerschaert repeatedly, top control, GnP to stoppage or decision. Collapses if Malkoun bites on an arm-triangle or anaconda in a scramble.',
        conviction_score: 7,
        conviction_rationale: 'Conviction 7 because the read is clean (5 dimensions in favor: stats, momentum, style, physical/age, qualitative intel/hometown). Not 8 because Meerschaert\'s sub avg 1.40 is all-time elite and MW wrestlers have fallen to the arm-triangle (Shahbazyan precedent).',
        conviction_breakers: [
          'Malkoun bites on an arm-triangle or anaconda in a scramble',
          'Meerschaert\'s striking finds the left counter',
          'Malkoun\'s 20% TDD shows up in a new fight',
          'Meerschaert\'s veteran cardio holds for 3 rounds',
        ],
        underdog_path: {
          viable: true, probability_estimate: 11,
          key_scenario: 'Meerschaert survives R1 striking, in a scramble Malkoun exposes the neck, arm-triangle or D\'Arce. OR lands the straight left that put Malkoun down in stand-up.',
          required_conditions: ['Find a sub in transition R1-R2', 'Don\'t get dominated in wrestling', 'Survive with the questionable chin'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Method', pick: 'Malkoun by TKO or Decision', odds: '-180 to -200', reasoning: 'Striking quality + Meerschaert\'s chin + wrestling = TKO or dominant decision. Around 70%.' },
          { type: 'Rounds', pick: 'Under 2.5 Rounds', odds: '-150 to -180', reasoning: 'Meerschaert\'s chin sliding (3 recent finishes against). Malkoun finished Petroski R2. Around 65% R2 finish.' },
          { type: 'Longshot', pick: 'Meerschaert by Submission', odds: '+600 to +800', reasoning: 'Sub avg 1.40 elite + MW wrestlers vulnerable to arm-triangle. Around 12%.' },
          { type: 'Avoid', pick: 'Malkoun ML at -800', odds: '-800', reasoning: 'Zero edge. Extreme line. Take method/rounds instead of moneyline.' },
        ],
        best_bet: { pick: 'Under 2.5 Rounds at -150 to -180', reasoning: 'Meerschaert took 3 finishes in 4 (Daukaus 0:50, Oleksiejczuk 3:03, de Ridder R3). Sliding chin + Malkoun striking quality = high probability of an R1-R2 finish.' },
      },
      key_stats: [
        { value: '0-4', label: 'Meerschaert\'s skid', sublabel: 'Fans called for retirement. Possible last fight.' },
        { value: '7.20', label: 'Malkoun\'s TD/15 avg', sublabel: 'Elite. Meerschaert TDD 47%.' },
        { value: '1.40', label: 'Meerschaert\'s sub avg', sublabel: 'UFC MW record holder. Real threat.' },
        { value: '38', label: 'Meerschaert\'s age', sublabel: 'Chin sliding. Left hands have put him down in 2 of the last few.' },
      ],
      odds: { fighter1_odds: '-800', fighter2_odds: '+550', fighter1_name: 'Malkoun', fighter2_name: 'Meerschaert', source: 'Caesars opening Malkoun -900, consensus -800 / +550-+600 as of April 25, 2026.' },
      armadilha: {
        titulo: 'Trap: Malkoun ML at -800',
        descricao: 'Extreme line. Paying -800 on a middling pickem is mathematically wrong. Zero edge. If you believe the pick, go method (Malkoun by TKO or decision at -180) or rounds (Under 2.5 at -150). ML on this line is a bankroll-killer.',
      },
    },
  },
};
