import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'gastelum-vs-luque',
  evento_id: null,
  slug: 'gastelum-vs-luque',
  titulo: 'Gastelum vs Luque: Dois Veteranos Sem Margem',
  subtitulo:
    'Kelvin Gastelum entra de short notice para substituir Kyle Daukaus. Vicente Luque vem de duas derrotas seguidas. Dois veteranos lutando para não desaparecer da relevância.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,78m', envergadura: '180cm', idade: 34, academia: 'Kings MMA, Califórnia' },
      fighter2: { altura: '1,80m', envergadura: '193cm', idade: 34, academia: 'Sanford MMA, Flórida' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão Unânime',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Kelvin Gastelum',
    apelido: 'Gastelum',
    record: '20-10-0 (1 NC)',
    ranking: 'Não ranqueado',
    ultimasLutas: [
      { result: 'W', opponent: 'Dustin Stoltzfus', method: 'Decisão Unânime', event: 'UFC Fight Night 259' },
      { result: 'L', opponent: 'Joe Pyfer', method: 'Decisão Unânime', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Daniel Rodriguez', method: 'Decisão Dividida', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Vicente Luque',
    apelido: 'The Silent Assassin',
    record: '23-12-1',
    ranking: 'Não ranqueado',
    ultimasLutas: [
      { result: 'L', opponent: 'Joel Álvarez', method: 'Decisão Unânime', event: 'UFC Fight Night 261' },
      { result: 'L', opponent: 'Kevin Holland', method: 'Submissão R2 (D\'Arce)', event: 'UFC 316' },
      { result: 'W', opponent: 'Themba Gorimbo', method: 'Submissão R3', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC 327: Procházka vs Ulberg',
  evento_data: '11 de Abril, 2026',
  evento_local: 'Kaseya Center, Miami, Flórida',
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
      evento_nome: 'UFC 327: Procházka vs Ulberg',
      evento_data: '11 de Abril, 2026',
      evento_local: 'Kaseya Center, Miami, Flórida',
      categoria_peso: 'Peso Médio (185 lbs)',
      num_rounds: 3,
      titulo_em_jogo: 'Early Prelims',
      tagline: 'Dois Veteranos Sem Margem',
      tagline_sub:
        'Gastelum entra de short notice substituindo Daukaus. Luque vem de duas derrotas. Dois veteranos lutando para não desaparecer.',
      fighter1: {
        nome_completo: 'Kelvin Gastelum',
        apelido: 'Gastelum',
        sobrenome: 'Gastelum',
        record: '20-10-0 (1 NC)',
        ranking: 'Não ranqueado',
        info_extra: 'Yuma, Arizona | 34 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-09%2FGASTELUM_KELVIN_L_09-13.png%3Fitok%3DX2J92bD5',
      },
      fighter2: {
        nome_completo: 'Vicente "The Silent Assassin" Luque',
        apelido: 'The Silent Assassin',
        sobrenome: 'Luque',
        record: '23-12-1',
        ranking: 'Não ranqueado',
        info_extra: 'Brasília, Brasil | 34 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-10%2FLUQUE_VICENTE_L_10-11.png%3Fitok%3DgL2qQoh1',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'Quem Não Pode Mais Cair',
      insight:
        'Esta luta é o oposto da romance. Nem Kelvin Gastelum nem Vicente Luque têm margem de erro. Gastelum vem da vitória sobre Stoltzfus em setembro mas com mais um problema na pesagem (cinco libras acima do limite), o que continua sendo um padrão de carreira que o Dana White já reclamou publicamente. Luque vem de duas derrotas consecutivas (Holland por D\'Arce em junho, Joel Álvarez por decisão em outubro) e foi finalizado em ambas. Os dois precisam ganhar para continuarem relevantes na divisão. Gastelum entrou de short notice substituindo Kyle Daukaus, então a vantagem inicial vai para o Luque pelo tempo de camp, mas a vantagem real está no estilo: Gastelum ainda é wrestler com cardio e Luque é o striker que está ficando lento.',
      tension: {
        truth_a:
          'Luque tem 193 cm de envergadura (vantagem de 13 cm sobre Gastelum), poder de nocaute documentado, e a guilhotina/D\'Arce que finalizou Wonderboy Thompson em 2021. Tempo de camp completo e vantagem técnica de striking.',
        truth_b:
          'Gastelum é wrestler de elite com cardio comprovado, vence por decisão sempre que precisa, e Luque acabou de ser finalizado por submissão (D\'Arce) há cinco meses. O jogo de chão do Silent Assassin ficou exposto recentemente.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Kelvin Gastelum',
        color: 'red',
        recent_fights: [
          {
            date: 'Set 2025',
            opponent: 'Dustin Stoltzfus',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'UFC Fight Night 259. Vitória controlada mas com mais um peso missado (191 lbs no peso médio). Padrão problemático.',
          },
          {
            date: 'Mar 2025',
            opponent: 'Joe Pyfer',
            result: 'L',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Derrota técnica em três rounds. Pyfer impôs ritmo e Gastelum nunca encontrou o timing.',
          },
          {
            date: 'Jul 2024',
            opponent: 'Daniel Rodriguez',
            result: 'L',
            method: 'Decisão Dividida',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Derrota apertada em decisão dividida. Mostrou que ainda compete mas não consegue mais finalizar.',
          },
          {
            date: 'Set 2023',
            opponent: 'Sean Brady',
            result: 'L',
            method: 'TKO R1',
            opponent_rank: '#13 WW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Última tentativa no welterweight. Apagado no R1, fim definitivo da fase 170 lbs.',
          },
        ],
        momentum_score: 4,
        momentum_label: 'Estável (com problemas)',
        momentum_trend: 'stable',
        momentum_note:
          'Gastelum vem de uma vitória sobre Stoltzfus mas com mais um peso missado. O padrão de carreira inteira é preocupante: cinco quedas no peso desde 2021, várias com Dana White ameaçando suspensão. Aos 34 anos, o ex-desafiante ao título do peso médio virou um veterano que sobrevive. Mas o cardio e o wrestling ainda estão lá, e contra um Luque vindo de duas derrotas, isso pode ser suficiente.',
      },
      fighter2: {
        nome: 'Vicente Luque',
        color: 'blue',
        recent_fights: [
          {
            date: 'Out 2025',
            opponent: 'Joel Álvarez',
            result: 'L',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC Fight Night 261. Joel Álvarez substituto de short notice para Ponzinibbio. Luque perdeu por decisão controlada.',
          },
          {
            date: 'Jun 2025',
            opponent: 'Kevin Holland',
            result: 'L',
            method: 'Submissão R2 (D\'Arce choke)',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC 316. Finalizado em submissão pelo Holland (que rendeu Performance of the Night ao Trailblazer). Expôs vulnerabilidade no chão.',
          },
          {
            date: 'Dez 2024',
            opponent: 'Themba Gorimbo',
            result: 'W',
            method: 'Submissão R3',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Última vitória. Mostrou que ainda tem o jogo de submissão característico, mas levou três rounds para finalizar.',
          },
          {
            date: 'Set 2023',
            opponent: 'Joaquin Buckley',
            result: 'L',
            method: 'TKO R1',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Apagado no R1 por um chute giratório de cotovelada. Início da fase difícil da carreira.',
          },
        ],
        momentum_score: 4,
        momentum_label: 'Em Recuperação',
        momentum_trend: 'descending',
        momentum_note:
          'Luque vem de duas derrotas consecutivas e três derrotas nas últimas quatro lutas. A finalização sofrida pelo Holland (D\'Arce em junho) foi especialmente preocupante porque mostrou que o jogo de submissão dele, que sempre foi a marca registrada, ficou exposto na defesa. A subida para o middleweight é uma tentativa de reset, mas o cardápio de adversários novos não é mais favorável, e o tempo passa para todos.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Kelvin Gastelum',
        media_oponentes: 4,
        media_oponentes_label: 'Muito Bom',
        aproveitamento: '14V-10D (1NC) (58%)',
        contra_top5: '2V-5D',
      },
      fighter2: {
        nome: 'Vicente Luque',
        media_oponentes: 3,
        media_oponentes_label: 'Bom',
        aproveitamento: '16V-8D (67%)',
        contra_top5: '1V-4D',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Sem oponentes em comum. Gastelum tem mais experiência contra elite absoluta do peso médio (Whittaker, Chimaev, Adesanya, Israel pelo título). Luque construiu carreira contra welterweights de top 15. Gastelum leva vantagem em qualidade de adversário.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.6, valueB: 4.5, maxVal: 6, format: 'decimal', note: 'Luque é mais ofensivo em pé' },
        { label: 'Precisão de Strikes (%)', valueA: 50, valueB: 49, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 4.5, valueB: 4.3, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 53, valueB: 52, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 2.8, valueB: 0.8, maxVal: 5, format: 'decimal', note: 'Vantagem clara de Gastelum em wrestling ofensivo' },
        { label: 'Defesa de Takedown (%)', valueA: 70, valueB: 60, maxVal: 100, format: 'percent' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '34 anos', fighter2: '34 anos' },
        { label: 'Altura', fighter1: '1,78m', fighter2: '1,80m' },
        { label: 'Envergadura', fighter1: '180cm', fighter2: '193cm' },
        { label: 'Stance', fighter1: 'Switch', fighter2: 'Orthodox' },
        { label: 'Academia', fighter1: 'Kings MMA', fighter2: 'Sanford MMA' },
        { label: 'Experiência UFC', fighter1: '24 lutas', fighter2: '24 lutas' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter2',
          gap: 2,
          note: 'Luque tem 13 cm de reach e técnica de jab superior. Gastelum precisa fechar a distância.',
        },
        {
          label: 'Striking em Curta Distância',
          advantage: 'fighter1',
          gap: 1,
          note: 'Gastelum prefere o boxe sujo na curta. É onde a vantagem física dele aparece.',
        },
        {
          label: 'Wrestling',
          advantage: 'fighter1',
          gap: 3,
          note: 'Vantagem clara em wrestling ofensivo. 2,8 takedowns por 15 minutos contra 0,8 do Luque.',
        },
        {
          label: 'Submissões',
          advantage: 'fighter2',
          gap: 2,
          note: 'Luque é o submissionista (9 submissões e 11 nocautes em 23 vitórias), apesar de ter cedido a D\'Arce do Holland.',
        },
        {
          label: 'Cardio (3 rounds)',
          advantage: 'fighter1',
          gap: 1,
          note: 'Gastelum tem o motor de wrestler. Luque também é cardio sólido mas sem a base física.',
        },
        {
          label: 'Resiliência (após sequência de derrotas)',
          advantage: 'fighter1',
          gap: 2,
          note: 'Gastelum acabou de vencer Stoltzfus. Luque vem de duas derrotas seguidas, com a confiança balançada.',
        },
      ],
      summary:
        'Gastelum vence se conseguir impor o wrestling e o ritmo cerebral. Luque vence se conseguir manter a luta em pé e capitalizar com guilhotina ou D\'Arce quando Gastelum entrar para a queda. A pergunta é se Luque ainda confia no jogo dele depois das duas derrotas.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Kelvin Gastelum',
        ko_tko: { count: 6, percent: 30 },
        submission: { count: 5, percent: 25 },
        decision: { count: 9, percent: 45 },
        total_wins: 20,
      },
      fighter2: {
        nome: 'Vicente Luque',
        ko_tko: { count: 11, percent: 48 },
        submission: { count: 9, percent: 39 },
        decision: { count: 3, percent: 13 },
        total_wins: 23,
      },
      insight:
        'Luque é o finalizador nato: 87 por cento das vitórias vieram antes do tempo (11 KO e 9 submissões em 23). Gastelum tem distribuição equilibrada: 6 KO, 5 submissões e 9 decisões em 20 vitórias, com quase metade por decisão. O histórico recente mostra que Gastelum só vence por decisão nos últimos anos e Luque acaba de perder por submissão contra Holland.',
    },

    previsao_final: {
      winner_name: 'Kelvin Gastelum',
      winner_side: 'fighter1',
      predicted_method: 'Decisão Unânime',
      confidence_score: 6,
      confidence_label: 'MÉDIA',
      explanation:
        'Esta é uma luta entre dois veteranos de 34 anos sem margem de erro, mas a leve vantagem do Gastelum vem do momentum: ele acabou de vencer Stoltzfus em setembro enquanto Luque vem de duas derrotas seguidas. Gastelum tem o wrestling para impor o ritmo e o cardio para 15 minutos, e Luque acabou de ser finalizado por submissão (D\'Arce do Holland) mostrando que o jogo de chão dele está vulnerável. Gastelum entra de short notice mas é veterano experiente. O cenário mais provável é wrestling impondo controle, decisão unânime nos cards.',
      x_factor: {
        title: 'A Confiança do Luque Pós-Derrotas',
        description:
          'Luque vem de duas derrotas consecutivas, sendo a do Holland uma submissão dolorosa. Voltar mentalmente de uma sequência ruim é o teste mais difícil da carreira. Se ele entrar hesitante, Gastelum capitaliza com pressão.',
      },
      upset_alert: {
        title: 'Luque Por Guilhotina Tradicional',
        description:
          'Luque tem 20 finalizações em 23 vitórias: 11 nocautes e 9 submissões. Se Gastelum entrar para queda exposto na defesa de pescoço, a guilhotina característica do Silent Assassin pode finalizar tudo no primeiro round. É a única arma que Gastelum tem que cuidar.',
      },
      probabilities: {
        fighter1: { nome: 'Gastelum', percent: 65 },
        fighter2: { nome: 'Luque', percent: 33 },
        draw: 2,
      },
      odds: {
        fighter1_odds: '-250',
        fighter2_odds: '+200',
        fighter1_name: 'Kelvin Gastelum',
        fighter2_name: 'Vicente Luque',
        source: 'Média de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Kelvin Gastelum',
            odds: '-250',
            reasoning:
              'Linha justa para o cenário mais provável. O wrestling de Gastelum + momentum recente vence a sequência de derrotas do Luque. Não é grande valor, é a aposta correta.',
          },
          {
            type: 'Método',
            pick: 'Gastelum por Decisão',
            odds: '+150',
            reasoning:
              'Gastelum não finaliza ninguém há anos. As últimas vitórias dele foram todas por decisão. O método mais coerente com o padrão recente.',
          },
          {
            type: 'Como termina',
            pick: 'A luta vai à decisão',
            odds: '+105',
            reasoning:
              'Gastelum não finaliza, Luque cede por decisão recentemente. A probabilidade dos cards é alta.',
          },
        ],
        best_bet: {
          pick: 'Gastelum por decisão a +150',
          reasoning:
            'A combinação certa de probabilidade alta e retorno positivo. O cenário mais provável é três rounds de wrestling controlado terminando nos juízes.',
        },
      },
      key_stats: [
        {
          value: '2',
          label: 'derrotas consecutivas do Luque entrando na luta (Holland por submissão, Álvarez por decisão)',
          sublabel: 'A primeira sequência negativa real desde a fase de prospect',
        },
        {
          value: '5',
          label: 'pesos missados na carreira do Gastelum no UFC',
          sublabel: 'Padrão problemático que continua mesmo no peso médio',
        },
      ],
      armadilha: {
        titulo: 'Luque por nocaute',
        descricao:
          'O mercado paga bem em Luque por KO porque ele tem 11 nocautes na carreira. Mas Luque não nocauteia ninguém há mais de dois anos, e Gastelum tem queixo resistente (raramente finalizado por strikes). Apostar no Silent Assassin por nocaute precoce é caçar narrativa de prime que não existe mais.',
      },
      conviction: {
        thesis:
          'A tese é: Kelvin Gastelum vence por dois motivos estruturais. Primeiro, ele tem o wrestling de elite com 2,8 takedowns por 15 minutos contra apenas 0,8 do Luque, e a defesa de takedown do brasileiro caiu para 60 por cento na fase recente. Segundo, Luque vem de duas derrotas consecutivas (Holland por submissão D\'Arce em junho, Joel Álvarez por decisão em outubro), com confiança balançada e o jogo de chão exposto. Gastelum acabou de vencer Stoltzfus em setembro mostrando que ainda tem cardio e wrestling para 15 minutos. O caminho é Gastelum entrar para queda nos primeiros minutos, controlar com top control, e administrar três rounds inteiros até a decisão. Isso desmorona se Luque conseguir guilhotinar Gastelum em uma das entradas defendendo pescoço de forma exposta.',
        conviction_score: 6,
        conviction_rationale:
          'Convicção 6 porque a vantagem do Gastelum é estrutural (wrestling + momentum) mas não esmagadora. Luque ainda tem o jogo de submissão característico que pode resolver tudo em 30 segundos se Gastelum errar uma entrada. Não é convicção 7 porque o reach do Luque (193 cm) é genuíno e Gastelum entra de short notice. Não é 5 porque os pilares de wrestling e momentum convergem.',
        conviction_breakers: [
          'Se Luque conseguir guilhotinar Gastelum em uma das entradas iniciais, a finalização característica pode resolver tudo no R1.',
          'Se Gastelum mostrar a versão apática da derrota para Pyfer em vez do controle dominante sobre Stoltzfus, Luque pode pontuar nos cards.',
          'Se o reach de 193 cm do Luque conseguir manter Gastelum na média distância por três rounds, a vantagem técnica do striker prevalece.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 33,
          key_scenario:
            'Luque sai do canto buscando manter distância máxima com jab. Quando Gastelum tenta o primeiro takedown, Luque defende com sprawl e prende a guilhotina característica que finalizou Wonderboy Thompson em 2021. O pescoço exposto do Gastelum cede em 90 segundos. Vitória por finalização que reativa a carreira do Silent Assassin.',
          required_conditions: [
            'Defender as primeiras tentativas de takedown do Gastelum sem ser empurrado contra a grade',
            'Capitalizar com guilhotina ou D\'Arce na primeira entrada exposta',
            'Manter a luta em pé na média distância onde o reach importa',
            'Que Gastelum entre para queda com o pescoço exposto',
          ],
          historical_precedent:
            'Luque vs Stephen Thompson (UFC 244, 2019): exatamente esse cenário. Luque finalizou Wonderboy com guilhotina no R1, capitalizando uma entrada exposta. O padrão existe e ainda funciona quando o adversário comete o erro certo.',
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'gastelum-vs-luque');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
