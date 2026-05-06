import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'jackson-vs-barcelos',
  evento_id: null,
  slug: 'jackson-vs-barcelos',
  titulo: 'Jackson vs Barcelos: O Poder e o Veterano',
  subtitulo:
    'Montel Jackson vem de derrota dividida contra Deiveson Figueiredo, mantém o número 14 do ranking, 8 KOs em 15 vitórias. Raoni Barcelos está em três decisões unânimes seguidas, incluindo vitórias sobre Ricky Simón e Cody Garbrandt, aos 38 anos no melhor momento técnico da carreira.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,78m', envergadura: '192cm', idade: 33, academia: 'Red Schafer MMA / Pura Vida BJJ' },
      fighter2: { altura: '1,70m', envergadura: '170cm', idade: 38, academia: 'Top Brother' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Decisão Unânime',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Montel Jackson',
    apelido: 'Quik',
    record: '15-3-0',
    ranking: '#14 Peso-Galo',
    ultimasLutas: [
      { result: 'L', opponent: 'Deiveson Figueiredo', method: 'Decisão Dividida', event: 'UFC Fight Night 261' },
      { result: 'W', opponent: 'Daniel Marcos', method: 'Decisão Unânime', event: 'UFC on ESPN 67' },
      { result: 'W', opponent: 'Da\'Mon Blackshear', method: 'KO R1 (18 segundos)', event: 'UFC on ESPN 59' },
    ],
  },
  fighter2_info: {
    nome: 'Raoni Barcelos',
    apelido: 'sem apelido consolidado',
    record: '21-5-0',
    ranking: 'Sem ranking no top 15',
    ultimasLutas: [
      { result: 'W', opponent: 'Ricky Simón', method: 'Decisão Unânime', event: 'UFC Fight Night 264' },
      { result: 'W', opponent: 'Cody Garbrandt', method: 'Decisão Unânime', event: 'UFC on ESPN 69' },
      { result: 'W', opponent: 'Payton Talbott', method: 'Decisão Unânime', event: 'UFC 311' },
    ],
  },
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  categoria_peso: 'Peso-Galo (135 lbs)',
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
      categoria_peso: 'Peso-Galo (135 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'O Poder e o Veterano',
      tagline_sub: 'Jackson tem alcance de 192 centímetros e mão pesada. Barcelos vem de três vitórias contra nomes sérios.',
      fighter1: {
        nome_completo: 'Montel "Quik" Jackson',
        apelido: 'Quik',
        sobrenome: 'Jackson',
        record: '15-3-0',
        ranking: '#14 Peso-Galo',
        info_extra: 'Milwaukee, Wisconsin | 33 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/JACKSON_MONTEL_L_04-25.png?itok=6upYAlWP',
      },
      fighter2: {
        nome_completo: 'Raoni Barcelos',
        apelido: '',
        sobrenome: 'Barcelos',
        record: '21-5-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Rio de Janeiro, Brasil | 38 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/BARCELOS_RAONI_L_01-18.png?itok=TesqOAZR',
      },
    },

    qualitative_insight: {
      tag: 'O PARADOXO',
      headline: 'Número 14 Contra o Não Ranqueado em Melhor Forma',
      insight:
        'O ranking engana essa luta. Montel Jackson é o número 14 oficial, Raoni Barcelos é o não ranqueado, mas a forma atual inverte a posição. Barcelos vem de três decisões unânimes seguidas contra Ricky Simón, Cody Garbrandt e Payton Talbott, todos talentos atuais ou recentes do top 15. Jackson vem de derrota dividida contra Deiveson Figueiredo, ex-campeão do peso-mosca em migração, e antes disso uma vitória por decisão contra Daniel Marcos. A diferença de trajetória é real. Cabe a ressalva: Barcelos tem 38 anos, Jackson tem 33. O cinco anos de diferença é significativo em uma divisão onde velocidade de mão e reflexo definem pontuação. O paradoxo da luta é que Barcelos é o mais "velho" do papel, mas está em momento técnico superior, enquanto Jackson tem atributos físicos melhores mas está vindo de um revés.',
      tension: {
        truth_a: 'Jackson tem 22 centímetros de alcance a mais que Barcelos, mão pesada documentada em 8 KOs de 15 vitórias, e duas finalizações em 18 segundos ou menos na carreira UFC. Se conectar, acaba.',
        truth_b: 'Barcelos é o único lutador do peso-galo em três decisões unânimes seguidas contra ex-campeões ou ranqueados. O jogo é de pressão constante, boxe técnico em distância média, e controle de posicionamento em três rounds. Não é luta de uma tacada, é luta de acumulação que Jackson historicamente não gosta.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Montel Jackson',
        color: 'red',
        momentum_score: 5,
        momentum_label: 'Estável (com ressalvas)',
        momentum_trend: 'stable',
        momentum_note:
          'A última derrota foi por split decision contra Deiveson Figueiredo em outubro de 2025, em uma luta competitiva onde os scorecards foram divididos. Antes, venceu Daniel Marcos por UD e Da\'Mon Blackshear por KO em 18 segundos. O arco é de um lutador de poder com queixo decente, em momento estável mas não em crescimento acelerado. O ranking 14 reflete o passado mais que o presente.',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Deiveson Figueiredo', result: 'L', method: 'Decisão Dividida', opponent_rank: 'Ex-Campeão MW', quality_score: 5, quality_label: 'Excelente', note: 'Perdeu por split decision contra ex-campeão do mosca em luta competitiva. Mostrou que aguenta ritmo de top 5.' },
          { date: 'Mai 2025', opponent: 'Daniel Marcos', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Venceu o mesmo peruano que derrotou Davey Grant em 2023. Decisão clara.' },
          { date: 'Jul 2024', opponent: 'Da\'Mon Blackshear', result: 'W', method: 'KO R1 (18 segundos)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Nocaute em 18 segundos. Poder de mão exposto de forma brutal.' },
          { date: 'Abr 2023', opponent: 'Rani Yahya', result: 'W', method: 'KO R1 (3:42)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Nocaute em R1 contra veterano brasileiro. Padrão de finalização explosiva.' },
          { date: 'Nov 2022', opponent: 'Julio Arce', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Decisão clara em três rounds. Volume controlado.' },
        ],
        layoff_warning: null,
      },
      fighter2: {
        nome: 'Raoni Barcelos',
        color: 'blue',
        momentum_score: 9,
        momentum_label: 'Em Alta Absoluta',
        momentum_trend: 'ascending',
        momentum_note:
          'Três decisões unânimes seguidas contra Ricky Simón, Cody Garbrandt e Payton Talbott, os três dentro ou próximos ao top 15 do peso-galo. É a sequência mais impressionante do não ranqueado na divisão nos últimos 12 meses. Aos 38 anos, o veterano brasileiro está em um momento técnico de refinamento máximo, executando boxe de precisão e controle de ritmo em três rounds.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Ricky Simón', result: 'W', method: 'Decisão Unânime', opponent_rank: '#11 BW', quality_score: 4, quality_label: 'Muito Bom', note: 'Decisão unânime sobre top 15. Controle tático por três rounds.' },
          { date: 'Jun 2025', opponent: 'Cody Garbrandt', result: 'W', method: 'Decisão Unânime', opponent_rank: 'Ex-Campeão BW', quality_score: 5, quality_label: 'Excelente', note: 'Vitória sobre ex-campeão do peso-galo. Boxe técnico superou poder de mão.' },
          { date: 'Jan 2025', opponent: 'Payton Talbott', result: 'W', method: 'Decisão Unânime', opponent_rank: '#15 BW', quality_score: 4, quality_label: 'Muito Bom', note: 'Freou prospect invicto que era favorito. Demonstração de IQ de luta.' },
          { date: 'Fev 2024', opponent: 'Cristian Quiñónez', result: 'W', method: 'Submissão (mata-leão) R3', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Mata-leão no R3. Capacidade de finalizar tardio.' },
          { date: 'Ago 2023', opponent: 'Kyler Phillips', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Última derrota. Antes da sequência atual de quatro vitórias.' },
        ],
        layoff_warning: null,
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Jackson', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '3V-1D', contra_top5: '0V-1D (ex-campeão Figueiredo)' },
      fighter2: { nome: 'Barcelos', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '4V-0D', contra_top5: '1V-0D (ex-campeão Garbrandt)' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Nenhum oponente em comum direto, mas existe cruzamento interessante: Daniel Marcos, que Jackson venceu por decisão unânime em maio de 2025, é o mesmo que venceu Davey Grant. Não é suficiente para estabelecer paralelo fechado. O ponto crítico é o calibre recente: Barcelos venceu três ranqueados ou ex-campeões seguidos, Jackson venceu um lutador fora do top 15 e perdeu para o ex-campeão Figueiredo. Na soma atual, o não ranqueado Barcelos tem currículo recente superior ao ranqueado Jackson.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Vitórias por KO/TKO (%)', valueA: 53, valueB: 38, maxVal: 100, format: 'percent', note: 'Jackson é o finalizador por striking. Barcelos é mais equilibrado.' },
        { label: 'Vitórias por Decisão (%)', valueA: 40, valueB: 48, maxVal: 100, format: 'percent', note: 'Barcelos leva mais luta para o cartão, padrão de 3 decisões seguidas.' },
        { label: 'Idade', valueA: 33, valueB: 38, maxVal: 45, format: 'integer', reverseWinner: true, note: 'Jackson 5 anos mais jovem.' },
        { label: 'Alcance (cm)', valueA: 192, valueB: 170, maxVal: 200, format: 'integer', note: 'Jackson tem 22 centímetros de alcance a mais, gap enorme na divisão.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '38 anos', note: 'Barcelos 5 anos mais velho.' },
        { label: 'Altura', fighter1: '1,78m', fighter2: '1,70m', note: 'Jackson 8 centímetros mais alto.' },
        { label: 'Envergadura', fighter1: '192cm', fighter2: '170cm', note: 'Diferença colossal de 22 centímetros. Raro no peso-galo.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'Red Schafer MMA', fighter2: 'Top Brother', note: null },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Distância', advantage: 'fighter1', gap: 3, note: 'Jackson tem 22 centímetros de alcance, vantagem estrutural em distância média.' },
        { label: 'Poder de Nocaute', advantage: 'fighter1', gap: 3, note: 'Jackson tem 8 KOs incluindo dois em 18 segundos ou menos.' },
        { label: 'Boxe Técnico em Curta Distância', advantage: 'fighter2', gap: 3, note: 'Barcelos tem 15 anos de boxe e jiu-jitsu, técnica refinada em clinch.' },
        { label: 'Controle de Ritmo em 3 Rounds', advantage: 'fighter2', gap: 3, note: 'Barcelos venceu 3 UDs seguidas. Jackson perdeu SD para Figueiredo em luta que precisou estender.' },
        { label: 'IQ de Luta UFC', advantage: 'fighter2', gap: 2, note: 'Barcelos tem 11 lutas UFC contra lutadores ranqueados. Jackson tem experiência similar mas menos consistente.' },
        { label: 'Qualidade de Adversários Recentes', advantage: 'fighter2', gap: 2, note: 'Barcelos venceu Garbrandt, Simón e Talbott. Jackson venceu Marcos e perdeu para Figueiredo.' },
      ],
      summary:
        'Barcelos tem vantagem em 4 das 6 dimensões, todas ligadas a cartão e técnica em três rounds. Jackson tem vantagem em striking puro e poder, as duas ferramentas de encerrar cedo. A luta decide onde o ritmo se estabelece.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Jackson', ko_tko: { count: 8, percent: 53 }, submission: { count: 1, percent: 7 }, decision: { count: 6, percent: 40 }, total_wins: 15 },
      fighter2: { nome: 'Barcelos', ko_tko: { count: 8, percent: 38 }, submission: { count: 3, percent: 14 }, decision: { count: 10, percent: 48 }, total_wins: 21 },
      insight:
        'Jackson é o finalizador por striking, Barcelos é o vencedor balanceado. Ambos têm 8 KOs na carreira, mas Jackson em 15 vitórias e Barcelos em 21. O ritmo de finalização por KO de Jackson é mais denso. Por outro lado, Barcelos nunca foi finalizado, enquanto Jackson sofreu três decisões como derrotas, todas em rounds completos, nenhuma por KO ou submissão.',
    },

    previsao_final: {
      winner_name: 'Raoni Barcelos',
      winner_side: 'fighter2',
      predicted_method: 'Decisão Unânime',
      confidence_score: 6,
      confidence_label: 'MÉDIA',
      explanation:
        'A análise aponta Barcelos por convergência de três fatores. Primeiro, o calibre de adversários recentes favorece o brasileiro claramente: vitórias sobre Simón, Garbrandt e Talbott são mais sólidas que Jackson vencer Marcos e perder para Figueiredo. Segundo, o estilo: Barcelos é especialista em decisão em três rounds, Jackson precisa conectar para vencer e historicamente quando não conecta vai para decisão e nem sempre vence. Terceiro, a dinâmica geracional inversa: Barcelos aos 38 é mais refinado que Jackson aos 33, o gap físico existe mas é neutralizado pelo boxe técnico em curta distância. A ressalva é importante: Jackson tem 22 centímetros de alcance e pode acabar a luta com um contra-golpe limpo em qualquer momento. Esse é o caminho dele. Se aceitar troca em distância média por três rounds, Barcelos ganha no acúmulo. A convicção é 6 porque o poder de Jackson é real e pode acabar em qualquer troca. Não é 7 porque o risco de KO está sempre presente. Não é 5 porque as evidências de forma e calibre recente de Barcelos são consistentes.',
      x_factor: {
        title: 'O alcance de 22 centímetros',
        description:
          'Barcelos nunca enfrentou alguém com 22 centímetros de alcance a mais no peso-galo. É uma diferença estrutural rara. Se Jackson conseguir manter distância média por dois rounds e trabalhar jab longo, o brasileiro pode entrar em desespero e arriscar. Se Barcelos conseguir fechar distância e trabalhar clinch, o alcance anula.',
      },
      upset_alert: {
        title: 'Alerta de zebra: Jackson conecta um contra-ataque',
        description:
          'Jackson tem 8 KOs em 15 vitórias, dois deles em 18 segundos ou menos. Barcelos nunca foi nocauteado na carreira UFC, mas tem 38 anos e a recuperação após um golpe limpo é mais lenta que antes. Um hook ou cross em timing de entrada pode terminar a luta antes do tático acontecer.',
      },
      probabilities: {
        fighter1: { nome: 'Jackson', percent: 39 },
        fighter2: { nome: 'Barcelos', percent: 58 },
        draw: 3,
      },
      conviction: {
        thesis:
          'A tese é: Raoni Barcelos vence porque, primeiro, a sequência recente dele é 3-0 em decisões unânimes contra Ricky Simón, Cody Garbrandt e Payton Talbott, todos dentro ou próximos ao top 15, sinalizando forma técnica superior à do Jackson que vem de derrota dividida para Figueiredo. Segundo, o estilo beneficia Barcelos: Jackson tem 53 por cento de vitórias por KO e 40 por cento por decisão, ou seja, quando não finaliza, o veredito fica em aberto; Barcelos tem 48 por cento de vitórias por decisão e padrão executado em três rounds que neutraliza finalizadores. Terceiro, o paradoxo geracional inverso: Barcelos aos 38 tem mais anos de carreira profissional e está em refinamento técnico, enquanto Jackson aos 33 está mais ligado a atributos físicos que não necessariamente compensam gap técnico. O caminho é Barcelos fechar distância cedo, trabalhar clinch para neutralizar os 22 centímetros de alcance de Jackson, acumular golpes curtos e rodar em três rounds de volume constante. Isso desmorona se Jackson conectar um contra-golpe limpo em uma entrada, cenário que aconteceu duas vezes na carreira com finalizações em menos de 20 segundos.',
        conviction_score: 6,
        conviction_rationale:
          'Convicção 6 porque a tese se apoia em calibre de adversários recentes mensurável e estilo de vencedor em três rounds documentado. Não é 7-8 porque Jackson tem poder real e 22 centímetros de alcance é gap físico raro no peso-galo que pode inverter a luta com um único golpe. Não é 4-5 porque as evidências de forma atual convergem e são independentes entre si.',
        conviction_breakers: [
          'Jackson conecta um cross de contra-ataque em uma entrada de Barcelos dentro dos primeiros 5 minutos',
          'Barcelos não consegue fechar a distância contra os 22 centímetros de alcance e fica preso no jab do americano',
          'Jackson aceita o clinch e usa força física para controlar em vez de trocar',
          'Os juízes recompensam striking de distância de Jackson em vez do volume curto de Barcelos',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 39,
          key_scenario:
            'Jackson usa os 22 centímetros de alcance para manter Barcelos fora do clinch nos primeiros 3 minutos do R1. Trabalha jab, cross e low kick de distância para acumular volume. Quando Barcelos tentar fechar distância, Jackson conecta um contra-golpe limpo em timing de entrada, como fez contra Blackshear em julho de 2024 em 18 segundos. Se a luta não terminar no R1, Jackson rege ritmo por três rounds e ganha decisão via volume de distância, replicando o padrão de Daniel Marcos em maio de 2025.',
          required_conditions: [
            'Manter distância nos primeiros 3 minutos e impedir fechamento de clinch',
            'Usar o jab longo como ferramenta principal para acumular volume',
            'Conectar contra-golpe em uma das entradas de Barcelos',
            'Não aceitar clinch prolongado onde o gap de alcance se neutraliza',
          ],
          historical_precedent: 'Jackson contra Da\'Mon Blackshear em julho de 2024: KO em 18 segundos com contra-golpe limpo em entrada precipitada do adversário. Receita idêntica pode funcionar se Barcelos entrar ansioso.',
        },
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline (Contrarian)',
            pick: 'Raoni Barcelos',
            odds: '+144',
            reasoning: 'Pick contrária ao mercado. O mercado precifica Jackson em -186 por status de ranqueado e poder documentado, mas a leitura aponta Barcelos pelo calibre de adversários recentes (Simón, Garbrandt, Talbott) e estilo de três rounds. +144 paga quase 3-2 em tese sólida. Desmorona se Jackson conectar contra-golpe limpo.',
          },
          {
            type: 'Método',
            pick: 'Barcelos por decisão',
            odds: '+260',
            reasoning: 'Barcelos está em 3 UDs seguidas e 48 por cento de vitórias totais por decisão. Se vence, o método mais provável é decisão. Combinação de pick contrária com método específico amplifica o valor.',
          },
          {
            type: 'Rounds',
            pick: 'Passa de 2,5 rounds',
            odds: '-140',
            reasoning: 'Barcelos leva luta para decisão e Jackson quando não finaliza cedo também vai até o cartão. Luta entre dois lutadores técnicos tende a estender.',
          },
        ],
        best_bet: {
          pick: 'Barcelos ML em +144',
          reasoning: 'Pick contrária ao mercado onde a convicção da análise diverge do preço. +144 é valor real se a tese de calibre recente e estilo em três rounds se sustentar. Prop de método em +260 é alternativa mais alavancada mas também mais arriscada.',
        },
      },
      key_stats: [
        { value: '3-0', label: 'Sequência atual de Barcelos em decisões unânimes', sublabel: 'Vitórias sobre Simón, Garbrandt e Talbott.' },
        { value: '22cm', label: 'Vantagem de alcance de Jackson sobre Barcelos', sublabel: 'Gap físico raro no peso-galo.' },
        { value: '18s', label: 'Nocaute mais rápido de Jackson na carreira UFC', sublabel: 'Sobre Da\'Mon Blackshear em julho de 2024.' },
      ],
      odds: {
        fighter1_odds: '-186',
        fighter2_odds: '+144',
        fighter1_name: 'Jackson',
        fighter2_name: 'Barcelos',
        source: 'bet365 e DraftKings em abril de 2026. Jackson favorito claro pelo ranking e poder documentado.',
      },
      armadilha: {
        titulo: 'Armadilha: Jackson ML pesado em -186',
        descricao:
          'O mercado precifica Jackson em -186 principalmente pelo status de ranqueado #14 e pelo poder documentado em 8 KOs. Mas a sequência recente conta outra história: Jackson vem de derrota dividida contra Figueiredo, Barcelos vem de três decisões unânimes sobre Simón, Garbrandt e Talbott. O prêmio em cima de Jackson reflete reputação acumulada, não forma atual. Se a tese de calibre recente se sustenta, Barcelos em +144 é o lado de valor, não Jackson em -186.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'jackson-vs-barcelos');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
