import { translateAnalysis } from '@/lib/translate-analysis';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';

const analise: PrelimsAnalise = {
  id: 'oneill-vs-fernandes-pos-weighins',
  evento_id: null,
  slug: 'oneill-vs-fernandes-pos-weighins',
  titulo: "O'Neill vs Fernandes (Pos Weigh-Ins)",
  subtitulo: null,
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Mosca Feminino (125 lbs)',
  status: 'published',
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Decisao Unanime',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: "Casey O'Neill", record: '10-2-0', ultimasLutas: [{ result: 'W', opponent: 'Santos', method: 'Decisao Unanime', event: 'UFC Fight Night' }, { result: 'L', opponent: 'Ariane Lipski', method: 'Sub R2', event: 'UFC Fight Night' }] },
  fighter2_info: { nome: 'Gabriella Fernandes', record: '11-3-0', ultimasLutas: [{ result: 'W', opponent: 'Stoliarenko', method: 'Decisao Unanime', event: 'UFC Fight Night' }, { result: 'W', opponent: 'Wang Cong', method: 'Sub R2', event: 'UFC Fight Night' }] },
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,65m', envergadura: '170cm', idade: 26, academia: 'Phuket, Tailandia / Australia' }, fighter2: { altura: '1,63m', envergadura: '165cm', idade: 28, academia: 'Brasil / Muay Thai base' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  analysis_type: 'prelims',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  prelims_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
      evento_data: '28 de Marco, 2026',
      categoria_peso: 'Peso Mosca Feminino (125 lbs)',
      num_rounds: 3,
      is_titulo: false,
      fighter1: { nome: "Casey O'Neill", record: '10-2-0', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-04/ONEILL_CASEY_L_04-13.png?itok=CaON3iLL' },
      fighter2: { nome: 'Gabriella Fernandes', record: '11-3-0', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/FERNANDES_GABRIELLA_L_08-09.png?itok=7Gt6QPap', },
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.50, valueB: 4.80, maxVal: 7, format: 'decimal', note: 'Volume similar. Fernandes ligeiramente mais ativa.' },
        { label: 'Precisao de Strikes (%)', valueA: 48, valueB: 45, maxVal: 100, format: 'percent', note: "O'Neill mais precisa quando saudavel" },
        { label: 'Strikes Absorvidos/Min', valueA: 3.80, valueB: 4.20, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Fernandes absorve um pouco mais mas disputa sempre de perto' },
        { label: 'Defesa de Strikes (%)', valueA: 52, valueB: 50, maxVal: 100, format: 'percent', note: 'Defesa parecida entre as duas' },
        { label: 'Takedowns por 15 Min', valueA: 2.50, valueB: 2.20, maxVal: 4, format: 'decimal', note: "O'Neill busca mais TDs quando saudavel" },
        { label: 'Defesa de Takedown (%)', valueA: 65, valueB: 69, maxVal: 100, format: 'percent', note: 'Fernandes com 69% TDD, numero solido' },
        { label: 'Submissoes por 15 Min', valueA: 0.80, valueB: 1.10, maxVal: 2, format: 'decimal', note: 'Fernandes busca mais finalizacoes. Submeteu Wang Cong por upset.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '26 anos', fighter2: '28 anos', note: 'Faixa similar. Ambas no auge teorico.' },
        { label: 'Altura', fighter1: '1,65m', fighter2: '1,63m', note: 'Praticamente iguais' },
        { label: 'Envergadura', fighter1: '170cm', fighter2: '165cm', note: "O'Neill com 5cm mais de reach" },
        { label: 'Background', fighter1: 'Muay Thai + wrestling. 4-0 no UFC antes da lesao de LCA.', fighter2: 'Muay Thai base + BJJ faixa marrom. 3 vitorias seguidas incluindo upset sobre Wang Cong.', note: 'Estilos similares com nuances diferentes' },
        { label: 'Contexto', fighter1: "19 MESES fora. LCA (abril 2022) + outro problema no joelho em 2025. Camp na Tailandia.", fighter2: '3 vitorias seguidas. Submeteu Wang Cong por upset. Momentum real.', note: 'Layoff longo vs momentum ascendente' },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: "O'Neill",
        recent_fights: [
          { date: 'Ago 2024', opponent: 'Santos', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria por decisao. Retorno apos periodo dificil.' },
          { date: 'Dez 2023', opponent: 'Ariane Lipski', result: 'L', method: 'Sub R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Submetida no segundo round. Joelho pode ter limitado performance.' },
          { date: 'Mar 2023', opponent: 'Maia', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Derrota por pontos.' },
          { date: 'Fev 2022', opponent: 'Roxanne Modafferi', result: 'W', method: 'Decisao Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria apertada. Rompeu LCA durante a luta mas completou 3 rounds.' },
          { date: 'Out 2021', opponent: 'Antonina Shevchenko', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Dominou a irma da Valentina. POTN. Mostrou versatilidade.' },
          { date: 'Jun 2021', opponent: 'Procopio', result: 'W', method: 'Sub R3', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Finalizacao no terceiro round.' },
          { date: 'Fev 2021', opponent: 'Dobson', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Debut UFC. TKO no segundo round.' },
        ],
      },
      fighter2: {
        nome: 'Fernandes',
        recent_fights: [
          { date: 'Ago 2025', opponent: 'Stoliarenko', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Vitoria por decisao. Controle consistente.' },
          { date: 'Nov 2024', opponent: 'Wang Cong', result: 'W', method: 'Sub R2', opponent_rank: '#15 WFLW', quality_score: 3, quality_label: 'Bom', note: 'UPSET MASSIVO. Submeteu Wang Cong que era vista como prospect top da divisao.' },
          { date: 'Jun 2024', opponent: 'Judice', result: 'W', method: 'Decisao Dividida', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Vitoria apertada por decisao dividida.' },
          { date: 'Jun 2023', opponent: 'Bleda', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Derrota competitiva por pontos.' },
          { date: 'Fev 2023', opponent: 'Jasudavicius', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Derrota por decisao no debut UFC.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Muay Thai e Clinch', valueA: 68, valueB: 72, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter2', advantage_note: "Fernandes tem base forte de Muay Thai com clinch e joelhadas. O'Neill treinou na Tailandia pra esse camp mas nao sabemos como o joelho reagiu ao impacto." },
        { label: 'Grappling Ofensivo', valueA: 72, valueB: 68, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: "O'Neill era grappler agressiva antes da lesao. 2.50 TDs/15min. Fernandes tambem e perigosa no chao (submeteu Wang Cong). Margem estreita." },
        { label: 'Jiu-Jitsu', valueA: 58, valueB: 72, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter2', advantage_note: "Fernandes e faixa marrom de BJJ e submeteu Wang Cong. Jiu-jitsu ativo e perigoso. O joelho de O'Neill limita transitions no chao." },
        { label: 'Saude e Condicao Fisica', valueA: 38, valueB: 72, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: "O'Neill fora por 19 MESES. LCA em 2022, outro problema no joelho em 2025. Quote: 'Tive que parar de forcar tudo a ser perfeito. Ser mais paciente com minha carreira.' Incognita total sobre o joelho." },
        { label: 'Momentum e Confianca', valueA: 35, valueB: 78, labelA: 'Medio', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: "Fernandes vem de 3 vitorias seguidas incluindo upset sobre Wang Cong (#15). O'Neill perdeu a ultima e ficou 19 meses fora com 2 lesoes no joelho. Diferenca de momentum e brutal." },
        { label: 'Potencial Atletico', valueA: 72, valueB: 62, labelA: 'Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: "O'Neill era prospect top da divisao antes das lesoes (4-0 UFC com finishes). Se o joelho estiver 100%, o teto atletico e alto. Grande SE." },
      ],
      insight: "O grande fator X e o joelho de O'Neill. 19 meses fora com ruptura de LCA (2022) e outro problema no joelho que cancelou toda a temporada 2025. Ela mesma reconheceu: 'Tive que parar de forcar tudo a ser perfeito. Ser mais paciente com minha carreira.' E tambem: 'Espero voltar a fazer o que faco de melhor, que e parar as pessoas.' O'Neill foi pra Tailandia pra esse camp (onde comecou a jornada UFC), sinalizando um reset emocional e tecnico. Do outro lado, Fernandes vem de 3 vitorias seguidas incluindo a submissao upset de Wang Cong, tem base de Muay Thai e e faixa marrom de BJJ. A luta e quase pick'em nas odds (-113 a -125 pra O'Neill, -105 a +100 pra Fernandes), e por boas razoes: o joelho e a maior incognita do card inteiro.",
    },
    distribuicao_vitorias: {
      fighter1: { nome: "O'Neill", ko_tko: { count: 3, percent: 30 }, submission: { count: 2, percent: 20 }, decision: { count: 5, percent: 50 }, total_wins: 10 },
      fighter2: { nome: 'Fernandes', ko_tko: { count: 3, percent: 27 }, submission: { count: 3, percent: 27 }, decision: { count: 5, percent: 46 }, total_wins: 11 },
      insight: "O'Neill pende pra decisao (50%), consistente com jogo de controle e pressao. Fernandes e perfeitamente equilibrada: 33% KO, 34% sub, 33% decisao. Pode vencer de qualquer forma. A submissao de Wang Cong mostrou evolucao real no jiu-jitsu de Fernandes. O'Neill precisa provar que o joelho aguenta 3 rounds de pressao.",
    },
    previsao_final: {
      winner_name: 'Gabriella Fernandes',
      winner_side: 'fighter2',
      predicted_method: 'Decisao Unanime',
      confidence_score: 6,
      confidence_label: 'MEDIA',
      explanation: "A incognita do joelho de O'Neill e o fator decisivo nessa analise. 19 meses fora com duas lesoes no joelho (LCA em 2022, outro problema em 2025) representam um risco enorme pra performance atletica. Ela mesma reconheceu a jornada dificil: 'Tive que parar de forcar tudo a ser perfeito. Ser mais paciente com minha carreira.' Na unica luta pos-LCA (contra Lipski), O'Neill nao pareceu a mesma atleta que era 4-0 no UFC finalizando Shevchenko e dominando. O joelho limitou a explosividade e as trocas de direcao que faziam dela especial. Fernandes vem de 3 vitorias consecutivas incluindo a submissao upset de Wang Cong (#15), tem base de Muay Thai, e faixa marrom de BJJ com 69% TDD. Treinou camp inteiro sem problemas fisicos. A luta e pick'em nas odds por boas razoes (talento similar em papel), mas o layoff de 19 meses e as 2 lesoes no joelho pesam na balanca. O'Neill foi pra Tailandia pra esse camp (onde comecou a jornada UFC), declarando: 'Espero voltar a fazer o que faco de melhor, que e parar as pessoas.' A confianca e MEDIA porque se O'Neill estiver 100% saudavel, ela tem as ferramentas pra vencer. Mas 19 meses, 2 joelhos, e ring rust sao demais pra ignorar.",
      x_factor: {
        title: 'O camp na Tailandia e o retorno espiritual',
        description: "O'Neill foi pra Tailandia pra esse camp, o mesmo lugar onde comecou sua jornada no UFC. E um reset emocional e tecnico. Se a energia do lugar e o treinamento intenso de Muay Thai trouxerem de volta a O'Neill de 2021-2022 (4-0 UFC, TKO de Shevchenko, finalizacao de Procopio), tudo muda. Quote: 'Espero voltar a fazer o que faco de melhor, que e parar as pessoas.'",
      },
      upset_alert: {
        title: "O'Neill saudavel e a melhor lutadora dessa luta",
        description: "Antes das lesoes, O'Neill era 4-0 no UFC com finish de Shevchenko e dominio em todas as lutas. O potencial atletico dela e superior ao de Fernandes. Se o joelho estiver genuinamente 100% e o camp na Tailandia tiver restaurado a confianca, O'Neill tem as ferramentas pra dominar. A questao nao e talento, e saude.",
      },
      probabilities: {
        fighter1: { nome: "O'Neill", percent: 42 },
        fighter2: { nome: 'Fernandes', percent: 56 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Fernandes (-105 a +100)', reasoning: "Fernandes no pick'em ou dog leve e a melhor linha. 3 vitorias seguidas, camp sem problemas, momentum real. Contra alguem com 19 meses de layoff e 2 lesoes no joelho. Mercado subestima ring rust." },
        method: { pick: 'Fernandes por Decisao (+150)', reasoning: 'Fernandes tende a lutas competitivas. Tem cardio pra 3 rounds. Se nao finalizar, vence nos pontos com atividade e volume (4.80 SLpM).' },
        over_under: { pick: 'Over 2.5 Rounds', rounds: 2.5, reasoning: "Luta pick'em entre duas lutadoras que vao a decisao em 50%+ das lutas. Sem poder de knockout massivo de nenhum lado. Tendencia clara pra ir longe." },
        best_value: "Fernandes ML em -105 a +100 e a value pick. Ring rust de 19 meses e real, o joelho e incognita, e Fernandes vem quente com 3 consecutivas. Se O'Neill abrir como dog em algum book, ela tambem e aposta defensavel. Luta genuinamente 50/50 mas o momentum e a saude pesam.",
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = locale === 'en' ? translateAnalysis(analise) : analise;
  return <PrelimsAnalysisView analise={data} />;
}
