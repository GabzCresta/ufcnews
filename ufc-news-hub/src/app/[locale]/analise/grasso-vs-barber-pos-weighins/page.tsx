import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'grasso-vs-barber-pos-weighins',
  evento_id: null,
  slug: 'grasso-vs-barber-pos-weighins',
  titulo: 'Grasso vs Barber II: Pos Weigh-Ins | Perna Quebrada, Wrestling Novo e a Revanche',
  subtitulo: 'Grasso quebrou a perna em novembro de 2024. Barber agora tem wrestling: 3 TDs e 6:20 de controle contra Karine Silva. Odds: Barber -158 a -190.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,63m', envergadura: '163cm', idade: 33, academia: 'Lobo Gym, Guadalajara' },
      fighter2: { altura: '1,68m', envergadura: '173cm', idade: 27, academia: 'High Altitude MA, Denver' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Decisao Unanime',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Perna Quebrada + Declinio de Striking', edge: 'fighter2', impact: 9, description: 'Grasso quebrou a perna em novembro 2024. Perdeu titulo pra Shevchenko (set 2024). Perdeu pra Natalia Silva (mai 2025) com apenas 32% de precisao. Duas derrotas seguidas + lesao grave = declinio real.' },
      { factor: 'Wrestling Novo de Barber', edge: 'fighter2', impact: 8, description: 'Na primeira luta, Barber nao conseguiu penetrar a high guard de Grasso. Agora tem wrestling: 3 TDs, 6:20 de controle contra Karine Silva. Arma nova que muda a dinamica completamente.' },
      { factor: 'Cardio de Altitude de Denver', edge: 'fighter2', impact: 7, description: 'Barber treina no High Altitude MA em Denver com Guilherme Faria. Record no R3: 6-2. Ela NAO cansa. Voltou de pneumonia + strep + staph (9 dias hospitalizada) e venceu.' },
      { factor: 'Experiencia de Titulo', edge: 'fighter1', impact: 6, description: 'Grasso lutou 3x pelo titulo contra Shevchenko. Esse nivel de experiencia em championship fights e raro. A questao e se a Grasso pos-lesao ainda consegue acessar esse nivel.' },
    ],
    xFactor: {
      title: 'Barber Sobreviveu Pneumonia, Strep e Staph',
      description: 'Barber ficou 9 dias hospitalizada apos UFC 299 (pneumonia, strep, staph). 21 meses de layoff. Voltou e venceu convincentemente. A resiliencia mental e fisica e absurda. Grasso voltando de perna quebrada tem paralelo, mas Barber ja provou que volta forte.',
    },
  },
  fighter1_info: {
    nome: 'Alexa Grasso',
    record: '16-4-1',
    ranking: '#3 Peso Mosca',
    ultimasLutas: [
      { result: 'L', opponent: 'Natalia Silva', method: 'Decisao Unanime', event: 'UFC 315' },
      { result: 'L', opponent: 'Valentina Shevchenko', method: 'Decisao Unanime', event: 'UFC 306' },
      { result: 'D', opponent: 'Valentina Shevchenko', method: 'Empate Dividido', event: 'Noche UFC' },
    ],
  },
  fighter2_info: {
    nome: 'Maycee Barber',
    apelido: 'The Future',
    record: '15-2-0',
    ranking: '#5 Peso Mosca',
    ultimasLutas: [
      { result: 'W', opponent: 'Karine Silva', method: 'Decisao Unanime', event: 'UFC 314' },
      { result: 'W', opponent: 'Amanda Ribas', method: 'TKO R2', event: 'UFC 299' },
      { result: 'W', opponent: 'Andrea Lee', method: 'Decisao Unanime', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Mosca (125 lbs)',
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
      categoria_peso: 'Peso Mosca (125 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'A Perna Quebrada e a Lutadora Completa',
      tagline_sub: 'Grasso volta de fratura na perna + 2 derrotas. Barber agora tem wrestling e treina em altitude. A revanche que ninguem previa.',
      fighter1: {
        nome_completo: 'Alexa Grasso',
        apelido: '',
        sobrenome: 'Grasso',
        record: '16-4-1',
        ranking: '#3 Peso Mosca',
        info_extra: 'Guadalajara, Mexico | Lobo Gym | 33 anos',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Maycee "The Future" Barber',
        apelido: 'The Future',
        sobrenome: 'Barber',
        record: '15-2-0',
        ranking: '#5 Peso Mosca',
        info_extra: 'Denver, CO | High Altitude MA | 27 anos',
        imagem_fullbody_url: null,
      },
    },

    narrativa: {
      html_content: `
        <!-- GRASSO: O DECLINIO DOCUMENTADO -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">O Capitulo Mais Dificil de Grasso</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/10 via-ufc-red/5 to-ufc-red/10"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
            <div class="relative p-6">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-3">TIMELINE DE DECLINIO</p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                A historia de <strong class="text-ufc-red">Grasso</strong> nos ultimos 18 meses e brutal. Setembro 2024: perdeu o titulo pra Shevchenko por decisao. Novembro 2024: postou no Instagram de bota e muletas. Perna QUEBRADA. A fratura exigiu reabilitacao significativa. Maio 2025: voltou contra Natalia Silva e perdeu novamente, com apenas 32% de precisao nos strikes. Duas derrotas seguidas mais uma lesao grave.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                Os numeros contra Natalia Silva sao preocupantes. 32% de precisao. <strong class="text-ufc-red">Grasso</strong> sempre foi uma striker tecnica, com timing preciso e contragolpes elegantes. Quando a precisao cai pra 32%, algo mudou fundamentalmente. Pode ser a confianca na perna pos-fratura. Pode ser declinio natural aos 33. Pode ser que o nivel subiu ao redor dela. Provavelmente e uma combinacao dos tres.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/15 to-transparent"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-ufc-red"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Set 2024</p>
                <p class="font-display text-lg text-white mb-2">SHEVCHENKO III</p>
                <p class="text-xs text-white/50 leading-relaxed">Perdeu titulo por decisao. Fim da era Grasso no flyweight.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">Perdeu Titulo</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-amber-400/15 to-transparent"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-amber-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">Nov 2024</p>
                <p class="font-display text-lg text-white mb-2">PERNA QUEBRADA</p>
                <p class="text-xs text-white/50 leading-relaxed">Instagram: bota e muletas. Fratura que exigiu reabilitacao longa.</p>
                <div class="mt-3 inline-block rounded-full bg-amber-400/20 px-3 py-1 text-[9px] font-bold uppercase text-amber-400">Lesao Grave</div>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/15 to-transparent"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-ufc-red"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Mai 2025</p>
                <p class="font-display text-lg text-white mb-2">NATALIA SILVA</p>
                <p class="text-xs text-white/50 leading-relaxed">32% precisao de strikes. Performance mais fraca da carreira.</p>
                <div class="mt-3 inline-block rounded-full bg-ufc-red/20 px-3 py-1 text-[9px] font-bold uppercase text-ufc-red">2a Derrota</div>
              </div>
            </div>
          </div>
        </div>

        <!-- BARBER: A EVOLUCAO -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">A Barber 2.0: Nao E Mais So Brawler</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                Na primeira luta, <strong class="text-blue-400">Barber</strong> nao conseguiu penetrar a high guard de Grasso. Grasso venceu por counter-boxing elegante. A Barber de 2021 era puro power com pouca estrategia. A versao 2026 e uma lutadora COMPLETA.
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                O wrestling mudou tudo. Contra Karine Silva, <strong class="text-blue-400">Barber</strong> registrou 3 takedowns e 6 minutos e 20 segundos de tempo de controle. Isso NAO existia no arsenal dela quando perdeu pra Grasso. Agora, se a high guard funcionar, Barber pode simplesmente mudar pro wrestling e dominar no chao. E uma arma que a Grasso da primeira luta nao precisou enfrentar.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                A propria Barber resume: <em class="text-white/80">"Eu nao sou uma lutadora bonita. Sou uma lutadora muito agressiva. Eu faco as coisas feias, e funciona."</em> Treina no High Altitude MA em Denver com o tecnico de striking Guilherme Faria. O treino em altitude = vantagem de cardio natural. Record no R3: 6-2. Ela NAO cansa.
              </p>
            </div>
          </div>
        </div>

        <!-- BARBER: RESILIENCIA -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">9 Dias no Hospital e a Volta</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-blue-400/5 to-blue-400/10"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
            <div class="relative p-6">
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                Apos o UFC 299, <strong class="text-blue-400">Barber</strong> foi hospitalizada por 9 dias com pneumonia, strep e infeccao por staph. Simultaneamente. Ficou 21 meses afastada. A maioria dos lutadores quebraria psicologicamente com tudo isso.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                Barber voltou e venceu. Convincentemente. A resiliencia nao e discurso motivacional: e historico medico documentado. Contra Grasso, que esta voltando de perna quebrada, a comparacao de retornos de lesao favorece Barber. Ambas sofreram, mas Barber ja provou que volta forte. Grasso ainda precisa provar.
              </p>
            </div>
          </div>
        </div>

        <!-- A REVANCHE -->
        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">O Que Mudou Desde a Primeira Luta</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-ufc-red/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-ufc-red rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-ufc-red mb-2">Grasso na 1a luta</p>
                <p class="text-sm text-white/60 leading-relaxed">High guard impenetravel. Counter-boxing preciso. Vitoria tecnica clara. Barber nao tinha resposta.</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-ufc-red/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-ufc-red rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-ufc-red mb-2">Grasso agora</p>
                <p class="text-sm text-white/60 leading-relaxed">Perna quebrada (nov 2024). 2 derrotas seguidas. 32% precisao vs Natalia Silva. A versao pos-lesao e uma incognita.</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Barber na 1a luta</p>
                <p class="text-sm text-white/60 leading-relaxed">Puro power. Sem wrestling. Nao conseguia penetrar a high guard. Previsivel e limitada.</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent"></div>
              <div class="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-full"></div>
              <div class="relative p-5 pl-6">
                <p class="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Barber agora</p>
                <p class="text-sm text-white/60 leading-relaxed">Wrestling (3 TDs, 6:20 controle vs K. Silva). Treino em altitude. R3 record: 6-2. Sobreviveu pneumonia+strep+staph. Lutadora completa.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Ranking', fighter1: '#3 Peso Mosca', fighter2: '#5 Peso Mosca' },
        { dimensao: 'Sequencia', fighter1: '2 derrotas seguidas + lesao', fighter2: '7 vitorias seguidas' },
        { dimensao: 'Evolucao', fighter1: 'Voltando de perna quebrada, precisa provar', fighter2: 'Agora tem wrestling + treino em altitude' },
        { dimensao: 'Risco', fighter1: '3a derrota seguida pode tirar do top 5', fighter2: 'Perder revanche eliminaria da conversa de titulo' },
        { dimensao: 'Narrativa', fighter1: 'Venceu a primeira luta. Pode vencer de novo?', fighter2: '7 seguidas + wrestling novo = lutadora completa' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'A EX-CAMPEA AINDA SABE',
          subtitulo: 'Grasso prova que a tecnica de champion rounds contra Shevchenko nao desapareceu',
          consequencias: [
            { tag: 'VALIDACAO', texto: 'Mostra que a perna esta 100% e que as 2 derrotas foram circunstanciais, nao declinio.' },
            { tag: 'RANKING', texto: 'Se mantem no top 3 e volta a conversa de titulo.' },
            { tag: 'PROXIMA', texto: 'Grasso vs vencedora de Shevchenko/contender pelo titulo.' },
          ],
          proxima_luta: 'Grasso vs top 3 FLYW em title eliminator',
        },
        fighter2_vence: {
          titulo: 'THE FUTURE CHEGA',
          subtitulo: 'Barber confirma que a evolucao e real e que 7 vitorias nao mentem',
          consequencias: [
            { tag: 'TITULO', texto: 'Barber se coloca na conversa imediata de title shot com 8 seguidas.' },
            { tag: 'EVOLUCAO', texto: 'O wrestling novo + vitoria sobre ex-campea = lutadora completa confirmada.' },
            { tag: 'PROXIMA', texto: 'Barber vs Shevchenko ou vencedora de title fight.' },
          ],
          proxima_luta: 'Barber vs Shevchenko pelo titulo ou #1 contender',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Alexa Grasso',
        color: 'red',
        recent_fights: [
          { date: 'Mai 2025', opponent: 'Natalia Silva', result: 'L', method: 'Decisao Unanime', opponent_rank: '#7 FLYW', quality_score: 3, quality_label: 'Bom', note: '32% precisao de strikes. Performance mais fraca da carreira. Pos perna quebrada (nov 2024).' },
          { date: 'Set 2024', opponent: 'Valentina Shevchenko', result: 'L', method: 'Decisao Unanime', opponent_rank: 'Campeao', quality_score: 5, quality_label: 'Excelente', note: 'Perdeu titulo na trilogia. Competitiva mas nao o suficiente.' },
          { date: 'Set 2023', opponent: 'Valentina Shevchenko', result: 'D', method: 'Empate Dividido', opponent_rank: 'Campeao', quality_score: 5, quality_label: 'Excelente', note: 'Empate controverso na revanche. Manteve titulo.' },
          { date: 'Jun 2023', opponent: 'Valentina Shevchenko', result: 'W', method: 'Submissao R4', opponent_rank: 'Campeao', quality_score: 5, quality_label: 'Excelente', note: 'Conquista historica do titulo. Finalizou a dominante Shevchenko.' },
        ],
        momentum_score: 3,
        momentum_label: 'Em Declinio',
        momentum_trend: 'descending',
        momentum_note: 'Duas derrotas seguidas mais perna quebrada em novembro 2024. A precisao de 32% contra Natalia Silva e alarmante pra uma striker tecnica. Aos 33 anos, voltando de fratura, a questao nao e se Grasso SABE lutar (ela submeteu Shevchenko), mas se o corpo ainda permite. A experiencia de titulo e real, mas a versao pos-lesao e uma incognita.',
      },
      fighter2: {
        nome: 'Maycee Barber',
        color: 'blue',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Karine Silva', result: 'W', method: 'Decisao Unanime', opponent_rank: '#8 FLYW', quality_score: 3, quality_label: 'Bom', note: '3 TDs, 6:20 de controle. Wrestling novo. Vitoria convincente mostrando evolucao.' },
          { date: 'Abr 2024', opponent: 'Amanda Ribas', result: 'W', method: 'TKO R2', opponent_rank: '#9 FLYW', quality_score: 3, quality_label: 'Bom', note: 'TKO antes da hospitalizacao (pneumonia/strep/staph).' },
          { date: 'Nov 2023', opponent: 'Andrea Lee', result: 'W', method: 'Decisao Unanime', opponent_rank: '#7 FLYW', quality_score: 3, quality_label: 'Bom', note: 'Dominio por 3 rounds.' },
          { date: 'Jul 2023', opponent: 'Erin Blanchfield', result: 'W', method: 'Decisao Unanime', opponent_rank: '#4 FLYW', quality_score: 4, quality_label: 'Muito Bom', note: 'Vitoria sobre grappler de elite. Mostrou TDD e game plan.' },
        ],
        momentum_score: 8,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: 'Sete vitorias seguidas. Sobreviveu pneumonia, strep e staph (9 dias hospitalizada). 21 meses de layoff e voltou vencendo. Agora com wrestling (3 TDs, 6:20 controle vs Karine Silva). Treino em altitude em Denver. Record no R3: 6-2. A evolucao de brawler pra lutadora completa e documentada.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Grasso',
        media_oponentes: 4,
        media_oponentes_label: 'Muito Bom',
        aproveitamento: '4W-2L-1D (57%)',
        contra_top5: '1W-2L-1D',
      },
      fighter2: {
        nome: 'Barber',
        media_oponentes: 3,
        media_oponentes_label: 'Bom',
        aproveitamento: '7W-0L (100%)',
        contra_top5: '1W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum alem da propria luta entre elas. Grasso lutou no nivel de campeonato (3x Shevchenko). Barber construiu a sequencia contra oposicao ranqueada consistente (Blanchfield #4, Lee #7, Silva #8). O nivel de oposicao de Grasso e mais alto, mas o momento atual e MUITO pior.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.49, valueB: 5.44, maxVal: 8, format: 'decimal', note: 'Barber com volume MUITO maior. Mais agressiva e constante.' },
        { label: 'Precisao de Strikes (%)', valueA: 43, valueB: 42, maxVal: 100, format: 'percent', note: 'Similar, mas Grasso caiu pra 32% contra Natalia Silva. Tendencia preocupante.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.80, valueB: 4.20, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Ambas absorvem bastante. Luta de striking vai ter volume.' },
        { label: 'Defesa de Strikes (%)', valueA: 52, valueB: 55, maxVal: 100, format: 'percent', note: 'Barber com leve vantagem defensiva. Melhoria recente.' },
        { label: 'Takedowns por 15 Min', valueA: 0.50, valueB: 1.80, maxVal: 4, format: 'decimal', note: 'Barber com wrestling NOVO. 3 TDs vs Karine Silva. Arma que nao existia na 1a luta.' },
        { label: 'Defesa de Takedown (%)', valueA: 72, valueB: 74, maxVal: 100, format: 'percent', note: 'Similar. Ambas defendem bem.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '27 anos', note: '6 anos de diferenca. Barber no auge fisico.' },
        { label: 'Altura', fighter1: '1,63m (5\'4")', fighter2: '1,68m (5\'6")', note: 'Barber 5cm mais alta.' },
        { label: 'Envergadura', fighter1: '163cm (64")', fighter2: '173cm (68")', note: 'Barber com 4 polegadas de reach a mais. Vantagem significativa.' },
        { label: 'Stance', fighter1: 'Ortodoxa', fighter2: 'Ortodoxa', note: 'Ambas ortodoxas. Matchup de poder vs tecnica.' },
        { label: 'Academia', fighter1: 'Lobo Gym, Guadalajara', fighter2: 'High Altitude MA, Denver', note: 'Barber treina em altitude com Guilherme Faria = vantagem de cardio.' },
        { label: 'Lesao Recente', fighter1: 'Perna quebrada (nov 2024)', fighter2: 'Pneumonia/strep/staph (2024, recuperada)', note: 'Ambas voltaram de problemas serios. Barber ja provou retorno.' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Striking Tecnico', valueA: 78, valueB: 72, labelA: 'Muito Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Grasso e mais tecnica: counter-boxing, timing, angulos. Mas a precisao caiu pra 32% vs Natalia Silva. A perna quebrada pode ter afetado a base. Se a Grasso de 2023 aparecer, a tecnica ainda e superior. Se for a de 2025, nao.' },
        { label: 'Poder de Nocaute', valueA: 55, valueB: 68, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Barber bate mais pesado. TKO em Amanda Ribas. Mais volume e mais agressividade. "Eu faco as coisas feias, e funciona." Grasso raramente machuca adversarias com um unico golpe.' },
        { label: 'Wrestling', valueA: 48, valueB: 68, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'A MAIOR mudanca desde a 1a luta. Barber agora com 3 TDs e 6:20 controle vs Karine Silva. Na 1a luta, nao conseguia penetrar a high guard. Agora tem plano B: se o striking nao funcionar, derruba.' },
        { label: 'Cardio e Gas', valueA: 65, valueB: 82, labelA: 'Bom', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: 'Barber treina em altitude em Denver. Record no R3: 6-2. Ela NAO cansa. Grasso voltando de perna quebrada com cardio desconhecido. A altitude da uma vantagem natural e consistente.' },
        { label: 'Fight IQ e Experiencia', valueA: 82, valueB: 68, labelA: 'Muito Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Grasso lutou 3x contra Shevchenko pelo titulo. Submeteu a GOAT do flyweight. O IQ de championship fight e real. A questao e se a versao pos-lesao ainda acessa esse nivel.' },
        { label: 'Resiliencia e Retorno', valueA: 62, valueB: 85, labelA: 'Bom', labelB: 'Excelente', advantage: 'fighter2', advantage_note: 'Barber: pneumonia + strep + staph, 9 dias hospital, 21 meses layoff, voltou e venceu. O historico de retorno e mais forte e mais recente que o de Grasso.' },
      ],
      insight: 'A Barber 2026 e uma lutadora fundamentalmente diferente da que perdeu pra Grasso. O wrestling muda a dinamica completamente. Grasso voltando de perna quebrada com 32% de precisao no ultimo fight e uma red flag seria. A experiencia de titulo e a unica vantagem clara de Grasso, mas se o corpo nao permitir, nao importa.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Grasso',
        ko_tko: { count: 3, percent: 19 },
        submission: { count: 3, percent: 19 },
        decision: { count: 10, percent: 62 },
        total_wins: 16,
      },
      fighter2: {
        nome: 'Barber',
        ko_tko: { count: 7, percent: 47 },
        submission: { count: 1, percent: 7 },
        decision: { count: 7, percent: 46 },
        total_wins: 15,
      },
      insight: 'Grasso e lutadora de decisao (62%). Barber e mais finalizadora (47% KO/TKO). Se Barber dominar, pode buscar TKO. Se Grasso controlar o ritmo como na 1a luta, vai pros juizes. A diferenca e que Barber agora tem plano B (wrestling) e Grasso pode nao ter a mesma tecnica pos-fratura.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1',
          danger_level: 5,
          danger_label: 'EQUILIBRADO',
          color: 'gold',
          title: 'Teste da Perna e do Plano',
          description: 'O R1 define tudo. Se Grasso conseguir estabelecer a high guard e o counter-boxing como na 1a luta, a tecnica pode prevalecer. Se Barber impuser pressao e wrestling cedo, Grasso precisa mostrar que a perna aguenta. Os primeiros 2 minutos sao diagnostico: a base esta firme? Os pivots sao explosivos? Se nao, Barber vai sentir.',
        },
        {
          rounds: 'R2',
          danger_level: 6,
          danger_label: 'VANTAGEM BARBER',
          color: 'green',
          title: 'O Wrestling Entra',
          description: 'Se o striking foi equilibrado no R1, Barber vai mudar pro wrestling no R2. 3 TDs e 6:20 de controle contra Karine Silva nao foram acidente. A high guard de Grasso protegia contra socos, nao contra takedowns. E uma adaptacao inteligente que a Grasso da 1a luta nao precisou enfrentar.',
        },
        {
          rounds: 'R3',
          danger_level: 7,
          danger_label: 'VANTAGEM BARBER',
          color: 'green',
          title: 'Altitude vs Perna Quebrada',
          description: 'Barber treina em altitude. Record no R3: 6-2. Grasso voltando de perna quebrada com cardio desconhecido. Se chegar ao R3 equilibrado, a vantagem de condicionamento de Barber provavelmente decide. A perna pos-fratura vai reclamar no minuto 12-15.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'AlertTriangle', title: 'Perna Quebrada (Novembro 2024)', fighter: 'Grasso', risk_level: 'RISCO ALTO', risk_color: 'red', description: 'Fratura na perna documentada no Instagram (bota e muletas). Voltou e perdeu com 32% de precisao. A base de uma striker depende da perna. Se nao esta 100%, o counter-boxing que venceu a 1a luta nao funciona.' },
        { icon: 'TrendingUp', title: 'Wrestling Novo de Barber', fighter: 'Barber', risk_level: 'ENORME POSITIVO', risk_color: 'green', description: '3 TDs, 6:20 de controle contra Karine Silva. Arma que NAO existia na primeira luta. Se a high guard funcionar, Barber derruba. Se nao, bate. Duas opcoes agora, nao uma.' },
        { icon: 'Activity', title: 'Treino em Altitude (Denver)', fighter: 'Barber', risk_level: 'POSITIVO', risk_color: 'green', description: 'High Altitude MA em Denver com Guilherme Faria. Altitude = vantagem de cardio natural. Record no R3: 6-2. Barber NAO cansa.' },
        { icon: 'Shield', title: 'Sobreviveu Pneumonia + Strep + Staph', fighter: 'Barber', risk_level: 'POSITIVO', risk_color: 'green', description: '9 dias hospitalizada. 21 meses de layoff. Voltou e venceu convincentemente. A resiliencia mental e fisica e documentada.' },
        { icon: 'Brain', title: 'Experiencia de Titulo (3x Shevchenko)', fighter: 'Grasso', risk_level: 'POSITIVO', risk_color: 'green', description: 'Submeteu Shevchenko. Lutou 3x pelo titulo. Esse nivel de experiencia e raro no flyweight feminino. Se a Grasso de 2023 aparecer, a tecnica ainda e elite.' },
        { icon: 'TrendingUp', title: '32% Precisao vs Natalia Silva', fighter: 'Grasso', risk_level: 'RISCO ALTO', risk_color: 'red', description: 'A pior precisao da carreira. Pode ser efeito da perna quebrada na base. Pode ser declinio. De qualquer forma, e red flag seria pra uma striker tecnica.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'Grasso',
        total_probability: 35,
        scenarios: [
          { name: 'Counter-Boxing da 1a Luta', probability: 18, method: 'Decisao Unanime', description: 'Grasso reestabelece a high guard e o counter-boxing que venceram a primeira luta. A tecnica de championship rounds contra Shevchenko aparece. Barber nao consegue penetrar nem com wrestling (Grasso com 72% TDD). Vitoria nos pontos.' },
          { name: 'Submissao no Scramble', probability: 10, method: 'Submissao R2-R3', description: 'Se Barber for pro chao, Grasso pode pegar uma submissao no scramble. Submeteu Shevchenko, que e uma das melhores grapplers do flyweight. O jiu-jitsu e real.' },
          { name: 'KO de Counter Preciso', probability: 7, method: 'KO/TKO R1-R2', description: 'Barber entra agressiva demais (como prometeu) e Grasso acerta um counter preciso. Menos provavel dada a queda de precisao, mas a tecnica nao desaparece completamente.' },
        ],
      },
      fighter2: {
        nome: 'Barber',
        total_probability: 63,
        scenarios: [
          { name: 'Pressao + Wrestling = Dominio', probability: 30, method: 'Decisao Unanime', description: 'Barber usa volume de strikes pra pressionar e mistura wrestling quando a high guard funciona. 3 TDs + controle no chao + cardio de altitude = dominio por 3 rounds. O game plan completo.' },
          { name: 'TKO por Volume e Pressao', probability: 18, method: 'TKO R2-R3', description: 'Barber machuca Grasso com volume constante. A perna pos-fratura nao permite pivots defensivos. O arbitro para quando Grasso nao consegue mais se defender. Similar ao que aconteceu vs Ribas.' },
          { name: 'Ground and Pound', probability: 15, method: 'TKO R2-R3', description: 'Barber derruba Grasso (wrestling novo) e domina com ground and pound. Se a base de Grasso esta comprometida pela fratura, o TDD de 72% pode ser menor na pratica.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Maycee Barber',
      winner_side: 'fighter2',
      predicted_method: 'Decisao Unanime',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation: 'A Barber de 2026 e uma lutadora fundamentalmente diferente da que perdeu pra Grasso. O wrestling (3 TDs, 6:20 controle vs Karine Silva) muda a dinamica por completo. Na primeira luta, Barber nao conseguia penetrar a high guard. Agora tem plano B: se a high guard funcionar, derruba. Se nao, bate. Enquanto isso, Grasso esta voltando de perna quebrada (novembro 2024) com 32% de precisao no ultimo fight. A base de uma striker depende da perna. Se nao esta 100%, o counter-boxing que venceu a 1a luta simplesmente nao funciona. Barber treina em altitude, record no R3 e 6-2, sobreviveu pneumonia/strep/staph. A resiliencia e documentada. A confianca e MEDIA-ALTA porque a unica duvida e se Grasso de championship rounds contra Shevchenko ainda existe. Se essa versao aparecer, os 35% dela sao reais. Mas os dados recentes nao apoiam esse cenario.',
      x_factor: {
        title: 'Grasso a +150 e Debativel',
        description: 'Grasso venceu a primeira luta. Submeteu Shevchenko. A experiencia de titulo e real. A +150, se voce acredita que a perna esta curada e que a Grasso de 2023 pode aparecer, e uma aposta de valor. Mas os 32% de precisao vs Natalia Silva sao um dado que nao pode ser ignorado.',
      },
      upset_alert: {
        title: 'A Grasso de 2023 Pode Aparecer',
        description: 'Grasso submeteu a GOAT do flyweight. Se a versao de championship rounds aparecer, com a perna 100%, a experiencia de titulo pode ser demais pra Barber. A tecnica nao desaparece. Mas o corpo precisa cooperar.',
      },
      probabilities: {
        fighter1: { nome: 'Grasso', percent: 35 },
        fighter2: { nome: 'Barber', percent: 63 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Barber ML (-158 a -190)', reasoning: 'A -170 media, Barber e favorita justificada. Wrestling novo + altitude + resiliencia + 7 vitorias seguidas. O preco e justo, nao e pechincha.' },
        method: { pick: 'Barber por Decisao (-110)', reasoning: 'O cenario mais provavel: pressao + wrestling + cardio = dominio por 3 rounds. Barber nao precisa finalizar. So precisa ser mais completa, o que ela e agora.' },
        over_under: { pick: 'Under 2.5 Rounds (+200)', rounds: 2.5, reasoning: 'Se a perna de Grasso nao aguenta, pode acabar antes. TKO R2-R3 e cenario real. +200 paga bem por um cenario possivel.' },
        best_value: 'Grasso a +150 e a aposta mais interessante do ponto de vista de valor, SE voce acredita que a perna esta 100% e que a versao 2023 pode aparecer. E um IF grande. Se nao acredita, Barber por Decisao e a aposta mais logica do co-main.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'A Base de Grasso nos Primeiros 60 Segundos', icon: 'Activity', description: 'A perna quebrada afeta a base. Observe se Grasso consegue pivotar, trocar de direcao, e plantar pra contragolpear como na 1a luta. Se os pivots parecerem lentos ou hesitantes, a fratura ainda esta afetando. Se parecerem fluidos, a recuperacao foi completa.' },
        { num: 2, title: 'Barber Tenta Takedown Cedo?', icon: 'Target', description: 'Na 1a luta, Barber foi puro striking. Se ela tentar takedown nos primeiros 3 minutos, confirma a evolucao e o novo game plan. 3 TDs vs Karine Silva mostram que o wrestling e real. Observe a reacao de Grasso ao nível de mudar.' },
        { num: 3, title: 'A High Guard de Grasso Funciona?', icon: 'Shield', description: 'A high guard de Grasso foi impenetravel na 1a luta. Se Barber conseguir penetrar agora (com mais potencia e angulos), a dinamica mudou. Se a high guard funcionar, Barber precisa do wrestling.' },
        { num: 4, title: 'Volume de Grasso no R2', icon: 'Zap', description: 'Se Grasso estiver ativa e precisa no R2, a perna esta funcionando. Se o volume cair, a fadiga da perna pos-fratura esta aparecendo. Contra a Barber de altitude (R3 record 6-2), queda de volume no R2 e sentenca.' },
        { num: 5, title: 'A Agressividade de Barber', icon: 'Brain', description: '"Eu nao sou uma lutadora bonita. Eu faco as coisas feias." Se Barber estiver controlada e paciente no R1, o game plan e disciplinado. Se vier agressiva demais desde o inicio, pode abrir espaco pra counter-boxing de Grasso.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: 'A REVANCHE', content: 'GRASSO vs BARBER II\nPOS WEIGH-INS\n\nGrasso: perna QUEBRADA (nov 2024)\n+ 2 derrotas seguidas\n+ 32% precisao vs Natalia Silva\n\nBarber: 7 vitorias seguidas\n+ wrestling NOVO (3 TDs, 6:20 controle)\n+ treino em altitude\n+ sobreviveu pneumonia/strep/staph\n\nA revanche que ninguem previa.', color: 'gold' },
        { slide_number: 2, title: 'O QUE MUDOU', content: 'BARBER 2021:\nPuro power. Sem wrestling.\nNao penetrava a high guard.\n\nBARBER 2026:\n3 TDs e 6:20 controle vs K. Silva\nTreino em altitude (Denver)\nR3 record: 6-2\nSobreviveu pneumonia+strep+staph\n\nLutadora COMPLETA agora.', color: 'blue' },
        { slide_number: 3, title: 'PREVISAO', content: 'BARBER por Decisao\nConfianca: MEDIA-ALTA (7/10)\n63% Barber / 35% Grasso\n\nGrasso +150: valor SE a perna esta ok\nBarber Decisao: aposta mais logica\n\nA perna de Grasso decide TUDO.', color: 'red' },
      ],
      twitter: [
        { num: '1/4', text: 'POS WEIGH-INS: Grasso vs Barber II. Grasso: perna QUEBRADA (nov 2024) + 2 derrotas + 32% precisao no ultimo fight. Barber: 7 seguidas + wrestling NOVO + altitude. Thread:' },
        { num: '2/4', text: 'A MUDANCA: Na 1a luta, Barber nao penetrava a high guard. Agora tem 3 TDs e 6:20 controle vs Karine Silva. Se a high guard funcionar, Barber derruba. Se nao, bate. Duas opcoes. Treina em altitude em Denver. R3 record: 6-2.' },
        { num: '3/4', text: 'GRASSO: Perna quebrada nov 2024 (Instagram: bota e muletas). Voltou com 32% precisao vs Natalia Silva. A base depende da perna. Se nao esta 100%, o counter-boxing que venceu a 1a luta nao funciona.' },
        { num: '4/4', text: 'Pick: Barber por Decisao. Confianca MEDIA-ALTA. 63% Barber. Grasso a +150 e valor SE a perna esta ok, mas os dados nao apoiam. Barber Decisao e a aposta mais logica do co-main.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: 'Grasso quebrou a perna em novembro de 2024. Barber agora tem wrestling. A revanche que ninguem previa.' },
        { time: '10-30s', title: 'Grasso', text: 'Perna quebrada. 2 derrotas seguidas. 32% precisao no ultimo fight. A base de uma striker depende da perna. Se nao esta 100%, o counter-boxing que venceu a 1a luta nao funciona.' },
        { time: '30-50s', title: 'Barber', text: '7 seguidas. 3 TDs e 6:20 controle vs Karine Silva. Wrestling NOVO. Treino em altitude. R3 record 6-2. Sobreviveu pneumonia, strep e staph. 9 dias no hospital. Voltou e venceu. Lutadora completa.' },
        { time: '50-65s', title: 'Previsao', text: 'Barber por Decisao. Confianca MEDIA-ALTA. Grasso a +150 so tem valor se a perna esta 100%. Os dados dizem que nao.' },
        { time: '65-75s', title: 'CTA', text: 'Voce acredita na Grasso de 2023? Comenta e segue.' },
      ],
      tiktok: [
        { hook: 'Grasso QUEBROU a perna e agora enfrenta uma Barber que tem arma NOVA.', body: 'Perna quebrada novembro 2024. 32% precisao no ultimo fight. Do outro lado: Barber com 7 seguidas, wrestling novo (3 TDs vs Karine Silva), treino em altitude, sobreviveu pneumonia. A mesma lutadora que perdeu a 1a luta? Nao. A Barber 2026 e completa.', cta: 'Grasso consegue ou e Barber dominando? Comenta!' },
      ],
      headlines: [
        'Perna Quebrada vs Wrestling Novo: Por Que Grasso vs Barber II E Diferente',
        'Barber 2026: 3 TDs, Altitude, e a Arma Que Nao Existia na 1a Luta',
        '32% Precisao: O Numero Que Preocupa Sobre Grasso Pos-Fratura',
        'A Barber Que Sobreviveu Pneumonia, Strep e Staph E a Mesma Que Vai Vingar a Derrota',
      ],
      podcast: [
        {
          timestamp: '0:00-7:00',
          title: 'O Declinio Documentado de Grasso e a Evolucao de Barber',
          talking_points: [
            'Grasso: perna quebrada nov 2024, perdeu titulo pra Shevchenko, perdeu pra Natalia Silva com 32% precisao. Timeline de declinio.',
            'Barber: wrestling NOVO (3 TDs, 6:20 vs Karine Silva). Arma que nao existia na 1a luta. Treino altitude Denver. R3 record 6-2.',
            'Barber sobreviveu pneumonia + strep + staph (9 dias hospital). 21 meses layoff. Voltou vencendo. Resiliencia documentada.',
            'Pick: Barber por Decisao. Grasso +150 so vale se voce acredita na versao 2023.',
          ],
          discussion_questions: [
            'A Grasso que submeteu Shevchenko ainda existe?',
            'O wrestling de Barber e real ou foi so contra Karine Silva?',
          ],
        },
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '+124 a +160',
        fighter2_odds: '-158 a -190',
        fighter1_name: 'Alexa Grasso',
        fighter2_name: 'Maycee Barber',
        source: 'Range de DraftKings, FanDuel e BetMGM (marco 2026)',
      },
      edges: [
        { icon: 'AlertTriangle', titulo: 'Perna Quebrada + Queda de Precisao', stat_headline: 'GRASSO: 32% PRECISAO VS NATALIA SILVA. PERNA QUEBRADA NOV 2024.', contexto: 'A base de uma striker depende da perna. Fratura + 32% precisao no retorno = sinais claros de que algo mudou. Pode ser temporario, pode ser permanente.', implicacao_aposta: 'Desfavorece Grasso em qualquer prop de striking. Favorece Under rounds se a perna nao aguenta.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'TrendingUp', titulo: 'Wrestling Novo de Barber', stat_headline: '3 TDs E 6:20 DE CONTROLE VS KARINE SILVA. ARMA QUE NAO EXISTIA NA 1A LUTA.', contexto: 'Na primeira luta, Barber perdeu porque nao conseguia penetrar a high guard. Agora tem plano B: wrestling. Se a high guard funcionar, derruba. Se nao, bate.', implicacao_aposta: 'Barber por Decisao e o cenario mais provavel. A versatilidade da opcoes.', edge_level: 'forte', fighter_side: 'fighter2' },
        { icon: 'Activity', titulo: 'Altitude + R3 Record 6-2', stat_headline: 'BARBER TREINA EM ALTITUDE EM DENVER. R3 RECORD: 6-2. NAO CANSA.', contexto: 'High Altitude MA com Guilherme Faria. A vantagem de cardio e natural e consistente. Contra Grasso voltando de perna quebrada, o R3 favorece Barber claramente.', implicacao_aposta: 'Se a luta for equilibrada ate o R3, Barber leva. Favorece Barber em qualquer prop que envolva rounds tardios.', edge_level: 'moderado', fighter_side: 'fighter2' },
        { icon: 'Brain', titulo: 'Grasso a +150: Valor Real?', stat_headline: 'GRASSO VENCEU A 1A LUTA. SUBMETEU SHEVCHENKO. EXPERIENCIA DE TITULO REAL.', contexto: 'A +150, Grasso tem valor SE a perna esta 100%. A experiencia de titulo (3x Shevchenko) e rara. Mas os dados recentes (32% precisao, 2 derrotas) nao apoiam.', implicacao_aposta: 'So aposte em Grasso se voce acredita que a versao 2023 pode aparecer. E um IF grande. A +150, o mercado esta precificando ~40% Grasso, o que e razoavel.', edge_level: 'leve', fighter_side: 'fighter1' },
      ],
      value_picks: [
        { tipo: 'Metodo', pick: 'Barber por Decisao', odds: '-110', confianca: 'alta', raciocinio: 'O cenario mais logico. Pressao + wrestling + cardio = dominio por 3 rounds. Barber nao precisa finalizar. 7 de 15 vitorias por decisao. Wrestling novo garante controle.' },
        { tipo: 'Moneyline', pick: 'Grasso ML (+150)', odds: '+150', confianca: 'baixa', edge_vs_mercado: 'Grasso venceu a 1a luta. Submeteu Shevchenko. A +150, se a perna esta ok, e valor. Mas "se a perna esta ok" e um IF gigante.', raciocinio: 'Aposta de convicao. Voce precisa acreditar que a Grasso de 2023 ainda existe. Os dados recentes dizem que nao, mas experiencia de titulo e dificil de quantificar.' },
        { tipo: 'Prop', pick: 'Fight nao vai a Decisao (+180)', odds: '+180', confianca: 'baixa', raciocinio: 'Se a perna de Grasso nao aguenta, TKO de Barber e possivel. Se Barber for derrubada, submissao de Grasso (submeteu Shevchenko) e possivel. Cenarios de finish existem dos dois lados.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Barber por KO/TKO R1 (+450)',
        descricao: 'Barber nao e nocauteadora de R1. E uma fighter de volume e pressao. O TKO de Ribas foi no R2 apos acumulo de dano. Esperar nocaute rapido de Barber e ignorar o estilo dela. A vitoria mais provavel e por decisao com wrestling e cardio, nao por finish explosivo.',
      },
      disclaimer: 'Analise pos weigh-ins para fins informativos. Aposte com responsabilidade.',
    },
  },
};

export default function Page() {
  return <FullAnalysisView analise={analise} />;
}
