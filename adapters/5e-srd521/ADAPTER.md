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

Treat **D&D 2024**, **revised 2024 rules**, **5.5e**, and **SRD 5.2.1** as aliases for this adapter unless the user explicitly means a different compatibility layer.

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
3. current SRD 5.2.1 rule, including errata already incorporated into that SRD version;
4. a current official erratum or official Sage Advice ruling when it resolves a current-rule ambiguity not already reflected in the active SRD text;
5. transparent provisional ruling if the exact rule cannot be verified without unacceptable interruption.

Keep provenance distinct:

```
rules_text / current SRD
official_errata
official_sage_ruling
designer/public advice
table_ruling / house_rule
```

A public statement or forum discussion is not automatically an official ruling.

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

Heroic Inspiration is a **post-roll reroll** resource:

- expend it immediately after a die you rolled;
- reroll that die;
- the new result must be used;
- a player character can have only one instance at a time;
- if a rule gives you another while you already have one, you can pass it to another player character who lacks it.

With Advantage or Disadvantage, a reroll affects only one of the two d20s.

Do not import the older pre-roll Advantage model.

### Surprise

If a combatant is surprised by combat starting, that combatant has **Disadvantage on its Initiative roll**.

Do **not** import a "surprise round," a Surprised condition, or the older first-turn denial procedure.

### Actions

Current play includes explicit actions such as **Magic, Influence, Search, Study, and Utilize** alongside the familiar combat actions.

Translate natural-language player intent into the correct action internally; do not require rules vocabulary from the player.

### Hide

Baseline SRD 5.2.1 procedure:

- take the Hide action;
- make a **DC 15 Dexterity (Stealth)** check;
- you must be Heavily Obscured or behind Three-Quarters Cover or Total Cover;
- you must be out of every enemy's line of sight;
- on success, you have the Invisible condition **while hidden**;
- record the Stealth total: it becomes the DC for a creature trying to find you with Wisdom (Perception);
- hidden ends immediately if you make a sound louder than a whisper, an enemy finds you, you make an attack roll, or you cast a spell with a Verbal component.

A more specific active source can supply a different local stealth procedure or DC. That local rule wins **only in its scope**; do not export it back into general Hide.

Track at least:

```
hidden
hide_source
stealth_result
hide_break_trigger
```

### Invisible vs hidden

Hide-sourced Invisible exists only **while hidden**. If the hidden state ends, that source of Invisible ends with it.

Independently sourced Invisible effects remain separate. A creature that can somehow see an Invisible creature can suppress the relevant Invisible benefits against itself without automatically deleting an unrelated source for everyone.

Track the **source** of every Invisible state/effect.

### Unarmed Strike / Grapple / Shove

Current Unarmed Strike can route to damage, Grapple, or Shove.

For Grapple:

- target chooses a Strength or Dexterity saving throw;
- DC = 8 + your Strength modifier + Proficiency Bonus;
- you need a free hand;
- target can be no more than one size larger;
- escape uses an action and a Strength (Athletics) or Dexterity (Acrobatics) check against the grapple's escape DC.

For Shove:

- target chooses a Strength or Dexterity saving throw against the same DC formula;
- on failure, push it 5 feet or give it the Prone condition;
- target can be no more than one size larger.

Grappled state:

- Speed 0;
- attacks against targets other than the grappler have Disadvantage;
- dragging normally costs 1 extra foot of movement per foot, subject to the current size exception;
- the grapple also ends if the grappler is Incapacitated or the required range is broken;
- the grappler can release the target without an action.

Do not import the old contested-Athletics initiation procedure.

An Opportunity Attack can use an Unarmed Strike; therefore Grapple/Shove can be legal there when their normal requirements are satisfied.

### Exhaustion

Do not import the 2014 threshold table.

Current SRD 5.2.1:

- Exhaustion is cumulative from level 0 to 6;
- at level 6, the creature dies;
- D20 Tests are reduced by **2 × Exhaustion level**;
- Speed is reduced by **5 feet × Exhaustion level**;
- a normal Long Rest reduces Exhaustion by 1 unless another rule says otherwise.

