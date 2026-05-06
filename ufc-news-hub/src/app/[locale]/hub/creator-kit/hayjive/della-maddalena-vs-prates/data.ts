import type { HayJiveKitProData } from '@/components/creator-kit/hayjive/HayJiveKitProView';

// ═══════════════════════════════════════════════════════════════
// HayJive Kit — UFC Fight Night: Della Maddalena vs Prates
// RAC Arena · Perth · May 2, 2026
//
// KIT DOSSIER (R6) — auditable evidence that R6 gates ran
//
// LOCKS (Section 03) — conviction >= 7 + broad method
//   Lock 1 ★ HEADLINE  Carlos Prates ML  -106
//     Source: /hub/analise/della-maddalena-vs-prates  conv 7  method KO/TKO ou Decisão (broad PASS)
//   Lock 2  Jacob Malkoun ML  -800
//     Source: /hub/analise/malkoun-vs-meerschaert  conv 7  method TKO ou Decisão (broad PASS)
//   Lock 3  Jonathan Micallef ML  -330
//     Source: /hub/analise/micallef-vs-gorimbo  conv 7  method Decisão ou Sub Tardia
//
// SLIMEBALL PARLAY (Section 04) — R6 Rule 2: max 2 legs with conv <7
//   4 legs: Prates(7), Salkilld(7), Erceg(6), Pericic(6) → 2 conv-6 legs at cap PASS
//
// CYCLE PARLAY (Section 05) — KO Train, method-specific
//   3 legs: Prates KO/TKO(7), Pericic KO/TKO R1-R2(6), Tafa KO R1(5)
//   Conv counts: 2 legs <7 (Pericic + Tafa) at R6 cap PASS
//
// GIMME (Section 06) — R6 Rule 3 requires conv >= 8 + GATE 1 PASS + dim >= 4
//   No fight on this card meets the bar (ceiling is conv 7) → STATUS: PASS
//
// LONGSHOTS DROP (Section 07) — method props on conv-6+ underlying picks
//   Prates KO/TKO R1-R2, Pericic by KO/TKO, Tafa KO R1
//
// FADE OF WEEK (Section 08) — popular public take we contradict
//   Della Maddalena ML — home crowd + JDM nostalgia, our analysis says Prates conv 7
//
// EXCLUDED FROM HIGH-STAKES SLOTS:
//   - elliott-vs-erceg: analysis predicts Erceg, conv 6 (Lock-fail) → goes to Slimeball as conv-6 leg
//   - tuivasa-vs-sutherland: Tuivasa conv 5, method-specific KO R1-R2 → omitted from kit; included in Pick Sheet only
//   - thicknesse-vs-morales conv 5 / johnston-vs-schultz conv 4 → Pick Sheet only
// ═══════════════════════════════════════════════════════════════

const PRATES_THUMB =
  'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/PRATES_CARLOS_L_08-17.png?itok=84ZbFhHS';
const JDM_THUMB =
  'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/DELLA_MADDALENA_JACK_L_09-16.png?itok=s0owpxMp';
const MALKOUN_THUMB =
  'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/MALKOUN_JACOB_L_01-31.png?itok=83vEOHkP';
const MICALLEF_THUMB =
  'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/MICALLEF_JONATHAN_L_01-31.png?itok=UJUPNqDv';
const SALKILLD_THUMB =
  'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/SALKILLD_QUILLAN_L_01-31.png?itok=CNlDKECm';

