import { translateAnalysis } from '@/lib/translate-analysis';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';

const analise: PrelimsAnalise = {
  id: 'musayev-vs-bahamondes-pos-weighins',
  evento_id: null,
  slug: 'musayev-vs-bahamondes-pos-weighins',
  titulo: 'Musayev vs Bahamondes (Pos Weigh-Ins)',
  subtitulo: null,
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Leve (155 lbs)',
  status: 'published',
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Finalizacao ou TKO R1-R2',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Tofiq Musayev', record: '22-6-0', ultimasLutas: [{ result: 'L', opponent: 'Myktybek Orolbai', method: 'Sub R1 (kimura)', event: 'UFC on ABC 8' }] },
  fighter2_info: { nome: 'Ignacio Bahamondes', record: '17-6-0', ultimasLutas: [{ result: 'L', opponent: 'Rafael Fiziev', method: 'Decisao Unanime', event: 'UFC on ABC 8' }, { result: 'W', opponent: 'Jalin Turner', method: 'Sub R1 (triangulo)', event: 'UFC 313' }] },
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,80m', envergadura: '183cm', idade: 36, academia: 'Azerbaijan' }, fighter2: { altura: '1,88m', envergadura: '198cm', idade: 26, academia: 'Chile/USA' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
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
      categoria_peso: 'Peso Leve (155 lbs)',
      num_rounds: 3,
      is_titulo: false,
      fighter1: { nome: 'Tofiq Musayev', record: '22-6-0', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-06/MUSAYEV_TOFIQ_L_06-21.png?itok=eEnLq97J' },
      fighter2: { nome: 'Ignacio Bahamondes', record: '17-6-0', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-03/BAHAMONDES_IGNACIO_L_03-28.png?itok=SHgs079A' },
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.20, valueB: 5.50, maxVal: 7, format: 'decimal', note: 'Bahamondes produz quase o dobro de volume. 3 POTN consecutivos nao mentem.' },
        { label: 'Precisao de Strikes (%)', valueA: 45, valueB: 52, maxVal: 100, format: 'percent', note: 'Bahamondes mais preciso apesar do volume maior' },
        { label: 'Strikes Absorvidos/Min', valueA: 4.50, valueB: 3.20, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Musayev absorve 40% mais golpes. Defesa porosa.' },
        { label: 'Defesa de Strikes (%)', valueA: 42, valueB: 55, maxVal: 100, format: 'percent', note: 'Bahamondes defende 13% mais strikes' },
        { label: 'Takedowns por 15 Min', valueA: 0.80, valueB: 0.50, maxVal: 3, format: 'decimal', note: 'Nenhum dos dois e wrestler ativo' },
        { label: 'Defesa de Takedown (%)', valueA: 55, valueB: 68, maxVal: 100, format: 'percent', note: 'Bahamondes mais dificil de derrubar' },
        { label: 'Submissoes por 15 Min', valueA: 0.30, valueB: 0.80, maxVal: 2, format: 'decimal', note: 'Bahamondes busca mais finalizacoes. Submeteu Turner com triangulo no R1.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '36 anos', fighter2: '26 anos', note: '10 anos de diferenca. Bahamondes no auge fisico.' },
        { label: 'Altura', fighter1: '1,80m', fighter2: '1,88m', note: 'Bahamondes 8cm mais alto. No face-off a diferenca foi brutal.' },
        { label: 'Envergadura', fighter1: '183cm', fighter2: '198cm', note: '15cm (6 polegadas) de vantagem de reach. Absurdo pra divisao.' },
        { label: 'Background', fighter1: 'Campeao RIZIN LW GP 2019, 18 KOs', fighter2: '3 finishes R1 seguidos, 3 POTN, spinning wheel kick iconica', note: 'Nocauteadores com estilos distintos' },
        { label: 'Contexto', fighter1: 'Short-notice (Sanches caiu fora)', fighter2: 'Previu submissao: "Meu jiu-jitsu e muito superior"', note: 'Bahamondes confiante no grappling' },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Musayev',
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Myktybek Orolbai', result: 'L', method: 'Sub R1 (kimura)', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Submetido no debut UFC. Lutou em catchweight 165 lbs. Grappling exposto como fraqueza critica.' },
          { date: 'Dez 2023', opponent: 'Patricky Freire', result: 'W', method: 'Decisao Unanime', opponent_rank: 'Ex-campeao Bellator LW', quality_score: 4, quality_label: 'Muito Bom', note: 'Final RIZIN GP. Venceu com mao quebrada no R2. Resiliencia absurda.' },
          { date: 'Out 2023', opponent: 'Juri Ohara', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Semifinal RIZIN GP. KO rapido e limpo.' },
          { date: 'Jul 2023', opponent: 'Yusuke Yachi', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Mais um nocaute fulminante no RIZIN. Poder genuino.' },
          { date: 'Mar 2023', opponent: 'Roberto de Souza', result: 'W', method: 'KO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Mais um KO. 18 nocautes em 22 vitorias confirmam o poder.' },
        ],
      },
      fighter2: {
        nome: 'Bahamondes',
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Rafael Fiziev', result: 'L', method: 'Decisao Unanime', opponent_rank: '#8 LW', quality_score: 5, quality_label: 'Excelente', note: 'Perdeu para elite do UFC. Fiziev quebrou a sequencia de 3 POTN. Sem desonra.' },
          { date: 'Mar 2025', opponent: 'Jalin Turner', result: 'W', method: 'Sub R1 (triangulo)', opponent_rank: '#12 LW', quality_score: 3, quality_label: 'Bom', note: '3o POTN consecutivo. 3o finish no R1 seguido. Submeteu com triangulo.' },
          { date: 'Set 2024', opponent: 'Manuel Torres', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: '2o POTN consecutivo no UFC 306. Dominou no primeiro round.' },
          { date: 'Abr 2024', opponent: 'Christos Giagos', result: 'W', method: 'KO R1 (head kick)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Head kick devastador. Primeiro POTN da serie historica de 3.' },
          { date: 'Ago 2023', opponent: 'Ludovit Klein', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Derrota por pontos. Antes do surto de evolucao.' },
          { date: 'Ago 2021', opponent: 'Roosevelt Roberts', result: 'W', method: 'KO R3 (spinning wheel kick)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'UM DOS KOs MAIS BONITOS DA HISTORIA DO UFC. Chute giratorio no ultimo segundo.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Poder de KO', valueA: 85, valueB: 88, labelA: 'Excelente', labelB: 'Excelente', advantage: 'even', advantage_note: 'Musayev tem 18 KOs em 22 vitorias (82%). Bahamondes tem 3 POTN seguidos com finishes variados. Poder comparavel.' },
        { label: 'Tamanho e Alcance', valueA: 45, valueB: 92, labelA: 'Medio', labelB: 'Excelente', advantage: 'fighter2', advantage_note: '15cm de reach e 8cm de altura a mais. Na pesagem ficou evidente: Bahamondes engoliu Musayev no face-off. O spinning wheel kick de 198cm de envergadura e aterrorizante.' },
        { label: 'Grappling e Submissoes', valueA: 42, valueB: 72, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Bahamondes PREVIU submissao: "Meu jiu-jitsu e muito superior e vou finaliza-lo". Musayev foi submetido por kimura no debut UFC. A fraqueza e real.' },
        { label: 'Experiencia UFC', valueA: 25, valueB: 70, labelA: 'Ruim', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Musayev tem 1 luta UFC (derrota). Bahamondes tem 11 lutas no octogono. A diferenca de aclimatacao e enorme.' },
        { label: 'Experiencia Internacional', valueA: 88, valueB: 58, labelA: 'Excelente', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Campeao RIZIN LW GP 2019. Venceu Patricky Freire na final com mao quebrada. Experiencia de guerra.' },
        { label: 'Versatilidade', valueA: 45, valueB: 82, labelA: 'Medio', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: 'Bahamondes finalizou com triangulo, brabo choke, head kick KO, TKO e spinning wheel kick. Musayev depende primariamente de nocautes.' },
      ],
      insight: 'A grande historia dessa luta e o contraste entre poder bruto e versatilidade. Musayev tem 82% de vitorias por nocaute, e um dos nocauteadores mais puros do esporte. Mas Bahamondes tem TUDO: reach massivo (198cm vs 183cm), 3 POTN consecutivos com 3 metodos diferentes de finish, e agora promete usar o jiu-jitsu. A fraqueza de grappling de Musayev (submetido por kimura no R1 contra Orolbai) e exatamente o que Bahamondes quer explorar. Musayev entrou short-notice (substituindo Samuel Sanches) e nunca enfrentou alguem com o tamanho e arsenal de Bahamondes.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Musayev', ko_tko: { count: 18, percent: 82 }, submission: { count: 2, percent: 9 }, decision: { count: 2, percent: 9 }, total_wins: 22 },
      fighter2: { nome: 'Bahamondes', ko_tko: { count: 10, percent: 59 }, submission: { count: 4, percent: 24 }, decision: { count: 3, percent: 17 }, total_wins: 17 },
      insight: 'Musayev e nocauteador puro: 82% de vitorias por KO/TKO, uma taxa absurda. Bahamondes e significativamente mais versatil: 59% KO, 24% submission, 17% decisao. Os 3 ultimos finishes de Bahamondes foram head kick KO (Giagos), TKO (Torres) e triangulo (Turner). Tres metodos diferentes em 3 lutas. Musayev depende de conectar na frente. Bahamondes tem multiplos caminhos pra vencer.',
    },
    previsao_final: {
      winner_name: 'Ignacio Bahamondes',
      winner_side: 'fighter2',
      predicted_method: 'Finalizacao ou TKO R1-R2',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation: 'Bahamondes tem todas as ferramentas pra dominar essa luta. Vantagem de 15cm de reach (198cm vs 183cm) e 8cm de altura, permitindo que controle a distancia com jabs e front kicks enquanto Musayev precisa entrar no pocket. No face-off da pesagem, a diferenca de tamanho ficou ainda mais evidente. Bahamondes esta TAN confiante no grappling que previu publicamente uma SUBMISSAO: "Acho que meu jiu-jitsu e muito superior e vou finaliza-lo". Considerando que Musayev foi submetido por kimura no R1 contra Orolbai no debut UFC, essa previsao tem fundamento real. A versatilidade de Bahamondes (3 metodos de finish diferentes nos ultimos 3 POTN) contra a unidimensionalidade de Musayev (82% KO) e o fator decisivo. A unica chance de Musayev e conectar uma bomba antes que Bahamondes imponha o jogo. Ex-campeao RIZIN com 18 KOs e perigoso ate o ultimo segundo, mas entrou short-notice substituindo Samuel Sanches e nunca enfrentou alguem com essas dimensoes no UFC.',
      x_factor: {
        title: 'Bahamondes prevendo submissao em vez de KO',
        description: 'Quando um striker com 3 POTN seguidos e um spinning wheel kick iconica decide que vai SUBMETER o oponente, algo mudou. Bahamondes estudou a fraqueza de grappling de Musayev (kimura R1 vs Orolbai) e vem com game plan de jiu-jitsu. Isso indica preparacao especifica e confianca genuina no chao.',
      },
      upset_alert: {
        title: '18 KOs e experiencia RIZIN de Musayev',
        description: 'Musayev tem 82% de vitorias por nocaute. Venceu a final do RIZIN GP com mao quebrada contra Patricky Freire. E um competidor de elite com poder genuino e resiliencia comprovada. Se conseguir fechar distancia e conectar, o tamanho de Bahamondes vira irrelevante.',
      },
      probabilities: {
        fighter1: { nome: 'Musayev', percent: 30 },
        fighter2: { nome: 'Bahamondes', percent: 68 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Bahamondes (-335)', reasoning: 'A linha subiu de -290 para -335 apos pesagem. Favorito pesado e justificado pelas vantagens fisicas e de versatilidade. Mas a -335 nao oferece valor como aposta isolada. So faz sentido em parlay.' },
        method: { pick: 'Bahamondes por Submissao (+200)', reasoning: 'O PROPRIO Bahamondes previu submissao. Musayev foi submetido por kimura no R1 contra Orolbai. Bahamondes submeteu Turner com triangulo no R1. Se as odds de sub estiverem em +200, ha valor real aqui.' },
        over_under: { pick: 'Under 2.5 Rounds', rounds: 2.5, reasoning: 'Musayev tem 82% de KO rate. Bahamondes acabou suas ultimas 3 lutas no R1. Dois finalizadores explosivos. A probabilidade de ir aos juizes e minima.' },
        best_value: 'Under 2.5 Rounds e a aposta mais inteligente. A ML de Bahamondes a -335 nao tem valor. A revelacao e Bahamondes por Submissao: o cara AVISOU que vai finalizar, e Musayev ja mostrou fraqueza no grappling. Se encontrar essa prop em +200 ou mais, e a aposta afiada do card.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = locale === 'en' ? translateAnalysis(analise) : analise;
  return <PrelimsAnalysisView analise={data} />;
}
