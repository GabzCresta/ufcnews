# Arquitetura do Dashboard SaaS Unificado - crenas.site

> Documento final de arquitetura para consolidar todas as ferramentas internas do UFC News Hub em um dashboard SaaS coerente sob o dominio crenas.site.
> Incorpora: inventario do auditor, frameworks Nick Saraev, achados do data-engineer.

---

## 1. ROUTING ARCHITECTURE

### Public Site (crenas.site)

```
/ (public - qualquer visitante, free tier)
├── /                           → Homepage (news feed, proximo evento, enquete)
├── /noticias                   → Feed de noticias agregadas
├── /noticia/[slug]             → Noticia individual
├── /analises                   → Listagem de analises (hero + prediction free, full = Pro)
├── /analise/[slug]             → Analise individual (15 secoes, gated por tier)
├── /analise-completa/[slug]    → Analise completa (variante)
├── /analise/evento/[slug]      → Pagina de evento (EventAnalysisView)
├── /calendario                 → Calendario de eventos UFC
├── /lutadores                  → Database de lutadores
├── /lutadores/[id]             → Perfil individual do lutador
├── /lutas                      → Historico de lutas
├── /backstage                  → Noticias de bastidores
├── /arena                      → Gamificacao (auth propria via fingerprint)
│   ├── /arena/evento/[id]      → Evento Arena (picks, chat, leaderboard)
│   └── /arena/perfil/[id]      → Perfil de usuario Arena
├── /enterprise                 → Landing page B2B (R$149/mo tier)
├── /recap/[slug]               → Recap de eventos
├── /pricing                    → Pagina de precos (Free/Pro/Pro+/Enterprise)
└── /login                      → Admin login (redirect to /dashboard)
```

### Admin Dashboard (crenas.site/dashboard)

**Principio Nick Saraev: "Show deliverables, not tools."**
O dashboard mostra o STATUS DAS ENTREGAS da semana, nao uma lista de ferramentas.

```
/dashboard (admin-only, HMAC auth via middleware)
├── /dashboard                      → Deliverables View (proximo evento, pipeline status,
│                                     analysis cards verde/amarelo/cinza, numeros da semana,
│                                     quick actions)
├── /dashboard/pipeline             → Pipeline de entregas (progress bar, nao 3D viz)
│                                     Tabs: Atual | Historico | Automacao
├── /dashboard/content              → Gestao de conteudo
│                                     Tabs: Analises | Noticias | Recaps | Creator Kit
├── /dashboard/clientes             → CRM de clientes (CRUD completo)
├── /dashboard/operations           → Operacoes consolidadas
│                                     Tabs: Card Monitor | Arena Admin | AI Company | Scrapers
├── /dashboard/analytics            → Analytics e custos
│                                     Tabs: Site | API Costs | Predictions Accuracy
└── /dashboard/settings             → Configuracoes
                                      Tabs: Cron Jobs | Deploy | Database | API Keys
```

**Reducao de 10 rotas para 6.** Seguindo Nick: "boring but effective" - Card Monitor, Arena Admin, AI Company e Scrapers viram tabs sob `/dashboard/operations` em vez de modulos separados.

### Migration Path (Current → Target)

| Current Route | Target Route | Strategy |
|---|---|---|
| `/admin` (DashboardShell) | `/dashboard` | Move route, redesign as deliverables view |
| `/admin?section=overview` | `/dashboard` | Deliverables-first overview |
| `/admin?section=ai-company` | `/dashboard/operations` (tab AI Company) | Demote from module to tab |
| `/admin?section=clientes` | `/dashboard/clientes` | Keep as dedicated route |
| `/admin?section=card-monitor` | `/dashboard/operations` (tab Card Monitor) | Demote from module to tab |
| `/admin?section=pipeline` | `/dashboard/pipeline` | Elevate - this is core |
| `/admin?section=site-vercel` | `/dashboard/settings` | Rename and expand |
| `/admin?section=landing-page` | Remove | Static info, not needed as module |
| `/admin/analises` | `/dashboard/content` (tab Analises) | Merge into content |
| `/admin/card-monitor` | `/dashboard/operations` (tab Card Monitor) | Remove duplicate page |
| `/[locale]/*` | `/*` | Flatten locale wrapper |

