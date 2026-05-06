'use client';

import type { Analise, CardAnalise, FullSingleAnalise, PrelimsAnalise, FightAnalysisItem } from '@/types/analise';
import type { Lang } from '@/lib/i18n-labels';
import { isFullSingleAnalise, isPrelimsAnalise, isCardAnalise } from '@/types/analise';
import { FullAnalysisView } from '@/components/analise/FullAnalysisView';
import { PrelimsAnalysisView } from '@/components/analise/PrelimsAnalysisView';
import { Header } from '@/components/ui/Header';
import { Link } from '@/i18n/routing';
import { AlertCircle } from 'lucide-react';
import { CardOverviewHero } from '@/components/analise/CardOverviewHero';
import { BestBetsSection } from '@/components/analise/BestBetsSection';
import { FightBreakdownCard } from '@/components/analise/FightBreakdownCard';
import { TacticalBreakdownDynamic } from '@/components/analise/TacticalBreakdownDynamic';
import { FightPredictionDynamic } from '@/components/analise/FightPredictionDynamic';
import { FighterCard } from '@/components/analise/FighterCard';

// ═══════════════════════════════════════════════════════════
// Client-side renderer for all analysis types
// ═══════════════════════════════════════════════════════════

function safeParse<T>(value: T | string): T {
  if (typeof value === 'string') {
    try { return JSON.parse(value) as T; } catch { return value as unknown as T; }
  }
  return value;
}

function LegacySingleFightView({ analise }: { analise: Analise }) {
  const f1 = analise.fighter1_info;
  const f2 = analise.fighter2_info;
  const f1Last = f1.nome.split(' ').pop() || 'Fighter 1';
  const f2Last = f2.nome.split(' ').pop() || 'Fighter 2';
  const f1Initials = f1.nome.split(' ').map(n => n[0]).join('').slice(0, 2);
  const f2Initials = f2.nome.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="mb-6 flex items-center gap-2 text-sm text-dark-textMuted">
        <Link href="/" className="hover:text-ufc-red">Home</Link>
        <span>/</span>
        <Link href="/analises" className="hover:text-ufc-red">Analises</Link>
        <span>/</span>
        <span className="text-dark-text">{analise.evento_nome}</span>
      </div>

      <div className="relative mb-8 overflow-hidden rounded-xl border border-dark-border bg-gradient-to-r from-dark-card via-dark-bg to-dark-card p-8 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(210,10,10,0.15),transparent_70%)]" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl uppercase text-dark-text md:text-6xl lg:text-7xl">
            <span className="text-ufc-red">{f1Last}</span> vs{' '}
            <span className="text-blue-400">{f2Last}</span>
          </h1>
          <p className="mt-4 text-lg text-dark-textMuted">
            {analise.categoria_peso} {analise.is_titulo ? '- Title Fight' : ''} - {analise.num_rounds} Rounds
          </p>
        </div>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <FighterCard fighter={f1} accentColor="ufc-red" initials={f1Initials} />
        <FighterCard fighter={f2} accentColor="blue-400" initials={f2Initials} />
      </div>

      {analise.artigo_conteudo && (
        <article className="mx-auto mb-12 max-w-4xl">
          <div className="prose prose-invert max-w-none space-y-4 text-lg leading-relaxed text-dark-text"
            dangerouslySetInnerHTML={{ __html: analise.artigo_conteudo }} />
        </article>
      )}

      <section className="mb-12">
        <TacticalBreakdownDynamic data={analise.tactical_breakdown} fighter1={f1} fighter2={f2} />
      </section>

      <section className="mb-12">
        <FightPredictionDynamic data={analise.fight_prediction} fighter1={f1} fighter2={f2} />
      </section>
    </main>
  );
}

function FullCardView({ analise }: { analise: CardAnalise }) {
  const fightsAnalysis: FightAnalysisItem[] = safeParse<FightAnalysisItem[]>(analise.fights_analysis);
  const cardOverview = safeParse<CardAnalise['card_overview']>(analise.card_overview);
  const sortedFights = [...fightsAnalysis].sort((a, b) => b.ordem - a.ordem);
  const fightSummaries = sortedFights.map((f) => ({
    fighter1Name: f.fighter1_info.nome,
    fighter2Name: f.fighter2_info.nome,
    tipo: f.fight_type,
  }));

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="mb-6 flex items-center gap-2 text-sm text-dark-textMuted">
        <Link href="/" className="hover:text-ufc-red">Home</Link>
        <span>/</span>
        <Link href="/analises" className="hover:text-ufc-red">Analises</Link>
        <span>/</span>
        <span className="text-dark-text">{analise.evento_nome}</span>
      </div>

      <div className="mb-8">
        <CardOverviewHero
          eventoNome={analise.evento_nome || 'UFC Event'}
          eventoData={analise.evento_data}
          eventoLocal={analise.evento_local}
          totalFights={cardOverview.total_fights ?? sortedFights.length}
          fights={fightSummaries}
        />
      </div>

      {cardOverview.card_summary && (
        <article className="mx-auto mb-10 max-w-4xl">
          <div className="prose prose-invert max-w-none space-y-4 text-lg leading-relaxed text-dark-text"
            dangerouslySetInnerHTML={{ __html: cardOverview.card_summary }} />
        </article>
      )}

      {cardOverview.best_bets?.length > 0 && cardOverview.parlay && (
        <div className="mb-10">
          <BestBetsSection bestBets={cardOverview.best_bets} parlay={cardOverview.parlay} />
        </div>
      )}

      <div className="my-10 border-t border-dark-border" />

      <div className="space-y-8">
        {sortedFights.map((fight) => (
          <div key={fight.fight_id || fight.fight_label}>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-ufc-red">
                {fight.fight_label}
              </span>
              <span className="text-xs text-dark-textMuted">
                {fight.categoria_peso}
                {fight.is_titulo ? ' - Disputa de Titulo' : ''}
                {' - '}{fight.num_rounds} Rounds
              </span>
            </div>
            <FightBreakdownCard fight={fight} isMainEvent={fight.fight_type === 'main_event'} />
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-start gap-3 rounded-lg border border-dark-border bg-dark-bg p-5">
        <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-dark-textMuted" />
        <p className="text-xs leading-relaxed text-dark-textMuted">
          As analises e recomendacoes de apostas sao baseadas em dados estatisticos e analise tecnica.
          Aposte com responsabilidade.
        </p>
      </div>
    </main>
  );
}

export function AnalisePageClient({
  analise,
  lang = 'pt',
}: {
  analise: FullSingleAnalise | PrelimsAnalise | CardAnalise | Analise;
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
      {isCardAnalise(analise) ? (
        <FullCardView analise={analise as CardAnalise} />
      ) : (
        <LegacySingleFightView analise={analise} />
      )}
    </div>
  );
}
