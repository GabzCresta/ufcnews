import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'malkoun-vs-meerschaert',
  evento_id: null,
  slug: 'malkoun-vs-meerschaert',
  titulo: 'Malkoun vs Meerschaert: Wrestler em Casa contra Sub Specialist em Queda',
  subtitulo:
    'Jacob Malkoun em 2 vitórias seguidas, em casa em Sydney com palco em Perth, parceiro de treino do Whittaker. Gerald Meerschaert em sequência de 4 derrotas aos 38 anos, 3 finalizações sofridas recentes. Detém o recorde de finalizações do peso médio no UFC. DraftKings: Malkoun -800.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,75m', envergadura: '185cm', idade: 30, academia: 'Gracie Smeaton Grange' },
      fighter2: { altura: '1,85m', envergadura: '197cm', idade: 38, academia: 'Roufusport' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'TKO ou Decisão',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Jacob Malkoun', apelido: 'Mamba', record: '9-3-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  fighter2_info: { nome: 'Gerald Meerschaert', apelido: 'GM3', record: '37-21-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: '2 de Maio, 2026',
  evento_local: 'RAC Arena, Perth, Austrália',
  categoria_peso: 'Peso Médio (185 lbs)',
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
      categoria_peso: 'Peso Médio (185 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Wrestler em Casa contra Sub Specialist em Queda',
      tagline_sub: 'Malkoun com média de queda 7,20 elite. Meerschaert 38 anos, 0-4, torcida pediu aposentadoria. Luta de última chance.',
      fighter1: {
        nome_completo: 'Jacob "Mamba" Malkoun',
        apelido: 'Mamba',
        sobrenome: 'Malkoun',
        record: '9-3-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Sydney, Austrália | 30 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/MALKOUN_JACOB_L_01-31.png?itok=83vEOHkP',
      },
      fighter2: {
        nome_completo: 'Gerald "GM3" Meerschaert',
        apelido: 'GM3',
        sobrenome: 'Meerschaert',
        record: '37-21-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Racine, Wisconsin | 38 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/MEERSCHAERT_GERALD_L_08-16.png?itok=9EI3KA1I',
      },
    },
    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Idade, Momentum e Queixo do Veterano',
      insight:
        'Malkoun é wrestler-grappler com média de queda de 7,20 a cada 15 minutos (elite). Meerschaert é o recordista de finalizações no peso médio UFC (12, passou Anderson Silva em agosto de 2024). Só que Meerschaert está em sequência de 4 derrotas: 3 finalizações sofridas recentes (Daukaus D\'Arce no R1 em 0:50, Oleksiejczuk TKO no R1 em 3:03, de Ridder triângulo de braço no R3) + decisão unânime perdida pro Tavares. Aos 38 anos, com queixo claramente em queda (esquerdas diretas sentaram ele em duas das últimas), e Malkoun tem qualidade superior de striking comparado aos adversários recentes do veterano. Defesa de quedas do Malkoun em 20% é alerta, só que Meerschaert tem precisão de queda em 31% (não vai aplicar queda ofensiva). Única ameaça real do Meerschaert é finalização de baixo (5 triângulos de braço incluindo Shahbazyan).',
      tension: {
        truth_a: 'Malkoun com média de queda 7,20 elite (contra 1,86 do Meerschaert), idade 30 contra 38, momentum 2 vitórias seguidas, em casa, parceiro Whittaker.',
        truth_b: 'Meerschaert é o recordista absoluto de finalizações no peso médio UFC. 5 triângulos de braço. Se Malkoun cair em scramble com pescoço ou braço exposto, fim de combate.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Jacob Malkoun', color: 'red', momentum_score: 8, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: '2 vitórias seguidas. UFC 325 Sydney decisão unânime sobre Finney (dominou no striking + quase guilhotina). Antes: TKO no R2 sobre Petroski em março de 2024. 22 meses parado entre essas. 3 meses de retorno agora — atividade sustentada.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Torrez Finney', result: 'W', method: 'Decisão Unânime (30-27, 30-26, 30-26)', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Médio', note: 'UFC 325 Sydney. Quase guilhotina.' },
          { date: 'Mar 2024', opponent: 'Andre Petroski', result: 'W', method: 'TKO R2 (0:39, GnP)', opponent_rank: 'Veterano UFC', quality_score: 3, quality_label: 'Bom', note: 'Choque forte, finalização no chão.' },
          { date: 'Set 2023', opponent: 'Cody Brundage', result: 'L', method: 'DQ R1 (4:15, cotovelada ilegal)', opponent_rank: 'Veterano UFC', quality_score: 3, quality_label: 'Bom', note: 'Estava perdendo até a desclassificação.' },
          { date: 'Out 2022', opponent: 'Nick Maximov', result: 'W', method: 'Decisão Unânime', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Médio', note: 'UFC FN 212.' },
          { date: 'Jun 2022', opponent: 'Brendan Allen', result: 'L', method: 'Decisão Unânime', opponent_rank: 'Top 15 Peso Médio', quality_score: 4, quality_label: 'Muito Bom', note: 'UFC 275.' },
        ],
      },
      fighter2: {
        nome: 'Gerald Meerschaert', color: 'blue', momentum_score: 1, momentum_label: 'Em Queda Profunda', momentum_trend: 'descending',
        momentum_note: 'Sequência de 4 derrotas, 3 das 4 em finalização rápida (Daukaus D\'Arce R1 em 0:50, Oleksiejczuk TKO R1 em 3:03, de Ridder triângulo de braço no R3). Torcida pediu aposentadoria pós UFC 322. Possível luta de última chance. 38 anos, mais de 49 lutas profissionais. Recordista de finalizações no peso médio UFC (12).',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Kyle Daukaus', result: 'L', method: 'Sub R1 (D\'Arce 0:50)', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Médio', note: '6ª finalização mais rápida do peso médio UFC. Knockdown com esquerda + finalização.' },
          { date: 'Ago 2025', opponent: 'Michał Oleksiejczuk', result: 'L', method: 'TKO R1 (3:03)', opponent_rank: 'UFC ativo', quality_score: 3, quality_label: 'Bom', note: 'Esquerda direta + GnP.' },
          { date: 'Abr 2025', opponent: 'Brad Tavares', result: 'L', method: 'Decisão Unânime (29-28 x3)', opponent_rank: 'Veterano histórico', quality_score: 4, quality_label: 'Muito Bom', note: 'Quedas single-leg falharam.' },
          { date: 'Nov 2024', opponent: 'Reinier de Ridder', result: 'L', method: 'Sub R3 (triângulo de braço 1:44)', opponent_rank: 'Top prospect', quality_score: 4, quality_label: 'Muito Bom', note: 'UFC FN.' },
          { date: 'Ago 2024', opponent: 'Edmen Shahbazyan', result: 'W', method: 'Sub R2 (triângulo de braço 4:12)', opponent_rank: 'Veterano', quality_score: 3, quality_label: 'Bom', note: 'Recorde do peso médio UFC quebrado nessa luta.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Malkoun', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-1D' },
      fighter2: { nome: 'Meerschaert', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '1V-4D (últimas 5)', contra_top5: '0V-1D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Calibre similar. Gap = 0. Diferença é momentum: Malkoun em alta, Meerschaert em queda.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.89, valueB: 3.05, maxVal: 6, format: 'decimal', note: 'Malkoun volume superior + accuracy 56%.' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.49, valueB: 3.43, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Meerschaert absorve mais. Problema no queixo é real.' },
        { label: 'Takedowns por 15 Min', valueA: 7.20, valueB: 1.86, maxVal: 8, format: 'decimal', note: 'Malkoun com média de queda ELITE.' },
        { label: 'Defesa de Takedown (%)', valueA: 20, valueB: 47, maxVal: 100, format: 'percent', note: 'Defesa de quedas do Malkoun em 20% = alerta. Mas Meerschaert tem precisão de queda em 31%.' },
        { label: 'Submissões por 15 Min', valueA: 0.5, valueB: 1.40, maxVal: 3, format: 'decimal', note: 'Média de finalização do Meerschaert ELITE de toda a história do UFC.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '30 anos', fighter2: '38 anos', note: 'Malkoun 8 anos mais novo. Crítico.' },
        { label: 'Altura', fighter1: '1,75m', fighter2: '1,85m', note: 'Meerschaert 10 cm mais alto.' },
        { label: 'Envergadura', fighter1: '185 cm', fighter2: '197 cm', note: 'Meerschaert 12 cm de envergadura a mais.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Southpaw', note: 'Stance assimétrico.' },
        { label: 'Academia', fighter1: 'Gracie Smeaton Grange (parceiro Whittaker)', fighter2: 'Roufusport (Milwaukee)', note: null },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Wrestling Ofensivo', advantage: 'fighter1', gap: 4, note: 'Média de queda 7,20 elite contra 1,86.' },
        { label: 'Qualidade do Striking', advantage: 'fighter1', gap: 2, note: 'Volume + precisão 56%.' },
        { label: 'Jogo de Finalização', advantage: 'fighter2', gap: 3, note: 'Recordista do peso médio UFC.' },
        { label: 'Defesa de Finalização', advantage: 'fighter1', gap: 2, note: 'Base de wrestler. Mas pode cair em triângulo de braço (Shahbazyan).' },
        { label: 'Idade / Durabilidade', advantage: 'fighter1', gap: 4, note: '38 anos + queixo em queda + 0-4.' },
        { label: 'Momentum', advantage: 'fighter1', gap: 5, note: '2 vitórias contra 0-4. Drástico.' },
      ],
      summary: 'Malkoun ganha em quase tudo exceto jogo de finalização e envergadura. Único caminho real do Meerschaert é finalização em scramble.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Malkoun', ko_tko: { count: 2, percent: 22 }, submission: { count: 2, percent: 22 }, decision: { count: 5, percent: 56 }, total_wins: 9 },
      fighter2: { nome: 'Meerschaert', ko_tko: { count: 6, percent: 16 }, submission: { count: 29, percent: 78 }, decision: { count: 2, percent: 5 }, total_wins: 37 },
      insight: 'Meerschaert 78% por finalização (29 de 37 vitórias). Malkoun mais decisões. Único risco do Malkoun é triângulo de braço em scramble.',
    },
    previsao_final: {
      winner_name: 'Jacob Malkoun', winner_side: 'fighter1',
      predicted_method: 'TKO ou Decisão', confidence_score: 7, confidence_label: 'MÉDIA-ALTA',
      explanation:
        'Pick é Malkoun por TKO ou decisão. Vantagens: média de queda 7,20 elite (Meerschaert tem defesa de quedas de 47%, vai cair), idade 8 anos a menos, momentum opostos (2 vitórias contra 0-4), qualidade do striking + precisão 56%, em casa. Meerschaert 38 anos com queixo em queda (esquerdas diretas sentaram em 2 das últimas) + striker que vai ser dominado pelo Malkoun no volume. Único caminho real do Meerschaert: finalização em scramble (5 triângulos de braço, incluindo Shahbazyan). Convicção 7 porque a leitura é clara mas Meerschaert é o sub specialist mais perigoso da história do peso médio.',
      x_factor: {
        title: 'Scramble com pescoço exposto',
        description: 'Defesa de quedas do Malkoun em 20% é o alerta, mas Meerschaert não usa wrestling ofensivo (precisão de queda 31%). Se Malkoun derrubar e ficar por cima, precisa cuidar do pescoço e do braço — exatamente como Shahbazyan caiu em triângulo de braço.',
      },
      upset_alert: {
        title: 'Meerschaert acha finalização em transição',
        description: 'Média de finalização 1,40 elite. Malkoun perdeu 2 em 9 lutas (DQ + Allen decisão unânime), nenhuma por finalização, mas wrestler do peso médio pode cair em triângulo de braço. Probabilidade aproximada de 12-15%.',
      },
      probabilities: { fighter1: { nome: 'Malkoun', percent: 87 }, fighter2: { nome: 'Meerschaert', percent: 11 }, draw: 2 },
      conviction: {
        thesis:
          'A tese é: Jacob Malkoun vence porque tem média de queda 7,20 elite (Meerschaert tem defesa de quedas de 47%), idade 30 contra 38, momentum opostos (2 vitórias seguidas contra 0-4), precisão de strikes 56%, e luta em casa em Sydney com palco em Perth. Caminho: derrubar Meerschaert repetidamente, controle por cima, GnP até a paralisação ou decisão. Desmorona se Malkoun morder a isca de triângulo de braço ou anaconda em scramble.',
        conviction_score: 7,
        conviction_rationale: 'Convicção 7 porque a leitura é clara (5 dimensões a favor: stats, momentum, estilo, físico/idade, inteligência qualitativa/em casa). Não é 8 porque a média de finalização 1,40 do Meerschaert é elite de toda a história e wrestlers do peso médio já caíram em triângulo de braço (precedente Shahbazyan).',
        conviction_breakers: [
          'Malkoun cair em triângulo de braço ou anaconda em scramble',
          'Striking do Meerschaert achar a esquerda direta no counter',
          'Defesa de quedas do Malkoun em 20% expor numa luta nova',
          'Cardio veterano do Meerschaert sustentar 3 rounds',
        ],
        underdog_path: {
          viable: true, probability_estimate: 11,
          key_scenario: 'Meerschaert sobrevive ao R1 em pé, em scramble Malkoun expõe o pescoço, triângulo de braço ou D\'Arce. OU conecta a esquerda direta que sentou o Malkoun em pé.',
          required_conditions: ['Achar finalização em transição no R1-R2', 'Não ser dominado no wrestling', 'Sobreviver com queixo questionável'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Método', pick: 'Malkoun por TKO ou Decisão', odds: '-180 a -200', reasoning: 'Qualidade do striking + queixo do Meerschaert + wrestling = TKO ou decisão dominante. Probabilidade aproximada de 70%.' },
          { type: 'Rounds', pick: 'Under 2.5 Rounds', odds: '-150 a -180', reasoning: 'Queixo do Meerschaert em queda (3 finalizações sofridas recentes). Malkoun finalizou Petroski no R2. Probabilidade aproximada de 65% de finalização no R2.' },
          { type: 'Longshot', pick: 'Meerschaert por Finalização', odds: '+600 a +800', reasoning: 'Média de finalização 1,40 elite + wrestlers do peso médio vulneráveis a triângulo de braço. Probabilidade aproximada de 12%.' },
          { type: 'Evitar', pick: 'Malkoun moneyline em -800', odds: '-800', reasoning: 'Vantagem zero. Linha extrema. Pegue método ou round em vez de moneyline.' },
        ],
        best_bet: { pick: 'Under 2.5 Rounds em -150 a -180', reasoning: 'Meerschaert tomou 3 finalizações em 4 lutas (Daukaus 0:50, Oleksiejczuk 3:03, de Ridder R3). Queixo em queda + qualidade do striking do Malkoun = probabilidade alta de finalização no R1-R2.' },
      },
      key_stats: [
        { value: '0-4', label: 'Sequência do Meerschaert', sublabel: 'Torcida pediu aposentadoria. Possível última luta.' },
        { value: '7,20', label: 'Média de queda a cada 15 min do Malkoun', sublabel: 'Elite. Meerschaert tem defesa de quedas em 47%.' },
        { value: '1,40', label: 'Média de finalização do Meerschaert', sublabel: 'Recordista do peso médio UFC. Ameaça real.' },
        { value: '38', label: 'Idade do Meerschaert', sublabel: 'Queixo em queda. Esquerdas diretas sentaram em 2 das últimas.' },
      ],
      odds: { fighter1_odds: '-800', fighter2_odds: '+550', fighter1_name: 'Malkoun', fighter2_name: 'Meerschaert', source: 'Caesars na abertura Malkoun -900, consenso -800 / +550 a +600 em 25 de abril de 2026.' },
      armadilha: {
        titulo: 'Armadilha: Malkoun moneyline em -800',
        descricao: 'Linha extrema. Pagar -800 num pickem médio é matematicamente errado. Vantagem zero. Se você acredita na pick, vai em método (Malkoun por TKO ou decisão em -180) ou round (Under 2.5 em -150). Moneyline nessa linha mata banca.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'malkoun-vs-meerschaert');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
