import { EventAnalysisView, type EventAnalysisData } from '@/components/analise/EventAnalysisView';
import type { EventFightCard } from '@/components/analise/EventAnalysisCard';

// ════════════════════════════════════════════════════════════
// UFC 327 — Prochazka vs Ulberg event index page
// ════════════════════════════════════════════════════════════
// Static page that lists all 12 analyses for UFC 327. Takes precedence
// over the dynamic [eventSlug] route because Next.js prefers static
// segments. The 12 individual analysis pages are static TS files at
// src/app/[locale]/hub/analise/<slug>/page.tsx and are NOT in the DB,
// so the DB-backed dynamic event template would 404 for this slug.

// Use direct UFC.com URLs (not the image-proxy wrapper). The FighterImage
// component checks for `ufc.com` substring and renders via plain <img> tag,
// which the browser loads directly without CORS issues. The image-proxy
// wrapper only works for server-side rendered images, and FighterImage
// rejects any src that doesn't start with `http` as invalid.
//
// Path format: YYYY-MM/FIGHTER_NAME_L_MM-DD (no .png extension here)
const HEAD = (path: string, itok: string) =>
  `https://ufc.com/images/styles/athlete_bio_full_body/s3/${path.replace(/%2F/g, '/')}.png?itok=${itok}`;

const mainCard: EventFightCard[] = [
  {
    slug: 'prochazka-vs-ulberg',
    fighter1: {
      nome: 'Jiri Prochazka',
      record: '32-5-1',
      foto_url: HEAD('2025-10%2FPROCHAZKA_JIRI_L_10-04', '149yli5O'),
    },
    fighter2: {
      nome: 'Carlos Ulberg',
      record: '14-1-0',
      foto_url: HEAD('2025-09%2FULBERG_CARLOS_L_09-27', 'mTdNyLu-'),
    },
    categoria_peso: 'Peso Meio-Pesado (205 lbs)',
    num_rounds: 5,
    predicted_winner: 'Carlos Ulberg',
    predicted_method: 'KO/TKO R2-R3 ou Decisao Unanime',
    confidence_label: 'BAIXA',
    is_main_event: true,
  },
  {
    slug: 'costa-vs-murzakanov',
    fighter1: {
      nome: 'Paulo Costa',
      record: '15-4-0',
      foto_url: HEAD('2025-07%2FCOSTA_PAULO_L_07-19', '1DgzuxsK'),
    },
    fighter2: {
      nome: 'Azamat Murzakanov',
      record: '16-0-0',
      foto_url: HEAD('2025-06%2FMURZAKANOV_AZAMAT_L_06-07', 'doqkKE6L'),
    },
    categoria_peso: 'Peso Meio-Pesado (205 lbs)',
    num_rounds: 5,
    predicted_winner: 'Azamat Murzakanov',
    predicted_method: 'KO/TKO R1-R2',
    confidence_label: 'MEDIA-ALTA',
  },
  {
    slug: 'blaydes-vs-hokit',
    fighter1: {
      nome: 'Curtis Blaydes',
      record: '19-5-0',
      foto_url: HEAD('2025-06%2FBLAYDES_CURTIS_L_06-21', '6cGx6bc9'),
    },
    fighter2: {
      nome: 'Josh Hokit',
      record: '8-0-0',
      foto_url: HEAD('2026-01%2FHOKIT_JOSH_L_01-24', 'LhoGGF9J'),
    },
    categoria_peso: 'Peso Pesado',
    num_rounds: 3,
    predicted_winner: 'Curtis Blaydes',
    predicted_method: 'TKO R3 ou Decisao Unanime',
    confidence_label: 'MEDIA',
  },
  {
    slug: 'reyes-vs-walker',
    fighter1: {
      nome: 'Dominick Reyes',
      record: '15-5-0',
      foto_url: HEAD('2025-01%2F5%2FREYES_DOMINICK_L_12-07', '0zGGwuvL'),
    },
    fighter2: {
      nome: 'Johnny Walker',
      record: '22-9-0',
      foto_url: HEAD('2025-08%2FWALKER_JOHNNY_L_08-23', 'JTGJfTnu'),
    },
    categoria_peso: 'Peso Meio-Pesado (205 lbs)',
    num_rounds: 3,
    predicted_winner: 'Dominick Reyes',
    predicted_method: 'KO/TKO R1-R2',
    confidence_label: 'MEDIA',
  },
  {
    slug: 'swanson-vs-landwehr',
    fighter1: {
      nome: 'Cub Swanson',
      record: '30-14-0',
      foto_url: HEAD('2024-12%2FSWANSON_CUB_L_12-14', 'QqMoSqo4'),
    },
    fighter2: {
      nome: 'Nate Landwehr',
      record: '18-7-0',
      foto_url: HEAD('2025-07%2FLANDWEHR_NATE_L_07-12', 'OaA4sx98'),
    },
    categoria_peso: 'Peso Pena (145 lbs)',
    num_rounds: 3,
    predicted_winner: 'Nate Landwehr',
    predicted_method: 'TKO R2 ou Decisao Unanime',
    confidence_label: 'MEDIA',
  },
];

