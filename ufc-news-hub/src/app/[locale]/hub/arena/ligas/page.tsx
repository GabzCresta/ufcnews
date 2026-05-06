'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { Plus, Search, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { useArenaAuth } from '@/hooks/useArenaAuth';

interface Liga {
  id: string;
  nome: string;
  tipo: 'publica' | 'privada';
  total_membros: number;
  max_membros: number;
  posicao_atual?: number;
  pontos_temporada?: number;
  minha_posicao?: number;
}

function SectionHeader({
  title,
  aside,
}: {
  title: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-baseline justify-between gap-4">
      <h2 className="font-display text-xs uppercase tracking-[0.32em] text-dark-text">
        {title}
      </h2>
      {aside}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="divide-y divide-dark-border">
      {[1, 2, 3].map((i) => (
        <div key={i} className="py-5 grid grid-cols-12 gap-4 items-center">
          <div className="col-span-2 sm:col-span-1 h-8 w-12 bg-dark-card animate-pulse rounded" />
          <div className="col-span-10 sm:col-span-11 space-y-2">
            <div className="h-4 w-48 bg-dark-card animate-pulse rounded" />
            <div className="h-3 w-24 bg-dark-card animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LigasPage() {
  const t = useTranslations('arena');
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading } = useArenaAuth();
  const [minhasLigas, setMinhasLigas] = useState<Liga[]>([]);
  const [ligasPublicas, setLigasPublicas] = useState<Liga[]>([]);
  const [codigoConvite, setCodigoConvite] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [joiningId, setJoiningId] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/hub/arena/login');
    }
  }, [isAuthenticated, authLoading, router]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchLigas();
    }
  }, [isAuthenticated]);

  async function fetchLigas() {
    try {
      const [minhasRes, publicasRes] = await Promise.all([
        fetch('/api/arena/ligas?tipo=minhas'),
        fetch('/api/arena/ligas?tipo=publicas&limit=10'),
      ]);

      if (minhasRes.ok) {
        const data = await minhasRes.json();
        setMinhasLigas(data.ligas || []);
      }

      if (publicasRes.ok) {
        const data = await publicasRes.json();
        setLigasPublicas(data.ligas || []);
      }
    } catch (err) {
      console.error('Erro ao carregar ligas:', err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleEntrarComCodigo(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!codigoConvite.trim()) {
      setError(t('league_enter_code_required'));
      return;
    }

    try {
      const res = await fetch('/api/arena/ligas/entrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codigo_convite: codigoConvite.trim() }),
      });

      const data = await res.json();

      if (res.ok) {
        setCodigoConvite('');
        setError('');
        fetchLigas();
      } else {
        setError(data.error || t('error_join_league'));
      }
    } catch {
      setError(t('error_connection'));
    }
  }

  async function handleEntrarLigaPublica(ligaId: string) {
    setJoiningId(ligaId);
    try {
      const res = await fetch('/api/arena/ligas/entrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ liga_id: ligaId }),
      });

      if (res.ok) {
        fetchLigas();
      }
    } catch (err) {
      console.error('Erro ao entrar na liga:', err);
    } finally {
      setJoiningId(null);
    }
  }

  if (authLoading || !isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ufc-red" />
      </div>
    );
  }

  const totalMinhas = minhasLigas.length;
  const totalPublicas = ligasPublicas.length;

  return (
    <div className="container mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      {/* ─────────────  BREADCRUMB  ───────────── */}
      <nav className="mb-10 flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.28em] text-dark-textMuted">
        <Link href="/hub/arena" className="transition hover:text-dark-text">
          Arena
        </Link>
        <span className="h-px w-4 bg-dark-border" />
        <span className="text-dark-text">Ligas</span>
      </nav>

      {/* ─────────────  HERO  ───────────── */}
      <header className="border-t border-dark-border pt-4">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ufc-red">
            Competição
          </span>
          <span className="h-px flex-1 bg-dark-border" />
          <span className="font-display text-[10px] uppercase tracking-[0.28em] tabular-nums text-dark-textMuted">
            {String(totalMinhas).padStart(2, '0')} · ATIVAS
          </span>
        </div>
        <h1 className="font-display uppercase leading-[0.88] tracking-[-0.01em] text-dark-text text-5xl sm:text-6xl">
          Ligas.
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-dark-textMuted">
          Crie, entre e domine. Cada liga tem ranking próprio e temporada
          alinhada ao calendário UFC.
        </p>
      </header>

      {/* ─────────────  ENTRAR COM CÓDIGO  ───────────── */}
      <section className="mt-12 border-t border-dark-border pt-6">
        <SectionHeader title="Entrar com código" />
        <form onSubmit={handleEntrarComCodigo} className="flex items-stretch gap-0 border border-dark-border">
          <input
            type="text"
            value={codigoConvite}
            onChange={(e) => setCodigoConvite(e.target.value.toUpperCase())}
            placeholder={t('invite_code')}
            maxLength={8}
            className="flex-1 bg-transparent px-4 py-3 font-mono text-sm uppercase tracking-[0.2em] text-dark-text placeholder-dark-textMuted/60 outline-none"
          />
          <button
            type="submit"
            className="flex items-center gap-2 border-l border-dark-border px-5 font-display text-[10px] uppercase tracking-[0.24em] text-dark-textMuted transition hover:bg-ufc-red hover:text-white hover:border-ufc-red"
          >
            <Search className="h-3.5 w-3.5" strokeWidth={2.2} />
            {t('enter')}
          </button>
        </form>
        {error && (
          <p className="mt-3 font-display text-[10px] uppercase tracking-[0.22em] text-ufc-red">
            {error}
          </p>
        )}
      </section>

      {/* ─────────────  MINHAS LIGAS  ───────────── */}
      <section className="mt-12 border-t border-dark-border pt-6">
        <SectionHeader
          title={t('my_leagues')}
          aside={
            <span className="font-display text-[11px] uppercase tracking-[0.22em] tabular-nums text-dark-textMuted">
              {String(totalMinhas).padStart(2, '0')}
            </span>
          }
        />

        {isLoading ? (
          <LoadingSkeleton />
        ) : minhasLigas.length === 0 ? (
          <div className="py-10 text-center">
            <p className="font-display text-sm uppercase tracking-[0.18em] text-dark-textMuted">
              {t('no_leagues')}
            </p>
            <p className="mt-2 text-xs text-dark-textMuted/70">
              {t('create_or_join')}
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-dark-border">
            {minhasLigas.map((liga) => {
              const posicao = liga.minha_posicao ?? liga.posicao_atual;
              return (
                <li key={liga.id}>
                  <Link
                    href={`/hub/arena/ligas/${liga.id}`}
                    className="group grid w-full grid-cols-12 items-center gap-4 py-5 text-left transition hover:bg-dark-card/20"
                  >
                    <div className="col-span-2 sm:col-span-1">
                      <div className="font-display leading-none tabular-nums text-ufc-gold text-3xl sm:text-4xl">
                        {posicao ? `#${posicao}` : '—'}
                      </div>
                      <div className="mt-1.5 font-display text-[9px] uppercase tracking-[0.22em] text-dark-textMuted">
                        Posição
                      </div>
                    </div>

                    <div className="col-span-8 sm:col-span-9 min-w-0">
                      <h3 className="font-display text-base sm:text-lg uppercase tracking-[0.05em] text-dark-text leading-tight transition group-hover:text-ufc-red truncate">
                        {liga.nome}
                      </h3>
                      <p className="mt-1 font-display text-[10px] uppercase tracking-[0.22em] tabular-nums text-dark-textMuted">
                        {liga.total_membros}
                        <span className="mx-1.5 text-dark-border">·</span>
                        {t('members')}
                        {liga.tipo === 'privada' && (
                          <>
                            <span className="mx-1.5 text-dark-border">·</span>
                            <span className="text-ufc-gold">Privada</span>
                          </>
                        )}
                      </p>
                    </div>

                    <div className="col-span-2 flex justify-end">
                      <ChevronRight className="h-4 w-4 text-dark-textMuted transition group-hover:translate-x-0.5 group-hover:text-ufc-red" strokeWidth={2.2} />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* ─────────────  LIGAS PÚBLICAS  ───────────── */}
      <section className="mt-12 border-t border-dark-border pt-6">
        <SectionHeader
          title={t('public_leagues')}
          aside={
            <span className="font-display text-[11px] uppercase tracking-[0.22em] tabular-nums text-dark-textMuted">
              {String(totalPublicas).padStart(2, '0')}
            </span>
          }
        />

        {isLoading ? (
          <LoadingSkeleton />
        ) : ligasPublicas.length === 0 ? (
          <div className="py-10 text-center">
            <p className="font-display text-sm uppercase tracking-[0.18em] text-dark-textMuted">
              {t('no_public_leagues')}
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-dark-border">
            {ligasPublicas.map((liga) => {
              const jaMembro = minhasLigas.some((l) => l.id === liga.id);
              const ocupacao = Math.min(100, Math.round((liga.total_membros / Math.max(1, liga.max_membros)) * 100));

              return (
                <li key={liga.id} className="grid grid-cols-12 items-center gap-4 py-5">
                  <div className="col-span-2 sm:col-span-1">
                    <div className="font-display leading-none tabular-nums text-dark-text text-2xl sm:text-3xl">
                      {liga.total_membros}
                    </div>
                    <div className="mt-1 font-display text-[9px] uppercase tracking-[0.22em] text-dark-textMuted">
                      de {liga.max_membros}
                    </div>
                  </div>

                  <div className="col-span-7 sm:col-span-8 min-w-0">
                    <h3 className="font-display text-base sm:text-lg uppercase tracking-[0.05em] text-dark-text leading-tight truncate">
                      {liga.nome}
                    </h3>
                    <div className="mt-2 h-0.5 w-full bg-dark-border/60 overflow-hidden">
                      <div
                        className="h-full bg-ufc-red transition-[width] duration-700"
                        style={{ width: `${ocupacao}%` }}
                      />
                    </div>
                  </div>

                  <div className="col-span-3 flex justify-end">
                    {jaMembro ? (
                      <Link
                        href={`/hub/arena/ligas/${liga.id}`}
                        className="border border-dark-border px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.24em] text-dark-textMuted transition hover:border-ufc-red hover:text-dark-text"
                      >
                        {t('see')}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleEntrarLigaPublica(liga.id)}
                        disabled={joiningId === liga.id}
                        className="border border-ufc-red/40 bg-ufc-red/10 px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.24em] text-ufc-red transition hover:bg-ufc-red hover:text-white disabled:opacity-50"
                      >
                        {joiningId === liga.id ? '…' : t('enter')}
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* ─────────────  CTA CRIAR  ───────────── */}
      <section className="mt-12 border-t border-dark-border pt-6">
        <Link
          href="/hub/arena/ligas/criar"
          className="group flex items-center justify-between gap-4 border border-ufc-red/40 bg-ufc-red/10 px-5 py-4 transition hover:bg-ufc-red hover:border-ufc-red"
        >
          <div className="flex items-center gap-3">
            <Plus className="h-5 w-5 text-ufc-red transition group-hover:text-white" strokeWidth={2.4} />
            <div>
              <p className="font-display text-sm uppercase tracking-[0.22em] text-ufc-red transition group-hover:text-white">
                {t('create_league')}
              </p>
              <p className="mt-0.5 font-display text-[10px] uppercase tracking-[0.18em] text-dark-textMuted transition group-hover:text-white/80">
                Você escolhe nome, tipo e convida a galera
              </p>
            </div>
          </div>
          <ChevronRight
            className="h-4 w-4 text-ufc-red transition group-hover:translate-x-0.5 group-hover:text-white"
            strokeWidth={2.4}
          />
        </Link>
      </section>
    </div>
  );
}
