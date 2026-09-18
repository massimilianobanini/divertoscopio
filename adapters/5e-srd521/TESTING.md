# Test rapido — adapter 5E / SRD 5.2.1

Questo file serve a provare il candidato **5E / SRD 5.2.1** senza leggere in anticipo i failure mode.

Se sei un tester esperto e vuoi separare natural clean-room, red-team e A/B, usa prima [`../../testing/EXPERT-CLEAN-ROOM.md`](../../testing/EXPERT-CLEAN-ROOM.md). Non leggere i failure mode specifici qui sotto prima della prima prova naturale se vuoi evitare priming.

## Prima prova: clean-room

Apri una chat nuova, fornisci soltanto il repository e scrivi:

> Iniziamo. Voglio giocare con le regole 2024 / SRD 5.2.1.

Per un Master:

> Iniziamo. Sono un Master. Voglio usare il Divertoscopio con le regole 2024 / SRD 5.2.1.

Non anticipare all'AI le differenze rispetto al 2014. Se usa una procedura 2014 sbagliata, annotala come failure.

## Cosa osservare

Non andare a cercare artificialmente errori. Se emergono, annota soprattutto:

- contaminazione 2014 -> 2024;
- Surprise gestita come vecchio turno perso / surprise round;
- Heroic Inspiration trattata come vecchio Advantage pre-roll;
- grapple/shove risolti con procedura legacy;
- Exhaustion trattata con la vecchia tabella;
- vecchia regola Bonus Action spell importata nel 2024;
- Hide hardcodata senza rispettare una procedura più specifica della fonte;
- Multiattack usato come Opportunity Attack;
- stat block vecchio usato perché il nome sembra familiare;
- overlay di supplemento applicato fuori dal suo scope;
- level-up o progression inventati;
- stato persistente dimenticato;
- regola non verificata presentata come certa;
- adventure-specific rule esportata globalmente;
- current SRD / errata / official ruling confusi con forum o commenti informali;
- Ready spell che recupera lo slot quando il trigger non avviene;
- Stunned a cui viene aggiunto automaticamente Speed 0 dal 2014;
- Weapon Mastery applicata a chiunque impugni l'arma senza la feature che la abilita.

## Test di source integrity

Se vuoi provare un'avventura commerciale che possiedi legalmente, forniscila nella chat.

Osserva se l'AI:

1. distingue regola generale e regola specifica dell'avventura;
2. evita spoiler;
3. conserva clocks, risorse e conseguenze;
4. non copia il testo proprietario in output non necessario;
5. non usa memoria 2014 per riempire buchi di un'opzione 2024.

## Test di version lock

Prova una situazione in cui esiste una versione 2014 e una 2024 dello stesso concetto. Prova anche a chiamare il sistema “5.5e” in una chat separata: deve instradare allo stesso adapter senza ricadere sul 2014.

PASS:
- l'AI identifica la versione attiva;
- non mischia le due;
- se non può verificare l'opzione corrente, lo dice.

FAIL:
- completa automaticamente la regola corrente con dettagli della versione legacy.

## Stato

Adapter candidato pubblico / **external test open**.

**Public-only static stress — 18/09/2026:** dopo un primo hardening del runtime pubblico, il retest document-level ha coperto **30/30 route/failure bait** previsti.

**Private Mechanical Gauntlet — 18/09/2026:** **160/160 static synthetic conformance PASS** sui casi D24 canonici. Il pass verifica routing, source precedence, anti-contamination e conformità sintetica agli expected state già auditati.

Questi risultati **non sono actual play, non sono test clean-room con modelli esterni e non dimostrano ancora parità col vertical SRD 5.1**.

L'audit interno è molto più ampio di questo file pubblico, ma la validazione esterna / actual play non è ancora sufficiente per dichiarare parità col vertical SRD 5.1.
