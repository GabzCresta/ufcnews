# Arena Evento Refactor — Spec

**Date:** 2026-03-18
**Status:** Draft
**Goal:** Extract components from monolithic evento and meus-picks pages, create shared EventHeader, add error feedback on pick save failure, centralize scoring constants and helper functions.

---

## Context

The evento page (`[id]/page.tsx`, 780 lines) and meus-picks page (775 lines) contain all components inline. The event header block is duplicated in 3 Home components. Scoring values and helper functions (`tipoLabel`, `metodoLabel`, `getMaxRounds`, `METODOS`) are duplicated across both pages. This refactor follows the same pattern established in the Home redesign.

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Save feedback | Error-only (show red banner if POST fails) | Swipe flow is fast, success is implicit by advancing |
| meus-picks scope | Componentize only, no visual redesign | Reduces maintenance without redesign effort |
| EventHeader data | Props-based (receives evento) | Avoids duplicate fetches, all parents already have the data |
| FightTicker in meus-picks | Remove | Distractive, inconsistent with Home removal |
| ShareButton | Keep inline in meus-picks (~15 lines) | Too small for own file |

---

## Type Strategy

**Two type sources coexist in this project:**
- `src/components/arena/shared.tsx` — defines `Lutador`, `Luta`, `Evento` (simplified, used by Home components that receive data from the proximo endpoint)
- `src/types/index.ts` — defines `LutaComLutadores`, `EventoComLutas`, `ConsensoPrevisao` (full types with consenso, vencedor, status fields)

**Rule for extracted components:**
- Components from `[id]/page.tsx` and `meus-picks/page.tsx` import `LutaComLutadores` and `EventoComLutas` from `@/types` (they need full fight data with consenso, vencedor_id, status).
- EventHeader imports `Evento` from `@/components/arena/shared` (it only needs nome, local, data_evento, status, poster_url). Note: shared.tsx `Evento.local` maps from the API's `local_evento` field — EventHeader accesses `evento.local`.
- Home components continue using types from shared.tsx.

---

## New Shared Module: `picks-shared.ts`

**File:** `src/components/arena/picks-shared.ts` (~40 lines)

Centralizes pick-specific types, constants, and helpers used by both evento and meus-picks pages. Keeps `shared.tsx` focused on display components.

```typescript
// Types
export interface PickData {
  vencedor_id: string;
  metodo?: string;
  round?: number;
}

// Constants
export const PONTOS = { ACERTO: 100, METODO: 50, ROUND: 50 } as const;
export const MAX_POR_LUTA = PONTOS.ACERTO + PONTOS.METODO + PONTOS.ROUND; // 200

export const METODOS = [
  { key: 'KO/TKO', label: 'KO/TKO' },
  { key: 'Submission', label: 'Finalizacao' },
  { key: 'Decision - Unanimous', label: 'Decisao' },
] as const;

// Helpers
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
// Note: uses meus-picks version (more descriptive labels, Submission→Finalizacao matches METODOS)

// Generic sortLutas that preserves input type (LutaComLutadores or Luta)
const tipoOrder: Record<string, number> = {
  main_event: 0, co_main: 1, card_principal: 2, preliminar: 3, early_prelim: 4,
};
export function sortLutas<T extends { tipo: string }>(lutas: T[]): T[] {
  return [...lutas].sort((a, b) => (tipoOrder[a.tipo] ?? 5) - (tipoOrder[b.tipo] ?? 5));
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
```

---

## New Components

### EventHeader

**File:** `src/components/arena/EventHeader.tsx` (~50 lines)

**Props:**
```typescript
interface EventHeaderProps {
  evento: Evento;           // from shared.tsx (simplified type)
  size?: 'sm' | 'lg';      // default: 'sm'
  className?: string;
}
```

**Rendering:**
- Card: `rounded-xl bg-black/60 backdrop-blur-sm px-5 py-4 space-y-3`
- `EventoNome` with `size` prop passed through
- Local (if exists): `text-xs text-white/50`
- If `status === 'ao_vivo'`: red pulsing badge "Ao Vivo" centered
- Else: `Countdown` centered

**Does NOT handle:** "No event" fallback, OctagonTexture wrapper, or poster background. Each parent page handles those independently.

**Replaces code in:** HomeNew, HomeInProgress, HomeComplete only. The `[id]/page.tsx` and `meus-picks/page.tsx` do NOT currently render this block — EventHeader is NOT added to them.

### SwipeCard

**File:** `src/components/arena/SwipeCard.tsx` (~130 lines)

**Extracted from:** the `SwipeCard` function in `[id]/page.tsx`

**Props:**
```typescript
interface SwipeCardProps {
  luta: LutaComLutadores;     // from @/types
  index: number;
  total: number;
  pick: PickData | undefined; // from picks-shared.ts
  saveError?: string | null;
  onPickVencedor: (vencedorId: string) => void;
  onPickDetail: (metodo?: string, round?: number) => void;
  onNext: () => void;
}
```

