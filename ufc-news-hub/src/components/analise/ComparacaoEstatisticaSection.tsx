import type { ComparacaoEstatisticaSectionData, StatBarData } from '@/types/analise';
import { getLabels, type Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';

function formatValue(value: number, format?: 'decimal' | 'percent' | 'integer'): string {
  if (format === 'percent') return `${value}%`;
  if (format === 'decimal') return value.toFixed(2);
  return String(value);
}

function StatRow({ stat, f1Name, f2Name }: { stat: StatBarData; f1Name: string; f2Name: string }) {
  const aVal = formatValue(stat.valueA, stat.format);
  const bVal = formatValue(stat.valueB, stat.format);
  const aWins = stat.reverseWinner ? stat.valueA < stat.valueB : stat.valueA > stat.valueB;
  const bWins = stat.reverseWinner ? stat.valueB < stat.valueA : stat.valueB > stat.valueA;
  const maxVal = stat.maxVal || Math.max(stat.valueA, stat.valueB) * 1.2;
  const aPct = Math.min((stat.valueA / maxVal) * 100, 100);
  const bPct = Math.min((stat.valueB / maxVal) * 100, 100);

  return (
    <div className="py-5 border-b border-white/[0.04] last:border-b-0">
      {/* Label centered */}
      <p className="text-[10px] uppercase tracking-[0.15em] text-white/30 text-center mb-3">{stat.label}</p>

      {/* Values + bars */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        {/* Fighter 1 side */}
        <div className="flex items-center gap-3">
          <span className={`font-display text-xl md:text-2xl tabular-nums ${aWins ? 'text-white' : 'text-white/30'}`}>
            {aVal}
          </span>
          <div className="flex-1 h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${aWins ? 'bg-ufc-red' : 'bg-ufc-red/25'}`}
              style={{ width: `${aPct}%` }}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-white/[0.06]" />

        {/* Fighter 2 side */}
        <div className="flex items-center gap-3 flex-row-reverse">
          <span className={`font-display text-xl md:text-2xl tabular-nums ${bWins ? 'text-white' : 'text-white/30'}`}>
            {bVal}
          </span>
          <div className="flex-1 h-1.5 rounded-full bg-white/[0.04] overflow-hidden flex justify-end">
            <div
              className={`h-full rounded-full transition-all duration-700 ${bWins ? 'bg-blue-400' : 'bg-blue-400/25'}`}
              style={{ width: `${bPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Insight note - prominent */}
      {stat.note && (
        <p className="mt-2.5 text-xs text-center text-white/40 leading-relaxed">{stat.note}</p>
      )}
    </div>
  );
}

export function ComparacaoEstatisticaSection({
  data,
  fighter1Name,
  fighter2Name,
  sectionNumber,
  lang = 'pt',
}: {
  data: ComparacaoEstatisticaSectionData;
  fighter1Name: string;
  fighter2Name: string;
  sectionNumber?: string;
  lang?: Lang;
}) {
  const t = getLabels(lang);

  // Count advantages
  const f1Wins = data.stats.filter(s => s.reverseWinner ? s.valueA < s.valueB : s.valueA > s.valueB).length;
  const f2Wins = data.stats.filter(s => s.reverseWinner ? s.valueB < s.valueA : s.valueB > s.valueA).length;

  return (
    <section>
      <SectionHeader number={sectionNumber ?? "05"} title={t.comparacao_title} accent={t.comparacao_accent} />

      {/* Fighter names header */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-1">
        <div>
          <span className="font-display text-sm uppercase tracking-wider text-ufc-red">{fighter1Name}</span>
        </div>
        <div className="px-4" />
        <div className="text-right">
          <span className="font-display text-sm uppercase tracking-wider text-blue-400">{fighter2Name}</span>
        </div>
      </div>

      {/* Stats */}
      <div>
        {data.stats.map((stat, i) => (
          <StatRow key={i} stat={stat} f1Name={fighter1Name} f2Name={fighter2Name} />
        ))}
      </div>

      {/* Verdict */}
      <div className="mt-6 text-center">
        <p className="text-xs text-white/30">
          <span className="text-ufc-red font-bold">{fighter1Name}</span>
          <span className="text-white/20"> lidera em {f1Wins} categorias </span>
          <span className="text-white/15">&middot;</span>
          <span className="text-white/20"> {fighter2Name} </span>
          <span className="text-blue-400 font-bold">lidera em {f2Wins}</span>
        </p>
      </div>

      {/* Tale of the Tape — compact */}
      {data.tale_of_tape.length > 0 && (
        <div className="mt-10 rounded-2xl bg-white/[0.02] border border-white/[0.04] overflow-hidden">
          <div className="px-5 py-3 border-b border-white/[0.04]">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 text-center">Tale of the Tape</p>
          </div>
          <div className="divide-y divide-white/[0.03]">
            {data.tale_of_tape.map((row, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto_1fr] items-center px-5 py-3">
                <span className="text-right text-sm text-white/60 pr-4">{row.fighter1}</span>
                <span className="text-[9px] uppercase tracking-wider text-white/20 min-w-[90px] text-center">{row.label}</span>
                <span className="text-left text-sm text-white/60 pl-4">{row.fighter2}</span>
                {row.note && (
                  <p className="col-span-3 text-center text-[10px] text-amber-400/50 mt-1">{row.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
