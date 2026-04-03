import type { Lang } from '@/lib/i18n-labels';
import { loadAnalysisData } from '@/lib/load-analysis-locale';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'jandiroba-vs-ricci-pos-weighins',
  evento_id: null,
  slug: 'jandiroba-vs-ricci-pos-weighins',
  titulo: 'Jandiroba vs Ricci: Pos Weigh-Ins | Jandiroba Usou a Tolerancia, 5 Rounds no Co-Main e a Batalha pelo Titulo',
  subtitulo: 'Jandiroba bateu 116 lbs (tolerancia de 1 lb). Ricci bateu 115.5 lbs. 5 rounds incomuns para um co-main sem titulo. Oponentes em comum contam a historia. Odds apertadas: -125 a -130.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,60m', envergadura: '163cm', idade: 37, academia: 'N/A (Brasileira)' },
      fighter2: { altura: '1,55m', envergadura: '155cm', idade: 28, academia: 'Paragon BJJ / Black House' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisao Unanime',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Jandiroba Usou a Tolerancia de 1 lb', edge: 'fighter2', impact: 4, description: 'Jandiroba bateu 116 lbs, usando a tolerancia permitida em lutas sem titulo. Ricci bateu 115.5 lbs. Nao e um miss, mas mostra que o corte de peso pode ter sido mais dificil dessa vez.' },
      { factor: 'Grappling de Elite vs Volume de Strikes', edge: 'fighter1', impact: 9, description: 'Jandiroba tem 14 submissoes na carreira (1.5 tentativas/15 min). Ricci tem 4.18 SLpM. Classico grappler vs striker.' },
      { factor: 'Oponentes em Comum Favorecem Jandiroba', edge: 'fighter1', impact: 8, description: 'Contra Hill e Ribas, ambas venceram. Mas contra Xiaonan: Jandiroba venceu, Ricci perdeu. Contra Godinez: Jandiroba venceu UD, Ricci perdeu SD.' },
      { factor: '5 Rounds no Co-Main', edge: 'fighter1', impact: 7, description: 'Muito incomum para luta sem titulo no peso palha feminino. 5 rounds favorecem a grappler persistente que pode acumular tempo de controle.' },
    ],
    xFactor: {
      title: '5 Rounds Favorecem Jandiroba',
      description: 'Jandiroba lutou 5 rounds contra Dern e aguentou. Ricci nunca lutou 5 rounds no UFC. O formato do co-main pode ser o diferencial.',
    },
  },
  fighter1_info: {
    nome: 'Virna Jandiroba',
    apelido: 'Carcara',
    record: '22-4-0',
    ranking: '#3 Peso Palha',
    ultimasLutas: [
      { result: 'L', opponent: 'Mackenzie Dern', method: 'Decisao Unanime', event: 'UFC 321' },
      { result: 'W', opponent: 'Amanda Lemos', method: 'Submissao R2', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Lupita Godinez', method: 'Decisao Unanime', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Tabatha Ricci',
    apelido: 'Baby Shark',
    record: '12-3-0',
    ranking: '#7 Peso Palha',
    ultimasLutas: [
      { result: 'W', opponent: 'Amanda Ribas', method: 'TKO R2', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Yan Xiaonan', method: 'Decisao Unanime', event: 'UFC Fight Night 248' },
      { result: 'W', opponent: 'Angela Hill', method: 'Decisao Unanime', event: 'UFC on ESPN 62' },
    ],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan | Pos Weigh-Ins',
  evento_data: '4 de Abril, 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Peso Palha Feminino (115 lbs)',
  num_rounds: 5,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Moicano vs Duncan | Pos Weigh-Ins',
      evento_data: '4 de Abril, 2026',
      evento_local: 'UFC Apex, Las Vegas',
      categoria_peso: 'Peso Palha Feminino (115 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'Grappling de Elite vs Volume Implacavel',
      tagline_sub: 'Jandiroba bateu 116 lbs (tolerancia). Ricci bateu 115.5 lbs. 5 rounds incomuns no co-main. Odds apertadas: -125 a -130. Oponentes em comum contam a historia.',
      fighter1: {
        nome_completo: 'Virna "Carcara" Jandiroba',
        apelido: 'Carcara',
        sobrenome: 'Jandiroba',
        record: '22-4-0',
        ranking: '#3 Peso Palha',
        info_extra: 'Serrinha, Bahia, Brasil | 37 anos | #11 P4P Feminino',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Tabatha "Baby Shark" Ricci',
        apelido: 'Baby Shark',
        sobrenome: 'Ricci',
        record: '12-3-0',
        ranking: '#7 Peso Palha',
        info_extra: 'Birigui, SP, Brasil | Paragon BJJ | 28 anos',
        imagem_fullbody_url: null,
      },
    },

    narrativa: {
      html_content: `
        <!-- WEIGH-IN INTELLIGENCE: JANDIROBA -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">A Tolerancia de 1 lb e o Que Ela Significa</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-300"></div>
            <div class="relative p-6">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">WEIGH-IN INTEL</p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-ufc-red">Jandiroba</strong> bateu 116 lbs na balanca. Em lutas sem titulo, existe tolerancia de 1 lb, entao 116 esta dentro do permitido. NAO e um miss de peso. Mas e um sinal: o corte ate 115 pode ter sido mais dificil do que o esperado. Aos 37 anos, o corpo nao desidrata com a mesma facilidade. <strong class="text-blue-400">Ricci</strong> bateu 115.5 lbs, meia libra abaixo do limite. Corte limpo, sem drama.
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                O que isso significa na pratica? Provavelmente nada drastico. Jandiroba usou a tolerancia que estava disponivel e evitou estressar o corpo. E uma decisao inteligente de uma veterana que sabe que a reidratacao importa mais do que o numero na balanca. Mas vale monitorar: se Jandiroba parecer lenta nos primeiros minutos, o corte de peso pode ser o motivo.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                O dado mais importante do weigh-in nao e o peso em si. E o formato da luta: <strong class="text-amber-400">5 rounds</strong>. Isso e extremamente incomum para um co-main event de peso palha feminino sem titulo em jogo. E muda TUDO na dinamica. 5 rounds favorecem a grappler persistente que pode acumular tempo de controle round a round. Jandiroba lutou 5 rounds contra Dern e aguentou. Ricci nunca lutou 5 rounds no UFC.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/15 to-transparent"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-ufc-red"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Jandiroba</p>
                <p class="font-display text-lg text-white mb-2">116 LBS</p>
                <p class="text-xs text-white/50 leading-relaxed">Tolerancia de 1 lb usada. Dentro do limite. Corte pode ter sido mais dificil aos 37 anos.</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-transparent"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-blue-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Ricci</p>
                <p class="font-display text-lg text-white mb-2">115.5 LBS</p>
                <p class="text-xs text-white/50 leading-relaxed">Meia libra abaixo do limite. Corte limpo. Sem indicios de dificuldade.</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-amber-400/15 to-transparent"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-amber-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">Formato</p>
                <p class="font-display text-lg text-white mb-2">5 ROUNDS</p>
                <p class="text-xs text-white/50 leading-relaxed">Incomum para co-main sem titulo no WSW. Favorece Jandiroba e seu grappling persistente.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- NARRATIVE: TITLE PICTURE -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">A Carcara Quer Voltar ao Titulo</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/5 via-transparent to-ufc-red/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-ufc-red/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-ufc-red">Virna Jandiroba</strong> perdeu pra Mackenzie Dern no UFC 321 pela disputa do titulo vago do peso palha. 5 rounds competitivos, mas Dern controlou os momentos decisivos. Agora, aos 37 anos, Jandiroba precisa provar que a derrota foi circunstancial, nao o inicio do declinio. Antes de Dern, eram 6 vitorias seguidas, incluindo Amanda Lemos por submissao, Angela Hill e Lupita Godinez. A mulher que tem 14 finalizacoes na carreira e 3 submissoes no WSW do UFC (empatada em 2o com Rose Namajunas, atras apenas de Dern com 5).
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                O ranking P4P feminino (#11) mostra o respeito que Jandiroba tem. Mas o relogio biologico nao para. Aos 37, cada derrota pesa mais. Uma segunda derrota seguida praticamente elimina qualquer chance de revanche pelo titulo. Essa luta contra Ricci nao e so sobre manter o ranking. E sobre manter o sonho do titulo vivo. E com 5 rounds disponiveis, Jandiroba tem MAIS tempo pra impor o grappling. Esse formato e um presente pra ela.
              </p>
            </div>
          </div>
        </div>

        <!-- NARRATIVE: RICCI -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Baby Shark Quer Nadar com os Tubaroes</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-blue-400">Tabatha Ricci</strong> vem do melhor resultado da carreira: TKO sobre Amanda Ribas em julho de 2025, com cotovelada e socos no ground and pound. Nao e mais so volume. A Baby Shark agora tem poder de finalizacao. A #7 do ranking esta no auge fisico aos 28 anos e quer usar essa luta como trampolim pro top 5.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                O problema? Ricci nunca venceu uma top 5 no UFC. Perdeu pra Yan Xiaonan (a mesma que Jandiroba venceu). E agora vai enfrentar a #3 do mundo em uma luta de 5 rounds, formato que ela NUNCA experimentou no UFC. Se a defesa de takedown de 78% funcionar e ela mantiver a luta em pe, o volume de 4.18 SLpM pode dominar. Mas 5 rounds significam mais chances pra Jandiroba encaixar takedowns. E basta UM momento no chao pra mudar tudo.
              </p>
            </div>
          </div>
        </div>

        <!-- COMMON OPPONENTS -->
        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Os Oponentes em Comum Nao Mentem</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Angela Hill</p>
                <p class="text-sm text-white/60 leading-relaxed"><strong class="text-ufc-red">Jandiroba</strong> venceu por UD (ago 2024). <strong class="text-blue-400">Ricci</strong> tambem venceu por UD (ago 2024). Resultado semelhante. Ambas dominaram Hill com estilos diferentes: Jandiroba no grappling, Ricci no volume.</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Amanda Ribas</p>
                <p class="text-sm text-white/60 leading-relaxed"><strong class="text-ufc-red">Jandiroba</strong> finalizou por submissao no R2 (mar 2024). <strong class="text-blue-400">Ricci</strong> finalizou por TKO no R2 (jul 2025). Ambas finalizaram Ribas! Jandiroba no chao, Ricci em pe. A diferenca de estilo e clara.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: '#3 Peso Palha (#11 P4P)', fighter2: '#7 Peso Palha' },
        { dimensao: 'Sequencia', fighter1: 'Vem de derrota no titulo vs Dern', fighter2: 'Vem de TKO sobre Ribas' },
        { dimensao: 'Narrativa', fighter1: 'Provar que a derrota pra Dern foi acidente, voltar a fila do titulo', fighter2: 'Primeira vitoria sobre top 5, entrar na conversa do titulo' },
        { dimensao: 'Risco', fighter1: '2a derrota seguida aos 37. Pode encerrar as chances de titulo.', fighter2: 'Perder pra #3 nao e desonra, mas freia o momentum' },
        { dimensao: 'Recompensa', fighter1: 'Voltar ao top 3 com vitoria solida. Possivel revanche pelo titulo.', fighter2: 'Entrar no top 5 com a maior vitoria da carreira' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'A CARCARA NAO PARA',
          subtitulo: 'Jandiroba usa os 5 rounds pra impor grappling de elite e mostra que a derrota pra Dern foi circunstancial',
          consequencias: [
            { tag: 'RANKING', texto: 'Jandiroba se mantem no top 3 e volta a fila do titulo' },
            { tag: 'TITULO', texto: 'Possivel revanche com Dern ou luta contra Tatiana Suarez pela proxima chance' },
            { tag: 'RECORDE', texto: 'Persegue o recorde de submissoes de Dern no WSW (5). Jandiroba tem 3.' },
          ],
          proxima_luta: 'Jandiroba vs Suarez ou revanche Dern pelo titulo',
        },
        fighter2_vence: {
          titulo: 'BABY SHARK COME A CARCARA',
          subtitulo: 'Ricci defende takedowns por 5 rounds e usa volume pra dominar a veterana',
          consequencias: [
            { tag: 'ASCENSAO', texto: 'Ricci entra no top 5 com a maior vitoria da carreira sobre a #3' },
            { tag: 'TITULO', texto: 'Vitoria sobre Jandiroba coloca Ricci na conversa do titulo' },
            { tag: 'JANDIROBA', texto: '2a derrota seguida aos 37. O declinio pode ser real.' },
          ],
          proxima_luta: 'Ricci vs Lemos ou Zhang Weili pela disputa de titulo',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Virna Jandiroba',
        color: 'red',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Mackenzie Dern', result: 'L', method: 'Decisao Unanime', opponent_rank: 'Campea WSW', quality_score: 5, quality_label: 'Excelente', note: 'Luta pelo titulo vago do peso palha. 5 rounds competitivos, mas Dern controlou os momentos chave.' },
          { date: 'Jun 2025', opponent: 'Amanda Lemos', result: 'W', method: 'Submissao R2', opponent_rank: '#4 WSW', quality_score: 4, quality_label: 'Muito Bom', note: 'Armbar classica. Dominio no chao. POTN.' },
          { date: 'Dez 2024', opponent: 'Lupita Godinez', result: 'W', method: 'Decisao Unanime', opponent_rank: '#9 WSW', quality_score: 3, quality_label: 'Bom', note: 'Controlou a luta inteira com takedowns e posicao.' },
          { date: 'Ago 2024', opponent: 'Angela Hill', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Clinica de grappling. Hill nao teve chance.' },
          { date: 'Mar 2024', opponent: 'Amanda Ribas', result: 'W', method: 'Submissao R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Finalizacao rapida. Armbar solida.' },
        ],
        momentum_score: 6,
        momentum_label: 'Resiliente',
        momentum_trend: 'resilient',
        momentum_note: 'Jandiroba vem de derrota no titulo contra Dern, mas o contexto importa: foi competitiva em 5 rounds contra a nova campea. Antes disso, 6 vitorias seguidas com nivel de oposicao excelente (Lemos, Godinez, Hill, Ribas). Aos 37 anos, o relogio biologico e preocupacao, mas o jiu-jitsu nao envelhece tao rapido. O weigh-in de 116 lbs (tolerancia) e um sinal menor de que o corpo pode estar sentindo.',
      },
      fighter2: {
        nome: 'Tabatha Ricci',
        color: 'blue',
        recent_fights: [
          { date: 'Jul 2025', opponent: 'Amanda Ribas', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Cotovelada e socos no ground and pound. Primeira finalizacao por strikes no UFC.' },
          { date: 'Nov 2024', opponent: 'Yan Xiaonan', result: 'L', method: 'Decisao Unanime', opponent_rank: '#5 WSW', quality_score: 4, quality_label: 'Muito Bom', note: 'Xiaonan controlou com volume. Ricci nao conseguiu impor ritmo.' },
          { date: 'Ago 2024', opponent: 'Angela Hill', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Volume alto e pressao constante. Controlou a distancia.' },
          { date: 'Mar 2024', opponent: 'Tecia Torres', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria solida por pontos com volume.' },
          { date: 'Set 2023', opponent: 'Lupita Godinez', result: 'W', method: 'Decisao Unanime', opponent_rank: '#9 WSW', quality_score: 3, quality_label: 'Bom', note: 'Controlou a luta com volume e atividade constante.' },
        ],
        momentum_score: 7,
        momentum_label: 'Em Ascensao',
        momentum_trend: 'ascending',
        momentum_note: 'Ricci vem do melhor resultado da carreira: TKO sobre Ribas que mostrou poder de finalizacao no striking. Antes disso, perdeu pra Xiaonan (a mesma que Jandiroba venceu), mas o ritmo geral e positivo. Aos 28 anos, esta no auge fisico. O weigh-in limpo de 115.5 lbs confirma boa preparacao. Nunca lutou 5 rounds no UFC, o que e uma incognita.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Jandiroba',
        media_oponentes: 4,
        media_oponentes_label: 'Muito Bom',
        aproveitamento: '8W-4L (67%)',
        contra_top5: '2W-2L',
      },
      fighter2: {
        nome: 'Ricci',
        media_oponentes: 2,
        media_oponentes_label: 'Medio',
        aproveitamento: '7W-3L (70%)',
        contra_top5: '0W-1L',
      },
      oponentes_em_comum_count: { fighter1: 3, fighter2: 3 },
      oponentes_em_comum_note: 'Tres oponentes em comum relevantes: Angela Hill (ambas W por UD), Amanda Ribas (Jandiroba Sub R2, Ricci TKO R2) e Lupita Godinez (Jandiroba W UD, Ricci W UD). Ambas finalizaram Ribas, mas por caminhos diferentes. Contra os mesmos oponentes, os resultados sao parecidos, mas Jandiroba enfrentou calibre muito superior no geral.',
    },

    oponente_comum: {
      oponente_nome: 'Amanda Ribas',
      fighter1_result: {
        resultado: 'Vitoria por Submissao',
        metodo: 'Armbar R2',
        duracao: '2 rounds',
        contexto: 'UFC Fight Night, marco 2024. Jandiroba levou pro chao e finalizou com armbar classica.',
        performance: 'Dominio total no grappling. Ribas nao teve resposta pro takedown e controle posicional de Jandiroba. Finalizacao limpa.',
        evento: 'UFC Fight Night',
        data: 'Mar 2024',
      },
      fighter2_result: {
        resultado: 'Vitoria por TKO',
        metodo: 'TKO R2 (cotovelada e socos)',
        duracao: '2 rounds',
        contexto: 'UFC Fight Night, julho 2025. Ricci conectou cotovelada devastadora e finalizou com socos no ground and pound.',
        performance: 'A melhor performance de Ricci no UFC. Mostrou poder de finalizacao no striking que nao existia antes. A evolucao e real.',
        evento: 'UFC Fight Night',
        data: 'Jul 2025',
      },
      insight: 'Ambas finalizaram Ribas no R2, mas por caminhos completamente opostos. Jandiroba com armbar (chao), Ricci com TKO (striking). Isso resume a luta inteira: dois estilos opostos que destroem o mesmo tipo de oponente por caminhos diferentes. A questao e qual estilo prevalece quando colidem.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 2.33, valueB: 4.18, maxVal: 6, format: 'decimal', note: 'Ricci tem quase o dobro de volume. Em pe, ela pressiona muito mais.' },
        { label: 'Precisao de Strikes (%)', valueA: 41, valueB: 36, maxVal: 100, format: 'percent', note: 'Jandiroba e mais precisa apesar do menor volume. Qualidade vs quantidade.' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.90, valueB: 5.19, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Ricci absorve MUITO mais. O estilo de volume alto tem custo.' },
        { label: 'Defesa de Strikes (%)', valueA: 55, valueB: 57, maxVal: 100, format: 'percent', note: 'Defesas de strikes praticamente identicas.' },
        { label: 'Takedowns por 15 Min', valueA: 2.9, valueB: 0, maxVal: 5, format: 'decimal', note: 'Jandiroba media 2.9 TDs por 15 min. Conseguiu pelo menos 1 TD contra 11 de 12 oponentes no UFC.' },
        { label: 'Defesa de Takedown (%)', valueA: 74, valueB: 78, maxVal: 100, format: 'percent', note: 'Ricci defende 78%. A chave da luta: se manter esse numero, frustra Jandiroba.' },
        { label: 'Submissoes por 15 Min', valueA: 1.5, valueB: 0.1, maxVal: 3, format: 'decimal', note: 'Diferenca absurda. Jandiroba tenta 15x mais submissoes. Se for pro chao, o perigo e constante.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '37 anos', fighter2: '28 anos', note: 'Ricci 9 anos mais nova. Diferenca significativa de frescor fisico.' },
        { label: 'Altura', fighter1: '5\'3" (160cm)', fighter2: '5\'1" (155cm)', note: 'Jandiroba 5cm mais alta' },
        { label: 'Envergadura', fighter1: '64" (163cm)', fighter2: '61" (155cm)', note: 'Jandiroba com 3 polegadas de vantagem' },
        { label: 'Peso no Weigh-In', fighter1: '116 lbs (tolerancia)', fighter2: '115.5 lbs', note: 'Ricci cortou mais limpo' },
        { label: 'BJJ', fighter1: 'Faixa Preta', fighter2: 'Faixa Preta', note: 'Ambas faixas pretas, mas Jandiroba e elite mundial em submissoes' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking em Pe', valueA: 45, valueB: 70, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Ricci tem volume absurdo (4.18 vs 2.33 SLpM) e mostrou poder de finalizacao com o TKO sobre Ribas. Em pe, Ricci domina o ritmo.' },
        { label: 'Wrestling / Takedowns', valueA: 78, valueB: 55, labelA: 'Muito Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Jandiroba encaixou pelo menos 1 TD contra 11 de 12 oponentes no UFC. Media de 2.9 por 15 min. Persistente e tecnica.' },
        { label: 'Jiu-Jitsu / Submissoes', valueA: 95, valueB: 55, labelA: 'Excelente', labelB: 'Bom', advantage: 'fighter1', advantage_note: '14 subs na carreira (1.5/15min) vs 3 subs (0.1/15min). 3 subs no WSW UFC, empatada em 2o na historia. No chao, nao tem comparacao.' },
        { label: 'Defesa e Durabilidade', valueA: 70, valueB: 50, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Jandiroba nunca foi finalizada (todas as 4 derrotas por decisao). Ricci foi parada por Fiorot (TKO). Jandiroba absorve menos strikes.' },
        { label: 'Cardio e Ritmo em 5 Rounds', valueA: 75, valueB: 55, labelA: 'Muito Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Jandiroba lutou 5 rounds contra Dern e aguentou. Ricci NUNCA lutou 5 rounds no UFC. Incognita total. Em 5 rounds, a vantagem de cardio e massiva.' },
        { label: 'Experiencia de Elite', valueA: 85, valueB: 55, labelA: 'Muito Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Jandiroba lutou pelo titulo, submeteu Lemos (#4), tem 37 anos de experiencia no tatame. Ricci nunca venceu uma top 5.' },
      ],
      insight: 'A luta se resume a onde acontece. Em pe, Ricci domina com volume e agora tem poder de finalizacao. No chao, Jandiroba e absolutamente dominante com jiu-jitsu de elite mundial. O formato de 5 rounds amplifica a vantagem de Jandiroba: mais tempo pra buscar takedowns, mais chances de levar pro chao. Ricci precisa da melhor defesa de takedown da carreira por 25 minutos. Jandiroba so precisa de um momento.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Jandiroba',
        ko_tko: { count: 1, percent: 5 },
        submission: { count: 14, percent: 64 },
        decision: { count: 7, percent: 32 },
        total_wins: 22,
      },
      fighter2: {
        nome: 'Ricci',
        ko_tko: { count: 2, percent: 17 },
        submission: { count: 3, percent: 25 },
        decision: { count: 7, percent: 58 },
        total_wins: 12,
      },
      insight: 'O contraste e brutal. Jandiroba e 64% finalizadora por submissao, a maior taxa da divisao. Ricci e 58% decisora, acumulando pontos com volume. Se a luta for pro chao, Jandiroba finaliza. Se ficar em pe, Ricci ganha nos cartoes. A distribuicao de vitorias e o mapa da luta: chao = Jandiroba, pe = Ricci. O formato de 5 rounds da mais chances pra submissao.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1-R2',
          danger_level: 7,
          danger_label: 'VANTAGEM JANDIROBA',
          color: 'red',
          title: 'A Carcara Caca Cedo',
          description: 'Jandiroba vai buscar o takedown nos primeiros minutos. Se conseguir levar pro chao cedo, pode transitar pra mount e buscar o armbar. O historico dela mostra que as submissoes geralmente vem no R1-R2 (Lemos R2, Ribas R2). Se Ricci sobreviver os 2 primeiros rounds defendendo takedowns, o momentum muda.',
        },
        {
          rounds: 'R3',
          danger_level: 5,
          danger_label: 'EQUILIBRADO',
          color: 'gold',
          title: 'O Round Divisor',
          description: 'Se Ricci defendeu os takedowns em R1-R2, o R3 e o ponto de virada onde o volume dela pode dominar. Se Jandiroba controlou os rounds iniciais com grappling, o R3 e onde ela consolida a vantagem. O round do meio em lutas de 5 rounds e frequentemente o que decide o vencedor.',
        },
        {
          rounds: 'R4-R5',
          danger_level: 6,
          danger_label: 'VANTAGEM JANDIROBA',
          color: 'green',
          title: 'Territorio Desconhecido para Ricci',
          description: 'Ricci NUNCA lutou R4 e R5 no UFC. Jandiroba foi competitiva em 5 rounds contra Dern. Se a luta estiver apertada, os championship rounds favorecem massivamente a grappler com experiencia de 5 rounds. A fadiga pode comprometer a defesa de takedown de Ricci, abrindo portas pra submissao.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'AlertTriangle', title: 'Weigh-In: 116 lbs (Tolerancia)', fighter: 'Jandiroba', risk_level: 'RISCO BAIXO', risk_color: 'yellow', description: 'Jandiroba usou a tolerancia de 1 lb permitida em lutas sem titulo. Nao e miss de peso, mas indica que o corte pode ter sido mais dificil. Aos 37 anos, a desidratacao e mais desgastante. Monitorar nos primeiros minutos se esta lenta.' },
        { icon: 'Clock', title: 'Idade: 37 anos vs 28 anos', fighter: 'Jandiroba', risk_level: 'RISCO MEDIO', risk_color: 'yellow', description: 'Diferenca de 9 anos e significativa. Ricci esta no auge fisico. Jandiroba depende mais de tecnica do que atletismo. Em 5 rounds, a diferenca de idade pode aparecer, mas o jiu-jitsu envelhece melhor que o striking.' },
        { icon: 'TrendingUp', title: 'TKO sobre Ribas: Evolucao Real', fighter: 'Ricci', risk_level: 'POSITIVO', risk_color: 'green', description: 'O TKO sobre Ribas em julho 2025 mostrou uma Ricci mais perigosa do que nunca. Cotoveladas, ground and pound. Nao e mais so volume e pontos. A confianca e o poder estao no auge.' },
        { icon: 'Target', title: 'TD contra 11 de 12 Oponentes no UFC', fighter: 'Jandiroba', risk_level: 'ENORME POSITIVO', risk_color: 'green', description: 'Jandiroba encaixou pelo menos 1 takedown contra 11 de 12 oponentes no UFC. Nao importa a defesa de TD do oponente. Em algum momento, ela leva pro chao. A persistencia e sobrenatural.' },
        { icon: 'Zap', title: '5 Rounds: Inedito pra Ricci', fighter: 'Ricci', risk_level: 'RISCO MEDIO', risk_color: 'yellow', description: 'Ricci nunca lutou 5 rounds no UFC. Nao sabemos como o corpo dela responde apos 15 minutos. O volume de 4.18 SLpM pode cair significativamente nos R4-R5. Incognita total.' },
        { icon: 'Brain', title: 'Derrota no Titulo: Fator Psicologico', fighter: 'Jandiroba', risk_level: 'NEUTRO', risk_color: 'neutral', description: 'Perder a disputa de titulo pode pesar mentalmente. Mas Jandiroba e uma veterana de 37 anos que ja voltou de derrotas. A resiliencia psicologica dela e comprovada.' },
        { icon: 'Shield', title: 'Nunca Finalizada em 26 Lutas', fighter: 'Jandiroba', risk_level: 'POSITIVO', risk_color: 'green', description: 'Jandiroba nunca foi finalizada na carreira. Todas as 4 derrotas foram por decisao. Mesmo que Ricci domine em pe, dificilmente vai parar Jandiroba. A luta vai a distancia ou Jandiroba finaliza.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Jandiroba',
        total_probability: 56,
        scenarios: [
          { name: 'Dominio no Chao em 5 Rounds', probability: 26, method: 'Decisao Unanime', description: 'Jandiroba encaixa 2-3 takedowns por round, acumula tempo de controle massivo ao longo de 25 minutos. Mesmo sem submissao, o grappling constante e suficiente pra vencer nos cartoes. O formato de 5 rounds amplifica essa estrategia.' },
          { name: 'Armbar da Carcara', probability: 18, method: 'Submissao R1-R3', description: 'Jandiroba leva pro chao, transita pra posicao dominante e isola o braco. O armbar vem como contra Lemos e Ribas. 14 subs na carreira, 1.5 tentativas por 15 min. Se pegar posicao, acabou.' },
          { name: 'Fadiga de Ricci no Championship Rounds', probability: 12, method: 'Submissao R4-R5', description: 'Ricci defende os takedowns nos primeiros 3 rounds, mas cansa no R4-R5 (nunca lutou 5 rounds). A defesa de takedown cai, Jandiroba finalmente leva pro chao e finaliza a oponente exausta.' },
        ],
      },
      fighter2: {
        nome: 'Ricci',
        total_probability: 42,
        scenarios: [
          { name: 'Volume Implacavel', probability: 20, method: 'Decisao Unanime', description: 'Ricci defende takedowns (78% TD Def) e mantem a luta em pe por 5 rounds. O volume de 4.18 SLpM domina os 2.33 de Jandiroba. Vence nos pontos com pressao constante.' },
          { name: 'TKO por Acumulo', probability: 10, method: 'TKO R2-R3', description: 'Ricci conecta cotoveladas e socos limpos repetidamente, como fez contra Ribas. Jandiroba nao consegue o takedown e o volume acumula dano. O arbitro para.' },
          { name: 'Decisao Apertada', probability: 12, method: 'Decisao Dividida', description: 'Luta apertada com rounds divididos. Ricci vence 3 rounds por volume em pe, Jandiroba vence 2 por controle no chao. Os juizes premiam a atividade de Ricci.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Virna Jandiroba',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime',
      confidence_score: 6,
      confidence_label: 'MEDIA',
      explanation: 'A mudanca pro formato de 5 rounds e o fator decisivo pos weigh-in. Jandiroba ja lutou 5 rounds contra Dern e se manteve competitiva. Ricci NUNCA experimentou esse formato. Em 3 rounds, Ricci tinha chance real de defender takedowns e vencer por volume. Em 5 rounds, Jandiroba tem mais oportunidades pra impor o grappling, e a fadiga pode comprometer a defesa de takedown de Ricci nos championship rounds. O weigh-in de 116 lbs de Jandiroba e nota de rodape, nao alarme. A tolerancia existe por um motivo e ela a usou. As odds de -125 a -130 refletem uma luta apertada, e ela E apertada. Mas o formato de 5 rounds inclina a balanca pra Jandiroba.',
      x_factor: {
        title: '5 Rounds: O Fator Que Muda Tudo',
        description: 'Ricci nunca lutou 5 rounds no UFC. Jandiroba sim (contra Dern pelo titulo). Cada round adicional e mais uma chance de takedown, mais tempo pra acumular controle, mais fadiga pra Ricci defender. Esse formato transforma uma luta 55-45 em 56-42.',
      },
      upset_alert: {
        title: 'Ricci Evoluiu Mais do Que as Odds Sugerem',
        description: 'O TKO sobre Ribas mostrou uma Ricci diferente. Se ela mantiver a defesa de TD nos primeiros 3 rounds e o volume alto, pode vencer nos cartoes mesmo em 5 rounds. A defesa de takedown de 78% e real e pode frustrar Jandiroba.',
      },
      probabilities: {
        fighter1: { nome: 'Jandiroba', percent: 56 },
        fighter2: { nome: 'Ricci', percent: 42 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Jandiroba ML (-125)', reasoning: 'O grappling de elite, a experiencia em 5 rounds e os oponentes em comum favorecem Jandiroba. -125 e preco justo pra favorita num co-main de 5 rounds.' },
        method: { pick: 'Jandiroba por Submissao', reasoning: '14 subs na carreira, 1.5 tentativas por 15 min. O formato de 5 rounds da MAIS tempo pra encaixar. Se Ricci cansar nos R4-R5, a sub fica ainda mais provavel.' },
        over_under: { pick: 'Over 2.5 Rounds', rounds: 2.5, reasoning: 'As odds de -445 no over refletem que ambas sao duras de finalizar. Jandiroba geralmente precisa de tempo pra impor o grappling. O over e a aposta mais segura.' },
        best_value: 'Jandiroba por submissao tem valor solido. O formato de 5 rounds amplifica as chances de finalizacao. 14 subs na carreira nao mentem.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Primeiro Takedown nos 3 Minutos Iniciais', icon: 'Target', description: 'Se Jandiroba encaixar o takedown cedo, e sinal de que o game plan esta funcionando e os 5 rounds vao ser longos pra Ricci. Se Ricci defender com sucesso no R1, o momentum e dela.' },
        { num: 2, title: 'Jandiroba Parecendo Lenta? O Corte de Peso', icon: 'AlertTriangle', description: 'Jandiroba bateu 116 lbs (tolerancia). Se nos primeiros minutos ela parecer mais lenta que o normal, o corte de peso pode ser o motivo. Observe o ritmo dos primeiros 2 minutos.' },
        { num: 3, title: 'Volume de Ricci: Acima ou Abaixo de 4 SLpM?', icon: 'Activity', description: 'A media de Ricci e 4.18 SLpM. Se ela estiver acima de 4 e Jandiroba nao esta ameacando takedowns, Ricci esta dominando. Se estiver abaixo, pode ser sinal de respeito pelo takedown.' },
        { num: 4, title: 'R4: O Round que Ricci Nunca Viveu', icon: 'Clock', description: 'Ricci nunca lutou o R4 no UFC. Observe a linguagem corporal: ombros caidos, respiracao pesada, passos arrastados = fadiga real. Postura ereta e volume alto = Ricci surpreendendo.' },
        { num: 5, title: 'Cotoveladas de Ricci no Clinch', icon: 'Zap', description: 'O TKO sobre Ribas veio de cotoveladas. Se Ricci esta conectando cotoveladas limpas no clinch ou na saida de takedowns, pode machucar Jandiroba. Observe especialmente nas transicoes de volta pra pe.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'POS WEIGH-INS', content: 'JANDIROBA VS RICCI\nPOS WEIGH-INS\n\nJandiroba: 116 lbs (tolerancia 1 lb)\nRicci: 115.5 lbs\n\n5 ROUNDS no co-main\nIncomum para WSW sem titulo\n\nOdds: Jandiroba -125 a -130\nRicci +105 a +110', color: 'gold' },
        { slide_number: 2, title: 'CARCARA', content: '#3 Peso Palha | #11 P4P Feminino\n37 anos | 22-4 | 14 submissoes\n\nVeio de derrota pelo titulo vs Dern\nLutou 5 rounds e aguentou\n\n2.9 TDs/15min\nTD contra 11 de 12 oponentes UFC\n3 subs no WSW (2a na historia)\n\n116 lbs na balanca (tolerancia)', color: 'red' },
        { slide_number: 3, title: 'BABY SHARK', content: '#7 Peso Palha | 28 anos\n12-3 | Vem de TKO sobre Ribas\n\n4.18 SLpM (quase dobro de Jandiroba)\n78% defesa de takedown\n\nNUNCA lutou 5 rounds no UFC\n115.5 lbs na balanca (limpo)\n\nSe mantiver em pe, domina.', color: 'blue' },
        { slide_number: 4, title: 'OPONENTE EM COMUM', content: 'AMANDA RIBAS:\nJandiroba: Sub R2 (armbar)\nRicci: TKO R2 (cotovelada)\n\nAmbas finalizaram. Caminhos opostos.\nChao vs Pe. A luta resumida.\n\nANGELA HILL:\nAmbas: Vitoria por UD\n\n5 rounds mudam TUDO.', color: 'gold' },
        { slide_number: 5, title: 'PREVISAO', content: 'JANDIROBA por Decisao Unanime\nConfianca: MEDIA (6/10)\n\n56% Jandiroba / 42% Ricci\n\n5 rounds = mais chances de TD\nRicci nunca lutou 5 rounds\nA fadiga pode abrir portas\n\nMas 78% TD Def e real.', color: 'red' },
      ],
      twitter: [
        { num: '1/5', text: 'POS WEIGH-INS: Jandiroba 116 lbs (tolerancia), Ricci 115.5 lbs. Cortes sem drama. Mas o formato de 5 ROUNDS no co-main muda tudo. Thread:' },
        { num: '2/5', text: 'Jandiroba usou a tolerancia de 1 lb permitida. Nao e miss de peso. Mas aos 37, o corte pode estar ficando mais dificil. Ricci cortou limpo. 9 anos mais nova, auge fisico. O corpo conta.' },
        { num: '3/5', text: '5 rounds e INCOMUM pra WSW sem titulo. Jandiroba lutou 5 contra Dern e aguentou. Ricci NUNCA lutou 5 rounds no UFC. O formato favorece a grappler persistente. Mais chances de TD, mais fadiga pra defender.' },
        { num: '4/5', text: 'Oponente em comum: Amanda Ribas. Jandiroba finalizou com armbar R2. Ricci finalizou com TKO R2. Ambas destroem Ribas, por caminhos opostos. Chao vs pe. A luta inteira resumida.' },
        { num: '5/5', text: 'Pick pos weigh-in: Jandiroba por decisao. 56-42. O formato de 5 rounds e o X-factor. Melhor valor: Jandiroba por sub (14 na carreira, mais tempo pra encaixar). Over 2.5 rds a -445 e seguro.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: 'Jandiroba bateu 116 lbs usando a tolerancia. Ricci bateu 115.5. Mas o dado mais importante do weigh-in NAO e o peso. E o formato: 5 rounds. E isso muda TUDO.' },
        { time: '10-25s', title: 'Weigh-In Intel', text: 'Jandiroba aos 37 usando a tolerancia de 1 lb. Nao e miss, mas indica que o corte ta ficando mais dificil. Ricci cortou limpo aos 28. O corpo mais jovem recupera mais rapido. Em 5 rounds, essa diferenca pode aparecer.' },
        { time: '25-40s', title: 'O Formato de 5 Rounds', text: 'Jandiroba lutou 5 rounds contra Dern pelo titulo. Aguentou. Ricci nunca foi alem do R3. Em 3 rounds, Ricci tinha chance de defender takedowns e vencer no volume. Em 5, Jandiroba tem MUITO mais tempo pra levar pro chao. A fadiga nos R4-R5 pode destruir a defesa de TD de 78%.' },
        { time: '40-55s', title: 'Oponentes em Comum', text: 'Ambas finalizaram Amanda Ribas no R2. Jandiroba com armbar, Ricci com TKO. Dois caminhos, mesmo resultado. Angela Hill: ambas venceram por UD. Contra Godinez, Jandiroba venceu, Ricci tambem. O calibre geral favorece Jandiroba.' },
        { time: '55-65s', title: 'Pick', text: 'Jandiroba por decisao unanime. 56% de probabilidade. O formato de 5 rounds e o X-factor. Melhor aposta: Jandiroba por submissao. 14 na carreira, mais tempo pra encaixar. Cuidado com Ricci se ela defender os TDs nos primeiros 3 rounds.' },
      ],
      tiktok: [
        { hook: 'Jandiroba bateu 116 lbs na balanca. Mas o dado que REALMENTE importa e outro.', body: '5 rounds no co-main. Jandiroba ja lutou 5 contra Dern. Ricci NUNCA foi alem do R3. Em 3 rounds, era luta de 55-45. Em 5, o grappling de Jandiroba tem muito mais tempo pra funcionar. 14 submissoes na carreira. 2.9 TDs por 15 min. TD contra 11 de 12 oponentes. Cada round extra e uma chance a mais de levar pro chao.', cta: 'Ricci aguenta 5 rounds? Comenta!' },
        { hook: 'Ambas FINALIZARAM Amanda Ribas no R2. Mas por caminhos completamente opostos.', body: 'Jandiroba com armbar. Ricci com TKO por cotovelada. Chao vs pe. A luta inteira resumida em um oponente em comum. Agora em 5 rounds, quem impoe o estilo? Jandiroba tem 14 submissoes. Ricci tem 4.18 strikes por minuto. A resposta provavelmente esta nos R4-R5.', cta: 'Chao ou pe? Quem ganha? Comenta!' },
        { hook: 'Ricci NUNCA lutou 5 rounds. E acabou de aceitar 5 rounds contra a melhor grappler da divisao.', body: 'Jandiroba tem 14 finalizacoes, 3 submissoes no WSW do UFC, tentou takedown contra 11 de 12 oponentes. A defesa de TD de 78% de Ricci e boa. Mas por 25 minutos? Contra a mulher mais persistente do peso palha? A fadiga e o inimigo invisivel nessa luta.', cta: '78% de defesa de TD por 5 rounds. Possivel ou nao? Comenta!' },
      ],
      headlines: [
        'Jandiroba 116 lbs, Ricci 115.5: O Peso Nao E a Historia. 5 Rounds E.',
        'Ambas Finalizaram Ribas no R2: Armbar vs TKO. Agora uma Contra a Outra.',
        '5 Rounds no Co-Main: O Formato que Favorece a Carcara',
        'Ricci Nunca Lutou 5 Rounds. Agora Vai Contra a Melhor Grappler da Divisao.',
        'Jandiroba Persegue Dern no Recorde de Submissoes do Peso Palha',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '-125 a -130',
        fighter2_odds: '+105 a +110',
        fighter1_name: 'Virna Jandiroba',
        fighter2_name: 'Tabatha Ricci',
        source: 'Range de casas de apostas (abril 2026)',
      },
      edges: [
        { icon: 'Target', titulo: 'Takedown Contra 11 de 12 no UFC', stat_headline: 'JANDIROBA ENCAIXOU TD CONTRA 11 DE 12 OPONENTES NO UFC. 2.9 TDs POR 15 MIN.', contexto: 'Nao importa a defesa de takedown do oponente. Jandiroba encontra um jeito de levar pro chao. A persistencia e sobrenatural. Em 5 rounds, sao potencialmente 10+ tentativas de TD.', implicacao_aposta: 'Favorece Jandiroba ML e Jandiroba por submissao. O formato de 5 rounds amplifica essa vantagem.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Activity', titulo: 'Volume de Strikes: Dobro de Atividade', stat_headline: '4.18 SLPM (RICCI) VS 2.33 SLPM (JANDIROBA). QUASE O DOBRO.', contexto: 'Em pe, Ricci domina completamente a atividade. Se a defesa de TD funcionar, o volume acumula pontos rapidamente. Mas Ricci tambem absorve muito: 5.19 SApM.', implicacao_aposta: 'Se voce acredita que Ricci defende TDs por 5 rounds, o ML dela a +110 tem valor.', edge_level: 'moderado', fighter_side: 'fighter2' },
        { icon: 'Clock', titulo: '5 Rounds: Ricci Nunca Esteve La', stat_headline: 'RICCI: ZERO LUTAS DE 5 ROUNDS NO UFC. JANDIROBA: 5 RDS VS DERN PELO TITULO.', contexto: 'O formato e a maior mudanca pos weigh-in. Em 3 rounds, Ricci tinha chance real. Em 5, a incognita do cardio e um risco enorme. A defesa de TD pode degradar nos R4-R5.', implicacao_aposta: 'Favorece props de "luta acabar em rounds tardios" e Jandiroba por sub nos R4-R5.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Shield', titulo: 'Over 2.5 Rounds: Linhas Pesadas', stat_headline: 'OVER 2.5 A -445. UNDER 2.5 A +310. O MERCADO CONFIA NA DURACAO.', contexto: 'Jandiroba nunca foi finalizada (4 derrotas por decisao). Ricci e dura tambem. A combinacao de defesa de TD decente e durabilidade sugere luta longa. As odds refletem isso.', implicacao_aposta: 'Over 2.5 e praticamente garantido. Nao tem valor a -445. Olhe pra metodo especifico.', edge_level: 'leve', fighter_side: 'neutral' },
        { icon: 'Brain', titulo: 'Oponentes em Comum: Padrao Claro', stat_headline: 'RIBAS: AMBAS FINALIZARAM R2. HILL: AMBAS UD. GODINEZ: JANDIROBA UD, RICCI UD.', contexto: 'Os oponentes em comum mostram estilos diferentes destruindo os mesmos oponentes. Jandiroba no chao, Ricci em pe. A questao e qual estilo domina quando colidem.', implicacao_aposta: 'Os oponentes em comum nao dao edge claro de mercado. Mas o nivel geral de oposicao favorece Jandiroba.', edge_level: 'moderado', fighter_side: 'fighter1' },
      ],
      value_picks: [
        { tipo: 'Moneyline', pick: 'Jandiroba ML (-125)', odds: '-125', confianca: 'media', raciocinio: 'Favorita leve com bons motivos: grappling de elite, experiencia em 5 rounds, persistencia nos takedowns. -125 e preco justo. Nao e pechincha, mas e a aposta mais segura.' },
        { tipo: 'Metodo', pick: 'Jandiroba por Submissao', odds: '+250', confianca: 'media', edge_vs_mercado: '14 submissoes na carreira e o formato de 5 rounds dao mais tempo pra finalizar. Se as odds estiverem em +250, tem valor.', raciocinio: 'O cenario de submissao e realista: Jandiroba leva pro chao nos R4-R5 quando Ricci esta cansada e finaliza. 14 subs na carreira. O formato amplifica as chances.' },
        { tipo: 'Over/Under', pick: 'Over 2.5 Rounds', odds: '-445', confianca: 'alta', raciocinio: 'Seguro mas sem valor no preco. Ambas sao duras de finalizar. Jandiroba geralmente precisa de tempo. Ricci nunca foi submetida no UFC. A luta provavelmente vai pelo menos ao R3.' },
        { tipo: 'Prop', pick: 'Luta vai a distancia', odds: '+110', confianca: 'media', raciocinio: 'Jandiroba pode controlar por 5 rounds sem finalizar (como fez contra Godinez e Hill). Ricci defendendo TDs o suficiente pra levar a decisao. +110 pra ir a distancia e valor decente.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Ricci por KO/TKO',
        descricao: 'Ricci tem 2 KOs em 12 vitorias. O TKO sobre Ribas foi impressionante, mas foi a excecao. Jandiroba nunca foi finalizada em 26 lutas profissionais. Apostar em Ricci parando Jandiroba e ir contra TODO o historico. Se Ricci vencer, e por decisao.',
      },
      disclaimer: 'Analise pos weigh-ins para fins informativos. Aposte com responsabilidade.',
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'jandiroba-vs-ricci-pos-weighins');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
