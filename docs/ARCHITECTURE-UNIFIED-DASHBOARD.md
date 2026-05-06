# Arquitetura Unificada do Dashboard SaaS - crenas.site

> Documento de arquitetura para unificar todas as tools (pipeline-viz, card-monitor, arena, ai-company) em um dashboard SaaS coeso, servido via crenas.site.

---

## 1. Estado Atual (As-Is)

### Routing
```
/ (root layout)
  /[locale]/          # Site publico (pt, en, fr, es) - next-intl
    /noticias         # Feed de noticias
    /lutadores        # Perfis de lutadores
    /lutas            # Resultados de lutas
    /analises         # Lista de analises
    /analise/[slug]   # Analise individual
    /calendario       # Calendario de eventos
    /backstage        # Noticias de bastidores
    /arena/           # Sistema de predicoes (auth propria)
    /enterprise       # Landing page enterprise (48K+ linhas)
    /houston          # Painel Houston
    /scraper-live     # Scraper ao vivo
  /admin/             # Dashboard admin (fora do i18n)
    /analises         # CRUD analises admin
    /card-monitor     # Monitor de cards
  /api/               # ~69 endpoints
    /admin/           # 22 sub-pastas
    /company/         # AI Company (15 sub-pastas)
    /arena/           # Arena (11 sub-pastas)
    /noticias, /eventos, /lutadores, /lutas...
  /showcase/          # Showcase pages
  /recap/             # Recaps
```

### Problemas Identificados
1. **Dashboard fragmentado**: `/admin` tem sidebar com 7 secoes mas nao inclui Arena admin, Scraper Live, Houston
2. **Auth duplicada**: Admin usa HMAC tokens (`admin-sessions.ts`), Arena usa sistema separado (`useArenaAuth`)
3. **Enterprise page monolitica**: 48K+ linhas em um unico `page.tsx`
4. **Rotas publicas misturadas com admin**: `/arena`, `/houston`, `/scraper-live` sao admin-like mas vivem dentro do `[locale]`
5. **Sem separacao clara publica/interna**: Mesma UI serve visitantes e donos do negocio

---

## 2. Arquitetura Proposta (To-Be)

### 2.1 Routing Strategy

```
crenas.site/                        # Dominio custom
  /[locale]/                        # PUBLICO - site aberto
    /                               # Home (noticias, proximos eventos)
    /noticias                       # Feed noticias
    /noticia/[slug]                 # Noticia individual
    /lutadores                      # Perfil de lutadores
    /lutas                          # Resultados
    /analises                       # Analises pre-fight
    /analise/[slug]                 # Analise individual
    /analise/evento/[slug]          # Evento completo
    /calendario                     # Calendario eventos
    /backstage                      # Bastidores
    /arena/                         # Predicoes (auth propria - usuarios)
      /login
      /registro
      /dashboard
      /ligas/
      /perfil/
      /live
    /recap/[slug]                   # Recaps pos-evento

  /admin/                           # ADMIN-ONLY - dashboard unificado
    /                               # Overview (KPIs, proximos eventos, health)
    /?section=overview              # Manter compatibilidade URL atual
    /?section=clientes
    /?section=card-monitor
    /?section=pipeline
    /?section=ai-company
    /?section=landing-page
    /?section=site-vercel
    /?section=arena-admin           # NOVO - gestao da Arena
    /?section=analytics             # NOVO - analytics unificado
    /?section=scraper               # NOVO - scraper monitor
    /?section=content               # NOVO - gestao de conteudo
```

### 2.2 Decisao: Query Params vs Nested Routes para Admin

**Manter query params** (`/admin?section=X`) porque:
- Ja esta implementado e funcionando (`DashboardShell.tsx` + `DashboardSidebar.tsx`)
- Dynamic imports por secao ja reduzem bundle
- Sidebar com collapse ja funciona
- Evita complexidade de nested layouts no admin
- Single SPA feel mantido

### 2.3 Auth System

```
CAMADA 1 - Publica (sem auth)
  /[locale]/* exceto /arena/*
  Qualquer visitante pode acessar

CAMADA 2 - Arena Users (auth leve)
  /[locale]/arena/*
  useArenaAuth hook - fingerprint + nome
  NÃO misturar com admin auth

CAMADA 3 - Admin (HMAC token)
  /admin/*
  /api/admin/*
  /api/company/*
  admin-sessions.ts - HMAC signed, 8h TTL
  Max 2 sessoes simultaneas
```

**Recomendacao**: Manter o sistema atual de HMAC tokens. Nao precisa de NextAuth/Clerk/etc para 2 usuarios. O sistema atual e stateless, sobrevive restarts e HMR, e funciona bem.

**Melhoria sugerida**: Adicionar middleware Next.js para proteger rotas `/admin` e `/api/admin` de forma centralizada:

