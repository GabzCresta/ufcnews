import { EventAnalysisView, type EventAnalysisData } from '@/components/analise/EventAnalysisView';
import type { EventFightCard } from '@/components/analise/EventAnalysisCard';

const mainCard: EventFightCard[] = [
  {
    slug: 'burns-vs-malott',
    fighter1: {
      nome: 'Gilbert Burns',
      record: '22-9-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/BURNS_GILBERT_04-18.png?itok=AJQ8aLx7',
    },
    fighter2: {
      nome: 'Mike Malott',
      record: '13-2-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/MALOTT_MIKE_04-18.png?itok=Rlel8E-c',
    },
    categoria_peso: 'Peso Meio-Medio (170 lbs)',
    num_rounds: 5,
    predicted_winner: 'Mike Malott',
    predicted_method: 'TKO R3-R4 ou Decisao Unanime',
    confidence_label: 'MEDIA-ALTA',
    is_main_event: true,
  },
  {
    slug: 'phillips-vs-jourdain',
    fighter1: {
      nome: 'Kyler Phillips',
      record: '12-4',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/PHILLIPS_KYLER_04-18.png?itok=4ILSKyJi',
    },
    fighter2: {
      nome: 'Charles Jourdain',
      record: '17-8-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/JOURDAIN_CHARLES_04-18.png?itok=NYq_uXrQ',
    },
    categoria_peso: 'Peso Galo (135 lbs)',
    num_rounds: 3,
    predicted_winner: 'Charles Jourdain',
    predicted_method: 'Decisao Unanime ou Sub R2',
    confidence_label: 'MEDIA',
    is_main_event: false,
  },
  {
    slug: 'nallo-vs-herbert',
    fighter1: {
      nome: 'Mandel Nallo',
      record: '14-3',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/NALLO_MANDEL_04-18.png?itok=hi0itxUL',
    },
    fighter2: {
      nome: 'Jai Herbert',
      record: '13-6-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/HERBERT_JAI_04-18.png?itok=AAou77kE',
    },
    categoria_peso: 'Peso Leve (155 lbs)',
    num_rounds: 3,
    predicted_winner: 'Mandel Nallo',
    predicted_method: 'Decisao Unanime ou TKO R3',
    confidence_label: 'MEDIA-ALTA',
    is_main_event: false,
  },
  {
    slug: 'jasudavicius-vs-silva',
    fighter1: {
      nome: 'Jasmine Jasudavicius',
      record: '14-4',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/JASUDAVICIUS_JASMINE_04-18.png?itok=1c6hsLMh',
    },
    fighter2: {
      nome: 'Karine Silva',
      record: '19-6',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/SILVA_KARINE_04-18.png?itok=Y988AH1S',
    },
    categoria_peso: 'Peso Mosca Feminino (125 lbs)',
    num_rounds: 3,
    predicted_winner: 'Jasmine Jasudavicius',
    predicted_method: 'Decisao Unanime',
    confidence_label: 'MEDIA-ALTA',
    is_main_event: false,
  },
  {
    slug: 'moises-vs-young',
    fighter1: {
      nome: 'Thiago Moises',
      record: '19-9',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/MOISES_THIAGO_04-18.png?itok=b2mCLSDd',
    },
    fighter2: {
      nome: 'Gauge Young',
      record: '10-3',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-08/YOUNG_GAUGE_08-23.png?itok=eUddcGnq',
    },
    categoria_peso: 'Peso Leve (155 lbs)',
    num_rounds: 3,
    predicted_winner: 'Gauge Young',
    predicted_method: 'Decisao Unanime',
    confidence_label: 'MEDIA',
    is_main_event: false,
  },
];

