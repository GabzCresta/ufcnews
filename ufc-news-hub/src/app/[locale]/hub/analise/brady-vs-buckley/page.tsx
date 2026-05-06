import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'brady-vs-buckley',
  evento_id: null,
  slug: 'brady-vs-buckley',
  titulo: 'Brady vs Buckley: O Wrestler-BJJ vs o Striker Power-Puncher',
  subtitulo:
    'Brady é faixa-preta de BJJ Renzo Gracie com 6 subs em 18 vitórias, finalizou Edwards por mata-leão R4 (mar 2025) e Burns 50-45 dominando 17 tentativas de queda em 5 rounds (set 2024). Mas tomou TKO R1 do Morales em nov 2025 por jab-overhand puro. Buckley vem de UD perdida pro Usman com 12:57 controle sofrido (4/13 TDs absorvidas), antes disso fechou wrestling do Covington em 1/8 (12.5%). 10 cm de envergadura a mais que Brady, 71% finishes KO/TKO, 4 KOs sofridos carreira.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,75m', envergadura: '183cm', idade: 33, academia: 'Renzo Gracie Philly' },
      fighter2: { altura: '1,78m', envergadura: '193cm', idade: 32, academia: 'Finney\'s MMA / Murcielago MMA' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão ou submissão tardia',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Sean Brady',
    apelido: '',
    record: '18-2-0',
    ranking: '#6 Peso Meio-Médio',
    ultimasLutas: [
      { result: 'L', opponent: 'Michael Morales', method: 'TKO R1 (3:27)', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Leon Edwards', method: 'Sub R4 (mata-leão, 1:39)', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Gilbert Burns', method: 'Decisão Unânime', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Joaquin Buckley',
    apelido: 'New Mansa',
    record: '21-7-0',
    ranking: '#9 Peso Meio-Médio',
    ultimasLutas: [
      { result: 'L', opponent: 'Kamaru Usman', method: 'Decisão Unânime', event: 'UFC on ESPN 69' },
      { result: 'W', opponent: 'Colby Covington', method: 'TKO R3 (corte, médico)', event: 'UFC on ESPN 63' },
      { result: 'W', opponent: 'Stephen Thompson', method: 'KO R3', event: 'UFC 307' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Peso Meio-Médio (170 lbs)',
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
      categoria_peso: 'Peso Meio-Médio (170 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Wrestler-BJJ vs Power-Puncher',
      tagline_sub: 'Brady 87% TDD elite + 6 subs carreira. Buckley fechou wrestling do Covington 1/8 (12.5%) mas absorveu 12:57 do Usman. Brady tomou KO R1 do Morales em nov/2025 por jab-overhand. Chin question dos dois lados.',
      fighter1: {
        nome_completo: 'Sean Brady',
        apelido: '',
        sobrenome: 'Brady',
        record: '18-2-0',
        ranking: '#6 Peso Meio-Médio',
        info_extra: 'Filadélfia, Pensilvânia | 33 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/BRADY_SEAN_L_11-15.png?itok=36TkDsO7',
      },
      fighter2: {
        nome_completo: 'Joaquin "New Mansa" Buckley',
        apelido: 'New Mansa',
        sobrenome: 'Buckley',
        record: '21-7-0',
        ranking: '#9 Peso Meio-Médio',
        info_extra: 'St. Louis, Missouri | 32 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/BUCKLEY_JOAQUIN_L_05-11.png?itok=bdTVYbkP',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Brady Tem o Wrestling. Buckley Tem o Power. As Vulnerabilidades São Cruzadas.',
      insight:
        'A leitura preguiçosa é "Brady wrestler vs Buckley striker, wrestler vence". A leitura honesta tem mais nuance. Em junho de 2025, Kamaru Usman conectou 4 quedas em 13 tentativas (30.7% TDA) contra Buckley em UFC on ESPN 69, com 12:57 de domínio acumulado e diferencial de 137-51 em strikes significativos. Buckley perdeu UD 49-46 x2 e 48-47, R5 conseguiu sprawl 0/6 mas já tinha perdido a luta. Isso é a evidência de que Buckley pode ser dominated por wrestler de elite. MAS em dezembro de 2024 (UFC Tampa), Buckley fechou wrestling de Colby Covington em 1/8 tentativas (12.5% TDA), Cov é top-1 wrestler all-time UFC, e Buckley terminou TKO R3 via cut acumulado + uppercut. Buckley TDD não é binária. Do outro lado, Brady tem 87% TDD elite (UFC.com), faixa-preta Renzo Gracie com 6 subs em 18 vitórias (3 mata-leões, 3 guilhotinas, 1 kimura, 1 arm triangle), finalizou Leon Edwards por mata-leão R4 (mar 2025) com 5/7 takedowns, 10:16 controle e 221-23 strikes. Mas Brady tomou TKO R1 contra Michael Morales em novembro de 2025 num KO loss que NÃO foi por wrestling, foi jab+overhand puro de Morales. E a derrota anterior de Brady (Belal Muhammad, UFC 280 out 2022) também foi por STRIKING PRESSURE (Belal 0/5 nos TDs, Brady defendeu wrestling perfeitamente, Belal venceu por volume). Brady é wrestler-grappler vencedor onde o wrestling é variável dominante. Brady é vulnerável onde tem que aceitar trocação puro em pé contra striker-pressure. Buckley é striker explosivo com KO power genuíno, 10 cm reach a mais. Mas o wrestling do Brady é grau acima de tudo Buckley enfrentou (Usman é o ÚNICO wrestler de elite Buckley enfrentou e foi UD-controlado).',
      tension: {
        truth_a: 'Buckley vem de UD perdida ao Usman mas mostrou cardio R5 + recuperação. Antes disso fechou wrestling do COVINGTON 1/8 (12.5%) e KO Wonderboy R3 contra fence. 71% vitórias KO/TKO. 10 cm de envergadura sobre Brady. Brady acabou de tomar KO R1 do Morales por jab+overhand pura.',
        truth_b: 'Brady tem 87% TDD elite UFC.com, faixa-preta Renzo Gracie com 6 subs (incluindo mata-leão em ex-campeão Edwards mar 2025). Buckley já tomou 4 KOs sofridos carreira (Holland, Di Chirico, Gosh, Curtis). Brady wrestling é grau acima de tudo que Buckley enfrentou exceto Usman. Se Brady evitar trocação em pé prolongada, jogo é dele.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Sean Brady',
        color: 'red',
        momentum_score: 6,
        momentum_label: 'Em Recuperação',
        momentum_trend: 'descending',
        momentum_note: 'Vem de TKO R1 (3:27) contra Michael Morales em novembro de 2025 interrompendo 8 vitórias seguidas. KO foi por jab+overhand puro do Morales, NÃO foi wrestling. Antes incluía Edwards (sub R4 mata-leão, 5/7 TDs, 10:16 controle, 221-23 strikes em mar/2025) e Burns (UD 30-27/29-28/29-28 com 17 TD attempts, 15+ min controle em set/2024). 87% TDD elite UFC.com, 3.62 TD/15min ofensivo (50% TD accuracy). Faixa-preta BJJ Renzo Gracie sob Daniel Gracie Philly, treinou contra Craig Jones (2x ADCC silver, beat in Fury Pro Grappling 3) e Ben Saunders (10th Planet black belt, kimura sub Fury Pro 4). Brady declarou publicamente: "I\'m submitting Joaquin Buckley".',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Michael Morales', result: 'L', method: 'TKO R1 (jab+overhand, 3:27)', opponent_rank: 'Top 5 Peso Meio-Médio', quality_score: 4, quality_label: 'Muito Bom', note: 'KO foi por STRIKING puro. Morales jab técnico abriu, dropou Brady com overhand-uppercut. Não foi wrestling.' },
          { date: 'Mar 2025', opponent: 'Leon Edwards', result: 'W', method: 'Sub R4 (mata-leão, 1:39)', opponent_rank: 'Ex-Campeão Meio-Médio', quality_score: 5, quality_label: 'Excelente', note: '5/7 TDs (71%), 10:16 controle, 221-23 strikes (9.6:1). Performance of the Night.' },
          { date: 'Set 2024', opponent: 'Gilbert Burns', result: 'W', method: 'Decisão Unânime (30-27, 29-28, 29-28)', opponent_rank: 'Top 5-7 Peso Meio-Médio', quality_score: 5, quality_label: 'Excelente', note: '17 TD attempts em 5R (3 rounds atualmente), 15+ min controle. Cardio 5R provado.' },
          { date: 'Dez 2023', opponent: 'Kelvin Gastelum', result: 'W', method: 'Sub R3 (kimura, 1:43)', opponent_rank: 'Top 15 Peso Meio-Médio', quality_score: 3, quality_label: 'Bom', note: 'Finalização no R3.' },
          { date: 'Out 2022', opponent: 'Belal Muhammad', result: 'L', method: 'TKO R2 (4:47)', opponent_rank: 'Top 5 Peso Meio-Médio', quality_score: 5, quality_label: 'Excelente', note: 'IMPORTANTE: derrota foi por STRIKING PRESSURE. Belal 0/5 nos TDs (Brady defendeu tudo). Belal venceu por volume puro, jab técnico, broke Brady com pressure cumulativa.' },
        ],
      },
      fighter2: {
        nome: 'Joaquin Buckley',
        color: 'blue',
        momentum_score: 5,
        momentum_label: 'Estável (com ressalvas)',
        momentum_trend: 'descending',
        momentum_note: 'Vem de UD perdida pra Usman (UFC ESPN 69, jun 2025): 4/13 TDs absorvidas (30.7% TDA), 12:57 controle sofrido, 137-51 strikes diferencial, 49-46 x2 e 48-47 (R5 conseguiu sprawl 0/6 e bati o melhor do round mas já tinha perdido). Antes disso, em dez 2024, fechou wrestling do Covington em 1/8 (12.5%), TKO R3 via cut + uppercut (não médico stoppage como reportado). KO em Wonderboy R3 com right hook contra fence (out 2024). 71% finishes KO/TKO carreira. 4 KOs sofridos (Holland, Di Chirico, Gosh, Curtis). UFC.com TDD 73%. Treina Finney\'s MMA St. Louis + Murcielago MMA.',
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Kamaru Usman', result: 'L', method: 'Decisão Unânime (49-46 x2, 48-47)', opponent_rank: 'Ex-Campeão Meio-Médio', quality_score: 5, quality_label: 'Excelente', note: '4/13 TDs absorvidas (30.7% TDA), 12:57 controle sofrido. R5 stuffed 0/6, recuperou cardio.' },
          { date: 'Dez 2024', opponent: 'Colby Covington', result: 'W', method: 'TKO R3 (cut + uppercut)', opponent_rank: 'Ex-Top 3 Peso Meio-Médio', quality_score: 5, quality_label: 'Excelente', note: 'CRUCIAL: Buckley fechou wrestling do Cov 1/8 (12.5%). Top-1 wrestler all-time UFC. R1 Buckley dropou Cov com right.' },
          { date: 'Out 2024', opponent: 'Stephen Thompson', result: 'W', method: 'KO R3 (right hook + GnP, 2:17)', opponent_rank: 'Top 10 Peso Meio-Médio', quality_score: 4, quality_label: 'Muito Bom', note: 'R1-R2 perdeu pro karate striking de Thompson, R3 caçou contra fence com hook tyson-esque.' },
          { date: 'Mai 2024', opponent: 'Nursulton Ruziboev', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD em 3R, cardio mantido.' },
          { date: 'Mar 2024', opponent: 'Vicente Luque', result: 'W', method: 'TKO R2 (GnP, 3:17)', opponent_rank: 'Top 15 Peso Meio-Médio', quality_score: 3, quality_label: 'Bom', note: 'Luque pulled guard no R2 e Buckley caçou com pancada de top.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Brady', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '4V-1D (últimas 5)', contra_top5: '2V-2D' },
      fighter2: { nome: 'Buckley', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '4V-1D (últimas 5)', contra_top5: '2V-1D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum recentes. Calibre empate em 4. Brady 2V-2D contra top 5 (Edwards W, Burns W, Morales L, Belal L). Buckley 2V-1D top 5 (Covington W, Thompson W KO, Usman L UD). Diferença qualitativa importante: AMBAS derrotas do Brady foram por STRIKING-PRESSURE (Belal volume jab; Morales jab+overhand). Brady NÃO foi quedado nas suas derrotas. Brady "perde só onde aceita trocação prolongada em pé". Derrota do Buckley foi UD wrestling-controlado por Usman (top-3 wrestler de elite). Buckley fechou Covington 1/8 nas TDs (12.5%), provando que TDD funciona contra wrestler de calibre similar, mas Brady é wrestler-grappler com BJJ ofensivo grau acima do Cov.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.96, valueB: 3.88, maxVal: 7, format: 'decimal', note: 'Equilibrado, ambos perfis controlados.' },
        { label: 'Precisão de Strikes (%)', valueA: 55, valueB: 37, maxVal: 100, format: 'percent', note: 'Brady muito mais preciso.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.05, valueB: 2.93, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Equilibrado.' },
        { label: 'Defesa de Strikes (%)', valueA: 58, valueB: 55, maxVal: 100, format: 'percent', note: 'Equilibrado.' },
        { label: 'Takedowns por 15 Min', valueA: 4.43, valueB: 0.7, maxVal: 5, format: 'decimal', note: 'Brady wrestling-heavy 6x mais que Buckley.' },
        { label: 'Precisão de Takedown (%)', valueA: 53, valueB: 45, maxVal: 100, format: 'percent', note: 'Brady mais preciso.' },
        { label: 'Defesa de Takedown (%)', valueA: 87, valueB: 72, maxVal: 100, format: 'percent', note: 'Brady ELITE. Buckley exposto pelo Usman (4/7).' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '32 anos', note: 'Buckley 1 ano mais novo.' },
        { label: 'Altura', fighter1: '1,75m', fighter2: '1,78m', note: 'Buckley 3 cm mais alto.' },
        { label: 'Envergadura', fighter1: '183 cm', fighter2: '193 cm', note: 'Buckley 10 cm a mais. Vantagem em pé.' },
        { label: 'Stance', fighter1: 'Destro', fighter2: 'Destro', note: 'Mesmo stance.' },
        { label: 'Academia', fighter1: 'Renzo Gracie Philly', fighter2: 'Finney\'s MMA', note: 'BJJ-heavy camp vs camp striking americano.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Wrestling / Quedas', advantage: 'fighter1', gap: 5, note: 'Brady 4.43 TD/15min vs 0.7 do Buckley. Identidade.' },
        { label: 'Defesa de Quedas', advantage: 'fighter1', gap: 3, note: 'Brady 87% TDD elite. Buckley 72% mas Usman conectou 4/7 em 4 rounds.' },
        { label: 'Jogo de Chão / BJJ', advantage: 'fighter1', gap: 5, note: 'Brady faixa-preta com 6 subs. Buckley 0 subs em 21 vitórias, sem ofensa de chão.' },
        { label: 'Striking em Pé', advantage: 'fighter2', gap: 3, note: 'Buckley 71% finalização KO/TKO, 10 cm reach a mais. Plus brevidade.' },
        { label: 'Chin / Durabilidade', advantage: 'fighter2', gap: 1, note: 'Brady KO recente (Morales R1). Buckley 4 KOs sofridos carreira (Holland, Di Chirico, Gosh, Curtis).' },
        { label: 'Cardio / 3 Rounds', advantage: 'fighter1', gap: 1, note: 'Brady fez 25 minutos com Burns, 4+ rounds com Edwards antes do sub. Buckley fez 25 com Usman absorvendo dano.' },
      ],
      summary: 'Brady domina onde a luta vai pro chão (wrestling 6x, BJJ, defesa de quedas 87% elite). Buckley em pé só. Pra Brady vencer, derruba e mantém. Pra Buckley vencer, precisa do que Buckley NÃO conseguiu fazer com Usman: defender wrestling.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Brady', ko_tko: { count: 3, percent: 17 }, submission: { count: 6, percent: 33 }, decision: { count: 9, percent: 50 }, total_wins: 18 },
      fighter2: { nome: 'Buckley', ko_tko: { count: 15, percent: 71 }, submission: { count: 0, percent: 0 }, decision: { count: 6, percent: 29 }, total_wins: 21 },
      insight: 'Brady decide 50% e finaliza 33% por sub (perfil de wrestler-grappler). Buckley finaliza 71% por KO/TKO e ZERO submissões (striker puro sem ofensa de chão). Distribuições espelham os estilos opostos.',
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Brady', ko_tko: { count: 2, percent: 100 }, submission: { count: 0, percent: 0 }, decision: { count: 0, percent: 0 }, total_losses: 2 },
      fighter2: { nome: 'Buckley', ko_tko: { count: 4, percent: 57 }, submission: { count: 0, percent: 0 }, decision: { count: 3, percent: 43 }, total_losses: 7 },
      insight: 'Amostra pequena pro Brady (só 2 derrotas em 20 lutas), mas as DUAS foram por TKO em pé no UFC: Belal Muhammad em UFC 280 (TKO R2) e Michael Morales em UFC 322 (TKO R1). Padrão claro mesmo com amostra curta: quando Brady perde, é por nocaute técnico em pé, finalizar wrestler é difícil mas striking pesado funciona. Buckley tem 7 derrotas: 4 por KO (Gosh R1 em 2016, Holland TKO R3 em 2020, Di Chirico flying knee em 2021, Curtis TKO R2 em 2022) e 3 por decisão (Storley em Bellator 197, Imavov em 2022, Usman em 2025). Submissão zero pros dois. Caminho do Buckley é striking pesado, do Brady é wrestling pra controlar a luta e tirar o americano da distância onde ele finaliza.',
    },

    previsao_final: {
      winner_name: 'Sean Brady',
      winner_side: 'fighter1',
      predicted_method: 'Decisão ou submissão tardia',
      confidence_score: 7,
      confidence_label: 'MÉDIA-ALTA',
      explanation:
        'A pick é Sean Brady por decisão dominante ou submissão tardia. Olhando luta por luta, a vantagem aparece em quatro dimensões: stats (Brady 87% TDD elite + 3.62 TD/15min com 50% accuracy vs Buckley TDD 73%), estilo (wrestler-grappler com 6 subs vs striker com 0 subs e zero jogo de chão ofensivo), nível de competição (Brady wrestlou Edwards e Burns por 5 rounds, controlou; Buckley foi UD-controlado pelo Usman 12:57) e qualitative intel (BJJ Renzo Gracie + 5/7 TDs no Edwards é grau acima do que Buckley enfrentou em wrestler-grappler). Buckley tem caminho viável (35%): 10 cm de envergadura, KO power genuíno, fechou Covington 1/8 nas TDs (12.5%) provando que TDD pode funcionar, e Brady tomou TKO R1 do Morales há 6 meses por jab+overhand. Mas Brady NÃO precisa trocar em pé: ele faz wrestling agressivo e ataca subs na transição. As DUAS derrotas do Brady foram contra striker-pressure (Belal striking volume; Morales jab+overhand), nenhuma foi contra wrestler. Pra Buckley vencer, precisa replicar o que Belal fez (volume striking constante por 2 rounds) ou conectar 1-shot KO antes de Brady fechar wrestling. Convicção 7 porque quatro dimensões convergem mas não é 8 porque Brady chin question é real (2 KOs recentes), Buckley tem KO power + TDD melhor que reportes sugerem (Cov 1/8), e Brady é wrestler-grappler que precisa "navegar" um round de troca em pé pra fechar pra wrestling.',
      x_factor: {
        title: 'A Primeira Tentativa de Queda no R1',
        description: 'Brady tenta queda nos primeiros 60-90s. Se conecta, controla 4-5min/round e busca sub tardia ou 30-27. Se Buckley sprawla cleanly (como fez 7 de 8 contra Cov), Brady tem que "navegar" 5+ minutos em pé contra striker com 10 cm reach e KO power genuíno. Brady teve 2 derrotas TKO recentes onde aceitou trocação prolongada. R1 vai dar a leitura.',
      },
      upset_alert: {
        title: 'Buckley Defende Wrestling Como Contra Cov',
        description: 'Buckley fechou Covington (top-1 wrestler all-time UFC) em 1/8 (12.5%) das tentativas em dez 2024 e finalizou TKO R3 com pressure striking e uppercut acumulado. Se Buckley defende 6-8 das 10 tentativas do Brady, mantém distância com 10 cm reach a mais, e conecta heavy combinations (right hand + left hook, 11 KOs em 21 wins por striking puro), pode reproduzir o blueprint Morales/Belal. Brady vai 0-2 contra striker que mantém pressão volume + power. Probabilidade 35%, real porque o Cov 1/8 é precedente de TDD funcional + Brady tem 2 derrotas TKO recentes contra striker.',
      },
      probabilities: { fighter1: { nome: 'Brady', percent: 60 }, fighter2: { nome: 'Buckley', percent: 37 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Sean Brady vence porque, primeiro, tem 87% TDD elite UFC.com e 3.62 TD/15min com 50% accuracy, dominando onde a luta vai pro chão (Edwards 5/7 TDs com 10:16 controle e 221-23 strikes). Segundo, Brady é faixa-preta BJJ Renzo Gracie com 6 subs em 18 vitórias (3 mata-leões, 3 guilhotinas, 1 kimura, 1 arm triangle) e Buckley tem ZERO submissões em 21 vitórias com zero jogo de chão ofensivo. Terceiro, Brady já provou cardio 5R contra wrestler-elite (Burns UD wrestling-heavy 17 TD attempts), enquanto a única vez Buckley enfrentou wrestler de elite (Usman) foi UD-controlado 12:57. Caminho da vitória: queda agressiva no R1, top control com sub-attempts em transição (estilo Edwards finish), busca finalização R3 ou cards 30-27. Desmorona se Buckley fechar wrestling como fez com Covington (1/8) e Brady aceitar trocação em pé prolongada onde foi quebrado por Morales (TKO R1 jab+overhand) e Belal (TKO R2 volume striking pressure).',
        conviction_score: 7,
        conviction_rationale: 'Convicção 7 porque quatro dimensões convergem (stats TDD elite, exposição direta do Buckley pelo Usman, BJJ ofensivo grau acima, calibre similar). Não é 8 porque AS DUAS derrotas do Brady foram contra striker-pressure (não wrestler), Buckley fechou Cov 1/8 provando que TDD funciona contra wrestler-elite quando striking pressure constante, e Brady tem 2 KO losses recentes que abrem chin question real. Não é 6 porque Brady wrestling + BJJ é grau acima de tudo Buckley enfrentou exceto Usman, e o gameplan claramente NÃO é trocar.',
        conviction_breakers: [
          'Brady aceita trocação prolongada como fez vs Morales (TKO R1) e Belal (TKO R2)',
          'Buckley defende wrestling com sprawl + body lock como fez com Cov 1/8 (12.5%)',
          'Chin recém-exposto do Brady contra power-puncher de 10 cm reach a mais',
          'Cardio do Brady falha em 3R com pressure striking cumulativa',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 37,
          key_scenario: 'Buckley sprawla as primeiras 2-3 tentativas de queda do Brady (Cov template, 7/8 sprawls). Mantém distância em pé com 10 cm reach. Brady force entradas perigosas pra wrestling repetidamente. Buckley conecta cruzado ou right hook contra fence (perfil dele, 11 KOs por striking puro). KO/TKO R2-R3 ou UD striking dominante.',
          required_conditions: [
            'Defender 6+ das 10 primeiras tentativas de queda (60% TDD nessa luta)',
            'Manter distância com 10 cm reach a mais e cage cutting reverso',
            'Encaixar power shot (right hook/overhand, jab+1-2)',
            'Cardio aguentar 15 minutos de pressure repetida sem cair em panic',
          ],
          historical_precedent: 'Buckley fechou Covington 1/8 (12.5%) em dez 2024 e venceu TKO R3, Cov é top-1 wrestler all-time UFC. Brady é wrestler-grappler com BJJ ofensivo (vantagem clara sobre Cov), mas Buckley provou que TDD pode funcionar contra wrestler de elite. Plus Brady foi quebrado 2x por striker-pressure recentemente (Morales 2025, Belal 2022). O caminho do Buckley é o mesmo do Belal: volume + pressure + capitalize on Brady chin recente.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Sean Brady', odds: '-200 a -215 (DK/FanDuel abr 2026)', reasoning: 'Probabilidade real 60%, implícita -200 = 67%. Mercado paga ligeiramente acima da estimativa real. Sem grande edge ML.' },
          { type: 'Método', pick: 'Brady por Decisão', odds: '+150 a +200 (estimado)', reasoning: 'Brady decide 50% wins (wrestler-grappler que controla rounds). Buckley nunca foi finalizado por sub em 28 lutas. Cenário mais provável é UD 30-27 wrestling-heavy. Em +180 implícita é 36%, edge real.' },
          { type: 'Método', pick: 'Brady por Submissão', odds: '+400 a +500 (estimado)', reasoning: 'Brady 33% sub rate, finalizou Edwards (mata-leão R4) e Gastelum (kimura) recentemente. Mas Buckley nunca finalizado em 28 lutas. Probabilidade real 18-22%. Em +450 implícita é 18%, edge leve.' },
        ],
        best_bet: { pick: 'Brady por Decisão em +180', reasoning: 'Maior edge esperado da luta. Brady wrestling cumulativo (3.62 TD/15min + 87% TDD), Buckley UD-perdeu pra Usman wrestler. Cenário mais provável é Brady 30-27 ou 29-28 dominante. ML é caro demais.' },
      },
      key_stats: [
        { value: '87%', label: 'Defesa de quedas do Brady (UFC.com)', sublabel: 'Stat elite. Acima da maioria dos wrestlers do peso meio-médio.' },
        { value: '4 / 13', label: 'Quedas Usman conectou em Buckley (UFC ESPN 69)', sublabel: '30.7% TDA, 12:57 controle, 137-51 strikes. Buckley UD-controlado por wrestler-elite.' },
        { value: '1 / 8', label: 'Quedas Covington conectou em Buckley (UFC Tampa 2024)', sublabel: '12.5% TDA. Buckley fechou wrestling do top-1 wrestler all-time UFC. TDD pode funcionar.' },
        { value: '0', label: 'Submissões do Buckley em 21 vitórias', sublabel: 'Striker puro sem jogo de chão ofensivo. Brady tem 6 subs.' },
        { value: '2', label: 'KOs sofridos por Brady em 2 derrotas UFC', sublabel: 'Belal R2 (volume striking) e Morales R1 (jab+overhand). AMBAS por striker-pressure, NÃO wrestler.' },
      ],
      odds: {
        fighter1_odds: '-200',
        fighter2_odds: '+170',
        fighter1_name: 'Brady',
        fighter2_name: 'Buckley',
        source: 'DraftKings/FanDuel Brady -200 a -215 / Buckley +164 a +170 em abril/2026. Polymarket alinhado. Mercado paga Brady favorito moderado pelo wrestling pedigree.',
      },
      armadilha: {
        titulo: 'Armadilha: Buckley por KO Rápido R1',
        descricao: 'O mercado vai pagar pesado em "Buckley por KO" baseado nos 71% finalização KO/TKO e o KO recente do Brady contra Morales. Mas Brady é wrestler-grappler que vai forçar wrestling agressivo cedo (3.62 TD/15min, 87% TDD). Pra Buckley encaixar KO precisa primeiro defender as quedas, algo que falhou contra Usman (4/13 absorvidas) embora tenha funcionado contra Cov (1/8). E mesmo se a luta ficar em pé, mais provável é Brady "navegar" pelos primeiros minutos pra entrar em wrestling, não aceitar trocação prolongada. Apostar KO R1 específico ignora a probabilidade do Brady forçar wrestling cedo.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'brady-vs-buckley');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
