import type { NivelUsuario } from '@/types/arena';

export const NIVEL_TIERS: ReadonlyArray<{ nivel: NivelUsuario; floor: number }> = [
  { nivel: 'iniciante',  floor: 0 },
  { nivel: 'amateur',    floor: 100 },
  { nivel: 'contender',  floor: 500 },
  { nivel: 'challenger', floor: 1500 },
  { nivel: 'elite',      floor: 3500 },
  { nivel: 'champion',   floor: 7000 },
  { nivel: 'legend',     floor: 15000 },
];

export interface XpProgresso {
  nivel: NivelUsuario;
  nivelSeguinte: NivelUsuario | null;
  xpAtual: number;
  xpNoNivel: number;
  xpParaProximo: number;
  progresso: number;
}

export function calcularProgresso(xpTotal: number): XpProgresso {
  const xp = Math.max(0, Math.floor(xpTotal));
  let atual = NIVEL_TIERS[0];
  let seguinte: { nivel: NivelUsuario; floor: number } | null = null;

  for (let i = 0; i < NIVEL_TIERS.length; i++) {
    if (xp >= NIVEL_TIERS[i].floor) {
      atual = NIVEL_TIERS[i];
      seguinte = NIVEL_TIERS[i + 1] ?? null;
    } else {
      break;
    }
  }

  if (!seguinte) {
    return {
      nivel: atual.nivel,
      nivelSeguinte: null,
      xpAtual: xp,
      xpNoNivel: xp - atual.floor,
      xpParaProximo: 0,
      progresso: 1,
    };
  }

  const intervalo = seguinte.floor - atual.floor;
  const ganho = xp - atual.floor;
  return {
    nivel: atual.nivel,
    nivelSeguinte: seguinte.nivel,
    xpAtual: xp,
    xpNoNivel: ganho,
    xpParaProximo: seguinte.floor - xp,
    progresso: intervalo > 0 ? Math.min(1, ganho / intervalo) : 1,
  };
}
