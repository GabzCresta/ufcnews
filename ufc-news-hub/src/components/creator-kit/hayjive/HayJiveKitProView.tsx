import Image from 'next/image';
import type { ReactNode } from 'react';

// ═══════════════════════════════════════════════════════════════
// HayJive Kit Pro v1 — full kit (15 sections)
// Visual register: deep editorial premium. Forest/black/gold.
// Big Shoulders Display for hero, JetBrains Mono for numbers, Inter for body.
// ═══════════════════════════════════════════════════════════════

// ─── Types ──────────────────────────────────────────────────────

export interface HayJiveProFighter {
  nome_completo: string;
  sobrenome: string;
  apelido?: string;
  record: string;
  ranking: string;
  info_extra: string;
  imagem_fullbody_url: string | null;
}

export interface HayJiveProHero {
  evento_nome: string;
  evento_data: string;
  evento_local: string;
  categoria_peso: string;
  tagline: string;
  fighter1: HayJiveProFighter;
  fighter2: HayJiveProFighter;
}

export interface HayJiveProCred {
  ytd_label: string;
  ytd_value: string;
  accuracy_label: string;
  accuracy_value: string;
  accuracy_sub: string;
  last_card_label: string;
  last_card_value: string;
  last_card_sub: string;
  tapology_url: string;
}

export interface HayJiveProLock {
  index: 1 | 2 | 3;
  pick: string;
  odds: string;
  fight: string;
  one_liner: string;
  fighter_thumb_url: string | null;
  fighter_name: string;
  conviction: number;
}

export interface CardOverviewFight {
  fight: string;
  pick: string;
  odds: string;
  conviction: number;
  status: 'lock' | 'slimeball' | 'cycle' | 'longshot' | 'fade' | 'pass';
  is_main: boolean;
}

export interface ParlayLeg {
  pick: string;
  odds: string;
  fight: string;
  conviction: number;
}

export interface ParlayData {
  name: string;
  flavor: string;
  legs: ParlayLeg[];
  combined_odds: string;
  thesis: string;
  r6_check: string;
}

export interface LongshotPick {
  pick: string;
  odds: string;
  fight: string;
  reasoning: string;
  conviction: number;
}

export interface LongshotsDropData {
  intro: string;
  picks: LongshotPick[];
}

export interface FadeData {
  title: string;
  fight: string;
  popular_take: string;
  why_public_likes_it: string;
  why_we_fade: string;
  alternative: string;
}

export interface ScorecardRound {
  round: number;
  winner: string;
  score: string;
  note: string;
}

export interface ScorecardData {
  fight: string;
  fighter1: string;
  fighter2: string;
  rounds: ScorecardRound[];
  total_f1: number;
  total_f2: number;
  predicted_finish: string | null;
  thesis: string;
}

export interface ColumnSectionData {
  kicker: string;
  title: string;
  subtitle: string;
  body_paragraphs: string[];
  pull_quote: string;
  byline: string;
}

export interface BigJiveSegment {
  topic: string;
  timestamp: string;
  hook: string;
  take: string;
  debate_prompt: string;
}

export interface BigJiveCoHostData {
  episode_intro: string;
  segments: BigJiveSegment[];
}

export interface IGSlideRef {
  slot: string;
  label: string;
  caption: string;
}

export interface IGCarouselData {
  intro: string;
  card_slug: string;
  slides: IGSlideRef[];
  full_caption: string;
  hashtags: string[];
}

export interface PickSheetRow {
  fight: string;
  pick: string;
  odds: string;
  conviction: number;
  slot: string;
}

export interface PickSheetData {
  rows: PickSheetRow[];
  unit_summary: string;
  underdog_code: string;
}

export type GimmeStatus =
  | { type: 'pass'; reason: string; bar: string }
  | {
      type: 'pick';
      pick: string;
      odds: string;
      fight: string;
      reasoning: string;
      conviction: number;
    };

export interface HayJiveKitProData {
  card_slug: string;
  hero: HayJiveProHero;
  card_overview: CardOverviewFight[];
  cred: HayJiveProCred;
  locks: HayJiveProLock[];
  slimeball: ParlayData;
  cycle: ParlayData;
  gimme: GimmeStatus;
  longshots: LongshotsDropData;
  fade: FadeData;
  scorecard: ScorecardData;
  column: ColumnSectionData;
  bigjive: BigJiveCoHostData;
  ig_carousel: IGCarouselData;
  pick_sheet: PickSheetData;
}

// ─── Wordmark ──────────────────────────────────────────────────
function Wordmark() {
  return (
    <div className="flex items-center gap-3 select-none">
      <span className="font-monoStat text-[10px] uppercase tracking-[0.4em] text-hayjive-gold/70">[001]</span>
      <span className="h-px w-6 bg-hayjive-gold/30" />
      <span className="font-hero font-black text-xl md:text-2xl tracking-tight uppercase text-white">
        HAYJIVE<span className="text-hayjive-gold">·</span>PICKS
      </span>
      <span className="h-px w-6 bg-hayjive-gold/30" />
      <span className="font-monoStat text-[10px] uppercase tracking-[0.4em] text-white/30 hidden md:inline">
        CARD KIT
      </span>
    </div>
  );
}

// ─── Sticky Section Nav ────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'overview', label: 'CARD' },
  { id: 'cred', label: 'CRED' },
  { id: 'locks', label: 'LOCKS' },
  { id: 'slimeball', label: 'SLIMEBALL' },
  { id: 'cycle', label: 'CYCLE' },
  { id: 'gimme', label: 'GIMME' },
  { id: 'longshots', label: 'LONGSHOTS' },
  { id: 'fade', label: 'FADE' },
  { id: 'scorecard', label: 'CARD' },
  { id: 'column', label: 'COLUMN' },
  { id: 'ig', label: 'IG' },
  { id: 'sheet', label: 'SHEET' },
];

