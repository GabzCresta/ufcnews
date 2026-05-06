'use client';

import type { Analise, FullSingleAnalise, PrelimsAnalise } from '@/types/analise';
import type { Lang } from '@/lib/i18n-labels';
import { isFullSingleAnalise, isPrelimsAnalise } from '@/types/analise';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import { Header } from '@/components/ui/Header';
import { Link } from '@/i18n/routing';
import { AlertCircle } from 'lucide-react';

// ═══════════════════════════════════════════════════════════
// Client renderer for CONTRACT v2 + legacy prelim analyses.
//
// As of April 2026, main card and prelims are unified under a single
// fight-analyst agent producing FullSingleAnalise in CONTRACT v2 shape.
// New analyses route through FullAnalysisView.
//
// PrelimsAnalysisView is kept for backward compatibility with legacy
// analyses from earlier events (already published, not being regenerated).
// Do NOT generate new PrelimsAnalise objects. Use FullSingleAnalise.
// ═══════════════════════════════════════════════════════════

function UnsupportedAnalysisView({ analise }: { analise: Analise }) {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-6 flex items-center gap-2 text-sm text-dark-textMuted">
        <Link href="/" className="hover:text-ufc-red">Home</Link>
        <span>/</span>
        <Link href="/analises" className="hover:text-ufc-red">Analises</Link>
      </div>
      <div className="mx-auto max-w-2xl rounded-xl border border-dark-border bg-dark-card p-8 text-center">
        <AlertCircle className="mx-auto mb-4 h-10 w-10 text-dark-textMuted" />
        <h1 className="font-display text-2xl uppercase text-dark-text">
          {analise.titulo}
        </h1>
        <p className="mt-3 text-sm text-dark-textMuted">
          Esta analise foi gerada em um formato antigo que nao e mais renderizado.
          Uma versao atualizada sera publicada em breve.
        </p>
      </div>
    </main>
  );
}

export function AnalisePageClient({
  analise,
  lang = 'pt',
}: {
  analise: FullSingleAnalise | PrelimsAnalise | Analise;
  lang?: Lang;
}) {
  if (isFullSingleAnalise(analise)) {
    return (
      <div className="min-h-screen bg-dark-bg font-body text-dark-text">
        <FullAnalysisView analise={analise} lang={lang} />
      </div>
    );
  }

  if (isPrelimsAnalise(analise)) {
    return (
      <div className="min-h-screen bg-dark-bg font-body text-dark-text">
        <Header />
        <PrelimsAnalysisView analise={analise} lang={lang} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg font-body text-dark-text">
      <Header />
      <UnsupportedAnalysisView analise={analise} />
    </div>
  );
}
