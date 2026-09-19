LIMITI CONOSCIUTI — Closed Pilot V0.3

IN BREVE — QUELLO CHE DEVI SAPERE COME TESTER

Non devi leggere tutto questo documento prima di iniziare. Ti basta sapere questo:

**Supporto piattaforme corrente: ChatGPT. Gemini e Claude non sono supportati al momento.** Nei test esplorativi Gemini ha mostrato problemi di bootstrap/accesso al repository; Claude è riuscito ad avviare il Divertoscopio ma ha mostrato errori e un consumo della capacità della conversazione troppo rapido per considerare l'esperienza sostenibile. Questi risultati non dimostrano che le piattaforme non possano mai funzionare: indicano che il Divertoscopio non è oggi ottimizzato abbastanza per dichiararne il supporto.

La matrice corrente delle confidence per i sistemi con supporto pubblico è mantenuta in **[SYSTEM-SUPPORT.md](SYSTEM-SUPPORT.md)**, unica fonte canonica delle percentuali.

> **Stima interna basata su adapter, stress test e actual play. Non è una probabilità di divertimento né una garanzia che ogni ruling sia corretto.**
- per i giocatori, abbiamo provato soprattutto **D&D 5e 2014 / SRD 5.1**, una persona e gioco testuale in chat; il livello 1 resta il caso più testato, con un primo catch-up tecnico 1→3 già eseguito ma senza ancora una lunga validazione post-level-up;  
- D&D 2024 / SRD 5.2.1 ha ora un adapter candidato separato e un ampio audit interno, ma actual-play e validazione esterna sono ancora insufficienti; personaggi di livello più alto e combattimenti molto complessi restano poco testati;  
- il gioco con più persone reali insieme è previsto, ma non è ancora stato provato abbastanza;  
- usare l'intelligenza artificiale mentre un gruppo sta giocando dal vivo è ancora poco testato;  
- immagini, musica e mappe possono essere utili, ma possono anche rallentare il gioco: stiamo ancora capendo quando valgono davvero l'attesa;  
- **Daggerheart** ha ora un adapter candidato pubblico basato su SRD 2.0 e fonti ufficiali correnti: ha superato stress test statici interni, ma non ha ancora validazione esterna/actual-play sufficiente; altri GDR e altre piattaforme di intelligenza artificiale possono funzionare, ma non sono stati provati quanto il caso principale;  
- giocare al tavolo, online in tempo reale e via chat sono esperienze diverse: non fingiamo che funzionino nello stesso identico modo;  
- per i Master, oggi il Divertoscopio è più maturo per **preparare una sessione, adattare materiale, analizzare problemi e migliorare il gioco** che per seguire automaticamente in tempo reale un intero tavolo complesso.

Se il tuo caso è diverso puoi comunque provarlo: consideralo un test esplorativo e raccontaci chiaramente cosa succede.

DA QUI IN POI — DETTAGLI DI APPROFONDIMENTO

Stato: pubblico per tester / sperimentale  
Versione: Closed Pilot V0.3  
Data: 18/09/2026

SCOPO  
Questo documento evita di confondere “progettato per supportare” con “testato abbastanza da prometterlo”. Il closed pilot deve dichiarare apertamente ciò che sappiamo, ciò che abbiamo testato solo in parte e ciò che non è ancora validato.

1. PERIMETRO CONSIGLIATO — PLAYER  
Il percorso Player del closed pilot è più maturo quando viene usato con:  
- D&D 5e 2014 / SRD 5.1;  
- personaggi di livello 1;  
- solo-player o solo/duet con compagni gestiti dall'AI;  
- play-by-chat prevalentemente testuale;  
- onboarding Gioca Subito / Personalizza Prima;  
- sessioni brevi o capitoli iniziali con complessità moderata.

Questo NON significa che altri casi non funzionino. Significa che non disponiamo ancora di dati sufficienti per presentarli come supporto validato.

2. PERIMETRO CONSIGLIATO — MASTER  
Il percorso Master è più maturo per:  
- preparazione rapida di una sessione;  
- diagnosi di un problema concreto al tavolo;  
- brainstorming/design review con budget di tempo;  
- miglioramento/adattamento di un'avventura;  
- gestione di problemi come pacing, giocatore annoiato, PvP non voluto, retcon, organizzazione, PNG, musica, oggetti di scena e strumenti;  
- uso del Kit di sopravvivenza come guida autonoma interrogabile dall'AI.

Non è ancora validato come copilot live avanzato che segue in tempo reale un intero tavolo umano complesso.

3. D&D 2024 / SRD 5.2.1 — ADAPTER CANDIDATO, NON VALIDATO A DOVERE  
È disponibile un adapter candidato separato in `adapters/5e-srd521/`, costruito sul current SRD 5.2.1 e su un audit interno esteso dei principali delta/meccanismi ad alto rischio. Questo riduce il rischio di contaminazione 2014→2024 ma NON equivale ancora a validazione esterna o actual play sufficiente. Il closed pilot deve evitare di presentare D&D 2024 come equivalente al supporto SRD 5.1 finché i test non lo giustificano.

