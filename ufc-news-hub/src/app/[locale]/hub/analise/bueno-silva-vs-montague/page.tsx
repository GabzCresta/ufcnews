import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'bueno-silva-vs-montague',
  evento_id: null,
  slug: 'bueno-silva-vs-montague',
  titulo: 'Bueno Silva vs Montague: A Veterana e a Promessa Kiwi',
  subtitulo:
    'Mayra Bueno Silva em três derrotas nas últimas quatro, mas com finalização sobre Holly Holm no currículo. Michelle Montague é a primeira mulher da Nova Zelândia no UFC, 7-0 invicta, vindo de estreia dominante sobre Luana Carolina em Perth.',
  lutador1_id: null, lutador2_id: null, artigo_conteudo: '',
  tactical_breakdown: {
    stats: [], radarData: [],
    taleOfTape: { fighter1: { altura: '1,68m', envergadura: '170cm', idade: 34, academia: 'Nova União' }, fighter2: { altura: '1,73m', envergadura: '175cm', idade: 30, academia: 'American Top Team' } },
    pathsToVictory: { fighter1: [], fighter2: [] }, dangerZones: [],
  },
  fight_prediction: { predictedWinner: 'fighter2', predictedMethod: 'Decisão Unânime', confidence: 'MÉDIA', fighter1Scenarios: [], fighter2Scenarios: [], keyFactors: [], xFactor: { title: '', description: '' } },
  fighter1_info: { nome: 'Mayra Bueno Silva', apelido: 'Sheetara', record: '10-6-1', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  fighter2_info: { nome: 'Michelle Montague', apelido: 'The Wild One', record: '7-0-0', ranking: 'Sem ranking no top 15', ultimasLutas: [] },
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  categoria_peso: 'Peso-Galo Feminino (135 lbs)',
  num_rounds: 3, is_titulo: false, broadcast: null, status: 'published', analysis_type: 'full_single',
  created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Sterling vs Zalal',
      evento_data: '25 de Abril, 2026',
      evento_local: 'Meta APEX, Las Vegas, Nevada',
      categoria_peso: 'Peso-Galo Feminino (135 lbs)',
      num_rounds: 3, titulo_em_jogo: null,
      tagline: 'A Veterana e a Promessa Kiwi',
      tagline_sub: 'Bueno Silva com submissão sobre Holm no currículo. Montague 7-0 em ascensão.',
      fighter1: { nome_completo: 'Mayra "Sheetara" Bueno Silva', apelido: 'Sheetara', sobrenome: 'Bueno Silva', record: '10-6-1', ranking: 'Sem ranking no top 15', info_extra: 'Brasil | 34 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/BUENO_SILVA_MAYRA_L_04-25.png?itok=GwOeywkf' },
      fighter2: { nome_completo: 'Michelle "The Wild One" Montague', apelido: 'The Wild One', sobrenome: 'Montague', record: '7-0-0', ranking: 'Sem ranking no top 15', info_extra: 'Nova Zelândia | 30 anos', imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-09/MONTAGUE_MICHELLE_L_09-27.png?itok=RxyRVUZR' },
    },

    qualitative_insight: {
      tag: 'O PONTO QUE DECIDE',
      headline: 'Trajetória em Queda Contra Ascensão',
      insight:
        'A leitura essencial é de trajetórias opostas. Bueno Silva vem de três derrotas nas últimas quatro, perdeu pra Jacqueline Cavalcanti por decisão em novembro de 2025. Montague é 7-0, primeira mulher da Nova Zelândia no UFC, estreou com decisão unânime dominante sobre Luana Carolina em Perth. Cabe ressalva: o 7-0 de Montague foi construído no regional neozelandês, não comparável ao calibre que Bueno Silva enfrentou (Holly Holm, Raquel Pennington, Macy Chiasson). Se a luta for contra o melhor momento da Bueno Silva de 2024, Montague tem dificuldade. Mas o momentum atual e o pico físico favorecem a estreante.',
      tension: {
        truth_a: 'Bueno Silva submeteu Holly Holm por mata-leão no R1 em 2024 e disputou cinturão vago contra Pennington. O BJJ dela é elite. Contra estreante UFC de 7-0 regional, ela tem experiência absoluta.',
        truth_b: 'Montague tem 5 anos a menos, 5 cm de alcance a mais, e vem de estreia UFC onde defendeu todas as entradas e controlou ritmo. Se não errar na defesa de solo, tem caminho de decisão em pé.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Mayra Bueno Silva', color: 'red', momentum_score: 3, momentum_label: 'Em Queda', momentum_trend: 'descending',
        momentum_note: 'Três derrotas nas últimas quatro, a mais recente contra Jacqueline Cavalcanti por decisão unânime em novembro de 2025. Antes, TKO por Macy Chiasson no R2 em 2024. Só uma vitória no período, a histórica submissão sobre Holly Holm. A trajetória é descendente.',
        recent_fights: [
          { date: 'Nov 2025', opponent: 'Jacqueline Cavalcanti', result: 'L', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Cavalcanti controlou três rounds no striking.' },
          { date: '2024', opponent: 'Macy Chiasson', result: 'L', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Ritmo decrescente começou aqui.' },
          { date: '2024', opponent: 'Holly Holm', result: 'W', method: 'Submissão (mata-leão) R1', opponent_rank: 'Ex-Campeã', quality_score: 5, quality_label: 'Excelente', note: 'Vitória histórica sobre ex-campeã. Pico da carreira.' },
        ],
      },
      fighter2: {
        nome: 'Michelle Montague', color: 'blue', momentum_score: 8, momentum_label: 'Em Alta', momentum_trend: 'ascending',
        momentum_note: 'Primeira kiwi no UFC, 7-0 invicta, todas as seis vitórias profissionais antes da UFC foram por mata-leão. Estreou com decisão unânime dominante sobre Luana Carolina no UFC Perth em setembro de 2025. Fato curioso: Montague e Bueno Silva já foram companheiras de equipe no passado. O calibre pré-UFC foi majoritariamente PFL e regional, mas o padrão de finalizações e a estreia dominante sinalizam a trajetória.',
        recent_fights: [
          { date: 'Set 2025', opponent: 'Luana Carolina', result: 'W', method: 'Decisão Unânime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Médio', note: 'Estreia UFC dominante em Perth. Três rounds de controle.' },
          { date: 'Ago 2023', opponent: 'Abigail Montes', result: 'W', method: 'Submissão (mata-leão)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Vitória no Madison Square Garden no PFL. Padrão de finalização.' },
          { date: 'Pré-UFC', opponent: 'Circuito PFL/NZ', result: 'W', method: 'Submissão (mata-leão)', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Ruim', note: 'Seis vitórias profissionais pré-UFC, todas por mata-leão. Padrão consistente.' },
        ],
      },
    },

    nivel_competicao: {
      fighter1: { nome: 'Bueno Silva', media_oponentes: 4, media_oponentes_label: 'Muito Bom', aproveitamento: '1V-3D (últimas 4)', contra_top5: '1V-2D' },
      fighter2: { nome: 'Montague', media_oponentes: 2, media_oponentes_label: 'Médio', aproveitamento: '1V-0D UFC', contra_top5: '0V-0D' },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Nenhum oponente em comum. A diferença de calibre importa: Bueno Silva enfrentou Pennington, Holm, Chiasson, tudo top 10. Montague construiu 7-0 contra oposição neozelandesa e venceu Luana Carolina em estreia. Quando a tabela aponta o 7-0, leia com o contexto de que nunca enfrentou top 10.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Submissões por 15 Min', valueA: 1.8, valueB: 0.9, maxVal: 3, format: 'decimal', note: 'Bueno Silva com jogo de sub mais ativo.' },
        { label: 'Sig. Strikes por Minuto', valueA: 3.1, valueB: 4.2, maxVal: 6, format: 'decimal', note: 'Montague tem volume superior em pé.' },
        { label: 'Defesa de Takedown (%)', valueA: 58, valueB: 68, maxVal: 100, format: 'percent', note: 'Montague defende TD melhor.' },
        { label: 'Sig. Strikes Absorvidos/Min', valueA: 4.1, valueB: 2.8, maxVal: 6, format: 'decimal', reverseWinner: true, note: 'Bueno Silva absorve mais. Defesa em pé porosa contra strikers.' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '34 anos', fighter2: '30 anos', note: 'Montague 4 anos mais jovem.' },
        { label: 'Altura', fighter1: '1,68m', fighter2: '1,73m', note: 'Montague 5 cm mais alta.' },
        { label: 'Envergadura', fighter1: '170cm', fighter2: '175cm', note: 'Montague 5 cm de alcance a mais.' },
        { label: 'Postura', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Academia', fighter1: 'Nova União', fighter2: 'American Top Team', note: null },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        { label: 'Striking em Distância', advantage: 'fighter2', gap: 3, note: 'Montague tem 5 cm de alcance e boxe mais refinado. TKO sobre Carolina valida.' },
        { label: 'Grappling e BJJ', advantage: 'fighter1', gap: 3, note: 'Bueno Silva tem BJJ de elite. Submissão sobre Holm é prova.' },
        { label: 'Defesa de Takedown', advantage: 'fighter2', gap: 2, note: 'Montague defende TD consistentemente.' },
        { label: 'Experiência em Adversidade', advantage: 'fighter1', gap: 3, note: 'Bueno Silva lutou por título, enfrentou elite.' },
        { label: 'Cardio em 3 Rounds', advantage: 'fighter2', gap: 2, note: 'Montague no pico aos 30. Bueno Silva aos 34 com desgaste.' },
        { label: 'Poder de Nocaute', advantage: 'fighter2', gap: 1, note: 'Montague com leve vantagem em poder.' },
      ],
      summary: 'Montague tem vantagem em 4 das 6 dimensões. Bueno Silva tem BJJ e experiência como armas. Se não encaixar sub, perde nos cartões.',
    },

    distribuicao_vitorias: {
      fighter1: { nome: 'Bueno Silva', ko_tko: { count: 2, percent: 20 }, submission: { count: 6, percent: 60 }, decision: { count: 2, percent: 20 }, total_wins: 10 },
      fighter2: { nome: 'Montague', ko_tko: { count: 1, percent: 14 }, submission: { count: 5, percent: 71 }, decision: { count: 1, percent: 15 }, total_wins: 7 },
      insight: 'Ambas finalizam majoritariamente. Bueno Silva é BJJ-first brasileiro tradicional. Montague também tem 5 submissões em 7 vitórias. Se a luta vai ao chão, é grappler contra grappler com experiência UFC a favor de Bueno Silva.',
    },

    previsao_final: {
      winner_name: 'Michelle Montague', winner_side: 'fighter2',
      predicted_method: 'Decisão Unânime', confidence_score: 6, confidence_label: 'MÉDIA',
      explanation:
        'A análise aponta Montague por três motivos. Primeiro, a trajetória recente é oposta: Bueno Silva em 1-3, Montague em 7-0 com estreia UFC vitoriosa. Segundo, o gap físico é real: 4 anos, 5 cm. Terceiro, o estilo Montague de distância e wrestling derrota Bueno Silva quando ela não encaixa a submissão, como Pérez fez em 2024. A ressalva: Bueno Silva já finalizou Holly Holm e o BJJ é real. Se encaixar sub em scramble, vence. Mas 7-0 no regional não é 7-0 em nível UFC, e o 7-0 de Montague vem de oposição limitada. Convicção 6 porque a luta depende de cenário: se vai em pé, Montague; se vai ao chão, Bueno Silva.',
      x_factor: { title: 'A submissão sobre Holm', description: 'Bueno Silva submeteu Holly Holm por mata-leão em R1 em 2024. BJJ desse nível não some. Se Montague errar defesa de costas em scramble, luta acaba antes do R1.' },
      upset_alert: { title: 'Bueno Silva encontra uma submissão', description: 'Em 10 vitórias, 6 foram por submissão. Experiência UFC superior. Se Montague cair em transição de solo, Bueno Silva vira o jogo.' },
      probabilities: { fighter1: { nome: 'Bueno Silva', percent: 38 }, fighter2: { nome: 'Montague', percent: 59 }, draw: 3 },
      conviction: {
        thesis:
          'A tese é: Michelle Montague vence porque, primeiro, o momentum é oposto, 7-0 invicta com estreia UFC dominante contra 1-3 nas últimas quatro de Bueno Silva. Segundo, o gap físico de 5 cm de altura e 5 cm de alcance permite controle de distância em pé, onde Bueno Silva absorve 4,1 golpes/min e Montague aplica 4,2. Terceiro, o precedente de Ailín Pérez em junho de 2024 mostrou que Bueno Silva perde pro arquétipo de pressão e volume, que é exatamente o jogo de Montague. Desmorona se Bueno Silva encaixar uma submissão cedo ou se Montague não conseguir manter distância.',
        conviction_score: 6,
        conviction_rationale:
          'Convicção 6 porque o momentum e o gap físico favorecem Montague, mas o BJJ de Bueno Silva é real e validado contra Holm. A ressalva de calibre do 7-0 regional de Montague evita elevar convicção acima de 7.',
        conviction_breakers: [
          'Bueno Silva encaixar submissão em scramble de R1',
          'Montague cair em guarda fechada e não conseguir escape',
          'Bueno Silva conectar joelhada no clinch que derruba Montague',
        ],
        underdog_path: {
          viable: true, probability_estimate: 38,
          key_scenario: 'Bueno Silva força clinch cedo, busca takedown via agarrão, estabelece top control, transita para costas em scramble, encaixa mata-leão como contra Holm em 2024.',
          required_conditions: ['Fechar distância no R1', 'Forçar clinch na grade', 'Evitar troca em pé', 'Encaixar sub antes do R3 onde cardio pesa'],
          historical_precedent: 'Bueno Silva vs Holly Holm em 2024: mata-leão no R1 contra ex-campeã. Receita pode funcionar se Montague der as costas.',
        },
      },
      value_picks_v2: {
        picks: [
          { type: 'Moneyline', pick: 'Michelle Montague', odds: '-450', reasoning: 'Preço proibitivo que reflete consenso absoluto do mercado. A leitura casa com a tese mas o valor no ML direto é baixo nesse preço.' },
          { type: 'Método', pick: 'Montague por decisão', odds: '+150', reasoning: 'Se Montague vence, provavelmente é nos cartões como na estreia. Prop com melhor valor relativo que moneyline proibitivo.' },
        ],
        best_bet: { pick: 'Montague por decisão em +150', reasoning: 'ML em -450 exige 4,5 pra ganhar 1. Método específico paga 2,5x e casa com a leitura. Convicção 6 não sustenta ML pesado.' },
      },
      key_stats: [
        { value: '7-0', label: 'Record profissional de Montague', sublabel: 'Invicta, primeira kiwi no UFC. Majoritariamente no regional.' },
        { value: '1-3', label: 'Últimas 4 de Bueno Silva no UFC', sublabel: 'Trajetória descendente clara.' },
        { value: 'R1', label: 'Submissão de Bueno Silva sobre Holly Holm', sublabel: '2024. BJJ de elite é a única janela dela.' },
      ],
      odds: { fighter1_odds: '+340', fighter2_odds: '-450', fighter1_name: 'Bueno Silva', fighter2_name: 'Montague', source: 'bet365 e DraftKings em abril de 2026. Montague favoritíssima pela juventude e momentum, preço proibitivo.' },
      armadilha: {
        titulo: 'Armadilha: Montague por finalização',
        descricao: 'O mercado paga Montague por finalização em torno de +400 pelas 5 subs no regional. Mas em nível UFC, a estreia dela contra Carolina foi decisão dominante, não finalização. Se vai nela, vai por decisão, não por sub contra uma brasileira de BJJ validado.',
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'bueno-silva-vs-montague');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
