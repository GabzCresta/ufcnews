import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'thicknesse-vs-morales',
  evento_id: null,
  slug: 'thicknesse-vs-morales',
  titulo: 'Thicknesse vs Morales: Pickem Literal',
  subtitulo:
    'Colby Thicknesse parceiro de treino do Volkanovski, em casa em Perth, 1-1 UFC. Vince Morales 35 anos em 0-3 streak, must-win pra manter vaga, treina com Merab/Sterling. FightOdds.io: -110 / -110 pickem literal. GATE 2 dispara: ambos 80% e 100% decisão recente.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,70m', envergadura: 'N/D', idade: 26, academia: 'Freestyle Fighting Gym (Volkanovski)' },
      fighter2: { altura: '1,70m', envergadura: '178cm', idade: 35, academia: 'Syndicate MMA Las Vegas' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão',
    confidence: 'BAIXA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Colby Thicknesse', apelido: 'Slickness', record: '8-1-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  fighter2_info: { nome: 'Vince Morales', apelido: 'Vandetta', record: '16-10-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: '2 de Maio, 2026',
  evento_local: 'RAC Arena, Perth, Austrália',
  categoria_peso: 'Peso Galo (135 lbs)',
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
      categoria_peso: 'Peso Galo (135 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Pickem Literal',
      tagline_sub: '-110/-110. GATE 2 dispara: ambos high decision rate. Decisão é o caminho.',
      fighter1: {
        nome_completo: 'Colby "Slickness" Thicknesse',
        apelido: 'Slickness',
        sobrenome: 'Thicknesse',
        record: '8-1-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Wollongong, NSW Austrália | 26 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-09/THICKNESSE_COLBY_L_09-27.png?itok=k5_-fSZV',
      },
      fighter2: {
        nome_completo: 'Vince "Vandetta" Morales',
        apelido: 'Vandetta',
        sobrenome: 'Morales',
        record: '16-10-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Ontario, Oregon | 35 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-02/MORALES_VINCE_L_02-15.png?itok=QHbp1JM-',
      },
    },
    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'GATE 2 Disparou: Decisão É o Caminho',
      insight:
        'Ambos os lutadores têm decision rate ALTÍSSIMO recente: Thicknesse 100% UFC (UD vs Topuria + UD vs Musasa), Morales 4/5 (80%) últimas decisões. GATE 2 (decision survivor) dispara — predicted_method default = Decisão. Thicknesse é wrestler-pressure (TD avg 1.0, BJJ + wrestling desde 6 anos, parceiro Volkanovski), Morales é striker-grappler veterano com sub threat (quase finalizou Smith). Pickem literal -110/-110 sinaliza que o mercado também não vê edge claro. Edge real está em over rounds + total sig strikes, não em ML.',
      tension: {
        truth_a: 'Thicknesse 26 anos, em ascensão, hometown Perth, parceiro Volkanovski no córner. Stuffed 8/8 takedowns vs Topuria.',
        truth_b: 'Morales 35 anos must-win, mais experiência (16-10), poder real (KO Smolka 2021), sub threat (quase finalizou Smith). Treinou com Merab/Sterling/Simon em 2025.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Colby Thicknesse', color: 'red', momentum_score: 6, momentum_label: 'Em Ascensão', momentum_trend: 'ascending',
        momentum_note: '1-1 UFC. Vitória apertada UD sobre Musasa em UFC Perth set/2025 (mesma arena, foi rocked múltiplas vezes pelo straight right). Antes UD loss vs Topuria UFC 312 fev/2025 (debut short notice — stuffed 8/8 takedowns mas absorveu dano cumulativo).',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Josias Musasa', result: 'W', method: 'UD (29-28 x3)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'UFC Perth (mesma arena). Apertada. Foi rocked.' },
          { date: 'Fev 2025', opponent: 'Aleksandre Topuria', result: 'L', method: 'UD (30-27 x3)', opponent_rank: 'Prospect', quality_score: 3, quality_label: 'Bom', note: 'UFC 312 debut. Stuffed 8/8 TDs.' },
          { date: 'Pré-UFC', opponent: 'Regional', result: 'W', method: '4 finishes + 4 dec', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: '7-1 amador → pro AUS regional.' },
        ],
      },
      fighter2: {
        nome: 'Vince Morales', color: 'blue', momentum_score: 2, momentum_label: 'Em Queda', momentum_trend: 'descending',
        momentum_note: '0-3 streak (todas decisão). Última W UFC: KO1 Smolka dez/2021 — quase 4.5 anos atrás. Must-win pra manter vaga UFC. Treinou com Merab/Sterling/Ricky Simon em 2025 (elite BW sparring).',
        recent_fights: [
          { date: 'Mar 2025', opponent: 'Raul Rosas Jr', result: 'L', method: 'UD (29-28 x3)', opponent_rank: 'Prospect', quality_score: 3, quality_label: 'Bom', note: 'UFC ESPN Mexico.' },
          { date: 'Fev 2025', opponent: 'Elijah Smith', result: 'L', method: 'UD (29-28 x3)', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Médio', note: 'Smith reportou "considerou tapar" choke.' },
          { date: 'Set 2024', opponent: 'Taylor Lapilus', result: 'L', method: 'UD (30-27 x3)', opponent_rank: 'Top 15 BW', quality_score: 4, quality_label: 'Muito Bom', note: 'Lapilus striking clinic.' },
          { date: 'Nov 2022', opponent: 'Miles Johns', result: 'L', method: 'Decisão', opponent_rank: 'UFC ativo', quality_score: 2, quality_label: 'Médio', note: 'Última antes do release inicial.' },
          { date: 'Mai 2022', opponent: 'Jonathan Martinez', result: 'L', method: 'UD', opponent_rank: 'UFC ativo', quality_score: 2, quality_label: 'Médio', note: 'UFC FN 206.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Thicknesse', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '1V-1D UFC', contra_top5: '0V-0D' },
      fighter2: { nome: 'Morales', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '0V-3D streak', contra_top5: '0V-1D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem comum. Calibre similar (~3). GATE 2 dispara: ambos >40% decisão last 5 (Thicknesse 100%, Morales 80%). Default predicted_method = Decisão.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.33, valueB: 3.57, maxVal: 6, format: 'decimal', note: 'Volume similar.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.5, valueB: 4.00, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Morales absorve mais (4.00) do que entrega (3.57). Alerta defensivo.' },
        { label: 'Defesa de Strikes (%)', valueA: 0, valueB: 53, maxVal: 100, format: 'percent', note: 'Thicknesse Str.Def não capturado.' },
        { label: 'Takedowns por 15 Min', valueA: 1.0, valueB: 0.5, maxVal: 5, format: 'decimal', note: 'Thicknesse mais wrestling ofensivo.' },
        { label: 'Defesa de Takedown (%)', valueA: 50, valueB: 0, maxVal: 100, format: 'percent', note: 'Thicknesse TDD 50%. Morales não capturado.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '26 anos', fighter2: '35 anos', note: 'Thicknesse 9 anos mais novo. Crítico.' },
        { label: 'Altura', fighter1: '1,70m', fighter2: '1,70m', note: 'Igual.' },
        { label: 'Envergadura', fighter1: 'N/D', fighter2: '178cm (70")', note: 'Morales reach conhecida.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'Freestyle Fighting Gym (Volkanovski)', fighter2: 'Syndicate MMA Las Vegas', note: 'Camp elite ambos.' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume Striking', advantage: 'fighter2', gap: 1, note: 'SLpM levemente superior.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter1', gap: 1, note: 'TD avg 1.0 vs 0.5.' },
        { label: 'Power', advantage: 'fighter2', gap: 2, note: 'Morales KO Smolka 2021. Thicknesse 0 KO UFC.' },
        { label: 'Cardio 3R', advantage: 'fighter1', gap: 2, note: 'Idade 26 + Volk camp. Morales 35 mas vai distância.' },
        { label: 'Sub Game', advantage: 'fighter2', gap: 1, note: '5 subs carreira (peruvian necktie UFL título 2024).' },
        { label: 'Hometown', advantage: 'fighter1', gap: 3, note: 'Perth + crowd advantage scorecards.' },
      ],
      summary: 'Equilíbrio quase total. Edge marginal Thicknesse via idade + hometown. Morales tem mais experiência mas em queda.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Thicknesse', ko_tko: { count: 2, percent: 25 }, submission: { count: 2, percent: 25 }, decision: { count: 4, percent: 50 }, total_wins: 8 },
      fighter2: { nome: 'Morales', ko_tko: { count: 7, percent: 44 }, submission: { count: 5, percent: 31 }, decision: { count: 4, percent: 25 }, total_wins: 16 },
      insight: 'Thicknesse 50% decisões. Morales mais finisher histórico mas decisões dominam recente.',
    },
    previsao_final: {
      winner_name: 'Colby Thicknesse', winner_side: 'fighter1',
      predicted_method: 'Decisão', confidence_score: 5, confidence_label: 'BAIXA',
      explanation:
        'Pickem literal real. Pick é Thicknesse por decisão com convicção 5 (close fight). Edge marginal via idade -9 anos, hometown Perth + cards advantage, parceiro Volkanovski (camp elite), Morales em 0-3 streak indo embora. GATE 2 (decision survivor) DISPARA — ambos com decision rate >40% recente, default predicted_method = Decisão. Não há justificação (a)/(b)/(c) clara pra non-decision exemption. Acredito que será uma luta parelha, mas vejo um caminho claro onde Thicknesse vence porque é mais novo, mais fresco, e o crowd vai ajudar em cards apertados.',
      x_factor: {
        title: 'Cards apertados decidem',
        description: 'Pickem literal + decisão modal + hometown = 1-2 rounds podem ser decididos por crowd noise nos olhos dos juízes. Edge sutil mas real para Thicknesse.',
      },
      upset_alert: {
        title: 'Morales encontra finish em scramble',
        description: '7 KOs + 5 subs carreira. Quase finalizou Smith por choke. Se conectar overhand right ou achar pescoço, fim. Probabilidade ~40%.',
      },
      probabilities: { fighter1: { nome: 'Thicknesse', percent: 51 }, fighter2: { nome: 'Morales', percent: 47 }, draw: 2 },
      conviction: {
        thesis:
          'A tese é: Thicknesse vence porque é 9 anos mais novo, em casa em Perth, parceiro Volkanovski no córner, e Morales está em 0-3 must-win aos 35. Caminho: Thicknesse pressiona com TD attempts, Morales defende mas absorve dano cumulativo, decisão apertada com crowd advantage. Acredito que será uma luta parelha, mas vejo um caminho claro.',
        conviction_score: 5,
        conviction_rationale: 'Convicção 5 honesta. Pickem literal -110/-110. GATE 2 dispara forçando default decisão. Edge marginal só em idade + hometown. Sem dimensions enough pra conviction 6+.',
        conviction_breakers: [
          'Morales conectar overhand right (KO Smolka power)',
          'Sub em scramble (Morales quase finalizou Smith)',
          'Cards podem ir pra Morales pelo volume superior',
          'Thicknesse cardio cair (sample tiny UFC)',
        ],
        underdog_path: {
          viable: true, probability_estimate: 47,
          key_scenario: 'Morales usa volume e experiência pra controlar pace. Conecta overhand em momento de transição ou acha pescoço em scramble. OR ganha cards apertados pelo volume superior.',
          required_conditions: ['Sustentar volume 3 rounds', 'Não ceder TDs repetidos', 'Achar finish ou volume superior', 'Vencer cards apertados'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Round Group', pick: 'Over 2.5 Rounds', odds: '-150 a -180', reasoning: 'Combined 5/5 últimas decisões. GATE 2 disparado. Probabilidade real ~75% de passar 2.5R.' },
          { type: 'Total Sig Strikes', pick: 'Over 130 (combinado)', odds: 'Variável', reasoning: 'SLpM combinado ~7. Em 15 minutos teóricos = 105 mas BW prelim costuma sustentar volume — Over 130 alinhado com Lapilus vs Morales (130+ strikes em 15 min).' },
          { type: 'Moneyline', pick: 'Thicknesse', odds: '-110', reasoning: 'Edge marginal idade + hometown. Pickem real, pick por preferência.' },
          { type: 'Longshot', pick: 'Morales por Submissão', odds: '+500-+700', reasoning: 'Quase finalizou Smith. 5 subs carreira. Probabilidade ~10%.' },
        ],
        best_bet: { pick: 'Over 2.5 Rounds em -150 a -180', reasoning: 'GATE 2 disparou: ambos high decision rate. Decisão é cenário modal claro. Pick mais defensável.' },
      },
      key_stats: [
        { value: '-110/-110', label: 'Pickem literal', sublabel: 'FightOdds.io opening. Mercado também não vê edge.' },
        { value: '0-3', label: 'Streak do Morales', sublabel: 'Must-win pra manter vaga.' },
        { value: '5/5', label: 'Últimas decisões combinadas', sublabel: 'GATE 2 dispara: default decisão.' },
        { value: '9 anos', label: 'Diferença de idade', sublabel: 'Thicknesse 26 vs Morales 35.' },
      ],
      odds: { fighter1_odds: '-110', fighter2_odds: '-110', fighter1_name: 'Thicknesse', fighter2_name: 'Morales', source: 'FightOdds.io opening pickem literal em 25 de abril de 2026.' },
      armadilha: {
        titulo: 'Armadilha: Method bet específico KO ou Sub',
        descricao: 'Mercado vai oferecer "Morales por KO" via narrativa "veterano finisher" ou "Thicknesse por TKO" via "wrestler em casa". A armadilha: 5/5 últimas combinadas foram decisão, GATE 2 dispara default decisão, e ambos têm Str.Def furada (Morales SApM > SLpM). Method bet específico ignora o sinal claro: decisão é cenário modal, não exception.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'thicknesse-vs-morales');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
