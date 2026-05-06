import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'jandiroba-vs-ricci',
  evento_id: null,
  slug: 'jandiroba-vs-ricci',
  titulo: 'Jandiroba vs Ricci: Brazilian showdown no strawweight',
  subtitulo: 'A especialista em submissoes #3 do mundo, coming off a title loss, contra a Baby Shark on the rise. Brazil vs Brazil no co-main event.',
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
    predictedMethod: 'Unanimous Decision',
    confidence: 'MEDIUM',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'grappling de Elite', edge: 'fighter1', impact: 9, description: 'Jandiroba tem 14 submissoes in his career e 1.5 tentativas de sub per 15 min. black belt 2nd degree de BJJ. The ground is the territory dela.' },
      { factor: 'volume of Strikes', edge: 'fighter2', impact: 7, description: 'Ricci conecta 4.18 strikes significativos per minute contra 2.33 de Jandiroba. On the feet, Ricci domina o volume.' },
      { factor: 'Defesa de takedown', edge: 'fighter2', impact: 6, description: 'Ricci defende 78% dos takedowns, o que pode manter a luta On the feet onde ela tem vantagem.' },
    ],
    xFactor: {
      title: 'O armbar de Jandiroba',
      description: 'Jandiroba e possibly a melhor armbar artist do UFC feminino. If he manages to levar to the ground, qualquer arm esta em perigo.',
    },
  },
  fighter1_info: {
    nome: 'Virna Jandiroba',
    apelido: 'Carcara',
    record: '22-4-0',
    ranking: '#3 Strawweight',
    ultimasLutas: [
      { result: 'L', opponent: 'Mackenzie Dern', method: 'Unanimous Decision', event: 'UFC 321' },
      { result: 'W', opponent: 'Yan Xiaonan', method: 'Unanimous Decision', event: 'UFC 314' },
      { result: 'W', opponent: 'Amanda Lemos', method: 'Submissao R2', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Tabatha Ricci',
    apelido: 'Baby Shark',
    record: '12-3-0',
    ranking: '#7 Strawweight',
    ultimasLutas: [
      { result: 'W', opponent: 'Amanda Ribas', method: 'TKO R2', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Yan Xiaonan', method: 'Unanimous Decision', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Angela Hill', method: 'Unanimous Decision', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan',
  evento_data: 'April 4, 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Women\'s Strawweight (115 lbs)',
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
      evento_data: 'April 4, 2026',
      evento_local: 'UFC Apex, Las Vegas',
      categoria_peso: 'Women\'s Strawweight (115 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Brazil vs Brazil',
      tagline_sub: 'A rainha das submissoes coming off a title loss contra a Baby Shark on the rise. Duas brasileiras, dois Opposite styles.',
      fighter1: {
        nome_completo: 'Virna "Carcara" Jandiroba',
        apelido: 'Carcara',
        sobrenome: 'Jandiroba',
        record: '22-4-0',
        ranking: '#3 Strawweight',
        info_extra: 'Serrinha, Bahia, Brasil | Team Velame | 37 years old',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Tabatha "Baby Shark" Ricci',
        apelido: 'Baby Shark',
        sobrenome: 'Ricci',
        record: '12-3-0',
        ranking: '#7 Strawweight',
        info_extra: 'Birigui, SP, Brasil | Paragon BJJ | 31 years old',
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
        { dimensao: 'Ranking', fighter1: '#3 Strawweight', fighter2: '#7 Strawweight' },
        { dimensao: 'Sequencia', fighter1: 'Coming off a loss no titulo', fighter2: 'Coming off a TKO over Ribas' },
        { dimensao: 'Narrativa', fighter1: 'Voltar a vencer apos derrota no titulo aos 37', fighter2: 'Derrotar uma top 3 e se aproximar do titulo' },
        { dimensao: 'Risco', fighter1: '2a derrota seguida At 37 years old complica muito', fighter2: 'Perder pra #3 nao e desonra, but freia o momentum' },
        { dimensao: 'Recompensa', fighter1: 'Manter posicao de top 3 e aguardar nova chance de titulo', fighter2: 'Entrar no top 5 e se posicionar pra titulo' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'A CARCARA NAO PARA',
          subtitulo: 'Jandiroba prova que a derrota pra Dern foi acidente e domina com grappling de elite',
          consequencias: [
            { tag: 'RANKING', texto: 'Jandiroba se mantem no top 3 e volta a fila do titulo' },
            { tag: 'NARRATIVA', texto: 'At 37 years old, mostra que ainda e a segunda melhor grappler da divisao (atras de Dern)' },
            { tag: 'PROXIMA', texto: 'Possivel revanche com Dern ou luta contra Tatiana Suarez' },
          ],
          proxima_luta: 'Jandiroba vs Suarez ou revanche Dern pelo titulo',
        },
        fighter2_vence: {
          titulo: 'BABY SHARK COME A CARCARA',
          subtitulo: 'Ricci confirma The evolution com vitoria sobre top 3 e se posiciona como proxima desafiante',
          consequencias: [
            { tag: 'ASCENSAO', texto: 'Ricci entra no top 5 com a biggest win of his career' },
            { tag: 'evolution', texto: 'O TKO sobre Ribas nao foi acidente. Ricci e agora uma ameaca completa.' },
            { tag: 'JANDIROBA', texto: '2a derrota seguida At 37 years old. Could be o inicio do declinio.' },
          ],
          proxima_luta: 'Ricci vs top 3 ou Title fight',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Virna Jandiroba',
        color: 'red',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Mackenzie Dern', result: 'L', method: 'Unanimous Decision', opponent_rank: '#2 WSW', quality_score: 5, quality_label: 'Excellent', note: 'Luta pelo titulo vago do peso palha. 5 rounds competitivos, mas Dern controlou os momentos chave. Derrota honrosa.' },
          { date: 'Abr 2025', opponent: 'Yan Xiaonan', result: 'W', method: 'Unanimous Decision', opponent_rank: '#5 WSW', quality_score: 4, quality_label: 'Very Good', note: 'Dominou com grappling. Xiaonan nao teve resposta pro takedown de Jandiroba.' },
          { date: 'Jul 2024', opponent: 'Amanda Lemos', result: 'W', method: 'Submissao R2', opponent_rank: '#4 WSW', quality_score: 4, quality_label: 'Very Good', note: 'Armbar classica. Lemos e maior e mais forte, mas o jiu-jitsu de Jandiroba foi demais. POTN.' },
          { date: 'Mar 2024', opponent: 'Loopy Godinez', result: 'W', method: 'Unanimous Decision', opponent_rank: '#9 WSW', quality_score: 3, quality_label: 'Good', note: 'Vitoria solida por pontos. Voltou de cirurgia no joelho e mostrou que estava 100%.' },
          { date: 'Mai 2023', opponent: 'Marina Rodriguez', result: 'W', method: 'Unanimous Decision', opponent_rank: '#5 WSW', quality_score: 3, quality_label: 'Good', note: 'Controlou com takedowns e pressao no chao.' },
        ],
        momentum_score: 6,
        momentum_label: 'Resilient',
        momentum_trend: 'resilient',
        momentum_note: 'Jandiroba Coming off a loss no titulo, but o contexto importa: foi contra Dern, a nova campea, em 5 rounds disputados. Antes disso, uma streak of 6 vitorias com level of opposition excellent (Xiaonan, Lemos, Rodriguez, Godinez). At 37 years old, o biological clock e uma preocupacao, but o jiu-jitsu nao envelhece tao rapido quanto o striking.',
      },
      fighter2: {
        nome: 'Tabatha Ricci',
        color: 'blue',
        recent_fights: [
          { date: 'Jul 2025', opponent: 'Amanda Ribas', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Good', note: 'Cotovelada e socos. A primeira finalizacao por strikes no UFC. Mostrou evolucao no striking.' },
          { date: 'Nov 2024', opponent: 'Yan Xiaonan', result: 'L', method: 'Unanimous Decision', opponent_rank: '#5 WSW', quality_score: 4, quality_label: 'Very Good', note: 'Xiaonan controlou com volume. Ricci nao conseguiu impor seu ritmo.' },
          { date: 'Ago 2024', opponent: 'Angela Hill', result: 'W', method: 'Unanimous Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Volume alto. Ricci controlou a distancia com pressao constante.' },
          { date: 'Mai 2024', opponent: 'Tecia Pennington', result: 'W', method: 'Split Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Luta apertada. Vitoria por split decision.' },
          { date: 'Nov 2023', opponent: 'Loopy Godinez', result: 'L', method: 'Split Decision', opponent_rank: '#9 WSW', quality_score: 3, quality_label: 'Good', note: 'Derrota muito apertada. Poderia ter ido pra qualquer lado.' },
        ],
        momentum_score: 7,
        momentum_label: 'Rising',
        momentum_trend: 'ascending',
        momentum_note: 'Ricci vem do melhor resultado of his career: TKO sobre Ribas que Showed uma nova dimensao. Antes disso, perdeu pra Xiaonan (a mesma que Jandiroba venceu), but o ritmo geral e positivo. The evolution e visivel luta a luta. At 31 years old, esta no physical prime e com confianca alta.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Jandiroba',
        media_oponentes: 4,
        media_oponentes_label: 'Very Good',
        aproveitamento: '9W-4L (69%)',
        contra_top5: '3W-2L',
      },
      fighter2: {
        nome: 'Ricci',
        media_oponentes: 2,
        media_oponentes_label: 'Average',
        aproveitamento: '8W-3L (73%)',
        contra_top5: '0W-2L',
      },
      oponentes_em_comum_count: { fighter1: 3, fighter2: 3 },
      oponentes_em_comum_note: 'Tres Common Opponents relevantes: Yan Xiaonan (Jandiroba W, Ricci L), Angela Hill (both W), e Loopy Godinez (Jandiroba W UD, Ricci L SD). in all cases, Jandiroba teve Equal or better result que Ricci. This suggests uma clear advantage de nivel.',
    },

    oponente_comum: {
      oponente_nome: 'Yan Xiaonan',
      fighter1_result: {
        resultado: 'Vitoria',
        metodo: 'Unanimous Decision',
        duracao: '3 rounds',
        contexto: 'UFC 314, luta ranqueada',
        performance: 'Dominated with grappling. Xiaonan nao teve resposta pros takedowns.',
        evento: 'UFC 314',
        data: 'Abr 2025',
      },
      fighter2_result: {
        resultado: 'Derrota',
        metodo: 'Unanimous Decision',
        duracao: '3 rounds',
        contexto: 'UFC Fight Night, luta ranqueada',
        performance: 'Ricci foi superada no volume. couldn\'t impose his game.',
        evento: 'UFC Fight Night',
        data: 'Nov 2024',
      },
      insight: 'Jandiroba dominou Xiaonan com grappling, enquanto Ricci foi superada pela mesma oponente no striking. This shows que o wrestling/grappling de Jandiroba e uma arma que Ricci may have dificuldade em lidar. Se Jandiroba conseguir o takedown, o precedente contra Xiaonan sugere dominio claro.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes per Minute', valueA: 2.33, valueB: 4.18, maxVal: 6, format: 'decimal', note: 'Ricci tem nearly double de volume. On the feet, ela pressiona muito mais.' },
        { label: 'Strike Accuracy (%)', valueA: 41, valueB: 36, maxVal: 100, format: 'percent', note: 'Jandiroba e mais precisa apesar do menor volume. Qualidade vs quantidade.' },
        { label: 'Strikes Absorbed/Min', valueA: 2.90, valueB: 5.19, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Ricci absorve MUITO mais. O estilo aggressive de volume tem um custo.' },
        { label: 'Strike Defense (%)', valueA: 55, valueB: 57, maxVal: 100, format: 'percent', note: 'Defesas de strikes practically identicas.' },
        { label: 'takedowns per 15 Min', valueA: 2.85, valueB: 2.69, maxVal: 5, format: 'decimal', note: 'surprisingly similar. Ricci also busca takedowns, but Jandiroba os usa pra controlar.' },
        { label: 'takedown Accuracy (%)', valueA: 37, valueB: 37, maxVal: 100, format: 'percent', note: 'identical. Both convertem 37% dos takedowns.' },
        { label: 'takedown Defense (%)', valueA: 74, valueB: 78, maxVal: 100, format: 'percent', note: 'Ricci defende slightly melhor. The key to the fight: se Ricci mantiver esse 78%, pode frustrar Jandiroba.' },
        { label: 'Submissions per 15 Min', valueA: 1.5, valueB: 0.1, maxVal: 3, format: 'decimal', note: 'A diferenca absurd. Jandiroba tenta 15x mais submissoes. Se for to the ground, o perigo e huge.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '37 anos', fighter2: '31 anos', note: 'Ricci 6 anos mais nova' },
        { label: 'Height', fighter1: '1,60m (5\'3")', fighter2: '1,55m (5\'1")', note: 'Jandiroba 5cm mais alta' },
        { label: 'Reach', fighter1: '163cm (64")', fighter2: '155cm (61")', note: 'Jandiroba com 3 polegadas de vantagem' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: 'Both ortodoxas' },
        { label: 'BJJ', fighter1: 'Faixa Preta 2o Grau', fighter2: 'Faixa Preta', note: 'Ambas faixas pretas, mas Jandiroba e elite mundial' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Stand-up striking', valueA: 50, valueB: 65, labelA: 'Average', labelB: 'Good', advantage: 'fighter2', advantage_note: 'Ricci tem volume muito superior (4.18 vs 2.33 SLpM) e recentemente mostrou poder de finalizacao com o TKO sobre Ribas. Em pe, Ricci domina.' },
        { label: 'wrestling / takedowns', valueA: 72, valueB: 65, labelA: 'Good', labelB: 'Good', advantage: 'fighter1', advantage_note: 'Jandiroba usa takedowns pra levar pro chao onde e dominante. Apesar de Ricci ter boa defesa de TD (78%), Jandiroba e persistente.' },
        { label: 'jiu-jitsu / Submissions', valueA: 95, valueB: 60, labelA: 'Excellent', labelB: 'Good', advantage: 'fighter1', advantage_note: 'A diferenca e BRUTAL. Jandiroba tem 14 subs na carreira (1.5/15min). Ricci tem 3 subs e 0.1/15min. No chao, e dominio total de Jandiroba.' },
        { label: 'Defense & Durability', valueA: 65, valueB: 55, labelA: 'Good', labelB: 'Good', advantage: 'fighter1', advantage_note: 'Jandiroba absorve menos (2.90 vs 5.19 SApM) e nunca foi finalizada na carreira (todas as 4 derrotas por decisao). Ricci foi parada por Fiorot (TKO).' },
        { label: 'Cardio & Pace', valueA: 70, valueB: 68, labelA: 'Good', labelB: 'Good', advantage: 'even', advantage_note: 'Jandiroba lutou 5 rounds pelo titulo e aguentou bem. Ricci mantem volume alto em 3 rounds. Ambas tem cardio adequado.' },
        { label: 'Elite Experience', valueA: 85, valueB: 55, labelA: 'Very Good', labelB: 'Good', advantage: 'fighter1', advantage_note: 'Jandiroba lutou pelo titulo, submeteu Lemos (#4), venceu Xiaonan (#5) e Rodriguez (#5). Ricci nunca venceu uma top 5.' },
      ],
      insight: 'The fight comes down to onde acontece. On the feet, Ricci tem clear advantage de volume e poder. on the ground, Jandiroba e absolutely dominant com jiu-jitsu of world-class level. A defesa de takedown de Ricci (78%) e boa, but contra uma especialista como Jandiroba, basta um takedown pra mudar tudo. Se Ricci mantiver On the feet por 3 rounds, vence nos points. Se Jandiroba levar to the ground, a submissao pode vir a qualquer momento.',
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
      insight: 'Jandiroba e dominantemente uma finalizadora: 64% das vitorias por submissao. Ricci e mainly uma lutadora de points: 58% por decisao. Isso conta a historia dos estilos. Jandiroba busca o finish on the ground. Ricci busca controlar o ritmo e vencer nos scorecards. If the fight goes to the ground, Jandiroba tem historico de finalizar. Se ficar On the feet, Ricci ganha o jogo de volume.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 7,
          danger_label: 'VANTAGEM JANDIROBA',
          color: 'red',
          title: 'O takedown Inicial',
          description: 'Jandiroba will look for o early takedown. If he manages to levar to the ground no R1, pode encaixar posicao e buscar o armbar. Ricci precisa defender o primeiro takedown e estabelecer seu jab e volume. Os primeiros 2 minutos definem o ritmo da luta inteira.',
        },
        {
          rounds: 'R2',
          danger_level: 5,
          danger_label: 'balanced',
          color: 'gold',
          title: 'O round Decisivo',
          description: 'Se Ricci defendeu os takedowns no R1 e estabeleceu volume, o R2 e onde ela pode dominar acumulando points. Se Jandiroba levou to the ground no R1, o R2 e onde ela pode buscar a submissao com mais urgencia. round de chess.',
        },
        {
          rounds: 'R3',
          danger_level: 6,
          danger_label: 'balanced',
          color: 'gold',
          title: 'Urgencia e Risco',
          description: 'Se a luta esta apertada, both vao ter que arriscar mais. Jandiroba Could be mais aggressive nos takedowns. Ricci pode abrir mais a guard pra conectar. O round final Could be o mais dangerous justamente pela urgencia.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'Clock', title: 'Idade: 37 years old', fighter: 'Jandiroba', risk_level: 'MEDIUM RISK', risk_color: 'yellow', description: 'At 37 years old, Jandiroba e uma das mais velhas da divisao. O corpo nao recupera como antes. Contra uma oponente de 31 no physical prime, cada ano conta.' },
        { icon: 'Shield', title: 'Derrota no Titulo', fighter: 'Jandiroba', risk_level: 'NEUTRAL', risk_color: 'neutral', description: 'Perder a Title fight may have efeitos psicologicos. But Jandiroba e uma veterana que ja voltou de derrotas antes. Resilience e o strong point dela.' },
        { icon: 'TrendingUp', title: 'TKO sobre Ribas', fighter: 'Ricci', risk_level: 'POSITIVE', risk_color: 'green', description: 'O TKO sobre Ribas em julho 2025 Showed uma Ricci mais dangerous. Nao e mais so volume, tem poder agora. A confianca esta no auge.' },
        { icon: 'Target', title: 'armbar de Elite', fighter: 'Jandiroba', risk_level: 'POSITIVE', risk_color: 'green', description: 'Jandiroba tem o melhor armbar do strawweight feminino. Recorde de 16 tentativas de submissao na divisao (empatada com Dern). Se pegar um arm, acabou.' },
        { icon: 'Zap', title: 'Vantagem de Alcance', fighter: 'Jandiroba', risk_level: 'POSITIVE', risk_color: 'green', description: 'Jandiroba tem 3 polegadas de envergadura a mais (64" vs 61"). Num duelo de striking, essa diferenca ajuda a manter distancia.' },
        { icon: 'Brain', title: 'Common Opponents', fighter: 'Jandiroba', risk_level: 'RISK FOR RICCI', risk_color: 'yellow', description: 'Contra Xiaonan e Godinez, Jandiroba venceu e Ricci perdeu. The pattern is clear: Jandiroba lida melhor com oponentes de nivel intermediario-alto.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Jandiroba',
        total_probability: 55,
        scenarios: [
          { name: 'Dominio on the ground', probability: 28, method: 'Unanimous Decision', description: 'Jandiroba encaixa 2-3 takedowns por round, controla on the ground e acumula tempo de controle. Mesmo sem submissao, o controle posicional e suficiente pra vencer nos scorecards. Ricci se frustra tentando se levantar.' },
          { name: 'armbar Classica', probability: 18, method: 'Submissao R1-R2', description: 'Jandiroba encaixa o takedown, transita pra mount ou side control e isola o arm. O armbar vem como veio contra Lemos, Herrig e Murata. 14 subs in his career por um motivo.' },
          { name: 'Mista: TD + points', probability: 9, method: 'Split Decision', description: 'Close fight onde Jandiroba vence 2 rounds por controle on the ground e Ricci vence 1 por volume On the feet. Decisao dividida pro grappling.' },
        ],
      },
      fighter2: {
        nome: 'Ricci',
        total_probability: 43,
        scenarios: [
          { name: 'Volume On the feet', probability: 22, method: 'Unanimous Decision', description: 'Ricci defende os takedowns (78% TD Def) e mantem a luta On the feet. O volume of 4.18 SLpM domina Jandiroba (2.33 SLpM). Vence nos points com constant pressure e atividade superior.' },
          { name: 'TKO por Acumulo', probability: 10, method: 'TKO R2-R3', description: 'Ricci conecta strikes limpos repetidamente, como fez contra Ribas. Jandiroba nao tem poder de KO e nao consegue o takedown. O volume acumula dano e o referee para.' },
          { name: 'Decisao Apertada', probability: 11, method: 'Split Decision', description: 'Close fight com rounds disputados. Ricci vence 2 rounds por volume e Jandiroba vence 1 por controle. Os judges premiam a atividade On the feet.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Virna Jandiroba',
      winner_side: 'fighter1',
      predicted_method: 'Unanimous Decision',
      confidence_score: 5,
      confidence_label: 'MEDIUM',
      explanation: 'Jandiroba e a lutadora mais completa e testada. O jiu-jitsu of world-class level e o diferencial claro dessa luta. Apesar de Ricci ter boa defesa de takedown (78%), Jandiroba e persistent e so needs um takedown pra mudar a dinamica. The difference in nivel e evidenciada pelos Common Opponents: Jandiroba venceu Xiaonan e Godinez, Ricci perdeu pra both. however: se Ricci mantiver On the feet, o volume Could be demais. A defesa de TD de Ricci e o coringa dessa luta. Se funcionar, Ricci vence. Se falhar, Jandiroba domina.',
      x_factor: {
        title: 'A Defesa de takedown de Ricci',
        description: 'Ricci defende 78% dos takedowns, uma das melhores taxas da divisao. Se ela mantiver essa eficiencia contra Jandiroba, pode frustrar o game plan da baiana e vencer com volume. Esse unico fator pode decidir a luta.',
      },
      upset_alert: {
        title: 'Ricci Mais dangerous do Que never',
        description: 'O TKO sobre Ribas Showed uma Ricci evoluida. Se ela conectar elbows limpas como fez naquela luta, pode machucar Jandiroba, que absorve 2.90 SApM. O poder de Ricci never foi tao alto.',
      },
      probabilities: {
        fighter1: { nome: 'Jandiroba', percent: 55 },
        fighter2: { nome: 'Ricci', percent: 43 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Jandiroba', reasoning: 'O grappling de elite e os Common Opponents favorecem Jandiroba. E The safest bet do card nessa luta.' },
        method: { pick: 'Jandiroba por Submissao', reasoning: '14 subs in his career, 1.5 tentativas per 15 min. Se for to the ground, a sub e real.' },
        over_under: { pick: 'Over 1.5 rounds', rounds: 1.5, reasoning: 'Ricci e dificil de finalizar (has never been submitted) e Jandiroba pode precisar de tempo pra encaixar o takedown.' },
        best_value: 'Jandiroba por submissao tem Good value. A taxa de finalizacao dela e historicamente alta contra qualquer oponente.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Primeiro takedown de Jandiroba', icon: 'Target', description: 'Se Jandiroba encaixar o takedown nos primeiros 3 minutos, e sinal de que o game plan esta funcionando. Se Ricci defender e manter On the feet, Jandiroba will have to repensar.' },
        { num: 2, title: 'volume of Ricci On the feet', icon: 'Activity', description: 'Observe se Ricci esta lancando mais de 4 strikes per minute. Se o volume estiver alto e Jandiroba nao esta ameacando takedowns, Ricci esta dominando.' },
        { num: 3, title: 'Tentativas de Submissao', icon: 'Crosshair', description: 'Jandiroba media 1.5 subs per 15 min. Se ela esta tentando armbars e triangles, esta no controle. Se nao esta tentando, nao esta conseguindo posicao.' },
        { num: 4, title: 'elbows de Ricci', icon: 'Zap', description: 'O TKO sobre Ribas veio de cotoveladas. Se Ricci esta conectando cotoveladas limpas no clinch, pode machucar Jandiroba e mudar a luta.' },
        { num: 5, title: 'O Ritmo no R3', icon: 'Clock', description: 'Se a luta estiver apertada no R3, observe quem toma a iniciativa. Jandiroba will look for takedowns desesperadamente. Ricci will try to manter distancia. Quem impoe o ritmo nesse round probably ganha a luta.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'JANDIROBA VS RICCI', content: 'UFC FIGHT NIGHT\nApex, Las Vegas | 4 de Abril\n3 rounds | strawweight\n\n#3 vs #7\nBrasil vs Brasil\nGrappling vs Volume\n\nDuelo brasileiro no co-main.', color: 'gold' },
        { slide_number: 2, title: 'CARCARA', content: '#3 strawweight | 37 years old\nTeam Velame | Bahia\n\n22-4 | 14 submissoes in his career\nFaixa preta 2nd degree BJJ\n2x POTN por armbar\n\nVeio de derrota pelo titulo vs Dern.\nPrecisa voltar a vencer.', color: 'red' },
        { slide_number: 3, title: 'BABY SHARK', content: '#7 strawweight | 31 years old\nParagon BJJ | Birigui, SP\n\n12-3 | Coming off a TKO over Ribas\nFaixa preta BJJ e Judo\n\n78% defesa de takedown.\nSe mantiver On the feet, domina o volume.', color: 'blue' },
        { slide_number: 4, title: 'Common Opponent', content: 'YAN XIAONAN:\nJandiroba: VITORIA (UD)\nRicci: DERROTA (UD)\n\nLOOPY GODINEZ:\nJandiroba: VITORIA (UD)\nRicci: DERROTA (SD)\n\nO padrao e claro.', color: 'gold' },
        { slide_number: 5, title: 'PREVISAO', content: 'JANDIROBA por Decisao Unanime\n\nConfianca: MEDIA\n55% Jandiroba / 43% Ricci\n\nSe for to the ground, Jandiroba domina.\nSe ficar On the feet, Ricci pode surpreender.\n\nA defesa de TD de Ricci decide tudo.', color: 'red' },
      ],
      twitter: [
        { num: '1/4', text: 'Jandiroba vs Ricci no co-main. Brasil vs Brasil. A rainha do armbar (#3) contra a Baby Shark em ascensao (#7). Thread rapida:' },
        { num: '2/4', text: 'O dado chave: oponentes em comum. Contra Xiaonan, Jandiroba venceu e Ricci perdeu. Contra Godinez, mesmo resultado. A diferenca de nivel e real.' },
        { num: '3/4', text: 'MAS: Ricci defende 78% dos takedowns. Se manter em pe, o volume de 4.18 SLpM destroi os 2.33 de Jandiroba. A defesa de TD e O fator dessa luta.' },
        { num: '4/4', text: 'Pick: Jandiroba por decisao. O jiu-jitsu de elite (14 subs na carreira) e a experiencia contra top 5 fazem a diferenca. Mas cuidado com Ricci, ela ta evoluindo rapido.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: '14 submissoes na carreira. A melhor armbar do peso palha feminino. Virna Jandiroba e uma maquina de jiu-jitsu. Mas Tabatha Ricci tem 78% de defesa de takedown. O que acontece quando a forca irresistivel encontra o objeto imobil?' },
        { time: '10-25s', title: 'Contexto', text: 'Jandiroba, #3, Coming off a loss pelo titulo contra Dern. 37 years old, needs to win. Ricci, #7, Coming off a TKO over Ribas. 31 years old, no auge. Both brasileiras. Estilos completely opostos.' },
        { time: '25-40s', title: 'Analise', text: 'Jandiroba: 1.5 tentativas de sub per 15 min, armbar of world-class level. Ricci: 4.18 strikes per minute, absurd volume. Os Common Opponents favorecem Jandiroba: venceu Xiaonan e Godinez, Ricci perdeu pra both.' },
        { time: '40-55s', title: 'Pick', text: 'Jandiroba por decisao unanime. Se conseguir os takedowns, domina. Ricci precisa da melhor luta da vida dela pra vencer. Comenta quem voce acha e segue pra analise completa.' },
      ],
      tiktok: [
        { hook: 'Ela tem 14 submissoes in his career e o melhor armbar do UFC feminino.', body: 'Jandiroba vs Ricci. Brazil vs Brazil no co-main. Jandiroba Coming off a loss pelo titulo, but venceu Xiaonan e Godinez, as mesmas que derrotaram Ricci. Os Common Opponents nao mentem. But Ricci defende 78% dos takedowns e Coming off a TKO over Ribas.', cta: 'Quem ganha o Brazilian showdown? Comenta!' },
      ],
      headlines: [
        'Jandiroba vs Ricci: O armbar de Elite Contra a Defesa de takedown de 78%',
        'Brazil vs Brazil: A Carcara Ferida Contra a Baby Shark on the rise',
        'Common Opponents Nao Mentem: Jandiroba e a Favorita Clara',
        'Ricci Pode Surpreender? The evolution no striking E o Coringa',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '-175',
        fighter2_odds: '+145',
        fighter1_name: 'Virna Jandiroba',
        fighter2_name: 'Tabatha Ricci',
        source: 'Estimate based on similar lines',
      },
      edges: [
        { icon: 'Target', titulo: 'Submissoes de Jandiroba', stat_headline: '14 SUBMISSOES in his career, 1.5 TENTATIVAS per 15 min', contexto: 'Jandiroba e a maior ameaca de submissao do strawweight feminino. O armbar e a arma principal. Recorde empatado com Dern na divisao (16 tentativas).', implicacao_aposta: 'Prop de "luta acabar por submissao" may have valor.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Activity', titulo: 'volume of Ricci', stat_headline: '4.18 SLPM VS 2.33 SLPM. RICCI TEM nearly double DE VOLUME.', contexto: 'On the feet, Ricci domina completely a atividade. If the fight stays On the feet, ela acumula points rapidamente.', implicacao_aposta: 'Se voce acredita que Ricci defende os takedowns, o ML dela tem valor.', edge_level: 'moderado', fighter_side: 'fighter2' },
        { icon: 'Brain', titulo: 'Common Opponents', stat_headline: 'XIAONAN E GODINEZ: JANDIROBA VENCEU, RICCI PERDEU', contexto: 'Contra as mesmas oponentes, Jandiroba teve resultados superiores in all cases. Isso e um strong indicator de nivel.', implicacao_aposta: 'Favorece Jandiroba. The market may estar underestimating The difference in nivel.', edge_level: 'forte', fighter_side: 'fighter1' },
      ],
      value_picks: [
        { tipo: 'Moneyline', pick: 'Jandiroba ML (-175)', odds: '-175', confianca: 'media', raciocinio: 'Favorita com bom motivo. Nivel superior evidenciado por oponentes em comum. O preco e justo.' },
        { tipo: 'Metodo', pick: 'Jandiroba por Submissao', odds: '+200', confianca: 'media', raciocinio: '14 subs na carreira. Se levar pro chao, a sub e o cenario mais provavel. Bom valor a +200.' },
        { tipo: 'Over/Under', pick: 'Over 1.5 rounds', odds: '-200', confianca: 'alta', raciocinio: 'Ricci nunca foi submetida no UFC. Jandiroba geralmente precisa de tempo pra encaixar posicao. Dificilmente acaba no R1.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Ricci por KO/TKO',
        descricao: 'Ricci tem only 2 KOs em 12 vitorias. O TKO sobre Ribas foi a excecao, nao a regra. Apostar em Ricci por finish e ir contra o historico. Se Ricci vencer, probably e por decisao.',
      },
      disclaimer: 'Statistical analysis for informational purposes. Bet responsibly.',
    },
  },
};
