import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'swanson-vs-landwehr',
  evento_id: null,
  slug: 'swanson-vs-landwehr',
  titulo: 'Swanson vs Landwehr: A Última Caminhada',
  subtitulo:
    'Cub Swanson, 42 anos, Hall da Fama, último lutador ativo do WEC, faz a despedida da carreira em Miami contra um finalizador agressivo. A romance contra os números.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,70m', envergadura: '178cm', idade: 42, academia: 'Jackson Wink MMA, Albuquerque' },
      fighter2: { altura: '1,75m', envergadura: '180cm', idade: 37, academia: 'The Combat Lab, Tennessee' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'TKO R2 ou Decisão Unânime',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Cub Swanson',
    apelido: 'Killer Cub',
    record: '30-14-0',
    ranking: 'Lenda em Despedida',
    ultimasLutas: [
      { result: 'L', opponent: 'Billy Quarantillo', method: 'Submissão R1', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Hakeem Dawodu', method: 'Decisão Unânime', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Jonathan Pearce', method: 'TKO R2', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Nate Landwehr',
    apelido: 'The Train',
    record: '18-7-0',
    ranking: 'Não ranqueado',
    ultimasLutas: [
      { result: 'L', opponent: 'Morgan Charrière', method: 'KO R3', event: 'UFC ESPN 70' },
      { result: 'W', opponent: 'Jamall Emmers', method: 'Decisão Unânime', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Austin Lingo', method: 'Decisão Unânime', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC 327: Procházka vs Ulberg',
  evento_data: '11 de Abril, 2026',
  evento_local: 'Kaseya Center, Miami, Flórida',
  categoria_peso: 'Peso Pena (145 lbs)',
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
      categoria_peso: 'Peso Pena (145 lbs)',
      num_rounds: 3,
      titulo_em_jogo: 'Despedida de Lenda',
      tagline: 'A Última Caminhada',
      tagline_sub:
        'Cub Swanson, 42 anos, Hall da Fama, último lutador ativo do WEC, faz a despedida da carreira em Miami. A romance contra os números.',
      fighter1: {
        nome_completo: 'Cub "Killer Cub" Swanson',
        apelido: 'Killer Cub',
        sobrenome: 'Swanson',
        record: '30-14-0',
        ranking: 'Lenda em Despedida',
        info_extra: 'Palm Springs, Califórnia | 42 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2024-12%2FSWANSON_CUB_L_12-14.png%3Fitok%3DQqMoSqo4',
      },
      fighter2: {
        nome_completo: 'Nate "The Train" Landwehr',
        apelido: 'The Train',
        sobrenome: 'Landwehr',
        record: '18-7-0',
        ranking: 'Não ranqueado',
        info_extra: 'Clarksville, Tennessee | 37 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-07%2FLANDWEHR_NATE_L_07-12.png%3Fitok%3DOaA4sx98',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'A Romance Contra os Números',
      insight:
        'Cub Swanson é o último lutador ativo do WEC no roster do UFC. São 22 anos de carreira profissional, 11 bônus de pós-luta (recorde absoluto da história do UFC), uma vaga no Hall da Fama pelo combate clássico contra Doo Ho Choi, e uma despedida marcada para o Kaseya Center em Miami. O coração diz que ele merece o final perfeito. A matemática diz outra coisa: aos 42 anos, Cub vem de quatro derrotas nas últimas seis lutas, três delas por finalização ou nocaute. Nate Landwehr tem 37 anos, é um agressor incansável apelidado de "The Train", quatro bônus de pós-luta nas últimas cinco lutas, e perdeu apenas uma luta nesse período (KO contra Charrière). É uma luta de farewell contra o pior tipo de adversário possível para um veterano em despedida: um pressionador que não dá espaço.',
      tension: {
        truth_a:
          'Cub Swanson tem a maior coleção de bônus de pós-luta da história do UFC (11), está no Hall da Fama, e nunca foi derrotado psicologicamente em luta nenhuma. O Kaseya Center vai ser uma celebração, e adrenalina de despedida historicamente eleva veteranos a versões impossíveis de prever.',
        truth_b:
          'Cub tem 42 anos. Quatro das últimas seis lutas terminaram em derrota, três por finalização ou nocaute. Landwehr é cinco anos mais jovem, fisicamente mais imponente, pressionador incansável, e vem buscando o cinto a cada luta. A despedida romântica não muda os reflexos perdidos.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Cub Swanson',
        color: 'red',
        recent_fights: [
          {
            date: 'Jul 2024',
            opponent: 'Billy Quarantillo',
            result: 'L',
            method: 'Submissão R1 (mata-leão)',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Finalizado nos primeiros minutos. Mostrou que o jogo de chão ficou para trás.',
          },
          {
            date: 'Mar 2023',
            opponent: 'Hakeem Dawodu',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Vitória importante para o moral. Provou que ainda tem cardio para 15 minutos quando a luta exige.',
          },
          {
            date: 'Out 2022',
            opponent: 'Jonathan Pearce',
            result: 'L',
            method: 'TKO R2',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Apagado por um lutador 11 anos mais novo. Início da fase difícil.',
          },
          {
            date: 'Mai 2022',
            opponent: 'Darren Elkins',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Vitória clássica em duelo de veteranos. Showtime do Cub no main card de um Fight Night.',
          },
          {
            date: 'Set 2021',
            opponent: 'Giga Chikadze',
            result: 'L',
            method: 'TKO R1',
            opponent_rank: '#9 FW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Apagado por um chute alto no primeiro round. A luta que iniciou o declínio.',
          },
        ],
        momentum_score: 3,
        momentum_label: 'Em Despedida',
        momentum_trend: 'descending',
        momentum_note:
          'Cub vem de uma fase difícil: quatro derrotas nas últimas seis lutas, três delas por finalização ou nocaute. Os reflexos da era de ouro (2014-2018) já não estão mais lá. Mas a despedida em casa, com a torcida vibrante e o último capítulo de uma carreira lendária, é um fator emocional impossível de quantificar. Cub falou na semana da luta que quer "sair com botas calçadas", e historicamente ele entrega no primeiro round mesmo em fases ruins.',
      },
      fighter2: {
        nome: 'Nate Landwehr',
        color: 'blue',
        recent_fights: [
          {
            date: 'Jul 2025',
            opponent: 'Morgan Charrière',
            result: 'L',
            method: 'KO R3',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC ESPN 70. Vinha vencendo a luta até ser apagado no R3. Mostrou a defensiva fraca quando o motor desce.',
          },
          {
            date: 'Mar 2024',
            opponent: 'Jamall Emmers',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Vitória de pressão em três rounds. Manteve a sequência de bônus de pós-luta.',
          },
          {
            date: 'Out 2023',
            opponent: 'Austin Lingo',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Outra guerra de três rounds. Performance of the Night.',
          },
          {
            date: 'Mar 2023',
            opponent: 'David Onama',
            result: 'W',
            method: 'Submissão R3 (guilhotina)',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Finalização rara para o estilo dele. Comeback nos rounds finais.',
          },
          {
            date: 'Set 2022',
            opponent: 'Ludovit Klein',
            result: 'W',
            method: 'Decisão Dividida',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Vitória em decisão polêmica que muitos achavam que perdeu.',
          },
        ],
        momentum_score: 6,
        momentum_label: 'Em Recuperação',
        momentum_trend: 'stable',
        momentum_note:
          'Landwehr é a definição do "action fighter" do UFC: quatro bônus de pós-luta nas últimas cinco lutas, ritmo incansável, agressão constante. A derrota recente para Charrière mostrou que a defesa cede quando o motor cai, mas até lá ele vinha vencendo a luta. Aos 37 anos, ainda é cinco anos mais jovem que Cub e tem o estilo perfeito para dar problema a um veterano: pressionar sem parar, não dar espaço para improvisação.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Cub Swanson',
        media_oponentes: 4,
        media_oponentes_label: 'Muito Bom',
        aproveitamento: '15V-10D (60%)',
        contra_top5: '3V-5D',
      },
      fighter2: {
        nome: 'Nate Landwehr',
        media_oponentes: 2,
        media_oponentes_label: 'Médio',
        aproveitamento: '7V-3D (70%)',
        contra_top5: '0V-0D',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Sem oponentes em comum. Cub tem 25 lutas no UFC contra um cardápio que inclui Dustin Poirier, Charles Oliveira, Frankie Edgar, Renato Moicano, Jeremy Stephens. Landwehr nunca enfrentou um top 15. O salto de nível favorece Cub em experiência, mas a idade neutraliza tudo.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.6, valueB: 5.2, maxVal: 7, format: 'decimal', note: 'Landwehr é mais agressivo no volume' },
        { label: 'Precisão de Strikes (%)', valueA: 41, valueB: 45, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 4.5, valueB: 5.0, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Os dois absorvem muito (estilo agressivo)' },
        { label: 'Defesa de Strikes (%)', valueA: 56, valueB: 50, maxVal: 100, format: 'percent', note: 'Cub tem leve vantagem técnica defensiva' },
        { label: 'Takedowns por 15 Min', valueA: 0.6, valueB: 1.5, maxVal: 4, format: 'decimal' },
        { label: 'Defesa de Takedown (%)', valueA: 64, valueB: 67, maxVal: 100, format: 'percent' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '42 anos', fighter2: '37 anos' },
        { label: 'Altura', fighter1: '1,70m', fighter2: '1,75m' },
        { label: 'Envergadura', fighter1: '178cm', fighter2: '180cm' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Switch' },
        { label: 'Academia', fighter1: 'Jackson Wink', fighter2: 'The Combat Lab' },
        { label: 'Experiência UFC', fighter1: '25 lutas', fighter2: '10 lutas' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter1',
          gap: 1,
          note: 'Cub ainda tem o jab cirúrgico e a leitura de combinações que construiu em 22 anos. Landwehr é mais bruto.',
        },
        {
          label: 'Striking em Curta Distância',
          advantage: 'fighter2',
          gap: 2,
          note: 'Landwehr vive na curta distância. É onde o ritmo de "trem" dele esmaga oponentes.',
        },
        {
          label: 'Poder de Nocaute',
          advantage: 'fighter1',
          gap: 1,
          note: 'Cub tem 14 nocautes na carreira. Landwehr é finalizador por acúmulo, não por tiro único.',
        },
        {
          label: 'Cardio (3 rounds)',
          advantage: 'fighter2',
          gap: 3,
          note: 'O motor incansável do Train é a marca registrada. Cub aos 42 sente o ritmo cair no R3.',
        },
        {
          label: 'Defesa (idade vs juventude)',
          advantage: 'fighter2',
          gap: 2,
          note: 'Cinco anos de diferença biológica. Os reflexos do Cub não são mais os mesmos de 2018.',
        },
        {
          label: 'Adrenalina e Coração',
          advantage: 'fighter1',
          gap: 3,
          note: 'Última caminhada da carreira, em casa, com torcida vibrante. O fator emocional é impossível de quantificar mas é real.',
        },
      ],
      summary:
        'Landwehr vence se conseguir impor o ritmo de pressão dos primeiros minutos e cansar Cub até a defesa ceder. Cub vence se conseguir um tiro mágico nos primeiros cinco minutos com a adrenalina do farewell, antes do trem ganhar tração.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Cub Swanson',
        ko_tko: { count: 14, percent: 47 },
        submission: { count: 4, percent: 13 },
        decision: { count: 12, percent: 40 },
        total_wins: 30,
      },
      fighter2: {
        nome: 'Nate Landwehr',
        ko_tko: { count: 9, percent: 50 },
        submission: { count: 2, percent: 11 },
        decision: { count: 7, percent: 39 },
        total_wins: 18,
      },
      insight:
        'Cub é o finalizador tradicional: 60 por cento das vitórias antes do tempo (14 KO, 4 submissões em 30). Landwehr também é finalizador na maioria, com 9 nocautes e 2 submissões em 18 vitórias, mas tem quase 40 por cento por decisão. Landwehr ganha por acúmulo e pressão. Cub ganha por momento mágico.',
    },

    previsao_final: {
      winner_name: 'Nate Landwehr',
      winner_side: 'fighter2',
      predicted_method: 'TKO R2 ou Decisão Unânime',
      confidence_score: 6,
      confidence_label: 'MÉDIA',
      explanation:
        'Esta é a luta onde a romance encontra a matemática e perde. Landwehr é cinco anos mais jovem, fisicamente mais imponente, e tem o estilo exato de pressionador que historicamente expõe veteranos em fim de carreira. Cub Swanson aos 42 anos vem de quatro derrotas em seis lutas, três por finalização ou nocaute. A despedida em casa é um fator emocional real, mas a defesa de striking dele caiu para níveis perigosos e o cardio não aguenta três rounds de pressão constante. O cenário mais provável é Landwehr sobreviver a um ataque mágico do Cub nos primeiros cinco minutos, depois impor o trem e finalizar no R2 ou vencer por decisão dominante.',
      x_factor: {
        title: 'Os Primeiros Cinco Minutos',
        description:
          'Cub historicamente entrega no R1. Se ele encontrar uma combinação mágica nos primeiros cinco minutos com a adrenalina da despedida, a noite vira lendária. Se ele não conectar até os 5 minutos, o trem do Landwehr pega ritmo e a vitória do veterano fica matematicamente improvável.',
      },
      upset_alert: {
        title: 'Cub Por Tiro Único de Despedida',
        description:
          'Cub tem 14 nocautes na carreira e o tiro mágico nunca esquece. Adrenalina de farewell em casa pode produzir um momento que não dá para prever. O upset não é tese, é possibilidade real do tipo de luta que Cub sempre fez.',
      },
      probabilities: {
        fighter1: { nome: 'Swanson', percent: 38 },
        fighter2: { nome: 'Landwehr', percent: 60 },
        draw: 2,
      },
      odds: {
        fighter1_odds: '+120',
        fighter2_odds: '-150',
        fighter1_name: 'Cub Swanson',
        fighter2_name: 'Nate Landwehr',
        source: 'Média de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Nate Landwehr',
            odds: '-150',
            reasoning:
              'Linha justa para o cenário mais provável. Landwehr é o pick correto pelos motivos estruturais (idade, estilo, defesa cedente do Cub recente).',
          },
          {
            type: 'Como termina (qualquer lutador)',
            pick: 'A luta termina por KO/TKO',
            odds: '+115',
            reasoning:
              'Os dois caem por nocaute recentemente. Charrière apagou Landwehr no R3, e Cub foi finalizado em três das últimas seis. A probabilidade de finish é maior que decisão.',
          },
          {
            type: 'Cub por nocaute',
            pick: 'Cub Swanson por KO/TKO',
            odds: '+450',
            reasoning:
              'O cenário do upset romântico tem retorno alto. 14 nocautes na carreira, despedida em casa, adrenalina máxima. Não é a aposta provável, é a aposta de cinema.',
          },
        ],
        best_bet: {
          pick: 'KO/TKO em qualquer round (qualquer lutador) a +115',
          reasoning:
            'A combinação certa de probabilidade e retorno. Os dois preferem terminar a luta antes do tempo, e o histórico recente mostra que ambos têm queixos comprometidos.',
        },
      },
      key_stats: [
        {
          value: '11',
          label: 'bônus de pós-luta na carreira do Cub Swanson (recorde absoluto da história do UFC)',
          sublabel: 'Mais que qualquer outro lutador, ativo ou aposentado',
        },
        {
          value: '4/6',
          label: 'das últimas seis lutas do Cub terminaram em derrota',
          sublabel: 'Três por finalização ou nocaute desde 2021',
        },
      ],
      armadilha: {
        titulo: 'Cub por decisão',
        descricao:
          'O mercado paga bem em Cub por decisão porque é a narrativa romântica do veterano sobrevivendo. Mas Cub não vence por decisão há dois anos contra adversário sério, e o cardio aos 42 anos não aguenta três rounds de pressão do trem. Se você quer apostar em Cub, a aposta correta é por nocaute (cenário do upset romântico).',
      },
      conviction: {
        thesis:
          'A tese é: Nate Landwehr vence por dois motivos estruturais que se reforçam. Primeiro, ele é cinco anos mais jovem que Cub Swanson, com motor de pressão incansável apelidado de "The Train", e tem o estilo exato que historicamente expõe veteranos em fim de carreira: ritmo constante, sem pausa, sem espaço para improvisação. Segundo, Cub aos 42 anos vem de quatro derrotas nas últimas seis lutas, três delas por finalização ou nocaute, e a defesa de striking caiu para níveis perigosos. O caminho é Landwehr sobreviver ao ataque mágico do Cub nos primeiros cinco minutos (que historicamente é quando Cub entrega), impor o trem a partir do R2, e finalizar por TKO ou vencer por decisão dominante. Isso desmorona apenas se a adrenalina da despedida em casa produzir um momento mágico do Cub nos primeiros minutos, antes do trem ganhar tração.',
        conviction_score: 6,
        conviction_rationale:
          'Convicção 6 porque os pilares estruturais (idade, estilo, defesa cedente) são reais e convergentes, mas o fator emocional da despedida em casa é genuinamente imprevisível. Não é convicção 7 porque Cub Swanson é o maior bonus winner da história do UFC e tem o tiro mágico que pode aparecer em qualquer momento. Não é 4 ou 5 porque os indicadores físicos e estatísticos pesam claramente para o lado do Landwehr.',
        conviction_breakers: [
          'Se Cub encontrar uma combinação mágica nos primeiros cinco minutos com a adrenalina da despedida em casa, a noite vira lendária e a tese cai antes do round dois.',
          'Se Landwehr replicar a defesa cedente que mostrou contra Charrière (vencendo a luta até cair no R3), Cub pode roubar uma decisão se conseguir manter ritmo até o final.',
          'Se a torcida em Miami criar um ambiente de despedida tão pesado que Landwehr trave psicologicamente em vez de impor o jogo dele, a vantagem física pode não se traduzir em performance.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 38,
          key_scenario:
            'Cub entra com a adrenalina de quem sabe que é o último capítulo. Sai do canto buscando o tiro mágico desde o primeiro toque de luvas, encontra uma combinação no R1 com a torcida vibrante, conecta um cruzado ou cotovelada que sempre foi a marca registrada dele. Landwehr não acha o ritmo do trem rápido suficiente porque está sendo pressionado de volta pela primeira vez. KO heroico no R1, despedida lendária.',
          required_conditions: [
            'Conectar um soco limpo no Landwehr antes dos 5 minutos do R1',
            'Sobreviver ao primeiro avanço de pressão do "Train" sem ser empurrado contra a grade',
            'Que a adrenalina do farewell e da torcida em casa elevem a versão de 2018 do Cub',
            'Que Landwehr trave psicologicamente em vez de impor o ritmo dele',
          ],
          historical_precedent:
            'Cub Swanson vs Doo Ho Choi (UFC 206, 2016): a luta clássica do Hall da Fama do UFC. Cub absorveu pressão de um agressor incansável, encontrou o tiro mágico no R3 e venceu. É exatamente o cenário que precisa repetir aqui, dez anos mais velho.',
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'swanson-vs-landwehr');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
