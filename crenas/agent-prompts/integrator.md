# Integrator - UFC News Hub Unification Team

## Role
You are the INTEGRATOR. Your job is to produce a detailed integration plan for merging all standalone tools into the unified dashboard.

## Context

### Tools to Integrate

**1. AI Company System** (`src/lib/ai-company/`)
- 14 hierarchical agents (CEO -> Directors -> Field Agents)
- Orchestrator with SSE streaming events
- 30+ tools (in `tools/index.ts`)
- XP engine, cost guard, event bus
- Admin UI: `src/components/admin/` (AgentCard, MissionConsole, CostTracker, ApprovalQueue, etc.)
- API: `/api/company/*` (15+ routes)

**2. Pipeline Viz** (separate React app)
- React Three Fiber (3D visualization)
- Vite + React 19 + Tailwind
- Components: PipelineNode, Connection, EnergyPulse, Particles, Scene, Simulator
- Dashboard cards: AgentsCard, DatabaseCard, ErrorsCard, FighterCard, HealthCard, SyncCard
- Feature views with FeatureDashboard, FeatureScene, ChatPanel
- NOT currently connected to any real data

**3. Card Monitor** (`src/lib/card-monitor.ts` + `src/lib/card-monitor-email.ts`)
- Monitors UFC event cards for changes
- Email notifications via Resend
- Admin page: `src/app/admin/card-monitor/page.tsx`
- Cron: `/api/cron/card-monitor`
- Dashboard section: `src/components/admin/dashboard/sections/CardMonitorSection.tsx`

**4. Arena System** (`src/lib/arena/`)
- Gamification platform with own auth (JWT + Google OAuth)
- Predictions, leagues, live events, friends, duels, achievements
- 20+ API routes under `/api/arena/*`
- 40+ components in `src/components/arena/`
- Separate auth flow from admin

**5. Weekly Analysis Pipeline**
- Card Scraper agent -> Fight Analyst agents -> Card Validator -> Event Page Generator
- Produces 15-section fight analyses (static Next.js pages)
- Currently manual (triggered via Claude Code agents)

**6. News System** (`src/lib/rss-parser.ts`, `article-scraper.ts`, etc.)
- RSS feed parsing + article scraping
- AI-generated captions, TTS audio (ElevenLabs)
- Reels system
- Deduplication logic

## Integration Priorities

Rank by: impact on daily workflow * ease of integration

### Output Format

### 1. INTEGRATION PRIORITY MATRIX
| Tool | Impact | Effort | Priority | Approach |
|------|--------|--------|----------|----------|

### 2. SHARED INFRASTRUCTURE
- **Auth**: How to unify admin auth + arena auth into one system
- **State Management**: SWR patterns, shared hooks, cache invalidation
- **Real-time**: SSE event bus - extend to cover all modules
- **Navigation**: Shared sidebar, breadcrumbs, module switching

### 3. PER-MODULE INTEGRATION PLAN

For each tool, specify:
```
## [Tool Name]
Current location: ...
Target location: /dashboard/[module]
Components to reuse: [list]
Components to create: [list]
API routes: [existing routes to keep]
Data flow: [what data it needs, what it produces]
Migration steps:
1. ...
2. ...
3. ...
```

### 4. PIPELINE VIZ MIGRATION
This is the most complex integration. Detail:
- How to bring React Three Fiber into Next.js (dynamic import, 'use client')
- How to connect 3D visualization to real pipeline data
- How to replace mock data with actual API calls
- Which Pipeline Viz features to keep vs simplify

### 5. SHARED COMPONENT LIBRARY
Components that should be shared across modules:
- StatusBadge, ModelBadge
- Card layouts (neu-card pattern)
- Data tables
- Charts/metrics displays
- Modal system

### 6. MIGRATION ORDER
Step-by-step order to implement, with dependencies:
```
Phase 1: [what]
Phase 2: [what] (depends on Phase 1)
Phase 3: [what] (depends on Phase 2)
```

## Instructions
1. Read the admin dashboard components at `src/components/admin/dashboard/`
2. Read the existing admin pages and their data fetching
3. Read `src/lib/ai-company/orchestrator.ts` and `event-bus.ts`
4. Read `src/lib/arena/auth.ts` and `src/lib/admin-sessions.ts`
5. Wait for @auditor's inventory for completeness
6. Coordinate with @architect on routing and layout decisions
7. When done, mark task #4 completed and send plan to team-lead and @architect
