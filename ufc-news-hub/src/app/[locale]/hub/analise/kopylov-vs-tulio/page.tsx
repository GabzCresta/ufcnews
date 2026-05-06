import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'kopylov-vs-tulio',
  evento_id: null,
  slug: 'kopylov-vs-tulio',
  titulo: 'Kopylov vs Tulio: Dois Strikers Em Recuperação',
  subtitulo:
    'Kopylov vem de duas derrotas seguidas (Rodrigues UD em novembro de 2025 e Costa UD em julho de 2025) com 86% das vitórias por KO/TKO. Tulio vem de KO no R2 contra Christian Duncan em novembro de 2025, interrompendo sequência de 10 vitórias. Russo nunca nocauteado contra brasileiro com 71% de KOs e chin recém-exposto.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,88m', envergadura: '193cm', idade: 33, academia: 'N/D' },
      fighter2: { altura: '1,85m', envergadura: '188cm', idade: 31, academia: 'Chute Boxe' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão ou KO tardio',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Roman Kopylov',
    apelido: '',
    record: '14-5-0',
    ranking: 'N/R Peso Médio',
    ultimasLutas: [
      { result: 'L', opponent: 'Gregory Rodrigues', method: 'Decisão Unânime', event: 'UFC 322' },
      { result: 'L', opponent: 'Paulo Costa', method: 'Decisão Unânime', event: 'UFC 318' },
      { result: 'W', opponent: 'Chris Curtis', method: 'TKO R3 (chute alto)', event: 'UFC Fight Night 249' },
    ],
  },
  fighter2_info: {
    nome: 'Marco Tulio',
    apelido: 'Matuto',
    record: '14-2-0',
    ranking: 'N/R Peso Médio',
    ultimasLutas: [
      { result: 'L', opponent: 'Christian Leroy Duncan', method: 'KO R2 (3:20)', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Tresean Gore', method: 'TKO R2 (3:16)', event: 'UFC 314' },
      { result: 'W', opponent: 'Ihor Potieria', method: 'KO R1 (3:04)', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Peso Médio (185 lbs)',
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
      categoria_peso: 'Peso Médio (185 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Dois Strikers Em Recuperação',
      tagline_sub: 'Kopylov vem de 2 UD perdidas. Tulio vem de KO no R2 do Duncan. Russo nunca nocauteado em 19 lutas. Brasileiro 10 KOs em 14 vitórias mas chin recém-exposto.',
      fighter1: {
        nome_completo: 'Roman Kopylov',
        apelido: '',
        sobrenome: 'Kopylov',
        record: '14-5-0',
        ranking: 'N/R Peso Médio',
        info_extra: 'Moscou, Rússia | 33 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/KOPYLOV_ROMAN_L_11-15.png?itok=vkU7He50',
      },
      fighter2: {
        nome_completo: 'Marco "Matuto" Tulio',
        apelido: 'Matuto',
        sobrenome: 'Tulio',
        record: '14-2-0',
        ranking: 'N/R Peso Médio',
        info_extra: 'Brasil | 31 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/12/TULIO_MARCO_L_01-11.png?itok=1gXLlcIU',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Chin Granite vs Chin Recém-Exposto',
      insight:
        'Kopylov vem de duas derrotas seguidas em decisão unânime: Gregory Rodrigues em UFC 322 (novembro de 2025, scorecards 30-27 / 30-27 / 29-28) e Paulo Costa em UFC 318 (julho de 2025, scorecards 30-27 / 30-27 / 29-28 com knockdown sofrido cedo). Antes disso vinha de TKO chute alto no Chris Curtis em janeiro de 2025. Aos 33 anos, com sequência de 14 vitórias e 12 finalizações por KO/TKO (86%), o russo NUNCA foi nocauteado em 19 lutas profissionais. Tulio é o brasileiro de 31 anos que veio do Contender Series 2024 com sequência de 10 vitórias seguidas e 71% de finalização por KO/TKO, mas tomou KO no R2 contra Christian Leroy Duncan em novembro de 2025 — primeira derrota da carreira UFC, interrompendo a sequência. Stylistic é striker russo técnico (50% precisão, 89% TDD UFC.com) contra striker brasileiro mais explosivo (59% precisão, 6.69 SLpM volume superior). O ponto que decide: chin granite do russo vs chin recém-exposto do brasileiro.',
      tension: {
        truth_a: 'Tulio 71% KO/TKO finish rate, 6.69 SLpM volume superior em pé, 59% precisão, 31 anos. Antes do KO sofrido, vinha de 10 vitórias seguidas com 4 finishes UFC. Energia de juventude e KO power genuíno.',
        truth_b: 'Kopylov NUNCA nocauteado em 19 lutas profissionais (chin granite). 89% TDD UFC.com. Mesmo vindo de 2 UD perdidas, fez 25 minutos com Rodrigues e Costa absorvendo dano sem cair. Tulio acabou de tomar KO no R2 do Duncan, chin question recente.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Roman Kopylov', color: 'red', momentum_score: 4, momentum_label: 'Em Recuperação', momentum_trend: 'descending',
        momentum_note: 'Vem de duas derrotas seguidas em decisão unânime contra strikers ranqueados: Rodrigues em UFC 322 (novembro de 2025) e Costa em UFC 318 (julho de 2025), ambas 30-27 / 30-27 / 29-28. Antes disso, TKO chute alto sobre Chris Curtis em janeiro de 2025. Russo de 33 anos, nunca nocauteado em 19 lutas profissionais. UFC.com mostra 50% precisão, 89% TDD, 4.59 SLpM, 5.18 SApM.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Gregory Rodrigues', result: 'L', method: 'Decisão Unânime (30-27 x2, 29-28)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD em UFC 322. Rodrigues conectou mais cleanly em 3 rounds.' },
          { date: 'Jul 2025', opponent: 'Paulo Costa', result: 'L', method: 'Decisão Unânime (30-27 x2, 29-28)', opponent_rank: 'Ex-Top 5 Peso Médio', quality_score: 4, quality_label: 'Muito Bom', note: 'UD em UFC 318. Costa derrubou cedo, dominou body kicks.' },
          { date: 'Jan 2025', opponent: 'Chris Curtis', result: 'W', method: 'TKO R3 (chute alto, 4:59)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'TKO chute alto no R3, Performance da Noite.' },
          { date: 'Jun 2024', opponent: 'Cesar Almeida', result: 'W', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'SD em 3 rounds.' },
          { date: 'Fev 2024', opponent: 'Anthony Hernandez', result: 'L', method: 'Sub R2 (mata-leão 3:23)', opponent_rank: 'Top 15 Peso Médio', quality_score: 3, quality_label: 'Bom', note: 'Sub no R2.' },
        ],
      },
      fighter2: {
        nome: 'Marco Tulio', color: 'blue', momentum_score: 6, momentum_label: 'Estável (com ressalvas)', momentum_trend: 'descending',
        momentum_note: 'Vem de KO sofrido no R2 contra Christian Leroy Duncan em novembro de 2025, primeira derrota da carreira UFC, interrompendo sequência de 10 vitórias seguidas. Antes disso vinha de TKO sobre Tresean Gore em abril de 2025 e KO sobre Ihor Potieria em janeiro de 2025. Brasileiro de 31 anos do Chute Boxe. UFC.com mostra 59% precisão, 6.69 SLpM (volume alto), 27% TD Acc.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Christian Leroy Duncan', result: 'L', method: 'KO R2 (3:20)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Primeira derrota UFC. Quebrou sequência de 10 vitórias.' },
          { date: 'Abr 2025', opponent: 'Tresean Gore', result: 'W', method: 'TKO R2 (3:16)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'TKO em UFC 314.' },
          { date: 'Jan 2025', opponent: 'Ihor Potieria', result: 'W', method: 'KO R1 (3:04)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'KO no R1, estreia UFC.' },
          { date: 'Ago 2024', opponent: 'Matthieu Letho Duclos', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Contender Series, contrato UFC.' },
          { date: 'Ago 2023', opponent: 'Yousri Belgaroui', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'DWCS S7.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Kopylov', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '2V-3D (últimas 5)', contra_top5: '0V-1D' },
      fighter2: { nome: 'Tulio', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: '4V-1D (últimas 5 incluindo DWCS)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Kopylov enfrentou nível superior recente (Rodrigues, Costa, Hernandez todos UFC veterans). Tulio só 3 lutas UFC, todas contra adversários sem ranking. Calibre Kopylov 3, Tulio 1, gap real de 2 pontos.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.59, valueB: 6.69, maxVal: 7, format: 'decimal', note: 'Tulio volume superior, perfil de pressure striker.' },
        { label: 'Precisão de Strikes (%)', valueA: 50, valueB: 59, maxVal: 100, format: 'percent', note: 'Tulio mais preciso.' },
        { label: 'Strikes Absorvidos/Min', valueA: 5.18, valueB: 4.5, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Equilibrado. Kopylov absorve mais por aceitar troca.' },
        { label: 'Defesa de Strikes (%)', valueA: 50, valueB: 50, maxVal: 100, format: 'percent', note: 'Equilibrado.' },
        { label: 'Takedowns por 15 Min', valueA: 0.5, valueB: 0.3, maxVal: 5, format: 'decimal', note: 'Ambos strikers.' },
        { label: 'Defesa de Takedown (%)', valueA: 89, valueB: 60, maxVal: 100, format: 'percent', note: 'Kopylov 89% TDD elite UFC.com.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '31 anos', note: 'Tulio 2 anos mais novo.' },
        { label: 'Altura', fighter1: '1,88m', fighter2: '1,85m', note: 'Kopylov 3 cm mais alto.' },
        { label: 'Envergadura', fighter1: '193 cm', fighter2: '188 cm', note: 'Kopylov 5 cm a mais.' },
        { label: 'Stance', fighter1: 'N/D', fighter2: 'N/D', note: 'Stance não confirmada nas fontes oficiais.' },
        { label: 'Academia', fighter1: 'N/D', fighter2: 'Chute Boxe', note: 'Kopylov russo, Tulio brasileiro.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume / Pressure', advantage: 'fighter2', gap: 3, note: 'Tulio 6.69 SLpM vs Kopylov 4.59. Brasileiro mais agressivo.' },
        { label: 'Precisão de Strikes', advantage: 'fighter2', gap: 2, note: 'Tulio 59% vs Kopylov 50%.' },
        { label: 'Chin / Durabilidade', advantage: 'fighter1', gap: 3, note: 'Kopylov NUNCA nocauteado em 19 lutas. Tulio acabou de tomar KO no R2 do Duncan.' },
        { label: 'Range / Reach', advantage: 'fighter1', gap: 2, note: 'Kopylov 5 cm de envergadura a mais.' },
        { label: 'Experiência UFC', advantage: 'fighter1', gap: 3, note: 'Kopylov 9 lutas UFC (5-4). Tulio só 3 (2-1).' },
        { label: 'Cardio / 3 Rounds', advantage: 'fighter1', gap: 2, note: 'Kopylov fez 25 minutos com Rodrigues e Costa absorvendo dano. Tulio nunca foi pra 25 minutos contra elite.' },
      ],
      summary: 'Kopylov tem chin granite e experiência UFC. Tulio tem volume e KO power. Pergunta-chave: chin recém-exposto do brasileiro aguenta os strikes técnicos do russo, ou a pressure do Tulio expõe o cardio do veterano?',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Kopylov', ko_tko: { count: 12, percent: 86 }, submission: { count: 0, percent: 0 }, decision: { count: 2, percent: 14 }, total_wins: 14 },
      fighter2: { nome: 'Tulio', ko_tko: { count: 10, percent: 71 }, submission: { count: 1, percent: 7 }, decision: { count: 3, percent: 22 }, total_wins: 14 },
      insight: 'Kopylov 86% das vitórias por KO/TKO (12 em 14), zero subs (perfil de striker técnico que finaliza). Tulio 71% por KO/TKO (10 em 14), 1 sub (striker mais agressivo). Ambos finalizadores natos.',
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Kopylov', ko_tko: { count: 0, percent: 0 }, submission: { count: 2, percent: 40 }, decision: { count: 3, percent: 60 }, total_losses: 5 },
      fighter2: { nome: 'Tulio', ko_tko: { count: 2, percent: 100 }, submission: { count: 0, percent: 0 }, decision: { count: 0, percent: 0 }, total_losses: 2 },
      insight: 'Kopylov NUNCA foi nocauteado (0 KOs em 5 derrotas). Vulnerabilidade real é grappling/wrestling: 2 subs (Roberson R3 sub, Hernandez RNC UFC 298) e 3 dec (Duraev UD, Costa UD, Rodrigues UD) — todas contra wrestlers ou grapplers que tiraram a luta da troca. Tulio caiu 2 vezes ambas por KO: Alexandre Silva TKO R2 em SFT 5 (2018, em 3:52), e Christian Leroy Duncan KO R2 (2025). Padrão simétrico: Tulio cai pra striker técnico, Kopylov cai pra grappler. Como ambos são strikers, a luta deve ficar em pé onde Tulio é o vulnerável.',
    },

    previsao_final: {
      winner_name: 'Roman Kopylov',
      winner_side: 'fighter1',
      predicted_method: 'Decisão ou KO tardio',
      confidence_score: 5,
      confidence_label: 'MÉDIA',
      explanation:
        'A pick é Roman Kopylov por decisão ou KO tardio. Acredito que será uma luta parelha, mas vejo um caminho claro onde Kopylov vence porque tem chin de granite (NUNCA nocauteado em 19 lutas profissionais) contra um Tulio que acabou de tomar KO no R2 contra Duncan em novembro de 2025. Plus 5 cm de envergadura, 9 lutas UFC vs 3 do brasileiro, e perfil de cardio testado em 25 minutos contra Rodrigues e Costa nas últimas duas. Tulio tem caminho real (45%): volume superior (6.69 vs 4.59 SLpM), precisão maior (59% vs 50%), juventude e KO power. Mas pra capitalizar precisa quebrar chin que nunca foi quebrado em 19 lutas. Convicção 5 (MÉDIA) porque é luta de strikers em peso médio com variance alta e Kopylov vem de 2 derrotas seguidas, declining trend.',
      x_factor: {
        title: 'Chin do Tulio Aguenta o R1?',
        description: 'Tulio acabou de tomar KO contra Duncan no R2. Se Kopylov encaixa cruzado ou chute alto cedo (perfil dele, finalizou Curtis com chute alto), brasileiro pode cair de novo. Se Tulio aguenta os primeiros 5 minutos com sprawl + cabeça defensiva, volume superior dele pode acumular dano e expor o cardio do veterano.',
      },
      upset_alert: {
        title: 'Tulio Volume Cumulativo + Cardio do Russo',
        description: 'Tulio 6.69 SLpM contra 4.59 do Kopylov. Volume bem maior. Brasileiro mais novo (31 vs 33), e Kopylov vem de 2 UDs perdidas onde absorveu dano. Se Tulio mantém pressure por 3 rounds e o cardio do russo declinar, pode levar nos cards. Probabilidade na casa dos 45%.',
      },
      probabilities: { fighter1: { nome: 'Kopylov', percent: 52 }, fighter2: { nome: 'Tulio', percent: 45 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Roman Kopylov vence porque, primeiro, NUNCA foi nocauteado em 19 lutas profissionais (chin granite real, todas as 5 derrotas por sub ou decisão). Segundo, tem 5 cm de envergadura sobre Tulio e 89% TDD elite pela UFC.com, mantendo a luta onde quer. Terceiro, Tulio acabou de tomar KO no R2 do Duncan em novembro de 2025, expondo chin question recente, e tem só 3 lutas UFC contra adversários sem ranking enquanto Kopylov fez 9 lutas contra UFC veterans. Caminho da vitória: distância controlada nos primeiros 90 segundos, contra-ataque com cruzado ou chute alto, KO tardio ou cards 30-27 / 29-28 acumulando volume técnico. Desmorona se Tulio impuser volume cumulativo de 6.69 SLpM por 3 rounds e o cardio do russo declinar como contra Rodrigues e Costa.',
        conviction_score: 5,
        conviction_rationale: 'Convicção 5 (MÉDIA) porque Kopylov vem de 2 UDs perdidas (declining trend real) mas chin granite + experiência UFC + chin question recente do Tulio convergem. É luta competitiva em peso médio com variance alta, ambos podem perder.',
        conviction_breakers: [
          'Tulio impôr volume superior (6.69 vs 4.59 SLpM) por 3 rounds',
          'Kopylov vir cansado pelo desgaste das últimas 2 derrotas',
          'Chin question do Tulio NÃO se materializar contra striker técnico',
          'Tulio encaixar cruzado clean cedo no R1 e replicar Duncan',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 45,
          key_scenario: 'Tulio impõe ritmo de pressure desde R1 com 6.69 SLpM. Acumula volume e dano cumulativo. Kopylov absorve mais que aguenta (declining cardio nas últimas 2 lutas). Tulio leva nos cards 30-27 ou 29-28, ou encaixa shot clean no R3 quando russo cansar.',
          required_conditions: [
            'Manter volume 6+ SLpM por 3 rounds',
            'Aproveitar 2 anos de juventude pra cardio',
            'Não dar costas nem aceitar clinch (Kopylov não wrestler)',
            'Resistir tentativas de chute alto/cruzado contra-ataque',
          ],
          historical_precedent: 'Rodrigues e Costa venceram Kopylov por UD acumulando volume e pressure. Tulio tem volume comparável (6.69 SLpM). Precedente direto pra Tulio replicar.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Roman Kopylov', odds: '-130 (estimado)', reasoning: 'Probabilidade real 52%, implícita -130 = 56.5%. Linha próxima de pickem. Sem grande edge.' },
          { type: 'Método', pick: 'Kopylov por Decisão', odds: '+200 a +250 (estimado)', reasoning: 'Kopylov fez 25 minutos contra Rodrigues e Costa nas últimas 2. Tulio só foi finalizado 1x. Se Kopylov controlar distância, decisão é cenário real. Edge em +200.' },
          { type: 'Método', pick: 'Tulio por KO/TKO', odds: '+200 a +250 (estimado)', reasoning: 'Tulio 71% finalização KO/TKO. Mas Kopylov nunca KO\'d. Probabilidade real 25-30%, edge marginal.' },
        ],
        best_bet: { pick: 'Kopylov por Decisão em +200 a +250', reasoning: 'Maior edge esperado da luta. Kopylov fez 25 minutos contra Rodrigues e Costa, Tulio nunca foi pra 25 minutos contra elite. Cenário mais provável dentro das vitórias do russo é UD via volume técnico cumulativo.' },
      },
      key_stats: [
        { value: '0', label: 'Vezes que Kopylov foi nocauteado em 19 lutas profissionais', sublabel: 'Chin granite. Todas as 5 derrotas foram por sub (2) ou decisão (3).' },
        { value: 'R2', label: 'Round em que Tulio tomou KO recente do Duncan', sublabel: 'Novembro de 2025, primeira derrota UFC, interrompeu sequência de 10 vitórias.' },
        { value: '2', label: 'Derrotas seguidas de Kopylov antes desse confronto', sublabel: 'Rodrigues UD nov/2025 + Costa UD jul/2025. Declining trend real.' },
        { value: '6.69', label: 'SLpM do Tulio pela UFC.com', sublabel: 'Volume bem superior aos 4.59 do Kopylov. Pressure striker.' },
      ],
      odds: {
        fighter1_odds: '-130',
        fighter2_odds: '+110',
        fighter1_name: 'Kopylov',
        fighter2_name: 'Tulio',
        source: 'DraftKings/FanDuel Kopylov -130 / Tulio +110 em abril de 2026 (estimado). Linha próxima de pickem.',
      },
      armadilha: {
        titulo: 'Armadilha: Tulio por KO Rápido',
        descricao: 'O mercado vai pagar Tulio por KO rápido baseado nos 71% de finalização KO/TKO. Mas Kopylov NUNCA foi nocauteado em 19 lutas profissionais e Tulio só finalizou strikers sem ranking nas suas 3 lutas UFC. Kopylov é nível superior (9 lutas UFC contra UFC veterans) e tem chin testado contra Curtis, Almeida, Costa, Rodrigues. Apostar em KO rápido é apostar contra o histórico inteiro do russo.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'kopylov-vs-tulio');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
