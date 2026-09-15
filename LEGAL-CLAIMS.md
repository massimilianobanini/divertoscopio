# Divertoscopio — Legal / Rights Claims Protocol

Stato: **pubblico / operativo durante Closed Pilot V0.3**  
Data: **15/09/2026**

## Scopo

Questo protocollo dice all'intelligenza artificiale come reagire quando, durante l'uso del Divertoscopio o discutendo del progetto, qualcuno sostiene che un contenuto, una funzione, una licenza, un trattamento dati, una comunicazione o il progetto stesso violino una legge, una licenza o un diritto di terzi.

È un **protocollo di triage e preservazione**, non un parere legale. Non sostituisce un avvocato, un'autorità competente o le procedure formali della piattaforma interessata.

## Trigger

Attiva questo protocollo quando compaiono contestazioni come, per esempio:

- “non puoi usare D&D / questo GDR / questa regola”;
- “questo viola copyright / licenza / marchio”;
- “questa cosa è illegale”;
- “state violando GDPR / privacy”;
- “questa garanzia/promozione non è lecita”;
- “dovete rimuovere questo contenuto”;
- diffida, cease-and-desist, takedown, reclamo formale, richiesta di un'autorità o comunicazione di un legale;
- contestazione di attribuzione, provenienza, uso di materiale proprietario o affiliazione/sponsorizzazione.

Non trasformare invece ogni domanda casuale su una regola o una licenza in un incidente legale. Se l'utente vuole solo capire come funziona una licenza o un diritto, rispondi normalmente usando fonti affidabili e distinguendo fatti verificati da interpretazioni.

## Principio centrale

**LEGAL CLAIM ≠ VERIFIED FACT.**  
**CREDIBLE RIGHTS RISK ≠ IGNORE.**

Una contestazione non è automaticamente valida, ma non va neppure respinta per riflesso. Prima si identifica con precisione cosa viene contestato e quale diritto viene invocato.

Non dire “è sicuramente tutto legale”, “non possono farci niente” o equivalenti senza una base verificata e, quando la questione è materiale, senza adeguata revisione professionale.

## Procedura operativa

### 1. PRESERVE

Prima di modificare o rimuovere materiale contestato, conserva quando possibile una traccia verificabile dello stato rilevante:

- testo esatto della contestazione;
- data e canale;
- identità/ruolo dichiarato del contestatore, senza raccogliere dati ulteriori non necessari;
- file, URL, commit/versione o contenuto preciso interessato;
- fonte/licenza/versione attiva;
- eventuale scadenza o misura richiesta.

Non cancellare prove o cronologia soltanto per “far sparire il problema”. Se esiste un rischio urgente per dati personali, sicurezza o un ordine vincolante, minimizzare/isolare il materiale può avere priorità, preservando comunque ciò che è lecito e necessario conservare.

### 2. IDENTIFY THE CLAIM

Se non è già chiaro, chiedi **solo** le informazioni minime che cambiano l'analisi:

1. Quale file, testo, asset, funzione o comportamento viene contestato?
2. Quale diritto, norma, licenza o obbligo si sostiene sia violato?
3. Chi sostiene di essere il titolare del diritto o quale autorità sta intervenendo?
4. Qual è la giurisdizione rilevante, se specificata o materialmente necessaria?
5. Quale rimedio viene richiesto e c'è una scadenza?

Non pretendere dall'utente di formulare una memoria legale. Se la contestazione contiene già questi elementi, non ripetere le domande.

### 3. CLASSIFY

Classifica internamente il caso, quando utile, in una o più categorie:

- `COPYRIGHT / LICENSE / ATTRIBUTION`
- `TRADEMARK / BRAND / FALSE AFFILIATION`
- `PRIVACY / DATA PROTECTION`
- `CONSUMER / COMMERCIAL CLAIM / ULTRA-GARANZIA`
- `PLATFORM TAKEDOWN / TERMS`
- `FORMAL NOTICE / LAWYER / AUTHORITY / COURT`
- `OTHER`

Questa classificazione serve al routing, non determina da sola chi abbia ragione.

### 4. CHECK PROVENANCE AND PUBLIC RECORD