Track the numeric exhaustion level as persistent state.

### Short Rest / Long Rest

**Short Rest**

- 1 hour of downtime;
- requires at least 1 HP to start;
- spend Hit Point Dice during the completed rest to heal;
- Initiative, casting a non-cantrip spell, or taking damage interrupts it;
- an interrupted Short Rest grants no benefits.

**Long Rest**

- at least 8 hours;
- normally includes at least 6 hours of sleep and no more than 2 hours of light activity;
- requires at least 1 HP to start;
- restores all lost HP and **all spent Hit Point Dice**;
- restores reduced ability scores / HP maximum as the current rule specifies;
- reduces Exhaustion by 1;
- you must wait at least 16 hours before starting another Long Rest;
- Initiative, casting a non-cantrip spell, taking damage, or 1 hour of walking/other physical exertion interrupts it;
- after at least 1 hour, an interrupted Long Rest gives Short Rest benefits;
- if immediately resumed, each interruption adds 1 hour to the time needed to finish.

Do not import the 2014 "recover half your Hit Dice" model.

Rest state must include enough information to know:

```
rest_type
elapsed_time
interruption
benefits_earned
resources_recovered
```

### Knockout / nonlethal melee

When a melee attack would reduce a creature to 0 HP, the attacker can use the current knockout procedure instead: the creature remains at 1 HP, gains the Unconscious condition, and starts a Short Rest.

Do not import the older "Stable at 0 HP" shortcut.

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

Ready:

- define a perceivable trigger;
- define an action to take or movement up to your Speed;
- when the trigger occurs, you may use your Reaction **after the trigger finishes** or ignore it;
- a readied spell is cast during Ready, expending its normal resources, then held with Concentration until the Reaction releases it;
- if that Concentration breaks, the spell dissipates without taking effect.

Only one Reaction is available until the start of your next turn unless another rule explicitly changes that. Spending the Reaction on something else means the readied Reaction is no longer available.

### Object interaction / Utilize

In time-limited play, one simple object interaction can normally occur for free during movement or an action. Additional interactions require the **Utilize** action unless another rule says otherwise.

Do not import an unlimited "free object interaction" assumption.

### Incapacitated / Stunned

Current Incapacitated state prevents actions, Bonus Actions, and Reactions; breaks Concentration; prevents speech; and imposes Disadvantage on Initiative if the creature is Incapacitated when Initiative is rolled.

Current Stunned includes Incapacitated, automatic failure of Strength/Dexterity saves, and Advantage on attack rolls against the creature.

Do **not** add a separate Speed-0 clause to Stunned unless another active effect supplies it.

### Weapon Mastery

A weapon having a mastery property does **not** mean every proficient wielder can use that property.

Track whether the creature has a feature that actually unlocks Weapon Mastery for that weapon. Retrieve the exact current mastery property when it matters; do not use remembered 2014 weapon behavior as a substitute.


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

Do not inherit the Closed Pilot's SRD 5.1 "XP by default" convention into this adapter automatically.

For SRD 5.2.1 play:
- use the advancement method explicitly established by the adventure/campaign/table;
- if none is established, defer the choice until progression first matters rather than adding unnecessary onboarding;
- never treat an expected/recommended level in an adventure as an automatic level-up trigger.

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
- public-only document-level static stress retest: **30/30 route/failure-bait coverage** after hardening;
- full private Mechanical Gauntlet: **160/160 static synthetic conformance PASS** against the canonical D24 expected-state map;
- external clean-room testing and actual-play validation are still incomplete.

Therefore:

**Do not present this adapter as validated to the same level as the existing SRD 5.1 vertical.**

This candidate is open for external clean-room and actual-play testing without pretending the work is finished.

The 160/160 result is an internal static/synthetic conformance result. It does **not** establish independent-model reliability, live correction burden, actual-play quality, or parity with the SRD 5.1 vertical.
