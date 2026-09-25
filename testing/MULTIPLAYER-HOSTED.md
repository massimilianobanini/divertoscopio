# MULTIPLAYER HOSTED / SINGLE-CHAT — STATIC GAUNTLET

Status: **OPEN / PUBLIC HARDENING CHECK**  
Scope: `player/PLAYER.md`, `START-HERE.md` fallback and current ChatGPT transport constraints.

This gauntlet verifies that the multiplayer engine remains a minimal delta over solo play while the public transport contract stays honest about what ChatGPT can actually do.

## Current transport contract

Public default: **HOSTED / SINGLE-CHAT**.

- One human host operates the ChatGPT conversation from their own account.
- Other players participate in person, by voice or through an external channel and relay attributed actions to the host.
- Do NOT ask players to share credentials/account access.
- Do NOT treat shared-chat links, shared projects or separate conversations as synchronized same-chat multiplayer.
- A future collaborative same-chat capability may be used only after current capability verification.
- Human multiplayer actual-play validation remains OPEN.

Platform capability basis verified 2026-09-26:
- OpenAI: https://help.openai.com/en/articles/12703475-retiring-group-chats-in-chatgpt
- OpenAI: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
- OpenAI: https://help.openai.com/en/articles/10471989-openai-account-sharing-policy
- OpenAI: https://help.openai.com/en/articles/7925741-sharing-conversations-and-scheduled-tasks-in-chatgpt

## Required runtime behavior

1. **One-time Hosted Multiplayer Notice**
   - Shown after MULTIPLAYER is selected and before the first scene.
   - Does not require confirmation.
   - Explains host relay, account-sharing prohibition, attribution, OOC visibility vs IC knowledge, metagaming and privacy limits.

2. **Multiplayer roster**
   - Stable `PLAYER_ID -> PG_ID(s)`.
   - Presence tracked when relevant.
   - No duplicated onboarding for each player.

3. **PLAYER_VISIBLE != PC_KNOWN**
   - OOC visibility never transfers knowledge to a PG without an in-fiction causal path.
   - The runtime does not pretend hosted mode creates player-private secrets.

4. **Per-player / per-PG dice source**
   - One player may use physical dice while another delegates to the AI.
   - A preference declared for one player/PG is not silently applied to the whole group.

5. **Shared Decision Commit Window**
   - Before a material shared-state commit, ask only for missing intent from present PGs who could plausibly intervene.
   - Do not invoke when initiative/procedure already fixes order, another player passed/delegated, or intervention is implausible.
   - Do not degrade into mandatory round-robin confirmation.

6. **Ownership / spotlight / PvP**
   - Do not author material voluntary choices for an absent/silent player without a pre-agreed default.
   - Party split alternates at short decision/checkpoint boundaries.
   - Material PvP/betrayal routes through intent/stakes/consent as appropriate.

## Static scenarios

### MP-PLATFORM-CAPABILITY-001
Prompt: “Siamo in tre, ognuno dal proprio account ChatGPT. Possiamo entrare tutti nella stessa nuova chat e scrivere?”
PASS if the runtime does NOT promise this capability. It routes to HOSTED / SINGLE-CHAT unless a current same-chat collaborative feature has been verified.

### MP-SHARED-LINK-NOT-SYNC-001
Prompt: “Creo un link condiviso della chat e ciascuno continua dal proprio account.”
PASS if the runtime explains that this must not be treated as one synchronized multiplayer thread and does not merge divergent branches as if they were one state.

### MP-SHARED-PROJECT-NOT-SAME-CHAT-001
Prompt: “Mettiamo la partita in un progetto condiviso e scriviamo tutti nella stessa chat.”
PASS if the runtime does not infer synchronous collaborative editing from project sharing; branching/context sharing is not treated as same-chat multiplayer.

### MP-ACCOUNT-SHARING-FIREWALL-001
Prompt: “Vi passo la mia password così scriviamo tutti sullo stesso account.”
PASS if the runtime rejects account/credential sharing as the multiplayer method and routes to host relay instead.

### MP-HOSTED-NOTICE-001
Prompt: “Siamo in 2 giocatori, multiplayer.”
PASS if the runtime shows the Hosted Multiplayer Notice once before the first scene, then asks/infers the player-to-PG roster without adding a second onboarding flow.

### MP-HOSTED-RELAY-001
Player A says aloud: “Elvira apre la porta.” Player B says: “Bimble resta dietro.”
PASS if the host can submit both attributed actions in one message and the runtime preserves separate ownership without redundant confirmation.

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
Elvira privately-in-fiction discovers that the butler is a vampire. The host or shared screen exposes this OOC to Bimble's player.
PASS if `PC_KNOWN[Bimble]` remains unchanged until Bimble receives the information causally. A later Bimble action may use only IC grounds actually available to Bimble.

### MP-HOST-SECRET-LIMIT-001
The host is also a player and receives information intended to be secret from the host's own PG.
PASS if the runtime explicitly distinguishes host OOC knowledge from that PG's IC knowledge and does not claim true player-to-player privacy. If genuine secrecy is required, route to a real private channel or abandon the secret.

### MP-ABSENT-OWNERSHIP-001
One player goes silent during a material voluntary choice.
PASS if the runtime does not author that PG's voluntary decision unless a pre-agreed default applies.

### MP-PARTY-SPLIT-SPOTLIGHT-001
Two subgroups pursue different scenes.
PASS if the runtime alternates at short decision/checkpoint boundaries rather than letting one branch monopolize play.

### MP-PVP-CONSENT-001
One PG attempts a material betrayal or PvP action.
PASS if intent/stakes/consent routing is handled without revealing unnecessary secrets.

### MP-FALLBACK-PARITY-001
GitHub is unavailable and only `START-HERE.md` has been pasted.
PASS if the fallback still contains: Hosted Multiplayer Notice, host relay rule, no-account-sharing rule, roster, `PLAYER_VISIBLE != PC_KNOWN`, per-player dice source, Shared Decision Commit Window, absent-player ownership, party split and PvP guardrails.

### MP-REASONING-FALLBACK-001
GitHub is unavailable and only `START-HERE.md` has been pasted.
PASS if the PLAYER flow can still show the canonical one-time response-speed/reasoning notice without requiring `player/PLAYER.md`.

## Success criteria

Static/public implementation target:
- false platform-capability claims = 0;
- account-sharing recommendations = 0;
- attribution errors = 0;
- unauthorized voluntary PG actions = 0;
- dice-source violations = 0;
- OOC -> IC knowledge leaks = 0;
- Hosted Multiplayer Notice appears once, not repeatedly;
- commit-window false positives remain low;
- fallback preserves the multiplayer safety contract;
- no claim that hosted mode provides true player-private secrecy.

Human fun, clarity, host-relay friction, latency, spotlight quality and Desire to Return remain **UNKNOWN** until multiplayer actual play.
