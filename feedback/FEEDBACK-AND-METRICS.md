CLOSED PILOT V0.3 — FEEDBACK & METRICS

SCOPO  
Misurare se il Divertoscopio produce realmente più divertimento, maggiore voglia volontaria di tornare a giocare e minore attrito/preparazione. Il feedback non è un rituale: deve generare decisioni di miglioramento.

NORTH STAR METRICS  
1\. FUN — Quanto ti sei divertito? 0–10.  
2\. DESIRE TO RETURN — Quanto vorresti tornare a giocare un'altra sessione perché questa esperienza ti è piaciuta? 0–10. Non usare questa metrica per massimizzare durata compulsiva o difficoltà a smettere.

CORE EXPERIENCE METRICS  
3\. LIBERTÀ DI SCELTA (campo interno: Agency) — Quanto ti sei sentito libero/a di decidere cosa fare con il tuo personaggio? 0–10.  
4\. RITMO (campo interno: Pacing) — Quanto il gioco è scorso al ritmo giusto per te, senza trascinarsi troppo o andare troppo velocemente? 0–10.

FRICTION METRICS  
5\. TIME TO FIRST USEFUL OUTPUT.  
6\. TIME TO FIRST PLAY.  
7\. ONBOARDING FRICTION — numero di domande/turni prima del primo valore.  
8\. TIME TO FUN — metrica sperimentale opzionale: non assumere che la prima decisione giocabile coincida con il primo divertimento reale. Quando è misurabile senza interrompere il gioco, raccogli a posteriori un self-report approssimativo su quando l'esperienza ha iniziato a essere davvero divertente. Non assumere soglie universali da un singolo test.  
8A. TURN LATENCY — nel play-by-chat, tempo fra input del giocatore e successiva possibilità utile di agire. Registrare quando immagini, mappe, musica, browsing o altri tool aumentano materialmente il tempo di risposta; confrontare valore immersivo vs ritmo.

MASTER METRICS  
9\. PREP TIME ACTUAL.  
10\. PREP TIME COUNTERFACTUAL — quanto pensi avresti impiegato senza Divertoscopio?  
11\. PREP USED — quota/materiale effettivamente utilizzato.  
12\. GM FRICTION/STRESS — opzionale 0–10.

QUALITY / TRUST METRICS  
13\. Rules corrections/errori rilevati.  
14\. Contraddizioni di stato/memoria.  
15\. Spoiler involontari.  
16\. Player-action takeover: casi in cui l'AI decide/narra volontariamente al posto del PG.  
17\. Railroading percepito/segnalato.  
18\. Boring/friction moments segnalati.  
19\. Standout moments.

DEFAULT FEEDBACK — MASSIMO 30–60 SECONDI  
Domande al giocatore:  
\- Divertimento: 0–10  
\- Voglia di tornare a giocare perché questa esperienza ti è piaciuta: 0–10  
\- Quanto ti sei sentito libero/a di decidere cosa fare con il tuo personaggio? 0–10  
\- Quanto il gioco è scorso al ritmo giusto per te, senza trascinarsi troppo o andare troppo velocemente? 0–10  
\- Vorrei PIÙ di: \[testo breve\]  
\- Vorrei MENO di: \[testo breve\]

Opzionale:  
\- Momento migliore?  
\- Momento più debole/frustrante?

Non rendere obbligatori lunghi commenti aperti.  
Alla fine di una unità significativa, dopo il feedback quando appropriato, offrire una sola volta un file riepilogativo V0.1 riutilizzabile; non offrirlo dopo micro-scambi.

MASTER FEEDBACK BREVE  
Aggiungi:  
\- Quanto tempo hai preparato con il Divertoscopio?  
\- Quanto pensi che avresti impiegato senza?  
\- Cosa hai preparato ma non hai usato?  
\- Quale suggerimento ti ha fatto risparmiare più tempo?  
\- Quale suggerimento ti ha creato lavoro inutile?

CONTEXT FIELDS — RACCOLTI AUTOMATICAMENTE QUANDO POSSIBILE  
\- framework\_version;  
\- date;  
\- role \= PLAYER / MASTER / BOTH;  
\- system;  
\- ruleset/edition;  
\- mode PLAYER \= GIOCA\_SUBITO / PERSONALIZZA\_PRIMA / PERSONALIZZA\_A\_FONDO; mode MASTER \= PREPARA\_SUBITO / PREPARA\_MEGLIO / APPROFONDISCI;  
\- human\_GM / AI\_GM / AI\_ASSISTED\_HUMAN\_GM;  
\- session\_length;  
\- solo / group;  
\- group\_size;  
\- experience\_level;  
\- protocol set attivato;  
\- interaction/media mode \= LIVE / TEXT\_FIRST / ENHANCED / CINEMATIC / HYBRID quando pertinente;  
\- adventure type \= published / original / hybrid;  
\- optional user/test ID pseudonimo.

PRIVACY PRINCIPLE  
Raccogli soltanto dati necessari a migliorare il prodotto.  
Non chiedere dati sensibili per analizzare il divertimento.  
Email/lista marketing e feedback di gioco devono essere concettualmente separabili e gestiti con consenso appropriato.

