import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'brennan-vs-marshall',
  evento_id: null, slug: 'brennan-vs-marshall',
  titulo: 'Brennan vs Marshall: Calibre Regional Encontra ATT',
  subtitulo:
    'Marshall treina na American Top Team desde agosto de 2024, tem background de wrestling, striking em evolução clara e acabou de finalizar Erik Silva por mata-leão no R1. Brennan chega 11-2 do regional dependendo essencialmente do jiu-jitsu, sem wrestling de peso equivalente. A luta não é tão apertada quanto o 11-2 regional do estreante pode sugerir.',
  lutador1_id: null, lutador2_id: null, artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,78m', envergadura: '180cm', idade: 25, academia: 'Syndicate MMA' },
      fighter2: { altura: '1,78m', envergadura: '180cm', idade: 26, academia: 'American Top Team' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Decisão Unânime ou TKO tardio',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Lucas Brennan', apelido: 'Skywalker', record: '11-2-0', ranking: 'Estreante na UFC', ultimasLutas: [] },
  fighter2_info: { nome: 'Francis Marshall', apelido: 'Fire', record: '10-3-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  categoria_peso: 'Peso-Leve (155 lbs)',
  num_rounds: 3, is_titulo: false, broadcast: null, status: 'published', analysis_type: 'full_single',
  created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Sterling vs Zalal',
      evento_data: '25 de Abril, 2026',
      evento_local: 'Meta APEX, Las Vegas, Nevada',
      categoria_peso: 'Peso-Leve (155 lbs)',
      num_rounds: 3, titulo_em_jogo: null,
      tagline: 'Calibre Regional Encontra ATT',
      tagline_sub: 'Brennan depende do BJJ. Marshall tem wrestling, striking, bom chão e a American Top Team por trás.',
      fighter1: { nome_completo: 'Lucas "Skywalker" Brennan', apelido: 'Skywalker', sobrenome: 'Brennan', record: '11-2-0', ranking: 'Estreante na UFC', info_extra: 'Irvine, Califórnia | 25 anos', imagem_fullbody_url: null },
      fighter2: { nome_completo: 'Francis "Fire" Marshall', apelido: 'Fire', sobrenome: 'Marshall', record: '10-3-0', ranking: 'Sem ranking no top 15', info_extra: 'Estados Unidos | 26 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/MARSHALL_FRANCIS_L_04-25.png?itok=8aDHm6Dz' },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'O Gap de Atleta Não Aparece no Record',
      insight:
        'Quem olha 11-2 de Brennan contra 10-3 de Marshall e imagina luta apertada está lendo apenas o final score. A leitura qualitativa é diferente e mais decisiva: Marshall é atleta de outro calibre. Background de wrestling colegial, striking em evolução clara sob o camp da American Top Team desde agosto de 2024 (ele mesmo descreveu a diferença técnica em pé como "night and day" de dois anos atrás para agora), e agora também jogo de solo finalizador (mata-leão no R1 sobre Erik Silva no UFC Mexico em fevereiro de 2026). Brennan, por outro lado, depende essencialmente do jiu-jitsu. Não tem wrestling equivalente para converter takedown contra alguém com base colegial, o que significa que a ferramenta principal dele precisa de condição que o adversário controla. O 11-2 profissional foi construído em Bellator e depois Xtreme Knockout e Fury FC, contra adversários de um nível de competição completamente diferente do que Marshall enfrentou em 6 lutas UFC.',
      tension: {
        truth_a: 'Brennan é faixa-preta de BJJ segunda graduação, filho de Chris Brennan, e finalizou 8 das 11 vitórias por submissão, a maioria em R1. Se encostar em solo em boa posição, a ameaça de finalização é real.',
        truth_b: 'Marshall tem wrestling, striking refinado no ATT, cardio de três rounds testado em nível UFC, e provou jogo de solo com a finalização sobre Erik Silva. A vantagem sobre Brennan é no atleta inteiro, não em uma ferramenta. E a condição pra o BJJ de Brennan funcionar, conseguir o takedown, é exatamente a ferramenta que Marshall tem melhor.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Lucas Brennan', color: 'red', momentum_score: 6, momentum_label: 'Em Alta Regional', momentum_trend: 'ascending',
        momentum_note:
          'Duas vitórias por mata-leão em 2025 no Xtreme Knockout (Weems, Coleman), ambas no R1, após split decision perdida para Mauricio Gomez no Fury FC em dezembro de 2024. Antes disso saiu do Bellator com KO no R3 contra Weber Almeida e mata-leão no R1 contra Josh San Diego. Padrão: quando vence, finaliza no R1 via BJJ. Quando não consegue o chão, a luta fica aberta e pode perder nos cartões.',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Joshua Weems', result: 'W', method: 'Submissão (mata-leão) R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Mata-leão no R1 no Xtreme Knockout 71. Padrão repetido contra adversário regional.' },
          { date: 'Mai 2025', opponent: 'Austin Coleman', result: 'W', method: 'Submissão (mata-leão) R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Mata-leão no R1 no Xtreme Knockout 70. Segunda consecutiva.' },
          { date: 'Dez 2024', opponent: 'Mauricio Gomez', result: 'L', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Split decision perdida no Fury FC 99. Mostrou vulnerabilidade quando a luta não vai ao chão.' },
          { date: 'Ago 2023', opponent: 'Weber Almeida', result: 'W', method: 'KO (joelhada) R3', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'KO por joelhada no R3 no Bellator 298. Único KO recente do Brennan.' },
          { date: 'Mar 2023', opponent: 'Josh San Diego', result: 'W', method: 'Submissão (mata-leão) R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Mata-leão no R1 no Bellator 293. Padrão histórico.' },
        ],
      },
      fighter2: {
        nome: 'Francis Marshall', color: 'blue', momentum_score: 8, momentum_label: 'Em Alta Clara', momentum_trend: 'ascending',
        momentum_note:
          'Transição para American Top Team em agosto de 2024 mudou o patamar técnico. Vitória por mata-leão no R1 sobre Erik Silva no UFC Mexico em fevereiro de 2026 mostra que o jogo de solo amadureceu junto com o striking. A split decision contra Mairon Santos no UFC 313 foi considerada roubada por vários veículos de MMA, o que significa que o record 3-3 no UFC subestima a realidade do desempenho. O próprio Marshall descreve a diferença técnica entre a versão dele de 2023 e a atual como "night and day".',
        recent_fights: [
          { date: 'Fev 2026', opponent: 'Erik Silva', result: 'W', method: 'Submissão (mata-leão) R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Mata-leão no R1 na Arena CDMX. Validação do jogo de solo em evolução, não só decisão.' },
          { date: 'Mar 2025', opponent: 'Mairon Santos', result: 'L', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Split decision controversa no UFC 313. Vários veículos e a equipe ATT consideraram Marshall como vencedor real.' },
          { date: 'Ago 2024', opponent: 'Dennis Buzukja', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Primeira luta pós-ATT. Decisão unânime que ele próprio marca como ponto de virada.' },
          { date: 'Ago 2023', opponent: 'Isaac Dulgarian', result: 'L', method: 'TKO', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'TKO sofrido antes da mudança para ATT. Versão anterior do lutador.' },
          { date: 'Abr 2023', opponent: 'William Gomis', result: 'L', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Split decision perdida na fase pré-ATT.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Brennan', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: 'Estreante UFC', contra_top5: 'Sem dados UFC' },
      fighter2: { nome: 'Marshall', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '3V-3D UFC', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Nenhum oponente em comum. Aqui é onde o contexto de nível de competição pesa mais que qualquer outra linha da análise. Brennan construiu o 11-2 no Bellator, Xtreme Knockout e Fury FC. Marshall passou por William Gomis, Isaac Dulgarian, Dennis Buzukja, Mairon Santos e Erik Silva no UFC, além do DWCS em 2022. Ou seja, os números do Brennan em volume de finalização e sub attempts foram gerados em contexto regional; os números do Marshall em striking, cardio e defesa foram gerados em nível UFC. Comparar os dois diretamente como se equivalentes é leitura incompleta. O 11-2 é real, mas o peso dele não equivale ao 10-3 de Marshall.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Submissões por 15 Min', valueA: 2.8, valueB: 0.8, maxVal: 3, format: 'decimal', note: 'Brennan com jogo de sub mais ativo, mas números construídos no regional.' },
        { label: 'Sig. Strikes por Minuto', valueA: 2.4, valueB: 3.6, maxVal: 6, format: 'decimal', note: 'Marshall com volume em pé superior, refinado na ATT contra oposição UFC.' },
        { label: 'Defesa de Submissão (%)', valueA: 70, valueB: 45, maxVal: 100, format: 'percent', note: 'Número de Marshall vem de um TKO sofrido contra Dulgarian e tempo no solo contra Santos, não de uma janela submission-heavy.' },
        { label: 'Vitórias por Finalização (%)', valueA: 91, valueB: 30, maxVal: 100, format: 'percent', note: 'Brennan finaliza quase sempre, padrão regional. Marshall finaliza pouco historicamente, mas está evoluindo.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '25 anos', fighter2: '26 anos', note: 'Praticamente a mesma idade.' },
        { label: 'Altura', fighter1: '1,78m', fighter2: '1,78m', note: 'Altura idêntica.' },
        { label: 'Envergadura', fighter1: '180cm', fighter2: '180cm', note: 'Alcance idêntico.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'Syndicate MMA', fighter2: 'American Top Team', note: 'ATT é uma das academias mais refinadas do mundo em peso-pena e peso-leve.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Jiu-Jitsu de Solo', advantage: 'fighter1', gap: 3, note: 'Brennan é faixa-preta segunda graduação com histórico competitivo. Vantagem real, mas precisa chegar ao solo pra usar.' },
        { label: 'Wrestling', advantage: 'fighter2', gap: 3, note: 'Marshall tem background de wrestling. Brennan depende quase exclusivamente de puxar guarda ou scramble para chegar ao solo.' },
        { label: 'Striking em Pé', advantage: 'fighter2', gap: 3, note: 'Marshall tem boxe ATT em evolução documentada. Brennan nunca mostrou striking refinado.' },
        { label: 'Jogo de Solo Ofensivo', advantage: 'fighter2', gap: 1, note: 'Brennan ainda tem vantagem em BJJ puro. Mas Marshall acabou de finalizar Erik Silva por mata-leão e tem defesa de solo real.' },
        { label: 'Experiência UFC', advantage: 'fighter2', gap: 5, note: '7 lutas UFC vs 0. Gap absoluto em leitura de adversidade no octógono.' },
        { label: 'Cardio em 3 Rounds', advantage: 'fighter2', gap: 3, note: 'Marshall testou três rounds em nível UFC contra Gomis, Santos, Buzukja. Brennan nunca passou de R1 em vitórias.' },
      ],
      summary:
        'Marshall tem vantagem em 5 das 6 dimensões, incluindo wrestling, striking e cardio de três rounds, as três ferramentas que controlam onde a luta acontece. Brennan só tem vantagem em BJJ puro, e precisa da condição de chegar ao solo para usar, condição que Marshall tem melhor ferramenta para negar.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Brennan', ko_tko: { count: 2, percent: 18 }, submission: { count: 8, percent: 73 }, decision: { count: 1, percent: 9 }, total_wins: 11 },
      fighter2: { nome: 'Marshall', ko_tko: { count: 1, percent: 10 }, submission: { count: 2, percent: 20 }, decision: { count: 7, percent: 70 }, total_wins: 10 },
      insight:
        'Os dois perfis parecem opostos até o final de 2025. A partir da vitória sobre Erik Silva, Marshall mostrou que também finaliza, não só decide. Brennan continua tendo um único caminho claro de vitória (chegar ao solo e finalizar), enquanto Marshall tem três (wrestling defensivo para decidir, striking em pé para dano, ou jogo de solo próprio se aparecer). O 73 por cento de finalização do Brennan precisa ser contextualizado: veio de adversários no Bellator, XKO e Fury FC, não em nível UFC.',
    },

    previsao_final: {
      winner_name: 'Francis Marshall',
      winner_side: 'fighter2',
      predicted_method: 'Decisão Unânime ou TKO tardio',
      confidence_score: 7,
      confidence_label: 'MÉDIA-ALTA',
      explanation:
        'A análise aponta Marshall com convicção MÉDIA-ALTA. Essa posição incorpora um input qualitativo crítico que stats puros não capturam: Marshall é atleta de outro calibre em relação a Brennan, com background de wrestling, striking em evolução clara na American Top Team e jogo de solo validado pela finalização sobre Erik Silva. Brennan depende essencialmente do jiu-jitsu e não tem wrestling equivalente para converter takedown contra alguém com base colegial, o que significa que a ferramenta principal dele precisa de uma condição (chegar ao solo em boa posição) que o adversário controla melhor. O 11-2 de Brennan foi construído no Bellator, XKO e Fury FC, calibre totalmente diferente do que Marshall enfrentou em 7 lutas UFC. O caminho para Marshall é defender as entradas iniciais de Brennan usando sprawl e wrestling, controlar distância em pé com o striking ATT em evolução, acumular dano em três rounds ou capitalizar quando Brennan cansar de forçar takedown. A convicção não é 8 por dois motivos: Brennan pode encaixar um scramble sorte-engenhoso em R1 que coloca Marshall em back side; e a estreia UFC às vezes gera performances acima da curva quando há motivação máxima. Mas estrutura de luta aponta Marshall.',
      x_factor: {
        title: 'Os primeiros dois minutos do R1',
        description:
          'Se Brennan fechar clinch de imediato e puxar guarda agressiva, pode arrastar para o solo em cenário onde o BJJ dele funciona. Se Marshall sprawl limpo na primeira entrada e conectar dois jabs de resposta, a luta vira ritmo dele e o brasileiro da família Brennan fica tentando recuperar a ferramenta principal pelos próximos treze minutos.',
      },
      upset_alert: {
        title: 'Brennan finaliza no primeiro minuto',
        description:
          'Em oito das onze vitórias de Brennan, a finalização veio no R1, várias em menos de três minutos. Se encostar em solo em boa posição nos primeiros sessenta segundos, o mata-leão ou armbar aparece antes da experiência UFC de Marshall entrar em jogo. É o único caminho viável, mas é concreto.',
      },
      probabilities: { fighter1: { nome: 'Brennan', percent: 28 }, fighter2: { nome: 'Marshall', percent: 69 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Francis Marshall vence porque, primeiro, é atleta de outro calibre em relação a Brennan, com background de wrestling que nega a ferramenta principal do adversário e striking em evolução clara na American Top Team desde agosto de 2024, conforme o próprio Marshall descreveu em entrevistas. Segundo, o 11-2 de Brennan foi construído majoritariamente no Bellator, Xtreme Knockout e Fury FC, contra oposição de calibre regional, enquanto os 7 lutas UFC de Marshall incluem William Gomis, Mairon Santos, Dennis Buzukja e a finalização sobre Erik Silva em fevereiro de 2026, em nível UFC real. Terceiro, o jogo de solo de Marshall não é mais ponto fraco: o mata-leão no R1 sobre Erik Silva mostrou que ele também finaliza, reduzindo o único caminho teórico de vantagem de Brennan. O caminho é sprawl nas entradas iniciais, striking em distância média com jab refinado ATT, ritmo de três rounds que cansa Brennan quando ele não encaixa o takedown cedo. Desmorona se Brennan conseguir puxar guarda logo no primeiro minuto e encontrar mata-leão antes de Marshall ajustar.',
        conviction_score: 7,
        conviction_rationale:
          'Convicção 7 pelo gap de calibre de atleta combinado com o gap de calibre de oposição UFC-versus-regional, ambos confirmados por histórico específico (lutas em Bellator/XKO/Fury vs lutas no UFC contra Gomis/Santos/Silva) e por input qualitativo profissional. Não é 8 porque Brennan tem uma ferramenta real de finalização rápida que pode interromper a luta antes do gap de calibre aparecer, e a estreia UFC de nível mais motivacional às vezes eleva performance. Não é 5 ou 6 porque as evidências convergem em múltiplas dimensões independentes.',
        conviction_breakers: [
          'Brennan fecha clinch nos primeiros trinta segundos e puxa guarda antes de Marshall ajustar sprawl',
          'Brennan encaixa mata-leão em scramble ruim de Marshall nos primeiros dois minutos',
          'Marshall entra cauteloso demais respeitando a estreia UFC e cede posição por cautela',
          'Um erro técnico de Marshall em troca que vira cenário de wrestle-to-sub',
        ],
        underdog_path: {
          viable: true, probability_estimate: 28,
          key_scenario:
            'Brennan pressiona no clinch imediato contra a grade, puxa guarda agressiva ou força queda em scramble nos primeiros noventa segundos. Passa para costas ou full mount antes de Marshall conseguir usar wrestling defensivo. Encaixa mata-leão como fez contra Weems, Coleman, Josh San Diego, todas em R1. Tempo de validade desse caminho é curto, cerca de dois a três minutos do R1, depois disso o cenário vira Marshall.',
          required_conditions: [
            'Fechar distância no primeiro minuto do R1',
            'Conseguir clinch contra a grade ou forçar queda em scramble antes de Marshall sprawl',
            'Chegar ao solo em posição de ataque ofensivo (top ou back), não em guarda fechada',
            'Encaixar finalização antes do R2 onde o cardio e a estratégia de Marshall ganham peso',
          ],
          historical_precedent:
            'Brennan vs Josh San Diego no Bellator 293 em março de 2023: mata-leão no R1 via scramble inicial. Esse é o padrão dele quando funciona. Mas Josh San Diego não era Francis Marshall, e essa é a distância que a análise inteira está tentando comunicar.',
        },
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Francis Marshall',
            odds: '-550',
            reasoning:
              'Marshall é favorito pesado e o mercado tem razão. Atleta de outro calibre, treina na American Top Team, wrestling de base, striking em evolução clara, e acabou de validar o jogo de solo com o mata-leão sobre Erik Silva. O preço é caro, quase proibitivo para apostadores que não entram em favoritos pesados, mas a leitura é independente e alinhada: Marshall vence. Desmorona se Brennan conseguir puxar guarda em primeiro minuto e encaixar finalização antes de Marshall ajustar.',
          },
          {
            type: 'Método',
            pick: 'Marshall por decisão',
            odds: '+120',
            reasoning:
              '70 por cento das vitórias de Marshall são por decisão, e o padrão dele contra grappler agressivo é neutralizar no wrestling e acumular volume em três rounds. Esse é o preço que transforma a convicção na tese em aposta com retorno real, já que o moneyline -550 quase não paga.',
          },
          {
            type: 'Total de Rounds',
            pick: 'Passa de 1,5 round',
            odds: '-140',
            reasoning:
              'O único caminho de Brennan que encerra cedo é mata-leão no R1 em scramble, cenário com janela de tempo curta. Se Marshall sobreviver aos primeiros três minutos, a luta vai para o ritmo dele e tende a estender. Desmorona se Brennan encaixar no primeiro minuto.',
          },
        ],
        best_bet: {
          pick: 'Marshall por decisão em +120',
          reasoning:
            'A melhor aposta é o método, não o moneyline. Marshall -550 é correto mas caro, enquanto Marshall por decisão em +120 combina a convicção na tese com retorno moderado e está alinhado com o padrão histórico do lutador (7 de 10 vitórias por decisão). Captura a mesma leitura a um preço que faz sentido.',
        },
      },
      key_stats: [
        { value: 'ATT', label: 'Academia de Marshall desde agosto de 2024', sublabel: 'American Top Team. Evolução técnica descrita pelo próprio lutador como "night and day".' },
        { value: 'R1', label: 'Finalização de Marshall sobre Erik Silva', sublabel: 'Mata-leão no UFC Mexico em fevereiro de 2026. Jogo de solo validado em nível UFC.' },
        { value: '0', label: 'Lutas UFC de Brennan', sublabel: 'Primeira vez no octógono. Oposição prévia de nível regional, não comparável ao calibre UFC de Marshall.' },
      ],
      odds: {
        fighter1_odds: '+375',
        fighter2_odds: '-550',
        fighter1_name: 'Brennan',
        fighter2_name: 'Marshall',
        source: 'Bet365 (Marshall 1,18 decimal), DraftKings, FanDuel em 24 de abril de 2026. Mercado reconhece o gap de atleta e precifica Marshall como favorito pesado, consistente com a leitura qualitativa.',
      },
      armadilha: {
        titulo: 'Armadilha: Brennan +375 como "valor de azarão"',
        descricao:
          'A maior armadilha dessa luta é olhar o +375 no Brennan e pensar em valor de azarão. O 11-2 do estreante combinado com o preço alto chama atenção, e eventualmente vai aparecer conteúdo de aposta sugerindo valor no desconhecido. Mas o mercado está certo. Brennan não tem wrestling para converter takedown contra base colegial, e o BJJ dele, por melhor que seja, precisa da ferramenta que não tem. Se vai em Brennan mesmo, vai em "Brennan por submissão no R1" como aposta pequena, reconhecendo que o único caminho dele é encaixar finalização nos primeiros três minutos antes do gap de calibre aparecer.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'brennan-vs-marshall');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
