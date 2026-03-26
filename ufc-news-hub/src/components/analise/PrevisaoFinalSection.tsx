import type { PrevisaoFinalSectionData } from '@/types/analise';
import { getLabels, type Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';

export function PrevisaoFinalSection({ data, sectionNumber, lang = 'pt' }: { data: PrevisaoFinalSectionData; sectionNumber?: string; lang?: Lang }) {
  const isF1 = data.winner_side === 'fighter1';
  const winnerGradient = isF1
    ? 'from-ufc-red via-red-400 to-red-300'
    : 'from-blue-400 via-blue-300 to-cyan-300';

  const f1 = data.probabilities.fighter1;
  const f2 = data.probabilities.fighter2;
  const total = f1.percent + f2.percent + data.probabilities.draw;

  const t = getLabels(lang);
  return (
    <section>
      <SectionHeader number={sectionNumber ?? "11"} title={t.previsao_title} accent={t.previsao_accent} />

      {/* ═══ THE REVELATION ═══ */}
      <div className="text-center mb-12">
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/25 mb-5">Vencedor Previsto</p>

        <h3 className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.8] bg-gradient-to-r ${winnerGradient} bg-clip-text text-transparent`}>
          {data.winner_name}
        </h3>

        <p className="mt-4 text-sm text-white/40">
          {data.predicted_method}
          <span className="mx-2 text-white/10">|</span>
          Confianca {data.confidence_label}
        </p>

        {/* Probability bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="flex h-2 rounded-full overflow-hidden">
            <div className="bg-ufc-red" style={{ width: `${(f1.percent / total) * 100}%` }} />
            <div className="bg-white/[0.08]" style={{ width: `${(data.probabilities.draw / total) * 100}%` }} />
            <div className="bg-blue-400" style={{ width: `${(f2.percent / total) * 100}%` }} />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs font-bold text-ufc-red">{f1.nome} {f1.percent}%</span>
            <span className="text-xs font-bold text-blue-400">{f2.percent}% {f2.nome}</span>
          </div>
        </div>
      </div>

      {/* ═══ WHY ═══ */}
      <div className="max-w-3xl mx-auto mb-10">
        <p className="text-sm text-white/50 leading-[1.8] text-center">{data.explanation}</p>
      </div>

      {/* ═══ X-FACTOR + UPSET ═══ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="rounded-xl bg-amber-400/[0.04] border border-amber-400/10 p-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold mb-2">X-Factor</p>
          <p className="text-sm font-semibold text-white/80 mb-2">{data.x_factor.title}</p>
          <p className="text-xs text-white/40 leading-relaxed">{data.x_factor.description}</p>
        </div>
        <div className="rounded-xl bg-red-400/[0.04] border border-red-400/10 p-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold mb-2">Upset Alert</p>
          <p className="text-sm font-semibold text-white/80 mb-2">{data.upset_alert.title}</p>
          <p className="text-xs text-white/40 leading-relaxed">{data.upset_alert.description}</p>
        </div>
      </div>

      {/* ═══ VALUE PICKS ═══ */}
      {data.value_picks && (
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400/60 mb-4">Apostas de Valor</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
              <p className="text-[9px] uppercase tracking-wider text-white/30 mb-3">Moneyline</p>
              <p className="font-display text-lg text-white mb-2">{data.value_picks.moneyline.pick}</p>
              <p className="text-[11px] text-white/35 leading-relaxed">{data.value_picks.moneyline.reasoning}</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
              <p className="text-[9px] uppercase tracking-wider text-white/30 mb-3">Metodo</p>
              <p className="font-display text-lg text-white mb-2">{data.value_picks.method.pick}</p>
              <p className="text-[11px] text-white/35 leading-relaxed">{data.value_picks.method.reasoning}</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
              <p className="text-[9px] uppercase tracking-wider text-white/30 mb-3">Over/Under</p>
              <p className="font-display text-lg text-white mb-2">{data.value_picks.over_under.pick}</p>
              <p className="text-[11px] text-white/35 leading-relaxed">{data.value_picks.over_under.reasoning}</p>
            </div>
          </div>

          {data.value_picks.best_value && (
            <div className="rounded-xl bg-emerald-400/[0.04] border border-emerald-400/10 p-4">
              <p className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold mb-1">Melhor Aposta de Valor</p>
              <p className="text-xs text-white/50 leading-relaxed">{data.value_picks.best_value}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
