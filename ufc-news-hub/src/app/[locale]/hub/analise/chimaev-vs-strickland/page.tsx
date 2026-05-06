import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'chimaev-vs-strickland',
  evento_id: null,
  slug: 'chimaev-vs-strickland',
  titulo: 'Chimaev vs Strickland: O Choque de Realidade',
  subtitulo:
    'Chimaev acabou de massacrar o Du Plessis em 50-44 nos três cards. O mesmo Du Plessis que derrotou Strickland duas vezes. Strickland aposta no chin lendário e na mental warfare pra tirar o russo do gameplan. Mas a transitividade joga contra. Linha aberta Chimaev -440 a -590, faixa de favorito esmagador.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,88m', envergadura: '190cm', idade: 32, academia: 'Fight Club Akhmat / Dubai' },
      fighter2: { altura: '1,85m', envergadura: '193cm', idade: 35, academia: 'Xtreme Couture, Las Vegas' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão dominante ou submissão tardia',
    confidence: 'ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Khamzat Chimaev',
    apelido: 'Borz',
    record: '15-0-0',
    ranking: 'Campeão Peso Médio',
    ultimasLutas: [
      { result: 'W', opponent: 'Dricus du Plessis', method: 'Decisão Unânime (50-44 x3)', event: 'UFC 319 (Título)' },
      { result: 'W', opponent: 'Robert Whittaker', method: 'Sub R1 (face crank)', event: 'UFC 308' },
      { result: 'W', opponent: 'Kamaru Usman', method: 'Decisão Majoritária', event: 'UFC 294' },
    ],
  },
  fighter2_info: {
    nome: 'Sean Strickland',
    apelido: 'Tarzan',
    record: '30-7-0',
    ranking: '#3 Peso Médio',
    ultimasLutas: [
      { result: 'W', opponent: 'Anthony Hernandez', method: 'TKO R3', event: 'UFC Fight Night 267' },
      { result: 'L', opponent: 'Dricus du Plessis', method: 'Decisão Unânime (50-45)', event: 'UFC 312 (Título)' },
      { result: 'W', opponent: 'Paulo Costa', method: 'Decisão Unânime', event: 'UFC 302' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Peso Médio (185 lbs)',
  num_rounds: 5,
  is_titulo: true,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC 328: Chimaev vs Strickland',
      evento_data: '9 de Maio, 2026',
      evento_local: 'Prudential Center, Newark, New Jersey',
      categoria_peso: 'Peso Médio (185 lbs)',
      num_rounds: 5,
      titulo_em_jogo: 'Título Peso Médio',
      tagline: 'O Choque de Realidade',
      tagline_sub: 'Chimaev acabou de massacrar o Du Plessis. O mesmo Du Plessis que derrotou Strickland duas vezes. A transitividade joga contra o ex-campeão.',
      fighter1: {
        nome_completo: 'Khamzat "Borz" Chimaev',
        apelido: 'Borz',
        sobrenome: 'Chimaev',
        record: '15-0-0',
        ranking: 'Campeão Peso Médio',
        info_extra: 'Dubai (origem Chechênia) | 32 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/CHIMAEV_KHAMZAT_L_BELTMOCK.png?itok=F3tD3zjH',
      },
      fighter2: {
        nome_completo: 'Sean "Tarzan" Strickland',
        apelido: 'Tarzan',
        sobrenome: 'Strickland',
        record: '30-7-0',
        ranking: '#3 Peso Médio',
        info_extra: 'Las Vegas, Nevada | 35 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-02/STRICKLAND_SEAN_L_02-21.png?itok=uLztGsBT',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'A Transitividade Aponta Pro Borz',
      insight:
        'A história fácil é Strickland tem chin de granito, jamais foi finalizado em 37 lutas e tem o tipo de cardio chato que estende qualquer luta pros 25 minutos. Olhando luta por luta, a coisa muda. Chimaev acabou de fazer 21:40 de domínio no chão em 25 minutos contra o Dricus du Plessis (87% da luta no chão), 50-44 nos três cards, takedown em 7 segundos do início. O mesmo Du Plessis que derrotou Strickland duas vezes (UFC 297 split, UFC 312 dominante quebrando o nariz). Se o DDP foi parede pro Strickland e o Chimaev passou pelo DDP de cinta, o caminho lógico é claro. A defesa de quedas do Strickland (76%) é boa pelo padrão da divisão, mas nunca foi testada por wrestler super-elite. Chimaev tem TD Def 100% na carreira inteira, ninguém derrubou ele, e TD Acc 55%. O caminho do Strickland passa por aguentar o wrestling nos primeiros dois rounds, manter chin contra o ground-and-pound, e esperar Chimaev gasar tarde como gasou contra o Burns no UFC 273. Já aconteceu, então é viável. Só que naquela vez Chimaev ainda venceu na decisão.',
      tension: {
        truth_a: 'Strickland tem 76% de defesa de quedas, jamais finalizado em 37 lutas, chin lendário. Já fez 25 minutos com DDP duas vezes, com Adesanya (vitória pelo cinturão), com Costa, com Magomedov. Boxe volume superior na divisão, 6.04 strikes por minuto. Mental warfare está funcionando segundo Joe Rogan: Strickland está atacando o emocional do Chimaev pra tirar ele do gameplan.',
        truth_b: 'Chimaev acabou de fazer 21:40 de control time em 25 minutos contra o DDP, 50-44 nos três cards. TD Def 100% na carreira (NUNCA caiu). TD Acc 55%. Mesmo DDP derrotou Strickland duas vezes. Strickland TD Def nunca foi testada por wrestler super-elite. Plus Chimaev abertamente busca finalização pra apagar o "boring label" depois da vitória dominante mas sem finish.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Khamzat Chimaev',
        color: 'red',
        momentum_score: 10,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: 'Conquistou o cinturão dos médios em agosto de 2025 com performance histórica contra o DDP: 50-44 nos três cards, takedown em 7 segundos, 21:40 de domínio no chão em 25 minutos, 529 strikes contra 45 do sul-africano. Estava 9 meses parado antes dessa primeira defesa. Disse abertamente que precisa finalizar Strickland pra tirar o "boring label". Camp consolidado no Fight Club Akhmat em Dubai depois da saída da Allstars Stockholm.',
        recent_fights: [
          { date: 'Ago 2025', opponent: 'Dricus du Plessis', result: 'W', method: 'Decisão Unânime (50-44 x3)', opponent_rank: 'Campeão Peso Médio', quality_score: 5, quality_label: 'Excelente', note: 'Conquistou o cinturão. 21:40 de domínio no chão. 12/17 takedowns.' },
          { date: 'Out 2024', opponent: 'Robert Whittaker', result: 'W', method: 'Sub R1 (face crank)', opponent_rank: 'Top 5 Peso Médio', quality_score: 5, quality_label: 'Excelente', note: 'Finalização rara em 3:34 do R1. Whittaker quebrou dentes e desistiu.' },
          { date: 'Out 2023', opponent: 'Kamaru Usman', result: 'W', method: 'Decisão Majoritária', opponent_rank: 'Ex-Campeão Meio-Médio', quality_score: 5, quality_label: 'Excelente', note: 'Subindo categoria. Luta competitiva, decisão majoritária.' },
          { date: 'Set 2022', opponent: 'Kevin Holland', result: 'W', method: 'Sub R1 (D\'Arce)', opponent_rank: 'Top 15 Peso Médio', quality_score: 3, quality_label: 'Bom', note: 'D\'Arce em 2:13 do R1 depois de luta bagunçada na pesagem.' },
          { date: 'Abr 2022', opponent: 'Gilbert Burns', result: 'W', method: 'Decisão Unânime', opponent_rank: 'Top 5 Meio-Médio', quality_score: 5, quality_label: 'Excelente', note: 'Primeira luta dura. Gasou no R3, foi pra UD competitiva.' },
        ],
      },
      fighter2: {
        nome: 'Sean Strickland',
        color: 'blue',
        momentum_score: 6,
        momentum_label: 'Estável (com ressalvas)',
        momentum_trend: 'stable',
        momentum_note: 'Vem de TKO no R3 contra Anthony Hernandez em fevereiro de 2026, finalizando depois de quase um ano parado. Na sequência tinha perdido o título pro DDP em UFC 297 (split decision controversa em janeiro de 2024) e levado uma surra com nariz quebrado no UFC 312 (UD decisiva em fevereiro de 2025). Vitória sobre Costa em meio do caminho (UFC 302 junho de 2024). Resume é sólido mas não tem novidade técnica desde 2024. Mental warfare contra Chimaev intensa, com troca de ameaças de morte e UFC considerando cancelar staredowns.',
        recent_fights: [
          { date: 'Fev 2026', opponent: 'Anthony Hernandez', result: 'W', method: 'TKO R3', opponent_rank: 'Top 10 Peso Médio', quality_score: 4, quality_label: 'Muito Bom', note: 'Finalização no R3 depois de 12 meses parado.' },
          { date: 'Fev 2025', opponent: 'Dricus du Plessis', result: 'L', method: 'Decisão Unânime (50-45 x2, 49-46)', opponent_rank: 'Campeão Peso Médio', quality_score: 5, quality_label: 'Excelente', note: 'DDP quebrou nariz dele. Surra dominante na revanche.' },
          { date: 'Jun 2024', opponent: 'Paulo Costa', result: 'W', method: 'Decisão Unânime', opponent_rank: 'Ex-Top 5 Peso Médio', quality_score: 4, quality_label: 'Muito Bom', note: 'Volume superior. UD tranquila contra striker desgastado.' },
          { date: 'Jan 2024', opponent: 'Dricus du Plessis', result: 'L', method: 'Decisão Dividida (47-48 x2, 48-47)', opponent_rank: '#1 Peso Médio (na época)', quality_score: 5, quality_label: 'Excelente', note: 'Perdeu o cinturão por dividida controversa.' },
          { date: 'Jul 2023', opponent: 'Abus Magomedov', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Volta da derrota pro Imanari, finalizou no R2.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Chimaev', media_oponentes: 5, media_oponentes_label: 'Excelente', aproveitamento: '5V-0D (últimas 5)', contra_top5: '4V-0D' },
      fighter2: { nome: 'Strickland', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-2D' },
      oponentes_em_comum_count: { fighter1: 1, fighter2: 1 },
      oponentes_em_comum_note: 'Oponente em comum decisivo: Dricus du Plessis. Chimaev derrotou DDP em UFC 319 com 50-44 nos três cards e 21:40 de domínio no chão em 25 minutos. Strickland perdeu pra DDP duas vezes: UFC 297 (split decision) e UFC 312 (UD dominante 50-45 com nariz quebrado). A transitividade Chimaev > DDP > Strickland é a evidência mais forte da análise. Calibre médio: gap de 1 ponto, mas Strickland 0V-2D contra top 5 nas últimas 5 lutas (perdeu pro DDP duas vezes), enquanto Chimaev 4V-0D contra top 5.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.04, valueB: 6.04, maxVal: 8, format: 'decimal', note: 'Strickland tem volume superior em pé. Chimaev compensa com control time.' },
        { label: 'Precisão de Strikes (%)', valueA: 60.8, valueB: 42, maxVal: 100, format: 'percent', note: 'Cada golpe do Chimaev é mais preciso. Sniper vs metralhadora.' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.32, valueB: 4.57, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Chimaev é difícil de acertar. Strickland aceita golpes pra trocar.' },
        { label: 'Defesa de Strikes (%)', valueA: 62.2, valueB: 60, maxVal: 100, format: 'percent', note: 'Equilibrado, leve vantagem pro Chimaev pelo posicionamento.' },
        { label: 'Takedowns por 15 Min', valueA: 4.5, valueB: 0.71, maxVal: 5, format: 'decimal', note: 'Chimaev quase 7x mais wrestling ofensivo (estimado da carreira).' },
        { label: 'Precisão de Takedown (%)', valueA: 55, valueB: 64, maxVal: 100, format: 'percent', note: 'Strickland melhor accuracy mas só 0.71/15min de tentativas.' },
        { label: 'Defesa de Takedown (%)', valueA: 100, valueB: 76, maxVal: 100, format: 'percent', note: 'Chimaev NUNCA foi derrubado em carreira. Stat raríssima.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '32 anos', fighter2: '35 anos', note: 'Chimaev 3 anos mais novo.' },
        { label: 'Altura', fighter1: '1,88m', fighter2: '1,85m', note: 'Chimaev 3 cm mais alto.' },
        { label: 'Envergadura', fighter1: '190 cm', fighter2: '193 cm', note: 'Strickland 3 cm a mais. Vantagem leve em pé.' },
        { label: 'Stance', fighter1: 'Destro', fighter2: 'Destro', note: 'Mesmo stance, sem assimetria.' },
        { label: 'Academia', fighter1: 'Fight Club Akhmat', fighter2: 'Xtreme Couture', note: 'Camp em Dubai vs Eric Nicksick em Las Vegas.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Wrestling / Quedas', advantage: 'fighter1', gap: 5, note: 'TD Def 100% career do Chimaev contra TD Acc 64% (mas só 0.71/15min) do Strickland. Maior gap da luta.' },
        { label: 'Top Game / Ground-and-Pound', advantage: 'fighter1', gap: 5, note: '21:40 de domínio sobre DDP em 25 min. Strickland sem ferramenta no chão.' },
        { label: 'Boxe / Volume em Pé', advantage: 'fighter2', gap: 3, note: 'Strickland 6.04 SLpM contra 4.04 do Chimaev. Volume superior, Philly Shell.' },
        { label: 'Defesa de Striking', advantage: 'fighter1', gap: 1, note: 'Chimaev 62.2% vs 60% do Strickland. Equilibrado, leve vantagem pelo footwork.' },
        { label: 'Cardio / Cinco Rounds', advantage: 'fighter2', gap: 1, note: 'Strickland fez 25 minutos várias vezes (DDP twice, Adesanya). Chimaev gasou contra Burns mas aguentou DDP por 5.' },
        { label: 'Chin / Durabilidade', advantage: 'fighter2', gap: 4, note: 'Strickland nunca finalizado em 37 lutas profissionais. Chin lendário.' },
      ],
      summary: 'Chimaev domina onde controla a luta (chão, wrestling). Strickland tem chin lendário e volume em pé. A pergunta-chave é se Strickland aguenta a defesa de quedas pelos 25 minutos. Resposta: ninguém aguentou.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Chimaev', ko_tko: { count: 6, percent: 40 }, submission: { count: 6, percent: 40 }, decision: { count: 3, percent: 20 }, total_wins: 15 },
      fighter2: { nome: 'Strickland', ko_tko: { count: 12, percent: 40 }, submission: { count: 4, percent: 13 }, decision: { count: 14, percent: 47 }, total_wins: 30 },
      insight: 'Chimaev finaliza 80% das vitórias (12 de 15 entre KO e submissão), com KO e sub em paridade rara pra wrestler. Strickland decide 47% das vitórias (14 de 30), maior taxa de decisão entre top 10 da divisão. Os números espelham a luta: Chimaev quer finalizar, Strickland quer estender.',
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Chimaev', ko_tko: { count: 0, percent: 0 }, submission: { count: 0, percent: 0 }, decision: { count: 0, percent: 0 }, total_losses: 0 },
      fighter2: { nome: 'Strickland', ko_tko: { count: 2, percent: 29 }, submission: { count: 0, percent: 0 }, decision: { count: 5, percent: 71 }, total_losses: 7 },
      insight: 'Chimaev nunca perdeu em 15 lutas profissionais, zero finalizações sofridas, stat raríssima na divisão. Strickland tem 7 derrotas e 5 delas (71%) foram por decisão: Ponzinibbio em 2015, Usman em 2017, Cannonier em 2022 e Du Plessis duas vezes (UFC 297 split, UFC 312 UD). Os 2 KOs sofridos foram chutes giratórios excepcionais (Zaleski hook kick em 2018, Pereira left hook em UFC 276). NUNCA finalizado em 37 lutas profissionais, queixo de granito. Pra value bet: Chimaev por sub é caminho difícil porque Strickland aguenta 25 minutos, mas decisão dominante 50-44 é o cenário mais provável dado que Strickland perde por decisão 71% das vezes em que cai.',
    },

    previsao_final: {
      winner_name: 'Khamzat Chimaev',
      winner_side: 'fighter1',
      predicted_method: 'Decisão dominante ou submissão tardia',
      confidence_score: 8,
      confidence_label: 'ALTA',
      explanation:
        'A pick é Khamzat Chimaev por decisão dominante ou submissão tardia. A análise individual converge em seis dimensões independentes: stats (TD Def 100% career do Chimaev contra TD Acc 64% mas baixa frequência do Strickland), nível de competição (Chimaev acabou de massacrar o DDP que derrotou Strickland duas vezes), estilo (wrestler super-elite contra striker volume sem ground game ofensivo), momento (campeão recém-coroado dominante contra ex-campeão sem novidade técnica), físico (3 anos mais novo, mesma envergadura praticamente) e inteligência qualitativa (Chimaev abertamente busca finalização pra apagar o "boring label", camp Akhmat em ascensão). Strickland tem caminho viável (13%): aguentar defesa de quedas nos primeiros dois rounds, manter chin contra ground-and-pound, esperar Chimaev gasar tarde no estilo do que aconteceu contra Burns em UFC 273. Só que naquela vez o Chimaev gasou e ainda venceu. Convicção 8 porque seis dimensões convergem mas não é 9 por: nove meses parado do Chimaev, chin lendário do Strickland que pode estender 25 minutos, e Chimaev finaliza só 40% das vitórias por KO (não é Khabib).',
      x_factor: {
        title: 'O R1 Dita Tudo',
        description: 'Se Chimaev encaixa queda nos primeiros 90 segundos como fez contra DDP (7 segundos), Strickland vai passar 4 minutos por baixo no R1. A partir daí o gameplan inverte: Strickland precisa de comeback de underdog contra wrestler que aguenta cinco rounds. Se Strickland aguenta o wrestling do R1 com sprawl e cage push, ganha confiança e a luta vira batalha de fôlego onde o Strickland tem precedente.',
      },
      upset_alert: {
        title: 'Strickland Aguenta o Wrestling e Estende',
        description: 'Strickland tem TD Def 76% na média, jamais finalizado em 37 lutas profissionais, chin de granito e cardio pra cinco rounds. Se ele resiste o wrestling do Chimaev nos primeiros dois rounds (como ninguém resistiu, mas é o gameplan), o cenário fica: Chimaev gasou no R3 contra Burns em 2022, pode acontecer de novo após 9 meses parado. Strickland acumula volume nos rounds 4 e 5, ganha cards apertados. Probabilidade na casa dos 13%.',
      },
      probabilities: { fighter1: { nome: 'Chimaev', percent: 82 }, fighter2: { nome: 'Strickland', percent: 13 }, draw: 5 },
      conviction: {
        thesis:
          'A tese é: Khamzat Chimaev vence porque, primeiro, acabou de massacrar Dricus du Plessis em 50-44 nos três cards com 21:40 de domínio no chão em 25 minutos contra o mesmo DDP que derrotou Strickland duas vezes (UFC 297 split, UFC 312 UD dominante). Segundo, TD Def 100% career e TD Acc 55% garantem ele dita onde a luta acontece, contra um Strickland que tem 76% de defesa de quedas mas nunca foi testado por wrestler super-elite (DDP wrestled some, mas não como Chimaev). Terceiro, Chimaev abertamente busca finalização pra apagar o "boring label" depois do controle dominante mas sem finish do DDP, e Strickland em 37 lutas profissionais jamais foi finalizado, mas Chimaev é o primeiro com o ground game pra mudar isso. Caminho da vitória: queda no R1 ou R2, ground-and-pound + transitions, finalização tardia ou decisão 50-44 dominante. Desmorona se Strickland aguentar o wrestling 25 minutos completos (algo que ninguém aguentou na carreira do Chimaev) e o cardio do Chimaev colapsar nos rounds 4-5 com o ex-campeão acumulando volume no late.',
        conviction_score: 8,
        conviction_rationale: 'Convicção 8 porque seis dimensões independentes convergem (stats, nível de competição, estilo, momento, físico, inteligência qualitativa). A transitividade Chimaev > DDP > Strickland é a evidência mais forte: Chimaev fez 21:40 de domínio sobre o cara que derrotou Strickland duas vezes. Não é 9-10 porque três fatores mantêm o piso aberto: nove meses parado do Chimaev (primeira defesa de cinturão), chin lendário do Strickland (jamais finalizado em 37 lutas, fez 25 minutos contra DDP duas vezes, contra Adesanya, contra Costa), e taxa de finalização do Chimaev é 40% por KO mais 40% por sub (total 80% mas distribuído, não dominante numa única forma).',
        conviction_breakers: [
          'Strickland aguenta as quedas com sprawl e cage push pelos primeiros dois rounds completos',
          'Chimaev gasa no R3 como gasou contra Burns no UFC 273, sem conseguir manter pressão de wrestling',
          'Mental warfare do Strickland tira Chimaev do gameplan, ele vai pra trocação em pé onde o ex-campeão tem volume superior',
          'Chimaev forçar finalização cedo demais, gasta cartucho no R1 e fica sem fôlego pros rounds finais',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 13,
          key_scenario: 'Strickland sobrevive o wrestling do Chimaev nos rounds 1 e 2 com sprawl, cage push e cabeça em postura defensiva contra ground-and-pound. Mantém o jab + Philly Shell quando volta em pé. Cardio aguenta cinco rounds (já fez 25 minutos com DDP duas vezes). Chimaev gasa nos rounds 4 e 5 (precedente Burns UFC 273). Strickland acumula volume com 6.04 SLpM na média, ganha rounds 4 e 5 nos cards e pega decisão dividida ou unânime apertada.',
          required_conditions: [
            'Defesa de quedas de Strickland aguentar nos primeiros dois rounds (mínimo 70%+ TDD em volume)',
            'Cardio do Chimaev colapsar no R3 ou R4 como precedente Burns 2022',
            'Chin do Strickland aguentar ground-and-pound quando levar queda (precedente: jamais finalizado em 37 lutas)',
            'Mental warfare funcionar e Chimaev sair do plano de wrestling pelo emocional',
          ],
          historical_precedent: 'Burns vs Chimaev UFC 273 (Abril 2022): Chimaev gasou no R3, foi pra decisão unânime competitiva. Burns era top 5 cardio elite e ainda perdeu UD. Strickland tem cardio comparável mas wrestling muito inferior ao Burns. Precedente existe, mas é estreito.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Chimaev', odds: '-440 a -590', reasoning: 'Probabilidade real estimada em 82-85%, probabilidade implícita -440 = 81.5%. Sem vantagem grande no moneyline puro pelo juice pesado. Aposta segura mas sem edge real, melhor procurar valor em método.' },
          { type: 'Método', pick: 'Chimaev por Decisão', odds: '-110 a -130 (estimado)', reasoning: 'O DDP fight é o precedente direto: Chimaev fez 21:40 de domínio em 25 minutos e NÃO finalizou. Strickland nunca finalizado em 37 lutas, chin de granito. Probabilidade real 45-55% de decisão dominante. Em -130 a probabilidade implícita é 56.5%, edge de 5-10%. Best bet do card.' },
          { type: 'Método', pick: 'Chimaev por ITD (vitória dentro do tempo)', odds: '+130 a +170 (estimado)', reasoning: 'Chimaev finaliza 80% das vitórias. Plus quote dele "preciso finalizar pra apagar boring label" sinaliza intenção. Probabilidade real 30-40% considerando chin do Strickland. Em +170 a probabilidade implícita é 37%, vantagem leve. Aposta com risco maior mas retorno melhor.' },
          { type: 'Total Rounds', pick: 'Passa de 2,5 rounds (Over)', odds: '-140 a -180 (estimado)', reasoning: 'DDP fight passou os 5 rounds inteiros. Strickland chin lendário não dá KO em 1-2 rounds. Mesmo se houver finalização, mais provável tarde (R4-R5).' },
        ],
        best_bet: { pick: 'Chimaev por Decisão em -110 a -130', reasoning: 'Maior edge esperado do card. Mercado vai pagar pesado em Chimaev finalização hype baseado em Whittaker R1 e Holland R1, mas DDP fight é o precedente direto: Chimaev controlou 87% e não finalizou. Strickland chin é grau acima do DDP, jamais finalizado em 37 lutas. Decisão dominante 50-44 ou 50-45 é o cenário mais provável dentro das vitórias do Chimaev.' },
      },
      key_stats: [
        { value: '100%', label: 'Defesa de quedas do Chimaev na carreira', sublabel: 'Ninguém derrubou Khamzat Chimaev em 15 lutas profissionais. Stat raríssima na divisão dos médios.' },
        { value: '21:40', label: 'Tempo de domínio do Chimaev sobre DDP em UFC 319', sublabel: '87% dos 25 minutos de luta no chão. Mesmo DDP que derrotou Strickland duas vezes.' },
        { value: '0', label: 'Submissões sofridas pelo Strickland em 37 lutas', sublabel: 'Nunca finalizado em carreira profissional. Chin lendário, defesa de finalização sólida.' },
        { value: '50-44', label: 'Cards de Chimaev contra DDP em UFC 319', sublabel: 'Os três juízes deram 50-44, o mesmo DDP que venceu Strickland em UFC 297 e UFC 312.' },
      ],
      odds: {
        fighter1_odds: '-440',
        fighter2_odds: '+310',
        fighter1_name: 'Chimaev',
        fighter2_name: 'Strickland',
        source: 'DraftKings -590 / FanDuel -440 em 12 de março de 2026 (linhas iniciais). Polymarket bate em Chimaev 80%+. Linha consolidada faixa -440 a -590 dependendo da casa.',
      },
      armadilha: {
        titulo: 'Armadilha: Chimaev finaliza no R1-R2',
        descricao: 'O mercado vai pagar pesado em "Chimaev finaliza Strickland em rounds 1-2" baseado nos finishes recentes (Whittaker face crank R1, Holland D\'Arce R1). Mas Strickland NUNCA foi finalizado em 37 lutas profissionais e o precedente direto é o próprio Chimaev contra DDP: 21:40 de domínio em 25 minutos, 87% no chão, e mesmo assim foi pra decisão. Strickland tem chin de grau acima do DDP, nariz quebrado e tudo continuou de pé contra o sul-africano. Apostar em finalização rápida ignora tanto o histórico do Chimaev em alvos duráveis quanto o chin lendário do Strickland. Se finalização vier, virá tarde (R4-R5) por accumulação de dano, não rápida.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'chimaev-vs-strickland');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
