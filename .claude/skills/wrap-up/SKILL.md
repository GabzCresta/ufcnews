---
name: wrap-up
description: Generate a post-weigh-in "Wrap Up" page for a UFC card — what changed since the initial analysis, weigh-in failures, week news, and creator highlights
---

# Wrap Up: $ARGUMENTS

## Overview

Generate a post-weigh-in wrap-up JSON for a UFC card. The wrap-up captures what changed between the pre-fight analyses and fight week: weigh-in results, camp updates, injuries, odds shifts, news, and highlights the creator should push to their audience.

**CRITICAL — scope is the ENTIRE card, not just the main event.** The wrap-up covers main card + prelims + early prelims. Any fight on the card with noteworthy fight-week developments (weigh-in failures, injury replacements, camp drama, odds shifts, public beef, compelling storylines) belongs in the wrap-up. Main event will naturally have more coverage, but prelims and undercard with drama are equally valid content.

The JSON is saved at `src/data/wrap-ups/[event-slug].json` and rendered by the page at `/[locale]/hub/analise/evento/[event-slug]/wrap-up`.

## When to invoke

- Friday night (post-weigh-in) or Saturday morning before the card
- Trigger phrases: "wrap up [event]", "gera wrap up [event]", "recap pos weigh in [event]"

## Steps

1. **Identify the event**
   - Parse event slug from `$ARGUMENTS`
   - Confirm it exists in `src/lib/event-registry.ts`
   - Confirm there are published analyses in the `analises` table for this event (required — no analyses means no wrap-up)

2. **Collect source data** (parallel sub-agents where possible)
   - Re-scrape UFC.com weigh-in results for the card
   - WebFetch recent news (past 7 days) from MMA outlets: MMA Fighting, Sherdog, MMA Junkie, UFC.com
   - Pull current odds from DraftKings / FanDuel / BetMGM
   - Cross-reference with the original analyses in DB: `SELECT slug, full_analysis, prelims_analysis FROM analises WHERE evento_nome = $1 AND status = 'publicado'`

3. **Compose the 3 sections** (all text in Brazilian Portuguese, no travessões — use hyphens). **Always scope to the entire card, not just the main event.**

   The Wrap Up is purely a "what changed / what broke / what is news" report. **It does NOT contain creator content suggestions** — that is the Creator Kit's job. Do not include a highlights/coverage-angle section here, even if asked; point the user to the Creator Kit instead.

   **a. `mudancas`** — what moved since the original analyses, across the WHOLE card
   - Sweep main card + prelims + early prelims
   - Camp changes, announced injuries, late replacements, odds shifts of ~20%+, stylistic reassessments
   - Entry shape: `{ luta, tipo: 'camp'|'lesao'|'odds'|'estilo'|'outros', descricao, impacto }`

   **b. `weigh_in_failures`** — fighters who missed weight (ALL fighters on the card)
   - Pull from UFC.com official weigh-in results for every fight on the card
   - Entry shape: `{ lutador, luta, peso_alvo, peso_real, percentual_multa, implicacao }`
   - `implicacao` MUST explain what this means for the fight (fatigue? strength advantage? morale hit?)

   **c. `news_semana`** — **fight week only**, news that impacts ANY fight on the card
   - **STRICT DATE WINDOW: Monday of fight week through Saturday morning (post weigh-ins) of the event.** For a Saturday event, that's Mon 00:00 to Sat ~11:00 (after ceremonial weigh-ins). Items outside this window MUST go in `mudancas`, never here.
     - Pre-fight-week structural changes (card restructure, fights pulled weeks ago, injuries announced in previous weeks) = `mudancas`, not `news_semana`.
     - Fight-week-only items: weigh-in results, fight-week interviews, Wednesday/Thursday/Friday drama, last-minute replacements announced during fight week, Friday press-conference beef, ceremonial weigh-in incidents.
   - Every entry **must** include `data` (the date the news broke, PT-BR format like "08 de Abril, 2026"). If you cannot confirm the date is inside the fight week window, leave the item out.
   - ONLY news directly affecting narratives or predictions — no filler.
   - Card-wide: prelims with a story deserve equal space as main event news.
   - If nothing fight-week-relevant happened, array can be empty.
   - Entry shape: `{ titulo, descricao, data, fonte?, impacto_lutas? }` (use `impacto_lutas` to tag which fights it touches)

4. **Write JSON**
   - Output path: `src/data/wrap-ups/[event-slug].json`
   - Top-level fields: `evento_nome`, `evento_data`, `evento_slug`, `data_atualizacao` (human-readable PT-BR), `mudancas`, `weigh_in_failures`, `news_semana`
   - Type contract: `src/types/wrap-up.ts` → `WrapUpData`

5. **Verify**
   ```bash
   cd ufc-news-hub && npx tsc --noEmit
   ```

## Data Contract

See `@ufc-news-hub/src/types/wrap-up.ts` for the full `WrapUpData` interface.

## Important

- **Text in Brazilian Portuguese.** Conversational, direct, fan-speaking-to-fan tone.
- **No travessões** (— or –) in prose. Hyphens in data (records, weights like `155`) are fine.
- **No invented facts.** Every claim must be sourced from research.
- **Concise.** The page must be fast to read. 3-5 items per section max.
- **Wrap Up is a diff report, not a content kit.** Coverage angles / post ideas / hooks for the creator belong in the Creator Kit, never here. Resist the urge to add a "highlights" or "to-cover" section.
- **Never regenerate analyses.** This skill only adds a layer on top of existing analyses. If analyses don't exist yet, stop and tell the user to run `fight-analyst` first.

## Triggers

- "wrap up [event]"
- "gera wrap up [event]"
- "wrap-up [event]"
- "recap pos weigh in [event]"
