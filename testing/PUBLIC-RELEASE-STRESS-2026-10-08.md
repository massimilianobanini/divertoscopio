# DIVERTOSCOPIO PUBBLICO — AUDIT/STRESS TEST STATICO 2026-10-08

**Target:** `massimilianobanini/divertoscopio`, ramo pubblico `main` dopo merge PR #36, commit `35557d795294783e3942951980e389b2358b1f6e`.
**Tipo di evidenza:** API GitHub/lettura dei file correnti + parsing dei riferimenti + controlli incrociati sulle istruzioni + scenari documentali sintetici + verifica deterministica delle soglie XP. **NON è un'esecuzione indipendente delle partite in ChatGPT.**
**Verdetto:** nessun blocker P0 di coerenza documentale riscontrato nei controlli effettuati; due piccole incongruenze editoriali P1 corrette in questa audit PR. **FULL ACTUAL-PLAY RELIABILITY: UNKNOWN / NOT VALIDATED.**

## Risultati riproducibili per area

| Area | Evidenza verificata | Stato |
|---|---|---|
| Repository accessibile via connettore GitHub | `main` pubblico, hash HEAD rilevato, tutti i file attesi recuperati | PASS / API |
| Integrità file | 50 file `.md`/`LICENSE` letti attraverso l'API GitHub | PASS / STATIC |
| Collegamenti Markdown interni | 86/86 riferimenti relativi risolti sulla tree GitHub ricorsiva; 0 mancanti | PASS / STATIC |
| Bootstrap/routing/USER/Master/fallback | 76 controlli di copertura: 75 match letterali, 1 formula semanticamente equivalente verificata manualmente | PASS / CONTRACT-ONLY |
| Nuovi requisiti milestone/archi/varietà/indizi/scenari/ricompense | 36 scenari di copertura documentale: 35 match diretti, 1 formulazione equivalente verificata manualmente (MS-06: milestone narrativa senza level-up) | PASS / CONTRACT-ONLY |
| XP D&D 2014 | 20 soglie cumulative da 0 a 355000 XP ordinate, senza intervalli sovrapposti; 8 casi numerici di boundary (0, 275, 299, 300, 899, 900, 2700, 355000) | PASS / STATIC DETERMINISTIC |
| V0.3.2→V0.3.6 + V0.4 | Documenti del router e dei delta presenti; gerarchia condizionale e fallback indicati | PASS / CONTRACT-ONLY |
| D&D 2024 / SRD 5.2.1 | Adapter separato, niente XP/MILESTONE default 2014 importato; avanza con metodo source/table e rinvia scelta quando non pertinente | PASS / CONTRACT-ONLY |
| Daggerheart / SRD 2.0 | Adapter separato, outcome Hope/Fear a due dimensioni, tracciamento risorse e GM moves source-dependent | PASS / CONTRACT-ONLY |
| MASTER | Diagnosi situazione, repair hierarchy, scenario fit, module prep as diff, navigation-vs-revelation, no inventare house rule | PASS / CONTRACT-ONLY |
| Sicurezza/agenzia/metagaming | File CORE, PLAYER, PROTOCOLS, hotfix includono no fudging, knowledge firewall, OOC pause, source injection, safety dinamica | PASS / CONTRACT-ONLY |
| Multiplayer | Hosted single-chat/host-relay dichiarato, niente account sharing, player-visible non implica pc-known | PASS / CONTRACT-ONLY |
| Feedback | Unico modulo Google Form nel contratto; no survey duplicato e no CTA per sola pausa neutra | PASS / CONTRACT-ONLY |
| GitHub Actions CI | Nessun workflow run segnalato nel repository; verifica non ripetibile automaticamente lato CI | OPEN / NO CI |
| Accesso anonimo fuori dal connettore | Il tentativo di visita pubblica a GitHub e Google Form con lo strumento web disponibile è fallito per limitazioni dell'accesso | NOT VERIFIED |
| Chat indipendenti, gameplay completo, tempi reali, piacere umano | Nessuna nuova prova comportamentale svolta in questo audit | **NOT RUN** |

## Decision tables controllate (NON simulate come comportamento di ChatGPT)

- GIOCA SUBITO + «scegli tutto tu» + nuova avventura D&D 2014 originale e nessun metodo esistente: MILESTONE-STORY prima della prima scena; persistenza nei capitoli.
- GIOCA SUBITO con preferenza parziale o PERSONALIZZA PRIMA/FONDO, 5e 2014 senza fonte: XP default.
- Metodo già stabilito nella campagna, source-defined o scelto esplicitamente: prevale su qualsiasi default del quickstart.
- Milestone `NARRATIVE_ONLY`: conseguenze e ricompense ma non level-up. Milestone `LEVEL_UP`: trigger precommitted, scelte del PG e aggiornamento scheda; niente XP parallelo, niente doppio premio.
- Le scene della prima mini-avventura hanno orizzonte indicativo 4–6, non vincolo; capitoli successivi non hanno quota universale. Pausa reale ≠ fine capitolo; chiusura di unità ≠ progressione automatica.
- Indizi per CAPIRE e piste per PROSEGUIRE sono due assi distinti, con causalità/scope fonte e no clue teleport.
- Vittorie locali durevoli e ricompense pertinenti rimangono pattern situazionali, non garanzie di successo o adattamento arbitrario della fonte.
- Quickstart anti-cliché favorisce varietà funzionale senza garantire unicità assoluta tra chat indipendenti.

