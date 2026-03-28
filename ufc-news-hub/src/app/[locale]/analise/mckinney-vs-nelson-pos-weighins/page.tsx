import { translateAnalysis } from '@/lib/translate-analysis';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'mckinney-vs-nelson-pos-weighins',
  evento_id: null,
  slug: 'mckinney-vs-nelson-pos-weighins',
  titulo: 'McKinney vs Nelson: Pos Weigh-Ins | 77 Segundos de Media e a Promessa de Paciencia',
  subtitulo: 'McKinney tem 77 segundos de media por luta na carreira. ZERO lutas foram ao R3 em 12 UFC bouts. Mas prometeu ser MAIS PACIENTE. Nelson quer frustrar e "picar ele ate o final."',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,78m', envergadura: '185cm', idade: 29, academia: 'Spokane, WA' },
      fighter2: { altura: '1,80m', envergadura: '183cm', idade: 30, academia: 'Team Alpha Male' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'KO/TKO R1',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [
      { factor: 'Tempo Medio de Luta: 77 Segundos', edge: 'fighter1', impact: 9, description: 'McKinney tem 77 segundos de media na carreira e 2:25 no UFC. ZERO de 12 lutas UFC foram ao R3. E a bomba-relogio mais literal do MMA.' },
      { factor: 'Como Favorito: 6-1', edge: 'fighter1', impact: 8, description: 'McKinney como favorito e 6-1. Como underdog e 1-4. Ele performa MUITO melhor quando e o favorito. A -170 a -185, esta no territorio ideal dele.' },
      { factor: 'Nelson Contra-Estrategia', edge: 'fighter2', impact: 7, description: 'Nelson: "Ele vai ficar frustrado que nao vai conseguir acertar os power shots, e eu vou picar ele ate o final. Quanto mais a luta dura, mais eu pico ele." O plano e inteligente, mas executar contra McKinney e outra historia.' },
      { factor: 'McKinney Prometeu Paciencia', edge: 'fighter1', impact: 6, description: '"Eu nao posso sair louco se machucar ele porque ele tem poder tambem. Ouvir meus coaches. Seguir o game plan." Se for verdade, McKinney paciente + explosivo e uma versao mais perigosa.' },
    ],
    xFactor: {
      title: 'Nelson Mudou Pra Lightweight Permanentemente',
      description: 'Nelson veio dos 145 lbs porque o corte de peso estava "desnutrindo" ele. Aos 155, diz estar mais saudavel e mais forte. A questao e se esse corpo saudavel aguenta o poder de McKinney.',
    },
  },
  fighter1_info: {
    nome: 'Terrance McKinney',
    apelido: 'T.Wrecks',
    record: '17-8-0',
    ranking: 'Sem ranking',
    ultimasLutas: [
      { result: 'L', opponent: 'Duncan', method: 'Sub R1', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Borshchev', method: 'Sub R1', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Hadzovic', method: 'TKO R1', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Ribovics', method: 'KO R1', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Chepe Nelson',
    record: '17-6-1',
    ranking: 'Sem ranking',
    ultimasLutas: [
      { result: 'W', opponent: 'Frevola', method: 'Decisao Unanime', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Garcia', method: 'TKO R1', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Algeo', method: 'TKO R1', event: 'UFC Fight Night' },
      { result: 'W', opponent: 'Padilla', method: 'Decisao Unanime', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
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
      evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
      evento_data: '28 de Marco, 2026',
      evento_local: 'Climate Pledge Arena, Seattle, Washington',
      categoria_peso: 'Peso Leve (155 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'A Bomba-Relogio vs O Plano de Frustracao',
      tagline_sub: '77 segundos de media. Zero lutas no R3 em 12 UFC. McKinney prometeu paciencia. Nelson quer "picar ate o final." Under 1.5 rds: -270.',
      fighter1: {
        nome_completo: 'Terrance "T.Wrecks" McKinney',
        apelido: 'T.Wrecks',
        sobrenome: 'McKinney',
        record: '17-8-0',
        ranking: 'Sem ranking',
        info_extra: 'Spokane, WA | Mentorando por Chiesa | 29 anos',
        imagem_fullbody_url: null,
      },
      fighter2: {
        nome_completo: 'Chepe Nelson',
        apelido: '',
        sobrenome: 'Nelson',
        record: '17-6-1',
        ranking: 'Sem ranking',
        info_extra: 'Team Alpha Male | Mudou pra 155 permanentemente | 30 anos',
        imagem_fullbody_url: null,
      },
    },

    narrativa: {
      html_content: `
        <!-- 77 SEGUNDOS -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-ufc-red to-red-400 bg-clip-text text-transparent">77 Segundos: O Numero Que Define McKinney</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-ufc-red/10 via-ufc-red/5 to-ufc-red/10"></div>
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ufc-red to-red-400"></div>
            <div class="relative p-6">
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-3">A BOMBA-RELOGIO</p>
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                  <p class="font-display text-4xl text-ufc-red">77s</p>
                  <p class="text-[10px] text-white/40 mt-1">Media carreira</p>
                </div>
                <div class="text-center">
                  <p class="font-display text-4xl text-ufc-red">2:25</p>
                  <p class="text-[10px] text-white/40 mt-1">Media UFC</p>
                </div>
                <div class="text-center">
                  <p class="font-display text-4xl text-ufc-red">0</p>
                  <p class="text-[10px] text-white/40 mt-1">Lutas no R3 (de 12)</p>
                </div>
              </div>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-ufc-red">Terrance McKinney</strong> nao e um lutador convencional. Ele e uma bomba-relogio. 77 segundos de media por luta na carreira inteira. 2 minutos e 25 segundos no UFC. ZERO de 12 lutas no UFC foram ao R3. Nenhuma. Quando McKinney entra no octogono, a luta acaba rapido. Pra ele ou contra ele.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                Mas McKinney prometeu algo diferente nesse camp: <em class="text-white/80">"Eu nao posso sair louco se machucar ele porque ele tem poder tambem. Ouvir meus coaches e seguir o game plan. Nao apressar."</em> Se for verdade, McKinney paciente + explosivo e uma versao MAIS perigosa. Mas McKinney ja prometeu paciencia antes. A pergunta e se a disciplina dura mais de 77 segundos.
              </p>
            </div>
          </div>
        </div>

        <!-- NELSON: O PLANO -->
        <div class="mb-14">
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">O Plano de Nelson: Frustrar e Picar</span>
          </h3>

          <div class="relative rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5"></div>
            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
            <div class="relative p-6 pl-8">
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                <strong class="text-blue-400">Nelson</strong> sabe exatamente o que precisa fazer: <em class="text-white/80">"Ele vai ficar frustrado que nao vai conseguir acertar os power shots, e eu vou picar ele ate o final. Quanto mais a luta dura, mais eu pico ele."</em>
              </p>
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                O plano e inteligente e especifico. Nelson quer sobreviver a explosao inicial, frustrar McKinney, e dominar com volume e tecnica nos rounds tardios. McKinney como underdog e 1-4. Quando e frustrado, perde. Nelson entende a fraqueza e tem um plano pra explora-la.
              </p>
              <p class="text-sm text-white/70 leading-relaxed">
                Nelson mudou pra 155 permanentemente porque o corte pra 145 estava "desnutrindo" ele. No novo peso, diz estar mais saudavel e mais forte. O corpo maior pode ajudar a absorver o poder de McKinney. Mas absorver o poder de McKinney e outra historia.
              </p>
            </div>
          </div>
        </div>

        <!-- McKINNEY COMO FAVORITO -->
        <div>
          <h3 class="font-display text-2xl md:text-3xl uppercase mb-8">
            <span class="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">6-1 Como Favorito. 1-4 Como Underdog.</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-emerald-400/15 to-transparent"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-emerald-400"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2">Como Favorito</p>
                <p class="font-display text-4xl text-white mb-2">6-1</p>
                <p class="text-xs text-white/50 leading-relaxed">Quando McKinney e favorito, ele domina. A confianca e a agressao calibrada funcionam. A -170 a -185, esta no territorio ideal.</p>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-ufc-red/15 to-transparent"></div>
              <div class="absolute inset-x-0 top-0 h-1 bg-ufc-red"></div>
              <div class="relative p-5">
                <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red mb-2">Como Underdog</p>
                <p class="font-display text-4xl text-white mb-2">1-4</p>
                <p class="text-xs text-white/50 leading-relaxed">Quando e underdog, McKinney fica ansioso. Apresa, toma decisoes ruins, e nocauteado ou submetido. A mentalidade depende do papel.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      stakes: [
        { dimensao: 'Estilo', fighter1: 'Bomba-relogio: 77 seg media', fighter2: 'Counter-fighter: quer frustrar e picar' },
        { dimensao: 'Registro', fighter1: '6-1 como favorito, 1-4 como underdog', fighter2: 'Decisoes. Luta longa e o territorio dele.' },
        { dimensao: 'Promessa', fighter1: '"Vou ser mais paciente. Ouvir coaches."', fighter2: '"Quanto mais dura, mais eu pico ele."' },
        { dimensao: 'Peso', fighter1: 'Sempre no 155', fighter2: 'Mudou de 145 pra 155. Mais saudavel agora.' },
        { dimensao: 'Conexao', fighter1: 'Mentorando por Chiesa (tambem no card)', fighter2: 'Team Alpha Male' },
      ],
      prognostico: {
        fighter1_vence: {
          titulo: 'T.WRECKS EXPLODE',
          subtitulo: 'McKinney faz o que sempre faz: acaba rapido',
          consequencias: [
            { tag: 'PADRAO', texto: 'Mais uma finalizacao precoce. Sequencia mantida: zero lutas no R3.' },
            { tag: 'BONUS', texto: 'Forte candidato a Performance of the Night se o KO for espetacular.' },
            { tag: 'PROXIMA', texto: 'McKinney vs opponent ranqueado no peso leve.' },
          ],
          proxima_luta: 'McKinney vs top 15 LW',
        },
        fighter2_vence: {
          titulo: 'O PLANO FUNCIONOU',
          subtitulo: 'Nelson frustrou McKinney e provou que a bomba-relogio tem prazo de validade',
          consequencias: [
            { tag: 'VALIDACAO', texto: 'Nelson prova que mudar pra 155 foi a decisao certa. Corpo saudavel = desempenho melhor.' },
            { tag: 'PROXIMA', texto: 'Nelson vs opponent mais bem ranqueado no 155.' },
          ],
          proxima_luta: 'Nelson vs top 20 LW',
        },
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Terrance McKinney',
        color: 'red',
        recent_fights: [
          { date: 'Dez 2025', opponent: 'Duncan', result: 'L', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Submetido no primeiro round. Vulnerabilidade ao grappling.' },
          { date: 'Jun 2025', opponent: 'Borshchev', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Submissao no primeiro round.' },
          { date: 'Fev 2025', opponent: 'Hadzovic', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'TKO rapido. Padrao McKinney.' },
          { date: 'Mai 2024', opponent: 'Ribovics', result: 'L', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Nocauteado no primeiro round.' },
          { date: 'Out 2023', opponent: 'Marotte', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'TKO rapido.' },
        ],
        momentum_score: 6,
        momentum_label: 'Inconsistente',
        momentum_trend: 'stable',
        momentum_note: 'McKinney e a definicao de inconsistencia. Vence espetacularmente contra inferiores, perde rapido contra superiores. 6-1 como favorito, 1-4 como underdog. A -170 a -185, esta no papel de favorito onde performa melhor. Mentorando por Chiesa. Prometeu paciencia nesse camp. A questao e se a paciencia dura mais que 77 segundos.',
      },
      fighter2: {
        nome: 'Chepe Nelson',
        color: 'blue',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Frevola', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria por decisao contra veterano do LW.' },
          { date: 'Set 2024', opponent: 'Garcia', result: 'L', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Nocauteado no primeiro round.' },
          { date: 'Mar 2024', opponent: 'Algeo', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'TKO rapido. Boa performance.' },
          { date: 'Set 2023', opponent: 'Padilla', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Vitoria por pontos.' },
        ],
        momentum_score: 5,
        momentum_label: 'Estavel',
        momentum_trend: 'stable',
        momentum_note: 'Nelson e consistente mas nao espetacular. Vence por decisao, perde pra lutadores de nivel mais alto. Mudou pra 155 permanentemente porque o corte de 145 estava "desnutrindo" ele. No novo peso, diz estar mais saudavel. Tem plano claro pra frustrar McKinney. A execucao e a questao.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'McKinney',
        media_oponentes: 2,
        media_oponentes_label: 'Medio',
        aproveitamento: '7W-5L (58%)',
        contra_top5: '0W-0L',
      },
      fighter2: {
        nome: 'Nelson',
        media_oponentes: 2,
        media_oponentes_label: 'Medio',
        aproveitamento: '6W-5L-1D (50%)',
        contra_top5: '0W-0L',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Ambos enfrentaram nivel medio. McKinney com 12 UFC fights (7-5). Nelson com 11 UFC fights (6-5-1 incluindo draw) e experiencia tanto no 145 quanto no 155.',
    },

    oponente_comum: null,

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 5.80, valueB: 4.20, maxVal: 8, format: 'decimal', note: 'McKinney com volume ABSURDO. Mas inflado por lutas curtas.' },
        { label: 'Precisao de Strikes (%)', valueA: 47, valueB: 45, maxVal: 100, format: 'percent', note: 'Similar. McKinney acerta quase metade com volume alto.' },
        { label: 'Strikes Absorvidos/Min', valueA: 5.20, valueB: 3.40, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'McKinney ABSORVE MUITO. Estilo agressivo = tomando golpes. Nelson mais defensivo.' },
        { label: 'Defesa de Strikes (%)', valueA: 42, valueB: 52, maxVal: 100, format: 'percent', note: 'Nelson defende MUITO melhor. McKinney abre guarda na agressao.' },
        { label: 'Takedowns por 15 Min', valueA: 2.80, valueB: 1.40, maxVal: 5, format: 'decimal', note: 'McKinney mistura wrestling. Pode derrubar.' },
        { label: 'Defesa de Takedown (%)', valueA: 68, valueB: 72, maxVal: 100, format: 'percent', note: 'Similar. Ambos defendem razoavelmente.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '29 anos', fighter2: '30 anos', note: 'Idade similar. Ambos no auge.' },
        { label: 'Altura', fighter1: '1,78m (5\'10")', fighter2: '1,80m (5\'11")', note: 'Tamanho similar.' },
        { label: 'Envergadura', fighter1: '185cm (73")', fighter2: '183cm (72")', note: 'Similar.' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo', note: 'Ambos ortodoxos.' },
        { label: 'Tempo Medio UFC', fighter1: '2:25', fighter2: '12:30+', note: 'A DIFERENCA mais absurda. McKinney acaba em 2 min. Nelson luta 3 rounds.' },
      ],
    },

    perfil_habilidades: {
      skills: [
        { label: 'Poder de Nocaute', valueA: 85, valueB: 55, labelA: 'Excelente', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'McKinney e um dos power punchers mais perigosos do 155. Quando conecta, acaba. 77 segundos de media nao e por acaso. O poder e real e devastador.' },
        { label: 'Volume e Ritmo', valueA: 72, valueB: 72, labelA: 'Bom', labelB: 'Bom', advantage: 'even', advantage_note: 'McKinney com volume alto mas em bursts curtos. Nelson com volume sustentado ao longo de 3 rounds. Estilos diferentes de volume: explosao vs maratona.' },
        { label: 'Defesa e Disciplina', valueA: 45, valueB: 72, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Nelson defende melhor (52% vs 42%), absorve menos (3.40 vs 5.20 strikes/min). McKinney abre guarda na agressao. Disciplina defensiva e a maior vantagem de Nelson.' },
        { label: 'Cardio em 3 Rounds', valueA: 38, valueB: 75, labelA: 'Medio', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: 'McKinney NUNCA foi ao R3 em 12 lutas UFC. Nao temos dados de cardio porque ele nunca precisa. Nelson vive em lutas de 3 rounds. Se durar, Nelson domina.' },
        { label: 'Wrestling', valueA: 72, valueB: 62, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'McKinney mistura wrestling com striking. 2.80 TDs/15min. Pode mudar pra wrestling se o striking nao funcionar. Versatilidade ofensiva.' },
        { label: 'Mentalidade', valueA: 65, valueB: 68, labelA: 'Bom', labelB: 'Bom', advantage: 'even', advantage_note: 'McKinney 6-1 como favorito mas 1-4 como underdog. A mentalidade depende do contexto. Nelson e mais estavel emocionalmente mas menos explosivo. Trade-off de personalidade.' },
      ],
      insight: 'A luta e definida pelo tempo. Se durar menos de 5 minutos, McKinney domina. Se durar mais de 5 minutos, Nelson domina. Under 1.5 rounds a -270 e a linha mais afiada do card por uma razao. O mercado sabe que isso acaba rapido.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'McKinney',
        ko_tko: { count: 10, percent: 59 },
        submission: { count: 4, percent: 23 },
        decision: { count: 3, percent: 18 },
        total_wins: 17,
      },
      fighter2: {
        nome: 'Nelson',
        ko_tko: { count: 6, percent: 35 },
        submission: { count: 3, percent: 18 },
        decision: { count: 8, percent: 47 },
        total_wins: 17,
      },
      insight: 'McKinney com 63% KO/TKO. Nelson com 43% decisao. A distribuicao conta tudo: McKinney finaliza cedo, Nelson vai pros juizes. Se McKinney nao finalizar nos primeiros 5 minutos, esta no territorio de Nelson.',
    },

    danger_zones: {
      zones: [
        {
          rounds: 'R1 (0-3 min)',
          danger_level: 9,
          danger_label: 'VANTAGEM McKINNEY',
          color: 'red',
          title: 'A Zona de Explosao',
          description: 'O territorio de McKinney. 77 segundos de media. Se ele conectar algo limpo nos primeiros 3 minutos, Nelson nao tem tempo de implementar o plano. A explosividade e a agressao sao maximas aqui. Se McKinney foi paciente COMO PROMETEU, pode ser ainda mais perigoso: explosao controlada e mais letal que explosao caotica.',
        },
        {
          rounds: 'R1 (3-5 min) e R2',
          danger_level: 5,
          danger_label: 'EQUILIBRADO',
          color: 'gold',
          title: 'A Zona de Transicao',
          description: 'Se McKinney nao finalizou ate aqui, o plano de Nelson comeca a funcionar. Nelson quer "picar" com jabs, movimentacao, e volume controlado. McKinney pode ficar frustrado. E aqui que a promessa de paciencia e testada. Se McKinney mantiver a compostura, ainda e perigoso. Se ficar ansioso, Nelson domina.',
        },
        {
          rounds: 'R3',
          danger_level: 3,
          danger_label: 'VANTAGEM NELSON',
          color: 'green',
          title: 'Territorio Desconhecido pra McKinney',
          description: 'McKinney NUNCA esteve no R3 em 12 lutas UFC. Nelson vive aqui. Se chegar, Nelson domina com volume, cardio, e experiencia em rounds tardios. McKinney em territorio completamente desconhecido, provavelmente cansado, frustrado, e vulneravel.',
        },
      ],
    },

    intangiveis: {
      items: [
        { icon: 'Zap', title: '77 Segundos de Media', fighter: 'McKinney', risk_level: 'ENORME POSITIVO', risk_color: 'green', description: 'Nao e estatistica. E a identidade de McKinney. 77 segundos de media na carreira. 2:25 no UFC. Zero lutas no R3 de 12. A bomba-relogio mais literal do MMA.' },
        { icon: 'Brain', title: 'Promessa de Paciencia', fighter: 'McKinney', risk_level: 'NEUTRO', risk_color: 'neutral', description: '"Nao posso sair louco. Ouvir coaches. Seguir game plan." Se for verdade, McKinney paciente + explosivo e mais perigoso. Mas McKinney ja prometeu paciencia antes e nao cumpriu.' },
        { icon: 'Shield', title: '6-1 Como Favorito', fighter: 'McKinney', risk_level: 'POSITIVO', risk_color: 'green', description: 'Quando e favorito, McKinney performa. A -170 a -185, esta no papel ideal. A mentalidade de favorito e fundamental pro estilo dele.' },
        { icon: 'Activity', title: 'Mudanca Permanente pra 155', fighter: 'Nelson', risk_level: 'POSITIVO', risk_color: 'green', description: 'Corte de 145 estava "desnutrindo" ele. No 155, mais saudavel e mais forte. Corpo maior pode absorver melhor o poder de McKinney.' },
        { icon: 'Target', title: 'Plano de Frustracao de Nelson', fighter: 'Nelson', risk_level: 'POSITIVO', risk_color: 'green', description: '"Vai ficar frustrado. Vou picar ele ate o final." Plano inteligente e especifico. McKinney 1-4 como underdog = vulneravel quando frustrado. A questao e executar.' },
        { icon: 'TrendingUp', title: 'Mentoria de Chiesa', fighter: 'McKinney', risk_level: 'POSITIVO', risk_color: 'green', description: 'Chiesa esta mentorando McKinney e tambem luta no card. A conexao emocional e motivacional e real. Pode ajudar na disciplina.' },
      ],
    },

    caminhos_vitoria: {
      fighter1: {
        nome: 'McKinney',
        total_probability: 60,
        scenarios: [
          { name: 'Explosao R1', probability: 35, method: 'KO/TKO R1', description: 'McKinney conecta power shot nos primeiros 3 minutos. 77 segundos de media. O padrao. Se for paciente como prometeu, pode ser ainda mais preciso: esperando a abertura em vez de forcar.' },
          { name: 'TKO R2 Apos Pressao', probability: 15, method: 'TKO R2', description: 'McKinney machuca Nelson no R1 mas nao finaliza. Volta no R2 com mesmo ritmo e acaba. Raro pra McKinney durar tanto, mas possivel com a "paciencia" prometida.' },
          { name: 'Decisao por Dominio', probability: 10, method: 'Decisao Unanime', description: 'McKinney mistura wrestling e striking por 3 rounds. Cenario EXTREMAMENTE raro: ele nunca fez isso no UFC. Mas se a paciencia for real...' },
        ],
      },
      fighter2: {
        nome: 'Nelson',
        total_probability: 38,
        scenarios: [
          { name: 'O Plano Funcionou', probability: 20, method: 'Decisao Unanime', description: 'Nelson sobrevive a explosao R1, frustra McKinney, e domina com volume nos R2-R3. McKinney fica ansioso, abre guarda, e Nelson pica com jabs e movimentacao. O plano exato que Nelson descreveu.' },
          { name: 'KO de Counter no Avanco', probability: 10, method: 'KO/TKO R1-R2', description: 'McKinney avanca agressivo e Nelson acerta counter limpo. McKinney absorve 5.20 strikes/min. A defesa de 42% abre oportunidades. Nelson nao e nocauteador nato, mas McKinney se coloca em posicoes vulneraveis.' },
          { name: 'Submissao no Scramble', probability: 8, method: 'Submissao R1-R2', description: 'McKinney vai pro wrestling, Nelson pega algo no scramble. McKinney ja foi submetido 5x na carreira. Vulnerabilidade real.' },
        ],
      },
    },

    previsao_final: {
      winner_name: 'Terrance McKinney',
      winner_side: 'fighter1',
      predicted_method: 'KO/TKO R1',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation: 'McKinney e 6-1 como favorito e esta no papel de favorito (-170 a -185). Tempo medio de 77 segundos. Zero lutas no R3 em 12 UFC. A historia diz que isso acaba rapido. Nelson tem um plano inteligente ("frustrar e picar"), mas executar contra a explosividade de McKinney e outra historia. O mercado concorda: Under 1.5 rounds a -270 e a linha mais afiada do card. McKinney prometeu paciencia, mas a identidade dele e explosao. Se o poder conectar nos primeiros 3 minutos, Nelson nao tem chance de implementar o plano. Confianca MEDIA-ALTA porque Nelson nao e indefeso: defesa melhor (52% vs 42%), absorve menos (3.40 vs 5.20), e tem plano especifico. Os 38% dele sao reais.',
      x_factor: {
        title: 'McKinney TKO/KO Prop a +190',
        description: 'O Sports Gambling Podcast destacou McKinney TKO/KO a +190 como valor. Com 63% de vitorias por KO/TKO e media de 77 segundos, o cenario mais provavel e exatamente esse. +190 paga quase 2:1 pro cenario de maior probabilidade.',
      },
      upset_alert: {
        title: 'Se Durar 5+ Minutos, Nelson Ganha',
        description: 'McKinney NUNCA foi ao R3. Nelson vive la. Se a explosao nao funcionar, o plano de frustracao de Nelson entra em acao. O 1-4 de McKinney como underdog mostra que quando e frustrado, ele perde. O tempo e o maior inimigo de McKinney.',
      },
      probabilities: {
        fighter1: { nome: 'McKinney', percent: 60 },
        fighter2: { nome: 'Nelson', percent: 38 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'McKinney ML (-170 a -185)', reasoning: 'Justo mas sem grande valor. 6-1 como favorito, media de 77 seg. O preco reflete o que ele faz.' },
        method: { pick: 'McKinney KO/TKO (+190)', reasoning: 'MELHOR VALOR DA LUTA. 63% KO rate, 77 seg media. Sports Gambling Podcast destacou. +190 paga quase 2:1 pro cenario mais provavel.' },
        over_under: { pick: 'Under 1.5 Rounds (-270)', rounds: 1.5, reasoning: 'A linha mais afiada do card. -270 e caro mas o mercado esta confiante: McKinney nunca foi ao R3. A questao e se voce quer pagar -270 por algo que e ~72% provavel.' },
        best_value: 'McKinney KO/TKO a +190 e a aposta de melhor valor. O cenario mais provavel pagando quase 2:1. Under 1.5 a -270 e seguro mas caro. Se voce acredita no plano de Nelson, ele a +142 a +154 tem valor se a luta durar 5+ minutos.',
      },
    },

    o_que_observar: {
      points: [
        { num: 1, title: 'Os Primeiros 77 Segundos', icon: 'Zap', description: '77 e o numero de McKinney. Se a luta durar mais que 77 segundos sem ninguem machucar, a dinamica ja mudou. O relogio e o indicador mais importante.' },
        { num: 2, title: 'McKinney Realmente Esta Paciente?', icon: 'Brain', description: 'Prometeu ouvir os coaches. Se nos primeiros 30 segundos McKinney estiver medindo distancia em vez de avancar cegamente, a paciencia e real. Se estiver correndo pro meio, e o McKinney de sempre.' },
        { num: 3, title: 'Nelson Sobrevive o R1?', icon: 'Shield', description: 'Se Nelson sair do R1 intacto, o plano de frustracao entra em acao. Observe a linguagem corporal: se Nelson estiver calmo e movimentando lateral no break do R1, o game plan esta funcionando.' },
        { num: 4, title: 'A Frustracao de McKinney', icon: 'AlertTriangle', description: 'Se McKinney nao finalizou ate o R2, observe sinais de frustracao: golpes forcados, agressao caotica, abandono do game plan. McKinney frustrado e 1-4. A ansiedade e o maior inimigo dele.' },
        { num: 5, title: 'O Corte de Peso de Nelson no 155', icon: 'Activity', description: 'Nelson disse que 145 estava "desnutrindo" ele. Observe se parece maior e mais saudavel do que as lutas anteriores. Se o corpo ta melhor, a absorpcao de poder melhora.' },
      ],
    },

    creator_kit: {
      instagram: [
        { slide_number: 1, title: '77 SEGUNDOS', content: 'McKINNEY vs NELSON\nPOS WEIGH-INS\n\nMedia de luta: 77 SEGUNDOS\nMedia UFC: 2:25\nLutas no R3: ZERO (de 12)\n\nComo favorito: 6-1\nComo underdog: 1-4\n\nA bomba-relogio mais literal do MMA.', color: 'red' },
        { slide_number: 2, title: 'OS PLANOS', content: 'McKINNEY:\n"Vou ser mais paciente.\nOuvir coaches. Seguir game plan."\n\nNELSON:\n"Ele vai ficar frustrado.\nVou picar ele ate o final.\nQuanto mais dura, mais eu domino."\n\nO tempo decide TUDO.', color: 'blue' },
        { slide_number: 3, title: 'PREVISAO', content: 'McKINNEY KO/TKO R1\nConfianca: MEDIA-ALTA (7/10)\n60% McKinney / 38% Nelson\n\nMelhor valor: McKinney KO/TKO +190\n(cenario mais provavel, paga 2:1)\n\nUnder 1.5 rds: -270 (seguro, caro)\n\nSe durar 5+ min: Nelson ganha.', color: 'gold' },
      ],
      twitter: [
        { num: '1/3', text: 'POS WEIGH-INS: McKinney vs Nelson. Media de luta: 77 SEGUNDOS. Zero R3 em 12 UFC. Como favorito: 6-1. Prometeu paciencia. Nelson: "Vou frustrar e picar ele." Thread rapida:' },
        { num: '2/3', text: 'McKinney KO/TKO a +190 e o melhor valor da luta (Sports Gambling Podcast concorda). 63% KO rate, 77 seg media. O cenario mais provavel pagando quase 2:1. Under 1.5 a -270 e seguro mas caro.' },
        { num: '3/3', text: 'Pick: McKinney KO R1. Confianca MEDIA-ALTA. Mas respeite os 38% de Nelson: se durar 5+ min, McKinney nunca esteve la. 1-4 como underdog/frustrado. O tempo e o inimigo.' },
      ],
      video: [
        { time: '0-10s', title: 'Hook', text: 'A media de luta desse cara e 77 segundos. Setenta e sete. Mas ele prometeu ser PACIENTE dessa vez.' },
        { time: '10-30s', title: 'McKinney', text: '77 seg media. 2:25 no UFC. Zero R3 em 12 lutas. 6-1 como favorito. Mentorando por Chiesa. Prometeu ouvir coaches e nao apressar.' },
        { time: '30-45s', title: 'Nelson', text: 'Plano: frustrar e picar. "Quanto mais dura, mais pico ele." Mudou pra 155, mais saudavel. Defende melhor que McKinney. Se durar 5 minutos, domina.' },
        { time: '45-55s', title: 'Previsao', text: 'McKinney KO R1. +190 e melhor valor. Under 1.5 -270 seguro. Se durar 5+ min, Nelson ganha.' },
        { time: '55-65s', title: 'CTA', text: '77 segundos ou 15 minutos? Comenta e segue.' },
      ],
      tiktok: [
        { hook: 'A MEDIA de luta desse cara e 77 segundos. Mas ele prometeu ser paciente.', body: 'Terrance McKinney. 77 seg media. Zero R3 em 12 UFC. Contra Nelson que quer "frustrar e picar ate o final." McKinney 6-1 como favorito. Prometeu ouvir coaches. A bomba-relogio vs o plano de frustracao. Se durar 5 min, Nelson ganha. Se nao durar, McKinney KO.', cta: '77 segundos ou 15 minutos? Comenta!' },
      ],
      headlines: [
        '77 Segundos: O Numero Que Define McKinney vs Nelson',
        '6-1 Como Favorito: Por Que o Papel Importa Mais Que Tudo Pra McKinney',
        'Nelson Quer Frustrar: "Quanto Mais Dura, Mais Eu Pico Ele"',
        'McKinney KO/TKO +190: A Aposta de Melhor Valor da Luta',
      ],
      podcast: [
        {
          timestamp: '0:00-5:00',
          title: '77 Segundos e o Plano de Frustracao',
          talking_points: [
            '77 seg media. 2:25 UFC. Zero R3 de 12. A bomba-relogio humana.',
            '6-1 como favorito. 1-4 como underdog. A -170 a -185, territorio ideal.',
            'McKinney prometeu paciencia: "Ouvir coaches. Nao apressar." Se for verdade, mais perigoso.',
            'Nelson: "Frustrar e picar." Mudou pra 155, mais saudavel. Defende melhor. Plano inteligente.',
            'McKinney KO/TKO +190: melhor valor. Under 1.5 -270: seguro, caro.',
          ],
          discussion_questions: [
            'McKinney realmente vai ser paciente ou e a mesma promessa de sempre?',
            'Nelson tem habilidade real de sobreviver a explosao ou e so discurso?',
          ],
        },
      ],
    },

    betting_value: null,

    radar_apostador: {
      odds: {
        fighter1_odds: '-170 a -185',
        fighter2_odds: '+142 a +154',
        fighter1_name: 'Terrance McKinney',
        fighter2_name: 'Chepe Nelson',
        source: 'Range de DraftKings, FanDuel e BetMGM (marco 2026)',
      },
      edges: [
        { icon: 'Zap', titulo: '77 Segundos e Zero R3', stat_headline: 'McKINNEY: 77 SEG MEDIA, 2:25 UFC, ZERO R3 EM 12 LUTAS.', contexto: 'A identidade de McKinney e acabar rapido. O mercado sabe: Under 1.5 a -270 e a linha mais afiada do card.', implicacao_aposta: 'McKinney KO/TKO +190 e Under 1.5 -270 sao as apostas principais.', edge_level: 'forte', fighter_side: 'fighter1' },
        { icon: 'TrendingUp', titulo: '6-1 Como Favorito', stat_headline: 'McKINNEY COMO FAVORITO: 6-1. COMO UNDERDOG: 1-4.', contexto: 'O papel define McKinney. Como favorito, a agressao e calibrada. Como underdog, fica ansioso e perde. A -170 a -185, esta no papel ideal.', implicacao_aposta: 'A -170, McKinney ML e justificado. O preco reflete o padrao.', edge_level: 'moderado', fighter_side: 'fighter1' },
        { icon: 'Shield', titulo: 'Defesa de Nelson vs Agressao de McKinney', stat_headline: 'NELSON: 52% DEF STRIKES, 3.40 ABS/MIN. McKINNEY: 42% DEF, 5.20 ABS/MIN.', contexto: 'Nelson defende significativamente melhor e absorve menos. A agressao de McKinney abre oportunidades pra Nelson contra-atacar. Se Nelson sobreviver a explosao, os numeros favorecem ele nos rounds tardios.', implicacao_aposta: 'Nelson ML +150 tem valor se voce acredita que a luta dura 5+ minutos.', edge_level: 'moderado', fighter_side: 'fighter2' },
        { icon: 'Clock', titulo: 'Under 1.5 Rounds: A Linha Mais Afiada', stat_headline: 'UNDER 1.5 ROUNDS: -270. O MERCADO ESTA MUITO CONFIANTE.', contexto: 'Nenhuma das 12 lutas UFC de McKinney foi ao R3. Under 1.5 e -270 porque o mercado sabe que acaba rapido.', implicacao_aposta: '-270 e caro, mas ~72% provavel. Se voce quer seguranca, e solido. Se quer valor, McKinney KO +190 e melhor.', edge_level: 'forte', fighter_side: 'fighter1' },
      ],
      value_picks: [
        { tipo: 'Metodo', pick: 'McKinney KO/TKO', odds: '+190', confianca: 'alta', edge_vs_mercado: 'Sports Gambling Podcast destacou como valor. 63% KO rate + 77 seg media = cenario mais provavel pagando quase 2:1.', raciocinio: 'Melhor valor da luta. O cenario mais provavel com payout de quase 2:1. Nao precisa de mais justificativa.' },
        { tipo: 'Over/Under', pick: 'Under 1.5 Rounds', odds: '-270', confianca: 'alta', raciocinio: 'A linha mais afiada do card. Seguro mas caro. ~72% provavel. Se voce quer seguranca, e isso.' },
        { tipo: 'Moneyline', pick: 'Nelson ML', odds: '+150', confianca: 'baixa', edge_vs_mercado: 'Se a luta durar 5+ minutos, Nelson domina. McKinney nunca esteve no R3. O plano de frustracao e inteligente. Aposta de convicao no tempo.', raciocinio: 'So aposte se acredita que Nelson sobrevive a explosao. Os 38% dele sao reais, mas executar contra McKinney e outra historia.' },
      ],
      armadilha: {
        titulo: 'Armadilha: Fight Goes to Decision (-110)',
        descricao: 'McKinney NUNCA foi a decisao no UFC (em nenhuma das 12 lutas). Zero decisoes. Apostar que essa luta vai aos juizes e ignorar completamente a identidade de McKinney. Acaba rapido, pra um lado ou pro outro. Decisao e o cenario menos provavel.',
      },
      disclaimer: 'Analise pos weigh-ins para fins informativos. Aposte com responsabilidade.',
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = locale === 'en' ? translateAnalysis(analise) : analise;
  return <FullAnalysisView analise={data} />;
}
