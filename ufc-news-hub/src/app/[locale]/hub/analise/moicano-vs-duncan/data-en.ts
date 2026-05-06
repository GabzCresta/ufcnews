import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'moicano-vs-duncan',
  evento_id: null,
  slug: 'moicano-vs-duncan',
  titulo: 'Moicano vs Duncan: Now or Never',
  subtitulo: 'The 36-year-old veteran on a 2-fight skid faces the Scottish rising star on a meteoric rise. Training partners. Same gym. Opposite paths.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '5\'11"', envergadura: '72"', idade: 36, academia: 'American Top Team' },
      fighter2: { altura: '5\'10"', envergadura: '71"', idade: 32, academia: 'American Top Team' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Submission R2-R3',
    confidence: 'MEDIUM',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Strike Volume', edge: 'fighter2', impact: 7, description: 'Duncan lands 5.02 significant strikes per minute vs Moicano\'s 4.17. The Scotsman pushes a higher pace.' },
      { factor: '5-Round Experience', edge: 'fighter1', impact: 8, description: 'Moicano has fought 5 rounds multiple times. Duncan never has. The championship rounds are the veteran\'s territory.' },
      { factor: 'Takedown Threat', edge: 'fighter2', impact: 7, description: 'Duncan averages 3.27 TDs per 15 min vs Moicano\'s 1.67. Moicano\'s TD defense (62%) is vulnerable.' },
    ],
    xFactor: {
      title: 'Duncan\'s First 5-Round Main Event',
      description: 'Duncan has never fought 5 rounds. If Moicano survives the early storm and drags this to R4-R5, experience could be the deciding factor.',
    },
  },
  fighter1_info: {
    nome: 'Renato Moicano',
    apelido: 'Money Moicano',
    record: '20-7-1',
    ranking: '#10 Lightweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Beneil Dariush', method: 'Unanimous Decision', event: 'UFC 317' },
      { result: 'L', opponent: 'Islam Makhachev', method: 'Submission R1', event: 'UFC 311' },
      { result: 'W', opponent: 'Benoit Saint Denis', method: 'Unanimous Decision', event: 'UFC 310' },
    ],
  },
  fighter2_info: {
    nome: 'Chris Duncan',
    apelido: 'The Problem',
    record: '15-2-0',
    ranking: 'Unranked',
    ultimasLutas: [
      { result: 'W', opponent: 'Terrance McKinney', method: 'Submission R1', event: 'UFC 323' },
      { result: 'W', opponent: 'Mateusz Rebecki', method: 'Unanimous Decision (FOTN)', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Jordan Vucenic', method: 'Submission R2', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan',
  evento_data: 'April 4, 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Lightweight (155 lbs)',
  num_rounds: 5,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Moicano vs Duncan',
      evento_data: 'April 4, 2026',
      evento_local: 'UFC Apex, Las Vegas',
      categoria_peso: 'Lightweight (155 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'Now or Never',
      tagline_sub: 'The Bitcoin preacher on a 2-fight skid vs the Scottish shepherd on a meteoric rise. Same gym. Opposite paths.',
      fighter1: {
        nome_completo: 'Renato "Money Moicano" Carneiro',
        apelido: 'Money Moicano',
        sobrenome: 'Moicano',
        record: '20-7-1',
        ranking: '#10 Lightweight',
        info_extra: 'Brasilia, Brazil | American Top Team | 36 years old',
        imagem_fullbody_url: '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-01%2F12%2FMOICANO_RENATO_L_09-28.png%3Fitok%3DaJ4kuhkB',
      },
      fighter2: {
        nome_completo: 'Chris "The Problem" Duncan',
        apelido: 'The Problem',
        sobrenome: 'Duncan',
        record: '15-2-0',
        ranking: 'Unranked',
        info_extra: 'Alloa, Scotland | American Top Team | 32 years old',
        imagem_fullbody_url: '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2023-07%2FDUNCAN_CHRIS_L_07-22.png%3Fitok%3DHlQ_JCOr',
      },
    },

    narrativa: {
      html_content: `
        <!-- MOICANO: NOW OR NEVER -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">The Preacher With His Back Against the Wall</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/5 via-transparent to-ufc-red/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-ufc-red/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                At UFC 300, <strong class="text-ufc-red">Moicano</strong> stepped into the octagon, beat Jalin Turner as a +200 underdog, grabbed the mic and said: <em class="text-white/80">"If you don't know who Ludwig von Mises is, you don't know anything about economics. Read, and buy Bitcoin."</em> MMA stopped. It became a meme. It became a t-shirt. The guy got more famous for the speech than the win. That's Renato Moicano: law student, libertarian, 723K Instagram followers, the most charismatic fighter in the UFC. But charisma doesn't win fights.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/20 to-ufc-red/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Jan 2025</p>
                <p class="font-display text-2xl text-white mb-2">MAKHACHEV</p>
                <p class="text-xs text-white/50 leading-relaxed">Submission R1. Islam didn't even break a sweat. Moicano took it on short notice and got swallowed by the best in the world.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Title Fight</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/20 to-ufc-red/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Jun 2025</p>
                <p class="font-display text-2xl text-white mb-2">DARIUSH</p>
                <p class="text-xs text-white/50 leading-relaxed">Unanimous Decision. Uneventful fight. Moicano couldn't impose his game. 2nd straight loss.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Losing Streak</div>
              </div>
            </div>
          </div>

          <div class="mt-8 text-center">
            <p class="font-display text-5xl md:text-6xl bg-gradient-to-b from-ufc-red/40 to-ufc-red/10 bg-clip-text text-transparent leading-none">2 straight losses</p>
            <div class="flex items-center justify-center gap-4 mt-3">
              <div class="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-white/10"></div>
              <p class="text-xs text-white/40">36 years old &middot; #10 LW &middot; A 3rd loss could be fatal</p>
              <div class="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-white/10"></div>
            </div>
            <p class="font-display text-lg text-white/70 mt-2 italic">"Now or never, Moicano."</p>
          </div>
        </div>

        <!-- DUNCAN: THE RISE -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">From Scottish Pastures to the Main Event</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-blue-400">Duncan</strong> grew up in Alloa, Scotland. He worked as a shepherd. He was called "Podgy" as a kid. On the day of his first professional weigh-in, his mother was murdered. He fought the next day. He wears a pendant in her honor to this day, at every weigh-in, at every fight. Chris Duncan doesn't talk about tragedy for sympathy. He fights because fighting is the only thing that's made sense since that day.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">2024</p>
                <p class="font-display text-2xl text-white mb-2">VUCENIC</p>
                <p class="text-xs text-white/50 leading-relaxed">Submission R2. Showed off his ground game.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">Sub Finish</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">2025</p>
                <p class="font-display text-2xl text-white mb-2">REBECKI</p>
                <p class="text-xs text-white/50 leading-relaxed">Unanimous Decision. FOTN bonus. A 3-round war.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">FOTN</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Dec 2025</p>
                <p class="font-display text-2xl text-white mb-2">McKINNEY</p>
                <p class="text-xs text-white/50 leading-relaxed">Submission R1. Quick and lethal.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">Sub R1</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">2024</p>
                <p class="font-display text-2xl text-white mb-2">OKI</p>
                <p class="text-xs text-white/50 leading-relaxed">Submission R1. POTN bonus. Total dominance.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">POTN</div>
              </div>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/8 via-amber-500/4 to-amber-500/8"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div class="relative p-5 text-center">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">4-fight win streak</p>
              <p class="text-sm text-white/60">All impressive. <strong class="text-amber-400">First ever 5-round main event</strong> of his career. Cardio is the big unknown.</p>
            </div>
          </div>
        </div>

        <!-- BEHIND THE SCENES: THE ATT FACTOR -->
        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">The Elephant in the Room: Same Gym</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">American Top Team</p>
                <p class="text-sm text-white/60 leading-relaxed">Both train at ATT. They've sparred together. They know each other's game inside and out. That eliminates surprises and turns this into pure chess.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-ufc-red/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-ufc-red rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-ufc-red mb-2">Moicano: viral charisma</p>
                <p class="text-sm text-white/60 leading-relaxed">The Ludwig von Mises speech at UFC 300. Law student. Libertarian. Bitcoin. 723K on Instagram. The guy everyone wants to hear on the mic.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Duncan: quiet determination</p>
                <p class="text-sm text-white/60 leading-relaxed">No trash talk. No show. Wears his mother's pendant at every fight. Left Scotland to be the best. His motivation doesn't come from likes, it comes from something much deeper.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Passing the Torch?</p>
                <p class="text-sm text-white/60 leading-relaxed">A 36-year-old veteran in decline vs a 32-year-old star on the rise. If Duncan wins, he cracks the rankings. If Moicano loses, retirement talk begins.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: '#10 Lightweight', fighter2: 'Unranked' },
        { dimensao: 'Streak', fighter1: '2 straight losses', fighter2: '4-fight win streak' },
        { dimensao: 'Narrative', fighter1: 'Avoid a 3rd straight loss at 36', fighter2: 'Break into rankings with a top 10 win' },
        { dimensao: 'Risk', fighter1: 'A 3rd loss could end top 5 ambitions', fighter2: 'Missing a golden opportunity against a slumping veteran' },
        { dimensao: 'Reward', fighter1: 'Prove he\'s still relevant at the top', fighter2: 'Biggest win of his career, top 15 entry' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'THE VETERAN HOLDS ON',
          subtitulo: 'Moicano proves that 5-round experience is the great equalizer and stops the bleeding',
          consequencias: [
            { tag: 'RANKING', texto: 'Moicano stays in the top 10 and gets breathing room. The decline narrative slows down.' },
            { tag: 'NARRATIVE', texto: 'Proves his 2 losses were against the elite (champion and top 10) and he still dominates "the rest."' },
            { tag: 'NEXT', texto: 'Fights a top 7-12 like Dustin Poirier, Dan Hooker or Michael Chandler.' },
          ],
          proxima_luta: 'Moicano vs top 7-12 LW (Poirier, Hooker or Chandler)',
        },
        fighter2_vence: {
          titulo: 'THE PROBLEM CRACKS THE RANKINGS',
          subtitulo: 'Duncan confirms he\'s the future of lightweight with a dominant win over a ranked veteran',
          consequencias: [
            { tag: 'RISE', texto: 'Duncan enters the top 15 with the biggest win of his UFC career' },
            { tag: 'HYPE', texto: 'The meteoric rise gets more fuel. 5 wins in 6 UFC fights. The MMA community takes notice.' },
            { tag: 'MOICANO', texto: 'A 3rd straight loss at 36 raises serious questions about Moicano\'s future at the top of the division.' },
          ],
          proxima_luta: 'Duncan vs top 10-15 LW (Bobby Green, Paddy Pimblett or Mateusz Gamrot)',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Renato Moicano',
        color: 'red',
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Beneil Dariush', result: 'L', method: 'Unanimous Decision', opponent_rank: '#9 LW', quality_score: 3, quality_label: 'Good', note: 'Uneventful fight. Moicano couldn\'t impose his game. Dariush controlled the pace and won on the cards.' },
          { date: 'Jan 2025', opponent: 'Islam Makhachev', result: 'L', method: 'Submission R1', opponent_rank: 'Champion', quality_score: 5, quality_label: 'Excellent', note: 'Took the title fight on short notice. Islam submitted him quickly. No shame losing to the best in the world.' },
          { date: 'Dec 2024', opponent: 'Benoit Saint Denis', result: 'W', method: 'Unanimous Decision', opponent_rank: '#12 LW', quality_score: 3, quality_label: 'Good', note: 'Solid win. Controlled distance and won on the cards.' },
          { date: 'Apr 2024', opponent: 'Jalin Turner', result: 'W', method: 'Unanimous Decision', opponent_rank: '#11 LW', quality_score: 3, quality_label: 'Good', note: 'UFC 300. +200 underdog and won. Then came the viral Ludwig von Mises and Bitcoin speech.' },
          { date: 'Nov 2023', opponent: 'Drew Dober', result: 'W', method: 'Unanimous Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Comfortable points win. Dober is a solid gatekeeper.' },
        ],
        full_fight_history: [
          { date: 'Aug 2014', opponent: 'Zubaira Tukhugov', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'UFC debut, loss' },
          { date: 'Nov 2015', opponent: 'Tom Niinimaki', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'First UFC win' },
          { date: 'May 2016', opponent: 'Zubaira Tukhugov', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Rematch, points win' },
          { date: 'Sep 2016', opponent: 'Alex Oliveira', result: 'D', method: 'SD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Draw' },
          { date: 'Feb 2017', opponent: 'Jeremy Stephens', result: 'W', method: 'UD', opponent_rank: '#6 FW', quality_score: 3, quality_label: 'Good', note: 'Solid win over ranked fighter' },
          { date: 'Jun 2017', opponent: 'Brian Ortega', result: 'L', method: 'Sub R3', opponent_rank: '#4 FW', quality_score: 4, quality_label: 'Very Good', note: 'Loss to future title challenger' },
          { date: 'Feb 2018', opponent: 'Calvin Kattar', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Points win' },
          { date: 'Dec 2018', opponent: 'Mirsad Bektic', result: 'W', method: 'UD', opponent_rank: '#10 FW', quality_score: 3, quality_label: 'Good', note: 'Win over ranked fighter' },
          { date: 'Feb 2019', opponent: 'Jose Aldo', result: 'L', method: 'KO R2', opponent_rank: '#3 FW', quality_score: 5, quality_label: 'Excellent', note: 'Knocked out by the legend' },
          { date: 'Jun 2019', opponent: 'Korean Zombie', result: 'L', method: 'KO R1', opponent_rank: '#4 FW', quality_score: 4, quality_label: 'Very Good', note: 'Quick knockout' },
          { date: 'Mar 2020', opponent: 'Damir Hadzovic', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Moved to LW, quick sub' },
          { date: 'Feb 2022', opponent: 'Alexander Hernandez', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Ground finish' },
          { date: 'Jul 2022', opponent: 'Brad Riddell', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Points win' },
          { date: 'Nov 2023', opponent: 'Drew Dober', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Comfortable win' },
          { date: 'Apr 2024', opponent: 'Jalin Turner', result: 'W', method: 'UD', opponent_rank: '#11 LW', quality_score: 3, quality_label: 'Good', note: 'UFC 300, viral speech' },
          { date: 'Dec 2024', opponent: 'Benoit Saint Denis', result: 'W', method: 'UD', opponent_rank: '#12 LW', quality_score: 3, quality_label: 'Good', note: 'UFC 310' },
          { date: 'Jan 2025', opponent: 'Islam Makhachev', result: 'L', method: 'Sub R1', opponent_rank: 'Champion', quality_score: 5, quality_label: 'Excellent', note: 'Short notice, title fight' },
          { date: 'Jun 2025', opponent: 'Beneil Dariush', result: 'L', method: 'UD', opponent_rank: '#9 LW', quality_score: 3, quality_label: 'Good', note: 'Uneventful fight' },
        ],
        momentum_score: 4,
        momentum_label: 'Recovering',
        momentum_trend: 'descending',
        momentum_note: 'Moicano is coming off 2 straight losses, but with context: the first was to the world champion on short notice (Islam Makhachev), and the second to veteran Dariush. Before that, a 5-fight win streak that included the iconic UFC 300. At 36, the window is closing. A 3rd loss would be devastating for his ranking and narrative. But Moicano is the type of fighter who knows how to reinvent himself.',
      },
      fighter2: {
        nome: 'Chris Duncan',
        color: 'blue',
        recent_fights: [
          { date: 'Dec 2025', opponent: 'Terrance McKinney', result: 'W', method: 'Submission R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Quick finish at UFC 323. Showed the jiu-jitsu is razor sharp.' },
          { date: 'Aug 2025', opponent: 'Mateusz Rebecki', result: 'W', method: 'Unanimous Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'FOTN bonus. 3-round war with high volume. Showed cardio and heart.' },
          { date: 'Apr 2025', opponent: 'Jordan Vucenic', result: 'W', method: 'Submission R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Another sub. Grappling is the difference-maker.' },
          { date: 'Nov 2024', opponent: 'Bolaji Oki', result: 'W', method: 'Submission R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'POTN bonus. Total dominance from the first second.' },
          { date: 'Feb 2024', opponent: 'Manuel Torres', result: 'L', method: 'Submission', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Only UFC loss. Got submitted. The weakness is getting caught on the ground when he\'s on bottom.' },
        ],
        full_fight_history: [
          { date: 'Mar 2023', opponent: 'Omar Morales', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'UFC debut, solid win' },
          { date: 'Jul 2023', opponent: 'Chepe Mariscal', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Quick knockout' },
          { date: 'Feb 2024', opponent: 'Manuel Torres', result: 'L', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Only UFC loss' },
          { date: 'Nov 2024', opponent: 'Bolaji Oki', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'POTN' },
          { date: 'Apr 2025', opponent: 'Jordan Vucenic', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Sub finish' },
          { date: 'Aug 2025', opponent: 'Mateusz Rebecki', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'FOTN' },
          { date: 'Dec 2025', opponent: 'Terrance McKinney', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'UFC 323' },
        ],
        momentum_score: 8,
        momentum_label: 'On Fire',
        momentum_trend: 'ascending',
        momentum_note: 'Duncan is at the best moment of his career. 4 straight UFC wins, all impressive, with POTN and FOTN bonuses. The hype is real. But the quality of opponents is still questionable: no ranked fighters, no top 15. Moicano is a MASSIVE jump in competition. This is the real test. His first 5-round main event adds another layer of uncertainty.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Moicano',
        media_oponentes: 3,
        media_oponentes_label: 'Good',
        aproveitamento: '12W-7L (63%)',
        contra_top5: '0W-3L',
      },
      fighter2: {
        nome: 'Duncan',
        media_oponentes: 2,
        media_oponentes_label: 'Average',
        aproveitamento: '6W-1L (86%)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'No common opponents in the UFC, but both train together at American Top Team. That\'s worth more than any common opponent: they literally know each other\'s habits, strengths and weaknesses. Moicano has faced significantly tougher competition (Makhachev, Aldo, Ortega, Dariush). Duncan hasn\'t fought anyone ranked yet.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 4.17, valueB: 5.02, maxVal: 7, format: 'decimal', note: 'Duncan has superior volume. Pushes a higher pace and throws more strikes.' },
        { label: 'Strike Accuracy (%)', valueA: 48, valueB: 46, maxVal: 100, format: 'percent', note: 'Very similar accuracy. Moicano with a slight edge.' },
        { label: 'Strikes Absorbed/Min', valueA: 3.57, valueB: 4.82, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Duncan absorbs WAY more. The aggressive style comes at a cost. Moicano is more cautious.' },
        { label: 'Strike Defense (%)', valueA: 59, valueB: 51, maxVal: 100, format: 'percent', note: 'Moicano defends better. Duncan takes more to give more.' },
        { label: 'Takedowns per 15 Min', valueA: 1.67, valueB: 3.27, maxVal: 5, format: 'decimal', note: 'Duncan attempts nearly twice as many takedowns. Wrestling is a core part of his game.' },
        { label: 'Takedown Accuracy (%)', valueA: 41, valueB: 42, maxVal: 100, format: 'percent', note: 'Practically identical takedown accuracy.' },
        { label: 'Takedown Defense (%)', valueA: 62, valueB: 50, maxVal: 100, format: 'percent', note: 'Moicano defends TDs better, but 62% is not elite. Vulnerable.' },
        { label: 'Submissions per 15 Min', valueA: 0.5, valueB: 0.7, maxVal: 3, format: 'decimal', note: 'Both are submission threats. Potential chess match on the ground.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '36 years old', fighter2: '32 years old', note: 'Moicano 4 years older' },
        { label: 'Height', fighter1: '5\'11" (180cm)', fighter2: '5\'10" (178cm)', note: 'Nearly the same height' },
        { label: 'Reach', fighter1: '72" (183cm)', fighter2: '71" (180cm)', note: 'Moicano with a slight 1-inch advantage' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Both orthodox' },
        { label: 'Gym', fighter1: 'American Top Team', fighter2: 'American Top Team', note: 'SAME GYM. They train together. They know everything about each other.' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Stand-up Striking', valueA: 72, valueB: 70, labelA: 'Good', labelB: 'Good', advantage: 'even', advantage_note: 'Moicano is technical and precise (48% acc). Duncan has more volume (5.02 SLpM) but absorbs too much (4.82 SApM). Different styles, similar level on the feet.' },
        { label: 'Offensive Wrestling', valueA: 60, valueB: 75, labelA: 'Good', labelB: 'Very Good', advantage: 'fighter2', advantage_note: 'Duncan averages 3.27 TDs per 15 min, nearly double Moicano (1.67). The Scotsman is more active with his wrestling and uses it to create transitions to the ground.' },
        { label: 'Jiu-Jitsu / Submissions', valueA: 70, valueB: 75, labelA: 'Good', labelB: 'Very Good', advantage: 'fighter2', advantage_note: 'Duncan has 6 career subs (40% of wins), including 3 in recent UFC bouts. Moicano has 8 total subs (4 in UFC). Both dangerous, but Duncan has been more active in the sub game lately.' },
        { label: 'Defense & Durability', valueA: 68, valueB: 55, labelA: 'Good', labelB: 'Good', advantage: 'fighter1', advantage_note: 'Moicano defends 59% of strikes and 62% of TDs. Duncan absorbs too much (4.82 SApM) and only defends 51% of strikes. Duncan also only defends 50% of TDs.' },
        { label: 'Cardio & Gas Tank', valueA: 75, valueB: 58, labelA: 'Very Good', labelB: 'Good', advantage: 'fighter1', advantage_note: 'Moicano has fought 5 rounds and has main event experience. Duncan has NEVER fought 5 rounds. The biggest unknown of this fight. If it goes to R4-R5, nobody knows how Duncan will respond.' },
        { label: 'Elite Experience', valueA: 80, valueB: 45, labelA: 'Very Good', labelB: 'Average', advantage: 'fighter1', advantage_note: 'Moicano has faced Makhachev, Aldo, Ortega, Korean Zombie, Dariush. Duncan has never fought a ranked opponent. The experience gap is enormous.' },
      ],
      insight: 'Both are well-rounded with solid jiu-jitsu, but with opposite styles. Moicano is more technical and cautious, with better defense and elite experience. Duncan is more explosive and aggressive, with superior wrestling and high volume. The fight will be decided by: can Duncan impose his high pace and get it to the ground, or can Moicano control distance and make Duncan burn his gas tank in the first 3 rounds?',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Moicano',
        ko_tko: { count: 4, percent: 20 },
        submission: { count: 8, percent: 40 },
        decision: { count: 8, percent: 40 },
        total_wins: 20,
      },
      fighter2: {
        nome: 'Duncan',
        ko_tko: { count: 7, percent: 47 },
        submission: { count: 6, percent: 40 },
        decision: { count: 2, percent: 13 },
        total_wins: 15,
      },
      insight: 'The finishing profiles tell very different stories. Moicano is balanced between subs (40%) and decisions (40%), with few KOs (20%). In the UFC, 10 of his 12 wins were by decision. Duncan is a natural finisher: 87% of wins by finish (47% KO + 40% sub) and only 2 decisions in 15 wins. If the fight goes long, it favors Moicano. If Duncan can impose his game early, he hunts the finish.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 8,
          danger_label: 'DUNCAN\'S ADVANTAGE',
          color: 'green',
          title: 'Duncan\'s Territory',
          description: 'Duncan is most dangerous in R1. Volume of 5.02 SLpM, most of his finishes in R1, and the explosiveness of someone at peak physical form. Moicano needs to survive the early storm without getting taken down. If Duncan lands an early takedown and transitions to the ground, the submission could come fast.',
        },
        {
          rounds: 'R2-R3',
          danger_level: 6,
          danger_label: 'EVEN',
          color: 'gold',
          title: 'Transition Rounds',
          description: 'If Moicano survives R1, rounds 2 and 3 are where experience starts to weigh in. Duncan still has gas here, but the pace of 5.02 strikes per minute isn\'t sustainable for long. Moicano can start finding his timing and countering. Grappling could go either way: both are submission threats.',
        },
        {
          rounds: 'R4-R5',
          danger_level: 4,
          danger_label: 'MOICANO\'S ADVANTAGE',
          color: 'red',
          title: 'Championship Rounds',
          description: 'Completely uncharted territory for Duncan. He has NEVER fought 5 rounds. Moicano has been in this situation multiple times. If it gets here, the veteran\'s experience, fight IQ and controlled pace should dominate. Duncan may be gassed from the high-volume early rounds.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'MapPin', title: 'Same Gym: American Top Team', fighter: 'Both', risk_level: 'NEUTRAL', risk_color: 'neutral', description: 'Both train at ATT. They\'ve sparred together. They know each other\'s strengths and weaknesses. This eliminates the surprise element and turns the fight into pure chess. Who adapts their game plan better on fight night?' },
        { icon: 'Clock', title: 'Age: 36 Years Old', fighter: 'Moicano', risk_level: 'MEDIUM RISK', risk_color: 'yellow', description: 'Moicano is 36 and coming off 2 straight losses. Recovery between fights isn\'t the same anymore. Reflexes diminish. Against a 32-year-old at peak physical condition, every year matters.' },
        { icon: 'Activity', title: 'First 5-Round Main Event', fighter: 'Duncan', risk_level: 'HIGH RISK', risk_color: 'red', description: 'Duncan has NEVER fought 5 rounds. All his fights have been 3 rounders. His cardio over 25 minutes is completely unknown. The volume of 5.02 strikes per minute is unsustainable for 5 rounds. Something has to give.' },
        { icon: 'TrendingUp', title: '4-Fight Win Streak Momentum', fighter: 'Duncan', risk_level: 'POSITIVE', risk_color: 'green', description: 'Duncan is riding a 4-fight win streak with POTN and FOTN bonuses. Confidence is at its peak. Each fight looks better than the last. The guy is evolving in real time.' },
        { icon: 'Brain', title: '"Nothing to Lose" Mentality', fighter: 'Moicano', risk_level: 'POSITIVE', risk_color: 'green', description: 'Moicano has already fought for the title, already gave the viral speech, already lived the high point. With his back against the wall at 36, he can fight with the freedom of someone who has nothing left to protect. An unleashed Moicano can be dangerous.' },
        { icon: 'Shield', title: 'Mother\'s Pendant', fighter: 'Duncan', risk_level: 'HUGE POSITIVE', risk_color: 'green', description: 'Duncan fights wearing the pendant in honor of his murdered mother. This isn\'t emotionalism. It\'s deep motivation, the kind that doesn\'t fade when cardio fails. The man has been through the worst life can throw and keeps fighting.' },
        { icon: 'Target', title: 'Vulnerable TD Defense', fighter: 'Moicano', risk_level: 'MEDIUM RISK', risk_color: 'yellow', description: 'Moicano only defends 62% of takedowns. Against Duncan\'s wrestling (3.27 TDs per 15 min), that\'s a problem. If Duncan can consistently get it to the ground, he can control the entire fight.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Moicano',
        total_probability: 40,
        scenarios: [
          { name: 'The Veteran\'s Marathon', probability: 22, method: 'Unanimous Decision', description: 'Moicano survives R1, controls distance with the jab, and makes Duncan burn his gas early. In the championship rounds (R4-R5), experience takes over. Duncan has never fought 5 rounds and fades. Moicano wins on the cards with control and fight IQ.' },
          { name: 'Veteran\'s Submission', probability: 10, method: 'Submission R3-R4', description: 'Moicano waits for Duncan to tire then looks for the takedown. On the ground, a gassed Duncan makes a mistake and Moicano locks in a guillotine or RNC. Grappling experience speaks louder when the opponent is tired.' },
          { name: 'Clean Counter', probability: 8, method: 'TKO R2-R3', description: 'Duncan comes in aggressive as always and Moicano lands a precise counter that hurts. Duncan\'s high volume leaves defensive gaps. If Moicano finds the timing, he can hurt him and hunt the finish.' },
        ],
      },
      fighter2: {
        nome: 'Duncan',
        total_probability: 57,
        scenarios: [
          { name: 'Scottish Storm', probability: 25, method: 'Submission R1-R2', description: 'Duncan pressures from the first second, lands an early takedown and transitions to a back take or arm triangle. On the ground, Duncan\'s grappling is more aggressive and modern. Moicano can\'t get back up and Duncan finishes by submission.' },
          { name: 'Volume & Pressure', probability: 18, method: 'Unanimous Decision', description: 'Duncan maintains a high pace for all 5 rounds (unlikely but possible). The volume of 5.02 strikes/min combined with constant takedowns dominates Moicano on the cards. Duncan shows his cardio can handle the main event.' },
          { name: 'TKO by Accumulation', probability: 14, method: 'TKO R2-R3', description: 'Duncan\'s high volume accumulates damage. Moicano absorbs 3.57 strikes/min and starts to slow down. Duncan senses it and increases the pressure, mixing strikes and takedowns until the ref steps in.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Chris Duncan',
      winner_side: 'fighter2',
      predicted_method: 'Submission R2-R3',
      confidence_score: 5,
      confidence_label: 'MEDIUM',
      explanation: 'This fight is much more competitive than the odds suggest, but Duncan deserves to be a slight favorite. The Scotsman has superior volume, more active wrestling, and more frequent submissions. The combination of pressure, takedowns and sub threats could be too much for Moicano, especially with only 62% TD defense. The most likely scenario: Duncan pressures in the early rounds, lands takedowns and eventually finds the submission. HOWEVER: if Moicano survives to R4, the dynamics change completely. Duncan has NEVER fought 5 rounds and the volume of 5.02 SLpM is unsustainable for 25 minutes. Moicano\'s championship round experience is the wild card of this fight. It\'s a classic case of "whoever dictates the pace wins."',
      x_factor: {
        title: 'The 5 Rounds Duncan Has Never Fought',
        description: 'Duncan has never gone past 3 rounds. Nobody knows what happens to his cardio over 25 minutes while maintaining 5.02 strikes per minute. If he fades, Moicano is exactly the type of fighter who capitalizes: technical, patient, and dangerous when he senses weakness. This is the X factor that could flip the fight to the veteran.',
      },
      upset_alert: {
        title: 'Moicano: Championship Rounds Veteran',
        description: 'If Moicano survives the first 2-3 rounds without getting finished, he can completely flip this fight in R4-R5. Duncan will be in uncharted territory, possibly gassed, against a veteran who has been there dozens of times. The upset is far from unlikely. Moicano at +160 has real value.',
      },
      probabilities: {
        fighter1: { nome: 'Moicano', percent: 40 },
        fighter2: { nome: 'Duncan', percent: 57 },
        draw: 3,
      },
      value_picks: {
        moneyline: { pick: 'Moicano (+160)', reasoning: 'The underdog has real value. Moicano is a top 10 fighter with elite 5-round experience against someone who has never gone past 3. If the fight goes long, +160 pays well.' },
        method: { pick: 'Duncan by Submission (+180)', reasoning: 'Duncan has 3 subs in his last 4 UFC fights. Moicano was submitted by Makhachev and Ortega. The scenario is real and the odds pay well.' },
        over_under: { pick: 'Over 2.5 Rounds', rounds: 2.5, reasoning: 'Moicano is tough to finish (10 decisions in 20 wins) and knows how to survive. Duncan may push early but might not get the quick finish. Over 2.5 is the safest bet.' },
        best_value: 'Moicano ML (+160) is the best value bet. A top 10 veteran with 5-round experience against a guy who has never gone past 3 rounds. The odds overstate Duncan\'s advantage.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Duncan\'s First 2 Takedowns', icon: 'Target', description: 'If Duncan lands takedowns in the first 5 minutes and controls Moicano on the ground, the game plan is working. If Moicano defends and keeps it standing, Duncan will need to rethink everything.' },
        { num: 2, title: 'Moicano\'s Pace in R1', icon: 'Brain', description: 'Watch whether Moicano is trying to dictate a slow, technical pace or being forced to fight at Duncan\'s tempo. If Moicano is calmly countering, he\'s comfortable. If he\'s backing up and absorbing, trouble.' },
        { num: 3, title: 'Duncan\'s Gas Tank in R3', icon: 'Activity', description: 'The most important round might be the third. Can Duncan maintain 5.02 strikes per minute for 15 minutes? If the pace drops noticeably in R3, Moicano knows the championship rounds are his.' },
        { num: 4, title: 'Who Controls the Ground', icon: 'Shield', description: 'When this fight hits the mat (and it WILL), watch who\'s in control. Both are sub threats. If Duncan is on top controlling, he dominates. If Moicano is threatening from bottom, he could surprise.' },
        { num: 5, title: 'Body Language in R4', icon: 'Zap', description: 'If Duncan comes out looking fresh in R4, Moicano is in serious trouble. If Duncan is leaning on the cage catching his breath between exchanges, that\'s the sign that the veteran\'s 5-round experience will decide it.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'MOICANO VS DUNCAN', content: 'UFC FIGHT NIGHT\nApex, Las Vegas | April 4\n5 Rounds | Lightweight\n\n20-7-1 vs 15-2\nVeteran in decline vs Rising star\nSAME GYM. Opposite paths.\n\nNow or never.', color: 'gold' },
        { slide_number: 2, title: 'MONEY MOICANO', content: '#10 Lightweight | 36 years old\nAmerican Top Team\n\nThe Bitcoin speech guy from UFC 300.\n723K on Instagram.\nLaw student. Libertarian.\n\nBUT: 2 straight losses.\nMakhachev (Sub R1) + Dariush (UD).\n3rd loss = top 5 ambitions over.', color: 'red' },
        { slide_number: 3, title: 'THE PROBLEM', content: '15-2 | 32 years old | Scotland\nAmerican Top Team\n\n4-fight win streak:\nOki Sub R1 (POTN)\nVucenic Sub R2\nRebecki UD (FOTN)\nMcKinney Sub R1\n\nFormer shepherd turned fighter.\nWears pendant in honor of his mother.\nNo trash talk. Just results.', color: 'blue' },
        { slide_number: 4, title: 'THE ATT FACTOR', content: 'SAME GYM.\nSame sparring partners.\nSame coaches.\n\nThey KNOW everything about each other.\nNo surprises. Just execution.\n\nThe question:\nWho adapts better in the octagon?\n\nThe 36-year-old veteran or the 32-year-old rising star?', color: 'gold' },
        { slide_number: 5, title: 'PREDICTION', content: 'DUNCAN by Submission R2-R3\n\nConfidence: MEDIUM\n57% Duncan / 40% Moicano\n\nDuncan pressures, takes it down\nand hunts the finish.\n\nBUT: if Moicano survives to R4,\nDuncan has never fought 5 rounds.\nExperience > Hype.', color: 'blue' },
      ],
      twitter: [
        { num: '1/5', text: 'Moicano vs Duncan Saturday at the Apex. The Bitcoin preacher on a 2-fight skid against the Scottish shepherd with 4 straight wins. SAME GYM. They know everything about each other. Thread:' },
        { num: '2/5', text: 'The stat nobody talks about: Duncan has NEVER fought 5 rounds. Never. Zero. The volume of 5.02 strikes per minute is unsustainable for 25 minutes. If Moicano survives to R4, the dynamics change completely.' },
        { num: '3/5', text: 'Moicano at +160 as an underdog has VALUE. He\'s a top 10 with 5-round experience, a UFC 300 veteran, against an unranked guy who has never fought anyone in the top 15. The odds are inflated. The market is paying for the hype.' },
        { num: '4/5', text: 'But Duncan\'s case is real: 3 subs in his last 4 UFC fights. 3.27 TDs per 15 min. Moicano only defends 62% of TDs. If Duncan gets it to the ground early and consistently, the submission could come fast. "The Problem" is real.' },
        { num: '5/5', text: 'Pick: Duncan by sub R2-R3, but Moicano ML +160 is the value bet of the card. The guy who told the world to read Ludwig von Mises with his back against the wall at 36? Respect the experience. Respect the chaos. Respect the Moicano.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: 'The guy grabbed the mic at UFC 300 and told the entire world to read Ludwig von Mises. It became a meme. It became a legend. But now Renato Moicano is 36, on a 2-fight skid, and facing the guy he trains with every day.' },
        { time: '10-25s', title: 'Duncan', text: 'Chris Duncan. Scottish shepherd. His mother was murdered on the day of his first fight\'s weigh-in. He fought the next day. He wears her pendant to this day. 4 straight UFC wins, 3 by sub. And this is the first 5-round main event of his career.' },
        { time: '25-40s', title: 'The Conflict', text: 'Both train at American Top Team. Same gym. Same sparring partners. They know EVERYTHING about each other. No surprises. Pure chess. The charismatic 36-year-old veteran vs the quiet 32-year-old rising star. Bitcoin vs pendant. Show vs substance.' },
        { time: '40-55s', title: 'The Analysis', text: 'Duncan pushes more volume: 5.02 strikes per minute. More active wrestling: 3.27 TDs. Moicano only defends 62% of TDs. BUT Duncan has never fought 5 rounds. NEVER. Cardio over 25 minutes is the biggest unknown of this entire fight. If Moicano survives R3, it becomes his territory.' },
        { time: '55-70s', title: 'Pick & CTA', text: 'Pick: Duncan by submission R2-R3. But Moicano at +160 is the value bet of the card. Now or never for Money Moicano. Drop your pick in the comments and check out the full analysis.' },
      ],
      tiktok: [
        { hook: 'The guy who told EVERYONE to read Ludwig von Mises at UFC 300 has his back against the wall.', body: 'Moicano. 36 years old. 2 straight losses. And now he faces Chris Duncan, the guy who TRAINS WITH HIM every day at ATT. Duncan: 4-fight win streak, 3 by submission. Scottish shepherd. Wears his murdered mother\'s pendant at every fight. This is his first 5-round main event. If Moicano loses, top 5 ambitions are done. If Duncan wins, he cracks the rankings.', cta: 'Who wins? Veteran or rising star? Comment!' },
        { hook: 'Duncan has NEVER fought 5 rounds. And this is his first main event.', body: 'Chris Duncan averages 5.02 significant strikes per minute. That\'s INSANE. But nobody knows if he can keep that up for 25 minutes. Moicano has been in multiple 5-round fights. If Duncan gasses in R4, the 36-year-old veteran eats him alive. If Duncan finishes before R3, the hype is confirmed.', cta: 'Can the cardio hold up or not? Comment!' },
        { hook: 'Moicano at +160 is the BEST bet on the card. And I\'m going to tell you why.', body: 'He\'s a top 10 lightweight. Experience against Makhachev, Aldo, Ortega. He\'s fought 5 rounds multiple times. Against an unranked guy who has never faced a top 15 and has never gone past 3 rounds. The odds are paying for Duncan\'s hype. Respect the veteran. Respect the +160.', cta: 'Would you bet on Moicano? Comment!' },
      ],
      headlines: [
        'Moicano vs Duncan: The Bitcoin Preacher With His Back Against the Wall',
        'Same Gym, Opposite Paths: The ATT Showdown That Could Define Careers',
        'Duncan Has Never Fought 5 Rounds. This Is His First Main Event.',
        'Now or Never: Moicano at 36 Against the New Generation',
        'From Scottish Pastures to the Main Event: The Chris Duncan Story',
        'Moicano at +160: Why the Market Might Be Wrong',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '+160',
        fighter2_odds: '-192',
        fighter1_name: 'Renato Moicano',
        fighter2_name: 'Chris Duncan',
        source: 'Average from DraftKings and FanDuel (March 2026)',
      },
      edges: [
        { icon: 'Activity', titulo: 'Duncan Has Never Fought 5 Rounds', stat_headline: 'ZERO 5-ROUND FIGHTS IN HIS CAREER. FIRST MAIN EVENT.', contexto: 'Duncan has never gone past 3 rounds. The volume of 5.02 SLpM is physically impossible to maintain for 25 minutes without adaptation. Nobody knows how his cardio holds up.', implicacao_aposta: 'Favors Over rounds and Moicano in long fights. If you believe the fight goes past R3, Moicano gains value.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Target', titulo: 'Duncan\'s Strike Volume', stat_headline: '5.02 SIGNIFICANT STRIKES PER MINUTE (TOP TIER LW)', contexto: 'Duncan pushes a LOT. The volume is consistent and comes with takedowns (3.27/15min). Moicano absorbs 3.57 SApM and only defends 62% of TDs.', implicacao_aposta: 'Favors Duncan by finish in the early rounds. Under may have value.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Brain', titulo: 'Moicano\'s Elite Experience', stat_headline: 'MOICANO HAS FACED MAKHACHEV, ALDO, ORTEGA, KOREAN ZOMBIE, DARIUSH', contexto: 'Duncan has never faced a top 15 opponent. Moicano has faced the elite of lightweight and featherweight. The experience gap in high-pressure moments is enormous.', implicacao_aposta: 'Favors Moicano in championship rounds and in long fights.', edge_level: 'moderado', fighter_side: 'fighter1' },
        { icon: 'Shield', titulo: 'Dual Submission Threat', stat_headline: 'MOICANO 8 CAREER SUBS (0.5/15MIN) + DUNCAN 6 SUBS (0.7/15MIN)', contexto: 'Both are real submission threats. If the fight hits the ground, it could turn into a jiu-jitsu chess match. Duncan more active lately (3 subs in 4 fights).', implicacao_aposta: 'Prop "fight ends by submission" may have value. Both hunt the finish on the ground.', edge_level: 'moderado', fighter_side: 'neutral' },
        { icon: 'MapPin', titulo: 'Gym Factor: ATT', stat_headline: 'THEY TRAIN TOGETHER. THEY KNOW EACH OTHER\'S GAME.', contexto: 'When training partners face each other, surprises are rare. The fight tends to be more tactical and less explosive. Both know what to expect.', implicacao_aposta: 'Favors Over rounds. No surprises = longer, more tactical fight.', edge_level: 'leve', fighter_side: 'neutral' },
      ],
      value_picks: [
        { tipo: 'Moneyline', pick: 'Moicano ML (+160)', odds: '+160', confianca: 'media', edge_vs_mercado: 'The market undervalues 5-round experience. Duncan has never been there. +160 pays well for the risk.', raciocinio: 'Moicano is a top 10 with elite experience against an unranked fighter who has never fought 5 rounds. The odds overstate the disadvantage. If the fight goes long, Moicano dominates.' },
        { tipo: 'Method', pick: 'Fight ends by Submission', odds: '+120', confianca: 'alta', raciocinio: 'Duncan has 3 subs in his last 4 UFC fights. Moicano has 8 career subs. Both hunt the ground. The probability of a sub is high regardless of who wins.' },
        { tipo: 'Over/Under', pick: 'Over 2.5 Rounds', odds: '-140', confianca: 'media', raciocinio: 'Moicano is hard to finish (10 of 20 wins by decision). Even under pressure, he tends to survive and push the fight to later rounds. The ATT factor (they know each other) favors caution.' },
        { tipo: 'Duration', pick: 'Duncan by Sub R1-R2', odds: '+280', confianca: 'baixa', raciocinio: 'If you believe in the Duncan hype, +280 pays BIG. 3 subs in 4 fights, active wrestling, against Moicano who defends 62% of TDs. The scenario exists, but the risk is high.' },
      ],
      armadilha: {
        titulo: 'Trap: Duncan by Decision',
        descricao: 'Duncan has only 2 decisions in 15 career wins (13%). He\'s a natural finisher. If he can\'t submit or knock out Moicano, he\'s probably losing the fight on the cards to the veteran. Betting on Duncan by decision goes against his ENTIRE history.',
      },
      disclaimer: 'Statistical analysis for informational purposes. Bet responsibly.',
    },
  },
};
