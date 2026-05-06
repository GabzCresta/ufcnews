'use client';

import { useState } from 'react';
import { Copy, Check, Flame, Lock, Skull, Zap, Repeat, AlertTriangle, FileText, Instagram } from 'lucide-react';
import type {
  HayJiveKitData,
  LockPick,
  ParlayCard,
  GimmePick,
  CycleParlay,
  FadeWarning,
  ColumnTemplate,
  IgReelScript,
  KitMeta,
} from '@/types/hayjive-kit';

function CopyBtn({ text, label = 'Copiar' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/30 hover:text-white/70 transition-colors px-2 py-1 rounded border border-white/10 hover:border-white/30"
    >
      {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
      {copied ? 'Copiado' : label}
    </button>
  );
}

function SectionTitle({
  icon: Icon,
  tag,
  title,
  accent,
}: {
  icon: typeof Flame;
  tag: string;
  title: string;
  accent?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ufc-red/10 border border-ufc-red/20">
        <Icon size={16} className="text-ufc-red" />
      </div>
      <div>
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">{tag}</p>
        <h2 className="font-display text-2xl uppercase text-white/90 leading-none">
          {title}
          {accent && <span className="text-ufc-red ml-2">{accent}</span>}
        </h2>
      </div>
    </div>
  );
}

function KitHeader({ meta }: { meta: KitMeta }) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-ufc-red/20 via-ufc-red/5 to-transparent border border-ufc-red/30 p-6 md:p-8 mb-10">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-ufc-red font-bold mb-2">HayJive Kit · Powered by Crenas</p>
          <h1 className="font-display text-3xl md:text-4xl uppercase text-white leading-none mb-2">
            {meta.event_nome}
          </h1>
          <p className="text-sm text-white/40">{meta.event_data}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span className="text-[10px] uppercase tracking-wider text-white/40">Track record</span>
          <span className="text-emerald-400 font-display text-2xl leading-none">{meta.ytd_unidades}</span>
          <span className="text-[11px] text-white/40">{meta.ultimo_card} · {meta.tapology_accuracy}</span>
        </div>
      </div>
    </div>
  );
}

