import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'gaziev-vs-pericic',
  evento_id: null,
  slug: 'gaziev-vs-pericic',
  titulo: 'Gaziev vs Pericic: Dois Ursos, Um Round',
  subtitulo:
    'Shamil Gaziev volta depois de tomar KO em 82 segundos do Cortes-Acosta. Brando Pericic estreou em Perth com nocaute no R1 e nunca passou do primeiro round no UFC. Polymarket bate em Pericic 58%. Peso pesado é volátil, mas olhando luta por luta, o estreante leva até o primeiro respiro do Bahrani Bear.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,93m', envergadura: '198cm', idade: 36, academia: 'KHK MMA Team' },
      fighter2: { altura: '1,96m', envergadura: '201cm', idade: 31, academia: 'City Kickboxing' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'KO/TKO R1-R2',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Shamil Gaziev',
    apelido: 'The Bahrani Bear',
    record: '14-2-0',
    ranking: 'N/R Peso Pesado',
    ultimasLutas: [
      { result: 'L', opponent: 'Waldo Cortes-Acosta', method: 'KO R1 (1:22)', event: 'UFC Qatar (Nov 2025)' },
      { result: 'W', opponent: 'Thomas Petersen', method: 'TKO R1 (3:12)', event: 'UFC Saudi Arabia (Fev 2025)' },
      { result: 'W', opponent: "Don'Tale Mayes", method: 'Decisão Unânime (30-27 x3)', event: 'UFC Fight Night (Ago 2024)' },
    ],
  },
  fighter2_info: {
    nome: 'Brando Pericic',
    apelido: 'The Balkan Bear',
    record: '6-1-0',
    ranking: 'N/R Peso Pesado',
    ultimasLutas: [
      { result: 'W', opponent: 'Louie Sutherland', method: 'TKO R1 (1:48)', event: 'UFC London (Mar 2026)' },
      { result: 'W', opponent: 'Elisha Ellison', method: 'KO R1 (1:55)', event: 'UFC Perth (Set 2025) - Debut' },
      { result: 'L', opponent: 'Randall Rayment', method: 'Sub R2 (RNC, 1:36)', event: 'HEX FS 30 (Mai 2024)' },
    ],
  },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: '2 de Maio, 2026',
  evento_local: 'RAC Arena, Perth, Austrália',
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
      evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
      evento_data: '2 de Maio, 2026',
      evento_local: 'RAC Arena, Perth, Austrália',
      categoria_peso: 'Peso Pesado (265 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Dois Ursos, Um Round',
      tagline_sub: 'Bahrani Bear contra Balkan Bear. O veterano leva 5 meses pós-KO. O estreante nunca passou do R1.',
      fighter1: {
        nome_completo: 'Shamil "The Bahrani Bear" Gaziev',
        apelido: 'The Bahrani Bear',
        sobrenome: 'Gaziev',
        record: '14-2-0',
        ranking: 'N/R Peso Pesado',
        info_extra: 'Khunzakh, Daguestão (rep. Bahrain) | 36 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/GAZIEV_SHAMIL_L_02-01.png?itok=T5oLga_h',
      },
      fighter2: {
        nome_completo: 'Brando "The Balkan Bear" Pericic',
        apelido: 'The Balkan Bear',
        sobrenome: 'Pericic',
        record: '6-1-0',
        ranking: 'N/R Peso Pesado',
        info_extra: 'Adelaide, Austrália (base Auckland) | 31 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-09/PERICIC_BRANDO_L_09-27.png?itok=Wznvmlkh',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Quem Sobrevive ao Primeiro Respiro',
      insight:
        'A história fácil é Pericic, jovem, fresco, vindo de dois KOs em menos de 2 minutos, com Eugene Bareman no córner depois de virar sparring permanente do Adesanya. Olhando luta por luta, a leitura é mais nuançada. Pericic NUNCA passou do primeiro round no UFC, e a única vez que passou de R1 na carreira MMA inteira (contra Rayment) ele foi finalizado por mata-leão em 1:36 do R2. O cardio MMA dele em rounds longos é literalmente incógnita, com 3:43 de tempo total no octógono. Gaziev tem ferramentas de sobrevivência: foi 4 rounds com Rozenstruik, tem queixo do Daguestão (apesar dos KOs recentes), e o poder dele é real (TKO R1 no Petersen com walkoff de direita). Se Pericic não terminar até uns 3 minutos do R1, ele entra em terreno completamente desconhecido onde Gaziev tem vantagem de experiência.',
      tension: {
        truth_a: 'Pericic é mais novo (31 contra 36), mais alto (3 cm a mais), 3 cm de envergadura a mais, destro igual. Vem de dois nocautes no R1 abaixo de 2 minutos em meses consecutivos. Camp City Kickboxing sob Bareman, escolhido por Adesanya pra ser sparring na revanche contra Pereira. Lutou em Perth no debut e nocauteou em 1:55. Palco amigável, momentum imediato.',
        truth_b: 'Gaziev tem 13 lutas profissionais no MMA, 7 finalizações antes do UFC todas em R1-R2. Já passou de R1 contra adversários de calibre real (Rozenstruik 4 rounds, Mayes decisão unânime 30-27). Pericic NUNCA testou cardio MMA além de 3:36 do R2 contra Rayment, e quando testou, foi finalizado. SLpM 15,13 do Pericic é estatisticamente impossível sustentar em 3 rounds.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Shamil Gaziev', color: 'red', momentum_score: 4, momentum_label: 'Em Recuperação', momentum_trend: 'descending',
        momentum_note: 'Vem de KO em 82 segundos do Waldo Cortes-Acosta em main event de cima da hora no UFC Qatar (Nov 2025). Tomar KO no R1 aos 36 anos no peso pesado é sinal clássico de declínio. Antes disso, sequência boa: TKO no Petersen em fevereiro, decisão unânime no Mayes, mas a derrota pro Rozenstruik em março de 2024 já tinha sido por estouro de cardio (córner parou na entrada do R5). Padrão emergente: poder real nos primeiros rounds, mas queixo e cardio em queda.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Waldo Cortes-Acosta', result: 'L', method: 'KO R1 (1:22)', opponent_rank: 'Top 5 Peso Pesado', quality_score: 5, quality_label: 'Excelente', note: 'Main event de cima da hora. KO em 82s. O queixo começando a abrir.' },
          { date: 'Fev 2025', opponent: 'Thomas Petersen', result: 'W', method: 'TKO R1 (3:12)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Walkoff de direita. Poder confirmado.' },
          { date: 'Ago 2024', opponent: "Don'Tale Mayes", result: 'W', method: 'Decisão Unânime (30-27 x3)', opponent_rank: 'Veterano N/R Peso Pesado', quality_score: 2, quality_label: 'Médio', note: 'Foi 15 minutos. Cardio aguentou contra veterano.' },
          { date: 'Mar 2024', opponent: 'Jairzinho Rozenstruik', result: 'L', method: 'TKO R4 (5:00)', opponent_rank: 'Top 15 Peso Pesado', quality_score: 3, quality_label: 'Bom', note: 'Córner parou no R5 por estouro de cardio. 4 rounds. Cardio é vulnerabilidade.' },
          { date: 'Dez 2023', opponent: 'Martin Buday', result: 'W', method: 'TKO R2 (cotoveladas)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Estreia UFC. Performance da Noite. 60-13 em sig strikes.' },
        ],
      },
      fighter2: {
        nome: 'Brando Pericic', color: 'blue', momentum_score: 9, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: 'Pegando fogo. Dois KOs no UFC seguidos no R1: TKO no Sutherland em 1:48 no UFC London (mar/2026) e KO no Ellison em 1:55 no UFC Perth (debut, set/2025). 100% das vitórias por finalização na carreira (6 de 6 wins por finish, todos no R1). Background no kickboxing profissional 18-2, ex-campeão ISKA Super Heavyweight Commonwealth. Convidado por Israel Adesanya pra ser sparring na revanche contra Pereira, virou camp permanente sob Bareman. Mas a amostra no UFC é minúscula: 3:43 de tempo total no octógono. Cardio MMA em rounds longos = zero amostra.',
        recent_fights: [
          { date: 'Mar 2026', opponent: 'Louie Sutherland', result: 'W', method: 'TKO R1 (1:48)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Ground and pound. Sutherland 0-2 no UFC.' },
          { date: 'Set 2025', opponent: 'Elisha Ellison', result: 'W', method: 'KO R1 (1:55)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Estreia UFC em Perth. Ellison era estreante.' },
          { date: 'Mai 2024', opponent: 'Randall Rayment', result: 'L', method: 'Sub R2 (mata-leão, 1:36)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'ÚNICA derrota no MMA. Defesa de finalização é gap real.' },
          { date: 'Abr 2024', opponent: 'Kelvin Fitial', result: 'W', method: 'Sub R1 (mata-leão, 3:26)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Pré-UFC.' },
          { date: '2023', opponent: 'Phillips / Kenny', result: 'W', method: 'Finalização no R1', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Circuito regional australiano.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Gaziev', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-1D' },
      fighter2: { nome: 'Pericic', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: '4V-1D (últimas 5)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Nenhum oponente em comum. Diferença de calibre é grande: Gaziev enfrentou Cortes-Acosta (top 5), Rozenstruik (top 15) e Mayes (veterano UFC). Pericic enfrentou Sutherland (0-2 no UFC), Ellison (estreante UFC) e Rayment (regional). Diferença de 2 níveis a favor do Gaziev (perdedor previsto). R2 Tier 1 ressalva DISPARA: anota-se a vantagem de calibre, mas Tier 2 NÃO dispara porque Gaziev tem 2 KOs sofridos recentes e não está em elite sustentada.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.8, valueB: 15.13, maxVal: 16, format: 'decimal', note: 'SLpM 15,13 do Pericic inflado por amostra mínima (3:43 de tempo total no octógono).' },
        { label: 'Precisão de Strikes (%)', valueA: 44, valueB: 59, maxVal: 100, format: 'percent', note: 'Precisão do Pericic maior, mas amostra de 2 lutas no R1.' },
        { label: 'Sig. Strikes Absorvidos/Min', valueA: 4.73, valueB: 1.57, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Gaziev SApM 4,73 é alto. Pericic 1,57 inflado por luta curta.' },
        { label: 'Defesa de Strikes (%)', valueA: 42, valueB: 66, maxVal: 100, format: 'percent', note: 'Defesa de strikes do Gaziev em 42% é vulnerabilidade clara. Pericic amostra mínima.' },
        { label: 'Takedowns por 15 Min', valueA: 0.53, valueB: 0.0, maxVal: 5, format: 'decimal', note: 'Nenhum dos dois usa wrestling. Luta vai ser em pé.' },
        { label: 'Submissões por 15 Min', valueA: 0.5, valueB: 0.0, maxVal: 3, format: 'decimal', note: 'Única derrota do Pericic no MMA foi por finalização (mata-leão). Defesa de finalização é gap.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '36 anos', fighter2: '31 anos', note: 'Pericic 5 anos mais novo. Idade importa no peso pesado.' },
        { label: 'Altura', fighter1: '1,93m', fighter2: '1,96m', note: 'Pericic 3 cm mais alto.' },
        { label: 'Envergadura', fighter1: '198 cm', fighter2: '201 cm', note: 'Pericic 3 cm de envergadura a mais.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Sem assimetria de stance.' },
        { label: 'Academia', fighter1: 'KHK MMA Team (Bahrein)', fighter2: 'City Kickboxing (Auckland)', note: 'Ex-treino sob Abdulmanap. CKB sob Bareman.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Distância', advantage: 'fighter2', gap: 2, note: 'Pericic é kickboxer profissional 18-2, técnica superior em pé.' },
        { label: 'Poder de Nocaute', advantage: 'even', gap: 0, note: 'Os dois têm poder de finalizar com um soco.' },
        { label: 'Cardio em Rounds Longos', advantage: 'fighter1', gap: 3, note: 'Gaziev foi 15 minutos (Mayes) e 4 rounds (Rozenstruik). Pericic zero acima de 1:55 no UFC.' },
        { label: 'Wrestling / Clinch', advantage: 'fighter1', gap: 2, note: 'Treino sob Abdulmanap. Mas média de queda 0,53 baixa.' },
        { label: 'Defesa de Finalização', advantage: 'fighter1', gap: 3, note: 'Única derrota do Pericic = mata-leão. Gap claro.' },
        { label: 'Experiência UFC', advantage: 'fighter1', gap: 4, note: 'Gaziev 5 lutas UFC contra calibre real. Pericic 2 lutas em 3:43 de octógono.' },
      ],
      summary: 'Pericic ganha em striking puro e momentum. Gaziev ganha em quase tudo que envolve passar do primeiro respiro. A luta pivota em quem dita o tempo do R1.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Gaziev', ko_tko: { count: 8, percent: 57 }, submission: { count: 5, percent: 36 }, decision: { count: 1, percent: 7 }, total_wins: 14 },
      fighter2: { nome: 'Pericic', ko_tko: { count: 5, percent: 83 }, submission: { count: 1, percent: 17 }, decision: { count: 0, percent: 0 }, total_wins: 6 },
      insight: 'Peso pesado tem taxa de decisão só de 28,6%. Pericic é 100% finisher (6 de 6 no R1). Gaziev é 93% finisher. Combinado, Under 1.5 e Fight ITD são as duas pernas mais sólidas do book.',
    },

    previsao_final: {
      winner_name: 'Brando Pericic', winner_side: 'fighter2',
      predicted_method: 'KO/TKO R1-R2', confidence_score: 6, confidence_label: 'MÉDIA',
      explanation:
        'A pick é Brando Pericic por KO/TKO em R1-R2. Olhando luta por luta, a vantagem aparece em três dimensões: idade (5 anos mais novo, importante no peso pesado), momentum (2 KOs no R1 abaixo de 2 minutos seguidos contra o KO no R1 do Gaziev em novembro) e palco (já lutou e nocauteou em Perth). O caminho é específico: explorar a defesa de strikes de 42% do Gaziev nos primeiros 3 minutos, conectar o poder que derrubou Sutherland e Ellison, finalizar antes do território desconhecido. O caminho do Gaziev (~42%) existe e é real: sobreviver o respiro inicial e capitalizar quando Pericic entrar no R2-R3 sem amostra MMA. Convicção 6 porque peso pesado é volátil, a R2 Tier 1 ressalva dispara (calibre dos adversários do Gaziev é 2 níveis acima dos do Pericic), e a janela do Pericic é estreita demais pra ser confortável.',
      x_factor: {
        title: 'O Primeiro Respiro Decide',
        description: 'Se Pericic conectar limpo no R1 antes dos 3 minutos, ele finaliza igual fez com Sutherland e Ellison. Se Gaziev sobreviver, a luta entra em terreno completamente novo pro Pericic. Foi exatamente o que aconteceu contra Rayment: passou do R1, foi pego em mata-leão no R2.',
      },
      upset_alert: {
        title: 'Gaziev sobrevive ao R1 e capitaliza',
        description: 'Cenário viável (~42%): Gaziev usa o padrão da luta com Buday (60-13 em sig strikes, finalização no R2) mas como sobrevivente da tempestade inicial. Aguenta o poder do Pericic no R1 com clinch ou movimento, deixa o estreante estourar o cardio, e finaliza no R2-R3.',
      },
      probabilities: { fighter1: { nome: 'Gaziev', percent: 42 }, fighter2: { nome: 'Pericic', percent: 55 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Brando Pericic vence porque, primeiro, tem 5 anos de idade a menos (31 contra 36) numa divisão onde o declínio acelera depois dos 35 e Gaziev acabou de tomar KO no R1 há 5 meses. Segundo, o momentum imediato é esmagador: 2 KOs no R1 abaixo de 2 minutos nos últimos 7 meses contra a derrota no R1 do Gaziev. Terceiro, o palco em Perth já provou ser dele (estreia com KO no R1 em set/2025). Caminho: Pericic explora a defesa de strikes de 42% do Gaziev nos primeiros 3 minutos via poder de R1. Desmorona se Gaziev sobreviver ao respiro inicial.',
        conviction_score: 6,
        conviction_rationale: 'Convicção 6 porque três dimensões (idade, momentum, palco) convergem no Pericic, mas a R2 Tier 1 ressalva DISPARA: calibre Sutherland/Ellison não testou Pericic acima de 2 minutos, e Gaziev tem ferramentas de sobrevivência que invalidariam a tese se conseguir passar da tempestade inicial. Amostra do Pericic é literalmente 3:43 de tempo no octógono.',
        conviction_breakers: [
          'Gaziev sobrevive os primeiros 3 minutos do R1 com clinch ou movimento',
          'Cardio MMA do Pericic colapsa no R2, replicando padrão Rayment',
          'Gaziev consegue conectar primeiro com o poder que derrubou Petersen',
          'Defesa de finalização fraca do Pericic vira fator se Gaziev aproveitar o treino sob Abdulmanap',
        ],
        underdog_path: {
          viable: true, probability_estimate: 42,
          key_scenario: 'Gaziev abre cauteloso, evita trocação na linha do jab nos primeiros 90 segundos, ocupa o clinch contra a parede pra neutralizar o poder do R1. Empurra ritmo no fim do R1, força Pericic a respirar pela boca. Entra no R2 com Pericic em terreno desconhecido. Conecta a direita que derrubou Petersen, finaliza no R2 ou ganha por decisão.',
          required_conditions: [
            'Sobreviver os primeiros 3 minutos do R1 sem ser derrubado',
            'Forçar Pericic a passar de 4 minutos de tempo de luta pela primeira vez no UFC',
            'Conectar pelo menos uma direita limpa antes do R3',
            'Não morder a isca de trocar solto com kickboxer profissional 18-2',
          ],
          historical_precedent: 'Gaziev contra Buday (UFC, dez/2023): estreia UFC dele, terminou no R2 via TKO de cotoveladas. Sabe construir finalização no R2 contra striker que não esperava ir longe.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Brando Pericic', odds: '-138 (Polymarket)', reasoning: 'Polymarket bate em Pericic 58% / Gaziev 44%. Leitura luta por luta aponta 55/42/3. Vantagem modesta (~3%) sobre a probabilidade implícita.' },
          { type: 'Total Rounds', pick: 'Under 1.5 Rounds', odds: '-150 a -200', reasoning: 'Pericic 6 de 6 finalizações no R1, 0% taxa de decisão no UFC. Gaziev 13 de 14 finalizações na carreira. Peso pesado tem taxa de finalização de 71%, taxa de decisão 28,6%. Probabilidade real de passar do R1.5 = ~30-35%. Em -180 a probabilidade implícita é 64,3%. Vantagem ~5-8%. Aposta mais sólida.' },
          { type: 'Método', pick: 'Fight Inside the Distance', odds: '-300 a -400', reasoning: 'KO/TKO/Finalização combinados. Peso pesado ~71% finalizações. Probabilidade real ~78-82%. Hedge contra a incerteza de quem vence.' },
          { type: 'Longshot', pick: 'Gaziev por KO no R1', odds: '+400', reasoning: 'Poder existe (Petersen TKO R1, Buday Performance da Noite). Probabilidade real ~12-15%. Hedge se você pegou Pericic na moneyline.' },
        ],
        best_bet: { pick: 'Under 1.5 Rounds em -150 a -200', reasoning: 'Combina taxa de finalização base do peso pesado (~71%), taxa de finalização do Pericic no R1 no UFC (100%, 2 de 2, ambos abaixo de 2 minutos), taxa de finalização do Gaziev na carreira (93%), e zero amostra do Pericic acima de 1:55 no UFC. Probabilidade real ~70%. Não exige acertar quem vence, só exige que a luta termine onde os dois historicamente terminam.' },
      },
      key_stats: [
        { value: 'NUNCA', label: 'Pericic passou do R1 no UFC', sublabel: '2 lutas, 3:43 de octógono. KO em 1:48 e 1:55.' },
        { value: '5 meses', label: 'Desde o KO no R1 do Gaziev', sublabel: 'Cortes-Acosta KO em 82s no UFC Qatar. Janela curta.' },
        { value: '15,13', label: 'SLpM do Pericic (insustentável)', sublabel: 'Inflado por amostra mínima. Não vai sustentar 3 rounds.' },
        { value: '42%', label: 'Defesa de strikes do Gaziev', sublabel: 'Vulnerabilidade clara contra kickboxer profissional 18-2.' },
      ],
      odds: { fighter1_odds: '+120', fighter2_odds: '-138', fighter1_name: 'Gaziev', fighter2_name: 'Pericic', source: 'Polymarket em 25 de abril de 2026 (Pericic 58% / Gaziev 44%). DraftKings/BetMGM moneyline específico não capturado no fechamento desta análise.' },
      armadilha: {
        titulo: 'Armadilha: Pericic por KO no R1 em -180',
        descricao: 'O mercado vai apostar pesado em Pericic por KO no R1 pela narrativa "ele só sabe terminar no R1, toda finalização foi abaixo de 2 minutos". Em odds de -180, isso implica ~64% de probabilidade. Mas o cenário tem dois furos: primeiro, Gaziev tem ferramentas de sobrevivência (passou 4 rounds com Rozenstruik, 15 minutos com Mayes) que adversários do Pericic literalmente não tinham. Segundo, se Gaziev sobreviver aos primeiros 3 minutos do R1, Pericic entra em terreno onde NUNCA esteve no UFC. Probabilidade real de Pericic finalizar no R1 = ~38-45%, não 65%. Pegue Pericic na moneyline ou Under 1.5 Rounds, não a perna combinada.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'gaziev-vs-pericic');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