**Key changes from v1 draft:**
- Query-param routing → file-based routes (better UX, history, deep links)
- 10 modules → 6 routes with tabs (Nick: consolidate operations)
- Overview shows deliverables status, not tool metrics
- Pipeline elevated to primary module (it IS the core product)

---

## 2. AUTH ARCHITECTURE

### Current State

- **Admin auth**: HMAC-signed tokens (`timestamp.hmac`) with 8h TTL in `admin-sessions.ts`
- **Token storage**: `sessionStorage` + cookie (`admin_token`, maxAge 8h)
- **Validation**: Stateless - pure HMAC computation, no server-side sessions
- **Arena auth**: Separate fingerprint-based system in `lib/arena/auth.ts`
- **Risk**: Default password `ufc-admin-2024` if `ADMIN_PASSWORD` not set

### Target Architecture

**Keep HMAC token auth** - it works well for a 2-user system (owner + partner). No need for NextAuth/Lucia complexity.

**Enhancements:**

1. **Middleware-based route protection** - Move auth check to Next.js middleware for `/dashboard/*`
2. **Role field in token** - Encode `role: 'admin' | 'partner'` in HMAC payload
3. **Force password change** - Block default password on first deploy
4. **Cookie-only auth** - Drop sessionStorage, use `httpOnly` cookie

```typescript
// Target: src/middleware.ts
import { NextResponse, type NextRequest } from 'next/server';
import { validateToken } from '@/lib/admin-sessions';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('admin_token')?.value;
    if (!token || !validateToken(token)) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
```

### Role-Based Access

| Role | Dashboard Access | Write Access | AI Company | Monetization |
|---|---|---|---|---|
| `admin` (owner) | Full | Full | CEO prompt, approvals | Manage tiers |
| `partner` | Full read | Content + clientes | View-only | View metrics |
| Public (free) | None | None | None | Read free content |
| Pro subscriber | None | None | None | Read all analyses |

### Auth Coexistence

- **Admin auth** → `/dashboard/*` via middleware + httpOnly cookie
- **Arena auth** → `/arena/*` via fingerprint + `useArenaAuth` hook
- **Subscriber auth** → Future: Stripe customer portal (not in v1)
- No overlap - completely separate auth flows

---

## 3. DASHBOARD LAYOUT

### Deliverables-First Design (Nick Saraev)

The dashboard overview is NOT a tool launcher. It shows:

1. **Next Event Hero** - "UFC 326 - 4 de Abril, 2026" with countdown, fight count, pipeline %
2. **Analysis Status Grid** - Each fight as a card: Green (published), Yellow (in progress), Gray (pending)
3. **This Week's Numbers** - Analyses published, page views, API cost, Creator Kit downloads
4. **Quick Actions** - "Run Pipeline", "View Latest Event", "Export Creator Kit", "Check Card"
5. **Pipeline Progress Bar** - Simple horizontal bar (NOT 3D Pipeline Viz)

### Shell Architecture

