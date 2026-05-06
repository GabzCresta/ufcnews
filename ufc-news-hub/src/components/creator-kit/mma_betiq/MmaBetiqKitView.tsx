'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Copy,
  Check,
  Lock,
  Trophy,
  X,
  Flame,
  Repeat,
  ShieldOff,
  Megaphone,
  Send,
  ArrowRight,
  Zap,
  Crown,
} from 'lucide-react';
import type {
  MmaBetiqKitData,
  MmaBetiqPick,
  PickClassification,
  MmaBetiqKitMeta,
  TrackRecordSummary,
  LockOfTheWeek,
  CycleParlayCard,
  FadeOfWeekCard,
  ArenaPlaybook,
  DiscordEngine,
  KitCallToAction,
} from '@/types/mma-betiq-kit';

// ═══════════════════════════════════════════════════════════
// Decorative atoms
// ═══════════════════════════════════════════════════════════

function GlowBlob({
  color = 'rgba(210, 10, 10, 0.18)',
  size = 320,
  position = '-top-24 -right-24',
  opacity = 1,
}: {
  color?: string;
  size?: number;
  position?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`absolute ${position} rounded-full blur-3xl pointer-events-none`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        opacity,
      }}
    />
  );
}

function CornerBrackets({ color = 'rgba(212,175,55,0.55)' }: { color?: string }) {
  return (
    <>
      <span
        className="absolute top-3 left-3 h-4 w-4 border-t border-l pointer-events-none"
        style={{ borderColor: color }}
      />
      <span
        className="absolute top-3 right-3 h-4 w-4 border-t border-r pointer-events-none"
        style={{ borderColor: color }}
      />
      <span
        className="absolute bottom-3 left-3 h-4 w-4 border-b border-l pointer-events-none"
        style={{ borderColor: color }}
      />
      <span
        className="absolute bottom-3 right-3 h-4 w-4 border-b border-r pointer-events-none"
        style={{ borderColor: color }}
      />
    </>
  );
}

function ConvictionBar({ value, max = 10 }: { value: number; max?: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/40">
          Conviction
        </span>
        <span className="font-monoStat text-emerald-400 font-bold text-sm">
          {value}/{max}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/[0.04] overflow-hidden relative">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${(value / max) * 100}%`,
            background: 'linear-gradient(90deg, #1FAE5C 0%, #D4AF37 100%)',
            boxShadow: '0 0 12px rgba(31,174,92,0.5), 0 0 24px rgba(212,175,55,0.2)',
          }}
        />
      </div>
    </div>
  );
}

