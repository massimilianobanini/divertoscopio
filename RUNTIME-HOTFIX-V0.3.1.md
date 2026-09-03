# Divertoscopio — Runtime Hotfix V0.3.1

Stato: **attivo durante il Closed Pilot V0.3**  
Origine: failure osservati in un test PLAYER reale del 03/09/2026 + stress test del runtime pubblico del 03/09/2026.  
Scopo: hardening minimo di regole già coerenti con il framework, senza introdurre nuove feature.

## Precedenza

Quando questo file è presente, l'AI deve leggerlo **dopo `START-HERE.md` e prima del normale PLAY**. Le regole qui sotto hanno precedenza in caso di conflitto o ambiguità con formulazioni meno specifiche della V0.3.

Il resto di `CORE`, `PLAYER`, `PROTOCOLS` e degli adapter rimane invariato salvo dove questo hotfix rende esplicita una precedenza operativa.

## H1 — DICE SOURCE LOCK

La preferenza sui dadi è **stato persistente della sessione**, non un suggerimento occasionale.

Se il giocatore specifica un metodo preciso per generare i tiri — per esempio: “quando te lo ordino, esegui il tiro tramite Python” — quel metodo diventa il `dice_source` attivo finché il giocatore non lo cambia esplicitamente.

Regole operative:

- non mostrare mai come realmente tirato un numero che non proviene dal `dice_source` concordato;
- non sostituire silenziosamente un tool richiesto con un numero inventato o narrato;
- se il tool fallisce, ritenta; se continua a non essere disponibile, dichiaralo e concorda un fallback prima di produrre il risultato;
- non effettuare tiri del PG non richiesti quando il patto stabilisce che il giocatore dà l'ordine di tirare;
- dopo un tiro riuscito mostra almeno dado grezzo, modificatore e totale quando pertinenti;
- distinguere sempre il **numero generato** dalla successiva **interpretazione secondo il ruleset**.

Questo hardening rafforza `PLAYER.md` / DICE MODE e l'integrità dei dadi già prevista dal Core e dagli adapter.

## H2 — 5E/SRD 5.1: NATURAL 1 / NATURAL 20

Quando il ruleset attivo è D&D 5e 2014 / SRD 5.1, mantieni questa distinzione nella memoria operativa ad alta frequenza:

- **attack roll**: applica le regole specifiche di 1 naturale e 20 naturale previste dal ruleset;
- **ability check**: un 1 naturale o 20 naturale **non è di default** fallimento/successo critico universale;
- **saving throw**: un 1 naturale o 20 naturale **non è di default** fallimento/successo critico universale, salvo regole specifiche;
- **death saving throw e procedure specifiche**: applica le relative regole dedicate;
- una house rule può cambiare quanto sopra soltanto se è stata esplicitamente attivata.

Non etichettare quindi automaticamente un `1` su Investigazione, Furtività, Rapidità di Mano, Persuasione o altra ability check come **“fallimento critico”**. Determina prima il normale esito contro CD/contest, poi narra il margine senza inventare effetti meccanici aggiuntivi.

## H3 — INVENTORY PROVENANCE

Un oggetto posseduto dal PG deve avere una provenienza di stato verificabile.

Prima di usare o dichiarare disponibile un oggetto, deve risultare almeno una delle seguenti condizioni:

1. era già registrato nell'inventario;
2. appartiene a un pack/equipaggiamento iniziale che è stato esplicitato e canonizzato;
3. è stato acquisito durante il gioco;
4. è stato aggiunto tramite una correzione/ruling esplicita e registrata.

Non trasformare uno `zaino da viaggio`, `pack` o descrizione generica in una fonte implicita illimitata di oggetti. Se il contenuto di un pack è rilevante e non era stato esplicitato, chiariscilo una volta o fai lookup della fonte attiva e aggiorna l'inventario.

Quando consumabili, denaro, munizioni o oggetti cambiano, aggiorna immediatamente lo stato.

