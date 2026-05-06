'use client';

import { useState } from 'react';
import { Mic, Calendar, MapPin, Quote, Copy, Check, Headphones, MessageCircle, Trophy, Newspaper, Hash, Clock, Radio, FileText, AlertCircle, Sparkles, ChevronDown, ChevronUp, Users, Podcast, BarChart3, Disc3, Flame, Link2, TrendingUp, TrendingDown, Lightbulb, Music2, Smartphone, Instagram, Camera, Crown, Target, History, Coins, LineChart, Megaphone, Eye } from 'lucide-react';
import type {
  PersonalityKitData,
  FightBrief,
  InterviewPacket,
  ShowNotes,
  MultiPlatformAssets,
  FightWeekBrief,
  ArenaCallout,
  EditorialColumn,
  PreShowDossier,
  ShowIdentity,
  RoundtableGuest,
  ChannelSnapshot,
  ChannelMetric,
  ChannelStatus,
  IgContentSystem,
  IgStoryTemplate,
  MainEventHype,
  FighterArc,
  SignatureMoment,
  ArenaProjection,
  ArenaAngle,
} from '@/types/personality-kit';

const HTB_CRIMSON = '#B91C1C';
const HTB_CRIMSON_RGB = '185 28 28';

function formatCompact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1).replace(/\.0$/, '')}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1).replace(/\.0$/, '')}K`;
  return `${n}`;
}

export function HalfTheBattleKitView({ data }: { data: PersonalityKitData }) {
  return (
    <div className="min-h-screen bg-[#0a0807] text-neutral-100">
      <div
        className="absolute inset-x-0 top-0 h-[600px] pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(ellipse at top, rgba(${HTB_CRIMSON_RGB}, 0.25), transparent 60%)`,
        }}
      />

      <Hero meta={data.meta} identity={data.show_identity} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16 relative">
        <ShowIdentitySection identity={data.show_identity} />
        <ChannelSnapshotSection snapshot={data.channel_snapshot} />
        <IgContentSystemSection system={data.ig_content_system} />
        <RoundtableSection guests={data.roundtable_guests} />
        <PreShowSection dossier={data.pre_show_dossier} />
        {data.main_event_hype ? (
          <MainEventHypeSection hype={data.main_event_hype} />
        ) : data.interview_packet ? (
          <InterviewSection packet={data.interview_packet} />
        ) : null}
        <ShowNotesSection notes={data.show_notes} />
        <MultiPlatformSection assets={data.multi_platform} />
        <FightWeekSection brief={data.fight_week_brief} />
        {data.arena_projection ? (
          <ArenaProjectionSection projection={data.arena_projection} />
        ) : data.arena_callout ? (
          <ArenaSection callout={data.arena_callout} />
        ) : null}
        <EditorialSection column={data.editorial_column} />
        <Footer hostName={data.meta.host_name} showName={data.meta.show_name} identity={data.show_identity} />
      </div>
    </div>
  );
}

