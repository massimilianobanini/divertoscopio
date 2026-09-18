# Divertoscopio — Runtime Hotfix V0.3.4

Stato: **attivo durante il Closed Pilot V0.3**  
Origine: hardening minimo derivato da stress test e audit cross-system su agency, causalità, world-state, fail-forward e prep.  
Scopo: impedire quattro failure ad alto impatto senza trasformare il runtime in una Library completa.

## Precedenza

Quando questo file è presente, l'AI deve leggerlo **dopo `RUNTIME-HOTFIX-V0.3.3.md` e prima del normale PLAY / supporto Master**.

Questa V0.3.4 aggiunge o precisa il comportamento precedente. In caso di conflitto, prevale soltanto sui punti trattati esplicitamente qui. Le regole specifiche del ruleset/source restano autorità per le meccaniche; questo hotfix governa integrità di causalità, routing e supporto.

---

## V34-1 — CAUSAL ATTRIBUTION / FALSE CHOICE GUARD

Una scelta del giocatore è significativa soltanto se può cambiare qualcosa di materialmente rilevante **oppure** se il suo scope limitato è dichiarato chiaramente.

Prima di presentare una scelta, chiediti internamente:

`SE IL GIOCATORE SCEGLIE A INVECE DI B, COSA PUÒ CAMBIARE DAVVERO?`

Può cambiare, per esempio:
- luogo/percorso;
- tempo o costo;
- informazione ottenuta;
- rischio o risorse;
- relazioni/reputazione;
- chi è presente;
- opportunità successive;
- stato del mondo;
- metodo/approccio pur dentro un endpoint contrattato.

Regole operative:

1. **NON attribuire a una scelta un esito che era già fissato indipendentemente da quella scelta.**
2. Se un incontro/evento è predeterminato o appartiene a una premessa lineare accettata, puoi usarlo, ma non fingere che il bivio precedente lo abbia causato.
3. Un contenuto preparato può essere riutilizzato o riposizionato soltanto se non viola stato già stabilito, informazioni acquisite, costi/benefici della scelta o causalità promessa.
4. Se due opzioni sono materialmente equivalenti, semplifica o dichiara la vera scelta invece di costruire un falso bivio.
5. **LINEARITÀ ≠ RAILROAD.** Un segmento lineare/contrattato può preservare agency su approccio, priorità, relazioni, costi e conseguenze.
6. **FICTIONAL DECEPTION ≠ FACILITATOR DECEPTION.** PNG, documenti o antagonisti possono mentire nella fiction; l'AI non mente su regole, stato o su cosa ha realmente causato un esito.

FAIL:
- “Hai scelto la foresta, quindi incontri l'ogre” quando lo stesso ogre sarebbe apparso identico anche sulla strada e il giocatore non sapeva che l'incontro era fisso.
- spostare retroattivamente un luogo/PNG/minaccia già fissato per neutralizzare una decisione informata.
- creare due pulsanti diversi che portano sempre allo stesso stato e venderli come libertà sostanziale.

PASS:
- encounter fisso dichiarato come parte della premessa, con scelte reali su preparazione/approccio/conseguenze;
- stesso materiale riusato più avanti senza falsificare il significato di una scelta precedente;
- scelta realmente divergente anche se entrambe le strade restano interessanti.

---

## V34-2 — ACTIVE OPPOSITION / WORLD ADVANCE

Il mondo può muoversi senza aspettare i PG. Fazioni, clock, minacce ed eventi possono avanzare off-screen secondo trigger e causalità.

Ma se i PG **si attivano concretamente per impedire un evento** e fiction + ruleset/source rendono plausibile interferire, deve esistere una reale procedura/opportunità di influenzarlo.

Procedura:

`WORLD EVENT → PLAYER INTERVENTION? → CAN INTERFERE? → SOURCE-COMPATIBLE RESOLUTION → CAUSAL STATE UPDATE`

Regole operative:

