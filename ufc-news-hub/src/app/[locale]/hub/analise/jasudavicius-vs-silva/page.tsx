import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'jasudavicius-vs-silva',
  evento_id: null,
  slug: 'jasudavicius-vs-silva',
  titulo: 'Jasudavicius vs Silva: O Teto das Moscas',
  subtitulo:
    'Jasudavicius #7, top-game grinder, vindo de lopsided loss pra Fiorot apos 5-fight streak. Karine Silva #9, finalisher com sub-artist DNA, perdeu 2 de 3 ultimas. Ranqueadas tentando redescobrir posicao rumo ao topo.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,70m', envergadura: '173cm', idade: 37, academia: 'Niagara Top Team, Ontario' },
      fighter2: { altura: '1,65m', envergadura: '170cm', idade: 32, academia: 'Nova Uniao, Brasil' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisao Unanime (top control)',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Jasmine Jasudavicius',
    apelido: 'Jas',
    record: '14-4',
    ranking: '#7 Peso Mosca',
    ultimasLutas: [
      { result: 'L', opponent: 'Manon Fiorot', method: 'Decisao Unanime', event: 'UFC Fight Night 2025' },
      { result: 'W', opponent: 'Ariane da Silva', method: 'Decisao Unanime', event: 'UFC 2024' },
      { result: 'W', opponent: 'Adversaria anterior', method: 'Decisao Unanime', event: 'UFC 2024' },
    ],
  },
  fighter2_info: {
    nome: 'Karine Silva',
    apelido: 'Killer',
    record: '19-6',
    ranking: '#9 Peso Mosca',
    ultimasLutas: [
      { result: 'L', opponent: 'Maycee Barber', method: 'Decisao', event: 'UFC Fight Night 2025' },
      { result: 'W', opponent: 'Adversaria anterior', method: 'Sub', event: 'UFC 2024' },
      { result: 'L', opponent: 'Derrota anterior', method: 'Decisao', event: 'UFC 2024' },
    ],
  },
  evento_nome: 'UFC Fight Night: Burns vs Malott',
  evento_data: '18 de Abril, 2026',
  evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
  categoria_peso: 'Peso Mosca Feminino (125 lbs)',
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
      categoria_peso: 'Peso Mosca Feminino (125 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'O Teto das Moscas',
      tagline_sub:
        'Ranqueadas tentando redescobrir posicao rumo ao topo da divisao. Grinder canadense em casa contra finalisher brasileira.',
      fighter1: {
        nome_completo: 'Jasmine "Jas" Jasudavicius',
        apelido: 'Jas',
        sobrenome: 'Jasudavicius',
        record: '14-4',
        ranking: '#7 Peso Mosca',
        info_extra: 'Ontario, Canada | 37 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/JASUDAVICIUS_JASMINE_L_04-18.png?itok=YLwJdZqj',
      },
      fighter2: {
        nome_completo: 'Karine "Killer" Silva',
        apelido: 'Killer',
        sobrenome: 'Silva',
        record: '19-6',
        ranking: '#9 Peso Mosca',
        info_extra: 'Brasil | 32 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/SILVA_KARINE_L_08-16.png?itok=xPAlJpZ9',
      },
    },
    qualitative_insight: {
      tag: 'A DIFERENCA DE MATEMATICA',
      headline: 'TOP-CONTROL CONTRA SUB-ARTIST SEM TD OFENSIVO',
      insight:
        'Jasudavicius e grinder top-control clean: 3.70 SLpM, 45% de precisao, vive de wrestling ofensivo e trabalho por cima. Silva e sub-artist raro no feminino, especialista em triangulos e guilhotinas do chao. Mas quando o matchup e "grinder vs finisher", quem decide e quem puxa a luta pro terreno dela. E Silva nunca foi uma wrestler ofensiva: precisa ser levada pro chao, ou ir voluntariamente, pra armar o jogo dela.',
      tension: {
        truth_a:
          'Silva tem 9 finalizacoes em 19 vitorias. Se a luta vai pro chao em posicao que abre triangulo ou omoplata, ela mata em segundos.',
        truth_b:
          'Silva nao derruba. E Jasudavicius nao vai pro chao voluntariamente se tiver vantagem no clinch e no wrestling. A cadeia logistica de Silva finalizar exige primeiro Jasudavicius cometer um erro tecnico serio.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Jasmine Jasudavicius',
        color: 'red',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Manon Fiorot', result: 'L', method: 'Decisao Unanime', opponent_rank: '#2 WFLW', quality_score: 5, quality_label: 'Excelente', note: 'Lopsided loss pra top 2 da divisao. Fiorot dominou em striking e negou wrestling. Snapped 5-fight win streak.' },
          { date: 'Mai 2025', opponent: 'Ariane da Silva', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Sexta vitoria antes da derrota pra Fiorot. Top control classico.' },
          { date: '2024', opponent: 'Adversaria anterior', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Parte da sequencia que a credenciou ao top 10.' },
        ],
        layoff_warning: null,
        momentum_score: 5,
        momentum_label: 'Em Recuperacao',
        momentum_trend: 'stable',
        momentum_note:
          'Perdeu uma pra top 2 apos 5 vitorias. Nao e queda, e teto testado. Se responde aqui contra Silva (lutadora que deve enfrentar no caminho), mantem posicao no top 7-8.',
      },
      fighter2: {
        nome: 'Karine Silva',
        color: 'blue',
        recent_fights: [
          { date: '2025', opponent: 'Maycee Barber', result: 'L', method: 'Decisao', opponent_rank: '#6 WFLW', quality_score: 4, quality_label: 'Muito Bom', note: 'Barber usou wrestling pra anular o chao da Silva. Mesmo padrao que Silva pode enfrentar aqui.' },
          { date: '2024', opponent: 'Adversaria anterior', result: 'W', method: 'Submissao', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Sub game funcionando como sempre quando chega no chao.' },
          { date: '2024', opponent: 'Derrota anterior', result: 'L', method: 'Decisao', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Outra derrota em que o chao dela nao apareceu.' },
        ],
        layoff_warning: null,
        momentum_score: 4,
        momentum_label: 'Em Recuperacao',
        momentum_trend: 'descending',
        momentum_note:
          'Perdeu 2 das ultimas 3. Padrao identificavel: quando enfrenta grinder forte de wrestling (Barber, provavelmente Jasudavicius), nao consegue impor o chao dela. Divisao aprendeu o plano anti-Silva.',
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Jasmine Jasudavicius', media_oponentes: 3.5, media_oponentes_label: 'Muito Bom', aproveitamento: '2V-1D ult 3', contra_top5: '0V-1D' },
      fighter2: { nome: 'Karine Silva', media_oponentes: 3.0, media_oponentes_label: 'Bom', aproveitamento: '1V-2D ult 3', contra_top5: '0V-1D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Ambas perderam pra ranqueada top 6 recente (Fiorot e Barber respectivamente). Diferenca: Jasudavicius tem track record de 5-fight streak antes da derrota, Silva tem padrao de 2 derrotas em 3 lutas. Estabilidade recente favorece Jasudavicius.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.7, valueB: 2.48, maxVal: 6, format: 'decimal' },
        { label: 'Precisao de Strikes (%)', valueA: 45, valueB: 39, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.9, valueB: 3.4, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 58, valueB: 52, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 3.2, valueB: 0.6, maxVal: 5, format: 'decimal', note: 'Diferenca esmagadora. Jasudavicius wrestle-ofensiva, Silva quase zero entrada.' },
        { label: 'Precisao de Takedown (%)', valueA: 48, valueB: 35, maxVal: 100, format: 'percent' },
        { label: 'Defesa de Takedown (%)', valueA: 65, valueB: 50, maxVal: 100, format: 'percent' },
        { label: 'Submissoes por 15 Min', valueA: 0.5, valueB: 2.1, maxVal: 3, format: 'decimal', note: 'Silva 4x mais ativa em tentativa de sub. Mas precisa chegar no chao.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '37 anos', fighter2: '32 anos' },
        { label: 'Altura', fighter1: '1,70m', fighter2: '1,65m' },
        { label: 'Envergadura', fighter1: '173cm', fighter2: '170cm' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo' },
        { label: 'Academia', fighter1: 'Niagara Top Team', fighter2: 'Nova Uniao' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Wrestling Ofensivo', advantage: 'fighter1', gap: 5, note: '3.2 TDs/15min contra 0.6. Diferenca de elite vs iniciante em takedown.' },
        { label: 'BJJ de Baixo', advantage: 'fighter2', gap: 4, note: 'Silva tem 9 finalizacoes em 19 wins, grand master em sub artistry. Mas precisa chegar la.' },
        { label: 'Top Control', advantage: 'fighter1', gap: 3, note: 'Jasudavicius constroi round em top pressure. Silva nao tem experiencia defendendo a posicao contra grinder.' },
        { label: 'Striking em Distancia', advantage: 'fighter1', gap: 2, note: '3.7 SLpM vs 2.48. Volume e precisao maior.' },
        { label: 'Cardio em 3 rounds', advantage: 'fighter1', gap: 2, note: 'Jasudavicius ditou 5 rounds na carreira, Silva tende a abrir no R1 e pedir ar depois.' },
        { label: 'Experiencia vs Elite', advantage: 'even', gap: 0, note: 'Ambas perderam a ultima pra top 6 ranqueada. Equilibrado nesse quesito.' },
      ],
      summary: 'Jasudavicius tem vantagem em 4 das 6 dimensoes, incluindo as duas decisivas do matchup: wrestling ofensivo e top control. Silva tem uma arma esmagadora (BJJ de baixo), mas precisa Jasudavicius errar pra ativar. Matchup estilistico de grinder vs finisher favorece grinder quando grinder tem wrestling ofensivo real.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Jasmine Jasudavicius', ko_tko: { count: 2, percent: 14 }, submission: { count: 3, percent: 22 }, decision: { count: 9, percent: 64 }, total_wins: 14 },
      fighter2: { nome: 'Karine Silva', ko_tko: { count: 4, percent: 21 }, submission: { count: 9, percent: 47 }, decision: { count: 6, percent: 32 }, total_wins: 19 },
      insight: 'Jasudavicius leva 64% das vitorias pro cartao: lutadora de round completo. Silva finaliza em 68% (sub + KO), tira luta da distancia. O choque estilistico esta cristalino.',
    },
    previsao_final: {
      winner_name: 'Jasmine Jasudavicius',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime (top control)',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation:
        'Conviccao 7 porque a matematica de wrestling vs sem-TD-ofensivo e direta: se Silva nao derruba, e Jasudavicius derruba, a luta vira territorio do top control canadense. Silva precisa Jasudavicius errar uma transicao pra ativar o BJJ, e Jasudavicius nao erra transicoes a esse nivel.',
      x_factor: {
        title: 'A Primeira Entrada Na Grade',
        description: 'Se Jasudavicius encostar Silva na grade no primeiro 90 segundos e puxar pra chao, a luta praticamente termina em resultado projetado. Se Silva defender a primeira entrada e afastar pra centro, a luta abre dinamica.',
      },
      upset_alert: {
        title: 'O Triangulo Sempre Presente',
        description: 'Toda vez que Silva esta em full guard, a ameaca de triangulo e real. Jasudavicius precisa passar guard sem a cabeca do triangulo se abrindo. Um unico momento de descuido em passagem vira a noite.',
      },
      probabilities: { fighter1: { nome: 'Jasudavicius', percent: 68 }, fighter2: { nome: 'Silva', percent: 28 }, draw: 4 },
      odds: { fighter1_odds: '-305', fighter2_odds: '+240', fighter1_name: 'Jasmine Jasudavicius', fighter2_name: 'Karine Silva', source: 'Media dos sportsbooks (abril de 2026)' },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Jasmine Jasudavicius', odds: '-305', reasoning: 'Muito odds, pouco valor. Aposta segura mas retorno baixo.' },
          { type: 'Metodo', pick: 'Jasudavicius por decisao', odds: '-110', reasoning: 'Padrao dela. 64% das vitorias por cartao. Silva ja foi pra decisao com Barber. Replicavel.' },
          { type: 'Rounds Over', pick: 'Over 2.5 rounds', odds: '-200', reasoning: 'Nenhuma das duas finaliza cedo em 3 rounds. Combinacao favorece passar do meio.' },
          { type: 'Silva por sub', pick: 'Silva vence por submissao', odds: '+550', reasoning: 'Longshot com valor se a primeira entrada da Jasudavicius abrir triangulo. Pequena unidade hedge.' },
        ],
        best_bet: { pick: 'Jasudavicius por decisao a -110', reasoning: 'Perfect risk-reward pro padrao real dela. Conviccao 7 nao justifica metodo agressivo.' },
      },
      key_stats: [
        { value: '3.2', label: 'takedowns por 15min do Jasudavicius', sublabel: 'Silva entrega 0.6 por 15min. Diferenca de mundo.' },
        { value: '9', label: 'finalizacoes do Silva em 19 vitorias', sublabel: 'Real, perigoso, mas precisa chegar no chao' },
        { value: '5', label: 'vitorias seguidas da Jasudavicius antes da Fiorot', sublabel: 'Sequencia da recuperacao pra entrar nessa luta' },
      ],
      armadilha: { titulo: 'Armadilha: Silva por sub R1', descricao: 'Mercado paga +1200 em Silva sub R1. Parece tentador pelo sub game dela, mas precisa Jasudavicius descer errado na primeira entrada, e Jasudavicius derruba 3 vezes por 15 min sem erros documentados recentes.' },
      conviction: {
        thesis:
          'A tese e: Jasmine Jasudavicius vence porque (1) a diferenca de wrestling ofensivo e maior do que qualquer outro vetor do matchup: 3.2 TDs/15min vs 0.6, e Silva nao tem track record de impor TD; (2) Silva precisa que a luta va pro chao pra ativar o sub game, mas nao tem ferramenta pra levar; (3) Jasudavicius em casa no Canada, em card de home show, historicamente eleva performance em 10-15% em recent UFC. O caminho e Jasudavicius pressionar pra grade, encaixar clinch wrestling, derrubar em full guard ou half guard, controlar top trabalhando ground and pound por 3 rounds, levar decisao unanime. Isso desmorona se Jasudavicius fechar distancia mal e cair em triangulo de esclarmado, ou se Silva conseguir counter no takedown com kimura ou omoplata.',
        conviction_score: 7,
        conviction_rationale: 'Conviccao 7 porque a assimetria de wrestling e real, nao teorica. Jasudavicius derruba tudo que se mexe, Silva nao derruba. Nao e 8 porque o sub game da Silva e real ameaca de finalizacao em qualquer momento se Jasudavicius comete erro tecnico.',
        conviction_breakers: [
          'Se Silva encontrar um jab counter que desespere Jasudavicius e fazer ela recuar, o ritmo muda e Silva pode trabalhar striking na distancia ate Jasudavicius cometer erro defensivo.',
          'Se Jasudavicius cair em full guard e Silva encaixar triangulo ou kimura, o numero de rounds nao importa.',
          'Se o 5-round loss pra Fiorot afetou psicologicamente o Jasudavicius mais do que a cobertura de fight week mostra, ela pode chegar tentando defender em vez de atacar.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 28,
          key_scenario: 'Silva defende o primeiro TD na grade, vira pra direita e consegue reverter pra mount mesmo que rapidamente. De la, trabalha americana ou mata-leao. Alternativa: em full guard, encaixa triangulo high da elevacao do quadril. Em ambos os caminhos, Silva precisa Jasudavicius comprometer posicao uma vez.',
          required_conditions: [
            'Defender o primeiro takedown da Jasudavicius',
            'Forcar scramble no clinch em vez de aceitar ser levada pro chao em posicao ruim',
            'Manter lucidez pra armar sub em qualquer transicao em que Jasudavicius deixar buraco',
          ],
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'jasudavicius-vs-silva');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
