# Divertoscopio — Public Stress Test V0.3 / V0.4 Candidate

<!-- AI FAST BOOTSTRAP: se l'utente ha incollato questo repository e ha scritto "Iniziamo" o "Aiutami", apri **esclusivamente BOOTSTRAP.md** e usa i menu deterministici senza pre-caricare START-HERE, CORE, PLAYER, MASTER, runtime, adapter, Library, toolbox o protocolli. Il GATE DI RAGIONAMENTO si apre solo quando il giocatore sceglie GIOCA SUBITO / PERSONALIZZA PRIMA / PERSONALIZZA A FONDO, quando il Master esprime un problema/obiettivo concreto, oppure quando viene chiesto un approfondimento informativo specifico. Solo dopo il gate consulta START-HERE.md e applica RUNTIME-HOTFIX-V0.3.2.md con la catena runtime completa, poi carica soltanto i file pertinenti. Se ruolo/modalità/sistema/obiettivo sono già chiari nel messaggio iniziale, salta i menu ridondanti e considera il gate già aperto. Se durante l'uso emerge una contestazione legale, di copyright/licenza, marchio, privacy/GDPR, Ultra-Garanzia, takedown o altro diritto, consulta LEGAL-CLAIMS.md. Non riversare il repository sull'utente. -->

<p align="center">
  <img src="assets/visual-hammer/DIVERTOSCOPIO-visual-hammer-lime.png" alt="Visual Hammer del Divertoscopio — mettere a fuoco il divertimento" width="180">
</p>

**Lascia al caso i dadi, non il divertimento.**

**IL DIVERTOSCOPIO È IL PRIMO STRUMENTO ITALIANO PER GDR DA TAVOLO CON L’ULTRA-GARANZIA DEL PREZZO NEGATIVO.**

**Dal “vorrei giocare” al gioco vero con meno attrito.**

## In 30 secondi

Il Divertoscopio usa l’AI per aiutarti in due modi: **giocare** oppure **preparare e migliorare le tue partite come Master**. Non devi imparare prompt speciali o studiare il repository prima di provarlo.

### Se vuoi giocare

Puoi iniziare anche se non hai un Master o un gruppo disponibile. Puoi scrivere, per esempio:

> “Voglio giocare subito a un fantasy avventuroso.”

oppure semplicemente:

> “Scegli tutto tu.”

Il percorso più rapido è pensato per portarti dalla configurazione al gioco vero in pochi minuti.

### Se sei un Master

Non deve creare tutto al posto tuo. Puoi usarlo come **secondo paio di occhi**. Per esempio puoi chiedergli:

- “Questi sono i miei giocatori: come posso preparare qualcosa che interessi tutti?”
- “Questa è la mia avventura: dove potrebbero bloccarsi o annoiarsi?”
- “Ho due ore per preparare la sessione: su cosa vale davvero la pena lavorare?”
- “Ieri questa parte non ha funzionato: cosa posso provare di diverso?”

L’idea è usare l’AI **dove ti è utile**, lasciando a te e al tuo gruppo idee, decisioni, interpretazione e modo di giocare.

**Gratis e open source:** non serve un abbonamento al Divertoscopio per provarlo. Nel Public Stress Test corrente, una persona maggiorenne che lo usa davvero e non è soddisfatta può richiedere **€1** con l’Ultra-Garanzia secondo i termini correnti, fino a un massimo complessivo di **100 claim qualificati**.

### Non nasce per sostituire il tuo tavolo

Se hai già un gruppo, un Master e un modo di giocare che vi piace senza AI, **non c’è niente da sostituire**. Il Divertoscopio non nasce per convincere chi non vuole l’intelligenza artificiale nel proprio GDR.

Serve quando l’AI può togliere un ostacolo: **tempo, preparazione, disponibilità del Master, difficoltà a incastrare gli orari, solo play, continuità, ricerca delle regole o supporto al Master**. Puoi usarlo anche quando la vita adulta rende difficile organizzare una sessione tradizionale, fermarti quando serve e riprendere da un checkpoint.

### Non è soltanto un “AI Master”

Un chatbot può già inventare una storia. Il Divertoscopio prova a fare qualcosa di più utile: **ricordare ciò che è successo, rispettare le regole e le scelte dei giocatori, aiutarti a capire cosa sta funzionando e cosa cambiare, e ridurre il lavoro inutile**.