## Issue trovate e correzioni nell'audit

**DOC-P1-01 — stato di release non aggiornato:** `testing/ARC-LIFECYCLE-QUICKSTART-VARIETY-2026-10-08.md` ordinava ancora di mantenere la PR candidata se erano stati svolti solo controlli statici, nonostante il successivo merge esplicito nel public `main` via PR #36. Corretto: `PUBLIC IMPLEMENTED / ACTUAL-PLAY OPEN` senza claim di validazione.

**DOC-P1-02 — avanzamento nel test di continuità:** ARC-05 menzionava solo XP, mentre l'attuale «scegli tutto tu» usa MILESTONE-STORY. Corretto: XP **oppure milestone secondo il metodo attivo**. Le prove ARC-09/ARC-10 su XP restano valide per gli altri percorsi/metodi.

**DISCLOSURE-P1-03 — limiti non aggiornati:** `KNOWN-LIMITATIONS.md` non esplicitava la novità 08/10/2026 su milestone automatiche e lifecycle universale ancora non convalidati. Inserito avviso pubblico senza cambiare confidence supporto.

## Limiti metodologici

1. Un modello può ignorare una regola anche quando esiste, specialmente durante conversazioni lunghe, contesti esauriti, conoscenza incompleta e transizioni di scena. Le verifiche statiche non misurano questa probabilità.
2. Senza eseguire nuove conversazioni indipendenti e osservarne i transcript non possiamo stimare la ripetitività effettiva di PG, classi, prime scene né la percentuale di avventure portate a epilogo.
3. I controlli delle soglie XP verificano i numeri documentati, NON una vera risoluzione meccanica/level-up in chat. Non testano features, incantesimi, azioni, combattimenti o dadi effettivamente generati da un modello.
4. Il sistema non espone un harness deterministico/CI che possa imporre ad un LLM il runtime Markdown e produrre una traccia osservabile: PASS DEL CONTRATTO ≠ PASS DEL MODELLO.
5. Il link pubblico del Google Form è contenuto nei documenti, ma accessibilità anonima, invio e registrazione di risposte NON sono stati verificati durante questo audit.

## Gate comportamentale prioritario (ancora DA ESEGUIRE)

**P0 — PLAYER:** 20 avvii in chat pulite («scegli tutto tu») con varietà di classe/razza/obiettivo, tempo fino alla prima decisione e corretto default milestone; 5 avventure giocate fino ad un epilogo, includendo successo anticipato, sconfitta e rifiuto del hook; 3 capitoli consecutivi con checkpoint/ripresa e milestone precommitted e non duplicate.

**P0 — REGOLE:** almeno un combattimento multi-turno D&D 2014 con inventario, HP, action economy, proprietà degli avversari fissate prima; un level-up milestone effettivo con scelte build/PF; una partita XP non quickstart per verificare che il default sia ancora applicato.

**P1 — MASTER / PUBLISHED:** una vera fonte d'avventura accessibile, fase successiva con H9, P0-04 doppia coverage e minimum-delta repairs; un caso con input ostile/source prompt-injection e un caso di correzione di source/canon.

**P1 — SISTEMI / GRUPPI:** D&D 2024 e Daggerheart ognuno con creazione PG, almeno un round e una progressione/ripresa; hosted multiplayer 3+ PG con due azioni attribuite in un turno, dadi diversi e spoiler firewall.

**P1 — CHIUSURA / FEEDBACK:** verificare Form su un browser reale, ritorno dopo stop neutro senza survey, una sola CTA dopo unità significativa e nessuna ripetizione per chi prosegue immediatamente.

Raccogli per ogni run: modello/modalità, URL o timestamp, solo/hosted, percorso scelto, latenza, scene significative, outcome, advancement_mode, rewards, errori spontanei, correction burden e feedback umano. Non dichiarare «TUTTO FUNZIONANTE» finché le prove P0 non sono state completate.

## Conclusione

**STATIC: PASS senza blocker P0 riproducibili sui contratti esaminati. ACTUAL PLAY: OPEN.** La pubblicazione corrente può essere usata come Public Stress Test sperimentale, ma non autorizza claim di affidabilità completa o durata <1 minuto. Le correzioni di questo audit sono documentali; non alterano CORE, BOOTSTRAP, router, protocolli, adapter, algoritmi o il feedback Form.