PLAYER MODEL UPDATE  
Ogni feedback deve essere tradotto con provenienza:  
DECLARED — risposta esplicita.  
OBSERVED — comportamento/metriche osservate.  
INFERRED — interpretazione.  
CONFIDENCE — 0–1 o LOW/MEDIUM/HIGH.

Esempio:  
Declared: “voglio più combattimento”.  
Observed: punteggi più alti nelle sessioni con combattimenti tattici brevi.  
Inferred: preferenza per combat ad alta decision density, non necessariamente maggiore durata.  
Confidence: medium.

Non convertire automaticamente “più combattimento” in “raddoppia tutti i fight”. Testa una piccola modifica.

ITERATION LOOP  
SESSION/USE  
→ FEEDBACK  
→ FAILURE/SUCCESS CLASSIFICATION  
→ aggiornamento Player/GM Model  
→ identifica 1–3 cambiamenti a maggior ROI  
→ nuova versione/esperimento  
→ SESSION/USE successivo.

CHANGE POLICY  
Non modificare contemporaneamente dieci variabili se vuoi capire cosa ha prodotto il risultato.  
Quando possibile, cambiare poche cose e annotare l'ipotesi.

EXPERIMENT OBJECT  
Ogni esperimento può contenere:  
\- hypothesis;  
\- target segment;  
\- change;  
\- expected effect;  
\- guardrail;  
\- metrics;  
\- result;  
\- decision \= KEEP / MODIFY / REJECT / NEED MORE DATA.

Esempio:  
Hypothesis: il percorso GIOCA SUBITO con un solo messaggio di configurazione porta il Time to First Play verso \~60 secondi di configurazione prima della prima decisione giocabile, senza ridurre Fun, Desire to Return o libertà di scelta. La latenza tecnica della piattaforma resta separata.  
Guardrail: libertà di scelta, safety e corretto experience match non devono peggiorare.  
Decisione dopo N test.

FAILURE TAXONOMY — BOZZA  
F01 ONBOARDING TOO LONG  
F02 WRONG EXPERIENCE MATCH  
F03 PLAYER ACTION TAKEOVER  
F04 HIDDEN RAILROAD  
F05 STATE/MEMORY FAILURE  
F06 RULES ERROR  
F07 SPOILER / KNOWLEDGE LEAK  
F08 PACING DRAG  
F09 TOO MUCH EXPLANATION  
F10 TOO LITTLE SUPPORT  
F11 COMBAT STATIC/LOW-DECISION  
F12 INVESTIGATION BLOCK  
F13 NPC FLAT/INCOHERENT  
F14 CONSEQUENCE ARBITRARY  
F15 PLOT ARMOR / FUDGING  
F16 OVER-PREP  
F17 UNDER-PREP / MISSING CRITICAL ASSET  
F18 TOOL/UX FRICTION  
F19 SAFETY/EXPECTATION MISMATCH  
F20 NARRATIVE/ORTHOGRAPHIC INCOHERENCE  
F21 REPETITIVE LOOP / NO STATE CHANGE  
F22 NO NATURAL SESSION CLOSURE  
F23 OTHER.

SUCCESS TAXONOMY — BOZZA  
S01 HIGH AGENCY  
S02 STRONG TENSION  
S03 FAST TIME-TO-FIRST-PLAY / FIRST-USEFUL-OUTPUT  
S04 MEMORABLE NPC  
S05 SATISFYING CONSEQUENCE  
S06 GOOD TACTICAL DECISION  
S07 STRONG DISCOVERY/REVELATION  
S08 PLAYER SURPRISE WITHOUT CHEATING  
S09 HIGH IMMERSION  
S10 LOW-PREP/HIGH-VALUE  
S11 DESIRE TO RETURN  
S12 SATISFYING SESSION/CHAPTER CLOSURE  
S13 MEANINGFUL THEME WITHOUT PREACHING  
S14 OTHER.

BEHIND-THE-SCREEN DATA  
Se il debrief include counterfactual o probabilità, distinguere:  
\- PREDEFINED: era già stabilito;  
\- LOGGED DECISION: decisione presa prima dell'esito;  
\- EX-POST INFERENCE: ricostruzione successiva;  
\- NOT DETERMINED.  
Non presentare una stima ex-post come realtà nascosta che “sarebbe certamente accaduta”.

VERSIONING  
Ogni test esterno deve registrare almeno la versione del Divertoscopio e, quando pertinente, la versione separata dei termini applicabili.  
Versione prodotto corrente: **Closed Pilot V0.3**.  
Eventuali build tecniche possono usare un identificatore più granulare senza sostituire il nome pubblico della release.

Release stages:  
INTERNAL  
→ CLOSED PILOT  
→ PUBLIC ALPHA  
→ BETA  
→ STABLE, solo quando esistono dati sufficienti.