**New behavior:** If `saveError` is truthy, renders a red banner at the top: "Erro ao salvar. Tente novamente." with dismiss button.

**Imports:** `LutaComLutadores` from `@/types`, `PickData`/`METODOS`/`getMaxRounds`/`tipoLabel` from `picks-shared.ts`, `sobrenome` from `shared.tsx`.

### PickSummary

**File:** `src/components/arena/PickSummary.tsx` (~80 lines)

**Extracted from:** the `Summary` function in `[id]/page.tsx`

**Props:**
```typescript
interface PickSummaryProps {
  lutas: LutaComLutadores[];
  picks: Record<string, PickData>;
  eventoNome: string;
  eventoId: string;
  onGoToEdit: () => void;
}
```

**Change:** Uses `maxPontos()` from `picks-shared.ts` instead of inline calculation.

### PickEditScreen

**File:** `src/components/arena/PickEditScreen.tsx` (~120 lines)

**Extracted from:** the `EditScreen` function in `[id]/page.tsx`

**Props:**
```typescript
interface PickEditScreenProps {
  lutas: LutaComLutadores[];
  picks: Record<string, PickData>;
  onUpdatePick: (lutaId: string, pick: PickData) => void;
  onDone: () => void;
}
```

**Imports:** `tipoLabel`, `getMaxRounds`, `METODOS`, `metodoLabel` from `picks-shared.ts`.

### PickCard

**File:** `src/components/arena/PickCard.tsx` (~120 lines)

**Extracted from:** the inline PickCard in `meus-picks/page.tsx`

**Props:**
```typescript
interface PickCardProps {
  luta: LutaComLutadores;     // from @/types (needs consenso, status, vencedor_id)
  pick: PickData | undefined;
  locked?: boolean;            // optional, defaults to false (matches existing convention)
  onUpdate: (lutaId: string, pick: PickData) => void;
}
```

**Note:** Prop is `locked` (optional, not `isLocked` required) to match existing call sites in meus-picks. Parent handler `onUpdate` is typed as returning void in the prop interface; the parent's actual implementation is async but that is the parent's concern.

---

## Modified Files

### `src/app/arena/evento/[id]/page.tsx` (780 -> ~150 lines)

**Keeps:**
- `PageStep` type (`swipe | summary | edit`)
- State machine + fetch evento + fetch picks + savePick logic
- `[saveError, setSaveError]` state — on POST failure, sets error string; cleared on next successful save
- Top bar (back button + resumo button)
- Main content area switching between SwipeCard/PickSummary/PickEditScreen
- Auth redirect
- Poster background + OctagonTexture wrapper

**Removes:**
- SwipeCard function -> imported from `@/components/arena/SwipeCard`
- Summary function -> imported as PickSummary from `@/components/arena/PickSummary`
- EditScreen function -> imported as PickEditScreen from `@/components/arena/PickEditScreen`
- `PickData` interface -> imported from `picks-shared.ts`
- `METODOS`, `tipoLabel`, `metodoLabel`, `getMaxRounds`, `maxPontos`, `sortLutas` -> imported from `picks-shared.ts` (generic sortLutas preserves LutaComLutadores type)
- `sobrenome` -> imported from `shared.tsx`

**Adds:**
- `saveError` state + try/catch in savePick
- Passes `saveError` prop to SwipeCard
- Clears error on next successful save or on navigation

### `src/app/arena/evento/[id]/meus-picks/page.tsx` (775 -> ~200 lines)

**Keeps:**
- Parallel fetch (evento + picks + ligas)
- Deadline calculation + lock logic
- Section grouping (Main Card / Preliminar)
- Stats hero section
- League links section
- Share button (inline)

**Removes:**
- FightTicker + generateTickerMessages (~100 lines)
- Inline PickCard component (~150 lines) -> imported from `@/components/arena/PickCard`
- Duplicated `METODOS`, `tipoLabel`, `metodoLabel`, `getMaxRounds` -> imported from `picks-shared.ts`
- Duplicated `maxPontos` -> imported from `picks-shared.ts`

### Home components (HomeNew, HomeInProgress, HomeComplete)

Each file: replace ~15 lines of event header JSX with:
```typescript
import { EventHeader } from '@/components/arena/EventHeader';
// ...
{evento && <EventHeader evento={evento} size="sm" />}
```

HomeComplete: replace `totalPicks * 200` with `maxPontos(picks)` imported from `picks-shared.ts`. Note: HomeComplete receives `picks: Record<string, string>` (only vencedor IDs) not full `PickData`, so `maxPontos` would compute only base points (100 per pick). This is a known limitation — accurate point display requires method/round data which HomeComplete does not have. Use `totalPicks * MAX_POR_LUTA` as the "max possible" display, which is the intended UX ("X pts possiveis").

---

## No API Changes

All API routes remain identical. This is a frontend-only refactor.

## No Database Changes

Schema unchanged.
