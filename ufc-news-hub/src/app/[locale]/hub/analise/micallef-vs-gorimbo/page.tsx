import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'micallef-vs-gorimbo',
  evento_id: null,
  slug: 'micallef-vs-gorimbo',
  titulo: 'Micallef vs Gorimbo: Prospect Australiano contra Wrestler em Queda',
  subtitulo:
    'Jonathan Micallef em 2-0 no UFC com primeira finalização recente (mata-leão contra Elliott), em casa em Perth. Themba Gorimbo (35) em sequência de 2 derrotas depois do cardio falhar contra Wells e ser finalizado pelo Luque (anaconda em 52s). Envergadura idêntica (196 cm). Vulnerabilidade nas costas do veterano se alinha com o mata-leão do Micallef.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,83m', envergadura: '196cm', idade: 26, academia: 'Sam Hayward AUS' },
      fighter2: { altura: '1,85m', envergadura: '196cm', idade: 35, academia: 'MMA Masters Miami' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão ou Sub Tardia',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Jonathan Micallef', apelido: 'The Captain', record: '9-1-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  fighter2_info: { nome: 'Themba Gorimbo', apelido: 'Mamba', record: '14-6-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: '2 de Maio, 2026',
  evento_local: 'RAC Arena, Perth, Austrália',
  categoria_peso: 'Peso Meio-Médio (170 lbs)',
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
      categoria_peso: 'Peso Meio-Médio (170 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Prospect em Casa contra Wrestler em Queda',
      tagline_sub: 'Micallef 2-0 no UFC, em casa, idade 26. Gorimbo 35, 0-2, cardio falhou na última luta.',
      fighter1: {
        nome_completo: 'Jonathan "The Captain" Micallef',
        apelido: 'The Captain',
        sobrenome: 'Micallef',
        record: '9-1-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Werribee, Victoria Austrália | 26 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/MICALLEF_JONATHAN_L_01-31.png?itok=UJUPNqDv',
      },
      fighter2: {
        nome_completo: 'Themba "Mamba" Gorimbo',
        apelido: 'Mamba',
        sobrenome: 'Gorimbo',
        record: '14-6-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Bikita, Zimbabwe (Miami) | 35 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-10/GORIMBO_THEMBA_L_10-12.png?itok=lte6rgDo',
      },
    },
    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Veterano Cansado Contra Sub Specialist Jovem',
      insight:
        'Gorimbo é wrestler-grinder que dominou Niko Price (7 de 9 quedas, 9:14 de tempo de domínio) mas tomou anaconda em 52s do Luque (defesa de finalização exposta) e cardio falhou contra Wells por decisão unânime. 35 anos, 0-2, luta de quebrar sequência. Micallef tem 26 anos, momentum esmagador (mata-leão contra Elliott + decisão unânime contra Jousset com chute alto e knockdown), envergadura idêntica (196 cm), em casa em Perth. GATE 2 dispara: os dois com taxa de decisão alta recente — default predicted_method = Decisão. Só que Gorimbo entrando em takedown contra striker com sub game (mata-leão + triângulo no DWCS do Micallef) é armadilha clássica.',
      tension: {
        truth_a: 'Gorimbo wrestler ofensivo (média de queda 1,32, 7 de 9 contra Price), direita pesada (KO no Rodriguez R1 em 0:32), background campeão da EFC Zimbabwe, story line do Dwayne "The Rock".',
        truth_b: 'Micallef 26 anos, em ascensão, em casa em Perth, sub specialist em transição (mata-leão depois de queda nas costas contra Elliott), envergadura igual neutraliza vantagem física.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Jonathan Micallef', color: 'red', momentum_score: 9, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: '2-0 no UFC. Vitória sobre Oban Elliott por mata-leão no R2 em 3:31 no UFC 325 (jan/2026) — estava perdendo o striking no R1 e começo do R2, reverteu via clinch + única queda da luta + costas. Antes decisão unânime contra Jousset no UFC 312 (fev/2025), com knockdown no R1 por chute alto. Estilo: striker de volume primário com finalização em transições.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Oban Elliott', result: 'W', method: 'Sub R2 (mata-leão 3:31)', opponent_rank: 'UFC ativo', quality_score: 2, quality_label: 'Médio', note: 'Reverteu o striking do R1 via clinch + costas.' },
          { date: 'Fev 2025', opponent: 'Kevin Jousset', result: 'W', method: 'Decisão Unânime (29-28 x3)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Knockdown no R1 com chute alto. UFC 312.' },
          { date: 'Out 2024', opponent: 'Mohamed Ado', result: 'W', method: 'Sub Técnica (triângulo)', opponent_rank: 'DWCS', quality_score: 1, quality_label: 'Ruim', note: 'Contrato no DWCS.' },
          { date: 'Pré-UFC', opponent: 'Demolition WW + Hex', result: 'W', method: 'Tricampeão amador', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Australiano regional.' },
        ],
      },
      fighter2: {
        nome: 'Themba Gorimbo', color: 'blue', momentum_score: 3, momentum_label: 'Em Queda', momentum_trend: 'descending',
        momentum_note: 'Sequência de 2 derrotas. Wells por decisão unânime em nov/2025 (cardio falhou após múltiplas tentativas de queda), Luque por sub R1 com anaconda em 0:52 em dez/2024 (defesa de finalização exposta). Antes 4 vitórias seguidas incluindo Niko Price por decisão unânime (7 de 9 quedas, 9:14 de tempo de domínio). 35 anos.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Jeremiah Wells', result: 'L', method: 'Decisão Unânime (29-28 x3)', opponent_rank: 'UFC ativo', quality_score: 3, quality_label: 'Bom', note: 'Cardio falhou depois de múltiplas tentativas de queda. Wells montou no R2.' },
          { date: 'Dez 2024', opponent: 'Vicente Luque', result: 'L', method: 'Sub R1 (anaconda 0:52)', opponent_rank: 'Veterano Top 15 Meio-Médio', quality_score: 4, quality_label: 'Muito Bom', note: 'Derrubado cedo + guilhotina convertida em anaconda.' },
          { date: 'Out 2024', opponent: 'Niko Price', result: 'W', method: 'Decisão Unânime (30-27 x3)', opponent_rank: 'Veterano', quality_score: 3, quality_label: 'Bom', note: '7 de 9 quedas, 9:14 de tempo de domínio. Domínio total.' },
          { date: 'Mai 2024', opponent: 'Ramiz Brahimaj', result: 'W', method: 'Decisão Unânime (30-27 x3)', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Médio', note: 'Defendeu quedas + low kicks.' },
          { date: 'Fev 2024', opponent: 'Pete Rodriguez', result: 'W', method: 'TKO R1 (0:32)', opponent_rank: 'Estreante', quality_score: 1, quality_label: 'Ruim', note: 'Direita pesada + GnP. Poder de R1.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Micallef', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '2V-0D UFC', contra_top5: '0V-0D' },
      fighter2: { nome: 'Gorimbo', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-1D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Gorimbo enfrentou calibre maior (Luque, Wells, Price) mas falhou contra os top tier. Stats do Gorimbo construídas em mix: Niko Price (em declínio), Brahimaj (regional). Quando subiu (Luque, Wells), perdeu.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.77, valueB: 2.30, maxVal: 6, format: 'decimal', note: 'Micallef com volume superior. Gorimbo wrestler primário.' },
        { label: 'Precisão de Strikes (%)', valueA: 45, valueB: 60, maxVal: 100, format: 'percent', note: 'Gorimbo com precisão maior mas volume menor.' },
        { label: 'Takedowns por 15 Min', valueA: 0.5, valueB: 1.32, maxVal: 5, format: 'decimal', note: 'Gorimbo wrestler ofensivo.' },
        { label: 'Defesa de Takedown (%)', valueA: 50, valueB: 0, maxVal: 100, format: 'percent', note: 'Micallef amostra pequena. Defesa de quedas do Gorimbo não capturada.' },
        { label: 'Submissões por 15 Min', valueA: 0.8, valueB: 0, maxVal: 3, format: 'decimal', note: 'Micallef tem média de finalização ofensiva.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '26 anos', fighter2: '35 anos', note: 'Micallef 9 anos mais novo. Crítico.' },
        { label: 'Altura', fighter1: '1,83m', fighter2: '1,85m', note: 'Gorimbo 2 cm mais alto.' },
        { label: 'Envergadura', fighter1: '196 cm', fighter2: '196 cm', note: 'Envergadura IDÊNTICA.' },
        { label: 'Stance', fighter1: 'Canhoto', fighter2: 'Destro', note: 'Stance assimétrico.' },
        { label: 'Academia', fighter1: 'Sam Hayward AUS', fighter2: 'MMA Masters Miami (parceiro Rock)', note: null },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking de Volume', advantage: 'fighter1', gap: 3, note: 'SLpM 4,77 contra 2,30. Significativo.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter2', gap: 3, note: 'Média de queda 1,32 + 7 de 9 contra Price.' },
        { label: 'Jogo Ofensivo de Finalização', advantage: 'fighter1', gap: 2, note: 'Mata-leão + triângulo no DWCS. Gorimbo tem zero finalizações.' },
        { label: 'Defesa de Finalização', advantage: 'fighter1', gap: 3, note: 'Gorimbo cedeu anaconda em 52s + ameaça de triângulo de braço.' },
        { label: 'Cardio em 3 Rounds', advantage: 'fighter1', gap: 3, note: 'Gorimbo 35 anos + cardio falhou contra Wells.' },
        { label: 'Poder no R1', advantage: 'fighter2', gap: 1, note: 'Direita pesada (KO no Rodriguez em 32s).' },
      ],
      summary: 'Micallef ganha em quase tudo. Único caminho real do Gorimbo é direita pesada cedo.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Micallef', ko_tko: { count: 3, percent: 33 }, submission: { count: 4, percent: 44 }, decision: { count: 2, percent: 22 }, total_wins: 9 },
      fighter2: { nome: 'Gorimbo', ko_tko: { count: 5, percent: 36 }, submission: { count: 0, percent: 0 }, decision: { count: 9, percent: 64 }, total_wins: 14 },
      insight: 'Gorimbo 64% das vitórias UFC por decisão, zero finalizações ofensivas. Vantagem de estilo clara pro Micallef no jogo de chão.',
    },
    previsao_final: {
      winner_name: 'Jonathan Micallef', winner_side: 'fighter1',
      predicted_method: 'Decisão ou Sub Tardia', confidence_score: 7, confidence_label: 'MÉDIA-ALTA',
      explanation:
        'Pick é Micallef por decisão ou finalização tardia. Vantagens: idade 9 anos a menos, em casa em Perth, momentum esmagador, volume de striking superior (4,77 contra 2,30 SLpM), Gorimbo com cardio falhando na última luta + defesa de finalização exposta (anaconda em 52s). GATE 2 (decision survivor) DISPARA — os dois com taxa de decisão alta. Mas Micallef tem exceção (c) viável: ameaça de poder via knockdown por chute alto contra Jousset + sub specialist em transição. Gorimbo entrando em takedown contra striker com jogo de finalização = braço igualzinho ao Luque finalizou ele.',
      x_factor: {
        title: 'Cardio do veterano cai cedo',
        description: 'Gorimbo 35 anos + cardio falhou contra Wells nos rounds 2-3. Se Micallef sustentar volume no R1, os R2-R3 viram só dele.',
      },
      upset_alert: {
        title: 'Gorimbo conecta direita pesada cedo',
        description: 'KO no Rodriguez no R1 em 0:32 com a direita pesada. Poder real existe. Probabilidade aproximada de 25%.',
      },
      probabilities: { fighter1: { nome: 'Micallef', percent: 72 }, fighter2: { nome: 'Gorimbo', percent: 25 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Jonathan Micallef vence porque tem 9 anos a menos (26 contra 35), em casa em Perth, volume de striking superior (4,77 SLpM), jogo de finalização elite em transição (mata-leão + triângulo), e Gorimbo vem de cardio falhando contra Wells + defesa de finalização exposta (anaconda em 52s do Luque). Caminho: dominar volume no R1, defender as tentativas de queda iniciais, achar costas em scramble OU vencer cards via volume nos 3 rounds. Desmorona se Gorimbo conectar a direita pesada cedo ou achar queda repetida nos 5 minutos iniciais.',
        conviction_score: 7,
        conviction_rationale: 'Convicção 7 porque 4 dimensões convergem (físico/idade, momentum, estilo, inteligência qualitativa/em casa). GATE 2 disparou mas Micallef tem exceção (c) via ameaça de knockdown por chute alto. Não é 8 porque o wrestling do Gorimbo pode controlar rounds.',
        conviction_breakers: [
          'Gorimbo conectar direita pesada cedo',
          'Queda repetida + tempo de domínio vence cards',
          'Cardio do Micallef cair (amostra UFC pequena)',
          'Decisões pendem pro veterano',
        ],
        underdog_path: {
          viable: true, probability_estimate: 25,
          key_scenario: 'Gorimbo aproveita os primeiros 90 segundos pra direita pesada ou tentativa de queda. Por cima acumula 9 a 10 minutos de tempo de domínio igual fez contra Price. OU conecta direita limpa no R1.',
          required_conditions: ['Queda repetida com tempo de domínio', 'Não ceder costas em scramble', 'Cardio sustentar 15 minutos'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Método', pick: 'Micallef por Decisão', odds: '-110 a -130', reasoning: 'GATE 2 disparou. Volume superior + idade no cardio. Probabilidade real em torno de 50%.' },
          { type: 'Método (Vantagem)', pick: 'Micallef por Finalização', odds: '+250 a +350', reasoning: 'Sub specialist em transição + defesa de finalização do Gorimbo exposta (anaconda em 52s + ameaça de triângulo de braço). Probabilidade aproximada de 25%, paga muito.' },
          { type: 'Rounds', pick: 'Over 2.5 Rounds', odds: '-150 a -180', reasoning: 'Gorimbo aguenta 3 rounds historicamente. Micallef finalizou no R2 contra Elliott. Probabilidade aproximada de 70%.' },
          { type: 'Evitar', pick: 'Gorimbo moneyline em +260', odds: '+260', reasoning: 'Cardio falhou na última luta + idade + defesa de finalização exposta = aposta só como longshot, não principal.' },
        ],
        best_bet: { pick: 'Micallef por Finalização em +250 a +350', reasoning: 'Vantagem real. Defesa de finalização do Gorimbo exposta (Luque anaconda em 52s, ameaça de triângulo de braço do Wells) + Micallef sub specialist em transição com mata-leão + triângulo no DWCS. Probabilidade real entre 25 e 30%, paga 2,5 a 4x.' },
      },
      key_stats: [
        { value: '9 anos', label: 'Diferença de idade', sublabel: 'Micallef 26 contra Gorimbo 35.' },
        { value: '0:52', label: 'Tempo da anaconda do Luque', sublabel: 'Defesa de finalização do Gorimbo é gap real.' },
        { value: '64%', label: 'Taxa de decisão do Gorimbo no UFC', sublabel: 'GATE 2 dispara o default decisão.' },
        { value: '4,77', label: 'SLpM do Micallef', sublabel: 'Volume superior 2x ao do Gorimbo (2,30).' },
      ],
      odds: { fighter1_odds: '-330', fighter2_odds: '+260', fighter1_name: 'Micallef', fighter2_name: 'Gorimbo', source: 'DraftKings em 25 de abril de 2026.' },
      armadilha: {
        titulo: 'Armadilha: Gorimbo por Queda/Decisão em +260',
        descricao: 'Mercado oferece e o público pega pela narrativa de wrestler + a story line do The Rock. Só que o cardio do Gorimbo falhou na última luta (Wells), defesa de finalização exposta (Luque em 52s), 35 anos. Stats do Gorimbo construídas contra mix: Niko Price (em declínio), Brahimaj (regional). Quando subiu de nível (Luque, Wells), falhou. Micallef é prospect em alta, não nome caído. Aposta longshot serve como hedge, não como principal.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'micallef-vs-gorimbo');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
