# EXPERT CLEAN-ROOM TEST — Closed Pilot V0.3

## Scopo

Questo protocollo serve a Master, giocatori, designer, reviewer e divulgatori esperti che vogliono **stressare il Divertoscopio senza insegnargli prima come superare il test**.

Non è specifico per un creator, un ruleset o una piattaforma AI.

Obiettivi:
- misurare ciò che il Divertoscopio fa spontaneamente quando riceve soltanto il repository + una richiesta naturale;
- separare **divertimento** da **accuratezza/source fidelity**;
- misurare quanta correzione/rescue richiede all'esperto;
- distinguere failure del framework, failure dell'adapter, failure di accesso alle fonti e failure del modello AI sottostante;
- permettere, solo dopo la prova naturale, un red-team intenzionale.

Principio:

> **EXPERT RESCUE ≠ BASELINE PASS.**

Se l'esperto corregge l'AI e la sessione poi funziona, la correzione è evidenza utile, non va cancellata dal risultato.

---

# FASE A — NATURAL CLEAN-ROOM

## 1. Parti da una chat nuova

Non usare una conversazione o workspace che conosce già:
- il progetto;
- i suoi failure mode;
- gli stress test;
- le conclusioni della ricerca;
- le tue correzioni precedenti.

Se la piattaforma mantiene memoria tra chat, istruzioni di progetto/workspace o contesto persistente e hai già lavorato sul Divertoscopio, usa quando possibile un contesto realmente fresco/temporaneo oppure annotalo come limite del clean-room.

Fornisci inizialmente soltanto:

`https://github.com/massimilianobanini/divertoscopio`

e una richiesta che useresti davvero.

Esempi:

> Iniziamo. Voglio giocare.

> Iniziamo. Voglio giocare con Daggerheart.

> Iniziamo. Voglio giocare con le regole D&D 2024.

> Iniziamo. Sono un Master e voglio preparare la prossima sessione.

Non leggere prima questo protocollo insieme all'AI e non incollarle i failure mode.

## 2. Non primare il risultato

Durante questa prima prova:
- non dire all'AI quali errori temi;
- non anticipare differenze fra edizioni;
- non ricordarle i guardrail del repository;
- non darle la soluzione prima che il problema emerga;
- non trasformare volontariamente ogni scena in un test artificiale.

Usa il sistema come lo useresti normalmente.

Se possiedi materiale commerciale necessario alla precisione scena-per-scena, puoi fornirlo legalmente come faresti in uso reale. Annota semplicemente quale fonte hai dato alla chat.

## 3. Correggi soltanto come faresti davvero

Non devi lasciare che una sessione si rovini per mantenere il test “puro”.

Se l'AI sbaglia:
1. correggila come faresti in un uso reale;
2. annota la correzione;
3. osserva se:
   - riconosce l'errore;
   - corregge lo stato;
   - mantiene la correzione successivamente;
   - spiega la provenance quando materialmente utile;
   - ricade nello stesso errore.

La necessità di rescue dell'esperto è parte del risultato.

## 4. Non leggere i file di testing specifici prima della prima prova

Per la Fase A evita, se possibile:
- `adapters/*/TESTING.md`;
- questo file dopo aver già iniziato la chat di prova;
- stress test interni o liste di failure mode.

Puoi conoscere il ruleset quanto vuoi: il test riguarda il Divertoscopio, non la tua ignoranza.

---

# COSA REGISTRARE NELLA FASE A

Non serve compilare un questionario durante il gioco.

Dopo la prova, conserva quando possibile:

## A. Contesto
- AI / piattaforma / modello, se conoscibile;
- PLAYER / MASTER / BOTH;
- sistema + edizione;
- adapter caricato, se visibile;
- adventure = published / original / hybrid;
- solo / gruppo / supporto live;
- durata approssimativa;
- fonti aggiuntive fornite alla chat.

## B. Risultato umano
- **FUN 0–10**;
- **DESIRE TO RETURN 0–10**;
- cosa migliore;
- principale cosa da cambiare.

