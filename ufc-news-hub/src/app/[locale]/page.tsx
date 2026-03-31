'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import {
  ArrowRight, BarChart3, Brain, CheckCircle2, ChevronDown, ChevronUp,
  Clock, Database, FileText, Globe, Layers, MessageCircle, Mail,
  Search, Share2, Shield, Sparkles, Star, Target, TrendingUp, Trophy,
  Users, Activity,
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════
// Constants
// ═══════════════════════════════════════════════════════════

type TabId = 'produto' | 'analise' | 'arena' | 'contato';

const LOCALES = [
  { code: 'pt', flag: '🇧🇷', label: 'PT' },
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
] as const;

// ═══════════════════════════════════════════════════════════
// Shared Components
// ═══════════════════════════════════════════════════════════

function LangSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const current = LOCALES.find(l => l.code === locale) || LOCALES[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-all"
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">{current.label}</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 z-50 rounded-lg bg-zinc-950 border border-zinc-800 shadow-2xl py-1 min-w-[120px]">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  router.replace(pathname, { locale: l.code });
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-xs hover:bg-zinc-900 transition-colors ${
                  locale === l.code ? 'text-[#E20814] font-bold' : 'text-zinc-400'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function TabNav({ active, onChange }: { active: TabId; onChange: (t: TabId) => void }) {
  const t = useTranslations('landing');
  const TABS = [
    { id: 'produto' as TabId, label: t('nav_produto'), icon: Sparkles },
    { id: 'analise' as TabId, label: t('nav_analise'), icon: FileText },
    { id: 'arena' as TabId, label: t('nav_arena'), icon: Trophy },
    { id: 'contato' as TabId, label: t('nav_contato'), icon: MessageCircle },
  ];
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/90 border-b border-zinc-800/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center h-14 gap-1">
          <div className="mr-6 flex items-center gap-2">
            <span className="font-display text-xl text-[#E20814] tracking-wider">CRENAS</span>
            <span className="text-[9px] text-zinc-600">.site</span>
          </div>
          <div className="flex items-center gap-1">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onChange(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/[0.06]'
                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.03]'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-[#E20814]' : ''}`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  {isActive && (
                    <div className="absolute inset-x-2 -bottom-[9px] h-[2px] bg-[#E20814] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <LangSwitcher />
            <a
              href="https://wa.me/16463549521?text=Oi!%20Tenho%20interesse%20no%20Crenas%20para%20meu%20canal%20de%20conteudo%20UFC"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-emerald-500 transition-all"
            >
              <MessageCircle className="h-3 w-3" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800/60 py-5 cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-white font-medium pr-4">{q}</p>
        {open ? <ChevronUp className="h-4 w-4 text-zinc-500" /> : <ChevronDown className="h-4 w-4 text-zinc-500" />}
      </div>
      {open && <p className="mt-3 text-xs leading-relaxed text-zinc-400">{a}</p>}
    </div>
  );
}

function MiniStatBar({ label, valueA, valueB }: { label: string; valueA: number; valueB: number; nameA: string; nameB: string }) {
  const max = Math.max(valueA, valueB) * 1.2 || 1;
  return (
    <div className="mb-3">
      <p className="text-[9px] uppercase tracking-wider text-zinc-500 mb-1.5 text-center">{label}</p>
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-[#E20814] w-10 text-right">{valueA}</span>
        <div className="flex-1 flex items-center gap-1 h-2">
          <div className="flex-1 flex justify-end"><div className="h-full bg-gradient-to-l from-[#E20814] to-[#E20814]/30 rounded-full" style={{ width: `${(valueA / max) * 100}%` }} /></div>
          <div className="w-px h-3 bg-zinc-700" />
          <div className="flex-1"><div className="h-full bg-gradient-to-r from-blue-400 to-blue-400/30 rounded-full" style={{ width: `${(valueB / max) * 100}%` }} /></div>
        </div>
        <span className="text-xs font-bold text-blue-400 w-10">{valueB}</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TAB 1: PRODUTO
// ═══════════════════════════════════════════════════════════

function TabProduto({ onNavigate }: { onNavigate: (t: TabId) => void }) {
  const t = useTranslations('landing');
  return (
    <div className="animate-fade-in">

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Ambient Glow - spec 1 */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(226,8,20,0.08) 0%, transparent 70%)', filter: 'blur(120px)' }}
        />
        {/* Octagon watermark SVG - spec 5 */}
        <svg
          viewBox="0 0 400 400"
          className="absolute right-[-5%] top-[10%] w-[600px] h-[600px] pointer-events-none"
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        >
          <polygon points="165,2 235,2 287,54 287,146 235,198 165,198 113,146 113,54" transform="translate(0,100) scale(1.8)" />
        </svg>

        <div className="relative mx-auto max-w-6xl px-6 py-28">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-5 py-2 border border-white/[0.06]">
              <Sparkles className="h-3.5 w-3.5 text-[#E20814] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814]">
                {t('hero_badge')}
              </span>
            </div>

            {/* Headline - spec 2: text-5xl/6xl, tracking-tighter, DADOS em vermelho com drop-shadow */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.95]">
              {t('hero_title_1')}<br />
              <span className="text-[#E20814] drop-shadow-[0_0_10px_rgba(226,8,20,0.3)]">{t('hero_title_2')}</span><br />
              <span className="text-zinc-500 text-[0.75em]">{t('hero_title_3')}</span>
            </h1>

            {/* Subheadline - spec 2: text-zinc-400, text-lg, max-w-2xl */}
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              {t('hero_desc')}
            </p>

            {/* Trust numbers */}
            <div className="mt-16 flex justify-center gap-8 md:gap-16">
              {[
                { value: '15', label: t('hero_stat_1_label') },
                { value: '78%', label: t('hero_stat_2_label') },
                { value: '0h', label: t('hero_stat_3_label') },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-4xl md:text-5xl text-white">{item.value}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-wider text-zinc-500">{item.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons - spec 2 */}
            <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {/* Primary: #E20814 bg, rounded-full, border-t-white/20, shadow vermelho */}
              <button
                onClick={() => onNavigate('analise')}
                className="group inline-flex items-center gap-2 rounded-full bg-[#E20814] border-t border-t-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-600 shadow-[0_10px_20px_rgba(226,8,20,0.4)]"
              >
                {t('hero_cta_example')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* Secondary: ghost, border-zinc-800, text-zinc-300, hover:bg-zinc-900 */}
              <button
                onClick={() => onNavigate('arena')}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-300 hover:bg-zinc-900 transition-all"
              >
                {t('hero_cta_arena')}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814]/70 mb-3">{t('problem_tag')}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-white">
            {t('problem_title_1')}<br />{t('problem_title_2')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: Clock, title: t('problem_time_title'), stat: '8-15h', desc: t('problem_time_desc') },
            { icon: TrendingUp, title: t('problem_quality_title'), stat: '25+', desc: t('problem_quality_desc') },
            { icon: Users, title: t('problem_scale_title'), stat: '14', desc: t('problem_scale_desc') },
          ].map((item, i) => (
            <div key={i} className="group relative rounded-2xl bg-zinc-900/30 border border-white/5 p-7 overflow-hidden hover:border-white/10 transition-all duration-500">
              <item.icon className="h-5 w-5 text-[#E20814] mb-4" />
              <p className="font-display text-sm uppercase text-white mb-1">{item.title}</p>
              <p className="font-display text-5xl text-[#E20814]/15 mb-3">{item.stat}</p>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BEFORE/AFTER CARDS - spec 4 ─── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814]/70 mb-3">{t('value_tag')}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-white">
              {t('value_title')} <span className="text-[#E20814]">&rarr;</span> {t('value_title_2')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Manual - spec 4: bg-zinc-900/30, border-white/5 */}
            <div className="rounded-2xl bg-zinc-900/30 border border-white/5 p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-6">Manual</p>
              <div className="space-y-5">
                {[
                  { metric: t('value_volume'), value: '2-3/sem', desc: t('value_volume_desc') },
                  { metric: t('value_research'), value: '15h', desc: t('value_research_desc') },
                  { metric: t('value_coverage'), value: t('value_coverage_before'), desc: t('value_coverage_desc') },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-600 mb-1">{item.metric}</p>
                    <p className="font-display text-3xl text-zinc-600">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Octagon IA - spec 4: bg-zinc-900/50, border-[#E20814]/30, 0H gigantesco */}
            <div className="rounded-2xl bg-zinc-900/50 border border-[#E20814]/30 p-8 relative overflow-hidden">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814] mb-6">Octagon IA</p>
              <div className="space-y-5">
                {[
                  { metric: t('value_volume'), value: '8-12/sem', highlight: false },
                  { metric: t('value_research'), value: '0H', highlight: true },
                  { metric: t('value_coverage'), value: t('value_coverage_after'), highlight: false },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">{item.metric}</p>
                    <p className={`font-display ${item.highlight ? 'text-6xl text-[#E20814] font-bold' : 'text-3xl text-white'}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              {/* Micro-graph - spec 4: subtle bar chart in red */}
              <div className="absolute bottom-6 right-6 flex items-end gap-1 opacity-30">
                {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                  <div key={i} className="w-1.5 rounded-t-sm bg-[#E20814]" style={{ height: `${h * 0.5}px` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Metrics grid below */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { icon: BarChart3, metric: t('value_quality'), before: t('value_quality_before'), after: t('value_quality_after') },
              { icon: CheckCircle2, metric: t('value_frequency'), before: t('value_frequency_before'), after: t('value_frequency_after') },
              { icon: Share2, metric: t('value_publish'), before: t('value_publish_before'), after: t('value_publish_after') },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-zinc-900/30 border border-white/5 p-5">
                <item.icon className="h-4 w-4 text-[#E20814] mb-2" />
                <p className="text-[10px] uppercase tracking-wider text-zinc-600 mb-2">{item.metric}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-600 line-through">{item.before}</span>
                  <ArrowRight className="h-3 w-3 text-[#E20814]" />
                  <span className="text-sm text-emerald-400 font-bold">{item.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PIPELINE - spec 3 ─── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814]/70 mb-3">{t('pipeline_tag')}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-white">
            {t('pipeline_title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400">
            {t('pipeline_desc')}
          </p>
        </div>

        {/* Pipeline flow - spec 3 */}
        <div className="relative">
          {/* Connecting line with gradient - spec 3: 2px, #1F1F1F to #E20814 */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] z-0">
            {/* Segments 1-3: #1F1F1F */}
            <div className="absolute left-0 w-[66%] h-full bg-[#1F1F1F]" />
            {/* Segment 3-4: gradient to red with glow */}
            <div className="absolute left-[66%] right-0 h-full bg-gradient-to-r from-[#1F1F1F] to-[#E20814] shadow-[0_0_12px_rgba(226,8,20,0.4)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { num: '01', icon: Search, title: t('pipeline_1_title'), desc: t('pipeline_1_desc'), isLast: false },
              { num: '02', icon: Database, title: t('pipeline_2_title'), desc: t('pipeline_2_desc'), isLast: false },
              { num: '03', icon: Brain, title: t('pipeline_3_title'), desc: t('pipeline_3_desc'), isLast: false },
              { num: '04', icon: Layers, title: t('pipeline_4_title'), desc: t('pipeline_4_desc'), isLast: true },
            ].map((step, i) => (
              <div key={i} className="relative text-center group">
                {/* Step icon block - spec 3: w-20 h-20, bg-zinc-900/80, border-white/10, rounded-2xl, backdrop-blur */}
                <div
                  className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl backdrop-blur-md transition-all duration-300 ${
                    step.isLast
                      ? 'bg-zinc-900/80 border border-[#E20814] shadow-[0_0_20px_rgba(226,8,20,0.25)]'
                      : 'bg-zinc-900/80 border border-white/10 group-hover:border-white/20'
                  }`}
                >
                  <step.icon className={`h-7 w-7 ${step.isLast ? 'text-[#E20814]' : 'text-zinc-400 group-hover:text-white transition-colors'}`} />
                </div>
                {/* Micro-labels - spec 3: text-[10px] uppercase bold, then text-[12px] gray */}
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  {step.num} {step.title}
                </p>
                <p className="text-[12px] text-zinc-600 mt-1 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TAB 2: ANALISE
// ═══════════════════════════════════════════════════════════

function TabAnalise() {
  const t = useTranslations('landing');
  return (
    <div className="animate-fade-in">

      {/* Hero with fighters */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(226,8,20,0.12)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(59,130,246,0.08)_0%,_transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5 border border-white/[0.06] mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814]">UFC Fight Night</span>
            </div>
            <p className="text-[11px] text-zinc-500">{t('analise_event_details')}</p>
          </div>

          <div className="flex items-center justify-center gap-6 md:gap-16">
            <div className="text-center flex-1 max-w-[220px]">
              <div className="mx-auto mb-4 h-36 w-28 md:h-52 md:w-40 rounded-2xl bg-gradient-to-b from-[#E20814]/20 to-transparent border border-[#E20814]/20 overflow-hidden relative">
                <img src="/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-01%2F12%2FMOICANO_RENATO_L_09-28.png%3Fitok%3DaJ4kuhkB" alt="Renato Moicano" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>
              <p className="font-display text-2xl md:text-3xl uppercase text-white">Moicano</p>
              <p className="text-xs text-[#E20814] font-bold mt-1">&quot;Money Moicano&quot;</p>
              <p className="text-xs text-zinc-500 mt-1">{t('analise_fighter1_record')}</p>
              <p className="text-[10px] text-zinc-600 mt-1">{t('analise_fighter1_info')}</p>
            </div>

            <div className="flex flex-col items-center gap-2 mx-2">
              <span className="font-display text-3xl md:text-5xl text-white/10">VS</span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-600">Main Event</span>
            </div>

            <div className="text-center flex-1 max-w-[220px]">
              <div className="mx-auto mb-4 h-36 w-28 md:h-52 md:w-40 rounded-2xl bg-gradient-to-b from-blue-400/20 to-transparent border border-blue-400/20 overflow-hidden relative">
                <img src="/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2023-07%2FDUNCAN_CHRIS_L_07-22.png%3Fitok%3DHlQ_JCOr" alt="Chris Duncan" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>
              <p className="font-display text-2xl md:text-3xl uppercase text-white">Duncan</p>
              <p className="text-xs text-blue-400 font-bold mt-1">&quot;The Problem&quot;</p>
              <p className="text-xs text-zinc-500 mt-1">{t('analise_fighter2_record')}</p>
              <p className="text-[10px] text-zinc-600 mt-1">{t('analise_fighter2_info')}</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="font-display text-lg md:text-2xl uppercase text-white/80">{t('analise_tagline')}</p>
            <p className="text-xs text-zinc-500 mt-2 max-w-md mx-auto">{t('analise_tagline_desc')}</p>
          </div>
        </div>
      </section>

      {/* Stats + Narratives */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-zinc-900/30 border border-white/5 p-6">
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-4 text-center">{t('analise_stats_title')}</p>
            <div className="flex justify-between mb-4 px-2">
              <span className="text-[10px] font-bold text-[#E20814] uppercase">Moicano</span>
              <span className="text-[10px] font-bold text-blue-400 uppercase">Duncan</span>
            </div>
            <MiniStatBar label="Strikes/Min" valueA={4.17} valueB={5.02} nameA="Moicano" nameB="Duncan" />
            <MiniStatBar label={t('analise_stat_accuracy')} valueA={48} valueB={46} nameA="Moicano" nameB="Duncan" />
            <MiniStatBar label={t('analise_stat_defense')} valueA={59} valueB={51} nameA="Moicano" nameB="Duncan" />
            <MiniStatBar label={t('analise_stat_takedowns')} valueA={1.67} valueB={3.27} nameA="Moicano" nameB="Duncan" />
            <MiniStatBar label={t('analise_stat_td_defense')} valueA={62} valueB={50} nameA="Moicano" nameB="Duncan" />
          </div>

          <div className="space-y-4">
            {[
              { title: t('analise_narrative_1_title'), desc: t('analise_narrative_1_desc') },
              { title: t('analise_narrative_2_title'), desc: t('analise_narrative_2_desc') },
              { title: t('analise_narrative_3_title'), desc: t('analise_narrative_3_desc') },
              { title: t('analise_narrative_4_title'), desc: t('analise_narrative_4_desc') },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-zinc-900/30 border border-white/5 p-4 flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-[#E20814]" />
                <div>
                  <p className="text-xs font-bold text-white mb-1">{item.title}</p>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections grid */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814]/70 mb-3">{t('analise_sections_tag')}</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-white">
            {t('analise_sections_title')}
          </h2>
          <p className="text-xs text-zinc-500 mt-2">{t('analise_sections_desc')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { icon: FileText, name: t('analise_sec_01'), num: '01' },
            { icon: Activity, name: t('analise_sec_02'), num: '02' },
            { icon: BarChart3, name: t('analise_sec_05'), num: '05' },
            { icon: Shield, name: t('analise_sec_08'), num: '08' },
            { icon: Brain, name: t('analise_sec_09'), num: '09' },
            { icon: Target, name: t('analise_sec_10'), num: '10' },
            { icon: Star, name: t('analise_sec_11'), num: '11' },
            { icon: Search, name: t('analise_sec_12'), num: '12' },
            { icon: Share2, name: t('analise_sec_13'), num: '13' },
            { icon: TrendingUp, name: t('analise_sec_15'), num: '15' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-zinc-900/30 border border-white/5 p-3 text-center hover:border-[#E20814]/20 transition-all group">
              <span className="text-[9px] text-[#E20814]/40 font-bold">{item.num}</span>
              <item.icon className="h-4 w-4 text-zinc-600 mx-auto mt-1 group-hover:text-[#E20814] transition-colors" />
              <p className="text-[10px] text-zinc-500 mt-1.5 group-hover:text-white transition-colors">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/analise/moicano-vs-duncan"
            className="group inline-flex items-center gap-3 rounded-full bg-[#E20814] border-t border-t-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-600 shadow-[0_10px_20px_rgba(226,8,20,0.4)]"
          >
            {t('analise_cta')}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-[10px] text-zinc-500 mt-3">{t('analise_cta_sub')}</p>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TAB 3: ARENA
// ═══════════════════════════════════════════════════════════

function TabArena() {
  const t = useTranslations('landing');
  return (
    <div className="animate-fade-in">

      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(226,8,20,0.06) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
        <svg viewBox="0 0 400 400" className="absolute right-[-8%] top-[15%] w-[500px] h-[500px] pointer-events-none" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1">
          <polygon points="165,2 235,2 287,54 287,146 235,198 165,198 113,146 113,54" transform="translate(0,100) scale(1.8)" />
        </svg>

        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-5 py-2 border border-white/[0.06]">
              <Trophy className="h-3.5 w-3.5 text-[#E20814]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814]">{t('arena_badge')}</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-white leading-[0.95]">
              {t('arena_title_1')}<br />
              <span className="text-[#E20814] drop-shadow-[0_0_10px_rgba(226,8,20,0.3)]">{t('arena_title_2')}</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              {t('arena_desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814]/70 mb-3">{t('arena_why_tag')}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-white">
            {t('arena_why_title_1')}<br /><span className="text-zinc-500">{t('arena_why_title_2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: t('arena_retain_title'), stat: t('arena_retain_stat'), desc: t('arena_retain_desc') },
            { icon: Trophy, title: t('arena_community_title'), stat: t('arena_community_stat'), desc: t('arena_community_desc') },
            { icon: TrendingUp, title: t('arena_content_title'), stat: '42', desc: t('arena_content_desc') },
          ].map((item, i) => (
            <div key={i} className="group relative rounded-2xl bg-zinc-900/30 border border-white/5 p-7 overflow-hidden hover:border-white/10 transition-all duration-500">
              <item.icon className="h-5 w-5 text-zinc-500 mb-4 group-hover:text-[#E20814] transition-colors" />
              <p className="font-display text-sm uppercase text-white mb-1">{item.title}</p>
              <p className="font-display text-5xl text-[#E20814]/15 mb-3">{item.stat}</p>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="rounded-2xl bg-zinc-900/30 border border-white/5 p-6 md:p-8">
          <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-6">{t('arena_features_title')}</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {[
              t('arena_feature_1'), t('arena_feature_2'), t('arena_feature_4'),
              t('arena_feature_5'), t('arena_feature_6'), t('arena_feature_7'), t('arena_feature_8'),
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-zinc-400">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-zinc-800 px-5 py-2 mb-6">
            <Shield className="h-3.5 w-3.5 text-zinc-500" />
            <p className="text-xs text-zinc-400">{t('arena_whitelabel')}</p>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
            {t('arena_explore_title')}
          </h2>
          <p className="text-sm text-zinc-500 max-w-md mx-auto mb-8">
            {t('arena_explore_desc')}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/arena"
              className="group inline-flex items-center gap-3 rounded-full bg-[#E20814] border-t border-t-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-600 shadow-[0_10px_20px_rgba(226,8,20,0.4)]"
            >
              {t('arena_cta_explore')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/16463549521?text=Oi!%20Tenho%20interesse%20no%20Arena%20do%20Crenas%20para%20meu%20canal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-300 hover:bg-zinc-900 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              {t('arena_cta_contact')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TAB 4: CONTATO + FAQ
// ═══════════════════════════════════════════════════════════

function TabContato() {
  const t = useTranslations('landing');
  return (
    <div className="animate-fade-in">

      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(226,8,20,0.06) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />

        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.95]">
            {t('contact_title_1')}<br />
            <span className="text-[#E20814] drop-shadow-[0_0_10px_rgba(226,8,20,0.3)]">{t('contact_title_2')}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm text-zinc-400">
            {t('contact_desc')}
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/16463549521?text=Oi!%20Tenho%20interesse%20no%20Crenas%20para%20meu%20canal%20de%20conteudo%20UFC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-5 text-base font-bold uppercase tracking-wider text-white transition-all hover:bg-emerald-500 shadow-[0_10px_20px_rgba(16,185,129,0.25)]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href="mailto:contato@crenas.site"
              className="inline-flex items-center gap-3 rounded-2xl border border-zinc-800 px-8 py-5 text-base font-bold uppercase tracking-wider text-zinc-300 transition-all hover:bg-zinc-900"
            >
              <Mail className="h-5 w-5" />
              contato@crenas.site
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814]/70 mb-3">{t('faq_tag')}</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-white">FAQ</h2>
        </div>

        <div className="rounded-2xl bg-zinc-900/30 border border-white/5 p-6 md:p-8">
          <FAQ q={t('faq_1_q')} a={t('faq_1_a')} />
          <FAQ q={t('faq_2_q')} a={t('faq_2_a')} />
          <FAQ q={t('faq_3_q')} a={t('faq_3_a')} />
          <FAQ q={t('faq_4_q')} a={t('faq_4_a')} />
          <FAQ q={t('faq_5_q')} a={t('faq_5_a')} />
          <FAQ q={t('faq_6_q')} a={t('faq_6_a')} />
        </div>
      </section>

      <footer className="border-t border-zinc-800/60">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="font-display text-lg uppercase text-[#E20814]">crenas.site</p>
            <p className="text-[10px] text-zinc-600">&copy; 2026 Crenas. {t('footer_rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Main Page
// ═══════════════════════════════════════════════════════════

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<TabId>('produto');

  const handleNavigate = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <TabNav active={activeTab} onChange={handleNavigate} />

      {activeTab === 'produto' && <TabProduto onNavigate={handleNavigate} />}
      {activeTab === 'analise' && <TabAnalise />}
      {activeTab === 'arena' && <TabArena />}
      {activeTab === 'contato' && <TabContato />}
    </main>
  );
}
