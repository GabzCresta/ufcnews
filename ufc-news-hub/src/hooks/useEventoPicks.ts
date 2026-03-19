'use client';

import useSWR from 'swr';

interface PrevisaoItem {
  luta_id: string;
  vencedor_previsto_id?: string | null;
  lutador_escolhido_id?: string;
}

interface PicksResponse {
  previsoes: PrevisaoItem[];
}

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
});

export function useEventoPicks(eventoId: string | undefined) {
  const { data, isLoading } = useSWR<PicksResponse | PrevisaoItem[]>(
    eventoId ? `/api/arena/previsoes?evento_id=${eventoId}` : null,
    fetcher,
    { revalidateOnFocus: true, dedupingInterval: 10000 }
  );

  if (!eventoId || !data) {
    return { picks: {} as Record<string, string>, picksLoading: isLoading && !!eventoId };
  }

  const arr: PrevisaoItem[] = Array.isArray(data)
    ? data
    : (data.previsoes ?? []);

  const picks: Record<string, string> = {};
  for (const p of arr) {
    const lutaId = p.luta_id;
    const vencedorId = p.vencedor_previsto_id ?? p.lutador_escolhido_id;
    if (lutaId && vencedorId) picks[lutaId] = vencedorId;
  }

  return { picks, picksLoading: isLoading };
}
