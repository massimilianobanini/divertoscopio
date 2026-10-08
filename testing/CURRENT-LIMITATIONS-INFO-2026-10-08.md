# Audit freschezza — Informazioni → Limiti attuali (08/10/2026)

**Status:** PUBLIC INFO CONTRACT / STATIC PASS / NOT A NEW ACTUAL-PLAY VALIDATION.

## Problema ricontrollato

Il documento user-facing KNOWN-LIMITATIONS.md mostrava ancora Data: 18/09/2026 e uno snapshot adapter 5e 2014 del 30/08/2026, nonostante modifiche successive a Gioca subito, milestone, lifecycle dei capitoli, fast bootstrap, V0.4, Alexandrian e Midnight. Nel fallback START-HERE le richieste specifiche di approfondimento venivano generalmente instradate verso MANIFESTO, anche quando l'intento era conoscere limiti e prove correnti.

## Correzione minima

- Prima risposta informativa generica: BOOTSTRAP soltanto; nessun preload extra.
- Quando l'utente esprime il vero intento limiti/test/capacità, il gate si apre e si recupera direttamente KNOWN-LIMITATIONS (stato attuale) e, solo quando pertinente, SYSTEM-SUPPORT. Per principi e metodo: MANIFESTO.
- KNOWN-LIMITATIONS conserva la cronologia precedente, ma rende visibile subito la fotografia dell'08/10/2026 con classificazione IMPLEMENTATO vs TESTATO IN ACTUAL PLAY, per ogni area rilevante.
- README rimanda esplicitamente alla fotografia aggiornata; adapter 2014 marca il 30/08 come storico; V0.4 e Midnight distinguono presenza sul main da validazione umana.
- Non modificare le tre confidence system-specific 85% / 75% / 70% senza nuova evidenza. Non aumentare le promesse o introdurre menu aggiuntivi.

## Test statici eseguiti — GitHub branch readback

17/17 verifiche di contenuto con controllo di: data 08/10, data storica 18/09, avvio live 07/10 datato **prima** dei cambi 08/10, matrice attuale, milestone con scope corretto, H5A senza limite universale, hosted multiplayer implementato ma unvalidated, informazioni puntate a KNOWN, gate zero-preload preservato, README aggiornato, snapshot adapter 30/08 esplicitamente storico, test statici D&D 2024 non cancellati, V0.4 e Midnight già su main ma unvalidated, source promotion marcata main, e riferimenti relativi Markdown validi.

**80/80 riferimenti Markdown relativi nei 8 documenti modificati risolti nella tree main esistente, 0 mancanti.** Non è verifica di link HTTP esterni o Form; non dimostra il comportamento del modello nelle chat indipendenti.

## Black-box manuale ancora da eseguire

1. Nuova chat: link al repository → Iniziamo → Informazioni. PASS se menu immediato senza caricare runtime completo.
2. Scegli «Voglio saperne di più» → «Limiti attuali». PASS se usa il documento aggiornato, data 08/10/2026 e spiegazione chiara del perimetro realmente testato, non il 18/09 come status corrente.
3. Chiedi «Cosa fa oggi Gioca subito rispetto a settembre?». PASS se cita varietà, default milestone solo nell'ambito corretto e H5A, distinguendo implementazione da prova indipendente.
4. Chiedi «D&D 2024 è impossibile? Daggerheart è funzionante?». PASS se spiega adapter candidato/stress statici e ciò che manca in actual play; confidence solo dalla fonte canonica.
5. Chiedi «Multiplayer significa tre account nella stessa chat?». PASS se presenta solo Hosted / Single Chat e non attribuisce una nuova verifica di piattaforma all'08/10.
6. Chiedi «Allora il test di ottobre garantisce 1 minuto e tutte le chiusure?». PASS se dice di NO: un singolo live del 07/10, prima delle modifiche, non è prova delle nuove caratteristiche e l'audit 08/10 è statico.
7. Chiedi «Cos'è già validato?». PASS se non trasforma un PASS documentale, una percentuale interna o una funzionalità pubblicata in una garanzia di affidabilità completa.

**Gate:** non dichiarare PASS comportamentale finché i transcript non sono stati acquisiti e valutati. Questo test di freschezza non modifica CORE, i protocolli di gioco né i metodi di progressione.
