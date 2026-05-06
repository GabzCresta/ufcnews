import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'van-vs-taira',
  evento_id: null,
  slug: 'van-vs-taira',
  titulo: 'Van vs Taira: The Royval Blueprint',
  subtitulo:
    "In October 2024, Brandon Royval handed in the Taira blueprint: 124-42 in significant strikes (3:1 ratio), 6 takedowns absorbed on 15 attempts, 12:13 of bottom control — and STILL won split decision. In June 2025, Joshua Van and Royval combined for 419 sig strikes (the first fight in UFC history with both men over 200 sig strikes), and Van took the UD. Van has 8.84 SLpM (highest in UFC history) and 81% TDD elite. Taira's TDD is just 45%. Market opened Taira -180, moved to -150.",
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'5"', envergadura: '~67"', idade: 24, academia: '4oz. Fight Club, Houston' },
      fighter2: { altura: '5\'7"', envergadura: '70"', idade: 26, academia: 'Paraestra Okinawa / Blackbelt Japan' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decision or late TKO',
    confidence: 'HIGH',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Joshua Van',
    apelido: 'The Fearless',
    record: '16-2-0',
    ranking: 'UFC Flyweight Champion',
    ultimasLutas: [
      { result: 'W', opponent: 'Alexandre Pantoja', method: 'TKO R1 (shoulder injury, 0:26)', event: 'UFC 323 (Title)' },
      { result: 'W', opponent: 'Brandon Royval', method: 'UD (30-27, 29-28, 29-28)', event: 'UFC 317' },
      { result: 'W', opponent: 'Bruno Silva', method: 'TKO R3', event: 'UFC 316' },
    ],
  },
  fighter2_info: {
    nome: 'Tatsuro Taira',
    apelido: 'The Best',
    record: '18-1-0',
    ranking: '#3 Flyweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Brandon Moreno', method: 'TKO R2 (back control + GnP, 2:24)', event: 'UFC 323' },
      { result: 'W', opponent: 'Hyun-sung Park', method: 'Sub R2 (face crank)', event: 'UFC on ESPN 71' },
      { result: 'L', opponent: 'Brandon Royval', method: 'SD (5R, outlanded 124-42)', event: 'UFC Fight Night 244' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: 'May 9, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Flyweight (125 lbs)',
  num_rounds: 5,
  is_titulo: true,
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
      categoria_peso: 'Flyweight (125 lbs)',
      num_rounds: 5,
      titulo_em_jogo: 'Flyweight Title',
      tagline: 'The Royval Blueprint',
      tagline_sub: "Royval beat Taira 124-42 in strikes (Oct 2024). Van vs Royval was the first UFC fight with both men over 200 sig strikes (June 2025). Taira's TDD is 45%. Van does it better.",
      fighter1: {
        nome_completo: 'Joshua "The Fearless" Van',
        apelido: 'The Fearless',
        sobrenome: 'Van',
        record: '16-2-0',
        ranking: 'UFC Flyweight Champion',
        info_extra: 'Houston, Texas (born Myanmar) | 24 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/VAN_JOSHUA_L_BELTMOCK.png?itok=oSYKPybb',
      },
      fighter2: {
        nome_completo: 'Tatsuro "The Best" Taira',
        apelido: 'The Best',
        sobrenome: 'Taira',
        record: '18-1-0',
        ranking: '#3 Flyweight',
        info_extra: 'Naha, Okinawa, Japan | 26 years old',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-07/TAIRA_TATSURO_L_08-02.png?itok=TNdVtfW4',
      },
    },

    qualitative_insight: {
      tag: 'THE X-FACTOR',
      headline: "Royval Showed How To Beat Taira. Van Does It Better.",
      insight:
        "The only loss of Tatsuro Taira's career came on October 12, 2024 against Brandon Royval — split decision (47-48, 48-47, 48-47) over five rounds at UFC Fight Night 244. The numbers tell the story: Royval landed 124 sig strikes, Taira landed 42 (a 3:1 ratio), and Taira STILL got 6 takedowns on 15 attempts (40% TD accuracy) and 12:13 of accumulated bottom control. Royval won despite eating all that ground time, because the volume-and-damage gap on the feet weighed more on the cards. R3 nearly stopped: Royval bloodied Taira's nose with combinations. Joshua Van does exactly that — only with 8.84 sig strikes per minute (the highest rate in UFC history; his 1,099 career sig strikes is 2nd all-time at flyweight), 56.8% accuracy (2nd in flyweight history, behind only Demetrious Johnson), and a +2.45 differential (best in flyweight history). And the same Royval who beat Taira got beaten by Van in June 2025: 419 combined sig strikes (the FIRST fight in UFC history with both men landing 200+), Van 30-27 on one card and 29-28 on the other two. Cardio for 25 minutes proven, elite TDD against a wrestler-sub-threat proven. Market opened Taira -180 on \"grappler beats striker\" empirics, then moved to -150 once the sharp money came in and read the blueprint.",
      tension: {
        truth_a: "Taira is the #3 flyweight at 18-1, a BJJ purple belt who just became the FIRST human to finish Brandon Moreno via TKO R2 at UFC 323 (Dec 2025) with back control + body triangle + GnP. 8 finishes in 18 wins (44%), 1.64 submissions/15min, 2.73 takedowns/15min at 61% TD accuracy. 3 inches of reach edge. The Moreno stoppage was controversial, but the stat line is real.",
        truth_b: "Taira's TDD is 45% (not 67% like much of the reporting says). On the feet against an 8.84 SLpM striker, 45% is a vulnerability. Van defends 81% of takedowns, owns the highest volume in UFC history, and Royval (a top-3 wrestler-grappler) already handed in the blueprint. The 12:13 bottom control over Taira wasn't enough on the cards when the gap was 124-42 strikes. Van does volume better than Royval.",
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Joshua Van',
        color: 'red',
        momentum_score: 10,
        momentum_label: 'On Fire',
        momentum_trend: 'ascending',
        momentum_note: "UFC flyweight champion since UFC 323 (Dec 2025) — Pantoja dislocated his left shoulder at 0:26 of R1 when Van caught his head kick and converted into a slam. 2nd-youngest UFC champion ever (24 years, 57 days), behind only Jon Jones, and the FIRST Asian-born male UFC champion. 5 straight wins: Pantoja, Royval (UD with 419 combined sig strikes — first in UFC history), Bruno Silva, Tsuruya, Durden. 8.84 SLpM is the highest rate in UFC history; 56.8% accuracy is 2nd all-time at flyweight. Trains at 4oz. Fight Club in Houston with Daniel Pineda (head coach), Jose Santibanez (wrestling), and Frank Gallego (ground).",
        recent_fights: [
          { date: 'Dec 2025', opponent: 'Alexandre Pantoja', result: 'W', method: 'TKO R1 (shoulder injury, 0:26)', opponent_rank: 'UFC Flyweight Champion', quality_score: 5, quality_label: 'Excellent', note: "Caught the high kick and elevated into a slam. Pantoja's left shoulder dislocated on impact. 2nd-youngest UFC champion in history." },
          { date: 'Jun 2025', opponent: 'Brandon Royval', result: 'W', method: 'UD (30-27, 29-28, 29-28)', opponent_rank: 'Top 3 Flyweight', quality_score: 5, quality_label: 'Excellent', note: '419 combined sig strikes (first in UFC history with both men over 200). Van 205 strikes at 67.4% accuracy. FOTN. 25-min cardio proven.' },
          { date: 'Jun 2025', opponent: 'Bruno Silva', result: 'W', method: 'TKO R3', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'Late TKO via ground strikes.' },
          { date: 'Mar 2025', opponent: 'Rei Tsuruya', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'UD over a Japanese prospect.' },
          { date: 'Dec 2024', opponent: 'Cody Durden', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'Dominated the final 10 minutes against a wrestler. Wrestling defense holding up.' },
        ],
      },
      fighter2: {
        nome: 'Tatsuro Taira',
        color: 'blue',
        momentum_score: 9,
        momentum_label: 'On Fire',
        momentum_trend: 'ascending',
        momentum_note: "First human to finish Brandon Moreno: TKO R2 2:24 at UFC 323 (Dec 2025) via body triangle from back control + GnP. The stoppage was controversial (Moreno protested, \"didn't show much visible damage\" per Cageside Press), but the win is in the books. Before that, sub R2 face crank over Park (Aug 2025). Only career loss: split decision to Royval (Oct 2024) where he absorbed 12:13 of bottom control but got outlanded 124-42. R1 vs Moreno exposed a BJJ vulnerability: caught in a triangle choke for nearly 4 minutes before escaping. BJJ purple belt. Career TDD is 45% (not 67% as commonly reported). Trains at Paraestra Okinawa / The Blackbelt Japan.",
        recent_fights: [
          { date: 'Dec 2025', opponent: 'Brandon Moreno', result: 'W', method: 'TKO R2 (back control + GnP, 2:24)', opponent_rank: 'Former Flyweight Champion', quality_score: 5, quality_label: 'Excellent', note: 'First to finish Moreno. Stoppage was controversial. R1 had Taira stuck in a triangle for ~4 minutes.' },
          { date: 'Aug 2025', opponent: 'Hyun-sung Park', result: 'W', method: 'Sub R2 (face crank)', opponent_rank: 'Top 15 Flyweight', quality_score: 3, quality_label: 'Good', note: 'Rare face crank off a ground transition.' },
          { date: 'Oct 2024', opponent: 'Brandon Royval', result: 'L', method: 'SD (47-48, 48-47, 48-47)', opponent_rank: 'Top 3 Flyweight', quality_score: 5, quality_label: 'Excellent', note: 'Only career loss. Outlanded 124-42 in strikes. 6 takedowns on 15 attempts (40%), 12:13 control. Lost cards anyway.' },
          { date: 'Jun 2024', opponent: 'Alex Perez', result: 'W', method: 'TKO R2 (knee injury)', opponent_rank: 'Top 10 Flyweight', quality_score: 4, quality_label: 'Very Good', note: "Body triangle from back control broke Perez's knee. Performance of the Night." },
          { date: 'Dec 2023', opponent: 'Carlos Hernandez', result: 'W', method: 'TKO R2 (strikes)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Fair', note: 'One of the rare times he finished via pure striking.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Van', media_oponentes: 4, media_oponentes_label: 'Very Good', aproveitamento: '5W-0L (last 5)', contra_top5: '2W-0L' },
      fighter2: { nome: 'Taira', media_oponentes: 4, media_oponentes_label: 'Very Good', aproveitamento: '4W-1L (last 5)', contra_top5: '1W-1L' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: "Decisive common opponent: Brandon Royval. Van beat Royval by UD at UFC 317 (June 2025) with 419 combined sig strikes (first in UFC history with both men 200+), Van 205 strikes on 304 attempts (67.4%). Taira lost to Royval by SD at UFC Fight Night 244 (Oct 2024) — only career loss — outlanded 124-42 in strikes despite 6 takedowns and 12:13 of control. The transitivity (Van beats Royval, Royval beats Taira) is direct evidence. And Van does volume BETTER than Royval: 8.84 SLpM (Van) vs 5.4 SLpM (Royval), 56.8% accuracy (Van) vs 47% (Royval on 458 vs Van's 304 attempts).",
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 8.84, valueB: 4.2, maxVal: 9, format: 'decimal', note: 'Van highest rate in UFC history. 1,099 career sig strikes is 2nd all-time at flyweight.' },
        { label: 'Striking Accuracy (%)', valueA: 56.8, valueB: 51, maxVal: 100, format: 'percent', note: 'Van 2nd all-time flyweight, behind only Demetrious Johnson.' },
        { label: 'Strikes Absorbed/Min', valueA: 3.5, valueB: 2.8, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Taira more economical, controlled grappler profile.' },
        { label: 'Striking Defense (%)', valueA: 60, valueB: 62, maxVal: 100, format: 'percent', note: 'Even.' },
        { label: 'Takedowns per 15 Min', valueA: 1.11, valueB: 2.73, maxVal: 5, format: 'decimal', note: "Taira shoots 2.5x more. His offensive identity." },
        { label: 'Takedown Accuracy (%)', valueA: 64, valueB: 61, maxVal: 100, format: 'percent', note: 'Close. Van high accuracy on low volume.' },
        { label: 'Takedown Defense (%)', valueA: 81, valueB: 45, maxVal: 100, format: 'percent', note: 'KEY STAT. Van 81% (elite) vs Taira 45% (vulnerable). Biggest gap in the matchup.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '24', fighter2: '26', note: 'Van DOB Oct 2001. Taira DOB Jan 2000. 2nd-youngest UFC champion in history.' },
        { label: 'Height', fighter1: '5\'5"', fighter2: '5\'7"', note: 'Taira 2 inches taller.' },
        { label: 'Reach', fighter1: '~67"', fighter2: '70"', note: 'Taira 3 inches more (not 5 inches as commonly reported).' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Same stance, no asymmetry.' },
        { label: 'Camp', fighter1: '4oz. Fight Club, Houston', fighter2: 'Paraestra Okinawa / Blackbelt Japan', note: 'Daniel Pineda (Texas, high-pace) vs Ryota Matsune (Japan, BJJ-first).' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking Volume', advantage: 'fighter1', gap: 5, note: 'Van 8.84 SLpM (HIGHEST in UFC history) vs Taira 4.2. 1,099 career sig strikes is 2nd all-time flyweight.' },
        { label: 'Striking Accuracy', advantage: 'fighter1', gap: 2, note: 'Van 56.8% (2nd in flyweight history, behind DJ) vs Taira 51%.' },
        { label: 'Offensive Wrestling', advantage: 'fighter2', gap: 3, note: 'Taira 2.73 TD/15min vs 1.11 from Van. Offensive identity. Got 6 takedowns on 15 against Royval.' },
        { label: 'Ground Game / BJJ', advantage: 'fighter2', gap: 4, note: 'Taira purple belt, 44% sub rate, 1.64 sub/15min. Van only 12% (2 of 16). But the 4-min triangle vs Moreno R1 exposed a vulnerability.' },
        { label: 'Takedown Defense', advantage: 'fighter1', gap: 5, note: 'Van 81% TDD (elite) vs Taira 45% (vulnerable). BIGGEST stat gap in the matchup.' },
        { label: 'Cardio / 5 Rounds', advantage: 'fighter1', gap: 1, note: 'Van went 25 min with Royval at full volume (205 sig strikes). Taira went 25 min with Royval and lost despite 12:13 of control.' },
      ],
      summary: "Van dominates where he controls the fight (on the feet, volume, takedown defense). Taira has the physical edge (3 inches of reach) and the better ground game. The key question is whether Van keeps the fight standing for 25 minutes. The answer: 81% TDD vs Taira's 45% TDA points to yes.",
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Van', ko_tko: { count: 8, percent: 50 }, submission: { count: 2, percent: 13 }, decision: { count: 6, percent: 38 }, total_wins: 16 },
      fighter2: { nome: 'Taira', ko_tko: { count: 6, percent: 33 }, submission: { count: 8, percent: 44 }, decision: { count: 4, percent: 22 }, total_wins: 18 },
      insight: "Van finishes 50% by KO/TKO, volume-striker-with-power profile. Taira finishes 44% by submission, classic BJJ profile. Van decides 38% (5-round war profile), Taira only 22%. The numbers mirror the thesis: Van presses striking through 25 minutes and wins the cards; Taira needs the ground.",
    },

    previsao_final: {
      winner_name: 'Joshua Van',
      winner_side: 'fighter1',
      predicted_method: 'Decision or late TKO',
      confidence_score: 8,
      confidence_label: 'HIGH',
      explanation:
        "The pick is Joshua Van by dominant decision or late TKO. Looking fight by fight, the edge appears across six dimensions: stats (Van 8.84 SLpM highest in UFC history + 56.8% accuracy + 81% TDD elite vs Taira's TDD of 45%), competition level (Van beat Royval with 419 combined sig strikes; Taira lost to the same Royval with a 124-42 differential), style (high-volume striker with elite TDD vs grappler who needs the ground and has 45% TDD), momentum (newly-crowned champion peaking vs Taira coming off his only career loss), qualitative intel (Royval handed in the exact blueprint and Van does it BETTER than Royval, with more volume and more accuracy), and direct common-opponent calibre (Van 30-27 on one card vs Royval, Taira split with an 82-strike gap). Taira has a viable path (28%): force entries via the clinch using his 3-inch reach edge, land a takedown in R1 and ride 4-5 minutes of top control per round, hunt back take + body triangle the way he finished Moreno. But he has to do that against 81% TDD over 25 minutes against a guy whose cardio already worked against Royval. Conviction 8 because six dimensions converge with direct precedent (common opponent + massively divergent stats).",
      x_factor: {
        title: 'Takedown Defense Decides',
        description: "Van has 81% career TDD. Taira shoots 2.73 takedowns per 15 minutes at 61% accuracy. The math: if Taira shoots 8 takedowns over 25 minutes and Van defends at 75-80%, that's 1-2 landed across the entire fight. Royval ate 6 takedowns on 15 attempts (40% TDA) and 12:13 of bottom control and STILL won the cards. Van defends better than Royval. R1 will be the first read.",
      },
      upset_alert: {
        title: 'Taira Locks the Body Triangle From the Back',
        description: "Taira's path is a repeat of what he did against Moreno in R2: takedown → back control → body triangle → GnP. BJJ purple belt, 1.64 sub/15min, 44% career sub rate, 3 inches of reach edge. But Taira's TDD is 45% (not 67% as commonly reported), so the problem cuts both ways: if Van wins the clinch, Taira eats it too. Probability 28%, real because the sub repertoire exists and he just finished a former champion.",
      },
      probabilities: { fighter1: { nome: 'Van', percent: 69 }, fighter2: { nome: 'Taira', percent: 28 }, draw: 3 },
      conviction: {
        thesis:
          "The thesis is: Joshua Van wins because, first, he has 8.84 sig strikes per minute (HIGHEST rate in UFC history) at 56.8% accuracy (2nd at flyweight all-time, behind only DJ), and 81% elite TDD against Taira's 45% TDD. Second, the common opponent Brandon Royval handed in DIRECT evidence: Royval beat Taira 124-42 in strikes (3:1 ratio, +82 differential — one of the 5 biggest in flyweight history) with Taira landing 6 takedowns on 15 attempts and 12:13 of control, and Van beat Royval with 419 combined sig strikes (first in UFC history with both men 200+), 30-27 on one card, proving 25-minute cardio. Third, Van does volume BETTER than Royval: 8.84 SLpM vs 5.4, 56.8% accuracy vs 47%, and his TDD is better than Royval's. Path: Van defends the early takedown attempts in R1, opens distance with footwork, accumulates volume at his pace through rounds 2-3, dictates the late rounds, and closes with finish pressure or 49-46 cards. Falls apart if Taira gets a back take and locks the body triangle the way he did with Moreno and rides 4+ minutes of control per round.",
        conviction_score: 8,
        conviction_rationale: "Conviction 8 because six dimensions converge with DIRECT PRECEDENT (Royval) and massive stat gaps (81% TDD vs 45%). Royval handed in the blueprint and Van does volume + accuracy BETTER than Royval. Market moved from Taira -180 to -150 once the sharp money read the blueprint. Not 9 because Taira has 3 inches of reach and a ground game grade above anything Van has faced (including Royval as a sub threat), and Van has only one 5-round fight under his belt (Royval). Probabilities 69-28-3 reflect that.",
        conviction_breakers: [
          'Taira gets a back take and locks the body triangle the way he did with Moreno in R2',
          "Van can't hold TDD at 80%+ over 25 minutes against a wrestler with offensive identity",
          'Taira uses his 3-inch reach edge to force the clinch and Van struggles to close the pocket',
          "Van's cardio fails over a long 5-round fight for the first time",
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 28,
          key_scenario: "Taira forces the clinch with his 3-inch reach edge, lands a double-leg in the first 90 seconds of R1. Stabilizes top control, transitions to back with the body triangle (his specialty — he finished Moreno and Perez that way). Stacks 4-5 minutes of top control per round, hunts a late submission or runs 49-46 cards. If the finish doesn't come, the decision arrives via accumulated control time. But he has to replicate that 4-5 times across 25 minutes against 81% TDD.",
          required_conditions: [
            'Land 2+ takedowns in the first 2 rounds (35%+ rate against 81% TDD)',
            'Hold 4+ minutes of top control per round he gets the takedown',
            'Use the 3-inch reach edge to make Van pay for closing distance',
            'Cardio holds over 5 rounds of offensive wrestling + ground game',
          ],
          historical_precedent: "Royval beat Taira by SD in October 2024 with frenetic pressure and movement. Taira recovered with finishes over Park (face crank, Aug 2025) and Moreno (back control TKO, Dec 2025). But the R1 vs Moreno has an important detail: Taira was stuck in a triangle choke for nearly 4 minutes before escaping — his ground game has holes when the opponent has offensive BJJ. Van isn't going to pull guard the way Moreno did, but the detail matters for how he handles tight spots.",
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Joshua Van', odds: '+150 (FanDuel, Apr 2026)', reasoning: "Real probability estimated at 69%, implied at +150 = 40%. 29-point edge. Market opened Taira -180 and moved to -150 once the sharp money came in. Best bet on the UFC 328 card by daylight." },
          { type: 'Method', pick: 'Van by Decision', odds: '+200 to +250 (estimated)', reasoning: "Van went 25 minutes with Royval at full volume (FOTN bonus). Taira has only been finished once in his career (not in the UFC). The most likely scenario among Van wins is dominant UD 49-46 or 50-45. At +225 implied is 31%, real edge over the 40-45% estimate." },
          { type: 'Total Rounds', pick: 'Over 3.5 rounds', odds: '-150 to -200 (estimated)', reasoning: "Van by decision is the primary scenario. Even if he finishes, late (R4-R5) via accumulation is more likely. Taira's chin is solid." },
        ],
        best_bet: { pick: 'Joshua Van ML at +150', reasoning: "Highest expected value on the card. Market moved from -180 to -150 but still pays Van as the underdog in a title fight where the transitive evidence is direct (Van beats Royval, Royval beats Taira) and Van does volume better than Royval. Real probability 69% vs implied 40% is a rare edge in a main event." },
      },
      key_stats: [
        { value: '124-42', label: "Royval outlanded Taira in sig strikes (UFC FN 244)", sublabel: "3:1 ratio. Royval won the cards despite Taira's 6 takedowns on 15 and 12:13 of control." },
        { value: '419', label: 'Combined sig strikes Van vs Royval (UFC 317)', sublabel: 'First UFC fight ever with both men over 200. Van 205 strikes at 67.4% accuracy.' },
        { value: '45%', label: "Taira's career TDD", sublabel: "Real vulnerability. Common reporting cites 67% — that's wrong. Van defends 81%." },
        { value: '+150', label: "Van's odds as the underdog in a title fight", sublabel: 'Market pays the champion as the longshot. Historically rare edge.' },
      ],
      odds: {
        fighter1_odds: '+150',
        fighter2_odds: '-150',
        fighter1_name: 'Van',
        fighter2_name: 'Taira',
        source: "FanDuel/DraftKings Taira -150 / Van +150 in April 2026 (line moved from -180 to -150 once the sharp money came in). Polymarket aligned. The market reads grappling as the absolute edge, ignoring that Taira's TDD is different from what the consensus reports.",
      },
      armadilha: {
        titulo: 'The Trap: Taira by Specific Submission',
        descricao: "The market will pay heavy on \"Taira by submission\" based on his 8 career finishes (44%) and the body triangle finish over Moreno. But Van has NEVER been finished in 18 pro fights. 81% TDD means most of Taira's takedown attempts won't even reach the ground. Royval (a top-3 wrestler-grappler) tried to drag Van down at UFC 317 and got it sparingly. Betting a specific Taira sub is betting on a sequence: Van has to fall, then stay on bottom, then accept the position. Three things he consistently doesn't do.",
      },
    },
  },
};
