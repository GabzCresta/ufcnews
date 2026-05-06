import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'reyes-vs-walker',
  evento_id: null,
  slug: 'reyes-vs-walker',
  titulo: 'Reyes vs Walker: Dois Queixos, Quem Conecta Primeiro',
  subtitulo:
    'Dois finalizadores explosivos com queixos questionados nos últimos anos. Reyes vem de ser apagado por Ulberg em um round, Walker vem de duas derrotas brutais antes do retorno. Quem acerta primeiro vence em 60 segundos.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,93m', envergadura: '198cm', idade: 35, academia: 'Joint Force Training Center, Califórnia' },
      fighter2: { altura: '1,93m', envergadura: '208cm', idade: 33, academia: 'SBG Ireland, Dublin (John Kavanagh)' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'KO/TKO R1-R2 (counter de southpaw)',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Dominick Reyes',
    apelido: 'The Devastator',
    record: '15-5-0',
    ranking: '#10 Peso Meio-Pesado',
    ultimasLutas: [
      { result: 'L', opponent: 'Carlos Ulberg', method: 'KO R1', event: 'UFC Fight Night 260' },
      { result: 'W', opponent: 'Nikita Krylov', method: 'KO R1', event: 'UFC 314' },
      { result: 'W', opponent: 'Anthony Smith', method: 'TKO R2', event: 'UFC 310' },
    ],
  },
  fighter2_info: {
    nome: 'Johnny Walker',
    apelido: 'The Brazilian Maniac',
    record: '22-9-0',
    ranking: '#11 Peso Meio-Pesado',
    ultimasLutas: [
      { result: 'W', opponent: 'Zhang Mingyang', method: 'TKO R2', event: 'UFC Shanghai' },
      { result: 'L', opponent: 'Volkan Oezdemir', method: 'KO R1', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Magomed Ankalaev', method: 'KO R2', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC 327: Procházka vs Ulberg',
  evento_data: '11 de Abril, 2026',
  evento_local: 'Kaseya Center, Miami, Flórida',
  categoria_peso: 'Peso Meio-Pesado (205 lbs)',
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
      categoria_peso: 'Peso Meio-Pesado (205 lbs)',
      num_rounds: 3,
      titulo_em_jogo: 'Main Card',
      tagline: 'Quem Acerta Primeiro Vence',
      tagline_sub:
        'Dois finalizadores explosivos com queixos comprometidos. Reyes acaba de ser apagado por Ulberg em um round. Walker vem de duas derrotas brutais. Não vai ter R3.',
      fighter1: {
        nome_completo: 'Dominick "The Devastator" Reyes',
        apelido: 'The Devastator',
        sobrenome: 'Reyes',
        record: '15-5-0',
        ranking: '#10 Peso Meio-Pesado',
        info_extra: 'Hesperia, Califórnia | 35 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-01%2F5%2FREYES_DOMINICK_L_12-07.png%3Fitok%3D0zGGwuvL',
      },
      fighter2: {
        nome_completo: 'Johnny "The Brazilian Maniac" Walker',
        apelido: 'The Brazilian Maniac',
        sobrenome: 'Walker',
        record: '22-9-0',
        ranking: '#11 Peso Meio-Pesado',
        info_extra: 'João Pessoa, Brasil | SBG Dublin | 33 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-08%2FWALKER_JOHNNY_L_08-23.png%3Fitok%3DJTGJfTnu',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'Dois Queixos, Uma Janela',
      insight:
        'Esta luta é uma corrida pelo primeiro acerto limpo. Dominick Reyes acaba de ser apagado por Carlos Ulberg em um round em setembro de 2025, recebendo um chute alto que terminou tudo em menos de cinco minutos. Johnny Walker vem de duas derrotas devastadoras consecutivas (Ankalaev e Oezdemir, ambas por nocaute) antes de bouncing back contra Zhang Mingyang em agosto. Os dois sabem que perder aqui significa fim da janela para o título. Os dois treinam para o mesmo plano: encontrar o queixo do outro nos primeiros minutos. A diferença é que Reyes é southpaw técnico e Walker é o caos puro, e o caos historicamente perde para a técnica quando o queixo de ambos é igualmente frágil.',
      tension: {
        truth_a:
          'Walker treina no SBG Dublin sob John Kavanagh (mesmo coach do McGregor), tem 208cm de envergadura (a maior da divisão) e poder bruto em qualquer ângulo. O ataque imprevisível pode encontrar o queixo do Reyes que acabou de ser apagado.',
        truth_b:
          'Reyes é southpaw com técnica de boxe limpa e contra-ataque preciso. Ankalaev fez exatamente esse perfil contra Walker e terminou tudo em dois rounds. Krylov era o mesmo arquétipo do Walker, e Reyes apagou ele em um round em abril.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Dominick Reyes',
        color: 'red',
        recent_fights: [
          {
            date: 'Set 2025',
            opponent: 'Carlos Ulberg',
            result: 'L',
            method: 'KO R1',
            opponent_rank: '#3 LHW',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'UFC Fight Night 260. Foi apagado em menos de cinco minutos com um chute alto. Quebrou a sequência de três vitórias por nocaute.',
          },
          {
            date: 'Abr 2025',
            opponent: 'Nikita Krylov',
            result: 'W',
            method: 'KO R1',
            opponent_rank: '#11 LHW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC 314. Apagou Krylov no R1 com um straight de esquerda. Mostrou que o counter de southpaw ainda funciona contra o caos.',
          },
          {
            date: 'Dez 2024',
            opponent: 'Anthony Smith',
            result: 'W',
            method: 'TKO R2',
            opponent_rank: '#13 LHW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC 310. Finalizou Smith no R2 com cotoveladas. Segunda vitória da sequência de retorno.',
          },
          {
            date: 'Set 2024',
            opponent: 'Dustin Jacoby',
            result: 'W',
            method: 'KO R1',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Primeira vitória da sequência de comeback. Reyes finalmente parecia o original depois de quatro derrotas seguidas.',
          },
          {
            date: 'Set 2022',
            opponent: 'Ryan Spann',
            result: 'L',
            method: 'KO R1',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'A quarta derrota seguida. Período mais escuro da carreira, falou abertamente sobre crise mental e profissional.',
          },
        ],
        momentum_score: 6,
        momentum_label: 'Em Alta (com asterisco)',
        momentum_trend: 'stable',
        momentum_note:
          'A sequência de comeback do Reyes é real (3 nocautes seguidos antes do Ulberg) mas o teto ficou exposto na derrota para o Ulberg. O straight de esquerda continua devastador contra strikers que vêm para a frente sem técnica de southpaw, mas contra opponents que sabem fechar a distância tecnicamente, ele cai. Walker é o oposto do Ulberg: caos puro, vai entrar para a frente, vai oferecer o queixo. É exatamente o cardápio do Reyes recente.',
      },
      fighter2: {
        nome: 'Johnny Walker',
        color: 'blue',
        recent_fights: [
          {
            date: 'Ago 2025',
            opponent: 'Zhang Mingyang',
            result: 'W',
            method: 'TKO R2',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC Shanghai. Vitória crítica para a carreira depois de duas derrotas consecutivas por nocaute. Headlined o card.',
          },
          {
            date: 'Out 2024',
            opponent: 'Volkan Oezdemir',
            result: 'L',
            method: 'KO R1',
            opponent_rank: '#7 LHW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Apagado em menos de dois minutos. Segunda derrota consecutiva por nocaute brutal.',
          },
          {
            date: 'Jan 2024',
            opponent: 'Magomed Ankalaev',
            result: 'L',
            method: 'KO R2',
            opponent_rank: '#1 LHW',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'Ankalaev usou exatamente o perfil de southpaw técnico que Reyes representa. Walker foi apagado no R2.',
          },
          {
            date: 'Out 2023',
            opponent: 'Anthony Smith',
            result: 'W',
            method: 'Vitória por interrupção (lesão Smith)',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Vitória polêmica por lesão acidental do Smith. Não conta plenamente como statement.',
          },
          {
            date: 'Jul 2023',
            opponent: 'Anthony Smith (primeira luta)',
            result: 'W',
            method: 'TKO R1',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Finalização clássica do Walker dos primeiros anos. Power, agressão, R1.',
          },
        ],
        momentum_score: 5,
        momentum_label: 'Bouncing Back',
        momentum_trend: 'stable',
        momentum_note:
          'Walker fala publicamente sobre saúde mental, treina no SBG Dublin sob John Kavanagh (coach do McGregor), e descreveu essa fase da carreira como sua "última corrida pelo título". A vitória contra Mingyang em Shanghai foi essencial para o psicológico mas não foi contra elite. As duas derrotas anteriores (Ankalaev e Oezdemir) foram brutais e expuseram que o queixo cedeu nos últimos anos.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Dominick Reyes',
        media_oponentes: 4,
        media_oponentes_label: 'Muito Bom',
        aproveitamento: '9V-5D (64%)',
        contra_top5: '0V-4D',
      },
      fighter2: {
        nome: 'Johnny Walker',
        media_oponentes: 3,
        media_oponentes_label: 'Bom',
        aproveitamento: '14V-9D (61%)',
        contra_top5: '0V-3D',
      },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note:
        'Ambos enfrentaram Anthony Smith. Reyes finalizou no R2 em dezembro de 2024 com cotoveladas. Walker venceu duas vezes (uma por TKO no R1, outra por interrupção devido a lesão). O resultado contra o mesmo adversário favorece levemente Walker em termos de método mas Reyes em recência.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.5, valueB: 4.8, maxVal: 7, format: 'decimal' },
        { label: 'Precisão de Strikes (%)', valueA: 49, valueB: 53, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 4.0, valueB: 3.8, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 52, valueB: 51, maxVal: 100, format: 'percent', note: 'Os dois têm defesa medíocre para o nível atual' },
        { label: 'Takedowns por 15 Min', valueA: 0.5, valueB: 0.7, maxVal: 3, format: 'decimal' },
        { label: 'Defesa de Takedown (%)', valueA: 68, valueB: 65, maxVal: 100, format: 'percent' },
        { label: 'Knockdowns por 15 Min', valueA: 0.85, valueB: 0.78, maxVal: 2, format: 'decimal', note: 'Os dois têm poder real e finalizam quando conectam' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '35 anos', fighter2: '33 anos' },
        { label: 'Altura', fighter1: '1,93m', fighter2: '1,93m' },
        { label: 'Envergadura', fighter1: '198cm', fighter2: '208cm' },
        { label: 'Stance', fighter1: 'Southpaw', fighter2: 'Switch (Orthodox/Southpaw)' },
        { label: 'Academia', fighter1: 'Joint Force (Califórnia)', fighter2: 'SBG Ireland, Dublin' },
        { label: 'Experiência UFC', fighter1: '14 lutas', fighter2: '14 lutas' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter2',
          gap: 1,
          note: 'A envergadura de 208cm do Walker é a maior da divisão. Mas a técnica do Reyes é mais limpa quando os dois estão na média distância.',
        },
        {
          label: 'Striking em Curta Distância',
          advantage: 'fighter2',
          gap: 2,
          note: 'Walker é o caos puro no clinch e na trocação curta. Reyes prefere manter distância e contra-atacar.',
        },
        {
          label: 'Poder de Nocaute',
          advantage: 'even',
          gap: 0,
          note: 'Ambos têm finalizações documentadas em qualquer ângulo. Reyes tem o straight de esquerda devastador, Walker tem o overhand imprevisível.',
        },
        {
          label: 'Defesa de Striking',
          advantage: 'fighter1',
          gap: 1,
          note: 'Os dois caíram por nocaute recentemente. Reyes tem técnica defensiva levemente superior, Walker depende mais do reach para defesa.',
        },
        {
          label: 'Técnica vs Caos',
          advantage: 'fighter1',
          gap: 3,
          note: 'Reyes é southpaw técnico que vence opponents que vêm para a frente sem técnica. Walker é exatamente esse perfil. Padrão Krylov.',
        },
        {
          label: 'Cardio (3 rounds)',
          advantage: 'fighter1',
          gap: 1,
          note: 'Walker já gassou em lutas de três rounds. Reyes manteve ritmo até o R5 contra Jon Jones em 2020.',
        },
      ],
      summary:
        'Reyes vence se conseguir manter a luta na média distância e capitalizar com counter de southpaw quando Walker entrar para a frente sem técnica. Walker vence se conseguir caos absoluto nos primeiros 60 segundos e encontrar o queixo do Reyes que acabou de ser apagado.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Dominick Reyes',
        ko_tko: { count: 10, percent: 67 },
        submission: { count: 2, percent: 13 },
        decision: { count: 3, percent: 20 },
        total_wins: 15,
      },
      fighter2: {
        nome: 'Johnny Walker',
        ko_tko: { count: 17, percent: 77 },
        submission: { count: 3, percent: 14 },
        decision: { count: 2, percent: 9 },
        total_wins: 22,
      },
      insight:
        'Os dois são finalizadores natos. Reyes tem 67 por cento de KO/TKO, Walker tem 77 por cento. Ambos preferem terminar a luta antes do tempo. Apenas cinco das 37 vitórias combinadas foram por decisão. A probabilidade de essa luta passar dos juízes é baixíssima.',
    },

    previsao_final: {
      winner_name: 'Dominick Reyes',
      winner_side: 'fighter1',
      predicted_method: 'KO/TKO R1-R2 (counter de southpaw)',
      confidence_score: 6,
      confidence_label: 'MÉDIA',
      explanation:
        'Reyes vence por dois motivos estruturais: ele é southpaw técnico e Walker historicamente perde para esse perfil exato (Ankalaev usou esse molde para apagar Walker no R2). Em abril de 2025, Reyes apagou Krylov com um straight de esquerda no R1, e Krylov é o mesmo arquétipo do Walker: brawler unorthodox que vem para a frente sem técnica. O risco real é o queixo do Reyes, que acabou de ceder contra Ulberg, e a janela imprevisível do Walker em qualquer ângulo. É uma luta de moeda no ar com leve inclinação técnica.',
      x_factor: {
        title: 'A Primeira Troca Limpa',
        description:
          'Esta luta não vai aos juízes. Os dois são finalizadores natos com queixos questionados. Quem conectar primeiro vence em 60 segundos. A pergunta é: técnica de Reyes prevalece ou caos do Walker encontra a janela?',
      },
      upset_alert: {
        title: 'Walker Por Tiro Imprevisível',
        description:
          'Walker tem 208cm de envergadura, treina sob John Kavanagh, e tem o overhand imprevisível que pode vir de qualquer ângulo. Se ele encontrar o queixo do Reyes que acabou de ser apagado por Ulberg, a vitória vem em qualquer momento dos primeiros dois rounds.',
      },
      probabilities: {
        fighter1: { nome: 'Reyes', percent: 56 },
        fighter2: { nome: 'Walker', percent: 42 },
        draw: 2,
      },
      odds: {
        fighter1_odds: '-130',
        fighter2_odds: '+100',
        fighter1_name: 'Dominick Reyes',
        fighter2_name: 'Johnny Walker',
        source: 'Média de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Dominick Reyes',
            odds: '-130',
            reasoning:
              'Pequeno edge técnico sobre o pick \'em do mercado. O southpaw vs unorthodox brawler tem precedente claro com Krylov e Ankalaev. Aposta de risco moderado.',
          },
          {
            type: 'Como termina (qualquer lutador)',
            pick: 'A luta termina por KO/TKO',
            odds: '-200',
            reasoning:
              'Soma das taxas de finalização: 67 por cento Reyes, 77 por cento Walker. Apenas seis decisões em 37 vitórias combinadas. Ir para os juízes é estatisticamente improvável.',
          },
          {
            type: 'Rounds 1 ou 2',
            pick: 'A luta termina antes do R3',
            odds: '-130',
            reasoning:
              'As últimas seis lutas combinadas terminaram nos R1 ou R2. Os dois saem para a frente buscando o finish desde o primeiro segundo.',
          },
          {
            type: 'Reyes por nocaute',
            pick: 'Dominick Reyes por KO/TKO',
            odds: '+150',
            reasoning:
              'Se Reyes vencer, será por finalização. O método é o cenário mais provável dentro da pick principal e oferece valor melhor que a moneyline pura.',
          },
        ],
        best_bet: {
          pick: 'Reyes por KO/TKO a +150',
          reasoning:
            'A combinação certa de probabilidade e retorno. O straight de esquerda contra brawler unorthodox tem precedente direto na vitória sobre Krylov seis meses atrás.',
        },
      },
      key_stats: [
        {
          value: '3',
          label: 'derrotas por nocaute do Walker nas últimas cinco lutas',
          sublabel: 'Ankalaev (R2), Hill (R2), Oezdemir (R1) — o queixo cedeu',
        },
        {
          value: '208cm',
          label: 'de envergadura do Walker (a maior da divisão dos meio-pesados)',
          sublabel: 'Vantagem real de reach que pode neutralizar o counter de southpaw do Reyes',
        },
      ],
      armadilha: {
        titulo: 'Walker por nocaute no R1',
        descricao:
          'O mercado paga bem em Walker por KO no R1 porque é o estilo dele. Mas as três últimas finalizações que ele fez aconteceram no R2, não no R1, e Reyes raramente é apagado nos primeiros 60 segundos. Se quiser apostar em Walker, a aposta correta é finalização em qualquer round.',
      },
      conviction: {
        thesis:
          'A tese é: Dominick Reyes vence por dois motivos estruturais que se reforçam. Primeiro, ele é southpaw técnico com straight de esquerda devastador, e Walker historicamente perde para esse perfil exato (Magomed Ankalaev usou exatamente esse molde para apagar Walker no R2 em janeiro de 2024). Segundo, em abril de 2025 Reyes apagou Nikita Krylov no R1 com um straight, e Krylov é o mesmo arquétipo do Walker: brawler unorthodox que vem para a frente sem técnica. O caminho é Reyes manter distância média, esperar Walker entrar com um overhand telegrafado, e contra-atacar com o straight de esquerda no queixo. Isso desmorona se a envergadura de 208cm do Walker conseguir neutralizar a distância do Reyes ou se o queixo do californiano, recém-apagado por Ulberg, ceder ao primeiro acerto sério.',
        conviction_score: 6,
        conviction_rationale:
          'Convicção 6 porque o cenário do Reyes tem precedente claro (Krylov, Ankalaev) mas o queixo dele é uma bomba-relógio depois do KO sofrido contra Ulberg. Não é convicção 7 porque Walker é genuinamente imprevisível e pode encontrar a janela em qualquer momento. Não é 4 ou 5 porque os dois pilares (vantagem técnica e precedente recente) são reais e concretos.',
        conviction_breakers: [
          'Se Walker conseguir usar a envergadura de 208cm para neutralizar a distância do Reyes nos primeiros minutos, o counter de southpaw fica sem janela e o brawler imprevisível assume o controle.',
          'Se o queixo do Reyes ceder ao primeiro acerto sério (padrão da derrota recente para Ulberg), a invencibilidade técnica desmorona em 30 segundos.',
          'Se Walker mostrar evolução técnica do treino sob John Kavanagh em vez do caos puro dos primeiros anos, ele pode neutralizar a leitura padrão do Reyes.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 42,
          key_scenario:
            'Walker entra mantendo distância com o jab de envergadura (algo que ele raramente fez na carreira mas que Kavanagh deve estar enfatizando). Espera Reyes tentar fechar a distância para o straight de esquerda, contra-ataca com um chute alto giratório ou um overhand inesperado. O queixo do Reyes, que acabou de ceder para Ulberg, não aguenta. KO antes do R2.',
          required_conditions: [
            'Usar a envergadura de 208cm para manter o Reyes na distância errada',
            'Conectar um ataque imprevisível antes do Reyes encontrar o ritmo de southpaw',
            'O queixo do Reyes ceder ao primeiro acerto limpo (padrão da derrota para Ulberg)',
            'Mostrar a versão do Walker treinada sob Kavanagh em vez do caos descontrolado',
          ],
          historical_precedent:
            'Reyes vs Jiří Procházka (UFC: never happened) — não há precedente direto. O mais próximo é Walker vs Khalil Rountree, onde Walker apagou um striker técnico em quatro segundos com um chute alto. Rountree é o tipo de prospecto que pode acontecer aqui.',
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'reyes-vs-walker');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
