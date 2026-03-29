# UFC News Hub - Detailed Integration Plan (V2 - Revised)

> Produced by the Integrator agent. Incorporates:
> - Full codebase analysis (orchestrator, event-bus, arena/auth, card-monitor, all dashboard sections)
> - Nick Saraev frameworks (deliverable-first dashboard, boring automations, simplified UI)
> - Data Engineer findings (9 shadow tables, pipeline_execucoes proposal, analises FK gap)
> - Architect's unified dashboard design (ARCHITECTURE-UNIFIED-DASHBOARD.md)

---

## 1. INTEGRATION PRIORITY MATRIX

| Tool | Impact | Effort | Priority | Approach |
|------|--------|--------|----------|----------|
| **Weekly Analysis Pipeline** | 10/10 (THE product) | Medium (DB tracking + progress bar) | P0 - Productize | DB-tracked pipeline with `pipeline_execucoes` table, progress bar in Overview, cron trigger |
| **Card Monitor** | 9/10 (daily ops) | Low (already integrated) | P0 - Maintain | Add SSE notifications, embed status summary in Overview war room |
| **Arena Admin** | 8/10 (user visibility) | Medium (new section + 3 API routes) | P1 - Build Next | Admin-side management via `requireAdmin()`, user table + stats |
| **Content Management** | 8/10 (deliverable ops) | Medium (new section) | P1 - Build Next | Unified noticias + analises + lutadores CRUD in one section |
| **Scraper/RSS** | 7/10 (content pipeline) | Low-Medium (move existing) | P1 - Build Next | Move `/scraper-live` logic into admin section |
| **AI Company** | 6/10 (internal tool) | Low (already integrated) | P2 - Simplify | Flatten hierarchy view, hide from non-technical overview |
| **Pipeline Viz** | 3/10 (over-engineered) | N/A (CANCELLED) | CANCELLED | Replace with simple progress bar in Pipeline section. No react-flow, no R3F. |
| **Event Bus** | 5/10 (ops visibility) | Low (absorb into AI Company) | P2 - Absorb | Add Events tab to AI Company section, not a separate section |

**Key change from V1:** Pipeline Viz is cancelled per Nick Saraev's "boring but effective" principle. The weekly pipeline status is shown as a progress bar, not a graph. AI Company hierarchy visualization stays but is de-emphasized. Dashboard shows deliverables (analyses, content, predictions), not tools.

---

## 2. SHARED INFRASTRUCTURE

### Auth Strategy (UNCHANGED)

**Decision: DO NOT merge auth systems.** Aligned with architect ADR-3.

| System | Mechanism | Scope | TTL | Storage |
|--------|-----------|-------|-----|---------|
| **Admin** | HMAC-signed token (`admin-sessions.ts`) | 1-2 operators | 8h | `sessionStorage` + `Authorization` header |
| **Arena** | JWT via jose (`arena/auth.ts`) + Google OAuth | Thousands of fans | 7d | `arena_token` cookie (HttpOnly) |

**Improvement** (from architect): Add Next.js middleware for centralized `/admin` + `/api/admin` route protection.

### State Management

**Current:** Raw `authFetch()` with local `useState`. No caching, no deduplication.

**Target:** SWR wrapper with refresh intervals calibrated per data volatility.

```typescript
// src/hooks/useAdminData.ts (NEW)
import useSWR from 'swr';
import { useAdminAuth } from '@/components/admin/AdminAuthContext';

export function useAdminSWR<T>(key: string | null, options?: { refreshInterval?: number }) {
  const { authFetch } = useAdminAuth();
  return useSWR<T>(key, (url: string) => authFetch(url).then(r => {
    if (!r.ok) throw new Error(`${r.status}`);
    return r.json();
  }), options);
}

// Calibrated hooks (from architect):
export function useAgents() {
  return useAdminSWR<Agent[]>('/api/company/agents', { refreshInterval: 3000 }); // fast: agent status changes
}
export function useOverview() {
  return useAdminSWR<OverviewStats>('/api/admin/overview', { refreshInterval: 30000 }); // stable KPIs
}
export function useMonitorLogs() {
  return useAdminSWR<{ logs: MonitorLog[] }>('/api/admin/card-monitor'); // on-demand
}
export function usePipelineStatus() {
  return useAdminSWR<PipelineExecucao[]>('/api/admin/pipeline/status', { refreshInterval: 5000 }); // during execution
}
```

### Real-time (SSE)

