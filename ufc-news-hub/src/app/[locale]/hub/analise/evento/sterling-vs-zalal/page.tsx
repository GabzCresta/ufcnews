import { EventAnalysisView, type EventAnalysisData } from '@/components/analise/EventAnalysisView';
import type { EventFightCard } from '@/components/analise/EventAnalysisCard';

const mainCard: EventFightCard[] = [
  {
    slug: 'sterling-vs-zalal',
    fighter1: {
      nome: 'Aljamain Sterling',
      record: '25-5-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/STERLING_ALJAMAIN_04-25.png?itok=CTDMhloZ',
    },
    fighter2: {
      nome: 'Youssef Zalal',
      record: '18-5-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/ZALAL_YOUSSEF_04-25.png?itok=X9sVhoW1',
    },
    categoria_peso: 'Peso-Pena (145 lbs)',
    num_rounds: 5,
    predicted_winner: 'Youssef Zalal',
    predicted_method: 'Decisão Unânime ou Submissão R3-R5',
    confidence_label: 'MÉDIA-ALTA',
    is_main_event: true,
  },
  {
    slug: 'dumont-vs-edwards',
    fighter1: {
      nome: 'Norma Dumont',
      record: '13-2-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/DUMONT_NORMA_04-25.png?itok=Hf2nr-9T',
    },
    fighter2: {
      nome: 'Joselyne Edwards',
      record: '17-6-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/EDWARDS_JOSELYNE_04-25.png?itok=MBL7Tbjr',
    },
    categoria_peso: 'Peso-Galo Feminino (135 lbs)',
    num_rounds: 3,
    predicted_winner: 'Norma Dumont',
    predicted_method: 'Decisão Unânime',
    confidence_label: 'MÉDIA-ALTA',
  },
  {
    slug: 'garcia-vs-hernandez',
    fighter1: {
      nome: 'Rafa Garcia',
      record: '17-4-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/GARCIA_RAFA_04-25.png?itok=2n5wThHR',
    },
    fighter2: {
      nome: 'Alexander Hernandez',
      record: '18-8-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/HERNANDEZ_ALEXANDER_04-25.png?itok=cJv9LfWl',
    },
    categoria_peso: 'Peso-Leve (155 lbs)',
    num_rounds: 3,
    predicted_winner: 'Alexander Hernandez',
    predicted_method: 'TKO R2-R3',
    confidence_label: 'MÉDIA',
  },
  {
    slug: 'grant-vs-luna-martinetti',
    fighter1: {
      nome: 'Davey Grant',
      record: '15-8-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/GRANT_DAVEY_04-25.png?itok=RsGzx-xf',
    },
    fighter2: {
      nome: 'Adrián Luna Martinetti',
      record: '17-1-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/MARTINETTI_ADRIAN_04-25.png?itok=3nuZDraO',
    },
    categoria_peso: 'Peso-Galo (135 lbs)',
    num_rounds: 3,
    predicted_winner: 'Adrián Luna Martinetti',
    predicted_method: 'Finalização ou Decisão Unânime',
    confidence_label: 'MÉDIA',
  },
  {
    slug: 'jackson-vs-barcelos',
    fighter1: {
      nome: 'Montel Jackson',
      record: '15-3-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/JACKSON_MONTEL_04-25.png?itok=FvmNkd_I',
    },
    fighter2: {
      nome: 'Raoni Barcelos',
      record: '21-5-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/BARCELOS_RAONI_04-25.png?itok=afx586h5',
    },
    categoria_peso: 'Peso-Galo (135 lbs)',
    num_rounds: 3,
    predicted_winner: 'Raoni Barcelos',
    predicted_method: 'Decisão Unânime',
    confidence_label: 'MÉDIA',
  },
  {
    slug: 'buchecha-vs-spann',
    fighter1: {
      nome: 'Marcus Buchecha',
      record: '5-2-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/BUCHECHA_MARCUS_04-25.png?itok=jD_-dAb5',
    },
    fighter2: {
      nome: 'Ryan Spann',
      record: '23-11-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/SPANN_RYAN_04-25.png?itok=R_ASLfZ2',
    },
    categoria_peso: 'Peso-Pesado (265 lbs)',
    num_rounds: 3,
    predicted_winner: 'Marcus Buchecha',
    predicted_method: 'Submissão R1-R2',
    confidence_label: 'MÉDIA',
  },
];

