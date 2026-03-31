import { translateAnalysis } from '@/lib/translate-analysis';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'moicano-vs-duncan',
  evento_id: null,
  slug: 'moicano-vs-duncan',
  titulo: 'Moicano vs Duncan: Agora ou Nunca',
  subtitulo: 'O veterano de 36 anos com 2 derrotas seguidas contra a estrela escocesa em ascensao meteórica. Colegas de treino. Mesmo gym. Destinos opostos.',
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
    predictedMethod: 'Submissao R2-R3',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Volume de Strikes', edge: 'fighter2', impact: 7, description: 'Duncan conecta 5.02 strikes significativos por minuto contra 4.17 de Moicano. O escoces pressiona mais.' },
      { factor: 'Experiencia em 5 Rounds', edge: 'fighter1', impact: 8, description: 'Moicano ja lutou 5 rounds varias vezes. Duncan nunca. Os championship rounds sao territorio do veterano.' },
      { factor: 'Ameaca de Takedown', edge: 'fighter2', impact: 7, description: 'Duncan media 3.27 TDs por 15 min contra 1.67 de Moicano. A defesa de TD de Moicano (62%) e vulneravel.' },
    ],
    xFactor: {
      title: 'Primeiro Main Event de 5 Rounds do Duncan',
      description: 'Duncan nunca lutou 5 rounds. Se Moicano sobreviver a tempestade inicial e levar pro R4-R5, a experiencia pode ser decisiva.',
    },
  },
  fighter1_info: {
    nome: 'Renato Moicano',
    apelido: 'Money Moicano',
    record: '20-7-1',
    ranking: '#10 Peso Leve',
    ultimasLutas: [
      { result: 'L', opponent: 'Beneil Dariush', method: 'Decisao Unanime', event: 'UFC 317' },
      { result: 'L', opponent: 'Islam Makhachev', method: 'Submissao R1', event: 'UFC 311' },
      { result: 'W', opponent: 'Benoit Saint Denis', method: 'Decisao Unanime', event: 'UFC 310' },
    ],
  },
  fighter2_info: {
    nome: 'Chris Duncan',
    apelido: 'The Problem',
    record: '15-2-0',
    ranking: 'Sem Ranking',
    ultimasLutas: [
      { result: 'W', opponent: 'Terrance McKinney', method: 'Submissao R1', event: 'UFC 323' },
      { result: 'W', opponent: 'Mateusz Rebecki', method: 'Decisao Unanime (FOTN)', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Jordan Vucenic', method: 'Submissao R2', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan',
  evento_data: '4 de Abril, 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Peso Leve (155 lbs)',
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
      categoria_peso: 'Peso Leve (155 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'Agora ou Nunca',
      tagline_sub: 'O pregador do Bitcoin com 2 derrotas seguidas contra o pastor escoces em ascensao meteórica. Mesmo gym. Caminhos opostos.',
      fighter1: {
        nome_completo: 'Renato "Money Moicano" Carneiro',
        apelido: 'Money Moicano',
        sobrenome: 'Moicano',
        record: '20-7-1',
        ranking: '#10 Peso Leve',
        info_extra: 'Brasilia, Brasil | American Top Team | 36 anos',
        imagem_fullbody_url: '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-01%2F12%2FMOICANO_RENATO_L_09-28.png%3Fitok%3DaJ4kuhkB',
      },
      fighter2: {
        nome_completo: 'Chris "The Problem" Duncan',
        apelido: 'The Problem',
        sobrenome: 'Duncan',
        record: '15-2-0',
        ranking: 'Sem Ranking',
        info_extra: 'Alloa, Escocia | American Top Team | 32 anos',
        imagem_fullbody_url: '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2023-07%2FDUNCAN_CHRIS_L_07-22.png%3Fitok%3DHlQ_JCOr',
      },
    },

    narrativa: {
      html_content: `
        <!-- MOICANO: AGORA OU NUNCA -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">O Pregador Com a Costas na Parede</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/5 via-transparent to-ufc-red/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-ufc-red/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                No UFC 300, <strong class="text-ufc-red">Moicano</strong> subiu no octogono, derrotou Jalin Turner como azarao de +200, pegou o microfone e mandou: <em class="text-white/80">"Se voce nao sabe quem e Ludwig von Mises, voce nao sabe nada sobre economia. Leia, e comprem Bitcoin."</em> O MMA parou. Virou meme. Virou camiseta. O cara ficou mais famoso pelo discurso do que pela vitoria. Esse e Renato Moicano: estudante de Direito, libertario, 723 mil seguidores no Instagram, o cara mais carismatico do UFC. Mas carisma nao ganha luta.
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
                <p class="text-xs text-white/50 leading-relaxed">Submissao R1. Islam nem suou. Moicano aceitou em short notice e foi engolido pelo melhor do mundo.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Titulo em Jogo</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/20 to-ufc-red/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Jun 2025</p>
                <p class="font-display text-2xl text-white mb-2">DARIUSH</p>
                <p class="text-xs text-white/50 leading-relaxed">Decisao Unanime. Luta morna. Moicano nao conseguiu impor seu jogo. 2a derrota seguida.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Sequencia Negativa</div>
              </div>
            </div>
          </div>

          <div class="mt-8 text-center">
            <p class="font-display text-5xl md:text-6xl bg-gradient-to-b from-ufc-red/40 to-ufc-red/10 bg-clip-text text-transparent leading-none">2 derrotas seguidas</p>
            <div class="flex items-center justify-center gap-4 mt-3">
              <div class="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-white/10"></div>
              <p class="text-xs text-white/40">36 anos &middot; #10 LW &middot; 3a derrota pode ser fatal</p>
              <div class="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-white/10"></div>
            </div>
            <p class="font-display text-lg text-white/70 mt-2 italic">"Agora ou nunca, Moicano."</p>
          </div>
        </div>

        <!-- DUNCAN: A ASCENSAO -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Do Pasto Escoces ao Main Event</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-blue-400">Duncan</strong> cresceu em Alloa, Escocia. Trabalhava como pastor de ovelhas. Era chamado de "Podgy" (gordinho) quando crianca. No dia da pesagem da sua primeira luta profissional, a mae dele foi assassinada. Ele lutou no dia seguinte. Usa um pingente em homenagem a ela ate hoje, em cada pesagem, em cada luta. Chris Duncan nao fala de tragedia pra ganhar simpatia. Ele luta porque lutar e a unica coisa que faz sentido desde aquele dia.
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
                <p class="text-xs text-white/50 leading-relaxed">Submissao R2. Mostrou o jogo no chao.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">Sub Finish</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">2025</p>
                <p class="font-display text-2xl text-white mb-2">REBECKI</p>
                <p class="text-xs text-white/50 leading-relaxed">Decisao Unanime. FOTN bonus. Guerra de 3 rounds.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">FOTN</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Dez 2025</p>
                <p class="font-display text-2xl text-white mb-2">McKINNEY</p>
                <p class="text-xs text-white/50 leading-relaxed">Submissao R1. Rapido e letal.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">Sub R1</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">2024</p>
                <p class="font-display text-2xl text-white mb-2">OKI</p>
                <p class="text-xs text-white/50 leading-relaxed">Submissao R1. POTN bonus. Dominante.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">POTN</div>
              </div>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/8 via-amber-500/4 to-amber-500/8"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div class="relative p-5 text-center">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">4 vitorias seguidas</p>
              <p class="text-sm text-white/60">Todas impressionantes. <strong class="text-amber-400">Primeiro main event de 5 rounds</strong> da carreira. Incognita no cardio.</p>
            </div>
          </div>
        </div>

        <!-- BASTIDORES: O FATOR ATT -->
        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">O Elefante na Sala: Mesmo Gym</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">American Top Team</p>
                <p class="text-sm text-white/60 leading-relaxed">Ambos treinam na ATT. Fizeram sparring juntos. Conhecem o jogo um do outro. Isso elimina surpresas e transforma a luta em xadrez puro.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-ufc-red/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-ufc-red rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-ufc-red mb-2">Moicano: o carisma viral</p>
                <p class="text-sm text-white/60 leading-relaxed">Discurso do Ludwig von Mises no UFC 300. Estudante de Direito. Libertario. Bitcoin. 723K no Instagram. O cara que todo mundo quer ver falar no microfone.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Duncan: determinacao silenciosa</p>
                <p class="text-sm text-white/60 leading-relaxed">Sem trash talk. Sem show. Usa o pingente da mae em cada luta. Saiu da Escocia pra ser o melhor. A motivacao dele nao vem de likes, vem de algo muito mais profundo.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">A Tocha Sendo Passada?</p>
                <p class="text-sm text-white/60 leading-relaxed">Veterano de 36 anos em declinio vs estrela de 32 em ascensao. Se Duncan vencer, entra no ranking. Se Moicano perder, a conversa sobre aposentadoria comeca.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: '#10 Peso Leve', fighter2: 'Sem Ranking' },
        { dimensao: 'Sequencia', fighter1: '2 derrotas seguidas', fighter2: '4 vitorias seguidas' },
        { dimensao: 'Narrativa', fighter1: 'Evitar 3a derrota seguida aos 36 anos', fighter2: 'Entrar no ranking com vitoria sobre top 10' },
        { dimensao: 'Risco', fighter1: '3a derrota pode encerrar ambicoes de top 5', fighter2: 'Perder a chance dourada contra veterano em baixa' },
        { dimensao: 'Recompensa', fighter1: 'Provar que ainda e relevante no topo', fighter2: 'Maior vitoria da carreira, entrada no top 15' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'O VETERANO RESISTE',
          subtitulo: 'Moicano mostra que experiencia em 5 rounds e o grande diferencial e para a sangria',
          consequencias: [
            { tag: 'RANKING', texto: 'Moicano se mantem no top 10 e respira no ranking. A narrativa de declinio desacelera.' },
            { tag: 'NARRATIVA', texto: 'Prova que as 2 derrotas foram contra elite (campeao e top 10) e que contra o "resto" ainda domina.' },
            { tag: 'PROXIMA', texto: 'Luta contra um top 7-12 como Dustin Poirier, Dan Hooker ou Michael Chandler.' },
          ],
          proxima_luta: 'Moicano vs top 7-12 LW (Poirier, Hooker ou Chandler)',
        },
        fighter2_vence: {
          titulo: 'THE PROBLEM CHEGA AO RANKING',
          subtitulo: 'Duncan confirma que e o futuro do peso-leve com vitoria dominante sobre veterano ranqueado',
          consequencias: [
            { tag: 'ASCENSAO', texto: 'Duncan entra no top 15 com a maior vitoria da carreira UFC' },
            { tag: 'HYPE', texto: 'A ascensao meteórica ganha combustivel. 5 vitorias em 6 UFC fights. A comunidade MMA presta atencao.' },
            { tag: 'MOICANO', texto: 'Uma 3a derrota seguida aos 36 anos levanta questoes serias sobre o futuro de Moicano no topo da divisao.' },
          ],
          proxima_luta: 'Duncan vs top 10-15 LW (Bobby Green, Paddy Pimblett ou Mateusz Gamrot)',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Renato Moicano',
        color: 'red',
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Beneil Dariush', result: 'L', method: 'Decisao Unanime', opponent_rank: '#9 LW', quality_score: 3, quality_label: 'Bom', note: 'Luta morna. Moicano nao conseguiu impor seu jogo. Dariush controlou o ritmo e venceu nos pontos.' },
          { date: 'Jan 2025', opponent: 'Islam Makhachev', result: 'L', method: 'Submissao R1', opponent_rank: 'Campeao', quality_score: 5, quality_label: 'Excelente', note: 'Aceitou em short notice pelo titulo. Islam submeteu rapido. Nao e desonra perder pro melhor do mundo.' },
          { date: 'Dez 2024', opponent: 'Benoit Saint Denis', result: 'W', method: 'Decisao Unanime', opponent_rank: '#12 LW', quality_score: 3, quality_label: 'Bom', note: 'Vitoria solida. Controlou a distancia e venceu nos pontos.' },
          { date: 'Abr 2024', opponent: 'Jalin Turner', result: 'W', method: 'Decisao Unanime', opponent_rank: '#11 LW', quality_score: 3, quality_label: 'Bom', note: 'UFC 300. Azarao de +200 e venceu. Depois veio o discurso viral do Ludwig von Mises e Bitcoin.' },
          { date: 'Nov 2023', opponent: 'Drew Dober', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria tranquila por pontos. Dober e gatekeeper solido.' },
        ],
        full_fight_history: [
          { date: 'Ago 2014', opponent: 'Zubaira Tukhugov', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Debut UFC, derrota' },
          { date: 'Nov 2015', opponent: 'Tom Niinimaki', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Primeira vitoria UFC' },
          { date: 'Mai 2016', opponent: 'Zubaira Tukhugov', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Revanche, vitoria por pontos' },
          { date: 'Set 2016', opponent: 'Alex Oliveira', result: 'D', method: 'SD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Empate' },
          { date: 'Fev 2017', opponent: 'Jeremy Stephens', result: 'W', method: 'UD', opponent_rank: '#6 FW', quality_score: 3, quality_label: 'Bom', note: 'Vitoria solida contra ranqueado' },
          { date: 'Jun 2017', opponent: 'Brian Ortega', result: 'L', method: 'Sub R3', opponent_rank: '#4 FW', quality_score: 4, quality_label: 'Muito Bom', note: 'Derrota para futuro contender' },
          { date: 'Fev 2018', opponent: 'Calvin Kattar', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria por pontos' },
          { date: 'Dez 2018', opponent: 'Mirsad Bektic', result: 'W', method: 'UD', opponent_rank: '#10 FW', quality_score: 3, quality_label: 'Bom', note: 'Vitoria contra ranqueado' },
          { date: 'Fev 2019', opponent: 'Jose Aldo', result: 'L', method: 'KO R2', opponent_rank: '#3 FW', quality_score: 5, quality_label: 'Excelente', note: 'Nocauteado pela lenda' },
          { date: 'Jun 2019', opponent: 'Korean Zombie', result: 'L', method: 'KO R1', opponent_rank: '#4 FW', quality_score: 4, quality_label: 'Muito Bom', note: 'Nocauteado rapido' },
          { date: 'Mar 2020', opponent: 'Damir Hadzovic', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Subiu pra LW, sub rapida' },
          { date: 'Fev 2022', opponent: 'Alexander Hernandez', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Finalizacao no chao' },
          { date: 'Jul 2022', opponent: 'Brad Riddell', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria por pontos' },
          { date: 'Nov 2023', opponent: 'Drew Dober', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria tranquila' },
          { date: 'Abr 2024', opponent: 'Jalin Turner', result: 'W', method: 'UD', opponent_rank: '#11 LW', quality_score: 3, quality_label: 'Bom', note: 'UFC 300, discurso viral' },
          { date: 'Dez 2024', opponent: 'Benoit Saint Denis', result: 'W', method: 'UD', opponent_rank: '#12 LW', quality_score: 3, quality_label: 'Bom', note: 'UFC 310' },
          { date: 'Jan 2025', opponent: 'Islam Makhachev', result: 'L', method: 'Sub R1', opponent_rank: 'Campeao', quality_score: 5, quality_label: 'Excelente', note: 'Short notice, titulo' },
          { date: 'Jun 2025', opponent: 'Beneil Dariush', result: 'L', method: 'UD', opponent_rank: '#9 LW', quality_score: 3, quality_label: 'Bom', note: 'Luta morna' },
        ],
        momentum_score: 4,
        momentum_label: 'Em Recuperacao',
        momentum_trend: 'descending',
        momentum_note: 'Moicano vem de 2 derrotas seguidas, mas com contexto: a primeira foi pro campeao do mundo em short notice (Islam Makhachev), e a segunda pro veterano Dariush. Antes disso, uma sequencia de 5 vitorias que incluiu o icónico UFC 300. Aos 36 anos, a janela esta fechando. Uma 3a derrota seria devastadora pro ranking e pra narrativa. Mas Moicano e o tipo de lutador que sabe se reinventar.',
      },
      fighter2: {
        nome: 'Chris Duncan',
        color: 'blue',
        recent_fights: [
          { date: 'Dez 2025', opponent: 'Terrance McKinney', result: 'W', method: 'Submissao R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Finalizou rapido no UFC 323. Mostrou que o jiu-jitsu esta afiado.' },
          { date: 'Ago 2025', opponent: 'Mateusz Rebecki', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'FOTN bonus. Guerra de 3 rounds com muito volume. Mostrou cardio e coracao.' },
          { date: 'Abr 2025', opponent: 'Jordan Vucenic', result: 'W', method: 'Submissao R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Mais uma sub. O grappling e o diferencial.' },
          { date: 'Nov 2024', opponent: 'Bolaji Oki', result: 'W', method: 'Submissao R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'POTN bonus. Dominio total desde o primeiro segundo.' },
          { date: 'Fev 2024', opponent: 'Manuel Torres', result: 'L', method: 'Submissao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Unica derrota no UFC. Foi submetido. A fraqueza e ser pego no chao quando esta por baixo.' },
        ],
        full_fight_history: [
          { date: 'Mar 2023', opponent: 'Omar Morales', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Debut UFC, vitoria solida' },
          { date: 'Jul 2023', opponent: 'Chepe Mariscal', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Nocaute rapido' },
          { date: 'Fev 2024', opponent: 'Manuel Torres', result: 'L', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Unica derrota UFC' },
          { date: 'Nov 2024', opponent: 'Bolaji Oki', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'POTN' },
          { date: 'Abr 2025', opponent: 'Jordan Vucenic', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Sub finish' },
          { date: 'Ago 2025', opponent: 'Mateusz Rebecki', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'FOTN' },
          { date: 'Dez 2025', opponent: 'Terrance McKinney', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'UFC 323' },
        ],
        momentum_score: 8,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: 'Duncan esta no melhor momento da carreira. 4 vitorias seguidas no UFC, todas impressionantes, com bonus de POTN e FOTN. O hype e real. Mas a qualidade dos oponentes ainda e questionavel: nenhum ranqueado, nenhum top 15. Moicano e um salto ENORME de qualidade. Esse e o teste real. O primeiro main event de 5 rounds adiciona outra camada de incognita.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Moicano',
        media_oponentes: 3,
        media_oponentes_label: 'Bom',
        aproveitamento: '12W-7L (63%)',
        contra_top5: '0W-3L',
      },
      fighter2: {
        nome: 'Duncan',
        media_oponentes: 2,
        media_oponentes_label: 'Medio',
        aproveitamento: '6W-1L (86%)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Nao ha oponentes em comum no UFC, mas os dois treinam juntos na American Top Team. Isso e mais valioso que qualquer oponente em comum: eles literalmente conhecem os habitos, os pontos fortes e as fraquezas um do outro. Moicano enfrentou competicao significativamente mais forte (Makhachev, Aldo, Ortega, Dariush). Duncan ainda nao enfrentou ninguem ranqueado.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.17, valueB: 5.02, maxVal: 7, format: 'decimal', note: 'Duncan tem volume superior. Pressiona mais e lanca mais strikes.' },
        { label: 'Precisao de Strikes (%)', valueA: 48, valueB: 46, maxVal: 100, format: 'percent', note: 'Precisao muito parecida. Moicano com leve vantagem.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.57, valueB: 4.82, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Duncan absorve MUITO mais. O estilo agressivo cobra um preco. Moicano e mais cauteloso.' },
        { label: 'Defesa de Strikes (%)', valueA: 59, valueB: 51, maxVal: 100, format: 'percent', note: 'Moicano defende melhor. Duncan leva mais pra dar mais.' },
        { label: 'Takedowns por 15 Min', valueA: 1.67, valueB: 3.27, maxVal: 5, format: 'decimal', note: 'Duncan tenta quase o dobro de takedowns. O wrestling e parte central do jogo dele.' },
        { label: 'Precisao de Takedown (%)', valueA: 41, valueB: 42, maxVal: 100, format: 'percent', note: 'Precisao de TD praticamente identica.' },
        { label: 'Defesa de Takedown (%)', valueA: 62, valueB: 50, maxVal: 100, format: 'percent', note: 'Moicano defende TDs melhor, mas 62% nao e elite. Vulneravel.' },
        { label: 'Submissoes por 15 Min', valueA: 0.5, valueB: 0.7, maxVal: 3, format: 'decimal', note: 'Ambos sao ameacas de submissao. Potencial xadrez no chao.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '36 anos', fighter2: '32 anos', note: 'Moicano 4 anos mais velho' },
        { label: 'Altura', fighter1: '1,80m (5\'11")', fighter2: '1,78m (5\'10")', note: 'Praticamente a mesma altura' },
        { label: 'Envergadura', fighter1: '183cm (72")', fighter2: '180cm (71")', note: 'Moicano com leve vantagem de 1 polegada' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo', note: 'Ambos ortodoxos' },
        { label: 'Academia', fighter1: 'American Top Team', fighter2: 'American Top Team', note: 'MESMO GYM. Treinam juntos. Conhecem tudo um do outro.' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking em Pe', valueA: 72, valueB: 70, labelA: 'Bom', labelB: 'Bom', advantage: 'even', advantage_note: 'Moicano e tecnico e preciso (48% acc). Duncan e mais volumoso (5.02 SLpM) mas absorve demais (4.82 SApM). Estilos diferentes, nivel parecido em pe.' },
        { label: 'Wrestling Ofensivo', valueA: 60, valueB: 75, labelA: 'Bom', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: 'Duncan media 3.27 TDs por 15 min, quase o dobro de Moicano (1.67). O escoces e mais ativo no wrestling e usa pra criar transicoes pro chao.' },
        { label: 'Jiu-Jitsu / Submissoes', valueA: 70, valueB: 75, labelA: 'Bom', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: 'Duncan tem 6 subs na carreira (40% das vitorias), incluindo 3 no UFC recente. Moicano tem 8 subs totais (4 no UFC). Ambos perigosos, mas Duncan esta mais ativo no sub game ultimamente.' },
        { label: 'Defesa e Durabilidade', valueA: 68, valueB: 55, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Moicano defende 59% dos strikes e 62% dos TDs. Duncan absorve demais (4.82 SApM) e so defende 51% dos strikes. Duncan tambem so defende 50% dos TDs.' },
        { label: 'Cardio e Gas', valueA: 75, valueB: 58, labelA: 'Muito Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Moicano ja lutou 5 rounds e tem experiencia em main events longos. Duncan NUNCA lutou 5 rounds. A maior incognita da luta. Se chegar no R4-R5, ninguem sabe como Duncan vai reagir.' },
        { label: 'Experiencia de Elite', valueA: 80, valueB: 45, labelA: 'Muito Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Moicano enfrentou Makhachev, Aldo, Ortega, Korean Zombie, Dariush. Duncan nunca enfrentou um ranqueado. A diferenca de experiencia e enorme.' },
      ],
      insight: 'Os dois sao bem-rounded com bom jiu-jitsu, mas com estilos opostos. Moicano e mais tecnico e cauteloso, com melhor defesa e experiencia de elite. Duncan e mais explosivo e agressivo, com wrestling superior e volume alto. A luta vai ser decidida por: Duncan consegue impor o ritmo alto e levar pro chao, ou Moicano consegue controlar a distancia e fazer Duncan gastar gas nos primeiros 3 rounds?',
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
      insight: 'Os perfis de finalizacao contam historias bem diferentes. Moicano e equilibrado entre sub (40%) e decisao (40%), com poucos KOs (20%). No UFC, 10 das 12 vitorias foram por decisao. Duncan e finalizador nato: 87% das vitorias por finish (47% KO + 40% sub) e apenas 2 decisoes em 15 vitorias. Se a luta for longa, favorece Moicano. Se Duncan conseguir impor seu jogo cedo, ele busca o finish.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 8,
          danger_label: 'VANTAGEM DUNCAN',
          color: 'green',
          title: 'Territorio do Duncan',
          description: 'Duncan e mais perigoso no R1. Volume de 5.02 SLpM, a maioria das finalizacoes no R1, e a explosividade de quem esta no auge fisico. Moicano precisa sobreviver a tempestade inicial sem ser levado pro chao. Se Duncan encaixar um takedown cedo e transitar pro chao, a submissao pode vir rapido.',
        },
        {
          rounds: 'R2-R3',
          danger_level: 6,
          danger_label: 'EQUILIBRADO',
          color: 'gold',
          title: 'Rounds de Transicao',
          description: 'Se Moicano sobreviver o R1, os rounds 2 e 3 sao onde a experiencia comeca a pesar. Duncan ainda tem gas aqui, mas o ritmo de 5.02 strikes por minuto nao e sustentavel por muito tempo. Moicano pode comecar a encontrar o timing e contragolpear. O grappling pode ir pra qualquer lado: ambos sao ameacas de sub.',
        },
        {
          rounds: 'R4-R5',
          danger_level: 4,
          danger_label: 'VANTAGEM MOICANO',
          color: 'red',
          title: 'Championship Rounds',
          description: 'Territorio completamente desconhecido pra Duncan. Ele NUNCA lutou 5 rounds. Moicano ja esteve nessa situacao varias vezes. Se chegar aqui, a experiencia, o fight IQ e o ritmo controlado do veterano devem dominar. Duncan pode estar esgotado pelo volume alto dos rounds anteriores.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'MapPin', title: 'Mesmo Gym: American Top Team', fighter: 'Ambos', risk_level: 'NEUTRO', risk_color: 'neutral', description: 'Ambos treinam na ATT. Fizeram sparring juntos. Conhecem os pontos fortes e fraquezas um do outro. Isso elimina o elemento surpresa e transforma a luta em xadrez puro. Quem adapta melhor o game plan no dia?' },
        { icon: 'Clock', title: 'Idade: 36 Anos', fighter: 'Moicano', risk_level: 'RISCO MEDIO', risk_color: 'yellow', description: 'Moicano tem 36 anos e vem de 2 derrotas seguidas. A recuperacao entre lutas nao e mais a mesma. O reflexo diminui. Contra um cara de 32 no auge fisico, cada ano pesa.' },
        { icon: 'Activity', title: 'Primeiro Main Event de 5 Rounds', fighter: 'Duncan', risk_level: 'RISCO ALTO', risk_color: 'red', description: 'Duncan NUNCA lutou 5 rounds. Todas as lutas dele foram 3 rounds. O cardio em 25 minutos e completamente desconhecido. O volume de 5.02 strikes por minuto e insustentavel por 5 rounds. Algo tem que ceder.' },
        { icon: 'TrendingUp', title: 'Momentum de 4 Vitorias', fighter: 'Duncan', risk_level: 'POSITIVO', risk_color: 'green', description: 'Duncan vem de 4 vitorias seguidas com bonus de POTN e FOTN. A confianca esta no pico. Cada luta parece melhor que a anterior. O cara esta evoluindo em tempo real.' },
        { icon: 'Brain', title: 'Mentalidade "Nada a Perder"', fighter: 'Moicano', risk_level: 'POSITIVO', risk_color: 'green', description: 'Moicano ja lutou pelo titulo, ja fez o discurso viral, ja viveu o auge. Com as costas na parede aos 36 anos, pode lutar com a liberdade de quem nao tem mais o que proteger. Moicano "solto" pode ser perigoso.' },
        { icon: 'Shield', title: 'Pingente da Mae', fighter: 'Duncan', risk_level: 'ENORME POSITIVO', risk_color: 'green', description: 'Duncan luta com o pingente em homenagem a mae assassinada. Nao e emocionalismo. E motivacao profunda, o tipo que nao acaba quando o cardio falha. O cara passou pelo pior da vida e continua lutando.' },
        { icon: 'Target', title: 'Defesa de TD Vulneravel', fighter: 'Moicano', risk_level: 'RISCO MEDIO', risk_color: 'yellow', description: 'Moicano defende apenas 62% dos takedowns. Contra o wrestling de Duncan (3.27 TDs por 15 min), isso e um problema. Se Duncan conseguir levar pro chao consistentemente, pode controlar a luta inteira.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Moicano',
        total_probability: 40,
        scenarios: [
          { name: 'Maratona do Veterano', probability: 22, method: 'Decisao Unanime', description: 'Moicano sobrevive o R1, controla a distancia com o jab, e faz Duncan gastar o gas cedo. Nos championship rounds (R4-R5), a experiencia domina. Duncan nunca lutou 5 rounds e desmorona. Moicano vence nos pontos com controle e fight IQ.' },
          { name: 'Submission de Veterano', probability: 10, method: 'Submissao R3-R4', description: 'Moicano espera Duncan cansar e entao busca o takedown. No chao, um Duncan esgotado comete um erro e Moicano encaixa uma guilhotina ou um RNC. A experiencia no grappling fala mais alto quando o adversario esta cansado.' },
          { name: 'Contragolpe Limpo', probability: 8, method: 'TKO R2-R3', description: 'Duncan entra agressivo como sempre e Moicano encaixa um contragolpe preciso que machuca. O volume alto de Duncan deixa lacunas defensivas. Se Moicano encontrar o timing, pode machucar e buscar o finish.' },
        ],
      },
      fighter2: {
        nome: 'Duncan',
        total_probability: 57,
        scenarios: [
          { name: 'Tempestade Escocesa', probability: 25, method: 'Submissao R1-R2', description: 'Duncan pressiona desde o primeiro segundo, encaixa um takedown cedo e transita pro back take ou arm triangle. No chao, o grappling de Duncan e mais agressivo e moderno. Moicano nao consegue se levantar e Duncan finaliza com submissao.' },
          { name: 'Volume e Pressao', probability: 18, method: 'Decisao Unanime', description: 'Duncan mantem o ritmo alto por todos os 5 rounds (improvavel mas possivel). O volume de 5.02 strikes/min combinado com takedowns constantes domina Moicano nos pontos. Duncan mostra que o cardio aguenta o main event.' },
          { name: 'TKO por Acumulo', probability: 14, method: 'TKO R2-R3', description: 'O volume alto de Duncan acumula dano. Moicano absorve 3.57 strikes/min e comeca a desacelerar. Duncan sente e aumenta a pressao, combinando strikes e takedowns ate o arbitro parar.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Chris Duncan',
      winner_side: 'fighter2',
      predicted_method: 'Submissao R2-R3',
      confidence_score: 5,
      confidence_label: 'MEDIA',
      explanation: 'Essa luta e muito mais equilibrada do que as odds sugerem, mas Duncan merece ser leve favorito. O escoces tem volume superior, wrestling mais ativo, e submissoes mais frequentes. A combinacao de pressao, takedowns e ameaca de sub pode ser demais pro Moicano, especialmente com a defesa de TD de apenas 62%. O cenario mais provavel: Duncan pressiona nos primeiros rounds, encaixa takedowns e eventualmente encontra a submissao. POREM: se Moicano sobreviver ate o R4, a dinamica muda completamente. Duncan NUNCA lutou 5 rounds e o volume de 5.02 SLpM e insustentavel por 25 minutos. A experiencia de Moicano em championship rounds e o coringa dessa luta. E o classico "quem impoe o ritmo" decide.',
      x_factor: {
        title: 'Os 5 Rounds que Duncan Nunca Lutou',
        description: 'Duncan nunca foi alem de 3 rounds. Ninguem sabe o que acontece com o cardio dele em 25 minutos mantendo 5.02 strikes por minuto. Se ele cansar, Moicano e exatamente o tipo de lutador que capitaliza: tecnico, paciente, e perigoso quando sente fraqueza. Esse e o X factor que pode virar a luta pro veterano.',
      },
      upset_alert: {
        title: 'Moicano Veterano de Championship Rounds',
        description: 'Se Moicano sobreviver os primeiros 2-3 rounds sem ser finalizado, ele pode virar a luta completamente no R4-R5. Duncan vai estar em territorio desconhecido, possivelmente cansado, contra um veterano que ja esteve la dezenas de vezes. O upset nao e improvavel. Moicano a +160 tem valor real.',
      },
      probabilities: {
        fighter1: { nome: 'Moicano', percent: 40 },
        fighter2: { nome: 'Duncan', percent: 57 },
        draw: 3,
      },
      value_picks: {
        moneyline: { pick: 'Moicano (+160)', reasoning: 'O azarao tem valor real. Moicano e um top 10 com experiencia de elite em 5 rounds contra alguem que nunca lutou mais de 3. Se a luta for longa, +160 paga muito bem.' },
        method: { pick: 'Duncan por Submissao (+180)', reasoning: 'Duncan tem 3 subs nas ultimas 4 lutas UFC. Moicano foi submetido por Makhachev e por Ortega. O cenario e real e as odds pagam bem.' },
        over_under: { pick: 'Over 2.5 Rounds', rounds: 2.5, reasoning: 'Moicano e duro de finalizar (10 decisoes em 20 vitorias) e sabe sobreviver. Duncan pode pressionar cedo mas pode nao conseguir o finish rapido. Over 2.5 e a aposta mais segura.' },
        best_value: 'Moicano ML (+160) e a melhor aposta de valor. Um top 10 veterano com experiencia de 5 rounds contra um cara que nunca foi alem de 3 rounds. As odds exageram a vantagem de Duncan.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Os Primeiros 2 Takedowns de Duncan', icon: 'Target', description: 'Se Duncan encaixar takedowns nos primeiros 5 minutos e conseguir controlar Moicano no chao, e sinal de que o plano de jogo esta funcionando. Se Moicano defender e manter em pe, Duncan vai ter que repensar tudo.' },
        { num: 2, title: 'O Ritmo de Moicano no R1', icon: 'Brain', description: 'Observe se Moicano esta tentando ditar um ritmo lento e tecnico ou se esta sendo forcado a lutar no ritmo de Duncan. Se Moicano esta contragolpeando com calma, ele esta confortavel. Se esta recuando e absorvendo, problema.' },
        { num: 3, title: 'O Gas de Duncan no R3', icon: 'Activity', description: 'O round mais importante da luta pode ser o terceiro. Duncan consegue manter 5.02 strikes por minuto por 15 minutos? Se o ritmo cair visivelmente no R3, Moicano sabe que os championship rounds sao dele.' },
        { num: 4, title: 'Quem Controla o Chao', icon: 'Shield', description: 'Quando a luta for pro chao (e VAI ir), observe quem esta no controle. Ambos sao ameacas de sub. Se Duncan esta por cima controlando, ele domina. Se Moicano esta ameacando de baixo, pode surpreender.' },
        { num: 5, title: 'A Linguagem Corporal no R4', icon: 'Zap', description: 'Se Duncan chegar ao R4 parecendo fresco, Moicano esta em serios problemas. Se Duncan estiver encostado na grade recuperando o folego entre trocas, e sinal de que a experiencia de 5 rounds do veterano vai decidir.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'MOICANO VS DUNCAN', content: 'UFC FIGHT NIGHT\nApex, Las Vegas | 4 de Abril\n5 Rounds | Peso Leve\n\n20-7-1 vs 15-2\nVeterano em declinio vs Estrela em ascensao\nMESMO GYM. Destinos opostos.\n\nAgora ou nunca.', color: 'gold' },
        { slide_number: 2, title: 'MONEY MOICANO', content: '#10 Peso Leve | 36 anos\nAmerican Top Team\n\nO cara do discurso do Bitcoin no UFC 300.\n723K no Instagram.\nEstudante de Direito. Libertario.\n\nMAS: 2 derrotas seguidas.\nMakhachev (Sub R1) + Dariush (UD).\n3a derrota = fim das ambicoes de top 5.', color: 'red' },
        { slide_number: 3, title: 'THE PROBLEM', content: '15-2 | 32 anos | Escocia\nAmerican Top Team\n\n4 vitorias seguidas:\nOki Sub R1 (POTN)\nVucenic Sub R2\nRebecki UD (FOTN)\nMcKinney Sub R1\n\nPastor de ovelhas que virou lutador.\nUsa pingente em homenagem a mae.\nSem trash talk. So resultados.', color: 'blue' },
        { slide_number: 4, title: 'O FATOR ATT', content: 'MESMO GYM.\nMesmos sparrings.\nMesmos coaches.\n\nEles SABEM tudo um do outro.\nSem surpresas. So execucao.\n\nA pergunta:\nQuem adapta melhor no octogono?\n\nO veterano de 36 ou o hungaro de 32?', color: 'gold' },
        { slide_number: 5, title: 'PREVISAO', content: 'DUNCAN por Submissao R2-R3\n\nConfianca: MEDIA\n57% Duncan / 40% Moicano\n\nDuncan pressiona, leva pro chao\ne busca o finish.\n\nMAS: se Moicano sobreviver ate o R4,\nDuncan nunca lutou 5 rounds.\nExperiencia > Hype.', color: 'blue' },
      ],
      twitter: [
        { num: '1/5', text: 'Moicano vs Duncan no sabado no Apex. O pregador do Bitcoin com 2 derrotas seguidas contra o pastor escoces com 4 vitorias. MESMO GYM. Conhecem tudo um do outro. Thread:' },
        { num: '2/5', text: 'O dado que ninguem fala: Duncan NUNCA lutou 5 rounds. Nunca. Zero. O volume de 5.02 strikes por minuto e insustentavel por 25 minutos. Se Moicano sobreviver ate o R4, a dinamica muda completamente.' },
        { num: '3/5', text: 'Moicano a +160 como azarao tem VALOR. E um top 10 com experiencia de 5 rounds, veterano de UFC 300, contra um cara sem ranking que nunca enfrentou ninguem do top 15. As odds exageram. O mercado esta pagando pelo hype.' },
        { num: '4/5', text: 'Mas o cenario de Duncan e real: 3 subs nas ultimas 4 lutas. 3.27 TDs por 15 min. Moicano defende so 62% dos TDs. Se Duncan levar pro chao cedo e consistente, a submissao pode vir rapido. "The Problem" e real.' },
        { num: '5/5', text: 'Pick: Duncan por sub R2-R3, mas Moicano ML +160 e a aposta de valor do card. O cara que mandou ler Ludwig von Mises com as costas na parede aos 36 anos? Respeite a experiencia. Respeite o caos. Respeite o Moicano.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: 'O cara pegou o microfone no UFC 300 e mandou o mundo inteiro ler Ludwig von Mises. Virou meme. Virou lenda. Mas agora Renato Moicano tem 36 anos, 2 derrotas seguidas, e enfrenta o cara que treina com ele todo dia.' },
        { time: '10-25s', title: 'Duncan', text: 'Chris Duncan. Pastor de ovelhas escoces. A mae foi assassinada no dia da pesagem da primeira luta dele. Ele lutou no dia seguinte. Usa o pingente dela ate hoje. 4 vitorias seguidas no UFC, 3 por sub. E o primeiro main event de 5 rounds da carreira dele.' },
        { time: '25-40s', title: 'O Conflito', text: 'Ambos treinam na American Top Team. Mesmo gym. Mesmos sparrings. Conhecem TUDO um do outro. Sem surpresas. So xadrez puro. O veterano carismatico de 36 contra a estrela silenciosa de 32. Bitcoin vs pingente. Show vs substancia.' },
        { time: '40-55s', title: 'A Analise', text: 'Duncan pressiona mais: 5.02 strikes por minuto. Wrestling mais ativo: 3.27 TDs. Moicano defende so 62% dos TDs. MAS Duncan nunca lutou 5 rounds. NUNCA. O cardio em 25 minutos e a maior incognita dessa luta inteira. Se Moicano sobreviver o R3, vira territorio dele.' },
        { time: '55-70s', title: 'Pick e CTA', text: 'Pick: Duncan por submissao R2-R3. Mas Moicano a +160 e a aposta de valor do card. Agora ou nunca pro Money Moicano. Comenta quem voce acha que ganha e segue pra analise completa.' },
      ],
      tiktok: [
        { hook: 'O cara que mandou TODO MUNDO ler Ludwig von Mises no UFC 300 ta com as costas na parede.', body: 'Moicano. 36 anos. 2 derrotas seguidas. E agora enfrenta Chris Duncan, o cara que TREINA COM ELE todo dia na ATT. Duncan: 4 vitorias seguidas, 3 por submissao. Pastor de ovelhas escoces. Usa pingente da mae assassinada em cada luta. E o primeiro main event de 5 rounds dele. Se Moicano perder, acabou as ambicoes de top 5. Se Duncan vencer, entra no ranking.', cta: 'Quem ganha? Veterano ou estrela? Comenta!' },
        { hook: 'Duncan NUNCA lutou 5 rounds. E esse e o primeiro main event dele.', body: 'Chris Duncan media 5.02 strikes por minuto. Isso e INSANO. Mas ninguem sabe se ele aguenta isso por 25 minutos. Moicano ja esteve em varias lutas de 5 rounds. Se Duncan cansar no R4, o veterano de 36 anos engole ele. Se Duncan finalizar antes do R3, confirma o hype.', cta: 'O cardio aguenta ou nao? Comenta!' },
        { hook: 'Moicano a +160 e a MELHOR aposta do card. E eu vou te explicar por que.', body: 'E um top 10 do peso-leve. Experiencia contra Makhachev, Aldo, Ortega. Ja lutou 5 rounds varias vezes. Contra um cara SEM ranking que nunca enfrentou top 15 e nunca foi alem de 3 rounds. As odds estao pagando pelo hype do Duncan. Respeite o veterano. Respeite os +160.', cta: 'Voce apostaria no Moicano? Comenta!' },
      ],
      headlines: [
        'Moicano vs Duncan: O Pregador do Bitcoin Com as Costas na Parede',
        'Mesmo Gym, Destinos Opostos: O Duelo ATT Que Pode Definir Carreiras',
        'Duncan Nunca Lutou 5 Rounds. Esse e o Primeiro Main Event Dele.',
        'Agora ou Nunca: Moicano aos 36 Anos Contra a Nova Geracao',
        'Do Pasto Escoces ao Main Event: A Historia de Chris Duncan',
        'Moicano a +160: Por Que o Mercado Pode Estar Errado',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '+160',
        fighter2_odds: '-192',
        fighter1_name: 'Renato Moicano',
        fighter2_name: 'Chris Duncan',
        source: 'Media de DraftKings e FanDuel (marco 2026)',
      },
      edges: [
        { icon: 'Activity', titulo: 'Duncan Nunca Lutou 5 Rounds', stat_headline: 'ZERO LUTAS DE 5 ROUNDS NA CARREIRA. PRIMEIRO MAIN EVENT.', contexto: 'Duncan nunca foi alem de 3 rounds. O volume de 5.02 SLpM e fisicamente impossivel de manter por 25 minutos sem adaptacao. Ninguem sabe como o cardio dele aguenta.', implicacao_aposta: 'Favorece Over rounds e Moicano em lutas longas. Se voce acredita que a luta vai alem do R3, Moicano ganha valor.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Target', titulo: 'Volume de Strikes de Duncan', stat_headline: '5.02 STRIKES SIGNIFICATIVOS POR MINUTO (TOP TIER LW)', contexto: 'Duncan pressiona MUITO. O volume e consistente e vem com takedowns (3.27/15min). Moicano absorve 3.57 SApM e defende so 62% dos TDs.', implicacao_aposta: 'Favorece Duncan por finish nos primeiros rounds. Under pode ter valor.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Brain', titulo: 'Experiencia de Elite de Moicano', stat_headline: 'MOICANO ENFRENTOU MAKHACHEV, ALDO, ORTEGA, KOREAN ZOMBIE, DARIUSH', contexto: 'Duncan nunca enfrentou um top 15. Moicano enfrentou a elite do peso-leve e do peso-pena. A diferenca de experiencia em momentos de pressao e enorme.', implicacao_aposta: 'Favorece Moicano nos championship rounds e em lutas longas.', edge_level: 'moderado', fighter_side: 'fighter1' },
        { icon: 'Shield', titulo: 'Ameaca de Submissao Dupla', stat_headline: 'MOICANO 8 SUBS CARREIRA (0.5/15MIN) + DUNCAN 6 SUBS (0.7/15MIN)', contexto: 'Ambos sao ameacas reais de submissao. Se a luta for pro chao, pode virar xadrez de jiu-jitsu. Duncan mais ativo ultimamente (3 subs em 4 lutas).', implicacao_aposta: 'Prop "acabar por submissao" pode ter valor. Ambos buscam o finish no chao.', edge_level: 'moderado', fighter_side: 'neutral' },
        { icon: 'MapPin', titulo: 'Fator Gym: ATT', stat_headline: 'TREINAM JUNTOS. CONHECEM O JOGO UM DO OUTRO.', contexto: 'Quando parceiros de treino se enfrentam, surpresas sao raras. A luta tende a ser mais tatica e menos explosiva. Ambos sabem o que esperar.', implicacao_aposta: 'Favorece Over rounds. Sem surpresas = luta mais longa e mais tatica.', edge_level: 'leve', fighter_side: 'neutral' },
      ],
      value_picks: [
        { tipo: 'Moneyline', pick: 'Moicano ML (+160)', odds: '+160', confianca: 'media', edge_vs_mercado: 'O mercado subestima a experiencia de 5 rounds. Duncan nunca esteve la. +160 paga bem pro risco.', raciocinio: 'Moicano e um top 10 com experiencia de elite contra um sem-ranking que nunca lutou 5 rounds. As odds exageram a desvantagem. Se a luta for longa, Moicano domina.' },
        { tipo: 'Metodo', pick: 'Luta acabar por Submissao', odds: '+120', confianca: 'alta', raciocinio: 'Duncan tem 3 subs nas ultimas 4 lutas. Moicano tem 8 subs na carreira. Ambos buscam o chao. A probabilidade de sub e alta independente de quem vencer.' },
        { tipo: 'Over/Under', pick: 'Over 2.5 Rounds', odds: '-140', confianca: 'media', raciocinio: 'Moicano e dificil de finalizar (10 das 20 vitorias por decisao). Mesmo sendo pressionado, tende a sobreviver e levar a luta pros rounds mais tardios. O fator ATT (se conhecem) favorece cautela.' },
        { tipo: 'Duracao', pick: 'Duncan por Sub R1-R2', odds: '+280', confianca: 'baixa', raciocinio: 'Se voce acredita no hype de Duncan, +280 paga MUITO. 3 subs em 4 lutas, wrestling ativo, contra Moicano que defende 62% dos TDs. O cenario existe, mas o risco e alto.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Duncan por Decisao',
        descricao: 'Duncan tem apenas 2 decisoes em 15 vitorias na carreira (13%). E um finalizador nato. Se ele nao conseguir submeter ou nocautear Moicano, provavelmente esta perdendo a luta nos pontos pro veterano. Apostar em Duncan por decisao e ir contra TODO o historico dele.',
      },
      disclaimer: 'Analise estatistica para fins informativos. Aposte com responsabilidade.',
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = translateAnalysis(analise, locale as Lang);
  return <FullAnalysisView analise={data} />;
}
