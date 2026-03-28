import { translateAnalysis } from '@/lib/translate-analysis';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';

const analise: PrelimsAnalise = {
  id: 'simon-vs-yanez-pos-weighins',
  evento_id: null,
  slug: 'simon-vs-yanez-pos-weighins',
  titulo: 'Simon vs Yanez (Pos Weigh-Ins)',
  subtitulo: null,
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Galo (135 lbs)',
  status: 'published',
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisao Unanime',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Ricky Simon', record: '22-7-0', ultimasLutas: [{ result: 'L', opponent: 'Raoni Barcelos', method: 'Decisao Unanime', event: 'UFC Fight Night' }, { result: 'W', opponent: 'Cameron Smotherman', method: 'Decisao Unanime', event: 'UFC Fight Night' }, { result: 'W', opponent: 'Javid Basharat', method: 'KO R1', event: 'UFC Fight Night' }] },
  fighter2_info: { nome: 'Adrian Yanez', record: '17-6-0', ultimasLutas: [{ result: 'L', opponent: 'Daniel Marcos', method: 'Decisao Dividida', event: 'UFC on ESPN' }, { result: 'W', opponent: 'Vinicius Salvador', method: 'TKO R1', event: 'UFC Fight Night' }] },
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,70m', envergadura: '178cm', idade: 32, academia: 'Alliance MMA, San Diego' }, fighter2: { altura: '1,73m', envergadura: '178cm', idade: 29, academia: 'Entram Gym, Houston' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  analysis_type: 'prelims',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  prelims_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
      evento_data: '28 de Marco, 2026',
      categoria_peso: 'Peso Galo (135 lbs)',
      num_rounds: 3,
      is_titulo: false,
      fighter1: { nome: 'Ricky Simon', record: '22-7-0', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-03/SIMON_RICKY_L_03-28.png?itok=ySattvaZ' },
      fighter2: { nome: 'Adrian Yanez', record: '17-6-0', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-12/YANEZ_ADRIAN_L_12-14.png?itok=SZze8Ne_' },
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.80, valueB: 5.20, maxVal: 7, format: 'decimal', note: 'Yanez com volume de striking ligeiramente maior' },
        { label: 'Precisao de Strikes (%)', valueA: 42, valueB: 50, maxVal: 100, format: 'percent', note: 'Yanez mais preciso nas trocas' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.50, valueB: 5.75, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Yanez absorve 5.75 strikes/min. Uma das taxas mais altas do peso-galo. Vulneravel.' },
        { label: 'Defesa de Strikes (%)', valueA: 55, valueB: 42, maxVal: 100, format: 'percent', note: 'Simon defende 13% mais strikes' },
        { label: 'Takedowns por 15 Min', valueA: 4.66, valueB: 0.00, maxVal: 6, format: 'decimal', note: 'Simon: 4.66 TDs/15min, 44 career UFC TDs (2o all-time BW atras do Merab). Yanez: ZERO.' },
        { label: 'Defesa de Takedown (%)', valueA: 72, valueB: 81, maxVal: 100, format: 'percent', note: 'Yanez tem 81% TDD no papel. Mas NUNCA enfrentou chain wrestler elite como Simon.' },
        { label: 'Precisao de Takedown (%)', valueA: 41, valueB: 0, maxVal: 100, format: 'percent', note: 'Simon converte 41% de tentativas. Com volume de 4.66/15min, mesmo 41% gera muitos TDs.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '32 anos', fighter2: '29 anos', note: 'Diferenca irrelevante nessa faixa' },
        { label: 'Altura', fighter1: '1,70m', fighter2: '1,73m', note: 'Praticamente iguais' },
        { label: 'Envergadura', fighter1: '178cm', fighter2: '178cm', note: 'Mesmo reach. Sem vantagem pra ninguem.' },
        { label: 'Estilo', fighter1: '5x campeao estadual wrestling. BJJ faixa preta.', fighter2: 'Boxer natural. 0.00 TD average. Aceita tudo em pe.', note: 'Grappler elite vs Striker puro' },
        { label: 'Contexto', fighter1: 'Nocauteou Basharat EM SEATTLE (fev 2025). Conhece a arena.', fighter2: 'Aceitou short-notice de Dallas. "Prazo mais curto do que gostaria."', note: 'Simon de volta a casa vs Yanez improvisando' },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Simon',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Raoni Barcelos', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Barcelos neutralizou o wrestling com TDD elite. Simon nao conseguiu impor o jogo.' },
          { date: 'Jun 2025', opponent: 'Cameron Smotherman', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Vitoria por controle contra oponente fraco. Nao impressionou.' },
          { date: 'Fev 2025', opponent: 'Javid Basharat', result: 'W', method: 'KO R1 (soco)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Nocaute surpreendente EM SEATTLE. Simon mostrou poder que ninguem esperava. Arena familiar.' },
          { date: 'Jun 2024', opponent: 'Vinicius Oliveira', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Perdeu pra prospect jovem no UFC 303.' },
          { date: 'Jan 2024', opponent: 'Mario Bautista', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Bautista neutralizou o wrestling.' },
          { date: 'Abr 2023', opponent: 'Song Yadong', result: 'L', method: 'TKO R5 (socos)', opponent_rank: '#10 BW', quality_score: 4, quality_label: 'Muito Bom', note: 'Competitivo ate o R5 contra top 10. FOTN. Mostrou coracao.' },
          { date: 'Jul 2022', opponent: 'Jack Shore', result: 'W', method: 'Sub R2 (arm-triangle)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Wrestling dominante com finalizacao. O template da vitoria.' },
          { date: 'Dez 2021', opponent: 'Raphael Assuncao', result: 'W', method: 'KO R2 (socos)', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Nocauteou ex-top 5 veterano.' },
        ],
      },
      fighter2: {
        nome: 'Yanez',
        recent_fights: [
          { date: 'Dez 2024', opponent: 'Daniel Marcos', result: 'L', method: 'Decisao Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Decisao apertada mas nao fez o suficiente. 3a derrota em 4 lutas.' },
          { date: 'Mai 2024', opponent: 'Vinicius Salvador', result: 'W', method: 'TKO R1 (socos)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Nocaute rapido contra oponente fraco. O poder e real, o nível nao.' },
          { date: 'Out 2023', opponent: 'Jonathan Martinez', result: 'L', method: 'TKO R2 (leg kicks)', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Low kicks destruiram as pernas de Yanez. Incapaz de se ajustar.' },
          { date: 'Abr 2023', opponent: 'Rob Font', result: 'L', method: 'TKO R1 (socos)', opponent_rank: '#10 BW', quality_score: 4, quality_label: 'Muito Bom', note: 'Font dominou com jab e alcance no UFC 287. Yanez nunca encontrou ritmo.' },
          { date: 'Jun 2022', opponent: 'Tony Kelley', result: 'W', method: 'TKO R1 (socos)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'POTN. Nocaute explosivo vintage Yanez.' },
          { date: 'Nov 2021', opponent: 'Davey Grant', result: 'W', method: 'Decisao Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'FOTN. Guerra total de 3 rounds.' },
          { date: 'Jul 2021', opponent: 'Randy Costa', result: 'W', method: 'TKO R2 (socos)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'POTN. Outra vitoria explosiva em ascensao.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Wrestling Ofensivo', valueA: 88, valueB: 20, labelA: 'Excelente', labelB: 'Ruim', advantage: 'fighter1', advantage_note: '5x campeao estadual de wrestling. Comecou aos 9 anos. 44 career UFC TDs (2o all-time no BW atras do Merab). 4.66 TDs/15min. Yanez tem ZERO takedowns ofensivos.' },
        { label: 'Boxing e Poder', valueA: 52, valueB: 82, labelA: 'Medio', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: 'Yanez e boxer natural com 9 KOs na carreira. Quote: "Se ele trocar comigo, vai ser uma decisao estupida." O poder e real.' },
        { label: 'Defesa de Takedown', valueA: 72, valueB: 55, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Yanez tem 81% TDD no papel mas nunca enfrentou chain wrestler com volume de 4.66 TDs/15min. Numero inflado por falta de teste.' },
        { label: 'Cardio e Ritmo', valueA: 75, valueB: 55, labelA: 'Muito Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Simon mantem pressao de wrestling por 3 rounds. Yanez desacelera quando nao nocauteia cedo. Absorve 5.75 strikes/min e se desgasta.' },
        { label: 'Grappling Geral', valueA: 80, valueB: 35, labelA: 'Muito Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Simon e faixa preta de BJJ. Submeteu Jack Shore com arm-triangle. Yanez e quase exclusivamente striker, com 0.00 TDs ofensivos.' },
        { label: 'Vantagem de Venue', valueA: 78, valueB: 40, labelA: 'Muito Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Simon ja nocauteou Basharat nessa mesma arena (Climate Pledge) em fev 2025. Conhece o octogono, a torcida, a energia. Yanez chegou short-notice de Dallas.' },
      ],
      insight: 'O matchup e simples na teoria: Simon e um dos melhores wrestlers do peso-galo (2o em takedowns all-time na divisao, 5x campeao estadual, BJJ faixa preta) contra Yanez, que tem 0.00 takedowns ofensivos e nunca enfrentou um chain wrestler de elite. O 81% TDD de Yanez nunca foi testado contra alguem que tenta 4.66 TDs por round. Simon ja lutou nessa arena e nocauteou Basharat aqui. Yanez admitiu estar em "prazo mais curto do que gostaria" apos aceitar short-notice. A unica carta de Yanez e o poder: se conectar antes do primeiro takedown, pode acabar. Quote de Yanez: "Se ele trocar comigo, vai ser uma decisao estupida." A questao e se Simon vai trocar.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Simon', ko_tko: { count: 5, percent: 23 }, submission: { count: 6, percent: 27 }, decision: { count: 11, percent: 50 }, total_wins: 22 },
      fighter2: { nome: 'Yanez', ko_tko: { count: 9, percent: 53 }, submission: { count: 2, percent: 12 }, decision: { count: 6, percent: 35 }, total_wins: 17 },
      insight: 'Perfis opostos. Simon e wrestler de decisao: 50% das vitorias nos pontos, 27% por finalizacao. Yanez e nocauteador: 53% por KO/TKO, com as maos mais pesadas da divisao em momentos explosivos. A logica e clara: Simon vai querer controlar e vencer por pontos. Yanez precisa manter em pe e fazer dano. Com 0.00 TDs ofensivos e 1-3 nas ultimas 4, o declinio de Yanez e evidente.',
    },
    previsao_final: {
      winner_name: 'Ricky Simon',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation: 'Simon tem 44 career takedowns no UFC (2o all-time no peso-galo, so atras do Merab Dvalishvili) com 4.66 tentativas por 15 minutos. Yanez tem ZERO takedowns ofensivos na carreira inteira. A TDD de 81% de Yanez parece boa no papel, mas nunca foi testada contra um chain wrestler do calibre de Simon, que e 5x campeao estadual e comecou a lutar wrestling aos 9 anos de idade. Yanez vem de fase pessima (1-3 nas ultimas 4), absorve 5.75 strikes por minuto (numero altissimo), e aceitou essa luta short-notice de Dallas, admitindo "prazo mais curto do que gostaria". Do outro lado, Simon ja nocauteou Basharat NESSA MESMA ARENA (Climate Pledge, Seattle, fevereiro de 2025), conhece o local, e tem a torcida. Simon nao vai trocar. Yanez declarou: "Se ele trocar comigo, vai ser uma decisao estupida." Concordo. E por isso Simon nao vai trocar. Vai levar ao chao e controlar por 15 minutos. A confianca e MEDIA-ALTA porque Simon e inconsistente (tambem perdeu para Barcelos recentemente), mas o matchup estilístico e perfeito pra ele.',
      x_factor: {
        title: 'Simon ja venceu nessa arena',
        description: 'Simon nocauteou Javid Basharat nessa mesma Climate Pledge Arena em fevereiro de 2025. A familiaridade com o local, a torcida, e a confianca de ja ter performado ali dao uma vantagem psicologica que nao aparece nas estatisticas. Arena favoravel e um intangivel real.',
      },
      upset_alert: {
        title: 'O poder de R1 de Yanez e real',
        description: 'Yanez tem 9 KOs na carreira e poder genuino nos primeiros minutos. Quote dele: "Se ele trocar comigo, vai ser uma decisao estupida." O perigo esta nos primeiros 2 minutos antes de Simon impor o wrestling. Se Yanez conectar um uppercut na entrada de TD, tudo muda. Odds de +300 a +340 pra Yanez KO R1 refletem esse cenario de upset.',
      },
      probabilities: {
        fighter1: { nome: 'Simon', percent: 65 },
        fighter2: { nome: 'Yanez', percent: 33 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Simon (-180)', reasoning: 'Favorito justificado pelo wrestling. 2o em TDs all-time no BW, faixa preta, 5x campeao estadual. Contra um striker com 0.00 TDs ofensivos em fase ruim (1-3). Preco justo.' },
        method: { pick: 'Simon por Decisao (-120)', reasoning: '50% das vitorias de Simon sao por decisao. O wrestling controla sem necessidade de finish. 4.66 TDs/15min garantem controle suficiente pra vencer nos cartoes.' },
        over_under: { pick: 'Over 2.5 Rounds', rounds: 2.5, reasoning: 'Simon controla com wrestling sem forcar finish na maioria das lutas. Yanez e duro de parar quando esta no chao defendendo. A tendencia e ir pros juizes.' },
        best_value: 'Simon por Decisao e a aposta mais solida do card. O longshot com valor real e Yanez KO R1 nas faixas de +300 a +340: se Simon cometer o erro de trocar nos primeiros 90 segundos, Yanez tem poder pra acabar. Mas Simon e disciplinado demais pra isso.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = locale === 'en' ? translateAnalysis(analise) : analise;
  return <PrelimsAnalysisView analise={data} />;
}
