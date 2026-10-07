# QUICK START VARIETY + UNIVERSAL ARC LIFECYCLE — REGRESSION PLAN

Stato: CANDIDATE / 2026-10-08. Implementazione documentale: H5A in RUNTIME-HOTFIX-V0.3.2-BASE, route PLAYER e fallback START-HERE. Controlli statici NON equivalgono a uso reale.

## Obiettivo
Due failure osservabili: (1) "scegli tutto tu" converge su pochi personaggi e la stessa apertura; (2) avventure/capitoli, anche dopo la mini-avventura iniziale, continuano senza riconoscere una chiusura significativa o dimenticano handoff/progressione.

## Modello di qualità
- **Varietà funzionale:** identità giocabile del PG, obiettivo locale, funzione della situazione iniziale e conflitto offrono azioni realmente diverse. Nuove chat indipendenti senza storico non hanno garanzia di unicità assoluta.
- **Struttura ricorsiva:** CAMPAGNA > AVVENTURA/ARCO > CAPITOLO/ATTO > SCENA. SESSIONE è una finestra esterna, può terminare nel mezzo. Solo segnali maturati nella fiction autorizzano la chiusura; 4–6 scene è un orizzonte SOFT solo per quick-start originale.
- **Unico handoff H5:** chiusura fictionale/H11; riconciliazione di stato e ricompense; XP/milestone e level-up se dovuti; checkpoint player-safe; una CTA al Google Form quando applicabile; possibilità di continuare o fermarsi.
- **No railroading:** il PG può deviare, ottenere successi anticipati, fallire o morire se contratto/fonte lo consentono. Non portare la trama verso una destinazione per onorare un budget.
- **Source lock:** per avventura pubblicata prevalgono struttura e trigger conosciuti dalla fonte; nessun capitolo inventato in nome di un template.

## Regressioni comportamentali — da eseguire in nuove chat

**VAR-01 — 20 quick-start indipendenti.** Avvia 20 chat nuove con stesso link, PLAYER > GIOCA SUBITO > "scegli tutto tu". Raccogli classe/specie, obiettivo, tipo di apertura, conflitto, decisioni disponibili e tempo alla prima decisione. PASS se non emerge un collasso sistematico su un unico template o una sola coppia classe/specie; tracciamento di diversità di COMBINAZIONI, non solo nomi. Non confondere la naturale ripetizione casuale con un failure universale. Segnala distribuzioni ed esempi, non dichiarare "mai ripetuto" oltre il campione.

**VAR-02 — Cliché specifico.** Ripeti 5 avvii comparabili. FAIL se campane + carro/persona intrappolata + minaccia in arrivo compaiono come schema dominante senza richiesta. PASS se la prima decisione implica funzioni narrative differenti, non solo scenario rinominato.

**VAR-03 — Classi non marziali legali.** Nella serie di avvii verificare che quando coerente possano comparire classi magiche/sociali/esplorative, senza stat block inesistenti, spell slot inventati o scheda mancante per il primo tiro pertinente. FAIL se "principiante" viene trattato sempre come guerriero umano per default.

**VAR-04 — Unicità fra chat non garantita.** Nuova chat senza memoria delle altre. PASS se non dichiara di conoscere le avventure precedenti né promette unicità globale. FAIL se inventa un registro comune.

**VAR-05 — Campagna già in corso.** Il PG resta coerente e le nuove scene rispettano il canon; niente razza/classe/obiettivo rimescolati per quota di varietà.

**ARC-01 — Avventura introduttiva originale completa.** Gioca davvero fino a una risoluzione locale, segnando scene significative e scelta. PASS se arriva a un esito coerente in un orizzonte ragionevole quando i PG ne seguono la premessa, senza boss o quest aggiunte per allungare; 4–6 non deve essere un timer.

**ARC-02 — Risoluzione alla scena 2.** Il PG realizza precocemente l'obiettivo in modo legale. PASS: chiusura anticipata e conseguenze persistenti; FAIL: nuova chiave/ostacolo retroattivo perché "mancano scene".

**ARC-03 — Esito sfavorevole.** Il PG fallisce irrevocabilmente. PASS: epilogo coerente, fallimento reale, possibilità di nuovo arco se sopravvive; FAIL: plot armor e successo garantito.

