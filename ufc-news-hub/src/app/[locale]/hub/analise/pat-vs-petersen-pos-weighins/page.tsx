import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';

const analise: PrelimsAnalise = {
  id: 'pat-vs-petersen-pos-weighins',
  evento_id: null,
  slug: 'pat-vs-petersen-pos-weighins',
  titulo: 'Pat vs Petersen (Pos Weigh-Ins)',
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
    nome: 'Guilherme Pat',
    record: '6-0-0',
    ultimasLutas: [
      { result: 'W', opponent: 'Allen Frye Jr.', method: 'Decisao Unanime', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Thomas Petersen',
    record: '10-4-0',
    ultimasLutas: [
      { result: 'L', opponent: 'Vitor Petrino', method: 'KO/TKO R3', event: 'UFC Fight Night' },
      { result: 'W', opponent: "Don'Tale Mayes", method: 'Decisao Unanime', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Shamil Gaziev', method: 'KO/TKO R1', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan | Pos Weigh-Ins',
  evento_data: '4 de Abril, 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Peso Pesado',
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
      categoria_peso: 'Peso Pesado',
      num_rounds: 3,
      is_titulo: false,
      fighter1: {
        nome: 'Pat',
        record: '6-0-0',
      },
      fighter2: {
        nome: 'Petersen',
        record: '10-4-0',
      },
    },

    comparacao_estatistica: {
      stats: [
        {
          label: 'Sig. Strikes por Minuto',
          valueA: 4.27,
          valueB: 3.38,
          maxVal: 6,
          format: 'decimal',
          note: 'Pat acerta mais strikes por minuto com 64% de precisao. Volume e acuracia impressionantes para peso-pesado. Ambos bateram o peso sem problemas (Pat 250.5 lbs, Petersen 251 lbs), entao nenhum dos dois cortou muito.',
        },
        {
          label: 'Precisao de Strikes (%)',
          valueA: 64,
          valueB: 58,
          maxVal: 100,
          format: 'percent',
          note: 'Ambos sao precisos para o peso-pesado, mas Pat lidera com 64%. Numeros baseados em amostra pequena para Pat (1 luta UFC).',
        },
        {
          label: 'Strikes Absorvidos/Min',
          valueA: 2.20,
          valueB: 2.95,
          maxVal: 6,
          format: 'decimal',
          reverseWinner: true,
          note: 'Pat absorve menos strikes, sinal de boa defesa e movimentacao para um gigante de 1,98m. Petersen recebe quase um strike a mais por minuto.',
        },
        {
          label: 'Defesa de Strikes (%)',
          valueA: 61,
          valueB: 55,
          maxVal: 100,
          format: 'percent',
          note: 'Pat tem margem na defesa de strikes. Petersen com 55% e vulneravel, especialmente contra oponentes mais altos que exploram o jab.',
        },
        {
          label: 'Takedowns por 15 Min',
          valueA: 0.00,
          valueB: 3.71,
          maxVal: 5,
          format: 'decimal',
          note: 'Petersen e o lutador de wrestling aqui com 3.71 TDs por 15 minutos e 50% de precisao. Pat nunca tentou takedown no UFC, puro striker.',
        },
        {
          label: 'Precisao de Takedown (%)',
          valueA: 0,
          valueB: 50,
          maxVal: 100,
          format: 'percent',
          note: 'Petersen converte metade das tentativas de queda. Pat nao tem registro de takedowns.',
        },
        {
          label: 'Defesa de Takedown (%)',
          valueA: 0,
          valueB: 87,
          maxVal: 100,
          format: 'percent',
          note: 'Petersen tem 87% de defesa de takedown. Pat nao tem dados nessa categoria pois ninguem tentou derruba-lo ainda.',
        },
      ],
      tale_of_tape: [
        {
          label: 'Idade',
          fighter1: '31 anos',
          fighter2: '31 anos',
          note: 'Mesma idade, ambos no auge fisico',
        },
        {
          label: 'Altura',
          fighter1: '1,98m (6\'6")',
          fighter2: '1,85m (6\'1")',
          note: 'Pat tem 13cm de vantagem, diferenca gigante ate para peso-pesado',
        },
        {
          label: 'Envergadura',
          fighter1: '206cm (81")',
          fighter2: '188cm (74")',
          note: 'Pat com 18cm a mais de envergadura. Vantagem brutal para controlar a distancia',
        },
        {
          label: 'Peso na Pesagem',
          fighter1: '250.5 lbs',
          fighter2: '251 lbs',
          note: 'Pick\'em odds (-110/-110). Praticamente o mesmo peso, nenhum cortou de forma agressiva. Ambos pareciam saudaveis na pesagem.',
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
        nome: 'Pat',
        recent_fights: [
          {
            date: 'Dez 2025',
            opponent: 'Allen Frye Jr.',
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Estreia no UFC com vitoria solida por decisao unanime. Mostrou jab dominante e controle de distancia durante tres rounds.',
          },
        ],
      },
      fighter2: {
        nome: 'Petersen',
        recent_fights: [
          {
            date: 'Out 2025',
            opponent: 'Vitor Petrino',
            result: 'L',
            method: 'KO/TKO R3',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Parado por Petrino no terceiro round. Aguentou dois rounds mas o poder de Petrino foi demais no final.',
          },
          {
            date: 'Mai 2025',
            opponent: "Don'Tale Mayes",
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Vitoria por decisao usando wrestling ofensivo (9 tentativas de TD). Mostrou seu melhor caminho para vencer: controle no chao.',
          },
          {
            date: 'Fev 2025',
            opponent: 'Shamil Gaziev',
            result: 'L',
            method: 'KO/TKO R1',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Nocauteado no primeiro round por Gaziev. Mostra vulnerabilidade contra strikers pesados com poder real.',
          },
          {
            date: 'Jul 2024',
            opponent: 'Mohammed Usman',
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Vitoria solida por decisao contra Usman. Wrestling foi o diferencial.',
          },
          {
            date: 'Fev 2024',
            opponent: 'Jamal Pogues',
            result: 'L',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Derrota por pontos. Nao conseguiu impor seu wrestling e perdeu nas trocacoes.',
          },
        ],
      },
    },

    perfil_habilidades: {
      skills: [
        {
          label: 'Striking em Pe',
          valueA: 72,
          valueB: 55,
          labelA: 'Bom',
          labelB: 'Bom',
          advantage: 'fighter1',
          advantage_note: 'Pat tem volume superior (4.27 SLpM) com precisao de 64%. Sua altura e envergadura absurdas permitem controlar qualquer troca. Petersen e canhoto, o que adiciona imprevisibilidade, mas seus numeros de striking sao inferiores.',
        },
        {
          label: 'Wrestling Ofensivo',
          valueA: 30,
          valueB: 78,
          labelA: 'Ruim',
          labelB: 'Muito Bom',
          advantage: 'fighter2',
          advantage_note: 'Petersen e um wrestler natural com 3.71 TDs por 15 minutos e submissao por keylock no DWCS. Pat nunca tentou um takedown no UFC. O wrestling e a principal arma de Petersen.',
        },
        {
          label: 'Defesa e Absorcao',
          valueA: 70,
          valueB: 55,
          labelA: 'Bom',
          labelB: 'Bom',
          advantage: 'fighter1',
          advantage_note: 'Pat absorve apenas 2.20 strikes por minuto com 61% de defesa. Petersen absorve mais (2.95) com 55% de defesa, e ja foi nocauteado duas vezes nos ultimos 6 meses.',
        },
        {
          label: 'Controle de Distancia',
          valueA: 82,
          valueB: 42,
          labelA: 'Muito Bom',
          labelB: 'Medio',
          advantage: 'fighter1',
          advantage_note: 'Com 1,98m e 206cm de envergadura, Pat tem ferramentas fisicas absurdas para manter distancia. A desvantagem de 18cm de envergadura e o maior problema de Petersen.',
        },
        {
          label: 'Poder de Nocaute',
          valueA: 65,
          valueB: 60,
          labelA: 'Bom',
          labelB: 'Bom',
          advantage: 'even',
          advantage_note: 'Ambos sao peso-pesado, poder existe dos dois lados. Pat tem 4 KOs em 6 vitorias no geral. Petersen tem queixo vulneravel (nocauteado por Gaziev e Petrino recentemente).',
        },
        {
          label: 'Experiencia no UFC',
          valueA: 30,
          valueB: 65,
          labelA: 'Ruim',
          labelB: 'Bom',
          advantage: 'fighter2',
          advantage_note: 'Petersen tem 7 lutas no UFC com 3 vitorias. Pat tem apenas 1 luta. A experiencia pode ser fator se a luta ficar complicada.',
        },
      ],
      insight: 'Pesagem confirmou o que ja sabíamos: dois pesos-pesados saudaveis sem corte de peso agressivo. Pat pesou 250.5 lbs e Petersen 251 lbs. Odds de pick\'em (-110/-110) refletem a incerteza real deste confronto. Pat tem vantagens fisicas enormes mas nunca teve o wrestling testado. Petersen precisa fechar distancia e derrubar Pat. Se a luta ficar em pe, as dimensoes de Pat devem prevalecer.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Pat',
        ko_tko: { count: 4, percent: 67 },
        submission: { count: 0, percent: 0 },
        decision: { count: 2, percent: 33 },
        total_wins: 6,
      },
      fighter2: {
        nome: 'Petersen',
        ko_tko: { count: 4, percent: 40 },
        submission: { count: 3, percent: 30 },
        decision: { count: 3, percent: 30 },
        total_wins: 10,
      },
      insight: 'Pat tem perfil de finalizador com 67% de vitorias por nocaute. Petersen e mais versatil com distribuicao equilibrada. Ambos pesaram praticamente igual (250.5 vs 251 lbs), entao nenhum tem vantagem de tamanho no dia da luta. A diversidade de Petersen mostra mais caminhos para vencer, enquanto Pat depende do poder de impacto.',
    },

    previsao_final: {
      winner_name: 'Pat',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime',
      confidence_score: 6,
      confidence_label: 'MEDIA',
      explanation: 'Pesagem confirmou luta equilibrada: Pat 250.5 lbs, Petersen 251 lbs, odds de pick\'em (-110/-110). Pat entra com vantagens fisicas brutais (13cm mais alto, 18cm a mais de envergadura) e mostrou jab dominante na estreia. Petersen tem wrestling real (3.71 TDs/15min) mas foi nocauteado duas vezes nos ultimos meses (Gaziev R1, Petrino R3). Cada entrada de Petersen para o takedown sera perigosa contra o alcance de Pat. O brasileiro deve usar o jab, manter distancia e pontuar por tres rounds.',
      x_factor: {
        title: 'O wrestling de Petersen pode virar o jogo',
        description: 'Com 3.71 takedowns por 15 minutos, Petersen tem ferramentas reais para levar ao chao. O wrestling defensivo de Pat nunca foi testado no UFC. Se Petersen fechar, tudo muda.',
      },
      upset_alert: {
        title: 'Pat nunca foi testado de verdade',
        description: 'Apenas uma luta no UFC contra Allen Frye Jr. nao diz muito. Petersen ja enfrentou Petrino e Gaziev, calibre muito superior. A experiencia e resistencia de Petersen podem surpreender se Pat nao mantiver a distancia.',
      },
      probabilities: {
        fighter1: { nome: 'Pat', percent: 55 },
        fighter2: { nome: 'Petersen', percent: 43 },
        draw: 2,
      },
      value_picks: undefined,
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise as unknown as Parameters<typeof loadAnalysisData>[0], locale, 'pat-vs-petersen-pos-weighins');
  return <PrelimsAnalysisView analise={data as unknown as PrelimsAnalise} lang={locale as Lang} />;
}
