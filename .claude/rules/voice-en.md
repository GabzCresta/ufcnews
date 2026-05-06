# Voice Guide EN — American UFC Viewer English

Tone and terminology guide for English UFC fight analyses. Voice is **American MMA fan/analyst** — someone who watches every card on ESPN+, listens to The MMA Hour with Helwani, follows Brett Okamoto and Marc Raimondi, has opinions on Helwani vs Bisping, knows the difference between Jon Jones and Jon Anik. Tone matches ESPN MMA, MMA Junkie, Bloody Elbow at its peak — informed, direct, with personality.

**RULE ZERO — ZERO Portuguese words leak through.** This is not a translation. The agent reads the fight context (PT data file or fresh research) and **writes the analysis natively in English from scratch**. If a Portuguese word slips into the EN output, the file is broken. The PostToolUse hook on translator.md catches obvious cases (`nao`, `mas`, `contra`, `porque`) — but the bar is higher: also no Portuguese sentence structures translated word-for-word.

## Native MMA Terminology — USE These

These are the natural words an American UFC fan uses. Hit them naturally — don't force them.

### Striking
- **stand-up** — "the fight stays on the feet, in stand-up territory"
- **boxing**, **kickboxing** — used loosely; "his boxing is the cleanest in the division"
- **pop in his hands** — knockout power: "Prates has serious pop in his hands"
- **mileage** — accumulated wear: "Edwards has 15 fights of championship-round mileage"
- **gas tank** — cardio capacity: "Prates' gas tank held up over 5 against Garry"
- **chin** — durability to strikes: "JDM's chin has held up against Burns and Belal"
- **wars** — fights with sustained damage: "Holloway has been in five-round wars"
- **pocket** — close range: "Prates operates in the pocket where his power lives"
- **range** — distance: "Prates uses his reach to control the range"
- **pressure** — forward movement: "Belal's pressure won him the title"
- **distance management** — footwork/range control
- **cage cutter** — fighter who closes off octagon space
- **counter-puncher**, **volume striker**, **pressure fighter**
- **pop**, **snap** — describing strikes: "the jab has serious pop"

### Wrestling / Grappling
- **wrestling**, **wrestling-heavy** — "JDM needs to lean wrestling-heavy"
- **scrambles** — chaotic ground exchanges: "Prates needs to win scrambles to get back up"
- **takedowns** (TDs), **takedown defense** (TDD)
- **sprawl-and-brawl** — striker who shuts down takedowns
- **clinch**, **bodylock**, **single-leg**, **double-leg**
- **ground-and-pound**, **G&P**
- **top control**, **bottom control**
- **jiu-jitsu**, **BJJ**, **submission grappling**
- **chain wrestling** — sequential takedown attempts
- **sub attempts**, **sub defense**

### Submissions (use English names — these are universal)
- rear-naked choke (RNC), guillotine, arm-triangle, triangle choke, armbar, kimura, heel hook, D'Arce, anaconda, north-south choke, ezekiel, Peruvian necktie

### Fight IQ / Mental
- **fight IQ** — ring intelligence: "Holloway's fight IQ is elite"
- **ring savvy**, **veteran savvy**
- **championship rounds** — rounds 4 and 5
- **gas tank issues**, **conditioning**
- **mental toughness**, **comeback mode**, **finishing instinct**
- **timing**, **read**, **set-up** — "Prates set up the straight left with a feint"

### Stakes / Narrative
- **upset** (NEVER "underdog wins" if "upset" works), **underdog**, **favorite**, **chalk**
- **gatekeeper**, **prospect**, **contender**, **title shot**, **title contender**
- **resume**, **strength of schedule** — calibre of opponents
- **brutal layoff**, **ring rust**
- **redemption arc**, **comeback story**, **crossroads fight**
- **must-win**, **win-or-go-home**

### Method Predictions
- **decision** (UD = Unanimous Decision, SD = Split Decision, MD = Majority Decision)
- **knockout** (KO), **technical knockout** (TKO)
- **submission** (sub) — "sub R2"
- **inside the distance** (ITD) — finish before final bell
- **finish**, **finisher** — "Prates is a finisher"

### Weight Classes (English Standard)
| EN (USE) |
|----------|
| Strawweight (115 lbs) |
| Flyweight (125 lbs) |
| Bantamweight (135 lbs) |
| Featherweight (145 lbs) |
| Lightweight (155 lbs) |
| Welterweight (170 lbs) |
| Middleweight (185 lbs) |
| Light Heavyweight (205 lbs) |
| Heavyweight (265 lbs) |

NEVER use Portuguese weight classes ("Peso Meio-Medio") in EN output. Always English.

### Date Format (English Standard)
- "May 2, 2026" (NOT "2 de Maio, 2026")
- Months: January, February, March, April, May, June, July, August, September, October, November, December
- Abbreviated for `recent_fights.date`: "Nov 2025", "May 2025", "Mar 2024"

## Cultural Voice Calibration

**Default vibe**: ESPN MMA / MMA Junkie. Authoritative, direct, with personality. Not Bleacher Report listicle. Not academic.

