'use client';

import { useState } from 'react';
import { Instagram, Twitter, Youtube, Smartphone, Mic, Copy, Check, Brain, Target, Sparkles, Clock, MessageCircle, BarChart3, Eye, Zap } from 'lucide-react';
import type {
  EventCreatorKitData,
  PlatformId,
  EventInstagramSlide,
  EventTikTokScript,
  EventYouTubeSection,
  EventTweet,
  EventPodcastSegment,
  PlatformMeta,
} from '@/types/event-creator-kit';

// ═══════════════════════════════════════════════════════════
// Platform Config
// ═══════════════════════════════════════════════════════════

const platformConfig: Record<PlatformId, {
  label: string;
  Icon: typeof Instagram;
  gradient: string;
  accentText: string;
  accentBg: string;
  accentBorder: string;
}> = {
  instagram: {
    label: 'Instagram',
    Icon: Instagram,
    gradient: 'from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
    accentText: 'text-[#E1306C]',
    accentBg: 'bg-[#E1306C]/10',
    accentBorder: 'border-[#E1306C]/30',
  },
  tiktok: {
    label: 'TikTok',
    Icon: Smartphone,
    gradient: 'from-[#00F2EA] to-[#FF0050]',
    accentText: 'text-[#00F2EA]',
    accentBg: 'bg-[#00F2EA]/10',
    accentBorder: 'border-[#00F2EA]/30',
  },
  youtube: {
    label: 'YouTube',
    Icon: Youtube,
    gradient: 'from-[#FF0000] to-[#CC0000]',
    accentText: 'text-[#FF0000]',
    accentBg: 'bg-[#FF0000]/10',
    accentBorder: 'border-[#FF0000]/30',
  },
  twitter: {
    label: 'Twitter/X',
    Icon: Twitter,
    gradient: 'from-[#1DA1F2] to-[#0d8ecf]',
    accentText: 'text-[#1DA1F2]',
    accentBg: 'bg-[#1DA1F2]/10',
    accentBorder: 'border-[#1DA1F2]/30',
  },
  podcast: {
    label: 'Podcast',
    Icon: Mic,
    gradient: 'from-[#8B5CF6] to-[#6D28D9]',
    accentText: 'text-[#8B5CF6]',
    accentBg: 'bg-[#8B5CF6]/10',
    accentBorder: 'border-[#8B5CF6]/30',
  },
};

const platforms: PlatformId[] = ['instagram', 'tiktok', 'youtube', 'twitter', 'podcast'];

// ═══════════════════════════════════════════════════════════
// Copy Button
// ═══════════════════════════════════════════════════════════

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="p-1.5 rounded-lg hover:bg-dark-border/50 text-dark-textMuted hover:text-dark-text transition-colors"
    >
      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
    </button>
  );
}

// ═══════════════════════════════════════════════════════════
// Platform Meta Banner
// ═══════════════════════════════════════════════════════════

