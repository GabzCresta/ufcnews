export interface PersonalityKitMeta {
  event_name: string;
  event_date: string;
  event_location: string;
  poster_url: string;
  card_slug: string;
  show_name: string;
  show_tagline: string;
  host_name: string;
  host_handle: string;
  episode_number?: string;
  episode_format?: string;
}

export interface ShowIdentity {
  presented_by: string;
  on_air_since: string;
  years_on_air: number;
  total_episodes: number;
  cadence: string;
  average_length: string;
  format_types: string[];
  audience: string;
  graphics_credit?: string;
  show_x_handle?: string;
  host_x_handle?: string;
  available_on?: string[];
  youtube_subscribers?: number;
  youtube_videos?: number;
  youtube_lifetime_views?: number;
  youtube_avg_views?: number;
  instagram_followers?: number;
}

export type ChannelStatus = 'strong' | 'stagnant' | 'opportunity' | 'whitespace';

export interface ChannelMetric {
  platform: string;
  status: ChannelStatus;
  primary_metric: string;
  secondary_metric: string;
  diagnosis: string;
}

export interface ChannelSnapshot {
  intro: string;
  metrics: ChannelMetric[];
}

export interface IgStoryTemplate {
  day: string;
  slot: string;
  hook: string;
  visual_concept: string;
  caption: string;
}

export interface IgCarouselBoard {
  intro: string;
  cover_concept: string;
  total_slides: number;
  per_fight_template: string;
  preview_slides: { slot: string; matchup: string; pick: string; reasoning: string }[];
}

export interface TikTokStrategy {
  intro: string;
  hooks: string[];
  posting_advice: string;
}

export interface IgContentSystem {
  intro: string;
  diagnosis: string;
  fight_week_calendar: IgStoryTemplate[];
  carousel_board: IgCarouselBoard;
  tiktok_strategy: TikTokStrategy;
}

export interface RoundtableGuest {
  name: string;
  handle: string;
  role: string;
  crenas_match?: boolean;
}

export interface FightBrief {
  is_main: boolean;
  fight: string;
  weight_class: string;
  records: { f1: string; f2: string };
  recent_form: { f1: string; f2: string };
  stylistic_note: string;
  storyline_hook: string;
  betting_angle: string;
  question_for_pod: string;
}

export interface PreShowDossier {
  intro: string;
  fights: FightBrief[];
}

export interface RecentFightContext {
  date: string;
  opponent: string;
  result: string;
  what_happened: string;
  what_it_means: string;
}

export interface SuggestedQuestion {
  question: string;
  context: string;
  unique_angle: string;
}

export interface InterviewPacket {
  intro: string;
  fighter_name: string;
  fighter_image_url?: string;
  career_arc: string;
  recent_fights: RecentFightContext[];
  stylistic_profile: string;
  storyline_angles: string[];
  controversy_flags: string[];
  suggested_questions: SuggestedQuestion[];
}

export interface ChapterMarker {
  time: string;
  topic: string;
}

export interface ShowNotes {
  episode_title: string;
  description: string;
  chapter_markers: ChapterMarker[];
  hashtags: string[];
}

export interface XThreadDraft {
  intro: string;
  tweets: { num: string; text: string }[];
}

export interface IgCarouselDraft {
  intro: string;
  slides: { slot: string; label: string; caption: string }[];
  full_caption: string;
  hashtags: string[];
}

export interface ShortFormDraft {
  format: 'YT Short' | 'TikTok' | 'Reel';
  hook: string;
  body: string;
  cta: string;
}

export interface MultiPlatformAssets {
  intro: string;
  x_thread: XThreadDraft;
  ig_carousel: IgCarouselDraft;
  short_form: ShortFormDraft[];
}

export interface RiffBullet {
  topic: string;
  context: string;
  riff: string;
}

export interface FightWeekBrief {
  intro: string;
  weighin_notes: string[];
  riff_bullets: RiffBullet[];
}

export interface ArenaHighlight {
  type: 'top_user' | 'biggest_underdog' | 'community_moment';
  text: string;
}

export interface ArenaCallout {
  intro: string;
  total_predictions: number;
  highlights: ArenaHighlight[];
}

export interface ArenaProjectionAssumptions {
  yt_avg_views: string;
  uploads_per_week: string;
  weekly_audience: string;
  click_through: string;
  signup_to_mau: string;
}

export interface ArenaProjectedNumbers {
  week_1_new: number;
  month_1_mau: number;
  quarter_mau: number;
  steady_state_mau: number;
  note: string;
}

export type ArenaAngleLevel = 'concrete' | 'aspirational';

export interface ArenaAngle {
  title: string;
  description: string;
  level: ArenaAngleLevel;
}

export interface ArenaRecurringSegment {
  name: string;
  description: string;
  example_hook: string;
}

export interface ArenaProjection {
  intro: string;
  assumptions: ArenaProjectionAssumptions;
  projected_numbers: ArenaProjectedNumbers;
  monetization: ArenaAngle[];
  pioneer: ArenaAngle[];
  indirect: ArenaAngle[];
  recurring_segment: ArenaRecurringSegment;
}

export interface SignatureMoment {
  date: string;
  event: string;
  what_happened: string;
  why_it_mattered: string;
}

export interface FighterArc {
  fighter_name: string;
  fighter_image_url?: string;
  origin: string;
  career_arc: string;
  signature_moments: SignatureMoment[];
  current_state: string;
  one_line_pitch: string;
  accent: 'red' | 'blue';
}

export interface MainEventHype {
  intro: string;
  headline: string;
  tagline: string;
  fighter1_arc: FighterArc;
  fighter2_arc: FighterArc;
  collision_point: string;
  hype_paragraph: string;
  pull_quote?: string;
}

export interface EditorialColumn {
  kicker: string;
  title: string;
  subtitle: string;
  body_paragraphs: string[];
  pull_quote: string;
  byline: string;
}

export interface PersonalityKitData {
  meta: PersonalityKitMeta;
  show_identity: ShowIdentity;
  roundtable_guests: RoundtableGuest[];
  channel_snapshot: ChannelSnapshot;
  ig_content_system: IgContentSystem;
  pre_show_dossier: PreShowDossier;
  interview_packet?: InterviewPacket | null;
  main_event_hype?: MainEventHype | null;
  show_notes: ShowNotes;
  multi_platform: MultiPlatformAssets;
  fight_week_brief: FightWeekBrief;
  arena_callout?: ArenaCallout | null;
  arena_projection?: ArenaProjection | null;
  editorial_column: EditorialColumn;
}
