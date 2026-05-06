import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'buchecha-vs-spann',
  evento_id: null,
  slug: 'buchecha-vs-spann',
  titulo: 'Buchecha vs Spann: O Mestre do BJJ Contra o Finalizador',
  subtitulo:
    'Marcus Buchecha é lenda do BJJ, cinco vezes campeão mundial, em transição para MMA com 5-2-1 mas ainda com jogo em pé limitado. Ryan Spann tem 23-11 com 14 submissões de carreira, vindo de finalização R1 sobre Brzeski no UFC 318. É o encontro de dois finalizadores em contextos opostos de experiência em MMA.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,91m', envergadura: '203cm', idade: 35, academia: 'Checkmat / American Kickboxing Academy' },
      fighter2: { altura: '1,96m', envergadura: '201cm', idade: 34, academia: 'Fortis MMA' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Submissão R1-R2',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Marcus Buchecha',
    apelido: 'Buchecha',
    record: '5-2-1',
    ranking: 'Sem ranking no top 15',
    ultimasLutas: [
      { result: 'D', opponent: 'Kennedy Nzechukwu', method: 'Empate', event: 'UFC on ESPN 73' },
      { result: 'L', opponent: 'Martin Buday', method: 'Decisão', event: 'UFC on ABC 9' },
      { result: 'W', opponent: 'Amir Aliakbari', method: 'Submissão R1', event: 'ONE 169' },
    ],
  },
  fighter2_info: {
    nome: 'Ryan Spann',
    apelido: 'Superman',
    record: '23-11-0',
    ranking: 'Sem ranking no top 15',
    ultimasLutas: [
      { result: 'W', opponent: 'Łukasz Brzeski', method: 'Submissão R1 (2:37)', event: 'UFC 318' },
      { result: 'L', opponent: 'Waldo Cortes-Acosta', method: 'KO R2', event: 'UFC Fight Night 254' },
      { result: 'W', opponent: 'Ovince Saint Preux', method: 'Submissão R1 (1:35)', event: 'UFC 307' },
    ],
  },
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  categoria_peso: 'Peso-Pesado (265 lbs)',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Sterling vs Zalal',
      evento_data: '25 de Abril, 2026',
      evento_local: 'Meta APEX, Las Vegas, Nevada',
      categoria_peso: 'Peso-Pesado (265 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'O Mestre do BJJ Contra o Finalizador',
      tagline_sub: 'Buchecha com o melhor BJJ do mundo. Spann com 14 submissões e queixo testado. Quem encaixa primeiro decide.',
      fighter1: {
        nome_completo: 'Marcus "Buchecha" Almeida',
        apelido: 'Buchecha',
        sobrenome: 'Almeida',
        record: '5-2-1',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Santos, Brasil | 35 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/BUCHECHA_MARCUS_L_04-25.png?itok=1WkdFDMe',
      },
      fighter2: {
        nome_completo: 'Ryan "Superman" Spann',
        apelido: 'Superman',
        sobrenome: 'Spann',
        record: '23-11-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Memphis, Tennessee | 34 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-07/SPANN_RYAN_L_07-19.png?itok=Se3D8LV4',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Onde a Luta Acontece Decide Tudo',
      insight:
        'Marcus Buchecha é o melhor grappler do mundo em Gi e No-Gi das últimas duas décadas, cinco vezes campeão mundial de BJJ, com técnica de controle e finalização sem paralelo no peso-pesado atual. O problema é que o jogo em pé ainda é rudimentar, e ele perdeu para Martin Buday por decisão em luta majoritariamente em pé, empatou contra Nzechukwu em dezembro de 2025 em luta truncada. Ryan Spann tem 14 submissões em 23 vitórias, subiu do peso-meio-pesado para o peso-pesado, e vem de submissão no R1 sobre Łukasz Brzeski no UFC 318 em julho de 2025. A ressalva crítica aqui é de calibre de BJJ: Spann é faixa azul de jiu-jitsu, Buchecha é referência absoluta. Se a luta chega ao chão em posição controlável para Buchecha, o brasileiro finaliza. Se Spann defender takedown e manter a luta em pé, o striking dele tem vantagem real contra um MMA-rookie em stand-up.',
      tension: {
        truth_a: 'Buchecha tem 5 finalizações em 5 vitórias na carreira MMA (quatro por submissão, uma por KO). Se chegar no chão, a técnica de top control e passagem de guarda dele é inalcançável para Spann, que é faixa azul. Aliakbari foi finalizado por Buchecha em 3:15 do R1 na ONE.',
        truth_b: 'Spann é o lutador mais experiente em MMA, 34 lutas profissionais contra 8 de Buchecha, nunca foi finalizado por Gilbert Burns ou Smith em lutas onde o grappling dos adversários era superior ao dele. Queixo testado, 14 submissões próprias, e se mantiver em pé o jab e cross conectam em cima dos 35 anos do brasileiro.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Marcus Buchecha',
        color: 'red',
        momentum_score: 4,
        momentum_label: 'Em Recuperação',
        momentum_trend: 'stable',
        momentum_note:
          'Empatou com Kennedy Nzechukwu em dezembro de 2025 em luta fragmentada, perdeu para Martin Buday por decisão em julho de 2025 em combate em pé. Duas vitórias mais recentes foram por submissão no R1 na ONE Championship. O arco é de um grappler de elite ainda calibrando o MMA de stand-up, com desempenho oscilante quando a luta não vai para o chão. Em três lutas UFC, só uma venceu.',
        recent_fights: [
          { date: 'Dez 2025', opponent: 'Kennedy Nzechukwu', result: 'D', method: 'Empate', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Empate em luta fragmentada. Buchecha teve dificuldade de impor o jogo.' },
          { date: 'Jul 2025', opponent: 'Martin Buday', result: 'L', method: 'Decisão', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Derrota por decisão em luta majoritariamente em pé. Buday neutralizou o takedown.' },
          { date: 'Nov 2024', opponent: 'Amir Aliakbari', result: 'W', method: 'Submissão R1 (3:15)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Submissão no R1 na ONE Championship. Demonstração clara do poder no chão.' },
          { date: 'Ago 2023', opponent: 'Oumar Kane', result: 'L', method: 'Decisão', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Derrota por decisão contra Reug Reug. Luta competitiva.' },
          { date: 'Ago 2022', opponent: 'Kirill Grishenko', result: 'W', method: 'Submissão R1 (1:04)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Finalização relâmpago em 1 minuto. Receita de execução no chão.' },
        ],
        layoff_warning: null,
      },
      fighter2: {
        nome: 'Ryan Spann',
        color: 'blue',
        momentum_score: 6,
        momentum_label: 'Misto',
        momentum_trend: 'stable',
        momentum_note:
          'Última luta foi vitória por submissão no R1 sobre Łukasz Brzeski em julho de 2025 no UFC 318. Antes disso, KO sofrido contra Waldo Cortes-Acosta em março de 2025. Em seis lutas recentes, 3-3. Spann é o veterano testado com altos e baixos, mas sempre perigoso na finalização.',
        recent_fights: [
          { date: 'Jul 2025', opponent: 'Łukasz Brzeski', result: 'W', method: 'Submissão R1 (2:37)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Submissão em 2:37 do R1. Demonstração de que o jogo de chão dele funciona.' },
          { date: 'Mar 2025', opponent: 'Waldo Cortes-Acosta', result: 'L', method: 'KO R2', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'KO sofrido no R2 contra peso-pesado top 10. Queixo questionado.' },
          { date: 'Out 2024', opponent: 'Ovince Saint Preux', result: 'W', method: 'Submissão R1 (1:35)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Submissão em 1:35 sobre veterano. Padrão de finalização rápida.' },
          { date: 'Abr 2024', opponent: 'Bogdan Guskov', result: 'L', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Derrota por TKO no peso-meio-pesado. Antes da subida.' },
          { date: 'Ago 2023', opponent: 'Anthony Smith', result: 'L', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Derrota em split decision contra veterano. Luta competitiva.' },
        ],
        layoff_warning: null,
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Buchecha', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '1V-1D-1E', contra_top5: '0V-0D' },
      fighter2: { nome: 'Spann', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '2V-3D', contra_top5: '0V-2D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Nenhum oponente em comum. O calibre é diferente: Buchecha fez carreira MMA principalmente na ONE Championship contra veteranos da cena asiática, entrando recentemente na UFC contra nível médio. Spann tem 15 lutas UFC contra top 10 a top 15 do peso-meio-pesado, incluindo Anthony Smith, Marvin Vettori e Khalil Rountree Jr. A experiência UFC de Spann é superior em volume e variedade de adversários, mas isso não cruza com o domínio técnico de BJJ onde o gap é em favor oposto. Os dois construíram os números em contextos difíceis de comparar diretamente.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Vitórias por Submissão (%)', valueA: 80, valueB: 61, maxVal: 100, format: 'percent', note: 'Buchecha finaliza 80% das vitórias. Spann 61%. Ambos grapplers.' },
        { label: 'Vitórias por KO/TKO (%)', valueA: 20, valueB: 26, maxVal: 100, format: 'percent', note: 'Spann tem leve vantagem em poder de mão.' },
        { label: 'Total de Lutas Profissionais', valueA: 8, valueB: 34, maxVal: 40, format: 'integer', note: 'Spann tem 4 vezes mais experiência em MMA.' },
        { label: 'Alcance (cm)', valueA: 203, valueB: 201, maxVal: 210, format: 'integer', note: 'Alcance similar, Buchecha 2 centímetros a mais.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '35 anos', fighter2: '34 anos', note: 'Basicamente a mesma idade.' },
        { label: 'Altura', fighter1: '1,91m', fighter2: '1,96m', note: 'Spann 5 centímetros mais alto.' },
        { label: 'Envergadura', fighter1: '203cm', fighter2: '201cm', note: 'Buchecha 2 centímetros a mais.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'Checkmat / AKA / ATT', fighter2: 'Fortis MMA', note: null },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Jiu-Jitsu de Solo', advantage: 'fighter1', gap: 5, note: 'Buchecha é faixa-preta e 5x campeão mundial. Spann é faixa azul. Gap técnico máximo.' },
        { label: 'Striking em Pé', advantage: 'fighter2', gap: 3, note: 'Spann tem 34 lutas de experiência em stand-up. Buchecha ainda calibra o jogo em pé.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter1', gap: 1, note: 'Buchecha tem entradas de BJJ-wrestling. Spann defende historicamente bem mas o gap é mínimo aqui.' },
        { label: 'Defesa de Takedown', advantage: 'fighter2', gap: 2, note: 'Spann tem TDD consistente em 15 lutas UFC. Buchecha empurrou contra grapplers médios e não conseguiu TD contra Buday.' },
        { label: 'Cardio em 3 Rounds', advantage: 'fighter2', gap: 2, note: 'Spann tem mais rodagem de 3 rounds em MMA. Buchecha empatou contra Nzechukwu em luta que estendeu.' },
        { label: 'Experiência em Adversidade', advantage: 'fighter2', gap: 3, note: 'Spann tem 11 derrotas e voltou de cada uma. Buchecha ainda tem amostra pequena em adversidade MMA.' },
      ],
      summary:
        'Spann tem vantagem em 4 das 6 dimensões, todas ligadas a MMA específico. Buchecha tem o maior gap possível em BJJ puro. A luta decide onde acontece: no chão, Buchecha finaliza; em pé, Spann domina.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Buchecha', ko_tko: { count: 1, percent: 20 }, submission: { count: 4, percent: 80 }, decision: { count: 0, percent: 0 }, total_wins: 5 },
      fighter2: { nome: 'Spann', ko_tko: { count: 6, percent: 26 }, submission: { count: 14, percent: 61 }, decision: { count: 3, percent: 13 }, total_wins: 23 },
      insight:
        'Perfis convergentes em filosofia, divergentes em execução. Buchecha finaliza quase sempre por submissão, quatro das cinco vitórias no MMA terminaram no chão. Spann tem 14 submissões em 23 vitórias, também privilegia finalização mas distribui entre striking e grappling. Nenhum dos dois vai para decisão com frequência: só três vitórias de Spann foram por cartão em 23 totais, e Buchecha nunca venceu por decisão. A luta tem alta probabilidade de terminar antes do final, a questão é por qual método.',
    },

    previsao_final: {
      winner_name: 'Marcus Buchecha',
      winner_side: 'fighter1',
      predicted_method: 'Submissão R1-R2',
      confidence_score: 6,
      confidence_label: 'MÉDIA',
      explanation:
        'A análise aponta Buchecha pelo gap técnico de BJJ, que é o maior do card. Ele é cinco vezes campeão mundial de jiu-jitsu e Spann é faixa azul, essa é diferença estrutural no ground game. As quatro submissões de Buchecha no MMA foram no R1 cada uma, em 3:15, 1:04, e menos. Se conseguir levar Spann para o chão, ou aceitar a puxada de guarda em scramble, a finalização vem rápido. O caminho para Spann é manter em pé por 15 minutos, onde o striking dele tem vantagem contra a técnica ainda rudimentar de Buchecha em pé, comprovada nas derrotas para Buday e empate com Nzechukwu. A ressalva é que Spann tem TDD consistente e 34 lutas de experiência em adversidade, e Buchecha acabou de passar dois combates onde não conseguiu impor o chão. Se não conseguir levar agora também, a probabilidade pende para Spann. A convicção é 6 porque o gap de BJJ é absoluto se a luta vai para o chão, mas a capacidade de Buchecha de colocar no chão é o ponto de interrogação. Não é 7 porque Spann tem defesa de TD testada. Não é 5 porque se Buchecha colocar no chão, ele finaliza sem margem para Spann.',
      x_factor: {
        title: 'A primeira tentativa de takedown',
        description:
          'Se Buchecha conseguir um takedown nos primeiros 2 minutos ou aceitar a puxada de guarda via clinch na grade, ele encontra posição dominante e finaliza em menos de 5 minutos. Se Spann defender a primeira entrada limpa, a luta vira batalha de stand-up em que o veterano do Fortis MMA tem ferramenta mais refinada. Tudo se decide em qual terreno a luta se estabiliza no primeiro round.',
      },
      upset_alert: {
        title: 'Alerta de zebra: Spann vence em pé',
        description:
          'Spann tem 34 lutas de experiência, striking refinado em 3 rounds, e Buchecha acabou de mostrar que não consegue resolver adversidades quando a luta não vai ao chão: empate com Nzechukwu, derrota para Buday. Se Spann defender o primeiro takedown e manter distância, ele conecta em pé e pode finalizar no R2 como fez com Saint Preux e Brzeski, ou vencer por decisão em combate tático.',
      },
      probabilities: {
        fighter1: { nome: 'Buchecha', percent: 55 },
        fighter2: { nome: 'Spann', percent: 42 },
        draw: 3,
      },
      conviction: {
        thesis:
          'A tese é: Marcus Buchecha vence porque, primeiro, o gap técnico de BJJ entre os dois é o maior do card: Buchecha é cinco vezes campeão mundial de jiu-jitsu em faixa preta, Spann é faixa azul. Em termos de ground game, se a luta vai ao chão em posição neutra ou dominante para o brasileiro, a finalização vem em menos de cinco minutos, como aconteceu em quatro das cinco vitórias no MMA. Segundo, Spann é faixa azul mas já foi finalizado sete vezes na carreira profissional por grapplers muito menos técnicos que Buchecha, sinalizando que a defesa de BJJ dele tem limites mesmo contra oposição média. Terceiro, o tempo médio de combates de Buchecha no MMA é curto: 3:15, 1:04, 1:35 para Spann vencer, indicando que se o jogo de chão se estabelece, a luta tem tempo de vida curto. A ressalva é de contexto: Buchecha acabou de perder para Martin Buday por decisão em luta majoritariamente em pé, e empatou contra Nzechukwu em dezembro, então a capacidade de colocar o adversário no chão no MMA moderno ainda é falha. O caminho é Buchecha fechar clinch contra a grade nos primeiros 2 minutos, puxar guarda ou forçar takedown via abraço, e buscar passagem de guarda para montada ou costas no R1. Isso desmorona se Spann defender o primeiro clinch e obrigar Buchecha a trocar em distância média por três rounds.',
        conviction_score: 6,
        conviction_rationale:
          'Convicção 6 porque o gap técnico de BJJ é mensurável e absoluto, e as quatro submissões de Buchecha no MMA foram no R1 cada uma. Não é 7-8 porque Buchecha já demonstrou em duas das últimas três lutas que não consegue impor o chão consistentemente, e Spann tem TDD real. Não é 5 porque se a luta for ao chão, a diferença é tão grande que a finalização é quase certa.',
        conviction_breakers: [
          'Spann defende o primeiro takedown e obriga Buchecha a trocar em pé por três rounds',
          'Buchecha repete o padrão do Buday e não consegue nenhuma entrada limpa de clinch',
          'Spann conecta um contra-ataque limpo em uma tentativa de takedown de Buchecha',
          'O cardio do Buchecha cai no R3 e Spann ganha por volume em pé',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 42,
          key_scenario:
            'Spann defende o primeiro takedown de Buchecha nos primeiros 3 minutos, mantém distância usando jab e teep em distância média. Aproveita uma das entradas ansiosas de Buchecha para conectar cross ou joelhada no clinch. Alternativa: estende a luta para três rounds usando o cardio UFC e vence por decisão unânime, como quase fez contra Anthony Smith em agosto de 2023. Segunda alternativa: encaixa uma submissão própria em scramble, como fez com OSP no UFC 307 em 1:35.',
          required_conditions: [
            'Defender o primeiro takedown ou clinch na grade',
            'Manter distância média para ativar o striking de três rounds',
            'Não aceitar guarda de Buchecha em nenhum momento',
            'Estender a luta onde o cardio UFC de Spann é superior ao de Buchecha',
          ],
          historical_precedent: 'Spann contra Anthony Smith em agosto de 2023: estendeu a luta três rounds em batalha técnica e perdeu por split decision, mostrando que tem cardio UFC confiável. Buchecha empatou com Nzechukwu em dezembro em formato similar.',
        },
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Marcus Buchecha',
            odds: '-146',
            reasoning: 'A leitura aponta Buchecha pelo gap de BJJ que é o maior do card. Preço moderado consistente com convicção 6. Desmorona se Spann defender o primeiro takedown e obrigar troca em pé.',
          },
          {
            type: 'Método',
            pick: 'Buchecha por submissão',
            odds: '+175',
            reasoning: 'Quatro das cinco vitórias de Buchecha no MMA foram por submissão no R1. Se vence, submissão é o método praticamente garantido. Preço reflete valor real acima do moneyline direto.',
          },
          {
            type: 'Rounds',
            pick: 'Não passa de 1,5 round',
            odds: '+150',
            reasoning: 'Quatro das cinco vitórias de Buchecha foram antes do fim do R2. Spann tem duas submissões no R1 nas últimas três. Quando um dos dois encaixa, encaixa rápido.',
          },
        ],
        best_bet: {
          pick: 'Buchecha por submissão em +175',
          reasoning: 'A combinação mais eficiente. Se Buchecha vence, o método é submissão sem margem, e o preço de +175 oferece valor acima do moneyline -146.',
        },
      },
      key_stats: [
        { value: '5x', label: 'Títulos mundiais de BJJ de Buchecha', sublabel: 'Faixa-preta Checkmat, referência absoluta do peso-pesado em jiu-jitsu.' },
        { value: '4/5', label: 'Vitórias de Buchecha no MMA por submissão no R1', sublabel: 'Tempo médio de finalização: 1:52. Quando coloca no chão, acaba rápido.' },
        { value: '7', label: 'Submissões sofridas por Spann na carreira', sublabel: 'Defesa de BJJ tem limite, e Buchecha é o maior teste possível.' },
      ],
      odds: {
        fighter1_odds: '-146',
        fighter2_odds: '+114',
        fighter1_name: 'Buchecha',
        fighter2_name: 'Spann',
        source: 'bet365 e DraftKings em abril de 2026. Mercado apertado, Buchecha leve favorito.',
      },
      armadilha: {
        titulo: 'Armadilha: Buchecha por decisão',
        descricao:
          'O mercado paga Buchecha por decisão em torno de +1400 porque o combate pode estender. Mas Buchecha nunca venceu por decisão no MMA em cinco vitórias, e empatou ou perdeu quando a luta não vai ao chão. Apostar em Buchecha por decisão é apostar no cenário em que ele não finaliza, que historicamente é o cenário onde ele não vence. Se vai no Buchecha, vai na submissão. Se vai no Spann, vai no moneyline ou em finalização própria dele.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'buchecha-vs-spann');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
