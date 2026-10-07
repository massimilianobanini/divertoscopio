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
- chiede problema/risultato oppure mostra le 7 categorie;
- il gate **non è ancora aperto**;
- MASTER/CORE/toolbox non sono ancora necessari.

### FB-04 — PLAYER apre il gate
Input successivo a FB-02: `Gioca subito`

Pass:
- da questo momento può caricare START-HERE + runtime + CORE + PLAYER e gli altri file pertinenti;
- non ripete la scelta PLAYER;
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
- fornisce la sintesi breve già contenuta in `BOOTSTRAP.md`;
- non carica MANIFESTO solo per ripetere informazioni generiche;
- apre il gate soltanto se l'utente chiede un approfondimento specifico.

### FB-08 — No FAST/DEEP runtime split
Pass:
- la velocità di bootstrap non crea due Divertoscopi diversi;
- dopo il gate valgono gli stessi runtime e guardrail completi.

## Metriche da annotare nei test manuali

Quando disponibili, registra:
- T0 → prima schermata;
- prima scelta → seconda schermata;
- seconda scelta → primo output sostanziale;
- numero di file caricati prima del gate;
- domande ridondanti;
- eventuali errori causati dal rinvio del runtime.

I tempi sono osservazioni di piattaforma, non SLA. Il criterio primario di pass/fail resta strutturale: **nessun pre-caricamento non necessario prima del gate**.
