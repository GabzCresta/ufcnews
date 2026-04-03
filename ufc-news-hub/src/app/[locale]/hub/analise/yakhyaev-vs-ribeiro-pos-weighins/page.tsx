import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';

const analise: PrelimsAnalise = {
  id: 'yakhyaev-vs-ribeiro-pos-weighins',
  evento_id: null,
  slug: 'yakhyaev-vs-ribeiro-pos-weighins',
  titulo: 'Yakhyaev vs Ribeiro Pos Weigh-Ins: Susto na Balanca do Invicto',
  subtitulo: null,
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  evento_nome: 'UFC Fight Night: Moicano vs Duncan | Pos Weigh-Ins',
  evento_data: '4 de Abril, 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Peso Meio-Pesado (205 lbs)',
  status: 'published',
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Submissao R1',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Abdul-Rakhman Yakhyaev', record: '8-0-0', ultimasLutas: [{ result: 'W', opponent: 'Rafael Cerqueira', method: 'Submissao R1 (0:33)', event: 'UFC Fight Night' }, { result: 'W', opponent: 'Alik Lorenz', method: 'KO/TKO R1 (0:30)', event: 'DWCS' }] },
  fighter2_info: { nome: 'Brendson Ribeiro', record: '17-9-0', ultimasLutas: [{ result: 'L', opponent: 'Oumar Sy', method: 'KO/TKO R1', event: 'UFC Fight Night' }, { result: 'L', opponent: 'Azamat Murzakanov', method: 'KO/TKO R1', event: 'UFC 316' }, { result: 'W', opponent: 'Diyar Nurgozhay', method: 'Submissao R2 (Kimura)', event: 'UFC Fight Night' }] },
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,88m', envergadura: '198cm', idade: 25, academia: 'N/A' }, fighter2: { altura: '1,91m', envergadura: '206cm', idade: 29, academia: 'Belem do Para' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  analysis_type: 'prelims',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  prelims_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Moicano vs Duncan | Pos Weigh-Ins',
      evento_data: '4 de Abril, 2026',
      categoria_peso: 'Peso Meio-Pesado (205 lbs)',
      num_rounds: 3,
      is_titulo: false,
      fighter1: { nome: 'Abdul-Rakhman Yakhyaev', record: '8-0-0', ranking: 'N/R', imagem_url: '' },
      fighter2: { nome: 'Brendson Ribeiro', record: '17-9-0', ranking: 'N/R', imagem_url: '' },
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 20.95, valueB: 3.06, maxVal: 22, format: 'decimal', note: 'Yakhyaev tem numeros inflados por lutas curtissimas (33 segundos no UFC). Ribeiro tem volume mais realista mas baixo.' },
        { label: 'Precisao de Strikes (%)', valueA: 78, valueB: 42, maxVal: 100, format: 'percent', note: 'Yakhyaev conectou 78% na unica luta UFC. Amostra minima mas impressionante.' },
        { label: 'Strikes Absorvidos/Min', valueA: 0.95, valueB: 4.00, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Yakhyaev quase nao leva porque finaliza antes. Ribeiro absorve muito.' },
        { label: 'Defesa de Strikes (%)', valueA: 75, valueB: 53, maxVal: 100, format: 'percent', note: 'Yakhyaev defende melhor, mas contexto de lutas curtissimas distorce.' },
        { label: 'Takedowns por 15 Min', valueA: 14.29, valueB: 0.90, maxVal: 15, format: 'decimal', note: 'Yakhyaev absurdamente agressivo nos TDs. 14.29 por 15 min. Ribeiro quase nao busca.' },
        { label: 'Defesa de Takedown (%)', valueA: 100, valueB: 18, maxVal: 100, format: 'percent', note: 'O stat que define a luta. Yakhyaev defende 100%, Ribeiro APENAS 18%. Disparidade colossal.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '25 anos', fighter2: '29 anos', note: 'Yakhyaev 4 anos mais novo' },
        { label: 'Altura', fighter1: '1,88m', fighter2: '1,91m', note: 'Ribeiro 1 polegada mais alto' },
        { label: 'Envergadura', fighter1: '198cm (78")', fighter2: '206cm (81")', note: 'Ribeiro com 3 polegadas de alcance a mais' },
        { label: 'Peso na Balanca', fighter1: '206 lbs (precisou de 60 min extras!)', fighter2: '205.5 lbs', note: 'Yakhyaev bateu 207 inicialmente. Precisou de 60 minutos extras pra bater 206. Susto na balanca.' },
        { label: 'Base', fighter1: 'Sambo de Combate', fighter2: 'Striker / Finalizador', note: 'Wrestler vs Striker' },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Yakhyaev',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Rafael Cerqueira', result: 'W', method: 'Submissao R1 (RNC)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Debut UFC. Sub em 33 SEGUNDOS. Takedown, transicao, RNC. Nao deu tempo de nada.' },
          { date: 'Ago 2025', opponent: 'Alik Lorenz', result: 'W', method: 'KO/TKO R1 (0:30)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'DWCS. Nocaute em 30 segundos. Lorenz nem entendeu o que aconteceu.' },
        ],
      },
      fighter2: {
        nome: 'Ribeiro',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Oumar Sy', result: 'L', method: 'KO/TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: '2o KO sofrido seguido. O queixo de Ribeiro esta em questao.' },
          { date: 'Jun 2025', opponent: 'Azamat Murzakanov', result: 'L', method: 'KO/TKO R1', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Nocauteado em 3:25. Murzakanov e perigoso, mas Ribeiro foi pego cedo.' },
          { date: 'Mar 2025', opponent: 'Diyar Nurgozhay', result: 'W', method: 'Submissao R2 (Kimura)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Mostrou o jiu-jitsu. Kimura linda no R2.' },
          { date: 'Nov 2024', opponent: 'Caio Machado', result: 'W', method: 'Decisao Dividida', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Vitoria apertada por split decision.' },
          { date: 'Jun 2024', opponent: 'Magomed Gadzhiyasulov', result: 'L', method: 'Decisao Majoritaria', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Derrota por majority decision. Luta apertada.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Wrestling Ofensivo', valueA: 90, valueB: 35, labelA: 'Excelente', labelB: 'Ruim', advantage: 'fighter1', advantage_note: 'Mestre de Esportes em Sambo de Combate. 14.29 TDs por 15 min. Contra Ribeiro que defende 18% dos TDs, e mismatch puro. O susto na balanca (207 inicial) pode indicar um corte dificil, mas Yakhyaev bateu 206 nos 60 min extras.' },
        { label: 'Jiu-Jitsu e Submissoes', valueA: 80, valueB: 65, labelA: 'Muito Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Yakhyaev submeteu Cerqueira com RNC em 33 segundos. Ribeiro tem 7 subs na carreira (4 guilhotinas), mas no chao contra um sambista, esta em desvantagem.' },
        { label: 'Striking em Pe', valueA: 60, valueB: 55, labelA: 'Bom', labelB: 'Bom', advantage: 'even', advantage_note: 'Ambos tem poder de finalizacao. Yakhyaev mostrou socos pesados no DWCS. Ribeiro tem 9 KOs. Nenhum e striker tecnico de elite.' },
        { label: 'Defesa e Durabilidade', valueA: 65, valueB: 40, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Ribeiro foi nocauteado 4 vezes na carreira, 2 seguidas recentemente. O queixo e preocupacao seria. Yakhyaev nunca foi derrubado ou finalizado.' },
        { label: 'Cardio e Resistencia', valueA: 50, valueB: 55, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'NINGUEM sabe o cardio de Yakhyaev. Nunca passou do R1. O corte de peso dificil (60 min extras) pode afetar a resistencia. Ribeiro ja foi a decisao varias vezes.' },
        { label: 'Experiencia UFC', valueA: 30, valueB: 55, labelA: 'Ruim', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Ribeiro tem 7 lutas no UFC. Yakhyaev tem 1 (de 33 segundos). A experiencia no octogono e incomparavel.' },
      ],
      insight: 'Mismatch no wrestling e o resumo da luta. Yakhyaev e sambista de elite que derruba todo mundo. Ribeiro defende 18% dos takedowns. Porem, o susto na balanca de Yakhyaev (207 lbs inicialmente, precisou de 60 minutos extras pra bater 206) e uma red flag nova. Corte de peso dificil pode afetar performance, especialmente se a luta durar mais que o habitual. A unica chance de Ribeiro e pegar Yakhyaev em pe nos primeiros segundos ou encaixar uma guilhotina na entrada de TD.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Yakhyaev', ko_tko: { count: 4, percent: 50 }, submission: { count: 3, percent: 38 }, decision: { count: 1, percent: 13 }, total_wins: 8 },
      fighter2: { nome: 'Ribeiro', ko_tko: { count: 9, percent: 53 }, submission: { count: 7, percent: 41 }, decision: { count: 1, percent: 6 }, total_wins: 17 },
      insight: 'Ambos sao finalizadores natos. Yakhyaev: 88% de finalizacao (50% KO + 38% sub). Ribeiro: 94% de finalizacao (53% KO + 41% sub). Ambos tem apenas 1 decisao na carreira. Essa luta provavelmente NAO vai pros cartoes. Alguem vai ser finalizado. Mas o corte de peso problemático de Yakhyaev adiciona uma variavel nova.',
    },
    previsao_final: {
      winner_name: 'Abdul-Rakhman Yakhyaev',
      winner_side: 'fighter1',
      predicted_method: 'Submissao R1',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation: 'Yakhyaev tem 14.29 TDs por 15 min contra um oponente que defende apenas 18%. O mismatch no grappling e enorme. Porem, o susto na balanca e preocupante: Yakhyaev bateu 207 lbs inicialmente e precisou de 60 minutos extras pra chegar a 206. Cortes dificeis podem drenar energia e afetar o chin. Mesmo assim, Yakhyaev so precisa de 30 segundos pra derrubar e finalizar. Se chegar rapido no clinch (e vai chegar), o takedown e praticamente garantido contra a defesa de 18% de Ribeiro. A confianca cai ligeiramente por causa do peso, mas o talento e demais pro nivel de oposicao.',
      x_factor: {
        title: 'O Corte de Peso Dificil',
        description: 'Yakhyaev bateu 207 lbs na primeira tentativa. Precisou de 60 minutos extras pra perder 1 lb e bater 206. Cortes dificeis drenam energia, afetam o chin e podem comprometer a explosividade. Se a luta durar mais que 2 minutos, o efeito pode aparecer.',
      },
      upset_alert: {
        title: 'Guilhotina de Ribeiro na Entrada',
        description: 'Ribeiro tem 4 guilhotinas na carreira. Se Yakhyaev, potencialmente drenado pelo corte de peso, entrar agressivo pro takedown e abaixar a cabeca, pode ser pego. E o cenario de upset mais realista.',
      },
      probabilities: {
        fighter1: { nome: 'Yakhyaev', percent: 70 },
        fighter2: { nome: 'Ribeiro', percent: 28 },
        draw: 2,
      },
      value_picks: undefined,
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise as any, locale, 'yakhyaev-vs-ribeiro-pos-weighins');
  return <PrelimsAnalysisView analise={data as any} lang={locale as Lang} />;
}