CLOSED PILOT SUCCESS CRITERIA — IPOTESI DA VALIDARE  
Non trattare queste soglie come verità definitiva.  
Prime soglie operative candidate:  
\- median Fun ≥ 8/10;  
\- median Desire to Return ≥ 8/10;  
\- Libertà di scelta (campo interno Agency) ≥ 8/10;  
\- nessun pattern ricorrente grave di player-action takeover o hidden fudging;  
\- GIOCA SUBITO: candidato Time to First Play con circa 1 minuto di configurazione; PERSONALIZZA PRIMA circa 5 minuti; PERSONALIZZA A FONDO 15+ minuti. Soglie da validare, non promesse;  
\- per AI-assisted human GM, riduzione percepita del prep time senza calo di divertimento.

La vera baseline va misurata sui primi tester; non manipolare il design per “passare” arbitrariamente le soglie.

TESTER STRATEGY — CLOSED PILOT V0.3  
Target iniziale: **10 Player + 10 Master**, abbastanza diversi da far emergere errori qualitativi.  
Non serve subito scala enorme.  
Cercare varietà in:  
\- esperienza GDR;  
\- esperienza AI;  
\- Player vs Master;  
\- solo vs gruppo;  
\- preferenza combat/RP/exploration;  
\- livelli di prep del Master.

LEARNING ASSET  
Il vero vantaggio cumulativo non è il numero di fonti lette, ma il dataset che collega:  
CONTEXT \+ PLAYER/GM PROFILE \+ TECHNIQUE/PROTOCOL USED \+ OUTCOME.

Domanda futura centrale:  
“Quale tecnica aumenta la probabilità di divertimento per quale tipo di persona, in quale situazione, a quale costo di attrito/preparazione?”

GUARDRAIL  
Non ottimizzare una metrica in modo cieco.  
Esempio: ridurre il tempo di configurazione non è un successo se produce mismatch, minore libertà di scelta, errori o meno divertimento.  
North Star \= esperienza umana complessiva.

ADDITIONAL RELIABILITY METRICS — ATTIVA QUANDO PERTINENTI  
20\. DICE TRUST / NO HIDDEN FUDGING: casi in cui l'AI ha modificato/ripetuto segretamente un proprio risultato già ottenuto \= 0\. Non misurare come failure la mancata verifica dei tiri dichiarati dal giocatore, salvo modalità verificata esplicitamente concordata.  
21\. STATE ACCURACY: contraddizioni CANON per 100 turni; errori su identità/alias, posizione, HP/risorse, oggetti e conoscenze.  
22\. RESUME ACCURACY: errori critici dopo snapshot → nuova chat/sessione.  
23\. MULTIPLAYER: libertà di scelta per giocatore; spotlight percepito; tempo morto percepito; knowledge leak tra PG; chiarezza su chi sta agendo.  
24\. HEALTHY ENGAGEMENT: la persona vuole tornare volontariamente; monitorare separatamente eventuale sensazione di sessione trascinata, cliffhanger artificiale o difficoltà a fermarsi.  
25\. SOURCE FIREWALL: numero di istruzioni incorporate nelle fonti che hanno alterato impropriamente il comportamento del framework; target \= 0\.  
26\. SCENE CONTEXT: scene/decisioni in cui luogo, ora/fascia del giorno o condizioni ambientali erano materialmente rilevanti ma mancavano/erano incoerenti; errori di geografia conosciuta dal PG; cambi meteo arbitrari non causali.

MULTIPLAYER FEEDBACK BREVE — SOLO SE UTILE  
Oltre alle metriche generali, chiedere eventualmente: “Ti sei sentito coinvolto/a abbastanza rispetto agli altri giocatori?” 0–10 e “Hai avuto tempi morti troppo lunghi?” 0–10. Non obbligare ogni giocatore a compilare un questionario lungo; raccogliere individualmente solo quando serve a diagnosticare il gruppo.

LONGITUDINAL CHECKPOINTS  
Per campagne persistenti, non giudicare il Divertoscopio soltanto dalla sessione 1\. Quando possibile confronta sessione 1 / 2 / 3 / 5 su: Fun, Desire to Return, libertà, ritmo, ripetitività percepita, state errors, qualità dei callback/payoff e volontà spontanea di riprendere.

CONTINUITY RELIABILITY METRICS — QUANDO PERTINENTI  
27\. FIRST USEFUL PARTIAL: un task lungo ha prodotto un risultato utilizzabile prima dell'ultimo passaggio? sì/no \+ momento/milestone.  
28\. CHECKPOINT COMPLETENESS: in caso di interruzione o cambio chat, sono presenti DONE / PENDING / DECISIONS-CANON / FILES-SOURCES / NEXT STEP?  
29\. CONTEXT WARNING QUALITY: warning dato prima della perdita evidente di continuità; nessuna falsa precisione su messaggi/token rimanenti; numero di warning ridondanti.  
30\. RESUME FROM CONTINUITY PACK: nuova chat riesce a riprendere il lavoro senza chiedere nuovamente informazioni già conservate e senza leak di visibilità.  
Failure candidate: F24 EXECUTION/CONTEXT ALL-OR-NOTHING — task perde valore perché tutto era rinviato alla fine, manca checkpoint utile o la conversazione supera il contesto senza strategia di continuità.  
Success candidate: S15 FAIL-SOFT CONTINUITY — risultato parziale utile, stato salvato e ripresa possibile con basso attrito.
