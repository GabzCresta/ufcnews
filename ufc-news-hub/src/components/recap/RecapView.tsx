'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import FighterImage from '@/components/ui/FighterImage';
import type { RecapData, RecapFightResult } from '@/types/recap';
import {
  Trophy, TrendingUp, TrendingDown, Zap, Target, Star,
  ChevronDown, ChevronUp, Award, Flame, AlertTriangle,
  CheckCircle2, XCircle, Minus, ArrowRight, Clock, Swords,
  Crown, Skull, Shield, Brain, Sparkles, Quote,
} from 'lucide-react';
import { QuotableStatsSection } from './sections/QuotableStatsSection';
import { NarrativeThreadsSection } from './sections/NarrativeThreadsSection';
import { ReplayGuideSection } from './sections/ReplayGuideSection';
import { DivisionImpactSection } from './sections/DivisionImpactSection';
import { RecapCreatorKitSection } from './sections/RecapCreatorKitSection';
import { ModelAutopsySection } from './sections/ModelAutopsySection';

// ═══════════════════════════════════════════════════════════
// Utility Components
// ═══════════════════════════════════════════════════════════

function SectionDivider({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  const lineColor = accent ? 'bg-ufc-red/25' : 'bg-neutral-700/30';
  return (
    <div className="flex items-center gap-4 py-10">
      <div className={`h-px flex-1 ${lineColor}`} />
      <h2 className={`font-display text-sm uppercase tracking-[0.3em] ${accent ? 'text-ufc-red/80' : 'text-neutral-500'}`}>
        {children}
      </h2>
      <div className={`h-px flex-1 ${lineColor}`} />
    </div>
  );
}

function GlowNumber({ value, label, color = 'red' }: { value: string | number; label: string; color?: 'red' | 'gold' | 'green' }) {
  const glowMap = {
    red: 'text-ufc-red drop-shadow-[0_0_12px_rgba(210,10,10,0.5)]',
    gold: 'text-ufc-gold drop-shadow-[0_0_12px_rgba(201,176,55,0.5)]',
    green: 'text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]',
  };
  return (
    <div className="text-center">
      <p className={`font-display text-5xl md:text-6xl ${glowMap[color]}`}>{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">{label}</p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Prediction Accuracy Ring
// ═══════════════════════════════════════════════════════════

function AccuracyRing({ correct, total, label }: { correct: number; total: number; label: string }) {
  const pct = Math.round((correct / total) * 100);
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-28 w-28 md:h-32 md:w-32">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#1a1a1a" strokeWidth="6" />
          <circle
            cx="50" cy="50" r="45" fill="none"
            stroke="#D20A0A" strokeWidth="6" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-2xl text-white md:text-3xl">{pct}%</span>
          <span className="text-[9px] text-neutral-500">{correct}/{total}</span>
        </div>
      </div>
      <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">{label}</p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Fight Result Card
// ═══════════════════════════════════════════════════════════

function FightResultCard({ fight, index }: { fight: RecapFightResult; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isWinnerF1 = fight.actual_winner === fight.fighter1.nome;

  const predictionIcon = fight.prediction_correct
    ? <CheckCircle2 className="h-4 w-4 text-emerald-400" />
    : <XCircle className="h-4 w-4 text-red-400" />;

  const methodIcon = fight.method_correct
    ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/60" />
    : <Minus className="h-3.5 w-3.5 text-neutral-600" />;

  return (
    <div
      className={`group rounded-2xl border transition-all duration-300 cursor-pointer
        bg-[#111111] border-[#1a1a1a]
        shadow-[4px_4px_10px_rgba(0,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.025)]
        hover:shadow-[6px_6px_14px_rgba(0,0,0,0.6),-6px_-6px_14px_rgba(255,255,255,0.04)]
        hover:border-ufc-red/20
        ${fight.is_main_event ? 'ring-1 ring-ufc-red/20' : ''}
        ${fight.bonus ? 'ring-1 ring-ufc-gold/30' : ''}
      `}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-4 md:p-5">
        {/* Top row: fight number + bonus badge */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-xs text-neutral-600">
              {String(index + 1).padStart(2, '0')}
            </span>
            {fight.is_main_event && (
              <span className="rounded-full bg-ufc-red/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-ufc-red">
                Main Event
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {fight.bonus && (
              <span className="flex items-center gap-1 rounded-full bg-ufc-gold/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-ufc-gold">
                <Award className="h-3 w-3" />
                {fight.bonus === 'FOTN' ? 'Fight of the Night' : 'Performance'}
              </span>
            )}
            {predictionIcon}
          </div>
        </div>

        {/* Fighters row */}
        <div className="flex items-center gap-3">
          {/* Fighter 1 */}
          <div className="min-w-0 flex-1 flex items-center justify-end gap-2">
            {fight.fighter1.foto_url && (
              <div className={`flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-[#1a1a1a] ${isWinnerF1 ? 'ring-2 ring-emerald-500/50' : ''}`}>
                <FighterImage src={fight.fighter1.foto_url} alt={fight.fighter1.nome} width={40} height={40} className="w-full h-full object-cover object-top" />
              </div>
            )}
            <div className="min-w-0 text-right">
              <p className={`font-display text-lg uppercase leading-none tracking-wide md:text-xl ${isWinnerF1 ? 'text-white' : 'text-neutral-500'}`}>
                {fight.fighter1.nome}
              </p>
              <p className="mt-0.5 text-[10px] text-neutral-600">{fight.fighter1.record}</p>
            </div>
          </div>

          {/* Result badge */}
          <div className="flex-shrink-0">
            <div className={`rounded-full px-2.5 py-1 text-center shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.02)] ${
              fight.actual_method.toLowerCase().includes('ko') || fight.actual_method.toLowerCase().includes('tko')
                ? 'bg-red-950/50'
                : fight.actual_method.toLowerCase().includes('sub')
                ? 'bg-purple-950/50'
                : 'bg-[#0e0e0e]'
            }`}>
              <p className="font-display text-[10px] font-bold uppercase text-ufc-red">
                {fight.actual_method.includes('Decision') || fight.actual_method.includes('decision')
                  ? 'DEC'
                  : fight.actual_method.includes('TKO') || fight.actual_method.includes('tko')
                  ? 'TKO'
                  : fight.actual_method.includes('KO') || fight.actual_method.includes('ko')
                  ? 'KO'
                  : fight.actual_method.includes('Sub') || fight.actual_method.includes('sub')
                  ? 'SUB'
                  : 'W'}
              </p>
              {fight.actual_round && (
                <p className="text-[8px] text-neutral-500">R{fight.actual_round}</p>
              )}
            </div>
          </div>

          {/* Fighter 2 */}
          <div className="min-w-0 flex-1 flex items-center justify-start gap-2">
            <div className="min-w-0 text-left">
              <p className={`font-display text-lg uppercase leading-none tracking-wide md:text-xl ${!isWinnerF1 ? 'text-white' : 'text-neutral-500'}`}>
                {fight.fighter2.nome}
              </p>
              <p className="mt-0.5 text-[10px] text-neutral-600">{fight.fighter2.record}</p>
            </div>
            {fight.fighter2.foto_url && (
              <div className={`flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-[#1a1a1a] ${!isWinnerF1 ? 'ring-2 ring-emerald-500/50' : ''}`}>
                <FighterImage src={fight.fighter2.foto_url} alt={fight.fighter2.nome} width={40} height={40} className="w-full h-full object-cover object-top" />
              </div>
            )}
          </div>
        </div>

        {/* Weight + method line */}
        <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-500">
          <span>{fight.categoria_peso}</span>
          <span>{fight.actual_method}{fight.actual_time ? ` (${fight.actual_time})` : ''}</span>
        </div>

        {/* Expand toggle */}
        <div className="mt-2 flex justify-center">
          {expanded ? <ChevronUp className="h-4 w-4 text-neutral-600" /> : <ChevronDown className="h-4 w-4 text-neutral-600" />}
        </div>
      </div>

      {/* Expanded: prediction comparison */}
      {expanded && (
        <div className="border-t border-[#1a1a1a] bg-[#0c0c0c] px-4 py-4 rounded-b-2xl">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="mb-1 text-[9px] uppercase tracking-wider text-neutral-600">Our Prediction</p>
              <p className="text-neutral-300">
                {fight.predicted_winner} by {fight.predicted_method}
              </p>
              <span className="mt-1 inline-block rounded-full bg-neutral-800 px-2 py-0.5 text-[9px] text-neutral-400">
                {fight.confidence_label}
              </span>
            </div>
            <div>
              <p className="mb-1 text-[9px] uppercase tracking-wider text-neutral-600">Actual Result</p>
              <p className="text-neutral-300">
                {fight.actual_winner} by {fight.actual_method}
              </p>
              <div className="mt-1 flex items-center gap-1">
                {predictionIcon}
                <span className="text-[9px] text-neutral-500">Winner</span>
                {methodIcon}
                <span className="text-[9px] text-neutral-500">Method</span>
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <Link
              href={`/analise/${fight.slug}`}
              className="text-[10px] uppercase tracking-wider text-ufc-red hover:text-ufc-red/80 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Read Full Pre-Fight Analysis &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Ranking Movement Bar
// ═══════════════════════════════════════════════════════════

function RankingBar({ move }: { move: { fighter: string; division: string; from: number | null; to: number; direction: 'up' | 'down' | 'new' } }) {
  const isUp = move.direction === 'up' || move.direction === 'new';
  const diff = move.from !== null ? Math.abs(move.from - move.to) : move.to;
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#111111] px-4 py-3 border border-[#1a1a1a]">
      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isUp ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
        {isUp ? <TrendingUp className="h-4 w-4 text-emerald-400" /> : <TrendingDown className="h-4 w-4 text-red-400" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display text-sm uppercase text-white truncate">{move.fighter}</p>
        <p className="text-[10px] text-neutral-500">{move.division}</p>
      </div>
      <div className="text-right">
        <p className={`font-display text-lg ${isUp ? 'text-emerald-400' : 'text-red-400'}`}>
          {isUp ? '+' : '-'}{diff}
        </p>
        <p className="text-[9px] text-neutral-600">
          {move.from !== null ? `#${move.from}` : 'NR'} &rarr; #{move.to}
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// What's Next Card
// ═══════════════════════════════════════════════════════════

function WhatsNextCard({ item }: { item: { fighter: string; result: 'W' | 'L'; potential_opponents: string[]; narrative: string } }) {
  return (
    <div className="rounded-2xl bg-[#111111] border border-[#1a1a1a] p-5 shadow-[4px_4px_10px_rgba(0,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.025)]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-lg uppercase text-white">{item.fighter}</p>
        <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase ${
          item.result === 'W' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
        }`}>
          {item.result === 'W' ? 'Victory' : 'Defeat'}
        </span>
      </div>
      <p className="text-xs leading-relaxed text-neutral-400">{item.narrative}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {item.potential_opponents.map((opp) => (
          <span key={opp} className="rounded-full bg-[#1a1a1a] px-2.5 py-1 text-[10px] text-neutral-300 border border-[#262626]">
            vs {opp}
          </span>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Main Recap View
// ═══════════════════════════════════════════════════════════

export function RecapView({ data }: { data: RecapData }) {
  const allFights = [...data.main_card, ...data.prelims];
  const finishes = allFights.filter(
    (f) =>
      f.actual_method.toLowerCase().includes('ko') ||
      f.actual_method.toLowerCase().includes('tko') ||
      f.actual_method.toLowerCase().includes('sub'),
  );

  const mainEvent = data.main_card.find((f) => f.is_main_event) || data.main_card[0];
  const isWinnerF1 = mainEvent.actual_winner === mainEvent.fighter1.nome;

  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      {/* ──────── HERO: Cinematic Post-Event Banner ──────── */}
      <section className="relative overflow-hidden border-b border-ufc-red/20">
        {/* Layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-ufc-red/20 via-[#0A0A0A] to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_10%,_rgba(210,10,10,0.3)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,_rgba(52,211,153,0.05)_0%,_transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ufc-red/40 to-transparent" />

        <div className="relative px-4 pb-12 pt-16 text-center md:pb-16 md:pt-24">
          {/* Label */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ufc-red/10 px-4 py-1.5 border border-ufc-red/20">
            <Flame className="h-3.5 w-3.5 text-ufc-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ufc-red/90">
              Post-Event Recap
            </span>
          </div>

          {/* Event name */}
          <h1 className="font-display text-4xl uppercase tracking-wide text-white md:text-6xl lg:text-7xl">
            {data.evento_nome}
          </h1>
          <p className="mt-3 text-sm text-neutral-400 md:text-base">
            {data.evento_data} &middot; {data.evento_local}
          </p>

          {/* Main event winner showcase */}
          <div className="mt-8 flex flex-col items-center">
            <div className="relative">
              {/* Winner glow */}
              <div className="absolute -inset-3 rounded-full bg-ufc-red/20 blur-xl" />
              <div className="relative h-20 w-20 rounded-full overflow-hidden ring-2 ring-ufc-red/50 md:h-28 md:w-28">
                {(isWinnerF1 ? mainEvent.fighter1.foto_url : mainEvent.fighter2.foto_url) ? (
                  <FighterImage
                    src={(isWinnerF1 ? mainEvent.fighter1.foto_url : mainEvent.fighter2.foto_url)!}
                    alt={mainEvent.actual_winner}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#1a1a1a]">
                    <Crown className="h-8 w-8 text-ufc-gold" />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-ufc-red shadow-lg">
                <Trophy className="h-3.5 w-3.5 text-white" />
              </div>
            </div>
            <p className="mt-4 font-display text-2xl uppercase text-white md:text-3xl">
              {mainEvent.actual_winner}
            </p>
            <p className="mt-1 text-sm text-neutral-400">
              {mainEvent.actual_method}
              {mainEvent.actual_round ? ` - Round ${mainEvent.actual_round}` : ''}
              {mainEvent.actual_time ? ` (${mainEvent.actual_time})` : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Subtle body spotlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,_rgba(210,10,10,0.03)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-3xl px-4 py-10 md:py-16">

        {/* ──────── PREDICTION SCOREBOARD ──────── */}
        <section className="rounded-2xl bg-[#111111] border border-[#1a1a1a] p-6 md:p-8 shadow-[6px_6px_14px_rgba(0,0,0,0.5),-6px_-6px_14px_rgba(255,255,255,0.025)]">
          <div className="mb-6 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ufc-red/70">
              <Target className="mr-1 inline h-3 w-3" />
              Prediction Scoreboard
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 md:gap-10">
            <AccuracyRing correct={data.predictions_correct} total={data.total_fights} label="Winners" />
            <div className="h-20 w-px bg-neutral-800" />
            <AccuracyRing correct={data.methods_correct} total={data.total_fights} label="Methods" />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <GlowNumber value={data.total_fights} label="Fights" color="red" />
            <GlowNumber value={finishes.length} label="Finishes" color="gold" />
            <GlowNumber
              value={`${Math.round((data.predictions_correct / data.total_fights) * 100)}%`}
              label="Accuracy"
              color="green"
            />
          </div>
        </section>

        {/* ──────── QUOTABLE STATS ──────── */}
        {data.quotable_stats && data.quotable_stats.length > 0 && (
          <>
            <SectionDivider accent>
              <span className="flex items-center gap-2">
                <Quote className="h-3 w-3" />
                Quotable Stats
              </span>
            </SectionDivider>
            <QuotableStatsSection data={data.quotable_stats} />
          </>
        )}

        {/* ──────── HEADLINES ──────── */}
        <SectionDivider accent>Night in Headlines</SectionDivider>

        <div className="space-y-3">
          {data.headlines.map((hl, i) => {
            const IconMap: Record<string, React.ElementType> = {
              crown: Crown, skull: Skull, zap: Zap, star: Star, flame: Flame,
              shield: Shield, brain: Brain, trophy: Trophy, target: Target,
              sparkles: Sparkles, alert: AlertTriangle, clock: Clock, swords: Swords,
            };
            const Icon = IconMap[hl.icon] || Zap;
            return (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl bg-[#111111] border border-[#1a1a1a] p-4 transition-all duration-200 hover:border-ufc-red/20"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ufc-red/10">
                  <Icon className="h-4 w-4 text-ufc-red" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-display text-sm uppercase text-white">{hl.title}</p>
                    {hl.tag && (
                      <span className="rounded-full bg-ufc-gold/10 px-2 py-0.5 text-[8px] font-bold uppercase text-ufc-gold">
                        {hl.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-400">{hl.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ──────── NARRATIVE THREADS ──────── */}
        {data.narrative_threads && data.narrative_threads.length > 0 && (
          <>
            <SectionDivider accent>Story Threads</SectionDivider>
            <NarrativeThreadsSection data={data.narrative_threads} />
          </>
        )}

        {/* ──────── STAR OF THE NIGHT ──────── */}
        <SectionDivider accent>Star of the Night</SectionDivider>

        <div className="rounded-2xl bg-gradient-to-br from-[#1a1008] via-[#111111] to-[#111111] border border-ufc-gold/20 p-6 md:p-8 shadow-[6px_6px_14px_rgba(0,0,0,0.5),-6px_-6px_14px_rgba(255,255,255,0.025)]">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-ufc-gold/15 blur-lg" />
              <div className="relative h-24 w-24 rounded-full overflow-hidden ring-2 ring-ufc-gold/40 md:h-28 md:w-28">
                {data.star_of_the_night.foto_url ? (
                  <FighterImage
                    src={data.star_of_the_night.foto_url}
                    alt={data.star_of_the_night.fighter}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#1a1a1a]">
                    <Star className="h-10 w-10 text-ufc-gold" />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-ufc-gold shadow-lg">
                <Star className="h-3.5 w-3.5 text-black" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="font-display text-3xl uppercase text-ufc-gold md:text-4xl">
                {data.star_of_the_night.fighter}
              </p>
              <p className="mt-1 text-sm text-ufc-gold/60">{data.star_of_the_night.stat_line}</p>
              <p className="mt-3 text-xs leading-relaxed text-neutral-400">
                {data.star_of_the_night.narrative}
              </p>
              {data.star_of_the_night.quote && (
                <blockquote className="mt-4 border-l-2 border-ufc-gold/30 pl-3 text-xs italic text-neutral-300">
                  &ldquo;{data.star_of_the_night.quote}&rdquo;
                </blockquote>
              )}
            </div>
          </div>
        </div>

        {/* ──────── BONUSES ──────── */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* FOTN */}
          <div className="rounded-xl bg-[#111111] border border-ufc-gold/15 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Swords className="h-4 w-4 text-ufc-gold" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-ufc-gold">Fight of the Night</p>
            </div>
            <p className="font-display text-sm uppercase text-white">
              {data.bonuses.fotn.fighter1} vs {data.bonuses.fotn.fighter2}
            </p>
            <p className="mt-1 text-[10px] text-ufc-gold/50">$100,000 each</p>
          </div>
          {/* POTN */}
          <div className="rounded-xl bg-[#111111] border border-ufc-gold/15 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-ufc-gold" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-ufc-gold">Performance of the Night</p>
            </div>
            {data.bonuses.potn.map((name) => (
              <p key={name} className="font-display text-sm uppercase text-white">{name}</p>
            ))}
            <p className="mt-1 text-[10px] text-ufc-gold/50">$100,000 each</p>
          </div>
        </div>

        {/* ──────── FULL RESULTS: MAIN CARD ──────── */}
        <SectionDivider accent>Main Card Results</SectionDivider>
        <div className="space-y-3">
          {data.main_card.map((fight, i) => (
            <FightResultCard key={fight.slug} fight={fight} index={i} />
          ))}
        </div>

        {/* ──────── FULL RESULTS: PRELIMS ──────── */}
        <SectionDivider>Preliminary Card</SectionDivider>
        <div className="space-y-3">
          {data.prelims.map((fight, i) => (
            <FightResultCard key={fight.slug} fight={fight} index={data.main_card.length + i} />
          ))}
        </div>

        {/* ──────── REPLAY GUIDE ──────── */}
        {data.replay_guide && data.replay_guide.length > 0 && (
          <>
            <SectionDivider accent>Replay Guide</SectionDivider>
            <ReplayGuideSection data={data.replay_guide} />
          </>
        )}

        {/* ──────── RANKING MOVEMENTS ──────── */}
        <SectionDivider accent>Ranking Shakeup</SectionDivider>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {data.ranking_moves.map((move) => (
            <RankingBar key={move.fighter} move={move} />
          ))}
        </div>

        {/* ──────── DIVISION IMPACT ──────── */}
        {data.division_impacts && data.division_impacts.length > 0 && (
          <>
            <SectionDivider accent>Division Impact</SectionDivider>
            <DivisionImpactSection data={data.division_impacts} />
          </>
        )}

        {/* ──────── WHAT'S NEXT ──────── */}
        <SectionDivider accent>What&apos;s Next</SectionDivider>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {data.whats_next.map((item) => (
            <WhatsNextCard key={item.fighter} item={item} />
          ))}
        </div>

        {/* ──────── POST-FIGHT CREATOR KIT ──────── */}
        {data.creator_kit && (
          <>
            <SectionDivider accent>Creator Kit</SectionDivider>
            <RecapCreatorKitSection data={data.creator_kit} />
          </>
        )}

        {/* ──────── MODEL AUTOPSY ──────── */}
        {data.model_autopsy ? (
          <>
            <SectionDivider>Model Autopsy</SectionDivider>
            <ModelAutopsySection data={data.model_autopsy} />
          </>
        ) : (
          <>
            <SectionDivider>The Algorithm Speaks</SectionDivider>
            <div className="rounded-2xl bg-[#111111] border border-[#1a1a1a] p-6 md:p-8 shadow-[4px_4px_10px_rgba(0,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.025)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-ufc-red/20 to-purple-500/20">
                  <Brain className="h-5 w-5 text-ufc-red" />
                </div>
                <div>
                  <p className="font-display text-sm uppercase text-white">Model Self-Assessment</p>
                  <p className="text-[10px] text-neutral-500">Combat Sports Intelligence Engine v1</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-neutral-400 whitespace-pre-line">
                {data.model_notes}
              </p>
            </div>
          </>
        )}

        {/* ──────── FOOTER ──────── */}
        <div className="mt-16 space-y-4 text-center">
          <Link
            href={`/analise/evento/emmett-vs-vallejos`}
            className="inline-flex items-center gap-2 rounded-full bg-ufc-red/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-ufc-red border border-ufc-red/20 transition-all hover:bg-ufc-red/20 hover:border-ufc-red/40"
          >
            <ArrowRight className="h-3.5 w-3.5" />
            View Pre-Fight Predictions
          </Link>
          <p className="text-[10px] text-neutral-600">
            {data.total_fights} fights analyzed &middot; Powered by Combat Sports Intelligence Engine
          </p>
        </div>
      </div>
    </main>
  );
}
