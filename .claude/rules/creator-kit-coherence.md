# Creator Kit Coherence Rules (R6 — NEW 2026-04-26, REFRAMED)

Creator kits (HayJive, future creators) re-package CONTRACT v2 fight analyses into per-creator deliverables: 3 Locks, parlays, single picks, fade warnings, written columns. The coherence rules below exist to prevent low-confidence or gate-failing picks from being elevated to the kit's "anchor" slots, where the creator-facing label drives public action.

**Framing — these are guardrails, not the kit-construction algorithm.** The kit is built by READING each fight analysis as a whole story (per-fight reasoning, qualitative dossier, conviction rationale, underdog path) and curating the picks that actually feel solid given the body of evidence. The rules below run AFTER curation as a structural check — they catch the "I built a kit by sorting the spreadsheet by conviction_score and putting top 3 in Locks" failure mode, not nuance.

The kit author is responsible for reading the analysis. The rules are responsible for making sure no pick that violates a structural constraint slips through to a high-stakes slot. If a pick passes the rules, that's a green light for slot eligibility — it's NOT a green light for putting the pick in a slot the per-fight story doesn't support.

These rules complement, not replace, the gates in `.claude/agents/fight-analyst.md` PHASE 2.5. Every kit pick still has to pass the underlying CONTRACT v2 gates (R1 submission, R5 decision survivor, R7 underdog path, R8 post-KO recency) AND the audit/calibre rules (R2, R3, R4). This file adds rules specific to the kit re-packaging layer.

## Background

UFC Sterling vs Zalal (Abril 2026) HayJive Kit shipped with: 3 Locks went 0/3 (Vieira sub, Filho sub, Dumont dec — all lost), Slimeball Parlay (Marshall, Zalal, Vieira, Filho) lost on legs 2/3/4, Gimme Pick (Vieira ITD with Underdog HAYJIVE promo) lost. Root cause: picks with structural weaknesses (BJJ-pedigree submission predictions, ignored calibre gap, archetype-match without validation) were promoted to the most "this is the safe play" slots in the kit. The kit gave the creator the highest-stakes-looking picks at the moment they were structurally weakest.

## Rule 1 — Locks require conviction ≥7 AND post-gate

A creator kit "Lock" slot (3 Locks Each, Lock of the Day, Headline Pick, parlay anchor) MAY ONLY be sourced from a fight analysis where ALL of these hold AFTER the PHASE 2.5 gates ran:

- `previsao_final.conviction.conviction_score >= 7`
- `predicted_method` is broad ("Decisão", "Decisão ou TKO tardio", "ML") UNLESS GATE 1 (submission method gate) returned PASS with all 3 questions YES
- The Independent Dimensions audit (R4) recorded ≥3 distinct dimensions backing the thesis
- The Calibre gap check (R2) did NOT trigger a Tier 2 forced reconsideration (Tier 1 soft ressalva is acceptable for Locks IF the conviction_rationale documents the override evidence; Tier 2 ressalvas disqualify outright)
- The Archetype-match validation (R3) did NOT delete a comparison the thesis depended on
- GATE 4 (Post-KO recency, R8) did NOT trigger without an exemption — a post-KO fighter with a specific finishing-method pick cannot anchor a Lock unless an exemption was invoked with sourced evidence

If any condition fails, the pick is NOT eligible for a Lock slot. Demote to a lower-confidence slot (Fade of Week, contrarian play, longshot leg in a parlay) or omit from the kit entirely.

**Per-fight nuance reminder**: even if a pick passes all five conditions, the kit author still has to ask "does this fight's actual story support a Lock?" A fight that passes the gates because conviction reached exactly 7 on a knife-edge between two close styles is technically eligible but probably belongs in a parlay or single pick, not a Lock. The rules establish a floor; the kit author chooses what actually goes there.

## Rule 2 — Parlays cap low-conviction legs