L’obiettivo non è far fare tutto all’AI. È aiutare le persone a giocare meglio e con meno ostacoli, senza togliere al Master e ai giocatori le parti che vogliono tenere per sé.

## Inizia

Non devi studiare questo repository.

1. Apri una nuova chat su **ChatGPT**.
2. Incolla il link di questo repository: `https://github.com/massimilianobanini/divertoscopio`
3. Scrivi: **Iniziamo**

> **Supporto corrente:** la versione pubblica è ottimizzata e supportata su **ChatGPT**. I dettagli tecnici, i limiti delle altre piattaforme e la modalità multiplayer sono riportati più sotto.

## Scegli il sistema

Se vuoi giocare o lavorare come Master su uno dei sistemi già coperti pubblicamente, puoi scegliere liberamente:

La matrice pubblica corrente è in **[SYSTEM-SUPPORT.md](SYSTEM-SUPPORT.md)**, che è l'unica fonte canonica delle percentuali di supporto.

> **Stima interna basata su adapter, stress test e actual play. Non è una probabilità di divertimento né una garanzia che ogni ruling sia corretto.**

Quando scegli un sistema, il Divertoscopio mostra nel primo messaggio successivo un piccolo box con la confidence corrente. Se un GDR non ha ancora una percentuale pubblica, viene indicato come **non valutato**: il sistema non deve inventare un numero.

Per giocare, puoi scrivere per esempio:

> **Iniziamo. Sono un giocatore esperto. Voglio giocare D&D 2024.**

oppure:

> **Iniziamo. Sono un giocatore esperto. Voglio giocare a Daggerheart™.**

Per un Master:

> **Iniziamo. Sono un Master. Voglio preparare una sessione di D&D 5e 2014.**

L'AI deve rispettare il sistema/edizione scelto e caricare l'adapter corrispondente. **Non deve inferire il sistema dalla tua identità, esperienza, dai creator che conosci o dalle fonti che hanno contribuito alla ricerca del Divertoscopio.**

Per un test esterno pulito, usa prima soltanto il repository + una richiesta naturale. Le guide specifiche sono [`adapters/5e-srd521/TESTING.md`](adapters/5e-srd521/TESTING.md), [`adapters/dh-srd20/TESTING.md`](adapters/dh-srd20/TESTING.md) e il protocollo generale [`testing/EXPERT-CLEAN-ROOM.md`](testing/EXPERT-CLEAN-ROOM.md).

Per la separazione delle schede/stati personaggio fra sistemi è disponibile anche [`testing/CHARACTER-SHEET-CROSS-SYSTEM.md`](testing/CHARACTER-SHEET-CROSS-SYSTEM.md).

## Sei un Master?

Puoi usare direttamente il Divertoscopio con i passaggi sopra oppure consultare il **Kit di sopravvivenza per Master di GDR con AI — V0.3**:

- [`master/KIT-DI-SOPRAVVIVENZA-MASTER.pdf`](master/KIT-DI-SOPRAVVIVENZA-MASTER.pdf)

Il **Kit** è una guida introduttiva autonoma. Il **Divertoscopio** è il sistema completo ospitato in questo repository. Il Kit non è necessario per usare il Divertoscopio.

Non hai voglia di leggere tutto il Kit? Non serve. Incolla il link del repository in ChatGPT e scrivi: **“Iniziamo. Sono un Master.”** L'AI userà soltanto ciò che serve al problema che vuoi risolvere, recuperando on-demand anche la toolbox pubblica di tecniche Master.

## Supporto tecnico corrente

### Supporto piattaforme

La versione pubblica corrente del Divertoscopio è **ottimizzata e supportata solo su ChatGPT**.

**Gemini e Claude non sono supportati al momento.** I limiti osservati sono diversi:

- **Gemini:** incollare il solo URL GitHub non ha dato accesso affidabile al repository e, nel test reale, Gemini ha interpretato erroneamente il problema come repository vuoto/inaccessibile. È stato esplorato anche un workaround con una **Gem dedicata + knowledge/mirror su Google Drive**, ma richiede troppo setup rispetto alla promessa semplice `link + Iniziamo`. Resta backlog sperimentale.
- **Claude:** il Divertoscopio è riuscito ad avviarsi, ma nel test reale sono comparsi errori e il limite di capacità/messaggi della conversazione è stato raggiunto dopo pochi scambi, interrompendo di fatto l'avventura e imponendo circa **6 ore di attesa** prima di poter continuare. Non attribuiamo qui una causa tecnica più precisa di quanto osservato.

