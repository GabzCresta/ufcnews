// ═══════════════════════════════════════════════════════════
// MMA Bet IQ Creator Kit — Type Definitions
//
// Branded creator kit for @mma_betiq (Instagram picks-creator).
// Format mirrors his existing IG visual DNA:
//   🔒 Lock     — high-confidence pick (MEDIUM-HIGH or above)
//   ⚠️  Risky   — method-specific or contrarian play
//   ✅ Winner   — standard moneyline pick (MEDIUM confidence)
//   🐶 Underdog — bet on the dog (LOW confidence vs favorite)
//
// Kit is post-card by design: includes actual results to demonstrate
// track record (transparency is core to picks-creator brand).
// ═══════════════════════════════════════════════════════════

export type PickClassification = 'lock' | 'risky' | 'winner' | 'underdog';

export interface MmaBetiqPick {
  fight_slug: string;
  bout: string;
  category: string;
  segment: 'main_card' | 'prelims';
  is_main_event?: boolean;

  classification: PickClassification;
  pick: string;
  predicted_method: string;
  confidence_label: string;
  one_liner: string;

  fighter1_name: string;
  fighter1_record: string;
  fighter1_photo?: string;
  fighter2_name: string;
  fighter2_record: string;
  fighter2_photo?: string;

  actual_winner: string;
  actual_method: string;
  actual_round?: number;
  actual_time?: string;
  prediction_correct: boolean;
  method_correct: boolean;

  bonus?: string;
}

export interface MmaBetiqKitMeta {
  event_name: string;
  event_date: string;
  event_location: string;
  event_number: string;
  creator_handle: string;
  creator_record: string;
  delivery_date: string;
}

export interface TrackRecordSummary {
  total_fights: number;
  winners_correct: number;
  methods_correct_on_winners: number;
  lock_record: string;
  risky_record: string;
  winner_record: string;
  underdog_record: string;
  headline: string;
  subheadline: string;
}

export interface LockOfTheWeek {
  bout: string;
  pick: string;
  predicted_method: string;
  classification_reason: string;
  actual_result: string;
  payoff_note: string;
  fighter_photo?: string;
  fighter_record?: string;
  conviction_score: number;
}

export interface CycleParlayLeg {
  method: 'KO/TKO' | 'SUB' | 'DEC';
  pick: string;
  bout: string;
  result: string;
  hit: boolean;
}

export interface CycleParlayCard {
  name: string;
  concept: string;
  legs: CycleParlayLeg[];
  status: 'hit' | 'partial' | 'missed';
  note: string;
}

export interface FadeOfWeekCard {
  bout: string;
  fade_target: string;
  why_we_warned: string;
  actual_outcome: string;
  lesson: string;
}

export interface ArenaPlaybookStep {
  step: string;
  description: string;
}

export interface ArenaConversionTemplate {
  scenario: string;
  copy: string;
}

export interface ArenaPlaybook {
  headline: string;
  loop_diagram: ArenaPlaybookStep[];
  pricing_suggestion: string;
  setup_steps: string[];
  conversion_templates: ArenaConversionTemplate[];
}

export interface DiscordHook {
  hook: string;
  body: string;
  cta: string;
  angle: string;
}

export interface DiscordEngine {
  headline: string;
  ig_hooks: DiscordHook[];
  discord_pricing_note: string;
  weekly_post_template: string;
}

export interface KitCallToAction {
  headline: string;
  body: string;
  pricing_note: string;
  next_event_target?: string;
}

export interface MmaBetiqKitData {
  meta: MmaBetiqKitMeta;
  track_record: TrackRecordSummary;
  pick_grid: MmaBetiqPick[];
  lock_of_the_week: LockOfTheWeek;
  cycle_parlay: CycleParlayCard;
  fade_of_week: FadeOfWeekCard;
  arena_playbook: ArenaPlaybook;
  discord_engine: DiscordEngine;
  call_to_action: KitCallToAction;
}
