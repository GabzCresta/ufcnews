import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'ewing-vs-estevam',
  evento_id: null,
  slug: 'ewing-vs-estevam',
  titulo: 'Ewing vs Estevam: Finesse Contra a Maquina de Wrestling',
  subtitulo: 'O striker californiano com volume absurdo contra o wrestler invaincu de Macapa que nao sabe perder. 9-2 vs 14-0.',
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
    predictedMethod: 'Decision Unanime',
    confidence: 'MOYENNE',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Wrestling Offensif', edge: 'fighter2', impact: 8, description: 'Estevam media 6.01 TDs por 15 min com 54% dos strikes vindos du sol. O wrestling e o motor do jogo dele.' },
      { factor: 'Volume de Strikes', edge: 'fighter1', impact: 7, description: 'Ewing conecta 5.67 SLpM contra 2.10 de Estevam. Debout, Ewing domina o volume completamente.' },
      { factor: 'Record invaincu', edge: 'fighter2', impact: 6, description: '14-0 e um record que pesa. Estevam jamais perdeu e sabe encontrar formas de vencer.' },
    ],
    xFactor: {
      title: 'A Defesa de TD de 100% de Ewing',
      description: 'Ewing defendeu 100% dos takedowns na unica luta UFC. Amostra pequena, mais se conseguir manter Estevam Debout, domina.',
    },
  },
  fighter1_info: {
    nome: 'Ethyn Ewing',
    apelido: 'The Professor Finesser',
    record: '9-2-0',
    ranking: 'Non Classe',
    ultimasLutas: [
      { result: 'W', opponent: 'Malcolm Wellmaker', method: 'Decision Unanime', event: 'UFC 322' },
    ],
  },
  fighter2_info: {
    nome: 'Rafael Estevam',
    apelido: 'Macapa',
    record: '14-0-0',
    ranking: 'Non Classe',
    ultimasLutas: [
      { result: 'W', opponent: 'Felipe Bunes', method: 'Decision Unanime', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Jesus Aguilar', method: 'Decision Unanime', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Charles Johnson', method: 'Decision Unanime', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan',
  evento_data: '4 Avril 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Poids Coqs (135 lbs)',
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
      evento_data: '4 Avril 2026',
      evento_local: 'UFC Apex, Las Vegas',
      categoria_peso: 'Poids Coqs (135 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Finesse vs Wrestling',
      tagline_sub: 'O striker de alto volume com sangue de lutador contra a maquina de wrestling invicta da Nova Uniao. Quem impoe o estilo, vence.',
      fighter1: {
        nome_completo: 'Ethyn "The Professor Finesser" Ewing',
        apelido: 'The Professor Finesser',
        sobrenome: 'Ewing',
        record: '9-2-0',
        ranking: 'Non Classe',
        info_extra: 'Orange County, California | 30 ans',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Rafael "Macapa" Estevam',
        apelido: 'Macapa',
        sobrenome: 'Estevam',
        record: '14-0-0',
        ranking: 'Non Classe',
        info_extra: 'Macapa, Brasil | Nova Uniao | 29 ans',
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
        { dimensao: 'Sequencia', fighter1: '1-0 no UFC', fighter2: '3-0 no UFC, invaincu na carreira' },
        { dimensao: 'Narrativa', fighter1: '2a vitoria no UFC, confirmar potencial', fighter2: 'Manter o invaincu e subir na hierarquia BW' },
        { dimensao: 'Risco', fighter1: 'Derrota cedo na carreira UFC', fighter2: 'Primeira derrota da carreira' },
        { dimensao: 'Recompensa', fighter1: 'Mostrar que pertence ao UFC com vitoria sobre invaincu', fighter2: 'Consolidar como prospect serio do peso galo' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'FINESSE SOBRE WRESTLING',
          subtitulo: 'Ewing mantem a luta Debout e domina com volume absurdo de strikes',
          consequencias: [
            { tag: 'BREAKTHROUGH', texto: 'Ewing inflige a primeira derrota da carreira de Estevam e se posiciona como nome a observar no peso galo' },
            { tag: 'ESTILO', texto: 'Mostra que volume de strikes Debout pode neutralizar wrestling dominant' },
            { tag: 'ESTEVAM', texto: 'Primeira derrota profissional. Questoes sobre como lidar com strikers de alto volume.' },
          ],
          proxima_luta: 'Ewing vs prospect similar no peso galo',
        },
        fighter2_vence: {
          titulo: 'WRESTLING DOMINA',
          subtitulo: 'Estevam derruba Ewing repetidamente e vence mais uma por controle total',
          consequencias: [
            { tag: 'invaincu', texto: 'Estevam vai pra 15-0 e 4-0 no UFC. O hype cresce.' },
            { tag: 'PADRAO', texto: 'Mais uma vitoria por decisao com wrestling dominant. Consistente, previsivel, eficiente.' },
            { tag: 'EWING', texto: 'Mostra que o volume Debout nao e suficiente se voce nao consegue se manter la.' },
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
          { date: 'Nov 2025', opponent: 'Malcolm Wellmaker', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Debut UFC no UFC 322. Volume absurdo: 85 strikes significativos conectados. Controlou a luta inteira em pe. Defendeu 100% dos TDs (3 de 3).' },
        ],
        momentum_score: 7,
        momentum_label: 'Confiante',
        momentum_trend: 'ascending',
        momentum_note: 'Ewing fez um debut solido no UFC com vitoria convincente por decisao unanime. O volume de strikes impressionou. Faixa marrom de Paulson, wrestling de base, e agora pai de primeira viagem. A motivacao esta alta. seulement 1 luta UFC e amostra pequena, mais o desempenho foi promissor.',
      },
      fighter2: {
        nome: 'Rafael Estevam',
        color: 'blue',
        recent_fights: [
          { date: 'Ago 2025', opponent: 'Felipe Bunes', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: '3a vitoria UFC. Controlou com wrestling e strikes no chao.' },
          { date: 'Fev 2025', opponent: 'Jesus Aguilar', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: '11 takedowns tentados. Dominou com controle posicional. 2a vitoria UFC.' },
          { date: 'Nov 2023', opponent: 'Charles Johnson', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Debut UFC. Controlou com grappling.' },
        ],
        momentum_score: 7,
        momentum_label: 'Consistente',
        momentum_trend: 'stable',
        momentum_note: 'Estevam e a definicao de consistencia: 14-0, 3 vitorias no UFC, todas por UD. jamais perdeu. O wrestling e o motor que move tudo. Treina na Nova Uniao no Rio. A qualidade dos oponentes ainda nao e alta, mais o invaincu fala por si. 54% dos strikes vem du sol, o que mostra o quanto ele domina posicionalmente.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Ewing',
        media_oponentes: 1,
        media_oponentes_label: 'Faible',
        aproveitamento: '1W-0L no UFC',
        contra_top5: '0W-0L',
      },
      fighter2: {
        nome: 'Estevam',
        media_oponentes: 2,
        media_oponentes_label: 'Moyen',
        aproveitamento: '3W-0L no UFC (14-0 total)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Les deux estao em estagios iniciais das carreiras UFC. Ewing tem 1 luta. Estevam tem 3. O nivel de competicao enfrentado por les deux e baixo ate agora.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Frappes Sig. par Minute', valueA: 5.67, valueB: 2.10, maxVal: 7, format: 'decimal', note: 'Ewing tem QUASE 3x mais volume de strikes. Debout, La difference est absurda.' },
        { label: 'Precision des Frappes (%)', valueA: 52, valueB: 54, maxVal: 100, format: 'percent', note: 'Precisao parecida. Estevam e levemente mais preciso, mais com muito menos volume.' },
        { label: 'Frappes Absorbees/Min', valueA: 5.13, valueB: 2.59, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Ewing absorve o dobro. O volume eleve vem com o preco de aussi levar.' },
        { label: 'Defense de Frappes (%)', valueA: 47, valueB: 47, maxVal: 100, format: 'percent', note: 'Defesa identica: les deux a 47%. Nenhum dos dois e elite defensivamente.' },
        { label: 'Takedowns par 15 Min', valueA: 3.00, valueB: 6.01, maxVal: 8, format: 'decimal', note: 'Estevam busca o dobro de takedowns. O wrestling ofensivo e o DNA do jogo dele.' },
        { label: 'Precision Takedown (%)', valueA: 60, valueB: 38, maxVal: 100, format: 'percent', note: 'Ewing converte mais (60% vs 38%), mais tenta muito menos. Estevam e mais persistente.' },
        { label: 'Defense Takedown (%)', valueA: 100, valueB: 66, maxVal: 100, format: 'percent', note: 'Ewing defendeu 100% dos TDs (3/3) no debut. Amostra MINUSCULA mais promissora. Estevam a 66%.' },
        { label: 'Soumissions par 15 Min', valueA: 0.0, valueB: 0.3, maxVal: 2, format: 'decimal', note: 'Nenhum dos dois e uma grande ameaca de submissao. A luta provavelmente vai pros pontos.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '30 anos', fighter2: '29 anos', note: 'Praticamente a mesma idade' },
        { label: 'Taille', fighter1: '1,68m (5\'6")', fighter2: '1,73m (5\'8")', note: 'Estevam 5cm mais alto' },
        { label: 'Allonge', fighter1: '175cm (69")', fighter2: '175cm (69")', note: 'Alcance identico' },
        { label: 'Stance', fighter1: 'Orthodoxe', fighter2: 'Orthodoxe', note: 'Les deux ortodoxos' },
        { label: 'Base', fighter1: 'Wrestling HS + CSW', fighter2: 'BJJ + Wrestling (Nova Uniao)', note: 'Ambos com base de grappling, mas estilos diferentes' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking Debout', valueA: 72, valueB: 45, labelA: 'Bon', labelB: 'Moyen', advantage: 'fighter1', advantage_note: 'Ewing e infinitamente mais ativo em pe: 5.67 vs 2.10 SLpM. O volume e avassalador. Estevam praticamente nao compete em pe, prefere derrubar.' },
        { label: 'Wrestling Offensif', valueA: 55, valueB: 78, labelA: 'Bon', labelB: 'Tres Bon', advantage: 'fighter2', advantage_note: 'Estevam media 6.01 TDs por 15 min. 11 TDs tentados contra Aguilar em 1 luta. O wrestling e obsessivo e persistente.' },
        { label: 'Controle au sol', valueA: 50, valueB: 80, labelA: 'Moyen', labelB: 'Tres Bon', advantage: 'fighter2', advantage_note: '54% dos strikes de Estevam sao du sol. Quando derruba, controla e acumula ground and pound. Ewing precisa se levantar rapido.' },
        { label: 'Defesa de Takedown', valueA: 65, valueB: 58, labelA: 'Bon', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'Ewing defendeu 100% no debut (amostra pequena). Tem base de wrestling do high school. A questao e se aguenta a persistencia de Estevam por 3 rounds.' },
        { label: 'Cardio et Rythme', valueA: 68, valueB: 70, labelA: 'Bon', labelB: 'Bon', advantage: 'even', advantage_note: 'Ambos mostraram bom cardio em lutas de 3 rounds. Estevam mantem a pressao de wrestling por 15 minutos. Ewing mantem volume de strikes alto.' },
        { label: 'Fight IQ', valueA: 55, valueB: 65, labelA: 'Bon', labelB: 'Bon', advantage: 'fighter2', advantage_note: 'Estevam sabe o que funciona e executa: derruba, controla, vence nos pontos. 14-0. Ewing ainda esta se descobrindo no UFC.' },
      ],
      insight: 'O classico striker vs wrestler. Ewing domina Debout com volume absurdo (5.67 SLpM). Estevam domina au sol com wrestling persistente (6.01 TDs/15min). A luta sera decidida pelo local onde acontece. Se ficar Debout, Ewing vence nos pontos. Se for au sol, Estevam controla. A defesa de takedown de Ewing e a variavel chave.',
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
      insight: 'Ewing e mais finalizador fora do UFC: 67% KO, 22% sub. Mais no UFC, sua unica vitoria foi por decisao. Estevam e um decisioner nato: 50% das vitorias por decisao, e TODAS as 3 vitorias UFC por UD. A luta provavelmente vai pros juizes. A questao e quem controla mais minutos.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 6,
          danger_label: 'VANTAGEM ESTEVAM',
          color: 'green',
          title: 'Primeiro Takedown',
          description: 'Estevam vai buscar o takedown tot pra estabelecer controle. Se encaixar no R1, pode controlar 3+ minutos do round com ground and pound. Ewing precisa usar o jab e o footwork pra manter distancia e defender o primeiro TD.',
        },
        {
          rounds: 'R2',
          danger_level: 5,
          danger_label: 'EQUILIBRE',
          color: 'gold',
          title: 'Adaptacao',
          description: 'Se Ewing defendeu os TDs no R1 e acumulou volume, o R2 e onde ele pode abrir vantagem significativa. Se Estevam controlou no R1, vai repetir o plano. O round de adaptacao pode ser o mais equilibrado.',
        },
        {
          rounds: 'R3',
          danger_level: 7,
          danger_label: 'EQUILIBRE',
          color: 'gold',
          title: 'Round Decisivo',
          description: 'Se a luta esta 1-1 nos rounds, o R3 decide tudo. Estevam vai ser mais agressif nos takedowns. Ewing vai aumentar o volume. Quem ganhar esse round provavelmente ganha a luta. Urgencia maxima.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'Shield', title: '14-0 invaincu', fighter: 'Estevam', risk_level: 'POSITIF', risk_color: 'green', description: 'Estevam jamais perdeu. 14 vitorias, 0 derrotas. O cara encontra formas de vencer. Mentalidade de campeao.' },
        { icon: 'Target', title: 'Volume de 5.67 SLpM', fighter: 'Ewing', risk_level: 'POSITIF', risk_color: 'green', description: '85 strikes significativos no debut. Ewing nao para de lancar. Se ficar Debout, o volume e avassalador.' },
        { icon: 'Brain', title: 'Nova Uniao', fighter: 'Estevam', risk_level: 'POSITIF', risk_color: 'green', description: 'Estevam treina na Nova Uniao, uma das melhores academias do Brasil. O game plan de wrestling e refinado e consistente.' },
        { icon: 'Activity', title: 'Wrestling de Base (Ewing)', fighter: 'Ewing', risk_level: 'POSITIF', risk_color: 'green', description: 'Ewing foi wrestler no high school (8o CA, 5o nacional). Faixa marrom de CSW sob Erik Paulson. Nao e facil de derrubar.' },
        { icon: 'Clock', title: 'Pai de Primeira Viagem', fighter: 'Ewing', risk_level: 'NEUTRE', risk_color: 'neutral', description: 'Ewing recentemente se tornou pai. Motivacao extra pra performar. Lutadores costumam ter desempenhos melhores quando tem familia pra sustentar.' },
        { icon: 'Flame', title: '54% Strikes du sol', fighter: 'Estevam', risk_level: 'RISCO PARA EWING', risk_color: 'yellow', description: 'Estevam aplica mais da metade dos strikes significativos du sol. Se Ewing for derrubado, vai levar ground and pound consistente. O dano se acumula.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Ewing',
        total_probability: 42,
        scenarios: [
          { name: 'Volume Debout Domina', probability: 25, method: 'Decision Unanime', description: 'Ewing defende os takedowns de Estevam com o wrestling de base, mantem a luta Debout e acumula um volume absurdo de strikes. 5.67 SLpM por 3 rounds = vitoria clara nos cartoes.' },
          { name: 'TKO por Acumulo', probability: 10, method: 'TKO R2-R3', description: 'O volume constante de Ewing acumula dano. Estevam, que absorve 2.59 SApM e nao e conhecido pela durabilidade, eventualmente sucumbe ao acumulo.' },
          { name: 'Decisao Apertada', probability: 7, method: 'Decision Partagee', description: 'Luta disputada onde Ewing vence 2 rounds por volume Debout e Estevam vence 1 por controle au sol. Split decision pro volume.' },
        ],
      },
      fighter2: {
        nome: 'Estevam',
        total_probability: 56,
        scenarios: [
          { name: 'Controle Total por Wrestling', probability: 30, method: 'Decision Unanime', description: 'Estevam encaixa takedowns em todos os rounds, controla por cima e aplica ground and pound. 54% dos strikes du sol acumulam pontos e dano. Controla 8+ minutos da luta total au sol.' },
          { name: 'Sub por Pressao', probability: 12, method: 'Submissao R2-R3', description: 'Apos derrubar e controlar Ewing repetidamente, Estevam transita pro back take ou arm triangle. A fadiga de Ewing por tentar se levantar cria aberturas.' },
          { name: 'Decisao Apertada Pra Controle', probability: 14, method: 'Decision Partagee', description: 'Estevam vence 2 rounds por controle au sol. Ewing vence 1 round quando fica Debout. Os juizes premiam o controle posicional de Estevam.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Rafael Estevam',
      winner_side: 'fighter2',
      predicted_method: 'Decision Unanime',
      confidence_score: 5,
      confidence_label: 'MOYENNE',
      explanation: 'Estevam e 14-0 e tem um sistema de wrestling refinado que funciona consistentemente. 6.01 TDs por 15 min e uma pressao enorme de wrestling. Ewing tem base de wrestling e defendeu 100% dos TDs no debut, mais a amostra e minima (3 TDs). Contra Estevam, que vai tentar 10+ TDs numa luta, a persistencia pode ser demais. Se Estevam levar au sol, 54% dos strikes vem de la. Ewing precisa da melhor performance defensiva da carreira pra manter Debout. cependant: se Ewing conseguir, o volume de 5.67 SLpM contra os 2.10 de Estevam e uma diferenca colossal Debout. A luta e mais equilibrada do que parece.',
      x_factor: {
        title: 'O Wrestling de Base de Ewing',
        description: 'Ewing foi wrestler no high school com resultados no estadual e nacional. Faixa marrom sob Paulson. Se o wrestling de base for bom o suficiente pra negar Estevam, a luta e completamente diferente. Ninguem testou Ewing contra um wrestler obsessivo como Estevam ainda.',
      },
      upset_alert: {
        title: 'Ewing TKO por Volume',
        description: 'Se Ewing manter Debout, o volume de 5.67 SLpM pode machucar. Estevam absorve strikes e nao e conhecido pela durabilidade. Se Ewing conectar limpo por 2 rounds, o TKO e possivel.',
      },
      probabilities: {
        fighter1: { nome: 'Ewing', percent: 42 },
        fighter2: { nome: 'Estevam', percent: 56 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Ewing (+130)', reasoning: 'Se voce acredita que Ewing defende os TDs, o volume Debout e avassalador. +130 paga bem pro risco. A base de wrestling pode ser o diferencial.' },
        method: { pick: 'Estevam por Decisao', reasoning: '3 de 3 vitorias UFC por UD. 50% das vitorias totais por decisao. Estevam nao finaliza, ele controla e vence nos pontos.' },
        over_under: { pick: 'Over 2.5 Rounds', rounds: 2.5, reasoning: 'Les deux tendenciam pra decisao. Estevam controla mais nao finaliza. Ewing absorve mais aguenta. Vai a distancia.' },
        best_value: 'Over 2.5 rounds e a aposta mais segura. Les deux os lutadores tendenciam fortemente pra decisao no UFC.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Os 3 Primeiros Takedowns de Estevam', icon: 'Target', description: 'Se Estevam encaixar 2 dos primeiros 3 takedowns, a luta vai pro estilo dele. Se Ewing defender todos, Estevam esta em serios problemas porque nao compete bem Debout.' },
        { num: 2, title: 'Volume de Ewing nos Primeiros 3 Min', icon: 'Activity', description: 'Observe se Ewing esta lancando com o volume habitual. Se ele estiver lancando 5+ strikes por minuto e Estevam nao esta derrubando, e dominio total Debout.' },
        { num: 3, title: 'Tempo de Controle au sol', icon: 'Clock', description: 'Se Estevam esta acumulando 2+ minutos de controle por round au sol, esta vencendo. Se o tempo de controle e menos de 1 minuto, Ewing esta se levantando rapido.' },
        { num: 4, title: 'Ground and Pound de Estevam', icon: 'Crosshair', description: '54% dos strikes de Estevam vem du sol. Observe se ele esta sendo ativo por cima ou seulement segurando posicao. Strikes ativos du sol ganham rounds. Controle passivo pode nao ser suficiente.' },
        { num: 5, title: 'Fadiga no R3', icon: 'Flame', description: 'Se a luta esta 1-1, observe quem esta mais fresco no R3. Lutar contra TDs e exaustivo. Se Ewing esta mais cansado de se levantar, Estevam domina. Se Estevam esta frustrado, Ewing acelera.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'EWING VS ESTEVAM', content: 'UFC FIGHT NIGHT\nApex, Las Vegas | 4 de Abril\n3 Rounds | Peso Galo\n\n9-2 vs 14-0\nFinesse vs Wrestling\nVolume Debout vs Controle au sol\n\nClassico striker vs wrestler.', color: 'gold' },
        { slide_number: 2, title: 'THE PROFESSOR FINESSER', content: '9-2 | 30 ans | California\nFaixa marrom Erik Paulson\n\nDebut UFC: UD (85 sig strikes!)\n5.67 SLpM | 100% TD Def\n\nWrestler de HS + pai de primeira viagem.\nVolume insano Debout.', color: 'red' },
        { slide_number: 3, title: 'MACAPA', content: '14-0 invaincu | 29 ans | Brasil\nNova Uniao, Rio de Janeiro\n\n3-0 no UFC (todas UD)\n6.01 TDs por 15 min\n54% strikes du sol\n\nNao finaliza. Controla. Vence nos pontos.', color: 'blue' },
        { slide_number: 4, title: 'PREVISAO', content: 'ESTEVAM por Decisao Unanime\n\nConfianca: MEDIA\n56% Estevam / 42% Ewing\n\nO wrestling persistente domina.\nMAS: se Ewing defender os TDs,\no volume de 5.67 SLpM e demais.\n\nOver 2.5 rounds e quase certo.', color: 'blue' },
      ],
      twitter: [
        { num: '1/3', text: 'Ewing vs Estevam no peso galo. O classico: striker de alto volume (5.67 SLpM) vs wrestler que derruba todo mundo (6.01 TDs/15min). 54% dos strikes de Estevam vem do chao.' },
        { num: '2/3', text: 'O dado do Ewing: 85 strikes significativos no debut UFC. Defendeu 100% dos TDs. Faixa marrom de Paulson, wrestler de HS. Se ele negar o wrestling de Estevam, o volume e avassalador.' },
        { num: '3/3', text: 'Pick: Estevam por UD. 14-0 invicto, 3-0 UFC todas por decisao. O wrestling persistente vence. Mas Ewing a +130 tem valor se voce acredita na defesa de TD. Over 2.5 e praticamente certo.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: '14-0. Rafael Estevam nao sabe perder. 3 vitorias no UFC, todas por decisao unanime. Mas agora enfrenta um striker que conectou 85 strikes significativos no debut.' },
        { time: '10-25s', title: 'Ewing', text: 'Ethyn Ewing. Cresceu no MMA, pai lutava sob Erik Paulson. Wrestler de high school. 5.67 strikes por minuto. Defendeu 100% dos takedowns no debut. O volume e absurdo.' },
        { time: '25-40s', title: 'Analise', text: 'O classico striker vs wrestler. Estevam: 6.01 TDs, 54% dos strikes du sol. Ewing: 5.67 SLpM, volume imenso. Se ficar Debout, Ewing. Se for au sol, Estevam. A defesa de TD decide.' },
        { time: '40-55s', title: 'Pick', text: 'Estevam por decisao unanime. O wrestling persistente geralmente vence em 3 rounds. Mas Over 2.5 e a aposta mais segura. Comenta quem voce acha que controla a luta.' },
      ],
      tiktok: [
        { hook: '14-0. Esse cara jamais perdeu. E ele derruba TODO MUNDO.', body: 'Estevam. 6 takedowns por 15 minutos. 54% dos strikes vem du sol. 3 vitorias no UFC, TODAS por decisao unanime. Agora enfrenta Ewing, que conectou 85 strikes no debut e defendeu TODOS os takedowns. Striker vs wrestler. Classico. Quem controla, vence.', cta: 'Volume ou wrestling? Comenta!' },
      ],
      headlines: [
        'Ewing vs Estevam: 85 Strikes vs 6 Takedowns Por 15 Minutos',
        'O invaincu de Macapa: 14-0 Com o Wrestling Mais Persistente do Card',
        'Professor Finesser: O Volume de Strikes Mais Alto do UFC Fight Night',
        'Striker vs Wrestler: O Classico que Define o Peso Galo',
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
        { icon: 'Target', titulo: 'Wrestling Persistente de Estevam', stat_headline: '6.01 TDS/15MIN, 54% DOS STRIKES VEM du sol', contexto: 'Estevam e um wrestler que controla e pontua du sol. 3 de 3 UFC fights vencidas por UD. O padrao e claro.', implicacao_aposta: 'Favorece Estevam por decisao. Prop de decisao pode ter valor.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Activity', titulo: 'Volume Absurdo de Ewing', stat_headline: '5.67 SLPM, 85 STRIKES NO DEBUT, 100% TD DEF', contexto: 'Se a luta ficar Debout, Ewing domina completamente. O volume e quase 3x o de Estevam (2.10).', implicacao_aposta: 'Se voce acredita na defesa de TD, Ewing a +130 tem valor.', edge_level: 'moderado', fighter_side: 'fighter1' },
        { icon: 'Brain', titulo: 'Tendencia Forte pra Decisao', stat_headline: 'AMBOS TENDENCIAM PRA DECISAO NO UFC. NENHUM E FINALIZADOR.', contexto: 'Ewing: 1 UFC fight = 1 UD. Estevam: 3 UFC fights = 3 UDs. Over 2.5 e praticamente certo.', implicacao_aposta: 'Over 2.5 rounds e a aposta mais segura da luta.', edge_level: 'forte', fighter_side: 'neutral' },
      ],
      value_picks: [
        { tipo: 'Over/Under', pick: 'Over 2.5 Rounds', odds: '-180', confianca: 'alta', raciocinio: 'Ambos tendenciam fortemente pra decisao. Estevam controla mas nao finaliza. Ewing absorve mas aguenta. Vai a distancia.' },
        { tipo: 'Metodo', pick: 'Estevam por Decisao', odds: '-110', confianca: 'media', raciocinio: '3 de 3 UFC por UD. O padrao e claro. Se vencer, e nos pontos.' },
        { tipo: 'Moneyline', pick: 'Ewing ML (+130)', odds: '+130', confianca: 'baixa', raciocinio: 'Aposta de valor se voce acredita que Ewing defende os TDs. O volume em pe e avassalador, mas o risco e ser controlado no chao.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Qualquer Um por Finish',
        descricao: 'Estevam tem seulement 1 finish nos ultimos 7 resultados (4 KOs e 3 subs na carreira, mais 7 decisoes). No UFC, ZERO finishes em 3 lutas. Ewing tem 1 luta UFC = 1 decisao. Apostar em finish de qualquer lado e ir contra a tendencia.',
      },
      disclaimer: 'Analyse statistique a titre informatif. Pariez de maniere responsable.',
    },
  },
};
