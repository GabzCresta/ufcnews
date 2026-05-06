import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'yakhyaev-vs-ribeiro',
  evento_id: null,
  slug: 'yakhyaev-vs-ribeiro',
  titulo: 'Yakhyaev vs Ribeiro: O Cacador Invicto vs O Gorila da Amazonia',
  subtitulo: 'O prospect russo-tchetcheno de 25 anos que finaliza em 30 segundos contra o finalizador brasileiro com 2 derrotas consecutivas. Velocidade absurda vs experiencia.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,88m', envergadura: '198cm', idade: 25, academia: 'N/A' },
      fighter2: { altura: '1,91m', envergadura: '206cm', idade: 29, academia: 'Belem do Para' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Submissao R1',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Velocidade de Finalizacao', edge: 'fighter1', impact: 9, description: 'Yakhyaev finalizou Cerqueira em 33 SEGUNDOS por RNC e nocauteou Lorenz em 30 SEGUNDOS no DWCS. O cara nao brinca.' },
      { factor: 'Defesa de TD de Ribeiro', edge: 'fighter1', impact: 9, description: 'Ribeiro defende apenas 18% dos takedowns. DEZOITO POR CENTO. Contra um wrestler como Yakhyaev, isso e praticamente um convite.' },
      { factor: 'Experiencia UFC', edge: 'fighter2', impact: 6, description: 'Ribeiro tem 7 lutas no UFC. Yakhyaev tem 1. A experiencia no octogono conta, especialmente nos nervos do inicio da luta.' },
    ],
    xFactor: {
      title: 'A Defesa de TD de 18% de Ribeiro',
      description: 'Ribeiro defende apenas 18% dos takedowns. E a pior taxa de defesa de TD de todo o card. Contra um wrestler que tenta 14.29 TDs por 15 min, isso e uma sentenca.',
    },
  },
  fighter1_info: {
    nome: 'Abdul-Rakhman Yakhyaev',
    apelido: 'The Hunter',
    record: '8-0-0',
    ranking: 'Sin Ranking',
    ultimasLutas: [
      { result: 'W', opponent: 'Rafael Cerqueira', method: 'Submissao R1 (0:33)', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Alik Lorenz', method: 'KO/TKO R1 (0:30)', event: 'DWCS' },
    ],
  },
  fighter2_info: {
    nome: 'Brendson Ribeiro',
    apelido: 'The Gorilla',
    record: '17-9-0',
    ranking: 'Sin Ranking',
    ultimasLutas: [
      { result: 'L', opponent: 'Oumar Sy', method: 'KO/TKO R1', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Azamat Murzakanov', method: 'KO/TKO R1', event: 'UFC 316' },
      { result: 'W', opponent: 'Diyar Nurgozhay', method: 'Submissao R2 (Kimura)', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan',
  evento_data: '4 de Abril, 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Peso Meio-Pesado (205 lbs)',
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
      evento_data: '4 de Abril, 2026',
      evento_local: 'UFC Apex, Las Vegas',
      categoria_peso: 'Peso Meio-Pesado (205 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'O Cacador vs O Gorila',
      tagline_sub: 'Prospect Invicto de 25 anos que finaliza em 30 segundos contra o finalizador brasileiro com 2 KOs sofridos seguidos.',
      fighter1: {
        nome_completo: 'Abdul-Rakhman "The Hunter" Yakhyaev',
        apelido: 'The Hunter',
        sobrenome: 'Yakhyaev',
        record: '8-0-0',
        ranking: 'Sin Ranking',
        info_extra: 'Russia | 25 anos | Ares FC LHW Champion',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Brendson "The Gorilla" Ribeiro',
        apelido: 'The Gorilla',
        sobrenome: 'Ribeiro',
        record: '17-9-0',
        ranking: 'Sin Ranking',
        info_extra: 'Belem do Para, Brasil | 29 anos',
        imagem_fullbody_url: null,
      },
    },

    narrativa: {
      html_content: `
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">O Cacador de Cinturoes</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/5 via-transparent to-ufc-red/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-ufc-red/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-ufc-red">Abdul-Rakhman Yakhyaev</strong> tem 25 anos e nao sabe o que e perder. 8-0 como profissional. Campeao do Ares FC e do KhanFight no peso meio-pesado. Mestre de Esportes em Sambo de Combate e MMA. No DWCS, nocauteou Alik Lorenz em 30 segundos. No debut UFC, submeteu Rafael Cerqueira com um RNC em 33 segundos. Tempo total dentro do octogono UFC: 33 segundos. Ninguem sabe direito o que esse cara faz porque ele nao da tempo de ver. A unica certeza e: ele chega, derruba e finaliza antes de voce entender o que aconteceu.
              </p>
            </div>
          </div>

          <div class="mt-8 text-center mb-8">
            <p class="font-display text-5xl md:text-6xl bg-gradient-to-b from-ufc-red/40 to-ufc-red/10 bg-clip-text text-transparent leading-none">0:33</p>
            <div class="flex items-center justify-center gap-4 mt-3">
              <div class="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-white/10"></div>
              <p class="text-xs text-white/40">Tempo total no UFC &middot; 1 luta &middot; Sub R1</p>
              <div class="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-white/10"></div>
            </div>
          </div>
        </div>

        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">O Gorila em Crise</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-blue-400">Brendson Ribeiro</strong> e o Gorila da Amazonia. Saiu de Belem do Para, trabalhou como seguranca e no campo com a familia antes de se tornar lutador profissional. Campeao do Shooto Brasil no peso meio-pesado. No UFC, a jornada tem sido montanha-russa: nocauteado por Zhang Mingyang no debut, depois uma vitoria por decisao dividida, uma derrota por decisao majoritaria, uma submissao linda por kimura, e DOIS nocautes sofridos em sequencia (Murzakanov e Sy, ambos no R1). O Gorila e perigoso: 9 KOs e 7 submissoes, 11 finalizacoes no primeiro round. Mas a defesa de takedown de 18% e o queixo que foi testado duas vezes recentemente sao red flags enormes.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Set 2025</p>
                <p class="font-display text-2xl text-white mb-2">SY</p>
                <p class="text-xs text-white/50 leading-relaxed">KO/TKO R1. Oumar Sy parou Ribeiro no primeiro round. 2o nocaute sofrido seguido.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">KO Sofrido</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Jun 2025</p>
                <p class="font-display text-2xl text-white mb-2">MURZAKANOV</p>
                <p class="text-xs text-white/50 leading-relaxed">KO/TKO R1. Ribeiro nocauteado em 3:25 no primeiro round.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">KO Sofrido</div>
              </div>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: 'Sem ranking (8-0)', fighter2: 'Sem ranking (17-9)' },
        { dimensao: 'Sequencia', fighter1: '8-0 Invicto', fighter2: '2 KOs sofridos seguidos' },
        { dimensao: 'Narrativa', fighter1: 'Confirmar o hype com outra vitoria dominante', fighter2: 'Salvar a vaga no UFC com vitoria sobre Invicto' },
        { dimensao: 'Risco', fighter1: 'Primeira derrota de su carrera contra veterano peligroso', fighter2: '3a derrota seguida = provavelmente cortado do UFC' },
        { dimensao: 'Recompensa', fighter1: 'Se consolidar como prospect top do meio-pesado', fighter2: 'Derrotar um Invicto hypado = renovacao de contrato garantida' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'O CACADOR NAO FALHA',
          subtitulo: 'Yakhyaev derruba Ribeiro e finaliza rapidamente, como fez em todas as lutas',
          consequencias: [
            { tag: 'HYPE', texto: 'Yakhyaev se consolida como um dos prospects mais perigosos do meio-pesado' },
            { tag: 'RANKING', texto: 'Ainda nao entra no ranking, pero o UFC vai comecar a dar oponentes maiores' },
            { tag: 'RIBEIRO', texto: '3a derrota seguida. Corte do UFC e provavel.' },
          ],
          proxima_luta: 'Yakhyaev vs um lutador ranqueado #12-15 LHW',
        },
        fighter2_vence: {
          titulo: 'O GORILA DESPERTA',
          subtitulo: 'Ribeiro usa a experiencia pra frustrar o Invicto e consegue a vitoria mais importante de su carrera UFC',
          consequencias: [
            { tag: 'SOBREVIVENCIA', texto: 'Ribeiro salva a vaga no UFC e prova que os 2 KOs foram acidentes de percurso' },
            { tag: 'UPSET', texto: 'Primeiro cara a derrotar Yakhyaev. Muda a narrativa completamente.' },
            { tag: 'YAKHYAEV', texto: 'Primeira derrota expoe possiveis fraquezas do prospect.' },
          ],
          proxima_luta: 'Ribeiro vs um oponente similar na hierarquia LHW',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Abdul-Rakhman Yakhyaev',
        color: 'red',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Rafael Cerqueira', result: 'W', method: 'Submissao R1 (RNC)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Debut UFC. Sub em 33 SEGUNDOS. Takedown, transicao, RNC. Nao deu tempo de nada.' },
          { date: 'Ago 2025', opponent: 'Alik Lorenz', result: 'W', method: 'KO/TKO R1 (0:30)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Malo', note: 'DWCS. Nocaute em 30 segundos. Lorenz nem entendeu o que aconteceu.' },
        ],
        momentum_score: 9,
        momentum_label: 'dominante',
        momentum_trend: 'ascending',
        momentum_note: 'Yakhyaev esta em modo destruicao. Ninguem durou mais de 33 segundos contra ele nas ultimas 2 lutas. O problema e que a amostra e MUITO pequena: apenas 1 luta UFC, contra um oponente de nivel medio. Ninguem sabe o que acontece se a luta chegar no R2. nunca chegou.',
      },
      fighter2: {
        nome: 'Brendson Ribeiro',
        color: 'blue',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Oumar Sy', result: 'L', method: 'KO/TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: '2o KO sofrido seguido. O queixo de Ribeiro esta em questao.' },
          { date: 'Jun 2025', opponent: 'Azamat Murzakanov', result: 'L', method: 'KO/TKO R1', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bueno', note: 'Nocauteado em 3:25. Murzakanov e perigoso, mas Ribeiro foi pego cedo.' },
          { date: 'Mar 2025', opponent: 'Diyar Nurgozhay', result: 'W', method: 'Submissao R2 (Kimura)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Mostrou o jiu-jitsu. Kimura linda no R2.' },
          { date: 'Nov 2024', opponent: 'Caio Machado', result: 'W', method: 'Decision Dividida', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Malo', note: 'Vitoria apertada por split decision.' },
          { date: 'Jun 2024', opponent: 'Magomed Gadzhiyasulov', result: 'L', method: 'Decisao Majoritaria', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Regular', note: 'Derrota por majority decision. Luta apertada.' },
        ],
        momentum_score: 3,
        momentum_label: 'Em Queda',
        momentum_trend: 'descending',
        momentum_note: 'Ribeiro esta em espiral descendente. 2 KOs sofridos seguidos no R1. O queixo esta em duvida. A defesa de takedown de 18% e alarmante contra qualquer wrestler. A los 29 anos, ainda tem tempo pra se recuperar, pero precisa desesperadamente de uma vitoria aqui. Uma 3a derrota seguida pode significar o corte do UFC.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Yakhyaev',
        media_oponentes: 1,
        media_oponentes_label: 'Malo',
        aproveitamento: '8W-0L (100%)',
        contra_top5: '0W-0L',
      },
      fighter2: {
        nome: 'Ribeiro',
        media_oponentes: 2,
        media_oponentes_label: 'Regular',
        aproveitamento: '3W-4L (43%) no UFC',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Os mundos desses dois nunca se cruzaram. Yakhyaev vem do circuito europeu (Ares FC, KhanFight) e Ribeiro do brasileiro (Shooto Brasil). O nivel de oposicao que Yakhyaev enfrentou ate agora e desconhecido, o que torna a analise mais dificil.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Golpes Sig. por Minuto', valueA: 20.95, valueB: 3.06, maxVal: 22, format: 'decimal', note: 'O numero de Yakhyaev e ABSURDO, pero inflado por lutas muito curtas (33 segundos). Nao e um volume sustentavel. Ribeiro tem numero mais realista.' },
        { label: 'Precision de Golpes (%)', valueA: 78, valueB: 42, maxVal: 100, format: 'percent', note: 'Yakhyaev conectou 78% dos strikes na unica luta UFC. Novamente, amostra pequena, pero impressionante.' },
        { label: 'Golpes Absorbidos/Min', valueA: 0.95, valueB: 4.00, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Yakhyaev quase nao leva strikes porque acaba a luta antes. Ribeiro absorve demais.' },
        { label: 'Defensa de Golpes (%)', valueA: 75, valueB: 53, maxVal: 100, format: 'percent', note: 'Yakhyaev defende melhor, pero o contexto (lutas curtissimas) distorce.' },
        { label: 'Takedowns por 15 Min', valueA: 14.29, valueB: 0.90, maxVal: 15, format: 'decimal', note: 'Yakhyaev e ABSURDAMENTE agresivo nos takedowns. 14.29 por 15 min. Ribeiro quase nao busca TDs.' },
        { label: 'Defensa de Takedown (%)', valueA: 100, valueB: 18, maxVal: 100, format: 'percent', note: 'A estatistica que define a luta. Yakhyaev defende 100% e Ribeiro apenas 18%. Isso e uma disparidade colossal.' },
        { label: 'Sumisiones por 15 Min', valueA: 14.3, valueB: 0.6, maxVal: 15, format: 'decimal', note: 'Yakhyaev tenta subs a todo momento (inflado pela luta curta). Ribeiro tem subs en su carrera pero nao busca tanto no UFC.' },
      ],
      tale_of_tape: [
        { label: 'Edad', fighter1: '25 anos', fighter2: '29 anos', note: 'Yakhyaev 4 anos mais novo' },
        { label: 'Altura', fighter1: '1,88m (6\'2")', fighter2: '1,91m (6\'3")', note: 'Ribeiro 1 polegada mais alto' },
        { label: 'Envergadura', fighter1: '198cm (78")', fighter2: '206cm (81")', note: 'Ribeiro com 3 polegadas de vantagem de alcance' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo', note: 'Ambos ortodoxos' },
        { label: 'Estilo Base', fighter1: 'Sambo de Combate', fighter2: 'Striker / Finalizador', note: 'Wrestler vs Striker' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking en Pie', valueA: 60, valueB: 55, labelA: 'Bueno', labelB: 'Bueno', advantage: 'even', advantage_note: 'Ambos tem poder de finalizacao em pe, mas nenhum e um striker tecnico de elite. Yakhyaev mostrou socos pesados no DWCS. Ribeiro tem 9 KOs na carreira.' },
        { label: 'Wrestling Ofensivo', valueA: 90, valueB: 35, labelA: 'Excelente', labelB: 'Malo', advantage: 'fighter1', advantage_note: 'Mestre de Esportes em Sambo de Combate. 14.29 TDs por 15 min. 100% de precisao de TD (amostra pequena). Contra Ribeiro que defende 18% dos TDs, e mismatch puro.' },
        { label: 'Jiu-Jitsu / Sumisiones', valueA: 80, valueB: 65, labelA: 'Muy Bueno', labelB: 'Bueno', advantage: 'fighter1', advantage_note: 'Yakhyaev submeteu Cerqueira com RNC em 33 segundos. Ribeiro tem 7 subs en su carrera (4 guilhotinas), pero en el suelo contra um sambista, esta em desvantagem.' },
        { label: 'Defensa y Durabilidad', valueA: 65, valueB: 40, labelA: 'Bueno', labelB: 'Regular', advantage: 'fighter1', advantage_note: 'Ribeiro foi nocauteado 4 vezes en su carrera, incluindo 2 seguidas recentemente. O queixo e uma preocupacao seria. Yakhyaev nunca foi derrubado ou finalizado.' },
        { label: 'Cardio e Resistencia', valueA: 50, valueB: 55, labelA: 'Regular', labelB: 'Bueno', advantage: 'fighter2', advantage_note: 'NINGUEM sabe o cardio de Yakhyaev. ninguna luta passou do R1. Ribeiro ja foi a decisao varias vezes. Se a luta durar, Ribeiro pode ter vantagem.' },
        { label: 'Experiencia UFC', valueA: 30, valueB: 55, labelA: 'Malo', labelB: 'Bueno', advantage: 'fighter2', advantage_note: 'Ribeiro tem 7 lutas no UFC. Yakhyaev tem 1 (de 33 segundos). A experiencia no octogono e incomparavelmente diferente.' },
      ],
      insight: 'Mismatch no wrestling e o resumo dessa luta. Yakhyaev e um wrestler/sambista de elite que derruba todo mundo. Ribeiro defende 18% dos takedowns. Se Yakhyaev conseguir o clinch (e ele vai conseguir), o takedown e praticamente garantido. en el suelo, o sambo de combate e a ameaca de RNC sao demais pro Ribeiro. A unica chance de Ribeiro e pegar Yakhyaev De pie com algo grande nos primeiros segundos, antes do clinch.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Yakhyaev',
        ko_tko: { count: 4, percent: 50 },
        submission: { count: 3, percent: 38 },
        decision: { count: 1, percent: 13 },
        total_wins: 8,
      },
      fighter2: {
        nome: 'Ribeiro',
        ko_tko: { count: 9, percent: 53 },
        submission: { count: 7, percent: 41 },
        decision: { count: 1, percent: 6 },
        total_wins: 17,
      },
      insight: 'Ambos sao finalizadores natos. Yakhyaev: 88% de finalizacao (50% KO + 38% sub). Ribeiro: 94% de finalizacao (53% KO + 41% sub). Ambos tem apenas 1 decisao en su carrera. Essa luta provavelmente NAO vai pros cartoes. Alguem vai ser finalizado. A questao e quem.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1 (0-2min)',
          danger_level: 9,
          danger_label: 'VANTAGEM YAKHYAEV',
          color: 'red',
          title: 'Blitz do Cacador',
          description: 'Yakhyaev vai buscar o takedown nos primeiros 30 segundos, como fez em TODAS as lutas recentes. Com Ribeiro defendendo apenas 18% dos TDs, o takedown e quase certo. Se levar al suelo, a submissao pode vir em menos de 1 minuto. Ribeiro precisa sobreviver os primeiros 2 minutos a todo custo.',
        },
        {
          rounds: 'R1 (2-5min)',
          danger_level: 6,
          danger_label: 'EQUILIBRADO',
          color: 'gold',
          title: 'Se Ribeiro Sobreviver',
          description: 'Se Ribeiro defender o primeiro takedown (improvavel pero possivel), a luta pode se equilibrar. De pie, ambos tem poder de nocaute. Ribeiro tem vantagem de alcance (81" vs 78"). Os 9 KOs de Ribeiro nao sao ficticao.',
        },
        {
          rounds: 'R2-R3',
          danger_level: 4,
          danger_label: 'TERRITORIO DESCONHECIDO',
          color: 'gold',
          title: 'Ninguem Sabe',
          description: 'Yakhyaev nunca chegou ao R2 como profissional. Zero lutas alem do primeiro round. Se Ribeiro sobreviver e a luta chegar aqui, Yakhyaev estara em territorio completamente desconhecido. O cardio e a compostura sao incognitas absolutas.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'AlertTriangle', title: 'Defesa de TD de 18%', fighter: 'Ribeiro', risk_level: 'RISCO CRITICO', risk_color: 'red', description: 'Ribeiro defende apenas 18% dos takedowns. E a pior taxa de defesa de TD de todo o card. Contra um sambista como Yakhyaev, isso e praticamente um convite pro chao.' },
        { icon: 'AlertTriangle', title: '2 KOs Sofridos Seguidos', fighter: 'Ribeiro', risk_level: 'RIESGO ALTO', risk_color: 'red', description: 'Ribeiro foi nocauteado no R1 em 2 lutas seguidas (Murzakanov e Sy). O queixo esta em questao. Apos sofrer KOs consecutivos, a durabilidade diminui.' },
        { icon: 'Zap', title: 'Velocidade de Finalizacao', fighter: 'Yakhyaev', risk_level: 'POSITIVO', risk_color: 'green', description: '30 segundos (KO) e 33 segundos (sub) nas ultimas 2 lutas. Yakhyaev nao brinca. Chega, derruba e finaliza.' },
        { icon: 'Activity', title: 'Cardio Desconhecido', fighter: 'Yakhyaev', risk_level: 'RIESGO MEDIO', risk_color: 'yellow', description: 'Yakhyaev nunca passou do R1. Se Ribeiro sobreviver os primeiros minutos, ninguem sabe como Yakhyaev lida com fadiga. E a maior incognita.' },
        { icon: 'Shield', title: 'Alcance de 81"', fighter: 'Ribeiro', risk_level: 'POSITIVO', risk_color: 'green', description: 'Ribeiro tem 3 polegadas de alcance a mais. Se conseguir manter distancia e usar o jab, pode frustrar as entradas de Yakhyaev.' },
        { icon: 'Brain', title: 'Motivacao de Sobrevivencia', fighter: 'Ribeiro', risk_level: 'POSITIVO', risk_color: 'green', description: '3a derrota seguida provavelmente significa corte do UFC. Ribeiro esta lutando pela carreira. Isso pode gerar a melhor performance dele.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Yakhyaev',
        total_probability: 72,
        scenarios: [
          { name: 'Blitz e Submissao', probability: 35, method: 'Submissao R1', description: 'Yakhyaev fecha a distancia em segundos, encaixa o takedown (Ribeiro defende so 18%), transita pro back take e encaixa o RNC. Acabou em menos de 2 minutos, como no debut.' },
          { name: 'Takedown e Ground and Pound', probability: 22, method: 'TKO R1', description: 'Yakhyaev derruba Ribeiro e, ao inves de buscar sub, descarrega ground and pound. Ribeiro, com o queixo fragilizado por 2 KOs recentes, nao resiste.' },
          { name: 'Dominio por 3 Rounds', probability: 15, method: 'Decision Unanime', description: 'Improvavel pero possivel: Yakhyaev derruba repetidamente, controla en el suelo, pero nao consegue a finalizacao. Vence cada round por controle total e acumulo de ground and pound.' },
        ],
      },
      fighter2: {
        nome: 'Ribeiro',
        total_probability: 26,
        scenarios: [
          { name: 'O Golpe que Ninguem Esperou', probability: 12, method: 'KO/TKO R1', description: 'Ribeiro conecta algo grande antes de Yakhyaev fechar a distancia. Um overhand ou uppercut no momento da entrada de Yakhyaev. Os 9 KOs de Ribeiro sao reais. Se conectar limpo, pode acabar.' },
          { name: 'Guilhotina na Entrada', probability: 8, method: 'Submissao R1', description: 'Yakhyaev entra pro takedown baixo e Ribeiro encaixa a guilhotina. Ribeiro tem 4 guilhotinas en su carrera. Se pegar no momento certo da entrada de TD, pode virar o jogo.' },
          { name: 'Cardio Vence Hype', probability: 6, method: 'TKO R2-R3', description: 'Ribeiro sobrevive o R1, Yakhyaev nunca esteve no R2 e comeca a cansar. Ribeiro usa a experiencia e o cardio pra acumular dano e parar a luta. Improvavel, pero possivel.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Abdul-Rakhman Yakhyaev',
      winner_side: 'fighter1',
      predicted_method: 'Submissao R1',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation: 'Os numeros contam a historia toda: Yakhyaev tem 14.29 TDs por 15 min, Ribeiro defende apenas 18%. Yakhyaev e Mestre de Esportes em Sambo, Ribeiro tem 2 KOs sofridos seguidos. O mismatch no grappling e enorme. Yakhyaev deve fechar a distancia rapido, encaixar o takedown e finalizar. A unica chance real de Ribeiro e conectar algo grande antes do clinch, ou pegar uma guilhotina na entrada. Pero as probabilidades estao fortemente contra o Gorila aqui.',
      x_factor: {
        title: 'Yakhyaev nunca Chegou ao R2',
        description: 'Em 8 lutas profissionais, Yakhyaev nunca passou do primeiro round. Isso e impressionante e preocupante ao mesmo tempo. Se Ribeiro sobreviver, Yakhyaev estara em territorio completamente desconhecido.',
      },
      upset_alert: {
        title: 'Guilhotina de Ribeiro',
        description: 'Ribeiro tem 4 guilhotinas en su carrera. Se Yakhyaev for agresivo demais na entrada do takedown e abaixar a cabeca, pode ser pego. E o cenario de upset mais realista.',
      },
      probabilities: {
        fighter1: { nome: 'Yakhyaev', percent: 72 },
        fighter2: { nome: 'Ribeiro', percent: 26 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Yakhyaev', reasoning: 'Favorito claro. O mismatch no wrestling e inegavel. A defesa de TD de 18% e fatal.' },
        method: { pick: 'Yakhyaev por Submissao R1', reasoning: 'Sub em 33 seg no debut. Ribeiro defende 18% dos TDs. O cenario mais provavel e takedown + sub rapida.' },
        over_under: { pick: 'Under 1.5 Rounds', rounds: 1.5, reasoning: 'Ambos finalizam no R1 historicamente. Yakhyaev nunca foi pro R2. Ribeiro foi nocauteado no R1 nas ultimas 2. Under e quase certo.' },
        best_value: 'Under 1.5 rounds e a aposta mais segura. Ambos os lutadores historicamente nao vao a distancia.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Os Primeiros 30 Segundos', icon: 'Zap', description: 'Yakhyaev vai fechar a distancia imediatamente. Se encaixar o takedown nos primeiros 30 segundos, a luta pode acabar em menos de 1 minuto. Se Ribeiro manter distancia, e sinal de problema pro invicto.' },
        { num: 2, title: 'A Guilhotina na Entrada', icon: 'Crosshair', description: 'Observe se Ribeiro esta posicionado pra pegar a guilhotina quando Yakhyaev entrar pro takedown. Ribeiro tem 4 guilhotinas en su carrera. Se Yakhyaev abaixar muito a cabeca, pode ser pego.' },
        { num: 3, title: 'O Queixo de Ribeiro', icon: 'AlertTriangle', description: 'Ribeiro foi nocauteado 2 vezes seguidas no R1. Se ele absorver um strike limpo de Yakhyaev e cambalar, e game over. Observe se ele esta evitando trocas e priorizando defesa.' },
        { num: 4, title: 'Se Chegar no R2', icon: 'Activity', description: 'Se a luta chegar no R2, TUDO muda. Yakhyaev nunca esteve la. Observe a linguagem corporal dele: cansaco, frustacao, perda de compostura. Qualquer sinal de fadiga abre a porta pro upset.' },
        { num: 5, title: 'A Pressao de Yakhyaev', icon: 'Flame', description: 'Yakhyaev usa pressao pra fechar distancia e clinchar. Se Ribeiro estiver usando o jab e o movement pra manter distancia, esta implementando o game plan. Se Yakhyaev esta colando nele, e questao de tempo.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'YAKHYAEV VS RIBEIRO', content: 'UFC FIGHT NIGHT\nApex, Las Vegas | 4 de Abril\n3 Rounds | Peso Meio-Pesado\n\n8-0 vs 17-9\nO Cacador vs O Gorila\nInvicto de 25 anos vs Veterano de 29\n\n33 segundos. Tempo total do Yakhyaev no UFC.', color: 'gold' },
        { slide_number: 2, title: 'THE HUNTER', content: '8-0 Invicto | 25 anos | Russia\nMestre de Esportes em Sambo\n\nDebut UFC: Sub R1 (0:33)\nDWCS: KO R1 (0:30)\n\n100% TD accuracy\n14.29 TDs por 15 min\n\nEle nao da tempo de nada.', color: 'red' },
        { slide_number: 3, title: 'THE GORILLA', content: '17-9 | 29 anos | Belem, Brasil\nShooto Brasil Campeao\n\n9 KOs + 7 subs en su carrera\n11 finalizacoes no R1\n\nMAS: 18% defesa de TD\nE 2 KOs sofridos seguidos.\n\nLutando pela vaga no UFC.', color: 'blue' },
        { slide_number: 4, title: 'PREVISAO', content: 'YAKHYAEV por Sub R1\n\nConfianca: MEDIA-ALTA\n72% Yakhyaev / 26% Ribeiro\n\n18% TD Def vs 14.29 TDs/15min.\nOs numeros contam a historia.\n\nUnder 1.5 rounds e quase certo.', color: 'red' },
      ],
      twitter: [
        { num: '1/3', text: 'Yakhyaev vs Ribeiro no meio-pesado. O stat que define a luta: Yakhyaev media 14.29 TDs por 15 min. Ribeiro defende 18% dos takedowns. Faca as contas.' },
        { num: '2/3', text: 'Yakhyaev: debut UFC, sub em 33 seg. DWCS, KO em 30 seg. O cara nao sabe o que e o round 2. Ribeiro: 2 KOs sofridos seguidos, lutando pela vaga no UFC.' },
        { num: '3/3', text: 'Pick: Yakhyaev por sub R1. Under 1.5 e a aposta mais segura do card. A unica chance de Ribeiro e uma guilhotina na entrada do takedown. Boa sorte com isso.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: '33 segundos. Esse e o tempo TOTAL que Yakhyaev passou dentro do octogono no UFC. Debut: sub em 33 segundos. E agora enfrenta um cara que defende DEZOITO POR CENTO dos takedowns.' },
        { time: '10-25s', title: 'Ribeiro', text: 'Brendson Ribeiro, o Gorila da Amazonia. 9 KOs, 7 submissoes, 11 finalizacoes no R1. O cara e peligroso. MAS: 2 nocautes sofridos seguidos e a pior defesa de TD do card. 3a derrota = fim no UFC.' },
        { time: '25-40s', title: 'Analise', text: 'Yakhyaev: Mestre de Esportes em Sambo, 14.29 TDs por 15 min, 100% precisao de TD. Ribeiro: 18% TD Def. Os numeros nao mentem. A unica chance de Ribeiro e pegar uma guilhotina ou conectar De pie antes do clinch.' },
        { time: '40-55s', title: 'Pick', text: 'Yakhyaev por submissao R1. Under 1.5 e a aposta mais segura desse card. Comenta se voce acha que o Gorila tem alguma chance contra o Cacador.' },
      ],
      tiktok: [
        { hook: '33 SEGUNDOS. Esse e o tempo TOTAL que esse cara ficou no UFC. E ele submeteu o oponente.', body: 'Yakhyaev. 25 anos. 8-0. Mestre de Sambo. E agora enfrenta Ribeiro, que defende 18% dos takedowns e foi nocauteado 2 vezes seguidas. 18 POR CENTO. Isso e praticamente deitar en el suelo e pedir. Under 1.5 rounds e a aposta mais facil do card.', cta: 'Voce acha que Ribeiro sobrevive o R1? Comenta!' },
      ],
      headlines: [
        'Yakhyaev vs Ribeiro: 33 Segundos No UFC e Agora Enfrenta a Pior Defesa de TD do Card',
        'O Cacador Invicto: Yakhyaev Pode Ser o Proximo Prospect do Meio-Pesado',
        '18% de Defesa de Takedown: Por Que Ribeiro Esta em Serios Problemas',
        'Under 1.5 Rounds: A Aposta Mais Facil do UFC Fight Night',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '-350',
        fighter2_odds: '+270',
        fighter1_name: 'Abdul-Rakhman Yakhyaev',
        fighter2_name: 'Brendson Ribeiro',
        source: 'Estimativa baseada no perfil dos lutadores',
      },
      edges: [
        { icon: 'Target', titulo: 'Mismatch de Wrestling', stat_headline: '14.29 TDS/15MIN VS 18% TD DEF. A MAIOR DISPARIDADE DO CARD.', contexto: 'Yakhyaev e um sambista de elite que busca o takedown obsessivamente. Ribeiro defende apenas 18% dos TDs, a pior taxa entre os lutadores do card principal.', implicacao_aposta: 'Favorece Yakhyaev por finish rapido. Under rounds tem valor real.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'AlertTriangle', titulo: 'Queixo de Ribeiro em Questao', stat_headline: '2 KOS SOFRIDOS NO R1 NAS ULTIMAS 2 LUTAS', contexto: 'Ribeiro foi nocauteado por Murzakanov (R1, 3:25) e Sy (R1, 4:42) em lutas consecutivas. A durabilidade esta comprometida.', implicacao_aposta: 'Favorece Under rounds e finish rapido, independente de quem vencer.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Activity', titulo: 'Cardio Desconhecido de Yakhyaev', stat_headline: 'nunca PASSOU DO R1 EM 8 LUTAS PROFISSIONAIS', contexto: 'Yakhyaev literalmente nunca esteve no R2. Se Ribeiro sobreviver, ninguem sabe o que acontece.', implicacao_aposta: 'Se voce acredita que vai pro R2, Ribeiro tem valor. Prop de R2+ pode ser interessante.', edge_level: 'leve', fighter_side: 'fighter2' },
      ],
      value_picks: [
        { tipo: 'Duracao', pick: 'Under 1.5 Rounds', odds: '-200', confianca: 'alta', raciocinio: 'Ambos finalizadores. Yakhyaev nunca foi pro R2. Ribeiro foi finalizado no R1 nas ultimas 2. Under e praticamente garantido.' },
        { tipo: 'Metodo', pick: 'Yakhyaev por Submissao R1', odds: '+120', confianca: 'media', raciocinio: 'Sub em 33 seg no debut. 18% TD Def de Ribeiro. O cenario mais provavel e takedown + sub rapida.' },
        { tipo: 'Prop', pick: 'Luta nao vai a decisao', odds: '-400', confianca: 'alta', raciocinio: 'Ambos tem 1 decisao cada na carreira (8 e 17 vitorias). Alguem vai ser finalizado.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Ribeiro por Decisao',
        descricao: 'Ribeiro tem apenas 1 decisao em 17 vitorias (6%). E um finalizador nato. Se ele vencer, sera por nocaute ou submissao, nao nos pontos. Apostar em Ribeiro por decisao e jogar dinheiro fora.',
      },
      disclaimer: 'Analisis estadistico con fines informativos. Apuesta con responsabilidad.',
    },
  },
};
