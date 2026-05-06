import { EventAnalysisView, type EventAnalysisData } from '@/components/analise/EventAnalysisView';
import type { EventFightCard } from '@/components/analise/EventAnalysisCard';

const mainCard: EventFightCard[] = [
  {
    slug: 'chimaev-vs-strickland',
    fighter1: {
      nome: 'Khamzat Chimaev',
      record: '15-0-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/CHIMAEV_KHAMZAT_L_BELTMOCK.png?itok=F3tD3zjH',
    },
    fighter2: {
      nome: 'Sean Strickland',
      record: '30-7-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-02/STRICKLAND_SEAN_L_02-21.png?itok=uLztGsBT',
    },
    categoria_peso: 'Peso Médio (185 lbs)',
    num_rounds: 5,
    predicted_winner: 'Khamzat Chimaev',
    predicted_method: 'Decisão dominante ou submissão tardia',
    confidence_label: 'ALTA',
    is_main_event: true,
  },
  {
    slug: 'van-vs-taira',
    fighter1: {
      nome: 'Joshua Van',
      record: '16-2-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/VAN_JOSHUA_L_BELTMOCK.png?itok=oSYKPybb',
    },
    fighter2: {
      nome: 'Tatsuro Taira',
      record: '18-1-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-07/TAIRA_TATSURO_L_08-02.png?itok=TNdVtfW4',
    },
    categoria_peso: 'Peso Mosca (125 lbs)',
    num_rounds: 5,
    predicted_winner: 'Joshua Van',
    predicted_method: 'Decisão ou TKO tardio',
    confidence_label: 'ALTA',
  },
  {
    slug: 'volkov-vs-cortes-acosta',
    fighter1: {
      nome: 'Alexander Volkov',
      record: '39-11-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-10/VOLKOV_ALEXANDER_L_10-25.png?itok=6BGigt1n',
    },
    fighter2: {
      nome: 'Waldo Cortes-Acosta',
      record: '17-2-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/CORTES_ACOSTA_WALDO_L_01-24.png?itok=ltqBsxTz',
    },
    categoria_peso: 'Peso Pesado (265 lbs)',
    num_rounds: 3,
    predicted_winner: 'Alexander Volkov',
    predicted_method: 'Decisão ou KO/TKO',
    confidence_label: 'MÉDIA',
  },
  {
    slug: 'brady-vs-buckley',
    fighter1: {
      nome: 'Sean Brady',
      record: '18-2-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/BRADY_SEAN_L_11-15.png?itok=36TkDsO7',
    },
    fighter2: {
      nome: 'Joaquin Buckley',
      record: '21-7-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/BUCKLEY_JOAQUIN_L_05-11.png?itok=bdTVYbkP',
    },
    categoria_peso: 'Peso Meio-Médio (170 lbs)',
    num_rounds: 3,
    predicted_winner: 'Sean Brady',
    predicted_method: 'Decisão ou submissão tardia',
    confidence_label: 'MÉDIA-ALTA',
  },
  {
    slug: 'green-vs-stephens',
    fighter1: {
      nome: 'Bobby Green',
      record: '34-17-1',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/GREEN_KING_L_12-13.png?itok=HVqFKE1S',
    },
    fighter2: {
      nome: 'Jeremy Stephens',
      record: '29-22-1',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-05/STEPHENS_JEREMY_L_05-03.png?itok=kjaAy7yE',
    },
    categoria_peso: 'Peso Leve (155 lbs)',
    num_rounds: 3,
    predicted_winner: 'Bobby Green',
    predicted_method: 'Decisão',
    confidence_label: 'ALTA',
  },
];

