'use client';

import { Link } from '@/i18n/routing';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { type MembroLiga, type NivelUsuario } from '@/types/arena';
import { NivelBadge, NIVEL_META } from '@/components/arena/NivelBadge';
import { formatUltimoAcesso } from '@/lib/arena/format';

import { useTranslations } from 'next-intl';
// ═══════════════════════════════════════════════════════════════
// Props
// ═══════════════════════════════════════════════════════════════

interface MembroCardProps {
  membro: MembroLiga;
  isCurrentUser: boolean;
  showPicksDetail: boolean;
  posicao: number;
}

// ═══════════════════════════════════════════════════════════════
// Component
// ═══════════════════════════════════════════════════════════════

export function MembroCard({ membro, isCurrentUser, showPicksDetail, posicao }: MembroCardProps) {
  const t = useTranslations('arena');
  const [expanded, setExpanded] = useState(false);

  const nivelKey = (membro.nivel ?? 'iniciante') as NivelUsuario;
  const nivelMeta = NIVEL_META[nivelKey];

  const { text: accessText, isOnline } = formatUltimoAcesso(membro.ultimo_acesso);

  const hasPicksDetail =
    showPicksDetail &&
    membro.picks_status === 'done' &&
    Array.isArray(membro.picks_data) &&
    membro.picks_data.length > 0;

  const displayName = membro.display_name ?? membro.username;
  const avatarLetter = displayName.charAt(0).toUpperCase();

  const pontos = membro.evento_pontos ?? membro.pontos_temporada ?? 0;

  return (
    <div
      className={`py-4 ${isCurrentUser ? 'relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-ufc-red' : ''}`}
    >
      <div className="grid grid-cols-12 items-center gap-3">
        {/* Position */}
        <div className="col-span-1">
          <span className="font-display text-xl sm:text-2xl tabular-nums leading-none text-dark-textMuted">
            {String(posicao).padStart(2, '0')}
          </span>
        </div>

        {/* Avatar */}
        <Link
          href={`/hub/arena/perfil/${membro.username}`}
          className="col-span-1 flex justify-center"
          aria-label={`Perfil de ${displayName}`}
        >
          {membro.avatar_url ? (
            <img
              src={membro.avatar_url}
              alt={displayName}
              className="w-9 h-9 rounded-full object-cover transition hover:ring-2 hover:ring-ufc-red"
            />
          ) : (
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-display text-sm text-white transition hover:ring-2 hover:ring-ufc-red"
              style={{ backgroundColor: nivelMeta.tom.fg }}
            >
              {avatarLetter}
            </div>
          )}
        </Link>

        {/* Name + meta */}
        <div className="col-span-6 sm:col-span-7 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <Link
              href={`/hub/arena/perfil/${membro.username}`}
              className="font-display text-sm sm:text-base uppercase tracking-[0.04em] text-dark-text truncate hover:text-ufc-red transition"
            >
              {displayName}
            </Link>
            {isCurrentUser && (
              <span className="font-display text-[9px] uppercase tracking-[0.22em] text-dark-textMuted border border-dark-border px-1.5 py-0.5">
                {t('you_badge')}
              </span>
            )}
            {membro.is_admin && (
              <span className="font-display text-[9px] uppercase tracking-[0.22em] text-ufc-red border border-ufc-red/40 bg-ufc-red/10 px-1.5 py-0.5">
                {t('creator_badge')}
              </span>
            )}
          </div>

          <div className="mt-1 flex items-center gap-2 flex-wrap">
            <NivelBadge nivel={nivelKey} size="sm" />
            <span className="text-dark-border">·</span>
            {isOnline ? (
              <span className="flex items-center gap-1.5 font-display text-[10px] uppercase tracking-[0.18em] text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                {t('online_label')}
              </span>
            ) : (
              <span className="font-display text-[10px] uppercase tracking-[0.18em] text-dark-textMuted">
                {accessText}
              </span>
            )}
            {membro.picks_status === 'done' && (
              <>
                <span className="text-dark-border">·</span>
                <span className="font-display text-[10px] uppercase tracking-[0.22em] text-ufc-gold">
                  {t('picks_done')}
                </span>
              </>
            )}
            {membro.picks_status === 'pending' && (
              <>
                <span className="text-dark-border">·</span>
                <span className="font-display text-[10px] uppercase tracking-[0.22em] text-dark-textMuted">
                  {t('pending')}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Points */}
        <div className="col-span-3 sm:col-span-2 flex items-baseline justify-end gap-1">
          <span className="font-display text-xl sm:text-2xl tabular-nums leading-none text-dark-text">
            {pontos.toLocaleString('pt-BR')}
          </span>
          <span className="font-display text-[9px] uppercase tracking-[0.2em] text-dark-textMuted">
            pts
          </span>
        </div>

        {/* Expand chevron */}
        <div className="col-span-1 flex justify-end">
          {hasPicksDetail ? (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-dark-textMuted hover:text-dark-text transition"
              aria-label={expanded ? 'Recolher picks' : 'Ver picks'}
            >
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          ) : (
            <span aria-hidden className="block w-4" />
          )}
        </div>
      </div>

      {/* Picks detail (expandable) */}
      {hasPicksDetail && expanded && (
        <div className="mt-3 pl-[calc(16.66%)] space-y-1">
          {membro.picks_data!.map((pick) => (
            <div
              key={pick.luta_id}
              className="flex items-center justify-between border-l border-dark-border pl-3 py-1 text-xs"
            >
              <span className="font-display uppercase tracking-[0.04em] text-dark-text">
                {pick.vencedor_nome}
              </span>
              <div className="flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.14em] text-dark-textMuted">
                {pick.metodo_previsto && <span>{pick.metodo_previsto}</span>}
                {pick.round_previsto && <span className="text-dark-border">·</span>}
                {pick.round_previsto && <span>R{pick.round_previsto}</span>}
                <span className="text-dark-border">·</span>
                <span className="text-ufc-gold tabular-nums">{pick.pontos_confianca} conf</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
