# Nick Saraev Frameworks Applied to UFC News Hub

Research compiled from Nick Saraev's published content, Maker School methodology, LeftClick AI practices, and 1SecondCopy case study.

---

## 1. KEY FRAMEWORKS

| Framework | Core Principle | Source |
|-----------|---------------|--------|
| **Productization 101** | Deliver the exact same experience every single time. Fixed scope, fixed price, zero scope creep. | [nicksaraev.com/productization-101](https://nicksaraev.com/productization-101/) |
| **Template Leverage** | Break services into a small set of highly leveraged templates. A $1K template taking 30 min beats a $9K custom project taking 100 hours. | [nicksaraev.com/biography](https://nicksaraev.com/biography/) |
| **Boring Automations** | Simple, repeatable automations that solve "hot problems" beat complex custom builds. Focus on templateable deliverables that don't depend on specific software. | [LinkedIn post](https://www.linkedin.com/posts/nick-saraev_here-are-three-boring-ai-automations-you-activity-7420851628729135104-ZMY2) |
| **Automation-to-Agentic Transition** | Start with deterministic automations (cron, webhooks). Layer AI agents only where variability demands it. | [nick-saraev.kit.com](https://nick-saraev.kit.com/aaa09595c6) |
| **Execution Cost Collapse** | AI execution cost drops ~40x/year while capability rises. Build for the current cost curve, not yesterday's. | [nicksaraev.com/next-few-months](https://nicksaraev.com/next-few-months/) |
| **No-Policy Discipline** | Strict "no" to anything not advancing the mission. No one-off meetings, conferences, or distractions. | [nicksaraev.com/next-few-months](https://nicksaraev.com/next-few-months/) |
| **90-Day Sprint** | Ship in 90-day cohort sprints with accountability. Monthly product launches, not endless planning. | [Maker School](https://www.skool.com/makerschool/about) |

---

## 2. APPLIED TO UFC NEWS HUB

### A. Productization - Making UFC News Hub a "Product"

**Clear Deliverables (what users pay for):**

1. **Weekly Fight Analysis Package** - The 15-section analysis for each event card is already a perfectly productized deliverable. Same format every time, same sections, same depth. This IS the product.
2. **Event Prediction Report** - The event page with aggregated predictions across all fights is the "executive summary" deliverable.
3. **Creator Kit** - Section 14 (Instagram slides, tweets, video scripts, TikTok hooks) is a standalone product for MMA content creators.
4. **Betting Intelligence Brief** - Section 15 (Radar do Apostador) with edges, value picks, and odds analysis.

**Making the Weekly Pipeline a "Template":**

The existing pipeline (Card Scraper -> Human Gate -> Fight Analyst Main Card -> Fight Analyst Prelims -> Card Validator -> Event Page Generator) is already a productized template. Nick would say: *don't change it, just make it faster and more reliable.* Specific actions:

- Each pipeline run should produce the EXACT same deliverable structure (it already does via the 15-section spec)
- Track COGS per event: Claude API tokens consumed, time to complete, manual intervention count
- Target: full card analysis in under 2 hours with <15 min manual oversight

**Pricing Tiers (if monetized):**

| Tier | Price | Deliverables |
|------|-------|-------------|
| Free | $0 | Event page with predictions + hero sections only |
| Pro (Analista) | R$29/mo | Full 15-section analyses, Creator Kit, Betting Radar |
| Pro+ (Apostador) | R$49/mo | Above + historical accuracy tracking, line movement alerts, early access (published 48h before event) |
| Agency/Creator | R$149/mo | API access to analysis data, white-label Creator Kit, bulk export |

### B. Tool Consolidation

**Current state: 5+ disconnected tools.** Nick's framework says tier them:

| Tier | Role | UFC News Hub Tools |
|------|------|-------------------|
| **Tier 1: Core** | The thing that makes money | Weekly Analysis Pipeline (fight-analyst agents), Analysis pages, Event pages |
| **Tier 2: Orchestration** | Runs the core reliably | Card Scraper, Card Validator, Pipeline orchestration, AI Company system |
| **Tier 3: Integration** | Connects data sources | RSS Parser, Cheerio scrapers, UFC.com data extraction, Playwright |
| **Tier 4: UI** | Where users see value | crenas.site dashboard, Analysis views (FullAnalysisView, PrelimsAnalysisView, EventAnalysisView) |

**"Boring But Effective" approach for UFC News Hub:**

- DO: Cron job that triggers the weekly pipeline on Tuesday (5 days before Saturday events). Simple, deterministic, works every time.
- DO: Single dashboard page at `/dashboard` showing: next event, pipeline status, published analyses count, API costs this month.
- DO NOT: Build a complex real-time AI agent orchestration UI. The AI Company's 14-agent system is impressive but over-engineered for a content platform that publishes 1x/week.
- DO NOT: Build Pipeline Viz as a separate tool. Embed pipeline status as a simple progress bar in the main dashboard.
- CONSOLIDATE: Card Monitor, Arena, and AI Company admin into a single `/admin` section with tabs, not separate applications.

### C. Automation Pipeline

**How the weekly pipeline should be automated (Nick's principles):**

```
TRIGGER: Cron every Tuesday 10:00 BRT
  |
  v
[1] Card Scraper (fully automated - scrape ufc.com/events)
  |
  v
[2] HUMAN GATE (Slack/Telegram notification: "Card scraped: UFC 326, 14 fights. Approve?")
  |                  <-- This is the ONE human checkpoint Nick would keep
  v
[3] Fight Analyst Main Card (automated - 5 main card fights in parallel)
  |
  v
[4] Fight Analyst Prelims (automated - remaining fights in parallel)
  |
  v
[5] Card Validator (automated - mechanical PASS/FAIL checks)
  |
  v
[6] IF FAIL: auto-retry failed fight analysis (max 2 retries)
  |
  v
[7] Event Page Generator (automated)
  |
  v
[8] PUBLISH (auto-deploy to Vercel, send notification: "UFC 326 analysis live")
```

**Where AI agents fit vs simple cron jobs:**

| Task | AI Agent? | Why |
|------|-----------|-----|
| Scraping UFC.com card | NO - Cheerio/Playwright cron | Deterministic HTML structure, no judgment needed |
| Fight analysis generation | YES - Claude API | Requires reasoning, narrative writing, statistical interpretation |
| Validation | NO - mechanical checks | If/else rules, file existence, math verification |
| Event page generation | NO - template aggregation | Reads analysis files, plugs into template |
| Error recovery | PARTIAL - retry logic with AI fallback | First retry is deterministic; if it fails again, AI agent diagnoses |

**What should be human-gated vs fully automated:**

- HUMAN GATE: Card approval (catches cancellations, last-minute changes, wrong event scraped)
- HUMAN GATE: Final quality spot-check on 1-2 analyses before bulk publish (optional, can be removed once confidence is high)
- FULLY AUTOMATED: Everything else. Nick's principle: if you're doing it the same way every time, automate it.

### D. Dashboard Design (Nick's Principles)

Nick says: "Show deliverables, not tools." Applied to UFC News Hub dashboard at crenas.site:

**What the dashboard SHOULD show:**

1. **Next Event Card** - Big hero: "UFC 326 - 4 de Abril, 2026" with fight count and pipeline status
2. **Analysis Status Grid** - Each fight as a card: Green (published), Yellow (in progress), Gray (pending). Click to view.
3. **This Week's Numbers** - Analyses published, page views, Creator Kit downloads, API cost
4. **Quick Actions** - "Run Pipeline", "View Latest Event", "Export Creator Kit"

**What the dashboard should NOT show:**

- AI Company agent hierarchy visualization (internal tool, not a deliverable)
- Raw pipeline logs (put in `/admin/logs` if needed)
- Database tables or Prisma studio embeds
- RSS feed management (background process, not user-facing)

---

## 3. MONETIZATION LADDER

### Free Tier (Public at crenas.site)

- Event pages with fight cards and basic predictions (winner pick + method)
- Hero section data for each fight (fighters, records, rankings)
- 1-2 full analyses per event as "sample" content
- News feed (RSS aggregation, already exists)

### Pro Tier - "Analista" (R$29/mo or R$249/year)

- Full 15-section analysis for ALL fights (main card + prelims)
- Creator Kit (Instagram carousels, tweets, video scripts, TikTok hooks)
- Betting Radar with statistical edges and value picks
- Historical prediction accuracy dashboard
- Email delivery: analysis PDF 48h before event

### Pro+ Tier - "Apostador" (R$49/mo or R$449/year)

- Everything in Pro
- Line movement tracking and alerts
- Custom bet builder with confidence scores
- Early access: analyses published 72h before event
- Odds comparison across Brazilian bookmakers (Betano, Bet365, Sportingbet)

### Enterprise/Agency Tier (R$149/mo)

- API access to all analysis data (JSON endpoints)
- White-label Creator Kit (remove crenas.site branding)
- Bulk export (CSV/JSON) for data journalism or betting models
- Custom webhook: get notified when new analysis drops
- Priority support + feature requests

### Nick's Key Insight on Monetization

From 1SecondCopy: he hit $90K/mo by offering a small set of leveraged templates, not by building a feature-rich platform. For UFC News Hub:

- The 15-section analysis IS the template
- Don't build 50 features. Perfect the ONE deliverable (weekly analysis) and charge for access tiers
- The Creator Kit alone could be a standalone product for MMA YouTubers/podcasters in Brazil

---

## 4. OPERATIONAL EFFICIENCY

### Automate First (Highest ROI)

| Priority | What | Current State | Automation |
|----------|------|--------------|------------|
| 1 | Weekly pipeline trigger | Manual Claude Code invocation | Cron job + n8n/Make webhook triggering Claude API |
| 2 | Card scraping | Semi-automated (agent + human) | Fully automated with change detection |
| 3 | Deployment | Manual Vercel deploy | Git push triggers auto-deploy (already Vercel) |
| 4 | Quality validation | Manual agent run | Post-generation automated check |
| 5 | Social media publishing | Manual Creator Kit copy-paste | Auto-post to Twitter/Instagram via Buffer API |

### Keep Manual (Human Judgment Needed)

- **Card approval gate**: Last-minute fight cancellations happen frequently in UFC. A human must verify the scraped card matches reality.
- **Narrative quality**: Spot-check 1 analysis per event for tone, accuracy, and Brazilian Portuguese quality. AI-generated PT-BR can drift.
- **Betting disclaimer review**: Legal risk - a human should verify betting content doesn't cross into financial advice territory.
- **New fighter profiles**: When a fighter debuts or has limited data, the AI needs human context injection.

### Cost Optimization

**Current cost drivers:**
- Claude API: Each 15-section analysis likely costs $0.50-2.00 in tokens. A full 14-fight card = $7-28 per event.
- Vercel: Free tier likely sufficient for current traffic.
- PostgreSQL: Managed DB cost.

**Nick's optimization principles applied:**

1. **Cache aggressively**: Fight stats don't change between events. Cache fighter data and only refresh when a new fight result is recorded. Use `Cache-Control` headers (already in CLAUDE.md rules).
2. **Batch API calls**: Generate all main card analyses in parallel (Promise.all), not sequentially. Same for prelims.
3. **Right-size the model**: Use Claude Haiku for mechanical tasks (data extraction, validation) and Opus/Sonnet only for narrative sections (Sections 1-2, 9-14).
4. **Template the static parts**: Sections like comparacao_estatistica (Section 6) and distribuicao_vitorias (Section 8) are mostly data formatting. These could use cheaper models or even no-AI template filling if stats are available.
5. **Monthly cost target**: Under $100/mo for a weekly cadence (4-5 events). At scale, under $0.50 per analysis.

---

## 5. IMPLEMENTATION PRIORITY (Nick's 90-Day Sprint)

### Month 1: Productize the Core

- [ ] Automate the weekly pipeline end-to-end with single human gate
- [ ] Build `/dashboard` showing deliverables (not tools)
- [ ] Implement free vs pro content gating
- [ ] Track prediction accuracy for credibility

### Month 2: Monetize

- [ ] Stripe integration for Pro/Pro+ tiers (R$29/R$49)
- [ ] Email delivery of analysis PDFs
- [ ] Creator Kit as standalone downloadable
- [ ] Landing page at crenas.site with value proposition

### Month 3: Scale

- [ ] API tier for enterprise/agency clients
- [ ] Auto-posting to social media from Creator Kit
- [ ] Historical accuracy dashboard (builds trust)
- [ ] Referral system for organic growth

---

## Sources

- [Nick Saraev - Productization 101](https://nicksaraev.com/productization-101/)
- [Nick Saraev - Biography](https://nicksaraev.com/biography/)
- [LeftClick AI](https://leftclick.ai/)
- [Nick Saraev - Next Few Months](https://nicksaraev.com/next-few-months/)
- [Nick Saraev - n8n Creator Profile](https://n8n.io/creators/nicksaraev/)
- [Make.com vs N8N in 2025](https://nicksaraev.com/n8n-vs-make-2025/)
- [Maker School](https://www.skool.com/makerschool/about)
- [Nick Saraev + Apify Case Study](https://blog.apify.com/nick-saraev-and-apify/)
- [Automation-to-Agentic Transition Guide](https://nick-saraev.kit.com/aaa09595c6)
- [Nick Saraev - Boring AI Automations](https://www.linkedin.com/posts/nick-saraev_here-are-three-boring-ai-automations-you-activity-7420851628729135104-ZMY2)