function MetaBanner({ meta, platformId }: { meta: PlatformMeta; platformId: PlatformId }) {
  const config = platformConfig[platformId];
  return (
    <div className={`rounded-xl ${config.accentBg} border ${config.accentBorder} p-4 mb-6`}>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-2">
          <Brain size={14} className={`${config.accentText} mt-0.5 flex-shrink-0`} />
          <div>
            <p className={`text-[10px] font-bold uppercase tracking-wider ${config.accentText} mb-0.5`}>Dica do Algoritmo</p>
            <p className="text-xs text-dark-textMuted">{meta.algorithm_tip}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Target size={14} className={`${config.accentText} flex-shrink-0`} />
          <div>
            <p className={`text-[10px] font-bold uppercase tracking-wider ${config.accentText} mb-0.5`}>Meta</p>
            <p className="text-xs text-dark-textMuted">{meta.target_metric}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BarChart3 size={14} className={`${config.accentText} flex-shrink-0`} />
          <div>
            <p className={`text-[10px] font-bold uppercase tracking-wider ${config.accentText} mb-0.5`}>Formato</p>
            <p className="text-xs text-dark-textMuted">{meta.content_type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Slide Type Badge
// ═══════════════════════════════════════════════════════════

const slideTypeConfig: Record<EventInstagramSlide['slide_type'], { label: string; color: string }> = {
  hook: { label: 'HOOK', color: 'bg-ufc-red/20 text-ufc-red' },
  content: { label: 'CONTEUDO', color: 'bg-blue-400/20 text-blue-400' },
  stat: { label: 'DADOS', color: 'bg-emerald-400/20 text-emerald-400' },
  prediction: { label: 'PREVISAO', color: 'bg-ufc-gold/20 text-ufc-gold' },
  cta: { label: 'CTA', color: 'bg-purple-400/20 text-purple-400' },
};

const slideColorMap: Record<string, string> = {
  red: 'from-ufc-red/15 to-dark-card border-ufc-red/20',
  blue: 'from-blue-400/15 to-dark-card border-blue-400/20',
  gold: 'from-ufc-gold/15 to-dark-card border-ufc-gold/20',
  white: 'from-neutral-300/10 to-dark-card border-neutral-500/20',
};

// ═══════════════════════════════════════════════════════════
// Instagram Tab
// ═══════════════════════════════════════════════════════════

function InstagramTab({ data }: { data: EventCreatorKitData['instagram'] }) {
  return (
    <div>
      <MetaBanner meta={data.meta} platformId="instagram" />

      {/* Carousel Preview */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display text-sm uppercase text-dark-text">Carrossel ({data.carousel.length} slides)</h3>
          <span className={`text-[10px] px-2 py-1 rounded-full ${data.carousel.length >= 7 && data.carousel.length <= 10 ? 'bg-emerald-400/10 text-emerald-400' : 'bg-ufc-red/10 text-ufc-red'}`}>
            {data.carousel.length >= 7 && data.carousel.length <= 10 ? 'Tamanho ideal' : 'Ajustar tamanho'}
          </span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x">
          {data.carousel.map((slide) => {
            const typeConfig = slideTypeConfig[slide.slide_type];
            const colorClass = slideColorMap[slide.color] || slideColorMap.red;
            return (
              <div key={slide.slide_number} className={`min-w-[260px] max-w-[280px] flex-shrink-0 snap-start rounded-xl bg-gradient-to-br border p-5 ${colorClass}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-dark-textMuted">Slide {slide.slide_number}</span>
                  <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${typeConfig.color}`}>{typeConfig.label}</span>
                </div>
                <h4 className="font-display text-base uppercase text-dark-text mb-2">{slide.title}</h4>
                <p className="text-xs text-dark-textMuted whitespace-pre-line leading-relaxed mb-3">{slide.content}</p>
                {slide.visual_note && (
                  <div className="flex items-start gap-1.5 mt-2 pt-2 border-t border-dark-border/50">
                    <Eye size={10} className="text-dark-textMuted mt-0.5 flex-shrink-0" />
                    <p className="text-[10px] text-dark-textMuted italic">{slide.visual_note}</p>
                  </div>
                )}
                <div className="flex justify-end mt-2">
                  <CopyBtn text={`${slide.title}\n\n${slide.content}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption */}
      <div className="neu-card p-5 mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#E1306C]">Caption Pronta</p>
          <CopyBtn text={`${data.caption}\n\n${data.hashtags.map(h => `#${h}`).join(' ')}`} />
        </div>
        <p className="text-sm text-dark-textMuted leading-relaxed whitespace-pre-line">{data.caption}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {data.hashtags.map((tag) => (
            <span key={tag} className="text-[10px] text-[#E1306C]/70 bg-[#E1306C]/5 px-2 py-0.5 rounded-full">#{tag}</span>
          ))}
        </div>
      </div>

      {data.best_posting_time && (
        <div className="flex items-center gap-2 text-xs text-dark-textMuted">
          <Clock size={12} className="text-[#E1306C]" />
          <span>Melhor horario: {data.best_posting_time}</span>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TikTok Tab
// ═══════════════════════════════════════════════════════════

function TikTokTab({ data }: { data: EventCreatorKitData['tiktok'] }) {
  return (
    <div>
      <MetaBanner meta={data.meta} platformId="tiktok" />
      <div className="space-y-4">
        {data.scripts.map((script) => (
          <div key={script.script_number} className="neu-card p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-[#00F2EA] bg-[#00F2EA]/10 px-2 py-1 rounded-full">Script {script.script_number}</span>
                <span className="text-[10px] text-dark-textMuted">{script.angle}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-dark-textMuted">{script.estimated_duration}</span>
                <CopyBtn text={`HOOK: ${script.hook_3s}\n\n${script.body}\n\nCTA: ${script.cta}`} />
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FF0050]/10 to-transparent border-l-2 border-[#FF0050] p-3 rounded-r-lg mb-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Zap size={10} className="text-[#FF0050]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#FF0050]">Hook (3 segundos)</span>
              </div>
              <p className="text-sm font-bold text-dark-text">{script.hook_3s}</p>
            </div>

            <p className="text-sm text-dark-textMuted leading-relaxed mb-3">{script.body}</p>

            {script.twist_or_loop && (
              <div className="bg-[#00F2EA]/5 border border-[#00F2EA]/20 p-3 rounded-lg mb-3">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#00F2EA] mb-1">Loop de Rewatch</p>
                <p className="text-xs text-dark-textMuted">{script.twist_or_loop}</p>
              </div>
            )}

            <div className="bg-gradient-to-r from-[#00F2EA]/10 to-transparent border-l-2 border-[#00F2EA] p-3 rounded-r-lg">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#00F2EA]">CTA</span>
              <p className="text-sm text-dark-text mt-1">{script.cta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// YouTube Tab
// ═══════════════════════════════════════════════════════════

function YouTubeTab({ data }: { data: EventCreatorKitData['youtube'] }) {
  return (
    <div>
      <MetaBanner meta={data.meta} platformId="youtube" />

      {/* Title Options */}
      <div className="mb-6">
        <h3 className="font-display text-sm uppercase text-dark-text mb-3">Opcoes de Titulo (CTR-Otimizados)</h3>
        <div className="space-y-2">
          {data.title_options.map((title, i) => (
            <div key={i} className="neu-card p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#FF0000] font-bold">{i + 1}.</span>
                <p className="text-sm font-medium text-dark-text">{title}</p>
              </div>
              <CopyBtn text={title} />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Concept */}
      <div className="mb-6 rounded-xl bg-[#FF0000]/5 border border-[#FF0000]/20 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Eye size={14} className="text-[#FF0000]" />
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#FF0000]">Conceito de Thumbnail</p>
        </div>
        <p className="font-display text-lg text-dark-text mb-1">{data.thumbnail.headline}</p>
        {data.thumbnail.subtext && <p className="text-sm text-dark-textMuted mb-2">{data.thumbnail.subtext}</p>}
        <p className="text-xs text-dark-textMuted italic">{data.thumbnail.visual_concept}</p>
      </div>

      {/* Script Timeline */}
      <div className="mb-6">
        <h3 className="font-display text-sm uppercase text-dark-text mb-3">Script com Timestamps</h3>
        <div className="space-y-0 relative">
          {data.script_sections.map((section, i) => (
            <div key={section.timestamp} className="flex gap-3">
              <div className="relative flex flex-col items-center">
                <span className="bg-[#FF0000]/20 text-[#FF0000] text-[10px] font-bold px-2 py-1 rounded flex-shrink-0 min-w-[60px] text-center z-10">
                  {section.timestamp}
                </span>
                {i < data.script_sections.length - 1 && (
                  <div className="border-l-2 border-dark-border flex-1 min-h-[16px]" />
                )}
              </div>
              <div className="neu-card p-4 flex-1 mb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-display text-xs uppercase text-dark-text">{section.title}</h4>
                    <p className="text-sm text-dark-textMuted mt-1.5 italic leading-relaxed">&ldquo;{section.text}&rdquo;</p>
                    {section.retention_note && (
                      <div className="flex items-start gap-1.5 mt-2">
                        <Sparkles size={10} className="text-ufc-gold mt-0.5 flex-shrink-0" />
                        <p className="text-[10px] text-ufc-gold">{section.retention_note}</p>
                      </div>
                    )}
                    {section.b_roll && (
                      <div className="flex items-start gap-1.5 mt-1.5">
                        <Eye size={10} className="text-dark-textMuted mt-0.5 flex-shrink-0" />
                        <p className="text-[10px] text-dark-textMuted italic">{section.b_roll}</p>
                      </div>
                    )}
                  </div>
                  <CopyBtn text={section.text} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-dark-textMuted mb-2">Tags SEO</p>
        <div className="flex flex-wrap gap-1.5">
          {data.tags.map((tag) => (
            <span key={tag} className="text-[10px] text-[#FF0000]/70 bg-[#FF0000]/5 px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Twitter Tab
// ═══════════════════════════════════════════════════════════

function TwitterTab({ data }: { data: EventCreatorKitData['twitter'] }) {
  const tweetTypeConfig: Record<EventTweet['tweet_type'], { label: string; color: string }> = {
    hook: { label: 'HOOK', color: 'text-[#1DA1F2]' },
    content: { label: 'CONTEUDO', color: 'text-dark-textMuted' },
    hot_take: { label: 'HOT TAKE', color: 'text-ufc-red' },
    poll: { label: 'POLL', color: 'text-ufc-gold' },
    cta: { label: 'CTA', color: 'text-emerald-400' },
  };

  return (
    <div>
      <MetaBanner meta={data.meta} platformId="twitter" />

      {/* Thread */}
      <div className="mb-6">
        <h3 className="font-display text-sm uppercase text-dark-text mb-3">Thread ({data.thread.length} tweets)</h3>
        <div className="space-y-2">
          {data.thread.map((tweet) => {
            const typeConf = tweetTypeConfig[tweet.tweet_type];
            const isOverLimit = tweet.text.length > 280;
            return (
              <div key={tweet.num} className="neu-card p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-[#1DA1F2] font-medium">{tweet.num}</span>
                      <span className={`text-[9px] font-bold uppercase ${typeConf.color}`}>{typeConf.label}</span>
                    </div>
                    <p className="text-sm text-dark-text leading-relaxed">{tweet.text}</p>
                    {tweet.engagement_note && (
                      <div className="flex items-start gap-1.5 mt-2">
                        <MessageCircle size={10} className="text-[#1DA1F2] mt-0.5 flex-shrink-0" />
                        <p className="text-[10px] text-[#1DA1F2]/70">{tweet.engagement_note}</p>
                      </div>
                    )}
                  </div>
                  <CopyBtn text={tweet.text} />
                </div>
                <div className="flex justify-end mt-1">
                  <span className={`text-[10px] ${isOverLimit ? 'text-ufc-red' : 'text-dark-textMuted'}`}>
                    {tweet.text.length}/280
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Standalone Tweets */}
      {data.standalone_tweets.length > 0 && (
        <div className="mb-6">
          <h3 className="font-display text-sm uppercase text-dark-text mb-3">Tweets Avulsos (Alta Viralidade)</h3>
          <div className="space-y-2">
            {data.standalone_tweets.map((tweet, i) => (
              <div key={i} className="neu-card p-4 border-l-2 border-[#1DA1F2]/30">
                <div className="flex items-start justify-between">
                  <p className="text-sm text-dark-text leading-relaxed flex-1">{tweet}</p>
                  <CopyBtn text={tweet} />
                </div>
                <div className="flex justify-end mt-1">
                  <span className={`text-[10px] ${tweet.length > 280 ? 'text-ufc-red' : 'text-dark-textMuted'}`}>
                    {tweet.length}/280
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Poll */}
      {data.poll_suggestion && (
        <div className="rounded-xl bg-[#1DA1F2]/5 border border-[#1DA1F2]/20 p-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#1DA1F2] mb-2">Enquete Sugerida</p>
          <p className="text-sm font-medium text-dark-text mb-3">{data.poll_suggestion.question}</p>
          <div className="space-y-1.5">
            {data.poll_suggestion.options.map((opt, i) => (
              <div key={i} className="rounded-lg bg-[#1DA1F2]/10 px-3 py-2 text-xs text-dark-textMuted">{opt}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Podcast Tab
// ═══════════════════════════════════════════════════════════

function PodcastTab({ data }: { data: EventCreatorKitData['podcast'] }) {
  return (
    <div>
      <MetaBanner meta={data.meta} platformId="podcast" />

      {/* Episode Info */}
      <div className="neu-card p-5 mb-6">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#8B5CF6] mb-2">Titulo do Episodio</p>
        <p className="font-display text-lg text-dark-text mb-3">{data.episode_title}</p>
        <p className="text-xs text-dark-textMuted leading-relaxed mb-4">{data.episode_description}</p>
        <div className="bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 p-3 rounded-lg">
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#8B5CF6] mb-1">Cold Open</p>
          <p className="text-sm text-dark-text italic">&ldquo;{data.cold_open}&rdquo;</p>
        </div>
      </div>

      {/* Segments */}
      <div className="space-y-3">
        {data.segments.map((segment, i) => (
          <div key={i} className="neu-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#8B5CF6]/20 text-[#8B5CF6] text-[10px] font-bold px-2 py-1 rounded">{segment.timestamp}</span>
              <h4 className="font-display text-sm uppercase text-dark-text">{segment.title}</h4>
            </div>

            <div className="space-y-2 mb-3">
              {segment.talking_points.map((point, j) => (
                <div key={j} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8B5CF6]" />
                  <p className="text-sm text-dark-textMuted leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            {segment.quotable_moment && (
              <div className="bg-ufc-gold/5 border-l-2 border-ufc-gold p-3 rounded-r-lg mb-3">
                <p className="text-[9px] font-bold uppercase tracking-wider text-ufc-gold mb-1">Momento Clipavel</p>
                <p className="text-sm text-dark-text italic">&ldquo;{segment.quotable_moment}&rdquo;</p>
              </div>
            )}

            {segment.hot_take && (
              <div className="bg-ufc-red/5 border-l-2 border-ufc-red p-3 rounded-r-lg mb-3">
                <p className="text-[9px] font-bold uppercase tracking-wider text-ufc-red mb-1">Hot Take</p>
                <p className="text-sm text-dark-text">{segment.hot_take}</p>
              </div>
            )}

            {segment.discussion_questions && segment.discussion_questions.length > 0 && (
              <div className="bg-[#8B5CF6]/5 border border-[#8B5CF6]/15 p-3 rounded-lg">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#8B5CF6] mb-1.5">Perguntas para Discussao</p>
                {segment.discussion_questions.map((q, k) => (
                  <p key={k} className="text-xs text-dark-textMuted mb-1">&ldquo;{q}&rdquo;</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Main Component
// ═══════════════════════════════════════════════════════════

export function EventCreatorKitSection({ data }: { data: EventCreatorKitData }) {
  const [activeTab, setActiveTab] = useState<PlatformId>('instagram');
  const activeConfig = platformConfig[activeTab];

  return (
    <section className="mt-12">
      {/* Section Header */}
      <div className="flex items-center gap-4 py-8">
        <div className="h-px flex-1 bg-ufc-gold/25" />
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-ufc-gold" />
          <h2 className="font-display text-sm uppercase tracking-[0.3em] text-ufc-gold/80">
            Creator Kit
          </h2>
        </div>
        <div className="h-px flex-1 bg-ufc-gold/25" />
      </div>

      <p className="text-center text-xs text-dark-textMuted mb-8 max-w-lg mx-auto">
        Conteudo otimizado para cada plataforma com base nas regras dos algoritmos de 2026. Copie, personalize com sua voz, e publique.
      </p>

      {/* Tab Navigation */}
      <div className="flex gap-1 rounded-xl bg-[#0e0e0e] p-1.5 mb-6 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.015)] overflow-x-auto">
        {platforms.map((pid) => {
          const config = platformConfig[pid];
          const isActive = activeTab === pid;
          return (
            <button
              key={pid}
              onClick={() => setActiveTab(pid)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                isActive
                  ? `bg-gradient-to-r ${config.gradient} text-white shadow-md`
                  : 'text-dark-textMuted hover:text-dark-text'
              }`}
            >
              <config.Icon size={16} />
              {config.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content with Gradient Border */}
      <div className={`p-[1px] rounded-2xl bg-gradient-to-br ${activeConfig.gradient}`}>
        <div className="rounded-2xl bg-[#111111] p-6 md:p-8">
          {activeTab === 'instagram' && <InstagramTab data={data.instagram} />}
          {activeTab === 'tiktok' && <TikTokTab data={data.tiktok} />}
          {activeTab === 'youtube' && <YouTubeTab data={data.youtube} />}
          {activeTab === 'twitter' && <TwitterTab data={data.twitter} />}
          {activeTab === 'podcast' && <PodcastTab data={data.podcast} />}
        </div>
      </div>
    </section>
  );
}
