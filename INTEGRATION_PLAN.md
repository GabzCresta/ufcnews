# UFC News Hub - Integration Plan

## Current State Assessment

### 1. Admin Dashboard (already integrated)
- **Location**: `/admin` route, `DashboardShell` with sidebar navigation
- **Sections**: Overview, Clientes, Card Monitor, Pipeline, AI Company, Landing Page, Site/Vercel
- **Auth**: HMAC token via `AdminAuthContext` (password-based, sessionStorage, 8h TTL)
- **Navigation**: `DashboardSidebar` with `SectionId` union type, URL query param `?section=X`
- **Data fetching**: Direct `authFetch()` calls (no SWR in admin), optimistic updates for agents
- **State**: Local React state per section, no shared cross-section state

### 2. AI Company (already inside admin)
- **Location**: `AICompanySection` wraps `AICompanyContent` from `AdminDashboard.tsx`
- **14 agents**: CEO orchestrator, directors, field agents with hierarchical delegation
- **Real-time**: SSE via `/api/company/prompt` route for task execution streaming
- **Event Bus**: DB-backed (`AgentEvent` table), processes pipelines with dependency waves
- **XP Engine**: Agent leveling (L1-L4), weekly scores, auto-promotion/demotion
- **Cost Guard**: Daily cap ($5 default), per-agent cost tracking
- **Tools**: 30+ tools in `src/lib/ai-company/tools/index.ts`
- **APIs**: 13 sub-routes under `/api/company/`

### 3. Card Monitor (already inside admin)
- **Location**: `CardMonitorSection` in dashboard sidebar
- **Function**: Monitors UFC event card changes (fights added/removed/changed)
- **API**: `/api/admin/card-monitor`
- **Status**: Fully integrated in dashboard, uses `authFetch`

### 4. Arena (separate system)
- **Location**: `/api/arena/` (10+ sub-routes), components in `src/components/arena/` (40+ files)
- **Auth**: Separate JWT system (`arena/auth.ts`), bcrypt + jose, Google OAuth, `arena_token` cookie
- **User model**: `usuarios_arena` table (raw SQL via `query()`), Portuguese columns
- **Features**: Predictions, leagues, duels, rankings, live events, social, user profiles
- **Hooks**: `useArenaAuth`, `useEventoPicks`, etc.
- **UI**: Mobile-first, swipe cards, bottom nav, completely different from admin
- **XP System**: User-facing XP (different from agent XP), levels from `iniciante` to `legend`

### 5. Pipeline Viz (NOT FOUND in codebase)
- **Status**: Does not exist yet as a directory or component in the monorepo
- **Planned**: React Three Fiber (Three.js) visualization of data pipelines with 3D nodes
- **Decision needed**: Build from scratch inside Next.js or as separate app

---

## Integration Architecture

### Phase 1: Shared Navigation Shell (PRIORITY 1 - Foundation)

**Goal**: Extend `DashboardSidebar` to accommodate all modules without breaking existing sections.

**Changes**:
1. Add new `SectionId` values: `'arena-admin'`, `'pipeline-viz'`, `'event-bus'`
2. Group sidebar into collapsible categories:
   ```
   NEGOCIO
     Overview | Clientes | Pipeline Clientes | Landing Page | Site/Vercel

   UFC CONTENT
     Card Monitor | Arena Admin

   AI COMPANY
     Org & Prompt | Event Bus | Pipeline Viz

   (existing) CONTEUDO DO SITE links
   ```
3. Keep `DashboardShell` pattern: dynamic imports per section, URL query param routing
4. No new dependencies needed

**Files to modify**:
- `src/components/admin/dashboard/DashboardSidebar.tsx` - Add categories, new nav items
- `src/components/admin/dashboard/DashboardShell.tsx` - Add dynamic imports for new sections

### Phase 2: Auth Unification (PRIORITY 2 - Blocker for Arena Admin)

**Current state**:
- Admin: HMAC token in `sessionStorage` + `admin_token` cookie, password-based
- Arena: JWT (jose) in `arena_token` cookie, email/password + Google OAuth

**Strategy**: Keep both auth systems but add admin-level arena management.

**Do NOT merge the auth systems**. They serve different purposes:
- Admin auth = site operator (1-2 people)
- Arena auth = end users (thousands of fans)

**What to build**:
1. **Arena Admin Section**: New dashboard section that lets admin manage arena users, view stats, moderate content
2. **Admin access to arena data**: Admin `authFetch` calls to new `/api/admin/arena/` endpoints
3. These endpoints use `requireAdmin(request)` (existing admin auth), but query `usuarios_arena` tables

**New API routes**:
- `GET /api/admin/arena/users` - List arena users with stats
- `GET /api/admin/arena/stats` - Aggregated arena metrics (active users, predictions, leagues)
- `POST /api/admin/arena/users/:id/action` - Ban, reset, modify user

**Files to create**:
- `src/app/api/admin/arena/users/route.ts`
- `src/app/api/admin/arena/stats/route.ts`
- `src/components/admin/dashboard/sections/ArenaAdminSection.tsx`

### Phase 3: Event Bus Dashboard (PRIORITY 3 - Visibility)

