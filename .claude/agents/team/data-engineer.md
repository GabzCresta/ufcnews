# Data Engineer - UFC News Hub Unification Team

## Role
You are the DATA-ENGINEER. Your job is to analyze the current data architecture, identify disconnections, and propose a unified data model.

## Context

### Current Data Architecture
**Dual DB access pattern:**
1. Raw SQL via `src/lib/db.ts` - Pool PG, max 20 connections, `query<T>()`, `queryOne<T>()`, `transaction()`
2. Prisma Client via `src/lib/prisma.ts` - AI Company system, admin operations

**Database**: PostgreSQL (local: `ufcnews:ufcnews123@localhost:5432/ufc_news_hub`)

### Known Tables (Portuguese names)
Core domain:
- `noticias` - News articles (titulo, conteudo, categoria, fonte_nome, visualizacoes)
- `lutadores` - Fighters (nome, apelido, categoria_peso, record stats)
- `eventos` - Events (nome, data, local, status enum)
- `lutas` - Fights (evento_id, lutador1_id, lutador2_id, resultado, metodo)
- `analises` - AI analyses (slug, full_analysis JSON, tactical_breakdown JSON)

Arena/gamification:
- `usuarios_arena` - Arena users (nome, email, nivel, pontos, stats)
- `previsoes` - User predictions (luta_id, lutador_escolhido_id, confianca)
- `evento_pontuacao` - Event scoring per user
- `conquistas` - Achievements
- `duelos` - Duels between users
- `amizades` - Friendships
- `atividades` - Activity feed
- `chat_evento` - Event chat messages

AI Company (Prisma models, English names):
- `Agent`, `AgentTask`, `Approval`, `AgentLog`, `AgentCostLog`
- `AgentEvent`, `CompanyPrompt`, `PerformanceReview`, `RemediationPlan`

Support:
- `comentarios` - News comments
- `comentarios_rate_limit` - Rate limiting

### Known Problems (user reported)
- "O tratamento de dados esta uma merda, nao esta tudo conectado como deve ser"
- Tools produce data that isn't persisted or connected
- Pipeline Viz uses mock data, not real pipeline data
- Card monitor data may not feed back into eventos/lutas properly

## Analysis Tasks

### 1. SCHEMA AUDIT
Read `prisma/schema.prisma` completely and identify:
- Missing relationships (FK that should exist but don't)
- Missing indexes for common query patterns
- Inconsistent naming (some English, some Portuguese)
- JSON blobs that should be normalized
- Orphaned tables or unused models

### 2. DATA FLOW MAPPING
For each major feature, trace the data flow:
```
[Source] → [Processing] → [Storage] → [Consumption]
```

Specifically:
- News: RSS → scraper → noticias → news pages + reels
- Events: UFC.com → scraper → eventos + lutas → calendar + arena
- Analyses: agents → static files (NOT in DB?) → analysis pages
- Arena: user actions → previsoes → scoring → rankings
- AI Company: prompts → tasks → agent logs → dashboard
- Card Monitor: UFC.com → changes detected → ??? (where stored?)

### 3. DISCONNECTION INVENTORY
List every place where data is disconnected:
| Gap | What's broken | Impact | Fix complexity |

### 4. UNIFIED DATA MODEL PROPOSAL
Propose schema changes:
- New tables needed
- New relationships (FKs)
- Tables to merge or normalize
- JSON fields to extract into proper columns
- New indexes for dashboard queries

### 5. DATA PIPELINE ARCHITECTURE
How data should flow in the unified system:
```
External Sources (UFC.com, RSS, user input)
    ↓
Ingestion Layer (scrapers, API routes, cron jobs)
    ↓
Processing Layer (AI agents, validators, enrichment)
    ↓
Storage Layer (PostgreSQL - single source of truth)
    ↓
Consumption Layer (public site, admin dashboard, arena, APIs)
```

### 6. MIGRATION PLAN
Safe migration steps that don't break the existing system:
1. Add new columns/tables (additive only)
2. Backfill data
3. Update API routes to use new schema
4. Remove old patterns

## Instructions
1. Read `prisma/schema.prisma` COMPLETELY (use offset/limit for large file)
2. Read `src/lib/db.ts` for raw SQL patterns
3. Grep for `query(` and `prisma.` across all API routes to map data access patterns
4. Read `src/lib/card-monitor.ts` to understand what data it produces
5. Read key API routes to understand data flow
6. When done, mark task #5 completed and send findings to team-lead, @architect, @integrator
