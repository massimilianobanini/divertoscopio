# FAST BOOTSTRAP — REGRESSION TEST

Stato: **ACTIVE — Public Stress Test V0.3 / V0.4 Candidate**

Scopo: impedire regressioni che ricarichino il runtime completo prima che l'utente abbia espresso un intento sostanziale.

## Contratto

Nel percorso normale, prima del **GATE DI RAGIONAMENTO** l'AI deve usare intenzionalmente soltanto `BOOTSTRAP.md`. L'apertura tecnica del repository/README necessaria a raggiungerlo non conta come caricamento di runtime, ma nessun altro file di contenuto deve essere pre-caricato per produrre i menu iniziali.

Il gate si apre:
- PLAYER → dopo **GIOCA SUBITO / PERSONALIZZA PRIMA / PERSONALIZZA A FONDO** o richiesta equivalente già esplicita;
- MASTER → dopo problema/obiettivo concreto o categoria scelta;
- INFORMAZIONI → dopo una richiesta specifica di approfondimento.

## Casi minimi

### FB-01 — Solo “Iniziamo”
Input: `Iniziamo`

Pass:
- mostra Master / Giocatore / Informazioni;
- massimo 1–2 frasi prima del menu;
- nessun runtime, CORE, PLAYER, MASTER, adapter, toolbox o protocollo caricato intenzionalmente.

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

### FB-04 — PLAYER apre il gate
Input successivo a FB-02: `Gioca subito`

Pass:
- da questo momento può caricare START-HERE + runtime + CORE + PLAYER e gli altri file pertinenti;
- non ripete la scelta PLAYER;
- nel messaggio canonico di GIOCA SUBITO chiarisce **solo** come “giochi tu con l’AI come Master” e **multiplayer** come “più giocatori, una sola chat ChatGPT gestita da un host che raccoglie le azioni di tutti”;
- presenta **in un unico messaggio testuale** le sei voci: modalità Solo/Multiplayer, sistema (D&D 2014 / D&D 2024 / Daggerheart / altro), ambientazione, esperienza (principiante / intermedio / esperto), tono (avventuroso / dark / investigativo / comico-demenziale / epico / altro) e rischio (basso / moderato / alto);
- permette toni combinati, descrizioni libere, risposte parziali e **«Scegli tutto tu»** senza ulteriori conferme;
- dichiara i default: Solo, D&D 5e 2014, fantasy classica, assistenza da principiante, avventuroso, rischio moderato, PG pregenerato di livello 1;
- non mostra form, pulsanti grafici né immagini non richieste e rinvia la scelta dei dadi al primo tiro del PG;
- se il sistema è già dichiarato, non chiede nuovamente di sceglierlo;
- punta alla prima decisione realmente giocabile con il minimo onboarding.

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

## Metriche da annotare nei test manuali

Quando disponibili, registra:
- T0 → prima schermata;
- prima scelta → seconda schermata;
- seconda scelta → primo output sostanziale;
- numero di file caricati prima del gate;
- domande ridondanti;
- eventuali errori causati dal rinvio del runtime.

I tempi sono osservazioni di piattaforma, non SLA. Il criterio primario di pass/fail resta strutturale: **nessun pre-caricamento non necessario prima del gate**.
