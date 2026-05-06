import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'dumont-vs-edwards',
  evento_id: null,
  slug: 'dumont-vs-edwards',
  titulo: 'Dumont vs Edwards: A Imortal Contra a Pantera',
  subtitulo:
    'Norma Dumont chega em 5-0 desde 2023, número 3 do ranking, com identidade definida: pressão, posicionamento, cartões. Joselyne Edwards está em 4 vitórias seguidas, finalização por mata-leão contra Cornolle e dois nocautes em 2025. Encontro entre consistência de elite e finalizadora em ascensão.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,70m', envergadura: '170cm', idade: 35, academia: 'Syndicate MMA' },
      fighter2: { altura: '1,73m', envergadura: '178cm', idade: 30, academia: 'Kings MMA' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão Unânime',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Norma Dumont',
    apelido: 'The Immortal',
    record: '13-2-0',
    ranking: '#3 Peso-Galo Feminino',
    ultimasLutas: [
      { result: 'W', opponent: 'Ketlen Vieira', method: 'Decisão Dividida', event: 'UFC Fight Night 263' },
      { result: 'W', opponent: 'Irene Aldana', method: 'Decisão Unânime', event: 'UFC 306' },
      { result: 'W', opponent: 'Germaine de Randamie', method: 'Decisão Unânime', event: 'UFC Fight Night 240' },
    ],
  },
  fighter2_info: {
    nome: 'Joselyne Edwards',
    apelido: 'La Pantera',
    record: '17-6-0',
    ranking: '#11 Peso-Galo Feminino',
    ultimasLutas: [
      { result: 'W', opponent: 'Nora Cornolle', method: 'Submissão (mata-leão) R2', event: 'UFC Fight Night 267' },
      { result: 'W', opponent: 'Priscila Cachoeira', method: 'KO R1', event: 'UFC on ESPN 72' },
      { result: 'W', opponent: 'Chelsea Chandler', method: 'TKO R1', event: 'UFC on ESPN 66' },
    ],
  },
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  categoria_peso: 'Peso-Galo Feminino (135 lbs)',
  num_rounds: 3,
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
      categoria_peso: 'Peso-Galo Feminino (135 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'A Imortal Contra a Pantera',
      tagline_sub: 'Dumont em cinco vitórias seguidas, Edwards em quatro com três finalizações. Encontro entre ranking consolidado e desafiante em ascensão.',
      fighter1: {
        nome_completo: 'Norma "The Immortal" Dumont',
        apelido: 'The Immortal',
        sobrenome: 'Dumont',
        record: '13-2-0',
        ranking: '#3 Peso-Galo Feminino',
        info_extra: 'Belo Horizonte, Brasil | 35 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/DUMONT_NORMA_L_04-25.png?itok=fXm7T9ua',
      },
      fighter2: {
        nome_completo: 'Joselyne "La Pantera" Edwards',
        apelido: 'La Pantera',
        sobrenome: 'Edwards',
        record: '17-6-0',
        ranking: '#11 Peso-Galo Feminino',
        info_extra: 'Panamá City, Panamá | 30 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/EDWARDS_JOSELYNE_L_08-09.png?itok=ERtxYGHz',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Consistência Contra Ascensão',
      insight:
        'A luta é o encontro entre dois arcos diferentes. Norma Dumont não perde desde 2021 e construiu identidade específica, 11 vitórias por decisão em 13 vitórias totais, ritmo em três rounds, posicionamento na grade, desgaste acumulado, sem exposição. Joselyne Edwards está em outro momento: quatro vitórias seguidas, três finalizações em 2025, incluindo o mata-leão em Nora Cornolle no UFC Fight Night 267 em fevereiro de 2026. A diferença de calibre de adversários pesa aqui. Dumont acabou de vencer Ketlen Vieira, top 5, e antes disso Irene Aldana, ex-desafiante de título, e Germaine de Randamie, ex-campeã. Edwards venceu Cornolle, Cachoeira, Chandler, todas fora do top 10 no momento da luta. A subida recente de Edwards é real, mas o teste contra uma top 3 consolidada é a primeira vez que aparece na carreira dela.',
      tension: {
        truth_a: 'Dumont tem a identidade mais previsível do top 5 da divisão. 11 vitórias por decisão, zero finalizações por striking na carreira UFC, 84 por cento de vitórias via cartões. Ela vai fazer exatamente o que sempre faz: pressão contra a grade, controle, trabalho de volume. O problema é que o método dela também é o método que a deixou na terceira vitória por decisão dividida contra Ketlen Vieira.',
        truth_b: 'Edwards vem em momentum absoluto. Três de suas últimas quatro vitórias foram finalizações, duas no R1. Se conectar uma direita limpa, Dumont é o tipo de lutadora que absorve para impor padrão, padrão que não funciona tão bem contra poder de nocaute.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Norma Dumont',
        color: 'red',
        momentum_score: 8,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note:
          'Cinco vitórias seguidas desde 2023, quatro por decisão unânime e a última por decisão dividida contra Ketlen Vieira no UFC Fight Night 263 em novembro de 2025. Subiu ao número 3 do ranking após vencer Aldana, de Randamie e Vieira. É a lutadora mais ativa da top 5 em termos de pressão constante, mas a última luta mostrou que o método está sendo mais difícil de vender aos juízes.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Ketlen Vieira', result: 'W', method: 'Decisão Dividida', opponent_rank: '#5 WBW', quality_score: 5, quality_label: 'Excelente', note: 'Vitória por split decision contra ex-desafiante. Luta dura em que Dumont teve que impor pressão nos três rounds sem margem de erro.' },
          { date: 'Set 2024', opponent: 'Irene Aldana', result: 'W', method: 'Decisão Unânime', opponent_rank: '#4 WBW', quality_score: 5, quality_label: 'Excelente', note: 'Controlou Aldana no clinch e contra a grade durante três rounds. Ex-desafiante de título neutralizada.' },
          { date: 'Abr 2024', opponent: 'Germaine de Randamie', result: 'W', method: 'Decisão Unânime', opponent_rank: '#6 WBW', quality_score: 5, quality_label: 'Excelente', note: 'Derrotou uma ex-campeã da divisão. Pressão constante anulou o striking de Randamie.' },
          { date: 'Jul 2023', opponent: 'Chelsea Chandler', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Vitória em três rounds contra adversária abaixo do ranking. Trabalho tático padrão.' },
          { date: 'Abr 2023', opponent: 'Karol Rosa', result: 'W', method: 'Decisão Unânime', opponent_rank: '#11 WBW', quality_score: 3, quality_label: 'Bom', note: 'Decisão clara contra top 15. Consolidou o ritmo que repetiria nas lutas seguintes.' },
        ],
        layoff_warning: null,
      },
      fighter2: {
        nome: 'Joselyne Edwards',
        color: 'blue',
        momentum_score: 8,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note:
          'Quatro vitórias seguidas desde junho de 2024, com três finalizações no caminho. A mais recente foi mata-leão contra Nora Cornolle em rematch em fevereiro de 2026, em apenas dois rounds. Antes disso nocauteou Priscila Cachoeira em R1 e Chelsea Chandler por TKO em R1. A evolução do jogo em 2025 incluiu poder de striking crescente que não existia nas fases iniciais da carreira.',
        recent_fights: [
          { date: 'Fev 2026', opponent: 'Nora Cornolle', result: 'W', method: 'Submissão (mata-leão) R2', opponent_rank: '#14 WBW', quality_score: 3, quality_label: 'Bom', note: 'Rematch em que Edwards venceu por submissão. Mostrou o jogo de solo mais agressivo.' },
          { date: 'Ago 2025', opponent: 'Priscila Cachoeira', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Nocaute em R1. Demonstração do poder de mão que se desenvolveu em 2025.' },
          { date: 'Abr 2025', opponent: 'Chelsea Chandler', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'TKO no R1 contra a mesma Chandler que Dumont tinha vencido por decisão em 2023. Diferença de método revela os arcos opostos.' },
          { date: 'Out 2024', opponent: 'Tamires Vidal', result: 'W', method: 'Submissão (face crank) R3', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Finalização por face crank no terceiro round. Variedade no jogo de finalização.' },
          { date: 'Jun 2024', opponent: 'Ailín Pérez', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Única derrota recente. Perdeu no volume e no posicionamento contra adversária de estilo similar ao de Dumont.' },
        ],
        layoff_warning: null,
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Dumont', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '5V-0D (100%)', contra_top5: '2V-0D' },
      fighter2: { nome: 'Edwards', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '4V-1D (80%)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note:
        'Chelsea Chandler é o único oponente em comum. Dumont venceu por decisão unânime em três rounds em julho de 2023, trabalhando pressão e desgaste. Edwards venceu por TKO no R1 em abril de 2025, encerrando cedo com striking. Os dois métodos refletem exatamente o que cada uma é: Dumont desgasta, Edwards finaliza. Mas o calibre dos outros adversários diferencia: Dumont enfrentou Aldana, de Randamie e Vieira, todas top 6. Edwards enfrentou Cachoeira, Cornolle e Chandler, todas fora do top 10 no momento da luta. A derrota mais recente de Edwards foi contra Ailín Pérez em junho de 2024, uma lutadora de estilo pressão e volume, exatamente o estilo de Dumont, o que sinaliza que a desafiante pode ter dificuldade quando não pode buscar a finalização rápida.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Vitórias por Decisão (%)', valueA: 85, valueB: 29, maxVal: 100, format: 'percent', note: 'Dumont ganha nos cartões, Edwards finaliza.' },
        { label: 'Vitórias por Finalização (%)', valueA: 15, valueB: 71, maxVal: 100, format: 'percent', note: 'Edwards tem 12 finalizações em 17 vitórias.' },
        { label: 'Idade', valueA: 35, valueB: 30, maxVal: 40, format: 'integer', reverseWinner: true, note: 'Edwards 5 anos mais jovem.' },
        { label: 'Alcance (cm)', valueA: 170, valueB: 178, maxVal: 190, format: 'integer', note: 'Edwards 8 cm mais longa.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '35 anos', fighter2: '30 anos', note: 'Edwards é 5 anos mais jovem.' },
        { label: 'Altura', fighter1: '1,70m', fighter2: '1,73m', note: 'Diferença de 3 centímetros a favor de Edwards.' },
        { label: 'Envergadura', fighter1: '170cm', fighter2: '178cm', note: '8 centímetros de alcance a mais para Edwards.' },
        { label: 'Postura', fighter1: 'Sanda', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'Syndicate MMA', fighter2: 'Kings MMA', note: null },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume de Striking', advantage: 'fighter1', gap: 2, note: 'Dumont aplica mais volume em três rounds. Padrão histórico.' },
        { label: 'Poder de Nocaute', advantage: 'fighter2', gap: 3, note: 'Edwards tem 7 KO/TKO em 17 vitórias. Dumont tem zero KOs no UFC.' },
        { label: 'Clinch e Pressão na Grade', advantage: 'fighter1', gap: 3, note: 'A especialidade de Dumont. Desgasta oponentes sem expor queixo.' },
        { label: 'Jogo de Finalização', advantage: 'fighter2', gap: 3, note: 'Edwards tem 12 finalizações totais, 5 delas via submissão. Dumont tem 2 submissões na carreira.' },
        { label: 'IQ de Cartão (3 rounds)', advantage: 'fighter1', gap: 3, note: 'Dumont é especialista em vencer nos cartões. 11 vitórias por decisão em 13 totais.' },
        { label: 'Nível de Competição Recente', advantage: 'fighter1', gap: 4, note: 'Dumont enfrentou Aldana, Randamie, Vieira. Edwards enfrentou Cachoeira, Chandler, Cornolle.' },
      ],
      summary:
        'Dumont tem vantagem em 4 das 6 dimensões, incluindo a mais importante para um round de três: IQ de cartão. Edwards tem poder e finalização como ameaças, mas precisa conectar antes do desgaste. Se a luta chegar no R3, a matemática favorece Dumont.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Dumont', ko_tko: { count: 0, percent: 0 }, submission: { count: 2, percent: 15 }, decision: { count: 11, percent: 85 }, total_wins: 13 },
      fighter2: { nome: 'Edwards', ko_tko: { count: 7, percent: 41 }, submission: { count: 5, percent: 29 }, decision: { count: 5, percent: 29 }, total_wins: 17 },
      insight:
        'Perfis opostos. Dumont não tem um único KO no UFC e vence 85 por cento das lutas nos cartões. Edwards finaliza 71 por cento das vezes, distribuído entre striking e submissão. A tese implícita de Edwards é que o R1 ou R2 decidem. A tese implícita de Dumont é que três rounds inteiros resolvem.',
    },

    previsao_final: {
      winner_name: 'Norma Dumont',
      winner_side: 'fighter1',
      predicted_method: 'Decisão Unânime',
      confidence_score: 7,
      confidence_label: 'MÉDIA-ALTA',
      explanation:
        'A análise aponta Dumont pelo motivo mais simples e mais difícil de derrotar: ela faz exatamente a mesma luta há dois anos, sempre em três rounds, e venceu top 5 fazendo isso. Edwards tem poder real e finalização real, mas precisa conectar uma das duas dentro de 15 minutos contra uma lutadora que absorve para impor padrão. A última derrota de Edwards foi para Ailín Pérez, uma lutadora de volume e pressão, o mesmo arquétipo de Dumont, e foi por decisão unânime. Esse precedente é direto. O caminho para Dumont é fechar no clinch cedo, trabalhar joelhadas e volume de corpo contra a grade, neutralizar o alcance de Edwards, e ganhar no acúmulo. A convicção é 7 porque Edwards realmente pode nocautear em um round aberto, o que manteria a luta fora do território de Dumont. Não é 8 ou 9 porque Edwards cresceu em 2025 e o poder dela evoluiu, e porque Dumont veio do split decision duro contra Vieira, o que deixa dúvida se o método ainda vende 30-27 limpo contra uma finalizadora com perigo real.',
      x_factor: {
        title: 'A decisão de Edwards no R1',
        description:
          'Se Edwards aceitar o ritmo de Dumont e tentar trabalhar no cartão, a luta vai para o arquétipo em que Dumont venceu Aldana, de Randamie e Vieira. Se Edwards empurrar troca aberta no R1, o poder dela entra em jogo e o queixo de Dumont nunca foi testado em nível elite de striking puro. A decisão estratégica dela nos primeiros três minutos decide o tom da luta.',
      },
      upset_alert: {
        title: 'Alerta de zebra: Edwards finaliza cedo',
        description:
          'Edwards está em momento físico e técnico ascendente, 30 anos, três finalizações nas últimas quatro, incluindo mata-leão em Cornolle. Dumont nunca foi finalizada na carreira UFC, mas absorve striking para impor pressão. Se Edwards conectar um cross limpo no primeiro minuto ou achar a costas em uma transição, a luta acaba no R1. É um cenário concreto, não especulação.',
      },
      probabilities: {
        fighter1: { nome: 'Dumont', percent: 66 },
        fighter2: { nome: 'Edwards', percent: 31 },
        draw: 3,
      },
      conviction: {
        thesis:
          'A tese é: Norma Dumont vence porque, primeiro, ela executa há dois anos o mesmo padrão de pressão contra a grade e volume em três rounds, padrão que derrotou Irene Aldana, Germaine de Randamie e Ketlen Vieira, todas top 6 da divisão, segundo UFCStats e histórico recente verificado. Segundo, Edwards perdeu a última luta contra o arquétipo exato de Dumont, Ailín Pérez em junho de 2024, por decisão unânime em uma luta em que volume e clinch definiram o resultado. Terceiro, o teste de calibre é direto: Dumont acumulou stats contra top 6 consistente, Edwards construiu a sequência atual contra adversárias fora do top 10 no momento da luta, incluindo a mesma Chelsea Chandler que Dumont venceu por decisão em 2023. O caminho é Dumont fechar distância cedo, neutralizar os 8 centímetros de alcance de Edwards no clinch, trabalhar joelhadas no corpo e cotoveladas curtas, e manter o ritmo por 15 minutos. Isso desmorona se Edwards conectar um contra-golpe limpo de cross ou uppercut no primeiro minuto, ou se encaixar uma transição de solo para as costas como fez contra Cornolle.',
        conviction_score: 7,
        conviction_rationale:
          'Convicção 7 porque a tese se apoia em três pilares independentes: histórico consistente de Dumont contra top 5 por dois anos, precedente direto de derrota de Edwards para o arquétipo de pressão em Ailín Pérez, e diferença verificável de calibre de adversários. Não é 8 ou 9 porque Edwards tem poder de nocaute real que pode interromper o padrão, e o split decision recente contra Vieira mostrou que o método de Dumont está ficando mais difícil de vender aos juízes. Não é 5 ou 6 porque as evidências são convergentes e os pilares são independentes.',
        conviction_breakers: [
          'Edwards conecta um cross limpo nos primeiros dois minutos do R1. O queixo de Dumont nunca foi testado em nível de poder verdadeiro.',
          'Edwards consegue defender o clinch na grade por rounds inteiros e mantém distância. Sem a pressão, Dumont vira lutadora comum de volume.',
          'Os juízes não recompensam mais a pressão de clinch sem dano visível. Luta com Vieira quase foi decisão dividida contra, e esta aqui pode virar.',
          'Edwards encontra transição de solo para as costas como contra Cornolle. Dumont nunca foi finalizada, mas também nunca enfrentou alguém que tivesse finalizado três das últimas quatro.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 31,
          key_scenario:
            'Edwards usa os 8 centímetros de alcance para manter distância no R1, trabalha jab longo e teep para o corpo, obriga Dumont a pressionar contra a grade em baixa eficiência. No primeiro erro de entrada de Dumont, Edwards conecta cross ou hook de poder. Alternativa: em uma transição de solo, Edwards busca as costas e finaliza via mata-leão como contra Cornolle em fevereiro de 2026. Qualquer um dos dois caminhos acaba a luta antes do R3, onde Dumont é superior.',
          required_conditions: [
            'Manter distância no R1, usar jab e teep para limitar a entrada de Dumont',
            'Conectar um golpe de poder limpo em uma troca inicial ou uma transição de solo',
            'Não aceitar o clinch prolongado na grade',
            'Encerrar antes do R3, onde o ritmo favorece Dumont',
          ],
          historical_precedent: 'Edwards contra Nora Cornolle em fevereiro de 2026: mata-leão no R2 via transição de solo agressiva. Mesma receita de ataque direto, mas contra uma top 3 ao invés de lutadora fora do ranking.',
        },
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Norma Dumont',
            odds: '-230',
            reasoning: 'A análise aponta Dumont pelo padrão consistente contra top 5 e pelo precedente direto de Edwards ter perdido para o arquétipo pressão de Ailín Pérez. Preço alto mas consistente com a leitura. Desmorona se Edwards conectar cedo ou achar transição de solo.',
          },
          {
            type: 'Método',
            pick: 'Dumont por decisão',
            odds: '-150',
            reasoning: 'Dumont tem 11 vitórias por decisão em 13 totais, zero KO e duas submissões na carreira. Se vence, vence nos cartões. Esse é o caminho mais provável dentro do cenário mais provável.',
          },
          {
            type: 'Total de Rounds',
            pick: 'Passa de 2,5 rounds',
            odds: '-180',
            reasoning: 'Dumont nunca finalizou no UFC e Edwards precisa de abertura para finalizar. Arquétipo Dumont versus finalizadora historicamente vai até a decisão. Desmorona se Edwards encaixar finalização rápida, algo que aconteceu em três das últimas quatro.',
          },
        ],
        best_bet: {
          pick: 'Dumont por decisão em -150',
          reasoning: 'A combinação mais eficiente: casa com a leitura de método de Dumont e paga melhor que o moneyline direto. Convicção 7 permite esse nível de especificidade sem forçar.',
        },
      },
      key_stats: [
        { value: '85%', label: 'Vitórias de Dumont por decisão', sublabel: '11 em 13 vitórias totais. Identidade tática definida.' },
        { value: '3/4', label: 'Últimas vitórias de Edwards por finalização', sublabel: 'Cornolle sub, Cachoeira KO, Chandler TKO. Poder real em ascensão.' },
        { value: '5V-0D', label: 'Sequência atual de Dumont', sublabel: 'Todas contra top 11 ou melhor, incluindo três top 5.' },
      ],
      odds: {
        fighter1_odds: '-230',
        fighter2_odds: '+190',
        fighter1_name: 'Dumont',
        fighter2_name: 'Edwards',
        source: 'Bet365, DraftKings, FanDuel, BetMGM em 24 de abril de 2026.',
      },
      armadilha: {
        titulo: 'Armadilha: Edwards por finalização',
        descricao:
          'O mercado paga Edwards por finalização em torno de +800 porque as três últimas vitórias foram finalizações. Mas Dumont nunca foi finalizada em 15 lutas profissionais e o arquétipo dela é exatamente neutralizar oponentes que buscam finalização, pressão na grade tira o espaço de scramble. A aposta de valor no Edwards lado é o moneyline +190, não o método específico. Apostar em finalização é dobrar contra o histórico de Dumont.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'dumont-vs-edwards');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
