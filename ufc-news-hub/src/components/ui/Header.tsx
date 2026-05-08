'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Home, BarChart3, Target, Menu, X, Users } from 'lucide-react';
import { LocaleSwitcher } from './LocaleSwitcher';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');

  const mainNav = [
    { href: '/hub' as const, label: t('home'), icon: Home },
    { href: '/hub/analises' as const, label: t('analises'), icon: BarChart3 },
    { href: '/hub/arena' as const, label: t('arena'), icon: Target },
    { href: '/hub/fighters' as const, label: t('lutadores'), icon: Users },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/hub') return pathname === '/hub' || pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-border bg-dark-bg/95 backdrop-blur supports-[backdrop-filter]:bg-dark-bg/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/hub" className="group flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <polygon
              points="7,2 17,2 22,7 22,17 17,22 7,22 2,17 2,7"
              className="text-ufc-red"
            />
          </svg>
          <span className="font-display text-2xl tracking-[0.05em] text-dark-text">
            C<span className="text-ufc-red transition-all duration-300 group-hover:glow-red">O</span>LISEUM
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {mainNav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all neu-button ${
                  isActive(item.href)
                    ? 'bg-ufc-red/10 text-ufc-red'
                    : 'text-dark-textMuted hover:text-dark-text'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right side: LocaleSwitcher + Mobile menu */}
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-dark-textMuted hover:text-dark-text neu-button"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-dark-border neu-card">
          <div className="container mx-auto px-4 py-2">
            {mainNav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-ufc-red/10 text-ufc-red'
                      : 'text-dark-textMuted hover:text-dark-text hover:bg-dark-bg'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
