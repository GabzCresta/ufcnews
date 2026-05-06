import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'green-vs-stephens',
  evento_id: null,
  slug: 'green-vs-stephens',
  titulo: 'Green vs Stephens: The Vets Are Back (But on Opposite Trajectories)',
  subtitulo:
    "Green is coming off a TKO R2 over Zellhuber in February 2026 (3/3 takedowns landed) and an SD over Gibson Jr (short notice). Stephens lost UD 30-27 x3 wrestling-controlled to Mason Jones in his UFC return in May 2025, then ate a TKO R5 in BKFC against Mike Perry with 6 knockdowns in October 2025 — at the SAME Prudential Center that's hosting UFC 328. Stephens' last UFC KO was 2018. He's tied with Clay Guida for most losses in UFC history (19).",
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'10"', envergadura: '71"', idade: 39, academia: 'Pinnacle MMA, Redlands CA' },
      fighter2: { altura: '5\'9"', envergadura: '71"', idade: 39, academia: 'Alliance MMA, Chula Vista' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decision',
    confidence: 'HIGH',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Bobby Green',
    apelido: 'King',
    record: '34-17-1',
    ranking: 'N/R Lightweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Daniel Zellhuber', method: 'TKO R2 (cross + GnP, 4:55)', event: 'UFC Mexico City' },
      { result: 'W', opponent: 'Lance Gibson Jr', method: 'SD', event: 'UFC on ESPN 73' },
      { result: 'L', opponent: 'Mauricio Ruffy', method: 'KO R1 (spinning wheel kick, 2:07)', event: 'UFC 313' },
    ],
  },
  fighter2_info: {
    nome: 'Jeremy Stephens',
    apelido: 'Lil Heathen',
    record: '29-22-1',
    ranking: 'N/R Lightweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Mike Perry (BKFC)', method: 'TKO R5 (6 knockdowns, 1:35)', event: 'BKFC 82 (Prudential Center)' },
      { result: 'L', opponent: 'Mason Jones', method: 'UD (30-27 x3, wrestling-controlled)', event: 'UFC on ESPN 67' },
      { result: 'W', opponent: 'Eddie Alvarez (BKFC)', method: 'TKO R3 (corner stoppage)', event: 'BKFC KnuckleMania 5' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: 'May 9, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
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
      evento_nome: 'UFC 328: Chimaev vs Strickland',
      evento_data: 'May 9, 2026',
      evento_local: 'Prudential Center, Newark, New Jersey',
      categoria_peso: 'Lightweight (155 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'The Vets Are Back',
      tagline_sub: "Green is 2-0 (TKO Zellhuber + SD Gibson). Stephens dropped a UD to Mason Jones in May 2025 + 6 knockdowns in BKFC vs Perry October 2025 at the SAME Prudential. The Iowan's last UFC KO was 2018.",
      fighter1: {
        nome_completo: 'Bobby "King" Green',
        apelido: 'King',
        sobrenome: 'Green',
        record: '34-17-1',
        ranking: 'N/R Lightweight',
        info_extra: 'Fontana, California | Age 39',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/GREEN_KING_L_12-13.png?itok=HVqFKE1S',
      },
      fighter2: {
        nome_completo: 'Jeremy "Lil Heathen" Stephens',
        apelido: 'Lil Heathen',
        sobrenome: 'Stephens',
        record: '29-22-1',
        ranking: 'N/R Lightweight',
        info_extra: 'Iowa | Age 39',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-05/STEPHENS_JEREMY_L_05-03.png?itok=kjaAy7yE',
      },
    },

    qualitative_insight: {
      tag: 'THE DECIDING POINT',
      headline: "Stephens Has the KO Power. But He Got Wrestled and Dropped 6 Times in His Last Fight in This Same Building.",
      insight:
        "The lazy read is 'two 39-year-old vets, brawl, Stephens has KO power, puncher's chance.' The honest read looks at the immediate history. Green is 2-0 in his last two: a TKO R2 over Daniel Zellhuber in February 2026 (3/3 takedowns landed, 86-17 strike differential, finished with cross-right + left hook + GnP), and an SD over Lance Gibson Jr in December 2025 (close fight against a Canadian short-notice prospect). At 39 he still has defensive boxing, technical footwork, and the all-time UFC lightweight sig strikes record (1,950). And against Jim Miller at UFC 300 (April 2024) his striking accuracy CLIMBED across rounds — 51% R1, 53% R2, 67% R3 — meaning his cardio sharpens late, not the other way around. Stephens, on the other side, returned to the UFC in May 2025 against Mason Jones and lost UD 30-27 x3, wrestling-controlled by a man 8 years younger (Jones with 2 takedowns + back take in R1, sweep R2, multiple TDs in R3 with mount). \"No KO power demonstrated,\" per the Cageside Press recap. Then, four months before UFC 328, he fought bare-knuckle against Mike Perry at BKFC 82 (October 4, 2025) AT THE SAME PRUDENTIAL CENTER THAT'S HOSTING UFC 328. Result: TKO R5 1:35, 6 knockdowns absorbed (1 in R3, 2 in R4, 3 in R5), 130 punches eaten. Stephens' last UFC KO win was February 2018 (Emmett), 8 years ago. The KO power exists when the timing lands (Eddie Alvarez dropped 2x in BKFC January 2025), but the timing is fading along with the chin. Green is a technical, paced striker with boxing + ring IQ, and Stephens HISTORICALLY loses to that profile (Yair, Zabit, Kattar, Renato Moicano, Cub Swanson, Charles Oliveira at FW).",
      tension: {
        truth_a: "Stephens has 19 KOs in 29 wins (66% career finish rate), 6 Fight of the Night bonuses, KO'd Eddie Alvarez in BKFC January 2025 with counter rights. If he lands a clean overhand-right early, the KO is on the table. Power didn't disappear — he KO'd Alvarez 9 months ago.",
        truth_b: "Stephens' last UFC KO win was February 2018 vs Emmett (8 years). Mason Jones won UD 30-27 x3 wrestling-controlled in May 2025 (\"no KO power demonstrated\"). Mike Perry landed 6 knockdowns in October 2025 AT THE SAME PRUDENTIAL CENTER. Green is 2-0, the all-time UFC lightweight leader in sig strikes, and Stephens historically loses to the technical, paced striker.",
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Bobby Green',
        color: 'red',
        momentum_score: 7,
        momentum_label: 'On Fire',
        momentum_trend: 'ascending',
        momentum_note: "2-0 in his last two: TKO R2 4:55 over Zellhuber in February 2026 (3/3 takedowns landed, 86-17 strike differential, finished with cross + left hook + GnP), and an SD over Lance Gibson Jr in December 2025 (Canadian short-notice prospect). Recovered from two painful R1 losses: KO via spinning WHEEL kick (not a back kick) from Mauricio Ruffy in March 2025, and a tech-sub triangle from Paddy Pimblett in July 2024 (not an RNC). At 39 he holds the UFC lightweight all-time sig strikes record (1,950). Pre-Miller fight at UFC 300, his accuracy climbed across rounds (R1 51%, R2 53%, R3 67%) — cardio sharpens late. Trains Pinnacle MMA in Redlands CA with Jacob Behney.",
        recent_fights: [
          { date: 'Feb 2026', opponent: 'Daniel Zellhuber', result: 'W', method: 'TKO R2 (cross + GnP, 4:55)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: '3/3 takedowns landed, 86-17 strikes. Finished with cross-right + left hook.' },
          { date: 'Dec 2025', opponent: 'Lance Gibson Jr', result: 'W', method: 'SD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'Tight SD against a Canadian short-notice prospect.' },
          { date: 'Mar 2025', opponent: 'Mauricio Ruffy', result: 'L', method: 'KO R1 (spinning wheel kick, 2:07)', opponent_rank: 'Top 15 Lightweight', quality_score: 3, quality_label: 'Good', note: 'WHEEL kick (not a back kick). Ruffy faked a left hand and SPUN INTO a wheel kick that caught Green on the temple.' },
          { date: 'Jul 2024', opponent: 'Paddy Pimblett', result: 'L', method: 'Tech-sub R1 (TRIANGLE, 3:22)', opponent_rank: 'Top 15 Lightweight', quality_score: 3, quality_label: 'Good', note: 'TRIANGLE choke (not an RNC). Green dropped shooting a takedown straight into a guillotine, Pimblett transitioned to triangle.' },
          { date: 'Apr 2024', opponent: 'Jim Miller', result: 'W', method: 'UD (30-27, 30-25, 29-26)', opponent_rank: 'Top 15 Lightweight', quality_score: 3, quality_label: 'Good', note: 'Decisive cards. Green hit 67% accuracy in R3. Cardio sharpening at 39.' },
        ],
      },
      fighter2: {
        nome: 'Jeremy Stephens',
        color: 'blue',
        momentum_score: 2,
        momentum_label: 'Falling',
        momentum_trend: 'descending',
        momentum_note: "UFC record 15-19 + 1 NC, TIED with Clay Guida for most losses in UFC history. Returned to the UFC in May 2025 after PFL (1-2 in 2022) and BKFC (3-1, 2 KOs). UFC return: UD 30-27 x3 loss to Mason Jones (Des Moines, his hometown), wrestling-controlled by a man 8 years younger. In October 2025, he fought bare-knuckle against Mike Perry at BKFC 82 (October 4, 2025) AT THE SAME PRUDENTIAL CENTER hosting UFC 328: TKO R5 1:35, 6 knockdowns absorbed (1 in R3, 2 in R4, 3 in R5), 130 punches eaten. In January 2025 he KO'd Eddie Alvarez at BKFC with counter rights — KO power exists when the timing lands. Last UFC KO was February 2018 (Emmett, 8 years ago). Trains Alliance MMA in Chula Vista (Eric Del Fierro, Dom Cruz's coach).",
        recent_fights: [
          { date: 'Oct 2025', opponent: 'Mike Perry (BKFC)', result: 'L', method: 'TKO R5 (1:35, 6 knockdowns)', opponent_rank: 'BKFC King of Violence', quality_score: 4, quality_label: 'Very Good', note: '6 knockdowns absorbed (1 R3, 2 R4, 3 R5). 130 punches. AT THE SAME PRUDENTIAL CENTER hosting UFC 328. 7 months prior.' },
          { date: 'May 2025', opponent: 'Mason Jones', result: 'L', method: 'UD (30-27 x3)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UFC return after 3 years. Wrestling-controlled: 2 TDs in R1 + back take, sweep R2, multiple TDs R3 with mount. "No KO power demonstrated."' },
          { date: 'Jan 2025', opponent: 'Eddie Alvarez (BKFC)', result: 'W', method: 'TKO R3 (corner stoppage)', opponent_rank: 'Former UFC LW Champion', quality_score: 4, quality_label: 'Very Good', note: 'KnuckleMania 5 in Philly. 2 knockdowns in R3 with counter rights. Power exists.' },
          { date: 'Jul 2021', opponent: 'Mateusz Gamrot', result: 'L', method: 'Sub R1 (kimura, 1:05)', opponent_rank: 'Top 15 Lightweight', quality_score: 3, quality_label: 'Good', note: 'FASTEST kimura in UFC history. R1 1:05, NOT R3 as commonly reported.' },
          { date: 'May 2020', opponent: 'Calvin Kattar', result: 'L', method: 'TKO R2 (elbows)', opponent_rank: 'Top 10 Featherweight', quality_score: 4, quality_label: 'Very Good', note: 'CATCHWEIGHT (Stephens missed weight by 5 lbs). Forehead-splitting elbow.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Green', media_oponentes: 3, media_oponentes_label: 'Good', aproveitamento: '3W-2L (last 5)', contra_top5: '0W-1L' },
      fighter2: { nome: 'Stephens', media_oponentes: 3, media_oponentes_label: 'Good', aproveitamento: '1W-4L (last 5 combat sports)', contra_top5: '0W-2L UFC' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: "No common opponents. Calibre tied at 3 (Good), but the momentum gap is enormous. Green 3W-2L in his last 5 with 2 straight wins (TKO Zellhuber + SD Gibson). Stephens 1W-4L in his last 5 combat sports: vs Mason Jones (UFC May 2025 UD loss), vs Mike Perry (BKFC Oct 2025 TKO R5 6 knockdowns), vs Eddie Alvarez (BKFC Jan 2025 TKO W), vs Bobby Taylor (BKFC Sep 2024 W), vs Natan Schulte (PFL Nov 2022 sub L). Age 39 weighs differently on each man — Green peaking recently, Stephens in acute physical decline.",
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 6.07, valueB: 3.17, maxVal: 7, format: 'decimal', note: "Green ~2x Stephens' volume. UFC LW all-time leader (1,950)." },
        { label: 'Striking Accuracy (%)', valueA: 52, valueB: 41, maxVal: 100, format: 'percent', note: 'Green more accurate via technical boxing.' },
        { label: 'Strikes Absorbed/Min', valueA: 7.0, valueB: 4.0, maxVal: 8, format: 'decimal', reverseWinner: true, note: 'Green absorbs more (high-pace exchanges), Stephens more economical.' },
        { label: 'Striking Defense (%)', valueA: 56, valueB: 57, maxVal: 100, format: 'percent', note: 'Even.' },
        { label: 'Takedowns per 15 Min', valueA: 0.8, valueB: 0.5, maxVal: 5, format: 'decimal', note: 'Both strikers, low wrestling.' },
        { label: 'Takedown Defense (%)', valueA: 73, valueB: 59, maxVal: 100, format: 'percent', note: "Green better TDD. Stephens broken by Mason Jones' wrestling in May 2025." },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '39', fighter2: '39', note: 'Same age. Green DOB Aug 1986, Stephens DOB May 1986 (turns 40 a few weeks later).' },
        { label: 'Height', fighter1: '5\'10"', fighter2: '5\'9"', note: 'Green 1 inch taller.' },
        { label: 'Reach', fighter1: '71"', fighter2: '71"', note: 'Even.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Same stance.' },
        { label: 'Camp', fighter1: 'Pinnacle MMA, Redlands CA', fighter2: 'Alliance MMA, Chula Vista', note: 'Jacob Behney vs Eric Del Fierro.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking Volume', advantage: 'fighter1', gap: 4, note: 'Green 6.07 SLpM (UFCStats) vs Stephens 3.17. ~2x volume. UFC LW all-time leader (1,950).' },
        { label: 'Technical Boxing', advantage: 'fighter1', gap: 3, note: 'Green footwork + defensive head movement. Stephens traditional overhand-puncher.' },
        { label: 'Knockout Power', advantage: 'fighter2', gap: 2, note: 'Stephens 19 MMA total KOs (UFC has only 8 KOs in 15 wins). Green 12 KOs in 34. Power exists but timing has decayed.' },
        { label: 'Cardio / 3 Rounds', advantage: 'fighter1', gap: 4, note: 'Green hit 67% accuracy in R3 vs Miller (climbing). Stephens gassed against Perry R5, Mason Jones R3.' },
        { label: 'Momentum', advantage: 'fighter1', gap: 5, note: 'Green 2-0 last 2. Stephens 1W-4L in last 5 combat sports including 6 knockdowns absorbed at the SAME Prudential Center 7 months ago.' },
        { label: 'Chin / Durability', advantage: 'fighter1', gap: 1, note: 'Green 6 stoppages absorbed (Poirier, Makhachev, Dober, Turner, Pimblett-tech, Ruffy). Stephens 6 knockdowns accumulated in BKFC October 2025. Chin questions on both sides.' },
      ],
      summary: "Green dominates where pace matters (volume 2x, technique, sharpening cardio R3, momentum 5/5). Stephens only has KO power, and offensive timing has decayed (last UFC KO 2018, gassed vs Perry and Jones). For Stephens to win, he has to land an early R1 overhand. If the fight goes R2-R3, Green paces it and wins the cards.",
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Green', ko_tko: { count: 12, percent: 35 }, submission: { count: 9, percent: 26 }, decision: { count: 13, percent: 38 }, total_wins: 34 },
      fighter2: { nome: 'Stephens', ko_tko: { count: 19, percent: 66 }, submission: { count: 2, percent: 7 }, decision: { count: 8, percent: 28 }, total_wins: 29 },
      insight: 'Green spreads wins across KO (35%), sub (26%), and dec (38%) — complete technical-striker profile that can finish. Stephens 66% by KO/TKO — explosive overhand striker but one-dimensional. When Stephens doesn\'t land the KO, he loses (see his 14 decision losses).',
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Green', ko_tko: { count: 6, percent: 35 }, submission: { count: 1, percent: 6 }, decision: { count: 10, percent: 59 }, total_losses: 17 },
      fighter2: { nome: 'Stephens', ko_tko: { count: 3, percent: 14 }, submission: { count: 4, percent: 19 }, decision: { count: 14, percent: 67 }, total_losses: 21 },
      insight: 'Green has 17 losses in 52 fights: 6 by KO/TKO (Poirier UFC 199 R1, Dober UFC Vegas 66 highlight, Turner 2023, Makhachev ground-and-pound) and 1 sub (Pimblett UFC 304 R1) — his only career submission loss at 38. Stephens 21 catalogued losses (official record 22 with 1 old case lacking verified method), 67% by decision (14): classic KO-or-bust profile — when the overhand misses, it goes to the cards and he loses. Both veterans worn by mileage, but Green has 1 sub vs Stephens 4 (including Lauzon armbar, Gamrot kimura, Schulte arm triangle, Din Thomas armbar). For value bets: base case is the cards. Stephens by early KO is the only angle for him.',
    },

    previsao_final: {
      winner_name: 'Bobby Green',
      winner_side: 'fighter1',
      predicted_method: 'Decision',
      confidence_score: 8,
      confidence_label: 'HIGH',
      explanation:
        "The pick is Bobby Green by decision. Looking fight by fight, the edge appears across six dimensions: stats (Green 6.07 SLpM ~2x Stephens 3.17, all-time UFC LW leader in sig strikes at 1,950), competition level (both calibre 3 but Green 3W-2L last 5 vs Stephens 1W-4L last 5 combat sports), style (paced technical boxer vs traditional overhand-puncher — Stephens HISTORICALLY loses to that profile: Yair, Zabit, Kattar, Moicano, Cub, Oliveira), momentum (Green 2-0 last 2 vs Stephens 6 knockdowns absorbed at the SAME Prudential Center 7 months ago), qualitative intel (Stephens' last UFC KO was Feb 2018, 8 years ago, and the Mason Jones recap wrote \"no KO power demonstrated\"), and cardio (Green hit 67% accuracy in R3 vs Miller climbing, Stephens gassed in R3 vs Jones and R5 vs Perry). Stephens has a real path (22%): KO power exists (he KO'd Eddie Alvarez in BKFC January 2025 with 2 knockdowns), if he lands an overhand-right in the first 90 seconds of R1 he can still finish. But Green paced 3R against Jim Miller (UFC 300 UD 30-27, 30-25, 29-26), wrestled Zellhuber (3/3 takedowns), and his cardio sharpens R2-R3. Conviction 8 because six dimensions converge with DIRECT PRECEDENT: BKFC 82 vs Perry was 4 months earlier, SAME BUILDING, 6 knockdowns absorbed.",
      x_factor: {
        title: 'R1 or It Goes to Decision',
        description: "If Stephens lands a heavy overhand-right in the first 90s of R1, Green wobbles and the KO comes (Green has 6 career stoppages, 4 of his last 5 KO losses came in R1). If Green survives the first 5 minutes with defensive head movement + footwork, the fight enters his territory and he paces it. But Stephens has to do that at 39 with a chin recently broken by Mike Perry (6 knockdowns, R5 1:35, 4 months ago).",
      },
      upset_alert: {
        title: 'Stephens Lands the Early Overhand',
        description: "Stephens has 19 career MMA KOs (66%), 6 Fight of the Night bonuses, KO'd Eddie Alvarez in BKFC January 2025 with counter rights (2 knockdowns R3). Power exists when the timing lands. If he hits an overhand-right in the first 90s of R1 against Green's recently-broken chin (Ruffy March 2025 wheel kick R1, Pimblett triangle R1), the KO is on the table. Probability 22%, low because his last UFC KO was 2018 and the timing has clearly decayed (vs Mason Jones \"no KO power demonstrated\").",
      },
      probabilities: { fighter1: { nome: 'Green', percent: 75 }, fighter2: { nome: 'Stephens', percent: 22 }, draw: 3 },
      conviction: {
        thesis:
          "The thesis is: Bobby Green wins because, first, he has 1,950 sig strikes in his UFC lightweight career (DIVISION RECORD), 6.07 SLpM (~2x Stephens' 3.17), technical paced boxing, and cardio that SHARPENS in R3 (vs Jim Miller at UFC 300 R1 51% → R2 53% → R3 67% accuracy). Second, Stephens HISTORICALLY loses to a technical paced striker: Yair UD, Zabit UD, Kattar TKO, Moicano L, Cub L, Oliveira L. Green is exactly that profile. Third, BKFC 82 against Mike Perry was 4 MONTHS BEFORE THE FIGHT, AT THE SAME PRUDENTIAL CENTER hosting UFC 328: 6 knockdowns absorbed (1 R3, 2 R4, 3 R5), TKO R5 1:35. And Stephens' last UFC KO was Feb 2018 (8 years), while Mason Jones won UD wrestling-controlled in May 2025 with \"no KO power demonstrated\" in the recap. Path: Green paces R1 with jab + defensive head movement, avoids Stephens' overhand-right, accumulates volume R2-R3 as cardio sharpens, runs 30-27 cards. Falls apart if Stephens lands a heavy overhand in the first 90s of R1 against Green's recently-broken chin.",
        conviction_score: 8,
        conviction_rationale: "Conviction 8 because six dimensions converge (stats 2x volume, calibre, style, brutal momentum, qualitative, cardio), and the Perry precedent at the SAME BUILDING 4 months earlier is direct evidence Stephens' chin is cracked. Not 9 because both have chin questions (Green 6 stoppages absorbed, Stephens 6 knockdowns recently), variance among veterans is high, and Stephens' KO power was real in January 2025 (Alvarez). Not 7 because the evidence stacks against the Iowan almost mechanically: 5 dimensions with gaps >3, only 1 with a slight gap in his favor (latent KO power).",
        conviction_breakers: [
          'Stephens lands a clean overhand-right in the first 90s of R1',
          'Green shows rust at 39 or is still broken post-Ruffy KO',
          'Stephens recovers UFC timing lost over 8 years without a UFC KO',
          'Green absorbs cumulative damage R1-R2 and loses volume late',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 22,
          key_scenario: "Stephens lands a heavy overhand-right in the first 60-90s of R1 (similar to Eddie Alvarez R3 BKFC). Green wobbles with a recently-exposed chin (Ruffy R1, Pimblett R1, Turner R1 — 4 of last 5 KO losses came R1). Stephens hunts with counter rights and finishes via KO R1 or R2.",
          required_conditions: [
            'Land a clean overhand-right in the first 90s of R1',
            'Recover UFC timing lost over 8 years without a UFC KO',
            "KO power present like in Jan 2025 vs Alvarez, not like vs Mason Jones (no KO demonstrated)",
            "Green's chin fragile post-Ruffy + Pimblett + Turner R1 losses",
          ],
          historical_precedent: "Stephens KO'd Eddie Alvarez (former UFC LW champion) in BKFC January 2025 with counter rights, 2 knockdowns R3. Power exists when the timing lands. But against Mason Jones (May 2025) and Mike Perry (Oct 2025) the timing failed: zero knockdowns scored, 6 absorbed against Perry. Stephens' lane is narrow but non-zero.",
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Bobby Green', odds: '-305 (BoxingNews Apr 2026)', reasoning: "Real probability 75%, implied at -305 = 75.3%. No edge on the ML. Market is aligned with the thesis." },
          { type: 'Method', pick: 'Green by Decision', odds: '+150 (estimated)', reasoning: "Green 38% career wins by decision + 67% R3 accuracy vs Miller shows climbing cardio. Stephens' last UFC KO 2018, lost UD wrestling-controlled to Mason Jones. The likely scenario is UD 30-27 or 29-28. At +150 implied is 40%, real edge (estimated real 50-55%)." },
          { type: 'Total Rounds', pick: 'Over 2.5 rounds', odds: '-180 (estimated)', reasoning: 'Base scenario is decision. A Stephens stoppage requires an early overhand, and his timing is fading. Green still has chin questions post-Ruffy but Stephens isn\'t Ruffy.' },
        ],
        best_bet: { pick: 'Green by Decision at +150', reasoning: "Highest expected edge on the fight. Green's pacing + cardio climbing R3 vs Stephens' last UFC KO in 2018. Green 30-27 dominant is more likely than the ML implies. ML Green at -305 is too expensive." },
      },
      key_stats: [
        { value: '6 knockdowns', label: 'Stephens absorbed from Mike Perry at BKFC 82 (Oct 2025)', sublabel: 'TKO R5 1:35, AT THE SAME PRUDENTIAL CENTER hosting UFC 328. 4 months prior.' },
        { value: '8 years', label: "Since Stephens' last UFC KO (Emmett, Feb 2018)", sublabel: "Power exists (he KO'd Alvarez at BKFC Jan 2025), but UFC timing has decayed." },
        { value: '1,950', label: "Green's UFC lightweight career sig strikes", sublabel: 'Division all-time leader. 23 UFC fights.' },
        { value: '67%', label: "Green's accuracy in R3 vs Jim Miller (UFC 300, Apr 2024)", sublabel: 'R1 51% → R2 53% → R3 67%. Cardio climbing at 39.' },
        { value: '19', label: "Stephens' UFC losses (tied with Clay Guida)", sublabel: 'Most UFC losses in history (tied with Guida, who was cut in January 2025).' },
      ],
      odds: {
        fighter1_odds: '-305',
        fighter2_odds: '+245',
        fighter1_name: 'Green',
        fighter2_name: 'Stephens',
        source: 'BoxingNews Green -305 / Stephens +245 in April 2026. DraftKings -300 to -308. Polymarket aligned. Market reads the momentum gap (2-0 vs 1W-4L last 5 combat sports) correctly.',
      },
      armadilha: {
        titulo: 'The Trap: Stephens by KO',
        descricao: "The market will offer \"Stephens by KO\" at attractive odds (+400 or better) based on his 19 MMA KOs + the Eddie Alvarez BKFC KO January 2025. But Stephens' last UFC KO was Feb 2018 (8 years), the Mason Jones recap wrote \"no KO power demonstrated\" in May 2025, and Mike Perry landed 6 knockdowns 4 months earlier. At 39 with UFC timing 8 years rusty, expecting a clean overhand to land against a peaking technical striker is a bet against the evidence. If the KO comes it comes R1, but it's the unlikely scenario.",
      },
    },
  },
};
