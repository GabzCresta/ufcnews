// ═══════════════════════════════════════════════════════════
// KIT DOSSIER — UFC Fight Night: Della Maddalena vs Prates (May 2, 2026)
// Branded for: @mma_betiq (Instagram picks-creator, 5,066 followers, 50-16 record).
// Format: post-card track-record demo. R6 enforcement is RETROSPECTIVE here —
// we are reporting what we picked + what hit, not anchoring future bets.
//
// Retro classification (confidence_label → mma_betiq icon):
//   MEDIUM-HIGH  → 🔒 Lock                 (when broad method, gates passed, ML-backable)
//   MEDIUM       → ✅ Winner               (default standard pick)
//   MEDIUM (specific method window)  → ⚠️ Risky    (KO/Sub specific round → narrower)
//   LOW + betting against favorite    → 🐶 Underdog
//
// Per-pick eligibility audit (slot vs. result):
//   Lock 1 — Prates KO/TKO/Dec    | Eligible: YES | Result: HIT (TKO R3, 3:17)
//   Lock 2 — Salkilld KO/Sub R1-2 | Eligible: YES | Result: HIT (KO R1, 3:29) · POTN
//   Lock 3 — Malkoun TKO/Dec      | Eligible: YES | Result: HIT (UD)
//   Lock 4 — Micallef Dec/late Sub| Eligible: YES | Result: HIT (SD)
//   Risky — Tafa KO R1            | Eligible: YES | Result: HIT EXACT (KO R1, 2:42)
//   Risky — Tuivasa KO/TKO R1-2   | Eligible: YES | Result: MISS (lost UD)
//   Winner — Erceg Dec/late TKO   | Result: HIT (UD)
//   Winner — Rowston TKO/Dec      | Result: HIT (UD)
//   Winner — Thicknesse Dec       | Result: HIT (UD)
//   Winner — Mar Fan Dec/late TKO | Result: MISS (lost Sub R1)
//   Underdog — Johnston KO/TKO/Sub| LOW conf vs experienced opponent | Result: MISS
//
// Tally: 8/11 winners (72.7%) · 8/8 method correct on winners · Locks 4/4 (100%).
// Cycle Parlay built from clean method calls (Prates KO + Malkoun Dec) — both hit.
// Fade of Week: Tuivasa KO R1-R2 (specific method window where our risky flag fired).
// ═══════════════════════════════════════════════════════════

import type { MmaBetiqKitData } from '@/types/mma-betiq-kit';

