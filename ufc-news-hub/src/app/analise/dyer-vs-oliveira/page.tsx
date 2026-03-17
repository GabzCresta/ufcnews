'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import type { PrelimsAnalise } from '@/types/analise';
import type { Lang } from '@/lib/i18n-labels';

const analisePT: PrelimsAnalise = {
  id: 'dyer-vs-oliveira',
  evento_id: null,
  slug: 'dyer-vs-oliveira',
  titulo: 'Dyer vs Oliveira',
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
    nome: 'Shanelle Dyer',
    record: '6-1-0',
    ultimasLutas: [],
  },
  fighter2_info: {
    nome: 'Ravena Oliveira',
    record: '7-3-1',
    ultimasLutas: [],
  },
  evento_nome: 'UFC Fight Night: Evloev vs Murphy',
  evento_data: '21 de Marco, 2026',
  evento_local: 'The O2 Arena, Londres, Reino Unido',
  categoria_peso: 'Peso Palha Feminino (115 lbs)',
  num_rounds: 3,
  is_titulo: false,
  broadcast: null,
  status: 'published',
  analysis_type: 'prelims',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),

  prelims_analysis: {
    hero: {
      evento_nome: 'UFC Fight Night: Evloev vs Murphy',
      evento_data: '21 de Marco, 2026',
      categoria_peso: 'Peso Palha Feminino (115 lbs)',
      num_rounds: 3,
      is_titulo: false,
      fighter1: {
        nome: 'Dyer',
        record: '6-1-0',
        ranking: undefined,
      },
      fighter2: {
        nome: 'Oliveira',
        record: '7-3-1',
        ranking: undefined,
      },
    },

    comparacao_estatistica: {
      stats: [
        {
          label: 'Sig. Strikes por Minuto',
          valueA: 4.80,
          valueB: 5.20,
          maxVal: 8,
          format: 'decimal',
          note: 'Ambas com volume alto para a divisao feminina, luta tende a ser agitada',
        },
        {
          label: 'Precisao de Strikes (%)',
          valueA: 46,
          valueB: 42,
          maxVal: 100,
          format: 'percent',
          note: 'Dyer conecta com mais precisao, fruto do background de Muay Thai',
        },
        {
          label: 'Strikes Absorvidos/Min',
          valueA: 4.50,
          valueB: 5.10,
          maxVal: 7,
          format: 'decimal',
          reverseWinner: true,
          note: 'Oliveira absorve mais golpes, foi finalizada no terceiro round contra Luciano',
        },
        {
          label: 'Defesa de Strikes (%)',
          valueA: 48,
          valueB: 40,
          maxVal: 100,
          format: 'percent',
          note: 'Dyer tem defesa superior, embora ambas ainda tenham muito a melhorar',
        },
        {
          label: 'Takedowns por 15 Min',
          valueA: 0.60,
          valueB: 0.80,
          maxVal: 5,
          format: 'decimal',
        },
        {
          label: 'Precisao de Takedown (%)',
          valueA: 33,
          valueB: 35,
          maxVal: 100,
          format: 'percent',
        },
        {
          label: 'Defesa de Takedown (%)',
          valueA: 70,
          valueB: 55,
          maxVal: 100,
          format: 'percent',
          note: 'Dyer defende takedowns de forma mais consistente',
        },
      ],
      tale_of_tape: [
        { label: 'Idade', fighter1: '24 anos', fighter2: '29 anos', note: 'Dyer e 5 anos mais jovem' },
        { label: 'Altura', fighter1: '1,67m (5\'6")', fighter2: '1,65m (5\'5")', note: null },
        { label: 'Envergadura', fighter1: '167cm (65.7")', fighter2: '165cm (65")', note: null },
        { label: 'Stance', fighter1: 'Ortodoxa', fighter2: 'Ortodoxa', note: null },
        { label: 'Academia', fighter1: 'Great Britain Top Team / Inglaterra', fighter2: 'Galpao da Luta / Salvador, Brasil', note: null },
      ],
    },

    historico_lutas: {
      fighter1: {
        nome: 'Dyer',
        recent_fights: [
          {
            date: 'Set 2025',
            opponent: 'Carol Foro',
            result: 'L',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Derrota na DWCS mas ganhou contrato mesmo assim. Foi derrubada 2 vezes no R1 mas se recuperou com coragem impressionante.',
          },
          {
            date: 'Set 2024',
            opponent: 'Valentina Scatizzi',
            result: 'W',
            method: 'Decisao Dividida',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Vitoria por decisao dividida no PFL Europe 3 Playoffs, mostrando competitividade em luta acirrada.',
          },
          {
            date: 'Jun 2024',
            opponent: 'Mariam Torchinava',
            result: 'W',
            method: 'KO R1 (head kick, 3:53)',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Nocaute por chute na cabeca no PFL Europe, mostrando tecnica de Muay Thai de alto nivel.',
          },
          {
            date: 'Dez 2023',
            opponent: 'Liliya Kazak',
            result: 'W',
            method: 'TKO R3 (1:08)',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'TKO no terceiro round no Ares 18, mostrando capacidade de manter pressao.',
          },
          {
            date: 'Set 2023',
            opponent: 'Luisa Fernanda Cifuentes',
            result: 'W',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Vitoria por pontos no PFL Europe Playoffs, mostrando capacidade de lutar 3 rounds completos.',
          },
        ],
      },
      fighter2: {
        nome: 'Oliveira',
        recent_fights: [
          {
            date: 'Out 2025',
            opponent: 'Stephanie Luciano',
            result: 'L',
            method: 'Sub R3 (mata-leao, 2:50)',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Finalizada no terceiro round, fadiga pareceu ser fator. Ainda sem vitoria no UFC.',
          },
          {
            date: 'Out 2023',
            opponent: 'Tainara Lisboa',
            result: 'L',
            method: 'Decisao Unanime',
            opponent_rank: 'N/R',
            quality_score: 2,
            quality_label: 'Medio',
            note: 'Estreia no UFC por decisao unanime. Nao conseguiu impor seu jogo de strikes contra veterana.',
          },
          {
            date: 'Ago 2023',
            opponent: 'Simone da Silva',
            result: 'W',
            method: 'KO/TKO R1',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Nocaute no primeiro round no LKC 5, antes de assinar com o UFC.',
          },
          {
            date: 'Jul 2023',
            opponent: 'Raquel de Andrade',
            result: 'W',
            method: 'KO/TKO R1',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Nocaute rapido no MC Fight, mostrando poder impressionante para a divisao.',
          },
          {
            date: 'Jan 2022',
            opponent: 'Sheila Amaral',
            result: 'W',
            method: 'Submissao R1',
            opponent_rank: 'N/R',
            quality_score: 1,
            quality_label: 'Ruim',
            note: 'Finalizacao no primeiro round no Demo Fight 11, unica vitoria por submissao na carreira.',
          },
        ],
      },
    },

    perfil_habilidades: {
      skills: [
        {
          label: 'Striking em Pe',
          valueA: 72,
          valueB: 68,
          labelA: 'Bom',
          labelB: 'Bom',
          advantage: 'fighter1',
          advantage_note: 'Dyer treina Muay Thai desde os 9 anos e tem tecnica mais refinada. Oliveira tem poder bruto mas menos tecnica.',
        },
        {
          label: 'Poder de Nocaute',
          valueA: 72,
          valueB: 78,
          labelA: 'Bom',
          labelB: 'Muito Bom',
          advantage: 'fighter2',
          advantage_note: 'Oliveira tem 86% de vitorias por KO/TKO, poder raro na divisao feminina. Dyer tambem tem 67% de KOs, ambas perigosas.',
        },
        {
          label: 'Wrestling e Grappling',
          valueA: 50,
          valueB: 45,
          labelA: 'Medio',
          labelB: 'Medio',
          advantage: 'even',
          advantage_note: 'Nenhuma das duas e forte no grappling. Ambas preferem resolver em pe, a luta tende a ficar na trocacao.',
        },
        {
          label: 'Defesa Geral',
          valueA: 58,
          valueB: 42,
          labelA: 'Bom',
          labelB: 'Medio',
          advantage: 'fighter1',
          advantage_note: 'Dyer mostrou resiliencia incrivel ao se recuperar de 2 quedas contra Foro. Oliveira foi finalizada no R3 por Luciano.',
        },
        {
          label: 'Cardio e Ritmo',
          valueA: 68,
          valueB: 52,
          labelA: 'Bom',
          labelB: 'Medio',
          advantage: 'fighter1',
          advantage_note: 'Dyer lutou 3 rounds contra Foro e melhorou nos rounds finais. Oliveira foi finalizada no R3, possivel problema de cardio.',
        },
        {
          label: 'Experiencia no UFC',
          valueA: 25,
          valueB: 35,
          labelA: 'Ruim',
          labelB: 'Medio',
          advantage: 'fighter2',
          advantage_note: 'Oliveira tem 2 lutas no UFC (0V-2D). Dyer faz sua estreia oficial no Octagon. Nenhuma tem vantagem significativa.',
        },
      ],
      insight: 'Duas strikers com poder de nocaute acima da media para a divisao feminina. Dyer tem tecnica superior com background de Muay Thai e melhor cardio, enquanto Oliveira traz poder bruto explosivo nos primeiros rounds. Dyer precisa sobreviver ao inicio e impor seu ritmo. Se a luta passar do R2, a vantagem muda completamente para a inglesa.',
    },

    distribuicao_vitorias: {
      fighter1: {
        nome: 'Dyer',
        ko_tko: { count: 4, percent: 67 },
        submission: { count: 0, percent: 0 },
        decision: { count: 2, percent: 33 },
        total_wins: 6,
      },
      fighter2: {
        nome: 'Oliveira',
        ko_tko: { count: 6, percent: 86 },
        submission: { count: 1, percent: 14 },
        decision: { count: 0, percent: 0 },
        total_wins: 7,
      },
      insight: 'Duas nocauteadoras na divisao mais leve do UFC feminino. Oliveira tem o indice mais impressionante com 86% de vitorias por KO/TKO, numero raro entre mulheres. Dyer tem 67% de nocautes. Nenhuma das duas vence por decisao com frequencia (Oliveira nunca venceu nos pontos). Esta luta tem alta probabilidade de finalizacao por strikes.',
    },

    previsao_final: {
      winner_name: 'Dyer',
      winner_side: 'fighter1',
      predicted_method: 'Decisao Unanime',
      confidence_score: 5,
      confidence_label: 'MEDIA',
      explanation: 'Shanelle Dyer tem a vantagem de lutar em casa na O2 Arena e demonstrou resiliencia incrivel ao se recuperar de duas quedas contra Carol Foro no DWCS. Seu Muay Thai e tecnicamente superior ao striking de Oliveira e seu cardio e visivelmente melhor. Oliveira tem poder explosivo mas vem de 2 derrotas consecutivas no UFC e mostrou vulnerabilidade no cardio ao ser finalizada no terceiro round. Se Dyer sobreviver ao primeiro round e impor seu ritmo nos rounds 2 e 3, deve acumular pontos suficientes para a vitoria. Porem, o poder de Oliveira no inicio da luta torna qualquer previsao incerta.',
      x_factor: {
        title: 'A resiliencia de Dyer',
        description: 'Ser derrubada 2 vezes no primeiro round da DWCS e voltar para lutar os 3 rounds completos mostra uma mentalidade de guerreira. Em casa, com a torcida empurrando, essa resiliencia pode ser o fator decisivo se Oliveira conectar cedo.',
      },
      upset_alert: {
        title: 'Oliveira tem poder para surpreender qualquer uma',
        description: 'Com 86% de vitorias por nocaute, Oliveira e uma das maiores nocauteadoras da divisao. Se conectar limpo nos primeiros minutos como fez nas suas 6 vitorias por KO no circuito regional, pode acabar com a luta antes de Dyer ter tempo de se adaptar.',
      },
      probabilities: {
        fighter1: { nome: 'Dyer', percent: 55 },
        fighter2: { nome: 'Oliveira', percent: 43 },
        draw: 2,
      },
      value_picks: undefined,
    },
  },
};

function PageContent() {
  const searchParams = useSearchParams();
  const lang = (searchParams.get('lang') === 'en' ? 'en' : 'pt') as Lang;
  const analise = analisePT; // TODO: add analiseEN
  return <PrelimsAnalysisView analise={analise} lang={lang} />;
}

export default function Page() {
  return <Suspense><PageContent /></Suspense>;
}
