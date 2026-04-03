import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';

const analise: PrelimsAnalise = {
  id: 'pereira-vs-cowan-pos-weighins',
  evento_id: null,
  slug: 'pereira-vs-cowan-pos-weighins',
  titulo: 'Pereira vs Cowan (Pos Weigh-Ins): A Mais Jovem da Historia Contra a Veterana',
  subtitulo: null,
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '', envergadura: '', idade: 0, academia: '' },
      fighter2: { altura: '', envergadura: '', idade: 0, academia: '' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisao Unanime',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Alice Pereira',
    record: '6-1-0',
    ultimasLutas: [],
  },
  fighter2_info: {
    nome: 'Hailey Cowan',
    record: '7-4-0',
    ultimasLutas: [],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan | Pos Weigh-Ins',
  evento_data: '4 de Abril, 2026',
  evento_local: 'UFC APEX, Las Vegas, Nevada, EUA',
  categoria_peso: 'Peso Galo Feminino',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'prelims',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),

  prelims_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Moicano vs Duncan | Pos Weigh-Ins',
      evento_data: '4 de Abril, 2026',
      categoria_peso: 'Peso Galo Feminino',
      num_rounds: 3,
      is_titulo: false,
      fighter1: {
        nome: 'Pereira',
        record: '6-1-0',
      },
      fighter2: {
        nome: 'Cowan',
        record: '7-4-0',
      },
    },

    comparacao_estatistica: {
      stats: [
        {
          label: 'Sig. Strikes por Minuto',
          valueA: 2.47,
          valueB: 2.50,
          maxVal: 5,
          format: 'decimal',
          note: 'Volume praticamente identico. Ambas preferem lutas de ritmo controlado, sem explosoes de volume. A diferenca sera na qualidade dos golpes, nao na quantidade.',
        },
        {
          label: 'Precisao de Strikes (%)',
          valueA: 31,
          valueB: 42,
          maxVal: 100,
          format: 'percent',
          note: 'Cowan tem 11 pontos percentuais a mais de precisao. Pereira com 31% e bem abaixo da media, acertando menos de um em cada tres golpes.',
        },
        {
          label: 'Strikes Absorvidos/Min',
          valueA: 3.00,
          valueB: 2.79,
          maxVal: 5,
          format: 'decimal',
          reverseWinner: true,
          note: 'Numeros proximos na absorcao. Nenhuma e particularmente porosa, mas Pereira absorve um pouco mais apesar de ter melhor defesa percentual.',
        },
        {
          label: 'Defesa de Strikes (%)',
          valueA: 72,
          valueB: 33,
          maxVal: 100,
          format: 'percent',
          note: 'Diferenca enorme na defesa. Pereira defende 72%, numero excelente. Cowan com 33% e extremamente vulneravel, tomando dois em cada tres golpes tentados.',
        },
        {
          label: 'Takedowns por 15 Min',
          valueA: 0.00,
          valueB: 1.63,
          maxVal: 4,
          format: 'decimal',
          note: 'Cowan busca o takedown com alguma frequencia e 36% de precisao. Pereira nunca tentou takedown no UFC, mas defende 100% das tentativas.',
        },
        {
          label: 'Precisao de Takedown (%)',
          valueA: 0,
          valueB: 36,
          maxVal: 100,
          format: 'percent',
          note: 'Cowan converte pouco mais de um terco das tentativas. Pereira nao tem ofensiva de queda registrada.',
        },
        {
          label: 'Defesa de Takedown (%)',
          valueA: 100,
          valueB: 80,
          maxVal: 100,
          format: 'percent',
          note: 'Pereira com 100% de defesa de takedown, perfeita ate agora. Cowan com 80% tambem e solida. Ambas tem bom sprawl.',
        },
      ],
      tale_of_tape: [
        {
          label: 'Idade',
          fighter1: '20 anos',
          fighter2: '34 anos',
          note: 'Pereira tem apenas 20 anos, uma das mais jovens do roster. Cowan com 34 e muito mais experiente em termos de vida.',
        },
        {
          label: 'Altura',
          fighter1: '1,73m (5\'8")',
          fighter2: '1,73m (5\'8")',
          note: 'Mesma altura exata, sem vantagem fisica',
        },
        {
          label: 'Envergadura',
          fighter1: '180cm (71")',
          fighter2: '170cm (67")',
          note: 'Pereira com 10cm a mais de envergadura, vantagem significativa que ajuda a manter distancia',
        },
        {
          label: 'Stance',
          fighter1: 'Ortodoxa',
          fighter2: 'Canhota',
          note: 'Confronto ortodoxo vs canhota abre a guarda e cria angulos diferentes',
        },
        {
          label: 'Academia',
          fighter1: 'Brasil',
          fighter2: 'EUA',
          note: null,
        },
      ],
    },

    historico_lutas: {
      fighter1: {
        nome: 'Pereira',
        recent_fights: [
          {
            date: 'Set 2025',
            opponent: 'Montse Rendon',
            result: 'L',
            method: 'Decisao Dividida',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Primeira derrota da carreira por decisao dividida. Luta extremamente competitiva que poderia ter ido para qualquer lado.',
          },
        ],
      },
      fighter2: {
        nome: 'Cowan',
        recent_fights: [
          {
            date: 'Abr 2025',
            opponent: 'Nora Cornolle',
            result: 'L',
            method: 'Sub RNC R2',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Finalizada com mata-leao no segundo round. Vulnerabilidade no grappling defensivo ficou exposta.',
          },
          {
            date: 'Abr 2023',
            opponent: 'Jamey-Lyn Horth',
            result: 'L',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Derrota por decisao na primeira luta do UFC. Cowan absorveu mais strikes (76 a 63) e nao conseguiu impor seu jogo.',
          },
          {
            date: 'Ago 2022',
            opponent: 'Claudia Leite',
            result: 'W',
            method: 'Decisao Dividida',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Vitoria no DWCS que garantiu contrato com o UFC. Luta apertada que veio por decisao dividida.',
          },
        ],
      },
    },

    perfil_habilidades: {
      skills: [
        {
          label: 'Defesa de Strikes',
          valueA: 78,
          valueB: 38,
          labelA: 'Muito Bom',
          labelB: 'Medio',
          advantage: 'fighter1',
          advantage_note: 'Pereira defende 72% dos strikes, numero elite para o peso-galo feminino. Cowan defende apenas 33%, uma das piores taxas da divisao. Essa diferenca e gigante.',
        },
        {
          label: 'Envergadura e Alcance',
          valueA: 75,
          valueB: 45,
          labelA: 'Muito Bom',
          labelB: 'Medio',
          advantage: 'fighter1',
          advantage_note: 'Com 180cm de envergadura contra 170cm, Pereira tem 10cm a mais de alcance. Para uma striker, essa vantagem e fundamental para controlar a distancia e pontuar com o jab.',
        },
        {
          label: 'Wrestling Ofensivo',
          valueA: 30,
          valueB: 55,
          labelA: 'Ruim',
          labelB: 'Bom',
          advantage: 'fighter2',
          advantage_note: 'Cowan tem alguma ofensiva de takedown (1.63 por 15 min). Pereira nunca tentou. Se Cowan conseguir levar a luta ao chao, pode ter vantagem.',
        },
        {
          label: 'Defesa de Takedown',
          valueA: 85,
          valueB: 70,
          labelA: 'Muito Bom',
          labelB: 'Bom',
          advantage: 'fighter1',
          advantage_note: 'Pereira defende 100% dos takedowns no UFC (amostra pequena, mas perfeita). Cowan com 80% tambem e boa, mas nao e ela que precisa defender.',
        },
        {
          label: 'Juventude e Potencial',
          valueA: 82,
          valueB: 40,
          labelA: 'Muito Bom',
          labelB: 'Medio',
          advantage: 'fighter1',
          advantage_note: 'Pereira tem 20 anos e esta apenas comecando. Cada luta ela evolui. Cowan com 34 anos esta no pico ou descendo, sem margem grande de evolucao.',
        },
        {
          label: 'Experiencia no UFC',
          valueA: 35,
          valueB: 55,
          labelA: 'Ruim',
          labelB: 'Bom',
          advantage: 'fighter2',
          advantage_note: 'Cowan tem 3 lutas no UFC (0-2 com 1 vitoria do DWCS). Pereira tem apenas 1. Cowan sabe melhor o que esperar do evento UFC, mesmo que nao tenha vencido.',
        },
      ],
      insight: 'Pereira e a lutadora mais atletica e defensivamente superior. Sua defesa de 72% contra 33% de Cowan e o stat mais revelador desta luta. Apesar da juventude e pouca experiencia, as ferramentas fisicas de Pereira (envergadura, velocidade, defesa) devem ser suficientes para neutralizar Cowan, que nunca venceu no octogono.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Pereira',
        ko_tko: { count: 3, percent: 50 },
        submission: { count: 1, percent: 17 },
        decision: { count: 2, percent: 33 },
        total_wins: 6,
      },
      fighter2: {
        nome: 'Cowan',
        ko_tko: { count: 2, percent: 29 },
        submission: { count: 2, percent: 29 },
        decision: { count: 3, percent: 42 },
        total_wins: 7,
      },
      insight: 'Pereira tem um perfil mais de finalizadora com metade das vitorias por nocaute, surpreendente para uma lutadora tao jovem. Cowan tem distribuicao mais equilibrada, com a maioria das vitorias por decisao. No peso-galo feminino, finalizacoes sao mais raras, entao o poder de Pereira e um diferencial.',
    },

    previsao_final: {
      winner_name: 'Pereira',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime',
      confidence_score: 6,
      confidence_label: 'MEDIA',
      explanation: 'Pereira entra com vantagens defensivas e fisicas claras. Sua defesa de strikes de 72% contra os 33% de Cowan e a maior disparidade desta luta. A envergadura de 10cm a mais permite que Pereira controle a distancia e pontue com o jab sem se expor demais. Cowan nunca venceu no UFC e vem de uma finalizacao rapida contra Cornolle, sinal de confianca abalada. A juventude de Pereira (20 anos) traz energia e atletismo, enquanto Cowan aos 34 pode nao acompanhar o ritmo. A unica preocupacao e a inexperiencia de Pereira, mas o nivel de Cowan parece superavel.',
      x_factor: {
        title: 'Pereira tem 20 anos',
        description: 'Nascida em 2005, Pereira e uma das mais jovens do roster do UFC. Juventude traz explosao e recuperacao, mas tambem imprevisibilidade. Se ela entrar nervosa em apenas sua segunda luta no UFC, Cowan pode capitalizar.',
      },
      upset_alert: {
        title: 'A stance canhota de Cowan',
        description: 'Cowan e canhota e tem experiencia em lutas contra ortodoxas. O angulo da mao esquerda pode causar problemas para Pereira, que com apenas 1 luta no UFC pode nao ter enfrentado muitas canhotas de alto nivel.',
      },
      probabilities: {
        fighter1: { nome: 'Pereira', percent: 60 },
        fighter2: { nome: 'Cowan', percent: 38 },
        draw: 2,
      },
      value_picks: undefined,
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise as any, locale, 'pereira-vs-cowan');
  return <PrelimsAnalysisView analise={data as any} lang={locale as Lang} />;
}
