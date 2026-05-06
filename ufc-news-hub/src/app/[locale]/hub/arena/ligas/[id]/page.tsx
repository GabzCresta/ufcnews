'use client';

import { useState, useEffect, useCallback, use } from 'react';
import { Link } from '@/i18n/routing';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useArenaAuth } from '@/hooks/useArenaAuth';
import { LigaChat } from '@/components/arena/LigaChat';
import { LigaHeader } from '@/components/arena/LigaHeader';
import { PicksPressure } from '@/components/arena/PicksPressure';
import { MembroCard } from '@/components/arena/MembroCard';
import { SairLigaModal } from '@/components/arena/SairLigaModal';
import { GerenciarLigaModal } from '@/components/arena/GerenciarLigaModal';
import type { Liga, MembroLiga, EventoAtualLiga } from '@/types/arena';

interface PageProps {
  params: Promise<{ id: string }>;
}

interface LigaDetalhes extends Liga {
  criador: {
    id: string;
    username: string;
    display_name: string | null;
    avatar_url: string | null;
  };
  campeao: {
    id: string;
    username: string;
    display_name: string | null;
    avatar_url: string | null;
  } | null;
}

interface LigaResponse {
  liga: LigaDetalhes;
  membros: MembroLiga[];
  is_membro: boolean;
  minha_posicao: number | null;
  pode_entrar: boolean;
  evento_atual: EventoAtualLiga | null;
  ultimo_evento: { nome: string; data: string } | null;
}

function SectionHeader({
  title,
  aside,
}: {
  title: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-baseline justify-between gap-4">
      <h2 className="font-display text-xs uppercase tracking-[0.32em] text-dark-text">
        {title}
      </h2>
      {aside}
    </div>
  );
}