function Hero({ meta, identity }: { meta: PersonalityKitData['meta']; identity: ShowIdentity }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08]">
      {meta.poster_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={meta.poster_url}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
          aria-hidden
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-[#0a0807]" />
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(${HTB_CRIMSON_RGB}, 0.18), transparent 70%)` }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center gap-2 mb-4">
          <Mic className="w-4 h-4" style={{ color: HTB_CRIMSON }} />
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">Creator Kit · Powered by Crenas</span>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end">
          <div>
            <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.85] tracking-tight">
              {meta.show_name}
            </h1>
            <p className="mt-4 text-base md:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              {meta.show_tagline}
            </p>
          </div>

          {meta.episode_number && (
            <div className="text-right shrink-0">
              <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Episode</div>
              <div
                className="font-display text-6xl md:text-8xl tracking-tight leading-none"
                style={{ color: HTB_CRIMSON }}
              >
                {meta.episode_number}
              </div>
              {meta.episode_format && (
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mt-2 max-w-[14rem] ml-auto">
                  {meta.episode_format}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-10 max-w-3xl border-l-2 pl-5" style={{ borderColor: HTB_CRIMSON }}>
          <p className="text-2xl md:text-4xl font-display uppercase leading-tight tracking-tight">
            {meta.event_name}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
            Hosted by {meta.host_name} · {meta.host_handle}
            {identity.host_x_handle ? ` · ${identity.host_x_handle}` : ''}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm">
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-xs text-neutral-300">{meta.event_date}</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-xs text-neutral-300">{meta.event_location}</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <CredentialStat label="Years on Air" value={`${identity.years_on_air}`} sub={`since ${identity.on_air_since}`} icon={Clock} />
          <CredentialStat label="Pod Episodes" value={`${identity.total_episodes}+`} sub={`Top 1.5% · Listen Notes`} icon={Podcast} />
          <CredentialStat
            label="YouTube"
            value={identity.youtube_subscribers ? formatCompact(identity.youtube_subscribers) : '—'}
            sub={`${identity.youtube_videos ?? '—'} videos · ${identity.youtube_lifetime_views ? formatCompact(identity.youtube_lifetime_views) : '—'} views`}
            icon={BarChart3}
          />
          <CredentialStat
            label="Avg Per Upload"
            value={identity.youtube_avg_views ? `~${formatCompact(identity.youtube_avg_views)}` : '—'}
            sub="reliable floor · saturated format"
            icon={Flame}
          />
        </div>
      </div>
    </section>
  );
}

function CredentialStat({ label, value, sub, icon: Icon }: { label: string; value: string; sub: string; icon: typeof Mic }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-3.5 h-3.5" style={{ color: HTB_CRIMSON }} />
        <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">{label}</span>
      </div>
      <p className="font-display text-3xl md:text-4xl tracking-tight leading-none text-white">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-neutral-500">{sub}</p>
    </div>
  );
}

function SectionLabel({ icon: Icon, kicker, title }: { icon: typeof Mic; kicker: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4" style={{ color: HTB_CRIMSON }} />
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">{kicker}</span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight leading-none">
        {title}
      </h2>
      <div className="mt-3 h-px w-16" style={{ background: HTB_CRIMSON }} />
    </div>
  );
}

function ShowIdentitySection({ identity }: { identity: ShowIdentity }) {
  return (
    <section>
      <SectionLabel icon={Podcast} kicker="00 · Show DNA" title="About The Show" />

      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <Flame className="w-3.5 h-3.5" style={{ color: HTB_CRIMSON }} />
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Presented by</span>
          </div>
          <p className="font-display text-3xl md:text-4xl uppercase tracking-tight leading-none text-white">
            {identity.presented_by}
          </p>
          <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
            {identity.cadence}. Average length: {identity.average_length}.
          </p>

          <div className="mt-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">Episode Formats</p>
            <ul className="space-y-2">
              {identity.format_types.map((format, idx) => (
                <li key={idx} className="text-sm text-neutral-300 flex gap-2">
                  <span style={{ color: HTB_CRIMSON }}>·</span>
                  <span>{format}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-6 border-t border-white/[0.05]">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Audience</p>
            <p className="text-sm text-neutral-400 leading-relaxed italic">{identity.audience}</p>
          </div>
        </div>

        <div className="space-y-4">
          {identity.available_on && identity.available_on.length > 0 && (
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <Disc3 className="w-3.5 h-3.5" style={{ color: HTB_CRIMSON }} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Available On</span>
              </div>
              <ul className="space-y-2">
                {identity.available_on.map((platform, idx) => (
                  <li key={idx} className="text-sm text-neutral-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full" style={{ background: HTB_CRIMSON }} />
                    <span>{platform}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
            <div className="flex items-center gap-2 mb-3">
              <Hash className="w-3.5 h-3.5" style={{ color: HTB_CRIMSON }} />
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Handles</span>
            </div>
            <div className="space-y-1.5">
              {identity.show_x_handle && (
                <p className="text-xs text-neutral-300">
                  <span className="text-neutral-500">Show: </span>
                  <span className="font-mono">{identity.show_x_handle}</span>
                </p>
              )}
              {identity.host_x_handle && (
                <p className="text-xs text-neutral-300">
                  <span className="text-neutral-500">Host: </span>
                  <span className="font-mono">{identity.host_x_handle}</span>
                </p>
              )}
              {identity.graphics_credit && (
                <p className="text-xs text-neutral-300">
                  <span className="text-neutral-500">Graphics: </span>
                  <span className="font-mono">{identity.graphics_credit}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoundtableSection({ guests }: { guests: RoundtableGuest[] }) {
  if (guests.length === 0) return null;

  const matchCount = guests.filter((g) => g.crenas_match).length;

  return (
    <section>
      <SectionLabel icon={Users} kicker="00.5 · Roundtable" title="Recurring Cast" />
      <p className="text-sm text-neutral-400 max-w-3xl mb-2 leading-relaxed">
        The rotating bench of handicappers and creators who join the Picks Roundtable. We&rsquo;ve mapped the recurring guests so the kit lands in a familiar ecosystem.
      </p>
      {matchCount > 0 && (
        <p className="text-xs text-emerald-400/80 mb-6 inline-flex items-center gap-2">
          <Link2 className="w-3 h-3" />
          {matchCount} of these guests are already in the Crenas creator network.
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {guests.map((guest, idx) => (
          <GuestCard key={idx} guest={guest} />
        ))}
      </div>
    </section>
  );
}

function GuestCard({ guest }: { guest: RoundtableGuest }) {
  const initials = guest.name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div
      className={`rounded-xl border backdrop-blur-sm p-4 transition-all hover:bg-white/[0.04] ${
        guest.crenas_match
          ? 'border-emerald-400/20 bg-emerald-400/[0.02]'
          : 'border-white/[0.06] bg-white/[0.02]'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-display text-sm tracking-tight"
          style={{
            background: guest.crenas_match
              ? 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.05))'
              : `linear-gradient(135deg, rgba(${HTB_CRIMSON_RGB}, 0.2), rgba(${HTB_CRIMSON_RGB}, 0.05))`,
            border: guest.crenas_match
              ? '1px solid rgba(16,185,129,0.3)'
              : `1px solid rgba(${HTB_CRIMSON_RGB}, 0.3)`,
            color: guest.crenas_match ? '#10b981' : HTB_CRIMSON,
          }}
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white truncate">{guest.name}</p>
          <p className="text-[10px] font-mono text-neutral-500 truncate">{guest.handle}</p>
          <p className="text-[10px] uppercase tracking-wider text-neutral-400 mt-1.5 leading-tight">
            {guest.role}
          </p>
          {guest.crenas_match && (
            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-emerald-400 inline-flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-emerald-400" />
              Crenas Match
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const STATUS_META: Record<ChannelStatus, { label: string; color: string; bg: string; border: string; icon: typeof Mic }> = {
  strong: { label: 'Strong', color: '#10b981', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.3)', icon: TrendingUp },
  stagnant: { label: 'Stagnant', color: '#f59e0b', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.3)', icon: TrendingDown },
  opportunity: { label: 'Opportunity', color: '#3b82f6', bg: 'rgba(59,130,246,0.06)', border: 'rgba(59,130,246,0.3)', icon: Lightbulb },
  whitespace: { label: 'Whitespace', color: '#a855f7', bg: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.3)', icon: Sparkles },
};

function ChannelSnapshotSection({ snapshot }: { snapshot: ChannelSnapshot }) {
  return (
    <section>
      <SectionLabel icon={BarChart3} kicker="01 · Channel Health" title="Performance Snapshot" />
      <p className="text-sm text-neutral-400 max-w-3xl mb-8 leading-relaxed">{snapshot.intro}</p>

      <div className="grid md:grid-cols-2 gap-4">
        {snapshot.metrics.map((metric, idx) => (
          <ChannelMetricCard key={idx} metric={metric} />
        ))}
      </div>
    </section>
  );
}

function ChannelMetricCard({ metric }: { metric: ChannelMetric }) {
  const meta = STATUS_META[metric.status];
  const Icon = meta.icon;

  return (
    <div
      className="rounded-2xl border backdrop-blur-sm p-6 transition-all hover:bg-white/[0.03] relative overflow-hidden"
      style={{ borderColor: meta.border, background: `linear-gradient(135deg, ${meta.bg}, transparent 60%)` }}
    >
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-50 pointer-events-none"
        style={{ background: meta.color }}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">{metric.platform}</p>
            <p className="font-display text-3xl md:text-4xl tracking-tight leading-none mt-2 text-white">
              {metric.primary_metric}
            </p>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border shrink-0"
            style={{ borderColor: meta.border, background: meta.bg }}
          >
            <Icon className="w-3 h-3" style={{ color: meta.color }} />
            <span className="text-[9px] uppercase tracking-[0.15em] font-bold" style={{ color: meta.color }}>
              {meta.label}
            </span>
          </div>
        </div>

        <p className="text-xs font-mono text-neutral-400 mb-3">{metric.secondary_metric}</p>
        <p className="text-sm text-neutral-300 leading-relaxed">{metric.diagnosis}</p>
      </div>
    </div>
  );
}

function IgContentSystemSection({ system }: { system: IgContentSystem }) {
  return (
    <section>
      <SectionLabel icon={Instagram} kicker="02 · IG Content System" title="The IG Fix" />
      <p className="text-sm text-neutral-400 max-w-3xl mb-4 leading-relaxed">{system.intro}</p>

      <div
        className="rounded-2xl border p-5 mb-8 backdrop-blur-sm"
        style={{ borderColor: 'rgba(245,158,11,0.25)', background: 'linear-gradient(135deg, rgba(245,158,11,0.05), transparent 70%)' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-3.5 h-3.5" style={{ color: '#f59e0b' }} />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: '#f59e0b' }}>
            Diagnosis
          </span>
        </div>
        <p className="text-sm text-neutral-200 leading-relaxed">{system.diagnosis}</p>
      </div>

      <div className="mb-8">
        <h3 className="font-display text-2xl uppercase tracking-tight mb-1">Fight-Week Calendar</h3>
        <p className="text-xs text-neutral-500 mb-5">A ritual for followers — same shape every week, fresh content per card.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {system.fight_week_calendar.map((tpl, idx) => (
            <FightWeekDayCard key={idx} template={tpl} index={idx} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-display text-2xl uppercase tracking-tight mb-1">Friday Signature Carousel</h3>
        <p className="text-xs text-neutral-500 mb-5">{system.carousel_board.intro}</p>

        <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
          <PhoneMockupCarousel slides={system.carousel_board.preview_slides} />

          <div className="space-y-4">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Cover Slide</p>
              <p className="text-sm text-neutral-300 leading-relaxed">{system.carousel_board.cover_concept}</p>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Per-Fight Template</p>
              <p className="text-sm text-neutral-300 leading-relaxed">{system.carousel_board.per_fight_template}</p>
            </div>
            <div className="rounded-xl p-5" style={{ borderLeft: `3px solid ${HTB_CRIMSON}`, background: `rgba(${HTB_CRIMSON_RGB}, 0.06)` }}>
              <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: HTB_CRIMSON }}>Total Slides</p>
              <p className="font-display text-4xl tracking-tight leading-none text-white">{system.carousel_board.total_slides}</p>
              <p className="text-xs text-neutral-400 mt-1">one cover + every fight on the card</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-1">
          <Music2 className="w-4 h-4" style={{ color: '#a855f7' }} />
          <h3 className="font-display text-2xl uppercase tracking-tight">TikTok Cross-Post Playbook</h3>
        </div>
        <p className="text-xs text-neutral-500 mb-5">{system.tiktok_strategy.intro}</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">Hook Patterns</p>
            <ul className="space-y-3">
              {system.tiktok_strategy.hooks.map((hook, idx) => (
                <li key={idx} className="text-sm text-neutral-300 flex gap-3 leading-relaxed">
                  <span className="font-mono text-xs shrink-0 mt-0.5" style={{ color: '#a855f7' }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{hook}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl border backdrop-blur-sm p-5"
            style={{ borderColor: 'rgba(168,85,247,0.25)', background: 'linear-gradient(135deg, rgba(168,85,247,0.05), transparent 70%)' }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: '#a855f7' }}>Posting Plan</p>
            <p className="text-sm text-neutral-200 leading-relaxed">{system.tiktok_strategy.posting_advice}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const DAY_ACCENT = ['#ef4444', '#f97316', '#eab308', '#10b981', '#3b82f6', '#a855f7'];

function FightWeekDayCard({ template, index }: { template: IgStoryTemplate; index: number }) {
  const accent = DAY_ACCENT[index % DAY_ACCENT.length];
  return (
    <div
      className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 hover:bg-white/[0.04] transition-colors h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: accent }}>
          {template.day}
        </span>
        <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-500">{template.slot}</span>
      </div>
      <p className="text-sm text-white font-medium leading-snug mb-3 italic">&ldquo;{template.hook}&rdquo;</p>

      <div className="space-y-3 mt-auto">
        <div>
          <p className="text-[9px] uppercase tracking-wider text-neutral-500 mb-1 inline-flex items-center gap-1">
            <Camera className="w-2.5 h-2.5" /> Visual
          </p>
          <p className="text-xs text-neutral-400 leading-relaxed">{template.visual_concept}</p>
        </div>
        <div className="rounded-md bg-black/30 p-2.5 border border-white/[0.04]">
          <p className="text-[9px] uppercase tracking-wider text-neutral-500 mb-1">Caption</p>
          <p className="text-xs text-neutral-300 leading-snug">{template.caption}</p>
        </div>
      </div>
    </div>
  );
}

function PhoneMockupCarousel({ slides }: { slides: { slot: string; matchup: string; pick: string; reasoning: string }[] }) {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-[260px] h-[490px] rounded-[2.5rem] p-3 relative shrink-0 mx-auto"
        style={{
          background: 'linear-gradient(180deg, #1a1a1a, #0a0a0a)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 20px 60px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black/80 z-10" />
        <div
          className="w-full h-full rounded-[2rem] overflow-hidden flex flex-col relative"
          style={{
            background: `linear-gradient(155deg, rgba(${HTB_CRIMSON_RGB}, 0.25), #0a0807 60%)`,
          }}
        >
          <div className="absolute top-0 left-0 right-0 px-4 pt-7 pb-2 flex items-center justify-between text-[9px] font-mono text-neutral-400 z-10">
            <span>{slide.slot}</span>
            <span>{active + 1} / {slides.length}</span>
          </div>

          <div className="flex-1 flex flex-col justify-end p-5 relative">
            <div
              className="absolute top-12 right-3 px-2 py-0.5 rounded text-[8px] uppercase tracking-[0.15em] font-bold"
              style={{ background: HTB_CRIMSON, color: 'white' }}
            >
              HTB
            </div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
              {slide.matchup}
            </p>
            <p className="font-display text-2xl uppercase tracking-tight leading-tight text-white mb-3">
              {slide.pick}
            </p>
            <div className="flex items-center gap-1.5 mb-3">
              {[1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: dot <= 2 ? HTB_CRIMSON : 'rgba(255,255,255,0.2)' }}
                />
              ))}
              <span className="text-[9px] uppercase tracking-wider text-neutral-500 ml-1">confidence</span>
            </div>
            <p className="text-xs text-neutral-300 leading-snug border-l-2 pl-2" style={{ borderColor: HTB_CRIMSON }}>
              {slide.reasoning}
            </p>

            <div className="flex items-center gap-1.5 justify-center mt-5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="h-1 rounded-full transition-all"
                  style={{
                    background: i === active ? HTB_CRIMSON : 'rgba(255,255,255,0.2)',
                    width: i === active ? '20px' : '6px',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 inline-flex items-center gap-1.5">
        <Smartphone className="w-3 h-3" />
        Carousel preview
      </p>
    </div>
  );
}

function PreShowSection({ dossier }: { dossier: PreShowDossier }) {
  return (
    <section>
      <SectionLabel icon={FileText} kicker="01 · Pre-Show" title="Card Prep Dossier" />
      <p className="text-sm text-neutral-400 max-w-3xl mb-6 leading-relaxed">{dossier.intro}</p>

      <div className="space-y-3">
        {dossier.fights.map((fight, idx) => (
          <FightBriefCard key={idx} fight={fight} />
        ))}
      </div>
    </section>
  );
}

function FightBriefCard({ fight }: { fight: FightBrief }) {
  const [open, setOpen] = useState(fight.is_main);

  return (
    <div
      className={`rounded-xl border backdrop-blur-sm overflow-hidden transition-all ${
        fight.is_main
          ? 'border-white/[0.08] bg-white/[0.02]'
          : 'border-white/[0.04] bg-white/[0.01]'
      }`}
      style={fight.is_main ? { borderLeftWidth: '3px', borderLeftColor: HTB_CRIMSON } : undefined}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full p-4 md:p-5 flex items-center gap-3 text-left hover:bg-white/[0.02] transition-colors"
      >
        {fight.is_main && (
          <span
            className="text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full font-bold"
            style={{ background: `rgba(${HTB_CRIMSON_RGB}, 0.15)`, color: HTB_CRIMSON }}
          >
            Main
          </span>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-display text-base md:text-lg uppercase tracking-tight leading-none truncate">
            {fight.fight}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-1">
            {fight.weight_class}
          </p>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-neutral-500" /> : <ChevronDown className="w-4 h-4 text-neutral-500" />}
      </button>

      {open && (
        <div className="px-4 md:px-5 pb-5 space-y-4 border-t border-white/[0.04]">
          <div className="grid grid-cols-2 gap-3 pt-4">
            <div className="rounded-lg bg-black/30 p-3">
              <p className="text-[10px] uppercase tracking-wider text-neutral-500">Records</p>
              <p className="text-xs text-neutral-300 mt-1 font-mono">{fight.records.f1} / {fight.records.f2}</p>
            </div>
            <div className="rounded-lg bg-black/30 p-3">
              <p className="text-[10px] uppercase tracking-wider text-neutral-500">Recent Form</p>
              <p className="text-xs text-neutral-300 mt-1">{fight.recent_form.f1}</p>
              <p className="text-xs text-neutral-300">{fight.recent_form.f2}</p>
            </div>
          </div>

          <Field label="Stylistic Note" body={fight.stylistic_note} />
          <Field label="Storyline Hook" body={fight.storyline_hook} />
          <Field label="Betting Angle" body={fight.betting_angle} mono />

          <div className="rounded-lg p-3" style={{ background: `rgba(${HTB_CRIMSON_RGB}, 0.06)`, border: `1px solid rgba(${HTB_CRIMSON_RGB}, 0.2)` }}>
            <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: HTB_CRIMSON }}>Question for the Pod</p>
            <p className="text-sm text-neutral-200 italic">&ldquo;{fight.question_for_pod}&rdquo;</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, body, mono }: { label: string; body: string; mono?: boolean }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">{label}</p>
      <p className={`text-sm text-neutral-300 leading-relaxed ${mono ? 'font-mono text-xs' : ''}`}>{body}</p>
    </div>
  );
}

function MainEventHypeSection({ hype }: { hype: MainEventHype }) {
  const [hypeCopied, setHypeCopied] = useState(false);

  function copyHype() {
    navigator.clipboard.writeText(hype.hype_paragraph);
    setHypeCopied(true);
    setTimeout(() => setHypeCopied(false), 1500);
  }

  return (
    <section>
      <SectionLabel icon={Crown} kicker="05 · Main Event Hype" title={hype.headline} />
      <p className="text-sm text-neutral-400 max-w-3xl mb-3 leading-relaxed">{hype.intro}</p>
      <p className="text-base md:text-lg text-neutral-200 italic max-w-3xl mb-10 leading-relaxed border-l-2 pl-4" style={{ borderColor: HTB_CRIMSON }}>
        {hype.tagline}
      </p>

      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-start">
        <FighterArcColumn arc={hype.fighter1_arc} side="left" />
        <FaceOffDivider />
        <FighterArcColumn arc={hype.fighter2_arc} side="right" />
      </div>

      <div className="mt-12 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm p-6 md:p-8">
        <div className="flex items-center gap-2 mb-3">
          <Flame className="w-3.5 h-3.5" style={{ color: HTB_CRIMSON }} />
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">The Collision Point</p>
        </div>
        <p className="text-sm md:text-base text-neutral-200 leading-relaxed">{hype.collision_point}</p>
      </div>

      <div className="mt-6 rounded-2xl p-6 md:p-8 relative overflow-hidden" style={{ background: `linear-gradient(135deg, rgba(${HTB_CRIMSON_RGB}, 0.12), #0a0807 80%)`, border: `1px solid rgba(${HTB_CRIMSON_RGB}, 0.3)` }}>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: HTB_CRIMSON }} />

        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Mic className="w-3.5 h-3.5" style={{ color: HTB_CRIMSON }} />
              <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: HTB_CRIMSON }}>Ready-to-Read · Cold Open</p>
            </div>
            <button
              onClick={copyHype}
              className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              {hypeCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              {hypeCopied ? 'Copied' : 'Copy script'}
            </button>
          </div>
          <p className="text-base md:text-lg text-neutral-100 leading-[1.7] font-light">{hype.hype_paragraph}</p>

          {hype.pull_quote && (
            <div className="mt-6 pt-6 border-t border-white/[0.05]">
              <p className="font-display text-xl md:text-2xl uppercase leading-tight tracking-tight" style={{ color: HTB_CRIMSON }}>
                &ldquo;{hype.pull_quote}&rdquo;
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FaceOffDivider() {
  return (
    <div className="hidden lg:flex flex-col items-center pt-12 px-2">
      <div className="w-px flex-1 min-h-[60px]" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1))' }} />
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center font-display text-lg my-2"
        style={{
          background: `linear-gradient(135deg, rgba(${HTB_CRIMSON_RGB}, 0.2), rgba(59,130,246,0.2))`,
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        VS
      </div>
      <div className="w-px flex-1 min-h-[600px]" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)' }} />
    </div>
  );
}

function FighterArcColumn({ arc, side }: { arc: FighterArc; side: 'left' | 'right' }) {
  const accentColor = arc.accent === 'red' ? HTB_CRIMSON : '#3b82f6';
  const accentRgb = arc.accent === 'red' ? HTB_CRIMSON_RGB : '59 130 246';
  const proxyImage = arc.fighter_image_url
    ? `/api/image-proxy?url=${encodeURIComponent(arc.fighter_image_url)}`
    : null;

  return (
    <div className={`space-y-4 ${side === 'right' ? 'lg:text-left' : ''}`}>
      <div
        className="rounded-2xl border backdrop-blur-sm overflow-hidden"
        style={{ borderColor: `rgba(${accentRgb}, 0.25)`, background: `linear-gradient(180deg, rgba(${accentRgb}, 0.08), transparent 70%)` }}
      >
        {proxyImage && (
          <div
            className="relative aspect-[4/5] overflow-hidden"
            style={{
              background: `radial-gradient(ellipse at top, rgba(${accentRgb}, 0.25), #0a0807 75%)`,
            }}
          >
            <div
              className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none z-0"
              style={{
                background: `radial-gradient(ellipse at bottom, rgba(${accentRgb}, 0.18), transparent 70%)`,
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={proxyImage}
              alt={arc.fighter_name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)] z-10"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none z-20"
              style={{ background: `linear-gradient(to top, rgba(10,8,7,0.92), transparent)` }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-30">
              <p className="font-display text-2xl md:text-4xl uppercase tracking-tight leading-[0.9] text-white">
                {arc.fighter_name}
              </p>
            </div>
          </div>
        )}
        <div className="p-5">
          <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: accentColor }}>One-line pitch</p>
          <p className="text-sm md:text-base text-neutral-200 leading-snug mt-1 italic">&ldquo;{arc.one_line_pitch}&rdquo;</p>
        </div>
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
        <div className="flex items-center gap-2 mb-2">
          <History className="w-3 h-3" style={{ color: accentColor }} />
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Origin</p>
        </div>
        <p className="text-sm text-neutral-300 leading-relaxed">{arc.origin}</p>
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Career Arc</p>
        <p className="text-sm text-neutral-300 leading-relaxed">{arc.career_arc}</p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <Flame className="w-3 h-3" style={{ color: accentColor }} />
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Signature Moments</p>
        </div>
        <div className="space-y-2">
          {arc.signature_moments.map((moment, idx) => (
            <SignatureMomentCard key={idx} moment={moment} accentColor={accentColor} accentRgb={accentRgb} />
          ))}
        </div>
      </div>

      <div
        className="rounded-xl p-5"
        style={{ borderLeft: `3px solid ${accentColor}`, background: `rgba(${accentRgb}, 0.04)` }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-3 h-3" style={{ color: accentColor }} />
          <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: accentColor }}>Where He Stands Now</p>
        </div>
        <p className="text-sm text-neutral-200 leading-relaxed">{arc.current_state}</p>
      </div>
    </div>
  );
}

function SignatureMomentCard({ moment, accentColor, accentRgb }: { moment: SignatureMoment; accentColor: string; accentRgb: string }) {
  return (
    <div className="rounded-lg border border-white/[0.04] bg-black/30 backdrop-blur-sm p-4 hover:bg-white/[0.02] transition-colors">
      <div className="flex items-center justify-between mb-2 gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: accentColor }}>{moment.date}</span>
        <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-500 truncate" title={moment.event}>
          {moment.event}
        </span>
      </div>
      <p className="text-xs text-neutral-200 leading-relaxed mb-2">{moment.what_happened}</p>
      <div className="rounded-md p-2 mt-2" style={{ background: `rgba(${accentRgb}, 0.06)` }}>
        <p className="text-[9px] uppercase tracking-wider mb-1" style={{ color: accentColor }}>Why it mattered</p>
        <p className="text-xs text-neutral-300 leading-snug italic">{moment.why_it_mattered}</p>
      </div>
    </div>
  );
}

function InterviewSection({ packet }: { packet: InterviewPacket }) {
  return (
    <section>
      <SectionLabel icon={MessageCircle} kicker="02 · Interview Prep" title={`Packet — ${packet.fighter_name}`} />
      <p className="text-sm text-neutral-400 max-w-3xl mb-6 leading-relaxed">{packet.intro}</p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <Block title="Career Arc" body={packet.career_arc} />
          <Block title="Stylistic Profile" body={packet.stylistic_profile} />

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">Recent Fights — Context</p>
            <div className="space-y-3">
              {packet.recent_fights.map((rf, idx) => (
                <div key={idx} className="border-l-2 pl-3" style={{ borderColor: rf.result.startsWith('W') ? '#10b981' : '#ef4444' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-neutral-400">{rf.date}</span>
                    <span className="text-xs font-bold" style={{ color: rf.result.startsWith('W') ? '#10b981' : '#ef4444' }}>{rf.result}</span>
                    <span className="text-xs text-neutral-300">vs {rf.opponent}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed mt-1"><span className="text-neutral-500">What happened:</span> {rf.what_happened}</p>
                  <p className="text-xs text-neutral-400 leading-relaxed mt-1"><span className="text-neutral-500">What it means:</span> {rf.what_it_means}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">Storyline Angles</p>
            <ul className="space-y-2">
              {packet.storyline_angles.map((angle, idx) => (
                <li key={idx} className="text-xs text-neutral-300 flex gap-2">
                  <span style={{ color: HTB_CRIMSON }}>·</span>
                  <span>{angle}</span>
                </li>
              ))}
            </ul>
          </div>

          {packet.controversy_flags.length > 0 && (
            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/[0.04] backdrop-blur-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-3.5 h-3.5 text-yellow-400" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-400">Flags / Sensitive</p>
              </div>
              <ul className="space-y-2">
                {packet.controversy_flags.map((flag, idx) => (
                  <li key={idx} className="text-xs text-neutral-300 flex gap-2">
                    <span className="text-yellow-400">·</span>
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">Suggested Questions — &ldquo;What no one else asks&rdquo;</p>
        <div className="space-y-3">
          {packet.suggested_questions.map((sq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5"
              style={{ borderLeft: `3px solid ${HTB_CRIMSON}` }}
            >
              <p className="text-base text-neutral-100 italic font-display tracking-tight">&ldquo;{sq.question}&rdquo;</p>
              <div className="mt-3 grid sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500">Context</span>
                  <p className="text-neutral-400 mt-1 leading-relaxed">{sq.context}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500">Why this is rare</span>
                  <p className="text-neutral-400 mt-1 leading-relaxed">{sq.unique_angle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
      <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">{title}</p>
      <p className="text-sm text-neutral-300 leading-relaxed">{body}</p>
    </div>
  );
}

function ShowNotesSection({ notes }: { notes: ShowNotes }) {
  const [copied, setCopied] = useState<string | null>(null);

  function copy(text: string, key: string) {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  }

  const fullChapterText = notes.chapter_markers.map((c) => `${c.time} — ${c.topic}`).join('\n');

  return (
    <section>
      <SectionLabel icon={Headphones} kicker="03 · Show Notes" title="Episode Description + Chapters" />
      <p className="text-sm text-neutral-400 max-w-3xl mb-6 leading-relaxed">
        Drop these directly into YouTube description, Spotify episode notes, Apple Podcasts. Already SEO-optimized.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Episode Title</p>
            <CopyBtn text={notes.episode_title} copied={copied === 'title'} onClick={() => copy(notes.episode_title, 'title')} />
          </div>
          <p className="text-sm text-neutral-200 leading-relaxed">{notes.episode_title}</p>

          <div className="flex items-center justify-between mt-6 mb-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Description</p>
            <CopyBtn text={notes.description} copied={copied === 'desc'} onClick={() => copy(notes.description, 'desc')} />
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed whitespace-pre-line">{notes.description}</p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {notes.hashtags.map((tag) => (
              <span key={tag} className="text-[10px] font-mono text-neutral-500">#{tag}</span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" /> Chapter Markers
            </p>
            <CopyBtn text={fullChapterText} copied={copied === 'chapters'} onClick={() => copy(fullChapterText, 'chapters')} />
          </div>
          <div className="space-y-1">
            {notes.chapter_markers.map((c, idx) => (
              <div key={idx} className="flex items-start gap-3 py-1.5 border-b border-white/[0.04] last:border-0">
                <span className="text-xs font-mono text-neutral-500 shrink-0 w-12">{c.time}</span>
                <span className="text-xs text-neutral-300 flex-1">{c.topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CopyBtn({ text, copied, onClick }: { text: string; copied: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title={text.length > 40 ? text.slice(0, 40) + '...' : text}
      className="text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
    >
      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function MultiPlatformSection({ assets }: { assets: MultiPlatformAssets }) {
  const [tab, setTab] = useState<'x' | 'ig' | 'short'>('x');

  return (
    <section>
      <SectionLabel icon={Hash} kicker="04 · Cross-Platform" title="Branded Cuts" />
      <p className="text-sm text-neutral-400 max-w-3xl mb-6 leading-relaxed">{assets.intro}</p>

      <div className="flex items-center gap-2 mb-4">
        {(['x', 'ig', 'short'] as const).map((id) => {
          const labels = { x: 'X Thread', ig: 'IG Carousel', short: 'YT Shorts / TikTok' };
          return (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                tab === id ? 'border text-white' : 'bg-white/[0.03] text-neutral-500 hover:text-neutral-300 border border-transparent'
              }`}
              style={tab === id ? { borderColor: HTB_CRIMSON, background: `rgba(${HTB_CRIMSON_RGB}, 0.1)` } : undefined}
            >
              {labels[id]}
            </button>
          );
        })}
      </div>

      {tab === 'x' && (
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
          <p className="text-sm text-neutral-300 mb-4 leading-relaxed">{assets.x_thread.intro}</p>
          <div className="space-y-3">
            {assets.x_thread.tweets.map((t, idx) => (
              <div key={idx} className="rounded-lg bg-black/40 p-3 border border-white/[0.04]">
                <span className="text-[10px] font-mono text-neutral-500">{t.num}</span>
                <p className="text-sm text-neutral-200 mt-1 leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'ig' && (
        <div className="space-y-4">
          <p className="text-sm text-neutral-300 leading-relaxed">{assets.ig_carousel.intro}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {assets.ig_carousel.slides.map((s, idx) => (
              <div key={idx} className="aspect-square rounded-xl p-4 flex flex-col justify-between" style={{ background: `linear-gradient(135deg, rgba(${HTB_CRIMSON_RGB}, 0.15), rgba(0,0,0,0.6))`, border: '1px solid rgba(255,255,255,0.06)' }}>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: HTB_CRIMSON }}>{s.slot}</p>
                  <p className="font-display text-lg uppercase tracking-tight leading-none mt-2">{s.label}</p>
                </div>
                <p className="text-xs text-neutral-300 leading-snug">{s.caption}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Caption</p>
            <p className="text-sm text-neutral-300 leading-relaxed whitespace-pre-line">{assets.ig_carousel.full_caption}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {assets.ig_carousel.hashtags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-neutral-500">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'short' && (
        <div className="space-y-3">
          {assets.short_form.map((sf, idx) => (
            <div key={idx} className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
              <span className="text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded font-bold" style={{ background: `rgba(${HTB_CRIMSON_RGB}, 0.15)`, color: HTB_CRIMSON }}>{sf.format}</span>
              <div className="mt-3 space-y-2">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-500">Hook (0-3s)</p>
                  <p className="text-sm text-neutral-200 mt-1">{sf.hook}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-500">Body</p>
                  <p className="text-sm text-neutral-300 mt-1 leading-relaxed">{sf.body}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-500">CTA</p>
                  <p className="text-sm text-neutral-300 mt-1 italic">&ldquo;{sf.cta}&rdquo;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function FightWeekSection({ brief }: { brief: FightWeekBrief }) {
  return (
    <section>
      <SectionLabel icon={Radio} kicker="05 · Fight Week" title="Riff-Ready Brief" />
      <p className="text-sm text-neutral-400 max-w-3xl mb-6 leading-relaxed">{brief.intro}</p>

      {brief.weighin_notes.length > 0 && (
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 mb-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">Weigh-In Notes</p>
          <ul className="space-y-2">
            {brief.weighin_notes.map((note, idx) => (
              <li key={idx} className="text-sm text-neutral-300 flex gap-2">
                <span style={{ color: HTB_CRIMSON }}>·</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-3">
        {brief.riff_bullets.map((rb, idx) => (
          <div key={idx} className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: HTB_CRIMSON }}>{rb.topic}</p>
            <p className="text-xs text-neutral-500 mb-3">{rb.context}</p>
            <div className="rounded-lg bg-black/40 p-3 border border-white/[0.04]">
              <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">Riff angle</p>
              <p className="text-sm text-neutral-200 italic leading-relaxed">&ldquo;{rb.riff}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArenaProjectionSection({ projection }: { projection: ArenaProjection }) {
  return (
    <section>
      <SectionLabel icon={Trophy} kicker="09 · Arena Reach" title="What 7K Avg Views Actually Means" />
      <p className="text-sm text-neutral-400 max-w-3xl mb-8 leading-relaxed">{projection.intro}</p>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-4 mb-10">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <LineChart className="w-3.5 h-3.5" style={{ color: HTB_CRIMSON }} />
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Model Assumptions</p>
          </div>
          <dl className="space-y-2.5">
            <AssumptionRow label="Avg views" value={projection.assumptions.yt_avg_views} />
            <AssumptionRow label="Uploads / week" value={projection.assumptions.uploads_per_week} />
            <AssumptionRow label="Weekly audience" value={projection.assumptions.weekly_audience} />
            <AssumptionRow label="Click-through" value={projection.assumptions.click_through} />
            <AssumptionRow label="Signup → MAU" value={projection.assumptions.signup_to_mau} />
          </dl>
        </div>

        <div
          className="rounded-2xl p-5 md:p-6 relative overflow-hidden"
          style={{
            border: `1px solid rgba(${HTB_CRIMSON_RGB}, 0.25)`,
            background: `linear-gradient(135deg, rgba(${HTB_CRIMSON_RGB}, 0.08), transparent 70%)`,
          }}
        >
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: HTB_CRIMSON }} />

          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-3.5 h-3.5" style={{ color: HTB_CRIMSON }} />
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Projected Audience</p>
            </div>

            <div className="flex items-end gap-2 mb-1">
              <p className="font-display text-7xl md:text-8xl tracking-tighter leading-none" style={{ color: HTB_CRIMSON }}>
                {projection.projected_numbers.steady_state_mau}
              </p>
              <p className="text-sm text-neutral-300 mb-2">MAU</p>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">steady state · post-quarter 2</p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <RampStat label="Week 1" value={projection.projected_numbers.week_1_new} suffix=" new" />
              <RampStat label="Month 1" value={projection.projected_numbers.month_1_mau} suffix=" MAU" />
              <RampStat label="Quarter 1" value={projection.projected_numbers.quarter_mau} suffix=" MAU" />
            </div>

            <p className="mt-5 pt-5 border-t border-white/[0.05] text-[11px] text-neutral-400 leading-relaxed italic">
              {projection.projected_numbers.note}
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <ArenaAngleColumn
          title="Monetization"
          subtitle="Revenue paths"
          icon={Coins}
          accentColor="#f59e0b"
          accentRgb="245 158 11"
          angles={projection.monetization}
        />
        <ArenaAngleColumn
          title="Pioneer"
          subtitle="Category-firsts · brand equity"
          icon={Lightbulb}
          accentColor="#a855f7"
          accentRgb="168 85 247"
          angles={projection.pioneer}
        />
        <ArenaAngleColumn
          title="Indirect Value"
          subtitle="Audience leverage"
          icon={Eye}
          accentColor="#3b82f6"
          accentRgb="59 130 246"
          angles={projection.indirect}
        />
      </div>

      <div
        className="rounded-2xl p-6 md:p-7 relative overflow-hidden"
        style={{
          border: '1px solid rgba(168,85,247,0.25)',
          background: 'linear-gradient(135deg, rgba(168,85,247,0.06), rgba(245,158,11,0.04) 60%, transparent)',
        }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: '#a855f7' }} />

        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Megaphone className="w-3.5 h-3.5" style={{ color: '#a855f7' }} />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold" style={{ color: '#a855f7' }}>
              Recurring Segment Recommendation
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight leading-none mb-3 text-white">
            {projection.recurring_segment.name}
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed mb-4 max-w-3xl">
            {projection.recurring_segment.description}
          </p>

          <div className="rounded-lg bg-black/40 border border-white/[0.05] p-4 max-w-3xl">
            <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2">Example Hook (read this aloud)</p>
            <p className="text-sm text-neutral-100 italic leading-relaxed">&ldquo;{projection.recurring_segment.example_hook}&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AssumptionRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 pb-2.5 border-b border-white/[0.04] last:border-0 last:pb-0">
      <dt className="text-[10px] uppercase tracking-wider text-neutral-500 shrink-0">{label}</dt>
      <dd className="text-xs text-neutral-300 text-right">{value}</dd>
    </div>
  );
}

function RampStat({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  return (
    <div className="rounded-lg bg-black/30 border border-white/[0.04] p-3">
      <p className="text-[9px] uppercase tracking-wider text-neutral-500 mb-1">{label}</p>
      <p className="font-display text-2xl tracking-tight leading-none text-white">
        {value}
        <span className="text-[9px] ml-1 text-neutral-400 normal-case tracking-normal font-sans">{suffix}</span>
      </p>
    </div>
  );
}

function ArenaAngleColumn({
  title,
  subtitle,
  icon: Icon,
  accentColor,
  accentRgb,
  angles,
}: {
  title: string;
  subtitle: string;
  icon: typeof Mic;
  accentColor: string;
  accentRgb: string;
  angles: ArenaAngle[];
}) {
  return (
    <div className="space-y-3">
      <div
        className="rounded-xl p-4 backdrop-blur-sm"
        style={{ border: `1px solid rgba(${accentRgb}, 0.25)`, background: `linear-gradient(135deg, rgba(${accentRgb}, 0.08), transparent 70%)` }}
      >
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-3.5 h-3.5" style={{ color: accentColor }} />
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: accentColor }}>
            {title}
          </p>
        </div>
        <p className="text-[10px] uppercase tracking-wider text-neutral-500">{subtitle}</p>
      </div>

      {angles.map((angle, idx) => (
        <div key={idx} className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-4 hover:bg-white/[0.04] transition-colors">
          <div className="flex items-center justify-between gap-2 mb-2">
            <p className="text-sm font-semibold text-white leading-tight">{angle.title}</p>
            <span
              className="text-[8px] uppercase tracking-[0.15em] font-bold px-1.5 py-0.5 rounded shrink-0"
              style={{
                background: angle.level === 'concrete' ? 'rgba(16,185,129,0.1)' : 'rgba(168,85,247,0.1)',
                color: angle.level === 'concrete' ? '#10b981' : '#a855f7',
                border: angle.level === 'concrete' ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(168,85,247,0.3)',
              }}
            >
              {angle.level === 'concrete' ? 'Concrete' : 'Aspirational'}
            </span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">{angle.description}</p>
        </div>
      ))}
    </div>
  );
}

function ArenaSection({ callout }: { callout: ArenaCallout }) {
  return (
    <section>
      <SectionLabel icon={Trophy} kicker="06 · Arena" title="Community Spotlight" />
      <p className="text-sm text-neutral-400 max-w-3xl mb-6 leading-relaxed">{callout.intro}</p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 md:col-span-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Total Predictions</p>
          <p className="font-display text-5xl tracking-tight" style={{ color: HTB_CRIMSON }}>
            {callout.total_predictions.toLocaleString()}
          </p>
          <p className="text-xs text-neutral-400 mt-1">listeners weighed in</p>
        </div>

        <div className="md:col-span-2 space-y-3">
          {callout.highlights.map((h, idx) => (
            <div key={idx} className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: HTB_CRIMSON }}>
                {h.type.replace('_', ' ')}
              </p>
              <p className="text-sm text-neutral-200 italic leading-relaxed">&ldquo;{h.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialSection({ column }: { column: EditorialColumn }) {
  return (
    <section>
      <SectionLabel icon={Newspaper} kicker="07 · Editorial" title="Long-Form Column" />

      <article className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm p-8 md:p-12">
        <p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: HTB_CRIMSON }}>{column.kicker}</p>
        <h3 className="font-display text-3xl md:text-5xl uppercase leading-[0.95] tracking-tight">
          {column.title}
        </h3>
        <p className="mt-3 text-base md:text-lg text-neutral-400 italic">{column.subtitle}</p>

        <div className="mt-8 space-y-5 max-w-2xl">
          {column.body_paragraphs.map((p, idx) => (
            <p key={idx} className="text-[15px] text-neutral-300 leading-[1.75]">{p}</p>
          ))}
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <div className="border-l-4 pl-5" style={{ borderColor: HTB_CRIMSON }}>
            <Quote className="w-6 h-6 mb-3" style={{ color: HTB_CRIMSON }} />
            <p className="font-display text-2xl md:text-3xl uppercase leading-tight tracking-tight">
              {column.pull_quote}
            </p>
          </div>
        </div>

        <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
          — {column.byline}
        </p>
      </article>
    </section>
  );
}

function Footer({ hostName, showName, identity }: { hostName: string; showName: string; identity: ShowIdentity }) {
  return (
    <footer className="pt-12 mt-8 border-t border-white/[0.06]">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5" style={{ color: HTB_CRIMSON }} />
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">Powered by Crenas</p>
          </div>
          <p className="text-xs text-neutral-500 max-w-md leading-relaxed">
            This is a {showName} branded creator kit. Research dossiers, interview prep, show notes,
            and multi-platform assets, delivered to {hostName} every fight week.
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-2">Connect</p>
          <div className="flex flex-wrap md:justify-end gap-x-4 gap-y-1 text-xs">
            {identity.show_x_handle && <span className="font-mono text-neutral-400">{identity.show_x_handle}</span>}
            {identity.host_x_handle && <span className="font-mono text-neutral-400">{identity.host_x_handle}</span>}
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-wider text-neutral-600">
            {identity.years_on_air} years · {identity.total_episodes}+ episodes · still going
          </p>
        </div>
      </div>
    </footer>
  );
}