```
┌─────────────────────────────────────────────────────┐
│ Sidebar (fixed, collapsible 56px↔224px)             │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Logo: CRENAS.SITE                               │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ [LayoutDashboard] Entregas        ← PRIMARY     │ │
│ │ [GitBranch]       Pipeline        ← CORE        │ │
│ │ [FileText]        Conteudo                      │ │
│ │ [Users]           Clientes                      │ │
│ │ [Wrench]          Operacoes       ← CONSOLIDATED│ │
│ │ [BarChart3]       Analytics                     │ │
│ │ [Settings]        Settings                      │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ ── Site Publico ──                              │ │
│ │ [ExternalLink] crenas.site                      │ │
│ │ [ExternalLink] Arena                            │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ [ChevronLeft] Recolher                          │ │
│ │ [LogOut] Sair                                   │ │
│ └─────────────────────────────────────────────────┘ │
│                                                     │
│ ┌─────────────────────────────────────────────────┐ │
│ │ TopBar (sticky)                                 │ │
│ │ [Icon + Title]     [Role Badge] [Notifications] │ │
│ ├─────────────────────────────────────────────────┤ │
│ │                                                 │ │
│ │   Main Content Area (p-6)                       │ │
│ │   Tab bar when applicable                       │ │
│ │   Content cards with neu-card styling           │ │
│ │                                                 │ │
│ └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

### Layout Implementation

```
src/app/dashboard/
├── layout.tsx              → Server Component: sidebar + topbar shell
├── page.tsx                → Deliverables overview (Server + client islands)
├── pipeline/
│   └── page.tsx            → Pipeline tracking (progress bar, history)
├── content/
│   └── page.tsx            → Content management (tabbed: analises/noticias/recaps)
├── clientes/
│   └── page.tsx            → Client CRM
├── operations/
│   └── page.tsx            → Consolidated ops (tabbed: card-monitor/arena/ai-company/scrapers)
├── analytics/
│   └── page.tsx            → Analytics + costs
└── settings/
    └── page.tsx            → System config
