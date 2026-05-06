import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'alvarez-vs-amosov',
  evento_id: null,
  slug: 'alvarez-vs-amosov',
  titulo: 'Alvarez vs Amosov: O Blueprint do Tsarukyan',
  subtitulo:
    'Em fevereiro de 2022, Arman Tsarukyan acabou com Alvarez em TKO R2 de cima, ground and pound, "couldn\'t threaten with submissions". Foi o único wrestler de elite que o espanhol enfrentou na carreira. Amosov é versão mais dura: 4x sambo world champion, ex-campeão Bellator 29-1, anaconda na estreia UFC sobre Magny em 3:14, nunca finalizado em 30 lutas. O mercado abriu Alvarez -400 e moveu pra Amosov -175.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,91m', envergadura: '196cm', idade: 33, academia: 'Bandog Fight Club, Gijón' },
      fighter2: { altura: '1,83m', envergadura: '190cm', idade: 32, academia: 'American Top Team' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Sub tardia (anaconda) ou Decisão',
    confidence: 'ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Joel Alvarez',
    apelido: 'El Fenómeno',
    record: '23-3-0',
    ranking: 'N/R Peso Meio-Médio',
    ultimasLutas: [
      { result: 'W', opponent: 'Vicente Luque', method: 'Decisão Unânime (30-26 x3)', event: 'UFC Fight Night Rio' },
      { result: 'W', opponent: 'Drakkar Klose', method: 'KO R1 (joelhada voadora, 2:48)', event: 'UFC Tampa' },
      { result: 'W', opponent: 'Elves Brener', method: 'TKO R3 (joelhadas + socos no chão)', event: 'UFC Abu Dhabi' },
    ],
  },
  fighter2_info: {
    nome: 'Yaroslav Amosov',
    apelido: 'Dynamo',
    record: '29-1-0',
    ranking: 'N/R Peso Meio-Médio',
    ultimasLutas: [
      { result: 'W', opponent: 'Neil Magny', method: 'Sub R1 (anaconda, 3:14)', event: 'UFC on ESPN 73' },
      { result: 'L', opponent: 'Jason Jackson', method: 'TKO R3 (combo soco-direita, 2:08)', event: 'Bellator 301' },
      { result: 'W', opponent: 'Logan Storley', method: 'Decisão Unânime (50-45 x3)', event: 'Bellator 291 (unificação)' },
    ],
  },
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  categoria_peso: 'Peso Meio-Médio (170 lbs)',
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
      categoria_peso: 'Peso Meio-Médio (170 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'O Blueprint do Tsarukyan',
      tagline_sub: 'Tsarukyan acabou Alvarez em fev 2022, TKO R2 de cima, GnP, sub-attempts foram "activity not danger". Amosov é versão mais dura. Mercado moveu de Alvarez -400 pra Amosov -175.',
      fighter1: {
        nome_completo: 'Joel "El Fenómeno" Alvarez',
        apelido: 'El Fenómeno',
        sobrenome: 'Alvarez',
        record: '23-3-0',
        ranking: 'N/R Peso Meio-Médio',
        info_extra: 'Gijón, Astúrias, Espanha | 33 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/2/ALVAREZ_JOEL_L_12-14.png?itok=-YA8lRPj',
      },
      fighter2: {
        nome_completo: 'Yaroslav "Dynamo" Amosov',
        apelido: 'Dynamo',
        sobrenome: 'Amosov',
        record: '29-1-0',
        ranking: 'N/R Peso Meio-Médio',
        info_extra: 'Irpin, Ucrânia | 32 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/AMOSOV_YAROSLAV_R_12-13.png?itok=0HuVN0D3',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'O Único Wrestler de Elite que Alvarez Enfrentou Acabou Ele em 6:57',
      insight:
        'Joel Alvarez tem 23-3 na carreira com 4 vitórias seguidas no UFC, faixa-preta de BJJ que finaliza 17 dos 23 wins (74% sub rate). Mas a única vez que ele enfrentou wrestler de elite foi 26 de fevereiro de 2022, UFC Vegas 49 contra Arman Tsarukyan. Tsarukyan derrubou Alvarez no R1, ficou de cima até o sino, abriu corte feio com elbows. R2: queda imediata, Alvarez "covering up, bloodied, blind" segundo Cageside Press, ref parou em 1:57. Total de 6:57 de bottom control, e a frase do recap é o que importa: "Alvarez wasn\'t able to threaten Tsarukyan with any submissions". As tentativas de sub do espanhol foram "activity, not danger". Amosov é versão mais dura do Tsarukyan: 4x campeão mundial de sambo, ex-campeão Bellator 29-1, defendeu cinturão contra Lima (UD shutout 50-45), Storley duas vezes (UD), Jackson (UD), e estreou no UFC em dezembro de 2025 com anaconda choke em Neil Magny no R1 3:14, fight de 3 minutos pra finalizar o recordista de vitórias do peso meio-médio. Nunca finalizado em 30 lutas. O mercado abriu Alvarez -400 baseado nos quatro finishes seguidos no UFC, e moveu pra Amosov -175 quando o smart money entrou. O movimento da linha é o tell.',
      tension: {
        truth_a: 'Alvarez vem de 4 vitórias seguidas no UFC, acabou de fazer estreia no peso meio-médio dominando Vicente Luque por UD 30-26 x3 em outubro de 2025. Faixa-preta com 17 finalizações em 23 vitórias. 1,91m e 196cm de envergadura, 6 cm mais alto e 6 cm mais reach que Amosov. Striker espanhol que decidiu subir pro peso natural dele.',
        truth_b: 'O único wrestler de elite que Alvarez enfrentou foi Tsarukyan em fev 2022. Resultado: TKO R2 1:57, 6:57 de bottom control, sub-attempts "activity not danger". Amosov é o mesmo arquétipo só que mais experiente, mais cardio (5 lutas de 5 rounds, todas vencidas), mais credenciado (4x sambo world champion, ex-campeão Bellator). E nunca finalizado em 30 lutas profissionais.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Joel Alvarez',
        color: 'red',
        momentum_score: 8,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: '4 vitórias UFC seguidas: Diakiese (D\'Arce R2 com head clash controvérsia, jul 2023), Brener (TKO R3, ago 2024), Klose (KO R1 joelhada voadora, dez 2024), Luque (UD 30-26 x3 em estreia no peso meio-médio, out 2025). Faixa-preta de BJJ Bandog Fight Club, Gijón. Submissões da carreira: 7 triângulos, 4 guilhotinas, 2 armbars, 2 anacondas, 1 brabo, 1 arm triangle. ZERO mata-leões. 33 anos.',
        recent_fights: [
          { date: 'Out 2025', opponent: 'Vicente Luque', result: 'W', method: 'Decisão Unânime (30-26 x3)', opponent_rank: 'Top 15 Peso Meio-Médio', quality_score: 3, quality_label: 'Bom', note: 'Estreia em 170 lbs. Dominou striking, pegou as costas no R2, defendeu desperate TD do Luque no R3.' },
          { date: 'Dez 2024', opponent: 'Drakkar Klose', result: 'W', method: 'KO R1 (joelhada voadora, 2:48)', opponent_rank: 'Top 25 Peso Leve', quality_score: 3, quality_label: 'Bom', note: 'KO espetacular com flying knee + GnP. Klose vinha de 4 vitórias.' },
          { date: 'Ago 2024', opponent: 'Elves Brener', result: 'W', method: 'TKO R3 (joelhadas + GnP)', opponent_rank: 'N/R Peso Leve', quality_score: 2, quality_label: 'Médio', note: 'Performance of the Night. Não foi sub R1 como muito reportado.' },
          { date: 'Jul 2023', opponent: 'Marc Diakiese', result: 'W', method: 'Sub R2 (D\'Arce 4:26)', opponent_rank: 'N/R Peso Leve', quality_score: 2, quality_label: 'Médio', note: 'Setup envolveu head clash que ref deixou passar.' },
          { date: 'Fev 2022', opponent: 'Arman Tsarukyan', result: 'L', method: 'TKO R2 (cotoveladas + GnP, 1:57)', opponent_rank: 'Top 5 Peso Leve', quality_score: 5, quality_label: 'Excelente', note: '6:57 de bottom control. Sub-attempts foram "activity, not danger". O blueprint exato dessa luta.' },
        ],
      },
      fighter2: {
        nome: 'Yaroslav Amosov',
        color: 'blue',
        momentum_score: 9,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note: 'Estreia UFC dominante: anaconda choke em Neil Magny no R1 3:14 em dezembro de 2025, ganhou Submission of the Month. Magny é recordista de vitórias no peso meio-médio do UFC. Antes do UFC, ex-campeão Bellator com defesas sobre Lima (UD shutout 50-45), Storley (UD 50-45), Jackson (UD). Única derrota foi TKO R3 sobre Jason Jackson em Bellator 301 (nov 2023), pegou uma sequência de mão pesada que dropou ele e Jackson finalizou no chão. Pausou 14+ meses (mai 2022 a fev 2023) para defender Ucrânia na guerra. 4x campeão mundial de sambo. Treina no American Top Team em Coconut Creek.',
        recent_fights: [
          { date: 'Dez 2025', opponent: 'Neil Magny', result: 'W', method: 'Sub R1 (anaconda, 3:14)', opponent_rank: 'Top 15 Peso Meio-Médio', quality_score: 4, quality_label: 'Muito Bom', note: 'Acabou em 3 minutos com o recordista de vitórias UFC do peso meio-médio. Submission of the Month dezembro/2025.' },
          { date: 'Mai 2024', opponent: 'Logan Storley', result: 'W', method: 'Decisão Unânime', opponent_rank: 'Top 5 Bellator', quality_score: 4, quality_label: 'Muito Bom', note: 'PFL vs Bellator card. Terceira vez seguida vencendo Storley.' },
          { date: 'Nov 2023', opponent: 'Jason Jackson', result: 'L', method: 'TKO R3 (combo + GnP, 2:08)', opponent_rank: 'Top 5 Bellator', quality_score: 4, quality_label: 'Muito Bom', note: 'Única derrota da carreira. Jackson conectou direita + esquerda + direita, dropou Amosov, finalizou no chão.' },
          { date: 'Fev 2023', opponent: 'Logan Storley', result: 'W', method: 'Decisão Unânime (50-45 x3)', opponent_rank: 'Top 5 Bellator', quality_score: 5, quality_label: 'Excelente', note: 'Unificação Bellator. Volta após 14 meses defendendo Ucrânia. 5R shutout total.' },
          { date: 'Jun 2021', opponent: 'Douglas Lima', result: 'W', method: 'Decisão Unânime (5R)', opponent_rank: 'Ex-Campeão Bellator', quality_score: 5, quality_label: 'Excelente', note: 'Conquistou cinturão Bellator. Outwrestled Lima nos 5 rounds inteiros.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Alvarez', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '5V-0D (últimas 5)', contra_top5: '0V-1D (Tsarukyan)' },
      fighter2: { nome: 'Amosov', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '4V-1D (últimas 5)', contra_top5: '0V-0D (UFC), 4V-1D (Bellator topo)' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Calibre médio Amosov (4) acima do Alvarez (2). Os 4 finishes UFC seguidos do espanhol foram contra Diakiese (n/r), Brener (n/r), Klose (top 25), Luque (top 15 em decadência). Amosov derrotou Lima, Storley duas vezes, Jackson, Magny, todos em fase prime ou só lightly past prime. Diferença qualitativa: Alvarez nunca venceu top 5 da divisão; Amosov foi top 1 de outra promoção por anos.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.8, valueB: 2.78, maxVal: 7, format: 'decimal', note: 'Alvarez volume superior, perfil striker-grappler.' },
        { label: 'Precisão de Strikes (%)', valueA: 53, valueB: 47, maxVal: 100, format: 'percent', note: 'Alvarez mais preciso pelo alcance.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.8, valueB: 1.55, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Amosov absorve menos pelo wrestling defensivo.' },
        { label: 'Defesa de Strikes (%)', valueA: 58, valueB: 55, maxVal: 100, format: 'percent', note: 'Equilibrado.' },
        { label: 'Takedowns por 15 Min', valueA: 1.5, valueB: 4.8, maxVal: 5, format: 'decimal', note: 'Amosov 3x mais wrestling ofensivo. Identidade dele.' },
        { label: 'Submissões por 15 Min', valueA: 2.8, valueB: 4.64, maxVal: 5, format: 'decimal', note: 'Amosov ataca de cima, Alvarez de baixo.' },
        { label: 'Defesa de Quedas (%)', valueA: 47, valueB: 78, maxVal: 100, format: 'percent', note: 'Stat-chave. Alvarez TDD 47% (vulnerabilidade), Amosov 78% (elite).' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '32 anos', note: 'Alvarez 6 meses mais velho. Amosov faz 33 em set/2026.' },
        { label: 'Altura', fighter1: '1,91m (6\'3")', fighter2: '1,83m (6\'0")', note: 'Alvarez 8 cm mais alto.' },
        { label: 'Envergadura', fighter1: '196 cm (77")', fighter2: '190 cm (75")', note: 'Alvarez 6 cm a mais. Vantagem em pé.' },
        { label: 'Stance', fighter1: 'Destro', fighter2: 'Destro', note: 'Mesmo stance.' },
        { label: 'Academia', fighter1: 'Bandog FC, Gijón', fighter2: 'American Top Team', note: 'Asturian striking gym vs camp americano elite.' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Wrestling Ofensivo', advantage: 'fighter2', gap: 5, note: 'Amosov 4.8 TD/15min vs 1.5 do Alvarez. 4x sambo world champion. Identidade absoluta.' },
        { label: 'Top Control / Domínio no Chão', advantage: 'fighter2', gap: 5, note: 'Amosov controla por cima e finaliza (anaconda repertório). Alvarez ataca de baixo, perfil oposto.' },
        { label: 'Defesa de Quedas', advantage: 'fighter2', gap: 4, note: 'Amosov 78% TDD, Alvarez 47%. Próprio Alvarez admitiu: "I\'m not a specialist in wrestling".' },
        { label: 'Defesa de Submissão', advantage: 'fighter2', gap: 3, note: 'Amosov NUNCA finalizado em 30 lutas. Alvarez foi controlado mas não submetido por Tsarukyan. Sample diferente.' },
        { label: 'Striking em Pé', advantage: 'fighter1', gap: 2, note: 'Alvarez 6 cm reach a mais, mais alto, SLpM mais alto. Mas Amosov absorbsion 1.55/min indica ele evita troca.' },
        { label: 'Cardio (3 e 5 Rounds)', advantage: 'fighter2', gap: 3, note: 'Amosov fez 5 lutas de 5 rounds em Bellator (todas vencidas em UD). Alvarez nunca foi além de R3.' },
      ],
      summary: 'Amosov domina onde a luta vai (chão, top control, wrestling). Alvarez tem ferramenta forte (BJJ ofensivo) mas precisa estar por baixo, posição que Amosov controla. Pra Alvarez vencer, precisa derrubar wrestler que NUNCA foi consistentemente derrubado, ou aceitar guarda contra cara que finalizou Magny em 3 minutos.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Alvarez', ko_tko: { count: 5, percent: 22 }, submission: { count: 17, percent: 74 }, decision: { count: 1, percent: 4 }, total_wins: 23 },
      fighter2: { nome: 'Amosov', ko_tko: { count: 9, percent: 31 }, submission: { count: 12, percent: 41 }, decision: { count: 8, percent: 28 }, total_wins: 29 },
      insight: 'Alvarez 74% por sub: 7 triângulos, 4 guilhotinas, 2 anacondas, 2 armbars, 1 brabo, 1 arm triangle. ZERO mata-leão (apesar do reportagem comum). Amosov 41% sub + 31% KO/TKO = 72% finish rate, perfil completo. As 5 últimas finalizações dele: Magny (anaconda R1), Cavalcanti (north-south R1), Rickels (D\'Arce R2), CFFC (anaconda R1), chokes da família anaconda/D\'Arce/north-south é repertório recorrente.',
    },

    distribuicao_derrotas: {
      fighter1: { nome: 'Alvarez', ko_tko: { count: 2, percent: 67 }, submission: { count: 0, percent: 0 }, decision: { count: 1, percent: 33 }, total_losses: 3 },
      fighter2: { nome: 'Amosov', ko_tko: { count: 1, percent: 100 }, submission: { count: 0, percent: 0 }, decision: { count: 0, percent: 0 }, total_losses: 1 },
      insight: 'Alvarez perdeu 2 das 3 por KO/TKO: Arman Tsarukyan ground-and-pound R2 (UFC Fight Night 202) e o método agressivo de wrestlers que ditam o ritmo. A 3ª derrota foi UD pra Damir Ismagulov na estreia UFC 2019. Amosov tem APENAS 1 derrota em carreira (29-1) — Jason Jackson KO R3 em Bellator 301 defendendo título, era 27-0 naquele momento. Perfil raríssimo de durabilidade. Amostra do Amosov é mínima mas o único KO sofrido sinaliza que striker pesado em transição pode pegá-lo. Para value bet: Alvarez por sub continua o caminho mais natural dado seu perfil de finalizador.',
    },

    previsao_final: {
      winner_name: 'Yaroslav Amosov',
      winner_side: 'fighter2',
      predicted_method: 'Sub tardia (anaconda) ou Decisão',
      confidence_score: 8,
      confidence_label: 'ALTA',
      explanation:
        'A pick é Yaroslav Amosov por anaconda choke ou submissão tardia da família D\'Arce/north-south, com decisão dominante como segundo cenário. Olhando luta por luta, a vantagem aparece em cinco dimensões: stats (TDD 78% e wrestling 4.8/15min vs 1.5 do Alvarez, e Alvarez TDD 47% vulnerável), nível de competição (Bellator champion 29-1 contra Lima, Storley duas vezes, Jackson, Magny vs Alvarez que nunca venceu top 5), estilo (top control wrestler com sub repertório anaconda contra grappler de baixo), momento (estreia UFC dominante de 3 minutos sobre Magny vs Alvarez 4-0 no UFC mas calibre baixo) e o blueprint Tsarukyan (única vez que Alvarez enfrentou wrestler de elite, terminou em TKO R2 com sub-attempts "activity not danger"). Alvarez tem caminho viável (25%): usa 6 cm de envergadura pra abrir distância em pé, conecta cruzado pesado contra cara que tem chin questionado pelo Jackson, ou aceita guarda e encaixa triângulo (que ele ataca melhor que mata-leão). Mas a probabilidade matemática tá pesada pro ucraniano. Convicção 8 porque cinco dimensões convergem com precedente direto (Tsarukyan blueprint) e mercado moveu de Alvarez -400 opening pra Amosov -175 current.',
      x_factor: {
        title: 'O Blueprint do Tsarukyan',
        description: 'Em fevereiro de 2022, Arman Tsarukyan ofereceu o roteiro exato pra vencer Alvarez: queda no R1, top control com elbows pra abrir corte, queda imediata no R2, GnP até o ref parar em 1:57. Total: 6:57 de bottom control. Sub-attempts do Alvarez foram "activity, not danger". Amosov é Tsarukyan com mais cardio, mais credenciamento (4x sambo world champion vs juniors world champion), mais experiência (29-1 vs 22-3 na época) e finishing instinct comprovado (anaconda Magny em 3 min). Se ele segue o blueprint, é fim de combate.',
      },
      upset_alert: {
        title: 'Alvarez Lê Distância e Encontra a Mão Pesada',
        description: 'O precedente pra vencer Amosov em pé existe: Jason Jackson dropou o ucraniano em Bellator 301 (nov 2023) e finalizou TKO R3. Não é roteiro repetível, é prova de que Amosov pode ser pego se a trocação prolongada acontecer. Alvarez tem 6 cm de envergadura a mais, 8 cm de altura, e KO power real (5 KO/TKO em 23 vitórias incluindo flying knee no Klose dez/2024). Se ele consegue ditar distância no jab e Amosov entra desconfortável na troca, há janela pra mão pesada. Probabilidade na casa dos 25%, real porque o ponto fraco do Amosov em pé já foi exposto uma vez.',
      },
      probabilities: { fighter1: { nome: 'Alvarez', percent: 25 }, fighter2: { nome: 'Amosov', percent: 72 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Yaroslav Amosov vence porque, primeiro, foi 4x campeão mundial de sambo e ex-campeão peso meio-médio do Bellator (29-1) com TDD 78% e wrestling 4.8/15min, sustentando cenário de top control pelos 3 rounds. Segundo, Arman Tsarukyan já entregou o blueprint exato em fevereiro de 2022 (TKO R2 1:57 com 6:57 de bottom control sobre Alvarez, sub-attempts foram "activity not danger") e Amosov é versão mais dura do Tsarukyan. Terceiro, anaconda choke dominante sobre Magny em 3:14 da estreia UFC mostra que finalização da família anaconda/D\'Arce é repertório recorrente (já finalizou assim em CFFC, Bellator e UFC), não one-off. O caminho pra isso é Amosov defender striking inicial, encaixar queda no R1, controlar por cima 4-5 minutos por round, buscar anaconda nas transições. Desmorona se Alvarez ditar distância em pé e encaixar mão pesada cedo, ou se o ucraniano cometer erro de transição numa puxada de guarda.',
        conviction_score: 8,
        conviction_rationale: 'Convicção 8 porque cinco dimensões convergem (stats, calibre, estilo, momento, qualitative) com precedente direto. O blueprint Tsarukyan é o mais forte argumento qualitativo: o único wrestler de elite que Alvarez enfrentou ofereceu roteiro de derrota dominante. Mercado moveu Alvarez -400 pra Amosov -175, o smart money concorda. Não é 9 porque Jackson já mostrou que Amosov pode ser derrubado por combinação de mão pesada e Alvarez tem reach + altura pra tentar isso, mais Amosov tem só 1 luta UFC.',
        conviction_breakers: [
          'Alvarez dita distância em pé e encaixa mão pesada cedo, dropando Amosov',
          'Amosov não consegue conectar quedas nas primeiras tentativas e luta vira striking match',
          'Alvarez puxa guarda confortável, encaixa triângulo (specialty dele) em transição',
          'Cardio de Amosov falha pela primeira vez em 30 lutas',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 25,
          key_scenario: 'Alvarez usa 6 cm de envergadura e 8 cm de altura pra impor distância no jab. Quando Amosov fecha pra wrestling, Alvarez sprawla a primeira tentativa, recolhe pra centro do octógono. R1 fica em pé na maioria. Alvarez encontra mão pesada no momento que Amosov tenta entrar (cruzado, hook ou flying knee como conectou no Klose), dropa Amosov. Persegue com GnP até stoppage. KO/TKO R1-R2.',
          required_conditions: [
            'Defender pelo menos a primeira tentativa de queda do Amosov',
            'Manter distância em pé com 6 cm de envergadura a mais',
            'Conectar mão pesada genuína (poder real, 5 KO/TKO carreira)',
            'Não puxar guarda contra cara que finalizou Magny em 3 minutos',
          ],
          historical_precedent: 'Jason Jackson dropou Amosov em Bellator 301 (nov 2023) e finalizou TKO R3, primeira e única derrota da carreira em 30 lutas. Não significa que Alvarez vai replicar exatamente a mesma sequência: significa que o ponto fraco em pé do Amosov foi exposto uma vez por uma trocação prolongada. Alvarez tem reach, altura, e KO power (5 KO/TKO em 23 vitórias) pra criar janela similar se a trocação acontecer. Mas Alvarez também perdeu pra Damir Ismagulov (UFC Praga 2019) UD pelo striking puro, o que mostra que distância em pé não é dele em todo cenário.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Yaroslav Amosov', odds: '-175 (BestFightOdds, abr 2026)', reasoning: 'Probabilidade real estimada 72%, implícita -175 = 64%. Edge de 8 pontos porcentuais. Mercado abriu Alvarez -400 e moveu pra Amosov -175 quando o smart money entrou. Linha alinha com a tese.' },
          { type: 'Método', pick: 'Amosov por Submissão', odds: '+250 a +300 (estimado)', reasoning: 'Anaconda Magny mostrou que finalização é repertório atual (3:14 R1). Família anaconda/D\'Arce/north-south é padrão recorrente nas últimas 4 vitórias. Alvarez foi controlado 6:57 por Tsarukyan sem ameaçar sub. Probabilidade real 35-40%, implícita em +275 = 27%, edge real.' },
          { type: 'Total Rounds', pick: 'Não passa de 2,5 rounds (Under)', odds: '+110 a +130 (estimado)', reasoning: 'Amosov finalizou Magny em 3 min. Tsarukyan finalizou Alvarez em 6:57. Cenário de finish na primeira metade da luta é provável.' },
        ],
        best_bet: { pick: 'Amosov por Submissão em +275', reasoning: 'Maior edge esperado da luta. Tsarukyan blueprint mais finishing repertório anaconda recente. Probabilidade real 35-40% contra implícita 27%. Best bet das prelims.' },
      },
      key_stats: [
        { value: '6:57', label: 'Bottom control sofrido por Alvarez vs Tsarukyan (fev 2022)', sublabel: 'Único wrestler de elite que ele enfrentou. Sub-attempts foram "activity not danger".' },
        { value: '0', label: 'Vezes que Amosov foi finalizado em 30 lutas', sublabel: 'Sub defense histórico irretocável. 4x campeão mundial de sambo.' },
        { value: '3:14', label: 'Tempo que Amosov demorou pra finalizar Magny na estreia UFC', sublabel: 'Anaconda choke. Magny é recordista de vitórias do peso meio-médio UFC.' },
        { value: '-400 → -175', label: 'Movimento da linha de Alvarez favorito pra Amosov favorito', sublabel: 'Smart money moveu drasticamente. Mercado lê o blueprint Tsarukyan.' },
      ],
      odds: {
        fighter1_odds: '+150',
        fighter2_odds: '-175',
        fighter1_name: 'Alvarez',
        fighter2_name: 'Amosov',
        source: 'BestFightOdds Amosov -163 a -186 / Alvarez +130 a +156 em abril/2026. Polymarket Amosov 62%. Opening DraftKings/Vegas era Alvarez -400, moveu drasticamente quando smart money entrou.',
      },
      armadilha: {
        titulo: 'Armadilha: Alvarez por Mata-leão',
        descricao: 'O mercado vai pagar pesado em "Alvarez por mata-leão" baseado em interpretação errada do histórico (4 finishes seguidos UFC, "61% sub rate"). Mas Alvarez tem ZERO mata-leões na carreira: as 17 submissões dele são 7 triângulos, 4 guilhotinas, 2 anacondas, 2 armbars, 1 brabo, 1 arm triangle. Nem uma. Apostar Alvarez por mata-leão é apostar contra o histórico inteiro do espanhol. Se quer apostar sub do Alvarez, é triângulo ou guilhotina.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'alvarez-vs-amosov');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
