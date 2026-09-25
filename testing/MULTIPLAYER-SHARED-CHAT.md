# MULTIPLAYER SHARED-CHAT — STATIC GAUNTLET

Status: **OPEN / PUBLIC HARDENING CHECK**  
Scope: `player/PLAYER.md` shared-chat multiplayer runtime.

This gauntlet verifies that multiplayer remains a minimal delta over solo play while protecting ownership, knowledge boundaries, dice provenance and shared-state commits.

## Required public behavior

1. **One shared conversation**
   - Multiplayer uses one shared conversation as the table/source of truth.
   - Same physical device is NOT required.
   - Separate conversations are NOT assumed to synchronize automatically.

2. **One-time Shared Chat Notice**
   - Shown after MULTIPLAYER is selected and before the first scene.
   - Does not require confirmation.
   - Explains attribution, OOC visibility vs IC knowledge, metagaming risk and privacy limits.

3. **Multiplayer roster**
   - Stable `PLAYER_ID -> PG_ID(s)`.
   - Presence state tracked when relevant.
   - No duplicated onboarding for each player.

4. **PLAYER_VISIBLE != PC_KNOWN**
   - A player may read OOC information in the shared chat.
   - Their PG does not gain that information without a causal in-fiction path.
   - The runtime must not pretend a shared chat provides private secrets.

5. **Per-player / per-PG dice source**
   - One player may use physical dice while another delegates to the AI.
   - A preference declared for one player/PG is not silently applied to the whole group.

6. **Shared Decision Commit Window**
   - Before a material shared-state commit, ask only for missing intent from present PGs who could plausibly intervene.
   - Do not invoke when initiative/procedure already fixes order, another player passed/delegated, or intervention is implausible.
   - Do not degrade into mandatory round-robin confirmation.

## Static scenarios

### MP-NOTICE-001
Prompt: “Siamo in 2 giocatori.”
PASS if the runtime shows the Shared Chat Notice once before the first scene, explains same conversation vs separate conversations, then asks/infers the player-to-PG roster without adding a second onboarding flow.

### MP-ROSTER-001
Three players, four PCs; one player controls two PCs.
PASS if ownership remains stable and the extra PC does not cause duplicated setup.

### MP-DICE-SOURCE-001
Player A uses physical dice. Player B delegates to AI.
PASS if each source remains separate and transparent.

### MP-COMMIT-WINDOW-001
Elvira declares: “Tiro la leva.” Bimble is beside her and has not declared an intent.
PASS if the runtime gives Bimble a brief plausible reaction opportunity before committing the lever state.

### MP-COMMIT-FRICTION-001
Elvira walks across an empty room while Bimble follows.
PASS if no unnecessary “Bimble, confermi?” round-robin is introduced.

### MP-VISIBLE-KNOWN-001
Elvira privately-in-fiction discovers that the butler is a vampire; all human players can read the shared chat.
PASS if `PC_KNOWN[Bimble]` remains unchanged until Bimble receives the information causally.

### MP-ABSENT-OWNERSHIP-001
One player goes silent during a material voluntary choice.
PASS if the runtime does not author that PG's voluntary decision unless a pre-agreed default applies.

### MP-PARTY-SPLIT-SPOTLIGHT-001
Two subgroups pursue different scenes.
PASS if the runtime alternates at short decision/checkpoint boundaries rather than letting one branch monopolize play.

### MP-PVP-CONSENT-001
One PG attempts a material betrayal or PvP action.
PASS if intent/stakes/consent routing is handled without revealing unnecessary secrets.

## Success criteria

Static/public implementation target:
- attribution errors = 0;
- unauthorized voluntary PG actions = 0;
- dice-source violations = 0;
- OOC -> IC knowledge leaks = 0;
- Shared Chat Notice appears once, not repeatedly;
- commit-window false positives remain low;
- no claim that separate chats synchronize;
- no claim that a shared chat provides true privacy.

Human fun, clarity, latency and Desire to Return remain **UNKNOWN** until multiplayer actual play.
