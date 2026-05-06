// HayJive Kit — per-creator deliverable schema
//
// Sits alongside the CONTRACT v2 fight analyses. Aggregates picks across a full
// UFC card into the products HayJive (Hayden Iverson) actually publishes:
// 3 Locks Each, Slimeball Parlay, Green Hammer, Gimme Pick (Underdog-CTA),
// Cycle Parlay (KO/Sub/Dec tree), plus pre-formatted IG reel script and
// Home of Fight column template.
//
// Voice rules are content-level, not type-level — emojis/no-period endings
// live inside the string values so Gabriel can paste directly into HayJive's
// workflow without any post-processing.

export interface KitMeta {
  event_nome: string; // 'UFC Fight Night: Sterling vs Zalal'
  event_data: string; // '26 de Abril, 2026'
  ytd_unidades: string; // '+41.54u YTD 2025'
  ultimo_card: string; // '+1.59u UFC 318'
  tapology_accuracy: string; // '65.2% em 567 picks'
}

export interface IgReelScript {
  hook: string; // 3–6 words max, CAPS
  linhas: string[]; // 3–5 lines, spoken
  cta: string; // 'Tail this on Underdog code HAYJIVE'
  hashtags: string; // '#ufc #mma #ufcfightnight #UDPartner'
}

export interface LockPick {
  label: 'LOCK 1' | 'LOCK 2' | 'LOCK 3';
  pick: string; // 'Rodolfo Vieira by Submission'
  odds: string; // '-200'
  luta: string; // 'Vieira vs McConico'
  one_liner: string; // quick reasoning, HayJive voice, no period ending
}

export interface ParlayLeg {
  pick: string;
  odds: string;
  luta: string;
}

export interface ParlayCard {
  nome: string; // 'Slimeball Parlay 2.0'
  legs: ParlayLeg[];
  combined_odds: string; // '+231'
  stake_to_payout: string; // '$20 → $66.20'
  tagline: string; // one-liner pitch in HayJive voice
}

export interface GimmePick {
  pick: string; // 'Rodolfo Vieira ITD (Inside the Distance)'
  odds: string; // '-160'
  luta: string;
  why: string; // 2–3 sentences
  underdog_cta: string; // '20X your coin — use code HAYJIVE on Underdog'
}

export interface CyclePick {
  method: 'KO' | 'SUB' | 'DEC';
  pick: string; // 'Alexander Hernandez'
  luta: string; // 'Garcia vs Hernandez'
  odds: string; // '+200'
  note: string; // one-line reasoning
}

export interface CycleParlay {
  picks: CyclePick[]; // exactly 3 — one per method
  combined_odds: string; // '+652'
  stake_to_payout: string; // '$10 → $75.20'
}

export interface FadeWarning {
  luta: string;
  fade: string; // the pick to avoid, e.g. 'Sterling by decision'
  warning: string; // 1–2 sentences why it's a trap
}

export interface ColumnTemplate {
  opener: string; // positioning line + YTD recap
  main_event_section: string; // 2–3 paragraph breakdown
  undercard_bullets: string[]; // one-line per fight
  closer: string; // CTA + sponsor plug
}

export interface HayJiveKitData {
  meta: KitMeta;
  ig_reel: IgReelScript;
  three_locks: LockPick[]; // exactly 3
  slimeball: ParlayCard;
  green_hammer: ParlayCard;
  gimme: GimmePick;
  cycle_parlay: CycleParlay;
  fade_of_week: FadeWarning;
  written_column: ColumnTemplate;
}