**Current:** SSE only during `/api/company/prompt` execution.

**Target:** Shared admin SSE channel. BUT per architect: Vercel Serverless has 60s timeout on SSE, so use polling as primary with SSE as enhancement.

```
GET /api/admin/stream (NEW)
  -> agent_activity, event_bus, card_monitor, cost_alert, pipeline_progress, system heartbeat
  Fallback: SWR polling at calibrated intervals
```

### Navigation (Sidebar - Aligned with Architect)

**Target grouping** (from ARCHITECTURE-UNIFIED-DASHBOARD.md):

```typescript
type SectionId =
  | 'overview' | 'clientes' | 'pipeline' | 'analytics'          // NEGOCIO
  | 'content' | 'card-monitor' | 'scraper'                      // CONTEUDO
  | 'ai-company' | 'arena-admin' | 'site-vercel' | 'landing-page'; // SISTEMA

const NAV_GROUPS = [
  { label: 'NEGOCIO', items: [
    { id: 'overview',  label: 'Overview',  icon: LayoutDashboard },
    { id: 'clientes',  label: 'Clientes',  icon: Users },
    { id: 'pipeline',  label: 'Pipeline',  icon: GitBranch },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ]},
  { label: 'CONTEUDO', items: [
    { id: 'content',      label: 'Conteudo',     icon: FileText },
    { id: 'card-monitor', label: 'Card Monitor', icon: Shield },
    { id: 'scraper',      label: 'Scraper',      icon: Rss },
  ]},
  { label: 'SISTEMA', items: [
    { id: 'ai-company',   label: 'AI Company',   icon: Bot },
    { id: 'arena-admin',  label: 'Arena',         icon: Trophy },
    { id: 'site-vercel',  label: 'Site / Vercel', icon: Server },
    { id: 'landing-page', label: 'Landing Page',  icon: Earth },
  ]},
];
```

**Key difference from V1:** No `event-bus` or `pipeline-viz` as separate sections. Event Bus is a tab inside AI Company. Pipeline status is a progress bar inside the existing Pipeline section. `content`, `scraper`, and `analytics` are new sections per architect.

### Data Layer Fixes (from Data Engineer)

**Problem:** 9 shadow tables outside Prisma schema, no FKs between AI Company and core domain.

**Integration plan actions:**

1. **New table: `pipeline_execucoes`** (tracks weekly analysis pipeline runs)
   ```sql
   CREATE TABLE pipeline_execucoes (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     evento_id UUID REFERENCES eventos(id),
     step TEXT NOT NULL,  -- 'card_scraper', 'fight_analyst_main', 'fight_analyst_prelims', 'validator', 'event_page'
     status TEXT DEFAULT 'pending',  -- pending, running, completed, failed
     started_at TIMESTAMPTZ,
     completed_at TIMESTAMPTZ,
     output JSONB,
     error TEXT,
     created_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```
   This replaces `localStorage`-based pipeline tracking (current `PipelineSection.tsx`).

2. **Add `luta_id` FK to analises**: Connect fight analyses to the `lutas` table so analyses are queryable by event/fight.

3. **Migrate shadow tables to Prisma** (future phase, not blocking): `card_monitor_logs`, `card_snapshots`, `enquetes`, `clientes`, `entregas` should eventually be in `schema.prisma` for type safety.

4. **Add AI Company -> core FKs** (future phase): Connect `AgentTask.output` references to `noticias`, `eventos`, `lutadores` when agents produce domain data.

---

## 3. PER-MODULE INTEGRATION PLAN

### Weekly Analysis Pipeline (P0 - THE PRODUCT)

```
Current location: .claude/agents/ (card-scraper, fight-analyst, card-validator, event-page-generator)
  + PipelineSection.tsx (localStorage checklist)
Target location: /admin?section=pipeline (EXISTING section, REDESIGN)
Components to reuse:
  - PipelineSection.tsx skeleton (keep checklist UX pattern)
Components to create:
  - PipelineProgressBar.tsx — shows step-by-step progress from pipeline_execucoes
  - PipelineEventCard.tsx — shows next event with fight count + analysis status
API routes:
  - GET /api/admin/pipeline/status (NEW) — current pipeline execution state from pipeline_execucoes
  - POST /api/admin/pipeline/trigger (NEW) — trigger pipeline for next event (calls card scraper)
Data flow:
  - Reads: pipeline_execucoes table, eventos table, analysis files
  - Produces: Pipeline execution records, progress events
  - Replaces: localStorage-based checklist with DB-tracked execution
Migration steps:
  1. Create pipeline_execucoes table (Prisma migration)
  2. Create GET /api/admin/pipeline/status route
  3. Redesign PipelineSection with progress bar + event card
  4. Replace localStorage tracking with DB queries
  5. Add "Pipeline Status" card to Overview war room
  6. Wire Card Scraper agent to write pipeline_execucoes records on execution
```

