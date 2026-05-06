'use client';

import { Link } from '@/i18n/routing';
import FighterImage from '@/components/ui/FighterImage';
import { EventAnalysisCard, type EventFightCard } from './EventAnalysisCard';
import { EventCreatorKitSection } from './event/EventCreatorKitSection';
import type { EventCreatorKitData } from '@/types/event-creator-kit';
import { useTranslations } from 'next-intl';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

export interface EventAnalysisData {
  evento_nome: string;
  evento_data: string;
  evento_local: string;
  /** Optional UFC EVENT-ART background image URL — when set, used as the hero background */
  poster_url?: string;
  main_card: EventFightCard[];
  prelims: EventFightCard[];
  creator_kit?: EventCreatorKitData;
}

/* ────────────────────────────────────────────
   EventoNome — UFC FIGHT NIGHT prefix + ✦ + headline (split on ":")
   Mirrors the style used in /hub/arena
   ──────────────────────────────────────────── */
function EventoNome({ nome }: { nome: string }) {
  const parts = nome.split(':');
  const prefix = parts.length >= 2 ? parts[0].trim() : '';
  const headline = parts.length >= 2 ? parts.slice(1).join(':').trim() : nome;
  const vsParts = headline.split(/\s+(VS|vs)\s+/i);
  const renderedHeadline = vsParts.length === 3
    ? <>{vsParts[0]} <span className="text-ufc-red">VS</span> {vsParts[2]}</>
    : headline;

  return (
    <div className="text-center">
      {prefix && (
        <>
          <div className="text-[10px] sm:text-xs text-ufc-red font-display uppercase tracking-[0.35em]">
            {prefix}
          </div>
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px flex-1 max-w-[50px] bg-gradient-to-r from-transparent to-ufc-red/50" />
            <span className="text-ufc-red/60 text-[10px]">✦</span>
            <div className="h-px flex-1 max-w-[50px] bg-gradient-to-l from-transparent to-ufc-red/50" />
          </div>
        </>
      )}
      <h1
        className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white leading-[0.95]"
        style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
      >
        {renderedHeadline}
      </h1>
    </div>
  );
}

/* ────────────────────────────────────────────
   Section divider — thin red rule + label
   ──────────────────────────────────────────── */
function SectionLabel({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  const color = accent ? 'text-ufc-red' : 'text-neutral-500';
  const lineColor = accent ? 'via-ufc-red/30' : 'via-neutral-700/60';
  return (
    <div className="flex items-center gap-3 md:gap-4 py-6 md:py-8">
      <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${lineColor} to-transparent`} />
      <h2 className={`font-display text-[11px] md:text-xs uppercase tracking-[0.35em] ${color} whitespace-nowrap`}>
        {children}
      </h2>
      <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${lineColor} to-transparent`} />
    </div>
  );
}

/* ════════════════════════════════════════════
   Main Component
   ════════════════════════════════════════════ */
