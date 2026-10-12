# ADVANCEMENT · FEATS · MULTICLASS · COMPONENTS · ITEMS · ENVIRONMENT — STRESS TEST 2026-10-12

**Target:** GitHub main Divertoscopio D&D 2014 SRD 5.1 e D&D 2024 SRD 5.2.1. **Status:** osservazione documentale / oracle sintetico + due procedure JIT; actual-play clean-room NON eseguito. Le voci sono *casi da eseguire*, non PASS del modello. Cambiamento esteso solo agli adapter D&D e ai relativi documenti tecnici on-demand: nessuna nuova domanda in Gioca subito, CORE e PLAYER invariati.

## Problemi ricercati

- Level-up attribuito in ritardo o applicato due volte; classe, sottoclasse, talento, ASI, dadi vita, nuovi PF o modifiche retroattive a Costituzione applicate senza conferma.
- ASI ottenuto al livello totale 4 per un PG multiclass senza classe al livello corretto, feat del 2014 proposto anche se disabilitato; feat 2024 non valido per categoria, livello o prerequisiti.
- Multiclasse senza prerequisiti, competenze da primo livello ottenute ingiustamente, attacchi extra sommati, calcolo slot diversi 2014/2024, confusione fra livello degli slot e incantesimi realmente preparati.
- Oggetti mai acquisiti, foci universalizzati, materiali consumati e componenti costosi inventati; "principiante" usato come scusa per alterare le regole, oppure controlli troppo frequenti che tolgono divertimento.
- Mobili/mano/gesti/voce in ambienti silenziosi, Silence magico, casting sott'acqua, acqua e terreno difficile: omessa o duplicata penalità.
- Oggetti magici con sintonizzazione, cariche, identificazione, concentrazione e maledizioni erroneamente trattati come poteri sempre attivi.

**Regola di esperienza:** principiante = minore carico cognitivo e recupero onesto dell'inventario, NON nuovi diritti a materiali costosi; eventuale deroga soltanto house rule accettata e registrata. Esperto = trasparenza RAW/uso rigoroso di fonti reali, NON punizioni inventate. Testare *entrambe* le esperienze.

## Casi di regressione

| ID | Edizione | Setup | PASS richiesto |
|---|---|---|---|

### Avanzamento e PF (12)

| LV-01 | 2014 | Guerriero3/Mago1 arriva al livello totale 4 e vuole talento | NO ASI: nessuna classe è al livello 4; scegliere prossimo livello. |
| LV-02 | 2014 | Guerriero3 sale a Guerriero4 con feat opzionali OFF | Applicare ASI; nessun talento automatico. |
| LV-03 | 2014 | Guerriero3 sale a Guerriero4 con feat opzionali ON e consenso | Offrire ASI o feat legale a scelta del giocatore, non entrambi gratuitamente. |
| LV-04 | 2014 | Costituzione 17→18 al livello totale 8 | Nuovo mod +1; +8 PF max oltre al dado vita e altri effetti pertinenti. |
| LV-05 | 2014 | Aumenta il livello ma resta pending scelta sottoclasse | Non applicare scelta di build arbitraria; pending resta riconciliabile. |
| LV-06 | 2014 | Si riprende partita con pending_level_up=YES | Risoluzione prima di avanzare significativamente e niente ripetizione XP. |
| LV-07 | 2024 | Guerriero3/Mago1 al totale4 pretende feat da livello totale | NO: occasione proviene da classe specifica; verificare feature. |
| LV-08 | 2024 | Guerriero3→4 | Offrire ASI General Feat o altra opzione di feat consentita; verificare categoria/prequisiti. |
| LV-09 | 2024 | Aumento 17→18 CON al livello totale8 | Bonus retroattivo +8 PF max, non solo +1. |
| LV-10 | 2024 | Level-up cambia proficiency +2→+3 al livello totale5 | Aggiornare tutti i tiri/CD/skill pertinenti, anche in multiclasse. |
| LV-11 | 2024 | Il PG ha dichiarato preferenza per PF medi nei precedenti level up | Rispettare scelta persistente/rule source senza tornare a interrogare. |
| LV-12 | 2024 | Avventura indica livello consigliato 6 ma PG è livello 4 | Gate progressione, non level-up automatico per soddisfare una raccomandazione. |

