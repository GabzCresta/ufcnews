'use client';

import useSWR from 'swr';

interface ProximoEvento {
  id: string;
  nome: string;
  status: string;
  data_evento: string;
}

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
});

export function useProximoEvento() {
  const { data, error, isLoading, mutate } = useSWR<ProximoEvento | null>(
    '/api/eventos/proximo?include_live=true',
    fetcher,
    {
      revalidateOnFocus: true,
      dedupingInterval: 5000,
      refreshInterval: (latestData) => {
        if (!latestData?.data_evento) return 300000;

        const isLive = latestData.status === 'ao_vivo';
        if (isLive) return 15000; // 15s when live

        const msUntil = new Date(latestData.data_evento).getTime() - Date.now();

        // Event time passed but still agendado — poll aggressively to catch transition
        if (msUntil <= 0) return 10000;

        // < 30 min away — poll every 15s
        if (msUntil < 30 * 60 * 1000) return 15000;

        // < 2h away — poll every 60s
        if (msUntil < 2 * 60 * 60 * 1000) return 60000;

        return 300000;
      },
      onError: () => {},
    }
  );

  const isAoVivo = data?.status === 'ao_vivo';

  return {
    evento: data ?? null,
    isLoading,
    error,
    isAoVivo,
    refresh: mutate,
  };
}
