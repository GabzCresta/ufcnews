import { translateAnalysis } from '@/lib/translate-analysis';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'mcmillen-vs-zecchini',
  evento_id: null,
  slug: 'mcmillen-vs-zecchini',
  titulo: 'McMillen vs Zecchini: Tommygun vs Angelo Veneziano',
  subtitulo: 'O invicto de Montana que nao para de atirar contra o italiano radicado nos EUA que busca reabilitacao apos derrota no debut UFC.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,83m', envergadura: '188cm', idade: 28, academia: 'Phoenix, AZ' },
      fighter2: { altura: '1,73m', envergadura: '173cm', idade: 29, academia: 'Jackson Wink MMA' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'TKO R1-R2',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Volume de Strikes', edge: 'fighter1', impact: 9, description: 'McMillen media 7.53 SLpM contra 2.34 de Zecchini. A diferenca e mais de 3x. Em pe, nao tem comparacao.' },
      { factor: 'Tamanho e Alcance', edge: 'fighter1', impact: 8, description: 'McMillen tem 1,83m e 74" de envergadura contra 1,73m e 68" de Zecchini. 6 polegadas de alcance a mais.' },
      { factor: 'Defesa de Zecchini', edge: 'fighter1', impact: 8, description: 'Zecchini absorve 6.75 SLpM e defende apenas 46% dos strikes. No debut UFC, foi nocauteado por Charriere no R1 com chutes.' },
    ],
    xFactor: {
      title: 'A Vantagem de Tamanho de McMillen',
      description: '10cm mais alto e 6 polegadas de envergadura a mais. McMillen parece um meio-medio lutando no peso-pena. O tamanho pode ser dominante.',
    },
  },
  fighter1_info: {
    nome: 'Tommy McMillen',
    apelido: 'Gun',
    record: '9-0-0',
    ranking: 'Sem Ranking',
    ultimasLutas: [
      { result: 'W', opponent: 'David Mgoyan', method: 'Decisao Majoritaria', event: 'DWCS' },
    ],
  },
  fighter2_info: {
    nome: 'Manolo Zecchini',
    apelido: 'Angelo Veneziano',
    record: '11-4-0',
    ranking: 'Sem Ranking',
    ultimasLutas: [
      { result: 'L', opponent: 'Morgan Charriere', method: 'KO/TKO R1 (Chutes)', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan',
  evento_data: '4 de Abril, 2026',
  evento_local: 'UFC Apex, Las Vegas',
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
      evento_nome: 'UFC Fight Night: Moicano vs Duncan',
      evento_data: '4 de Abril, 2026',
      evento_local: 'UFC Apex, Las Vegas',
      categoria_peso: 'Peso Pena (145 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Tommygun vs Angelo Veneziano',
      tagline_sub: 'O invicto de Montana com volume insano contra o italiano que precisa vencer pra sobreviver no UFC. Tamanho vs Coracao.',
      fighter1: {
        nome_completo: 'Tommy "Gun" McMillen',
        apelido: 'Gun',
        sobrenome: 'McMillen',
        record: '9-0-0',
        ranking: 'Sem Ranking',
        info_extra: 'Great Falls, Montana | Phoenix, AZ | 28 anos',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Manolo "Angelo Veneziano" Zecchini',
        apelido: 'Angelo Veneziano',
        sobrenome: 'Zecchini',
        record: '11-4-0',
        ranking: 'Sem Ranking',
        info_extra: 'Veneza, Italia | Jackson Wink MMA | 29 anos',
        imagem_fullbody_url: null,
      },
    },

    narrativa: {
      html_content: `
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">Tommygun de Montana</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/5 via-transparent to-ufc-red/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-ufc-red/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-ufc-red">Tommy McMillen</strong> cresceu em Great Falls, Montana. O pai era lutador profissional local. Tommy lutou no boxe do gym do pai desde os 5 anos e fez wrestling a vida inteira. Foi expulso do ensino medio. Nao foi pra faculdade. Trabalha como recrutador de energia solar em Phoenix, Arizona. No DWCS, venceu David Mgoyan por decisao majoritaria com 113 strikes significativos conectados. Sete tres. O cara nao para de atirar, dai o apelido "Tommygun". Invicto. 9-0. O debut oficial no UFC sera aqui contra Zecchini. O tamanho e absurdo pro peso-pena: 1,83m com 74" de envergadura. Parece um meio-medio que decidiu cortar pra 145.
              </p>
            </div>
          </div>
        </div>

        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">O Anjo de Veneza</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-blue-400">Manolo Zecchini</strong> comecou no karate aos 4 anos porque era uma crianca indisciplinada. Aos 17, saiu de Veneza, Italia, e foi pro Brasil sozinho pra fazer sua primeira luta profissional. Desde entao, viaja entre Americas e Europa treinando. Nos ultimos 8 anos, treina na Jackson Wink MMA em Albuquerque sob Winkeljohn e Jackson. Tem uma academia com o pai e o irmao em Veneza. E o segundo italiano a entrar no roster do UFC. No debut, foi nocauteado por Morgan Charriere no R1 com chutes em Paris. Agora precisa vencer pra se manter no UFC. A historia e bonita: sacrificio, familia, sonho realizado. Mas os numeros sao preocupantes: 21% de precisao de strikes, 6.75 SApM, 0% defesa de TD na unica luta UFC.
              </p>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/8 via-amber-500/4 to-amber-500/8"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div class="relative p-5 text-center">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">O Problema</p>
              <p class="text-sm text-white/60">Zecchini tem coracao e historia. Mas os numeros nao mentem: <strong class="text-amber-400">6 polegadas de alcance a menos</strong> contra um invicto de volume absurdo.</p>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: 'Sem ranking (debut UFC)', fighter2: 'Sem ranking (0-1 UFC)' },
        { dimensao: 'Sequencia', fighter1: '9-0 invicto', fighter2: 'Vem de KO sofrido no debut' },
        { dimensao: 'Narrativa', fighter1: 'Debut UFC dominante, confirmar hype', fighter2: 'Reabilitacao e sobrevivencia no UFC' },
        { dimensao: 'Risco', fighter1: 'Primeira derrota da carreira no debut UFC', fighter2: '2a derrota seguida = provavelmente cortado' },
        { dimensao: 'Recompensa', fighter1: 'Se estabelecer como prospect do peso-pena', fighter2: 'Vitoria sobre invicto = renovacao garantida' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'TOMMYGUN NAO PARA',
          subtitulo: 'McMillen usa o tamanho e o volume pra dominar Zecchini completamente',
          consequencias: [
            { tag: 'DEBUT', texto: 'McMillen faz um debut UFC impressionante e se posiciona como prospect do peso-pena' },
            { tag: 'TAMANHO', texto: 'Confirma que o tamanho absurdo pro peso-pena e uma vantagem real' },
            { tag: 'ZECCHINI', texto: '2 derrotas seguidas no UFC. Provavelmente cortado.' },
          ],
          proxima_luta: 'McMillen vs prospect similar ou veterano do peso-pena',
        },
        fighter2_vence: {
          titulo: 'A REABILITACAO DO ANJO',
          subtitulo: 'Zecchini mostra que o debut foi acidente e derrota o invicto',
          consequencias: [
            { tag: 'SOBREVIVENCIA', texto: 'Zecchini salva a vaga no UFC e prova que merece estar la' },
            { tag: 'UPSET', texto: 'Derrotar um invicto de 9-0 no debut dele seria uma declaracao' },
            { tag: 'MCMILLEN', texto: 'Primeira derrota. O hype diminui, mas nao e o fim do mundo.' },
          ],
          proxima_luta: 'Zecchini vs oponente similar na hierarquia FW',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Tommy McMillen',
        color: 'red',
        recent_fights: [
          { date: 'Set 2025', opponent: 'David Mgoyan', result: 'W', method: 'Decisao Majoritaria', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'DWCS. 113 strikes significativos conectados. Volume absurdo. Venceu por decisao majoritaria e ganhou o contrato UFC.' },
        ],
        momentum_score: 7,
        momentum_label: 'Confiante',
        momentum_trend: 'ascending',
        momentum_note: 'McMillen esta invicto em 9-0 e vem do DWCS com uma performance de volume alto. O tamanho pro peso-pena (1,83m, 74" envergadura) e uma vantagem rara. O debut UFC e o grande teste, mas o hype e justificado pelo volume e pelo invicto.',
      },
      fighter2: {
        nome: 'Manolo Zecchini',
        color: 'blue',
        recent_fights: [
          { date: 'Set 2023', opponent: 'Morgan Charriere', result: 'L', method: 'KO/TKO R1 (Chutes)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Debut UFC em Paris. Nocauteado no R1 por Charriere com chutes. Performance ruim: 21% precisao, 0% TD Def.' },
        ],
        momentum_score: 3,
        momentum_label: 'Em Recuperacao',
        momentum_trend: 'descending',
        momentum_note: 'Zecchini vem de derrota brutal no debut UFC. KO no R1, stats desastrosas. Teve mais de 2 anos de intervalo entre o debut e essa luta. A pausa longa pode ser positiva (tempo pra melhorar) ou negativa (ring rust). Os numeros da unica luta UFC sao preocupantes: 21% de precisao, 6.75 SApM.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'McMillen',
        media_oponentes: 1,
        media_oponentes_label: 'Ruim',
        aproveitamento: '9W-0L (100%)',
        contra_top5: '0W-0L',
      },
      fighter2: {
        nome: 'Zecchini',
        media_oponentes: 2,
        media_oponentes_label: 'Medio',
        aproveitamento: '0W-1L no UFC',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. McMillen vem do circuito regional americano. Zecchini lutou na Europa e Americas. Mundos completamente diferentes.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 7.53, valueB: 2.34, maxVal: 9, format: 'decimal', note: 'McMillen tem mais de 3x o volume de Zecchini. 7.53 SLpM e um dos numeros mais altos do card inteiro.' },
        { label: 'Precisao de Strikes (%)', valueA: 51, valueB: 21, maxVal: 100, format: 'percent', note: 'McMillen conecta 51% dos strikes. Zecchini apenas 21% na unica luta UFC. A precisao de Zecchini e alarmantemente baixa.' },
        { label: 'Strikes Absorvidos/Min', valueA: 5.67, valueB: 6.75, maxVal: 8, format: 'decimal', reverseWinner: true, note: 'Ambos absorvem demais. McMillen 5.67 e Zecchini 6.75. Lutas de volume = mais dano absorvido.' },
        { label: 'Defesa de Strikes (%)', valueA: 55, valueB: 46, maxVal: 100, format: 'percent', note: 'McMillen defende levemente melhor, mas nenhum e elite defensivamente.' },
        { label: 'Defesa de Takedown (%)', valueA: 83, valueB: 0, maxVal: 100, format: 'percent', note: 'McMillen defendeu 83% dos TDs. Zecchini defendeu 0% (0/2) no debut. Preocupante.' },
        { label: 'Takedowns por 15 Min', valueA: 0.0, valueB: 0.0, maxVal: 3, format: 'decimal', note: 'Nenhum dos dois busca takedowns. Ambos preferem lutar em pe. Luta provavelmente fica em pe.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '28 anos', fighter2: '29 anos', note: 'Praticamente a mesma idade' },
        { label: 'Altura', fighter1: '1,83m (6\'0")', fighter2: '1,73m (5\'8")', note: 'McMillen 10cm MAIS ALTO. Enorme pra peso-pena.' },
        { label: 'Envergadura', fighter1: '188cm (74")', fighter2: '173cm (68")', note: 'McMillen com 6 POLEGADAS de vantagem. Mismatch de alcance.' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo', note: 'Ambos ortodoxos' },
        { label: 'Base', fighter1: 'Boxing / Wrestling', fighter2: 'Karate / BJJ (faixa azul)', note: 'McMillen mais convencional, Zecchini mais variado' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking em Pe', valueA: 72, valueB: 50, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'McMillen conecta 7.53 SLpM com 51% de precisao. Zecchini conecta 2.34 com 21%. A diferenca em pe e absurda. O volume e a precisao favorecem McMillen completamente.' },
        { label: 'Defesa', valueA: 55, valueB: 40, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'McMillen defende 55% dos strikes e 83% dos TDs. Zecchini defende 46% dos strikes e 0% dos TDs (amostra pequena). McMillen e mais seguro defensivamente.' },
        { label: 'Grappling', valueA: 50, valueB: 45, labelA: 'Medio', labelB: 'Medio', advantage: 'even', advantage_note: 'Nenhum busca takedowns. Zecchini e faixa azul de BJJ (ha 8 anos no mesmo nivel, segundo ele). McMillen tem wrestling de base. Nenhum se destaca no chao.' },
        { label: 'Cardio e Ritmo', valueA: 65, valueB: 55, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'McMillen manteve 113 strikes em 3 rounds no DWCS. O cara tem gas pra volume alto. Zecchini foi parado no R1, nao sabemos o cardio.' },
        { label: 'Tamanho e Alcance', valueA: 85, valueB: 40, labelA: 'Muito Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'McMillen tem 10cm de altura e 6 polegadas de alcance a mais. No peso-pena, isso e uma vantagem ENORME. Zecchini vai ter que entrar dentro da guarda, o que e perigoso.' },
        { label: 'Experiencia e Variabilidade', valueA: 45, valueB: 55, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Zecchini tem 15 lutas profissionais (11-4) e treina na Jackson Wink sob coaches de elite. McMillen tem 9 lutas contra oposicao regional. Zecchini viu mais variedade.' },
      ],
      insight: 'McMillen tem todas as vantagens fisicas: mais alto, mais alcance, mais volume, mais preciso. Zecchini tem mais experiencia e treina numa academia de elite (Jackson Wink). Mas os numeros sao crueis: McMillen conecta 7.53 SLpM com 51% de precisao. Zecchini conecta 2.34 com 21%. A diferenca de alcance (6 polegadas) torna ainda mais dificil pra Zecchini entrar. A nao ser que Zecchini encontre algo que ninguem encontrou em 9 lutas, McMillen deve dominar.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'McMillen',
        ko_tko: { count: 6, percent: 67 },
        submission: { count: 2, percent: 22 },
        decision: { count: 1, percent: 11 },
        total_wins: 9,
      },
      fighter2: {
        nome: 'Zecchini',
        ko_tko: { count: 4, percent: 36 },
        submission: { count: 4, percent: 36 },
        decision: { count: 3, percent: 27 },
        total_wins: 11,
      },
      insight: 'McMillen e primariamente um finalizador por strikes: 67% por KO/TKO. Zecchini e mais equilibrado: 36% KO, 36% sub, 27% decisao. McMillen busca o finish. Zecchini pode se adaptar. No DWCS, McMillen venceu por decisao (unica da carreira), mostrando que pode ir a distancia quando preciso.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 8,
          danger_label: 'VANTAGEM McMILLEN',
          color: 'red',
          title: 'Volume e Alcance Dominam',
          description: 'McMillen vai usar o jab e o alcance pra manter distancia e conectar com volume. Zecchini precisa entrar na guarda pra ser efetivo, mas com 6 polegadas a menos de alcance, cada entrada e arriscada. Se McMillen machucar Zecchini cedo, pode buscar o finish rapido.',
        },
        {
          rounds: 'R2',
          danger_level: 6,
          danger_label: 'VANTAGEM McMILLEN',
          color: 'red',
          title: 'Acumulo de Dano',
          description: 'Se a luta chegou ao R2, McMillen provavelmente esta dominando nos pontos com volume. Zecchini absorve 6.75 SApM e pode estar acumulando dano. O TKO por acumulo e o cenario mais provavel aqui.',
        },
        {
          rounds: 'R3',
          danger_level: 5,
          danger_label: 'EQUILIBRADO',
          color: 'gold',
          title: 'Gas e Desespero',
          description: 'Se Zecchini sobreviver ate o R3 e a luta estiver apertada, o desespero pode gerar algo inesperado. McMillen absorve 5.67 SApM, nao e impermeavel. Um momento de sorte ou coragem pode mudar tudo.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'Zap', title: '6 Polegadas de Alcance', fighter: 'McMillen', risk_level: 'POSITIVO', risk_color: 'green', description: 'McMillen tem 74" vs 68" de Zecchini. 6 polegadas de alcance no peso-pena e uma vantagem brutal. Zecchini vai ter que entrar dentro da guarda pra qualquer coisa.' },
        { icon: 'Target', title: '7.53 SLpM', fighter: 'McMillen', risk_level: 'POSITIVO', risk_color: 'green', description: 'O maior volume de strikes significativos por minuto do card principal. McMillen e uma metralhadora.' },
        { icon: 'Brain', title: 'Jackson Wink', fighter: 'Zecchini', risk_level: 'POSITIVO', risk_color: 'green', description: 'Zecchini treina na Jackson Wink sob Winkeljohn e Jackson. Os coaches podem ter um game plan pra lidar com o tamanho. A academia e de primeiro nivel.' },
        { icon: 'AlertTriangle', title: '21% de Precisao', fighter: 'Zecchini', risk_level: 'RISCO ALTO', risk_color: 'red', description: 'Na unica luta UFC, Zecchini conectou apenas 21% dos strikes. Contra alguem com 6 polegadas a mais de alcance, pode ser ainda pior.' },
        { icon: 'Shield', title: 'Karateka de Berco', fighter: 'Zecchini', risk_level: 'POSITIVO', risk_color: 'green', description: 'Zecchini comecou karate aos 4 anos. Faixa preta. O estilo unorthodox pode criar angulos que McMillen nao esta acostumado a ver.' },
        { icon: 'Clock', title: 'Layoff de 2+ Anos', fighter: 'Zecchini', risk_level: 'RISCO MEDIO', risk_color: 'yellow', description: 'Zecchini nao luta desde setembro de 2023. Mais de 2 anos parado. Ring rust e uma preocupacao real.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'McMillen',
        total_probability: 68,
        scenarios: [
          { name: 'TKO por Volume', probability: 30, method: 'TKO R1-R2', description: 'McMillen usa o jab e o alcance pra manter Zecchini a distancia e acumula volume com socos e combinacoes. Zecchini absorve demais (6.75 SApM) e eventualmente o arbitro para. O volume de 7.53 SLpM faz diferenca.' },
          { name: 'Decisao por Dominio', probability: 22, method: 'Decisao Unanime', description: 'McMillen controla a distancia por 3 rounds inteiros. O alcance de 6 polegadas e o volume tornam impossivel pra Zecchini competir. Vitoria nos pontos sem drama.' },
          { name: 'KO Limpo', probability: 16, method: 'KO R1', description: 'McMillen conecta algo grande na entrada de Zecchini. Com 6 polegadas a menos de alcance, Zecchini precisa se aproximar, e nesse momento pode ser pego por um uppercut ou overhand.' },
        ],
      },
      fighter2: {
        nome: 'Zecchini',
        total_probability: 30,
        scenarios: [
          { name: 'Karate Unorthodox', probability: 12, method: 'KO R1-R2', description: 'Zecchini usa angulos de karate e movimentos unorthodox pra entrar dentro da guarda de McMillen. Flying knee ou chute rodado surpreende o invicto. Jackson Wink preparou um game plan especial.' },
          { name: 'Sub na Transicao', probability: 8, method: 'Submissao R2-R3', description: 'Zecchini encaixa um triangle choke (sua tecnica favorita declarada) apos uma transicao inesperada. McMillen nao e um grappler de elite.' },
          { name: 'Desgaste e Decisao', probability: 10, method: 'Decisao Dividida', description: 'Zecchini sobrevive o storm inicial e encontra seu ritmo. Vence rounds apertados com golpes mais limpos e eficientes, apesar do menor volume.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Tommy McMillen',
      winner_side: 'fighter1',
      predicted_method: 'TKO R1-R2',
      confidence_score: 6,
      confidence_label: 'MEDIA-ALTA',
      explanation: 'Os numeros sao esmagadores a favor de McMillen: 7.53 vs 2.34 SLpM, 51% vs 21% precisao, 10cm mais alto, 6 polegadas de alcance a mais. Zecchini absorve 6.75 SApM e foi nocauteado no R1 no debut UFC. A diferenca de tamanho e volume e demais. McMillen deve usar o jab pra manter distancia e acumular dano com combinacoes ate o arbitro parar. POREM: Zecchini treina na Jackson Wink e tem experiencia de 15 lutas. Se o game plan de Albuquerque funcionar, Zecchini pode surpreender. Mas os numeros nao favorecem o italiano.',
      x_factor: {
        title: 'O Game Plan da Jackson Wink',
        description: 'Zecchini treina com Winkeljohn e Jackson, dois dos melhores coaches da historia do MMA. Se alguem pode criar um game plan pra lidar com o tamanho e o volume de McMillen, sao eles. E o coringa de Zecchini.',
      },
      upset_alert: {
        title: 'Flying Knee ou Chute Rodado',
        description: 'Zecchini comecou no karate e treinou no Brasil. Tecnicas unorthodox como flying knee ou chute rodado podem surpreender McMillen, que enfrentou oposicao regional mais convencional. Um momento de genialidade pode mudar tudo.',
      },
      probabilities: {
        fighter1: { nome: 'McMillen', percent: 68 },
        fighter2: { nome: 'Zecchini', percent: 30 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'McMillen', reasoning: 'Favorito claro. Volume, tamanho, alcance, precisao. Tudo aponta pra McMillen.' },
        method: { pick: 'McMillen por TKO', reasoning: '67% das vitorias por KO/TKO. Zecchini absorve 6.75 SApM. O TKO e o cenario mais provavel.' },
        over_under: { pick: 'Under 2.5 Rounds', rounds: 2.5, reasoning: 'McMillen e finalizador (67% KO). Zecchini foi parado no R1. O acumulo de dano pode encerrar antes do R3.' },
        best_value: 'McMillen por TKO/KO e a aposta mais direta. O volume e o tamanho devem ser demais pro italiano.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'O Jab de McMillen', icon: 'Target', description: 'Se McMillen esta usando o jab pra manter distancia e pontuando, Zecchini esta em problemas serios. O alcance e a arma principal. Observe se o jab esta conectando limpo.' },
        { num: 2, title: 'As Entradas de Zecchini', icon: 'Zap', description: 'Zecchini precisa entrar dentro da guarda pra ser efetivo. Observe como ele esta tentando fechar a distancia: angulos de karate, level changes, fakes. Se nao esta conseguindo entrar, McMillen domina.' },
        { num: 3, title: 'Ring Rust de Zecchini', icon: 'Clock', description: 'Mais de 2 anos sem lutar. Observe se Zecchini parece lento, indeciso ou desconfortavel nos primeiros minutos. Ring rust pode ser fatal contra um opponent de volume alto.' },
        { num: 4, title: 'Dano Acumulado', icon: 'Activity', description: 'Zecchini absorve 6.75 SApM. Se o rosto dele esta mostrando dano no R2, o TKO pode estar proximo. Observe se o arbitro esta atento.' },
        { num: 5, title: 'Algo Diferente de Zecchini', icon: 'Brain', description: 'Se Zecchini comecar a fazer coisas inesperadas (mudancas de stance, chutes giratorios, tentativas de takedown), significa que o game plan da Jackson Wink e nao convencional. Fique atento a surpresas.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'McMILLEN VS ZECCHINI', content: 'UFC FIGHT NIGHT\nApex, Las Vegas | 4 de Abril\n3 Rounds | Peso Pena\n\n9-0 vs 11-4\nTommygun vs Angelo Veneziano\nMontana vs Veneza\n\n6 POLEGADAS de alcance a mais.', color: 'gold' },
        { slide_number: 2, title: 'TOMMYGUN', content: '9-0 invicto | 28 anos | Montana\n1,83m | 74" envergadura\n\n7.53 SLpM (MAIOR DO CARD!)\n113 strikes no DWCS\n67% vitorias por KO/TKO\n\nO cara nao para de atirar.', color: 'red' },
        { slide_number: 3, title: 'ANGELO VENEZIANO', content: '11-4 | 29 anos | Veneza, Italia\nJackson Wink MMA\n\nKarateka desde os 4 anos\nFoi pro Brasil sozinho aos 17\n2o italiano no UFC\n\nMAS: KO no debut. 21% precisao.\nPrecisa vencer pra ficar.', color: 'blue' },
        { slide_number: 4, title: 'PREVISAO', content: 'McMILLEN por TKO R1-R2\n\nConfianca: MEDIA-ALTA\n68% McMillen / 30% Zecchini\n\n7.53 vs 2.34 SLpM.\n6 polegadas de alcance a mais.\nOs numeros sao esmagadores.', color: 'red' },
      ],
      twitter: [
        { num: '1/3', text: 'McMillen vs Zecchini no peso-pena. O stat que resume: McMillen media 7.53 SLpM com 51% precisao. Zecchini media 2.34 com 21%. E McMillen tem 6 polegadas de alcance a mais.' },
        { num: '2/3', text: 'A historia de Zecchini e linda: saiu de Veneza aos 17 pra lutar no Brasil sozinho. Treina na Jackson Wink. 2o italiano no UFC. Mas os numeros sao crueis contra um invicto de 1,83m no peso-pena.' },
        { num: '3/3', text: 'Pick: McMillen por TKO R1-R2. O volume e o alcance sao demais. Zecchini absorve 6.75 SApM e foi KO no debut. Under 2.5 rounds.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: '6 polegadas de alcance a mais no peso-pena. Tommy McMillen mede 1,83m e media 7.53 strikes por minuto. E invicto. E o maior volume do card inteiro.' },
        { time: '10-25s', title: 'Zecchini', text: 'Manolo Zecchini saiu de Veneza aos 17 anos sozinho pra lutar no Brasil. Treina na Jackson Wink. Faixa preta de karate. Mas: nocauteado no debut UFC, 21% de precisao, 2+ anos parado.' },
        { time: '25-40s', title: 'Analise', text: 'Os numeros: 7.53 vs 2.34 SLpM. 51% vs 21% precisao. 74" vs 68" de alcance. McMillen e um mismatch fisico. Zecchini precisa de algo especial da Jackson Wink pra competir.' },
        { time: '40-55s', title: 'Pick', text: 'McMillen por TKO R1-R2. O volume e o alcance dominam. Mas respeitem Zecchini, o cara tem coracao de leao e treina com os melhores. Comenta quem ganha.' },
      ],
      tiktok: [
        { hook: '1 METRO E 83 no peso PENA. Esse cara e ENORME.', body: 'McMillen. Montana. 9-0 invicto. 7.53 strikes por minuto, o MAIOR volume do card. 74 polegadas de envergadura. Contra Zecchini, italiano de Veneza que tem 68 polegadas. 6 POLEGADAS a menos. E Zecchini foi nocauteado no debut UFC. Precisao de 21%. Os numeros sao crueis.', cta: 'Zecchini tem ALGUMA chance? Comenta!' },
      ],
      headlines: [
        'McMillen vs Zecchini: 6 Polegadas de Alcance e o Maior Volume do Card',
        'Tommygun de Montana: O Invicto de 1,83m Que Parece Um Meio-Medio no Peso-Pena',
        'De Veneza ao Octogono: A Historia de Zecchini e a Luta Pela Sobrevivencia',
        '7.53 Strikes Por Minuto: McMillen Pode Ser o Prospect Mais Ativo do Card',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '-280',
        fighter2_odds: '+220',
        fighter1_name: 'Tommy McMillen',
        fighter2_name: 'Manolo Zecchini',
        source: 'Estimativa baseada no perfil dos lutadores',
      },
      edges: [
        { icon: 'Zap', titulo: 'Mismatch de Tamanho e Alcance', stat_headline: '1,83M VS 1,73M. 74" VS 68" DE ENVERGADURA. 6 POLEGADAS.', contexto: 'McMillen e absurdamente grande pro peso-pena. O alcance de 6 polegadas a mais torna cada troca em pe uma desvantagem pra Zecchini.', implicacao_aposta: 'Favorece McMillen em pe. Se a luta ficar na distancia, McMillen domina completamente.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Activity', titulo: 'Volume vs Absorcao', stat_headline: '7.53 SLPM (McMILLEN) VS 6.75 SAPM (ZECCHINI ABSORVE)', contexto: 'McMillen e uma metralhadora. Zecchini e um saco de pancada (nos numeros). A combinacao e devastadora.', implicacao_aposta: 'Favorece Under rounds e McMillen por finish.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Clock', titulo: 'Layoff de 2+ Anos de Zecchini', stat_headline: 'ULTIMA LUTA: SETEMBRO 2023. MAIS DE 30 MESES PARADO.', contexto: 'Ring rust e real. Zecchini nao lutou em mais de 2 anos. A acuidade de timing e ritmo pode estar comprometida.', implicacao_aposta: 'Outro fator que favorece McMillen, especialmente no R1.', edge_level: 'moderado', fighter_side: 'fighter1' },
      ],
      value_picks: [
        { tipo: 'Metodo', pick: 'McMillen por KO/TKO', odds: '-150', confianca: 'alta', raciocinio: '67% das vitorias por KO. Zecchini absorve 6.75 SApM e foi KO no debut. O volume e o tamanho favorecem o finish por strikes.' },
        { tipo: 'Duracao', pick: 'Under 2.5 Rounds', odds: '+110', confianca: 'media', raciocinio: 'McMillen busca o finish (67% KO). Zecchini foi parado no R1. O acumulo de dano pode encerrar antes do R3.' },
        { tipo: 'Moneyline', pick: 'McMillen ML (-280)', odds: '-280', confianca: 'media', raciocinio: 'Favorito por bons motivos. O preco e justo pelo mismatch de tamanho e volume. Nao tem muito valor, mas e seguro.' },
      ],
      armadilha: {
        titulo: 'Armadilha: McMillen por Decisao',
        descricao: 'McMillen tem apenas 1 decisao em 9 vitorias (11%). E primariamente um finalizador. Se ele vencer, provavelmente e por finish, nao nos pontos. Apostar em McMillen por decisao paga mais mas vai contra o perfil.',
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
