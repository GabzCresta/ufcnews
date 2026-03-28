import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';

const analise: PrelimsAnalise = {
  id: 'tybura-vs-fortune-pos-weighins',
  evento_id: null,
  slug: 'tybura-vs-fortune-pos-weighins',
  titulo: 'Tybura vs Fortune (Pos Weigh-Ins)',
  subtitulo: null,
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Pesado (265 lbs)',
  status: 'published',
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'TKO R1-R2',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Marcin Tybura', record: '27-10-0', ultimasLutas: [{ result: 'L', opponent: 'Serghei Spivac', method: 'KO R1', event: 'UFC Fight Night' }, { result: 'W', opponent: 'Tai Tuivasa', method: 'Decisao Unanime', event: 'UFC 293' }] },
  fighter2_info: { nome: 'Tyrell Fortune', record: '17-3-0', ultimasLutas: [{ result: 'W', opponent: 'Eduardo Neves', method: 'KO R2', event: 'UFC Fight Night' }] },
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,88m', envergadura: '198cm', idade: 39, academia: 'Polonia / MMA' }, fighter2: { altura: '1,88m', envergadura: '193cm', idade: 34, academia: 'Fortis MMA, Dallas' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
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
      categoria_peso: 'Peso Pesado (265 lbs)',
      num_rounds: 3,
      is_titulo: false,
      fighter1: { nome: 'Marcin Tybura', record: '27-10-0', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-03/TYBURA_MARCIN_L_03-28.png?itok=UmjJubdY' },
      fighter2: { nome: 'Tyrell Fortune', record: '17-3-0', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-03/FORTUNE_TYRELL_R_03-28.png?itok=yJwXsAme' },
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.10, valueB: 4.20, maxVal: 6, format: 'decimal', note: 'Fortune com volume consideravelmente maior. 11 KOs em 17 vitorias.' },
        { label: 'Precisao de Strikes (%)', valueA: 44, valueB: 48, maxVal: 100, format: 'percent', note: 'Fortune ligeiramente mais preciso' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.80, valueB: 3.50, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Tybura absorve mais. 60% das derrotas por KO/TKO. Chin comprometido.' },
        { label: 'Defesa de Strikes (%)', valueA: 48, valueB: 52, maxVal: 100, format: 'percent', note: 'Defesa similar mas Tybura cede mais golpes limpos' },
        { label: 'Takedowns por 15 Min', valueA: 2.80, valueB: 3.50, maxVal: 5, format: 'decimal', note: 'Fortune e NCAA D-II National Champion (37-1 season). Busca mais TDs.' },
        { label: 'Defesa de Takedown (%)', valueA: 62, valueB: 70, maxVal: 100, format: 'percent', note: 'Fortune defende melhor. Base de wrestling de nivel olimpico.' },
        { label: 'Precisao de Takedown (%)', valueA: 38, valueB: 52, maxVal: 100, format: 'percent', note: 'Fortune converte mais da metade dos TDs. Credenciais NCAA reais.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '39 anos', fighter2: '34 anos', note: '5 anos de diferenca. Fortune no auge. Tybura no fim.' },
        { label: 'Altura', fighter1: '1,88m', fighter2: '1,88m', note: 'Mesma altura' },
        { label: 'Envergadura', fighter1: '198cm', fighter2: '193cm', note: 'Tybura com 5cm mais de reach. Unica vantagem fisica.' },
        { label: 'Wrestling', fighter1: '2o mais controle na historia do UFC HW. 8 decisoes (2o mais).', fighter2: 'NCAA D-II National Champion (37-1, Most Outstanding Wrestler). 2x NJCAA. 6 titulos nacionais freestyle/greco. Ex-selecao americana.', note: 'Tybura grinda. Fortune e wrestler de NIVEL OLIMPICO.' },
        { label: 'Historia', fighter1: '60% das 10 derrotas por KO/TKO. Chin deteriorado.', fighter2: 'Foi DECLARADO MORTO durante weight cut no wrestling. Ressuscitado multiplas vezes.', note: 'Contextos intensos dos dois lados' },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Tybura',
        recent_fights: [
          { date: 'Ago 2025', opponent: 'Serghei Spivac', result: 'L', method: 'KO R1', opponent_rank: '#12 HW', quality_score: 3, quality_label: 'Bom', note: 'Nocauteado no R1. 60% das derrotas na carreira por KO/TKO. Padrao continua.' },
          { date: 'Set 2023', opponent: 'Tai Tuivasa', result: 'W', method: 'Decisao Unanime', opponent_rank: '#10 HW', quality_score: 3, quality_label: 'Bom', note: 'UFC 293. Controlou com wrestling por 3 rounds. Template de vitoria de Tybura.' },
          { date: 'Abr 2023', opponent: 'Blagoy Ivanov', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Mais uma vitoria por decisao via controle. Estilo consistente.' },
          { date: 'Jul 2022', opponent: 'Alexandr Romanov', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bom', note: 'Perdeu wrestling battle contra wrestler superior. RELEVANTE: quando enfrenta wrestler melhor, perde.' },
          { date: 'Mar 2022', opponent: 'Maxim Grishin', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: '8a vitoria por decisao (2o mais na historia do HW do UFC).' },
          { date: 'Out 2021', opponent: 'Alexander Volkov', result: 'L', method: 'TKO R2', opponent_rank: '#5 HW', quality_score: 4, quality_label: 'Muito Bom', note: 'Nocauteado por Volkov. Padrao: perde pra quem bate forte.' },
          { date: 'Jul 2021', opponent: 'Derrick Lewis', result: 'L', method: 'KO R2', opponent_rank: '#3 HW', quality_score: 4, quality_label: 'Muito Bom', note: 'Lewis explodiu com poder. Mais uma derrota por nocaute.' },
        ],
      },
      fighter2: {
        nome: 'Fortune',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Eduardo Neves', result: 'W', method: 'KO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Nocaute limpo na segunda luta UFC. Kickboxing complementa wrestling.' },
          { date: 'Mai 2025', opponent: 'Josh Parisian', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Debut UFC. TKO rapido. Dominou desde o inicio.' },
          { date: 'Mar 2025', opponent: 'Dante Schiro', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Contender Series. KO devastador que garantiu contrato UFC.' },
          { date: 'Out 2024', opponent: 'James Adkins', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Circuito regional. Mais um finish.' },
          { date: 'Jun 2024', opponent: 'Devin Smythe', result: 'W', method: 'KO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: '11 KOs em 17 vitorias (65%). Poder e a arma principal.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Wrestling de Elite', valueA: 70, valueB: 92, labelA: 'Bom', labelB: 'Excelente', advantage: 'fighter2', advantage_note: 'Fortune e NCAA D-II National Champion com season de 37-1 e Most Outstanding Wrestler. 2 titulos NJCAA. 6 titulos nacionais freestyle e greco-romana. Ex-selecao americana. Credenciais de nivel OLIMPICO.' },
        { label: 'Poder de KO', valueA: 55, valueB: 82, labelA: 'Bom', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: '11 KOs em 17 vitorias (65%) pra Fortune. Complementou o wrestling com kickboxing desenvolvido. Tybura tem 60% de derrotas por KO. Combinacao letal.' },
        { label: 'Durabilidade e Chin', valueA: 42, valueB: 68, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Tybura tem 6 de 10 derrotas por KO/TKO (60%). Chin deteriorado aos 39 anos (Spivac R1, Volkov R2, Lewis R2). Fortune nunca foi parado por strikes.' },
        { label: 'Controle e Grinding', valueA: 78, valueB: 68, labelA: 'Muito Bom', labelB: 'Bom', advantage: 'fighter1', advantage_note: 'Tybura e o 2o maior em tempo de controle na historia do UFC HW e tem 8 vitorias por decisao (2o mais). MAS isso funciona contra wrestlers inferiores. Contra Romanov (melhor wrestler), perdeu.' },
        { label: 'Kickboxing em Pe', valueA: 48, valueB: 65, labelA: 'Medio', labelB: 'Bom', advantage: 'fighter2', advantage_note: 'Fortune complementou wrestling com kickboxing. Tybura tem boxe limitado que nao mostra evolucao. Vulneravel a power shots.' },
        { label: 'Resiliencia Mental', valueA: 62, valueB: 88, labelA: 'Bom', labelB: 'Excelente', advantage: 'fighter2', advantage_note: 'Fortune foi DECLARADO MORTO durante weight cut no wrestling. Convulsoes, falencia de orgaos, ressuscitado multiplas vezes. Acordou com lencol sobre o corpo. Nada no octogono assusta esse cara.' },
      ],
      insight: 'A logica desse matchup e direta: a forca de Tybura sempre foi o wrestling e grinding (2o mais controle na historia do HW do UFC). Mas Fortune e o MELHOR WRESTLER que Tybura ja enfrentou. NCAA D-II National Champion com temporada de 37-1, Most Outstanding Wrestler, 2 titulos NJCAA, 6 titulos nacionais freestyle/greco, e ex-selecao americana. Quando Tybura enfrentou Romanov (wrestler de nivel similar), perdeu. Sem o wrestling, Tybura e forcado a lutar em pe, onde 60% das suas derrotas vieram por KO (Spivac, Volkov, Lewis, Gane, Sakai, Overeem). Fortune tem 11 KOs e desenvolveu kickboxing especificamente pra complementar o wrestling. A historia mais impressionante de Fortune vai alem do esporte: durante um weight cut no wrestling, sofreu convulsoes e falencia de orgaos. Foi declarado morto e ressuscitado. Acordou com lencol sobre o corpo. Essa resiliencia mental e impossivel de medir.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Tybura', ko_tko: { count: 6, percent: 22 }, submission: { count: 7, percent: 26 }, decision: { count: 14, percent: 52 }, total_wins: 27 },
      fighter2: { nome: 'Fortune', ko_tko: { count: 11, percent: 65 }, submission: { count: 2, percent: 12 }, decision: { count: 4, percent: 23 }, total_wins: 17 },
      insight: 'Tybura e grinder de decisao: 52% das vitorias nos pontos. Fortune e finalizador explosivo: 65% por KO/TKO, com 11 nocautes. O problema pra Tybura e que seu estilo de grinding depende de vantagem no wrestling, e Fortune tem credenciais de wrestling claramente superiores. Se nao pode grind, Tybura precisa trocar, e em pe 60% das derrotas vem por nocaute.',
    },
    previsao_final: {
      winner_name: 'Tyrell Fortune',
      winner_side: 'fighter2',
      predicted_method: 'TKO R1-R2',
      confidence_score: 6,
      confidence_label: 'MEDIA',
      explanation: 'A forca principal de Tybura (wrestling/grinding, 2o mais controle no HW do UFC) e neutralizada por alguem com credenciais de wrestling SUPERIORES. Fortune e NCAA D-II National Champion com season de 37-1 e eleito Most Outstanding Wrestler, mais 2 titulos NJCAA, 6 titulos nacionais freestyle e greco-romana, e ex-selecao americana. O precedente existe: quando Tybura enfrentou Alexandr Romanov (outro wrestler elite), perdeu por decisao unanime. Sem o wrestling como ferramenta, Tybura fica forcado a trocar, e 60% das suas 10 derrotas vieram por KO/TKO: Spivac KO R1, Volkov TKO R2, Lewis KO R2, Gane TKO R3, Sakai TKO R1, Overeem KO R2. Fortune tem 11 KOs em 17 vitorias (65%) e desenvolveu kickboxing pra complementar o wrestling. Aos 39 anos, o chin de Tybura nao mostra sinais de recuperacao. O fator Fortune mais impressionante vai alem do esporte: foi declarado morto durante weight cut no wrestling, sofreu convulsoes e falencia de orgaos, foi ressuscitado multiplas vezes. Essa resiliencia mental e incomparavel. A confianca e so MEDIA porque Fortune ainda nao enfrentou ninguem de alto nivel no UFC (Parisian e Neves nao sao testes reais) e pode ser surpreendido pela experiencia de octogono de Tybura em luta longa.',
      x_factor: {
        title: 'Fortune voltou da morte literal',
        description: 'Durante um weight cut no wrestling, Fortune sofreu convulsoes e falencia de orgaos. Foi declarado morto e ressuscitado multiplas vezes. Acordou com um lencol sobre o corpo na maca. Depois de voltar da morte, nenhuma adversidade dentro do octogono vai abalar esse homem. Resiliencia mental incomparavel.',
      },
      upset_alert: {
        title: 'Tybura e veterano de 20+ lutas no UFC HW',
        description: 'Tybura ja enfrentou Gane, Aspinall, Volkov, Lewis, Overeem, Tuivasa. 2o mais tempo de controle na historia da divisao. Se conseguir engajar no clinch (nao wrestling puro) e usar dirty boxing, a experiencia pode prevalecer. Fortune ainda nao provou nada contra veteranos do calibre de Tybura. Se a luta passar do R2, a experiencia de Tybura entra em jogo.',
      },
      probabilities: {
        fighter1: { nome: 'Tybura', percent: 38 },
        fighter2: { nome: 'Fortune', percent: 60 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Fortune (-130)', reasoning: 'Fortune favorito leve e justificado. Wrestling superior (NCAA champion), poder de KO (11/17), contra alguem com chin comprometido. As odds podem estar subestimando o gap de wrestling.' },
        method: { pick: 'Fortune por KO/TKO (+140 a +143)', reasoning: '60% das derrotas de Tybura sao por KO. Fortune tem 11 nocautes. Chin deteriorado vs poder explosivo. A prop de method e onde esta o VALOR REAL.' },
        over_under: { pick: 'Under 2.5 Rounds', rounds: 2.5, reasoning: 'Tybura foi nocauteado no R1 por Spivac recentemente. Fortune nao deixa lutas irem longe (11 KOs). Se Fortune conectar poder cedo contra um chin questionavel, nao vai ao R3.' },
        best_value: 'Fortune por TKO/KO a +140 a +143 e a value pick dessa luta. O chin de Tybura e a fraqueza mais documentada do peso pesado (6 de 10 losses por KO) e Fortune tem poder de sobra com 11 nocautes. Se voce acha que Fortune ganha (e deveria), apostar no finish contra um chin duvidoso e onde o dinheiro inteligente vai.',
      },
    },
  },
};

export default function Page() {
  return <PrelimsAnalysisView analise={analise} />;
}
