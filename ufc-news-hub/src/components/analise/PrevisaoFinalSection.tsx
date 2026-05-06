import type { ReactNode } from 'react';
import type { ConvictionData, PrevisaoFinalSectionData } from '@/types/analise';
import { getLabels, type Lang } from '@/lib/i18n-labels';
import { SectionHeader } from './SectionHeader';
import { CollapsibleThesis } from './CollapsibleThesis';
import { CollapsibleText } from './CollapsibleText';

const READ_MORE_LABELS: Record<Lang, { expand: string; collapse: string }> = {
  pt: { expand: 'Ler mais', collapse: 'Recolher' },
  en: { expand: 'Read more', collapse: 'Collapse' },
};

/**
 * Parse the thesis string into 3-5 readable paragraphs.
 *
 * The thesis follows a fixed mold defined by the fight-analyst agent:
 *   "A tese e: [WINNER] vence porque [r1], [r2], e [r3]. O caminho e [...]
 *    Isso desmorona se [...]."
 *
 * We split on those natural markers (Primeiro, Segundo, Terceiro, O caminho,
 * Isso desmorona) and on the EN equivalents so the same component handles
 * both locales without needing translator changes.
 */
function parseThesisParagraphs(text: string): string[] {
  const markers = [
    'Primeiro,',
    'Segundo,',
    'Terceiro,',
    'O caminho',
    'Isso desmorona',
    'First,',
    'Second,',
    'Third,',
    'The path',
    'This collapses',
  ];
  let result = text;
  for (const marker of markers) {
    // Insert a break before the marker if it appears mid-sentence (preceded by ". ")
    // The negative lookbehind for ^ keeps the first paragraph intact.
    const re = new RegExp(`(\\.\\s+)(${marker.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')})`, 'g');
    result = result.replace(re, '$1\n\n$2');
  }
  return result
    .split('\n\n')
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Highlight numeric anchors and units inline.
 *
 * Patterns: percentages, round designators (R1, R2-R3), counts of rounds/minutes,
 * and the natural-language "um/dois/tres round(s)" forms in PT/EN/ES/FR.
 */
function highlightNumbers(text: string): ReactNode[] {
  const regex =
    /(\d+(?:[.,]\d+)?\s*(?:por\s*cento|percent|por\s*ciento|pour\s*cent|%)|R[1-5](?:[-\u2013]R[1-5])?|\d+\s*(?:round|rounds|minuto|minutos|minute|minutes))/gi;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  // We mutate regex.lastIndex via .exec which is intentional for the matcher state.
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <span key={key++} className="font-display text-amber-300 tabular-nums tracking-wide">
        {match[0]}
      </span>,
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

// Section labels for the conviction block. Kept inline (not in i18n-labels.ts)
// because this is a new subsystem and the ConvictionData text itself is already
// translated per-locale by the translator agent — only the static headings need per-lang copy here.
const CONVICTION_LABELS: Record<Lang, {
  thesis: string;
  conviction: string;
  of: string;
  breakers: string;
  underdog_path: string;
  underdog_viable_suffix: string;
  required_conditions: string;
  historical_precedent_prefix: string;
  expand: string;
  collapse: string;
}> = {
  pt: {
    thesis: 'A Tese',
    conviction: 'Conviccao',
    of: '/10',
    breakers: 'O Que Derruba Essa Pick',
    underdog_path: 'Caminho do Azarao',
    underdog_viable_suffix: '% viavel',
    required_conditions: 'Condicoes Necessarias',
    historical_precedent_prefix: 'Precedente',
    expand: 'Ver tese completa',
    collapse: 'Recolher',
  },
  en: {
    thesis: 'The Thesis',
    conviction: 'Conviction',
    of: '/10',
    breakers: 'What Breaks This Pick',
    underdog_path: 'Underdog Path',
    underdog_viable_suffix: '% viable',
    required_conditions: 'Required Conditions',
    historical_precedent_prefix: 'Precedent',
    expand: 'Read full thesis',
    collapse: 'Collapse',
  },
};

/**
 * Editorial conviction block — no rounded cards, no outlined rectangles.
 *
 * Layout principles:
 *  - Typography over containers: vertical rhythm + horizontal rules instead of boxes
 *  - Big numeric anchors: the conviction score and underdog probability are massive,
 *    breakers are numbered 01..04 in display font as visual anchors
 *  - Hanging accent lines: thesis hangs off a vertical red rule, conditions hang off
 *    a vertical blue rule — replaces card outlines without losing structure
 *  - Editorial spacing: my-16 between blocks, generous padding, no compression
 */
function ConvictionBlock({ conviction, lang }: { conviction: ConvictionData; lang: Lang }) {
  const labels = CONVICTION_LABELS[lang] ?? CONVICTION_LABELS.pt;
  const hasBreakers = conviction.conviction_breakers.length > 0;

  return (
    <div className="mb-10 md:mb-16 max-w-3xl mx-auto">
      {/* ─── THESIS ─── */}
      <div className="mb-10 md:mb-16">
        <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-8">
          <div className="h-px w-8 md:w-10 bg-ufc-red" />
          <p className="text-[11px] uppercase tracking-[0.35em] text-ufc-red font-bold">
            {labels.thesis}
          </p>
        </div>
        <blockquote className="pl-4 md:pl-8 border-l-2 border-ufc-red">
          <CollapsibleThesis
            expandLabel={labels.expand}
            collapseLabel={labels.collapse}
            paragraphs={parseThesisParagraphs(conviction.thesis).map((paragraph, i) => (
              <p key={i} className="text-sm sm:text-base md:text-xl text-white/90 leading-relaxed md:leading-[1.7] font-light">
                {highlightNumbers(paragraph)}
              </p>
            ))}
          />
        </blockquote>
      </div>

      {/* ─── DIVIDER ─── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10 md:my-16" />

      {/* ─── CONVICTION — iconic centered numeric ─── */}
      <div className="text-center mb-10 md:mb-16">
        <p className="text-[11px] uppercase tracking-[0.35em] text-amber-400 font-bold mb-4 md:mb-6">
          {labels.conviction}
        </p>
        <div className="font-display leading-none flex items-start justify-center">
          <span className="text-[72px] md:text-[150px] bg-gradient-to-b from-white via-amber-100 to-amber-400 bg-clip-text text-transparent">
            {conviction.conviction_score}
          </span>
          <span className="text-lg md:text-3xl text-white/35 mt-3 md:mt-8 ml-1">
            {labels.of}
          </span>
        </div>
        <p className="mt-4 md:mt-6 max-w-xl mx-auto text-sm sm:text-base md:text-lg text-white/85 leading-relaxed md:leading-[1.7] italic">
          {conviction.conviction_rationale}
        </p>
      </div>

      {/* ─── DIVIDER ─── */}
      {hasBreakers && (
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10 md:my-16" />
      )}

      {/* ─── BREAKERS — numbered editorial list ─── */}
      {hasBreakers && (
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
            <div className="h-px w-8 md:w-10 bg-yellow-400" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-yellow-400 font-bold">
              {labels.breakers}
            </p>
          </div>
          <ol className="space-y-4 md:space-y-8">
            {conviction.conviction_breakers.map((breaker, idx) => (
              <li key={idx} className="flex gap-3 md:gap-8 items-start">
                <span className="font-display text-2xl md:text-5xl text-yellow-400/55 leading-none w-8 md:w-16 flex-shrink-0 tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-sm md:text-lg text-white/85 leading-relaxed md:leading-[1.6] flex-1 pt-1">
                  {breaker}
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* ─── DIVIDER ─── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10 md:my-16" />

      {/* ─── UNDERDOG PATH ─── */}
      <div>
        <div className="flex items-end justify-between gap-3 md:gap-4 mb-5 md:mb-8">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="h-px w-8 md:w-10 bg-blue-400" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-blue-400 font-bold">
              {labels.underdog_path}
            </p>
          </div>
          <div className="flex items-baseline gap-1 font-display leading-none">
            <span className="text-3xl sm:text-5xl md:text-6xl bg-gradient-to-b from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              {conviction.underdog_path.probability_estimate}
            </span>
            <span className="text-base sm:text-xl md:text-2xl text-blue-400/60">%</span>
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed md:leading-[1.7] mb-6 md:mb-10 pl-0 md:pl-12">
          {conviction.underdog_path.key_scenario}
        </p>

        {conviction.underdog_path.required_conditions.length > 0 && (
          <div className="md:pl-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/45 mb-3 md:mb-5">
              {labels.required_conditions}
            </p>
            <ul className="space-y-3 md:space-y-4 border-l border-blue-400/30 pl-4 md:pl-8">
              {conviction.underdog_path.required_conditions.map((cond, idx) => (
                <li key={idx} className="text-sm md:text-base text-white/80 leading-relaxed md:leading-[1.6]">
                  {cond}
                </li>
              ))}
            </ul>
          </div>
        )}

        {conviction.underdog_path.historical_precedent && (
          <p className="mt-6 md:mt-10 md:pl-12 text-sm md:text-base text-white/60 italic leading-relaxed">
            <span className="text-white/40">—&nbsp;</span>
            {labels.historical_precedent_prefix}: {conviction.underdog_path.historical_precedent}
          </p>
        )}
      </div>
    </div>
  );
}

export function PrevisaoFinalSection({ data, sectionNumber, lang = 'pt' }: { data: PrevisaoFinalSectionData; sectionNumber?: string; lang?: Lang }) {
  const isF1 = data.winner_side === 'fighter1';
  const winnerGradient = isF1
    ? 'from-ufc-red via-red-400 to-red-300'
    : 'from-blue-400 via-blue-300 to-cyan-300';

  // f1/f2/total only needed for the legacy fallback path; the new VerdictBlock
  // computes them internally from data.probabilities.
  const f1 = data.probabilities.fighter1;
  const f2 = data.probabilities.fighter2;
  const total = f1.percent + f2.percent + data.probabilities.draw;

  const t = getLabels(lang);
  return (
    <section>
      <SectionHeader number={sectionNumber ?? "11"} title={t.previsao_title} accent={t.previsao_accent} />

      {/* ═══ CONVICTION BLOCK ═══ */}
      {/* Rendered BEFORE the winner reveal so the reader sees the defended thesis first. */}
      {/* Backward-compatible: older analyses without `conviction` simply skip this. */}
      {data.conviction && <ConvictionBlock conviction={data.conviction} lang={lang} />}

      {/* New-shape verdict (editorial) — when value_picks_v2 is set, render the
          consolidated verdict below the conviction block. Otherwise fall back to
          the legacy reveal + x-factor/upset/value_picks layout. */}
      {data.value_picks_v2 ? (
        <VerdictBlock data={data} winnerGradient={winnerGradient} lang={lang} />
      ) : (
        <LegacyVerdict data={data} winnerGradient={winnerGradient} f1={f1} f2={f2} total={total} lang={lang} />
      )}
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// NEW EDITORIAL VERDICT (2026-04-07)
// Replaces: massive ESPN-graphics winner reveal, X-Factor card,
// Upset Alert card, fixed 3-slot value picks grid, and the entire
// RadarApostadorSection. Everything flows from the conviction block.
// ══════════════════════════════════════════════════════════════

function VerdictBlock({
  data,
  winnerGradient,
  lang,
}: {
  data: PrevisaoFinalSectionData;
  winnerGradient: string;
  lang: Lang;
}) {
  const t = getLabels(lang);
  const f1 = data.probabilities.fighter1;
  const f2 = data.probabilities.fighter2;
  const total = f1.percent + f2.percent + data.probabilities.draw;
  const v2 = data.value_picks_v2;
  if (!v2) return null;

  return (
    <div className="max-w-3xl mx-auto">
      {/* ─── DIVIDER ─── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

      {/* ─── VEREDITO header ─── */}
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px w-10 bg-white/30" />
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/60 font-bold">{t.veredito}</p>
      </div>

      {/* Winner + Method as inline editorial labels */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-10 gap-y-6 mb-12">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">{t.vencedor}</p>
          <p className={`font-display text-4xl md:text-5xl leading-none bg-gradient-to-r ${winnerGradient} bg-clip-text text-transparent`}>
            {data.winner_name}
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">{t.metodo}</p>
          <p className="font-display text-2xl md:text-3xl text-white/95 leading-tight">
            {data.predicted_method}
          </p>
        </div>
      </div>

      {/* Probability bar — wide, integrated, no caption above */}
      <div className="mb-16">
        <div className="flex h-1 rounded-full overflow-hidden">
          <div className="bg-ufc-red" style={{ width: `${(f1.percent / total) * 100}%` }} />
          <div className="bg-white/[0.08]" style={{ width: `${(data.probabilities.draw / total) * 100}%` }} />
          <div className="bg-blue-400" style={{ width: `${(f2.percent / total) * 100}%` }} />
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-ufc-red font-bold">{f1.nome}</span>
            <span className="ml-2 font-display text-lg text-white/90 tabular-nums">{f1.percent}%</span>
          </div>
          {data.probabilities.draw > 0 && (
            <div className="text-[10px] uppercase tracking-wider text-white/40">
              {t.empate} {data.probabilities.draw}%
            </div>
          )}
          <div>
            <span className="font-display text-lg text-white/90 tabular-nums">{f2.percent}%</span>
            <span className="ml-2 text-[10px] uppercase tracking-wider text-blue-400 font-bold">{f2.nome}</span>
          </div>
        </div>
      </div>

      {/* ─── Odds (if present in new shape) ─── */}
      {data.odds && (
        <>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-amber-400/60" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-amber-400/80 font-bold">Odds</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-16 mb-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40 mb-1">{data.odds.fighter1_name}</p>
              <p className="font-display text-3xl md:text-4xl text-white/95 tabular-nums">{data.odds.fighter1_odds}</p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-wider text-white/40 mb-1">{data.odds.fighter2_name}</p>
              <p className="font-display text-3xl md:text-4xl text-white/95 tabular-nums">{data.odds.fighter2_odds}</p>
            </div>
          </div>
          <p className="text-[10px] text-white/35 italic">{data.odds.source}</p>
        </>
      )}

      {/* ─── APOSTAS — flexible array ─── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px w-10 bg-emerald-400/70" />
        <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-400 font-bold">{t.apostas}</p>
      </div>
      <ol className="space-y-9">
        {v2.picks.map((pick, idx) => (
          <li key={idx} className="flex gap-3 sm:gap-6 md:gap-8 items-start">
            <span className="font-display text-2xl sm:text-4xl md:text-5xl text-emerald-400/55 leading-none w-8 sm:w-12 md:w-16 flex-shrink-0 tabular-nums">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 pt-1">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/45 mb-1.5 font-bold">
                {pick.type}
              </p>
              <div className="flex items-baseline flex-wrap gap-x-3 mb-2">
                <p className="font-display text-2xl md:text-3xl text-white/95 leading-tight">{pick.pick}</p>
                {pick.odds && (
                  <span className="font-display text-xl md:text-2xl text-emerald-400/90 tabular-nums">
                    {pick.odds}
                  </span>
                )}
              </div>
              <p className="text-base text-white/80 leading-[1.6]">{pick.reasoning}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Best bet — single highlight row */}
      {v2.best_bet && (
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-display text-2xl text-amber-400">★</span>
            <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">{t.melhor_aposta}</p>
          </div>
          <p className="font-display text-2xl md:text-3xl text-white/95 mb-2 leading-tight">{v2.best_bet.pick}</p>
          <p className="text-base text-white/80 leading-[1.6]">{v2.best_bet.reasoning}</p>
        </div>
      )}

      {/* ─── KEY STATS — inline anchors (replaces flat edges list) ─── */}
      {data.key_stats && data.key_stats.length > 0 && (
        <>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-white/30" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/60 font-bold">{t.stats_que_importam}</p>
          </div>
          <div className={`grid gap-6 sm:gap-12 md:gap-16 ${data.key_stats.length === 1 ? "md:grid-cols-1" : data.key_stats.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            {data.key_stats.map((stat, idx) => (
              <div key={idx}>
                <p className="font-display text-5xl md:text-6xl bg-gradient-to-b from-white via-white/85 to-white/40 bg-clip-text text-transparent leading-none mb-3 tabular-nums">
                  {stat.value}
                </p>
                <p className="text-base text-white/80 leading-[1.5]">{stat.label}</p>
                {stat.sublabel && (
                  <p className="text-xs text-white/45 italic mt-1.5">{stat.sublabel}</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ─── ARMADILHA — closing warning ─── */}
      {data.armadilha && (
        <>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10 md:my-16" />
          <div className="pl-4 md:pl-6 border-l-2 border-red-400/60">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-display text-xl text-red-400">⚠</span>
              <p className="text-[11px] uppercase tracking-[0.3em] text-red-400 font-bold">{t.armadilha}</p>
            </div>
            <p className="font-display text-lg sm:text-xl md:text-2xl text-white/95 leading-tight mb-3">
              {data.armadilha.titulo}
            </p>
            <CollapsibleText
              text={data.armadilha.descricao}
              className="text-sm md:text-base text-white/80 leading-relaxed md:leading-[1.6]"
              mobileLines={3}
              toggleColor="red"
              expandLabel={READ_MORE_LABELS[lang].expand}
              collapseLabel={READ_MORE_LABELS[lang].collapse}
            />
          </div>
        </>
      )}
    </div>
  );
}

// Legacy verdict (preserved for old pages without value_picks_v2)
function LegacyVerdict({
  data,
  winnerGradient,
  f1,
  f2,
  total,
  lang,
}: {
  data: PrevisaoFinalSectionData;
  winnerGradient: string;
  f1: { nome: string; percent: number };
  f2: { nome: string; percent: number };
  total: number;
  lang: Lang;
}) {
  return (
    <>
      {/* ═══ THE REVELATION ═══ */}
      <div className="text-center mb-12">
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/25 mb-5">Vencedor Previsto</p>

        <h3 className={`font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.8] bg-gradient-to-r ${winnerGradient} bg-clip-text text-transparent break-words`}>
          {data.winner_name}
        </h3>

        <p className="mt-4 text-sm text-white/65">
          {data.predicted_method}
          <span className="mx-2 text-white/15">|</span>
          Confianca {data.confidence_label}
        </p>

        <div className="mt-8 max-w-md mx-auto">
          <div className="flex h-2 rounded-full overflow-hidden">
            <div className="bg-ufc-red" style={{ width: `${(f1.percent / total) * 100}%` }} />
            <div className="bg-white/[0.08]" style={{ width: `${(data.probabilities.draw / total) * 100}%` }} />
            <div className="bg-blue-400" style={{ width: `${(f2.percent / total) * 100}%` }} />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs font-bold text-ufc-red">{f1.nome} {f1.percent}%</span>
            <span className="text-xs font-bold text-blue-400">{f2.percent}% {f2.nome}</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-8 md:mb-10">
        <CollapsibleText
          text={data.explanation}
          className="text-sm md:text-base text-white/85 leading-relaxed md:leading-[1.8] text-center md:text-center"
          mobileLines={4}
          toggleColor="gold"
          expandLabel={READ_MORE_LABELS[lang].expand}
          collapseLabel={READ_MORE_LABELS[lang].collapse}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-10">
        <div className="rounded-xl bg-amber-400/[0.04] border border-amber-400/10 p-4 md:p-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold mb-2">X-Factor</p>
          <p className="text-sm font-semibold text-white/90 mb-2">{data.x_factor.title}</p>
          <CollapsibleText
            text={data.x_factor.description}
            className="text-sm text-white/75 leading-relaxed"
            mobileLines={3}
            toggleColor="gold"
            expandLabel={READ_MORE_LABELS[lang].expand}
            collapseLabel={READ_MORE_LABELS[lang].collapse}
          />
        </div>
        <div className="rounded-xl bg-red-400/[0.04] border border-red-400/10 p-4 md:p-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold mb-2">Upset Alert</p>
          <p className="text-sm font-semibold text-white/90 mb-2">{data.upset_alert.title}</p>
          <CollapsibleText
            text={data.upset_alert.description}
            className="text-sm text-white/75 leading-relaxed"
            mobileLines={3}
            toggleColor="red"
            expandLabel={READ_MORE_LABELS[lang].expand}
            collapseLabel={READ_MORE_LABELS[lang].collapse}
          />
        </div>
      </div>

      {data.value_picks && (
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400/60 mb-4">Apostas de Valor</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
              <p className="text-[9px] uppercase tracking-wider text-white/35 mb-3">Moneyline</p>
              <p className="font-display text-lg text-white mb-2">{data.value_picks.moneyline.pick}</p>
              <p className="text-xs text-white/70 leading-relaxed">{data.value_picks.moneyline.reasoning}</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
              <p className="text-[9px] uppercase tracking-wider text-white/35 mb-3">Metodo</p>
              <p className="font-display text-lg text-white mb-2">{data.value_picks.method.pick}</p>
              <p className="text-xs text-white/70 leading-relaxed">{data.value_picks.method.reasoning}</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
              <p className="text-[9px] uppercase tracking-wider text-white/35 mb-3">Over/Under</p>
              <p className="font-display text-lg text-white mb-2">{data.value_picks.over_under.pick}</p>
              <p className="text-xs text-white/70 leading-relaxed">{data.value_picks.over_under.reasoning}</p>
            </div>
          </div>
          {data.value_picks.best_value && (
            <div className="rounded-xl bg-emerald-400/[0.04] border border-emerald-400/10 p-4">
              <p className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold mb-1">Melhor Aposta de Valor</p>
              <p className="text-sm text-white/80 leading-relaxed">{data.value_picks.best_value}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
