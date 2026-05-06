import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'suarez-vs-godinez',
  evento_id: null,
  slug: 'suarez-vs-godinez',
  titulo: 'Suarez vs Godinez: A Eliminatória Pelo Cinturão',
  subtitulo:
    'Tatiana Suarez é a #2 do ranking, vem de uma vitória de bouncing back após a derrota para Zhang Weili. Loopy Godinez quer o título depois de empilhar vitórias. A vencedora encara a campeã.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,63m', envergadura: '163cm', idade: 35, academia: 'Millennia MMA, Califórnia' },
      fighter2: { altura: '1,55m', envergadura: '160cm', idade: 32, academia: 'Toshido Fight Club, Vancouver' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão Unânime ou Submissão R2',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Tatiana Suarez',
    apelido: 'Tatiana',
    record: '12-1-0',
    ranking: '#2 Peso Palha',
    ultimasLutas: [
      { result: 'W', opponent: 'Amanda Lemos', method: 'Decisão Unânime', event: 'UFC Fight Night 259' },
      { result: 'L', opponent: 'Zhang Weili', method: 'Decisão Unânime (título)', event: 'UFC 312' },
      { result: 'W', opponent: 'Jessica Andrade', method: 'TKO R2', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Loopy Godinez',
    apelido: 'Loopy',
    record: '14-5-0',
    ranking: '#6 Peso Palha',
    ultimasLutas: [
      { result: 'W', opponent: 'Jessica Andrade', method: 'Decisão Unânime', event: 'UFC 319' },
      { result: 'W', opponent: 'Julia Polastri', method: 'Decisão Unânime', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Virna Jandiroba', method: 'Decisão Unânime', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC 327: Procházka vs Ulberg',
  evento_data: '11 de Abril, 2026',
  evento_local: 'Kaseya Center, Miami, Flórida',
  categoria_peso: 'Peso Palha (115 lbs)',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC 327: Procházka vs Ulberg',
      evento_data: '11 de Abril, 2026',
      evento_local: 'Kaseya Center, Miami, Flórida',
      categoria_peso: 'Peso Palha (115 lbs)',
      num_rounds: 3,
      titulo_em_jogo: 'Eliminatória Implícita',
      tagline: 'A Eliminatória Pelo Cinturão',
      tagline_sub:
        'Tatiana Suarez tem o melhor wrestling do peso palha. Loopy Godinez não tem como neutralizar. A vencedora encara Weili.',
      fighter1: {
        nome_completo: 'Tatiana Suarez',
        apelido: 'Tatiana',
        sobrenome: 'Suarez',
        record: '12-1-0',
        ranking: '#2 Peso Palha',
        info_extra: 'Covina, Califórnia | 35 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-09%2FSUAREZ_TATIANA_L_09-13.png%3Fitok%3D6sJfAeTB',
      },
      fighter2: {
        nome_completo: 'Lupita "Loopy" Godinez',
        apelido: 'Loopy',
        sobrenome: 'Godinez',
        record: '14-5-0',
        ranking: '#6 Peso Palha',
        info_extra: 'Veracruz, México | 32 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-03%2FGODINEZ_LOOPY_L_03-29.png%3Fitok%3D6FJpGfrw',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'O Wrestling Olímpico Decide',
      insight:
        'Tatiana Suarez é a #2 do ranking dos peso palha por uma razão simples: ela tem o melhor wrestling da divisão inteira. Foi vice-campeã do mundial júnior de 2007, ganhou ouro no Pan-Americano de 2008, e foi nomeada Lutadora de Wrestling do Ensino Médio do Ano duas vezes consecutivas (a primeira a receber o prêmio duas vezes na história). No UFC, ela tem 8-1 com a única derrota sendo contra a campeã Zhang Weili em fevereiro de 2025. Loopy Godinez é a #6 do ranking, vem de duas vitórias seguidas (incluindo Andrade) e tem ambição declarada pelo cinturão. Mas o histórico mostra um padrão consistente: Loopy perde quando o adversário tem vantagem de wrestling. Suarez não tem só vantagem, tem dominância absoluta.',
      tension: {
        truth_a:
          'Loopy Godinez vem de quatro vitórias nas últimas cinco lutas, incluindo o triunfo sobre a ex-campeã Jessica Andrade no UFC 319. Em 2023 quebrou o recorde de quatro vitórias em um ano por uma mulher na história do UFC. Está em forma máxima.',
        truth_b:
          'Suarez foi vice-campeã do mundial de wrestling, vence por finalização ou top control 90 por cento das vezes que entra no octógono, e Loopy tem zero defesa documentada contra wrestling de elite olímpico. As três derrotas anteriores da Loopy vieram contra adversárias com vantagem de grappling.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Tatiana Suarez',
        color: 'red',
        recent_fights: [
          {
            date: 'Set 2025',
            opponent: 'Amanda Lemos',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: '#7 SW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC Fight Night 259. Bouncing back após a derrota para Weili. Controlou Lemos no chão por três rounds inteiros.',
          },
          {
            date: 'Fev 2025',
            opponent: 'Zhang Weili',
            result: 'L',
            method: 'Decisão Unânime',
            opponent_rank: 'Campeã',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'UFC 312. Disputa pelo título. Primeira derrota da carreira inteira. Weili neutralizou as quedas com defesa de takedown excepcional.',
          },
          {
            date: 'Ago 2024',
            opponent: 'Jessica Andrade',
            result: 'W',
            method: 'TKO R2',
            opponent_rank: '#5 SW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Finalização técnica sobre uma ex-campeã. Statement absoluto antes do título shot.',
          },
          {
            date: 'Fev 2024',
            opponent: 'Jessica Eye',
            result: 'W',
            method: 'TKO R1',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Vitória rápida para retornar após longa lesão. Mostrou que estava em forma.',
          },
        ],
        momentum_score: 8,
        momentum_label: 'Em Alta (com derrota recente)',
        momentum_trend: 'ascending',
        momentum_note:
          'Suarez é a #2 do mundo nos peso palha por wrestling absurdo. A única derrota da carreira foi contra a campeã Zhang Weili, e mesmo nessa luta ela competiu até o final. A vitória sobre Lemos em setembro mostrou que o bouncing back foi imediato. Aos 35 anos, ainda tem o motor para impor wrestling por três rounds inteiros, e essa luta é eliminatória implícita pela próxima chance ao título.',
      },
      fighter2: {
        nome: 'Loopy Godinez',
        color: 'blue',
        recent_fights: [
          {
            date: 'Ago 2025',
            opponent: 'Jessica Andrade',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: '#5 SW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC 319. Maior vitória da carreira. Venceu a ex-campeã por decisão impondo volume e ritmo.',
          },
          {
            date: 'Mar 2025',
            opponent: 'Julia Polastri',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Vitória técnica sobre uma adversária dura. Continuou a sequência de bouncing back.',
          },
          {
            date: 'Set 2024',
            opponent: 'Virna Jandiroba',
            result: 'L',
            method: 'Decisão Unânime',
            opponent_rank: '#9 SW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Última derrota, contra uma adversária com BJJ superior. Padrão se repete: cede para grappling de elite.',
          },
          {
            date: 'Mai 2024',
            opponent: 'Marina Rodriguez',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: '#10 SW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Vitória técnica sobre a brasileira. Mostrou capacidade de competir com top 10.',
          },
        ],
        momentum_score: 8,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note:
          'Loopy Godinez está em uma das melhores fases da carreira. Quatro vitórias nas últimas cinco lutas, incluindo o triunfo sobre Jessica Andrade no UFC 319 (a maior da carreira). Em 2023 estabeleceu o recorde de mais vitórias em um ano por uma mulher na história do UFC (quatro). Mas o padrão das derrotas é consistente: ela cede quando enfrenta uma adversária com vantagem de grappling. Suarez é a maior dessas adversárias possíveis.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Tatiana Suarez',
        media_oponentes: 4,
        media_oponentes_label: 'Muito Bom',
        aproveitamento: '8V-1D (89%)',
        contra_top5: '2V-1D',
      },
      fighter2: {
        nome: 'Loopy Godinez',
        media_oponentes: 3,
        media_oponentes_label: 'Bom',
        aproveitamento: '11V-5D (69%)',
        contra_top5: '1V-1D',
      },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note:
        'Ambas enfrentaram Jessica Andrade. Suarez finalizou Andrade por TKO no R2 (agosto 2024). Godinez venceu Andrade por decisão unânime (agosto 2025). Resultado favorece Suarez claramente em qualidade do método: finalização vs decisão.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.2, valueB: 4.5, maxVal: 6, format: 'decimal', note: 'Loopy é mais ofensiva no striking puro' },
        { label: 'Precisão de Strikes (%)', valueA: 50, valueB: 47, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.8, valueB: 4.0, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 62, valueB: 55, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 4.8, valueB: 1.0, maxVal: 6, format: 'decimal', note: 'Disparidade gigante em wrestling ofensivo' },
        { label: 'Precisão de Takedown (%)', valueA: 67, valueB: 38, maxVal: 100, format: 'percent' },
        { label: 'Defesa de Takedown (%)', valueA: 80, valueB: 50, maxVal: 100, format: 'percent', note: 'TDD da Loopy é o ponto fraco mais documentado da carreira' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '35 anos', fighter2: '32 anos' },
        { label: 'Altura', fighter1: '1,63m', fighter2: '1,55m' },
        { label: 'Envergadura', fighter1: '163cm', fighter2: '160cm' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox' },
        { label: 'Academia', fighter1: 'Millennia MMA', fighter2: 'Toshido Fight Club' },
        { label: 'Experiência UFC', fighter1: '9 lutas', fighter2: '14 lutas' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter2',
          gap: 2,
          note: 'Loopy é mais ofensiva no volume e precisão técnica em pé. Suarez nunca foi striker primária.',
        },
        {
          label: 'Striking em Curta Distância',
          advantage: 'even',
          gap: 0,
          note: 'No clinch ambas têm boxe sujo decente. É território neutro.',
        },
        {
          label: 'Wrestling Ofensivo',
          advantage: 'fighter1',
          gap: 5,
          note: 'Vice-campeã mundial júnior de 2007, ouro no Pan-Americano 2008. Disparidade absoluta.',
        },
        {
          label: 'Defesa de Wrestling',
          advantage: 'fighter1',
          gap: 4,
          note: 'TDD de Suarez é 80 por cento. Loopy está em 50 por cento e perde sempre que enfrenta wrestler de elite.',
        },
        {
          label: 'Submissões',
          advantage: 'fighter1',
          gap: 3,
          note: 'Suarez tem submissões na carreira. Loopy nunca venceu por finalização no UFC.',
        },
        {
          label: 'Cardio (3 rounds)',
          advantage: 'fighter2',
          gap: 1,
          note: 'Loopy tem motor de pressão constante. Suarez é mais econômica mas eficiente.',
        },
      ],
      summary:
        'Suarez vence se conseguir impor o wrestling nos primeiros minutos. Loopy vence se conseguir defender as primeiras quedas e controlar o striking por três rounds. A pergunta não é estilo, é se a TDD de 50 por cento da Loopy aguenta a melhor wrestler do peso palha.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Tatiana Suarez',
        ko_tko: { count: 2, percent: 17 },
        submission: { count: 5, percent: 42 },
        decision: { count: 5, percent: 42 },
        total_wins: 12,
      },
      fighter2: {
        nome: 'Loopy Godinez',
        ko_tko: { count: 1, percent: 7 },
        submission: { count: 2, percent: 14 },
        decision: { count: 11, percent: 79 },
        total_wins: 14,
      },
      insight:
        'Diferença absoluta em estilo. Suarez vence 58 por cento das vezes por finalização (5 submissões e 2 KO em 12 vitórias). Loopy vence 79 por cento por decisão (11 em 14) e tem apenas uma vitória por KO e duas por submissão na carreira inteira. Suarez busca o finish, Loopy busca os cards dos juízes.',
    },

    previsao_final: {
      winner_name: 'Tatiana Suarez',
      winner_side: 'fighter1',
      predicted_method: 'Decisão Unânime ou Submissão R2',
      confidence_score: 7,
      confidence_label: 'MÉDIA-ALTA',
      explanation:
        'Esta é uma luta com diferença estrutural massiva em wrestling. Tatiana Suarez foi vice-campeã do mundial júnior de wrestling em 2007 e tem 80 por cento de defesa de takedown na carreira UFC. Loopy Godinez tem 50 por cento de TDD e perdeu três vezes contra adversárias com vantagem de grappling. O cenário é: Suarez vai entrar para a queda nos primeiros minutos, vai conseguir, e vai administrar com top control por três rounds inteiros. O risco real é o cardio e o volume da Loopy se a luta ficar em pé por muito tempo, mas isso é um se gigante. A magnitude da vantagem estrutural justifica convicção 7.',
      x_factor: {
        title: 'O Primeiro Shot',
        description:
          'Suarez precisa conectar o primeiro takedown nos primeiros 90 segundos do R1. Se levar Loopy ao chão na primeira tentativa, a luta vira controle dominante. Se errar e a Loopy começar a impor volume em pé, a luta fica mais competitiva.',
      },
      upset_alert: {
        title: 'Loopy Por Decisão Em Pé',
        description:
          'Se Loopy conseguir defender as primeiras três tentativas de takedown e manter a luta em pé, o volume e a precisão técnica dela podem acumular pontos suficientes para vencer por decisão dividida. Não é provável, mas é o único caminho.',
      },
      probabilities: {
        fighter1: { nome: 'Suarez', percent: 70 },
        fighter2: { nome: 'Godinez', percent: 28 },
        draw: 2,
      },
      odds: {
        fighter1_odds: '-155',
        fighter2_odds: '+130',
        fighter1_name: 'Tatiana Suarez',
        fighter2_name: 'Loopy Godinez',
        source: 'Média de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Tatiana Suarez',
            odds: '-155',
            reasoning:
              'Linha justa para a disparidade estrutural de wrestling. Não é grande valor, mas é a aposta correta. A vantagem técnica é gritante.',
          },
          {
            type: 'Método',
            pick: 'Suarez por submissão',
            odds: '+200',
            reasoning:
              '42 por cento das vitórias da Suarez são por submissão (5 em 12). Se ela impuser top control nos rounds 2 e 3, a finalização é cenário provável dentro do contexto.',
          },
          {
            type: 'Como termina',
            pick: 'Suarez vence em qualquer método',
            odds: '-155',
            reasoning:
              'A combinação de wrestling absurdo e Loopy historicamente cedendo a grapplers torna a vitória de Suarez quase mecânica.',
          },
        ],
        best_bet: {
          pick: 'Suarez por submissão a +200',
          reasoning:
            'A melhor relação risco/recompensa. O wrestling de Suarez vai colocar ela em posição de finalização múltiplas vezes, e Loopy nunca defendeu submissão de elite.',
        },
      },
      key_stats: [
        {
          value: '80%',
          label: 'a defesa de takedown da Tatiana Suarez na carreira UFC',
          sublabel: 'Top 3 da divisão dos peso palha em wrestling defensivo',
        },
        {
          value: '10/14',
          label: 'das vitórias da Loopy Godinez vieram por decisão',
          sublabel: '79 por cento por decisão, apenas 1 KO e 2 submissões em 14 vitórias',
        },
      ],
      armadilha: {
        titulo: 'Loopy Godinez por nocaute',
        descricao:
          'O mercado paga bem em Loopy por KO porque ela tem volume ofensivo. Mas Loopy nunca venceu por nocaute uma adversária ranqueada no UFC, e Suarez tem o queixo mais resistente do peso palha. Apostar nesse cenário é caçar narrativa, não padrão.',
      },
      conviction: {
        thesis:
          'A tese é: Tatiana Suarez vence por dois motivos estruturais que são inegáveis. Primeiro, ela é a melhor wrestler da história dos peso palha do UFC, com background de vice-campeã do mundial júnior de wrestling em 2007 e 80 por cento de defesa de takedown na carreira. Segundo, Loopy Godinez tem 50 por cento de TDD e perdeu três vezes na carreira contra adversárias com vantagem de grappling, padrão consistente que Suarez vai explorar desde o primeiro segundo. Terceiro, ambas enfrentaram Jessica Andrade recentemente: Suarez finalizou Andrade por TKO no R2, Godinez venceu por decisão. O caminho é Suarez conectar o primeiro takedown nos 90 segundos iniciais, controlar o chão por três rounds inteiros, e finalizar ou vencer por decisão dominante. Isso desmorona apenas se Loopy conseguir defender as primeiras três tentativas e manter a luta em pé por todos os 15 minutos.',
        conviction_score: 7,
        conviction_rationale:
          'Convicção 7 porque a disparidade estrutural de wrestling é tão grande que três pilares apontam para o mesmo lado: vantagem ofensiva absoluta em quedas, vantagem defensiva absoluta em sprawl, vantagem qualitativa contra oponente em comum (Andrade). Não é convicção 8 porque Loopy está em forma máxima com quatro vitórias nas últimas cinco e tem o motor de pressão que pode complicar se o R1 não for limpo.',
        conviction_breakers: [
          'Se Loopy defender as primeiras três tentativas de takedown com sprawls técnicos e impor volume em pé, a luta vira competitiva nos cards dos juízes.',
          'Se a derrota recente para Weili tiver afetado psicologicamente a Suarez a ponto de hesitar nas entradas iniciais, a Loopy ganha tempo precioso.',
          'Se a idade da Suarez (35 anos) cobrar fatura em forma de cardio cedente nos rounds finais, a Loopy ainda tem motor para vencer no acumulado.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 28,
          key_scenario:
            'Loopy defende a primeira tentativa de takedown da Suarez com sprawl técnico. Mantém distância média com jab e movimentação. Quando Suarez tenta o segundo shot, Loopy circula e contra-ataca com volume. Por três rounds, mantém a luta em pé e pontua mais nos critérios dos juízes. Decisão unânime ou dividida.',
          required_conditions: [
            'Defender as primeiras três tentativas de takedown da Suarez',
            'Manter a luta em pé durante a maior parte dos 15 minutos',
            'Impor volume ofensivo de pelo menos 5 sig strikes por minuto',
            'Que Suarez hesite ou perca tempo nas entradas iniciais',
          ],
          historical_precedent:
            'Zhang Weili vs Tatiana Suarez (UFC 312, fevereiro 2025): a única derrota da carreira da Suarez. Weili usou TDD excepcional para neutralizar as quedas e venceu por decisão. Loopy precisaria replicar uma versão diluída desse blueprint.',
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'suarez-vs-godinez');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
