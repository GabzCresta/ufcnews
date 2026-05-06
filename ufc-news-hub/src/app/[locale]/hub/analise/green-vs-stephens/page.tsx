import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'green-vs-stephens',
  evento_id: null,
  slug: 'green-vs-stephens',
  titulo: 'Green vs Stephens: Os Veteranos Voltam (Mas Um em Trajetória Oposta)',
  subtitulo:
    'Green vem de TKO R2 sobre Zellhuber em fev/2026 (3/3 takedowns landed) e SD sobre Gibson Jr (curto aviso). Stephens perdeu UD 30-27 x3 wrestling-controlado pra Mason Jones na volta UFC em mai/2025, depois TKO R5 em BKFC vs Mike Perry com 6 knockdowns em out/2025, no MESMO Prudential Center que abriga UFC 328. Último KO UFC do Stephens foi 2018. Empata com Clay Guida em mais derrotas UFC history (19).',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,78m', envergadura: '180cm', idade: 39, academia: 'Pinnacle MMA, Fontana CA' },
      fighter2: { altura: '1,75m', envergadura: '180cm', idade: 39, academia: 'Alliance MMA, San Diego' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisão',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Bobby Green',
    apelido: 'King',
    record: '34-17-1',
    ranking: 'N/R Peso Leve',
    ultimasLutas: [
      { result: 'W', opponent: 'Daniel Zellhuber', method: 'TKO R2', event: 'UFC Fight Night: Moreno vs Kavanagh' },
      { result: 'W', opponent: 'Lance Gibson Jr', method: 'Decisão Dividida', event: 'UFC on ESPN 73' },
      { result: 'L', opponent: 'Mauricio Ruffy', method: 'KO R1 (chute giratório)', event: 'UFC 313' },
    ],
  },
  fighter2_info: {
    nome: 'Jeremy Stephens',
    apelido: 'Lil Heathen',
    record: '29-22-1',
    ranking: 'N/R Peso Leve',
    ultimasLutas: [
      { result: 'L', opponent: 'Mason Jones', method: 'Decisão Unânime', event: 'UFC Fight Night: Burns vs Morales' },
      { result: 'L', opponent: 'Mateusz Gamrot', method: 'Sub R3 (kimura)', event: 'UFC on ESPN 27' },
      { result: 'L', opponent: 'Calvin Kattar', method: 'TKO R2', event: 'UFC on ESPN 9' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
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
      evento_nome: 'UFC 328: Chimaev vs Strickland',
      evento_data: '9 de Maio, 2026',
      evento_local: 'Prudential Center, Newark, New Jersey',
      categoria_peso: 'Peso Leve (155 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Os Veteranos Voltam',
      tagline_sub: 'Green vem de 2-0 (TKO Zellhuber + SD Gibson). Stephens perdeu Mason Jones UFC mai/2025 + 6 knockdowns BKFC vs Perry out/2025 no MESMO Prudential. Último KO UFC do iowano foi 2018.',
      fighter1: {
        nome_completo: 'Bobby "King" Green',
        apelido: 'King',
        sobrenome: 'Green',
        record: '34-17-1',
        ranking: 'N/R Peso Leve',
        info_extra: 'Fontana, Califórnia | 39 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/GREEN_KING_L_12-13.png?itok=HVqFKE1S',
      },
      fighter2: {
        nome_completo: 'Jeremy "Lil Heathen" Stephens',
        apelido: 'Lil Heathen',
        sobrenome: 'Stephens',
        record: '29-22-1',
        ranking: 'N/R Peso Leve',
        info_extra: 'Iowa | 39 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-05/STEPHENS_JEREMY_L_05-03.png?itok=kjaAy7yE',
      },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Stephens Tem o KO Power. Mas Foi Quedado e Caiu 6 Vezes na Última Luta no Mesmo Prédio.',
      insight:
        'O preguiçoso lê "veteranos de 39 anos, luta de troca, KO power do Stephens dá puncher\'s chance". O honesto lê o histórico imediato. Green vem de 2-0 nas últimas: TKO R2 contra Daniel Zellhuber em fevereiro/2026 onde landed 3/3 takedowns e fechou com cruzado-direita-hook + GnP, e SD sobre Lance Gibson Jr em dezembro/2025 (luta apertada com prospect canadense de curto aviso). Aos 39 anos ainda mantém boxe defensivo, footwork técnico, recordista de sig strikes na história do peso leve do UFC (1.950). E aos R3 vs Jim Miller no UFC 300 (abr/2024) sua precisão de strikes foi crescendo (51% → 53% → 67%), ele cardia melhor pra rounds tardios. Stephens, do outro lado, voltou ao UFC em maio/2025 contra Mason Jones e foi UD 30-27 x3, wrestling-controlado por 8 anos mais novo (Jones 2 takedowns no R1 + back take final + sweep R2 + multiple TDs no R3 com mount). "No KO power demonstrated", segundo recap do Cageside Press. Depois disso, 4 meses antes do UFC 328, lutou bare-knuckle contra Mike Perry no BKFC 82 (4/out/2025) NO MESMO PRUDENTIAL CENTER QUE ABRIGA O UFC 328. Resultado: TKO R5 1:35, 6 knockdowns sofridos (1 R3, 2 R4, 3 R5), 130 socos absorvidos. O último KO UFC do Stephens foi fevereiro/2018 (Emmett), há 8 anos. O "KO power existe quando o timing acerta" (Eddie Alvarez na BKFC jan/2025 cai 2x), mas o timing tá indo embora junto com o chin. Green é striker técnico cadenciado com boxe + leitura, e Stephens HISTORICAMENTE perde pra esse perfil (Yair, Zabit, Kattar, Renato Moicano, Cub Swanson, Charles Oliveira FW).',
      tension: {
        truth_a: 'Stephens tem 19 KOs em 29 vitórias (66% career finish rate), 6 Fight of the Night, KO\'d Eddie Alvarez em BKFC jan/2025 com counter rights. Se conecta um overhand-direita clean cedo, KO está em jogo. Power não desapareceu, KO\'d Alvarez 9 meses atrás.',
        truth_b: 'O último KO UFC do Stephens foi fev/2018 vs Emmett (8 anos). Mason Jones venceu UD 30-27 x3 wrestling-controlado em mai/2025 ("no KO power demonstrated"). Mike Perry conectou 6 knockdowns em out/2025 NO MESMO PRUDENTIAL CENTER. Green vem 2-0, recordista UFC LW em sig strikes, e Stephens historicamente perde pra striker técnico cadenciado.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Bobby Green',
        color: 'red',
        momentum_score: 7,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: '2-0 nas últimas: TKO R2 4:55 vs Zellhuber em fev/2026 (3/3 takedowns landed, 86-17 strikes diferencial, fechou com cruzado-direita + left hook + GnP), e SD sobre Lance Gibson Jr em dez/2025 (prospect canadense curto aviso). Recuperou de 2 derrotas R1 dolorosas: KO spinning WHEEL kick (não giratório) do Mauricio Ruffy mar/2025, e tech-sub triangle do Paddy Pimblett jul/2024 (não mata-leão). Aos 39 anos recordista de sig strikes UFC peso leve (1.950). Pré-Miller fight UFC 300 fez landing accuracy crescendo (R1 51%, R2 53%, R3 67%), cardio melhora pra rounds tardios. Treina Pinnacle MMA Redlands CA com Jacob Behney.',
        recent_fights: [
          { date: 'Fev 2026', opponent: 'Daniel Zellhuber', result: 'W', method: 'TKO R2 (cruzado + GnP, 4:55)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: '3/3 takedowns landed, 86-17 strikes. Fechou com cruzado-direita + left hook.' },
          { date: 'Dez 2025', opponent: 'Lance Gibson Jr', result: 'W', method: 'Decisão Dividida', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'SD apertada contra prospect canadense de curto aviso.' },
          { date: 'Mar 2025', opponent: 'Mauricio Ruffy', result: 'L', method: 'KO R1 (spinning wheel kick, 2:07)', opponent_rank: 'Top 15 Peso Leve', quality_score: 3, quality_label: 'Bom', note: 'WHEEL kick (não back kick). Ruffy faked left hand e SPUN INTO wheel kick pegando Green no temple.' },
          { date: 'Jul 2024', opponent: 'Paddy Pimblett', result: 'L', method: 'Tech-sub R1 (TRIANGLE, 3:22)', opponent_rank: 'Top 15 Peso Leve', quality_score: 3, quality_label: 'Bom', note: 'TRIANGLE choke (não mata-leão). Green caiu shooting takedown direto em guillotine, Pimblett transitionou pra triangle.' },
          { date: 'Abr 2024', opponent: 'Jim Miller', result: 'W', method: 'Decisão Unânime (30-27, 30-25, 29-26)', opponent_rank: 'Top 15 Peso Leve', quality_score: 3, quality_label: 'Bom', note: 'Cards decisivos. R3 Green landou 67% accuracy. Cardio crescendo aos 39.' },
        ],
      },
      fighter2: {
        nome: 'Jeremy Stephens',
        color: 'blue',
        momentum_score: 2,
        momentum_label: 'Em Queda',
        momentum_trend: 'descending',
        momentum_note: 'UFC record 15-19 + 1 NC, EMPATADO com Clay Guida em mais derrotas UFC history. Voltou ao UFC mai/2025 após PFL (1-2 em 2022) e BKFC (3-1, 2 KOs). Estreia de retorno: UD 30-27 x3 perdida pra Mason Jones (Des Moines, hometown), wrestling-controlado por 8 anos mais novo. Em out/2025, lutou bare-knuckle vs Mike Perry no BKFC 82 (4/out/2025) NO MESMO PRUDENTIAL CENTER que abriga UFC 328: TKO R5 1:35, 6 knockdowns sofridos (1 R3, 2 R4, 3 R5), 130 socos absorvidos. Em jan/2025 KO\'d Eddie Alvarez na BKFC com counter rights, KO power existe quando timing acerta. Último KO UFC foi fev/2018 (Emmett, 8 anos atrás). Treina Alliance MMA Chula Vista (Eric Del Fierro, coach do Dom Cruz).',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Mike Perry (BKFC)', result: 'L', method: 'TKO R5 (1:35, 6 knockdowns)', opponent_rank: 'BKFC King of Violence', quality_score: 4, quality_label: 'Muito Bom', note: '6 knockdowns absorvidos (1 R3, 2 R4, 3 R5). 130 socos. NO MESMO PRUDENTIAL CENTER que abriga UFC 328. 7 meses antes.' },
          { date: 'Mai 2025', opponent: 'Mason Jones', result: 'L', method: 'Decisão Unânime (30-27 x3)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Estreia de retorno UFC após 3 anos. Wrestling-controlado: 2 TDs R1 + back take final, sweep R2, multiple TDs R3 com mount. "No KO power demonstrated."' },
          { date: 'Jan 2025', opponent: 'Eddie Alvarez (BKFC)', result: 'W', method: 'TKO R3 (corner stoppage)', opponent_rank: 'Ex-Campeão UFC LW', quality_score: 4, quality_label: 'Muito Bom', note: 'KnuckleMania 5 Philly. 2 knockdowns em R3 com counter rights. Power existe.' },
          { date: 'Jul 2021', opponent: 'Mateusz Gamrot', result: 'L', method: 'Sub R1 (kimura, 1:05)', opponent_rank: 'Top 15 Peso Leve', quality_score: 3, quality_label: 'Bom', note: 'KIMURA mais rápida da história UFC. R1 1:05, NÃO R3 como muito reportado.' },
          { date: 'Mai 2020', opponent: 'Calvin Kattar', result: 'L', method: 'TKO R2 (cotoveladas)', opponent_rank: 'Top 10 Peso Pena', quality_score: 4, quality_label: 'Muito Bom', note: 'CATCHWEIGHT (Stephens missou peso 5 lbs). Cotovelada testa.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Green', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '3V-2D (últimas 5)', contra_top5: '0V-1D' },
      fighter2: { nome: 'Stephens', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '1V-4D (últimas 5 combat sports)', contra_top5: '0V-2D UFC' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Calibre empate em 3 (Bom), mas a diferença de momentum é abissal. Green 3V-2D nas últimas 5 com 2 vitórias seguidas (TKO Zellhuber + SD Gibson). Stephens 1V-4D nas últimas 5 combat sports: vs Mason Jones (UFC mai/2025 UD perdida), vs Mike Perry (BKFC out/2025 TKO R5 6 knockdowns), vs Eddie Alvarez (BKFC jan/2025 TKO W), vs Bobby Taylor (BKFC set/2024 W), vs Natan Schulte (PFL nov/2022 sub L). Os 39 anos pesam diferente em cada um, Green em pico recente, Stephens em queda física aguda.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.3, valueB: 3.8, maxVal: 7, format: 'decimal', note: 'Green volume superior, recordista LW UFC.' },
        { label: 'Precisão de Strikes (%)', valueA: 50, valueB: 42, maxVal: 100, format: 'percent', note: 'Green mais preciso pelo boxe técnico.' },
        { label: 'Strikes Absorvidos/Min', valueA: 4.5, valueB: 3.5, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Stephens absorve menos por estilo defensivo, Green aceita troca.' },
        { label: 'Defesa de Strikes (%)', valueA: 56, valueB: 60, maxVal: 100, format: 'percent', note: 'Stephens leve vantagem.' },
        { label: 'Takedowns por 15 Min', valueA: 0.8, valueB: 0.5, maxVal: 5, format: 'decimal', note: 'Ambos strikers, pouco wrestling.' },
        { label: 'Defesa de Takedown (%)', valueA: 65, valueB: 53, maxVal: 100, format: 'percent', note: 'Green melhor TDD pelos rounds 4-5 históricos.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '39 anos', fighter2: '39 anos', note: 'Mesma idade exatamente.' },
        { label: 'Altura', fighter1: '1,78m', fighter2: '1,75m', note: 'Green 3 cm mais alto.' },
        { label: 'Envergadura', fighter1: '180 cm', fighter2: '180 cm', note: 'Empate exato em envergadura.' },
        { label: 'Stance', fighter1: 'Destro', fighter2: 'Destro', note: 'Mesmo stance.' },
        { label: 'Academia', fighter1: 'Pinnacle MMA', fighter2: 'Alliance MMA', note: 'Camp californiano vs camp californiano.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume de Strikes', advantage: 'fighter1', gap: 4, note: 'Green 6.07 SLpM (UFCStats) vs Stephens 3.17. ~2x volume. Green recordista UFC LW (1.950).' },
        { label: 'Boxe Técnico', advantage: 'fighter1', gap: 3, note: 'Green footwork + cabeçada defensiva. Stephens overhand-puncher tradicional.' },
        { label: 'Poder de Nocaute', advantage: 'fighter2', gap: 2, note: 'Stephens 19 KOs MMA total (UFC tem só 8 KOs em 15 wins). Green 12 KOs em 34. Power existe mas timing decaiu.' },
        { label: 'Cardio / 3 Rounds', advantage: 'fighter1', gap: 4, note: 'Green R3 vs Miller landou 67% accuracy crescendo. Stephens gassou contra Perry R5, Mason Jones R3.' },
        { label: 'Momentum', advantage: 'fighter1', gap: 5, note: 'Green 2-0 últimas. Stephens 1V-4D nas últimas 5 combat sports incluindo 6 knockdowns no MESMO Prudential Center 7 meses atrás.' },
        { label: 'Chin / Durabilidade', advantage: 'fighter1', gap: 1, note: 'Green 6 stoppages sofridas (Poirier, Makhachev, Dober, Turner, Pimblett-tech, Ruffy). Stephens 6 knockdowns acumulados na BKFC out/2025. Chin question dos dois lados.' },
      ],
      summary: 'Green domina onde o ritmo importa (volume 2x, técnica, cardio crescendo R3, momentum 5/5). Stephens só tem KO power, e timing ofensivo decaiu (último KO UFC 2018, gassou contra Perry e Jones). Pra Stephens vencer, precisa encaixar overhand cedo R1. Se luta vai R2-R3, Green cadencia e vence cards.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Green', ko_tko: { count: 12, percent: 35 }, submission: { count: 9, percent: 26 }, decision: { count: 13, percent: 38 }, total_wins: 34 },
      fighter2: { nome: 'Stephens', ko_tko: { count: 19, percent: 66 }, submission: { count: 2, percent: 7 }, decision: { count: 8, percent: 28 }, total_wins: 29 },
      insight: 'Green distribui as vitórias entre KO (35%), sub (26%) e dec (38%), perfil completo de striker técnico que pode finalizar. Stephens 66% das vitórias por KO/TKO, striker overhand explosivo mas one-dimensional. Quando Stephens não encaixa o KO, ele perde (vide as 14 derrotas por decisão na carreira).',
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Green', ko_tko: { count: 6, percent: 35 }, submission: { count: 1, percent: 6 }, decision: { count: 10, percent: 59 }, total_losses: 17 },
      fighter2: { nome: 'Stephens', ko_tko: { count: 3, percent: 14 }, submission: { count: 4, percent: 19 }, decision: { count: 14, percent: 67 }, total_losses: 21 },
      insight: 'Green tem 17 derrotas em 52 lutas: 6 por KO/TKO (Poirier UFC 199 R1, Dober UFC Vegas 66 highlight, Turner 2023, Makhachev ground-and-pound) e 1 sub recente (Pimblett UFC 304 R1) — a única finalização da carreira inteira aos 38 anos. Stephens 21 derrotas catalogadas (record oficial 22 com 1 caso antigo sem método verificado), 67% por decisão (14): perfil clássico de KO-or-bust, quando não acerta o overhand vai pros cards e perde. Ambos veteranos castigados, mas Green tem 1 sub vs Stephens 4 subs (incluindo Lauzon armbar, Gamrot kimura, Schulte arm triangle, Din Thomas armbar). Para value bet: ambos vão pros cards no perfil base. Stephens por KO precoce é o ângulo dele.',
    },

    previsao_final: {
      winner_name: 'Bobby Green',
      winner_side: 'fighter1',
      predicted_method: 'Decisão',
      confidence_score: 8,
      confidence_label: 'ALTA',
      explanation:
        'A pick é Bobby Green por decisão. Olhando luta por luta, a vantagem aparece em seis dimensões: stats (Green 6.07 SLpM ~2x Stephens 3.17, recordista UFC LW em sig strikes com 1.950), nível de competição (ambos calibre 3 mas Green 3V-2D nas últimas 5 vs Stephens 1V-4D nas últimas 5 combat sports), estilo (boxe técnico cadenciado vs overhand-puncher tradicional, Stephens HISTORICAMENTE perde pra esse perfil: Yair, Zabit, Kattar, Moicano, Cub, Oliveira), momento (Green 2-0 últimas vs Stephens 6 knockdowns absorvidos no MESMO Prudential Center 7 meses atrás), inteligência qualitativa (último KO UFC do Stephens foi fev/2018, 8 anos atrás, e Mason Jones recap escreveu "no KO power demonstrated") e cardio (R3 vs Miller Green landou 67% accuracy crescendo, Stephens gassou no R3 vs Jones e R5 vs Perry). Stephens tem caminho real (22%): KO power existe (KO\'d Eddie Alvarez na BKFC jan/2025 com 2 knockdowns), se encaixar overhand-direita nos primeiros 90 segundos R1 ainda pode finalizar. Mas Green cadenciou 3R contra Jim Miller (UFC 300 UD 30-27, 30-25, 29-26), wrestlou Zellhuber (3/3 takedowns), e tem cardio que cresce R2-R3. Convicção 8 porque seis dimensões convergem com PRECEDENTE DIRETO: o BKFC 82 vs Perry foi 4 meses antes, MESMO PRÉDIO, 6 knockdowns sofridos.',
      x_factor: {
        title: 'O R1 Ou Vai Pra Decisão',
        description: 'Se Stephens encaixa overhand-direita pesada nos primeiros 90s R1, Green vacila e KO vem (Green tem 6 stoppages sofridas carreira, 4 dos últimos 5 KO losses são R1). Se Green sobrevive primeiros 5 minutos com cabeçada defensiva + footwork, luta entra terreno dele e cadencia. Mas Stephens precisa fazer isso aos 39 com chin recém-quebrado por Mike Perry (6 knockdowns, R5 1:35, 4 meses atrás).',
      },
      upset_alert: {
        title: 'Stephens Encaixa Overhand Cedo',
        description: 'Stephens tem 19 KOs MMA carreira (66%), 6 Fight of the Night, KO\'d Eddie Alvarez na BKFC jan/2025 com counter rights (2 knockdowns R3). Power existe quando timing acerta. Se encaixa overhand-direita nos primeiros 90s R1 vs chin recém-quebrado do Green (Ruffy mar/2025 wheel kick R1, Pimblett triangle R1), KO está em jogo. Probabilidade 22%, baixa porque último KO UFC foi 2018 e timing claramente decaiu (vs Mason Jones "no KO power demonstrated").',
      },
      probabilities: { fighter1: { nome: 'Green', percent: 75 }, fighter2: { nome: 'Stephens', percent: 22 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Bobby Green vence porque, primeiro, tem 1.950 sig strikes na carreira UFC peso leve (RECORDISTA da divisão), 6.07 SLpM (~2x Stephens 3.17), boxe técnico cadenciado e cardio que CRESCE no R3 (vs Jim Miller UFC 300 R1 51% → R2 53% → R3 67% accuracy). Segundo, Stephens HISTORICAMENTE perde pra striker técnico cadenciado: Yair UD, Zabit UD, Kattar TKO, Moicano L, Cub L, Oliveira L. Green é exatamente esse perfil. Terceiro, o BKFC 82 contra Mike Perry foi 4 MESES antes da luta, NO MESMO PRUDENTIAL CENTER que abriga UFC 328: 6 knockdowns sofridos (1 R3, 2 R4, 3 R5), TKO R5 1:35. E o último KO UFC do Stephens foi fev/2018 (8 anos), enquanto Mason Jones venceu UD wrestling-controlado em mai/2025 com "no KO power demonstrated" no recap. Caminho da vitória: Green cadencia R1 com jab + cabeçada defensiva, evita overhand-direita do Stephens, acumula volume R2-R3 com cardio crescendo, ganha cards 30-27. Desmorona se Stephens encaixar overhand pesado nos primeiros 90s R1 contra chin recém-quebrado do Green.',
        conviction_score: 8,
        conviction_rationale: 'Convicção 8 porque seis dimensões convergem (stats 2x volume, calibre, estilo, momento abismal, qualitative, cardio), e o precedente Perry no MESMO PRÉDIO 4 meses antes é evidência direta de que o chin do Stephens tá quebrado. Não é 9 porque ambos têm chin question (Green 6 stoppages sofridas, Stephens 6 knockdowns recentes), variance em veteranos é alta, e KO power do Stephens existiu em jan/2025 (Alvarez). Não é 7 porque a evidência empilha contra o iowano de forma quase mecânica: 5 dimensões com gap >3, e 1 com gap leve a favor do Stephens (KO power latente).',
        conviction_breakers: [
          'Stephens encaixa overhand-direita clean nos primeiros 90s R1',
          'Green mostra ferrugem aos 39 ou ainda quebrado pós-Ruffy KO',
          'Stephens recupera timing perdido em 8 anos sem KO UFC',
          'Green absorve dano cumulativo R1-R2 e perde volume tarde',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 22,
          key_scenario: 'Stephens encaixa overhand-direita pesado nos primeiros 60-90s R1 (similar Eddie Alvarez R3 BKFC). Green vacila com chin recém-exposto (Ruffy R1, Pimblett R1, Turner R1, 4 dos últimos 5 KO losses são R1). Stephens persegue com counter rights e termina KO R1 ou R2.',
          required_conditions: [
            'Encaixar overhand-direita clean nos primeiros 90s R1',
            'Recuperar timing UFC perdido em 8 anos sem KO UFC',
            'KO power presente como em jan/2025 vs Alvarez, não como vs Mason Jones (no KO demonstrated)',
            'Green chin frágil pós-Ruffy + Pimblett + Turner R1',
          ],
          historical_precedent: 'Stephens KO\'d Eddie Alvarez (ex-campeão UFC LW) em BKFC jan/2025 com counter rights, 2 knockdowns R3. Power existe quando timing acerta. Mas vs Mason Jones (mai/2025) e Mike Perry (out/2025) o timing falhou: zero knockdowns, 6 absorvidos contra Perry. Lane do Stephens é estreito mas não-zero.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Bobby Green', odds: '-305 (BoxingNews abr 2026)', reasoning: 'Probabilidade real 75%, implícita -305 = 75.3%. Sem edge ML. Mercado alinhado com a tese.' },
          { type: 'Método', pick: 'Green por Decisão', odds: '+150 (estimado)', reasoning: 'Green 38% wins por decisão (carreira) + 67% accuracy R3 vs Miller mostra cardio crescendo. Stephens último KO UFC 2018, vs Mason Jones perdeu UD wrestling-controlado. Mais provável é UD 30-27 ou 29-28. Em +150 implícita 40%, edge real (estimado real 50-55%).' },
          { type: 'Total Rounds', pick: 'Passa de 2,5 rounds (Over)', odds: '-180 (estimado)', reasoning: 'Cenário base é decisão. Stephens sub stoppage requer overhand cedo, e timing tá indo embora. Green ainda tem chin question pós-Ruffy mas Stephens não é Ruffy.' },
        ],
        best_bet: { pick: 'Green por Decisão em +150', reasoning: 'Maior edge esperado da luta. Green cadência + cardio crescendo R3 vs Stephens último KO UFC 2018. Cenário de Green 30-27 dominante é mais provável que ML implica. ML Green a -305 é caro.' },
      },
      key_stats: [
        { value: '6 knockdowns', label: 'Stephens absorveu de Mike Perry no BKFC 82 (out/2025)', sublabel: 'TKO R5 1:35, MESMO PRUDENTIAL CENTER que abriga UFC 328. 4 meses antes.' },
        { value: '8 anos', label: 'Desde último KO UFC do Stephens (Emmett, fev/2018)', sublabel: 'Power existe (KO\'d Alvarez na BKFC jan/2025), mas timing UFC tá indo embora.' },
        { value: '1.950', label: 'Sig strikes do Green na carreira UFC peso leve', sublabel: 'Recordista da divisão all-time. 23 lutas UFC.' },
        { value: '67%', label: 'Accuracy do Green no R3 vs Jim Miller (UFC 300, abr/2024)', sublabel: 'R1 51% → R2 53% → R3 67%. Cardio crescendo aos 39.' },
        { value: '19', label: 'Derrotas UFC do Stephens (empata Clay Guida)', sublabel: 'Mais derrotas UFC history (junto com Guida que foi cortado em jan/2025).' },
      ],
      odds: {
        fighter1_odds: '-305',
        fighter2_odds: '+245',
        fighter1_name: 'Green',
        fighter2_name: 'Stephens',
        source: 'BoxingNews Green -305 / Stephens +245 em abril/2026. DraftKings -300 a -308. Polymarket alinhado. Mercado lê momentum diferencial (2-0 vs 1V-4D combat sports recentes) corretamente.',
      },
      armadilha: {
        titulo: 'Armadilha: Stephens por KO',
        descricao: 'O mercado vai oferecer "Stephens por KO" em odds atrativas (+400 ou melhor) baseado nos 19 KOs MMA + KO\'d Eddie Alvarez na BKFC jan/2025. Mas o último KO UFC do Stephens foi fev/2018 (8 anos), Mason Jones recap escreveu "no KO power demonstrated" em mai/2025, e Mike Perry conectou 6 knockdowns 4 meses antes. Aos 39 com timing UFC 8 anos rusty, esperar overhand clean contra striker técnico em alta é apostar contra a evidência. Se KO vier, vem R1 mas é cenário improvável.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'green-vs-stephens');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
