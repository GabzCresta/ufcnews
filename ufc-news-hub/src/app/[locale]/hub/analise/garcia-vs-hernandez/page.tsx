import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'garcia-vs-hernandez',
  evento_id: null,
  slug: 'garcia-vs-hernandez',
  titulo: 'Garcia vs Hernandez: O Grappler e o Finalizador',
  subtitulo:
    'Rafa Garcia em 3-1 recente, último TKO contra Jared Gordon, jogo de pressão e jiu-jitsu em ascensão. Alexander Hernandez em três vitórias seguidas, incluindo dois TKOs em 2025, refeito no Factory X. Encontro entre dois estilos opostos no peso-leve.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,70m', envergadura: '178cm', idade: 31, academia: 'Team Punisher / UFC GYM Costa Mesa' },
      fighter2: { altura: '1,75m', envergadura: '183cm', idade: 33, academia: 'Factory X' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'TKO R2-R3',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Rafa Garcia',
    apelido: 'Gifted',
    record: '17-4-0',
    ranking: 'Sem ranking no top 15',
    ultimasLutas: [
      { result: 'W', opponent: 'Jared Gordon', method: 'TKO (cotoveladas) R3', event: 'UFC Fight Night 259' },
      { result: 'W', opponent: 'Vinc Pichel', method: 'Decisão Unânime', event: 'UFC on ESPN 64' },
      { result: 'L', opponent: 'Grant Dawson', method: 'TKO R2', event: 'UFC Fight Night 244' },
    ],
  },
  fighter2_info: {
    nome: 'Alexander Hernandez',
    apelido: 'The Great',
    record: '18-8-0',
    ranking: 'Sem ranking no top 15',
    ultimasLutas: [
      { result: 'W', opponent: 'Carlos Diego Ferreira', method: 'TKO R2', event: 'UFC Fight Night 259' },
      { result: 'W', opponent: 'Chase Hooper', method: 'TKO R1', event: 'UFC 319' },
      { result: 'W', opponent: 'Kurt Holobaugh', method: 'Decisão Unânime', event: 'UFC Fight Night 254' },
    ],
  },
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  categoria_peso: 'Peso-Leve (155 lbs)',
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
      categoria_peso: 'Peso-Leve (155 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'O Grappler e o Finalizador',
      tagline_sub: 'Garcia tem jiu-jitsu e cardio. Hernandez tem poder e 3-0 recente. A matemática do striking pesa aqui.',
      fighter1: {
        nome_completo: 'Rafa "Gifted" Garcia',
        apelido: 'Gifted',
        sobrenome: 'Garcia',
        record: '17-4-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Mexicali, México | 31 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/GARCIA_RAFA_L_04-25.png?itok=rv0qA2gH',
      },
      fighter2: {
        nome_completo: 'Alexander "The Great" Hernandez',
        apelido: 'The Great',
        sobrenome: 'Hernandez',
        record: '18-8-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Denver, Colorado | 33 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-09/HERNANDEZ_ALEXANDER_L_09-13.png?itok=YWzZRVHh',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Poder de Mão Encontra Grappling',
      insight:
        'A luta é um clássico de estilos opostos. Rafa Garcia é um grappler com 8 submissões em 17 vitórias, entrada agressiva, pressão constante, jogo de solo ofensivo. Alexander Hernandez é um striker refeito no Factory X, o mesmo camp de Youssef Zalal, que finalizou Carlos Diego Ferreira e Chase Hooper por TKO nas duas últimas vindas. A pergunta central não é quem é melhor globalmente, é quem consegue impor ritmo. Se a luta for no striking, Hernandez tem vantagem clara, 8 KOs em 18 vitórias contra 2 de Garcia, e 8 centímetros a mais de alcance. Se a luta for no chão, Garcia tem estrada aberta: Hernandez defende takedown historicamente abaixo da média e não tem jogo de finalização próprio. O perde da última luta de Garcia, TKO contra Grant Dawson em outubro de 2024, mostrou que o mexicano tem dificuldade quando não consegue impor a luta dele. E Hernandez é o tipo exato que pune quem não consegue impor.',
      tension: {
        truth_a: 'Garcia está em ascensão técnica clara, 3 vitórias nas últimas 4, incluindo o TKO do Gordon por cotoveladas no round final, demonstrando que o jogo dele não é só submissão, inclui ground-and-pound de pressão. O camp em Mexicali construiu um lutador com cardio de três rounds confiável.',
        truth_b: 'Hernandez no Factory X é outro lutador. Três vitórias seguidas, duas por TKO em 2025, e o jab-cross-hook dele é o mais rápido da categoria entre não-ranqueados. A defesa de TD é 61 por cento agora, melhor que a que existia na versão antiga do Hernandez.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Rafa Garcia',
        color: 'red',
        momentum_score: 7,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note:
          'Três vitórias nas últimas quatro, com destaque para o TKO recente contra Jared Gordon em setembro de 2025. A única derrota foi TKO contra Grant Dawson em outubro de 2024, luta em que não conseguiu impor o jogo de solo. É um peso-leve de nível médio-alto subindo, ainda fora do top 15, mas com vitórias sobre veteranos como Clay Guida.',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Jared Gordon', result: 'W', method: 'TKO (cotoveladas) R3', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'TKO no R3 contra veterano durão. Pressão constante e cotoveladas finalizaram.' },
          { date: 'Mar 2025', opponent: 'Vinc Pichel', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Controle de três rounds, sem dano, decisão clara.' },
          { date: 'Out 2024', opponent: 'Grant Dawson', result: 'L', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Derrota por TKO contra wrestler top 15. Dawson controlou a luta por cima e finalizou no solo.' },
          { date: 'Abr 2023', opponent: 'Clay Guida', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Decisão contra veterano lendário. Tipo de vitória que constrói currículo.' },
          { date: 'Dez 2022', opponent: 'Hayisaer Maheshate', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Decisão contra adversário abaixo do nível médio UFC.' },
        ],
        layoff_warning: null,
      },
      fighter2: {
        nome: 'Alexander Hernandez',
        color: 'blue',
        momentum_score: 9,
        momentum_label: 'Em Alta Absoluta',
        momentum_trend: 'ascending',
        momentum_note:
          'Três vitórias seguidas, duas por TKO. O Factory X reformulou o jogo dele. O TKO contra Chase Hooper em 18 segundos no UFC 319 em agosto de 2025 foi uma das finalizações mais rápidas da divisão no ano. Hernandez tem 33 anos mas o jogo é mais refinado do que nunca.',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Carlos Diego Ferreira', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'TKO contra veterano de submissão. Striking superior em pé, finalização por contagem de dano.' },
          { date: 'Ago 2025', opponent: 'Chase Hooper', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'TKO em 18 segundos. Direita limpa logo no início. Recorde de velocidade da categoria no ano.' },
          { date: 'Mar 2025', opponent: 'Kurt Holobaugh', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Decisão clara em três rounds. Cardio e volume controlados.' },
          { date: 'Out 2024', opponent: 'Austin Hubbard', result: 'W', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Vitória apertada em decisão dividida. Início da refomulação no Factory X.' },
          { date: 'Abr 2024', opponent: 'Damon Jackson', result: 'L', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Última derrota. Antes da virada no Factory X.' },
        ],
        layoff_warning: null,
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Garcia', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '3V-2D', contra_top5: '0V-0D' },
      fighter2: { nome: 'Hernandez', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '4V-1D', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Nenhum oponente em comum. Ambos vêm de sequências construídas contra lutadores fora do top 15, com diferença sutil: Hernandez venceu três seguidas incluindo dois TKOs, Garcia venceu três das últimas quatro incluindo a derrota contra Dawson no meio. O calibre é similar, mas a trajetória diverge: Hernandez mostra aceleração com finalização, Garcia mostra consistência com risco de ser punido se não impor ritmo.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Vitórias por KO/TKO (%)', valueA: 12, valueB: 44, maxVal: 100, format: 'percent', note: 'Hernandez tem poder de mão real. Garcia não termina em pé.' },
        { label: 'Vitórias por Submissão (%)', valueA: 47, valueB: 11, maxVal: 100, format: 'percent', note: 'Garcia tem 8 submissões em 17 vitórias. Hernandez apenas 2.' },
        { label: 'Idade', valueA: 31, valueB: 33, maxVal: 40, format: 'integer', note: 'Garcia é 2 anos mais jovem.' },
        { label: 'Alcance (cm)', valueA: 178, valueB: 183, maxVal: 200, format: 'integer', note: 'Hernandez 5 centímetros mais longo.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '31 anos', fighter2: '33 anos', note: 'Garcia é 2 anos mais jovem.' },
        { label: 'Altura', fighter1: '1,70m', fighter2: '1,75m', note: 'Hernandez 5 centímetros mais alto.' },
        { label: 'Envergadura', fighter1: '178cm', fighter2: '183cm', note: '5 centímetros de alcance a mais para Hernandez.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'UFC GYM Costa Mesa', fighter2: 'Factory X', note: 'Factory X é o mesmo camp de Youssef Zalal.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Distância', advantage: 'fighter2', gap: 3, note: 'Hernandez tem 5 centímetros de alcance, poder de mão e jab refinado.' },
        { label: 'Poder de Nocaute', advantage: 'fighter2', gap: 4, note: 'Hernandez tem 8 KO/TKO em 18 vitórias, 2 finalizações em 15 segundos ou menos. Garcia tem 2 KOs.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter1', gap: 2, note: 'Garcia busca mais takedowns. Hernandez prefere trocar em pé.' },
        { label: 'Grappling e Finalização', advantage: 'fighter1', gap: 4, note: 'Garcia tem 8 submissões. Hernandez tem zero finalizações no UFC por submissão.' },
        { label: 'Defesa de Takedown', advantage: 'fighter2', gap: 1, note: 'Hernandez melhorou a TDD no Factory X. Não é perfeita, mas é suficiente para forçar trocação.' },
        { label: 'Cardio em 3 rounds', advantage: 'fighter1', gap: 1, note: 'Garcia tem cardio de grappler consistente. Hernandez historicamente gasta no R3.' },
      ],
      summary:
        'Hernandez tem vantagem em striking e poder, Garcia tem vantagem em grappling e finalização. A pergunta é onde a luta acontece. Se for em pé, Hernandez tem matemática a favor. Se for no chão, Garcia impõe o jogo dele.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Garcia', ko_tko: { count: 2, percent: 12 }, submission: { count: 8, percent: 47 }, decision: { count: 7, percent: 41 }, total_wins: 17 },
      fighter2: { nome: 'Hernandez', ko_tko: { count: 8, percent: 44 }, submission: { count: 2, percent: 11 }, decision: { count: 8, percent: 44 }, total_wins: 18 },
      insight:
        'Perfis opostos com clareza. Garcia vive de submissão e decisão, Hernandez vive de KO/TKO e decisão. A luta vai para o lado de quem impor ritmo primeiro: em pé beneficia Hernandez, no chão beneficia Garcia.',
    },

    previsao_final: {
      winner_name: 'Alexander Hernandez',
      winner_side: 'fighter2',
      predicted_method: 'TKO R2-R3',
      confidence_score: 6,
      confidence_label: 'MÉDIA',
      explanation:
        'A análise aponta Hernandez por três motivos convergentes. Primeiro, o Factory X refez o jogo dele e as três últimas vitórias mostram finalizações crescendo em qualidade, incluindo TKO em 18 segundos contra Chase Hooper em agosto de 2025. Segundo, a última derrota de Garcia foi TKO contra Grant Dawson, um lutador de perfil similar a Hernandez em pressão e wrestling, e o padrão se repete se Hernandez conseguir defender a entrada de Garcia nos primeiros minutos. Terceiro, a diferença de poder de nocaute é estrutural: Hernandez tem 44 por cento de vitórias por KO contra 12 por cento de Garcia, e 5 centímetros de alcance vantagem que amplifica a conexão. O caminho para Hernandez é trabalhar jab e cross em distância média no R1, defender os dois ou três takedowns que Garcia vai tentar, e capitalizar no R2-R3 quando o grappler precisar forçar em cenário de risco maior. A convicção é 6 porque Garcia tem um caminho real via submissão se conectar no clinch cedo, mas esse caminho tem janela curta e Hernandez historicamente fecha essa janela. Não é 7-8 porque Garcia tem jogo de solo ofensivo real e pode fechar scramble para as costas se Hernandez errar.',
      x_factor: {
        title: 'O primeiro round',
        description:
          'Se Garcia conectar um takedown nos primeiros 3 minutos e estabelecer controle por 2 minutos, a luta vira dele pelo resto do cenário. Se Hernandez defender o primeiro takedown limpo, o R1 fica dele e o R2 vira território de finalização em striking. Tudo acontece nos primeiros 5 minutos.',
      },
      upset_alert: {
        title: 'Alerta de zebra: Garcia finaliza no solo',
        description:
          'Garcia tem 8 submissões em 17 vitórias, incluindo mata-leão e triangular. Hernandez nunca foi finalizado por grappling de elite no UFC, mas também nunca enfrentou um mexicano com jogo de solo do nível de Garcia. Se a luta for para o solo, o padrão histórico se desfaz.',
      },
      probabilities: {
        fighter1: { nome: 'Garcia', percent: 40 },
        fighter2: { nome: 'Hernandez', percent: 57 },
        draw: 3,
      },
      conviction: {
        thesis:
          'A tese é: Alexander Hernandez vence porque, primeiro, a sequência recente dele no Factory X é 3-0 com duas finalizações rápidas incluindo TKO em 18 segundos contra Chase Hooper no UFC 319 em agosto de 2025, indicando jogo refinado e poder consistente. Segundo, o precedente direto de Garcia é a derrota por TKO para Grant Dawson em outubro de 2024, lutador de perfil similar a Hernandez em pressão e striking, no mesmo tipo de cenário que tende a aparecer aqui. Terceiro, a diferença física é concreta: 5 centímetros de alcance e poder de nocaute 44 por cento contra 12 por cento. O caminho é trabalhar jab longo e cross de média distância no R1, forçar Garcia a buscar takedown, defender os dois ou três tentados, e capitalizar no striking no R2 ou R3. Isso desmorona se Garcia conectar um takedown nos primeiros três minutos e controlar top position, ou se Hernandez repetir o erro de aceitar clinch prolongado como fez contra Damon Jackson em abril de 2024.',
        conviction_score: 6,
        conviction_rationale:
          'Convicção 6 porque a tese se apoia em momentum atual, precedente de derrota de Garcia para arquétipo similar, e gap físico mensurável. Não é 7-8 porque Garcia tem submission game real que Hernandez não enfrentou em nível elite, e porque o Dawson que venceu Garcia é ligeiramente melhor wrestler que Hernandez. Não é 5 porque as evidências apontam consistente na mesma direção.',
        conviction_breakers: [
          'Garcia conecta takedown nos primeiros 3 minutos e estabelece controle de cima por 2+ minutos',
          'Hernandez aceita clinch prolongado na grade e é arrastado para o solo',
          'Garcia encontra back take ou guilhotina em uma transição de scramble',
          'Hernandez gasta gás no R3 como já aconteceu em lutas anteriores',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 40,
          key_scenario:
            'Garcia fecha distância nos primeiros 2 minutos via entrada de mudança de nível, conecta takedown contra a grade, estabelece half guard passando para side control, e trabalha cotoveladas para obrigar Hernandez a defender o rosto. Quando Hernandez tentar escapar, Garcia busca back take e finaliza via mata-leão antes do fim do R2. Precedente: Grant Dawson venceu Garcia no mesmo padrão invertido, mas Garcia tem o jogo de solo ofensivo que Dawson usou para vencer.',
          required_conditions: [
            'Conectar takedown nos primeiros 3 minutos do R1',
            'Estabelecer controle de cima e manter por mais de 2 minutos',
            'Evitar trocação pura em distância média',
            'Usar pressão contra a grade no primeiro clinch para cansar Hernandez',
          ],
        },
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Alexander Hernandez',
            odds: '-156',
            reasoning: 'A leitura aponta Hernandez pelo momentum 3-0 no Factory X, precedente de Garcia ter perdido para arquétipo similar (Dawson), e gap físico. Preço moderado, consistente com convicção 6.',
          },
          {
            type: 'Método',
            pick: 'Hernandez por KO/TKO',
            odds: '+200',
            reasoning: 'Hernandez tem 8 TKOs em 18 vitórias e as duas últimas foram finalizações por striking. Garcia não tem queixo testado contra esse nível de poder de mão. Aposta de valor.',
          },
          {
            type: 'Rounds',
            pick: 'Não passa de 2,5 rounds',
            odds: '+125',
            reasoning: 'Dois lutadores com finalização alta (8 KO de Hernandez, 10 finalizações totais de Garcia). Em pé ou no chão, a probabilidade de finalização é elevada. Os dois últimos Hernandez terminaram em R1 e R2.',
          },
        ],
        best_bet: {
          pick: 'Hernandez por KO/TKO em +200',
          reasoning: 'A convicção 6 combina com aposta de método, não moneyline. Se Hernandez vence, o método mais provável é TKO, e o preço reflete isso com valor real.',
        },
      },
      key_stats: [
        { value: '18s', label: 'TKO de Hernandez sobre Chase Hooper', sublabel: 'UFC 319, agosto de 2025. Sinal da velocidade de mão atual.' },
        { value: '3-0', label: 'Sequência recente de Hernandez no Factory X', sublabel: '2 TKOs nas últimas 2 vitórias. Refeito.' },
        { value: '8', label: 'Submissões de Garcia na carreira', sublabel: 'Jogo de solo ofensivo é a ameaça principal se a luta for ao chão.' },
      ],
      odds: {
        fighter1_odds: '+122',
        fighter2_odds: '-156',
        fighter1_name: 'Garcia',
        fighter2_name: 'Hernandez',
        source: 'Bet365, DraftKings, FanDuel, BetMGM em 24 de abril de 2026.',
      },
      armadilha: {
        titulo: 'Armadilha: Garcia por submissão R1',
        descricao:
          'O mercado paga Garcia por submissão no R1 em torno de +900 porque ele tem 8 submissões na carreira. Mas isso ignora que Hernandez raramente cai para o chão em R1, prefere jab-cross de distância média, e quando caiu contra Damon Jackson em 2024 foi na decisão, não por finalização. Se vai no Garcia, vai no moneyline +122. Apostar em sub R1 é jogar contra o histórico de Hernandez em pé.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'garcia-vs-hernandez');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
