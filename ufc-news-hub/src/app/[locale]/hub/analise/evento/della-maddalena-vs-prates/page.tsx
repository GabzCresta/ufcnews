import { EventAnalysisView, type EventAnalysisData } from '@/components/analise/EventAnalysisView';
import type { EventFightCard } from '@/components/analise/EventAnalysisCard';

const mainCard: EventFightCard[] = [
  {
    slug: 'della-maddalena-vs-prates',
    fighter1: {
      nome: 'Jack Della Maddalena',
      record: '18-3-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-05/DELLA_MADDALENA_JACK_05-10.png?itok=x4mV19HN',
    },
    fighter2: {
      nome: 'Carlos Prates',
      record: '23-7-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-11/PRATES_CARLOS_11-15.png?itok=mTDkjL7Z',
    },
    categoria_peso: 'Peso Meio-Médio (170 lbs)',
    num_rounds: 5,
    predicted_winner: 'Carlos Prates',
    predicted_method: 'KO/TKO ou Decisão',
    confidence_label: 'MÉDIA-ALTA',
    is_main_event: true,
  },
  {
    slug: 'dariush-vs-salkilld',
    fighter1: {
      nome: 'Beneil Dariush',
      record: '23-7-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-11/DARIUSH_BENEIL_11-15.png?itok=1H8QGA0s',
    },
    fighter2: {
      nome: 'Quillan Salkilld',
      record: '11-1-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-01/SALKILLD_QUILLAN_01-31.png?itok=KqoU3Eu6',
    },
    categoria_peso: 'Peso Leve (155 lbs)',
    num_rounds: 3,
    predicted_winner: 'Quillan Salkilld',
    predicted_method: 'KO/TKO ou Sub R1-R2',
    confidence_label: 'MÉDIA-ALTA',
  },
  {
    slug: 'elliott-vs-erceg',
    fighter1: {
      nome: 'Tim Elliott',
      record: '22-13-1',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-08/ELLIOTT_TIM_08-16.png?itok=yGbFedlk',
    },
    fighter2: {
      nome: 'Steve Erceg',
      record: '13-4-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-08/ERCEG_STEVE_08-09.png?itok=SrHeciUp',
    },
    categoria_peso: 'Peso Mosca (125 lbs)',
    num_rounds: 3,
    predicted_winner: 'Steve Erceg',
    predicted_method: 'Decisão ou TKO Tardio',
    confidence_label: 'MÉDIA',
  },
  {
    slug: 'gaziev-vs-pericic',
    fighter1: {
      nome: 'Shamil Gaziev',
      record: '14-2-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-11/GAZIEV_SHAMIL_11-22.png?itok=Oa_BMW_4',
    },
    fighter2: {
      nome: 'Brando Pericic',
      record: '6-1-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-03/PERICIC_BRANDO_03-21.png?itok=06j8UddT',
    },
    categoria_peso: 'Peso Pesado (265 lbs)',
    num_rounds: 3,
    predicted_winner: 'Brando Pericic',
    predicted_method: 'KO/TKO R1-R2',
    confidence_label: 'MÉDIA',
  },
  {
    slug: 'tuivasa-vs-sutherland',
    fighter1: {
      nome: 'Tai Tuivasa',
      record: '15-9-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-01/TUIVASA_TAI_01-31.png?itok=6jy26zsq',
    },
    fighter2: {
      nome: 'Louie Sutherland',
      record: '10-5-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-03/SUTHERLAND_LOUIE_03-21.png?itok=JhTTqYXQ',
    },
    categoria_peso: 'Peso Pesado (265 lbs)',
    num_rounds: 3,
    predicted_winner: 'Tai Tuivasa',
    predicted_method: 'KO/TKO R1-R2',
    confidence_label: 'BAIXA',
  },
];

