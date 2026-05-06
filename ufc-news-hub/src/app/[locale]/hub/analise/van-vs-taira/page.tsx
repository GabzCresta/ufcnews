import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'van-vs-taira',
  evento_id: null,
  slug: 'van-vs-taira',
  titulo: 'Van vs Taira: O Blueprint do Royval',
  subtitulo:
    'Em outubro de 2024, Brandon Royval entregou o roteiro contra Taira: 124-42 em strikes (3:1 ratio), 6 quedas absorvidas em 15 tentativas, 12:13 de bottom control, mesmo assim split decision pra Royval. Em junho de 2025, Joshua Van fez 419 sig strikes combinados com Royval (1ª luta da história UFC com ambos +200 sig strikes) e venceu UD. Van tem 8.84 SLpM (maior história UFC), 81% TDD elite. Taira TDD é só 45%. O mercado abriu Taira -180 e moveu pra -150.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,65m', envergadura: '165cm', idade: 24, academia: '4oz. Fight Club, Houston' },
      fighter2: { altura: '1,70m', envergadura: '178cm', idade: 26, academia: 'The Blackbelt Japan, Okinawa' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão ou TKO tardio',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Joshua Van',
    apelido: 'The Fearless',
    record: '16-2-0',
    ranking: 'Campeão Peso Mosca',
    ultimasLutas: [
      { result: 'W', opponent: 'Alexandre Pantoja', method: 'TKO R1 (lesão joelho)', event: 'UFC 323 (Título)' },
      { result: 'W', opponent: 'Brandon Royval', method: 'Decisão Unânime', event: 'UFC 317' },
      { result: 'W', opponent: 'Bruno Silva', method: 'TKO R3', event: 'UFC 316' },
    ],
  },
  fighter2_info: {
    nome: 'Tatsuro Taira',
    apelido: 'The Best',
    record: '18-1-0',
    ranking: '#3 Peso Mosca',
    ultimasLutas: [
      { result: 'W', opponent: 'Brandon Moreno', method: 'TKO R2 (socos das costas)', event: 'UFC 323' },
      { result: 'W', opponent: 'Hyun-sung Park', method: 'Sub R2 (face crank)', event: 'UFC on ESPN 71' },
      { result: 'L', opponent: 'Brandon Royval', method: 'Decisão Dividida (5 rounds)', event: 'UFC Fight Night 244' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Peso Mosca (125 lbs)',
  num_rounds: 5,
  is_titulo: true,
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
      categoria_peso: 'Peso Mosca (125 lbs)',
      num_rounds: 5,
      titulo_em_jogo: 'Título Peso Mosca',
      tagline: 'O Blueprint do Royval',
      tagline_sub: 'Royval venceu Taira 124-42 em strikes (out 2024). Van vs Royval foi a 1ª luta UFC com ambos +200 sig strikes (jun 2025). Taira TDD é 45%. Van faz isso melhor.',
      fighter1: {
        nome_completo: 'Joshua "The Fearless" Van',
        apelido: 'The Fearless',
        sobrenome: 'Van',
        record: '16-2-0',
        ranking: 'Campeão Peso Mosca',
        info_extra: 'Houston, Texas (origem Mianmar) | 24 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/VAN_JOSHUA_L_BELTMOCK.png?itok=oSYKPybb',
      },
      fighter2: {
        nome_completo: 'Tatsuro "The Best" Taira',
        apelido: 'The Best',
        sobrenome: 'Taira',
        record: '18-1-0',
        ranking: '#3 Peso Mosca',
        info_extra: 'Naha, Okinawa, Japão | 26 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-07/TAIRA_TATSURO_L_08-02.png?itok=TNdVtfW4',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'Royval Mostrou Como Vencer Taira. Van Faz Isso Melhor.',
      insight:
        'A única derrota da carreira do Tatsuro Taira veio em 12 de outubro de 2024 contra Brandon Royval, split decision (47-48, 48-47, 48-47) em cinco rounds no UFC Fight Night 244. Os números contam a história: Royval landed 124 sig strikes, Taira landed 42 (3:1 ratio), e Taira AINDA assim conseguiu 6 quedas em 15 tentativas (40% TD acuracy) com 12:13 de bottom control acumulado. Royval venceu mesmo absorvendo todo aquele tempo de chão, porque a relação entre volume e dano em pé pesou mais nos cards. R3 quase parou: Royval bloodied o nariz de Taira com combinações. Joshua Van faz exatamente isso, só que com 8.84 sig strikes por minuto (MAIOR taxa da história do UFC, 1.099 sig strikes carreira é 2º all-time peso mosca), 56.8% precisão (2ª maior história peso mosca, atrás só do Demetrious Johnson) e diferencial de +2.45 (BEST history flyweight). E o mesmo Royval que entregou a derrota pro Taira foi vencido pelo Van em junho de 2025: 419 sig strikes combinados (PRIMEIRA vez na história UFC que ambos lutadores landed +200), Van 30-27 num juiz e 29-28 nos outros dois. Cardio pra 25 minutos provado, defesa de quedas elite contra wrestling sub-threat também provada. Mercado abriu Taira -180 baseado em "grappler vence striker" empírico, e moveu pra -150 quando o smart money entrou e leu o blueprint.',
      tension: {
        truth_a: 'Taira é #3 peso mosca, 18-1, faixa-roxa de BJJ que acabou de ser o PRIMEIRO humano a finalizar Brandon Moreno em TKO R2 do UFC 323 (dez 2025) com socos das costas + body triangle. 8 finalizações em 18 vitórias (44%), 1.64 submissions/15min, 2.73 takedowns/15min com 61% TD accuracy. 8 cm de envergadura a mais. Stoppage do Moreno foi controverso, mas a estatística é real.',
        truth_b: 'A TDD do Taira é 45% (não 67% como muitos relatórios dizem). Em pé contra striker que faz 8.84 SLpM, 45% é vulnerabilidade. Van defende 81% das quedas, é o maior volume striker da história UFC, e Royval (top 3 wrestler-grappler) já entregou o blueprint. O bottom control 12:13 contra Taira foi insuficiente pros cards quando o gap foi 124-42 strikes. Van faz volume melhor que Royval.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Joshua Van',
        color: 'red',
        momentum_score: 10,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: 'Campeão peso mosca desde UFC 323 (dez 2025), Pantoja deslocou ombro esquerdo aos 26s do R1 quando Van pegou um head kick e converteu pra slam. 2º campeão mais jovem da história UFC (24 anos, 57 dias), atrás só do Jon Jones, e PRIMEIRO asiático nascido a virar campeão masculino. 5 vitórias seguidas: Pantoja, Royval (UD com 419 sig strikes combinados, 1ª da história UFC), Bruno Silva, Tsuruya, Durden. 8.84 SLpM é maior taxa da história UFC, 56.8% precisão é 2ª maior peso mosca all-time. Treina no 4oz. Fight Club em Houston com Daniel Pineda (head coach), Jose Santibanez (wrestling) e Frank Gallego (chão).',
        recent_fights: [
          { date: 'Dez 2025', opponent: 'Alexandre Pantoja', result: 'W', method: 'TKO R1 (lesão de ombro, 0:26)', opponent_rank: 'Campeão Peso Mosca', quality_score: 5, quality_label: 'Excelente', note: 'Pegou high kick e elevou pra slam, Pantoja deslocou ombro esquerdo no impacto. 2º campeão mais jovem da história UFC.' },
          { date: 'Jun 2025', opponent: 'Brandon Royval', result: 'W', method: 'Decisão Unânime (30-27, 29-28, 29-28)', opponent_rank: 'Top 3 Peso Mosca', quality_score: 5, quality_label: 'Excelente', note: '419 sig strikes combinados (1ª vez na história UFC ambos +200). Van 205 strikes, 67.4% accuracy. FOTN. Cardio 5 rounds provado.' },
          { date: 'Jun 2025', opponent: 'Bruno Silva', result: 'W', method: 'TKO R3', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Finalização tardia com socos no chão.' },
          { date: 'Mar 2025', opponent: 'Rei Tsuruya', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD em prospecto japonês.' },
          { date: 'Dez 2024', opponent: 'Cody Durden', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Dominou os 10 minutos finais contra wrestler. Wrestling defensivo segurando.' },
        ],
      },
      fighter2: {
        nome: 'Tatsuro Taira',
        color: 'blue',
        momentum_score: 9,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: 'Primeiro humano a finalizar Brandon Moreno: TKO R2 2:24 do UFC 323 (dez 2025) com body triangle de back control + GnP. Stoppage foi controverso (Moreno protestou, "didn\'t show much visible damage" segundo Cageside Press), mas foi vitória oficial. Antes disso, sub R2 face crank em Park (ago 2025). Única derrota da carreira: split decision pro Royval (out 2024) onde absorveu 12:13 de bottom control mas foi outlanded 124-42. R1 vs Moreno expôs vulnerabilidade BJJ: ficou preso em triangle choke do Moreno por quase 4 minutos antes de escapar. Faixa-roxa de BJJ. TDD da carreira é 45% (não 67% como muitos relatórios). Treina no Paraestra Okinawa / The Blackbelt Japan.',
        recent_fights: [
          { date: 'Dez 2025', opponent: 'Brandon Moreno', result: 'W', method: 'TKO R2 (back control + GnP, 2:24)', opponent_rank: 'Ex-Campeão Peso Mosca', quality_score: 5, quality_label: 'Excelente', note: '1º a finalizar Moreno. Stoppage controverso. R1 ficou preso em triangle por 4 minutos.' },
          { date: 'Ago 2025', opponent: 'Hyun-sung Park', result: 'W', method: 'Sub R2 (face crank)', opponent_rank: 'Top 15 Peso Mosca', quality_score: 3, quality_label: 'Bom', note: 'Face crank rara depois de transição no chão.' },
          { date: 'Out 2024', opponent: 'Brandon Royval', result: 'L', method: 'Decisão Dividida (47-48, 48-47, 48-47)', opponent_rank: 'Top 3 Peso Mosca', quality_score: 5, quality_label: 'Excelente', note: 'Única derrota da carreira. Outlanded 124-42 em strikes. 6 quedas em 15 (40%), 12:13 controle. Mesmo assim perdeu cards.' },
          { date: 'Jun 2024', opponent: 'Alex Perez', result: 'W', method: 'TKO R2 (lesão de joelho)', opponent_rank: 'Top 10 Peso Mosca', quality_score: 4, quality_label: 'Muito Bom', note: 'Body triangle de back control quebrou o joelho do Perez. Performance of the Night.' },
          { date: 'Dez 2023', opponent: 'Carlos Hernandez', result: 'W', method: 'TKO R2 (socos)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Uma das poucas vezes que finalizou via striking puro.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Van', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '5V-0D (últimas 5)', contra_top5: '2V-0D' },
      fighter2: { nome: 'Taira', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '4V-1D (últimas 5)', contra_top5: '1V-1D' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: 'Oponente em comum decisivo: Brandon Royval. Van venceu Royval por UD no UFC 317 (jun 2025) com 419 sig strikes combinados (1ª vez na história UFC ambos +200), Van 205 strikes em 304 tentativas (67.4%). Taira perdeu pra Royval por SD no UFC Fight Night 244 (out 2024), única derrota da carreira, outlanded 124-42 em strikes mesmo com 6 quedas e 12:13 de domínio. A transitividade Van vence Royval, Royval vence Taira é evidência direta do confronto. E Van faz volume MELHOR que Royval: 8.84 SLpM (Van) vs 5.4 SLpM (Royval), 56.8% accuracy (Van) vs 47% (Royval em 458 tentativas vs Van).',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 8.84, valueB: 4.2, maxVal: 9, format: 'decimal', note: 'Van tem a MAIOR taxa da história UFC. 1.099 sig strikes carreira é 2º all-time peso mosca.' },
        { label: 'Precisão de Strikes (%)', valueA: 56.8, valueB: 51, maxVal: 100, format: 'percent', note: 'Van tem 2ª maior precisão history peso mosca, atrás só do Demetrious Johnson.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.5, valueB: 2.8, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Taira mais econômico, perfil grappler controlado.' },
        { label: 'Defesa de Strikes (%)', valueA: 60, valueB: 62, maxVal: 100, format: 'percent', note: 'Equilibrado.' },
        { label: 'Takedowns por 15 Min', valueA: 1.11, valueB: 2.73, maxVal: 5, format: 'decimal', note: 'Taira tenta 2,5x mais quedas. Identidade ofensiva.' },
        { label: 'Precisão de Takedown (%)', valueA: 64, valueB: 61, maxVal: 100, format: 'percent', note: 'Próximo. Van precisão alta com baixo volume.' },
        { label: 'Defesa de Takedown (%)', valueA: 81, valueB: 45, maxVal: 100, format: 'percent', note: 'STAT-CHAVE. Van 81% (elite), Taira 45% (vulnerável). Maior gap do confronto.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '24 anos', fighter2: '26 anos', note: 'Van DOB out/2001 (24a, 6m, 29d na luta). Taira DOB jan/2000 (26a, 3m, 12d). 2º campeão mais jovem UFC history.' },
        { label: 'Altura', fighter1: '1,65m', fighter2: '1,70m', note: 'Taira 5 cm mais alto.' },
        { label: 'Envergadura', fighter1: '~170 cm', fighter2: '178 cm', note: 'Taira 8 cm a mais (não 13 como muitos relatórios).' },
        { label: 'Stance', fighter1: 'Destro', fighter2: 'Destro', note: 'Mesmo stance, sem assimetria.' },
        { label: 'Academia', fighter1: '4oz. Fight Club, Houston', fighter2: 'Paraestra Okinawa / Blackbelt Japan', note: 'Camp Daniel Pineda (Texas, alta intensidade) vs Ryota Matsune (Japão, BJJ-first).' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume de Strikes', advantage: 'fighter1', gap: 5, note: 'Van 8.84 SLpM (MAIOR história UFC) vs Taira 4.2. 1.099 sig strikes carreira é 2º all-time peso mosca.' },
        { label: 'Precisão de Strikes', advantage: 'fighter1', gap: 2, note: 'Van 56.8% (2ª maior FW history, atrás só DJ) vs Taira 51%.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter2', gap: 3, note: 'Taira 2.73 TD/15min vs 1.11 do Van. Identidade ofensiva. 6 quedas em 15 contra Royval.' },
        { label: 'Jogo de Chão / BJJ', advantage: 'fighter2', gap: 4, note: 'Taira faixa-roxa, 44% subs, 1.64 sub/15min. Van só 12% (2 de 16). Mas R1 vs Moreno preso 4min em triangle expôs vulnerabilidade.' },
        { label: 'Defesa de Quedas', advantage: 'fighter1', gap: 5, note: 'Van 81% TDD (elite) vs Taira 45% (vulnerável). MAIOR gap stat do confronto.' },
        { label: 'Cardio / Cinco Rounds', advantage: 'fighter1', gap: 1, note: 'Van fez 25min com Royval mantendo volume (205 sig strikes). Taira fez 25min com Royval e perdeu apesar de 12:13 controle.' },
      ],
      summary: 'Van domina onde controla a luta (em pé, volume, defesa de quedas). Taira tem vantagem física (8 cm envergadura) e jogo de chão. A pergunta-chave é se Van mantém a luta em pé pelos 25 minutos. Resposta: 81% TDD vs 45% TDA do Taira aponta que sim.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Van', ko_tko: { count: 8, percent: 50 }, submission: { count: 2, percent: 13 }, decision: { count: 6, percent: 38 }, total_wins: 16 },
      fighter2: { nome: 'Taira', ko_tko: { count: 6, percent: 33 }, submission: { count: 8, percent: 44 }, decision: { count: 4, percent: 22 }, total_wins: 18 },
      insight: 'Van finaliza 50% por KO/TKO, perfil de striker volume com poder. Taira finaliza 44% por submission, perfil clássico de BJJ. Van decide 38% (perfil de wars de cinco rounds), Taira decide só 22%. Os números espelham a tese: Van impõe striking pelos 25 minutos e leva nos cards, Taira precisa do chão pra ganhar.',
    },

    previsao_final: {
      winner_name: 'Joshua Van',
      winner_side: 'fighter1',
      predicted_method: 'Decisão ou TKO tardio',
      confidence_score: 8,
      confidence_label: 'ALTA',
      explanation:
        'A pick é Joshua Van por decisão dominante ou TKO tardio. Olhando luta por luta, a vantagem aparece em seis dimensões: stats (Van 8.84 SLpM maior da história + 56.8% precisão + 81% TDD elite vs Taira TDD 45%), nível de competição (Van bateu Royval com 419 sig strikes combinados; Taira perdeu pro mesmo Royval com 124-42 differential), estilo (striker volume com defesa de quedas elite vs grappler que precisa do chão e tem TDD 45%), momento (Van campeão recém-coroado em alta absoluta vs Taira voltando da única derrota), inteligência qualitativa (Royval entregou o blueprint exato e Van faz isso MELHOR que Royval, com mais volume e mais accuracy), e calibre direto do oponente comum (Van 30-27 num juiz contra Royval, Taira split com gap de 82 strikes). Taira tem caminho viável (28%): forçar entradas no clinch usando 8 cm de envergadura, encaixar queda no R1 e ficar por cima 4-5 minutos por round, buscar back take + body triangle como fez com Moreno. Mas precisa fazer isso contra TDD 81% por 25 minutos com cardio que já provou funcionar contra Royval. Convicção 8 porque seis dimensões convergem com precedente direto (oponente comum + stats divergentes massivamente).',
      x_factor: {
        title: 'A Defesa de Quedas Decide',
        description: 'Van tem 81% TDD na carreira. Taira tenta 2.73 takedowns por 15 minutos com 61% accuracy. A matemática: se Taira tenta 8 quedas em 25 minutos, e Van defende em 75-80%, são 1-2 quedas conectadas no fight inteiro. Royval absorveu 6 quedas em 15 tentativas (40% TDA) por 12:13 de bottom control e mesmo assim venceu cards. Van defende melhor que Royval. R1 vai dar a primeira leitura.',
      },
      upset_alert: {
        title: 'Taira Encaixa Body Triangle de Costas',
        description: 'O caminho do Taira é repetir o que fez no R2 vs Moreno: queda → back control → body triangle → GnP. Faixa-roxa BJJ, 1.64 sub/15min, 44% subs carreira, 8 cm de envergadura a mais. Mas a TDD do Taira é 45% (não 67% como muitos relatórios), então o problema é simétrico: se Van pega o clinch, Taira também sofre. Probabilidade 28%, real porque o sub repertório existe e finalizou ex-campeão na última.',
      },
      probabilities: { fighter1: { nome: 'Van', percent: 69 }, fighter2: { nome: 'Taira', percent: 28 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Joshua Van vence porque, primeiro, tem 8.84 sig strikes por minuto (MAIOR taxa da história UFC) com 56.8% accuracy (2ª maior peso mosca all-time, atrás só DJ), e 81% TDD elite contra Taira TDD de 45%. Segundo, o oponente comum Brandon Royval entregou evidência DIRETA: Royval venceu Taira 124-42 em strikes (3:1 ratio, +82 differential que é um dos 5 maiores da história do peso) com Taira encaixando 6 quedas em 15 tentativas e 12:13 controle, e Van venceu Royval com 419 sig strikes combinados (1ª vez na história UFC ambos +200), 30-27 num juiz, mostrando cardio pra 25 minutos. Terceiro, Van faz volume MELHOR que Royval: 8.84 SLpM vs 5.4 SLpM, 56.8% vs 47% accuracy, e tem TDD melhor que o próprio Royval. O caminho é Van defender as primeiras tentativas de queda no R1, abrir distância com footwork, acumular volume cadenciado nos rounds 2-3, ditar luta nos rounds tardios e fechar com pressão de finalização ou cards 49-46. Desmorona se Taira encaixar back take e body triangle como fez com Moreno e mantiver controle 4+ min por round.',
        conviction_score: 8,
        conviction_rationale: 'Convicção 8 porque seis dimensões convergem com PRECEDENTE DIRETO (Royval) e gaps stat massivos (TDD 81% vs 45%). Royval entregou o blueprint, e Van faz volume + accuracy MELHOR que Royval. Mercado moveu de Taira -180 pra -150 quando smart money entrou e leu o blueprint. Não é 9 porque Taira tem 8 cm reach e jogo de chão grau acima de tudo Van enfrentou (incluindo Royval em sub-threats), e Van tem só 1 luta de 5 rounds (Royval). Probabilidade 69-28-3 reflete isso.',
        conviction_breakers: [
          'Taira encaixa back take e body triangle como fez com Moreno R2',
          'Van não consegue manter TDD 80%+ por 25 minutos contra wrestler com identidade ofensiva',
          'Taira usa 8 cm envergadura pra forçar clinch e Van não consegue encurtar pro pocket',
          'Cardio do Van falha em luta 5R longa pela primeira vez',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 28,
          key_scenario: 'Taira força clinch usando 8 cm envergadura, encaixa double-leg nos primeiros 90s do R1. Estabiliza top control, transita pra back control com body triangle (specialty, finalizou Moreno e Perez assim). Acumula 4-5 minutos top control por round, busca finalização tardia ou cards 49-46. Se finalização não vem, decisão pelo tempo de domínio acumulado. Mas precisa replicar isso 4-5 vezes em 25 minutos contra TDD 81%.',
          required_conditions: [
            'Encaixar 2+ quedas nos primeiros 2 rounds (taxa 35%+ contra Van TDD 81%)',
            'Manter top control 4+ minutos por round que conseguir queda',
            'Usar 8 cm envergadura pra dificultar Van encurtar distância',
            'Cardio aguentar 5 rounds de wrestling ofensivo + jogo de chão',
          ],
          historical_precedent: 'Royval venceu Taira por SD em out 2024 com pressão frenética e movimento. Taira recuperou com finishes em Park (face crank ago/2025) e Moreno (back control TKO dez/2025). Mas o R1 vs Moreno tem detalhe importante: Taira ficou QUASE 4 MINUTOS preso em triangle choke do Moreno antes de escapar, o jogo de chão dele tem furos quando o adversário tem BJJ ofensivo. Van não vai puxar guarda como Moreno fez, mas o detalhe importa pro fall on tight spots.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Joshua Van', odds: '+150 (FanDuel, abr 2026)', reasoning: 'Probabilidade real estimada em 69%, implícita +150 = 40%. Edge de 29 pontos porcentuais. Mercado abriu Taira -180 e moveu pra -150 quando smart money entrou. Best bet do card UFC 328 by daylight.' },
          { type: 'Método', pick: 'Van por Decisão', odds: '+200 a +250 (estimado)', reasoning: 'Van fez 25 minutos com Royval mantendo volume (FOTN bonus). Taira só foi finalizado 1 vez carreira (não no UFC). Cenário mais provável é UD dominante 49-46 ou 50-45. Em +225 implícita é 31%, edge real sobre 40-45% estimada.' },
          { type: 'Total Rounds', pick: 'Passa de 3,5 rounds (Over)', odds: '-150 a -200 (estimado)', reasoning: 'Van por decisão é cenário principal. Mesmo se finalizar, mais provável tarde (R4-R5) por accumulation. Taira chin sólido.' },
        ],
        best_bet: { pick: 'Joshua Van ML em +150', reasoning: 'Maior valor esperado do card. Mercado moveu de -180 pra -150 mas ainda paga Van como azarão em luta de cinturão onde a evidência transitiva é direta (Van bate Royval, Royval bate Taira) e Van faz volume melhor que Royval. Probabilidade real 69% vs implícita 40% é vantagem rara em main event.' },
      },
      key_stats: [
        { value: '124-42', label: 'Royval outlanded Taira em sig strikes (UFC FN 244)', sublabel: '3:1 ratio. Royval venceu cards apesar de Taira ter 6 quedas em 15 e 12:13 controle.' },
        { value: '419', label: 'Sig strikes combinados Van vs Royval (UFC 317)', sublabel: '1ª luta da história UFC com ambos +200. Van 205 strikes, 67.4% accuracy.' },
        { value: '45%', label: 'TDD do Taira na carreira', sublabel: 'Vulnerabilidade real. Análise comum reporta 67% errado. Van defende 81%.' },
        { value: '+150', label: 'Odds do Van como underdog em luta de cinturão', sublabel: 'Mercado paga campeão como azarão. Edge histórico raro.' },
      ],
      odds: {
        fighter1_odds: '+150',
        fighter2_odds: '-150',
        fighter1_name: 'Van',
        fighter2_name: 'Taira',
        source: 'FanDuel/DraftKings Taira -150 / Van +150 em abril/2026 (linha moveu de -180 pra -150 quando smart money entrou). Polymarket alinhado. Mercado lê grappling como vantagem absoluta, ignorando TDD diferente do que o consensus reporta.',
      },
      armadilha: {
        titulo: 'Armadilha: Taira por Submissão Específica',
        descricao: 'O mercado vai pagar pesado em "Taira por submissão" baseado nas 8 finalizações da carreira (44%) e no body triangle finish do Moreno. Mas Van NUNCA foi finalizado em 18 lutas profissionais. TDD 81% significa que a maioria das tentativas do Taira nem chega ao chão. Royval (top 3 wrestler-grappler) tentou levar Van pro chão no UFC 317 e conseguiu poucas vezes. Apostar finalização específica do Taira é apostar em sequência: Van precisa cair primeiro, depois ficar embaixo, depois aceitar a posição de submissão. Três coisas que ele consistentemente não faz.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'van-vs-taira');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
