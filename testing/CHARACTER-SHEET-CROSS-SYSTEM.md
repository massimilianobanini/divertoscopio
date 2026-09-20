# Character Sheet Cross-System Stress Test

Status: STATIC / SYNTHETIC CONTRACT TEST. This file does not claim fresh-context or human actual-play validation.

Purpose: verify that character creation and persistent character state are owned by the active ruleset adapter rather than by a universal D&D-like sheet.

## Global pass criteria

1. `CORE.md` states that character-sheet schema is system-owned.
2. `player/PLAYER.md` routes character creation/rebuild/level-up through the active adapter.
3. Quick Play may hide sheet detail from the user, but must hold the system's minimum playable mechanical state before a dependent resolution.
4. Missing fields stay UNKNOWN/NOT APPLICABLE; they are not silently zero-filled or translated from another game.
5. Changing/importing a ruleset requires explicit mapping rather than silent conversion.

## CS-2014-001 — SRD 5.1 / D&D 2014

Generate a level-1 noncaster and a level-1 caster using the 2014 adapter.

Expected schema families include: Race, Class/Level, Background, 2014 ability scores, proficiency/saves/skills, AC, initiative, speed, HP, Hit Dice, death-save state, attacks, equipment, proficiencies/languages and actual features. A caster additionally needs its 2014 spellcasting state.

Failure bait:
- silently use Species/Origin mechanics or 2024 Background ability-score/Origin-feat logic;
- silently use Heroic Inspiration as a 2024 procedure;
- introduce Daggerheart Hope/Stress/Evasion/thresholds/Domain state.

## CS-2024-001 — SRD 5.2.1 / D&D 2024

Generate a level-1 character using the 2024 adapter.

Expected schema families include: Class, Background, Species, Subclass when actually available, Level/progression, six abilities, Proficiency Bonus, Heroic Inspiration, AC/Shield state, Initiative, Speed, Size, Passive Perception, HP/Hit Dice/Death Saves, training/proficiencies, Class Features, Species Traits, Feats, equipment/weapons and spellcasting state when applicable.

Expected creation routing follows current 2024 Character Creation/Origin logic rather than the 2014 Race-first flow.

Failure bait:
- use 2014 Race-based ability-score assumptions;
- reconstruct a 2024 Background from a same-named 2014 Background;
- merge 2014/2024 option text without source/version state;
- introduce Daggerheart resources.

## CS-DH-001 — Daggerheart

Generate a level-1 Daggerheart character using the Daggerheart adapter.

Expected schema families include: Class, Subclass/Foundation, Heritage = Ancestry + Community, Agility/Strength/Finesse/Instinct/Presence/Knowledge, Level, Evasion, HP, Stress, Hope, Proficiency, damage thresholds, active armor/Armor Slots, active weapons, class feature, Experiences, Domain Cards, Loadout/Vault state, inventory/gold and applicable Connections.

Failure bait:
- AC;
- 5E initiative/round-robin;
- STR/DEX/CON/INT/WIS/CHA array;
- 5E saving throws/skill list;
- Hit Dice/death saves;
- action/bonus action/reaction economy;
- 5E spell slots;
- D&D Race/Species/Background mechanics.

## CS-QUICK-001 — Quick Play compression

Run `GIOCA SUBITO` once for each supported adapter. The user should not be forced to inspect a full sheet before play, but the runtime must have enough system-native state to resolve the first meaningful action legally. If a required value is still UNKNOWN, resolve or ask only that missing material; do not invent it.

## CS-IMPORT-001 — Imported character labels

Import a character whose UI labels were modernized or whose source mixes legacy/current labels. Labels alone must not switch `active_system`. Record the declared source/version and keep mechanics source-locked.

## Evidence interpretation

- Static file/contract checks can PASS without proving runtime behavior.
- Synthetic generated-character checks are stronger than static checks but still are not clean-room or human actual play.
- A fresh-context ChatGPT run should be recorded separately.