**Nick Saraev alignment:** This is the core product. The dashboard shows "UFC 326: 12/14 analyses published" as a deliverable status, NOT agent orchestration details.

### Card Monitor (P0 - MAINTAIN)

```
Current location: src/lib/card-monitor.ts + CardMonitorSection.tsx
Target location: /admin?section=card-monitor (already there)
Components to reuse: CardMonitorSection.tsx (262 lines) — keep as-is
Components to create: NONE
API routes: Keep existing
Migration steps:
  1. Replace raw authFetch with useAdminSWR
  2. Add compact status widget to Overview war room
  3. Add SSE notification when changes detected (Phase 5)
```

### Content Management (P1 - NEW)

```
Current location: Scattered across /api/noticias, /api/admin/*, src/lib/rss-parser.ts, news-caption.ts
Target location: /admin?section=content (NEW section)
Components to reuse:
  - Existing /api/noticias endpoints
  - news-caption.ts AI generation
Components to create:
  - ContentSection.tsx — tabs: Noticias | Analises | Lutadores
  - ContentTable.tsx — generic content list with status, actions
API routes:
  - GET /api/admin/content/stats (NEW) — articles count, analyses count, last sync
  - Reuse: /api/noticias, /api/admin/backfill-captions, etc.
Data flow:
  - Reads: noticias, analises (if table exists), lutadores tables
  - Produces: Content CRUD operations
Migration steps:
  1. Create ContentSection with three tabs
  2. Wire Noticias tab to existing /api/noticias with admin authFetch
  3. Wire Analises tab to analysis file listing
  4. Wire Lutadores tab to /api/lutadores
  5. Add content metrics to Overview
```

### Scraper Section (P1 - MIGRATE FROM /scraper-live)

```
Current location: /[locale]/scraper-live (inside public routes, should be admin)
Target location: /admin?section=scraper (NEW section)
Components to reuse:
  - Existing scraper-live page logic
  - CardMonitorSection patterns (status badges, log viewer)
Components to create:
  - ScraperSection.tsx — RSS status, scraper logs, manual triggers, feed health
API routes:
  - Reuse: /api/cron (RSS sync), /api/cron/card-monitor
  - GET /api/admin/scraper/status (NEW) — last sync, error count, feed health
Migration steps:
  1. Extract scraper-live page logic into ScraperSection component
  2. Create /api/admin/scraper/status route
  3. Add to sidebar under CONTEUDO group
  4. Remove or redirect /[locale]/scraper-live
```

### Arena Admin (P1 - NEW)

```
Current location: src/lib/arena/ + src/components/arena/ + /api/arena/*
Target location: /admin?section=arena-admin (NEW section)
Components to create:
  - ArenaAdminSection.tsx — user list, stats, moderation
API routes:
  - GET /api/admin/arena/users (NEW) — paginated user list with stats
  - GET /api/admin/arena/stats (NEW) — aggregated metrics
  - POST /api/admin/arena/users/[id]/action (NEW) — ban/unban/reset
  (All use requireAdmin(), query via raw SQL)
Data flow:
  - Reads: usuarios_arena, previsoes, ligas, duelos (raw SQL)
  - Does NOT touch arena auth (fans keep JWT flow)
Migration steps:
  1. Create /api/admin/arena/users + /stats routes
  2. Create ArenaAdminSection component
  3. Add to sidebar under SISTEMA group
  4. Add arena user count to Overview
```

### Analytics (P1 - NEW)

```
Current location: No unified analytics exists
Target location: /admin?section=analytics (NEW section)
Components to create:
  - AnalyticsSection.tsx — page views, top content, arena engagement, AI costs
API routes:
  - GET /api/admin/analytics (NEW) — aggregated cross-module metrics
Data flow:
  - Reads: noticias (views), usuarios_arena (activity), AgentCost (AI spend)
  - Consolidates data from all modules into single view
Migration steps:
  1. Create /api/admin/analytics route aggregating cross-module data
  2. Create AnalyticsSection with charts/metrics
  3. Add to sidebar under NEGOCIO group
```

