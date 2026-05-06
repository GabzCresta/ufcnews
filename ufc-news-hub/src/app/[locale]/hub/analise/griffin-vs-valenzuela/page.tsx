import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'griffin-vs-valenzuela',
  evento_id: null, slug: 'griffin-vs-valenzuela',
  titulo: 'Griffin vs Valenzuela: O Veterano Contra o Estreante Chileno',
  subtitulo: 'Max Griffin tem 20 lutas UFC e vem de duas derrotas. Victor Valenzuela faz a estreia UFC com 12-4 e TKO recente sobre Kinoshita no Japão. Experiência contra juventude.',
  lutador1_id: null, lutador2_id: null, artigo_conteudo: '',
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,80m', envergadura: '185cm', idade: 40, academia: 'Team Alpha Male' }, fighter2: { altura: '1,78m', envergadura: '180cm', idade: 28, academia: 'Circuito Chileno' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
  fight_prediction: { predictedWinner: 'fighter1', predictedMethod: 'Decisão Dividida', confidence: 'BAIXA', fighter1Scenarios: [], fighter2Scenarios: [], keyFactors: [], xFactor: { title: '', description: '' } },
  fighter1_info: { nome: 'Max Griffin', apelido: 'Pain', record: '20-12-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  fighter2_info: { nome: 'Victor Valenzuela', apelido: 'Psicosis', record: '12-4-0', ranking: 'Estreante na UFC', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  categoria_peso: 'Peso-Meio-Médio (170 lbs)',
  num_rounds: 3, is_titulo: false, broadcast: null, status: 'published', analysis_type: 'full_single',
  created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Sterling vs Zalal',
      evento_data: '25 de Abril, 2026',
      evento_local: 'Meta APEX, Las Vegas, Nevada',
      categoria_peso: 'Peso-Meio-Médio (170 lbs)',
      num_rounds: 3, titulo_em_jogo: null,
      tagline: 'Veterano Contra Estreante',
      tagline_sub: 'Griffin 20 lutas UFC em queda. Valenzuela estreia com 12 anos menos e poder de nocaute.',
      fighter1: { nome_completo: 'Max "Pain" Griffin', apelido: 'Pain', sobrenome: 'Griffin', record: '20-12-0', ranking: 'Sem ranking no top 15', info_extra: 'Sacramento, EUA | 40 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/GRIFFIN_MAX_L_04-25.png?itok=MDxtbnER' },
      fighter2: { nome_completo: 'Victor "Psicosis" Valenzuela', apelido: 'Psicosis', sobrenome: 'Valenzuela', record: '12-4-0', ranking: 'Estreante na UFC', info_extra: 'Chile | 28 anos', imagem_fullbody_url: null },
    },
    qualitative_insight: {
      tag: 'O PARADOXO',
      headline: 'Experiência Contra Juventude',
      insight: 'Griffin tem 20 lutas UFC em oito anos, currículo contra top 15 (Neil Magny, Chris Curtis, Michael Chiesa). Valenzuela estreia no UFC aos 28 com 12-4 no regional chileno e um TKO recente no Japão. Cabe a ressalva: Griffin construiu stats contra elite real do peso-meio-médio por quase uma década, enquanto Valenzuela tem 12-4 majoritariamente contra oposição latino-americana com teste isolado no Japão. Os números de Griffin parecem piores porque vieram de contexto mais alto, mas aos 40 anos o desgaste físico é real. É luta de toss-up entre experiência em declínio e juventude sem teste UFC.',
      tension: {
        truth_a: 'Griffin tem 20 lutas UFC contra elite, conhece ritmo de decisão em três rounds. Se estender, ganha no cartão pela experiência.',
        truth_b: 'Valenzuela tem 12 anos a menos, poder de nocaute real (8 KOs em 12 vitórias, 67 por cento), e Griffin perdeu por sub para Chiesa há um ano. Um cross limpo acaba a luta.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Max Griffin', color: 'red', momentum_score: 4, momentum_label: 'Em Queda', momentum_trend: 'descending',
        momentum_note: 'Duas derrotas seguidas: split decision contra Chris Curtis em julho de 2025 e submissão por mata-leão contra Michael Chiesa no UFC 310 em dezembro de 2024 (primeira finalização por submissão da carreira). A última vitória foi em fevereiro de 2024 sobre Jeremiah Wells por decisão dividida. Aos 40 anos o desgaste acumulado é visível.',
        recent_fights: [
          { date: 'Jul 2025', opponent: 'Chris Curtis', result: 'L', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Split decision contra Curtis no UFC on ESPN 70. Luta competitiva.' },
          { date: 'Dez 2024', opponent: 'Michael Chiesa', result: 'L', method: 'Submissão (mata-leão) R3', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Finalizado por Chiesa no UFC 310. Primeira sub loss da carreira de Griffin.' },
          { date: 'Fev 2024', opponent: 'Jeremiah Wells', result: 'W', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Última vitória do veterano. Split decision apertada.' },
        ],
      },
      fighter2: {
        nome: 'Victor Valenzuela', color: 'blue', momentum_score: 6, momentum_label: 'Misto', momentum_trend: 'stable',
        momentum_note: 'TKO recente sobre Yusaku Kinoshita no Japão em março de 2026, preparação direta para a estreia UFC. Antes, perdeu para Michael Oliveira por TKO R2 no Dana White\'s Contender Series em outubro de 2025, mas foi contratado pelo desempenho apesar da derrota.',
        recent_fights: [
          { date: 'Mar 2026', opponent: 'Yusaku Kinoshita', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'TKO no R2 em luta no Japão. Preparação para o UFC.' },
          { date: 'Out 2025', opponent: 'Michael Oliveira', result: 'L', method: 'TKO R2', opponent_rank: 'Prospect DWCS', quality_score: 2, quality_label: 'Médio', note: 'Derrota no Contender Series. Foi contratado pelo desempenho apesar do resultado.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Griffin', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '1V-2D (últimas 3 UFC)', contra_top5: '0V-0D' },
      fighter2: { nome: 'Valenzuela', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: 'Estreante', contra_top5: 'Sem dados UFC' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Nenhum oponente em comum. Griffin enfrentou Magny, Curtis, Chiesa, elite do peso-meio-médio. Valenzuela tem 12 vitórias majoritariamente no regional chileno. Calibre muito diferente. Stats de Griffin parecem "piores" mas vieram de contexto totalmente superior. Na prática, experiência UFC é o diferencial real aqui.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.1, valueB: 3.8, maxVal: 6, format: 'decimal', note: 'Griffin tem volume superior em veterano técnico.' },
        { label: 'Experiência UFC (lutas)', valueA: 20, valueB: 0, maxVal: 25, format: 'integer', note: 'Griffin 20 lutas UFC, Valenzuela zero.' },
        { label: 'Vitórias por KO/TKO (%)', valueA: 30, valueB: 67, maxVal: 100, format: 'percent', note: 'Valenzuela é finalizador por striking no regional.' },
        { label: 'Sig. Strikes Absorvidos/Min', valueA: 4.5, valueB: 2.8, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Griffin absorve mais porque enfrentou Magny, Curtis, Chiesa. Contexto explica.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '40 anos', fighter2: '28 anos', note: 'Valenzuela 12 anos mais jovem.' },
        { label: 'Altura', fighter1: '1,80m', fighter2: '1,78m', note: 'Griffin 2 cm mais alto.' },
        { label: 'Envergadura', fighter1: '185cm', fighter2: '180cm', note: 'Griffin 5 cm de alcance a mais.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'Team Alpha Male', fighter2: 'Circuito Chileno', note: null },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Distância', advantage: 'fighter1', gap: 2, note: 'Griffin tem 5 cm de alcance e jab refinado em 20 lutas UFC.' },
        { label: 'Experiência UFC', advantage: 'fighter1', gap: 5, note: 'Gap absoluto, 20 lutas contra zero.' },
        { label: 'Poder de Nocaute', advantage: 'fighter2', gap: 2, note: 'Valenzuela com 67 por cento KO no regional.' },
        { label: 'Cardio em 3 Rounds', advantage: 'fighter2', gap: 2, note: 'Valenzuela aos 28, Griffin aos 40 com desgaste.' },
        { label: 'IQ de Luta', advantage: 'fighter1', gap: 3, note: 'Griffin venceu adversários mais experientes por leitura tática.' },
        { label: 'Defesa de Submissão', advantage: 'fighter2', gap: 1, note: 'Griffin acabou de perder por sub, vulnerabilidade exposta.' },
      ],
      summary: 'Griffin tem vantagem em experiência e IQ. Valenzuela tem juventude e poder. Toss-up decidido por onde a luta se estabiliza.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Griffin', ko_tko: { count: 6, percent: 30 }, submission: { count: 2, percent: 10 }, decision: { count: 12, percent: 60 }, total_wins: 20 },
      fighter2: { nome: 'Valenzuela', ko_tko: { count: 8, percent: 67 }, submission: { count: 2, percent: 17 }, decision: { count: 2, percent: 17 }, total_wins: 12 },
      insight: 'Perfis opostos. Griffin decisão, Valenzuela finalização em striking. Se estende, Griffin; se encaixa cedo, Valenzuela.',
    },
    previsao_final: {
      winner_name: 'Max Griffin', winner_side: 'fighter1',
      predicted_method: 'Decisão Dividida', confidence_score: 5, confidence_label: 'BAIXA',
      explanation: 'Análise aponta Griffin com convicção baixa, reconhecendo toss-up. Escolha vem de experiência UFC, capacidade de vencer por decisão (60 por cento das vitórias), e IQ de luta refinado contra veteranos como Curtis. Valenzuela tem 12 anos a menos e poder no regional, mas estreia UFC contra veterano historicamente é teste difícil. Se Valenzuela não finalizar cedo, Griffin estende. Convicção 5 porque o gap técnico não é claro. Cabe ressalva que os stats defensivos de Griffin vieram contra elite absoluta do peso-meio-médio, enquanto Valenzuela construiu o record contra oposição menor, então comparação direta não contempla contexto.',
      x_factor: { title: 'A estreia UFC', description: 'Estreia UFC contra veterano de 20 lutas historicamente favorece o experiente em decisões dividas. Griffin sabe estender. Se Valenzuela não finalizar, perde nos cartões.' },
      upset_alert: { title: 'Valenzuela nocauteia cedo', description: 'Valenzuela com 67 por cento KO no regional. Griffin foi finalizado há um ano. Um cross limpo acaba no R1 ou R2.' },
      probabilities: { fighter1: { nome: 'Griffin', percent: 52 }, fighter2: { nome: 'Valenzuela', percent: 45 }, draw: 3 },
      conviction: {
        thesis: 'A tese é: Max Griffin vence porque, primeiro, experiência UFC de 20 lutas é o diferencial contra estreante sem teste no octógono. Segundo, 60 por cento das vitórias de Griffin são por decisão, padrão que funciona se estender para três rounds. Terceiro, o ambiente Meta APEX tende a favorecer o lutador mais conhecido nos cartões, vantagem Griffin. Desmorona se Valenzuela conectar um cross limpo cedo ou se o desgaste de Griffin aos 40 cair visível no R2.',
        conviction_score: 5,
        conviction_rationale: 'Convicção 5 porque o gap técnico é pequeno, e Griffin vem de duas derrotas sinalizando queda real. Ainda favorito marginal pela experiência, mas sem certeza de estilo.',
        conviction_breakers: [
          'Valenzuela conectar cross limpo no R1 ou R2',
          'Griffin mostrar cardio caído aos 40 anos',
          'Valenzuela defender entrada de Griffin em pé e ganhar distância',
        ],
        underdog_path: {
          viable: true, probability_estimate: 45,
          key_scenario: 'Valenzuela usa juventude para trocar em pé, conecta golpe limpo em entrada precipitada de Griffin, finaliza por TKO como fez no regional.',
          required_conditions: ['Trocar em pé desde o R1', 'Não ser arrastado para clinch', 'Conectar poder em contra-ataque'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Max Griffin', odds: '-110', reasoning: 'Mercado precifica pick-em. A leitura aponta Griffin pela experiência UFC (20 lutas contra estreia de Valenzuela). Em mercado equilibrado, ML em preço neutro é apostar na tese direta.' },
          { type: 'Método', pick: 'Griffin por decisão', odds: '+200', reasoning: '60 por cento das vitórias dele por decisão. Se vence, é cartão. Prop oferece pagamento acima do ML com mesma leitura.' },
        ],
        best_bet: { pick: 'Griffin por decisão em +200', reasoning: 'Casa com leitura de estilo e paga 3x. Em mercado pick-em, o valor está no prop específico de método, não no ML equilibrado.' },
      },
      key_stats: [
        { value: '20', label: 'Lutas UFC de Griffin', sublabel: 'Contra zero de Valenzuela.' },
        { value: '67%', label: 'Vitórias de Valenzuela por KO no regional', sublabel: 'Janela de finalização cedo.' },
        { value: '12', label: 'Anos de diferença entre os dois', sublabel: 'Juventude como único edge físico de Valenzuela.' },
      ],
      odds: { fighter1_odds: '-110', fighter2_odds: '-110', fighter1_name: 'Griffin', fighter2_name: 'Valenzuela', source: 'bet365 e DraftKings em abril de 2026. Mercado precifica pick-em entre veterano UFC e estreante com momentum.' },
      armadilha: {
        titulo: 'Armadilha: Valenzuela por KO rápido',
        descricao: 'O mercado paga Valenzuela por KO no R1 em torno de +400 pela sequência de finalizações no Japão. Mas Griffin nunca foi nocauteado em 20 lutas UFC, e estreantes vindos do regional historicamente não conseguem replicar poder contra veteranos UFC. Se vai em Valenzuela, vai no ML em -110, não no prop de KO rápido.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'griffin-vs-valenzuela');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