function NoiseTexture() {
  return (
    <div
      className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// ═══════════════════════════════════════════════════════════
// Shared atoms
// ═══════════════════════════════════════════════════════════

function CopyBtn({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="flex items-center gap-1.5 font-monoStat text-[10px] uppercase tracking-wider text-white/40 hover:text-emerald-400 transition-colors px-2 py-1 rounded border border-white/10 hover:border-emerald-400/40"
    >
      {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
      {copied ? 'Copied' : label}
    </button>
  );
}

interface SectionTitleProps {
  icon: typeof Trophy;
  tag: string;
  title: string;
  accent?: string;
}

function SectionTitle({ icon: Icon, tag, title, accent }: SectionTitleProps) {
  return (
    <div className="border-t border-white/[0.06] pt-10 mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ufc-red/15 border border-ufc-red/30 shrink-0">
          <Icon size={18} className="text-ufc-red" />
        </div>
        <div>
          <p className="font-monoStat text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-1">
            {tag}
          </p>
          <h2 className="font-hero font-black text-3xl md:text-5xl uppercase text-white leading-[0.9] tracking-tight">
            {title}
            {accent ? <span className="text-ufc-red ml-3">{accent}</span> : null}
          </h2>
        </div>
      </div>
      <div className="h-1 w-16 bg-gradient-to-r from-ufc-red via-ufc-red/50 to-transparent rounded-full" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Classification meta
// ═══════════════════════════════════════════════════════════

const CLASSIFICATION_META: Record<
  PickClassification,
  {
    icon: string;
    label: string;
    text: string;
    bg: string;
    border: string;
    glow: string;
  }
> = {
  lock: {
    icon: '🔒',
    label: 'LOCK',
    text: 'text-emerald-400',
    bg: 'rgba(31, 174, 92, 0.10)',
    border: 'rgba(31, 174, 92, 0.45)',
    glow: 'rgba(31, 174, 92, 0.35)',
  },
  risky: {
    icon: '⚠️',
    label: 'RISKY',
    text: 'text-amber-400',
    bg: 'rgba(245, 158, 11, 0.10)',
    border: 'rgba(245, 158, 11, 0.45)',
    glow: 'rgba(245, 158, 11, 0.35)',
  },
  winner: {
    icon: '✅',
    label: 'WINNER',
    text: 'text-sky-400',
    bg: 'rgba(56, 189, 248, 0.10)',
    border: 'rgba(56, 189, 248, 0.40)',
    glow: 'rgba(56, 189, 248, 0.30)',
  },
  underdog: {
    icon: '🐶',
    label: 'UNDERDOG',
    text: 'text-orange-400',
    bg: 'rgba(251, 146, 60, 0.10)',
    border: 'rgba(251, 146, 60, 0.45)',
    glow: 'rgba(251, 146, 60, 0.35)',
  },
};

// ═══════════════════════════════════════════════════════════
// Hero header
// ═══════════════════════════════════════════════════════════

function KitHero({ meta, track }: { meta: MmaBetiqKitMeta; track: TrackRecordSummary }) {
  return (
    <div className="relative isolate rounded-3xl overflow-hidden mb-14">
      <div
        className="absolute inset-0 -z-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(210, 10, 10, 0.22), transparent 70%), radial-gradient(ellipse 60% 50% at 50% 110%, rgba(212, 175, 55, 0.08), transparent 70%), linear-gradient(180deg, #0a0a0a 0%, #050807 100%)',
        }}
      />
      <NoiseTexture />
      <div
        className="absolute inset-0 -z-20 border border-ufc-red/25 rounded-3xl pointer-events-none"
      />
      <CornerBrackets color="rgba(212, 175, 55, 0.55)" />
      <GlowBlob color="rgba(210,10,10,0.32)" size={420} position="-top-32 -right-24" />
      <GlowBlob color="rgba(212,175,55,0.14)" size={300} position="-bottom-24 -left-24" />

      <div className="relative px-6 md:px-12 py-12 md:py-16">
        <div className="flex items-start justify-between flex-wrap gap-6 mb-10">
          <div className="flex-1 min-w-[280px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-ufc-red" />
              <p className="font-monoStat text-[11px] uppercase tracking-[0.35em] text-ufc-red font-bold">
                MMA Bet IQ Kit · Powered by Crenas
              </p>
            </div>
            <h1 className="font-hero font-black text-5xl md:text-7xl uppercase text-white leading-[0.85] tracking-tight mb-4">
              Della Maddalena
              <br />
              <span className="text-ufc-red">vs Prates</span>
            </h1>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 font-monoStat text-[10px] uppercase tracking-[0.2em] text-white/60 px-2.5 py-1 rounded-full border border-white/15 bg-white/[0.02]">
                {meta.event_number}
              </span>
              <span className="inline-flex items-center gap-1.5 font-monoStat text-[10px] uppercase tracking-[0.2em] text-white/60 px-2.5 py-1 rounded-full border border-white/15 bg-white/[0.02]">
                {meta.event_date}
              </span>
              <span className="inline-flex items-center gap-1.5 font-monoStat text-[10px] uppercase tracking-[0.2em] text-white/60 px-2.5 py-1 rounded-full border border-white/15 bg-white/[0.02]">
                {meta.event_location}
              </span>
            </div>
          </div>
          <div
            className="relative flex flex-col items-end gap-1.5 text-right rounded-2xl p-5 min-w-[220px]"
            style={{
              background:
                'linear-gradient(135deg, rgba(31,174,92,0.08) 0%, rgba(212,175,55,0.04) 100%)',
              border: '1px solid rgba(31,174,92,0.30)',
              boxShadow: 'inset 0 1px 0 rgba(31,174,92,0.20)',
            }}
          >
            <span className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/40">
              Track record
            </span>
            <span className="font-hero font-black text-emerald-400 text-4xl leading-none">
              {track.winners_correct}/{track.total_fights}
            </span>
            <span className="font-monoStat text-[10px] uppercase tracking-wider text-emerald-400/80">
              winners · method 8/8
            </span>
            <span className="font-monoStat text-[10px] text-white/40 mt-1">
              Locks {track.lock_record} · 100%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 flex-wrap pt-6 border-t border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ufc-red/15 border border-ufc-red/40">
              <Send size={16} className="text-ufc-red" />
            </div>
            <div>
              <p className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/40 mb-0.5">
                For
              </p>
              <p className="font-hero font-bold text-2xl text-white leading-none">
                {meta.creator_handle}
              </p>
            </div>
          </div>
          <p className="text-sm text-white/65 leading-relaxed max-w-2xl">
            <span className="text-white">{track.headline}</span>{' '}
            <span className="text-white/45">{track.subheadline}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Track record stat strip
// ═══════════════════════════════════════════════════════════

function TrackRecordStrip({ track }: { track: TrackRecordSummary }) {
  const cells = [
    {
      icon: '🔒',
      label: 'Locks',
      value: track.lock_record,
      glow: 'rgba(31,174,92,0.35)',
      text: 'text-emerald-400',
      sub: 'High-confidence picks',
    },
    {
      icon: '⚠️',
      label: 'Risky',
      value: track.risky_record,
      glow: 'rgba(245,158,11,0.35)',
      text: 'text-amber-400',
      sub: 'Specific method windows',
    },
    {
      icon: '✅',
      label: 'Winner',
      value: track.winner_record,
      glow: 'rgba(56,189,248,0.30)',
      text: 'text-sky-400',
      sub: 'Standard ML picks',
    },
    {
      icon: '🐶',
      label: 'Underdog',
      value: track.underdog_record,
      glow: 'rgba(251,146,60,0.35)',
      text: 'text-orange-400',
      sub: 'Dog plays w/ edge',
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
      {cells.map((cell) => (
        <div
          key={cell.label}
          className="relative overflow-hidden rounded-2xl p-5"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow:
              '0 8px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <GlowBlob color={cell.glow} size={140} position="-top-12 -right-12" opacity={0.6} />
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{cell.icon}</span>
              <span className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/40">
                {cell.label}
              </span>
            </div>
            <p className={`font-hero font-black text-4xl leading-none ${cell.text}`}>
              {cell.value}
            </p>
            <p className="text-[11px] text-white/40 mt-2">{cell.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Fighter portrait
// ═══════════════════════════════════════════════════════════

function FighterPortrait({
  name,
  photo,
  size = 'md',
}: {
  name: string;
  photo?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const width = size === 'sm' ? 64 : size === 'md' ? 96 : 220;
  const height = size === 'sm' ? 80 : size === 'md' ? 120 : 280;
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <div
      className="relative overflow-hidden rounded-xl shrink-0"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background:
          'linear-gradient(155deg, rgba(212,175,55,0.30) 0%, rgba(31,174,92,0.15) 60%, rgba(0,0,0,0.4) 100%)',
        boxShadow:
          'inset 0 1px 0 rgba(212,175,55,0.25), inset 0 -1px 0 rgba(0,0,0,0.6)',
      }}
    >
      <div
        className="absolute inset-[2px] rounded-[10px] overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(255,255,255,0.06), transparent 60%), linear-gradient(180deg, #14181a 0%, #0a0d0e 100%)',
        }}
      >
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={width}
            height={height}
            className="absolute inset-0 w-full h-full object-cover object-top"
            unoptimized
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <span className="font-hero font-black text-white/30 text-2xl">{initials}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Pick card
// ═══════════════════════════════════════════════════════════

function PickCard({ pick }: { pick: MmaBetiqPick }) {
  const meta = CLASSIFICATION_META[pick.classification];
  const hit = pick.prediction_correct;
  const winnerIsFighter1 = pick.actual_winner === pick.fighter1_name;

  return (
    <article
      className="relative overflow-hidden rounded-2xl p-5 group"
      style={{
        background: `linear-gradient(135deg, ${meta.bg} 0%, rgba(0,0,0,0.4) 100%)`,
        border: `1px solid ${meta.border}`,
        boxShadow: `0 6px 20px rgba(0,0,0,0.35), inset 0 1px 0 ${meta.border}`,
      }}
    >
      <GlowBlob color={meta.glow} size={180} position="-top-14 -right-14" opacity={0.5} />

      <div className="relative">
        <div className="flex items-center justify-between mb-4 gap-2">
          <span
            className={`inline-flex items-center gap-1.5 font-monoStat text-[10px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-md ${meta.text}`}
            style={{ backgroundColor: meta.bg, border: `1px solid ${meta.border}` }}
          >
            <span>{meta.icon}</span>
            {meta.label}
          </span>
          <div
            className={`inline-flex items-center gap-1 font-monoStat text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
              hit
                ? 'bg-emerald-400/10 border-emerald-400/40 text-emerald-400'
                : 'bg-red-400/10 border-red-400/40 text-red-400'
            }`}
          >
            {hit ? <Check size={11} /> : <X size={11} />}
            {hit ? 'Hit' : 'Miss'}
          </div>
        </div>

        <div className="mb-4">
          <p className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/40 mb-1">
            {pick.is_main_event ? 'Main Event · ' : ''}
            {pick.category}
            {pick.bonus ? <span className="text-amber-400 ml-2">· {pick.bonus}</span> : null}
          </p>
          <p className="font-hero font-black text-xl uppercase text-white leading-tight">
            {pick.bout}
          </p>
        </div>

        <div className="flex gap-3 mb-4">
          <div className="flex flex-col items-center gap-1 flex-1">
            <FighterPortrait name={pick.fighter1_name} photo={pick.fighter1_photo} size="md" />
            <p
              className={`text-xs font-bold leading-tight text-center ${
                winnerIsFighter1 ? 'text-emerald-400' : 'text-white/65'
              }`}
            >
              {pick.fighter1_name}
            </p>
            <p className="font-monoStat text-[10px] text-white/35">{pick.fighter1_record}</p>
          </div>
          <div className="flex items-center justify-center px-2">
            <span className="font-hero font-black text-2xl text-white/20">VS</span>
          </div>
          <div className="flex flex-col items-center gap-1 flex-1">
            <FighterPortrait name={pick.fighter2_name} photo={pick.fighter2_photo} size="md" />
            <p
              className={`text-xs font-bold leading-tight text-center ${
                !winnerIsFighter1 ? 'text-emerald-400' : 'text-white/65'
              }`}
            >
              {pick.fighter2_name}
            </p>
            <p className="font-monoStat text-[10px] text-white/35">{pick.fighter2_record}</p>
          </div>
        </div>

        <div className="rounded-xl p-3 mb-3 bg-black/30 border border-white/[0.04]">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/40">
              Our Pick
            </span>
            <span className="font-monoStat text-[9px] uppercase tracking-wider text-white/40">
              {pick.confidence_label}
            </span>
          </div>
          <p className="font-hero font-bold text-lg text-white leading-tight">{pick.pick}</p>
          <p className="text-[12px] text-white/55">{pick.predicted_method}</p>
        </div>

        <div className="rounded-xl p-3 mb-3 bg-black/20 border border-white/[0.04]">
          <span className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/40 block mb-1">
            Result
          </span>
          <p className="text-sm text-white/85 leading-snug">
            {pick.actual_winner} · {pick.actual_method}
            {pick.actual_round ? ` · R${pick.actual_round}` : ''}
            {pick.actual_time ? ` (${pick.actual_time})` : ''}
          </p>
          {pick.method_correct && hit ? (
            <p className="text-[11px] text-emerald-400/85 mt-1 flex items-center gap-1">
              <Check size={11} /> Method called correctly
            </p>
          ) : null}
        </div>

        {pick.one_liner ? (
          <p className="text-[12px] text-white/55 italic leading-relaxed">{pick.one_liner}</p>
        ) : null}
      </div>
    </article>
  );
}

function PickGridSection({ picks }: { picks: MmaBetiqPick[] }) {
  const main = picks.filter((p) => p.segment === 'main_card');
  const prelim = picks.filter((p) => p.segment === 'prelims');
  return (
    <section className="mb-14">
      <SectionTitle icon={Trophy} tag="Section 01" title="Pick" accent="Grid" />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-white/50 font-bold">
            Main Card · 4 fights
          </span>
          <span className="h-px flex-1 bg-white/[0.05]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {main.map((p) => (
            <PickCard key={p.fight_slug} pick={p} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-white/50 font-bold">
            Prelims · 7 fights
          </span>
          <span className="h-px flex-1 bg-white/[0.05]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prelim.map((p) => (
            <PickCard key={p.fight_slug} pick={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// Lock of the week (showcase card)
// ═══════════════════════════════════════════════════════════

function LockHero({ lock }: { lock: LockOfTheWeek }) {
  return (
    <section className="mb-14">
      <SectionTitle icon={Lock} tag="Section 02" title="Lock of the" accent="Week" />

      <div
        className="relative overflow-hidden rounded-3xl"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 20%, rgba(31,174,92,0.18), transparent 60%), linear-gradient(180deg, rgba(31,174,92,0.08) 0%, rgba(0,0,0,0.4) 100%)',
          border: '1px solid rgba(31,174,92,0.35)',
          boxShadow:
            '0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(31,174,92,0.25)',
        }}
      >
        <NoiseTexture />
        <CornerBrackets color="rgba(31,174,92,0.55)" />
        <GlowBlob color="rgba(31,174,92,0.30)" size={400} position="-top-24 -right-24" />
        <GlowBlob color="rgba(212,175,55,0.12)" size={280} position="-bottom-20 -left-20" />

        <div className="relative grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 p-8 md:p-12">
          <div className="flex flex-col items-center gap-3">
            <FighterPortrait
              name={lock.pick}
              photo={lock.fighter_photo}
              size="lg"
            />
            {lock.fighter_record ? (
              <p className="font-monoStat text-[11px] text-white/50 tracking-wider">
                {lock.fighter_record}
              </p>
            ) : null}
            <span className="inline-flex items-center gap-1.5 font-monoStat text-[10px] uppercase tracking-[0.25em] font-bold px-3 py-1.5 rounded-full bg-emerald-400/15 border border-emerald-400/40 text-emerald-400">
              <Crown size={11} /> Headline pick
            </span>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Lock size={14} className="text-emerald-400" />
              <p className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-emerald-400/85">
                {lock.bout}
              </p>
            </div>
            <h3 className="font-hero font-black text-4xl md:text-6xl uppercase text-white leading-[0.85] mb-2">
              {lock.pick}
            </h3>
            <p className="font-monoStat text-sm text-white/55 mb-6">{lock.predicted_method}</p>

            <div className="mb-6">
              <ConvictionBar value={lock.conviction_score} max={10} />
            </div>

            <div className="space-y-4 text-sm text-white/75 leading-relaxed">
              <div>
                <p className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1.5">
                  Why it was a Lock
                </p>
                <p>{lock.classification_reason}</p>
              </div>
              <div>
                <p className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1.5">
                  How it played
                </p>
                <p>{lock.actual_result}</p>
              </div>
              <p className="text-[12px] text-emerald-400/85 italic pt-3 border-t border-white/[0.06]">
                {lock.payoff_note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// Cycle parlay
// ═══════════════════════════════════════════════════════════

function CycleParlaySection({ parlay }: { parlay: CycleParlayCard }) {
  const status =
    parlay.status === 'hit'
      ? { color: 'text-emerald-400', bg: 'rgba(31,174,92,0.10)', border: 'rgba(31,174,92,0.40)', label: 'All legs cashed' }
      : parlay.status === 'partial'
        ? { color: 'text-amber-400', bg: 'rgba(245,158,11,0.10)', border: 'rgba(245,158,11,0.40)', label: 'Partial' }
        : { color: 'text-red-400', bg: 'rgba(248,113,113,0.10)', border: 'rgba(248,113,113,0.40)', label: 'Missed' };

  return (
    <section className="mb-14">
      <SectionTitle icon={Repeat} tag="Section 03" title="Method" accent="Combo Parlay" />

      <div
        className="relative overflow-hidden rounded-3xl p-8"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 100% 0%, rgba(212,175,55,0.10), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.4) 100%)',
          border: '1px solid rgba(255,255,255,0.10)',
          boxShadow: '0 10px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <GlowBlob color="rgba(212,175,55,0.18)" size={320} position="-top-20 -right-20" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
            <div>
              <p className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-hayjive-gold mb-1">
                {parlay.name}
              </p>
              <p className="text-base text-white/75 leading-relaxed max-w-3xl">{parlay.concept}</p>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 font-monoStat text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full ${status.color}`}
              style={{ backgroundColor: status.bg, border: `1px solid ${status.border}` }}
            >
              {parlay.status === 'hit' ? <Check size={11} /> : <X size={11} />}
              {status.label}
            </span>
          </div>

          <div className="space-y-3">
            {parlay.legs.map((leg, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl p-4 flex items-center gap-4"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.005) 100%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg shrink-0"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(210,10,10,0.20) 0%, rgba(212,175,55,0.10) 100%)',
                    border: '1px solid rgba(210,10,10,0.30)',
                  }}
                >
                  <span className="font-hero font-black text-xs text-ufc-red">
                    LEG{i + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-hayjive-gold font-bold">
                      {leg.method}
                    </span>
                    <span className="h-px flex-1 bg-white/[0.06]" />
                  </div>
                  <p className="font-hero font-bold text-lg text-white truncate">{leg.pick}</p>
                  <p className="text-[12px] text-white/45 truncate">
                    {leg.bout} · {leg.result}
                  </p>
                </div>
                <span
                  className={`font-monoStat text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                    leg.hit
                      ? 'bg-emerald-400/10 border-emerald-400/40 text-emerald-400'
                      : 'bg-red-400/10 border-red-400/40 text-red-400'
                  }`}
                >
                  {leg.hit ? 'HIT' : 'MISS'}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[13px] text-white/55 italic leading-relaxed">{parlay.note}</p>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// Fade of the week
// ═══════════════════════════════════════════════════════════

function FadeSection({ fade }: { fade: FadeOfWeekCard }) {
  return (
    <section className="mb-14">
      <SectionTitle icon={ShieldOff} tag="Section 04" title="Fade of the" accent="Week" />

      <div
        className="relative overflow-hidden rounded-3xl p-8 md:p-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 0% 0%, rgba(245,158,11,0.10), transparent 60%), linear-gradient(180deg, rgba(245,158,11,0.05) 0%, rgba(0,0,0,0.4) 100%)',
          border: '1px solid rgba(245,158,11,0.35)',
          boxShadow: '0 10px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(245,158,11,0.20)',
        }}
      >
        <GlowBlob color="rgba(245,158,11,0.20)" size={320} position="-top-24 -left-24" />

        <div className="relative">
          <p className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-amber-400/85 mb-2">
            {fade.bout}
          </p>
          <h3 className="font-hero font-black text-3xl md:text-4xl uppercase text-white mb-2 leading-tight">
            <span className="text-amber-400">Fade:</span> {fade.fade_target}
          </h3>

          <div className="space-y-4 text-sm text-white/75 leading-relaxed mt-6">
            <div>
              <p className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1.5">
                Why we warned
              </p>
              <p>{fade.why_we_warned}</p>
            </div>
            <div>
              <p className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1.5">
                Actual outcome
              </p>
              <p>{fade.actual_outcome}</p>
            </div>
            <p className="text-[12px] text-amber-400/85 italic pt-3 border-t border-white/[0.06]">
              {fade.lesson}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// Arena playbook
// ═══════════════════════════════════════════════════════════

function ArenaSection({ playbook }: { playbook: ArenaPlaybook }) {
  return (
    <section className="mb-14">
      <SectionTitle icon={Flame} tag="Section 05" title="Arena" accent="Playbook" />

      <div
        className="relative overflow-hidden rounded-3xl p-8 md:p-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(210,10,10,0.10), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.4) 100%)',
          border: '1px solid rgba(210,10,10,0.30)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(210,10,10,0.15)',
        }}
      >
        <GlowBlob color="rgba(210,10,10,0.20)" size={400} position="-top-32 -right-32" />

        <div className="relative">
          <p className="text-base text-white/85 mb-8 leading-relaxed max-w-3xl">{playbook.headline}</p>

          <div className="mb-8">
            <p className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-white/50 font-bold mb-4">
              The retention loop
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {playbook.loop_diagram.map((step, i) => (
                <div
                  key={i}
                  className="relative rounded-xl p-4"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(210,10,10,0.06) 0%, rgba(210,10,10,0.02) 100%)',
                    border: '1px solid rgba(210,10,10,0.20)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ufc-red/20 border border-ufc-red/40 font-hero font-black text-xs text-ufc-red shrink-0">
                      {i + 1}
                    </span>
                    {i < playbook.loop_diagram.length - 1 ? (
                      <ArrowRight size={14} className="text-ufc-red/40 hidden md:block" />
                    ) : null}
                  </div>
                  <p className="font-hero font-bold text-sm text-white leading-tight mb-1">
                    {step.step}
                  </p>
                  <p className="text-[11px] text-white/55 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div
              className="rounded-xl p-5"
              style={{
                background:
                  'linear-gradient(135deg, rgba(31,174,92,0.06) 0%, rgba(31,174,92,0.01) 100%)',
                border: '1px solid rgba(31,174,92,0.20)',
              }}
            >
              <p className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-emerald-400/85 mb-2 font-bold">
                💰 Pricing suggestion
              </p>
              <p className="text-sm text-white/75 leading-relaxed">{playbook.pricing_suggestion}</p>
            </div>
            <div
              className="rounded-xl p-5"
              style={{
                background:
                  'linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(212,175,55,0.01) 100%)',
                border: '1px solid rgba(212,175,55,0.20)',
              }}
            >
              <p className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-hayjive-gold mb-2 font-bold">
                🛠 Setup steps
              </p>
              <ol className="space-y-1.5">
                {playbook.setup_steps.map((step, i) => (
                  <li key={i} className="text-[12px] text-white/70 flex gap-2 leading-relaxed">
                    <span className="text-hayjive-gold shrink-0 font-bold">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div>
            <p className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-white/50 font-bold mb-4">
              Conversion templates
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {playbook.conversion_templates.map((tpl, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <p className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-ufc-red font-bold">
                      {tpl.scenario}
                    </p>
                    <CopyBtn text={tpl.copy} />
                  </div>
                  <p className="text-[12px] text-white/75 leading-relaxed whitespace-pre-line flex-1">
                    {tpl.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// Discord engine
// ═══════════════════════════════════════════════════════════

function DiscordSection({ engine }: { engine: DiscordEngine }) {
  return (
    <section className="mb-14">
      <SectionTitle icon={Megaphone} tag="Section 06" title="Discord" accent="Engine" />

      <div
        className="relative overflow-hidden rounded-3xl p-8 md:p-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 100% 100%, rgba(99,102,241,0.10), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.4) 100%)',
          border: '1px solid rgba(255,255,255,0.10)',
          boxShadow: '0 10px 32px rgba(0,0,0,0.3)',
        }}
      >
        <GlowBlob color="rgba(99,102,241,0.18)" size={320} position="-bottom-20 -right-20" />

        <div className="relative">
          <p className="text-base text-white/85 mb-8 leading-relaxed max-w-3xl">{engine.headline}</p>

          <div className="mb-8">
            <p className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-white/50 font-bold mb-4">
              IG → Discord hooks · {engine.ig_hooks.length} ready to post
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {engine.ig_hooks.map((hook, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex flex-col"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.005) 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                  }}
                >
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <span className="inline-flex items-center gap-1.5 font-monoStat text-[9px] uppercase tracking-[0.25em] text-ufc-red font-bold px-2 py-1 rounded-md bg-ufc-red/10 border border-ufc-red/25">
                      <Zap size={10} /> {hook.angle}
                    </span>
                    <CopyBtn text={`${hook.hook}\n\n${hook.body}\n\n${hook.cta}`} />
                  </div>
                  <p className="font-hero font-black text-lg text-white mb-2 leading-tight">
                    {hook.hook}
                  </p>
                  <p className="text-sm text-white/65 leading-relaxed mb-3 whitespace-pre-line flex-1">
                    {hook.body}
                  </p>
                  <p className="text-[12px] text-emerald-400/85 leading-snug pt-3 border-t border-white/[0.05]">
                    {hook.cta}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-6">
            <div
              className="rounded-xl p-5"
              style={{
                background:
                  'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(99,102,241,0.01) 100%)',
                border: '1px solid rgba(99,102,241,0.20)',
              }}
            >
              <p className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-indigo-400/85 mb-2 font-bold">
                💬 Discord pricing
              </p>
              <p className="text-[13px] text-white/75 leading-relaxed">{engine.discord_pricing_note}</p>
            </div>
            <div
              className="rounded-xl p-5"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.005) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-center justify-between mb-3 gap-2">
                <p className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">
                  📅 Weekly post template
                </p>
                <CopyBtn text={engine.weekly_post_template} />
              </div>
              <pre className="text-[12px] text-white/75 leading-relaxed whitespace-pre-wrap font-body">
                {engine.weekly_post_template}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// Call to action
// ═══════════════════════════════════════════════════════════

function CallToActionSection({ cta }: { cta: KitCallToAction }) {
  return (
    <section className="mb-8">
      <div
        className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(210,10,10,0.20), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,175,55,0.10), transparent 60%), linear-gradient(180deg, #0a0a0a 0%, #050807 100%)',
          border: '1px solid rgba(210,10,10,0.40)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(210,10,10,0.20)',
        }}
      >
        <NoiseTexture />
        <CornerBrackets color="rgba(210,10,10,0.65)" />
        <GlowBlob color="rgba(210,10,10,0.30)" size={500} position="-top-40 -right-40" />

        <div className="relative">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-ufc-red/15 border border-ufc-red/40 mb-5">
            <Send size={22} className="text-ufc-red" />
          </div>
          <h2 className="font-hero font-black text-4xl md:text-6xl uppercase text-white mb-4 leading-[0.85]">
            {cta.headline}
          </h2>
          <p className="text-base md:text-lg text-white/75 leading-relaxed mb-6 max-w-2xl mx-auto">
            {cta.body}
          </p>
          {cta.next_event_target ? (
            <p className="inline-flex items-center justify-center gap-2 font-monoStat text-sm text-emerald-400/90 mb-4 px-4 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30">
              <ArrowRight size={14} /> {cta.next_event_target}
            </p>
          ) : null}
          <p className="font-monoStat text-[11px] uppercase tracking-[0.3em] text-white/45">
            {cta.pricing_note}
          </p>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// Top-level view
// ═══════════════════════════════════════════════════════════

export function MmaBetiqKitView({ data }: { data: MmaBetiqKitData }) {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
        <KitHero meta={data.meta} track={data.track_record} />
        <TrackRecordStrip track={data.track_record} />
        <PickGridSection picks={data.pick_grid} />
        <LockHero lock={data.lock_of_the_week} />
        <CycleParlaySection parlay={data.cycle_parlay} />
        <FadeSection fade={data.fade_of_week} />
        <ArenaSection playbook={data.arena_playbook} />
        <DiscordSection engine={data.discord_engine} />
        <CallToActionSection cta={data.call_to_action} />
      </div>
    </div>
  );
}
