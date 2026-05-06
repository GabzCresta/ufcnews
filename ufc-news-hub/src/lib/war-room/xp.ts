import { LEVELS } from './types';

// ═══════════════════════════════════════════════════════════
// XP Engine — Clean rewrite, atomic, no race conditions
//
// XP is awarded via atomic SQL: UPDATE SET xp = xp + N
// Never read-modify-write. Single UPDATE per task.
// Promotion check happens in the same transaction.
// ═══════════════════════════════════════════════════════════

interface CompletedTaskForXP {
  status: string;
  durationMs: number;
  tokensInput: number;
  tokensOutput: number;
}

export function awardTaskXP(task: CompletedTaskForXP): number {
  let xp = 0;

  if (task.status === 'completed') {
    // Base XP
    xp += 10;

    // Speed bonus: fast completion (under 30s)
    if (task.durationMs > 0 && task.durationMs < 30_000) {
      xp += 5;
    }

    // Efficiency bonus: low token usage (under 5k total)
    const totalTokens = task.tokensInput + task.tokensOutput;
    if (totalTokens > 0 && totalTokens < 5000) {
      xp += 3;
    }
  }

  if (task.status === 'failed') {
    xp -= 5;
  }

  return xp;
}

export function getLevelForXP(xp: number): { level: number; title: string } {
  let result = { level: 1, title: LEVELS[1].title };
  for (const [lvl, data] of Object.entries(LEVELS)) {
    if (xp >= data.xpRequired) {
      result = { level: Number(lvl), title: data.title };
    }
  }
  return result;
}
