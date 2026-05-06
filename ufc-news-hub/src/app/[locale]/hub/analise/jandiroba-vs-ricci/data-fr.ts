import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'jandiroba-vs-ricci',
  evento_id: null,
  slug: 'jandiroba-vs-ricci',
  titulo: 'Jandiroba vs Ricci: Duelo Brasileiro no Peso Palha',
  subtitulo: 'A especialista em submissoes #3 do mundo, apres une defaite pour le titre, contra a Baby Shark en ascension. Brasil vs Brasil no co-main event.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,60m', envergadura: '163cm', idade: 37, academia: 'Team Velame' },
      fighter2: { altura: '1,55m', envergadura: '155cm', idade: 31, academia: 'Paragon BJJ / Black House' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decision Unanime',
    confidence: 'MOYENNE',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Grappling de Elite', edge: 'fighter1', impact: 9, description: 'Jandiroba tem 14 submissoes na carreira e 1.5 tentativas de sub por 15 min. ceinture noire 2eme degre de BJJ. Le sol est le territoire dela.' },
      { factor: 'Volume de Strikes', edge: 'fighter2', impact: 7, description: 'Ricci conecta 4.18 strikes significativos por minuto contra 2.33 de Jandiroba. Debout, Ricci domina o volume.' },
      { factor: 'Defesa de Takedown', edge: 'fighter2', impact: 6, description: 'Ricci defende 78% dos takedowns, o que pode manter a luta Debout onde ela tem vantagem.' },
    ],
    xFactor: {
      title: 'O Armbar de Jandiroba',
      description: 'Jandiroba e possivelmente a melhor armbar artist do UFC feminino. Se conseguir levar au sol, qualquer braço esta em perigo.',
    },
  },
  fighter1_info: {
    nome: 'Virna Jandiroba',
    apelido: 'Carcara',
    record: '22-4-0',
    ranking: '#3 Poids Paille',
    ultimasLutas: [
      { result: 'L', opponent: 'Mackenzie Dern', method: 'Decision Unanime', event: 'UFC 321' },
      { result: 'W', opponent: 'Yan Xiaonan', method: 'Decision Unanime', event: 'UFC 314' },
      { result: 'W', opponent: 'Amanda Lemos', method: 'Submissao R2', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Tabatha Ricci',
    apelido: 'Baby Shark',
    record: '12-3-0',
    ranking: '#7 Poids Paille',
    ultimasLutas: [
      { result: 'W', opponent: 'Amanda Ribas', method: 'TKO R2', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Yan Xiaonan', method: 'Decision Unanime', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Angela Hill', method: 'Decision Unanime', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan',
  evento_data: '4 Avril 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Poids Paille Feminin (115 lbs)',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Moicano vs Duncan',
      evento_data: '4 Avril 2026',
      evento_local: 'UFC Apex, Las Vegas',
      categoria_peso: 'Poids Paille Feminin (115 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Brasil vs Brasil',
      tagline_sub: 'A rainha das submissoes apres une defaite pour le titre contra a Baby Shark en ascension. Duas brasileiras, dois estilos opostos.',
      fighter1: {
        nome_completo: 'Virna "Carcara" Jandiroba',
        apelido: 'Carcara',
        sobrenome: 'Jandiroba',
        record: '22-4-0',
        ranking: '#3 Poids Paille',
        info_extra: 'Serrinha, Bahia, Brasil | Team Velame | 37 ans',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Tabatha "Baby Shark" Ricci',
        apelido: 'Baby Shark',
        sobrenome: 'Ricci',
        record: '12-3-0',
        ranking: '#7 Poids Paille',
        info_extra: 'Birigui, SP, Brasil | Paragon BJJ | 31 ans',
        imagem_fullbody_url: null,
      },
    },

    narrativa: {
      html_content: `
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">A Carcara Ferida</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/5 via-transparent to-ufc-red/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-ufc-red/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-ufc-red">Virna Jandiroba</strong> e a melhor submission artist do peso palha feminino. Ponto. 14 finalizacoes na carreira, faixa preta de BJJ 2o grau, duas vezes Performance of the Night por armbar. A mulher que submeteu Amanda Lemos, que TKO'd Kanako Murata, que venceu Marina Rodriguez, Yan Xiaonan e Loopy Godinez em sequencia. Construiu uma sequencia de 6 vitorias que a levou ate a disputa de titulo contra Mackenzie Dern no UFC 321. E perdeu. Decisao unanime em 5 rounds. Agora, aos 37 anos, precisa provar que a derrota foi um acidente de percurso e nao o inicio do fim.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/20 to-ufc-red/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Out 2025</p>
                <p class="font-display text-2xl text-white mb-2">DERN</p>
                <p class="text-xs text-white/50 leading-relaxed">Decisao Unanime. Titulo vago em jogo. 5 rounds de luta competitiva, mas Dern controlou os momentos decisivos.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Titulo em Jogo</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/20 to-ufc-red/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Abr 2025</p>
                <p class="font-display text-2xl text-white mb-2">XIAONAN</p>
                <p class="text-xs text-white/50 leading-relaxed">Decisao Unanime. Jandiroba dominou com grappling. A mesma Xiaonan que derrotou Ricci.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Vitoria Solida</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Baby Shark em Ascensao</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-blue-400">Tabatha Ricci</strong> saiu de Birigui, interior de Sao Paulo, foi pro Japao competir em SEIZA, depois pra California treinar nas melhores academias. Faixa preta de jiu-jitsu e judo, com base solida de Muay Thai. No UFC, construiu uma campanha impressionante: 8-3, com a ultima vitoria sendo um TKO sobre Amanda Ribas que mostrou uma nova Ricci, mais agressiva e confiante no striking. E a #7 do ranking e esta no melhor momento da carreira.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Jul 2025</p>
                <p class="font-display text-2xl text-white mb-2">RIBAS</p>
                <p class="text-xs text-white/50 leading-relaxed">TKO R2. Cotovelada e socos. Ricci mostrou poder de finalizacao no striking pela primeira vez.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">TKO Finish</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Ago 2024</p>
                <p class="font-display text-2xl text-white mb-2">HILL</p>
                <p class="text-xs text-white/50 leading-relaxed">Decisao Unanime. Controlou a luta inteira com volume e pressao constante.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">Volume</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">O Duelo Brasileiro</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Oponente em Comum: Xiaonan</p>
                <p class="text-sm text-white/60 leading-relaxed">Jandiroba venceu Xiaonan por decisao unanime. Ricci perdeu pra mesma Xiaonan por decisao unanime. Isso sugere que o nivel de Jandiroba e superior, pelo menos no papel.</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">A Questao Central</p>
                <p class="text-sm text-white/60 leading-relaxed">Ricci consegue manter a luta em pe com sua defesa de TD de 78%? Ou Jandiroba leva pro chao e o jiu-jitsu de elite dela decide? Esse e o xadrez dessa luta.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: '#3 Poids Paille', fighter2: '#7 Poids Paille' },
        { dimensao: 'Sequencia', fighter1: 'Vient de perdre no titulo', fighter2: 'Vient d\'un TKO sur Ribas' },
        { dimensao: 'Narrativa', fighter1: 'Voltar a vencer apos derrota no titulo aos 37', fighter2: 'Derrotar uma top 3 e se aproximar do titulo' },
        { dimensao: 'Risco', fighter1: '2a derrota seguida A 37 ans complica muito', fighter2: 'Perder pra #3 nao e desonra, mais freia o momentum' },
        { dimensao: 'Recompensa', fighter1: 'Manter posicao de top 3 e aguardar nova chance de titulo', fighter2: 'Entrar no top 5 e se posicionar pra titulo' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'A CARCARA NAO PARA',
          subtitulo: 'Jandiroba prova que a derrota pra Dern foi acidente e domina com grappling de elite',
          consequencias: [
            { tag: 'RANKING', texto: 'Jandiroba se mantem no top 3 e volta a fila do titulo' },
            { tag: 'NARRATIVA', texto: 'A 37 ans, mostra que ainda e a segunda melhor grappler da divisao (atras de Dern)' },
            { tag: 'PROXIMA', texto: 'Possivel revanche com Dern ou luta contra Tatiana Suarez' },
          ],
          proxima_luta: 'Jandiroba vs Suarez ou revanche Dern pelo titulo',
        },
        fighter2_vence: {
          titulo: 'BABY SHARK COME A CARCARA',
          subtitulo: 'Ricci confirma a evolucao com vitoria sobre top 3 e se posiciona como proxima desafiante',
          consequencias: [
            { tag: 'ASCENSAO', texto: 'Ricci entra no top 5 com a maior vitoria da carreira' },
            { tag: 'EVOLUCAO', texto: 'O TKO sobre Ribas nao foi acidente. Ricci e agora uma ameaca completa.' },
            { tag: 'JANDIROBA', texto: '2a derrota seguida A 37 ans. Pode ser o inicio do declinio.' },
          ],
          proxima_luta: 'Ricci vs top 3 ou disputa de titulo',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Virna Jandiroba',
        color: 'red',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Mackenzie Dern', result: 'L', method: 'Decision Unanime', opponent_rank: '#2 WSW', quality_score: 5, quality_label: 'Excellent', note: 'Luta pelo titulo vago do peso palha. 5 rounds competitivos, mas Dern controlou os momentos chave. Derrota honrosa.' },
          { date: 'Abr 2025', opponent: 'Yan Xiaonan', result: 'W', method: 'Decision Unanime', opponent_rank: '#5 WSW', quality_score: 4, quality_label: 'Tres Bon', note: 'Dominou com grappling. Xiaonan nao teve resposta pro takedown de Jandiroba.' },
          { date: 'Jul 2024', opponent: 'Amanda Lemos', result: 'W', method: 'Submissao R2', opponent_rank: '#4 WSW', quality_score: 4, quality_label: 'Tres Bon', note: 'Armbar classica. Lemos e maior e mais forte, mas o jiu-jitsu de Jandiroba foi demais. POTN.' },
          { date: 'Mar 2024', opponent: 'Loopy Godinez', result: 'W', method: 'Decision Unanime', opponent_rank: '#9 WSW', quality_score: 3, quality_label: 'Bon', note: 'Vitoria solida por pontos. Voltou de cirurgia no joelho e mostrou que estava 100%.' },
          { date: 'Mai 2023', opponent: 'Marina Rodriguez', result: 'W', method: 'Decision Unanime', opponent_rank: '#5 WSW', quality_score: 3, quality_label: 'Bon', note: 'Controlou com takedowns e pressao no chao.' },
        ],
        momentum_score: 6,
        momentum_label: 'Resilient',
        momentum_trend: 'resilient',
        momentum_note: 'Jandiroba Vient de perdre no titulo, mais o contexto importa: foi contra Dern, a nova campea, em 5 rounds disputados. Antes disso, uma serie de 6 vitorias com nivel de oposicao excelente (Xiaonan, Lemos, Rodriguez, Godinez). A 37 ans, o relogio biologico e uma preocupacao, mais o jiu-jitsu nao envelhece tao rapido quanto o striking.',
      },
      fighter2: {
        nome: 'Tabatha Ricci',
        color: 'blue',
        recent_fights: [
          { date: 'Jul 2025', opponent: 'Amanda Ribas', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bon', note: 'Cotovelada e socos. A primeira finalizacao por strikes no UFC. Mostrou evolucao no striking.' },
          { date: 'Nov 2024', opponent: 'Yan Xiaonan', result: 'L', method: 'Decision Unanime', opponent_rank: '#5 WSW', quality_score: 4, quality_label: 'Tres Bon', note: 'Xiaonan controlou com volume. Ricci nao conseguiu impor seu ritmo.' },
          { date: 'Ago 2024', opponent: 'Angela Hill', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Volume alto. Ricci controlou a distancia com pressao constante.' },
          { date: 'Mai 2024', opponent: 'Tecia Pennington', result: 'W', method: 'Decision Partagee', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Luta apertada. Vitoria por split decision.' },
          { date: 'Nov 2023', opponent: 'Loopy Godinez', result: 'L', method: 'Decision Partagee', opponent_rank: '#9 WSW', quality_score: 3, quality_label: 'Bon', note: 'Derrota muito apertada. Poderia ter ido pra qualquer lado.' },
        ],
        momentum_score: 7,
        momentum_label: 'En Ascension',
        momentum_trend: 'ascending',
        momentum_note: 'Ricci vem do melhor resultado da carreira: TKO sobre Ribas que mostrou uma nova dimensao. Antes disso, perdeu pra Xiaonan (a mesma que Jandiroba venceu), mais o ritmo geral e positivo. A evolucao e visivel luta a luta. A 31 ans, esta no auge fisico e com confianca alta.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Jandiroba',
        media_oponentes: 4,
        media_oponentes_label: 'Tres Bon',
        aproveitamento: '9W-4L (69%)',
        contra_top5: '3W-2L',
      },
      fighter2: {
        nome: 'Ricci',
        media_oponentes: 2,
        media_oponentes_label: 'Moyen',
        aproveitamento: '8W-3L (73%)',
        contra_top5: '0W-2L',
      },
      oponentes_em_comum_count: { fighter1: 3, fighter2: 3 },
      oponentes_em_comum_note: 'Tres oponentes em comum relevantes: Yan Xiaonan (Jandiroba W, Ricci L), Angela Hill (les deux W), e Loopy Godinez (Jandiroba W UD, Ricci L SD). Em todos os casos, Jandiroba teve resultado igual ou melhor que Ricci. Isso sugere uma vantagem clara de nivel.',
    },

    oponente_comum: {
      oponente_nome: 'Yan Xiaonan',
      fighter1_result: {
        resultado: 'Vitoria',
        metodo: 'Decision Unanime',
        duracao: '3 rounds',
        contexto: 'UFC 314, luta ranqueada',
        performance: 'A domine avec grappling. Xiaonan nao teve resposta pros takedowns.',
        evento: 'UFC 314',
        data: 'Abr 2025',
      },
      fighter2_result: {
        resultado: 'Derrota',
        metodo: 'Decision Unanime',
        duracao: '3 rounds',
        contexto: 'UFC Fight Night, luta ranqueada',
        performance: 'Ricci foi superada no volume. Nao conseguiu impor seu jogo.',
        evento: 'UFC Fight Night',
        data: 'Nov 2024',
      },
      insight: 'Jandiroba dominou Xiaonan com grappling, enquanto Ricci foi superada pela mesma oponente no striking. Isso mostra que o wrestling/grappling de Jandiroba e uma arma que Ricci pode ter dificuldade em lidar. Se Jandiroba conseguir o takedown, o precedente contra Xiaonan sugere dominio claro.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Frappes Sig. par Minute', valueA: 2.33, valueB: 4.18, maxVal: 6, format: 'decimal', note: 'Ricci tem quase o dobro de volume. Debout, ela pressiona muito mais.' },
        { label: 'Precision des Frappes (%)', valueA: 41, valueB: 36, maxVal: 100, format: 'percent', note: 'Jandiroba e mais precisa apesar do menor volume. Qualidade vs quantidade.' },
        { label: 'Frappes Absorbees/Min', valueA: 2.90, valueB: 5.19, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Ricci absorve MUITO mais. O estilo agressif de volume tem um custo.' },
        { label: 'Defense de Frappes (%)', valueA: 55, valueB: 57, maxVal: 100, format: 'percent', note: 'Defesas de strikes praticamente identicas.' },
        { label: 'Takedowns par 15 Min', valueA: 2.85, valueB: 2.69, maxVal: 5, format: 'decimal', note: 'Surpreendentemente parecido. Ricci aussi busca takedowns, mais Jandiroba os usa pra controlar.' },
        { label: 'Precision Takedown (%)', valueA: 37, valueB: 37, maxVal: 100, format: 'percent', note: 'Identica. Les deux convertem 37% dos takedowns.' },
        { label: 'Defense Takedown (%)', valueA: 74, valueB: 78, maxVal: 100, format: 'percent', note: 'Ricci defende levemente melhor. A chave da luta: se Ricci mantiver esse 78%, pode frustrar Jandiroba.' },
        { label: 'Soumissions par 15 Min', valueA: 1.5, valueB: 0.1, maxVal: 3, format: 'decimal', note: 'A diferenca absurda. Jandiroba tenta 15x mais submissoes. Se for au sol, o perigo e enorme.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '37 anos', fighter2: '31 anos', note: 'Ricci 6 anos mais nova' },
        { label: 'Taille', fighter1: '1,60m (5\'3")', fighter2: '1,55m (5\'1")', note: 'Jandiroba 5cm mais alta' },
        { label: 'Allonge', fighter1: '163cm (64")', fighter2: '155cm (61")', note: 'Jandiroba com 3 polegadas de vantagem' },
        { label: 'Stance', fighter1: 'Orthodoxe', fighter2: 'Orthodoxe', note: 'Les deux ortodoxas' },
        { label: 'BJJ', fighter1: 'Faixa Preta 2o Grau', fighter2: 'Faixa Preta', note: 'Ambas faixas pretas, mas Jandiroba e elite mundial' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking Debout', valueA: 50, valueB: 65, labelA: 'Moyen', labelB: 'Bon', advantage: 'fighter2', advantage_note: 'Ricci tem volume muito superior (4.18 vs 2.33 SLpM) e recentemente mostrou poder de finalizacao com o TKO sobre Ribas. Em pe, Ricci domina.' },
        { label: 'Wrestling / Takedowns', valueA: 72, valueB: 65, labelA: 'Bon', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'Jandiroba usa takedowns pra levar pro chao onde e dominante. Apesar de Ricci ter boa defesa de TD (78%), Jandiroba e persistente.' },
        { label: 'Jiu-Jitsu / Soumissions', valueA: 95, valueB: 60, labelA: 'Excellent', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'A diferenca e BRUTAL. Jandiroba tem 14 subs na carreira (1.5/15min). Ricci tem 3 subs e 0.1/15min. No chao, e dominio total de Jandiroba.' },
        { label: 'Defense et Durabilite', valueA: 65, valueB: 55, labelA: 'Bon', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'Jandiroba absorve menos (2.90 vs 5.19 SApM) e nunca foi finalizada na carreira (todas as 4 derrotas por decisao). Ricci foi parada por Fiorot (TKO).' },
        { label: 'Cardio et Rythme', valueA: 70, valueB: 68, labelA: 'Bon', labelB: 'Bon', advantage: 'even', advantage_note: 'Jandiroba lutou 5 rounds pelo titulo e aguentou bem. Ricci mantem volume alto em 3 rounds. Ambas tem cardio adequado.' },
        { label: 'Experience d\'Elite', valueA: 85, valueB: 55, labelA: 'Tres Bon', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'Jandiroba lutou pelo titulo, submeteu Lemos (#4), venceu Xiaonan (#5) e Rodriguez (#5). Ricci nunca venceu uma top 5.' },
      ],
      insight: 'A luta se resume a onde acontece. Debout, Ricci tem vantagem clara de volume e poder. au sol, Jandiroba e absolutamente dominant com jiu-jitsu de nivel mundial. A defesa de takedown de Ricci (78%) e boa, mais contra uma especialista como Jandiroba, basta um takedown pra mudar tudo. Se Ricci mantiver Debout por 3 rounds, vence nos pontos. Se Jandiroba levar au sol, a submissao pode vir a qualquer momento.',
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
      insight: 'Jandiroba e dominantemente uma finalizadora: 64% das vitorias por submissao. Ricci e principalmente uma lutadora de pontos: 58% por decisao. Isso conta a historia dos estilos. Jandiroba busca o finish au sol. Ricci busca controlar o ritmo e vencer nos cartoes. Se a luta for au sol, Jandiroba tem historico de finalizar. Se ficar Debout, Ricci ganha o jogo de volume.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 7,
          danger_label: 'VANTAGEM JANDIROBA',
          color: 'red',
          title: 'O Takedown Inicial',
          description: 'Jandiroba vai buscar o takedown tot. Se conseguir levar au sol no R1, pode encaixar posicao e buscar o armbar. Ricci precisa defender o primeiro takedown e estabelecer seu jab e volume. Os primeiros 2 minutos definem o ritmo da luta inteira.',
        },
        {
          rounds: 'R2',
          danger_level: 5,
          danger_label: 'EQUILIBRE',
          color: 'gold',
          title: 'O Round Decisivo',
          description: 'Se Ricci defendeu os takedowns no R1 e estabeleceu volume, o R2 e onde ela pode dominar acumulando pontos. Se Jandiroba levou au sol no R1, o R2 e onde ela pode buscar a submissao com mais urgencia. Round de xadrez.',
        },
        {
          rounds: 'R3',
          danger_level: 6,
          danger_label: 'EQUILIBRE',
          color: 'gold',
          title: 'Urgencia e Risco',
          description: 'Se a luta esta apertada, les deux vao ter que arriscar mais. Jandiroba pode ser mais aggressive nos takedowns. Ricci pode abrir mais a guarda pra conectar. O round final pode ser o mais dangereux justamente pela urgencia.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'Clock', title: 'Idade: 37 ans', fighter: 'Jandiroba', risk_level: 'RISQUE MOYEN', risk_color: 'yellow', description: 'A 37 ans, Jandiroba e uma das mais velhas da divisao. O corpo nao recupera como antes. Contra uma oponente de 31 no auge fisico, cada ano conta.' },
        { icon: 'Shield', title: 'Derrota no Titulo', fighter: 'Jandiroba', risk_level: 'NEUTRE', risk_color: 'neutral', description: 'Perder a disputa de titulo pode ter efeitos psicologicos. Mais Jandiroba e uma veterana que ja voltou de derrotas antes. A resiliencia e o ponto forte dela.' },
        { icon: 'TrendingUp', title: 'TKO sobre Ribas', fighter: 'Ricci', risk_level: 'POSITIF', risk_color: 'green', description: 'O TKO sobre Ribas em julho 2025 mostrou uma Ricci mais dangereuse. Nao e mais so volume, tem poder agora. A confianca esta no auge.' },
        { icon: 'Target', title: 'Armbar de Elite', fighter: 'Jandiroba', risk_level: 'POSITIF', risk_color: 'green', description: 'Jandiroba tem o melhor armbar do peso palha feminino. Recorde de 16 tentativas de submissao na divisao (empatada com Dern). Se pegar um braco, acabou.' },
        { icon: 'Zap', title: 'Vantagem de Alcance', fighter: 'Jandiroba', risk_level: 'POSITIF', risk_color: 'green', description: 'Jandiroba tem 3 polegadas de envergadura a mais (64" vs 61"). Num duelo de striking, essa diferenca ajuda a manter distancia.' },
        { icon: 'Brain', title: 'Oponentes em Comum', fighter: 'Jandiroba', risk_level: 'RISQUE POUR RICCI', risk_color: 'yellow', description: 'Contra Xiaonan e Godinez, Jandiroba venceu e Ricci perdeu. O padrao e claro: Jandiroba lida melhor com oponentes de nivel intermediario-alto.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Jandiroba',
        total_probability: 55,
        scenarios: [
          { name: 'Dominio au sol', probability: 28, method: 'Decision Unanime', description: 'Jandiroba encaixa 2-3 takedowns por round, controla au sol e acumula tempo de controle. Mesmo sem submissao, o controle posicional e suficiente pra vencer nos cartoes. Ricci se frustra tentando se levantar.' },
          { name: 'Armbar Classica', probability: 18, method: 'Submissao R1-R2', description: 'Jandiroba encaixa o takedown, transita pra mount ou side control e isola o braco. O armbar vem como veio contra Lemos, Herrig e Murata. 14 subs na carreira por um motivo.' },
          { name: 'Mista: TD + Pontos', probability: 9, method: 'Decision Partagee', description: 'Luta apertada onde Jandiroba vence 2 rounds por controle au sol e Ricci vence 1 por volume Debout. Decisao dividida pro grappling.' },
        ],
      },
      fighter2: {
        nome: 'Ricci',
        total_probability: 43,
        scenarios: [
          { name: 'Volume Debout', probability: 22, method: 'Decision Unanime', description: 'Ricci defende os takedowns (78% TD Def) e mantem a luta Debout. O volume de 4.18 SLpM domina Jandiroba (2.33 SLpM). Vence nos pontos com pression constante e atividade superior.' },
          { name: 'TKO por Acumulo', probability: 10, method: 'TKO R2-R3', description: 'Ricci conecta strikes limpos repetidamente, como fez contra Ribas. Jandiroba nao tem poder de KO e nao consegue o takedown. O volume acumula dano e o arbitro para.' },
          { name: 'Decisao Apertada', probability: 11, method: 'Decision Partagee', description: 'Luta apertada com rounds disputados. Ricci vence 2 rounds por volume e Jandiroba vence 1 por controle. Os juizes premiam a atividade Debout.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Virna Jandiroba',
      winner_side: 'fighter1',
      predicted_method: 'Decision Unanime',
      confidence_score: 5,
      confidence_label: 'MOYENNE',
      explanation: 'Jandiroba e a lutadora mais completa e testada. O jiu-jitsu de nivel mundial e o diferencial claro dessa luta. Apesar de Ricci ter boa defesa de takedown (78%), Jandiroba e persistente e so precisa de um takedown pra mudar a dinamica. A diferenca de nivel e evidenciada pelos oponentes em comum: Jandiroba venceu Xiaonan e Godinez, Ricci perdeu pra les deux. cependant: se Ricci mantiver Debout, o volume pode ser demais. A defesa de TD de Ricci e o coringa dessa luta. Se funcionar, Ricci vence. Se falhar, Jandiroba domina.',
      x_factor: {
        title: 'A Defesa de Takedown de Ricci',
        description: 'Ricci defende 78% dos takedowns, uma das melhores taxas da divisao. Se ela mantiver essa eficiencia contra Jandiroba, pode frustrar o game plan da baiana e vencer com volume. Esse unico fator pode decidir a luta.',
      },
      upset_alert: {
        title: 'Ricci Mais dangereuse do Que jamais',
        description: 'O TKO sobre Ribas mostrou uma Ricci evoluida. Se ela conectar cotoveladas limpas como fez naquela luta, pode machucar Jandiroba, que absorve 2.90 SApM. O poder de Ricci jamais foi tao alto.',
      },
      probabilities: {
        fighter1: { nome: 'Jandiroba', percent: 55 },
        fighter2: { nome: 'Ricci', percent: 43 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Jandiroba', reasoning: 'O grappling de elite e os oponentes em comum favorecem Jandiroba. E a aposta mais segura do card nessa luta.' },
        method: { pick: 'Jandiroba por Submissao', reasoning: '14 subs na carreira, 1.5 tentativas por 15 min. Se for au sol, a sub e real.' },
        over_under: { pick: 'Over 1.5 Rounds', rounds: 1.5, reasoning: 'Ricci e dificil de finalizar (jamais foi submetida) e Jandiroba pode precisar de tempo pra encaixar o takedown.' },
        best_value: 'Jandiroba por submissao tem bom valor. A taxa de finalizacao dela e historicamente alta contra qualquer oponente.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Primeiro Takedown de Jandiroba', icon: 'Target', description: 'Se Jandiroba encaixar o takedown nos primeiros 3 minutos, e sinal de que o game plan esta funcionando. Se Ricci defender e manter Debout, Jandiroba vai ter que repensar.' },
        { num: 2, title: 'Volume de Ricci Debout', icon: 'Activity', description: 'Observe se Ricci esta lancando mais de 4 strikes por minuto. Se o volume estiver alto e Jandiroba nao esta ameacando takedowns, Ricci esta dominando.' },
        { num: 3, title: 'Tentativas de Submissao', icon: 'Crosshair', description: 'Jandiroba media 1.5 subs por 15 min. Se ela esta tentando armbars e triangles, esta no controle. Se nao esta tentando, nao esta conseguindo posicao.' },
        { num: 4, title: 'Cotoveladas de Ricci', icon: 'Zap', description: 'O TKO sobre Ribas veio de cotoveladas. Se Ricci esta conectando cotoveladas limpas no clinch, pode machucar Jandiroba e mudar a luta.' },
        { num: 5, title: 'O Ritmo no R3', icon: 'Clock', description: 'Se a luta estiver apertada no R3, observe quem toma a iniciativa. Jandiroba vai buscar takedowns desesperadamente. Ricci vai tentar manter distancia. Quem impoe o ritmo nesse round provavelmente ganha a luta.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'JANDIROBA VS RICCI', content: 'UFC FIGHT NIGHT\nApex, Las Vegas | 4 de Abril\n3 Rounds | Peso Palha\n\n#3 vs #7\nBrasil vs Brasil\nGrappling vs Volume\n\nDuelo brasileiro no co-main.', color: 'gold' },
        { slide_number: 2, title: 'CARCARA', content: '#3 Peso Palha | 37 ans\nTeam Velame | Bahia\n\n22-4 | 14 submissoes na carreira\nFaixa preta 2eme degre BJJ\n2x POTN por armbar\n\nVeio de derrota pelo titulo vs Dern.\nPrecisa voltar a vencer.', color: 'red' },
        { slide_number: 3, title: 'BABY SHARK', content: '#7 Peso Palha | 31 ans\nParagon BJJ | Birigui, SP\n\n12-3 | Vient d\'un TKO sur Ribas\nFaixa preta BJJ e Judo\n\n78% defesa de takedown.\nSe mantiver Debout, domina o volume.', color: 'blue' },
        { slide_number: 4, title: 'OPONENTE EM COMUM', content: 'YAN XIAONAN:\nJandiroba: VITORIA (UD)\nRicci: DERROTA (UD)\n\nLOOPY GODINEZ:\nJandiroba: VITORIA (UD)\nRicci: DERROTA (SD)\n\nO padrao e claro.', color: 'gold' },
        { slide_number: 5, title: 'PREVISAO', content: 'JANDIROBA por Decisao Unanime\n\nConfianca: MEDIA\n55% Jandiroba / 43% Ricci\n\nSe for au sol, Jandiroba domina.\nSe ficar Debout, Ricci pode surpreender.\n\nA defesa de TD de Ricci decide tudo.', color: 'red' },
      ],
      twitter: [
        { num: '1/4', text: 'Jandiroba vs Ricci no co-main. Brasil vs Brasil. A rainha do armbar (#3) contra a Baby Shark em ascensao (#7). Thread rapida:' },
        { num: '2/4', text: 'O dado chave: oponentes em comum. Contra Xiaonan, Jandiroba venceu e Ricci perdeu. Contra Godinez, mesmo resultado. A diferenca de nivel e real.' },
        { num: '3/4', text: 'MAS: Ricci defende 78% dos takedowns. Se manter em pe, o volume de 4.18 SLpM destroi os 2.33 de Jandiroba. A defesa de TD e O fator dessa luta.' },
        { num: '4/4', text: 'Pick: Jandiroba por decisao. O jiu-jitsu de elite (14 subs na carreira) e a experiencia contra top 5 fazem a diferenca. Mas cuidado com Ricci, ela ta evoluindo rapido.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: '14 submissoes na carreira. A melhor armbar do peso palha feminino. Virna Jandiroba e uma maquina de jiu-jitsu. Mas Tabatha Ricci tem 78% de defesa de takedown. O que acontece quando a forca irresistivel encontra o objeto imobil?' },
        { time: '10-25s', title: 'Contexto', text: 'Jandiroba, #3, Vient de perdre pelo titulo contra Dern. 37 ans, precisa vencer. Ricci, #7, Vient d\'un TKO sur Ribas. 31 ans, no auge. Les deux brasileiras. Estilos completamente opostos.' },
        { time: '25-40s', title: 'Analise', text: 'Jandiroba: 1.5 tentativas de sub por 15 min, armbar de nivel mundial. Ricci: 4.18 strikes por minuto, volume absurdo. Os oponentes em comum favorecem Jandiroba: venceu Xiaonan e Godinez, Ricci perdeu pra les deux.' },
        { time: '40-55s', title: 'Pick', text: 'Jandiroba por decisao unanime. Se conseguir os takedowns, domina. Ricci precisa da melhor luta da vida dela pra vencer. Comenta quem voce acha e segue pra analise completa.' },
      ],
      tiktok: [
        { hook: 'Ela tem 14 submissoes na carreira e o melhor armbar do UFC feminino.', body: 'Jandiroba vs Ricci. Brasil vs Brasil no co-main. Jandiroba Vient de perdre pelo titulo, mais venceu Xiaonan e Godinez, as mesmas que derrotaram Ricci. Os oponentes em comum nao mentem. Mais Ricci defende 78% dos takedowns e Vient d\'un TKO sur Ribas.', cta: 'Quem ganha o duelo brasileiro? Comenta!' },
      ],
      headlines: [
        'Jandiroba vs Ricci: O Armbar de Elite Contra a Defesa de Takedown de 78%',
        'Brasil vs Brasil: A Carcara Ferida Contra a Baby Shark en ascension',
        'Oponentes em Comum Nao Mentem: Jandiroba e a Favorita Clara',
        'Ricci Pode Surpreender? A Evolucao no Striking E o Coringa',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '-175',
        fighter2_odds: '+145',
        fighter1_name: 'Virna Jandiroba',
        fighter2_name: 'Tabatha Ricci',
        source: 'Estimation basee sur des lignes similaires',
      },
      edges: [
        { icon: 'Target', titulo: 'Submissoes de Jandiroba', stat_headline: '14 SUBMISSOES NA CARREIRA, 1.5 TENTATIVAS POR 15 MIN', contexto: 'Jandiroba e a maior ameaca de submissao do peso palha feminino. O armbar e a arma principal. Recorde empatado com Dern na divisao (16 tentativas).', implicacao_aposta: 'Prop de "luta acabar por submissao" pode ter valor.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Activity', titulo: 'Volume de Ricci', stat_headline: '4.18 SLPM VS 2.33 SLPM. RICCI TEM QUASE O DOBRO DE VOLUME.', contexto: 'Debout, Ricci domina completamente a atividade. Se a luta ficar Debout, ela acumula pontos rapidamente.', implicacao_aposta: 'Se voce acredita que Ricci defende os takedowns, o ML dela tem valor.', edge_level: 'moderado', fighter_side: 'fighter2' },
        { icon: 'Brain', titulo: 'Oponentes em Comum', stat_headline: 'XIAONAN E GODINEZ: JANDIROBA VENCEU, RICCI PERDEU', contexto: 'Contra as mesmas oponentes, Jandiroba teve resultados superiores em todos os casos. Isso e um indicador forte de nivel.', implicacao_aposta: 'Favorece Jandiroba. O mercado pode estar subestimando a diferenca de nivel.', edge_level: 'forte', fighter_side: 'fighter1' },
      ],
      value_picks: [
        { tipo: 'Moneyline', pick: 'Jandiroba ML (-175)', odds: '-175', confianca: 'media', raciocinio: 'Favorita com bom motivo. Nivel superior evidenciado por oponentes em comum. O preco e justo.' },
        { tipo: 'Metodo', pick: 'Jandiroba por Submissao', odds: '+200', confianca: 'media', raciocinio: '14 subs na carreira. Se levar pro chao, a sub e o cenario mais provavel. Bom valor a +200.' },
        { tipo: 'Over/Under', pick: 'Over 1.5 Rounds', odds: '-200', confianca: 'alta', raciocinio: 'Ricci nunca foi submetida no UFC. Jandiroba geralmente precisa de tempo pra encaixar posicao. Dificilmente acaba no R1.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Ricci por KO/TKO',
        descricao: 'Ricci tem seulement 2 KOs em 12 vitorias. O TKO sobre Ribas foi a excecao, nao a regra. Apostar em Ricci por finish e ir contra o historico. Se Ricci vencer, provavelmente e por decisao.',
      },
      disclaimer: 'Analyse statistique a titre informatif. Pariez de maniere responsable.',
    },
  },
};