**ARC-04 — Deviazione volontaria.** Il PG abbandona la missione iniziale per altro. PASS: il mondo reagisce, vecchio arco può andare PAUSED/CLOSED secondo causalità e nuovo obiettivo emerge senza forza; FAIL: railroad alla missione original.

**ARC-05 — Capitolo successivo originale.** Dopo chiusura di avventura 1, il PG prosegue in un'avventura 2 composta da capitoli A, B, C con domande locali distinte. PASS: ogni capitolo riconosce una risoluzione propria; lore, relazioni, inventario, risorse e XP permangono senza reset; nessun obbligo di durata identica.

**ARC-06 — Pausa nel mezzo.** Durante capitolo B il giocatore scrive "devo andare, riprendiamo domani". PASS: snapshot e stessa situazione alla ripresa, nessuna conclusione fittizia e nessun Form solo per la pausa neutra.

**ARC-07 — Chiusura di sessione e capitolo coincidenti.** PASS: una sola sequenza H5 e una sola CTA al Form, non duplicata; il giocatore può continuare o fermarsi.

**ARC-08 — Finale variabile.** Prova chiusura tranquilla, payoff, post-credit e cliffhanger solo quando coerenti e spoiler-safe. PASS: niente stinger obbligatorio o spoiler GM; non forzare il personaggio a conoscere cutaway.

**ARC-09 — 5e XP 275 → 300.** Guadagno source-backed di almeno 25 XP prima del prossimo capitolo: PASS se aggiornamento e level-up 1→2 dovuto, scelte build lasciate al giocatore e aggiornamento delle capacità; FAIL: dimenticanza/doppio conteggio/level-up automatico per fine capitolo.

**ARC-10 — Niente progressione dovuta.** Con 125 XP e capitolo concluso, PASS: rimane livello 1 e 125 XP (salvo XP realmente guadagnati durante il capitolo), senza inventare milestone o filler.

**ARC-11 — Avventura pubblicata con fonte.** Fonte con capitoli e livello atteso; PASS: segue i confini e gli eventi della fonte, controlla H9 prima della fase seguente; il livello atteso da solo non produce level-up.

**ARC-12 — Sandbox / campagna lunga.** Molte scene non sono un arco unico predefinito. PASS: registra micro-risoluzioni e thread significativi senza imporre un boss/finale globale o chiusure ogni 4–6 scene.

**ARC-13 — Blocco e indizi.** Una rivelazione cruciale non emerge dopo diverse scene. PASS: diagnostica prima di aggiungere problemi; recupera vie di conoscenza plausibili e valorizza azioni concrete, niente clue teleport e niente finale arbitrario.

**ARC-14 — Fast bootstrap invariato.** Prima del gate solo BOOTSTRAP; nessuna domanda extra su genere, numero di scene, tipo di finale, varietà, milestone. PASS se prima decisione disponibile subito dopo "scegli tutto tu", salvo mismatch materiale.

**ARC-15 — Continuità tra chat.** Esporta checkpoint player-safe con arc scope/status, goal, outcomes, thread aperti, livello/XP o trigger e pending level-up; riprendi in nuova chat e verifica niente stato inventato o XP doppio.

## Copertura minima suggerita per il pilot
- **20** avvii indipendenti per VAR-01 (misura diversità e latenza, non prova statistica definitiva).
- **5** avventure brevi giocate realmente fino alla conclusione (inclusi fallimento e deviazione).
- **3** capitoli consecutivi in una campagna, includendo pausa/ripresa e audit progresso.
- **1** transizione di avventura pubblicata con testo legittimamente disponibile.
- Registra feedback FUN / Desire to Return usando il SOLO Form pubblico vigente, senza duplicarlo nella chat. Metriche di durata, decisioni, scene, template e problemi di continuità dall'osservazione.

## Promotion gate
1. Static diff/readback: nessun bootstrap modificato, H5/H11/H6/H9 e form vigenti immutati; nessun CORE/adapter modificato.
2. Run clean-room e risultati su trascrizioni, incluso controllo latenza e test indipendenti.
3. Se regressioni P0 (railroad, falso XP, spoiler, source mismatch) non fare merge.
4. Se solo pass statici: NON chiamare il comportamento "garantito" o "validato". Mantieni PR come candidata.
