'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
  text: string;
  className?: string;
  /** Number of lines to show before truncating on mobile. Default 3. */
  mobileLines?: 2 | 3 | 4 | 5;
  /** Color of the toggle button. Defaults to ufc-red. */
  toggleColor?: 'red' | 'gold' | 'blue';
  expandLabel: string;
  collapseLabel: string;
}

const LINE_CLAMP: Record<number, string> = {
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
  5: 'line-clamp-5',
};

const TOGGLE_COLORS = {
  red: 'text-ufc-red hover:text-ufc-redLight',
  gold: 'text-ufc-gold hover:text-ufc-gold/80',
  blue: 'text-blue-400 hover:text-blue-300',
};

/**
 * Mobile-only collapsible text wrapper. On mobile, line-clamps to N lines and
 * shows a "ver mais" toggle. On desktop (md+), renders full text without toggle.
 */
export function CollapsibleText({
  text,
  className = '',
  mobileLines = 3,
  toggleColor = 'red',
  expandLabel,
  collapseLabel,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const clampClass = expanded ? '' : LINE_CLAMP[mobileLines];

  return (
    <>
      {/* MOBILE — line-clamped + toggle */}
      <div className="md:hidden">
        <p className={`${className} ${clampClass}`}>{text}</p>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className={`mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${TOGGLE_COLORS[toggleColor]}`}
        >
          {expanded ? collapseLabel : expandLabel}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* DESKTOP — full text always */}
      <p className={`${className} hidden md:block`}>{text}</p>
    </>
  );
}
