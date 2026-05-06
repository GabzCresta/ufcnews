import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'tafa-vs-christian',
  evento_id: null,
  slug: 'tafa-vs-christian',
  titulo: 'Tafa vs Christian: Poder de R1 contra Caçador de Submission',
  subtitulo:
    'Junior Tafa volta pra Austrália em casa com 4 das 4 vitórias UFC por KO no R1 e 3 derrotas seguidas por finalização. Kevin Christian é faixa-preta de BJJ brasileira com 5 finalizações em 9 vitórias, 13 cm a mais de envergadura e 11 cm a mais de altura. Luta de cardio crítico contra especialista em finalização que anula a distância onde Tafa opera.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,90m', envergadura: '190cm', idade: 29, academia: 'Oceania Super Fighter Gym' },
      fighter2: { altura: '2,01m', envergadura: '203cm', idade: 31, academia: 'Cosme Junior Team / Otavio Rodrigues BJJ' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'KO R1 (Tafa) ou Submission R2 (Christian)',
    confidence: 'BAIXA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Junior Tafa', apelido: 'The Juggernaut', record: '6-5-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  fighter2_info: { nome: 'Kevin Christian', record: '9-3-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: '2 de Maio, 2026',
  evento_local: 'RAC Arena, Perth, Austrália',
  categoria_peso: 'Peso Meio-Pesado (205 lbs)',
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
      categoria_peso: 'Peso Meio-Pesado (205 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Poder de R1 contra Caçador de Finalização',
      tagline_sub: 'Tafa em casa com 4 das 4 vitórias UFC no R1 por KO. Christian faixa-preta de BJJ com 13 cm a mais de envergadura e 5 finalizações em 9 vitórias.',
      fighter1: {
        nome_completo: 'Junior "The Juggernaut" Tafa',
        apelido: 'The Juggernaut',
        sobrenome: 'Tafa',
        record: '6-5-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Brisbane, Austrália | 29 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/TAFA_JUNIOR_L_01-31.png?itok=K6Afk7gm',
      },
      fighter2: {
        nome_completo: 'Kevin Christian',
        apelido: '',
        sobrenome: 'Christian',
        record: '9-3-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Rio Preto da Eva, Amazonas | 31 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/CHRISTIAN_KEVIN_R_11-01.png?itok=60w8u1aB',
      },
    },
    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Sobreviver Ao R1 Inverte A Luta',
      insight:
        'Tafa é exatamente o lutador que o Christian foi treinado pra finalizar. Tafa tem 4 das 4 vitórias UFC por KO no R1 e 3 derrotas seguidas por finalização (mata-leão contra Elekana, ankle lock contra Walker, triângulo de braço contra Tokkos). Christian é faixa-preta de BJJ brasileira com 5 finalizações em 9 vitórias, especialista em triângulo, chave de braço e triângulo de braço, exatamente o arsenal que finalizou Tafa contra Tokkos. Some 13 cm a mais de envergadura e 11 cm a mais de altura, e Christian anula a distância onde a mão pesada do Tafa funciona. A luta tem dois cenários binários: ou Tafa conecta no R1 antes de cansar, ou Christian sobrevive e finaliza no R2.',
      tension: {
        truth_a: 'Tafa em casa em Perth, ex-kickboxer profissional do GLORY, 4 das 4 vitórias UFC no R1 por KO, irmão Justin no peso pesado. Quando a mão dele pega, fim de combate em segundos.',
        truth_b: 'Tafa cortou pra 92,9 kg pela quarta vez na vida. Cair de produção no R2 é regra. Christian especialista em finalização no chão.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Junior Tafa', color: 'red', momentum_score: 2, momentum_label: 'Em Queda', momentum_trend: 'descending',
        momentum_note: 'Três derrotas seguidas, todas por finalização. Elekana (mata-leão no R2), Tokkos (triângulo de braço no R2 na estreia do peso meio-pesado), Walker (ankle lock no R1). 2-5 no UFC. Padrão claro: ou nocauteia no R1 ou perde, e nas últimas três o R1 não veio.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Elekana', result: 'L', method: 'Sub (mata-leão) R2 3:18', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Finalizado por mata-leão no R2. Terceira finalização seguida.' },
          { date: 'Jul 2025', opponent: 'Tokkos', result: 'L', method: 'Sub (triângulo de braço) R2 4:25', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Estreia oficial no peso meio-pesado. Cardio sumiu no R2.' },
          { date: 'Out 2024', opponent: 'Sharaf', result: 'W', method: 'TKO R2 2:15', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Vitória contra estreante.' },
          { date: 'Ago 2024', opponent: 'Valter Walker', result: 'L', method: 'Sub (ankle lock) R1 4:56', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Walker prospect. Finalizado em ankle lock.' },
          { date: 'Fev 2024', opponent: 'Rogerio de Lima', result: 'L', method: 'TKO R2 1:14', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Parado por golpes no R2.' },
        ],
      },
      fighter2: {
        nome: 'Kevin Christian', color: 'blue', momentum_score: 4, momentum_label: 'Em Queda', momentum_trend: 'descending',
        momentum_note: '0-1 no UFC mas 9-3 na carreira com 100% das vitórias por finalização (4 KO + 5 finalizações, ZERO decisões). Estreou contra Elekana e foi finalizado por mata-leão no R1 (foi pro hospital pra tomografia). Faixa-preta de BJJ desde criança.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Elekana', result: 'L', method: 'Sub (mata-leão) R1 3:33', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Estreia UFC. Tomografia no hospital depois.' },
          { date: 'Set 2024', opponent: 'Mazzeo', result: 'W', method: 'Sub (triângulo com chave de braço) R2 4:17', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Contrato no DWCS. Triângulo com chave de braço, exatamente o tipo de finalização que pega o Tafa.' },
          { date: 'Jan 2024', opponent: 'Porto', result: 'W', method: 'Finalização regional', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Vitória regional pré-Contender.' },
          { date: '2023', opponent: 'Martins', result: 'W', method: 'TKO R1 4:31', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Nocaute regional pré-Contender.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Tafa', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '2V-5D UFC (28%)', contra_top5: '0V-0D' },
      fighter2: { nome: 'Christian', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: '0V-1D UFC', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: 'Elekana é oponente comum recente. Finalizou Tafa por mata-leão no R2 (jan/2026) e Christian por mata-leão no R1 (nov/2025). Mesmo método, mesma vulnerabilidade nas costas.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.19, valueB: 1.64, maxVal: 6, format: 'decimal', note: 'Tafa com volume bem superior, mas a amostra do Christian é só 3:33 no R1 do UFC.' },
        { label: 'Precisão de Strikes (%)', valueA: 51, valueB: 56, maxVal: 100, format: 'percent', note: 'Christian acerta com mais frequência apesar do volume baixo.' },
        { label: 'Defesa de Strikes (%)', valueA: 51, valueB: 44, maxVal: 100, format: 'percent', note: 'Defesa fraca dos dois lados.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.6, valueB: 2.65, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Tafa absorve mais.' },
        { label: 'Takedowns por 15 Min', valueA: 0.6, valueB: 0, maxVal: 5, format: 'decimal', note: 'Christian joga BJJ ofensivo de baixo.' },
        { label: 'Defesa de Takedown (%)', valueA: 69, valueB: 0, maxVal: 100, format: 'percent', note: 'Tafa 69% no papel, mas o Tokkos acertou 5 de 9 na prática.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '29 anos', fighter2: '31 anos', note: 'Christian 2 anos mais velho.' },
        { label: 'Altura', fighter1: '1,90m', fighter2: '2,01m', note: 'Christian 11 cm a mais de altura.' },
        { label: 'Envergadura', fighter1: '190 cm', fighter2: '203 cm', note: 'Christian 13 cm a mais de envergadura. Anula a distância do Tafa.' },
        { label: 'Stance', fighter1: 'Ortodoxa', fighter2: 'Ortodoxa', note: null },
        { label: 'Background', fighter1: 'Kickboxer profissional do GLORY', fighter2: 'Faixa-preta de BJJ desde criança', note: 'Choque de estilos absoluto.' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Poder de Nocaute', advantage: 'fighter1', gap: 4, note: 'Tafa com 100% das vitórias UFC por KO no R1.' },
        { label: 'Striking em Distância', advantage: 'fighter2', gap: 3, note: '13 cm a mais de envergadura + altura. Christian neutraliza distância.' },
        { label: 'Grappling Ofensivo', advantage: 'fighter2', gap: 4, note: 'Christian é faixa-preta com 5 finalizações (triângulo, chave de braço, triângulo de braço).' },
        { label: 'Defesa de Finalização', advantage: 'fighter1', gap: 1, note: 'Tafa cedeu 3 finalizações seguidas. Christian também cedeu na estreia.' },
        { label: 'Cardio (R2-R3)', advantage: 'fighter2', gap: 3, note: 'Cair de produção no R2 é regra do Tafa no UFC.' },
        { label: 'Experiência UFC', advantage: 'fighter1', gap: 4, note: 'Tafa com 7 lutas no UFC contra 1 do Christian.' },
      ],
      summary: 'Tafa vence em pé no R1 OU perde por finalização no R2-R3. Christian vence se sobreviver os primeiros 3 minutos. Luta binária por design.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Tafa', ko_tko: { count: 5, percent: 83 }, submission: { count: 0, percent: 0 }, decision: { count: 1, percent: 17 }, total_wins: 6 },
      fighter2: { nome: 'Christian', ko_tko: { count: 4, percent: 44 }, submission: { count: 5, percent: 56 }, decision: { count: 0, percent: 0 }, total_wins: 9 },
      insight: 'Christian com 100% das vitórias por finalização (4 KO + 5 finalizações, ZERO decisões em 9 vitórias). Tafa com 83% por KO. Combinado: 14 vitórias e apenas 1 decisão. Aposta em luta ITD é matemática.',
    },
    previsao_final: {
      winner_name: 'Junior Tafa',
      winner_side: 'fighter1',
      predicted_method: 'KO R1 (Tafa) ou Submissão R2 (Christian)',
      confidence_score: 5,
      confidence_label: 'BAIXA',
      explanation:
        'Convicção 5 porque a luta é binária. Tafa favorito legítimo pela torcida da casa em Perth, poder de KO testado (4 das 4 vitórias UFC por KO no R1) e as 7 lutas UFC de rodagem. SÓ QUE Tafa cortando peso pela quarta vez na vida pro peso meio-pesado, cair de produção no R2 é regra, e três derrotas seguidas por finalização todas no chão. Christian é exatamente o counter de estilo: faixa-preta de BJJ brasileira com 5 finalizações (triângulo, chave de braço, triângulo de braço), 13 cm a mais de envergadura que anula a distância do Tafa. Caminho real do Christian: aguentar os primeiros 3 minutos, deixar Tafa cansar, e finalizar no R2.',
      x_factor: {
        title: 'O corte de peso',
        description: 'Tafa cortou pra 92,9 kg pela primeira vez desde 2022 contra Tokkos e foi finalizado por triângulo de braço aos 4:25 do R2. Quarta vez fazendo o corte pro peso meio-pesado. Cardio no peso meio-pesado pior que no pesado pelo desgaste do corte, e contra Christian (faixa-preta ofensivo) qualquer queda no R2 é explorada em segundos.',
      },
      upset_alert: {
        title: 'Christian sobrevive ao R1 e finaliza no R2',
        description: 'Christian tem 13 cm a mais de envergadura pra anular a distância nos primeiros 3 minutos. Se aguentar, Tafa fica pesado, puxa pro clinch, e Christian é faixa-preta com triângulo, chave de braço e triângulo de braço no arsenal. Foi exatamente assim que o Tokkos finalizou o Tafa.',
      },
      probabilities: { fighter1: { nome: 'Tafa', percent: 56 }, fighter2: { nome: 'Christian', percent: 41 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Junior Tafa vence porque tem torcida da casa em Perth, 4 das 4 vitórias UFC por KO no R1, e 7 lutas UFC de rodagem contra apenas 1 do Christian. Desmorona se Christian sobrevive os primeiros 3 minutos com a envergadura, porque cair de produção no R2 é regra do Tafa (3 finalizações seguidas) e Christian é faixa-preta com 5 finalizações incluindo triângulo de braço exatamente como o Tokkos finalizou o Tafa.',
        conviction_score: 5,
        conviction_rationale: 'Convicção 5 porque a luta é binária. Tafa favorito pela casa + poder de KO, mas o match de estilo é alarmante. Christian é o counter de arquétipo específico (BJJ ofensivo, envergadura, altura) pro Tafa (puncher de cardio frágil).',
        conviction_breakers: [
          'Christian sobreviver os primeiros 3 minutos sem ser nocauteado',
          'Tafa não conseguir conectar mão pesada antes do R1 fechar',
          'Queda de produção do Tafa repetir o padrão Tokkos no R2',
          'Christian usar envergadura pra anular distância e ditar o terreno',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 41,
          key_scenario: 'Christian usa os 13 cm a mais de envergadura pra manter Tafa fora da distância nos primeiros 3 minutos. Trabalha jab, evita ficar plantado pra trocar. Tafa cansa entrando, no R2 começa a respirar pela boca. Christian fecha distância na queda, puxa guarda, encontra triângulo, chave de braço ou triângulo de braço como contra Mazzeo.',
          required_conditions: [
            'Sobreviver os primeiros 3 minutos do R1 sem cair no clinch',
            'Usar envergadura pra ditar distância em pé',
            'Forçar luta pro chão quando Tafa começar a cansar',
            'Achar triângulo, chave de braço ou triângulo de braço de baixo',
          ],
          historical_precedent: 'Tokkos contra Tafa em julho de 2025: Tokkos finalizou Tafa por triângulo de braço aos 4:25 do R2. Christian é versão mais alta, mais longa, e faixa-preta do mesmo arquétipo.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Rounds', pick: 'Under 1.5 Rounds', odds: '-180', reasoning: 'Taxa de finalização combinada é absurda. Christian 100% por finalização (5 finalizações + 4 KO em 9 vitórias). Tafa 83% por KO + 100% das vitórias UFC no R1. Decisão estatisticamente impossível.' },
          { type: 'Método (Longshot)', pick: 'Christian por Finalização', odds: '+275', reasoning: 'Vantagem não-óbvia. Christian é faixa-preta com 5 finalizações específicas no arsenal e Tafa foi finalizado 3 vezes seguidas no chão incluindo triângulo de braço contra Tokkos. 13 cm a mais de envergadura dão tempo de sobrevivência. Probabilidade real em torno de 30%, mercado paga +275.' },
          { type: 'Método', pick: 'Tafa por KO/TKO no Round 1', odds: '-150', reasoning: 'Tafa 4 das 4 vitórias UFC por KO no R1, ex-kickboxer profissional do GLORY, em casa. Probabilidade real em torno de 45%. Vantagem mínima a -150 mas é o cenário mais provável.' },
          { type: 'Método Grupo', pick: 'Luta Termina Dentro da Distância', odds: '-400', reasoning: '14 vitórias combinadas, 1 decisão. Match de estilo em pé contra grappler com taxa de finalização absoluta. Lock matemático. Bom pra parlay.' },
        ],
        best_bet: { pick: 'Under 1.5 Rounds em -180', reasoning: 'A aposta de duração é a mais defensável. Tafa nunca decidiu vitória no UFC, Christian nunca decidiu nada na carreira. A luta vai terminar no R1 ou começo do R2. Se for forçar um lado, o longshot Christian por Finalização a +275 tem valor real.' },
      },
      key_stats: [
        { value: '4/4', label: 'Vitórias UFC do Tafa por KO no R1', sublabel: '100% das vitórias UFC terminam no R1.' },
        { value: '3', label: 'Derrotas seguidas do Tafa por finalização', sublabel: 'Mata-leão, ankle lock e triângulo de braço. Defesa de finalização em colapso.' },
        { value: '100%', label: 'Taxa de finalização do Christian', sublabel: '5 finalizações + 4 KO em 9 vitórias. Zero decisões.' },
        { value: '+13 cm', label: 'Vantagem de envergadura do Christian', sublabel: 'Anula a distância onde Tafa opera.' },
      ],
      odds: { fighter1_odds: '-180', fighter2_odds: '+150', fighter1_name: 'Tafa', fighter2_name: 'Christian', source: 'Caesars na abertura, bet365 e DraftKings em abril de 2026.' },
      armadilha: {
        titulo: 'Armadilha: Tafa moneyline em -180',
        descricao: 'O mercado precifica Tafa em -180 pela torcida da casa, poder de KO confirmado e experiência UFC. Ignora: cair de produção no R2 é regra do Tafa (3 finalizações seguidas), e Christian é exatamente o counter de estilo (faixa-preta brasileira com triângulo, chave de braço, triângulo de braço, 13 cm a mais de envergadura). Pagar -180 num puncher de cardio frágil contra sub specialist é matematicamente errado. Se quer Tafa, busque KO no R1 a -150. Valor real: Christian por Finalização a +275.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'tafa-vs-christian');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
