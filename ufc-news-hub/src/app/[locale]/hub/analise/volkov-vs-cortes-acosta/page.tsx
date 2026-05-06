import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'volkov-vs-cortes-acosta',
  evento_id: null,
  slug: 'volkov-vs-cortes-acosta',
  titulo: 'Volkov vs Cortes-Acosta: O Alcance vs O Hype',
  subtitulo:
    'Volkov tem 203 cm de envergadura e QI de luta forjado em 50 lutas profissionais. Cortes-Acosta chega de três KOs em quatro meses, derrubou Lewis, Gaziev e Delija com poder absurdo. Mas a transitividade aponta pro russo: Volkov venceu Pavlovich em 2024, o mesmo Pavlovich que derrotou o dominicano em agosto de 2025. Linha aberta Volkov -175.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '2,01m', envergadura: '203cm', idade: 36, academia: 'Strela Team, Moscou' },
      fighter2: { altura: '1,93m', envergadura: '198cm', idade: 34, academia: 'Ultimate Kombat Training Center' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão ou KO/TKO',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Alexander Volkov',
    apelido: 'Drago',
    record: '39-11-0',
    ranking: '#2 Peso Pesado',
    ultimasLutas: [
      { result: 'W', opponent: 'Jailton Almeida', method: 'Decisão Dividida', event: 'UFC 321' },
      { result: 'L', opponent: 'Ciryl Gane', method: 'Decisão Dividida', event: 'UFC 310' },
      { result: 'W', opponent: 'Sergei Pavlovich', method: 'Decisão Unânime', event: 'UFC on ABC 6' },
    ],
  },
  fighter2_info: {
    nome: 'Waldo Cortes-Acosta',
    apelido: 'Salsa Boy',
    record: '17-2-0',
    ranking: '#4 Peso Pesado',
    ultimasLutas: [
      { result: 'W', opponent: 'Derrick Lewis', method: 'TKO R2', event: 'UFC 324' },
      { result: 'W', opponent: 'Shamil Gaziev', method: 'KO R1', event: 'UFC Fight Night 265' },
      { result: 'W', opponent: 'Ante Delija', method: 'KO R1', event: 'UFC Fight Night 263' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Peso Pesado (265 lbs)',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC 328: Chimaev vs Strickland',
      evento_data: '9 de Maio, 2026',
      evento_local: 'Prudential Center, Newark, New Jersey',
      categoria_peso: 'Peso Pesado (265 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'O Alcance vs O Hype',
      tagline_sub: 'Volkov tem 203 cm de envergadura e QI de luta de 50 lutas. Cortes-Acosta vem de três KOs em quatro meses. O dominicano voa, mas precisa ultrapassar o jab do russo primeiro.',
      fighter1: {
        nome_completo: 'Alexander "Drago" Volkov',
        apelido: 'Drago',
        sobrenome: 'Volkov',
        record: '39-11-0',
        ranking: '#2 Peso Pesado',
        info_extra: 'Moscou, Rússia | 36 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-10/VOLKOV_ALEXANDER_L_10-25.png?itok=6BGigt1n',
      },
      fighter2: {
        nome_completo: 'Waldo "Salsa Boy" Cortes-Acosta',
        apelido: 'Salsa Boy',
        sobrenome: 'Cortes-Acosta',
        record: '17-2-0',
        ranking: '#4 Peso Pesado',
        info_extra: 'Barahona, República Dominicana | 34 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/CORTES_ACOSTA_WALDO_L_01-24.png?itok=ltqBsxTz',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'O Jab do Russo Já Decidiu Pavlovich',
      insight:
        'A história fácil é Cortes-Acosta com 3 KOs seguidos derrubando o russo de 36 anos no estilo do que fez com Lewis, Gaziev e Delija. Olhando luta por luta, a coisa muda. Volkov tem 203 cm de envergadura (uma das maiores do peso pesado), mais de 1.138 strikes significativos no UFC (segundo maior da história da divisão), e ditou ritmo contra Sergei Pavlovich em junho de 2024 com decisão unânime tranquila. O mesmo Pavlovich que derrotou Cortes-Acosta por decisão em agosto de 2025. A transitividade Volkov venceu Pavlovich, Pavlovich venceu Cortes-Acosta é a evidência mais direta. Mais: três KOs do dominicano vieram contra strikers de chin questionável (Delija ferido, Gaziev striker 1-D, Lewis 40 anos cansado). Volkov nunca foi nocauteado por outro striker de boxe puro na carreira UFC, só por wrestlers explosivos no clinch (Bader, Rozenstruik veio TKO mas em low kicks). O ângulo aqui é: Cortes-Acosta tem KO power real, mas precisa entrar no alcance do Volkov pra usar. E o russo tem 11 anos de UFC mantendo distância contra exatamente esse tipo de oponente.',
      tension: {
        truth_a: 'Cortes-Acosta vem de 3 KOs em quatro meses contra Lewis (TKO R2 em janeiro), Gaziev (KO R1) e Delija (KO R1). 5.76 SLpM com 75% dos golpes na cabeça. Em alta absoluta, derrotou ex-campeão Lewis em janeiro, classificou pra top 4. Mais novo, com momentum esmagador. Mercado abriu Volkov -175 mas Cortes-Acosta a +145 tem valor real pelo upset de KO.',
        truth_b: 'Volkov tem 203 cm de envergadura, 1.138 sig strikes (2º maior da história peso pesado UFC), QI de luta de 50 lutas profissionais (39-11). Acabou de vencer Almeida (jiu-jitseiro super-elite) por decisão dividida em UFC 321. Derrotou Pavlovich em 2024 que depois venceu Cortes-Acosta. 5 cm de altura a mais, 5 cm de envergadura a mais, 11 anos de experiência UFC mantendo distância contra strikers explosivos.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Alexander Volkov',
        color: 'red',
        momentum_score: 7,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: 'Vem de decisão dividida sobre Jailton Almeida em UFC 321 (outubro de 2025), mantendo distância contra jiu-jitseiro de elite por três rounds. Recuperou-se da derrota apertada para Ciryl Gane em UFC 310 (split decision em dezembro de 2024). Em 2024 venceu Sergei Pavlovich por decisão unânime tranquila. Aos 36 anos ainda mantém o jogo de range fighter clássico, com 203 cm de envergadura e QI de luta forjado em 50 lutas profissionais. Treina no Strela Team em Moscou.',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Jailton Almeida', result: 'W', method: 'Decisão Dividida', opponent_rank: 'Top 5 Peso Pesado', quality_score: 4, quality_label: 'Muito Bom', note: 'Manteve distância contra jiu-jitseiro de elite, três rounds.' },
          { date: 'Dez 2024', opponent: 'Ciryl Gane', result: 'L', method: 'Decisão Dividida', opponent_rank: 'Top 3 Peso Pesado', quality_score: 5, quality_label: 'Excelente', note: 'Split decision apertada contra ex-desafiante de cinturão.' },
          { date: 'Jun 2024', opponent: 'Sergei Pavlovich', result: 'W', method: 'Decisão Unânime', opponent_rank: 'Top 5 Peso Pesado', quality_score: 4, quality_label: 'Muito Bom', note: 'Neutralizou o KO power do striker russo, ditou distância.' },
          { date: 'Set 2023', opponent: 'Tai Tuivasa', result: 'W', method: 'Sub R2 (Ezekiel)', opponent_rank: 'Top 10 Peso Pesado', quality_score: 3, quality_label: 'Bom', note: 'Finalização rara com Ezekiel choke.' },
          { date: 'Mar 2023', opponent: 'Alexander Romanov', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'TKO no R1.' },
        ],
      },
      fighter2: {
        nome: 'Waldo Cortes-Acosta',
        color: 'blue',
        momentum_score: 9,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: 'Três KOs seguidos em quatro meses: Lewis TKO R2 em janeiro de 2026, Gaziev KO R1 em novembro de 2025, Delija KO R1 em novembro de 2025. Recuperou-se da derrota por decisão para Sergei Pavlovich em agosto de 2025 com sequência brutal. Dominicano de Barahona, ex-jogador de baseball que veio aos Estados Unidos. Treina no Ultimate Kombat Training Center com Javier Torres (ex-Tristar). Aos 34 anos ainda em ascensão, momentum esmagador.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Derrick Lewis', result: 'W', method: 'TKO R2', opponent_rank: 'Top 10 Peso Pesado', quality_score: 4, quality_label: 'Muito Bom', note: 'TKO sobre ex-#1 contender, finalização tardia no R2.' },
          { date: 'Nov 2025', opponent: 'Shamil Gaziev', result: 'W', method: 'KO R1', opponent_rank: 'Top 15 Peso Pesado', quality_score: 3, quality_label: 'Bom', note: 'KO em 1 round contra striker russo.' },
          { date: 'Nov 2025', opponent: 'Ante Delija', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'KO no R1, mostrou poder de mão.' },
          { date: 'Ago 2025', opponent: 'Sergei Pavlovich', result: 'L', method: 'Decisão Unânime', opponent_rank: 'Top 5 Peso Pesado', quality_score: 4, quality_label: 'Muito Bom', note: 'Perdeu decisão pro russo. Mesmo Pavlovich que perdeu pro Volkov.' },
          { date: 'Jun 2025', opponent: 'Serghei Spivac', result: 'W', method: 'Decisão Unânime', opponent_rank: 'Top 10 Peso Pesado', quality_score: 4, quality_label: 'Muito Bom', note: 'UD sobre wrestler ucraniano.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Volkov', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '4V-1D (últimas 5)', contra_top5: '3V-1D' },
      fighter2: { nome: 'Cortes-Acosta', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '4V-1D (últimas 5)', contra_top5: '0V-1D' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: 'Oponente em comum decisivo: Sergei Pavlovich. Volkov venceu Pavlovich por decisão unânime em UFC on ABC 6 (junho de 2024), neutralizando o KO power do russo por três rounds. Cortes-Acosta perdeu pra Pavlovich por decisão em UFC Fight Night 257 (agosto de 2025). Volkov fez 0V-1D contra top 5, mas a derrota foi split contra Gane (top 3 de cinturão). Cortes-Acosta tem 0V-1D contra top 5 com a derrota sendo justamente pro Pavlovich. Volkov tem calibre médio Muito Bom (4), Cortes-Acosta Bom (3), gap real de 1 ponto.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.05, valueB: 5.76, maxVal: 7, format: 'decimal', note: 'Cortes-Acosta tem volume superior em pé, perfil de boxer.' },
        { label: 'Precisão de Strikes (%)', valueA: 56, valueB: 49, maxVal: 100, format: 'percent', note: 'Volkov mais preciso, técnica de kickboxer.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.2, valueB: 4.1, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Volkov absorve menos pelo range, Cortes-Acosta aceita troca.' },
        { label: 'Defesa de Strikes (%)', valueA: 56, valueB: 55, maxVal: 100, format: 'percent', note: 'Equilibrado.' },
        { label: 'Takedowns por 15 Min', valueA: 0.5, valueB: 0.49, maxVal: 5, format: 'decimal', note: 'Ambos strikers, pouco wrestling ofensivo.' },
        { label: 'Defesa de Takedown (%)', valueA: 73, valueB: 67, maxVal: 100, format: 'percent', note: 'Volkov leve vantagem na defesa de quedas.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '36 anos', fighter2: '34 anos', note: 'Cortes-Acosta 2 anos mais novo.' },
        { label: 'Altura', fighter1: '2,01m', fighter2: '1,93m', note: 'Volkov 8 cm mais alto.' },
        { label: 'Envergadura', fighter1: '203 cm', fighter2: '198 cm', note: 'Volkov 5 cm a mais. Vantagem de alcance.' },
        { label: 'Stance', fighter1: 'Destro', fighter2: 'Destro', note: 'Mesmo stance.' },
        { label: 'Academia', fighter1: 'Strela Team', fighter2: 'Ultimate Kombat', note: 'Camp russo veterano vs camp de ascensão americano.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Distância', advantage: 'fighter1', gap: 3, note: 'Volkov 203 cm reach, jab + teep, kickboxer técnico.' },
        { label: 'Striking em Curta Distância', advantage: 'fighter2', gap: 3, note: 'Cortes-Acosta boxer puro, 75% golpes na cabeça, KO power.' },
        { label: 'Poder de Nocaute', advantage: 'fighter2', gap: 2, note: 'Cortes-Acosta 9 KOs em 17 (53%) com 3 KOs recentes. Volkov 24 em 39 (62%) mas em ritmo cadenciado.' },
        { label: 'Defesa de Striking', advantage: 'fighter1', gap: 1, note: 'Volkov leve vantagem por footwork e range.' },
        { label: 'Cardio e QI de Luta', advantage: 'fighter1', gap: 3, note: 'Volkov 50 lutas profissionais, ditou distância contra Pavlovich e Almeida em decisões.' },
        { label: 'Momentum', advantage: 'fighter2', gap: 3, note: 'Cortes-Acosta 3 KOs em 4 meses. Volkov vem de 4V-1D.' },
      ],
      summary: 'Volkov domina onde o range importa (jab, teep, distância). Cortes-Acosta domina onde a troca acontece (curta distância, mãos pesadas). A pergunta-chave é se o dominicano consegue encurtar a distância sem comer jab no caminho.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Volkov', ko_tko: { count: 24, percent: 62 }, submission: { count: 4, percent: 10 }, decision: { count: 11, percent: 28 }, total_wins: 39 },
      fighter2: { nome: 'Cortes-Acosta', ko_tko: { count: 9, percent: 53 }, submission: { count: 1, percent: 6 }, decision: { count: 7, percent: 41 }, total_wins: 17 },
      insight: 'Volkov finaliza 62% por KO/TKO, mas as decisões recentes (Almeida, Pavlovich, Gane) mostram que contra striker disciplinado o russo ganha por cards. Cortes-Acosta finaliza 53% por KO mas tem 41% de decisões na carreira, perfil de boxer que aceita ir pros cards quando não encaixa. Com 3 rounds, a luta tem mais chance de finalização do que decisão.',
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Volkov', ko_tko: { count: 2, percent: 18 }, submission: { count: 3, percent: 27 }, decision: { count: 6, percent: 55 }, total_losses: 11 },
      fighter2: { nome: 'Cortes-Acosta', ko_tko: { count: 0, percent: 0 }, submission: { count: 0, percent: 0 }, decision: { count: 2, percent: 100 }, total_losses: 2 },
      insight: 'Volkov perde 55% por decisão (6 em 11): Gane, Blaydes, Kongo, Tony Johnson, Bennett. 2 KOs sofridos (Lewis comeback no UFC 229 R3, Minakov pre-UFC). 3 subs incluem Aspinall (front choke UFC 295) e dois russos antigos — vulnerabilidade real é grappling pesado. Cortes-Acosta tem só 2 derrotas, AMBAS por decisão (de Lima UD UFC ESPN 45, Pavlovich UD UFC Fight Night 257) — queixo dominicano sólido, NUNCA foi nocauteado nem finalizado. Para value bet: ambos vão pros cards no perfil base; Volkov por KO depende dele encaixar early antes de Waldo se assentar.',
    },

    previsao_final: {
      winner_name: 'Alexander Volkov',
      winner_side: 'fighter1',
      predicted_method: 'Decisão ou KO/TKO',
      confidence_score: 6,
      confidence_label: 'MÉDIA',
      explanation:
        'A pick é Alexander Volkov por decisão ou KO/TKO. Olhando luta por luta, a vantagem aparece em quatro dimensões: stats (envergadura 203 cm + jab + teep), nível de competição (Volkov venceu Pavlovich que derrotou Cortes-Acosta), estilo (kickboxer técnico de range vs boxer puro de curta distância) e QI de luta (50 lutas profissionais ditando distância). Cortes-Acosta tem caminho real (41%): 3 KOs em quatro meses, KO power genuíno, e Volkov com 36 anos pode estar no decline. Mas pra usar o KO power, o dominicano precisa encurtar a distância sem comer o jab. Volkov fez exatamente isso contra Pavlovich e Rozenstruik (KO R1 com low kicks). Convicção 6 porque é peso pesado (variance alta, qualquer um pode acabar a luta em 1 round) e Cortes-Acosta tem momentum que pode quebrar gameplan. Acredito que será uma luta competitiva, mas vejo um caminho claro onde Volkov ganha porque o ritmo dele neutraliza o do dominicano.',
      x_factor: {
        title: 'O R1 Dita o Resto',
        description: 'Se Cortes-Acosta encaixa um cruzado nos primeiros 90 segundos do R1 e Volkov vacila, o dominicano vai pra cima e busca o KO. Se Volkov sobrevive os primeiros 5 minutos com jab + teep ditando distância, a luta entra no terreno dele e ele ganha decisão. O R1 vai dizer qual cenário domina.',
      },
      upset_alert: {
        title: 'Cortes-Acosta Encurta e Encaixa o KO',
        description: 'Cortes-Acosta tem 3 KOs em quatro meses contra Lewis, Gaziev e Delija. Tem 5.76 SLpM com 75% dos golpes na cabeça. Se ele encurta a distância e encaixa um cruzado, é fim de combate. Volkov foi nocauteado pelo Bader e pelo Rozenstruik (low kicks) na carreira. Aos 36 anos, qualquer chin question pode pesar. Probabilidade na casa dos 41%, alta pra um azarão favorito.',
      },
      probabilities: { fighter1: { nome: 'Volkov', percent: 56 }, fighter2: { nome: 'Cortes-Acosta', percent: 41 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Alexander Volkov vence porque, primeiro, tem 203 cm de envergadura (uma das maiores do peso pesado UFC) e 1.138 sig strikes na carreira (2º maior da história da divisão), o que sustenta o jogo de range fighter pelos três rounds. Segundo, derrotou Sergei Pavlovich por decisão unânime em junho de 2024, e o mesmo Pavlovich derrotou Cortes-Acosta em agosto de 2025, transitividade direta de calibre. Terceiro, em 11 anos de UFC Volkov sobreviveu repetidamente contra strikers explosivos (Pavlovich, Rozenstruik, Tuivasa) usando jab + teep + footwork de kickboxer russo. Caminho da vitória: Volkov mantém distância nos primeiros 90 segundos do R1, começa a acumular jabs e teeps, dita ritmo cadenciado nos rounds 2 e 3, ganha cards 30-27 ou 29-28. Desmorona se Cortes-Acosta encaixar um cruzado nos primeiros minutos e ditar a luta na curta distância onde tem 9 KOs em 17 vitórias (53%).',
        conviction_score: 6,
        conviction_rationale: 'Convicção 6 porque quatro dimensões convergem (stats, calibre, estilo, QI de luta) mas é peso pesado e variance é absurda. Cortes-Acosta tem KO power genuíno e momentum que pode quebrar tudo em 1 round. Não é 7 porque o dominicano vem de três finalizações seguidas e age 36 do Volkov é fator real. Acredito que será uma luta competitiva, mas vejo um caminho claro onde Volkov ganha pelo ritmo cadenciado.',
        conviction_breakers: [
          'Cortes-Acosta encaixa cruzado nos primeiros 90 segundos do R1 e nocauteia',
          'Volkov mostra ferrugem aos 36 anos e não consegue manter distância',
          'Dominicano usa pressão em curta distância pra forçar troca onde tem KO power',
          'Volkov absorve dano cumulativo nos primeiros dois rounds e perde cards',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 41,
          key_scenario: 'Cortes-Acosta encurta a distância nos primeiros 60-90 segundos do R1 com pressão constante, força troca em curta distância onde tem 9 KOs em 17 vitórias. Encaixa cruzado direito ou hook na cabeça (75% dos strikes ele acerta na cabeça). KO ou TKO nos rounds 1 ou 2.',
          required_conditions: [
            'Encurtar a distância sem comer jab + teep nos primeiros minutos',
            'Encaixar pelo menos um cruzado claro na cabeça do Volkov',
            'Manter pressão pra não dar tempo do russo se reorganizar',
            'Aproveitar age 36 do Volkov (qualquer ferrugem pesa)',
          ],
          historical_precedent: 'Volkov foi nocauteado por Curtis Blaydes (TKO R1 em 2017) e finalizado por Derrick Lewis (KO R3 em 2018) na carreira UFC. Cortes-Acosta tem KO power comparável aos dois. Mas naquela época Volkov era novato no UFC, hoje tem 11 anos de experiência ditando distância.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Alexander Volkov', odds: '-175', reasoning: 'Probabilidade real 56%, probabilidade implícita -175 = 63.6%. Sem edge no ML, mercado está alinhado com a leitura. Aposta segura mas sem valor.' },
          { type: 'Método', pick: 'Volkov por Decisão', odds: '+200 a +250 (estimado)', reasoning: 'Volkov vem de 3 decisões seguidas (Almeida, Gane L, Pavlovich) ditando distância. Cortes-Acosta finaliza 41% das vitórias por decisão (perfil de boxer que vai aos cards). Probabilidade real 35-45%. Em +200 a probabilidade implícita é 33%, edge real.' },
          { type: 'Método', pick: 'Cortes-Acosta por KO/TKO', odds: '+250 a +300 (estimado)', reasoning: 'Aposta de risco mas com base: 3 KOs em 4 meses, KO power real, age 36 do Volkov. Probabilidade real 25-30%. Em +300 a probabilidade implícita é 25%, valor leve se confiar no KO momentum.' },
        ],
        best_bet: { pick: 'Volkov por Decisão em +200 a +250', reasoning: 'Maior edge esperado da luta. Volkov tem perfil de range fighter cadenciado (3 das últimas 5 lutas decididas), Cortes-Acosta vem de KOs mas suas duas derrotas (Pavlovich, Bektic em 2022) foram por decisão. Cenário mais provável dentro das vitórias do Volkov é 30-27 ou 29-28.' },
      },
      key_stats: [
        { value: '203', label: 'Envergadura do Volkov em centímetros', sublabel: 'Uma das maiores do peso pesado UFC. Diferença de 5 cm sobre Cortes-Acosta.' },
        { value: '3', label: 'KOs seguidos do Cortes-Acosta em 4 meses', sublabel: 'Lewis TKO R2, Gaziev KO R1, Delija KO R1. Momentum brutal.' },
        { value: '1.138', label: 'Sig strikes do Volkov na carreira UFC', sublabel: '2º maior número da história do peso pesado. Volume controlado.' },
        { value: '50', label: 'Lutas profissionais do Volkov', sublabel: 'QI de luta forjado em 39V-11D, 11 anos de UFC.' },
      ],
      odds: {
        fighter1_odds: '-175',
        fighter2_odds: '+145',
        fighter1_name: 'Volkov',
        fighter2_name: 'Cortes-Acosta',
        source: 'DraftKings/FanDuel Volkov -175 / Cortes-Acosta +145 em abril de 2026. Polymarket alinhado. Mercado com Volkov favorito moderado pelo calibre superior.',
      },
      armadilha: {
        titulo: 'Armadilha: Cortes-Acosta por KO em -120',
        descricao: 'O mercado vai pagar pesado em "Cortes-Acosta por KO" baseado nos 3 finishes seguidos. Mas os três KOs foram contra strikers de chin questionável: Lewis 40 anos cansado, Gaziev striker 1-D, Delija ferido. Volkov não é nenhum dos três. É range fighter técnico que sobrevive aos primeiros 90 segundos com jab + teep, e em 11 anos de UFC nunca foi nocauteado por boxer puro. Apostar em KO rápido contra Volkov ignora que ele já neutralizou exatamente esse arquétipo (Pavlovich, Rozenstruik) repetidamente. Se KO vier, vem tarde por accumulation, não rápido.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'volkov-vs-cortes-acosta');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
