// ═══════════════════════════════════════════════════════════
// Event-Level Creator Kit Types
// Per-card content optimized for each platform's algorithm
// ═══════════════════════════════════════════════════════════

export interface PlatformMeta {
  algorithm_tip: string;
  target_metric: string;
  content_type: string;
}

// ═══════════════════════════════════════════════════════════
// Instagram
// ═══════════════════════════════════════════════════════════

export interface EventInstagramSlide {
  slide_number: number;
  slide_type: 'hook' | 'content' | 'stat' | 'prediction' | 'cta';
  title: string;
  content: string;
  visual_note?: string;
  color: 'red' | 'blue' | 'gold' | 'white';
}

export interface EventInstagramContent {
  meta: PlatformMeta;
  carousel: EventInstagramSlide[];
  caption: string;
  hashtags: string[];
  best_posting_time?: string;
}

// ═══════════════════════════════════════════════════════════
// TikTok / Reels
// ═══════════════════════════════════════════════════════════

export interface EventTikTokScript {
  script_number: number;
  angle: string;
  hook_3s: string;
  body: string;
  twist_or_loop?: string;
  cta: string;
  estimated_duration: string;
}

export interface EventTikTokContent {
  meta: PlatformMeta;
  scripts: EventTikTokScript[];
}

// ═══════════════════════════════════════════════════════════
// YouTube
// ═══════════════════════════════════════════════════════════

export interface EventYouTubeSection {
  timestamp: string;
  title: string;
  text: string;
  retention_note?: string;
  b_roll?: string;
}

export interface EventYouTubeThumbnail {
  headline: string;
  subtext?: string;
  visual_concept: string;
}

export interface EventYouTubeContent {
  meta: PlatformMeta;
  title_options: string[];
  thumbnail: EventYouTubeThumbnail;
  description: string;
  script_sections: EventYouTubeSection[];
  tags: string[];
}

// ═══════════════════════════════════════════════════════════
// Twitter / X
// ═══════════════════════════════════════════════════════════

export interface EventTweet {
  num: string;
  text: string;
  tweet_type: 'hook' | 'content' | 'hot_take' | 'poll' | 'cta';
  engagement_note?: string;
}

export interface EventTwitterContent {
  meta: PlatformMeta;
  thread: EventTweet[];
  standalone_tweets: string[];
  poll_suggestion?: {
    question: string;
    options: string[];
  };
}

// ═══════════════════════════════════════════════════════════
// Podcast
// ═══════════════════════════════════════════════════════════

export interface EventPodcastSegment {
  timestamp: string;
  title: string;
  talking_points: string[];
  quotable_moment?: string;
  discussion_questions?: string[];
  hot_take?: string;
}

export interface EventPodcastContent {
  meta: PlatformMeta;
  episode_title: string;
  episode_description: string;
  segments: EventPodcastSegment[];
  cold_open: string;
}

// ═══════════════════════════════════════════════════════════
// Top-Level
// ═══════════════════════════════════════════════════════════

export interface EventCreatorKitData {
  instagram: EventInstagramContent;
  tiktok: EventTikTokContent;
  youtube: EventYouTubeContent;
  twitter: EventTwitterContent;
  podcast: EventPodcastContent;
}

export type PlatformId = 'instagram' | 'tiktok' | 'youtube' | 'twitter' | 'podcast';
