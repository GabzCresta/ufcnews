# Arena Evento Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract components from monolithic evento and meus-picks pages, create shared EventHeader, centralize pick helpers in picks-shared.ts.

**Architecture:** Same pattern as Home redesign — extract inline components to focused files, create picks-shared.ts for centralized constants/helpers, EventHeader replaces duplicated event blocks in Home components.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS, TypeScript

**Spec:** `docs/superpowers/specs/2026-03-18-arena-evento-refactor.md`

**No test framework.** Verification: `cd ufc-news-hub && npx tsc --noEmit && npm run lint && npm run build`

---

### Task 1: Create picks-shared.ts

**Files:**
- Create: `ufc-news-hub/src/components/arena/picks-shared.ts`

- [ ] **Step 1: Create the file with all centralized types, constants, and helpers**

```typescript
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
```

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/components/arena/picks-shared.ts"
git commit -m "feat: add picks-shared.ts with centralized types, constants, helpers"
```

---

### Task 2: Create EventHeader

**Files:**
- Create: `ufc-news-hub/src/components/arena/EventHeader.tsx`

- [ ] **Step 1: Create the component**

```typescript
'use client';

import { EventoNome, Countdown, type Evento } from '@/components/arena/shared';

interface EventHeaderProps {
  evento: Evento;
  size?: 'sm' | 'lg';
  className?: string;
}

