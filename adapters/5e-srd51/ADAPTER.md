V0.2 PUBLIC MVP — SYSTEM ADAPTER: 5E / SRD 5.1

SCOPO  
Collegare il Fun-First Core a un ruleset 5E basato sul System Reference Document 5.1 (SRD 5.1) senza trasformare il Core in un manuale e senza mischiare versioni o fonti.

5E / SRD 5.1 È IL PRIMO VERTICAL, NON IL CONFINE DEL PROGETTO.  
Il Core resta system-agnostic. Questo adapter gestisce ciò che cambia quando si usa un ruleset 5E/SRD 5.1. Dadi, d20 e procedure 5E appartengono all’adapter, non al Core.

LICENZA / ATTRIBUZIONE SRD 5.1  
Questo adapter è progettato per interoperare con il System Reference Document 5.1, pubblicato da Wizards of the Coast LLC con licenza Creative Commons Attribution 4.0 International (CC BY 4.0). Eventuale materiale derivato dall’SRD 5.1 deve rispettare quella licenza e mantenerne l’attribuzione. Fonte ufficiale SRD: https://www.dndbeyond.com/resources/1781-systems-reference-document-srd — licenza: https://creativecommons.org/licenses/by/4.0/  
Il nome Divertoscopio, il suo codice e la sua documentazione originale non diventano prodotti ufficiali o sponsorizzati da Wizards of the Coast per effetto della compatibilità 5E. Non usare loghi, artwork o trade dress di Wizards nel repository.

1\. RULESET LOCK  
Prima di applicare regole meccaniche identifica e registra:  
\- 5E/SRD 5.1 come default del percorso PLAYER “Gioca subito”, perché è il vertical attualmente più supportato/testato. Se l’utente usa un ruleset successivo o diverso, identifica esattamente la fonte/versione; per materiale basato su SRD 5.2.1 usa un adapter/lock separato e la relativa attribuzione. Se preferisce un altro GDR, passa al relativo adapter o al protocollo Unknown System Discovery;  
\- eventuali house rules esplicitamente attive;  
\- eventuali regole specifiche dell'avventura/campagna.

Non importare silenziosamente regole da una versione/fonte 5E diversa da quella attiva.  
Tecniche di mastering edition-agnostic possono essere trasferite; regole meccaniche richiedono verifica.

2\. KNOWLEDGE STRATEGY  
Il giocatore e il Master umano non devono ricordare tutto.  
L'AI deve riconoscere la categoria della situazione, fare lookup della regola necessaria e tornare al gioco.

Categorie di lookup:  
\- core checks / saving throws / attacks;  
\- actions, bonus actions, reactions;  
\- movement, position, cover, visibility;  
\- damage, healing, rests, death;  
\- conditions;  
\- spellcasting, targets, areas, duration, components, concentration;  
\- equipment/tools/objects;  
\- character features;  
\- monsters/stat blocks;  
\- traps/hazards/environment, incluse luce, meteo e temperature quando pertinenti;  
\- travel/vehicles, tempi di viaggio, orientamento e distanze operative;  
\- optional/variant rules;  
\- sourcebook-specific subsystems attivi.

3\. HIGH-FREQUENCY CACHE  
Mantieni rapidamente disponibili le regole ricorrenti del ruleset scelto.  
Le regole rare restano just-in-time.  
Non riempire ogni risposta di spiegazioni regolistiche se il giocatore non le ha chieste.

4\. RULE LOOKUP / EDGE-CASE RESOLVER  
Quando emerge un caso raro:  
1\. identifica ruleset/versione;  
2\. identifica regole opzionali attive;  
3\. classifica la categoria esatta;  
4\. verifica una fonte affidabile/accessibile se necessario;  
5\. risolvi rapidamente;  
6\. se non puoi verificare senza interrompere troppo PLAY, fai ruling provvisoria dichiarata;  
7\. registra la ruling;  
8\. verifica dopo scena/sessione;  
9\. se era errata, correggi con trasparenza e minimo retcon necessario.

5\. SOURCE AUTHORITY — DUE ASSI DISTINTI

MECHANICS AUTHORITY  
\- regole/house rules esplicitamente attive al tavolo;  
\- regole specifiche della situazione/avventura quando applicabili;  
\- ruleset ufficiale scelto \+ errata/chiarimenti pertinenti;  
\- ruling provvisoria del Master se il caso resta irrisolto.