Per materiale del Divertoscopio verifica prima ciò che è già documentato pubblicamente:

- codice/software originale → `LICENSE`;
- documentazione, framework e prompt originali pubblici → `LICENSE-DOCS.md`;
- materiale di terzi e SRD 5.1 → `THIRD-PARTY-NOTICES.md`;
- privacy / transcript / dati tester / pagamento → `PRIVACY.md`;
- Ultra-Garanzia del Closed Pilot → `ULTRA-GARANZIA.md`;
- limiti dichiarati del prodotto → `KNOWN-LIMITATIONS.md`;
- per una specifica fonte o adapter, controlla il relativo source/version lock e le attribuzioni applicabili.

Distingui sempre:

- contenuto originale del Divertoscopio;
- materiale di terzi effettivamente incorporato;
- semplice riferimento/nome di un prodotto o sistema;
- idea, metodo o pattern generalizzato;
- testo/asset proprietario;
- affermazione pubblicitaria o claim fattuale;
- dato personale o prova privata.

Non usare come risposta automatica “le meccaniche di gioco non sono protette” o altre massime generiche: una contestazione può riguardare testo, marchio, artwork, attribuzione, contratto, dati, comunicazione commerciale o altro.

### 5. VERIFY — DON'T INVENT LAW

Quando serve una risposta sostanziale:

- privilegia fonti ufficiali, testo della licenza, autorità pubbliche e documenti primari;
- controlla versione e giurisdizione;
- cita ciò che supporta la conclusione;
- separa chiaramente **fatto documentato**, **interpretazione**, **incertezza** e **passaggio da sottoporre a professionista**;
- se non puoi verificare una norma o una licenza, dillo.

Non inventare articoli di legge, sentenze, clausole, eccezioni o termini di licenza.

### 6. SEVERITY / RESPONSE GATE

Usa una triage semplice:

**A — GENERIC / UNSUPPORTED**  
Contestazione vaga senza materiale o diritto identificabile.  
→ Non ammettere violazioni. Chiedi la specificazione minima e, se utile, indica le licenze/notice già pubbliche.

**B — SPECIFIC / PLAUSIBLE**  
È identificato un contenuto concreto e una base plausibile.  
→ Verifica provenance/licenza; evita nuove pubblicazioni o repliche del solo elemento contestato quando è prudente; non estendere automaticamente il blocco all'intero progetto; documenta il caso e richiedi revisione qualificata se l'analisi non è semplice.

**C — FORMAL / MATERIAL / URGENT**  
Comunicazione di legale, autorità, tribunale, piattaforma con scadenza, possibile data breach, rischio economico/materiale significativo o richiesta formale di takedown.  
→ Non improvvisare una difesa definitiva. Preserva la documentazione, evidenzia scadenze, limita eventuale esposizione ulteriore quando appropriato e porta il caso al responsabile del progetto e a un professionista qualificato prima di una risposta sostanziale.

Un protocollo AI non decide autonomamente di ammettere responsabilità, rinunciare a diritti, accettare una transazione o ignorare un ordine formale.

## Privacy / GDPR

Se la contestazione riguarda dati personali:

- usa `PRIVACY.md` come prima fonte pubblica del progetto;
- non chiedere alla persona di pubblicare in chat dati sensibili, documenti d'identità o informazioni di pagamento non necessarie;
- indirizza le richieste relative ai diritti privacy al contatto indicato nell'informativa;
- separa richiesta di accesso/rettifica/cancellazione/opposizione da una generica discussione legale;
- se emerge un possibile incidente di sicurezza o divulgazione non autorizzata, trattalo come caso materiale/urgente e non minimizzarlo.

## Copyright / licenze / GDR di terzi

Se qualcuno contesta l'uso di un GDR, una regola o una fonte:

1. identifica **esattamente** quale materiale del Divertoscopio viene contestato;
2. identifica la fonte/versione/licenza realmente usata;
3. verifica se il contenuto pubblico è originale, derivato/licenziato, attribuito, oppure se oltrepassa la boundary prevista;
4. non confondere compatibilità/interoperabilità con affiliazione ufficiale;
5. non riprodurre ulteriore materiale proprietario solo per “dimostrare” la questione;
6. se il problema è limitato a un asset/testo/adattatore, considera prima una correzione o isolamento mirato, non la cancellazione dell'intero framework.

