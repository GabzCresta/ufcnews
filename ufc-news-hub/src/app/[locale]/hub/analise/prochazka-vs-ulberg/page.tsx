import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'prochazka-vs-ulberg',
  evento_id: null,
  slug: 'prochazka-vs-ulberg',
  titulo: 'Procházka vs Ulberg: O Paradoxo do Foco',
  subtitulo:
    'Jiří passou três dias num quarto escuro sem comida para chegar ao estado de mente vazia do Bushido. O filho dele nasce dois dias depois da luta. Mas a defesa de 40% não se resolve com meditação.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,93m', envergadura: '203cm', idade: 33, academia: 'Jetsaam Gym Brno, República Tcheca' },
      fighter2: { altura: '1,93m', envergadura: '198cm', idade: 34, academia: 'City Kickboxing, Auckland' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'KO/TKO R2-R3 ou Decisão Unânime',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Jiří Procházka',
    apelido: 'BJP',
    record: '32-5-1',
    ranking: '#1 Peso Meio-Pesado',
    ultimasLutas: [
      { result: 'W', opponent: 'Khalil Rountree Jr', method: 'KO R3', event: 'UFC 320' },
      { result: 'W', opponent: 'Jamahal Hill', method: 'KO R3', event: 'UFC 311' },
      { result: 'L', opponent: 'Alex Pereira', method: 'KO R2', event: 'UFC 303' },
    ],
  },
  fighter2_info: {
    nome: 'Carlos Ulberg',
    apelido: 'Black Jag',
    record: '14-1-0',
    ranking: '#3 Peso Meio-Pesado',
    ultimasLutas: [
      { result: 'W', opponent: 'Dominick Reyes', method: 'KO R1', event: 'UFC Fight Night 260' },
      { result: 'W', opponent: 'Jan Blachowicz', method: 'Decisão Unânime', event: 'UFC London' },
      { result: 'W', opponent: 'Volkan Oezdemir', method: 'Decisão Unânime', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC 327: Procházka vs Ulberg',
  evento_data: '11 de Abril, 2026',
  evento_local: 'Kaseya Center, Miami, Flórida',
  categoria_peso: 'Peso Meio-Pesado (205 lbs)',
  num_rounds: 5,
  is_titulo: true,
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
      titulo_em_jogo: 'Título Vago Peso Meio-Pesado',
      tagline: 'O Paradoxo do Foco',
      tagline_sub:
        'Foco máximo do Jiří contra uma defesa estrutural de 40%. O Bushido não muda os números.',
      fighter1: {
        nome_completo: 'Jiří "BJP" Procházka',
        apelido: 'BJP',
        sobrenome: 'Procházka',
        record: '32-5-1',
        ranking: '#1 Peso Meio-Pesado',
        info_extra: 'Hostákov, República Tcheca | 33 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-10%2FPROCHAZKA_JIRI_L_10-04.png%3Fitok%3D149yli5O',
      },
      fighter2: {
        nome_completo: 'Carlos "Black Jag" Ulberg',
        apelido: 'Black Jag',
        sobrenome: 'Ulberg',
        record: '14-1-0',
        ranking: '#3 Peso Meio-Pesado',
        info_extra: 'Auckland, Nova Zelândia | 34 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-09%2FULBERG_CARLOS_L_09-27.png%3Fitok%3DmTdNyLu-',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'O Paradoxo do Foco',
      insight:
        'Jiří Procházka passou três dias trancado num quarto escuro, sem comida e só com água, num ritual de preparação Bushido para chegar ao estado de mente vazia. O filho dele nasce no dia 13 de abril, dois dias depois da luta, e ele declarou publicamente que não existe outra missão agora. Ele nunca esteve mais focado na carreira inteira. Mas foco máximo não muda a matemática da defesa de striking: 40 por cento de defesa e absorção de 5,4 sig strikes por minuto continuam idênticos com ou sem meditação.',
      tension: {
        truth_a:
          'Foco máximo documentado na semana da luta: ritual de três dias em quarto escuro, bebê nascendo dois dias depois, mente vazia em modo Bushido. Jiří nunca esteve mais comprometido com um camp.',
        truth_b:
          'A defesa de 40 por cento e o 5,4 SApM são números estruturais, medidos ao longo de toda a carreira. Ulberg não precisa ler padrões para conectar, precisa acertar limpo. Foco não cria queixo novo.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Jiří Procházka',
        color: 'red',
        recent_fights: [
          {
            date: 'Out 2025',
            opponent: 'Khalil Rountree Jr',
            result: 'W',
            method: 'KO R3',
            opponent_rank: '#6 LHW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC 320. POTN + FOTN. Absorveu dano nos dois primeiros rounds, virou no R3 com clinch e ground-and-pound. Mostrou coração, mas também a defesa vulnerável.',
          },
          {
            date: 'Jan 2025',
            opponent: 'Jamahal Hill',
            result: 'W',
            method: 'KO R3',
            opponent_rank: '#5 LHW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC 311. Retorno após as derrotas para Pereira. Caos e pressão funcionando. Hill não aguentou o ritmo.',
          },
          {
            date: 'Jun 2024',
            opponent: 'Alex Pereira',
            result: 'L',
            method: 'KO R2',
            opponent_rank: 'Campeão',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'UFC 303. Revanche pelo título. Comeu um gancho de esquerda no fim do R1 e um chute alto no R2.',
          },
          {
            date: 'Abr 2024',
            opponent: 'Aleksandar Rakic',
            result: 'W',
            method: 'KO R2',
            opponent_rank: '#8 LHW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC 300. Finalização de clinch e joelhadas.',
          },
          {
            date: 'Nov 2023',
            opponent: 'Alex Pereira',
            result: 'L',
            method: 'KO R2',
            opponent_rank: '#4 LHW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC 295, título vago. Aguentou pressão no R1, apagado por gancho de esquerda no R2.',
          },
        ],
        momentum_score: 7,
        momentum_label: 'Em Alta (com ressalvas)',
        momentum_trend: 'ascending',
        momentum_note:
          'Duas vitórias consecutivas por nocaute após as derrotas para Pereira mostram que Jiří ainda é um dos finalizadores mais perigosos da divisão. Mas o padrão é o mesmo nas duas: ele absorve muito dano antes de virar o jogo. Contra Rountree, foi dominado nos dois primeiros rounds. Contra Hill, mesma receita. Funciona contra finalizadores menos técnicos. É letal contra um striker técnico que acerta limpo.',
      },
      fighter2: {
        nome: 'Carlos Ulberg',
        color: 'blue',
        recent_fights: [
          {
            date: 'Set 2025',
            opponent: 'Dominick Reyes',
            result: 'W',
            method: 'KO R1',
            opponent_rank: '#10 LHW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC Fight Night 260. Maior vitória da carreira. Apagou um ex-desafiante ao título em menos de cinco minutos com contra-ataque técnico.',
          },
          {
            date: 'Mar 2025',
            opponent: 'Jan Blachowicz',
            result: 'W',
            method: 'Decisão Unânime (29-28 x3)',
            opponent_rank: '#7 LHW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC London. Vitória polêmica em ritmo apático. O público vaiou. Questionaram o gás dele, e ele respondeu nocauteando Reyes seis meses depois.',
          },
          {
            date: 'Nov 2024',
            opponent: 'Volkan Oezdemir',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: '#11 LHW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Controlou com envergadura e movimentação. Oezdemir nunca conseguiu fechar a distância.',
          },
          {
            date: 'Jun 2024',
            opponent: 'Alonzo Menifield',
            result: 'W',
            method: 'KO R1 (12 segundos)',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Um dos nocautes mais rápidos da divisão no ano. Gancho de esquerda contra direto.',
          },
          {
            date: 'Set 2023',
            opponent: 'Da Un Jung',
            result: 'W',
            method: 'KO R1',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Manteve a sequência de finalizações cedo. Padrão consistente de contra-ataque.',
          },
        ],
        momentum_score: 9,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note:
          'Nove vitórias consecutivas, a maior sequência ativa da divisão. Depois da performance apática contra Blachowicz, ele respondeu com um dos nocautes mais impressionantes de 2025: Reyes em um round. O problema real não é forma nem confiança. É que ele nunca lutou cinco rounds como cabeça de chave de uma luta principal sozinho. A curva de aprendizado nos rounds finais é a única grande incógnita.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Jiří Procházka',
        media_oponentes: 4,
        media_oponentes_label: 'Muito Bom',
        aproveitamento: '6V-2D (75%)',
        contra_top5: '2V-2D',
      },
      fighter2: {
        nome: 'Carlos Ulberg',
        media_oponentes: 3,
        media_oponentes_label: 'Bom',
        aproveitamento: '9V-1D (90%)',
        contra_top5: '1V-0D',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Procházka enfrentou o topo absoluto da divisão (Pereira duas vezes, Teixeira, Hill, Rountree, Rakic). Ulberg escalou combinando finalizações rápidas contra veteranos e vitórias técnicas contra ex-campeões em declínio. Dois caminhos diferentes, mesmo destino.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 5.77, valueB: 4.2, maxVal: 7, format: 'decimal', note: 'Procházka é top 5 da divisão em volume' },
        { label: 'Precisão de Strikes (%)', valueA: 55, valueB: 52, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 5.4, valueB: 2.8, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Jiří absorve quase o dobro' },
        { label: 'Defesa de Strikes (%)', valueA: 40, valueB: 62, maxVal: 100, format: 'percent', note: 'O número mais crítico da luta' },
        { label: 'Takedowns por 15 Min', valueA: 1.1, valueB: 0.3, maxVal: 5, format: 'decimal' },
        { label: 'Precisão de Takedown (%)', valueA: 45, valueB: 50, maxVal: 100, format: 'percent' },
        { label: 'Defesa de Takedown (%)', valueA: 60, valueB: 85, maxVal: 100, format: 'percent', note: 'A TDD do Ulberg nunca foi testada contra um wrestler de verdade' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '34 anos' },
        { label: 'Altura', fighter1: '1,93m', fighter2: '1,93m' },
        { label: 'Envergadura', fighter1: '203cm', fighter2: '198cm' },
        { label: 'Stance', fighter1: 'Switch (Orthodox/Southpaw)', fighter2: 'Orthodox' },
        { label: 'Academia', fighter1: 'Jetsaam Gym Brno', fighter2: 'City Kickboxing, Auckland' },
        { label: 'Experiência UFC', fighter1: '8 lutas', fighter2: '10 lutas' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter2',
          gap: 3,
          note: 'Ulberg trabalha jab, teep e contra-ataque com a envergadura. Jiří prefere a trocação curta e caótica.',
        },
        {
          label: 'Striking em Curta Distância',
          advantage: 'fighter1',
          gap: 4,
          note: 'No clinch e na trocação selvagem, Jiří é quase imbatível. A finalização sobre Rountree veio exatamente daí.',
        },
        {
          label: 'Poder de Nocaute',
          advantage: 'fighter1',
          gap: 1,
          note: '28 KOs em 32 vitórias do Jiří. Ulberg finaliza rápido quando conecta limpo, mas Jiří apaga em qualquer troca.',
        },
        {
          label: 'Defesa de Striking',
          advantage: 'fighter2',
          gap: 5,
          note: 'A maior diferença da análise. 40 por cento do Jiří contra 62 por cento do Ulberg. É estrutural.',
        },
        {
          label: 'Grappling e Clinch',
          advantage: 'fighter1',
          gap: 3,
          note: 'Base de wrestling europeu do Jiří contra dados mínimos do Ulberg em grappling contra wrestler de verdade.',
        },
        {
          label: 'Cardio (5 rounds)',
          advantage: 'fighter1',
          gap: 2,
          note: 'Jiří já foi cinco rounds com Teixeira em 2022. Ulberg nunca passou de três rounds como cabeça de chave sozinho.',
        },
      ],
      summary:
        'O perfil é claro: Ulberg ganha nos primeiros dez minutos, na distância. Jiří ganha se conseguir forçar o jogo de curta distância ou levar a luta para os rounds finais. A pergunta não é quem é melhor, é quem impõe o próprio jogo primeiro.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Jiří Procházka',
        ko_tko: { count: 28, percent: 88 },
        submission: { count: 3, percent: 9 },
        decision: { count: 1, percent: 3 },
        total_wins: 32,
      },
      fighter2: {
        nome: 'Carlos Ulberg',
        ko_tko: { count: 9, percent: 64 },
        submission: { count: 1, percent: 7 },
        decision: { count: 4, percent: 29 },
        total_wins: 14,
      },
      insight:
        'Procházka é um dos finalizadores mais letais da história dos Meio-Pesados: 88 por cento das vitórias por KO/TKO. Ulberg também é finalizador, mas tem quatro decisões em catorze vitórias (29 por cento) contra apenas uma em 32 do Jiří. Ulberg sabe operar em modo gestão quando precisa. Jiří não sabe.',
    },

    previsao_final: {
      winner_name: 'Carlos Ulberg',
      winner_side: 'fighter2',
      predicted_method: 'KO/TKO R2-R3 (contra-ataque técnico) ou Decisão Unânime',
      confidence_score: 4,
      confidence_label: 'MÉDIA',
      explanation:
        'Essa é uma luta de moeda no ar honesta, com leve inclinação para o azarão por razões estruturais e não psicológicas. O pilar psicológico inicial (Jiří subestimando a luta para focar na trilogia com Pereira) morreu com a cobertura da semana da luta: o checo está no foco máximo, fez ritual de três dias em quarto escuro e tem filho nascendo dois dias depois. O que sobra é estrutural: 40 por cento de defesa contra 62 por cento, 5,4 SApM contra 2,8, e o nocaute em um round que o Ulberg fez sobre Dominick Reyes em setembro, contra o mesmo arquétipo que Jiří representa. Convicção 4 porque é honestamente uma moeda no ar.',
      x_factor: {
        title: 'Primeiros 3 Minutos',
        description:
          'Se Ulberg estabelece a distância com jab e teep nos primeiros 180 segundos, a tese estrutural funciona. Se Jiří fecha a distância antes disso, a luta vira o território do caos onde Ulberg nunca foi testado.',
      },
      upset_alert: {
        title: 'O Estado de Mente Vazia do Bushido',
        description:
          'Ulberg vence lendo padrões e contra-atacando. Um lutador em estado puramente instintivo não oferece padrão para ler. Essa é a única variável onde o foco máximo do Jiří pode realmente inverter a matemática.',
      },
      probabilities: {
        fighter1: { nome: 'Procházka', percent: 47 },
        fighter2: { nome: 'Ulberg', percent: 50 },
        draw: 3,
      },
      odds: {
        fighter1_odds: '-130',
        fighter2_odds: '+110',
        fighter1_name: 'Jiří Procházka',
        fighter2_name: 'Carlos Ulberg',
        source: 'Média de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Carlos Ulberg',
            odds: '+110',
            reasoning:
              'Mercado levemente errado por ignorar a diferença estrutural de defesa (40 vs 62 por cento) e o precedente recente contra Reyes. Vantagem moderada — não apostar pesado.',
          },
          {
            type: 'Método',
            pick: 'Ulberg por KO/TKO',
            odds: '+350',
            reasoning:
              'Se Ulberg vencer, a forma estatisticamente mais provável é a finalização no R2 ou R3 via contra-ataque, seguindo o template exato do nocaute sobre Reyes em setembro de 2025.',
          },
          {
            type: 'Rounds 2 ou 3',
            pick: 'A luta termina no R2 ou no R3',
            odds: '+180',
            reasoning:
              'Combina o padrão temporal das viradas do Jiří (Rountree no R3, Hill no R3) com a janela em que o contra-ataque técnico do Ulberg pega o checo descendo a guarda. Mais valor do que apostar num round específico.',
          },
          {
            type: 'Duração',
            pick: 'Menos de 3,5 Rounds',
            odds: '-125',
            reasoning:
              'Os dois são finalizadores: 88 por cento de KO/TKO do Jiří, 64 por cento do Ulberg. Apenas uma das 32 vitórias do Jiří foi por decisão. Estatisticamente improvável ir para os juízes.',
          },
          {
            type: 'Como termina (qualquer lutador)',
            pick: 'A luta termina por KO/TKO',
            odds: '-140',
            reasoning:
              'Quatro das cinco derrotas de carreira do Jiří foram por finalização. Dez das catorze vitórias do Ulberg foram por finalização. A probabilidade combinada de finalização passa fácil dos 70 por cento.',
          },
        ],
        best_bet: {
          pick: 'Ulberg por KO/TKO a +350',
          reasoning:
            'Risco e recompensa coerentes com a tese da análise. Convicção 4 significa não aumentar o stake — essa é a aposta de risco moderado, não a aposta segura.',
        },
      },
      key_stats: [
        {
          value: '88%',
          label: 'das vitórias do Jiří foram por nocaute (28 KO/TKO em 32 vitórias)',
          sublabel: 'Apenas uma decisão em 32 vitórias na carreira inteira',
        },
        {
          value: 'NUNCA',
          label: 'a defesa de takedown do Ulberg foi testada contra um wrestler comprometido',
          sublabel: 'Blachowicz tentou apenas um takedown na luta inteira em UFC London (março de 2025)',
        },
      ],
      armadilha: {
        titulo: 'Procházka por KO no R1',
        descricao:
          'O mercado paga bem em Jiří por KO no R1 (+600 em algumas casas). Mas historicamente Jiří começa devagar e vira a partir do R2 ou R3 (ver Rountree, Hill, Rakic). Se você quer apostar no Jiří, a aposta correta é KO no R2 ou R3, não no R1.',
      },
      conviction: {
        thesis:
          'A tese é: Carlos Ulberg vence por duas razões estruturais que não dependem de psicologia. Primeiro, a diferença de defesa de striking entre os dois (40 por cento contra 62 por cento) é a maior de qualquer luta principal dos Meio-Pesados no ano, e Jiří absorve quase o dobro de strikes por minuto que Ulberg, segundo a análise da Bleacher Report sobre as lutas pelo título contra Pereira. Segundo, Ulberg acabou de nocautear Dominick Reyes em um round em setembro de 2025, contra o mesmo arquétipo que Jiří representa: striker longo, finalizador, ex-desafiante ao título. O caminho é Ulberg manter a distância com jab e teep nos primeiros cinco minutos e capitalizar com contra-ataque no R2 ou R3 quando Jiří entra no caos. Isso desmorona se Jiří conseguir forçar a curta distância nos primeiros três minutos ou se o estado de mente vazia do Bushido tirar do Jiří os padrões que Ulberg precisa ler para contra-atacar.',
        conviction_score: 4,
        conviction_rationale:
          'Convicção 4, e não 5, porque a reavaliação da semana da luta invalidou um dos três pilares originais da tese. A versão anterior dependia de sinais de que o Jiří estaria subestimando a luta (ele falando sobre a trilogia com Pereira antes do dia). A cobertura da semana mostra Jiří no foco máximo, em ritual Bushido, com bebê nascendo dois dias depois. Sobram dois pilares estruturais (defesa e o precedente do Reyes) que são reais mas não bastam para uma convicção de 5 ou mais. É uma escolha contrária ao mercado por razões mecânicas de striking, não por leitura psicológica.',
        conviction_breakers: [
          'Se Jiří conseguir fechar a distância e impor a curta distância nos primeiros três minutos do R1, o caos anula a vantagem técnica do Ulberg e a tese morre na abertura da luta.',
          'Se o estado de mente vazia do Jiří for real (três dias de ritual em quarto escuro), ele pode atacar sem padrões reconhecíveis, e Ulberg vence lendo padrões para contra-atacar. Sem padrão, sem contra-ataque.',
          'Se Ulberg repetir o ritmo apático da vitória por decisão sobre Blachowicz em Londres, em vez do ritmo explosivo do nocaute sobre Reyes, ele perde nos rounds finais que ele nunca experimentou como cabeça de chave sozinho.',
          'Se Jiří conseguir uma sequência prolongada de joelhadas no clinch nos dois primeiros rounds, ele já provou contra Rountree no UFC 320 que destrói nessa posição, e isso tira Ulberg do striking puro onde ele é superior.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 47,
          key_scenario:
            'Jiří entra em estado de mente vazia, puramente instintivo, força a curta distância antes do minuto 3 do R1, absorve dois ou três tiros para entrar no clinch, trabalha joelhadas no corpo por um a dois minutos por round, e no R2 ou R3 conecta um uppercut ou uma cotovelada de clinch. O bebê nascendo dois dias depois funciona como combustível emocional máximo. Exatamente o padrão da finalização sobre Rountree no UFC 320.',
          required_conditions: [
            'Forçar a curta distância antes dos 3 minutos do R1',
            'Sobreviver ao primeiro contra-ataque limpo do Ulberg sem ser apagado',
            'Explorar o clinch, onde Ulberg tem dados mínimos',
            'O estado de mente vazia tira do Jiří padrões previsíveis que Ulberg contra-ataca',
          ],
          historical_precedent:
            'Procházka vs Rountree (UFC 320, outubro de 2025): mesma receita de caos e finalização no clinch contra um striker técnico ranqueado. Foi dominado nos dois primeiros rounds, virou no R3 com clinch e joelhadas e finalizou.',
        },
      },
    },

    // radar_apostador deliberately omitted in the new editorial shape.
    // Odds, value picks, key stats, and armadilha are all rendered inside
    // the consolidated VerdictBlock at the bottom of PrevisaoFinalSection.
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'prochazka-vs-ulberg');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
