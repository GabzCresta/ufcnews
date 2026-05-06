import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'holland-vs-brown',
  evento_id: null,
  slug: 'holland-vs-brown',
  titulo: 'Holland vs Brown: Caos Contra Tecnica de Distancia',
  subtitulo:
    'Kevin Holland trocou o middleweight pelo welterweight buscando ritmo, mas terminou 2025 com 2-3. Randy Brown vem de uma vitória brutal e uma derrota brutal. Quem encontrar o ritmo primeiro decide a noite.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,93m', envergadura: '203cm', idade: 33, academia: 'Travis Lutter BJJ, Texas' },
      fighter2: { altura: '1,90m', envergadura: '198cm', idade: 35, academia: 'Renzo Gracie Academy, Nova York' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'TKO R2 ou Submissão R2',
    confidence: 'MÉDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Kevin Holland',
    apelido: 'Trailblazer',
    record: '28-15-0 (1 NC)',
    ranking: '#13 Peso Meio-Médio',
    ultimasLutas: [
      { result: 'L', opponent: 'Mike Malott', method: 'Decisão Unânime', event: 'UFC Fight Night 262' },
      { result: 'L', opponent: 'Daniel Rodriguez', method: 'Decisão Unânime', event: 'UFC 318' },
      { result: 'W', opponent: 'Vicente Luque', method: 'Submissão R2 (D\'Arce)', event: 'UFC 316' },
    ],
  },
  fighter2_info: {
    nome: 'Randy Brown',
    apelido: 'Rude Boy',
    record: '20-7-0',
    ranking: 'Não ranqueado',
    ultimasLutas: [
      { result: 'L', opponent: 'Gabriel Bonfim', method: 'KO R2', event: 'UFC Fight Night 264' },
      { result: 'W', opponent: 'Nicolas Dalby', method: 'KO R2', event: 'UFC ESPN 66' },
      { result: 'W', opponent: 'Wellington Turman', method: 'Decisão Unânime', event: 'UFC Fight Night' },
    ],
  },
  evento_nome: 'UFC 327: Procházka vs Ulberg',
  evento_data: '11 de Abril, 2026',
  evento_local: 'Kaseya Center, Miami, Flórida',
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
      evento_nome: 'UFC 327: Procházka vs Ulberg',
      evento_data: '11 de Abril, 2026',
      evento_local: 'Kaseya Center, Miami, Flórida',
      categoria_peso: 'Peso Meio-Médio (170 lbs)',
      num_rounds: 3,
      titulo_em_jogo: 'Prelims',
      tagline: 'Caos Contra Distância',
      tagline_sub:
        'Holland trocou o middleweight pelo welterweight em 2025 e terminou 2-3. Brown vem de um KO devastador. Quem encontrar o ritmo primeiro decide tudo.',
      fighter1: {
        nome_completo: 'Kevin "Trailblazer" Holland',
        apelido: 'Trailblazer',
        sobrenome: 'Holland',
        record: '28-15-0 (1 NC)',
        ranking: '#13 Peso Meio-Médio',
        info_extra: 'Riverside, Califórnia | 33 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-10%2FHOLLAND_KEVIN_L_10-18.png%3Fitok%3DWDQ_tDL3',
      },
      fighter2: {
        nome_completo: 'Randy "Rude Boy" Brown',
        apelido: 'Rude Boy',
        sobrenome: 'Brown',
        record: '20-7-0',
        ranking: 'Não ranqueado',
        info_extra: 'Kingston, Jamaica | 35 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-04%2FBROWN_RANDY_L_04-26.png%3Fitok%3Dy_hfS_g1',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'Quem Não Pode Mais Perder',
      insight:
        'Esta luta não tem narrativa romântica. Tem matemática de carreira. Kevin Holland terminou 2025 com 2-3 no welterweight, depois de tentar voltar do middleweight buscando um novo capítulo. As duas vitórias foram bonitas (Performance of the Night sobre Gunnar Nelson, finalização D\'Arce sobre Vicente Luque), mas as três derrotas mostraram o padrão de sempre: técnica inconstante, decisão incerta, momentos de brilho intercalados com lacunas defensivas. Randy Brown vem do oposto: nocauteou Nicolas Dalby brutalmente em abril, e foi nocauteado brutalmente por Gabriel Bonfim em novembro. O ranking #13 está em jogo para quem ganhar, e a saída do top 15 fica reservada para quem perder. Não há favorito moral, há favorito estatístico.',
      tension: {
        truth_a:
          'Holland tem 198 cm de envergadura, criatividade ofensiva imprevisível, e dois Performance of the Night em 2025. Quando ele encontra o ritmo, finaliza qualquer um (Vicente Luque levou submissão D\'Arce). É o tipo de lutador que pode roubar uma luta com um momento.',
        truth_b:
          'Brown tem 198 cm de envergadura também, jab disciplinado e a melhor técnica de distância pura entre os meio-médios não ranqueados. Mas vem de um KO recente brutal, e o histórico mostra que cede quando o adversário fecha a distância e impõe trocação caótica.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Kevin Holland',
        color: 'red',
        recent_fights: [
          {
            date: 'Out 2025',
            opponent: 'Mike Malott',
            result: 'L',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'UFC Fight Night 262. Perdeu para o canadense em uma luta polêmica que teve interrupção de 5 minutos por golpe baixo. Defesa cedeu nos rounds finais.',
          },
          {
            date: 'Jul 2025',
            opponent: 'Daniel Rodriguez',
            result: 'L',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC 318. Outra derrota por decisão. Mostrou que a técnica de Rodriguez expôs as lacunas do estilo caótico do Trailblazer.',
          },
          {
            date: 'Jun 2025',
            opponent: 'Vicente Luque',
            result: 'W',
            method: 'Submissão R2 (D\'Arce choke)',
            opponent_rank: 'N/R',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'UFC 316. Performance of the Night. Finalização limpa contra um veterano com bom grappling. Mostrou versatilidade.',
          },
          {
            date: 'Mar 2025',
            opponent: 'Gunnar Nelson',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC Fight Night 255. Performance of the Night. Defendeu o jogo de chão do Gunnar e impôs o ritmo dele.',
          },
          {
            date: 'Jan 2025',
            opponent: 'Reinier de Ridder',
            result: 'L',
            method: 'Submissão R1 (mata-leão)',
            opponent_rank: '#13 MW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC 311. Submissão rápida que motivou a volta para o welterweight. Foi a última luta no peso médio.',
          },
        ],
        momentum_score: 5,
        momentum_label: 'Em Recuperação',
        momentum_trend: 'stable',
        momentum_note:
          'Holland fechou 2025 com 2-3, depois de migrar de volta para o welterweight buscando o ritmo perdido. Os dois Performance of the Night mostraram que ele ainda tem o talento para vencer qualquer um quando o ritmo está certo. As três derrotas mostraram que ele ainda perde para opponents tecnicamente disciplinados que sabem expor as lacunas defensivas. É um lutador que vive de momentos, e essa luta exige consistência por 15 minutos.',
      },
      fighter2: {
        nome: 'Randy Brown',
        color: 'blue',
        recent_fights: [
          {
            date: 'Nov 2025',
            opponent: 'Gabriel Bonfim',
            result: 'L',
            method: 'KO R2',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'UFC Fight Night 264. Apagado por um soco brutal. Quebrou a sequência ascendente em uma noite difícil.',
          },
          {
            date: 'Abr 2025',
            opponent: 'Nicolas Dalby',
            result: 'W',
            method: 'KO R2',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC ESPN 66. Fight of the Night. Primeira premiação do tipo na carreira. Mostrou poder real.',
          },
          {
            date: 'Set 2024',
            opponent: 'Wellington Turman',
            result: 'W',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Vitória técnica controlada usando reach e movimentação. O estilo padrão do Brown.',
          },
          {
            date: 'Mar 2024',
            opponent: 'Bryan Battle',
            result: 'W',
            method: 'KO R3',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Outra finalização tardia. Manteve a sequência de vitórias antes do duelo com Dalby.',
          },
          {
            date: 'Set 2023',
            opponent: 'Muslim Salikhov',
            result: 'L',
            method: 'KO R2',
            opponent_rank: '#15 WW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'A última derrota antes do KO recente. Padrão se repete: vence vários, depois cai por nocaute brutal.',
          },
        ],
        momentum_score: 5,
        momentum_label: 'Bouncing Back',
        momentum_trend: 'stable',
        momentum_note:
          'Brown construiu uma sequência sólida de três vitórias (incluindo o KO sobre Dalby que rendeu Fight of the Night) antes de ser apagado pelo Bonfim em novembro. O padrão da carreira mostra um lutador técnico que vence quando controla a distância, mas que cede ao queixo quando perde o ritmo. Aos 35 anos, esse pattern começa a pesar.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Kevin Holland',
        media_oponentes: 3,
        media_oponentes_label: 'Bom',
        aproveitamento: '15V-12D (1NC) (55%)',
        contra_top5: '0V-3D',
      },
      fighter2: {
        nome: 'Randy Brown',
        media_oponentes: 3,
        media_oponentes_label: 'Bom',
        aproveitamento: '15V-6D (71%)',
        contra_top5: '0V-1D',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Sem oponentes em comum. Holland tem 28 lutas de UFC com cardápio mais variado entre middleweight e welterweight. Brown tem 21 lutas de UFC, todas no welterweight, contra opponents da mesma faixa de ranking. Holland leva vantagem em volume de luta e variação de estilo, Brown leva em consistência de divisão.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.2, valueB: 3.8, maxVal: 6, format: 'decimal' },
        { label: 'Precisão de Strikes (%)', valueA: 53, valueB: 49, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.8, valueB: 3.2, maxVal: 5, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 56, valueB: 60, maxVal: 100, format: 'percent', note: 'Brown tem leve vantagem técnica defensiva' },
        { label: 'Takedowns por 15 Min', valueA: 0.5, valueB: 0.7, maxVal: 3, format: 'decimal' },
        { label: 'Defesa de Takedown (%)', valueA: 65, valueB: 62, maxVal: 100, format: 'percent' },
        { label: 'Tentativas de Submissão por 15 Min', valueA: 1.5, valueB: 0.4, maxVal: 3, format: 'decimal', note: 'Holland é claramente mais ofensivo no chão' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '33 anos', fighter2: '35 anos' },
        { label: 'Altura', fighter1: '1,93m', fighter2: '1,90m' },
        { label: 'Envergadura', fighter1: '203cm', fighter2: '198cm' },
        { label: 'Stance', fighter1: 'Switch', fighter2: 'Orthodox' },
        { label: 'Academia', fighter1: 'Travis Lutter BJJ', fighter2: 'Renzo Gracie Academy' },
        { label: 'Experiência UFC', fighter1: '28 lutas', fighter2: '21 lutas' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter2',
          gap: 2,
          note: 'Brown é o tecnico de distância clássico: jab disciplinado, movimentação lateral, contra-ataque limpo. Holland prefere o caos.',
        },
        {
          label: 'Striking em Curta Distância',
          advantage: 'fighter1',
          gap: 2,
          note: 'Holland vive na trocação imprevisível. É onde a criatividade ofensiva dele se manifesta melhor.',
        },
        {
          label: 'Grappling Ofensivo',
          advantage: 'fighter1',
          gap: 3,
          note: 'A finalização D\'Arce sobre Vicente Luque mostrou que Holland tem um arsenal de submissões legítimo. Brown raramente ataca no chão.',
        },
        {
          label: 'Defesa de Striking',
          advantage: 'fighter2',
          gap: 1,
          note: 'Brown tem técnica de evasão melhor mas acabou de ser nocauteado. Holland também tem lacunas defensivas documentadas.',
        },
        {
          label: 'Cardio (3 rounds)',
          advantage: 'fighter1',
          gap: 1,
          note: 'Holland mantém ritmo por 15 minutos sem cansar. Brown teve problemas de gás em algumas lutas recentes.',
        },
        {
          label: 'Resiliência (após KO recente)',
          advantage: 'fighter1',
          gap: 2,
          note: 'Brown vem direto do KO brutal contra Bonfim em novembro. Holland teve mais tempo para reset mental entre lutas.',
        },
      ],
      summary:
        'Brown vence se conseguir manter a luta na média distância usando o reach e o jab. Holland vence se conseguir fechar a distância ou levar a luta para o chão, onde tem o arsenal de submissões. A pergunta é se Brown ainda confia no queixo dele depois do KO recente.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Kevin Holland',
        ko_tko: { count: 14, percent: 50 },
        submission: { count: 9, percent: 32 },
        decision: { count: 5, percent: 18 },
        total_wins: 28,
      },
      fighter2: {
        nome: 'Randy Brown',
        ko_tko: { count: 8, percent: 40 },
        submission: { count: 5, percent: 25 },
        decision: { count: 7, percent: 35 },
        total_wins: 20,
      },
      insight:
        'Holland tem 28 vitórias com 50 por cento de KO/TKO e 32 por cento de submissão, o arsenal mais variado dos dois. Brown tem 20 vitórias com 40 por cento de KO/TKO (8), 25 por cento de submissão (5) e 35 por cento de decisão (7). A diferença está no estilo: Holland busca finalização ativamente, Brown deixa acontecer por acúmulo. Em lutas recentes, Holland finalizou mais (Luque por D\'Arce, decisão sobre Gunnar).',
    },

    previsao_final: {
      winner_name: 'Kevin Holland',
      winner_side: 'fighter1',
      predicted_method: 'TKO R2 ou Submissão R2',
      confidence_score: 5,
      confidence_label: 'MÉDIA',
      explanation:
        'Esta é uma luta de moeda no ar onde a aposta no Holland depende do fato dele ter mais ferramentas ofensivas e estar vindo com mais tempo de recuperação que o Brown. Brown perdeu por KO há cinco meses, e voltar de uma derrota dessas é mais difícil aos 35 anos. Holland tem o arsenal de submissões (a finalização D\'Arce sobre Luque não foi sorte) e o caos imprevisível que pode quebrar a estrutura técnica do Rude Boy. O risco real é Brown manter a distância e vencer no jab por três rounds, mas Holland tem força suficiente para fechar a distância e capitalizar.',
      x_factor: {
        title: 'O Queixo do Brown Pós-KO',
        description:
          'Brown foi apagado pelo Bonfim há cinco meses. A primeira vez que ele entra no octógono depois de um KO recente é o teste mais difícil da carreira. Se Holland conectar um soco limpo nos primeiros minutos, o queixo pode ceder mais cedo.',
      },
      upset_alert: {
        title: 'Brown Por Decisão Técnica',
        description:
          'Se Brown conseguir manter a luta na média distância usando o reach de 198 cm e o jab disciplinado, ele pode controlar três rounds e vencer por decisão dominante. É exatamente o estilo que historicamente expõe as lacunas defensivas do Trailblazer.',
      },
      probabilities: {
        fighter1: { nome: 'Holland', percent: 55 },
        fighter2: { nome: 'Brown', percent: 43 },
        draw: 2,
      },
      odds: {
        fighter1_odds: '-130',
        fighter2_odds: '+105',
        fighter1_name: 'Kevin Holland',
        fighter2_name: 'Randy Brown',
        source: 'Média de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Kevin Holland',
            odds: '-130',
            reasoning:
              'Vantagem moderada baseada no fator pós-KO do Brown e no arsenal de submissões do Holland. Linha justa para o cenário mais provável.',
          },
          {
            type: 'Holland por submissão',
            pick: 'Holland por submissão',
            odds: '+250',
            reasoning:
              'A finalização D\'Arce sobre Luque mostrou que o jogo de chão do Trailblazer é real. Brown raramente busca takedown e tem grappling defensivo médio. Vale o shot.',
          },
          {
            type: 'Como termina (qualquer lutador)',
            pick: 'A luta termina por finalização',
            odds: '+125',
            reasoning:
              'Os dois preferem terminar a luta antes do tempo. 82 por cento das vitórias do Holland são finalizações (14 KO + 9 sub em 28), 65 por cento do Brown (8 KO + 5 sub em 20). Probabilidade combinada ainda favorece o finish.',
          },
        ],
        best_bet: {
          pick: 'Holland por submissão a +250',
          reasoning:
            'A combinação certa de probabilidade e retorno. O arsenal de chokes do Trailblazer foi confirmado contra Luque, e o Brown vem com a confiança balançada após o KO recente.',
        },
      },
      key_stats: [
        {
          value: '5',
          label: 'meses entre o KO sofrido pelo Brown e essa luta',
          sublabel: 'Bonfim apagou ele em novembro de 2025. Voltar de KO em curto tempo é estatisticamente difícil.',
        },
        {
          value: '2',
          label: 'Performance of the Night do Holland em 2025',
          sublabel: 'Gunnar Nelson (decisão) e Vicente Luque (submissão D\'Arce)',
        },
      ],
      armadilha: {
        titulo: 'Brown por nocaute',
        descricao:
          'O mercado paga bem em Brown por KO porque ele acabou de fazer um KO bonito sobre Dalby em abril. Mas Brown não é finalizador puro: a maioria das vitórias dele vem por decisão ou TKO tardio. Apostar no Brown por nocaute precoce é apostar contra o padrão de carreira dele.',
      },
      conviction: {
        thesis:
          'A tese é: Kevin Holland vence por dois motivos estruturais. Primeiro, ele tem o arsenal de submissões que confirmou contra Vicente Luque em junho de 2025 com uma finalização D\'Arce limpa, e Randy Brown raramente ataca no chão e tem grappling defensivo medíocre. Segundo, Brown vem direto do KO brutal contra Gabriel Bonfim em novembro de 2025, com apenas cinco meses de recuperação, e voltar de derrota por nocaute aos 35 anos é estatisticamente difícil contra um lutador imprevisível como Holland. O caminho é Holland fechar a distância nos primeiros minutos do R1, levar Brown ao chão ou impor trocação curta caótica, e capitalizar com finalização ou TKO no R2. Isso desmorona se Brown conseguir manter a luta na média distância usando os 198 cm de reach e o jab disciplinado por três rounds inteiros.',
        conviction_score: 5,
        conviction_rationale:
          'Convicção 5 honestamente porque é uma luta de moeda no ar onde os pilares estruturais favorecem levemente o Holland (fator pós-KO + arsenal de submissões) mas Brown tem técnica de distância pura superior. Não é convicção 6 porque Holland também tem inconsistência documentada e perdeu três das últimas cinco. Não é 4 porque o fator pós-KO é real e o jogo de chão do Trailblazer foi confirmado recentemente.',
        conviction_breakers: [
          'Se Brown conseguir manter a luta na média distância usando os 198 cm de envergadura e o jab disciplinado por três rounds, ele pode vencer por decisão técnica dominante.',
          'Se a inconsistência do Holland aparecer (padrão das três derrotas recentes por decisão), o Trailblazer pode ter momentos brilhantes mas perder a luta no acumulado.',
          'Se o queixo do Brown estiver mais resistente do que o KO recente sugere, a vantagem técnica de distância dele pode anular o caos do Holland.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 43,
          key_scenario:
            'Brown sai do canto mantendo distância máxima com jab e teep. Usa os 198 cm de reach para controlar onde a luta acontece. Quando Holland tenta fechar, Brown circula para fora e contra-ataca com cruzado. Por três rounds, mantém ritmo controlado e vence todos os rounds nos cards dos juízes. Decisão unânime 30-27 ou 29-28.',
          required_conditions: [
            'Manter a luta na média distância por todos os 15 minutos',
            'Usar o jab disciplinado e a movimentação lateral para evitar trocação curta',
            'Não ceder o queixo para o primeiro soco limpo do Holland',
            'Conservar o gás para os três rounds inteiros',
          ],
          historical_precedent:
            'Daniel Rodriguez vs Kevin Holland (UFC 318, julho de 2025): exatamente esse cenário. Rodriguez manteve distância, pontuou no jab, venceu por decisão unânime. Brown tem mais reach que Rodriguez e pode replicar o blueprint.',
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'holland-vs-brown');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
