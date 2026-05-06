import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'grant-vs-luna-martinetti',
  evento_id: null,
  slug: 'grant-vs-luna-martinetti',
  titulo: 'Grant vs Luna Martinetti: O Veterano Contra o Prospect Equatoriano',
  subtitulo:
    'Davey Grant tem 40 anos, 15-8 de carreira, vindo de finalização por guilhotina no R1 contra Charles Jourdain em outubro de 2025. Adrián Luna Martinetti faz a estreia no UFC com 17-1, sequência de 14 vitórias seguidas, 10 finalizações, e vem do nocaute sobre Vologdin no Contender Series. É o encontro entre fim de arco e ascensão jovem.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,73m', envergadura: '175cm', idade: 40, academia: 'SBG UK' },
      fighter2: { altura: '1,70m', envergadura: '175cm', idade: 30, academia: 'UFC Performance Institute Mexico City' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Finalização R1-R2 ou Decisão Unânime',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Davey Grant',
    apelido: 'Dangerous',
    record: '15-8-0',
    ranking: 'Sem ranking no top 15',
    ultimasLutas: [
      { result: 'L', opponent: 'Charles Jourdain', method: 'Submissão (guilhotina) R1', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Da\'Mon Blackshear', method: 'Decisão Unânime', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Ramon Taveras', method: 'Decisão Unânime', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Adrián Luna Martinetti',
    apelido: 'sem apelido consolidado',
    record: '17-1-0',
    ranking: 'Estreante na UFC',
    ultimasLutas: [
      { result: 'W', opponent: 'Mark Vologdin', method: 'KO R1 (1:28)', event: "Dana White's Contender Series" },
      { result: 'W', opponent: 'Defesas UWC (detalhes públicos limitados)', method: 'Finalizações', event: 'UWC' },
      { result: 'W', opponent: 'Sequência de 14 no regional equatoriano', method: 'Variadas', event: 'UWC / regional EC' },
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
      tagline: 'Final de Arco Contra Ascensão',
      tagline_sub: 'Grant aos 40 anos vindo de guilhotina no R1. Luna Martinetti chega em 17-1 com 14 vitórias seguidas.',
      fighter1: {
        nome_completo: 'Davey "Dangerous" Grant',
        apelido: 'Dangerous',
        sobrenome: 'Grant',
        record: '15-8-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Bishop Auckland, Inglaterra | 40 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/GRANT_DAVEY_L_04-25.png?itok=DfGtIIH3',
      },
      fighter2: {
        nome_completo: 'Adrián Luna Martinetti',
        apelido: '',
        sobrenome: 'Luna Martinetti',
        record: '17-1-0',
        ranking: 'Estreante na UFC',
        info_extra: 'Guayaquil, Equador | 30 anos',
        imagem_fullbody_url: null,
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Sub Defense Contra Finalizador',
      insight:
        'Davey Grant tem 5 das 8 derrotas da carreira por finalização. A mais recente foi há seis meses, guilhotina de Charles Jourdain no R1 em outubro de 2025. Adrián Luna Martinetti chega de um knockout no Contender Series em outubro de 2025, mas a identidade construída nos 14 anos da carreira é de finalizador: 10 das 17 vitórias por KO ou submissão. Essa é a matemática direta que inclina a luta. Cabe a ressalva sobre contexto: Luna Martinetti construiu os 17-1 majoritariamente no circuito equatoriano e no UWC, onde foi bicampeão do peso-galo. Não é comparável ao calibre que Grant enfrentou em oito anos de UFC, incluindo Raphael Assunção e Sean O\'Malley. Mas o padrão é difícil de ignorar: veterano com queixo e sub defense em erosão contra estreante jovem com 10 finalizações em 17 lutas.',
      tension: {
        truth_a: 'Grant é o lutador mais experiente no octógono UFC, 23 lutas profissionais, oito anos de casa, defesa de título de The Ultimate Fighter em 2015. Conhece o ritmo do terceiro round como ninguém na prelim. Se Luna Martinetti quiser correr, Grant conhece cada armadilha.',
        truth_b: 'Luna Martinetti tem 10 anos a menos, 14 vitórias seguidas, bicampeão UWC com múltiplas defesas. O nocaute de outubro de 2025 sobre Vologdin no Contender Series não foi obra do acaso, foi execução em 88 segundos com ataque linear. O jogo dele sempre fecha no R1 ou R2.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Davey Grant',
        color: 'red',
        momentum_score: 4,
        momentum_label: 'Em Recuperação',
        momentum_trend: 'descending',
        momentum_note:
          'Última luta terminou em guilhotina no R1 por Charles Jourdain em outubro de 2025. Antes duas vitórias seguidas, sobre Blackshear e Taveras, ambas por decisão unânime. A trajetória é típica do veterano de 40 anos no peso-galo: picos de desempenho seguidos de falhas pontuais em posições de finalização. Cinco das oito derrotas na carreira vieram por submissão.',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Charles Jourdain', result: 'L', method: 'Submissão (guilhotina) R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Finalizado em R1 por guilhotina. Sinal preocupante de sub defense, principalmente aos 40 anos.' },
          { date: 'Jul 2025', opponent: 'Da\'Mon Blackshear', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Três rounds de striking tático contra wrestler-grappler. Decisão clara.' },
          { date: 'Dez 2024', opponent: 'Ramon Taveras', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Decisão contra estreante. Experiência decidiu.' },
          { date: 'Jul 2023', opponent: 'Daniel Marcos', result: 'L', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Perdeu por split decision contra wrestler peruano em alta. Desgaste aos 38 anos já visível.' },
          { date: 'Mar 2023', opponent: 'Raphael Assunção', result: 'W', method: 'Finalização Técnica (triângulo invertido)', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Finalização técnica em veterano consagrado. Momento de pico técnico.' },
        ],
        layoff_warning: '6 meses desde a derrota. Tempo suficiente para recuperação física, insuficiente para mudar fundamentos aos 40 anos.',
      },
      fighter2: {
        nome: 'Adrián Luna Martinetti',
        color: 'blue',
        momentum_score: 9,
        momentum_label: 'Em Alta Absoluta',
        momentum_trend: 'ascending',
        momentum_note:
          'Catorze vitórias seguidas desde setembro de 2017, bicampeão UWC do peso-galo com três defesas, e entrada no UFC via nocaute em 88 segundos sobre Mark Vologdin no Dana White\'s Contender Series em outubro de 2025. É o arco de prospect em pico absoluto: 30 anos, técnica afiada, e momentum que a vida de lutador raramente repete. A única ressalva é que o calibre de competição no UWC é menor que o da UFC, então a estreia vai ser o primeiro teste real.',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Mark Vologdin', result: 'W', method: 'KO R1 (1:28)', opponent_rank: 'Prospect DWCS', quality_score: 3, quality_label: 'Bom', note: 'Nocaute em 88 segundos no Dana White\'s Contender Series, o que rendeu o contrato UFC.' },
          { date: '2022 – 2024', opponent: 'Três defesas UWC (nomes não confirmados em fontes abertas)', result: 'W', method: 'Finalizações', opponent_rank: 'Circuito equatoriano', quality_score: 1, quality_label: 'Ruim', note: 'Três defesas consecutivas do cinturão UWC peso-galo, todas por finalização. Detalhes específicos dos desafiantes não disponíveis em fontes públicas consolidadas.' },
          { date: 'Fev 2022', opponent: 'Conquista do título UWC (oponente não confirmado)', result: 'W', method: 'Finalização', opponent_rank: 'Circuito regional', quality_score: 1, quality_label: 'Ruim', note: 'Conquistou o cinturão UWC peso-galo. Nome específico do oponente não localizado em fontes abertas.' },
          { date: '2018-2021', opponent: 'Sequência de 14 no regional equatoriano', result: 'W', method: 'Variadas', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Sequência reconstruída após a única derrota da carreira em setembro de 2017 contra Luigui Quezada.' },
        ],
        layoff_warning: null,
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Grant', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '3V-2D', contra_top5: '0V-0D' },
      fighter2: { nome: 'Luna Martinetti', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: 'Estreante (14-0 regional)', contra_top5: 'Sem dados UFC' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Nenhum oponente em comum. A ressalva crítica de competição aqui é inversa: Grant tem números médios construídos contra top 15 e veteranos UFC, incluindo Raphael Assunção e Sean O\'Malley no passado. Luna Martinetti tem números excelentes construídos contra o circuito equatoriano e o UWC, com único teste no DWCS sendo a finalização sobre Vologdin. Não é possível comparar os números diretamente: a experiência UFC de Grant é real e pesa em cenários de adversidade, enquanto o momentum de Luna Martinetti é real mas vem de contexto de competição significativamente menor. A luta é parcialmente um teste do quanto do 14-0 regional se traduz no octógono.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Vitórias por Finalização (%)', valueA: 73, valueB: 59, maxVal: 100, format: 'percent', note: 'Ambos são finalizadores em carreira, mas Grant sofre mais derrotas por sub.' },
        { label: 'Derrotas por Submissão', valueA: 5, valueB: 0, maxVal: 8, format: 'integer', reverseWinner: true, note: 'Grant caiu em 5 das 8 derrotas. Luna Martinetti só tem uma derrota e foi por decisão.' },
        { label: 'Idade', valueA: 40, valueB: 30, maxVal: 45, format: 'integer', reverseWinner: true, note: 'Diferença geracional de 10 anos.' },
        { label: 'Vitórias por KO/TKO (%)', valueA: 27, valueB: 24, maxVal: 100, format: 'percent', note: 'Poder de striking similar, mas Luna Martinetti mostrou execução limpa contra Vologdin.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '40 anos', fighter2: '30 anos', note: 'Luna Martinetti 10 anos mais jovem.' },
        { label: 'Altura', fighter1: '1,73m', fighter2: '1,70m', note: 'Grant 3 centímetros mais alto.' },
        { label: 'Envergadura', fighter1: '175cm', fighter2: '175cm', note: 'Alcance igual.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'SBG UK', fighter2: 'UFC PI México', note: 'Luna Martinetti treina no novo centro da UFC na Cidade do México.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Distância', advantage: 'fighter1', gap: 2, note: 'Grant tem experiência UFC de oito anos, já enfrentou strikers táticos.' },
        { label: 'Poder de Finalização', advantage: 'fighter2', gap: 2, note: 'Luna Martinetti tem 10 finalizações em 17 vitórias, incluindo KO em 88 segundos recente.' },
        { label: 'Grappling Ofensivo', advantage: 'fighter2', gap: 2, note: 'Luna Martinetti tem 6 submissões na carreira, jogo de solo ativo.' },
        { label: 'Defesa de Submissão', advantage: 'fighter2', gap: 3, note: 'Grant sofreu 5 finalizações na carreira. Luna Martinetti só perdeu uma vez e foi por decisão.' },
        { label: 'Experiência em Luta UFC', advantage: 'fighter1', gap: 5, note: 'Grant tem 14 lutas UFC desde 2015. Luna Martinetti estreia.' },
        { label: 'Cardio em 3 rounds', advantage: 'fighter2', gap: 2, note: 'Luna Martinetti tem 30 anos no pico físico. Grant aos 40 enfrenta desgaste natural.' },
      ],
      summary:
        'Luna Martinetti tem vantagem em 4 das 6 dimensões, incluindo as duas mais decisivas para esse matchup: defesa de submissão e pico físico. Grant tem a experiência UFC como ferramenta, mas experiência não substitui queixo nem recuperação física aos 40 anos.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Grant', ko_tko: { count: 4, percent: 27 }, submission: { count: 7, percent: 47 }, decision: { count: 4, percent: 27 }, total_wins: 15 },
      fighter2: { nome: 'Luna Martinetti', ko_tko: { count: 4, percent: 24 }, submission: { count: 6, percent: 35 }, decision: { count: 7, percent: 41 }, total_wins: 17 },
      insight:
        'Distribuição similar em carreira total, mas com diferença de trajetória: Grant construiu 47 por cento de finalizações por submissão no circuito regional britânico jovem, muitas das decisões vieram no UFC com ritmo de três rounds. Luna Martinetti tem 41 por cento por decisão no UWC regional onde lutas iam para 25 minutos em defesa de título. O perfil é convergente, mas a fase de carreira é oposta.',
    },

    previsao_final: {
      winner_name: 'Adrián Luna Martinetti',
      winner_side: 'fighter2',
      predicted_method: 'Finalização R1-R2 ou Decisão Unânime',
      confidence_score: 6,
      confidence_label: 'MÉDIA',
      explanation:
        'A análise aponta Luna Martinetti por três pilares. Primeiro, a matemática de sub defense: Grant perdeu cinco das oito lutas por finalização, incluindo guilhotina no R1 há seis meses. Luna Martinetti tem seis submissões em 17 vitórias e ritmo de busca de finalização no solo. Segundo, o gap físico: 10 anos de diferença é significativo no peso-galo, onde velocidade e recuperação entre trocas decidem. Terceiro, o momentum recente: Luna Martinetti vem de nocaute em 88 segundos no Contender Series, Grant vem de finalização no R1 contra Jourdain. A ressalva é honesta: Luna Martinetti estreia no UFC e os 17-1 dele foram construídos em calibre UWC e regional equatoriano, que não é comparável ao padrão UFC. A experiência Grant-UFC é a arma dele, mas experiência contra queixo de 40 anos não cobre o gap físico. Não é 7-8 porque existe risco real de Luna Martinetti ficar ansioso em main card UFC, forçar em excesso no R1 e correr contra-ataque experiente de Grant. Não é 5 porque as evidências convergem.',
      x_factor: {
        title: 'A primeira finalização',
        description:
          'Se Luna Martinetti encaixar um takedown e começar a ameaçar submissão nos primeiros dois minutos, Grant cai no padrão que já cedeu cinco vezes na carreira. Se Grant sobreviver aos primeiros três minutos em pé, a luta pode virar batalha de cardio onde experiência ganha.',
      },
      upset_alert: {
        title: 'Alerta de zebra: Grant anula via experiência',
        description:
          'Grant já enfrentou 14 lutas UFC, conhece o nervoso de estreante, e tem tempo de reação treinado em oito anos de casa. Se Luna Martinetti entrar ansioso e gastar no R1 sem sucesso, Grant pode estender para três rounds e ganhar na decisão via controle tático, como fez contra Blackshear e Taveras recentemente.',
      },
      probabilities: {
        fighter1: { nome: 'Grant', percent: 36 },
        fighter2: { nome: 'Luna Martinetti', percent: 61 },
        draw: 3,
      },
      conviction: {
        thesis:
          'A tese é: Adrián Luna Martinetti vence porque, primeiro, Grant sofreu cinco finalizações em oito derrotas na carreira, incluindo guilhotina no R1 há seis meses contra Jourdain, e Luna Martinetti tem seis submissões em 17 vitórias com jogo ativo de busca no solo, segundo histórico recente verificado. Segundo, o gap geracional de 10 anos é significativo no peso-galo onde velocidade e recuperação definem trocas; Luna Martinetti está aos 30 no pico físico, Grant aos 40 no lado descendente da curva. Terceiro, o momentum direto aponta: Luna Martinetti venceu Vologdin por KO em 88 segundos no DWCS em outubro de 2025, Grant perdeu por sub R1 na mesma janela. Com a ressalva transparente: os 17-1 de Luna Martinetti foram construídos no UWC e circuito equatoriano, com apenas uma luta em palco maior no Contender Series, então calibre UFC é incógnita parcial. O caminho é Luna Martinetti entrar no R1 buscando clinch e takedown, estabelecer controle de cima, ameaçar submissão em primeira transição, finalizar em R1 ou R2. Alternativa: se não finalizar, usar pico físico para ganhar volume em três rounds. Isso desmorona se Grant conectar contra-ataque limpo quando Luna Martinetti entrar em excesso, ou se o estreante ficar ansioso e forçar em cenário onde Grant puxa para experiência.',
        conviction_score: 6,
        conviction_rationale:
          'Convicção 6 porque a tese se apoia em três pilares mensuráveis: histórico direto de sub defense de Grant, gap físico de 10 anos, e momentum recente convergente. Não é 7-8 porque Luna Martinetti estreia no UFC sem nenhuma amostra em cage de top 50, e esse tipo de lacuna historicamente punhe prospects que vêm quentes do DWCS. Não é 4-5 porque as evidências são consistentes e não isoladas.',
        conviction_breakers: [
          'Luna Martinetti entra ansioso no R1 e Grant conecta contra-ataque limpo durante entrada precipitada',
          'Grant consegue estabelecer distância e trabalhar jab por três rounds, forçando decisão',
          'Luna Martinetti não traduz o jogo UWC para o octógono UFC e fica paralisado nos primeiros três minutos',
          'Grant aceita o ritmo lento e transforma a luta em batalha de cardio onde experiência compensa',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 36,
          key_scenario:
            'Grant mantém distância no R1 usando jab e frontal kick para manter Luna Martinetti fora do clinch. Explora ansiedade de estreante forçando o equatoriano a entrar em linhas previsíveis. Conecta contra-ataque limpo em uma das entradas ou estabelece decisão via volume em três rounds. Precedente: vitórias sobre Blackshear e Taveras foram exatamente esse padrão, decisão unânime contra adversários mais jovens.',
          required_conditions: [
            'Manter distância no R1 e evitar clinch prolongado',
            'Usar experiência de 14 lutas UFC para ler ansiedade de estreante',
            'Não aceitar trocações caóticas onde velocidade favorece Luna Martinetti',
            'Estender luta para três rounds onde cardio UFC de Grant pesa',
          ],
          historical_precedent: 'Grant contra Da\'Mon Blackshear em julho de 2025: três rounds de controle tático, decisão unânime contra adversário 10 anos mais jovem. Receita similar pode funcionar aqui se Grant encontrar o ritmo.',
        },
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Adrián Luna Martinetti',
            odds: '-106',
            reasoning: 'Mercado abre essa luta praticamente pick-em, com Grant -120 e Luna -106. A leitura aponta Luna pelo histórico de sub defense de Grant, gap físico de 10 anos, e momentum recente, mas o mercado trata como coinflip. Convicção 6 com preço pick-em é aposta simples de valor marginal. Desmorona se Grant conseguir estender a luta para três rounds táticos.',
          },
          {
            type: 'Método',
            pick: 'Luna Martinetti por finalização',
            odds: '+200',
            reasoning: 'Grant tem cinco finalizações sofridas em oito derrotas. Luna Martinetti tem seis submissões em 17 vitórias. Se vence, o método mais provável é finalização. Valor real acima do moneyline.',
          },
          {
            type: 'Total de Rounds',
            pick: 'Não passa de 2,5 rounds',
            odds: '+110',
            reasoning: 'Luna Martinetti finalizou Vologdin em 88 segundos no DWCS. Grant perdeu em R1 há seis meses. Ambos finalizam ou são finalizados cedo. Desmorona se Grant conseguir estabelecer ritmo tático e estender.',
          },
        ],
        best_bet: {
          pick: 'Luna Martinetti por finalização em +200',
          reasoning: 'Convicção 6 combina com aposta de método. Se Luna Martinetti vence, finalização é o caminho mais provável, e o preço de +200 reflete valor acima do moneyline pick-em.',
        },
      },
      key_stats: [
        { value: '5/8', label: 'Derrotas de Grant por finalização na carreira', sublabel: 'A vulnerabilidade central que Luna Martinetti pode explorar.' },
        { value: '88s', label: 'Nocaute de Luna Martinetti sobre Vologdin no DWCS', sublabel: 'Outubro de 2025. Velocidade de execução em palco de qualificação.' },
        { value: '14', label: 'Vitórias seguidas de Luna Martinetti desde 2017', sublabel: 'Majoritariamente no UWC, onde foi bicampeão do peso-galo.' },
      ],
      odds: {
        fighter1_odds: '-120',
        fighter2_odds: '-106',
        fighter1_name: 'Grant',
        fighter2_name: 'Luna Martinetti',
        source: 'bet365 e DraftKings em abril de 2026. Mercado pick-em entre veterano UFC e estreante com sequência invicta.',
      },
      armadilha: {
        titulo: 'Armadilha: Luna Martinetti por KO R1',
        descricao:
          'O mercado paga Luna Martinetti por KO no R1 em torno de +450 porque ele nocauteou Vologdin em 88 segundos no DWCS. Mas Grant tem 23 lutas profissionais, nunca foi nocauteado em menos de um round na carreira UFC, e a estreia no octógono tende a deixar o lutador mais cauteloso, não mais agressivo. O caminho de finalização de Luna Martinetti é via submissão, não KO. Se vai apostar no estreante, vai por finalização sem especificar round.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'grant-vs-luna-martinetti');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
