'use client';

import useSWR from 'swr';
import { useAdminAuth } from '@/components/admin/AdminAuthContext';

/**
 * Hook que busca dados das APIs admin com autenticação automática.
 * Usa SWR pra cache inteligente - não trava a tela, atualiza sozinho.
 *
 * Exemplo: const { data, error, isLoading } = useAdminSWR<Stats>('/api/admin/overview');
 */
export function useAdminSWR<T>(key: string | null, options?: { refreshInterval?: number }) {
  const { authFetch } = useAdminAuth();

  return useSWR<T>(
    key,
    async (url: string) => {
      const res = await authFetch(url);
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      return res.json();
    },
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
      dedupingInterval: 5000,
      ...options,
    }
  );
}

// Hooks prontos pra cada area do dashboard com refresh calibrado:

/** Overview - atualiza a cada 30s (dados estáveis) */
export function useOverview() {
  return useAdminSWR<Record<string, unknown>>('/api/admin/overview', { refreshInterval: 30000 });
}

/** Agentes de IA - atualiza a cada 3s (status muda rápido) */
export function useAgents() {
  return useAdminSWR<Record<string, unknown>[]>('/api/company/agents', { refreshInterval: 3000 });
}

/** Card Monitor logs - sem refresh automático (consulta manual) */
export function useMonitorLogs() {
  return useAdminSWR<{ logs: Record<string, unknown>[] }>('/api/admin/card-monitor');
}

/** Pipeline - atualiza a cada 5s durante execução */
export function usePipelineStatus() {
  return useAdminSWR<Record<string, unknown>[]>('/api/admin/pipeline/status', { refreshInterval: 5000 });
}
