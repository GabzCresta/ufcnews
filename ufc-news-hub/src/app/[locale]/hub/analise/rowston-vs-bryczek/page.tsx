import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'rowston-vs-bryczek',
  evento_id: null,
  slug: 'rowston-vs-bryczek',
  titulo: 'Rowston vs Bryczek: Battle Giraffe Aquece em Casa',
  subtitulo:
    'Cam Rowston em 6 vitórias seguidas (12/14 finishes), camp City Kickboxing, em casa em Perth. Robert Bryczek vem de TKO sobre Brad Tavares mas tem 35 anos e jet lag Polônia→Perth. DraftKings: Rowston -260.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,90m', envergadura: '198cm', idade: 31, academia: 'City Kickboxing' },
      fighter2: { altura: '1,83m', envergadura: '191cm', idade: 35, academia: 'Veto Team Bielsko-Biała' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'TKO ou Decisão',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: { nome: 'Cameron Rowston', apelido: 'Battle Giraffe', record: '14-3-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  fighter2_info: { nome: 'Robert Bryczek', record: '18-6-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: '2 de Maio, 2026',
  evento_local: 'RAC Arena, Perth, Austrália',
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
      evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
      evento_data: '2 de Maio, 2026',
      evento_local: 'RAC Arena, Perth, Austrália',
      categoria_peso: 'Peso Médio (185 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Battle Giraffe Aquece em Casa',
      tagline_sub: 'Rowston 6-fight streak. Bryczek vem de TKO sobre Tavares mas 35 anos + jet lag PL→AUS.',
      fighter1: {
        nome_completo: 'Cameron "Battle Giraffe" Rowston',
        apelido: 'Battle Giraffe',
        sobrenome: 'Rowston',
        record: '14-3-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Sydney, Austrália | 31 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/ROWSTON_CAM_L_01-31.png?itok=dGbxFvWJ',
      },
      fighter2: {
        nome_completo: 'Robert Bryczek',
        apelido: '',
        sobrenome: 'Bryczek',
        record: '18-6-0',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Bielsko-Biała, Polônia | 35 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-02/BRYZCEK_ROBERT_L_02-10.png?itok=0gC9kqbk',
      },
    },
    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Reach + Idade + Hometown contra Power Regional',
      insight:
        'Rowston tem +5cm reach, +7cm altura, camp City Kickboxing, idade 31 vs 35, momentum 6 vitórias seguidas. Bryczek tem power real (5 KOs R1 streak regional, dropou Tavares 2x antes do TKO no R3), mas cardio caiu no R2-R3 vs Tavares (stalking sem ofensiva), perdeu 3 rounds completos vs Potieria. Polônia→Perth é 22h+ de jet lag — disadvantage logístico real. R8 N/A. Stats Rowston construídas em sample tiny (2 lutas UFC) contra Brundage (em queda) e Petroski.',
      tension: {
        truth_a: 'Rowston em 6V seguidas, 12/14 finishes, camp CKB elite (Adesanya/Ulberg/Hooker), home crowd Perth, +5cm reach.',
        truth_b: 'Bryczek dropou Tavares (UFC vet histórico) 2x e finalizou R3. Power R1 streak regional com 17-second KO. Se conectar primeiro, fim.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Cameron Rowston', color: 'red', momentum_score: 9, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: '6 vitórias seguidas. 2-0 UFC + DWCS 1-1. Last 2: TKO R2 sobre Brundage no UFC 325 Sydney (jan/2026), TKO R1 sobre Petroski no UFC Perth set/2025 (mesma arena). 12/14 W carreira por finalização.',
        recent_fights: [
          { date: 'Jan 2026', opponent: 'Cody Brundage', result: 'W', method: 'TKO R2 (4:08, G&P)', opponent_rank: 'UFC vet', quality_score: 3, quality_label: 'Bom', note: 'Quase guilhotina. Domínio R2.' },
          { date: 'Set 2025', opponent: 'Andre Petroski', result: 'W', method: 'TKO R1 (2:41)', opponent_rank: 'UFC vet', quality_score: 3, quality_label: 'Bom', note: 'Check left hook + GnP.' },
          { date: 'Ago 2025', opponent: 'Brandon Holmes', result: 'W', method: 'TKO R1 (2:58)', opponent_rank: 'DWCS', quality_score: 1, quality_label: 'Ruim', note: 'DWCS contract.' },
          { date: '2024', opponent: 'Regional', result: 'W', method: 'Finishes', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Eternal MMA streak.' },
          { date: 'Set 2022', opponent: 'Torrez Finney', result: 'L', method: 'Decisão', opponent_rank: 'DWCS', quality_score: 2, quality_label: 'Médio', note: 'Única loss recente. DWCS.' },
        ],
      },
      fighter2: {
        nome: 'Robert Bryczek', color: 'blue', momentum_score: 6, momentum_label: 'Em Recuperação', momentum_trend: 'ascending',
        momentum_note: 'Vem de TKO R3 sobre Brad Tavares no UFC Paris (set/2025) — dropou Tavares 2x. Antes: UD loss vs Potieria UFC Vegas 86 (fev/2024) onde cardio falhou. Pre-UFC: 5 KOs R1 streak (incluindo 17s). 35 anos + jet lag.',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Brad Tavares', result: 'W', method: 'TKO R3 (1:43)', opponent_rank: 'Top vet', quality_score: 4, quality_label: 'Muito Bom', note: 'Dropou Tavares 2x. Power genuína.' },
          { date: 'Fev 2024', opponent: 'Ihor Potieria', result: 'L', method: 'UD (30-27 x2 + 29-28)', opponent_rank: 'UFC ativo', quality_score: 2, quality_label: 'Médio', note: 'Cardio falhou 3R. Potieria short notice + 2.5lbs over.' },
          { date: 'Jul 2023', opponent: 'Krištofič', result: 'W', method: 'KO R1', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'Oktagon.' },
          { date: '2022', opponent: 'Robson', result: 'W', method: 'KO 17s R1', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'FEN.' },
          { date: 'Out 2020', opponent: 'Frasineac', result: 'W', method: 'TKO R5 (título FEN)', opponent_rank: 'Regional', quality_score: 1, quality_label: 'Ruim', note: 'FEN título.' },
        ],
      },
    },
    nivel_competicao: {
      fighter1: { nome: 'Rowston', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '6V-0D (últimas 6)', contra_top5: '0V-0D' },
      fighter2: { nome: 'Bryczek', media_oponentes: 3, media_oponentes_label: 'Bom', aproveitamento: '4V-1D (últimas 5)', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note: 'Sem oponentes em comum. Calibre similar. Bryczek enfrentou Tavares (vet histórico) que pesa mais que oponentes do Rowston.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.26, valueB: 3.5, maxVal: 6, format: 'decimal', note: 'Rowston volume superior, mas Bryczek number from Tavares fight only.' },
        { label: 'Defesa de Strikes (%)', valueA: 49, valueB: 50, maxVal: 100, format: 'percent', note: 'Defesa furada dos dois lados.' },
        { label: 'Strikes Absorvidos/Min', valueA: 2.37, valueB: 5.7, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Bryczek absorve muito (contra Tavares). Alerta.' },
        { label: 'Takedowns por 15 Min', valueA: 0.7, valueB: 0.2, maxVal: 5, format: 'decimal', note: 'Nem um nem outro wrestla muito.' },
        { label: 'Defesa de Takedown (%)', valueA: 28, valueB: 60, maxVal: 100, format: 'percent', note: 'Rowston TDD 28% é alerta vermelho. Mas Bryczek não wrestla.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '31 anos', fighter2: '35 anos', note: 'Rowston 4 anos mais novo.' },
        { label: 'Altura', fighter1: '1,90m', fighter2: '1,83m', note: 'Rowston +7cm.' },
        { label: 'Envergadura', fighter1: '198cm', fighter2: '191cm', note: 'Rowston +7cm reach.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'City Kickboxing (Auckland)', fighter2: 'Veto Team (Polônia)', note: 'CKB elite vs regional.' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Volume Striking', advantage: 'fighter1', gap: 2, note: 'Rowston SLpM 4.26.' },
        { label: 'Power R1', advantage: 'fighter2', gap: 2, note: 'Bryczek 5 KOs R1 streak regional + dropou Tavares.' },
        { label: 'Cardio 3R', advantage: 'fighter1', gap: 3, note: 'Bryczek caiu de produção contra Tavares no R2 + decisão perdida contra Potieria nos três rounds.' },
        { label: 'Reach Geometry', advantage: 'fighter1', gap: 3, note: '+7cm decisivo no pocket.' },
        { label: 'Defesa Submission', advantage: 'fighter2', gap: 1, note: 'Bryczek BJJ black belt (federação não confirmada).' },
        { label: 'Hometown', advantage: 'fighter1', gap: 3, note: 'Perth + jet lag Polônia.' },
      ],
      summary: 'Rowston ganha em geometria, cardio, hometown. Bryczek ganha em power R1. Se sobreviver R1, Rowston dita.',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Rowston', ko_tko: { count: 7, percent: 50 }, submission: { count: 6, percent: 43 }, decision: { count: 1, percent: 7 }, total_wins: 14 },
      fighter2: { nome: 'Bryczek', ko_tko: { count: 12, percent: 67 }, submission: { count: 1, percent: 6 }, decision: { count: 5, percent: 28 }, total_wins: 18 },
      insight: 'Rowston finisher (93% W). Bryczek mais bombs. Combined finish rate alto = poucas chances de decisão.',
    },
    previsao_final: {
      winner_name: 'Cameron Rowston', winner_side: 'fighter1',
      predicted_method: 'TKO ou Decisão', confidence_score: 6, confidence_label: 'MÉDIA',
      explanation:
        'Pick é Rowston por TKO ou decisão tardia. Vantagens convergem: idade -4 anos, +7cm reach, +7cm altura, hometown Perth (mesma arena onde finalizou Petroski 7 meses atrás), camp CKB elite, 6 vitórias seguidas. Bryczek tem janela R1 com power, mas cardio cai no R2-R3 e jet lag Polônia→Perth pesa. Convicção 6 honesta porque Bryczek pode acabar a luta em R1 se conectar (5 KOs R1 streak regional + 2 knockdowns vs Tavares).',
      x_factor: {
        title: 'Os primeiros 90 segundos',
        description: 'Bryczek precisa conectar R1 ou perde no cardio. Rowston precisa sobreviver R1 e ditar via reach + volume.',
      },
      upset_alert: {
        title: 'Bryczek conecta primeiro com power',
        description: 'Power real testada (knockdowns no Tavares + KO de 17 segundos no regional). Rowston tem defesa de strikes em 49% e foi abalado contra Topuria. Probabilidade aproximada de 30%.',
      },
      probabilities: { fighter1: { nome: 'Rowston', percent: 64 }, fighter2: { nome: 'Bryczek', percent: 33 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Rowston vence porque tem +7cm reach, +7cm altura, camp CKB, 4 anos a menos, momentum 6V seguidas, e Bryczek vem com jet lag PL→AUS de 22h+ aos 35 anos. Caminho: domina distância em pé, neutraliza power R1, vence em volume nos R2-R3 quando Bryczek cardio cair. Desmorona se Bryczek conectar primeiro com power (real, testada vs Tavares).',
        conviction_score: 6,
        conviction_rationale: 'Convicção 6 porque as vantagens são reais mas Bryczek tem janela de R1 documentada. Não é 7 porque Rowston tem defesa de strikes em 49% (foi abalado contra Topuria e contra Musasa) e Bryczek dropou Tavares duas vezes.',
        conviction_breakers: [
          'Bryczek conecta overhand right limpa em R1',
          'Jet lag não importa (Bryczek aclimatou em Auckland?)',
          'Rowston cardio cai antes do esperado (sample tiny)',
          'Power regional do Bryczek se traduz em UFC level',
        ],
        underdog_path: {
          viable: true, probability_estimate: 33,
          key_scenario: 'Bryczek aproveita os primeiros 3 minutos antes do reach do Rowston decidir, conecta overhand right ou hook que dropou Tavares. Termina KO R1 ou TKO R2.',
          required_conditions: ['Conectar limpo nos primeiros 3 minutos R1', 'Sobreviver pressure inicial do Rowston', 'Não ir ao chão (Rowston BJJ ativo)'],
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Round Group', pick: 'Over 1.5 Rounds', odds: '-180 a -150', reasoning: 'Rowston não terminou Brundage R1 nem Musasa R1. Bryczek terminou Tavares R3 não R1. Probabilidade real ~70% de passar 1.5R.' },
          { type: 'Moneyline', pick: 'Cameron Rowston', odds: '-260', reasoning: 'Polymarket 64%. Edge marginal mas alinhado.' },
          { type: 'Method', pick: 'Rowston por ITD', odds: '-150 a -180', reasoning: '12/14 W carreira por finalização. Probabilidade real ~50% finish.' },
          { type: 'Longshot', pick: 'Bryczek por KO em R1', odds: '+400 a +500', reasoning: 'Power real + janela R1 + Rowston Str.Def 49%. Probabilidade ~20%, paga 4-5x.' },
        ],
        best_bet: { pick: 'Over 1.5 Rounds em -180 a -150', reasoning: 'Mais defensável. Rowston não terminou em R1 vs Brundage/Musasa, Bryczek finalizou Tavares só no R3.' },
      },
      key_stats: [
        { value: '6V', label: 'Streak do Rowston', sublabel: '12/14 finishes carreira.' },
        { value: '+7cm', label: 'Reach do Rowston', sublabel: 'Mata pocket onde Bryczek opera.' },
        { value: '5 KOs', label: 'R1 streak regional do Bryczek', sublabel: 'Janela de power R1 real.' },
        { value: '22h+', label: 'Jet lag Polônia→Perth', sublabel: 'Disadvantage logístico do Bryczek.' },
      ],
      odds: { fighter1_odds: '-260', fighter2_odds: '+210', fighter1_name: 'Rowston', fighter2_name: 'Bryczek', source: 'DraftKings, Polymarket 64% Rowston em 25 de abril de 2026.' },
      armadilha: {
        titulo: 'Armadilha: Bryczek por KO em R1 em +400',
        descricao: 'O mercado paga e o público pega via narrativa "5 KOs R1 streak + dropou Tavares 2x". A armadilha: vs Tavares ele NÃO terminou em R1, nem R2 — foi até R3 1:43. O streak R1 foi regional (Polônia). Probabilidade real KO R1 contra Rowston (CKB camp, +7cm reach) é ~15-20%, não 25-30% que o mercado precifica em +300-400.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'rowston-vs-bryczek');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
