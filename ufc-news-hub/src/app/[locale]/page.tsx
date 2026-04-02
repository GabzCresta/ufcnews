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
// Constants & Types
// ═══════════════════════════════════════════════════════════

type TabId = 'produto' | 'analise' | 'arena' | 'contato';

const LOCALES = [
  { code: 'pt', flag: '🇧🇷', label: 'PT' },
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
] as const;

// ═══════════════════════════════════════════════════════════
// OCTAGON Logo — 'O' is a geometric octagon outline
// ═══════════════════════════════════════════════════════════

function OctagonLogo() {
  return (
    <div className="flex items-center gap-0">
      {/* The 'O' as octagon */}
      <svg viewBox="0 0 24 24" className="h-5 w-5 mr-[2px]" fill="none" stroke="#E20814" strokeWidth="1.8">
        <polygon points="7,2 17,2 22,7 22,17 17,22 7,22 2,17 2,7" />
      </svg>
      <span className="font-display text-[20px] font-bold tracking-[0.15em] text-white leading-none">
        CTAG<span className="text-[#E20814]">O</span>N
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Octagon Watermark — 0.5px, rgba(255,255,255,0.03), huge
// ═══════════════════════════════════════════════════════════

function OctagonWatermark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 800"
      className={`pointer-events-none ${className}`}
      fill="none"
      stroke="rgba(255,255,255,0.03)"
      strokeWidth="0.5"
    >
      <polygon points="280,10 520,10 680,170 680,430 520,590 280,590 120,430 120,170" transform="translate(0,100)" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════
// Pipeline Node — hexagonal/angular container
// ═══════════════════════════════════════════════════════════

function PipelineNode({ icon: Icon, num, title, desc, isLast }: {
  icon: React.ElementType; num: string; title: string; desc: string; isLast: boolean;
}) {
  return (
    <div className="relative text-center group flex-1">
      <div className="mx-auto mb-4 relative">
        <svg viewBox="0 0 80 80" className="w-20 h-20 mx-auto">
          <polygon
            points="40,2 72,16 72,64 40,78 8,64 8,16"
            fill={isLast ? 'rgba(226,8,20,0.12)' : 'rgba(255,255,255,0.03)'}
            stroke={isLast ? '#E20814' : 'rgba(226,8,20,0.25)'}
            strokeWidth={isLast ? '1.5' : '1'}
            className="transition-all duration-300"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`h-6 w-6 ${isLast ? 'text-[#E20814]' : 'text-zinc-300 group-hover:text-white transition-colors'}`} />
        </div>
        {isLast && (
          <div className="absolute inset-0 pointer-events-none" style={{ filter: 'blur(15px)', background: 'radial-gradient(circle, rgba(226,8,20,0.25) 0%, transparent 70%)' }} />
        )}
      </div>
      <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isLast ? 'text-[#E20814]' : 'text-zinc-400'}`}>
        {num}
      </p>
      <p className="text-[13px] font-bold uppercase tracking-wider text-white mt-1">{title}</p>
      <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed max-w-[180px] mx-auto">{desc}</p>
    </div>
  );
}

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
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#080808]/90 border-b border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center h-14 gap-1">
          {/* OCTAGON Logo — correction #1 */}
          <div className="mr-8">
            <OctagonLogo />
          </div>
          <div className="flex items-center gap-0.5">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onChange(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
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
          <div className="ml-auto flex items-center gap-3">
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
    <div className="border-b border-zinc-800/50 py-5 cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-white font-medium pr-4">{q}</p>
        {open ? <ChevronUp className="h-4 w-4 text-zinc-600" /> : <ChevronDown className="h-4 w-4 text-zinc-600" />}
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
          <div className="w-px h-3 bg-zinc-800" />
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
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        {/* Ambient glow — stronger, warmer */}
        <div
          className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: 800, height: 800, background: 'radial-gradient(circle, rgba(226,8,20,0.10) 0%, rgba(226,8,20,0.03) 40%, transparent 70%)', filter: 'blur(100px)' }}
        />
        {/* Secondary ambient — bottom left warmth */}
        <div
          className="absolute left-[-10%] bottom-[10%] pointer-events-none"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(226,8,20,0.04) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        {/* Octagon outline — visible, centered behind text, animated stroke */}
        <svg
          viewBox="0 0 800 800"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[800px] md:h-[800px] pointer-events-none"
          fill="none"
          stroke="rgba(226,8,20,0.08)"
          strokeWidth="1"
        >
          <polygon
            points="280,10 520,10 680,170 680,430 520,590 280,590 120,430 120,170"
            transform="translate(0,100)"
            strokeDasharray="2400"
            strokeDashoffset="0"
            className="animate-[draw-octagon_3s_ease-out_forwards]"
          />
        </svg>
        {/* Subtle ghost watermark — right side */}
        <OctagonWatermark className="absolute -right-[15%] top-[-10%] w-[900px] h-[900px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-28">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-10 inline-flex items-center gap-2.5 rounded-full bg-white/[0.03] px-5 py-2.5 border border-white/[0.05]">
              <Sparkles className="h-3.5 w-3.5 text-[#E20814] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814]">
                {t('hero_badge')}
              </span>
            </div>

            {/* Headline — correction #4: condensed, DADOS with red glow */}
            <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-bold tracking-tight text-white leading-[0.95]">
              {t('hero_title_1')}<br />
              <span
                className="text-[#E20814]"
                style={{ textShadow: '0 0 30px rgba(226,8,20,0.4), 0 0 60px rgba(226,8,20,0.15)' }}
              >
                {t('hero_title_2')}
              </span>
              {t('hero_title_3') && (
                <><br /><span className="text-zinc-500 text-[0.72em]">{t('hero_title_3')}</span></>
              )}
            </h1>

            {/* Subheadline — correction #4: Pure White */}
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white">
              {t('hero_desc')}
            </p>

            {/* Trust numbers */}
            <div className="mt-16 flex justify-center gap-10 md:gap-20">
              {[
                { value: '15', label: t('hero_stat_1_label') },
                { value: '25+', label: t('hero_stat_2_label') },
                { value: '0h', label: t('hero_stat_3_label') },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-4xl md:text-5xl text-white">{item.value}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={() => onNavigate('analise')}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#E20814] border-t border-t-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-600 shadow-[0_8px_24px_rgba(226,8,20,0.45)]"
              >
                {t('hero_cta_example')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('arena')}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-300 hover:bg-zinc-900 transition-all"
              >
                {t('hero_cta_arena')}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814] mb-4">{t('problem_tag')}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t('problem_title_1')}<br />{t('problem_title_2')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: Clock, title: t('problem_time_title'), stat: '8-15h', desc: t('problem_time_desc') },
            { icon: TrendingUp, title: t('problem_quality_title'), stat: '25+', desc: t('problem_quality_desc') },
            { icon: Users, title: t('problem_scale_title'), stat: '14', desc: t('problem_scale_desc') },
          ].map((item, i) => (
            <div key={i} className="group rounded-2xl bg-white/[0.03] border border-white/[0.06] p-7 hover:border-[#E20814]/20 transition-all duration-500">
              <item.icon className="h-5 w-5 text-[#E20814] mb-5" />
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-200 mb-2">{item.title}</p>
              <p className="font-display text-5xl text-[#E20814] mb-3 leading-none">{item.stat}</p>
              <p className="text-[13px] text-zinc-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BEFORE vs AFTER — correction #4: 0H gigantesco, vermelho elétrico ─── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814] mb-4">{t('value_tag')}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
              {t('value_title')} <span className="text-[#E20814]">&rarr;</span> {t('value_title_2')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card CRIADOR HOJE — what creators actually do */}
            <div className="rounded-2xl bg-zinc-900/20 border border-white/[0.04] p-8">
              <div className="flex items-center gap-2 mb-8">
                <div className="h-2 w-2 rounded-full bg-zinc-700" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600">{t('compare_creator_label')}</p>
              </div>
              <div className="space-y-6">
                {[
                  { label: t('compare_creator_1_label'), value: t('compare_creator_1_value'), sub: t('compare_creator_1_sub') },
                  { label: t('compare_creator_2_label'), value: t('compare_creator_2_value'), sub: t('compare_creator_2_sub') },
                  { label: t('compare_creator_3_label'), value: t('compare_creator_3_value'), sub: t('compare_creator_3_sub') },
                  { label: t('compare_creator_4_label'), value: t('compare_creator_4_value'), sub: t('compare_creator_4_sub') },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 mb-1">{item.label}</p>
                    <p className="text-[15px] font-bold text-zinc-500 leading-snug">{item.value}</p>
                    <p className="text-[11px] text-zinc-700 mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card OCTAGON IA — hero card, 0H gigantesco */}
            <div className="rounded-2xl bg-zinc-900/40 border border-[#E20814]/20 p-8 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(226,8,20,0.08) 0%, transparent 70%)' }} />
              <div className="flex items-center gap-2 mb-8">
                <div className="h-2 w-2 rounded-full bg-[#E20814]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E20814]">Octagon IA</p>
              </div>
              <div className="space-y-6 relative">
                {[
                  { label: t('compare_octagon_1_label'), value: t('compare_octagon_1_value'), sub: t('compare_octagon_1_sub'), big: false },
                  { label: t('compare_octagon_2_label'), value: '0H', sub: t('hero_stat_3_label'), big: true },
                  { label: t('compare_octagon_3_label'), value: t('compare_octagon_3_value'), sub: t('compare_octagon_3_sub'), big: false },
                  { label: t('compare_octagon_4_label'), value: t('compare_octagon_4_value'), sub: t('compare_octagon_4_sub'), big: false },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">{item.label}</p>
                    {item.big ? (
                      <>
                        <p
                          className="font-display text-7xl md:text-8xl font-bold text-[#E20814] leading-none"
                          style={{ textShadow: '0 0 40px rgba(226,8,20,0.35), 0 0 80px rgba(226,8,20,0.12)' }}
                        >
                          {item.value}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.15em] text-zinc-400 mt-1">{item.sub}</p>
                      </>
                    ) : (
                      <>
                        <p className="text-[15px] font-bold text-white leading-snug">{item.value}</p>
                        <p className="text-[11px] text-zinc-400 mt-0.5">{item.sub}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
              {/* Micro data-viz bars */}
              <div className="absolute bottom-6 right-6 flex items-end gap-[3px] opacity-20">
                {[35, 55, 40, 72, 48, 85, 60, 92, 68, 95].map((h, i) => (
                  <div key={i} className="w-[3px] rounded-t-sm bg-[#E20814]" style={{ height: `${h * 0.45}px` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PIPELINE — correction #3: hexagonal nodes, glowing flow line ─── */}
      <section className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="text-center mb-20">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814] mb-4">{t('pipeline_tag')}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t('pipeline_title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white">
            {t('pipeline_desc')}
          </p>
        </div>

        {/* Flow component */}
        <div className="relative">
          {/* Connecting line — full red gradient with glow */}
          <div
            className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] z-0 bg-gradient-to-r from-[#E20814]/20 via-[#E20814]/60 to-[#E20814]"
            style={{ boxShadow: '0 0 8px rgba(226,8,20,0.3), 0 0 20px rgba(226,8,20,0.15)' }}
          />

          {/* Mobile vertical line */}
          <div
            className="md:hidden absolute left-10 top-10 bottom-10 w-[2px] z-0 bg-gradient-to-b from-[#E20814]/20 via-[#E20814]/60 to-[#E20814]"
            style={{ boxShadow: '0 0 8px rgba(226,8,20,0.3)' }}
          />

          <div className="flex flex-col md:flex-row gap-10 md:gap-0 relative z-10">
            <PipelineNode icon={Search} num="01" title={t('pipeline_1_title')} desc={t('pipeline_1_desc')} isLast={false} />
            <PipelineNode icon={Database} num="02" title={t('pipeline_2_title')} desc={t('pipeline_2_desc')} isLast={false} />
            <PipelineNode icon={Brain} num="03" title={t('pipeline_3_title')} desc={t('pipeline_3_desc')} isLast={false} />
            <PipelineNode icon={Layers} num="04" title={t('pipeline_4_title')} desc={t('pipeline_4_desc')} isLast={true} />
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

      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(226,8,20,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(59,130,246,0.06)_0%,_transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-4 py-1.5 border border-white/[0.05] mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814]">UFC Fight Night</span>
            </div>
            <p className="text-[11px] text-zinc-600">{t('analise_event_details')}</p>
          </div>

          <div className="flex items-center justify-center gap-6 md:gap-16">
            <div className="text-center flex-1 max-w-[220px]">
              <div className="mx-auto mb-4 h-36 w-28 md:h-52 md:w-40 rounded-2xl bg-gradient-to-b from-[#E20814]/15 to-transparent border border-[#E20814]/15 overflow-hidden relative">
                <img src="/api/image-proxy?url=https%3A%2F%2Fufc.com%2Fimages%2Fstyles%2Fathlete_bio_full_body%2Fs3%2F2025-01%2F12%2FMOICANO_RENATO_L_09-28.png%3Fitok%3DaJ4kuhkB" alt="Renato Moicano" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>
              <p className="font-display text-2xl md:text-3xl uppercase text-white">Moicano</p>
              <p className="text-xs text-[#E20814] font-bold mt-1">&quot;Money Moicano&quot;</p>
              <p className="text-xs text-zinc-500 mt-1">{t('analise_fighter1_record')}</p>
              <p className="text-[10px] text-zinc-600 mt-1">{t('analise_fighter1_info')}</p>
            </div>

            <div className="flex flex-col items-center gap-2 mx-2">
              <span className="font-display text-3xl md:text-5xl text-white/8">VS</span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-700">Main Event</span>
            </div>

            <div className="text-center flex-1 max-w-[220px]">
              <div className="mx-auto mb-4 h-36 w-28 md:h-52 md:w-40 rounded-2xl bg-gradient-to-b from-blue-400/15 to-transparent border border-blue-400/15 overflow-hidden relative">
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

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-zinc-900/30 border border-white/[0.04] p-6">
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
              <div key={i} className="rounded-xl bg-zinc-900/30 border border-white/[0.04] p-4 flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-[#E20814]" />
                <div>
                  <p className="text-xs font-bold text-white mb-1">{item.title}</p>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814] mb-3">{t('analise_sections_tag')}</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white">
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
            <div key={i} className="rounded-xl bg-zinc-900/30 border border-white/[0.04] p-3 text-center hover:border-[#E20814]/15 transition-all group">
              <span className="text-[9px] text-[#E20814]/30 font-bold">{item.num}</span>
              <item.icon className="h-4 w-4 text-zinc-600 mx-auto mt-1 group-hover:text-[#E20814] transition-colors" />
              <p className="text-[10px] text-zinc-500 mt-1.5 group-hover:text-white transition-colors">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/analise/moicano-vs-duncan"
            className="group inline-flex items-center gap-3 rounded-full bg-[#E20814] border-t border-t-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-600 shadow-[0_8px_24px_rgba(226,8,20,0.45)]"
          >
            {t('analise_cta')}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-[10px] text-zinc-600 mt-3">{t('analise_cta_sub')}</p>
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
        <div className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(226,8,20,0.06) 0%, transparent 65%)', filter: 'blur(120px)' }} />
        <OctagonWatermark className="absolute -right-[12%] top-[-5%] w-[800px] h-[800px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-28">
          <div className="text-center">
            <div className="mb-10 inline-flex items-center gap-2.5 rounded-full bg-white/[0.03] px-5 py-2.5 border border-white/[0.05]">
              <Trophy className="h-3.5 w-3.5 text-[#E20814]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814]">{t('arena_badge')}</span>
            </div>

            <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-bold tracking-tight text-white leading-[0.92]">
              {t('arena_title_1')}<br />
              <span className="text-[#E20814]" style={{ textShadow: '0 0 30px rgba(226,8,20,0.4)' }}>{t('arena_title_2')}</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
              {t('arena_desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814] mb-4">{t('arena_why_tag')}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
            {t('arena_why_title_1')}<br /><span className="text-zinc-500">{t('arena_why_title_2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: t('arena_retain_title'), stat: t('arena_retain_stat'), desc: t('arena_retain_desc') },
            { icon: Trophy, title: t('arena_community_title'), stat: t('arena_community_stat'), desc: t('arena_community_desc') },
            { icon: TrendingUp, title: t('arena_content_title'), stat: '42', desc: t('arena_content_desc') },
          ].map((item, i) => (
            <div key={i} className="group rounded-2xl bg-zinc-900/30 border border-white/[0.04] p-7 hover:border-white/[0.08] transition-all duration-500">
              <item.icon className="h-5 w-5 text-zinc-600 mb-5 group-hover:text-[#E20814] transition-colors" />
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-2">{item.title}</p>
              <p className="font-display text-5xl text-[#E20814]/12 mb-3 leading-none">{item.stat}</p>
              <p className="text-[12px] text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="rounded-2xl bg-zinc-900/30 border border-white/[0.04] p-6 md:p-8">
          <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-6">{t('arena_features_title')}</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {[
              t('arena_feature_1'), t('arena_feature_2'), t('arena_feature_4'),
              t('arena_feature_5'), t('arena_feature_6'), t('arena_feature_7'), t('arena_feature_8'),
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500/80 mt-0.5 flex-shrink-0" />
                <p className="text-[12px] text-zinc-400">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] border border-zinc-800/60 px-5 py-2 mb-6">
            <Shield className="h-3.5 w-3.5 text-zinc-600" />
            <p className="text-[11px] text-zinc-400">{t('arena_whitelabel')}</p>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            {t('arena_explore_title')}
          </h2>
          <p className="text-sm text-zinc-500 max-w-md mx-auto mb-10">
            {t('arena_explore_desc')}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/arena"
              className="group inline-flex items-center gap-3 rounded-full bg-[#E20814] border-t border-t-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-600 shadow-[0_8px_24px_rgba(226,8,20,0.45)]"
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(226,8,20,0.06) 0%, transparent 70%)', filter: 'blur(100px)' }} />

        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white leading-[0.92]">
            {t('contact_title_1')}<br />
            <span className="text-[#E20814]" style={{ textShadow: '0 0 30px rgba(226,8,20,0.4)' }}>{t('contact_title_2')}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm text-zinc-400">
            {t('contact_desc')}
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/16463549521?text=Oi!%20Tenho%20interesse%20no%20Crenas%20para%20meu%20canal%20de%20conteudo%20UFC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-5 text-base font-bold uppercase tracking-wider text-white transition-all hover:bg-emerald-500 shadow-[0_8px_24px_rgba(16,185,129,0.3)]"
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

      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20814] mb-3">{t('faq_tag')}</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white">FAQ</h2>
        </div>

        <div className="rounded-2xl bg-zinc-900/30 border border-white/[0.04] p-6 md:p-8">
          <FAQ q={t('faq_1_q')} a={t('faq_1_a')} />
          <FAQ q={t('faq_2_q')} a={t('faq_2_a')} />
          <FAQ q={t('faq_3_q')} a={t('faq_3_a')} />
          <FAQ q={t('faq_4_q')} a={t('faq_4_a')} />
          <FAQ q={t('faq_5_q')} a={t('faq_5_a')} />
          <FAQ q={t('faq_6_q')} a={t('faq_6_a')} />
        </div>
      </section>

      <footer className="border-t border-zinc-800/40">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <OctagonLogo />
            <p className="text-[10px] text-zinc-700">&copy; 2026 Octagon. {t('footer_rights')}</p>
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
    <main className="min-h-screen bg-[#080808] text-white">
      <TabNav active={activeTab} onChange={handleNavigate} />

      {activeTab === 'produto' && <TabProduto onNavigate={handleNavigate} />}
      {activeTab === 'analise' && <TabAnalise />}
      {activeTab === 'arena' && <TabArena />}
      {activeTab === 'contato' && <TabContato />}
    </main>
  );
}
