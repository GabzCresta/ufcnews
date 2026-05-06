import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

function deepMerge(base: Record<string, unknown>, override: Record<string, unknown>): Record<string, unknown> {
  const result = { ...base };
  for (const key of Object.keys(override)) {
    if (
      typeof result[key] === 'object' && result[key] !== null &&
      typeof override[key] === 'object' && override[key] !== null &&
      !Array.isArray(result[key])
    ) {
      result[key] = deepMerge(result[key] as Record<string, unknown>, override[key] as Record<string, unknown>);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as 'pt' | 'en')) {
    locale = routing.defaultLocale;
  }

  // Always load PT as base, then merge current locale on top.
  // Any missing key in EN/FR/ES automatically falls back to PT.
  const ptMessages = (await import('../../messages/pt.json')).default;

  if (locale === 'pt') {
    return { locale, messages: ptMessages };
  }

  const localeMessages = (await import(`../../messages/${locale}.json`)).default;
  return {
    locale,
    messages: deepMerge(ptMessages, localeMessages),
  };
});