export default function LigaPage({ params }: PageProps) {
  const t = useTranslations('arena');
  const { id } = use(params);
  const router = useRouter();
  const { usuario, isAuthenticated } = useArenaAuth();

  const [liga, setLiga] = useState<LigaDetalhes | null>(null);
  const [membros, setMembros] = useState<MembroLiga[]>([]);
  const [isMembro, setIsMembro] = useState(false);
  const [eventoAtual, setEventoAtual] = useState<EventoAtualLiga | null>(null);
  const [ultimoEvento, setUltimoEvento] = useState<{ nome: string; data: string } | null>(null);
  const [showSairModal, setShowSairModal] = useState(false);
  const [showGerenciarModal, setShowGerenciarModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isJoining, setIsJoining] = useState(false);
  const [error, setError] = useState('');

  const fetchLiga = useCallback(async () => {
    try {
      const res = await fetch(`/api/arena/ligas/${id}`, { cache: 'no-store' });
      if (res.ok) {
        const data: LigaResponse = await res.json();
        setLiga(data.liga);
        setMembros(data.membros || []);
        setIsMembro(data.is_membro || false);
        setEventoAtual(data.evento_atual ?? null);
        setUltimoEvento(data.ultimo_evento ?? null);
      } else if (res.status === 404) {
        router.push('/hub/arena/ligas');
      }
    } catch (err) {
      console.error('Erro ao carregar liga:', err);
    } finally {
      setIsLoading(false);
    }
  }, [id, router]);

  useEffect(() => {
    fetchLiga();
    const interval = setInterval(fetchLiga, 30_000);
    return () => clearInterval(interval);
  }, [fetchLiga]);

  async function handleEntrar() {
    if (!isAuthenticated) {
      router.push('/hub/arena/login');
      return;
    }
    setIsJoining(true);
    setError('');
    try {
      const res = await fetch('/api/arena/ligas/entrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ liga_id: id }),
      });
      const data = (await res.json()) as { error?: string };
      if (res.ok) {
        fetchLiga();
      } else {
        setError(data.error || t('error_join_league'));
      }
    } catch {
      setError(t('error_connection'));
    } finally {
      setIsJoining(false);
    }
  }

  function handleBannerUpdate(url: string | null) {
    setLiga((prev) => (prev ? { ...prev, imagem_url: url } : prev));
  }

  function handleLigaUpdate(fields: Partial<Liga>) {
    setLiga((prev) => (prev ? ({ ...prev, ...fields } as LigaDetalhes) : prev));
  }

  function handleMembroExpulso(userId: string) {
    setMembros((prev) => prev.filter((m) => m.id !== userId));
    setLiga((prev) =>
      prev ? { ...prev, total_membros: Math.max((prev.total_membros || 1) - 1, 0) } : prev
    );
  }

  const isAdmin = membros.some((m) => m.id === usuario?.id && m.is_admin);

  const hasEventoData = membros.some((m) => m.evento_pontos !== undefined);
  const sortedMembros = [...membros].sort((a, b) => {
    if (hasEventoData) {
      return (b.evento_pontos ?? -1) - (a.evento_pontos ?? -1);
    }
    return (a.posicao_atual || 999) - (b.posicao_atual || 999);
  });

  const showPicksDetail = liga?.mostrar_picks_antes ?? false;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ufc-red" />
      </div>
    );
  }

  if (!liga) {
    return (
      <div className="container mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="font-display text-2xl uppercase text-dark-text mb-4">
          {t('league_not_found')}
        </h1>
        <Link href="/hub/arena/ligas" className="text-ufc-red hover:text-ufc-redLight">
          &larr; {t('league_back_to_leagues')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      {/* ─────────────  BREADCRUMB  ───────────── */}
      <nav className="mb-8 flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.28em] text-dark-textMuted">
        <Link href="/hub/arena" className="transition hover:text-dark-text">
          Arena
        </Link>
        <span className="h-px w-4 bg-dark-border" />
        <Link href="/hub/arena/ligas" className="transition hover:text-dark-text">
          Ligas
        </Link>
        <span className="h-px w-4 bg-dark-border" />
        <span className="truncate text-dark-text">{liga.nome}</span>
      </nav>

      {/* ─────────────  HERO  ───────────── */}
      <LigaHeader
        liga={liga}
        isAdmin={isAdmin}
        isMembro={isMembro}
        onSairClick={() => setShowSairModal(true)}
        onGerenciarClick={() => setShowGerenciarModal(true)}
      />

      {/* ─────────────  JOIN CTA  ───────────── */}
      {!isMembro && liga.tipo === 'publica' && (
        <section className="mt-10 border-t border-dark-border pt-6">
          {error && (
            <p className="mb-3 font-display text-[10px] uppercase tracking-[0.22em] text-ufc-red">
              {error}
            </p>
          )}
          <button
            type="button"
            onClick={handleEntrar}
            disabled={isJoining}
            className="w-full bg-ufc-red px-5 py-3 font-display text-sm uppercase tracking-[0.22em] text-white transition hover:bg-ufc-redLight disabled:opacity-50"
          >
            {isJoining ? t('league_joining') : t('league_join_button')}
          </button>
        </section>
      )}

      {/* ─────────────  PICKS PRESSURE  ───────────── */}
      {eventoAtual && isMembro && (
        <section className="mt-10 border-t border-dark-border pt-6">
          <PicksPressure
            eventoAtual={eventoAtual}
            membros={membros}
            mostrarNomesPendentes={true}
          />
        </section>
      )}

      {/* ─────────────  RANKING / MEMBROS  ───────────── */}
      <section className="mt-10 border-t border-dark-border pt-6">
        <SectionHeader
          title={ultimoEvento ? t('ranking') : t('league_members_title')}
          aside={
            ultimoEvento ? (
              <span className="font-display text-[10px] uppercase tracking-[0.22em] text-dark-textMuted truncate max-w-[55%]">
                {ultimoEvento.nome}
              </span>
            ) : (
              <span className="font-display text-[11px] uppercase tracking-[0.22em] tabular-nums text-dark-textMuted">
                {String(sortedMembros.length).padStart(2, '0')}
              </span>
            )
          }
        />

        {sortedMembros.length === 0 ? (
          <p className="py-8 text-center font-display text-xs uppercase tracking-[0.22em] text-dark-textMuted">
            {t('no_members')}
          </p>
        ) : (
          <ul className="divide-y divide-dark-border">
            {sortedMembros.map((membro, index) => (
              <li key={membro.id}>
                <MembroCard
                  membro={membro}
                  isCurrentUser={membro.id === usuario?.id}
                  showPicksDetail={showPicksDetail}
                  posicao={index + 1}
                />
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* ─────────────  CHAT  ───────────── */}
      {isMembro && (
        <section className="mt-10 border-t border-dark-border pt-6">
          <SectionHeader title={t('league_chat_title') || 'Chat da Liga'} />
          <LigaChat ligaId={id} />
        </section>
      )}

      {/* ─────────────  VOLTAR  ───────────── */}
      <div className="mt-10 text-center">
        <Link
          href="/hub/arena/ligas"
          className="font-display text-[10px] uppercase tracking-[0.25em] text-dark-textMuted transition hover:text-dark-text"
        >
          ← {t('league_back_to_leagues')}
        </Link>
      </div>

      {/* Modals */}
      <SairLigaModal
        ligaId={id}
        ligaNome={liga.nome}
        isOpen={showSairModal}
        onClose={() => setShowSairModal(false)}
      />

      {isAdmin && (
        <GerenciarLigaModal
          liga={liga}
          membros={membros}
          isOpen={showGerenciarModal}
          onClose={() => setShowGerenciarModal(false)}
          onBannerUpdate={handleBannerUpdate}
          onLigaUpdate={handleLigaUpdate}
          onMembroExpulso={handleMembroExpulso}
        />
      )}
    </div>
  );
}
