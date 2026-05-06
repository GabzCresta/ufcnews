import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'johnston-vs-schultz',
  evento_id: null,
  slug: 'johnston-vs-schultz',
  titulo: 'Johnston vs Schultz: Honest Coin Flip',
  subtitulo:
    'Ben Johnston (35, two-time Muay Thai world champion, 5-1 in MMA with a 100% finish rate) makes his UFC debut after two years off. Wes Schultz (29, BJJ-wrestler, 0-1 in the UFC) takes a 6-week quick turnaround after a TKO loss. Long layoff vs short rebound — both red flags pointing in opposite directions.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '6\'4"', envergadura: '75.6"', idade: 35, academia: 'The Fight Centre Brisbane' },
      fighter2: { altura: '6\'2"', envergadura: '77"', idade: 29, academia: 'Pura Vida BJJ Milwaukee' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'KO/TKO or Submission',
    confidence: 'LOW',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Ben Johnston', apelido: 'The Butcher', record: '5-1-0', ranking: 'Unranked', ultimasLutas: [] },
  fighter2_info: { nome: 'Wes Schultz', apelido: 'Party Time', record: '8-3-0', ranking: 'Unranked', ultimasLutas: [] },
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
      tagline: 'Honest Coin Flip',
      tagline_sub: 'Two-year layoff vs 6-week post-KO turnaround. Both with massive red flags pointing in opposite directions.',
      fighter1: {
        nome_completo: 'Ben "The Butcher" Johnston',
        apelido: 'The Butcher',
        sobrenome: 'Johnston',
        record: '5-1-0',
        ranking: 'Unranked',
        info_extra: 'Logan, Queensland Australia | 35 years old',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Wes "Party Time" Schultz',
        apelido: 'Party Time',
        sobrenome: 'Schultz',
        record: '8-3-0',
        ranking: 'Unranked',
        info_extra: 'Sun Prairie, Wisconsin | 29 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-02/SHULTZ_WESLEY_R_02-28.png?itok=2j3FuYjG',
      },
    },
    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'Layoff vs Quick Turnaround',
      insight:
        'Johnston is a two-time Muay Thai world champion (WBC LH 2018), 5-1 in MMA with a 100% finish rate (4 subs + 1 KO), but he retired in March 2024 — TWO YEARS OFF. Late UFC opportunity (Vendy out). 35 years old + ring rust + a baby on the way. Schultz is a BJJ-wrestler with a growing submission game (Suloev Stretch on DWCS), but 0-1 in the UFC with a TKO loss at 2:30 of round 1 to Pinas two months ago. Quick turnaround off a hard KO. Layoff vs rebound = both massive red flags. Style-wise: stand-up favors Johnston (world-class Muay Thai) if the rust allows. On the floor, Schultz is the more active grappler (CJJ-style sub game).',
      tension: {
        truth_a: 'Johnston has world-class technical Muay Thai striking + R1-R2 KO power. Fighting at home in Perth. TFC camp + a documented training history under Eugene Bareman.',
        truth_b: 'Schultz is six years younger, has 5 subs in 8 wins including rare techniques (Suloev Stretch). HS state wrestling champion. Plus 2.4 inches of reach.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Ben Johnston', color: 'red', momentum_score: 5, momentum_label: 'Recovering', momentum_trend: 'stable',
        momentum_note: '5-1 career, every win by submission. Pre-UFC: submission of Fraser (RNC, 1:15) at Eternal MMA 83 in March 2024 = title. **Two years off MMA** (focused on coaching, got married, wife pregnant). Two-time Muay Thai world champion (WBC LH 2018 over Edwards). UFC debutant.',
        recent_fights: [
          { date: 'Mar 2024', opponent: 'John-Martin Fraser', result: 'W', method: 'Submission R2 (RNC 1:15)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'Eternal MMA 83 title. Last fight before the hiatus.' },
          { date: 'Sep 2023', opponent: 'Yoon Seo Shin', result: 'W', method: 'Submission', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'Eternal MMA 79.' },
          { date: 'Jul 2023', opponent: 'Emil Jeries', result: 'W', method: 'Submission', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'Eternal MMA 77.' },
          { date: 'Jul 2022', opponent: 'Kahn Sandy', result: 'W', method: 'Submission', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'Eternal MMA 67.' },
          { date: 'Mar 2022', opponent: 'Kaleb Rideout', result: 'L', method: 'KO R1 (1:10 spinning back fist)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'Only career MMA loss. Atypical spinning back fist.' },
        ],
      },
      fighter2: {
        nome: 'Wes Schultz', color: 'blue', momentum_score: 4, momentum_label: 'Sliding', momentum_trend: 'descending',
        momentum_note: 'Coming off a TKO loss at 2:30 of round 1 to Pinas at UFC FN Mexico in Feb 2026 — UFC debut. Before that: Submission R1 (Suloev Stretch 1:51) over Mingaj at DWCS S9 W10 = contract. Six-week quick turnaround off the hard KO.',
        recent_fights: [
          { date: 'Feb 2026', opponent: 'Damian Pinas', result: 'L', method: 'TKO R1 (2:30, punches)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'UFC debut. Pinas is an explosive striker (9.62 SLpM).' },
          { date: 'Oct 2025', opponent: 'Mario Mingaj', result: 'W', method: 'Submission R1 (Suloev Stretch 1:51)', opponent_rank: 'DWCS', quality_score: 1, quality_label: 'Poor', note: 'DWCS contract. Advanced technique.' },
          { date: 'Aug 2024', opponent: 'Mansur Abdul-Malik', result: 'L', method: 'TKO R3 (3:55, GnP elbows)', opponent_rank: 'DWCS', quality_score: 2, quality_label: 'Average', note: 'DWCS 2024.' },
          { date: 'Apr 2024', opponent: 'Adland Benson', result: 'W', method: 'TKO R1 (3:39 GnP)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'LFA 181.' },
          { date: '2023', opponent: 'Maurice Morris', result: 'W', method: 'Submission', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'LFA 174.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Johnston', media_oponentes: 1, media_oponentes_label: 'Poor', aproveitamento: '4W-1L regional', contra_top5: '0W-0L' },
      fighter2: { nome: 'Schultz', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '2W-2L recent (UFC + DWCS)', contra_top5: '0W-0L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Schultz has more tested UFC-level competition (1 UFC + 2 DWCS). Johnston only Eternal MMA Australia regional. Johnston\'s stats are built in regional context — flag the caveat.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 0, valueB: 5.39, maxVal: 6, format: 'decimal', note: 'Johnston UFCStats empty (debutant). Schultz sample is one fight, 2:30 — huge variance.' },
        { label: 'Takedowns per 15 Min', valueA: 0, valueB: 5.57, maxVal: 6, format: 'decimal', note: 'Schultz sample inflated.' },
        { label: 'Submissions per 15 Min', valueA: 0, valueB: 1.4, maxVal: 3, format: 'decimal', note: 'Schultz offensive sub avg. Johnston regional only.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '35', fighter2: '29', note: 'Schultz six years younger.' },
        { label: 'Height', fighter1: '6\'4"', fighter2: '6\'2"', note: 'Johnston 2 inches taller.' },
        { label: 'Reach', fighter1: '75.6"', fighter2: '77"', note: 'Schultz 1.4 inches of reach.' },
        { label: 'Background', fighter1: 'Two-time Muay Thai world champion', fighter2: 'BJJ + HS state wrestling champion', note: 'Clean stylistic clash.' },
        { label: 'Layoff', fighter1: 'Two years off', fighter2: 'Six weeks post-TKO', note: 'Red flags in opposite directions.' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking Quality', advantage: 'fighter1', gap: 4, note: 'Two-time Muay Thai world champion vs BJJ-wrestler.' },
        { label: 'Offensive Wrestling', advantage: 'fighter2', gap: 3, note: 'HS state champion + DWCS takedowns landed.' },
        { label: 'Offensive Grappling', advantage: 'fighter2', gap: 2, note: 'Schultz BJJ + technical Suloev Stretch.' },
        { label: 'Rust / Layoff', advantage: 'fighter2', gap: 2, note: 'Schultz active. Johnston two years off.' },
        { label: 'Post-KO Recovery', advantage: 'fighter1', gap: 2, note: 'Schultz took a TKO two months ago.' },
        { label: 'Age', advantage: 'fighter2', gap: 2, note: '29 vs 35.' },
      ],
      summary: 'On the feet, Johnston runs the show (world-class Muay Thai). On the mat, Schultz runs it (BJJ + wrestling). Whoever dictates location wins.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Johnston', ko_tko: { count: 1, percent: 20 }, submission: { count: 4, percent: 80 }, decision: { count: 0, percent: 0 }, total_wins: 5 },
      fighter2: { nome: 'Schultz', ko_tko: { count: 2, percent: 25 }, submission: { count: 5, percent: 63 }, decision: { count: 1, percent: 13 }, total_wins: 8 },
      insight: 'Combined: 13 wins, 1 decision. A decision is statistically unlikely. R1-R2 finish is the modal scenario.',
    },
    previsao_final: {
      winner_name: 'Ben Johnston', winner_side: 'fighter1',
      predicted_method: 'KO/TKO or Submission', confidence_score: 4, confidence_label: 'LOW',
      explanation:
        'Honest coin flip. Pick is Johnston by a paper-thin margin (world-class Muay Thai + home crowd + tested R1-R2 KO power), but only conviction 4. The two-year layoff is a massive red flag — rust can erase any technical edge. Schultz comes in fresh-but-broken: six-week quick turnaround off a hard KO, recovery is an open question. Schultz wants this on the floor (BJJ + wrestling), Johnston wants to keep it standing. Whoever dictates location wins. Believe it\'ll be tight, but the path I see is Johnston winning if he can keep R1 standing.',
      x_factor: {
        title: 'Johnston\'s rust vs Schultz\'s recovery',
        description: 'Two years off vs six weeks post-KO. Both arrive with red flags pointing opposite ways. Whoever absorbs their own gap better wins.',
      },
      upset_alert: {
        title: 'Schultz lands a takedown and finishes',
        description: 'HS wrestling + 5 career subs including the technical Suloev Stretch. Hits the clinch, drives the takedown, finds the finish on the floor.',
      },
      probabilities: { fighter1: { nome: 'Johnston', percent: 49 }, fighter2: { nome: 'Schultz', percent: 48 }, draw: 3 },
      conviction: {
        thesis:
          'The thesis: Ben Johnston wins because he has world-class technical Muay Thai, 2 inches of height, tested KO power, and the home crowd in Perth. Believe it\'ll be tight, but the path I see is Johnston winning if he keeps R1 standing. Collapses if two years of rust kills the technique, OR Schultz wins repeated clinch entries plus takedowns.',
        conviction_score: 4,
        conviction_rationale: 'Honest 4 conviction. Real coin flip. The two-year layoff is a critical variable that can\'t be measured until the fight starts. Not enough convergent dimensions for 5+.',
        conviction_breakers: [
          'Johnston shows rust in combat sequences',
          'Schultz lands repeated takedowns + finishes in a scramble',
          'Age 35 + baby on the way = scattered focus',
          'Schultz\'s post-KO recovery is better than expected',
        ],
        underdog_path: {
          viable: true, probability_estimate: 48,
          key_scenario: 'Schultz uses the 1.4 inches of reach and six-year youth advantage to push pressure striking. When Johnston engages, he hits the clinch, drives the takedown. Sub R1-R2 in a scramble (Suloev Stretch or RNC).',
          required_conditions: ['Land repeated clinches', 'Survive the Muay Thai in R1', 'Find the finish on the floor before R3'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Rounds', pick: 'Under 1.5 Rounds', odds: '-130 to -150', reasoning: 'Combined 12 of 13 wins by finish. 0% combined UFC decision rate. Real probability around 60% of an R1 finish.' },
          { type: 'Method', pick: 'Schultz by Submission', odds: '+250 to +350', reasoning: 'HS wrestling + 5 subs including the technical Suloev Stretch. Around 30%, pays plenty.' },
          { type: 'Method', pick: 'Johnston by KO/TKO', odds: '+180 to +220', reasoning: 'World-class Muay Thai + Schultz has shown vulnerability to strikers (2 TKOs absorbed). Around 30%, pays 2-3x.' },
          { type: 'Avoid', pick: 'Moneyline either side', odds: '-110/-110', reasoning: 'Too coinflip. No edge on ML. Go method or rounds.' },
        ],
        best_bet: { pick: 'Under 1.5 Rounds at -130 to -150', reasoning: 'Combined finish rate + 0% combined UFC decision = R1 finish is the modal scenario. Most defensible play without having to pick the winner.' },
      },
      key_stats: [
        { value: '2 years', label: 'Johnston\'s layoff', sublabel: 'Retired March 2024.' },
        { value: '6 weeks', label: 'Schultz\'s quick turnaround', sublabel: 'Off the hard TKO loss to Pinas in Feb 2026.' },
        { value: '12/13', label: 'Combined finish rate', sublabel: '1 decision in 13 combined wins.' },
        { value: 'Coin flip', label: 'Real market edge', sublabel: 'Pickem-style lines expected.' },
      ],
      odds: { fighter1_odds: '-110', fighter2_odds: '-110', fighter1_name: 'Johnston', fighter2_name: 'Schultz', source: 'Not confirmed in snapshot via search. Best Fight Odds has the event but the specific line wasn\'t returned.' },
      armadilha: {
        titulo: 'Trap: Johnston ML at -200 as the home favorite',
        descricao: 'The market may price Johnston heavy on the world-class Muay Thai + home crowd narrative. The trap: two years off is a MASSIVE measurable gap + Schultz has been tested at UFC level + 1.4 inches of reach. Paying -200 on a UFC debutant with two years of rust is mathematically wrong. Real edge sits in method/round, not moneyline.',
      },
    },
  },
};
