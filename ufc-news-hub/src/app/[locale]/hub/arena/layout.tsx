'use client';

import { Link } from '@/i18n/routing';
import { ArrowLeft, Target, Trophy } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { UserAvatar } from '@/components/arena/UserAvatar';
import { BottomNav } from '@/components/arena/BottomNav';
import { XpBar } from '@/components/arena/XpBar';
import { LevelUpModal } from '@/components/arena/LevelUpModal';
import { LocaleSwitcher } from '@/components/ui/LocaleSwitcher';
import { useArenaAuth } from '@/hooks/useArenaAuth';
import { useProximoEvento } from '@/hooks/useProximoEvento';

export default function ArenaLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations('arena');
  const { usuario, isAuthenticated, logout } = useArenaAuth();
  const { evento, isAoVivo } = useProximoEvento();

  return (
    <>
      {/* Arena Header */}
      <div className="sticky top-0 z-40 w-full bg-dark-bg/80 backdrop-blur-md border-b border-dark-border/50">
        <div className="container mx-auto flex h-12 items-center justify-between px-4">
          {/* Left: Back to hub + Arena UFC logo */}
          <div className="flex items-center gap-2">
            <Link
              href="/hub"
              aria-label={t('layout_back_to_hub')}
              className="flex h-8 w-8 items-center justify-center rounded-full text-dark-textMuted transition-all hover:bg-dark-border/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ufc-red"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link href="/hub/arena" className="flex items-center gap-2 group">
              <Target className="w-5 h-5 text-ufc-red transition-transform group-hover:scale-110" />
              <span className="font-display text-lg text-white tracking-wide">
                {t('layout_arena')} <span className="text-ufc-red">UFC</span>
              </span>
            </Link>
          </div>

          {/* Center: Desktop nav tabs */}
          <div className="hidden md:block">
            <BottomNav
              eventoId={evento?.id ?? null}
              isAoVivo={isAoVivo}
              username={usuario?.username ?? null}
            />
          </div>

          {/* Right: XP bar + Points badge + UserAvatar */}
          <div className="flex items-center gap-3">
            {isAuthenticated && usuario && (
              <>
                <XpBar xpTotal={usuario.xp_total ?? 0} compact className="hidden md:flex" />
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-ufc-gold/10 border border-ufc-gold/20">
                  <Trophy className="w-3.5 h-3.5 text-ufc-gold" />
                  <span className="text-sm font-semibold text-ufc-gold">
                    {(usuario.pontos_totais ?? 0).toLocaleString()} pts
                  </span>
                </div>
              </>
            )}
            <LocaleSwitcher />
            <UserAvatar usuario={usuario} onLogout={logout} />
          </div>
        </div>
      </div>

      {/* Page Content */}
      <main className="pb-16 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden">
        <BottomNav
          eventoId={evento?.id ?? null}
          isAoVivo={isAoVivo}
          username={usuario?.username ?? null}
        />
      </div>

      {/* Global: Level up realtime modal */}
      <LevelUpModal />
    </>
  );
}
