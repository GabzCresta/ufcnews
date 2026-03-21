'use client';

import { useState } from 'react';
import { Copy, Check, Mic } from 'lucide-react';
import type { RecapCreatorKit, RecapInstagramSlide } from '@/types/recap';

// ═══════════════════════════════════════════════════════════
// Copy Button
// ═══════════════════════════════════════════════════════════

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-lg hover:bg-[#262626]/50 text-neutral-500 hover:text-white transition-colors"
      aria-label="Copy"
    >
      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
    </button>
  );
}

// ═══════════════════════════════════════════════════════════
// Slide Colors
// ═══════════════════════════════════════════════════════════

const slideColors: Record<RecapInstagramSlide['color'], string> = {
  red: 'bg-gradient-to-br from-ufc-red/20 to-[#111111] border border-ufc-red/30',
  blue: 'bg-gradient-to-br from-blue-400/20 to-[#111111] border border-blue-400/30',
  gold: 'bg-gradient-to-br from-ufc-gold/20 to-[#111111] border border-ufc-gold/30',
  green: 'bg-gradient-to-br from-emerald-400/20 to-[#111111] border border-emerald-400/30',
};

// ═══════════════════════════════════════════════════════════
// Tab Components
// ═══════════════════════════════════════════════════════════

function InstagramTab({ slides }: { slides: RecapInstagramSlide[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {slides.map((slide) => (
        <div key={slide.slide_number} className={`min-w-[280px] max-w-[320px] flex-shrink-0 rounded-xl p-6 ${slideColors[slide.color]}`}>
          <span className="text-[10px] uppercase tracking-wider text-neutral-500">Slide {slide.slide_number}</span>
          <h4 className="font-display text-lg uppercase text-white mt-2">{slide.title}</h4>
          <p className="text-sm text-neutral-400 mt-3 whitespace-pre-line leading-relaxed">{slide.content}</p>
          <div className="mt-4 flex justify-end">
            <CopyButton text={`${slide.title}\n\n${slide.content}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

function TwitterTab({ tweets }: { tweets: { num: string; text: string; type: string }[] }) {
  const typeColors: Record<string, string> = {
    thread_opener: 'border-l-ufc-red',
    result: 'border-l-emerald-500',
    stat: 'border-l-blue-400',
    hot_take: 'border-l-ufc-gold',
    thread_closer: 'border-l-purple-400',
  };
  return (
    <div className="space-y-3">
      {tweets.map((tweet) => (
        <div key={tweet.num} className={`rounded-xl bg-[#0e0e0e] border border-[#1a1a1a] border-l-2 ${typeColors[tweet.type] || 'border-l-neutral-600'} p-4`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-neutral-600">{tweet.num}</span>
                <span className="text-[8px] uppercase tracking-wider text-neutral-600">{tweet.type.replace('_', ' ')}</span>
              </div>
              <p className="text-sm text-white leading-relaxed">{tweet.text}</p>
            </div>
            <CopyButton text={tweet.text} />
          </div>
          <div className="flex justify-end mt-2">
            <span className={`text-[10px] ${tweet.text.length > 280 ? 'text-ufc-red' : 'text-neutral-600'}`}>
              {tweet.text.length}/280
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function VideoScriptTab({ sections }: { sections: { time: string; title: string; text: string; b_roll_suggestion?: string }[] }) {
  return (
    <div className="space-y-0 relative">
      {sections.map((section, i) => (
        <div key={section.time} className="flex gap-4">
          <div className="relative flex flex-col items-center">
            <span className="bg-ufc-red/20 text-ufc-red text-xs font-bold px-2 py-1 rounded flex-shrink-0 w-16 text-center z-10">
              {section.time}
            </span>
            {i < sections.length - 1 && <div className="border-l-2 border-[#262626] flex-1 min-h-[16px]" />}
          </div>
          <div className="rounded-xl bg-[#0e0e0e] border border-[#1a1a1a] p-4 flex-1 mb-4">
            <h4 className="font-display text-sm uppercase text-white">{section.title}</h4>
            <p className="text-sm text-neutral-400 mt-2 italic leading-relaxed">&ldquo;{section.text}&rdquo;</p>
            {section.b_roll_suggestion && (
              <p className="mt-2 text-[10px] text-ufc-gold/60">B-Roll: {section.b_roll_suggestion}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function TikTokTab({ scripts }: { scripts: { hook: string; body: string; cta: string }[] }) {
  return (
    <div className="space-y-4">
      {scripts.map((script, i) => (
        <div key={i} className="rounded-xl bg-[#0e0e0e] border border-[#1a1a1a] p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-neutral-600">Script {i + 1}</span>
            <CopyButton text={`HOOK: ${script.hook}\n\n${script.body}\n\nCTA: ${script.cta}`} />
          </div>
          <div className="bg-ufc-red/10 border-l-2 border-ufc-red p-3 rounded-r-lg">
            <span className="text-[10px] uppercase tracking-wider text-ufc-red font-bold">HOOK</span>
            <p className="text-sm text-white mt-1">{script.hook}</p>
          </div>
          <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{script.body}</p>
          <div className="bg-ufc-gold/10 border-l-2 border-ufc-gold p-3 rounded-r-lg mt-3">
            <span className="text-[10px] uppercase tracking-wider text-ufc-gold font-bold">CTA</span>
            <p className="text-sm text-white mt-1">{script.cta}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PodcastTab({ points }: { points: { segment: string; duration_suggestion: string; talking_points: string[]; hot_take?: string }[] }) {
  return (
    <div className="space-y-4">
      {points.map((point, i) => (
        <div key={i} className="rounded-xl bg-[#0e0e0e] border border-[#1a1a1a] p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Mic className="h-4 w-4 text-ufc-red" />
              <p className="font-display text-sm uppercase text-white">{point.segment}</p>
            </div>
            <span className="text-[10px] text-neutral-600">{point.duration_suggestion}</span>
          </div>
          <ul className="space-y-2">
            {point.talking_points.map((tp, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-neutral-400">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-600" />
                {tp}
              </li>
            ))}
          </ul>
          {point.hot_take && (
            <div className="mt-3 rounded-lg bg-ufc-red/5 border border-ufc-red/15 p-3">
              <p className="text-[9px] font-bold uppercase tracking-wider text-ufc-red mb-1">Hot Take</p>
              <p className="text-xs text-neutral-300 italic">{point.hot_take}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Main Component
// ═══════════════════════════════════════════════════════════

type TabId = 'instagram' | 'twitter' | 'video' | 'tiktok' | 'podcast';

export function RecapCreatorKitSection({ data }: { data: RecapCreatorKit }) {
  const [activeTab, setActiveTab] = useState<TabId>('instagram');

  const tabs: { id: TabId; label: string }[] = [
    { id: 'instagram', label: 'Instagram' },
    { id: 'twitter', label: 'Twitter/X' },
    { id: 'video', label: 'Video Script' },
    { id: 'tiktok', label: 'TikTok' },
    { id: 'podcast', label: 'Podcast' },
  ];

  return (
    <section>
      {/* Tab bar */}
      <div className="flex gap-1 rounded-xl bg-[#0A0A0A] p-1 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-[#141414] text-ufc-red shadow-md'
                : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'instagram' && <InstagramTab slides={data.instagram} />}
      {activeTab === 'twitter' && <TwitterTab tweets={data.twitter} />}
      {activeTab === 'video' && <VideoScriptTab sections={data.video_script} />}
      {activeTab === 'tiktok' && <TikTokTab scripts={data.tiktok} />}
      {activeTab === 'podcast' && <PodcastTab points={data.podcast_talking_points} />}
    </section>
  );
}
