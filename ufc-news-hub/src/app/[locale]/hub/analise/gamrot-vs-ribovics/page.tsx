import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'gamrot-vs-ribovics',
  evento_id: null,
  slug: 'gamrot-vs-ribovics',
  titulo: 'Gamrot vs Ribovics: Wrestling Polonês Contra o Argentino do Chute Alto',
  subtitulo:
    'Mateusz Gamrot vem da primeira derrota por finalização da carreira, contra Charles Oliveira. Esteban Ribovics nocauteou Terrance McKinney com chute alto em 37 segundos. O wrestler vai testar o queixo do striker.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,73m', envergadura: '178cm', idade: 34, academia: 'WCA Fight Team, Polônia' },
      fighter2: { altura: '1,75m', envergadura: '180cm', idade: 30, academia: 'Pitbull Brothers Argentina' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão Unânime ou TKO R3',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Mateusz Gamrot',
    apelido: 'Gamer',
    record: '25-4-0 (1 NC)',
    ranking: '#8 Peso Leve',
    ultimasLutas: [
      { result: 'L', opponent: 'Charles Oliveira', method: 'Submissão R2 (face crank)', event: 'UFC Fight Night 261' },
      { result: 'W', opponent: 'Ludovit Klein', method: 'Decisão Unânime', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Rafael dos Anjos', method: 'TKO R1 (65s)', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Esteban Ribovics',
    apelido: 'El Gringo',
    record: '15-2-0',
    ranking: 'Não ranqueado',
    ultimasLutas: [
      { result: 'W', opponent: 'Elves Brener', method: 'Decisão Unânime', event: 'UFC ESPN 71' },
      { result: 'L', opponent: 'Nasrat Haqparast', method: 'Decisão Dividida', event: 'UFC Fight Night 253' },
      { result: 'W', opponent: 'Daniel Zellhuber', method: 'Decisão Dividida', event: 'UFC 306' },
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
      titulo_em_jogo: 'Prelims',
      tagline: 'Wrestling Contra Chute Alto',
      tagline_sub:
        'Gamrot vem da primeira finalização sofrida na carreira (Charles Oliveira). Ribovics nocauteou McKinney com chute alto em 37 segundos. Wrestler testa o queixo do striker.',
      fighter1: {
        nome_completo: 'Mateusz "Gamer" Gamrot',
        apelido: 'Gamer',
        sobrenome: 'Gamrot',
        record: '25-4-0 (1 NC)',
        ranking: '#8 Peso Leve',
        info_extra: 'Bydgoszcz, Polônia | 34 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-05%2FGAMROT_MATEUSZ_L_05-31.png%3Fitok%3DP1lVBWAJ',
      },
      fighter2: {
        nome_completo: 'Esteban "El Gringo" Ribovics',
        apelido: 'El Gringo',
        sobrenome: 'Ribovics',
        record: '15-2-0',
        ranking: 'Não ranqueado',
        info_extra: 'Salta, Argentina | 30 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2024-09%2FRIBOVICS_ESTEBAN_L_05-11.png%3Fitok%3DpeerZZfM',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'O Wrestling Manda Aqui',
      insight:
        'Mateusz Gamrot é o oitavo colocado do ranking do peso leve, vem de um histórico de wrestler implacável que finalizou Rafael dos Anjos em 65 segundos no início de 2025, e perdeu pela primeira vez por finalização na carreira em outubro contra Charles Oliveira (face crank no R2). Esteban Ribovics é o argentino que ganhou Fight of the Year do UFC em 2024 (decisão dividida sobre Daniel Zellhuber), nocauteou Terrance McKinney com chute alto em 37 segundos, e é praticamente impossível de ler em pé. Mas Ribovics tem zero defesa documentada contra wrestling de elite. Gamrot vai testar isso desde o primeiro toque de luvas. A pergunta não é se ele consegue derrubar, é se Ribovics aguenta três rounds em baixo do polonês.',
      tension: {
        truth_a:
          'Ribovics tem 7 nocautes na carreira e o estilo de striking mais imprevisível dos peso-leves não ranqueados. O chute alto de 37 segundos sobre McKinney mostrou que basta uma janela.',
        truth_b:
          'Gamrot é wrestler de carreira nacional polonesa, com 4,5 takedowns conectados por 15 minutos. Ribovics nunca enfrentou wrestler de top 10 do UFC. O salto de nível em wrestling defensivo é vertical.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Mateusz Gamrot',
        color: 'red',
        recent_fights: [
          {
            date: 'Out 2025',
            opponent: 'Charles Oliveira',
            result: 'L',
            method: 'Submissão R2 (face crank)',
            opponent_rank: '#3 LW',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'UFC Fight Night 261. Aceitou a luta de short notice contra ex-campeão. Primeira finalização sofrida na carreira inteira. Apesar da derrota, mostrou que compete na elite.',
          },
          {
            date: 'Mai 2025',
            opponent: 'Ludovit Klein',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Vitória controlada usando o wrestling implacável. Klein nunca conseguiu impor o jogo de pé.',
          },
          {
            date: 'Mar 2025',
            opponent: 'Rafael dos Anjos',
            result: 'W',
            method: 'TKO R1 (65 segundos)',
            opponent_rank: '#10 LW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Finalização brutal em 65 segundos. Estabeleceu o recorde de finalizações rápidas dos peso-leves. Statement absoluto.',
          },
          {
            date: 'Set 2024',
            opponent: 'Beneil Dariush',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: '#8 LW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Vitória técnica impondo o ritmo de wrestling sobre um veterano BJJ. Subiu definitivamente para o top 10.',
          },
          {
            date: 'Mar 2024',
            opponent: 'Rafael Fiziev',
            result: 'W',
            method: 'Decisão Dividida',
            opponent_rank: '#9 LW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Vitória polêmica sobre um striker explosivo. Wrestling neutralizou os melhores ataques do Fiziev.',
          },
        ],
        momentum_score: 7,
        momentum_label: 'Em Alta (com derrota recente)',
        momentum_trend: 'stable',
        momentum_note:
          'Gamrot tinha quatro vitórias seguidas antes da derrota para Charles Oliveira em outubro. A primeira finalização sofrida da carreira inteira foi um sinal de alerta, mas o adversário era ex-campeão e o Gamrot aceitou de short notice. O padrão geral continua: wrestler implacável que vence quando consegue impor o jogo dele, e vai impor contra um striker puro como Ribovics que nunca enfrentou esse perfil.',
      },
      fighter2: {
        nome: 'Esteban Ribovics',
        color: 'blue',
        recent_fights: [
          {
            date: 'Ago 2025',
            opponent: 'Elves Brener',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC ESPN 71. Fight of the Night. Voltou às vitórias depois da decisão polêmica perdida.',
          },
          {
            date: 'Mar 2025',
            opponent: 'Nasrat Haqparast',
            result: 'L',
            method: 'Decisão Dividida',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC Fight Night 253. Decisão polêmica que 9 de 11 mídias deram para o Ribovics. Considerada um dos roubos do ano.',
          },
          {
            date: 'Set 2024',
            opponent: 'Daniel Zellhuber',
            result: 'W',
            method: 'Decisão Dividida',
            opponent_rank: 'N/R',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC 306. Vitória que o UFC selecionou como Fight of the Year de 2024. Guerra de três rounds que o Ribovics venceu nos cards.',
          },
          {
            date: 'Mai 2024',
            opponent: 'Terrance McKinney',
            result: 'W',
            method: 'KO R1 (chute alto, 37 segundos)',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'O nocaute mais bonito da carreira. Chute alto de 37 segundos virou highlight permanente do UFC.',
          },
          {
            date: 'Out 2023',
            opponent: 'Loik Radzhabov',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Estreia no UFC com vitória controlada. Mostrou maturidade técnica antes da fase explosiva.',
          },
        ],
        momentum_score: 7,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note:
          'Ribovics está 4-1 nas últimas cinco lutas, sendo a única derrota uma decisão polêmica que praticamente toda a mídia deu para ele. A vitória sobre Zellhuber rendeu Fight of the Year, e o KO sobre McKinney foi um dos mais memoráveis do ano. É a versão mais perigosa da carreira dele aos 30 anos. Mas o cardápio dele é majoritariamente striker contra striker. Nunca enfrentou wrestler de elite.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Mateusz Gamrot',
        media_oponentes: 4,
        media_oponentes_label: 'Muito Bom',
        aproveitamento: '8V-4D (67%)',
        contra_top5: '0V-1D',
      },
      fighter2: {
        nome: 'Esteban Ribovics',
        media_oponentes: 2,
        media_oponentes_label: 'Médio',
        aproveitamento: '4V-1D (80%)',
        contra_top5: '0V-0D',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Sem oponentes em comum. Gamrot enfrentou top 10 consistentemente (Oliveira, RDA, Dariush, Fiziev, Beneil). Ribovics nunca enfrentou top 15. O salto de nível para o argentino é vertical, especialmente em wrestling defensivo que ele simplesmente não foi testado.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.0, valueB: 5.5, maxVal: 7, format: 'decimal', note: 'Ribovics tem volume ofensivo claramente superior em pé' },
        { label: 'Precisão de Strikes (%)', valueA: 47, valueB: 51, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.5, valueB: 4.5, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 60, valueB: 53, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 4.5, valueB: 0.3, maxVal: 6, format: 'decimal', note: 'Disparidade gigantesca em wrestling ofensivo' },
        { label: 'Precisão de Takedown (%)', valueA: 50, valueB: 33, maxVal: 100, format: 'percent' },
        { label: 'Defesa de Takedown (%)', valueA: 78, valueB: 50, maxVal: 100, format: 'percent', note: 'A TDD do Ribovics é o ponto fraco mais documentado' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '34 anos', fighter2: '30 anos' },
        { label: 'Altura', fighter1: '1,73m', fighter2: '1,75m' },
        { label: 'Envergadura', fighter1: '178cm', fighter2: '180cm' },
        { label: 'Stance', fighter1: 'Switch', fighter2: 'Orthodox' },
        { label: 'Academia', fighter1: 'WCA Fight Team', fighter2: 'Pitbull Brothers Argentina' },
        { label: 'Experiência UFC', fighter1: '12 lutas', fighter2: '5 lutas' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter2',
          gap: 3,
          note: 'Ribovics é claramente mais perigoso em pé. Volume, criatividade e o chute alto que apagou McKinney em 37 segundos.',
        },
        {
          label: 'Striking em Curta Distância',
          advantage: 'fighter1',
          gap: 1,
          note: 'No clinch e na trocação curta, Gamrot tem o boxe sujo polonês. Não é arma principal, mas é eficiente.',
        },
        {
          label: 'Wrestling Ofensivo',
          advantage: 'fighter1',
          gap: 5,
          note: 'Background nacional polonês de wrestling. 4,5 takedowns por 15 minutos. Disparidade absoluta sobre Ribovics.',
        },
        {
          label: 'Defesa de Wrestling',
          advantage: 'fighter1',
          gap: 4,
          note: 'TDD do Gamrot é 78 por cento. Ribovics está em 50 por cento e nunca enfrentou wrestler de elite. Quebra estrutural.',
        },
        {
          label: 'Cardio (3 rounds)',
          advantage: 'fighter1',
          gap: 1,
          note: 'Os dois têm cardio sólido. Gamrot já foi 5 rounds em main event, Ribovics nunca passou de 3.',
        },
        {
          label: 'Resiliência (após derrota recente)',
          advantage: 'fighter1',
          gap: 1,
          note: 'Gamrot vem da primeira finalização sofrida (Oliveira). Ribovics vem de uma vitória após a decisão polêmica perdida. Diferença pequena.',
        },
      ],
      summary:
        'Gamrot vence se conseguir impor o wrestling nos primeiros minutos do R1, levar Ribovics ao chão e administrar com top control. Ribovics vence se conseguir defender os primeiros takedowns e impor o jogo em pé, onde é claramente superior. A pergunta não é estilo, é se a TDD de 50 por cento do Ribovics aguenta 4,5 takedowns por 15 minutos do polonês.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Mateusz Gamrot',
        ko_tko: { count: 8, percent: 32 },
        submission: { count: 5, percent: 20 },
        decision: { count: 12, percent: 48 },
        total_wins: 25,
      },
      fighter2: {
        nome: 'Esteban Ribovics',
        ko_tko: { count: 7, percent: 47 },
        submission: { count: 5, percent: 33 },
        decision: { count: 3, percent: 20 },
        total_wins: 15,
      },
      insight:
        'Gamrot é o lutador completo: 56 por cento de finalizações distribuídas entre KO e submissão, 48 por cento por decisão. Ribovics tem 80 por cento de finalizações na carreira (47 por cento KO, 33 por cento submissão), apenas 3 decisões em 15 vitórias. Ribovics busca o finish ativo. Gamrot deixa acontecer.',
    },

    previsao_final: {
      winner_name: 'Mateusz Gamrot',
      winner_side: 'fighter1',
      predicted_method: 'Decisão Unânime ou TKO R3 (ground-and-pound)',
      confidence_score: 7,
      confidence_label: 'MÉDIA-ALTA',
      explanation:
        'Esta luta tem uma das diferenças estruturais mais claras do card. Gamrot é wrestler de background nacional polonês com 4,5 takedowns por 15 minutos e 78 por cento de defesa de takedown. Ribovics tem 50 por cento de TDD e nunca enfrentou wrestler de elite na carreira. A matemática é simples: Gamrot vai entrar para a queda desde o primeiro segundo, e Ribovics não tem ferramenta defensiva documentada. O risco real é o poder de Ribovics em pé, especificamente o chute alto de 37 segundos que apagou McKinney. Se Gamrot demorar para fechar a distância, pode comer um chute mágico. Mas o cenário mais provável é wrestling impondo controle por três rounds.',
      x_factor: {
        title: 'Os Primeiros 60 Segundos',
        description:
          'Gamrot precisa entrar para a queda nos primeiros 60 segundos do R1, antes de Ribovics encontrar o ritmo do striking. Se levar Ribovics ao chão na primeira tentativa, a luta vira controle dominante. Se errar a primeira queda e ficar em pé com o argentino, o cenário muda completamente.',
      },
      upset_alert: {
        title: 'Ribovics Por Chute Mágico',
        description:
          'O chute alto de 37 segundos sobre McKinney não foi sorte. É uma arma documentada do estilo do Ribovics. Se Gamrot expor o queixo entrando para queda no primeiro shot, o argentino tem o timing para conectar e finalizar tudo antes do round dois.',
      },
      probabilities: {
        fighter1: { nome: 'Gamrot', percent: 70 },
        fighter2: { nome: 'Ribovics', percent: 28 },
        draw: 2,
      },
      odds: {
        fighter1_odds: '-200',
        fighter2_odds: '+170',
        fighter1_name: 'Mateusz Gamrot',
        fighter2_name: 'Esteban Ribovics',
        source: 'Média de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Mateusz Gamrot',
            odds: '-200',
            reasoning:
              'Linha justa para a disparidade estrutural de wrestling. Não é grande valor, mas é a aposta correta. A vantagem técnica em wrestling é gritante.',
          },
          {
            type: 'Método',
            pick: 'Gamrot por Decisão',
            odds: '+110',
            reasoning:
              'O cenário mais provável é wrestling controlando três rounds inteiros. 48 por cento das vitórias do Gamrot são por decisão. O método mais coerente com a tese.',
          },
          {
            type: 'Como termina',
            pick: 'A luta vai à decisão',
            odds: '-105',
            reasoning:
              'Gamrot raramente finaliza por wrestling (o KO sobre RDA foi exceção rápida). O cenário mais provável é três rounds de controle e decisão unânime nos cards.',
          },
          {
            type: 'Total Strikes',
            pick: 'Gamrot menos de 60 sig strikes',
            odds: '+105',
            reasoning:
              'Quando Gamrot vence por wrestling, o volume de strikes em pé fica baixo. O foco é controle, não volume. Vale como prop específica.',
          },
        ],
        best_bet: {
          pick: 'Gamrot por Decisão a +110',
          reasoning:
            'A combinação certa de probabilidade alta e retorno positivo. Cenário mais provável é três rounds de wrestling dominante terminando nos cards dos juízes.',
        },
      },
      key_stats: [
        {
          value: '4,5',
          label: 'takedowns conectados pelo Gamrot por 15 minutos de luta',
          sublabel: 'Top 5 da divisão dos peso-leves em wrestling ofensivo',
        },
        {
          value: '50%',
          label: 'a defesa de takedown do Ribovics, segundo o histórico recente',
          sublabel: 'O ponto fraco mais documentado do estilo dele',
        },
      ],
      armadilha: {
        titulo: 'Gamrot por finalização',
        descricao:
          'O mercado paga bem em Gamrot por finalização porque o KO de 65 segundos sobre RDA gerou hype. Mas Gamrot é 32 por cento por KO/TKO ao longo da carreira inteira (8 em 25), e raramente finaliza em wrestling top control. O cenário mais provável é decisão, não nocaute.',
      },
      conviction: {
        thesis:
          'A tese é: Mateusz Gamrot vence por uma diferença estrutural de wrestling tão gritante que dispensa argumento contrário. Primeiro, Gamrot tem 4,5 takedowns conectados por 15 minutos de luta (top 5 da divisão dos peso-leves) e background de wrestling nacional polonês desde os 10 anos de idade. Segundo, Ribovics tem 50 por cento de defesa de takedown e nunca enfrentou um wrestler de elite na carreira inteira de 17 lutas profissionais. Terceiro, Gamrot acabou de finalizar Rafael dos Anjos (top 10) em 65 segundos por TKO, mostrando que ainda está em forma técnica máxima apesar da derrota recente para Charles Oliveira por finalização. O caminho é Gamrot entrar para a queda nos primeiros 60 segundos do R1, levar Ribovics ao chão, e administrar com top control e ground-and-pound por três rounds inteiros até a decisão. Isso desmorona apenas se Gamrot expor o queixo na primeira entrada e comer o chute alto que Ribovics usou para apagar McKinney em 37 segundos.',
        conviction_score: 7,
        conviction_rationale:
          'Convicção 7 porque a disparidade estrutural de wrestling é tão grande que três pilares apontam todos para o mesmo lado: vantagem ofensiva absoluta em quedas, vantagem defensiva absoluta em sprawl, vantagem de experiência contra elite. Não é convicção 8 porque o chute alto do Ribovics é uma arma documentada que pode anular toda a tese em 30 segundos. Não é 6 porque a magnitude da diferença em wrestling é tão grande que justifica o nível extra.',
        conviction_breakers: [
          'Se Ribovics defender as primeiras três tentativas de takedown do Gamrot, a luta vira em pé onde o argentino é claramente superior.',
          'Se Gamrot entrar para a queda com o queixo exposto e Ribovics conectar um joelho voador ou chute alto na entrada, o nocaute mágico acontece em menos de um round.',
          'Se a derrota recente para Oliveira tiver afetado psicologicamente o Gamrot a ponto de hesitar nas primeiras quedas, ele perde tempo precioso e o argentino encontra ritmo.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 28,
          key_scenario:
            'Ribovics defende a primeira tentativa de takedown do Gamrot com sprawl técnico. Mantém distância média com jab e movimentação. Quando Gamrot tenta o segundo shot, Ribovics conecta um chute alto giratório ou um joelho voador na entrada. O queixo do polonês cede ao impacto. KO antes do R2.',
          required_conditions: [
            'Defender as primeiras duas ou três tentativas de takedown do Gamrot',
            'Manter a luta em pé na média distância onde o argentino é superior',
            'Conectar um chute alto ou joelho voador antes do R2',
            'Que o queixo do Gamrot ceda a um impacto único de poder',
          ],
          historical_precedent:
            'Esteban Ribovics vs Terrance McKinney (UFC, maio 2024): chute alto de 37 segundos. Exatamente o tipo de finalização que pode acontecer aqui se Gamrot não impor o wrestling rápido.',
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'gamrot-vs-ribovics');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