function IgReelCard({ reel }: { reel: IgReelScript }) {
  const fullText = `${reel.hook}\n\n${reel.linhas.join('\n')}\n\n${reel.cta}\n\n${reel.hashtags}`;
  return (
    <section className="mb-10">
      <SectionTitle icon={Instagram} tag="01" title="IG Reel" accent="30s" />
      <div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] uppercase tracking-wider text-white/30">Script completo</span>
          <CopyBtn text={fullText} label="Copiar script" />
        </div>
        <div className="space-y-4">
          <div className="rounded-lg bg-ufc-red/10 border border-ufc-red/20 p-4">
            <p className="text-[10px] uppercase tracking-wider text-ufc-red mb-1">HOOK (0-3s)</p>
            <p className="font-display text-2xl uppercase text-white leading-tight">{reel.hook}</p>
          </div>
          <div className="space-y-2 pl-4 border-l-2 border-white/10">
            {reel.linhas.map((linha, i) => (
              <p key={i} className="text-sm text-white/60 italic">&ldquo;{linha}&rdquo;</p>
            ))}
          </div>
          <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4">
            <p className="text-[10px] uppercase tracking-wider text-emerald-400 mb-1">CTA</p>
            <p className="text-sm font-bold text-white/90">{reel.cta}</p>
            <p className="text-[11px] text-white/40 mt-2">{reel.hashtags}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocksSection({ locks }: { locks: LockPick[] }) {
  return (
    <section className="mb-10">
      <SectionTitle icon={Lock} tag="02" title="3 Locks" accent="Each" />
      <div className="grid md:grid-cols-3 gap-4">
        {locks.map((lock, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 p-5 hover:border-amber-400/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-display text-xs uppercase text-amber-400 tracking-wider">{lock.label}</span>
              <span className="font-display text-2xl text-amber-400">{lock.odds}</span>
            </div>
            <p className="font-display text-xl uppercase text-white mb-1">{lock.pick}</p>
            <p className="text-[11px] text-white/40 uppercase tracking-wider mb-4">{lock.luta}</p>
            <p className="text-xs text-white/60 leading-relaxed">{lock.one_liner}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ParlayCardBlock({ parlay, variant, icon: Icon, tag }: {
  parlay: ParlayCard;
  variant: 'slimeball' | 'hammer';
  icon: typeof Flame;
  tag: string;
}) {
  const palette = variant === 'slimeball'
    ? { border: 'border-emerald-500/30', bg: 'from-emerald-500/10', text: 'text-emerald-400' }
    : { border: 'border-lime-400/30', bg: 'from-lime-400/10', text: 'text-lime-400' };

  const copyText = [
    parlay.nome,
    ...parlay.legs.map(l => `• ${l.pick} ${l.odds} (${l.luta})`),
    `Combined: ${parlay.combined_odds}`,
    parlay.stake_to_payout,
  ].join('\n');

  return (
    <section className="mb-10">
      <SectionTitle icon={Icon} tag={tag} title={parlay.nome.split(' ')[0]} accent={parlay.nome.split(' ').slice(1).join(' ')} />
      <div className={`rounded-2xl bg-gradient-to-br ${palette.bg} to-transparent border ${palette.border} p-6`}>
        <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
          <p className="text-sm text-white/60 italic max-w-md">{parlay.tagline}</p>
          <CopyBtn text={copyText} label="Copiar parlay" />
        </div>
        <div className="space-y-2 mb-5">
          {parlay.legs.map((leg, i) => (
            <div key={i} className="flex items-center justify-between gap-3 py-3 px-4 rounded-lg bg-white/[0.03] border border-white/[0.05]">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className={`font-display text-sm ${palette.text} w-5 flex-shrink-0`}>{i + 1}</span>
                <div className="min-w-0">
                  <p className="font-display text-base uppercase text-white truncate">{leg.pick}</p>
                  <p className="text-[10px] text-white/30 uppercase">{leg.luta}</p>
                </div>
              </div>
              <span className={`font-display text-lg ${palette.text} flex-shrink-0`}>{leg.odds}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/10 flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-wider text-white/40">Combined Odds</span>
          <div className="text-right">
            <p className={`font-display text-3xl ${palette.text} leading-none`}>{parlay.combined_odds}</p>
            <p className="text-[11px] text-white/40 mt-1">{parlay.stake_to_payout}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GimmeSection({ gimme }: { gimme: GimmePick }) {
  const copyText = `GIMME PICK — ${gimme.pick} ${gimme.odds}\n\n${gimme.why}\n\n${gimme.underdog_cta}`;
  return (
    <section className="mb-10">
      <SectionTitle icon={Zap} tag="05" title="Gimme" accent="Pick" />
      <div className="relative rounded-2xl bg-gradient-to-br from-ufc-red/20 via-ufc-red/5 to-transparent border border-ufc-red/30 p-6 md:p-8 overflow-hidden">
        <div className="absolute top-0 right-0 px-3 py-1 bg-ufc-red text-white text-[10px] font-bold uppercase tracking-wider">
          Underdog Promo
        </div>
        <div className="flex items-start justify-between mb-4 flex-wrap gap-3 mt-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-ufc-red mb-2">{gimme.luta}</p>
            <p className="font-display text-3xl md:text-4xl uppercase text-white leading-tight">{gimme.pick}</p>
          </div>
          <div className="text-right">
            <p className="font-display text-4xl text-ufc-red leading-none">{gimme.odds}</p>
          </div>
        </div>
        <p className="text-sm text-white/70 leading-relaxed mb-5">{gimme.why}</p>
        <div className="rounded-lg bg-black/30 border border-ufc-red/30 p-4 flex items-center justify-between gap-3 flex-wrap">
          <p className="font-display text-lg uppercase text-white">{gimme.underdog_cta}</p>
          <CopyBtn text={copyText} label="Copiar tudo" />
        </div>
      </div>
    </section>
  );
}

function CycleSection({ cycle }: { cycle: CycleParlay }) {
  const copyText = [
    'Cycle Parlay — Who wins by KO / Sub / Dec?',
    ...cycle.picks.map(p => `${p.method}: ${p.pick} ${p.odds} (${p.luta}) — ${p.note}`),
    `Combined: ${cycle.combined_odds} · ${cycle.stake_to_payout}`,
  ].join('\n');

  return (
    <section className="mb-10">
      <SectionTitle icon={Repeat} tag="06" title="Cycle" accent="Parlay" />
      <div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6">
        <div className="flex items-start justify-between mb-5 flex-wrap gap-3">
          <p className="text-sm text-white/60 italic max-w-md">
            Who wins by KO, Submission and Decision? 3-leg method parlay across the card
          </p>
          <CopyBtn text={copyText} label="Copiar cycle" />
        </div>
        <div className="grid md:grid-cols-3 gap-3 mb-5">
          {cycle.picks.map((pick) => {
            const methodStyle = {
              KO: { bg: 'from-ufc-red/15', border: 'border-ufc-red/30', text: 'text-ufc-red' },
              SUB: { bg: 'from-purple-500/15', border: 'border-purple-500/30', text: 'text-purple-400' },
              DEC: { bg: 'from-sky-500/15', border: 'border-sky-500/30', text: 'text-sky-400' },
            }[pick.method];
            return (
              <div
                key={pick.method}
                className={`rounded-xl bg-gradient-to-br ${methodStyle.bg} to-transparent border ${methodStyle.border} p-4`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-display text-xs uppercase tracking-wider ${methodStyle.text}`}>
                    {pick.method === 'KO' ? 'BY KO/TKO' : pick.method === 'SUB' ? 'BY SUB' : 'BY DEC'}
                  </span>
                  <span className={`font-display text-lg ${methodStyle.text}`}>{pick.odds}</span>
                </div>
                <p className="font-display text-lg uppercase text-white mb-1">{pick.pick}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider mb-3">{pick.luta}</p>
                <p className="text-[11px] text-white/50 leading-relaxed">{pick.note}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/10 flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-wider text-white/40">3-leg Cycle</span>
          <div className="text-right">
            <p className="font-display text-3xl text-amber-400 leading-none">{cycle.combined_odds}</p>
            <p className="text-[11px] text-white/40 mt-1">{cycle.stake_to_payout}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FadeSection({ fade }: { fade: FadeWarning }) {
  return (
    <section className="mb-10">
      <SectionTitle icon={AlertTriangle} tag="07" title="Fade of" accent="the Week" />
      <div className="rounded-2xl bg-gradient-to-br from-red-600/15 to-transparent border border-red-500/30 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 flex-shrink-0">
            <Skull size={18} className="text-red-400" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-wider text-red-400 mb-1">{fade.luta}</p>
            <p className="font-display text-2xl uppercase text-white mb-3">Fade: {fade.fade}</p>
            <p className="text-sm text-white/70 leading-relaxed">{fade.warning}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WrittenColumn({ column }: { column: ColumnTemplate }) {
  const fullText = [
    column.opener,
    '',
    column.main_event_section,
    '',
    'UNDERCARD RAPID FIRE',
    ...column.undercard_bullets,
    '',
    column.closer,
  ].join('\n');

  return (
    <section className="mb-4">
      <SectionTitle icon={FileText} tag="08" title="Written" accent="Column" />
      <div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] uppercase tracking-wider text-white/30">Home of Fight / Stan Newsletter ready</span>
          <CopyBtn text={fullText} label="Copiar coluna inteira" />
        </div>
        <div className="space-y-5 text-sm text-white/70 leading-relaxed">
          <p className="whitespace-pre-line">{column.opener}</p>
          <p className="whitespace-pre-line">{column.main_event_section}</p>
          <div>
            <p className="font-display text-xs uppercase tracking-wider text-ufc-red mb-2">UNDERCARD RAPID FIRE</p>
            <ul className="space-y-1.5">
              {column.undercard_bullets.map((b, i) => (
                <li key={i} className="pl-4 relative">
                  <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-ufc-red/60" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <p className="italic text-white/50 whitespace-pre-line">{column.closer}</p>
        </div>
      </div>
    </section>
  );
}

export function HayJiveKitView({ data }: { data: HayJiveKitData }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
      <KitHeader meta={data.meta} />
      <IgReelCard reel={data.ig_reel} />
      <LocksSection locks={data.three_locks} />
      <ParlayCardBlock parlay={data.slimeball} variant="slimeball" icon={Flame} tag="03" />
      <ParlayCardBlock parlay={data.green_hammer} variant="hammer" icon={Flame} tag="04" />
      <GimmeSection gimme={data.gimme} />
      <CycleSection cycle={data.cycle_parlay} />
      <FadeSection fade={data.fade_of_week} />
      <WrittenColumn column={data.written_column} />
    </div>
  );
}
