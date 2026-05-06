import type { PersonalityKitData } from '@/types/personality-kit';

export const halfTheBattleKit: PersonalityKitData = {
  meta: {
    event_name: 'UFC Fight Night: Della Maddalena vs Prates',
    event_date: 'May 2, 2026',
    event_location: 'RAC Arena, Perth, Australia',
    poster_url: '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fbackground_image_xl%2Fs3%2F2026-04%2F050226-ufc-fight-night-della-maddalena-vs-prates-EVENT-ART.jpg%3Fh%3Dd1cb525d%26itok%3DymoA0TLI',
    card_slug: 'della-maddalena-vs-prates',
    show_name: 'Half The Battle',
    show_tagline: 'The longest standing UFC predictions show in the game. Sharp, straight forward, no BS analysis & picks with a humorous edge.',
    host_name: 'Daniel Levi',
    host_handle: '@halfthebattlepod',
    episode_number: '#663',
    episode_format: 'UFC Perth FULL CARD Predictions',
  },

  show_identity: {
    presented_by: 'Best Fight Picks',
    on_air_since: 'July 2015',
    years_on_air: 11,
    total_episodes: 663,
    cadence: 'Two episodes per UFC card week — solo FULL CARD Predictions + Picks Roundtable with rotating guests',
    average_length: '~70 minutes',
    format_types: [
      'FULL CARD Predictions (solo · YouTube long-form)',
      'Picks Roundtable (rotating handicapper guests)',
      'Year-end Awards & Boldest Predictions',
      'YouTube Shorts (highlights · scouting takes · throwbacks)',
      'Occasional fighter interviews',
    ],
    audience: 'Hardcore MMA + sports-bettor crossover. Watches every prelim. Bets every card. 11.1K YouTube subs, lives in the Best Fight Picks / DFS Twitter ecosystem.',
    graphics_credit: '@Meticulous_X',
    show_x_handle: '@HalfTheBattlePod',
    host_x_handle: '@BestFightPicks',
    available_on: ['YouTube', 'Apple Podcasts', 'Spotify', 'Listen Notes Top 1.5%'],
    youtube_subscribers: 11100,
    youtube_videos: 993,
    youtube_lifetime_views: 2400000,
    youtube_avg_views: 7000,
    instagram_followers: 1281,
  },

  roundtable_guests: [
    { name: 'Andrew Gombas', handle: '@betsandpicksmma', role: 'Pro MMA bettor · DubClub', crenas_match: true },
    { name: 'Liam Heslin', handle: '@LiamPicksFights', role: 'Combat sports analyst · RotoGrinders', crenas_match: true },
    { name: 'HayJive', handle: '@hayjive', role: 'UFC 325 Roundtable guest · 3 Locks brand', crenas_match: true },
    { name: 'Santino DeFranco', handle: '@santinodefranco', role: 'Coach · MMA Breakdowns', crenas_match: true },
    { name: 'Brett Appley', handle: '@dailyfanmma', role: 'DailyFanMMA founder', crenas_match: true },
    { name: 'Kyle Marley', handle: '@bigmarley3', role: 'Original ToutMaster · CBS SportsLine', crenas_match: true },
    { name: 'Wizz MMA', handle: '@wizzmma', role: 'UFC predictions creator' },
    { name: 'Matty Bets', handle: '@mattybetss', role: 'MMA bettor' },
    { name: 'Brady DFS', handle: '@bradydfs', role: 'DFS specialist' },
    { name: 'Rainman', handle: '@rainmanmma', role: 'Predictions creator' },
    { name: 'John Stargaryan', handle: '@johnstargaryan', role: 'UFC predictions creator' },
    { name: 'Marlo Stanfield', handle: '@marlostanfield_mma', role: 'MMA Twitter regular' },
  ],

  channel_snapshot: {
    intro:
      'A fresh audit of where the show wins on each platform and where the highest-leverage upside is. Built from a real read of the channel, engagement curve, and content cadence — not a survey.',
    metrics: [
      {
        platform: 'YouTube · Long-Form',
        status: 'strong',
        primary_metric: '11.1K subscribers',
        secondary_metric: '993 videos · 2.4M lifetime views · ~7K avg per upload',
        diagnosis:
          'Anchor of the brand. FULL CARD Predictions cadence is locked and the floor (~5K) is reliable. Format-saturated — every long-form is the same shape. Single-fight breakdowns and post-card reactions are missing and would diversify without changing the brand.',
      },
      {
        platform: 'YouTube · Shorts',
        status: 'opportunity',
        primary_metric: '49+ Shorts in rotation',
        secondary_metric: 'Avg 1.5K views · top performer 7.4K (Kurtis Campbell scouting take)',
        diagnosis:
          'Format mix is solid (highlights, scouting takes, throwbacks) but not scaling. Hooks lead with setup, not stance. Already tagged with #UFCEdit — these are tailor-made for cross-posting to TikTok with a sharper opener.',
      },
      {
        platform: 'Instagram',
        status: 'stagnant',
        primary_metric: '~1.3K followers · 12% of YT audience',
        secondary_metric: 'Engagement collapsing: 266 likes (Sept 2025) → 11 likes (Jan 2026)',
        diagnosis:
          'IG is the highest-leverage fix. Posts are 100% recycled YT Shorts with identical captions — no reason for someone to follow you on IG separately from YouTube. Zero carousel intel, zero fight-week ritual, zero IG-native Reels. The kit ships a content system for this.',
      },
      {
        platform: 'TikTok',
        status: 'whitespace',
        primary_metric: 'Not active',
        secondary_metric: 'Namespace open · already using #UFCEdit on Shorts',
        diagnosis:
          'Pure whitespace. The Shorts library is already TikTok-shaped. A 5-minute reposting workflow is enough to plant a flag with zero new production. Claim @halfthebattlepod and @bestfightpicks before someone else does.',
      },
    ],
  },

  ig_content_system: {
    intro:
      'The biggest gap in the show is IG, and the fix is not "post more" — it is a system that gives followers a reason to be there separately from YouTube. The kit ships a fight-week calendar, a Friday signature carousel, and a TikTok cross-post playbook. Below is what the system looks like for UFC Perth.',
    diagnosis:
      'Right now, IG is reposted YouTube Shorts with identical captions. That feed gives followers no reason to follow you on IG instead of YouTube. The fix: make IG do what the channel cannot — visual carousel intel, day-by-day fight-week ritual, and Reels with Reel-native hooks (not YouTube Short cuts).',
    fight_week_calendar: [
      {
        day: 'Monday',
        slot: 'Card Drop Tease',
        hook: 'Three fights I am losing sleep over this week.',
        visual_concept:
          'Black background, three fighter portraits cropped tight in a vertical strip, crimson HTB lockup top-right. Stark, no clutter.',
        caption:
          'Three fights I cannot shut up about this week. Full breakdown drops Tuesday on @halfthebattlepod. Which one is your lock?',
      },
      {
        day: 'Tuesday',
        slot: 'New Episode Drop',
        hook: 'Episode #663 is up. UFC Perth full breakdown.',
        visual_concept:
          'Card poster as backdrop with HTB lockup. Episode # in massive display type. Spotify / Apple / YouTube platform icons across the bottom.',
        caption:
          'New episode is up. UFC Perth full breakdown, every fight, every value bet. Link in bio or search Half The Battle wherever you listen.',
      },
      {
        day: 'Wednesday',
        slot: 'Bold Picks Carousel',
        hook: 'My 3 boldest picks for Saturday.',
        visual_concept:
          '4-slide carousel. Slide 1 = bold cover with the headline take. Slides 2-4 = one bold pick each, fighter face cropped, pick + one-line reasoning.',
        caption:
          'Three bold picks. One bombs and I look like an idiot, two hit and I am a legend. Tag the friend who needs these.',
      },
      {
        day: 'Thursday',
        slot: 'Underdog Watch Reel',
        hook: 'This +275 dog is my favorite play of the week.',
        visual_concept:
          '15-second Reel. Tight face shot of the underdog, stats fly in (record vs ranked, recent KO clip), pick reveals at the end.',
        caption:
          'My favorite dog of the week. Reasoning in the caption. Lock it in or fade me, no in-between.',
      },
      {
        day: 'Friday',
        slot: 'Final Card Pick Board',
        hook: 'Final picks. Lock them in.',
        visual_concept:
          '12-slide carousel — one slide per fight. Locked layout: matchup top, pick fighter image cropped 3/4, pick name + method bottom-left, confidence dots, one-line reasoning.',
        caption:
          'Final card. Every fight, every pick. Save this post and screenshot at the end of the night.',
      },
      {
        day: 'Saturday',
        slot: 'Live Reaction Stories',
        hook: 'Live, fight by fight.',
        visual_concept:
          'Stories sequence — one story per main-card fight. Background poll asking "Did I get it right?" with W/L emoji answers.',
        caption: '(Stories only — no feed post on fight night.)',
      },
    ],
    carousel_board: {
      intro:
        'The Friday "Final Card Pick Board" is the IG signature post. 12 slides, locked layout, save-worthy. This is what an IG follower gets that a YouTube subscriber does not.',
      cover_concept:
        'Slide 1: card name in display type, "FINAL PICKS" centered, host signature bottom. Crimson HTB lockup top-right. Date stamp. No clutter.',
      total_slides: 12,
      per_fight_template:
        'Each per-fight slide: matchup at the top in small caps, pick fighter image cropped to 3/4, pick name + predicted method bottom-left, 1-3 confidence dots, one-line reasoning bottom.',
      preview_slides: [
        { slot: '01 · Cover', matchup: 'UFC Perth · May 2', pick: 'Final Picks', reasoning: 'Every fight on the card, locked' },
        { slot: '02 · Main', matchup: 'JDM vs Prates', pick: 'Prates by KO/Dec', reasoning: 'Five dimensions converge on Prates. JDM\'s 39% path is real but narrow.' },
        { slot: '03 · LW', matchup: 'Dariush vs Salkilld', pick: 'Salkilld by KO R2', reasoning: 'Dariush is finished twice in three. Aussie soil seals it.' },
        { slot: '04 · FLW', matchup: 'Elliott vs Erceg', pick: 'Erceg by UD', reasoning: 'Home crowd lift versus wily veteran chaos. Erceg edges it.' },
        { slot: '05 · HW', matchup: 'Pericic vs Gaziev', pick: 'Pericic by KO R1', reasoning: 'Hottest start at HW since Aspinall. Fade with caution.' },
      ],
    },
    tiktok_strategy: {
      intro:
        'TikTok presence is pure upside. The Shorts library is already TikTok-shaped (vertical, hashtag-tagged). Start by reposting your top-5 Shorts in week 1. Once you see what lands on the algorithm, drop one TikTok-native piece per fight week.',
      hooks: [
        'Do not @ me but [bold take in 5 words]. → Leads with stance, not setup.',
        'This is the bet that wins your weekend. → Urgency + outcome.',
        '3 things wrong with [popular take]. → List format always retains.',
        'You are wrong about [fighter]. Here is why. → Confrontational hook, low risk.',
        'What [analyst / coach] missed about [fight]. → Authority gap.',
      ],
      posting_advice:
        'Claim @halfthebattlepod or @bestfightpicks before someone else does. Repost top-5 Shorts week 1, observe which formats land on the For You Page, then commit to one TikTok-native piece per fight week (not the same as the Short — needs a TikTok-native opener).',
    },
  },

  pre_show_dossier: {
    intro:
      'Card prep brief for Della Maddalena vs Prates. Per fight: who they are right now, what to know, and the question worth pulling on the air. Designed for a 20-minute glance before recording, not a script.',
    fights: [
      {
        is_main: true,
        fight: 'Jack Della Maddalena vs Carlos Prates',
        weight_class: 'Welterweight (170 lbs)',
        records: { f1: '18-3-0', f2: '23-7-0' },
        recent_form: {
          f1: 'JDM: L (Makhachev UD), W (Belal MD), W (Brady UD)',
          f2: 'Prates: W (KO Edwards R2), W (KO Garry R5), W (KO Neal R1)',
        },
        stylistic_note:
          "JDM is the cleaner pure boxer — pocket fighter who lands the cleaner counter. Prates is taller, longer (4 inches of reach), with one-shot KO power on his straight left. The pocket is JDM's office. Distance is Prates' kingdom. Whoever dictates that wins the fight.",
        storyline_hook:
          'JDM coming home to Perth after getting handled by Makhachev. Career win/loss inflection point. Prates is the hottest welterweight finisher in the division riding back-to-back-to-back KOs. Loser falls out of the title picture; winner is one fight away.',
        betting_angle:
          'Line opened Prates -165, moved to JDM -120 / Prates -106 on heavy Australian public action. Polymarket still sits Prates 61%. Total rounds 3.5 (Over -120). Best bet of the card: Prates by ITD at +180 to +220 — he is 5/6 on UFC finishes.',
        question_for_pod:
          "Can JDM run Edwards' round 1 game (clinch + takedown) for the full 25 minutes without biting on the stand-up — or does Prates' straight left land first?",
      },
      {
        is_main: false,
        fight: 'Beneil Dariush vs Quillan Salkilld',
        weight_class: 'Lightweight (155 lbs)',
        records: { f1: '23-7-1', f2: '11-1-0' },
        recent_form: {
          f1: 'Dariush: L (Tsarukyan TKO R1), L (Oliveira KO R1), W (Tibau UD)',
          f2: 'Salkilld: W (UD Bahamondes), W (KO Aliskerov), W (Sub Wood)',
        },
        stylistic_note:
          'Dariush has been violently knocked out in two of his last three. He is a top-shelf grappler whose striking defense has fallen off a cliff. Salkilld is a hungry Aussie prospect at home with finishing power.',
        storyline_hook:
          "Dariush has not won in over two years against ranked competition. Career on the brink. If he loses to a debuting prospect on Aussie soil, it's likely retirement talk by Monday.",
        betting_angle:
          'Salkilld favored (-180). Dariush ITD prop offers +150 if you trust the grappling escape route. Public heavy on Salkilld KO.',
        question_for_pod: 'When does a fighter know it\'s time to walk away — and is Dariush already past that line?',
      },
      {
        is_main: false,
        fight: 'Tim Elliott vs Steve Erceg',
        weight_class: 'Flyweight (125 lbs)',
        records: { f1: '22-13-1', f2: '13-4-0' },
        recent_form: {
          f1: 'Elliott: W (UD Royval), L (Dec Asakura), W (Sub Schnell)',
          f2: 'Erceg: L (Dec Pantoja x2), L (KO Albazi), W (UD Astumian)',
        },
        stylistic_note:
          'Elliott is the most chaotic flyweight in the division — wrestling-heavy with bizarre angle attacks. Erceg is the cleaner technician who has lost three of four against elite competition.',
        storyline_hook:
          'Erceg fighting at home as the Aussie favorite, but he has been on the title shot losses streak. Elliott as veteran spoiler.',
        betting_angle: 'Erceg -150 / Elliott +130. Decision -110 the chalkiest line.',
        question_for_pod: 'Is Erceg already broken from the Pantoja losses, or does Perth crowd hand him the lift he needs?',
      },
      {
        is_main: false,
        fight: 'Shamil Gaziev vs Brando Pericic',
        weight_class: 'Heavyweight (265 lbs)',
        records: { f1: '14-2-0', f2: '6-1-0' },
        recent_form: {
          f1: 'Gaziev: W (UD Allen), L (TKO Spivak)',
          f2: 'Pericic: W (KO Lewis), W (KO Tafa)',
        },
        stylistic_note:
          'Gaziev is a slow-paced grappler. Pericic is a Croatian KO artist with two consecutive heavyweight knockouts. Heavyweight chaos territory.',
        storyline_hook: 'Pericic riding the hottest heavyweight start since Aspinall. Gaziev needs to spoil it on the ground.',
        betting_angle: 'Pericic -200 / Gaziev +170. Pericic by KO offers +120.',
        question_for_pod: 'Is Pericic the next Aspinall, or are we two hot starts away from a Greg Hardy-style ceiling check?',
      },
      {
        is_main: false,
        fight: 'Tai Tuivasa vs Louie Sutherland',
        weight_class: 'Heavyweight (265 lbs)',
        records: { f1: '15-9-0', f2: '10-5-0' },
        recent_form: {
          f1: 'Tuivasa: L (KO x4 in last 5)',
          f2: 'Sutherland: W (KO regional), debut',
        },
        stylistic_note:
          'Bam Bam is on a four-fight KO loss streak. Sutherland is a hungry regional debutant with KO power. Could be the last Tuivasa fight in the UFC if he loses.',
        storyline_hook: 'Career farewell on home soil possibility. Crowd will be electric either way.',
        betting_angle: 'Pick em. Both KO props priced equally around +180.',
        question_for_pod: 'Should the UFC be putting a chinny vet on home soil for one more shoey, or is this irresponsible matchmaking?',
      },
    ],
  },

  main_event_hype: {
    intro:
      'Two trajectories on a collision course. The kind of segment the show can run as a 6-minute centerpiece between the predictions and the prelim breakdown. Designed to be read on-air, repurposed as an editorial column, or cut into a 90-second YouTube hype intro.',
    headline: 'The Welterweight Crossroads',
    tagline:
      'Two fighters, two journeys, one cage. The 170-pound title picture rebuilds itself in Perth on Saturday night.',

    fighter1_arc: {
      fighter_name: 'Jack Della Maddalena',
      fighter_image_url:
        'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/DELLA_MADDALENA_JACK_L_09-16.png?itok=s0owpxMp',
      origin:
        'Five years ago, Jack Della Maddalena was an unranked Perth welterweight grinding through Eternal MMA in front of two thousand people on a Friday night. He had a journeyman record, no UFC interest, and a striker game polished in the same Perth gym where he had been living since he was seventeen. He was a kid waiting for the call.',
      career_arc:
        'Earned the contract on Dana White\'s Contender Series in September 2021 with a one-round KO. Strung together a 7-fight UFC win streak, finishing strikers, decisioning grapplers, never losing the pocket. Edged Sean Brady on a unanimous decision in early 2025 to become the welterweight title eliminator. Won the strap from Belal Muhammad on a majority decision a few months later. Defended once. Then ran into Islam Makhachev moving up from lightweight at the back-end of 2025 and got handled in a five-round shutout for the championship.',
      signature_moments: [
        {
          date: 'Sept 2021',
          event: 'Dana White\'s Contender Series',
          what_happened:
            'First-round KO of Ange Loosa. Australian striker walks off with a UFC contract on the spot.',
          why_it_mattered:
            'The night the regional Perth grinder became a UFC welterweight prospect. Everything that came after starts here.',
        },
        {
          date: 'Feb 2023',
          event: 'UFC 284 — Perth, Australia',
          what_happened:
            'Hometown TKO of Randy Brown in the second round. RAC Arena, Perth, in front of his people, on his first big stage.',
          why_it_mattered:
            'The Perth crowd had its guy. The "JDM in Australia" narrative was born on the same canvas he\'s walking back to on Saturday.',
        },
        {
          date: 'Jan 2025',
          event: 'Welterweight Title Fight',
          what_happened:
            'Edged Belal Muhammad on a majority decision in one of the most patient title-winning performances of the year. Walked Belal\'s pressure for 25 minutes and out-pointed him in the pocket.',
          why_it_mattered:
            'Welterweight champion of the world. Australia had its first welterweight king. The kid from Eternal had pulled off the entire arc.',
        },
        {
          date: 'Aug 2025',
          event: 'vs Islam Makhachev',
          what_happened:
            'Held to 50-45 by Makhachev moving up from lightweight. Five rounds, zero answers, never solved the wrestling. The shortest reign in welterweight title history concluded on a cleanly lopsided card.',
          why_it_mattered:
            'Lost the strap. Lost the narrative. Three months later, the welterweight conversation has already moved on. Saturday is whether he gets back into it.',
        },
      ],
      current_state:
        'Three months removed from the worst night of his career. Still ranked #1 at welterweight. Coming home to the city that watched him build the entire run, in the building where his hometown narrative started against Brown. Has not won a fight since January. The crowd lift cuts both ways. It can resurrect him, or it can expose him in front of his own people.',
      one_line_pitch:
        'Hometown ex-champion trying to write a comeback chapter on the same Perth canvas where the run started.',
      accent: 'red',
    },

    fighter2_arc: {
      fighter_name: 'Carlos Prates',
      fighter_image_url:
        'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/PRATES_CARLOS_L_08-17.png?itok=84ZbFhHS',
      origin:
        'At twenty-two, Carlos Prates was working construction in São Paulo and training kickboxing on weekends. Most welterweights at this level have been in the gym since they could walk. Prates only laced up his first MMA glove at twenty-four — practically unheard of in elite UFC division territory. The Fighting Nerds gym took him in as a project. Five years later he is one of the most dangerous strikers on the roster.',
      career_arc:
        'Built a 19-6 regional record at Fighting Nerds in São Paulo, the same gym that turned out Muhammad Mokaev and Caio Borralho. Signed with the UFC in 2024. Has not lost since. Five wins, all by knockout, all with the same straight left. Beat a former champion at Madison Square Garden. The title-shot conversation became official the second Edwards hit the canvas. Now he gets the former champion in the former champion\'s hometown.',
      signature_moments: [
        {
          date: 'Aug 2024',
          event: 'UFC Debut',
          what_happened:
            'Walked Li Jingliang down for a round and a half. Dropped a left straight that put Li flat. Statement performance for the hardcore fans who had been tracking Fighting Nerds.',
          why_it_mattered:
            'The fight that put Fighting Nerds on the casual-fan map. The first time Prates\' name traveled past the Brazilian MMA Twitter circle.',
        },
        {
          date: 'Mar 2025',
          event: 'vs Geoff Neal',
          what_happened:
            'Neal pressed forward thirty-eight seconds in. Prates timed the counter cross. Lights out before the corner could blink.',
          why_it_mattered:
            'Quickest KO of his UFC run. Showed the counter-puncher version exists alongside the patient feinter. Vegas repriced him as a serious top-15 threat.',
        },
        {
          date: 'Aug 2025',
          event: 'vs Ian Garry',
          what_happened:
            'Down 3-1 on cards through three rounds of Garry\'s footwork-and-jab clinic. Looked dead in the water. Round 5, single straight left, lights out. Came back from a championship-rounds deficit on heart and shot selection.',
          why_it_mattered:
            'Showed something rare. He does not panic when he is losing. The cardio holds. The shot selection gets sharper as he tires. This was the fight that priced him long-term as a top-five welterweight.',
        },
        {
          date: 'Nov 2025',
          event: 'vs Leon Edwards · MSG',
          what_happened:
            'Boxed Edwards backwards for seven minutes. Set up the straight left with a feinting jab. Sat Edwards down at 1:28 of round 2. Pure striker-on-striker chess at Madison Square Garden.',
          why_it_mattered:
            'Beat a former champion in his prime, on the biggest stage in the sport. Title talk officially started the moment Edwards hit the canvas. The next title contender at 170 was named that night.',
        },
      ],
      current_state:
        'Three straight knockouts of ranked welterweights. The straight left is the cleanest single shot in the division and the betting public knows it. Asked publicly for the title shot the night he beat Edwards. Going on the road into JDM\'s backyard knowing the title picture is one win away.',
      one_line_pitch:
        'Late-bloomer Brazilian with the cleanest single shot in the welterweight division and a target on his back from every striker in the top 10.',
      accent: 'blue',
    },

    collision_point:
      'They could not have arrived at this fight from more different paths. Della Maddalena lived in MMA his whole adult life. Seventeen years old in the gym, professional record older than some opponents\' careers, technical ceiling polished over a decade in Perth. Prates picked up MMA at twenty-four after construction shifts and weekend kickboxing. Della Maddalena is a pocket-boxer who built a championship run on patience and clean angles. Prates is a counter-southpaw who built a top-five climb on a single shot landing in the third minute of every fight. Eleven UFC welterweights vs five. Decade of polish vs four years of pure intent. They are walking into Perth on a collision course that redraws the welterweight ladder.',

    hype_paragraph:
      'Eleven months ago, Jack Della Maddalena was the welterweight champion of the world. Eleven months ago, Carlos Prates was a guy people had heard about because he beat Geoff Neal in thirty-eight seconds. The same arenas that called JDM the cleanest boxer in the division now ask whether his chin held up against Makhachev. The same gyms that wrote Prates off as a one-shot outlier now wonder whether he is the most dangerous striker in the division. Two arcs, one cage. Saturday night, in Perth, in front of JDM\'s people, on the back of a guy who finished a former champion at MSG seventeen weeks ago. This is the welterweight crossroads. Loser\'s path closes. Winner\'s opens.',

    pull_quote: 'Two arcs, one cage. Loser\'s path closes. Winner\'s opens.',
  },

  show_notes: {
    episode_title:
      '#663 - UFC Perth FULL CARD Predictions | Half The Battle',
    description: `Episode #663 of Half The Battle. Daniel Levi breaks down every fight on UFC Fight Night: Della Maddalena vs Prates from RAC Arena Perth. JDM coming home after the Makhachev loss to face the hottest finisher at 170 in Carlos Prates. Plus full prelim picks, value bets, and a read on what a Prates win means for the welterweight title picture.

Featured: Beneil Dariush at the cliff edge, Steve Erceg trying to recover at home, and the heavyweight chaos with Pericic and Tuivasa on Aussie soil.

11 years and 663 episodes deep. The longest standing UFC predictions show in the game. Picks Roundtable drops the night before the card.`,
    chapter_markers: [
      { time: '0:00', topic: 'Cold open / show intro' },
      { time: '2:35', topic: 'Della Maddalena vs Prates breakdown' },
      { time: '15:20', topic: 'JDM after Makhachev — is he the same fighter?' },
      { time: '22:40', topic: 'Prates power vs JDM chin debate' },
      { time: '28:15', topic: 'Dariush vs Salkilld — career on the brink' },
      { time: '36:00', topic: 'Elliott vs Erceg flyweight chaos' },
      { time: '41:30', topic: 'Heavyweight prelims (Pericic / Tuivasa)' },
      { time: '48:50', topic: 'Best bets / value picks of the week' },
      { time: '55:10', topic: 'What a Prates win means for the title picture' },
      { time: '58:25', topic: 'Outro / next episode preview' },
    ],
    hashtags: ['UFC', 'UFCPerth', 'DellaMaddalenaVsPrates', 'MMAPodcast', 'UFCBettingPicks', 'MMAPredictions', 'HalfTheBattle'],
  },

  multi_platform: {
    intro:
      'Branded social cuts pulled from the show. Drop directly. The X thread captures the headline takes for free traffic. The IG carousel is the visual recap. Shorts are pre-scripted from your strongest podcast moments.',
    x_thread: {
      intro: 'Half The Battle take on UFC Perth, condensed into a thread for X.',
      tweets: [
        { num: '1/7', text: 'UFC Perth predictions thread. JDM vs Prates is a real fight, not the lopsided coronation some people expected after Makhachev. Here is how I see the card.' },
        { num: '2/7', text: 'Della Maddalena vs Prates: my pick is Prates by KO or decision. Five dimensions converge — reach, momentum, stats, style, gym intel. JDM has a real path (39%) but it is narrow: replicate Edwards round 1 wrestling for the full 25 minutes. Hard to do with the public crowd noise.' },
        { num: '3/7', text: 'Why Prates: 5 inches of reach, 3 inches of height, 7th-best knockdown rate in UFC history, three straight finishes of ranked opposition. The straight left is the cleanest single shot in the division. If this stays at distance even briefly, it ends inside 3 rounds.' },
        { num: '4/7', text: 'Dariush vs Salkilld is the saddest fight on the card. Two KO losses in three fights, now traveling to fight a hungry debutant on his home soil. This feels like a goodbye fight regardless of outcome.' },
        { num: '5/7', text: 'Erceg at home is the play I am most interested in. He has been broken by Pantoja twice. Crowd lift in Perth either reignites him or confirms his ceiling. Elliott is the perfect chaos test.' },
        { num: '6/7', text: 'Best bet of the card: Prates by ITD at +180 to +220. He has finished 5 of 6 UFC wins (Edwards R2, Garry R5, Neal R1, Li R2). Real finish probability sits closer to 45%. The price is a 10-15% edge.' },
        { num: '7/7', text: 'Full breakdown on the pod (link in bio). New episode every Tuesday. Longest-running UFC predictions show in the game.' },
      ],
    },
    ig_carousel: {
      intro: '7-slide IG carousel. Slide 1 is the hook, slide 7 is the CTA. Designed for save + share.',
      slides: [
        { slot: 'Slide 1', label: 'UFC Perth Card Picks', caption: 'Half The Battle has called UFC cards for 11 years. Here is the full breakdown for Saturday.' },
        { slot: 'Slide 2', label: 'Prates by KO or Decision', caption: 'Five dimensions converge on Prates: reach, momentum, style, stats, gym intel. The pick that aligns with the tape.' },
        { slot: 'Slide 3', label: 'Prates Edge', caption: '5 inches of reach. 7th-best knockdown rate in UFC history. Three straight finishes of ranked opposition. The straight left ends fights.' },
        { slot: 'Slide 4', label: 'Salkilld over Dariush', caption: 'Two KO losses in three fights. Traveling. Home crowd against him. Career inflection.' },
        { slot: 'Slide 5', label: 'Erceg at Home', caption: 'Twice broken by Pantoja. Perth crowd is either his reset or his ceiling test.' },
        { slot: 'Slide 6', label: 'Best Bet: Prates ITD +200', caption: 'Prates has finished 5 of 6 UFC wins. Real finish probability ~45%. Price implies 35.7%. Edge of 10-15%.' },
        { slot: 'Slide 7', label: 'Full Episode Tuesday', caption: '@halfthebattlepod on YT, Spotify, Apple. Longest-running UFC predictions show in the game.' },
      ],
      full_caption:
        'UFC Perth predictions on the new episode. Prates by KO or decision is the play. JDM has a real path (39%) but it asks him to do what Edwards could not: sustain the wrestling for the full 25. Best bet of the card: Prates by ITD at +200. Full breakdown out Tuesday — link in bio.\n\nNew episode every week. Subscribe and stick around for the only show that has called every card since 2014.',
      hashtags: ['UFC', 'UFCPerth', 'DellaMaddalenaVsPrates', 'UFCPicks', 'MMABetting', 'MMAPodcast', 'HalfTheBattle'],
    },
    short_form: [
      {
        format: 'YT Short',
        hook: '"The market is hammering JDM by decision. Here is why that is the trap."',
        body: '60-second cut: JDM has gone to a decision in 80% of his last five UFC fights. The public sees the number and cashes it in their head. Problem is, those decisions came against grapplers (Belal, Makhachev) and a striker JDM chased (Burns ended in TKO R3). Prates is not Belal. Prates does not back up. Prates is the smarter play.',
        cta: 'Full breakdown out Tuesday on Half The Battle. Link in bio.',
      },
      {
        format: 'TikTok',
        hook: '"This is a goodbye fight."',
        body: '45-second cut: Dariush has lost two of three by KO. He is traveling. He is fighting a hungry debutant. He is on Perth soil. If this is not the last Dariush UFC fight, the next one is.',
        cta: 'Full picks Tuesday. Half The Battle. The longest-running show in MMA predictions.',
      },
      {
        format: 'Reel',
        hook: '"Don\'t lock Prates by KO Round 1."',
        body: '30-second cut: Yes, Prates has three straight KOs of ranked opposition. But every one came against a forward-pressure fighter. JDM is a counter-boxer. The straight left lands eventually but the path is different. The cleaner play is not Round 1 KO at -150. It is Prates by ITD at +200. Same fighter, smarter price.',
        cta: 'Full take dropped on Tuesday. Subscribe for weekly UFC predictions.',
      },
    ],
  },

  fight_week_brief: {
    intro: 'Sat-morning ammo. Weigh-in notes plus the four storylines worth reacting to on the live show.',
    weighin_notes: [
      'JDM and Prates both made weight clean. JDM at 170.5, Prates at 170.0.',
      'Beneil Dariush missed weight by 2.5 lbs. Forfeits 30% of purse. First missed weight of his career.',
      'Tai Tuivasa came in heavy at 268 (heavyweight non-title bouts allow up to 266 — 2 lb overage). Crowd reaction at the weigh-in was rough.',
      'Salkilld weight: 155 sharp. Looked composed at the staredown.',
    ],
    riff_bullets: [
      {
        topic: 'Dariush missing weight',
        context: 'First miss of his career. Ten years in the UFC and never had this happen. Optics-wise it confirms what people already feel.',
        riff: 'When a guy who has never missed weight misses for the first time at 36 years old, that is not a weight cut problem. That is a "the body is done" problem. Whether he wins or loses Saturday, this is the conversation in his exit interview.',
      },
      {
        topic: 'Tuivasa overage at the scale',
        context: 'Bam Bam came in two pounds heavy on a card where he is one of the home-country draws. Crowd reaction was not enthusiastic.',
        riff: 'Tuivasa is the most popular Aussie fighter on the card and the crowd booed at the scale. That is the four-loss-streak audience. They have moved on. The shoey only works when you win.',
      },
      {
        topic: 'JDM at weigh-in versus Prates',
        context: 'JDM was loose and laughing at the staredown. Prates was the colder one. Reversal of what you would expect from a guy who opened as the betting favorite.',
        riff: 'JDM was loose and laughing at the staredown. Prates was the colder one, three straight finishes and a target on his back. Read it however you want, but body language at a scale tells you what each guy feels — it does not tell you who lands the cleaner shot when the cage door closes. Comfort can be confidence or it can be the home-crowd insulation that gets pierced on fight night by a counter-puncher who feeds on overconfidence.',
      },
      {
        topic: 'Erceg versus Elliott as the dark horse pick',
        context: 'Erceg fighting at home with everything to prove. Elliott as the chaos vet. This fight has decision-of-the-night potential.',
        riff: 'If Erceg cannot make Elliott miss in front of his home crowd, he is not a top-five flyweight. Period. This is the test. No more Pantoja-loss excuses. Either he is a top guy or he is the gatekeeper. We find out Saturday.',
      },
    ],
  },

  arena_projection: {
    intro:
      'No invented numbers. This is what the Half The Battle Arena community can realistically look like for the show, modeled off the actual YouTube performance — and how that audience can be turned into revenue, content equity, or category-pioneer signal.',

    assumptions: {
      yt_avg_views: '~7K per long-form upload (verified)',
      uploads_per_week: '2 (FULL CARD Predictions + Picks Roundtable)',
      weekly_audience: '~14K weekly impressions',
      click_through: '1.5% to a podcast / YouTube bio CTA — engaged niche audience benchmark',
      signup_to_mau: '30% of signups stay active month-over-month for an engaged content community',
    },

    projected_numbers: {
      week_1_new: 62,
      month_1_mau: 250,
      quarter_mau: 600,
      steady_state_mau: 850,
      note:
        'Conservative model. Assumes no boost from Roundtable guest cross-promotion (HayJive alone could 2-3x this), no paid push (Bet105-style sponsor splash), and a baseline 30% monthly churn typical of UFC fan apps. Numbers ramp during fight weeks and dip on dark weeks — steady state is averaged across the cycle.',
    },

    monetization: [
      {
        title: 'Affiliate Revenue Share',
        description:
          'Every Arena user who signs up via your link generates a per-user share. At 850 MAU, even a $4 LTV per user per year lands as ~$3.4K in passive annual revenue, with zero paid acquisition spend. Scales linearly with audience growth.',
        level: 'concrete',
      },
      {
        title: 'Sponsored Leaderboard Slot',
        description:
          'The Half The Battle Arena Leaderboard becomes a sellable asset. Pitch it to a betting brand or sportsbook as a 4-figure-monthly sponsor slot. They get a recurring on-air mention and brand placement on the leaderboard. You get the revenue and the integration is content-friendly — no ad break required.',
        level: 'concrete',
      },
      {
        title: 'Premium Tier Cut',
        description:
          'When the Arena ships a paid tier (picks tracker, premium leaderboard, exclusive segments), the standard creator deal is a percentage of premium subscribers from your code. At 850 MAU with a 5% premium conversion at $9.99/mo and a 30% creator share, that is ~$130/mo recurring on autopilot — modest but pure margin.',
        level: 'concrete',
      },
    ],

    pioneer: [
      {
        title: 'First UFC Pod with a Tracked Audience Prediction Record',
        description:
          'You become the first show in the betting-pod ecosystem to actually receipt your audience. Live ammunition for content: "my Arena listeners called Prates over Edwards 38% of the time before the fight — sharper than the closing line." That is a content angle no one else in the space has.',
        level: 'concrete',
      },
      {
        title: 'Listener Lock of the Week — Recurring Segment',
        description:
          'Two-minute end-of-show segment. Pull the biggest contrarian Arena hit from the previous card and give the listener a 30-second shoutout. Builds the "make-the-show" mechanic that grew Helwani\'s mailbag. Once a fan has been on, they recruit their friends to enter the Arena.',
        level: 'concrete',
      },
      {
        title: 'Cross-Pod Arena Rivalry',
        description:
          'Half The Battle vs HayJive listener leaderboards. Mokaev fans vs Borralho fans. Run an inter-show tournament during a major card week. Both pods cross-promote, both Arena populations grow, both audiences engage. Fully novel format — no UFC pod in the space has tried this.',
        level: 'aspirational',
      },
    ],

    indirect: [
      {
        title: 'Audience Telemetry',
        description:
          'Arena gives you data on how YOUR fans pick fights, separate from how you pick. Where they diverge from your read is content. "Half my listeners had Salkilld over Dariush — am I missing something?" That is an episode opener you literally cannot record without this signal.',
        level: 'concrete',
      },
      {
        title: 'Newsletter List Seed',
        description:
          'Arena signups become an email list YOU own. YouTube and Instagram can revoke your audience tomorrow with an algorithm change or a policy update. An email list is the asset under your name that the platforms cannot touch — the long-tail value compounds for years.',
        level: 'concrete',
      },
      {
        title: 'Sponsor Pitch Deck Metric',
        description:
          '850 MAU engaged every fight week is a real number to take to brands. Even before Arena makes you a dollar directly, having "measurable, opt-in, fight-week-active community" on your media kit is what closes 4-figure brand deals on its own.',
        level: 'concrete',
      },
    ],

    recurring_segment: {
      name: 'The Half The Battle Arena Lock of the Week',
      description:
        'Two-minute end-of-show segment, recurring every episode. Pull the biggest contrarian Arena pick that hit from the previous card. 30-second shoutout to the listener. Fastest way to convert passive YouTube viewers into participating community members and the single most loyalty-generating recurring beat the show could add.',
      example_hook:
        'Last week\'s biggest Arena surprise: @YourFan called Dariush ITD at +150 with three-unit conviction — the grappling escape route the room slept on. Sharper than the public. We see you.',
    },
  },

  editorial_column: {
    kicker: 'From The Podcast',
    title: 'JDM Coming Home',
    subtitle: 'Why the homecoming narrative is real, the crowd lift is real, and the pick is still Prates',
    body_paragraphs: [
      'There is a specific kind of fight that exists in the UFC and only in the UFC. It is the post-loss home card. The fighter went out, took a beating from the very best, came back home, and now has to either prove he is still part of the conversation or quietly slide out of it.',
      'Jack Della Maddalena is in that fight on Saturday. Three months ago in Vegas, Islam Makhachev outwrestled him for five rounds and made the welterweight champion look like a guy who had no answers. The narrative shifted overnight. JDM went from "the cleanest boxer at 170" to "the guy Makhachev embarrassed." That second narrative is louder than the first because second narratives always are.',
      'Now he is in Perth, the hometown crowd is going to lose its mind, and Carlos Prates is the test. Prates is the hottest finisher in the division. Three straight knockouts. Edwards, Garry, Neal. The straight left has become its own folklore. Perth is not getting JDM at his peak confidence. Perth is getting JDM at the moment of a career — does the loss define him, or is the loss a footnote?',
      'Here is what the homecoming narrative is missing about Prates. The bias is to assume any fighter who has gone five with Belal and five with Makhachev is durable enough to weather the storm. The bias is to assume Perth crowd lift translates to fight winning. Both are real factors. Neither solves the matchup. Prates owns five inches of reach and three inches of height. The pocket where JDM\'s boxing operates is the pocket Prates is fighting to deny. The straight left is the cleanest single shot in the welterweight division and JDM cannot consistently make it miss without closing the distance — the exact thing Prates is built to prevent.',
      'I have Prates. By KO or decision. The fight-by-fight read points to an edge in five separate dimensions — physical, statistical, momentum, style, gym-level intel — and they all converge in the same direction. JDM has a real path. Run Edwards\' round one wrestling and stretch it across all twenty-five minutes. Clinch, takedown, top control, RNC fishing, repeat. About a 39% path. That is not a small number. But it is a narrow one, and it asks JDM to do what Edwards could not: sustain it past the first five minutes.',
      'If I am wrong about Prates, I am wrong because JDM ran Edwards\' fight the way Edwards could not finish it — for the full twenty-five. That is the path. It is real. But betting on Prates by ITD at +200 and being wrong feels like a fairer place to be wrong than chasing the JDM-by-decision narrative that the market has already priced in. The trap is the comfortable take. The play is the read.',
      'See you Tuesday for the full breakdown.',
    ],
    pull_quote: 'The trap is the comfortable take. The play is the read.',
    byline: 'Daniel Levi, Half The Battle',
  },
};