4. LEVEL-UP — TEST PARZIALE  
È stato eseguito un primo catch-up tecnico dal livello 1 al 3 durante il Pilot 0, che ha fatto emergere e correggere problemi reali su checkpoint di avanzamento, ownership delle scelte di build e metodo dei PF. Questo NON valida ancora la progressione completa: restano da stressare level-up naturali durante il gioco, più passaggi consecutivi, multiclassing reale, ASI/talenti, spellcaster complessi, continuità delle risorse e gioco prolungato dopo il level-up.

5. LIVELLI MEDIO/ALTI — NON TESTATI A DOVERE  
Non sono stati stressati seriamente:  
- personaggi di medio/alto livello;  
- molte feature simultanee;  
- spell e capacità complesse;  
- encounter ad alta densità tattica;  
- gestione di risorse molto numerose;  
- interazioni rare o edge case avanzati.

6. MULTIPLAYER REALE — NON VALIDATO  
La struttura prevede multiplayer, ma non è stata validata a sufficienza con più giocatori umani contemporaneamente. Restano da testare:  
- equità del tempo di scena;  
- conflitti tra intenti;  
- party split;  
- votazioni/decisioni di gruppo;  
- persone con preferenze incompatibili;  
- conversazioni sovrapposte;  
- privacy e profili separati;  
- rischio che l'AI favorisca un giocatore.

7. HUMAN MASTER + AI COPILOT LIVE AVANZATO — NON VALIDATO  
Il Kit e il percorso Master aiutano in preparazione e diagnosi. Non è ancora stato stressato seriamente l'uso con un Master umano che, durante una sessione dal vivo, chiede in tempo reale all'AI:  
- regole;  
- tattiche;  
- reazioni dei PNG;  
- metagame privato;  
- gestione segreti;  
- correzioni dinamiche;  
mentre il tavolo continua a giocare.

8. LIVE TABLE ≠ PLAY-BY-CHAT  
Giocare dal vivo produce elementi che una chat testuale non replica automaticamente:  
- mappe e griglie;  
- miniature;  
- musica e soundscape;  
- voce, gestualità, postura e ritmo fisico;  
- oggetti di scena reali;  
- sguardi, reazioni e feedback sociale immediato;  
- gestione simultanea di più persone.

Una chat può integrare parte di questi elementi, ma il costo principale è il maggiore tempo di attesa.

9. MEDIA DURANTE IL PLAY — TRADE-OFF QUALITÀ/LATENZA NON VALIDATO  
In una normale chat testuale il tempo di risposta dipende dalla piattaforma e dal tipo di richiesta. Se durante ogni scena si generano anche immagini, mappe, audio o altri asset, il tempo di risposta può aumentare sensibilmente.

Il runtime pubblico usa **TEXT-FIRST** come principio e queste preferenze operative quando pertinenti:  
- `TEXT_ONLY` — solo testo, default se non viene espresso altro;  
- `ON_REQUEST` — immagini/media soltanto quando il giocatore li chiede;  
- `KEY_MOMENTS` — media nei momenti ad alto valore scelti/accettati dal giocatore;  
- `ENHANCED_CINEMATIC` — media più frequenti, accettando maggiore latenza e interruzione del ritmo.

Non è ancora stato determinato quale profilo aumenti davvero il divertimento per persone e situazioni diverse. Più asset non significa automaticamente più immersione o più divertimento: il closed pilot deve misurare il valore aggiunto rispetto al ritardo introdotto.

10. IMMAGINI DURANTE LE SCENE — PATCH PUBBLICA, VALIDAZIONE ANCORA APERTA  
Il Runtime Hotfix V0.3.2 include una modalità sperimentale **Image-on-demand / Text-first**: non aggiunge immagini al percorso Gioca Subito, mantiene il testo come source of truth e rende le immagini opt-in. Non è però ancora stato testato abbastanza se generare immagini durante il gioco:  
- aumenta davvero immersione/divertimento;  
- interrompe il ritmo;  
- crea incoerenze visive;  
- rallenta troppo la decisione successiva;  
- mantiene in pratica il confine `GENERATED MEDIA ≠ CANON` su piattaforme/modelli diversi.

11. MUSICA DURANTE LE SCENE — NON VALIDATA COME AUTOMAZIONE  
La musica è un ottimo strumento per un Master umano, ma non è ancora testato un sistema automatico affidabile che trovi/selezioni/cambi musica durante il gioco in chat senza creare attrito o ritardi.

12. VTT / MAPPE / GRIGLIE — NON VALIDATI  
Roll20, Foundry, Owlbear Rodeo e altri VTT possono amplificare l'esperienza, ma l'integrazione sincronizzata AI ↔ mappa ↔ stato ↔ combattimento non è parte validata del Closed Pilot V0.3.

13. PIÙ MODELLI / PIÙ PIATTAFORME / PIÙ MODALITÀ DI RISPOSTA — NON SUPPORTATI NELLA VERSIONE CORRENTE  
La versione pubblica corrente è ottimizzata e supportata su **ChatGPT**. Il supporto multipiattaforma resta un obiettivo futuro, non una capacità corrente. Test esplorativi su Gemini e Claude hanno evidenziato problemi abbastanza materiali da non presentare oggi quelle piattaforme come supportate.

