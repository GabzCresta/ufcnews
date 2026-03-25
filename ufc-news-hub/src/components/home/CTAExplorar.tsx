'use client';

import { Link } from '@/i18n/routing';
import useSWR from 'swr';
import { Newspaper, Target, BarChart3, Users, Calendar, type LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { ContadorCategorias } from '@/types';

interface CardItem {
  title: string;
  icon: LucideIcon;
  href: string;
  subtitle: string;
  accentColor: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function CTAExplorar() {
  const t = useTranslations('home');
  const { data: contadores } = useSWR<ContadorCategorias>(
    '/api/noticias/contadores',
    fetcher,
    { revalidateOnFocus: false, dedupingInterval: 60000 }
  );

  const noticiasSubtitle = contadores?.reels_disponiveis
    ? `${contadores.reels_disponiveis} reels`
    : t('cta_noticias_subtitle');

  const cards: CardItem[] = [
    { title: t('cta_noticias'), icon: Newspaper, href: '/noticias', subtitle: noticiasSubtitle, accentColor: '#D20A0A' },
    { title: t('cta_arena'), icon: Target, href: '/arena', subtitle: t('cta_arena_subtitle'), accentColor: '#C9B037' },
    { title: t('cta_analises'), icon: BarChart3, href: '/analises', subtitle: t('cta_analises_subtitle'), accentColor: '#14B8A6' },
    { title: t('cta_lutadores'), icon: Users, href: '/fighters', subtitle: t('cta_lutadores_subtitle'), accentColor: '#3B82F6' },
    { title: t('cta_calendario'), icon: Calendar, href: '/calendario', subtitle: t('cta_calendario_subtitle'), accentColor: '#8B5CF6' },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
      <h2 className="mb-8 text-center font-display text-3xl uppercase tracking-wide text-white md:mb-12 md:text-4xl">
        {t('explore_title')}{' '}
        <span className="text-ufc-red">{t('explore_accent')}</span>
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            prefetch={true}
            className="neu-card-hover group flex flex-col items-center gap-3 rounded-2xl p-6 md:p-8 transition-all duration-300"
            style={{ '--card-accent': card.accentColor } as React.CSSProperties}
          >
            <card.icon
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
              style={{ color: card.accentColor }}
              strokeWidth={1.5}
            />
            <h3 className="font-display text-xl uppercase tracking-wider text-white md:text-2xl">
              {card.title}
            </h3>
            <p className="text-sm text-dark-textMuted">
              {card.subtitle}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
