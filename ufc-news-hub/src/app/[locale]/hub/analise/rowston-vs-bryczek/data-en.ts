import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'rowston-vs-bryczek',
  evento_id: null,
  slug: 'rowston-vs-bryczek',
  titulo: 'Rowston vs Bryczek: Battle Giraffe Heats Up at Home',
  subtitulo:
    'Cam Rowston rolls in on a 6-fight win streak (12 of 14 by finish), training out of City Kickboxing, fighting at home in Perth. Robert Bryczek comes off a TKO of Brad Tavares but he\'s 35 with a 22-hour Poland-to-Perth jet-lag stack. DraftKings has Rowston at -260.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '6\'3"', envergadura: '78"', idade: 31, academia: 'City Kickboxing' },
      fighter2: { altura: '6\'0"', envergadura: '75"', idade: 35, academia: 'Veto Team Bielsko-Biała' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'TKO or Decision',
    confidence: 'MEDIUM',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Cameron Rowston', apelido: 'Battle Giraffe', record: '14-3-0', ranking: 'Unranked', ultimasLutas: [] },
  fighter2_info: { nome: 'Robert Bryczek', record: '18-6-0', ranking: 'Unranked', ultimasLutas: [] },
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
      tagline: 'Battle Giraffe Heats Up at Home',
      tagline_sub: 'Rowston riding a 6-fight streak. Bryczek\'s coming off a TKO of Tavares — but he\'s 35 with a brutal Poland-to-Australia trip.',
      fighter1: {
        nome_completo: 'Cameron "Battle Giraffe" Rowston',
        apelido: 'Battle Giraffe',
        sobrenome: 'Rowston',
        record: '14-3-0',
        ranking: 'Unranked',
        info_extra: 'Sydney, Australia | 31 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/ROWSTON_CAM_L_01-31.png?itok=dGbxFvWJ',
      },
      fighter2: {
        nome_completo: 'Robert Bryczek',
        apelido: '',
        sobrenome: 'Bryczek',
        record: '18-6-0',
        ranking: 'Unranked',
        info_extra: 'Bielsko-Biała, Poland | 35 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-02/BRYZCEK_ROBERT_L_02-10.png?itok=0gC9kqbk',
      },
    },
    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'Reach + Age + Hometown vs Regional Power',
      insight:
        'Rowston owns the geometry — 3 inches of reach, 3 inches of height, City Kickboxing fight camp, 31 vs 35 in age, and a six-fight win streak. Bryczek brings real power (5-fight regional R1 KO streak, including a 17-second wipeout, plus he dropped Tavares twice before finishing him in round 3). But his cardio dipped in rounds 2-3 against Tavares (stalking with no offense) and he dropped a full three-round decision to Potieria. Poland to Perth is a 22+ hour jet lag stack — a real logistical disadvantage. Rowston\'s stats are built on a tiny UFC sample (two fights, against a fading Brundage and Petroski).',
      tension: {
        truth_a: 'Rowston riding a 6-fight win streak, 12 of 14 career wins by finish, training at elite CKB (Adesanya, Ulberg, Hooker), home crowd in Perth, plus 3 inches of reach.',
        truth_b: 'Bryczek dropped Tavares (a UFC veteran with serious mileage) twice and finished him in round 3. 17-second KO on his regional R1 streak. If he lands first, it\'s a wrap.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Cameron Rowston', color: 'red', momentum_score: 9, momentum_label: 'Hot', momentum_trend: 'ascending',
        momentum_note: 'Six-fight win streak. 2-0 in the UFC plus 1-1 on DWCS. Last two: TKO R2 of Brundage at UFC 325 Sydney (Jan 2026), TKO R1 of Petroski at UFC Perth Sep 2025 — same arena. 12 of 14 career wins by finish.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Cody Brundage', result: 'W', method: 'TKO R2 (4:08, G&P)', opponent_rank: 'UFC vet', quality_score: 3, quality_label: 'Good', note: 'Almost had the guillotine. Dominated R2.' },
          { date: 'Sep 2025', opponent: 'Andre Petroski', result: 'W', method: 'TKO R1 (2:41)', opponent_rank: 'UFC vet', quality_score: 3, quality_label: 'Good', note: 'Check left hook into ground-and-pound.' },
          { date: 'Aug 2025', opponent: 'Brandon Holmes', result: 'W', method: 'TKO R1 (2:58)', opponent_rank: 'DWCS', quality_score: 1, quality_label: 'Poor', note: 'Earned the DWCS contract.' },
          { date: '2024', opponent: 'Regional', result: 'W', method: 'Finish', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'Eternal MMA streak.' },
          { date: 'Sep 2022', opponent: 'Torrez Finney', result: 'L', method: 'Decision', opponent_rank: 'DWCS', quality_score: 2, quality_label: 'Average', note: 'Only recent loss. DWCS.' },
        ],
      },
      fighter2: {
        nome: 'Robert Bryczek', color: 'blue', momentum_score: 6, momentum_label: 'Recovering', momentum_trend: 'ascending',
        momentum_note: 'Coming off a TKO R3 win over Brad Tavares at UFC Paris (Sep 2025) — dropped Tavares twice. Before that: a unanimous decision loss to Potieria at UFC Vegas 86 (Feb 2024) where his cardio failed him. Pre-UFC: a five-fight R1 KO streak (including a 17-second one). Now 35 with a long flight.',
        recent_fights: [
          { date: 'Sep 2025', opponent: 'Brad Tavares', result: 'W', method: 'TKO R3 (1:43)', opponent_rank: 'Top vet', quality_score: 4, quality_label: 'Very Good', note: 'Dropped Tavares twice. Real power.' },
          { date: 'Feb 2024', opponent: 'Ihor Potieria', result: 'L', method: 'Unanimous Decision (30-27 x2 + 29-28)', opponent_rank: 'UFC active', quality_score: 2, quality_label: 'Average', note: 'Cardio failed him over three rounds. Potieria came in on short notice and 2.5 lbs over.' },
          { date: 'Jul 2023', opponent: 'Krištofič', result: 'W', method: 'KO R1', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'Oktagon.' },
          { date: '2022', opponent: 'Robson', result: 'W', method: 'KO 17s R1', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'FEN.' },
          { date: 'Oct 2020', opponent: 'Frasineac', result: 'W', method: 'TKO R5 (FEN title)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: 'FEN title.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Rowston', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '6W-0L (last 6)', contra_top5: '0W-0L' },
      fighter2: { nome: 'Bryczek', media_oponentes: 3, media_oponentes_label: 'Good', aproveitamento: '4W-1L (last 5)', contra_top5: '0W-0L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'No common opponents. Calibre is similar. Bryczek has a bigger name on his resume in Tavares — a longstanding UFC vet who outweighs anyone Rowston has fought.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 4.26, valueB: 3.5, maxVal: 6, format: 'decimal', note: 'Rowston has the volume edge — but Bryczek\'s number comes from the Tavares fight only.' },
        { label: 'Strike Defense (%)', valueA: 49, valueB: 50, maxVal: 100, format: 'percent', note: 'Both leak strikes.' },
        { label: 'Sig. Strikes Absorbed/Min', valueA: 2.37, valueB: 5.7, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Bryczek absorbs heavy (vs Tavares). Red flag.' },
        { label: 'Takedowns per 15 Min', valueA: 0.7, valueB: 0.2, maxVal: 5, format: 'decimal', note: 'Neither is much of a wrestler.' },
        { label: 'Takedown Defense (%)', valueA: 28, valueB: 60, maxVal: 100, format: 'percent', note: 'Rowston\'s 28% TDD is alarming on paper. But Bryczek doesn\'t shoot.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '31', fighter2: '35', note: 'Rowston four years younger.' },
        { label: 'Height', fighter1: '6\'3"', fighter2: '6\'0"', note: 'Rowston 3 inches taller.' },
        { label: 'Reach', fighter1: '78"', fighter2: '75"', note: 'Rowston owns 3 inches of reach.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Camp', fighter1: 'City Kickboxing (Auckland)', fighter2: 'Veto Team (Poland)', note: 'CKB elite vs regional.' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume Striking', advantage: 'fighter1', gap: 2, note: 'Rowston SLpM 4.26.' },
        { label: 'R1 Power', advantage: 'fighter2', gap: 2, note: 'Bryczek\'s 5-fight regional R1 KO streak plus dropping Tavares.' },
        { label: '3R Cardio', advantage: 'fighter1', gap: 3, note: 'Bryczek faded vs Tavares R2 plus the UD loss to Potieria over three.' },
        { label: 'Reach Geometry', advantage: 'fighter1', gap: 3, note: 'Plus 3 inches of reach is decisive in the pocket.' },
        { label: 'Submission Defense', advantage: 'fighter2', gap: 1, note: 'Bryczek BJJ black belt (federation unconfirmed).' },
        { label: 'Hometown', advantage: 'fighter1', gap: 3, note: 'Perth + 22-hour jet lag for Bryczek.' },
      ],
      summary: 'Rowston wins on geometry, cardio, and the home crowd. Bryczek\'s edge is R1 power. Survive the first round, Rowston dictates the rest.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Rowston', ko_tko: { count: 7, percent: 50 }, submission: { count: 6, percent: 43 }, decision: { count: 1, percent: 7 }, total_wins: 14 },
      fighter2: { nome: 'Bryczek', ko_tko: { count: 12, percent: 67 }, submission: { count: 1, percent: 6 }, decision: { count: 5, percent: 28 }, total_wins: 18 },
      insight: 'Rowston\'s a finisher (93% of W). Bryczek leans on bombs. Combined finish rate is high — decisions are rare here.',
    },
    previsao_final: {
      winner_name: 'Cameron Rowston', winner_side: 'fighter1',
      predicted_method: 'TKO or Decision', confidence_score: 6, confidence_label: 'MEDIUM',
      explanation:
        'Pick is Rowston by TKO or late decision. The advantages converge: four years younger, 3 inches of reach, 3 inches of height, hometown Perth (same arena where he finished Petroski seven months ago), CKB camp, six-fight win streak. Bryczek has a real R1 window with his power — but his cardio dips in R2-R3 and the Poland-to-Perth jet lag is a real factor. Honest 6 conviction because Bryczek can finish in R1 if he lands clean (5-fight regional R1 KO streak + 2 knockdowns of Tavares).',
      x_factor: {
        title: 'The first 90 seconds',
        description: 'Bryczek needs to land in R1 or he loses on cardio. Rowston needs to survive R1 and run the show with reach plus volume.',
      },
      upset_alert: {
        title: 'Bryczek lands first with power',
        description: 'Real, tested power (knockdowns of Tavares plus the 17-second regional KO). Rowston\'s strike defense sits at 49% and he was rocked vs Topuria. Around a 30% shot.',
      },
      probabilities: { fighter1: { nome: 'Rowston', percent: 64 }, fighter2: { nome: 'Bryczek', percent: 33 }, draw: 3 },
      conviction: {
        thesis:
          'The thesis: Rowston wins because he owns 3 inches of reach, 3 inches of height, the CKB camp, four years of age, six-fight momentum, and Bryczek shows up at 35 with a 22-hour Poland-to-Australia trip baked in. The path: he controls the range on the feet, neutralizes the R1 power, banks volume in R2-R3 when Bryczek\'s cardio dips. This collapses if Bryczek lands first with the same power that put Tavares down twice.',
        conviction_score: 6,
        conviction_rationale: 'Conviction 6 because the advantages are real but Bryczek\'s R1 window is documented. Not 7 because Rowston\'s 49% strike defense (rocked vs Topuria, vs Musasa) plus Bryczek\'s 2 knockdowns of Tavares.',
        conviction_breakers: [
          'Bryczek lands a clean overhand right in R1',
          'Jet lag doesn\'t matter (Bryczek acclimated in Auckland?)',
          'Rowston\'s cardio dips earlier than expected (tiny sample)',
          'Bryczek\'s regional power translates to UFC level',
        ],
        underdog_path: {
          viable: true, probability_estimate: 33,
          key_scenario: 'Bryczek capitalizes in the first three minutes before Rowston\'s reach takes over, lands the overhand right or the hook that put Tavares down. Ends it KO R1 or TKO R2.',
          required_conditions: ['Land clean in the first three minutes of R1', 'Survive Rowston\'s early pressure', 'Stay off the floor (Rowston BJJ active)'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Rounds', pick: 'Over 1.5 Rounds', odds: '-180 to -150', reasoning: 'Rowston didn\'t finish Brundage in R1 or Musasa in R1. Bryczek finished Tavares in R3, not R1. Real probability of clearing 1.5 rounds is around 70%.' },
          { type: 'Moneyline', pick: 'Cameron Rowston', odds: '-260', reasoning: 'Polymarket sits at 64%. Marginal edge but aligned.' },
          { type: 'Method', pick: 'Rowston by ITD', odds: '-150 to -180', reasoning: '12 of 14 career wins by finish. Real finish probability around 50%.' },
          { type: 'Longshot', pick: 'Bryczek by KO in R1', odds: '+400 to +500', reasoning: 'Real power + R1 window + Rowston\'s 49% strike defense. Around 20%, pays 4-5x.' },
        ],
        best_bet: { pick: 'Over 1.5 Rounds at -180 to -150', reasoning: 'Most defensible. Rowston didn\'t finish in R1 against Brundage or Musasa, Bryczek finished Tavares only in R3.' },
      },
      key_stats: [
        { value: '6W', label: 'Rowston\'s win streak', sublabel: '12 of 14 career wins by finish.' },
        { value: '+3"', label: 'Rowston\'s reach', sublabel: 'Kills the pocket where Bryczek operates.' },
        { value: '5 KOs', label: 'Bryczek\'s regional R1 streak', sublabel: 'Real R1 power window.' },
        { value: '22h+', label: 'Poland-to-Perth jet lag', sublabel: 'Logistical disadvantage for Bryczek.' },
      ],
      odds: { fighter1_odds: '-260', fighter2_odds: '+210', fighter1_name: 'Rowston', fighter2_name: 'Bryczek', source: 'DraftKings, Polymarket 64% Rowston as of April 25, 2026.' },
      armadilha: {
        titulo: 'Trap: Bryczek by KO in R1 at +400',
        descricao: 'The market pays it and the public bites on the "5-fight regional R1 KO streak + dropped Tavares twice" narrative. The trap: against Tavares he didn\'t finish in R1 or R2 — it took until R3 1:43. The R1 KO streak was on the regional Polish circuit. Real probability of a Bryczek R1 KO against Rowston (CKB camp, 3 inches of reach) is more like 15-20%, not the 25-30% the market is pricing at +300-400.',
      },
    },
  },
};