## C. Diagnostica osservabile
Quando il transcript lo permette:
- source/rules fidelity;
- contaminazioni fra sistemi/edizioni;
- stato/memoria;
- agency / player-action takeover;
- false choice / hidden railroad / fudging;
- causalità e conseguenze;
- pacing;
- spoiler / knowledge leak;
- rule lookup/provenance;
- correction burden;
- prep burden, per Master;
- closure/resume.

**FUN ≠ FIDELITY.**

Una sessione può essere molto divertente e contemporaneamente avere errori di regole importanti. Registra entrambi.

## D. Correction burden

Conta o stima separatamente:
- correzioni di regole;
- correzioni di stato/canon;
- reminder di istruzioni già date;
- richieste di meccaniche che l'AI avrebbe dovuto attivare;
- ripristini di agency;
- reindirizzamenti verso source/adapter;
- altri momenti in cui il tester diventa hidden GM/debugger.

Non trasformare automaticamente il numero in un voto unico: una correzione critica può pesare più di cinque micro-correzioni.

---

# FASE B — RED TEAM INTENZIONALE

Falla **solo dopo aver chiuso la Fase A**.

Ora puoi leggere:
- questo protocollo;
- `library/PATTERN-INDEX.md`;
- `library/MASTER-CRAFT-TOOLBOX.md`;
- il file di testing dell'adapter pertinente (`adapters/dh-srd20/TESTING.md` oppure `adapters/5e-srd521/TESTING.md`).

Apri preferibilmente una **nuova chat** e attacca deliberatamente i punti che conosci meglio.

Categorie utili:

## Source & rules
- regola inesistente presentata con sicurezza;
- source gap riempito da memoria generica;
- contaminazione fra edizioni;
- RAW / optional / house / imported confusi;
- specific rule resa globale;
- correzione ricevuta ma poi dimenticata.

## Agency & causality
- falso bivio / quantum content;
- esito preparato attribuito falsamente alla scelta;
- NPC/plot armor;
- active opposition resa inutile;
- hidden fudging;
- AI che decide volontà/emozioni/azioni del PG.

## Failure
- fail-forward importato dove non esiste;
- fallimento cosmetico;
- “fail, but the same planned scene happens anyway”;
- retry trattato come reset.

## Playstyle & system-fit
- etichetta “OSR / narrative / cinematic / tactical / sandbox” trasformata in regole inventate;
- abitudini di un sistema importate in un altro;
- heavy bending nascosto invece di dichiarare il trade-off;
- adventure design incompatibile trattato come neutrale.

## Social & challenge locus
- eloquenza del player scambiata per eloquenza del PG;
- player timido penalizzato per un PG socialmente competente;
- acting premiato meccanicamente senza regola/contratto;
- puzzle che richiede alla persona una competenza che il PG possiede già.

## Prep & GM support
- “zero prep” consigliato dogmaticamente;
- source/stats ignorati e poi inventati live;
- over-prep di rami che i giocatori non intendono seguire;
- supporto AI che crea più lavoro di quanto ne tolga.

## Continuity
- morte/TPK = campagna automaticamente finita;
- morte/TPK = campagna automaticamente continua ignorando il contratto;
- conoscenze private del PG morto trasferite al successore;
- mondo/fazioni resettati senza causa.

Il red-team serve a trovare failure, non a costruire una situazione impossibile che nessun Master o sistema dovrebbe gestire.

---

# CLASSIFICAZIONE DEL RISULTATO

Per ogni finding usa, quando possibile:

- **PASS**
- **FAIL**
- **PARTIAL**
- **UNKNOWN**
- **NOT APPLICABLE**

E separa sempre:

- **DECLARED** — detto dal tester;
- **OBSERVED** — visibile nella chat/sessione;
- **INFERRED** — interpretazione;
- **CONFIDENCE** — LOW / MEDIUM / HIGH.

Non trasformare una preferenza personale in una regola universale.

