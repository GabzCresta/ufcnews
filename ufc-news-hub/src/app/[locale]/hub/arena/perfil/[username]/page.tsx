'use client';

import { useState, useEffect, use, useMemo } from 'react';
import { Link } from '@/i18n/routing';
import { UserPlus, Pencil } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { useArenaAuth } from '@/hooks/useArenaAuth';
import { CONQUISTAS_DEFINICOES, type TipoConquista, type NivelUsuario } from '@/types/arena';
import { EventoHistorico } from '@/components/arena/EventoHistorico';
import { NivelBadge, NIVEL_META } from '@/components/arena/NivelBadge';
import { NivelLadder } from '@/components/arena/NivelLadder';
import { ConvidarAmigoModal } from '@/components/arena/ConvidarAmigoModal';

interface PerfilUsuario {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  nivel: string;
  pontos_totais: number;
  xp_total: number;
  total_previsoes: number;
  previsoes_corretas: number;
  previsoes_perfeitas: number;
  streak_atual: number;
  melhor_streak: number;
  streak_main_event: number;
  melhor_streak_main_event: number;
  underdogs_acertados: number;
  kos_acertados: number;
  subs_acertados: number;
  decisoes_acertadas: number;
  total_conquistas: number;
  total_amigos: number;
  created_at: string;
}

interface Conquista {
  tipo: TipoConquista;
  desbloqueada_em: string;
}

interface PageProps {
  params: Promise<{ username: string }>;
}

function formatDataEditorial(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return null;
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yy = d.getFullYear();
  return `${dd} · ${mm} · ${yy}`;
}

function formatMesAno(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return null;
  const mes = d
    .toLocaleDateString('pt-BR', { month: 'short' })
    .replace('.', '')
    .toUpperCase();
  return `${mes} · ${d.getFullYear()}`;
}

interface StatProps {
  valor: string | number;
  label: string;
  accent?: 'default' | 'red' | 'gold';
  size?: 'lg' | 'md' | 'sm';
}

