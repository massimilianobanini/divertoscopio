# SOURCE PROMOTION / SCOPED MILESTONE REGRESSION — 2026-10-08

Stato: **IMPLEMENTATO SUL MAIN PUBBLICO DALL'08/10/2026 — STATICAMENTE CONTROLLATO; NON HUMAN-PLAY VALIDATED.** La selezione di priorità P0/P1 è operativa e circoscritta, non una classificazione finale dell'intero corpus.

## Ambito e verifiche di coerenza

- *The Alexandrian*, metodologia primaria di Justin Alexander. Audit canonico Doc15 [Biblioteca GDR Esterna](https://docs.google.com/document/d/1RiHotB_1Vf9t5CVaKNAGh25N-dt_XOzWd7wo5cMvNMA/edit), cluster A1/A2/A4: Node-Based Scenario Design, Three Clue Rule, How to Prep a Module, The Lion, the Witch and the Scenario Hook, How to Remix an Adventure, The Rachov Principle, Smart Prep. L'audit dell'intero dominio NON è ancora concluso: C/D e F–N/J restano in diversi stati di completamento. La precedente scelta di HOLD fino alla deduplica globale è qui convertita SOLO in **promozione sperimentale mirata** su richiesta, senza claim di completezza.
- Pattern narrativi opzionali verificati: successi locali durevoli, trasposizione funzionale degli scenari e ricompense pertinenti ai comportamenti/interessi osservati. Nessuna meccanica proprietaria, testo o ambientazione di terze parti incorporati.
- Repository CORE/PLAYER/MASTER/PROTOCOLS/PATTERN-INDEX: confronto di copertura e anti-duplicazione fra contratti operativi, adapter e pattern facoltativi.

## Implementati: P0 (priorità funzionale/reliability)
1. **Milestone per FULL DELEGATION nel quickstart**: PLAYER GIOCA SUBITO → "scegli tutto tu" in nuova avventura originale D&D 2014/SRD 5.1 usa MILESTONE-STORY se nessuna autorità più forte dispone diversamente. Conservarlo nei capitoli futuri; milestone narrative ≠ livelli automatici; XP resta per gli altri default.
2. **Convergenza narrativa di ogni avventura e capitolo**: H5A/H5/H11/H9 dalla PR #35: domanda locale, orizzonte soft (4–6 scene soltanto prima mini-avventura originale), exit/stagnation checks, distinzione fra fine sessione e fine capitolo, handoff di stato/ricompense/progressione/Form/pause o continuazione.
3. **The Alexandrian — REVELATION ≠ NAVIGATION**: P0-04 e Pattern Index distinguono indizi che permettono di CAPIRE da piste che permettono di PROSEGUIRE; copertura e accessibilità causale dei choke point.
4. **The Alexandrian — ACTIVE PREMISE LEGIBILITY**: un'apertura deve mostrare un'opportunità percepibile e una scelta vera, non soltanto atmosfera; nessun hook obbligatorio.
5. **LOCAL HOPE / DURABLE VICTORY — vittorie locali durevoli**: Library only, successi locali reali e conseguenze durevoli nelle esperienze che lo consentono; non promettere successo né negare il fallimento.

## Implementati: P1 (rafforzamenti contestuali)
6. **The Alexandrian — MODULE PREP AS DIFF**: PROTOCOLS/MASTER/TOOLBOX: fonte disponibile come baseline, delta ancorato, rettifiche trasparenti e rischio di contraddizione.
7. **The Alexandrian — SITUATION-INDEXED WORKING VIEW**: retrieve solo attori/luoghi/eventi/indizi pertinenti alla situazione invece di leggere come copione il sommario della fonte.
8. **The Alexandrian — SCENARIO STRUCTURE FIT + PROACTIVITY-SENSITIVE HOOKS**: non imporre un graph/timeline a ogni scenario; più appigli per i giocatori incerti, meno hook coercitivi per quelli proattivi.
9. **FUNCTION-PRESERVING SCENARIO TRANSPOSITION — trasposizione funzionale**: Library only, trasforma fiction mantenendo funzione giocabile e dichiarando house rule se si cambiano meccaniche.
10. **EARNED REWARD–PLAYER VALUE FIT — ricompense pertinenti**: Library only, ricompense pertinenti e guadagnate, con preferenze a confidence e senza retcon.
11. **Quickstart diversity**: PG/obiettivi/aperture meno stereotipati, non solo cambi di nomi e mai unicità garantita fra chat senza memoria (PR #35).

## Già implementati PRIMA — nessuna duplicazione
- Conoscenza del Master / conoscenza del PG / contenuti visibili al giocatore; apertura giocabile; identità di luoghi, attori e clock; limiti e safety.
- The Alexandrian: clue redundancy/Three Clue Rule come euristica, prep situations not plots, causal NPC/faction state, no quantum clues, no hidden railroading, JIT depth, meaningful choice, theatrical roleplay vs competence and fail-state.
- Regole di classe/razza/avanzamento di setting o sistema non diventano principi generici.

## NON ancora implementati: P2 / riserva (deliberata)
- **Alexandrian — strutture situazionali specializzate**: Xandering-the-Dungeon topology tooling; mappe operative/visual overlay; scenari multilivello e strumenti per visualizzazione della rete di nodi. Sono facoltativi e serve un beneficio misurabile.
- **Alexandrian — cue/tempo situazionali**: facilitation timer vs fiction clock, iniziativa leggera per dialoghi in combattimento, open-table variable attendance/team formation, event timeline e dormant-world simulation. Non è prova che ogni campagna ne abbia bisogno.
- **Alexandrian — piattaforma deterministica**: graph engine persistente, spatial typed overlay, node retrieval, storico eventi + working set automatizzato (oltre ai contratti testuali attuali).
- **Alexandrian — ricerca ancora aperta**: passaggi non completati dell'audit full-domain (inclusi video cross-medium J, sezioni D/F–N e orphan sweep, in base allo stato attuale del ledger); niente claim "tutte le priorità dell'intero Alexandrian".
- **P2 opzionali — risorse e luoghi**: rendere scarsità, baratto, luoghi speciali, reinterpretazione di antagonisti, origini condivise e ricompense non meccaniche più giocabili quando i test ne dimostrano il valore; alcuni principi sono già presenti genericamente.
- **Meccaniche specifiche di singole ambientazioni — da NON importare universalmente**: limitazioni della magia, classi, talenti, percorsi speciali o altre regole contestuali richiedono fonte, licenza/permesso e accordo del tavolo.
- **Evidenza da raccogliere**: affidabilità reale su sessioni complete, varietà cross-chat, progressione/level-up lunga, Fun/Desire to Return. STATIC PASS NON equivale a convalida comportamentale.

## Regressioni da eseguire in clean-room

- **MS-01** — Quickstart "scegli tutto tu" 5e 2014, nuova storia originale: MILESTONE-STORY prima del play, zero domande nuove, nessun XP.
- **MS-02** — GIOCA SUBITO "solo fantasy" 5e 2014 senza delega completa: XP default.
- **MS-03** — PERSONALIZZA PRIMA con "scegli tu i dettagli": XP default, salvo preferenza esplicita.
- **MS-04** — Avventura pubblicata con fonte XP oppure altro metodo: autorità della fonte/utente, non override automatico.
- **MS-05** — Campagna in corso con XP, "scegli tutto tu" per una nuova scena: XP non resettato.
- **MS-06** — Mini-avventura con milestone NARRATIVE_ONLY ottenuta: conseguenza/ricompensa narrativa, livello invariato.
- **MS-07** — Successo importante con milestone LEVEL_UP precommitted: avanzamento dovuto con scelte di build al giocatore; no doppio premio.
- **MS-08** — Fallimento o abbandono obiettivo: nessun level-up non autorizzato, outcome significativo e nuova scelta reale.
- **MS-09** — Passaggio a capitolo 2 e 3: metodo milestone, progressi/traguardi già attribuiti, equipaggiamento, relazioni e cronologia persistono.
- **AL-01** — Tre clue spiegano tutto, zero actionable lead: Revelation PASS / Navigation FAIL; proporre correzione causale senza teletrasporto.
- **AL-02** — Tre piste consentono di esplorare ma nessuna prova chiarisce il mistero: Navigation PASS / Revelation FAIL.
- **AL-03** — Un clue rivela verità E accesso: segnalare doppio ruolo se supportato da fiction; altrimenti no.
- **AL-04** — Apertura atmosfera-only: aggiunge opportunità concreta, lasciando rifiuto/alternativa possibile.
- **AL-05** — Modulo già leggibile, due errori da correggere: diff con anchor e impact; niente riscrittura integrale.
- **AL-06** — Scenario sociale/di viaggio: sceglie struttura appropriata, non node graph forzato.
- **AL-07** — Gruppo proattivo ignora hook: prosegue senza coercizione; gruppo esitante riceve leve leggibili.
- **PATTERN NARRATIVI** — Applicare OPT-01–13 di `testing/OPTIONAL-NARRATIVE-PATTERNS-2026-10-08.md`. **ARC/VAR** — Applicare ARC-01–15 e VAR-01–05 nel test dedicato.

## Release gate

Confronto e readback statico su branch; verificare che BOOTSTRAP, CORE, H11 e feedback pubblico restino intatti. La pubblicazione del contratto non garantisce esecuzione nelle nuove chat; i test citati vanno registrati come NOT RUN finché non sono giocati.
