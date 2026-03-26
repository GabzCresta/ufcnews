import type { CaminhosVitoriaSectionData, CaminhoVitoria } from '@/types/analise';
import { getLabels, type Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';

function ScenarioRow({
  scenario,
  isRed,
}: {
  scenario: CaminhoVitoria;
  isRed: boolean;
}) {
  const accentColor = isRed ? 'text-ufc-red' : 'text-blue-400';
  const barColor = isRed ? 'bg-ufc-red' : 'bg-blue-400';

  return (
    <div className="py-4 border-b border-white/[0.04] last:border-b-0">
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-sm font-bold text-white/80">{scenario.name}</span>
        <span className={`font-display text-xl ${accentColor}`}>{scenario.probability}%</span>
      </div>
      <p className="text-[10px] uppercase tracking-wider text-white/30 mb-2">{scenario.method}</p>
      <p className="text-xs text-white/35 leading-relaxed">{scenario.description}</p>
    </div>
  );
}

export function CaminhosVitoriaSection({ data, lang = 'pt' }: { data: CaminhosVitoriaSectionData; lang?: Lang }) {
  const t = getLabels(lang);
  const f1 = data.fighter1;
  const f2 = data.fighter2;

  return (
    <section>
      <SectionHeader number="10" title={t.caminhos_title} accent={t.caminhos_accent} />

      {/* Probability header — the most important visual */}
      <div className="flex items-center justify-center gap-6 mb-10">
        <div className="text-center">
          <p className="font-display text-4xl md:text-5xl text-ufc-red">{f1.total_probability}%</p>
          <p className="text-xs uppercase tracking-wider text-ufc-red/60 mt-1">{f1.nome}</p>
        </div>
        <div className="text-center px-4">
          <div className="w-px h-10 bg-white/[0.08] mx-auto" />
        </div>
        <div className="text-center">
          <p className="font-display text-4xl md:text-5xl text-blue-400">{f2.total_probability}%</p>
          <p className="text-xs uppercase tracking-wider text-blue-400/60 mt-1">{f2.nome}</p>
        </div>
      </div>

      {/* Scenarios side by side */}
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Fighter 1 */}
        <div>
          <div className="flex items-center gap-2 mb-2 pb-3 border-b-2 border-ufc-red/30">
            <span className="font-display text-sm uppercase tracking-wider text-ufc-red">{f1.nome}</span>
          </div>
          {f1.scenarios.map((s, i) => (
            <ScenarioRow key={i} scenario={s} isRed={true} />
          ))}
        </div>

        {/* Fighter 2 */}
        <div>
          <div className="flex items-center gap-2 mb-2 pb-3 border-b-2 border-blue-400/30">
            <span className="font-display text-sm uppercase tracking-wider text-blue-400">{f2.nome}</span>
          </div>
          {f2.scenarios.map((s, i) => (
            <ScenarioRow key={i} scenario={s} isRed={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