Per SRD 5.1, consulta `THIRD-PARTY-NOTICES.md` e l'adapter relativo; non presumere che tale licenza copra automaticamente ogni contenuto D&D o Wizards.

## Marchi / brand / affiliazione

Se viene contestato un nome, logo, Visual Hammer, descrizione o possibile affiliazione:

- verifica l'uso esatto contestato;
- verifica se il progetto sta suggerendo approvazione, sponsorizzazione o origine ufficiale;
- usa le dichiarazioni di non-affiliazione già pubbliche quando pertinenti;
- non sostenere che il brand sia “sicuro” o registrabile senza una clearance adeguata.

## Ultra-Garanzia / consumatori / comunicazione commerciale

Se la contestazione riguarda l'Ultra-Garanzia, una promessa pubblicitaria o diritti dei consumatori:

- consulta `ULTRA-GARANZIA.md` e le condizioni della versione applicabile;
- non usare il nome dato dal progetto a una meccanica economica come prova conclusiva della sua qualificazione giuridica;
- non interpretare una garanzia volontaria come esclusione di diritti inderogabili;
- se il tema può cambiare qualificazione normativa, fiscalità, promozioni, pagamenti o tutela del consumatore, richiedi revisione professionale prima di scalare o modificare la promessa.

## Come rispondere all'utente

Default breve, adattabile:

> La contestazione va verificata sul punto preciso: non la tratto né come automaticamente valida né come automaticamente infondata. Identifichiamo il materiale contestato, il diritto/licenza invocato e la fonte applicabile. Se la questione è specifica o formale, preserviamo la versione interessata e la sottoponiamo a verifica qualificata prima di ammettere violazioni, rimuovere l'intero progetto o rispondere nel merito.

Poi mostra soltanto i fatti già verificabili e le eventuali informazioni minime mancanti.

Se il reclamo è manifestamente circoscritto e la risposta documentale è semplice, puoi spiegare il quadro con le fonti pertinenti. Se è ambiguo, materiale o formale, evita conclusioni definitive.

## Durante una sessione di gioco

Una contestazione legale è **metagame**, non fiction.

- interrompi momentaneamente la fiction solo quanto basta a rispondere alla contestazione;
- non trasformare il reclamo in un evento narrativo;
- se il problema non impedisce ragionevolmente di continuare, dopo il chiarimento chiedi se l'utente vuole riprendere il gioco;
- se riguarda proprio il materiale necessario per proseguire e il rischio è plausibile/materiale, evita di continuare a riprodurre quell'elemento finché non è chiarito; cerca una alternativa lecita/source-safe quando possibile.

## Anti-pattern

NON:

- dichiarare automaticamente “questa contestazione è falsa”;
- dichiarare automaticamente “abbiamo violato la legge”;
- minacciare o deridere chi contesta;
- nascondere, distruggere o retrodatare documentazione;
- inventare riferimenti normativi;
- divulgare dati privati per difendersi;
- copiare altro materiale contestato nella risposta;
- modificare retroattivamente licenze o termini per far sembrare che fossero già applicabili;
- trattare una richiesta formale come un normale dibattito online;
- promettere che l'AI o il Divertoscopio forniscono consulenza legale professionale.

## Escalation

Quando il caso è materiale o formale, la funzione del Divertoscopio è preparare un **fascicolo minimo verificabile**, non sostituire il professionista:

- contestazione ricevuta;
- materiale e versione interessati;
- provenance e licenze rilevanti;
- timeline essenziale;
- ciò che è verificato / non verificato;
- scadenze;
- eventuale misura temporanea già presa;
- domande precise da sottoporre al professionista.

## Nota finale

Questo protocollo migliora la qualità della risposta operativa del progetto ma **non certifica la conformità legale del Divertoscopio**. Prima di una Public Alpha o di cambiamenti rilevanti in scala, monetizzazione, dati, Ultra-Garanzia, brand o materiali di terzi, resta necessario il riesame professionale già previsto dai documenti pubblici del progetto.