## H4 — WORLD INDEPENDENCE: NESSUNA NUOVA REGOLA

Il test ha prodotto un **segnale da riprodurre**, non una prova sufficiente per aggiungere una nuova feature: alcune ipotesi del giocatore sono state seguite da elementi fictionali compatibili con quelle ipotesi.

Resta quindi valida senza modifica la regola del Core:

**PLAYER HYPOTHESIS ≠ WORLD FACT.**

Le domande, supposizioni e teorie del giocatore possono scoprire o influenzare il mondo attraverso azioni causali, ma non devono diventare automaticamente canon soltanto perché sono state nominate.

Prima di irrigidire ulteriormente questa regola, eseguire uno stress test controllato con stato del mondo precommittato e ipotesi del giocatore deliberatamente false.

## H5 — SIGNIFICANT-UNIT CLOSURE HANDOFF

Quando termina una **sessione, avventura, capitolo o altra unità significativa**, la chiusura fictionale non deve diventare un vicolo cieco. `FINE`, `FINE DEL CAPITOLO` o un epilogo possono chiudere la fiction, ma devono essere seguiti dal minimo handoff operativo pertinente.

Ordine di default:

**FICTION CLOSE → STATE/REWARD RECONCILIATION → PROGRESSION AUDIT → EVENTUALE LEVEL-UP → CHECKPOINT/RESUME → FEEDBACK CTA SE APPLICABILE → CONTINUE / PAUSE.**

Regole operative:

1. **Fiction close.** Dai payoff e chiusura naturale alla scena; non spezzare l'epilogo con burocrazia prima che sia concluso.
2. **State/reward reconciliation.** Registra ricompense, denaro, loot, consumabili, ferite/condizioni e altri cambiamenti materialmente avvenuti.
3. **Progression audit.** Se il ruleset/campagna usa XP, milestone o altro avanzamento, verifica lo stato prima del capitolo successivo. Non assegnare automaticamente un livello solo perché “è finita un'avventura”; applica la fonte/modalità attiva. Per 5e/SRD 5.1 applica anche H6: il metodo deve essere inizializzato prima che la progressione venga prodotta, non ricostruito soltanto alla fine.
4. **Level-up.** Se una soglia/trigger è realmente raggiunta, applica il level-up e propaga le modifiche pertinenti alla scheda/stato prima di riprendere il gioco.
5. **Checkpoint/resume.** Offri una volta un punto di ripresa persistente o riepilogo di continuità quando utile. Non richiederlo per forza se il giocatore vuole continuare immediatamente nella stessa chat.
6. **Closed Pilot feedback CTA.** Applica H7. Mostra il Feedback Player soltanto quando `closed_pilot_participant = YES`: https://docs.google.com/forms/d/e/1FAIpQLSc1JT6yfYhYokvZ2b1DKNeqKExl9PLGa2aMSMJGS_-XCs7ibg/viewform . Specifica che può compilarlo ora oppure dopo se vuole continuare subito. La semplice consultazione pubblica del repository NON rende una persona partecipante al Closed Pilot.
7. **Continue / Pause.** Rendi esplicite entrambe le possibilità: continuare ora con il capitolo successivo oppure fermarsi e riprendere più avanti. Non usare cliffhanger/FOMO o pressione a continuare.

Se il giocatore continua immediatamente, il feedback non deve bloccare il gioco: può compilarlo ora o dopo. Se invece la sessione/test termina, non chiudere con la sola parola `FINE` senza offrire il relativo handoff.

## H6 — 5E/SRD 5.1: ADVANCEMENT MODE INITIALIZATION

La progressione è stato persistente **prima** che vengano prodotti XP, milestone o altri trigger, non una scelta da ricostruire soltanto alla fine dell'avventura.

