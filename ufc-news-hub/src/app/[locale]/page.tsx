'use client';

import { useState, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import {
  ArrowRight, BarChart3, Brain, CheckCircle2, ChevronDown, ChevronUp,
  Clock, Database, FileText, Globe, Layers, MessageCircle, Mail, Play,
  Search, Share2, Shield, Sparkles, Star, Target, TrendingUp, Trophy,
  Users, Zap, Swords, Activity, Flame, Crown, Lock,
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════
// Tab Navigation
// ═══════════════════════════════════════════════════════════

type TabId = 'produto' | 'analise' | 'arena' | 'contato';

const LOCALES = [
  { code: 'pt', flag: '🇧🇷', label: 'PT' },
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
] as const;

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
        className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all"
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">{current.label}</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 z-50 rounded-lg bg-white border border-neutral-200 shadow-lg py-1 min-w-[120px]">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  router.replace(pathname, { locale: l.code });
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-xs hover:bg-neutral-50 transition-colors ${
                  locale === l.code ? 'text-ufc-red font-bold' : 'text-neutral-600'
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
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-neutral-200 shadow-sm">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-center h-14 gap-1">
          {/* Logo */}
          <div className="mr-6 flex items-center gap-2">
            <span className="font-display text-xl text-ufc-red tracking-wider">CRENAS</span>
            <span className="text-[9px] text-neutral-500">.site</span>
          </div>

          {/* Tabs */}
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
                      ? 'text-neutral-900 bg-ufc-red/15'
                      : 'text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-ufc-red' : ''}`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  {isActive && (
                    <div className="absolute inset-x-2 -bottom-[9px] h-[2px] bg-ufc-red rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right side: lang + CTA */}
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

// ═══════════════════════════════════════════════════════════
// FAQ
// ═══════════════════════════════════════════════════════════

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200 py-5 cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-900 font-medium pr-4">{q}</p>
        {open ? <ChevronUp className="h-4 w-4 text-neutral-500" /> : <ChevronDown className="h-4 w-4 text-neutral-500" />}
      </div>
      {open && <p className="mt-3 text-xs leading-relaxed text-neutral-600">{a}</p>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Stat Bar (mini, for analysis preview)
// ═══════════════════════════════════════════════════════════

function MiniStatBar({ label, valueA, valueB, nameA, nameB }: { label: string; valueA: number; valueB: number; nameA: string; nameB: string }) {
  const max = Math.max(valueA, valueB) * 1.2 || 1;
  return (
    <div className="mb-3">
      <p className="text-[9px] uppercase tracking-wider text-neutral-500 mb-1.5 text-center">{label}</p>
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-ufc-red w-10 text-right">{valueA}</span>
        <div className="flex-1 flex items-center gap-1 h-2">
          <div className="flex-1 flex justify-end"><div className="h-full bg-gradient-to-l from-ufc-red to-ufc-red/30 rounded-full" style={{ width: `${(valueA / max) * 100}%` }} /></div>
          <div className="w-px h-3 bg-neutral-300" />
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

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(210,10,10,0.2)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(210,10,10,0.08)_0%,_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.06)_0%,_transparent_40%)]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ufc-red/30 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-ufc-red/10 px-5 py-2 border border-ufc-red/20 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-ufc-red animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ufc-red">
                {t('hero_badge')}
              </span>
            </div>

            <h1 className="font-display text-5xl uppercase tracking-wide text-white md:text-7xl lg:text-8xl leading-[0.9]">
              {t('hero_title_1')}<br />
              <span className="bg-gradient-to-r from-ufc-red via-red-500 to-orange-500 bg-clip-text text-transparent">{t('hero_title_2')}</span><br />
              <span className="text-neutral-500 text-[0.7em]">{t('hero_title_3')}</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
              {t('hero_desc')}
            </p>

            {/* Trust numbers */}
            <div className="mt-14 flex justify-center gap-8 md:gap-16">
              {[
                { value: '15', label: t('hero_stat_1_label') },
                { value: '78%', label: t('hero_stat_2_label') },
                { value: '0h', label: t('hero_stat_3_label') },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-4xl md:text-5xl text-white">{item.value}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-wider text-neutral-500">{item.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={() => onNavigate('analise')}
                className="group inline-flex items-center gap-2 rounded-full bg-ufc-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-600 shadow-[0_0_30px_rgba(210,10,10,0.3)] hover:shadow-[0_0_50px_rgba(210,10,10,0.5)]"
              >
                {t('hero_cta_example')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('arena')}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-600 bg-neutral-800 px-8 py-4 text-sm font-bold uppercase tracking-wider text-neutral-200 hover:border-neutral-400 hover:text-white transition-all"
              >
                {t('hero_cta_arena')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ufc-red/70 mb-3">{t('problem_tag')}</p>
          <h2 className="font-display text-3xl uppercase text-neutral-900 md:text-5xl">
            {t('problem_title_1')}<br />{t('problem_title_2')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: Clock, title: t('problem_time_title'), stat: '8-15h', desc: t('problem_time_desc') },
            { icon: TrendingUp, title: t('problem_quality_title'), stat: '25+', desc: t('problem_quality_desc') },
            { icon: Users, title: t('problem_scale_title'), stat: '14', desc: t('problem_scale_desc') },
          ].map((item, i) => (
            <div key={i} className="group relative rounded-2xl bg-white border border-neutral-200 p-6 overflow-hidden hover:border-ufc-red/20 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-ufc-red/5 to-transparent rounded-bl-full" />
              <item.icon className="h-5 w-5 text-ufc-red mb-4" />
              <p className="font-display text-sm uppercase text-neutral-900 mb-1">{item.title}</p>
              <p className="font-display text-4xl text-ufc-red/30 mb-3">{item.stat}</p>
              <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(210,10,10,0.04)_0%,_transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ufc-red/70 mb-3">{t('value_tag')}</p>
            <h2 className="font-display text-3xl uppercase text-neutral-900 md:text-5xl">
              {t('value_title')} <span className="text-ufc-red">&rarr;</span> {t('value_title_2')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: FileText, metric: t('value_volume'), before: '2-3/sem', after: '8-12/sem', desc: t('value_volume_desc') },
              { icon: Clock, metric: t('value_research'), before: '15h', after: '0h', desc: t('value_research_desc') },
              { icon: BarChart3, metric: t('value_quality'), before: t('value_quality_before'), after: t('value_quality_after'), desc: t('value_quality_desc') },
              { icon: CheckCircle2, metric: t('value_frequency'), before: t('value_frequency_before'), after: t('value_frequency_after'), desc: t('value_frequency_desc') },
              { icon: Globe, metric: t('value_coverage'), before: t('value_coverage_before'), after: t('value_coverage_after'), desc: t('value_coverage_desc') },
              { icon: Share2, metric: t('value_publish'), before: t('value_publish_before'), after: t('value_publish_after'), desc: t('value_publish_desc') },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white border border-neutral-200 p-5 hover:border-ufc-red/20 transition-all">
                <item.icon className="h-4 w-4 text-ufc-red mb-3" />
                <p className="font-display text-xs uppercase text-neutral-600 mb-3">{item.metric}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-neutral-500 line-through">{item.before}</span>
                  <ArrowRight className="h-3 w-3 text-ufc-red" />
                  <span className="text-xs text-emerald-600 font-bold">{item.after}</span>
                </div>
                <p className="text-[10px] text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ufc-red/70 mb-3">{t('pipeline_tag')}</p>
          <h2 className="font-display text-3xl uppercase text-neutral-900 md:text-5xl">
            {t('pipeline_title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-500">
            {t('pipeline_desc')}
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-ufc-red/20 via-ufc-red/40 to-ufc-red/20" />
          {[
            { num: '01', icon: Search, title: t('pipeline_1_title'), desc: t('pipeline_1_desc') },
            { num: '02', icon: Database, title: t('pipeline_2_title'), desc: t('pipeline_2_desc') },
            { num: '03', icon: Brain, title: t('pipeline_3_title'), desc: t('pipeline_3_desc') },
            { num: '04', icon: Layers, title: t('pipeline_4_title'), desc: t('pipeline_4_desc') },
          ].map((step, i) => (
            <div key={i} className="relative text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-ufc-red/20 group-hover:border-ufc-red/50 group-hover:bg-ufc-red/5 transition-all duration-300">
                <step.icon className="h-6 w-6 text-ufc-red" />
              </div>
              <span className="text-[10px] font-bold text-ufc-red/40">{step.num}</span>
              <p className="font-display text-sm uppercase text-neutral-900 mt-1">{step.title}</p>
              <p className="text-[11px] text-neutral-500 mt-2">{step.desc}</p>
            </div>
          ))}
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
      <section className="relative overflow-hidden min-h-[70vh] flex items-center bg-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(210,10,10,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(59,130,246,0.1)_0%,_transparent_50%)]" />
        {/* Center VS glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,_rgba(255,255,255,0.02)_0%,_transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ufc-red/30 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 w-full">
          {/* Event badge */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-ufc-red/10 px-4 py-1.5 border border-ufc-red/20 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ufc-red">UFC Fight Night</span>
            </div>
            <p className="text-[11px] text-neutral-500">{t('analise_event_details')}</p>
          </div>

          {/* VS layout */}
          <div className="flex items-center justify-center gap-6 md:gap-16">
            {/* Fighter 1 */}
            <div className="text-center flex-1 max-w-[220px]">
              <div className="mx-auto mb-4 h-36 w-28 md:h-52 md:w-40 rounded-2xl bg-gradient-to-b from-ufc-red/20 to-transparent border border-ufc-red/30 overflow-hidden relative">
                <img src="/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-01%2F12%2FMOICANO_RENATO_L_09-28.png%3Fitok%3DaJ4kuhkB" alt="Renato Moicano" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              </div>
              <p className="font-display text-2xl md:text-3xl uppercase text-white">Moicano</p>
              <p className="text-xs text-ufc-red font-bold mt-1">&quot;Money Moicano&quot;</p>
              <p className="text-xs text-neutral-500 mt-1">{t('analise_fighter1_record')}</p>
              <p className="text-[10px] text-neutral-500 mt-1">{t('analise_fighter1_info')}</p>
            </div>

            {/* VS */}
            <div className="flex flex-col items-center gap-2 mx-2">
              <span className="font-display text-3xl md:text-5xl text-white/10">VS</span>
              <span className="text-[9px] uppercase tracking-widest text-neutral-500">Main Event</span>
            </div>

            {/* Fighter 2 */}
            <div className="text-center flex-1 max-w-[220px]">
              <div className="mx-auto mb-4 h-36 w-28 md:h-52 md:w-40 rounded-2xl bg-gradient-to-b from-blue-400/20 to-transparent border border-blue-400/30 overflow-hidden relative">
                <img src="/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2023-07%2FDUNCAN_CHRIS_L_07-22.png%3Fitok%3DHlQ_JCOr" alt="Chris Duncan" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              </div>
              <p className="font-display text-2xl md:text-3xl uppercase text-white">Duncan</p>
              <p className="text-xs text-blue-400 font-bold mt-1">&quot;The Problem&quot;</p>
              <p className="text-xs text-neutral-500 mt-1">{t('analise_fighter2_record')}</p>
              <p className="text-[10px] text-neutral-500 mt-1">{t('analise_fighter2_info')}</p>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mt-10">
            <p className="font-display text-lg md:text-2xl uppercase text-white/80">{t('analise_tagline')}</p>
            <p className="text-xs text-neutral-500 mt-2 max-w-md mx-auto">{t('analise_tagline_desc')}</p>
          </div>
        </div>
      </section>

      {/* Quick stats comparison */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stats */}
          <div className="rounded-2xl bg-white border border-neutral-200 p-6">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-4 text-center">{t('analise_stats_title')}</p>
            <div className="flex justify-between mb-4 px-2">
              <span className="text-[10px] font-bold text-ufc-red uppercase">Moicano</span>
              <span className="text-[10px] font-bold text-blue-400 uppercase">Duncan</span>
            </div>
            <MiniStatBar label="Strikes/Min" valueA={4.17} valueB={5.02} nameA="Moicano" nameB="Duncan" />
            <MiniStatBar label={t('analise_stat_accuracy')} valueA={48} valueB={46} nameA="Moicano" nameB="Duncan" />
            <MiniStatBar label={t('analise_stat_defense')} valueA={59} valueB={51} nameA="Moicano" nameB="Duncan" />
            <MiniStatBar label={t('analise_stat_takedowns')} valueA={1.67} valueB={3.27} nameA="Moicano" nameB="Duncan" />
            <MiniStatBar label={t('analise_stat_td_defense')} valueA={62} valueB={50} nameA="Moicano" nameB="Duncan" />
          </div>

          {/* Key narratives */}
          <div className="space-y-4">
            {[
              { title: t('analise_narrative_1_title'), desc: t('analise_narrative_1_desc') },
              { title: t('analise_narrative_2_title'), desc: t('analise_narrative_2_desc') },
              { title: t('analise_narrative_3_title'), desc: t('analise_narrative_3_desc') },
              { title: t('analise_narrative_4_title'), desc: t('analise_narrative_4_desc') },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white border border-neutral-200 p-4 flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ufc-red" />
                <div>
                  <p className="text-xs font-bold text-neutral-900 mb-1">{item.title}</p>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview sections */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ufc-red/70 mb-3">{t('analise_sections_tag')}</p>
          <h2 className="font-display text-2xl uppercase text-neutral-900 md:text-3xl">
            {t('analise_sections_title')}
          </h2>
          <p className="text-xs text-neutral-500 mt-2">{t('analise_sections_desc')}</p>
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
            <div key={i} className="rounded-xl bg-white border border-neutral-200 p-3 text-center hover:border-ufc-red/20 transition-all group">
              <span className="text-[9px] text-ufc-red/40 font-bold">{item.num}</span>
              <item.icon className="h-4 w-4 text-ufc-red/60 mx-auto mt-1 group-hover:text-ufc-red transition-colors" />
              <p className="text-[10px] text-neutral-600 mt-1.5 group-hover:text-neutral-900 transition-colors">{item.name}</p>
            </div>
          ))}
        </div>

        {/* CTA to full analysis */}
        <div className="mt-10 text-center">
          <Link
            href="/analise/moicano-vs-duncan"
            className="group inline-flex items-center gap-3 rounded-full bg-ufc-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-600 shadow-[0_0_30px_rgba(210,10,10,0.3)] hover:shadow-[0_0_50px_rgba(210,10,10,0.5)]"
          >
            {t('analise_cta')}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-[10px] text-neutral-500 mt-3">{t('analise_cta_sub')}</p>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TAB 3: ARENA (mockup, non-functional)
// ═══════════════════════════════════════════════════════════

function TabArena() {
  const t = useTranslations('landing');
  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(210,10,10,0.12)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-ufc-red/10 px-5 py-2 border border-ufc-red/20">
              <Trophy className="h-3.5 w-3.5 text-ufc-red" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ufc-red">{t('arena_badge')}</span>
            </div>

            <h1 className="font-display text-5xl uppercase text-white md:text-7xl leading-[0.9]">
              {t('arena_title_1')}<br />
              <span className="text-ufc-red">{t('arena_title_2')}</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
              {t('arena_desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Why it matters for creators */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ufc-red/70 mb-3">{t('arena_why_tag')}</p>
          <h2 className="font-display text-3xl uppercase text-neutral-900 md:text-4xl">
            {t('arena_why_title_1')}<br /><span className="text-neutral-500">{t('arena_why_title_2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: t('arena_retain_title'),
              stat: t('arena_retain_stat'),
              desc: t('arena_retain_desc'),
            },
            {
              icon: Trophy,
              title: t('arena_community_title'),
              stat: t('arena_community_stat'),
              desc: t('arena_community_desc'),
            },
            {
              icon: TrendingUp,
              title: t('arena_content_title'),
              stat: '42',
              desc: t('arena_content_desc'),
            },
          ].map((item, i) => (
            <div key={i} className="group relative rounded-2xl bg-white border border-neutral-200 p-6 overflow-hidden hover:border-white/10 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full" />
              <item.icon className="h-5 w-5 text-neutral-600 mb-4" />
              <p className="font-display text-sm uppercase text-neutral-900 mb-1">{item.title}</p>
              <p className="font-display text-4xl text-ufc-red/20 mb-3">{item.stat}</p>
              <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features list */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="rounded-2xl bg-white border border-neutral-200 p-6 md:p-8">
          <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-6">{t('arena_features_title')}</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {[
              t('arena_feature_1'),
              t('arena_feature_2'),
              t('arena_feature_4'),
              t('arena_feature_5'),
              t('arena_feature_6'),
              t('arena_feature_7'),
              t('arena_feature_8'),
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-neutral-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to explore */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-neutral-200 px-5 py-2 mb-6">
            <Shield className="h-3.5 w-3.5 text-neutral-500" />
            <p className="text-xs text-neutral-600">{t('arena_whitelabel')}</p>
          </div>

          <h2 className="font-display text-3xl uppercase text-neutral-900 md:text-4xl mb-4">
            {t('arena_explore_title')}
          </h2>
          <p className="text-sm text-neutral-500 max-w-md mx-auto mb-8">
            {t('arena_explore_desc')}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/arena"
              className="group inline-flex items-center gap-3 rounded-full bg-ufc-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-600 shadow-[0_0_30px_rgba(210,10,10,0.3)] hover:shadow-[0_0_50px_rgba(210,10,10,0.5)]"
            >
              {t('arena_cta_explore')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/16463549521?text=Oi!%20Tenho%20interesse%20no%20Arena%20do%20Crenas%20para%20meu%20canal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-neutral-600 hover:border-neutral-500 hover:text-neutral-900 transition-all"
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

      {/* CTA */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(210,10,10,0.12)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,_rgba(16,185,129,0.08)_0%,_transparent_40%)]" />

        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="font-display text-4xl uppercase text-white md:text-6xl leading-[0.9]">
            {t('contact_title_1')}<br />
            <span className="bg-gradient-to-r from-ufc-red to-orange-500 bg-clip-text text-transparent">{t('contact_title_2')}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm text-neutral-300">
            {t('contact_desc')}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/16463549521?text=Oi!%20Tenho%20interesse%20no%20Crenas%20para%20meu%20canal%20de%20conteudo%20UFC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-5 text-base font-bold uppercase tracking-wider text-white transition-all hover:bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href="mailto:contato@crenas.site"
              className="inline-flex items-center gap-3 rounded-2xl border border-neutral-600 bg-neutral-800 px-8 py-5 text-base font-bold uppercase tracking-wider text-neutral-200 transition-all hover:border-neutral-400 hover:text-white"
            >
              <Mail className="h-5 w-5" />
              contato@crenas.site
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ufc-red/70 mb-3">{t('faq_tag')}</p>
          <h2 className="font-display text-2xl uppercase text-neutral-900 md:text-3xl">FAQ</h2>
        </div>

        <div className="rounded-2xl bg-white border border-neutral-200 p-6 md:p-8">
          <FAQ q={t('faq_1_q')} a={t('faq_1_a')} />
          <FAQ q={t('faq_2_q')} a={t('faq_2_a')} />
          <FAQ q={t('faq_3_q')} a={t('faq_3_a')} />
          <FAQ q={t('faq_4_q')} a={t('faq_4_a')} />
          <FAQ q={t('faq_5_q')} a={t('faq_5_a')} />
          <FAQ q={t('faq_6_q')} a={t('faq_6_a')} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="font-display text-lg uppercase text-ufc-red">crenas.site</p>
            <p className="text-[10px] text-neutral-500">&copy; 2026 Crenas. {t('footer_rights')}</p>
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
    <main className="min-h-screen bg-[#f8f8f8] text-neutral-900">
      <TabNav active={activeTab} onChange={handleNavigate} />

      {activeTab === 'produto' && <TabProduto onNavigate={handleNavigate} />}
      {activeTab === 'analise' && <TabAnalise />}
      {activeTab === 'arena' && <TabArena />}
      {activeTab === 'contato' && <TabContato />}
    </main>
  );
}