### AI Company (P2 - SIMPLIFY)

```
Current location: src/lib/ai-company/ + src/components/admin/ + /api/company/*
Target location: /admin?section=ai-company (already there, SIMPLIFY)
Components to reuse: All existing (AdminDashboard.tsx, AgentCard, PromptInput, etc.)
Components to create: NONE
Changes:
  - ADD: Event Bus tab inside AI Company section (absorb event-bus.ts visibility)
  - SIMPLIFY: Flatten org view — show agents as flat list with status, not hierarchy tree
  - DE-EMPHASIZE: Move from prominent sidebar position to SISTEMA group
  - KEEP: PromptInput, CostTracker, PerformanceView as-is
Migration steps:
  1. Add "Events" tab to AI Company section showing AgentEvent records
  2. Add manual event emit form within Events tab
  3. Simplify default view from hierarchy to flat agent list with status badges
  4. Keep detailed hierarchy view as toggle for power users
```

**Nick Saraev alignment:** The 14-agent hierarchy is "impressive but over-engineered for a content platform that publishes 1x/week." The dashboard shows cost + performance, not org charts. Agents are background workers, not front-page features.

### Overview Redesign (P1 - WAR ROOM)

```
Current location: OverviewSection.tsx (4 KPI cards + event detail + quick actions)
Target location: /admin?section=overview (REDESIGN as war room)
Layout (from architect):
  +------------------------------------------+
  | KPIs: [Analyses Published] [Arena Users]  |
  |        [Next Event Days] [AI Cost Today] |
  +------------------------------------------+
  | Next Event        | Pipeline Progress    |
  | UFC 326 (5 days)  | [=====>    ] 8/14    |
  +-------------------+----------------------+
  | Card Monitor      | Activity Feed        |
  | - Last check OK   | (SSE real-time)      |
  | - 0 changes       | 09:32 Agent X done   |
  +-------------------+----------------------+
Migration steps:
  1. Redesign OverviewSection with CSS Grid layout
  2. Add PipelineProgressBar widget (reads pipeline_execucoes)
  3. Add compact CardMonitor status widget
  4. Add ActivityFeed widget (reuse existing ActivityFeed.tsx)
  5. Update /api/admin/overview to include pipeline + arena + content metrics
```

---

## 4. PIPELINE VIZ MIGRATION

### Decision: CANCELLED

Per Nick Saraev's "boring but effective" principle:

> "DO NOT: Build Pipeline Viz as a separate tool. Embed pipeline status as a simple progress bar in the main dashboard."

**What replaces it:**

1. **Progress bar in Pipeline section** showing step-by-step status from `pipeline_execucoes` table:
   ```
   Card Scraper [DONE] -> Fight Analyst Main [RUNNING 8/10] -> Prelims [PENDING] -> Validator [PENDING] -> Event Page [PENDING]
   ```

2. **Deliverable-focused display**: "12/14 analyses published for UFC 326" not "Agent analytics-dir completed task #47"

3. **No new dependencies**: No react-flow, no R3F, no Three.js. Pure HTML/CSS progress indicators using existing `neu-card` patterns.

**Files to create:**
- `src/components/admin/shared/ProgressBar.tsx` — reusable step progress bar
- That's it.

---

## 5. SHARED COMPONENT LIBRARY

### Extract from existing code

| Component | Current Location | Reuse Target |
|-----------|-----------------|--------------|
| `StatusBadge` | `admin/StatusBadge.tsx` | AI Company, Arena Admin, Scraper, Pipeline |
| `ModelBadge` | `admin/ModelBadge.tsx` | AI Company |
| `MarkdownReport` | `admin/MarkdownReport.tsx` | AI Company, Content |
| `ActivityFeed` | `admin/ActivityFeed.tsx` | Overview war room, AI Company |
| `CostTracker` | `admin/CostTracker.tsx` | Overview war room, AI Company |

### New shared components

| Component | Purpose | Used By |
|-----------|---------|---------|
| `StatCard` | Reusable KPI card (icon, value, label, color) | Overview, Analytics, Arena Admin |
| `DataTable` | Sortable, filterable, paginated table | Arena Admin, Content, Scraper |
| `SectionHeader` | Consistent section header with icon + title + description | All new sections |
| `ProgressBar` | Multi-step progress indicator | Pipeline, Overview |
| `EmptyState` | Consistent empty state with icon + message + action | All sections |