```typescript
// middleware.ts (raiz do projeto)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin routes: verify token in cookie or header
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const token = request.cookies.get('admin-token')?.value
      || request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!token) {
      if (pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'Nao autorizado' }, { status: 401 });
      }
      // Admin pages still handle their own auth gate UI
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
```

---

## 3. Layout do Dashboard Unificado

### 3.1 Sidebar Expandida

```typescript
// Secoes atuais (manter)
{ id: 'overview',      label: 'Overview',        icon: LayoutDashboard }
{ id: 'clientes',      label: 'Clientes',        icon: Users }
{ id: 'card-monitor',  label: 'Card Monitor',    icon: Shield }
{ id: 'pipeline',      label: 'Pipeline',        icon: GitBranch }
{ id: 'ai-company',    label: 'AI Company',      icon: Bot }
{ id: 'landing-page',  label: 'Landing Page',    icon: Earth }
{ id: 'site-vercel',   label: 'Site / Vercel',   icon: Server }

// Secoes novas
{ id: 'content',       label: 'Conteudo',        icon: FileText }   // Gestao noticias/analises
{ id: 'arena-admin',   label: 'Arena',           icon: Trophy }     // Users, ligas, scores
{ id: 'analytics',     label: 'Analytics',       icon: BarChart3 }  // Metricas unificadas
{ id: 'scraper',       label: 'Scraper',         icon: Rss }        // Scraper monitor
```

### 3.2 Agrupamento na Sidebar

```
--- NEGOCIO ---
  Overview
  Clientes
  Pipeline
  Analytics

--- CONTEUDO ---
  Conteudo (noticias, analises, lutadores)
  Card Monitor
  Scraper

--- SISTEMA ---
  AI Company
  Arena
  Site / Vercel
  Landing Page
```

### 3.3 Overview Section (Reformulado)

O Overview deve ser um "war room" com:

```
+------------------------------------------+
| KPIs em cards                            |
| [Visitas 24h] [Analises] [Eventos] [AI$] |
+------------------------------------------+
| Proximos Eventos    | Activity Feed      |
| - UFC 326 (5 dias)  | (SSE real-time)    |
| - FN Mar 2026       | 09:32 Agent X...   |
+---------------------+--------------------+
| Card Monitor Status | AI Company Health  |
| - Lutas OK/Warning  | - Agents active    |
| - Changes detected  | - Cost today       |
+---------------------+--------------------+
```

Implementar com CSS Grid:
```css
.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 1.5rem;
}
```

---

## 4. Modularizacao das Tools

### 4.1 Como Cada Tool Vira Modulo

| Tool Atual | Modulo Dashboard | O Que Muda |
|-----------|-----------------|------------|
| `pipeline-viz` (Clientes) | `sections/ClientesSection.tsx` + `sections/PipelineSection.tsx` | Ja esta integrado, manter |
| `card-monitor` (admin) | `sections/CardMonitorSection.tsx` | Ja esta integrado, manter |
| `arena` (publico) | `sections/ArenaAdminSection.tsx` (NOVO) | Admin view: users, ligas, scores, moderacao |
| `ai-company` | `sections/AICompanySection.tsx` | Ja esta integrado. Adicionar cost tracker e performance view |
| `scraper-live` | `sections/ScraperSection.tsx` (NOVO) | Mover de `/[locale]/scraper-live` para modulo admin |
| `enterprise` | `sections/LandingPageSection.tsx` | Ja esta integrado como preview/editor |
| `site-vercel` | `sections/SiteVercelSection.tsx` | Ja esta integrado |
| `houston` | Absorver no Overview | Mover metricas relevantes para Overview |

### 4.2 Novos Modulos a Criar

**ArenaAdminSection** (`sections/ArenaAdminSection.tsx`)
```
- Lista usuarios_arena com filtros (nivel, pontos, status)
- Gestao de ligas
- Moderacao de picks/comentarios
- Estatisticas: usuarios ativos, picks por evento, accuracy media
- Acoes: ban user, reset pontos, criar liga
```

**ScraperSection** (`sections/ScraperSection.tsx`)
```
- Status do scraper (ultimo run, sucesso/falha)
- Logs recentes
- Run manual (trigger /api/sync)
- Card monitor integrado (mudancas detectadas)
- RSS feed health
```

**ContentSection** (`sections/ContentSection.tsx`)
```
- CRUD noticias (listar, criar, editar, deletar)
- Gestao analises (status, republish)
- Gestao lutadores (atualizar records, fotos)
- Bulk actions
```

**AnalyticsSection** (`sections/AnalyticsSection.tsx`)
```
- Page views (se tiver analytics)
- Top conteudos
- Arena engagement
- AI Company costs (diario/semanal/mensal)
- Health checks consolidados
```