Quindi, oggi, **ChatGPT è l'unica piattaforma pubblicamente supportata**. Gemini e Claude verranno rivalutati solo se potranno offrire un'esperienza abbastanza semplice e sostenibile.

### Multiplayer su ChatGPT

La modalità multiplayer pubblica corrente è **HOSTED / SINGLE-CHAT**: una persona gestisce la chat ChatGPT dal proprio account e inoltra le azioni degli altri giocatori presenti di persona, in voce o tramite un canale esterno. Il Divertoscopio **non** presume che più account possano scrivere sincronicamente nella stessa conversazione, non tratta link condivisi/progetti condivisi come sincronizzazione same-chat e non richiede condivisione di account o credenziali. I dettagli e i limiti sono in [`KNOWN-LIMITATIONS.md`](KNOWN-LIMITATIONS.md); il gauntlet pubblico è in [`testing/MULTIPLAYER-HOSTED.md`](testing/MULTIPLAYER-HOSTED.md).

Questa modalità è implementata ma **l'actual play umano multiplayer resta OPEN**: pubblicazione e stress test statici non equivalgono a validazione di fun, clarity, latency o Desire to Return.

Nel Public Stress Test corrente, se il repository è leggibile, l'AI usa [`BOOTSTRAP.md`](BOOTSTRAP.md) come ingresso rapido. **Prima del gate non deve pre-caricare il runtime completo.** Solo dopo che l'utente ha espresso un intento sostanziale consulta [`START-HERE.md`](START-HERE.md), il router V0.3.x e [`RUNTIME-V0.4-CANDIDATE.md`](RUNTIME-V0.4-CANDIDATE.md). **IMPLEMENTED ≠ VALIDATED.** Il contratto di regressione è in [`testing/FAST-BOOTSTRAP.md`](testing/FAST-BOOTSTRAP.md).

Se ChatGPT non riesce a leggere il repository, apri [`BOOTSTRAP.md`](BOOTSTRAP.md), copialo nella chat e scrivi **Iniziamo**. Se dopo il gate serve il fallback completo e l'AI continua a non poter leggere GitHub, [`START-HERE.md`](START-HERE.md) resta il fallback autosufficiente con il minimo generale necessario, incluso un **V0.4 FALLBACK MINIMO**. Se vuoi usare un sistema con adapter pubblico ma l'AI non riesce a leggerlo, puoi incollare l'adapter pertinente come fallback opzionale: [`adapters/5e-srd51/ADAPTER.md`](adapters/5e-srd51/ADAPTER.md), [`adapters/5e-srd521/ADAPTER.md`](adapters/5e-srd521/ADAPTER.md) oppure [`adapters/dh-srd20/ADAPTER.md`](adapters/dh-srd20/ADAPTER.md). Per i Master è disponibile anche il Kit PDF autonomo.

`Aiutami` resta un comando alternativo equivalente.

## Stato

Questa è la versione **Public Stress Test V0.3**, aperta all’uso autonomo pubblico e alla raccolta di evidenza reale senza invito o preregistrazione. La catena runtime attiva usa una **baseline V0.3.2** più i **delta V0.3.3, V0.3.4, V0.3.5 e V0.3.6**. La baseline deriva da failure osservati nel pilot e include anche due estensioni sperimentali bounded da validare durante il test: **Comic Patch V0.1** e **Image-on-demand / Text-first**. Irrigidisce inoltre integrità dei dadi, semantica dei natural 1/20 in 5E, provenienza dell'inventario e affidabilità di progressione/level-up, inclusi i passaggi di fase nelle avventure pubblicate. La V0.3.3 aggiunge **Ending Mode / Foreshadowing Governor** e **OOC / Table-Talk Pause Contract**. La V0.3.4 aggiunge hardening su **false choice/causal attribution**, **active opposition**, **fail-forward scope** e **system-dependent prep floor**. La V0.3.5 aggiunge **causal twist / reveal integrity** e **approach-first check ecology**, per evitare retcon usati come sorpresa e varietà artificiale dei check. La V0.3.6 aggiunge **emotional dynamics**: valued experience ≠ positive affect, emotional affordance, emotional stakes guadagnati, aftermath space, sacrifice/legacy e contrast/recovery senza manipolazione emotiva. Il progetto è sperimentale: non tutte le modalità, i sistemi e le funzioni sono già stati provati allo stesso livello. Il repository include un vertical pubblico per D&D 5e 2014 / SRD 5.1 e adapter candidati separati per D&D 2024 / SRD 5.2.1 e Daggerheart™ / SRD 2.0, così sistema ed edizione possono restare espliciti e non contaminarsi fra loro. I limiti attualmente conosciuti sono in [`KNOWN-LIMITATIONS.md`](KNOWN-LIMITATIONS.md).

