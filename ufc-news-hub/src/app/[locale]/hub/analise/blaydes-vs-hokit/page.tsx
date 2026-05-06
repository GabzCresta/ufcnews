import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'blaydes-vs-hokit',
  evento_id: null,
  slug: 'blaydes-vs-hokit',
  titulo: 'Blaydes vs Hokit: Os Primeiros Dois Minutos',
  subtitulo:
    'O wrestler mais dominante da história dos pesos pesados do UFC contra um ex-jogador de NFL invicto que finaliza todo mundo. Quem impõe o jogo nos primeiros 120 segundos define a noite.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,96m', envergadura: '203cm', idade: 35, academia: 'Elevation Fight Team, Denver' },
      fighter2: { altura: '1,88m', envergadura: '193cm', idade: 30, academia: 'AKA San Jose' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'TKO R3 (ground-and-pound) ou Decisão Unânime',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Curtis Blaydes',
    apelido: 'Razor',
    record: '19-5-0',
    ranking: '#5 Peso Pesado',
    ultimasLutas: [
      { result: 'W', opponent: 'Rizvan Kuniev', method: 'Decisão Dividida', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Tom Aspinall', method: 'KO R1 (título interino)', event: 'UFC 304' },
      { result: 'W', opponent: 'Jailton Almeida', method: 'KO R2', event: 'UFC 299' },
    ],
  },
  fighter2_info: {
    nome: 'Josh Hokit',
    apelido: 'The Incredible Hok',
    record: '8-0-0',
    ranking: 'Não ranqueado',
    ultimasLutas: [
      { result: 'W', opponent: 'Adversário UFC #2', method: 'TKO R1', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Adversário UFC #1', method: 'TKO R1', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Guilherme Uriel', method: 'TKO R2', event: 'DWCS' },
    ],
  },
  evento_nome: 'UFC 327: Procházka vs Ulberg',
  evento_data: '11 de Abril, 2026',
  evento_local: 'Kaseya Center, Miami, Flórida',
  categoria_peso: 'Peso Pesado',
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
      categoria_peso: 'Peso Pesado',
      num_rounds: 3,
      titulo_em_jogo: 'Main Card',
      tagline: 'Os Primeiros Dois Minutos',
      tagline_sub:
        'Blaydes detém o recorde de takedowns na história dos pesos pesados do UFC. Hokit finalizou todos os 8 oponentes da carreira. Quem impõe o jogo primeiro define a noite.',
      fighter1: {
        nome_completo: 'Curtis "Razor" Blaydes',
        apelido: 'Razor',
        sobrenome: 'Blaydes',
        record: '19-5-0',
        ranking: '#5 Peso Pesado',
        info_extra: 'Naperville, Illinois | 35 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-06%2FBLAYDES_CURTIS_L_06-21.png%3Fitok%3D6cGx6bc9',
      },
      fighter2: {
        nome_completo: 'Josh "The Incredible Hok" Hokit',
        apelido: 'The Incredible Hok',
        sobrenome: 'Hokit',
        record: '8-0-0',
        ranking: 'Invicto, em ascensão',
        info_extra: 'Fresno, Califórnia | 30 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2026-01%2FHOKIT_JOSH_L_01-24.png%3Fitok%3DLhoGGF9J',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'Os Primeiros Dois Minutos',
      insight:
        'Curtis Blaydes detém o recorde absoluto de takedowns na história dos pesos pesados do UFC: 64 quedas conectadas, mais tempo de controle no chão que qualquer outro pesado. Josh Hokit é invicto em oito lutas profissionais, finalizou todos os oito antes do tempo, e nunca enfrentou um wrestler de elite na carreira. Os oito adversários do Hokit vieram para a frente e foram apagados. Blaydes não vai vir para a frente. Vai correr na sua perna nos primeiros segundos. Se Hokit defender essa primeira entrada, ele tem o poder para virar a luta em uma troca. Se Blaydes derrubar, é noite longa para o ex-jogador de NFL.',
      tension: {
        truth_a:
          'Blaydes tem o recorde de 64 takedowns na história dos pesos pesados do UFC e mais tempo de controle de chão que qualquer adversário. Hokit nunca defendeu um shot single-leg de elite na carreira inteira.',
        truth_b:
          'Hokit finalizou 100 por cento dos oito adversários profissionais. Blaydes tem CINCO derrotas na carreira, todas por nocaute (Ngannou duas vezes, Lewis, Pavlovich, Aspinall). O queixo é o ponto fraco que o histórico documenta.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Curtis Blaydes',
        color: 'red',
        recent_fights: [
          {
            date: 'Jun 2025',
            opponent: 'Rizvan Kuniev',
            result: 'W',
            method: 'Decisão Dividida',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'UFC Fight Night Baku. Vitória feia em decisão dividida. Mostrou cardio e wrestling, mas o público vaiou o ritmo apático.',
          },
          {
            date: 'Jul 2024',
            opponent: 'Tom Aspinall',
            result: 'L',
            method: 'KO R1',
            opponent_rank: 'Campeão Interino',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'UFC 304, Manchester. Disputa pelo título interino. Aspinall apagou Blaydes em 60 segundos com um overhand brutal. Quinta derrota da carreira, todas por nocaute.',
          },
          {
            date: 'Mar 2024',
            opponent: 'Jailton Almeida',
            result: 'W',
            method: 'KO R2',
            opponent_rank: '#7 HW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC 299. Defendeu os takedowns do brasileiro e nocauteou no R2 com cotoveladas no chão. Statement de wrestler vs wrestler.',
          },
        ],
        momentum_score: 5,
        momentum_label: 'Em Recuperação',
        momentum_trend: 'stable',
        momentum_note:
          'Blaydes voltou a vencer depois do desastre contra Aspinall, mas a vitória sobre Kuniev foi tão cinzenta que ninguém comemorou. O histórico recente é o de um veterano que vence quando consegue impor a wrestling, e perde de forma catastrófica quando alguém com poder real conecta o queixo. Aos 35 anos, Blaydes está na fase em que cada luta é um desafio para confirmar que ainda pertence ao top 5.',
      },
      fighter2: {
        nome: 'Josh Hokit',
        color: 'blue',
        recent_fights: [
          {
            date: 'Jan 2026',
            opponent: 'Segundo adversário UFC',
            result: 'W',
            method: 'TKO R1',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Segunda vitória no UFC, segunda finalização no R1. Ainda não enfrentou nenhum top 15.',
          },
          {
            date: 'Out 2025',
            opponent: 'Primeiro adversário UFC',
            result: 'W',
            method: 'TKO R1',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Estreia no UFC, finalização no R1. Atribuiu o resultado ao instinto desenvolvido na NFL.',
          },
          {
            date: 'Ago 2025',
            opponent: 'Guilherme Uriel',
            result: 'W',
            method: 'TKO R2',
            opponent_rank: 'Contender Series',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Dana White Contender Series. Ganhou o contrato direto com finalização no R2. Dana fez o anúncio pessoalmente.',
          },
        ],
        momentum_score: 9,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note:
          'Hokit é o prospect mais quente dos pesos pesados em 2025-2026. Oito vitórias profissionais, oito finalizações antes do tempo. Background de NFL undrafted (49ers, Cardinals) e All-American de wrestling em Fresno State. Aos 30 anos é jovem para o peso pesado, com motor atlético acima da média e poder bruto. O único asterisco é a inexperiência: nunca enfrentou um wrestler de elite, nunca foi ao R3 no UFC, nunca esteve no main card de um pay-per-view.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Curtis Blaydes',
        media_oponentes: 4,
        media_oponentes_label: 'Muito Bom',
        aproveitamento: '14V-5D (74%)',
        contra_top5: '3V-4D',
      },
      fighter2: {
        nome: 'Josh Hokit',
        media_oponentes: 1,
        media_oponentes_label: 'Ruim',
        aproveitamento: '8V-0D (100%)',
        contra_top5: '0V-0D',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Sem oponentes em comum. Blaydes tem mais de uma década enfrentando o topo da divisão (Ngannou duas vezes, Aspinall, Lewis, Pavlovich, Almeida). Hokit nunca enfrentou um top 15. O salto de nível para o Hokit é vertical.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.0, valueB: 5.5, maxVal: 7, format: 'decimal', note: 'Hokit é mais agressivo no striking, mas a amostra é pequena' },
        { label: 'Precisão de Strikes (%)', valueA: 56, valueB: 60, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.4, valueB: 2.5, maxVal: 5, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 51, valueB: 58, maxVal: 100, format: 'percent', note: 'Blaydes tem defesa fraca para um top 5 do peso pesado' },
        { label: 'Takedowns por 15 Min', valueA: 4.5, valueB: 1.0, maxVal: 6, format: 'decimal', note: 'Blaydes é o líder histórico de takedowns dos pesos pesados' },
        { label: 'Precisão de Takedown (%)', valueA: 49, valueB: 60, maxVal: 100, format: 'percent' },
        { label: 'Defesa de Takedown (%)', valueA: 71, valueB: 50, maxVal: 100, format: 'percent', note: 'A TDD do Hokit nunca foi testada por wrestler real' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '35 anos', fighter2: '30 anos' },
        { label: 'Altura', fighter1: '1,96m', fighter2: '1,88m' },
        { label: 'Envergadura', fighter1: '203cm', fighter2: '193cm' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox' },
        { label: 'Academia', fighter1: 'Elevation Fight Team', fighter2: 'AKA San Jose' },
        { label: 'Experiência UFC', fighter1: '20 lutas', fighter2: '2 lutas' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter2',
          gap: 2,
          note: 'Hokit tem o motor atlético da NFL e movimentação rápida para um peso pesado. Blaydes nunca foi striker primário.',
        },
        {
          label: 'Striking em Curta Distância',
          advantage: 'fighter2',
          gap: 1,
          note: 'Hokit prefere a curta distância onde o poder bruto importa. Blaydes prefere o clinch que vira para a queda.',
        },
        {
          label: 'Poder de Nocaute',
          advantage: 'fighter2',
          gap: 2,
          note: 'Hokit finalizou 100 por cento dos opponents. Blaydes tem 13 nocautes em 19 vitórias, a maioria é ground-and-pound e não tiro único.',
        },
        {
          label: 'Defesa de Striking',
          advantage: 'fighter2',
          gap: 1,
          note: 'Blaydes tem 5 nocautes sofridos na carreira. Defesa de queixo é o ponto fraco documentado.',
        },
        {
          label: 'Wrestling e Grappling',
          advantage: 'fighter1',
          gap: 5,
          note: 'Recorde histórico de takedowns dos pesos pesados do UFC: 64. A wrestling é o que sobra do Razor e ainda é elite.',
        },
        {
          label: 'Experiência (top level)',
          advantage: 'fighter1',
          gap: 5,
          note: 'Vinte lutas no UFC contra os melhores da divisão. Hokit tem duas lutas no UFC e nenhuma contra top 15.',
        },
      ],
      summary:
        'Blaydes domina onde a luta vai chegar (chão e wrestling), Hokit domina onde a luta começa (striking explosivo nos primeiros minutos). É uma corrida contra o tempo: se Blaydes conecta o primeiro takedown, controla o resto. Se Hokit defende e impõe a curta distância, o queixo do Razor está exposto.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Curtis Blaydes',
        ko_tko: { count: 13, percent: 68 },
        submission: { count: 0, percent: 0 },
        decision: { count: 6, percent: 32 },
        total_wins: 19,
      },
      fighter2: {
        nome: 'Josh Hokit',
        ko_tko: { count: 5, percent: 63 },
        submission: { count: 3, percent: 37 },
        decision: { count: 0, percent: 0 },
        total_wins: 8,
      },
      insight:
        'A diferença é gritante: Blaydes tem 68 por cento por KO/TKO (13 de 19), a maioria por ground-and-pound brutal depois de impor wrestling. Hokit nunca venceu por decisão na vida, todos os 8 combates terminaram antes do tempo. Quem ditar o estilo vence: Blaydes quer 15 minutos no chão, Hokit quer 5 minutos de pé.',
    },

    previsao_final: {
      winner_name: 'Curtis Blaydes',
      winner_side: 'fighter1',
      predicted_method: 'TKO R3 (ground-and-pound) ou Decisão Unânime',
      confidence_score: 6,
      confidence_label: 'MÉDIA',
      explanation:
        'Blaydes vence por experiência e wrestling se conseguir impor o jogo no chão antes de levar o tiro fatal nos primeiros minutos. A análise é direta: o Razor tem mais de uma década enfrentando o topo da divisão, detém o recorde histórico de takedowns dos pesos pesados, e Hokit nunca defendeu um shot de elite na carreira. O risco real é o queixo do Blaydes, que tem cinco nocautes sofridos, e o poder bruto do Hokit, que nunca falhou em finalizar um adversário. É uma luta de janela: os primeiros dois minutos definem tudo.',
      x_factor: {
        title: 'O Primeiro Shot do Blaydes',
        description:
          'Se Blaydes entrar em um single-leg ou double-leg nos primeiros 90 segundos e conseguir levar Hokit ao chão, a luta vira ground-and-pound clínico até o final. Se Hokit defender a primeira tentativa e contra-atacar com poder, a inexperiência some e o queixo do Razor está exposto.',
      },
      upset_alert: {
        title: 'Hokit Por Tiro Único',
        description:
          'Hokit tem oito finalizações em oito lutas. Não importa se é wrestler ou striker, todos cairam antes do tempo. Se ele encontrar a janela contra um Blaydes que historicamente cai para qualquer pesado com poder, o upset acontece em 30 segundos.',
      },
      probabilities: {
        fighter1: { nome: 'Blaydes', percent: 60 },
        fighter2: { nome: 'Hokit', percent: 38 },
        draw: 2,
      },
      odds: {
        fighter1_odds: '-145',
        fighter2_odds: '+120',
        fighter1_name: 'Curtis Blaydes',
        fighter2_name: 'Josh Hokit',
        source: 'Média de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Curtis Blaydes',
            odds: '-145',
            reasoning:
              'Linha justa para o cenário mais provável. Não é grande valor, mas é a aposta correta. A wrestling de elite contra um prospect de oito lutas vence a maioria das vezes.',
          },
          {
            type: 'Método',
            pick: 'Blaydes por Decisão',
            odds: '+200',
            reasoning:
              'Quase metade das vitórias do Blaydes vieram por decisão (9 de 19). Apostar nele para finalizar é ir contra o padrão recente, que é controle e ground-and-pound sem stoppage.',
          },
          {
            type: 'Hokit por finalização',
            pick: 'Josh Hokit por KO/TKO ou submissão',
            odds: '+150',
            reasoning:
              'Cenário de upset mais provável. Hokit nunca venceu por decisão, todas as 8 vitórias foram antes do tempo (5 KO e 3 submissões). Contra o queixo comprometido do Blaydes, o caminho mais provável é nocaute, mas a arma de submissão existe.',
          },
          {
            type: 'Duração',
            pick: 'Mais de 1,5 Rounds',
            odds: '-130',
            reasoning:
              'Blaydes não finaliza no R1 desde 2019 e Hokit precisa de janela para impor o striking. As últimas seis lutas do Blaydes passaram do R1.',
          },
        ],
        best_bet: {
          pick: 'Hokit por KO/TKO a +150',
          reasoning:
            'A melhor relação risco/recompensa do card. Não é a aposta mais provável, mas é o cenário onde o ROI compensa: queixo conhecido do Blaydes contra finalizador 100 por cento.',
        },
      },
      key_stats: [
        {
          value: '64',
          label: 'takedowns conectados na carreira UFC do Blaydes (recorde histórico dos pesos pesados)',
          sublabel: 'Mais tempo de controle de chão que qualquer outro pesado da história',
        },
        {
          value: '100%',
          label: 'das lutas profissionais do Hokit terminaram em finalização (8 em 8)',
          sublabel: 'Nenhum adversário sobreviveu até o R3 contra ele',
        },
      ],
      armadilha: {
        titulo: 'Hokit por finalização rápida no R1',
        descricao:
          'O mercado paga bem em Hokit por KO no R1 porque é a narrativa do jovem invicto. Mas Blaydes historicamente sobrevive ao primeiro round contra todo mundo (raramente é apagado em menos de 60 segundos), e o pattern do Hokit é vencer por TKO no R2, não R1. Se quiser apostar em Hokit, a aposta correta é finalização em qualquer round, não R1 específico.',
      },
      conviction: {
        thesis:
          'A tese é: Curtis Blaydes vence por duas razões estruturais, mas com risco real. Primeiro, ele detém o recorde histórico de takedowns dos pesos pesados do UFC com 64 quedas conectadas, e Josh Hokit nunca defendeu um single-leg ou double-leg de wrestler de elite na carreira inteira de oito lutas. Segundo, Blaydes tem mais de uma década enfrentando o topo da divisão (Ngannou, Aspinall, Lewis, Pavlovich, Almeida) enquanto Hokit nunca enfrentou um top 15, e o salto de nível para um prospect de oito lutas sempre é vertical. O caminho é Blaydes fechar a distância nos primeiros dois minutos, conectar o primeiro shot, levar a luta ao chão e administrar com ground-and-pound por três rounds. Isso desmorona se Hokit defender o primeiro shot e conectar um soco limpo no queixo do Blaydes, que tem cinco nocautes sofridos na carreira.',
        conviction_score: 6,
        conviction_rationale:
          'Convicção 6 porque o cenário do Blaydes é claro (wrestling impõe contra inexperiente) mas o queixo dele é uma bomba-relógio real. Não é convicção 7 ou 8 porque Hokit é genuinamente perigoso e Blaydes vem caindo de pé contra qualquer pesado que conecta limpo. Não é 4 ou 5 porque os pilares da experiência e wrestling pesam contra prospects sem amostra contra elite.',
        conviction_breakers: [
          'Se Hokit defender o primeiro takedown do Blaydes nos primeiros 90 segundos, o sprawl do ex-jogador da NFL pode reverter a dinâmica e expor o queixo do Razor.',
          'Se Blaydes mostrar a mesma performance apática da decisão sobre Kuniev em vez do controle dominante sobre Almeida, Hokit acumula janelas para conectar.',
          'Se o queixo do Blaydes ceder a um soco único qualquer (padrão das cinco derrotas anteriores), a invencibilidade do prospect se confirma de forma brutal.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 38,
          key_scenario:
            'Hokit sai do canto buscando trocação curta nos primeiros 60 segundos. Quando Blaydes muda de nível para o single-leg, Hokit defende o sprawl com a base do background de wrestling de Fresno State, e quando Blaydes recompõe a guarda, Hokit conecta um overhand de direita no queixo. O Razor cai como caiu para Aspinall, Lewis, Pavlovich e Ngannou. Vitória por TKO antes do R2.',
          required_conditions: [
            'Defender o primeiro takedown do Blaydes nos primeiros 90 segundos',
            'Manter a luta em pé na curta distância onde o poder bruto importa',
            'Conectar um soco limpo no queixo antes do R2',
            'O queixo do Blaydes ceder ao primeiro impacto sério (padrão das cinco derrotas)',
          ],
          historical_precedent:
            'Tom Aspinall vs Curtis Blaydes (UFC 304, julho de 2024): exatamente esse cenário aconteceu. Aspinall apagou Blaydes em 60 segundos com um overhand brutal. Hokit não tem o currículo de Aspinall, mas tem o mesmo perfil de poder explosivo no R1.',
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'blaydes-vs-hokit');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