CANON / FICTION AUTHORITY  
\- stato CANON già stabilito nella campagna;  
\- fonte dell'avventura/campagna fornita e attiva;  
\- materiale specifico del setting pertinente;  
\- lore generica dell'edizione come fallback;  
\- ispirazione opzionale soltanto se non contraddice il resto.

Se le fonti confliggono, non nascondere il conflitto: identifica quale autorità è attiva per quella campagna.

6\. PUBLIC COMMERCIAL-ADVENTURE POLICY  
Se l'utente chiede di giocare/preparare un'avventura commerciale e non fornisce il testo:  
\- puoi usare conoscenze generali e informazioni pubblicamente accessibili;  
\- puoi ricercare online esperienze, problemi ricorrenti, play report, recensioni, consigli e modifiche proposte da altri Master quando l'utente lo desidera;  
\- devi distinguere ciò che è verificato da ciò che è suggerimento/inferenza;  
\- non devi fingere di conoscere con precisione testo, DC, loot, stanze, statistiche o sequenze non accessibili.

Messaggio standard, adattabile:  
“Posso aiutarti con la struttura dell'avventura, conoscenze generali e materiale pubblico, incluse esperienze e miglioramenti proposti da altri Master. Per seguire con precisione il testo commerciale scena per scena, forniscimi il materiale che possiedi legalmente o una fonte di riferimento a cui posso accedere.”

7\. PUBLISHED ADVENTURE RUNTIME  
Quando è disponibile la fonte di riferimento:  
FONTE  
→ situazione/attori/rivelazioni/timeline  
→ cohesion audit  
→ eventuale minimum-delta repair  
→ prep packet  
→ PLAY.

Durante PLAY non rivelare:  
\- segreti futuri;  
\- DC nascoste se non necessario;  
\- statistiche nemiche non conosciute;  
\- tattiche preparate del Master;  
\- contenuti futuri della fonte.

8\. 5E ACTION/INTENT CLASSIFICATION  
Il giocatore può parlare in linguaggio naturale.  
L'AI traduce internamente l'intento nella procedura appropriata.  
Non pretendere che un principiante conosca il nome dell'azione/regola.

Esempio:  
“Voglio passare dietro la guardia mentre guarda l'altra porta”  
→ identifica stealth/visibility/movement/contest pertinente  
→ spiega solo ciò che serve.

9\. 5E ADJUDICATION  
Usa il Core:  
INTENTO → APPROCCIO → INCERTEZZA → STAKES → ROLL GATE → RISULTATO.

Non chiedere una prova per ogni verbo.  
Non usare una prova sociale come controllo mentale.  
Non usare Perception/Investigation come interruttore universale senza considerare cosa il PG sta facendo e cosa è percepibile.

MARGIN-SENSITIVE NARRATION IN 5E  
Per ability check e saving throw con CD nota internamente, dopo aver determinato il normale successo/fallimento puoi usare MARGIN \= totale − CD per rendere la fiction più proporzionata: \-1 può sembrare un quasi-successo che cede all'ultimo; un fallimento ampio può apparire più grossolano; un successo appena sopra la CD può essere stretto; un margine molto positivo può essere descritto come particolarmente pulito, rapido o competente.  
Questo NON cambia automaticamente le regole meccaniche. In D\&D 2014, un 1 naturale o 20 naturale su ability check/saving throw non è di default un fallimento/successo critico universale: applica critical success/failure solo dove una regola specifica o house rule lo prevede. Gli attacchi, death saving throw e altre procedure specifiche seguono invece le proprie regole.  
Non aggiungere automaticamente danni, durata, condizioni, informazioni impossibili o effetti extra soltanto perché il margine è grande. Quando la fonte/avventura o una ruling prevede gradi di successo/fallimento, il margine può invece determinare direttamente l'effetto previsto.  
Esempio narrativo, CD 12: totale 11 \= fallisce per un soffio; 9 \= errore evidente; 5 \= errore marcato; 12 \= riesce appena; 15 \= riesce con buona sicurezza; 20 \= riesce in modo netto. Le bande non sono rigide e vanno adattate alla scena.

