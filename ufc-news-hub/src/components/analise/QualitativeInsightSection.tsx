import type { QualitativeInsightSectionData } from '@/types/analise';
import type { Lang } from '@/lib/i18n-labels';
import { CollapsibleText } from './CollapsibleText';

interface Props {
  data: QualitativeInsightSectionData;
  lang?: Lang;
}

const EXPAND_LABEL: Record<Lang, string> = {
  pt: 'Ler mais',
  en: 'Read more',
};

const COLLAPSE_LABEL: Record<Lang, string> = {
  pt: 'Recolher',
  en: 'Collapse',
};

// Single high-value qualitative insight, rendered right after the Hero.
// Deliberately not behind a numbered SectionHeader — this block is the
// "hand delivering the knife", not another numbered section to scroll past.
export function QualitativeInsightSection({ data, lang = 'pt' }: Props) {
  const truthA = lang === 'en' ? 'Truth A' : 'Verdade A';
  const truthB = lang === 'en' ? 'Truth B' : 'Verdade B';

  return (
    <section className="my-16 md:my-20">
      <div className="max-w-4xl mx-auto">
        {/* Tag */}
        {data.tag && (
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-ufc-gold/40" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-ufc-gold whitespace-nowrap">
              {data.tag}
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-ufc-gold/40" />
          </div>
        )}

        {/* Headline — the big statement */}
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl uppercase text-center leading-[0.95] text-white mb-5 md:mb-8">
          {data.headline}
        </h2>

        {/* Insight body */}
        <div className="max-w-3xl mx-auto mb-6 md:mb-10 text-center md:text-center">
          <CollapsibleText
            text={data.insight}
            className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed"
            mobileLines={3}
            toggleColor="gold"
            expandLabel={EXPAND_LABEL[lang]}
            collapseLabel={COLLAPSE_LABEL[lang]}
          />
        </div>

        {/* Optional tension block — two contradicting truths side by side */}
        {data.tension && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-ufc-gold via-ufc-gold/60 to-transparent" />
              <p className="text-[9px] uppercase tracking-[0.3em] text-ufc-gold/80 font-bold mb-3">
                {truthA}
              </p>
              <p className="text-sm text-white/90 leading-relaxed">{data.tension.truth_a}</p>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-ufc-red via-ufc-red/60 to-transparent" />
              <p className="text-[9px] uppercase tracking-[0.3em] text-ufc-red/90 font-bold mb-3">
                {truthB}
              </p>
              <p className="text-sm text-white/90 leading-relaxed">{data.tension.truth_b}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
