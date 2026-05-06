import type { FullSingleAnalise } from '@/types/analise';

export const analise: FullSingleAnalise = {
  id: 'delano-vs-ruchala',
  evento_id: null,
  slug: 'delano-vs-ruchala',
  titulo: 'Delano vs Ruchala: Brasil vs Polonia no Peso Pena',
  subtitulo: 'O striker brasileiro com 9.73 strikes por minuto contra o grappler polones que precisa se redimir depois de perder o debut no UFC.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,73m', envergadura: '179cm', idade: 29, academia: 'CT Niteroi / Rio de Janeiro' },
      fighter2: { altura: '1,73m', envergadura: '183cm', idade: 27, academia: 'ATT Nowy Sacz' },
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
      { factor: 'Volume de Strikes', edge: 'fighter1', impact: 9, description: 'Delano conecta 9.73 strikes significativos por minuto contra 2.27 de Ruchala. A diferenca de volume e absurda.' },
      { factor: 'Ameaca de Takedown', edge: 'fighter2', impact: 6, description: 'Ruchala tem 2.00 TDs por 15 min e BJJ faixa marrom. au sol, e dangereux.' },
      { factor: 'Precisao e Defesa', edge: 'fighter1', impact: 8, description: 'Delano acerta 65% dos strikes e defende 72%. Ruchala acerta 35% e defende 57%. Numeros contrastantes.' },
    ],
    xFactor: {
      title: 'O Cardio e Volume de Delano',
      description: 'Delano media quase 10 strikes significativos por minuto. Se mantiver esse ritmo por 3 rounds, Ruchala simplesmente nao vai acompanhar.',
    },
  },
  fighter1_info: {
    nome: 'Jose Delano',
    apelido: '',
    record: '16-3-0',
    ranking: 'Non Classe',
    ultimasLutas: [
      { result: 'W', opponent: 'Manuel Exposito', method: 'Decision Unanime', event: 'UFC Fight Night' },
    ],
    sigStrikesPerMin: 9.73,
    strikeAccuracy: 65,
    strikeDefense: 72,
    tdAccuracy: 0,
    tdDefense: 60,
    subAttemptsPer15: 0.0,
  },
  fighter2_info: {
    nome: 'Robert Ruchala',
    apelido: 'Faker',
    record: '11-2-0',
    ranking: 'Non Classe',
    ultimasLutas: [
      { result: 'L', opponent: 'William Gomis', method: 'Decision Unanime', event: 'UFC Fight Night' },
    ],
    sigStrikesPerMin: 2.27,
    strikeAccuracy: 35,
    strikeDefense: 57,
    tdAccuracy: 33,
    tdDefense: 0,
    subAttemptsPer15: 0.0,
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan',
  evento_data: '4 Avril 2026',
  evento_local: 'UFC Apex, Las Vegas',
  categoria_peso: 'Poids Plumes (145 lbs)',
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
      categoria_peso: 'Poids Plumes (145 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Volume vs Grappling',
      tagline_sub: 'O brasileiro que lanca quase 10 strikes por minuto contra o polones faixa marrom de BJJ que precisa vencer pra sobreviver no UFC.',
      fighter1: {
        nome_completo: 'Jose Delano',
        apelido: '',
        sobrenome: 'Delano',
        record: '16-3-0',
        ranking: 'Non Classe',
        info_extra: 'Recife, Brasil | Rio de Janeiro | 29 ans',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Robert "Faker" Ruchala',
        apelido: 'Faker',
        sobrenome: 'Ruchala',
        record: '11-2-0',
        ranking: 'Non Classe',
        info_extra: 'Nowy Sacz, Polonia | 27 ans',
        imagem_fullbody_url: null,
      },
    },

    narrativa: {
      html_content: `
        <!-- DELANO: O METRALHADOR -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">O Metralhador de Recife</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/5 via-transparent to-ufc-red/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-ufc-red/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-ufc-red">Jose Delano</strong> saiu de Recife, trabalhou como garcom, assistente administrativo e entregador antes de fazer do MMA sua vida. Campeao do Shooto Brasil, faixa preta de Muay Thai e faixa roxa de jiu-jitsu. No debut UFC, mostrou exatamente o que sabe fazer: volume absurdo de strikes. Sao 9.73 strikes significativos por minuto, um numero que coloca ele entre os maiores volumes do peso-pena. Venceu Manuel Exposito por decisao unanime com uma performance dominante nos pes.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/20 to-ufc-red/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Debut UFC</p>
                <p class="font-display text-2xl text-white mb-2">EXPOSITO</p>
                <p class="text-xs text-white/50 leading-relaxed">Decisao Unanime. Volume absurdo. 9.73 SLpM. Dominacao em pe.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Debut Vitorioso</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/20 to-ufc-red/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Pre-UFC</p>
                <p class="font-display text-2xl text-white mb-2">SHOOTO CHAMPION</p>
                <p class="text-xs text-white/50 leading-relaxed">Campeao do Shooto Brasil. 16-3 na carreira. Majoritariamente nocautes e decisoes.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Titulo Regional</div>
              </div>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/8 via-amber-500/4 to-amber-500/8"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div class="relative p-5 text-center">
              <p class="font-display text-5xl md:text-6xl bg-gradient-to-b from-ufc-red/40 to-ufc-red/10 bg-clip-text text-transparent leading-none">9.73 SLpM</p>
              <p class="text-xs text-white/40 mt-2">Um dos maiores volumes de strikes do peso-pena no UFC</p>
            </div>
          </div>
        </div>

        <!-- RUCHALA: O GRAPPLER POLONES -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">O Grappler Que Precisa se Redimir</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed">
                <strong class="text-blue-400">Robert "Faker" Ruchala</strong> veio da cena polaca de MMA, com passagem pelo KSW. Faixa marrom de jiu-jitsu, campeao polones de BJJ, e um grappler nato. Treinou com Dustin Poirier na preparacao para Holloway. Mas no debut UFC, enfrentou William Gomis e perdeu por decisao unanime. Nao conseguiu impor o grappling e foi superado nos pes. Agora, com as costas na parede, precisa vencer pra mostrar que pertence ao octogono.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Debut UFC</p>
                <p class="font-display text-2xl text-white mb-2">GOMIS</p>
                <p class="text-xs text-white/50 leading-relaxed">Derrota por Decisao Unanime. Superado nos pes, nao conseguiu impor o takedown.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">Derrota no Debut</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-400/15 to-blue-400/5"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Pre-UFC</p>
                <p class="font-display text-2xl text-white mb-2">KSW VETERAN</p>
                <p class="text-xs text-white/50 leading-relaxed">11-2 na carreira. Campeonato Polones de BJJ. Passou pelo DWCS pra chegar ao UFC.</p>
                <div class="mt-3 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[9px] font-bold uppercase text-blue-400">Grappler Nato</div>
              </div>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/8 via-amber-500/4 to-amber-500/8"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div class="relative p-5 text-center">
              <p class="text-sm text-white/60">Perdeu o debut UFC. <strong class="text-amber-400">Precisa vencer pra continuar no roster.</strong> A pressao e real.</p>
            </div>
          </div>
        </div>

        <!-- CONTEXTO DO DUELO -->
        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Striking vs Grappling: O Classico</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-amber-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">O Dilema do Grappler</p>
                <p class="text-sm text-white/60 leading-relaxed">Ruchala precisa levar pro chao pra ter chance. Mas Delano tem 60% de defesa de TD e volume brutal em pe. Cada segundo em pe favorece o brasileiro.</p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-ufc-red/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-ufc-red rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-ufc-red mb-2">O Problema de Ruchala</p>
                <p class="text-sm text-white/60 leading-relaxed">No debut contra Gomis, Ruchala tentou takedowns mas nao conseguiu manter posicao. Se repetir isso contra Delano, vai absorver muito dano tentando entradas.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: 'Non Classe', fighter2: 'Non Classe' },
        { dimensao: 'Sequencia', fighter1: '1 vitoria (debut UFC)', fighter2: '1 derrota (debut UFC)' },
        { dimensao: 'Narrativa', fighter1: 'Confirmar o debut promissor e subir no roster', fighter2: 'Sobreviver no UFC depois de perder o debut' },
        { dimensao: 'Risco', fighter1: 'Perder o momentum do debut vitorioso', fighter2: '2a derrota seguida pode significar corte do UFC' },
        { dimensao: 'Recompensa', fighter1: '2a vitoria UFC, se estabelecer no peso-pena', fighter2: 'Se redimir, mostrar que pertence ao octogono' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'O VOLUME ESMAGA',
          subtitulo: 'Delano mantem Debout, sufoca com volume e confirma que e uma ameaca real no peso-pena',
          consequencias: [
            { tag: 'MOMENTUM', texto: '2 victoires consecutives no UFC. O brasileiro de Recife comeca a se consolidar no roster.' },
            { tag: 'NARRATIVA', texto: 'Confirma que o volume de quase 10 strikes por minuto funciona contra diferentes estilos no nivel UFC.' },
            { tag: 'PROXIMA', texto: 'Pode pegar um oponente mais estabelecido na divisao pra testar o teto.' },
          ],
          proxima_luta: 'Delano vs veterano do peso-pena (oponente mid-tier)',
        },
        fighter2_vence: {
          titulo: 'A REDENCAO DO FAKER',
          subtitulo: 'Ruchala impoe o grappling, mostra ajustes do debut e prova que pertence ao UFC',
          consequencias: [
            { tag: 'SOBREVIVENCIA', texto: 'Ruchala evita o corte e ganha folego no roster do UFC.' },
            { tag: 'EVOLUCAO', texto: 'Mostra que aprendeu com a derrota pra Gomis e fez ajustes no camp.' },
            { tag: 'DELANO', texto: 'Derrota coloca em questao se o volume funciona contra grapplers de alto nivel no UFC.' },
          ],
          proxima_luta: 'Ruchala vs outro peso-pena en ascension',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Jose Delano',
        color: 'red',
        recent_fights: [
          { date: '2025', opponent: 'Manuel Exposito', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Debut UFC. Volume absurdo de 9.73 SLpM. Dominou nos pes por 3 rounds inteiros.' },
        ],
        momentum_score: 7,
        momentum_label: 'En Feu',
        momentum_trend: 'ascending',
        momentum_note: 'Delano chegou ao UFC com um debut impressionante. 16-3 na carreira, campeao do Shooto Brasil, e mostrou um volume de strikes que chama atencao. O numero de 9.73 SLpM e excepcional, mesmo considerando que foi seulement 1 luta UFC. O brasileiro esta confiante, Vient de gagner, e traz o estilo agressif que funciona bem no Apex.',
      },
      fighter2: {
        nome: 'Robert Ruchala',
        color: 'blue',
        recent_fights: [
          { date: '2025', opponent: 'William Gomis', result: 'L', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bon', note: 'Debut UFC, derrota. Nao conseguiu impor o grappling contra Gomis. Superado nos pes.' },
        ],
        momentum_score: 4,
        momentum_label: 'En Recuperation',
        momentum_trend: 'descending',
        momentum_note: 'Ruchala perdeu o debut no UFC contra William Gomis. Nao e uma derrota desonrosa: Gomis e talentoso. Mais o polones nao conseguiu executar o plano de jogo de levar au sol. As estatisticas do debut sao preocupantes: 2.27 SLpM e 35% de precisao nos pes. Se nao conseguir impor o grappling novamente, vai ter o mesmo problema.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Delano',
        media_oponentes: 2,
        media_oponentes_label: 'Moyen',
        aproveitamento: '1W-0L (100%)',
        contra_top5: '0W-0L',
      },
      fighter2: {
        nome: 'Ruchala',
        media_oponentes: 2,
        media_oponentes_label: 'Moyen',
        aproveitamento: '0W-1L (0%)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Nao ha oponentes em comum. Les deux sao novatos no UFC com seulement 1 luta cada. Delano venceu o debut, Ruchala perdeu. O que temos pra comparar sao os estilos: Delano e um striker de volume absurdo, Ruchala e um grappler que precisa levar au sol. E o classico striker vs grappler no nivel mais basico da divisao.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Frappes Sig. par Minute', valueA: 9.73, valueB: 2.27, maxVal: 12, format: 'decimal', note: 'La difference est ABSURDA. Delano lanca mais de 4x o volume de strikes de Ruchala. Se a luta ficar Debout, e massacre.' },
        { label: 'Precision des Frappes (%)', valueA: 65, valueB: 35, maxVal: 100, format: 'percent', note: 'Delano acerta quase o dobro. 65% e elite, 35% e preocupante. Ruchala nao e striker.' },
        { label: 'Frappes Absorbees/Min', valueA: 2.53, valueB: 3.27, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Delano absorve menos e defende mais. O brasileiro e mais eficiente em todas as metricas de striking.' },
        { label: 'Defense de Frappes (%)', valueA: 72, valueB: 57, maxVal: 100, format: 'percent', note: 'Delano defende 72% dos strikes. Ruchala defende 57%. Vantagem clara pro brasileiro na trocacao.' },
        { label: 'Takedowns par 15 Min', valueA: 0.00, valueB: 2.00, maxVal: 5, format: 'decimal', note: 'Delano nao tentou nenhum takedown no debut. Ruchala tenta TDs ativamente. Le sol est le territoire do polones.' },
        { label: 'Precision Takedown (%)', valueA: 0, valueB: 33, maxVal: 100, format: 'percent', note: 'Ruchala converteu 33% dos TDs no debut. Precisa melhorar pra impor o grappling contra Delano.' },
        { label: 'Defense Takedown (%)', valueA: 60, valueB: 0, maxVal: 100, format: 'percent', note: 'Delano defendeu 60% dos TDs. Ruchala teve 0% de defesa: dado preocupante, embora com amostra pequena.' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '29 anos', fighter2: '27 anos', note: 'Ambos jovens, Ruchala 2 anos mais novo' },
        { label: 'Taille', fighter1: '1,73m (5\'8")', fighter2: '1,73m (5\'8")', note: 'Mesma altura' },
        { label: 'Allonge', fighter1: '179cm (70.5")', fighter2: '183cm (72")', note: 'Ruchala com vantagem de 1.5 polegadas de envergadura' },
        { label: 'Stance', fighter1: 'Orthodoxe', fighter2: 'Switch', note: 'Ruchala alterna stances. Pode criar angulos diferentes.' },
        { label: 'Estilo', fighter1: 'Striker / Muay Thai', fighter2: 'Grappler / BJJ', note: 'Classico striker vs grappler' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking Debout', valueA: 82, valueB: 40, labelA: 'Tres Bon', labelB: 'Moyen', advantage: 'fighter1', advantage_note: 'Delano e ceinture noire de Muay Thai com volume de quase 10 strikes por minuto e 65% de precisao. Ruchala acertou seulement 35% no debut e media 2.27 SLpM. A diferenca Debout e enorme.' },
        { label: 'Wrestling Offensif', valueA: 30, valueB: 60, labelA: 'Faible', labelB: 'Bon', advantage: 'fighter2', advantage_note: 'Delano nao tentou um unico takedown no debut. Ruchala tenta TDs ativamente (2.00/15min) e e faixa marrom de BJJ. O chao e o caminho de Ruchala.' },
        { label: 'Jiu-Jitsu / Soumissions', valueA: 45, valueB: 70, labelA: 'Moyen', labelB: 'Bon', advantage: 'fighter2', advantage_note: 'Ruchala e faixa marrom de BJJ e campeao polones. Delano e faixa roxa. Se a luta for pro chao, Ruchala tem vantagem tecnica.' },
        { label: 'Defense et Durabilite', valueA: 72, valueB: 48, labelA: 'Bon', labelB: 'Moyen', advantage: 'fighter1', advantage_note: 'Delano defende 72% dos strikes e 60% dos TDs. Ruchala defende 57% dos strikes e teve 0% de defesa de TD no debut. Delano e mais sólido defensivamente.' },
        { label: 'Cardio et Reservoir', valueA: 75, valueB: 55, labelA: 'Tres Bon', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'Manter 9.73 SLpM por 3 rounds exige cardio excepcional. Delano mostrou que aguenta. Ruchala precisa provar que consegue sustentar pressao de grappling por 15 minutos.' },
        { label: 'Experience d\'Elite', valueA: 40, valueB: 35, labelA: 'Moyen', labelB: 'Moyen', advantage: 'even', advantage_note: 'Ambos sao novatos no UFC com 1 luta cada. Delano tem mais vitorias na carreira (16-3 vs 11-2), mas nenhum enfrentou competicao de alto nivel no octogono.' },
      ],
      insight: 'Essa e uma luta de estilos completamente opostos. Delano domina Debout com volume brutal, precisao e defesa. Ruchala precisa levar au sol onde o jiu-jitsu faixa marrom pode fazer a diferenca. A pergunta central: Ruchala consegue encaixar takedowns contra Delano? Se nao, vai ser uma noite longa absorvendo strikes. Se sim, pode surpreender com o grappling.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Delano',
        ko_tko: { count: 8, percent: 50 },
        submission: { count: 3, percent: 19 },
        decision: { count: 5, percent: 31 },
        total_wins: 16,
      },
      fighter2: {
        nome: 'Ruchala',
        ko_tko: { count: 5, percent: 45 },
        submission: { count: 4, percent: 36 },
        decision: { count: 2, percent: 18 },
        total_wins: 11,
      },
      insight: 'Delano e majoritariamente um finalizador por KO/TKO (50% das vitorias), condizente com o Muay Thai e o volume absurdo. Ruchala aussi tem finish rate alta (81%), com mix de KO (45%) e submissao (36%). Les deux buscam o finish, mais de maneiras diferentes: Delano com strikes, Ruchala com grappling. A ironia e que Ruchala aussi tem nocautes, mais nos pes contra Delano, e suicidio tentar trocar.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 7,
          danger_label: 'VANTAGEM DELANO',
          color: 'red',
          title: 'Volume Inicial',
          description: 'Se a luta comecar Debout, Delano vai sufoca com volume. 9.73 SLpM com 65% de precisao e devastador. Ruchala precisa encaixar o takedown tot, porque cada segundo Debout e territorio do brasileiro. O R1 pode definir a luta inteira: se Delano estabelecer o ritmo, Ruchala vai ter que perseguir takedowns desesperados.',
        },
        {
          rounds: 'R2',
          danger_level: 5,
          danger_label: 'EQUILIBRE',
          color: 'gold',
          title: 'Round de Ajustes',
          description: 'Se Ruchala sobreviver o R1 e fizer ajustes no grappling, o R2 pode ser onde ele encontra o ritmo. Historicamente, grapplers que perdem o R1 Debout comecam a ser mais agressivos nas entradas no R2. Mais se Delano mantiver a distancia e o volume, vai dominar novamente.',
        },
        {
          rounds: 'R3',
          danger_level: 6,
          danger_label: 'EQUILIBRE',
          color: 'gold',
          title: 'Desespero ou Dominio',
          description: 'Se Ruchala estiver perdendo nos pontos, o R3 e onde o desespero pode abrir oportunidades. Tentativas de takedown mais arriscadas podem funcionar ou podem resultar em contragolpes. Por outro lado, se Delano mantiver o volume por 3 rounds, a decisao e clara.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'Zap', title: 'Volume de 9.73 SLpM', fighter: 'Delano', risk_level: 'TRES POSITIF', risk_color: 'green', description: 'O numero fala por si. Quase 10 strikes significativos por minuto e extraordinario. Mesmo que parte disso se deva a amostra pequena (1 luta UFC), a tendencia e real: Delano e um metralhador.' },
        { icon: 'Shield', title: 'BJJ Faixa Marrom', fighter: 'Ruchala', risk_level: 'POSITIF', risk_color: 'green', description: 'Ruchala e campeao polones de BJJ e faixa marrom. Se conseguir levar au sol, tem ferramentas reais pra buscar finalizacoes ou controle de posicao. O problema e chegar la.' },
        { icon: 'AlertTriangle', title: 'Derrota no Debut UFC', fighter: 'Ruchala', risk_level: 'RISQUE MOYEN', risk_color: 'yellow', description: 'Ruchala perdeu pra Gomis no debut. A pressao de uma possivel 2a derrota seguida e real. No UFC, 0-2 geralmente significa corte. O fator psicologico pesa.' },
        { icon: 'Target', title: 'Defesa de TD de 60%', fighter: 'Delano', risk_level: 'RISQUE MOYEN', risk_color: 'yellow', description: 'Delano defendeu 60% dos TDs no debut. Nao e ruim, mais aussi nao e impermeavel. Se Ruchala for mais agressif nas entradas que Gomis, pode encontrar aberturas.' },
        { icon: 'Activity', title: 'Switch Stance', fighter: 'Ruchala', risk_level: 'NEUTRE', risk_color: 'neutral', description: 'Ruchala alterna stances (switch). Pode criar angulos diferentes pra entradas de takedown e confundir o timing de Delano nos pes. E uma ferramenta tatica que pode ajudar.' },
        { icon: 'Brain', title: 'Experiencia em Organizacoes Europeias', fighter: 'Ruchala', risk_level: 'NEUTRE', risk_color: 'neutral', description: 'Ruchala passou pelo KSW e pela cena polaca de MMA, que e competitiva. Treinou com Dustin Poirier. A exposicao a diferentes estilos pode ajudar, mais no debut nao foi o suficiente.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Delano',
        total_probability: 62,
        scenarios: [
          { name: 'Dominio Debout', probability: 32, method: 'Decision Unanime', description: 'Delano mantem a luta Debout, defende os takedowns e sufoca Ruchala com volume. 9.73 SLpM por 3 rounds, controlando a distancia com o Muay Thai. Ruchala nao consegue impor o grappling e perde nos pontos de forma clara.' },
          { name: 'TKO por Acumulo', probability: 18, method: 'TKO R2-R3', description: 'O volume de Delano acumula dano. Ruchala, tentando entradas de takedown que falham, absorve strikes na entrada e saida. O dano acumulado leva ao TKO quando Ruchala ja nao consegue se defender.' },
          { name: 'Nocaute Limpo', probability: 12, method: 'KO R1-R2', description: 'Ruchala tenta uma entrada de takedown mal cronometrada e Delano encaixa um joelhada ou uppercut na entrada. O Muay Thai do brasileiro tem ferramentas perfeitas pra punir entradas telegrafadas.' },
        ],
      },
      fighter2: {
        nome: 'Ruchala',
        total_probability: 35,
        scenarios: [
          { name: 'Ground Control', probability: 18, method: 'Decision Unanime', description: 'Ruchala encaixa takedowns consistentes (pelo menos 2 por round), mantem controle au sol e acumula tempo de controle. Mesmo sem finalizar, domina nos pontos com posicao superior e ground and pound.' },
          { name: 'Soumission', probability: 12, method: 'Submissao R1-R2', description: 'Ruchala encaixa um takedown tot e transita pra posicao dominant. Com a faixa marrom de BJJ, encontra um arm triangle, RNC ou guilhotina. Delano, faixa roxa, pode nao ter defesa suficiente se for pego em posicao ruim.' },
          { name: 'TKO no Ground and Pound', probability: 5, method: 'TKO R2-R3', description: 'Ruchala consegue o takedown, passa a guarda e martela com ground and pound. Delano nao consegue se levantar e o arbitro para. Cenario menos provavel mais possivel.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Jose Delano',
      winner_side: 'fighter1',
      predicted_method: 'Decision Unanime',
      confidence_score: 6,
      confidence_label: 'MEDIA-ALTA',
      explanation: 'Os numeros contam uma historia bem clara aqui. Delano media 9.73 strikes significativos por minuto com 65% de precisao e 72% de defesa. Ruchala media 2.27 SLpM com 35% de precisao e 57% de defesa. Debout, nao tem jogo. A unica chance de Ruchala e impor o grappling, mais no debut contra Gomis, ja nao conseguiu fazer isso. Delano defende 60% dos TDs, e o volume absurdo dele pune cada tentativa de entrada que falha. O cenario mais provavel e Delano mantendo a distancia, sufocando com volume, e vencendo nos pontos de forma relativamente clara. O risco de upset existe se Ruchala vier com um grappling muito mais agressif que no debut, mais as evidencias apontam pro brasileiro.',
      x_factor: {
        title: 'O Volume de 9.73 SLpM e Sustentavel?',
        description: 'O numero absurdo de Delano vem de seulement 1 luta UFC. Se ele repetir algo proximo disso, e praticamente impossivel perder Debout. Mais se o volume cair significativamente na 2a luta (talvez Ruchala traga mais pressao de grappling), a vantagem diminui.',
      },
      upset_alert: {
        title: 'Ruchala com Grappling agressif',
        description: 'Se Ruchala aprendeu com o debut e vier muito mais agressif nas entradas de takedown, pode surpreender. O polones e faixa marrom de BJJ e campeonato polones de grappling. Se conseguir levar au sol nos primeiros minutos, o jogo muda completamente. A defesa de TD de 60% de Delano nao e impermeavel.',
      },
      probabilities: {
        fighter1: { nome: 'Delano', percent: 62 },
        fighter2: { nome: 'Ruchala', percent: 35 },
        draw: 3,
      },
      value_picks: {
        moneyline: { pick: 'Delano ML', reasoning: 'Os numeros sao claros demais. Volume de 9.73 SLpM contra 2.27. Precisao de 65% contra 35%. Se a luta ficar Debout, e dominio total. E Ruchala nao provou que consegue impor o grappling no nivel UFC.' },
        method: { pick: 'Delano por Decisao', reasoning: 'Delano venceu o debut por decisao unanime. Ruchala e dificil de finalizar. O cenario mais provavel e Delano controlando por 3 rounds nos pes sem conseguir o finish.' },
        over_under: { pick: 'Over 2.5 Rounds', rounds: 2.5, reasoning: 'Delano venceu por decisao no debut. Mesmo com volume eleve, tende a acumular dano em vez de buscar o KO. Ruchala e faixa marrom de BJJ e provavelmente duro de finalizar. A luta deve ir ate o fim.' },
        best_value: 'Delano por Decisao e a aposta mais segura. Volume dominant, mais sem poder de KO explosivo demonstrado no UFC. Ruchala sobrevive mais perde nos pontos.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Os Primeiros 2 Minutos', icon: 'Target', description: 'Se Delano encontrar o ritmo nos pes nos primeiros 2 minutos sem ser derrubado, a luta provavelmente ja esta decidida. Se Ruchala encaixar um TD cedo, tudo muda.' },
        { num: 2, title: 'A Agressividade de Ruchala nos TDs', icon: 'Shield', description: 'Compare com o debut contra Gomis. Ruchala esta tentando mais? Entrando mais fundo? Se as tentativas de TD aumentarem, mostra que fez ajustes. Se for o mesmo padrao, derrota repetida.' },
        { num: 3, title: 'O Volume de Delano no R2', icon: 'Activity', description: 'Delano fez 9.73 SLpM no debut. Esse numero se mantem no R2? Se o volume cair significativamente, pode indicar que Ruchala esta conseguindo diminuir o ritmo com clinch ou ameaca de TD.' },
        { num: 4, title: 'Reacao de Delano ao Takedown', icon: 'Zap', description: 'Se Ruchala encaixar um TD, observe a reacao de Delano. Levanta rapido? Fica preso embaixo? A habilidade de se levantar rapidamente pode ser a chave pra neutralizar o grappling do polones.' },
        { num: 5, title: 'A Linguagem Corporal de Ruchala no R3', icon: 'Brain', description: 'Se Ruchala estiver perdendo 2 rounds e parecer frustrado no R3, pode comecar a tomar riscos que abrem espaco pro KO de Delano. Desespero vs disciplina.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'DELANO VS RUCHALA', content: 'UFC FIGHT NIGHT\nApex, Las Vegas | 4 de Abril\n3 Rounds | Peso Pena\n\n16-3 vs 11-2\nStriker brasileiro vs Grappler polones\nVolume absurdo vs BJJ faixa marrom\n\nO classico striker vs grappler.', color: 'gold' },
        { slide_number: 2, title: 'JOSE DELANO', content: 'Recife, Brasil | 29 ans\n\nDebut UFC: W por Decisao Unanime\n9.73 Strikes Significativos por Minuto\n65% Precisao | 72% Defesa\n\nFaixa preta de Muay Thai.\nCampeao do Shooto Brasil.\nVolume absurdo. Metralhador.', color: 'red' },
        { slide_number: 3, title: 'ROBERT "FAKER" RUCHALA', content: 'Nowy Sacz, Polonia | 27 ans\n\nDebut UFC: L por Decisao Unanime (Gomis)\n2.27 SLpM | 35% Precisao\nFaixa marrom de BJJ\n\nPrecisa vencer pra sobreviver no roster.\nO grappling e a unica chance.', color: 'blue' },
        { slide_number: 4, title: 'OS NUMEROS', content: '9.73 vs 2.27 SLpM\n65% vs 35% Precisao\n72% vs 57% Defesa\n\nEm pe, nao tem jogo.\nA pergunta: Ruchala consegue\nlevar au sol?\n\n60% TDD de Delano diz: talvez.', color: 'gold' },
        { slide_number: 5, title: 'PREVISAO', content: 'DELANO por Decisao Unanime\n\nConfianca: MEDIA-ALTA\n62% Delano / 35% Ruchala\n\nVolume esmaga Debout.\nRuchala nao provou que consegue\nimpor o grappling no UFC.\n\nClassico striker vs grappler.\nO striker vence.', color: 'red' },
      ],
      twitter: [
        { num: '1/4', text: 'Delano vs Ruchala no sabado. O brasileiro que media 9.73 strikes por minuto no debut contra o polones faixa marrom de BJJ que perdeu o debut pro Gomis. Os numeros sao brutais.' },
        { num: '2/4', text: '9.73 vs 2.27 SLpM. 65% vs 35% de precisao. 72% vs 57% de defesa de strikes. Em pe, e um massacre anunciado. A unica chance de Ruchala e impor o grappling, mas contra Gomis ja nao conseguiu.' },
        { num: '3/4', text: 'Ruchala e faixa marrom de BJJ e campeao polones. Se levar pro chao, tem ferramentas. Mas Delano defende 60% dos TDs e o volume pune cada tentativa de entrada que falha. O dilema do grappler.' },
        { num: '4/4', text: 'Pick: Delano por decisao unanime. O volume e a precisao sao dominantes demais. Ruchala vai lutar pela sobrevivencia no roster, mas os numeros nao mentem. Striker brasileiro leva essa.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: '9.73 strikes significativos por minuto. Esse e o numero de Jose Delano no debut UFC. Quase 10. Por minuto. E agora ele enfrenta um grappler que perdeu o debut e precisa vencer pra sobreviver.' },
        { time: '10-25s', title: 'Ruchala', text: 'Robert Faker Ruchala. Faixa marrom de BJJ. Campeao polones de grappling. Treinou com Dustin Poirier. Mais no debut UFC, perdeu pra William Gomis sem conseguir impor o takedown. Agora e 0-1 e precisa vencer.' },
        { time: '25-40s', title: 'O Conflito', text: 'Striker vs Grappler. O classico do MMA. Delano com Muay Thai ceinture noire e volume absurdo. Ruchala com BJJ faixa marrom e wrestling. Se fica Debout, Delano esmaga. Se vai au sol, Ruchala pode surpreender. Quem impoe o estilo?' },
        { time: '40-55s', title: 'A Analise', text: 'Os numeros contam tudo: 9.73 contra 2.27 em volume. 65% contra 35% em precisao. Debout, sem comparacao. Ruchala precisa encaixar takedowns. Delano defende 60%. Cada tentativa que falha e mais dano absorvido. A matematica nao favorece o polones.' },
        { time: '55-70s', title: 'Pick e CTA', text: 'Pick: Delano por decisao unanime. O volume e a precisao dominam. Mais fique de olho nos primeiros 2 minutos. Se Ruchala derrubar cedo, tudo muda. Comenta quem voce acha que ganha.' },
      ],
      tiktok: [
        { hook: '9.73 strikes significativos por MINUTO. Esse cara e uma metralhadora humana.', body: 'Jose Delano. Brasileiro de Recife. ceinture noire de Muay Thai. No debut UFC, destruiu com volume. Agora enfrenta Ruchala, faixa marrom de BJJ da Polonia que perdeu o debut. Striker vs Grappler. Se ficar Debout, Delano esmaga. Se for au sol, Ruchala tem chance. Mais Delano defende 60% dos TDs e pune cada entrada. Desafio pro polones.', cta: 'Striker ou grappler? Quem voce aposta? Comenta!' },
      ],
      headlines: [
        'Delano vs Ruchala: O Metralhador Brasileiro Contra o Grappler Polones',
        '9.73 Strikes por Minuto: Jose Delano e o Volume Mais Brutal do Peso Pena',
        'Ruchala Precisa Vencer Pra Sobreviver no UFC. O Problema: Enfrenta um Muay Thai ceinture noire.',
        'Striker vs Grappler no Apex: O Classico do MMA no Main Card',
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '-180',
        fighter2_odds: '+155',
        fighter1_name: 'Jose Delano',
        fighter2_name: 'Robert Ruchala',
        source: 'Odds estimadas (abril 2026)',
      },
      edges: [
        { icon: 'Zap', titulo: 'Volume de Strikes Absurdo', stat_headline: '9.73 SLpM DE DELANO CONTRA 2.27 DE RUCHALA. DIFERENCA DE 4.3x.', contexto: 'Delano tem um dos maiores volumes do peso-pena no UFC. Em pe, a diferenca e abismal. Ruchala simplesmente nao compete nessa area.', implicacao_aposta: 'Favorece Delano por decisao ou TKO. Se a luta ficar em pe, e dominio total do brasileiro.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Target', titulo: 'Precisao Superior de Delano', stat_headline: '65% DE PRECISAO CONTRA 35%. DELANO ACERTA QUASE O DOBRO.', contexto: 'Alem do volume, Delano e preciso. 65% e numero de elite no peso-pena. Ruchala com 35% mostra que o striking nao e a area dele.', implicacao_aposta: 'Reforça Delano como favorito Debout. Prop de mais strikes acertados tem valor claro.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Shield', titulo: 'BJJ de Ruchala', stat_headline: 'FAIXA MARROM DE BJJ. CAMPEAO POLONES. GRAPPLER DE CARREIRA.', contexto: 'Se Ruchala levar au sol, tem as ferramentas pra buscar finalizacao ou controle. O problema e chegar la contra um cara que defende 60% dos TDs e pune com volume.', implicacao_aposta: 'Se voce acredita que Ruchala encaixa TDs, prop de submissao pode ter valor. Alto risco.', edge_level: 'leve', fighter_side: 'fighter2' },
        { icon: 'AlertTriangle', titulo: 'Ruchala 0-1 no UFC', stat_headline: 'PERDEU O DEBUT PRA GOMIS. NAO CONSEGUIU IMPOR O GRAPPLING.', contexto: 'No unico teste UFC, Ruchala falhou em impor seu estilo. Os numeros do debut (2.27 SLpM, 35% acc) sao preocupantes.', implicacao_aposta: 'Mais evidencia pro favorito Delano. Ruchala precisa mostrar algo muito diferente do debut.', edge_level: 'moderado', fighter_side: 'fighter1' },
      ],
      value_picks: [
        { tipo: 'Moneyline', pick: 'Delano ML', odds: '-180', confianca: 'alta', raciocinio: 'Os numeros sao claros demais. Volume e precisao dominantes em pe. Ruchala nao provou que consegue levar pro chao no nivel UFC. Favorito justo.' },
        { tipo: 'Metodo', pick: 'Delano por Decisao', odds: '+110', confianca: 'media', raciocinio: 'Delano venceu por decisao no debut. Ruchala e duro de finalizar (BJJ faixa marrom, recuperacao boa). O cenario mais provavel e dominio por pontos.' },
        { tipo: 'Over/Under', pick: 'Over 2.5 Rounds', odds: '-150', confianca: 'media', raciocinio: 'Ambos venceram/perderam o debut por decisao. Delano acumula dano mais do que busca o KO. Ruchala e grappler que sobrevive. Deve ir ate o fim.' },
        { tipo: 'Prop', pick: 'Ruchala por Submissao', odds: '+450', confianca: 'baixa', raciocinio: 'Aposta de alto risco e alta recompensa. Se Ruchala encaixar um TD cedo e transitar, a faixa marrom de BJJ pode aparecer. Mas precisa de tudo dar certo.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Ruchala por Decisao',
        descricao: 'Ruchala so vence essa luta se impor o grappling. Se ele esta vencendo por decisao, significa que controlou o chao o suficiente pra dominar nos pontos. Mais o historico dele (2 decisoes em 11 vitorias) e os numeros do debut dizem que e improvavel. Se Ruchala nao conseguir finalizar au sol, provavelmente esta perdendo Debout.',
      },
      disclaimer: 'Analyse statistique a titre informatif. Pariez de maniere responsable.',
    },
  },
};
