import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'burns-vs-malott',
  evento_id: null,
  slug: 'burns-vs-malott',
  titulo: 'Burns vs Malott: A Encruzilhada',
  subtitulo:
    'Burns aos 39 em sequencia de 4 derrotas, duas por nocaute em 12 meses. Malott em casa, primeiro main event da carreira, com 3 vitorias seguidas. O BJJ de primeiro escalao contra a geracao que aprendeu a defender grappler.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: {
        altura: '1,73m',
        envergadura: '175cm',
        idade: 39,
        academia: 'Sanford MMA, Flórida',
      },
      fighter2: {
        altura: '1,83m',
        envergadura: '191cm',
        idade: 34,
        academia: 'Niagara Top Team, Ontário',
      },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter2',
    predictedMethod: 'TKO R3-R4 ou Decisao Unanime',
    confidence: 'MEDIA-ALTA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Gilbert Burns',
    apelido: 'Durinho',
    record: '22-9-0',
    ranking: '#11 Peso Meio-Medio',
    ultimasLutas: [
      {
        result: 'L',
        opponent: 'Michael Morales',
        method: 'KO R1 (3:34)',
        event: 'UFC Fight Night (Mai 2025)',
      },
      {
        result: 'L',
        opponent: 'Sean Brady',
        method: 'Decisao Unanime',
        event: 'UFC Fight Night 242 (Set 2024)',
      },
      {
        result: 'L',
        opponent: 'Jack Della Maddalena',
        method: 'KO R3 (3:43)',
        event: 'UFC 299 (Mar 2024)',
      },
    ],
  },
  fighter2_info: {
    nome: 'Mike Malott',
    apelido: 'Proper',
    record: '13-2-1',
    ranking: 'Sem ranking no top 15',
    ultimasLutas: [
      {
        result: 'W',
        opponent: 'Kevin Holland',
        method: 'Decisao Unanime',
        event: 'UFC Fight Night 262 (Out 2025)',
      },
      {
        result: 'W',
        opponent: 'Charlie Radtke',
        method: 'KO R2',
        event: 'UFC 315 (Mai 2025)',
      },
      {
        result: 'W',
        opponent: 'Trevin Giles',
        method: 'Decisao Unanime',
        event: 'UFC Fight Night 246 (Nov 2024)',
      },
    ],
  },
  evento_nome: 'UFC Fight Night: Burns vs Malott',
  evento_data: '18 de Abril, 2026',
  evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
  categoria_peso: 'Peso Meio-Medio (170 lbs)',
  num_rounds: 5,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'full_single',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  full_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Burns vs Malott',
      evento_data: '18 de Abril, 2026',
      evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
      categoria_peso: 'Peso Meio-Medio (170 lbs)',
      num_rounds: 5,
      titulo_em_jogo: null,
      tagline: 'A Encruzilhada',
      tagline_sub:
        'Burns aos 39 com 4 derrotas seguidas, duas por nocaute. Malott em casa, primeiro main event da carreira. O que sobra do BJJ vs o que chega da geracao nova.',
      fighter1: {
        nome_completo: 'Gilbert "Durinho" Burns',
        apelido: 'Durinho',
        sobrenome: 'Burns',
        record: '22-9-0',
        ranking: '#11 Peso Meio-Medio',
        info_extra: 'Niteroi, Brasil | 39 anos',
        imagem_fullbody_url:
          'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/BURNS_GILBERT_L_04-18.png?itok=mNmFlYWi',
      },
      fighter2: {
        nome_completo: 'Mike "Proper" Malott',
        apelido: 'Proper',
        sobrenome: 'Malott',
        record: '13-2-1 (6-1 UFC)',
        ranking: 'Sem ranking no top 15',
        info_extra: 'Burlington, Ontario | 34 anos',
        imagem_fullbody_url:
          'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-05/MALOTT_MIKE_L_05-10.png?itok=mNF-RHHb',
      },
    },
    qualitative_insight: {
      tag: 'O DILEMA DO MALOTT',
      headline: 'BJJ DE PRIMEIRO ESCALAO CONTRA ATLETA EM DECLINIO',
      insight:
        'Burns aos 39, com 4 derrotas seguidas e 2 nocautes no ultimo ano, e a versao estatisticamente mais tentadora pra atropelar. Mas o chao dele continua sendo o chao de um faixa-preta quatro vezes campeao mundial de BJJ, e Malott nunca enfrentou grappler desse nivel. A pergunta real da luta nao e quem e melhor. E qual versao do Malott aparece: a que dominou Holland com boxe de distancia em outubro de 2025, ou a que pode ser tentada a provar ponto tentando striking tudo aberto contra um Burns que absorveu 2 KOs em 12 meses.',
      tension: {
        truth_a:
          'Burns esta fisicamente deteriorando. Quatro derrotas seguidas, duas por KO rapido. Contra Morales em maio de 2025 durou 3 minutos e meio no R1. Aos 39 anos, essa sequencia raramente tem volta.',
        truth_b:
          'Burns continua sendo faixa-preta quatro vezes campeao mundial de BJJ. Se chegar em bom spot no chao, finaliza qualquer um da divisao. A ameaca de submissao nunca sai de cena, e Malott nao tem historico contra grappler desse calibre.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Gilbert Burns',
        color: 'red',
        recent_fights: [
          {
            date: 'Mai 2025',
            opponent: 'Michael Morales',
            result: 'L',
            method: 'KO R1 (3:34)',
            opponent_rank: '#10 MM',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Nocauteado em 3 minutos e meio. Morales pegou a mao direita limpo e nao deu chance de reacao.',
          },
          {
            date: 'Set 2024',
            opponent: 'Sean Brady',
            result: 'L',
            method: 'Decisao Unanime',
            opponent_rank: '#7 MM',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'Brady inverteu o padrao esperado e dominou na luta agarrada. Burns nao conseguiu encaixar o BJJ mesmo no terreno onde historicamente e dominante.',
          },
          {
            date: 'Mar 2024',
            opponent: 'Jack Della Maddalena',
            result: 'L',
            method: 'KO R3 (3:43)',
            opponent_rank: '#6 MM',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'Resistiu 2 rounds inteiros na trocacao. No R3 o queixo cedeu ao cruzado de esquerda. Foi o momento em que a divisao entendeu que o Burns striker tem limite contra long-range puro.',
          },
          {
            date: 'Mai 2023',
            opponent: 'Belal Muhammad',
            result: 'L',
            method: 'Decisao Unanime',
            opponent_rank: '#3 MM',
            quality_score: 5,
            quality_label: 'Excelente',
            note: 'Primeira derrota do skid atual. Muhammad dominou com wrestling e pressao por 3 rounds, anulou o BJJ. Pouco depois virou desafiante e campeao. Foi o aviso de que a meta-game da divisao tinha mudado.',
          },
          {
            date: 'Abr 2023',
            opponent: 'Jorge Masvidal',
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Ultima vitoria da carreira. Tres anos sem ganhar entrando nessa luta. Disciplina tatica de 15 minutos que ele precisa revisitar aqui.',
          },
        ],
        layoff_warning:
          '11 meses desde a ultima luta. Grinding de 5 rounds aos 39 exige timing e cardio que enferrujam rapido sem atividade.',
        momentum_score: 2,
        momentum_label: 'Em Queda',
        momentum_trend: 'descending',
        momentum_note:
          'Quatro derrotas consecutivas, duas por nocaute. O padrao de declinio esta formado: o BJJ ainda funciona mas demora mais pra aparecer, e o striker absorveu duas finalizacoes contra strikers mais longos. A divisao aprendeu a manter distancia e castigar em stand-up.',
      },
      fighter2: {
        nome: 'Mike Malott',
        color: 'blue',
        recent_fights: [
          {
            date: 'Out 2025',
            opponent: 'Kevin Holland',
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: '#13 MM',
            quality_score: 4,
            quality_label: 'Muito Bom',
            note: 'Controlou ritmo por 3 rounds. Holland nao conseguiu o movimento caotico tipico dele. Malott imposiu pressao estavel e defendeu 5 tentativas de TD. Momento de validacao de que resolve striker de movimento.',
          },
          {
            date: 'Mai 2025',
            opponent: 'Charlie Radtke',
            result: 'W',
            method: 'KO R2',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Nocaute limpo em 2 rounds. Poder de mao real confirmado recentemente.',
          },
          {
            date: 'Nov 2024',
            opponent: 'Trevin Giles',
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Controlou luta inteira. Trabalho tecnico bom, mas cartel veterano descendente.',
          },
        ],
        layoff_warning: null,
        momentum_score: 7,
        momentum_label: 'Em Alta',
        momentum_trend: 'ascending',
        momentum_note:
          'Tres vitorias seguidas, sendo a ultima sobre Holland ranqueado. Primeiro main event da carreira em casa no Canada. Salto de cartel mais marcante da divisao de meio-medios nos ultimos 12 meses.',
      },
    },
    nivel_competicao: {
      fighter1: {
        nome: 'Gilbert Burns',
        media_oponentes: 4.2,
        media_oponentes_label: 'Muito Bom',
        aproveitamento: '1V-4D (20%) ult 5',
        contra_top5: '0V-4D ult 5',
      },
      fighter2: {
        nome: 'Mike Malott',
        media_oponentes: 2.5,
        media_oponentes_label: 'Medio',
        aproveitamento: '5V-0D ult 5',
        contra_top5: '0V-0D ult 5',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Nenhum oponente em comum. Burns enfrentou elite pura (Muhammad, Della Maddalena, Brady, Morales, todos top 12); Malott enfrentou veteranos mid-tier ate Holland. A luta e um teste direto: o salto de nivel do Malott corresponde a realidade, ou Burns mesmo em queda ainda e um degrau acima?',
    },
    comparacao_estatistica: {
      stats: [
        {
          label: 'Sig. Strikes por Minuto',
          valueA: 3.36,
          valueB: 4.1,
          maxVal: 6,
          format: 'decimal',
          note: 'Malott tem volume maior, especialmente em bursts de 2-3 combinacoes seguidas.',
        },
        {
          label: 'Precisao de Strikes (%)',
          valueA: 48,
          valueB: 52,
          maxVal: 100,
          format: 'percent',
        },
        {
          label: 'Strikes Absorvidos/Min',
          valueA: 3.1,
          valueB: 2.4,
          maxVal: 6,
          format: 'decimal',
          reverseWinner: true,
          note: 'Burns absorve quase 30% mais. Em 5 rounds, essa matematica castiga.',
        },
        {
          label: 'Defesa de Strikes (%)',
          valueA: 54,
          valueB: 60,
          maxVal: 100,
          format: 'percent',
        },
        {
          label: 'Takedowns por 15 Min',
          valueA: 1.95,
          valueB: 0.85,
          maxVal: 5,
          format: 'decimal',
          note: 'Burns e o wrestler ofensivo. Malott poucas entradas, mas seletivas.',
        },
        {
          label: 'Precisao de Takedown (%)',
          valueA: 35,
          valueB: 50,
          maxVal: 100,
          format: 'percent',
        },
        {
          label: 'Defesa de Takedown (%)',
          valueA: 47,
          valueB: 66,
          maxVal: 100,
          format: 'percent',
          note: 'A estatistica mais decisiva do matchup: Malott sprawl em 2 de 3, Burns deixa 1 de 2 passar.',
        },
        {
          label: 'Submissoes por 15 Min',
          valueA: 1.2,
          valueB: 0.4,
          maxVal: 3,
          format: 'decimal',
        },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '39 anos', fighter2: '34 anos' },
        { label: 'Altura', fighter1: '1,73m', fighter2: '1,83m' },
        { label: 'Envergadura', fighter1: '175cm', fighter2: '191cm' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo' },
        {
          label: 'Academia',
          fighter1: 'Sanford MMA',
          fighter2: 'Niagara Top Team',
        },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        {
          label: 'Striking em Distancia',
          advantage: 'fighter2',
          gap: 3,
          note: 'Malott tem 16cm de alcance a mais e boxe mais limpo. Burns depende de entrada pra conectar.',
        },
        {
          label: 'Grappling e BJJ',
          advantage: 'fighter1',
          gap: 5,
          note: 'Quatro vezes campeao mundial de BJJ contra lutador sem submissoes no cartel UFC. Se chega no chao em bom spot, Burns manda.',
        },
        {
          label: 'Wrestling Ofensivo',
          advantage: 'fighter1',
          gap: 2,
          note: 'TDs por 15min: 1,95 contra 0,85. Burns tem mais tentativas e conversao historica.',
        },
        {
          label: 'Cardio e Ritmo',
          advantage: 'fighter2',
          gap: 3,
          note: 'Burns ja mostrou fadiga em rounds tardios em 2 das ultimas 3 lutas. Malott nunca foi finalizado por cansaco.',
        },
        {
          label: 'Poder de Nocaute',
          advantage: 'fighter2',
          gap: 2,
          note: 'Malott finalizou Radtke em R2 recentemente. Burns tem 6 KOs em 31 lutas (27% KO rate).',
        },
        {
          label: 'Queixo e Durabilidade',
          advantage: 'fighter2',
          gap: 4,
          note: 'Burns caiu 2 vezes por KO nos ultimos 12 meses. Malott nunca foi nocauteado no UFC.',
        },
      ],
      summary:
        'Malott tem vantagem em 4 das 6 dimensoes, incluindo as duas mais decisivas pra esse matchup: distancia e durabilidade. Burns tem uma vantagem esmagadora, o BJJ, mas precisa chegar la pra explorar. E e exatamente o sprawl e o shuck game que Malott refinou em 2025.',
    },
    distribuicao_vitorias: {
      fighter1: {
        nome: 'Gilbert Burns',
        ko_tko: { count: 6, percent: 27 },
        submission: { count: 10, percent: 45 },
        decision: { count: 6, percent: 28 },
        total_wins: 22,
      },
      fighter2: {
        nome: 'Mike Malott',
        ko_tko: { count: 7, percent: 54 },
        submission: { count: 4, percent: 31 },
        decision: { count: 2, percent: 15 },
        total_wins: 13,
      },
      insight:
        'Burns vive de BJJ: quase metade das vitorias por finalizacao. Malott e striker primeiro, grappler depois: mais da metade dos wins por KO/TKO. Essa distribuicao reforca que cada um precisa impor o estilo preferido, e o vencedor sera quem forcar a luta ir pro terreno dele.',
    },
    previsao_final: {
      winner_name: 'Mike Malott',
      winner_side: 'fighter2',
      predicted_method: 'TKO R3-R4 (volume + conditioning) ou Decisao Unanime',
      confidence_score: 7,
      confidence_label: 'MEDIA-ALTA',
      explanation:
        'Conviccao 7, nao 8 ou 9, porque a ameaca de submissao do Burns nunca zera. Se Malott errar um sprawl no primeiro minuto do R1 e cair em back side, o Burns pega mata-leao ou arm-triangle e a gente ve replay de 2 anos atras. Assumindo que Malott executa a defensiva de TD que mostrou contra Holland (5 tentativas defendidas), o caminho e limpo.',
      x_factor: {
        title: 'Os Primeiros 4 Minutos',
        description:
          'Se Burns fechar a distancia forte no R1 e conseguir takedown antes dos 4 minutos, a luta vira territorio do BJJ dele. Se Malott defender e comecar a marcar com jab e gerar bursts, a luta vira dele, e fica dele ate o fim. Toda a decisao do resultado acontece na primeira metade do R1.',
      },
      upset_alert: {
        title: 'O Ultimo Roll da Carreira',
        description:
          'Burns aos 39 em 4 derrotas seguidas sabe que uma quinta derrota provavelmente encerra a carreira. O combustivel emocional pode empurrar ele a fechar distancia com agressividade inicial e tentar uma finalizacao de primeira intencao. O ultimo Burns de verdade, aquele que venceu Masvidal em 2023 com disciplina tatica por 15 minutos, precisa aparecer ja nos primeiros 90 segundos.',
      },
      probabilities: {
        fighter1: { nome: 'Burns', percent: 25 },
        fighter2: { nome: 'Malott', percent: 72 },
        draw: 3,
      },
      odds: {
        fighter1_odds: '+225',
        fighter2_odds: '-300',
        fighter1_name: 'Gilbert Burns',
        fighter2_name: 'Mike Malott',
        source:
          'Media de DraftKings, FanDuel e BetMGM (abril de 2026). Linha abriu em Malott -600 e ajustou com movimento de dinheiro pro Burns.',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Mike Malott',
            odds: '-300',
            reasoning:
              'Odds reflete a realidade. Malott vence 7 em 10 desse matchup. Nao e aposta de valor, mas e aposta segura.',
          },
          {
            type: 'Metodo',
            pick: 'Malott por KO/TKO',
            odds: '+150',
            reasoning:
              'Malott finalizou Radtke em R2 em maio de 2025, e o Burns ja absorveu 2 KOs em 12 meses. Combinacao de queixo desgastado com poder de mao recente e a pocao certa. Valor acima do moneyline.',
          },
          {
            type: 'Rounds Over',
            pick: 'Luta passa de 2.5 rounds',
            odds: '-125',
            reasoning:
              'Burns nao se rende facil e Malott luta em bursts, nao em blitz. Padrao recente dele (Holland 3 rounds, Giles 3 rounds, Radtke R2) sugere que se nao finalizar precocemente, passa do meio da luta.',
          },
          {
            type: 'Submissao em 5 rounds',
            pick: 'Burns por submissao (qualquer round)',
            odds: '+500',
            reasoning:
              'Aposta de longshot com valor se o Burns impuser BJJ cedo. Apenas pequena unidade como hedge contra o moneyline. Nao confundir com sub no R1, que e mais restritivo e tem pagamento similar.',
          },
        ],
        best_bet: {
          pick: 'Malott por KO/TKO a +150',
          reasoning:
            'Conviccao 7 combina com pick de valor moderado. Malott nocauteando um Burns desgastado no R3 ou R4 e o cenario mais provavel entre os finais conhecidos. Combina risco e retorno de forma coerente com a tese.',
        },
      },
      key_stats: [
        {
          value: '4',
          label: 'derrotas seguidas do Burns, 2 por KO em 12 meses',
          sublabel:
            'Ultima vitoria foi em abril de 2023 contra Masvidal. Tres anos sem ganhar.',
        },
        {
          value: '66%',
          label: 'defesa de takedown do Malott',
          sublabel:
            'Contra 47% do Burns. E Burns e quem precisa pegar o TD nessa luta.',
        },
        {
          value: '5',
          label: 'sprawls defendidos pelo Malott contra Holland',
          sublabel:
            'Sprawl e shuck game amadureceram. Nao e mais prospect verde.',
        },
      ],
      armadilha: {
        titulo: 'Armadilha: Burns por submissao no R1',
        descricao:
          'Mercado paga +800 em Burns por sub no R1. Parece bom porque e a unica forma realista do Burns ganhar em um round. Mas precisa: Malott cair em 5 minutos no chao em back side ou full guard com o Burns montado. E Malott defendeu 5 TDs contra Holland sem ir pro chao. Se vai apostar no Burns, a aposta correta e sub total (qualquer round), nao R1 especifico.',
      },
      conviction: {
        thesis:
          'A tese e: Mike Malott vence porque (1) Gilbert Burns aos 39 em sequencia de 4 derrotas sofreu 2 nocautes em 12 meses (Della Maddalena KO R3 em marco de 2024 e Morales KO R1 em maio de 2025), mostrando que o queixo na distancia nao segura mais contra strikers longos; (2) Malott venceu Kevin Holland por decisao unanime em outubro de 2025 defendendo 5 tentativas de takedown, arquetipo exato do que Burns tentaria replicar com wrestling-BJJ; (3) luta em casa, primeiro main event da carreira, em Winnipeg com crowd canadense, e Malott tem performances consistentes em home shows no UFC. O caminho e sobreviver a tentativa de fechar distancia e buscar TD do Burns nos primeiros 4 minutos, defender 2 ou 3 takedowns, comecar a trabalhar jab e teep pra castigar por fora, e capitalizar quando Burns comecar a pedir ar no R3 ou R4 com combinacoes de volume crescente. Isso desmorona se Malott nao defender o primeiro TD do R1 e cair em posicao ruim, ou se Burns tirar forca da aposentadoria iminente e apresentar versao estilo Masvidal fight de abril de 2023, a ultima vitoria, onde foi disciplinado tatico por 15 minutos.',
        conviction_score: 7,
        conviction_rationale:
          'Conviccao 7 porque a tese se sustenta em 3 pilares qualitativos diferentes, cada um com fonte especifica: stats UFCStats sobre absorvidos e precisao, precedente direto Holland em outubro de 2025, e historico de home performance do Malott. Nao e 8 ou 9 porque a ameaca de BJJ do Burns nao zera por idade. Um faixa-preta quatro vezes campeao mundial continua sendo faixa-preta quatro vezes campeao mundial, e se encaixa um TD em momento, a luta acaba instantaneamente. Nao e 5 ou 6 porque as evidencias sao convergentes, nao especulacao.',
        conviction_breakers: [
          'Se Burns desafiar a fisica da crise e mostrar versao Masvidal fight (abril de 2023), disciplinado tatico, wrestling primeiro, chegando inteiro no R3, a luta vira equilibrada e a tese esfria.',
          'Se Malott cair em posicao ruim nos primeiros 4 minutos do R1 e Burns conseguir back take ou full mount, terminou. O ground game do Malott contra faixa-preta de elite nao tem historico de resistencia.',
          'Se o crowd canadense gerar ansiedade no Malott em vez de performance (primeiro main event + headliner em casa), ele pode over-perform e tentar finalizar cedo demais, abrindo brecha pro wrestle do Burns.',
          'Se Burns despejar combinacao de abertura agressiva no R1 e conectar uma mao dura antes do Malott se ajustar, o queixo do Malott nunca foi testado em nivel elite e o resultado vira imprevisivel.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 25,
          key_scenario:
            'Burns fecha distancia nos primeiros 2 minutos do R1, conecta takedown limpo, estabelece top control, passa da half guard pra side control em seguida, trabalha cotovelada de cotovelo pra obrigar Malott a defender o rosto, e quando Malott gira pra escape, Burns tira as costas. A partir dai finaliza via mata-leao em menos de 4 minutos. Alternativa: forca clinch na grade, joga pressao nas costas e puxa arrastao pra chao, espera Malott entregar as costas no scramble. Ambos os caminhos dependem de Burns executar BJJ no nivel da luta contra Brady (UFC 288) ou Masvidal (UFC 287).',
          required_conditions: [
            'Conectar o primeiro takedown antes dos 2 minutos do R1, idealmente contra a grade',
            'Chegar em backside control ou full mount antes dos 4 minutos do R1',
            'Nao absorver contra-ataque limpo do Malott na entrada do TD',
            'Reservar gas tank pra 2 tentativas serias de finalizacao, nao desperdicar em tentativas meia-boca',
          ],
          historical_precedent:
            'Gilbert Burns vs Jorge Masvidal (UFC 287, abril de 2023): ultima vitoria da carreira. Burns executou wrestling-BJJ por 15 minutos contra striker de distancia com alcance, arquetipo similar ao Malott. Se o Burns de 2023 aparece, a tese desmorona.',
        },
      },
    },
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await loadAnalysisData(analise, locale, 'burns-vs-malott');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