export function EventAnalysisView({ data }: { data: EventAnalysisData }) {
  const t = useTranslations('analise');

  const mainEvent = data.main_card.find((f) => f.is_main_event) || data.main_card[0];
  const restMainCard = data.main_card.filter((f) => f !== mainEvent);
  const allFights = [...data.main_card, ...data.prelims];
  const isWinnerFighter1 = mainEvent.predicted_winner === mainEvent.fighter1.nome;

  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      {/* ──────── HERO — poster background with EventoNome ──────── */}
      <section className="relative overflow-hidden min-h-[60vh] md:min-h-[55vh] flex items-center">
        {data.poster_url && (
          <img
            src={data.poster_url}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden
          />
        )}
        {/* Layered overlay: stronger top fade for breathing room, deeper bottom for body transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/55 to-[#0a0a0a]" />
        {/* Vignette for poster-like polish */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.5)_100%)]" />
        {/* Red ambient glow at top */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
          style={{ background: 'radial-gradient(ellipse, rgba(210,10,10,0.18) 0%, transparent 70%)' }}
        />
        {/* Bottom accent line */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ufc-red/50 to-transparent" />

        <div className="relative w-full px-4 py-12 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-ufc-red mb-6 md:mb-8 drop-shadow-[0_0_8px_rgba(210,10,10,0.5)]">
              {t('analise_completa_card')}
            </p>
            <EventoNome nome={data.evento_nome} />
            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-ufc-red/80" />
                {data.evento_data}
              </span>
              <span className="text-white/20">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-ufc-red/80" />
                {data.evento_local}
              </span>
            </div>
            <p className="mt-4 text-center text-[10px] uppercase tracking-[0.3em] text-white/35">
              {allFights.length} {t('lutas_analisadas')}
            </p>
          </div>
        </div>
      </section>

      <div className="relative mx-auto max-w-3xl px-4 py-8 md:py-14">

        {/* ──────── MAIN EVENT — aurora hero card ──────── */}
        <Link
          href={`/analise/${mainEvent.slug}`}
          className="group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c0c] p-6 md:p-10 transition-all duration-300 hover:border-ufc-red/40"
        >
          {/* Aurora gradient mesh */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-ufc-red/15 blur-[100px]" />
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-[100px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ufc-red/40 to-transparent" />
          </div>

          {/* Main Event label */}
          <p className="relative mb-5 md:mb-7 text-center text-[10px] font-bold uppercase tracking-[0.35em] text-ufc-red">
            Main Event
          </p>

          {/* Fighters row */}
          <div className="relative flex items-center justify-center gap-3 md:gap-6">
            {/* Fighter 1 */}
            <div className="flex flex-col items-center gap-2 md:gap-3 flex-1 min-w-0 text-center">
              {mainEvent.fighter1.foto_url && (
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-ufc-red/40 shrink-0">
                  <FighterImage
                    src={mainEvent.fighter1.foto_url}
                    alt={mainEvent.fighter1.nome}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
              <p className={`font-display text-2xl sm:text-3xl md:text-5xl uppercase leading-[0.9] truncate max-w-full ${
                isWinnerFighter1
                  ? 'bg-gradient-to-r from-ufc-red via-red-400 to-red-300 bg-clip-text text-transparent'
                  : 'text-neutral-300'
              }`}>
                {mainEvent.fighter1.nome}
              </p>
              <p className="text-[10px] md:text-xs text-neutral-400">{mainEvent.fighter1.record}</p>
            </div>

            {/* VS — clean badge, no neumorphism */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-ufc-red/20 blur-lg scale-150" />
                <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/[0.15]">
                  <span className="font-display text-base md:text-lg font-bold text-white/80">VS</span>
                </div>
              </div>
            </div>

            {/* Fighter 2 */}
            <div className="flex flex-col items-center gap-2 md:gap-3 flex-1 min-w-0 text-center">
              {mainEvent.fighter2.foto_url && (
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-blue-400/40 shrink-0">
                  <FighterImage
                    src={mainEvent.fighter2.foto_url}
                    alt={mainEvent.fighter2.nome}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
              <p className={`font-display text-2xl sm:text-3xl md:text-5xl uppercase leading-[0.9] truncate max-w-full ${
                !isWinnerFighter1
                  ? 'bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent'
                  : 'text-neutral-300'
              }`}>
                {mainEvent.fighter2.nome}
              </p>
              <p className="text-[10px] md:text-xs text-neutral-400">{mainEvent.fighter2.record}</p>
            </div>
          </div>

          {/* Meta + prediction footer */}
          <div className="relative mt-5 md:mt-7 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[11px] md:text-xs">
            <span className="inline-flex items-center rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1 uppercase tracking-wider text-white/60">
              {mainEvent.categoria_peso} · {mainEvent.num_rounds} rounds
            </span>
            <span className="text-white/20 hidden sm:inline">·</span>
            <span className="text-neutral-300">
              <span className="text-ufc-red font-semibold">{mainEvent.predicted_winner}</span>{' '}
              {t('por')} {mainEvent.predicted_method}
            </span>
          </div>

          {/* Hover affordance */}
          <div className="relative mt-5 md:mt-6 flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-[0.3em] text-white/30 group-hover:text-ufc-red transition-colors">
            {t('ver_analise')}
            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* ──────── MAIN CARD ──────── */}
        {restMainCard.length > 0 && (
          <section>
            <SectionLabel accent>{t('main_card')}</SectionLabel>
            <div className="space-y-3">
              {restMainCard.map((fight) => (
                <EventAnalysisCard
                  key={fight.slug}
                  fight={fight}
                  size="card"
                  showMeta
                  showPrediction
                />
              ))}
            </div>
          </section>
        )}

        {/* ──────── PRELIMS ──────── */}
        {data.prelims.length > 0 && (
          <section>
            <SectionLabel accent>{t('preliminar')}</SectionLabel>
            <div className="space-y-2">
              {data.prelims.map((fight) => (
                <EventAnalysisCard
                  key={fight.slug}
                  fight={fight}
                  size="prelim"
                  showMeta
                  showPrediction
                />
              ))}
            </div>
          </section>
        )}

        {/* ──────── Creator Kit ──────── */}
        {data.creator_kit && (
          <EventCreatorKitSection data={data.creator_kit} />
        )}
      </div>
    </main>
  );
}
