import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'dariush-vs-salkilld',
  evento_id: null,
  slug: 'dariush-vs-salkilld',
  titulo: 'Dariush vs Salkilld: Veterano Caindo, Prospect Acelerando',
  subtitulo:
    'Beneil Dariush vem de nocaute em 16 segundos do Saint Denis, terceira derrota por KO em 2,5 anos. Quillan Salkilld é o Estreante do Ano 2025 do UFC, três Performances da Noite em quatro lutas, em casa em Perth. Casas precificam Salkilld -450, Polymarket bate em 71%. Envergadura, idade e queixo do Dariush apontam pro jovem.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,78m', envergadura: '183cm', idade: 36, academia: 'Kings MMA + Gracie Barra' },
      fighter2: { altura: '1,83m', envergadura: '191cm', idade: 26, academia: 'Luistro Combat Academy' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'KO/TKO ou Sub R1-R2',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Beneil Dariush',
    apelido: 'Benny',
    record: '23-7-1',
    ranking: '#12 Peso Leve',
    ultimasLutas: [
      { result: 'L', opponent: 'Benoît Saint Denis', method: 'KO R1 (0:16)', event: 'UFC 322 (Nov 2025)' },
      { result: 'W', opponent: 'Renato Moicano', method: 'Decisão Unânime', event: 'UFC 317 (Jun 2025)' },
      { result: 'L', opponent: 'Arman Tsarukyan', method: 'KO R1', event: 'UFC Fight Night (Dez 2023)' },
    ],
  },
  fighter2_info: {
    nome: 'Quillan Salkilld',
    record: '11-1-0',
    ranking: 'Sem ranking no top 15',
    ultimasLutas: [
      { result: 'W', opponent: 'Jamie Mullarkey', method: 'Sub R1 (RNC, 3:02)', event: 'UFC 325 (Jan 2026)' },
      { result: 'W', opponent: 'Nasrat Haqparast', method: 'KO R1 (head kick, 2:30)', event: 'UFC 321 (Out 2025)' },
      { result: 'W', opponent: 'Yanal Ashmouz', method: 'Decisão Unânime', event: 'UFC 316 (Jun 2025)' },
    ],
  },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: '2 de Maio, 2026',
  evento_local: 'RAC Arena, Perth, Austrália',
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
      evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
      evento_data: '2 de Maio, 2026',
      evento_local: 'RAC Arena, Perth, Austrália',
      categoria_peso: 'Peso Leve (155 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Veterano Caindo, Prospect Acelerando',
      tagline_sub: 'Dariush em três derrotas por KO em 2,5 anos. Salkilld 11-1, pegando fogo, em casa. A envergadura aponta pro jovem.',
      fighter1: {
        nome_completo: 'Beneil "Benny" Dariush',
        apelido: 'Benny',
        sobrenome: 'Dariush',
        record: '23-7-1',
        ranking: '#12 Peso Leve',
        info_extra: 'Yorba Linda, Califórnia (Iran) | 36 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/DARIUSH_BENEIL_L_11-15.png?itok=quz_J8hb',
      },
      fighter2: {
        nome_completo: 'Quillan Salkilld',
        apelido: '',
        sobrenome: 'Salkilld',
        record: '11-1-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Pinjarra, Western Australia | 26 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/SALKILLD_QUILLAN_L_01-31.png?itok=CNlDKECm',
      },
    },
    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'O Queixo do Veterano Contra a Velocidade do Jovem',
      insight:
        'Dariush vem de três derrotas por KO em 2,5 anos: Oliveira (chute alto no R1, 2023), Tsarukyan (joelhada no clinch, 2023) e Saint Denis (esquerda direta em 16 segundos, 2025). Ele mesmo admitiu pós-Saint Denis: "se você não consegue absorver soco, qual o ponto?" Salkilld tem 8 cm a mais de envergadura, 5 cm a mais de altura, momentum esmagador (3 Performances da Noite em 4 lutas), e luta em casa em Perth. O caminho do veterano existe: faixa-preta de BJJ de elite (Bruno Paulista, Gracie Barra), 8 finalizações na carreira, média de 0,8 finalização a cada 15 min — pegar Salkilld em scramble, mata-leão ou chave de braço. Só que isso exige sobreviver ao R1 em pé sem tomar KO, e Salkilld já tem 3 finalizações em 4 lutas no UFC, todas antes do 4º minuto. R2 ressalva de calibre dispara: Dariush enfrentou Makhachev/Moicano/Tsarukyan/Oliveira, calibre 5; Salkilld enfrentou Mullarkey/Haqparast/Ashmouz/Jubli, calibre 2-3. Mas Tier 2 não dispara porque Dariush perdeu 3 das últimas 5, não está em elite sustentada.',
      tension: {
        truth_a: 'Dariush é veterano UFC (17-7-1), faixa-preta de BJJ, média de finalização 0,8 elite, jogo de chão pode reverter qualquer luta em pé. A vitória sobre Moicano em junho de 2025 mostra que ainda tem.',
        truth_b: 'Salkilld é 10 anos mais novo, 8 cm a mais de envergadura, 3 finalizações em 4 lutas no UFC (todas no R1), 100% de defesa de quedas no UFC, em casa em Perth, e o queixo do Dariush é questionável aos 36 com peso estourado no UFC 322.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Beneil Dariush', color: 'red', momentum_score: 3, momentum_label: 'Em Queda', momentum_trend: 'descending',
        momentum_note: 'Vem de KO devastador em 16 segundos do Saint Denis em novembro de 2025. Terceira derrota por KO em 2,5 anos (Oliveira chute alto no R1 em 2023, Tsarukyan joelhada no R1 em 2023). Ele mesmo questionou o queixo publicamente. Estourou peso em 1,2 lbs no UFC 322. Considerou subir pro peso meio-médio. Antes desse KO recente: vitória sólida sobre Moicano por decisão unânime em junho de 2025 (5 quedas, 55-28 em sig strikes), prova que ainda tem ferramentas — mas o queixo é a vulnerabilidade que decide tudo.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Benoît Saint Denis', result: 'L', method: 'KO R1 (0:16)', opponent_rank: 'Top 15 Peso Leve', quality_score: 4, quality_label: 'Muito Bom', note: '16 segundos. Esquerda direta limpa.' },
          { date: 'Jun 2025', opponent: 'Renato Moicano', result: 'W', method: 'Decisão Unânime (29-28 x3)', opponent_rank: 'Top 10 Peso Leve', quality_score: 5, quality_label: 'Excelente', note: 'Tomou knockdown no R1 mas recuperou. 5 quedas, 55-28 em sig strikes.' },
          { date: 'Dez 2023', opponent: 'Arman Tsarukyan', result: 'L', method: 'KO R1 (1:04)', opponent_rank: '#5 Peso Leve', quality_score: 5, quality_label: 'Excelente', note: 'Joelhada no clinch tailandês. Main event.' },
          { date: 'Jun 2023', opponent: 'Charles Oliveira', result: 'L', method: 'TKO R1 (4:10)', opponent_rank: 'Ex-Campeão Peso Leve', quality_score: 5, quality_label: 'Excelente', note: 'Chute alto. Atordoado e finalizado.' },
          { date: 'Out 2022', opponent: 'Mateusz Gamrot', result: 'W', method: 'Decisão Unânime', opponent_rank: '#8 Peso Leve', quality_score: 4, quality_label: 'Muito Bom', note: 'Aula de 15 minutos.' },
        ],
      },
      fighter2: {
        nome: 'Quillan Salkilld', color: 'blue', momentum_score: 10, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: '4-0 no UFC, 11 vitórias seguidas, 3 Performances da Noite em 4 lutas, Estreante do Ano 2025 do UFC. Recorde do KO mais rápido na história do peso leve UFC (Jubli em 0:19). Mullarkey foi finalizado por mata-leão no R1 com Bônus de 100 mil. Cardio testado em cinco rounds contra Ashmouz. Frase dele: "Speed-running this. Head-first into top 10."',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Jamie Mullarkey', result: 'W', method: 'Sub R1 (RNC, 3:02)', opponent_rank: 'Veterano UFC', quality_score: 2, quality_label: 'Médio', note: 'Mata-leão depois de projeção. Bônus de 100 mil.' },
          { date: 'Out 2025', opponent: 'Nasrat Haqparast', result: 'W', method: 'KO R1 (chute alto, 2:30)', opponent_rank: 'Top 25 Peso Leve', quality_score: 3, quality_label: 'Bom', note: 'Candidato a KO do ano. Quebrou o pé no chute.' },
          { date: 'Jun 2025', opponent: 'Yanal Ashmouz', result: 'W', method: 'Decisão Unânime (30-27 + 29-28 x2)', opponent_rank: 'Prospect', quality_score: 2, quality_label: 'Médio', note: 'Única decisão no UFC. Cardio aguentou 15 minutos.' },
          { date: 'Fev 2025', opponent: 'Anshul Jubli', result: 'W', method: 'KO R1 (0:19)', opponent_rank: 'DWCS', quality_score: 1, quality_label: 'Ruim', note: 'Recorde do KO mais rápido no peso leve UFC.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Dariush', media_oponentes: 5, media_oponentes_label: 'Excelente', aproveitamento: '2V-3D (últimas 5)', contra_top5: '0V-3D' },
      fighter2: { nome: 'Salkilld', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '4V-0D UFC', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. R2 Tier 1 ressalva de calibre DISPARA: diferença de 3 níveis a favor do Dariush (perdedor previsto). MAS Tier 2 NÃO dispara porque Dariush perdeu 3 das últimas 5 e não está em elite sustentada — calibre alto não se traduz em performance recente.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.78, valueB: 5.49, maxVal: 8, format: 'decimal', note: 'SLpM do Salkilld 5,49 inflado por amostra de uns 10 minutos no UFC.' },
        { label: 'Precisão de Strikes (%)', valueA: 49, valueB: 56, maxVal: 100, format: 'percent', note: 'Precisão do Salkilld alta mas amostra mínima.' },
        { label: 'Defesa de Strikes (%)', valueA: 57, valueB: 43, maxVal: 100, format: 'percent', note: 'Defesa de strikes do Dariush em 57% no papel, mas tomou 3 KOs em 2,5 anos.' },
        { label: 'Takedowns por 15 Min', valueA: 2.11, valueB: 7.77, maxVal: 8, format: 'decimal', note: 'Média de queda do Salkilld inflada por amostra. Não é wrestler primário.' },
        { label: 'Defesa de Takedown (%)', valueA: 65, valueB: 100, maxVal: 100, format: 'percent', note: 'Defesa de quedas do Salkilld em 100% no UFC, mas amostra inclui 2 lutas com menos de 1 min.' },
        { label: 'Submissões por 15 Min', valueA: 0.8, valueB: 1.0, maxVal: 3, format: 'decimal', note: 'Dariush é faixa-preta de BJJ de elite. Salkilld tem 1 finalização no UFC.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '36 anos', fighter2: '26 anos', note: 'Salkilld 10 anos mais novo. Crítico no peso leve.' },
        { label: 'Altura', fighter1: '1,78m', fighter2: '1,83m', note: 'Salkilld 5 cm mais alto.' },
        { label: 'Envergadura', fighter1: '183 cm', fighter2: '191 cm', note: 'Salkilld 8 cm de envergadura a mais.' },
        { label: 'Stance', fighter1: 'Canhoto', fighter2: 'Destro', note: 'Matchup assimétrico.' },
        { label: 'Academia', fighter1: 'Kings MMA + Gracie Barra Northridge', fighter2: 'Luistro Combat Academy Perth', note: 'Faixa-preta de BJJ contra faixa-marrom.' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Pé', advantage: 'fighter2', gap: 3, note: 'Salkilld 5 cm a mais de altura, 8 cm a mais de envergadura, KO por chute alto recente.' },
        { label: 'Poder de Nocaute', advantage: 'fighter2', gap: 2, note: 'Salkilld tem 3 KOs em 4 lutas no UFC. Dariush tem 5 KOs na carreira mas nada recente.' },
        { label: 'Wrestling / Clinch', advantage: 'fighter1', gap: 2, note: 'Dariush conectou 5 quedas no Moicano. Veterano em wrestling.' },
        { label: 'BJJ / Finalização', advantage: 'fighter1', gap: 4, note: 'Dariush é faixa-preta (Bruno Paulista, Gracie Barra) contra a faixa-marrom do Salkilld. 8 finalizações na carreira.' },
        { label: 'Queixo / Durabilidade', advantage: 'fighter2', gap: 4, note: 'Dariush tomou 3 KOs em 2,5 anos. Ele mesmo questionou. Salkilld nunca foi derrubado no UFC.' },
        { label: 'Experiência UFC', advantage: 'fighter1', gap: 3, note: 'Dariush 17-7-1 no UFC. Salkilld 4-0 no UFC.' },
      ],
      summary: 'Salkilld ganha em envergadura, idade, momentum, durabilidade. Dariush ganha em jogo de chão e experiência. Só que a vulnerabilidade do queixo do Dariush mata o caminho dele em pé, e ele precisa ir pro chão sem tomar KO antes.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Dariush', ko_tko: { count: 5, percent: 22 }, submission: { count: 8, percent: 35 }, decision: { count: 10, percent: 43 }, total_wins: 23 },
      fighter2: { nome: 'Salkilld', ko_tko: { count: 6, percent: 55 }, submission: { count: 4, percent: 36 }, decision: { count: 1, percent: 9 }, total_wins: 11 },
      insight: 'Dariush é grappler-decisão (43% das vitórias por decisão). Salkilld é finisher (10 de 11 vitórias por finalização). Combinado: probabilidade extremamente baixa de ir 3 rounds.',
    },
    previsao_final: {
      winner_name: 'Quillan Salkilld', winner_side: 'fighter2',
      predicted_method: 'KO/TKO ou Sub R1-R2', confidence_score: 7, confidence_label: 'MÉDIA-ALTA',
      explanation:
        'A pick é Quillan Salkilld por finalização em R1-R2. Olhando luta por luta, a vantagem aparece em quatro dimensões independentes: FÍSICO (5 cm a mais de altura, 8 cm a mais de envergadura, 10 anos a menos), MOMENTUM (3 finalizações em 4 lutas no UFC contra 3 derrotas por KO em 2,5 anos), ESTILO (KO por chute alto + mata-leão depois de projeção = arsenal completo) e INTELIGÊNCIA QUALITATIVA (3 Performances da Noite em 4 lutas, Estreante do Ano, em casa em Perth). O caminho do Dariush (~22%) existe via faixa-preta de BJJ de elite e jogo de chão, mas exige sobreviver ao R1 em pé — exatamente o que ele não conseguiu contra Saint Denis em 16 segundos. R2 Tier 1 ressalva de calibre dispara: os adversários do Dariush são 3 níveis acima dos do Salkilld, mas Tier 2 não dispara porque Dariush perdeu 3 das últimas 5.',
      x_factor: {
        title: 'O queixo de 36 anos contra o poder de 26',
        description: 'Dariush admitiu publicamente que o queixo é a vulnerabilidade. Salkilld tem 8 cm a mais de envergadura e poder que derrubou Haqparast com chute alto em 2:30. Se Salkilld conectar limpo nos primeiros 3 minutos, fim de combate. Único caminho do Dariush é puxar pro clinch antes de levar bomba e procurar costas ou braço.',
      },
      upset_alert: {
        title: 'Dariush pega Salkilld em scramble',
        description: 'Dariush tem 8 finalizações na carreira, faixa-preta de BJJ de elite. Defesa de quedas do Salkilld é 100% no UFC, mas a amostra inclui 2 lutas com menos de 1 minuto. Em scramble de verdade, Dariush pode achar mata-leão ou chave de braço. Probabilidade aproximada de 22%, mas o caminho é técnico e real.',
      },
      probabilities: { fighter1: { nome: 'Dariush', percent: 22 }, fighter2: { nome: 'Salkilld', percent: 75 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Quillan Salkilld vence porque, primeiro, é 10 anos mais novo com 8 cm a mais de envergadura, e o Dariush vem de KO em 16 segundos do Saint Denis. Segundo, momentum é 3 finalizações em 4 lutas no UFC (incluindo KO por chute alto) contra 3 KOs sofridos em 2,5 anos pelo Dariush. Terceiro, o palco em Perth + 3 Performances da Noite + Estreante do Ano = combinação ofensiva completa contra um veterano questionando o próprio queixo. Caminho: Salkilld conecta soco direto ou chute alto no R1, finaliza ou domina; alternativa via clinch + queda nas costas + mata-leão. Desmorona se Dariush sobreviver ao R1 e achar scramble pro chão.',
        conviction_score: 7,
        conviction_rationale: 'Convicção 7 porque quatro dimensões convergem (físico, momentum, estilo, inteligência qualitativa). Não é 8 porque Dariush é faixa-preta de BJJ de elite com 8 finalizações na carreira, e o caminho de scramble dele é tecnicamente real (~22%). R2 Tier 1 ressalva de calibre dispara mas Tier 2 não — Dariush perdeu 3 das últimas 5, não está em elite sustentada.',
        conviction_breakers: [
          'Dariush sobreviver ao R1 em pé sem tomar KO',
          'Salkilld não conseguir defender queda em scramble verdadeiro',
          'Dariush achar mata-leão ou chave de braço em transição',
          'Salkilld lutar defensivo demais e perder cards apertados',
        ],
        underdog_path: {
          viable: true, probability_estimate: 22,
          key_scenario: 'Dariush sobrevive os primeiros 90 segundos, puxa pro clinch contra a parede pra evitar o poder do R1, força a luta pro chão. Em scramble usa a faixa-preta de BJJ de elite pra achar as costas e o mata-leão. Alternativa: chave de braço de baixo se Salkilld passar guarda mal.',
          required_conditions: [
            'Sobreviver ao R1 em pé sem tomar KO ou ser derrubado',
            'Forçar clinch antes de Salkilld conectar limpo',
            'Achar queda ou puxar guarda em scramble',
            'Tentativa de finalização antes do R3 fechar',
          ],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Método', pick: 'Salkilld por ITD', odds: '-150 a -180', reasoning: 'Probabilidade real de finalização em torno de 70%. Em -180 a probabilidade implícita é 64,3%. Vantagem de 5 a 7%. Cobre KO/TKO/finalização do jovem pegando fogo. Melhor aposta do card.' },
          { type: 'Rounds', pick: 'Under 1.5 Rounds', odds: '-110 a -130', reasoning: 'Dariush sofreu 3 KOs no R1 + Salkilld finalizou 3 de 4 lutas no R1 + queixo do Dariush questionado = probabilidade alta de finish no R1. Probabilidade real em torno de 55%.' },
          { type: 'Método R1', pick: 'Salkilld no Round 1', odds: '+150 a +180', reasoning: 'Salkilld tem o KO mais rápido da história do peso leve UFC (0:19) e Dariush levou KO em 16 segundos do Saint Denis. Probabilidade aproximada de 45%, paga +150 a +180. Vantagem clara.' },
          { type: 'Longshot Hedge', pick: 'Dariush por finalização', odds: '+700 a +900', reasoning: 'Faixa-preta de BJJ de elite + 8 finalizações + média 0,8 finalizações em 15 min = caminho real (~15 a 18%). Em +700 a +900 paga 8 a 10x, vantagem positiva se você acredita no scramble.' },
        ],
        best_bet: { pick: 'Salkilld por ITD em -150 a -180', reasoning: 'Probabilidade real de finalização em torno de 70% combina envergadura (8 cm a mais) + poder testado (KO por chute alto no Haqparast) + queixo questionado do veterano + amostra recente (3 de 4 lutas no UFC por finalização). Aposta mais defensável.' },
      },
      key_stats: [
        { value: '3 KOs', label: 'Derrotas do Dariush em 2,5 anos', sublabel: 'Oliveira chute alto, Tsarukyan joelhada, Saint Denis esquerda direta em 16s.' },
        { value: '11-1', label: 'Cartel do Salkilld', sublabel: '10 das 11 vitórias por finalização.' },
        { value: '+8 cm', label: 'Vantagem de envergadura do Salkilld', sublabel: 'Anula a distância onde o Dariush precisa entrar.' },
        { value: '0:19', label: 'KO mais rápido da história do peso leve UFC', sublabel: 'Salkilld contra Jubli no UFC 312.' },
      ],
      odds: { fighter1_odds: '+350', fighter2_odds: '-450', fighter1_name: 'Dariush', fighter2_name: 'Salkilld', source: 'Caesars na abertura (-498), Polymarket bate em 71% Salkilld em 25 de abril de 2026.' },
      armadilha: {
        titulo: 'Armadilha: Dariush por Finalização em +600',
        descricao: 'O mercado vai oferecer Dariush por finalização em +600 e o público vai pegar pela faixa-preta de BJJ + 8 finalizações na história. A armadilha: o queixo do Dariush está documentadamente comprometido (3 KOs em 2,5 anos, ele mesmo admitiu publicamente). Pra finalizar Salkilld, Dariush precisa SOBREVIVER ao R1 em pé primeiro. Probabilidade de sobreviver ao R1 contra Salkilld, que tem KO por chute alto em 2:30 e o KO mais rápido da história do peso leve, é baixa. A aposta não é tecnicamente errada, mas exige um cenário que o queixo do Dariush não suporta. Se for hedge longshot, ok. Se for "aposta principal porque BJJ", é cilada.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'dariush-vs-salkilld');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
