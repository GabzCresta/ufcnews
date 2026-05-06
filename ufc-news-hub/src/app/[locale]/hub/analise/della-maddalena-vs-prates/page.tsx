import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'della-maddalena-vs-prates',
  evento_id: null,
  slug: 'della-maddalena-vs-prates',
  titulo: 'Della Maddalena vs Prates: O Retorno e o Pesadelo',
  subtitulo:
    'Ex-campeão peso meio-médio volta pra casa depois de tomar 50-45 do Makhachev. Do outro lado, Prates vem pegando fogo, fresco do nocaute em cima do Leon Edwards. A linha abriu Prates -165 e moveu pra JDM -120, mas a Polymarket bate em Prates 61%. Diferença de 13 cm de envergadura, mãos pesadas e momentum apontam pro brasileiro.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,80m', envergadura: '185cm', idade: 29, academia: 'Scrappy MMA, Perth' },
      fighter2: { altura: '1,85m', envergadura: '198cm', idade: 32, academia: 'Fighting Nerds, Brasil' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'KO/TKO ou Decisão',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Jack Della Maddalena',
    apelido: 'JDM',
    record: '18-3-0',
    ranking: '#1 Peso Meio-Médio',
    ultimasLutas: [
      { result: 'L', opponent: 'Islam Makhachev', method: 'Decisão Unânime', event: 'UFC 322' },
      { result: 'W', opponent: 'Belal Muhammad', method: 'Decisão Unânime', event: 'UFC 315 (Título)' },
      { result: 'W', opponent: 'Gilbert Burns', method: 'TKO R3', event: 'UFC 299' },
    ],
  },
  fighter2_info: {
    nome: 'Carlos Prates',
    apelido: 'The Nightmare',
    record: '23-7-0',
    ranking: '#5 Peso Meio-Médio',
    ultimasLutas: [
      { result: 'W', opponent: 'Leon Edwards', method: 'KO R2 (1:28)', event: 'UFC 322' },
      { result: 'W', opponent: 'Geoff Neal', method: 'KO R1 (cotovelada giratória)', event: 'UFC 319' },
      { result: 'L', opponent: 'Ian Garry', method: 'Decisão Unânime', event: 'UFC Fight Night Kansas City' },
    ],
  },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: '2 de Maio, 2026',
  evento_local: 'RAC Arena, Perth, Austrália',
  categoria_peso: 'Peso Meio-Médio (170 lbs)',
  num_rounds: 5,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
      evento_data: '2 de Maio, 2026',
      evento_local: 'RAC Arena, Perth, Austrália',
      categoria_peso: 'Peso Meio-Médio (170 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'O Retorno e o Pesadelo',
      tagline_sub: 'JDM volta pra casa depois de ser dominado por Makhachev. Prates chega pegando fogo. A diferença de envergadura aponta pro brasileiro.',
      fighter1: {
        nome_completo: 'Jack "JDM" Della Maddalena',
        apelido: 'JDM',
        sobrenome: 'Della Maddalena',
        record: '18-3-0',
        ranking: '#1 Peso Meio-Médio',
        info_extra: 'Perth, Austrália | 29 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/DELLA_MADDALENA_JACK_L_09-16.png?itok=s0owpxMp',
      },
      fighter2: {
        nome_completo: 'Carlos "The Nightmare" Prates',
        apelido: 'The Nightmare',
        sobrenome: 'Prates',
        record: '23-7-0',
        ranking: '#5 Peso Meio-Médio',
        info_extra: 'Taubaté, Brasil | 32 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/PRATES_CARLOS_L_08-17.png?itok=84ZbFhHS',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'A Diferença de Envergadura Aponta Pro Pesadelo',
      insight:
        'A história fácil é JDM voltando pra casa, ex-campeão que vai usar boxe afiado pra neutralizar o brasileiro. Olhando luta por luta, a coisa muda. Prates tem 13 cm de envergadura a mais, 5 cm de altura a mais, mãos pesadas que entram na conversa de all-time (18 KOs em 23 vitórias, 7º maior knockdown rate da história do UFC) e chega na esteira de dois nocautes seguidos em cima de gente de alto calibre. JDM chega de uma surra de 50-45 nos três cards do Makhachev, com a torcida especulando lesão no meio da luta. A receita do Edwards no R1 contra o Prates (clinch, queda, tentativa de mata-leão) é coisa que o JDM pode repetir, só que segurar isso por 25 minutos em vez de 5 é outro filme, e o Fighting Nerds chega já tendo trabalhado exatamente essa defesa.',
      tension: {
        truth_a: 'JDM é ex-campeão, faixa-preta de BJJ, já aguentou 25 minutos com cara que joga grappling pesado. Lutando em casa em Perth, com gás de redenção depois daquela humilhação contra o russo. Boxe afiado contra canhoto provado contra o Belal.',
        truth_b: 'Prates tem 5 cm de altura a mais, 13 cm de envergadura, canhoto que botou o Edwards no chão com cruzado de esquerda em 1:28 do R2. KO em cima de ex-campeão. JDM chega depois de seis meses parado, com suspeita de lesão, e ele mesmo admitiu que entrou "com preguiça" no camp passado.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Jack Della Maddalena', color: 'red', momentum_score: 5, momentum_label: 'Em Recuperação', momentum_trend: 'descending',
        momentum_note: 'Vem de derrota dominante pro Islam Makhachev em novembro de 2025: mais de 20 minutos no chão por baixo e cards unânimes de 50-45. O próprio JDM chamou a atuação de "preguiçosa" e disse que "deveria ter sido mais agressivo". Analistas especularam ACL ou fratura de perna no decorrer da luta. Seis meses parado antes desse retorno em casa.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Islam Makhachev', result: 'L', method: 'Decisão Unânime (50-45 x3)', opponent_rank: 'Ex-Campeão Peso Leve', quality_score: 5, quality_label: 'Excelente', note: 'Ficou 25 minutos por baixo no grappling. Perdeu o cinturão.' },
          { date: 'Mai 2025', opponent: 'Belal Muhammad', result: 'W', method: 'Decisão Unânime', opponent_rank: 'Campeão', quality_score: 5, quality_label: 'Excelente', note: 'Conquistou o cinturão dos meio-médios em Montreal.' },
          { date: 'Mar 2024', opponent: 'Gilbert Burns', result: 'W', method: 'TKO R3', opponent_rank: '#5-7 Meio-Médio', quality_score: 5, quality_label: 'Excelente', note: 'Striker veterano, parado na trocação em pé.' },
          { date: 'Set 2023', opponent: 'Kevin Holland', result: 'W', method: 'Decisão Dividida', opponent_rank: 'Top 15 Meio-Médio', quality_score: 4, quality_label: 'Muito Bom', note: 'Dividida competitiva contra striker veloz.' },
          { date: 'Jul 2023', opponent: 'Bassil Hafez', result: 'W', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Dividida apertada contra estreante. Sinal de trabalho a fazer.' },
        ],
      },
      fighter2: {
        nome: 'Carlos Prates', color: 'blue', momentum_score: 9, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: 'Dois nocautes em cima de gente de alto calibre em cinco meses: cotovelada giratória no Geoff Neal no R1 em agosto e cruzado de esquerda no ex-campeão Leon Edwards no R2 em novembro. A única derrota recente foi decisão unânime pro Ian Garry em abril de 2025, num main event de cinco rounds que ele aguentou inteiro, mostrando que o fôlego dá conta mesmo com o fumo declarado. Vem do Fighting Nerds em ascensão (Caio Borralho, Mauricio Ruffy, Jean Silva).',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Leon Edwards', result: 'W', method: 'KO R2 (1:28)', opponent_rank: 'Ex-Campeão Meio-Médio', quality_score: 5, quality_label: 'Excelente', note: 'Edwards dominou o R1 no clinch. Cruzado de esquerda derrubou no R2.' },
          { date: 'Ago 2025', opponent: 'Geoff Neal', result: 'W', method: 'KO R1 (4:59)', opponent_rank: 'Top 10 Meio-Médio', quality_score: 4, quality_label: 'Muito Bom', note: 'Cotovelada giratória, finish raro. Bônus da noite.' },
          { date: 'Abr 2025', opponent: 'Ian Garry', result: 'L', method: 'Decisão Unânime', opponent_rank: 'Top 5 Meio-Médio', quality_score: 5, quality_label: 'Excelente', note: 'Cinco rounds inteiros. Fôlego aguentou. Comeback no R5.' },
          { date: 'Nov 2024', opponent: 'Neil Magny', result: 'W', method: 'KO R1', opponent_rank: 'Veterano Top 15 Meio-Médio', quality_score: 3, quality_label: 'Bom', note: 'Veterano UFC parado no soco no R1.' },
          { date: 'Ago 2024', opponent: 'Li Jingliang', result: 'W', method: 'KO R2', opponent_rank: 'Top 15 Meio-Médio', quality_score: 3, quality_label: 'Bom', note: 'Primeiro a nocautear o Jingliang.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Della Maddalena', media_oponentes: 5, media_oponentes_label: 'Excelente', aproveitamento: '4V-1D (últimas 5)', contra_top5: '2V-1D' },
      fighter2: { nome: 'Prates', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '4V-1D (últimas 5)', contra_top5: '1V-1D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum recentes. Calibre comparável: JDM enfrentou um pelotão mais elite (Makhachev, Belal, Burns), Prates pegou um mix de top 5 (Garry, Edwards) e top 15 (Neal, Magny, Jingliang). Diferença de calibre = 1, dentro do tolerável.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 6.8, valueB: 3.8, maxVal: 8, format: 'decimal', note: 'JDM tem volume superior, mas Prates entrega mais dano por golpe.' },
        { label: 'Knockdowns por 15 Min', valueA: 0.8, valueB: 2.1, maxVal: 3, format: 'decimal', note: 'Prates é o 7º maior da história UFC nessa métrica.' },
        { label: 'Sig. Strikes Absorvidos/Min', valueA: 4.2, valueB: 3.5, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Prates é mais difícil de acertar, perfil clássico de counter striker.' },
        { label: 'Defesa de Strikes (%)', valueA: 56, valueB: 62, maxVal: 100, format: 'percent', note: 'Vantagem leve pro Prates pela altura e envergadura.' },
        { label: 'Takedowns por 15 Min', valueA: 1.2, valueB: 0.4, maxVal: 5, format: 'decimal', note: 'JDM tem mais wrestling ofensivo.' },
        { label: 'Defesa de Takedown (%)', valueA: 60, valueB: 78, maxVal: 100, format: 'percent', note: 'Prates aprendeu na marra com Garry e Edwards. Defesa de quedas melhorou.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '29 anos', fighter2: '32 anos', note: 'JDM três anos mais novo.' },
        { label: 'Altura', fighter1: '1,80m', fighter2: '1,85m', note: 'Prates 5 cm mais alto.' },
        { label: 'Envergadura', fighter1: '185 cm', fighter2: '198 cm', note: 'Prates 13 cm a mais de envergadura. Vantagem clara.' },
        { label: 'Stance', fighter1: 'Destro', fighter2: 'Canhoto', note: 'Matchup canhoto vs destro.' },
        { label: 'Academia', fighter1: 'Scrappy MMA', fighter2: 'Fighting Nerds', note: 'Camp menor em casa contra equipe em ascensão no Brasil.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Boxe / Volume em Pé', advantage: 'fighter1', gap: 2, note: 'JDM joga mais golpes na média distância.' },
        { label: 'Poder de Nocaute', advantage: 'fighter2', gap: 3, note: 'Prates 18 KOs em 23 vitórias. JDM 12 em 18.' },
        { label: 'Envergadura / Distância', advantage: 'fighter2', gap: 4, note: '13 cm a mais. Diferença clara de alcance.' },
        { label: 'Wrestling / Clinch', advantage: 'fighter1', gap: 3, note: 'Faixa-preta de BJJ, tem como repetir o R1 do Edwards.' },
        { label: 'Defesa de Finalização', advantage: 'even', gap: 0, note: 'Os dois faixa-preta no BJJ.' },
        { label: 'Cardio / Cinco Rounds', advantage: 'fighter1', gap: 1, note: 'JDM já fez 25 minutos com Belal e Makhachev. Prates aguentou cinco rounds com Garry.' },
      ],
      summary: 'Prates ganha no físico (envergadura, altura, mãos pesadas), JDM em volume e wrestling. O matchup vai pivotar em quem dita a distância.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Della Maddalena', ko_tko: { count: 12, percent: 67 }, submission: { count: 2, percent: 11 }, decision: { count: 4, percent: 22 }, total_wins: 18 },
      fighter2: { nome: 'Prates', ko_tko: { count: 18, percent: 78 }, submission: { count: 3, percent: 13 }, decision: { count: 2, percent: 9 }, total_wins: 23 },
      insight: 'Os dois finalizam. Prates fecha 78% das vitórias em KO, JDM 67%. Mas o JDM foi pra decisão em 80% das últimas cinco lutas no UFC, sinal de que o calibre subiu e a luta se estende. Prates tem só 20% das vitórias por decisão no UFC, tempo médio de luta de 9:10.',
    },

    previsao_final: {
      winner_name: 'Carlos Prates', winner_side: 'fighter2',
      predicted_method: 'KO/TKO ou Decisão', confidence_score: 7, confidence_label: 'MÉDIA-ALTA',
      explanation:
        'A pick é Carlos Prates por KO/TKO ou decisão. Olhando luta por luta, a vantagem aparece em cinco dimensões independentes: físico (13 cm de envergadura a mais, 5 cm de altura, idade equiparável), stats (7º maior knockdown rate da história do UFC), momento (dois nocautes seguidos em cima de gente de alto calibre contra a derrota dominante do JDM), estilo (canhoto com cruzado de esquerda e chutes longos contra destro que precisa encurtar a distância onde as mãos pesadas do Prates trabalham) e inteligência qualitativa (Fighting Nerds em ascensão, Prates ajustou a defesa de clinch depois do Garry e do Edwards). JDM tem caminho viável (39%): repetir o que o Edwards fez no R1 com clinch e queda, e segurar isso por 25 minutos. Só que isso exige fôlego descansado, sem lesão residual do Makhachev, e disciplina pra não morder a isca da trocação em pé, onde o Prates é mais perigoso. Convicção 7 porque a luta é competitiva, mas a vantagem é clara.',
      x_factor: {
        title: 'O R1 dita o resto',
        description: 'Se JDM conseguir repetir o R1 do Edwards (clinch, queda, busca de mata-leão) e sair com tempo de domínio, ele impõe a luta no estilo do Belal. Se não rolar e a luta ficar em pé, é questão de tempo até o Prates encaixar o cruzado de esquerda ou um chute longo. O R1 vai dizer qual luta é.',
      },
      upset_alert: {
        title: 'JDM repete o Edwards e segura os 25 minutos',
        description: 'Edwards dominou o Prates inteirinho no R1 com clinch e tentativa de queda, depois levou KO no R2 quando voltou pra trocação. JDM tem o mesmo arsenal (BJJ e clinch boxing), só que precisa estender isso pelos cinco rounds. Se não morder a isca de trocar com o Prates e segurar o jogo no clinch o tempo todo, vence por decisão. Probabilidade na casa dos 39%.',
      },
      probabilities: { fighter1: { nome: 'Della Maddalena', percent: 39 }, fighter2: { nome: 'Prates', percent: 58 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Carlos Prates vence porque, primeiro, tem vantagem física esmagadora em envergadura e altura (13 cm e 5 cm) que dificulta o JDM encurtar a distância onde o boxe dele trabalha. Segundo, vem de dois KOs seguidos em cima de gente de alto calibre (Edwards no R2, Neal no R1 com cotovelada giratória) enquanto JDM vem de uma surra de 50-45 e admitiu "preguiça" no camp. Terceiro, o Fighting Nerds preparou a defesa de clinch (Edwards dominou o R1 mas não terminou, Prates voltou e finalizou no R2), exatamente o tipo de jogo que o JDM teria que aguentar por 25 minutos. Caminho da vitória: Prates supera uma tentativa de clinch cedo, conecta cruzado de esquerda ou chute, KO em R1 a R3, ou impõe o ritmo na trocação se passar pelo wrestling. Desmorona se o JDM repetir o R1 do Edwards e segurar isso pelos 25 minutos sem morder a isca de trocar em pé.',
        conviction_score: 7,
        conviction_rationale: 'Convicção 7 porque cinco dimensões independentes (físico, stats, momento, estilo, inteligência qualitativa) convergem no Prates. Não é 8 porque o JDM é ex-campeão, faixa-preta de BJJ, sabe fazer 25 minutos, e tem caminho real (39%) via wrestling segurado.',
        conviction_breakers: [
          'JDM repete o R1 do Edwards e segura clinch e quedas pelos 25 minutos',
          'Prates luta na defensiva por respeito ao boxe e não solta o cruzado de esquerda',
          'JDM leva pra decisão usando wrestling e fica com cards apertados em casa',
          'Lesão da luta com o Makhachev gerou camp melhor por urgência',
        ],
        underdog_path: {
          viable: true, probability_estimate: 39,
          key_scenario: 'JDM forçar o clinch nos primeiros 90 segundos, encaixa queda no estilo do Edwards, fica por cima. Repete o padrão do R1 ao R5 sem morder a isca de trocar em distância. Ganha no wrestling e no tempo de domínio, com jab pressionando quando em pé. Decisão unânime no estilo do Belal.',
          required_conditions: [
            'Recuperação completa de qualquer lesão da luta com o Makhachev',
            'Não morder a isca de trocar com o Prates em distância',
            'Fôlego pra 25 minutos de wrestling e clinch ativos',
            'Defesa contra o cruzado de esquerda do canhoto nas transições',
          ],
          historical_precedent: 'Edwards no R1 contra Prates (UFC 322): clinch, tentativa de queda, busca por mata-leão. Deu certo por cinco minutos. O JDM precisaria estender o mesmo plano por cinco vezes mais tempo.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Carlos Prates', odds: '-106 a +100', reasoning: 'A linha abriu Prates -165 e moveu pra JDM -120 com volume pesado de aposta pública australiana. Polymarket bate em Prates 61%, alinhado com a leitura de 58%. Pegar o Prates antes da linha estabilizar perto do pickem. Vantagem de 7 a 8% em cima da probabilidade implícita das casas.' },
          { type: 'Método', pick: 'Prates por ITD (vitória dentro do tempo)', odds: '+180 a +220 (estimado)', reasoning: 'Prates fechou 5 das 6 vitórias no UFC em KO/TKO, 4 em R1 ou R2. Probabilidade real de finalizar fica entre 45 e 50%. Em +180 a probabilidade implícita é 35,7%, vantagem de 10 a 15%. Cobre KO, TKO e finalização. Melhor aposta do card.' },
          { type: 'Rounds', pick: 'Passa de 1,5 rounds', odds: '-200 a -150', reasoning: 'Edwards caiu a 1:28 do R2, Neal a 4:59 do R1. JDM tem clinch boxing pra aguentar o R1. Prates aprendeu a não querer encerrar tudo logo no primeiro round. Alta probabilidade de passar do round e meio.' },
        ],
        best_bet: { pick: 'Prates por ITD em +180 a +220', reasoning: 'Maior vantagem esperada do card. Prates é máquina de finalizar (5 das 6 vitórias no UFC por KO) e não está pegando um wrestler como o Garry, está pegando um striker que vai operar no espaço dele. Se ele encaixar uma, é fim de combate.' },
      },
      key_stats: [
        { value: '7º', label: 'Maior knockdown rate da história do UFC', sublabel: '2.1 knockdowns a cada 15 minutos pro Prates. Mãos pesadas de outra liga.' },
        { value: '50-45', label: 'Cards unânimes contra JDM', sublabel: 'Makhachev dominou no chão por mais de 20 minutos em novembro.' },
        { value: '+13 cm', label: 'Vantagem de envergadura pro Prates', sublabel: '198 cm contra 185 cm. Diferença clara.' },
        { value: '78%', label: 'Taxa de finalização do Prates', sublabel: '18 KOs em 23 vitórias. JDM em 67%.' },
      ],
      odds: { fighter1_odds: '-120', fighter2_odds: '-106', fighter1_name: 'Della Maddalena', fighter2_name: 'Prates', source: 'FanDuel/DraftKings/BetMGM em 25 de abril de 2026. Linha abriu Prates -165 e moveu pra JDM -120 com volume pesado de aposta pública australiana. Polymarket bate em Prates 61%.' },
      armadilha: {
        titulo: 'Armadilha: JDM por decisão',
        descricao: 'O mercado vai apostar pesado em JDM por decisão por causa dos 80% de decisões nas últimas cinco lutas e da narrativa "ele já fez 25 minutos com Belal e com Makhachev". Só que as decisões do JDM foram em cima de wrestlers (Belal, Makhachev) ou de strikers que ele perseguiu (Burns acabou em TKO no R3). Prates não vai ficar recuando como o Belal ficou. Volume vai estar lá dos dois lados, mas o dano por golpe está com o Prates. JDM por decisão exige que ele vença em terreno que o Prates já mostrou que aprendeu a defender.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'della-maddalena-vs-prates');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
