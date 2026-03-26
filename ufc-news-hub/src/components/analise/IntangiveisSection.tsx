import type { IntangiveisSectionData } from '@/types/analise';
import { getLabels, type Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';

const riskAccent: Record<string, { dot: string; label: string }> = {
  red: { dot: 'bg-red-400', label: 'text-red-400' },
  yellow: { dot: 'bg-amber-400', label: 'text-amber-400' },
  green: { dot: 'bg-emerald-400', label: 'text-emerald-400' },
  neutral: { dot: 'bg-white/20', label: 'text-white/40' },
};

export function IntangiveisSection({ data, lang = 'pt' }: { data: IntangiveisSectionData; lang?: Lang }) {
  const t = getLabels(lang);

  // Split into risks and positives for visual hierarchy
  const risks = data.items.filter(i => i.risk_color === 'red' || i.risk_color === 'yellow');
  const positives = data.items.filter(i => i.risk_color === 'green' || i.risk_color === 'neutral');

  return (
    <section>
      <SectionHeader number="09" title={t.intangiveis_title} accent={t.intangiveis_accent} />

      {/* Risks first — more prominent */}
      {risks.length > 0 && (
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-red-400/60 mb-4">Red Flags</p>
          <div className="space-y-1">
            {risks.map((item, i) => {
              const accent = riskAccent[item.risk_color] || riskAccent.neutral;
              const isAdesanya = item.fighter === 'Adesanya';
              return (
                <div key={i} className="relative overflow-hidden rounded-xl">
                  <div className={`absolute inset-y-0 left-0 w-1 ${accent.dot} rounded-full`} />
                  <div className="py-4 pl-5 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-white/80">{item.title}</span>
                      <span className={`text-[9px] font-bold uppercase tracking-wider ${isAdesanya ? 'text-ufc-red' : 'text-blue-400'}`}>{item.fighter}</span>
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Positives — lighter */}
      {positives.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400/60 mb-4">Fatores Positivos</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
            {positives.map((item, i) => {
              const isAdesanya = item.fighter === 'Adesanya';
              return (
                <div key={i} className="relative overflow-hidden rounded-xl">
                  <div className={`absolute inset-y-0 left-0 w-1 ${isAdesanya ? 'bg-ufc-red/40' : 'bg-blue-400/40'} rounded-full`} />
                  <div className="py-3 pl-5 pr-4">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-bold text-white/70">{item.title}</span>
                      <span className={`text-[9px] uppercase tracking-wider ${isAdesanya ? 'text-ufc-red/60' : 'text-blue-400/60'}`}>{item.fighter}</span>
                    </div>
                    <p className="text-[11px] text-white/30 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
