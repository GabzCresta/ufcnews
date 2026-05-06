import { AlertTriangle, Newspaper, Scale, TrendingUp } from 'lucide-react';
import type { WrapUpData, WrapUpMudancaTipo } from '@/types/wrap-up';

/* ═══════════════════════════════════════════════════════════
   Wrap Up page — light theme override (white + red)
   This is the ONLY page in the app that uses a light palette.
   Body text dark-on-white for max legibility; ufc-red reserved
   for accents (titles, names, dividers, stat highlights).
   ═══════════════════════════════════════════════════════════ */

/* Type chip styles — light variants */
interface TipoStyle {
  label: string;
  chipText: string;
  chipBg: string;
  chipBorder: string;
}

const TIPO_STYLES: Record<WrapUpMudancaTipo, TipoStyle> = {
  camp: {
    label: 'CAMP',
    chipText: 'text-sky-700',
    chipBg: 'bg-sky-50',
    chipBorder: 'border-sky-300',
  },
  lesao: {
    label: 'LESAO',
    chipText: 'text-ufc-red',
    chipBg: 'bg-red-50',
    chipBorder: 'border-red-300',
  },
  odds: {
    label: 'ODDS',
    chipText: 'text-emerald-700',
    chipBg: 'bg-emerald-50',
    chipBorder: 'border-emerald-300',
  },
  estilo: {
    label: 'ESTILO',
    chipText: 'text-amber-700',
    chipBg: 'bg-amber-50',
    chipBorder: 'border-amber-300',
  },
  outros: {
    label: 'OUTROS',
    chipText: 'text-neutral-700',
    chipBg: 'bg-neutral-100',
    chipBorder: 'border-neutral-400',
  },
};

/* ═══════════════════════════════════════════════════════════
   MetaChip — light theme pill
   ═══════════════════════════════════════════════════════════ */
