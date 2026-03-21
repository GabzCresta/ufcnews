# Arena Home Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the logged-in Arena Home with 3 states (new/in-progress/complete), a live ranking component, and clean information hierarchy.

**Architecture:** Component extraction from monolithic HomeLogado into 6 focused components + 1 shared barrel + 1 hook. Shared types and components (OctagonTexture, Countdown, EventoNome, FightPreview, helpers) extracted to `src/components/arena/shared.tsx` to avoid circular imports between page.tsx and Home* components. Thin controller in page.tsx switches between states. Ranking API gets new params for limit/user inclusion with backward compatibility.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS, SWR, raw SQL via `query()` from `@/lib/db`

**Spec:** `docs/superpowers/specs/2026-03-18-arena-home-redesign.md`

**No test framework available.** Verification is `npm run lint && npx tsc --noEmit && npm run build`.

---

### Task 1: Update Ranking API

**Files:**
- Modify: `ufc-news-hub/src/app/api/arena/analytics/ranking/route.ts`

- [ ] **Step 1: Update the ranking API to accept `limit` and `include_user_id` params**

Replace the entire file with:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';

interface RankingUser {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  nivel: string;
  pontos_totais: number;
  previsoes_corretas: number;
  total_previsoes: number;
  taxa_acerto: number;
  posicao: number;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(Math.max(parseInt(searchParams.get('limit') ?? '50', 10) || 50, 1), 100);
    const includeUserId = searchParams.get('include_user_id');

    const ranking = await query<RankingUser>(
      `SELECT u.id, u.username, u.display_name, u.avatar_url, u.nivel,
              u.pontos_totais, u.previsoes_corretas, u.total_previsoes,
              CASE WHEN u.total_previsoes > 0
                THEN ROUND(u.previsoes_corretas::numeric / u.total_previsoes * 100, 1)
                ELSE 0 END AS taxa_acerto,
              ROW_NUMBER() OVER (ORDER BY u.pontos_totais DESC)::int as posicao
       FROM usuarios_arena u
       WHERE u.total_previsoes > 0
       ORDER BY u.pontos_totais DESC
       LIMIT $1`,
      [limit]
    );

    const totalResult = await queryOne<{ count: number }>(
      `SELECT COUNT(*)::int as count FROM usuarios_arena WHERE total_previsoes > 0`
    );

    let userPosition: RankingUser | null = null;
    if (includeUserId) {
      const isInRanking = ranking.some(r => r.id === includeUserId);
      if (!isInRanking) {
        userPosition = await queryOne<RankingUser>(
          `SELECT * FROM (
            SELECT u.id, u.username, u.display_name, u.avatar_url, u.nivel,
                   u.pontos_totais, u.previsoes_corretas, u.total_previsoes,
                   CASE WHEN u.total_previsoes > 0
                     THEN ROUND(u.previsoes_corretas::numeric / u.total_previsoes * 100, 1)
                     ELSE 0 END AS taxa_acerto,
                   ROW_NUMBER() OVER (ORDER BY u.pontos_totais DESC)::int as posicao
            FROM usuarios_arena u
            WHERE u.total_previsoes > 0
          ) ranked
          WHERE ranked.id = $1`,
          [includeUserId]
        );
      }
    }

    // Backward compatibility: if no new params, return flat array (legacy format)
    const hasNewParams = searchParams.has('limit') || searchParams.has('include_user_id');
    if (!hasNewParams) {
      return NextResponse.json(ranking, {
        headers: { 'Cache-Control': 'public, s-maxage=120' },
      });
    }

