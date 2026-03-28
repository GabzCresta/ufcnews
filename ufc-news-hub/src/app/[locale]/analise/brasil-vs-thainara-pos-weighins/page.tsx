import { translateAnalysis } from '@/lib/translate-analysis';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';

const analise: PrelimsAnalise = {
  id: 'brasil-vs-thainara-pos-weighins',
  evento_id: null,
  slug: 'brasil-vs-thainara-pos-weighins',
  titulo: 'Brasil vs Thainara (Pos Weigh-Ins)',
  subtitulo: null,
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Palha Feminino (115 lbs)',
  status: 'published',
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Submissao R1-R2',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Bruna Brasil', record: '11-6-1', ultimasLutas: [{ result: 'L', opponent: 'Ketlen Souza', method: 'Decisao Unanime', event: 'UFC Fight Night' }] },
  fighter2_info: { nome: 'Alexia Thainara', record: '13-1-0', ultimasLutas: [{ result: 'W', opponent: 'Loma Lookboonmee', method: 'Decisao Unanime', event: 'UFC Fight Night' }] },
  tactical_breakdown: { stats: [], radarData: [], taleOfTape: { fighter1: { altura: '1,68m', envergadura: '166cm', idade: 32, academia: 'The Fighting Nerds / Brasil' }, fighter2: { altura: '1,63m', envergadura: '170cm', idade: 30, academia: 'Brasil' } }, pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [] },
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
      categoria_peso: 'Peso Palha Feminino (115 lbs)',
      num_rounds: 3,
      is_titulo: false,
      fighter1: { nome: 'Bruna Brasil', record: '11-6-1', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-02/BRASIL_BRUNA_L_02-07.png?itok=afUQXzT9' },
      fighter2: { nome: 'Alexia Thainara', record: '13-1-0', ranking: 'N/R', imagem_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-09/THAINARA_ALEXIA_R_09-27.png?itok=aT_FWNEf' },
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 2.66, valueB: 5.73, maxVal: 8, format: 'decimal', note: 'Thainara produz MAIS QUE O DOBRO de volume. 5.73 SLpM e absurdo pra divisao.' },
        { label: 'Precisao de Strikes (%)', valueA: 56, valueB: 40, maxVal: 100, format: 'percent', note: 'Brasil mais precisa mas com volume drasticamente inferior' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.66, valueB: 2.82, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Absorcao similar. Thainara lanca muito mais mas nao absorve proporcionalmente.' },
        { label: 'Defesa de Strikes (%)', valueA: 52, valueB: 70, maxVal: 100, format: 'percent', note: 'Thainara defende 70% dos golpes. Numero elite pra divisao.' },
        { label: 'Takedowns por 15 Min', valueA: 1.46, valueB: 3.32, maxVal: 5, format: 'decimal', note: 'Thainara busca mais que o dobro de TDs. Maquina de grappling.' },
        { label: 'Precisao de Takedown (%)', valueA: 64, valueB: 85, maxVal: 100, format: 'percent', note: 'Thainara converte 85%. OITENTA E CINCO PORCENTO. Praticamente cada queda que tenta, consegue.' },
        { label: 'Defesa de Takedown (%)', valueA: 53, valueB: 85, maxVal: 100, format: 'percent', note: 'Brasil com 53% TDD e a pior estatistica dessa luta. Contra 85% de Thainara. Abismo.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '32 anos', fighter2: '30 anos', note: 'Diferenca irrelevante' },
        { label: 'Altura', fighter1: '1,68m', fighter2: '1,63m', note: 'Brasil 5cm mais alta' },
        { label: 'Envergadura', fighter1: '166cm', fighter2: '170cm', note: 'Thainara com 4cm mais de reach APESAR de ser mais baixa' },
        { label: 'Historico', fighter1: '11-6-1, 2 derrotas seguidas, turnaround de 2 meses', fighter2: '13-1-0, 11 vitorias seguidas desde derrota pra BRASIL em 2019', note: 'REVANCHE: Brasil e a UNICA derrota de Thainara' },
        { label: 'Contexto', fighter1: 'Brasil previu striking: "Vou bater nela forte e ela vai mudar."', fighter2: 'Thainara: "Naquela epoca eu nem sonhava com UFC, lutava mais pra estetica."', note: 'Evolucao radical de Thainara desde 2019' },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Brasil',
        recent_fights: [
          { date: 'Fev 2026', opponent: 'Ketlen Souza', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Segunda derrota seguida. Turnaround de menos de 2 meses pra esta luta em Seattle.' },
          { date: 'Fev 2025', opponent: 'Wang Cong', result: 'L', method: 'Decisao Unanime', opponent_rank: '#15 WSW', quality_score: 3, quality_label: 'Bom', note: 'UFC 312. Dominada completamente (27-30 em todos os cartoes). Wang Cong controlou tudo.' },
          { date: 'Ago 2025', opponent: 'Shi Ming', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Road to UFC em Shanghai. Adversaria de nivel baixo.' },
          { date: 'Jul 2024', opponent: 'Molly McCann', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'UFC 304. Venceu veterana inglesa.' },
          { date: 'Fev 2024', opponent: 'Loma Lookboonmee', result: 'L', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Derrota por decisao contra tailandesa experiente.' },
        ],
      },
      fighter2: {
        nome: 'Thainara',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Loma Lookboonmee', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Dominou com 110 strikes, 5 takedowns e 10 minutos de controle. Superioridade total.' },
          { date: 'Mar 2025', opponent: 'Molly McCann', result: 'W', method: 'Sub R1 (RNC)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'UFC LONDON. Debut no UFC. Mata-leao no R1 que FORCOU A APOSENTADORIA de McCann. POTN ($50k). Sequencia: takedown, passagem pra montada, forca a virada de costas, tranca o RNC.' },
          { date: 'Set 2024', opponent: 'Rose Conceicao', result: 'W', method: 'Decisao Unanime', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Contender Series. Garantiu contrato UFC com display de grappling.' },
          { date: 'Nov 2019', opponent: 'Bruna Brasil', result: 'L', method: 'Sub R3 (guilhotina, 0:33)', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'UNICA derrota profissional. Guilhotina de Brasil aos 0:33 do R3 no Thunder Fight 20. Desde entao: 11 vitorias seguidas.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Grappling e Takedowns', valueA: 50, valueB: 90, labelA: 'Medio', labelB: 'Excelente', advantage: 'fighter2', advantage_note: 'Thainara converte 85% dos takedowns e defende 85%. Busca 3.32 TDs/15min. Brasil converte 64% e defende APENAS 53%. A matematica e brutalmente favoravel a Thainara.' },
        { label: 'Jiu-Jitsu e Finalizacoes', valueA: 55, valueB: 88, labelA: 'Bom', labelB: 'Excelente', advantage: 'fighter2', advantage_note: 'Thainara tem 8 vitorias por submissao (62% sub rate): 5 mata-leoes, 3 armbars. A sequencia contra McCann foi devastadora: takedown, montada, forca virada, RNC. Brasil tem 2 subs.' },
        { label: 'Volume de Striking', valueA: 40, valueB: 78, labelA: 'Medio', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: 'Thainara com 5.73 SLpM contra 2.66 de Brasil. Mais que o dobro. Mesmo em pe, Thainara e mais ativa.' },
        { label: 'Defesa Geral', valueA: 52, valueB: 78, labelA: 'Medio', labelB: 'Muito Bom', advantage: 'fighter2', advantage_note: 'Thainara: 70% strike defense, 85% TDD. Brasil: 52% strike defense, 53% TDD. Diferenca massiva em todos os numeros defensivos.' },
        { label: 'Experiencia UFC', valueA: 68, valueB: 45, labelA: 'Bom', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Brasil tem 8 lutas UFC. Thainara tem 2 (ambas vitorias). A experiencia de octogono e a unica vantagem concreta de Brasil.' },
        { label: 'Momentum e Momento', valueA: 30, valueB: 85, labelA: 'Ruim', labelB: 'Excelente', advantage: 'fighter2', advantage_note: 'Thainara em 11 vitorias seguidas. Brasil em 2 derrotas seguidas com turnaround de 2 meses. Quote de Thainara: "Naquela epoca eu nem sonhava com UFC, lutava mais pra estetica, pra ter um corpo bonito." Agora e outra pessoa.' },
      ],
      insight: 'A narrativa dessa luta e irresistivel. Brasil infligiu a UNICA derrota profissional de Thainara, uma guilhotina em novembro de 2019 no Thunder Fight 20. Desde aquele dia, Thainara acumulou 11 vitorias consecutivas, chegou ao UFC, submeteu Molly McCann no debut (forcando a aposentadoria de McCann) e ganhou POTN. Thainara admitiu: "Naquela epoca eu nem sonhava com UFC, lutava mais pra estetica, pra ter um corpo bonito." A evolucao e monstruosa. Brasil sabe o que vem: "Ela e muito boa no grappling, entao acredito que ela vai tentar me derrubar." O game plan de Brasil e trocar: "Vou bater nela forte e ela vai mudar." Mas com 2.66 SLpM contra 5.73, e 53% TDD contra 85% de conversao de takedowns, a matematica nao apoia o plano. Thainara treina com Luana Santos, Karine Silva e o coach Caio Borralho. O ecossistema brasileiro e forte.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Brasil', ko_tko: { count: 3, percent: 27 }, submission: { count: 2, percent: 18 }, decision: { count: 6, percent: 55 }, total_wins: 11 },
      fighter2: { nome: 'Thainara', ko_tko: { count: 0, percent: 0 }, submission: { count: 8, percent: 62 }, decision: { count: 5, percent: 38 }, total_wins: 13 },
      insight: 'Thainara e finalizadora nata: 62% das vitorias por submissao (8 finalizacoes), incluindo 5 mata-leoes e 3 armbars. ZERO nocautes na carreira. Ela nao nocauteia, ela submete. Brasil e mais diversificada (3 KOs, 2 subs, 6 decisoes) mas depende de decisoes (55%). O template de vitoria de Thainara e claro: takedown, passa guarda, sobe pra montada, forca a virada de costas, tranca o mata-leao. Foi exatamente isso que fez com McCann no UFC London.',
    },
    previsao_final: {
      winner_name: 'Alexia Thainara',
      winner_side: 'fighter2',
      predicted_method: 'Submissao R1-R2',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation: 'REVANCHE com narrativa pesada. Brasil venceu Thainara por guilhotina em novembro de 2019, a UNICA derrota profissional de Thainara. Desde aquele dia, Thainara venceu 11 lutas consecutivas, chegou ao UFC, submeteu Molly McCann no debut com mata-leao no R1 (forcando a aposentadoria de McCann) e ganhou POTN de $50k. A propria Thainara admitiu a transformacao: "Naquela epoca eu nem sonhava com UFC, lutava mais pra estetica, pra ter um corpo bonito." Os numeros confirmam a evolucao: 85% de conversao de takedowns, 85% de defesa de takedowns, 70% de defesa de strikes, 5.73 SLpM. Brasil, por outro lado, vem de 2 derrotas consecutivas (Wang Cong e Ketlen Souza), tem turnaround de menos de 2 meses, e sua defesa de takedown de 53% e preocupante contra alguem que converte 85%. Brasil sabe o que vem: "Ela e muito boa no grappling, entao acredito que ela vai tentar me derrubar." O plano de Brasil e striker: "Vou bater nela forte e ela vai mudar." Mas Thainara defende 70% dos strikes e produz o dobro de volume. Thainara treina com Luana Santos, Karine Silva e o coach Caio Borralho. O ecossistema e forte. A previsao e submissao porque o template e repetitivo: takedown, montada, virada de costas, mata-leao. Exatamente como fez com McCann. 8 submissoes em 13 vitorias (62% sub rate). Brasil com 53% TDD nao tem como impedir a sequencia.',
      x_factor: {
        title: 'A vinganca de 7 anos de Thainara',
        description: 'Brasil e a UNICA pessoa que derrotou Thainara profissionalmente. Essa luta carrega um peso emocional que vai alem de ranking ou dinheiro. Thainara trabalhou em construcao civil antes de chegar ao UFC. Agora tem a chance de apagar a unica mancha do cartel contra a mesma pessoa, no maior palco do esporte. A motivacao e visceral.',
      },
      upset_alert: {
        title: 'A guilhotina de 2019 ainda existe',
        description: 'Brasil ja provou que sabe finalizar Thainara. A guilhotina do R3 em 2019 foi rapida e tecnica (0:33 no round). Se Brasil conseguir encaixar o clinch e buscar a guilhotina novamente, pode repetir a historia. Brasil tem mais experiencia UFC (8 lutas vs 2) e ja viu Thainara perder. O fator psicologico da revanche pode funcionar pros dois lados.',
      },
      probabilities: {
        fighter1: { nome: 'Brasil', percent: 22 },
        fighter2: { nome: 'Thainara', percent: 76 },
        draw: 2,
      },
      value_picks: {
        moneyline: { pick: 'Thainara (-480 a -800)', reasoning: 'Thainara favorita pesada e justificada: 11 vitorias seguidas, 85% TD accuracy, 62% sub rate. Mas -800 nao tem NENHUM valor como aposta isolada. Nem em parlay vale a pena a esse preco.' },
        method: { pick: 'Thainara por Submissao (-110 a +120)', reasoning: '62% das vitorias de Thainara sao por finalizacao (8 subs: 5 RNC, 3 armbars). Brasil tem 53% TDD. O template e claro: takedown, montada, forca virada, RNC. Exatamente como McCann. A prop de sub e onde esta o valor real.' },
        over_under: { pick: 'Under 2.5 Rounds', rounds: 2.5, reasoning: 'Thainara submeteu McCann no R1. Com 85% de conversao de TDs contra 53% TDD, pode levar ao chao cedo e fechar rapido. A revanche adiciona urgencia: Thainara quer acabar isso sem dar tempo pra Brasil achar a guilhotina.' },
        best_value: 'Thainara por Submissao R1-R2 e a aposta mais afiada dessa luta. Ela tem 62% de sub rate, o template e repetitivo e comprovado (takedown, montada, RNC), Brasil tem 53% TDD que nao vai resistir a 85% de accuracy, e a motivacao de revanche tras urgencia extra. A ML a -800 e lixo puro. A prop de sub e onde o dinheiro inteligente vai.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = locale === 'en' ? translateAnalysis(analise) : analise;
  return <PrelimsAnalysisView analise={data} />;
}
