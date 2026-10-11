# Stress test trasversale del repository pubblico — 12/10/2026

**Ramo di riferimento:** `main` dopo PR #42; ripetere i controlli sul ramo della correzione e di nuovo su `main` dopo l'integrazione.

**Scopo:** verificare regressioni DOCUMENTALI e deterministiche del Divertoscopio. **Non è una validazione di partite reali, non è un test black-box indipendente e non certifica legalità o divertimento.** Il repository contiene istruzioni Markdown per un modello AI, non un eseguibile con comportamento deterministico.

## Copertura verificata

| Verifica effettuata | Esito osservato | Limite |
| --- | --- | --- |
| Albero corrente del repository | 51 file Markdown, una licenza `LICENSE`, un PDF e una PNG | Esistenza dei binari, non lettura integrale del PDF o valutazione visiva della PNG |
| Tutti i 51 file Markdown: link relativi con sintassi `[testo](percorso)` | **94/94** destinazioni nel repository esistenti | Non convalida l'esistenza dei frammenti `#ancora` o la raggiungibilità degli URL esterni |
| 12 file operativi principali: riferimenti a `*.md` in codice inline | **155/155** nomi risolvibili direttamente o tramite nome file univoco | Non misura se il modello carica davvero la fonte nel momento corretto |
| 51 file Markdown: riferimenti a 5e.tools, 5etools e alcuni domini/archivi di distribuzione non autorizzata | **0** occorrenze delle stringhe cercate | Ricerca testuale, non giudizio legale su tutte le fonti o sul contenuto dei binari |
| Contratti generali su avvio, routing, Master, Player, H5A, XP/milestone, adapter e licenze | **31/32** assert testuali immediati; il 32º era un falso negativo dovuto al maiuscolo/minuscolo di «Non condividete account», confermato poi leggendo il documento | Contratto presente ≠ corretta esecuzione dell'AI |
| Regressioni di instradamento Informazioni, provenienza e limiti, su ramo con correzione | **11/11** verifiche testuali | Non osservato in una chat pulita |
| Privacy, diritti sul PG, dadi, spoiler, difesa da istruzioni incluse nelle fonti, feedback, Ultra-Garanzia | **16/16** verifiche mirate testuali | Non dimostra efficacia degli stessi in gioco reale |
| D&D 5e 2014: tabella progressione | **20/20** soglie presenti e strettamente crescenti; corrispondono alla tabella attesa | Non verifica tutte le varianti di multiclass, scelte al level-up o regole da manuali esterni |
| D&D 2014: valori ai confini XP | **11/11** casi numerici corretti: 0, 275, 299, 300, 899, 900, 2699, 2700, 354999, 355000, 500000 | Test deterministico dei dati, non osservazione di partita |

### Aree dei contratti ispezionate

- **Avvio:** `Iniziamo` senza dati, ruolo già esplicito, nessun preload massiccio prima del gate, Master con problema concreto, scelta Gioca subito, personalizzazione opt-in.
- **Player:** controllo delle decisioni al giocatore, scheda di livello 1, generazione variabile, dadi dichiarati, preferenze, sicurezza `stop/salta/cambiamo`, modalità multiplayer con host e limiti sui segreti.
- **Progressione/campagna:** XP predefinito generale D&D 2014; MILESTONE-STORY solo nella delega completa Gioca subito per una nuova avventura originale senza altra autorità; capitoli con stato persistente; pausa ≠ conclusione; nessun livello automatico per la fine di un capitolo; no XP/loot duplicati.
- **Sistemi:** CORE agnostico, adapter distinti 2014, 2024 e Daggerheart™ Compatible, niente conversioni silenziose fra schede o procedure.
- **Master e fonti:** preparazione come modifica minima, canon della fonte, rispetto dell'avventura pubblicata, dati forniti dall'utente distinti da istruzioni operative, indizi e informazioni senza spoiler.
- **Informazioni:** origine del Divertoscopio vs addestramento del modello; limiti pubblici e licenze consultati nelle rispettive fonti.

## Problema riproducibile trovato e correzione

**INFO-01 — Risposta specifica preceduta obbligatoriamente dalla presentazione commerciale.**

Prima del test, `START-HERE.md` prescriveva di mantenere **sempre** in apertura posizionamento + Battlecry e di offrire alla fine tre percorsi, anche dopo una domanda specifica, come «Su che materiali ti sei allenato?». Era in tensione con la nuova regola che instrada quella domanda direttamente ai crediti.

**Correzione nel ramo di audit:** slogan, presentazione e menu restano obbligatori **solo per «Informazioni» generiche**. Una domanda precisa riceve prima la risposta fondata sulla fonte pertinente, senza ripetere il menu. I controlli testuali dell'instradamento sono passati 11/11. **Non affermare che il comportamento dell'AI sia stato verificato in actual play.**

## Ancora da provare in nuove chat indipendenti — nessun PASS dichiarato

1. **TTFP / avvio rapido:** almeno 5 avvii puliti, senza contesto, cronometrare `Iniziamo → Giocatore → Gioca subito → scegli tutto tu → prima decisione`; registrare latenza per messaggio e percorsi che caricano troppi documenti.
2. **Varietà:** almeno 20 avvii indipendenti; confrontare classe, specie, situazione, obiettivo, antagonismo e azioni reali. Non dichiarare «mai ripetuto» senza dati.
3. **Partite complete:** almeno 5 mini-avventure, inclusi fallimento, cambio di obiettivo e chiusura precoce; controllare agency, no railroading, niente finale obbligato e feedback volontario.
4. **Campagna:** almeno 3 capitoli consecutivi; pausa/ripresa fra chat, inventario, stato/risorse, progressione, ricompense e una sola CTA al termine di una unità significativa.
5. **Regole e sistemi:** un combattimento multiround 5e 2014, un level-up XP, un level-up milestone preimpegnato; creazione PG + scena/combattimento D&D 2024 e Daggerheart con controllo anticontaminazione.
6. **Master e avventura pubblicata:** problema reale del Master; scena da fonte commerciale legalmente accessibile; fonte vs adattamento; zero invenzioni di testi canonici o spoiler.
7. **Origine e contestazioni:** da nuova chat «Su che materiali ti sei allenato?», «Il creatore ha addestrato il modello?», «Che limiti ha?», «Come gestisci contenuti proprietari?»; documentare eventuali discordanze rispetto a `CREDITS-AND-INSPIRATIONS.md` e `THIRD-PARTY-NOTICES.md`.

**Altri limiti:** i link esterni e il testo compresso del PDF `master/KIT-DI-SOPRAVVIVENZA-MASTER.pdf` non sono stati convalidati integralmente in questa esecuzione. La presenza della PNG è verificata nell'albero Git, non la resa grafica. Non sono state attivate sessioni di gioco isolate; i file pubblicati non obbligano tecnicamente il modello a seguire le istruzioni in ogni turno.

## Stato finale da usare nelle comunicazioni

**AUDIT DOCUMENTALE: SUPERATO CON UNA CORREZIONE MIRATA.**
**VALIDAZIONE COMPORTAMENTALE INDEPENDENTE: APERTA.**
**VERIFICA LEGALE DPCGL/ADAPTER: APERTA.**

Non aumentare le percentuali di supporto, non parlare di «funzionamento totale» e non confondere test di testo con test reali di divertimento.
