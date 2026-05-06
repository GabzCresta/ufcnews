import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';

const analise: PrelimsAnalise = {
  id: 'kamaka-vs-hope',
  evento_id: null,
  slug: 'kamaka-vs-hope',
  titulo: 'Kamaka vs Hope',
  subtitulo: null,
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '', envergadura: '', idade: 0, academia: '' },
      fighter2: { altura: '', envergadura: '', idade: 0, academia: '' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'Sub R2',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Kai Kamaka III',
    record: '17-7-1',
    ultimasLutas: [],
  },
  fighter2_info: {
    nome: 'Dakota Hope',
    record: '11-1-0',
    ultimasLutas: [],
  },
  evento_nome: 'UFC Fight Night: Moicano vs Duncan',
  evento_data: '4 de Abril, 2026',
  evento_local: 'UFC APEX, Las Vegas, Nevada, EUA',
  categoria_peso: 'Peso Leve',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'prelims',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),

  prelims_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Moicano vs Duncan',
      evento_data: '4 de Abril, 2026',
      categoria_peso: 'Peso Leve',
      num_rounds: 3,
      is_titulo: false,
      fighter1: {
        nome: 'Kamaka III',
        record: '17-7-1',
      },
      fighter2: {
        nome: 'Hope',
        record: '11-1-0',
      },
    },

    comparacao_estatistica: {
      stats: [
        {
          label: 'Sig. Strikes por Minuto',
          valueA: 4.96,
          valueB: 0.00,
          maxVal: 7,
          format: 'decimal',
          note: 'Kamaka tem volume alto com 4.96 SLpM, top tier para peso-leve. Hope nao tem stats do UFC ainda (estreia), entao nao ha comparacao direta.',
        },
        {
          label: 'Precisao de Strikes (%)',
          valueA: 57,
          valueB: 0,
          maxVal: 100,
          format: 'percent',
          note: 'Kamaka com 57% de precisao e acima da media. Hope sem dados do UFC, impossivel comparar diretamente.',
        },
        {
          label: 'Strikes Absorvidos/Min',
          valueA: 5.29,
          valueB: 0.00,
          maxVal: 7,
          format: 'decimal',
          reverseWinner: true,
          note: 'Kamaka absorve 5.29 strikes por minuto, numero preocupante. Mostra que ele troca pesado mas tambem leva muito. Sem dados de Hope para comparar.',
        },
        {
          label: 'Defesa de Strikes (%)',
          valueA: 55,
          valueB: 0,
          maxVal: 100,
          format: 'percent',
          note: 'Kamaka com 55% de defesa esta na media. Novamente, sem baseline para Hope.',
        },
        {
          label: 'Takedowns por 15 Min',
          valueA: 1.93,
          valueB: 0.00,
          maxVal: 4,
          format: 'decimal',
          note: 'Kamaka busca takedowns com 58% de precisao, numero solido. Hope como estreante nao tem dados, mas seu record regional sugere forte grappling.',
        },
        {
          label: 'Precisao de Takedown (%)',
          valueA: 58,
          valueB: 0,
          maxVal: 100,
          format: 'percent',
          note: 'Kamaka converte mais da metade das tentativas de queda. Bom numero que mostra versatilidade alem do striking.',
        },
        {
          label: 'Defesa de Takedown (%)',
          valueA: 52,
          valueB: 0,
          maxVal: 100,
          format: 'percent',
          note: 'Kamaka defende apenas 52% dos takedowns, abaixo da media. Contra um grappler potente, isso pode ser problema.',
        },
      ],
      tale_of_tape: [
        {
          label: 'Idade',
          fighter1: '31 anos',
          fighter2: '29 anos',
          note: 'Kamaka com 2 anos a mais, ambos no auge atletico',
        },
        {
          label: 'Altura',
          fighter1: '1,70m (5\'7")',
          fighter2: '1,68m (5\'6")',
          note: 'Kamaka com leve vantagem de 2cm, ambos abaixo da media para peso-leve',
        },
        {
          label: 'Envergadura',
          fighter1: '175cm (69")',
          fighter2: '173cm (68")',
          note: 'Envergaduras quase identicas, sem vantagem significativa para nenhum lado',
        },
        {
          label: 'Stance',
          fighter1: 'Ortodoxa',
          fighter2: 'N/D',
          note: 'Hope nao tem stance registrada no UFCStats, provavelmente primeira luta no octogono',
        },
        {
          label: 'Academia',
          fighter1: 'Hawaii, EUA',
          fighter2: 'EUA',
          note: null,
        },
      ],
    },

    historico_lutas: {
      fighter1: {
        nome: 'Kamaka III',
        recent_fights: [
          {
            date: 'Jul 2021',
            opponent: 'Danny Chavez',
            result: 'D',
            method: 'Decisao Majoritaria (Empate)',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Empate por decisao majoritaria contra Chavez. Luta competitiva com numeros proximos (48 a 41 strikes).',
          },
          {
            date: 'Mai 2021',
            opponent: 'TJ Brown',
            result: 'L',
            method: 'Decisao Dividida',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Derrota apertada por decisao dividida. Kamaka derrubou Brown mas nao conseguiu manter o controle. Teve 1 knockdown no fight.',
          },
          {
            date: 'Nov 2020',
            opponent: 'Jonathan Pearce',
            result: 'L',
            method: 'KO/TKO R2',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Nocauteado no segundo round por Pearce. Kamaka foi superado no volume (51 a 47 strikes) e nao conseguiu defender o takedown.',
          },
          {
            date: 'Ago 2020',
            opponent: 'Tony Kelley',
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Vitoria solida por decisao com volume impressionante (114 strikes significativos em 3 rounds). Mostrou seu melhor atributo: volume de strikes.',
          },
        ],
      },
      fighter2: {
        nome: 'Hope',
        recent_fights: [
          {
            date: 'N/D',
            opponent: 'Circuito Regional',
            result: 'W',
            method: 'Varias',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Hope vem com record de 11-1 do circuito regional. Estreia no UFC sem historico de lutas no octogono. Apelido "Huracan" sugere estilo agressivo.',
          },
        ],
      },
    },

    perfil_habilidades: {
      skills: [
        {
          label: 'Volume de Strikes',
          valueA: 78,
          valueB: 50,
          labelA: 'Muito Bom',
          labelB: 'Medio',
          advantage: 'fighter1',
          advantage_note: 'Kamaka com 4.96 SLpM e 57% de precisao e um striker de alto volume. Sem dados de Hope, assumimos nivel medio baseado no circuito regional.',
        },
        {
          label: 'Experiencia no UFC',
          valueA: 70,
          valueB: 25,
          labelA: 'Bom',
          labelB: 'Ruim',
          advantage: 'fighter1',
          advantage_note: 'Kamaka tem 5 lutas no UFC (1-3-1) com experiencia contra nomes como Pearce e Brown. Hope faz sua estreia absoluta no octogono. A diferenca de experiencia e o maior trunfo de Kamaka.',
        },
        {
          label: 'Record e Momentum',
          valueA: 50,
          valueB: 75,
          labelA: 'Medio',
          labelB: 'Muito Bom',
          advantage: 'fighter2',
          advantage_note: 'Hope tem 11-1 com apenas 1 derrota na carreira. Kamaka esta 1-3-1 nas ultimas 5, com quase 5 anos desde sua ultima vitoria no UFC. O momentum esta completamente do lado de Hope.',
        },
        {
          label: 'Wrestling e Takedowns',
          valueA: 62,
          valueB: 55,
          labelA: 'Bom',
          labelB: 'Bom',
          advantage: 'even',
          advantage_note: 'Kamaka tem 58% de precisao em takedowns com 1.93 TDs por 15 min. Hope nao tem dados UFC mas 11-1 no regional sugere capacidade. Sem dados concretos para Hope, consideramos equilibrado.',
        },
        {
          label: 'Defesa e Absorcao',
          valueA: 48,
          valueB: 55,
          labelA: 'Medio',
          labelB: 'Bom',
          advantage: 'fighter2',
          advantage_note: 'Kamaka absorve 5.29 SLpM com 55% de defesa e 52% de defesa de TD. Numeros abaixo da media que mostram vulnerabilidade. Hope com apenas 1 derrota pode ser mais dificil de acertar.',
        },
        {
          label: 'Fator Desconhecido',
          valueA: 40,
          valueB: 70,
          labelA: 'Medio',
          labelB: 'Bom',
          advantage: 'fighter2',
          advantage_note: 'Hope e uma completa incognita no UFC. Record de 11-1 sugere talento real, e o fato de o UFC te-lo contratado indica que viram algo especial. Kamaka ja e conhecido e previsivel.',
        },
      ],
      insight: 'Esta e uma luta interessante entre o veterano conhecido (Kamaka) e o estreante misterioso (Hope). Kamaka tem volume e experiencia, mas nao vence no UFC desde agosto de 2020 e esta em clara fase descendente (1-3-1 recente). Hope com 11-1 e completamente desconhecido, o que pode ser vantagem ou desvantagem. O UFC geralmente contrata prospectos para bater veteranos em queda, e esse parece ser o caso aqui.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Kamaka III',
        ko_tko: { count: 7, percent: 41 },
        submission: { count: 4, percent: 24 },
        decision: { count: 6, percent: 35 },
        total_wins: 17,
      },
      fighter2: {
        nome: 'Hope',
        ko_tko: { count: 5, percent: 45 },
        submission: { count: 4, percent: 36 },
        decision: { count: 2, percent: 19 },
        total_wins: 11,
      },
      insight: 'Kamaka tem distribuicao equilibrada com 17 vitorias divididas entre KO, submissao e decisao. Hope tem perfil mais de finalizador com 81% das vitorias antes da decisao (5 KOs + 4 subs). O fato de Hope terminar lutas cedo no circuito regional sugere que ele pode ser perigoso se conseguir impor seu ritmo desde o primeiro round.',
    },

    previsao_final: {
      winner_name: 'Hope',
      winner_side: 'fighter2',
      predicted_method: 'Sub R2',
      confidence_score: 5,
      confidence_label: 'MEDIA',
      explanation: 'Kamaka nao vence no UFC desde agosto de 2020 e retorna apos quase 5 anos de inatividade no octogono. Mesmo com experiencia, o hawaiano esta em clara fase descendente (1-3-1 nas ultimas 5). Hope entra como uma incognita total com 11-1, mas o padrao do UFC e claro: estreantes sao frequentemente escalados contra veteranos em declinio para construir novos nomes. Hope tem 81% de finalizacoes antes da decisao (KO/TKO + Subs), sugerindo um estilo agressivo. Com a defesa de takedown de Kamaka em apenas 52% e absorcao alta de strikes (5.29/min), Hope tem caminhos claros para explorar. A confianca e apenas MEDIA porque Hope e completamente desconhecido no UFC.',
      x_factor: {
        title: 'Kamaka retorna depois de 5 anos',
        description: 'A ultima luta de Kamaka no UFC foi em julho de 2021. Quase 5 anos fora do octogono e uma eternidade. Ele lutou no circuito regional mas o nivel do UFC e outro. Ring rust pode ser devastadora.',
      },
      upset_alert: {
        title: 'Kamaka e duro de matar',
        description: 'Com 25 lutas profissionais e experiencia no UFC, Kamaka sabe sobreviver. Seu volume de 4.96 SLpM com 57% de precisao pode sobrecarregar um estreante que nunca enfrentou esse nivel de pressao. Se Hope ficar nervoso, Kamaka capitaliza.',
      },
      probabilities: {
        fighter1: { nome: 'Kamaka III', percent: 42 },
        fighter2: { nome: 'Hope', percent: 56 },
        draw: 2,
      },
      value_picks: undefined,
    },
  },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'kamaka-vs-hope');
  return <PrelimsAnalysisView analise={data} lang={locale as Lang} />;
}