### Talenti e ASI (12)

| FT-01 | 2014 | Giocatore vuole feat ma tavolo NON usa la regola opzionale | Non offrire feat in sostituzione ASI salvo nuovo accordo. |
| FT-02 | 2014 | Talento con prerequisito non rispettato | Non concesso anche se il personaggio preferisce; indicare requisito. |
| FT-03 | 2014 | Feat non ripetibile già posseduto | Non duplicare. |
| FT-04 | 2014 | ASI +2 a caratteristica già 20 | Non superare 20 senza fonte. |
| FT-05 | 2014 | Guerriero livello6 ottiene ulteriore ASI di classe | Opportunità da class table, non livelli totali multipli di 4 soltanto. |
| FT-06 | 2014 | Passo a livello4, personaggio chiede vantaggi dei feat | Spiegare scelte, non scegliere senza delega. |
| FT-07 | 2024 | PG liv4 sceglie Ability Score Improvement | È un General Feat, può essere ripetibile. |
| FT-08 | 2024 | PG liv4 chiede Epic Boon | NO se prerequisito livello 19+ non rispettato. |
| FT-09 | 2024 | PG liv4 con DES12 vuole Grappler | NO: prerequisito FOR/DES 13+. |
| FT-10 | 2024 | PG liv4 vuole Fighting Style Feat senza feature richiesta | Non concedere salvo regola specifica. |
| FT-11 | 2024 | Background concede Origin Feat | Non contarla come feat/ASI acquisito a livello4. |
| FT-12 | 2024 | Grappler 2024 aumenta FOR13→14 | Ricalcolare modifier e stato collegato, nessun doppio ASI. |

### Multiclasse (16)

| MC-01 | 2014 | Monaco DES13 SAG12 vuole Paladino | Non può lasciare Monaco per multiclasse: SAG sotto 13; Paladino richiede anche FOR13 CAR13. |
| MC-02 | 2014 | Barbaro FOR12 vuole Druido SAG15 | Multiclasse non valido finché non possiede prerequisito Barbaro FOR13. |
| MC-03 | 2014 | Guerriero FOR12 DES14 vuole Ladro DES13 | Guerriero soddisfatto via DES 13; se altri prerequisiti validi ammettere. |
| MC-04 | 2014 | Paladino2/Mago3, calcolo livelli incantatore | Mezzi livelli paladino per difetto =1, più mago3 =4. |
| MC-05 | 2014 | Paladino1/Mago1, calcolo livelli incantatore | Paladino1 NON contribuisce agli slot; Mago1 → 1. |
| MC-06 | 2014 | Mago4/Chierico1 ha slot di livello3 | Non acquisisce per questo incantesimi di livello3 conosciuti/preparabili. |
| MC-07 | 2014 | Mago4/Chierico1 prepara incantesimo da Mago | Usa INT/focus consentito alla classe mago; non focus chierico wildcard. |
| MC-08 | 2014 | Warlock1/Mago1 | Pact Magic resta distinto; slot e recuperi non vanno fusi senza fonte. |
| MC-09 | 2024 | Paladino1/Mago1, livelli incantatore | Paladino1 conta 1 per eccesso + Mago1 =2. |
| MC-10 | 2024 | Ranger1/Mago1, livelli incantatore | Ranger1 conta 1 per eccesso + Mago1 =2. |
| MC-11 | 2024 | Ranger1/Stregone3, livelli incantatore | 1 + 3 =4; non importare arrotondamento 2014. |
| MC-12 | 2024 | Fighter Eldritch Knight3/Mago1, livelli incantatore | Un terzo fighter per difetto=1 + mago1 =2. |
| MC-13 | 2024 | Guerriero3/Ladro2, bonus competenza | Livello totale5 → PB+3; feature da livelli specifici classe. |
| MC-14 | 2024 | Paladino5/Guerriero5 con Extra Attack | Non sommare automaticamente Extra Attack in quattro attacchi. |
| MC-15 | 2024 | PG ottiene una seconda modalità per calcolare CA | Sceglie una, non somma i due calcoli. |
| MC-16 | 2024 | Warlock con Pact Magic + chierico Spellcasting | Risorse distinte, spell preparati per classe; regole cross-use source-defined. |

### Componenti, foci, V/S/M (22)

