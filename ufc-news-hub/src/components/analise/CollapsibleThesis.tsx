'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
  paragraphs: ReactNode[];
  expandLabel: string;
  collapseLabel: string;
}

/**
 * Mobile-only collapsible wrapper for the thesis paragraphs.
 *
 * On mobile (< md), shows only the first paragraph with a "ver completa"
 * toggle that expands the rest. On desktop, all paragraphs render together.
 *
 * The thesis is the editorial centerpiece of the analysis, so it's never
 * truncated — only deferred behind a single tap on small viewports.
 */
export function CollapsibleThesis({ paragraphs, expandLabel, collapseLabel }: Props) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = paragraphs.length > 1;

  return (
    <>
      {/* MOBILE — first paragraph + toggle */}
      <div className="md:hidden space-y-3">
        <div>{paragraphs[0]}</div>
        {hasMore && expanded && (
          <div className="space-y-3">
            {paragraphs.slice(1).map((p, i) => (
              <div key={i}>{p}</div>
            ))}
          </div>
        )}
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ufc-red hover:text-ufc-redLight transition-colors mt-2"
          >
            {expanded ? collapseLabel : expandLabel}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>

      {/* DESKTOP — all paragraphs */}
      <div className="hidden md:block space-y-5">
        {paragraphs.map((p, i) => (
          <div key={i}>{p}</div>
        ))}
      </div>
    </>
  );
}
