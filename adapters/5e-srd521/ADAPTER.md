# CANDIDATE — SYSTEM ADAPTER: 5E / SRD 5.2.1

**Status:** public candidate / experimental / not yet validated to the same level as the existing SRD 5.1 vertical.

## Scope

This adapter connects the Divertoscopio Core to the **System Reference Document 5.2.1 (SRD 5.2.1)**, the Creative Commons rules reference based on the revised 2024 fifth-edition rules.

It is deliberately a **delta-oriented adapter**. It does not duplicate the full SRD and must not be used as an excuse to mix familiar 2014 procedures into a 2024-rules game.

The Core remains system-agnostic. Mechanics in this file belong to this adapter.

## License / attribution

This adapter is designed to interoperate with material from **SRD 5.2.1**, released by Wizards of the Coast LLC under **CC BY 4.0**.

Required attribution is centralized in [../../THIRD-PARTY-NOTICES.md](../../THIRD-PARTY-NOTICES.md).

Official SRD page: https://www.dndbeyond.com/srd

This repository does **not** republish commercial Player's Handbook, Dungeon Master's Guide, Monster Manual, adventures, setting books, artwork, maps, or other non-SRD proprietary text.

When exact execution depends on material outside SRD 5.2.1, use a legally available source just-in-time.

---

## 1. RULESET LOCK

Before applying mechanics, record:

- `ruleset = 5E / SRD 5.2.1`;
- active house rules;
- active optional rules;
- source-specific procedures from an adventure, feature, spell, item, stat block, setting, or supplement.

Do **not** silently fall back to SRD 5.1 / 2014 procedures because they are familiar.

When a current source explicitly permits choosing an older version of a character option, record that choice per character and execute it consistently. "Newer exists" does not always mean "older is forbidden."

---

## 2. SOURCE PRECEDENCE

For a scoped mechanical question, use:

1. explicit table/house rule currently active;
2. the most specific active procedure for the exact adventure / feature / spell / item / stat block / subsystem;
3. SRD 5.2.1 general rule;
4. transparent provisional ruling if the exact rule cannot be verified without unacceptable interruption.

A specific adventure procedure can override a general default **inside its own scope**.

Do not export the exception globally.

Example model:

```
general rule -> default
specific active rule -> local override
local override ends -> general rule resumes
```

---

## 3. HIGH-RISK 2014 -> 2024 CONTAMINATION CHECKS

Keep these deltas readily available.

### Heroic Inspiration

Treat Heroic Inspiration as the current reroll resource, not the older pre-roll Advantage model.

Track whether a character currently has it and do not invent extra uses.

### Surprise

Use the current Initiative-based Surprise procedure.

Do **not** import a "surprise round" or the older first-turn denial procedure.

### Actions

Current play includes explicit actions such as **Magic, Influence, Search, Study, and Utilize** alongside the familiar combat actions.

Translate natural-language player intent into the correct action internally; do not require rules vocabulary from the player.

### Hide

Use the current Hide procedure and its prerequisites.

Important runtime rules:

- successful hiding creates a tracked hidden state;
- record the Stealth result when the rule requires it as the later discovery target;
- if a more specific active source supplies a different DC/procedure, that local rule wins in scope;
- do not hard-code one Hide DC across every published adventure.

Track at least:

```
hidden
hide_source
stealth_result
hide_break_trigger
```

### Invisible vs hidden

Do not assume that every source of invisibility behaves identically to the Invisible state obtained through hiding.

Track the **source** of the condition/state.

### Unarmed Strike / Grapple / Shove

Current Unarmed Strike can route to damage, grapple, or shove.

Do not import the old default of resolving grapple initiation as a contested Athletics check.

Track the current save/DC procedure and current escape procedure.

An Opportunity Attack can route through an Unarmed Strike when the current rules permit it; therefore Grapple/Shove can be legal there when their normal requirements are satisfied.

### Exhaustion

Do not import the 2014 threshold table.

Use the current level-based arithmetic penalties and current death threshold.

Track the numeric exhaustion level as persistent state.

### Short Rest / Long Rest

Use the current rest procedures, including their current interruption and recovery rules.

Do not assume the 2014 Hit Dice recovery model.

Rest state must include enough information to know:

```
rest_type
elapsed_time
interruption
benefits_earned
resources_recovered
```

### Natural 1 / Natural 20

Do not turn every natural 1 or 20 into a universal critical failure/success.

Attack rolls, Death Saving Throws, and other procedures with specific rules keep their own behavior.

### Spellcasting

The high-risk current rule is **one spell slot expended to cast a spell on a turn**, not the old Bonus-Action-spell heuristic.

Also remember:

- most spells use the Magic action unless their casting time says otherwise;
- long casting requires repeated Magic actions and Concentration as specified by the current rule;
- action type comes from the rule, not from English wording such as "it's an attack."

Do not treat a spell attack as automatically being the Attack action.

### Ready / Reaction

Do not invent a generic "delay my turn" procedure.

Ready creates a Reaction opportunity under its current procedure.

Track that only one Reaction is available unless another rule explicitly changes that.

---

## 4. MEANINGFUL D20 TESTS

Use the Divertoscopio roll gate:

