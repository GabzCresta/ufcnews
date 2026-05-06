import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'alencar-vs-polastri',
  evento_id: null, slug: 'alencar-vs-polastri',
  titulo: 'Alencar vs Polastri: Duas Brasileiras em Ascensão',
  subtitulo: 'Talita Alencar é 3x campeã IBJJF No-Gi faixa-preta. Julia Polastri vem de TKO sobre Kowalkiewicz com Performance of the Night. Estilo grappler contra striker.',
  lutador1_id: null, lutador2_id: null, artigo_conteudo: '',
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,63m', envergadura: '165cm', idade: 29, academia: 'Gracie Barra' }, fighter2: { altura: '1,60m', envergadura: '163cm', idade: 32, academia: 'Chute Boxe Diego Lima' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
  fight_prediction: { predictedWinner: 'fighter2', predictedMethod: 'Decisão Unânime ou TKO tardio', confidence: 'BAIXA', fighter1Scenarios: [], fighter2Scenarios: [], keyFactors: [], xFactor: { title: '', description: '' } },
  fighter1_info: { nome: 'Talita Alencar', apelido: 'Problem Child', record: '7-1-1', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  fighter2_info: { nome: 'Julia Polastri', apelido: 'Psycho', record: '14-5-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  categoria_peso: 'Peso-Palha Feminino (115 lbs)',
  num_rounds: 3, is_titulo: false, broadcast: null, status: 'published', analysis_type: 'full_single',
  created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Sterling vs Zalal',
      evento_data: '25 de Abril, 2026',
      evento_local: 'Meta APEX, Las Vegas, Nevada',
      categoria_peso: 'Peso-Palha Feminino (115 lbs)',
      num_rounds: 3, titulo_em_jogo: null,
      tagline: 'Duas Brasileiras em Ascensão',
      tagline_sub: 'BJJ de elite contra boxe Chute Boxe. Estilo decide.',
      fighter1: { nome_completo: 'Talita "Problem Child" Alencar', apelido: 'Problem Child', sobrenome: 'Alencar', record: '7-1-1', ranking: 'Sem ranking no top 15', info_extra: 'Brasil | 29 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/ALENCAR_TALITA_L_04-25.png?itok=V1I8UNiI' },
      fighter2: { nome_completo: 'Julia "Psycho" Polastri', apelido: 'Psycho', sobrenome: 'Polastri', record: '14-5-0', ranking: 'Sem ranking no top 15', info_extra: 'Brasil | 32 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-10/POLASTRI_JULIA_L_10-11.png?itok=xZfHQwCB' },
    },
    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Onde a Luta Acontece',
      insight: 'Duas brasileiras em ascensão com estilos complementares. Alencar é 3x campeã IBJJF No-Gi faixa-preta, domínio técnico de solo inquestionável, mata-leão sobre Carnelossi em novembro. Polastri vem de TKO sobre Karolina Kowalkiewicz em outubro com Performance of the Night, striking Chute Boxe refinado. O confronto decide na onde a luta se estabiliza: no chão, Alencar domina; em pé, Polastri. A ressalva de calibre não aplica tanto aqui, ambas construíram stats contra níveis comparáveis.',
      tension: {
        truth_a: 'Alencar tem primeira finalização UFC em novembro, 3x campeã mundial IBJJF No-Gi. Se consegue takedown e controle de solo, finaliza antes do fim.',
        truth_b: 'Polastri vem de Performance of the Night, boxe Chute Boxe, TKO sobre ex-desafiante de título. Se mantém distância, vence em pé.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Talita Alencar', color: 'red', momentum_score: 7, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: 'Primeira finalização UFC sobre Ariane Carnelossi em novembro de 2025, mata-leão no R3. Antes, decisão unânime sobre Vanessa Demopoulos em abril de 2025 e derrota por decisão contra Stephanie Luciano em agosto de 2024. 2-1 nas últimas três.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Ariane Carnelossi', result: 'W', method: 'Submissão (mata-leão) R3', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Primeira finalização UFC, mata-leão aos 4:36 do R3. Mostrou jogo de solo refinado.' },
          { date: 'Abr 2025', opponent: 'Vanessa Demopoulos', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Decisão clara em três rounds de controle.' },
          { date: 'Ago 2024', opponent: 'Stephanie Luciano', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Única derrota recente, perdeu nos cartões.' },
        ],
      },
      fighter2: {
        nome: 'Julia Polastri', color: 'blue', momentum_score: 7, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: 'TKO sobre Karolina Kowalkiewicz em outubro de 2025 com Performance of the Night, antes perdeu para Loopy Godinez em março. No UFC é 2-2 ao todo, com vitória sobre Cory McKenna no debut vitorioso e derrota de estreia contra Josefine Knutsson em junho de 2024.',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Karolina Kowalkiewicz', result: 'W', method: 'TKO R3', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'TKO sobre ex-desafiante de título. Performance of the Night.' },
          { date: 'Mar 2025', opponent: 'Loopy Godinez', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Derrota em decisão para lutadora top 15.' },
          { date: 'Out 2024', opponent: 'Cory McKenna', result: 'W', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Primeira vitória UFC em split decision.' },
          { date: 'Jun 2024', opponent: 'Josefine Knutsson', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Derrota no debut UFC.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Alencar', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '2V-0D-1E (últimas 3 UFC)', contra_top5: '0V-0D' },
      fighter2: { nome: 'Polastri', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '1V-1D (últimas 2 UFC)', contra_top5: '0V-1D (Godinez)' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Nenhum oponente em comum. Calibre similar, ambas em adversárias médias. Polastri enfrentou Godinez (top 15) recentemente, Alencar sem testes em top.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Submissões por 15 Min', valueA: 2.2, valueB: 1.1, maxVal: 3, format: 'decimal', note: 'Alencar com jogo de sub ativo.' },
        { label: 'Sig. Strikes por Minuto', valueA: 2.8, valueB: 3.6, maxVal: 6, format: 'decimal', note: 'Polastri com volume superior em pé.' },
        { label: 'Defesa de Takedown (%)', valueA: 60, valueB: 58, maxVal: 100, format: 'percent', note: 'Defesa parecida, ambas com base de grappling.' },
        { label: 'Vitórias por Finalização (%)', valueA: 71, valueB: 57, maxVal: 100, format: 'percent', note: 'Alencar finaliza mais, mas Polastri também termina lutas.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '29 anos', fighter2: '32 anos', note: 'Alencar 3 anos mais jovem.' },
        { label: 'Altura', fighter1: '1,63m', fighter2: '1,60m', note: 'Alencar 3 cm mais alta.' },
        { label: 'Envergadura', fighter1: '165cm', fighter2: '163cm', note: 'Alcance similar.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'Gracie Barra', fighter2: 'Chute Boxe Diego Lima', note: null },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Jiu-Jitsu de Solo', advantage: 'fighter1', gap: 3, note: 'Alencar é 3x campeã IBJJF No-Gi. Grappling elite.' },
        { label: 'Striking em Pé', advantage: 'fighter2', gap: 3, note: 'Polastri tem Chute Boxe, boxe mais refinado.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter1', gap: 2, note: 'Alencar com entradas de BJJ-wrestling variadas.' },
        { label: 'Poder de Finalização', advantage: 'fighter1', gap: 1, note: 'Ambas finalizam. Alencar mais sub, Polastri mais TKO.' },
        { label: 'Experiência UFC', advantage: 'fighter2', gap: 1, note: 'Polastri com 4 lutas UFC contra 3 de Alencar.' },
        { label: 'Momentum Atual', advantage: 'even', gap: 0, note: 'Ambas em alta recente.' },
      ],
      summary: 'Gap pequeno em todas as dimensões. Quem impor terreno vence. Polastri com leve vantagem em pé, Alencar no chão.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Alencar', ko_tko: { count: 1, percent: 14 }, submission: { count: 4, percent: 57 }, decision: { count: 2, percent: 29 }, total_wins: 7 },
      fighter2: { nome: 'Polastri', ko_tko: { count: 5, percent: 36 }, submission: { count: 3, percent: 21 }, decision: { count: 6, percent: 43 }, total_wins: 14 },
      insight: 'Alencar BJJ-first com 57 por cento por sub. Polastri distribui entre KO e decisão. Confronto de estilos opostos.',
    },
    previsao_final: {
      winner_name: 'Julia Polastri', winner_side: 'fighter2',
      predicted_method: 'Decisão Unânime ou TKO tardio', confidence_score: 5, confidence_label: 'BAIXA',
      explanation: 'Análise aponta Polastri com convicção baixa. Luta próxima entre duas brasileiras. Polastri vem de TKO sobre Kowalkiewicz com Performance of the Night, striking amadureceu. Alencar tem primeira finalização UFC mas depende de levar ao chão. O que inclina marginal para Polastri é o perfil mais completo em pé e no chão, contra uma Alencar que depende essencialmente do solo. Se Alencar não converter takedown cedo, luta vira ritmo de Polastri.',
      x_factor: { title: 'A primeira tentativa de takedown', description: 'Alencar precisa converter TD no R1. Se Polastri defender as duas primeiras tentativas, luta vira batalha em pé.' },
      upset_alert: { title: 'Alencar encontra uma submissão', description: 'Alencar 3x campeã IBJJF No-Gi. Se Polastri der as costas em scramble, finalização rápida no R1 ou R2.' },
      probabilities: { fighter1: { nome: 'Alencar', percent: 45 }, fighter2: { nome: 'Polastri', percent: 52 }, draw: 3 },
      conviction: {
        thesis: 'A tese é: Julia Polastri vence porque, primeiro, o momentum atual é superior com TKO sobre Kowalkiewicz e Performance of the Night. Segundo, o striking Chute Boxe é mais refinado que o de Alencar, e se a luta fica em pé tem vantagem de volume e poder. Terceiro, a experiência UFC maior (4 lutas vs 3) ajuda em cenários de adversidade. Desmorona se Alencar encaixar takedown e levar para posição dominante, onde o BJJ IBJJF dela vira fator decisivo.',
        conviction_score: 5,
        conviction_rationale: 'Convicção 5 porque o gap técnico é pequeno e o cenário depende inteiramente de onde a luta se estabiliza.',
        conviction_breakers: [
          'Alencar conectar takedown limpo no R1',
          'Polastri dar as costas em uma transição de solo',
          'Alencar controlar clinch por rounds inteiros',
        ],
        underdog_path: {
          viable: true, probability_estimate: 45,
          key_scenario: 'Alencar força clinch na grade, busca takedown, estabelece controle posicional, busca finalização em mata-leão ou armbar antes do fim do R2.',
          required_conditions: ['Takedown em pelo menos 1 dos primeiros 2 rounds', 'Não aceitar trocação em distância', 'Forçar scramble onde BJJ decide'],
          historical_precedent: 'Alencar vs Carnelossi em novembro de 2025: mata-leão no R3. Se o padrão de controle posicional aparecer de novo, a tese contra ela cai.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Julia Polastri', odds: '-200', reasoning: 'Leitura aponta Polastri pelo momentum e estilo. Preço reflete favoritismo pelo POTN recente, valor no ML direto é limitado.' },
          { type: 'Rounds', pick: 'Passa de 2,5 rounds', odds: '-150', reasoning: 'Duas técnicas sem ritmo de finalização cedo. Tende a estender.' },
        ],
        best_bet: { pick: 'Passa de 2,5 rounds em -150', reasoning: 'Convicção 5 não justifica ML em -200. Prop de duração é mais defensável: ambas técnicas sem KO recente.' },
      },
      key_stats: [
        { value: 'POTN', label: 'Performance of the Night de Polastri', sublabel: 'TKO sobre Kowalkiewicz em outubro de 2025.' },
        { value: '3x', label: 'Títulos IBJJF No-Gi de Alencar', sublabel: 'BJJ de elite em faixa colorida e preta.' },
        { value: '1-1', label: 'Últimas 2 UFC de Polastri', sublabel: 'Mista, mas com destaque na vitória.' },
      ],
      odds: { fighter1_odds: '+170', fighter2_odds: '-200', fighter1_name: 'Alencar', fighter2_name: 'Polastri', source: 'bet365 e DraftKings em abril de 2026. Polastri favorita pelo POTN recente sobre Kowalkiewicz.' },
      armadilha: {
        titulo: 'Armadilha: Alencar por sub R1',
        descricao: 'O mercado paga Alencar por sub no R1 em torno de +800 pela credencial IBJJF. Mas a finalização dela sobre Carnelossi foi no R3, padrão de controle tardio, não de encaixe rápido. Se vai em Alencar, vai pela sub geral (qualquer round), não pelo R1 específico.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'alencar-vs-polastri');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