---

## 5. Tecnicas Modernas (Marco 2026)

### 5.1 Server Components

**Onde usar Server Components:**
- Layout raiz (`app/layout.tsx`) - ja e SC
- Layout do locale (`app/[locale]/layout.tsx`) - ja e SC
- Pages publicas que sao read-only (noticias, analises)
- API de dados estaticos

**Onde manter Client Components:**
- Dashboard inteiro (`/admin`) - interatividade pesada, state, auth
- Arena - interatividade em tempo real
- Qualquer componente com `useState`, `useEffect`, event handlers

**Regra pratica**: O admin dashboard e 100% client-side por natureza (auth, polling, SSE, interacao). Nao forcar Server Components aqui.

### 5.2 Streaming SSR

Para o site publico:
```typescript
// app/[locale]/noticias/page.tsx
import { Suspense } from 'react';

export default function NoticiasPage() {
  return (
    <>
      <h1>Noticias</h1>
      <Suspense fallback={<NoticiasSkeletons />}>
        <NoticiasListServer />
      </Suspense>
    </>
  );
}

async function NoticiasListServer() {
  const noticias = await query<Noticia>(
    'SELECT * FROM noticias WHERE status = $1 ORDER BY publicado_em DESC LIMIT 20',
    ['publicado']
  );
  return <NoticiasList noticias={noticias} />;
}
```

### 5.3 Parallel Routes (Next.js 15)

Usar para o Overview do dashboard, onde multiplos paineis carregam dados independentes:

```
app/admin/
  layout.tsx
  page.tsx
  @kpis/page.tsx          # Slot paralelo para KPIs
  @activity/page.tsx      # Slot paralelo para activity feed
  @events/page.tsx        # Slot paralelo para proximos eventos
```

**Porem**: como o admin ja usa dynamic imports por secao e e full client-side, Parallel Routes nao agrega muito valor aqui. Manter o padrao atual de dynamic imports e mais simples e ja funciona.

### 5.4 SWR com Revalidation

Ja esta no projeto. Padronizar:
```typescript
// Para dados que mudam frequentemente (activity feed, agent status)
const { data } = useSWR('/api/company/agents', fetcher, {
  refreshInterval: 3000,  // 3s quando ativo
});

// Para dados estaveis (overview KPIs)
const { data } = useSWR('/api/admin/overview', fetcher, {
  refreshInterval: 30000, // 30s
  revalidateOnFocus: true,
});
```

### 5.5 Partial Prerendering (PPR)

Next.js 15 suporta PPR experimental. Para crenas.site:
- **Site publico**: Habilitar PPR para pages que tem mix de estatico e dinamico
- **Admin**: Nao aplicavel (100% dinamico)

```javascript
// next.config.js
const nextConfig = {
  experimental: {
    ppr: true, // Partial Prerendering
  },
};
```

---

## 6. Deploy Strategy para crenas.site

### 6.1 Vercel + Custom Domain

```
1. Vercel Project: ufc-news-hub
2. Custom domain: crenas.site
   - crenas.site          -> Vercel (site publico)
   - admin.crenas.site    -> Redirecionar para crenas.site/admin (ou usar subdomain se preferir separacao)
3. Subdomain www: www.crenas.site -> redirect para crenas.site
```

### 6.2 Configuracao Vercel

```json
// vercel.json (atualizado)
{
  "crons": [
    { "path": "/api/cron", "schedule": "0 13,18,23 * * *" },
    { "path": "/api/arena/cron/scoring", "schedule": "*/1 * * * 6,0" },
    { "path": "/api/cron/card-monitor", "schedule": "0 22 * * 1-5" },
    { "path": "/api/arena/cron/pre-evento", "schedule": "0 */1 * * 5,6" },
    { "path": "/api/arena/cron/pos-evento", "schedule": "0 10 * * 0" },
    { "path": "/api/arena/cron/lembrete-picks", "schedule": "0 18 * * 3" },
    { "path": "/api/arena/cron/limpeza", "schedule": "0 3 * * 1" }
  ],
  "redirects": [
    { "source": "/enterprise", "destination": "/", "permanent": false }
  ]
}
```

### 6.3 Environment Variables (Vercel)

```
DATABASE_URL=postgresql://...
ANTHROPIC_API_KEY=sk-ant-...
ADMIN_PASSWORD=<senha-forte>   # TROCAR O DEFAULT!
CRON_SECRET=<secret>
NEXT_PUBLIC_SITE_URL=https://crenas.site
```

### 6.4 Cache Strategy

