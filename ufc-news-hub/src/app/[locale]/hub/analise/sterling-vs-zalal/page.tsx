import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'sterling-vs-zalal',
  evento_id: null,
  slug: 'sterling-vs-zalal',
  titulo: 'Sterling vs Zalal: O Ex-Campeão e o Desafiante Marroquino',
  subtitulo:
    'Ex-campeão do peso-galo tenta se consolidar no peso-pena após 8 meses de inatividade. Do outro lado, Zalal em 5-0 no retorno ao UFC, com 4 finalizações e armbar em R1 contra Josh Emmett. A leitura do stat profile aponta Zalal em vantagem defensiva, o precedente de Evloev mostra o arquétipo que derrota Sterling, e 7 anos separam os dois.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,70m', envergadura: '180cm', idade: 36, academia: 'Serra-Longo, Nova York' },
      fighter2: { altura: '1,78m', envergadura: '183cm', idade: 29, academia: 'Factory X, Denver' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Decisão ou Submissão tardia',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Aljamain Sterling',
    apelido: 'Funk Master',
    record: '25-5-0',
    ranking: '#5 Peso-Pena',
    ultimasLutas: [
      { result: 'W', opponent: 'Brian Ortega', method: 'Decisão Unânime', event: 'UFC Fight Night 257' },
      { result: 'L', opponent: 'Movsar Evloev', method: 'Decisão Unânime', event: 'UFC 310' },
      { result: 'W', opponent: 'Calvin Kattar', method: 'Decisão Unânime', event: 'UFC 300' },
    ],
  },
  fighter2_info: {
    nome: 'Youssef Zalal',
    apelido: 'Moroccan Devil',
    record: '18-5-1',
    ranking: '#7 Peso-Pena',
    ultimasLutas: [
      { result: 'W', opponent: 'Josh Emmett', method: 'Submissão (armbar) R1', event: 'UFC 320' },
      { result: 'W', opponent: 'Calvin Kattar', method: 'Decisão Unânime', event: 'UFC Fight Night 251' },
      { result: 'W', opponent: 'Jack Shore', method: 'Submissão (arm-triangle) R2', event: 'UFC Fight Night 246' },
    ],
  },
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  categoria_peso: 'Peso-Pena (145 lbs)',
  num_rounds: 5,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Sterling vs Zalal',
      evento_data: '25 de Abril, 2026',
      evento_local: 'Meta APEX, Las Vegas, Nevada',
      categoria_peso: 'Peso-Pena (145 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'O Ex-Campeão e o Desafiante',
      tagline_sub:
        'Sterling tenta se consolidar nos 145 libras. Zalal chega em 5-0 com 4 finalizações. A leitura aponta Zalal, e o motivo não é o mercado.',
      fighter1: {
        nome_completo: 'Aljamain "Funk Master" Sterling',
        apelido: 'Funk Master',
        sobrenome: 'Sterling',
        record: '25-5-0',
        ranking: '#5 Peso-Pena',
        info_extra: 'Uniondale, Nova York | 36 anos',
        imagem_fullbody_url:
          'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/STERLING_ALJAMAIN_L_04-25.png?itok=nfdcOOjY',
      },
      fighter2: {
        nome_completo: 'Youssef "Moroccan Devil" Zalal',
        apelido: 'Moroccan Devil',
        sobrenome: 'Zalal',
        record: '18-5-1',
        ranking: '#7 Peso-Pena',
        info_extra: 'Casablanca, Marrocos | 29 anos',
        imagem_fullbody_url:
          'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-08/ZALAL_YOUSSEF_L_08-10.png?itok=nG8ooUr-',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'O Wrestler que Pode Virar Alvo',
      insight:
        'Aljamain Sterling é reconhecido como um dos melhores wrestlers da história recente do peso-galo. Foi ele quem controlou Petr Yan, TJ Dillashaw e Henry Cejudo no solo. Mas a defesa de takedown dele é 45 por cento, enquanto Zalal defende 59 por cento e entra com 2,17 takedowns a cada 15 minutos. Aqui aparece a ressalva que separa a leitura rasa da leitura de quem acompanha MMA de perto: os números do Sterling foram construídos contra a elite absoluta, Yan duas vezes, Dillashaw, Cejudo, O\'Malley, Evloev, Ortega. Absorver mais e defender menos é consequência de enfrentar quem acerta e quem derruba no nível mais alto da divisão. Os números do Zalal vêm de um retorno recente contra Errens, Quarantillo, Shore, Kattar, e só no último round apareceu o Emmett. Ainda assim, a tendência existe e merece peso. No peso-pena, contra um lutador 8 centímetros mais alto e 3 centímetros mais longo, sete anos mais jovem, o wrestling de Sterling precisa trabalhar mais para funcionar do que trabalhou nas conquistas de título.',
      tension: {
        truth_a:
          'Sterling é o maior vencedor por decisão da história do peso-galo, com 1670 golpes significativos conectados, o terceiro maior volume total da divisão. Dominou Petr Yan duas vezes, Henry Cejudo, Sheymon Moraes, TJ Dillashaw. Nunca foi finalizado em 30 lutas profissionais. Os stats dele parecem defensivamente medianos porque vieram de enfrentar a elite absoluta, não porque ele é mediano.',
        truth_b:
          'Zalal está em 5-0 no retorno ao UFC, com 4 finalizações, incluindo armbar em Josh Emmett no R1 do UFC 320 em outubro de 2025. Sete anos mais jovem, 8 centímetros mais alto, 3 centímetros de alcance a mais. Stats defensivas superiores em todas as métricas, mesmo que construídas em parte contra oposição menor. Os atributos físicos, a trajetória e o precedente recente contra o arquétipo Evloev apontam para o desafiante.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Aljamain Sterling',
        color: 'red',
        momentum_score: 6,
        momentum_label: 'Misto (com ressalvas)',
        momentum_trend: 'stable',
        momentum_note:
          'Saiu de 8 meses de inatividade após a vitória sobre Brian Ortega em agosto de 2025. No peso-pena, está 2V-1D desde a subida: venceu Calvin Kattar por decisão unânime no UFC 300, perdeu para Movsar Evloev no UFC 310 dominado no próprio wrestling, voltou vencendo Ortega em catchweight de 153 libras. É um veterano com resultados mistos recentes: a derrota para Sean O\'Malley por TKO no R2 ainda pesa no radar, e o Evloev expôs um ponto importante, Sterling não tem mais a vantagem automática do wrestling contra um wrestler ranqueado que é peso-pena nativo.',
        recent_fights: [
          {
            date: 'Ago 2025',
            opponent: 'Brian Ortega',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: '#3 FW',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'Voltou em catchweight de 153 libras. Usou wrestling e controle para 3 rounds sem que Ortega encaixasse o jiu-jitsu de elite dele.',
          },
          {
            date: 'Dez 2024',
            opponent: 'Movsar Evloev',
            result: 'L',
            method: 'Decisão Unânime',
            opponent_rank: '#3 FW',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'Dominado no próprio wrestling por um wrestler nativo do peso-pena. Sterling tomou do próprio remédio. Primeira derrota desde a perda do cinturão para O\'Malley.',
          },
          {
            date: 'Abr 2024',
            opponent: 'Calvin Kattar',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: '#9 FW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Estreia no peso-pena. Três rounds de controle tático, 12 takedowns tentados, 5 concretizados. A vitória da estreia no 145 que serviu de validação.',
          },
          {
            date: 'Ago 2023',
            opponent: 'Sean O\'Malley',
            result: 'L',
            method: 'TKO R2',
            opponent_rank: 'Campeão',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'Perdeu o cinturão de peso-galo via TKO no R2 por direita cruzada. Momento de inflexão que antecedeu a subida de divisão.',
          },
          {
            date: 'Mai 2023',
            opponent: 'Henry Cejudo',
            result: 'W',
            method: 'Decisão Dividida',
            opponent_rank: 'Ex-Campeão (2 div)',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'Defesa de título contra duplo campeão retornando. 25 minutos de wrestling e posicionamento. Decisão dividida justa.',
          },
        ],
        layoff_warning: '8 meses desde a última luta. Aos 36 anos, no peso-pena, a retomada de timing e condicionamento pede rodagem para tirar a ferrugem.',
      },
      fighter2: {
        nome: 'Youssef Zalal',
        color: 'blue',
        momentum_score: 9,
        momentum_label: 'Em Alta Absoluta',
        momentum_trend: 'ascending',
        momentum_note:
          'Cinco vitórias seguidas no retorno ao UFC, quatro delas por finalização. A última foi um armbar em Josh Emmett no R1 do UFC 320 em outubro de 2025, em uma luta em que Emmett era o favorito e Zalal finalizou em menos de cinco minutos. Subiu do circuito regional após ser cortado em 2021, quando terminou o primeiro ciclo com 0-2-1, reformulou o estilo com mais paciência e mais caça à finalização, e voltou refinado. É a primeira luta principal da carreira, e ele declarou em entrevistas na semana da luta que o evento tem peso enorme para ele. É o salto mais surpreendente da categoria peso-pena nos últimos 12 meses.',
        recent_fights: [
          {
            date: 'Out 2025',
            opponent: 'Josh Emmett',
            result: 'W',
            method: 'Submissão (armbar) R1',
            opponent_rank: '#9 FW',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'Armbar em menos de 5 minutos contra um ex-desafiante de título. A finalização que colocou Zalal no radar top 10 de verdade.',
          },
          {
            date: 'Fev 2025',
            opponent: 'Calvin Kattar',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: '#13 FW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Três rounds de controle de ritmo, jab longo e takedowns pontuais. Mesmo Kattar que Sterling tinha vencido 10 meses antes. Cruzamento direto de resultados.',
          },
          {
            date: 'Nov 2024',
            opponent: 'Jack Shore',
            result: 'W',
            method: 'Submissão (arm-triangle) R2',
            opponent_rank: 'N/R (veterano top 15)',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Arm-triangle no R2 contra um veterano vindo do peso-galo. Demonstração do jogo de finalização vindo do controle de cima.',
          },
          {
            date: 'Ago 2024',
            opponent: 'Jarno Errens',
            result: 'W',
            method: 'Submissão (mata-leão) R1',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Mata-leão no R1 contra um estreante. Finalização rápida e limpa, mas em nível de oposição modesto.',
          },
          {
            date: 'Mar 2024',
            opponent: 'Billy Quarantillo',
            result: 'W',
            method: 'Submissão (mata-leão) R2',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Mata-leão no R2 contra um veterano que funciona como filtro da divisão. Foi o início do retorno ao UFC, luta de reposicionamento.',
          },
        ],
        layoff_warning: null,
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Sterling',
        media_oponentes: 5,
        media_oponentes_label: 'Excelente',
        aproveitamento: '3V-2D (60%)',
        contra_top5: '2V-2D',
      },
      fighter2: {
        nome: 'Zalal',
        media_oponentes: 3,
        media_oponentes_label: 'Bom',
        aproveitamento: '5V-0D (100%)',
        contra_top5: '0V-0D',
      },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note:
        'Calvin Kattar é o único oponente em comum. Sterling venceu por decisão unânime no UFC 300 em abril de 2024. Zalal venceu por decisão unânime no UFC Fight Night 251 em fevereiro de 2025. Ambos controlaram três rounds sem expor o queixo, ambos usaram wrestling e controle posicional para ganhar nos cartões. A diferença relevante: Sterling fez isso na estreia no peso-pena, ainda calibrando a distância nova. Zalal fez isso aos 28 anos, no pico físico. Ambos os resultados mostram que os dois sabem vencer um veterano técnico pelo ritmo. Mas aqui cabe a ressalva que é o trabalho qualitativo mais importante: os números do Sterling foram construídos contra uma lista de adversários de elite absoluta, Yan duas vezes, Dillashaw, Cejudo, Volkanovski, O\'Malley, Evloev, Ortega, e os números do Zalal foram construídos contra um mix que começou em Errens e Quarantillo e só chegou em Emmett recentemente. Quando a tabela aponta 4,45 contra 3,03 de volume, ou 45% contra 59% de defesa de takedown, essas diferenças precisam ser pesadas pelo contexto de quem gerou cada número. Sterling absorve mais porque enfrentou quem acerta mais. Isso não muda a leitura da luta, mas explica por que os stats não contam a história inteira sozinhos.',
    },

    comparacao_estatistica: {
      stats: [
        {
          label: 'Sig. Strikes por Minuto',
          valueA: 4.45,
          valueB: 3.03,
          maxVal: 6,
          format: 'decimal',
          note: 'Sterling tem volume maior, mas parte do número vem de troca com elite absoluta, não só de pressão.',
        },
        {
          label: 'Sig. Strikes Absorvidos/Min',
          valueA: 2.21,
          valueB: 1.78,
          maxVal: 5,
          format: 'decimal',
          reverseWinner: true,
          note: 'Zalal absorve 20 por cento menos, mas lembrando que Sterling enfrentou strikers técnicos como O\'Malley, Yan e Evloev.',
        },
        {
          label: 'Defesa de Strikes (%)',
          valueA: 60,
          valueB: 67,
          maxVal: 100,
          format: 'percent',
        },
        {
          label: 'Takedowns por 15 Min',
          valueA: 2.45,
          valueB: 2.17,
          maxVal: 5,
          format: 'decimal',
          note: 'Ambos tentam takedowns. Sterling é ligeiramente mais ativo.',
        },
        {
          label: 'Defesa de Takedown (%)',
          valueA: 45,
          valueB: 59,
          maxVal: 100,
          format: 'percent',
          note: 'A métrica mais reveladora, com ressalva: Sterling defende menos, mas enfrentou wrestlers de elite como Dillashaw e Evloev.',
        },
        {
          label: 'Submissões por 15 Min',
          valueA: 0.64,
          valueB: 1.41,
          maxVal: 3,
          format: 'decimal',
          note: 'Zalal ameaça finalização mais que o dobro. Jogo de BJJ é primeiro recurso, não segundo.',
        },
        {
          label: 'Knockdown por Luta',
          valueA: 0.0,
          valueB: 0.22,
          maxVal: 1,
          format: 'decimal',
          note: 'Sterling tem zero knockdowns registrados no UFC. Zalal tem ameaça real também no striking.',
        },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '36 anos', fighter2: '29 anos', note: 'Diferença de 7 anos. Zalal no pico físico, Sterling no lado descendente da curva.' },
        { label: 'Altura', fighter1: '1,70m', fighter2: '1,78m', note: 'Zalal é 8 centímetros mais alto.' },
        { label: 'Envergadura', fighter1: '180cm', fighter2: '183cm', note: '3 centímetros de vantagem para Zalal.' },
        { label: 'Postura', fighter1: 'Switch', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'Serra-Longo (Nova York)', fighter2: 'Factory X (Denver)', note: 'Dois dos melhores camps norte-americanos em divisões médias.' },
        { label: 'Tempo Médio de Luta', fighter1: '13:54', fighter2: '11:32', note: 'Sterling prolonga, Zalal tende a finalizar.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter2',
          gap: 3,
          note: 'Zalal tem 8 centímetros de altura e 3 centímetros de alcance a mais, além de melhor defesa e absorção. Sterling não é um striker como ferramenta primária.',
        },
        {
          label: 'Wrestling Ofensivo',
          advantage: 'fighter1',
          gap: 2,
          note: 'Sterling foi All-American Divisão III de wrestling universitário. Técnica de entrada mais refinada e variada.',
        },
        {
          label: 'Defesa de Takedown',
          advantage: 'fighter2',
          gap: 3,
          note: 'Zalal defende 59 por cento, Sterling 45 por cento. Sterling ficou exposto contra Evloev, que é o arquétipo mais próximo de Zalal.',
        },
        {
          label: 'Grappling e BJJ',
          advantage: 'fighter2',
          gap: 1,
          note: 'Ambos são faixas-pretas. Sterling tem 8 submissões em 25 vitórias, Zalal tem 10 em 18. Zalal é mais agressivo em transições de solo.',
        },
        {
          label: 'Poder de Finalização',
          advantage: 'fighter2',
          gap: 3,
          note: 'Sterling tem 3 KO/TKO em 25 vitórias, 12 por cento, zero knockdowns registrados no UFC. Zalal tem 4 KO/TKO e ameaça constante de finalização por submissão.',
        },
        {
          label: 'Cardio em 5 rounds',
          advantage: 'fighter1',
          gap: 2,
          note: 'Sterling fez cinco rounds contra Cejudo, Yan duas vezes, Dillashaw. Zalal nunca passou de três rounds no UFC. Pergunta aberta e crítica.',
        },
      ],
      summary:
        'Zalal tem vantagem em 4 das 6 dimensões, incluindo striking e defesa de takedown, as duas mais decisivas neste confronto. Sterling tem vantagem onde mais importaria se conseguir impor: wrestling ofensivo e cardio de 5 rounds. A pergunta é se ele consegue conectar essas vantagens antes de Zalal conectar as dele.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Sterling',
        ko_tko: { count: 3, percent: 12 },
        submission: { count: 8, percent: 32 },
        decision: { count: 14, percent: 56 },
        total_wins: 25,
      },
      fighter2: {
        nome: 'Zalal',
        ko_tko: { count: 4, percent: 22 },
        submission: { count: 10, percent: 56 },
        decision: { count: 4, percent: 22 },
        total_wins: 18,
      },
      insight:
        'Perfis opostos de vencedor. Sterling tem 56 por cento das vitórias por decisão, é o lutador de desgaste, o que controla 15 ou 25 minutos e ganha nos cartões. Zalal tem 56 por cento por submissão, é o caçador, o que força a transição de solo e finaliza. Contra Sterling, que nunca foi finalizado em 30 lutas profissionais, a ameaça de submissão de Zalal encontra a defesa de submissão mais testada da divisão. Contra Zalal, o padrão de decisão de Sterling precisa sobreviver a um lutador que raramente chega até o fim da luta, já que em 18 vitórias só 4 foram por decisão. A aposta implícita de Sterling é: se eu não for finalizado, eu venço no volume. A aposta implícita de Zalal é: eu vou forçar o erro antes dos juízes decidirem.',
    },

    previsao_final: {
      winner_name: 'Youssef Zalal',
      winner_side: 'fighter2',
      predicted_method: 'Decisão Unânime ou Submissão R3-R5',
      confidence_score: 7,
      confidence_label: 'MÉDIA-ALTA',
      explanation:
        'A aposta é Zalal por um motivo central que está nos números, e por um motivo qualitativo que os números precisam ser lidos com contexto. O motivo numérico: Sterling defende 45 por cento de takedown, Zalal ataca com 2,17 takedowns a cada 15 minutos. Contra Evloev em dezembro de 2024, Sterling foi dominado pelo arquétipo exato do wrestler peso-pena nativo que neutraliza o wrestling dele. Zalal é uma versão mais atlética, mais jovem e mais longa desse arquétipo. Adicione 8 meses de inatividade aos 36 anos e a matemática fica pesada para o veterano. O motivo qualitativo e a ressalva: os stats de Sterling vieram de enfrentar a elite absoluta, Yan, Dillashaw, Cejudo, O\'Malley, Evloev, Ortega. Zalal construiu os dele contra Errens, Quarantillo, Shore, Kattar e só no fim Emmett. Isso pesa contra um julgamento rápido de que Zalal é simplesmente defensivamente superior, porque parte do espaço entre os números vem da diferença de calibre de adversários, não só de habilidade individual. Ainda assim, a tendência é real, o precedente do Evloev é real, e a vantagem física do Zalal é real. O caminho de Zalal é trabalhar jab e teep longos nos rounds 1 e 2 para ganhar nos cartões, ameaçar finalização em cada transição de solo, e capitalizar nos rounds tardios quando Sterling precisar forçar. A convicção é 7 e não 9 porque Zalal nunca lutou 5 rounds no UFC, e Sterling é referência em cardio de cinco rounds. Se Zalal gastar muito tentando finalizar cedo e não conseguir, Sterling sobrevive e roda. Esse caminho do azarão existe e é concreto.',
      x_factor: {
        title: 'A estreia de Zalal em luta de 5 rounds',
        description:
          'Zalal tem 18 vitórias e nunca passou de três rounds no octógono. Todas as finalizações aconteceram em R1 ou R2. Contra Kattar foi decisão unânime em três rounds. Se a luta chegar nos rounds 4 e 5, é território totalmente novo para ele. Sterling já fez cinco rounds contra Cejudo por decisão dividida, Petr Yan duas vezes, TJ Dillashaw e Alexander Volkanovski. O cardio prolongado é onde Sterling vive melhor. Se Zalal não fechar a história nos 15 minutos iniciais, a narrativa pode virar rápido.',
      },
      upset_alert: {
        title: 'Alerta de zebra: Sterling impõe o wrestling',
        description:
          'Sterling foi All-American de wrestling na Divisão III, tem 2,45 takedowns a cada 15 minutos e enfrentou wrestlers mais técnicos do que Zalal em seus últimos anos. Petr Yan era campeão e top ranqueado quando Sterling o controlou, e Dillashaw tinha experiência olímpica de wrestling antes de entrar no UFC. Se Sterling conectar 2 ou 3 takedowns nos primeiros 7 minutos, manter o controle de cima por tempo suficiente, e forçar Zalal a chegar no fim cansado, ele pode vencer por decisão unânime do mesmo jeito que venceu Kattar. A derrota para Evloev expôs vulnerabilidade, mas Evloev é um wrestler mais ativo e mais experiente do que Zalal. Sterling ainda tem 25 vitórias em 30 lutas por um motivo: ele sabe vencer luta difícil.',
      },
      probabilities: {
        fighter1: { nome: 'Sterling', percent: 32 },
        fighter2: { nome: 'Zalal', percent: 65 },
        draw: 3,
      },

      conviction: {
        thesis:
          'A tese é: Youssef Zalal vence porque, primeiro, Sterling defende 45 por cento de takedown e absorve 2,21 sig strikes por minuto, contra 67 por cento de defesa de striking e 1,78 de absorção de Zalal, segundo stats verificados nos perfis do UFC.com; com a ressalva de que esses números foram gerados por Sterling em um período contra Yan, Dillashaw, Cejudo, O\'Malley, Evloev, Ortega, a elite absoluta, e que Zalal construiu os dele em parte contra Errens e Quarantillo, a tendência continua real mas precisa ser lida em contexto. Segundo, Zalal está em 5-0 no retorno ao UFC, com 4 finalizações, incluindo armbar em Josh Emmett no R1 do UFC 320 em outubro de 2025 contra um favorito, enquanto Sterling está 2-1 no peso-pena e saiu de 8 meses de inatividade desde Ortega em agosto de 2025. Terceiro, o arquétipo exato que derrotou Sterling recentemente foi Movsar Evloev no UFC 310 em dezembro de 2024, um wrestler peso-pena nativo que inverteu o wrestling do ex-campeão, e Zalal é uma versão mais atlética, 7 anos mais jovem e 3 centímetros mais longa desse arquétipo. O caminho é trabalhar distância com jab e teep longos nos primeiros dois rounds, defender a entrada de Sterling no corpo a corpo e na grade, buscar transição de solo para tomada de costas ou armbar quando Sterling forçar, e rodar para os rounds 3 a 5, quando o veterano precisa gastar gás e Zalal capitaliza. Isso desmorona se Sterling conectar 2 takedowns nos primeiros 4 minutos e conseguir estabelecer controle de cima que Zalal não consegue reverter, ou se Zalal gastar gás tentando finalizar cedo demais e não conseguir sobreviver aos rounds 4 e 5 na primeira luta de cinco rounds da vida dele.',
        conviction_score: 7,
        conviction_rationale:
          'Convicção 7 porque a tese se apoia em três pilares independentes com fontes verificadas: stats dos perfis do UFC.com para defesa de takedown e absorção, sequência recente documentada de 5-0 com 4 finalizações incluindo Emmett no UFC 320, e precedente direto do arquétipo de Evloev no UFC 310 contra Sterling. Não é 8 ou 9 por dois motivos: Zalal nunca fez cinco rounds no UFC e Sterling é referência em cardio longo da divisão, e parte da vantagem estatística vem de diferença de calibre de adversário, não só de habilidade pura. Não é 5 ou 6 porque as evidências são convergentes e se sustentam sozinhas, sem precisar invocar movimento de mercado como muleta.',
        conviction_breakers: [
          'Sterling conecta 2 takedowns limpos nos primeiros 4 minutos e estabelece controle de cima por 3 minutos do R1. É o padrão que neutralizou Yan no UFC 273 e Cejudo no UFC 288. Se aparecer, a tese esfria rápido.',
          'Zalal tenta finalizar cedo demais, entra em uma transição de solo ruim no R1 ou R2 e Sterling reverte para as costas, acha mata-leão ou crucifixo. Primeira luta de 5 rounds e Zalal decidir gastar no R1 é o risco clássico do novato em luta principal.',
          'Sterling usa o catchweight contra Ortega como prova de que o cardio no peso-pena está pronto, e mantém pressão de wrestling constante por 25 minutos sem perder a respiração. Padrão do Sterling experiente, não do veterano em declínio.',
          'Os juízes decidem por Sterling em uma luta competitiva em que Zalal controla distância mas Sterling consegue 1 ou 2 takedowns por round com controle breve. Julgamentos em Las Vegas tendem a recompensar wrestling e experiência.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 32,
          key_scenario:
            'Sterling fecha distância nos primeiros 2 minutos do R1 via entrada de mudança de nível, conecta takedown contra a grade, estabelece guarda aberta passando para controle lateral em seguida, força Zalal a defender a posição ao invés de buscar finalização. No R2 repete o padrão e ganha 2 rounds de controle. No R3 usa a ameaça de wrestling para manter Zalal recuado e trabalha volume de golpes no corpo. Chega no R4 com 3-0 ou 2-1 no cartão, gerencia gás e fecha com wrestling na grade no R5. O tempo médio de luta 13:54 de Sterling é a vantagem, ele vive bem neste território.',
          required_conditions: [
            'Conectar pelo menos 1 takedown ou 1 clinch de controle em cada um dos primeiros 3 rounds',
            'Evitar transição de solo longa: sempre que chegar em controle de cima, pressionar, não flutuar',
            'Não aceitar trocação pura: distância é onde Zalal é superior',
            'Gerenciar gás nos rounds 4 e 5, quando Zalal pode cansar pela primeira vez na carreira',
          ],
          historical_precedent:
            'Sterling contra Henry Cejudo no UFC 288 em maio de 2023: defesa de cinturão por decisão dividida contra outro campeão com vantagem física e striking superior. Sterling usou wrestling e clinch para desgastar durante cinco rounds e vencer nos cartões. Se aparecer o Sterling daquela noite, a tese contra ele cai.',
        },
      },

      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Youssef Zalal',
            odds: '-125',
            reasoning:
              'A leitura da análise aponta Zalal como vencedor pelos motivos desenvolvidos na tese: stats defensivas superiores com 67 por cento de defesa de striking, 59 por cento de defesa de takedown e 1,78 de absorção; momentum de 5-0 com finalização em Emmett no UFC 320; arquétipo de Evloev já tendo derrotado Sterling no UFC 310. O preço -125 oferece pequeno valor: a probabilidade implícita é 55,6 por cento e a leitura estima 65-69 por cento. Desmorona se Sterling conectar 2 takedowns nos primeiros 4 minutos e estabelecer controle de cima prolongado.',
          },
          {
            type: 'Método',
            pick: 'Zalal por submissão',
            odds: '+425',
            reasoning:
              'Zalal tem 1,41 tentativas de submissão a cada 15 minutos, enquanto Sterling nunca foi finalizado em 30 lutas profissionais. É uma aposta de valor moderado: se a luta ficar com Zalal, submissão é provavelmente o método, mas Sterling é o mais difícil de finalizar da divisão. Aposta pequena, como contrapeso ao moneyline. Desmorona se Sterling mantiver distância e a luta acontecer só em pé.',
          },
          {
            type: 'Rounds',
            pick: 'Passa de 2,5 rounds',
            odds: '-160',
            reasoning:
              'Ambos têm padrão de ritmo mais tático do que explosivo. Sterling tem média de 13:54 em 30 lutas, Zalal tem média de 11:32. Kattar contra Zalal foi decisão unânime em três rounds, e Sterling contra Ortega foi decisão unânime em três rounds. Luta entre dois lutadores com base de wrestling e jiu-jitsu raramente termina cedo, especialmente quando nenhum é finalizador de distância. Desmorona se Zalal encaixar armbar ou mata-leão em transição de solo inicial, como aconteceu contra Emmett.',
          },
        ],
        best_bet: {
          pick: 'Zalal -125 no moneyline',
          reasoning:
            'A melhor aposta é o moneyline direto em Zalal. Stats, momentum e precedente Evloev convergem para o desafiante, e o preço -125 oferece valor pequeno mas real contra a probabilidade estimada de 65-69 por cento. Para quem quiser valor maior, aposta pequena adicional em "Zalal por submissão" em +425, como reconhecimento de que o jogo de finalização é a maior vantagem analítica dele.',
        },
      },

      key_stats: [
        {
          value: '45%',
          label: 'Defesa de takedown de Sterling',
          sublabel: 'É a métrica que Evloev explorou. Zalal ataca com 2,17 takedowns a cada 15 minutos.',
        },
        {
          value: '5-0',
          label: 'Sequência de Zalal no retorno ao UFC',
          sublabel: '4 finalizações, incluindo armbar em R1 sobre Josh Emmett no UFC 320.',
        },
        {
          value: 'ZERO',
          label: 'Vezes que Sterling foi finalizado em 30 lutas',
          sublabel: 'Melhor defesa de submissão da divisão encontra 1,41 tentativas a cada 15 minutos de Zalal.',
        },
      ],

      odds: {
        fighter1_odds: '+105',
        fighter2_odds: '-125',
        fighter1_name: 'Sterling',
        fighter2_name: 'Zalal',
        source:
          'Bet365, DraftKings, FanDuel, BetMGM em 24 de abril de 2026. Observação independente: a linha abriu em Sterling -200 e acabou em Zalal -125, um movimento raro de mais de 30 pontos em favor do desafiante.',
      },

      armadilha: {
        titulo: 'Armadilha: Sterling por decisão',
        descricao:
          'O mercado paga Sterling por decisão em torno de +300 porque o caminho parece óbvio: o veterano sobrevive e ganha nos cartões. Mas a aposta embute duas premissas frágeis. A primeira é que Sterling consegue implementar um wrestling que o próprio arquétipo de Evloev já expôs como insuficiente em dezembro de 2024. A segunda é que Zalal não consegue encaixar uma das 1,41 tentativas de submissão que ele faz a cada 15 minutos. Se vai apostar em Sterling, a aposta correta é o moneyline em +120, não o método específico. Apostar em Sterling por decisão é dobrar a aposta contra as duas coisas que não funcionaram para ele ultimamente.',
      },
    },

    // Legacy fields intentionally omitted in CONTRACT v2:
    // narrativa, oponente_comum, danger_zones, intangiveis, caminhos_vitoria,
    // o_que_observar, creator_kit, perfil_habilidades (legacy 0-100),
    // radar_apostador — all absorbed into the 7 canonical sections above.
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'sterling-vs-zalal');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
