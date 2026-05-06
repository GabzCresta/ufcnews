import { MODEL_COSTS } from './types';

// ═══════════════════════════════════════════════════════════
// Cost Calculator — Stateless, no DB dependency
//
// Cost logging happens in the transaction inside persistence.ts.
// This module only calculates — no fire-and-forget, no async.
// ═══════════════════════════════════════════════════════════

export function calculateCost(
  model: string,
  tokensInput: number,
  tokensOutput: number,
): number {
  const pricing = MODEL_COSTS[model] || MODEL_COSTS['sonnet'];
  const inputCost = (tokensInput / 1_000_000) * pricing.input;
  const outputCost = (tokensOutput / 1_000_000) * pricing.output;
  return Math.round((inputCost + outputCost) * 10000) / 10000; // 4 decimal places
}

export function formatCost(usd: number): string {
  if (usd < 0.01) return `$${(usd * 100).toFixed(2)}c`;
  return `$${usd.toFixed(4)}`;
}
