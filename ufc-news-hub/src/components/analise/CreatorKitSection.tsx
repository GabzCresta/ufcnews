'use client';

import { useState } from 'react';
import { Instagram, MessageCircle, Video, Smartphone, Mic, Type, Copy, Check } from 'lucide-react';
import type { CreatorKitSectionData } from '@/types/analise';
import { getLabels, type Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';

// ═══════════════════════════════════════════════════════
// Platform config
// ═══════════════════════════════════════════════════════

type TabId = 'instagram' | 'twitter' | 'video' | 'tiktok' | 'podcast' | 'headlines';

const platforms: { id: TabId; label: string; Icon: typeof Instagram; gradient: string; color: string }[] = [
  { id: 'instagram', label: 'Instagram', Icon: Instagram, gradient: 'from-[#833AB4] via-[#FD1D1D] to-[#F77737]', color: 'text-[#E1306C]' },
  { id: 'twitter', label: 'Twitter/X', Icon: MessageCircle, gradient: 'from-[#1DA1F2] to-[#0d8ecf]', color: 'text-[#1DA1F2]' },
  { id: 'video', label: 'YouTube', Icon: Video, gradient: 'from-[#FF0000] to-[#CC0000]', color: 'text-[#FF0000]' },
  { id: 'tiktok', label: 'TikTok', Icon: Smartphone, gradient: 'from-[#00F2EA] to-[#FF0050]', color: 'text-[#00F2EA]' },
  { id: 'podcast', label: 'Podcast', Icon: Mic, gradient: 'from-[#8B5CF6] to-[#6D28D9]', color: 'text-[#8B5CF6]' },
  { id: 'headlines', label: 'Headlines', Icon: Type, gradient: 'from-amber-400 to-yellow-300', color: 'text-amber-400' },
];

// ═══════════════════════════════════════════════════════
// Copy button
// ═══════════════════════════════════════════════════════

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="p-1.5 rounded-lg text-white/20 hover:text-white/50 transition-colors"
    >
      {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
    </button>
  );
}

// ═══════════════════════════════════════════════════════
// Slide colors
// ═══════════════════════════════════════════════════════

const slideGradient: Record<string, string> = {
  red: 'from-ufc-red/15 to-transparent border-ufc-red/15',
  blue: 'from-blue-400/15 to-transparent border-blue-400/15',
  gold: 'from-amber-400/10 to-transparent border-amber-400/15',
  white: 'from-white/5 to-transparent border-white/10',
};

// ═══════════════════════════════════════════════════════
// Main component
// ═══════════════════════════════════════════════════════

