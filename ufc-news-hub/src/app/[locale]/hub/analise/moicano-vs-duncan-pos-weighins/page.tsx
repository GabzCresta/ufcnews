import type { Lang } from '@/lib/i18n-labels';
import { loadAnalysisData } from '@/lib/load-analysis-locale';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'moicano-vs-duncan-pos-weighins',
  evento_id: null,
  slug: 'moicano-vs-duncan-pos-weighins',
  titulo: 'Moicano vs Duncan: Pos Weigh-Ins | Ex-Parceiros de Treino, Pesagem Limpa e a Dinamica ATT',
  subtitulo: 'Ambos bateram 156 lbs sem drama. Duncan admitiu que Moicano "batia nele" na ATT. Moicano queria Ortega mas recebeu o cara que treina do lado. Odds em -175 a -190 pra Duncan. A fight week revelou camadas que mudam tudo.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,80m', envergadura: '183cm', idade: 36, academia: 'American Top Team' },
      fighter2: { altura: '1,78m', envergadura: '182cm', idade: 32, academia: 'American Top Team' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisao Unanime',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Ex-Parceiros de Treino na ATT', edge: 'fighter1', impact: 9, description: 'Duncan admitiu que Moicano "batia nele" quando ele chegou na ATT. Moicano conhece o jogo de Duncan desde antes do UFC. Essa familiaridade favorece o veterano mais experiente.' },
      { factor: 'Primeiro Main Event de 5 Rounds', edge: 'fighter1', impact: 8, description: 'Duncan nunca passou de 3 rounds. Moicano ja esteve em varios main events. Os championship rounds sao territorio desconhecido pro escoces.' },
      { factor: 'Defesa de Takedown de Moicano (73%)', edge: 'fighter1', impact: 7, description: 'A TDD de Moicano e solida em 73%, mas Dariush derrubou ele 5 vezes recentemente. Ainda assim, muito melhor que os 50% de Duncan.' },
    ],
    xFactor: {
      title: 'Duncan Prefere 5 Rounds, Mas Nunca Esteve La',
      description: 'Duncan disse que "se expressa melhor em 5 rounds." Mas nunca lutou 5. Falar e uma coisa. Manter 4.82 de absorcao e pressao constante por 25 minutos e outra. Se o cardio nao acompanhar a ambicao, Moicano capitaliza.',
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
  evento_nome: 'UFC Fight Night: Moicano vs Duncan | Pos Weigh-Ins',
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
      evento_nome: 'UFC Fight Night: Moicano vs Duncan (UFC Vegas 115)',
      evento_data: '4 de Abril, 2026',
      evento_local: 'UFC Apex, Las Vegas',
      categoria_peso: 'Peso Leve (155 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'O Aluno Voltou Pra Aula',
      tagline_sub: 'Duncan admitiu que Moicano "batia nele" na ATT. Ambos 156 lbs. Pesagem limpa. Odds em -175 a -190 Duncan. Mas Moicano sabe coisas que nenhuma fita de video mostra.',
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
        <!-- INTELLIGENCE: WEIGH-IN BREAKDOWN -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">Pesagem Limpa: 156 lbs Sem Drama</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-emerald-400/5 to-emerald-400/10"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-green-300"></div>
            <div class="relative p-6">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3">PESAGEM OFICIAL</p>
              <div class="grid grid-cols-2 gap-6 mb-4">
                <div class="text-center">
                  <p class="text-xs text-white/40 mb-1">Moicano</p>
                  <p class="font-display text-3xl text-ufc-red">156 lbs</p>
                  <p class="text-[10px] text-white/30 mt-1">Confortavel, sem stress</p>
                </div>
                <div class="text-center">
                  <p class="text-xs text-white/40 mb-1">Duncan</p>
                  <p class="font-display text-3xl text-blue-400">156 lbs</p>
                  <p class="text-[10px] text-white/30 mt-1">Confortavel, sem stress</p>
                </div>
              </div>
              <p class="text-sm text-white/70 leading-relaxed">
                Ambos bateram 156 lbs na balanca, dentro da tolerancia de 1 lb pra lutas sem titulo. Sem corte de peso dramatico, sem toalha, sem segundo pesagem. Os dois chegaram bem. Isso e importante porque um corte limpo significa que ambos vao reidratar bem e entrar no octogono no melhor fisico possivel. Ninguem vai ter desculpa de "cortei peso demais."
              </p>
            </div>
          </div>
        </div>

        <!-- INTELLIGENCE: ATT CONNECTION DEEP DIVE -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">O Segredo Aberto: O Que a ATT Viu e Ninguem Sabe</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-300"></div>
            <div class="relative p-6">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">BASTIDORES DO CAMP</p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                Vamos falar sobre o que realmente importa nessa luta. <strong class="text-ufc-red">Moicano</strong> e <strong class="text-blue-400">Duncan</strong> nao sao apenas lutadores na mesma academia. Eles fizeram sparring. Dividiram o mat. Se conhecem no nivel mais intimo que dois lutadores podem se conhecer: o nivel do treino diario, onde ninguem esta tentando impressionar camera nenhuma.
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-blue-400">Duncan</strong> admitiu abertamente: <em class="text-white/80">"Moicano me batia quando eu cheguei na ATT."</em> Leia essa frase de novo. O cara que e FAVORITO nas odds admitiu que apanhava do azarao no treino. Isso nao significa que Duncan ainda apanha. Significa que Moicano conhece cada habito, cada tendencia, cada tic nervoso do escoces. E mais: Duncan sabe que Moicano sabe.
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                Durante o camp pra essa luta, a ATT tentou isolar os dois o maximo possivel. Mas "isolar" em um gym de 200+ lutadores nao e perfeito. Eles se cruzaram. Os coaches sabem o que cada um estava trabalhando. A questao nao e se eles tem informacao um do outro. A questao e: quem adapta melhor com a informacao que tem?
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                E aqui esta o ponto que NINGUEM esta discutindo: em lutas entre parceiros de treino, o lutador mais EXPERIENTE leva vantagem quase sempre. Porque? Porque ele sabe filtrar informacao. Moicano ja lutou contra todo tipo de adversario. Sabe o que funciona no treino e nao funciona na luta, e vice-versa. Duncan tem 7 lutas no UFC. Moicano tem 19. A diferenca de maturidade tatica e gigantesca.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-amber-400/15 to-transparent"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-amber-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">Duncan Admitiu</p>
                <p class="font-display text-lg text-white mb-2">"ELE ME BATIA"</p>
                <p class="text-xs text-white/50 leading-relaxed">Quando chegou na ATT anos atras, Duncan era dominado por Moicano nos treinos. Agora diz que evoluiu. Sera que evoluiu o suficiente?</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-amber-400/15 to-transparent"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-amber-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">Camp Isolado</p>
                <p class="font-display text-lg text-white mb-2">MAS NAO PERFEITO</p>
                <p class="text-xs text-white/50 leading-relaxed">ATT tentou separar os dois. Nao funcionou 100%. Se cruzaram no gym. Coaches viram os planos de ambos. Informacao vazou pra os dois lados.</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-amber-400/15 to-transparent"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-amber-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">19 vs 7 Lutas UFC</p>
                <p class="font-display text-lg text-white mb-2">MATURIDADE TATICA</p>
                <p class="text-xs text-white/50 leading-relaxed">Em lutas entre parceiros de treino, experiencia filtra informacao melhor. Moicano sabe o que funciona no treino vs na luta. Duncan ainda esta aprendendo.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- INTELLIGENCE: FIGHT WEEK DECLARATIONS -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">O Que a Fight Week Revelou</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/5 via-transparent to-ufc-red/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-ufc-red/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-ufc-red">Moicano</strong> disse ao UFC.com que esta "focado mais na vitoria" dessa vez, nao no bonus. Parece detalhe pequeno, mas e uma mudanca ENORME de mentalidade. O cara que fez o discurso viral do Bitcoin, que virou meme, que sempre busca o show, agora esta falando em pragmatismo. Moicano focado em pontos e controle e um Moicano muito mais perigoso do que Moicano buscando o highlight.
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                Ele tambem revelou que queria lutar em marco contra Brian Ortega, mas recebeu Duncan. Isso e relevante porque mostra que Moicano nao escolheu essa luta. Mas sabe o que e interessante? Moicano conhece Duncan melhor do que conheceria Ortega. O destino talvez tenha dado a ele o matchup mais favoravel sem que ele perceba.
              </p>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-blue-400">Duncan</strong> disse algo que chamou minha atencao: <em class="text-white/80">"Sinto que me expresso melhor em 5 rounds."</em> Isso e MUITO ousado pra alguem que nunca lutou 5 rounds. E a confianca de um lutador que acredita no proprio cardio. Ou a ingenuidade de alguem que nunca sentiu o que e R4 e R5 contra um veterano que controla o ritmo.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                Ele tambem reafirmou: <em class="text-white/80">"Moicano me batia quando eu cheguei na ATT. Agora vou mostrar o quanto evolui."</em> E uma narrativa bonita. Mas vamos ser honestos: admitir que o seu oponente te dominava no treino e dar a ele confianca psicologica gratis. Moicano sabe que Duncan tem medo dele. E esse tipo de conhecimento e uma arma invisivel.
              </p>
            </div>
          </div>
        </div>

        <!-- INTELLIGENCE: ODDS ANALYSIS -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">O Mercado Esta Certo? Uma Analise das Odds</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-emerald-400/5 to-emerald-400/10"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-green-300"></div>
            <div class="relative p-6">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3">ODDS FIGHT WEEK</p>
              <div class="grid grid-cols-2 gap-6 mb-4">
                <div class="text-center">
                  <p class="text-xs text-white/40 mb-1">Duncan (Favorito)</p>
                  <p class="font-display text-3xl text-blue-400">-175 a -190</p>
                  <p class="text-[10px] text-white/30 mt-1">Leve favorito</p>
                </div>
                <div class="text-center">
                  <p class="text-xs text-white/40 mb-1">Moicano (Azarao)</p>
                  <p class="font-display text-3xl text-ufc-red">+145 a +160</p>
                  <p class="text-[10px] text-white/30 mt-1">Valor real?</p>
                </div>
              </div>
              <p class="text-sm text-white/60 leading-relaxed mb-4">
                As odds se moveram contra <strong class="text-ufc-red">Moicano</strong> durante a fight week. <strong class="text-blue-400">Duncan</strong> abriu como favorito e o dinheiro continuou chegando nele. O mercado esta comprando o hype: 4 vitorias seguidas, 3 por sub, momentum claro. E uma narrativa convincente.
              </p>
              <p class="text-sm text-white/60 leading-relaxed">
                Mas o mercado esta ignorando tres coisas: 1) Duncan nunca enfrentou um ranqueado, 2) nunca lutou 5 rounds, 3) o proprio Duncan admitiu que Moicano dominava ele no treino. Um top 10 veterano como azarao a +145/+160 contra um sem-ranking que nunca testou o proprio limite de resistencia? O mercado esta pagando pelo hype, nao pela analise.
              </p>
            </div>
          </div>
        </div>

        <!-- MOICANO MINDSET SHIFT -->
        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">O Moicano Que Ninguem Esperava</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/10 via-ufc-red/5 to-ufc-red/10"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
            <div class="relative p-6">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-3">MUDANCA DE MENTALIDADE</p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-ufc-red">Moicano</strong> "focado na vitoria, nao no bonus" e uma versao mais perigosa do que o showman do UFC 300. O cara que faz discursos virais e pega o microfone e divertido. Mas o cara que desliga o show e joga xadrez por 25 minutos e o tipo de lutador que vence lutas como essa.
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                Lembra das 10 submissoes na carreira? No UFC, Moicano tende a vencer por decisao. 8 das 12 vitorias foram por pontos. Ele sabe jogar o jogo longo. Sabe controlar distancia. Sabe ganhar rounds. E contra um cara que absorve 4.82 strikes por minuto e tem TD defense de 50%, esse estilo pragmatico pode ser devastador.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                A mae de Moicano foi assassinada no Brasil durante a carreira dele. Ele luta com uma motivacao que vai alem de rankings e bonuses. Aos 36 anos, com as costas na parede, com 2 derrotas seguidas, esse pode ser o tipo de situacao que traz o melhor Moicano. A historia do MMA esta cheia de veteranos que encontram outra marcha quando tudo parece perdido. E Moicano conhece o caminho: ele ja esteve como azarao de +200 no UFC 300 e dominou.
              </p>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: '#10 Peso Leve', fighter2: 'Sem Ranking' },
        { dimensao: 'Sequencia', fighter1: '2 derrotas seguidas', fighter2: '4 vitorias seguidas' },
        { dimensao: 'Pesagem', fighter1: '156 lbs (confortavel)', fighter2: '156 lbs (confortavel)' },
        { dimensao: 'Camp', fighter1: 'Foco em vitoria, nao no bonus. Conhece Duncan do treino diario.', fighter2: 'Camp isolado na ATT. Diz que evoluiu desde que apanhava do Moicano.' },
        { dimensao: 'Risco', fighter1: '3a derrota seguida = ranking despenca, conversa de aposentadoria', fighter2: 'Perder o primeiro main event contra o cara que te batia no treino' },
        { dimensao: 'Legado', fighter1: 'Redencao ou inicio do fim aos 36 anos', fighter2: 'Maior vitoria da carreira, entrada no ranking' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'O MESTRE ENSINA A ULTIMA LICAO',
          subtitulo: 'Moicano prova que experiencia, fight IQ e conhecimento intimo do adversario vencem hype',
          consequencias: [
            { tag: 'VALIDACAO', texto: 'As 2 derrotas foram contra elite (campeao + top 10). Contra o sem-ranking que ele dominava no treino, Moicano mostra o gap de nivel.' },
            { tag: 'RANKING', texto: 'Moicano se mantem firme no top 10 e respira. A narrativa de declinio desacelera consideravelmente.' },
            { tag: 'NARRATIVA', texto: 'O cara do Bitcoin, com as costas na parede, focado em vitoria e nao no show. O MMA adora uma historia de redencao.' },
          ],
          proxima_luta: 'Moicano vs top 7-12 LW (Dustin Poirier, Dan Hooker ou Michael Chandler)',
        },
        fighter2_vence: {
          titulo: 'THE PROBLEM CHEGA AO RANKING',
          subtitulo: 'Duncan mostra que a evolucao e real e que o cara que apanhava na ATT agora domina o veterano',
          consequencias: [
            { tag: 'ASCENSAO', texto: 'Duncan entra no top 15 com a maior vitoria da carreira. Vencer um top 10 no seu primeiro main event e declaracao de intencoes.' },
            { tag: 'CREDIBILIDADE', texto: 'Prova que a sequencia de 4 vitorias nao era so contra adversarios fracos. Primeiro teste real, aprovado.' },
            { tag: 'MOICANO', texto: '3a derrota seguida aos 36 anos. O caminho de volta ao topo fica quase impossivel. Conversa sobre futuro na divisao comeca.' },
          ],
          proxima_luta: 'Duncan vs top 10-15 LW (Bobby Green, Paddy Pimblett ou Benoit Saint Denis)',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Renato Moicano',
        color: 'red',
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Beneil Dariush', result: 'L', method: 'Decisao Unanime', opponent_rank: '#9 LW', quality_score: 3, quality_label: 'Bom', note: 'Luta morna. Apenas 39 strikes. Derrubado 5 vezes. Nao conseguiu impor ritmo.' },
          { date: 'Jan 2025', opponent: 'Islam Makhachev', result: 'L', method: 'Submissao R1', opponent_rank: 'Campeao', quality_score: 5, quality_label: 'Excelente', note: 'Short notice pelo titulo. Islam submeteu rapido. Sem desonra perder pro melhor do mundo.' },
          { date: 'Dez 2024', opponent: 'Benoit Saint Denis', result: 'W', method: 'Decisao Unanime', opponent_rank: '#12 LW', quality_score: 3, quality_label: 'Bom', note: 'UFC 310. Vitoria solida, controlou a distancia.' },
          { date: 'Abr 2024', opponent: 'Jalin Turner', result: 'W', method: 'Decisao Unanime', opponent_rank: '#11 LW', quality_score: 3, quality_label: 'Bom', note: 'UFC 300. Azarao de +200. Depois veio o discurso viral do Bitcoin.' },
          { date: 'Nov 2023', opponent: 'Drew Dober', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria tranquila por pontos contra gatekeeper solido.' },
        ],
        full_fight_history: [
          { date: 'Ago 2014', opponent: 'Zubaira Tukhugov', result: 'L', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Debut UFC, derrota' },
          { date: 'Nov 2015', opponent: 'Tom Niinimaki', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Primeira vitoria UFC' },
          { date: 'Mai 2016', opponent: 'Zubaira Tukhugov', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Revanche, vitoria' },
          { date: 'Set 2016', opponent: 'Alex Oliveira', result: 'D', method: 'SD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Empate' },
          { date: 'Fev 2017', opponent: 'Jeremy Stephens', result: 'W', method: 'UD', opponent_rank: '#6 FW', quality_score: 3, quality_label: 'Bom', note: 'Vitoria contra ranqueado' },
          { date: 'Jun 2017', opponent: 'Brian Ortega', result: 'L', method: 'Sub R3', opponent_rank: '#4 FW', quality_score: 4, quality_label: 'Muito Bom', note: 'Derrota para futuro desafiante' },
          { date: 'Fev 2018', opponent: 'Calvin Kattar', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria por pontos' },
          { date: 'Dez 2018', opponent: 'Mirsad Bektic', result: 'W', method: 'UD', opponent_rank: '#10 FW', quality_score: 3, quality_label: 'Bom', note: 'Vitoria contra ranqueado' },
          { date: 'Fev 2019', opponent: 'Jose Aldo', result: 'L', method: 'KO R2', opponent_rank: '#3 FW', quality_score: 5, quality_label: 'Excelente', note: 'Nocauteado pela lenda' },
          { date: 'Jun 2019', opponent: 'Korean Zombie', result: 'L', method: 'KO R1', opponent_rank: '#4 FW', quality_score: 4, quality_label: 'Muito Bom', note: 'Nocauteado rapido' },
          { date: 'Mar 2020', opponent: 'Damir Hadzovic', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Subiu pro peso leve' },
          { date: 'Fev 2022', opponent: 'Alexander Hernandez', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Finalizacao no chao' },
          { date: 'Jul 2022', opponent: 'Brad Riddell', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria por pontos' },
          { date: 'Nov 2023', opponent: 'Drew Dober', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria tranquila' },
          { date: 'Abr 2024', opponent: 'Jalin Turner', result: 'W', method: 'UD', opponent_rank: '#11 LW', quality_score: 3, quality_label: 'Bom', note: 'UFC 300, discurso viral' },
          { date: 'Dez 2024', opponent: 'Benoit Saint Denis', result: 'W', method: 'UD', opponent_rank: '#12 LW', quality_score: 3, quality_label: 'Bom', note: 'UFC 310' },
          { date: 'Jan 2025', opponent: 'Islam Makhachev', result: 'L', method: 'Sub R1', opponent_rank: 'Campeao', quality_score: 5, quality_label: 'Excelente', note: 'Short notice, titulo' },
          { date: 'Jun 2025', opponent: 'Beneil Dariush', result: 'L', method: 'UD', opponent_rank: '#9 LW', quality_score: 3, quality_label: 'Bom', note: 'Luta morna, derrubado 5x' },
        ],
        momentum_score: 4,
        momentum_label: 'Em Recuperacao',
        momentum_trend: 'descending',
        momentum_note: 'Moicano vem de 2 derrotas seguidas, mas o contexto importa: a primeira foi pro campeao do mundo em short notice (Makhachev), a segunda pro veterano Dariush com game plan de wrestling. Antes disso, 5 vitorias seguidas incluindo o iconico UFC 300. Na fight week, a mentalidade mudou. "Focado na vitoria, nao no bonus." Aos 36 anos, com a mae assassinada como motivacao eterna e o conhecimento intimo de Duncan pelo treino na ATT, Moicano pode estar mais preparado do que as odds sugerem.',
      },
      fighter2: {
        nome: 'Chris Duncan',
        color: 'blue',
        recent_fights: [
          { date: 'Dez 2025', opponent: 'Terrance McKinney', result: 'W', method: 'Submissao R1 (anaconda choke, 2:30)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'UFC 323. Anaconda choke. Rapido e tecnico. Mostrou o arsenal de submissoes.' },
          { date: 'Ago 2025', opponent: 'Mateusz Rebecki', result: 'W', method: 'Decisao Unanime (FOTN)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Guerra de 3 rounds. Bonus de FOTN. Mostrou cardio e vontade em 15 minutos.' },
          { date: 'Mar 2025', opponent: 'Jordan Vucenic', result: 'W', method: 'Submissao R2 (guilhotina, 3:42)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Mais uma guilhotina. A arma favorita em acao.' },
          { date: 'Set 2024', opponent: 'Bolaji Oki', result: 'W', method: 'Submissao R1 (guilhotina, 3:34)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'POTN bonus. Guilhotina dominante.' },
          { date: 'Fev 2024', opponent: 'Manuel Torres', result: 'L', method: 'Submissao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Unica derrota UFC. Pego no chao. Vulnerabilidade exposta.' },
        ],
        full_fight_history: [
          { date: 'Mar 2023', opponent: 'Omar Morales', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Debut UFC' },
          { date: 'Jul 2023', opponent: 'Chepe Mariscal', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Nocaute rapido' },
          { date: 'Fev 2024', opponent: 'Manuel Torres', result: 'L', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Unica derrota UFC' },
          { date: 'Set 2024', opponent: 'Bolaji Oki', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'POTN' },
          { date: 'Mar 2025', opponent: 'Jordan Vucenic', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Guilhotina' },
          { date: 'Ago 2025', opponent: 'Mateusz Rebecki', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'FOTN' },
          { date: 'Dez 2025', opponent: 'Terrance McKinney', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Anaconda choke' },
        ],
        momentum_score: 8,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: 'Duncan esta no melhor momento da carreira. 4 vitorias seguidas, 3 por submissao, bonus de POTN e FOTN. Na fight week, mostrou confianca dizendo que "se expressa melhor em 5 rounds." Admitiu que Moicano "batia nele" na ATT mas diz que evoluiu. O hype e real. Mas o salto de qualidade de adversario e ENORME: todos os 7 oponentes UFC estavam sem ranking. Moicano e o primeiro ranqueado. E o estilo southpaw com SApM de 4.82 levanta questoes serias sobre durabilidade em 25 minutos.',
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
      oponentes_em_comum_note: 'Nao ha oponentes em comum no UFC, mas a conexao ATT e mais reveladora que qualquer oponente em comum. Eles se conhecem no mat. O gap de qualidade de oposicao e GRITANTE: Moicano enfrentou Makhachev, Aldo, Ortega, Korean Zombie, Dariush, Saint Denis. Duncan enfrentou 7 lutadores sem ranking. Esse e o primeiro teste real da carreira de Duncan no UFC. Moicano ja passou por dezenas.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 2.14, valueB: 0, maxVal: 7, format: 'decimal', note: 'Moicano media 2.14 SLpM. Volume baixo, estilo tecnico e seletivo. Stats oficiais de Duncan indisponiveis pra SLpM, mas o SApM de 4.82 sugere ritmo alto.' },
        { label: 'Precisao de Strikes (%)', valueA: 37, valueB: 0, maxVal: 100, format: 'percent', note: 'Moicano com 37% de precisao. Nao e elite, mas conecta com intencao. Stats de precisao de Duncan nao divulgadas oficialmente.' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.42, valueB: 4.82, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'ENORME diferenca. Moicano absorve 2.42 SApM. Duncan absorve 4.82. O escoces leva QUASE O DOBRO de strikes. Vantagem clara de Moicano.' },
        { label: 'Defesa de Strikes (%)', valueA: 63, valueB: 0, maxVal: 100, format: 'percent', note: 'Moicano defende 63% dos strikes. Solido. Stats de Str. Def. de Duncan nao divulgadas.' },
        { label: 'Takedowns por 15 Min', valueA: 2.98, valueB: 0, maxVal: 5, format: 'decimal', note: 'Moicano media 2.98 TDs por 15 min com 44% de precisao. Volume de takedown maior do que muitos imaginam.' },
        { label: 'Precisao de Takedown (%)', valueA: 44, valueB: 42, maxVal: 100, format: 'percent', note: 'Muito parecidos. Moicano 44%, Duncan 42%. Ambos eficientes quando tentam.' },
        { label: 'Defesa de Takedown (%)', valueA: 73, valueB: 50, maxVal: 100, format: 'percent', note: 'ENORME vantagem Moicano. 73% vs 50%. Duncan defende apenas METADE dos takedowns que recebe. Vulnerabilidade critica.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '36 anos', fighter2: '32 anos', note: 'Moicano 4 anos mais velho. Juventude vs experiencia.' },
        { label: 'Altura', fighter1: '1,80m (5\'11")', fighter2: '1,78m (5\'10")', note: 'Diferenca minima. 2cm.' },
        { label: 'Envergadura', fighter1: '183cm (72")', fighter2: '182cm (71.5")', note: 'Moicano com meio cm a mais. Insignificante.' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Southpaw', note: 'Ortodoxo vs Southpaw! Cria angulos diferentes e muda a dinamica de striking completamente.' },
        { label: 'Academia', fighter1: 'American Top Team', fighter2: 'American Top Team', note: 'MESMO GYM. Coconut Creek, Florida. Se conhecem do treino diario.' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking em Pe', valueA: 68, valueB: 65, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Moicano e mais tecnico e seletivo (37% acc, 2.42 SApM). Duncan e mais agressivo mas absorve 4.82 SApM. O southpaw de Duncan cria angulos, mas a absorcao e alarmante contra um counter-striker como Moicano.' },
        { label: 'Wrestling Ofensivo', valueA: 70, valueB: 65, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Moicano media 2.98 TDs por 15 min com 44% de precisao. E um numero MAIOR do que a maioria das pessoas percebe. Contra a TD defense de 50% do Duncan, isso e uma arma real.' },
        { label: 'Jiu-Jitsu / Submissoes', valueA: 78, valueB: 75, labelA: 'Muito Bom', labelB: 'Muito Bom', advantage: 'even', advantage_note: 'Moicano tem 10 subs na carreira. Duncan tem 4 no UFC com 3 nas ultimas 4 lutas (incluindo guilhotinas e anaconda choke). Ambos perigosos no chao. Se a luta for pro ground, e xadrez puro entre dois faixas pretas.' },
        { label: 'Defesa e Durabilidade', valueA: 72, valueB: 50, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Moicano: 63% Str. Def, 73% TD Def, 2.42 SApM. Duncan: 50% TD Def, 4.82 SApM. A diferenca de durabilidade defensiva e enorme. Duncan troca dano por dano. Moicano minimiza dano recebido.' },
        { label: 'Cardio e Gas', valueA: 75, valueB: 55, labelA: 'Muito Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Moicano tem experiencia comprovada em 5 rounds. Tempo medio de luta: 9:28. Duncan NUNCA lutou 5 rounds. Disse que se "expressa melhor" em 5. Mas falar e diferente de fazer. A maior incognita da luta.' },
        { label: 'Experiencia de Elite', valueA: 82, valueB: 40, labelA: 'Muito Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Moicano enfrentou Makhachev, Aldo, Ortega, Korean Zombie, Dariush. Duncan nao enfrentou ninguem ranqueado. 19 lutas UFC vs 7. O gap de experiencia e o maior fator dessa luta.' },
      ],
      insight: 'O perfil de habilidades pos weigh-in reforeca o que a fight week revelou: Moicano tem vantagens em quase todas as areas tecnicas EXCETO agressividade e ritmo. Duncan depende de pressao e volume pra compensar as lacunas defensivas. A questao central permanece: Duncan consegue impor ritmo alto o suficiente pra sobrecarregar as defesas superiores de Moicano antes que os championship rounds cheguem? Se sim, Duncan vence. Se nao, Moicano tem as ferramentas pra capitalizar em cada fraqueza do escoces.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Moicano',
        ko_tko: { count: 2, percent: 10 },
        submission: { count: 10, percent: 50 },
        decision: { count: 8, percent: 40 },
        total_wins: 20,
      },
      fighter2: {
        nome: 'Duncan',
        ko_tko: { count: 7, percent: 47 },
        submission: { count: 4, percent: 27 },
        decision: { count: 4, percent: 27 },
        total_wins: 15,
      },
      insight: 'Os perfis de finalizacao revelam muito. Moicano e 50% sub, 40% decisao, apenas 10% KO. E um grappler que sabe ganhar nos pontos. No UFC, 8 de 12 vitorias foram por decisao. Duncan e mais variado: 47% KO, 27% sub, 27% decisao. Finalizador nato com 73% de vitorias por finish. O padrao esta claro: se a luta for longa, favorece Moicano. Se Duncan conseguir impor ritmo cedo, ele busca o finish. A dinamica favorito/azarao e baseada nisso: o mercado acredita que Duncan vai impor o ritmo. Nos achamos que Moicano sabe como desacelerar a luta.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 7,
          danger_label: 'VANTAGEM DUNCAN',
          color: 'green',
          title: 'A Tempestade Inicial',
          description: 'Duncan e mais perigoso no primeiro round. Pressao, volume, angulos do southpaw, e a guilhotina que aparece em transicoes de takedown. 3 das ultimas 4 vitorias de Duncan foram por sub no R1-R2. Se ele encaixar um takedown cedo e transitar, a finalizacao pode vir rapido. Moicano precisa sobreviver sem entrar em panico. O veterano sabe como: distancia, jab, nao dar o pescoco.',
        },
        {
          rounds: 'R2-R3',
          danger_level: 5,
          danger_label: 'EQUILIBRADO',
          color: 'gold',
          title: 'O Xadrez Comeca',
          description: 'Se Moicano sobreviver o R1, os rounds 2 e 3 sao o campo de batalha tatico. Duncan ainda tem gas, mas o ritmo de 4.82 SApM comeca a cobrar preco. Moicano pode comecar a encontrar o timing de counter-strike e explorar a TD defense de 50% do Duncan. O grappling pode ir pra qualquer lado. A familiaridade do treino juntos torna tudo mais imprevisivel: ambos sabem o que o outro gosta de fazer.',
        },
        {
          rounds: 'R4-R5',
          danger_level: 3,
          danger_label: 'VANTAGEM MOICANO',
          color: 'red',
          title: 'Territorio do Veterano',
          description: 'Aqui Moicano domina. Duncan NUNCA esteve em R4 ou R5. Moicano ja esteve varias vezes. Mesmo que Duncan diga que "se expressa melhor em 5 rounds", ninguem sabe como o corpo dele reage a 20+ minutos de luta contra um top 10. Se o cardio de Duncan falhar, Moicano capitaliza com takedowns (2.98/15 min contra 50% TDD) e controle. A experiencia vira arma letal.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'Brain', title: '"Ele Me Batia na ATT"', fighter: 'Duncan', risk_level: 'RISCO MEDIO', risk_color: 'yellow', description: 'Duncan admitiu publicamente que Moicano o dominava no treino. Mesmo que tenha evoluido, essa admissao da a Moicano confianca psicologica. E Duncan pode ter um bloqueio mental subconsciente contra o cara que sempre esteve acima dele na hierarquia do gym.' },
        { icon: 'Activity', title: 'Primeiro Main Event de 5 Rounds', fighter: 'Duncan', risk_level: 'RISCO ALTO', risk_color: 'red', description: 'Duncan NUNCA lutou 5 rounds. Disse que "se expressa melhor em 5 rounds" mas isso e teoria. Na pratica, manter pressao e volume por 25 minutos e outra historia. O SApM de 4.82 sugere um estilo que GASTA MUITO. A incognita do cardio e o maior risco da luta.' },
        { icon: 'TrendingUp', title: 'Mentalidade "Focado na Vitoria"', fighter: 'Moicano', risk_level: 'POSITIVO', risk_color: 'green', description: 'Moicano disse ao UFC.com que esta focado na vitoria, nao no bonus. Essa mudanca de mentalidade de showman pra pragmatico pode ser a chave. Um Moicano tatico e controlador e muito mais perigoso que um Moicano buscando highlights.' },
        { icon: 'Target', title: 'SApM de 4.82', fighter: 'Duncan', risk_level: 'RISCO ALTO', risk_color: 'red', description: 'Duncan absorve 4.82 strikes significativos por minuto. Isso e ALARMANTE pra um main eventer. Contra um counter-striker como Moicano que sabe escolher momentos, essa absorcao pode significar dano acumulado e problemas nos rounds finais.' },
        { icon: 'Shield', title: 'TD Defense de 50%', fighter: 'Duncan', risk_level: 'RISCO ALTO', risk_color: 'red', description: 'Duncan defende apenas metade dos takedowns. Moicano media 2.98 TDs por 15 min com 44% de precisao. Faca a conta: em 25 minutos, Moicano pode tentar 5+ takedowns e acertar 2-3. No chao, Moicano tem 10 submissoes na carreira. E uma vulnerabilidade critica.' },
        { icon: 'Zap', title: 'Angulos do Southpaw', fighter: 'Duncan', risk_level: 'POSITIVO', risk_color: 'green', description: 'Duncan e southpaw. Moicano e ortodoxo. A dinamica ortodoxo vs southpaw cria angulos diferentes e favorece o southpaw no jab cruzado e no power straight da mao esquerda. Duncan pode usar isso pra encontrar aberturas que um ortodoxo nao ofereceria.' },
        { icon: 'MapPin', title: 'UFC Apex: Octogono Menor', fighter: 'Duncan', risk_level: 'POSITIVO', risk_color: 'green', description: 'O Apex tem octogono menor que arenas normais. Menos espaco pra Moicano recuar e controlar distancia. Mais espaco pra Duncan pressionar e encurralar. Favorece o lutador que avanca.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Moicano',
        total_probability: 47,
        scenarios: [
          { name: 'Maratona do Mestre', probability: 25, method: 'Decisao Unanime', description: 'Moicano sobrevive o R1, controla a distancia com o jab, e faz Duncan gastar gas. Nos championship rounds (R4-R5), a experiencia domina. Duncan nunca lutou 5 rounds e o ritmo cai. Moicano acumula pontos com controle e takedowns (2.98/15 min contra 50% TDD). Vence nos pontos com maestria.' },
          { name: 'O Aluno Aprendeu Demais', probability: 12, method: 'Submissao R3-R4', description: 'Moicano espera Duncan cansar e entao aciona o wrestling. No chao, um Duncan esgotado comete um erro e Moicano encaixa uma guilhotina ou RNC. Com 10 subs na carreira e o conhecimento intimo do jogo de chao do Duncan pelo treino na ATT, Moicano sabe exatamente onde atacar.' },
          { name: 'Counter-Strike Cirurgico', probability: 10, method: 'TKO R3-R5', description: 'Duncan absorve 4.82 SApM e avanca reto. Moicano encontra o timing e encaixa contragolpes limpos que acumulam dano. No R3 ou alem, Duncan esta machucado e desacelerado. Moicano sente e acelera ate o arbitro parar.' },
        ],
      },
      fighter2: {
        nome: 'Duncan',
        total_probability: 50,
        scenarios: [
          { name: 'Tempestade Escocesa', probability: 22, method: 'Submissao R1-R2', description: 'Duncan pressiona desde o primeiro segundo, usa angulos do southpaw pra criar aberturas, e encaixa um takedown. No chao, transita pra guilhotina ou anaconda choke. 3 das ultimas 4 vitorias foram por sub. Moicano e pego antes de poder impor o ritmo lento.' },
          { name: 'Pressao Implacavel', probability: 16, method: 'Decisao Unanime', description: 'Duncan mantem ritmo alto por todos os 5 rounds (o cenario que ele acredita). Volume de strikes, takedowns constantes, e controle de grappling dominam os scorecards. Duncan prova que o cardio aguenta e que "se expressa melhor em 5 rounds" nao era papo.' },
          { name: 'TKO por Acumulo', probability: 12, method: 'TKO R2-R3', description: 'O volume e a pressao de Duncan acumulam dano. No octogono menor do Apex, Moicano nao tem espaco pra recuar. Strikes e takedowns constantes quebram Moicano ate o arbitro parar a luta.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Renato Moicano',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime',
      confidence_score: 6,
      confidence_label: 'MEDIA',
      explanation: 'A fight week mudou minha perspectiva. Na analise pre-luta, demos Duncan como favorito a 57%. Pos weigh-in, estou revertendo pra Moicano por uma margem apertada. O motivo: tres revelacoes criticas. 1) Duncan admitiu que Moicano "batia nele" na ATT. Isso significa que Moicano tem vantagem psicologica E informacional. 2) Moicano disse que esta "focado na vitoria, nao no bonus." Um Moicano pragmatico e tatico e muito mais perigoso. 3) A TD defense de Duncan e de apenas 50% e Moicano media 2.98 TDs por 15 min. O cenario mais provavel: Moicano sobrevive os rounds iniciais de pressao, comeca a explorar a TDD baixa do Duncan, e nos championship rounds controla a luta com experiencia e fight IQ. Duncan nunca lutou 5 rounds. Moicano ja esteve la varias vezes. A experiencia vence quando o hype encontra a realidade.',
      x_factor: {
        title: 'O Conhecimento Intimo da ATT',
        description: 'Moicano treinou com Duncan por anos. Dominava ele no sparring. Sabe cada habito, cada tendencia. Em lutas entre parceiros de treino, o mais experiente quase sempre leva vantagem. Moicano tem 19 lutas UFC contra 7 de Duncan. Esse tipo de maturidade tatica, combinado com o conhecimento intimo, e uma arma que nao aparece nas estatisticas.',
      },
      upset_alert: {
        title: 'Duncan por Sub R1-R2 Ainda e o Cenario Mais Perigoso',
        description: 'Se Duncan encaixar um takedown cedo e transitar pro chao, a guilhotina ou anaconda choke podem aparecer. 3 das ultimas 4 vitorias de Duncan foram exatamente assim. Moicano foi submetido por Makhachev e Ortega no passado. Se Duncan impor o ritmo antes que Moicano possa jogar xadrez, a experiencia nao importa.',
      },
      probabilities: {
        fighter1: { nome: 'Moicano', percent: 47 },
        fighter2: { nome: 'Duncan', percent: 50 },
        draw: 3,
      },
      value_picks: {
        moneyline: { pick: 'Moicano (+145 a +160)', reasoning: 'Um top 10 veterano como azarao contra um sem-ranking que nunca lutou 5 rounds e admitiu que apanhava do adversario no treino. As odds exageram a vantagem de Duncan. Moicano e o melhor valor do card.' },
        method: { pick: 'Moicano por Decisao (+250)', reasoning: '8 de 12 vitorias UFC de Moicano foram por decisao. Se ele jogar o jogo longo e explorar a TDD de 50% do Duncan, a decisao e o desfecho mais provavel. +250 e excelente valor.' },
        over_under: { pick: 'Over 2.5 Rounds', rounds: 2.5, reasoning: 'Moicano e duro de finalizar e sabe sobreviver. A familiaridade entre os dois elimina surpresas. O fator ATT tende a produzir lutas mais longas e taticas. Over 2.5 a +110 tem edge.' },
        best_value: 'Moicano ML (+145 a +160) e a aposta de valor da noite. Top 10 como azarao contra sem-ranking que nunca lutou 5 rounds. Nao compre o hype. Compre a experiencia.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'O Jab de Moicano nos Primeiros 3 Minutos', icon: 'Target', description: 'Se Moicano estiver lancando o jab e mantendo Duncan a distancia nos primeiros 3 minutos, e sinal de que o game plan pragmatico esta funcionando. Se Moicano recuar e parecer pressionado, Duncan esta impondo o ritmo e a luta pode ser curta.' },
        { num: 2, title: 'A Reacao de Duncan ao Primeiro Takedown de Moicano', icon: 'Shield', description: 'Moicano media 2.98 TDs por 15 min. Quando ele tentar o primeiro takedown, observe: Duncan defende ou nao? Se Moicano derruba facil, a TDD de 50% esta sendo confirmada e o game plan de controle ganha vida. Se Duncan defende, Moicano precisa de outro caminho.' },
        { num: 3, title: 'O Ritmo de Duncan no Final do R2', icon: 'Activity', description: 'O R2 e onde voce vai ver o primeiro sinal de cardio. Duncan mantem o volume alto? As maos caem? Os takedowns perdem forca? Se Duncan parecer fresco no final do R2, Moicano esta em problema. Se Duncan estiver buscando respiro, os championship rounds vao ser territorios do veterano.' },
        { num: 4, title: 'Os Angulos do Southpaw', icon: 'Zap', description: 'Duncan e southpaw contra o ortodoxo de Moicano. Observe se Duncan esta encontrando angulos com o left straight e se Moicano ajusta o footwork. Se Moicano esta circulando pra longe da mao forte de Duncan (pra direita de Moicano), ele esta fazendo o basico. Se nao, problema.' },
        { num: 5, title: 'A Linguagem Corporal no R4', icon: 'Brain', description: 'O R4 e onde essa luta pode ser decidida. Duncan NUNCA esteve aqui. Moicano ja. Observe: Duncan esta respirando pela boca? As maos estao mais baixas? Ele para de tentar takedowns? Se sim, Moicano sabe que e hora de acelerar e capitalizar em cada lacuna defensiva do escoces cansado.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'POS WEIGH-IN: MOICANO VS DUNCAN', content: 'UFC FIGHT NIGHT | Apex, Las Vegas\n4 de Abril | 5 Rounds | Peso Leve\n\nAmbos 156 lbs. Pesagem limpa.\nEx-parceiros de treino na ATT.\nDuncan admitiu: "Moicano me batia."\n\nO aluno voltou pra aula.', color: 'gold' },
        { slide_number: 2, title: 'O QUE A FIGHT WEEK REVELOU', content: 'MOICANO:\n"Focado na vitoria, nao no bonus."\nQueria lutar vs Ortega, recebeu Duncan.\nConhece o jogo do escoces do treino diario.\n\nDUNCAN:\n"Me expresso melhor em 5 rounds."\n(Nunca lutou 5 rounds)\nAdmitiu que Moicano dominava ele na ATT.', color: 'gold' },
        { slide_number: 3, title: 'O DADO QUE MUDA TUDO', content: 'TD Defense:\nMoicano: 73%\nDuncan: 50%\n\nMoicano media 2.98 TDs por 15 min.\nContra 50% de defesa...\nFaca a conta.\n\nDuncan absorve 4.82 SApM.\nMoicano absorve 2.42 SApM.\nQuase o DOBRO de diferenca.', color: 'red' },
        { slide_number: 4, title: 'PREVISAO POS WEIGH-IN', content: 'MOICANO por Decisao Unanime\n\nConfianca: MEDIA\n47% Moicano / 50% Duncan\n\nMudamos a pick da analise pre-luta.\n3 motivos:\n1) Duncan admitiu que apanhava no treino\n2) Moicano pragmatico e mais perigoso\n3) TDD de 50% e uma bomba relogio', color: 'red' },
      ],
      twitter: [
        { num: '1/6', text: 'Pos weigh-in update: Moicano vs Duncan. Ambos 156 lbs, pesagem limpa. Mas a fight week revelou 3 coisas que mudam TUDO. Thread:' },
        { num: '2/6', text: 'Duncan admitiu pro UFC.com: "Moicano me batia quando cheguei na ATT." O FAVORITO disse que APANHAVA do azarao no treino. Isso e informacao que nao aparece nas odds.' },
        { num: '3/6', text: 'Moicano disse: "focado na vitoria, nao no bonus." O showman virou pragmatico. Um Moicano tatico que joga o jogo longo e explora a TDD de 50% do Duncan e muito mais perigoso que o cara buscando highlights.' },
        { num: '4/6', text: 'O dado que todo mundo ignora: Duncan absorve 4.82 SApM. Moicano absorve 2.42. QUASE O DOBRO. E Duncan nunca lutou 5 rounds. "Me expresso melhor em 5 rounds" e bonito de falar. Vamos ver se o corpo concorda.' },
        { num: '5/6', text: 'Mudei minha pick da pre-luta. Era Duncan por sub R2-R3. Agora e Moicano por UD. A fight week revelou um Moicano focado, pragmatico, com vantagem informacional do treino. Contra um Duncan que absorve demais e nunca foi a R4.' },
        { num: '6/6', text: 'Moicano a +145/+160 e o MELHOR valor do card. Top 10 veterano como azarao contra sem-ranking que nunca lutou 5 rounds e admitiu que apanhava do adversario. O mercado esta comprando hype. Nos estamos comprando experiencia.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: 'O favorito dessa luta ADMITIU que apanhava do azarao no treino. E isso muda tudo pra sabado. Moicano vs Duncan, pos weigh-in update.' },
        { time: '10-25s', title: 'Weigh-In Intel', text: 'Ambos 156 lbs, pesagem limpa, sem drama. Mas a fight week revelou 3 bombas. Primeira: Duncan disse ao UFC.com que Moicano "batia nele" quando chegou na ATT. Segunda: Moicano esta "focado na vitoria, nao no bonus." Terceira: Duncan disse que "se expressa melhor em 5 rounds" mas NUNCA lutou 5 rounds na vida.' },
        { time: '25-40s', title: 'A Mudanca', text: 'Na analise pre-luta, eu estava com Duncan. Pos weigh-in, estou mudando pra Moicano. O veterano de 36 anos conhece o jogo do escoces do treino diario. E um Moicano pragmatico, focado em pontos e controle, e mais perigoso que o Moicano showman. Contra um cara com TD defense de 50% e SApM de 4.82, experiencia e controle vencem pressao e hype.' },
        { time: '40-55s', title: 'Pick Final', text: 'Moicano por decisao unanime. Confianca media. E apertado, 47 vs 50. Mas Moicano a +145/+160 como azarao tem VALOR. Top 10 veterano contra sem-ranking que nunca passou de 3 rounds. Nao compre o hype. Compre a experiencia.' },
        { time: '55-65s', title: 'CTA', text: 'Voce concorda com a mudanca? Comenta se esta com Moicano ou Duncan. Segue pra mais analises de fight week. Link na bio pra analise completa.' },
      ],
      tiktok: [
        { hook: 'O FAVORITO dessa luta admitiu que APANHAVA do azarao no treino.', body: 'Duncan disse pro UFC.com: "Moicano me batia quando eu cheguei na ATT." O cara que ta -175 nas odds disse que apanhava do cara que ta +145. Eles treinam juntos. Se conhecem. E Moicano disse que ta "focado na vitoria, nao no bonus." O showman virou pragmatico. Contra um cara com TD defense de 50% e que nunca lutou 5 rounds? Moicano por decisao. Comprem a experiencia, nao o hype.', cta: 'Moicano ou Duncan? Comenta!' },
        { hook: 'Duncan NUNCA lutou 5 rounds. E disse que "se expressa melhor" em 5.', body: 'Chris Duncan absorve 4.82 strikes por minuto. Isso e QUASE O DOBRO do Moicano (2.42). Em 3 rounds, da pra sobreviver. Em 5 rounds contra um top 10 que te conhece do treino? O corpo nao mente. E a TD defense de 50% significa que Moicano pode derrubar ele quando quiser nos championship rounds.', cta: 'O cardio aguenta? Comenta!' },
        { hook: 'Mudei minha pick depois da fight week. E vou te explicar por que.', body: 'Antes: Duncan por sub R2-R3. Agora: Moicano por decisao. Tres motivos. 1) Duncan admitiu que Moicano dominava ele na ATT. Vantagem psicologica. 2) Moicano focado em vitoria, nao em show. Mais perigoso. 3) TD defense de 50% do Duncan contra Moicano com 2.98 TDs por 15 min. As contas nao fecham pro escoces em 5 rounds.', cta: 'Voce teria coragem de mudar a pick? Comenta!' },
      ],
      headlines: [
        'Moicano vs Duncan Pos Weigh-In: O Favorito Admitiu Que Apanhava do Azarao',
        'Fight Week Revelou 3 Bombas Que Mudam a Analise de Moicano vs Duncan',
        'Duncan Nunca Lutou 5 Rounds Mas Diz Que "Se Expressa Melhor." Sera?',
        'TD Defense de 50%: O Numero Que Ninguem Fala Sobre Chris Duncan',
        'O Moicano Pragmatico: Por Que a Mudanca de Mentalidade Muda Tudo',
        'Moicano a +160: A Melhor Aposta de Valor do UFC Vegas 115',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '+145 a +160',
        fighter2_odds: '-175 a -190',
        fighter1_name: 'Renato Moicano',
        fighter2_name: 'Chris Duncan',
        source: 'Media de DraftKings, FanDuel e BetMGM (abril 2026)',
      },
      edges: [
        { icon: 'Shield', titulo: 'TD Defense de Duncan e 50%', stat_headline: 'DUNCAN DEFENDE APENAS METADE DOS TAKEDOWNS. MOICANO MEDIA 2.98 TDS POR 15 MIN.', contexto: 'Em 25 minutos, Moicano pode tentar 5+ takedowns e acertar 2-3 contra a TDD de 50%. No chao, Moicano tem 10 submissoes na carreira. A matematica nao fecha pro Duncan em luta longa.', implicacao_aposta: 'Favorece Moicano em lutas longas e Over rounds. Moicano por decisao ganha valor.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Activity', titulo: 'Duncan Nunca Lutou 5 Rounds', stat_headline: 'ZERO LUTAS DE 5 ROUNDS. PRIMEIRO MAIN EVENT DA CARREIRA.', contexto: 'Duncan disse que "se expressa melhor em 5 rounds" mas nunca testou. O SApM de 4.82 sugere estilo que gasta MUITO. O FOTN contra Rebecki mostrou cardio em 3 rounds, mas 5 e outra historia.', implicacao_aposta: 'Favorece Over 2.5 rounds e Moicano ML. Se a luta passar do R3, Duncan entra em territorio desconhecido.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Target', titulo: 'SApM de 4.82 de Duncan', stat_headline: 'DUNCAN ABSORVE 4.82 STRIKES POR MINUTO. MOICANO ABSORVE 2.42. QUASE O DOBRO.', contexto: 'Duncan troca dano por dano. Contra um counter-striker tecnico como Moicano que sabe escolher momentos, essa absorcao significa dano acumulado progressivo. Em 5 rounds, a conta chega.', implicacao_aposta: 'Favorece Moicano em qualquer duracao. O dano acumulado favorece o lutador que leva menos.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Brain', titulo: 'Fator ATT: Parceiros de Treino', stat_headline: 'DUNCAN ADMITIU QUE MOICANO "BATIA NELE" NA ATT.', contexto: 'Em lutas entre parceiros de treino, o mais experiente tende a levar vantagem. Moicano tem 19 lutas UFC vs 7 de Duncan. A familiaridade elimina surpresas e favorece quem sabe filtrar informacao.', implicacao_aposta: 'Favorece Moicano e Over rounds. Lutas entre parceiros tendem a ser mais taticas e longas.', edge_level: 'moderado', fighter_side: 'fighter1' },
        { icon: 'Zap', titulo: 'Guilhotina de Duncan', stat_headline: '3 SUBMISSOES NAS ULTIMAS 4 LUTAS. GUILHOTINA E A ARMA FAVORITA.', contexto: 'Duncan tem guilhotina de elite (Oki, Vucenic) e anaconda choke (McKinney). Se ele encaixar um takedown e transitar, a finalizacao pode ser rapida. Moicano foi submetido por Makhachev e Ortega.', implicacao_aposta: 'Favorece prop "sub" e Duncan nos primeiros rounds. Se voce acredita no early finish, Duncan por sub R1-R2 paga bem.', edge_level: 'moderado', fighter_side: 'fighter2' },
        { icon: 'MapPin', titulo: 'Apex: Octogono Menor', stat_headline: 'UFC APEX TEM OCTOGONO 25 FEET VS 30 FEET DAS ARENAS.', contexto: 'Menos espaco pra Moicano circular e manter distancia. Mais espaco pra Duncan pressionar e encurralar. O octogono menor historicamente favorece fighters de pressao.', implicacao_aposta: 'Favorece Duncan e Under rounds. O octogono menor facilita engajamento e finalizacoes.', edge_level: 'leve', fighter_side: 'fighter2' },
      ],
      value_picks: [
        { tipo: 'Moneyline', pick: 'Moicano ML (+145 a +160)', odds: '+145 a +160', confianca: 'media', edge_vs_mercado: 'O mercado precifica Duncan a ~63-65% de chance. Nos avaliamos em ~50%. A diferenca de 13-15% e edge significativo num azarao que paga +145.', raciocinio: 'Top 10 veterano com experiencia de 5 rounds, 19 lutas UFC, conhecimento intimo do adversario do treino diario. Contra sem-ranking que nunca lutou 5 rounds, TD defense de 50%, SApM de 4.82. O mercado esta comprando hype, nao analise.' },
        { tipo: 'Metodo', pick: 'Moicano por Decisao', odds: '+250', confianca: 'media', raciocinio: '8 de 12 vitorias UFC de Moicano foram por decisao. O estilo pragmatico e o game plan "focado na vitoria" apontam pra jogo longo. +250 tem excelente valor pro cenario mais provavel de vitoria de Moicano.' },
        { tipo: 'Over/Under', pick: 'Over 2.5 Rounds', odds: '+110', confianca: 'alta', edge_vs_mercado: 'O Under esta a -140. O mercado espera finish rapido. Mas parceiros de treino tendem a produzir lutas mais longas (sem surpresas). Moicano e duro de finalizar.', raciocinio: 'Moicano sabe sobreviver. Parceiros de treino eliminam o fator surpresa. O fator ATT tende a produzir lutas mais taticas. Over 2.5 a +110 e a aposta mais segura do card.' },
        { tipo: 'Prop', pick: 'Luta acabar por Submissao', odds: '+120', confianca: 'media', raciocinio: 'Moicano tem 10 subs na carreira. Duncan tem 4 no UFC com 3 nas ultimas 4 lutas. Ambos buscam o chao. Ambos perigosos no grappling. A probabilidade de sub e alta independente de quem vencer.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Duncan por Decisao',
        descricao: 'Duncan tem apenas 4 decisoes em 15 vitorias na carreira (27%). E um finalizador. Se ele nao conseguir submeter ou nocautear Moicano, provavelmente esta perdendo nos pontos pro veterano com melhor defesa e experiencia de 5 rounds. Apostar em Duncan por decisao e ir contra o historico dele E favorecer o cenario em que Moicano domina.',
      },
      disclaimer: 'Analise estatistica para fins informativos. Aposte com responsabilidade.',
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'moicano-vs-duncan-pos-weighins');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