const prelims: EventFightCard[] = [
  {
    slug: 'buzukja-vs-barbosa',
    fighter1: {
      nome: 'Dennis Buzukja',
      record: '8-4',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/BUZUKJA_DENNIS_04-18.png?itok=VA15cDAZ',
    },
    fighter2: {
      nome: 'Marcio Barbosa',
      record: '13-2',
    },
    categoria_peso: 'Peso Pena (145 lbs)',
    num_rounds: 3,
    predicted_winner: 'Marcio Barbosa',
    predicted_method: 'TKO R1-R2',
    confidence_label: 'MEDIA-ALTA',
    is_main_event: false,
  },
  {
    slug: 'leblanc-vs-valentin',
    fighter1: {
      nome: 'Julien Leblanc',
      record: '10-2',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/LEBLANC_JULIEN_04-18.png?itok=Cie9uYWg',
    },
    fighter2: {
      nome: 'Robert Valentin',
      record: '10-6',
    },
    categoria_peso: 'Peso Medio (185 lbs)',
    num_rounds: 3,
    predicted_winner: 'Julien Leblanc',
    predicted_method: 'Decisao Unanime ou TKO R3',
    confidence_label: 'MEDIA',
    is_main_event: false,
  },
  {
    slug: 'boser-vs-saricam',
    fighter1: {
      nome: 'Tanner Boser',
      record: '22-10-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/BOSER_TANNER_04-18.png?itok=sy002MXS',
    },
    fighter2: {
      nome: 'Gokhan Saricam',
      record: '11-2',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/SARICAM_GOKHAN_04-18.png?itok=rnctr_2C',
    },
    categoria_peso: 'Peso Pesado (265 lbs)',
    num_rounds: 3,
    predicted_winner: 'Tanner Boser',
    predicted_method: 'Decisao Unanime ou TKO R2',
    confidence_label: 'MEDIA',
    is_main_event: false,
  },
  {
    slug: 'croden-vs-zheleznyakova',
    fighter1: {
      nome: 'Melissa Croden',
      record: '7-3',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-10/CRODEN_MELISSA_10-18.png?itok=OJOVEIL6',
    },
    fighter2: {
      nome: 'Darya Zheleznyakova',
      record: '10-2',
    },
    categoria_peso: 'Peso Galo Feminino (135 lbs)',
    num_rounds: 3,
    predicted_winner: 'Melissa Croden',
    predicted_method: 'Decisao Unanime',
    confidence_label: 'MEDIA',
    is_main_event: false,
  },
  {
    slug: 'aldrich-vs-horth',
    fighter1: {
      nome: 'JJ Aldrich',
      record: '13-6',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/ALDRICH_JJ_04-18.png?itok=Okk4qo71',
    },
    fighter2: {
      nome: 'Jamey-Lyn Horth',
      record: '8-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/HORTH_JAMEY-LYN_04-18.png?itok=bkpUckpy',
    },
    categoria_peso: 'Peso Mosca Feminino (125 lbs)',
    num_rounds: 3,
    predicted_winner: 'Jamey-Lyn Horth',
    predicted_method: 'Decisao Unanime',
    confidence_label: 'MEDIA',
    is_main_event: false,
  },
  {
    slug: 'castaneda-vs-vologdin',
    fighter1: {
      nome: 'John Castaneda',
      record: '20-7',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/CASTANEDA_JOHN_04-18.png?itok=lUBzUHPZ',
    },
    fighter2: {
      nome: 'Mark Vologdin',
      record: '14-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/VOLOGDIN_MARK_04-18.png?itok=OSG9Gw1b',
    },
    categoria_peso: 'Catchweight 139 lbs',
    num_rounds: 3,
    predicted_winner: 'John Castaneda',
    predicted_method: 'Decisao Unanime ou TKO R3',
    confidence_label: 'MEDIA-ALTA',
    is_main_event: false,
  },
  {
    slug: 'siraj-vs-yannis',
    fighter1: {
      nome: 'Jamie Siraj',
      record: '14-3',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-04/SIRAJ_JAMIE_04-18.png?itok=tavVjyWz',
    },
    fighter2: {
      nome: 'John Yannis',
      record: '9-4',
    },
    categoria_peso: 'Peso Galo (135 lbs)',
    num_rounds: 3,
    predicted_winner: 'Jamie Siraj',
    predicted_method: 'Decisao Unanime',
    confidence_label: 'MEDIA',
    is_main_event: false,
  },
];

const eventData: EventAnalysisData = {
  evento_nome: 'UFC Fight Night: Burns vs Malott',
  evento_data: '18 de Abril, 2026',
  evento_local: 'Canada Life Centre, Winnipeg, Manitoba',
  main_card: mainCard,
  prelims,
};

export default function Page() {
  return <EventAnalysisView data={eventData} />;
}
