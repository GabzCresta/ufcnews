'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

const localeLabels: Record<string, string> = {
  pt: 'PT',
  en: 'EN',
  fr: 'FR',
  es: 'ES',
};

const locales = ['pt', 'en', 'fr', 'es'] as const;

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => onChange(loc)}
          className={`px-2 py-1 text-xs font-bold rounded transition-all ${
            locale === loc
              ? 'bg-ufc-red text-white'
              : 'text-dark-textMuted hover:text-dark-text neu-button'
          }`}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
