import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'miller-vs-gordon',
  evento_id: null,
  slug: 'miller-vs-gordon',
  titulo: 'Miller vs Gordon: A 47ª Luta na UFC',
  subtitulo:
    'Miller chega para sua 47ª luta no UFC, recordista all-time da promoção, em casa em Nova Jersey. 42 anos com 17 vitórias no peso leve UFC (recorde) e 13 finalizações UFC (2ª maior da história). Gordon, 37 anos, tomou TKO recente do Rafa Garcia. Veterano dono da casa contra journeyman durável.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,77m', envergadura: '180cm', idade: 42, academia: 'AMA Fight Club, Nova Jersey' },
      fighter2: { altura: '1,73m', envergadura: '180cm', idade: 37, academia: 'Tiger Schulmann\'s MMA' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão ou submissão tardia',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Jim Miller',
    apelido: 'A-10',
    record: '38-19-0',
    ranking: 'N/R Peso Leve',
    ultimasLutas: [
      { result: 'L', opponent: 'Chase Hooper', method: 'Decisão Unânime', event: 'UFC 314' },
      { result: 'W', opponent: 'Damon Jackson', method: 'Sub R1 (guilhotina)', event: 'UFC 309' },
      { result: 'W', opponent: 'Vinc Pichel', method: 'Sub R1', event: 'UFC Fight Night 244' },
    ],
  },
  fighter2_info: {
    nome: 'Jared Gordon',
    apelido: 'Flash',
    record: '21-8-0',
    ranking: 'N/R Peso Leve',
    ultimasLutas: [
      { result: 'L', opponent: 'Rafa Garcia', method: 'TKO R3', event: 'UFC Fight Night 259' },
      { result: 'W', opponent: 'Thiago Moises', method: 'KO R1', event: 'UFC Fight Night 256' },
      { result: 'L', opponent: 'Diego Ferreira', method: 'Decisão Unânime', event: 'UFC Fight Night 247' },
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
      tagline: 'A 47ª Luta na UFC',
      tagline_sub: 'Miller estende recorde all-time. 42 anos, em casa em Newark, 13 finalizações UFC (2ª maior da história). Gordon 37 anos com TKO sofrido recente. Lenda contra journeyman.',
      fighter1: {
        nome_completo: 'Jim "A-10" Miller',
        apelido: 'A-10',
        sobrenome: 'Miller',
        record: '38-19-0',
        ranking: 'N/R Peso Leve',
        info_extra: 'Sparta, Nova Jersey | 42 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-04/MILLER_JIM_L_04-12.png?itok=tti4mGLi',
      },
      fighter2: {
        nome_completo: 'Jared "Flash" Gordon',
        apelido: 'Flash',
        sobrenome: 'Gordon',
        record: '21-8-0',
        ranking: 'N/R Peso Leve',
        info_extra: 'Queens, Nova York | 37 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-05/GORDON_JARED_L_05-17.png?itok=7BoiGI72',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'Miller Em Casa, Lenda Estende o Recorde',
      insight:
        'Miller chega à 47ª luta no UFC (recorde all-time da promoção) em casa em Nova Jersey, com 38-19 carreira (27-18 UFC), 17 vitórias no peso leve UFC (recorde) e 13 finalizações UFC (2ª maior da história, atrás apenas do Charles Oliveira). 42 anos mas vem de finalização recente sobre Damon Jackson por guilhotina no R1 em UFC 309 (novembro de 2024). Gordon é o journeyman durável de 37 anos, 21-8 carreira (9-7 UFC), tomou TKO no R3 contra Rafa Garcia em setembro de 2025 mas antes disso tinha vindo de KO no Moises. Mesmo idade próxima (5 anos de diferença), Miller tem o histórico, a casa e o BJJ pra encaixar mais uma finalização.',
    },

    momento_atual: {
      fighter1: {
        nome: 'Jim Miller', color: 'red', momentum_score: 6, momentum_label: 'Estável (com ressalvas)', momentum_trend: 'stable',
        momentum_note: '47ª luta UFC. Vem de UD sofrida pro Chase Hooper em UFC 314 (abril de 2025). Antes finalizou Damon Jackson por guilhotina no R1 em UFC 309 (novembro de 2024). 42 anos, 38-19 carreira, BJJ faixa-preta. Treina no AMA Fight Club em Nova Jersey.',
        recent_fights: [
          { date: 'Abr 2025', opponent: 'Chase Hooper', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD em UFC 314.' },
          { date: 'Nov 2024', opponent: 'Damon Jackson', result: 'W', method: 'Sub R1 (guilhotina)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Guilhotina no R1.' },
          { date: 'Jul 2024', opponent: 'Vinc Pichel', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Sub no R1.' },
          { date: 'Abr 2024', opponent: 'Bobby King Green', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD pro Green em UFC 300.' },
          { date: 'Set 2023', opponent: 'Gabriel Benitez', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Sub no R1.' },
        ],
      },
      fighter2: {
        nome: 'Jared Gordon', color: 'blue', momentum_score: 5, momentum_label: 'Estável (com ressalvas)', momentum_trend: 'stable',
        momentum_note: 'Vem de TKO sofrido pro Rafa Garcia no R3 em UFC Fight Night 259 (setembro de 2025). Antes disso, KO sobre Thiago Moises em UFC FN 256 (maio de 2025). 21-8 carreira, 9-7 UFC, durable journeyman.',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Rafa Garcia', result: 'L', method: 'TKO R3', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'TKO no R3.' },
          { date: 'Mai 2025', opponent: 'Thiago Moises', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'KO no R1.' },
          { date: 'Mar 2025', opponent: 'Diego Ferreira', result: 'L', method: 'Decisão Unânime', opponent_rank: 'Top 15 Peso Leve', quality_score: 3, quality_label: 'Bom', note: 'UD em 3 rounds.' },
          { date: 'Out 2024', opponent: 'Jim Miller', result: 'W', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Histórico de revanche.' },
          { date: 'Mai 2024', opponent: 'Mark Madsen', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD em 3 rounds.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Miller', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-0D' },
      fighter2: { nome: 'Gordon', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: 'Já se enfrentaram antes em outubro de 2024: Gordon venceu Miller por decisão dividida. Revanche na 47ª luta de Miller no UFC. Calibre similar entre os dois com perfil de journeyman lateral.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.4, valueB: 4.0, maxVal: 7, format: 'decimal', note: 'Gordon volume superior em pé.' },
        { label: 'Precisão de Strikes (%)', valueA: 45, valueB: 48, maxVal: 100, format: 'percent', note: 'Equilibrado.' },
        { label: 'Strikes Absorvidos/Min', valueA: 4.0, valueB: 4.5, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Equilibrado, Miller leve vantagem.' },
        { label: 'Defesa de Strikes (%)', valueA: 55, valueB: 50, maxVal: 100, format: 'percent', note: 'Miller leve vantagem.' },
        { label: 'Takedowns por 15 Min', valueA: 1.5, valueB: 2.5, maxVal: 5, format: 'decimal', note: 'Gordon mais wrestling ofensivo.' },
        { label: 'Submissões por 15 Min', valueA: 1.8, valueB: 0.5, maxVal: 3, format: 'decimal', note: 'Miller submission specialist.' },
        { label: 'Defesa de Takedown (%)', valueA: 65, valueB: 55, maxVal: 100, format: 'percent', note: 'Miller leve vantagem.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '42 anos', fighter2: '37 anos', note: 'Gordon 5 anos mais novo.' },
        { label: 'Altura', fighter1: '1,77m', fighter2: '1,73m', note: 'Miller 4 cm mais alto.' },
        { label: 'Envergadura', fighter1: '180 cm', fighter2: '180 cm', note: 'Empate.' },
        { label: 'Stance', fighter1: 'Canhoto', fighter2: 'Destro', note: 'Matchup canhoto vs destro.' },
        { label: 'Academia', fighter1: 'AMA Fight Club', fighter2: 'Tiger Schulmann\'s', note: 'Camp Nova Jersey vs camp Nova York.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Jogo de Chão / BJJ', advantage: 'fighter1', gap: 4, note: 'Miller faixa-preta com 13 subs UFC (2ª maior da história).' },
        { label: 'Volume / Boxe em Pé', advantage: 'fighter2', gap: 1, note: 'Gordon 4.0 SLpM vs 3.4 do Miller.' },
        { label: 'Fight IQ / Experiência', advantage: 'fighter1', gap: 3, note: 'Miller 47ª UFC, recorde all-time. Gordon 17ª UFC.' },
        { label: 'Wrestling', advantage: 'fighter2', gap: 1, note: 'Gordon mais wrestling ofensivo.' },
        { label: 'Cardio / 3 Rounds', advantage: 'even', gap: 0, note: 'Ambos provados em 3 rounds.' },
        { label: 'Casa / Mental', advantage: 'fighter1', gap: 2, note: 'Miller lutando em Newark, 47ª UFC, recorde a estender.' },
      ],
      summary: 'Miller domina onde a luta vai pro chão (BJJ, finalização). Gordon tem volume em pé e wrestling ofensivo. Pra Miller vencer, precisa puxar guarda ou impor scrambles.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Miller', ko_tko: { count: 7, percent: 18 }, submission: { count: 21, percent: 55 }, decision: { count: 10, percent: 27 }, total_wins: 38 },
      fighter2: { nome: 'Gordon', ko_tko: { count: 8, percent: 38 }, submission: { count: 2, percent: 10 }, decision: { count: 11, percent: 52 }, total_wins: 21 },
      insight: 'Miller finaliza 55% por sub (perfil clássico de jiu-jitseiro UFC, 13 subs UFC = 2ª maior da história). Gordon decide 52% das vitórias (11 em 21) — perfil de durable journeyman que vai pra cards. Os números sustentam a tese de Miller buscar o chão.',
    },

    previsao_final: {
      winner_name: 'Jim Miller',
      winner_side: 'fighter1',
      predicted_method: 'Decisão ou submissão tardia',
      confidence_score: 5,
      confidence_label: 'MÉDIA',
      explanation:
        'A pick é Jim Miller por decisão ou submissão tardia. Acredito que será uma luta parelha, mas vejo um caminho claro onde Miller ganha porque está em casa, vem de finalização recente e tem o BJJ pra explorar a defesa de finalização média do Gordon. Gordon tem caminho real (45%): venceu o Miller na primeira luta em outubro de 2024 por SD, tem volume superior em pé e 5 anos de juventude. Convicção 5 (MÉDIA) — luta de coinflip entre veteranos.',
      x_factor: { title: 'Miller Em Casa, 47ª Luta UFC', description: 'Newark é casa do Miller. 47ª UFC pra estender recorde. Crowd advantage real, scoring close fights pode pesar. Perfil de "lutador da casa em luta de cards" historicamente vence.' },
      upset_alert: { title: 'Gordon Vence Pela 2ª Vez', description: 'Gordon já venceu Miller em outubro de 2024 por SD. Tem o blueprint, 5 anos mais novo, vem de KO recente sobre Moises. Repetir é cenário de 45%.' },
      probabilities: { fighter1: { nome: 'Miller', percent: 52 }, fighter2: { nome: 'Gordon', percent: 45 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Jim Miller vence porque, primeiro, está em casa em Newark na 47ª UFC (recorde all-time), narrativa que historicamente joga a favor do veterano local em decisões apertadas. Segundo, vem de finalização recente sobre Damon Jackson por guilhotina no R1 em UFC 309, mostrando que o BJJ ainda finaliza aos 42. Terceiro, 13 finalizações UFC (2ª maior da história) contra Gordon que não é grappler de elite. Caminho da vitória: guilhotina ou D\'Arce em scramble do R1-R2, ou cards 30-27 pelo trabalho do veterano. Desmorona se Gordon repetir o blueprint da primeira luta (volume em pé, distância) e vencer SD novamente.',
        conviction_score: 5,
        conviction_rationale: 'Convicção 5 porque é luta de coinflip entre veteranos com Gordon já tendo vencido a primeira luta. Acredito que Miller vence pela casa + BJJ + finalização recente, mas é luta parelha.',
        conviction_breakers: [
          'Gordon repetir blueprint da primeira luta (SD em outubro 2024)',
          'Idade 42 do Miller pesar contra um lutador 5 anos mais novo',
          'Gordon manter distância e impedir scrambles',
          'Cardio do Miller falhar no R3',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 45,
          key_scenario: 'Gordon mantém distância em pé, evita clinch e scrambles do Miller. Acumula volume com volume superior (4.0 SLpM vs 3.4). Cards 29-28 ou 30-27.',
          required_conditions: [
            'Sprawl tentativas de queda do Miller',
            'Manter distância em pé',
            'Aproveitar 5 anos de juventude pra cardio',
            'Volume cumulativo nos 3 rounds',
          ],
          historical_precedent: 'Gordon venceu Miller em outubro de 2024 por SD. Precedente direto existe. Pra Miller reverter, precisa de algo diferente desta vez (BJJ mais agressivo, casa).',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Jim Miller', odds: '-130 (estimado)', reasoning: 'Probabilidade real 52%, implícita -130 = 56.5%. Sem grande edge.' },
          { type: 'Método', pick: 'Miller por Submission', odds: '+300 (estimado)', reasoning: 'Miller 13 subs UFC (2ª maior all-time). Vem de guilhotina sobre Jackson. Probabilidade real 25-30%, edge real em +300.' },
          { type: 'Total Rounds', pick: 'Passa de 2,5 rounds (Over)', odds: '-150 (estimado)', reasoning: 'Ambos veteranos durables, 5 dos últimos 8 entre os dois foram a decisão.' },
        ],
        best_bet: { pick: 'Miller por Submissão em +300', reasoning: 'Maior edge esperado da luta. Miller tem perfil específico de finalização UFC (13 subs all-time #2) e Gordon não é grappler-defense de elite.' },
      },
      key_stats: [
        { value: '47ª', label: 'Luta de Miller no UFC, recorde all-time', sublabel: 'Estende o recorde da promoção, 38-19 carreira.' },
        { value: '13', label: 'Finalizações de Miller no UFC', sublabel: '2ª maior da história, atrás apenas do Charles Oliveira.' },
        { value: '17', label: 'Vitórias de Miller no peso leve UFC', sublabel: 'Recorde da divisão.' },
        { value: 'SD', label: 'Resultado da primeira luta entre os dois', sublabel: 'Gordon venceu em outubro de 2024 por decisão dividida.' },
      ],
      odds: {
        fighter1_odds: '-130',
        fighter2_odds: '+110',
        fighter1_name: 'Miller',
        fighter2_name: 'Gordon',
        source: 'DraftKings/FanDuel Miller -130 / Gordon +110 em abril de 2026 (estimado). Linha próxima de pickem.',
      },
      armadilha: {
        titulo: 'Armadilha: Gordon Vence Igual da Primeira',
        descricao: 'O mercado pode pagar Gordon como "venceu antes, vence de novo" baseado no SD de 2024. Mas Miller tá em casa, vem de finalização recente, e revanches em luta de veteranos historicamente favorecem o lutador que entra com algo a provar (lenda em casa pela 47ª luta).',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'miller-vs-gordon');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