**Aggiornamento funzionale pubblico — 08/10/2026.** Sono ora presenti, come contratti *implementati ma da validare in actual play*, la generazione anti-ripetizione di «Scegli tutto tu», le **milestone come default circoscritto** a una nuova avventura originale D&D 2014 completamente delegata, la **chiusura ricorsiva di avventure e capitoli successivi** (H5A), e rafforzamenti operativi P0/P1: **distinguere indizi che spiegano da piste che fanno proseguire**, **preparare solo le modifiche necessarie a un'avventura**, **preservare vittorie locali significative**, **trasporre scenari mantenendone le funzioni giocabili** e **assegnare ricompense guadagnate e pertinenti**. I controlli documentali non assicurano che un modello li esegua sempre. Per una fotografia aggiornata di **cosa è disponibile e cosa è effettivamente provato**, consulta [Limiti attuali — stato 08/10/2026](KNOWN-LIMITATIONS.md) e il [rapporto di audit pubblico](testing/PUBLIC-RELEASE-STRESS-2026-10-08.md); non leggere gli stress test storici come verifiche della versione odierna.

## Contestazioni legali e diritti

Se durante l'uso viene sollevata una contestazione su copyright/licenze, marchi, privacy/GDPR, Ultra-Garanzia, comunicazione commerciale, takedown o altri diritti, l'AI deve usare [`LEGAL-CLAIMS.md`](LEGAL-CLAIMS.md) come protocollo di triage. La regola è: **una rivendicazione non viene trattata né come automaticamente valida né come automaticamente infondata**. Si identifica il materiale preciso, si verifica provenance/licenza/fonte, si preserva la documentazione e si richiede revisione professionale quando il caso è materiale o formale. Il protocollo non è consulenza legale e non certifica la conformità del progetto.

## Quale esperienza stai cercando?

Queste modalità non sono una classifica. Ottimizzano esigenze diverse e possono anche essere combinate.

| Aspetto | Divertoscopio + AI | AI generalista senza Divertoscopio | Tavolo umano in presenza | Tavolo umano online / VTT |
|---|---|---|---|---|
| Disponibilità | On-demand su ChatGPT nella versione corrente | On-demand | Dipende da Master, gruppo e calendario | Richiede gruppo/calendario, ma non la stessa località |
| Solo play | Tra i casi Player oggi più maturi | Possibile, qualità molto variabile | Richiede procedure/oracoli solo o giochi dedicati | Possibile con setup specifici; non è il caso tipico del VTT |
| Prompt/setup AI | **Progettato per** ridurre prompt engineering e partire con poco setup | Principalmente a carico dell'utente | Nessun prompting AI necessario | Nessun prompting AI necessario; esiste setup tecnico VTT |
| Regole e continuità | Guardrail, rules contract, state/checkpoint/resume; ancora sperimentali e dipendenti dall'AI sottostante | Dipendono da modello, prompt, contesto e correzioni dell'utente | Dipendono dal Master/tavolo | Master umano + eventuali automazioni/schede persistenti |
| Agency del PG | Protezione esplicita delle decisioni volontarie del giocatore | Dipende dal prompt/modello | Dipende dal Master e dal contratto del tavolo | Come tavolo umano, mediato online |
| Relazione sociale | Limitata se giochi solo con AI; può essere usato anche come assistente/ibrido | Limitata se giochi solo con AI | Presenza fisica e segnali non verbali | Interazione umana reale mediata da voce/video/chat |
| Mappe/media | Possibili, ma **TEXT-FIRST** di default; immagini e altri media sono opt-in | Dipende dalla piattaforma e dal lavoro dell'utente | Miniature, mappe, prop o theatre of mind | Mappe, token, fog of war, handout e automazioni sono punti di forza |
| Ideale per chi… | Vuole usare AI nel GDR con meno burden manuale e più guardrail, oppure assistere un Master umano | Vuole sperimentare direttamente con l'AI e guidarla/correggerla | Cerca soprattutto gioco sociale umano in presenza | Vuole un gruppo umano remoto con strumenti digitali/tattici |
| Trade-off principale | Prodotto ancora sperimentale; supporto pubblico corrente limitato a ChatGPT | Affidabilità, continuità e burden possono variare molto | Scheduling, disponibilità Master/gruppo e prep | Attrito tecnico e minore presenza fisica; serve comunque coordinare il gruppo |

