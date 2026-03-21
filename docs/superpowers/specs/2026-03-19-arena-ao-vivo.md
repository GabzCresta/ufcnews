# Arena Ao Vivo Redesign + Chat — Spec

**Date:** 2026-03-19
**Status:** Draft
**Goal:** Redesign the Ao Vivo page with componentized layout, add live current fight card, ranking movement arrows, and live chat (global + per-liga with tab switcher).

---

## Context

The Ao Vivo page (`/arena/live`, 375 lines) is functional but monolithic. It polls every 15s for fight results and displays a leaderboard. Missing: highlighted current fight, ranking movement indicators, and live chat. The chat is the most requested feature for the B2B model — creators want their communities talking during events.

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Chat scope | Global + per-liga (tab switcher) | Global for energy, liga for intimacy. Both have value for B2B |
| Chat transport | Polling 5s (separate from results 15s) | Simple, sufficient latency for chat. SSE/WS is premature |
| Chat DB | New table `chat_evento` | Clean separation from liga chat, simpler queries |
| Ranking arrows | Frontend-calculated via useRef | No DB change needed. Arrows reset on page reload (acceptable) |
| Existing components | Reuse LiveResultCard, LiveLeaderboard | Already exist and work, just need minor enhancements |

---

## Sub-project 1: Visual Redesign + Ranking Arrows

### Page Layout (top to bottom)

1. **EventHeader** — shared component with "Ao Vivo" badge
2. **LiveCurrentFight** — highlighted card of current/latest fight
3. **LiveLeaderboard** — top 20 with movement arrows
4. **Results list** — all finalized fights with LiveResultCard
5. **LiveChat** — tab switcher with chat (sub-project 2)

When no event is live: countdown to next event + recent finalized events (current behavior preserved).

### LiveCurrentFight

**File:** `src/components/arena/LiveCurrentFight.tsx` (~100 lines)

**Selection logic (parent determines which luta to pass):**
- If any luta has `status === 'ao_vivo'` → that one
- Else last luta with `status === 'finalizada'` (most recent result)
- Else first luta with `status === 'agendada'` (next up)
- If no lutas → component returns null

**Props — use flat types matching the `/api/arena/live` response shape (NOT `LutaComLutadores`):**
```typescript
interface LiveLuta {
  id: string;
  tipo: string;
  categoria_peso: string;
  status: string;
  is_titulo: boolean;
  ordem: number;
  lutador1_id: string;
  lutador1_nome: string;
  lutador1_foto: string | null;
  lutador2_id: string;
  lutador2_nome: string;
  lutador2_foto: string | null;
  vencedor_id: string | null;
  metodo: string | null;
  round_final: number | null;
}

interface LiveUserPick {
  luta_id: string;
  vencedor_previsto_id: string | null;
  metodo_previsto: string | null;
  round_previsto: number | null;
  acertou_vencedor: boolean | null;
  pontos_ganhos: number;
}

interface LiveCurrentFightProps {
  luta: LiveLuta;
  pick?: LiveUserPick;
}
```

These types match the flat structure returned by `/api/arena/live?evento_id=X`. The component derives `fightStatus` from `luta.status` directly.

**Rendering:**
- Large fighter photos (w-24 h-24), names in font-display text-xl
- Status badge: "EM ANDAMENTO" (red pulse) | "FINALIZADA" (green) | "PROXIMA" (white/30)
- If finalizada: vencedor name highlighted green, method + round shown
- "Seu pick" row below: fighter name + method + round. Color: green if `pick.acertou_vencedor === true`, red if `false`, white/50 if `null` (pending)

**Imports:** `Image` from next/image, `sobrenome` from shared. Types defined locally or in a `live-types.ts` file.

### LiveLeaderboard Enhancement

**File:** `src/components/arena/LiveLeaderboard.tsx` (modify existing)

**New prop:**
```typescript
interface LiveLeaderboardProps {
  // ... existing props
  movimentos?: Record<string, number>;  // userId → position delta (positive = moved up)
}
```

**Arrow rendering per row:**
- `movimentos[user.id] > 0` → `<span className="text-green-400 text-xs">↑{n}</span>`
- `movimentos[user.id] < 0` → `<span className="text-red-400 text-xs">↓{Math.abs(n)}</span>`
- `0` or undefined → no arrow

