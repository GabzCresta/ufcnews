import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'radtke-vs-prado',
  evento_id: null,
  slug: 'radtke-vs-prado',
  titulo: 'Radtke vs Prado: O Veterano Contra o Argentino em Crise',
  subtitulo:
    'Charles "Chuck Buffalo" Radtke vem de uma submissão sobre Daniel Frunza. Francisco Prado vem de três derrotas seguidas e precisa salvar a carreira no UFC. A última prova do argentino.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,85m', envergadura: '188cm', idade: 31, academia: 'Valle Flow Striking, Califórnia' },
      fighter2: { altura: '1,80m', envergadura: '183cm', idade: 22, academia: 'American Top Team, Argentina' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'TKO R2 ou Submissão R2',
    confidence: 'MÉDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Charles Radtke',
    apelido: 'Chuck Buffalo',
    record: '11-5-0',
    ranking: 'Não ranqueado',
    ultimasLutas: [
      { result: 'W', opponent: 'Daniel Frunza', method: 'Submissão R2 (mata-leão)', event: 'UFC Fight Night' },
      { result: 'L', opponent: 'Mike Malott', method: 'KO R2', event: 'UFC 315' },
      { result: 'W', opponent: 'Carlston Harris', method: 'KO R1', event: 'UFC Fight Night' },
    ],
  },
  fighter2_info: {
    nome: 'Francisco Prado',
    apelido: 'Prado',
    record: '12-4-0',
    ranking: 'Não ranqueado',
    ultimasLutas: [
      { result: 'L', opponent: 'Nikolay Veretennikov', method: 'Decisão Dividida', event: 'UFC 318' },
      { result: 'L', opponent: 'Jake Matthews', method: 'Decisão Unânime', event: 'UFC 312' },
      { result: 'L', opponent: 'Daniel Zellhuber', method: 'Decisão Unânime', event: 'UFC Fight Night' },
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
      titulo_em_jogo: 'Early Prelims',
      tagline: 'A Última Chance do Argentino',
      tagline_sub:
        'Radtke vem de submissão. Prado vem de três derrotas seguidas. Quem perder esse aqui pode estar saindo do UFC.',
      fighter1: {
        nome_completo: 'Charles "Chuck Buffalo" Radtke',
        apelido: 'Chuck Buffalo',
        sobrenome: 'Radtke',
        record: '11-5-0',
        ranking: 'Não ranqueado',
        info_extra: 'Buffalo, Nova York | 31 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-10%2FRADTKE_CHARLES_L_11-01.png%3Fitok%3Dd__y_3_A',
      },
      fighter2: {
        nome_completo: 'Francisco Prado',
        apelido: 'Prado',
        sobrenome: 'Prado',
        record: '12-4-0',
        ranking: 'Não ranqueado',
        info_extra: 'San Lorenzo, Argentina | 22 anos',
        imagem_fullbody_url:
          '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-07%2FPRADO_FRANCISCO_L_07-19.png%3Fitok%3Dv7-DfKx2',
      },
    },

    qualitative_insight: {
      tag: 'O FATOR-X DA LUTA',
      headline: 'A Última Chance Do Argentino',
      insight:
        'Esta luta tem peso de carreira de um lado só. Charles Radtke é veterano de short notice classe média do UFC, está 4-2 no octógono, vem de uma submissão clara sobre Daniel Frunza em novembro de 2025. Francisco Prado é um talento argentino de apenas 22 anos que ganhou Performance of the Night na estreia em 2023, mas vem de três derrotas consecutivas, todas por decisão. O recorde no UFC dele é 1-4 e a próxima derrota provavelmente significa corte do roster. Aos 22 anos, ainda é jovem o suficiente para reset, mas a margem de erro chegou a zero. Radtke é o adversário errado para isso: experiente, com poder real, e sem nada para perder também.',
      tension: {
        truth_a:
          'Prado tem 22 anos, é o mais jovem do card, treina no American Top Team, e ganhou Performance of the Night na estreia UFC em 2023. O talento bruto é real e a curva de evolução pode ainda virar.',
        truth_b:
          'Prado é 1-4 no UFC, vem de três derrotas consecutivas, todas por decisão (mostrando que ele compete mas não consegue fechar). Radtke tem três finishes em quatro vitórias UFC, é cinco anos mais velho com cinco anos a mais de experiência ao nível do octógono.',
      },
    },

    momento_atual: {
      fighter1: {
        nome: 'Charles Radtke',
        color: 'red',
        recent_fights: [
          {
            date: 'Nov 2025',
            opponent: 'Daniel Frunza',
            result: 'W',
            method: 'Submissão R2 (mata-leão)',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Vitória por finalização limpa. Mostrou que tem jogo de chão real além do striking de Buffalo.',
          },
          {
            date: 'Mai 2025',
            opponent: 'Mike Malott',
            result: 'L',
            method: 'KO R2',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC 315. Apagado por um lutador em ascensão. Mostrou que tem queixo cedente em pé.',
          },
          {
            date: 'Out 2024',
            opponent: 'Carlston Harris',
            result: 'W',
            method: 'KO R1',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Finalização rápida. Manteve o padrão de 4-2 no UFC com vitórias por finish.',
          },
          {
            date: 'Mar 2024',
            opponent: 'Anthony Hernandez',
            result: 'L',
            method: 'TKO R3',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Apagado nos rounds finais. Padrão das duas derrotas: cede para opponents tecnicamente superiores quando a luta engata.',
          },
        ],
        momentum_score: 6,
        momentum_label: 'Em Recuperação',
        momentum_trend: 'stable',
        momentum_note:
          'Radtke é 4-2 no UFC com três finalizações em quatro vitórias. Vem de uma submissão limpa sobre Frunza em novembro de 2025, mostrando que tem jogo completo (striking de poder + grappling). Aos 31 anos é veterano de classe média do UFC: não vai virar contender, mas sabe vencer opponents do mesmo nível dele.',
      },
      fighter2: {
        nome: 'Francisco Prado',
        color: 'blue',
        recent_fights: [
          {
            date: 'Jul 2025',
            opponent: 'Nikolay Veretennikov',
            result: 'L',
            method: 'Decisão Dividida',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'UFC 318. Terceira derrota consecutiva, em decisão dividida apertada. Mostrou que compete mas não fecha.',
          },
          {
            date: 'Fev 2025',
            opponent: 'Jake Matthews',
            result: 'L',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'UFC 312. Estreia no welterweight. Perdeu por decisão para o veterano australiano. Outra derrota apertada.',
          },
          {
            date: 'Fev 2024',
            opponent: 'Daniel Zellhuber',
            result: 'L',
            method: 'Decisão Unânime',
            opponent_rank: 'N/R',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Fight of the Night. Guerra técnica de três rounds que ele perdeu nos cards. Início da sequência negativa.',
          },
          {
            date: 'Jul 2023',
            opponent: 'Ottman Azaitar',
            result: 'W',
            method: 'TKO R1',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Médio',
            note: 'Estreia no UFC com Performance of the Night. A única vitória até agora.',
          },
        ],
        momentum_score: 3,
        momentum_label: 'Em Crise',
        momentum_trend: 'descending',
        momentum_note:
          'Prado tem 22 anos e é 1-4 no UFC, com três derrotas consecutivas todas por decisão. O padrão é claro: o argentino compete em todos os rounds, mas não consegue fechar nenhuma. Ele subiu para o welterweight em 2025 buscando reset físico, mas o resultado foi mais uma derrota. A próxima derrota provavelmente significa corte do roster. Aos 22 anos é jovem para reset em outra organização, mas dentro do UFC a margem chegou a zero.',
      },
    },

    nivel_competicao: {
      fighter1: {
        nome: 'Charles Radtke',
        media_oponentes: 2,
        media_oponentes_label: 'Médio',
        aproveitamento: '4V-2D (67%)',
        contra_top5: '0V-0D',
      },
      fighter2: {
        nome: 'Francisco Prado',
        media_oponentes: 3,
        media_oponentes_label: 'Bom',
        aproveitamento: '1V-4D (20%)',
        contra_top5: '0V-0D',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Sem oponentes em comum. Radtke tem cardápio de welterweights de classe média. Prado começou no lightweight, subiu para welterweight em 2025. Os dois estão na mesma faixa de nível mas Prado tem o cardápio levemente mais difícil.',
    },

    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 4.0, valueB: 5.5, maxVal: 7, format: 'decimal', note: 'Prado é mais agressivo no volume mas não fecha' },
        { label: 'Precisão de Strikes (%)', valueA: 48, valueB: 51, maxVal: 100, format: 'percent' },
        { label: 'Strikes Absorvidos/Min', valueA: 4.2, valueB: 4.8, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 53, valueB: 50, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 0.8, valueB: 0.5, maxVal: 3, format: 'decimal' },
        { label: 'Defesa de Takedown (%)', valueA: 60, valueB: 55, maxVal: 100, format: 'percent' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '31 anos', fighter2: '22 anos' },
        { label: 'Altura', fighter1: '1,85m', fighter2: '1,80m' },
        { label: 'Envergadura', fighter1: '188cm', fighter2: '183cm' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox' },
        { label: 'Academia', fighter1: 'Valle Flow Striking', fighter2: 'American Top Team' },
        { label: 'Experiência UFC', fighter1: '6 lutas', fighter2: '5 lutas' },
      ],
    },

    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distância',
          advantage: 'fighter2',
          gap: 1,
          note: 'Prado tem volume e juventude. Radtke é mais bruto mas menos preciso.',
        },
        {
          label: 'Striking em Curta Distância',
          advantage: 'fighter1',
          gap: 2,
          note: 'Radtke prefere a curta onde o poder bruto importa. É onde o Buffalo encontra os opponents.',
        },
        {
          label: 'Wrestling',
          advantage: 'fighter1',
          gap: 1,
          note: 'Radtke tem leve vantagem. A submissão sobre Frunza confirmou o jogo de chão.',
        },
        {
          label: 'Capacidade de Finalização',
          advantage: 'fighter1',
          gap: 3,
          note: 'Três finishes em quatro vitórias UFC do Radtke. Prado tem zero finalização desde a estreia.',
        },
        {
          label: 'Estado Mental (após sequência ruim)',
          advantage: 'fighter1',
          gap: 2,
          note: 'Radtke vem de vitória. Prado vem de três derrotas consecutivas com confiança balançada.',
        },
        {
          label: 'Juventude e Potencial',
          advantage: 'fighter2',
          gap: 3,
          note: '22 anos vs 31 anos. Prado tem o tempo e o motor a favor mesmo na crise.',
        },
      ],
      summary:
        'Radtke vence se conseguir impor pressão e capitalizar com finalização ou nocaute. Prado vence se conseguir manter ritmo de pressão por três rounds e finalmente fechar uma luta apertada. A pergunta é se a juventude do argentino aguenta a confiança balançada em uma luta de must-win.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Charles Radtke',
        ko_tko: { count: 5, percent: 45 },
        submission: { count: 3, percent: 27 },
        decision: { count: 3, percent: 27 },
        total_wins: 11,
      },
      fighter2: {
        nome: 'Francisco Prado',
        ko_tko: { count: 6, percent: 50 },
        submission: { count: 6, percent: 50 },
        decision: { count: 0, percent: 0 },
        total_wins: 12,
      },
      insight:
        'Os dois são finalizadores no histórico geral. Radtke tem 73 por cento de vitórias por finalização (5 KO, 3 submissões, 3 decisões em 11). Prado é o finalizador puro: 100 por cento das 12 vitórias foram antes do tempo, com distribuição exata entre 6 KO e 6 submissões. Mas todas as 4 derrotas de Prado no UFC foram por decisão, ele compete mas não consegue gerar o finish no octógono.',
    },

    previsao_final: {
      winner_name: 'Charles Radtke',
      winner_side: 'fighter1',
      predicted_method: 'TKO R2 ou Submissão R2',
      confidence_score: 7,
      confidence_label: 'MÉDIA-ALTA',
      explanation:
        'Esta luta favorece claramente o Radtke por três motivos convergentes. Primeiro, ele vem de uma vitória recente por finalização (Frunza, novembro de 2025) enquanto Prado vem de três derrotas consecutivas com confiança balançada. Segundo, Radtke tem três finalizações em quatro vitórias UFC, enquanto Prado nunca finalizou no UFC. Terceiro, o estado mental do argentino em uma luta must-win contra um veterano experiente de short notice é o pior cenário possível. Aos 22 anos Prado tem talento bruto, mas a margem de erro chegou a zero e esse não é o adversário certo para o reset. O cenário mais provável é Radtke impondo pressão por dois rounds e capitalizando com nocaute ou submissão antes do tempo.',
      x_factor: {
        title: 'O Estado Mental do Prado',
        description:
          'Prado entra em uma luta de must-win contra um veterano que sabe finalizar. Se a confiança balançada das três derrotas aparecer no R1, Radtke vai capitalizar rapidamente. Se Prado entrar em modo "última chance" com agressão total, pode produzir o melhor desempenho da carreira UFC.',
      },
      upset_alert: {
        title: 'Prado Por Volume e Juventude',
        description:
          'Aos 22 anos, Prado ainda tem o motor e a explosão que Radtke perdeu. Se ele conseguir impor ritmo de pressão por três rounds e finalmente fechar uma luta apertada, o talento bruto que ganhou Performance of the Night em 2023 pode aparecer. É o único caminho real do upset.',
      },
      probabilities: {
        fighter1: { nome: 'Radtke', percent: 70 },
        fighter2: { nome: 'Prado', percent: 28 },
        draw: 2,
      },
      odds: {
        fighter1_odds: '-230',
        fighter2_odds: '+175',
        fighter1_name: 'Charles Radtke',
        fighter2_name: 'Francisco Prado',
        source: 'Média de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Charles Radtke',
            odds: '-230',
            reasoning:
              'Linha justa para o cenário mais provável. Radtke + sequência negativa do Prado = aposta correta sem grande valor.',
          },
          {
            type: 'Método',
            pick: 'Radtke por finalização',
            odds: '+150',
            reasoning:
              'Três finishes em quatro vitórias UFC. Se Radtke vencer, o método mais provável é antes do tempo. Vale a aposta.',
          },
          {
            type: 'Como termina',
            pick: 'A luta termina por finalização (qualquer lutador)',
            odds: '+105',
            reasoning:
              'Radtke é finalizador. Prado tem queixo questionável e vem mentalmente abalado. Probabilidade alta de finish.',
          },
        ],
        best_bet: {
          pick: 'Radtke por finalização a +150',
          reasoning:
            'A combinação certa de probabilidade alta e retorno positivo. Cenário mais provável é Radtke pressionando até o finish no R2 ou R3.',
        },
      },
      key_stats: [
        {
          value: '3',
          label: 'derrotas consecutivas do Prado, todas por decisão',
          sublabel: 'Padrão de quem compete mas não fecha. 1-4 no UFC inteiro.',
        },
        {
          value: '3/4',
          label: 'das vitórias do Radtke no UFC vieram por finalização',
          sublabel: 'Frunza (mata-leão), Carlston Harris (KO R1), e o terceiro finish na carreira do Buffalo',
        },
      ],
      armadilha: {
        titulo: 'Prado por nocaute',
        descricao:
          'O mercado paga bem em Prado por KO porque ele tem 6 nocautes e 6 submissões na carreira, todas as 12 vitórias por finalização. Mas todas as 4 derrotas no UFC dele foram por decisão, mostrando que ele compete bem mas não consegue gerar o finish quando chega ao octógono. Apostar em Prado por nocaute é caçar o talento bruto do regional, não o padrão UFC.',
      },
      conviction: {
        thesis:
          'A tese é: Charles Radtke vence por três motivos convergentes que não admitem contra-argumento. Primeiro, ele vem de uma vitória recente por finalização sobre Daniel Frunza (mata-leão no R2, novembro de 2025) enquanto Prado vem de três derrotas consecutivas todas por decisão. Segundo, Radtke tem três finishes em quatro vitórias UFC mostrando que sabe terminar a luta, enquanto Prado é 1-4 no UFC inteiro com a única vitória sendo a estreia em 2023. Terceiro, o estado mental do argentino em uma luta de must-win contra um veterano experiente é o pior cenário psicológico possível, especialmente aos 22 anos com a confiança balançada. O caminho é Radtke impondo pressão nos primeiros minutos do R1, capitalizando com finalização ou nocaute antes do R3. Isso desmorona apenas se Prado conseguir converter o talento bruto da estreia (Performance of the Night) em uma versão final-de-carreira do Buffalo.',
        conviction_score: 7,
        conviction_rationale:
          'Convicção 7 porque três pilares apontam todos para o mesmo lado: momentum recente, capacidade de finalização documentada, e estado mental do oponente. Não é convicção 8 porque a juventude do Prado é uma carta na manga real e o talento da estreia ainda existe em algum lugar. Não é 6 porque a convergência dos sinais é tão clara quanto o Gamrot vs Ribovics em magnitude.',
        conviction_breakers: [
          'Se Prado encontrar a versão da estreia UFC (Performance of the Night sobre Azaitar) com agressão total de "última chance", o talento bruto pode resolver tudo no R1.',
          'Se a idade do Radtke (31 anos) cobrar fatura em forma de cardio cedente nos rounds finais, o motor jovem do Prado pode roubar uma decisão.',
          'Se Radtke entrar com excesso de confiança após a vitória sobre Frunza e subestimar o talento bruto do argentino, pode ser surpreendido.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 28,
          key_scenario:
            'Prado entra em modo "última chance" com agressão total desde o primeiro toque de luvas. Reencontra a versão da estreia UFC quando ganhou Performance of the Night sobre Azaitar. Conecta um soco limpo no queixo do Radtke nos primeiros 90 segundos, antes do veterano achar o ritmo. Ou, alternativamente, mantém ritmo de pressão por três rounds e finalmente fecha uma luta apertada nos cards.',
          required_conditions: [
            'Reencontrar o talento bruto da estreia UFC (julho de 2023)',
            'Conectar um soco limpo no queixo do Radtke antes do R2',
            'Manter ritmo de pressão por três rounds inteiros',
            'Que o estado mental aguente a pressão da luta de must-win',
          ],
          historical_precedent:
            'Francisco Prado vs Ottman Azaitar (UFC, julho de 2023): a estreia que rendeu Performance of the Night. TKO no R1 com talento bruto puro. Se essa versão aparecer, Radtke pode ser apagado.',
        },
      },
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'radtke-vs-prado');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
