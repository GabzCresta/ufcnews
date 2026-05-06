import type { DistribuicaoDerrotasSectionData } from '@/types/analise';
import { getLabels, type Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';

function MethodRow({
  method,
  f1Count,
  f1Pct,
  f2Count,
  f2Pct,
}: {
  method: string;
  f1Count: number;
  f1Pct: number;
  f2Count: number;
  f2Pct: number;
}) {
  const f1Dominant = f1Pct > f2Pct;
  const f2Dominant = f2Pct > f1Pct;

  return (
    <div className="py-5 border-b border-white/[0.04] last:border-b-0">
      <p className="text-[10px] uppercase tracking-[0.15em] text-white/30 text-center mb-3">{method}</p>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        {/* Fighter 1 */}
        <div className="flex items-center gap-3">
          <div className="text-right min-w-[60px]">
            <span className={`font-display text-2xl tabular-nums ${f1Dominant ? 'text-white' : 'text-white/25'}`}>{f1Pct}%</span>
          </div>
          <div className="flex-1 h-2 rounded-full bg-white/[0.04] overflow-hidden">
            <div className={`h-full rounded-full ${f1Dominant ? 'bg-ufc-red' : 'bg-ufc-red/20'}`} style={{ width: `${f1Pct}%` }} />
          </div>
          <span className={`text-xs tabular-nums ${f1Dominant ? 'text-white/50' : 'text-white/20'}`}>{f1Count}</span>
        </div>

        <div className="w-px h-6 bg-white/[0.06]" />

        {/* Fighter 2 */}
        <div className="flex items-center gap-3 flex-row-reverse">
          <div className="text-left min-w-[60px]">
            <span className={`font-display text-2xl tabular-nums ${f2Dominant ? 'text-white' : 'text-white/25'}`}>{f2Pct}%</span>
          </div>
          <div className="flex-1 h-2 rounded-full bg-white/[0.04] overflow-hidden flex justify-end">
            <div className={`h-full rounded-full ${f2Dominant ? 'bg-blue-400' : 'bg-blue-400/20'}`} style={{ width: `${f2Pct}%` }} />
          </div>
          <span className={`text-xs tabular-nums ${f2Dominant ? 'text-white/50' : 'text-white/20'}`}>{f2Count}</span>
        </div>
      </div>
    </div>
  );
}

export function DistribuicaoDerrotasSection({ data, sectionNumber, lang = 'pt' }: { data: DistribuicaoDerrotasSectionData; sectionNumber?: string; lang?: Lang }) {
  const t = getLabels(lang);
  const f1 = data.fighter1;
  const f2 = data.fighter2;

  return (
    <section>
      <SectionHeader number={sectionNumber ?? "08"} title={t.distribuicao_derrotas_title} accent={t.distribuicao_derrotas_accent} />

      {/* Fighter names + total losses */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-baseline mb-2">
        <div>
          <span className="font-display text-sm uppercase tracking-wider text-ufc-red">{f1.nome}</span>
          <span className="ml-2 text-xs text-white/25">{f1.total_losses}L</span>
        </div>
        <div className="px-4" />
        <div className="text-right">
          <span className="font-display text-sm uppercase tracking-wider text-blue-400">{f2.nome}</span>
          <span className="ml-2 text-xs text-white/25">{f2.total_losses}L</span>
        </div>
      </div>

      {/* Methods face-to-face */}
      <div>
        <MethodRow method="KO / TKO" f1Count={f1.ko_tko.count} f1Pct={f1.ko_tko.percent} f2Count={f2.ko_tko.count} f2Pct={f2.ko_tko.percent} />
        <MethodRow method="Submissao" f1Count={f1.submission.count} f1Pct={f1.submission.percent} f2Count={f2.submission.count} f2Pct={f2.submission.percent} />
        <MethodRow method="Decisao" f1Count={f1.decision.count} f1Pct={f1.decision.percent} f2Count={f2.decision.count} f2Pct={f2.decision.percent} />
      </div>

      {/* Insight */}
      {data.insight && (
        <div className="mt-6 relative rounded-xl overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-blue-400 rounded-full" />
          <div className="pl-5 py-3">
            <p className="text-sm text-white/80 leading-relaxed">{data.insight}</p>
          </div>
        </div>
      )}
    </section>
  );
}
