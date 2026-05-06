'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { UserPlus, Check, Clock3 } from 'lucide-react';

import { useArenaAuth } from '@/hooks/useArenaAuth';
import { NIVEL_META, NivelBadge } from '@/components/arena/NivelBadge';
import type { NivelUsuario } from '@/types/arena';

interface PerfilConvite {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  nivel: string;
  pontos_totais: number;
  total_previsoes: number;
  previsoes_corretas: number;
  total_amigos: number;
}

type RelStatus = 'nenhuma' | 'pendente_enviada' | 'pendente_recebida' | 'aceita';

interface PageProps {
  params: Promise<{ username: string }>;
}

export default function ConvitePage({ params }: PageProps) {
  const { username } = use(params);
  const router = useRouter();
  const { usuario: usuarioAtual, isAuthenticated, isLoading: authLoading } =
    useArenaAuth();

  const [perfil, setPerfil] = useState<PerfilConvite | null>(null);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [statusRel, setStatusRel] = useState<RelStatus>('nenhuma');
  const [enviando, setEnviando] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  useEffect(() => {
    async function carregar() {
      try {
        const res = await fetch(`/api/arena/perfil/${username}`);
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          setErro(data.error || 'Usuário não encontrado.');
          return;
        }
        const data = await res.json();
        setPerfil(data.usuario);
      } catch {
        setErro('Não foi possível carregar o convite.');
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, [username]);

  useEffect(() => {
    if (!isAuthenticated || !perfil || !usuarioAtual) return;
    async function carregarRelacao() {
      try {
        const res = await fetch('/api/arena/amigos');
        if (!res.ok) return;
        const data = await res.json();
        const amigos = (data.amigos ?? []) as Array<{
          amigo: { username: string };
          status: string;
        }>;
        const pendentes = (data.solicitacoes_pendentes ?? []) as Array<{
          remetente_username: string;
        }>;
        if (amigos.some((a) => a.amigo.username === perfil!.username)) {
          setStatusRel('aceita');
        } else if (
          pendentes.some((p) => p.remetente_username === perfil!.username)
        ) {
          setStatusRel('pendente_recebida');
        } else {
          setStatusRel('nenhuma');
        }
      } catch {
        // silent
      }
    }
    carregarRelacao();
  }, [isAuthenticated, perfil, usuarioAtual]);

  async function handleAdicionar() {
    if (!perfil) return;
    setEnviando(true);
    try {
      const res = await fetch('/api/arena/amigos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: perfil.username }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatusRel('pendente_enviada');
        setMensagemSucesso(data.mensagem || 'Solicitação enviada!');
      } else {
        setErro(data.error || 'Erro ao enviar solicitação.');
      }
    } catch {
      setErro('Erro ao enviar solicitação.');
    } finally {
      setEnviando(false);
    }
  }

  if (carregando || authLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ufc-red" />
      </div>
    );
  }

  if (!perfil) {
    return (
      <div className="container mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="font-display text-2xl uppercase text-dark-text mb-4">
          {erro || 'Convite inválido'}
        </h1>
        <Link href="/hub/arena" className="text-ufc-red hover:text-ufc-redLight">
          Voltar para a Arena
        </Link>
      </div>
    );
  }

  const nivelKey = perfil.nivel as NivelUsuario;
  const nivelMeta = NIVEL_META[nivelKey];
  const NivelIcon = nivelMeta?.icon;
  const displayName = perfil.display_name || perfil.username;
  const ehProprio = usuarioAtual?.username === perfil.username;
  const taxaAcerto =
    perfil.total_previsoes > 0
      ? ((perfil.previsoes_corretas / perfil.total_previsoes) * 100).toFixed(1)
      : '0.0';

  return (
    <div className="container mx-auto max-w-xl px-4 sm:px-6 py-10 sm:py-16">
      <div className="flex items-center gap-3 border-t border-dark-border pt-4 mb-8">
        <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ufc-red">
          Convite
        </span>
        <span className="h-px flex-1 bg-dark-border" />
        <span className="font-display text-[10px] uppercase tracking-[0.3em] text-dark-textMuted">
          Arena UFC
        </span>
      </div>

      <p className="font-display text-xs uppercase tracking-[0.28em] text-dark-textMuted">
        Você foi convidado por
      </p>
      <h1 className="mt-3 font-display uppercase leading-[0.9] tracking-[-0.01em] text-dark-text text-5xl sm:text-6xl break-words">
        {displayName}
      </h1>

      <div className="mt-6 flex items-center gap-4 border-y border-dark-border py-5">
        <div
          className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 overflow-hidden"
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
              className="h-8 w-8"
              strokeWidth={1.8}
              style={{ color: nivelMeta?.tom.fg }}
            />
          ) : (
            <span className="font-display text-2xl text-dark-textMuted">
              {perfil.username.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <NivelBadge nivel={nivelKey} size="sm" />
          <p className="mt-1.5 font-display text-xs uppercase tracking-[0.2em] text-dark-textMuted">
            @{perfil.username}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 divide-x divide-dark-border">
        <div className="px-3 first:pl-0">
          <div className="font-display text-2xl tabular-nums leading-none text-dark-text">
            {perfil.pontos_totais.toLocaleString('pt-BR')}
          </div>
          <div className="mt-2 font-display text-[9px] uppercase tracking-[0.22em] text-dark-textMuted">
            Pontos
          </div>
        </div>
        <div className="px-3">
          <div className="font-display text-2xl tabular-nums leading-none text-dark-text">
            {perfil.previsoes_corretas}
          </div>
          <div className="mt-2 font-display text-[9px] uppercase tracking-[0.22em] text-dark-textMuted">
            Acertos
          </div>
        </div>
        <div className="px-3 last:pr-0">
          <div className="font-display text-2xl tabular-nums leading-none text-ufc-gold">
            {taxaAcerto}%
          </div>
          <div className="mt-2 font-display text-[9px] uppercase tracking-[0.22em] text-dark-textMuted">
            Taxa
          </div>
        </div>
      </div>

      <div className="mt-10">
        {!isAuthenticated ? (
          <div className="flex flex-col gap-3">
            <Link
              href={`/hub/arena/login?redirect=${encodeURIComponent(`/hub/arena/convite/${perfil.username}`)}`}
              className="flex items-center justify-center gap-2 bg-ufc-red px-5 py-3 font-display text-sm uppercase tracking-[0.2em] text-white transition hover:bg-ufc-redLight"
            >
              Entrar para aceitar
            </Link>
            <Link
              href={`/hub/arena/registro?redirect=${encodeURIComponent(`/hub/arena/convite/${perfil.username}`)}`}
              className="flex items-center justify-center gap-2 border border-dark-border px-5 py-3 font-display text-sm uppercase tracking-[0.2em] text-dark-textMuted transition hover:border-ufc-red hover:text-dark-text"
            >
              Criar conta na Arena
            </Link>
          </div>
        ) : ehProprio ? (
          <div className="border border-dark-border p-4 font-display text-xs uppercase tracking-[0.2em] text-dark-textMuted">
            Esse é o seu próprio link de convite. Envie para um amigo.
          </div>
        ) : statusRel === 'aceita' ? (
          <div className="flex items-center gap-3 border border-ufc-gold/40 bg-ufc-gold/10 px-4 py-3 font-display text-xs uppercase tracking-[0.2em] text-ufc-gold">
            <Check className="h-4 w-4" strokeWidth={2.4} />
            Vocês já são amigos
          </div>
        ) : statusRel === 'pendente_enviada' ? (
          <div className="flex items-center gap-3 border border-dark-border px-4 py-3 font-display text-xs uppercase tracking-[0.2em] text-dark-textMuted">
            <Clock3 className="h-4 w-4" strokeWidth={2.2} />
            Solicitação enviada · aguardando aprovação
          </div>
        ) : statusRel === 'pendente_recebida' ? (
          <Link
            href="/hub/arena"
            className="flex items-center justify-center gap-2 border border-ufc-red/40 bg-ufc-red/10 px-5 py-3 font-display text-sm uppercase tracking-[0.2em] text-ufc-red transition hover:bg-ufc-red hover:text-white"
          >
            Responder solicitação
          </Link>
        ) : (
          <button
            type="button"
            onClick={handleAdicionar}
            disabled={enviando}
            className="flex w-full items-center justify-center gap-2 bg-ufc-red px-5 py-3.5 font-display text-sm uppercase tracking-[0.2em] text-white transition hover:bg-ufc-redLight disabled:opacity-50"
          >
            <UserPlus className="h-4 w-4" strokeWidth={2.4} />
            {enviando ? 'Enviando...' : 'Adicionar como amigo'}
          </button>
        )}

        {mensagemSucesso && (
          <p className="mt-3 text-center font-display text-xs uppercase tracking-[0.2em] text-ufc-gold">
            {mensagemSucesso}
          </p>
        )}
        {erro && !carregando && (
          <p className="mt-3 text-center font-display text-xs uppercase tracking-[0.2em] text-ufc-red">
            {erro}
          </p>
        )}
      </div>

      <div className="mt-10 text-center">
        <Link
          href={`/hub/arena/perfil/${perfil.username}`}
          className="font-display text-[10px] uppercase tracking-[0.25em] text-dark-textMuted transition hover:text-dark-text"
        >
          Ver perfil completo →
        </Link>
      </div>
    </div>
  );
}
