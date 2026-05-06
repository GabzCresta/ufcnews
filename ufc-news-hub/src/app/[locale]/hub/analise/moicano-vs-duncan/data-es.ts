import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'moicano-vs-duncan',
  evento_id: null,
  slug: 'moicano-vs-duncan',
  titulo: 'Moicano vs Duncan: Ahora o Nunca',
  subtitulo: 'El veterano de 36 anos con 2 derrotas seguidas contra la estrella escocesa en ascenso meteorico. Companeros de entrenamiento. Mismo gimnasio. Destinos opuestos.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,80m', envergadura: '183cm', idade: 36, academia: 'American Top Team' },
      fighter2: { altura: '1,78m', envergadura: '180cm', idade: 32, academia: 'American Top Team' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Sumision R2-R3',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Volumen de Golpes', edge: 'fighter2', impact: 7, description: 'Duncan conecta 5.02 golpes significativos por minuto contra 4.17 de Moicano. El escoces presiona mas.' },
      { factor: 'Experiencia en 5 Rounds', edge: 'fighter1', impact: 8, description: 'Moicano ya peleo 5 rounds varias veces. Duncan nunca. Los championship rounds son territorio del veterano.' },
      { factor: 'Amenaza de Takedown', edge: 'fighter2', impact: 7, description: 'Duncan promedia 3.27 TDs por 15 min contra 1.67 de Moicano. La defensa de TD de Moicano (62%) es vulnerable.' },
    ],
    xFactor: {
      title: 'Primer Main Event de 5 Rounds de Duncan',
      description: 'Duncan nunca peleo 5 rounds. Si Moicano sobrevive la tormenta inicial y lo lleva al R4-R5, la experiencia puede ser decisiva.',
    },
  },
  fighter1_info: {
    nome: 'Renato Moicano',
    apelido: 'Money Moicano',
    record: '20-7-1',
    ranking: '#10 Peso Ligero',
    ultimasLutas: [
      { result: 'L', opponent: 'Beneil Dariush', method: 'Decision Unanime', event: 'UFC 317' },
      { result: 'L', opponent: 'Islam Makhachev', method: 'Sumision R1', event: 'UFC 311' },
      { result: 'W', opponent: 'Benoit Saint Denis', method: 'Decision Unanime', event: 'UFC 310' },
    ],
  },
  fighter2_info: {
    nome: 'Chris Duncan',
    apelido: 'The Problem',
    record: '15-2-0',
    ranking: 'Sin Ranking',
    ultimasLutas: [
      { result: 'W', opponent: 'Terrance McKinney', method: 'Sumision R1', event: 'UFC 323' },
      { result: 'W', opponent: 'Mateusz Rebecki', method: 'Decision Unanime (FOTN)', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Jordan Vucenic', method: 'Sumision R2', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan',
  evento_data: '4 de Abril, 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Peso Ligero (155 lbs)',
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
      evento_data: '4 de Abril, 2026',
      evento_local: 'UFC Apex, Las Vegas',
      categoria_peso: 'Peso Ligero (155 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'Ahora o Nunca',
      tagline_sub: 'El predicador del Bitcoin con 2 derrotas seguidas contra el pastor escoces en ascenso meteorico. Mismo gimnasio. Caminos opuestos.',
      fighter1: {
        nome_completo: 'Renato "Money Moicano" Carneiro',
        apelido: 'Money Moicano',
        sobrenome: 'Moicano',
        record: '20-7-1',
        ranking: '#10 Peso Ligero',
        info_extra: 'Brasilia, Brasil | American Top Team | 36 anos',
        imagem_fullbody_url: '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-01%2F12%2FMOICANO_RENATO_L_09-28.png%3Fitok%3DaJ4kuhkB',
      },
      fighter2: {
        nome_completo: 'Chris "The Problem" Duncan',
        apelido: 'The Problem',
        sobrenome: 'Duncan',
        record: '15-2-0',
        ranking: 'Sin Ranking',
        info_extra: 'Alloa, Escocia | American Top Team | 32 anos',
        imagem_fullbody_url: '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2023-07%2FDUNCAN_CHRIS_L_07-22.png%3Fitok%3DHlQ_JCOr',
      },
    },

    narrativa: {
      html_content: `
        <!-- MOICANO: AHORA O NUNCA -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">El Predicador Contra las Cuerdas</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/5 via-transparent to-ufc-red/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-ufc-red/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                En UFC 300, <strong class="text-ufc-red">Moicano</strong> subio al octagono, vencio a Jalin Turner como perdedor de +200, tomo el microfono y solto: <em class="text-white/80">"Si no saben quien es Ludwig von Mises, no saben nada de economia. Lean, y compren Bitcoin."</em> Las MMA se detuvieron. Se convirtio en meme. Se convirtio en camiseta. El tipo se hizo mas famoso por el discurso que por la victoria. Ese es Renato Moicano: estudiante de Derecho, libertario, 723 mil seguidores en Instagram, el peleador mas carismatico del UFC. Pero el carisma no gana peleas.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/20 to-ufc-red/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Ene 2025</p>
                <p class="font-display text-2xl text-white mb-2">MAKHACHEV</p>
                <p class="text-xs text-white/50 leading-relaxed">Sumision R1. Islam ni sudo. Moicano acepto con poca antelacion y fue devorado por el mejor del mundo.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Pelea por el Titulo</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/20 to-ufc-red/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Jun 2025</p>
                <p class="font-display text-2xl text-white mb-2">DARIUSH</p>
                <p class="text-xs text-white/50 leading-relaxed">Decision Unanime. Pelea sin emociones. Moicano no logro imponer su juego. 2da derrota seguida.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Racha Negativa</div>
              </div>
            </div>
          </div>

          <div class="mt-8 text-center">
            <p class="font-display text-5xl md:text-6xl bg-gradient-to-b from-ufc-red/40 to-ufc-red/10 bg-clip-text text-transparent leading-none">2 derrotas seguidas</p>
            <div class="flex items-center justify-center gap-4 mt-3">
              <div class="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-white/10"></div>
              <p class="text-xs text-white/40">36 anos &middot; #10 LW &middot; Una 3ra derrota puede ser fatal</p>
              <div class="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-white/10"></div>
            </div>
            <p class="font-display text-lg text-white/70 mt-2 italic">"Ahora o nunca, Moicano."</p>
          </div>
        </div>

        <!-- DUNCAN: EL ASCENSO -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Del Campo Escoces al Main Event</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-blue-400">Duncan</strong> crecio en Alloa, Escocia. Trabajaba como pastor de ovejas. Lo llamaban "Podgy" (gordito) de nino. El dia del pesaje de su primera pelea profesional, su madre fue asesinada. Peleo al dia siguiente. Lleva un colgante en su honor hasta hoy, en cada pesaje, en cada pelea. Chris Duncan no habla de tragedia para ganar simpatia. Pelea porque pelear es lo unico que tiene sentido desde aquel dia.
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
                <p class="text-xs text-white/50 leading-relaxed">Sumision R2. Mostro su juego en el suelo.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">Sub Finish</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">2025</p>
                <p class="font-display text-2xl text-white mb-2">REBECKI</p>
                <p class="text-xs text-white/50 leading-relaxed">Decision Unanime. Bonus FOTN. Guerra de 3 rounds.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">FOTN</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Dic 2025</p>
                <p class="font-display text-2xl text-white mb-2">McKINNEY</p>
                <p class="text-xs text-white/50 leading-relaxed">Sumision R1. Rapido y letal.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">Sub R1</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">2024</p>
                <p class="font-display text-2xl text-white mb-2">OKI</p>
                <p class="text-xs text-white/50 leading-relaxed">Sumision R1. Bonus POTN. Dominio total.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">POTN</div>
              </div>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/8 via-amber-500/4 to-amber-500/8"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div class="relative p-5 text-center">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">4 victorias seguidas</p>
              <p class="text-sm text-white/60">Todas impresionantes. <strong class="text-amber-400">Primer main event de 5 rounds</strong> de su carrera. La incognita del cardio.</p>
            </div>
          </div>
        </div>

        <!-- BASTIDORES: EL FACTOR ATT -->
        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">El Elefante en la Habitacion: Mismo Gimnasio</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">American Top Team</p>
                <p class="text-sm text-white/60 leading-relaxed">Ambos entrenan en ATT. Han hecho sparring juntos. Conocen el juego del otro al dedillo. Eso elimina las sorpresas y convierte la pelea en ajedrez puro.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-ufc-red/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-ufc-red rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-ufc-red mb-2">Moicano: el carisma viral</p>
                <p class="text-sm text-white/60 leading-relaxed">El discurso de Ludwig von Mises en UFC 300. Estudiante de Derecho. Libertario. Bitcoin. 723K en Instagram. El tipo que todos quieren ver hablar en el microfono.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Duncan: determinacion silenciosa</p>
                <p class="text-sm text-white/60 leading-relaxed">Sin trash talk. Sin show. Lleva el colgante de su madre en cada pelea. Dejo Escocia para ser el mejor. Su motivacion no viene de los likes, viene de algo mucho mas profundo.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Pasando la Antorcha?</p>
                <p class="text-sm text-white/60 leading-relaxed">Veterano de 36 anos en declive vs estrella de 32 en ascenso. Si Duncan gana, entra al ranking. Si Moicano pierde, las conversaciones sobre el retiro comienzan.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: '#10 Peso Ligero', fighter2: 'Sin Ranking' },
        { dimensao: 'Racha', fighter1: '2 derrotas seguidas', fighter2: '4 victorias seguidas' },
        { dimensao: 'Narrativa', fighter1: 'Evitar la 3ra derrota seguida a los 36', fighter2: 'Entrar al ranking con victoria sobre un top 10' },
        { dimensao: 'Riesgo', fighter1: 'La 3ra derrota puede terminar las ambiciones de top 5', fighter2: 'Perder la oportunidad dorada contra un veterano en baja' },
        { dimensao: 'Recompensa', fighter1: 'Demostrar que sigue siendo relevante en la cima', fighter2: 'Mayor victoria de su carrera, entrada al top 15' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'EL VETERANO RESISTE',
          subtitulo: 'Moicano demuestra que la experiencia en 5 rounds es el gran diferencial y frena la caida',
          consequencias: [
            { tag: 'RANKING', texto: 'Moicano se mantiene en el top 10 y respira en el ranking. La narrativa de declive se frena.' },
            { tag: 'NARRATIVA', texto: 'Demuestra que las 2 derrotas fueron contra la elite (campeon y top 10) y que contra "el resto" sigue dominando.' },
            { tag: 'PROXIMA', texto: 'Pelea contra un top 7-12 como Dustin Poirier, Dan Hooker o Michael Chandler.' },
          ],
          proxima_luta: 'Moicano vs top 7-12 LW (Poirier, Hooker o Chandler)',
        },
        fighter2_vence: {
          titulo: 'THE PROBLEM LLEGA AL RANKING',
          subtitulo: 'Duncan confirma que es el futuro del peso ligero con victoria dominante sobre veterano ranqueado',
          consequencias: [
            { tag: 'ASCENSO', texto: 'Duncan entra al top 15 con la mayor victoria de su carrera en UFC' },
            { tag: 'HYPE', texto: 'El ascenso meteorico gana combustible. 5 victorias en 6 peleas UFC. La comunidad MMA presta atencion.' },
            { tag: 'MOICANO', texto: 'Una 3ra derrota seguida a los 36 anos levanta preguntas serias sobre el futuro de Moicano en la cima de la division.' },
          ],
          proxima_luta: 'Duncan vs top 10-15 LW (Bobby Green, Paddy Pimblett o Mateusz Gamrot)',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Renato Moicano',
        color: 'red',
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Beneil Dariush', result: 'L', method: 'Decision Unanime', opponent_rank: '#9 LW', quality_score: 3, quality_label: 'Bueno', note: 'Pelea sin emociones. Moicano no logro imponer su juego. Dariush controlo el ritmo y gano en las tarjetas.' },
          { date: 'Ene 2025', opponent: 'Islam Makhachev', result: 'L', method: 'Sumision R1', opponent_rank: 'Campeon', quality_score: 5, quality_label: 'Excelente', note: 'Acepto con poca antelacion por el titulo. Islam lo sometio rapido. No hay deshonra en perder contra el mejor del mundo.' },
          { date: 'Dic 2024', opponent: 'Benoit Saint Denis', result: 'W', method: 'Decision Unanime', opponent_rank: '#12 LW', quality_score: 3, quality_label: 'Bueno', note: 'Victoria solida. Controlo la distancia y gano en las tarjetas.' },
          { date: 'Abr 2024', opponent: 'Jalin Turner', result: 'W', method: 'Decision Unanime', opponent_rank: '#11 LW', quality_score: 3, quality_label: 'Bueno', note: 'UFC 300. Perdedor de +200 y gano. Despues vino el discurso viral de Ludwig von Mises y Bitcoin.' },
          { date: 'Nov 2023', opponent: 'Drew Dober', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Victoria comoda por puntos. Dober es un gatekeeper solido.' },
        ],
        full_fight_history: [
          { date: 'Ago 2014', opponent: 'Zubaira Tukhugov', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Debut UFC, derrota' },
          { date: 'Nov 2015', opponent: 'Tom Niinimaki', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Malo', note: 'Primera victoria UFC' },
          { date: 'May 2016', opponent: 'Zubaira Tukhugov', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Revancha, victoria por puntos' },
          { date: 'Sep 2016', opponent: 'Alex Oliveira', result: 'D', method: 'SD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Empate' },
          { date: 'Feb 2017', opponent: 'Jeremy Stephens', result: 'W', method: 'UD', opponent_rank: '#6 FW', quality_score: 3, quality_label: 'Bueno', note: 'Victoria solida contra ranqueado' },
          { date: 'Jun 2017', opponent: 'Brian Ortega', result: 'L', method: 'Sub R3', opponent_rank: '#4 FW', quality_score: 4, quality_label: 'Muy Bueno', note: 'Derrota ante futuro retador al titulo' },
          { date: 'Feb 2018', opponent: 'Calvin Kattar', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Victoria por puntos' },
          { date: 'Dic 2018', opponent: 'Mirsad Bektic', result: 'W', method: 'UD', opponent_rank: '#10 FW', quality_score: 3, quality_label: 'Bueno', note: 'Victoria contra ranqueado' },
          { date: 'Feb 2019', opponent: 'Jose Aldo', result: 'L', method: 'KO R2', opponent_rank: '#3 FW', quality_score: 5, quality_label: 'Excelente', note: 'Noqueado por la leyenda' },
          { date: 'Jun 2019', opponent: 'Korean Zombie', result: 'L', method: 'KO R1', opponent_rank: '#4 FW', quality_score: 4, quality_label: 'Muy Bueno', note: 'Nocaut rapido' },
          { date: 'Mar 2020', opponent: 'Damir Hadzovic', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Malo', note: 'Subio a LW, sumision rapida' },
          { date: 'Feb 2022', opponent: 'Alexander Hernandez', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Finalizacion en el suelo' },
          { date: 'Jul 2022', opponent: 'Brad Riddell', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Victoria por puntos' },
          { date: 'Nov 2023', opponent: 'Drew Dober', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Victoria comoda' },
          { date: 'Abr 2024', opponent: 'Jalin Turner', result: 'W', method: 'UD', opponent_rank: '#11 LW', quality_score: 3, quality_label: 'Bueno', note: 'UFC 300, discurso viral' },
          { date: 'Dic 2024', opponent: 'Benoit Saint Denis', result: 'W', method: 'UD', opponent_rank: '#12 LW', quality_score: 3, quality_label: 'Bueno', note: 'UFC 310' },
          { date: 'Ene 2025', opponent: 'Islam Makhachev', result: 'L', method: 'Sub R1', opponent_rank: 'Campeon', quality_score: 5, quality_label: 'Excelente', note: 'Poca antelacion, titulo' },
          { date: 'Jun 2025', opponent: 'Beneil Dariush', result: 'L', method: 'UD', opponent_rank: '#9 LW', quality_score: 3, quality_label: 'Bueno', note: 'Pelea sin emociones' },
        ],
        momentum_score: 4,
        momentum_label: 'En Recuperacion',
        momentum_trend: 'descending',
        momentum_note: 'Moicano viene de 2 derrotas seguidas, pero con contexto: la primera fue contra el campeon mundial con poca antelacion (Islam Makhachev), y la segunda contra el veterano Dariush. Antes de eso, una racha de 5 victorias que incluyo el iconico UFC 300. A los 36 anos, la ventana se esta cerrando. Una 3ra derrota seria devastadora para su ranking y narrativa. Pero Moicano es el tipo de peleador que sabe reinventarse.',
      },
      fighter2: {
        nome: 'Chris Duncan',
        color: 'blue',
        recent_fights: [
          { date: 'Dic 2025', opponent: 'Terrance McKinney', result: 'W', method: 'Sumision R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Finalizo rapido en UFC 323. Mostro que el jiu-jitsu esta afilado.' },
          { date: 'Ago 2025', opponent: 'Mateusz Rebecki', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Bonus FOTN. Guerra de 3 rounds con mucho volumen. Mostro cardio y corazon.' },
          { date: 'Abr 2025', opponent: 'Jordan Vucenic', result: 'W', method: 'Sumision R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Otra sumision. El grappling es el diferencial.' },
          { date: 'Nov 2024', opponent: 'Bolaji Oki', result: 'W', method: 'Sumision R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Malo', note: 'Bonus POTN. Dominio total desde el primer segundo.' },
          { date: 'Feb 2024', opponent: 'Manuel Torres', result: 'L', method: 'Sumision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Unica derrota en UFC. Fue sometido. La debilidad es ser atrapado en el suelo cuando esta por debajo.' },
        ],
        full_fight_history: [
          { date: 'Mar 2023', opponent: 'Omar Morales', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Malo', note: 'Debut UFC, victoria solida' },
          { date: 'Jul 2023', opponent: 'Chepe Mariscal', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Malo', note: 'Nocaut rapido' },
          { date: 'Feb 2024', opponent: 'Manuel Torres', result: 'L', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Unica derrota UFC' },
          { date: 'Nov 2024', opponent: 'Bolaji Oki', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Malo', note: 'POTN' },
          { date: 'Abr 2025', opponent: 'Jordan Vucenic', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Sub finish' },
          { date: 'Ago 2025', opponent: 'Mateusz Rebecki', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'FOTN' },
          { date: 'Dic 2025', opponent: 'Terrance McKinney', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'UFC 323' },
        ],
        momentum_score: 8,
        momentum_label: 'En Llamas',
        momentum_trend: 'ascending',
        momentum_note: 'Duncan esta en el mejor momento de su carrera. 4 victorias seguidas en UFC, todas impresionantes, con bonos POTN y FOTN. El hype es real. Pero la calidad de oponentes sigue siendo cuestionable: ningun ranqueado, ningun top 15. Moicano es un salto ENORME de calidad. Esta es la prueba real. Su primer main event de 5 rounds agrega otra capa de incognita.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Moicano',
        media_oponentes: 3,
        media_oponentes_label: 'Bueno',
        aproveitamento: '12W-7L (63%)',
        contra_top5: '0W-3L',
      },
      fighter2: {
        nome: 'Duncan',
        media_oponentes: 2,
        media_oponentes_label: 'Regular',
        aproveitamento: '6W-1L (86%)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'No hay oponentes en comun en UFC, pero ambos entrenan juntos en American Top Team. Eso vale mas que cualquier oponente en comun: literalmente conocen los habitos, las fortalezas y las debilidades del otro. Moicano ha enfrentado competencia significativamente mas fuerte (Makhachev, Aldo, Ortega, Dariush). Duncan aun no ha peleado contra nadie ranqueado.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Golpes Sig. por Minuto', valueA: 4.17, valueB: 5.02, maxVal: 7, format: 'decimal', note: 'Duncan tiene volumen superior. Presiona mas y lanza mas golpes.' },
        { label: 'Precision de Golpes (%)', valueA: 48, valueB: 46, maxVal: 100, format: 'percent', note: 'Precision muy parecida. Moicano con leve ventaja.' },
        { label: 'Golpes Absorbidos/Min', valueA: 3.57, valueB: 4.82, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Duncan absorbe MUCHO mas. El estilo agresivo cobra un precio. Moicano es mas cauteloso.' },
        { label: 'Defensa de Golpes (%)', valueA: 59, valueB: 51, maxVal: 100, format: 'percent', note: 'Moicano defiende mejor. Duncan recibe mas para dar mas.' },
        { label: 'Takedowns por 15 Min', valueA: 1.67, valueB: 3.27, maxVal: 5, format: 'decimal', note: 'Duncan intenta casi el doble de takedowns. El wrestling es parte central de su juego.' },
        { label: 'Precision de Takedown (%)', valueA: 41, valueB: 42, maxVal: 100, format: 'percent', note: 'Precision de TD practicamente identica.' },
        { label: 'Defensa de Takedown (%)', valueA: 62, valueB: 50, maxVal: 100, format: 'percent', note: 'Moicano defiende TDs mejor, pero 62% no es elite. Vulnerable.' },
        { label: 'Sumisiones por 15 Min', valueA: 0.5, valueB: 0.7, maxVal: 3, format: 'decimal', note: 'Ambos son amenazas de sumision. Potencial ajedrez en el suelo.' },
      ],
      tale_of_tape: [
        { label: 'Edad', fighter1: '36 anos', fighter2: '32 anos', note: 'Moicano 4 anos mayor' },
        { label: 'Altura', fighter1: '1,80m (5\'11")', fighter2: '1,78m (5\'10")', note: 'Practicamente la misma altura' },
        { label: 'Envergadura', fighter1: '183cm (72")', fighter2: '180cm (71")', note: 'Moicano con leve ventaja de 1 pulgada' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo', note: 'Ambos ortodoxos' },
        { label: 'Gimnasio', fighter1: 'American Top Team', fighter2: 'American Top Team', note: 'MISMO GYM. Entrenan juntos. Conocen todo del otro.' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking en Pie', valueA: 72, valueB: 70, labelA: 'Bueno', labelB: 'Bueno', advantage: 'even', advantage_note: 'Moicano es tecnico y preciso (48% acc). Duncan tiene mas volumen (5.02 SLpM) pero absorbe demasiado (4.82 SApM). Estilos diferentes, nivel parecido en pie.' },
        { label: 'Wrestling Ofensivo', valueA: 60, valueB: 75, labelA: 'Bueno', labelB: 'Muy Bueno', advantage: 'fighter2', advantage_note: 'Duncan promedia 3.27 TDs por 15 min, casi el doble de Moicano (1.67). El escoces es mas activo en el wrestling y lo usa para crear transiciones al suelo.' },
        { label: 'Jiu-Jitsu / Sumisiones', valueA: 70, valueB: 75, labelA: 'Bueno', labelB: 'Muy Bueno', advantage: 'fighter2', advantage_note: 'Duncan tiene 6 sumisiones en carrera (40% de victorias), incluyendo 3 en UFC reciente. Moicano tiene 8 subs totales (4 en UFC). Ambos peligrosos, pero Duncan esta mas activo en el juego de sumision ultimamente.' },
        { label: 'Defensa y Durabilidad', valueA: 68, valueB: 55, labelA: 'Bueno', labelB: 'Bueno', advantage: 'fighter1', advantage_note: 'Moicano defiende 59% de golpes y 62% de TDs. Duncan absorbe demasiado (4.82 SApM) y solo defiende 51% de golpes. Duncan tambien solo defiende 50% de TDs.' },
        { label: 'Cardio y Tanque', valueA: 75, valueB: 58, labelA: 'Muy Bueno', labelB: 'Bueno', advantage: 'fighter1', advantage_note: 'Moicano ya peleo 5 rounds y tiene experiencia en main events largos. Duncan NUNCA peleo 5 rounds. La mayor incognita de la pelea. Si llega al R4-R5, nadie sabe como reaccionara Duncan.' },
        { label: 'Experiencia de Elite', valueA: 80, valueB: 45, labelA: 'Muy Bueno', labelB: 'Regular', advantage: 'fighter1', advantage_note: 'Moicano enfrento a Makhachev, Aldo, Ortega, Korean Zombie, Dariush. Duncan nunca enfrento a un ranqueado. La diferencia de experiencia es enorme.' },
      ],
      insight: 'Los dos son completos con buen jiu-jitsu, pero con estilos opuestos. Moicano es mas tecnico y cauteloso, con mejor defensa y experiencia de elite. Duncan es mas explosivo y agresivo, con wrestling superior y alto volumen. La pelea se decidira por: Duncan logra imponer el ritmo alto y llevarla al suelo, o Moicano logra controlar la distancia y hacer que Duncan gaste combustible en los primeros 3 rounds?',
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
      insight: 'Los perfiles de finalizacion cuentan historias muy diferentes. Moicano es equilibrado entre sumision (40%) y decision (40%), con pocos KOs (20%). En UFC, 10 de 12 victorias fueron por decision. Duncan es finalizador nato: 87% de victorias por finish (47% KO + 40% sub) y solo 2 decisiones en 15 victorias. Si la pelea se alarga, favorece a Moicano. Si Duncan logra imponer su juego temprano, va por el finish.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 8,
          danger_label: 'VENTAJA DUNCAN',
          color: 'green',
          title: 'Territorio de Duncan',
          description: 'Duncan es mas peligroso en R1. Volumen de 5.02 SLpM, la mayoria de sus finalizaciones en R1, y la explosividad de quien esta en su mejor momento fisico. Moicano necesita sobrevivir la tormenta inicial sin ser derribado. Si Duncan conecta un takedown temprano y transiciona al suelo, la sumision puede venir rapido.',
        },
        {
          rounds: 'R2-R3',
          danger_level: 6,
          danger_label: 'EQUILIBRADO',
          color: 'gold',
          title: 'Rounds de Transicion',
          description: 'Si Moicano sobrevive el R1, los rounds 2 y 3 son donde la experiencia comienza a pesar. Duncan todavia tiene gas, pero el ritmo de 5.02 golpes por minuto no es sostenible por mucho tiempo. Moicano puede empezar a encontrar el timing y contragolpear. El grappling puede ir para cualquier lado: ambos son amenazas de sumision.',
        },
        {
          rounds: 'R4-R5',
          danger_level: 4,
          danger_label: 'VENTAJA MOICANO',
          color: 'red',
          title: 'Championship Rounds',
          description: 'Territorio completamente desconocido para Duncan. NUNCA peleo 5 rounds. Moicano ya estuvo en esta situacion varias veces. Si llega aqui, la experiencia, el fight IQ y el ritmo controlado del veterano deberian dominar. Duncan puede estar agotado por el alto volumen de los rounds anteriores.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'MapPin', title: 'Mismo Gimnasio: American Top Team', fighter: 'Ambos', risk_level: 'NEUTRO', risk_color: 'neutral', description: 'Ambos entrenan en ATT. Han hecho sparring juntos. Conocen las fortalezas y debilidades del otro. Eso elimina el elemento sorpresa y convierte la pelea en ajedrez puro. Quien adapta mejor el plan de juego el dia de la pelea?' },
        { icon: 'Clock', title: 'Edad: 36 Anos', fighter: 'Moicano', risk_level: 'RIESGO MEDIO', risk_color: 'yellow', description: 'Moicano tiene 36 anos y viene de 2 derrotas seguidas. La recuperacion entre peleas ya no es la misma. Los reflejos disminuyen. Contra un tipo de 32 en su mejor momento fisico, cada ano pesa.' },
        { icon: 'Activity', title: 'Primer Main Event de 5 Rounds', fighter: 'Duncan', risk_level: 'RIESGO ALTO', risk_color: 'red', description: 'Duncan NUNCA peleo 5 rounds. Todas sus peleas fueron de 3 rounds. El cardio en 25 minutos es completamente desconocido. El volumen de 5.02 golpes por minuto es insostenible por 5 rounds. Algo tiene que ceder.' },
        { icon: 'TrendingUp', title: 'Momentum de 4 Victorias', fighter: 'Duncan', risk_level: 'POSITIVO', risk_color: 'green', description: 'Duncan viene de 4 victorias seguidas con bonos POTN y FOTN. La confianza esta en su maximo. Cada pelea parece mejor que la anterior. El tipo esta evolucionando en tiempo real.' },
        { icon: 'Brain', title: 'Mentalidad "Nada que Perder"', fighter: 'Moicano', risk_level: 'POSITIVO', risk_color: 'green', description: 'Moicano ya peleo por el titulo, ya dio el discurso viral, ya vivio la cima. Con las espaldas contra la pared a los 36, puede pelear con la libertad de quien no tiene mas nada que proteger. Un Moicano "suelto" puede ser peligroso.' },
        { icon: 'Shield', title: 'Colgante de la Madre', fighter: 'Duncan', risk_level: 'ENORME POSITIVO', risk_color: 'green', description: 'Duncan pelea con el colgante en honor a su madre asesinada. No es sentimentalismo. Es motivacion profunda, el tipo que no se acaba cuando el cardio falla. El hombre paso por lo peor de la vida y sigue peleando.' },
        { icon: 'Target', title: 'Defensa de TD Vulnerable', fighter: 'Moicano', risk_level: 'RIESGO MEDIO', risk_color: 'yellow', description: 'Moicano defiende apenas 62% de los takedowns. Contra el wrestling de Duncan (3.27 TDs por 15 min), eso es un problema. Si Duncan logra llevarlo al suelo consistentemente, puede controlar toda la pelea.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Moicano',
        total_probability: 40,
        scenarios: [
          { name: 'La Maraton del Veterano', probability: 22, method: 'Decision Unanime', description: 'Moicano sobrevive el R1, controla la distancia con el jab, y hace que Duncan gaste el gas temprano. En los championship rounds (R4-R5), la experiencia domina. Duncan nunca peleo 5 rounds y se desmorona. Moicano gana en las tarjetas con control y fight IQ.' },
          { name: 'Sumision del Veterano', probability: 10, method: 'Sumision R3-R4', description: 'Moicano espera que Duncan se canse y busca el takedown. En el suelo, un Duncan agotado comete un error y Moicano encaja una guillotina o un RNC. La experiencia en grappling habla mas fuerte cuando el oponente esta cansado.' },
          { name: 'Contragolpe Limpio', probability: 8, method: 'TKO R2-R3', description: 'Duncan entra agresivo como siempre y Moicano encaja un contragolpe preciso que lo dana. El alto volumen de Duncan deja huecos defensivos. Si Moicano encuentra el timing, puede danar y buscar el finish.' },
        ],
      },
      fighter2: {
        nome: 'Duncan',
        total_probability: 57,
        scenarios: [
          { name: 'Tormenta Escocesa', probability: 25, method: 'Sumision R1-R2', description: 'Duncan presiona desde el primer segundo, conecta un takedown temprano y transiciona al back take o arm triangle. En el suelo, el grappling de Duncan es mas agresivo y moderno. Moicano no logra levantarse y Duncan finaliza por sumision.' },
          { name: 'Volumen y Presion', probability: 18, method: 'Decision Unanime', description: 'Duncan mantiene el ritmo alto los 5 rounds (improbable pero posible). El volumen de 5.02 golpes/min combinado con takedowns constantes domina a Moicano en las tarjetas. Duncan demuestra que el cardio aguanta el main event.' },
          { name: 'TKO por Acumulacion', probability: 14, method: 'TKO R2-R3', description: 'El alto volumen de Duncan acumula dano. Moicano absorbe 3.57 golpes/min y empieza a desacelerar. Duncan lo siente y aumenta la presion, combinando golpes y takedowns hasta que el arbitro detiene la pelea.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Chris Duncan',
      winner_side: 'fighter2',
      predicted_method: 'Sumision R2-R3',
      confidence_score: 5,
      confidence_label: 'MEDIA',
      explanation: 'Esta pelea es mucho mas equilibrada de lo que sugieren las cuotas, pero Duncan merece ser leve favorito. El escoces tiene volumen superior, wrestling mas activo, y sumisiones mas frecuentes. La combinacion de presion, takedowns y amenaza de sumision puede ser demasiado para Moicano, especialmente con la defensa de TD de apenas 62%. El escenario mas probable: Duncan presiona en los primeros rounds, conecta takedowns y eventualmente encuentra la sumision. SIN EMBARGO: si Moicano sobrevive hasta el R4, la dinamica cambia completamente. Duncan NUNCA peleo 5 rounds y el volumen de 5.02 SLpM es insostenible por 25 minutos. La experiencia de Moicano en championship rounds es el comodin de esta pelea. Es el clasico "quien impone el ritmo" decide.',
      x_factor: {
        title: 'Los 5 Rounds que Duncan Nunca Peleo',
        description: 'Duncan nunca paso de 3 rounds. Nadie sabe que pasa con su cardio en 25 minutos manteniendo 5.02 golpes por minuto. Si se cansa, Moicano es exactamente el tipo de peleador que capitaliza: tecnico, paciente, y peligroso cuando siente debilidad. Este es el factor X que puede voltear la pelea para el veterano.',
      },
      upset_alert: {
        title: 'Moicano Veterano de Championship Rounds',
        description: 'Si Moicano sobrevive los primeros 2-3 rounds sin ser finalizado, puede voltear la pelea completamente en R4-R5. Duncan estara en territorio desconocido, posiblemente cansado, contra un veterano que ya estuvo ahi docenas de veces. La sorpresa no es improbable. Moicano a +160 tiene valor real.',
      },
      probabilities: {
        fighter1: { nome: 'Moicano', percent: 40 },
        fighter2: { nome: 'Duncan', percent: 57 },
        draw: 3,
      },
      value_picks: {
        moneyline: { pick: 'Moicano (+160)', reasoning: 'El perdedor tiene valor real. Moicano es un top 10 con experiencia de elite en 5 rounds contra alguien que nunca peleo mas de 3. Si la pelea es larga, +160 paga muy bien.' },
        method: { pick: 'Duncan por Sumision (+180)', reasoning: 'Duncan tiene 3 sumisiones en sus ultimas 4 peleas UFC. Moicano fue sometido por Makhachev y por Ortega. El escenario es real y las cuotas pagan bien.' },
        over_under: { pick: 'Over 2.5 Rounds', rounds: 2.5, reasoning: 'Moicano es dificil de finalizar (10 decisiones en 20 victorias) y sabe sobrevivir. Duncan puede presionar temprano pero puede no conseguir el finish rapido. Over 2.5 es la apuesta mas segura.' },
        best_value: 'Moicano ML (+160) es la mejor apuesta de valor. Un top 10 veterano con experiencia de 5 rounds contra un tipo que nunca paso de 3 rounds. Las cuotas exageran la ventaja de Duncan.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Los Primeros 2 Takedowns de Duncan', icon: 'Target', description: 'Si Duncan conecta takedowns en los primeros 5 minutos y logra controlar a Moicano en el suelo, el plan de juego esta funcionando. Si Moicano defiende y mantiene en pie, Duncan tendra que replantear todo.' },
        { num: 2, title: 'El Ritmo de Moicano en R1', icon: 'Brain', description: 'Observa si Moicano esta intentando dictar un ritmo lento y tecnico o si esta siendo forzado a pelear al ritmo de Duncan. Si Moicano contragolpea con calma, esta comodo. Si retrocede y absorbe, problema.' },
        { num: 3, title: 'El Tanque de Duncan en R3', icon: 'Activity', description: 'El round mas importante de la pelea puede ser el tercero. Duncan puede mantener 5.02 golpes por minuto por 15 minutos? Si el ritmo cae visiblemente en R3, Moicano sabe que los championship rounds son suyos.' },
        { num: 4, title: 'Quien Controla el Suelo', icon: 'Shield', description: 'Cuando la pelea vaya al suelo (y VA a ir), observa quien esta en control. Ambos son amenazas de sumision. Si Duncan esta arriba controlando, domina. Si Moicano amenaza desde abajo, puede sorprender.' },
        { num: 5, title: 'El Lenguaje Corporal en R4', icon: 'Zap', description: 'Si Duncan llega al R4 luciendo fresco, Moicano esta en serios problemas. Si Duncan esta apoyado en la reja recuperando el aliento entre intercambios, es senal de que la experiencia de 5 rounds del veterano va a decidir.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'MOICANO VS DUNCAN', content: 'UFC FIGHT NIGHT\nApex, Las Vegas | 4 de Abril\n5 Rounds | Peso Ligero\n\n20-7-1 vs 15-2\nVeterano en declive vs Estrella en ascenso\nMISMO GYM. Destinos opuestos.\n\nAhora o nunca.', color: 'gold' },
        { slide_number: 2, title: 'MONEY MOICANO', content: '#10 Peso Ligero | 36 anos\nAmerican Top Team\n\nEl tipo del discurso de Bitcoin en UFC 300.\n723K en Instagram.\nEstudiante de Derecho. Libertario.\n\nPERO: 2 derrotas seguidas.\nMakhachev (Sub R1) + Dariush (UD).\n3ra derrota = fin de ambiciones top 5.', color: 'red' },
        { slide_number: 3, title: 'THE PROBLEM', content: '15-2 | 32 anos | Escocia\nAmerican Top Team\n\n4 victorias seguidas:\nOki Sub R1 (POTN)\nVucenic Sub R2\nRebecki UD (FOTN)\nMcKinney Sub R1\n\nPastor de ovejas convertido en peleador.\nLleva colgante en honor a su madre.\nSin trash talk. Solo resultados.', color: 'blue' },
        { slide_number: 4, title: 'EL FACTOR ATT', content: 'MISMO GYM.\nMismos sparrings.\nMismos coaches.\n\nSABEN todo del otro.\nSin sorpresas. Solo ejecucion.\n\nLa pregunta:\nQuien se adapta mejor en el octagono?\n\nEl veterano de 36 o la estrella de 32?', color: 'gold' },
        { slide_number: 5, title: 'PREDICCION', content: 'DUNCAN por Sumision R2-R3\n\nConfianza: MEDIA\n57% Duncan / 40% Moicano\n\nDuncan presiona, lo lleva al suelo\ny busca el finish.\n\nPERO: si Moicano sobrevive al R4,\nDuncan nunca peleo 5 rounds.\nExperiencia > Hype.', color: 'blue' },
      ],
      twitter: [
        { num: '1/5', text: 'Moicano vs Duncan el sabado en el Apex. El predicador del Bitcoin con 2 derrotas seguidas contra el pastor escoces con 4 victorias. MISMO GYM. Conocen todo del otro. Hilo:' },
        { num: '2/5', text: 'El dato que nadie menciona: Duncan NUNCA peleo 5 rounds. Nunca. Cero. El volumen de 5.02 golpes por minuto es insostenible por 25 minutos. Si Moicano sobrevive al R4, la dinamica cambia completamente.' },
        { num: '3/5', text: 'Moicano a +160 como perdedor tiene VALOR. Es un top 10 con experiencia en 5 rounds, veterano de UFC 300, contra un tipo sin ranking que nunca enfrento a nadie del top 15. Las cuotas exageran. El mercado paga por el hype.' },
        { num: '4/5', text: 'Pero el escenario de Duncan es real: 3 subs en las ultimas 4 peleas. 3.27 TDs por 15 min. Moicano defiende solo 62% de TDs. Si Duncan lo lleva al suelo temprano y consistente, la sumision puede venir rapido. "The Problem" es real.' },
        { num: '5/5', text: 'Pick: Duncan por sub R2-R3, pero Moicano ML +160 es la apuesta de valor del card. El tipo que mando leer Ludwig von Mises con la espalda contra la pared a los 36? Respeten la experiencia. Respeten el caos. Respeten al Moicano.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: 'El tipo tomo el microfono en UFC 300 y le dijo al mundo entero que leyera a Ludwig von Mises. Se convirtio en meme. Se convirtio en leyenda. Pero ahora Renato Moicano tiene 36 anos, 2 derrotas seguidas, y enfrenta al tipo con el que entrena todos los dias.' },
        { time: '10-25s', title: 'Duncan', text: 'Chris Duncan. Pastor de ovejas escoces. Su madre fue asesinada el dia del pesaje de su primera pelea. Peleo al dia siguiente. Lleva su colgante hasta hoy. 4 victorias seguidas en UFC, 3 por sumision. Y este es el primer main event de 5 rounds de su carrera.' },
        { time: '25-40s', title: 'El Conflicto', text: 'Ambos entrenan en American Top Team. Mismo gimnasio. Mismos sparrings. Conocen TODO del otro. Sin sorpresas. Ajedrez puro. El veterano carismatico de 36 contra la estrella silenciosa de 32. Bitcoin vs colgante. Show vs sustancia.' },
        { time: '40-55s', title: 'El Analisis', text: 'Duncan presiona mas: 5.02 golpes por minuto. Wrestling mas activo: 3.27 TDs. Moicano defiende solo 62% de TDs. PERO Duncan nunca peleo 5 rounds. NUNCA. El cardio en 25 minutos es la mayor incognita de toda esta pelea. Si Moicano sobrevive el R3, se vuelve su territorio.' },
        { time: '55-70s', title: 'Pick y CTA', text: 'Pick: Duncan por sumision R2-R3. Pero Moicano a +160 es la apuesta de valor del card. Ahora o nunca para Money Moicano. Comenta quien crees que gana y ve el analisis completo.' },
      ],
      tiktok: [
        { hook: 'El tipo que le dijo a TODO EL MUNDO que leyera a Ludwig von Mises en UFC 300 tiene la espalda contra la pared.', body: 'Moicano. 36 anos. 2 derrotas seguidas. Y ahora enfrenta a Chris Duncan, el tipo que ENTRENA CON EL todos los dias en la ATT. Duncan: 4 victorias seguidas, 3 por sumision. Pastor de ovejas escoces. Lleva el colgante de su madre asesinada en cada pelea. Y es su primer main event de 5 rounds. Si Moicano pierde, se acabaron las ambiciones de top 5. Si Duncan gana, entra al ranking.', cta: 'Quien gana? Veterano o estrella? Comenta!' },
        { hook: 'Duncan NUNCA peleo 5 rounds. Y este es su primer main event.', body: 'Chris Duncan promedia 5.02 golpes significativos por minuto. Eso es LOCURA. Pero nadie sabe si puede mantener eso por 25 minutos. Moicano ya estuvo en varias peleas de 5 rounds. Si Duncan se cansa en R4, el veterano de 36 anos se lo come. Si Duncan finaliza antes del R3, confirma el hype.', cta: 'El cardio aguanta o no? Comenta!' },
        { hook: 'Moicano a +160 es la MEJOR apuesta del card. Y te voy a explicar por que.', body: 'Es un top 10 del peso ligero. Experiencia contra Makhachev, Aldo, Ortega. Ya peleo 5 rounds varias veces. Contra un tipo SIN ranking que nunca enfrento a un top 15 y nunca paso de 3 rounds. Las cuotas pagan por el hype de Duncan. Respeta al veterano. Respeta los +160.', cta: 'Apostarias por Moicano? Comenta!' },
      ],
      headlines: [
        'Moicano vs Duncan: El Predicador del Bitcoin Contra las Cuerdas',
        'Mismo Gimnasio, Destinos Opuestos: El Duelo ATT que Puede Definir Carreras',
        'Duncan Nunca Peleo 5 Rounds. Este es su Primer Main Event.',
        'Ahora o Nunca: Moicano a los 36 Contra la Nueva Generacion',
        'Del Campo Escoces al Main Event: La Historia de Chris Duncan',
        'Moicano a +160: Por Que el Mercado Puede Estar Equivocado',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '+160',
        fighter2_odds: '-192',
        fighter1_name: 'Renato Moicano',
        fighter2_name: 'Chris Duncan',
        source: 'Promedio de DraftKings y FanDuel (marzo 2026)',
      },
      edges: [
        { icon: 'Activity', titulo: 'Duncan Nunca Peleo 5 Rounds', stat_headline: 'CERO PELEAS DE 5 ROUNDS EN SU CARRERA. PRIMER MAIN EVENT.', contexto: 'Duncan nunca paso de 3 rounds. El volumen de 5.02 SLpM es fisicamente imposible de mantener por 25 minutos sin adaptacion. Nadie sabe como aguanta su cardio.', implicacao_aposta: 'Favorece Over rounds y Moicano en peleas largas. Si crees que la pelea pasa del R3, Moicano gana valor.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Target', titulo: 'Volumen de Golpes de Duncan', stat_headline: '5.02 GOLPES SIGNIFICATIVOS POR MINUTO (TOP TIER LW)', contexto: 'Duncan presiona MUCHO. El volumen es consistente y viene con takedowns (3.27/15min). Moicano absorbe 3.57 SApM y solo defiende 62% de TDs.', implicacao_aposta: 'Favorece a Duncan por finish en los primeros rounds. Under puede tener valor.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Brain', titulo: 'Experiencia de Elite de Moicano', stat_headline: 'MOICANO HA ENFRENTADO A MAKHACHEV, ALDO, ORTEGA, KOREAN ZOMBIE, DARIUSH', contexto: 'Duncan nunca enfrento a un top 15. Moicano ha enfrentado a la elite del peso ligero y pluma. La diferencia de experiencia en momentos de presion es enorme.', implicacao_aposta: 'Favorece a Moicano en championship rounds y en peleas largas.', edge_level: 'moderado', fighter_side: 'fighter1' },
        { icon: 'Shield', titulo: 'Amenaza de Sumision Doble', stat_headline: 'MOICANO 8 SUBS CARRERA (0.5/15MIN) + DUNCAN 6 SUBS (0.7/15MIN)', contexto: 'Ambos son amenazas reales de sumision. Si la pelea va al suelo, puede convertirse en ajedrez de jiu-jitsu. Duncan mas activo ultimamente (3 subs en 4 peleas).', implicacao_aposta: 'Prop "pelea termina por sumision" puede tener valor. Ambos buscan el finish en el suelo.', edge_level: 'moderado', fighter_side: 'neutral' },
        { icon: 'MapPin', titulo: 'Factor Gimnasio: ATT', stat_headline: 'ENTRENAN JUNTOS. CONOCEN EL JUEGO DEL OTRO.', contexto: 'Cuando companeros de entrenamiento se enfrentan, las sorpresas son raras. La pelea tiende a ser mas tactica y menos explosiva. Ambos saben que esperar.', implicacao_aposta: 'Favorece Over rounds. Sin sorpresas = pelea mas larga y mas tactica.', edge_level: 'leve', fighter_side: 'neutral' },
      ],
      value_picks: [
        { tipo: 'Moneyline', pick: 'Moicano ML (+160)', odds: '+160', confianca: 'media', edge_vs_mercado: 'El mercado subestima la experiencia en 5 rounds. Duncan nunca estuvo ahi. +160 paga bien por el riesgo.', raciocinio: 'Moicano es un top 10 con experiencia de elite contra un sin-ranking que nunca peleo 5 rounds. Las cuotas exageran la desventaja. Si la pelea es larga, Moicano domina.' },
        { tipo: 'Metodo', pick: 'Pelea termina por Sumision', odds: '+120', confianca: 'alta', raciocinio: 'Duncan tiene 3 subs en sus ultimas 4 peleas UFC. Moicano tiene 8 subs en su carrera. Ambos buscan el suelo. La probabilidad de sumision es alta sin importar quien gane.' },
        { tipo: 'Over/Under', pick: 'Over 2.5 Rounds', odds: '-140', confianca: 'media', raciocinio: 'Moicano es dificil de finalizar (10 de 20 victorias por decision). Aunque presionado, tiende a sobrevivir y llevar la pelea a los rounds tardios. El factor ATT (se conocen) favorece la cautela.' },
        { tipo: 'Duracion', pick: 'Duncan por Sub R1-R2', odds: '+280', confianca: 'baixa', raciocinio: 'Si crees en el hype de Duncan, +280 paga MUCHO. 3 subs en 4 peleas, wrestling activo, contra Moicano que defiende 62% de TDs. El escenario existe, pero el riesgo es alto.' },
      ],
      armadilha: {
        titulo: 'Trampa: Duncan por Decision',
        descricao: 'Duncan tiene solo 2 decisiones en 15 victorias de carrera (13%). Es un finalizador nato. Si no logra someter o noquear a Moicano, probablemente esta perdiendo la pelea en las tarjetas contra el veterano. Apostar a Duncan por decision va contra TODO su historial.',
      },
      disclaimer: 'Analisis estadistico con fines informativos. Apuesta con responsabilidad.',
    },
  },
};
