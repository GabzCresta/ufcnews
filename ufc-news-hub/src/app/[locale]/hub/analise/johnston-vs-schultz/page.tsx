import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'johnston-vs-schultz',
  evento_id: null,
  slug: 'johnston-vs-schultz',
  titulo: 'Johnston vs Schultz: Coin Flip Honesto',
  subtitulo:
    'Ben Johnston (35, bicampeão mundial de Muay Thai, 5-1 no MMA com 100% das vitórias por finalização) estreia no UFC depois de 2 anos parado. Wes Schultz (29, BJJ-wrestler, 0-1 no UFC) volta em cima da hora 6 semanas depois de tomar TKO. Período parado contra retorno relâmpago, dois alertas em direções opostas.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,93m', envergadura: '192cm', idade: 35, academia: 'The Fight Centre Brisbane' },
      fighter2: { altura: '1,88m', envergadura: '196cm', idade: 29, academia: 'Pura Vida BJJ Milwaukee' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'KO/TKO ou Sub',
    confidence: 'BAIXA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Ben Johnston', apelido: 'The Butcher', record: '5-1-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  fighter2_info: { nome: 'Wes Schultz', apelido: 'Party Time', record: '8-3-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: '2 de Maio, 2026',
  evento_local: 'RAC Arena, Perth, Austrália',
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
      evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
      evento_data: '2 de Maio, 2026',
      evento_local: 'RAC Arena, Perth, Austrália',
      categoria_peso: 'Peso Médio (185 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Coin Flip Honesto',
      tagline_sub: 'Dois anos parado contra retorno em 6 semanas pós-KO. Os dois com alertas grandes em direções opostas.',
      fighter1: {
        nome_completo: 'Ben "The Butcher" Johnston',
        apelido: 'The Butcher',
        sobrenome: 'Johnston',
        record: '5-1-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Logan, Queensland Austrália | 35 anos',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Wes "Party Time" Schultz',
        apelido: 'Party Time',
        sobrenome: 'Schultz',
        record: '8-3-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Sun Prairie, Wisconsin | 29 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-02/SHULTZ_WESLEY_R_02-28.png?itok=2j3FuYjG',
      },
    },
    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Período Parado contra Retorno Relâmpago',
      insight:
        'Johnston é bicampeão mundial de Muay Thai (WBC peso meio-pesado 2018), 5-1 no MMA com 100% das vitórias por finalização (4 finalizações + 1 KO), MAS se aposentou em março de 2024 — 2 ANOS PARADO. Pegou a vaga no UFC tardiamente (Vendy fora). 35 anos + ferrugem + filho a caminho. Schultz é BJJ-wrestler com jogo de finalização em ascensão (Suloev Stretch no DWCS), MAS 0-1 no UFC com TKO em 2:30 do R1 contra Pinas há 2 meses. Volta relâmpago depois de KO duro. Período parado contra retorno relâmpago = dois alertas grandes. Estilo: em pé Johnston tem vantagem teórica (Muay Thai de elite mundial) se a ferrugem deixar. No chão Schultz é mais ativo (estilo CJJ pra finalização).',
      tension: {
        truth_a: 'Johnston tem striking técnico de elite mundial em Muay Thai + KO power testada em R1-R2. Em casa em Perth. Camp TFC + histórico de treino sob Eugene Bareman.',
        truth_b: 'Schultz 6 anos mais novo, 5 finalizações em 8 vitórias incluindo técnicas raras (Suloev Stretch). Campeão estadual de wrestling no ensino médio. +4 cm de envergadura.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Ben Johnston', color: 'red', momentum_score: 5, momentum_label: 'Em Recuperação', momentum_trend: 'stable',
        momentum_note: '5-1 na carreira MMA, todas as vitórias por finalização. Pré-UFC: finalização no R2 sobre Fraser (mata-leão, 1:15) na Eternal MMA 83 em março de 2024 = título. **2 ANOS PARADO no MMA** (focou em coaching, casou, esposa grávida). Bicampeão mundial de Muay Thai (WBC peso meio-pesado 2018 contra Edwards). Estreante no UFC.',
        recent_fights: [
          { date: 'Mar 2024', opponent: 'John-Martin Fraser', result: 'W', method: 'Sub R2 (mata-leão 1:15)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Eternal MMA 83 título. Última luta antes do hiato.' },
          { date: 'Set 2023', opponent: 'Yoon Seo Shin', result: 'W', method: 'Finalização', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Eternal MMA 79.' },
          { date: 'Jul 2023', opponent: 'Emil Jeries', result: 'W', method: 'Finalização', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Eternal MMA 77.' },
          { date: 'Jul 2022', opponent: 'Kahn Sandy', result: 'W', method: 'Finalização', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Eternal MMA 67.' },
          { date: 'Mar 2022', opponent: 'Kaleb Rideout', result: 'L', method: 'KO R1 (1:10 soco rodado)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Única derrota no MMA. Soco rodado atípico.' },
        ],
      },
      fighter2: {
        nome: 'Wes Schultz', color: 'blue', momentum_score: 4, momentum_label: 'Em Queda', momentum_trend: 'descending',
        momentum_note: 'Vem de derrota por TKO em 2:30 do R1 contra Pinas no UFC FN Mexico em fevereiro de 2026 — estreia no UFC. Antes: finalização no R1 (Suloev Stretch, 1:51) sobre Mingaj DWCS S9 W10 = contrato UFC. Volta relâmpago em 6 semanas depois de tomar KO duro.',
        recent_fights: [
          { date: 'Fev 2026', opponent: 'Damian Pinas', result: 'L', method: 'TKO R1 (2:30, punches)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UFC debut. Pinas striker explosivo (9.62 SLpM).' },
          { date: 'Out 2025', opponent: 'Mario Mingaj', result: 'W', method: 'Sub R1 (Suloev Stretch 1:51)', opponent_rank: 'DWCS', quality_score: 1, quality_label: 'Ruim', note: 'DWCS contract. Técnica avançada.' },
          { date: 'Ago 2024', opponent: 'Mansur Abdul-Malik', result: 'L', method: 'TKO R3 (3:55, GnP elbows)', opponent_rank: 'DWCS', quality_score: 2, quality_label: 'Médio', note: 'DWCS 2024.' },
          { date: 'Abr 2024', opponent: 'Adland Benson', result: 'W', method: 'TKO R1 (3:39 GnP)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'LFA 181.' },
          { date: '2023', opponent: 'Maurice Morris', result: 'W', method: 'Finalização', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'LFA 174.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Johnston', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: '4V-1D regional', contra_top5: '0V-0D' },
      fighter2: { nome: 'Schultz', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '2V-2D recente (UFC + DWCS)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Schultz tem level UFC mais testado (1 UFC + 2 DWCS). Johnston só Eternal MMA Australia regional. Stats Johnston construídas em contexto regional, ressalva flag.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 0, valueB: 5.39, maxVal: 6, format: 'decimal', note: 'Johnston UFCStats vazio (estreante). Schultz sample 1 luta 2:30 — variância gigante.' },
        { label: 'Takedowns por 15 Min', valueA: 0, valueB: 5.57, maxVal: 6, format: 'decimal', note: 'Schultz amostra inflada.' },
        { label: 'Submissões por 15 Min', valueA: 0, valueB: 1.4, maxVal: 3, format: 'decimal', note: 'Schultz sub avg ofensivo. Johnston regional.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '35 anos', fighter2: '29 anos', note: 'Schultz 6 anos mais novo.' },
        { label: 'Altura', fighter1: '1,93m', fighter2: '1,88m', note: 'Johnston 5 cm mais alto.' },
        { label: 'Envergadura', fighter1: '192 cm', fighter2: '196 cm', note: 'Schultz 4 cm de envergadura a mais.' },
        { label: 'Background', fighter1: 'Bicampeão mundial de Muay Thai', fighter2: 'BJJ + wrestling, campeão estadual no ensino médio', note: 'Choque de estilos claro.' },
        { label: 'Período parado', fighter1: '2 anos sem lutar', fighter2: '6 semanas pós-TKO', note: 'Alertas em direções opostas.' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Qualidade do Striking', advantage: 'fighter1', gap: 4, note: 'Bicampeão mundial de Muay Thai contra BJJ-wrestler.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter2', gap: 3, note: 'Campeão estadual no ensino médio + queda no DWCS.' },
        { label: 'Grappling Ofensivo', advantage: 'fighter2', gap: 2, note: 'Schultz BJJ + Suloev Stretch técnico.' },
        { label: 'Ferrugem / Período Parado', advantage: 'fighter2', gap: 2, note: 'Schultz ativo. Johnston 2 anos parado.' },
        { label: 'Recuperação pós-KO', advantage: 'fighter1', gap: 2, note: 'Schultz tomou TKO há 2 meses.' },
        { label: 'Idade', advantage: 'fighter2', gap: 2, note: '29 contra 35.' },
      ],
      summary: 'Em pé Johnston domina (Muay Thai de elite mundial). No chão Schultz domina (BJJ + wrestling). Quem dita o local vence.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Johnston', ko_tko: { count: 1, percent: 20 }, submission: { count: 4, percent: 80 }, decision: { count: 0, percent: 0 }, total_wins: 5 },
      fighter2: { nome: 'Schultz', ko_tko: { count: 2, percent: 25 }, submission: { count: 5, percent: 63 }, decision: { count: 1, percent: 13 }, total_wins: 8 },
      insight: 'Combined: 13 W, 1 decisão. Decisão estatisticamente improvável. R1-R2 finish é o cenário modal.',
    },
    previsao_final: {
      winner_name: 'Ben Johnston', winner_side: 'fighter1',
      predicted_method: 'KO/TKO ou Sub', confidence_score: 4, confidence_label: 'BAIXA',
      explanation:
        'Coin flip honesto. Pick é Johnston por margem mínima (Muay Thai de elite mundial + torcida da casa + KO power testada em R1-R2), mas com convicção 4 só. Dois anos parado é alerta enorme — ferrugem pode anular qualquer vantagem técnica. Schultz vem novo-mas-quebrado: volta relâmpago em 6 semanas pós-KO duro, recuperação é pergunta aberta. Schultz vai querer levar pro chão (BJJ + wrestling), Johnston quer manter em pé. Quem dita o local vence. Acredito que será uma luta parelha, mas vejo um caminho onde Johnston ganha se conseguir manter em pé no R1.',
      x_factor: {
        title: 'Ferrugem do Johnston contra recuperação do Schultz',
        description: 'Dois anos fora contra 6 semanas pós-KO. Os dois vêm com alertas em direções opostas. Quem absorver melhor o próprio gap vence.',
      },
      upset_alert: {
        title: 'Schultz consegue queda e finaliza',
        description: 'Wrestling de ensino médio + 5 finalizações na carreira incluindo Suloev Stretch técnico. Se conseguir clinch e queda, finaliza no chão.',
      },
      probabilities: { fighter1: { nome: 'Johnston', percent: 49 }, fighter2: { nome: 'Schultz', percent: 48 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Ben Johnston vence porque tem striking técnico de Muay Thai de elite mundial, 5 cm a mais de altura, KO power testada, e torcida da casa em Perth. Acredito que será uma luta parelha, mas vejo um caminho claro onde Johnston ganha se manter em pé no R1. Desmorona se ferrugem de 2 anos anular a técnica, OU se Schultz conseguir clinch e queda repetidos.',
        conviction_score: 4,
        conviction_rationale: 'Convicção 4 honesta. Coin flip real. Período parado de 2 anos é variável crítica não-mensurável até a luta começar. Sem dimensões suficientes pra convicção 5+.',
        conviction_breakers: [
          'Ferrugem do Johnston em sequências de combate',
          'Schultz consegue queda repetida + finaliza em scramble',
          'Idade 35 + filho a caminho = motivação dispersa',
          'Recuperação pós-KO do Schultz melhor que o esperado',
        ],
        underdog_path: {
          viable: true, probability_estimate: 48,
          key_scenario: 'Schultz aproveita os 4 cm a mais de envergadura e os 6 anos a menos pra trabalhar pressão no striking. Quando Johnston entrar pra trocar, fecha clinch, leva pro chão. Finalização R1-R2 em scramble (Suloev Stretch ou mata-leão).',
          required_conditions: ['Conseguir clinch repetido', 'Sobreviver ao Muay Thai no R1', 'Achar finalização no chão antes do R3'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Rounds', pick: 'Under 1.5 Rounds', odds: '-130 a -150', reasoning: '12 das 13 vitórias combinadas foram por finalização. 0% de decisões combinadas no UFC. Probabilidade real em torno de 60% de finalização no R1.' },
          { type: 'Método', pick: 'Schultz por Finalização', odds: '+250 a +350', reasoning: 'Wrestling de ensino médio + 5 finalizações incluindo Suloev Stretch técnico. Probabilidade aproximada de 30%, paga muito.' },
          { type: 'Método', pick: 'Johnston por KO/TKO', odds: '+180 a +220', reasoning: 'Muay Thai de elite mundial + Schultz vulnerável a strikers (2 TKOs sofridos). Probabilidade aproximada de 30%, paga 2-3x.' },
          { type: 'Evitar', pick: 'Moneyline em qualquer lado', odds: '-110/-110', reasoning: 'Tossup demais. Não há vantagem em moneyline. Vai em método ou round.' },
        ],
        best_bet: { pick: 'Under 1.5 Rounds em -130 a -150', reasoning: 'Taxa de finalização combinada + 0% de decisões combinadas no UFC = finalização no R1 é o cenário mais provável. Aposta mais defensável sem precisar acertar quem vence.' },
      },
      key_stats: [
        { value: '2 anos', label: 'Período parado do Johnston', sublabel: 'Se aposentou em março de 2024.' },
        { value: '6 semanas', label: 'Volta relâmpago do Schultz', sublabel: 'Pós-TKO duro contra Pinas em fevereiro de 2026.' },
        { value: '12/13', label: 'Taxa de finalização combinada', sublabel: '1 decisão em 13 vitórias combinadas.' },
        { value: 'Coin flip', label: 'Vantagem real no mercado', sublabel: 'Linhas em estilo pickem esperadas.' },
      ],
      odds: { fighter1_odds: '-110', fighter2_odds: '-110', fighter1_name: 'Johnston', fighter2_name: 'Schultz', source: 'Não confirmadas em snapshot via search. Best Fight Odds tem o evento mas a linha específica não retornou.' },
      armadilha: {
        titulo: 'Armadilha: Johnston em moneyline -200 como favorito da casa',
        descricao: 'O mercado pode precificar Johnston pesado pelo Muay Thai de elite mundial + torcida da casa. A armadilha: 2 anos parado é gap GIGANTE mensurável + Schultz já testado em level UFC + 4 cm a mais de envergadura. Pagar -200 num estreante UFC com 2 anos de ferrugem é matematicamente errado. Vantagem real está em método/round, não em moneyline.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'johnston-vs-schultz');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