**No other changes** to existing functionality.

### LiveResultCard

**File:** `src/components/arena/LiveResultCard.tsx` (minor adjustments)

Align visual style with design system. No functional changes.

### Page Controller: `live/page.tsx` (375 → ~180 lines)

**Keeps:**
- SWR polling logic (15s for live, 0 for finalized)
- Countdown view when no live event
- Recent events list
- Event selection logic

**Removes:**
- Inline rendering of fight results (→ uses LiveResultCard)
- Inline leaderboard rendering (→ uses LiveLeaderboard)
- Any duplicated helpers

**Adds:**
- `useRef<Map<string, number>>` for previous ranking positions
- Ranking delta calculation on each poll
- LiveCurrentFight rendering with selected fight
- LiveChat rendering (sub-project 2)
- Import of EventHeader for live event header
- Fetch user's first liga via `GET /api/arena/ligas?tipo=minhas&limit=1` in parallel with live data. Passes `ligaId` and `ligaNome` to LiveChat. If user has no liga, LiveChat renders without tab switcher (geral only).

**EventHeader mapping:** The live API returns `local_evento` but EventHeader expects `evento.local` (from shared Evento type). The page controller maps: `{ ...apiEvento, local: apiEvento.local_evento }` before passing to EventHeader.

---

## Sub-project 2: Live Chat

### Database

**New table: `chat_evento`**
```sql
CREATE TABLE chat_evento (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  evento_id UUID NOT NULL REFERENCES eventos(id) ON DELETE CASCADE,
  usuario_id UUID NOT NULL REFERENCES usuarios_arena(id) ON DELETE CASCADE,
  mensagem TEXT NOT NULL CHECK (char_length(mensagem) <= 280),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_chat_evento_evento_created ON chat_evento(evento_id, created_at DESC);
CREATE INDEX idx_chat_evento_usuario ON chat_evento(usuario_id);
```

**Migration:** Raw SQL via Prisma migration or direct execution. Add model to `schema.prisma` as well.

### API: `GET/POST /api/arena/live/chat`

**GET** `?evento_id=X&limit=50&after=<ISO timestamp>`

Auth required. Returns:
```typescript
{
  mensagens: Array<{
    id: string;
    usuario_id: string;
    username: string;
    display_name: string | null;
    avatar_url: string | null;
    mensagem: string;
    created_at: string;
  }>;
}
```

SQL:
```sql
SELECT c.id, c.usuario_id, u.username, u.display_name, u.avatar_url,
       c.mensagem, c.created_at
FROM chat_evento c
JOIN usuarios_arena u ON u.id = c.usuario_id
WHERE c.evento_id = $1
  AND ($2::timestamptz IS NULL OR c.created_at > $2)
ORDER BY c.created_at DESC
LIMIT $3
```

Use subquery pattern for correct ordering (same as liga chat):
```sql
SELECT * FROM (
  SELECT c.id, c.usuario_id, u.username, u.display_name, u.avatar_url,
         c.mensagem, c.created_at
  FROM chat_evento c
  JOIN usuarios_arena u ON u.id = c.usuario_id
  WHERE c.evento_id = $1
    AND ($2::timestamptz IS NULL OR c.created_at > $2)
  ORDER BY c.created_at DESC
  LIMIT $3
) sub ORDER BY sub.created_at ASC
```

Also return `online_count` in GET response:
```sql
-- Separate query
SELECT COUNT(DISTINCT usuario_id)::int as online_count
FROM chat_evento
WHERE evento_id = $1 AND created_at > NOW() - interval '5 minutes'
```

Cache: `no-store` (always fresh).

**POST** `{ evento_id: string, mensagem: string }`

Auth required. Validations:
- `mensagem` not empty, max 280 chars (trimmed)
- `evento_id` exists and status is `ao_vivo` or `agendado` (can chat before event starts)
- Rate limit: 2s cooldown enforced on frontend (disable button). Server check is best-effort backstop (SELECT-then-INSERT, no transaction lock — acceptable for chat). Check last message: if `created_at > NOW() - 2 seconds`, reject with 429

Returns the created message with user info (same shape as GET items).

### LiveChat Component

**File:** `src/components/arena/LiveChat.tsx` (~150 lines)