```
INTENT
-> APPROACH
-> UNCERTAINTY
-> STAKES
-> D20 TEST only if needed
-> RESULT
```

Do not roll if success is certain, failure is impossible, or repeated retries have no meaningful consequence.

Do not import generic opposed-roll habits from 2014 when the current procedure uses a fixed or generated DC instead.

---

## 5. STATE FIRST, NOT MEMORY FIRST

For current 5E play, persistent state should normally include, when relevant:

- level / advancement method;
- HP / Temporary HP;
- Hit Point Dice;
- conditions;
- exhaustion;
- Heroic Inspiration;
- Concentration;
- ongoing effects and their expiry;
- position / reach / relevant range;
- hidden / visibility state and source;
- grapple state and escape DC;
- spell slots and other limited resources;
- inventory provenance;
- attunement;
- current optional-rule overlays;
- campaign/adventure-specific clocks and counters.

Do not rebuild this from narrative memory when a tracked value exists.

---

## 6. COMBAT START / PRE-COMBAT ACTIONS

A hostile declaration does not automatically grant a free attack before Initiative.

Do not create a hidden "pre-combat turn" simply because one side says "I attack first."

Use the current Initiative / Surprise procedure and any specific source rule that legitimately modifies it.

---

## 7. MONSTERS AND STAT BLOCKS

Use the exact current stat block named by the active source.

Do not silently replace it with:

- a legacy stat block;
- a same-name older monster;
- a generic remembered version.

If an active current source provides a more specific current stat block than a generic conversion/fallback, use the more specific current source.

For Opportunity Attacks, do not substitute a full Multiattack when the current procedure only allows a single eligible melee attack / Unarmed Strike.

Monster limited-use spell actions are not automatically a normal spell-slot pool.

A subsystem may define a narrow equivalence; keep that equivalence scoped.

---

## 8. OPTIONAL / SETTING / SUPPLEMENT OVERLAYS

Keep these as explicit overlays rather than smearing them into base 5E.

Examples of overlay families:

- Bastions;
- vehicle / airship subsystems;
- Circle Magic;
- horror / Haunted Bastion procedures;
- setting-specific planar or travel restrictions;
- faction / renown systems;
- source-specific death or defeat procedures;
- solo / party-size adjustments;
- campaign wrappers.

State model:

```
overlay_id
source
active = YES | NO
scope
activation_time
relevant_state
```

If an overlay is not active, do not apply it merely because the AI knows it exists.

---

## 9. PUBLISHED ADVENTURE INTEGRITY

When the user provides a legally usable adventure source:

- specific adventure procedure can override a general SRD rule in its scope;
- local tutorial rules stay local;
- clocks continue according to the actual fiction/rules;
- encounter retreat does not automatically mean quest completion;
- primary and secondary objectives remain distinct;
- earlier choices propagate into later scenes;
- source-defined noncombat solutions remain valid;
- an expected/recommended character level is not automatically a level-up trigger;
- source-defined advancement beats generic assumptions.

Do not reproduce commercial adventure text into the public repository.

---

## 10. NO CROSS-EDITION AUTO-COMPLETE

If a 2024/current option shares a name with a 2014 option and exact mechanics are not available:

**do not complete the missing rule from memory.**

Use:

```
SOURCE KNOWN
-> EXACT TEXT AVAILABLE? use it
-> NOT AVAILABLE? JIT lookup / ask for legally available source
-> STILL UNAVAILABLE? transparent provisional ruling or stop at what is known
```

This applies especially to subclasses, feats, spells, species, magic items, monsters, and supplement subsystems.

---

## 11. PLAYER OWNERSHIP DURING LEVEL-UP

Do not auto-continue the same class simply because it is the shortest path.

When the current rules permit choices such as subclass, feat/ASI, multiclass, spell choices, or other build decisions, leave the decision to the player and verify the current rule needed for that choice.

Track:

```
advancement_mode
level
xp_or_source_progress
pending_level_up
build_choices_pending
```

---

## 12. PROVISIONAL RULINGS

If an edge case blocks play and the exact rule cannot be verified quickly:

1. state the uncertainty;
2. make a bounded provisional ruling;
3. record it;
4. continue;
5. verify later;
6. correct transparently with the minimum retcon needed.

Never present a guessed 2014 rule as verified 2024 procedure.

---

## 13. PUBLIC-SOURCE BOUNDARY

This public adapter may summarize and reorganize SRD 5.2.1-compatible procedures.

It must **not** contain or reconstruct proprietary text from commercial rulebooks, adventures, or settings.

If play depends on such a source:

- use a copy legally provided/accessible to the user;
- keep exact proprietary mechanics in the live session/context;
- do not copy that commercial corpus back into this repository.

---

## 14. VALIDATION STATUS

Current status:

- broad internal delta audit performed against 2024/2025 core-rule material and multiple current adventures/supplements;
- current SRD 5.2.1 public-source lock identified;
- static stress cases have been designed;
- external clean-room testing and actual-play validation are still incomplete.

Therefore:

**Do not present this adapter as validated to the same level as the existing SRD 5.1 vertical.**

This candidate exists to begin external testing without pretending the work is finished.
