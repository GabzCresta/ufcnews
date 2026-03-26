import type { DangerZonesSectionData } from '@/types/analise';
import { useTranslations } from 'next-intl';
import { SectionHeader } from './SectionHeader';

const colorConfig = {
  red: {
    glow: 'from-ufc-red/15',
    line: 'bg-ufc-red',
    label: 'text-ufc-red',
    roundBg: 'bg-ufc-red/10',
    roundText: 'text-ufc-red',
  },
  gold: {
    glow: 'from-amber-400/10',
    line: 'bg-amber-400',
    label: 'text-amber-400',
    roundBg: 'bg-amber-400/10',
    roundText: 'text-amber-400',
  },
  green: {
    glow: 'from-blue-400/10',
    line: 'bg-blue-400',
    label: 'text-blue-400',
    roundBg: 'bg-blue-400/10',
    roundText: 'text-blue-400',
  },
};

export function DangerZonesSection({ data}: { data: DangerZonesSectionData }) {
  const t = useTranslations('analise');
  return (
    <section>
      <SectionHeader number="08" title={t('danger_title')} accent={t('danger_accent')} />

      <div className="space-y-1">
        {data.zones.map((zone, i) => {
          const c = colorConfig[zone.color] || colorConfig.gold;
          return (
            <div key={i} className="relative overflow-hidden rounded-xl">
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${c.glow} to-transparent`} />
              {/* Left accent line */}
              <div className={`absolute inset-y-0 left-0 w-1 ${c.line} rounded-full`} />

              <div className="relative flex items-start gap-5 p-5 pl-6">
                {/* Round indicator */}
                <div className="flex-shrink-0 text-center min-w-[50px]">
                  <span className={`font-display text-2xl ${c.roundText}`}>{zone.rounds}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-sm font-bold text-white/80">{zone.title}</span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider ${c.label}`}>{zone.danger_label}</span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed">{zone.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
