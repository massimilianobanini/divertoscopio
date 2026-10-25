# FAST BOOTSTRAP — REGRESSION TEST

Stato: **ACTIVE — Public Stress Test V0.3 / V0.4 Candidate**

Scopo: impedire regressioni che ricarichino il runtime completo prima che l'utente abbia espresso un intento sostanziale.

## Contratto

Nel percorso normale, prima del **GATE DI RAGIONAMENTO** l'AI deve usare intenzionalmente soltanto `BOOTSTRAP.md`. L'apertura tecnica del repository/README necessaria a raggiungerlo non conta come caricamento di runtime, ma nessun altro file di contenuto deve essere pre-caricato per produrre i menu iniziali.

Il gate si apre:
- PLAYER → con selezione esplicita **GIOCA SUBITO**, sempre la schermata esatta del PASSO 3, **anche se le preferenze sono già sufficienti**, poi gate soltanto dopo la risposta; un gioco narrativo autonomo senza selezione «Gioca subito» può partire direttamente; PERSONALIZZA PRIMA / A FONDO aprono il gate alla selezione;
- MASTER → dopo problema/obiettivo concreto o categoria scelta;
- INFORMAZIONI → dopo una richiesta specifica di approfondimento.

## Casi minimi

### FB-01 — Solo “Iniziamo”
Input: `Iniziamo`

Pass:
- mostra Master / Giocatore / Informazioni;
- massimo 1–2 frasi prima del menu;
- nessun runtime, CORE, PLAYER, MASTER, adapter, toolbox o protocollo caricato intenzionalmente.

### FB-01B — Solo URL ufficiale senza comando (nuovo ingresso)
Input (intero messaggio): `https://github.com/massimilianobanini/divertoscopio`

Comportamento atteso quando ChatGPT interpreta il repository come avvio:
- legge al massimo README e BOOTSTRAP, poi mostra Master / Giocatore / Informazioni;
- non produce audit, riassunto marketing del sito o richiesta generica «Come vuoi che ti aiuti?»;
- non pre-carica il runtime, CORE, PLAYER, MASTER, adapter o altri file;
- se il messaggio contiene invece una domanda sostanziale, risponde alla domanda e non forza il menu.

**Limite del test:** un repository esterno non può imporre l'intento di un URL isolato a ChatGPT. Questo caso richiede anche un test live in una nuova chat, non solo la revisione dei file.

### FB-01C — Landing da browser interno Instagram (ingresso corrente)
Input: premi «Copia e apri ChatGPT» dalla landing.

Pass:
- il testo **fisso** da copiare è l'URL canonico del repository + due a capo + «Iniziamo» (nessun UTM, fbclid, l.instagram.com o URL della landing);
- il sito apre `https://chatgpt.com/` soltanto dopo conferma positiva dell'operazione clipboard; se fallisce, **non naviga**;
- il browser non legge il testo dal parametro `?q=` né da `window.location`;
- la finestra presenta **un solo pulsante «Copia e apri in ChatGPT»**, senza «Copia soltanto» o pulsanti di apertura separati;
- se l'utente copia solo una parte del messaggio fuori dal percorso, il repository richiede un avvio implicito best-effort, ma **il modello non è vincolato** dalle istruzioni dei file esterni;
- dopo l'apertura ChatGPT l'utente deve incollare il testo e premere Invia;
- verificare su Samsung/Instagram WebView: permesso negato, fallback, chat nuova e accesso non autenticato.


### FB-02 — Entrata PLAYER
Input sequenziale:
1. `Iniziamo`
2. `2`

Pass:
- mostra la nota velocità/ragionamento una sola volta;
- mostra GIOCA SUBITO / PERSONALIZZA PRIMA / PERSONALIZZA A FONDO;
- il gate **non è ancora aperto**;
- nessun file aggiuntivo necessario oltre a `BOOTSTRAP.md`.

### FB-03 — Entrata MASTER
Input sequenziale:
1. `Iniziamo`
2. `1`

Pass:
- chiede problema/risultato e mostra esempi pratici immediatamente comprensibili prima o insieme alle 7 categorie;
- gli esempi includono casi come coinvolgere giocatori diversi, controllare dove un'avventura potrebbe incepparsi, scegliere cosa preparare con poco tempo o risolvere combattimenti troppo lenti;
- gli esempi non sono una tassonomia chiusa e non vengono trattati come scelta obbligatoria;
- il gate **non è ancora aperto**;
- MASTER/CORE/toolbox non sono ancora necessari.

### FB-04 — PLAYER mostra schermata bloccata (ancora senza gate)
Input successivo a FB-02: `Gioca subito`

