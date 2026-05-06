// ═══════════════════════════════════════════════════════════
// Centralized Agent Config — colors, avatars (DiceBear Notionists), names
// Single source of truth for all War Room + Pipeline components
//
// Avatars: DiceBear HTTP API, style "notionists"
// URL: https://api.dicebear.com/9.x/notionists/svg?seed={agentSeed}
// Deterministic: same seed = same avatar, always
// ═══════════════════════════════════════════════════════════

const DICEBEAR_BASE = 'https://api.dicebear.com/9.x/notionists/svg';

function dicebear(seed: string, bg?: string): string {
  const params = new URLSearchParams({ seed, scale: '90', radius: '50' });
  if (bg) params.set('backgroundColor', bg);
  return `${DICEBEAR_BASE}?${params.toString()}`;
}

export interface AgentConfig {
  id: string;
  name: string;
  color: string;
  avatarUrl: string;
  initials: string;
  emoji: string;
}

export const AGENT_CONFIG: Record<string, AgentConfig> = {
  'ceo': {
    id: 'ceo',
    name: 'CEO',
    color: '#D20A0A',
    avatarUrl: dicebear('ricardo-ceo-crenas', 'D20A0A'),
    initials: 'RC',
    emoji: '👔',
  },
  'card-scraper': {
    id: 'card-scraper',
    name: 'Card Scraper',
    color: '#3b82f6',
    avatarUrl: dicebear('felipe-scraper-crenas', '3b82f6'),
    initials: 'CS',
    emoji: '🔍',
  },
  'fight-analyst': {
    id: 'fight-analyst',
    name: 'Fight Analyst',
    color: '#10b981',
    avatarUrl: dicebear('paulo-analyst-crenas', '10b981'),
    initials: 'FA',
    emoji: '🥊',
  },
  'card-validator': {
    id: 'card-validator',
    name: 'Validator',
    color: '#eab308',
    avatarUrl: dicebear('marina-validator-crenas', 'eab308'),
    initials: 'CV',
    emoji: '✅',
  },
  'event-page-generator': {
    id: 'event-page-generator',
    name: 'Event Page',
    color: '#a855f7',
    avatarUrl: dicebear('sofia-eventpage-crenas', 'a855f7'),
    initials: 'EP',
    emoji: '📄',
  },
  'translator': {
    id: 'translator',
    name: 'Translator',
    color: '#f97316',
    avatarUrl: dicebear('marco-translator-crenas', 'f97316'),
    initials: 'TR',
    emoji: '🌐',
  },
};

export function getAgentConfig(id: string): AgentConfig {
  return AGENT_CONFIG[id] || {
    id,
    name: id,
    color: '#6b7280',
    avatarUrl: '',
    initials: id.substring(0, 2).toUpperCase(),
    emoji: '🤖',
  };
}