| SP-01 | 2014 | Mago con borsa componenti registrata lancia Fireball V/S/M banale | Nessun bisogno di singoli reagenti non costosi e non consumati. |
| SP-02 | 2014 | Mago senza focus/borsa e senza reagente dichiara Fireball | Non inventare reagente nell'inventario; si può cercare o concordare deroga. |
| SP-03 | 2014 | Chierico usa focus arcano del Mago per un proprio incantesimo | Focus non universale: controllare focus ammesso alla classe. |
| SP-04 | 2014 | Incantesimo S senza M, mano occupata da focus e altra da scudo | Serve vera mano libera o feature valida; focus non sostituisce automaticamente mano. |
| SP-05 | 2014 | Incantesimo S+M con focus valido tenuto in mano | Stessa mano può gestire M e S. |
| SP-06 | 2014 | Incantesimo V nella zona Silence | Non lanciabile senza eccezione source-defined. |
| SP-07 | 2014 | Incantesimo solo S nella zona Silence | Non bloccato dal divieto di componente V; verificare altri prerequisiti. |
| SP-08 | 2014 | Perla con costo 100gp richiesta da incantesimo | Focus/borsa non sostituisce materiale con prezzo; inventario reale necessario. |
| SP-09 | 2014 | Componente consumato non costoso e non in borsa come scorta reale | Non eludere il consumo con focus. |
| SP-10 | 2014 | Principiante dimentica di aver scelto starting pack con borsa effettivamente inclusa | Ricostruisci pack dalla fonte e annota la correzione; non nuovo loot. |
| SP-11 | 2014 | Principiante trova piuma comune su terreno adatto e la raccoglie prima | Raccolta plausibile con stato/tempo, non materializzazione retroattiva. |
| SP-12 | 2014 | Principiante chiede gemma 300gp mai comprata | Non assegnarla gratis; offri strategia alternativa o acquisizione regolare. |
| SP-13 | 2014 | Giocatore esperto richiede verifica integrale componenti | Mostra V/S/M, hands, tempi, materiali, slot, ma senza aggiungere regole proprie. |
| SP-14 | 2014 | PG trattiene il fiato sott'acqua, lancia spell con V | Non dichiarare universalmente sì/no; verifica respirazione, pronuncia e ruling esplicito. |
| SP-15 | 2024 | Incantesimo V in biblioteca silenziosa ma NON Silence magico | Può lanciare, ma componente pronunciata a volume normale può essere udita. |
| SP-16 | 2024 | Incantesimo V sotto Silence magico | Impedito; non basta sussurrare. |
| SP-17 | 2024 | Incantesimo S-only sotto Silence magico | Consentito se mani e altre condizioni validi. |
| SP-18 | 2024 | Stregone con focus registrato vuole ignorare materiale costoso | Non consentito. |
| SP-19 | 2024 | Ranger con Druidic Focus legalmente posseduto | Fonte 2024 consente focus druidico al Ranger quando feature lo abilita. |
| SP-20 | 2024 | Item magico consente spell senza componenti, salvo testo contrario | Applica regola item specifica, non imporre V/S/M automaticamente. |
| SP-21 | 2024 | Principiante manca materiale da 300gp consumato | Non sostituire anche se plausibile vicino. |
| SP-22 | 2024 | Principiante accetta house rule per reagente innocuo non consumato | Etichetta e registra house rule; non chiamarla RAW e non estenderla ai materiali costosi. |

### Oggetti magici (12)

