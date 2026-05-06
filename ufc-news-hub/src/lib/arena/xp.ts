import { query } from '@/lib/db';
import type { NivelUsuario } from '@/types/arena';

export { NIVEL_TIERS, calcularProgresso } from '@/lib/arena/xp-shared';
export type { XpProgresso } from '@/lib/arena/xp-shared';

export interface ConcederXpResultado {
  aplicado: boolean;
  levelUp: { de: NivelUsuario; para: NivelUsuario } | null;
}

export async function concederXp(
  usuarioId: string,
  fonte: string,
  xpDelta: number,
  idempotencyKey: string,
  metadata?: Record<string, unknown>
): Promise<ConcederXpResultado> {
  if (!Number.isFinite(xpDelta) || xpDelta === 0) {
    return { aplicado: false, levelUp: null };
  }

  const rows = await query<{
    aplicado: boolean;
    nivel_anterior: NivelUsuario | null;
    nivel_novo: NivelUsuario | null;
  }>(
    `SELECT aplicado, nivel_anterior, nivel_novo
       FROM arena_conceder_xp($1, $2, $3, $4, $5::jsonb)`,
    [
      usuarioId,
      fonte,
      Math.trunc(xpDelta),
      idempotencyKey,
      JSON.stringify(metadata ?? {}),
    ]
  );

  const row = rows[0];
  if (!row || !row.aplicado) {
    return { aplicado: false, levelUp: null };
  }

  const levelUp =
    row.nivel_anterior && row.nivel_novo && row.nivel_anterior !== row.nivel_novo
      ? { de: row.nivel_anterior, para: row.nivel_novo }
      : null;

  return { aplicado: true, levelUp };
}