Pass:
- carica **solo** `BOOTSTRAP.md`, **non** START-HERE/runtime/CORE/PLAYER/adapter;
- mostra **esattamente** il testo canonico del PASSO 3, identico al testo in PLAYER e START-HERE;
- non apre ancora il gate;
- non ripete la scelta PLAYER;
- nel messaggio canonico di GIOCA SUBITO chiarisce **solo** come “giochi tu con l’AI come Master” e **multiplayer** come “più giocatori, una sola chat ChatGPT gestita da un host che raccoglie le azioni di tutti”;
- presenta **in un unico messaggio testuale** le sei voci: modalità Solo/Multiplayer, sistema (D&D 2014 / D&D 2024 / Daggerheart™ (adapter compatibile non ufficiale, SRD 2.0) / altro), ambientazione (**Casuale / Fantasy / Dark Fantasy / Medievale Low-Magic / Western / Steampunk / Horror Contemporaneo / Fantascienza / Post-apocalittica / Altro**), esperienza (principiante / intermedio / esperto), tono (avventuroso / dark / investigativo / comico-demenziale / epico / altro) e rischio (basso / moderato / alto);
- permette toni combinati, descrizioni libere, risposte parziali e **«Scegli tutto tu»** senza ulteriori conferme;
- dichiara i default: Solo, D&D 5e 2014, fantasy classica, assistenza da principiante, avventuroso, rischio moderato, PG pregenerato di livello 1;
- dichiara chiaramente il default solo testo (niente immagini automatiche, pulsanti o moduli non richiesti); non mostra form, pulsanti grafici né immagini e rinvia la scelta dei dadi al primo tiro del PG, con risultato e consenso possibili nella stessa risposta;
- se il sistema era già stato dichiarato, lo ricorda senza variare o omettere il testo canonico;
- non aggiunge introduzioni, disclaimer, confidence, indicazioni tecniche o altri contenuti alla schermata;
- punta alla prima decisione realmente giocabile con il minimo onboarding.

### FB-04B — PLAYER risponde alla schermata: gate aperto
Input successivo a FB-04: `Solo, D&D 2024, fantasy, esperto, comico-demenziale e avventuroso, rischio basso` oppure `Scegli tutto tu`.

Pass:
- **ora** apre il gate e può caricare START-HERE + runtime + CORE + PLAYER + adapter pertinenti;
- passa direttamente al PLAY, senza duplicare la schermata o chiedere conferme;
- con risposta parziale usa i default dei soli campi mancanti; la preferenza sistema, tono misto e rischio prevalgono;
- il consenso per il primo tiro PG rimane just-in-time.

### FB-04C — Gioca subito con preferenze già fornite: stessa schermata
Input: `Iniziamo. Gioca subito. Solo, fantasy, D&D 2014, rischio basso.`

Pass:
- mostra comunque **la stessa schermata canonica identica del PASSO 3**, una volta sola;
- non pre-carica START-HERE, CORE, PLAYER, runtime né adapter;
- dopo la risposta usa le preferenze già dichiarate insieme alle nuove senza chiederle di nuovo;
- apre il gate e passa al PLAY.

### FB-04D — Richiesta autonoma di gioco senza selezionare il menu
Input: `Fammi giocare una storia fantasy in D&D 2024, sono esperto.`

Pass:
- può evitare la schermata «Gioca subito», perché il giocatore non ha selezionato quella voce;
- apre il gate e inizia il PLAY, senza creare una versione differente del menu.

### FB-05 — MASTER apre il gate
Input successivo a FB-03: `I combattimenti sono troppo lenti e i giocatori si distraggono`

Pass:
- da questo momento può caricare START-HERE + runtime + CORE + MASTER;
- recupera toolbox/pattern/protocolli solo se pertinenti;
- non richiede di scegliere di nuovo la categoria se il problema è già chiaro.

### FB-06 — Intento completo in un solo messaggio
Input: `Iniziamo. Sono un Master di D&D 5e 2014. I combattimenti sono troppo lenti.`

Pass:
- salta i menu ridondanti;
- considera il gate già aperto;
- carica solo i file necessari al compito.

### FB-07 — Informazioni generiche
Input sequenziale:
1. `Iniziamo`
2. `3`

Pass:
- apre la risposta sostanziale con **“Il Divertoscopio è il primo strumento italiano per il GDR semplice, con l’Ultra-Garanzia del Prezzo Negativo.”** e mantiene il Battlecry;
- subito dopo mostra una spiegazione “In 30 secondi” con esempi pratici PLAYER e MASTER;
- usa linguaggio normale e non richiede di capire gergo come agency, payoff, friction, provenance, state o framework;
- presenta il supporto al Master come possibile “secondo paio di occhi”, non come sostituzione obbligatoria della creatività;
- offre poi: provarlo come giocatore / usarlo come Master / capire meglio come funziona;
- non carica MANIFESTO solo per ripetere informazioni generiche;
- apre il gate soltanto se l'utente chiede un approfondimento specifico.

### FB-08 — No FAST/DEEP runtime split
Pass:
- la velocità di bootstrap non crea due Divertoscopi diversi;
- dopo il gate valgono gli stessi runtime e guardrail completi.

### FB-09 — Domanda diretta sul prezzo negativo (nessun menu obbligatorio)
Input: `https://github.com/massimilianobanini/divertoscopio — Che cos'è l'Ultra-Garanzia del Prezzo Negativo, perché l'avete creata e come funziona?`

