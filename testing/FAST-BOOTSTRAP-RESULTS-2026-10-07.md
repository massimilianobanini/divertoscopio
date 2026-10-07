# Fast Bootstrap + Public Runtime — Static Stress Result

Data: **2026-10-07**  
Stato: **STATIC PASS / LIVE CLEAN-ROOM PENDING**

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

## Cosa NON è ancora validato

Restano **UNKNOWN finché non vengono provati in una chat nuova**:

1. latenza reale T0 → prima schermata;
2. latenza prima → seconda schermata;
3. rispetto effettivo dello zero-preload da parte del modello in clean-room;
4. latenza dal gate alla prima risposta sostanziale;
5. eventuale comportamento autonomo del modello che esplori file non richiesti;
6. FUN / Desire to Return / correction burden reali.

## Gate successivo

Eseguire un clean-room live:

1. nuova chat;
2. repository GitHub + `Iniziamo`;
3. modalità di ragionamento alta se si vuole replicare il failure originale;
4. misurare T0 → Master/Giocatore/Informazioni;
5. scegliere GIOCATORE e misurare → GIOCA SUBITO / PERSONALIZZA;
6. scegliere GIOCA SUBITO e misurare separatamente il primo output sostanziale;
7. annotare eventuali domande duplicate o caricamenti percepibili prima del gate.

**STATIC PASS ≠ LIVE PASS.**