**Direct, declarative sentences** beat hedged ones:
- ❌ "It could be argued that Prates may have an advantage in reach"
- ✅ "Prates' reach is the matchup-defining edge"

**Concrete > abstract**:
- ❌ "Prates demonstrates excellent striking acumen"
- ✅ "Prates has serious pop, period — 18 KOs in 23 wins, 7th-best knockdown rate in UFC history"

**Voice flourishes that work in EN MMA writing** (use sparingly, 1-2 per analysis as flavor):
- "this is a barn burner waiting to happen"
- "the tale of the tape favors X"
- "X's path is real, but it's narrow"
- "if Y lands, it's a wrap"
- "X has been here before — Y hasn't"
- "the public is on the wrong side"
- "this is the fight that makes you a believer (or breaks the spell)"

**Avoid Bleacher Report tropes**:
- ❌ "Prates is set to ENGAGE in a SHOWDOWN..."
- ❌ "Della Maddalena AIMS to..."
- ✅ "Prates wants to plant his feet and let his hands go"

**Names — first reference uses full + nickname, subsequent uses last name**:
- First mention: "Jack 'JDM' Della Maddalena" or "Carlos 'The Nightmare' Prates"
- Subsequent: "Della Maddalena" or "JDM"; "Prates"

**Numbers — spell single digits, numerals 10+**:
- "five-round main event" (NOT "5-round")
- Stats stay numerals: "5.42 sig strikes per minute"
- Records stay numerals: "23-7-0"
- Times stay numerals: "KO at 1:28 of round 2"

**Em-dashes — DO use them in English** (this is opposite of the PT rule). Em-dashes work in English:
- ✅ "Prates is the favorite — and with reason — after two consecutive KOs."
- This rule (no em-dashes) only applies to PT output. EN follows English typographic conventions.

But still, prefer commas or parentheses for variety.

## Forbidden Patterns

### Portuguese leaks
The translator hook runs `grep` on PT words. Avoid all of these:
> nao, mas, contra, porque, tambem, muito, quando, depois, antes, entre, sobre, ainda, entao, porem, apenas, alem, isso, voce, dele, dela, pode, esta, mais, menos, cada, todo, outro, como, para, pelo, pela, com, sem, dos, das, nos, nas, aos, uma, uns, umas, esse, essa, aqui, ali, onde, qual, quem, foi, ser, ter, fazer, haver

### Portuguese sentence structures translated literally
- ❌ "It is in the clinch that the fight will be decided" (PT → EN literal)
- ✅ "The clinch is where this fight will be decided"
- ❌ "Prates has of his side the reach"
- ✅ "Prates has the reach edge"

### Anglicized Portuguese terms
- ❌ "the brazilian", "the australian" — name them: "Prates", "Della Maddalena", or "Brazil's Prates"
- ❌ "the ex-champion" — "former champion"
- ❌ "octagon" lowercase generic — "octagon" or "Octagon" both work, but use it sparingly; "cage" is the more natural informal term

## Examples — BEFORE vs AFTER

### Example 1 — Translator literal output (BAD)
```
"Della Maddalena comes back home after dominant defeat to Makhachev. Prates arrives in flames after KO of Edwards."
```
**NATIVE EN:**
```
"Della Maddalena returns home after getting handled by Makhachev. Prates rolls in red-hot off a vicious KO of Edwards."
```

### Example 2 — Hedge-heavy academic (BAD)
```
"It is reasonable to suggest that Prates may possess certain physical advantages including reach and height that could potentially complicate Della Maddalena's preferred boxing approach."
```
**NATIVE EN:**
```
"Prates' reach and height are matchup-killers. JDM's boxing wants the pocket — Prates won't let him have it."
```

### Example 3 — Bleacher tropes (BAD)
```
"DELLA MADDALENA AIMS TO REDEEM HIMSELF in a CRUCIAL SHOWDOWN against the BRAZILIAN STAR Carlos Prates."
```
**NATIVE EN:**
```
"This is a redemption fight for Della Maddalena. He's coming off a 50-45 loss to Makhachev and going home to Perth to face one of the division's hottest finishers."
```

### Example 4 — Mixed PT structure (BAD)
```
"The path of victory of Prates passes by the straight left, like he showed against Edwards in the round 2."
```
**NATIVE EN:**
```
"Prates' path runs through the straight left — the same shot that put Edwards down in round 2."
```

## Self-Check Before Save

For every EN file you write:
1. **Read it aloud mentally**. Does it sound like an American MMA writer wrote it, or a Portuguese speaker translating?
2. **Grep for PT leakers** (the list above). Zero tolerance.
3. **Check weight classes** — no "Peso" anywhere.
4. **Check dates** — "May 2, 2026" format, not "2 de Maio".
5. **Check sentence structures** — no "It is in X that Y" / "X has of his side Y" / "the brazilian/australian" articles.
6. **Tone** — does it have personality, or does it read like a Wikipedia summary?

If any check fails, rewrite the offending section.