export const kitData: HayJiveKitProData = {
  card_slug: 'della-maddalena-vs-prates',

  hero: {
    evento_nome: 'UFC FIGHT NIGHT',
    evento_data: 'MAY 2, 2026',
    evento_local: 'RAC ARENA · PERTH',
    categoria_peso: 'WELTERWEIGHT · 5 ROUNDS',
    tagline:
      'JDM walks into a homecoming parade. Prates walks in to ruin it. Reach, southpaw geometry, KO power, all pointing one direction. The book is on the wrong side.',
    fighter1: {
      nome_completo: 'Jack "JDM" Della Maddalena',
      apelido: 'JDM',
      sobrenome: 'DELLA MADDALENA',
      record: '18-3-0',
      ranking: '#1 WW',
      info_extra: 'PERTH · 29',
      imagem_fullbody_url: JDM_THUMB,
    },
    fighter2: {
      nome_completo: 'Carlos "The Nightmare" Prates',
      apelido: 'The Nightmare',
      sobrenome: 'PRATES',
      record: '23-7-0',
      ranking: '#5 WW',
      info_extra: 'TAUBATÉ · 32',
      imagem_fullbody_url: PRATES_THUMB,
    },
  },

  card_overview: [
    { fight: 'DELLA MADDALENA VS PRATES', pick: 'PRATES ML', odds: '-106', conviction: 7, status: 'lock', is_main: true },
    { fight: 'DARIUSH VS SALKILLD', pick: 'SALKILLD ML', odds: '-450', conviction: 7, status: 'slimeball', is_main: false },
    { fight: 'MALKOUN VS MEERSCHAERT', pick: 'MALKOUN ML', odds: '-800', conviction: 7, status: 'lock', is_main: false },
    { fight: 'MICALLEF VS GORIMBO', pick: 'MICALLEF ML', odds: '-330', conviction: 7, status: 'lock', is_main: false },
    { fight: 'ELLIOTT VS ERCEG', pick: 'ERCEG ML', odds: '-178', conviction: 6, status: 'slimeball', is_main: false },
    { fight: 'GAZIEV VS PERICIC', pick: 'PERICIC ML', odds: '-138', conviction: 6, status: 'slimeball', is_main: false },
    { fight: 'MAR FAN VS STEELE', pick: 'MAR FAN ML', odds: '-180', conviction: 6, status: 'pass', is_main: false },
    { fight: 'ROWSTON VS BRYCZEK', pick: 'ROWSTON ML', odds: '-260', conviction: 6, status: 'pass', is_main: false },
    { fight: 'TUIVASA VS SUTHERLAND', pick: 'TUIVASA ML', odds: '-200', conviction: 5, status: 'pass', is_main: false },
    { fight: 'TAFA VS CHRISTIAN', pick: 'TAFA KO R1', odds: '+225', conviction: 5, status: 'cycle', is_main: false },
    { fight: 'THICKNESSE VS MORALES', pick: 'THICKNESSE ML', odds: '-110', conviction: 5, status: 'pass', is_main: false },
    { fight: 'JOHNSTON VS SCHULTZ', pick: 'JOHNSTON ML', odds: '-110', conviction: 4, status: 'pass', is_main: false },
  ],

  cred: {
    ytd_label: 'YTD 2026',
    ytd_value: '+41.54u',
    accuracy_label: 'TAPOLOGY',
    accuracy_value: '65.2%',
    accuracy_sub: '567 PICKS LOGGED',
    last_card_label: 'LAST CARD',
    last_card_value: '+1.59u',
    last_card_sub: 'UFC 318 · CASH',
    tapology_url: 'https://www.tapology.com/profiles/hayjive',
  },

  locks: [
    {
      index: 1,
      pick: 'PRATES MONEYLINE',
      odds: '-106',
      fight: 'DELLA MADDALENA VS PRATES',
      one_liner:
        'Prates is 18 KOs in 23 wins. JDM just got iced by Makhachev. Now he gives up 13 cm of reach and 5 cm of height to a southpaw whose left hand pays the rent. Method opens KO/TKO or Decision either way. ML is the cleanest path to the bag.',
      fighter_thumb_url: PRATES_THUMB,
      fighter_name: 'PRATES',
      conviction: 7,
    },
    {
      index: 2,
      pick: 'MALKOUN MONEYLINE',
      odds: '-800',
      fight: 'MALKOUN VS MEERSCHAERT',
      one_liner:
        'Malkoun runs 7.20 TDs per 15 into a 47% TDD wall. Meerschaert is 38, on a four-fight skid, and the home crowd is in Malkoun\'s pocket. Heavy chalk, sure. Path is paint-by-numbers.',
      fighter_thumb_url: MALKOUN_THUMB,
      fighter_name: 'MALKOUN',
      conviction: 7,
    },
    {
      index: 3,
      pick: 'MICALLEF MONEYLINE',
      odds: '-330',
      fight: 'MICALLEF VS GORIMBO',
      one_liner:
        'Aussie home favorite vs a fading Gorimbo. Micallef has volume, youth, and cardio. Gorimbo is grinder-grade BJJ but his striking output is in free fall. Decision or late sub. Either lands the ML.',
      fighter_thumb_url: MICALLEF_THUMB,
      fighter_name: 'MICALLEF',
      conviction: 7,
    },
  ],

  slimeball: {
    name: 'SLIMEBALL · 4-LEG',
    flavor: 'CHALK SPINE + TWO LIVE DOGS',
    legs: [
      { pick: 'PRATES ML', odds: '-106', fight: 'DELLA MADDALENA VS PRATES', conviction: 7 },
      { pick: 'SALKILLD ML', odds: '-450', fight: 'DARIUSH VS SALKILLD', conviction: 7 },
      { pick: 'ERCEG ML', odds: '-178', fight: 'ELLIOTT VS ERCEG', conviction: 6 },
      { pick: 'PERICIC ML', odds: '-138', fight: 'GAZIEV VS PERICIC', conviction: 6 },
    ],
    combined_odds: '+265',
    thesis:
      'Spine is two 7s (Prates, Salkilld) doing the heavy lifting. Erceg and Pericic juice the price, both favorites the tape backs even if conv stops at 6. Prates is the swing leg. He hits, the ticket is alive into the late prelims.',
    r6_check: 'Rule 2 PASS · 2 of 4 legs under conv 7 (Erceg, Pericic). At the cap. Zero PHASE 2.5 downgrades.',
  },

  cycle: {
    name: 'CYCLE · KO TRAIN',
    flavor: 'METHOD-SPECIFIC · ALL FINISHES',
    legs: [
      { pick: 'PRATES BY KO/TKO', odds: '+150', fight: 'DELLA MADDALENA VS PRATES', conviction: 7 },
      { pick: 'PERICIC BY KO/TKO', odds: '+135', fight: 'GAZIEV VS PERICIC', conviction: 6 },
      { pick: 'TAFA BY KO R1', odds: '+225', fight: 'TAFA VS CHRISTIAN', conviction: 5 },
    ],
    combined_odds: '+1850',
    thesis:
      'Three KOs across one card. Prates straight left is the headline finish. Pericic is the heaviest hitter in the heavyweight prelim. Tafa is the variance leg, the tape says Junior KO R1, the sub-flip from Christian is where the ticket dies if it dies.',
    r6_check: 'Rule 2 PASS · 2 of 3 legs under conv 7 (Pericic 6, Tafa 5). At the cap. No GATE 1 trigger since KO methods are not gated by sub rules.',
  },

  gimme: {
    type: 'pass',
    reason:
      'Nothing on this Perth card cleared R6 Rule 3. The Gimme bar wants conv 8, GATE 1 PASS, and 4 independent dimensions of evidence. Card tops out at conv 7 (Prates, Malkoun, Micallef, Salkilld). No Gimme is the right Gimme.',
    bar: 'Conv >= 8 + GATE 1 PASS + dimensions >= 4 + R2 Tier 2 not triggered + winner calibre >= loser calibre + best_bet match.',
  },

  longshots: {
    intro:
      'Three method props with plus money on picks the tape already backs. Smaller stake, bigger room. Live on the Longshots Only Show drop.',
    picks: [
      {
        pick: 'PRATES BY KO/TKO R1-R2',
        odds: '+325',
        fight: 'DELLA MADDALENA VS PRATES',
        conviction: 6,
        reasoning:
          'Prates is 7th all-time in UFC knockdown rate. JDM ate a 50-45 loss with serious damage on the chin. Early straight left finish lives on the menu.',
      },
      {
        pick: 'PERICIC BY KO R1',
        odds: '+275',
        fight: 'GAZIEV VS PERICIC',
        conviction: 5,
        reasoning:
          'Heavyweight prelim, both guys hunting from the bell. Pericic is the bigger puncher with the cleaner chin lately. R1 KO is the tape\'s primary path.',
      },
      {
        pick: 'TAFA BY KO R1',
        odds: '+225',
        fight: 'TAFA VS CHRISTIAN',
        conviction: 5,
        reasoning:
          'Junior Tafa\'s whole UFC run has been KO-or-be-KO\'d. Christian\'s sub threat is real on the floor, problem is Tafa rarely lets it get there. R1 has been the deciding round in 4 of his last 5.',
      },
    ],
  },

  fade: {
    title: 'DELLA MADDALENA ML',
    fight: 'DELLA MADDALENA VS PRATES',
    popular_take:
      'Home crowd in Perth, #1 ranked welterweight, Aussie favorite at -120. The story books JDM bouncing back from the Makhachev loss with a statement KO at home.',
    why_public_likes_it:
      'Recency bias loves home favorites coming off losses. Tapology and Polymarket initial action moved JDM from underdog to chalk in 48 hours. Australian betting volume is heavy.',
    why_we_fade:
      'JDM gives up 13 cm of reach and 5 cm of height to a southpaw whose left hand pays the rent. Edwards laid the blueprint with R1 clinch, but JDM is not a 5-round wrestler. Three rounds in, this is a striking match where Prates owns range. The chin that just got iced by Makhachev does not eat Prates power for 25 minutes.',
    alternative:
      'Take Prates ML at -106 (Lock 1). If you absolutely have to touch the JDM side, the only defensible play is JDM by Decision +475, and even that requires him to recreate Edwards\' R1 game plan for the full 25, which his last performance said he cannot do.',
  },

  scorecard: {
    fight: 'DELLA MADDALENA VS PRATES',
    fighter1: 'DELLA MADDALENA',
    fighter2: 'PRATES',
    rounds: [
      {
        round: 1,
        winner: 'DELLA MADDALENA',
        score: '10-9',
        note: 'JDM wins R1 the same way Edwards did. Clinch entries, body lock, one TD attempt that scores big with the judges. Prates plays cautious early.',
      },
      {
        round: 2,
        winner: 'PRATES',
        score: '10-9',
        note: 'Prates settles into range. Low kicks chip. The straight left finds its rhythm. JDM\'s output drops as he wears the reach gap.',
      },
      {
        round: 3,
        winner: 'PRATES',
        score: '10-9',
        note: 'The chin question comes up. JDM eats a clean cross at the end of an exchange and looks rocked. Survives the bell. Round goes Prates.',
      },
      {
        round: 4,
        winner: 'PRATES',
        score: '10-9',
        note: 'Cardio inversion. Prates trained 5 rounds for the Edwards rematch and never had to use them. JDM\'s last 25-minute fight was a damage-heavy loss. Pace belongs to Prates from here.',
      },
      {
        round: 5,
        winner: 'PRATES',
        score: '10-9',
        note: 'Hometown desperation. JDM tries to wrestle. Prates defends one, lands two clean shots in the scramble. Bell.',
      },
    ],
    total_f1: 46,
    total_f2: 49,
    predicted_finish:
      'KO/TKO R3 if the chin gives. Otherwise 49-46 Prates UD. Decision is the higher-probability outcome but the variance lives in R3.',
    thesis:
      'JDM steals R1 the way Edwards did. After that, range and southpaw geometry tell the rest of the story. Headline pick is Prates ML. Round-by-round leans 4-1 once the cushion of R1 is paid.',
  },

  column: {
    kicker: 'WEEKLY COLUMN · MAIN EVENT BREAKDOWN',
    title: 'JDM IS HOME, AND THAT IS THE PROBLEM',
    subtitle:
      'A homecoming sounds romantic on paper. At welterweight, geography rarely beats geometry.',
    body_paragraphs: [
      'There\'s a JDM story that has been writing itself for four years. Perth kid takes the long road through The Smashes, builds a finish reel that becomes the most-shared welterweight tape on social, fights his way to the top of the division, and earns a shot at Islam Makhachev (arguably the best fighter alive). He loses. Brutally. 50-45 brutally. And the next chapter, the one Perth is paying full ticket prices to watch on May 2, is the comeback.',
      'It\'s a beautiful story. It\'s also the wrong story to bet on.',
      'The Makhachev tape told us something Australia didn\'t want to hear. When JDM can\'t get to the pocket, he runs out of answers. Low kicks, takedowns, pressure, and JDM had no in-between gear. The pocket boxing that vaporized Burns and Belal needs an opponent who agrees to stand in front of him. Carlos Prates does not agree.',
      'Prates is one of the cleanest southpaw strikers in the division. 13 cm longer at the reach. 5 cm taller. His left hand has put 18 of his 23 wins on the canvas. His last five fights have been a tour of the welterweight chin chart, Edwards, Garry, Neal, all dropped, three KO\'d. The Fighting Nerds have him fighting longer every camp, defending the clinch better, picking spots out of range. He\'s not the same guy Edwards bullied for a round in 2024. He\'s what Edwards became before he hit a wall.',
      'JDM\'s only winnable round is the first. Same clinch arsenal Edwards used to bank R1 against Prates: body locks, chain-attempt takedowns, scoring control without finishing it. JDM runs that for five minutes. He doesn\'t run it for twenty-five. The moment Prates gets his range back, the fight inverts.',
      'The home crowd is real. The home favoritism in the books is real. The narrative pressure on JDM to deliver is real. None of those stretch a welterweight reach gap. None give a chin that just got iced for five rounds the durability to eat clean Prates lefts in round three. Geography does not beat geometry when both fighters can fight.',
      'Take Prates. Take the moneyline at -106 because the public still hasn\'t fully priced him. Take the round-by-round if you want the variance. Story is going to be Prates, and when the story breaks the price will not look like this again.',
    ],
    pull_quote: 'GEOGRAPHY DOES NOT BEAT GEOMETRY WHEN BOTH FIGHTERS CAN FIGHT.',
    byline: 'BY HAYJIVE · POWERED BY CRENAS INTEL',
  },

  bigjive: {
    episode_intro:
      'Talking points for the BigJive MMA Show pre-fight episode. Open this on your iPad while recording. Each segment has the hook, the take, and a debate prompt for your co-host to chew on if the convo dies.',
    segments: [
      {
        topic: 'JDM IS THE CROWD PICK. IS HE THE RIGHT PICK?',
        timestamp: '00:00 / 06:00',
        hook: 'Open with the Polymarket flip from Prates -165 to JDM -120 in 48 hours.',
        take:
          'Market moved on Australian betting volume, not on a tape change. The Makhachev tape is still the Makhachev tape. JDM\'s problems against pressure plus length didn\'t resolve themselves in three months.',
        debate_prompt:
          'Ask the co-host: at what price does Prates become a steal? If we get back to +130 on game day, do you go bigger?',
      },
      {
        topic: 'THE EDWARDS BLUEPRINT. DOES JDM HAVE IT?',
        timestamp: '06:00 / 12:00',
        hook: 'Edwards won R1 against Prates the same way JDM\'s clinch game wins rounds.',
        take:
          'Edwards is a five-round-trained welterweight champion who ran that exact game plan against bigger names. JDM is a pocket boxer who happens to have a clinch. He runs that plan for one round, maybe two. Not five.',
        debate_prompt:
          'If JDM wins R1 the way Edwards did, does the public sell out of Prates futures and we get even better numbers next time?',
      },
      {
        topic: 'PRATES\' PATH: STRAIGHT LEFT OR CLINCH ESCAPES?',
        timestamp: '12:00 / 18:00',
        hook: 'Prates is 7th all-time UFC knockdown rate. Number stays in your head.',
        take:
          'Prates wins this with three things in order: clinch defense (improved post-Edwards), low kicks to bank rounds while JDM is uncertain, and the straight left as the cherry. The straight left is the headline. The clinch defense is the fight.',
        debate_prompt:
          'Where\'s the over/under on the round Prates lands the first clean cross? R1, R2, R3?',
      },
      {
        topic: 'THE CARD\'S BIGGEST FADE',
        timestamp: '18:00 / 24:00',
        hook: 'Public is on Tuivasa KO. The lock is Malkoun.',
        take:
          'Tuivasa is the heart pick. Aussie crowd, KO threat, fun guy. Stat sheet says 1-4 in his last 5, reach disadvantage, and Sutherland has the cardio he doesn\'t. Fade Tuivasa method bets. Take Malkoun ML if you absolutely have to touch chalk.',
        debate_prompt:
          'Is there a non-zero universe where Sutherland upsets Tuivasa straight up? What\'s the price?',
      },
      {
        topic: 'CO-MAIN EVENT: DARIUSH IS DONE',
        timestamp: '24:00 / 30:00',
        hook: 'Quillan Salkilld is the analysis Lock that doesn\'t make the kit Locks because of method specificity.',
        take:
          'Dariush at 36 is a different fighter than the guy who almost beat Charles Oliveira. Wrestling has slowed, chin has questions, and Salkilld is exactly the type of long, fast, emerging Aussie that sets a vet up for retirement. -450 is heavy but the fight is a sign-off, not a contest.',
        debate_prompt:
          'Will Dariush be in the UFC by 2027 if he loses this? Or is this the last walk?',
      },
    ],
  },

  ig_carousel: {
    intro:
      'Pre-rendered IG-ready PNGs (1080×1350). Each tile below opens the live OG image in a new tab. Right-click save, drop into your carousel. Generated server-side from the kit data, refreshes when the kit refreshes.',
    card_slug: 'della-maddalena-vs-prates',
    slides: [
      { slot: 'cover', label: 'COVER', caption: 'JDM × PRATES · main event hero' },
      { slot: 'lock-1', label: 'LOCK 01', caption: 'Headline pick · Prates ML' },
      { slot: 'lock-2', label: 'LOCK 02', caption: 'Malkoun ML' },
      { slot: 'lock-3', label: 'LOCK 03', caption: 'Micallef ML' },
      { slot: 'slimeball', label: 'SLIMEBALL', caption: '4-leg parlay · +265' },
      { slot: 'fade', label: 'FADE', caption: 'Don\'t take JDM ML' },
      { slot: 'gimme', label: 'GIMME', caption: 'PASS this card · standard held' },
      { slot: 'sheet', label: 'PICK SHEET', caption: 'Full card summary · final tile' },
    ],
    full_caption:
      "🏝 PERTH CARD KIT. JDM vs PRATES drop.\n\n3 Locks Each, Slimeball Parlay (+265), and the FADE you don't see coming. Full breakdown in stories.\n\nSwipe → Save → Tail → Tag a friend who's tailing JDM (we need to talk).\n\nUnderdog code: HAYJIVE. 20x your first deposit, link in bio.",
    hashtags: [
      '#UFCPerth',
      '#DellaMaddalenaVsPrates',
      '#JDM',
      '#Prates',
      '#HayJivePicks',
      '#LocksOfTheWeek',
      '#MMABets',
      '#UFCFightNight',
      '#FightingNerds',
      '#TheNightmare',
    ],
  },

  pick_sheet: {
    rows: [
      { fight: 'DELLA MADDALENA VS PRATES', pick: 'PRATES ML', odds: '-106', conviction: 7, slot: 'LOCK 1' },
      { fight: 'MALKOUN VS MEERSCHAERT', pick: 'MALKOUN ML', odds: '-800', conviction: 7, slot: 'LOCK 2' },
      { fight: 'MICALLEF VS GORIMBO', pick: 'MICALLEF ML', odds: '-330', conviction: 7, slot: 'LOCK 3' },
      { fight: 'DARIUSH VS SALKILLD', pick: 'SALKILLD ML', odds: '-450', conviction: 7, slot: 'SLIMEBALL' },
      { fight: 'ELLIOTT VS ERCEG', pick: 'ERCEG ML', odds: '-178', conviction: 6, slot: 'SLIMEBALL' },
      { fight: 'GAZIEV VS PERICIC', pick: 'PERICIC ML', odds: '-138', conviction: 6, slot: 'SLIMEBALL / LONGSHOT' },
      { fight: 'DELLA MADDALENA VS PRATES', pick: 'PRATES KO/TKO R1-R2', odds: '+325', conviction: 6, slot: 'LONGSHOT' },
      { fight: 'TAFA VS CHRISTIAN', pick: 'TAFA KO R1', odds: '+225', conviction: 5, slot: 'LONGSHOT / CYCLE' },
      { fight: 'DELLA MADDALENA VS PRATES', pick: 'JDM ML', odds: '-120', conviction: 0, slot: 'FADE · DO NOT TAIL' },
    ],
    unit_summary:
      '9 picks · 3 Locks (heavy chalk, conv 7) + 4 parlay legs + 2 longshot dogs + 1 fade warning. Suggested unit allocation: 3u on each Lock ML, 1u on Slimeball, 0.5u on Cycle, 0.25u each Longshot.',
    underdog_code: 'HAYJIVE',
  },
};

// Helper: pick by slot, used by OG endpoint
export function getOgSlotData(slot: string) {
  switch (slot) {
    case 'cover':
      return { type: 'cover' as const, hero: kitData.hero, cred: kitData.cred };
    case 'lock-1':
      return { type: 'lock' as const, lock: kitData.locks[0] };
    case 'lock-2':
      return { type: 'lock' as const, lock: kitData.locks[1] };
    case 'lock-3':
      return { type: 'lock' as const, lock: kitData.locks[2] };
    case 'slimeball':
      return { type: 'parlay' as const, parlay: kitData.slimeball, hero: kitData.hero };
    case 'fade':
      return { type: 'fade' as const, fade: kitData.fade };
    case 'gimme':
      return { type: 'gimme' as const, gimme: kitData.gimme };
    case 'sheet':
      return { type: 'sheet' as const, sheet: kitData.pick_sheet, hero: kitData.hero };
    default:
      return null;
  }
}
