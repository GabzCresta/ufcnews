import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Link } from '@/i18n/routing';

export default async function HomePage() {
  const t = await getTranslations('home');

  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        background:
          'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(226,8,20,0.10) 0%, transparent 55%),' +
          'radial-gradient(ellipse 80% 60% at 15% 80%, rgba(120,20,40,0.08) 0%, transparent 60%),' +
          'radial-gradient(ellipse 80% 60% at 85% 80%, rgba(40,30,80,0.07) 0%, transparent 60%),' +
          'linear-gradient(180deg, #15131a 0%, #0d0c12 45%, #07060a 100%)',
      }}
    >
      <Header />

      <main className="relative">
        <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center px-4">
          {/* Subtle film grain overlay for richer texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
            aria-hidden="true"
          />

          <div className="flex flex-1 flex-col items-center justify-center py-12 md:py-16">
            {/* ─── Title cluster: octagon backdrop + COLISEUM + tagline ─── */}
            <div className="relative flex flex-col items-center">
              {/* Soft red ambient glow behind the octagon */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: 600,
                  height: 600,
                  background:
                    'radial-gradient(circle, rgba(226,8,20,0.20) 0%, rgba(226,8,20,0.05) 40%, transparent 70%)',
                  filter: 'blur(70px)',
                }}
                aria-hidden="true"
              />

              {/* Octagon outline (animated) — sized to wrap COLISEUM + tagline only */}
              <svg
                viewBox="0 0 800 800"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 md:h-[580px] md:w-[580px]"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="octa-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,90,100,0.55)" />
                    <stop offset="50%" stopColor="rgba(226,8,20,0.45)" />
                    <stop offset="100%" stopColor="rgba(226,8,20,0.25)" />
                  </linearGradient>
                </defs>
                <polygon
                  points="280,10 520,10 680,170 680,430 520,590 280,590 120,430 120,170"
                  transform="translate(0,100)"
                  stroke="url(#octa-gradient)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeDasharray="2400"
                  strokeDashoffset="0"
                  className="animate-draw-octagon"
                />
              </svg>

              {/* COLISEUM wordmark */}
              <h1
                className="relative z-10 font-display font-bold uppercase leading-[0.95] tracking-[0.04em] text-white"
                style={{
                  fontSize: 'clamp(3rem, 9.5vw, 7.5rem)',
                  textShadow:
                    '0 0 30px rgba(226,8,20,0.35), 0 0 70px rgba(226,8,20,0.18)',
                }}
              >
                C<span className="text-ufc-red">O</span>LISEUM
              </h1>

              {/* Tagline — editorial serif italic */}
              <p
                className="relative z-10 mt-5 max-w-2xl px-6 text-center font-editorial text-base italic leading-relaxed text-white/75 md:mt-6 md:text-xl"
                style={{ letterSpacing: '0.01em' }}
              >
                {t('coliseum_tagline_1')}{' '}
                <span className="font-medium not-italic uppercase tracking-[0.2em] text-ufc-red">
                  {t('coliseum_tagline_hub')}
                </span>{' '}
                {t('coliseum_tagline_2')}
              </p>
            </div>

            {/* ─── CTAs — clearly outside the octagon ─── */}
            <div className="relative z-10 mt-32 flex flex-col items-center gap-5 sm:flex-row sm:gap-6 md:mt-40">
              {/* Primary — Arena (gradient red, depth, lift on hover) */}
              <Link
                href="/hub/arena"
                prefetch
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ufc-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
                style={{
                  background:
                    'linear-gradient(180deg, #ef1119 0%, #c0050d 100%)',
                  boxShadow:
                    '0 14px 38px -10px rgba(226,8,20,0.55), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.18)',
                }}
              >
                {/* Subtle hover sheen */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.16) 0%, transparent 60%)',
                  }}
                  aria-hidden="true"
                />
                <span className="relative">{t('coliseum_view_arena')}</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary — Analysis (glass, refined) */}
              <Link
                href="/hub/analises"
                prefetch
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-10 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                style={{
                  boxShadow:
                    'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 24px -10px rgba(0,0,0,0.5)',
                }}
              >
                {t('coliseum_view_analysis')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ─── Powered by Crenas ─── */}
          <div className="relative z-10 pb-8 pt-2 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
              {t('coliseum_powered_by')}{' '}
              <span className="font-semibold text-zinc-300">Crenas</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
