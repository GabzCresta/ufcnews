// ═══════════════════════════════════════════════════════════
// Post-Event Recap Types
// ═══════════════════════════════════════════════════════════

export interface RecapFightResult {
  slug: string;
  fighter1: { nome: string; record: string; foto_url?: string };
  fighter2: { nome: string; record: string; foto_url?: string };
  categoria_peso: string;
  num_rounds: number;
  is_main_event?: boolean;

  // Pre-fight prediction
  predicted_winner: string;
  predicted_method: string;
  confidence_label: string;

  // Actual result
  actual_winner: string;
  actual_method: string;
  actual_round?: number;
  actual_time?: string;
  prediction_correct: boolean;
  method_correct: boolean;

  // Bonus
  bonus?: 'FOTN' | 'POTN';

  // Optional editorial note
  recap_note?: string;
}

export interface RecapHeadline {
  icon: string;
  title: string;
  description: string;
  fighter?: string;
  tag?: string;
}

export interface RecapRankingMove {
  fighter: string;
  division: string;
  from: number | null;
  to: number;
  direction: 'up' | 'down' | 'new';
}

export interface RecapWhatsNext {
  fighter: string;
  result: 'W' | 'L';
  potential_opponents: string[];
  narrative: string;
}

// ═══════════════════════════════════════════════════════════
// Quotable Stats
// ═══════════════════════════════════════════════════════════

export interface RecapQuotableStat {
  stat: string;
  context: string;
  fighter?: string;
  category: 'breakout' | 'streak' | 'finish' | 'model' | 'historical' | 'bonus';
  icon: string;
  shareable_text: string;
}

// ═══════════════════════════════════════════════════════════
// Narrative Threads
// ═══════════════════════════════════════════════════════════

export interface RecapNarrativeThread {
  headline: string;
  slug_tag: 'RISE' | 'FALL' | 'RIVALRY' | 'UPSET' | 'LEGACY' | 'BREAKOUT';
  fighters_involved: string[];
  lede: string;
  body: string;
  suggested_angles: string[];
  content_type_fit: ('article' | 'video' | 'podcast' | 'social')[];
}

// ═══════════════════════════════════════════════════════════
// Post-Fight Creator Kit
// ═══════════════════════════════════════════════════════════

export interface RecapCreatorKit {
  instagram: RecapInstagramSlide[];
  twitter: RecapTweet[];
  video_script: RecapVideoScript[];
  tiktok: RecapTikTokScript[];
  podcast_talking_points: RecapPodcastPoint[];
}

export interface RecapInstagramSlide {
  slide_number: number;
  title: string;
  content: string;
  color: 'red' | 'blue' | 'gold' | 'green';
}

export interface RecapTweet {
  num: string;
  text: string;
  type: 'result' | 'stat' | 'hot_take' | 'thread_opener' | 'thread_closer';
}

export interface RecapVideoScript {
  time: string;
  title: string;
  text: string;
  b_roll_suggestion?: string;
}

export interface RecapTikTokScript {
  hook: string;
  body: string;
  cta: string;
}

export interface RecapPodcastPoint {
  segment: string;
  duration_suggestion: string;
  talking_points: string[];
  hot_take?: string;
}

// ═══════════════════════════════════════════════════════════
// Model Autopsy
// ═══════════════════════════════════════════════════════════

export interface RecapModelAutopsy {
  overall_grade: string;
  grade_context: string;
  correct_calls: RecapModelCall[];
  wrong_calls: RecapModelCall[];
  patterns_learned: RecapModelPattern[];
  confidence_calibration: {
    high_confidence_record: string;
    medium_confidence_record: string;
    insight: string;
  };
}

export interface RecapModelCall {
  fight: string;
  predicted: string;
  actual: string;
  confidence_label: string;
  analysis: string;
  error_type?: 'stylistic_misread' | 'overvalued_stats' | 'age_factor' | 'momentum_miss' | 'method_miss' | 'venue_factor';
}

export interface RecapModelPattern {
  pattern: string;
  evidence: string;
  adjustment: string;
}

// ═══════════════════════════════════════════════════════════
// Division Impact
// ═══════════════════════════════════════════════════════════

export interface RecapDivisionImpact {
  division: string;
  fights_on_card: number;
  title_picture_impact: string;
  movers: RecapDivisionMover[];
  narrative: string;
}

export interface RecapDivisionMover {
  fighter: string;
  result: 'W' | 'L';
  impact_level: 'high' | 'medium' | 'low';
  one_liner: string;
}

// ═══════════════════════════════════════════════════════════
// Replay Guide
// ═══════════════════════════════════════════════════════════

export interface RecapReplayFight {
  slug: string;
  fighter1: string;
  fighter2: string;
  rewatch_rating: 1 | 2 | 3 | 4 | 5;
  rewatch_label: 'Must Watch' | 'Worth It' | 'Good' | 'Fans Only' | 'Skip';
  category: 'war' | 'masterclass' | 'upset' | 'finish' | 'technical' | 'boring';
  why_watch: string;
  key_moments: RecapKeyMoment[];
  skip_to?: string;
}

export interface RecapKeyMoment {
  timestamp: string;
  description: string;
  moment_type: 'finish' | 'knockdown' | 'submission_attempt' | 'reversal' | 'exchange' | 'takedown';
}

// ═══════════════════════════════════════════════════════════
// Main RecapData
// ═══════════════════════════════════════════════════════════

import type { EventCreatorKitData } from './event-creator-kit';

export interface RecapData {
  evento_nome: string;
  evento_data: string;
  evento_local: string;
  evento_numero: string;

  // Scoreboard
  total_fights: number;
  predictions_correct: number;
  methods_correct: number;

  // Fight results
  main_card: RecapFightResult[];
  prelims: RecapFightResult[];

  // Editorial sections
  headlines: RecapHeadline[];
  star_of_the_night: {
    fighter: string;
    foto_url?: string;
    stat_line: string;
    quote?: string;
    narrative: string;
  };
  ranking_moves: RecapRankingMove[];
  whats_next: RecapWhatsNext[];
  bonuses: {
    fotn: { fighter1: string; fighter2: string };
    potn: string[];
  };

  // Our model's self-reflection
  model_notes: string;

  // B2B Value Sections
  quotable_stats?: RecapQuotableStat[];
  narrative_threads?: RecapNarrativeThread[];
  creator_kit?: RecapCreatorKit;
  model_autopsy?: RecapModelAutopsy;
  division_impacts?: RecapDivisionImpact[];
  replay_guide?: RecapReplayFight[];
  event_creator_kit?: EventCreatorKitData;
}
