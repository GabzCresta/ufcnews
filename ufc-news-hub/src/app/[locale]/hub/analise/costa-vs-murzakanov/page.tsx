import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'costa-vs-murzakanov',
  evento_id: null,
  slug: 'costa-vs-murzakanov',
  titulo: 'Costa vs Murzakanov: O Teste Errado Para a Estreia',
  subtitulo:
    'Paulo Costa finalmente sobe para os Meio-Pesados e elimina o corte de peso brutal que sempre o limitou. Mas o adversário escolhido para a estreia é o pior possível: um russo invicto com 16-0 e seis finalizações em seis lutas no UFC.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,86m', envergadura: '192cm', idade: 34, academia: 'BC Mixed Martial Arts, Belo Horizonte' },
      fighter2: { altura: '1,85m', envergadura: '188cm', idade: 36, academia: 'Khachim Mamkhegov, Kabardino-Balkária, Rússia' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'KO/TKO R1-R2',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Paulo Costa',
    apelido: 'Borrachinha',
    record: '15-4-0',
    ranking: 'Estreia no Peso Meio-Pesado',
    ultimasLutas: [
      { result: 'W', opponent: 'Roman Kopylov', method: 'Decisão Unânime', event: 'UFC 318' },
      { result: 'L', opponent: 'Sean Strickland', method: 'Decisão Dividida', event: 'UFC 302' },
      { result: 'L', opponent: 'Robert Whittaker', method: 'Decisão Unânime', event: 'UFC 298' },
    ],
  },
  fighter2_info: {
    nome: 'Azamat Murzakanov',
    apelido: 'The Professional',
    record: '16-0-0',
    ranking: '#6 Peso Meio-Pesado',
    ultimasLutas: [
      { result: 'W', opponent: 'Aleksandar Rakic', method: 'TKO R1', event: 'UFC 321' },
      { result: 'W', opponent: 'Brendson Ribeiro', method: 'TKO R2', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Alonzo Menifield', method: 'TKO R2', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC 327: Procházka vs Ulberg',
  evento_data: '11 de Abril, 2026',
  evento_local: 'Kaseya Center, Miami, Flórida',
  categoria_peso: 'Peso Meio-Pesado (205 lbs)',
  num_rounds: 5,
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
      num_rounds: 5,
      titulo_em_jogo: 'Co-Main Event',
      tagline: 'O Teste Errado Para a Estreia',
      tagline_sub:
        'Costa entra mais fresco que nunca. Mas Murzakanov é 16-0 com seis finalizações em seis lutas no UFC. O motor novo não vai ter tempo de ligar.',
      fighter1: {
        nome_completo: 'Paulo "Borrachinha" Costa',
        apelido: 'Borrachinha',
        sobrenome: 'Costa',
        record: '15-4-0',
        ranking: 'Estreia no Peso Meio-Pesado',
        info_extra: 'Belo Horizonte, Brasil | 34 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-07%2FCOSTA_PAULO_L_07-19.png%3Fitok%3D1DgzuxsK',
      },
      fighter2: {
        nome_completo: 'Azamat "The Professional" Murzakanov',
        apelido: 'The Professional',
        sobrenome: 'Murzakanov',
        record: '16-0-0',
        ranking: '#6 Peso Meio-Pesado',
        info_extra: 'Kabardino-Balkária, Rússia | 36 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-06%2FMURZAKANOV_AZAMAT_L_06-07.png%3Fitok%3DdoqkKE6L',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'O Teste Errado Para a Estreia',
      insight:
        'Paulo Costa finalmente sobe para o peso meio-pesado e elimina a única fraqueza estrutural da carreira inteira: o corte de peso brutal para 185 libras que o Dana White tentou banir oficialmente em 2021. Pela primeira vez no UFC, Costa vai entrar no octógono sem ter perdido 25 libras na semana da luta, com o motor cheio. Mas o adversário escolhido para a estreia no peso novo é o pior matchup possível: Azamat Murzakanov, invicto em 16 lutas, finalizou todos os seis oponentes que enfrentou no UFC, e em outubro de 2025 apagou Aleksandar Rakic, ex-desafiante ao título, em um único round. Costa pode até estar mais fresco do que nunca, mas não vai ter tempo de testar o gás novo.',
      tension: {
        truth_a:
          'Pela primeira vez na carreira UFC, Costa não vai cortar 25 libras na semana da luta. O corte assassino de 185 era a única limitação estrutural dele. A 205 libras, ele entra fresco, com o motor cheio e sem ter desidratado o cérebro.',
        truth_b:
          'Murzakanov tem seis lutas no UFC e seis finalizações. Cada uma delas. Em outubro de 2025, apagou Rakic, ex-desafiante ao título, em um round. Costa nunca enfrentou esse perfil de finalizador eficiente, e o motor novo dele vai estrear contra a pior amostra possível.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Paulo Costa',
        color: 'red',
        recent_fights: [
          {
            date: 'Jul 2025',
            opponent: 'Roman Kopylov',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: '#13 MW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC 318. Vitória controlada por decisão. Mostrou versão mais paciente, dosando o ritmo. Fim da sequência de duas derrotas.',
          },
          {
            date: 'Jun 2024',
            opponent: 'Sean Strickland',
            result: 'L',
            method: 'Decisão Dividida',
            opponent_rank: '#3 MW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC 302. Decisão polêmica que muitos achavam que Costa tinha vencido. Provou que ainda compete no nível de elite.',
          },
          {
            date: 'Fev 2024',
            opponent: 'Robert Whittaker',
            result: 'L',
            method: 'Decisão Unânime',
            opponent_rank: '#2 MW',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'UFC 298. Whittaker controlou com técnica e movimentação. Costa nunca encontrou a distância para detonar.',
          },
          {
            date: 'Ago 2022',
            opponent: 'Luke Rockhold',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'Ex-Campeão',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC 278. Vitória feia mas dominante na guerra de três rounds. A última vez que finalizou ou venceu por nocaute foi em 2019.',
          },
          {
            date: 'Out 2021',
            opponent: 'Marvin Vettori',
            result: 'L',
            method: 'Decisão Unânime',
            opponent_rank: '#5 MW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC Fight Night. Luta movida para 205 libras depois do desastre da pesagem. Costa entrou com 211 libras na quinta-feira.',
          },
        ],
        momentum_score: 5,
        momentum_label: 'Em Recuperação',
        momentum_trend: 'stable',
        momentum_note:
          'Costa quebrou uma sequência ruim com a vitória sobre Kopylov em julho de 2025, mas o histórico recente conta uma história clara: três decisões em três lutas, sem finalização desde 2019. O Costa que acumulava nocautes virou um lutador que sobrevive em decisão. A subida para 205 é uma tentativa de reinventar o motor, e o coach Andre Benkei disse publicamente que ele "quer ser campeão em um ano". Ambição alta para um lutador que não finaliza ninguém há mais de seis anos.',
      },
      fighter2: {
        nome: 'Azamat Murzakanov',
        color: 'blue',
        recent_fights: [
          {
            date: 'Out 2025',
            opponent: 'Aleksandar Rakic',
            result: 'W',
            method: 'TKO R1',
            opponent_rank: '#7 LHW',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'UFC 321. Maior vitória da carreira. Apagou Rakic, ex-desafiante ao título, em menos de um round. Statement absoluto.',
          },
          {
            date: 'Mar 2024',
            opponent: 'Brendson Ribeiro',
            result: 'W',
            method: 'TKO R2',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Manteve o padrão de finalização. Ribeiro durou mais que os outros, mas o desfecho foi o mesmo.',
          },
          {
            date: 'Mar 2023',
            opponent: 'Alonzo Menifield',
            result: 'W',
            method: 'TKO R2',
            opponent_rank: '#15 LHW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Outra finalização técnica contra um nome estabelecido da divisão.',
          },
          {
            date: 'Mai 2022',
            opponent: 'Tafon Nchukwi',
            result: 'W',
            method: 'TKO R3',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Vitória dominante na estreia do top 15. A primeira vez que precisou ir para o R3 no UFC.',
          },
          {
            date: 'Set 2021',
            opponent: 'Dustin Jacoby',
            result: 'W',
            method: 'Decisão (estatística incorreta na busca)',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Vitória que confirmou ele como prospect de futuro contra Jacoby na sequência ascendente.',
          },
        ],
        momentum_score: 10,
        momentum_label: 'Em Alta Máxima',
        momentum_trend: 'ascending',
        momentum_note:
          'Seis lutas no UFC, seis finalizações. Não existe momentum maior que isso na divisão dos meio-pesados em 2025-2026. A vitória sobre Rakic em outubro elevou Murzakanov de "prospect invicto" para "candidato real ao título" em uma única noite. O único asterisco é a idade: ele faz 37 anos um dia depois da luta. O tempo está contra ele, e ele sabe disso. Por isso pediu o maior nome possível para Miami.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Paulo Costa',
        media_oponentes: 4,
        media_oponentes_label: 'Muito Bom',
        aproveitamento: '7V-4D (64%)',
        contra_top5: '1V-3D',
      },
      fighter2: {
        nome: 'Azamat Murzakanov',
        media_oponentes: 3,
        media_oponentes_label: 'Bom',
        aproveitamento: '6V-0D (100%)',
        contra_top5: '1V-0D',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Não há oponentes em comum. Costa enfrentou a elite absoluta dos médios (Adesanya, Whittaker, Strickland, Vettori). Murzakanov subiu acumulando finalizações contra prospects e veteranos antes de explodir contra Rakic. Costa tem mais experiência de elite, Murzakanov tem mais finalizações recentes contra opponents qualidade.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.74, valueB: 3.5, maxVal: 6, format: 'decimal' },
        { label: 'Precisão de Strikes (%)', valueA: 57, valueB: 55, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.3, valueB: 2.0, maxVal: 5, format: 'decimal', reverseWinner: true, note: 'Murzakanov absorve quase 40% menos dano' },
        { label: 'Defesa de Strikes (%)', valueA: 50, valueB: 63, maxVal: 100, format: 'percent', note: 'Murzakanov é estruturalmente mais difícil de acertar' },
        { label: 'Takedowns por 15 Min', valueA: 0.0, valueB: 0.4, maxVal: 5, format: 'decimal' },
        { label: 'Precisão de Takedown (%)', valueA: 0, valueB: 50, maxVal: 100, format: 'percent' },
        { label: 'Defesa de Takedown (%)', valueA: 50, valueB: 80, maxVal: 100, format: 'percent', note: 'A TDD historicamente fraca do Costa é uma vulnerabilidade real' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '34 anos', fighter2: '36 anos' },
        { label: 'Altura', fighter1: '1,86m', fighter2: '1,85m' },
        { label: 'Envergadura', fighter1: '192cm', fighter2: '188cm' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Southpaw' },
        { label: 'Academia', fighter1: 'BC Mixed Martial Arts (Brasil)', fighter2: 'Khachim Mamkhegov (Rússia)' },
        { label: 'Experiência UFC', fighter1: '11 lutas', fighter2: '6 lutas' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter2',
          gap: 2,
          note: 'Murzakanov é southpaw com straight de esquerda preciso. Costa precisa fechar a distância para detonar e nunca foi technician na média distância.',
        },
        {
          label: 'Striking em Curta Distância',
          advantage: 'fighter1',
          gap: 2,
          note: 'No clinch e na trocação curta, Costa ainda tem o poder bruto que apagou Uriah Hall e Yoel Romero. É o único território onde ele tem vantagem clara.',
        },
        {
          label: 'Poder de Nocaute',
          advantage: 'even',
          gap: 0,
          note: 'Costa tem 11 nocautes no cartel. Murzakanov finalizou 100 por cento dos opponents do UFC. Ambos são finalizadores natos, com filosofias diferentes.',
        },
        {
          label: 'Defesa de Striking',
          advantage: 'fighter2',
          gap: 3,
          note: 'Murzakanov absorve 2,0 strikes por minuto contra 3,3 do Costa. Diferença estrutural.',
        },
        {
          label: 'Grappling e Wrestling',
          advantage: 'fighter2',
          gap: 4,
          note: 'Murzakanov vem da escola de combate corpo a corpo russo. Costa historicamente tem TDD fraca e zero oferta ofensiva no chão. Vantagem dominante.',
        },
        {
          label: 'Cardio (5 rounds)',
          advantage: 'fighter1',
          gap: 1,
          note: 'Costa famosamente gassou contra Adesanya, mas no peso novo entra fresco. Murzakanov nunca passou de três rounds no UFC e faz 37 anos um dia depois da luta.',
        },
      ],
      summary:
        'Murzakanov é favorito por dois motivos estruturais: a defesa de striking superior e a vantagem dominante no grappling. A única janela do Costa é o peso novo, que pode liberar uma versão mais resistente, e a possibilidade de a luta passar dos rounds 2 e 3, onde Murzakanov nunca esteve.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Paulo Costa',
        ko_tko: { count: 11, percent: 73 },
        submission: { count: 1, percent: 7 },
        decision: { count: 3, percent: 20 },
        total_wins: 15,
      },
      fighter2: {
        nome: 'Azamat Murzakanov',
        ko_tko: { count: 12, percent: 75 },
        submission: { count: 1, percent: 6 },
        decision: { count: 3, percent: 19 },
        total_wins: 16,
      },
      insight:
        'Os dois são finalizadores. Costa tem 11 nocautes em 15 vitórias na carreira inteira, mas o último deles foi em 2019 contra Yoel Romero. Murzakanov tem 12 nocautes em 16 vitórias, e os seis mais recentes foram todos no UFC. Costa é o ex-finalizador. Murzakanov é o finalizador atual.',
    },

    previsao_final: {
      winner_name: 'Azamat Murzakanov',
      winner_side: 'fighter2',
      predicted_method: 'TKO R1-R2 (counter de southpaw)',
      confidence_score: 7,
      confidence_label: 'MÉDIA-ALTA',
      explanation:
        'Esta é uma das lutas mais previsíveis do card por uma razão simples: a convergência de sinais é unilateral. Murzakanov é invicto em 16 lutas, finalizou todos os seis adversários do UFC, e em outubro de 2025 apagou Aleksandar Rakic, ex-desafiante ao título, em um único round. Costa, do outro lado, vem de três decisões consecutivas, sem nocautear ninguém desde 2019, e está estreando em uma divisão nova depois de uma carreira inteira marcada por cortes de peso desastrosos. A subida para 205 é estruturalmente positiva para o Costa, mas o adversário escolhido para essa estreia anula o ganho antes da experiência poder ser feita.',
      x_factor: {
        title: 'O Motor Novo do Costa',
        description:
          'Pela primeira vez no UFC, Costa não vai entrar desidratado. A 205, ele tem a chance teórica de ser uma versão fisicamente diferente. O problema é que essa versão estreia contra um russo que apaga gente em um round.',
      },
      upset_alert: {
        title: 'O Soco Único do Borrachinha',
        description:
          'Costa tem 11 nocautes na carreira e o mesmo poder bruto que devastou Uriah Hall e Yoel Romero. Se ele encontrar um soco limpo no queixo do Murzakanov nos primeiros cinco minutos, antes de o russo achar o ritmo, a invencibilidade pode cair. É a única narrativa onde Costa vence.',
      },
      probabilities: {
        fighter1: { nome: 'Costa', percent: 28 },
        fighter2: { nome: 'Murzakanov', percent: 70 },
        draw: 2,
      },
      odds: {
        fighter1_odds: '+154',
        fighter2_odds: '-185',
        fighter1_name: 'Paulo Costa',
        fighter2_name: 'Azamat Murzakanov',
        source: 'Média de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Azamat Murzakanov',
            odds: '-185',
            reasoning:
              'Linha justa para a convergência de sinais. Não é "value", é a aposta correta. Quem entra em parlay coloca o Murzakanov como leg principal.',
          },
          {
            type: 'Método',
            pick: 'Murzakanov por KO/TKO',
            odds: '-130',
            reasoning:
              'Seis vitórias no UFC, seis finalizações. Apostar que ele vai vencer por decisão é ir contra 100 por cento do histórico recente. O método é nocaute, e o mercado já precifica isso.',
          },
          {
            type: 'Rounds 1 ou 2',
            pick: 'A luta termina antes do R3',
            odds: '+105',
            reasoning:
              'Murzakanov nunca passou do R3 no UFC. Costa, desde a derrota para Adesanya em 2020, tem histórico de gassar quando a luta engata. O cenário mais provável é finalização precoce, e a linha está justa.',
          },
          {
            type: 'Como termina (qualquer lutador)',
            pick: 'A luta termina por KO/TKO',
            odds: '-200',
            reasoning:
              'Costa tem 73 por cento de finalizações. Murzakanov tem 100 por cento no UFC. A probabilidade combinada de a luta terminar por nocaute, vinda de qualquer lado, está perto de 80 por cento.',
          },
        ],
        best_bet: {
          pick: 'Murzakanov por KO/TKO antes do R3 (parlay implícito) a +135 estimado',
          reasoning:
            'A combinação de método com janela temporal captura o cenário mais provável da luta. Risco baixo, retorno melhor que a moneyline pura.',
        },
      },
      key_stats: [
        {
          value: '6/6',
          label: 'lutas no UFC do Murzakanov terminaram em finalização',
          sublabel: '100 por cento de KO/TKO contra adversários ranqueados como Rakic, Menifield e Ribeiro',
        },
        {
          value: '2019',
          label: 'foi o ano da última vitória por nocaute do Costa (Yoel Romero)',
          sublabel: 'Desde então: três decisões, duas derrotas, zero finalizações em quatro vitórias',
        },
      ],
      armadilha: {
        titulo: 'Costa por nocaute em qualquer round',
        descricao:
          'A linha do Costa por KO está alta e parece tentadora pelo histórico de poder dele. Mas Costa não nocauteia ninguém há seis anos. A versão dele em 2025 vence por decisão ou perde. Apostar que o Borrachinha de 2019 vai voltar contra um invicto russo é caçar uma narrativa, não um padrão.',
      },
      conviction: {
        thesis:
          'A tese é: Azamat Murzakanov vence por três razões convergentes que não admitem contra-argumento. Primeiro, ele é invicto em 16 lutas profissionais e finalizou 100 por cento dos seis adversários que enfrentou no UFC, padrão estatístico raríssimo na divisão. Segundo, em outubro de 2025 apagou Aleksandar Rakic, ex-desafiante ao título dos meio-pesados, em um único round, provando que o degrau dele já é de elite. Terceiro, Costa estreia no peso meio-pesado depois de uma carreira marcada por cortes de peso desastrosos a 185, e o adversário escolhido para essa transição é o pior matchup possível: um southpaw com base de wrestling russo e poder de nocaute em ambas as mãos. O caminho é Murzakanov pressionar com o straight de esquerda nos primeiros minutos, encontrar o queixo do Costa em uma troca, e finalizar antes de o brasileiro testar o motor novo. Isso desmorona apenas se Costa conectar um soco único nos primeiros cinco minutos, antes de Murzakanov achar o ritmo.',
        conviction_score: 7,
        conviction_rationale:
          'Convicção 7, e não 8, porque Costa ainda tem poder de nocaute genuíno em qualquer mão e Murzakanov nunca foi testado por um power puncher orthodox de classe mundial. Mas é uma das raras lutas do card onde os pilares são unilaterais: Murzakanov tem TODOS os indicadores estruturais (invicto, finalizador no UFC, vitória recente sobre top 7), e Costa tem zero argumentos além do "talvez o motor novo funcione". É a aposta mais limpa do card depois do main event.',
        conviction_breakers: [
          'Se Costa conectar um soco limpo nos primeiros cinco minutos, antes de Murzakanov estabelecer o ritmo de southpaw, o queixo do russo nunca foi testado por um KO artist orthodox real e isso pode resolver tudo em uma troca.',
          'Se Murzakanov gassar nos rounds finais (ele nunca passou do R3 no UFC e faz 37 anos um dia depois da luta), Costa pode capitalizar com a versão fresca a 205 libras e roubar uma decisão.',
          'Se a estreia no peso meio-pesado realmente liberar uma versão fisicamente nova do Costa, o motor novo pode dar o cardio que ele nunca teve a 185 e mudar o cenário em um R3 que ninguém previa.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 28,
          key_scenario:
            'Costa entra mais fresco do que jamais entrou no octógono porque não cortou peso. Recebe os primeiros golpes do Murzakanov no R1, sobrevive à pressão inicial do southpaw, e nos minutos finais do R1 conecta um overhand de direita ou um gancho de clinch. O queixo do russo, que nunca foi testado por um power puncher orthodox de classe mundial, cede. A invencibilidade cai em uma troca.',
          required_conditions: [
            'Sobreviver aos primeiros cinco minutos da pressão de southpaw do Murzakanov',
            'Encontrar uma janela de close range onde o poder bruto do Costa importa mais que a técnica',
            'Conectar um soco limpo no queixo antes do R3, idealmente antes do R2',
            'Que o motor novo a 205 libras realmente seja diferente do motor exausto a 185',
          ],
          historical_precedent:
            'Costa vs Yoel Romero (UFC 241, 2019): Costa absorveu pressão de um power puncher experiente e venceu por decisão dominante com ataques curtos e duros. Foi a última vez que ele pareceu o "Borrachinha" original.',
        },
      },
    },

    // radar_apostador deliberately omitted in the new editorial shape.
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'costa-vs-murzakanov');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