const prelims: EventFightCard[] = [
  {
    slug: 'vieira-vs-mcconico',
    fighter1: {
      nome: 'Rodolfo Vieira',
      record: '11-3-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/VIEIRA_RODOLFO_04-25.png?itok=uSpNEgJQ',
    },
    fighter2: {
      nome: 'Eric McConico',
      record: '10-4-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/MCCONICO_ERIC_04-25.png?itok=lwOoAe-I',
    },
    categoria_peso: 'Peso-Médio (185 lbs)',
    num_rounds: 3,
    predicted_winner: 'Rodolfo Vieira',
    predicted_method: 'Submissão R1-R2',
    confidence_label: 'ALTA',
  },
  {
    slug: 'dumas-vs-mcvey',
    fighter1: {
      nome: 'Sedriques Dumas',
      record: '10-4-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/DUMAS_SEDRIQUES_04-25.png?itok=FAqCJpsK',
    },
    fighter2: {
      nome: 'Jackson McVey',
      record: '6-2-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/MCVEY_JACKSON_04-25.png?itok=3AWlhptp',
    },
    categoria_peso: 'Peso-Médio (185 lbs)',
    num_rounds: 3,
    predicted_winner: 'Sedriques Dumas',
    predicted_method: 'Decisão ou TKO tardio',
    confidence_label: 'BAIXA',
  },
  {
    slug: 'bueno-silva-vs-montague',
    fighter1: {
      nome: 'Mayra Bueno Silva',
      record: '10-6-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/BUENO_SILVA_MAYRA_04-25.png?itok=59N-32Vo',
    },
    fighter2: {
      nome: 'Michelle Montague',
      record: '7-0-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/MONTAGUE_MICHELLE_04-25.png?itok=TUf1jmBW',
    },
    categoria_peso: 'Peso-Galo Feminino (135 lbs)',
    num_rounds: 3,
    predicted_winner: 'Michelle Montague',
    predicted_method: 'Decisão Unânime',
    confidence_label: 'MÉDIA',
  },
  {
    slug: 'filho-vs-durden',
    fighter1: {
      nome: 'Jafel Filho',
      record: '17-4-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/FILHO_JAFEL_04-25.png?itok=V2263ImU',
    },
    fighter2: {
      nome: 'Cody Durden',
      record: '17-10-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/DURDEN_CODY_04-25.png?itok=qnlGL9LJ',
    },
    categoria_peso: 'Peso-Mosca (125 lbs)',
    num_rounds: 3,
    predicted_winner: 'Jafel Filho',
    predicted_method: 'Submissão R1',
    confidence_label: 'MÉDIA-ALTA',
  },
  {
    slug: 'griffin-vs-valenzuela',
    fighter1: {
      nome: 'Max Griffin',
      record: '20-12-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/GRIFFIN_MAX_04-25.png?itok=htjtrz9e',
    },
    fighter2: {
      nome: 'Victor Valenzuela',
      record: '12-4-0',
    },
    categoria_peso: 'Peso-Meio-Médio (170 lbs)',
    num_rounds: 3,
    predicted_winner: 'Max Griffin',
    predicted_method: 'Decisão Dividida',
    confidence_label: 'BAIXA',
  },
  {
    slug: 'alencar-vs-polastri',
    fighter1: {
      nome: 'Talita Alencar',
      record: '7-1-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/ALENCAR_TALITA_04-25.png?itok=PyxiDDXS',
    },
    fighter2: {
      nome: 'Julia Polastri',
      record: '14-5-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/POLASTRI_JULIA_04-25.png?itok=-0QEWJJa',
    },
    categoria_peso: 'Peso-Palha Feminino (115 lbs)',
    num_rounds: 3,
    predicted_winner: 'Julia Polastri',
    predicted_method: 'Decisão Unânime ou TKO tardio',
    confidence_label: 'BAIXA',
  },
  {
    slug: 'brennan-vs-marshall',
    fighter1: {
      nome: 'Lucas Brennan',
      record: '11-2-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/BRENNAN_LUCAS_04-25.png?itok=8SCbn6pb',
    },
    fighter2: {
      nome: 'Francis Marshall',
      record: '10-3-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/MARSHALL_FRANCIS_04-25.png?itok=P-NpnnZI',
    },
    categoria_peso: 'Peso-Leve (155 lbs)',
    num_rounds: 3,
    predicted_winner: 'Francis Marshall',
    predicted_method: 'Decisão Unânime ou TKO tardio',
    confidence_label: 'MÉDIA-ALTA',
  },
];

const data: EventAnalysisData = {
  evento_nome: 'UFC Fight Night: Sterling vs Zalal',
  evento_data: '25 de Abril, 2026',
  evento_local: 'Meta APEX, Las Vegas, Nevada',
  main_card: mainCard,
  prelims,
};

export default function Page() {
  return <EventAnalysisView data={data} />;
}
