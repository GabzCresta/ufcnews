'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { Type, Hand, Camera, Check } from 'lucide-react';
import FighterImage from '@/components/ui/FighterImage';
import { useTranslations } from 'next-intl';
import { useArenaAuth } from '@/hooks/useArenaAuth';

interface Lutador {
  id: string;
  nome: string;
  apelido: string | null;
  imagem_url: string | null;
  categoria_peso: string | null;
}

type AvatarType = 'initials' | 'upload' | 'fighter';

const OPCOES: {
  key: AvatarType;
  titulo: string;
  descricao: string;
  icon: typeof Type;
  disabled?: boolean;
}[] = [
  {
    key: 'initials',
    titulo: 'Iniciais',
    descricao: 'Suas letras no círculo da faixa.',
    icon: Type,
  },
  {
    key: 'fighter',
    titulo: 'Lutador',
    descricao: 'Escolha um rosto do roster UFC.',
    icon: Hand,
  },
  {
    key: 'upload',
    titulo: 'Upload',
    descricao: 'Em breve.',
    icon: Camera,
    disabled: true,
  },
];

export default function AvatarSelectionPage() {
  const t = useTranslations('arena');
  const router = useRouter();
  const {
    usuario,
    isAuthenticated,
    isLoading: authLoading,
    refreshUsuario,
  } = useArenaAuth();
  const [avatarType, setAvatarType] = useState<AvatarType>('initials');
  const [selectedFighter, setSelectedFighter] = useState<string | null>(null);
  const [lutadores, setLutadores] = useState<Lutador[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [erro, setErro] = useState('');

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/hub/arena/login');
    }
  }, [authLoading, isAuthenticated, router]);

  useEffect(() => {
    async function fetchLutadores() {
      setIsLoading(true);
      try {
        const res = await fetch('/api/lutadores?limit=500&sort=photo_first&fields=minimal');
        if (res.ok) {
          const data = await res.json();
          const lista: Lutador[] = data.lutadores || data || [];
          setLutadores(lista.filter((l) => l.imagem_url));
        }
      } catch {
        // silencioso — a lista fica vazia e o usuario pode tentar de novo
      } finally {
        setIsLoading(false);
      }
    }
    fetchLutadores();
  }, []);

  async function handleSave() {
    if (!usuario) return;
    setIsSaving(true);
    setErro('');
    try {
      let avatarUrl: string | null = null;

      if (avatarType === 'fighter' && selectedFighter) {
        const fighter = lutadores.find((l) => l.id === selectedFighter);
        avatarUrl = fighter?.imagem_url || null;
      } else if (avatarType === 'initials') {
        avatarUrl = null;
      }

      const res = await fetch('/api/arena/perfil', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ avatar_url: avatarUrl }),
      });

      if (res.ok) {
        await refreshUsuario();
        router.push(`/hub/arena/perfil/${usuario.username}`);
      } else {
        const data = await res.json().catch(() => ({}));
        setErro(data.error || 'Erro ao salvar avatar.');
      }
    } catch {
      setErro('Erro ao salvar avatar.');
    } finally {
      setIsSaving(false);
    }
  }

  const filteredLutadores = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return lutadores;
    return lutadores.filter(
      (l) =>
        l.nome.toLowerCase().includes(term) ||
        (l.apelido && l.apelido.toLowerCase().includes(term))
    );
  }, [lutadores, searchTerm]);

  const iniciais = useMemo(() => {
    if (!usuario) return '';
    const base = usuario.display_name || usuario.username || '';
    return (
      base
        .split(' ')
        .map((w) => w[0] ?? '')
        .join('')
        .slice(0, 2)
        .toUpperCase() || usuario.username?.slice(0, 2).toUpperCase() || ''
    );
  }, [usuario]);

  if (authLoading || !isAuthenticated || !usuario) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ufc-red" />
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <nav className="mb-10 flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.28em] text-dark-textMuted">
        <Link href="/hub/arena" className="transition hover:text-dark-text">
          Arena
        </Link>
        <span className="h-px w-4 bg-dark-border" />
        <Link
          href={`/hub/arena/perfil/${usuario.username}`}
          className="transition hover:text-dark-text"
        >
          Perfil
        </Link>
        <span className="h-px w-4 bg-dark-border" />
        <span className="text-dark-text">Avatar</span>
      </nav>

      <header className="border-t border-dark-border pt-4">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ufc-red">
            Identidade
          </span>
          <span className="h-px flex-1 bg-dark-border" />
        </div>
        <h1 className="font-display uppercase leading-[0.88] tracking-[-0.01em] text-dark-text text-5xl sm:text-6xl">
          Escolha seu avatar.
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-dark-textMuted">
          Sua identidade na Arena — o que aparece em rankings, ligas e chat.
        </p>
      </header>

      <section className="mt-12 border-t border-dark-border pt-6">
        <h2 className="mb-6 font-display text-xs uppercase tracking-[0.32em] text-dark-text">
          Tipo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-x divide-dark-border border-y border-dark-border">
          {OPCOES.map((opt) => {
            const Icon = opt.icon;
            const ativo = avatarType === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                disabled={opt.disabled}
                onClick={() => !opt.disabled && setAvatarType(opt.key)}
                className={`flex flex-col items-start gap-3 p-6 text-left transition ${
                  opt.disabled
                    ? 'opacity-40 cursor-not-allowed'
                    : ativo
                    ? 'bg-ufc-red/5'
                    : 'hover:bg-dark-card/40'
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <Icon
                    className="h-5 w-5"
                    strokeWidth={2}
                    style={{ color: ativo ? '#D20A0A' : '#A3A3A3' }}
                  />
                  {ativo && (
                    <Check
                      className="h-4 w-4 text-ufc-red"
                      strokeWidth={2.6}
                    />
                  )}
                </div>
                <div>
                  <p
                    className={`font-display text-base uppercase tracking-wider ${
                      ativo ? 'text-dark-text' : 'text-dark-textMuted'
                    }`}
                  >
                    {opt.titulo}
                  </p>
                  <p className="mt-1 text-xs text-dark-textMuted">
                    {opt.descricao}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-12 border-t border-dark-border pt-6">
        <h2 className="mb-6 font-display text-xs uppercase tracking-[0.32em] text-dark-text">
          Preview
        </h2>
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 items-center justify-center rounded-full border-2 border-ufc-red/40 bg-ufc-red/5 overflow-hidden">
            {avatarType === 'initials' ? (
              <span className="font-display text-3xl tabular-nums uppercase text-ufc-red">
                {iniciais || '—'}
              </span>
            ) : avatarType === 'fighter' && selectedFighter ? (
              <FighterImage
                src={lutadores.find((l) => l.id === selectedFighter)?.imagem_url || ''}
                alt="Avatar"
                width={96}
                height={96}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <span className="font-display text-3xl text-dark-textMuted">
                —
              </span>
            )}
          </div>
          <div className="min-w-0">
            <p className="font-display text-xl uppercase tracking-tight text-dark-text truncate">
              {usuario.display_name || usuario.username}
            </p>
            <p className="font-display text-[11px] uppercase tracking-[0.22em] text-dark-textMuted">
              @{usuario.username}
            </p>
          </div>
        </div>
      </section>

      {avatarType === 'fighter' && (
        <section className="mt-12 border-t border-dark-border pt-6">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 className="font-display text-xs uppercase tracking-[0.32em] text-dark-text">
              Roster
            </h2>
            <span className="font-display text-[10px] uppercase tracking-[0.22em] tabular-nums text-dark-textMuted">
              {filteredLutadores.length} resultados
            </span>
          </div>
          <input
            type="text"
            placeholder="Buscar lutador…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-dark-border bg-transparent px-4 py-3 font-display text-sm tracking-wide text-dark-text placeholder-dark-textMuted focus:border-ufc-red focus:outline-none"
          />

          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-ufc-red" />
            </div>
          ) : (
            <div className="mt-6 max-h-[30rem] overflow-y-auto pr-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {filteredLutadores.map((lutador) => {
                  const sel = selectedFighter === lutador.id;
                  return (
                    <button
                      key={lutador.id}
                      type="button"
                      onClick={() => setSelectedFighter(lutador.id)}
                      className={`group relative block w-full aspect-[3/4] overflow-hidden bg-dark-card border transition ${
                        sel
                          ? 'border-ufc-red shadow-[0_0_0_1px_rgba(210,10,10,0.4)]'
                          : 'border-dark-border hover:border-dark-textMuted'
                      }`}
                      title={lutador.nome}
                    >
                      {lutador.imagem_url ? (
                        <FighterImage
                          src={lutador.imagem_url}
                          alt={lutador.nome}
                          fill
                          className=""
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-dark-border">
                          <span className="text-xs text-dark-textMuted">—</span>
                        </div>
                      )}

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 pt-10 pb-2 px-2 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                        <span className="block truncate font-display text-[10px] uppercase tracking-[0.14em] text-dark-text">
                          {lutador.nome}
                        </span>
                        {lutador.categoria_peso && (
                          <span className="block truncate font-display text-[9px] uppercase tracking-[0.18em] text-dark-textMuted">
                            {lutador.categoria_peso}
                          </span>
                        )}
                      </div>

                      {sel && (
                        <span className="absolute inset-0 flex items-center justify-center bg-ufc-red/25 ring-2 ring-ufc-red ring-inset">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ufc-red">
                            <Check className="h-5 w-5 text-white" strokeWidth={2.8} />
                          </span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              {filteredLutadores.length === 0 && (
                <div className="py-12 text-center font-display text-xs uppercase tracking-[0.22em] text-dark-textMuted">
                  Nenhum lutador encontrado
                </div>
              )}
            </div>
          )}
        </section>
      )}

      <section className="mt-12 border-t border-dark-border pt-6">
        {erro && (
          <p className="mb-4 font-display text-xs uppercase tracking-[0.22em] text-ufc-red">
            {erro}
          </p>
        )}
        <div className="flex flex-col-reverse sm:flex-row gap-3">
          <Link
            href={`/hub/arena/perfil/${usuario.username}`}
            className="flex-1 border border-dark-border px-5 py-3 text-center font-display text-sm uppercase tracking-[0.22em] text-dark-textMuted transition hover:border-ufc-red hover:text-dark-text"
          >
            {t('cancel')}
          </Link>
          <button
            type="button"
            onClick={handleSave}
            disabled={
              isSaving || (avatarType === 'fighter' && !selectedFighter)
            }
            className="flex-1 bg-ufc-red px-5 py-3 font-display text-sm uppercase tracking-[0.22em] text-white transition hover:bg-ufc-redLight disabled:bg-dark-border disabled:text-dark-textMuted"
          >
            {isSaving ? 'Salvando…' : 'Salvar avatar'}
          </button>
        </div>
      </section>
    </div>
  );
}