---

# ATTRIBUIRE IL FAILURE AL LIVELLO GIUSTO

Prima di correggere il framework, prova a distinguere:

1. **ACCESS FAILURE**  
   L'AI non ha letto repository/file/source richiesti.

2. **ROUTING FAILURE**  
   I file esistevano ma non sono stati caricati quando servivano.

3. **FRAMEWORK FAILURE**  
   Il comportamento pubblico del Divertoscopio era sbagliato o insufficiente.

4. **ADAPTER FAILURE**  
   Il problema riguarda un ruleset/edizione specifica.

5. **MODEL EXECUTION FAILURE**  
   Le istruzioni pubbliche erano presenti e sufficientemente chiare, ma il modello non le ha seguite.

6. **SOURCE AVAILABILITY FAILURE**  
   La precisione richiesta dipendeva da materiale non fornito/non accessibile.

7. **TABLE-FIT / PREFERENCE MISMATCH**  
   Nessun errore oggettivo necessario: semplicemente l'esperienza non era quella desiderata.

Se non è distinguibile, usa **UNKNOWN** invece di inventare la causa.

---

# FASE C — A/B OPZIONALE

Per tester esperti è utile, ma non obbligatoria.

Confronta due **chat nuove** con la stessa AI/modello, gli stessi setting rilevanti e, per quanto possibile, lo stesso source pack e lo stesso scenario iniziale:

### A — AI generalista
Nessun Divertoscopio.

### B — AI + Divertoscopio
Repository + richiesta equivalente.

Non cercare di rendere i due run deterministicamente identici: il GDR produce divergenza. Confronta invece categorie:

- Time to First Play;
- agency;
- source fidelity;
- state consistency;
- correction burden;
- pacing;
- prep burden;
- FUN;
- DESIRE TO RETURN.

Il confronto A/B non dimostra causalità perfetta da un singolo run, ma aiuta a capire se il framework sta aggiungendo valore oltre alle capacità del modello sottostante.

---

# COSA NON FARE

- Non comunicare all'AI l'elenco dei failure mode prima della Fase A.
- Non correggere retroattivamente il transcript per far sembrare il run migliore.
- Non classificare una sessione come PASS soltanto perché, dopo molte correzioni dell'esperto, è diventata buona.
- Non classificare come FAIL una preferenza estetica senza distinguerla da un errore.
- Non usare un test su un sistema per dichiarare validati tutti gli altri adapter.
- Non confondere static stress, clean-room, actual play e red-team: sono evidenze diverse.
- Non pubblicare materiale commerciale o privato soltanto per dimostrare un failure.

---

# OUTPUT MINIMO CONSIGLIATO

A fine prova basta anche questo:

```
ROLE:
AI / MODEL:
SYSTEM / EDITION:
MODE: NATURAL | RED-TEAM | A/B
DURATION:

FUN: /10
DESIRE TO RETURN: /10

BEST THING:
MAIN CHANGE:

RULE/SOURCE CORRECTIONS:
STATE/CANON CORRECTIONS:
AGENCY RESCUES:
OTHER RESCUES:

MOST IMPORTANT PASS:
MOST IMPORTANT FAIL:

EVIDENCE: DECLARED | OBSERVED | INFERRED
CONFIDENCE:
```

Se il tester condivide il transcript, gran parte della diagnostica può essere ricavata senza aggiungere altre domande.

---

# RELAZIONE CON I TEST DEGLI ADAPTER

Questo file è il protocollo **generale**.

Per failure mode specifici:
- Daggerheart: `adapters/dh-srd20/TESTING.md`
- D&D 2024 / SRD 5.2.1: `adapters/5e-srd521/TESTING.md`

Ordine raccomandato per un esperto:

`NATURAL CLEAN-ROOM → eventuale FEEDBACK → RED TEAM SPECIFICO → eventuale A/B`

Non leggere il test specifico dell'adapter prima del natural clean-room se vuoi preservare il valore della prima prova.
