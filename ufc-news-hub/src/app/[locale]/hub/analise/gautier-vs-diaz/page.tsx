import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'gautier-vs-diaz',
  evento_id: null,
  slug: 'gautier-vs-diaz',
  titulo: 'Gautier vs Diaz: 9 Vitórias Seguidas',
  subtitulo:
    'Gautier vem de 9 vitórias seguidas, 4-0 no UFC com 3 KOs em 1 round. Diaz tomou KO na estreia UFC e vem 1-1 na divisão. Mesma altura (1,93m) mas Gautier tem 5 cm de envergadura a mais e 10 anos de juventude a favor. Mercado abriu Gautier -1000.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,93m', envergadura: '206cm', idade: 24, academia: 'Manchester Top Team' },
      fighter2: { altura: '1,93m', envergadura: '201cm', idade: 34, academia: 'N/D' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'KO/TKO ou Decisão',
    confidence: 'ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Ateba Gautier',
    apelido: 'The Storm',
    record: '10-1-0',
    ranking: 'N/R Peso Médio',
    ultimasLutas: [
      { result: 'W', opponent: 'Andrey Pulyaev', method: 'Decisão Unânime', event: 'UFC 324' },
      { result: 'W', opponent: 'Tre\'ston Vines', method: 'KO R1', event: 'UFC 320' },
      { result: 'W', opponent: 'Robert Valentin', method: 'TKO R1', event: 'UFC 318' },
    ],
  },
  fighter2_info: {
    nome: 'Ozzy Diaz',
    apelido: '',
    record: '10-3-0',
    ranking: 'N/R Peso Médio',
    ultimasLutas: [
      { result: 'W', opponent: 'Djorden Santos', method: 'Decisão Unânime', event: 'UFC 313' },
      { result: 'L', opponent: 'Zhang Mingyang', method: 'TKO R1', event: 'UFC Macau' },
      { result: 'L', opponent: 'Joe Pyfer', method: 'TKO R2', event: 'DWCS 2022' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Peso Médio (185 lbs)',
  num_rounds: 3,
  is_titulo: false,
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
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'O Furacão e o Veterano',
      tagline_sub: 'Gautier 9 vitórias seguidas, 4-0 no UFC com 3 KOs em 1 round. Diaz tomou KO na estreia e vem 1-1. Camaroense de 24 anos com 5 cm de envergadura sobre americano de 34. Mercado abriu -1000.',
      fighter1: {
        nome_completo: 'Ateba "The Storm" Gautier',
        apelido: 'The Storm',
        sobrenome: 'Gautier',
        record: '10-1-0',
        ranking: 'N/R Peso Médio',
        info_extra: 'Camarões | 24 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/GAUTIER_ATEBA_L_01-24.png?itok=uIxSBKQu',
      },
      fighter2: {
        nome_completo: 'Ozzy Diaz',
        apelido: '',
        sobrenome: 'Diaz',
        record: '10-3-0',
        ranking: 'N/R Peso Médio',
        info_extra: 'Los Angeles, Califórnia | 34 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/1/DIAZ_OZZY_L_CS.png?itok=fp4JS5bf',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'Gautier É a Definição de Hot Prospect',
      insight:
        'Gautier vem de 9 vitórias seguidas (10-1 carreira), 4-0 no UFC com 3 KOs em 1 round (Vines, Valentin, Medina) e UD recente sobre Pulyaev em UFC 324. Aos 24 anos é "Newcomer of the Year #2" pelo UFC.com 2025 com 2 bônus de Performance da Noite. Tem 206 cm de envergadura (uma das maiores do peso médio), poder de mão genuíno e treina no Manchester Top Team. Diaz, do outro lado, é o oposto: 34 anos, 10-3 carreira, KO sofrido na estreia UFC contra Zhang Mingyang em novembro de 2024, vitória apenas sobre Santos depois. Mesma altura (1,93m), mas Gautier tem 5 cm de envergadura a mais, dez anos de juventude e o momentum esmagador. O mercado abriu Gautier -1000 com razão.',
    },

    momento_atual: {
      fighter1: {
        nome: 'Ateba Gautier',
        color: 'red',
        momentum_score: 10,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: 'Vem de UD sobre Pulyaev em UFC 324 (janeiro de 2026), 4-0 no UFC com 3 KOs em 1 round (Vines KO R1 outubro 2025, Valentin TKO R1 julho 2025, Medina KO R1 março 2025). 9 vitórias seguidas na carreira (10-1). Camaroense de 24 anos, 206 cm de envergadura, 2 bônus de Performance da Noite. Newcomer of the Year #2 UFC.com 2025. Treina no Manchester Top Team.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Andrey Pulyaev', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'UD em UFC 324, primeira luta de 3 rounds completos no UFC.' },
          { date: 'Out 2025', opponent: 'Tre\'ston Vines', result: 'W', method: 'KO R1 (cotoveladas/socos)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'KO em 1 round.' },
          { date: 'Jul 2025', opponent: 'Robert Valentin', result: 'W', method: 'TKO R1 (socos)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'TKO em 1 round.' },
          { date: 'Mar 2025', opponent: 'José Medina', result: 'W', method: 'KO R1 (socos/joelhada)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'KO em 1 round, primeira luta UFC.' },
          { date: 'Set 2024', opponent: 'Yura Naito', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'TKO no R2 do Contender Series, contrato UFC.' },
        ],
      },
      fighter2: {
        nome: 'Ozzy Diaz',
        color: 'blue',
        momentum_score: 5,
        momentum_label: 'Estável (com ressalvas)',
        momentum_trend: 'stable',
        momentum_note: 'Vem de UD sobre Djorden Santos em UFC 313 (março de 2025), primeira vitória UFC. Antes disso, perdeu a estreia UFC contra Zhang Mingyang em UFC Macau (novembro de 2024) por TKO no R1. 1-1 na divisão. Aos 34 anos, ex-LFA Middleweight Champion, americano de Los Angeles com pais guatemaltecos. Foi o substituto na luta original cancelada em UFC 320 (Diaz withdrawal).',
        recent_fights: [
          { date: 'Mar 2025', opponent: 'Djorden Santos', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Primeira vitória UFC, UD em 3 rounds.' },
          { date: 'Nov 2024', opponent: 'Zhang Mingyang', result: 'L', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Estreia UFC, KO em 1 round.' },
          { date: 'Jul 2022', opponent: 'Joe Pyfer', result: 'L', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Derrota no DWCS por strikes no R2.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Gautier', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: '5V-0D (últimas 5)', contra_top5: '0V-0D' },
      fighter2: { nome: 'Diaz', media_oponentes: 1, media_oponentes_label: 'Ruim', aproveitamento: '1V-2D (últimas 3 UFC + DWCS)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Calibre baixo nas duas carreiras (lutadores começando UFC contra outros novatos), mas momentum brutalmente diferente: Gautier 5V-0D nas últimas 5 com 4 finalizações em 1 round. Diaz 1V-2D nas últimas 3 lutas relevantes (1 UFC W, 1 UFC L, 1 DWCS L).',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.8, valueB: 3.5, maxVal: 7, format: 'decimal', note: 'Gautier volume superior, perfil de finalizador.' },
        { label: 'Precisão de Strikes (%)', valueA: 60, valueB: 48, maxVal: 100, format: 'percent', note: 'Gautier mais preciso pela altura e envergadura.' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.8, valueB: 4.2, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Gautier absorve menos pelo range, Diaz aceita troca.' },
        { label: 'Defesa de Strikes (%)', valueA: 60, valueB: 52, maxVal: 100, format: 'percent', note: 'Gautier vantagem.' },
        { label: 'Takedowns por 15 Min', valueA: 0.5, valueB: 0.3, maxVal: 5, format: 'decimal', note: 'Ambos strikers.' },
        { label: 'Defesa de Takedown (%)', valueA: 75, valueB: 60, maxVal: 100, format: 'percent', note: 'Gautier melhor TDD.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '24 anos', fighter2: '34 anos', note: 'Gautier 10 anos mais novo. Diferença gritante.' },
        { label: 'Altura', fighter1: '1,93m', fighter2: '1,93m', note: 'Empate exato.' },
        { label: 'Envergadura', fighter1: '206 cm', fighter2: '201 cm', note: 'Gautier 5 cm a mais. Vantagem.' },
        { label: 'Stance', fighter1: 'Switch', fighter2: 'Destro', note: 'Gautier troca de stance.' },
        { label: 'Academia', fighter1: 'Manchester Top Team', fighter2: 'N/D', note: 'Camp europeu de elite vs camp não confirmado.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Poder de Nocaute', advantage: 'fighter1', gap: 4, note: 'Gautier 80% finalização KO/TKO (8 em 10), 4 KOs em 1 round recentes.' },
        { label: 'Volume de Strikes', advantage: 'fighter1', gap: 3, note: 'Gautier 4.8 SLpM contra 3.5 do Diaz. Volume superior.' },
        { label: 'Striking em Distância', advantage: 'fighter1', gap: 3, note: 'Gautier 5 cm de envergadura a mais e 9 vitórias com striking dominante.' },
        { label: 'Defesa de Striking', advantage: 'fighter1', gap: 2, note: 'Gautier 60% Str.Def vs 52% do Diaz. Mostrou contra Pulyaev em UD.' },
        { label: 'Cardio / 3 Rounds', advantage: 'fighter1', gap: 2, note: 'Gautier 24 anos com cardio fresco. Diaz 34 anos com fight history menos densa.' },
        { label: 'Experiência UFC', advantage: 'even', gap: 0, note: 'Ambos novatos no UFC: Gautier 4-0, Diaz 1-1.' },
      ],
      summary: 'Gautier domina em quase todas as métricas (poder, volume, idade, defesa). Diaz só tem o experience do KO sofrido como "exposição" mas isso é negativo, não positivo. Pra Diaz vencer, precisa esperar Gautier perder um round e capitalizar.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Gautier', ko_tko: { count: 8, percent: 80 }, submission: { count: 0, percent: 0 }, decision: { count: 2, percent: 20 }, total_wins: 10 },
      fighter2: { nome: 'Diaz', ko_tko: { count: 5, percent: 50 }, submission: { count: 2, percent: 20 }, decision: { count: 3, percent: 30 }, total_wins: 10 },
      insight: 'Gautier finaliza 80% por KO/TKO sem nenhuma submissão (perfil de striker puro com finishing instinct). Diaz mais distribuído (50% KO, 20% sub, 30% dec) mas perdeu na estreia UFC por TKO em 1 round, expondo a vulnerabilidade contra strikers explosivos.',
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Gautier', ko_tko: { count: 0, percent: 0 }, submission: { count: 0, percent: 0 }, decision: { count: 1, percent: 100 }, total_losses: 1 },
      fighter2: { nome: 'Diaz', ko_tko: { count: 3, percent: 100 }, submission: { count: 0, percent: 0 }, decision: { count: 0, percent: 0 }, total_losses: 3 },
      insight: 'Gautier tem só 1 derrota em 11 lutas profissionais (10-1), uma split decision contra Glenn Williams em julho de 2022 no início da carreira regional. Nunca foi nocauteado nem finalizado. Diaz tem 3 derrotas e TODAS por KO/TKO (100%): a estreia UFC contra Mingyang Zhang foi cotovelada e ground-and-pound R1 a 2:25. Padrão exposto e cristalino: Diaz cai contra striking pesado, e Gautier finaliza 80% por KO. Para value bet: Gautier por KO é o caminho mais natural do card, com vulnerabilidade documentada e arsenal compatível.',
    },

    previsao_final: {
      winner_name: 'Ateba Gautier',
      winner_side: 'fighter1',
      predicted_method: 'KO/TKO ou Decisão',
      confidence_score: 8,
      confidence_label: 'ALTA',
      explanation:
        'A pick é Ateba Gautier por KO/TKO ou decisão. Olhando luta por luta, a vantagem aparece em cinco dimensões: stats (Gautier 80% finalização KO/TKO contra Diaz 50% e KO loss na estreia), físico (5 cm de envergadura a mais, 10 anos mais novo), estilo (striker explosivo com 4 KOs em 1 round recentes vs lutador com KO sofrido contra striker chinês), momento (4-0 UFC vs 1-1 UFC com derrota na estreia) e calibre (mesmo nível baixo de oponentes mas Gautier 9-0 últimas vs Diaz 1-2). Diaz tem caminho real (17%): se sobreviver os primeiros dois rounds, talvez o cardio do Gautier comece a desafiar e o americano possa ganhar via decisão dividida. Mas é cenário improvável dado o histórico de Gautier (3 KOs em 1 round). Convicção 8 porque as cinco dimensões convergem fortemente e a única ressalva é a inexperiência UFC do Gautier (4 lutas).',
      x_factor: {
        title: 'Os Primeiros 5 Minutos',
        description: 'Gautier finaliza no R1 em 75% das vitórias UFC (3 de 4). Diaz tomou KO em 1 round na estreia UFC. Os primeiros 5 minutos são decisivos: se Gautier encaixa cedo, é fim de combate; se Diaz sobrevive, a luta vai pra rounds 2-3 onde o cardio começa a contar.',
      },
      upset_alert: {
        title: 'Diaz Sobrevive e Capitaliza Cardio',
        description: 'Diaz é o veterano com 34 anos e 10-3 record. Se ele aguenta a explosão inicial do Gautier (que em UFC 324 mostrou que pode passar 3 rounds, mas com mais dificuldade), o cardio do camaroense pode falhar nos rounds 2-3 e o americano pode ganhar via decisão dividida pelo trabalho de desgaste. Probabilidade na casa dos 17%, baixa pelo gap de momentum.',
      },
      probabilities: { fighter1: { nome: 'Gautier', percent: 80 }, fighter2: { nome: 'Diaz', percent: 17 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Ateba Gautier vence porque, primeiro, vem de 9 vitórias seguidas com 4-0 UFC e 3 KOs em 1 round (Vines, Valentin, Medina) mostrando finishing instinct elite contra qualquer adversário. Segundo, tem 10 anos de juventude sobre Diaz (24 vs 34) plus 5 cm de envergadura a mais e altura igual, vantagens físicas reais. Terceiro, Diaz tomou KO na estreia UFC contra Zhang Mingyang em 1 round, expondo vulnerabilidade exata contra strikers explosivos como Gautier. Caminho da vitória: Gautier encaixa nos primeiros 90 segundos do R1, KO ou TKO entre R1 e R2. Desmorona se Diaz aguentar a explosão inicial e cardio do Gautier falhar nos rounds 2-3.',
        conviction_score: 8,
        conviction_rationale: 'Convicção 8 porque cinco dimensões convergem fortemente (poder, físico, estilo, momento, vulnerabilidade do oponente). Não é 9-10 porque Gautier ainda tem só 4 lutas UFC (calibre baixo) e nunca foi testado em rounds finais contra striker durável. Mas o gap em todas as métricas é esmagador.',
        conviction_breakers: [
          'Diaz aguentar os primeiros 5 minutos sem ser nocauteado',
          'Cardio do Gautier não sustentar 3 rounds completos contra veterano',
          'Diaz capitalizar nos rounds 2-3 com volume cumulativo',
          'Inexperiência do Gautier em rounds finais aparecer com pressão',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 17,
          key_scenario: 'Diaz sobrevive os primeiros 5 minutos do R1 com cabeça defensiva e clinch. Gautier começa a cansar nos rounds 2-3. Diaz acumula volume com jab e capitaliza pelo cardio superior. Decisão dividida ou apertada nos cards.',
          required_conditions: [
            'Aguentar os primeiros 5 minutos sem comer KO',
            'Cardio do Gautier falhar nos rounds 2-3',
            'Capitalizar com volume cumulativo na segunda metade',
            'Não ser pego no clinch onde o jovem tem força de bicicleta',
          ],
          historical_precedent: 'Gautier passou 3 rounds com Pulyaev em UD em UFC 324, primeira luta de longa duração no UFC. Mostrou que pode cansar mas ainda venceu. Cenário pra Diaz exige que ele faça o que Pulyaev quase fez, e ainda mais: ganhar nos cards.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Ateba Gautier', odds: '-1000', reasoning: 'Probabilidade real 80%, probabilidade implícita -1000 = 91%. Sem edge, juice esmagador. Aposta de risco zero mas retorno mínimo.' },
          { type: 'Método', pick: 'Gautier por KO/TKO', odds: '-200 a -250 (estimado)', reasoning: 'Gautier 80% finalização KO/TKO carreira, 3 KOs em 1 round UFC. Diaz tomou KO na estreia. Probabilidade real 60-65%. Em -250 a probabilidade implícita é 71%, ligeiramente sobrevalorizada mas ainda alinhada.' },
          { type: 'Round Group', pick: 'Gautier KO R1', odds: '+150 a +200 (estimado)', reasoning: '3 dos últimos 4 finishes do Gautier no UFC foram em R1. Diaz vem de KO em R1 na estreia. Probabilidade real 35-40%. Em +200 a probabilidade implícita é 33%, edge real.' },
        ],
        best_bet: { pick: 'Gautier por KO R1 em +150 a +200', reasoning: 'Maior edge esperado da luta. Padrão histórico de Gautier (3 KOs em 1 round em 4 lutas UFC) + Diaz vulnerável a striker explosivo (KO R1 na estreia). Cenário mais provável dentro das vitórias do Gautier é finalização rápida.' },
      },
      key_stats: [
        { value: '9', label: 'Vitórias seguidas do Gautier na carreira', sublabel: 'Inclui 4-0 UFC com 3 KOs em 1 round.' },
        { value: '+10', label: 'Anos de diferença etária a favor do Gautier', sublabel: '24 vs 34. Diferença gritante em peso médio.' },
        { value: '80%', label: 'Taxa de finalização do Gautier por KO/TKO', sublabel: '8 em 10 vitórias. Striker puro com finishing instinct.' },
        { value: '-1000', label: 'Odds de abertura do Gautier', sublabel: 'Mercado pagando como certeza. 91% probabilidade implícita.' },
      ],
      odds: {
        fighter1_odds: '-1000',
        fighter2_odds: '+650',
        fighter1_name: 'Gautier',
        fighter2_name: 'Diaz',
        source: 'DraftKings/FanDuel Gautier -1000 / Diaz +650 em abril de 2026. Polymarket Gautier 82% / Diaz 19%. Mercado convergente em Gautier como favorito esmagador.',
      },
      armadilha: {
        titulo: 'Armadilha: Diaz por Decisão',
        descricao: 'O mercado vai pagar pesado em "Diaz por decisão" baseado nos 30% de decisões na carreira e a UD recente sobre Santos em UFC 313. Mas pra Diaz chegar a uma decisão precisa sobreviver Gautier nos primeiros 5 minutos, algo que Mingyang não conseguiu pelo Gautier (que finalizou em estilo similar). Diaz não tem o ground game pra empacar Gautier no chão e não tem o boxe pra ganhar troca pé a pé. Apostar em decisão é apostar em cenário que precisa de múltiplas falhas do camaroense.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'gautier-vs-diaz');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
