import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'mar-fan-vs-steele',
  evento_id: null,
  slug: 'mar-fan-vs-steele',
  titulo: 'Mar Fan vs Steele: Estreante em Casa contra Black Belt CJJ',
  subtitulo:
    'Dom Mar Fan estreante UFC, 9-2 com 5 vitórias seguidas, em casa em Perth. Kody Steele 0-1 no UFC após Luta da Noite contra Rongzhu, 15 meses parado, campeão mundial de Combat Jiu-Jitsu 2019. Defesa de quedas de 20% do Mar Fan é vulnerabilidade real contra pedigree de grappling.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,80m', envergadura: '191cm', idade: 26, academia: 'Team Compton Brisbane' },
      fighter2: { altura: '1,75m', envergadura: '180cm', idade: 31, academia: 'Syndicate MMA Las Vegas' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão ou TKO Tardio',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Dom Mar Fan', apelido: 'Street Buddha', record: '9-2-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  fighter2_info: { nome: 'Kody Steele', record: '7-1-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: '2 de Maio, 2026',
  evento_local: 'RAC Arena, Perth, Austrália',
  categoria_peso: 'Peso Leve (155 lbs)',
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
      categoria_peso: 'Peso Leve (155 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Estreante em Casa contra CJJ Champ',
      tagline_sub: 'Mar Fan 5 vitórias seguidas no Road to UFC. Steele campeão mundial de CJJ 2019 + 15 meses parado. Vulnerabilidade na defesa de quedas (20%) do estreante.',
      fighter1: {
        nome_completo: 'Dom "Street Buddha" Mar Fan',
        apelido: 'Street Buddha',
        sobrenome: 'Mar Fan',
        record: '9-2-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Brisbane, Queensland Austrália | 26 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/MAR_FAN_DOM_R_01-31.png?itok=FLJtw-SZ',
      },
      fighter2: {
        nome_completo: 'Kody Steele',
        apelido: '',
        sobrenome: 'Steele',
        record: '7-1-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Port Angeles, Washington (Vegas) | 31 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/STEELE_KODY_L_10-08.png?itok=DPfk8c-Z',
      },
    },
    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Pedigree de Grappling Contra Envergadura + Casa',
      insight:
        'Mar Fan é estreante no UFC com 5 vitórias seguidas via contrato do Road to UFC. Faixa-marrom de BJJ + striker atlético. Steele tem pedigree de grappling absurdo (campeão mundial de CJJ 2019, campeão EBI faixa-marrom, prata no trials do ADCC, bateu DJ Jackson) só que na estreia UFC declarou "meu jiu-jitsu não me ajudou numa luta majoritariamente de striking". Curiosidade: as 2 derrotas profissionais do Mar Fan foram AMBAS para Quillan Salkilld (mesmo card!) por mata-leão. Defesa de quedas de 20% do Mar Fan é alerta vermelho contra grappler de verdade, só que Steele declarou estar em modo striking. Se for em pé, Mar Fan com 11 cm a mais de envergadura + 5 cm de altura + 5 anos mais novo = vence. Se for wrestling, Steele faixa-preta de BJJ + campeão CJJ contra faixa-marrom = problema sério.',
      tension: {
        truth_a: 'Mar Fan 26 anos, em ascensão, em casa em Perth, 11 cm a mais de envergadura, momentum 5 vitórias seguidas (3 decisões unânimes no Road to UFC + finalizações no regional).',
        truth_b: 'Steele campeão mundial de CJJ + faixa-marrom EBI + bateu DJ Jackson no Third Coast. Wrestling, campeão estadual no ensino médio. Se decidir grappling, defesa de quedas de 20% do Mar Fan é gap gigante.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Dom Mar Fan', color: 'red', momentum_score: 8, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: '5 vitórias seguidas, 0-0 no UFC (estreante). UFC 325 (Final do Road to UFC S4) decisão unânime sobre Kim em jan/2026 — ficou atrás no R1 (Kim achou as costas) mas reverteu e finalizou no striking no R3. Antes decisão unânime contra Park (semifinal Road to UFC), finalização por mata-leão contra Pratt no Eternal 91, KO contra Rogers no Eternal 86, **derrota pro Salkilld por mata-leão no R2** Eternal 82.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'SangWook Kim', result: 'W', method: 'Decisão Unânime (30-27 x3)', opponent_rank: 'Final Road to UFC', quality_score: 2, quality_label: 'Médio', note: 'Final Road to UFC S4. Reverteu déficit do R1.' },
          { date: '2025', opponent: 'Jae Hyun Park', result: 'W', method: 'Decisão Unânime', opponent_rank: 'Road to UFC', quality_score: 2, quality_label: 'Médio', note: 'Semifinal Road to UFC.' },
          { date: 'Nov 2024', opponent: 'Tom Pratt', result: 'W', method: 'Sub mata-leão', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Eternal 91.' },
          { date: 'Jun 2024', opponent: 'Tim Rogers', result: 'W', method: 'KO', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Eternal 86.' },
          { date: 'Fev 2024', opponent: 'Quillan Salkilld', result: 'L', method: 'Sub R2 (mata-leão 3:03)', opponent_rank: 'Salkilld', quality_score: 4, quality_label: 'Muito Bom', note: 'Eternal 82 título. Mata-leão.' },
        ],
      },
      fighter2: {
        nome: 'Kody Steele', color: 'blue', momentum_score: 5, momentum_label: 'Estável (com ressalvas)', momentum_trend: 'stable',
        momentum_note: '0-1 no UFC. Estreia UFC 312 fev/2025 = derrota por decisão unânime pro Rongzhu (Luta da Noite, bônus de 50 mil). 15 MESES PARADO entrando aqui. Histórico de lesão (joelho Glory MMA 2022 ficou 1 ano fora). 31 anos. Campeão mundial de CJJ 2019 + faixa-marrom EBI + prata no trials ADCC.',
        recent_fights: [
          { date: 'Fev 2025', opponent: 'Rongzhu', result: 'L', method: 'Decisão Unânime (30-27 x3)', opponent_rank: 'UFC ativo', quality_score: 2, quality_label: 'Médio', note: 'Estreia UFC. Luta da Noite.' },
          { date: 'Out 2024', opponent: 'Chasen Blair', result: 'W', method: 'TKO R2 (4:07, gancho de esquerda no fígado)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Contrato no DWCS.' },
          { date: 'Abr 2024', opponent: 'Alejandro Martinez', result: 'W', method: 'TKO R3 (2:09)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Fury FC 89.' },
          { date: 'Pré-2024', opponent: 'Regional', result: 'W', method: 'Finalização + 3 paradas', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Pré-UFC, sequência 6-0 amador.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Mar Fan', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: '5V-0D recente regional', contra_top5: '0V-0D' },
      fighter2: { nome: 'Steele', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '2V-2D recente (UFC + DWCS)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Os dois com calibre regional/DWCS recente. Amostra pequena.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 2.27, valueB: 5.27, maxVal: 6, format: 'decimal', note: 'SLpM do Steele inflado pela trocação contra Rongzhu. Não é sustentável.' },
        { label: 'Defesa de Strikes (%)', valueA: 34, valueB: 0, maxVal: 100, format: 'percent', note: 'Defesa de strikes do Mar Fan em 34% é alerta. Steele não capturado.' },
        { label: 'Takedowns por 15 Min', valueA: 0, valueB: 0, maxVal: 5, format: 'decimal', note: 'Steele com 1 queda contra Rongzhu em 90s.' },
        { label: 'Defesa de Takedown (%)', valueA: 20, valueB: 0, maxVal: 100, format: 'percent', note: 'Defesa de quedas do Mar Fan em 20% é alerta GIGANTE.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '26 anos', fighter2: '31 anos', note: 'Mar Fan 5 anos mais novo.' },
        { label: 'Altura', fighter1: '1,80m', fighter2: '1,75m', note: 'Mar Fan 5 cm mais alto.' },
        { label: 'Envergadura', fighter1: '191 cm', fighter2: '180 cm', note: 'Mar Fan 11 cm de envergadura a mais. Vantagem clara.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'N/D', note: null },
        { label: 'Background', fighter1: 'Faixa-marrom de BJJ + striker', fighter2: 'Campeão mundial CJJ 2019 + wrestling do ensino médio', note: 'Choque de estilos importante.' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking de Volume', advantage: 'fighter2', gap: 1, note: 'Steele em sample isolado mostrou volume contra Rongzhu.' },
        { label: 'Envergadura + Geometria', advantage: 'fighter1', gap: 3, note: '11 cm a mais de envergadura anula a distância onde Steele precisa entrar.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter2', gap: 3, note: 'Campeão estadual no ensino médio + queda no DWCS.' },
        { label: 'Jogo de Finalização', advantage: 'fighter2', gap: 4, note: 'Campeão mundial CJJ + EBI + trials ADCC.' },
        { label: 'Cardio / Atividade', advantage: 'fighter1', gap: 2, note: 'Mar Fan 3 lutas em 12 meses. Steele 15 meses parado.' },
        { label: 'Em Casa', advantage: 'fighter1', gap: 3, note: 'Perth.' },
      ],
      summary: 'Em pé Mar Fan vence (envergadura + idade). No chão Steele domina. Quem dita o local vence — e Steele declarou querer trocação.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Mar Fan', ko_tko: { count: 2, percent: 22 }, submission: { count: 2, percent: 22 }, decision: { count: 5, percent: 56 }, total_wins: 9 },
      fighter2: { nome: 'Steele', ko_tko: { count: 4, percent: 57 }, submission: { count: 1, percent: 14 }, decision: { count: 2, percent: 29 }, total_wins: 7 },
      insight: 'Mar Fan 56% das vitórias por decisão. Steele mais finisher mas média de finalização ofensiva só 14% (sub specialist no grappling, não no MMA). Tendência de decisão é forte.',
    },
    previsao_final: {
      winner_name: 'Dom Mar Fan', winner_side: 'fighter1',
      predicted_method: 'Decisão ou TKO Tardio', confidence_score: 6, confidence_label: 'MÉDIA',
      explanation:
        'Pick é Mar Fan por decisão ou TKO tardio com convicção 6. Vantagens: idade 5 anos a menos, 11 cm a mais de envergadura, 5 cm a mais de altura, em casa em Perth, momentum 5 vitórias seguidas contra Steele com 15 meses parado + dúvida de recuperação pós-derrota. Steele tem pedigree de grappling absurdo (campeão mundial CJJ não é exagero), só que na estreia UFC declarou que o jiu-jitsu não ajudou numa luta de striking. Honestidade: defesa de quedas de 20% do Mar Fan é vulnerabilidade real se Steele decidir wrestling. Se for em pé puro, Mar Fan vence em volume + envergadura.',
      x_factor: {
        title: 'Steele decide o local',
        description: 'Se Steele entrar em modo grappling como contra Mingaj no DWCS, defesa de quedas de 20% do Mar Fan é explorável. Se entrar em modo striking como contra Rongzhu, ele perde pela envergadura. Quem dita o local da luta vence.',
      },
      upset_alert: {
        title: 'Steele consegue queda repetida + finalização',
        description: 'Campeão mundial CJJ não é hype. Campeão estadual de wrestling no ensino médio. Se decidir grappling, defesa de quedas de 20% do Mar Fan colapsa e Steele finaliza no chão. Probabilidade aproximada de 37%.',
      },
      probabilities: { fighter1: { nome: 'Mar Fan', percent: 60 }, fighter2: { nome: 'Steele', percent: 37 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Dom Mar Fan vence porque tem 5 anos a menos, 11 cm a mais de envergadura, em casa em Perth, momentum 5 vitórias seguidas, e Steele chega de 15 meses parado aos 31 declarando que jiu-jitsu não ajudou no striking do UFC. Caminho: trabalha distância em pé com jab, defende as quedas iniciais, ganha em volume nos 3 rounds. Desmorona se Steele decidir entrar em modo grappling e conseguir queda repetida.',
        conviction_score: 6,
        conviction_rationale: 'Convicção 6 porque as vantagens são reais mas defesa de quedas de 20% do Mar Fan é vulnerabilidade estrutural contra campeão mundial CJJ. Steele declarou estar em modo striking mas pode mudar. Não é 7 por causa do gap de pedigree de grappling.',
        conviction_breakers: [
          'Steele decide modo grappling pós-15 meses parado',
          'Queda repetida + finalização em scramble',
          'Mar Fan é striker atlético mas defesa de quedas colapsa',
          'Cards apertados pendem pro Steele no volume',
        ],
        underdog_path: {
          viable: true, probability_estimate: 37,
          key_scenario: 'Steele entra em modo grappling decisivo (oposto da estratégia contra Rongzhu), queda repetida, controle por cima, finalização em scramble (pedigree CJJ).',
          required_conditions: ['Queda repetida com defesa de quedas do Mar Fan em 20%', 'Decidir grappling em vez de striking', 'Achar finalização no chão antes do R3'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Método', pick: 'Mar Fan por Decisão', odds: '-110 a -150', reasoning: 'Tendência de decisão no UFC + volume superior + vantagem da casa. Probabilidade aproximada de 50%.' },
          { type: 'Rounds', pick: 'Over 2.5 Rounds', odds: '-150 a -180', reasoning: 'Mar Fan 56% das vitórias por decisão. Steele Luta da Noite contra Rongzhu (3 rounds completos). Probabilidade aproximada de 70%.' },
          { type: 'Longshot', pick: 'Steele por Finalização', odds: '+400 a +600', reasoning: 'Campeão mundial CJJ não é hype. Defesa de quedas de 20% do Mar Fan. Probabilidade aproximada de 15-20%, paga 4-6x.' },
          { type: 'Moneyline', pick: 'Mar Fan', odds: '-160 a -200', reasoning: 'Vantagem moderada pelo conjunto.' },
        ],
        best_bet: { pick: 'Over 2.5 Rounds em -150 a -180', reasoning: 'Tendência de decisão clara. Steele Luta da Noite contra Rongzhu mostrou cardio de 3 rounds. Mar Fan com 3 últimas decisões. Aposta mais defensável.' },
      },
      key_stats: [
        { value: '+11 cm', label: 'Envergadura do Mar Fan', sublabel: 'Anula a distância onde Steele opera.' },
        { value: '15 meses', label: 'Período parado do Steele', sublabel: 'Pós-decisão unânime contra Rongzhu + histórico de lesão.' },
        { value: 'Campeão CJJ', label: 'Pedigree do Steele', sublabel: 'Campeão mundial de Combat Jiu-Jitsu 2019.' },
        { value: '20%', label: 'Defesa de quedas do Mar Fan', sublabel: 'Vulnerabilidade real contra grappler.' },
      ],
      odds: { fighter1_odds: '-180', fighter2_odds: '+150', fighter1_name: 'Mar Fan', fighter2_name: 'Steele', source: 'Linhas de abertura esperadas. Best Fight Odds tem o evento mas snapshot específico não capturado.' },
      armadilha: {
        titulo: 'Armadilha: Steele por Finalização em +400',
        descricao: 'Mercado paga e o público pega pelo pedigree CJJ absurdo (campeão mundial 2019, EBI, ADCC). A armadilha: Steele declarou publicamente depois da estreia UFC que "jiu-jitsu não me ajudou numa luta majoritariamente de striking" — ou seja, a cabeça não está em modo grappling. Pra finalizar, ele precisaria inverter a estratégia de luta dele. Aposta longshot serve como hedge se você acredita na virada de cabeça, mas como aposta principal é cilada.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'mar-fan-vs-steele');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
