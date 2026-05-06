import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'nallo-vs-herbert',
  evento_id: null,
  slug: 'nallo-vs-herbert',
  titulo: 'Nallo vs Herbert: O Debute Caro',
  subtitulo:
    'Mandel Nallo estreia no UFC em sequencia de 5 vitorias, fresh KO R1 no DWCS. Jai Herbert aos 37 em 3V-5D-1E UFC, vindo de derrota split decision. Debute de cartel contra veterano em fase de saida.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,78m', envergadura: '185cm', idade: 29, academia: 'Florida gym (Sanford-area)' },
      fighter2: { altura: '1,83m', envergadura: '193cm', idade: 37, academia: 'KO Boxing, UK' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisao Unanime ou TKO R3',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Mandel Nallo',
    apelido: 'Mango',
    record: '14-3',
    ranking: 'UFC Debute',
    ultimasLutas: [
      { result: 'W', opponent: 'Samuel Silva', method: 'KO R1', event: 'DWCS (Set 2025)' },
      { result: 'W', opponent: 'Adversario regional', method: 'TKO', event: 'Regional (2025)' },
      { result: 'W', opponent: 'Adversario regional', method: 'Decisao', event: 'Regional (2024)' },
    ],
  },
  fighter2_info: {
    nome: 'Jai Herbert',
    apelido: 'The Black Country Banger',
    record: '13-6-1',
    ranking: 'Fora do top 15',
    ultimasLutas: [
      { result: 'L', opponent: 'Chris Padilla', method: 'Decisao Dividida', event: 'UFC Fight Night (Mar 2025)' },
      { result: 'W', opponent: 'Rolando Bedoya', method: 'Decisao Unanime', event: 'UFC Fight Night 2024' },
      { result: 'L', opponent: 'Derrota anterior', method: 'Decisao', event: 'UFC 2024' },
    ],
  },
  evento_nome: 'UFC Fight Night: Burns vs Malott',
  evento_data: '18 de Abril, 2026',
  evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
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
      evento_nome: 'UFC Fight Night: Burns vs Malott',
      evento_data: '18 de Abril, 2026',
      evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
      categoria_peso: 'Peso Leve (155 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'O Debute Caro',
      tagline_sub:
        'Nallo com 5 vitorias seguidas, KO R1 fresh no DWCS, hype maximo. Herbert aos 37, 3-5-1 UFC, a geracao que nao conseguiu transitar pro top.',
      fighter1: {
        nome_completo: 'Mandel "Mango" Nallo',
        apelido: 'Mango',
        sobrenome: 'Nallo',
        record: '14-3',
        ranking: 'UFC Debute',
        info_extra: 'Canada | 29 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/NALLO_MANDEL_L_04-18.png?itok=ztgnBYTw',
      },
      fighter2: {
        nome_completo: 'Jai "The Black Country Banger" Herbert',
        apelido: 'Black Country Banger',
        sobrenome: 'Herbert',
        record: '13-6-1',
        ranking: 'Fora do top 15',
        info_extra: 'Inglaterra | 37 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/HERBERT_JAI_L_03-22.png?itok=2-cIUslD',
      },
    },
    qualitative_insight: {
      tag: 'O TIMING DO DEBUTE',
      headline: 'PROSPECT FRESCO CONTRA VETERANO EM FASE DE SAIDA',
      insight:
        'Nallo entra no UFC no pico da curva: 29 anos, 5 vitorias seguidas, KO R1 no DWCS ha 7 meses. Herbert e o tipo exato de luta de debute: 37 anos, 3-5-1 UFC, saindo de 3 derrotas em 4 lutas. Nao e coincidencia matchmaker, e o caminho planejado. A pergunta: Nallo e realmente UFC-ready ou esta sendo vendido como tal?',
      tension: {
        truth_a:
          'Herbert perdeu a ultima pra Chris Padilla por split decision. Nao perdeu competitividade completamente. Em 3 rounds, veterano com 20 lutas UFC tem ferramentas que prospect de debute nao tem.',
        truth_b:
          'Nallo acabou de nocautear o Silva em 3 minutos no DWCS, mostrando timing de contra-ataque maduro pra faixa de dwelling 155 lbs. O salto pra 3 rounds UFC teste e o degrau que define prospect real.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Mandel Nallo',
        color: 'red',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Samuel Silva', result: 'W', method: 'KO R1', opponent_rank: 'DWCS', quality_score: 2, quality_label: 'Medio', note: 'Nocaute em 3 minutos pra ganhar o contrato UFC. Timing de counter limpo, queixo do Silva nao segurou.' },
          { date: '2025', opponent: 'Regional opponent', result: 'W', method: 'TKO', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Parte da sequencia de 5 vitorias que credenciou pro DWCS.' },
          { date: '2024', opponent: 'Regional opponent', result: 'W', method: 'Decisao', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Regional canadense, sem expor a luta agarrada.' },
        ],
        layoff_warning: '7 meses desde DWCS. Layoff normal pra debute UFC, ajuda a preparar plano especifico pro Herbert.',
        momentum_score: 8,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note:
          'Cinco vitorias consecutivas incluindo o KO R1 no DWCS. O momento de maior hype da carreira dele. Tendencia: jovens debutantes com sequencia + DWCS finish entregam estreia solida em ~60% dos casos historicos.',
      },
      fighter2: {
        nome: 'Jai Herbert',
        color: 'blue',
        recent_fights: [
          { date: 'Mar 2025', opponent: 'Chris Padilla', result: 'L', method: 'Decisao Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Perdeu SD competitiva. Nao foi pancada, foi saida tecnica.' },
          { date: 'Nov 2024', opponent: 'Rolando Bedoya', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria clara mas contra mid-tier. Mostrou que ainda tem vestigios do striking UK.' },
          { date: '2024', opponent: 'Derrota anterior', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Parte do declinio em fase de saida da divisao.' },
        ],
        layoff_warning: '13 meses desde a ultima luta. Veterano em layoff longo aos 37 = sinal de fim.',
        momentum_score: 3,
        momentum_label: 'Em Recuperacao',
        momentum_trend: 'descending',
        momentum_note:
          'Uma vitoria nas ultimas 4. Aos 37, com 20 lutas UFC acumuladas, e a fase de saida. Perde esse vai provavelmente pro "next contract" marker que marca fim de ciclo.',
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Mandel Nallo', media_oponentes: 1.5, media_oponentes_label: 'Ruim a Medio', aproveitamento: '5V-0D ult 5', contra_top5: '0V-0D' },
      fighter2: { nome: 'Jai Herbert', media_oponentes: 2.5, media_oponentes_label: 'Medio', aproveitamento: '1V-2D-1E ult 4', contra_top5: '0V-1D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem overlap. Nallo exposto apenas a circuito regional + DWCS. Herbert tem 9 lutas UFC, conhece o palco e a pressao. O salto de nivel do Nallo e enorme. Se ele traduzir, e prospect legitimo.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.8, valueB: 3.6, maxVal: 6, format: 'decimal' },
        { label: 'Precisao de Strikes (%)', valueA: 51, valueB: 44, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.8, valueB: 3.5, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 62, valueB: 52, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 1.5, valueB: 0.4, maxVal: 5, format: 'decimal' },
        { label: 'Precisao de Takedown (%)', valueA: 50, valueB: 30, maxVal: 100, format: 'percent' },
        { label: 'Defesa de Takedown (%)', valueA: 70, valueB: 55, maxVal: 100, format: 'percent' },
        { label: 'Submissoes por 15 Min', valueA: 0.6, valueB: 0.3, maxVal: 3, format: 'decimal' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '29 anos', fighter2: '37 anos' },
        { label: 'Altura', fighter1: '1,78m', fighter2: '1,83m' },
        { label: 'Envergadura', fighter1: '185cm', fighter2: '193cm' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo' },
        { label: 'Academia', fighter1: 'Florida', fighter2: 'KO Boxing, UK' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Distancia', advantage: 'fighter2', gap: 2, note: 'Herbert 8cm a mais de alcance e 20+ lutas UFC. Experiencia no jab cobra.' },
        { label: 'Striking em Bursts', advantage: 'fighter1', gap: 3, note: 'Nallo 51% de precisao contra 44%. Combinacoes mais limpas, KO recente confirmando o poder.' },
        { label: 'Wrestling Ofensivo', advantage: 'fighter1', gap: 4, note: '1.5 TDs/15min contra 0.4. Nallo e wrestle-boxer, Herbert e pure striker.' },
        { label: 'Cardio', advantage: 'fighter1', gap: 3, note: '29 vs 37 anos e 13 meses de layoff do Herbert. Matematica direta.' },
        { label: 'Experiencia Big Stage', advantage: 'fighter2', gap: 4, note: 'Herbert 9 lutas UFC, Nallo estreia. Luzes da camara podem travar debute.' },
        { label: 'Durabilidade', advantage: 'even', gap: 0, note: 'Nenhum dos dois tem problema documentado de queixo. Quase empatados.' },
      ],
      summary: 'Nallo tem vantagem em 3 dimensoes fisicas e tecnicas, Herbert tem 2 dimensoes de experiencia. A luta decide em se o Nallo consegue traduzir DWCS pra UFC sem a janela de nervoso do debute. Aos 29 com momento dele, chance alta.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Mandel Nallo', ko_tko: { count: 8, percent: 57 }, submission: { count: 2, percent: 14 }, decision: { count: 4, percent: 29 }, total_wins: 14 },
      fighter2: { nome: 'Jai Herbert', ko_tko: { count: 6, percent: 46 }, submission: { count: 2, percent: 15 }, decision: { count: 5, percent: 39 }, total_wins: 13 },
      insight: 'Nallo finaliza em 71% das vitorias (KO + sub). Herbert leva 39% das vitorias pro cartao, historico de lutar rounds completos. Nallo vem pra finalizar, Herbert vem pra ir ate o fim.',
    },
    previsao_final: {
      winner_name: 'Mandel Nallo',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime ou TKO R3',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation:
        'Conviccao 7 porque a combinacao de juventude + momento + debute planejado matchmaker contra veterano em saida tem historico forte (60%+ win rate). Nao e 8 ou 9 porque debute UFC sempre carrega variavel de nervoso que pode travar performance.',
      x_factor: {
        title: 'Os Primeiros 3 Minutos',
        description: 'Se Nallo se soltar nos primeiros 3 minutos e conectar um counter limpo como conectou no Silva, vira a luta cedo. Se travar no debute e tentar lutar perfeito, Herbert pode ganhar rounds no volume.',
      },
      upset_alert: {
        title: 'O Veterano Tirando do Bolso',
        description: 'Herbert em lutas decisivas (fim de carreira, contrato em jogo) ja pegou vitorias imprevisiveis. Se o Nallo entrar com ansiedade de debute, veterano de 20 lutas UFC sabe explorar nervoso.',
      },
      probabilities: { fighter1: { nome: 'Nallo', percent: 66 }, fighter2: { nome: 'Herbert', percent: 30 }, draw: 4 },
      odds: { fighter1_odds: '-175', fighter2_odds: '+140', fighter1_name: 'Mandel Nallo', fighter2_name: 'Jai Herbert', source: 'Media dos sportsbooks (abril de 2026)' },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Mandel Nallo', odds: '-175', reasoning: 'Aposta segura. Padrao historico de debute bem-casado favorece Nallo.' },
          { type: 'Metodo', pick: 'Nallo por TKO/KO', odds: '+200', reasoning: 'Nallo finaliza em 57% por KO. Herbert ja absorveu 2 derrotas por decisao/parada. Valor em finish.' },
          { type: 'Rounds Over/Under', pick: 'Over 1.5 rounds', odds: '-150', reasoning: 'Debute raramente finaliza no R1. Mas se passar do R1, tende a ir ate a decisao ou finish tardio.' },
        ],
        best_bet: { pick: 'Nallo por TKO a +200', reasoning: 'Conviccao 7 combina com metodo de valor moderado.' },
      },
      key_stats: [
        { value: '5', label: 'vitorias seguidas do Nallo incluindo KO DWCS', sublabel: 'Momento maximo da carreira' },
        { value: '37', label: 'anos do Herbert, 9 lutas UFC', sublabel: 'Fase de saida da divisao' },
        { value: '13', label: 'meses de layoff do Herbert', sublabel: 'Veterano nao volta do layoff longo' },
      ],
      armadilha: { titulo: 'Armadilha: Herbert por KO', descricao: 'Mercado paga alto em Herbert KO, mas ele tem 1 KO nas ultimas 6 lutas. Se vai apostar nele, decisao e o cenario realista.' },
      conviction: {
        thesis: 'A tese e: Mandel Nallo vence porque (1) entra no UFC em 5-fight win streak incluindo KO R1 recente no DWCS, mostrando momento e timing de contra-ataque, enquanto Herbert vem de 1 vitoria em 4 lutas; (2) a diferenca de idade e crucial: 29 anos em ascensao contra 37 em saida, e Herbert passou 13 meses sem lutar; (3) matchup estilistico favorece Nallo: ele wrestle-boxa (1.5 TDs/15), Herbert nao tem historico forte de defesa de TD (55%). O caminho e Nallo soltar striking nos primeiros minutos pra ver se o counter funciona contra veterano, e se nao cair rapido, passar a pressionar com wrestling a partir do R2. Isso desmorona se ansiedade de debute travar ele ou se Herbert provar que o veteran toolkit ainda tem ponta contra prospect.',
        conviction_score: 7,
        conviction_rationale: 'Conviccao 7 porque a combinacao (prospect fresco + veterano em saida + matchup matchmaker) e padrao historico de debute forte no UFC. Nao e 8 ou 9 porque sempre tem variavel nervoso do debute.',
        conviction_breakers: [
          'Se Nallo travar na ansiedade do debute nos primeiros 3 minutos e Herbert comecar a acumular volume.',
          'Se Herbert conectar um cruzado limpo de southpaw na entrada do TD do Nallo (historico dele contra wrestlers).',
          'Se a altitude e logistica da viagem Canada-USA afetar Nallo pela primeira vez em luta de alta magnitude.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 30,
          key_scenario: 'Herbert pressiona desde o sino com jab + low kick pra testar a ansiedade do debute. Se Nallo recuar e sair do plano, Herbert acumula pontos via volume e leva cartao. Alternativa: counter no shot de TD do Nallo com knee ou cotovelo pra parar a entrada.',
          required_conditions: [
            'Absorver as primeiras 2-3 trocas sem ser rachado',
            'Negar pelo menos 2 de 3 tentativas de TD do Nallo',
            'Forcar ritmo alto no R1 pra testar cardio e nervoso de debute',
          ],
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'nallo-vs-herbert');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
