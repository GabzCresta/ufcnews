import type { TaleOfTapeRow } from '@/types/analise';
import type { Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';

interface Props {
  rows: TaleOfTapeRow[];
  sectionNumber?: string;
  lang?: Lang;
}

/**
 * Standalone Tale of the Tape.
 *
 * In the "less is more" restructure, Tale of the Tape is its own section
 * (right after the Qualitative Insight), not buried inside the statistical
 * comparison. Same data shape as before (`TaleOfTapeRow[]`) — this component
 * just gives it a dedicated header and more breathing room.
 */
export function TaleOfTapeSection({ rows, sectionNumber }: Props) {
  if (rows.length === 0) return null;

  return (
    <section>
      <SectionHeader number={sectionNumber ?? '01'} title="Tale of" accent="the Tape" />

      <div className="rounded-2xl bg-white/[0.02] border border-white/[0.04] overflow-hidden">
        <div className="divide-y divide-white/[0.04]">
          {rows.map((row, i) => (
            <div
              key={i}
              className="px-4 py-3 md:px-8 md:py-5"
            >
              {/* Mobile: label centered on top, values below stacked */}
              <div className="flex flex-col items-center gap-1 sm:hidden">
                <span className="text-[10px] uppercase tracking-[0.25em] text-red-400 text-center font-bold">
                  {row.label}
                </span>
                <div className="flex items-center justify-between w-full gap-2">
                  <span className="text-sm text-white/75 font-medium flex-1 text-right">
                    {row.fighter1}
                  </span>
                  <span className="text-white/20 text-xs">vs</span>
                  <span className="text-sm text-white/75 font-medium flex-1 text-left">
                    {row.fighter2}
                  </span>
                </div>
              </div>
              {/* Desktop: original 3-col layout */}
              <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] items-center">
                <span className="text-right text-sm md:text-base text-white/75 pr-4 font-medium">
                  {row.fighter1}
                </span>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-red-400 min-w-[110px] text-center font-bold drop-shadow-[0_0_8px_rgba(248,113,113,0.25)]">
                  {row.label}
                </span>
                <span className="text-left text-sm md:text-base text-white/75 pl-4 font-medium">
                  {row.fighter2}
                </span>
              </div>
              {row.note && (
                <p className="text-center text-[10px] text-amber-400/50 mt-1">
                  {row.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
