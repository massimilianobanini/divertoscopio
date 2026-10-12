# D&D — Class / Combat / Status Stress Gauntlet — 2026-10-12

**Ambito:** Divertoscopio pubblico, adapter 5e 2014 / SRD 5.1 e D&D 2024 / SRD 5.2.1.
**Tipo di evidenza:** lettura dei documenti GitHub + confronto con regole pubbliche ufficiali + regressioni testuali/deterministiche. **NON sono state lanciate chat pulite separate né giocate 24 avventure complete**. Il framework è Markdown per un modello AI, non un motore di regole compilato.
**Stato:** audit documentale + hardening dei due adapter; **BLACK-BOX ACTUAL PLAY OPEN**. Percentuali di `SYSTEM-SUPPORT.md` INVARIATE.

## Problema/risposta allo stress

Prima di questo audit entrambi gli adapter citavano class features in termini generali, ma nessuno dei 12 riferimenti di classe campione (Rage, Bardic Inspiration, Channel Divinity, Wild Shape, Action Surge, Ki/Focus, Divine Smite, Hunter's Mark, Sneak Attack, Sorcery Points, Pact Magic, Arcane Recovery) compariva esplicitamente nei rispettivi adapter. **Questo è un gap di specificità documentale, non la prova che tutti i turni dell'AI fallissero.** Il 2024 aveva invece già numerose regole specifiche su grapple/shove, Ready, Weapon Mastery e Stunned.

L'hardening introdotto è deliberatamente JUST-IN-TIME: quando un PG propone una capacità, verificare **sistema/edizione → classe e livello effettivo → sottoclasse/feature posseduta → trigger → economia azioni → bersaglio e prerequisiti → risorsa prima/dopo → tiro/TS/contesa → condizione/durata/concentrazione → registrazione stato**. Non obbligare i principianti a imparare queste voci né caricare tutta la tavola prima di giocare.

## Matrice classe per classe: 24 percorsi da eseguire

La colonna "PASS osservabile" è un criterio, **non un esito già ottenuto in una chat indipendente**.

| ID | Classe | Scenario D&D 2014 / SRD 5.1 | Scenario D&D 2024 / SRD 5.2.1 |
|---|---|---|---|
| CL01 | Barbaro | Livello 1: Rage come bonus action, usa un impiego; impedimenti a casting/concentrazione secondo fonte, terminazione e reset corretti. | Livello 1: Rage come bonus action e mastery solo per armi effettivamente abilitate; non importare recupero/estensione 2014. |
| CL02 | Bardo | Livello 1: Bardic Inspiration usa bonus action e carica; non regalare un secondo impiego a risorsa zero. | Bardic Inspiration con trigger, cariche e recupero della versione 2024; non copiare la tabella 2014. |
| CL03 | Chierico | Livello 2: Channel Divinity con opzione realmente posseduta, tipo di azione e numero di usi, tenere distinta la concentrazione. | Channel Divinity / feature correnti: livello, uso e TS esatti; non importare opzioni di sottoclasse non scelte. |
| CL04 | Druido | Livello 2: Wild Shape segue la normale azione del 2014, salvo specifica eccezione della sottoclasse attiva; forma, PF e usi persistenti. | Livello 2: Wild Shape è bonus action nella base 2024; forme conosciute, risorse/trasformazione e altri effetti source-defined. |
| CL05 | Guerriero | Livello 1 niente Action Surge né Battle Master; livello 2 extra action con Action Surge; livello 3 un Battle Master può usare SOLO manovre effettivamente apprese con fonte accessibile, non ogni guerriero. | Livello 1 Second Wind e Mastery sulle armi abilitate; livello 2 Action Surge NON crea Magic action/bonus action; Champion ≠ Battle Master. |
| CL06 | Monaco | Livello 1 Martial Arts bonus unarmed **dopo Attack**; livello 2 Ki per Flurry/Patient Defense/Step of the Wind, bonus action unica; livello 5 Stunning Strike. | Livello 1 bonus unarmed senza requisito Attack 2014; livello 2 Focus, Patient Defense free Disengage vs paid Dodge+Disengage, Step of the Wind, Flurry; Stunning Strike secondo timing 2024. |
| CL07 | Paladino | Livello 2 Divine Smite dopo colpo valido consuma slot, NON bonus action come tale; Aura e altre feature solo quando sbloccate. | Livello 2 Divine Smite **spell** con bonus action e relative limitazioni, gestione slot/free use; Lay on Hands usa timing 2024. |
| CL08 | Ranger | Livello 2 spellcasting/Hunter's Mark quando appreso/attivo; bonus action e concentrazione contano; evitare limiti 2024. | Livello 1 Favored Enemy/Hunter's Mark con impieghi senza slot previsti dalla versione 2024 e relativa concentrazione. |
| CL09 | Ladro | Livello 1 Sneak Attack una volta **per turno**, anche con reaction su turno nemico se valido; livello 2 Cunning Action usa bonus action. | Stessa proprietà per-turno ma Weapon Mastery se effettivamente sbloccata; Cunning Strike da livello 5 sacrifica dadi Sneak Attack, non inventa una nuova risorsa. |
| CL10 | Stregone | Livello 2 Font of Magic/Sorcery Points; Metamagic solo da livello 3 con scelta realmente appresa e costo corretto. | Livello 2 Sorcery Points **e Metamagic**, con costi e limitazioni da fonte corrente; no procedura 2014 non verificata. |
| CL11 | Warlock | Pact Magic: slot e recupero da classe; Invocations e Pact Boon ai livelli corretti; concentrazione/casting time degli incantesimi. | Pact Magic e Invocations/Prerequisiti 2024: accesso effettivo, slots, action economy e source-lock; nessuna invocation universale. |
| CL12 | Mago | Arcane Recovery e spellbook/spell slots, preparazione, reazioni Shield/Counterspell solo se conosciuti/preparati e permessi. | Fonti 2024 per Arcane Recovery, prepared spells, Magic action, reaction spell, concentration e vincolo slot per turno. |

**Sottoclassi non SRD:** Battle Master e il suo catalogo di manovre sono esempi da stressare *solo* quando una fonte appropriata legittimamente disponibile al tavolo viene fornita o consultata. Le Basic Rules leggibili online e il testo Creative Commons dello SRD non sono automaticamente la stessa licenza di riutilizzo. Non inserire descrizioni proprietarie delle manovre nei file pubblici. Per un guerriero che non ha scelto Battle Master, fallire un tentativo di usare «spazzata» come manovra è CORRETTO; proporre invece Shove/altre azioni base legali può essere utile senza sostituire la scelta del PG.

## Azioni, turni, reazioni: 18 casi avversariali

| ID | Stimolo / setup | PASS osservabile |
|---|---|---|
| AC01 | Guerriero lv2 2014 usa Attack + Action Surge | Ottiene **azione** extra, non un'altra bonus action o reaction; consumo Action Surge registrato. |
| AC02 | Guerriero 2014 lv1 vuole Action Surge o manovra Battle Master | Capability non disponibile a quel livello, risposta chiara e alternative legali. |
| AC03 | Guerriero 2014 lv3 Champion chiede «attacco con spazzata» | Non inventa dadi superiorità; distingue manovra opzionale da Shove standard. |
| AC04 | Battle Master **livello 3** con scheda/fonte valida dichiara manovra, 0 dadi | Nessun costo/effetto applicato da risorsa inesistente; richiesta di ruling se fonte ambigua. |
| AC05 | Monaco lv2 2014: Attack, Flurry (bonus), poi Patient Defense | Rifiuta seconda bonus action; Ki speso una volta per Flurry, niente Dodge aggiuntiva. |
| AC06 | Monaco lv1 2014 vuole Ki/Flurry | Ki non disponibile, ma eventuale colpo bonus Martial Arts rimane possibile col prerequisito Attack. |
| AC07 | Monaco lv2 2024 vuole Patient Defense senza Focus | Bonus Disengage con costo zero consentito; Dodge addizionale richiede Focus. |
| AC08 | Monaco lv2 2024 usa unarmed come bonus action senza Attack | Non applica il requisito 2014; controlla comunque bonus action non spesa e altri prerequisiti. |
| AC09 | Paladino lv2 2014 usa Divine Smite dopo hit, aveva già speso bonus action | Può applicare Divine Smite se ha slot e trigger valido, non inventare BA. |
| AC10 | Paladino lv2 2024 ha già speso bonus action prima di Divine Smite spell | Non concede una seconda bonus action; mantiene vincoli di slot/spell validi. |
| AC11 | Ladro fa Sneak Attack nel proprio turno e poi Opportunity Attack nel turno nemico | Può ottenere Sneak Attack anche nel secondo turno se criteri validi, non due volte nello stesso turno. |
| AC12 | Ladro usa Disengage con Cunning Action e tenta un'altra bonus action | Una sola bonus action. |
| AC13 | PG usa Dodge come azione e poi scende a Speed 0, edizione 2014 | Il beneficio di Dodge termina secondo testo 2014, pur essendo stata spesa l'azione. |
| AC14 | PG usa Ready per attaccare e poi Opportunity Attack per un altro trigger | Una sola reazione finché non si ricarica; pronto ≠ reazione gratuita. |
| AC15 | PG prepara uno spell, subisce danni e fallisce il TS concentrazione | Spell preparato si disperde se si perde concentrazione; niente restituzione automatica slot. |
| AC16 | Mostro usa Multiattack da stat block, poi un attacco di opportunità | Non importa l'intero Multiattack nell'Opportunity Attack. |
| AC17 | Due armi leggere con bonus action già spesa | Nessun altro attacco bonus senza regola specifica che cambi l'economia. |
| AC18 | Extra Attack e alternanza attacco normale/lotta/spinta | Procedura applicata a ciascun attacco sostituibile della Attack action, senza duplicare l'azione. |

## Lotta, spinta, movimento: 12 casi fra le due edizioni

| ID | Situazione | PASS osservabile |
|---|---|---|
| GR01 | 2014: Atletica 16 vs Atletica/Acrobazia difensore 13 | Lotta riuscita se taglia, portata e mano libera lo permettono; applica Grappled. |
| GR02 | 2014: Atletica 11 vs Acrobazia 11 | Pari non è una vittoria dell'attaccante; niente nuovo Grappled. |
| GR03 | 2014: bersaglio Incapacitated entro portata | Inizio lotta/spinta automatico secondo errata 2014; prerequisiti fisici persistono. |
| GR04 | 2014: due attacchi disponibili, uno usato per Shove | Solo quell'attacco viene sostituito; Shove può dare Prone O spingere 5 piedi. |
| GR05 | 2014: Grappled viene scambiato per Restrained | FAIL: Grappled da solo dà velocità 0, non tutti gli effetti di Restrained. |
| GR06 | 2014: il bersaglio prova a liberarsi | Normale azione e prova contrapposta; non TS fisso 2024. |
| GR07 | 2024: Forza +3, PB +3: colpo senz'armi per grapple | DC = 14; bersaglio sceglie TS For o Des, non contesa Atletica. |
| GR08 | 2024: TS difensore pari alla DC | Salvezza riuscita; grapple/shove non imposto. |
| GR09 | 2024: Monk usa Dex invece di Str per DC di Grapple/Shove, se Martial Arts disponibile | Applica eccezione di classe corrente e calcola la DC corretta. |
| GR10 | 2024: Opportunity Attack con Unarmed Strike per Grapple, requisiti soddisfatti | Consentito se regola e trigger lo permettono; consuma reazione. |
| GR11 | Entrambe: bersaglio troppo grande / fuori portata | Non creare stato Grappled/Shove solo grazie a tiro alto. |
| GR12 | Entrambe: grappler Incapacitated o separato fuori portata | Applica termine del Grappled secondo fonte; aggiorna stato senza dimenticare gli effetti collaterali. |

## Condizioni, danni e concentrazione: 17 controlli

Le 15 condizioni standard 2014/2024 da verificare nell'ordine fonte→applicazione→effetto→rimozione: **Blinded, Charmed, Deafened, Exhaustion, Frightened, Grappled, Incapacitated, Invisible, Paralyzed, Petrified, Poisoned, Prone, Restrained, Stunned, Unconscious.** La scala/gestione Exhaustion varia fra edizioni.

| ID | Bait | PASS osservabile |
|---|---|---|
| ST01 | Poisoned e tiro salvezza normale | Poisoned non impone genericamente svantaggio a tutti i TS; sì ad attacchi/ability check secondo fonte. |
| ST02 | Prone, attaccante entro 5 piedi / oltre 5 piedi | Vantaggio/svantaggio corretto in relazione alla distanza, non in base all'arma soltanto. |
| ST03 | Restrained vs Grappled | Non scambiare i due; applica speed/attacks/saves corretti per ciascuno. |
| ST04 | Paralyzed, colpo che va a segno da 5 piedi | Critico da prossimità e altri effetti previsti; non richiede che l'attaccante usi arma da mischia. |
| ST05 | Stunned 2014, colpo da 5 piedi | Incapacitated / can't move / TS For-Des falliti / vantaggio a colpire; non critico automatico. |
| ST06 | Stunned 2024, giocatore tenta movimento | Non aggiungere Speed 0 come clausola generica di Stunned; controllare gli altri impedimenti e le regole attive. |
| ST07 | Incapacitated durante concentrazione | Concentrazione termina quando la condizione lo richiede; azione/reazione e bonus action bloccate. |
| ST08 | Frightened, fonte paura non visibile | Non applicare indiscriminatamente svantaggio di attacchi/ability check senza verificare linea di vista. |
| ST09 | Charmed / un'influenza sociale | Non trasformare Charmed in controllo mentale universale; verificare bersaglio ed effetto. |
| ST10 | Unconscious, critico da 5 piedi e Death Saves | Applicare stato, attacchi e condizioni secondo edizione, senza trasformare ogni hit in una morte forzata. |
| ST11 | Blinded | Limitazioni di vista, attacco/vantaggio da fonte; non trattare ogni percezione come impossibile. |
| ST12 | Deafened | Fallimento automatico di prove che richiedono udito, non incapacità di percepire altro. |
| ST13 | Petrified | Condizione, immunità, resistenze e liberazione source-defined, non semplice Stunned. |
| ST14 | Invisible indipendente vs Hide-sourced 2024 | Separare le due origini e i trigger di rimozione. |
| ST15 | Exhaustion 2014 vs 2024 | Non usare una tabella/scala dell'altra edizione. |
| ST16 | Due fonti della stessa condizione con scadenze diverse | Non sommare lo stesso status come se fosse doppio svantaggio; non rimuoverlo se un'altra fonte resta attiva. |
| ST17 | Effetto che concede nuovo TS a fine turno | Effettuare il TS al **turno giusto**, tenere fino al trigger giusto, non rimuovere status arbitrariamente al round end. |

## Verifiche svolte su questa modifica (da NON confondere con actual play)

- **43/43** asserzioni documentali su routing dei due adapter, copertura delle dodici famiglie di classi in entrambe le edizioni, lotta, condizioni, limiti delle fonti, conservazione dei file CORE/PLAYER/SYSTEM-SUPPORT e disponibilità delle nuove regole **solo su richiesta pertinente**. Uno dei controlli precedenti aveva un errore nel conteggio dei casi dovuto a una espressione regolare; sostituito con conteggio per righe e identificativi univoci.
- **59/59** righe della matrice di test univocamente etichettate: 12 righe di classe, ciascuna valida per due edizioni (=24 percorsi), 18 casi di economia azioni, 12 di grapple/spinta e 17 di condizioni. **71 percorsi/baits da verificare poi nel prodotto**; non sono 71 pass in ChatGPT.
- **38/38** valutazioni numeriche/logiche su un *oracolo separato, scritto apposta per questa verifica*: contese Atletica 2014, DC e TS 2024, sblocco capacità per livello/sottoclasse, bonus action/reaction una volta, condizioni Prone/Paralyzed/Stunned e principio una volta per turno del Sneak Attack. Questo controlla la coerenza di alcuni expected dei casi; **non esegue il Divertoscopio come Master**, non è una simulazione di sessione né certifica un comportamento del modello.
- **0** chat pulite indipendenti e **0** combattimenti completi in una sessione esterna osservati in questa attività. Misura del TTFP dopo questi cambiamenti **non svolta**; gli adapter mantengono un link breve, mentre le istruzioni di dettaglio sono in `adapters/5e-srd51/COMBAT-CLASSES.md` e `adapters/5e-srd521/COMBAT-CLASSES.md` recuperabili on demand. Questo limita l'aumento del testo caricato all'avvio ma non ne prova la latenza effettiva.

## Piani di esecuzione REALI, ancora da svolgere

1. **Clean-room (non primed):** 12 chat nuove D&D 2014 + 12 chat nuove D&D 2024, una classe per chat, un combattimento di più turni a livello appropriato; non fornire la soluzione dell'esercizio all'AI prima del test. Registrare verbatim scheda/capacità, azioni, tiri, spese/recuperi, iniziativa e stato.
2. **Red-team mirato:** AC01–18, GR01–12, ST01–17. Dopo la prova naturale, in una chat separata ripetere i baits esplicitando la fonte solo per correggere/diagnosticare. Un PASS su testo delle istruzioni **non** è un PASS comportamentale.
3. **Party 3+ PG:** action economy simultanea, turni assegnati e concentrazioni indipendenti, Attack/Help/Ready/Reactions, condizioni che saltano turni, AoE, immunità, scaricamento risorse e continuazione round.
4. **Campagna:** trasportare memoria di gioco, combattimento interrotto e ripreso, iniziativa, HP, reazioni, condizioni con durata `start/end next turn`, slot, Ki/Focus, superiorità, usi per riposo. Dopo breve/lungo riposo applicare solo il recupero valido dell'edizione.
5. **Fonte**: per Battle Master, sottoclassi extra-SRD e incantesimi/manuali non coperti dalla SRD, l'utente fornisce manuale legittimo o fonte ufficiale accessibile. Senza essa, un comportamento trasparente e prudente è PASS; una capacità inventata presentata come ufficiale è FAIL.

**Metriche:** P0 = costo risorsa/azione illegale, feature mai sbloccata, condizioni errate materialmente, class contamination, slot fittizi, risultati manipolati; P1 = omissione sistematica di una possibilità legale, errore di presentazione o necessità di continui promemoria da parte del giocatore. Misurare errori/100 turni, costo correzioni, primo turno giocabile, divertimento e volontà di proseguire. Distinguere competenza del modello, lacuna del documento e fonte non accessibile.

**Gate:** nessun aumento automatico delle percentuali `SYSTEM-SUPPORT.md` senza actual play. Nessun nuovo questionario/menù richiesto. Se emerge un P0 riproducibile, effettuare patch minima, retest stessi baits + avvii rapidi + source/copyright audit prima del merge.

## Fonti ufficiali consultate per costruire gli expected

- 2014 Basic Rules Combat: https://www.dndbeyond.com/sources/dnd/basic-rules-2014/combat
- 2014 Basic Rules Classes: https://www.dndbeyond.com/sources/dnd/basic-rules-2014/classes
- 2014 Appendix A Conditions: https://www.dndbeyond.com/sources/dnd/basic-rules-2014/appendix-a-conditions
- 2014 PHB errata: https://www.dndbeyond.com/sources/dnd/sae/players-handbook-2014
- 2024 Basic Rules Character Classes: https://www.dndbeyond.com/sources/dnd/br-2024/character-classes
- 2024 Basic Rules Rules Glossary: https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary
- SRD e licenze: https://www.dndbeyond.com/srd/

**Nota:** il piano riassume TEST e criteri, non riproduce testi integrali di sottoclassi/manuali commerciali. L'edizione e la fonte effettivamente attiva nel tavolo sono l'autorità.
