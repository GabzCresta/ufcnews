import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'thicknesse-vs-morales',
  evento_id: null,
  slug: 'thicknesse-vs-morales',
  titulo: 'Thicknesse vs Morales: Literal Pickem',
  subtitulo:
    'Colby Thicknesse trains alongside Volkanovski, fighting at home in Perth, sitting at 1-1 in the UFC. Vince Morales is 35, riding an 0-3 skid, must-win to keep his roster spot, working with Merab and Sterling. FightOdds.io has it at -110 / -110 — a literal pickem. Decision-survivor gate fires: both at 80% and 100% decision rate recently.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'7"', envergadura: 'N/A', idade: 26, academia: 'Freestyle Fighting Gym (Volkanovski)' },
      fighter2: { altura: '5\'7"', envergadura: '70"', idade: 35, academia: 'Syndicate MMA Las Vegas' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decision',
    confidence: 'LOW',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Colby Thicknesse', apelido: 'Slickness', record: '8-1-0', ranking: 'Unranked', ultimasLutas: [] },
  fighter2_info: { nome: 'Vince Morales', apelido: 'Vandetta', record: '16-10-0', ranking: 'Unranked', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: 'May 2, 2026',
  evento_local: 'RAC Arena, Perth, Australia',
  categoria_peso: 'Bantamweight (135 lbs)',
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
      categoria_peso: 'Bantamweight (135 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Literal Pickem',
      tagline_sub: '-110/-110. Decision-survivor gate fires: both fighters with high decision rates. Decision is the path.',
      fighter1: {
        nome_completo: 'Colby "Slickness" Thicknesse',
        apelido: 'Slickness',
        sobrenome: 'Thicknesse',
        record: '8-1-0',
        ranking: 'Unranked',
        info_extra: 'Wollongong, NSW Australia | 26 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-09/THICKNESSE_COLBY_L_09-27.png?itok=k5_-fSZV',
      },
      fighter2: {
        nome_completo: 'Vince "Vandetta" Morales',
        apelido: 'Vandetta',
        sobrenome: 'Morales',
        record: '16-10-0',
        ranking: 'Unranked',
        info_extra: 'Ontario, Oregon | 35 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-02/MORALES_VINCE_L_02-15.png?itok=QHbp1JM-',
      },
    },
    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: 'GATE 2 Fired: Decision Is the Path',
      insight:
        'Both fighters carry sky-high recent decision rates: Thicknesse at 100% in the UFC (UD over Topuria + UD over Musasa), Morales at 4 of 5 (80%). The decision-survivor gate fires — predicted method defaults to Decision. Thicknesse is a wrestle-pressure fighter (1.0 TDs per 15, BJJ + wrestling since age 6, Volkanovski training partner), Morales is a veteran striker-grappler with sub threat (nearly finished Smith by choke). The literal -110/-110 pickem signals the market doesn\'t see a clean edge either. Real edge sits in over rounds + total significant strikes, not in moneyline.',
      tension: {
        truth_a: 'Thicknesse is 26, on the rise, hometown Perth, with Volkanovski in his corner. Stuffed 8 of 8 takedowns vs Topuria.',
        truth_b: 'Morales is 35 and must-win, more experienced (16-10), real power (KO of Smolka 2021), sub threat (nearly finished Smith). Trained with Merab, Sterling, and Ricky Simon in 2025.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Colby Thicknesse', color: 'red', momentum_score: 6, momentum_label: 'Climbing', momentum_trend: 'ascending',
        momentum_note: '1-1 in the UFC. Tight UD win over Musasa at UFC Perth Sep 2025 (same arena, was rocked multiple times by the straight right). Before that, a UD loss to Topuria at UFC 312 Feb 2025 (his short-notice debut — stuffed 8 of 8 takedowns but absorbed cumulative damage).',
        recent_fights: [
          { date: 'Sep 2025', opponent: 'Josias Musasa', result: 'W', method: 'Unanimous Decision (29-28 x3)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'UFC Perth (same arena). Tight. Got rocked.' },
          { date: 'Feb 2025', opponent: 'Aleksandre Topuria', result: 'L', method: 'Unanimous Decision (30-27 x3)', opponent_rank: 'Prospect', quality_score: 3, quality_label: 'Good', note: 'UFC 312 debut. Stuffed 8 of 8 TDs.' },
          { date: 'Pre-UFC', opponent: 'Regional', result: 'W', method: '4 finishes + 4 decisions', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Poor', note: '7-1 amateur into the AUS regional pro scene.' },
        ],
      },
      fighter2: {
        nome: 'Vince Morales', color: 'blue', momentum_score: 2, momentum_label: 'Sliding', momentum_trend: 'descending',
        momentum_note: '0-3 skid (all decisions). Last UFC W: KO1 of Smolka in Dec 2021 — almost 4.5 years ago. Must-win to keep his UFC roster spot. Trained with Merab, Sterling, Ricky Simon in 2025 (elite BW sparring).',
        recent_fights: [
          { date: 'Mar 2025', opponent: 'Raul Rosas Jr', result: 'L', method: 'Unanimous Decision (29-28 x3)', opponent_rank: 'Prospect', quality_score: 3, quality_label: 'Good', note: 'UFC ESPN Mexico.' },
          { date: 'Feb 2025', opponent: 'Elijah Smith', result: 'L', method: 'Unanimous Decision (29-28 x3)', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Average', note: 'Smith reported he "considered tapping" to the choke.' },
          { date: 'Sep 2024', opponent: 'Taylor Lapilus', result: 'L', method: 'Unanimous Decision (30-27 x3)', opponent_rank: 'Top 15 BW', quality_score: 4, quality_label: 'Very Good', note: 'Lapilus put on a striking clinic.' },
          { date: 'Nov 2022', opponent: 'Miles Johns', result: 'L', method: 'Decision', opponent_rank: 'UFC active', quality_score: 2, quality_label: 'Average', note: 'Last fight before his initial release.' },
          { date: 'May 2022', opponent: 'Jonathan Martinez', result: 'L', method: 'Unanimous Decision', opponent_rank: 'UFC active', quality_score: 2, quality_label: 'Average', note: 'UFC FN 206.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Thicknesse', media_oponentes: 2, media_oponentes_label: 'Average', aproveitamento: '1W-1L UFC', contra_top5: '0W-0L' },
      fighter2: { nome: 'Morales', media_oponentes: 3, media_oponentes_label: 'Good', aproveitamento: '0W-3L skid', contra_top5: '0W-1L' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'No common opponents. Calibre similar (~3). Decision-survivor gate fires: both above 40% decision rate over the last 5 (Thicknesse 100%, Morales 80%). Default predicted method = Decision.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 3.33, valueB: 3.57, maxVal: 6, format: 'decimal', note: 'Volume similar.' },
        { label: 'Sig. Strikes Absorbed/Min', valueA: 3.5, valueB: 4.00, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Morales absorbs more (4.00) than he lands (3.57). Defensive red flag.' },
        { label: 'Strike Defense (%)', valueA: 0, valueB: 53, maxVal: 100, format: 'percent', note: 'Thicknesse strike defense not captured.' },
        { label: 'Takedowns per 15 Min', valueA: 1.0, valueB: 0.5, maxVal: 5, format: 'decimal', note: 'Thicknesse the more active offensive wrestler.' },
        { label: 'Takedown Defense (%)', valueA: 50, valueB: 0, maxVal: 100, format: 'percent', note: 'Thicknesse TDD 50%. Morales not captured.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '26', fighter2: '35', note: 'Thicknesse nine years younger. Critical at 135.' },
        { label: 'Height', fighter1: '5\'7"', fighter2: '5\'7"', note: 'Even.' },
        { label: 'Reach', fighter1: 'N/A', fighter2: '70"', note: 'Morales\' reach known.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Camp', fighter1: 'Freestyle Fighting Gym (Volkanovski)', fighter2: 'Syndicate MMA Las Vegas', note: 'Elite camps both ways.' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume Striking', advantage: 'fighter2', gap: 1, note: 'SLpM marginally higher.' },
        { label: 'Offensive Wrestling', advantage: 'fighter1', gap: 1, note: 'TD avg 1.0 vs 0.5.' },
        { label: 'Power', advantage: 'fighter2', gap: 2, note: 'Morales KO\'d Smolka in 2021. Thicknesse zero KOs in the UFC.' },
        { label: '3R Cardio', advantage: 'fighter1', gap: 2, note: 'Age 26 + Volk\'s camp. Morales 35 but goes the distance.' },
        { label: 'Sub Game', advantage: 'fighter2', gap: 1, note: '5 career subs (peruvian necktie for the UFL title in 2024).' },
        { label: 'Hometown', advantage: 'fighter1', gap: 3, note: 'Perth + crowd advantage on close cards.' },
      ],
      summary: 'Almost dead even. Thicknesse holds a marginal edge via age + hometown. Morales has more experience but he\'s on the slide.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Thicknesse', ko_tko: { count: 2, percent: 25 }, submission: { count: 2, percent: 25 }, decision: { count: 4, percent: 50 }, total_wins: 8 },
      fighter2: { nome: 'Morales', ko_tko: { count: 7, percent: 44 }, submission: { count: 5, percent: 31 }, decision: { count: 4, percent: 25 }, total_wins: 16 },
      insight: 'Thicknesse is 50% decisions. Morales is more of a finisher historically, but recent results are decision-heavy.',
    },
    previsao_final: {
      winner_name: 'Colby Thicknesse', winner_side: 'fighter1',
      predicted_method: 'Decision', confidence_score: 5, confidence_label: 'LOW',
      explanation:
        'Real literal pickem. Pick is Thicknesse by decision at conviction 5 (close fight). Marginal edge via age (-9 years), hometown Perth + cards advantage, Volkanovski training partner (elite camp), Morales coming in 0-3 with the door closing. Decision-survivor gate fires — both fighters above 40% decision rate recently, default predicted method = Decision. No clean (a)/(b)/(c) justification for a non-decision exemption. Expecting a tight one. The path I see: Thicknesse is younger, fresher, and the crowd will tip close cards.',
      x_factor: {
        title: 'Close cards decide it',
        description: 'Literal pickem + decision modal + hometown = one or two rounds get tipped by crowd noise in the judges\' eyes. Subtle but real edge for Thicknesse.',
      },
      upset_alert: {
        title: 'Morales finds a finish in a scramble',
        description: '7 KOs + 5 subs over his career. Nearly choked Smith out. Land the overhand right or find the neck and it\'s over. Around 40%.',
      },
      probabilities: { fighter1: { nome: 'Thicknesse', percent: 51 }, fighter2: { nome: 'Morales', percent: 47 }, draw: 2 },
      conviction: {
        thesis:
          'The thesis: Thicknesse wins because he\'s nine years younger, fights at home in Perth, has Volkanovski in his corner, and Morales is 0-3 must-win at 35. Path: Thicknesse pressures with takedown attempts, Morales defends but absorbs cumulative damage, tight decision tipped by crowd advantage. Believe it\'ll be tight, but the path is visible.',
        conviction_score: 5,
        conviction_rationale: 'Honest 5 conviction. Literal -110/-110 pickem. Decision gate fires forcing the default. Marginal edge in age + hometown only. Not enough convergent dimensions for a 6+.',
        conviction_breakers: [
          'Morales lands the overhand right (KO Smolka power)',
          'Sub in a scramble (Morales nearly finished Smith)',
          'Cards swing to Morales on superior volume',
          'Thicknesse cardio dips (tiny UFC sample)',
        ],
        underdog_path: {
          viable: true, probability_estimate: 47,
          key_scenario: 'Morales uses volume and experience to control pace. Lands the overhand in a transition or finds the neck in a scramble. OR wins close cards on superior output.',
          required_conditions: ['Sustain volume across three rounds', 'Don\'t cede repeated takedowns', 'Find a finish or out-volume', 'Win close cards'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Rounds', pick: 'Over 2.5 Rounds', odds: '-150 to -180', reasoning: 'Combined 5 of 5 last fights to decision. Decision gate fired. Real probability of clearing 2.5 rounds is around 75%.' },
          { type: 'Total Sig Strikes', pick: 'Over 130 (combined)', odds: 'Variable', reasoning: 'Combined SLpM ~7. Across a theoretical 15 minutes that\'s 105, but BW prelims tend to sustain volume — Over 130 lines up with Lapilus-Morales (130+ strikes in 15 min).' },
          { type: 'Moneyline', pick: 'Thicknesse', odds: '-110', reasoning: 'Marginal edge on age + hometown. Real pickem, pick by preference.' },
          { type: 'Longshot', pick: 'Morales by Submission', odds: '+500 to +700', reasoning: 'Nearly finished Smith. 5 career subs. Around 10%.' },
        ],
        best_bet: { pick: 'Over 2.5 Rounds at -150 to -180', reasoning: 'Decision gate fires: both fighters with high decision rates. Decision is the clear modal scenario. Most defensible play.' },
      },
      key_stats: [
        { value: '-110/-110', label: 'Literal pickem', sublabel: 'FightOdds.io opening. The market doesn\'t see an edge either.' },
        { value: '0-3', label: 'Morales\' skid', sublabel: 'Must-win to keep his roster spot.' },
        { value: '5/5', label: 'Last decisions combined', sublabel: 'Decision gate fires: default decision.' },
        { value: '9 years', label: 'Age gap', sublabel: 'Thicknesse 26 vs Morales 35.' },
      ],
      odds: { fighter1_odds: '-110', fighter2_odds: '-110', fighter1_name: 'Thicknesse', fighter2_name: 'Morales', source: 'FightOdds.io opening literal pickem as of April 25, 2026.' },
      armadilha: {
        titulo: 'Trap: Specific KO or Sub method bet',
        descricao: 'Market will offer "Morales by KO" on the "veteran finisher" narrative or "Thicknesse by TKO" on "wrestler at home." The trap: their last 5 fights combined all went to decision, the decision gate fires the default decision call, and both have leaky strike defense (Morales\' SApM > SLpM). A specific-method bet ignores the clear signal: decision is the modal scenario, not the exception.',
      },
    },
  },
};
