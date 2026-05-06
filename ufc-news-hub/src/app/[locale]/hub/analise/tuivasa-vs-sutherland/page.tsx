import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'tuivasa-vs-sutherland',
  evento_id: null,
  slug: 'tuivasa-vs-sutherland',
  titulo: 'Tuivasa vs Sutherland: Dois Lutadores Quebrados, Um em Casa',
  subtitulo:
    'Tai Tuivasa vem de 6 derrotas seguidas (recorde no peso pesado UFC), 1-6 nas últimas 7. Louie Sutherland é substituto em 9 dias avisado por causa do Sean Sharaf (nariz quebrado), 0-2 no UFC com duas finalizações sofridas no R1. Curto aviso UK até a Austrália depois de TKO em março. Sinceramente: o declínio do Tuivasa é real apesar do apoio da torcida.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,88m', envergadura: '191cm', idade: 33, academia: 'Plinio Cruz (recém)' },
      fighter2: { altura: '1,91m', envergadura: '191cm', idade: 32, academia: 'Team Titan (UK)' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'KO/TKO R1-R2',
    confidence: 'BAIXA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Tai Tuivasa',
    apelido: 'Bam Bam',
    record: '15-9-0',
    ranking: 'Sem ranking no top 15',
    ultimasLutas: [
      { result: 'L', opponent: 'Tallison Teixeira', method: 'UD (29-28 x3)', event: 'UFC 325 (Jan 2026)' },
      { result: 'L', opponent: 'Jairzinho Rozenstruik', method: 'SD', event: 'UFC 305 Perth (Ago 2024)' },
      { result: 'L', opponent: 'Marcin Tybura', method: 'Sub R1 (RNC, 4:08)', event: 'UFC FN (Mar 2024)' },
    ],
  },
  fighter2_info: {
    nome: 'Louie Sutherland',
    apelido: 'The Vanilla Gorilla',
    record: '10-5-0',
    ranking: 'Sem ranking no top 15',
    ultimasLutas: [
      { result: 'L', opponent: 'Brando Pericic', method: 'TKO R1 (1:48)', event: 'UFC London (Mar 2026)' },
      { result: 'L', opponent: 'Valter Walker', method: 'Sub R1 (heel hook, 1:24)', event: 'UFC 321 (Out 2025)' },
      { result: 'W', opponent: 'Pre-UFC opponents', method: 'KO/TKO regional', event: 'Levels Fight League' },
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
      tagline: 'Dois Lutadores Quebrados, Um em Casa',
      tagline_sub: 'Tuivasa em recorde de derrotas seguidas no peso pesado UFC. Sutherland 0-2 no UFC + curto aviso. Coin flip apesar de lutar em casa.',
      fighter1: {
        nome_completo: 'Tai "Bam Bam" Tuivasa',
        apelido: 'Bam Bam',
        sobrenome: 'Tuivasa',
        record: '15-9-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Sydney, Austrália (Indígena Wiradjuri/Samoano) | 33 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/TUIVASA_TAI_L_01-31.png?itok=C37lDiCD',
      },
      fighter2: {
        nome_completo: 'Louie "The Vanilla Gorilla" Sutherland',
        apelido: 'The Vanilla Gorilla',
        sobrenome: 'Sutherland',
        record: '10-5-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Escócia (Londres) | 32 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-03/SUTHERLAND_LOUIE_L_03-21.png?itok=ta-V7HZu',
      },
    },
    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'A Torcida Em Casa Não Salvou Antes',
      insight:
        'O status de queridinho do Tuivasa mascara declínio real. 1-6 nas últimas 7, sem vencer desde 2022. Última UFC Perth (Roze por decisão dividida em ago/2024) na MESMA arena também foi derrota (15 de 15 análises da imprensa pontuaram Roze). Volume em queda (3,77 SLpM contra Teixeira), defesa furada (SApM 4,86 maior que SLpM 4,41 — absorve mais do que entrega), queixo mostrando rachaduras (Pavlovich KO R1 em dezembro de 2022). Sutherland é substituto de curto aviso (UK até a Austrália pós-TKO em março), 0-2 no UFC com duas finalizações sofridas no R1. Mas Sutherland é striker (não tem grappling ofensivo), e 3 das 6 derrotas do Tuivasa são por grappling — o estilo favorece Tuivasa em pé.',
      tension: {
        truth_a: 'Tuivasa em casa em Perth, novo camp Plinio Cruz (técnico do Pereira), poder genuíno (Bonza Bombs), Sutherland 0-2 com queixo questionável, curto aviso + 6 semanas de retorno.',
        truth_b: 'Tuivasa 1-6 nas últimas 7, na mesma arena perdeu pro Roze, defesa furada, declínio é real e medido. Sutherland tem poder de KO regional e Tuivasa absorve mais do que entrega.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Tai Tuivasa', color: 'red', momentum_score: 2, momentum_label: 'Em Queda Profunda', momentum_trend: 'descending',
        momentum_note: 'Recorde de derrotas seguidas no peso pesado UFC: 6 em sequência. Voltou de 17 meses parado e acima do peso (cerca de 40 lbs acima) contra Teixeira em janeiro, perdeu por decisão unânime. Antes: Pavlovich KO R1, Volkov Sub R2, Tybura Sub R1, Roze decisão dividida na mesma arena de Perth. Torcida pediu aposentadoria pós UFC 325. Futuro no UFC reportadamente em jogo.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Tallison Teixeira', result: 'L', method: 'Decisão Unânime (29-28 x3)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Volta após 17 meses parado. Acima do peso reportado.' },
          { date: 'Ago 2024', opponent: 'Jairzinho Rozenstruik', result: 'L', method: 'Decisão Dividida', opponent_rank: 'Top 15 Peso Pesado', quality_score: 3, quality_label: 'Bom', note: 'MESMA ARENA Perth. 15 de 15 análises da imprensa pontuaram Roze.' },
          { date: 'Mar 2024', opponent: 'Marcin Tybura', result: 'L', method: 'Sub R1 (mata-leão, 4:08)', opponent_rank: 'Top 15 Peso Pesado', quality_score: 3, quality_label: 'Bom', note: 'Main event finalizado.' },
          { date: 'Set 2023', opponent: 'Alexander Volkov', result: 'L', method: 'Sub R2 (ezequiel)', opponent_rank: 'Top 10 Peso Pesado', quality_score: 4, quality_label: 'Muito Bom', note: 'Vulnerabilidade no grappling.' },
          { date: 'Dez 2022', opponent: 'Sergei Pavlovich', result: 'L', method: 'KO R1', opponent_rank: 'Top 5 Peso Pesado', quality_score: 5, quality_label: 'Excelente', note: 'KO devastador. Queixo começando a abrir.' },
        ],
      },
      fighter2: {
        nome: 'Louie Sutherland', color: 'blue', momentum_score: 3, momentum_label: 'Em Queda', momentum_trend: 'descending',
        momentum_note: '0-2 no UFC, as duas em finalizações no R1. Finalizado via heel hook pelo Walker em out/2025 (vulnerabilidade no chão). TKO em pé pelo Pericic em 1:48 do R1 em mar/2026 (foi pra frente, foi counterado, escondeu o rosto). Curto aviso de 9 dias pós-TKO (apenas 6 semanas de retorno). Pré-UFC: campeão LFL no peso pesado, 80% das vitórias por finalização (8 KOs em 10 vitórias, 0 finalizações).',
        recent_fights: [
          { date: 'Mar 2026', opponent: 'Brando Pericic', result: 'L', method: 'TKO R1 (1:48)', opponent_rank: 'Prospect N/R', quality_score: 1, quality_label: 'Ruim', note: 'Foi pra frente, foi counterado, parado por ground and pound.' },
          { date: 'Out 2025', opponent: 'Valter Walker', result: 'L', method: 'Sub R1 (heel hook, 1:24)', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Médio', note: 'Walker no 4º heel hook seguido. Vulnerabilidade no chão.' },
          { date: 'Pré-UFC', opponent: 'Reinado LFL', result: 'W', method: 'Vários KO/TKO', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Cinturão LFL peso pesado. 80% das vitórias por finalização no regional.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Tuivasa', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '0V-5D (últimas 5)', contra_top5: '0V-2D' },
      fighter2: { nome: 'Sutherland', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '0V-2D UFC', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'R2 Tier 1 ressalva: Tuivasa enfrentou top tier (Pavlovich, Volkov, Tybura, Roze, Teixeira) contra Sutherland 0-2 com calibre regional/prospect. Diferença = 2 a favor do Tuivasa (vencedor previsto). MAS Tier 2 não dispara — Tuivasa está 1-6 nas últimas 7, calibre alto não se traduz em performance recente.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.41, valueB: 0, maxVal: 6, format: 'decimal', note: 'SLpM do Sutherland não capturado no UFCStats (amostra de 2 lutas no R1).' },
        { label: 'Strikes Absorvidos/Min', valueA: 4.86, valueB: 0, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Tuivasa absorve MAIS do que entrega — alerta defensivo.' },
        { label: 'Defesa de Strikes (%)', valueA: 59, valueB: 0, maxVal: 100, format: 'percent', note: 'Sutherland amostra mínima.' },
        { label: 'Takedowns por 15 Min', valueA: 3.39, valueB: 0, maxVal: 5, format: 'decimal', note: 'Tuivasa média de queda 3,39 mas defesa de queda 71% (não usa com frequência).' },
        { label: 'Defesa de Takedown (%)', valueA: 71, valueB: 0, maxVal: 100, format: 'percent', note: 'Tuivasa defesa de quedas 71% no papel mas perdeu 3 lutas no grappling.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '32 anos', note: 'Idades similares.' },
        { label: 'Altura', fighter1: '1,88m', fighter2: '1,91m', note: 'Sutherland 3 cm mais alto.' },
        { label: 'Envergadura', fighter1: '191 cm', fighter2: '191 cm', note: 'Envergadura idêntica.' },
        { label: 'Stance', fighter1: 'Canhoto', fighter2: 'Destro', note: 'Stance assimétrico.' },
        { label: 'Background', fighter1: 'Ex-rugby league', fighter2: 'Ex-rugby base Escócia + boxe', note: 'Os dois com background atlético de contato.' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Poder de Nocaute', advantage: 'fighter1', gap: 2, note: 'Tuivasa "Bonza Bombs" históricas. Sutherland KOs regionais.' },
        { label: 'Defesa Striking', advantage: 'fighter2', gap: 1, note: 'Tuivasa SApM maior que SLpM. Sutherland amostra mínima.' },
        { label: 'Wrestling / Clinch', advantage: 'even', gap: 0, note: 'Nenhum dos dois é wrestler primário. Sutherland zero finalizações ofensivas.' },
        { label: 'Defesa de Finalização', advantage: 'fighter2', gap: 2, note: 'Tuivasa 3 derrotas no grappling. Sutherland 1 finalização sofrida recente também.' },
        { label: 'Cardio / Idade', advantage: 'fighter2', gap: 1, note: 'Sutherland 6 semanas pós-TKO. Tuivasa 3 meses pós-decisão.' },
        { label: 'Experiência UFC', advantage: 'fighter1', gap: 4, note: 'Tuivasa 17 lutas no UFC. Sutherland 2.' },
      ],
      summary: 'Tuivasa poder + experiência UFC. Sutherland envergadura igual + queixo nunca testado em peso pesado top tier. Coin flip de estilo real apesar das narrativas.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Tuivasa', ko_tko: { count: 12, percent: 80 }, submission: { count: 0, percent: 0 }, decision: { count: 3, percent: 20 }, total_wins: 15 },
      fighter2: { nome: 'Sutherland', ko_tko: { count: 8, percent: 80 }, submission: { count: 0, percent: 0 }, decision: { count: 2, percent: 20 }, total_wins: 10 },
      insight: 'Distribuição idêntica: 80% KO, 0% finalização, 20% decisão. Confronto de pura trocação. Taxa de finalização combinada alta + base do peso pesado = Under 1.5 e ITD são apostas matemáticas.',
    },
    previsao_final: {
      winner_name: 'Tai Tuivasa', winner_side: 'fighter1',
      predicted_method: 'KO/TKO R1-R2', confidence_score: 5, confidence_label: 'BAIXA',
      explanation:
        'Pick é Tuivasa por KO/TKO em R1-R2 com convicção 5 (luta competitiva, não gimme). Vantagens: experiência no UFC esmagadora (17 lutas contra 2), poder testado em nível top tier, torcida da casa em Perth, novo camp Plinio Cruz. O ângulo estilístico ajuda: 3 das 6 derrotas do Tuivasa foram no grappling, e Sutherland é striker puro (zero finalizações ofensivas). Em pé contra striker, Tuivasa tem mais ferramentas testadas. SÓ QUE: Tuivasa absorve mais do que entrega (SApM maior que SLpM), 1-6 nas últimas 7, na mesma arena perdeu pro Roze. Sutherland tem poder de KO regional e o queixo do Tuivasa está começando a abrir.',
      x_factor: {
        title: 'Curto aviso contra declínio crônico',
        description: 'Sutherland 9 dias de aviso + UK até a Austrália depois do TKO em 6 semanas. Tuivasa 17 meses parado antes do Teixeira, agora 3 meses de retorno. Quem chega mais pronto? Sutherland está novo-mas-quebrado (queixo acabou de tomar), Tuivasa está enferrujado-mas-com-camp (novo técnico no estilo do Pereira).',
      },
      upset_alert: {
        title: 'Sutherland conecta primeiro',
        description: 'Envergadura idêntica (191 cm), Sutherland 3 cm mais alto, poder de KO regional real. Tuivasa absorve 4,86 SApM (mais do que entrega). Se Sutherland conectar limpo no R1 (igual o Pericic fez em 1:48), zebra real. Probabilidade aproximada de 38%.',
      },
      probabilities: { fighter1: { nome: 'Tuivasa', percent: 58 }, fighter2: { nome: 'Sutherland', percent: 39 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Tai Tuivasa vence porque tem 17 lutas no UFC de experiência, poder testado contra top tier (nocauteou Augusto e Lewis), torcida da casa em Perth, e Sutherland é striker puro (zero ameaça no chão) contra um Tuivasa cujas derrotas recentes são predominantemente no grappling. Caminho: trocação em pé, conecta Bonza Bombs no R1 ou R2. Desmorona se Sutherland conectar primeiro (envergadura igual, poder de KO regional) ou se o queixo do Tuivasa colapsar de novo.',
        conviction_score: 5,
        conviction_rationale: 'Convicção 5 honesta porque a luta é coin flip apesar das narrativas. Tuivasa em casa contra declínio real, Sutherland novo-mas-quebrado contra poder de KO regional. Não é 6-7 porque o declínio do Tuivasa é medido (1-6 nas últimas 7, SApM maior que SLpM, na mesma arena perdeu).',
        conviction_breakers: [
          'Sutherland conectar primeiro com envergadura + poder',
          'Queixo do Tuivasa colapsar como contra Pavlovich',
          'Curto aviso não importar pro Sutherland que veio fresco',
          'Pressão da torcida da casa vira contra o Tuivasa',
        ],
        underdog_path: {
          viable: true, probability_estimate: 39,
          key_scenario: 'Sutherland aproveita envergadura igual + 3 cm a mais de altura, trabalha jab no R1, evita troca em curta distância. Quando Tuivasa entrar pra usar o poder, conecta soco direto ou cruzado em counter. Zebra de KO no R1-R2.',
          required_conditions: ['Conectar primeiro nos primeiros 90 segundos', 'Não ir pro chão', 'Aguentar o poder do Tuivasa na troca'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Rounds', pick: 'Under 1.5 Rounds', odds: '-150 a -200', reasoning: 'Tuivasa 80% por KO (12 de 15 vitórias). Sutherland 80% por finalização (8 de 10 vitórias). Taxa base de finalização do peso pesado 71%. Probabilidade real em torno de 70% de KO no R1. Aposta mais sólida.' },
          { type: 'Método Grupo', pick: 'Fight Inside the Distance', odds: '-300 a -400', reasoning: 'Taxa de finalização combinada + base do peso pesado = lock matemático. Bom pra parlay.' },
          { type: 'Longshot', pick: 'Sutherland por KO no R1', odds: '+250 a +350', reasoning: 'Poder de KO regional do Sutherland + envergadura igual + queixo questionável do Tuivasa. Probabilidade real em torno de 30%, paga 3-4x. Vantagem clara como longshot.' },
          { type: 'Evitar', pick: 'Tuivasa moneyline em -200', odds: '-200', reasoning: 'NÃO recomendado. Vantagem marginal a inexistente. Tuivasa está 1-6 nas últimas 7. Pegue Under 1.5 ou ITD como alternativa de moneyline.' },
        ],
        best_bet: { pick: 'Under 1.5 Rounds em -150 a -200', reasoning: 'Não exige acertar quem vence. Taxa de finalização combinada 80%/80% + base do peso pesado. KO no R1 em qualquer direção é o resultado mais provável.' },
      },
      key_stats: [
        { value: '6', label: 'Derrotas seguidas do Tuivasa', sublabel: 'Recorde no peso pesado UFC.' },
        { value: '4,86', label: 'SApM do Tuivasa', sublabel: 'Absorve mais do que entrega (SLpM 4,41).' },
        { value: '0-2', label: 'Cartel UFC do Sutherland', sublabel: 'As duas com finalizações sofridas no R1.' },
        { value: '9 dias', label: 'Curto aviso do Sutherland', sublabel: 'UK até a Austrália pós-TKO de 6 semanas.' },
      ],
      odds: { fighter1_odds: '-200', fighter2_odds: '+170', fighter1_name: 'Tuivasa', fighter2_name: 'Sutherland', source: 'Linhas de abertura esperadas Tuivasa -200 a -300, Sutherland +180 a +250 (não confirmadas no snapshot DraftKings/FanDuel).' },
      armadilha: {
        titulo: 'Armadilha: Tuivasa moneyline em -250',
        descricao: 'O mercado vai precificar Tuivasa pesado pela torcida da casa + poder de KO + adversário 0-2. A armadilha ignora: Tuivasa 1-6 nas últimas 7, na mesma arena Perth perdeu pro Roze em ago/2024 (15 de 15 análises da imprensa pontuaram Roze), defesa furada (SApM maior que SLpM), queixo começando a abrir desde Pavlovich. Pagar -250 num lutador em declínio crônico contra striker com envergadura igual e poder de KO é matematicamente errado. Vantagem real está em Under 1.5 ou zebra de Sutherland por KO em +250-350 como longshot.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'tuivasa-vs-sutherland');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
