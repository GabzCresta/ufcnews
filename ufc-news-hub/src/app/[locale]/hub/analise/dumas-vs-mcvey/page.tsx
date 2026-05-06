import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'dumas-vs-mcvey',
  evento_id: null,
  slug: 'dumas-vs-mcvey',
  titulo: 'Dumas vs McVey: A Luta de Necessidade',
  subtitulo:
    'Sedriques Dumas em três derrotas nas últimas quatro, vindo de finalização por guilhotina. Jackson McVey perdeu as duas estreias UFC por submissão. Encontro de dois lutadores que precisam vencer para manter vaga.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,88m', envergadura: '196cm', idade: 29, academia: 'MMA Masters' },
      fighter2: { altura: '1,91m', envergadura: '193cm', idade: 27, academia: 'Xtreme Couture' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão Unânime ou TKO tardio',
    confidence: 'BAIXA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Sedriques Dumas', record: '10-4-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  fighter2_info: { nome: 'Jackson McVey', apelido: 'The Moose', record: '6-2-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  categoria_peso: 'Peso-Médio (185 lbs)',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Sterling vs Zalal',
      evento_data: '25 de Abril, 2026',
      evento_local: 'Meta APEX, Las Vegas, Nevada',
      categoria_peso: 'Peso-Médio (185 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'A Luta de Necessidade',
      tagline_sub: 'Dois em baixa, ambos precisam da vitória. Quem errar menos vence.',
      fighter1: { nome_completo: 'Sedriques Dumas', apelido: '', sobrenome: 'Dumas', record: '10-4-0', ranking: 'Sem ranking no top 15', info_extra: 'Estados Unidos | 29 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-10/DUMAS_SEDRIQUES_L_04-12.png?itok=lTMUvUKq' },
      fighter2: { nome_completo: 'Jackson "The Moose" McVey', apelido: 'The Moose', sobrenome: 'McVey', record: '6-2-0', ranking: 'Sem ranking no top 15', info_extra: 'Estados Unidos | 27 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/MCVEY_JACKSON_L_04-25.png?itok=LNUDMAHK' },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Quem Erra Menos Vence',
      insight:
        'É luta de dois lutadores em baixa técnica simultânea. Dumas vem de três derrotas nas últimas quatro, incluindo finalização por guilhotina contra Donte Johnson em novembro. McVey perdeu as duas estreias UFC por submissão, armbar e outra. Ambos precisam vencer para não serem cortados. A ressalva de calibre vale: nenhum dos dois enfrentou top 15 recentemente, o que significa que stats de ambos vêm de contexto médio-baixo da divisão. Dumas tem mais experiência UFC (5 lutas contra 2), e esse é o único diferencial técnico verificável.',
      tension: {
        truth_a: 'Dumas tem variedade técnica maior, jogo de wrestling e striking em distância, 5 lutas UFC de rodagem. Experiência contra quem já passou por adversidade UFC é real.',
        truth_b: 'McVey tem 2 anos de vantagem física e perder por submissão em duas estreias pode ter refinado a defesa. Joven, faminto, em luta de must-win.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Sedriques Dumas', color: 'red', momentum_score: 3, momentum_label: 'Em Queda', momentum_trend: 'descending',
        momentum_note: 'Duas derrotas nas últimas três (Johnson por guilhotina em novembro, Oleksiejczuk por TKO em abril no UFC 314), com no contest intercalado contra Zachary Reese por foul acidental em setembro. A última vitória válida foi contra Denis Tiuliulin por decisão em agosto de 2024. Sub defense e defesa em pé em erosão simultânea.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Donte Johnson', result: 'L', method: 'Submissão (guilhotina) R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Guilhotina no R2. Sub defense fraca.' },
          { date: 'Set 2025', opponent: 'Zachary Reese', result: 'D', method: 'No Contest (foul R1)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'No contest no Noche UFC por foul acidental aos 0:51 do R1.' },
          { date: 'Abr 2025', opponent: 'Michal Oleksiejczuk', result: 'L', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Parado por strikes no R1 no UFC 314.' },
          { date: 'Ago 2024', opponent: 'Denis Tiuliulin', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Decisão em três rounds no UFC on ABC. Última vitória.' },
          { date: 'Mar 2024', opponent: 'Nursulton Ruziboev', result: 'L', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Parado por strikes no R1. Início da sequência ruim.' },
        ],
      },
      fighter2: {
        nome: 'Jackson McVey', color: 'blue', momentum_score: 3, momentum_label: 'Em Queda', momentum_trend: 'descending',
        momentum_note: '0-2 no UFC, ambas por submissão. Debutou em julho de 2025 finalizado por Brunno Ferreira em armbar no R1, e em setembro foi submetido por Zachary Reese em catchweight no R2. Grappling defense em nível UFC é o teste central da carreira dele agora.',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Zachary Reese', result: 'L', method: 'Submissão R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Finalizado por Reese em catchweight no R2.' },
          { date: 'Jul 2025', opponent: 'Brunno Ferreira', result: 'L', method: 'Submissão (armbar) R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Armbar no R1 no UFC 318. Debut derrotado rapidamente.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Dumas', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '1V-3D (últimas 4 UFC)', contra_top5: '0V-0D' },
      fighter2: { nome: 'McVey', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '0V-2D UFC', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Nenhum oponente em comum. Ambos vêm de adversários fora do top 15. Calibre similar, ambos sem testes em elite.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.6, valueB: 2.4, maxVal: 6, format: 'decimal', note: 'Dumas tem volume em pé ligeiramente superior.' },
        { label: 'Sig. Strikes Absorvidos/Min', valueA: 3.8, valueB: 4.2, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Ambos absorvem muito. Defesa porosa dos dois lados.' },
        { label: 'Takedowns por 15 Min', valueA: 1.8, valueB: 1.2, maxVal: 5, format: 'decimal', note: 'Dumas mais ativo em wrestling.' },
        { label: 'Defesa de Submissão (%)', valueA: 55, valueB: 45, maxVal: 100, format: 'percent', note: 'Ambos já foram finalizados recentemente. Sub defense frágil.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '29 anos', fighter2: '27 anos', note: 'McVey 2 anos mais jovem.' },
        { label: 'Altura', fighter1: '1,88m', fighter2: '1,91m', note: 'McVey 3 cm mais alto.' },
        { label: 'Envergadura', fighter1: '196cm', fighter2: '193cm', note: 'Dumas 3 cm de alcance a mais.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'MMA Masters', fighter2: 'Xtreme Couture', note: null },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Pé', advantage: 'fighter1', gap: 2, note: 'Dumas com mais experiência UFC em pé.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter1', gap: 2, note: 'Dumas tenta mais takedowns.' },
        { label: 'Defesa de Submissão', advantage: 'fighter1', gap: 1, note: 'Nenhum dos dois defende bem. McVey foi finalizado duas vezes em estreia.' },
        { label: 'Poder de Nocaute', advantage: 'even', gap: 0, note: 'Poder mediano dos dois lados.' },
        { label: 'Experiência UFC', advantage: 'fighter1', gap: 3, note: 'Dumas 5 lutas UFC contra 2 de McVey.' },
        { label: 'Urgência (must-win)', advantage: 'even', gap: 0, note: 'Ambos precisam vencer pra manter vaga.' },
      ],
      summary: 'Dumas tem vantagem técnica e experiência. McVey tem juventude. Gap pequeno em todas as dimensões, luta decidida por quem errar menos.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Dumas', ko_tko: { count: 4, percent: 40 }, submission: { count: 2, percent: 20 }, decision: { count: 4, percent: 40 }, total_wins: 10 },
      fighter2: { nome: 'McVey', ko_tko: { count: 3, percent: 50 }, submission: { count: 2, percent: 33 }, decision: { count: 1, percent: 17 }, total_wins: 6 },
      insight: 'Distribuição parecida. McVey finaliza mais no regional, Dumas tem mais decisões sinalizando que estende quando não finaliza cedo.',
    },

    previsao_final: {
      winner_name: 'Sedriques Dumas', winner_side: 'fighter1',
      predicted_method: 'Decisão Unânime ou TKO tardio', confidence_score: 5, confidence_label: 'BAIXA',
      explanation:
        'A análise aponta Dumas com convicção baixa. Luta entre dois lutadores em má fase, ambos com derrotas recentes por finalização. Dumas tem vantagem de experiência UFC (5 contra 2), técnica mais variada, e histórico mais consistente no regional. McVey foi finalizado em ambas as estreias UFC, sinal preocupante de defesa de BJJ em nível UFC. O caminho é Dumas trabalhar volume em pé, forçar clinch, buscar decisão ou TKO tardio. Convicção 5 porque nenhum dos dois é confiável no momento atual e qualquer erro técnico pode virar a luta.',
      x_factor: {
        title: 'A pressão do must-win',
        description: 'Ambos precisam vencer para não serem cortados. Quem absorver melhor essa pressão vence. McVey é mais jovem mas menos experiente em adversidade UFC.',
      },
      upset_alert: {
        title: 'McVey encontra uma submissão',
        description: 'McVey tem 2 submissões em 6 vitórias no regional. Se Dumas, que foi finalizado há seis meses, cair em transição de solo, a luta termina no R1 ou R2.',
      },
      probabilities: { fighter1: { nome: 'Dumas', percent: 55 }, fighter2: { nome: 'McVey', percent: 42 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Sedriques Dumas vence porque, primeiro, tem 5 lutas UFC de experiência contra 2 de McVey, diferencial real em jogo mental de must-win. Segundo, a variedade técnica é superior, com jogo de wrestling e striking em distância enquanto McVey é mais unidimensional. Terceiro, McVey foi finalizado em ambas as estreias UFC, padrão que Dumas pode explorar se a luta for ao chão. Desmorona se Dumas cair em outra transição de solo ruim (padrão que acabou de acontecer contra Johnson) ou se McVey usar juventude pra estender ritmo e vencer no cartão.',
        conviction_score: 5,
        conviction_rationale: 'Convicção 5 porque o gap técnico é pequeno e ambos estão em má fase. A experiência UFC de Dumas é o diferencial mais tangível, mas não suficiente pra convicção alta.',
        conviction_breakers: [
          'Dumas cair em outra guilhotina ou armbar em transição precipitada',
          'McVey usar juventude física pra ganhar no ritmo de três rounds',
          'Decisão dividida invertida contra Dumas como aconteceu no passado',
        ],
        underdog_path: {
          viable: true, probability_estimate: 42,
          key_scenario: 'McVey mantém distância em pé, usa os 3 cm de altura a mais, trabalha jab e evita clinch. Ganha no ritmo de três rounds. Alternativa: encontra uma das submissões do regional em scramble.',
          required_conditions: ['Evitar clinch prolongado', 'Trabalhar volume em pé', 'Defender wrestling ofensivo de Dumas', 'Estender pra três rounds'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline (Contrarian)', pick: 'Sedriques Dumas', odds: '+130', reasoning: 'Pick contrária ao mercado. O mercado precifica McVey em -150 pela juventude e sequência no regional, mas a leitura aponta Dumas pela experiência UFC (5 lutas contra 2) e variedade técnica. +130 paga 2,3 em tese de baixa convicção, valor relativo se a tese se sustentar.' },
          { type: 'Rounds', pick: 'Passa de 1,5 rounds', odds: '-180', reasoning: 'Nenhum dos dois é finalizador explosivo em pé. Luta tende a estender além do R1.' },
        ],
        best_bet: { pick: 'Pular o moneyline, ir em Passa de 1,5 rounds em -180', reasoning: 'Convicção 5 não sustenta moneyline pesado. O prop de duração é mais defensável que qualquer pick de lado. Se vai forçar lado, Dumas +130 é a pick contrária ao mercado, não o favorito -150.' },
      },
      key_stats: [
        { value: '0-2', label: 'Record UFC de McVey', sublabel: 'Ambas as derrotas por submissão. Sub defense em teste.' },
        { value: '1-3', label: 'Últimas 4 UFC de Dumas', sublabel: 'Em má fase, precisa vencer.' },
        { value: '5', label: 'Lutas UFC de Dumas', sublabel: 'Experiência como único diferencial tangível.' },
      ],
      odds: { fighter1_odds: '+130', fighter2_odds: '-150', fighter1_name: 'Dumas', fighter2_name: 'McVey', source: 'bet365 e DraftKings em abril de 2026. McVey leve favorito pela juventude e momentum regional.' },
      armadilha: {
        titulo: 'Armadilha: McVey ML em -150',
        descricao: 'O mercado precifica McVey em -150 porque ele é mais jovem e vem de sequência no regional, mas ignora que ele foi finalizado nas duas estreias UFC. Dumas tem 5 lutas UFC, sabe o ritmo da divisão, e a vantagem de experiência é real em luta de must-win. Se você acredita na leitura, o valor está em Dumas +130, não em McVey -150.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'dumas-vs-mcvey');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
