# PATTERN NARRATIVI OPZIONALI — SEI CRITERI E TEST DI REGRESSIONE

Stato: **3 pattern LIBRARY ONLY già presenti sul main pubblico dall'08/10/2026; NON VALIDATI IN ACTUAL PLAY**. I test sotto sono ancora da eseguire. Questa scheda verifica tre capacità autonome del Divertoscopio — **vittorie locali durevoli**, **trasposizioni di scenari che mantengono funzioni e scelte** e **ricompense pertinenti e guadagnate** — insieme a tre invarianti già coperte. Non è un adapter né introduce nuove regole di sistema.

## Copertura funzionale dei sei criteri (confronto con il CORE precedente)

| Criterio | Presenza esistente | Decisione |
|---|---|---|
| 1. Successo locale, speranza, vittorie durevoli | `core/CORE.md`: meaningful choice, causal integrity, failure/state; `library/PATTERN-INDEX.md`: END-STATE DELTA, EARNED PAYOFF, IRREVERSIBILITY MARK | **Affinare in Library**: nei giochi duri, evitare successi sempre svuotati da escalation automatica |
| 2. DM truth / PC known / player visible | `core/CORE.md`: EPISTEMIC FAIRNESS; `protocols/PROTOCOLS.md`: REVELATIONS, PC snapshot; `player/PLAYER.md`: hosted multiplayer player-visible != PC-known | **Già coperto**: nessuna nuova regola |
| 3. Aprire con situazioni giocabili | `BOOTSTRAP.md`, `player/PLAYER.md`, `library/PATTERN-INDEX.md`: GIOCA SUBITO, STRONG START, OUTCOME OPEN, tempo alla prima decisione | **Già coperto**: niente nuovi menu/gate |
| 4. Trasposizione creativa di strutture d'avventura | `library/MASTER-CRAFT-TOOLBOX.md`: RESKIN/REFLAVOR WITH MECHANICAL FIREWALL; `core/CORE.md`: SOURCE/CAUSAL INTEGRITY | **Affinare in Library**: preservare le funzioni dell'esperienza oltre alla sola estetica/meccanica |
| 5. Ricompense commisurate ai gusti del giocatore | `core/CORE.md`: adaptive player model; `library/PATTERN-INDEX.md`: ACTIONABLE REWARD, EARNED PAYOFF | **Affinare in Library**: preferenze con confidence e ricompense guadagnate, senza compiacenza |
| 6. Luoghi con utilità, rischio e agenti | `master/MASTER.md`: COHESION AUDIT, SESSION PREP PACK; `library/PATTERN-INDEX.md`: MINIMUM VIABLE SETTLEMENT IDENTITY, WORLD CLOCK; `protocols/PROTOCOLS.md`: LOCATIONS/state | **Già coperto**: nessuna nuova regola |

Tre pattern aggiunti in `library/PATTERN-INDEX.md`, classificati **LIBRARY ONLY**. Non sono stati modificati CORE, runtime, player flow, bootstrap o adapter. Richiamare al massimo 1–3 pattern pertinenti, senza questionari aggiuntivi. Non generare automaticamente contenuto o complessità.

## Casi di regressione — criteri di PASS/FAIL

**OPT-01 — Speranza locale senza vittoria garantita.** Un gruppo accetta una campagna cupa; il potere centrale è fuori scala. PASS: esiste un obiettivo locale su cui le scelte possono incidere e un modo leggibile di tentarlo, ma fallimento e conseguenze restano possibili. FAIL: plot armor, successo imposto, oppure tutte le scelte prive di effetti.

**OPT-02 — Non cancellare una vittoria.** Dopo avere salvato legalmente un villaggio, i PG ripartono. PASS: gli abitanti sono salvi nello stato CANON; eventuale nuova minaccia ha cause e tempi autonomi e non rende fittizia la vittoria. FAIL: un nuovo attacco ad hoc annulla immediatamente il risultato solo per conservare disperazione.

**OPT-03 — Fallimento permesso.** I PG ignorano l'allarme, e una fazione nemica dispone già dei mezzi per intervenire. PASS: la minaccia procede causalmente, anche con perdita irreversibile. FAIL: salvataggio gratuito in nome della speranza.

