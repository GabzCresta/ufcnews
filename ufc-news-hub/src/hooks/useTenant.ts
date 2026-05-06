'use client';

import useSWR from 'swr';

export interface Tenant {
  id: string;
  slug: string;
  nome: string;
  logo_url: string | null;
  cor_primary: string;
  cor_accent: string;
  plano: string;
  max_membros: number | null;
}

const fetcher = async (url: string): Promise<{ tenant: Tenant | null }> => {
  const r = await fetch(url, { credentials: 'include' });
  if (!r.ok) return { tenant: null };
  return r.json();
};

export function useTenant() {
  const { data, isLoading, mutate } = useSWR<{ tenant: Tenant | null }>(
    '/api/arena/tenant/join',
    fetcher,
    { revalidateOnFocus: false, dedupingInterval: 60_000 },
  );
  return {
    tenant: data?.tenant ?? null,
    isLoading,
    refresh: mutate,
  };
}
