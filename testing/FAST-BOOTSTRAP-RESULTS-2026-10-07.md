# Fast Bootstrap + Public Runtime — Static Stress Result

Data: **2026-10-07**  
Stato: **STATIC PASS / LIVE PLAYER BOOTSTRAP PASS — 1 RUN**

## Scopo

Verificare che l'introduzione di `BOOTSTRAP.md` riduca il lavoro pre-gate senza rompere routing, runtime, adapter o guardrail pubblici già presenti.

Questo risultato è **statico/document-level**. Non dimostra latenza reale, qualità del modello, FUN o Desire to Return in una nuova chat.

## Finding corretto durante il test

Prima del pass finale è stata trovata una regressione reale:

- `player/PLAYER.md` poteva teoricamente ripetere la nota velocità/ragionamento e il menu GIOCA SUBITO / PERSONALIZZA dopo che `BOOTSTRAP.md` li aveva già mostrati.

Correzione applicata:

- se la modalità è già stata scelta nel bootstrap, PLAYER entra direttamente nella route selezionata;
- se la nota velocità/ragionamento è già comparsa, PLAYER non la ripete.

Commit del fix: `f2ae5eb35cc0bc1d78731b8be99bf66e0de69703`.

## Risultato finale — core public static suite

| Suite | Pass | Fail |
|---|---:|---:|
| FAST BOOTSTRAP | 8/8 | 0 |
| FIRST-USE BLACK-BOX contract | 44/44 | 0 |
| V0.4 candidate | 14/14 | 0 |
| Twist / Reveal + Check Ecology | 16/16 | 0 |
| Emotional Dynamics | 19/19 | 0 |
| Multiplayer Hosted | 17/17 | 0 |
| Character Sheet Cross-System | 8/8 | 0 |
| Routing consistency | 4/4 | 0 |
| **Totale core** | **130/130** | **0** |

### Nota sul primo pass

Il primo controllo testuale grezzo aveva restituito **111/130** con 19 apparent fail. La revisione semantica dei 19 casi ha mostrato che erano formulazioni equivalenti non catturate dal matching letterale; tutti i 19 sono risultati coperti dal contratto corrente.

Esempi verificati:
- Emergent Salience: promozione ≠ plot armor / targeting automatico;
- continuity: checkpoint PLAYER senza segreti Master + resume checkpoint;
- twist interrotto da azioni legittime → onora il nuovo stato;
- stessa skill può ricorrere se ricorre davvero lo stesso approccio;
- informazione essenziale ≠ singolo check fragile;
- informazioni ovvie/conosciute ≠ tiro obbligatorio;
- player-led humour/decompression seguito con moderazione;
- dolore ≠ buff automatico;
- tragedie seriali non usate per engagement;
- shared links/projects ≠ multiplayer sincronizzato;
- niente account sharing;
- roster, attribution, commit window e ownership assente/silenzioso preservati;
- D&D 2014 conserva Race / Hit Dice / death-save state e schema nativo.

## Adapter public spot-check post-gate

### D&D 2024 / SRD 5.2.1

**18/18 PASS** sui failure bait pubblici verificabili document-level, inclusi:

- version lock 2014/2024;
- Surprise;
- Heroic Inspiration;
- grapple/shove;
- Exhaustion;
- spell rules;
- Hide;
- Multiattack / Opportunity Attack;
- stat block/source fidelity;
- overlay scope;
- level-up;
- ruling provvisorio trasparente quando la regola esatta non è verificabile;
- adventure-specific rule con override locale, non globale;
- source precedence;
- Ready;
- Stunned / Speed 0;
- Weapon Mastery feature-gated;
- routing 5.5e/2024 verso l'adapter corretto.

### Daggerheart / SRD 2.0

**13/13 PASS** sui controlli pubblici document-level:

- routing adapter corretto;
- Hope/Fear;
- Difficulty;
- spotlight;
- initiative contract non-5E;
- damage thresholds;
- Armor Slots;
- Stress;
- Experiences;
- Domains;
- countdown;
- adversaries;
- source/system lock contro contaminazione 5E.

## Fast Bootstrap gate verificato

Prima del gate:

- `BOOTSTRAP.md`: sì;
- `START-HERE.md`: no preload;
- runtime: 0;
- CORE: 0;
- PLAYER/MASTER: 0;
- adapter: 0;
- toolbox/Library/protocolli: 0.

Gate:

- PLAYER → GIOCA SUBITO / PERSONALIZZA PRIMA / PERSONALIZZA A FONDO;
- MASTER → problema/obiettivo concreto o categoria;
- INFORMAZIONI → richiesta specifica di approfondimento.

Dopo il gate resta invariata la catena completa del Divertoscopio.

## Live clean-room PLAYER — 2026-10-07

Percorso osservato: repository pubblico + `Iniziamo` → GIOCATORE → GIOCA SUBITO → `scegli tu` → prima scena D&D 5e 2014.

Tempi riportati dal tester:
- `Iniziamo` → Master / Giocatore / Informazioni: **28 s**;
- GIOCATORE → GIOCA SUBITO / PERSONALIZZA PRIMA / PERSONALIZZA A FONDO: **<3 s**;
- GIOCA SUBITO → richiesta delle informazioni minime: **27 s**;
- `scegli tu` → prima scena realmente giocabile: **48 s**.

Somma delle latenze di risposta riportate fino al PLAY: **<106 s**. In questo run il giocatore è arrivato al gioco effettivo in **meno di 2 minuti**.

Finding UX emerso dal run:
- chiarire direttamente `solo` come “giochi tu con l’AI come Master”;
- chiarire `multiplayer` come “più giocatori, una sola chat ChatGPT gestita da un host che raccoglie le azioni di tutti”;
- usare come esempi di atmosfera almeno *fantasy avventuroso*, *dark fantasy*, *comico-demenziale* e *horror investigativo*.

Esito: **LIVE PLAYER BOOTSTRAP PASS — 1 RUN** sul Time to First Play e sulla sequenza di onboarding osservata. I tempi assoluti restano osservazioni di piattaforma, non SLA.

## Cosa NON è ancora validato

Restano aperti:
1. replica del live bootstrap su più chat/account/configurazioni;
2. rispetto effettivo dello zero-preload in una quantità sufficiente di run indipendenti;
3. eventuale comportamento autonomo del modello che esplori file non richiesti;
4. latenza e friction dei percorsi MASTER e INFORMAZIONI;
5. FUN / Desire to Return / correction burden su una sessione significativa.

## Gate successivo

Ripetere il clean-room live almeno su:
1. un secondo PLAYER GIOCA SUBITO;
2. un PLAYER PERSONALIZZA PRIMA;
3. un MASTER con problema concreto;
4. se utile, una configurazione di ragionamento diversa per separare bootstrap strutturale e latenza di piattaforma.

**1 LIVE PASS ≠ VALIDAZIONE GENERALE.**
