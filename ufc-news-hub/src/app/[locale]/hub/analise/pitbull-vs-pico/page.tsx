import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'pitbull-vs-pico',
  evento_id: null,
  slug: 'pitbull-vs-pico',
  titulo: 'Pitbull vs Pico: O Reencontro Que Bellator Nunca Conseguiu',
  subtitulo:
    'Patricio Pitbull, lenda do Bellator com três cinturões na divisão dos peso pena, finalmente encontra Aaron Pico no octógono. A luta que ficou anos sem acontecer agora decide quem é o verdadeiro candidato ao título do UFC.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,68m', envergadura: '173cm', idade: 38, academia: 'Pitbull Brothers, Natal' },
      fighter2: { altura: '1,73m', envergadura: '178cm', idade: 29, academia: 'Bodyshop Fitness, Califórnia' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão Unânime ou KO/TKO R2-R3',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Patricio Pitbull',
    apelido: 'Pitbull',
    record: '37-8-0',
    ranking: 'Lenda do Bellator',
    ultimasLutas: [
      { result: 'W', opponent: 'Dan Ige', method: 'Decisão Unânime', event: 'UFC 318' },
      { result: 'L', opponent: 'Yair Rodríguez', method: 'Decisão Unânime', event: 'UFC 314' },
      { result: 'W', opponent: 'Jeremy Kennedy', method: 'TKO R3', event: 'Bellator' },
    ],
  },
  fighter2_info: {
    nome: 'Aaron Pico',
    apelido: 'Pico',
    record: '13-5-0',
    ranking: 'Prospect do Bellator',
    ultimasLutas: [
      { result: 'L', opponent: 'Lerone Murphy', method: 'KO R1 (cotovelada giratória)', event: 'UFC 319' },
      { result: 'W', opponent: 'Henry Corrales', method: 'KO R1', event: 'Bellator' },
      { result: 'W', opponent: 'Adam Borics', method: 'KO R2', event: 'Bellator' },
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
      titulo_em_jogo: 'Reencontro Bellator',
      tagline: 'O Reencontro Que Nunca Aconteceu',
      tagline_sub:
        'Pitbull foi tricampeão do Bellator nos peso pena. Pico era o prospect que nunca conseguiu o título dele. Sete anos depois, no octógono que importa.',
      fighter1: {
        nome_completo: 'Patricio "Pitbull" Freire',
        apelido: 'Pitbull',
        sobrenome: 'Pitbull',
        record: '37-8-0',
        ranking: 'Lenda do Bellator',
        info_extra: 'Natal, Brasil | 38 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-09%2FPITBULL_PATRICIO_L_09-06.png%3Fitok%3D5wFLnofi',
      },
      fighter2: {
        nome_completo: 'Aaron Pico',
        apelido: 'Pico',
        sobrenome: 'Pico',
        record: '13-5-0',
        ranking: 'Prospect do Bellator',
        info_extra: 'Whittier, Califórnia | 29 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-08%2FPICO_AARON_R_08-16.png%3Fitok%3Dclri5GiP',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'Stone Hands, Glass Chin',
      insight:
        'Patricio Pitbull resumiu o adversário em uma frase: "Ele tem mãos de pedra e queixo de vidro". Não é trash talk gratuito. É o resumo estatístico mais honesto da carreira do Aaron Pico: o americano tem poder de nocaute documentado em pelo menos oito vitórias por finalização, mas foi nocauteado em quatro das suas cinco derrotas. A última delas foi a estreia no UFC em agosto de 2025, quando Lerone Murphy o apagou com uma cotovelada giratória no primeiro round em uma das finalizações mais bizarras do ano. Pitbull tem 38 anos, vem de uma vitória decisiva sobre Dan Ige no UFC 318, e tem 37 vitórias profissionais com a calma de quem já foi tricampeão do Bellator. Pico é cinco anos mais novo, mais atlético, com pedigree de wrestling olímpico. A pergunta da luta é simples: o queixo do Pico aguenta o jab disciplinado do Pitbull até o R3?',
      tension: {
        truth_a:
          'Pico tem 29 anos, base de wrestling olímpico (vice-campeão do trial dos EUA em 2016), poder bruto que finalizou Henry Corrales e Adam Borics em rounds iniciais, e cinco anos a menos de quilometragem. O pedigree atlético é claramente superior.',
        truth_b:
          'Pico foi nocauteado em quatro das cinco derrotas. Murphy o apagou com uma cotovelada giratória na estreia do UFC. Pitbull tem 45 lutas profissionais, três cinturões do Bellator, e construiu uma carreira inteira encontrando queixos cedentes com timing.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Patricio Pitbull',
        color: 'red',
        recent_fights: [
          {
            date: 'Jul 2025',
            opponent: 'Dan Ige',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC 318. Vitória crítica para o currículo no UFC. Mostrou que ainda tem cardio e técnica para competir com a divisão.',
          },
          {
            date: 'Abr 2025',
            opponent: 'Yair Rodríguez',
            result: 'L',
            method: 'Decisão Unânime',
            opponent_rank: '#7 FW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC 314. Estreia no UFC. Perdeu para um ex-desafiante ao título interino. Não foi humilhante mas mostrou os limites contra elite.',
          },
          {
            date: 'Nov 2023',
            opponent: 'Jeremy Kennedy',
            result: 'W',
            method: 'TKO R3',
            opponent_rank: 'Bellator',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Última vitória no Bellator antes da migração. Confirmou que ainda finaliza quando o queixo cede.',
          },
          {
            date: 'Mai 2023',
            opponent: 'Adam Borics',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'Bellator',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Defesa de cinturão Bellator. Mostrou cardio absurdo para um lutador de 36 anos.',
          },
        ],
        momentum_score: 7,
        momentum_label: 'Em Alta (com asterisco)',
        momentum_trend: 'ascending',
        momentum_note:
          'Pitbull entra na luta vindo de uma vitória sólida sobre Dan Ige no UFC 318, depois de uma estreia decepcionante contra Yair Rodríguez. O 1-1 no UFC dá margem de incerteza, mas a vitória sobre Ige confirmou que o veterano tem o cardio e a técnica para competir nesse nível. Aos 38 anos, ele sabe exatamente o que pode e o que não pode fazer no octógono.',
      },
      fighter2: {
        nome: 'Aaron Pico',
        color: 'blue',
        recent_fights: [
          {
            date: 'Ago 2025',
            opponent: 'Lerone Murphy',
            result: 'L',
            method: 'KO R1 (cotovelada giratória)',
            opponent_rank: '#9 FW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC 319. Estreia no UFC. Apagado em uma das finalizações mais bizarras de 2025. Quebrou sequência de três vitórias.',
          },
          {
            date: 'Mar 2025',
            opponent: 'Henry Corrales',
            result: 'W',
            method: 'KO R1',
            opponent_rank: 'Bellator',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Última vitória no Bellator antes do salto. Finalização rápida característica do estilo dele.',
          },
          {
            date: 'Set 2024',
            opponent: 'Adam Borics',
            result: 'W',
            method: 'KO R2',
            opponent_rank: 'Bellator',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Vitória sobre o mesmo Adam Borics que Pitbull venceu por decisão. Mas Pico finalizou.',
          },
          {
            date: 'Jun 2024',
            opponent: 'Pedro Carvalho',
            result: 'W',
            method: 'TKO R1',
            opponent_rank: 'Bellator',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Mais uma finalização rápida. A sequência que o trouxe para o UFC.',
          },
          {
            date: 'Set 2022',
            opponent: 'Jeremy Kennedy',
            result: 'L',
            method: 'TKO R3',
            opponent_rank: 'Bellator',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Outra derrota onde o queixo cedeu. Padrão recorrente da carreira.',
          },
        ],
        momentum_score: 5,
        momentum_label: 'Bouncing Back',
        momentum_trend: 'stable',
        momentum_note:
          'Pico chega ao UFC 327 com a tarefa de bouncing back após a derrota brutal para Murphy na estreia. O wrestling olímpico (vice-campeão do trial dos EUA em 2016) é um diferencial real que ainda não usou no UFC. Aos 29 anos é jovem para o peso pena. O problema é o padrão de queixo: quatro das cinco derrotas vieram por nocaute, e Pitbull é exatamente o tipo de lutador disciplinado que sabe explorar isso.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Patricio Pitbull',
        media_oponentes: 4,
        media_oponentes_label: 'Muito Bom',
        aproveitamento: '1V-1D (UFC)',
        contra_top5: '0V-1D',
      },
      fighter2: {
        nome: 'Aaron Pico',
        media_oponentes: 3,
        media_oponentes_label: 'Bom',
        aproveitamento: '0V-1D (UFC)',
        contra_top5: '0V-1D',
      },
      oponentes_em_comum_count: { fighter1: 2, fighter2: 2 },
      oponentes_em_comum_note:
        'Os dois enfrentaram Adam Borics e Jeremy Kennedy no Bellator. Pitbull venceu Borics por decisão e Kennedy por TKO. Pico venceu Borics por KO (com performance mais dominante) mas perdeu para Kennedy por TKO. Resultado misto: Pico teve melhor performance contra Borics, Pitbull teve melhor performance contra Kennedy.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.2, valueB: 5.1, maxVal: 7, format: 'decimal' },
        { label: 'Precisão de Strikes (%)', valueA: 50, valueB: 53, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.5, valueB: 4.8, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Pico absorve mais que Pitbull' },
        { label: 'Defesa de Strikes (%)', valueA: 56, valueB: 49, maxVal: 100, format: 'percent', note: 'Defesa de Pico é o ponto fraco documentado' },
        { label: 'Takedowns por 15 Min', valueA: 0.5, valueB: 1.4, maxVal: 4, format: 'decimal' },
        { label: 'Defesa de Takedown (%)', valueA: 65, valueB: 70, maxVal: 100, format: 'percent' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '38 anos', fighter2: '29 anos' },
        { label: 'Altura', fighter1: '1,68m', fighter2: '1,73m' },
        { label: 'Envergadura', fighter1: '173cm', fighter2: '178cm' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox' },
        { label: 'Academia', fighter1: 'Pitbull Brothers', fighter2: 'Bodyshop Fitness' },
        { label: 'Experiência', fighter1: '45 lutas profissionais', fighter2: '18 lutas profissionais' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter1',
          gap: 2,
          note: 'Pitbull tem o jab disciplinado e a leitura de timing construída em 45 lutas profissionais. Pico depende de explosão.',
        },
        {
          label: 'Striking em Curta Distância',
          advantage: 'fighter2',
          gap: 1,
          note: 'Pico tem o poder bruto que finalizou Borics, Carvalho e Corrales rapidamente quando entra no clinch.',
        },
        {
          label: 'Wrestling',
          advantage: 'fighter2',
          gap: 4,
          note: 'Pico foi vice-campeão do trial olímpico dos EUA em 2016. Pedigree de wrestling de elite que ainda não usou no UFC.',
        },
        {
          label: 'Defesa de Queixo',
          advantage: 'fighter1',
          gap: 3,
          note: 'Quatro das cinco derrotas do Pico foram por nocaute. Pitbull foi finalizado apenas três vezes em 45 lutas.',
        },
        {
          label: 'Cardio (3 rounds)',
          advantage: 'fighter1',
          gap: 2,
          note: 'Pitbull defendeu título do Bellator em lutas de cinco rounds. Pico raramente foi além do R2.',
        },
        {
          label: 'Experiência (lutas grandes)',
          advantage: 'fighter1',
          gap: 5,
          note: 'Três cinturões do Bellator. Pico nunca foi até semifinal de torneio. Disparidade absurda.',
        },
      ],
      summary:
        'Pico ganha se conseguir usar o wrestling olímpico para dominar o chão ou conectar um soco explosivo nos primeiros minutos antes do Pitbull encontrar o ritmo. Pitbull ganha se mantiver o jab disciplinado, sobreviver à explosão inicial e capitalizar com o timing veterano nos rounds 2 e 3.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Patricio Pitbull',
        ko_tko: { count: 12, percent: 32 },
        submission: { count: 12, percent: 32 },
        decision: { count: 13, percent: 35 },
        total_wins: 37,
      },
      fighter2: {
        nome: 'Aaron Pico',
        ko_tko: { count: 9, percent: 69 },
        submission: { count: 2, percent: 15 },
        decision: { count: 2, percent: 15 },
        total_wins: 13,
      },
      insight:
        'Os dois são finalizadores de natureza diferente. Pitbull tem distribuição quase perfeita entre os três métodos: 12 KO/TKO, 12 submissões e 13 decisões em 37 vitórias. Pico é nocauteador puro: 69 por cento por KO/TKO, apenas duas decisões em 13 vitórias. Pitbull pode finalizar de qualquer forma. Pico depende principalmente do tiro único.',
    },

    previsao_final: {
      winner_name: 'Patricio Pitbull',
      winner_side: 'fighter1',
      predicted_method: 'Decisão Unânime ou KO/TKO R2-R3',
      confidence_score: 5,
      confidence_label: 'MÉDIA',
      explanation:
        'Esta é uma luta de moeda no ar onde dois fatores estruturais favorecem levemente o Pitbull contra o consenso do mercado. Primeiro, o queixo do Pico é o ponto fraco mais documentado da carreira dele: quatro das cinco derrotas vieram por nocaute, incluindo a estreia brutal contra Murphy em agosto. Segundo, Pitbull tem 45 lutas profissionais de experiência contra 18 do Pico, três cinturões do Bellator, e a disciplina técnica que pegou Borics na decisão. O risco real é o wrestling olímpico do Pico, que ainda não foi visto no UFC, e a explosão dos primeiros minutos. É uma escolha contrária ao mercado por razões de chin economy e experiência.',
      x_factor: {
        title: 'O Wrestling Olímpico do Pico',
        description:
          'Pico foi vice-campeão do trial olímpico dos EUA em 2016 mas raramente usou wrestling no MMA. Se ele decidir levar a luta ao chão e impor controle, o cenário muda completamente. Se ficar em pé buscando o tiro único, é onde Pitbull tem a vantagem.',
      },
      upset_alert: {
        title: 'Pitbull Por Tiro de Timing',
        description:
          'Pitbull tem 12 nocautes na carreira e o timing veterano que constrói finalizações por acúmulo. Se Pico errar uma combinação no R2, Pitbull pode encontrar o queixo de vidro com um straight de timing perfeito.',
      },
      probabilities: {
        fighter1: { nome: 'Pitbull', percent: 50 },
        fighter2: { nome: 'Pico', percent: 48 },
        draw: 2,
      },
      odds: {
        fighter1_odds: '+155',
        fighter2_odds: '-180',
        fighter1_name: 'Patricio Pitbull',
        fighter2_name: 'Aaron Pico',
        source: 'Média de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline contrarian',
            pick: 'Patricio Pitbull',
            odds: '+155',
            reasoning:
              'O mercado favorece o Pico significativamente baseado em juventude e wrestling. Mas o queixo de vidro é o pattern mais consistente da carreira dele e Pitbull tem experiência para explorar. Edge real contra o consenso.',
          },
          {
            type: 'Pitbull por nocaute',
            pick: 'Pitbull por KO/TKO',
            odds: '+450',
            reasoning:
              'Cenário do upset com retorno alto. O queixo do Pico é frágil documentado, e Pitbull tem 12 nocautes na carreira com timing veterano. Risco/recompensa atrativo.',
          },
          {
            type: 'Como termina (qualquer lutador)',
            pick: 'A luta termina por KO/TKO',
            odds: '-110',
            reasoning:
              'Os dois caem por nocaute recentemente: Pitbull foi finalizado apenas três vezes em 45 lutas mas é finalizador. Pico foi finalizado em quatro das cinco derrotas. A probabilidade combinada de KO finish é alta.',
          },
        ],
        best_bet: {
          pick: 'Pitbull por KO/TKO a +450',
          reasoning:
            'A melhor relação risco/recompensa do card. Não é a aposta mais provável, mas é o cenário onde o ROI compensa: queixo conhecido do Pico contra finalizador veterano com timing.',
        },
      },
      key_stats: [
        {
          value: '4/5',
          label: 'das derrotas do Pico foram por nocaute',
          sublabel: 'Incluindo a estreia no UFC contra Lerone Murphy (cotovelada giratória, agosto 2025)',
        },
        {
          value: '3x',
          label: 'campeão dos peso pena do Bellator (Pitbull)',
          sublabel: 'Mais defesas de cinturão que qualquer outro lutador na história da divisão Bellator',
        },
      ],
      armadilha: {
        titulo: 'Pico por wrestling/decisão',
        descricao:
          'O mercado paga bem em Pico por decisão porque o pedigree de wrestling olímpico sugere que ele pode dominar o chão. Mas Pico só venceu por decisão uma vez na carreira inteira (em 13 vitórias). Ele não é um decision fighter, é um finalizador. Apostar em Pico por decisão é apostar contra todo o histórico dele.',
      },
      conviction: {
        thesis:
          'A tese é: Patricio Pitbull vence por dois motivos estruturais que vão contra o consenso do mercado. Primeiro, o queixo do Pico é o ponto fraco mais documentado da carreira dele: quatro das cinco derrotas vieram por nocaute, incluindo a estreia brutal contra Lerone Murphy em agosto de 2025 com uma cotovelada giratória. Segundo, Pitbull tem 45 lutas profissionais contra 18 do Pico, foi tricampeão do Bellator, e tem o timing veterano que constrói finalizações por acúmulo de pressão. O caminho é Pitbull manter o jab disciplinado nos primeiros cinco minutos, sobreviver à explosão inicial do Pico, e capitalizar no R2 ou R3 quando o americano cansar de buscar o tiro único. Isso desmorona se Pico decidir usar o wrestling olímpico que ainda não mostrou no UFC ou se conectar um soco explosivo nos primeiros minutos antes do Pitbull encontrar o ritmo.',
        conviction_score: 5,
        conviction_rationale:
          'Convicção 5 porque é honestamente uma luta de moeda no ar onde os dois pilares estruturais favorecem o Pitbull (queixo do Pico, experiência) mas o pedigree atlético do Pico é genuinamente superior. Não é convicção 6 ou 7 porque o wrestling olímpico do Pico é uma carta na manga real que pode mudar tudo. Não é 4 porque os pilares estruturais (queixo + experiência) são reais e o mercado está exagerando ao colocar o Pico tão favorito.',
        conviction_breakers: [
          'Se Pico decidir usar o wrestling olímpico que tem em background mas raramente mostra, ele pode dominar o chão e esgotar o cardio do Pitbull (que é mais velho).',
          'Se Pico conectar um soco explosivo nos primeiros 90 segundos do R1 antes do Pitbull achar o ritmo de jab, o tiro único pode resolver tudo em uma troca.',
          'Se a idade do Pitbull (38 anos) finalmente cobrar a fatura em forma de cardio cedente nos rounds finais, o Pico jovem assume controle.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 50,
          key_scenario:
            'Pico sai do canto buscando o tiro único nos primeiros 60 segundos. Pitbull tenta manter distância com jab. Pico conecta uma combinação de cruzado-uppercut antes do veterano achar o ritmo, e o queixo do Pitbull (que tem 38 anos e absorveu muita guerra na carreira) cede ao impacto. KO no R1, vitória do prospect americano sobre a lenda brasileira.',
          required_conditions: [
            'Conectar um soco limpo antes dos 90 segundos do R1',
            'Sobreviver ao primeiro avanço de jab do Pitbull sem ser feito de figura',
            'Que o queixo do Pitbull (38 anos, 45 lutas) finalmente ceda ao impacto certo',
            'Não cair no jogo paciente do veterano que premia experiência sobre explosão',
          ],
          historical_precedent:
            'Lerone Murphy vs Aaron Pico (UFC 319, agosto de 2025): exatamente o cenário inverso. Pico tentou impor o ritmo dele e foi pego com uma cotovelada giratória no R1. O padrão se repete contra qualquer lutador disciplinado que sabe esperar a janela.',
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'pitbull-vs-pico');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
