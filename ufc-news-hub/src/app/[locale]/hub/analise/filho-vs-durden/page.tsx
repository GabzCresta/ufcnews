import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'filho-vs-durden',
  evento_id: null, slug: 'filho-vs-durden',
  titulo: 'Filho vs Durden: O Finalizador Brasileiro Contra o Veterano em Queda',
  subtitulo: 'Jafel Filho em três vitórias UFC por submissão no R1. Cody Durden em 1-4 nas últimas cinco, sub defense historicamente frágil. Padrão direto de matchup.',
  lutador1_id: null, lutador2_id: null, artigo_conteudo: '',
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,65m', envergadura: '170cm', idade: 29, academia: 'Nova União' }, fighter2: { altura: '1,68m', envergadura: '170cm', idade: 31, academia: 'Team ROC' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
  fight_prediction: { predictedWinner: 'fighter1', predictedMethod: 'Submissão R1', confidence: 'MÉDIA-ALTA', fighter1Scenarios: [], fighter2Scenarios: [], keyFactors: [], xFactor: { title: '', description: '' } },
  fighter1_info: { nome: 'Jafel Filho', record: '17-4-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  fighter2_info: { nome: 'Cody Durden', record: '17-10-1', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  categoria_peso: 'Peso-Mosca (125 lbs)',
  num_rounds: 3, is_titulo: false, broadcast: null, status: 'published', analysis_type: 'full_single',
  created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Sterling vs Zalal',
      evento_data: '25 de Abril, 2026',
      evento_local: 'Meta APEX, Las Vegas, Nevada',
      categoria_peso: 'Peso-Mosca (125 lbs)',
      num_rounds: 3, titulo_em_jogo: null,
      tagline: 'Finalizador Contra Veterano em Queda',
      tagline_sub: 'Filho tem padrão de sub no R1. Durden em má fase com 1-4 nas últimas cinco.',
      fighter1: { nome_completo: 'Jafel Filho', apelido: '', sobrenome: 'Filho', record: '17-4-0', ranking: 'Sem ranking no top 15', info_extra: 'Brasil | 29 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/FILHO_JAFEL_L_04-25.png?itok=YMXUrH5b' },
      fighter2: { nome_completo: 'Cody Durden', apelido: '', sobrenome: 'Durden', record: '17-10-1', ranking: 'Sem ranking no top 15', info_extra: 'Estados Unidos | 31 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-03/DURDEN_CODY_L_03-07.png?itok=QXSnwQ2j' },
    },
    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Padrão Repetido Contra Padrão Quebrado',
      insight: 'Jafel Filho tem padrão UFC específico: três vitórias, três submissões no R1. Kimura contra Clayton Carpenter em outubro de 2025 foi a mais recente. Cody Durden está em má fase recente, todas por decisão, e historicamente tem defesa de submissão fraca. O matchup é direto: se Filho fecha clinch cedo, finaliza antes do fim do R1. Durden só ganha se conseguir anular o wrestling de Filho por 15 minutos, padrão que funcionou quando ele venceu adversários de striking puro no passado, mas não contra grappler que ataca como Filho.',
      tension: {
        truth_a: 'Filho tem padrão 100 por cento finalizador no UFC. Três vitórias, três submissões em R1 diferentes (kimura, armbar, mata-leão). Previsibilidade que funciona porque a execução é técnica.',
        truth_b: 'Durden tem má fase com 1-4 nas últimas cinco em must-win. Pressão máxima pode fazer ele abrir o jogo e tentar finalizar cedo, o que é exatamente onde Filho vive.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Jafel Filho', color: 'red', momentum_score: 6, momentum_label: 'Em Leve Alta', momentum_trend: 'ascending',
        momentum_note: 'Três vitórias UFC por submissão no R1 (Barez, Osbourne, Carpenter), intercaladas com duas derrotas (Mokaev por neck crank R3 em 2023 e Allan Nascimento por decisão em maio de 2025). O padrão quando vence é claro: finalização no primeiro round. Quando não finaliza cedo, a luta pode virar.',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Clayton Carpenter', result: 'W', method: 'Submissão (kimura) R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Kimura no R1 no UFC Rio. Padrão repetido.' },
          { date: 'Mai 2025', opponent: 'Allan Nascimento', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Perdeu nos cartões em luta que não finalizou. Mostra vulnerabilidade quando não encaixa no R1.' },
          { date: 'Mar 2024', opponent: 'Ode\' Osbourne', result: 'W', method: 'Submissão (mata-leão) R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Mata-leão no R1. Segunda submissão UFC no padrão.' },
          { date: 'Jul 2023', opponent: 'Daniel Barez', result: 'W', method: 'Submissão (arm-triangle) R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Arm-triangle no R1. Primeira vitória UFC.' },
          { date: 'Mar 2023', opponent: 'Muhammad Mokaev', result: 'L', method: 'Submissão (neck crank) R3', opponent_rank: 'N/R', quality_score: 4, quality_label: 'Muito Bom', note: 'Finalizado por neck crank no R3 no UFC 286 contra prospect de elite.' },
        ],
      },
      fighter2: {
        nome: 'Cody Durden', color: 'blue', momentum_score: 3, momentum_label: 'Em Queda', momentum_trend: 'descending',
        momentum_note: '1-4 nas últimas cinco lutas: derrotas para Tumendemberel, Ochoa, Van e Silva, com uma única vitória sobre Matt Schnell por anaconda choke no R2 em setembro de 2024. Record UFC atual é 6-8-1. Historicamente lutador de decisão e wrestling, mas a fase atual mostra que o ritmo em pé está sendo quebrado.',
        recent_fights: [
          { date: 'Mar 2026', opponent: 'Nyamjargal Tumendemberel', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Perdeu nos cartões no UFC 326.' },
          { date: 'Jun 2025', opponent: 'Jose Ochoa', result: 'L', method: 'KO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Nocauteado no R2. Queixo testado.' },
          { date: 'Dez 2024', opponent: 'Joshua Van', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Perdeu para prospect top do peso-mosca no UFC 310.' },
          { date: 'Set 2024', opponent: 'Matt Schnell', result: 'W', method: 'Submissão (anaconda) R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Única vitória recente, anaconda no R2 no UFC Fight Night 242.' },
          { date: 'Jul 2024', opponent: 'Bruno Gustavo da Silva', result: 'L', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'TKO sofrido no R2.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Filho', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '3V-1D UFC', contra_top5: '0V-0D' },
      fighter2: { nome: 'Durden', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '1V-4D (últimas 5 UFC)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Nenhum oponente em comum. Calibre similar, mas trajetórias opostas: Filho 3-0 recente com finalizações, Durden 0-4 recente por decisão. Contexto de forma atual pesa mais que calibre aqui.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Submissões por 15 Min', valueA: 2.4, valueB: 0.4, maxVal: 3, format: 'decimal', note: 'Filho é máquina de finalização. Durden raramente tenta.' },
        { label: 'Takedowns por 15 Min', valueA: 1.6, valueB: 2.8, maxVal: 5, format: 'decimal', note: 'Durden tenta mais TDs, mas não converteu em vitórias há um ano.' },
        { label: 'Defesa de Submissão (%)', valueA: 65, valueB: 48, maxVal: 100, format: 'percent', note: 'Durden vulnerável a submissão.' },
        { label: 'Sig. Strikes por Minuto', valueA: 3.2, valueB: 2.6, maxVal: 5, format: 'decimal', note: 'Volume médio dos dois lados.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '29 anos', fighter2: '31 anos', note: 'Filho 2 anos mais jovem.' },
        { label: 'Altura', fighter1: '1,65m', fighter2: '1,68m', note: 'Durden 3 cm mais alto.' },
        { label: 'Envergadura', fighter1: '170cm', fighter2: '170cm', note: 'Alcance idêntico.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'Nova União', fighter2: 'Team ROC', note: null },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Jiu-Jitsu de Solo', advantage: 'fighter1', gap: 3, note: 'Filho tem Nova União e três submissões UFC. Durden é grappler mas sem padrão de sub.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter2', gap: 1, note: 'Durden tenta mais TDs, mas conversão baixa.' },
        { label: 'Defesa de Submissão', advantage: 'fighter1', gap: 3, note: 'Durden vulnerável, Filho nunca finalizado.' },
        { label: 'Poder de Finalização', advantage: 'fighter1', gap: 3, note: 'Filho 100 por cento UFC por sub. Durden só decisão há um ano.' },
        { label: 'Momentum Atual', advantage: 'fighter1', gap: 5, note: 'Filho 3-0 no UFC contra Durden 0-4.' },
        { label: 'Urgência', advantage: 'fighter2', gap: 1, note: 'Durden em must-win, pode abrir jogo.' },
      ],
      summary: 'Filho tem vantagem em todas as dimensões decisivas. Durden só tem urgência a favor, que pode virar contra ele se forçar demais.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Filho', ko_tko: { count: 4, percent: 27 }, submission: { count: 8, percent: 53 }, decision: { count: 3, percent: 20 }, total_wins: 15 },
      fighter2: { nome: 'Durden', ko_tko: { count: 5, percent: 29 }, submission: { count: 5, percent: 29 }, decision: { count: 7, percent: 41 }, total_wins: 17 },
      insight: 'Filho 53 por cento por submissão. Durden 41 por cento por decisão. Perfis opostos, e o padrão de Filho encaixa na vulnerabilidade de Durden.',
    },
    previsao_final: {
      winner_name: 'Jafel Filho', winner_side: 'fighter1',
      predicted_method: 'Submissão R1', confidence_score: 7, confidence_label: 'MÉDIA-ALTA',
      explanation: 'A análise aponta Filho com convicção MÉDIA-ALTA. Três pilares: padrão UFC 100 por cento de finalização no R1, defesa de submissão fraca de Durden, e urgência de Durden em must-win que tende a forçar erro. O caminho é Filho fechar clinch cedo, puxar guarda ou forçar takedown, encaixar sub em primeira transição. Convicção não é 8-9 porque Durden tem wrestling que pode neutralizar tentativas ansiosas.',
      x_factor: { title: 'A urgência de Durden', description: 'Em má fase com 1-4 nas últimas cinco, Durden pode forçar tentativa de vencer por KO cedo, o que é exatamente onde Filho vive. A pressão do corte favorece o finalizador.' },
      upset_alert: { title: 'Durden anula via decisão', description: 'Durden tem 7 vitórias por decisão. Se defender clinch e manter em pé por 15 minutos, pode estender e vencer no cartão. É o estilo dele.' },
      probabilities: { fighter1: { nome: 'Filho', percent: 70 }, fighter2: { nome: 'Durden', percent: 28 }, draw: 2 },
      conviction: {
        thesis: 'A tese é: Jafel Filho vence porque, primeiro, todas as três vitórias UFC foram submissão no R1, padrão repetido e técnico. Segundo, Durden tem defesa de submissão fraca com derrotas por sub no histórico. Terceiro, momentum é oposto (3-0 vs 0-4). Desmorona se Durden defender clinch por três rounds ou se Filho forçar entrada ansiosa em primeiro minuto e Durden contra-atacar.',
        conviction_score: 7,
        conviction_rationale: 'Convicção 7 pelo padrão repetido, gap de momentum e sub defense fraca de Durden. Não é 8 porque Durden é veterano de 17-7, experiência UFC real, pode neutralizar via decisão.',
        conviction_breakers: ['Durden defender todas as tentativas de clinch', 'Filho ansioso no R1 e forçar entrada ruim', 'Decisão dividida inesperada contra Filho'],
        underdog_path: {
          viable: true, probability_estimate: 28,
          key_scenario: 'Durden usa wrestling pra anular entradas de Filho, mantém em pé ou clinch contra a grade sem dar as costas, ganha no volume em três rounds. Padrão das derrotas recentes invertido.',
          required_conditions: ['Defender três primeiras entradas', 'Manter em pé por 15 minutos', 'Volume constante em distância', 'Não tentar finalizar'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Jafel Filho', odds: '-600', reasoning: 'Preço proibitivo que reflete consenso absoluto. Casa com a tese mas o valor no ML direto é baixo nesse preço.' },
          { type: 'Método', pick: 'Filho por submissão', odds: '-175', reasoning: '100 por cento das vitórias UFC por submissão. Se vence, é sub. Prop específica com melhor valor relativo que ML proibitivo.' },
        ],
        best_bet: { pick: 'Filho por submissão em -175', reasoning: 'ML em -600 exige 6 pra ganhar 1. Método casa com leitura e paga relativamente melhor. Convicção alta mas não justifica ML proibitivo.' },
      },
      key_stats: [
        { value: '3/3', label: 'Vitórias UFC de Filho por submissão no R1', sublabel: 'Padrão 100 por cento repetido.' },
        { value: '1-4', label: 'Últimas 4 UFC de Durden', sublabel: 'Em must-win absoluto.' },
        { value: '48%', label: 'Defesa de submissão de Durden', sublabel: 'Vulnerabilidade exata que Filho explora.' },
      ],
      odds: { fighter1_odds: '-600', fighter2_odds: '+450', fighter1_name: 'Filho', fighter2_name: 'Durden', source: 'bet365 e DraftKings em abril de 2026. Filho favoritíssimo, preço proibitivo.' },
      armadilha: {
        titulo: 'Armadilha: Filho ML em -600',
        descricao: 'O mercado precifica Filho em -600 porque a tese é óbvia: finalizador contra defesa de sub vulnerável. Mas -600 exige 6 de risco pra ganhar 1, e qualquer acidente em scramble zera a aposta. O valor real está no prop de método (submissão específica) que paga muito melhor relativo com a mesma tese.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'filho-vs-durden');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
