import type { PerfilHabilidadesV2SectionData, SkillComparison } from '@/types/analise';
import type { Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';

interface Props {
  data: PerfilHabilidadesV2SectionData;
  sectionNumber?: string;
  lang?: Lang;
  fighter1Name: string;
  fighter2Name: string;
}

// Head-to-head skill comparison.
// No absolute 0-100 scale, no "ruim/medio/bom" labels. Only who has the
// advantage and by how much (gap 0-5). The visualisation is a horizontal
// bar with a center pivot — left fills red for fighter1 advantage,
// right fills blue for fighter2 advantage. Gap=0 shows nothing (even).
function SkillRow({ skill, fighter1Name, fighter2Name }: {
  skill: SkillComparison;
  fighter1Name: string;
  fighter2Name: string;
}) {
  const isEven = skill.advantage === 'even' || skill.gap === 0;
  const isF1 = skill.advantage === 'fighter1';
  const fillPct = Math.min(100, (skill.gap / 5) * 100);

  return (
    <div className="py-4 border-b border-white/[0.04] last:border-b-0">
      {/* Label row */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs uppercase tracking-wider text-white/40 font-bold">{skill.label}</p>
        {!isEven && (
          <p className={`text-[10px] uppercase tracking-wider font-bold ${isF1 ? 'text-ufc-red' : 'text-blue-400'}`}>
            +{skill.gap} {isF1 ? fighter1Name : fighter2Name}
          </p>
        )}
        {isEven && (
          <p className="text-[10px] uppercase tracking-wider font-bold text-white/30">Equilibrado</p>
        )}
      </div>

      {/* Center-pivot bar */}
      <div className="relative h-1.5 rounded-full bg-white/[0.04] mb-2 overflow-hidden">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20" />
        {isF1 && (
          <div
            className="absolute top-0 bottom-0 bg-gradient-to-l from-ufc-red to-ufc-red/40 rounded-l-full"
            style={{ right: '50%', width: `${fillPct / 2}%` }}
          />
        )}
        {!isF1 && !isEven && (
          <div
            className="absolute top-0 bottom-0 bg-gradient-to-r from-blue-400 to-blue-400/40 rounded-r-full"
            style={{ left: '50%', width: `${fillPct / 2}%` }}
          />
        )}
      </div>

      {/* Note */}
      <p className="text-xs text-white/75 leading-relaxed">{skill.note}</p>
    </div>
  );
}

export function PerfilHabilidadesV2Section({ data, sectionNumber, fighter1Name, fighter2Name }: Props) {
  return (
    <section>
      <SectionHeader number={sectionNumber ?? '06'} title="Perfil de" accent="Habilidades" />

      {/* Fighter names header */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-ufc-red" />
          <p className="text-xs font-bold uppercase tracking-wider text-ufc-red">{fighter1Name}</p>
        </div>
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">vs</p>
        <div className="flex items-center gap-2">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-400">{fighter2Name}</p>
          <div className="w-2 h-2 rounded-full bg-blue-400" />
        </div>
      </div>

      {/* Skills list */}
      <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] px-6 py-2">
        {data.skills.map((skill, i) => (
          <SkillRow key={i} skill={skill} fighter1Name={fighter1Name} fighter2Name={fighter2Name} />
        ))}
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mt-6 max-w-3xl mx-auto">
          <p className="text-sm text-white/85 leading-relaxed text-center italic">{data.summary}</p>
        </div>
      )}
    </section>
  );
}
