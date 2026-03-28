import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'erosa-vs-douglas-pos-weighins',
  evento_id: null,
  slug: 'erosa-vs-douglas-pos-weighins',
  titulo: 'Erosa vs Douglas: Pos Weigh-Ins | A Guilhotina do 10th Planet vs o Prospect de Cub Swanson',
  subtitulo: 'CORRECAO: Douglas E o favorito (-325 a -340), NAO Erosa. 5 vitorias seguidas, todas finalizacoes. KO de 36 segundos no DWCS. Erosa como underdog a +260 com 14 submissoes na carreira.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,80m', envergadura: '190cm', idade: 34, academia: '10th Planet Las Vegas' },
      fighter2: { altura: '1,78m', envergadura: '183cm', idade: 30, academia: 'Bloodline Combat Sports, Huntington Beach' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'KO/TKO R1-R2',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: '5 Vitorias Seguidas, Todas Finalizacoes', edge: 'fighter2', impact: 9, description: 'Douglas com 5 vitorias seguidas, TODAS por finalizacao. 10 de 13 vitorias por stoppage. Ex-campeao FW do LFA. KO de 36 segundos no DWCS. A potencia e a consistencia sao reais.' },
      { factor: 'Treinado por Cub Swanson', edge: 'fighter2', impact: 8, description: 'Douglas treina no Bloodline Combat Sports sob Cub Swanson. Swanson e um dos melhores featherweights da historia e sabe preparar lutadores pra o octogono. A escola e de elite.' },
      { factor: 'Must-Watch Prospect', edge: 'fighter2', impact: 7, description: 'Yahoo Sports e MMA Mania marcaram Douglas como "must-watch prospect" do UFC Seattle. Douglas sobre Erosa: "Ele gosta de trocar socos, e isso e tudo que eu preciso."' },
      { factor: '14 Submissoes + 10th Planet', edge: 'fighter1', impact: 8, description: 'Erosa tem 14 vitorias por submissao na carreira. Guilhotina afiada no 10th Planet Las Vegas sob Andy Varela. Se Douglas trocar e cair no scramble, Erosa pode pegar.' },
    ],
    xFactor: {
      title: 'A Maturidade de Erosa e o Willingness de Douglas',
      description: 'Erosa admitiu: "No inicio eu era tao fixado em \'se eu fizer o que fazia no regional, vou pegar bonus!\'" Agora mais disciplinado. Mas Douglas QUER trocar. Se Douglas avanca agressivo, cai exatamente no jogo de scramble onde Erosa tem 14 submissoes.',
    },
  },
  fighter1_info: {
    nome: 'Julian Erosa',
    apelido: 'Juicy J',
    record: '31-13-0',
    ranking: 'Sem ranking',
    ultimasLutas: [
      { result: 'L', opponent: 'Melquizael Costa', method: 'Decisao Unanime', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Darren Elkins', method: 'TKO R1', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Christian Rodriguez', method: 'Sub R1', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Lerryan Douglas',
    record: '13-5-0',
    ranking: 'Sem ranking',
    ultimasLutas: [
      { result: 'W', opponent: 'Cam Teague', method: 'KO R1 (0:36)', event: 'DWCS' },
      { result: 'W', opponent: 'Jeremy Kennedy', method: 'TKO R2', event: 'LFA' },
      { result: 'W', opponent: 'Kevin Wirth', method: 'KO R1', event: 'LFA' },
    ],
  },
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Pena (145 lbs)',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
      evento_data: '28 de Marco, 2026',
      evento_local: 'Climate Pledge Arena, Seattle, Washington',
      categoria_peso: 'Peso Pena (145 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'O Prospect de Cub Swanson vs a Guilhotina de Seattle',
      tagline_sub: 'Douglas -325 a -340, 5 seguidas todas finalizacoes, "must-watch" do card. Erosa +260, hometown fighter com 14 submissoes e guilhotina do 10th Planet.',
      fighter1: {
        nome_completo: 'Julian "Juicy J" Erosa',
        apelido: 'Juicy J',
        sobrenome: 'Erosa',
        record: '31-13-0',
        ranking: 'Sem ranking',
        info_extra: 'Seattle/Yakima, WA | 10th Planet LV, Andy Varela | 34 anos | Luta em casa',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Lerryan Douglas',
        apelido: '',
        sobrenome: 'Douglas',
        record: '13-5-0',
        ranking: 'Sem ranking',
        info_extra: 'Bloodline Combat Sports | Treinado por Cub Swanson | 30 anos',
        imagem_fullbody_url: null,
      },
    },

    narrativa: {
      html_content: `
        <!-- DOUGLAS: O PROSPECT -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">O "Must-Watch" do UFC Seattle</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-blue-400/5 to-blue-400/10"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
            <div class="relative p-6">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-3">PROSPECT EM DESTAQUE</p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-blue-400">Lerryan Douglas</strong> esta sendo chamado de "must-watch prospect" do UFC Seattle por Yahoo Sports e MMA Mania. O motivo e simples: 5 vitorias seguidas, TODAS por finalizacao. 10 de 13 vitorias na carreira por stoppage. Ex-campeao FW do LFA. KO de 36 segundos em Cam Teague no Dana White's Contender Series pra ganhar o contrato.
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                Treina no Bloodline Combat Sports em Huntington Beach sob <strong class="text-blue-400">Cub Swanson</strong>, um dos melhores featherweights da historia do UFC. Swanson sabe preparar lutadores pra o octogono. Douglas sobre Erosa: <em class="text-white/80">"Ele gosta de trocar socos, e isso e tudo que eu preciso."</em>
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                A confianca nao e arrogancia vazia. Douglas tem nocautes rapidos (36 segundos!), finalizacoes consistentes, e um treinador de elite. O perigo e que a confianca pode ser hubris contra um veterano do UFC com 31-13 e 14 submissoes.
              </p>
            </div>
          </div>
        </div>

        <!-- EROSA: O VETERANO DE SEATTLE -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">A Guilhotina do 10th Planet e o Hometown Fighter</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/5 via-transparent to-ufc-red/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-ufc-red/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-ufc-red">Julian Erosa</strong> nasceu em Seattle e cresceu em Yakima. Essa e a luta da casa dele. A torcida vai estar empurrando. Estatisticamente, a vantagem de lutar em casa nos EUA e negligenciavel, mas o fator psicologico nao e zero, especialmente pra um veterano que sabe usar a energia.
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                Os numeros de Erosa sao impressionantes: 14 vitorias por submissao na carreira. A guilhotina e a arma principal, afiada no 10th Planet Las Vegas sob Andy Varela. Erosa admitiu sobre a evolucao mental: <em class="text-white/80">"No inicio eu era tao fixado em 'se eu fizer o que fazia no regional, vou pegar bonus!' Agora sou mais disciplinado."</em>
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                A maturidade importa porque Douglas QUER trocar. <em class="text-white/80">"Ele gosta de trocar socos, e isso e tudo que eu preciso"</em>, disse Douglas. Mas se Douglas avanca agressivo e se coloca em posicoes de scramble, esta entrando no territorio de um cara com 14 submissoes. O willingness de Douglas de trocar e exatamente o que pode abrir espaco pra guilhotina.
              </p>
            </div>
          </div>
        </div>

        <!-- VALOR DO UNDERDOG -->
        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">Erosa a +260: O Melhor Underdog do Card?</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-emerald-400/5 to-emerald-400/10"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-green-300"></div>
            <div class="relative p-6">
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                A +260, <strong class="text-ufc-red">Erosa</strong> esta implicado a ~28% de probabilidade. Mas o valor real pode ser maior. Douglas nunca lutou no UFC. A experiencia de octogono e zero. Erosa tem 17 lutas no UFC. Sabe lidar com a pressao, a audiencia, e o timing do UFC.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                Mais importante: o willingness de Douglas de trocar socos joga diretamente no game de scramble onde Erosa tem 14 submissoes. Se Douglas se colocar em posicoes arriscadas buscando o finish, Erosa pode capitalizar com a guilhotina do 10th Planet. A +260, o valor e GENUINO como live underdog com submission threat.
              </p>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Experiencia UFC', fighter1: '17 lutas no UFC. Veterano.', fighter2: 'Debut UFC. Zero experiencia de octogono.' },
        { dimensao: 'Momentum', fighter1: 'Inconsistente: W-L-W nas ultimas 3', fighter2: '5 seguidas, TODAS finalizacoes' },
        { dimensao: 'Escola', fighter1: '10th Planet LV, Andy Varela (guilhotina)', fighter2: 'Bloodline Combat Sports, Cub Swanson' },
        { dimensao: 'Arma Principal', fighter1: '14 submissoes na carreira, guilhotina afiada', fighter2: '10 de 13 stoppages, KO de 36 seg no DWCS' },
        { dimensao: 'Hometown', fighter1: 'Nasceu em Seattle, cresceu em Yakima', fighter2: 'Huntington Beach, CA' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'A GUILHOTINA DA CASA',
          subtitulo: 'Erosa prova que experiencia de UFC e 14 submissoes vencem hype de prospect',
          consequencias: [
            { tag: 'UPSET', texto: 'A +260, um dos melhores upsets do card. O veterano calou o prospect em casa.' },
            { tag: 'METODO', texto: 'Se for por guilhotina, e momento instantaneo de highlight. 10th Planet validado.' },
          ],
          proxima_luta: 'Erosa vs opponent sem ranking no peso pena',
        },
        fighter2_vence: {
          titulo: 'DOUGLAS CHEGA',
          subtitulo: 'O must-watch prospect confirma o hype com debut UFC impressionante',
          consequencias: [
            { tag: 'DEBUT', texto: 'Debut UFC com vitoria. A escola de Cub Swanson entrega resultado.' },
            { tag: 'PROSPECT', texto: 'Douglas se estabelece como nome a observar no 145.' },
          ],
          proxima_luta: 'Douglas vs opponent mais bem ranqueado no peso pena',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Julian Erosa',
        color: 'red',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Melquizael Costa', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Perdeu nos pontos. Nao conseguiu impor o grappling.' },
          { date: 'Jun 2025', opponent: 'Darren Elkins', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'TKO rapido contra veterano.' },
          { date: 'Mar 2025', opponent: 'Christian Rodriguez', result: 'W', method: 'Sub R1 (guilhotina)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Guilhotina R1. 10th Planet em acao.' },
        ],
        momentum_score: 5,
        momentum_label: 'Inconsistente',
        momentum_trend: 'stable',
        momentum_note: 'Erosa e um veterano que alterna vitorias e derrotas. 31-13 na carreira com 14 submissoes. A guilhotina do 10th Planet e real. Aos 34, nao e prospect, e um veterano com armas especificas. Lutando em casa (Seattle/Yakima). A experiencia de 17 lutas UFC e a maior vantagem contra um debutante.',
      },
      fighter2: {
        nome: 'Lerryan Douglas',
        color: 'blue',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Cam Teague', result: 'W', method: 'KO R1 (0:36)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'KO de 36 SEGUNDOS no DWCS. Contrato ganho de forma espetacular.' },
          { date: 'Mai 2025', opponent: 'Jeremy Kennedy', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'TKO no LFA. Ex-campeao FW do LFA.' },
          { date: 'Fev 2025', opponent: 'Kevin Wirth', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'KO R1 no LFA.' },
        ],
        momentum_score: 8,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: '5 vitorias seguidas, TODAS por finalizacao. 10 de 13 na carreira por stoppage. KO de 36 seg no DWCS. Treinado por Cub Swanson. Marcado como "must-watch" por Yahoo Sports e MMA Mania. A questao e: o nivel de oposicao do LFA/DWCS traduz pro UFC? O debut no octogono e sempre incognita.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Erosa',
        media_oponentes: 2,
        media_oponentes_label: 'Medio',
        aproveitamento: '10W-7L (59%)',
        contra_top5: '0W-0L',
      },
      fighter2: {
        nome: 'Douglas',
        media_oponentes: 1,
        media_oponentes_label: 'Ruim',
        aproveitamento: '0W-0L (debut)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Erosa enfrentou nivel UFC medio (17 lutas). Douglas vem do LFA/DWCS. O gap de nivel de oposicao e real. A experiencia de octogono e a vantagem mais clara de Erosa.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.20, valueB: 5.10, maxVal: 8, format: 'decimal', note: 'Douglas com volume maior. Mais agressivo e constante. "Ele gosta de trocar, e tudo que preciso."' },
        { label: 'Precisao de Strikes (%)', valueA: 45, valueB: 50, maxVal: 100, format: 'percent', note: 'Douglas mais preciso. Treinamento com Swanson reflete na tecnica.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.80, valueB: 3.00, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Douglas absorve menos. Menos exposicao, lutas mais curtas.' },
        { label: 'Defesa de Strikes (%)', valueA: 48, valueB: 52, maxVal: 100, format: 'percent', note: 'Numeros do LFA/DWCS. O nivel sobe no UFC.' },
        { label: 'Takedowns por 15 Min', valueA: 1.20, valueB: 0.80, maxVal: 3, format: 'decimal', note: 'Erosa com leve vantagem. Pode buscar takedown pra entrar em grappling.' },
        { label: 'Submissoes por 15 Min', valueA: 1.80, valueB: 0.20, maxVal: 3, format: 'decimal', note: 'DIFERENCA ABSURDA. Erosa busca submissao CONSTANTEMENTE. Douglas quase nunca.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '34 anos', fighter2: '30 anos', note: 'Douglas 4 anos mais jovem.' },
        { label: 'Altura', fighter1: '1,80m (5\'11")', fighter2: '1,78m (5\'10")', note: 'Tamanho similar.' },
        { label: 'Envergadura', fighter1: '190cm (75")', fighter2: '183cm (72")', note: 'Erosa com 3 polegadas de reach a mais.' },
        { label: 'Lutas UFC', fighter1: '17 lutas', fighter2: '0 (debut)', note: 'Erosa com 17x mais experiencia de octogono.' },
        { label: 'Academia', fighter1: '10th Planet LV (Andy Varela)', fighter2: 'Bloodline Combat Sports (Cub Swanson)', note: 'Ambas academias de elite em especialidades diferentes.' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking', valueA: 62, valueB: 78, labelA: 'Bom', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: 'Douglas com 10 de 13 stoppages. KO de 36 seg no DWCS. Treinado por Swanson. O striking e a arma principal. Erosa e competente mas nao e nocauteador.' },
        { label: 'Grappling e Submissao', valueA: 82, valueB: 52, labelA: 'Muito Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: '14 submissoes na carreira. Guilhotina afiada no 10th Planet sob Andy Varela. 1.80 subs/15min. Se a luta for pro chao ou pra scrambles, Erosa e MUITO mais perigoso. A maior assimetria do matchup.' },
        { label: 'Experiencia UFC', valueA: 80, valueB: 30, labelA: 'Muito Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: '17 lutas UFC vs 0 (debut). Erosa sabe lidar com a pressao do octogono, a audiencia, o timing. Douglas NUNCA experimentou. O debut e sempre incognita.' },
        { label: 'Poder de Nocaute', valueA: 55, valueB: 80, labelA: 'Bom', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: 'Douglas com 10 de 13 finalizacoes. KO de 36 seg. O poder e real e imediato. Erosa nao e nocauteador, ganha por submissao.' },
        { label: 'Cardio', valueA: 68, valueB: 62, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Erosa com mais experiencia em lutas longas (31-13, muitas decisoes). Douglas vem de lutas rapidas (finalizacoes precoces). Se a luta durar, Erosa tem mais dados de cardio.' },
        { label: 'Maturidade Tatica', valueA: 72, valueB: 58, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Erosa admitiu evolucao: "No inicio era fixado em bonus." Agora mais disciplinado. Douglas pode ser excessivamente confiante no debut. A maturidade e vantagem em momentos de pressao.' },
      ],
      insight: 'Douglas e o lutador mais talentoso e mais explosivo. Mas e debut UFC contra veterano de 17 lutas com 14 submissoes. Se Douglas trocar como prometeu ("ele gosta de trocar, tudo que preciso"), pode se colocar em posicoes de scramble onde a guilhotina do 10th Planet esta esperando. A +260, Erosa e o underdog com valor genuino.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Erosa',
        ko_tko: { count: 8, percent: 26 },
        submission: { count: 14, percent: 45 },
        decision: { count: 9, percent: 29 },
        total_wins: 31,
      },
      fighter2: {
        nome: 'Douglas',
        ko_tko: { count: 10, percent: 77 },
        submission: { count: 1, percent: 8 },
        decision: { count: 2, percent: 15 },
        total_wins: 13,
      },
      insight: 'Douglas com 77% KO/TKO. Erosa com 45% submissao. A luta e striking vs grappling. Se Douglas manter distancia e conectar, vence por KO. Se Erosa puxar pro scramble/chao, as 14 submissoes entram em jogo. A willingness de Douglas de trocar pode ser a abertura que Erosa precisa.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 8,
          danger_label: 'VANTAGEM DOUGLAS',
          color: 'green',
          title: 'A Explosao do Prospect',
          description: 'Douglas com 10 de 13 finalizacoes, muitas no R1 (36 seg no DWCS). Se conectar algo pesado cedo, Erosa pode nao ter tempo de implementar o grappling. O R1 e o territorio de Douglas. A energia de debut pode amplificar a agressividade.',
        },
        {
          rounds: 'R2',
          danger_level: 5,
          danger_label: 'EQUILIBRADO',
          color: 'gold',
          title: 'A Transicao',
          description: 'Se Erosa sobreviveu ao R1, o jogo muda. A experiencia de UFC comeca a pesar. Erosa pode comecar a buscar scrambles e posicoes de submissao. Douglas pode comecar a sentir a pressao do octogono pela primeira vez. O R2 e o round da verdade.',
        },
        {
          rounds: 'R3',
          danger_level: 4,
          danger_label: 'VANTAGEM EROSA',
          color: 'red',
          title: 'Experiencia vs Debut',
          description: 'Se chegar ao R3, Erosa esta em vantagem. 17 lutas UFC, experiencia em rounds tardios. Douglas nunca esteve aqui no nivel UFC. A fadiga do debut, a pressao, e o grappling constante de Erosa podem ser demais.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'Zap', title: '5 Seguidas, Todas Finalizacoes', fighter: 'Douglas', risk_level: 'ENORME POSITIVO', risk_color: 'green', description: '5 vitorias seguidas, TODAS por stoppage. 10 de 13 na carreira. KO de 36 seg no DWCS. Ex-campeao LFA FW. "Must-watch" por Yahoo Sports e MMA Mania. O hype e baseado em numeros reais.' },
        { icon: 'Brain', title: 'Treinado por Cub Swanson', fighter: 'Douglas', risk_level: 'POSITIVO', risk_color: 'green', description: 'Bloodline Combat Sports sob Swanson. Um dos melhores featherweights da historia preparando o prospect. A escola e de elite.' },
        { icon: 'Shield', title: '14 Submissoes + 10th Planet', fighter: 'Erosa', risk_level: 'ENORME POSITIVO', risk_color: 'green', description: '14 vitorias por submissao. Guilhotina afiada no 10th Planet sob Andy Varela. 1.80 subs/15min. Se a luta for pro chao, Erosa e MUITO mais perigoso.' },
        { icon: 'MapPin', title: 'Hometown Fighter', fighter: 'Erosa', risk_level: 'POSITIVO', risk_color: 'green', description: 'Nasceu em Seattle, cresceu em Yakima. A torcida e dele. Estatisticamente a vantagem de casa nos EUA e pequena, mas psicologicamente nao e zero.' },
        { icon: 'AlertTriangle', title: 'Debut UFC de Douglas', fighter: 'Douglas', risk_level: 'RISCO MEDIO', risk_color: 'yellow', description: 'Zero lutas no UFC. A transicao do LFA/DWCS pro octogono e real. A pressao, a audiencia, o timing diferente. Muitos prospects promissores falharam no debut. A incognita e significativa.' },
        { icon: 'Target', title: '"Ele Gosta de Trocar" = Abertura', fighter: 'Erosa', risk_level: 'POSITIVO', risk_color: 'green', description: 'Douglas prometeu trocar. Se avancar agressivo, se coloca em posicoes de scramble. Exatamente onde Erosa tem 14 submissoes e uma guilhotina do 10th Planet. A willingness de Douglas e a abertura.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Erosa',
        total_probability: 30,
        scenarios: [
          { name: 'Guilhotina no Scramble', probability: 15, method: 'Submissao R1-R2', description: 'Douglas avanca agressivo (como prometeu), Erosa puxa pro clinch ou scramble, e pega a guilhotina do 10th Planet. A willingness de Douglas de trocar e a abertura perfeita. 14 submissoes na carreira nao mentem.' },
          { name: 'Decisao por Controle', probability: 8, method: 'Decisao Unanime', description: 'Erosa usa experiencia de 17 lutas UFC pra controlar o ritmo, manter distancia, e vencer nos pontos. Menos provavel porque Erosa nao e tipicamente point-fighter, mas a maturidade pode funcionar.' },
          { name: 'TKO por Acumulo', probability: 7, method: 'TKO R2-R3', description: 'Erosa machuca Douglas com strikes e o debutante nao sabe lidar com adversidade no UFC. Pressao da torcida + dano acumulado = TKO tardio.' },
        ],
      },
      fighter2: {
        nome: 'Douglas',
        total_probability: 68,
        scenarios: [
          { name: 'KO Precoce', probability: 35, method: 'KO/TKO R1', description: 'Douglas conecta power shot nos primeiros 3 minutos. 10 de 13 stoppages. KO de 36 seg no DWCS. Se a potencia e real no nivel UFC, Erosa cai. O cenario mais provavel.' },
          { name: 'TKO por Volume e Dominio', probability: 20, method: 'TKO R2', description: 'Douglas pressiona com volume, machuca Erosa, e o arbitro para no R2. Similar ao TKO de Kennedy no LFA.' },
          { name: 'Decisao por Dominio Striking', probability: 13, method: 'Decisao Unanime', description: 'Douglas domina no striking por 3 rounds sem conseguir o finish. Erosa resiliente demais pra ser finalizado mas sem a habilidade de reverter. Vitoria clara nos pontos.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Lerryan Douglas',
      winner_side: 'fighter2',
      predicted_method: 'KO/TKO R1-R2',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation: 'Douglas e o lutador mais talentoso e mais explosivo. 5 seguidas todas finalizacoes. 10 de 13 stoppages. Treinado por Cub Swanson. "Must-watch" do card. O poder e a consistencia sao reais. Porem, Erosa a +260 tem VALOR GENUINO como live underdog. 14 submissoes, guilhotina do 10th Planet, 17 lutas UFC contra zero de Douglas. A willingness de Douglas de trocar ("ele gosta de trocar, tudo que preciso") pode abrir espaco pra scrambles onde Erosa e perigoso. O debut no UFC e sempre incognita. Confianca MEDIA-ALTA em Douglas, mas os 30% de Erosa sao reais e a +260, a matematica favorece tomar o shot como underdog se voce acredita na guilhotina.',
      x_factor: {
        title: 'Erosa a +260 Como Live Underdog',
        description: 'A +260, Erosa esta implicado a ~28%. Mas com 14 submissoes, guilhotina afiada, 17 lutas UFC, e Douglas prometendo trocar (exatamente o que abre scrambles), a probabilidade real pode ser 30-35%. Se o gap for 5-7 pontos, e valor real. O melhor underdog bet do card.',
      },
      upset_alert: {
        title: 'O Debut E Sempre Incognita',
        description: 'Douglas nunca lutou no UFC. A pressao e diferente. A audiencia e diferente. Muitos prospects com credenciais similares falharam no debut. Se Douglas congelar ou for excessivamente confiante nos primeiros 2 minutos, Erosa tem experiencia pra capitalizar.',
      },
      probabilities: {
        fighter1: { nome: 'Erosa', percent: 30 },
        fighter2: { nome: 'Douglas', percent: 68 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Erosa ML (+260)', reasoning: 'MELHOR UNDERDOG BET DO CARD. 14 submissoes, guilhotina, 17 lutas UFC contra debut. Douglas quer trocar = abre scrambles. A +260, se a probabilidade real e 30-35%, e valor matematico. Risco/recompensa excelente.' },
        method: { pick: 'Douglas KO/TKO (-180)', reasoning: '10 de 13 stoppages. 77% KO rate. O cenario mais provavel de vitoria. -180 e justo.' },
        over_under: { pick: 'Under 2.5 Rounds (-150)', rounds: 2.5, reasoning: 'Douglas finaliza cedo (36 seg DWCS). Erosa busca sub cedo. Ambos sao finalizadores. Dificil essa luta ir ate o R3.' },
        best_value: 'Erosa ML a +260 e o melhor valor de underdog do card inteiro. 14 submissoes, 10th Planet guilhotina, 17 lutas UFC, Douglas prometendo trocar. Se voce aposta R$100, ganha R$260 se Erosa pegar a guilhotina. O risco e real (Douglas e mais talentoso), mas o retorno justifica. Como seguranca: Douglas KO/TKO -180.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Douglas Avanca Agressivo nos Primeiros 60 Seg?', icon: 'Zap', description: 'Se Douglas sair agressivo buscando finish cedo (como no DWCS, 36 seg), pode acabar rapido. MAS se for excessivamente agressivo, abre scrambles onde Erosa tem 14 subs. A agressividade de Douglas e faca de dois gumes.' },
        { num: 2, title: 'Erosa Busca Clinch Cedo?', icon: 'Target', description: 'Se Erosa for direto pro clinch nos primeiros 30 seg, o plano e levar pro chao e buscar submissao. Se ficar na distancia trocando, esta no jogo de Douglas. O approach inicial de Erosa revela o game plan.' },
        { num: 3, title: 'A Pressao do Debut em Douglas', icon: 'Brain', description: 'Observe a linguagem corporal de Douglas nos primeiros 60 seg. Se estiver solto e confiante, o debut nao afetou. Se parecer rigido ou hesitante, a pressao do octogono esta pesando. Muitos prospects prometem agressividade e congelam no debut.' },
        { num: 4, title: 'A Torcida de Erosa', icon: 'MapPin', description: 'Seattle e a casa de Erosa. Observe se a torcida empurra ele. Se os barulhos da torcida fizerem Erosa lutar com mais intensidade, pode ser fator. Se Douglas usar a torcida adversa como motivacao, pode ser neutro.' },
        { num: 5, title: 'Erosa Busca Guilhotina no R1?', icon: 'Shield', description: 'Se Erosa tentar guilhotina no R1, confirma que o plano e submissao precoce. A guilhotina do 10th Planet e a arma mais perigosa pra Douglas. Se nao tentar, pode estar esperando uma abertura melhor no R2.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'CORRECAO', content: 'EROSA vs DOUGLAS\nPOS WEIGH-INS\n\nCORRECAO: DOUGLAS e o favorito!\nDouglas: -325 a -340\nErosa: +260 a +270\n\nDouglas: 5 seguidas, TODAS finalizacoes\nKO de 36 seg no DWCS\n"Must-watch" do UFC Seattle\n\nErosa: 14 submissoes, guilhotina\n10th Planet, luta em CASA', color: 'gold' },
        { slide_number: 2, title: 'O MATCHUP', content: 'DOUGLAS:\n10 de 13 stoppages\nTreinado por Cub Swanson\n"Ele gosta de trocar. Tudo que preciso."\n\nEROSA:\n14 submissoes, guilhotina 10th Planet\n17 lutas UFC vs 0 (debut)\n\nDouglas QUER trocar.\n= abre scrambles.\n= exatamente onde Erosa tem\n14 submissoes.', color: 'red' },
        { slide_number: 3, title: 'PREVISAO', content: 'DOUGLAS KO/TKO R1-R2\nConfianca: MEDIA-ALTA (7/10)\n68% Douglas / 30% Erosa\n\nMAS: Erosa ML +260\n= MELHOR UNDERDOG DO CARD\n14 subs, guilhotina, 17 UFC fights\nDouglas quer trocar = abertura\n\nSe aposta R$100, ganha R$260\nse a guilhotina pegar.', color: 'blue' },
      ],
      twitter: [
        { num: '1/3', text: 'POS WEIGH-INS: Erosa vs Douglas. CORRECAO: DOUGLAS e o favorito (-325 a -340). 5 seguidas todas finalizacoes. KO de 36 seg no DWCS. "Must-watch" por Yahoo Sports. Treinado por Cub Swanson.' },
        { num: '2/3', text: 'MAS: Erosa a +260 e o MELHOR UNDERDOG BET do card. 14 submissoes, guilhotina 10th Planet, 17 lutas UFC vs 0 (debut). Douglas QUER trocar ("tudo que preciso"). Trocar = scrambles. Scrambles = guilhotina. A matematica favorece tomar o shot.' },
        { num: '3/3', text: 'Pick: Douglas KO R1-R2. Confianca MEDIA-ALTA. Mas Erosa +260 e aposta de VALOR. R$100 pra R$260 na guilhotina do hometown fighter contra debutante que promete trocar. O debut no UFC e sempre incognita.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: 'O "must-watch" do UFC Seattle quer trocar socos. Mas o adversario tem 14 submissoes e uma guilhotina do 10th Planet. Em casa.' },
        { time: '10-25s', title: 'Douglas', text: '5 seguidas todas finalizacoes. KO de 36 seg no DWCS. Treinado por Cub Swanson. "Ele gosta de trocar, tudo que preciso." Must-watch por Yahoo Sports.' },
        { time: '25-40s', title: 'Erosa', text: '14 submissoes. Guilhotina do 10th Planet. 17 lutas UFC contra debut de Douglas. Nasceu em Seattle. Se Douglas trocar como prometeu, abre scrambles = guilhotina.' },
        { time: '40-50s', title: 'Valor', text: 'Erosa a +260 = melhor underdog do card. R$100 vira R$260 se a guilhotina pegar. O debut no UFC e sempre incognita.' },
        { time: '50-60s', title: 'CTA', text: 'Voce apostaria no underdog de Seattle? Comenta e segue.' },
      ],
      tiktok: [
        { hook: 'Esse prospect tem 5 seguidas TODAS finalizacoes e quer trocar. Contra um cara com 14 submissoes. Em casa.', body: 'Douglas: must-watch do UFC Seattle. KO de 36 seg no DWCS. Treinado por Cub Swanson. MAS: ele QUER trocar socos com Erosa. Erosa: 14 submissoes, guilhotina do 10th Planet, 17 lutas UFC. Nasceu em Seattle. Se Douglas trocar, abre scrambles. Scrambles = guilhotina. Erosa a +260. O melhor underdog bet do card.', cta: 'Aposta no prospect ou no veterano da casa? Comenta!' },
      ],
      headlines: [
        'Douglas "Must-Watch" Quer Trocar Socos Com o Cara Que Tem 14 Submissoes',
        'Erosa +260: O Melhor Underdog Bet do UFC Seattle',
        'A Guilhotina do 10th Planet vs o KO de 36 Segundos: O Embate de Estilos',
        'Cub Swanson Preparou Douglas, Mas o Debut No UFC E Sempre Incognita',
      ],
      podcast: [
        {
          timestamp: '0:00-5:00',
          title: 'Must-Watch vs Guilhotina: O Underdog de Melhor Valor',
          talking_points: [
            'CORRECAO: Douglas E o favorito (-325 a -340), nao Erosa. 5 seguidas todas finalizacoes. KO 36 seg DWCS.',
            'Treinado por Cub Swanson. "Ele gosta de trocar, tudo que preciso." Must-watch por Yahoo Sports.',
            'Erosa: 14 submissoes, guilhotina 10th Planet, 17 UFC fights, nasceu em Seattle. A +260.',
            'Douglas quer trocar = abre scrambles = guilhotina. A willingness de Douglas e a abertura de Erosa.',
            'Erosa +260 = melhor underdog do card. R$100 pra R$260. O debut e sempre incognita.',
          ],
          discussion_questions: [
            'Douglas realmente vai trocar ou vai ser mais cauteloso no debut?',
            'A guilhotina de Erosa e real o suficiente pra justificar +260?',
          ],
        },
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '+260 a +270',
        fighter2_odds: '-325 a -340',
        fighter1_name: 'Julian Erosa',
        fighter2_name: 'Lerryan Douglas',
        source: 'Range de DraftKings, FanDuel e BetMGM (marco 2026)',
      },
      edges: [
        { icon: 'Zap', titulo: '5 Seguidas Todas Finalizacoes', stat_headline: 'DOUGLAS: 5 SEGUIDAS, TODAS FINALIZACOES. 10 DE 13 STOPPAGES. KO 36 SEG DWCS.', contexto: 'A consistencia e real. Treinado por Cub Swanson. Must-watch por Yahoo Sports e MMA Mania. O poder e o finishing instinct sao de elite pro nivel LFA/DWCS.', implicacao_aposta: 'Douglas KO/TKO -180 e o cenario mais provavel. Justificado no preco.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Shield', titulo: '14 Submissoes + Willingness de Douglas', stat_headline: 'EROSA: 14 SUBMISSOES, GUILHOTINA 10TH PLANET. DOUGLAS: "ELE GOSTA DE TROCAR, TUDO QUE PRECISO."', contexto: 'Douglas QUER trocar. Trocar = scrambles. Scrambles = guilhotina. A willingness de Douglas e a abertura perfeita pra Erosa. 14 submissoes na carreira nao mentem.', implicacao_aposta: 'Erosa ML +260 e o MELHOR UNDERDOG do card. Se a probabilidade real e 30-35% vs 28% implicito, e valor.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'AlertTriangle', titulo: 'Debut UFC de Douglas', stat_headline: 'DOUGLAS: 0 LUTAS UFC. EROSA: 17 LUTAS UFC.', contexto: 'O debut e sempre incognita. A pressao do octogono, a audiencia, o timing. Muitos prospects falham. Erosa sabe lidar.', implicacao_aposta: 'O risco do debut favorece tomar Erosa como underdog. A experiencia e nao-quantificavel mas real.', edge_level: 'moderado', fighter_side: 'fighter1' },
        { icon: 'MapPin', titulo: 'Hometown Fighter', stat_headline: 'EROSA NASCEU EM SEATTLE, CRESCEU EM YAKIMA. LUTA EM CASA.', contexto: 'Vantagem de casa nos EUA e estatisticamente pequena, mas psicologicamente nao e zero. A torcida pode empurrar Erosa em momentos criticos.', implicacao_aposta: 'Fator extra pro underdog. Nao muda a analise principal mas adiciona ao valor.', edge_level: 'leve', fighter_side: 'fighter1' },
      ],
      value_picks: [
        { tipo: 'Moneyline', pick: 'Erosa ML', odds: '+260', confianca: 'media', edge_vs_mercado: 'A +260, implicito 28%. Com 14 subs, guilhotina, 17 UFC fights, Douglas querendo trocar, prob real pode ser 30-35%. Se o gap for 5-7 pontos, e valor.', raciocinio: 'MELHOR UNDERDOG DO CARD. R$100 pra R$260. O risco e real (Douglas e mais talentoso), mas o retorno justifica. A guilhotina e a arma, o willingness de Douglas e a abertura.' },
        { tipo: 'Metodo', pick: 'Douglas KO/TKO', odds: '-180', confianca: 'alta', raciocinio: '10 de 13 stoppages. 77% KO rate. O cenario mais provavel de vitoria. -180 e preco justo.' },
        { tipo: 'Prop', pick: 'Erosa por Submissao', odds: '+500', confianca: 'baixa', edge_vs_mercado: 'Se Erosa vencer, provavelmente e por submissao (14 na carreira). +500 paga 5:1 pro cenario mais provavel de upset. Micro-aposta de R$20 que vira R$100.', raciocinio: 'Aposta de alto risco/alto retorno. Se a guilhotina pegar, +500 e espetacular. Se nao, perdeu R$20.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Douglas ML a -325 a -340',
        descricao: 'Douglas a -340 e caro pra debut UFC. Zero lutas no octogono. A transicao LFA/DWCS pro UFC NAO e garantida. Muitos prospects com credenciais similares falharam no debut. Apostar -340 num debutante contra veterano com 14 subs em casa e pagar caro por incerteza. Douglas KO/TKO -180 e MUITO melhor risco/retorno do que ML -340.',
      },
      disclaimer: 'Analise pos weigh-ins para fins informativos. Aposte com responsabilidade.',
    },
  },
};

export default function Page() {
  return <FullAnalysisView analise={analise} />;
}
