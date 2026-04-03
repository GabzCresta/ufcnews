import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';

const analise: PrelimsAnalise = {
  id: 'lopes-vs-stirling-pos-weighins',
  evento_id: null,
  slug: 'lopes-vs-stirling-pos-weighins',
  titulo: 'Lopes vs Stirling (Pos Weigh-Ins)',
  subtitulo: null,
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Meio-Pesado (205 lbs)',
  status: 'published',
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Decisao Unanime',
    confidence: 'ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Bruno Lopes', record: '14-2-0', ultimasLutas: [{ result: 'L', opponent: 'Jacoby', method: 'KO R1', event: 'UFC Fight Night' }, { result: 'W', opponent: 'Gadzhiyasulov', method: 'Decisao Unanime', event: 'UFC Fight Night' }] },
  fighter2_info: { nome: 'Navajo Stirling', record: '8-0-0', ultimasLutas: [{ result: 'W', opponent: 'Bellato', method: 'Decisao Unanime', event: 'UFC Fight Night' }, { result: 'W', opponent: 'Erslan', method: 'Decisao Unanime', event: 'UFC Fight Night' }, { result: 'W', opponent: 'Tokkos', method: 'Decisao Unanime', event: 'UFC Fight Night' }] },
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,85m', envergadura: '188cm', idade: 33, academia: 'Brasil' }, fighter2: { altura: '1,93m', envergadura: '198cm', idade: 27, academia: 'City Kickboxing, Auckland' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
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
      categoria_peso: 'Peso Meio-Pesado (205 lbs)',
      num_rounds: 3,
      is_titulo: false,
      fighter1: { nome: 'Bruno Lopes', record: '14-2-0', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/2/LOPES_BRUNO_L_01-11.png?itok=0ZAo1l_Y' },
      fighter2: { nome: 'Navajo Stirling', record: '8-0-0', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-03/STIRLING_NAVAJO_L_03-28.png?itok=BJ1MVXPh' },
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.50, valueB: 4.20, maxVal: 6, format: 'decimal', note: 'Stirling com volume maior. City Kickboxing forma strikers de alto volume.' },
        { label: 'Precisao de Strikes (%)', valueA: 46, valueB: 52, maxVal: 100, format: 'percent', note: 'Stirling mais preciso. Treinado por Eugene Bareman.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.80, valueB: 2.80, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Stirling absorve 26% menos. Gestao de distancia e a marca registrada.' },
        { label: 'Defesa de Strikes (%)', valueA: 48, valueB: 58, maxVal: 100, format: 'percent', note: 'Stirling defende 10% mais. Counter striker disciplinado.' },
        { label: 'Takedowns por 15 Min', valueA: 1.50, valueB: 0.80, maxVal: 3, format: 'decimal', note: 'Lopes tenta mais TDs. Unica rota ofensiva pra vencer.' },
        { label: 'Defesa de Takedown (%)', valueA: 55, valueB: 78, maxVal: 100, format: 'percent', note: 'Stirling com 78% TDD. Citou defesa de TD como pilar do game plan.' },
        { label: 'Precisao de Takedown (%)', valueA: 40, valueB: 45, maxVal: 100, format: 'percent', note: 'Lopes converte 40% contra 78% TDD de Stirling. Matematica desfavoravel.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '27 anos', note: 'Stirling 6 anos mais jovem. Auge atletico.' },
        { label: 'Altura', fighter1: '1,85m', fighter2: '1,93m', note: 'Stirling 8cm mais alto. Vantagem de distancia significativa no LHW.' },
        { label: 'Envergadura', fighter1: '188cm', fighter2: '198cm', note: '10cm de vantagem de reach pra Stirling. Controla distancia facilmente.' },
        { label: 'Academia', fighter1: 'Brasil', fighter2: 'City Kickboxing (Adesanya, Hooker, Volkanovski). Coach: Eugene Bareman.', note: 'CKB forma os melhores strikers do mundo.' },
        { label: 'Kickboxing', fighter1: 'Base BJJ. Derrota por KO pra Jacoby no R1.', fighter2: '2x King in the Ring. Campeao mundial WKBF. Invicto 8-0.', note: 'Lopes perdeu pra Jacoby por KO. Chin exposto como fraqueza.' },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Lopes',
        recent_fights: [
          { date: 'Mai 2025', opponent: 'Dustin Jacoby', result: 'L', method: 'KO R1', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'NOCAUTEADO NO R1. Jacoby parou rapido. Chin exposto como fraqueza critica.' },
          { date: 'Jan 2025', opponent: 'Gadzhiyasulov', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria por decisao no debut UFC.' },
        ],
      },
      fighter2: {
        nome: 'Stirling',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Bellato', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Terceira vitoria UFC. Gestao de distancia impecavel.' },
          { date: 'Mai 2025', opponent: 'Erslan', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria por decisao. Controle tecnico.' },
          { date: 'Dez 2024', opponent: 'Tokkos', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Debut UFC. Display tecnico pra garantir vitoria nos pontos.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Kickboxing e Striking', valueA: 52, valueB: 90, labelA: 'Medio', labelB: 'Excelente', advantage: 'fighter2', advantage_note: 'Stirling e 2x King in the Ring e campeao mundial WKBF de kickboxing. Treina com Adesanya, Hooker e Volkanovski na City Kickboxing sob Eugene Bareman. Lopes tem base de BJJ e ambas derrotas por KO.' },
        { label: 'Gestao de Distancia', valueA: 42, valueB: 85, labelA: 'Medio', labelB: 'Excelente', advantage: 'fighter2', advantage_note: 'Quote de Stirling: "Meu counter striking, minha gestao de distancia e minha defesa de takedown." Com 1,93m e 198cm de reach, controla o range como quiser. Lopes com 10cm menos de reach precisa fechar distancia.' },
        { label: 'Jiu-Jitsu e Chao', valueA: 72, valueB: 48, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Unica vantagem concreta de Lopes. Base forte de BJJ. Se conseguir TD (40% conversao vs 78% TDD), pode ser perigoso. MAS chegar la e o desafio.' },
        { label: 'Defesa de Takedown', valueA: 55, valueB: 78, labelA: 'Bom', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: 'Stirling citou defesa de takedown como pilar do game plan. 78% TDD contra Lopes que converte 40%. Matematica nao favorece Lopes.' },
        { label: 'Durabilidade', valueA: 40, valueB: 72, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Lopes foi nocauteado por Jacoby no R1. Chin comprometido. Stirling nunca foi parado, invicto 8-0.' },
        { label: 'Ecossistema de Treino', valueA: 55, valueB: 92, labelA: 'Bom', labelB: 'Excelente', advantage: 'fighter2', advantage_note: 'City Kickboxing com Bareman, Adesanya, Hooker, Volkanovski. Stirling disse: "Nunca tentei ser o Israel. Quero fazer minha propria marca." A melhor academia do mundo.' },
      ],
      insight: 'Stirling e o favorito mais pesado das prelims por razoes solidas. Invicto 8-0, 2x King in the Ring, campeao mundial WKBF de kickboxing, treinado por Eugene Bareman na CKB ao lado de Adesanya, Hooker e Volkanovski. Mede 1,93m com 198cm de reach. Game plan declarado: "Meu counter striking, minha gestao de distancia e minha defesa de takedown." Exatamente o que vai fazer contra Lopes, que tem 10cm menos de reach e ambas derrotas por KO. Stirling tambem disse sobre Adesanya: "Nunca tentei ser o Israel. Quero fazer minha propria marca." Essa maturidade com 27 anos e impressionante. A unica rota de Lopes e o jiu-jitsu (tem base de BJJ), mas 40% de conversao de TDs contra 78% TDD e desfavoravel. Favoritos em -600+ historicamente vencem 88.9% das vezes, mas so 50% por finish: decisao e o resultado mais provavel.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Lopes', ko_tko: { count: 5, percent: 36 }, submission: { count: 5, percent: 36 }, decision: { count: 4, percent: 28 }, total_wins: 14 },
      fighter2: { nome: 'Stirling', ko_tko: { count: 4, percent: 50 }, submission: { count: 1, percent: 12 }, decision: { count: 3, percent: 38 }, total_wins: 8 },
      insight: 'Lopes e equilibrado entre KO (38%) e sub (38%), mas precisa do chao pra usar metade do arsenal. Stirling tem 50% de KO e 38% decisao, mostrando que quando nao para, controla por pontos. Historicamente, favoritos de -600+ no UFC finisham so 50% das vezes. Decisao e o resultado mais provavel aqui.',
    },
    previsao_final: {
      winner_name: 'Navajo Stirling',
      winner_side: 'fighter2',
      predicted_method: 'Decisao Unanime',
      confidence_score: 8,
      confidence_label: 'ALTA',
      explanation: 'Stirling e o favorito mais justificado das prelims. Invicto 8-0, 2x King in the Ring, campeao mundial WKBF de kickboxing, treinado por Eugene Bareman na City Kickboxing ao lado de Israel Adesanya, Dan Hooker e Alexander Volkanovski. Seu game plan declarado: "Meu counter striking, minha gestao de distancia e minha defesa de takedown." Com 1,93m e 198cm de reach (contra 1,85m e 188cm), tem tamanho de sobra pra manter a distancia. Lopes foi nocauteado por Jacoby no R1. Contra um kickboxer campeo mundial com vantagem de tamanho, esse padrao e preocupante demais. A unica rota de Lopes e o jiu-jitsu (tem base de BJJ), mas 40% de conversao de TDs contra 78% TDD de Stirling e 10cm menos de reach pra fechar distancia tornam essa rota improvavel. Stirling disse sobre Adesanya: "Nunca tentei ser o Israel. Quero fazer minha propria marca." Essa maturidade com 27 anos, somada aos recursos da CKB, e devastadora contra alguem do nivel de Lopes. Favoritos em -600+ ganham 88.9% mas so 50% por finish. Confianca ALTA porque TUDO aponta na mesma direcao: tamanho, tecnica, academia, durabilidade, e o padrao de derrotas de Lopes.',
      x_factor: {
        title: 'City Kickboxing: Adesanya no main event',
        description: 'Stirling treina na CKB com Adesanya, que luta no main event desta mesma noite. O gym inteiro esta em Seattle esta semana. A energia, o suporte, e a motivacao de performar diante dos companheiros de treino no maior palco possivel sao um boost intangivel enorme pra Stirling.',
      },
      upset_alert: {
        title: 'O jiu-jitsu de Lopes no chao e perigoso',
        description: 'Se Lopes conseguir uma queda (40% conversao) e passar a TDD de Stirling (78%), ele e perigoso no chao. Base forte de BJJ e tem 5 finalizacoes. O upset exige TD early e transicao rapida. E improvavel, mas nao impossivel. Lopes por KO a +480 e o longshot absoluto pra quem gosta de unicornios.',
      },
      probabilities: {
        fighter1: { nome: 'Lopes', percent: 18 },
        fighter2: { nome: 'Stirling', percent: 80 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Stirling (-600)', reasoning: 'Stirling vai vencer, mas -600 a -699 nao tem nenhum valor isolado. Implied probability de 85-87% ja precifica a realidade. So em parlay de 3+ legs.' },
        method: { pick: 'Stirling por Decisao (-140)', reasoning: 'Favoritos -600+ tem apenas 50% finish rate historicamente. Stirling venceu Bellato por decisao. Gestao de distancia e counter striking sugerem controle por pontos sem risco de finish.' },
        over_under: { pick: 'Over 2.5 Rounds', rounds: 2.5, reasoning: 'Stirling e counter striker que gerencia distancia. Nao vai forcar finish contra alguem perigoso no chao. 50% finish rate historico pra favoritos -600+ reforça o over.' },
        best_value: 'Stirling por Decisao a -140 e a aposta inteligente. O ML a -600 nao tem valor. A prop de decisao reflete melhor o estilo de counter striking e gestao de distancia. Over 2.5 rounds e o complemento perfeito. Lopes por KO a +480 e o wild longshot do card pra apostadores de unicornios.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'lopes-vs-stirling-pos-weighins');
  return <PrelimsAnalysisView analise={data} />;
}
