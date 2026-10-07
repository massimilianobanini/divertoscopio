# PLAYER PERSONALIZATION STRESS TEST — 2026-10-08

Stato: **PASS dopo minimum-delta fixes**  
Scope: bootstrap PLAYER + PERSONALIZZA PRIMA + PERSONALIZZA A FONDO + fallback START-HERE + regression coverage.

## Obiettivo

Verificare che l'aggiornamento della schermata `PERSONALIZZA PRIMA`:
- mostri esempi concreti invece di domande astratte;
- permetta risposte naturali complete;
- non trasformi la personalizzazione in un questionario obbligatorio;
- non ripeta l'intera schermata quando mancano alcuni campi;
- permetta `iniziamo` in qualsiasi momento;
- continui a funzionare con accesso GitHub parziale;
- non rompa il fast bootstrap;
- lasci realmente funzionante anche `PERSONALIZZA A FONDO`.

## Failure trovati al primo pass

### F1 — fallback PERSONALIZZA PRIMA incompleto
`START-HERE.md` gestiva il fallback di GIOCA SUBITO ma non conteneva un percorso operativo sufficiente per PERSONALIZZA PRIMA quando `player/PLAYER.md` non era accessibile.

**Fix:** aggiunto fallback autosufficiente con esempi concreti, risposta naturale, gestione campi mancanti ed escape hatch.

### F2 — PERSONALIZZA A FONDO offerto ma non implementato
Il menu esponeva PERSONALIZZA A FONDO (15+ minuti), ma `player/PLAYER.md` non aveva una route operativa dedicata.

**Fix:** aggiunta `ROUTE 2B — PERSONALIZZA A FONDO`, progressiva e interrompibile. Parte dalle preferenze ad alto impatto e approfondisce pochi temi per volta; `iniziamo` porta subito al PLAY.

### F3 — possibile duplicazione nel fallback
In accesso parziale, `START-HERE.md` poteva essere interpretato come istruzione a mostrare di nuovo la nota velocità/ragionamento e il menu PLAYER già mostrati da BOOTSTRAP.

**Fix:** reso esplicito che nota e menu non vanno ripetuti quando BOOTSTRAP li ha già mostrati e la scelta è già stata fatta.

## Regressioni aggiunte

In `testing/FIRST-USE-BLACK-BOX.md`:
- 12a — esempi concreti per tipo di esperienza / fantasy del PG;
- 12b — esempio di frase naturale completa;
- 12c — campi mancanti senza restart del questionario;
- 12d — `iniziamo` immediato con default sicuri;
- 12e — fallback PERSONALIZZA PRIMA con accesso parziale;
- 12f — route operativa PERSONALIZZA A FONDO;
- 12g — fallback PERSONALIZZA A FONDO;
- 12h — niente duplicazione di nota/menu dopo bootstrap.

## Gauntlet finale

1. PASS — pre-gate: solo BOOTSTRAP  
2. PASS — menu iniziale Master / Giocatore / Informazioni  
3. PASS — PLAYER espone GIOCA SUBITO / PERSONALIZZA PRIMA / PERSONALIZZA A FONDO  
4. PASS — route canonica PERSONALIZZA PRIMA presente  
5. PASS — domanda sull'esperienza accompagnata da esempi concreti  
6. PASS — esempi di risposte complete in linguaggio naturale  
7. PASS — singola frase naturale accettata  
8. PASS — campi mancanti senza ripetere tutto  
9. PASS — escape hatch `iniziamo` con default sicuri  
10. PASS — PERSONALIZZA A FONDO implementato  
11. PASS — PERSONALIZZA A FONDO progressivo, non monolitico  
12. PASS — fallback PERSONALIZZA PRIMA presente  
13. PASS — fallback PERSONALIZZA A FONDO presente  
14. PASS — fallback non ripete la nota già mostrata  
15. PASS — fallback non ripete il menu già scelto  
16. PASS — confidence sistema resta centralizzata in SYSTEM-SUPPORT  
17. PASS — regression cases 12a–12h presenti  
18. PASS — suite FAST-BOOTSTRAP intatta

**Risultato finale: 18/18 PASS.**

## Limite del test

Questo è uno **stress test statico/di contratto** sul repository e una simulazione dei rami decisionali. Verifica che le istruzioni siano presenti, coerenti e coperte da regressioni.

Non equivale a un **clean-room comportamentale indipendente** in una nuova chat: quel test resta necessario per verificare latenza reale, interpretazione effettiva delle istruzioni, qualità delle domande, eventuali omissioni del modello e carico percepito dall'utente.

## Prossimo test consigliato

Nuova chat, solo:
`https://github.com/massimilianobanini/divertoscopio`

Sequenza minima:
1. `Iniziamo`
2. `2` — Giocatore
3. `2` — PERSONALIZZA PRIMA
4. rispondere con una frase naturale incompleta, per esempio: `Sono esperto, voglio un fantasy investigativo con molta libertà e magia creativa.`
5. verificare che l'AI non ripeta l'intero questionario e chieda soltanto l'eventuale dato materialmente necessario.
6. ripetere in una seconda clean-room scegliendo `3 — PERSONALIZZA A FONDO`.

PASS comportamentale solo se il flusso resta naturale, senza duplicazioni e senza trasformare la personalizzazione in un modulo obbligatorio.
