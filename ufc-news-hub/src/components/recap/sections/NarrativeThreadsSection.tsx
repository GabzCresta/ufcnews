'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, FileText, Video, Mic, Share2 } from 'lucide-react';
import type { RecapNarrativeThread } from '@/types/recap';

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

const tagColors: Record<string, string> = {
  RISE: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  FALL: 'bg-red-500/15 text-red-400 border-red-500/25',
  RIVALRY: 'bg-orange-500/15 text-orange-400 border-orange-500/25',
  UPSET: 'bg-purple-500/15 text-purple-400 border-purple-500/25',
  LEGACY: 'bg-ufc-gold/15 text-ufc-gold border-ufc-gold/25',
  BREAKOUT: 'bg-ufc-red/15 text-ufc-red border-ufc-red/25',
};

const fitIcons: Record<string, React.ElementType> = {
  article: FileText,
  video: Video,
  podcast: Mic,
  social: Share2,
};

function ThreadCard({ thread }: { thread: RecapNarrativeThread }) {
  const [expanded, setExpanded] = useState(false);
  const fullText = `${thread.headline}\n\n${thread.lede}\n\n${thread.body}`;

  return (
    <div className="rounded-2xl bg-[#111111] border border-[#1a1a1a] overflow-hidden shadow-[4px_4px_10px_rgba(0,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.025)] transition-all duration-300 hover:border-ufc-red/15">
      <div
        className="cursor-pointer p-5"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Top bar: tag + content type icons */}
        <div className="flex items-center justify-between mb-3">
          <span className={`rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${tagColors[thread.slug_tag] || tagColors.BREAKOUT}`}>
            {thread.slug_tag}
          </span>
          <div className="flex items-center gap-1.5">
            {thread.content_type_fit.map((fit) => {
              const Icon = fitIcons[fit] || FileText;
              return (
                <div key={fit} className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a1a1a]" title={fit}>
                  <Icon className="h-3 w-3 text-neutral-500" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Headline */}
        <h3 className="font-display text-lg uppercase text-white md:text-xl">{thread.headline}</h3>

        {/* Fighters */}
        <div className="mt-2 flex flex-wrap gap-1">
          {thread.fighters_involved.map((f) => (
            <span key={f} className="text-[10px] text-neutral-500">{f}</span>
          ))}
        </div>

        {/* Lede */}
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">{thread.lede}</p>

        <div className="mt-3 flex justify-center">
          {expanded ? <ChevronUp className="h-4 w-4 text-neutral-600" /> : <ChevronDown className="h-4 w-4 text-neutral-600" />}
        </div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t border-[#1a1a1a] bg-[#0c0c0c] px-5 py-5">
          <div className="flex justify-end mb-2">
            <CopyButton text={fullText} />
          </div>
          <div className="text-sm leading-relaxed text-neutral-300 whitespace-pre-line">
            {thread.body}
          </div>

          {/* Suggested angles */}
          <div className="mt-5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2">Suggested Angles</p>
            <div className="space-y-1.5">
              {thread.suggested_angles.map((angle, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ufc-red/50" />
                  <p className="text-xs text-neutral-400">{angle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function NarrativeThreadsSection({ data }: { data: RecapNarrativeThread[] }) {
  return (
    <section className="space-y-4">
      {data.map((thread, i) => (
        <ThreadCard key={i} thread={thread} />
      ))}
    </section>
  );
}