const prelims: EventFightCard[] = [
  {
    slug: 'rowston-vs-bryczek',
    fighter1: {
      nome: 'Cameron Rowston',
      record: '14-3-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-01/ROWSTON_CAM_01-31.png?itok=F9hn8GVv',
    },
    fighter2: {
      nome: 'Robert Bryczek',
      record: '18-6-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-09/BRYZCEK_ROBERT_09-06.png?itok=ZKhxHwX4',
    },
    categoria_peso: 'Peso Médio (185 lbs)',
    num_rounds: 3,
    predicted_winner: 'Cameron Rowston',
    predicted_method: 'TKO ou Decisão',
    confidence_label: 'MÉDIA',
  },
  {
    slug: 'tafa-vs-christian',
    fighter1: {
      nome: 'Junior Tafa',
      record: '6-5-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-01/TAFA_JUNIOR_01-31.png?itok=dMEtexG9',
    },
    fighter2: {
      nome: 'Kevin Christian',
      record: '9-3-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-11/CHRISTIAN_KEVIN_11-01.png?itok=6EPUHLAC',
    },
    categoria_peso: 'Peso Meio-Pesado (205 lbs)',
    num_rounds: 3,
    predicted_winner: 'Junior Tafa',
    predicted_method: 'KO R1 ou Sub R2 (luta binária)',
    confidence_label: 'BAIXA',
  },
  {
    slug: 'malkoun-vs-meerschaert',
    fighter1: {
      nome: 'Jacob Malkoun',
      record: '9-3-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-01/MALKOUN_JACOB_01-31.png?itok=r2BReTZt',
    },
    fighter2: {
      nome: 'Gerald Meerschaert',
      record: '37-21-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-11/MEERSCHAERT_GERALD_11-15.png?itok=YcPFtn2p',
    },
    categoria_peso: 'Peso Médio (185 lbs)',
    num_rounds: 3,
    predicted_winner: 'Jacob Malkoun',
    predicted_method: 'TKO ou Decisão',
    confidence_label: 'MÉDIA-ALTA',
  },
  {
    slug: 'thicknesse-vs-morales',
    fighter1: {
      nome: 'Colby Thicknesse',
      record: '8-1-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-09/THICKNESSE_COLBY_09-27.png?itok=1d2fFKt6',
    },
    fighter2: {
      nome: 'Vince Morales',
      record: '16-10-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-03/MORALES_VINCE_03-29.png?itok=b7hBYE_T',
    },
    categoria_peso: 'Peso Galo (135 lbs)',
    num_rounds: 3,
    predicted_winner: 'Colby Thicknesse',
    predicted_method: 'Decisão',
    confidence_label: 'BAIXA',
  },
  {
    slug: 'johnston-vs-schultz',
    fighter1: {
      nome: 'Ben Johnston',
      record: '5-1-0',
    },
    fighter2: {
      nome: 'Wes Schultz',
      record: '8-3-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-02/SHULTZ_WESLEY_02-28.png?itok=2pz0Yz6B',
    },
    categoria_peso: 'Peso Médio (185 lbs)',
    num_rounds: 3,
    predicted_winner: 'Ben Johnston',
    predicted_method: 'KO/TKO ou Sub',
    confidence_label: 'BAIXA',
  },
  {
    slug: 'micallef-vs-gorimbo',
    fighter1: {
      nome: 'Jonathan Micallef',
      record: '9-1-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-01/MICALLEF_JONATHAN_01-31.png?itok=iY90KREe',
    },
    fighter2: {
      nome: 'Themba Gorimbo',
      record: '14-6-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-11/GORIMBO_THEMBA_11-01.png?itok=9YiEm5N1',
    },
    categoria_peso: 'Peso Meio-Médio (170 lbs)',
    num_rounds: 3,
    predicted_winner: 'Jonathan Micallef',
    predicted_method: 'Decisão ou Sub Tardia',
    confidence_label: 'MÉDIA-ALTA',
  },
  {
    slug: 'mar-fan-vs-steele',
    fighter1: {
      nome: 'Dom Mar Fan',
      record: '9-2-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-01/MAR_FAN_DOM_01-31.png?itok=lMnppDWn',
    },
    fighter2: {
      nome: 'Kody Steele',
      record: '7-1-0',
      foto_url: 'https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-02/STEELE_KODY_02-08.png?itok=Ed9MWWkQ',
    },
    categoria_peso: 'Peso Leve (155 lbs)',
    num_rounds: 3,
    predicted_winner: 'Dom Mar Fan',
    predicted_method: 'Decisão ou TKO Tardio',
    confidence_label: 'MÉDIA',
  },
];

const data: EventAnalysisData = {
  evento_nome: 'UFC Fight Night: Della Maddalena vs Prates',
  evento_data: '2 de Maio, 2026',
  evento_local: 'RAC Arena, Perth, Austrália',
  poster_url: '/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fbackground_image_xl%2Fs3%2F2026-04%2F050226-ufc-fight-night-della-maddalena-vs-prates-EVENT-ART.jpg%3Fh%3Dd1cb525d%26itok%3DymoA0TLI',
  main_card: mainCard,
  prelims,
};

export default function Page() {
  return <EventAnalysisView data={data} />;
}
