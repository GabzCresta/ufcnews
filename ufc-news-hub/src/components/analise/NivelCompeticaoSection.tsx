import type { NivelCompeticaoSectionData } from '@/types/analise';
import { getLabels, type Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';

function ComparisonRow({
  label,
  value1,
  value2,
  highlight,
}: {
  label: string;
  value1: string;
  value2: string;
  highlight?: 'fighter1' | 'fighter2' | 'even';
}) {
  const v1Class = highlight === 'fighter1' ? 'text-white font-bold' : 'text-white/50';
  const v2Class = highlight === 'fighter2' ? 'text-white font-bold' : 'text-white/50';

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center py-4 border-b border-white/[0.04] last:border-b-0">
      <div className="text-right pr-6">
        <span className={`font-display text-lg md:text-xl ${v1Class}`}>{value1}</span>
      </div>
      <div className="text-center px-4">
        <span className="text-[10px] uppercase tracking-wider text-white/30">{label}</span>
      </div>
      <div className="text-left pl-6">
        <span className={`font-display text-lg md:text-xl ${v2Class}`}>{value2}</span>
      </div>
    </div>
  );
}

export function NivelCompeticaoSection({ data, sectionNumber, lang = 'pt' }: { data: NivelCompeticaoSectionData; sectionNumber?: string; lang?: Lang }) {
  const t = getLabels(lang);
  const f1 = data.fighter1;
  const f2 = data.fighter2;

  // Determine who has better media
  const mediaHighlight = f1.media_oponentes > f2.media_oponentes ? 'fighter1'
    : f2.media_oponentes > f1.media_oponentes ? 'fighter2' : 'even';

  return (
    <section>
      <SectionHeader number={sectionNumber ?? '03'} title={t.nivel_title} accent={t.nivel_accent} />

      {/* Fighter names header */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-2">
        <div className="text-right pr-6">
          <span className="font-display text-sm uppercase tracking-wider text-ufc-red">{f1.nome}</span>
        </div>
        <div className="px-4">
          <span className="text-[10px] text-white/20">vs</span>
        </div>
        <div className="text-left pl-6">
          <span className="font-display text-sm uppercase tracking-wider text-blue-400">{f2.nome}</span>
        </div>
      </div>

      {/* Comparison rows */}
      <div>
        <ComparisonRow
          label="Nivel de oposicao"
          value1={f1.media_oponentes_label || String(f1.media_oponentes)}
          value2={f2.media_oponentes_label || String(f2.media_oponentes)}
          highlight={mediaHighlight}
        />
        <ComparisonRow
          label="Aproveitamento"
          value1={f1.aproveitamento}
          value2={f2.aproveitamento}
        />
        <ComparisonRow
          label="Contra top 5"
          value1={f1.contra_top5}
          value2={f2.contra_top5}
          highlight={f1.contra_top5.startsWith('0W-0') && f2.contra_top5.startsWith('0W-0') ? 'even' :
            f1.contra_top5 > f2.contra_top5 ? 'fighter1' : 'fighter2'}
        />
      </div>

      {/* Note */}
      {data.oponentes_em_comum_note && (
        <p className="mt-6 text-sm text-white/75 leading-relaxed text-center max-w-2xl mx-auto">
          {data.oponentes_em_comum_note}
        </p>
      )}
    </section>
  );
}
