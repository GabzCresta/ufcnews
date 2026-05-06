import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'padilla-vs-mederos',
  evento_id: null,
  slug: 'padilla-vs-mederos',
  titulo: 'Padilla vs Mederos: Dois Invictos no UFC, Um Sai do Cartel',
  subtitulo:
    'Chris Padilla está 4-0 no UFC desde a estreia em 2024. MarQuel Mederos está 3-0 com três decisões. Os dois são prospects ascendentes do peso leve, e essa luta define quem entra no top 25.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,75m', envergadura: '180cm', idade: 32, academia: 'Kings MMA, Califórnia' },
      fighter2: { altura: '1,78m', envergadura: '185cm', idade: 28, academia: 'Xtreme Couture, Las Vegas' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão Unânime ou TKO R3',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Chris Padilla',
    apelido: 'Taco',
    record: '17-6-0',
    ranking: 'Não ranqueado',
    ultimasLutas: [
      { result: 'W', opponent: 'Ismael Bonfim', method: 'TKO R2', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Jai Herbert', method: 'Decisão Dividida', event: 'UFC London' },
      { result: 'W', opponent: 'James Llontop', method: 'Decisão Unânime', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'MarQuel Mederos',
    apelido: 'Mederos',
    record: '11-1-0',
    ranking: 'Não ranqueado',
    ultimasLutas: [
      { result: 'W', opponent: 'Mark Choinski', method: 'Decisão Unânime', event: 'UFC 316' },
      { result: 'W', opponent: 'Austin Hubbard', method: 'Decisão Dividida', event: 'UFC Mexico' },
      { result: 'W', opponent: 'Landon Quinones', method: 'Decisão Unânime', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC 327: Procházka vs Ulberg',
  evento_data: '11 de Abril, 2026',
  evento_local: 'Kaseya Center, Miami, Flórida',
  categoria_peso: 'Peso Leve (155 lbs)',
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
      categoria_peso: 'Peso Leve (155 lbs)',
      num_rounds: 3,
      titulo_em_jogo: 'Early Prelims',
      tagline: 'Dois Invictos no UFC',
      tagline_sub:
        'Padilla 4-0 com três finalizações desde a estreia em 2024. Mederos 3-0 com três decisões da DWCS de 2023. Quem perde esse aqui sai da prateleira de prospects.',
      fighter1: {
        nome_completo: 'Chris "Taco" Padilla',
        apelido: 'Taco',
        sobrenome: 'Padilla',
        record: '17-6-0',
        ranking: 'Invicto no UFC (4-0)',
        info_extra: 'San Diego, Califórnia | 32 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-11%2FPADILLA_CHRIS_L_11-08.png%3Fitok%3DOCN6kUHk',
      },
      fighter2: {
        nome_completo: 'MarQuel Mederos',
        apelido: 'Mederos',
        sobrenome: 'Mederos',
        record: '11-1-0',
        ranking: 'Invicto no UFC (3-0)',
        info_extra: 'Las Vegas, Nevada | 28 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-06%2FMEDEROS_MARQUEL_L_06-07.png%3Fitok%3DfQDAH3kR',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'Finalizador Contra Pontuador',
      insight:
        'Chris Padilla chegou ao UFC em abril de 2024 como substituto de short notice e desde então fez carreira no caminho mais difícil possível: três finalizações em quatro lutas, incluindo um TKO sobre Ismael Bonfim que confirmou status de prospect real. MarQuel Mederos veio do Dana White Contender Series 2023 e construiu uma sequência diferente: três decisões em três aparições no UFC, todas vitórias mas nenhuma com finalização. Os dois são invictos no UFC, mas a forma de vencer conta uma história diferente. Padilla impõe pressão e termina antes do tempo. Mederos calcula, controla, e leva para os juízes. A luta vai testar se o estilo cerebral do Mederos aguenta o ritmo agressivo do Taco.',
      tension: {
        truth_a:
          'Mederos tem 28 anos, vem do programa de prospects do UFC (DWCS classe de 2023), tem 11-1 no profissional inteiro com nove vitórias seguidas, e três decisões UFC mostram que ele resolve problemas no octógono sem entrar em pânico.',
        truth_b:
          'Padilla tem três finalizações em quatro lutas no UFC, é claramente o lutador mais agressivo, e Mederos nunca enfrentou um adversário UFC que pressiona pelo finish. As três vitórias dele foram contra opponents que aceitaram o ritmo cerebral.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Chris Padilla',
        color: 'red',
        recent_fights: [
          {
            date: 'Out 2025',
            opponent: 'Ismael Bonfim',
            result: 'W',
            method: 'TKO R2',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Vitória que confirmou o status de prospect real. Bonfim falhou no peso e Padilla puniu impondo o ritmo.',
          },
          {
            date: 'Mar 2025',
            opponent: 'Jai Herbert',
            result: 'W',
            method: 'Decisão Dividida',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC London. Vitória dura e técnica em decisão polêmica. Mostrou que pode vencer fora dos finishes.',
          },
          {
            date: 'Out 2024',
            opponent: 'Jeremy Stephens',
            result: 'W',
            method: 'TKO R2',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Finalização contra um veterano em fim de carreira. Vitória esperada mas confirmou poder.',
          },
          {
            date: 'Abr 2024',
            opponent: 'James Llontop',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Estreia no UFC como substituto de short notice. Venceu sem amostra de luxo.',
          },
        ],
        momentum_score: 8,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note:
          'Padilla é 4-0 no UFC desde a estreia em abril de 2024, com três finalizações em quatro lutas. Aos 32 anos é mais velho que Mederos mas a curva de evolução é clara: cada luta foi melhor que a anterior. O estilo é pressão constante com striking de poder. Não é o lutador mais técnico, é o mais agressivo, e isso historicamente dá problema para opponents acostumados ao ritmo controlado.',
      },
      fighter2: {
        nome: 'MarQuel Mederos',
        color: 'blue',
        recent_fights: [
          {
            date: 'Jun 2025',
            opponent: 'Mark Choinski',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'UFC 316. Terceira vitória no UFC, terceira por decisão. Manteve o padrão cerebral.',
          },
          {
            date: 'Mar 2025',
            opponent: 'Austin Hubbard',
            result: 'W',
            method: 'Decisão Dividida',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC Mexico. Vitória polêmica em decisão dividida. Mostrou que sabe roubar rounds apertados.',
          },
          {
            date: 'Fev 2024',
            opponent: 'Landon Quinones',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Estreia no UFC. Venceu por decisão unânime sem grandes momentos. Padrão estabelecido.',
          },
          {
            date: 'Set 2023',
            opponent: 'DWCS opponent',
            result: 'W',
            method: 'Vitória DWCS',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Dana White Contender Series. Ganhou contrato direto para o UFC.',
          },
        ],
        momentum_score: 7,
        momentum_label: 'Em Alta',
        momentum_trend: 'stable',
        momentum_note:
          'Mederos é 3-0 no UFC com três decisões consecutivas. O padrão é claro: lutador cerebral que controla ritmo, ganha rounds nos critérios dos juízes, raramente busca o finish. Aos 28 anos tem o tempo a favor, e o histórico do Bellator/regional mostra um lutador que evolui constantemente. Mas três decisões em três lutas no UFC significa que ele ainda não foi testado por um pressionador real, e Padilla é exatamente isso.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Chris Padilla',
        media_oponentes: 2,
        media_oponentes_label: 'Médio',
        aproveitamento: '4V-0D (100%)',
        contra_top5: '0V-0D',
      },
      fighter2: {
        nome: 'MarQuel Mederos',
        media_oponentes: 2,
        media_oponentes_label: 'Médio',
        aproveitamento: '3V-0D (100%)',
        contra_top5: '0V-0D',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Sem oponentes em comum. Os dois enfrentaram lutadores fora do top 25 desde a chegada ao UFC. É a primeira luta de cada um contra outro prospect invicto, o que torna a comparação direta impossível mas o stakes mais alto.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.8, valueB: 3.5, maxVal: 6, format: 'decimal', note: 'Padilla é claramente mais agressivo no volume' },
        { label: 'Precisão de Strikes (%)', valueA: 51, valueB: 48, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.5, valueB: 3.0, maxVal: 5, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 55, valueB: 60, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 0.8, valueB: 1.2, maxVal: 3, format: 'decimal' },
        { label: 'Defesa de Takedown (%)', valueA: 60, valueB: 65, maxVal: 100, format: 'percent' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '32 anos', fighter2: '28 anos' },
        { label: 'Altura', fighter1: '1,75m', fighter2: '1,78m' },
        { label: 'Envergadura', fighter1: '180cm', fighter2: '185cm' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox' },
        { label: 'Academia', fighter1: 'Kings MMA', fighter2: 'Xtreme Couture' },
        { label: 'Experiência UFC', fighter1: '4 lutas', fighter2: '3 lutas' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter2',
          gap: 1,
          note: 'Mederos tem técnica e reach. Padilla é mais bruto mas menos preciso na média distância.',
        },
        {
          label: 'Striking em Curta Distância',
          advantage: 'fighter1',
          gap: 2,
          note: 'Padilla vive no ritmo de pressão e trocação curta. É onde o estilo dele se manifesta melhor.',
        },
        {
          label: 'Wrestling',
          advantage: 'fighter2',
          gap: 1,
          note: 'Mederos tem leve vantagem em volume de takedowns. Ambos têm grappling sólido mas não é a arma principal.',
        },
        {
          label: 'Capacidade de Finalização',
          advantage: 'fighter1',
          gap: 3,
          note: 'Três finalizações em quatro lutas no UFC contra zero do Mederos. Padilla é claramente o finalizador.',
        },
        {
          label: 'Cardio (3 rounds)',
          advantage: 'fighter2',
          gap: 1,
          note: 'Mederos vence por decisão sempre, então tem motor para 15 minutos. Padilla também mas com mais desgaste.',
        },
        {
          label: 'Calma sob Pressão',
          advantage: 'fighter2',
          gap: 2,
          note: 'Três decisões em três lutas mostram que Mederos não se desespera. Padilla pode entrar no piloto automático agressivo.',
        },
      ],
      summary:
        'Padilla vence se conseguir impor o ritmo de pressão e forçar trocação curta onde tem vantagem. Mederos vence se conseguir manter a luta na média distância e controlar três rounds nos cards. A pergunta é se a calma cerebral do Mederos aguenta o ritmo bruto do Taco.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Chris Padilla',
        ko_tko: { count: 9, percent: 53 },
        submission: { count: 5, percent: 29 },
        decision: { count: 3, percent: 18 },
        total_wins: 17,
      },
      fighter2: {
        nome: 'MarQuel Mederos',
        ko_tko: { count: 6, percent: 55 },
        submission: { count: 0, percent: 0 },
        decision: { count: 5, percent: 45 },
        total_wins: 11,
      },
      insight:
        'Diferença de filosofia. Padilla é finalizador completo (82 por cento das vitórias antes do tempo, 9 KO e 5 submissões em 17). Mederos é decision/KO fighter (55 por cento KO, 45 por cento por decisão, zero submissões em 11 vitórias). Padilla busca o finish, Mederos busca nocaute ou juízes. A luta vai expor qual estilo prevalece quando estão frente a frente.',
    },

    previsao_final: {
      winner_name: 'Chris Padilla',
      winner_side: 'fighter1',
      predicted_method: 'Decisão Unânime ou TKO R3',
      confidence_score: 5,
      confidence_label: 'MÉDIA',
      explanation:
        'Esta é uma luta de moeda no ar entre dois invictos do UFC com filosofias opostas. Padilla é o pressionador agressivo com três finalizações em quatro lutas. Mederos é o lutador cerebral com três decisões em três lutas. A leve vantagem do Padilla vem do fato de ele já ter enfrentado finalizadores e veteranos do UFC (Bonfim, Stephens) e venceu, enquanto Mederos só venceu opponents que aceitaram o ritmo dele. É um teste de pressão real para o cerebral, e historicamente prospects que venceram apenas por decisão cedem quando enfrentam um pressionador puro. Mas a margem é fina.',
      x_factor: {
        title: 'A Primeira Sequência de Pressão',
        description:
          'Padilla precisa impor o ritmo nos primeiros dois minutos do R1. Se Mederos defender a primeira sequência de pressão e estabilizar a distância, a luta vira para ele. Se Padilla fechar a distância e forçar trocação curta, a vantagem dele aparece.',
      },
      upset_alert: {
        title: 'Mederos Por Decisão Cerebral',
        description:
          'Se Mederos conseguir manter a luta na média distância usando jab e movimentação por três rounds inteiros, ele pode roubar dois rounds nos cards e vencer por decisão. É exatamente o estilo que ele dominou nas três vitórias UFC anteriores.',
      },
      probabilities: {
        fighter1: { nome: 'Padilla', percent: 56 },
        fighter2: { nome: 'Mederos', percent: 42 },
        draw: 2,
      },
      odds: {
        fighter1_odds: '-180',
        fighter2_odds: '+150',
        fighter1_name: 'Chris Padilla',
        fighter2_name: 'MarQuel Mederos',
        source: 'Média de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Chris Padilla',
            odds: '-180',
            reasoning:
              'Linha justa para a vantagem moderada do Taco. Não é grande valor, mas é a aposta correta dado o histórico contra adversários melhores.',
          },
          {
            type: 'Mederos por decisão',
            pick: 'MarQuel Mederos por decisão',
            odds: '+220',
            reasoning:
              'O cenário do upset tem retorno alto. Mederos venceu três vezes por decisão no UFC, é o método mais provável se ele vencer.',
          },
          {
            type: 'Como termina',
            pick: 'A luta vai à decisão',
            odds: '-110',
            reasoning:
              'Mederos nunca terminou no UFC. Padilla finalizou três das quatro mas Mederos não cede facilmente. Probabilidade alta de ir aos juízes.',
          },
        ],
        best_bet: {
          pick: 'Mederos por decisão a +220',
          reasoning:
            'A melhor relação risco/recompensa para quem aposta no upset. Não é o cenário mais provável, mas é o método mais coerente caso o Mederos vença.',
        },
      },
      key_stats: [
        {
          value: '0',
          label: 'finalizações do MarQuel Mederos no UFC inteiro',
          sublabel: 'Três vitórias, três decisões. Padrão consistente.',
        },
        {
          value: '3/4',
          label: 'das vitórias do Chris Padilla no UFC vieram por finalização',
          sublabel: 'Bonfim, Stephens, Llontop. O único decisão foi sobre Jai Herbert (split).',
        },
      ],
      armadilha: {
        titulo: 'Padilla por nocaute no R1',
        descricao:
          'O mercado paga bem em Padilla por KO no R1 porque o histórico de finalizações sugere que pode acontecer cedo. Mas Mederos tem queixo resistente (nunca foi finalizado por strikes na carreira), e Padilla normalmente vence no R2 ou R3, não no R1. Se quiser apostar no Padilla por finalização, o método correto é qualquer round, não R1 específico.',
      },
      conviction: {
        thesis:
          'A tese é: Chris Padilla vence por dois motivos estruturais. Primeiro, ele já enfrentou um cardápio mais variado no UFC (Bonfim, Stephens, Llontop, Herbert) e venceu quatro vezes consecutivas, três por finalização, mostrando que tem ferramentas para resolver problemas diferentes. Segundo, MarQuel Mederos venceu apenas por decisão nas três aparições no UFC, contra adversários que aceitaram o ritmo cerebral dele, e nunca foi testado por um pressionador puro como o Taco. O caminho é Padilla impor o ritmo de pressão nos primeiros dois minutos do R1, forçar trocação curta onde tem vantagem técnica, e finalizar no R2 ou R3 ou vencer por decisão dominante. Isso desmorona se Mederos conseguir manter a luta na média distância usando o jab e o reach por três rounds inteiros, replicando o estilo que dominou as três vitórias anteriores.',
        conviction_score: 5,
        conviction_rationale:
          'Convicção 5 honestamente porque é uma luta de moeda no ar entre dois invictos do UFC com cardápios similares. A vantagem do Padilla é real (cardápio mais difícil, capacidade de finalização) mas é leve, não dominante. Não é convicção 6 porque Mederos é claramente o lutador mais cerebral e pode roubar rounds. Não é 4 porque o histórico contra opponents melhores favorece o Taco.',
        conviction_breakers: [
          'Se Mederos defender a primeira sequência de pressão do Padilla nos primeiros dois minutos e estabilizar a distância, a luta vira para o estilo cerebral dele.',
          'Se Padilla cair no piloto automático agressivo e gastar gás demais nos primeiros cinco minutos, o cardio vai cobrar fatura no R3.',
          'Se Mederos mostrar evolução técnica que justifique a comparação com prospects de elite, ele pode vencer no jab e na movimentação.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 42,
          key_scenario:
            'Mederos sai do canto mantendo distância máxima. Usa o reach de 185 cm para pontuar com jab e cruzado de longe. Quando Padilla tenta fechar, Mederos circula para fora e contra-ataca. Por três rounds, mantém ritmo controlado e vence todos os rounds nos cards dos juízes. Decisão unânime.',
          required_conditions: [
            'Manter a luta na média distância por todos os 15 minutos',
            'Defender a pressão inicial do Padilla sem ser empurrado contra a grade',
            'Acumular pontos suficientes em volume e precisão',
            'Não ceder o queixo para o primeiro soco limpo do pressionador',
          ],
          historical_precedent:
            'Mederos vs Austin Hubbard (UFC Mexico, março 2025): exatamente o cenário cerebral. Hubbard tentou impor pressão, Mederos manteve distância e venceu por decisão dividida. O blueprint existe e funcionou contra um veterano do UFC.',
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'padilla-vs-mederos');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
