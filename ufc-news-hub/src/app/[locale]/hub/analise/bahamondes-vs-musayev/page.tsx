'use client';
import type { Lang } from '@/lib/i18n-labels';
import { useLocale } from 'next-intl';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';
const analisePT: PrelimsAnalise = {
  // ===========================
  // Base Analise fields
  // ===========================
  id: 'bahamondes-vs-musayev',
  evento_id: null,
  slug: 'bahamondes-vs-musayev',
  titulo: 'Bahamondes vs Musayev: Nocaute ou Nada',
  subtitulo: 'Dois finalizadores brutais que somam 29 KOs em 39 vitorias se encontram em Seattle',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,91m', envergadura: '192cm', idade: 28, academia: 'Valle Flow Striking, Santiago' },
      fighter2: { altura: '1,78m', envergadura: '183cm', idade: 36, academia: 'Baku, Azerbaijao' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'KO/TKO R1-R2',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Ignacio Bahamondes',
    record: '17-6-0',
    ultimasLutas: [
      { result: 'L', opponent: 'Rafael Fiziev', method: 'Decisao Unanime', event: 'UFC on ABC 8' },
      { result: 'W', opponent: 'Jalin Turner', method: 'Sub R1 (triangulo)', event: 'UFC 313' },
      { result: 'W', opponent: 'Manuel Torres', method: 'TKO R1', event: 'UFC 306' },
    ],
  },
  fighter2_info: {
    nome: 'Tofiq Musayev',
    record: '22-6-0',
    ultimasLutas: [
      { result: 'L', opponent: 'Myktybek Orolbai', method: 'Sub R1 (kimura)', event: 'UFC on ABC 8' },
    ],
  },
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso-Leve (155 lbs)',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'prelims',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  // ===========================
  // PrelimsAnalysisData (6 Sections)
  // ===========================
  prelims_analysis: {
    // ── Section 1: Hero ──
    hero: {
      evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
      evento_data: '28 de Marco, 2026',
      categoria_peso: 'Peso-Leve (155 lbs)',
      num_rounds: 3,
      is_titulo: false,
      fighter1: {
        nome: 'Bahamondes',
        record: '17-6-0',
        ranking: 'N/R Peso-Leve',
      },
      fighter2: {
        nome: 'Musayev',
        record: '22-6-0',
        ranking: 'N/R Peso-Leve',
      },
    },
    // ── Section 2: Comparacao Estatistica ──
    comparacao_estatistica: {
      stats: [
        {
          label: 'Sig. Strikes por Minuto',
          valueA: 4.19,
          valueB: 3.42,
          maxVal: 7,
          format: 'decimal',
          note: 'Bahamondes tem volume superior de strikes significativos por minuto. Ambos sao agressivos em pe, mas Bahamondes mantem ritmo mais constante ao longo dos rounds.',
        },
        {
          label: 'Precisao de Strikes (%)',
          valueA: 47,
          valueB: 48,
          maxVal: 100,
          format: 'percent',
          note: 'Precisao praticamente identica. Nenhum dos dois e um sniper, mas ambos conectam golpes pesados quando acertam.',
        },
        {
          label: 'Strikes Absorvidos/Min',
          valueA: 3.85,
          valueB: 5.14,
          maxVal: 7,
          format: 'decimal',
          reverseWinner: true,
          note: 'Musayev absorveu um volume enorme de strikes na sua unica luta no UFC contra Orolbai. Bahamondes tambem nao e o mais defensivo, mas absorve menos proporcionalmente.',
        },
        {
          label: 'Defesa de Strikes (%)',
          valueA: 52,
          valueB: 40,
          maxVal: 100,
          format: 'percent',
          note: 'Bahamondes tem defesa significativamente superior. Musayev com apenas 40% mostrou vulnerabilidade defensiva preocupante na sua estreia no UFC.',
        },
        {
          label: 'Takedowns por 15 Min',
          valueA: 0.46,
          valueB: 0.00,
          maxVal: 4,
          format: 'decimal',
          note: 'Nenhum dos dois e grappler ofensivo. Bahamondes tenta quedas esporadicamente, mas esta luta sera resolvida primariamente em pe.',
        },
        {
          label: 'Precisao de Takedown (%)',
          valueA: 50,
          valueB: 0,
          maxVal: 100,
          format: 'percent',
          note: 'Bahamondes converte metade das suas tentativas quando decide ir ao chao. Musayev nao tentou nenhum takedown na sua luta no UFC.',
        },
        {
          label: 'Defesa de Takedown (%)',
          valueA: 73,
          valueB: 50,
          maxVal: 100,
          format: 'percent',
          note: 'Bahamondes tem defesa de queda decente com 73%. Musayev com 50% e mais vulneravel se levado ao chao, como ficou evidente na derrota por kimura contra Orolbai.',
        },
      ],
      tale_of_tape: [
        {
          label: 'Idade',
          fighter1: '28 anos',
          fighter2: '36 anos',
          note: 'Diferenca de 8 anos. Bahamondes esta no auge fisico enquanto Musayev, aos 36, precisa provar que ainda mantem a explosividade que o tornou campeao do Grand Prix do Rizin.',
        },
        {
          label: 'Altura',
          fighter1: '1,91m (6\'3")',
          fighter2: '1,78m (5\'10")',
          note: 'Vantagem enorme de 13 centimetros para Bahamondes. Para um peso-leve, 1,91m e gigantesco e dificulta muito a entrada de Musayev.',
        },
        {
          label: 'Envergadura',
          fighter1: '192cm (75.5")',
          fighter2: '183cm (72")',
          note: 'Quase 10cm de envergadura a mais para Bahamondes. Ele pode manter Musayev na distancia com jabs e chutes longos, forçando o azerbaijano a cruzar uma zona de perigo para conectar.',
        },
        {
          label: 'Stance',
          fighter1: 'Ortodoxa',
          fighter2: 'Ortodoxa',
          note: 'Ambos ortodoxos. Luta espelhada sem vantagem angular.',
        },
        {
          label: 'Academia',
          fighter1: 'Valle Flow Striking, Santiago',
          fighter2: 'Baku, Azerbaijao',
          note: 'Bahamondes treina com base no Chile com foco em striking. Musayev vem do sistema azerbaijano com base em artes marciais tradicionais (karate, pankration, kung-fu).',
        },
      ],
    },
    // ── Section 3: Historico de Lutas ──
    historico_lutas: {
      fighter1: {
        nome: 'Bahamondes',
        recent_fights: [
          {
            date: 'Jun 2025',
            opponent: 'Rafael Fiziev',
            result: 'L',
            method: 'Decisao Unanime',
            opponent_rank: '#10 LW',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'Enfrentou um dos melhores strikers da divisao e perdeu por decisao. Mostrou que pertence ao nível, mas nao conseguiu superar a tecnica de Fiziev em tres rounds.',
          },
          {
            date: 'Mar 2025',
            opponent: 'Jalin Turner',
            result: 'W',
            method: 'Sub R1 (triangulo)',
            opponent_rank: '#15 LW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Surpreendeu finalizando Turner com triangulo no primeiro round. Terceiro bonus de Performance da Noite consecutivo, mostrando versatilidade alem do striking.',
          },
          {
            date: 'Set 2024',
            opponent: 'Manuel Torres',
            result: 'W',
            method: 'TKO R1',
            opponent_rank: 'N/R LW',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Nocaute devastador no primeiro round contra o mexicano. Segundo bonus de Performance da Noite consecutivo.',
          },
          {
            date: 'Abr 2024',
            opponent: 'Christos Giagos',
            result: 'W',
            method: 'KO R1 (head kick)',
            opponent_rank: 'N/R LW',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Head kick brutal que viralizou. Primeiro dos tres bonus de Performance da Noite consecutivos que construiram seu hype.',
          },
          {
            date: 'Ago 2023',
            opponent: 'Ludovit Klein',
            result: 'L',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R LW',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Derrota frustrante por decisao. Mostrou que quando nao consegue a finalizacao rapida, pode ter dificuldade em lutas que vao a distancia.',
          },
        ],
      },
      fighter2: {
        nome: 'Musayev',
        recent_fights: [
          {
            date: 'Jun 2025',
            opponent: 'Myktybek Orolbai',
            result: 'L',
            method: 'Sub R1 (kimura)',
            opponent_rank: 'N/R LW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Estreia no UFC terminou em derrota rapida por kimura no primeiro round. Expôs fragilidade no grappling defensivo que preocupa.',
          },
          {
            date: 'Jul 2022',
            opponent: 'Sidney Outlaw',
            result: 'W',
            method: 'KO R1 (27 segundos)',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Nocaute relampago em 27 segundos no Bellator. O tipo de poder explosivo que o tornou famoso nas organizacoes asiaticas.',
          },
          {
            date: 'Dez 2021',
            opponent: 'Roberto de Souza',
            result: 'L',
            method: 'Sub R1 (triangulo)',
            opponent_rank: 'Campeao Rizin LW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Derrota por triangulo na luta pelo titulo do Rizin peso-leve. Segundo padrao de vulnerabilidade a submissoes.',
          },
          {
            date: 'Dez 2019',
            opponent: 'Patricky Freire',
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: 'Desafiante Bellator LW',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Vitoria historica na final do Grand Prix do Rizin contra veterano do Bellator. Lutou com a mao quebrada no segundo round e ainda venceu nos scorecards.',
          },
          {
            date: 'Set 2019',
            opponent: 'Johnny Case',
            result: 'W',
            method: 'TKO R1',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Semifinal do Grand Prix do Rizin. Derrubou Case no inicio do round e finalizou com strikes no chao.',
          },
        ],
      },
    },
    // ── Section 4: Perfil de Habilidades ──
    perfil_habilidades: {
      skills: [
        {
          label: 'Striking em Pe',
          valueA: 78,
          valueB: 72,
          labelA: 'Muito Bom',
          labelB: 'Bom',
          advantage: 'fighter1',
          advantage_note: 'Bahamondes combina alcance enorme com chutes de longa distancia letais, incluindo head kicks que ja viralizaram. Musayev tem poder de nocaute puro nas maos, mas precisa entrar na distancia curta para ser efetivo, o que e dificil contra alguem de 1,91m.',
        },
        {
          label: 'Poder de Nocaute',
          valueA: 82,
          valueB: 88,
          labelA: 'Muito Bom',
          labelB: 'Muito Bom',
          advantage: 'fighter2',
          advantage_note: 'Musayev tem 18 KOs em 22 vitorias, uma taxa absurda de 82% de nocaute. Bahamondes tem 11 KOs em 17 vitorias (65%). Ambos sao perigosos, mas Musayev carrega poder de outra dimensao nas maos.',
        },
        {
          label: 'Grappling Defensivo',
          valueA: 68,
          valueB: 38,
          labelA: 'Bom',
          labelB: 'Medio',
          advantage: 'fighter1',
          advantage_note: 'Bahamondes tem 73% de defesa de takedown e ja mostrou capacidade de submeter oponentes (triangulo em Turner). Musayev foi finalizado por kimura (Orolbai) e triangulo (De Souza), revelando fragilidade grave no chao.',
        },
        {
          label: 'Cardio e Ritmo',
          valueA: 62,
          valueB: 45,
          labelA: 'Bom',
          labelB: 'Medio',
          advantage: 'fighter1',
          advantage_note: 'Bahamondes consegue manter ritmo por tres rounds, como mostrou contra Fiziev. Musayev e um lutador de explosao inicial: 18 dos seus 22 nocautes foram no primeiro round. Se a luta se estender, o ritmo cai.',
        },
        {
          label: 'Gestao de Distancia',
          valueA: 75,
          valueB: 50,
          labelA: 'Muito Bom',
          labelB: 'Medio',
          advantage: 'fighter1',
          advantage_note: 'Com 13cm de vantagem de altura e quase 10cm de envergadura, Bahamondes pode controlar a distancia com jabs e chutes longos. Musayev precisa fechar essa distancia para ser efetivo, e isso e a chave da luta.',
        },
        {
          label: 'Experiencia em Alto Nivel',
          valueA: 65,
          valueB: 60,
          labelA: 'Bom',
          labelB: 'Bom',
          advantage: 'even',
          advantage_note: 'Bahamondes tem 9 lutas no UFC (6-3) e enfrentou Fiziev e Turner. Musayev foi campeao do Grand Prix do Rizin e lutou no Bellator, mas tem apenas uma luta no UFC (derrota). Experiencias diferentes mas ambos testados em nivel competitivo.',
        },
      ],
      insight: 'A luta se resume a uma questao: Musayev consegue fechar a distancia contra o alcance gigantesco de Bahamondes? Se sim, o poder azerbaijano pode acabar com qualquer um. Se nao, Bahamondes vai desmontá-lo com chutes e golpes longos. O grappling e o coringa: Bahamondes pode surpreender com submissoes, enquanto Musayev foi finalizado duas vezes na carreira e mostrou fragilidade clara no chao.',
    },
    // ── Section 5: Distribuicao de Vitorias ──
    distribuicao_vitorias: {
      fighter1: {
        nome: 'Bahamondes',
        ko_tko: { count: 11, percent: 65 },
        submission: { count: 2, percent: 12 },
        decision: { count: 4, percent: 23 },
        total_wins: 17,
      },
      fighter2: {
        nome: 'Musayev',
        ko_tko: { count: 18, percent: 82 },
        submission: { count: 2, percent: 9 },
        decision: { count: 2, percent: 9 },
        total_wins: 22,
      },
      insight: 'Dois finalizadores natos que raramente deixam a luta ir para os juizes. Bahamondes tem 65% de vitorias por KO/TKO e recentemente adicionou a submissao ao repertorio (triangulo em Turner). Musayev e ainda mais explosivo: 82% das suas 22 vitorias terminaram em nocaute, com apenas 2 decisoes na carreira inteira. A diferenca e que Bahamondes mostrou capacidade de ir a distancia contra Fiziev, enquanto Musayev e quase exclusivamente um lutador do primeiro round. Se nenhum dos dois nocautear o outro nos primeiros minutos, a luta favorece fortemente o chileno.',
    },
    // ── Section 6: Previsao Final ──
    previsao_final: {
      winner_name: 'Bahamondes',
      winner_side: 'fighter1',
      predicted_method: 'TKO R2 ou Decisao Unanime',
      confidence_score: 6,
      confidence_label: 'MEDIA',
      explanation: 'Bahamondes entra como favorito nas casas de apostas (em torno de -200 a -270) e as razoes sao claras. A vantagem fisica e enorme: 13cm de altura e quase 10cm de envergadura criam um problema estrutural para Musayev, que precisa entrar na distancia curta para usar seu poder de nocaute. Bahamondes tambem esta no auge aos 28 anos, vem de tres finalizacoes no primeiro round antes da derrota para Fiziev, e tem quatro bonus de Performance da Noite nas costas. Musayev, aos 36 anos e vindo de derrota por submissao na estreia no UFC, precisa provar que pertence a este nivel. O cenario mais provavel: Bahamondes controla a distancia no primeiro round com chutes e jabs longos, e no segundo round encontra a abertura para um TKO quando Musayev comeca a forcar a entrada de forma previsivel. Se Musayev sobreviver os dois primeiros rounds, a luta provavelmente vai para decisao com Bahamondes dominando os scorecards pelo volume.',
      x_factor: {
        title: 'O poder de nocaute de Musayev nos primeiros 3 minutos',
        description: 'Musayev tem 18 nocautes na carreira e a maioria aconteceu no primeiro round. Se ele conectar um golpe limpo nos primeiros minutos, nada mais importa. Bahamondes ja foi nocauteado e nao e conhecido pela defesa impenetravel. Uma unica troca na distancia curta pode virar toda a logica da luta.',
      },
      upset_alert: {
        title: 'Musayev em modo Grand Prix',
        description: 'Musayev conquistou o Grand Prix do Rizin vencendo tres lutas em uma noite, incluindo a final com a mao quebrada. Quando esta 100% motivado e com as costas na parede (como agora, precisando de sua primeira vitoria no UFC), ele e capaz de performances extraordinarias. Se ele entrar determinado a trocar desde o primeiro segundo e nao deixar Bahamondes estabelecer a distancia, a surpresa e completamente viavel.',
      },
      probabilities: {
        fighter1: { nome: 'Bahamondes', percent: 62 },
        fighter2: { nome: 'Musayev', percent: 35 },
        draw: 3,
      },
      value_picks: undefined,
    },
  },
};
const analiseEN: PrelimsAnalise = {
  ...analisePT,
  titulo: 'Bahamondes vs Musayev: Knockout or Nothing',
  subtitulo: 'Two brutal finishers combining 29 KOs in 39 wins meet in Seattle',
  evento_data: 'March 28, 2026',
  categoria_peso: 'Lightweight (155 lbs)',
  fight_prediction: {
    ...analisePT.fight_prediction,
    predictedMethod: 'KO/TKO R1-R2',
    confidence: 'MEDIUM',
  },
  prelims_analysis: {
    hero: {
      ...analisePT.prelims_analysis.hero,
      evento_data: 'March 28, 2026',
      categoria_peso: 'Lightweight (155 lbs)',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes Per Minute', valueA: 4.19, valueB: 3.42, maxVal: 7, format: 'decimal', note: 'Bahamondes has superior significant strike volume per minute. Both are aggressive on the feet, but Bahamondes maintains a more consistent pace across rounds.' },
        { label: 'Striking Accuracy (%)', valueA: 47, valueB: 48, maxVal: 100, format: 'percent', note: 'Nearly identical accuracy. Neither is a sniper, but both land heavy when they connect.' },
        { label: 'Strikes Absorbed/Min', valueA: 3.85, valueB: 5.14, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Musayev absorbed a huge volume of strikes in his only UFC fight against Orolbai. Bahamondes is not the most defensive either, but absorbs less proportionally.' },
        { label: 'Strike Defense (%)', valueA: 52, valueB: 40, maxVal: 100, format: 'percent', note: 'Bahamondes has significantly better defense. Musayev at only 40% showed concerning defensive vulnerability in his UFC debut.' },
        { label: 'Takedowns Per 15 Min', valueA: 0.46, valueB: 0.00, maxVal: 4, format: 'decimal', note: 'Neither is an offensive grappler. Bahamondes attempts occasional takedowns, but this fight will be decided primarily on the feet.' },
        { label: 'Takedown Accuracy (%)', valueA: 50, valueB: 0, maxVal: 100, format: 'percent', note: 'Bahamondes converts half his attempts when he decides to go to the ground. Musayev attempted no takedowns in his UFC fight.' },
        { label: 'Takedown Defense (%)', valueA: 73, valueB: 50, maxVal: 100, format: 'percent', note: 'Bahamondes has decent takedown defense at 73%. Musayev at 50% is more vulnerable if taken down, as evidenced by the kimura loss to Orolbai.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '28 years old', fighter2: '36 years old', note: '8-year age gap. Bahamondes is in his physical prime while Musayev, at 36, needs to prove he still has the explosiveness that made him Rizin Grand Prix champion.' },
        { label: 'Height', fighter1: '6\'3" (1.91m)', fighter2: '5\'10" (1.78m)', note: 'Massive 5-inch advantage for Bahamondes. At 6\'3" for a lightweight, he is enormous and makes it very difficult for Musayev to close distance.' },
        { label: 'Reach', fighter1: '75.5" (192cm)', fighter2: '72" (183cm)', note: 'Nearly 4 inches more reach for Bahamondes. He can keep Musayev at distance with jabs and long kicks, forcing the Azerbaijani to cross a danger zone to connect.' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Both orthodox. Mirrored fight with no angular advantage.' },
        { label: 'Gym', fighter1: 'Valle Flow Striking, Santiago', fighter2: 'Baku, Azerbaijan', note: 'Bahamondes trains in Chile with a striking focus. Musayev comes from the Azerbaijani system rooted in traditional martial arts (karate, pankration, kung-fu).' },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Bahamondes',
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Rafael Fiziev', result: 'L', method: 'Unanimous Decision', opponent_rank: '#10 LW', quality_score: 5, quality_label: 'Excellent', note: 'Faced one of the best strikers in the division and lost by decision. Showed he belongs at this level, but could not overcome Fiziev\'s technique over three rounds.' },
          { date: 'Mar 2025', opponent: 'Jalin Turner', result: 'W', method: 'Sub R1 (triangle)', opponent_rank: '#15 LW', quality_score: 4, quality_label: 'Very Good', note: 'Surprised everyone by submitting Turner with a triangle in round one. Third consecutive Performance of the Night bonus, showing versatility beyond striking.' },
          { date: 'Sep 2024', opponent: 'Manuel Torres', result: 'W', method: 'TKO R1', opponent_rank: 'N/R LW', quality_score: 2, quality_label: 'Average', note: 'Devastating first-round knockout. Second consecutive Performance of the Night bonus.' },
          { date: 'Apr 2024', opponent: 'Christos Giagos', result: 'W', method: 'KO R1 (head kick)', opponent_rank: 'N/R LW', quality_score: 2, quality_label: 'Average', note: 'Brutal head kick that went viral. First of three consecutive Performance of the Night bonuses that built his hype.' },
          { date: 'Aug 2023', opponent: 'Ludovit Klein', result: 'L', method: 'Unanimous Decision', opponent_rank: 'N/R LW', quality_score: 2, quality_label: 'Average', note: 'Frustrating decision loss. Showed that when he cannot get the quick finish, he may struggle in fights that go the distance.' },
        ],
      },
      fighter2: {
        nome: 'Musayev',
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Myktybek Orolbai', result: 'L', method: 'Sub R1 (kimura)', opponent_rank: 'N/R LW', quality_score: 3, quality_label: 'Good', note: 'UFC debut ended in a quick first-round kimura loss. Exposed defensive grappling fragility that is concerning.' },
          { date: 'Jul 2022', opponent: 'Sidney Outlaw', result: 'W', method: 'KO R1 (27 seconds)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Lightning 27-second knockout in Bellator. The kind of explosive power that made him famous in Asian organizations.' },
          { date: 'Dec 2021', opponent: 'Roberto de Souza', result: 'L', method: 'Sub R1 (triangle)', opponent_rank: 'Rizin LW Champion', quality_score: 4, quality_label: 'Very Good', note: 'Triangle loss in the Rizin lightweight title fight. Second pattern of submission vulnerability.' },
          { date: 'Dec 2019', opponent: 'Patricky Freire', result: 'W', method: 'Unanimous Decision', opponent_rank: 'Bellator LW Contender', quality_score: 4, quality_label: 'Very Good', note: 'Historic win in the Rizin Grand Prix final against a Bellator veteran. Fought with a broken hand in round two and still won on the scorecards.' },
          { date: 'Sep 2019', opponent: 'Johnny Case', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Rizin Grand Prix semifinal. Dropped Case early in the round and finished with ground strikes.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Stand-up Striking', valueA: 78, valueB: 72, labelA: 'Very Good', labelB: 'Good', advantage: 'fighter1', advantage_note: 'Bahamondes combines enormous reach with lethal long-range kicks, including head kicks that went viral. Musayev has pure knockout power in his hands, but needs to get to close range to be effective, which is difficult against someone who is 6\'3".' },
        { label: 'Knockout Power', valueA: 82, valueB: 88, labelA: 'Very Good', labelB: 'Very Good', advantage: 'fighter2', advantage_note: 'Musayev has 18 KOs in 22 wins, an absurd 82% knockout rate. Bahamondes has 11 KOs in 17 wins (65%). Both are dangerous, but Musayev carries otherworldly power in his hands.' },
        { label: 'Defensive Grappling', valueA: 68, valueB: 38, labelA: 'Good', labelB: 'Average', advantage: 'fighter1', advantage_note: 'Bahamondes has 73% takedown defense and has shown the ability to submit opponents (triangle on Turner). Musayev was submitted by kimura (Orolbai) and triangle (De Souza), revealing serious ground vulnerability.' },
        { label: 'Cardio & Pace', valueA: 62, valueB: 45, labelA: 'Good', labelB: 'Average', advantage: 'fighter1', advantage_note: 'Bahamondes can maintain pace for three rounds, as shown against Fiziev. Musayev is a first-round explosion fighter: 18 of his 22 knockouts came in round one. If the fight extends, his pace drops.' },
        { label: 'Distance Management', valueA: 75, valueB: 50, labelA: 'Very Good', labelB: 'Average', advantage: 'fighter1', advantage_note: 'With a 5-inch height advantage and nearly 4 inches of reach, Bahamondes can control distance with jabs and long kicks. Musayev needs to close that distance to be effective, and that is the key to the fight.' },
        { label: 'High-Level Experience', valueA: 65, valueB: 60, labelA: 'Good', labelB: 'Good', advantage: 'even', advantage_note: 'Bahamondes has 9 UFC fights (6-3) and faced Fiziev and Turner. Musayev was Rizin Grand Prix champion and fought in Bellator, but has only one UFC fight (a loss). Different experiences but both tested at a competitive level.' },
      ],
      insight: 'The fight comes down to one question: can Musayev close the distance against Bahamondes\' enormous reach? If yes, Azerbaijani power can end anyone. If not, Bahamondes will pick him apart with kicks and long shots. Grappling is the wild card: Bahamondes can surprise with submissions, while Musayev has been submitted twice in his career and showed clear ground fragility.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Bahamondes', ko_tko: { count: 11, percent: 65 }, submission: { count: 2, percent: 12 }, decision: { count: 4, percent: 23 }, total_wins: 17 },
      fighter2: { nome: 'Musayev', ko_tko: { count: 18, percent: 82 }, submission: { count: 2, percent: 9 }, decision: { count: 2, percent: 9 }, total_wins: 22 },
      insight: 'Two natural finishers who rarely let fights go to the judges. Bahamondes has 65% KO/TKO wins and recently added submissions to his arsenal (triangle on Turner). Musayev is even more explosive: 82% of his 22 wins ended by knockout, with only 2 decisions in his entire career. The difference is that Bahamondes showed he can go the distance against Fiziev, while Musayev is almost exclusively a first-round fighter. If neither knocks the other out in the first few minutes, the fight strongly favors the Chilean.',
    },
    previsao_final: {
      winner_name: 'Bahamondes',
      winner_side: 'fighter1',
      predicted_method: 'TKO R2 or Unanimous Decision',
      confidence_score: 6,
      confidence_label: 'MEDIUM',
      explanation: 'Bahamondes enters as the betting favorite (around -200 to -270) and the reasons are clear. The physical advantage is enormous: 5 inches of height and nearly 4 inches of reach create a structural problem for Musayev, who needs to get to close range to use his knockout power. Bahamondes is also in his prime at 28, coming off three first-round finishes before the Fiziev loss, with four Performance of the Night bonuses. Musayev, at 36 and coming off a submission loss in his UFC debut, needs to prove he belongs at this level. Most likely scenario: Bahamondes controls distance in round one with kicks and long jabs, and finds the opening for a TKO in round two when Musayev starts forcing entries predictably. If Musayev survives the first two rounds, the fight likely goes to decision with Bahamondes dominating the scorecards on volume.',
      x_factor: {
        title: 'Musayev\'s knockout power in the first 3 minutes',
        description: 'Musayev has 18 career knockouts and most came in round one. If he lands clean in the opening minutes, nothing else matters. Bahamondes has been knocked out before and is not known for impenetrable defense. A single close-range exchange could flip the entire logic of the fight.',
      },
      upset_alert: {
        title: 'Musayev in Grand Prix mode',
        description: 'Musayev won the Rizin Grand Prix beating three fighters in one night, including the final with a broken hand. When he is 100% motivated and backed against the wall (like now, needing his first UFC win), he is capable of extraordinary performances. If he enters determined to trade from the first second and does not let Bahamondes establish distance, the upset is completely viable.',
      },
      probabilities: {
        fighter1: { nome: 'Bahamondes', percent: 62 },
        fighter2: { nome: 'Musayev', percent: 35 },
        draw: 3,
      },
      value_picks: undefined,
    },
  },
};
const analiseFR: PrelimsAnalise = {
  ...analisePT,
  titulo: 'Bahamondes vs Musayev : KO ou Rien',
  subtitulo: 'Deux finisseurs brutaux totalisant 29 KOs en 39 victoires se retrouvent a Seattle',
  evento_data: '28 mars 2026',
  categoria_peso: 'Poids Leger (155 lbs)',
  fight_prediction: {
    ...analisePT.fight_prediction,
    predictedMethod: 'KO/TKO R1-R2',
    confidence: 'MOYENNE',
  },
  prelims_analysis: {
    hero: {
      ...analisePT.prelims_analysis.hero,
      evento_data: '28 mars 2026',
      categoria_peso: 'Poids Leger (155 lbs)',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Coups Sig. Par Minute', valueA: 4.19, valueB: 3.42, maxVal: 7, format: 'decimal', note: 'Bahamondes a un volume superieur de coups significatifs par minute. Les deux sont agressifs debout, mais Bahamondes maintient un rythme plus constant au fil des rounds.' },
        { label: 'Precision des Coups (%)', valueA: 47, valueB: 48, maxVal: 100, format: 'percent', note: 'Precision pratiquement identique. Aucun des deux n\'est un tireur d\'elite, mais les deux frappent fort quand ils touchent.' },
        { label: 'Coups Absorbes/Min', valueA: 3.85, valueB: 5.14, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Musayev a absorbe un volume enorme de coups lors de son unique combat UFC contre Orolbai. Bahamondes n\'est pas le plus defensif non plus, mais absorbe moins proportionnellement.' },
        { label: 'Defense des Coups (%)', valueA: 52, valueB: 40, maxVal: 100, format: 'percent', note: 'Bahamondes a une defense nettement superieure. Musayev a seulement 40%, montrant une vulnerabilite defensive inquietante lors de ses debuts UFC.' },
        { label: 'Takedowns Par 15 Min', valueA: 0.46, valueB: 0.00, maxVal: 4, format: 'decimal', note: 'Aucun des deux n\'est un grappleur offensif. Bahamondes tente des amenees au sol sporadiquement, mais ce combat sera resolu principalement debout.' },
        { label: 'Precision Takedown (%)', valueA: 50, valueB: 0, maxVal: 100, format: 'percent', note: 'Bahamondes convertit la moitie de ses tentatives quand il decide d\'aller au sol. Musayev n\'a tente aucun takedown lors de son combat UFC.' },
        { label: 'Defense Takedown (%)', valueA: 73, valueB: 50, maxVal: 100, format: 'percent', note: 'Bahamondes a une defense de takedown correcte a 73%. Musayev a 50% est plus vulnerable au sol, comme l\'a montre sa defaite par kimura contre Orolbai.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '28 ans', fighter2: '36 ans', note: '8 ans d\'ecart. Bahamondes est dans sa forme physique optimale tandis que Musayev, a 36 ans, doit prouver qu\'il garde l\'explosivite qui l\'a rendu champion du Grand Prix Rizin.' },
        { label: 'Taille', fighter1: '1,91m (6\'3")', fighter2: '1,78m (5\'10")', note: 'Avantage enorme de 13 centimetres pour Bahamondes. Pour un poids leger, 1,91m est gigantesque et complique grandement les entrees de Musayev.' },
        { label: 'Allonge', fighter1: '192cm (75.5")', fighter2: '183cm (72")', note: 'Pres de 10cm d\'allonge supplementaire pour Bahamondes. Il peut maintenir Musayev a distance avec des jabs et des coups de pied longs.' },
        { label: 'Stance', fighter1: 'Orthodoxe', fighter2: 'Orthodoxe', note: 'Les deux orthodoxes. Combat en miroir sans avantage angulaire.' },
        { label: 'Club', fighter1: 'Valle Flow Striking, Santiago', fighter2: 'Baku, Azerbaidjan', note: 'Bahamondes s\'entraine au Chili avec un focus sur le striking. Musayev vient du systeme azerbaidjanais base sur les arts martiaux traditionnels (karate, pankration, kung-fu).' },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Bahamondes',
        recent_fights: [
          { date: 'Juin 2025', opponent: 'Rafael Fiziev', result: 'L', method: 'Decision Unanime', opponent_rank: '#10 LW', quality_score: 5, quality_label: 'Excellent', note: 'A affronte l\'un des meilleurs frappeurs de la division et perdu par decision. A montre qu\'il a sa place a ce niveau, mais n\'a pas pu surpasser la technique de Fiziev sur trois rounds.' },
          { date: 'Mar 2025', opponent: 'Jalin Turner', result: 'W', method: 'Soumission R1 (triangle)', opponent_rank: '#15 LW', quality_score: 4, quality_label: 'Tres Bon', note: 'A surpris tout le monde en soumettant Turner avec un triangle au premier round. Troisieme bonus Performance de la Soiree consecutif, montrant une polyvalence au-dela du striking.' },
          { date: 'Sep 2024', opponent: 'Manuel Torres', result: 'W', method: 'TKO R1', opponent_rank: 'N/R LW', quality_score: 2, quality_label: 'Moyen', note: 'KO devastateur au premier round. Deuxieme bonus Performance de la Soiree consecutif.' },
          { date: 'Avr 2024', opponent: 'Christos Giagos', result: 'W', method: 'KO R1 (head kick)', opponent_rank: 'N/R LW', quality_score: 2, quality_label: 'Moyen', note: 'Head kick brutal devenu viral. Premier des trois bonus Performance de la Soiree consecutifs qui ont construit son engouement.' },
          { date: 'Aout 2023', opponent: 'Ludovit Klein', result: 'L', method: 'Decision Unanime', opponent_rank: 'N/R LW', quality_score: 2, quality_label: 'Moyen', note: 'Defaite frustrante par decision. A montre que sans finition rapide, il peut avoir des difficultes sur la distance.' },
        ],
      },
      fighter2: {
        nome: 'Musayev',
        recent_fights: [
          { date: 'Juin 2025', opponent: 'Myktybek Orolbai', result: 'L', method: 'Soumission R1 (kimura)', opponent_rank: 'N/R LW', quality_score: 3, quality_label: 'Bon', note: 'Debut UFC termine par une defaite rapide par kimura au premier round. A expose une fragilite en grappling defensif preoccupante.' },
          { date: 'Juil 2022', opponent: 'Sidney Outlaw', result: 'W', method: 'KO R1 (27 secondes)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'KO eclair en 27 secondes au Bellator. Le type de puissance explosive qui l\'a rendu celebre dans les organisations asiatiques.' },
          { date: 'Dec 2021', opponent: 'Roberto de Souza', result: 'L', method: 'Soumission R1 (triangle)', opponent_rank: 'Champion Rizin LW', quality_score: 4, quality_label: 'Tres Bon', note: 'Defaite par triangle lors du combat pour le titre Rizin poids leger. Deuxieme signe de vulnerabilite aux soumissions.' },
          { date: 'Dec 2019', opponent: 'Patricky Freire', result: 'W', method: 'Decision Unanime', opponent_rank: 'Aspirant Bellator LW', quality_score: 4, quality_label: 'Tres Bon', note: 'Victoire historique en finale du Grand Prix Rizin contre un veteran du Bellator. A combattu avec la main cassee au deuxieme round et a quand meme gagne aux scorecards.' },
          { date: 'Sep 2019', opponent: 'Johnny Case', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Demi-finale du Grand Prix Rizin. A mis Case au sol en debut de round et termine avec des frappes au sol.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Striking Debout', valueA: 78, valueB: 72, labelA: 'Tres Bon', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'Bahamondes combine une allonge enorme avec des coups de pied a longue distance letaux, incluant des head kicks devenus viraux. Musayev a une puissance de KO pure dans les mains, mais doit entrer a courte distance pour etre efficace, ce qui est difficile contre quelqu\'un de 1,91m.' },
        { label: 'Puissance de KO', valueA: 82, valueB: 88, labelA: 'Tres Bon', labelB: 'Tres Bon', advantage: 'fighter2', advantage_note: 'Musayev a 18 KOs en 22 victoires, un taux absurde de 82%. Bahamondes a 11 KOs en 17 victoires (65%). Les deux sont dangereux, mais Musayev porte une puissance d\'un autre monde dans ses mains.' },
        { label: 'Grappling Defensif', valueA: 68, valueB: 38, labelA: 'Bon', labelB: 'Moyen', advantage: 'fighter1', advantage_note: 'Bahamondes a 73% de defense de takedown et a montre sa capacite a soumettre des adversaires (triangle sur Turner). Musayev a ete soumis par kimura (Orolbai) et triangle (De Souza), revelant une fragilite grave au sol.' },
        { label: 'Cardio et Rythme', valueA: 62, valueB: 45, labelA: 'Bon', labelB: 'Moyen', advantage: 'fighter1', advantage_note: 'Bahamondes peut maintenir le rythme sur trois rounds, comme montre contre Fiziev. Musayev est un combattant d\'explosion initiale : 18 de ses 22 KOs sont venus au premier round. Si le combat s\'etend, le rythme chute.' },
        { label: 'Gestion de Distance', valueA: 75, valueB: 50, labelA: 'Tres Bon', labelB: 'Moyen', advantage: 'fighter1', advantage_note: 'Avec 13cm d\'avantage en taille et pres de 10cm d\'allonge, Bahamondes peut controler la distance avec jabs et coups de pied longs. Musayev doit combler cette distance pour etre efficace, et c\'est la cle du combat.' },
        { label: 'Experience Haut Niveau', valueA: 65, valueB: 60, labelA: 'Bon', labelB: 'Bon', advantage: 'even', advantage_note: 'Bahamondes a 9 combats UFC (6-3) et a affronte Fiziev et Turner. Musayev a ete champion du Grand Prix Rizin et a combattu au Bellator, mais n\'a qu\'un seul combat UFC (defaite). Experiences differentes mais tous deux testes a haut niveau.' },
      ],
      insight: 'Le combat se resume a une question : Musayev peut-il combler la distance face a l\'allonge gigantesque de Bahamondes ? Si oui, la puissance azerbaidjanaise peut terrasser n\'importe qui. Sinon, Bahamondes va le demonter avec des coups de pied et des frappes longues. Le grappling est le joker : Bahamondes peut surprendre avec des soumissions, tandis que Musayev a ete soumis deux fois dans sa carriere et a montre une fragilite claire au sol.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Bahamondes', ko_tko: { count: 11, percent: 65 }, submission: { count: 2, percent: 12 }, decision: { count: 4, percent: 23 }, total_wins: 17 },
      fighter2: { nome: 'Musayev', ko_tko: { count: 18, percent: 82 }, submission: { count: 2, percent: 9 }, decision: { count: 2, percent: 9 }, total_wins: 22 },
      insight: 'Deux finisseurs naturels qui laissent rarement les combats aller aux juges. Bahamondes a 65% de victoires par KO/TKO et a recemment ajoute la soumission a son arsenal (triangle sur Turner). Musayev est encore plus explosif : 82% de ses 22 victoires se sont terminees par KO, avec seulement 2 decisions dans toute sa carriere. La difference est que Bahamondes a montre qu\'il peut aller la distance contre Fiziev, tandis que Musayev est presque exclusivement un combattant du premier round. Si aucun des deux ne met l\'autre KO dans les premieres minutes, le combat favorise fortement le Chilien.',
    },
    previsao_final: {
      winner_name: 'Bahamondes',
      winner_side: 'fighter1',
      predicted_method: 'TKO R2 ou Decision Unanime',
      confidence_score: 6,
      confidence_label: 'MOYENNE',
      explanation: 'Bahamondes entre en favori chez les bookmakers (environ -200 a -270) et les raisons sont claires. L\'avantage physique est enorme : 13cm de taille et pres de 10cm d\'allonge creent un probleme structurel pour Musayev, qui doit entrer a courte distance pour utiliser sa puissance de KO. Bahamondes est aussi dans sa forme optimale a 28 ans, avec trois finitions au premier round avant la defaite contre Fiziev, et quatre bonus Performance de la Soiree. Musayev, a 36 ans et venant d\'une defaite par soumission lors de ses debuts UFC, doit prouver qu\'il a sa place a ce niveau. Scenario le plus probable : Bahamondes controle la distance au premier round avec des coups de pied et jabs longs, et trouve l\'ouverture pour un TKO au deuxieme round quand Musayev commence a forcer ses entrees de facon previsible.',
      x_factor: {
        title: 'La puissance de KO de Musayev dans les 3 premieres minutes',
        description: 'Musayev a 18 KOs en carriere et la plupart sont arrives au premier round. S\'il connecte proprement dans les premieres minutes, plus rien d\'autre ne compte. Bahamondes a deja ete mis KO et n\'est pas connu pour une defense impenetrable. Un seul echange a courte distance peut renverser toute la logique du combat.',
      },
      upset_alert: {
        title: 'Musayev en mode Grand Prix',
        description: 'Musayev a remporte le Grand Prix Rizin en battant trois combattants en une soiree, dont la finale avec la main cassee. Quand il est 100% motive et dos au mur (comme maintenant, ayant besoin de sa premiere victoire UFC), il est capable de performances extraordinaires. S\'il entre determine a echanger des le premier second et ne laisse pas Bahamondes etablir la distance, la surprise est tout a fait viable.',
      },
      probabilities: {
        fighter1: { nome: 'Bahamondes', percent: 62 },
        fighter2: { nome: 'Musayev', percent: 35 },
        draw: 3,
      },
      value_picks: undefined,
    },
  },
};
const analiseES: PrelimsAnalise = {
  ...analisePT,
  titulo: 'Bahamondes vs Musayev: Nocaut o Nada',
  subtitulo: 'Dos finalizadores brutales que suman 29 KOs en 39 victorias se encuentran en Seattle',
  evento_data: '28 de marzo, 2026',
  categoria_peso: 'Peso Ligero (155 lbs)',
  fight_prediction: {
    ...analisePT.fight_prediction,
    predictedMethod: 'KO/TKO R1-R2',
    confidence: 'MEDIA',
  },
  prelims_analysis: {
    hero: {
      ...analisePT.prelims_analysis.hero,
      evento_data: '28 de marzo, 2026',
      categoria_peso: 'Peso Ligero (155 lbs)',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Golpes Sig. Por Minuto', valueA: 4.19, valueB: 3.42, maxVal: 7, format: 'decimal', note: 'Bahamondes tiene un volumen superior de golpes significativos por minuto. Ambos son agresivos de pie, pero Bahamondes mantiene un ritmo mas constante a lo largo de los rounds.' },
        { label: 'Precision de Golpes (%)', valueA: 47, valueB: 48, maxVal: 100, format: 'percent', note: 'Precision practicamente identica. Ninguno de los dos es un francotirador, pero ambos conectan golpes pesados cuando aciertan.' },
        { label: 'Golpes Absorbidos/Min', valueA: 3.85, valueB: 5.14, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Musayev absorbio un volumen enorme de golpes en su unica pelea en UFC contra Orolbai. Bahamondes tampoco es el mas defensivo, pero absorbe menos proporcionalmente.' },
        { label: 'Defensa de Golpes (%)', valueA: 52, valueB: 40, maxVal: 100, format: 'percent', note: 'Bahamondes tiene una defensa significativamente superior. Musayev con solo 40% mostro vulnerabilidad defensiva preocupante en su debut en UFC.' },
        { label: 'Derribos Por 15 Min', valueA: 0.46, valueB: 0.00, maxVal: 4, format: 'decimal', note: 'Ninguno de los dos es un grappler ofensivo. Bahamondes intenta derribos esporadicamente, pero esta pelea se resolvera principalmente de pie.' },
        { label: 'Precision de Derribo (%)', valueA: 50, valueB: 0, maxVal: 100, format: 'percent', note: 'Bahamondes convierte la mitad de sus intentos cuando decide ir al suelo. Musayev no intento ningun derribo en su pelea en UFC.' },
        { label: 'Defensa de Derribo (%)', valueA: 73, valueB: 50, maxVal: 100, format: 'percent', note: 'Bahamondes tiene una defensa de derribo decente con 73%. Musayev con 50% es mas vulnerable si lo llevan al suelo, como quedo evidente en la derrota por kimura contra Orolbai.' },
      ],
      tale_of_tape: [
        { label: 'Edad', fighter1: '28 anos', fighter2: '36 anos', note: 'Diferencia de 8 anos. Bahamondes esta en su plenitud fisica mientras que Musayev, a los 36, necesita demostrar que aun mantiene la explosividad que lo hizo campeon del Grand Prix de Rizin.' },
        { label: 'Altura', fighter1: '1,91m (6\'3")', fighter2: '1,78m (5\'10")', note: 'Ventaja enorme de 13 centimetros para Bahamondes. Para un peso ligero, 1,91m es gigantesco y dificulta mucho la entrada de Musayev.' },
        { label: 'Envergadura', fighter1: '192cm (75.5")', fighter2: '183cm (72")', note: 'Casi 10cm de envergadura adicional para Bahamondes. Puede mantener a Musayev a distancia con jabs y patadas largas, forzando al azerbaiyano a cruzar una zona de peligro para conectar.' },
        { label: 'Stance', fighter1: 'Ortodoxa', fighter2: 'Ortodoxa', note: 'Ambos ortodoxos. Pelea espejo sin ventaja angular.' },
        { label: 'Gimnasio', fighter1: 'Valle Flow Striking, Santiago', fighter2: 'Baku, Azerbaiyan', note: 'Bahamondes entrena en Chile con enfoque en striking. Musayev viene del sistema azerbaiyano basado en artes marciales tradicionales (karate, pankration, kung-fu).' },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Bahamondes',
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Rafael Fiziev', result: 'L', method: 'Decision Unanime', opponent_rank: '#10 LW', quality_score: 5, quality_label: 'Excelente', note: 'Enfrento a uno de los mejores golpeadores de la division y perdio por decision. Demostro que pertenece a este nivel, pero no pudo superar la tecnica de Fiziev en tres rounds.' },
          { date: 'Mar 2025', opponent: 'Jalin Turner', result: 'W', method: 'Sumision R1 (triangulo)', opponent_rank: '#15 LW', quality_score: 4, quality_label: 'Muy Bueno', note: 'Sorprendio finalizando a Turner con triangulo en el primer round. Tercer bono de Actuacion de la Noche consecutivo, mostrando versatilidad mas alla del striking.' },
          { date: 'Sep 2024', opponent: 'Manuel Torres', result: 'W', method: 'TKO R1', opponent_rank: 'N/R LW', quality_score: 2, quality_label: 'Medio', note: 'Nocaut devastador en el primer round. Segundo bono de Actuacion de la Noche consecutivo.' },
          { date: 'Abr 2024', opponent: 'Christos Giagos', result: 'W', method: 'KO R1 (head kick)', opponent_rank: 'N/R LW', quality_score: 2, quality_label: 'Medio', note: 'Head kick brutal que se volvio viral. Primero de tres bonos de Actuacion de la Noche consecutivos que construyeron su fama.' },
          { date: 'Ago 2023', opponent: 'Ludovit Klein', result: 'L', method: 'Decision Unanime', opponent_rank: 'N/R LW', quality_score: 2, quality_label: 'Medio', note: 'Derrota frustrante por decision. Demostro que cuando no consigue la finalizacion rapida, puede tener dificultades en peleas que van a la distancia.' },
        ],
      },
      fighter2: {
        nome: 'Musayev',
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Myktybek Orolbai', result: 'L', method: 'Sumision R1 (kimura)', opponent_rank: 'N/R LW', quality_score: 3, quality_label: 'Bueno', note: 'Debut en UFC termino en derrota rapida por kimura en el primer round. Expuso fragilidad en grappling defensivo que preocupa.' },
          { date: 'Jul 2022', opponent: 'Sidney Outlaw', result: 'W', method: 'KO R1 (27 segundos)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Nocaut relampago en 27 segundos en Bellator. El tipo de poder explosivo que lo hizo famoso en las organizaciones asiaticas.' },
          { date: 'Dic 2021', opponent: 'Roberto de Souza', result: 'L', method: 'Sumision R1 (triangulo)', opponent_rank: 'Campeon Rizin LW', quality_score: 4, quality_label: 'Muy Bueno', note: 'Derrota por triangulo en la pelea por el titulo Rizin peso ligero. Segundo patron de vulnerabilidad a sumisiones.' },
          { date: 'Dic 2019', opponent: 'Patricky Freire', result: 'W', method: 'Decision Unanime', opponent_rank: 'Aspirante Bellator LW', quality_score: 4, quality_label: 'Muy Bueno', note: 'Victoria historica en la final del Grand Prix Rizin contra veterano de Bellator. Peleo con la mano rota en el segundo round y aun asi gano en las tarjetas.' },
          { date: 'Sep 2019', opponent: 'Johnny Case', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Semifinal del Grand Prix Rizin. Derribo a Case al inicio del round y finalizo con golpes en el suelo.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Striking de Pie', valueA: 78, valueB: 72, labelA: 'Muy Bueno', labelB: 'Bueno', advantage: 'fighter1', advantage_note: 'Bahamondes combina un alcance enorme con patadas a larga distancia letales, incluyendo head kicks que se hicieron virales. Musayev tiene poder de nocaut puro en las manos, pero necesita entrar a distancia corta para ser efectivo, lo cual es dificil contra alguien de 1,91m.' },
        { label: 'Poder de Nocaut', valueA: 82, valueB: 88, labelA: 'Muy Bueno', labelB: 'Muy Bueno', advantage: 'fighter2', advantage_note: 'Musayev tiene 18 KOs en 22 victorias, una tasa absurda de 82%. Bahamondes tiene 11 KOs en 17 victorias (65%). Ambos son peligrosos, pero Musayev carga un poder de otra dimension en sus manos.' },
        { label: 'Grappling Defensivo', valueA: 68, valueB: 38, labelA: 'Bueno', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Bahamondes tiene 73% de defensa de derribo y ya demostro capacidad de someter oponentes (triangulo en Turner). Musayev fue sometido por kimura (Orolbai) y triangulo (De Souza), revelando fragilidad grave en el suelo.' },
        { label: 'Cardio y Ritmo', valueA: 62, valueB: 45, labelA: 'Bueno', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Bahamondes puede mantener el ritmo por tres rounds, como mostro contra Fiziev. Musayev es un peleador de explosion inicial: 18 de sus 22 nocauts fueron en el primer round. Si la pelea se extiende, el ritmo cae.' },
        { label: 'Gestion de Distancia', valueA: 75, valueB: 50, labelA: 'Muy Bueno', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Con 13cm de ventaja de altura y casi 10cm de envergadura, Bahamondes puede controlar la distancia con jabs y patadas largas. Musayev necesita cerrar esa distancia para ser efectivo, y eso es la clave de la pelea.' },
        { label: 'Experiencia de Alto Nivel', valueA: 65, valueB: 60, labelA: 'Bueno', labelB: 'Bueno', advantage: 'even', advantage_note: 'Bahamondes tiene 9 peleas en UFC (6-3) y enfrento a Fiziev y Turner. Musayev fue campeon del Grand Prix Rizin y peleo en Bellator, pero tiene solo una pelea en UFC (derrota). Experiencias diferentes pero ambos probados a nivel competitivo.' },
      ],
      insight: 'La pelea se resume a una pregunta: Musayev puede cerrar la distancia contra el alcance gigantesco de Bahamondes? Si lo logra, el poder azerbaiyano puede acabar con cualquiera. Si no, Bahamondes lo va a desmontar con patadas y golpes largos. El grappling es el comodin: Bahamondes puede sorprender con sumisiones, mientras que Musayev fue sometido dos veces en su carrera y mostro fragilidad clara en el suelo.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Bahamondes', ko_tko: { count: 11, percent: 65 }, submission: { count: 2, percent: 12 }, decision: { count: 4, percent: 23 }, total_wins: 17 },
      fighter2: { nome: 'Musayev', ko_tko: { count: 18, percent: 82 }, submission: { count: 2, percent: 9 }, decision: { count: 2, percent: 9 }, total_wins: 22 },
      insight: 'Dos finalizadores natos que raramente dejan la pelea ir a los jueces. Bahamondes tiene 65% de victorias por KO/TKO y recientemente agrego la sumision a su arsenal (triangulo en Turner). Musayev es aun mas explosivo: 82% de sus 22 victorias terminaron en nocaut, con solo 2 decisiones en toda su carrera. La diferencia es que Bahamondes demostro capacidad de ir a la distancia contra Fiziev, mientras que Musayev es casi exclusivamente un peleador de primer round. Si ninguno noquea al otro en los primeros minutos, la pelea favorece fuertemente al chileno.',
    },
    previsao_final: {
      winner_name: 'Bahamondes',
      winner_side: 'fighter1',
      predicted_method: 'TKO R2 o Decision Unanime',
      confidence_score: 6,
      confidence_label: 'MEDIA',
      explanation: 'Bahamondes entra como favorito en las casas de apuestas (alrededor de -200 a -270) y las razones son claras. La ventaja fisica es enorme: 13cm de altura y casi 10cm de envergadura crean un problema estructural para Musayev, que necesita entrar a distancia corta para usar su poder de nocaut. Bahamondes tambien esta en su mejor momento a los 28 anos, viene de tres finalizaciones en el primer round antes de la derrota contra Fiziev, y tiene cuatro bonos de Actuacion de la Noche. Musayev, a los 36 anos y viniendo de derrota por sumision en su debut en UFC, necesita demostrar que pertenece a este nivel. El escenario mas probable: Bahamondes controla la distancia en el primer round con patadas y jabs largos, y en el segundo round encuentra la apertura para un TKO cuando Musayev empieza a forzar las entradas de forma predecible.',
      x_factor: {
        title: 'El poder de nocaut de Musayev en los primeros 3 minutos',
        description: 'Musayev tiene 18 nocauts en su carrera y la mayoria ocurrieron en el primer round. Si conecta un golpe limpio en los primeros minutos, nada mas importa. Bahamondes ya fue noqueado y no es conocido por una defensa impenetrable. Un unico intercambio a distancia corta puede cambiar toda la logica de la pelea.',
      },
      upset_alert: {
        title: 'Musayev en modo Grand Prix',
        description: 'Musayev gano el Grand Prix de Rizin venciendo tres peleas en una noche, incluyendo la final con la mano rota. Cuando esta 100% motivado y con la espalda contra la pared (como ahora, necesitando su primera victoria en UFC), es capaz de actuaciones extraordinarias. Si entra decidido a intercambiar desde el primer segundo y no deja que Bahamondes establezca la distancia, la sorpresa es completamente viable.',
      },
      probabilities: {
        fighter1: { nome: 'Bahamondes', percent: 62 },
        fighter2: { nome: 'Musayev', percent: 35 },
        draw: 3,
      },
      value_picks: undefined,
    },
  },
};
const analises: Record<string, PrelimsAnalise> = { pt: analisePT, en: analiseEN, fr: analiseFR, es: analiseES };
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PrelimsAnalysisView analise={analises[locale] || analisePT} lang={locale as Lang} />;
}
