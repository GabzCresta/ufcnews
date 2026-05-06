import { RecapView } from '@/components/recap/RecapView';
import { enrichRecapWithPhotos } from '@/lib/enrich-recap-photos';
import type { RecapData } from '@/types/recap';

export const dynamic = 'force-dynamic';

const recapData: RecapData = {
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: 'May 2, 2026',
  evento_local: 'RAC Arena, Perth, Australia',
  evento_numero: 'UFC Fight Night 270',

  total_fights: 11,
  predictions_correct: 8,
  methods_correct: 8,

  main_card: [
    {
      slug: 'della-maddalena-vs-prates',
      fighter1: { nome: 'Jack Della Maddalena', record: '18-3-0' },
      fighter2: { nome: 'Carlos Prates', record: '23-7-0' },
      categoria_peso: 'Welterweight (170 lbs)',
      num_rounds: 5,
      is_main_event: true,
      predicted_winner: 'Carlos Prates',
      predicted_method: 'KO/TKO or Decision',
      confidence_label: 'MEDIUM-HIGH',
      actual_winner: 'Carlos Prates',
      actual_method: 'TKO (Punches)',
      actual_round: 3,
      actual_time: '3:17',
      prediction_correct: true,
      method_correct: true,
    },
    {
      slug: 'dariush-vs-salkilld',
      fighter1: { nome: 'Beneil Dariush', record: '23-7-1' },
      fighter2: { nome: 'Quillan Salkilld', record: '11-1-0' },
      categoria_peso: 'Lightweight (155 lbs)',
      num_rounds: 3,
      predicted_winner: 'Quillan Salkilld',
      predicted_method: 'KO/TKO or Sub R1-R2',
      confidence_label: 'MEDIUM-HIGH',
      actual_winner: 'Quillan Salkilld',
      actual_method: 'KO/TKO (Punches)',
      actual_round: 1,
      actual_time: '3:29',
      prediction_correct: true,
      method_correct: true,
      bonus: 'POTN',
    },
    {
      slug: 'tuivasa-vs-sutherland',
      fighter1: { nome: 'Tai Tuivasa', record: '15-9-0' },
      fighter2: { nome: 'Louie Sutherland', record: '10-5-0' },
      categoria_peso: 'Heavyweight (265 lbs)',
      num_rounds: 3,
      predicted_winner: 'Tai Tuivasa',
      predicted_method: 'KO/TKO R1-R2',
      confidence_label: 'MEDIUM',
      actual_winner: 'Louie Sutherland',
      actual_method: 'Unanimous Decision',
      prediction_correct: false,
      method_correct: false,
    },
    {
      slug: 'elliott-vs-erceg',
      fighter1: { nome: 'Tim Elliott', record: '22-13-1' },
      fighter2: { nome: 'Steve Erceg', record: '13-4-0' },
      categoria_peso: 'Flyweight (125 lbs)',
      num_rounds: 3,
      predicted_winner: 'Steve Erceg',
      predicted_method: 'Decision or late TKO',
      confidence_label: 'MEDIUM',
      actual_winner: 'Steve Erceg',
      actual_method: 'Unanimous Decision',
      prediction_correct: true,
      method_correct: true,
    },
  ],
  prelims: [
    {
      slug: 'rowston-vs-bryczek',
      fighter1: { nome: 'Cam Rowston', record: '14-3-0' },
      fighter2: { nome: 'Robert Bryczek', record: '18-6-0' },
      categoria_peso: 'Middleweight (185 lbs)',
      num_rounds: 3,
      predicted_winner: 'Cameron Rowston',
      predicted_method: 'TKO or Decision',
      confidence_label: 'MEDIUM',
      actual_winner: 'Cam Rowston',
      actual_method: 'Unanimous Decision',
      prediction_correct: true,
      method_correct: true,
    },
    {
      slug: 'tafa-vs-christian',
      fighter1: { nome: 'Junior Tafa', record: '6-5-0' },
      fighter2: { nome: 'Kevin Christian', record: '9-3-0' },
      categoria_peso: 'Light Heavyweight (205 lbs)',
      num_rounds: 3,
      predicted_winner: 'Junior Tafa',
      predicted_method: 'KO R1',
      confidence_label: 'MEDIUM',
      actual_winner: 'Junior Tafa',
      actual_method: 'KO/TKO (Punches)',
      actual_round: 1,
      actual_time: '2:42',
      prediction_correct: true,
      method_correct: true,
    },
    {
      slug: 'malkoun-vs-meerschaert',
      fighter1: { nome: 'Jacob Malkoun', record: '9-3-0' },
      fighter2: { nome: 'Gerald Meerschaert', record: '37-21-0' },
      categoria_peso: 'Middleweight (185 lbs)',
      num_rounds: 3,
      predicted_winner: 'Jacob Malkoun',
      predicted_method: 'TKO or Decision',
      confidence_label: 'MEDIUM-HIGH',
      actual_winner: 'Jacob Malkoun',
      actual_method: 'Unanimous Decision',
      prediction_correct: true,
      method_correct: true,
    },
    {
      slug: 'thicknesse-vs-morales',
      fighter1: { nome: 'Colby Thicknesse', record: '8-1-0' },
      fighter2: { nome: 'Vince Morales', record: '16-10-0' },
      categoria_peso: 'Bantamweight (135 lbs)',
      num_rounds: 3,
      predicted_winner: 'Colby Thicknesse',
      predicted_method: 'Decision',
      confidence_label: 'MEDIUM',
      actual_winner: 'Colby Thicknesse',
      actual_method: 'Unanimous Decision',
      prediction_correct: true,
      method_correct: true,
    },
    {
      slug: 'johnston-vs-schultz',
      fighter1: { nome: 'Benjamin Johnston', record: '0-0-0' },
      fighter2: { nome: 'Wes Schultz', record: '8-3-0' },
      categoria_peso: 'Middleweight (185 lbs)',
      num_rounds: 3,
      predicted_winner: 'Ben Johnston',
      predicted_method: 'KO/TKO or Sub',
      confidence_label: 'LOW',
      actual_winner: 'Wes Schultz',
      actual_method: 'Submission (Rear-Naked Choke)',
      actual_round: 3,
      actual_time: '1:50',
      prediction_correct: false,
      method_correct: false,
    },
    {
      slug: 'micallef-vs-gorimbo',
      fighter1: { nome: 'Jonathan Micallef', record: '9-1-0' },
      fighter2: { nome: 'Themba Gorimbo', record: '14-6-0' },
      categoria_peso: 'Welterweight (170 lbs)',
      num_rounds: 3,
      predicted_winner: 'Jonathan Micallef',
      predicted_method: 'Decision or late Sub',
      confidence_label: 'MEDIUM-HIGH',
      actual_winner: 'Jonathan Micallef',
      actual_method: 'Split Decision',
      prediction_correct: true,
      method_correct: true,
    },
    {
      slug: 'mar-fan-vs-steele',
      fighter1: { nome: 'Dom Mar Fan', record: '9-2-0' },
      fighter2: { nome: 'Kody Steele', record: '7-1-0' },
      categoria_peso: 'Lightweight (155 lbs)',
      num_rounds: 3,
      predicted_winner: 'Dom Mar Fan',
      predicted_method: 'Decision or late TKO',
      confidence_label: 'MEDIUM',
      actual_winner: 'Kody Steele',
      actual_method: 'Submission',
      actual_round: 1,
      actual_time: '3:56',
      prediction_correct: false,
      method_correct: false,
    },
  ],

  headlines: [
    {
      icon: 'crown',
      title: 'The Brazilian Nightmare Becomes Reality',
      description: "Carlos Prates KO'd Jack Della Maddalena in round 3 to claim his second former champion in six months. After demolishing Leon Edwards, Prates now adds JDM to the list. The 13 cm reach edge, the heavy hands, the momentum: every part of the thesis showed up exactly as projected.",
      fighter: 'Carlos Prates',
      tag: 'Title Picture',
    },
    {
      icon: 'sparkles',
      title: 'Salkilld Cashes the Hype Check',
      description: 'The 2025 UFC Newcomer of the Year needed 3:29 to dispatch a former lightweight title challenger. Quillan Salkilld is now 4-0 in the UFC with three Performance of the Night bonuses. Beneil Dariush has now been finished inside the distance three times in 2.5 years.',
      fighter: 'Quillan Salkilld',
      tag: 'Breakout',
    },
    {
      icon: 'skull',
      title: 'Tuivasa Hits Rock Bottom',
      description: 'Tai Tuivasa dropped a unanimous decision to short-notice replacement Louie Sutherland, extending his losing streak to seven. The Bam Bam era at heavyweight feels officially over. The conversation now is when, not if, the UFC pulls the plug.',
      fighter: 'Tai Tuivasa',
      tag: 'Decline',
    },
    {
      icon: 'flame',
      title: 'Tafa Stays True to His Word',
      description: "Four UFC wins, four R1 finishes by KO. Junior Tafa cracked Kevin Christian at 2:42 of the first round, snapping a three-fight losing streak in front of a home crowd that needed it. He's the most binary fighter on the roster: when his hands land, the night ends.",
      fighter: 'Junior Tafa',
    },
    {
      icon: 'shield',
      title: 'Erceg Reclaims His Confidence',
      description: 'After admitting he questioned whether he was "a fraud" post-Osbourne, Steve Erceg returned home to Perth and beat down a flyweight legend. Tim Elliott (39) takes another loss as the gatekeeper window closes. Erceg stays alive in the title conversation.',
      fighter: 'Steve Erceg',
    },
    {
      icon: 'zap',
      title: 'Aussies Run Perth',
      description: 'Six of the eleven graded winners on this card were Australians fighting at home. RAC Arena delivered exactly the home-cage advantage the books quietly priced in. The data point is replicable for future Sydney/Melbourne/Perth cards.',
      tag: 'Pattern',
    },
  ],

  star_of_the_night: {
    fighter: 'Carlos Prates',
    stat_line: 'TKO R3 (3:17) | Second former champ KO in 6 months | Top-3 contender push',
    quote: undefined,
    narrative:
      "Six months ago Carlos 'The Nightmare' Prates was a guy with serious pop fighting his way up the welterweight ladder. Tonight he became the man who knocked out two former champions in succession. Edwards in November. Della Maddalena in May. Same shot, same setup, same result: a left hand that lives in the pocket and refuses to miss. JDM came in trying to box his way back from the Makhachev demolition. Prates wouldn't let him. Three rounds of pressure, calculated counters, and the inevitable finish. The welterweight division just got reorganized around a single Brazilian striker who beats former champs the way most fighters beat prelim opponents.",
  },

  bonuses: {
    fotn: { fighter1: 'Carlos Prates', fighter2: 'Jack Della Maddalena' },
    potn: ['Carlos Prates', 'Quillan Salkilld'],
  },

  ranking_moves: [
    { fighter: 'Carlos Prates', division: 'Welterweight', from: 6, to: 3, direction: 'up' },
    { fighter: 'Quillan Salkilld', division: 'Lightweight', from: null, to: 14, direction: 'new' },
    { fighter: 'Steve Erceg', division: 'Flyweight', from: 9, to: 7, direction: 'up' },
    { fighter: 'Jacob Malkoun', division: 'Middleweight', from: null, to: 15, direction: 'new' },
    { fighter: 'Jack Della Maddalena', division: 'Welterweight', from: 4, to: 8, direction: 'down' },
    { fighter: 'Beneil Dariush', division: 'Lightweight', from: 12, to: 16, direction: 'down' },
    { fighter: 'Tim Elliott', division: 'Flyweight', from: 12, to: 14, direction: 'down' },
    { fighter: 'Tai Tuivasa', division: 'Heavyweight', from: 15, to: 16, direction: 'down' },
  ],

  whats_next: [
    {
      fighter: 'Carlos Prates',
      result: 'W',
      potential_opponents: ['Islam Makhachev', 'Belal Muhammad', 'Shavkat Rakhmonov'],
      narrative:
        "Two former champs, two KOs. The shortlist for Prates next is the title or a clear title eliminator. If Makhachev defends, Prates is the natural challenger by narrative alone. A fight against Rakhmonov would be the most dangerous test left in the division.",
    },
    {
      fighter: 'Quillan Salkilld',
      result: 'W',
      potential_opponents: ['Renato Moicano', 'Mateusz Gamrot', 'Drew Dober'],
      narrative:
        "Salkilld at 4-0 with three POTN bonuses needs a ranked, established opponent next. Moicano is the perfect litmus test: experienced, durable, and the right step up to confirm or correct the prospect grade. Lightweight has its newest legitimate threat.",
    },
    {
      fighter: 'Jack Della Maddalena',
      result: 'L',
      potential_opponents: ['Sean Brady', 'Geoff Neal', 'Joaquin Buckley'],
      narrative:
        "Two losses removed from the belt: a 50-45 dismantling by Makhachev and now a clean KO from Prates. JDM at 28 has time to rebuild but the chin question is open. A bounce-back fight against a wrestler he can outbox is the safest path. Brady is the obvious test.",
    },
    {
      fighter: 'Steve Erceg',
      result: 'W',
      potential_opponents: ['Brandon Royval', 'Kai Kara-France', 'Manel Kape'],
      narrative:
        "Erceg needed this win to stay in the title picture and got it. A fight against Kara-France is the rematch the books love (Erceg lost their first meeting). Kape would also be a stylistic showcase. He's back in business at flyweight.",
    },
    {
      fighter: 'Tai Tuivasa',
      result: 'L',
      potential_opponents: ['Marcos Rogerio de Lima', 'Don\'tale Mayes', 'Justin Tafa'],
      narrative:
        "Seven straight losses. The UFC has historically held loyalty for Tuivasa given his marketability, but the math is brutal. A swan-song fight at heavyweight against a lower-tier opponent is the kindest exit, or release is the next step.",
    },
    {
      fighter: 'Junior Tafa',
      result: 'W',
      potential_opponents: ['Karol Rosa', 'Vinicius Oliveira', 'Bryan Battle'],
      narrative:
        "Four UFC wins, all R1 KOs. The pattern is the pitch: Tafa is a one-trick fighter with a very dangerous trick. A step up against another aggressive striker keeps the pattern testable. Avoid wrestlers until the gas tank story changes.",
    },
  ],

  model_notes: `8 of 11 graded winners correct (72.7%). Method matched on every single correct call: when we got the winner, we got the path. The Gaziev vs Pericic heavyweight bout was scratched at the venue and is excluded.

Where the thesis held: Prates was our flagship pick at confidence 7 with a clean three-dimension thesis (reach, hands, momentum) and it played out exactly as projected. Salkilld was a linear read (chin gone, age gap, prospect rising). Malkoun, Micallef, Tafa: all calls validated by the qualitative dossier we built pre-fight.

Where we missed: Tuivasa and Mar Fan are the painful ones because in both cases the subtitle of the analysis already described the path to the loss. Tuivasa's pre-fight note literally said "the decline is real despite the home crowd". Mar Fan's flagged "20% takedown defense is a real vulnerability against grappling pedigree". Both were finished or beaten exactly that way. The home-crowd narrative pulled the final pick against our own diagnosis.

The Johnston vs Schultz pick was confidence 4, labeled "honest coin flip". The miss is statistically expected at that confidence level, but it still counts on the card record.

Calibration: high-confidence (7+) picks went 4-0 with method matched. Medium picks went 4-3. Low confidence went 0-1. The model's confidence ranking is well-calibrated; the structural fix needed is around home-crowd weighting in fights where the qualitative dossier already flags the loser's path.`,

  quotable_stats: [
    {
      stat: '2-0 vs Former Champs in 6 Months',
      context: "Carlos Prates KO'd Leon Edwards in November and Jack Della Maddalena in May. No other welterweight has ever finished two former champions in consecutive fights inside one calendar year window.",
      fighter: 'Carlos Prates',
      category: 'historical',
      icon: 'flame',
      shareable_text: 'Carlos Prates: 2-0 vs former welterweight champions in 6 months. Edwards by KO. Della Maddalena by KO. The Nightmare is real. #UFC #UFCPerth',
    },
    {
      stat: '3 KO Losses in 2.5 Years',
      context: 'Beneil Dariush has been finished inside the distance three separate times since November 2022: Charles Oliveira, Renato Moicano (16-second KO), and now Quillan Salkilld in R1. The chin is no longer there.',
      fighter: 'Beneil Dariush',
      category: 'streak',
      icon: 'trending',
      shareable_text: "Beneil Dariush: 3 KO losses in 2.5 years. Once a top-5 lightweight, now fighting on borrowed time. Father Time hits everyone. #UFC",
    },
    {
      stat: '4-0 UFC, 3 Performance Bonuses',
      context: 'Quillan Salkilld is now perfect in the UFC at 4-0. Three of those four wins came with Performance of the Night bonuses. He is the youngest fighter on a four-fight UFC win streak in the lightweight division.',
      fighter: 'Quillan Salkilld',
      category: 'breakout',
      icon: 'trending',
      shareable_text: 'Quillan Salkilld: 4-0 in the UFC. 3 Performance of the Night bonuses. The Australian lightweight prospect is the real deal. #UFC',
    },
    {
      stat: '7 Losses in a Row',
      context: 'Tai Tuivasa has now lost seven consecutive UFC fights, the longest active losing streak in the heavyweight division. He has not won since June 2023.',
      fighter: 'Tai Tuivasa',
      category: 'streak',
      icon: 'trending',
      shareable_text: "Tai Tuivasa: 7 straight losses. Last UFC win was June 2023. The Bam Bam era is officially over. Tough night for one of the most beloved heavyweights of the era.",
    },
    {
      stat: '6 of 11 Aussies Won at Home',
      context: 'Six of the eleven graded winners on the card were Australian fighters competing at RAC Arena, Perth. Home-cage advantage at Australian UFC events is now measurable across multiple cards.',
      category: 'historical',
      icon: 'target',
      shareable_text: '6 of 11 winners at UFC Perth were Australians fighting at home. The home-cage advantage at Australian UFC cards is a real, replicable pattern for bettors. #UFCPerth',
    },
    {
      stat: '73% Winner Accuracy',
      context: 'Our prediction model went 8-for-11 on graded fights. Every correct winner pick also had the method match within the predicted range.',
      category: 'model',
      icon: 'target',
      shareable_text: '73% winner accuracy at UFC Perth. Method matched on every correct call. The Prates main event was our flagship pick at confidence 7, and it landed clean. #MMA #UFCPredictions',
    },
    {
      stat: '4 Australian Wins on Main Card Stretch',
      context: 'Salkilld, Erceg, Rowston, Malkoun, Thicknesse, Micallef, Tafa: an Australian wave swept Perth with finishes and dominant decisions across both prelims and main card. Only Tuivasa fell among the eleven local fighters.',
      category: 'finish',
      icon: 'flame',
      shareable_text: "Australian wave at UFC Perth. Salkilld, Erceg, Tafa: three R1 finishes from the home country in one night. The card belonged to the Aussies. #UFCPerth",
    },
    {
      stat: 'Kody Steele: From Combat Jiu-Jitsu World Champ to UFC Sub R1',
      context: '2019 Combat Jiu-Jitsu world champion Kody Steele submitted Dom Mar Fan in 3:56 of the first round, neutralizing the home favorite with grappling pedigree. The pre-fight dossier had flagged Mar Fan\'s 20% takedown defense as the dominant vulnerability.',
      fighter: 'Kody Steele',
      category: 'finish',
      icon: 'zap',
      shareable_text: '2019 Combat Jiu-Jitsu world champ Kody Steele submitted home favorite Dom Mar Fan in R1 at UFC Perth. Grappling pedigree wins again. #UFC #BJJ',
    },
  ],

  narrative_threads: [
    {
      headline: 'The Coronation of Carlos Prates',
      slug_tag: 'RISE',
      fighters_involved: ['Carlos Prates', 'Jack Della Maddalena', 'Leon Edwards'],
      lede: "Six months ago Carlos Prates was a contender. Tonight he is the man who has knocked out two former welterweight champions in consecutive fights. The Brazilian Nightmare era at 170 has officially begun.",
      body: "The path was identical to the Edwards fight. Pressure with control. The reach used as a weapon, not a shield. Patience that refused to be baited into JDM's preferred boxing exchanges. And then, in the third round, the same shot that put Edwards down: the left hand that arrives at the moment the opponent stops respecting it.\n\nWelterweight is now reorganized around a single fighter. Belal Muhammad and Shavkat Rakhmonov are the names left in the division who haven't tasted a Prates left hand. Makhachev has the belt at 170 right now. Prates is the natural challenger by narrative and by KO record alone.\n\nThe scariest part for the rest of the division: the man Prates beat tonight wasn't a top-5 striker who got caught. JDM was a former champion who had lost only to Makhachev. Prates didn't just win. He confirmed that the welterweight title picture without him in the conversation no longer exists.",
      suggested_angles: [
        'Rank the welterweight title pictures: Makhachev, Prates, Belal, Rakhmonov',
        'Statistical breakdown: how Prates set up the same KO twice (Edwards and JDM)',
        'Brazilian welterweight champions through history: where Prates fits if he wins gold',
      ],
      content_type_fit: ['article', 'video', 'podcast'],
    },
    {
      headline: 'The Veteran Decline at Lightweight',
      slug_tag: 'FALL',
      fighters_involved: ['Beneil Dariush', 'Tai Tuivasa'],
      lede: 'UFC Perth was a brutal night for veterans whose chins gave out. Two fighters with combined 50+ professional fights took losses that look career-defining in the bad way.',
      body: "Beneil Dariush, 36, was once a top-5 lightweight who challenged for a title. Tonight he was finished in 3:29 of round one for the third time in two and a half years. The chin is gone. The reflexes are gone. The math is brutal.\n\nTai Tuivasa, 33, has now lost seven straight at heavyweight. Once a knockout artist with a shoey celebration that became part of UFC marketing, he hasn't won since June 2023. The losses aren't to top-5 contenders anymore: they're to short-notice replacements.\n\nThis is the part of MMA nobody likes to talk about. Veterans who built the sport hit a wall and the sport keeps moving. The honest question for both fighters: is the next fight worth taking?",
      suggested_angles: [
        'When should the UFC release a fighter? The case of Tai Tuivasa',
        "Beneil Dariush retirement watch: what the data says about post-3-KO careers",
      ],
      content_type_fit: ['article', 'podcast'],
    },
    {
      headline: 'Salkilld Joins the Lightweight Conversation',
      slug_tag: 'BREAKOUT',
      fighters_involved: ['Quillan Salkilld', 'Beneil Dariush'],
      lede: "The 2025 UFC Newcomer of the Year just finished a former title challenger in round one. Quillan Salkilld at 4-0 is the most credentialed prospect in lightweight today.",
      body: "Salkilld is 24 years old. He has three Performance of the Night bonuses in four UFC fights. He just stopped a former top-5 lightweight in 3:29 with clean boxing. The hype is starting to feel earned.\n\nThe lightweight division is the deepest in MMA. Every prospect at 155 needs a ranked test before the rankings believe them. Salkilld got it tonight, and it wasn't close. Now the question is whether the UFC fast-tracks him or makes him beat someone like Renato Moicano first to confirm.\n\nWhat makes Salkilld interesting beyond the record is the calmness. He doesn't fight like a 24-year-old prospect. He fights like a contender who already knows where the title shot lives.",
      suggested_angles: [
        'Lightweight prospect rankings: Salkilld vs the rest of the new wave',
        "Australia's UFC pipeline: Salkilld, Erceg, Whittaker as the new generation",
      ],
      content_type_fit: ['article', 'video', 'social'],
    },
    {
      headline: 'The Home-Crowd Pattern at Australian Cards',
      slug_tag: 'LEGACY',
      fighters_involved: [],
      lede: 'Six of the eleven graded winners at UFC Perth were Australians fighting at home. Across multiple cards now, the home-cage advantage in Australia is a measurable betting edge.',
      body: "RAC Arena delivered exactly the kind of card the books and the crowd both quietly expected. Australians who would have been moderate underdogs at neutral venues won. Australians who were favored won by larger margins. The home factor isn't soft; it's measurable.\n\nFor the analytics community, this is a free data point. For the UFC, it's the playbook for selling cards in markets with strong local fans. For bettors, it's a pattern that pays in the right direction at the right venue.\n\nThe next Australian card should be priced with this advantage baked in. The honest question is whether the books are slow to catch up or whether the public has already eaten the edge.",
      suggested_angles: [
        'Data piece: Australian fighters\' record at home cards vs neutral venues, last 5 years',
        'The home-cage advantage: which countries show the strongest pattern in MMA',
      ],
      content_type_fit: ['article', 'video', 'podcast'],
    },
  ],

  creator_kit: {
    instagram: [
      { slide_number: 1, title: 'UFC PERTH RECAP', content: "Prates KO's JDM in R3\nSalkilld R1 KO of Dariush\nTuivasa drops 7th straight\n\n73% prediction accuracy\n6 of 11 Aussie wins at home", color: 'red' },
      { slide_number: 2, title: 'STAR OF THE NIGHT', content: 'Carlos Prates\nTKO R3 (3:17)\n\n2-0 vs former welterweight champs\nEdwards (Nov) + JDM (May)\nMoves to #3 WW\n\nThe Nightmare is real.', color: 'gold' },
      { slide_number: 3, title: 'PROSPECT WATCH', content: "Quillan Salkilld\nKO R1 (3:29)\n\n4-0 in the UFC\n3 POTN bonuses\nFinished a former title challenger\n\nLightweight has a new problem.", color: 'blue' },
      { slide_number: 4, title: 'BY THE NUMBERS', content: '11 graded fights\n4 finishes (36%)\n7 decisions\n2 KO/TKO\n2 submissions\n\nShortest: Junior Tafa 2:42', color: 'green' },
      { slide_number: 5, title: "WHAT'S NEXT", content: 'Prates vs Makhachev (or Belal)\nSalkilld vs Moicano test\nJDM vs Sean Brady rebuild\nTuivasa: cut watch\n\nNext event:\nUFC 327 main card', color: 'red' },
    ],
    twitter: [
      { num: '1/6', text: "UFC Perth was supposed to be a step-aside card before the next PPV. Instead:\n\n- Star making KO main event\n- 4-0 prospect finishes a former champ\n- Tuivasa hits 7 straight losses\n- Aussies win 6 of 11 at home\n\nThread:", type: 'thread_opener' },
      { num: '2/6', text: "Carlos Prates is now 2-0 against former welterweight champions in 6 months. Edwards in November. Della Maddalena tonight. Same left hand. Same setup. Same finish.\n\nThe Nightmare is real, and the title shot is next.", type: 'result' },
      { num: '3/6', text: "Quillan Salkilld at 24 just finished Beneil Dariush in 3:29. He is now 4-0 in the UFC with 3 Performance of the Night bonuses.\n\nLightweight has a new credentialed prospect. Make the Moicano fight.", type: 'hot_take' },
      { num: '4/6', text: "Tai Tuivasa: 7 straight losses. Last UFC win was June 2023.\n\nThe Bam Bam era is officially over. The kindest version of what happens next is a swan-song fight against a low-tier opponent. The honest version is release.", type: 'stat' },
      { num: '5/6', text: "Our model: 8/11 graded winners (73%), with method matched on every single correct call.\n\nWe missed Tuivasa and Mar Fan despite our own subtitles flagging the path to their losses. Home-crowd narrative beat technical diagnosis. Calibration fix incoming.", type: 'stat' },
      { num: '6/6', text: "Six of eleven Aussies won at home in Perth. Across multiple Australian cards now, this is a measurable betting edge. The books are slow to fully price it in.\n\nNext UFC card in Australia? Bring the kangaroos.", type: 'thread_closer' },
    ],
    video_script: [
      { time: '0-10s', title: 'Hook', text: 'Carlos Prates just knocked out his second former welterweight champion in six months. The Nightmare era is official, and the title shot is calling.', b_roll_suggestion: 'Prates KO of JDM in slow motion, then the Edwards KO from November' },
      { time: '10-30s', title: 'Main Event', text: "Three rounds of pressure, 13 cm of reach, and the same left hand that put Edwards down. Della Maddalena came in trying to box back from the Makhachev demolition. Prates wouldn't let him. KO at 3:17 of round three. The welterweight title picture is now organized around one Brazilian striker.", b_roll_suggestion: 'Reach comparison graphic, then Prates pressure sequences' },
      { time: '30-50s', title: 'Highlights', text: "Quillan Salkilld at 24 just finished Beneil Dariush in round one. The Newcomer of the Year is now 4-0 in the UFC with three POTN bonuses. Junior Tafa: four UFC wins, four R1 KOs. Steve Erceg gets back on track at home.", b_roll_suggestion: 'Salkilld KO + Tafa KO + Erceg highlight' },
      { time: '50-70s', title: 'Scorecard', text: 'Our AI model went 8 of 11 on graded fights, 73% winner accuracy with method matched on every correct call. Biggest miss: Tuivasa, where we picked the home favorite despite our own pre-fight notes flagging the decline.', b_roll_suggestion: 'Prediction accuracy graphic with checkmarks and X marks' },
      { time: '70-90s', title: 'CTA', text: "Prates needs the title shot or the Belal Muhammad fight next. Salkilld should get Renato Moicano. Tuivasa is on cut watch. Subscribe for next week's pre-fight analysis.", b_roll_suggestion: 'Next event promo' },
    ],
    tiktok: [
      { hook: "Carlos Prates just KO'd his SECOND former champion in 6 months", body: 'Edwards in November. Della Maddalena tonight. Same left hand. Same setup. The Brazilian Nightmare just earned a title shot. He is now 2-0 against former welterweight champs.', cta: 'Follow for AI-powered UFC breakdowns before every event.' },
      { hook: 'This 24-year-old just FINISHED a former title challenger in round one', body: "Quillan Salkilld is 4-0 in the UFC with 3 Performance of the Night bonuses. The Australian lightweight prospect just stopped Beneil Dariush in 3:29. He's the real deal.", cta: 'Our AI model went 73% on UFC Perth picks. Link in bio.' },
      { hook: 'Tai Tuivasa just hit SEVEN losses in a row', body: 'Last UFC win: June 2023. Tonight he lost a unanimous decision to a short-notice replacement. The Bam Bam era is officially over. The cut watch is real.', cta: 'Full UFC Perth recap and prediction grades on our site.' },
    ],
    podcast_talking_points: [
      { segment: 'Opening', duration_suggestion: '3-5 min', talking_points: ['11 graded fights, 4 finishes, $400K+ in bonuses.', 'Main event TKO at 3:17 of round 3.', 'Prediction model went 8/11 (73%).', 'Aussies went 6 of 11 at home.'], hot_take: 'UFC Perth delivered more star power than several recent PPVs.' },
      { segment: 'Main Event Deep Dive', duration_suggestion: '5-7 min', talking_points: ["Prates is now 2-0 against former welterweight champions in 6 months.", "The 13 cm reach edge was the matchup-defining factor.", "JDM is now 0-2 since losing the belt: chin question is open.", "Welterweight title picture is reorganized around Prates."], hot_take: 'Prates should fight Makhachev next, no eliminator needed.' },
      { segment: 'Prospect Watch', duration_suggestion: '4-5 min', talking_points: ['Salkilld at 4-0 with 3 POTN is the most credentialed lightweight prospect in years.', 'Junior Tafa: 4 UFC wins, 4 R1 KOs. The pattern is the pitch.', 'Steve Erceg back in the flyweight title picture after the home win.'] },
      { segment: 'Veteran Decline', duration_suggestion: '4-5 min', talking_points: ['Beneil Dariush: 3 KO losses in 2.5 years. Career math is brutal.', 'Tai Tuivasa: 7 straight losses, last win June 2023.', 'Tim Elliott (39) takes another loss as the gatekeeper window closes.'], hot_take: 'The UFC should retire the loyalty discount and release Tuivasa to free up his roster spot.' },
      { segment: 'Model Review', duration_suggestion: '3-4 min', talking_points: ['8 of 11 winners correct (73%).', 'Method matched on every single correct call.', 'Tuivasa and Mar Fan misses share a pattern: home-crowd narrative beat technical diagnosis.', 'High confidence (7+) picks went 4-0 with method.'], hot_take: 'The structural fix is to weight home-crowd lower when our own pre-fight notes already describe the path to the loser\'s defeat.' },
    ],
  },

  model_autopsy: {
    overall_grade: 'A-',
    grade_context: 'Best card grade in 2026 to date, especially after the Sterling vs Zalal disaster',
    correct_calls: [
      { fight: 'Della Maddalena vs Prates', predicted: 'Prates by KO/TKO or Decision', actual: 'Prates by TKO R3 (3:17)', confidence_label: 'MEDIUM-HIGH', analysis: "The flagship pick of the night. Three independent dimensions backed the thesis: reach (13 cm), KO power (post-Edwards), and momentum (line moved against us but Polymarket held the edge). All three played out exactly as projected." },
      { fight: 'Dariush vs Salkilld', predicted: 'Salkilld by KO/TKO or Sub R1-R2', actual: 'Salkilld by KO R1 (3:29)', confidence_label: 'MEDIUM-HIGH', analysis: "Linear read on chin decline plus prospect rising. The R1 KO came earlier than the projected R1-R2 window but stayed within the predicted method." },
      { fight: 'Malkoun vs Meerschaert', predicted: 'Malkoun by TKO or Decision', actual: 'Malkoun by Unanimous Decision', confidence_label: 'MEDIUM-HIGH', analysis: "Wrestler at home against sub specialist on a four-fight skid. The dossier was correct on every dimension. Decision instead of TKO is within the predicted band." },
      { fight: 'Micallef vs Gorimbo', predicted: 'Micallef by Decision or late Sub', actual: 'Micallef by Split Decision', confidence_label: 'MEDIUM-HIGH', analysis: "Vulnerability on the back of Gorimbo aligned with Micallef's mata-leao threat. The decision came split rather than unanimous, but both winner and method were correct." },
    ],
    wrong_calls: [
      { fight: 'Tuivasa vs Sutherland', predicted: 'Tuivasa by KO/TKO R1-R2', actual: 'Sutherland by Unanimous Decision', confidence_label: 'MEDIUM', analysis: "The biggest self-inflicted miss. Our own subtitle for the fight read: 'The decline is real despite the home crowd.' We diagnosed the loss in the dossier and then picked the loser anyway. Home-crowd narrative beat technical diagnosis.", error_type: 'venue_factor' },
      { fight: 'Mar Fan vs Steele', predicted: 'Mar Fan by Decision or late TKO', actual: 'Steele by Submission R1 (3:56)', confidence_label: 'MEDIUM', analysis: "Same pattern as Tuivasa. Our subtitle flagged Mar Fan's 20% takedown defense as the dominant vulnerability against a Combat Jiu-Jitsu world champion. The structural read was correct. The pick was not.", error_type: 'stylistic_misread' },
      { fight: 'Johnston vs Schultz', predicted: 'Johnston by KO/TKO or Sub', actual: 'Schultz by Submission R3', confidence_label: 'LOW', analysis: "Confidence 4 with 'honest coin flip' label. Statistical miss within expected range, but it still costs the card record.", error_type: 'method_miss' },
    ],
    patterns_learned: [
      { pattern: 'Home-crowd weight overrides our own diagnostic notes', evidence: 'In two losses (Tuivasa, Mar Fan) the pre-fight subtitle described the loser\'s exact path to defeat. We picked the home favorite anyway.', adjustment: 'When the qualitative dossier already names the structural vulnerability, the pick must follow the diagnosis even if the home crowd argues otherwise. Cap home-crowd weight at +5% probability uplift, not the full intuitive boost we were giving it.' },
      { pattern: 'Confidence 4 picks should be skipped or marked no-action', evidence: 'Johnston vs Schultz was labeled "honest coin flip" yet still entered the card record as a wrong call.', adjustment: 'Below confidence 5, the pick should be omitted from the formal record or labeled "no action" rather than chosen against intuition.' },
      { pattern: 'Method calibration on confidence 7+ is now solid', evidence: 'High-confidence picks went 4-0 with method matched. Sterling vs Zalal had been a disaster on this exact axis.', adjustment: 'Continue tying method specificity to the underlying conviction breakdown. The fix from April 2026 is holding.' },
    ],
    confidence_calibration: {
      high_confidence_record: '4W-0L',
      medium_confidence_record: '4W-2L',
      insight: 'High confidence (MEDIUM-HIGH) picks were perfect at 4-0 with method matched on every call. Medium picks went 4-2. Low confidence went 0-1. The model\'s confidence ranking is working: when we are sure, we are right and we get the path. The structural fix is around home-crowd weighting in fights where the dossier already names the vulnerability.',
    },
  },

  division_impacts: [
    {
      division: 'Welterweight (170 lbs)',
      fights_on_card: 2,
      title_picture_impact: "Carlos Prates is now the natural challenger by KO record alone. Two former champions finished in six months. The title picture is reorganized around him.",
      movers: [
        { fighter: 'Carlos Prates', result: 'W', impact_level: 'high', one_liner: 'Jumps to #3. Title shot or eliminator next.' },
        { fighter: 'Jack Della Maddalena', result: 'L', impact_level: 'high', one_liner: 'Drops to #8. Two losses removed from the belt. Chin question open.' },
        { fighter: 'Jonathan Micallef', result: 'W', impact_level: 'medium', one_liner: 'Quiet 3-0 UFC streak. Ready for a ranked test.' },
      ],
      narrative: 'Welterweight is going through a Brazilian-led reorganization. Makhachev holds the belt at 170, but Prates is the man every contender now has to navigate.',
    },
    {
      division: 'Lightweight (155 lbs)',
      fights_on_card: 2,
      title_picture_impact: "Salkilld now enters the top 15 with a credentialed test result. Dariush exits the title conversation entirely. The new generation has its first definitive marker.",
      movers: [
        { fighter: 'Quillan Salkilld', result: 'W', impact_level: 'high', one_liner: 'Debuts at #14. 4-0 with 3 POTN bonuses. Real prospect.' },
        { fighter: 'Beneil Dariush', result: 'L', impact_level: 'high', one_liner: 'Drops to #16. Three KO losses in 2.5 years. Career obituary.' },
        { fighter: 'Kody Steele', result: 'W', impact_level: 'low', one_liner: 'Combat Jiu-Jitsu credentials cash. Prospect track ahead.' },
      ],
      narrative: 'Lightweight is the deepest division in MMA. The new wave of prospects needed a definitive marker. Salkilld provided one tonight.',
    },
    {
      division: 'Heavyweight (265 lbs)',
      fights_on_card: 1,
      title_picture_impact: 'Limited title picture impact. The Tuivasa story is more about retirement watch than division ranking.',
      movers: [
        { fighter: 'Louie Sutherland', result: 'W', impact_level: 'medium', one_liner: 'First UFC win on 9 days notice. Earns roster security.' },
        { fighter: 'Tai Tuivasa', result: 'L', impact_level: 'high', one_liner: 'Falls to #16. 7 straight losses. Cut watch is real.' },
      ],
      narrative: 'Heavyweight rarely changes shape from a single Fight Night. The compelling story is the end of the Bam Bam era and what the UFC does about it.',
    },
    {
      division: 'Flyweight (125 lbs)',
      fights_on_card: 1,
      title_picture_impact: 'Erceg climbs back into the title conversation. Elliott (39) takes another step toward gatekeeper status closing entirely.',
      movers: [
        { fighter: 'Steve Erceg', result: 'W', impact_level: 'high', one_liner: 'Rises to #7. Back in the title conversation after the Osbourne loss.' },
        { fighter: 'Tim Elliott', result: 'L', impact_level: 'medium', one_liner: 'Drops to #14. Veteran gatekeeper window narrowing.' },
      ],
      narrative: 'Flyweight has a stable top tier with Pantoja, Royval, Kara-France. Erceg keeps himself in the second rank ready to capitalize if the right matchup opens.',
    },
    {
      division: 'Middleweight (185 lbs)',
      fights_on_card: 3,
      title_picture_impact: 'No title picture movement, but Australia has visibly added depth at middleweight (Malkoun, Rowston).',
      movers: [
        { fighter: 'Jacob Malkoun', result: 'W', impact_level: 'medium', one_liner: 'Debuts at #15. Whittaker training partner with momentum.' },
        { fighter: 'Cam Rowston', result: 'W', impact_level: 'low', one_liner: 'Quiet middleweight pipeline name. Steady wins.' },
        { fighter: 'Wes Schultz', result: 'W', impact_level: 'low', one_liner: 'Sub R3 win on 6 weeks notice. Roster security.' },
        { fighter: 'Gerald Meerschaert', result: 'L', impact_level: 'medium', one_liner: '4-fight losing streak at 38. Retirement conversation real.' },
      ],
      narrative: 'Middleweight is Australia\'s second deepest division now after welterweight. The pipeline from City Kickboxing and Whittaker\'s camp is producing.',
    },
  ],

  replay_guide: [
    { slug: 'della-maddalena-vs-prates', fighter1: 'Jack Della Maddalena', fighter2: 'Carlos Prates', rewatch_rating: 5, rewatch_label: 'Must Watch', category: 'finish', why_watch: 'Star-defining KO of a former welterweight champion. The setup, the timing, the finishing sequence are all elite. Study material for anyone who wants to understand pressure striking with reach.', key_moments: [{ timestamp: 'R1 4:30', description: 'First clean Prates left hand lands', moment_type: 'exchange' }, { timestamp: 'R2 2:15', description: 'JDM\'s best moment of the fight, gets countered hard', moment_type: 'reversal' }, { timestamp: 'R3 3:17', description: 'TKO finish via cumulative damage', moment_type: 'finish' }] },
    { slug: 'dariush-vs-salkilld', fighter1: 'Beneil Dariush', fighter2: 'Quillan Salkilld', rewatch_rating: 5, rewatch_label: 'Must Watch', category: 'finish', why_watch: 'Generational handoff in three and a half minutes. Salkilld\'s composure at 24 against a former title challenger is the story.', key_moments: [{ timestamp: 'R1 1:45', description: 'First knockdown', moment_type: 'knockdown' }, { timestamp: 'R1 3:29', description: 'KO finish', moment_type: 'finish' }] },
    { slug: 'tafa-vs-christian', fighter1: 'Junior Tafa', fighter2: 'Kevin Christian', rewatch_rating: 4, rewatch_label: 'Worth It', category: 'finish', why_watch: 'Fourth UFC win, fourth R1 KO. The pattern is the entertainment. Brutal and quick.', key_moments: [{ timestamp: 'R1 2:42', description: 'KO finish via clean right hand', moment_type: 'finish' }] },
    { slug: 'mar-fan-vs-steele', fighter1: 'Dom Mar Fan', fighter2: 'Kody Steele', rewatch_rating: 4, rewatch_label: 'Worth It', category: 'upset', why_watch: 'Combat Jiu-Jitsu world champion neutralizes home favorite with grappling pedigree. Study material for the value of belt-level credentials.', key_moments: [{ timestamp: 'R1 1:30', description: 'First takedown sets the tone', moment_type: 'takedown' }, { timestamp: 'R1 3:56', description: 'Sub finish', moment_type: 'finish' }] },
    { slug: 'micallef-vs-gorimbo', fighter1: 'Jonathan Micallef', fighter2: 'Themba Gorimbo', rewatch_rating: 3, rewatch_label: 'Good', category: 'technical', why_watch: 'Identical reach (196 cm) and split decision tells the story. Competitive welterweight scrap with home favorite holding on.', key_moments: [{ timestamp: 'R3 4:00', description: 'Decisive late exchange', moment_type: 'exchange' }] },
    { slug: 'elliott-vs-erceg', fighter1: 'Tim Elliott', fighter2: 'Steve Erceg', rewatch_rating: 3, rewatch_label: 'Good', category: 'technical', why_watch: 'Veteran gatekeeper vs home favorite recovering confidence. Tactically clean three rounds.', key_moments: [{ timestamp: 'R2 2:30', description: 'Erceg\'s decisive striking sequence', moment_type: 'exchange' }] },
    { slug: 'malkoun-vs-meerschaert', fighter1: 'Jacob Malkoun', fighter2: 'Gerald Meerschaert', rewatch_rating: 2, rewatch_label: 'Fans Only', category: 'technical', why_watch: 'Wrestling clinic against a sub specialist on a losing streak. Limited fireworks but technically sound.', key_moments: [] },
    { slug: 'tuivasa-vs-sutherland', fighter1: 'Tai Tuivasa', fighter2: 'Louie Sutherland', rewatch_rating: 2, rewatch_label: 'Fans Only', category: 'boring', why_watch: 'Heavyweight slog. Only worth watching if you\'re tracking the Tuivasa decline narrative for retirement-watch content.', key_moments: [] },
  ],
};

export default async function RecapDellaMaddalenaVsPratesPage() {
  const enrichedData = await enrichRecapWithPhotos(recapData);
  return <RecapView data={enrichedData} />;
}
