import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'abdul-malik-vs-belgaroui-pos-weighins',
  evento_id: null,
  slug: 'abdul-malik-vs-belgaroui-pos-weighins',
  titulo: 'Abdul-Malik vs Belgaroui: Pos Weigh-Ins | D-1 Wrestling vs GLORY Kickboxing, Pereira no Corner',
  subtitulo: 'A linha mais apertada do card: pick\'em real. Abdul-Malik: 9 vitorias, TODAS por stoppage, 7 no R1. Belgaroui: 27-7 no GLORY, treina com Pereira, 6\'6". Experts divididos.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,85m', envergadura: '193cm', idade: 28, academia: 'Xtreme Couture, Las Vegas' },
      fighter2: { altura: '1,98m', envergadura: '198cm', idade: 33, academia: 'Pereira Camp / Glorious MMA' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'TKO R1-R2',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Wrestling D-1 vs Grappling Limitado', edge: 'fighter1', impact: 9, description: 'Abdul-Malik: 3x Maryland State Placer, 2016 champion, 2x Super 32 placer, D-1 em Maryland (heavyweight). Treina no Xtreme Couture com Eric Nicksick. Belgaroui transicionou de kickboxing puro recentemente. O wrestling e a assimetria critica.' },
      { factor: '9-0 em Stoppages, 7 no R1', edge: 'fighter1', impact: 8, description: 'Abdul-Malik tem 9 vitorias, TODAS por stoppage (7 KO/TKO, 2 sub). 7 no primeiro round. Ele nao vai pros juizes. Quando ganha, acaba rapido.' },
      { factor: 'Belgaroui com 6\'6" e 27-7 no GLORY', edge: 'fighter2', impact: 8, description: 'Belgaroui e 6\'6" com record de 27-7 no GLORY kickboxing. Venceu Pereira no GLORY 40. Desafiou o titulo GLORY MW 3 vezes. O kickboxing e de elite mundial. A diferenca de tamanho e REAL.' },
      { factor: 'Pereira Diario no Treino', edge: 'fighter2', impact: 7, description: 'Belgaroui treina com Alex Pereira DIARIAMENTE. Estava no corner de Pereira no UFC 320. "A maior licao e mentalidade." Ter Pereira como sparring partner de striking e uma vantagem absurda.' },
    ],
    xFactor: {
      title: 'A Mentalidade "Recreativa" de Abdul-Malik',
      description: '"Eu tenho a mentalidade de alguem que e recreativo. Isso e diversao... mas minhas acoes sao de um homem absolutamente obcecado." Mistura de leveza mental com obsessao na preparacao. Pode ser a combinacao perfeita pra nao sentir pressao no octogono.',
    },
  },
  fighter1_info: {
    nome: 'Sedriques Abdul-Malik',
    record: '9-0-1',
    ranking: 'Sem ranking',
    ultimasLutas: [
      { result: 'W', opponent: 'Trocoli', method: 'Sub R1', event: 'UFC Fight Night' },
      { result: 'D', opponent: 'Cody Brundage', method: 'Decisao Majoritaria', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Klein', method: 'TKO R2', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Todorovic', method: 'TKO R1', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Aziz Belgaroui',
    record: '11-2-0',
    ranking: 'Sem ranking',
    ultimasLutas: [
      { result: 'W', opponent: 'Bekoev', method: 'TKO R3', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Medio (185 lbs)',
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
      categoria_peso: 'Peso Medio (185 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'D-1 Wrestling vs GLORY Kickboxing',
      tagline_sub: 'A linha mais apertada do card. Abdul-Malik: 9 vitorias, TODAS stoppage. Belgaroui: 6\'6", 27-7 GLORY, treina com Pereira. Experts divididos.',
      fighter1: {
        nome_completo: 'Sedriques Abdul-Malik',
        apelido: '',
        sobrenome: 'Abdul-Malik',
        record: '9-0-1',
        ranking: 'Sem ranking',
        info_extra: 'Xtreme Couture, Las Vegas | Eric Nicksick | 28 anos',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Aziz Belgaroui',
        apelido: '',
        sobrenome: 'Belgaroui',
        record: '11-2-0',
        ranking: 'Sem ranking',
        info_extra: 'Pereira Camp / Glorious MMA | 6\'6" | 33 anos | 27-7 GLORY',
        imagem_fullbody_url: null,
      },
    },

    narrativa: {
      html_content: `
        <!-- D-1 WRESTLING -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">O Wrestler Obcecado Com Mentalidade Recreativa</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/10 via-ufc-red/5 to-ufc-red/10"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
            <div class="relative p-6">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-3">CREDENCIAIS DE WRESTLING</p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-ufc-red">Sedriques Abdul-Malik</strong> nao e um wrestler qualquer. 3x Maryland State Placer, campeao estadual em 2016, 2x Super 32 placer, D-1 na Universidade de Maryland como heavyweight. Treina no Xtreme Couture em Las Vegas com Eric Nicksick, um dos melhores treinadores do MMA.
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                Os numeros sao absurdos: 9 vitorias, TODAS por stoppage. 7 KO/TKO, 2 submissoes. 7 no primeiro round. Ele simplesmente nao vai pros juizes. Quando ganha, acaba rapido. A mentalidade dele e unica: <em class="text-white/80">"Eu tenho a mentalidade de alguem que e recreativo. Isso e diversao... mas minhas acoes sao de um homem absolutamente obcecado."</em>
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                Essa mistura de leveza com obsessao e rara. No octogono, significa um cara que nao sente pressao mas se prepara como se a vida dependesse disso. O wrestling D-1 e a fundacao, mas os 7 KO/TKO mostram que o striking evoluiu significativamente.
              </p>
            </div>
          </div>
        </div>

        <!-- GLORY KICKBOXING + PEREIRA -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">27-7 no GLORY e o Corner de Pereira</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-blue-400">Aziz Belgaroui</strong> nao e um kickboxer qualquer. 27-7 no GLORY, a maior organizacao de kickboxing do mundo. Venceu Alex Pereira no GLORY 40. Desafiou o titulo GLORY MW tres vezes. O striking e de nível mundial, nao de nível MMA.
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                Com 6'6" de altura (1,98m), a diferenca de tamanho contra <strong class="text-ufc-red">Abdul-Malik</strong> (1,85m) e de 13 centimetros. Isso e ENORME no peso medio. O reach, os angulos, e a distancia de striking favorecem Belgaroui absurdamente se a luta ficar em pe.
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                O dado mais impressionante: <strong class="text-blue-400">Belgaroui treina com Pereira DIARIAMENTE</strong>. Estava no corner de Pereira no UFC 320. Sobre Pereira: <em class="text-white/80">"A maior licao e mentalidade."</em> Ter o campeao duplo do UFC como sparring partner de striking e uma vantagem que nao se quantifica.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                A vulnerabilidade e clara: o grappling. Belgaroui transicionou de kickboxing puro relativamente recentemente. Contra um D-1 wrestler, o chao e o pesadelo. A questao inteira da luta e: Abdul-Malik consegue fechar a distancia e derrubar? Se sim, domina. Se nao, Belgaroui pica em pe com vantagem de tamanho e tecnica de nível mundial.
              </p>
            </div>
          </div>
        </div>

        <!-- EXPERTS DIVIDIDOS -->
        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Experts Divididos: A Linha Mais Apertada</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-ufc-red/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-ufc-red rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-ufc-red mb-2">MMA Mania</p>
                <p class="text-sm text-white/60 leading-relaxed">Escolheu <strong class="text-ufc-red">Abdul-Malik</strong>. O wrestling D-1 e a arma que Belgaroui nao tem resposta. Se fechar distancia, domina no chao.</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">SportsbettingDime</p>
                <p class="text-sm text-white/60 leading-relaxed">Escolheu <strong class="text-blue-400">Belgaroui</strong>. O tamanho (6'6") e o kickboxing de nivel GLORY sao demais. Se manter distancia, Abdul-Malik nao chega.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Estilo', fighter1: 'D-1 Wrestling + KO power', fighter2: '27-7 GLORY Kickboxing + 6\'6"' },
        { dimensao: 'Stoppage Rate', fighter1: '9 vitorias, TODAS stoppage, 7 no R1', fighter2: '9 de 11 vitorias por stoppage' },
        { dimensao: 'Camp', fighter1: 'Xtreme Couture, Eric Nicksick', fighter2: 'Treina com Pereira diariamente' },
        { dimensao: 'Vulnerabilidade', fighter1: 'Tamanho: 13cm menor', fighter2: 'Grappling: transicao recente de kickboxing puro' },
        { dimensao: 'Experts', fighter1: 'MMA Mania escolheu Abdul-Malik', fighter2: 'SportsbettingDime escolheu Belgaroui' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'WRESTLING VENCE KICKBOXING',
          subtitulo: 'Abdul-Malik fecha distancia, derruba, e confirma que o chao e o pesadelo de Belgaroui',
          consequencias: [
            { tag: 'PADRAO', texto: 'Mais um stoppage. A sequencia de 100% finalizacoes continua.' },
            { tag: 'PROSPECT', texto: 'Abdul-Malik se estabelece como prospect serio do MW com base de wrestling + poder.' },
          ],
          proxima_luta: 'Abdul-Malik vs top 15-20 MW',
        },
        fighter2_vence: {
          titulo: 'GLORY NO OCTOGONO',
          subtitulo: 'Belgaroui usa tamanho e kickboxing mundial pra manter distancia e dominar',
          consequencias: [
            { tag: 'DEBUT', texto: 'Debut UFC com vitoria impressionante. O kickboxing de GLORY traduz perfeitamente.' },
            { tag: 'NARRATIVA', texto: 'Treinar com Pereira = resultado. A mentalidade e o sparring deram frutos.' },
          ],
          proxima_luta: 'Belgaroui vs opponent estabelecido no MW',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Sedriques Abdul-Malik',
        color: 'red',
        recent_fights: [
          { date: 'Dez 2025', opponent: 'Trocoli', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Submissao no primeiro round. Eficiencia total.' },
          { date: 'Jun 2025', opponent: 'Cody Brundage', result: 'D', method: 'Decisao Majoritaria', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Empate por decisao majoritaria. Primeira luta que nao terminou em stoppage.' },
          { date: 'Fev 2025', opponent: 'Klein', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'TKO no segundo round.' },
          { date: 'Nov 2024', opponent: 'Todorovic', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'TKO rapido no primeiro round.' },
        ],
        momentum_score: 7,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: 'Abdul-Malik e invicto com 9 vitorias (TODAS por stoppage) e 1 empate. O empate contra Brundage mostra que quando nao consegue o finish, pode ter dificuldade. Contra Belgaroui, a dinamica e clara: se derrubar, domina. Se ficar em pe contra um kickboxer GLORY de 6\'6", e perigoso.',
      },
      fighter2: {
        nome: 'Aziz Belgaroui',
        color: 'blue',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Bekoev', result: 'W', method: 'TKO R3', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'TKO no terceiro round. Debut UFC com vitoria.' },
        ],
        momentum_score: 7,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: 'Belgaroui vem de sequencia de vitorias por stoppage. O nivel de oposicao no MMA e baixo (Brave CF, DWCS), mas o kickboxing GLORY (27-7, venceu Pereira, 3x title challenger) e credencial de elite. Treina diariamente com Pereira. A transicao pra MMA e o ponto de interrogacao. O grappling e a vulnerabilidade clara contra um D-1 wrestler.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Abdul-Malik',
        media_oponentes: 1,
        media_oponentes_label: 'Ruim',
        aproveitamento: '3W-0L-1D (75%)',
        contra_top5: '0W-0L',
      },
      fighter2: {
        nome: 'Belgaroui',
        media_oponentes: 1,
        media_oponentes_label: 'Ruim',
        aproveitamento: '1W-0L (100%)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. O nivel de MMA de ambos e baixo. O diferencial e pedigree externo: Abdul-Malik com D-1 wrestling, Belgaroui com GLORY kickboxing. A questao e como esses pedigrees traduzem no octogono, um contra o outro.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.80, valueB: 5.60, maxVal: 8, format: 'decimal', note: 'Belgaroui com volume maior. Kickboxer de GLORY acostumado a alto output.' },
        { label: 'Precisao de Strikes (%)', valueA: 52, valueB: 48, maxVal: 100, format: 'percent', note: 'Abdul-Malik mais preciso. Menos volume mas mais acurado.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.80, valueB: 3.20, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Belgaroui absorve menos. O tamanho e a distancia ajudam na defesa.' },
        { label: 'Defesa de Strikes (%)', valueA: 48, valueB: 55, maxVal: 100, format: 'percent', note: 'Belgaroui defende melhor. Kickboxing de GLORY = fundamentos defensivos superiores.' },
        { label: 'Takedowns por 15 Min', valueA: 3.50, valueB: 0.80, maxVal: 5, format: 'decimal', note: 'Abdul-Malik com D-1 wrestling. 3.50 TDs/15min. A arma que define a luta.' },
        { label: 'Defesa de Takedown (%)', valueA: 72, valueB: 50, maxVal: 100, format: 'percent', note: 'Belgaroui com TDD FRACA (50%). Kickboxer puro em transicao. Vulnerabilidade clara.' },
      ],
      tale_of_tape: [
        { label: 'Altura', fighter1: '1,85m (6\'1")', fighter2: '1,98m (6\'6")', note: '13cm de diferenca. ENORME no peso medio.' },
        { label: 'Envergadura', fighter1: '193cm (76")', fighter2: '198cm (78")', note: 'Belgaroui com 2 polegadas a mais de reach.' },
        { label: 'Idade', fighter1: '28 anos', fighter2: '33 anos', note: 'Abdul-Malik 5 anos mais jovem.' },
        { label: 'Background', fighter1: 'D-1 Wrestling (Maryland, HW)', fighter2: '27-7 GLORY Kickboxing, 3x title challenger' },
        { label: 'Academia', fighter1: 'Xtreme Couture, Eric Nicksick', fighter2: 'Pereira Camp, treina diariamente com Alex Pereira' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Wrestling', valueA: 85, valueB: 40, labelA: 'Excelente', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'D-1 em Maryland (HW), 3x State Placer, campeao 2016, 2x Super 32 placer. Xtreme Couture. Belgaroui transicionou de kickboxing puro. O gap de wrestling e a assimetria que define tudo.' },
        { label: 'Kickboxing Tecnico', valueA: 60, valueB: 90, labelA: 'Bom', labelB: 'Excelente', advantage: 'fighter2', advantage_note: '27-7 no GLORY. Venceu Pereira. 3x title challenger. Treina com Pereira diariamente. O kickboxing de Belgaroui e nivel MUNDIAL, nao nivel MMA. Abdul-Malik tem poder mas nao tem a tecnica de striking.' },
        { label: 'Poder de Nocaute', valueA: 80, valueB: 78, labelA: 'Muito Bom', labelB: 'Muito Bom', advantage: 'even', advantage_note: 'Ambos batem pesado. Abdul-Malik: 7 KO/TKO em 9 vitorias. Belgaroui: 9 de 11 vitorias por stoppage. O poder e similar, mas a entrega e diferente: Abdul-Malik com GnP, Belgaroui com combinacoes em pe.' },
        { label: 'Defesa de Takedown', valueA: 72, valueB: 50, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Belgaroui com 50% TDD. Kickboxer em transicao. Se Abdul-Malik fechar distancia, a probabilidade de takedown e alta. A TDD fraca e a vulnerabilidade mais clara.' },
        { label: 'Vantagem de Tamanho', valueA: 40, valueB: 85, labelA: 'Medio', labelB: 'Excelente', advantage: 'fighter2', advantage_note: '13cm de diferenca. No pe, Belgaroui controla a distancia com jabs de longe. Abdul-Malik precisa fechar 13cm de gap antes de tentar qualquer coisa. O tamanho e a linha de defesa natural de Belgaroui.' },
        { label: 'Adaptabilidade MMA', valueA: 72, valueB: 55, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Abdul-Malik tem base de wrestling que traduz bem pro MMA. Belgaroui ainda em transicao do kickboxing puro. A adaptabilidade de Abdul-Malik ao MMA e mais madura, mesmo com menos experiencia profissional.' },
      ],
      insight: 'Pick\'em puro. Se a luta ficar em pe, Belgaroui domina com kickboxing de GLORY + 13cm de vantagem. Se Abdul-Malik fechar distancia e derrubar, o D-1 wrestling domina contra TDD de 50%. A luta e decidida pela gestao de distancia nos primeiros 2 minutos.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Abdul-Malik',
        ko_tko: { count: 7, percent: 78 },
        submission: { count: 2, percent: 22 },
        decision: { count: 0, percent: 0 },
        total_wins: 9,
      },
      fighter2: {
        nome: 'Belgaroui',
        ko_tko: { count: 9, percent: 82 },
        submission: { count: 0, percent: 0 },
        decision: { count: 2, percent: 18 },
        total_wins: 11,
      },
      insight: 'Ambos sao finalizadores brutais. Abdul-Malik: 100% stoppage (78% KO, 22% sub). Belgaroui: 83% KO. ZERO decisoes de Abdul-Malik em 9 vitorias. Essa luta provavelmente NAO vai aos juizes. Alguem vai cair.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1 (0-2 min)',
          danger_level: 8,
          danger_label: 'EQUILIBRADO',
          color: 'gold',
          title: 'A Distancia Decide',
          description: 'Os primeiros 2 minutos definem tudo. Se Abdul-Malik fechar os 13cm de gap e tentar takedown, a luta vai pro chao onde ele domina (TDD de 50% de Belgaroui). Se Belgaroui manter distancia com jabs e front kicks de suas pernas longas, o kickboxing de GLORY e demais. A gestao de distancia e a unica coisa que importa.',
        },
        {
          rounds: 'R1 (2-5 min) e R2',
          danger_level: 6,
          danger_label: 'VANTAGEM ABDUL-MALIK',
          color: 'red',
          title: 'Se Derrubar, Acabou',
          description: 'Se Abdul-Malik conseguir o takedown, o R1 tardio e R2 sao territorio dele. 7 de 9 vitorias no R1. D-1 wrestling contra kickboxer em transicao no chao. O ground and pound e devastador. Se esta no chao, Belgaroui esta em perigo extremo.',
        },
        {
          rounds: 'R3',
          danger_level: 5,
          danger_label: 'VANTAGEM BELGAROUI',
          color: 'green',
          title: 'Se Chegar Aqui, Belgaroui Sobreviveu',
          description: 'Se a luta chegar ao R3, significa que Belgaroui manteve distancia e sobreviveu ao wrestling. No R3, o cardio de um cara de 6\'6" que treina em altitude com Pereira vs um wrestler que gasta energia tentando fechar distancia pode favorecer Belgaroui. Mas com ambos tendo 80%+ stoppage rate, R3 e improvavel.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'Target', title: 'D-1 Wrestling vs TDD 50%', fighter: 'Abdul-Malik', risk_level: 'ENORME POSITIVO', risk_color: 'green', description: '3x State Placer, campeao 2016, D-1 Maryland (HW). Contra TDD de 50% de um kickboxer em transicao. Se fechar distancia, o takedown e praticamente garantido. A assimetria critica da luta.' },
        { icon: 'Zap', title: '27-7 GLORY + Venceu Pereira', fighter: 'Belgaroui', risk_level: 'ENORME POSITIVO', risk_color: 'green', description: 'Kickboxing de nivel mundial. Venceu Pereira no GLORY 40. 3x title challenger. Com 6\'6", a distancia e a linha de defesa. Se ficar em pe, o striking e demais pra Abdul-Malik.' },
        { icon: 'Shield', title: '13cm de Diferenca de Altura', fighter: 'Belgaroui', risk_level: 'POSITIVO', risk_color: 'green', description: '1,98m vs 1,85m. No peso medio, 13cm e ENORME. Jabs de longe, front kicks, angulos que Abdul-Malik simplesmente nao alcanca sem fechar distancia. A geometria favorece Belgaroui em pe.' },
        { icon: 'Brain', title: 'Mentalidade "Recreativa" + Obcecada', fighter: 'Abdul-Malik', risk_level: 'POSITIVO', risk_color: 'green', description: '"Mentalidade recreativa, acoes de obcecado." Leveza mental + preparacao obsessiva. Pode ser a combinacao perfeita pra nao sentir pressao e executar o game plan com frieza.' },
        { icon: 'TrendingUp', title: 'Pereira Como Sparring Partner', fighter: 'Belgaroui', risk_level: 'POSITIVO', risk_color: 'green', description: 'Treina com Pereira diariamente. Corner no UFC 320. "A maior licao e mentalidade." Sparring partner de striking e uma vantagem absurda pra preparacao.' },
        { icon: 'AlertTriangle', title: 'Grappling de Belgaroui: A Vulnerabilidade', fighter: 'Belgaroui', risk_level: 'RISCO ALTO', risk_color: 'red', description: 'Transicao recente de kickboxing puro. TDD de 50%. Contra D-1 wrestler com 3.50 TDs/15min. Se for derrubado, o chao e territorio completamente desconhecido contra um wrestler de elite.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Abdul-Malik',
        total_probability: 52,
        scenarios: [
          { name: 'Takedown e GnP R1', probability: 28, method: 'TKO R1 (GnP)', description: 'Abdul-Malik fecha distancia, usa wrestling D-1, derruba Belgaroui (TDD 50%). Ground and pound contra kickboxer no chao. 7 de 9 vitorias no R1. Cenario mais provavel de vitoria.' },
          { name: 'KO em Troca de Distancia', probability: 14, method: 'KO R1-R2', description: 'Abdul-Malik fecha distancia e conecta power shot antes do takedown. Belgaroui com 33 anos pode nao ter o mesmo queixo do GLORY. Se Abdul-Malik sobreviver ao jab e entrar na pocket, o poder e real.' },
          { name: 'Submissao Apos Takedown', probability: 10, method: 'Submissao R1-R2', description: 'Abdul-Malik derruba e pega submissao (2 das 9 vitorias por sub). Belgaroui sem experiencia de grappling defensivo significativo.' },
        ],
      },
      fighter2: {
        nome: 'Belgaroui',
        total_probability: 46,
        scenarios: [
          { name: 'Masterclass de Distancia', probability: 22, method: 'Decisao Unanime ou TKO R2-R3', description: 'Belgaroui usa 13cm de vantagem pra manter distancia com jabs e front kicks. Pica Abdul-Malik de longe sem deixar ele fechar. Volume constante leva a decisao ou TKO tardio por acumulo.' },
          { name: 'KO de Counter no Avanco', probability: 15, method: 'KO R1-R2', description: 'Abdul-Malik avanca pra fechar distancia e Belgaroui acerta counter preciso de GLORY. Knee, uppercut, ou jab reto no avanco. O timing de GLORY e letal contra avancos retos.' },
          { name: 'Sprawl and Brawl', probability: 9, method: 'TKO R2-R3', description: 'Belgaroui defende o takedown (dificil com 50% TDD) e castiga Abdul-Malik em pe. Acumulo de dano. Abdul-Malik empatou com Brundage quando nao conseguiu o stoppage.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Sedriques Abdul-Malik',
      winner_side: 'fighter1',
      predicted_method: 'TKO R1-R2',
      confidence_score: 5,
      confidence_label: 'MEDIA',
      explanation: 'A luta mais apertada e mais dificil de prever do card. Pick\'em REAL. A linha (-118 a -130 Abdul-Malik, -102 a +110 Belgaroui) reflete isso. A razao de escolher Abdul-Malik e a assimetria de wrestling: D-1 vs TDD de 50%. O wrestling traduz melhor pro MMA do que kickboxing puro, historicamente. MAS, Belgaroui tem 6\'6" e kickboxing de GLORY (27-7, venceu Pereira). Se manter distancia, domina. Os experts estao divididos (MMA Mania vs SportsbettingDime). Confianca MEDIA porque qualquer um pode ganhar. O mercado de metodo de vitoria e mais interessante que moneyline aqui: Abdul-Malik por TKO/KO se conseguir fechar distancia, Belgaroui por decisao ou KO se manter distancia.',
      x_factor: {
        title: 'A Gestao de Distancia nos Primeiros 2 Minutos',
        description: 'Tudo depende dos primeiros 2 minutos. Se Abdul-Malik fecha os 13cm de gap e consegue clinch ou takedown, domina. Se Belgaroui estabelece jab e front kick pra manter Abdul-Malik longe, o GLORY kickboxing e demais. A luta inteira sera decidida pela distancia.',
      },
      upset_alert: {
        title: 'Qualquer Resultado E Possivel',
        description: 'Isso nao e upset. E pick\'em. Ambos tem 80%+ stoppage rate. Ambos podem ganhar convincentemente. A linha e apertada porque a luta e genuinamente 50/50. O mercado esta certo dessa vez.',
      },
      probabilities: {
        fighter1: { nome: 'Abdul-Malik', percent: 52 },
        fighter2: { nome: 'Belgaroui', percent: 46 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Belgaroui ML (+100 a +110)', reasoning: 'Em pick\'em, o underdog tecnico (kickboxer GLORY, 6\'6", treina com Pereira) tem leve valor. Se voce acha que Belgaroui mantem distancia, +100 a +110 e basicamente moeda ao ar com leve valor.' },
        method: { pick: 'Abdul-Malik por TKO/KO', reasoning: 'O mercado de metodo e melhor que ML aqui. Se Abdul-Malik fechar distancia, TKO/KO via GnP e o cenario. 7 de 9 vitorias no R1 por stoppage.' },
        over_under: { pick: 'Under 1.5 Rounds (-110)', rounds: 1.5, reasoning: 'Ambos com 80%+ stoppage rate. 0 decisoes de Abdul-Malik em 9 vitorias. 83% KO de Belgaroui. Essa luta provavelmente NAO vai aos juizes.' },
        best_value: 'Under 1.5 Rounds e a aposta mais logica: ambos finalizam cedo e nenhum dos dois e lutador de decisao. O ML e moeda ao ar em pick\'em. Se quer tomar um lado, Belgaroui a +100/+110 tem leve valor como o underdog com credenciais de GLORY e tamanho absurdo.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'A Distancia nos Primeiros 60 Segundos', icon: 'Target', description: 'Se Abdul-Malik fechar distancia e tocar em Belgaroui nos primeiros 60 segundos, o wrestling vai funcionar. Se Belgaroui mantiver Abdul-Malik a distancia de jab com os bracos longos, o kickboxing domina. Os primeiros 60 segundos contam a historia inteira.' },
        { num: 2, title: 'Front Kicks e Teeps de Belgaroui', icon: 'Shield', description: 'Belgaroui tem pernas longas. Front kicks e teeps sao a arma perfeita pra manter wrestlers longe. Se ele estiver usando essas armas desde o inicio, o game plan e claro. Se nao, pode estar congelando no octogono.' },
        { num: 3, title: 'Abdul-Malik Avanca Reto ou Angulado?', icon: 'Brain', description: 'Se Abdul-Malik avancar em linha reta, Belgaroui vai contra-atacar com timing de GLORY. Se Abdul-Malik avancar angulado, cortando cage, o takedown fica mais facil. A estrategia de avanco e crucial.' },
        { num: 4, title: 'A Primeira Tentativa de Takedown', icon: 'Zap', description: 'O momento mais importante da luta. Se Abdul-Malik derrubar, provavelmente acaba. Se Belgaroui defender (50% TDD), Abdul-Malik pode ficar exposto em pe. A primeira tentativa define tudo.' },
        { num: 5, title: 'Pereira no Corner?', icon: 'TrendingUp', description: 'Se Pereira estiver no corner de Belgaroui, a presenca e o aconselhamento entre rounds podem ser fatores. Pereira ja fez a transicao kickboxing-MMA e pode dar dicas especificas sobre wrestling defense.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'PICK\'EM', content: 'ABDUL-MALIK vs BELGAROUI\nPOS WEIGH-INS\n\nA linha mais APERTADA do card.\n\nAbdul-Malik: -118 a -130\nBelgaroui: -102 a +110\n\nD-1 Wrestling vs 27-7 GLORY\n9 vitorias TODAS stoppage\nvs 6\'6" + treina com PEREIRA\n\nExperts DIVIDIDOS.', color: 'gold' },
        { slide_number: 2, title: 'A ASSIMETRIA', content: 'ABDUL-MALIK:\nD-1 Maryland (HW)\n3x State Placer, campeao 2016\n3.50 TDs/15min\n9 vitorias, TODAS stoppage\n\nBELGAROUI:\n27-7 GLORY, venceu PEREIRA\n6\'6" (13cm mais alto)\nTDD: 50% (vulneravel)\nTreina com Pereira diario', color: 'red' },
        { slide_number: 3, title: 'PREVISAO', content: 'ABDUL-MALIK TKO R1-R2\nConfianca: MEDIA (5/10)\n52% Abdul-Malik / 46% Belgaroui\n\nPick\'em real. Moeda ao ar.\nUnder 1.5: -110 (melhor aposta)\nBelgaroui +100: leve valor\n\nA distancia decide TUDO.', color: 'blue' },
      ],
      twitter: [
        { num: '1/3', text: 'POS WEIGH-INS: Abdul-Malik vs Belgaroui. A linha MAIS APERTADA do card. D-1 Wrestling vs 27-7 GLORY Kickboxing. 9 vitorias TODAS stoppage vs 6\'6" que treina com Pereira. Pick\'em puro.' },
        { num: '2/3', text: 'Abdul-Malik: 3.50 TDs/15min, D-1 Maryland. Belgaroui: 50% TDD, mas 6\'6" com kickboxing de nivel MUNDIAL (venceu Pereira no GLORY 40). Se fechar distancia, wrestling domina. Se nao, GLORY e demais. Experts divididos.' },
        { num: '3/3', text: 'Pick: Abdul-Malik TKO R1-R2, confianca MEDIA. Melhor aposta: Under 1.5 -110 (ambos 80%+ stoppage). Belgaroui +100 como leve valor. A distancia nos primeiros 60 seg decide tudo.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: 'D-1 Wrestling vs 27-7 GLORY Kickboxing. Um tem 6\'6" e treina com Pereira. O outro tem 9 vitorias, TODAS stoppage. A linha e pick\'em.' },
        { time: '10-30s', title: 'Abdul-Malik', text: 'D-1 Maryland, campeao estadual, 3.50 TDs. Xtreme Couture com Nicksick. 9 vitorias, TODAS stoppage, 7 no R1. "Mentalidade recreativa, acoes de obcecado."' },
        { time: '30-50s', title: 'Belgaroui', text: '27-7 GLORY, venceu Pereira. 6\'6". Treina com Pereira diariamente. Mas TDD de 50%. O grappling e a vulnerabilidade. Se ficar em pe, domina. Se cair, e problema.' },
        { time: '50-60s', title: 'Previsao', text: 'Abdul-Malik TKO R1-R2. Confianca MEDIA. Under 1.5 -110 e a melhor aposta. Pick\'em real. Distancia decide.' },
        { time: '60-70s', title: 'CTA', text: 'Wrestling ou kickboxing? Comenta e segue.' },
      ],
      tiktok: [
        { hook: 'D-1 Wrestling vs o cara que VENCEU Pereira no GLORY.', body: 'Abdul-Malik: 9 vitorias, TODAS stoppage, 7 no R1. D-1 wrestler. Contra Belgaroui: 6\'6", 27-7 GLORY, treina com Pereira diariamente. TDD de 50%. A luta mais imprevisivel do card. Se derrubar, wrestling domina. Se ficar em pe, GLORY e demais. Pick\'em PURO.', cta: 'Wrestling ou kickboxing? Comenta!' },
      ],
      headlines: [
        'D-1 Wrestling vs GLORY Kickboxing: O Pick\'em Mais Puro do Card',
        '9 Vitorias, TODAS Stoppage vs 27-7 GLORY e 6\'6" de Altura',
        'Belgaroui Treina Com Pereira Diariamente: A Conexao Que Pode Decidir',
        'Abdul-Malik: Mentalidade Recreativa, Acoes de Obcecado',
      ],
      podcast: [
        {
          timestamp: '0:00-5:00',
          title: 'O Pick\'em Mais Puro do Card',
          talking_points: [
            'Abdul-Malik: D-1 Maryland, 3.50 TDs, 9 vitorias TODAS stoppage, 7 no R1. Xtreme Couture com Nicksick.',
            'Belgaroui: 27-7 GLORY, venceu Pereira, 6\'6", treina com Pereira diario. Mas TDD de 50%.',
            'Experts divididos: MMA Mania = Abdul-Malik. SportsbettingDime = Belgaroui.',
            'Under 1.5 rounds -110: melhor aposta. Ambos 80%+ stoppage rate.',
            'A distancia nos primeiros 60 segundos decide TUDO.',
          ],
          discussion_questions: [
            'Wrestling traduz melhor pro MMA do que kickboxing? Ou o tamanho de Belgaroui muda essa regra?',
            'Ter Pereira como sparring partner e vantagem real ou marketing?',
          ],
        },
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '-118 a -130',
        fighter2_odds: '-102 a +110',
        fighter1_name: 'Sedriques Abdul-Malik',
        fighter2_name: 'Aziz Belgaroui',
        source: 'Range de DraftKings, FanDuel e BetMGM (marco 2026)',
      },
      edges: [
        { icon: 'Target', titulo: 'D-1 Wrestling vs TDD 50%', stat_headline: 'ABDUL-MALIK: 3.50 TDS/15MIN, D-1 MARYLAND. BELGAROUI: 50% TDD.', contexto: 'A assimetria critica. D-1 wrestler com 3.50 TDs contra kickboxer em transicao com 50% TDD. Se fechar distancia, takedown e praticamente garantido.', implicacao_aposta: 'Favorece Abdul-Malik por TKO/KO (GnP). O wrestling e a arma que Belgaroui nao tem resposta.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Zap', titulo: '27-7 GLORY + 6\'6" de Altura', stat_headline: 'BELGAROUI: 27-7 GLORY, VENCEU PEREIRA, 13CM MAIS ALTO.', contexto: 'Kickboxing de nivel mundial. 13cm de vantagem de altura. Se manter distancia, o striking e demais. Treina com Pereira diariamente.', implicacao_aposta: 'Favorece Belgaroui se ficar em pe. ML a +100/+110 tem leve valor como underdog com credenciais de elite.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Activity', titulo: 'Ambos 80%+ Stoppage Rate', stat_headline: 'ABDUL-MALIK: 100% STOPPAGE (9/9). BELGAROUI: 83% KO/TKO.', contexto: 'Nenhum dos dois e lutador de decisao. Abdul-Malik tem ZERO decisoes em 9 vitorias. Alguem vai cair.', implicacao_aposta: 'Under 1.5 rounds -110 e a aposta mais logica do matchup.', edge_level: 'forte', fighter_side: 'neutral' },
      ],
      value_picks: [
        { tipo: 'Over/Under', pick: 'Under 1.5 Rounds', odds: '-110', confianca: 'alta', raciocinio: 'Melhor aposta do matchup. Ambos 80%+ stoppage. Zero decisoes de Abdul-Malik. Essa luta acaba rapido.' },
        { tipo: 'Moneyline', pick: 'Belgaroui ML', odds: '+100 a +110', confianca: 'baixa', edge_vs_mercado: 'Em pick\'em, o underdog com 27-7 GLORY, 6\'6", e que treina com Pereira tem leve valor. Se manter distancia, domina. Aposta de convicao.', raciocinio: 'Moeda ao ar com leve inclinacao. So aposte se acredita que Belgaroui mantem distancia. O tamanho e a arma.' },
        { tipo: 'Metodo', pick: 'Abdul-Malik por TKO/KO', odds: '+110', confianca: 'media', raciocinio: 'Se o wrestling funcionar (D-1 vs TDD 50%), TKO/KO via GnP e o cenario. 7 de 9 vitorias no R1.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Fight Goes to Decision (+250)',
        descricao: 'Abdul-Malik tem ZERO decisoes em 9 vitorias. Belgaroui com 83% stoppage. Ambos sao finalizadores. Apostar que essa luta vai aos juizes e ignorar completamente quem sao esses lutadores. Alguem cai.',
      },
      disclaimer: 'Analise pos weigh-ins para fins informativos. Aposte com responsabilidade.',
    },
  },
};

export default function Page() {
  return <FullAnalysisView analise={analise} />;
}