**OPT-04 — Trasposizione funzionale.** Un Master vuole trasformare un dungeon esplorativo in una festa diplomatica. PASS: identifica quali funzioni interessavano (accessi, ostacoli, indizi, pressione, alternative), ne conserva opportunità e rischi in forma diversa, senza copione fisso. FAIL: sostituisce descrizioni ma perde la possibilità di esplorare e decidere.

**OPT-05 — Niente house rule invisibile.** Il reskin comporta nuove capacità, numeri o modifiche al sistema. PASS: presenta la modifica come proposta e richiede accordo ove pertinente. FAIL: spaccia le modifiche meccaniche per semplice atmosfera.

**OPT-06 — Rispetto dell'intento.** Il Master chiede una correzione minima, non un totale rifacimento. PASS: offre prima REBIND/DEEPEN/ACTIVATE e propone trasposizione solo se utile; FAIL: riscrive l'avventura per mostrare creatività.

**OPT-07 — Ricompensa pertinente e guadagnata.** Il giocatore ha mostrato più volte interesse per esplorazione/scoperte e conquista un obiettivo con esito ancora OPEN. PASS: l'esito può aprire un'informazione/area accessibile causalmente, evitando premi automatici. FAIL: ricompensa casuale o concessa solo per assecondare la preferenza.

**OPT-08 — Fonte e loot bloccati.** Avventura pubblicata con tesoro già CANON; il giocatore desidera qualcosa di diverso. PASS: preserva il tesoro e, se utile, prepara opportunità future autorizzate dalla fiction. FAIL: cambia retroattivamente il loot.

**OPT-09 — Non overfittare.** Il giocatore apprezza un mistero, ma non ha altre preferenze osservate. PASS: mantiene confidence provvisoria e varietà, senza definire il giocatore come 'solo investigativo'. FAIL: tutti gli incontri e premi diventano investigativi.

**OPT-10 — Conoscenza a tre livelli.** Il Master sa di un passaggio segreto, il PG non ne ha indizi, il giocatore ha visto una mappa. PASS: nessuno spoiler o indizio teleportato; conoscenza del PG ottenuta da vie plausibili. FAIL: suggerisce automaticamente l'accesso come ovvio.

**OPT-11 — Avvio rapido intatto.** Utente: `Iniziamo` → `Giocatore` → `Gioca subito` → `scegli tutto tu`. PASS: il GATE DI RAGIONAMENTO non viene anticipato e nessuna nuova domanda sui pattern precede la prima decisione giocabile. FAIL: interrogazione preventiva su speranza, premio o struttura.

**OPT-12 — Luogo giocabile senza superprogettazione.** Il Master chiede una cittadina in una one-shot. PASS: identità, tensione, attori/pressioni e pochi luoghi rilevanti; tracciamento solo se decisionale. FAIL: enciclopedia, clock e contabilità per ogni edificio.

**OPT-13 — Autonomia emotiva e sicurezza.** Gruppo vuole una tragedia senza speranza obbligatoria. PASS: il pattern LOCAL HOPE resta facoltativo, nessuna emozione viene prescritta, stop/skip rimangono disponibili. FAIL: obbligo di redenzione/successo o negazione del fallimento.

## Gate prima di considerare validati o ampliare i pattern già pubblicati

1. **Static check**: testi presenti, ancore univoche, nessuna regressione di bootstrap; nessun CORE o adapter modificato.
2. **Clean-room comportamento**: eseguire OPT-01–13 in una chat nuova, con almeno un caso PLAYER e un caso MASTER, registrando effettivo PASS/FAIL; audit statico non equivale a test comportamentale.
3. **Micro-pilot comparativo**: baseline vs pattern quando pertinenti. Raccogliere FUN 0–10, desire to return 0–10, tempo alla prima scelta, latenza per turno, errori di causalità/continuity, scelta percepita e lavoro Master. Non aggiungere questionari nel bootstrap; usare feedback già previsto.
4. **Decisione**: confermare/estendere come capacità validate soltanto i pattern che migliorano esiti misurati senza rallentare l'avvio o introdurre false scelte, metagaming o modifiche tacite al ruleset. La presenza sulla Library pubblica non soddisfa questo gate.

**Confine legale:** pattern e test qui descritti sono procedure astratte di gioco; non costituiscono autorizzazione a ripubblicare testi, illustrazioni, mappe, ambientazioni o meccaniche di terze parti. Ogni riuso di materiale protetto richiede verifica delle condizioni di licenza.
