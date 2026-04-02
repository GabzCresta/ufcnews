'use client';

import { Lock, Mail } from 'lucide-react';
import { OctagonPortalLayout } from '@/components/arena/OctagonPortalLayout';
import { useTranslations } from 'next-intl';

export default function ArenaPreviewLoginPage() {
  const t = useTranslations('arena');

  return (
    <OctagonPortalLayout backHref="/arena">
      <div className="neu-card p-8 animate-glow-pulse-border">
        {/* Header */}
        <div className="flex flex-col items-center mb-8 slide-up-fade">
          <div className="text-ufc-red mb-4">
            <Lock className="h-10 w-10" />
          </div>
          <h2 className="font-display text-3xl uppercase tracking-wide text-dark-text">
            {t('cta_exclusive_title')}
          </h2>
          <p className="mt-2 text-sm text-dark-textMuted text-center">
            {t('cta_exclusive_subtitle')}
          </p>
        </div>

        {/* CTA — email only */}
        <div className="flex flex-col gap-4">
          <a
            href="/#contato"
            className="flex items-center justify-center gap-3 w-full rounded-xl bg-ufc-red py-3.5 font-display uppercase text-white hover:bg-ufc-redLight transition-all hover:shadow-[0_0_20px_rgba(210,10,10,0.4)] slide-up-fade"
            style={{ animationDelay: '50ms' }}
          >
            <Mail className="h-5 w-5" />
            contato@crenas.site
          </a>
        </div>
      </div>
    </OctagonPortalLayout>
  );
}
