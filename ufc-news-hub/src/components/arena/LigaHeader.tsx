'use client';

import { useState } from 'react';
import { Copy, Settings, LogOut, Lock, Globe, Check } from 'lucide-react';
import type { Liga } from '@/types/arena';

import { useTranslations } from 'next-intl';

interface LigaHeaderProps {
  liga: Liga & {
    criador: {
      id: string;
      username: string;
      display_name: string | null;
      avatar_url: string | null;
    };
  };
  isAdmin: boolean;
  isMembro: boolean;
  onSairClick: () => void;
  onGerenciarClick: () => void;
}

export function LigaHeader({
  liga,
  isAdmin,
  isMembro,
  onSairClick,
  onGerenciarClick,
}: LigaHeaderProps) {
  const t = useTranslations('arena');
  const [copied, setCopied] = useState(false);

  const handleCopyInvite = async () => {
    if (!liga.codigo_convite) return;
    const url = `${window.location.origin}/hub/arena/ligas/join/${liga.codigo_convite}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const createdYear = liga.created_at ? new Date(liga.created_at).getFullYear() : null;
  const hasBanner = !!liga.imagem_url;

  return (
    <div>
      {/* ─── Banner hero ─── */}
      <div className="relative w-full overflow-hidden border border-dark-border" style={{ minHeight: '180px' }}>
        {hasBanner ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={liga.imagem_url!}
            alt=""
            className="w-full h-48 sm:h-56 object-cover"
          />
        ) : (
          <div className="w-full h-48 sm:h-56 bg-octagon-grid" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        {/* ─── Editorial overlay ─── */}
        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          <div className="flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.28em] text-dark-textMuted">
            {liga.tipo === 'privada' ? (
              <>
                <Lock size={12} strokeWidth={2.2} />
                {t('private')}
              </>
            ) : (
              <>
                <Globe size={12} strokeWidth={2.2} />
                {t('public')}
              </>
            )}
            <span className="h-px flex-1 bg-white/20" />
            {createdYear && (
              <span>{t('since')} {createdYear}</span>
            )}
          </div>

          <div>
            <h1 className="font-display text-3xl sm:text-4xl uppercase leading-[0.95] tracking-tight text-white break-words">
              {liga.nome}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-[10px] uppercase tracking-[0.22em] text-white/70 tabular-nums">
              <span>
                <span className="text-white">{liga.total_membros}</span>
                {liga.max_membros > 0 && (
                  <span className="text-white/60"> / {liga.max_membros}</span>
                )}
                <span className="ml-1.5 text-white/60">{t('members')}</span>
              </span>
              {liga.codigo_convite && (
                <>
                  <span className="text-white/40">·</span>
                  <span className="font-mono tracking-[0.18em] text-ufc-gold">
                    {liga.codigo_convite}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Description ─── */}
      {liga.descricao && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-dark-textMuted">
          {liga.descricao}
        </p>
      )}

      {/* ─── Actions ─── */}
      {isMembro && (
        <div className="mt-4 flex flex-wrap gap-2">
          {liga.codigo_convite && (
            <button
              type="button"
              onClick={handleCopyInvite}
              className="flex items-center gap-2 border border-dark-border px-4 py-2 font-display text-[10px] uppercase tracking-[0.24em] text-dark-textMuted transition hover:border-ufc-red hover:text-dark-text"
            >
              {copied ? (
                <>
                  <Check size={13} strokeWidth={2.4} className="text-green-400" />
                  <span className="text-green-400">{t('copied')}</span>
                </>
              ) : (
                <>
                  <Copy size={13} strokeWidth={2.2} />
                  {t('copy_invite')}
                </>
              )}
            </button>
          )}

          {isAdmin && (
            <button
              type="button"
              onClick={onGerenciarClick}
              className="flex items-center gap-2 border border-dark-border px-4 py-2 font-display text-[10px] uppercase tracking-[0.24em] text-dark-textMuted transition hover:border-ufc-red hover:text-dark-text"
            >
              <Settings size={13} strokeWidth={2.2} />
              {t('edit')}
            </button>
          )}

          {!isAdmin && (
            <button
              type="button"
              onClick={onSairClick}
              className="flex items-center gap-2 border border-red-700/50 px-4 py-2 font-display text-[10px] uppercase tracking-[0.24em] text-red-400 transition hover:bg-red-900/20"
            >
              <LogOut size={13} strokeWidth={2.2} />
              {t('leave')}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