**Nessuna colonna è universalmente “migliore”.** Il Divertoscopio non cerca di sostituire il tavolo umano: cerca di migliorare ciò che ottieni quando scegli di usare l'AI nel GDR.

## Visual Hammer

Il segno verde lime del Divertoscopio combina un **mirino / strumento di messa a fuoco** con un **sorriso**: rende visibile l'idea di **mettere a fuoco il divertimento**. È deliberatamente agnostico rispetto al d20 e ai singoli sistemi di GDR.

Asset e regole d'uso: [`assets/visual-hammer/`](assets/visual-hammer/).

## Public Stress Test e Ultra-Garanzia

Il repository è pubblico e **chiunque può provare autonomamente il Divertoscopio**. Non servono invito, preregistrazione, opt-in preventivo, Slot ID o Pilot ID.

Per i nuovi test regolati da **UGPN-PUBLIC-1.0**, una persona maggiorenne (18+) che usa realmente il Divertoscopio può, se non è soddisfatta, richiedere **€1 come simbolico indennizzo reputazionale** secondo i termini della fase.

Dopo l'esperienza esiste **un solo modulo facoltativo**. Tutti possono lasciare feedback senza chiedere denaro. Chi sceglie di richiedere €1 aggiunge nello stesso modulo l'evidenza dell'uso e il metodo/dato necessario al pagamento.

L'Ultra-Garanzia del Public Stress Test ammette al massimo **100 claim qualificati**. Ogni persona fisica può ricevere al massimo **un solo payout da €1 nell'intero programma**; l'esposizione teorica massima della fase è quindi **€100**. Nessun pagamento è automatico: i claim vengono verificati manualmente. Transcript, link e dati di pagamento restano privati.

Modulo feedback facoltativo: https://docs.google.com/forms/d/e/1FAIpQLSc1JT6yfYhYokvZ2b1DKNeqKExl9PLGa2aMSMJGS_-XCs7ibg/viewform

- Termini completi: [`ULTRA-GARANZIA.md`](ULTRA-GARANZIA.md)
- Stato pubblico del fondo e delle richieste: [`ULTRA-GARANZIA-REGISTRO.md`](ULTRA-GARANZIA-REGISTRO.md)
- Privacy: [`PRIVACY.md`](PRIVACY.md)

## Materiale commerciale e copyright

Il repository pubblico **non contiene il testo di avventure commerciali** né materiale proprietario pubblicato senza autorizzazione. I principi, le procedure e i pattern pubblici del Divertoscopio sono generalizzati e originali/riorganizzati.

Per il supporto 5E viene usato anche il **System Reference Document 5.1 (SRD 5.1)**, pubblicato da Wizards of the Coast con licenza **CC BY 4.0** e attribuito in [`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md).

L’adapter **Daggerheart™ Compatible** è basato sul **Daggerheart System Reference Document 2.0** e rimanda alla **Darrington Press Community Gaming License 2.0 (DPCGL)**. Non ripubblica Campaign Frame o testo proprietario non qualificato come Public Game Content. **Verifica legale ancora aperta:** non è stata confermata l'applicabilità dei formati di distribuzione consentiti dalla DPCGL a un adapter testuale usato da un assistente AI e pubblicato su GitHub. La presenza dell'attribuzione non equivale a conformità certificata. Condizioni, fonti e stato della verifica: [`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md).

Se vuoi lavorare con precisione scena per scena su un'avventura commerciale, fornisci alla tua AI il materiale che possiedi legalmente oppure una fonte a cui possa accedere legittimamente. Senza quel materiale, il Divertoscopio deve limitarsi a conoscenze generali, fonti pubblicamente accessibili, esperienze della community e proposte dichiarate come tali.

## Cosa trovi nel repository

