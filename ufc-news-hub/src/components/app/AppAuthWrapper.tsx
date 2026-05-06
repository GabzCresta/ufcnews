'use client';

import { useState, useEffect } from 'react';

/**
 * Client-side auth gate for /app routes.
 * Checks for a valid admin_token cookie (same as dashboard).
 * If not authenticated, shows a login form.
 * This is a standalone component (no context provider needed)
 * so it doesn't break SSG/SSR of child pages.
 */
export function AppAuthWrapper({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<'loading' | 'login' | 'authenticated'>('loading');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Check if we have a valid token in sessionStorage or cookie
    const saved = sessionStorage.getItem('admin_token');
    if (saved) {
      fetch('/api/admin/auth', {
        headers: { Authorization: `Bearer ${saved}` },
      })
        .then((res) => {
          setState(res.ok ? 'authenticated' : 'login');
          if (!res.ok) {
            sessionStorage.removeItem('admin_token');
            document.cookie = 'admin_token=; path=/; max-age=0';
          }
        })
        .catch(() => setState('login'));
    } else {
      setState('login');
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Senha incorreta');
        setSubmitting(false);
        return;
      }

      sessionStorage.setItem('admin_token', data.token);
      document.cookie = `admin_token=${data.token}; path=/; max-age=28800; SameSite=Lax`;
      setState('authenticated');
    } catch {
      setError('Erro de conexao');
    }
    setSubmitting(false);
  }

  // Loading
  if (state === 'loading') {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-ufc-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Login gate
  if (state === 'login') {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="relative overflow-hidden rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] p-8 shadow-2xl">
            <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 bg-ufc-red/[0.08] rounded-full blur-[80px]" />

            <div className="text-center mb-8">
              <h1 className="font-display text-3xl text-white tracking-widest">CRENAS</h1>
              <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">Area Restrita</p>
            </div>

            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha de acesso"
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-ufc-red/50 transition-colors mb-4 text-sm"
                autoFocus
              />
              {error && (
                <p className="text-xs text-red-400 mb-4 text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting || !password.trim()}
                className="w-full py-3 bg-ufc-red/20 hover:bg-ufc-red/30 border border-ufc-red/30 rounded-xl text-white font-semibold text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Entrando...
                  </span>
                ) : (
                  'Entrar'
                )}
              </button>
            </form>

            <p className="text-[10px] text-gray-700 text-center mt-6">
              Acesso exclusivo para clientes e equipe.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated
  return <>{children}</>;
}