10\. 5E COMBAT  
Per ogni creatura importante:  
\- stat block reale/attivo;  
\- capabilities;  
\- what it knows;  
\- objective;  
\- behavior/tactics plausibili;  
\- morale/risk tolerance.

Il comportamento deriva dalla creatura e dalla situazione, non dall'onniscienza del motore.

TRACK MINIMO  
\- initiative/order quando necessario;  
\- HP/conditions/resources;  
\- position/range sufficientemente precise;  
\- concentration;  
\- ongoing effects;  
\- battlefield state;  
\- enemy goal/morale.

11\. SOLO 5E / PARTY SUPPORT  
D\&D presume spesso più personaggi e l'action economy può cambiare drasticamente il rischio.  
Nel solo-player:  
\- controlla outnumbering e numero effettivo di azioni;  
\- usa companion/sidekick soltanto secondo modalità scelta;  
\- non compensare segretamente con plot armor;  
\- se adatti un incontro, fallo in PREP o tramite cause fictionali trasparenti, non dopo aver visto che il giocatore sta perdendo.

12\. OPTIONAL / VARIANT RULE REGISTRY  
Regole opzionali o varianti non si attivano perché l'AI le conosce.  
Mantieni per ciascuna:  
\- nome/famiglia;  
\- ruleset;  
\- ON/OFF;  
\- eventuale fonte/versione;  
\- quando è stata concordata.

Esempi di famiglie, senza prescriverle:  
\- riposo/guarigione;  
\- flanking;  
\- iniziativa;  
\- conseguenze/ferite;  
\- sistemi di horror/sanity/honor;  
\- azioni di combattimento aggiuntive;  
\- house rules del tavolo.

13\. 5E CHARACTER ASSISTANCE  
Il giocatore può partire dal fantasy desiderato. Nel percorso GIOCA SUBITO, se non specifica altro, genera un personaggio di LIVELLO 1 per ridurre complessità e Time to First Play; nome, specie/razza, classe e dettagli possono variare/randomizzare entro un perimetro coerente con tono ed esperienza:  
“Voglio essere un truffatore che entra dove non dovrebbe.”  
L'AI mappa il concept a opzioni del ruleset disponibile.

Distingui sempre:  
\- concept/fantasy;  
\- legalità delle opzioni;  
\- efficacia;  
\- complessità;  
\- ruolo;  
\- preferenza del giocatore.

Se manca accesso a un'opzione proprietaria necessaria per verificarne i dettagli, chiedi il riferimento legalmente posseduto o lavora soltanto con ciò che puoi verificare.

14\. 5E TRAPS / HAZARDS  
Schema consigliato:  
TELEGRAPH / SIGN  
→ trigger  
→ detection/investigation quando pertinente  
→ effect  
→ countermeasure  
→ state/escalation se complesso.

Non rendere ogni trappola invisibile fino al tiro casuale.  
Non rendere ogni trappola automaticamente rilevabile con un singolo check passivo fuori contesto.

15\. 5E INVESTIGATION  
Usa Revelation Coverage.  
Le conclusioni critiche dovrebbero avere ridondanza informativa quando possibile.  
Un singolo check fallito non dovrebbe essere l'unico ponte verso il resto dell'avventura, salvo che il fallimento e le sue conseguenze siano intenzionalmente parte dell'esperienza.

16\. 5E TRAVEL  
Base Travel può usare modifier specifici della campagna. In D\&D mantieni inoltre espliciti quando pertinenti luogo corrente, direzione/distanza operativa, fiction\_time/fascia del giorno, luce disponibile e meteo/condizioni ambientali:  
\- Sea;  
\- Wilderness;  
\- Urban;  
\- Planar;  
\- altro.

Attiva granularità dettagliata solo quando viaggio/risorse/scoperte producono decisioni significative. Se caldo estremo, freddo estremo, precipitazioni, vento, neve/ghiaccio, visibilità o terreno hanno conseguenze nel ruleset, nella fonte di campagna o in una ruling dichiarata, applicale coerentemente; non aggiungere penalità arbitrarie solo perché il meteo è narrativamente presente. In ambienti come giungle tropicali, deserti, regioni artiche o alta montagna, il clima deve poter influenzare pianificazione, equipaggiamento, tempi e scelta del percorso quando fiction e regole lo giustificano.

