import { SectionHeader } from './SectionHeader';
import type { ConvictionData, PrevisaoFinalSectionData } from '@/types/analise';

interface PrevisaoFinalSectionProps {
  data: PrevisaoFinalSectionData;
}

function getConfidenceBadgeClasses(label: string): string {
  const normalized = label.toUpperCase();
  if (normalized === 'ALTA') {
    return 'bg-green-500/20 text-green-400 border border-green-500/30';
  }
  if (normalized === 'MEDIA-ALTA' || normalized === 'MÉDIA-ALTA') {
    return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
  }
  if (normalized === 'BAIXA') {
    return 'bg-red-500/20 text-red-400 border border-red-500/30';
  }
  // MEDIA or default
  return 'bg-dark-border text-dark-textMuted border border-dark-border';
}

function getConvictionBarClasses(score: number): string {
  if (score >= 8) return 'bg-green-500';
  if (score >= 6) return 'bg-ufc-gold';
  if (score >= 4) return 'bg-yellow-500';
  return 'bg-red-500';
}

function ConvictionBlock({ conviction }: { conviction: ConvictionData }) {
  const barClasses = getConvictionBarClasses(conviction.conviction_score);
  const hasBreakers = conviction.conviction_breakers.length > 0;

  return (
    <div className="mb-8 space-y-6">
      {/* Thesis Quote — the load-bearing statement */}
      <div className="neu-card p-8 border-l-4 border-ufc-red">
        <p className="text-xs uppercase tracking-widest text-ufc-red font-bold">
          A Tese
        </p>
        <blockquote className="mt-4 font-display text-xl md:text-2xl leading-snug text-dark-text">
          {conviction.thesis}
        </blockquote>
      </div>

      {/* Conviction meter + rationale */}
      <div className="neu-inset p-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs uppercase tracking-widest text-ufc-gold font-bold">
            Conviccao
          </p>
          <p className="font-display text-2xl text-dark-text">
            {conviction.conviction_score}
            <span className="text-dark-textMuted text-base">/10</span>
          </p>
        </div>
        <div className="h-2 rounded-full bg-dark-border overflow-hidden">
          <div
            className={`h-full ${barClasses}`}
            style={{ width: `${conviction.conviction_score * 10}%` }}
          />
        </div>
        <p className="text-sm text-dark-textMuted mt-4 leading-relaxed">
          {conviction.conviction_rationale}
        </p>
      </div>

      {/* Conviction Breakers + Underdog Path side-by-side on desktop */}
      <div className={`grid gap-4 ${hasBreakers ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
        {hasBreakers && (
          <div className="neu-card p-5 border-l-4 border-yellow-500">
            <p className="font-display text-sm uppercase text-yellow-400">
              O Que Derruba Essa Pick
            </p>
            <ul className="mt-3 space-y-2">
              {conviction.conviction_breakers.map((breaker, idx) => (
                <li
                  key={idx}
                  className="text-sm text-dark-textMuted leading-relaxed flex gap-2"
                >
                  <span className="text-yellow-400 font-bold shrink-0">→</span>
                  <span>{breaker}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="neu-card p-5 border-l-4 border-blue-400">
          <div className="flex items-center justify-between">
            <p className="font-display text-sm uppercase text-blue-400">
              Caminho do Azarao
            </p>
            <p className="text-xs text-dark-textMuted">
              {conviction.underdog_path.probability_estimate}% viavel
            </p>
          </div>
          <p className="text-sm text-dark-textMuted mt-3 leading-relaxed">
            {conviction.underdog_path.key_scenario}
          </p>
          {conviction.underdog_path.required_conditions.length > 0 && (
            <div className="mt-4 pt-4 border-t border-dark-border">
              <p className="text-xs uppercase tracking-wider text-dark-textMuted mb-2">
                Condicoes Necessarias
              </p>
              <ul className="space-y-1">
                {conviction.underdog_path.required_conditions.map((cond, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-dark-textMuted flex gap-2"
                  >
                    <span className="text-blue-400 shrink-0">•</span>
                    <span>{cond}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {conviction.underdog_path.historical_precedent && (
            <p className="text-xs text-dark-textMuted italic mt-3 pt-3 border-t border-dark-border">
              Precedente: {conviction.underdog_path.historical_precedent}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function PrevisaoFinalSection({ data }: PrevisaoFinalSectionProps) {
  const winnerColor = data.winner_side === 'fighter1' ? 'text-ufc-red' : 'text-blue-400';
  const confidenceClasses = getConfidenceBadgeClasses(data.confidence_label);

  return (
    <section>
      <SectionHeader number="11" title="Previsao" accent="Final" />

      {/* Conviction block — rendered before the winner announcement so the reader */}
      {/* sees the defended thesis BEFORE the pick. Backward-compatible: older */}
      {/* analyses without conviction data will simply skip this block. */}
      {data.conviction && <ConvictionBlock conviction={data.conviction} />}

      {/* Winner Announcement */}
      <div className="neu-card p-8 text-center">
        <p className="text-xs uppercase tracking-widest text-ufc-gold">
          VENCEDOR PREVISTO
        </p>
        <h3 className={`font-display text-4xl md:text-5xl uppercase mt-2 ${winnerColor}`}>
          {data.winner_name}
        </h3>
        <p className="text-lg text-dark-textMuted mt-2">
          {data.predicted_method}
        </p>
        <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1 mt-4 text-sm font-bold uppercase ${confidenceClasses}`}>
          {data.confidence_label}
        </span>

        {/* Probability Bars */}
        <div className="mt-6">
          <div className="flex h-4 rounded-full overflow-hidden">
            <div
              className="bg-ufc-red"
              style={{ width: `${data.probabilities.fighter1.percent}%` }}
            />
            <div
              className="bg-blue-400"
              style={{ width: `${data.probabilities.fighter2.percent}%` }}
            />
            <div
              className="bg-dark-border"
              style={{ width: `${data.probabilities.draw}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-dark-textMuted">
            <span>
              <span className="text-ufc-red font-bold">{data.probabilities.fighter1.nome}</span>{' '}
              {data.probabilities.fighter1.percent}%
            </span>
            {data.probabilities.draw > 0 && (
              <span>Empate {data.probabilities.draw}%</span>
            )}
            <span>
              {data.probabilities.fighter2.percent}%{' '}
              <span className="text-blue-400 font-bold">{data.probabilities.fighter2.nome}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="neu-inset p-6 mt-6">
        <p className="text-sm text-dark-textMuted leading-relaxed">
          {data.explanation}
        </p>
      </div>

      {/* X-Factor & Upset Alert */}
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="neu-card p-5 border-l-4 border-ufc-gold">
          <p className="font-display text-sm uppercase text-ufc-gold">
            {data.x_factor.title}
          </p>
          <p className="text-sm text-dark-textMuted mt-2 leading-relaxed">
            {data.x_factor.description}
          </p>
        </div>
        <div className="neu-card p-5 border-l-4 border-red-500">
          <p className="font-display text-sm uppercase text-red-400">
            {data.upset_alert.title}
          </p>
          <p className="text-sm text-dark-textMuted mt-2 leading-relaxed">
            {data.upset_alert.description}
          </p>
        </div>
      </div>

      {/* Value Picks (optional) */}
      {data.value_picks && (
        <div className="mt-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-dark-bg rounded-lg p-4">
              <p className="text-xs text-dark-textMuted uppercase tracking-wider">Moneyline</p>
              <p className="font-display text-lg text-dark-text mt-1">
                {data.value_picks.moneyline.pick}
              </p>
              <p className="text-sm text-dark-textMuted mt-2 leading-relaxed">
                {data.value_picks.moneyline.reasoning}
              </p>
            </div>
            <div className="bg-dark-bg rounded-lg p-4">
              <p className="text-xs text-dark-textMuted uppercase tracking-wider">Método</p>
              <p className="font-display text-lg text-dark-text mt-1">
                {data.value_picks.method.pick}
              </p>
              <p className="text-sm text-dark-textMuted mt-2 leading-relaxed">
                {data.value_picks.method.reasoning}
              </p>
            </div>
            <div className="bg-dark-bg rounded-lg p-4">
              <p className="text-xs text-dark-textMuted uppercase tracking-wider">
                Over/Under {data.value_picks.over_under.rounds} Rounds
              </p>
              <p className="font-display text-lg text-dark-text mt-1">
                {data.value_picks.over_under.pick}
              </p>
              <p className="text-sm text-dark-textMuted mt-2 leading-relaxed">
                {data.value_picks.over_under.reasoning}
              </p>
            </div>
          </div>
          <div className="neu-inset p-4 mt-4 border-l-4 border-ufc-gold">
            <p className="text-sm text-dark-textMuted">
              <span className="text-ufc-gold font-bold">Melhor Aposta:</span>{' '}
              {data.value_picks.best_value}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