function StatBlock({ valor, label, accent = 'default', size = 'lg' }: StatProps) {
  const accentClass =
    accent === 'red'
      ? 'text-ufc-red'
      : accent === 'gold'
      ? 'text-ufc-gold'
      : 'text-dark-text';
  const sizeClass =
    size === 'lg'
      ? 'text-4xl sm:text-5xl md:text-6xl'
      : size === 'md'
      ? 'text-3xl sm:text-4xl'
      : 'text-2xl sm:text-3xl';
  return (
    <div className="px-3 first:pl-0 last:pr-0">
      <div
        className={`font-display leading-none tabular-nums tracking-tight ${sizeClass} ${accentClass}`}
      >
        {valor}
      </div>
      <div className="mt-2 font-display text-[10px] uppercase tracking-[0.22em] text-dark-textMuted">
        {label}
      </div>
    </div>
  );
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

export default function PerfilPage({ params }: PageProps) {
  const t = useTranslations('arena');
  const { username } = use(params);
  const { usuario: usuarioAtual, isAuthenticated } = useArenaAuth();
  const [perfil, setPerfil] = useState<PerfilUsuario | null>(null);
  const [conquistas, setConquistas] = useState<Conquista[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [conviteOpen, setConviteOpen] = useState(false);

  const isOwnProfile = isAuthenticated && usuarioAtual?.username === username;

  useEffect(() => {
    async function fetchPerfil() {
      try {
        const res = await fetch(`/api/arena/perfil/${username}`);
        if (res.ok) {
          const data = await res.json();
          setPerfil(data.usuario);
          setConquistas(data.conquistas || []);
        } else {
          const data = await res.json();
          setError(data.error || t('user_not_found'));
        }
      } catch {
        setError(t('error_load_profile'));
      } finally {
        setIsLoading(false);
      }
    }
    fetchPerfil();
  }, [username]);

  const conquistasTipos = useMemo(() => conquistas.map((c) => c.tipo), [conquistas]);
  const memberSince = useMemo(() => formatMesAno(perfil?.created_at), [perfil?.created_at]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ufc-red" />
      </div>
    );
  }

  if (error || !perfil) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-display text-2xl uppercase text-dark-text mb-4">
          {error || t('user_not_found')}
        </h1>
        <Link href="/hub/arena" className="text-ufc-red hover:text-ufc-redLight">
          {t('back_to_arena')}
        </Link>
      </div>
    );
  }

  const nivelKey = perfil.nivel as NivelUsuario;
  const nivelMeta = NIVEL_META[nivelKey];
  const NivelIcon = nivelMeta?.icon;
  const displayName = perfil.display_name || perfil.username;
  const mostrarAtSubtitle =
    !!perfil.display_name &&
    perfil.display_name.toLowerCase() !== perfil.username.toLowerCase();
  const taxaAcerto =
    perfil.total_previsoes > 0
      ? ((perfil.previsoes_corretas / perfil.total_previsoes) * 100).toFixed(1)
      : '0.0';
  const conquistasDesbloqueadas = conquistasTipos.length;

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-14">
      {/* ─────────────  BREADCRUMB  ───────────── */}
      <nav className="mb-10 flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.28em] text-dark-textMuted">
        <Link href="/hub/arena" className="transition hover:text-dark-text">
          Arena
        </Link>
        <span className="h-px w-4 bg-dark-border" />
        <span className="text-dark-text">Perfil</span>
      </nav>

      {/* ─────────────  HERO  ───────────── */}
      <header>
        <div className="flex items-center gap-4 border-t border-dark-border pt-4 mb-8">
          <NivelBadge nivel={nivelKey} size="sm" />
          <span className="h-px flex-1 bg-dark-border" />
          {memberSince && (
            <span className="font-display text-[10px] uppercase tracking-[0.28em] text-dark-textMuted">
              Membro desde · {memberSince}
            </span>
          )}
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-6">
          <div className="min-w-0 flex-1">
            <h1 className="font-display uppercase leading-[0.85] tracking-[-0.01em] text-dark-text text-5xl sm:text-6xl md:text-7xl break-words">
              {displayName}
            </h1>
            {mostrarAtSubtitle && (
              <p className="mt-3 font-display text-sm uppercase tracking-[0.22em] text-dark-textMuted">
                @{perfil.username}
              </p>
            )}
            {perfil.bio && (
              <p className={`${mostrarAtSubtitle ? 'mt-4' : 'mt-3'} max-w-xl text-sm leading-relaxed text-dark-text/80`}>
                {perfil.bio}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {isOwnProfile ? (
                <>
                  <Link
                    href="/hub/arena/perfil/editar"
                    className="flex items-center gap-2 border border-dark-border px-4 py-2 font-display text-[10px] uppercase tracking-[0.24em] text-dark-textMuted transition hover:border-ufc-red hover:text-dark-text"
                  >
                    <Pencil className="h-3 w-3" strokeWidth={2.2} />
                    Editar Perfil
                  </Link>
                  <button
                    type="button"
                    onClick={() => setConviteOpen(true)}
                    className="flex items-center gap-2 border border-ufc-red/40 bg-ufc-red/10 px-4 py-2 font-display text-[10px] uppercase tracking-[0.24em] text-ufc-red transition hover:bg-ufc-red hover:text-white"
                  >
                    <UserPlus className="h-3 w-3" strokeWidth={2.4} />
                    Convidar Amigo
                  </button>
                </>
              ) : (
                <Link
                  href={`/hub/arena/convite/${perfil.username}`}
                  className="flex items-center gap-2 border border-ufc-red/40 bg-ufc-red/10 px-4 py-2 font-display text-[10px] uppercase tracking-[0.24em] text-ufc-red transition hover:bg-ufc-red hover:text-white"
                >
                  <UserPlus className="h-3 w-3" strokeWidth={2.4} />
                  Adicionar amigo
                </Link>
              )}
            </div>
          </div>

          {isOwnProfile ? (
            <Link
              href="/hub/arena/perfil/avatar"
              aria-label="Alterar avatar"
              className="group relative flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-2 overflow-hidden transition sm:h-24 sm:w-24 hover:border-ufc-red"
              style={{
                backgroundColor: nivelMeta?.tom.bg,
                borderColor: nivelMeta?.tom.borda,
              }}
            >
              {perfil.avatar_url ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={perfil.avatar_url}
                  alt={perfil.username}
                  className="h-full w-full rounded-full object-cover transition group-hover:opacity-60"
                />
              ) : NivelIcon ? (
                <NivelIcon
                  className="h-10 w-10 transition group-hover:opacity-40"
                  strokeWidth={1.8}
                  style={{ color: nivelMeta?.tom.fg }}
                />
              ) : (
                <span className="font-display text-3xl text-dark-textMuted transition group-hover:opacity-40">
                  {perfil.username.charAt(0).toUpperCase()}
                </span>
              )}
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 transition group-hover:opacity-100">
                <Pencil className="h-5 w-5 text-white" strokeWidth={2.2} />
              </span>
            </Link>
          ) : (
            <div
              className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-2 overflow-hidden sm:h-24 sm:w-24"
              style={{
                backgroundColor: nivelMeta?.tom.bg,
                borderColor: nivelMeta?.tom.borda,
              }}
            >
              {perfil.avatar_url ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={perfil.avatar_url}
                  alt={perfil.username}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : NivelIcon ? (
                <NivelIcon
                  className="h-10 w-10"
                  strokeWidth={1.8}
                  style={{ color: nivelMeta?.tom.fg }}
                />
              ) : (
                <span className="font-display text-3xl text-dark-textMuted">
                  {perfil.username.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
          )}
        </div>
      </header>

      {/* ─────────────  CARREIRA  ───────────── */}
      <section className="mt-12 border-t border-dark-border pt-6">
        <SectionHeader
          title="Carreira"
          aside={
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl tabular-nums leading-none text-dark-text">
                {perfil.xp_total.toLocaleString('pt-BR')}
              </span>
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-dark-textMuted">
                XP
              </span>
            </div>
          }
        />
        <NivelLadder xpTotal={perfil.xp_total ?? 0} variant="flat" showHeader={false} />
      </section>

      {/* ─────────────  PERFORMANCE  ───────────── */}
      <section className="mt-12 border-t border-dark-border pt-6">
        <SectionHeader title="Performance" />
        <div className="grid grid-cols-3 divide-x divide-dark-border">
          <StatBlock
            valor={perfil.pontos_totais.toLocaleString('pt-BR')}
            label="Pontos"
            accent="red"
          />
          <StatBlock valor={perfil.previsoes_corretas} label="Acertos" />
          <StatBlock valor={`${taxaAcerto}%`} label="Taxa de acerto" accent="gold" />
        </div>
      </section>

      {/* ─────────────  SEQUÊNCIAS + ESPECIALIDADES  ───────────── */}
      <section className="mt-12 border-t border-dark-border pt-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5">
          <SectionHeader title="Sequências" />
          <div className="grid grid-cols-3 divide-x divide-dark-border">
            <StatBlock valor={perfil.streak_atual} label="Atual" size="md" />
            <StatBlock valor={perfil.melhor_streak} label="Melhor" size="md" />
            <StatBlock valor={perfil.streak_main_event} label="Main Event" size="md" />
          </div>
        </div>
        <div className="md:col-span-7">
          <SectionHeader title="Especialidades" />
          <div className="grid grid-cols-4 divide-x divide-dark-border">
            <StatBlock valor={perfil.kos_acertados} label="KO/TKO" size="md" />
            <StatBlock valor={perfil.subs_acertados} label="Finalização" size="md" />
            <StatBlock valor={perfil.decisoes_acertadas} label="Decisão" size="md" />
            <StatBlock valor={perfil.underdogs_acertados} label="Underdog" size="md" />
          </div>
        </div>
      </section>

      {/* ─────────────  CONQUISTAS  ───────────── */}
      <section className="mt-12 border-t border-dark-border pt-6">
        <SectionHeader
          title="Conquistas"
          aside={
            <span className="font-display text-sm tabular-nums text-dark-textMuted">
              <span className="text-dark-text">
                {String(conquistasDesbloqueadas).padStart(2, '0')}
              </span>
              <span className="mx-1 text-dark-border">/</span>
              <span>{String(CONQUISTAS_DEFINICOES.length).padStart(2, '0')}</span>
            </span>
          }
        />
        <ul className="divide-y divide-dark-border">
          {CONQUISTAS_DEFINICOES.map((conquista) => {
            const desbloqueada = conquistasTipos.includes(conquista.tipo);
            const conquistaData = conquistas.find((c) => c.tipo === conquista.tipo);
            const data = formatDataEditorial(conquistaData?.desbloqueada_em);

            return (
              <li
                key={conquista.tipo}
                className="grid grid-cols-12 items-center gap-3 py-4"
              >
                <div className="col-span-1 flex justify-center">
                  <span
                    className="block h-8 w-0.5 rounded-full transition"
                    style={{
                      backgroundColor: desbloqueada ? conquista.cor : '#262626',
                    }}
                  />
                </div>
                <div className="col-span-7 sm:col-span-8 min-w-0">
                  <h3
                    className={`font-display text-sm uppercase tracking-[0.14em] ${
                      desbloqueada ? 'text-dark-text' : 'text-dark-textMuted/60'
                    }`}
                  >
                    {conquista.nome}
                  </h3>
                  <p
                    className={`mt-0.5 text-xs leading-snug ${
                      desbloqueada ? 'text-dark-textMuted' : 'text-dark-textMuted/50'
                    }`}
                  >
                    {conquista.descricao}
                  </p>
                </div>
                <div className="col-span-4 sm:col-span-3 text-right">
                  {desbloqueada ? (
                    <div className="flex flex-col items-end gap-0.5">
                      <span
                        className="font-display text-[10px] uppercase tracking-[0.22em] tabular-nums"
                        style={{ color: conquista.cor }}
                      >
                        Desbloqueada
                      </span>
                      {data && (
                        <span className="font-display text-[10px] uppercase tracking-[0.16em] tabular-nums text-dark-textMuted">
                          {data}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="font-display text-[10px] uppercase tracking-[0.22em] text-dark-textMuted/60">
                      Bloqueada
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ─────────────  HISTÓRICO  ───────────── */}
      <section className="mt-12 border-t border-dark-border pt-6">
        <SectionHeader title="Histórico de Eventos" />
        <EventoHistorico username={username} />
      </section>

      {isOwnProfile && (
        <ConvidarAmigoModal
          open={conviteOpen}
          onClose={() => setConviteOpen(false)}
          ownerUsername={perfil.username}
          ownerDisplayName={displayName}
        />
      )}
    </div>
  );
}
