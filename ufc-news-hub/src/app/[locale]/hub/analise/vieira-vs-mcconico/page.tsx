import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'vieira-vs-mcconico',
  evento_id: null,
  slug: 'vieira-vs-mcconico',
  titulo: 'Vieira vs McConico: O Caçador de Faixas-Pretas',
  subtitulo:
    'Rodolfo Vieira vem do head kick KO de Bo Nickal em novembro, mas continua sendo recordista de submissões por arm-triangle no peso-médio UFC. Eric McConico tem 10-4-1 de carreira, 1-2 no UFC, saindo de split decision apertada sobre Brundage.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,85m', envergadura: '190cm', idade: 35, academia: 'Brazilian Top Team' },
      fighter2: { altura: '1,85m', envergadura: '190cm', idade: 35, academia: 'Gracie Barra' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Submissão (arm-triangle) R1-R2',
    confidence: 'ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Rodolfo Vieira',
    apelido: 'Black Belt Hunter',
    record: '11-3-0',
    ranking: 'Sem ranking no top 15',
    ultimasLutas: [],
  },
  fighter2_info: {
    nome: 'Eric McConico',
    record: '10-4-1',
    ranking: 'Sem ranking no top 15',
    ultimasLutas: [],
  },
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  categoria_peso: 'Peso-Médio (185 lbs)',
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
      categoria_peso: 'Peso-Médio (185 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'O Caçador de Faixas-Pretas',
      tagline_sub: 'Vieira é recordista de arm-triangles no peso-médio UFC. McConico tem BJJ regional.',
      fighter1: {
        nome_completo: 'Rodolfo "Black Belt Hunter" Vieira',
        apelido: 'Black Belt Hunter',
        sobrenome: 'Vieira',
        record: '11-3-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Niterói, Brasil | 35 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/VIEIRA_RODOLFO_L_04-25.png?itok=6BzFd-Iw',
      },
      fighter2: {
        nome_completo: 'Eric McConico',
        apelido: '',
        sobrenome: 'McConico',
        record: '10-4-1',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Estados Unidos | 35 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-02/MCCONICO_ERIC_R_02-22.png?itok=Zk2grOg3',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'BJJ de Elite Encontra BJJ Regional',
      insight:
        'Rodolfo Vieira é 5 vezes campeão mundial de BJJ faixa-preta IBJJF, referência absoluta no peso-médio UFC em grappling. O recorde de quatro submissões por arm-triangle na história da divisão é dele. Eric McConico é faixa-preta de BJJ mas em calibre regional, com 1-2 no UFC e nenhuma finalização por submissão no octógono. O gap técnico no solo é o maior da prelim. A ressalva: Vieira saiu de um head kick KO recente de Bo Nickal no UFC 322, e retornos de KO exigem calibração. Se Vieira entrar cauteloso em pé, a luta pode estender pra três rounds onde o volume de McConico vira fator. Se Vieira conseguir levar pro chão, a finalização vem antes do fim do R2, como fez contra Petrosyan e Holmes.',
      tension: {
        truth_a: 'Vieira nocauteado pelo Bo Nickal há cinco meses em um chute rodado. A volta após KO na cabeça pede tempo de recuperação técnica em striking, e Vieira não é striker primário.',
        truth_b: 'Vieira continua sendo o maior grappler do peso-médio. Recorde de submissões por arm-triangle da divisão. A finalização sobre McConico em BJJ regional é matemática pura se conseguir colocar no chão.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Rodolfo Vieira',
        color: 'red',
        momentum_score: 5,
        momentum_label: 'Em Recuperação',
        momentum_trend: 'stable',
        momentum_note:
          'Vem do KO por head kick contra Bo Nickal em novembro de 2025 no UFC 322, tentativa de subida contra top 10 que não deu. Antes, venceu Tresean Gore por decisão unânime em agosto de 2025. O padrão da carreira é finalização por submissão quando consegue impor o chão, derrota quando a luta fica em pé.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Bo Nickal', result: 'L', method: 'KO (head kick) R3', opponent_rank: '#6 MW', quality_score: 5, quality_label: 'Excelente', note: 'Nocauteado por chute rodado no R3. Teste de subida contra top 10 que expôs o gap em pé.' },
          { date: 'Ago 2025', opponent: 'Tresean Gore', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Decisão em três rounds de controle posicional.' },
          { date: '2024', opponent: 'Armen Petrosyan', result: 'W', method: 'Submissão (arm-triangle) R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Arm-triangle recorrente. Padrão da carreira UFC.' },
        ],
        layoff_warning: '5 meses desde o KO sobre Bo Nickal. Retorno de head kick pede cautela em striking.',
      },
      fighter2: {
        nome: 'Eric McConico',
        color: 'blue',
        momentum_score: 5,
        momentum_label: 'Estável',
        momentum_trend: 'stable',
        momentum_note:
          'Conseguiu a primeira vitória UFC por split decision sobre Cody Brundage em agosto de 2025, após estrear com TKO perdido contra Nursulton Ruziboev em Seattle em fevereiro de 2025, em luta de curto aviso. UFC record 1-2. Carreira regional com distribuição de métodos mais equilibrada, mas nunca enfrentou grappler do calibre de Vieira.',
        recent_fights: [
          { date: 'Ago 2025', opponent: 'Cody Brundage', result: 'W', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Primeira vitória UFC, split decision. Mostrou cardio em três rounds.' },
          { date: 'Fev 2025', opponent: 'Nursulton Ruziboev', result: 'L', method: 'TKO R2 (0:33)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'TKO aos 33 segundos do R2 em debut de curto aviso em Seattle.' },
        ],
        layoff_warning: null,
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Vieira', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '2V-1D (últimas 3 UFC)', contra_top5: '0V-1D' },
      fighter2: { nome: 'McConico', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '1V-1D UFC', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Nenhum oponente em comum. Vieira enfrentou Bo Nickal, prospect top 10, e venceu vários veteranos por submissão. McConico tem só duas lutas UFC, ambas contra adversários fora do ranking. O gap de calibre é real: Vieira passou por testes de nível top-10, McConico ainda busca consolidação.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Submissões por 15 Min', valueA: 2.5, valueB: 0.3, maxVal: 3, format: 'decimal', note: 'Vieira ataca submissão de forma agressiva e constante.' },
        { label: 'Takedowns por 15 Min', valueA: 3.2, valueB: 1.1, maxVal: 5, format: 'decimal', note: 'Vieira busca takedown como caminho principal.' },
        { label: 'Defesa de Takedown (%)', valueA: 72, valueB: 48, maxVal: 100, format: 'percent', note: 'McConico vulnerável ao wrestling de Vieira.' },
        { label: 'Sig. Strikes por Minuto', valueA: 2.1, valueB: 3.4, maxVal: 6, format: 'decimal', note: 'McConico tem volume superior em pé. Único terreno com vantagem.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '35 anos', fighter2: '35 anos', note: 'Idade idêntica.' },
        { label: 'Altura', fighter1: '1,85m', fighter2: '1,85m', note: null },
        { label: 'Envergadura', fighter1: '190cm', fighter2: '190cm', note: 'Físico parecido.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'Brazilian Top Team', fighter2: 'Gracie Barra', note: null },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Jiu-Jitsu de Solo', advantage: 'fighter1', gap: 5, note: 'Vieira é 5x campeão mundial faixa-preta IBJJF. Gap técnico máximo.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter1', gap: 3, note: 'Vieira tem 3,2 takedowns/15 min e técnica refinada. McConico raramente inicia wrestling.' },
        { label: 'Striking em Pé', advantage: 'fighter2', gap: 2, note: 'McConico tem mais volume em pé, mas limitado tecnicamente.' },
        { label: 'Finalização no Chão', advantage: 'fighter1', gap: 5, note: 'Vieira tem 4 finalizações por arm-triangle só no UFC, recorde da divisão.' },
        { label: 'Defesa de Submissão', advantage: 'fighter1', gap: 2, note: 'Vieira nunca foi finalizado. McConico sem testes em nível elite.' },
        { label: 'Cardio em 3 Rounds', advantage: 'even', gap: 0, note: 'Ambos com cardio consistente em três rounds aos 35 anos.' },
      ],
      summary:
        'Vieira tem vantagem em 4 das 6 dimensões, todas as decisivas. McConico tem alguma vantagem em striking mas o gap de grappling inverte totalmente o resultado esperado.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Vieira', ko_tko: { count: 1, percent: 9 }, submission: { count: 9, percent: 82 }, decision: { count: 1, percent: 9 }, total_wins: 11 },
      fighter2: { nome: 'McConico', ko_tko: { count: 4, percent: 40 }, submission: { count: 3, percent: 30 }, decision: { count: 3, percent: 30 }, total_wins: 10 },
      insight:
        'Vieira finaliza 82 por cento das vitórias por submissão. McConico distribui entre KO, submissão e decisão, mais equilibrado mas sem especialidade definida. O padrão Vieira é o dominante no confronto.',
    },

    previsao_final: {
      winner_name: 'Rodolfo Vieira',
      winner_side: 'fighter1',
      predicted_method: 'Submissão (arm-triangle) R1-R2',
      confidence_score: 8,
      confidence_label: 'ALTA',
      explanation:
        'A análise aponta Vieira com convicção ALTA pelo gap de BJJ que é o maior da prelim. Vieira é 5 vezes campeão mundial faixa-preta IBJJF e recordista de arm-triangles no peso-médio UFC. McConico é faixa-preta de BJJ mas em calibre regional, sem nenhuma submissão própria no UFC. O caminho é Vieira conectar takedown no R1, passar guarda para norte-sul ou side control, encaixar arm-triangle como nas quatro finalizações anteriores. A única janela de McConico é manter a luta em pé por 15 minutos em padrão de volume, mas Vieira tenta 3,2 takedowns a cada 15 minutos e McConico defende 48 por cento. Não é 9 porque Vieira saiu de KO há 5 meses e pode entrar cauteloso.',
      x_factor: {
        title: 'A recuperação do KO sobre Bo Nickal',
        description:
          'Vieira tomou chute rodado de Bo Nickal em R3 em novembro. Retorno de head kick exige calibração técnica em pé. Se entrar muito cauteloso no R1, McConico ganha janela de volume.',
      },
      upset_alert: {
        title: 'McConico mantém em pé',
        description:
          'Se McConico defender os três primeiros takedowns e obrigar Vieira a trocar em pé, o jogo em pé do brasileiro é limitado. Em pé, McConico tem chance real de volume em três rounds.',
      },
      probabilities: {
        fighter1: { nome: 'Vieira', percent: 80 },
        fighter2: { nome: 'McConico', percent: 18 },
        draw: 2,
      },
      conviction: {
        thesis:
          'A tese é: Rodolfo Vieira vence porque, primeiro, o gap de BJJ entre os dois é o maior do card, com Vieira sendo 5 vezes campeão mundial faixa-preta IBJJF e recordista de arm-triangles no peso-médio UFC contra McConico faixa-preta de calibre regional. Segundo, o wrestling ofensivo de Vieira (3,2 takedowns/15 min) encontra a defesa fraca de McConico (48 por cento), criando alta probabilidade de levar ao chão cedo. Terceiro, quando chega no chão, Vieira executa padrão documentado de passagem para arm-triangle, já feito 4 vezes no UFC. O caminho é takedown no R1, passagem para side ou norte-sul, armbar ou arm-triangle antes do fim do R2. Desmorona se McConico defender 100 por cento dos takedowns ou se Vieira entrar muito cauteloso em pé por causa do KO recente.',
        conviction_score: 8,
        conviction_rationale:
          'Convicção 8 porque o gap de BJJ é mensurável e absoluto, Vieira tem padrão repetido de finalização que se encaixa no tipo de defesa que McConico oferece, e a vantagem física é neutra. Não é 9-10 porque o retorno de KO é variável real e pode mudar o comportamento de Vieira em pé no R1.',
        conviction_breakers: [
          'McConico defende os três primeiros takedowns e mantém em pé por 5+ minutos do R1',
          'Vieira entra cauteloso demais em striking por reflexo do KO de Nickal',
          'McConico encontra contra-ataque limpo em uma entrada precipitada de Vieira',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 18,
          key_scenario:
            'McConico mantém distância no R1 usando jab longo, sprawl em todas as entradas de Vieira, e trabalha volume em pé para ganhar no cartão. Alternativa: conecta um contra-golpe limpo em entrada precipitada do brasileiro, possivelmente uma joelhada no clinch quando Vieira tentar agarrar.',
          required_conditions: [
            'Defender 100 por cento das entradas de takedown nos primeiros 5 minutos',
            'Manter distância em pé e evitar clinch contra a grade',
            'Usar experiência regional para ler padrões repetitivos de Vieira',
          ],
        },
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Rodolfo Vieira',
            odds: '-300',
            reasoning: 'Preço alto mas justificado pelo gap técnico de BJJ. A análise aponta finalização antes do fim do R2 com alta probabilidade. Desmorona se McConico defender todos os takedowns.',
          },
          {
            type: 'Método',
            pick: 'Vieira por submissão',
            odds: '-200',
            reasoning: '82 por cento das vitórias de Vieira são por submissão, 4 por arm-triangle só no UFC. Se vence, submissão é o método quase certo.',
          },
        ],
        best_bet: {
          pick: 'Vieira por submissão em -200',
          reasoning: 'A aposta casa com a leitura de método. Moneyline direto tem valor limitado pelo preço alto, submissão específica oferece mesma tese com pagamento melhor.',
        },
      },
      key_stats: [
        { value: '5x', label: 'Títulos mundiais de BJJ faixa-preta IBJJF de Vieira', sublabel: 'Referência absoluta em grappling no peso-médio UFC.' },
        { value: '4', label: 'Submissões por arm-triangle de Vieira no UFC', sublabel: 'Recorde da divisão. Padrão repetitivo que McConico não tem como defender.' },
        { value: '48%', label: 'Defesa de takedown de McConico', sublabel: 'Vieira ataca com 3,2 takedowns/15 min. Matemática direta.' },
      ],
      odds: {
        fighter1_odds: '-300',
        fighter2_odds: '+240',
        fighter1_name: 'Vieira',
        fighter2_name: 'McConico',
        source: 'bet365 e DraftKings em abril de 2026. Vieira favorito claro pelo gap técnico.',
      },
      armadilha: {
        titulo: 'Armadilha: Vieira por KO/TKO',
        descricao:
          'O mercado paga Vieira por KO/TKO em torno de +600 porque a última luta UFC dele terminou com o KO famoso. Mas Vieira tem só 1 KO em 11 vitórias no MMA, e o padrão de finalização dele é 100 por cento grappling. Apostar em KO é apostar contra o que Vieira faz de verdade. Se vai nele, vai na submissão.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'vieira-vs-mcconico');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
