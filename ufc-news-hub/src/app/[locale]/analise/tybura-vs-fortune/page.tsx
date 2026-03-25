'use client';

import { useLocale } from 'next-intl';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';


const analisePT: PrelimsAnalise = {
  id: 'tybura-vs-fortune',
  evento_id: null,
  slug: 'tybura-vs-fortune',
  titulo: 'Tybura vs Fortune',
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
    predictedWinner: 'fighter1',
    predictedMethod: 'Decisao Unanime',
    confidence: 'MEDIA',
    fighter1Scenarios: [],
    fighter2Scenarios: [],
    keyFactors: [],
    xFactor: { title: '', description: '' },
  },
  fighter1_info: {
    nome: 'Marcin Tybura',
    record: '27-10-0',
    ultimasLutas: [],
  },
  fighter2_info: {
    nome: 'Tyrell Fortune',
    record: '17-3-0',
    ultimasLutas: [],
  },
  evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
  evento_data: '28 de Marco, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Pesado (265 lbs)',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'prelims',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),

  prelims_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Adesanya vs Pyfer',
      evento_data: '28 de Marco, 2026',
      categoria_peso: 'Peso Pesado (265 lbs)',
      num_rounds: 3,
      is_titulo: false,
      fighter1: {
        nome: 'Tybura',
        record: '27-10-0',
        ranking: '#8 HW',
      },
      fighter2: {
        nome: 'Fortune',
        record: '17-3-0',
        ranking: undefined,
      },
    },

    comparacao_estatistica: {
      stats: [
        {
          label: 'Sig. Strikes por Minuto',
          valueA: 3.55,
          valueB: 3.20,
          maxVal: 7,
          format: 'decimal',
          note: 'Tybura tem volume levemente superior, consistente ao longo de 23 lutas no UFC',
        },
        {
          label: 'Precisao de Strikes (%)',
          valueA: 48,
          valueB: 45,
          maxVal: 100,
          format: 'percent',
          note: 'Precisao similar, ambos conectam quase metade dos golpes',
        },
        {
          label: 'Strikes Absorvidos/Min',
          valueA: 3.40,
          valueB: 3.10,
          maxVal: 7,
          format: 'decimal',
          reverseWinner: true,
          note: 'Numeros estimados para Fortune com base no circuito regional e Bellator',
        },
        {
          label: 'Defesa de Strikes (%)',
          valueA: 55,
          valueB: 50,
          maxVal: 100,
          format: 'percent',
          note: 'Tybura tem defesa de strikes acima da media dos peso-pesado',
        },
        {
          label: 'Takedowns por 15 Min',
          valueA: 1.39,
          valueB: 2.50,
          maxVal: 5,
          format: 'decimal',
          note: 'Fortune, ex-wrestler NCAA Division II, busca mais quedas',
        },
        {
          label: 'Precisao de Takedown (%)',
          valueA: 33,
          valueB: 42,
          maxVal: 100,
          format: 'percent',
          note: 'Fortune converte mais takedowns, reflexo do background de wrestling',
        },
        {
          label: 'Defesa de Takedown (%)',
          valueA: 79,
          valueB: 65,
          maxVal: 100,
          format: 'percent',
          note: 'Tybura tem uma das melhores defesas de takedown da historia da divisao (top 5 all-time)',
        },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '40 anos', fighter2: '35 anos', note: '5 anos de diferenca, fator relevante na divisao mais pesada' },
        { label: 'Altura', fighter1: '1,91m (6\'3")', fighter2: '1,88m (6\'2")', note: null },
        { label: 'Envergadura', fighter1: '198cm (78")', fighter2: '196cm (77")', note: 'Tybura tem leve vantagem de alcance' },
        { label: 'Stance', fighter1: 'Ortodoxa', fighter2: 'Ortodoxa', note: null },
        { label: 'Academia', fighter1: 'S4 Fight Club / Lodz, Polonia', fighter2: 'Tempe, Arizona (ex-Blackzilians)', note: null },
      ],
    },

    historico_lutas: {
      fighter1: {
        nome: 'Tybura',
        recent_fights: [
          {
            date: 'Set 2025',
            opponent: 'Ante Delija',
            result: 'L',
            method: 'KO R1',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Nocauteado no primeiro round em Paris. Derrota preocupante contra estreante da divisao.',
          },
          {
            date: 'Mar 2025',
            opponent: 'Mick Parkin',
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Vitoria solida por pontos em Londres contra prospect ingles promissor.',
          },
          {
            date: 'Nov 2024',
            opponent: 'Jhonata Diniz',
            result: 'W',
            method: 'TKO R2',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Paralisacao medica no fim do segundo round apos cotoveladas no solo no UFC 309.',
          },
          {
            date: 'Ago 2024',
            opponent: 'Serghei Spivac',
            result: 'L',
            method: 'Sub R1 (Armbar)',
            opponent_rank: '#12 HW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Finalizado rapidamente por armbar. Segunda luta entre os dois, desta vez Spivac venceu.',
          },
          {
            date: 'Mar 2024',
            opponent: 'Tai Tuivasa',
            result: 'W',
            method: 'Sub R1 (RNC)',
            opponent_rank: '#14 HW',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Finalizou Tuivasa com mata-leao no primeiro round, mostrando jiu-jitsu afiado.',
          },
        ],
      },
      fighter2: {
        nome: 'Fortune',
        recent_fights: [
          {
            date: '2025',
            opponent: 'Demoreo Dennis',
            result: 'W',
            method: 'TKO R1',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Finalizacao rapida no primeiro round no circuito regional antes de assinar com o UFC.',
          },
          {
            date: '2025',
            opponent: 'Tony Lopez',
            result: 'W',
            method: 'TKO R1',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Mais uma finalizacao rapida em combate regional, mantendo atividade antes da estreia no UFC.',
          },
          {
            date: '2025',
            opponent: 'Myron Dennis',
            result: 'W',
            method: 'Sub R1',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Finalizacao por submissao no primeiro round, dominancia total contra oponente regional.',
          },
          {
            date: '2024',
            opponent: 'Denis Goltsov',
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 3,
            quality_label: 'Bom',
            note: 'Vitoria por pontos no PFL contra veterano pesado russo. Teste de nivel mais alto.',
          },
          {
            date: '2022',
            opponent: 'Daniel James',
            result: 'W',
            method: 'TKO R1',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Nocaute rapido no Bellator, mantendo seu historico de finalizacoes.',
          },
        ],
      },
    },

    perfil_habilidades: {
      skills: [
        {
          label: 'Striking em Pe',
          valueA: 68,
          valueB: 60,
          labelA: 'Bom',
          labelB: 'Bom',
          advantage: 'fighter1',
          advantage_note: 'Tybura tem 3.55 SLpM com 48% de precisao no UFC, testado contra os melhores peso-pesado do mundo. Fortune tem poder, mas nunca enfrentou strikers de elite.',
        },
        {
          label: 'Poder de Nocaute',
          valueA: 62,
          valueB: 72,
          labelA: 'Bom',
          labelB: 'Bom',
          advantage: 'fighter2',
          advantage_note: 'Fortune tem 65% de vitorias por KO/TKO (11 nocautes em 17 vitorias). Tybura tem 10 KOs em 27 vitorias (37%). Fortune bate mais pesado.',
        },
        {
          label: 'Wrestling',
          valueA: 60,
          valueB: 78,
          labelA: 'Bom',
          labelB: 'Muito Bom',
          advantage: 'fighter2',
          advantage_note: 'Fortune foi campeao NCAA Division II, competiu pela selecao americana de wrestling. Tybura compensa com 79% de defesa de takedown no UFC.',
        },
        {
          label: 'Jiu-Jitsu e Submissoes',
          valueA: 72,
          valueB: 45,
          labelA: 'Bom',
          labelB: 'Medio',
          advantage: 'fighter1',
          advantage_note: 'Tybura tem 7 vitorias por submissao, incluindo finalizacao recente de Tuivasa. Faixa preta de judo com transicoes perigosas. Fortune tem apenas 1 sub na carreira.',
        },
        {
          label: 'Defesa Geral',
          valueA: 70,
          valueB: 55,
          labelA: 'Bom',
          labelB: 'Bom',
          advantage: 'fighter1',
          advantage_note: 'Tybura tem 55% de defesa de strikes e 79% de defesa de takedown. Sobreviveu contra Aspinall, Gane, Blaydes. Fortune foi nocauteado por Timothy Johnson e finalizado.',
        },
        {
          label: 'Experiencia no Octagon',
          valueA: 90,
          valueB: 30,
          labelA: 'Excelente',
          labelB: 'Ruim',
          advantage: 'fighter1',
          advantage_note: 'Tybura tem 23 lutas no UFC desde 2016, incluindo duelos contra campeoes e top 5. Fortune faz sua estreia absoluta no Octagon aos 35 anos.',
        },
      ],
      insight: 'Tybura e o veterano completo com quase uma decada no UFC, jiu-jitsu perigoso e defesa de takedown elite. Fortune traz wrestling de nivel olimpico, poder de nocaute e atletismo, mas nunca pisou no Octagon. A grande questao e: o wrestling de Fortune vai funcionar contra a defesa de takedown historica de Tybura? E se a luta ficar em pe, a experiencia do polones sera decisiva?',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Tybura',
        ko_tko: { count: 10, percent: 37 },
        submission: { count: 7, percent: 26 },
        decision: { count: 10, percent: 37 },
        total_wins: 27,
      },
      fighter2: {
        nome: 'Fortune',
        ko_tko: { count: 11, percent: 65 },
        submission: { count: 1, percent: 6 },
        decision: { count: 5, percent: 29 },
        total_wins: 17,
      },
      insight: 'Tybura e um dos lutadores mais equilibrados da divisao, com vitorias divididas igualmente entre KO (37%), submissao (26%) e decisao (37%). Pode vencer de qualquer forma. Fortune e um finalizador nato: 65% das vitorias por nocaute. Se ele conectar limpo, a luta pode acabar. Porem, quando Fortune nao consegue o nocaute, ele tende a ir para decisao, o que favorece a experiencia e QI de luta de Tybura.',
    },

    previsao_final: {
      winner_name: 'Tybura',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime',
      confidence_score: 5,
      confidence_label: 'MEDIA',
      explanation: 'Tybura tem a vantagem massiva de experiencia no UFC, com 23 lutas contra a elite da divisao. Sua defesa de takedown de 79% deve neutralizar o wrestling de Fortune, e seu jiu-jitsu oferece perigo constante se a luta for ao chao. Fortune traz poder explosivo e atletismo, mas estrear no UFC aos 35 anos contra um top 8 ranqueado e um teste brutal. O polones ja mostrou que sabe lidar com poder (finalizou Tuivasa) e deve usar o jab, a distancia e a experiencia para vencer nos pontos. Porem, a derrota recente por KO contra Delija levanta duvidas sobre o queixo de Tybura aos 40 anos, e Fortune tem mao pesada.',
      x_factor: {
        title: 'A defesa de takedown de Tybura contra o wrestling de Fortune',
        description: 'Tybura tem a quinta melhor defesa de takedown da historia dos peso-pesado do UFC (79%). Fortune construiu sua carreira no wrestling, com titulo NCAA Division II. Se Tybura defender as quedas, a luta fica no territorio dele. Se Fortune conseguir derrubar, o jogo muda completamente.',
      },
      upset_alert: {
        title: 'Fortune tem poder para nocautear qualquer um',
        description: 'Com 65% de vitorias por KO/TKO, Fortune nao precisa de muitas oportunidades. Tybura foi nocauteado por Delija em setembro de 2025, e aos 40 anos, a resistencia ao impacto pode estar diminuindo. Um overhand direito ou um uppercut no clinch pode encerrar a noite cedo.',
      },
      probabilities: {
        fighter1: { nome: 'Tybura', percent: 55 },
        fighter2: { nome: 'Fortune', percent: 43 },
        draw: 2,
      },
      value_picks: undefined,
    },
  },
};

