'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAdminAuth } from '../AdminAuthContext';
import { PinInput } from '../PinInput';

const PIN_LENGTH = 6;

export function DashboardLoginGate({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, login } = useAdminAuth();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [redirectTarget, setRedirectTarget] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) setRedirectTarget(redirect);
  }, []);

  useEffect(() => {
    if (isAuthenticated && redirectTarget) {
      window.location.href = redirectTarget;
    }
  }, [isAuthenticated, redirectTarget]);

  const handleComplete = useCallback(async (code: string) => {
    if (code.length !== PIN_LENGTH || submitting) return;
    setSubmitting(true);
    setError('');
    const result = await login(code);
    if (!result.ok) {
      setError(result.error || 'PIN incorreto');
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setPin('');
      }, 450);
    }
    setSubmitting(false);
  }, [login, submitting]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-ufc-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isAuthenticated && redirectTarget) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-ufc-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    const subtitle = redirectTarget ? 'Faca login para acessar' : 'Dashboard Admin';
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="neu-card p-8">
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl text-white tracking-widest">CRENAS</h1>
              <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">{subtitle}</p>
            </div>

            <div className="mb-4">
              <PinInput
                value={pin}
                onChange={setPin}
                onComplete={handleComplete}
                error={shake}
                disabled={submitting}
              />
            </div>

            <div className="h-5 text-center">
              {submitting && (
                <span className="inline-flex items-center gap-2 text-xs text-gray-500">
                  <span className="w-3 h-3 border-2 border-ufc-red/50 border-t-ufc-red rounded-full animate-spin" />
                  Verificando...
                </span>
              )}
              {error && !submitting && (
                <span className="text-xs text-red-400">{error}</span>
              )}
            </div>

            <p className="text-[10px] text-gray-700 text-center mt-6 uppercase tracking-wider">
              Acesso restrito
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
