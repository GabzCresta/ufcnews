import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'elliott-vs-erceg',
  evento_id: null,
  slug: 'elliott-vs-erceg',
  titulo: 'Elliott vs Erceg: Sub Specialist Veterano contra Volume Striker em Casa',
  subtitulo:
    'Tim Elliott (39, recordista de TDs no peso mosca UFC) vem de sub sobre Asakura. Steve Erceg luta em casa em Perth, mas perdeu a última UFC Perth (KO R1 vs Kara-France) e tem confiança abalada após "was I a fraud" pós-Osbourne. Polymarket: Erceg 64%.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,70m', envergadura: '168cm', idade: 39, academia: 'NEXT Generation MMA' },
      fighter2: { altura: '1,73m', envergadura: '174cm', idade: 30, academia: 'Wilkes MMA Perth' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Decisão ou TKO tardio',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Tim Elliott',
    record: '22-13-1',
    ranking: '#11 Peso Mosca',
    ultimasLutas: [
      { result: 'W', opponent: 'Kai Asakura', method: 'Sub R2 (mounted guillotine, 4:39)', event: 'UFC 319 (Ago 2025)' },
      { result: 'W', opponent: 'Sumudaerji', method: 'Sub R1 (arm-triangle, 4:02)', event: 'UFC Vegas 83 (Dez 2023)' },
      { result: 'L', opponent: 'Muhammad Mokaev', method: 'Sub R3 (arm-triangle)', event: 'UFC Fight Night (Out 2023)' },
    ],
  },
  fighter2_info: {
    nome: 'Steve Erceg',
    apelido: 'Astroboy',
    record: '13-4-0',
    ranking: '#12 Peso Mosca',
    ultimasLutas: [
      { result: 'W', opponent: 'Ode Osbourne', method: 'Decisão Unânime', event: 'UFC Vegas 109 (Ago 2025)' },
      { result: 'L', opponent: 'Brandon Moreno', method: 'Decisão Unânime (49-46 x3)', event: 'UFC ESPN Mexico (Mar 2025)' },
      { result: 'L', opponent: 'Kai Kara-France', method: 'KO R1 (4:04)', event: 'UFC 305 Perth (Ago 2024)' },
    ],
  },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: '2 de Maio, 2026',
  evento_local: 'RAC Arena, Perth, Austrália',
  categoria_peso: 'Peso Mosca (125 lbs)',
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
      categoria_peso: 'Peso Mosca (125 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Sub Specialist Veterano contra Volume em Casa',
      tagline_sub: 'Elliott 39 anos, vem de sub sobre Asakura. Erceg em casa Perth mas perdeu última lá. Pickem real.',
      fighter1: {
        nome_completo: 'Tim Elliott',
        apelido: '',
        sobrenome: 'Elliott',
        record: '22-13-1',
        ranking: '#11 Peso Mosca',
        info_extra: 'Lee\'s Summit, Missouri | 39 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/ELLIOTT_TIM_L_08-16.png?itok=jxN2XsFq',
      },
      fighter2: {
        nome_completo: 'Steve "Astroboy" Erceg',
        apelido: 'Astroboy',
        sobrenome: 'Erceg',
        record: '13-4-0',
        ranking: '#12 Peso Mosca',
        info_extra: 'Perth, Western Australia | 30 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/ERCEG_STEVE_L_08-09.png?itok=2_mHXG5N',
      },
    },
    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Quem Dita Onde a Luta Acontece',
      insight:
        'Erceg é striker de volume (4.37 SLpM) com média de takedown só 1.16 e faixa-preta de BJJ. Elliott é wrestler-grappler (3.73 TDs em 15 min, recordista de quedas no peso mosca UFC) com guilhotina assinatura. Se a luta ficar em pé, Erceg ganha em volume e em 6 cm a mais de envergadura. Se Elliott forçar pro chão, ele tem o jogo de finalização e a defesa de quedas do Erceg é só 60%. Complicador: Elliott tem 39 anos, quebrou perna no R1 contra Asakura (cerca de 9 meses parado pra se recuperar), foi finalizado 4+ vezes na carreira UFC. Erceg perdeu a última UFC Perth (Kara-France, KO no R1) na mesma arena, e tem a cabeça abalada (declarou pós-Osbourne: "fui uma fraude o tempo todo?").',
      tension: {
        truth_a: 'Elliott é o sub specialist mais perigoso da divisão, vem de zebra +240 sobre Asakura, mostrou cardio de elite (lutou inteiro com perna quebrada). 61 takedowns na história UFC, recorde da divisão.',
        truth_b: 'Erceg é 9 anos mais novo, +6 cm de envergadura, em casa em Perth, faixa-preta de BJJ = defesa de finalização decente. Volume superior em pé. Fez cinco rounds com Pantoja e com Moreno sem cair de produção.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Tim Elliott', color: 'red', momentum_score: 7, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: 'Vem de finalização sobre Kai Asakura (mounted guillotine R2, 4:39) como azarão +240, quebrou perna no R1 e lutou inteiro com a lesão. Bônus da Noite. Antes: finalização sobre Sumudaerji (Dez 2023, convocado em cima da hora, Bônus). Mais de 600 dias parado entre essas lutas por causa da lesão. 39 anos virando 40 em dezembro = curva de idade é alerta.',
        recent_fights: [
          { date: 'Ago 2025', opponent: 'Kai Asakura', result: 'W', method: 'Sub R2 (mounted guillotine, 4:39)', opponent_rank: 'Ex-campeão RIZIN', quality_score: 4, quality_label: 'Muito Bom', note: 'Azarão +240. Quebrou perna no R1 e lutou inteiro.' },
          { date: 'Dez 2023', opponent: 'Sumudaerji', result: 'W', method: 'Sub R1 (arm-triangle, 4:02)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Bônus da Noite. Convocado em cima da hora.' },
          { date: 'Out 2023', opponent: 'Muhammad Mokaev', result: 'L', method: 'Sub R3 (arm-triangle)', opponent_rank: 'Top 10 Peso Mosca à época', quality_score: 4, quality_label: 'Muito Bom', note: 'Mokaev levou Bônus da Noite.' },
          { date: 'Jun 2023', opponent: 'Victor Altamirano', result: 'W', method: 'UD', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Decisão sólida.' },
          { date: 'Mar 2022', opponent: 'Tagir Ulanbekov', result: 'W', method: 'UD (29-28 x3)', opponent_rank: 'Prospect', quality_score: 3, quality_label: 'Bom', note: 'Decisão controversa, 12/17 media scored Ulanbekov.' },
        ],
      },
      fighter2: {
        nome: 'Steve Erceg', color: 'blue', momentum_score: 5, momentum_label: 'Estável (com ressalvas)', momentum_trend: 'stable',
        momentum_note: 'Luta de quebrar sequência ruim. Vinha de 3 derrotas seguidas (Kara-France KO R1, Pantoja por decisão em luta de cinturão, Moreno por decisão 49-46) antes de vencer Osbourne por decisão em agosto. Foi abalado no R1 contra Osbourne, mas recuperou. Cabeça abalada, ele mesmo declarou pós-luta: "fui uma fraude o tempo todo?". A última UFC em Perth foi KO no R1 contra Kara-France na mesma arena (UFC 305, agosto de 2024).',
        recent_fights: [
          { date: 'Ago 2025', opponent: 'Ode Osbourne', result: 'W', method: 'Decisão Unânime (29-28 x3)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Quebrou sequência de 3 derrotas. Foi abalado no R1.' },
          { date: 'Mar 2025', opponent: 'Brandon Moreno', result: 'L', method: 'Decisão Unânime (49-46 x3)', opponent_rank: 'Ex-Campeão Peso Mosca', quality_score: 5, quality_label: 'Excelente', note: 'Cinco rounds na Cidade do México. Acertou mais (119 a 95) mas perdeu nos cards.' },
          { date: 'Ago 2024', opponent: 'Kai Kara-France', result: 'L', method: 'KO R1 (4:04)', opponent_rank: 'Top 10 Peso Mosca', quality_score: 4, quality_label: 'Muito Bom', note: 'UFC 305 Perth. Mesma arena. Overhand de esquerda + cruzado.' },
          { date: 'Mai 2024', opponent: 'Alexandre Pantoja', result: 'L', method: 'Decisão Unânime (cinco rounds, título)', opponent_rank: 'Campeão Peso Mosca', quality_score: 5, quality_label: 'Excelente', note: 'UFC 301. Competitivo.' },
          { date: 'Mar 2024', opponent: 'Matt Schnell', result: 'W', method: 'KO R2 (0:26)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Gancho único de esquerda.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Elliott', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '4V-1D (últimas 5)', contra_top5: '0V-1D' },
      fighter2: { nome: 'Erceg', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '1V-3D (últimas 5 contra elite)', contra_top5: '0V-2D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Erceg enfrentou calibre maior recentemente (Pantoja, Moreno, Kara-France) mas perdeu todas. Elliott venceu Asakura mas não enfrentou top 5 recente.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.39, valueB: 4.37, maxVal: 6, format: 'decimal', note: 'Erceg volume superior em pé.' },
        { label: 'Defesa de Strikes (%)', valueA: 56, valueB: 53, maxVal: 100, format: 'percent', note: 'Defesa similar. Erceg SApM 4.22 (absorve quase tanto quanto entrega).' },
        { label: 'Takedowns por 15 Min', valueA: 3.73, valueB: 1.16, maxVal: 5, format: 'decimal', note: 'Elliott +2.5 TDs/15min. Recordista UFC FW (61 TDs).' },
        { label: 'Precisão de Takedown (%)', valueA: 47, valueB: 26, maxVal: 100, format: 'percent', note: 'Elliott TD acc 47%. Erceg não shoot frequentemente.' },
        { label: 'Defesa de Takedown (%)', valueA: 50, valueB: 60, maxVal: 100, format: 'percent', note: 'Erceg TDD 60% (não elite).' },
        { label: 'Submissões por 15 Min', valueA: 1.5, valueB: 0.6, maxVal: 3, format: 'decimal', note: 'Elliott guillotine specialist.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '39 anos', fighter2: '30 anos', note: 'Erceg 9 anos mais novo.' },
        { label: 'Altura', fighter1: '1,70m', fighter2: '1,73m', note: 'Erceg 3 cm mais alto.' },
        { label: 'Envergadura', fighter1: '168 cm', fighter2: '174 cm', note: 'Erceg 6 cm de envergadura a mais.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'NEXT Generation MMA (Missouri)', fighter2: 'Wilkes MMA Perth', note: null },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume Striking', advantage: 'fighter2', gap: 2, note: 'Erceg 4.37 SLpM vs 3.39.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter1', gap: 4, note: 'Elliott recordista TDs FW UFC. Erceg não wrestla.' },
        { label: 'Submission Game', advantage: 'fighter1', gap: 3, note: 'Guillotine specialist. 2 subs últimas vitórias.' },
        { label: 'Defesa de Submissão', advantage: 'fighter2', gap: 1, note: 'Erceg BJJ black belt. Elliott foi finalizado 4+ vezes.' },
        { label: 'Cardio 5R', advantage: 'fighter2', gap: 1, note: 'Erceg 5R Pantoja e Moreno. Elliott lutou perna quebrada.' },
        { label: 'Idade / Durabilidade', advantage: 'fighter2', gap: 3, note: '9 anos de diferença. KO no R1 recente do Erceg é alerta, mas não crônico.' },
      ],
      summary: 'Elliott controla onde a luta acontece via wrestling. Erceg ganha em pé e tem reach. Fight pivota em quem dita o local.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Elliott', ko_tko: { count: 4, percent: 18 }, submission: { count: 9, percent: 41 }, decision: { count: 9, percent: 41 }, total_wins: 22 },
      fighter2: { nome: 'Erceg', ko_tko: { count: 4, percent: 31 }, submission: { count: 6, percent: 46 }, decision: { count: 3, percent: 23 }, total_wins: 13 },
      insight: 'Elliott é grappler-decisão (41% subs, 41% decisões). Erceg balanceado mas tendência decisão recente UFC (3/4 últimas decisões).',
    },
    previsao_final: {
      winner_name: 'Steve Erceg', winner_side: 'fighter2',
      predicted_method: 'Decisão ou TKO tardio', confidence_score: 6, confidence_label: 'MÉDIA',
      explanation:
        'A pick é Steve Erceg por decisão ou TKO tardio. Vantagem em três dimensões: FÍSICO (+6cm reach, +3cm altura, 9 anos mais novo), STATS (4.37 SLpM volume superior) e ESTILO (volume striker contra wrestler envelhecendo, BJJ black belt anula sub threat parcial). Caminho do Elliott (~40-45%): forçar pro chão via wrestling (TD avg 3.73 elite), achar guillotine ou arm-triangle. Mas Erceg TDD 60% + BJJ black belt = não dá pra finalizar fácil. Convicção 6 porque luta é competitiva e Elliott tem upset history.',
      x_factor: {
        title: 'O retorno à arena onde tomou KO',
        description: 'Erceg perdeu por KO no R1 contra Kara-France na mesma RAC Arena de Perth em agosto de 2024. Trauma psicológico real. A torcida da casa pode virar pressão em vez de apoio. Mas ele também declarou "fui uma fraude o tempo todo?" pós-Osbourne — a cabeça pode estar mais focada depois da reflexão.',
      },
      upset_alert: {
        title: 'Elliott força pro chão e finaliza',
        description: 'Elliott tem 9 subs carreira incluindo 2 nas últimas vitórias. TD avg 3.73 com 47% accuracy. Se conseguir clinch, levar pro chão e achar guillotine no scramble, fim de luta. Probabilidade ~40%, caminho real e técnico.',
      },
      probabilities: { fighter1: { nome: 'Elliott', percent: 40 }, fighter2: { nome: 'Erceg', percent: 57 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Steve Erceg vence porque tem 9 anos a menos, +6cm de reach, volume striking superior (4.37 SLpM), BJJ black belt anulando o sub threat principal do Elliott. Caminho: Erceg trabalha distância em pé com jab e kicks, defende takedowns iniciais, ganha em volume nos 3 rounds. Desmorona se Elliott conseguir clinch repetido + take + guillotine.',
        conviction_score: 6,
        conviction_rationale: 'Convicção 6 porque o caminho do Erceg é técnico mas Elliott é o sub specialist mais perigoso da divisão e teve zebra +240 recente. Não é 7 porque o KO no R1 do Erceg nessa arena é alerta.',
        conviction_breakers: [
          'Elliott força clinch repetido nos primeiros 90s do R1',
          'Erceg morde isca de trocar pocket onde reach não importa',
          'Guillotine ou armbar em scramble',
          'Confiança abalada do Erceg vira em decisões apertadas',
        ],
        underdog_path: {
          viable: true, probability_estimate: 40,
          key_scenario: 'Elliott pressiona desde o R1, força clinch contra a parede pra anular reach, take repetido. Em scramble busca costas ou guillotine. Cardio dele sustenta 15 minutos. Vitória por sub R2-R3 ou decisão se aguentar volume.',
          required_conditions: ['Forçar clinch antes do Erceg achar distância', 'TD acc >50%', 'Achar costas ou neck em scramble', 'Cardio 15 minutos sem fade'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Rounds', pick: 'Over 2.5 Rounds', odds: '-180 a -150', reasoning: 'Erceg 5R com Pantoja + 5R com Moreno + 3R com Osbourne + 3R com Schnell = 4 das 5 últimas foram pra decisão ou finalização no R3. Últimas 2 vitórias do Elliott foram R1-R2, mas via guilhotina, não em pancada. Probabilidade real de passar dos 2.5 rounds em torno de 70%.' },
          { type: 'Moneyline', pick: 'Steve Erceg', odds: '-178', reasoning: 'Polymarket bate em 64%. Probabilidade implícita 64%. Vantagem marginal mas alinhada com a leitura luta por luta.' },
          { type: 'Longshot', pick: 'Elliott por Submissão', odds: '+400 a +600', reasoning: 'Sub specialist com 2 finalizações nas últimas vitórias. Erceg é faixa-preta de BJJ mas defesa de quedas de 60% não é elite. Probabilidade entre 25 e 30%, paga muito.' },
          { type: 'Método', pick: 'Erceg por Decisão', odds: '+150 a +180', reasoning: 'Volume de striking + envergadura + defesa de BJJ + cardio testado em cinco rounds = decisão é o cenário mais provável. Probabilidade em torno de 50%.' },
        ],
        best_bet: { pick: 'Over 2.5 Rounds em -180 a -150', reasoning: 'Erceg vai pra distância repetidamente. Elliott aos 39, com a perna recuperada após 9 meses parado, não é mais o finisher explosivo. Decisão ou TKO tardio é o cenário mais provável. Aposta mais defensável.' },
      },
      key_stats: [
        { value: '61', label: 'Quedas conectadas do Elliott (recorde Peso Mosca UFC)', sublabel: 'Base sólida de wrestling.' },
        { value: 'KO R1', label: 'Última UFC Perth do Erceg', sublabel: 'Kara-France na mesma arena, agosto de 2024.' },
        { value: '+240', label: 'Linha de azarão do Elliott contra Asakura', sublabel: 'Zebra com a perna quebrada.' },
        { value: '+6 cm', label: 'Vantagem de envergadura do Erceg', sublabel: 'Anula o jab do Elliott.' },
      ],
      odds: { fighter1_odds: '+156', fighter2_odds: '-178', fighter1_name: 'Elliott', fighter2_name: 'Erceg', source: 'Polymarket com probabilidade implícita de 64% pro Erceg em 25 de abril de 2026. DraftKings/FanDuel não capturado no snapshot.' },
      armadilha: {
        titulo: 'Armadilha: Elliott por Finalização em +400',
        descricao: 'O mercado paga Elliott por finalização em +400 e o público vai pegar pela guilhotina assinatura + 2 finalizações nas últimas vitórias. A armadilha: Erceg é faixa-preta de BJJ (defesa de finalização decente), defesa de quedas de 60% (não é elite mas dá conta), e Elliott foi finalizado 4+ vezes na carreira UFC, mostrando que o jogo de finalização dele também é vulnerável. Aposta longshot serve como hedge, mas como aposta principal é cilada. A vantagem real está em Over 2.5 rounds ou Erceg por decisão.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'elliott-vs-erceg');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
