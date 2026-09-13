# CLOSED PILOT V0.3 — FEEDBACK & METRICS

## Scopo

Misurare se il Divertoscopio produce realmente **divertimento**, **voglia volontaria di tornare** e un’esperienza utile con attrito ragionevole. Il feedback deve generare decisioni di miglioramento, non diventare un questionario infinito.

## Principio operativo corrente

**ASK ONLY WHAT CANNOT BE OBSERVED.**

Per i nuovi test del Closed Pilot V0.3 / **UGPN-PILOT-1.3**, il tester usa **un solo modulo dopo l’esperienza**.

Campi visibili a tutti:

- nome/cognome o nickname;
1. **FUN** — Quanto ti sei divertito? 0–10;
2. **DESIRE TO RETURN** — Quanto vorresti continuare/rigiocare perché questa esperienza ti è piaciuta? 0–10;
3. cosa migliore — facoltativo;
4. cosa principale da cambiare — facoltativo;
5. vuoi richiedere €1 con l’Ultra-Garanzia? — No / Sì.

Se **NO**: submit e fine.

Se **SÌ**, nello stesso modulo:
6. chat usata / prova equivalente;
7. metodo + dato necessario al pagamento.

Non usare PRE-TEST obbligatori, Feedback Master separati, Claim Form separati, Slot ID o Pilot ID esposti al tester per i nuovi test 1.3.

## North Star

### 1. FUN
Quanto ti sei divertito? `0–10`.

### 2. DESIRE TO RETURN
Quanto vorresti tornare/continuare perché questa esperienza ti è piaciuta? `0–10`.

Non usare Desire to Return per massimizzare durata compulsiva, cliffhanger artificiali o difficoltà a smettere.

## Dati qualitativi minimi

- **Best Thing** — cosa ha funzionato meglio;
- **Main Change** — la principale cosa da cambiare.

Questi campi possono essere facoltativi: un punteggio autentico vale più di un modulo abbandonato.

## Metriche diagnostiche — osservare quando possibile

Non trasformare automaticamente queste metriche in altre domande obbligatorie. Quando esiste un transcript o una sessione osservabile, ricavare direttamente:

- libertà di scelta / agency;
- pacing e turn latency;
- Time to First Play;
- rules corrections/errori;
- contraddizioni di stato/memoria;
- spoiler / knowledge leak;
- player-action takeover;
- hidden railroading;
- dice integrity / hidden fudging;
- source fidelity;
- continuity / resume accuracy;
- correction burden: correzioni, reminder, rescue e hidden-GM work richiesti all’utente;
- media/tool latency;
- closure della sessione;
- uso effettivo di prep/materiale per i Master.

**UNKNOWN è un valore valido.** Non interrogare inutilmente il tester per riempire ogni colonna.

## Context fields

Raccogliere automaticamente quando conoscibili senza attrito:

- framework/product version;
- data;
- ruolo = PLAYER / MASTER / BOTH;
- sistema / edition;
- modalità di gioco;
- solo / gruppo;
- AI platform/model se realmente esposto o dichiarato;
- response mode se conoscibile;
- protocollo/adapter usato;
- adventure type = published / original / hybrid;
- interaction/media mode = TEXT_FIRST / immagini on request / altro quando pertinente.

Non inventare dati mancanti.

## Master metrics

Quando il test riguarda un Master umano, osservare o raccogliere solo se realmente utile:

- PREP TIME ACTUAL;
- PREP TIME COUNTERFACTUAL;
- PREP USED / curation ratio;
- GM friction/stress;
- quale supporto ha fatto risparmiare lavoro;
- quale supporto ha creato lavoro inutile;
- **MASTER ROLE-ENTRY ENABLEMENT**: l’assistenza ha reso possibile masterare qualcosa che altrimenti non avrebbe preparato/gestito?

Non creare un secondo questionario Master obbligatorio per il Closed Pilot 1.3.

## Provenienza dell’evidenza

Ogni conclusione dovrebbe distinguere:

- **DECLARED** — risposta esplicita del tester;
- **OBSERVED** — comportamento/failure visibile nel transcript o nel test;
- **INFERRED** — interpretazione;
- **CONFIDENCE** — LOW / MEDIUM / HIGH o equivalente.

Un utente può dichiarare di essersi divertito molto e, contemporaneamente, avere dovuto correggere spesso l’AI.

**EXPERT RESCUE ≠ BASELINE PASS.**

## Correction burden

Quando la chat è disponibile, contare o stimare separatamente:

- correzioni di regole;
- correzioni di stato/canon;
- reminder di istruzioni già date;
- richieste di tiro/meccanica che l’AI avrebbe dovuto attivare;
- ripristini di agency;
- reindirizzamenti verso la fonte/modulo;
- altri interventi in cui il giocatore diventa di fatto hidden GM/debugger.

## Ultra-Garanzia — UGPN-PILOT-1.3

Feedback e richiesta economica sono metriche diverse.

Campi interni utili:

- `claim_requested = YES / NO`;
- `identity_match_status`;
- `evidence_verified = YES / NO / PARTIAL`;
- `lifetime_payout_check`;
- `claim_qualified`;
- `payout_status`;
- `correction_burden` quando il transcript lo consente.

Interpretazione:

- feedback negativo senza claim ≠ soddisfazione;
- claim richiesto ≠ claim automaticamente qualificato;
- claim qualificato ≠ payout automatico;
- un dry-run interno ≠ claim reale;
- transcript/evidenza richiesta soltanto nel ramo €1 o condivisa volontariamente per ricerca.

Per UGPN-PILOT-1.3 tutti i tester ammessi al Closed Pilot sono automaticamente coperti; non esistono metriche operative di slot/pre-use per i nuovi test.

## Iteration loop

`SESSION/USE → FEEDBACK → FAILURE/SUCCESS CLASSIFICATION → aggiornamento del modello Player/GM → 1–3 cambiamenti ad alto ROI → nuovo test`

Non modificare dieci variabili contemporaneamente se vuoi capire cosa ha prodotto il risultato.

## Failure examples

Fra i failure da classificare quando osservati:

- onboarding troppo lungo;
- wrong experience match;
- player-action takeover;
- hidden railroad;
- state/memory failure;
- rules error;
- spoiler/knowledge leak;
- pacing drag;
- too much explanation;
- too little support;
- combat static/low-decision;
- investigation block;
- NPC flat/incoherent;
- consequence arbitrary;
- plot armor/fudging;
- over-prep;
- missing critical asset;
- tool/UX friction;
- safety/expectation mismatch;
- repetitive loop / no state change;
- no natural session closure.

La tassonomia completa e gli stress test tecnici vivono nella documentazione interna/canonica; il modulo pubblico non deve riprodurli.

## Success examples

- high agency;
- strong tension;
- fast Time to First Play;
- memorable NPC;
- satisfying consequence;
- meaningful tactical decision;
- strong discovery;
- surprise without cheating;
- high immersion;
- low-prep/high-value;
- Desire to Return;
- satisfying closure.

## Versioning

Versione prodotto corrente: **Closed Pilot V0.3**.  
Runtime hardening corrente: **V0.3.2**.  
Termini correnti per i nuovi test: **UGPN-PILOT-1.3**.

I test iniziati sotto termini precedenti restano attribuiti alla versione allora applicabile.

## Guardrail finale

Ridurre la frizione del feedback è un successo soltanto se non rende impossibile capire il risultato.

Per il Closed Pilot corrente la priorità è:

**poche domande soggettive ad alto valore + osservazione tecnica dal transcript quando disponibile.**