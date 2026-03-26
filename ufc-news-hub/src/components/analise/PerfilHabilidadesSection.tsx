import type { PerfilHabilidadesSectionData, SkillBarData } from '@/types/analise';
import { getLabels, type Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';

function SkillRow({ skill, f1: f1Name, f2: f2Name }: { skill: SkillBarData; f1: string; f2: string }) {
  const aWins = skill.advantage === 'fighter1';
  const bWins = skill.advantage === 'fighter2';

  return (
    <div className="py-5 border-b border-white/[0.04] last:border-b-0">
      {/* Skill name + who has the edge */}
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white/60">{skill.label}</h4>
        {skill.advantage && skill.advantage !== 'even' && (
          <span className={`text-[10px] font-bold uppercase tracking-wider ${aWins ? 'text-ufc-red' : 'text-blue-400'}`}>
            {aWins ? f1Name : f2Name}
          </span>
        )}
        {skill.advantage === 'even' && (
          <span className="text-[10px] text-white/25 uppercase tracking-wider">Equilibrado</span>
        )}
      </div>

      {/* Visual bars */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-2">
        <div className="flex items-center gap-2.5">
          <span className={`font-display text-lg tabular-nums ${aWins ? 'text-white' : 'text-white/30'}`}>{skill.valueA}</span>
          <div className="flex-1 h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
            <div
              className={`h-full rounded-full ${aWins ? 'bg-ufc-red' : 'bg-ufc-red/20'}`}
              style={{ width: `${skill.valueA}%` }}
            />
          </div>
        </div>
        <div className="w-px h-5 bg-white/[0.06]" />
        <div className="flex items-center gap-2.5 flex-row-reverse">
          <span className={`font-display text-lg tabular-nums ${bWins ? 'text-white' : 'text-white/30'}`}>{skill.valueB}</span>
          <div className="flex-1 h-1.5 rounded-full bg-white/[0.04] overflow-hidden flex justify-end">
            <div
              className={`h-full rounded-full ${bWins ? 'bg-blue-400' : 'bg-blue-400/20'}`}
              style={{ width: `${skill.valueB}%` }}
            />
          </div>
        </div>
      </div>

      {/* Insight note */}
      {skill.advantage_note && (
        <p className="text-[11px] text-white/35 leading-relaxed">{skill.advantage_note}</p>
      )}
    </div>
  );
}

export function PerfilHabilidadesSection({
  data,
  fighter1Name,
  fighter2Name,
  sectionNumber,
  lang = 'pt',
}: {
  data: PerfilHabilidadesSectionData;
  fighter1Name: string;
  fighter2Name: string;
  sectionNumber?: string;
  lang?: Lang;
}) {
  const t = getLabels(lang);

  return (
    <section>
      <SectionHeader number={sectionNumber ?? "06"} title={t.habilidades_title} accent={t.habilidades_accent} />

      {/* Fighter names */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-2">
        <span className="font-display text-sm uppercase tracking-wider text-ufc-red">{fighter1Name}</span>
        <span className="px-4 text-[10px] text-white/20">vs</span>
        <span className="font-display text-sm uppercase tracking-wider text-blue-400 text-right">{fighter2Name}</span>
      </div>

      {/* Skills */}
      <div>
        {data.skills.map((skill, i) => (
          <SkillRow key={i} skill={skill} f1={fighter1Name} f2={fighter2Name} />
        ))}
      </div>

      {/* Overall insight */}
      {data.insight && (
        <div className="mt-6 relative rounded-xl overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-ufc-red to-blue-400 rounded-full" />
          <div className="pl-5 py-3">
            <p className="text-xs text-white/45 leading-relaxed">{data.insight}</p>
          </div>
        </div>
      )}
    </section>
  );
}