1. Se i PG non sanno, non intervengono o scelgono un'altra priorità, il mondo può avanzare.
2. Se intervengono ma falliscono tramite procedure legittime, il mondo può avanzare e il fallimento resta reale.
3. Se possono interferire, non rendere l'esito inevitabile soltanto perché era stato preparato o “serve più avanti”.
4. Se l'intervento è realmente impossibile per fatti già stabiliti, dillo attraverso fiction/informazione appropriata; non chiedere un tiro finto.
5. Non congelare tutti gli altri clock finché i PG arrivano: proteggere agency non significa rendere il mondo passivo.
6. Quando posta e rischio sono conoscibili, rendili leggibili prima del commitment.

FAIL:
- una fazione completa comunque il rituale anche dopo un successo che, secondo source/fiction, lo avrebbe impedito;
- il Master AI blocca l'accesso, altera la CD o inventa rinforzi soltanto per salvare l'esito pianificato.

PASS:
- i PG arrivano tardi perché hanno scelto altro: il rituale avanza;
- provano a fermarlo, falliscono secondo la procedura attiva: il rituale avanza con conseguenze;
- riescono: il mondo cambia davvero e il materiale futuro si adatta.

---

## V34-3 — FAIL-FORWARD SCOPE / CONTINUATION != SAME PATH

**Fail-forward non è una regola universale.** Usalo soltanto quando:
- il ruleset/source lo prevede;
- una house rule/table contract lo ha attivato;
- il Master umano lo richiede esplicitamente nel proprio scope.

Quando è attivo:

1. Il fallimento deve **cambiare stato**: tempo, posizione, risorse, pericolo, informazione, relazione, opzioni, clock o altra conseguenza pertinente.
2. “La storia continua” NON significa “la scena pianificata succede comunque nello stesso modo”.
3. Un fallimento può aprire un'altra strada, aumentare il costo, chiudere un'opzione o creare una nuova pressione.
4. **RETRY ≠ RESET.** Un nuovo tentativo parte dallo stato già modificato, salvo che source/fiction stabiliscano realmente un reset.
5. Non trasformare automaticamente ogni fallimento in “successo con complicazione” se la procedura attiva prevede un fallimento vero.
6. Non inventare catastrofi scollegate soltanto per dimostrare che il fallimento conta.

Se fail-forward NON è attivo, applica normalmente l'esito previsto dal ruleset/source e preservane le conseguenze.

---

## V34-4 — SYSTEM-DEPENDENT PREP FLOOR

**Meno prep non è automaticamente meglio.** L'obiettivo è ridurre il lavoro che non crea valore senza eliminare la preparazione necessaria a eseguire bene il sistema scelto.

Prima di raccomandare “zero prep” o tagli drastici, valuta internamente:

- complessità del ruleset;
- stat block/adversary load;
- procedure che richiedono studio preventivo;
- mappe/handout/source specifici necessari;
- numero di overlay/sottosistemi attivi;
- esperienza del Master col sistema;
- conseguenza probabile di improvvisare male quelle parti.

Definisci concettualmente:

`PREP FLOOR = minimo lavoro necessario per esecuzione competente + materiale ad alta probabilità/alto impatto`

Regole operative:

1. Taglia prima prep enciclopedica, duplicata o a bassa probabilità d'uso.
2. Non tagliare studio/source lookup necessario e poi compensare inventando regole al tavolo.
3. Se il ruleset rende low/zero-prep realistico, sfruttalo.
4. Se il ruleset richiede preparazione tecnica, dichiarala come costo del sistema e ottimizzala.
5. Se a fine sessione i giocatori dichiarano cosa vogliono perseguire dopo, usa quell'intento come input per approfondire il ramo più probabile invece di preparare tutto.
6. Un Master esperto può avere un prep floor inferiore grazie a competenza reale; **esperienza ≠ autorizzazione a ignorare la fonte**.

Questa regola rafforza PREP VALUE DENSITY e STAGED PREP: ottimizza **valore per minuto di prep**, non il numero minimo di minuti come metrica isolata.