Pass:
- risponde alla domanda specifica senza ripetere «Master / Giocatore / Informazioni» o lo slogan come risposta unica;
- consulta `START-HERE.md`, `ULTRA-GARANZIA.md`, `ULTRA-GARANZIA-REGISTRO.md` e `MANIFESTO.md` solo per le parti pertinenti, **senza pre-caricare runtime/CORE/PLAYER/MASTER**;
- spiega gratis €0 vs possibile €1 su richiesta qualificata (non pagamento automatico), la motivazione del creatore e le condizioni essenziali;
- non usa «indennizzo reputazionale», «claim» o «cap» senza spiegazione accessibile.

### FB-10 — Richiesta pratica dopo insoddisfazione
Input dopo uso reale: `Non mi è piaciuto. Voglio chiedere il mio euro: dove devo andare?`

Pass:
- fornisce subito il link al **modulo ufficiale unico** e spiega la scelta «Sì», prova d'uso e metodo di pagamento **nel modulo**;
- non richiede preregistrazione, invito, ID, un form separato o dati di pagamento in chat;
- indica requisiti 18+, un solo pagamento per persona, limite di 100 richieste qualificate, verifica manuale e i termini per il pagamento;
- distingue insoddisfazione soggettiva da frode; non pretende una recensione negativa scritta.

### FB-11 — Stato del fondo potenzialmente non aggiornato
Input: `Posso richiedere €1 proprio adesso? Sono ancora disponibili tutti i 100 euro?`

Pass:
- consulta il registro pubblico con la **data dell'ultimo aggiornamento**;
- non presenta lo stato datato del registro come disponibilità verificata in tempo reale;
- non inventa richieste, pagamenti o posti rimasti; indica come consultare termini, registro e modulo;
- non confonde un «Public Stress Test» con un vecchio «test chiuso».

## Budget di velocità e metriche actual play

**Configurazione Gioca subito: obiettivo circa 1 minuto, non garanzia di piattaforma.** Il testo della schermata è immutabile: non accorciarlo per simulare tempi migliori. Per ciascuna prova in una chat nuova (idealmente sia desktop sia smartphone) annota:
- **T_menu:** tempo dal clic/invio «Gioca subito» fino alla schermata interamente visualizzata;
- **T_config:** tempo da quel clic/invio fino all'invio della risposta alle sei voci o di «Scegli tutto tu» (include la lettura/scelta dell'utente, quindi non è tutto sotto controllo AI);
- **T_play:** tempo dalla risposta di configurazione alla prima decisione realmente giocabile, distinto da T_config;
- **pre-gate tool/file fetch:** dopo il menu precedente, devono essere **zero** per mostrare la schermata (oppure lettura del solo BOOTSTRAP per entrata diretta senza contesto già disponibile);
- **nuove domande obbligatorie post-risposta:** zero, salvo incompatibilità reale;
- **media/UI aggiunti:** zero; **divergenze dal testo canonico:** zero.

**Criterio statico di superamento:** schermata identica nelle tre copie, impronta fissata nel test automatico, sei voci nell'ordine approvato, zero pre-caricamenti aggiuntivi, nessun form o media. **Criterio temporale:** valutare T_config su almeno 5 avvii indipendenti e registrare mediana e massimo, confrontando la mediana con l'obiettivo di 60 secondi; registrare separatamente T_menu e T_play per individuare il collo di bottiglia. Se la mediana supera 60 secondi, il target temporale NON è validato e si apre un problema di prestazioni. Non dichiarare PASS sui tempi senza misurazioni reali: il comportamento e la latenza di ChatGPT non sono garantibili soltanto con test di file.

### FB-12 — Default solo testo dopo Gioca subito
Input: `solo, D&D 5e 2014, steampunk, principiante, dark, basso`

Pass:
- dopo la configurazione inizia subito con una prima scena e una scelta reale, **senza cercare/generare immagini**;
- **nessun pulsante cliccabile, badge interattivo, input numerico, modulo o widget** nella scena e nelle normali scelte narrative;
- ammette immagini o controlli grafici solo se l'utente li richiede, senza confonderli con una preferenza implicita;
- testo, elenchi numerati testuali e chiarimenti sintetici sono ammessi.

### FB-13 — Primo tiro: consenso e risultato nello stesso messaggio
Input: prima azione incerta che richiede 1d20; nessuna fonte di dadi già dichiarata.

Pass:
- in un solo messaggio testuale spiega il dado/modificatore e scrive **«scrivimi direttamente il risultato»** oppure **«Tira tu»**;
- se il giocatore risponde `14`, `1`, `2` oppure `Ho tirato 14`, interpreta il numero come **risultato del dado del giocatore**, memorizza `dice_mode=PLAYER` e risolve subito **senza secondo turno di scelta**;
- se risponde `Tira tu`, memorizza `dice_mode=AI` ed esegue il tiro con la fonte realmente disponibile, dichiarandola; se manca una fonte appropriata non inventa un risultato;
- nel seguito non ripete la domanda se la preferenza è nota; permette di cambiare metodo in ogni momento;
- **zero tiri AI prima del consenso**, anche per principianti e `Scegli tutto tu`;
- **zero moduli, pulsanti o form** per gestire il tiro.
