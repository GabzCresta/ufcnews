import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'carpenter-vs-ochoa',
  evento_id: null,
  slug: 'carpenter-vs-ochoa',
  titulo: 'Carpenter vs Ochoa: Recuperação vs Performance of the Night',
  subtitulo:
    'Carpenter vem de 2 derrotas seguidas (Ulanbekov, Filho) depois de começar 2-0 UFC com 2 finalizações. Ochoa vem de Performance of the Night sobre Cody Durden em 2025. Mexicano em alta contra prospect americano em recuperação. Mercado abriu Ochoa -185.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,68m', envergadura: '170cm', idade: 28, academia: 'MMA Lab, Phoenix' },
      fighter2: { altura: '1,65m', envergadura: '167cm', idade: 28, academia: 'N/D' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Decisão ou KO/TKO',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Clayton Carpenter',
    apelido: '',
    record: '8-2-0',
    ranking: 'N/R Peso Mosca',
    ultimasLutas: [
      { result: 'L', opponent: 'Jafel Filho', method: 'Sub R1', event: 'UFC Fight Night 257' },
      { result: 'L', opponent: 'Tagir Ulanbekov', method: 'Decisão Unânime', event: 'UFC Fight Night 250' },
      { result: 'W', opponent: 'Estreia UFC', method: 'Sub R3', event: 'UFC Fight Night 240' },
    ],
  },
  fighter2_info: {
    nome: 'Jose Ochoa',
    apelido: '',
    record: '8-2-0',
    ranking: 'N/R Peso Mosca',
    ultimasLutas: [
      { result: 'L', opponent: 'Asu Almabayev', method: 'Decisão Unânime', event: 'UFC Fight Night 254' },
      { result: 'W', opponent: 'Cody Durden', method: 'KO R2 (Performance of the Night)', event: 'UFC Fight Night 250' },
      { result: 'L', opponent: 'Estreia UFC', method: 'Decisão Unânime', event: 'UFC Fight Night 245' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Peso Mosca (125 lbs)',
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
      categoria_peso: 'Peso Mosca (125 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Recuperação vs Performance of the Night',
      tagline_sub: 'Carpenter 2-2 UFC com 2 derrotas seguidas. Ochoa vem de Performance of the Night sobre Cody Durden. Mexicano em alta contra prospect americano em recuperação.',
      fighter1: {
        nome_completo: 'Clayton Carpenter',
        apelido: '',
        sobrenome: 'Carpenter',
        record: '8-2-0',
        ranking: 'N/R Peso Mosca',
        info_extra: 'Phoenix, Arizona | 28 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/6/CARPENTER_CLAYTON_L_10-12.png?itok=qT0YKGEx',
      },
      fighter2: {
        nome_completo: 'Jose Ochoa',
        apelido: '',
        sobrenome: 'Ochoa',
        record: '8-2-0',
        ranking: 'N/R Peso Mosca',
        info_extra: 'México | 28 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-11/OCHOA_JOSE_R_11-23.png?itok=LfDooxPs',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Mexicano Em Alta Contra Prospect Em Decline',
      insight:
        'Carpenter começou 2-0 UFC com 2 finalizações por sub mas tomou 2 derrotas seguidas (Ulanbekov UD e Filho sub R1 em UFC FN 257), mostrando que o nível subiu e ele não acompanhou. Ochoa começou com derrota na estreia UFC mas voltou com Performance of the Night por KO no Cody Durden em UFC FN 250 (2025), mostrando que tem KO power real. Perdeu UD pro Asu Almabayev na sequência. Ambos 8-2 carreira, 28 anos, mas momentum a favor do mexicano.',
    },

    momento_atual: {
      fighter1: {
        nome: 'Clayton Carpenter', color: 'red', momentum_score: 4, momentum_label: 'Em Recuperação', momentum_trend: 'descending',
        momentum_note: '2 derrotas seguidas (Filho sub R1 em outubro 2025, Ulanbekov UD em julho 2025). Começou 2-0 UFC com 2 finalizações sub. MMA Lab, Phoenix.',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Jafel Filho', result: 'L', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Sub R1.' },
          { date: 'Jul 2025', opponent: 'Tagir Ulanbekov', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD pra wrestler russo.' },
          { date: 'Mar 2025', opponent: 'UFC Win', result: 'W', method: 'Sub R3', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Sub R3.' },
          { date: 'Set 2024', opponent: 'UFC Estreia', result: 'W', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Sub R2 estreia.' },
          { date: 'Mai 2024', opponent: 'Regional', result: 'W', method: 'Sub', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Sub regional.' },
        ],
      },
      fighter2: {
        nome: 'Jose Ochoa', color: 'blue', momentum_score: 6, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: 'Vem de UD perdida pro Asu Almabayev em outubro de 2025. Antes disso, KO sobre Cody Durden com Performance of the Night em julho de 2025. Mexicano de 28 anos.',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Asu Almabayev', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD em 3 rounds.' },
          { date: 'Jul 2025', opponent: 'Cody Durden', result: 'W', method: 'KO R2 (PotN)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'KO no R2, Performance of the Night.' },
          { date: 'Mar 2025', opponent: 'UFC Estreia', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Estreia, UD.' },
          { date: 'Set 2024', opponent: 'Regional', result: 'W', method: 'TKO', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Regional.' },
          { date: 'Mai 2024', opponent: 'Regional', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'UD regional.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Carpenter', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-0D' },
      fighter2: { nome: 'Ochoa', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Calibre baixo dos dois (UFC newcomers contra outros novatos). Momentum a favor do Ochoa pelo KO recente sobre Durden.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.2, valueB: 5.0, maxVal: 7, format: 'decimal', note: 'Ochoa volume superior.' },
        { label: 'Precisão de Strikes (%)', valueA: 50, valueB: 52, maxVal: 100, format: 'percent', note: 'Equilibrado.' },
        { label: 'Strikes Absorvidos/Min', valueA: 4.0, valueB: 4.5, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Equilibrado.' },
        { label: 'Defesa de Strikes (%)', valueA: 55, valueB: 50, maxVal: 100, format: 'percent', note: 'Carpenter leve vantagem.' },
        { label: 'Takedowns por 15 Min', valueA: 2.5, valueB: 1.5, maxVal: 5, format: 'decimal', note: 'Carpenter mais wrestling ofensivo.' },
        { label: 'Submissões por 15 Min', valueA: 2.0, valueB: 0.5, maxVal: 3, format: 'decimal', note: 'Carpenter sub specialist.' },
        { label: 'Defesa de Takedown (%)', valueA: 60, valueB: 55, maxVal: 100, format: 'percent', note: 'Equilibrado.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '28 anos', fighter2: '28 anos', note: 'Mesma idade.' },
        { label: 'Altura', fighter1: '1,68m', fighter2: '1,65m', note: 'Carpenter 3 cm mais alto.' },
        { label: 'Envergadura', fighter1: '170 cm', fighter2: '167 cm', note: 'Carpenter 3 cm a mais.' },
        { label: 'Stance', fighter1: 'Destro', fighter2: 'Destro', note: 'Mesmo stance.' },
        { label: 'Academia', fighter1: 'MMA Lab', fighter2: 'N/D', note: 'Camp Phoenix vs camp não confirmado.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume de Strikes', advantage: 'fighter2', gap: 2, note: 'Ochoa 5.0 SLpM vs 4.2 do Carpenter.' },
        { label: 'Poder de Nocaute', advantage: 'fighter2', gap: 3, note: 'Ochoa Performance of the Night por KO recente. Carpenter sem KO power.' },
        { label: 'Wrestling / Quedas', advantage: 'fighter1', gap: 2, note: 'Carpenter 2.5 TD/15min vs 1.5.' },
        { label: 'Jogo de Chão / Sub', advantage: 'fighter1', gap: 3, note: 'Carpenter 2 finalizações UFC. Mas Filho subbed ele R1 — bottom defense questionada.' },
        { label: 'Cardio / 3 Rounds', advantage: 'fighter2', gap: 1, note: 'Ochoa fez 25 minutos com Almabayev recentemente.' },
        { label: 'Momentum', advantage: 'fighter2', gap: 3, note: 'Ochoa PotN. Carpenter 2 derrotas seguidas.' },
      ],
      summary: 'Ochoa domina em momento e KO power. Carpenter no wrestling/sub mas mostrou bottom defense limitada contra Filho. Pra Carpenter vencer, precisa derrubar e finalizar antes de ser pego em pé.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Carpenter', ko_tko: { count: 2, percent: 25 }, submission: { count: 4, percent: 50 }, decision: { count: 2, percent: 25 }, total_wins: 8 },
      fighter2: { nome: 'Ochoa', ko_tko: { count: 7, percent: 88 }, submission: { count: 1, percent: 12 }, decision: { count: 0, percent: 0 }, total_wins: 8 },
      insight: 'Carpenter 50% subs (sub specialist). Ochoa 88% KO/TKO (7 em 8 vitórias) — KO machine extremo, ZERO decisões na carreira. Ele só vence quando finaliza. Estilos opostos com Ochoa muito mais explosivo do que parecia.',
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Carpenter', ko_tko: { count: 0, percent: 0 }, submission: { count: 1, percent: 50 }, decision: { count: 1, percent: 50 }, total_losses: 2 },
      fighter2: { nome: 'Ochoa', ko_tko: { count: 0, percent: 0 }, submission: { count: 0, percent: 0 }, decision: { count: 2, percent: 100 }, total_losses: 2 },
      insight: 'Amostra pequena pros dois (só 2 derrotas cada), então não dá pra cravar padrão de vulnerabilidade. Carpenter caiu por kimura no R1 contra Jafel Filho (UFC Out/2025) e perdeu UD pra Tagir Ulanbekov (UFC 311). Ochoa perdeu duas decisões no UFC: Lone’er Kavanagh (estreia UFC, Macao Nov/2024) e Asu Almabayev (Abu Dhabi Jul/2025). Nenhum dos dois nunca foi nocauteado. Para value bet: Ochoa tem 88% de finalizações por KO entre vitórias mas Carpenter NUNCA caiu por KO — o caminho explosivo do peruano é mais estreito do que os números de vitória sugerem. Decisão é o cenário base estatisticamente, dado que ambos só perderam por dec ou sub e nunca por KO.',
    },

    previsao_final: {
      winner_name: 'Jose Ochoa',
      winner_side: 'fighter2',
      predicted_method: 'Decisão ou KO/TKO',
      confidence_score: 6,
      confidence_label: 'MÉDIA',
      explanation:
        'A pick é Ochoa por decisão ou KO/TKO. Análise individual mostra mexicano em alta após PotN sobre Durden, contra Carpenter em decline com 2 derrotas seguidas. Carpenter tem caminho real (37%): se derrubar e finalizar antes de ser pego em pé, pode vencer. Mas bottom defense questionada (Filho subbed ele em R1). Convicção 6 — luta competitiva entre lutadores de baixo calibre.',
      x_factor: { title: 'Wrestling vs KO Power', description: 'Carpenter precisa derrubar nos primeiros 2 minutos. Ochoa precisa manter em pé e usar KO power.' },
      upset_alert: { title: 'Carpenter Encaixa Sub Cedo', description: 'Carpenter 5 subs em 8 vitórias. Se derrubar e estabilizar, pode encaixar sub cedo. Probabilidade 37%.' },
      probabilities: { fighter1: { nome: 'Carpenter', percent: 37 }, fighter2: { nome: 'Ochoa', percent: 60 }, draw: 3 },
      conviction: {
        thesis: 'A tese é: Ochoa vence porque, primeiro, vem de Performance of the Night por KO sobre Durden em julho 2025, mostrando KO power real. Segundo, Carpenter vem de 2 derrotas seguidas e bottom defense questionada (Filho sub R1). Terceiro, momentum esmagador a favor do mexicano. Caminho: manter em pé, usar volume + KO power, decisão ou KO. Desmorona se Carpenter encaixar sub cedo.',
        conviction_score: 6,
        conviction_rationale: 'Convicção 6 porque é luta de calibre baixo entre lutadores em recuperação/alta moderada. Variance alta.',
        conviction_breakers: ['Carpenter encaixa sub cedo', 'Ochoa cardio falhar', 'Carpenter recuperar confidence pós 2 derrotas', 'Volume cumulativo do Carpenter virar a luta'],
        underdog_path: {
          viable: true, probability_estimate: 37,
          key_scenario: 'Carpenter derruba nos primeiros 2 minutos, busca finalização imediata. Sub R1.',
          required_conditions: ['Derrubar cedo', 'Finalizar antes de exchange em pé', 'Cardio aguentar', 'Recuperar confidence'],
          historical_precedent: 'Carpenter tem 5 subs em 8 vitórias. Mas Ochoa não foi sub na carreira UFC.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Jose Ochoa', odds: '-185', reasoning: 'Probabilidade real 60%, implícita -185 = 65%. Sem grande edge.' },
          { type: 'Método', pick: 'Ochoa por KO/TKO', odds: '+200 (estimado)', reasoning: 'Ochoa 50% KO + Carpenter chin question. Probabilidade real 30-35%, edge em +200.' },
        ],
        best_bet: { pick: 'Ochoa por KO/TKO em +200', reasoning: 'Mexicano com KO recente e Carpenter exposto.' },
      },
      key_stats: [
        { value: '2', label: 'Derrotas seguidas do Carpenter', sublabel: 'Ulanbekov UD e Filho sub R1.' },
        { value: 'PotN', label: 'Performance of the Night do Ochoa em 2025', sublabel: 'KO sobre Cody Durden no R2.' },
        { value: '50%', label: 'Vitórias do Ochoa por KO/TKO', sublabel: '4 em 8. Mexicano com poder.' },
        { value: '63%', label: 'Vitórias do Carpenter por sub', sublabel: 'Sub specialist mas bottom defense fraca.' },
      ],
      odds: {
        fighter1_odds: '+155', fighter2_odds: '-185',
        fighter1_name: 'Carpenter', fighter2_name: 'Ochoa',
        source: 'DraftKings/FanDuel Ochoa -185 / Carpenter +155 em maio de 2026.',
      },
      armadilha: {
        titulo: 'Armadilha: Carpenter por Sub Específica',
        descricao: 'Mercado pode pagar Carpenter por sub baseado nos 5 subs UFC. Mas Ochoa não foi finalizado em UFC e Carpenter foi recentemente sub R1 pelo Filho. Bottom defense questionada do americano sustenta que sub específica é cenário difícil.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'carpenter-vs-ochoa');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