export function CreatorKitSection({ data, lang = 'pt' }: { data: CreatorKitSectionData; lang?: Lang }) {
  const t = getLabels(lang);
  const [activeTab, setActiveTab] = useState<TabId>('instagram');

  const activePlatform = platforms.find(p => p.id === activeTab)!;

  // Filter tabs based on available data
  const availableTabs = platforms.filter(p => {
    if (p.id === 'tiktok') return !!data.tiktok;
    if (p.id === 'podcast') return !!data.podcast;
    if (p.id === 'headlines') return !!data.headlines;
    return true;
  });

  return (
    <section>
      <SectionHeader number="13" title={t.creator_title} accent={t.creator_accent} />

      {/* Tab navigation — gradient active state */}
      <div className="flex gap-1.5 rounded-xl bg-white/[0.02] border border-white/[0.04] p-1.5 mb-8 overflow-x-auto">
        {availableTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                isActive
                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-md`
                  : 'text-white/30 hover:text-white/60'
              }`}
            >
              <tab.Icon size={14} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Gradient border wrapper */}
      <div className={`p-[1px] rounded-2xl bg-gradient-to-br ${activePlatform.gradient}`}>
        <div className="rounded-2xl bg-[#0c0c0c] p-6 md:p-8">

          {/* ═══ INSTAGRAM ═══ */}
          {activeTab === 'instagram' && (
            <div>
              <div className="flex gap-3 overflow-x-auto pb-4 snap-x">
                {data.instagram.map((slide) => (
                  <div key={slide.slide_number} className={`min-w-[250px] max-w-[270px] flex-shrink-0 snap-start rounded-xl bg-gradient-to-b ${slideGradient[slide.color] || slideGradient.red} border p-5`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] uppercase tracking-wider text-white/25">Slide {slide.slide_number}</span>
                      <CopyBtn text={`${slide.title}\n\n${slide.content}`} />
                    </div>
                    <p className="font-display text-sm uppercase text-white/90 mb-2">{slide.title}</p>
                    <p className="text-[11px] text-white/40 whitespace-pre-line leading-relaxed">{slide.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══ TWITTER ═══ */}
          {activeTab === 'twitter' && (
            <div className="space-y-2">
              {data.twitter.map((tweet) => (
                <div key={tweet.num} className="flex items-start justify-between gap-3 py-3 border-b border-white/[0.04] last:border-b-0">
                  <div className="flex-1">
                    <span className="text-[10px] text-[#1DA1F2] font-medium mr-2">{tweet.num}</span>
                    <span className="text-sm text-white/60">{tweet.text}</span>
                    <span className={`ml-2 text-[9px] ${tweet.text.length > 280 ? 'text-red-400' : 'text-white/15'}`}>{tweet.text.length}/280</span>
                  </div>
                  <CopyBtn text={tweet.text} />
                </div>
              ))}
            </div>
          )}

          {/* ═══ VIDEO ═══ */}
          {activeTab === 'video' && (
            <div className="space-y-4">
              {data.video.map((section) => (
                <div key={section.time} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-[10px] font-bold text-[#FF0000] bg-[#FF0000]/10 rounded px-2 py-1">{section.time}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase text-white/60">{section.title}</span>
                      <CopyBtn text={section.text} />
                    </div>
                    <p className="text-sm text-white/40 italic leading-relaxed">&ldquo;{section.text}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ═══ TIKTOK ═══ */}
          {activeTab === 'tiktok' && data.tiktok && (
            <div className="space-y-6">
              {data.tiktok.map((script, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-[#00F2EA] bg-[#00F2EA]/10 rounded px-2 py-1">Script {i + 1}</span>
                    <CopyBtn text={`HOOK: ${script.hook}\n\n${script.body}\n\nCTA: ${script.cta}`} />
                  </div>
                  <div className="border-l-2 border-[#FF0050] pl-4 mb-2">
                    <p className="text-[9px] uppercase tracking-wider text-[#FF0050] mb-1">Hook</p>
                    <p className="text-sm font-bold text-white/80">{script.hook}</p>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed mb-2">{script.body}</p>
                  <div className="border-l-2 border-[#00F2EA] pl-4">
                    <p className="text-[9px] uppercase tracking-wider text-[#00F2EA] mb-1">CTA</p>
                    <p className="text-sm text-white/60">{script.cta}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ═══ PODCAST ═══ */}
          {activeTab === 'podcast' && data.podcast && (
            <div className="space-y-4">
              {data.podcast.map((segment, i) => (
                <div key={i} className="py-4 border-b border-white/[0.04] last:border-b-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold text-[#8B5CF6] bg-[#8B5CF6]/10 rounded px-2 py-1">{segment.timestamp}</span>
                    <span className="text-xs font-bold uppercase text-white/60">{segment.title}</span>
                  </div>
                  <div className="space-y-1.5 pl-1">
                    {segment.talking_points.map((point, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#8B5CF6]/50" />
                        <p className="text-xs text-white/40 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                  {segment.discussion_questions && segment.discussion_questions.length > 0 && (
                    <div className="mt-3 pl-1">
                      {segment.discussion_questions.map((q, k) => (
                        <p key={k} className="text-[11px] text-[#8B5CF6]/50 italic">&ldquo;{q}&rdquo;</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ═══ HEADLINES ═══ */}
          {activeTab === 'headlines' && data.headlines && (
            <div className="space-y-2">
              {data.headlines.map((headline, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/[0.04] last:border-b-0">
                  <p className="text-sm text-white/60">{headline}</p>
                  <CopyBtn text={headline} />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