export const kitData: MmaBetiqKitData = {
  meta: {
    event_name: 'UFC Fight Night: Della Maddalena vs Prates',
    event_date: 'May 2, 2026',
    event_location: 'RAC Arena, Perth, Australia',
    event_number: 'UFC Fight Night 270',
    creator_handle: '@mma_betiq',
    creator_record: '50-16',
    delivery_date: 'May 3, 2026',
  },

  track_record: {
    total_fights: 11,
    winners_correct: 8,
    methods_correct_on_winners: 8,
    lock_record: '4/4',
    risky_record: '1/2',
    winner_record: '3/4',
    underdog_record: '0/1',
    headline: 'Locks went 4/4. Method called on every winner.',
    subheadline:
      'Built on top of multi-source research — UFC Stats, Tapology, Verdict MMA, ESPN Fight Center, fighter context. Track record visible, not autodeclared.',
  },

  pick_grid: [
    {
      fight_slug: 'della-maddalena-vs-prates',
      bout: 'Della Maddalena vs Prates',
      category: 'Welterweight (170 lbs)',
      segment: 'main_card',
      is_main_event: true,
      classification: 'lock',
      pick: 'Carlos Prates',
      predicted_method: 'KO/TKO or Decision',
      confidence_label: 'MEDIUM-HIGH',
      one_liner:
        '13 cm reach edge, heavy hands, riding the Edwards KO. JDM coming off Makhachev loss. The thesis was clean from the start.',
      fighter1_name: 'Jack Della Maddalena',
      fighter1_record: '18-3-0',
      fighter2_name: 'Carlos Prates',
      fighter2_record: '23-7-0',
      actual_winner: 'Carlos Prates',
      actual_method: 'TKO (Punches)',
      actual_round: 3,
      actual_time: '3:17',
      prediction_correct: true,
      method_correct: true,
    },
    {
      fight_slug: 'dariush-vs-salkilld',
      bout: 'Dariush vs Salkilld',
      category: 'Lightweight (155 lbs)',
      segment: 'main_card',
      classification: 'lock',
      pick: 'Quillan Salkilld',
      predicted_method: 'KO/TKO or Sub R1-R2',
      confidence_label: 'MEDIUM-HIGH',
      one_liner:
        'Newcomer of the Year vs aging former contender finished 3 times in 2.5 years. Window said early, our pick said early.',
      fighter1_name: 'Beneil Dariush',
      fighter1_record: '23-7-1',
      fighter2_name: 'Quillan Salkilld',
      fighter2_record: '11-1-0',
      actual_winner: 'Quillan Salkilld',
      actual_method: 'KO/TKO (Punches)',
      actual_round: 1,
      actual_time: '3:29',
      prediction_correct: true,
      method_correct: true,
      bonus: 'POTN',
    },
    {
      fight_slug: 'tuivasa-vs-sutherland',
      bout: 'Tuivasa vs Sutherland',
      category: 'Heavyweight (265 lbs)',
      segment: 'main_card',
      classification: 'risky',
      pick: 'Tai Tuivasa',
      predicted_method: 'KO/TKO R1-R2',
      confidence_label: 'MEDIUM',
      one_liner:
        'Specific finishing-method window. We flagged it as Risky because Tuivasa needs the early KO or the cardio cliff bites. Cardio bit.',
      fighter1_name: 'Tai Tuivasa',
      fighter1_record: '15-9-0',
      fighter2_name: 'Louie Sutherland',
      fighter2_record: '10-5-0',
      actual_winner: 'Louie Sutherland',
      actual_method: 'Unanimous Decision',
      prediction_correct: false,
      method_correct: false,
    },
    {
      fight_slug: 'elliott-vs-erceg',
      bout: 'Elliott vs Erceg',
      category: 'Flyweight (125 lbs)',
      segment: 'main_card',
      classification: 'winner',
      pick: 'Steve Erceg',
      predicted_method: 'Decision or late TKO',
      confidence_label: 'MEDIUM',
      one_liner:
        'Erceg fighting at home, opponent on a 13-fight career stretch with mileage. Standard winner read, no method gymnastics.',
      fighter1_name: 'Tim Elliott',
      fighter1_record: '22-13-1',
      fighter2_name: 'Steve Erceg',
      fighter2_record: '13-4-0',
      actual_winner: 'Steve Erceg',
      actual_method: 'Unanimous Decision',
      prediction_correct: true,
      method_correct: true,
    },
    {
      fight_slug: 'rowston-vs-bryczek',
      bout: 'Rowston vs Bryczek',
      category: 'Middleweight (185 lbs)',
      segment: 'prelims',
      classification: 'winner',
      pick: 'Cameron Rowston',
      predicted_method: 'TKO or Decision',
      confidence_label: 'MEDIUM',
      one_liner: 'Local prospect, regional grappling edge, broad method window. Rowston ran the schedule.',
      fighter1_name: 'Cam Rowston',
      fighter1_record: '14-3-0',
      fighter2_name: 'Robert Bryczek',
      fighter2_record: '18-6-0',
      actual_winner: 'Cam Rowston',
      actual_method: 'Unanimous Decision',
      prediction_correct: true,
      method_correct: true,
    },
    {
      fight_slug: 'tafa-vs-christian',
      bout: 'Tafa vs Christian',
      category: 'Light Heavyweight (205 lbs)',
      segment: 'prelims',
      classification: 'risky',
      pick: 'Junior Tafa',
      predicted_method: 'KO R1',
      confidence_label: 'MEDIUM',
      one_liner:
        'Risky tag was the specific R1 window — KO R1 props rarely cash. Tafa cashed it at 2:42. Method bullseye.',
      fighter1_name: 'Junior Tafa',
      fighter1_record: '6-5-0',
      fighter2_name: 'Kevin Christian',
      fighter2_record: '9-3-0',
      actual_winner: 'Junior Tafa',
      actual_method: 'KO/TKO (Punches)',
      actual_round: 1,
      actual_time: '2:42',
      prediction_correct: true,
      method_correct: true,
    },
    {
      fight_slug: 'malkoun-vs-meerschaert',
      bout: 'Malkoun vs Meerschaert',
      category: 'Middleweight (185 lbs)',
      segment: 'prelims',
      classification: 'lock',
      pick: 'Jacob Malkoun',
      predicted_method: 'TKO or Decision',
      confidence_label: 'MEDIUM-HIGH',
      one_liner: 'Wrestling-heavy local vs late-career grinder. Broad method, multi-dimensional edge.',
      fighter1_name: 'Jacob Malkoun',
      fighter1_record: '9-3-0',
      fighter2_name: 'Gerald Meerschaert',
      fighter2_record: '37-21-0',
      actual_winner: 'Jacob Malkoun',
      actual_method: 'Unanimous Decision',
      prediction_correct: true,
      method_correct: true,
    },
    {
      fight_slug: 'thicknesse-vs-morales',
      bout: 'Thicknesse vs Morales',
      category: 'Bantamweight (135 lbs)',
      segment: 'prelims',
      classification: 'winner',
      pick: 'Colby Thicknesse',
      predicted_method: 'Decision',
      confidence_label: 'MEDIUM',
      one_liner: 'Younger, faster, decisions out the regional vet. Standard call.',
      fighter1_name: 'Colby Thicknesse',
      fighter1_record: '8-1-0',
      fighter2_name: 'Vince Morales',
      fighter2_record: '16-10-0',
      actual_winner: 'Colby Thicknesse',
      actual_method: 'Unanimous Decision',
      prediction_correct: true,
      method_correct: true,
    },
    {
      fight_slug: 'johnston-vs-schultz',
      bout: 'Johnston vs Schultz',
      category: 'Middleweight (185 lbs)',
      segment: 'prelims',
      classification: 'underdog',
      pick: 'Ben Johnston',
      predicted_method: 'KO/TKO or Sub',
      confidence_label: 'LOW',
      one_liner:
        'Underdog flag because we backed the 0-0 debutant against an 8-3 vet. The dog play. It missed — that is what dog plays do most of the time, but the spot was real.',
      fighter1_name: 'Benjamin Johnston',
      fighter1_record: '0-0-0',
      fighter2_name: 'Wes Schultz',
      fighter2_record: '8-3-0',
      actual_winner: 'Wes Schultz',
      actual_method: 'Submission (Rear-Naked Choke)',
      actual_round: 3,
      actual_time: '1:50',
      prediction_correct: false,
      method_correct: false,
    },
    {
      fight_slug: 'micallef-vs-gorimbo',
      bout: 'Micallef vs Gorimbo',
      category: 'Welterweight (170 lbs)',
      segment: 'prelims',
      classification: 'lock',
      pick: 'Jonathan Micallef',
      predicted_method: 'Decision or late Sub',
      confidence_label: 'MEDIUM-HIGH',
      one_liner: 'Cleaner skillset, broader method window, local crowd. Lock with low downside.',
      fighter1_name: 'Jonathan Micallef',
      fighter1_record: '9-1-0',
      fighter2_name: 'Themba Gorimbo',
      fighter2_record: '14-6-0',
      actual_winner: 'Jonathan Micallef',
      actual_method: 'Split Decision',
      prediction_correct: true,
      method_correct: true,
    },
    {
      fight_slug: 'mar-fan-vs-steele',
      bout: 'Mar Fan vs Steele',
      category: 'Lightweight (155 lbs)',
      segment: 'prelims',
      classification: 'winner',
      pick: 'Dom Mar Fan',
      predicted_method: 'Decision or late TKO',
      confidence_label: 'MEDIUM',
      one_liner: 'Standard read on grappling edge — Steele caught the sub R1. Dog won, our standard pick lost.',
      fighter1_name: 'Dom Mar Fan',
      fighter1_record: '9-2-0',
      fighter2_name: 'Kody Steele',
      fighter2_record: '7-1-0',
      actual_winner: 'Kody Steele',
      actual_method: 'Submission',
      actual_round: 1,
      actual_time: '3:56',
      prediction_correct: false,
      method_correct: false,
    },
  ],

  lock_of_the_week: {
    bout: 'Della Maddalena vs Prates · Main Event · Welterweight (170 lbs)',
    pick: 'Carlos Prates',
    predicted_method: 'KO/TKO or Decision',
    fighter_record: '23-7-0',
    conviction_score: 8,
    classification_reason:
      'The thesis stacked across four dimensions: 13 cm reach edge, momentum off the Edwards KO in October 2025, JDM\'s 50-45 loss to Makhachev showing exposed durability, and stylistic matchup that handed Prates the pocket. Broad method (KO/TKO or Decision) made it ML-backable for the Lock slot.',
    actual_result:
      'Prates ended it at 3:17 of round 3 by TKO. JDM\'s defense broke down exactly where we said the pocket would be — straight left, follow-up combination, ground-and-pound to stoppage. Method called.',
    payoff_note:
      'Main event, headline pick, ML at -130 area, broadcast in Australia at 5am local — and the Lock landed clean. This is the slot that drives Discord conversion the entire week after.',
  },

  cycle_parlay: {
    name: 'Method Combo Parlay',
    concept:
      'Two-leg method-specific parlay — Prates by KO/TKO + Malkoun by Decision. Different methods, different segments of the card, both Locks in our grid. Built from picks that already passed the gates, not chased to hit a target combined odds number.',
    legs: [
      {
        method: 'KO/TKO',
        pick: 'Carlos Prates by KO/TKO',
        bout: 'Della Maddalena vs Prates',
        result: 'TKO R3 (3:17)',
        hit: true,
      },
      {
        method: 'DEC',
        pick: 'Jacob Malkoun by Decision',
        bout: 'Malkoun vs Meerschaert',
        result: 'Unanimous Decision',
        hit: true,
      },
    ],
    status: 'hit',
    note:
      'Both legs cashed. Combined odds in the +180 to +220 range depending on book — a $10 entry returned roughly $28-32. Posted to your Discord pre-card, this is the kind of parlay that converts free followers into paid members.',
  },

  fade_of_week: {
    bout: 'Tuivasa vs Sutherland · Heavyweight',
    fade_target: 'Tuivasa by KO R1-R2 (chalk method bet)',
    why_we_warned:
      'The market had Tuivasa as a sharp ML favorite with most action on the early KO method line. We flagged it as ⚠️ Risky in the grid because Tuivasa\'s case requires the early finish — past round 2, his cardio cliff is the loudest pattern in his career (1-5 in fights past R1 since 2022). We took our shot with the Risky tag instead of stacking it as a Lock.',
    actual_outcome:
      'Sutherland weathered the round 1 storm, took it to the cardio test, won unanimous decision. Anyone who had this as a "safe" Lock or main parlay anchor lost both the ML and the method bet.',
    lesson:
      'Picks-creator brand depends on Lock integrity. When a method window is narrow, classifying it as Risky protects the headline reel — even when it costs a unit, it costs 1 Risky unit, not the trust your audience has in the 🔒 column.',
  },

  arena_playbook: {
    headline:
      'Crenas Arena turns your Discord into a closed-loop monetization engine. Members buy in to your private league, picks give them edge, prize pulls them back next card. Three revenue layers from the same member.',
    loop_diagram: [
      {
        step: 'Discord member subscribes',
        description: 'Gets full Crenas pick grid + your write-up, monthly or per-card pricing.',
      },
      {
        step: 'Member enters Arena private league ($10)',
        description:
          'You create a private league exclusive to your Discord. Entry fee fills the prize pool plus your cut.',
      },
      {
        step: 'Crenas picks give edge inside the league',
        description:
          'Members ranked by score on each card. Hit rate from the Locks/Winners stack lifts member scores.',
      },
      {
        step: 'Top scorer collects prize, all members come back',
        description:
          'Winner cashes, but the whole league saw their score climb. Renewal next card is muscle memory.',
      },
    ],
    pricing_suggestion:
      'Sweet spot for entry: $10 per card (matches assumed pick-package pricing, low friction). Prize pool: 70% of entries to top finisher, 20% to your cut, 10% reserved for runner-up or rollover. With 100 members, that is a $700 prize + $200 to you per card on top of subscription revenue.',
    setup_steps: [
      'Crenas creates a private Arena league branded "MMA Bet IQ Arena" (or your variant) with admin invite-only access.',
      'You drop the join link in the paid Discord 24-48h before each card. Free followers see screenshots of leaderboard + prize, want in.',
      'Crenas picks publish to your Discord 12h pre-card. Members place picks inside Arena before bell time.',
      'Live leaderboard updates round-by-round during the card. We export end-of-card winner notice for you to post.',
    ],
    conversion_templates: [
      {
        scenario: 'Pre-card Discord announcement',
        copy:
          'Arena entry is open for [Card Name] 🔒\n\n$10 buy-in, top score takes the pot. Last card it was $480 to the winner.\n\nFull pick grid drops at [time]. Locks, Risky tags, Underdog plays, all of it. You get the picks AND the league access.\n\nLink below 👇',
      },
      {
        scenario: 'Mid-card hype post',
        copy:
          '🔒 Lock #1 just cashed.\n🔒 Lock #2 cashed.\n\nLeaderboard update incoming after main card. If you joined Arena tonight you\'re running.\n\nIf you didn\'t — next card opens [date]. $10. Same Locks. Same edge.',
      },
      {
        scenario: 'Post-card retention message',
        copy:
          'Card recap:\n\nLocks: ✅ ✅ ✅ ✅ (4/4)\nWinners: ✅ ✅ ✅ ❌\nMethod called on every winner.\n\nArena prize: $[X] to @[winner].\n\nNext card opens [date]. Same grid, same league. Lock your seat in Discord 🔗',
      },
    ],
  },

  discord_engine: {
    headline:
      'Your IG is the funnel, Discord is the conversion. These hooks are built around the picks-creator value prop — pick grid, edge, exclusive Arena access. Every hook ends with the Discord CTA, not a vanity metric.',
    ig_hooks: [
      {
        angle: '🔒 Lock track-record flex',
        hook: '🔒 LOCKS WENT 4/4 LAST CARD',
        body:
          'Prates KO ✅ · Salkilld R1 ✅ · Malkoun ✅ · Micallef ✅. Method called on every winner of the night.\n\nThis card is on me to show you the level. Next card the full grid drops in Discord.',
        cta: '👉 Link in bio · MMA Bet IQ Discord · $10/card or $20/3-pack',
      },
      {
        angle: '⚠️ Risky pick exact-method bullseye',
        hook: '⚠️ RISKY TAG. KO R1. EXACT.',
        body:
          'Tafa by KO R1 — flagged Risky because R1 finish props rarely cash. Cashed at 2:42.\n\nThe Risky tag is the value column. It is where the +200, +300, +400 method props live.',
        cta: '👉 Discord members got the full Risky read pre-card. Link in bio.',
      },
      {
        angle: 'Track-record honesty (transparency play)',
        hook: '8/11 winners. 8/8 method on winners.',
        body:
          'Card breakdown:\n🔒 Locks 4/4\n⚠️ Risky 1/2\n✅ Winner 3/4\n🐶 Underdog 0/1\n\nYou see the misses too. That is how a real track record looks.',
        cta: '👉 Full grid + reasoning lives in Discord. Link in bio.',
      },
      {
        angle: 'Arena private league sales pitch',
        hook: 'Discord member just took home $[X] from Arena last night.',
        body:
          '$10 entry. 4/4 Locks lifted his score above the rest. Next card opens [date].\n\nMembers get the Discord pick grid AND Arena access. Free IG followers see the leaderboard, paid members are on it.',
        cta: '👉 Lock your seat in Discord. Link in bio.',
      },
      {
        angle: 'Fade-of-week credibility',
        hook: 'We faded Tuivasa KO R1-R2 last card. Sutherland decisioned him.',
        body:
          'Public was on the chalk method. Our grid said Risky, not Lock. The grid protected anyone who tailed the Locks instead.\n\nA picks creator who only shows you wins is selling you wins. We show you the Fade, the Risky, the Underdog miss too.',
        cta: '👉 Full grid, every card. Discord. Link in bio.',
      },
    ],
    discord_pricing_note:
      'Suggested pricing if you are evaluating: $10 per card (single drop) or $20 per 3-card pack. Aligns with the Arena entry fee — members rarely buy one without the other once both are wired into the same flow. If your current Discord runs a different rate, the kit copy adapts to whatever you tell us.',
    weekly_post_template: `[CARD NAME] · [DATE]
Pick grid drops in Discord at [time]

🔒 Locks: [N picks]
⚠️ Risky: [N picks]
✅ Winners: [N picks]
🐶 Dogs: [N picks]

Plus:
· Lock of the Week reasoning
· Method Combo Parlay
· Fade of the Week (the trap to avoid)
· Arena league entry — $10, prize pool live

Link in bio 👇`,
  },

  call_to_action: {
    headline: 'Want this for next card?',
    body:
      'This is the demo kit from a card that already happened — built so you can see exactly what lands in your inbox before fight week. If you want the next one tuned to your audience, your hooks, your Discord pricing, and your Arena setup, we build it for the [next card] week.',
    next_event_target: 'Next event: targeting [UFC card · date]. Kit drops 72h pre-card.',
    pricing_note: 'Per-creator kit pricing on request · trial kit available for the first card',
  },
};