A multi-leg parlay (Slimeball, Green Hammer, Cycle Parlay, Pick'em chains, etc.) MAY include at most:

- **2 legs with `conviction_score < 7`** (regardless of the total leg count)
- **0 legs with PHASE 2.5 downgrades** — meaning no leg that hit GATE 1 submission downgrade, GATE 2 forced-decision exemption that wasn't (a)/(b)/(c)-backed, GATE 3 underdog-path conviction cap, or GATE 4 post-KO method-narrowing without exemption
- **0 legs with R2 Tier 2 forced reconsideration** that ended in "kept the original pick with capped conviction" — those legs go in single picks or get omitted, not in a parlay

If the parlay cannot fit those constraints, shrink it (drop legs) or rebuild it from scratch. **Padding parlays with weak legs to hit a target combined odds (e.g. "we want a +200 Slimeball this week") is forbidden** — combined odds are an OUTPUT of the picks the gates approved, not a target the picks have to chase.

## Rule 3 — Gimme Pick requires the highest bar

The "Gimme Pick" slot (single pick attached to an affiliate CTA, code, or "20X your coin"-style language) implies the strongest signal to the public. It MAY ONLY be sourced from a fight where ALL of these hold:

- `conviction_score >= 8`
- GATE 1 returned PASS (or `predicted_method` is not a submission, in which case GATE 1 doesn't apply)
- GATE 4 did NOT trigger (or returned EXEMPTION_INVOKED with sourced post-KO clean-fight evidence)
- The Independent Dimensions audit recorded **≥4** distinct dimensions
- `nivel_competicao.media_oponentes` of the predicted winner is **>=** predicted loser's
- R2 Tier 2 (forced reconsideration) did NOT fire (Tier 1 soft ressalva also disqualifies the Gimme — the bar is higher than for Locks)
- The pick's `value_picks_v2.best_bet` matches the Gimme Pick exactly (no upgrading a non-best_bet to Gimme)

If no fight on the card passes this bar, **the kit ships without a Gimme Pick**. An empty Gimme slot is infinitely better than a Gimme Pick with the affiliate CTA on a structurally weak pick — the latter is the failure mode that produced the Vieira ITD loss in Sterling vs Zalal.

## Rule 4 — Fade of Week is the contrarian release valve

When a fight produced what *would* have been a high-conviction pick but the gates downgraded it (e.g. submission gate fired, calibre ressalva triggered, archetype comparison was banned), the kit's "Fade of Week" slot is the appropriate place to surface that picks's market trap — explicitly warning the public not to take the seemingly obvious method bet.

In Sterling vs Zalal (Abril 2026), "Sterling by Decision +300" was the right Fade — Sterling did win by exactly that method, but the analysis was not confident enough in the specific method to Lock it. Fade slots warn against confidence; they don't claim it. A Fade is not a contrarian Lock, it is a no-action recommendation.

## Rule 5 — Output requirement (auditable kit dossier)

When generating a creator kit, the agent MUST record (in a comment block at the top of the kit page file, or in an accompanying `.kit-dossier.md` next to the page):

```
KIT DOSSIER — [Event slug]

For each pick in a Lock / Gimme / Parlay-anchor slot:
  Pick:                    [pick text]
  Slot:                    [Lock 1 | Lock 2 | Lock 3 | Gimme | Slimeball anchor | etc.]
  Source analysis:         [path to /hub/analise/[fight-slug] page]
  conviction_score:        [N/10]
  GATE 1 (submission):     [PASS | DOWNGRADED | N/A]
  GATE 2 (decision):       [DEFAULT_DEC | NON-DEC_JUSTIFIED]
  GATE 3 (underdog):       [PASS | METHOD_BROADENED | CONVICTION_CAPPED]
  GATE 4 (post-KO, R8):    [N/A | TRIGGERED | EXEMPTION_INVOKED — evidence]
  Dimensions covered:      [N]
  Calibre gap (Tier 1):    [-N | 0 | +N]   # negative = soft ressalva fired
  Calibre gap (Tier 2):    [N/A | INVERTED | CAPPED_WITH_OVERRIDE — evidence]
  Archetype validation:    [PASS | DELETED | N/A]
  Eligible for slot?       [YES | NO — reason]
  Per-fight story support? [paragraph: does the fight's actual story support placing this pick in this slot, beyond just passing the rules?]
```

This dossier is auditable evidence that R6 ran. Without it, the kit cannot be considered complete.

## How this interacts with existing files

- `src/types/hayjive-kit.ts` (and future `*-kit.ts` schemas): voice rules and IP names stay content-level. R6 enforcement is at the kit-generation step, not the type level.
- `src/components/creator-kit/[creator]/[Creator]KitView.tsx`: rendering layer. R6 doesn't touch the component — only what data the page is allowed to put into a Lock prop.
- `src/app/[locale]/hub/creator-kit/[creator]/[event-slug]/page.tsx`: the kit dossier comment block lives at the top of this file (above the `data` object).