**Target location:** `src/components/admin/shared/`

---

## 6. MIGRATION ORDER

### Phase 1: Data Foundation + Shared Components
**Depends on: Nothing**
**Effort: Small-Medium (8 files)**

```
1. Create pipeline_execucoes table (Prisma migration)
2. Create src/hooks/useAdminData.ts with useAdminSWR wrapper
3. Create src/components/admin/shared/StatCard.tsx
4. Create src/components/admin/shared/DataTable.tsx
5. Create src/components/admin/shared/SectionHeader.tsx
6. Create src/components/admin/shared/ProgressBar.tsx
7. Create src/components/admin/shared/EmptyState.tsx
8. Refactor OverviewSection to use useAdminSWR + StatCard
```

### Phase 2: Sidebar + New Sections (Content, Scraper, Arena Admin, Analytics)
**Depends on: Phase 1**
**Effort: Medium-High (15+ files created/modified)**

```
1. Extend SectionId type with new sections
2. Add grouped navigation to DashboardSidebar (NEGOCIO / CONTEUDO / SISTEMA)
3. Add dynamic imports to DashboardShell
4. Create ContentSection (noticias + analises + lutadores tabs)
5. Create ScraperSection (migrate from /scraper-live)
6. Create /api/admin/arena/users + /stats routes
7. Create ArenaAdminSection
8. Create /api/admin/analytics route
9. Create AnalyticsSection
10. Redesign OverviewSection as war room with grid layout
11. Add pipeline progress bar to Overview + Pipeline section
12. Add middleware.ts for centralized admin route protection
```

### Phase 3: Pipeline Productization
**Depends on: Phase 1 (pipeline_execucoes table)**
**Effort: Medium (6 files)**

```
1. Create GET /api/admin/pipeline/status route
2. Create POST /api/admin/pipeline/trigger route
3. Redesign PipelineSection with DB-tracked progress (replaces localStorage)
4. Wire Card Scraper + Fight Analyst agents to write pipeline_execucoes records
5. Add pipeline progress widget to Overview war room
6. Add "last analysis published" to Overview KPIs
```

### Phase 4: AI Company Simplification + Event Bus Absorption
**Depends on: Phase 2**
**Effort: Low-Medium (3-4 files modified)**

```
1. Add Events tab to AI Company section (shows AgentEvent records)
2. Add manual event emit form within Events tab
3. Simplify default org view from hierarchy to flat agent list
4. Keep hierarchy toggle for power users
```

### Phase 5: Real-time (SSE) + Polish
**Depends on: Phase 2**
**Effort: Medium (3 files created)**

```
1. Create GET /api/admin/stream SSE endpoint (with polling fallback for Vercel 60s limit)
2. Create useAdminSSE hook with reconnection + SWR mutate() integration
3. Wire SSE to Overview activity feed, pipeline progress, card monitor alerts
4. Add cost cap alert notifications
```

---

## Summary

| Metric | V1 | V2 (Revised) | Delta |
|--------|----|-------------|-------|
| **New sections** | 4 | 4 (Content, Scraper, Arena Admin, Analytics) | Same count, different sections |
| **Cancelled sections** | 0 | 2 (Pipeline Viz, Event Bus standalone) | Simplified |
| **New API routes** | ~8 | ~8 | Same |
| **New components** | ~12 | ~10 | Fewer (no Pipeline Viz graph) |
| **New hooks** | 2 | 2 (useAdminData, useAdminSSE) | Same |
| **New dependencies** | 1 (reactflow) | 0 | Eliminated |
| **New DB tables** | 0 | 1 (pipeline_execucoes) | Data foundation |
| **Breaking changes** | 0 | 0 | Preserved |
| **Auth changes** | 0 | 0 | Preserved |
| **Phases** | 5 | 5 | Same |

### Key Philosophical Shifts from V1

1. **Deliverables over tools**: Dashboard shows "12/14 analyses published" not "Agent X completed task Y"
2. **Boring over impressive**: Progress bar replaces Pipeline Viz graph. No new visualization dependencies.
3. **Flat over hierarchical**: AI Company shown as flat agent list, not org tree. Hierarchy is a toggle.
4. **DB over localStorage**: Pipeline tracking moves from browser localStorage to `pipeline_execucoes` table
5. **Absorb over proliferate**: Event Bus absorbed into AI Company tab instead of becoming a new section