const prelims: EventFightCard[] = [
  {
    slug: 'pitbull-vs-pico',
    fighter1: {
      nome: 'Patricio Pitbull',
      record: '37-8-0',
      foto_url: HEAD('2025-09%2FPITBULL_PATRICIO_L_09-06', '5wFLnofi'),
    },
    fighter2: {
      nome: 'Aaron Pico',
      record: '13-4-0',
      foto_url: HEAD('2025-08%2FPICO_AARON_R_08-16', 'clri5GiP'),
    },
    categoria_peso: 'Peso Pena (145 lbs)',
    num_rounds: 3,
    predicted_winner: 'Patricio Pitbull',
    predicted_method: 'Decisao Unanime ou KO/TKO R2-R3',
    confidence_label: 'BAIXA',
  },
  {
    slug: 'holland-vs-brown',
    fighter1: {
      nome: 'Kevin Holland',
      record: '28-15-0',
      foto_url: HEAD('2025-10%2FHOLLAND_KEVIN_L_10-18', 'WDQ_tDL3'),
    },
    fighter2: {
      nome: 'Randy Brown',
      record: '17-7-0',
      foto_url: HEAD('2025-04%2FBROWN_RANDY_L_04-26', 'y_hfS_g1'),
    },
    categoria_peso: 'Peso Meio-Medio (170 lbs)',
    num_rounds: 3,
    predicted_winner: 'Kevin Holland',
    predicted_method: 'TKO R2 ou Submissao R2',
    confidence_label: 'BAIXA',
  },
  {
    slug: 'gamrot-vs-ribovics',
    fighter1: {
      nome: 'Mateusz Gamrot',
      record: '25-4-0',
      foto_url: HEAD('2025-05%2FGAMROT_MATEUSZ_L_05-31', 'P1lVBWAJ'),
    },
    fighter2: {
      nome: 'Esteban Ribovics',
      record: '15-2-0',
      foto_url: HEAD('2024-09%2FRIBOVICS_ESTEBAN_L_05-11', 'peerZZfM'),
    },
    categoria_peso: 'Peso Leve (155 lbs)',
    num_rounds: 3,
    predicted_winner: 'Mateusz Gamrot',
    predicted_method: 'Decisao Unanime ou TKO R3',
    confidence_label: 'MEDIA-ALTA',
  },
  {
    slug: 'suarez-vs-godinez',
    fighter1: {
      nome: 'Tatiana Suarez',
      record: '12-1-0',
      foto_url: HEAD('2025-09%2FSUAREZ_TATIANA_L_09-13', '6sJfAeTB'),
    },
    fighter2: {
      nome: 'Loopy Godinez',
      record: '14-5-0',
      foto_url: HEAD('2025-03%2FGODINEZ_LOOPY_L_03-29', '6FJpGfrw'),
    },
    categoria_peso: 'Peso Palha (115 lbs)',
    num_rounds: 3,
    predicted_winner: 'Tatiana Suarez',
    predicted_method: 'Decisao Unanime ou Submissao R2',
    confidence_label: 'MEDIA-ALTA',
  },
  {
    slug: 'padilla-vs-mederos',
    fighter1: {
      nome: 'Chris Padilla',
      record: '17-6-0',
      foto_url: HEAD('2025-11%2FPADILLA_CHRIS_L_11-08', 'OCN6kUHk'),
    },
    fighter2: {
      nome: 'MarQuel Mederos',
      record: '11-1-0',
      foto_url: HEAD('2025-06%2FMEDEROS_MARQUEL_L_06-07', 'fQDAH3kR'),
    },
    categoria_peso: 'Peso Leve (155 lbs)',
    num_rounds: 3,
    predicted_winner: 'Chris Padilla',
    predicted_method: 'Decisao Unanime ou TKO R3',
    confidence_label: 'BAIXA',
  },
  {
    slug: 'gastelum-vs-luque',
    fighter1: {
      nome: 'Kelvin Gastelum',
      record: '20-10-0',
      foto_url: HEAD('2025-09%2FGASTELUM_KELVIN_L_09-13', 'X2J92bD5'),
    },
    fighter2: {
      nome: 'Vicente Luque',
      record: '23-12-1',
      foto_url: HEAD('2025-10%2FLUQUE_VICENTE_L_10-11', 'gL2qQoh1'),
    },
    categoria_peso: 'Peso Medio (185 lbs)',
    num_rounds: 3,
    predicted_winner: 'Kelvin Gastelum',
    predicted_method: 'Decisao Unanime',
    confidence_label: 'MEDIA',
  },
  {
    slug: 'radtke-vs-prado',
    fighter1: {
      nome: 'Charles Radtke',
      record: '11-5-0',
      foto_url: HEAD('2025-10%2FRADTKE_CHARLES_L_11-01', 'd__y_3_A'),
    },
    fighter2: {
      nome: 'Francisco Prado',
      record: '12-4-0',
      foto_url: HEAD('2025-07%2FPRADO_FRANCISCO_L_07-19', 'v7-DfKx2'),
    },
    categoria_peso: 'Peso Meio-Medio (170 lbs)',
    num_rounds: 3,
    predicted_winner: 'Charles Radtke',
    predicted_method: 'TKO R2 ou Submissao R2',
    confidence_label: 'MEDIA-ALTA',
  },
];

const eventData: EventAnalysisData = {
  evento_nome: 'UFC 327: Prochazka vs Ulberg',
  evento_data: '11 de Abril, 2026',
  evento_local: 'Kaseya Center, Miami, Florida',
  main_card: mainCard,
  prelims,
};

export default function Page() {
  return <EventAnalysisView data={eventData} />;
}
