import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';

const analise: PrelimsAnalise = {
  id: 'hooper-vs-gibson-jr-pos-weighins',
  evento_id: null,
  slug: 'hooper-vs-gibson-jr-pos-weighins',
  titulo: 'Hooper vs Gibson Jr (Pos Weigh-Ins)',
  subtitulo: null,
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Leve (155 lbs)',
  status: 'published',
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Submissao R1-R2',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Chase Hooper', record: '14-4-1', ultimasLutas: [{ result: 'W', opponent: 'Kaan Ofli', method: 'Sub R1 (RNC)', event: 'UFC Fight Night' }, { result: 'W', opponent: 'Clay Guida', method: 'Sub R2 (arm-triangle)', event: 'UFC Fight Night' }] },
  fighter2_info: { nome: 'Lance Gibson Jr', record: '8-1-0', ultimasLutas: [{ result: 'L', opponent: 'Bobby Green', method: 'Decisao Dividida', event: 'UFC Fight Night' }] },
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,88m', envergadura: '193cm', idade: 25, academia: 'Elevation Fight Team / Washington' }, fighter2: { altura: '1,80m', envergadura: '183cm', idade: 28, academia: 'Gibson MMA / Canada' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
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
      categoria_peso: 'Peso Leve (155 lbs)',
      num_rounds: 3,
      is_titulo: false,
      fighter1: { nome: 'Chase Hooper', record: '14-4-1', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/HOOPER_CHASE_L_11-22.png?itok=x1z8VuRf' },
      fighter2: { nome: 'Lance Gibson Jr', record: '8-1-0', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-09/GIBSON_JR_LANCE_L_09-27.png?itok=VYzFn82q' },
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.00, valueB: 3.40, maxVal: 6, format: 'decimal', note: 'Volume similar. Nenhum dos dois e striker de alto volume.' },
        { label: 'Precisao de Strikes (%)', valueA: 42, valueB: 45, maxVal: 100, format: 'percent', note: 'Gibson Jr ligeiramente mais preciso em pe' },
        { label: 'Strikes Absorvidos/Min', valueA: 4.20, valueB: 3.80, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Hooper absorve mais. Chin ja foi testado negativamente.' },
        { label: 'Defesa de Strikes (%)', valueA: 45, valueB: 48, maxVal: 100, format: 'percent', note: 'Ambos com defesa de striking abaixo da media' },
        { label: 'Takedowns por 15 Min', valueA: 3.80, valueB: 1.20, maxVal: 5, format: 'decimal', note: 'Hooper busca 3x mais takedowns. BJJ faixa preta aos 21 com 13 anos de treino.' },
        { label: 'Defesa de Takedown (%)', valueA: 55, valueB: 60, maxVal: 100, format: 'percent', note: 'Gibson Jr com 60% TDD. Nunca enfrentou grappler de elite.' },
        { label: 'Submissoes por 15 Min', valueA: 2.10, valueB: 0.50, maxVal: 3, format: 'decimal', note: 'Hooper busca mais de 4x mais finalizacoes. Obsessivo no chao.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '25 anos', fighter2: '28 anos', note: 'Hooper mais jovem com 13 anos de experiencia em BJJ' },
        { label: 'Altura', fighter1: '1,88m', fighter2: '1,80m', note: 'Hooper 8cm mais alto. Frame longo beneficia guard game.' },
        { label: 'Envergadura', fighter1: '193cm', fighter2: '183cm', note: 'Hooper com 10cm de vantagem de reach' },
        { label: 'Background', fighter1: 'BJJ faixa preta aos 21. Treina com Cory Sandhagen. De Enumclaw, WA.', fighter2: 'Duo pai-filho UFC (Lance Gibson Sr). Debut: split loss vs Bobby Green.', note: 'Finalizador de elite vs lutador em desenvolvimento' },
        { label: 'Contexto', fighter1: 'Primeira luta em casa desde abril 2018. Mudou pra 155 permanentemente.', fighter2: 'Camp completo apos debut. Quer corrigir a passividade que custou contra Green.', note: 'Hooper lutando em casa depois de 8 anos' },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Hooper',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Kaan Ofli', result: 'W', method: 'Sub R1 (RNC)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Mata-leao no R1. Voltou com tudo a 155 lbs.' },
          { date: 'Jun 2025', opponent: 'Clay Guida', result: 'W', method: 'Sub R2 (arm-triangle)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Arm-triangle contra veterano de 43 anos. Controle total no chao.' },
          { date: 'Fev 2025', opponent: 'Viacheslav Borshchev', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Neutralizou o striking perigoso de Borshchev levando ao chao.' },
          { date: 'Set 2024', opponent: 'Jordan Leavitt', result: 'W', method: 'Sub R1 (triangle)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Triangulo no R1. Finalizacao rapida e tecnica.' },
          { date: 'Mar 2024', opponent: 'Nick Fiore', result: 'D', method: 'Empate Dividido', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Empate controverso. Controlou mas nao converteu.' },
          { date: 'Set 2023', opponent: 'Bryce Mitchell', result: 'L', method: 'Sub R1 (arm-triangle)', opponent_rank: '#14 FW', quality_score: 4, quality_label: 'Muito Bom', note: 'Finalizado no chao por grappler elite. Ultima luta a 145 lbs antes de subir pra 155.' },
        ],
      },
      fighter2: {
        nome: 'Gibson Jr',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Bobby Green', result: 'L', method: 'Decisao Dividida', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Debut UFC. Perdeu split decision. Foi PASSIVO demais e nao imprimiu ritmo suficiente.' },
          { date: 'Mar 2025', opponent: 'Ryan Lilley', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Contender Series. TKO que garantiu contrato UFC.' },
          { date: 'Out 2024', opponent: 'Jonathan Piersma', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Finalizacao rapida no circuito regional.' },
          { date: 'Jun 2024', opponent: 'Jamar Walker', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Nocaute no primeiro round. Regional.' },
          { date: 'Mar 2023', opponent: 'Vladimir Tokov', result: 'L', method: 'KO R1 (0:62)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Nocauteado em 62 segundos no Bellator 293. Chin questionavel.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Jiu-Jitsu e Submissoes', valueA: 90, valueB: 52, labelA: 'Excelente', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Hooper e faixa preta de BJJ desde os 21 anos (13 anos treinando). Quote: "O jiu-jitsu e o que me trouxe aqui. Por que eu estaria fazendo striking?" Abismo tecnico no chao.' },
        { label: 'Wrestling Ofensivo', valueA: 72, valueB: 52, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Hooper busca 3.80 TDs/15min pra ativar o jiu-jitsu. Quote: "Quando eu coloco esses caras no chao, e trafego de mao unica." Gibson Jr nunca enfrentou grappler desse nivel.' },
        { label: 'Striking em Pe', valueA: 42, valueB: 60, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Gibson Jr e mais confortavel em pe com KOs no regional. Hooper admite que striking nao e o jogo dele.' },
        { label: 'Tamanho e Frame', valueA: 78, valueB: 52, labelA: 'Muito Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Hooper mede 1,88m com 193cm de reach. Mudou pra 155 permanentemente: "Lutar no 155 ajudou muito. Consigo ter mais musculo no frame." Gibson Jr tem 1,80m com 183cm.' },
        { label: 'Experiencia UFC', valueA: 75, valueB: 25, labelA: 'Muito Bom', labelB: 'Ruim', advantage: 'fighter1', advantage_note: 'Hooper tem 10+ lutas no UFC. Gibson Jr tem 1 (derrota por split). A diferenca de octogono time e gigantesca.' },
        { label: 'Cardio de Grappling', valueA: 72, valueB: 50, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Hooper treina com Cory Sandhagen na Elevation Fight Team. Cardio de grappling testado por rounds inteiros. Gibson Jr nunca foi testado no chao por tempo prolongado.' },
      ],
      insight: 'Hooper e o finalizador mais puro dessa prelim. Faixa preta de BJJ desde os 21 anos com 13 anos de treino, e ele proprio admite que o chao e a arma: "O jiu-jitsu e o que me trouxe aqui. Por que eu estaria fazendo striking?" e "Quando eu coloco esses caras no chao, e trafego de mao unica." Mudou permanentemente pra 155 lbs e esta mais forte fisicamente: "Lutar no 155 ajudou muito. Consigo ter mais musculo no frame." Gibson Jr e talentoso (8-1 pre-UFC, duo pai-filho com Lance Sr) mas perdeu o debut contra Bobby Green por ser passivo demais, e foi nocauteado por Tokov em 62 segundos no Bellator. Nunca enfrentou grappler do calibre de Hooper. O fator emocional e enorme: Hooper e de Enumclaw, Washington, e nao luta em casa desde abril de 2018. A torcida local vai ser um impulso real.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Hooper', ko_tko: { count: 1, percent: 7 }, submission: { count: 10, percent: 71 }, decision: { count: 3, percent: 22 }, total_wins: 14 },
      fighter2: { nome: 'Gibson Jr', ko_tko: { count: 3, percent: 38 }, submission: { count: 3, percent: 38 }, decision: { count: 2, percent: 24 }, total_wins: 8 },
      insight: 'Hooper e finalizador puro: 71% das vitorias por submissao (10 finalizacoes em 14 vitorias). Apenas 1 KO na carreira inteira. Gibson Jr e mais equilibrado com 38% KO e 38% sub, mas contra ninguem do calibre de Hooper no chao. Se Hooper levar ao chao (e ele vai tentar 3.80x por round), a finalizacao e questao de tempo.',
    },
    previsao_final: {
      winner_name: 'Chase Hooper',
      winner_side: 'fighter1',
      predicted_method: 'Submissao R1-R2',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation: 'Hooper e finalizador de elite com 71% de vitorias por submissao. Faixa preta de BJJ aos 21 anos com 13 anos de treinamento, treina diariamente com Cory Sandhagen na Elevation Fight Team. O proprio Hooper define seu estilo sem ambiguidade: "O jiu-jitsu e o que me trouxe aqui. Por que eu estaria fazendo striking?" e "Quando eu coloco esses caras no chao, e trafego de mao unica." A mudanca permanente pra 155 lbs fez diferenca fisica: "Lutar no 155 ajudou muito. Consigo ter mais musculo no frame." Gibson Jr tem potencial real (8-1, duo pai-filho com Lance Sr) mas perdeu o debut UFC contra Bobby Green por ser passivo demais, e nunca enfrentou grappler do calibre de Hooper. O chin de Gibson Jr tambem e questionavel (nocauteado por Tokov em 62 segundos no Bellator 293). Hooper tem vantagem de tamanho (8cm de altura, 10cm de reach) que facilita entradas de takedown e controle no chao. Somando tudo, Hooper esta lutando em casa pela primeira vez desde 2018 (Enumclaw, Washington fica a menos de 1 hora de Seattle). A torcida local e real. A confianca e MEDIA-ALTA porque o striking defensivo de Hooper e vulneravel (ja foi parado cedo antes), mas se tocar em Gibson Jr no grappling, o diferencial tecnico e esmagador.',
      x_factor: {
        title: 'Hooper lutando em casa pela primeira vez em 8 anos',
        description: 'Hooper e de Enumclaw, Washington, a menos de 1 hora de Seattle. Nao luta em casa desde abril de 2018. A energia da torcida local pode ser um impulso emocional enorme pra um garoto de 25 anos que cresceu nessa regiao. Fator intangivel que nao aparece em nenhuma estatistica mas pesa demais.',
      },
      upset_alert: {
        title: 'Gibson Jr pode ter corrigido a passividade',
        description: 'Gibson Jr foi criticado por passividade contra Green. Com camp completo e licoes aprendidas, pode vir agressivo no striking e surpreender Hooper antes do takedown. O chin de Hooper ja foi testado (parado por Mitchell e outros). Se Gibson Jr vier com volume e agressividade nos primeiros 90 segundos, tem chance.',
      },
      probabilities: {
        fighter1: { nome: 'Hooper', percent: 68 },
        fighter2: { nome: 'Gibson Jr', percent: 30 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Hooper (-300)', reasoning: 'Favorito pesado justificado pelo jiu-jitsu elite e vantagem de tamanho. Mas -300 nao oferece valor como aposta isolada. So em parlay.' },
        method: { pick: 'Hooper por Submissao (-110 a +100)', reasoning: '71% das vitorias de Hooper sao por sub. O PROPRIO Hooper diz que o chao e o caminho. Gibson Jr nunca enfrentou grappler desse nivel. A melhor aposta dessa luta, de longe.' },
        over_under: { pick: 'Under 2.5 Rounds', rounds: 2.5, reasoning: 'Hooper finalizou Ofli no R1, Guida no R2, Leavitt no R1. Quando consegue o TD, fecha rapido. Gibson Jr nao tem experiencia pra sobreviver rounds inteiros no chao contra faixa preta.' },
        best_value: 'Hooper por Submissao nas faixas de -110 a +100 e a aposta mais afiada. O cara tem 71% de sub rate, admite que so quer lutar no chao, e enfrenta alguem que nunca foi testado por grappler de elite. Under 2.5 rounds e o complemento natural.',
      },
    },
  },
};

export default function Page() {
  return <PrelimsAnalysisView analise={analise} />;
}
