import type { Metadata } from 'next';
import { HayJiveKitView } from '@/components/creator-kit/hayjive/HayJiveKitView';
import type { HayJiveKitData } from '@/types/hayjive-kit';

export const metadata: Metadata = {
  title: 'HayJive Kit · UFC Sterling vs Zalal · Crenas',
  description: 'Creator kit personalizado para @hayjivepicks — 3 Locks, Slimeball Parlay, Green Hammer, Gimme Pick e Cycle Parlay do UFC Fight Night: Sterling vs Zalal.',
};

const data: HayJiveKitData = {
  meta: {
    event_nome: 'UFC Fight Night: Sterling vs Zalal',
    event_data: '26 de Abril, 2026',
    ytd_unidades: '+41.54u YTD',
    ultimo_card: 'Last card +1.59u',
    tapology_accuracy: 'Tapology 65.2%',
  },

  ig_reel: {
    hook: 'STACKED CARD ALERT 🔥',
    linhas: [
      '3 Locks ready to cash this weekend 🫡',
      'Vieira by sub, Filho by sub, Dumont by dec',
      'Slimeball Parlay sitting at +230 👀',
      'Gimme Pick of the night? Rodolfo Vieira ITD 💰',
    ],
    cta: 'Tail these on Underdog — code HAYJIVE for deposit bonus 🤑',
    hashtags: '#ufc #mma #ufcfightnight #ufcbetting #ufcparlay #UDPartner',
  },

  three_locks: [
    {
      label: 'LOCK 1',
      pick: 'Rodolfo Vieira by Submission',
      odds: '-200',
      luta: 'Vieira vs McConico',
      one_liner: '5x BJJ world champ vs guy who was subbed 7 times already. If this hits the mat, Vieira closes inside two rounds — 4 arm-triangles just at UFC level 🔒',
    },
    {
      label: 'LOCK 2',
      pick: 'Jafel Filho by Submission',
      odds: '-175',
      luta: 'Filho vs Durden',
      one_liner: '100% of Filho\'s UFC wins are subs. Durden has sub-defense holes and is 0-4 in his last stretch. Preço longe do ML -600 e muito melhor value 💚',
    },
    {
      label: 'LOCK 3',
      pick: 'Norma Dumont by Decision',
      odds: '-150',
      luta: 'Dumont vs Edwards',
      one_liner: '11 of Dumont\'s 13 wins by decision. Edwards already lost to this exact archetype (Ailín Pérez) in June 2024. Dumont closes on cards, period 🫡',
    },
  ],

  slimeball: {
    nome: 'Slimeball Parlay',
    legs: [
      { pick: 'Francis Marshall ML', odds: '-550', luta: 'Brennan vs Marshall' },
      { pick: 'Youssef Zalal ML', odds: '-125', luta: 'Sterling vs Zalal (Main)' },
      { pick: 'Rodolfo Vieira ML', odds: '-300', luta: 'Vieira vs McConico' },
      { pick: 'Jafel Filho ML', odds: '-600', luta: 'Filho vs Durden' },
    ],
    combined_odds: '+230',
    stake_to_payout: '$20 → $66.10',
    tagline: 'Main event + 3 chalk favorites. Biggest wildcard is Zalal holding the upset pick, but line moved 30 pts toward him — market knows 💚',
  },

  green_hammer: {
    nome: 'Green Hammer',
    legs: [
      { pick: 'Norma Dumont by Decision', odds: '-150', luta: 'Dumont vs Edwards' },
      { pick: 'Michelle Montague by Decision', odds: '+150', luta: 'Bueno Silva vs Montague' },
    ],
    combined_odds: '+317',
    stake_to_payout: '$25 → $104.38',
    tagline: '2 decision props where ML price is way overcooked. Dumont never finishes in UFC, Montague already showed she decisions on debut. Plus-money on high-probability methods 🔨',
  },

  gimme: {
    pick: 'Rodolfo Vieira ITD',
    odds: '-200',
    luta: 'Vieira vs McConico',
    why: 'Gap de BJJ é o maior do card. Vieira é 5x world champ faixa-preta IBJJF, McConico faixa-preta regional. Takedowns 3.2/15min contra 48% de defesa. 82% das vitórias de Vieira são por sub — se a luta vai ao chão, acaba antes dos 2 rounds. Probabilidade estimada: 80% de vitória, majority inside the distance.',
    underdog_cta: '20X your coin 🤑 use code HAYJIVE on Underdog to unlock the Vieira ITD Gimme Pick',
  },

  cycle_parlay: {
    picks: [
      {
        method: 'KO',
        pick: 'Alexander Hernandez',
        luta: 'Garcia vs Hernandez',
        odds: '+200',
        note: '3-0 Factory X run with 2 TKOs. Garcia lost by TKO to same archetype (Dawson) 6 months ago 💣',
      },
      {
        method: 'SUB',
        pick: 'Rodolfo Vieira',
        luta: 'Vieira vs McConico',
        odds: '-200',
        note: '82% career subs. Arm-triangle specialist. McConico subbed 7 times already 🐍',
      },
      {
        method: 'DEC',
        pick: 'Norma Dumont',
        luta: 'Dumont vs Edwards',
        odds: '-150',
        note: '11 of 13 wins by decision. Never finishes. Grinds cards. Edwards already lost to this style 📜',
      },
    ],
    combined_odds: '+651',
    stake_to_payout: '$10 → $75.15',
  },

  fade_of_week: {
    luta: 'Sterling vs Zalal',
    fade: 'Sterling by Decision (+300)',
    warning: 'Mercado paga Sterling por decisão em +300 porque o caminho parece óbvio — veterano sobrevive e ganha nos cartões. Mas é aposta dupla contra tudo: Sterling defende só 45% de TD e acabou de ser exposto exatamente por wrestler peso-pena (Evloev, UFC 310). Se vai no Funk Master, vai no ML direto. Método específico é armadilha 🚫',
  },

  written_column: {
    opener: `Back at it with another UFC Fight Night breakdown. Sitting at +41.54u YTD going into Sterling vs Zalal week, coming off +1.59u on last card's run. 567 picks on Tapology at 65.2% — track record speaks for itself.

Main event has line movement that matters: Sterling opened -200, now Zalal is -125. That's a 30+ point swing in favor of the challenger, and the market is right to move. Here's why.`,

    main_event_section: `YOUSSEF ZALAL (-125) vs ALJAMAIN STERLING (+105)

Zalal is the pick. Three reasons:

1. Stats converge. Sterling defends 45% TD and absorbs 2.21 sig strikes/min — numbers built against Yan, Dillashaw, Cejudo, O'Malley elite, but still structurally weak. Zalal defends 67% of striking with only 1.78 absorbed. Gap is real.

2. Momentum is opposite. Zalal is 5-0 on his UFC return with 4 finishes, including an R1 armbar on Josh Emmett at UFC 320. Sterling is 2-1 at featherweight coming off 8 months of inactivity since Ortega in August 2025.

3. Evloev already showed the blueprint. UFC 310, December 2024 — a featherweight-native wrestler inverted Sterling's game and won. Zalal is that archetype, 7 years younger and 3cm longer.

Best bet: Zalal ML -125. Value-add prop: Zalal by submission at +425 (1.41 sub attempts/15min vs Sterling who\'s never been subbed — small stake, high upside).`,

    undercard_bullets: [
      'Marshall -550 — caro mas correto, melhor valor: Marshall by decision +120 (7 of 10 career wins by decision)',
      'Dumont -230 — play the decision prop at -150, Edwards already lost to this archetype',
      'Hernandez -156 — method bet: Hernandez by KO/TKO +200 (Garcia was TKO\'d by Dawson 6 months ago)',
      'Luna Martinetti -106 — pick-em market, go by submission at +200 (Grant subbed 5 times in 8 career L\'s)',
      'Jackson-Barcelos — contrarian: Barcelos +144 (3-0 over Simón, Garbrandt, Talbott — Jackson is reputation pricing)',
      'Buchecha -146 — by submission at +175 (5x BJJ world champ vs blue belt, 4 of 5 MMA wins R1 subs)',
      'Vieira -300 — the Gimme. By submission -200 or ITD for Underdog DFS',
      'Dumas-McVey — contrarian: Dumas +130 (experience gap, McVey subbed in both UFC starts)',
      'Montague -450 — by decision at +150, ML price is proibitivo',
      'Filho -600 — by submission at -175 (3-0 UFC finishes, all subs, all R1)',
      'Griffin-Valenzuela — Griffin by decision +200 (pick-em market, experience decides)',
      'Polastri -200 — pass on ML, play Over 2.5 rounds at -150',
    ],

    closer: `Tail the card on Underdog — code HAYJIVE unlocks the Gimme Pick and deposit bonus 🤑 Full video breakdown dropping tonight on YouTube, Long Shots Only call-in show Friday night during prelims. Don't tail…unless you\'re a degen 🫡

Sponsored in part by LEGENDZ. Subscribe to Winible for the full picks drop.`,
  },
};

export default function Page() {
  return <HayJiveKitView data={data} />;
}
