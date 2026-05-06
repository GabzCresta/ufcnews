import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'ewing-vs-estevam',
  evento_id: null,
  slug: 'ewing-vs-estevam',
  titulo: 'Ewing vs Estevam: Finesse Contra a Maquina de wrestling',
  subtitulo: 'O striker californiano com absurd volume contra o wrestler undefeated de Macapa que doesn\'t know how to lose. 9-2 vs 14-0.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,68m', envergadura: '175cm', idade: 30, academia: 'Erik Paulson CSW' },
      fighter2: { altura: '1,73m', envergadura: '175cm', idade: 29, academia: 'Nova Uniao' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Unanimous Decision',
    confidence: 'MEDIUM',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Offensive wrestling', edge: 'fighter2', impact: 8, description: 'Estevam media 6.01 TDs per 15 min com 54% dos strikes vindos from the ground. O wrestling e o motor do jogo dele.' },
      { factor: 'volume of Strikes', edge: 'fighter1', impact: 7, description: 'Ewing conecta 5.67 SLpM contra 2.10 de Estevam. On the feet, Ewing domina o volume completely.' },
      { factor: 'Record undefeated', edge: 'fighter2', impact: 6, description: '14-0 e um record que pesa. Estevam never perdeu e sabe encontrar formas de vencer.' },
    ],
    xFactor: {
      title: 'A Defesa de TD de 100% de Ewing',
      description: 'Ewing defendeu 100% dos takedowns na unica luta UFC. Amostra pequena, but If he manages to manter Estevam On the feet, domina.',
    },
  },
  fighter1_info: {
    nome: 'Ethyn Ewing',
    apelido: 'The Professor Finesser',
    record: '9-2-0',
    ranking: 'Unranked',
    ultimasLutas: [
      { result: 'W', opponent: 'Malcolm Wellmaker', method: 'Unanimous Decision', event: 'UFC 322' },
    ],
  },
  fighter2_info: {
    nome: 'Rafael Estevam',
    apelido: 'Macapa',
    record: '14-0-0',
    ranking: 'Unranked',
    ultimasLutas: [
      { result: 'W', opponent: 'Felipe Bunes', method: 'Unanimous Decision', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Jesus Aguilar', method: 'Unanimous Decision', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Charles Johnson', method: 'Unanimous Decision', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan',
  evento_data: 'April 4, 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Bantamweight (135 lbs)',
  num_rounds: 3,
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
      categoria_peso: 'Bantamweight (135 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Finesse vs wrestling',
      tagline_sub: 'O striker de alto volume com sangue de lutador contra a maquina de wrestling invicta da Nova Uniao. Quem impoe o estilo, vence.',
      fighter1: {
        nome_completo: 'Ethyn "The Professor Finesser" Ewing',
        apelido: 'The Professor Finesser',
        sobrenome: 'Ewing',
        record: '9-2-0',
        ranking: 'Unranked',
        info_extra: 'Orange County, California | 30 years old',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Rafael "Macapa" Estevam',
        apelido: 'Macapa',
        sobrenome: 'Estevam',
        record: '14-0-0',
        ranking: 'Unranked',
        info_extra: 'Macapa, Brasil | Nova Uniao | 29 years old',
        imagem_fullbody_url: null,
      },
    },

    narrativa: {
      html_content: `
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">The Professor Finesser</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/5 via-transparent to-ufc-red/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-ufc-red/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-ufc-red">Ethyn Ewing</strong> cresceu em Orange County rodeado de MMA. O pai lutou sob Erik Paulson. Ele mesmo comecou a wrestling aos 3 anos e a lutar aos 5. Chegou a competir no estadual da California em wrestling no ensino medio (8o lugar) e no nacional. Agora e faixa marrom sob Paulson, trabalha com seguranca na construcao civil quando nao esta treinando, e recentemente teve seu primeiro filho. No debut UFC no UFC 322, venceu Malcolm Wellmaker por decisao unanime com um volume absurdo: 85 strikes significativos conectados. O apelido "Professor Finesser" vem de uma piada entre amigos, mas descreve bem o estilo: tecnico, volumoso, com uma arte marcial que parece mais elegante do que bruta.
              </p>
            </div>
          </div>
        </div>

        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">O Invicto de Macapa</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-blue-400">Rafael Estevam</strong> e 14-0. Invicto. Vem de Macapa, Amapa (daí o apelido), treina na Nova Uniao no Rio de Janeiro. Comecou no jiu-jitsu em 2012, migrou pro MMA por amor a competicao. Antes de lutar, era bartender. No DWCS, parou Joao Elias por TKO no R2. Desde que entrou no UFC, sao 3 vitorias por decisao unanime: Charles Johnson, Jesus Aguilar e Felipe Bunes. Todas dominadas com wrestling. 54% dos strikes significativos vem do chao. O cara derruba voce e te controla por 15 minutos. Nao e glamouroso, mas e eficiente. 14-0 nao e acidente.
              </p>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/8 via-amber-500/4 to-amber-500/8"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div class="relative p-5 text-center">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">O Duelo Classico</p>
              <p class="text-sm text-white/60">Striker de alto volume vs wrestler controlador. <strong class="text-amber-400">Quem dita onde a luta acontece</strong> ganha a decisao.</p>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: 'Sem ranking (debut W)', fighter2: 'Sem ranking (14-0)' },
        { dimensao: 'Sequencia', fighter1: '1-0 no UFC', fighter2: '3-0 no UFC, undefeated in his career' },
        { dimensao: 'Narrativa', fighter1: '2a vitoria no UFC, confirmar potencial', fighter2: 'Manter o undefeated e subir na hierarquia BW' },
        { dimensao: 'Risco', fighter1: 'Derrota cedo in his career UFC', fighter2: 'Primeira derrota of his career' },
        { dimensao: 'Recompensa', fighter1: 'Mostrar que pertence ao UFC com vitoria sobre undefeated', fighter2: 'Consolidar como prospect serio do bantamweight' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'FINESSE SOBRE wrestling',
          subtitulo: 'Ewing mantem a luta On the feet e domina com absurd volume of strikes',
          consequencias: [
            { tag: 'BREAKTHROUGH', texto: 'Ewing inflige a primeira derrota of his career de Estevam e se posiciona como nome a observar no bantamweight' },
            { tag: 'ESTILO', texto: 'Mostra que volume of strikes On the feet pode neutralizar wrestling dominant' },
            { tag: 'ESTEVAM', texto: 'Primeira derrota profissional. Questoes sobre como lidar com strikers de alto volume.' },
          ],
          proxima_luta: 'Ewing vs prospect similar no bantamweight',
        },
        fighter2_vence: {
          titulo: 'wrestling DOMINA',
          subtitulo: 'Estevam derruba Ewing repetidamente e vence mais uma por controle total',
          consequencias: [
            { tag: 'undefeated', texto: 'Estevam vai pra 15-0 e 4-0 no UFC. O hype cresce.' },
            { tag: 'PADRAO', texto: 'Mais uma vitoria por decisao com wrestling dominant. Consistente, previsivel, eficiente.' },
            { tag: 'EWING', texto: 'Mostra que o volume On the feet nao e suficiente se voce nao consegue se manter la.' },
          ],
          proxima_luta: 'Estevam vs oponente ranqueado ou prospect mais testado',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Ethyn Ewing',
        color: 'red',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Malcolm Wellmaker', result: 'W', method: 'Unanimous Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Debut UFC no UFC 322. Volume absurdo: 85 strikes significativos conectados. Controlou a luta inteira em pe. Defendeu 100% dos TDs (3 de 3).' },
        ],
        momentum_score: 7,
        momentum_label: 'Confiante',
        momentum_trend: 'ascending',
        momentum_note: 'Ewing fez um debut solido no UFC com vitoria convincente por decisao unanime. O volume of strikes impressionou. Faixa marrom de Paulson, wrestling de base, e agora pai de primeira viagem. A motivacao esta alta. only 1 luta UFC e amostra pequena, but o desempenho foi promissor.',
      },
      fighter2: {
        nome: 'Rafael Estevam',
        color: 'blue',
        recent_fights: [
          { date: 'Ago 2025', opponent: 'Felipe Bunes', result: 'W', method: 'Unanimous Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: '3a vitoria UFC. Controlou com wrestling e strikes no chao.' },
          { date: 'Fev 2025', opponent: 'Jesus Aguilar', result: 'W', method: 'Unanimous Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: '11 takedowns tentados. Dominou com controle posicional. 2a vitoria UFC.' },
          { date: 'Nov 2023', opponent: 'Charles Johnson', result: 'W', method: 'Unanimous Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Debut UFC. Controlou com grappling.' },
        ],
        momentum_score: 7,
        momentum_label: 'Consistente',
        momentum_trend: 'stable',
        momentum_note: 'Estevam e a definicao de consistencia: 14-0, 3 vitorias no UFC, todas por UD. never perdeu. O wrestling e o motor que move tudo. Treina na Nova Uniao no Rio. A qualidade dos oponentes ainda nao e alta, but o undefeated fala por si. 54% dos strikes vem from the ground, o que mostra o quanto ele domina posicionalmente.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Ewing',
        media_oponentes: 1,
        media_oponentes_label: 'Poor',
        aproveitamento: '1W-0L no UFC',
        contra_top5: '0W-0L',
      },
      fighter2: {
        nome: 'Estevam',
        media_oponentes: 2,
        media_oponentes_label: 'Average',
        aproveitamento: '3W-0L no UFC (14-0 total)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem Common Opponents. Both estao em estagios iniciais das carreiras UFC. Ewing tem 1 luta. Estevam tem 3. O nivel de competicao enfrentado por both e baixo ate agora.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 5.67, valueB: 2.10, maxVal: 7, format: 'decimal', note: 'Ewing tem nearly 3x mais volume of strikes. On the feet, The difference is absurd.' },
        { label: 'Strike Accuracy (%)', valueA: 52, valueB: 54, maxVal: 100, format: 'percent', note: 'Precisao similar. Estevam e slightly mais preciso, but com muito menos volume.' },
        { label: 'Strikes Absorbed/Min', valueA: 5.13, valueB: 2.59, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Ewing absorve o dobro. O high volume vem com o preco de also levar.' },
        { label: 'Strike Defense (%)', valueA: 47, valueB: 47, maxVal: 100, format: 'percent', note: 'Defesa identical: both a 47%. No dos dois e elite defensivamente.' },
        { label: 'takedowns per 15 Min', valueA: 3.00, valueB: 6.01, maxVal: 8, format: 'decimal', note: 'Estevam busca o dobro de takedowns. O wrestling ofensivo e o DNA do jogo dele.' },
        { label: 'takedown Accuracy (%)', valueA: 60, valueB: 38, maxVal: 100, format: 'percent', note: 'Ewing converte mais (60% vs 38%), but tenta muito menos. Estevam e mais persistent.' },
        { label: 'takedown Defense (%)', valueA: 100, valueB: 66, maxVal: 100, format: 'percent', note: 'Ewing defendeu 100% dos TDs (3/3) no debut. Amostra MINUSCULA but promissora. Estevam a 66%.' },
        { label: 'Submissions per 15 Min', valueA: 0.0, valueB: 0.3, maxVal: 2, format: 'decimal', note: 'No dos dois e uma grande ameaca de submissao. A luta probably vai pros points.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '30 anos', fighter2: '29 anos', note: 'Praticamente a mesma idade' },
        { label: 'Height', fighter1: '1,68m (5\'6")', fighter2: '1,73m (5\'8")', note: 'Estevam 5cm mais alto' },
        { label: 'Reach', fighter1: '175cm (69")', fighter2: '175cm (69")', note: 'Alcance identical' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Both ortodoxos' },
        { label: 'Base', fighter1: 'Wrestling HS + CSW', fighter2: 'BJJ + Wrestling (Nova Uniao)', note: 'Ambos com base de grappling, mas estilos diferentes' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Stand-up striking', valueA: 72, valueB: 45, labelA: 'Good', labelB: 'Average', advantage: 'fighter1', advantage_note: 'Ewing e infinitamente mais ativo em pe: 5.67 vs 2.10 SLpM. O volume e avassalador. Estevam praticamente nao compete em pe, prefere derrubar.' },
        { label: 'Offensive wrestling', valueA: 55, valueB: 78, labelA: 'Good', labelB: 'Very Good', advantage: 'fighter2', advantage_note: 'Estevam media 6.01 TDs por 15 min. 11 TDs tentados contra Aguilar em 1 luta. O wrestling e obsessivo e persistente.' },
        { label: 'Controle on the ground', valueA: 50, valueB: 80, labelA: 'Average', labelB: 'Very Good', advantage: 'fighter2', advantage_note: '54% dos strikes de Estevam sao from the ground. Quando derruba, controla e acumula ground and pound. Ewing needs to levantar rapido.' },
        { label: 'Defesa de takedown', valueA: 65, valueB: 58, labelA: 'Good', labelB: 'Good', advantage: 'fighter1', advantage_note: 'Ewing defendeu 100% no debut (amostra pequena). Tem base de wrestling do high school. A questao e se aguenta a persistencia de Estevam por 3 rounds.' },
        { label: 'Cardio & Pace', valueA: 68, valueB: 70, labelA: 'Good', labelB: 'Good', advantage: 'even', advantage_note: 'Ambos mostraram bom cardio em lutas de 3 rounds. Estevam mantem a pressao de wrestling por 15 minutos. Ewing mantem volume de strikes alto.' },
        { label: 'Fight IQ', valueA: 55, valueB: 65, labelA: 'Good', labelB: 'Good', advantage: 'fighter2', advantage_note: 'Estevam sabe o que funciona e executa: derruba, controla, vence nos pontos. 14-0. Ewing ainda esta se descobrindo no UFC.' },
      ],
      insight: 'O classico striker vs wrestler. Ewing domina On the feet com absurd volume (5.67 SLpM). Estevam domina on the ground com wrestling persistent (6.01 TDs/15min). A luta sera decidida pelo local onde acontece. Se ficar On the feet, Ewing vence nos points. Se for to the ground, Estevam controla. A defesa de takedown de Ewing e a variavel chave.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Ewing',
        ko_tko: { count: 6, percent: 67 },
        submission: { count: 2, percent: 22 },
        decision: { count: 1, percent: 11 },
        total_wins: 9,
      },
      fighter2: {
        nome: 'Estevam',
        ko_tko: { count: 4, percent: 29 },
        submission: { count: 3, percent: 21 },
        decision: { count: 7, percent: 50 },
        total_wins: 14,
      },
      insight: 'Ewing e mais finalizador fora do UFC: 67% KO, 22% sub. But no UFC, sua unica vitoria foi por decisao. Estevam e um decisioner nato: 50% das vitorias por decisao, e TODAS as 3 vitorias UFC por UD. A luta probably vai pros judges. A questao e quem controla mais minutos.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 6,
          danger_label: 'VANTAGEM ESTEVAM',
          color: 'green',
          title: 'Primeiro takedown',
          description: 'Estevam will look for o early takedown pra estabelecer controle. Se encaixar no R1, pode controlar 3+ minutos do round com ground and pound. Ewing precisa usar o jab e o footwork pra manter distancia e defender o primeiro TD.',
        },
        {
          rounds: 'R2',
          danger_level: 5,
          danger_label: 'balanced',
          color: 'gold',
          title: 'Adaptacao',
          description: 'Se Ewing defendeu os TDs no R1 e acumulou volume, o R2 e onde ele pode abrir vantagem significativa. Se Estevam controlou no R1, vai repetir o plano. O round de adaptacao Could be o mais balanced.',
        },
        {
          rounds: 'R3',
          danger_level: 7,
          danger_label: 'balanced',
          color: 'gold',
          title: 'round Decisivo',
          description: 'Se a luta esta 1-1 nos rounds, o R3 decide tudo. Estevam vai ser mais aggressive nos takedowns. Ewing vai aumentar o volume. Quem ganhar esse round probably ganha a luta. Urgencia maxima.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'Shield', title: '14-0 undefeated', fighter: 'Estevam', risk_level: 'POSITIVE', risk_color: 'green', description: 'Estevam never perdeu. 14 vitorias, 0 derrotas. O cara encontra formas de vencer. Mentalidade de campeao.' },
        { icon: 'Target', title: 'volume of 5.67 SLpM', fighter: 'Ewing', risk_level: 'POSITIVE', risk_color: 'green', description: '85 strikes significativos no debut. Ewing nao para de lancar. Se ficar On the feet, o volume e avassalador.' },
        { icon: 'Brain', title: 'Nova Uniao', fighter: 'Estevam', risk_level: 'POSITIVE', risk_color: 'green', description: 'Estevam treina na Nova Uniao, uma das melhores academias do Brasil. O game plan de wrestling e refinado e consistente.' },
        { icon: 'Activity', title: 'wrestling de Base (Ewing)', fighter: 'Ewing', risk_level: 'POSITIVE', risk_color: 'green', description: 'Ewing foi wrestler no high school (8o CA, 5o nacional). Faixa marrom de CSW sob Erik Paulson. Nao e facil de derrubar.' },
        { icon: 'Clock', title: 'Pai de Primeira Viagem', fighter: 'Ewing', risk_level: 'NEUTRAL', risk_color: 'neutral', description: 'Ewing recently se tornou pai. Motivacao extra pra performar. Lutadores costumam ter desempenhos melhores quando tem familia pra sustentar.' },
        { icon: 'Flame', title: '54% Strikes from the ground', fighter: 'Estevam', risk_level: 'RISCO PARA EWING', risk_color: 'yellow', description: 'Estevam aplica mais da metade dos strikes significativos from the ground. Se Ewing for derrubado, vai levar ground and pound consistente. O dano se acumula.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Ewing',
        total_probability: 42,
        scenarios: [
          { name: 'Volume On the feet Domina', probability: 25, method: 'Unanimous Decision', description: 'Ewing defende os takedowns de Estevam com o wrestling de base, mantem a luta On the feet e acumula um absurd volume of strikes. 5.67 SLpM por 3 rounds = vitoria clara nos scorecards.' },
          { name: 'TKO por Acumulo', probability: 10, method: 'TKO R2-R3', description: 'O volume constante de Ewing acumula dano. Estevam, que absorve 2.59 SApM e nao e conhecido pela durabilidade, eventualmente sucumbe ao acumulo.' },
          { name: 'Decisao Apertada', probability: 7, method: 'Split Decision', description: 'Luta disputada onde Ewing vence 2 rounds por volume On the feet e Estevam vence 1 por controle on the ground. Split decision pro volume.' },
        ],
      },
      fighter2: {
        nome: 'Estevam',
        total_probability: 56,
        scenarios: [
          { name: 'Controle Total por wrestling', probability: 30, method: 'Unanimous Decision', description: 'Estevam encaixa takedowns em todos os rounds, controla por cima e aplica ground and pound. 54% dos strikes from the ground acumulam points e dano. Controla 8+ minutos da luta total on the ground.' },
          { name: 'Sub por Pressao', probability: 12, method: 'Submissao R2-R3', description: 'Apos derrubar e controlar Ewing repetidamente, Estevam transita pro back take ou arm triangle. A fadiga de Ewing por tentar se levantar cria aberturas.' },
          { name: 'Decisao Apertada Pra Controle', probability: 14, method: 'Split Decision', description: 'Estevam vence 2 rounds por controle on the ground. Ewing vence 1 round quando fica On the feet. Os judges premiam o controle posicional de Estevam.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Rafael Estevam',
      winner_side: 'fighter2',
      predicted_method: 'Unanimous Decision',
      confidence_score: 5,
      confidence_label: 'MEDIUM',
      explanation: 'Estevam e 14-0 e tem um sistema de wrestling refinado que funciona consistentemente. 6.01 TDs per 15 min e uma pressao huge de wrestling. Ewing tem base de wrestling e defendeu 100% dos TDs no debut, but a amostra e minima (3 TDs). Contra Estevam, que will try to 10+ TDs numa luta, a persistencia Could be demais. Se Estevam levar to the ground, 54% dos strikes vem de la. Ewing precisa da melhor performance defensiva of his career pra manter On the feet. however: se Ewing conseguir, o volume of 5.67 SLpM contra os 2.10 de Estevam e uma diferenca colossal On the feet. A luta e mais balanced do que parece.',
      x_factor: {
        title: 'O wrestling de Base de Ewing',
        description: 'Ewing foi wrestler no high school com resultados no estadual e nacional. Faixa marrom sob Paulson. Se o wrestling de base for bom o suficiente pra negar Estevam, a luta e completely diferente. Ninguem testou Ewing contra um wrestler obsessivo como Estevam ainda.',
      },
      upset_alert: {
        title: 'Ewing TKO por Volume',
        description: 'Se Ewing manter On the feet, o volume of 5.67 SLpM pode machucar. Estevam absorve strikes e nao e conhecido pela durabilidade. Se Ewing conectar limpo por 2 rounds, o TKO e possivel.',
      },
      probabilities: {
        fighter1: { nome: 'Ewing', percent: 42 },
        fighter2: { nome: 'Estevam', percent: 56 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Ewing (+130)', reasoning: 'Se voce acredita que Ewing defende os TDs, o volume On the feet e avassalador. +130 paga bem pro risco. A base de wrestling Could be o diferencial.' },
        method: { pick: 'Estevam por Decisao', reasoning: '3 de 3 vitorias UFC por UD. 50% das vitorias totais por decisao. Estevam nao finaliza, ele controla e vence nos points.' },
        over_under: { pick: 'Over 2.5 rounds', rounds: 2.5, reasoning: 'Both tendenciam pra decisao. Estevam controla but nao finaliza. Ewing absorve but aguenta. Vai a distancia.' },
        best_value: 'Over 2.5 rounds e The safest bet. Both os lutadores tendenciam fortemente pra decisao no UFC.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Os 3 Primeiros takedowns de Estevam', icon: 'Target', description: 'Se Estevam encaixar 2 dos primeiros 3 takedowns, a luta vai pro estilo dele. Se Ewing defender todos, Estevam esta em serios problemas porque nao compete bem On the feet.' },
        { num: 2, title: 'volume of Ewing nos Primeiros 3 Min', icon: 'Activity', description: 'Observe se Ewing esta lancando com o volume habitual. Se ele estiver lancando 5+ strikes per minute e Estevam nao esta derrubando, e total dominance On the feet.' },
        { num: 3, title: 'Tempo de Controle on the ground', icon: 'Clock', description: 'Se Estevam esta acumulando 2+ minutos de controle por round on the ground, esta vencendo. Se o tempo de controle e menos de 1 minuto, Ewing esta se levantando rapido.' },
        { num: 4, title: 'Ground and Pound de Estevam', icon: 'Crosshair', description: '54% dos strikes de Estevam vem from the ground. Observe se ele esta sendo ativo por cima ou only segurando posicao. Strikes ativos from the ground ganham rounds. Controle passivo pode nao ser suficiente.' },
        { num: 5, title: 'Fadiga no R3', icon: 'Flame', description: 'Se a luta esta 1-1, observe quem esta mais fresco no R3. Lutar contra TDs e exaustivo. Se Ewing esta mais cansado de se levantar, Estevam domina. Se Estevam esta frustrado, Ewing acelera.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'EWING VS ESTEVAM', content: 'UFC FIGHT NIGHT\nApex, Las Vegas | 4 de Abril\n3 rounds | bantamweight\n\n9-2 vs 14-0\nFinesse vs wrestling\nVolume On the feet vs Controle on the ground\n\nClassico striker vs wrestler.', color: 'gold' },
        { slide_number: 2, title: 'THE PROFESSOR FINESSER', content: '9-2 | 30 years old | California\nFaixa marrom Erik Paulson\n\nDebut UFC: UD (85 sig strikes!)\n5.67 SLpM | 100% TD Def\n\nWrestler de HS + pai de primeira viagem.\nVolume insano On the feet.', color: 'red' },
        { slide_number: 3, title: 'MACAPA', content: '14-0 undefeated | 29 years old | Brasil\nNova Uniao, Rio de Janeiro\n\n3-0 no UFC (todas UD)\n6.01 TDs per 15 min\n54% strikes from the ground\n\nNao finaliza. Controla. Vence nos points.', color: 'blue' },
        { slide_number: 4, title: 'PREVISAO', content: 'ESTEVAM por Decisao Unanime\n\nConfianca: MEDIA\n56% Estevam / 42% Ewing\n\nO wrestling persistent domina.\nMAS: se Ewing defender os TDs,\no volume of 5.67 SLpM e demais.\n\nOver 2.5 rounds e nearly certo.', color: 'blue' },
      ],
      twitter: [
        { num: '1/3', text: 'Ewing vs Estevam no peso galo. O classico: striker de alto volume (5.67 SLpM) vs wrestler que derruba todo mundo (6.01 TDs/15min). 54% dos strikes de Estevam vem do chao.' },
        { num: '2/3', text: 'O dado do Ewing: 85 strikes significativos no debut UFC. Defendeu 100% dos TDs. Faixa marrom de Paulson, wrestler de HS. Se ele negar o wrestling de Estevam, o volume e avassalador.' },
        { num: '3/3', text: 'Pick: Estevam por UD. 14-0 invicto, 3-0 UFC todas por decisao. O wrestling persistente vence. Mas Ewing a +130 tem valor se voce acredita na defesa de TD. Over 2.5 e praticamente certo.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: '14-0. Rafael Estevam nao sabe perder. 3 vitorias no UFC, todas por decisao unanime. Mas agora enfrenta um striker que conectou 85 strikes significativos no debut.' },
        { time: '10-25s', title: 'Ewing', text: 'Ethyn Ewing. Cresceu no MMA, pai lutava sob Erik Paulson. Wrestler de high school. 5.67 strikes per minute. Defendeu 100% dos takedowns no debut. O volume e absurd.' },
        { time: '25-40s', title: 'Analise', text: 'O classico striker vs wrestler. Estevam: 6.01 TDs, 54% dos strikes from the ground. Ewing: 5.67 SLpM, volume imenso. Se ficar On the feet, Ewing. Se for to the ground, Estevam. A defesa de TD decide.' },
        { time: '40-55s', title: 'Pick', text: 'Estevam por decisao unanime. O wrestling persistente geralmente vence em 3 rounds. Mas Over 2.5 e a aposta mais segura. Comenta quem voce acha que controla a luta.' },
      ],
      tiktok: [
        { hook: '14-0. Esse cara never perdeu. E ele derruba TODO MUNDO.', body: 'Estevam. 6 takedowns por 15 minutos. 54% dos strikes vem from the ground. 3 vitorias no UFC, TODAS por decisao unanime. Agora enfrenta Ewing, que conectou 85 strikes no debut e defendeu TODOS os takedowns. Striker vs wrestler. Classico. Quem controla, vence.', cta: 'Volume ou wrestling? Comenta!' },
      ],
      headlines: [
        'Ewing vs Estevam: 85 Strikes vs 6 takedowns Por 15 Minutos',
        'O undefeated de Macapa: 14-0 Com o wrestling Mais persistent do Card',
        'Professor Finesser: O volume of Strikes Mais Alto do UFC Fight Night',
        'Striker vs Wrestler: O Classico que Define o bantamweight',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '+130',
        fighter2_odds: '-155',
        fighter1_name: 'Ethyn Ewing',
        fighter2_name: 'Rafael Estevam',
        source: 'Estimativa baseada no perfil dos lutadores',
      },
      edges: [
        { icon: 'Target', titulo: 'wrestling persistent de Estevam', stat_headline: '6.01 TDS/15MIN, 54% DOS STRIKES VEM from the ground', contexto: 'Estevam e um wrestler que controla e pontua from the ground. 3 de 3 UFC fights vencidas por UD. The pattern is clear.', implicacao_aposta: 'Favorece Estevam por decisao. Prop de decisao may have valor.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Activity', titulo: 'absurd volume of Ewing', stat_headline: '5.67 SLPM, 85 STRIKES NO DEBUT, 100% TD DEF', contexto: 'If the fight stays On the feet, Ewing domina completely. O volume e nearly 3x o de Estevam (2.10).', implicacao_aposta: 'Se voce acredita na defesa de TD, Ewing a +130 tem valor.', edge_level: 'moderado', fighter_side: 'fighter1' },
        { icon: 'Brain', titulo: 'Tendencia Forte pra Decisao', stat_headline: 'AMBOS TENDENCIAM PRA DECISAO NO UFC. No E FINALIZADOR.', contexto: 'Ewing: 1 UFC fight = 1 UD. Estevam: 3 UFC fights = 3 UDs. Over 2.5 e practically certo.', implicacao_aposta: 'Over 2.5 rounds e The safest bet da luta.', edge_level: 'forte', fighter_side: 'neutral' },
      ],
      value_picks: [
        { tipo: 'Over/Under', pick: 'Over 2.5 rounds', odds: '-180', confianca: 'alta', raciocinio: 'Ambos tendenciam fortemente pra decisao. Estevam controla mas nao finaliza. Ewing absorve mas aguenta. Vai a distancia.' },
        { tipo: 'Metodo', pick: 'Estevam por Decisao', odds: '-110', confianca: 'media', raciocinio: '3 de 3 UFC por UD. O padrao e claro. Se vencer, e nos pontos.' },
        { tipo: 'Moneyline', pick: 'Ewing ML (+130)', odds: '+130', confianca: 'baixa', raciocinio: 'Aposta de valor se voce acredita que Ewing defende os TDs. O volume em pe e avassalador, mas o risco e ser controlado no chao.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Qualquer Um por Finish',
        descricao: 'Estevam tem only 1 finish nos ultimos 7 resultados (4 KOs e 3 subs in his career, but 7 decisoes). No UFC, ZERO finishes em 3 lutas. Ewing tem 1 luta UFC = 1 decisao. Apostar em finish de qualquer lado e ir contra a tendencia.',
      },
      disclaimer: 'Statistical analysis for informational purposes. Bet responsibly.',
    },
  },
};