```
Paginas publicas:
  - Home: ISR 60s (revalidate: 60)
  - Noticias: ISR 120s
  - Analises: Static (regenerate on new deploy)
  - Calendario: ISR 300s
  - Lutadores: ISR 3600s

APIs publicas:
  - /api/noticias: Cache-Control: s-maxage=60, stale-while-revalidate=120
  - /api/eventos: Cache-Control: s-maxage=300
  - /api/lutadores: Cache-Control: s-maxage=3600

Admin/API admin:
  - Cache-Control: no-store (nunca cachear)
```

---

## 7. Mapa de Dependencias para Implementacao

### Fase 1: Consolidar Sidebar (Baixo risco, alto impacto)
1. Adicionar novas secoes ao `DashboardSidebar.tsx` (type `SectionId`, array `NAV_ITEMS`)
2. Criar section components stub (`ArenaAdminSection`, `ScraperSection`, `ContentSection`, `AnalyticsSection`)
3. Registrar no `DashboardShell.tsx` com dynamic imports
4. Adicionar agrupamento visual na sidebar

### Fase 2: Migrar Tools Soltas
1. Mover logica de `/[locale]/scraper-live` para `ScraperSection`
2. Mover logica de `/[locale]/houston` para `OverviewSection`
3. Criar `ArenaAdminSection` com dados de `/api/arena/*`
4. Criar `ContentSection` conectando com `/api/admin/*` existentes

### Fase 3: Unificar Overview
1. Redesenhar `OverviewSection` como war room (grid layout)
2. Integrar Activity Feed (SSE, ja tem componente `ActivityFeed.tsx`)
3. Integrar Cost Tracker (ja tem componente `CostTracker.tsx`)
4. Integrar dados do card-monitor e proximos eventos

### Fase 4: Deploy crenas.site
1. Configurar custom domain no Vercel
2. Atualizar CSP headers para crenas.site
3. Trocar ADMIN_PASSWORD default
4. Configurar redirects (www, enterprise -> /)
5. Testar cron jobs no dominio novo
6. Verificar next-intl com novo dominio

---

## 8. Riscos e Mitigacoes

| Risco | Impacto | Mitigacao |
|-------|---------|-----------|
| Enterprise page 48K linhas quebra build | Alto | Refatorar em componentes menores antes do merge |
| Auth bypass em novas secoes admin | Critico | Todas as secoes usam `authFetch` do `AdminAuthContext` |
| SSE connections acumulam no Vercel | Medio | Vercel Serverless tem timeout 60s; usar polling como fallback |
| Bundle size cresce com mais secoes | Baixo | Dynamic imports ja implementados; cada secao e chunk separado |
| ADMIN_PASSWORD default em prod | Critico | Forcar troca antes de apontar crenas.site |

---

## 9. Decisoes de Arquitetura (ADRs Resumidos)

**ADR-1**: Manter admin como SPA com query params, nao migrar para nested routes
- Motivo: Ja funciona, evita rewrite desnecessario

**ADR-2**: Nao introduzir NextAuth/Clerk para 2 usuarios admin
- Motivo: HMAC tokens sao stateless, simples, e suficientes

**ADR-3**: Arena auth permanece separada do admin auth
- Motivo: Publicos diferentes (usuarios da arena vs donos do negocio)

**ADR-4**: Dynamic imports por secao do dashboard, nao Parallel Routes
- Motivo: Dashboard e 100% client-side; parallel routes sao para Server Components

**ADR-5**: PPR experimental apenas para site publico
- Motivo: Admin nao tem conteudo estatico para pre-render

**ADR-6**: Manter Prisma 7 + raw SQL dual pattern
- Motivo: Funciona bem; AI Company usa Prisma, rest usa raw SQL

---

## 10. Estrutura Final de Componentes Admin

```
src/components/admin/
  AdminAuthContext.tsx              # Auth provider (manter)
  ActivityFeed.tsx                  # SSE real-time feed (manter)
  CostTracker.tsx                  # Custo por agente (manter)
  dashboard/
    DashboardShell.tsx             # Shell com sidebar + content (manter)
    DashboardSidebar.tsx           # Sidebar expandida (ATUALIZAR)
    DashboardTopBar.tsx            # Top bar (manter)
    sections/
      OverviewSection.tsx          # Redesenhar como war room
      ClientesSection.tsx          # Manter
      ClienteChecklistWeek.tsx     # Manter
      ClienteDetailPanel.tsx       # Manter
      ClienteFormModal.tsx         # Manter
      CardMonitorSection.tsx       # Manter
      PipelineSection.tsx          # Manter
      AICompanySection.tsx         # Manter + integrar Performance/Cost
      LandingPageSection.tsx       # Manter
      SiteVercelSection.tsx        # Manter
      ArenaAdminSection.tsx        # NOVO
      ScraperSection.tsx           # NOVO
      ContentSection.tsx           # NOVO
      AnalyticsSection.tsx         # NOVO
```
