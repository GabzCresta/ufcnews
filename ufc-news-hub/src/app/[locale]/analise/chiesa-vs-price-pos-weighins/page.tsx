import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'chiesa-vs-price-pos-weighins',
  evento_id: null,
  slug: 'chiesa-vs-price-pos-weighins',
  titulo: 'Chiesa vs Price: Pos Weigh-Ins | A Dupla Aposentadoria e o Nocaute de 49 Dias Atras',
  subtitulo: 'Price foi nocauteado ha 49 DIAS. Jon Anik questionou publicamente como essa luta foi aprovada. Ambos anunciaram aposentadoria. Chiesa -575 a -900.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,88m', envergadura: '198cm', idade: 37, academia: 'American Kickboxing Academy' },
      fighter2: { altura: '1,85m', envergadura: '193cm', idade: 40, academia: 'Milwaukee' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Submissao R1-R2',
    confidence: 'ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Price KO\'d 49 Dias Atras', edge: 'fighter1', impact: 10, description: 'Price foi nocauteado por Veretennikov ha 49 dias. Jon Anik: "Eu nao costumo pedir aposentadoria de lutadores... mas as vezes me pergunto como isso acontece." A seguranca e uma preocupacao real.' },
      { factor: 'Chiesa E Grappler de Elite', edge: 'fighter1', impact: 9, description: 'Chiesa e especialista em grappling. Price ja foi submetido. Em uma luta de aposentadoria, Chiesa vai usar o que faz melhor: levar pro chao e finalizar.' },
      { factor: 'Dupla Aposentadoria', edge: 'fighter1', impact: 6, description: 'Ambos anunciaram aposentadoria. Price na pesagem cerimonial. Chiesa mentorando McKinney (tambem no card). Lutas emocionais com motivacao diferente.' },
      { factor: 'Short-Notice Fighter Stats', edge: 'fighter1', impact: 7, description: 'Lutadores short-notice perdem 63% das vezes historicamente. Price entrando sem camp completo, 49 dias apos KO.' },
    ],
    xFactor: {
      title: 'O Arrependimento de Chiesa',
      description: 'Chiesa revelou que seu unico arrependimento e nao ter dado o assento dele pra Calvin Kattar, o que teria resultado em uma luta contra Khabib. Essa e uma luta de legado e fechamento.',
    },
  },
  fighter1_info: {
    nome: 'Michael Chiesa',
    apelido: 'Maverick',
    record: '19-7-0',
    ranking: 'Sem ranking',
    ultimasLutas: [
      { result: 'W', opponent: 'Court McGee', method: 'Decisao Unanime', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Max Griffin', method: 'Decisao Unanime', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Tony Ferguson', method: 'Decisao Unanime', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Kevin Holland', method: 'Sub R1', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Niko Price',
    apelido: 'The Hybrid',
    record: '16-10-0 (2NC)',
    ranking: 'Sem ranking',
    ultimasLutas: [
      { result: 'L', opponent: 'Nikolay Veretennikov', method: 'TKO R1', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Jacobe Smith', method: 'Sub R2', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Gorimbo', method: 'Decisao Unanime', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Alex Morono', method: 'Decisao Unanime', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Meio Medio (170 lbs)',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
      evento_data: '28 de Marco, 2026',
      evento_local: 'Climate Pledge Arena, Seattle, Washington',
      categoria_peso: 'Meio Medio (170 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'A Ultima Luta de Ambos',
      tagline_sub: 'Price KO\'d ha 49 dias. Anik questionou a aprovacao. Ambos anunciaram aposentadoria. Chiesa -575 a -900.',
      fighter1: {
        nome_completo: 'Michael "Maverick" Chiesa',
        apelido: 'Maverick',
        sobrenome: 'Chiesa',
        record: '19-7-0',
        ranking: 'Sem ranking',
        info_extra: 'Spokane, WA | American Kickboxing Academy | 37 anos',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Niko "The Hybrid" Price',
        apelido: 'The Hybrid',
        sobrenome: 'Price',
        record: '16-10-0 (2NC)',
        ranking: 'Sem ranking',
        info_extra: 'Milwaukee, WI | 40 anos | KO\'d 49 dias atras',
        imagem_fullbody_url: null,
      },
    },

    narrativa: {
      html_content: `
        <!-- 49 DIAS -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">49 Dias Desde o Ultimo Nocaute</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/10 via-ufc-red/5 to-ufc-red/10"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
            <div class="relative p-6">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-3">PREOCUPACAO DE SEGURANCA</p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-blue-400">Niko Price</strong> foi nocauteado por Nikolay Veretennikov ha 49 dias. Quarenta e nove dias. Isso e menos de dois meses entre ser nocauteado e lutar novamente. Jon Anik, narrador principal do UFC, disse publicamente: <em class="text-white/80">"Eu nao costumo pedir aposentadoria de lutadores... mas as vezes me pergunto como isso acontece."</em>
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                O protocolo medico pos-nocaute varia, mas a maioria dos especialistas recomenda suspensao minima de 60 a 90 dias. Price esta voltando com 49. A comissao atletica aprovou, mas a preocupacao e real. Aos 40 anos, a recuperacao neurologica e mais lenta. E ele ja tinha 2 derrotas seguidas antes.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                Lutadores short-notice perdem 63% das vezes estatisticamente. Price entrando sem camp completo, 49 dias apos nocaute, aos 40 anos, contra um grappler que pode evitar qualquer troca. Os numeros nao favorecem.
              </p>
            </div>
          </div>
        </div>

        <!-- DUPLA APOSENTADORIA -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Duas Carreiras Se Encerram em Seattle</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-ufc-red/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-ufc-red rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-ufc-red mb-2">Chiesa: O Mentor</p>
                <p class="text-sm text-white/60 leading-relaxed mb-3">
                  <strong class="text-ufc-red">Chiesa</strong> esta mentorando Terrance McKinney, que tambem luta nesse card. A conexao emocional e real. O unico arrependimento da carreira: nao ter dado o assento pra Calvin Kattar, o que teria resultado em uma luta contra Khabib.
                </p>
                <p class="text-sm text-white/60 leading-relaxed">
                  <em class="text-white/80">"Ele vai ter que apagar minhas luzes, e eu nao vou deixar isso acontecer."</em>
                </p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Price: O Warrior</p>
                <p class="text-sm text-white/60 leading-relaxed mb-3">
                  <strong class="text-blue-400">Price</strong> anunciou aposentadoria na pesagem cerimonial. Aos 40, 49 dias apos nocaute. Sempre foi um fighter de entretenimento puro: nocautes espetaculares, upkicks, finalizacoes malucas.
                </p>
                <p class="text-sm text-white/60 leading-relaxed">
                  A carreira de Price e definida por momentos. A ultima luta e a chance de mais um. Mas contra um grappler que pode neutralizar tudo, a despedida pode ser curta.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- O MATCHUP -->
        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">Grappler vs Brawler: A Matematica E Clara</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-transparent to-emerald-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 to-emerald-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-ufc-red">Chiesa</strong> e grappler. Sempre foi. O grappling neutraliza completamente o unico trunfo de Price: o poder nas maos. Price ja foi submetido. A matematica e simples: Chiesa derruba, controla, e busca submissao.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                O unico cenario complicado e se Chiesa decidir trocar por emocao. E luta de aposentadoria. A emocao pode fazer Chiesa buscar finish em pe que nao faz sentido. Mas Chiesa a -575 a -900 sugere que o mercado nao acredita nesse cenario.
              </p>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Contexto', fighter1: 'Ultima luta, mentorando McKinney', fighter2: 'Ultima luta, 49 dias apos KO' },
        { dimensao: 'Seguranca', fighter1: 'Saudavel, sem lesoes recentes', fighter2: 'KO ha 49 dias. Anik questionou publicamente.' },
        { dimensao: 'Estilo', fighter1: 'Grappler de elite, pode neutralizar', fighter2: 'Brawler, poder nas maos, caos' },
        { dimensao: 'Legado', fighter1: 'Sair por cima pra inspirar McKinney', fighter2: 'Um ultimo momento antes de parar' },
        { dimensao: 'Emocao', fighter1: 'Arrependimento do Kattar/Khabib', fighter2: 'Aposentadoria na pesagem cerimonial' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'CHIESA SAI POR CIMA',
          subtitulo: 'O grappler controla a ultima luta e se aposenta com vitoria',
          consequencias: [
            { tag: 'DESPEDIDA', texto: 'Chiesa se aposenta com vitoria. Momento emocional com McKinney no octogono.' },
            { tag: 'LEGADO', texto: 'Encerra com 20-7 e narrativa de dedicacao total.' },
          ],
          proxima_luta: 'Aposentadoria. Transicao pra treinador/comentarista.',
        },
        fighter2_vence: {
          titulo: 'O ULTIMO MOMENTO DE PRICE',
          subtitulo: 'Niko Price faz algo inesperado e espetacular uma ultima vez',
          consequencias: [
            { tag: 'HIGHLIGHT', texto: 'Mais um momento Price pra colecao. Despedida dos sonhos.' },
            { tag: 'PREOCUPACAO', texto: 'Se Chiesa perdeu pra Price pos-KO, o declinio e inegavel.' },
          ],
          proxima_luta: 'Aposentadoria de ambos.',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Michael Chiesa',
        color: 'red',
        recent_fights: [
          { date: 'Jun 2025', opponent: 'Court McGee', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria por pontos contra veterano.' },
          { date: 'Jan 2025', opponent: 'Max Griffin', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria solida por decisao.' },
          { date: 'Jul 2024', opponent: 'Tony Ferguson', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria sobre veterano lendario.' },
          { date: 'Nov 2023', opponent: 'Kevin Holland', result: 'L', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Submetido rapidamente.' },
        ],
        momentum_score: 6,
        momentum_label: 'Em Recuperacao',
        momentum_trend: 'ascending',
        momentum_note: 'Tres vitorias seguidas contra McGee, Griffin e Ferguson apos a derrota pra Holland. Grappling funciona contra inferiores. Aos 37, aposentadoria faz sentido. Contra Price (40, pos-KO), Chiesa e claramente o mais saudavel e preparado.',
      },
      fighter2: {
        nome: 'Niko Price',
        color: 'blue',
        recent_fights: [
          { date: 'Fev 2026', opponent: 'Nikolay Veretennikov', result: 'L', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Nocauteado ha 49 dias. Preocupacao de seguranca.' },
          { date: 'Jun 2025', opponent: 'Jacobe Smith', result: 'L', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Submetido no segundo round.' },
          { date: 'Out 2024', opponent: 'Gorimbo', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Terceira derrota seguida.' },
          { date: 'Jun 2024', opponent: 'Alex Morono', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Ultima vitoria. Decisao solida.' },
        ],
        momentum_score: 2,
        momentum_label: 'Em Declinio Terminal',
        momentum_trend: 'descending',
        momentum_note: 'KO ha 49 dias. 40 anos. Tres derrotas seguidas (Veretennikov, Jacobe Smith, Gorimbo). Jon Anik questionou publicamente. Anunciou aposentadoria na pesagem. Short-notice (63% loss rate). Combinacao de fatores extremamente desfavoravel.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Chiesa',
        media_oponentes: 2,
        media_oponentes_label: 'Medio',
        aproveitamento: '3W-1L (75%)',
        contra_top5: '0W-0L',
      },
      fighter2: {
        nome: 'Price',
        media_oponentes: 1,
        media_oponentes_label: 'Ruim',
        aproveitamento: '1W-3L (25%)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Nivel baixo de ambos nas lutas recentes. Luta de despedida, nao de contencao. O contexto emocional importa mais que estatisticas.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 2.86, valueB: 3.30, maxVal: 6, format: 'decimal', note: 'Price com volume maior. Mas Chiesa nao quer trocar.' },
        { label: 'Precisao de Strikes (%)', valueA: 46, valueB: 42, maxVal: 100, format: 'percent', note: 'Chiesa mais preciso quando decide trocar.' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.60, valueB: 4.10, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Price absorve MUITO mais. Queixo castigado.' },
        { label: 'Defesa de Strikes (%)', valueA: 56, valueB: 48, maxVal: 100, format: 'percent', note: 'Chiesa defende mais porque vai pro chao.' },
        { label: 'Takedowns por 15 Min', valueA: 3.20, valueB: 0.50, maxVal: 5, format: 'decimal', note: 'Diferenca BRUTAL. Chiesa vive de takedowns.' },
        { label: 'Defesa de Takedown (%)', valueA: 75, valueB: 55, maxVal: 100, format: 'percent', note: 'Price com TDD fraca. Cenario perfeito pra Chiesa.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '37 anos', fighter2: '40 anos', note: 'Ambos veteranos. Price 3 anos mais velho.' },
        { label: 'Altura', fighter1: '1,88m (6\'2")', fighter2: '1,85m (6\'1")', note: 'Tamanho similar.' },
        { label: 'Envergadura', fighter1: '198cm (78")', fighter2: '193cm (76")', note: 'Chiesa com leve vantagem de reach.' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo', note: 'Ambos ortodoxos.' },
        { label: 'Dias Desde Ultimo KO', fighter1: 'N/A', fighter2: '49 dias', note: 'A estatistica mais preocupante.' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Grappling', valueA: 78, valueB: 50, labelA: 'Muito Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Chiesa e grappler de carreira. Price ja foi submetido. O chao e o territorio de Chiesa. Com 49 dias pos-KO, Price vai pro chao onde a seguranca e maior pro arbitro.' },
        { label: 'Striking', valueA: 52, valueB: 65, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Price tem poder real. Nocautes espetaculares na carreira. Mas aos 40, pos-KO, o poder e o queixo diminuiram.' },
        { label: 'Cardio', valueA: 65, valueB: 48, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Price com cardio questionavel aos 40, pos-KO em 49 dias. Chiesa nao e monstro de cardio mas e mais fresco.' },
        { label: 'Durabilidade', valueA: 62, valueB: 40, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Price KO\'d ha 49 dias. Anik questionou seguranca. Aos 40, durabilidade do queixo e preocupacao maxima.' },
        { label: 'Caos e Imprevisibilidade', valueA: 35, valueB: 72, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Unico trunfo de Price: imprevisibilidade. Upkicks, KOs de posicoes impossiveis. Se Chiesa trocar em pe, Price pode criar caos.' },
        { label: 'Game Plan', valueA: 72, valueB: 42, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Chiesa tem plano claro: derrubar e controlar. Price e impulsivo. Em aposentadoria, emocao pode tornar Price mais impulsivo ainda.' },
      ],
      insight: 'Matchup estilístico favoravel a Chiesa em quase tudo. Grappling neutraliza o poder de Price. Durabilidade pos-KO e a preocupacao. Unico cenario de Price e se Chiesa trocar em pe por emocao.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Chiesa',
        ko_tko: { count: 2, percent: 11 },
        submission: { count: 10, percent: 53 },
        decision: { count: 7, percent: 36 },
        total_wins: 19,
      },
      fighter2: {
        nome: 'Price',
        ko_tko: { count: 9, percent: 56 },
        submission: { count: 4, percent: 25 },
        decision: { count: 3, percent: 19 },
        total_wins: 16,
      },
      insight: 'Chiesa 56% submissao. Price 56% KO/TKO. A luta define qual terreno prevalece. Takedowns de Chiesa (3.20/15min) vs TDD de Price (55%) = chao e o destino.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 5,
          danger_label: 'VANTAGEM CHIESA',
          color: 'red',
          title: 'Takedown e Controle',
          description: 'Chiesa vai derrubar Price no R1. 3.20 TDs contra 55% TDD. Price e perigoso nos primeiros 30 segundos, mas se Chiesa sobreviver a explosao inicial (que pode estar comprometida pelo KO recente), o controle comeca.',
        },
        {
          rounds: 'R2',
          danger_level: 3,
          danger_label: 'VANTAGEM CHIESA',
          color: 'red',
          title: 'Submissao ou Dominio',
          description: 'Se Price nao finalizou no R1, o R2 e territorio de Chiesa. Price com 40 anos, pos-KO, sem camp completo. O cardio vai falhar. Chiesa busca submissao. Cenario mais provavel de finish.',
        },
        {
          rounds: 'R3',
          danger_level: 2,
          danger_label: 'VANTAGEM CHIESA',
          color: 'red',
          title: 'Se Chegar Aqui',
          description: 'Se chegar ao R3, Chiesa ja ganhou nos pontos. Price esta exausto. Vitoria confortavel ou finish tardio. O R3 provavelmente nao e necessario.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'AlertTriangle', title: '49 Dias Apos KO', fighter: 'Price', risk_level: 'RISCO ALTO', risk_color: 'red', description: 'Nocauteado ha 49 dias. Protocolo medico recomenda 60-90 dias. Jon Anik questionou publicamente. Preocupacao real de seguranca e durabilidade.' },
        { icon: 'Clock', title: 'Short-Notice (63% Loss Rate)', fighter: 'Price', risk_level: 'RISCO MEDIO', risk_color: 'yellow', description: 'Sem camp completo. 63% loss rate historico. Combinado com KO recente e idade, cenario extremamente desfavoravel.' },
        { icon: 'Brain', title: 'Dupla Aposentadoria', fighter: 'Ambos', risk_level: 'NEUTRO', risk_color: 'neutral', description: 'Ambos se aposentando. Chiesa pode buscar finish emotivo em pe (ruim pro game plan). Price pode lutar sem medo (bom pro caos). Imprevisibilidade emocional.' },
        { icon: 'TrendingUp', title: 'Chiesa Mentorando McKinney', fighter: 'Chiesa', risk_level: 'POSITIVO', risk_color: 'green', description: 'Mentorando McKinney (no card). Conexao emocional. Quer sair por cima pra inspirar o pupilo.' },
        { icon: 'Shield', title: 'Arrependimento do Kattar/Khabib', fighter: 'Chiesa', risk_level: 'POSITIVO', risk_color: 'green', description: 'O arrependimento de uma carreira. Luta com intensidade de quem nao quer mais arrependimentos.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Chiesa',
        total_probability: 82,
        scenarios: [
          { name: 'Submissao Classica', probability: 40, method: 'Submissao R1-R2', description: 'Derruba, passa guarda, busca RNC ou arm triangle. Price pos-KO sem energia pra escapar. Cenario mais provavel.' },
          { name: 'Decisao por Controle', probability: 25, method: 'Decisao Unanime', description: 'Derruba e controla por 3 rounds sem conseguir sub. Tempo de controle massivo. Confortavel nos pontos.' },
          { name: 'TKO por Ground and Pound', probability: 17, method: 'TKO R2-R3', description: 'Price desgastado. Chiesa derruba, GnP contra queixo pos-KO forca arbitro a parar.' },
        ],
      },
      fighter2: {
        nome: 'Price',
        total_probability: 16,
        scenarios: [
          { name: 'Caos nos Primeiros 30 Segundos', probability: 8, method: 'KO R1', description: 'Power shot maluco antes do takedown. Upkick, overhand. O unico cenario realista.' },
          { name: 'Submissao no Chao', probability: 5, method: 'Submissao R1-R2', description: 'Price perigoso no chao tambem. Submissoes de posicoes improvaveis. Triangle ou armbar no scramble.' },
          { name: 'Decisao por Volume', probability: 3, method: 'Decisao Unanime', description: 'Extremamente improvavel dado o grappling de Chiesa e o estado de Price.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Michael Chiesa',
      winner_side: 'fighter1',
      predicted_method: 'Submissao R1-R2',
      confidence_score: 9,
      confidence_label: 'ALTA',
      explanation: 'A luta mais previsivel do card. Chiesa grappler. Price KO\'d ha 49 dias. 3.20 TDs/15min vs 55% TDD. A matematica e brutal. O unico cenario de Price e acertar algo nos primeiros 30 segundos. A confianca e ALTA porque matchup, contexto fisico, e estatisticas apontam todos na mesma direcao. Chiesa NAO tem valor a -575 a -900 no ML. Igreja por Submissao e a aposta limpa.',
      x_factor: {
        title: 'A Emocao da Aposentadoria',
        description: 'Ambos estao se aposentando. Chiesa pode ficar emotivo e trocar em pe em vez de usar grappling. Se fizer isso, abre espaco pra imprevisibilidade de Price. Mas a -900, o mercado nao acredita nesse cenario.',
      },
      upset_alert: {
        title: 'O Caos de Niko Price E Real',
        description: 'Price e imprevisivel. Upkicks, KOs de costas, finalizacoes impossiveis. Mesmo diminuido aos 40 e pos-KO, a imprevisibilidade e inerente. Os 16% sao reais.',
      },
      probabilities: {
        fighter1: { nome: 'Chiesa', percent: 82 },
        fighter2: { nome: 'Price', percent: 16 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Chiesa ML (-575 a -900)', reasoning: 'ZERO valor. R$900 pra ganhar R$100. Contra um cara de 40 anos KO\'d ha 49 dias. Nao aposte no ML.' },
        method: { pick: 'Chiesa por Submissao (-150)', reasoning: '56% das vitorias por sub. 3.20 TDs vs 55% TDD. O destino e o chao. -150 justo pro cenario mais provavel.' },
        over_under: { pick: 'Over 1.5 Rounds (-166)', rounds: 1.5, reasoning: 'Sub provavelmente vem no R2 apos controle no R1. Chiesa controla primeiro, finaliza depois. Over 1.5 e solido.' },
        best_value: 'Chiesa por Submissao -150 e a aposta mais limpa. Over 1.5 -166 como segunda opcao. NAO aposte ML a -900. Price ML +600 como micro-aposta de entretenimento (R$10-20 no rei do caos).',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Primeiros 30 Segundos', icon: 'Zap', description: 'Se Price vai fazer algo, e agora. Se Chiesa absorver a explosao inicial, a luta esta decidida. Se Price conectar, o caos comeca.' },
        { num: 2, title: 'Chiesa Vai Direto Pro Takedown?', icon: 'Target', description: 'Se Chiesa for direto pro chao (como deveria), resolve em menos de 1 minuto. Se trocar em pe por emocao, red flag pra quem apostou nele.' },
        { num: 3, title: 'Reacao de Price ao Primeiro Golpe', icon: 'AlertTriangle', description: '49 dias pos-KO. Observe se Price hesita ou recua excessivamente. Se o queixo estiver comprometido, aparece no primeiro golpe significativo.' },
        { num: 4, title: 'Energia de Price no R2', icon: 'Activity', description: '40 anos, pos-KO, short-notice. Se chegar ao R2 visivelmente cansado, Chiesa controla ate a submissao.' },
        { num: 5, title: 'O Momento Pos-Luta', icon: 'Brain', description: 'Independente do resultado, o pos-luta vai ser emocional. McKinney abracar Chiesa. As mensagens de aposentadoria. O momento humano transcende a analise.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: '49 DIAS', content: 'CHIESA vs PRICE\nPOS WEIGH-INS\n\nPrice foi KO\'d ha 49 DIAS.\nAnik: "Me pergunto como isso acontece."\n\nAmbos anunciaram APOSENTADORIA.\n\nChiesa: -575 a -900\nPrice: +425 a +600\n\nA ultima luta de ambos.', color: 'gold' },
        { slide_number: 2, title: 'A MATEMATICA', content: 'CHIESA: 3.20 TDs/15min\n56% vitorias por submissao\n\nPRICE: 55% TDD\n49 dias pos-KO. 40 anos.\nShort-notice (63% loss rate)\n\nMatematica BRUTAL.', color: 'red' },
        { slide_number: 3, title: 'PREVISAO', content: 'CHIESA por Submissao R1-R2\nConfianca: ALTA (9/10)\n82% Chiesa / 16% Price\n\nNAO aposte ML a -900.\nChiesa Sub -150: aposta limpa.\nOver 1.5 -166: seguranca.', color: 'red' },
      ],
      twitter: [
        { num: '1/3', text: 'POS WEIGH-INS: Chiesa vs Price. Price foi KO\'d ha 49 DIAS. Jon Anik questionou. Ambos se aposentando. Chiesa: -575 a -900. A luta mais previsivel do card.' },
        { num: '2/3', text: 'Chiesa: 3.20 TDs/15min, 56% sub. Price: 55% TDD, 40 anos, pos-KO, short-notice (63% loss). A matematica e brutal. Submissao R1-R2 e o destino.' },
        { num: '3/3', text: 'Pick: Chiesa por Sub R1-R2. ALTA confianca. NAO aposte ML a -900. Chiesa Sub -150 = aposta limpa. Price +600 como R$10 de entretenimento no rei do caos.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: 'Price foi nocauteado ha 49 dias. E ja vai lutar de novo. Jon Anik questionou publicamente.' },
        { time: '10-30s', title: 'Contexto', text: 'Dupla aposentadoria. Chiesa mentorando McKinney. Arrependimento do Kattar/Khabib. Price anunciou na pesagem. Emocao maxima.' },
        { time: '30-50s', title: 'Analise', text: 'Chiesa: 3.20 TDs. Price: 55% TDD. Short-notice 63% loss. O grappling neutraliza tudo. Submissao R1-R2.' },
        { time: '50-65s', title: 'Apostas', text: 'NAO aposte ML -900. Chiesa Sub -150 e a aposta limpa. Over 1.5 -166 como seguranca.' },
        { time: '65-75s', title: 'CTA', text: 'Price ainda pode criar caos? Comenta e segue.' },
      ],
      tiktok: [
        { hook: 'Esse lutador foi NOCAUTEADO ha 49 dias e ja vai lutar de novo.', body: 'Niko Price. KO ha 49 dias. 40 anos. Contra Chiesa, grappler com 3.20 TDs. Ambos estao se aposentando. A matematica e brutal mas Price e o rei do caos. Upkicks, nocautes de costas. A ultima luta de ambos.', cta: 'Um ultimo momento de caos ou submissao rapida? Comenta!' },
      ],
      headlines: [
        '49 Dias Apos KO: Como Essa Luta Foi Aprovada?',
        'Dupla Aposentadoria: Chiesa e Price Se Despedem em Seattle',
        'A Matematica Brutal: 3.20 TDs vs 55% TDD',
        'Chiesa Sub -150: A Aposta Mais Limpa do Card',
      ],
      podcast: [
        {
          timestamp: '0:00-5:00',
          title: 'Seguranca, Aposentadoria e a Aposta Mais Limpa',
          talking_points: [
            'Price KO\'d ha 49 dias. Protocolo: 60-90 dias. Anik questionou publicamente.',
            'Dupla aposentadoria. Chiesa mentorando McKinney. Price anunciou na pesagem.',
            'Matematica: 3.20 TDs vs 55% TDD. 56% sub. Short-notice 63% loss.',
            'Pick: Chiesa Sub -150. NAO aposte ML -900. Over 1.5 -166.',
          ],
          discussion_questions: [
            'A comissao deveria ter aprovado 49 dias pos-KO?',
            'Chiesa vai ter disciplina ou a emocao domina?',
          ],
        },
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '-575 a -900',
        fighter2_odds: '+425 a +600',
        fighter1_name: 'Michael Chiesa',
        fighter2_name: 'Niko Price',
        source: 'Range de DraftKings, FanDuel e BetMGM (marco 2026)',
      },
      edges: [
        { icon: 'Target', titulo: 'Grappling vs TDD Fraco', stat_headline: 'CHIESA: 3.20 TDS/15MIN. PRICE: 55% TDD. MATEMATICA UNILATERAL.', contexto: 'Chiesa vive de TDs. Price nao defende. 56% das vitorias de Chiesa por sub.', implicacao_aposta: 'Chiesa Sub -150 e a aposta mais limpa. Metodo mais valioso que ML.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'AlertTriangle', titulo: '49 Dias Pos-KO + 40 Anos', stat_headline: 'PRICE KO\'D HA 49 DIAS. PROTOCOLO: 60-90 DIAS MINIMO.', contexto: 'Anik questionou publicamente. Durabilidade comprometida. Recuperacao mais lenta aos 40.', implicacao_aposta: 'Desfavorece qualquer aposta em Price exceto micro-aposta.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'Clock', titulo: 'Short-Notice: 63% Loss Rate', stat_headline: 'LUTADORES SHORT-NOTICE PERDEM 63% DAS VEZES.', contexto: 'Sem camp completo. Combinado com KO e idade, fatores desfavoraveis excepcionais.', implicacao_aposta: 'Todos os fatores pra Chiesa. So questao de preco.', edge_level: 'moderado', fighter_side: 'fighter1' },
        { icon: 'Zap', titulo: 'Fator Caos de Niko Price', stat_headline: 'UPKICKS, KOS DE COSTAS, FINALIZACOES IMPOSSIVEIS. REI DO CAOS.', contexto: 'Imprevisibilidade inerente. Mesmo diminuido, o caos e real.', implicacao_aposta: 'Price +600 como micro-aposta de entretenimento (R$10-20).', edge_level: 'leve', fighter_side: 'fighter2' },
      ],
      value_picks: [
        { tipo: 'Metodo', pick: 'Chiesa por Submissao', odds: '-150', confianca: 'alta', raciocinio: 'Aposta mais limpa do card. 56% sub rate. 3.20 TDs vs 55% TDD. Destino e o chao.' },
        { tipo: 'Over/Under', pick: 'Over 1.5 Rounds', odds: '-166', confianca: 'media', raciocinio: 'Sub provavelmente no R2 apos controle no R1. Chiesa controla primeiro.' },
        { tipo: 'Moneyline', pick: 'Price ML (micro-aposta)', odds: '+600', confianca: 'baixa', raciocinio: 'R$10-20 no rei do caos. Nao e aposta seria. E entretenimento. O cara ja fez upkick de costas.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Chiesa ML a -575 a -900',
        descricao: 'R$900 pra ganhar R$100. Contra lutador de 40 anos KO\'d ha 49 dias. Risco minimo mas retorno RIDICULO. Se Price acertar upkick, perde R$900. Chiesa Sub -150 da o mesmo resultado com risco/retorno MUITO melhor.',
      },
      disclaimer: 'Analise pos weigh-ins para fins informativos. Aposte com responsabilidade.',
    },
  },
};

export default function Page() {
  return <FullAnalysisView analise={analise} />;
}