```

### Design System

Keep existing neumorphism dark-mode:
- Background: `#0a0a0f` (dark.bg)
- Cards: `neu-card`, `neu-button`, `neu-inset`, `neu-card-hover`
- Primary: `ufc-red` (#D20A0A)
- Accent: `ufc-gold`
- Fonts: Bebas Neue (headings) + Inter (body)
- Animations: `pulse-red`, `slide-up`, `fade-in`, `shimmer`

**Changes:**
- Logo: "UFC HUB" → "CRENAS" with `.site` subdued
- Sidebar: 7 items (down from 10) - cleaner, faster navigation
- Overview: deliverables-centric, not tool-centric

---

## 4. MODULE INTEGRATION PLAN

### 4.1 Deliverables Overview (`/dashboard`)

**Principle**: Show the STATUS OF THIS WEEK'S DELIVERABLES, not a tools dashboard.

**Reuse**: `OverviewSection.tsx` as base, but redesign the card layout.

**New design:**
```
┌─────────────────────────────────────────────┐
│ PROXIMO EVENTO: UFC 326 - 4 de Abril        │
│ T-Mobile Arena, Las Vegas  │  em 6 dias      │
│ 14 lutas │ Pipeline: ████████░░ 80%          │
└─────────────────────────────────────────────┘

┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│ Analises │ │ Views    │ │ Custo AI │ │ Clientes │
│    12    │ │   3.2K   │ │  R$18    │ │  4 atv   │
│ publicadas│ │ semana  │ │  semana  │ │          │
└──────────┘ └──────────┘ └──────────┘ └──────────┘

ANALYSIS STATUS GRID:
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│ ● GREEN │ │ ● GREEN │ │ ● YELLOW│ │ ● GRAY  │ │ ● GRAY  │
│ Pereira │ │ Adesanya│ │ Evloev  │ │ Garry   │ │ Moreno  │
│ vs Hill │ │ vs Du P.│ │ vs Holl.│ │ vs Page │ │ vs Kai  │
│ Publicado│ │Publicado│ │Gerando..│ │ Pendente│ │ Pendente│
└─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘

QUICK ACTIONS:
[ Run Pipeline ] [ View Latest Event ] [ Export Creator Kit ] [ Check Card ]
```

**Data Sources**: `/api/admin/overview` (existing), new `/api/admin/deliverables` endpoint
**Real-time**: SSE for pipeline progress updates during generation

### 4.2 Pipeline Module (`/dashboard/pipeline`)

**Principle**: This IS the core product. Elevate from localStorage checklist to proper pipeline tracking.

**Tabs:**
- **Atual**: Current week pipeline status with step-by-step progress
- **Historico**: Past pipeline runs with COGS (cost, time, manual interventions)
- **Automacao**: Configure automated Tuesday trigger, human gates

**Reuse**: `PipelineSection.tsx` for the checklist UI pattern

**Critical change (Data Engineer input)**: Replace localStorage with `pipeline_execucoes` table:

```sql
CREATE TABLE pipeline_execucoes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  evento_id UUID REFERENCES eventos(id),
  evento_nome VARCHAR(255) NOT NULL,
  semana_inicio DATE NOT NULL,
  status VARCHAR(20) DEFAULT 'pendente',  -- pendente, rodando, concluido, erro
  step_atual VARCHAR(50),
  steps_completos JSONB DEFAULT '[]',
  custo_total_usd DECIMAL(8,4) DEFAULT 0,
  tempo_total_min INT DEFAULT 0,
  intervencoes_manuais INT DEFAULT 0,
  iniciado_em TIMESTAMPTZ,
  concluido_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(evento_id, semana_inicio)
);

CREATE INDEX idx_pipeline_exec_semana ON pipeline_execucoes(semana_inicio DESC);
CREATE INDEX idx_pipeline_exec_status ON pipeline_execucoes(status);
```

**Data Sources**: New `/api/admin/pipeline` endpoint (CRUD + trigger)
**Real-time**: SSE during active pipeline execution

### 4.3 Content Module (`/dashboard/content`)

**Tabs:** Analises | Noticias | Recaps | Creator Kit

**Reuse**: Parts of `/admin/analises/page.tsx` (generate, migrate)

**Data Engineer input**: Analyses are currently static files generated by Claude Code agents, NOT stored in DB `analises` table for the full 15-section data. The `analises` table has `full_analysis JSON` column but it is populated inconsistently.

**Decision**: Keep static file generation for now (it works with Vercel deployment). Add a lightweight index in the `analises` table that tracks: slug, status (draft/published), generated_at, file_exists. Content module reads this index for the status grid.

**New components:**
- `AnalysisStatusGrid` - reuse in overview and content tab
- `NoticiasManager` - list/search, trigger RSS sync
- `CreatorKitExporter` - bulk export Creator Kit content

**Data Sources**: `/api/analises`, `/api/noticias`, `/api/admin/migrate-analises`

### 4.4 Clientes Module (`/dashboard/clientes`)

**Reuse**: Complete - `ClientesSection.tsx` + `ClienteDetailPanel` + `ClienteFormModal` + `ClienteChecklistWeek`

**No changes needed.** This module is fully functional with CRUD, search, detail panel, and weekly checklist.

**Data Sources**: `/api/admin/clientes`, `/api/admin/clientes/[id]`

### 4.5 Operations Module (`/dashboard/operations`)

**Principle (Nick)**: "Boring but effective" - consolidate operational tools into tabs, not separate modules.

**Tabs:** Card Monitor | Arena Admin | AI Company | Scrapers

**Tab: Card Monitor**
- **Reuse**: `CardMonitorSection.tsx` (complete, no changes)
- **Data**: `/api/admin/card-monitor`, `/api/cron/card-monitor`

**Tab: Arena Admin**
- **New components**: `ArenaOverview`, `ArenaUserManager`, `ArenaEventManager`
- **Reuse**: Arena lib functions from `lib/arena/` (auth, pontuacao, format)
- **Data**: `/api/arena/*` endpoints, new `/api/admin/arena/*` endpoints
- **Data Engineer input**: Arena tables (usuarios_arena, previsoes, atividades, amizades, chat_evento) are accessed via raw SQL. Keep raw SQL for read queries, use Prisma for admin writes.

**Tab: AI Company**
- **Reuse**: `AICompanyContent` from `AdminDashboard.tsx` (entire component tree)
- **Nick input**: 14-agent system is over-engineered for 1x/week content. Keep it functional but don't invest more complexity. The CEO prompt + approval flow is the useful part.
- **Simplification**: In the tab context, show a condensed view:
  - Agent status grid (healthy/error counts)
  - CEO prompt input
  - Approval queue
  - Link to "expanded view" that renders full `AICompanyContent`
- **Data**: `/api/company/agents`, SSE event stream

**Tab: Scrapers**
- **New components**: `ScraperStatusPanel`, `ManualScrapeButtons`
- **Data**: `/api/scraper-stats`, `/api/cron`, `/api/sync`, `/api/sync-eventos`

### 4.6 Analytics Module (`/dashboard/analytics`)

**Tabs:** Site Metrics | API Costs | Prediction Accuracy

**New components:**
- `SiteMetrics` - page views, top content, traffic sources
- `CostBreakdown` - expand existing `CostTracker` with historical per-event costs
- `PredictionAccuracy` - track prediction hit rate over time (Nick: builds credibility for monetization)

**Data Engineer input**: Cost data is in `agent_cost_logs` (Prisma). Site metrics need new tracking. Prediction accuracy can be computed from `previsoes` table + `lutas.resultado`.

**Data Sources**: `/api/company/agents` (cost), `/api/scraper-stats`, new `/api/admin/analytics`

### 4.7 Settings Module (`/dashboard/settings`)

**Tabs:** Cron Jobs | Deploy | Database | API Keys

**Reuse**: `SiteVercelSection.tsx` (cron job list, deploy links)

**New:**
- `DatabasePanel` - show shadow tables status (Data Engineer: 9 tables outside Prisma that need monitoring), connection pool stats
- `CronJobTrigger` - manual trigger buttons for each cron job
- `APIKeyStatus` - masked display of configured keys with validation status

**Data Sources**: Static config + new `/api/admin/settings`

---

## 5. TECH DECISIONS (March 2026)

### Server Components vs Client Components

| Route | Rendering | Rationale |
|---|---|---|
| `dashboard/layout.tsx` | **Server** | Auth check via middleware, static shell |
| `dashboard/page.tsx` | **Server** + Suspense islands | KPIs fetched server-side, analysis grid is client |
| `dashboard/pipeline/page.tsx` | **Client** | Real-time pipeline updates, interactive controls |
| `dashboard/content/page.tsx` | **Mixed** | List server-rendered, actions client |
| `dashboard/clientes/page.tsx` | **Client** | CRUD, search, detail panel |
| `dashboard/operations/page.tsx` | **Client** | Tabs with heavy interactivity (AI Company SSE) |
| `dashboard/analytics/page.tsx` | **Server** + client charts | Data fetched server-side, charts client |
| `dashboard/settings/page.tsx` | **Server** + client triggers | Config display server, trigger buttons client |

### Streaming with Suspense (Overview Page)

```tsx
// dashboard/page.tsx
export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<EventHeroSkeleton />}>
        <NextEventHero />          {/* Server-fetched, biggest visual */}
      </Suspense>
      <Suspense fallback={<KPISkeletons />}>
        <WeeklyNumbers />          {/* Server-fetched KPIs */}
      </Suspense>
      <AnalysisStatusGrid />       {/* Client - needs real-time updates */}
      <QuickActions />             {/* Static, instant render */}
    </div>
  );
}
```

### Data Layer Decisions (Data Engineer Input)

**Problem**: Dual DB access (raw SQL `db.ts` + Prisma `prisma.ts`) causes inconsistency. 9 shadow tables exist outside Prisma schema.

**Decision**: Pragmatic consolidation, NOT full rewrite.

1. **Add shadow tables to Prisma schema** (read-only models) so they are visible in the schema. Do NOT migrate existing raw SQL queries - just add the models for discoverability.

2. **New dashboard tables use Prisma** exclusively:
   - `pipeline_execucoes` (new)
   - `dashboard_metrics` (new, for cached analytics)

3. **Keep raw SQL for existing high-performance queries** (noticias, lutadores, eventos). These are battle-tested and performant.

4. **Standardize new admin API routes** on Prisma - simpler for CRUD operations.

### Pipeline Viz Decision (Nick Input)

**Drop 3D Pipeline Viz (Three.js).** Replace with:
- Simple horizontal progress bar on dashboard overview
- Step-by-step checklist in `/dashboard/pipeline`
- Pipeline history table with per-event COGS

The Three.js visualization is impressive engineering but adds complexity without user value for a 2-person admin team.

### AI Company Simplification (Nick Input)

**Keep the 14-agent system functional** but simplify the dashboard presentation:
- Default view: condensed status grid + CEO prompt + approval queue
- "Expand" button reveals full `AICompanyContent` (org chart, mission console, etc.)
- The full system runs 1x/week for analysis generation - it does not need a dedicated module

### Server Actions

Use Server Actions for new CRUD operations:
```typescript
// New mutations via Server Actions:
// - Pipeline: trigger run, mark step complete
// - Content: trigger RSS sync, generate analysis
// - Settings: trigger cron job

// Keep authFetch for:
// - AI Company (SSE streaming, complex state)
// - Card Monitor (polling pattern)
// - Clientes (existing, working, no need to rewrite)
```

### Data Fetching Strategy

| Pattern | When to Use |
|---|---|
| Server Component `fetch()` | Initial page data (overview KPIs, content lists) |
| `authFetch` (client) | Existing interactive flows (AI Company, CRM) |
| SWR with `authFetch` | Polling data (agent status, pipeline progress) |
| SSE | Real-time streams (AI Company mission, pipeline execution) |
| Server Actions | New mutations (pipeline trigger, cron trigger) |

---

## 6. DEPLOY STRATEGY

### Domain Configuration

- **Primary domain**: `crenas.site`
- **Redirect**: `ufc-news.vercel.app` → `crenas.site`
- **Vercel**: Add `crenas.site` + `www.crenas.site` as custom domains

### Environment Variables

**Required** (no changes):
- `DATABASE_URL` - PostgreSQL connection string
- `ANTHROPIC_API_KEY` - Claude API key
- `ADMIN_PASSWORD` - MUST be changed from default

**New:**
- `NEXT_PUBLIC_SITE_URL=https://crenas.site` - Canonical URLs, OG tags
- `ADMIN_ROLES={"password1":"admin","password2":"partner"}` - Multi-user role mapping
- `STRIPE_SECRET_KEY` - For monetization tiers (Phase 2)
- `STRIPE_WEBHOOK_SECRET` - Stripe webhooks

### Database Strategy (Data Engineer Input)

**Keep PostgreSQL.** Address the inconsistencies:

1. **New table: `pipeline_execucoes`** - Replace localStorage pipeline state
2. **New table: `dashboard_metrics`** - Cached analytics for dashboard overview
3. **Add 9 shadow tables to Prisma schema** as read-only models for discoverability
4. **Keep dual DB access** - Raw SQL for existing queries, Prisma for new admin features
5. **Index the `analises.full_analysis` column** - Currently inconsistently populated. Add a migration to backfill status tracking.

```sql
-- Minimal new tables for dashboard
CREATE TABLE pipeline_execucoes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  evento_id UUID REFERENCES eventos(id),
  evento_nome VARCHAR(255) NOT NULL,
  semana_inicio DATE NOT NULL,
  status VARCHAR(20) DEFAULT 'pendente',
  step_atual VARCHAR(50),
  steps_completos JSONB DEFAULT '[]',
  custo_total_usd DECIMAL(8,4) DEFAULT 0,
  tempo_total_min INT DEFAULT 0,
  intervencoes_manuais INT DEFAULT 0,
  iniciado_em TIMESTAMPTZ,
  concluido_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(evento_id, semana_inicio)
);

CREATE TABLE dashboard_metrics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  metric_type VARCHAR(50) NOT NULL,
  metric_date DATE NOT NULL,
  value JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(metric_type, metric_date)
);
```

### Edge vs Node Runtime

| Route | Runtime | Rationale |
|---|---|---|
| Middleware (auth) | **Edge** | Fast, simple HMAC validation |
| Dashboard pages | **Node** | Full DB access needed |
| API routes | **Node** | DB queries, Prisma |
| Public static pages | **Static/ISR** | Analyses, event pages |

### Build & Deploy

No changes:
```bash
npm run build     # Next.js 15 production build
npm run lint      # ESLint check
npx tsc --noEmit  # TypeScript check
```

Vercel auto-deploys on push to main.

---

## 7. MIGRATION PLAN (Nick's 90-Day Sprint)

### Month 1: Productize the Core (Weeks 1-4)

**Week 1: Route Structure**
1. Create `src/app/dashboard/layout.tsx` with middleware auth + shell
2. Create deliverables-first overview at `dashboard/page.tsx`
3. Create 6 sub-routes importing existing section components
4. Update sidebar to use `<Link>` with proper routes
5. Add redirect `/admin` → `/dashboard`

**Week 2: Auth + Data Layer**
1. Add Next.js middleware for `/dashboard/*` route protection
2. Add role encoding to HMAC tokens
3. Switch to httpOnly cookies
4. Create `pipeline_execucoes` table (replace localStorage)
5. Create `dashboard_metrics` table

**Week 3: Consolidate Operations**
1. Build Operations page with 4 tabs (Card Monitor, Arena Admin, AI Company, Scrapers)
2. Build condensed AI Company view (status grid + prompt + approvals)
3. Move CardMonitorSection into operations tab
4. Build minimal Arena Admin tab
5. Build minimal Scrapers tab

**Week 4: Content + Pipeline**
1. Build Content module with tabbed interface
2. Build Analysis Status Grid component (reuse in overview + content)
3. Upgrade Pipeline module from localStorage to DB-backed
4. Implement pipeline progress bar on overview
5. Track COGS per pipeline run

### Month 2: Monetize (Weeks 5-8)

1. Configure crenas.site domain in Vercel
2. Update branding: "UFC HUB" → "CRENAS"
3. Implement content gating (Free vs Pro)
4. Stripe integration for Pro (R$29) / Pro+ (R$49) / Enterprise (R$149)
5. Build `/pricing` page
6. Email delivery of analysis PDFs
7. Creator Kit as standalone downloadable
8. Track prediction accuracy for credibility

### Month 3: Scale (Weeks 9-12)

1. Build Analytics module (site metrics, costs, prediction accuracy)
2. API tier for enterprise clients
3. Auto-posting to social media from Creator Kit
4. Historical accuracy dashboard
5. Cleanup: remove old `/admin` routes, duplicate components, query-param navigation
6. Add shadow tables to Prisma schema for discoverability
7. Performance optimization: ISR for public pages, caching for API routes

---

## 8. COMPONENT REUSE SUMMARY

### Direct Reuse (No Changes)

| Component | Current Location | Target |
|---|---|---|
| `CardMonitorSection` | `sections/CardMonitorSection.tsx` | Operations tab |
| `ClientesSection` + related | `sections/ClientesSection.tsx` | Clientes route |
| `PipelineSection` | `sections/PipelineSection.tsx` | Pipeline route (enhance later) |
| `DashboardTopBar` | `dashboard/DashboardTopBar.tsx` | Shell |
| All AI Company sub-components | `components/admin/*.tsx` | Operations tab (expanded view) |

### Modify & Reuse

| Component | Changes |
|---|---|
| `DashboardSidebar` | Reduce to 7 items, use `<Link>`, rename logo |
| `OverviewSection` | Redesign as deliverables view with analysis status grid |
| `AICompanyContent` | Add condensed view mode for tab context |
| `SiteVercelSection` | Expand into Settings with tabs |
| `AdminAuthContext` | Simplify - middleware handles auth, keep `authFetch` |

### New Components

| Component | Route | Priority |
|---|---|---|
| `DeliverablesDashboard` | Overview | P0 - Week 1 |
| `AnalysisStatusGrid` | Overview + Content | P0 - Week 1 |
| `PipelineProgressBar` | Overview | P0 - Week 1 |
| `OperationsTabs` | Operations | P1 - Week 3 |
| `ArenaAdminPanel` | Operations tab | P1 - Week 3 |
| `ScraperStatusPanel` | Operations tab | P1 - Week 3 |
| `AICompanyCondensed` | Operations tab | P1 - Week 3 |
| `ContentManager` | Content | P1 - Week 4 |
| `CreatorKitExporter` | Content tab | P2 - Month 2 |
| `AnalyticsDashboard` | Analytics | P2 - Month 3 |
| `PredictionTracker` | Analytics tab | P2 - Month 3 |

---

## 9. KEY ARCHITECTURE DECISIONS

1. **Deliverables-first dashboard** (Nick) - Overview shows "what shipped this week", not "what tools exist". Analysis status grid, pipeline progress bar, weekly numbers.

2. **6 routes with tabs, not 10 separate modules** (Nick) - Consolidate Card Monitor, Arena Admin, AI Company, Scrapers into Operations tabs. Less navigation, less complexity.

3. **No 3D Pipeline Viz** (Nick) - Replace Three.js visualization with simple progress bar. Boring but effective.

4. **AI Company stays functional, presentation simplified** (Nick) - Keep 14-agent system running but show condensed view by default. Full view available on demand.

5. **File-based routing over query params** - `/dashboard/pipeline` instead of `/admin?section=pipeline`. Better UX, history, deep links.

6. **Keep HMAC auth with middleware** - For 2 users, HMAC + Edge middleware is simpler and faster than auth frameworks.

7. **DB-backed pipeline state** (Data Engineer) - Replace localStorage with `pipeline_execucoes` table. Track COGS per event.

8. **Pragmatic dual DB** (Data Engineer) - Keep raw SQL for existing queries, use Prisma for new dashboard features. Add shadow tables to Prisma schema for discoverability only.

9. **90-day sprint to monetization** (Nick) - Month 1: productize. Month 2: monetize (Stripe, content gating). Month 3: scale (analytics, API tier, automation).

10. **Single deployment** - Everything stays in one Next.js 15 app on Vercel. No micro-frontends.

---

## 10. MONETIZATION ARCHITECTURE (Nick Saraev)

### Tier Structure

| Tier | Price | Access |
|---|---|---|
| **Free** | R$0 | Event pages, hero sections, 1-2 sample analyses, news feed |
| **Pro (Analista)** | R$29/mo | Full 15-section analyses, Creator Kit, Betting Radar |
| **Pro+ (Apostador)** | R$49/mo | Above + early access (72h), line movement, accuracy tracking |
| **Enterprise** | R$149/mo | API access, white-label Creator Kit, bulk export, webhooks |

### Content Gating Strategy

- Public pages render hero section + prediction summary for all fights
- Sections 2-15 gated behind Pro tier (blur + CTA overlay)
- Creator Kit (Section 14) and Betting Radar (Section 15) are high-value Pro exclusives
- Enterprise gets JSON API endpoints for all analysis data

### Payment Integration

- **Stripe Checkout** for subscription management
- **Stripe Customer Portal** for self-service billing
- **Webhook** at `/api/stripe/webhook` for subscription lifecycle events
- **User model extension**: Add `subscription_tier` and `stripe_customer_id` to a new `subscribers` table

This is a Month 2 concern - not needed for v1 dashboard launch.
