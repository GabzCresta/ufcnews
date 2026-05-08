import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Link } from '@/i18n/routing';

export default async function HomePage() {
  const t = await getTranslations('home');

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Header />
      <main className="relative overflow-hidden">
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-20">
          {/* Ambient red glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 800,
              height: 800,
              background:
                'radial-gradient(circle, rgba(226,8,20,0.10) 0%, rgba(226,8,20,0.03) 40%, transparent 70%)',
              filter: 'blur(100px)',
            }}
          />

          {/* Octagon outline (animated draw) */}
          <svg
            viewBox="0 0 800 800"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 md:h-[750px] md:w-[750px]"
            fill="none"
            aria-hidden="true"
          >
            <polygon
              points="280,10 520,10 680,170 680,430 520,590 280,590 120,430 120,170"
              transform="translate(0,100)"
              stroke="rgba(226,8,20,0.25)"
              strokeWidth="2"
              strokeDasharray="2400"
              strokeDashoffset="0"
              className="animate-draw-octagon"
            />
          </svg>

          {/* Foreground content */}
          <div className="relative mx-auto w-full max-w-4xl text-center">
            <h1
              className="font-display font-bold uppercase leading-[0.95] tracking-[0.05em] text-white"
              style={{
                fontSize: 'clamp(4rem, 14vw, 10rem)',
                textShadow:
                  '0 0 30px rgba(226,8,20,0.25), 0 0 60px rgba(226,8,20,0.1)',
              }}
            >
              C<span className="text-ufc-red">O</span>LISEUM
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              {t('coliseum_tagline_1')}{' '}
              <span className="font-semibold text-ufc-red">
                {t('coliseum_tagline_hub')}
              </span>{' '}
              {t('coliseum_tagline_2')}
            </p>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/hub/arena"
                prefetch
                className="group inline-flex items-center gap-2.5 rounded-full border-t border-t-white/20 bg-ufc-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_24px_rgba(226,8,20,0.45)] transition-all hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ufc-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
              >
                {t('coliseum_view_arena')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/hub/analises"
                prefetch
                className="group inline-flex items-center gap-2.5 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-200 transition-all hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {t('coliseum_view_analysis')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
