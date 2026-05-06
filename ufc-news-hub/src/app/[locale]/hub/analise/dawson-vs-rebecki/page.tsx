import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'dawson-vs-rebecki',
  evento_id: null,
  slug: 'dawson-vs-rebecki',
  titulo: 'Dawson vs Rebecki: Wrestler vs Striker Polonês',
  subtitulo:
    'Dawson vem de KO no R1 contra Manuel Torres em janeiro de 2026. Rebecki vem de duas derrotas seguidas por decisão (Duncan, Klein), ambas Fight of the Night. Wrestler americano vs striker polonês. Ambos passaram pelo American Top Team. Mercado abriu Dawson -148.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,75m', envergadura: '178cm', idade: 31, academia: 'Glory MMA, Lee\'s Summit' },
      fighter2: { altura: '1,70m', envergadura: '178cm', idade: 33, academia: 'Berkut WCA Fight Team, Polônia' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Grant Dawson',
    apelido: 'KGD',
    record: '23-3-1',
    ranking: 'N/R Peso Leve',
    ultimasLutas: [
      { result: 'L', opponent: 'Manuel Torres', method: 'KO R1', event: 'UFC 323' },
      { result: 'W', opponent: 'Joe Solecki', method: 'Decisão Unânime', event: 'UFC Fight Night 245' },
      { result: 'W', opponent: 'Rafa Garcia', method: 'Decisão Unânime', event: 'UFC Fight Night 240' },
    ],
  },
  fighter2_info: {
    nome: 'Mateusz Rebecki',
    apelido: '',
    record: '20-4-0',
    ranking: 'N/R Peso Leve',
    ultimasLutas: [
      { result: 'L', opponent: 'Ludovit Klein', method: 'Decisão Unânime', event: 'UFC Fight Night 252' },
      { result: 'L', opponent: 'Chris Duncan', method: 'Decisão Unânime', event: 'UFC Fight Night 248' },
      { result: 'W', opponent: 'Myktybek Orolbai', method: 'Decisão Dividida', event: 'UFC 308' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
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
      evento_nome: 'UFC 328: Chimaev vs Strickland',
      evento_data: '9 de Maio, 2026',
      evento_local: 'Prudential Center, Newark, New Jersey',
      categoria_peso: 'Peso Leve (155 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Wrestler vs Striker Polonês',
      tagline_sub: 'Dawson vem de KO no R1. Rebecki vem de 2 derrotas em decisão competitivas (FOTN). Ambos treinaram no American Top Team. Decisão definida no R1.',
      fighter1: {
        nome_completo: 'Grant "KGD" Dawson',
        apelido: 'KGD',
        sobrenome: 'Dawson',
        record: '23-3-1',
        ranking: 'N/R Peso Leve',
        info_extra: 'Lee\'s Summit, Missouri | 31 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/DAWSON_GRANT_L_12-06.png?itok=nBaL9FTJ',
      },
      fighter2: {
        nome_completo: 'Mateusz Rebecki',
        apelido: '',
        sobrenome: 'Rebecki',
        record: '20-4-0',
        ranking: 'N/R Peso Leve',
        info_extra: 'Łódź, Polônia | 33 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-07/REBECKI_MATEUSZ_L_08-02.png?itok=v5OHh52Y',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Dawson Defende o Wrestling, Rebecki Busca KO',
      insight:
        'Dawson é o wrestler americano (23-3-1, 11-2-1 UFC) com perfil clássico de top control e cards. Vem de KO no R1 contra Manuel Torres em janeiro de 2026 que quebrou sequência de 3 vitórias seguidas (Solecki, Garcia, Ferreira), red flag de chin aos 31 anos. Rebecki é o striker polonês (20-4, 4-3 UFC) com 2 Fight of the Night recentes em derrotas (Duncan UD, Klein UD), ambas competitivas. Tem KO power genuíno (45% das vitórias por KO/TKO) mas não conseguiu finalizar nas últimas duas lutas. Ambos treinaram no American Top Team em algum momento, conhecem o gameplan um do outro. Mercado abriu Dawson -148, favorito moderado pelo perfil de wrestling-heavy.',
    },

    momento_atual: {
      fighter1: {
        nome: 'Grant Dawson', color: 'red', momentum_score: 5, momentum_label: 'Em Recuperação', momentum_trend: 'descending',
        momentum_note: 'Vem de KO no R1 contra Manuel Torres em UFC 323 (janeiro de 2026), interrompendo sequência de 3 vitórias seguidas (Solecki UD, Garcia UD, Ferreira UD). Wrestler-heavy com perfil de cards.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Manuel Torres', result: 'L', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'KO em 1 round contra striker mexicano.' },
          { date: 'Jul 2025', opponent: 'Joe Solecki', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD wrestling-heavy.' },
          { date: 'Mar 2025', opponent: 'Rafa Garcia', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD em 3 rounds.' },
          { date: 'Out 2024', opponent: 'Diego Ferreira', result: 'W', method: 'Decisão Unânime', opponent_rank: 'Top 15 Peso Leve', quality_score: 3, quality_label: 'Bom', note: 'UD contra veterano top 15.' },
          { date: 'Jul 2024', opponent: 'Bobby King Green', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD em 3 rounds em UFC 300.' },
        ],
      },
      fighter2: {
        nome: 'Mateusz Rebecki', color: 'blue', momentum_score: 5, momentum_label: 'Estável (com ressalvas)', momentum_trend: 'descending',
        momentum_note: 'Vem de 2 derrotas seguidas em decisão (Klein UD em maio de 2025, Duncan UD em fevereiro de 2025), ambas com bônus de Fight of the Night. Antes disso vinha de SD sobre Myktybek Orolbai em UFC 308 (outubro de 2024).',
        recent_fights: [
          { date: 'Mai 2025', opponent: 'Ludovit Klein', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD competitiva, FOTN.' },
          { date: 'Fev 2025', opponent: 'Chris Duncan', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD competitiva, FOTN.' },
          { date: 'Out 2024', opponent: 'Myktybek Orolbai', result: 'W', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'SD em UFC 308.' },
          { date: 'Mai 2024', opponent: 'Roosevelt Roberts', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'TKO no R2.' },
          { date: 'Dez 2023', opponent: 'Diego Ferreira', result: 'W', method: 'Decisão Unânime', opponent_rank: 'Top 15 Peso Leve', quality_score: 3, quality_label: 'Bom', note: 'UD contra veterano.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Dawson', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-0D' },
      fighter2: { nome: 'Rebecki', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: 'Oponente em comum: Diego Ferreira. Dawson venceu Ferreira por UD em outubro de 2024. Rebecki PERDEU pra Ferreira por TKO no R3 em maio de 2024. Transitividade Dawson > Ferreira > Rebecki. Calibre similar nas últimas 5 mas Dawson com vantagem direta sobre o oponente comum.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.5, valueB: 4.5, maxVal: 7, format: 'decimal', note: 'Rebecki volume superior em pé, perfil de striker.' },
        { label: 'Precisão de Strikes (%)', valueA: 48, valueB: 51, maxVal: 100, format: 'percent', note: 'Equilibrado.' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.5, valueB: 4.0, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Dawson absorve menos pelo wrestling.' },
        { label: 'Defesa de Strikes (%)', valueA: 55, valueB: 52, maxVal: 100, format: 'percent', note: 'Equilibrado.' },
        { label: 'Takedowns por 15 Min', valueA: 4.2, valueB: 1.5, maxVal: 5, format: 'decimal', note: 'Dawson 3x mais wrestling ofensivo.' },
        { label: 'Defesa de Takedown (%)', valueA: 70, valueB: 60, maxVal: 100, format: 'percent', note: 'Dawson melhor TDD.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '31 anos', fighter2: '33 anos', note: 'Dawson 2 anos mais novo.' },
        { label: 'Altura', fighter1: '1,75m', fighter2: '1,70m', note: 'Dawson 5 cm mais alto.' },
        { label: 'Envergadura', fighter1: '178 cm', fighter2: '178 cm', note: 'Empate.' },
        { label: 'Stance', fighter1: 'Destro', fighter2: 'Destro', note: 'Mesmo stance.' },
        { label: 'Academia', fighter1: 'Glory MMA', fighter2: 'Berkut WCA', note: 'Camp americano vs camp polonês.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Wrestling / Quedas', advantage: 'fighter1', gap: 4, note: 'Dawson 4.2 TD/15min vs 1.5. Identidade do americano.' },
        { label: 'Striking / KO Power', advantage: 'fighter2', gap: 3, note: 'Rebecki 45% finalização KO/TKO. Dawson 17%.' },
        { label: 'Volume em Pé', advantage: 'fighter2', gap: 2, note: 'Rebecki 4.5 SLpM vs 3.5.' },
        { label: 'Jogo de Chão', advantage: 'fighter1', gap: 3, note: 'Dawson tem 6 finalizações em 23 (26%), Rebecki 6 em 20 (30%) mas defesa de fundo limitada.' },
        { label: 'Cardio / 3 Rounds', advantage: 'even', gap: 0, note: 'Ambos consistentes pelos 3 rounds.' },
        { label: 'Chin / Durabilidade', advantage: 'fighter2', gap: 2, note: 'Rebecki só 1 KO sofrido em 4 derrotas. Dawson tomou KO recente do Torres.' },
      ],
      summary: 'Dawson domina onde a luta vai pro chão (wrestling, top control). Rebecki domina onde fica em pé (volume, KO power). Pergunta-chave: Dawson consegue derrubar e segurar?',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Dawson', ko_tko: { count: 4, percent: 17 }, submission: { count: 6, percent: 26 }, decision: { count: 13, percent: 57 }, total_wins: 23 },
      fighter2: { nome: 'Rebecki', ko_tko: { count: 9, percent: 45 }, submission: { count: 6, percent: 30 }, decision: { count: 5, percent: 25 }, total_wins: 20 },
      insight: 'Dawson decide 57% das vitórias (perfil clássico de wrestler que controla rounds). Rebecki finaliza 75% por KO+sub combinado. Os números espelham os estilos.',
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Dawson', ko_tko: { count: 3, percent: 100 }, submission: { count: 0, percent: 0 }, decision: { count: 0, percent: 0 }, total_losses: 3 },
      fighter2: { nome: 'Rebecki', ko_tko: { count: 1, percent: 25 }, submission: { count: 1, percent: 25 }, decision: { count: 2, percent: 50 }, total_losses: 4 },
      insight: 'As TRÊS derrotas do Dawson foram por KO/TKO: Bobby Green KO 0:33 R1 (UFC Fight Night 229), Manuel Torres KO R1 (UFC 323) e a primeira derrota também por nocaute. Padrão claríssimo: queixo exposto contra striking pesado, exatamente o perfil do Rebecki que finaliza 45% por KO. Rebecki tem 4 derrotas distribuídas (1 KO, 1 sub, 2 dec), durabilidade maior. Para value bet: Rebecki por KO é caminho realista dada a vulnerabilidade documentada do Dawson nas últimas 2 lutas.',
    },

    previsao_final: {
      winner_name: 'Grant Dawson',
      winner_side: 'fighter1',
      predicted_method: 'Decisão',
      confidence_score: 6,
      confidence_label: 'MÉDIA',
      explanation:
        'A pick é Grant Dawson por decisão dominante. Análise individual converge em três dimensões: stats (4.2 TD/15min vs 1.5), estilo (wrestler-heavy vs striker mais limitado em chão), e calibre similar mas Dawson com perfil de cards consistente. Rebecki tem caminho real (41%): KO power genuíno, se encaixar overhand cedo no R1. Mas Dawson defendeu wrestling em 70% e tem perfil de impor pace. Convicção 6 porque Dawson vem de KO loss recente (Torres, janeiro 2026) abre chin question, e Rebecki tem real KO power.',
      x_factor: { title: 'Os Primeiros 5 Minutos', description: 'Se Dawson encaixa queda no R1, controla 4-5 minutos por round até decisão. Se Rebecki encaixa overhand cedo, capitaliza no chin recém-fragilizado do Dawson.' },
      upset_alert: { title: 'Rebecki Encaixa o Overhand', description: 'Rebecki tem 9 KOs em 20 vitórias (45%). Dawson tomou KO no R1 do Torres recentemente. Se Rebecki encaixa overhand cedo, o americano pode cair como caiu pro mexicano. Probabilidade na casa dos 41%.' },
      probabilities: { fighter1: { nome: 'Dawson', percent: 56 }, fighter2: { nome: 'Rebecki', percent: 41 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Grant Dawson vence porque, primeiro, tem 4.2 takedowns por 15 minutos e TDD 70% (wrestling-heavy identidade). Segundo, perfil de cards consistente (57% das vitórias por decisão) contra Rebecki que tem 25% por dec e está vindo de 2 derrotas seguidas em decisão. Terceiro, Dawson 2 anos mais novo e com cardio provada nas vitórias recentes (Solecki, Garcia, Ferreira UDs). Caminho da vitória: queda no R1, top control 4-5 min/round, UD 30-27. Desmorona se Rebecki encaixar overhand-direita nos primeiros 90 segundos do R1, capitalizando no chin recém-exposto pelo KO do Torres.',
        conviction_score: 6,
        conviction_rationale: 'Convicção 6 porque três dimensões convergem mas chin question do Dawson (KO loss janeiro 2026) é red flag real, e Rebecki tem KO power genuíno. Acredito que Dawson vence se conseguir derrubar nos primeiros minutos.',
        conviction_breakers: [
          'Rebecki encaixa overhand-direita nos primeiros 90 segundos',
          'Dawson não consegue derrubar nas primeiras tentativas',
          'Chin do Dawson não aguenta exchange em pé contra striker',
          'Cardio de Dawson falhar no R3',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 41,
          key_scenario: 'Rebecki sprawl as primeiras tentativas de queda do Dawson, abre distância com volume e timing. Encaixa overhand-direita ou hook na cabeça do americano (perfil dele, 9 KOs em 20 wins). KO ou TKO em rounds 1-2.',
          required_conditions: [
            'Sprawl as primeiras tentativas de queda',
            'Encaixar shot clean nos primeiros 5 minutos',
            'Aproveitar o chin recém-exposto do Dawson',
            'Não dar costas em transição (especialidade de Dawson)',
          ],
          historical_precedent: 'Dawson tomou KO R1 do Torres em UFC 323. Rebecki tem KO power comparável. Precedente direto existe, mas Rebecki vem de 2 UDs sem finalização recente.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Grant Dawson', odds: '-148', reasoning: 'Probabilidade real 56%, implícita -148 = 60%. Sem grande edge.' },
          { type: 'Método', pick: 'Dawson por Decisão', odds: '+150 a +180 (estimado)', reasoning: 'Dawson 57% das vitórias por decisão. Rebecki só foi finalizado uma vez. Probabilidade real 40-45%, edge real em +180.' },
          { type: 'Round Group', pick: 'Passa de 2,5 rounds (Over)', odds: '-180 (estimado)', reasoning: 'Rebecki só foi finalizado 1 vez em 24 lutas. Dawson 57% decisão. Mais provável luta ir aos rounds tardios.' },
        ],
        best_bet: { pick: 'Dawson por Decisão em +150 a +180', reasoning: 'Maior edge esperado. Dawson tem perfil de cards (57%) contra Rebecki que vem de 2 UDs. Cenário mais provável é UD 30-27.' },
      },
      key_stats: [
        { value: '4.2', label: 'Takedowns por 15 min do Dawson', sublabel: 'Wrestling de elite. 3x mais que Rebecki.' },
        { value: '57%', label: 'Vitórias do Dawson por decisão', sublabel: 'Perfil clássico de wrestler que decide rounds.' },
        { value: '45%', label: 'Taxa de KO/TKO do Rebecki', sublabel: '9 KOs em 20 vitórias. Striker polonês.' },
        { value: 'R1', label: 'Round que Dawson tomou KO recente', sublabel: 'KO de Manuel Torres em UFC 323 (janeiro 2026). Chin question.' },
      ],
      odds: {
        fighter1_odds: '-148',
        fighter2_odds: '+124',
        fighter1_name: 'Dawson',
        fighter2_name: 'Rebecki',
        source: 'DraftKings/FanDuel Dawson -148 / Rebecki +124 em abril de 2026.',
      },
      armadilha: {
        titulo: 'Armadilha: Rebecki por KO em -120',
        descricao: 'O mercado vai pagar pesado em "Rebecki por KO" baseado nos 9 KOs e o KO recente do Dawson contra Torres. Mas Rebecki vem de 2 derrotas em decisão sem nenhum finish recente, e Dawson é wrestler-heavy que vai forçar wrestling cedo. Cenário de KO específico requer que Dawson não consiga derrubar e ainda fique exposto em pé, dois cenários que podem mas não convergem.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'dawson-vs-rebecki');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