- [`MANIFESTO.md`](MANIFESTO.md) — idea, principi e promessa del Divertoscopio.
- [`BOOTSTRAP.md`](BOOTSTRAP.md) — ingresso rapido deterministico: nessun pre-caricamento del runtime prima del primo intento sostanziale.
- [`START-HERE.md`](START-HERE.md) — istruzioni complete post-gate e fallback autosufficiente.
- [`GEMINI-START.md`](GEMINI-START.md) — archivio di un tentativo sperimentale Gemini; **non è un percorso supportato corrente**.
- [`RUNTIME-HOTFIX-V0.3.2.md`](RUNTIME-HOTFIX-V0.3.2.md) — router runtime pubblico.
- [`RUNTIME-HOTFIX-V0.3.2-BASE.md`](RUNTIME-HOTFIX-V0.3.2-BASE.md) — baseline/hardening V0.3.2, inclusi Comic Patch V0.1 e Image-on-demand / Text-first.
- [`RUNTIME-HOTFIX-V0.3.3.md`](RUNTIME-HOTFIX-V0.3.3.md) — delta Ending Mode / Foreshadowing Governor + OOC / Table-Talk Pause Contract.
- [`RUNTIME-HOTFIX-V0.3.4.md`](RUNTIME-HOTFIX-V0.3.4.md) — delta causal attribution / false choice + active opposition + fail-forward scope + system-dependent prep floor.
- [`RUNTIME-HOTFIX-V0.3.5.md`](RUNTIME-HOTFIX-V0.3.5.md) — delta causal twist / reveal integrity + approach-first check ecology.
- [`RUNTIME-HOTFIX-V0.3.6.md`](RUNTIME-HOTFIX-V0.3.6.md) — delta emotional dynamics: valued experience, earned stakes, aftermath, sacrifice/legacy e recovery.
- [`RUNTIME-V0.4-CANDIDATE.md`](RUNTIME-V0.4-CANDIDATE.md) — capacità candidate V0.4 incluse nel Public Stress Test.
- [`V0.4-CANDIDATE.md`](V0.4-CANDIDATE.md) — stato dell'evidenza, confini e guardrail delle 10 capacità principali + 4 supplemental research-only.
- [`testing/V0.4-CANDIDATE-GAUNTLET.md`](testing/V0.4-CANDIDATE-GAUNTLET.md) — gate statico V0.4.
- [`testing/FIRST-USE-BLACK-BOX.md`](testing/FIRST-USE-BLACK-BOX.md) — regression suite black-box per utenti al primo utilizzo, onboarding, fallback, feedback e failure comuni.
- [`testing/FAST-BOOTSTRAP.md`](testing/FAST-BOOTSTRAP.md) — gate di regressione per evitare caricamenti e ragionamento non necessari prima dell'intento sostanziale.
- [`testing/FAST-BOOTSTRAP-RESULTS-2026-10-07.md`](testing/FAST-BOOTSTRAP-RESULTS-2026-10-07.md) — 130/130 core + spot-check pubblici adapter; primo live clean-room PLAYER registrato con gioco effettivo in meno di 2 minuti.
- [`LEGAL-CLAIMS.md`](LEGAL-CLAIMS.md) — protocollo pubblico per contestazioni legali, licenze, privacy, takedown e altri diritti.
- [`SYSTEM-SUPPORT.md`](SYSTEM-SUPPORT.md) — matrice canonica pubblica della confidence di supporto per ciascun GDR.
- [`core/CORE.md`](core/CORE.md) — principi di base che restano validi anche cambiando GDR.
- [`master/MASTER.md`](master/MASTER.md) — percorso e strumenti per il Master.
- [`master/KIT-DI-SOPRAVVIVENZA-MASTER.pdf`](master/KIT-DI-SOPRAVVIVENZA-MASTER.pdf) — guida pratica autonoma per usare l'AI con meno lavoro inutile.
- [`player/PLAYER.md`](player/PLAYER.md) — percorso per il giocatore.
- [`protocols/PROTOCOLS.md`](protocols/PROTOCOLS.md) — procedure da usare quando servono.
- [`library/PATTERN-INDEX.md`](library/PATTERN-INDEX.md) — pattern generali opzionali.
- [`library/MASTER-CRAFT-TOOLBOX.md`](library/MASTER-CRAFT-TOOLBOX.md) — toolbox Master-facing: prep pigra, PNG, improvvisazione, combattimento, Sessione Zero, one-shot, feedback e altre tecniche recuperate on-demand.
- [`adapters/5e-srd51/ADAPTER.md`](adapters/5e-srd51/ADAPTER.md) — regole e procedure specifiche per 5E/SRD 5.1.
- [`adapters/5e-srd521/ADAPTER.md`](adapters/5e-srd521/ADAPTER.md) — adapter candidato separato per le regole 2024 / SRD 5.2.1.
- [`adapters/5e-srd521/TESTING.md`](adapters/5e-srd521/TESTING.md) — guida clean-room per il test esterno dell'adapter 2024.
- [`adapters/dh-srd20/ADAPTER.md`](adapters/dh-srd20/ADAPTER.md) — adapter candidato SRD 2.0, Daggerheart™ Compatible.
- [`adapters/dh-srd20/TESTING.md`](adapters/dh-srd20/TESTING.md) — istruzioni minime per un test esterno non primato.
- [`testing/EXPERT-CLEAN-ROOM.md`](testing/EXPERT-CLEAN-ROOM.md) — protocollo generale per tester esperti: natural clean-room → red team → A/B opzionale.
- [`testing/MULTIPLAYER-HOSTED.md`](testing/MULTIPLAYER-HOSTED.md) — gauntlet statico della modalità multiplayer hosted/single-chat e dei limiti reali della piattaforma.
- [`testing/TWIST-CHECK-ECOLOGY.md`](testing/TWIST-CHECK-ECOLOGY.md) — gauntlet statico su reveal causali, anti-retcon e varietà non artificiale degli ability check.
- [`testing/EMOTIONAL-DYNAMICS.md`](testing/EMOTIONAL-DYNAMICS.md) — gauntlet statico su emozioni negative/miste, emotional ownership, aftermath, sacrificio/legacy e anti-manipolazione.
- [`feedback/FEEDBACK-AND-METRICS.md`](feedback/FEEDBACK-AND-METRICS.md) — come raccogliere riscontri e migliorare le versioni successive.
- [`KNOWN-LIMITATIONS.md`](KNOWN-LIMITATIONS.md) — ciò che è ancora poco testato o non validato.
- [`CREDITS-AND-INSPIRATIONS.md`](CREDITS-AND-INSPIRATIONS.md) — distingue fonti con contributo documentato alla ricerca da ispirazioni, community e interlocutori considerati.
- [`ULTRA-GARANZIA.md`](ULTRA-GARANZIA.md) — condizioni dell'Ultra-Garanzia.
- [`ULTRA-GARANZIA-REGISTRO.md`](ULTRA-GARANZIA-REGISTRO.md) — fondo, esposizione e richieste accolte in forma privacy-safe.
- [`assets/visual-hammer/`](assets/visual-hammer/) — Visual Hammer e regole d'uso pubbliche.

