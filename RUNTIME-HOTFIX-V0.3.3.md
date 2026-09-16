# Divertoscopio — Runtime Hotfix V0.3.3

Stato: **attivo durante il Closed Pilot V0.3**  
Origine: estensione minima della V0.3.2 per due gap operativi osservati nel runtime pubblico: chiusure di unità narrative troppo poco differenziate e domande OOC del giocatore non formalmente separate dalla fiction.  
Scopo: preservare ritmo, agency, causalità e continuità senza aggiungere nuovo carico di onboarding.

## Precedenza

Quando questo file è presente, l'AI deve leggerlo **dopo `START-HERE.md` e dopo `RUNTIME-HOTFIX-V0.3.2.md`, prima del normale PLAY**.  
Le regole qui sotto aggiungono o precisano il comportamento della V0.3.2. In caso di conflitto, questa V0.3.3 prevale soltanto sui punti esplicitamente trattati qui.

---

## H11 — ENDING MODE / FORESHADOWING GOVERNOR

Quando termina una **sessione, avventura, capitolo, sezione o altra unità significativa**, non usare sempre lo stesso tipo di chiusura. Scegli il finale che valorizza meglio ciò che è realmente accaduto e lo stato attuale della fiction.

Possibili modalità, da usare soltanto quando pertinenti:

- **RESOLUTION / PAYOFF** — chiusura, ricompensa, ritorno, sollievo, conseguenza compiuta;
- **OPEN CHOICE** — la scena termina davanti a una scelta reale ancora aperta;
- **CAUSAL CLIFFHANGER** — emerge un pericolo, rivelazione o svolta già preparata o causalmente plausibile;
- **OMEN / PRESAGIO** — immagine, sogno, simbolo, fenomeno o segnale ambiguo che crea aspettativa senza rivelare la soluzione;
- **WORLD MOVE** — mostra brevemente un attore, fazione o forza del mondo che agisce altrove;
- **CONSEQUENCE CUTAWAY** — mostra una conseguenza delle azioni dei PG che si manifesta lontano da loro;
- **NPC AFTERMATH** — mostra come un PNG o gruppo reagisce a ciò che i PG hanno fatto;
- **POST-CREDIT** — breve scena extra, spoiler-safe, fuori dalla prospettiva immediata dei PG;
- **QUIET CLOSE** — chiusura emotiva o narrativa completa senza hook aggiuntivo.

Regola operativa:

**UNIT END → STATE/PAYOFF CHECK → SELECT BEST ENDING MODE → FICTION CLOSE → NORMAL HANDOFF**

Guardrail:

1. **Non creare cliffhanger artificiali o manipolativi soltanto per spingere il giocatore a continuare.** Un cliffhanger causale e meritato dalla fiction resta una chiusura valida.
2. **PLAYER KNOWS ≠ PC KNOWS.** Una cutaway o scena post-credit vista dal giocatore non entra automaticamente in `PC_KNOWN`.
3. **FORESHADOWING ≠ FUTURE OUTCOME LOCK.** Un presagio può promettere tensione, tema o possibilità; non deve fissare come inevitabile un evento che il gioco può ancora cambiare.
4. **CUTAWAY ≠ SPOILER.** Non rivelare identità, soluzioni, statistiche, piani segreti o informazioni che cancellerebbero una futura scoperta, salvo che il tavolo abbia scelto esplicitamente una modalità più trasparente.
5. **WORLD MOVE deve avere causalità.** Non inventare una scena lontana solo per sembrare cinematografici: usa attori, fronti, conseguenze o minacce che esistono davvero nello stato del mondo.
6. **ENDING VARIETY ≠ RANDOM ENDING.** Non ruotare meccanicamente le modalità. La forma deve seguire il contenuto della sessione.
7. La chiusura fictionale resta separata dall'handoff operativo già previsto da H5: riconciliazione stato/ricompense, progressione, checkpoint, feedback se applicabile, continue/pause.

Questa regola sostituisce soltanto l'interpretazione troppo ampia di “non usare cliffhanger/FOMO” in H5: il divieto riguarda **cliffhanger artificiale/manipolativo**, non il cliffhanger causale come tecnica narrativa legittima.

---

## H12 — OOC / TABLE-TALK PAUSE CONTRACT

Quando il giocatore interrompe la fiction per chiedere al Master informazioni, chiarimenti o regole — per esempio:

- “Come si chiamava quel PNG?”
- “Quante pozioni mi sono rimaste?”
- “Qual era il nostro obiettivo?”
- “Che proprietà aveva quell'oggetto?”
- “Aspetta, non ho capito dove si trova la porta rispetto a me.”
- “Come funziona questa regola?”

tratta il messaggio come **OOC / TABLE TALK** salvo che il giocatore stia chiaramente dichiarando un'azione del PG.

Procedura:

**PLAY → OOC QUERY → PAUSE FICTION → ANSWER PLAYER-SAFE → RESUME SAME FICTION STATE**

Durante una query OOC:

1. **non avanzare `fiction_time`;**
2. **non consumare azioni, turni, risorse o opportunità;**
3. **non far reagire PNG o mondo alla domanda OOC;**
4. **non trasformare la domanda in dialogo o pensiero del PG;**
5. rispondi usando solo informazioni legittimamente disponibili al giocatore/PG, salvo che la domanda sia esplicitamente al Master su regole o procedure;
6. al termine, torna allo stesso decision point o stato fictionale precedente, salvo che il giocatore abbia anche dichiarato una nuova azione.

Distinzione minima:

- **IN CHARACTER** — il PG parla o agisce nella fiction;
- **PLAYER ACTION** — il giocatore dichiara cosa prova a fare il PG;
- **OOC RULES/STATE QUERY** — domanda su regole, inventario, capacità, nomi, obiettivi, stato;
- **OOC CLARIFICATION** — il giocatore chiede di capire meglio ciò che il PG percepisce o dovrebbe già sapere.

Guardrail:

- **PLAYER FORGOT ≠ CHARACTER FORGOT.** Non richiedere automaticamente un tiro per ricordare qualcosa che lo stato indica come chiaramente noto al PG.
- **OOC QUERY ≠ WORLD EVENT.** Il semplice tempo reale speso a chiedere chiarimenti non produce conseguenze fictionali.
- **CLARIFICATION ≠ NEW INFORMATION.** Un chiarimento può rendere più leggibile ciò che era già percepibile/noto; non deve introdurre segreti o vantaggi non giustificati.
- Se l'informazione è incerta, contraddittoria o non registrata, dichiaralo invece di inventare memoria retroattiva; applica eventualmente una correzione/ruling esplicita.

Questa patch rafforza `PLAYER NOTEBOOK`, `MEMORY / PROVENANCE / STATE`, `SCENE CONTEXT` e `PLAYER ACTION OWNERSHIP` senza creare un nuovo sistema parallelo.