**Goal**: Surface the event bus and pipeline execution in the admin dashboard.

**Current state**: Event bus is code-only (`event-bus.ts`, `pipelines.ts`), no UI to see pending/processing/completed events or trigger events manually.

**What to build**:
1. **EventBusSection**: New dashboard section showing:
   - Pending/processing/completed/failed events (from `AgentEvent` table)
   - Pipeline definitions (from `pipelines.ts`, read-only display)
   - Manual event trigger (emit events from UI)
   - Real-time updates via polling or SSE
2. **API routes**:
   - `GET /api/admin/events` - Already exists, extend if needed
   - `POST /api/admin/events/emit` - Trigger event manually
   - `GET /api/admin/events/pipelines` - List pipeline definitions

**Files to create**:
- `src/components/admin/dashboard/sections/EventBusSection.tsx`
- `src/app/api/admin/events/emit/route.ts`
- `src/app/api/admin/events/pipelines/route.ts`

### Phase 4: Pipeline Viz (PRIORITY 4 - Enhancement)

**Options analysis**:

| Option | Pros | Cons |
|--------|------|------|
| **A: Embed in Next.js** | Single deploy, shared auth, direct data access | Three.js bundle size (+500KB), may slow admin build |
| **B: Separate app (iframe)** | Isolated bundle, independent deploy | Auth passthrough needed, iframe UX issues |
| **C: Lightweight 2D viz** | No Three.js, small bundle, fast to build | Less impressive, no 3D nodes |

**Recommendation: Option C first, Option A later.**

Build a 2D pipeline visualization using existing CSS/SVG/Canvas first:
1. Use `react-flow` (lightweight, React-native, supports custom nodes) to render pipeline DAGs
2. Nodes represent agents, edges represent `dependsOn` relationships
3. Color-code by status (idle/active/error)
4. Animate edges during execution (SSE events)
5. Click node to see agent detail

If 3D is needed later, add Three.js behind `dynamic(() => import(...), { ssr: false })` with `next/dynamic`.

**Files to create**:
- `src/components/admin/dashboard/sections/PipelineVizSection.tsx`
- `src/components/admin/pipeline/PipelineGraph.tsx`
- `src/components/admin/pipeline/AgentNode.tsx`

**New dependency**: `reactflow` (~150KB vs Three.js ~500KB)

### Phase 5: Real-Time Unification (PRIORITY 5 - Polish)

**Current SSE usage**: Only `/api/company/prompt` uses SSE during prompt execution.

**Strategy**: Extend SSE to be a shared real-time channel for the dashboard.

1. **Shared SSE endpoint**: `GET /api/admin/stream` that multiplexes:
   - Agent activity (existing prompt events)
   - Event bus processing
   - Card monitor changes
   - Cost alerts (approaching daily cap)
2. **Client-side hook**: `useAdminSSE()` that manages the EventSource connection
3. Sections subscribe to event types they care about
4. Fallback to polling if SSE disconnects

**Files to create**:
- `src/app/api/admin/stream/route.ts`
- `src/hooks/useAdminSSE.ts`

---

## State Management Strategy

**Current**: No global state. Each section fetches its own data with `authFetch`.

**Recommendation**: Keep it simple. Do NOT add Redux/Zustand.

1. **Cross-section data**: Use SWR for admin data fetching (already in project deps)
   - Replace raw `authFetch` with SWR + `authFetch` as fetcher
   - Automatic deduplication, revalidation, caching
   - Example: agent data shared between AI Company and Pipeline Viz sections

2. **Real-time updates**: `useAdminSSE()` hook with `mutate()` from SWR to invalidate
   - SSE event arrives -> `mutate('/api/company/agents')` -> all sections using that key re-render

3. **Pattern**:
   ```typescript
   // hooks/useAdminData.ts
   function useAgents() {
     const { authFetch } = useAdminAuth();
     return useSWR('/api/company/agents', (url) => authFetch(url).then(r => r.json()));
   }
   ```

---

## Integration Priority Order

| # | Phase | Effort | Impact | Dependencies |
|---|-------|--------|--------|-------------|
| 1 | Shared Navigation Shell | Small (1-2 files) | High - enables everything | None |
| 2 | Arena Admin Section | Medium (3-4 files) | High - missing visibility | Phase 1 |
| 3 | Event Bus Dashboard | Medium (3-4 files) | High - operations visibility | Phase 1 |
| 4 | Pipeline Viz (2D) | Medium (3 files + dep) | Medium - nice to have | Phase 1, 3 |
| 5 | Real-Time Unification | Medium (2 files) | Medium - UX polish | Phase 1 |

**Total estimated new files**: ~15 files
**No breaking changes**: All existing functionality preserved

---

## Risks & Mitigations

1. **Bundle size**: Dynamic imports already in place. New sections lazy-loaded.
2. **Auth confusion**: Explicitly keeping admin and arena auth separate. Arena Admin section uses admin auth to query arena data.
3. **Pipeline Viz perf**: Start with 2D react-flow. Only add Three.js if user demands 3D.
4. **SSE reliability**: Include reconnection logic and polling fallback in `useAdminSSE`.
5. **Data consistency**: SWR cache invalidation via SSE events ensures fresh data without manual refresh.