**Props:**
```typescript
interface LiveChatProps {
  eventoId: string;
  ligaId?: string;      // if user has a liga, show tab switcher
  ligaNome?: string;    // display name for liga tab
}
```

**State:**
- `activeTab: 'geral' | 'liga'`
- `messages: ChatMessage[]` (for active tab)
- `inputValue: string`
- `isSending: boolean`

**Polling:**
- SWR with `refreshInterval: 5000`
- Key changes with active tab (geral vs liga)
- Uses `after` param with last message timestamp for incremental fetch
- Only polls the active tab

**URLs:**
- Geral: `GET /api/arena/live/chat?evento_id=${eventoId}&limit=50&after=${lastTs}`
- Liga: `GET /api/arena/ligas/${ligaId}/chat?after=${lastTs}` (existing endpoint)

**Send:**
- POST to active tab's endpoint
- Optimistic: add message to local state with temporary client-side `id` (e.g., `temp-${Date.now()}`). On next poll, deduplicate by matching `mensagem` + `usuario_id` + `created_at` within 10s window, replace temp with real `id`.
- On failure: remove temp message from local state, show brief error
- Disable send button for 2s after sending (rate limit)

**Auto-scroll behavior:** Only auto-scroll to bottom if user is already near the bottom (within 100px of scroll end). If user has scrolled up to read older messages, do not auto-scroll (show "N novas mensagens ↓" badge instead).

**Known limitations:**
- No pagination for chat history (last 50 messages only). Users joining late see recent context only.
- No profanity/spam filter (future enhancement for B2B moderation tools).

**Rendering:**
- Tab bar (only if `ligaId` exists): "Geral" | "Liga {ligaNome}"
- Messages area: scrollable div, auto-scroll to bottom on new messages
- Each message: `avatar (w-6 h-6) | username (bold) message (normal) | time (relative)`
- Input bar: text input + send button, fixed at bottom of chat area
- "X online" badge: uses `online_count` from GET response (server-computed)
- Empty state: "Nenhuma mensagem ainda. Comece a conversa!"

**Chat height:** Fixed at `h-80` (320px) with `overflow-y-auto` for messages.

---

## Polling Strategy Summary

| Data | Interval | API | Condition |
|---|---|---|---|
| Results + Ranking | 15s | `GET /api/arena/live?evento_id=X` | Always during ao_vivo |
| Chat geral | 5s | `GET /api/arena/live/chat?evento_id=X&after=ts` | When "Geral" tab active |
| Chat liga | 5s | `GET /api/arena/ligas/[id]/chat?after=ts` | When "Liga" tab active |
| Countdown | 60s | `GET /api/eventos/proximo` | When no live event |

---

## No Changes to Existing APIs

The `/api/arena/live` endpoint already returns everything needed for results + leaderboard + user picks. No modifications required.

## Liga Chat API Modification

`GET/POST /api/arena/ligas/[ligaId]/chat` already exists. **Required change:** The GET endpoint currently ignores query params. Add support for `?after=<ISO timestamp>&limit=50` to enable incremental polling. Add `WHERE lc.created_at > $after` filter to the SQL query. Without this, the liga tab re-fetches all 50 messages every 5s instead of incremental.

**Message length alignment:** The global chat uses 280 char limit. The existing liga chat validates at 500 chars. Align both to **280 chars** for consistency.

---

## File Summary

**New files (3):**
- `src/components/arena/LiveCurrentFight.tsx` (~100 lines)
- `src/components/arena/LiveChat.tsx` (~150 lines)
- `src/app/api/arena/live/chat/route.ts` (~80 lines)

**Modified files (4):**
- `src/app/arena/live/page.tsx` (375→~180 lines)
- `src/components/arena/LiveLeaderboard.tsx` (add `movimentos` prop + arrows)
- `src/components/arena/LiveResultCard.tsx` (minor visual alignment)
- `src/app/api/arena/ligas/[ligaId]/chat/route.ts` (add `after` + `limit` query params for incremental polling, align message limit to 280 chars)

**Database (1):**
- New table `chat_evento` with 2 indexes
- Prisma schema update

**Migration approach:** Create migration file, run `npx prisma migrate dev`, or execute SQL directly if using raw SQL pattern.