const prelims: EventFightCard[] = [
  {
    slug: 'gautier-vs-diaz',
    fighter1: {
      nome: 'Ateba Gautier',
      record: '10-1-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-01/GAUTIER_ATEBA_L_01-24.png?itok=uIxSBKQu',
    },
    fighter2: {
      nome: 'Ozzy Diaz',
      record: '10-3-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/1/DIAZ_OZZY_L_CS.png?itok=fp4JS5bf',
    },
    categoria_peso: 'Peso Médio (185 lbs)',
    num_rounds: 3,
    predicted_winner: 'Ateba Gautier',
    predicted_method: 'KO/TKO ou Decisão',
    confidence_label: 'ALTA',
  },
  {
    slug: 'alvarez-vs-amosov',
    fighter1: {
      nome: 'Joel Alvarez',
      record: '23-3-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/2/ALVAREZ_JOEL_L_12-14.png?itok=-YA8lRPj',
    },
    fighter2: {
      nome: 'Yaroslav Amosov',
      record: '29-1-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/AMOSOV_YAROSLAV_R_12-13.png?itok=0HuVN0D3',
    },
    categoria_peso: 'Peso Meio-Médio (170 lbs)',
    num_rounds: 3,
    predicted_winner: 'Yaroslav Amosov',
    predicted_method: 'Sub tardia (anaconda) ou Decisão',
    confidence_label: 'ALTA',
  },
  {
    slug: 'dawson-vs-rebecki',
    fighter1: {
      nome: 'Grant Dawson',
      record: '23-3-1',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-12/DAWSON_GRANT_L_12-06.png?itok=nBaL9FTJ',
    },
    fighter2: {
      nome: 'Mateusz Rebecki',
      record: '20-4-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-07/REBECKI_MATEUSZ_L_08-02.png?itok=v5OHh52Y',
    },
    categoria_peso: 'Peso Leve (155 lbs)',
    num_rounds: 3,
    predicted_winner: 'Grant Dawson',
    predicted_method: 'Decisão',
    confidence_label: 'MÉDIA',
  },
  {
    slug: 'miller-vs-gordon',
    fighter1: {
      nome: 'Jim Miller',
      record: '38-19-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-04/MILLER_JIM_L_04-12.png?itok=tti4mGLi',
    },
    fighter2: {
      nome: 'Jared Gordon',
      record: '21-8-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-05/GORDON_JARED_L_05-17.png?itok=7BoiGI72',
    },
    categoria_peso: 'Peso Leve (155 lbs)',
    num_rounds: 3,
    predicted_winner: 'Jim Miller',
    predicted_method: 'Decisão ou submissão tardia',
    confidence_label: 'MÉDIA',
  },
  {
    slug: 'kopylov-vs-tulio',
    fighter1: {
      nome: 'Roman Kopylov',
      record: '14-5-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/KOPYLOV_ROMAN_L_11-15.png?itok=vkU7He50',
    },
    fighter2: {
      nome: 'Marco Tulio',
      record: '14-2-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/12/TULIO_MARCO_L_01-11.png?itok=1gXLlcIU',
    },
    categoria_peso: 'Peso Médio (185 lbs)',
    num_rounds: 3,
    predicted_winner: 'Roman Kopylov',
    predicted_method: 'KO/TKO ou Decisão',
    confidence_label: 'MÉDIA-ALTA',
  },
  {
    slug: 'sabatini-vs-gomis',
    fighter1: {
      nome: 'Pat Sabatini',
      record: '21-5-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/SABATINI_PAT_L_11-15.png?itok=UyToqZ-o',
    },
    fighter2: {
      nome: 'William Gomis',
      record: '15-2-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-09/GOMIS_WILLIAM_L_09-06.png?itok=zDqQAPQ7',
    },
    categoria_peso: 'Peso Pena (145 lbs)',
    num_rounds: 3,
    predicted_winner: 'Pat Sabatini',
    predicted_method: 'Submissão ou Decisão',
    confidence_label: 'MÉDIA-ALTA',
  },
  {
    slug: 'susurkaev-vs-santos',
    fighter1: {
      nome: 'Baisangur Susurkaev',
      record: '11-0-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-11/SUSURKAEV_BAISANGUR_L_11-15.png?itok=Q9PQ4-Up',
    },
    fighter2: {
      nome: 'Djorden Santos',
      record: '8-2-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/SANTOS_DJORDEN_L_03-08.png?itok=Tc_C5Nff',
    },
    categoria_peso: 'Peso Médio (185 lbs)',
    num_rounds: 3,
    predicted_winner: 'Baisangur Susurkaev',
    predicted_method: 'KO/TKO ou Decisão',
    confidence_label: 'MÉDIA-ALTA',
  },
  {
    slug: 'carpenter-vs-ochoa',
    fighter1: {
      nome: 'Clayton Carpenter',
      record: '8-2-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/6/CARPENTER_CLAYTON_L_10-12.png?itok=qT0YKGEx',
    },
    fighter2: {
      nome: 'Jose Ochoa',
      record: '8-2-0',
      foto_url: 'https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-11/OCHOA_JOSE_R_11-23.png?itok=LfDooxPs',
    },
    categoria_peso: 'Peso Mosca (125 lbs)',
    num_rounds: 3,
    predicted_winner: 'Jose Ochoa',
    predicted_method: 'KO/TKO',
    confidence_label: 'MÉDIA-ALTA',
  },
];

const data: EventAnalysisData = {
  evento_nome: 'UFC 328: Chimaev vs Strickland',
  evento_data: '9 de Maio, 2026',
  evento_local: 'Prudential Center, Newark, New Jersey',
  poster_url: undefined,
  main_card: mainCard,
  prelims,
};

export default function Page() {
  return <EventAnalysisView data={data} />;
}
