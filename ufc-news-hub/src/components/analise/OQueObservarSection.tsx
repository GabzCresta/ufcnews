import type { OQueObservarSectionData } from '@/types/analise';
import { useTranslations } from 'next-intl';
import { SectionHeader } from './SectionHeader';

export function OQueObservarSection({ data}: { data: OQueObservarSectionData }) {
  const t = useTranslations('analise');
  return (
    <section>
      <SectionHeader number="12" title={t('observar_title')} accent={t('observar_accent')} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
        {data.points.map((item, i) => {
          const isLast = data.points.length % 2 !== 0 && i === data.points.length - 1;
          return (
            <div key={item.num} className={`${isLast ? 'md:col-span-2 md:max-w-[50%]' : ''}`}>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-2xl text-white/10">{String(item.num).padStart(2, '0')}</span>
                <h4 className="text-sm font-bold text-white/75">{item.title}</h4>
              </div>
              <p className="text-xs text-white/35 leading-relaxed pl-10">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