| MI-01 | 2014 | PG possiede una bacchetta ma non è sintonizzato; attunement richiesto | Non ottiene automaticamente potere magico. |
| MI-02 | 2014 | PG è già sintonizzato con tre oggetti e trova quarto | Quarta sintonizzazione fallisce salvo regola che aumenti limite. |
| MI-03 | 2014 | Wand recupera cariche all'alba | Non recupera quando finisce il combattimento. |
| MI-04 | 2014 | PG compra oggetto senza usarlo | Monete scalate e provenance registrata, non proprietà istantaneamente attive se richiedono altre procedure. |
| MI-05 | 2014 | Oggetto cursed viene identificato | Non rivelare automaticamente maledizione. |
| MI-06 | 2014 | Oggetto magico usa incantesimo da oggetto | Trigger/slot/componenti/azione/concentrazione seguono oggetto e fonte. |
| MI-07 | 2024 | Anello richiede attunement e viene solo indossato | Nessun beneficio magico automatico prima di attunement. |
| MI-08 | 2024 | Identifica oggetto durante Short Rest, tenta attunement stesso riposo | Non può compiere entrambe le procedure sullo stesso oggetto nello stesso Short Rest. |
| MI-09 | 2024 | PG tenta sintonizzare due copie dello stesso oggetto | Non consentito. |
| MI-10 | 2024 | PG usa oggetto con 0 charges | Non attiva capacità a carica. |
| MI-11 | 2024 | Oggetto lancia spell e richiede concentrazione | Usatore concentra secondo item/spell; niente slot propri salvo eccezione. |
| MI-12 | 2024 | PG conosce nome artefatto dalla narrazione ma non lo possiede | Non attribuire item e capacità all'inventario. |

### Ambiente e combattimento (20)

| EN-01 | 2014 | Muove 5 piedi su terrain difficult | Consuma 10 piedi di movimento. |
| EN-02 | 2014 | Due cause di terrain difficult sullo stesso quadrato | Non quadruplicare automaticamente costo. |
| EN-03 | 2014 | Nuota 5 piedi senza swim speed | Consuma 10 piedi di movimento normale. |
| EN-04 | 2014 | Nuota 5 piedi in terrain difficult senza swim speed | Fonte swimming difficile applica extra: 15 piedi totali. |
| EN-05 | 2014 | Combat sott'acqua con spada lunga e senza swim speed | Attacco mischia con svantaggio. |
| EN-06 | 2014 | Combat sott'acqua con spada corta e senza swim speed | Niente svantaggio dall'acqua alla mischia. |
| EN-07 | 2014 | Combat sott'acqua con balestra bersaglio entro normale range | Niente svantaggio imposto dalla regola acqua 2014. |
| EN-08 | 2014 | Combat sott'acqua arco lungo entro normale range | Svantaggio alla distanza. |
| EN-09 | 2014 | Combat sott'acqua qualsiasi arco oltre gittata normale | Attacco automaticamente mancato. |
| EN-10 | 2014 | Creatura completamente immersa subisce 20 danni fuoco | Resistenza dimezza a 10 prima di altre mitigazioni. |
| EN-11 | 2024 | Muove 5 piedi su difficult terrain | Consuma 10 piedi di movimento. |
| EN-12 | 2024 | Due fonti di difficult terrain | Non cumulate. |
| EN-13 | 2024 | Nuota 5 piedi difficile senza Swim Speed | Consuma 15 piedi con costo da fonte. |
| EN-14 | 2024 | Combat sott'acqua senza Swim Speed con arma Piercing | Niente svantaggio da acqua sulla mischia. |
| EN-15 | 2024 | Combat sott'acqua senza Swim Speed con mazza Bludgeoning | Svantaggio da acqua sulla mischia. |
| EN-16 | 2024 | Combat sott'acqua con balestra entro gittata normale | Svantaggio, a differenza del 2014. |
| EN-17 | 2024 | Combat sott'acqua con arma ranged oltre gittata normale | Fallimento automatico. |
| EN-18 | 2024 | Incantesimo ranged spell attack sott'acqua | Non applicare automaticamente le penalità per ranged WEAPON attack; verificare spell e condizioni reali. |
| EN-19 | 2024 | Campo in penombra e macerie, PG ha Darkvision | L'oscurità non sparisce insieme alla penalità per macerie; ogni asse distinto. |
| EN-20 | 2024 | Ranger con Swim Speed attraversa acqua calma | Non paga il sovraccosto ordinario nuoto; altre restrizioni restano. |

## Audit pre-merge e criteri di promozione

I due adapter sono intenzionalmente **brevi**: rinviano a `ADVANCEMENT-EQUIPMENT-ENVIRONMENT.md` soltanto in presenza di questi trigger (level-up complesso, multiclass, componenti costosi o silenzio, inventario dubbio, oggetti magici, terreno/acqua). Anche `COMBAT-CLASSES.md` resta recuperabile on demand.