Questo repository **non** contiene database dei tester, risposte private, transcript di test, dati o prove di pagamento, archivi interni o corpus di ricerca privati.

## Fonti di ispirazione e ringraziamenti

Il Divertoscopio è un progetto originale, ma è stato migliorato anche studiando e confrontando il lavoro pubblico di numerosi Master, giocatori, autori e divulgatori del GDR. Fra le fonti considerate ci sono creator e realtà italiane come **Caotico Pigro, The Prof. Player, 20 Facce, Dottor Morgan, D20 Nation, La Tana dell’Occhio, Wikirole, Nicola De Gobbis e Andrea “Il Rosso” Lucca / La Locanda del Drago Rosso**, oltre a numerose fonti internazionali.

[`CREDITS-AND-INSPIRATIONS.md`](CREDITS-AND-INSPIRATIONS.md) raccoglie in modo uniforme fonti, ispirazioni, community e interlocutori considerati. Una citazione **non implica approvazione, collaborazione o affiliazione**.

## Licenze

- Software e script originali pubblicati: MIT, vedi [`LICENSE`](LICENSE).
- Documentazione, procedure e prompt originali pubblici: CC BY 4.0, vedi [`LICENSE-DOCS.md`](LICENSE-DOCS.md).
- Materiali di terzi: vedi [`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md). Le parti derivate dal Daggerheart SRD 2.0 restano soggette alla DPCGL 2.0.
- Nome, brand e segni distintivi non sono concessi come marchi dalle licenze sopra.