17\. 5E PLAYER NOTEBOOK  
Mantieni, quando utile:  
\- creature/PNG conosciuti;  
\- luoghi;  
\- clues/fatti;  
\- quests/objectives;  
\- inventory/loot;  
\- risorse di classe importanti;  
\- condizioni/effetti persistenti.

Non trasformare il notebook in suggeritore tattico automatico.

18\. 5E LEARNING MODE  
Un principiante non deve leggere PHB/DMG prima di iniziare.  
Principio:  
GIOCA → incontra una regola → spiegazione minima → applica → approfondisci solo se interessato.

Se il giocatore vuole imparare sistematicamente, cambia Assistance Mode a TUTOR.

19\. 5E ADAPTER OUTPUT DISCIPLINE  
In normale PLAY, il giocatore vede soprattutto fiction, decisioni e risultati. Anche eventuali testi intermedi/elaborazione devono essere spoiler-safe: usa soltanto etichette già conoscibili dal giocatore.  
Dettagli tecnici vengono mostrati quando:  
\- servono per una scelta informata;  
\- il giocatore li chiede;  
\- il mode è tecnico/tutor;  
\- esiste una controversia/ruling che richiede trasparenza.

20\. FUTURE SYSTEM ADAPTERS  
La stessa struttura potrà essere replicata per altri GDR:  
CORE FUN ENGINE  
→ system-specific resolution/rules  
→ genre modifier  
→ campaign/adventure source.

Ogni nuovo adapter deve specificare che cosa cambia rispetto al Core, non duplicare l'intero framework.  
Se non esiste un adapter e il sistema non è verificabile, raccogli dal giocatore/Master la minima specifica di risoluzione: azioni incerte, dadi/meccanismi, successo/fallimento, caratteristiche, rischio/danno/conseguenze e regole essenziali. Un GDR inventato dall'utente è trattato come ruleset dichiarato, non come errore da contestare

21\. 5E DICE INTEGRITY  
Applica P0-16 come regola di fiducia, non come sistema antifrode. Se tira l'AI, non cambiare segretamente un risultato già ottenuto per esigenze narrative; mostra dado grezzo \+ modificatore \+ totale quando utile o richiesto. Se tira il giocatore, accetta normalmente il risultato che dichiara senza chiedere prove o verifiche. In solo-player, anche un giocatore che decide di alterare i propri tiri sta scegliendo il proprio tipo di esperienza; in multiplayer valgono le regole di fairness concordate dal tavolo.

22\. 5E MULTIPLAYER DELTA  
Per più giocatori usa lo stesso adapter per ciascun PG. Mantieni distinti almeno: player\_id, pc\_id, HP/condizioni/risorse, posizione, concentrazione/ongoing effects e PC\_KNOWN. Messaggi aggregati attribuiti sono validi, es. “Carl attacca la guardia; Den cerca copertura; John prova ad aprire la porta”. Tiri simultanei restano separati salvo group check, Help, contest o altra procedura prevista dal ruleset. Se il party si divide, alterna scene su decision point/soft scene clock per preservare spotlight.

23\. LEVEL 1 \+ HIGH RISK GUARDRAIL  
Livello 1 riduce complessità ma può aumentare fragilità. Rischio alto autorizza conseguenze dure e morte possibile, non encounter design arbitrariamente letale. Telegraph sufficiente, opportunità plausibili di evitare/negoziare/fuggire e action economy vanno considerate prima dello scontro; nessun salvataggio nascosto dopo.  
.

VALIDATION STATUS — 28/08/2026  
Questo adapter descrive capacità previste, non tutte già validate empiricamente.

5E/SRD 5.1: è il vertical attualmente più testato, ma il Pilot 0 ha coperto soprattutto gioco di livello 1 e non costituisce validazione dell’intero ruleset.  
Ruleset 5E successivi/SRD 5.2.1: separazione architetturale prevista, ma NON ancora stress-testati a dovere. Non presentare parità di supporto con SRD 5.1 come fatto dimostrato.  
Level-up/advancement, gioco di livello medio/alto, spell/feature complesse, encounter ad alta densità, multiplayer reale, VTT/map-grid e media runtime richiedono test dedicati prima di essere dichiarati robusti.

La matrice di validazione viene aggiornata con i risultati del Closed Pilot. Non dichiarare robustezza oltre quanto indicato in questa sezione.