function StickyNav() {
  return (
    <nav
      aria-label="Kit sections"
      className="sticky top-0 z-40 backdrop-blur-md bg-hayjive-bg/85 border-b border-white/[0.05]"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 overflow-x-auto">
        <ul className="flex items-center gap-1 md:gap-2 py-3 whitespace-nowrap">
          {NAV_ITEMS.map((it, i) => (
            <li key={it.id} className="flex items-center">
              <a
                href={`#${it.id}`}
                className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/45 hover:text-hayjive-gold transition-colors px-2 py-1"
              >
                {String(i + 1).padStart(2, '0')} {it.label}
              </a>
              {i < NAV_ITEMS.length - 1 && (
                <span className="text-hayjive-gold/20 text-[8px]">·</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────
function Hero({ hero }: { hero: HayJiveProHero }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hayjive-bg" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(31,174,92,0.20), transparent 60%),
            radial-gradient(ellipse 60% 40% at 50% 110%, rgba(212,175,55,0.10), transparent 70%)
          `,
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-hex-pattern opacity-[0.6]" />

      <div className="container mx-auto max-w-7xl px-6 pt-12 pb-24 md:pt-16 md:pb-32">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Wordmark />
          <div className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40">
            VOL. 01 · v{new Date().toISOString().slice(2, 10).replace(/-/g, '.')}
          </div>
        </div>

        <div className="mt-16 md:mt-20 flex items-center gap-3 flex-wrap">
          <span className="font-monoStat text-[11px] uppercase tracking-[0.35em] text-hayjive-gold">
            {hero.evento_nome}
          </span>
          <span className="text-hayjive-gold/40">·</span>
          <span className="font-monoStat text-[11px] uppercase tracking-[0.3em] text-white/50">
            {hero.evento_data}
          </span>
          <span className="text-hayjive-gold/40">·</span>
          <span className="font-monoStat text-[11px] uppercase tracking-[0.3em] text-white/50">
            {hero.evento_local}
          </span>
          <span className="text-hayjive-gold/40">·</span>
          <span className="font-monoStat text-[11px] uppercase tracking-[0.3em] text-white/50">
            {hero.categoria_peso}
          </span>
        </div>

        <div className="mt-8 md:mt-10">
          <h1 className="font-hero font-black uppercase tracking-[-0.02em] leading-[0.82]">
            <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white">
              {hero.fighter1.sobrenome}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl mt-2 md:mt-3">
              <span className="text-hayjive-gold">VS</span>
              <span className="ml-4 md:ml-6 text-white">{hero.fighter2.sobrenome}</span>
            </span>
          </h1>
          <p className="mt-8 max-w-2xl font-body text-base md:text-lg text-white/55 leading-relaxed italic">
            {hero.tagline}
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 gap-4 md:gap-12">
          <FighterColumn fighter={hero.fighter1} side="f1" />
          <FighterColumn fighter={hero.fighter2} side="f2" />
        </div>
      </div>
    </section>
  );
}

function FighterColumn({ fighter, side }: { fighter: HayJiveProFighter; side: 'f1' | 'f2' }) {
  const accent = side === 'f1' ? 'text-hayjive-emerald' : 'text-hayjive-gold';
  const accentRgba = side === 'f1' ? '31,174,92' : '212,175,55';

  return (
    <div className="flex flex-col items-center gap-5">
      <div
        className="hayjive-portrait-frame relative w-full max-w-[300px] aspect-[4/5] rounded-xl p-[3px]"
        style={{
          background: `linear-gradient(155deg, rgba(${accentRgba},0.55) 0%, rgba(212,175,55,0.25) 35%, rgba(0,0,0,0.4) 100%)`,
        }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-[10px] bg-hayjive-card">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 20%, rgba(${accentRgba},0.18) 0%, transparent 60%), linear-gradient(180deg, #0E1311 0%, #050807 100%)`,
            }}
          />
          {fighter.imagem_fullbody_url && (
            <Image
              src={fighter.imagem_fullbody_url}
              alt={fighter.nome_completo}
              fill
              sizes="(max-width: 768px) 45vw, 300px"
              quality={95}
              priority
              className="object-cover object-top"
              unoptimized
            />
          )}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div
            className="absolute inset-0 rounded-[10px] pointer-events-none"
            style={{
              boxShadow: `
                inset 0 1px 0 rgba(212,175,55,0.35),
                inset 0 -1px 0 rgba(0,0,0,0.6),
                inset 1px 0 0 rgba(255,255,255,0.04),
                inset -1px 0 0 rgba(0,0,0,0.5)
              `,
            }}
          />
        </div>
        <span className="absolute top-1.5 left-1.5 h-2 w-2 border-t border-l border-hayjive-gold/70 pointer-events-none" />
        <span className="absolute top-1.5 right-1.5 h-2 w-2 border-t border-r border-hayjive-gold/70 pointer-events-none" />
        <span className="absolute bottom-1.5 left-1.5 h-2 w-2 border-b border-l border-hayjive-gold/70 pointer-events-none" />
        <span className="absolute bottom-1.5 right-1.5 h-2 w-2 border-b border-r border-hayjive-gold/70 pointer-events-none" />
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <span className={`font-monoStat text-[10px] uppercase tracking-[0.3em] ${accent}`}>
          {fighter.ranking}
        </span>
        <span className="font-hero font-black text-2xl md:text-3xl uppercase leading-none tracking-tight text-white">
          {fighter.sobrenome}
        </span>
        <div className="flex items-center gap-3 font-monoStat text-[11px] uppercase tracking-[0.2em] text-white/40">
          <span>{fighter.record}</span>
          <span className="text-hayjive-gold/40">·</span>
          <span>{fighter.info_extra}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Section Header (reusable) ─────────────────────────────────
function SectionHeader({
  number,
  eyebrow,
  title,
  subtitle,
}: {
  number: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="border-t border-white/[0.06] pt-8">
      <div className="flex items-baseline gap-4 mb-3">
        <span className="font-monoStat text-[10px] uppercase tracking-[0.4em] text-hayjive-gold">
          [{number}]
        </span>
        <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-white/40">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-hero font-black uppercase tracking-tight leading-none">
        <span className="text-4xl md:text-6xl text-white">{title}</span>
        {subtitle && <span className="text-4xl md:text-6xl text-hayjive-gold ml-3">{subtitle}</span>}
      </h2>
    </div>
  );
}

function SectionWrap({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="container mx-auto max-w-7xl px-6 mt-20 md:mt-28 scroll-mt-24">
      {children}
    </section>
  );
}

// ─── Card Overview Grid ────────────────────────────────────────
function CardOverviewSection({ fights }: { fights: CardOverviewFight[] }) {
  return (
    <SectionWrap id="overview">
      <SectionHeader number="01" eyebrow="THE WHOLE CARD AT A GLANCE" title="THE" subtitle="CARD" />
      <p className="mt-4 max-w-3xl font-body text-sm text-white/50 leading-relaxed">
        Every fight on the card mapped to where it lands in the kit. Conviction is the analyst&rsquo;s defense of the thesis (1-10).
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {fights.map((f, i) => (
          <CardOverviewTile key={i} fight={f} />
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 font-monoStat text-[10px] uppercase tracking-[0.25em] text-white/40">
        <LegendDot color="emerald" label="Lock" />
        <LegendDot color="gold" label="Parlay leg" />
        <LegendDot color="white" label="Longshot / Fade" />
        <LegendDot color="muted" label="Pass" />
      </div>
    </SectionWrap>
  );
}

function CardOverviewTile({ fight }: { fight: CardOverviewFight }) {
  const tone =
    fight.status === 'lock'
      ? 'border-hayjive-emerald/40 bg-hayjive-emerald/[0.04]'
      : fight.status === 'slimeball' || fight.status === 'cycle'
      ? 'border-hayjive-gold/30 bg-hayjive-gold/[0.03]'
      : fight.status === 'longshot' || fight.status === 'fade'
      ? 'border-white/10'
      : 'border-white/[0.04] opacity-60';

  const statusLabel = {
    lock: 'LOCK',
    slimeball: 'SLIMEBALL',
    cycle: 'CYCLE',
    longshot: 'LONGSHOT',
    fade: 'FADE',
    pass: 'PASS',
  }[fight.status];

  const statusColor = {
    lock: 'text-hayjive-emerald',
    slimeball: 'text-hayjive-gold',
    cycle: 'text-hayjive-gold',
    longshot: 'text-white/70',
    fade: 'text-white/70',
    pass: 'text-white/30',
  }[fight.status];

  return (
    <div className={`rounded-lg border p-4 ${tone}`}>
      <div className="flex items-start justify-between gap-2">
        <span className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/40">
          {fight.fight}
          {fight.is_main && <span className="ml-2 text-hayjive-gold">★ MAIN</span>}
        </span>
        <span className={`font-monoStat text-[9px] uppercase tracking-[0.3em] ${statusColor}`}>
          {statusLabel}
        </span>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <span className="font-hero font-bold text-lg uppercase tracking-tight text-white truncate">
          {fight.pick}
        </span>
        <span className="font-monoStat text-sm text-hayjive-gold">{fight.odds}</span>
      </div>
      <div className="mt-2 h-[3px] w-full rounded-full bg-white/[0.05] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${fight.conviction * 10}%`,
            background:
              fight.conviction >= 7
                ? 'linear-gradient(90deg,#1FAE5C 0%,#D4AF37 100%)'
                : 'linear-gradient(90deg,#5a5a5a 0%,#888 100%)',
          }}
        />
      </div>
      <span className="mt-1 block font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/35">
        CONVICTION {fight.conviction}/10
      </span>
    </div>
  );
}

function LegendDot({ color, label }: { color: 'emerald' | 'gold' | 'white' | 'muted'; label: string }) {
  const dotColor = {
    emerald: 'bg-hayjive-emerald',
    gold: 'bg-hayjive-gold',
    white: 'bg-white/70',
    muted: 'bg-white/20',
  }[color];
  return (
    <span className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${dotColor}`} />
      <span>{label}</span>
    </span>
  );
}

// ─── Cred Card ──────────────────────────────────────────────────
function CredCard({ cred }: { cred: HayJiveProCred }) {
  return (
    <section
      id="cred"
      className="container mx-auto max-w-7xl px-6 mt-20 md:mt-28 relative z-10 scroll-mt-24"
    >
      <div className="hayjive-deep-card rounded-3xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-hayjive-gold animate-pulse" />
            <span className="font-monoStat text-[10px] uppercase tracking-[0.4em] text-hayjive-gold">
              TRUSTED HANDICAPPER
            </span>
          </div>
          <a
            href={cred.tapology_url}
            target="_blank"
            rel="noreferrer"
            className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-hayjive-gold transition-colors"
          >
            VIEW TAPOLOGY ↗
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <CredTile
            label={cred.ytd_label}
            value={cred.ytd_value}
            sub="UNITS PROFIT"
            tone="emerald"
          />
          <CredTile
            label={cred.accuracy_label}
            value={cred.accuracy_value}
            sub={cred.accuracy_sub}
            tone="gold"
          />
          <CredTile
            label={cred.last_card_label}
            value={cred.last_card_value}
            sub={cred.last_card_sub}
            tone="emerald"
          />
        </div>
      </div>
    </section>
  );
}

function CredTile({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone: 'emerald' | 'gold';
}) {
  const valueColor = tone === 'emerald' ? 'text-hayjive-emerald' : 'text-hayjive-gold';
  return (
    <div className="hayjive-stat-tile rounded-2xl p-5 md:p-6 relative overflow-hidden">
      <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-white/40 mb-3 block">
        {label}
      </span>
      <span className={`font-monoStat font-bold text-3xl md:text-5xl leading-none tracking-tight ${valueColor}`}>
        {value}
      </span>
      <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/35 mt-3 block">
        {sub}
      </span>
      <div
        className="absolute top-0 right-0 h-12 w-12 pointer-events-none"
        style={{
          background:
            tone === 'gold'
              ? 'radial-gradient(circle at top right, rgba(212,175,55,0.15), transparent 70%)'
              : 'radial-gradient(circle at top right, rgba(31,174,92,0.12), transparent 70%)',
        }}
      />
    </div>
  );
}

// ─── Locks Section ──────────────────────────────────────────────
function LocksSection({ locks }: { locks: HayJiveProLock[] }) {
  return (
    <SectionWrap id="locks">
      <SectionHeader number="03" eyebrow="HIGHEST CONVICTION" title="THREE LOCKS" subtitle="EACH" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-10">
        {locks.map((lock) => (
          <LockCard key={lock.index} lock={lock} />
        ))}
      </div>
    </SectionWrap>
  );
}

function LockCard({ lock }: { lock: HayJiveProLock }) {
  const isLead = lock.index === 1;
  return (
    <article className="hayjive-deep-card rounded-2xl p-6 md:p-7 relative overflow-hidden flex flex-col group">
      <header className="flex items-start justify-between mb-5">
        <div className="flex flex-col gap-1">
          <span className="font-monoStat text-[10px] uppercase tracking-[0.4em] text-hayjive-gold">
            LOCK · 0{lock.index}
          </span>
          {isLead && (
            <span className="font-monoStat text-[9px] uppercase tracking-[0.35em] text-hayjive-gold/60">
              ★ HEADLINE PICK
            </span>
          )}
        </div>
        <div className="text-right">
          <span className="font-monoStat font-bold text-2xl md:text-3xl tracking-tight text-hayjive-gold leading-none">
            {lock.odds}
          </span>
          <span className="block font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/30 mt-1">
            DK / FD
          </span>
        </div>
      </header>

      <div className="mb-4">
        <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/35 block mb-2">
          {lock.fight}
        </span>
        <h3 className="font-hero font-black text-2xl md:text-3xl uppercase leading-tight tracking-tight text-white">
          {lock.pick}
        </h3>
      </div>

      <p className="font-body text-[13px] text-white/65 leading-relaxed mb-5 flex-1">
        {lock.one_liner}
      </p>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/35">
            CONVICTION
          </span>
          <span className="font-monoStat text-[10px] tracking-tight text-hayjive-emerald font-bold">
            {lock.conviction}/10
          </span>
        </div>
        <div className="h-1 w-full rounded-full bg-white/[0.04] overflow-hidden relative">
          <div
            className="h-full rounded-full"
            style={{
              width: `${lock.conviction * 10}%`,
              background: 'linear-gradient(90deg, #1FAE5C 0%, #D4AF37 100%)',
              boxShadow: '0 0 12px rgba(31,174,92,0.4)',
            }}
          />
        </div>
      </div>

      <footer className="flex items-center gap-4 pt-5 border-t border-white/[0.05]">
        {lock.fighter_thumb_url ? (
          <div
            className="relative h-14 w-14 rounded-md overflow-hidden flex-shrink-0 p-[2px]"
            style={{
              background:
                'linear-gradient(155deg, rgba(212,175,55,0.55) 0%, rgba(31,174,92,0.25) 60%, rgba(0,0,0,0.4) 100%)',
            }}
          >
            <div
              className="relative h-full w-full rounded-[5px] overflow-hidden"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(212,175,55,0.18) 0%, transparent 60%), linear-gradient(180deg, #0E1311 0%, #050807 100%)',
              }}
            >
              <Image
                src={lock.fighter_thumb_url}
                alt={lock.fighter_name}
                fill
                sizes="56px"
                quality={90}
                className="object-cover"
                style={{ objectPosition: '50% 8%' }}
                unoptimized
              />
              <div
                className="absolute inset-0 pointer-events-none rounded-[5px]"
                style={{
                  boxShadow:
                    'inset 0 1px 0 rgba(212,175,55,0.35), inset 0 -1px 0 rgba(0,0,0,0.6)',
                }}
              />
            </div>
          </div>
        ) : (
          <div className="h-14 w-14 rounded-md border border-hayjive-gold/30 bg-hayjive-card flex-shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40 block leading-none mb-1">
            ANCHOR
          </span>
          <span className="font-hero font-bold text-base uppercase tracking-tight text-white truncate block leading-none">
            {lock.fighter_name}
          </span>
        </div>
      </footer>

      <div
        className="absolute -top-12 -right-12 h-32 w-32 pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)',
        }}
      />
    </article>
  );
}

// ─── Parlay Section (shared between Slimeball + Cycle) ─────────
function ParlaySection({
  id,
  number,
  eyebrow,
  title,
  subtitle,
  parlay,
  tone,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  parlay: ParlayData;
  tone: 'emerald' | 'gold';
}) {
  const accentColor = tone === 'emerald' ? '#1FAE5C' : '#D4AF37';
  return (
    <SectionWrap id={id}>
      <SectionHeader number={number} eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 hayjive-deep-card rounded-2xl p-6 md:p-7">
          <div className="flex items-baseline justify-between mb-5 gap-3 flex-wrap">
            <h3 className="font-hero font-black text-2xl md:text-3xl uppercase tracking-tight text-white">
              {parlay.name}
            </h3>
            <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40">
              {parlay.flavor}
            </span>
          </div>
          <ol className="flex flex-col gap-3">
            {parlay.legs.map((leg, i) => (
              <ParlayLegRow key={i} leg={leg} number={i + 1} accentColor={accentColor} />
            ))}
          </ol>
          <p className="mt-6 font-body text-[13px] text-white/55 leading-relaxed border-t border-white/[0.05] pt-5">
            {parlay.thesis}
          </p>
        </div>

        <aside className="hayjive-stat-tile rounded-2xl p-6 flex flex-col">
          <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-white/40 mb-2">
            COMBINED ODDS
          </span>
          <span
            className="font-monoStat font-black text-5xl md:text-6xl leading-none tracking-tight"
            style={{ color: accentColor }}
          >
            {parlay.combined_odds}
          </span>
          <span className="mt-3 font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/30">
            {parlay.legs.length} LEGS · DK CONVERSION
          </span>
          <div className="mt-auto pt-6 border-t border-white/[0.05]">
            <span className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-hayjive-gold mb-2 block">
              R6 GATE AUDIT
            </span>
            <p className="font-body text-[11px] text-white/50 leading-relaxed">
              {parlay.r6_check}
            </p>
          </div>
        </aside>
      </div>
    </SectionWrap>
  );
}

function ParlayLegRow({
  leg,
  number,
  accentColor,
}: {
  leg: ParlayLeg;
  number: number;
  accentColor: string;
}) {
  return (
    <li className="flex items-center gap-4 p-4 rounded-lg border border-white/[0.04] bg-white/[0.015]">
      <span
        className="font-monoStat font-bold text-sm tracking-tight w-7 h-7 flex items-center justify-center rounded-md"
        style={{ background: `${accentColor}20`, color: accentColor }}
      >
        {number}
      </span>
      <div className="flex-1 min-w-0">
        <span className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/35 block leading-none mb-1">
          {leg.fight}
        </span>
        <span className="font-hero font-bold text-base md:text-lg uppercase tracking-tight text-white block truncate">
          {leg.pick}
        </span>
      </div>
      <div className="flex flex-col items-end flex-shrink-0">
        <span className="font-monoStat font-bold text-base md:text-lg tracking-tight text-hayjive-gold">
          {leg.odds}
        </span>
        <span className="font-monoStat text-[9px] uppercase tracking-[0.25em] text-white/35">
          conv {leg.conviction}
        </span>
      </div>
    </li>
  );
}

// ─── Gimme Section ─────────────────────────────────────────────
function GimmeSection({ gimme }: { gimme: GimmeStatus }) {
  return (
    <SectionWrap id="gimme">
      <SectionHeader number="06" eyebrow="ONE PICK · UNDERDOG CODE HAYJIVE" title="THE" subtitle="GIMME" />
      <div className="mt-10">
        {gimme.type === 'pass' ? <GimmePassCard reason={gimme.reason} bar={gimme.bar} /> : <GimmePickCard {...gimme} />}
      </div>
    </SectionWrap>
  );
}

function GimmePassCard({ reason, bar }: { reason: string; bar: string }) {
  return (
    <div className="hayjive-deep-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <span className="font-monoStat text-[10px] uppercase tracking-[0.4em] text-hayjive-gold mb-3 block">
            STATUS · PASS THIS WEEK
          </span>
          <h3 className="font-hero font-black text-4xl md:text-6xl uppercase leading-none tracking-tight text-white mb-4">
            NO GIMME
            <br />
            <span className="text-hayjive-gold">THIS CARD</span>
          </h3>
          <p className="font-body text-sm md:text-base text-white/65 leading-relaxed mb-4">
            {reason}
          </p>
          <p className="font-body text-[13px] text-white/45 leading-relaxed italic border-l-2 border-hayjive-gold/30 pl-4">
            An empty Gimme slot is infinitely better than a Gimme on a structurally weak pick. Discipline over volume.
          </p>
        </div>
        <div className="hayjive-stat-tile rounded-xl p-5 flex flex-col">
          <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-white/40 mb-3">
            GIMME BAR (R6)
          </span>
          <p className="font-body text-[12px] text-white/60 leading-relaxed flex-1">{bar}</p>
          <a
            href="https://underdogfantasy.com"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-between gap-2 px-4 py-3 rounded-md bg-hayjive-gold/10 border border-hayjive-gold/30 hover:bg-hayjive-gold/15 transition-colors"
          >
            <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-hayjive-gold">
              CODE: HAYJIVE
            </span>
            <span className="font-monoStat text-[10px] uppercase text-white/50">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function GimmePickCard({
  pick,
  odds,
  fight,
  reasoning,
  conviction,
}: {
  pick: string;
  odds: string;
  fight: string;
  reasoning: string;
  conviction: number;
}) {
  return (
    <div className="hayjive-deep-card rounded-2xl p-8 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/35 block mb-2">
            {fight}
          </span>
          <h3 className="font-hero font-black text-4xl md:text-5xl uppercase leading-tight tracking-tight text-white mb-4">
            {pick}
          </h3>
          <p className="font-body text-[14px] text-white/65 leading-relaxed">{reasoning}</p>
        </div>
        <div className="hayjive-stat-tile rounded-xl p-5 flex flex-col items-center">
          <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-white/40 mb-2">
            ODDS
          </span>
          <span className="font-monoStat font-black text-5xl text-hayjive-gold">{odds}</span>
          <span className="font-monoStat text-[10px] tracking-tight text-hayjive-emerald font-bold mt-3">
            CONV {conviction}/10
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Longshots Only ────────────────────────────────────────────
function LongshotsSection({ data }: { data: LongshotsDropData }) {
  return (
    <SectionWrap id="longshots">
      <SectionHeader number="07" eyebrow="DOG PLAYS · LONGSHOTS ONLY SHOW" title="THE" subtitle="DROP" />
      <p className="mt-4 max-w-2xl font-body text-sm text-white/55 leading-relaxed">{data.intro}</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.picks.map((p, i) => (
          <LongshotCard key={i} pick={p} />
        ))}
      </div>
    </SectionWrap>
  );
}

function LongshotCard({ pick }: { pick: LongshotPick }) {
  return (
    <div className="hayjive-deep-card rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-white/35">
          {pick.fight}
        </span>
        <span className="font-monoStat font-bold text-lg text-hayjive-gold">{pick.odds}</span>
      </div>
      <h3 className="font-hero font-bold text-xl uppercase leading-tight tracking-tight text-white mb-3">
        {pick.pick}
      </h3>
      <p className="font-body text-[12px] text-white/55 leading-relaxed">{pick.reasoning}</p>
      <span className="mt-3 inline-block font-monoStat text-[9px] uppercase tracking-[0.3em] text-hayjive-emerald">
        CONV {pick.conviction}/10
      </span>
    </div>
  );
}

// ─── Fade of Week ──────────────────────────────────────────────
function FadeSection({ fade }: { fade: FadeData }) {
  return (
    <SectionWrap id="fade">
      <SectionHeader number="08" eyebrow="DON'T TAIL THE PUBLIC" title="FADE" subtitle="OF WEEK" />
      <div className="mt-10 hayjive-deep-card rounded-2xl p-8 relative overflow-hidden">
        <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/35 block mb-2">
          {fade.fight}
        </span>
        <h3 className="font-hero font-black text-3xl md:text-5xl uppercase leading-[1.05] tracking-tight text-white mb-6">
          <span className="text-hayjive-gold mr-2">FADE:</span>
          <span className="block sm:inline">{fade.title}</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeBlock label="THE POPULAR TAKE" body={fade.popular_take} />
          <FadeBlock label="WHY PUBLIC LIKES IT" body={fade.why_public_likes_it} />
          <FadeBlock label="WHY WE FADE" body={fade.why_we_fade} accent />
        </div>
        <div className="mt-6 pt-6 border-t border-white/[0.05]">
          <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-hayjive-emerald mb-2 block">
            WHAT WE'D TAKE INSTEAD
          </span>
          <p className="font-body text-[14px] text-white/70 leading-relaxed">{fade.alternative}</p>
        </div>
      </div>
    </SectionWrap>
  );
}

function FadeBlock({ label, body, accent }: { label: string; body: string; accent?: boolean }) {
  return (
    <div className={`p-4 rounded-lg ${accent ? 'bg-hayjive-gold/[0.05] border border-hayjive-gold/20' : 'bg-white/[0.02]'}`}>
      <span className={`font-monoStat text-[10px] uppercase tracking-[0.3em] mb-2 block ${accent ? 'text-hayjive-gold' : 'text-white/40'}`}>
        {label}
      </span>
      <p className="font-body text-[12px] text-white/65 leading-relaxed">{body}</p>
    </div>
  );
}

// ─── Round-by-Round Scorecard ──────────────────────────────────
function ScorecardSection({ scorecard }: { scorecard: ScorecardData }) {
  return (
    <SectionWrap id="scorecard">
      <SectionHeader number="09" eyebrow="MAIN EVENT · HOW IT GOES ROUND BY ROUND" title="THE" subtitle="SCORECARD" />
      <div className="mt-10 hayjive-deep-card rounded-2xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <h3 className="font-hero font-black text-2xl md:text-3xl uppercase tracking-tight text-white">
            {scorecard.fight}
          </h3>
          <div className="flex items-center gap-4">
            <ScoreTotal name={scorecard.fighter1} score={scorecard.total_f1} winner={scorecard.total_f1 > scorecard.total_f2} />
            <span className="text-hayjive-gold/50 text-2xl font-mono">·</span>
            <ScoreTotal name={scorecard.fighter2} score={scorecard.total_f2} winner={scorecard.total_f2 > scorecard.total_f1} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {scorecard.rounds.map((r) => (
            <ScoreRound key={r.round} round={r} />
          ))}
        </div>
        <p className="mt-6 font-body text-[13px] text-white/55 leading-relaxed border-t border-white/[0.05] pt-5">
          {scorecard.thesis}
        </p>
        {scorecard.predicted_finish && (
          <p className="mt-3 font-monoStat text-[10px] uppercase tracking-[0.3em] text-hayjive-gold">
            ★ FINISH PROJECTION: {scorecard.predicted_finish}
          </p>
        )}
      </div>
    </SectionWrap>
  );
}

function ScoreTotal({ name, score, winner }: { name: string; score: number; winner: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <span className={`font-hero font-black text-3xl md:text-5xl leading-none tracking-tight ${winner ? 'text-hayjive-gold' : 'text-white/40'}`}>
        {score}
      </span>
      <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40 mt-2">
        {name}
      </span>
    </div>
  );
}

function ScoreRound({ round }: { round: ScorecardRound }) {
  return (
    <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-hayjive-gold">
          R{round.round}
        </span>
        <span className="font-monoStat font-bold text-base text-white">{round.score}</span>
      </div>
      <span className="font-hero font-bold text-base uppercase tracking-tight text-white block mb-2">
        {round.winner}
      </span>
      <p className="font-body text-[11px] text-white/55 leading-relaxed">{round.note}</p>
    </div>
  );
}

// ─── Home of Fight Column ──────────────────────────────────────
function ColumnSection({ column }: { column: ColumnSectionData }) {
  return (
    <SectionWrap id="column">
      <SectionHeader number="10" eyebrow={column.kicker} title="HOME OF" subtitle="FIGHT" />
      <article className="mt-10 hayjive-deep-card rounded-2xl p-8 md:p-12 max-w-4xl">
        <h3 className="font-hero font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight text-white mb-3">
          {column.title}
        </h3>
        <p className="font-body text-base md:text-lg text-hayjive-gold/80 italic mb-8">
          {column.subtitle}
        </p>
        <div className="space-y-5">
          {column.body_paragraphs.map((para, i) => (
            <p key={i} className="font-body text-[15px] md:text-base text-white/75 leading-[1.8]">
              {para}
            </p>
          ))}
        </div>
        <blockquote className="mt-10 pl-6 border-l-2 border-hayjive-gold">
          <p className="font-hero font-bold text-2xl md:text-3xl uppercase leading-tight tracking-tight text-white">
            &ldquo;{column.pull_quote}&rdquo;
          </p>
        </blockquote>
        <footer className="mt-10 pt-6 border-t border-white/[0.05] flex items-center justify-between gap-4 flex-wrap">
          <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40">
            {column.byline}
          </span>
          <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-hayjive-gold">
            HOME OF FIGHT · WEEKLY
          </span>
        </footer>
      </article>
    </SectionWrap>
  );
}

// ─── BigJive Co-Host Pack ──────────────────────────────────────
function BigJiveSection({ data }: { data: BigJiveCoHostData }) {
  return (
    <SectionWrap id="bigjive">
      <SectionHeader number="11" eyebrow="OPEN ON IPAD WHILE RECORDING" title="BIGJIVE" subtitle="CO-HOST" />
      <p className="mt-4 max-w-3xl font-body text-sm text-white/55 leading-relaxed">{data.episode_intro}</p>
      <div className="mt-10 flex flex-col gap-3">
        {data.segments.map((seg, i) => (
          <BigJiveRow key={i} segment={seg} index={i + 1} />
        ))}
      </div>
    </SectionWrap>
  );
}

function BigJiveRow({ segment, index }: { segment: BigJiveSegment; index: number }) {
  return (
    <div className="hayjive-deep-card rounded-xl p-5">
      <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4">
        <div className="flex md:flex-col gap-3 md:gap-2 items-center md:items-start">
          <span className="font-monoStat font-bold text-2xl text-hayjive-gold leading-none">
            {String(index).padStart(2, '0')}
          </span>
          <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40">
            {segment.timestamp}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h4 className="font-hero font-bold text-lg md:text-xl uppercase tracking-tight text-white">
              {segment.topic}
            </h4>
            <span className="font-body text-[12px] text-hayjive-emerald italic">{segment.hook}</span>
          </div>
          <p className="font-body text-[13px] text-white/65 leading-relaxed">{segment.take}</p>
          <div className="flex items-start gap-2 mt-1 pt-3 border-t border-white/[0.05]">
            <span className="font-monoStat text-[9px] uppercase tracking-[0.3em] text-hayjive-gold mt-0.5 flex-shrink-0">
              DEBATE →
            </span>
            <span className="font-body text-[12px] text-white/55 italic">{segment.debate_prompt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── IG Carousel ───────────────────────────────────────────────
function IGCarouselSection({ data }: { data: IGCarouselData }) {
  const total = data.slides.length;
  return (
    <SectionWrap id="ig">
      <SectionHeader number="12" eyebrow="DOWNLOAD-READY · 1080×1350 PNG" title="IG" subtitle="CARROUSEL" />
      <p className="mt-4 max-w-3xl font-body text-sm text-white/55 leading-relaxed">{data.intro}</p>

      {/* Slides container — outer frame with carousel meta header */}
      <div className="mt-10 hayjive-deep-card rounded-2xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-hayjive-gold">
              ★ CARROUSEL · {String(total).padStart(2, '0')} SLIDES
            </span>
            <span className="font-monoStat text-[10px] text-white/35">·</span>
            <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40">
              1080 × 1350 · IG PORTRAIT
            </span>
          </div>
          <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/40">
            CLICK TILE → OPEN PNG → SAVE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {data.slides.map((slide, i) => (
            <IGSlideTile
              key={slide.slot}
              slide={slide}
              cardSlug={data.card_slug}
              index={i + 1}
              total={total}
            />
          ))}
        </div>
      </div>

      {/* Post copy block — separate framed area for caption + hashtags */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-3 hayjive-deep-card rounded-2xl p-6 md:p-7">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/[0.06]">
            <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-hayjive-gold">
              IG POST CAPTION
            </span>
            <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/35">
              COPY → PASTE
            </span>
          </div>
          <p className="font-body text-[14px] text-white/75 leading-[1.7] whitespace-pre-line">
            {data.full_caption}
          </p>
        </div>
        <div className="md:col-span-2 hayjive-deep-card rounded-2xl p-6 md:p-7">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/[0.06]">
            <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-hayjive-gold">
              HASHTAG STACK
            </span>
            <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/35">
              {data.hashtags.length}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.hashtags.map((h) => (
              <span
                key={h}
                className="font-monoStat text-[11px] text-hayjive-emerald bg-hayjive-emerald/[0.08] border border-hayjive-emerald/25 px-2.5 py-1.5 rounded"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrap>
  );
}

function IGSlideTile({
  slide,
  cardSlug,
  index,
  total,
}: {
  slide: IGSlideRef;
  cardSlug: string;
  index: number;
  total: number;
}) {
  const ogUrl = `/api/og/hayjive/${cardSlug}/${slide.slot}`;
  return (
    <a
      href={ogUrl}
      target="_blank"
      rel="noreferrer"
      className="group block transition-transform hover:-translate-y-1"
    >
      {/* Outer gold-gradient frame */}
      <div
        className="relative rounded-xl p-[2px]"
        style={{
          background:
            'linear-gradient(155deg, rgba(212,175,55,0.55) 0%, rgba(31,174,92,0.20) 50%, rgba(0,0,0,0.4) 100%)',
        }}
      >
        {/* Inner card */}
        <div
          className="relative rounded-[10px] overflow-hidden bg-hayjive-card"
          style={{
            boxShadow:
              '0 20px 40px -12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(212,175,55,0.20)',
          }}
        >
          {/* Slide number badge */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
            <span
              className="font-monoStat font-bold text-[11px] tracking-tight px-2 py-1 rounded"
              style={{
                background: 'rgba(5,8,7,0.85)',
                border: '1px solid rgba(212,175,55,0.4)',
                color: '#D4AF37',
                backdropFilter: 'blur(6px)',
              }}
            >
              {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          {/* Image area */}
          <div className="relative aspect-[4/5] bg-hayjive-bg overflow-hidden">
            <img
              src={ogUrl}
              alt={slide.label}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
            {/* Hover veil with download CTA */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span
                className="font-monoStat text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded"
                style={{
                  background: 'rgba(212,175,55,0.95)',
                  color: '#0A0F0D',
                  fontWeight: 700,
                }}
              >
                OPEN ↗
              </span>
            </div>
          </div>

          {/* Footer — slot label + caption */}
          <div className="p-4 border-t border-white/[0.05] bg-hayjive-card">
            <div className="flex items-center justify-between mb-2">
              <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-hayjive-gold leading-none">
                {slide.label}
              </span>
              <span className="font-monoStat text-[9px] uppercase tracking-[0.25em] text-white/30 leading-none">
                PNG
              </span>
            </div>
            <span className="font-body text-[12px] text-white/60 leading-snug block">
              {slide.caption}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

// ─── Pick Sheet ────────────────────────────────────────────────
function PickSheetSection({ sheet }: { sheet: PickSheetData }) {
  return (
    <SectionWrap id="sheet">
      <SectionHeader number="13" eyebrow="PASTE INTO STORY · TAPOLOGY · DM" title="PICK" subtitle="SHEET" />
      <p className="mt-4 max-w-2xl font-body text-sm text-white/55 leading-relaxed">{sheet.unit_summary}</p>
      <div className="mt-10 hayjive-deep-card rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.06]">
              <th className="text-left p-4 font-monoStat text-[10px] uppercase tracking-[0.3em] text-hayjive-gold">FIGHT</th>
              <th className="text-left p-4 font-monoStat text-[10px] uppercase tracking-[0.3em] text-hayjive-gold">PICK</th>
              <th className="text-right p-4 font-monoStat text-[10px] uppercase tracking-[0.3em] text-hayjive-gold">ODDS</th>
              <th className="text-center p-4 font-monoStat text-[10px] uppercase tracking-[0.3em] text-hayjive-gold hidden md:table-cell">CONV</th>
              <th className="text-right p-4 font-monoStat text-[10px] uppercase tracking-[0.3em] text-hayjive-gold">SLOT</th>
            </tr>
          </thead>
          <tbody>
            {sheet.rows.map((row, i) => (
              <tr key={i} className="border-b border-white/[0.03] last:border-b-0">
                <td className="p-4 font-monoStat text-[11px] text-white/55 uppercase tracking-tight">{row.fight}</td>
                <td className="p-4 font-hero font-bold text-sm uppercase text-white tracking-tight">{row.pick}</td>
                <td className="p-4 text-right font-monoStat text-sm text-hayjive-gold">{row.odds}</td>
                <td className="p-4 text-center font-monoStat text-xs text-hayjive-emerald hidden md:table-cell">{row.conviction}/10</td>
                <td className="p-4 text-right font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/45">{row.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 hayjive-stat-tile rounded-xl p-5 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <span className="font-monoStat text-[10px] uppercase tracking-[0.35em] text-white/40 mb-1 block">
            UNDERDOG FANTASY CODE
          </span>
          <span className="font-hero font-black text-2xl uppercase tracking-tight text-hayjive-gold">
            {sheet.underdog_code}
          </span>
        </div>
        <a
          href="https://underdogfantasy.com"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 rounded-md bg-hayjive-gold/10 border border-hayjive-gold/30 hover:bg-hayjive-gold/15 transition-colors font-monoStat text-[11px] uppercase tracking-[0.3em] text-hayjive-gold"
        >
          OPEN UNDERDOG ↗
        </a>
      </div>
    </SectionWrap>
  );
}

// ─── Style Injector ────────────────────────────────────────────
function StyleInjector(): ReactNode {
  return (
    <style>{`
      .hayjive-deep-card {
        background: linear-gradient(180deg, #0E1311 0%, #07090A 100%);
        border: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow:
          inset 0 1px 0 rgba(212, 175, 55, 0.16),
          inset 0 -1px 0 rgba(0, 0, 0, 0.5),
          inset 1px 0 0 rgba(255, 255, 255, 0.02),
          inset -1px 0 0 rgba(0, 0, 0, 0.4),
          0 24px 48px -16px rgba(0, 0, 0, 0.7),
          0 1px 0 rgba(255, 255, 255, 0.03);
      }
      .hayjive-stat-tile {
        background: linear-gradient(180deg, #0A0F0D 0%, #050807 100%);
        border: 1px solid rgba(255, 255, 255, 0.04);
        box-shadow:
          inset 0 1px 0 rgba(212, 175, 55, 0.12),
          inset 0 -1px 0 rgba(0, 0, 0, 0.6),
          inset 0 0 24px rgba(0, 0, 0, 0.4),
          0 8px 24px -8px rgba(0, 0, 0, 0.5);
      }
      .hayjive-portrait-frame {
        box-shadow:
          0 30px 60px -20px rgba(0, 0, 0, 0.85),
          0 0 0 1px rgba(212, 175, 55, 0.18),
          0 0 32px -8px rgba(212, 175, 55, 0.18);
      }
    `}</style>
  );
}

// ─── Root ───────────────────────────────────────────────────────
export function HayJiveKitProView({ data }: { data: HayJiveKitProData }) {
  return (
    <main className="min-h-screen bg-hayjive-bg text-hayjive-ink">
      <StyleInjector />
      <Hero hero={data.hero} />
      <StickyNav />
      <CardOverviewSection fights={data.card_overview} />
      <CredCard cred={data.cred} />
      <LocksSection locks={data.locks} />
      <ParlaySection
        id="slimeball"
        number="04"
        eyebrow="MULTI-LEG · HAYJIVE FORMAT"
        title="SLIMEBALL"
        subtitle="PARLAY"
        parlay={data.slimeball}
        tone="emerald"
      />
      <ParlaySection
        id="cycle"
        number="05"
        eyebrow="METHOD-SPECIFIC · KO TRAIN"
        title="CYCLE"
        subtitle="PARLAY"
        parlay={data.cycle}
        tone="gold"
      />
      <GimmeSection gimme={data.gimme} />
      <LongshotsSection data={data.longshots} />
      <FadeSection fade={data.fade} />
      <ScorecardSection scorecard={data.scorecard} />
      <ColumnSection column={data.column} />
      <BigJiveSection data={data.bigjive} />
      <IGCarouselSection data={data.ig_carousel} />
      <PickSheetSection sheet={data.pick_sheet} />

      {/* Kit footer */}
      <div className="container mx-auto max-w-7xl px-6 mt-24 mb-16">
        <div className="border-t border-white/[0.06] pt-8 flex items-center justify-between flex-wrap gap-4">
          <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/30">
            KIT v1 · 13 SECTIONS · R6 GATES PASSED
          </span>
          <span className="font-monoStat text-[10px] uppercase tracking-[0.3em] text-white/30">
            POWERED BY CRENAS
          </span>
        </div>
      </div>
    </main>
  );
}