const analiseEN: PrelimsAnalise = {
  ...analisePT,
  evento_data: 'March 28, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Heavyweight (265 lbs)',
  fight_prediction: {
    ...analisePT.fight_prediction,
    predictedMethod: 'Unanimous Decision',
    confidence: 'MEDIUM',
  },
  prelims_analysis: {
    hero: {
      ...analisePT.prelims_analysis.hero,
      evento_data: 'March 28, 2026',
      categoria_peso: 'Heavyweight (265 lbs)',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Sig. Strikes Per Minute', valueA: 3.55, valueB: 3.20, maxVal: 7, format: 'decimal', note: 'Tybura has slightly higher volume, consistent across 23 UFC fights' },
        { label: 'Striking Accuracy (%)', valueA: 48, valueB: 45, maxVal: 100, format: 'percent', note: 'Similar accuracy, both land nearly half their shots' },
        { label: 'Strikes Absorbed/Min', valueA: 3.40, valueB: 3.10, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Estimated numbers for Fortune based on regional/Bellator competition' },
        { label: 'Strike Defense (%)', valueA: 55, valueB: 50, maxVal: 100, format: 'percent', note: 'Tybura has above-average strike defense for heavyweight' },
        { label: 'Takedowns Per 15 Min', valueA: 1.39, valueB: 2.50, maxVal: 5, format: 'decimal', note: 'Fortune, a former NCAA Division II wrestler, looks for more takedowns' },
        { label: 'Takedown Accuracy (%)', valueA: 33, valueB: 42, maxVal: 100, format: 'percent', note: 'Fortune converts more takedowns, reflecting his wrestling pedigree' },
        { label: 'Takedown Defense (%)', valueA: 79, valueB: 65, maxVal: 100, format: 'percent', note: 'Tybura has one of the best takedown defense records in division history (top 5 all-time)' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '40 years old', fighter2: '35 years old', note: '5-year gap, relevant factor in the heaviest division' },
        { label: 'Height', fighter1: '6\'3" (1.91m)', fighter2: '6\'2" (1.88m)', note: null },
        { label: 'Reach', fighter1: '78" (198cm)', fighter2: '77" (196cm)', note: 'Tybura has a slight reach advantage' },
        { label: 'Stance', fighter1: 'Orthodox', fighter2: 'Orthodox', note: null },
        { label: 'Gym', fighter1: 'S4 Fight Club / Lodz, Poland', fighter2: 'Tempe, Arizona (ex-Blackzilians)', note: null },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Tybura',
        recent_fights: [
          { date: 'Sep 2025', opponent: 'Ante Delija', result: 'L', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Knocked out in the first round in Paris. Concerning loss against a division newcomer.' },
          { date: 'Mar 2025', opponent: 'Mick Parkin', result: 'W', method: 'Unanimous Decision', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Solid points win in London against a promising British prospect.' },
          { date: 'Nov 2024', opponent: 'Jhonata Diniz', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Doctor stoppage at the end of round two after ground elbows at UFC 309.' },
          { date: 'Aug 2024', opponent: 'Serghei Spivac', result: 'L', method: 'Sub R1 (Armbar)', opponent_rank: '#12 HW', quality_score: 3, quality_label: 'Good', note: 'Submitted quickly by armbar. Second fight between them, Spivac won this time.' },
          { date: 'Mar 2024', opponent: 'Tai Tuivasa', result: 'W', method: 'Sub R1 (RNC)', opponent_rank: '#14 HW', quality_score: 3, quality_label: 'Good', note: 'Submitted Tuivasa with a rear-naked choke in the first round, showing sharp BJJ.' },
        ],
      },
      fighter2: {
        nome: 'Fortune',
        recent_fights: [
          { date: '2025', opponent: 'Demoreo Dennis', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Quick first-round finish on the regional circuit before signing with the UFC.' },
          { date: '2025', opponent: 'Tony Lopez', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'Another quick regional finish, staying active before UFC debut.' },
          { date: '2025', opponent: 'Myron Dennis', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Poor', note: 'First-round submission, total dominance against a regional opponent.' },
          { date: '2024', opponent: 'Denis Goltsov', result: 'W', method: 'Unanimous Decision', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Good', note: 'Decision win in the PFL against a veteran Russian heavyweight. Higher-level test.' },
          { date: '2022', opponent: 'Daniel James', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Average', note: 'Quick knockout in Bellator, continuing his finishing streak.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Stand-up Striking', valueA: 68, valueB: 60, labelA: 'Good', labelB: 'Good', advantage: 'fighter1', advantage_note: 'Tybura has 3.55 SLpM at 48% accuracy in the UFC, tested against the best heavyweights in the world. Fortune has power but has never faced elite strikers.' },
        { label: 'Knockout Power', valueA: 62, valueB: 72, labelA: 'Good', labelB: 'Good', advantage: 'fighter2', advantage_note: 'Fortune has 65% KO/TKO wins (11 knockouts in 17 wins). Tybura has 10 KOs in 27 wins (37%). Fortune hits harder.' },
        { label: 'Wrestling', valueA: 60, valueB: 78, labelA: 'Good', labelB: 'Very Good', advantage: 'fighter2', advantage_note: 'Fortune was an NCAA Division II champion and competed for Team USA. Tybura compensates with 79% takedown defense in the UFC.' },
        { label: 'Jiu-Jitsu & Submissions', valueA: 72, valueB: 45, labelA: 'Good', labelB: 'Average', advantage: 'fighter1', advantage_note: 'Tybura has 7 submission wins, including a recent finish of Tuivasa. Judo black belt with dangerous transitions. Fortune has only 1 sub in his career.' },
        { label: 'Overall Defense', valueA: 70, valueB: 55, labelA: 'Good', labelB: 'Good', advantage: 'fighter1', advantage_note: 'Tybura has 55% strike defense and 79% takedown defense. Survived against Aspinall, Gane, Blaydes. Fortune was KOd by Timothy Johnson and submitted.' },
        { label: 'Octagon Experience', valueA: 90, valueB: 30, labelA: 'Excellent', labelB: 'Poor', advantage: 'fighter1', advantage_note: 'Tybura has 23 UFC fights since 2016, including bouts against champions and top 5. Fortune makes his absolute Octagon debut at 35.' },
      ],
      insight: 'Tybura is the complete veteran with nearly a decade in the UFC, dangerous jiu-jitsu, and elite takedown defense. Fortune brings Olympic-level wrestling, knockout power, and athleticism, but has never set foot in the Octagon. The big question: will Fortune\'s wrestling work against Tybura\'s historic takedown defense? And if the fight stays standing, will the Pole\'s experience be the deciding factor?',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Tybura', ko_tko: { count: 10, percent: 37 }, submission: { count: 7, percent: 26 }, decision: { count: 10, percent: 37 }, total_wins: 27 },
      fighter2: { nome: 'Fortune', ko_tko: { count: 11, percent: 65 }, submission: { count: 1, percent: 6 }, decision: { count: 5, percent: 29 }, total_wins: 17 },
      insight: 'Tybura is one of the most balanced fighters in the division, with wins split equally between KO (37%), submission (26%), and decision (37%). He can win any way. Fortune is a natural finisher: 65% of wins by knockout. If he lands clean, the fight could end. However, when Fortune can\'t get the KO, he tends to go to decision, which favors Tybura\'s experience and fight IQ.',
    },
    previsao_final: {
      winner_name: 'Tybura',
      winner_side: 'fighter1',
      predicted_method: 'Unanimous Decision',
      confidence_score: 5,
      confidence_label: 'MEDIUM',
      explanation: 'Tybura has a massive UFC experience advantage, with 23 fights against the division\'s elite. His 79% takedown defense should neutralize Fortune\'s wrestling, and his jiu-jitsu offers constant danger if the fight hits the mat. Fortune brings explosive power and athleticism, but debuting in the UFC at 35 against a ranked top 8 is a brutal test. The Pole has shown he can handle power (submitted Tuivasa) and should use the jab, distance, and experience to win on points. However, the recent KO loss to Delija raises questions about Tybura\'s chin at 40, and Fortune has heavy hands.',
      x_factor: { title: 'Tybura\'s takedown defense vs Fortune\'s wrestling', description: 'Tybura has the 5th best takedown defense in UFC heavyweight history (79%). Fortune built his career on wrestling, with an NCAA Division II title. If Tybura stuffs the takedowns, the fight stays in his territory. If Fortune gets him down, the game changes completely.' },
      upset_alert: { title: 'Fortune has knockout power to finish anyone', description: 'With 65% KO/TKO wins, Fortune doesn\'t need many opportunities. Tybura was knocked out by Delija in September 2025, and at 40, his ability to absorb damage may be declining. A right overhand or an uppercut in the clinch could end the night early.' },
      probabilities: { fighter1: { nome: 'Tybura', percent: 55 }, fighter2: { nome: 'Fortune', percent: 43 }, draw: 2 },
      value_picks: undefined,
    },
  },
};

const analiseFR: PrelimsAnalise = {
  ...analisePT,
  evento_data: '28 mars 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Poids Lourd (265 lbs)',
  fight_prediction: {
    ...analisePT.fight_prediction,
    predictedMethod: 'Decision Unanime',
    confidence: 'MOYENNE',
  },
  prelims_analysis: {
    hero: {
      ...analisePT.prelims_analysis.hero,
      evento_data: '28 mars 2026',
      categoria_peso: 'Poids Lourd (265 lbs)',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Coups Sign. par Minute', valueA: 3.55, valueB: 3.20, maxVal: 7, format: 'decimal', note: 'Tybura a un volume legerement superieur, constant sur 23 combats UFC' },
        { label: 'Precision des Coups (%)', valueA: 48, valueB: 45, maxVal: 100, format: 'percent', note: 'Precision similaire, les deux connectent pres de la moitie de leurs coups' },
        { label: 'Coups Encaisses/Min', valueA: 3.40, valueB: 3.10, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Chiffres estimes pour Fortune bases sur le circuit regional et le Bellator' },
        { label: 'Defense de Coups (%)', valueA: 55, valueB: 50, maxVal: 100, format: 'percent', note: 'Tybura a une defense de coups au-dessus de la moyenne des poids lourds' },
        { label: 'Takedowns par 15 Min', valueA: 1.39, valueB: 2.50, maxVal: 5, format: 'decimal', note: 'Fortune, ancien lutteur NCAA Division II, cherche plus de mises au sol' },
        { label: 'Precision de Takedown (%)', valueA: 33, valueB: 42, maxVal: 100, format: 'percent', note: 'Fortune convertit plus de takedowns, reflet de son parcours en lutte' },
        { label: 'Defense de Takedown (%)', valueA: 79, valueB: 65, maxVal: 100, format: 'percent', note: 'Tybura possede l\'une des meilleures defenses de takedown de l\'histoire de la division (top 5 historique)' },
      ],
      tale_of_tape: [
        { label: 'Age', fighter1: '40 ans', fighter2: '35 ans', note: '5 ans d\'ecart, facteur pertinent dans la division la plus lourde' },
        { label: 'Taille', fighter1: '1,91m (6\'3")', fighter2: '1,88m (6\'2")', note: null },
        { label: 'Allonge', fighter1: '198cm (78")', fighter2: '196cm (77")', note: 'Tybura a un leger avantage d\'allonge' },
        { label: 'Garde', fighter1: 'Orthodoxe', fighter2: 'Orthodoxe', note: null },
        { label: 'Salle', fighter1: 'S4 Fight Club / Lodz, Pologne', fighter2: 'Tempe, Arizona (ex-Blackzilians)', note: null },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Tybura',
        recent_fights: [
          { date: 'Sep 2025', opponent: 'Ante Delija', result: 'L', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Mis KO au premier round a Paris. Defaite inquietante contre un nouveau venu de la division.' },
          { date: 'Mar 2025', opponent: 'Mick Parkin', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Victoire solide aux points a Londres contre un espoir britannique prometteur.' },
          { date: 'Nov 2024', opponent: 'Jhonata Diniz', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'Arret medical a la fin du deuxieme round apres des coudes au sol a l\'UFC 309.' },
          { date: 'Aou 2024', opponent: 'Serghei Spivac', result: 'L', method: 'Sub R1 (Armbar)', opponent_rank: '#12 HW', quality_score: 3, quality_label: 'Bon', note: 'Soumis rapidement par armbar. Deuxieme combat entre eux, Spivac l\'a emporte cette fois.' },
          { date: 'Mar 2024', opponent: 'Tai Tuivasa', result: 'W', method: 'Sub R1 (RNC)', opponent_rank: '#14 HW', quality_score: 3, quality_label: 'Bon', note: 'A soumis Tuivasa par etranglement arriere au premier round, montrant un JJB affute.' },
        ],
      },
      fighter2: {
        nome: 'Fortune',
        recent_fights: [
          { date: '2025', opponent: 'Demoreo Dennis', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Faible', note: 'Fin rapide au premier round sur le circuit regional avant de signer avec l\'UFC.' },
          { date: '2025', opponent: 'Tony Lopez', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Faible', note: 'Encore une fin rapide en regional, restant actif avant ses debuts a l\'UFC.' },
          { date: '2025', opponent: 'Myron Dennis', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Faible', note: 'Soumission au premier round, domination totale contre un adversaire regional.' },
          { date: '2024', opponent: 'Denis Goltsov', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bon', note: 'Victoire aux points au PFL contre un veteran russe poids lourd. Test de niveau superieur.' },
          { date: '2022', opponent: 'Daniel James', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Moyen', note: 'KO rapide au Bellator, poursuivant sa serie de finitions.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Frappe Debout', valueA: 68, valueB: 60, labelA: 'Bon', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'Tybura a 3.55 SLpM avec 48% de precision a l\'UFC, teste contre les meilleurs poids lourds du monde. Fortune a de la puissance, mais n\'a jamais affronte de frappeurs d\'elite.' },
        { label: 'Puissance de KO', valueA: 62, valueB: 72, labelA: 'Bon', labelB: 'Bon', advantage: 'fighter2', advantage_note: 'Fortune a 65% de victoires par KO/TKO (11 KO en 17 victoires). Tybura a 10 KO en 27 victoires (37%). Fortune frappe plus fort.' },
        { label: 'Lutte', valueA: 60, valueB: 78, labelA: 'Bon', labelB: 'Tres Bon', advantage: 'fighter2', advantage_note: 'Fortune a ete champion NCAA Division II et a represente l\'equipe nationale americaine de lutte. Tybura compense avec 79% de defense de takedown a l\'UFC.' },
        { label: 'Jiu-Jitsu et Soumissions', valueA: 72, valueB: 45, labelA: 'Bon', labelB: 'Moyen', advantage: 'fighter1', advantage_note: 'Tybura a 7 victoires par soumission, dont une finition recente de Tuivasa. Ceinture noire de judo avec des transitions dangereuses. Fortune n\'a qu\'1 soumission en carriere.' },
        { label: 'Defense Generale', valueA: 70, valueB: 55, labelA: 'Bon', labelB: 'Bon', advantage: 'fighter1', advantage_note: 'Tybura a 55% de defense de coups et 79% de defense de takedown. A survecu face a Aspinall, Gane, Blaydes. Fortune a ete mis KO par Timothy Johnson et soumis.' },
        { label: 'Experience dans l\'Octogone', valueA: 90, valueB: 30, labelA: 'Excellent', labelB: 'Faible', advantage: 'fighter1', advantage_note: 'Tybura a 23 combats UFC depuis 2016, dont des affrontements contre des champions et le top 5. Fortune fait ses grands debuts dans l\'Octogone a 35 ans.' },
      ],
      insight: 'Tybura est le veteran complet avec pres d\'une decennie a l\'UFC, un jiu-jitsu dangereux et une defense de takedown d\'elite. Fortune apporte une lutte de niveau olympique, une puissance de KO et un athletisme remarquable, mais n\'a jamais mis les pieds dans l\'Octogone. La grande question : la lutte de Fortune fonctionnera-t-elle contre la defense de takedown historique de Tybura ? Et si le combat reste debout, l\'experience du Polonais sera-t-elle decisive ?',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Tybura', ko_tko: { count: 10, percent: 37 }, submission: { count: 7, percent: 26 }, decision: { count: 10, percent: 37 }, total_wins: 27 },
      fighter2: { nome: 'Fortune', ko_tko: { count: 11, percent: 65 }, submission: { count: 1, percent: 6 }, decision: { count: 5, percent: 29 }, total_wins: 17 },
      insight: 'Tybura est l\'un des combattants les plus equilibres de la division, avec des victoires reparties equitablement entre KO (37%), soumission (26%) et decision (37%). Il peut gagner de n\'importe quelle maniere. Fortune est un finisseur ne : 65% de victoires par KO. S\'il connecte proprement, le combat peut s\'arreter. Cependant, quand Fortune n\'obtient pas le KO, il a tendance a aller a la decision, ce qui favorise l\'experience et le QI de combat de Tybura.',
    },
    previsao_final: {
      winner_name: 'Tybura',
      winner_side: 'fighter1',
      predicted_method: 'Decision Unanime',
      confidence_score: 5,
      confidence_label: 'MOYENNE',
      explanation: 'Tybura a un avantage massif d\'experience a l\'UFC, avec 23 combats contre l\'elite de la division. Sa defense de takedown de 79% devrait neutraliser la lutte de Fortune, et son jiu-jitsu offre un danger constant si le combat va au sol. Fortune apporte une puissance explosive et de l\'athletisme, mais debuter a l\'UFC a 35 ans contre un top 8 classe est un test brutal. Le Polonais a montre qu\'il sait gerer la puissance (a soumis Tuivasa) et devrait utiliser le jab, la distance et l\'experience pour gagner aux points. Cependant, la defaite recente par KO contre Delija souleve des questions sur le menton de Tybura a 40 ans, et Fortune a des mains lourdes.',
      x_factor: { title: 'La defense de takedown de Tybura contre la lutte de Fortune', description: 'Tybura possede la 5e meilleure defense de takedown de l\'histoire des poids lourds UFC (79%). Fortune a construit sa carriere sur la lutte, avec un titre NCAA Division II. Si Tybura defend les mises au sol, le combat reste sur son terrain. Si Fortune le met au sol, le jeu change completement.' },
      upset_alert: { title: 'Fortune a la puissance pour mettre KO n\'importe qui', description: 'Avec 65% de victoires par KO/TKO, Fortune n\'a pas besoin de beaucoup d\'occasions. Tybura a ete mis KO par Delija en septembre 2025, et a 40 ans, sa capacite a encaisser les coups pourrait diminuer. Un overhand droit ou un uppercut dans le clinch pourrait mettre fin a la soiree rapidement.' },
      probabilities: { fighter1: { nome: 'Tybura', percent: 55 }, fighter2: { nome: 'Fortune', percent: 43 }, draw: 2 },
      value_picks: undefined,
    },
  },
};

const analiseES: PrelimsAnalise = {
  ...analisePT,
  evento_data: '28 de marzo, 2026',
  evento_local: 'Climate Pledge Arena, Seattle, Washington',
  categoria_peso: 'Peso Pesado (265 lbs)',
  fight_prediction: {
    ...analisePT.fight_prediction,
    predictedMethod: 'Decision Unanime',
    confidence: 'MEDIA',
  },
  prelims_analysis: {
    hero: {
      ...analisePT.prelims_analysis.hero,
      evento_data: '28 de marzo, 2026',
      categoria_peso: 'Peso Pesado (265 lbs)',
    },
    comparacao_estatistica: {
      stats: [
        { label: 'Golpes Sign. por Minuto', valueA: 3.55, valueB: 3.20, maxVal: 7, format: 'decimal', note: 'Tybura tiene un volumen ligeramente superior, consistente en 23 peleas en UFC' },
        { label: 'Precision de Golpes (%)', valueA: 48, valueB: 45, maxVal: 100, format: 'percent', note: 'Precision similar, ambos conectan casi la mitad de sus golpes' },
        { label: 'Golpes Recibidos/Min', valueA: 3.40, valueB: 3.10, maxVal: 7, format: 'decimal', reverseWinner: true, note: 'Numeros estimados para Fortune basados en el circuito regional y Bellator' },
        { label: 'Defensa de Golpes (%)', valueA: 55, valueB: 50, maxVal: 100, format: 'percent', note: 'Tybura tiene una defensa de golpes por encima del promedio de los peso pesado' },
        { label: 'Derribos por 15 Min', valueA: 1.39, valueB: 2.50, maxVal: 5, format: 'decimal', note: 'Fortune, ex-luchador NCAA Division II, busca mas derribos' },
        { label: 'Precision de Derribo (%)', valueA: 33, valueB: 42, maxVal: 100, format: 'percent', note: 'Fortune convierte mas derribos, reflejo de su trayectoria en lucha' },
        { label: 'Defensa de Derribo (%)', valueA: 79, valueB: 65, maxVal: 100, format: 'percent', note: 'Tybura tiene una de las mejores defensas de derribo en la historia de la division (top 5 historico)' },
      ],
      tale_of_tape: [
        { label: 'Edad', fighter1: '40 anos', fighter2: '35 anos', note: '5 anos de diferencia, factor relevante en la division mas pesada' },
        { label: 'Altura', fighter1: '1,91m (6\'3")', fighter2: '1,88m (6\'2")', note: null },
        { label: 'Envergadura', fighter1: '198cm (78")', fighter2: '196cm (77")', note: 'Tybura tiene una ligera ventaja de alcance' },
        { label: 'Guardia', fighter1: 'Ortodoxa', fighter2: 'Ortodoxa', note: null },
        { label: 'Gimnasio', fighter1: 'S4 Fight Club / Lodz, Polonia', fighter2: 'Tempe, Arizona (ex-Blackzilians)', note: null },
      ],
    },
    historico_lutas: {
      fighter1: {
        nome: 'Tybura',
        recent_fights: [
          { date: 'Sep 2025', opponent: 'Ante Delija', result: 'L', method: 'KO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Noqueado en el primer round en Paris. Derrota preocupante contra un recien llegado a la division.' },
          { date: 'Mar 2025', opponent: 'Mick Parkin', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Victoria solida por puntos en Londres contra un prospecto britanico prometedor.' },
          { date: 'Nov 2024', opponent: 'Jhonata Diniz', result: 'W', method: 'TKO R2', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Detencion medica al final del segundo round tras codazos en el suelo en UFC 309.' },
          { date: 'Ago 2024', opponent: 'Serghei Spivac', result: 'L', method: 'Sub R1 (Armbar)', opponent_rank: '#12 HW', quality_score: 3, quality_label: 'Bueno', note: 'Sometido rapidamente por armbar. Segunda pelea entre ambos, Spivac gano esta vez.' },
          { date: 'Mar 2024', opponent: 'Tai Tuivasa', result: 'W', method: 'Sub R1 (RNC)', opponent_rank: '#14 HW', quality_score: 3, quality_label: 'Bueno', note: 'Sometio a Tuivasa con estrangulamiento trasero en el primer round, mostrando un JJB afilado.' },
        ],
      },
      fighter2: {
        nome: 'Fortune',
        recent_fights: [
          { date: '2025', opponent: 'Demoreo Dennis', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Malo', note: 'Finalizacion rapida en el primer round en el circuito regional antes de firmar con UFC.' },
          { date: '2025', opponent: 'Tony Lopez', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Malo', note: 'Otra finalizacion rapida en regional, manteniendose activo antes del debut en UFC.' },
          { date: '2025', opponent: 'Myron Dennis', result: 'W', method: 'Sub R1', opponent_rank: 'N/R', quality_score: 1, quality_label: 'Malo', note: 'Sumision en el primer round, dominio total contra un oponente regional.' },
          { date: '2024', opponent: 'Denis Goltsov', result: 'W', method: 'Decision Unanime', opponent_rank: 'N/R', quality_score: 3, quality_label: 'Bueno', note: 'Victoria por puntos en PFL contra un veterano ruso peso pesado. Prueba de nivel superior.' },
          { date: '2022', opponent: 'Daniel James', result: 'W', method: 'TKO R1', opponent_rank: 'N/R', quality_score: 2, quality_label: 'Medio', note: 'Nocaut rapido en Bellator, continuando su racha de finalizaciones.' },
        ],
      },
    },
    perfil_habilidades: {
      skills: [
        { label: 'Golpeo de Pie', valueA: 68, valueB: 60, labelA: 'Bueno', labelB: 'Bueno', advantage: 'fighter1', advantage_note: 'Tybura tiene 3.55 SLpM con 48% de precision en UFC, probado contra los mejores peso pesado del mundo. Fortune tiene poder, pero nunca ha enfrentado golpeadores de elite.' },
        { label: 'Poder de Nocaut', valueA: 62, valueB: 72, labelA: 'Bueno', labelB: 'Bueno', advantage: 'fighter2', advantage_note: 'Fortune tiene 65% de victorias por KO/TKO (11 nocauts en 17 victorias). Tybura tiene 10 KOs en 27 victorias (37%). Fortune golpea mas fuerte.' },
        { label: 'Lucha', valueA: 60, valueB: 78, labelA: 'Bueno', labelB: 'Muy Bueno', advantage: 'fighter2', advantage_note: 'Fortune fue campeon NCAA Division II y compitio por el equipo nacional de EE.UU. Tybura compensa con 79% de defensa de derribo en UFC.' },
        { label: 'Jiu-Jitsu y Sumisiones', valueA: 72, valueB: 45, labelA: 'Bueno', labelB: 'Medio', advantage: 'fighter1', advantage_note: 'Tybura tiene 7 victorias por sumision, incluyendo una finalizacion reciente de Tuivasa. Cinturon negro de judo con transiciones peligrosas. Fortune tiene solo 1 sumision en su carrera.' },
        { label: 'Defensa General', valueA: 70, valueB: 55, labelA: 'Bueno', labelB: 'Bueno', advantage: 'fighter1', advantage_note: 'Tybura tiene 55% de defensa de golpes y 79% de defensa de derribo. Sobrevivio contra Aspinall, Gane, Blaydes. Fortune fue noqueado por Timothy Johnson y sometido.' },
        { label: 'Experiencia en el Octagono', valueA: 90, valueB: 30, labelA: 'Excelente', labelB: 'Malo', advantage: 'fighter1', advantage_note: 'Tybura tiene 23 peleas en UFC desde 2016, incluyendo combates contra campeones y top 5. Fortune hace su debut absoluto en el Octagono a los 35 anos.' },
      ],
      insight: 'Tybura es el veterano completo con casi una decada en UFC, jiu-jitsu peligroso y defensa de derribo de elite. Fortune trae lucha de nivel olimpico, poder de nocaut y atletismo, pero nunca ha pisado el Octagono. La gran pregunta: funcionara la lucha de Fortune contra la defensa de derribo historica de Tybura? Y si la pelea se mantiene de pie, sera la experiencia del polaco el factor decisivo?',
    },
    distribuicao_vitorias: {
      fighter1: { nome: 'Tybura', ko_tko: { count: 10, percent: 37 }, submission: { count: 7, percent: 26 }, decision: { count: 10, percent: 37 }, total_wins: 27 },
      fighter2: { nome: 'Fortune', ko_tko: { count: 11, percent: 65 }, submission: { count: 1, percent: 6 }, decision: { count: 5, percent: 29 }, total_wins: 17 },
      insight: 'Tybura es uno de los peleadores mas equilibrados de la division, con victorias repartidas equitativamente entre KO (37%), sumision (26%) y decision (37%). Puede ganar de cualquier manera. Fortune es un finalizador nato: 65% de victorias por nocaut. Si conecta limpio, la pelea puede terminar. Sin embargo, cuando Fortune no consigue el KO, tiende a ir a decision, lo que favorece la experiencia y el coeficiente de pelea de Tybura.',
    },
    previsao_final: {
      winner_name: 'Tybura',
      winner_side: 'fighter1',
      predicted_method: 'Decision Unanime',
      confidence_score: 5,
      confidence_label: 'MEDIA',
      explanation: 'Tybura tiene una ventaja masiva de experiencia en UFC, con 23 peleas contra la elite de la division. Su defensa de derribo del 79% deberia neutralizar la lucha de Fortune, y su jiu-jitsu ofrece peligro constante si la pelea va al suelo. Fortune trae poder explosivo y atletismo, pero debutar en UFC a los 35 anos contra un top 8 clasificado es una prueba brutal. El polaco ya ha demostrado que sabe manejar el poder (sometio a Tuivasa) y deberia usar el jab, la distancia y la experiencia para ganar por puntos. Sin embargo, la derrota reciente por KO contra Delija genera dudas sobre la mandibula de Tybura a los 40 anos, y Fortune tiene manos pesadas.',
      x_factor: { title: 'La defensa de derribo de Tybura contra la lucha de Fortune', description: 'Tybura tiene la 5a mejor defensa de derribo en la historia de los peso pesado de UFC (79%). Fortune construyo su carrera en la lucha, con un titulo NCAA Division II. Si Tybura defiende los derribos, la pelea se queda en su territorio. Si Fortune lo derriba, el juego cambia completamente.' },
      upset_alert: { title: 'Fortune tiene poder para noquear a cualquiera', description: 'Con 65% de victorias por KO/TKO, Fortune no necesita muchas oportunidades. Tybura fue noqueado por Delija en septiembre de 2025, y a los 40 anos, su capacidad para absorber dano podria estar disminuyendo. Un overhand derecho o un uppercut en el clinch podria terminar la noche temprano.' },
      probabilities: { fighter1: { nome: 'Tybura', percent: 55 }, fighter2: { nome: 'Fortune', percent: 43 }, draw: 2 },
      value_picks: undefined,
    },
  },
};

const analises: Record<string, PrelimsAnalise> = {
  pt: analisePT,
  en: analiseEN,
  fr: analiseFR,
  es: analiseES,
};

export default function Page() {
  const locale = useLocale();
  return <PrelimsAnalysisView analise={analises[locale] || analisePT} />;
}
