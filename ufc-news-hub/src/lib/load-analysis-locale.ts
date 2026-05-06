// ═══════════════════════════════════════════════════════════
// Load Analysis Data with Locale Support
//
// Priority:
// 1. data-{locale}.ts (full AI translation by translator agent)
// 2. translateAnalysis() (mechanical dictionary fallback)
// 3. Original PT data (if all else fails)
// ═══════════════════════════════════════════════════════════

import type { FullSingleAnalise, PrelimsAnalise } from '@/types/analise';
import type { Lang } from '@/lib/i18n-labels';
import { translateAnalysis } from '@/lib/translate-analysis';

export async function loadAnalysisData<T extends FullSingleAnalise | PrelimsAnalise>(
  ptData: T,
  locale: string,
  slug: string
): Promise<T> {
  if (!locale || locale === 'pt') return ptData;

  // Try loading full AI translation (only EN is supported)
  if (locale === 'en') {
    try {
      const mod = await import(
        /* webpackInclude: /data-en\.ts$/ */
        `@/app/[locale]/hub/analise/${slug}/data-en`
      );
      if (mod.analise) return mod.analise as T;
    } catch {
      // File doesn't exist yet — translator agent hasn't run
    }
  }

  // Mechanical dictionary translation only handles full analysis shape.
  // Prelim pages fall back to PT-BR data when no translation file exists.
  if ('full_analysis' in ptData) {
    return translateAnalysis(ptData as FullSingleAnalise, locale as Lang) as T;
  }
  return ptData;
}
