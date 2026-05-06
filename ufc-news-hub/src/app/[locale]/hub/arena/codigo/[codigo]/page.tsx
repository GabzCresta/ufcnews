'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { useArenaAuth } from '@/hooks/useArenaAuth';
import { Link } from '@/i18n/routing';
import { Check, Loader2, XCircle } from 'lucide-react';

interface PageProps { params: Promise<{ codigo: string }> }

export default function TenantCodigoPage({ params }: PageProps) {
  const { codigo } = use(params);
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading, usuario } = useArenaAuth();

  const [state, setState] = useState<'idle' | 'applying' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');
  const [tenantName, setTenantName] = useState<string | null>(null);

  useEffect(() => {
    if (authLoading) return;

    if (!isAuthenticated) {
      const redirect = `/hub/arena/codigo/${encodeURIComponent(codigo)}`;
      router.replace(`/hub/arena/registro?codigo=${encodeURIComponent(codigo)}&redirect=${encodeURIComponent(redirect)}`);
      return;
    }

    let cancelled = false;
    (async () => {
      setState('applying');
      try {
        const res = await fetch('/api/arena/tenant/join', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ codigo }),
        });
        const data = await res.json();
        if (cancelled) return;

        if (!res.ok) {
          setState('error');
          setMessage(data.error ?? 'Codigo invalido.');
          return;
        }
        setState('success');
        setTenantName(data?.tenant?.nome ?? null);

        // Small delay so the user sees the confirmation
        setTimeout(() => { if (!cancelled) router.replace('/hub/arena'); }, 1500);
      } catch {
        if (!cancelled) { setState('error'); setMessage('Falha de conexao.'); }
      }
    })();
    return () => { cancelled = true; };
  }, [authLoading, isAuthenticated, codigo, router, usuario?.id]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="neu-card p-8 max-w-sm w-full text-center">
        {state === 'idle' || state === 'applying' ? (
          <>
            <Loader2 className="w-8 h-8 text-ufc-red animate-spin mx-auto mb-4" />
            <p className="text-white text-sm">Aplicando convite...</p>
            <p className="text-gray-500 text-xs mt-2 font-mono">{codigo}</p>
          </>
        ) : state === 'success' ? (
          <>
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="font-display text-xl text-white uppercase tracking-wide">Bem-vindo!</p>
            {tenantName && <p className="text-ufc-red text-sm mt-2">{tenantName}</p>}
            <p className="text-gray-500 text-xs mt-3">Redirecionando...</p>
          </>
        ) : (
          <>
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-6 h-6 text-red-400" />
            </div>
            <p className="text-white text-sm">{message}</p>
            <Link
              href="/hub/arena"
              className="inline-block mt-4 text-ufc-red text-xs hover:underline"
            >
              Voltar para a Arena
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
