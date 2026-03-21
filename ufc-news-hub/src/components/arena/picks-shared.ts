import type { LutaComLutadores } from '@/types';

// ═══════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════

export interface PickData {
  vencedor_id: string;
  metodo?: string;
  round?: number;
}

// ═══════════════════════════════════════════════════════════
// Constants
// ═══════════════════════════════════════════════════════════

export const PONTOS = { ACERTO: 100, METODO: 50, ROUND: 50 } as const;
export const MAX_POR_LUTA = PONTOS.ACERTO + PONTOS.METODO + PONTOS.ROUND;

export const METODOS = [
  { key: 'KO/TKO', label: 'KO/TKO' },
  { key: 'Submission', label: 'Finalizacao' },
  { key: 'Decision - Unanimous', label: 'Decisao' },
] as const;

const tipoOrder: Record<string, number> = {
  main_event: 0, co_main: 1, card_principal: 2, preliminar: 3, early_prelim: 4,
};

// ═══════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════

export function sortLutas<T extends { tipo: string }>(lutas: T[]): T[] {
  return [...lutas].sort((a, b) => (tipoOrder[a.tipo] ?? 5) - (tipoOrder[b.tipo] ?? 5));
}

export function tipoLabel(tipo: string): string {
  const map: Record<string, string> = {
    main_event: 'MAIN EVENT', co_main: 'CO-MAIN', card_principal: 'MAIN CARD',
    preliminar: 'PRELIMINAR', early_prelim: 'EARLY PRELIM',
  };
  return map[tipo] ?? tipo.toUpperCase();
}

export function metodoLabel(m: string): string {
  if (m === 'Decision - Unanimous') return 'Decisao Unanime';
  if (m === 'Decision - Split') return 'Decisao Dividida';
  if (m === 'Submission') return 'Finalizacao';
  return m;
}

export function getMaxRounds(luta: { tipo: string; is_titulo: boolean }): number {
  return luta.tipo === 'main_event' || luta.tipo === 'co_main' || luta.is_titulo ? 5 : 3;
}

export function maxPontos(picks: Record<string, PickData>): number {
  let total = 0;
  for (const p of Object.values(picks)) {
    if (!p.vencedor_id) continue;
    total += PONTOS.ACERTO;
    if (p.metodo) total += PONTOS.METODO;
    if (p.round) total += PONTOS.ROUND;
  }
  return total;
}