export function EventHeader({ evento, size = 'sm', className = '' }: EventHeaderProps) {
  return (
    <div className={`rounded-xl bg-black/60 backdrop-blur-sm px-5 py-4 space-y-3 ${className}`}>
      <EventoNome nome={evento.nome} size={size} />
      {evento.local && <div className="text-xs text-white/50">{evento.local}</div>}
      {evento.status === 'ao_vivo' ? (
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ufc-red w-fit mx-auto">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="text-xs font-bold text-white uppercase">Ao Vivo</span>
        </div>
      ) : (
        <div className="flex justify-center">
          <Countdown targetDate={evento.data_evento} />
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/components/arena/EventHeader.tsx"
git commit -m "feat: add shared EventHeader component"
```

---

### Task 3: Update Home components to use EventHeader

**Files:**
- Modify: `ufc-news-hub/src/components/arena/HomeNew.tsx`
- Modify: `ufc-news-hub/src/components/arena/HomeInProgress.tsx`
- Modify: `ufc-news-hub/src/components/arena/HomeComplete.tsx`

- [ ] **Step 1: Update HomeNew**

Replace the event header block (lines 20-27, the `<div className="rounded-xl bg-black/60...">` block) with:
```typescript
<EventHeader evento={evento} size="sm" />
```

Update imports: add `import { EventHeader } from '@/components/arena/EventHeader';` and remove `Countdown` from the shared import (only if not used elsewhere in the file — check first).

- [ ] **Step 2: Update HomeInProgress**

Replace the event header block (lines 31-48) with:
```typescript
<EventHeader evento={evento} size="sm" />
```

Update imports: add `EventHeader`, remove `Countdown` and `EventoNome` from shared import if no longer used.

- [ ] **Step 3: Update HomeComplete**

Replace the event header block (lines 31-48) with:
```typescript
<EventHeader evento={evento} size="sm" />
```

Update imports: add `EventHeader`, remove `Countdown` and `EventoNome` from shared import if no longer used.

Also replace `const pontos = totalPicks * 200;` with:
```typescript
import { MAX_POR_LUTA } from '@/components/arena/picks-shared';
// ...
const pontos = totalPicks * MAX_POR_LUTA;
```

- [ ] **Step 4: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 5: Commit**

```bash
git add "ufc-news-hub/src/components/arena/HomeNew.tsx" "ufc-news-hub/src/components/arena/HomeInProgress.tsx" "ufc-news-hub/src/components/arena/HomeComplete.tsx"
git commit -m "refactor: Home components use EventHeader + MAX_POR_LUTA"
```

---

### Task 4: Extract SwipeCard component

**Files:**
- Create: `ufc-news-hub/src/components/arena/SwipeCard.tsx`

- [ ] **Step 1: Create SwipeCard.tsx**

Read the current `SwipeCard` function from `ufc-news-hub/src/app/arena/evento/[id]/page.tsx` (the function starting with `function SwipeCard({` through its closing `}`).

Copy it to a new file. Make these changes:
- Add `'use client';` at top
- Add imports: `Image` from next/image, `Link` from next/link, `{ ChevronRight, Trophy, HelpCircle }` from lucide-react
- Import from picks-shared: `{ PickData, METODOS, getMaxRounds, tipoLabel }`
- Import from shared: `{ sobrenome }` and `type { LutaComLutadores }` from `@/types`
- Add `saveError?: string | null` to the props interface
- Add error banner rendering at the top of the return JSX (before "Fight context"):
```typescript
{saveError && (
  <div className="w-full max-w-lg mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-400 text-center">
    {saveError}
  </div>
)}
```
- Export the component: `export function SwipeCard(...)`

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/components/arena/SwipeCard.tsx"
git commit -m "feat: extract SwipeCard component with error banner"
```

---

### Task 5: Extract PickSummary component

**Files:**
- Create: `ufc-news-hub/src/components/arena/PickSummary.tsx`

- [ ] **Step 1: Create PickSummary.tsx**

Read the current `Summary` function from `[id]/page.tsx`.

Copy to new file. Changes:
- Add `'use client';`
- Add imports: `Image` from next/image, `Link` from next/link, `{ Trophy, Pencil }` from lucide-react
- Import from picks-shared: `{ PickData, maxPontos, metodoLabel }`
- Import `{ sobrenome }` from shared, `type { LutaComLutadores }` from `@/types`
- Rename to `PickSummary`, export it
- Replace inline `maxPontos` with the imported one

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/components/arena/PickSummary.tsx"
git commit -m "feat: extract PickSummary component"
```

---

### Task 6: Extract PickEditScreen component

**Files:**
- Create: `ufc-news-hub/src/components/arena/PickEditScreen.tsx`

- [ ] **Step 1: Create PickEditScreen.tsx**

Read the current `EditScreen` function from `[id]/page.tsx`.

Copy to new file. Changes:
- Add `'use client';`
- Add imports: `Image` from next/image, `{ Check }` from lucide-react
- Import from picks-shared: `{ PickData, METODOS, tipoLabel, getMaxRounds }`
- Import `{ sobrenome }` from shared, `type { LutaComLutadores }` from `@/types`
- Rename to `PickEditScreen`, export it

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/components/arena/PickEditScreen.tsx"
git commit -m "feat: extract PickEditScreen component"
```

---

### Task 7: Extract PickCard from meus-picks

**Files:**
- Create: `ufc-news-hub/src/components/arena/PickCard.tsx`

- [ ] **Step 1: Create PickCard.tsx**

Read `meus-picks/page.tsx` and find the inline PickCard component.

Copy to new file. Changes:
- Add `'use client';`
- Add all necessary imports (Image, lucide icons, etc.)
- Import from picks-shared: `{ PickData, METODOS, metodoLabel, getMaxRounds }`
- Import `{ sobrenome }` from shared, `type { LutaComLutadores }` from `@/types`
- Props: `{ luta: LutaComLutadores; pick: PickData | undefined; locked?: boolean; onUpdate: (lutaId: string, pick: PickData) => void; }`
- Export the component

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/components/arena/PickCard.tsx"
git commit -m "feat: extract PickCard component from meus-picks"
```

---

### Task 8: Rewrite evento [id]/page.tsx controller

**Files:**
- Modify: `ufc-news-hub/src/app/arena/evento/[id]/page.tsx`

- [ ] **Step 1: Rewrite page.tsx as thin controller**

Keep:
- Imports from react, next, lucide (only `ChevronRight, ChevronLeft, Trophy, Clock`)
- `useArenaAuth`, `useRouter`
- `PageProps` interface, `PageStep` type
- Auth redirect useEffect
- Fetch evento useEffect
- Fetch picks useEffect
- `savePick` with new try/catch that sets `saveError` state
- `handlePickVencedor`, `handlePickDetail`, `handleNext`, `handleEditPick`
- Top bar JSX, poster background, main content switching

Remove:
- `PickData` interface (import from picks-shared)
- `tipoOrder`, `METODOS`, `sortLutas`, `sobrenome`, `tipoLabel`, `metodoLabel`, `getMaxRounds`, `maxPontos` (all from picks-shared or shared)
- `SwipeCard` function (~220 lines)
- `Summary` function (~100 lines)
- `EditScreen` function (~140 lines)

Add imports:
```typescript
import { SwipeCard } from '@/components/arena/SwipeCard';
import { PickSummary } from '@/components/arena/PickSummary';
import { PickEditScreen } from '@/components/arena/PickEditScreen';
import { PickData, sortLutas } from '@/components/arena/picks-shared';
import { sobrenome } from '@/components/arena/shared';
```

Add state:
```typescript
const [saveError, setSaveError] = useState<string | null>(null);
```

Update `savePick`:
```typescript
const savePick = useCallback(async (lutaId: string, pick: PickData) => {
  try {
    setSaveError(null);
    const res = await fetch('/api/arena/previsoes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ previsoes: [{ luta_id: lutaId, vencedor_previsto_id: pick.vencedor_id, pontos_confianca: 100, ...(pick.metodo ? { metodo_previsto: pick.metodo } : {}), ...(pick.round ? { round_previsto: pick.round } : {}) }] }),
    });
    if (!res.ok) setSaveError('Erro ao salvar. Tente novamente.');
  } catch {
    setSaveError('Erro de conexao. Verifique sua internet.');
  }
}, []);
```

Pass `saveError` to SwipeCard:
```typescript
<SwipeCard ... saveError={saveError} />
```

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/app/arena/evento/[id]/page.tsx"
git commit -m "refactor: evento page as thin controller, import extracted components"
```

---

### Task 9: Rewrite meus-picks page

**Files:**
- Modify: `ufc-news-hub/src/app/arena/evento/[id]/meus-picks/page.tsx`

- [ ] **Step 1: Update meus-picks to use extracted components**

Remove:
- `FightTicker` component + `generateTickerMessages` function (~100 lines)
- Inline `PickCard` component (~150 lines)
- Duplicated `tipoLabel`, `metodoLabel`, `getMaxRounds`, `METODOS`, `sortLutas`, `maxPontos`, `tipoOrder`

Add imports:
```typescript
import { PickCard } from '@/components/arena/PickCard';
import { PickData, sortLutas, tipoLabel, metodoLabel, maxPontos, METODOS } from '@/components/arena/picks-shared';
import { sobrenome } from '@/components/arena/shared';
```

Replace PickCard usage: existing call sites that render inline `<PickCard>` now use the imported component.

Remove FightTicker rendering from JSX.

- [ ] **Step 2: Verify build**

Run: `cd ufc-news-hub && npm run lint && npx tsc --noEmit && npm run build`

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/app/arena/evento/[id]/meus-picks/page.tsx"
git commit -m "refactor: meus-picks uses extracted PickCard, removes ticker"
```

---

### Task 10: Final verification and deploy

- [ ] **Step 1: Full build**

Run: `cd ufc-news-hub && npm run build`
Expected: Build succeeds

- [ ] **Step 2: Deploy**

Run: `cd /Users/gabz_cresta/Desktop/ufcnews && npx vercel --prod`

- [ ] **Step 3: Final commit if needed**

```bash
git status
```
