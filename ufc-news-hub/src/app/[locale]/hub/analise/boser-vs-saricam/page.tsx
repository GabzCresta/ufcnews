import { loadAnalysisData } from '@/lib/load-analysis-locale';
import type { Lang } from '@/lib/i18n-labels';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import type { FullSingleAnalise } from '@/types/analise';

const analise: FullSingleAnalise = {
  id: 'boser-vs-saricam',
  evento_id: null,
  slug: 'boser-vs-saricam',
  titulo: 'Boser vs Saricam: Dois Veteranos Em Reconstrucao',
  subtitulo:
    'Tanner Boser volta ao UFC depois de 2,5 anos, solto em 2023 depois de terminar 5-5 na promocao. Gokhan Saricam estreia aos 35 com cartel Bellator 5-2, 29 lutas amadoras de boxe sob coach olimpico, e saindo de suspensao de 1 ano por doping. Dois caras experientes tentando reabrir carreira na mesma luta.',
  lutador1_id: null,
  lutador2_id: null,
  artigo_conteudo: '',
  tactical_breakdown: {
    stats: [],
    radarData: [],
    taleOfTape: {
      fighter1: { altura: '1,85m', envergadura: '196cm', idade: 34, academia: 'Niagara / Regional Canada' },
      fighter2: { altura: '1,91m', envergadura: '196cm', idade: 35, academia: 'Belgica (ex-Bellator)' },
    },
    pathsToVictory: { fighter1: [], fighter2: [] },
    dangerZones: [],
  },
  fight_prediction: {
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisao Unanime ou TKO tardio',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Tanner Boser',
    apelido: 'The Bulldozer',
    record: '22-10-1',
    ranking: 'Fora do top 15',
    ultimasLutas: [
      { result: 'W', opponent: 'Vinicius Moreira', method: 'Decisao Unanime', event: 'UAE Warriors 60 (Jun 2025)' },
      { result: 'W', opponent: 'Aleksa Camur', method: 'Decisao Unanime', event: 'UFC Fight Night 225 (Ago 2023)' },
      { result: 'L', opponent: 'Ion Cutelaba', method: 'TKO R1 (2:05)', event: 'UFC (Set 2022)' },
    ],
  },
  fighter2_info: {
    nome: 'Gokhan Saricam',
    apelido: '',
    record: '11-2',
    ranking: 'UFC Debute',
    ultimasLutas: [
      { result: 'W', opponent: 'Hyago Silva', method: 'TKO', event: 'Regional (2025)' },
      { result: 'W', opponent: 'Natalicio Nascimento Filho', method: 'TKO', event: 'Regional (2025)' },
      { result: 'L', opponent: 'Oleg Popov', method: 'Decisao', event: 'Bellator 291 (Fev 2023)' },
    ],
  },
  evento_nome: 'UFC Fight Night: Burns vs Malott',
  evento_data: '18 de Abril, 2026',
  evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
  categoria_peso: 'Peso Pesado (265 lbs)',
  num_rounds: 3,
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
      categoria_peso: 'Peso Pesado (265 lbs)',
      num_rounds: 3,
      titulo_em_jogo: null,
      tagline: 'Dois Veteranos, Uma Janela',
      tagline_sub:
        'Boser solto pelo UFC em 2023, ganhou a volta via UAE Warriors. Saricam chega do Bellator, 5-2 la, 29 lutas de boxe amador, saindo de suspensao por doping. Ninguem aqui e prospect.',
      fighter1: {
        nome_completo: 'Tanner "The Bulldozer" Boser',
        apelido: 'The Bulldozer',
        sobrenome: 'Boser',
        record: '22-10-1 (5-5 UFC)',
        ranking: 'Fora do top 15',
        info_extra: 'Alberta, Canada | 34 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/BOSER_TANNER_L_04-18.png?itok=pY8-LiZP',
      },
      fighter2: {
        nome_completo: 'Gokhan Saricam',
        apelido: '',
        sobrenome: 'Saricam',
        record: '11-2 (5-2 Bellator)',
        ranking: 'UFC Debute',
        info_extra: 'Sint-Niklaas, Belgica | 35 anos',
        imagem_fullbody_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/SARICAM_GOKHAN_R_04-18.png?itok=PisLbyUD',
      },
    },
    qualitative_insight: {
      tag: 'DOIS VETERANOS, UMA JANELA',
      headline: 'NAO E VETERANO VS PROSPECT. E DUPLO RECONSTRUCAO.',
      insight:
        'A leitura facil era Boser UFC-tested contra Saricam regional puro. A leitura correta: Saricam entra com 5-2 Bellator (bateu Sidelnikov, Sowma, Daniel James, Charlie Milner), 29 lutas amadoras de boxe com apenas 1 derrota sob coach olimpico, e voltou de 1 ano de suspensao por clomiphene com 3 vitorias seguidas no regional. Boser foi solto pelo UFC em Ago 2023 apos terminar 5-5 na promocao, recuperou o contrato com UAE Warriors 60 (Jun 2025, W vs Moreira). Dois caras tentando provar que ainda tem algo, na mesma noite.',
      tension: {
        truth_a:
          'Boser tem 10 lutas UFC acumuladas (5-5). Conhece cage, conhece ritmo, conhece o protocolo da semana da luta. Em pesados, esse know-how vale.',
        truth_b:
          'Saricam tem lastro de boxe amador serio (29 lutas, 1 derrota) e venceu lutadores reais no Bellator (Daniel James, Sidelnikov). E dos dois, tem o poder de mao mais documentado recentemente.',
      },
    },
    momento_atual: {
      fighter1: {
        nome: 'Tanner Boser',
        color: 'red',
        recent_fights: [
          {
            date: 'Jun 2025',
            opponent: 'Vinicius Moreira',
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: 'Regional',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Volta ao peso pesado no UAE Warriors 60. Vitoria limpa por 3 rounds que reabriu a porta do UFC.',
          },
          {
            date: 'Ago 2023',
            opponent: 'Aleksa Camur',
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Ultima luta do contrato UFC. Venceu e virou agente livre. Solto em seguida, nao foi renovado.',
          },
          {
            date: 'Set 2022',
            opponent: 'Ion Cutelaba',
            result: 'L',
            method: 'TKO R1 (2:05)',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Apagado em 2 minutos por ground-and-pound. Marcou o primeiro sinal de queda na durabilidade UFC dele.',
          },
          {
            date: 'Nov 2020',
            opponent: 'Andrei Arlovski',
            result: 'L',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Perdeu pro veterano lendario nos 3 rounds. Arlovski experiencia pura, Boser nao soube acelerar.',
          },
        ],
        layoff_warning:
          '2 anos e 8 meses sem lutar no UFC especificamente (ultima foi Ago 2023). Teve uma luta em UAE Warriors no meio, entao nao esta totalmente enferrujado, mas cage do UFC tem ritmo e pressao diferentes.',
        momentum_score: 5,
        momentum_label: 'Estavel (Em Reconstrucao)',
        momentum_trend: 'stable',
        momentum_note:
          'Duas vitorias seguidas (Camur UFC + Moreira UAE Warriors). Fase de reconstrucao funcionando. Nao e pico, mas nao e crise. Luta aqui e prova de que merece ficar.',
      },
      fighter2: {
        nome: 'Gokhan Saricam',
        color: 'blue',
        recent_fights: [
          {
            date: '2025',
            opponent: 'Hyago Silva',
            result: 'W',
            method: 'TKO',
            opponent_rank: 'Regional',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Terceira vitoria da sequencia pos-suspensao. Finish limpo regional.',
          },
          {
            date: '2025',
            opponent: 'Natalicio Nascimento Filho',
            result: 'W',
            method: 'TKO',
            opponent_rank: 'Regional',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Volta ao octagono apos 1 ano suspenso pelo USADA. Poder de mao apareceu rapido.',
          },
          {
            date: 'Fev 2023',
            opponent: 'Oleg Popov',
            result: 'L',
            method: 'Decisao',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Bellator 291. Ultima derrota significativa. Popov lutador tecnico, Saricam nao achou distancia.',
          },
        ],
        layoff_warning:
          'Voltou em 2025 de suspensao de 1 ano imposta pelo USADA (PFL) em Jul 2024 por teste positivo pra clomiphene. 3 lutas regionais desde o retorno, mas ainda sem teste contra adversario de nivel Bellator ou UFC.',
        momentum_score: 6,
        momentum_label: 'Em Alta (Com Ressalva)',
        momentum_trend: 'ascending',
        momentum_note:
          'Tres vitorias seguidas no regional pos-suspensao. Momentum positivo, mas contexto importante: antes da suspensao, ele vinha perdendo pra competicao Bellator de nivel (Popov, Mowry). Saber se o salto pro UFC sustenta a sequencia regional e o teste real.',
      },
    },
    nivel_competicao: {
      fighter1: {
        nome: 'Tanner Boser',
        media_oponentes: 2.8,
        media_oponentes_label: 'Medio',
        aproveitamento: '2V-1D ult 3',
        contra_top5: '0V-1D',
      },
      fighter2: {
        nome: 'Gokhan Saricam',
        media_oponentes: 2.2,
        media_oponentes_label: 'Medio',
        aproveitamento: '3V-0D ult 3 (pos-suspensao)',
        contra_top5: '0V-0D',
      },
      oponentes_em_comum_count: { fighter1: 0, fighter2: 0 },
      oponentes_em_comum_note:
        'Sem oponentes em comum direto. Boser enfrentou UFC-level (Arlovski, Gane, Cutelaba, Camur). Saricam enfrentou Bellator-level (Popov, Mowry, James, Sidelnikov). O calibre do Bellator no peso pesado nao esta muito abaixo do UFC mid-tier atual, entao o salto do Saricam nao e tao gigante quanto parece.',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes por Minuto', valueA: 3.5, valueB: 4.2, maxVal: 6, format: 'decimal' },
        { label: 'Precisao de Strikes (%)', valueA: 50, valueB: 55, maxVal: 100, format: 'percent', note: 'Boxe amador do Saricam aparece na precisao.' },
        { label: 'Strikes Absorvidos/Min', valueA: 3.8, valueB: 3.2, maxVal: 6, format: 'decimal', reverseWinner: true },
        { label: 'Defesa de Strikes (%)', valueA: 52, valueB: 58, maxVal: 100, format: 'percent' },
        { label: 'Takedowns por 15 Min', valueA: 0.4, valueB: 0.2, maxVal: 5, format: 'decimal' },
        { label: 'Defesa de Takedown (%)', valueA: 65, valueB: 55, maxVal: 100, format: 'percent' },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '34 anos', fighter2: '35 anos' },
        { label: 'Altura', fighter1: '1,85m', fighter2: '1,91m' },
        { label: 'Envergadura', fighter1: '196cm', fighter2: '196cm' },
        { label: 'Stance', fighter1: 'Ortodoxo', fighter2: 'Ortodoxo' },
        { label: 'Background', fighter1: 'MMA veterano UFC', fighter2: '29 amadoras boxe + Bellator' },
      ],
    },
    perfil_habilidades_v2: {
      skills: [
        { label: 'Boxe Puro', advantage: 'fighter2', gap: 3, note: 'Saricam tem 29 lutas amadoras (1 derrota) sob coach olimpico Abdel Wahabi. Boser e MMA-first.' },
        { label: 'Poder de Nocaute', advantage: 'fighter2', gap: 2, note: '8 KO/TKO em 11 wins (73%) contra 12 em 22 wins do Boser (55%).' },
        { label: 'Experiencia Especifica UFC', advantage: 'fighter1', gap: 4, note: 'Boser 10 UFC fights. Saricam zero. O palco UFC tem peso em estreantes.' },
        { label: 'Cardio em 3 Rounds', advantage: 'fighter1', gap: 2, note: 'Pesados + cut pos-suspensao do Saricam incerto. Boser acabou de lutar 3 rounds em Jun 2025.' },
        { label: 'Ring Rust UFC', advantage: 'fighter2', gap: 2, note: 'Boser 2 anos e 8 meses sem UFC. Saricam nunca teve ring rust UFC pra ter.' },
        { label: 'Durabilidade', advantage: 'even', gap: 0, note: 'Boser foi TKO R1 pelo Cutelaba em 2022. Saricam perdeu 2 no Bellator mas nao por KO rapido. Equilibrado.' },
      ],
      summary:
        'Saricam tem vantagem em striking puro e poder. Boser em experiencia UFC e cardio recente. Pesados decide em quem conecta primeiro, e ai Saricam tem a credencial de boxe amador pra dizer que essa janela e dele. Mas UFC especificamente penaliza estreante.',
    },
    distribuicao_vitorias: {
      fighter1: {
        nome: 'Tanner Boser',
        ko_tko: { count: 12, percent: 55 },
        submission: { count: 3, percent: 14 },
        decision: { count: 7, percent: 32 },
        total_wins: 22,
      },
      fighter2: {
        nome: 'Gokhan Saricam',
        ko_tko: { count: 8, percent: 73 },
        submission: { count: 1, percent: 9 },
        decision: { count: 2, percent: 18 },
        total_wins: 11,
      },
      insight:
        'Saricam finaliza mais concentrado em KO (73%) do que Boser (55%). Boxe amador aparece na taxa. Boser mais equilibrado, mas ja provou em decisao tambem. Pesados tende a finish cedo, e Saricam historicamente encerra em menos rounds.',
    },
    previsao_final: {
      winner_name: 'Tanner Boser',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime ou TKO tardio',
      confidence_score: 5,
      confidence_label: 'MEDIA',
      explanation:
        'Conviccao 5 porque essa luta e genuinamente coinflip. Saricam com boxe amador elite + Bellator 5-2 nao e prospect verde. Boser tem experiencia UFC especifica (10 lutas) que historicamente vale 5-8% em estreantes, mas nao e o bastante pra cravar. A suspensao por doping do Saricam + o cut apos 1 ano sem atividade de alto nivel sao variaveis reais que podem apertar nos rounds 2-3 e dar a decisao pro Boser.',
      x_factor: {
        title: 'Os Primeiros 3 Minutos',
        description:
          'Pesados vivem no primeiro 3 minutos. Se Saricam conectar a mao direita amadora dele em cima de um Boser enferrujado, a luta acaba. Se Boser usar experiencia UFC pra evitar a troca aberta inicial e arrastar pro round 2, o cardio pos-suspensao do Saricam vira ameaca real.',
      },
      upset_alert: {
        title: 'O Lastro Bellator Subestimado',
        description:
          'Bellator peso pesado nao esta tao abaixo do UFC mid-tier. Saricam bateu Daniel James, Sidelnikov, Sowma. Se o mercado ve ele como prospect regional ingenuo, esta errado. A janela de KO ele tem.',
      },
      probabilities: { fighter1: { nome: 'Boser', percent: 54 }, fighter2: { nome: 'Saricam', percent: 42 }, draw: 4 },
      odds: {
        fighter1_odds: '-135',
        fighter2_odds: '+115',
        fighter1_name: 'Tanner Boser',
        fighter2_name: 'Gokhan Saricam',
        source: 'Media de DraftKings, FanDuel e BetMGM (abril de 2026)',
      },
      value_picks_v2: {
        picks: [
          {
            type: 'Moneyline',
            pick: 'Tanner Boser',
            odds: '-135',
            reasoning: 'Padrao historico UFC vs estreante em pesados (~60% veterano) + cardio + ring work recente.',
          },
          {
            type: 'Metodo',
            pick: 'Saricam por KO/TKO',
            odds: '+225',
            reasoning: 'Se Saricam vencer, o caminho e mao dura no R1 ou R2. Boxe amador confirmando. Valor real nessa linha se tu quiser hedge.',
          },
          {
            type: 'Rounds',
            pick: 'Luta termina antes do R2.5',
            odds: '-110',
            reasoning: 'Pesados UFC historicamente finalizam ~65% antes do final do R2. Boser ja foi apagado em 2 minutos por Cutelaba. Saricam finaliza em 73% de KO.',
          },
        ],
        best_bet: {
          pick: 'Over em finish (antes do cartao)',
          reasoning: 'Pesados + dois finishers + ambos com questoes de durabilidade = finish provavel.',
        },
      },
      key_stats: [
        {
          value: '5-5',
          label: 'cartel UFC especifico do Boser (10 lutas, NAO 34)',
          sublabel: 'Veterano mid-tier, nao dominante na divisao',
        },
        {
          value: '29-1',
          label: 'cartel amador de boxe do Saricam sob coach olimpico',
          sublabel: 'Base tecnica de mao real, nao regional puro',
        },
        {
          value: '1 ano',
          label: 'suspensao USADA do Saricam (clomiphene)',
          sublabel: 'Retornou em 2025, 3 vitorias regionais ate aqui',
        },
      ],
      armadilha: {
        titulo: 'Armadilha: Boser por sub',
        descricao:
          'Boser tem 3 subs em 22 wins. Nao e finalizador. Se apostar nele, e decisao ou TKO no volume acumulado, nao submissao. Mercado paga bem em Boser sub justamente porque quase ninguem aposta.',
      },
      conviction: {
        thesis:
          'A tese e: Tanner Boser vence porque (1) tem 10 lutas UFC acumuladas no cartel (5-5) contra estreante zero UFC, e o padrao historico de debute de pesados tem veterano ganhando ~60% quando o estreante nao vem com hype de prospect; (2) Saricam volta de suspensao de 1 ano por doping (Jul 2024) e so testou regional pos-retorno, enquanto Boser lutou 3 rounds em UAE Warriors em Jun 2025 com ritmo de competicao viva; (3) cardio em 3 rounds pesa em pesados de 34-35 anos, e Boser chegou em 3 rounds limpos mais recentemente. O caminho e Boser sobreviver primeiros 3 minutos onde o poder amador do Saricam e mais perigoso, abrir distancia e acumular volume em R2-R3. Isso desmorona se Saricam conectar mao direita limpa no R1 (padrao de boxe amador dele) ou se ring rust de 2 anos e 8 meses sem UFC especifico travar o timing do Boser.',
        conviction_score: 5,
        conviction_rationale:
          'Conviccao 5 porque admito honestamente coinflip. Vantagens do Boser sao reais mas discretas (experiencia especifica UFC, ritmo recente). Saricam nao e prospect verde como o mercado pode pintar: e Bellator 5-2 com credencial de boxe amador elite. Nao da pra cravar 7-8 aqui sem ser desonesto com a leitura.',
        conviction_breakers: [
          'Se Saricam conectar a mao direita nos primeiros 3 minutos, o cartel amador dele entrega o KO que o mercado subestima.',
          'Se o ring rust de 2 anos e 8 meses sem UFC travar o timing do Boser (especificamente o jab defensivo e a leitura de distancia em cage UFC), Saricam domina a troca.',
          'Se a suspensao do Saricam tiver compensado em preparacao fisica maxima pra estreia UFC, ele chega em pico sem sinais de desgaste.',
          'Se Boser tentar levar pro chao em vez de confiar no striking, ele abre guarda pro counter de boxe do Saricam sem ter wrestling ofensivo real pra capitalizar.',
        ],
        underdog_path: {
          viable: true,
          probability_estimate: 42,
          key_scenario:
            'Saricam pressiona desde o sino, fecha distancia com jab amador, solta a mao direita em counter quando Boser tenta jab curto. Boxe amador conecta em 3 minutos ou menos, KO R1. Alternativa: se Boser sobreviver R1, Saricam ajusta em R2 com cruzado pra fora, quebra a guarda, finaliza nos primeiros 2 minutos do R2. Ambos os caminhos dependem de ele confiar no striking e nao tentar coisas novas em nome de estreia UFC.',
          required_conditions: [
            'Forcar troca em pe desde o sino, nao permitir Boser ditar distancia',
            'Conectar uma mao limpa nos primeiros 3 minutos, aproveitando ring rust UFC do Boser',
            'Manter plano A (boxe amador) sem tentar variar pra ganhar ponto UFC',
            'Nao se desesperar se nao finalizar no R1, manter ritmo pro R2',
          ],
          historical_precedent:
            'Striker com forte base de boxe + Bellator experience batendo UFC veteran estreando ou em queda e padrao visto em lutas como Sergei Kharitonov vs UFC-tier em 2019-2021. O lastro Bellator peso pesado traduz razoavelmente bem pro UFC mid-tier.',
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
  const data = await loadAnalysisData(analise, locale, 'boser-vs-saricam');
  return <FullAnalysisView analise={data} lang={locale as Lang} />;
}