    return NextResponse.json({
      ranking,
      user_position: userPosition,
      total_participantes: totalResult?.count ?? 0,
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=30' },
    });
  } catch (error) {
    console.error('[API analytics/ranking] Error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
```

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/app/api/arena/analytics/ranking/route.ts"
git commit -m "feat: add limit, include_user_id, total_participantes to ranking API"
```

---

### Task 2: Create useEventoPicks hook

**Files:**
- Create: `ufc-news-hub/src/hooks/useEventoPicks.ts`

- [ ] **Step 1: Create the hook**

```typescript
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
```

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/hooks/useEventoPicks.ts"
git commit -m "feat: add useEventoPicks SWR hook"
```

---

### Task 3: Extract shared components to avoid circular imports

**Files:**
- Create: `ufc-news-hub/src/components/arena/shared.tsx`
- Modify: `ufc-news-hub/src/app/arena/page.tsx` — remove moved code, import from shared

- [ ] **Step 1: Create shared.tsx**

Extract from `arena/page.tsx` into `src/components/arena/shared.tsx`:
- Types: `Lutador`, `Luta`, `Evento`
- Helpers: `tipoOrder`, `sortLutas`, `sobrenome`
- Components: `OctagonTexture`, `Countdown`, `EventoNome`, `FightPreview`

All must be exported. Keep the same code, just move it. Add `'use client'` directive at top since components use hooks/state.

The `FightPreview` component must be updated to accept `showDetails?: boolean` prop:
- When true: larger avatars (w-10 h-10), larger text (text-base), and `categoria_peso` shown below in a centered text-xs line
- Wrap content in a `flex flex-col` so the details row sits below the fighter row

- [ ] **Step 2: Update arena/page.tsx imports**

Remove the moved code from `arena/page.tsx`. Add:
```typescript
import { OctagonTexture, Countdown, EventoNome, FightPreview, sortLutas, sobrenome } from '@/components/arena/shared';
import type { Evento, Luta, Lutador } from '@/components/arena/shared';
```

Keep `HomeLanding` and the main export in page.tsx — they consume from shared.tsx without circular dependency.

- [ ] **Step 3: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 4: Commit**

```bash
git add "ufc-news-hub/src/components/arena/shared.tsx" "ufc-news-hub/src/app/arena/page.tsx"
git commit -m "refactor: extract shared arena components to avoid circular imports"
```

---

### Task 4: Create UserStats component

**Files:**
- Create: `ufc-news-hub/src/components/arena/UserStats.tsx`

- [ ] **Step 1: Create the component**

```typescript
'use client';

import { Trophy, Target, Flame } from 'lucide-react';
import { useArenaAuth } from '@/hooks/useArenaAuth';

export function UserStats() {
  const { usuario } = useArenaAuth();
  if (!usuario) return null;

  const accuracy = (usuario.total_previsoes ?? 0) > 0
    ? Math.round(((usuario.previsoes_corretas ?? 0) / (usuario.total_previsoes ?? 1)) * 100)
    : 0;

  return (
    <div className="flex items-center justify-center gap-4 text-sm">
      <div className="flex items-center gap-1.5">
        <Trophy className="w-3.5 h-3.5 text-ufc-gold" />
        <span className="font-bold text-ufc-gold">{(usuario.pontos_totais ?? 0).toLocaleString()}</span>
        <span className="text-white/40 text-xs">pts</span>
      </div>
      <span className="text-white/15">·</span>
      <div className="flex items-center gap-1.5">
        <Target className="w-3.5 h-3.5 text-green-400" />
        <span className="font-bold text-green-400">{accuracy}%</span>
        <span className="text-white/40 text-xs">acc</span>
      </div>
      <span className="text-white/15">·</span>
      <div className="flex items-center gap-1.5">
        <Flame className="w-3.5 h-3.5 text-orange-400" />
        <span className="font-bold text-orange-400">{usuario.streak_atual ?? 0}</span>
        <span className="text-white/40 text-xs">streak</span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/components/arena/UserStats.tsx"
git commit -m "feat: add UserStats component"
```

---

### Task 4: Create LiveRanking component

**Files:**
- Create: `ufc-news-hub/src/components/arena/LiveRanking.tsx`

- [ ] **Step 1: Create the component**

```typescript
'use client';

import useSWR from 'swr';
import Link from 'next/link';
import { Trophy, ChevronRight } from 'lucide-react';

interface RankingUser {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  nivel: string;
  pontos_totais: number;
  posicao: number;
}

interface RankingResponse {
  ranking: RankingUser[];
  user_position: RankingUser | null;
  total_participantes: number;
}

interface LiveRankingProps {
  limit?: number;
  highlightUserId?: string;
  showTotal?: boolean;
}

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
});

const MEDALS = ['🥇', '🥈', '🥉'];

export function LiveRanking({ limit = 3, highlightUserId, showTotal = true }: LiveRankingProps) {
  const params = new URLSearchParams({ limit: String(limit) });
  if (highlightUserId) params.set('include_user_id', highlightUserId);

  const { data, isLoading, error } = useSWR<RankingResponse>(
    `/api/arena/analytics/ranking?${params}`,
    fetcher,
    { refreshInterval: 30000, revalidateOnFocus: true, dedupingInterval: 15000 }
  );

  if (error) return null;

  if (isLoading || !data) {
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-5">
        <div className="h-32 rounded-lg bg-white/5 animate-pulse" />
      </div>
    );
  }

  const { ranking, user_position, total_participantes } = data;
  const userInTop = highlightUserId ? ranking.some(r => r.id === highlightUserId) : false;

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-ufc-gold" />
          <span className="text-sm font-display uppercase text-white/70">Ranking</span>
        </div>
        <Link href="/arena/analytics" className="flex items-center gap-1 text-xs text-white/30 hover:text-white/50 transition-colors">
          ver tudo <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-1">
        {ranking.map((user, i) => {
          const isHighlighted = highlightUserId === user.id;
          return (
            <div
              key={user.id}
              className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                isHighlighted ? 'bg-ufc-red/10 border border-ufc-red/20' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm w-6 text-center">{MEDALS[i] ?? `#${user.posicao}`}</span>
                <span className={`text-sm font-medium ${isHighlighted ? 'text-white' : 'text-white/70'}`}>
                  {isHighlighted && '⭐ '}{user.display_name || user.username}
                </span>
              </div>
              <span className={`text-sm tabular-nums ${isHighlighted ? 'text-ufc-gold font-bold' : 'text-white/40'}`}>
                {user.pontos_totais.toLocaleString()} pts
              </span>
            </div>
          );
        })}

        {user_position && !userInTop && (
          <>
            <div className="text-center text-white/15 text-xs py-1">· · ·</div>
            <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-ufc-red/10 border border-ufc-red/20">
              <div className="flex items-center gap-3">
                <span className="text-sm w-6 text-center text-white/50">#{user_position.posicao}</span>
                <span className="text-sm font-medium text-white">
                  ⭐ {user_position.display_name || user_position.username}
                </span>
              </div>
              <span className="text-sm tabular-nums text-ufc-gold font-bold">
                {user_position.pontos_totais.toLocaleString()} pts
              </span>
            </div>
          </>
        )}
      </div>

      {showTotal && total_participantes > 0 && (
        <div className="text-center text-xs text-white/25 pt-1">
          {total_participantes} participantes
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
git add "ufc-news-hub/src/components/arena/LiveRanking.tsx"
git commit -m "feat: add LiveRanking component with SWR"
```

---

### Task 5: Create MinhasLigas component

**Files:**
- Create: `ufc-news-hub/src/components/arena/MinhasLigas.tsx`

- [ ] **Step 1: Create the component**

```typescript
'use client';

import useSWR from 'swr';
import Link from 'next/link';
import { Users, Plus } from 'lucide-react';

interface Liga {
  id: string;
  nome: string;
  total_membros: number;
  minha_posicao?: number;
}

interface LigasResponse {
  ligas: Liga[];
}

interface MinhasLigasProps {
  showCtaIfEmpty?: boolean;
}

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
});

export function MinhasLigas({ showCtaIfEmpty = false }: MinhasLigasProps) {
  const { data, isLoading, error } = useSWR<LigasResponse>(
    '/api/arena/ligas?tipo=minhas',
    fetcher,
    { revalidateOnFocus: true, dedupingInterval: 30000 }
  );

  if (error) return null;

  if (isLoading) {
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-5">
        <div className="h-16 rounded-lg bg-white/5 animate-pulse" />
      </div>
    );
  }

  const ligas = data?.ligas ?? [];

  if (ligas.length === 0 && !showCtaIfEmpty) return null;

  if (ligas.length === 0 && showCtaIfEmpty) {
    return (
      <Link
        href="/arena/ligas/criar"
        className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-5 hover:border-ufc-gold/30 transition-colors group"
      >
        <div className="w-10 h-10 rounded-full bg-ufc-gold/10 flex items-center justify-center shrink-0">
          <Users className="w-5 h-5 text-ufc-gold" />
        </div>
        <div>
          <div className="text-sm font-medium text-white group-hover:text-ufc-gold transition-colors">
            Crie uma liga e desafie amigos
          </div>
          <div className="text-xs text-white/30">Veja quem acerta mais no proximo card</div>
        </div>
      </Link>
    );
  }

  return (
    <div className="space-y-2">
      <div className="text-xs font-display uppercase tracking-widest text-white/40">
        Suas Ligas
      </div>
      <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1">
        {ligas.map(liga => (
          <Link
            key={liga.id}
            href={`/arena/ligas/${liga.id}`}
            className="shrink-0 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-4 min-w-[140px] hover:border-ufc-gold/30 transition-colors"
          >
            <div className="text-sm font-medium text-white truncate">{liga.nome}</div>
            {liga.minha_posicao != null && liga.minha_posicao > 0 && (
              <div className="text-xs text-ufc-gold mt-1">
                #{liga.minha_posicao} de {liga.total_membros}
              </div>
            )}
          </Link>
        ))}
        <Link
          href="/arena/ligas/criar"
          className="shrink-0 rounded-xl border border-dashed border-white/10 bg-black/20 p-4 min-w-[100px] flex flex-col items-center justify-center gap-1 hover:border-ufc-gold/30 transition-colors"
        >
          <Plus className="w-4 h-4 text-white/30" />
          <span className="text-xs text-white/30">Criar</span>
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/components/arena/MinhasLigas.tsx"
git commit -m "feat: add MinhasLigas component"
```

---

### Task 6: Create HomeNew component

**Files:**
- Create: `ufc-news-hub/src/components/arena/HomeNew.tsx`

- [ ] **Step 1: Create the component**

Reference `arena/page.tsx` for the `Evento` type, `EventoNome`, `Countdown`, and `OctagonTexture` components. These are not exported so HomeNew needs to import them. First, export `Evento`, `EventoNome`, `Countdown`, `OctagonTexture`, `sortLutas` from `arena/page.tsx` by adding `export` keyword to each.

Then create the component:

```typescript
'use client';

import Link from 'next/link';
import { Zap, ChevronRight } from 'lucide-react';
import { LiveRanking } from '@/components/arena/LiveRanking';
import type { Evento } from '@/components/arena/shared';
import { EventoNome, Countdown, OctagonTexture } from '@/components/arena/shared';

interface HomeNewProps {
  evento: Evento | null;
}

export function HomeNew({ evento }: HomeNewProps) {
  const totalLutas = evento?.lutas?.length ?? 0;

  return (
    <OctagonTexture posterUrl={evento?.poster_url} className="min-h-screen">
      <div className="container mx-auto px-4 pt-6 pb-8">
        <div className="max-w-lg mx-auto space-y-6">

          {evento ? (
            <div className="rounded-xl bg-black/60 backdrop-blur-sm px-5 py-4 space-y-3">
              <EventoNome nome={evento.nome} size="sm" />
              {evento.local && <div className="text-xs text-white/50">{evento.local}</div>}
              <div className="flex justify-center">
                <Countdown targetDate={evento.data_evento} />
              </div>
            </div>
          ) : (
            <div className="text-center pt-8">
              <h2 className="font-display text-3xl text-white uppercase">
                Arena <span className="text-ufc-red">UFC</span>
              </h2>
              <p className="text-sm text-white/50 mt-2">Fique ligado para o proximo card!</p>
            </div>
          )}

          {evento && (
            <>
              <div className="text-center space-y-3">
                <h2 className="font-display text-2xl uppercase text-white">
                  Bem-vindo a Arena!
                </h2>
                <p className="text-sm text-white/50 leading-relaxed">
                  Preveja o resultado de cada luta e ganhe pontos se acertar.
                </p>
              </div>

              <div className="text-center">
                <Link
                  href={`/arena/evento/${evento.id}`}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-ufc-red hover:bg-ufc-redLight text-white font-display text-lg uppercase tracking-wide rounded-xl transition-all shadow-lg shadow-ufc-red/20 hover:shadow-ufc-red/40"
                >
                  <Zap className="w-5 h-5" />
                  Comecar Agora
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="text-xs text-white/30 mt-2">{totalLutas} lutas no card</div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '+100', label: 'acerto', color: 'text-ufc-red' },
                  { value: '+50', label: 'metodo', color: 'text-ufc-gold' },
                  { value: '+50', label: 'round', color: 'text-green-400' },
                ].map(pill => (
                  <div key={pill.label} className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                    <div className={`font-display text-xl ${pill.color}`}>{pill.value}</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">{pill.label}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          <LiveRanking limit={3} />

        </div>
      </div>
    </OctagonTexture>
  );
}
```

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/components/arena/HomeNew.tsx" "ufc-news-hub/src/app/arena/page.tsx"
git commit -m "feat: add HomeNew component for first-time users"
```

---

### Task 7: Create HomeInProgress component

**Files:**
- Create: `ufc-news-hub/src/components/arena/HomeInProgress.tsx`
- Modify: `ufc-news-hub/src/app/arena/page.tsx` — add `showDetails` prop to `FightPreview`

- [ ] **Step 1: Add `showDetails` prop to FightPreview in arena/page.tsx**

Find the existing `FightPreview` function and add optional props for `categoria_peso`, `rounds`, and `showDetails`:

```typescript
function FightPreview({ luta, showDetails = false }: { luta: Luta; showDetails?: boolean }) {
  return (
    <div className="flex items-center justify-between py-3 px-2 -mx-2 rounded-lg border-b border-white/5 last:border-0 hover:bg-white/5 hover:border-ufc-red/30 transition-colors cursor-pointer">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className={`${showDetails ? 'w-10 h-10' : 'w-8 h-8'} rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-[10px] font-bold text-dark-textMuted overflow-hidden shrink-0`}>
          {luta.lutador1.imagem_url ? (
            <Image src={luta.lutador1.imagem_url} alt={luta.lutador1.nome} width={showDetails ? 40 : 32} height={showDetails ? 40 : 32} className="w-full h-full object-cover" />
          ) : (
            sobrenome(luta.lutador1.nome).slice(0, 2).toUpperCase()
          )}
        </div>
        <span className={`${showDetails ? 'text-base' : 'text-sm'} font-semibold text-white truncate`}>{sobrenome(luta.lutador1.nome)}</span>
      </div>
      <span className="text-[10px] text-dark-textMuted font-display mx-2">VS</span>
      <div className="flex items-center gap-3 flex-1 min-w-0 justify-end">
        <span className={`${showDetails ? 'text-base' : 'text-sm'} font-semibold text-white truncate text-right`}>{sobrenome(luta.lutador2.nome)}</span>
        <div className={`${showDetails ? 'w-10 h-10' : 'w-8 h-8'} rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-[10px] font-bold text-dark-textMuted overflow-hidden shrink-0`}>
          {luta.lutador2.imagem_url ? (
            <Image src={luta.lutador2.imagem_url} alt={luta.lutador2.nome} width={showDetails ? 40 : 32} height={showDetails ? 40 : 32} className="w-full h-full object-cover" />
          ) : (
            sobrenome(luta.lutador2.nome).slice(0, 2).toUpperCase()
          )}
        </div>
      </div>
    </div>
  );
}
```

Add below the main row, inside the outer div, before closing:
```typescript
{showDetails && (
  <div className="text-center text-xs text-white/30 -mt-1 pb-1">
    {luta.categoria_peso}
  </div>
)}
```

Export `FightPreview` so HomeInProgress can use it.

- [ ] **Step 2: Create HomeInProgress**

```typescript
'use client';

import Link from 'next/link';
import { Zap, ChevronRight } from 'lucide-react';
import { useArenaAuth } from '@/hooks/useArenaAuth';
import { LiveRanking } from '@/components/arena/LiveRanking';
import { MinhasLigas } from '@/components/arena/MinhasLigas';
import { UserStats } from '@/components/arena/UserStats';
import type { Evento } from '@/components/arena/shared';
import { EventoNome, Countdown, OctagonTexture, FightPreview, sortLutas } from '@/components/arena/shared';

interface HomeInProgressProps {
  evento: Evento | null;
  picks: Record<string, string>;
  picksCount: number;
  totalLutas: number;
}

export function HomeInProgress({ evento, picks, picksCount, totalLutas }: HomeInProgressProps) {
  const { usuario } = useArenaAuth();
  const remaining = totalLutas - picksCount;
  const progressPercent = totalLutas > 0 ? (picksCount / totalLutas) * 100 : 0;

  const sortedLutas = evento ? sortLutas(evento.lutas) : [];
  const nextUnpicked = sortedLutas.find(l => !picks[l.id]);

  return (
    <OctagonTexture posterUrl={evento?.poster_url} className="min-h-screen">
      <div className="container mx-auto px-4 pt-6 pb-8">
        <div className="max-w-lg mx-auto space-y-5">

          {evento ? (
            <div className="rounded-xl bg-black/60 backdrop-blur-sm px-5 py-4 space-y-3">
              <EventoNome nome={evento.nome} size="sm" />
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
          ) : (
            <div className="text-center pt-8">
              <h2 className="font-display text-2xl text-white uppercase">Nenhum evento agendado</h2>
              <p className="text-sm text-white/50 mt-2">Fique ligado para o proximo card!</p>
            </div>
          )}

          {evento && (
            <div className="rounded-xl border border-white/10 bg-black/50 backdrop-blur-md p-5 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-white">Seus Palpites</span>
                  <span className="text-xs text-white/50">{picksCount}/{totalLutas}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-ufc-red transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <Link
                href={`/arena/evento/${evento.id}`}
                className="group flex items-center justify-center gap-2 w-full py-3.5 bg-ufc-red hover:bg-ufc-redLight text-white font-display uppercase tracking-wide rounded-xl transition-all text-sm animate-pulse-red"
              >
                <Zap className="w-4 h-4" />
                Completar Palpites — {remaining} restante{remaining !== 1 ? 's' : ''}
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {nextUnpicked && (
                <Link href={`/arena/evento/${evento.id}`} className="block">
                  <div className="text-[10px] font-display uppercase tracking-widest text-white/30 mb-1">
                    Proxima luta
                  </div>
                  <FightPreview luta={nextUnpicked} showDetails />
                </Link>
              )}
            </div>
          )}

          <LiveRanking limit={3} highlightUserId={usuario?.id} />

          <MinhasLigas showCtaIfEmpty={picksCount > 0} />

          <UserStats />

        </div>
      </div>
    </OctagonTexture>
  );
}
```

- [ ] **Step 3: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 4: Commit**

```bash
git add "ufc-news-hub/src/components/arena/HomeInProgress.tsx" "ufc-news-hub/src/app/arena/page.tsx"
git commit -m "feat: add HomeInProgress component with progress and CTA"
```

---

### Task 8: Create HomeComplete component

**Files:**
- Create: `ufc-news-hub/src/components/arena/HomeComplete.tsx`

- [ ] **Step 1: Create the component**

```typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Trophy, Share2, Pencil } from 'lucide-react';
import { useArenaAuth } from '@/hooks/useArenaAuth';
import { LiveRanking } from '@/components/arena/LiveRanking';
import { MinhasLigas } from '@/components/arena/MinhasLigas';
import type { Evento } from '@/components/arena/shared';
import { EventoNome, Countdown, OctagonTexture } from '@/components/arena/shared';

interface HomeCompleteProps {
  evento: Evento | null;
  picks: Record<string, string>;
}

function maxPontos(picks: Record<string, string>): number {
  // +100 acerto + 50 metodo + 50 round = 200 max per fight
  return Object.keys(picks).length * 200;
}

export function HomeComplete({ evento, picks }: HomeCompleteProps) {
  const { usuario } = useArenaAuth();
  const [copied, setCopied] = useState(false);
  const totalPicks = Object.keys(picks).length;
  const pontos = maxPontos(picks);

  const handleCopyLink = () => {
    const url = `${window.location.origin}/arena`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  return (
    <OctagonTexture posterUrl={evento?.poster_url} className="min-h-screen">
      <div className="container mx-auto px-4 pt-6 pb-8">
        <div className="max-w-lg mx-auto space-y-5">

          {evento ? (
            <div className="rounded-xl bg-black/60 backdrop-blur-sm px-5 py-4 space-y-3">
              <EventoNome nome={evento.nome} size="sm" />
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
          ) : (
            <div className="text-center pt-8">
              <h2 className="font-display text-2xl text-white uppercase">Nenhum evento agendado</h2>
            </div>
          )}

          <div className="rounded-xl border border-ufc-gold/20 bg-ufc-gold/5 p-6 text-center space-y-3">
            <Trophy className="w-10 h-10 text-ufc-gold mx-auto" />
            <h2 className="font-display text-2xl uppercase text-white">Card Completo!</h2>
            <p className="text-sm text-white/50">
              {totalPicks}/{totalPicks} picks · {pontos.toLocaleString()} pts possiveis
            </p>
            {evento && (
              <Link
                href={`/arena/evento/${evento.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-white/60 hover:text-white hover:border-white/25 rounded-xl transition-colors text-sm"
              >
                <Pencil className="w-3.5 h-3.5" />
                Ver/Editar Previsoes
              </Link>
            )}
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-white/50" />
              <span className="text-sm font-medium text-white">Desafie seus amigos!</span>
            </div>
            <p className="text-xs text-white/40">Crie uma liga e veja quem acerta mais</p>
            <div className="flex gap-3">
              <Link
                href="/arena/ligas/criar"
                className="flex-1 py-2.5 bg-ufc-red hover:bg-ufc-redLight text-white font-display uppercase text-xs tracking-wide rounded-xl transition-all text-center"
              >
                Criar Liga
              </Link>
              <button
                onClick={handleCopyLink}
                className="flex-1 py-2.5 border border-white/15 text-white/60 hover:text-white hover:border-white/25 font-display uppercase text-xs tracking-wide rounded-xl transition-colors"
              >
                {copied ? 'Copiado!' : 'Copiar Link'}
              </button>
            </div>
          </div>

          <LiveRanking limit={3} highlightUserId={usuario?.id} />

          <MinhasLigas />

        </div>
      </div>
    </OctagonTexture>
  );
}
```

- [ ] **Step 2: Verify**

Run: `cd ufc-news-hub && npx tsc --noEmit`

- [ ] **Step 3: Commit**

```bash
git add "ufc-news-hub/src/components/arena/HomeComplete.tsx"
git commit -m "feat: add HomeComplete component with virality CTA"
```

---

### Task 9: Rewrite HomeLogado controller and cleanup arena/page.tsx

**Files:**
- Modify: `ufc-news-hub/src/app/arena/page.tsx`

- [ ] **Step 1: Delete old code from arena/page.tsx**

Remove these functions/blocks:
- `generateTickerMessages` function (lines ~226-283)
- `FightTicker` component (lines ~285-329)
- Old `HomeLogado` function (lines ~458-737)

- [ ] **Step 2: Export shared components and types**

Add `export` to: `Evento` interface, `OctagonTexture`, `Countdown`, `EventoNome`, `FightPreview`, `sortLutas`.

Remove unused imports: `Target`, `Flame`, `BarChart3`, `Users`, `Newspaper` (check which are still used by HomeLanding).

- [ ] **Step 3: Write new HomeLogado controller**

Add at the bottom of the file, before the main `ArenaPage` export:

```typescript
function HomeLogado({ evento }: { evento: Evento | null }) {
  const { usuario } = useArenaAuth();
  const { picks, picksLoading } = useEventoPicks(evento?.id);

  if (!usuario || picksLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Clock className="w-6 h-6 text-ufc-red animate-spin" />
      </div>
    );
  }

  const isNew = (usuario.total_previsoes ?? 0) === 0;
  const totalLutas = evento?.lutas?.length ?? 0;
  const picksCount = Object.keys(picks).length;
  const allDone = totalLutas > 0 && picksCount >= totalLutas;

  if (isNew) return <HomeNew evento={evento} />;
  if (allDone) return <HomeComplete evento={evento} picks={picks} />;
  return <HomeInProgress evento={evento} picks={picks} picksCount={picksCount} totalLutas={totalLutas} />;
}
```

Add imports at top:
```typescript
import { useEventoPicks } from '@/hooks/useEventoPicks';
import { HomeNew } from '@/components/arena/HomeNew';
import { HomeInProgress } from '@/components/arena/HomeInProgress';
import { HomeComplete } from '@/components/arena/HomeComplete';
```

- [ ] **Step 4: Verify build**

Run: `cd ufc-news-hub && npm run lint && npx tsc --noEmit && npm run build`
Expected: 0 errors, warnings OK

- [ ] **Step 5: Commit**

```bash
git add "ufc-news-hub/src/app/arena/page.tsx"
git commit -m "refactor: rewrite HomeLogado as thin 3-state controller, remove ticker and old code"
```

---

### Task 10: Final verification and deploy

- [ ] **Step 1: Full build verification**

Run: `cd ufc-news-hub && npm run build`
Expected: Build succeeds, no errors

- [ ] **Step 2: Deploy to Vercel**

Run: `cd /Users/gabz_cresta/Desktop/ufcnews && npx vercel --prod`

- [ ] **Step 3: Commit all changes**

```bash
git add -A && git status
```

Verify no untracked sensitive files, then final commit if needed.