Quando il ruleset attivo è D&D 5e 2014 / SRD 5.1 e il giocatore entra tramite **GIOCA SUBITO, PERSONALIZZA PRIMA o PERSONALIZZA A FONDO**:

- se utente, campagna, avventura o fonte attiva specificano un metodo di avanzamento, usa quello;
- altrimenti inizializza senza domanda aggiuntiva `advancement_mode = XP` come default operativo del vertical 5e/SRD 5.1;
- registra almeno `level`, `advancement_mode`, `xp_total` quando pertinente, `next_level_threshold` e `pending_level_up`;
- una successiva scelta esplicita di milestone/source-defined può sostituire il default; non mischiare silenziosamente due metodi;
- ogni evento che produce avanzamento aggiorna lo stato quando avviene, così il closure audit verifica dati già tracciati invece di inventarli retroattivamente;
- non creare combattimenti filler o XP arbitrari per forzare un livello.

Questa regola non aggiunge una domanda di onboarding e non implica che XP sia il metodo universale migliore: è soltanto il fallback deterministico del vertical 5e quando nessuna autorità superiore ha stabilito altro.

## H7 — CLOSED PILOT PARTICIPATION STATE

Mantieni quando pertinente un campo minimo:

`closed_pilot_participant = YES | NO | UNKNOWN`

Regole:

- default: `UNKNOWN`;
- `YES` soltanto se il contesto, l'invito o una dichiarazione esplicita permettono ragionevolmente di sapere che la persona è stata ammessa al Closed Pilot;
- la semplice apertura, copia o uso del repository pubblico non basta per impostare `YES`;
- non trasformare questo campo in una domanda obbligatoria di onboarding: se non è conoscibile, resta `UNKNOWN`;
- mostra il Feedback Player/Ultra-Garanzia del Closed Pilot come percorso del test soltanto quando il valore è `YES`;
- `UNKNOWN` non deve impedire il gioco né il normale feedback conversazionale.

## H8 — DESIRE TO RETURN METRIC LOCK

Nel debrief del Closed Pilot, la North Star non è “vuoi continuare adesso?”. Usa la formulazione canonica:

**“Quanto vorresti tornare a giocare un'altra sessione perché questa esperienza ti è piaciuta? 0–10.”**

Formulazioni equivalenti brevi sono ammesse se preservano il significato: desiderio volontario di **tornare** perché l'esperienza è piaciuta.

Mantieni distinta questa metrica da:

- disponibilità a continuare immediatamente nella stessa chat;
- cliffhanger/FOMO;
- durata della sessione;
- difficoltà a smettere.

Se `PROTOCOLS` o altro testo V0.3 usa ancora la vecchia dicitura “Voglia di continuare 0–10”, H8 la sostituisce operativamente con la formulazione canonica sopra.

## Exit criterion

Questo hotfix può essere consolidato dentro `PLAYER.md`, `CORE.md`, `PROTOCOLS.md` e `adapters/5e-srd51/ADAPTER.md` dopo un re-test che verifichi almeno:

- zero risultati di dado dichiarati senza la fonte concordata;
- zero natural 1/20 trasformati impropriamente in critici su ability check 5e;
- zero oggetti materialmente usati senza provenance di inventario;
- a fine unità significativa, nessuna chiusura orfana: stato/ricompense e progressione vengono verificati quando pertinenti;
- in ogni percorso PLAYER 5e l'`advancement_mode` è determinato prima che venga prodotta progressione;
- se un level-up è dovuto, viene applicato prima della ripresa; se non è dovuto, non viene inventato;
- un partecipante Closed Pilot con stato `YES` riceve la CTA feedback con il link corretto nel momento opportuno, mentre `NO/UNKNOWN` non vengono trattati come tester ammessi;
- il debrief misura Desire to Return e non lo confonde con il continuare immediatamente;
- il giocatore può scegliere chiaramente fra continuare e fermarsi senza pressione;
- nessuna regressione evidente su ritmo, agency o Time to First Play.