**Contratti di sicurezza:** H3 INVENTORY PROVENANCE; H10 PLAYER LEVEL-UP OWNERSHIP; H11 metodo PF; ROLE/PLAYER; regole attive; niente fonti commerciali inventate. Confronto specifico di D&D 2014/2024 e della licenza CC-BY delle SRD. Omettere input dalla fonte = UNKNOWN, non assunzione favorevole al giocatore.

**Test successivi da svolgere in chat indipendenti:** 4 attraversamenti level-up 2014/2024 ciascuno (incluso multiclass), 4 combattimenti magici (esperto e principiante, Silence/costly M), 2 scene acquatiche per edizione, 2 loot/attunement con riposo, replay da checkpoint. Misurare tasso errori per turno, correzioni manuali, tempo alla prima decisione, divertimento e voglia di giocare ancora. Prima test cieco NON suggerire al modello la specifica trappola; dopo test causale e ripetizione sullo stesso setup. Un check statico non valida l'esecuzione durante il gioco.

**Criteri P0:** talenti/ASI illegali; multiclass senza prerequisiti; slots/preparazioni indebite; componenti costosi/consumati gratuiti; item/cariche inventati; cambio di edizione; penalità subacquee e silenzio magico ignorati con impatto sul risultato. **P1:** omissione spiegazione o aiuto, richieste ripetitive a novizi, errori cosmetici. Non incrementare percentuali SYSTEM-SUPPORT senza evidenza comportamentale.

## Risultati verificati — 12/10/2026

- **94/94** scenari correttamente presenti e identificati in questa batteria, ripartiti in LV12, FT12, MC16, SP22, MI12, EN20. Sono **scenari da eseguire**, NON 94 prove del Divertoscopio superate.
- **52/52** asserzioni statiche passate sui documenti modificati, i rimandi di caricamento on-demand, il contenuto dei guardrail, il numero di scenari, l'assenza di variazioni a CORE, PLAYER, runtime e SYSTEM-SUPPORT. Verifica lessicale e strutturale: NON afferma che ChatGPT esegua sempre le istruzioni.
- **45/45** casi matematici/logici su **oracolo separato scritto per questo audit**: prerequisiti, multiclasse 2014/2024 (inclusi arrotondamenti half-caster e terzi per sottoclassi incantatrici, se previste), legalità di V/S/M e materiali costosi, slot/componenti, sintonizzazione 3, armi sott'acqua e movimento/danno da fuoco. **Non è un interprete del Divertoscopio e non simula una partita**.
- **Nessuna prova clean-room del modello eseguita qui:** 0 turni AI osservati con il repository come sistema, 0 confronti quantitativi di TTFP. Nessuna affermazione di accuratezza %, divertimento o robustezza reale. Mantenere il gate di actual play aperto.
- **Principianti:** ridurre la burocrazia per i reagenti comuni *solo* grazie a focus/borse/pack già verificati oppure una correzione di inventario o una house rule esplicita. I materiali prezzati o consumati non si inventano. Per esperti rendere visibili le regole RAW senza inventare ulteriori vincoli.
- **Latenza attesa:** i due adapter principali contengono solo un rimando aggiuntivo, e l'approfondimento è in due file separati; non è stato misurato il tempo reale di avvio.

## Fonti ufficiali

- 2014 Basic Rules: https://www.dndbeyond.com/sources/dnd/basic-rules-2014/customization-options ; https://www.dndbeyond.com/sources/dnd/basic-rules-2014/spellcasting ; https://www.dndbeyond.com/sources/dnd/basic-rules-2014/combat ; https://www.dndbeyond.com/sources/dnd/basic-rules-2014/magic-items
- 2024 Basic Rules: https://www.dndbeyond.com/sources/dnd/br-2024/creating-a-character ; https://www.dndbeyond.com/sources/dnd/br-2024/feats ; https://www.dndbeyond.com/sources/dnd/br-2024/spells ; https://www.dndbeyond.com/sources/dnd/br-2024/equipment ; https://www.dndbeyond.com/sources/dnd/br-2024/magic-items ; https://www.dndbeyond.com/sources/dnd/br-2024/playing-the-game ; https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary

**Legal/source boundary:** elencare i comportamenti richiesti, non riprodurre cataloghi di talenti, magie, mostri o oggetti non inclusi nelle SRD. Altre fonti commerciali solo se realmente accessibili tramite l'utente.