function MetaChip({
  icon: Icon,
  value,
  label,
  accent = false,
}: {
  icon: React.ElementType;
  value: number;
  label: string;
  accent?: boolean;
}) {
  const muted = value === 0;
  return (
    <div
      className={`flex items-center gap-2.5 rounded-full border px-4 py-2 shadow-sm ${
        muted
          ? 'border-neutral-200 bg-neutral-50 opacity-60'
          : accent
            ? 'border-ufc-red bg-red-50'
            : 'border-neutral-300 bg-white'
      }`}
    >
      <Icon
        className={`h-4 w-4 ${
          muted
            ? 'text-neutral-400'
            : accent
              ? 'text-ufc-red'
              : 'text-neutral-600'
        }`}
      />
      <span
        className={`font-display text-xl leading-none ${
          muted ? 'text-neutral-400' : 'text-neutral-900'
        }`}
      >
        {value}
      </span>
      <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
        {label}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SectionTitle — red eyebrow + split H2 (dark + red accent)
   ═══════════════════════════════════════════════════════════ */
function SectionTitle({
  number,
  title,
  accent,
}: {
  number: string;
  title: string;
  accent: string;
}) {
  return (
    <header className="mb-10 pt-20 md:pt-24">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-ufc-red">
        Secao {number}
      </p>
      <h2 className="font-display text-3xl uppercase leading-tight tracking-tight md:text-5xl">
        <span className="text-neutral-900">{title}</span>{' '}
        <span className="text-ufc-red">{accent}</span>
      </h2>
      <div className="mt-5 h-1 w-20 bg-ufc-red" />
    </header>
  );
}

/* ════════════════════════════════════════════════════════════
   Wrap Up View — light theme
   ════════════════════════════════════════════════════════════ */
export function WrapUpView({ data }: { data: WrapUpData }) {
  return (
    <main className="min-h-screen bg-white">
      {/* ══════════ Hero ══════════ */}
      <section className="relative overflow-hidden border-b-4 border-ufc-red">
        {/* Soft red gradient at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 via-white to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,_rgba(210,10,10,0.08)_0%,_transparent_70%)]" />

        <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-20 text-center md:pb-24 md:pt-28">
          {/* Live label — red outline pill */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ufc-red bg-white px-4 py-1.5 shadow-sm">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-ufc-red" />
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-ufc-red">
              Wrap Up Pos Weigh-In
            </p>
          </div>

          {/* Focal H1 — dark on white */}
          <h1 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
            {data.evento_nome}
          </h1>

          <p className="mt-5 text-base text-neutral-700 md:text-lg">
            {data.evento_data}
          </p>

          {/* Meta strip */}
          <div className="mx-auto mt-12 flex max-w-xl flex-wrap justify-center gap-3">
            <MetaChip
              icon={TrendingUp}
              value={data.mudancas.length}
              label="Mudancas"
            />
            <MetaChip
              icon={Scale}
              value={data.weigh_in_failures.length}
              label="Peso Falhado"
              accent={data.weigh_in_failures.length > 0}
            />
            <MetaChip
              icon={Newspaper}
              value={data.news_semana.length}
              label="Noticias"
            />
          </div>

          <p className="mt-10 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Atualizado {data.data_atualizacao}
          </p>
        </div>
      </section>

      {/* ══════════ Body ══════════ */}
      <div className="mx-auto max-w-2xl px-5 pb-28 md:px-6">
        {/* ── Secao 01: O Que Mudou ── */}
        {data.mudancas.length > 0 && (
          <section>
            <SectionTitle number="01" title="O Que" accent="Mudou" />
            <div className="space-y-5">
              {data.mudancas.map((m, i) => {
                const style = TIPO_STYLES[m.tipo];
                return (
                  <article
                    key={i}
                    className="rounded-xl border-2 border-red-300 bg-white p-6 shadow-sm md:p-7"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className={`rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] ${style.chipText} ${style.chipBg} ${style.chipBorder}`}
                      >
                        {style.label}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        Mudanca
                      </span>
                    </div>
                    <h3 className="mb-5 font-display text-xl uppercase leading-snug tracking-tight text-neutral-900 md:text-2xl">
                      {m.luta}
                    </h3>
                    <p className="text-base leading-relaxed text-neutral-800">
                      {m.descricao}
                    </p>
                    <div className="mt-6 border-l-4 border-ufc-red bg-red-50/50 py-2 pl-4 pr-3">
                      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ufc-red">
                        Impacto
                      </p>
                      <p className="text-sm leading-relaxed text-neutral-700">
                        {m.impacto}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* ── Secao 02: Weigh-In Failures ── */}
        {data.weigh_in_failures.length > 0 && (
          <section>
            <SectionTitle number="02" title="Weigh-In" accent="Failures" />
            <div className="space-y-5">
              {data.weigh_in_failures.map((w, i) => (
                <article
                  key={i}
                  className="rounded-2xl border-2 border-ufc-red bg-red-50/50 p-7 shadow-sm md:p-8"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-ufc-red" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ufc-red">
                      Missed Weight
                    </p>
                    <span className="mx-1 text-neutral-400">·</span>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-600">
                      {w.luta}
                    </p>
                  </div>

                  <h3 className="font-display text-4xl uppercase leading-none tracking-tight text-neutral-900 md:text-5xl">
                    {w.lutador}
                  </h3>

                  <div className="mt-7 flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t-2 border-red-200 pt-6 font-display">
                    <div>
                      <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                        Alvo
                      </p>
                      <p className="text-2xl leading-none text-neutral-900 md:text-3xl">
                        {w.peso_alvo}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                        Real
                      </p>
                      <p className="text-2xl leading-none text-ufc-red md:text-3xl">
                        {w.peso_real}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                        Multa
                      </p>
                      <p className="text-2xl leading-none text-ufc-red md:text-3xl">
                        {w.percentual_multa}%
                      </p>
                    </div>
                  </div>

                  <p className="mt-7 text-base leading-relaxed text-neutral-800">
                    {w.implicacao}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ── Secao 03: Noticias da Semana ── */}
        {data.news_semana.length > 0 && (
          <section>
            <SectionTitle number="03" title="Noticias da" accent="Semana" />
            <div className="space-y-4">
              {data.news_semana.map((n, i) => (
                <article
                  key={i}
                  className="rounded-xl border-2 border-red-300 bg-white p-6 shadow-sm transition-colors hover:border-ufc-red md:p-7"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-ufc-red" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg uppercase leading-snug tracking-wide text-neutral-900 md:text-xl">
                        {n.titulo}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-neutral-800">
                        {n.descricao}
                      </p>
                      {(n.data ||
                        n.fonte ||
                        (n.impacto_lutas && n.impacto_lutas.length > 0)) && (
                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t border-neutral-200 pt-4 text-[11px] text-neutral-500">
                          {n.data && (
                            <span className="font-semibold uppercase tracking-[0.15em] text-neutral-700">
                              {n.data}
                            </span>
                          )}
                          {n.fonte && (
                            <span className="font-semibold uppercase tracking-[0.15em] text-ufc-red">
                              {n.fonte}
                            </span>
                          )}
                          {n.impacto_lutas &&
                            n.impacto_lutas.length > 0 && (
                              <span>
                                {n.impacto_lutas.length === 1
                                  ? 'Luta'
                                  : 'Lutas'}
                                : {n.impacto_lutas.join(', ')}
                              </span>
                            )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <div className="mt-28 border-t border-neutral-200 pt-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Wrap Up gerado automaticamente pelo Crenas
          </p>
        </div>
      </div>
    </main>
  );
}