Una AI o modalità con maggiore capacità di ragionamento/contesto può comportarsi diversamente da una modalità orientata principalmente alla velocità. Il Divertoscopio non richiede come prerequisito una modalità “avanzata”, un piano specifico o istruzioni personalizzate dell'account, e il setup normale scelto spontaneamente dall'utente resta parte valida del Closed Pilot.

Se durante l'uso emergono errori ripetuti o forte insoddisfazione, il sistema può proporre una volta, quando disponibile, di privilegiare qualità/coerenza/ragionamento rispetto alla velocità. Questa escalation è opzionale e non cancella il failure già osservato: non attribuire retroattivamente il problema all'utente perché aveva scelto una modalità veloce/default.

Le istruzioni personalizzate possono cambiare il comportamento del modello o entrare in conflitto con altre istruzioni; vanno quindi considerate una variabile opzionale, non un requisito per ottenere assistenza valida.

14. GDR NON-5E — CORE INDIPENDENTE DAL SISTEMA, SUPPORTO NON ANCORA VALIDATO OVUNQUE  
Il Core non dipende da uno specifico GDR, da un singolo regolamento o da un particolare meccanismo di risoluzione e può essere adattato a d20, d10, d6, pool di dadi, carte, token, giochi senza dadi o altri meccanismi. Il vertical 5E/SRD 5.1 resta quello con più uso reale accumulato. Questa flessibilità progettuale NON significa accuratezza già validata su tutti i sistemi.

14A. ADAPTER CANDIDATO SRD 2.0 — TEST ESTERNO APERTO  
È ora pubblico `adapters/dh-srd20/ADAPTER.md`, un adapter **Daggerheart™ Compatible** costruito sul Daggerheart SRD 2.0, errata/fonti ufficiali correnti e procedure originali del Divertoscopio.

Evidenza disponibile prima del test esterno:
- audit interno completo del Core Rulebook;
- audit interno completo di Hope & Fear;
- audit del current SRD 2.0 e delle fonti ufficiali web pertinenti;
- Mechanical Gauntlet sintetico interno con 46/46 route coverage;
- stress statico del compiled runtime privato.

Questo NON equivale a validazione esterna. Restano da verificare:
- actual play di giocatori terzi;
- Master umani che lo usano in preparazione e durante sessioni reali;
- clean-room su più modelli/piattaforme;
- campagne lunghe;
- tavoli numerosi;
- edge case rari e uso esteso di supplementi.

Il repository pubblico NON ripubblica Campaign Frame o altro testo proprietario non qualificato come Public Game Content. Quando una sessione richiede quel materiale, l’AI deve lavorare sulla fonte legalmente disponibile all’utente.

15. COMBATTIMENTO — TEST PARZIALE  
Il combattimento è stato provato, ma non abbastanza per dichiarare valida ogni combinazione di:  
- tattica ambientale;  
- tempo/pressione;  
- encounter complessi;  
- gruppi numerosi;  
- livelli alti;  
- molte condizioni/abilità simultanee.

16. MEMORIA / RIPRESA — TEST PARZIALE  
Snapshot e PAUSE & RESUME sono stati progettati e usati. Resta da validare quanto bene funzionano dopo settimane/mesi, su campagne lunghe e fra modelli/chat differenti.

17. AVVENTURE COMMERCIALI  
Per dettagli scena-per-scena l'AI deve avere accesso a materiale che l'utente può legalmente fornire/utilizzare. La conoscenza generale o le discussioni pubbliche non devono essere spacciate per precisione canonica verificata.

18. DIVERTOSCOPIO È ANCORA UN BRAND IN TEST  
Nome, Visual Hammer, categoria e posizionamento stanno ancora attraversando test umani e stress test. Non presentare il naming come marchio registrato o definitivamente validato.

19. ULTRA-GARANZIA — PILOT, NON PROVA DI PERFORMANCE  
La presenza dell'Ultra-Garanzia e del suo simbolico indennizzo reputazionale dimostra che il progetto accetta una conseguenza economica sul fallimento dichiarato; non dimostra da sola che il prodotto aumenti il divertimento. La prova viene da uso reale, feedback, riuso, voglia di tornare a giocare, casi e iterazioni.

20. UTENTI ESTERNI — È PROPRIO CIÒ CHE STIAMO PER TESTARE  
I test interni hanno prodotto segnali utili, ma il closed pilot 10 Player + 10 Master serve precisamente a ottenere evidenza indipendente esterna. Prima del closed pilot non esiste ancora un volume sufficiente di casi terzi.

REGOLA DI COMUNICAZIONE  
Se qualcosa non è stato validato:  
NON inventare sicurezza.  
NON nasconderlo.  
NON svilupparlo preventivamente solo per poter dire che esiste.

Dichiarare il limite, raccogliere evidenza e promuovere la capacità soltanto quando i test lo giustificano.