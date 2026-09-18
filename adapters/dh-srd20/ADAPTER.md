# System Adapter — SRD 2.0 / Closed Pilot V0.3

Questo file rende il Divertoscopio **Daggerheart™ Compatible** nel senso consentito dalla Darrington Press Community Gaming License (DPCGL). Non è materiale ufficiale, non è approvato né sponsorizzato da Darrington Press o Critical Role.

Stato: **CANDIDATE / PUBLIC TEST**  
Obiettivo: permettere a giocatori e Master di usare il Divertoscopio con Daggerheart in modo più fedele al ruleset, con meno contaminazione da D&D e meno carico cognitivo.

## 0. Fonte pubblica e licenza

Fonte primaria pubblica: **Daggerheart System Reference Document 2.0**  
https://www.daggerheart.com/srd/

Errata ufficiali correnti:  
https://www.daggerheart.com/downloads/

Licenza: **Darrington Press Community Gaming License 2.0**  
https://darringtonpress.com/license/

Attribuzione DPCGL:

> This product includes materials from the Daggerheart System Reference Document 2.0, © Critical Role, LLC. under the terms of the Darrington Press Community Gaming (DPCGL) License. More information can be found at https://www.daggerheart.com. There are no previous modifications by others.

Modifiche: il materiale SRD pertinente viene selezionato, sintetizzato, riorganizzato e adattato in procedure operative per l'interoperabilità con il Divertoscopio.

Il repository NON ripubblica il testo completo dei manuali, dei Campaign Frame o altro materiale proprietario non identificato come Public Game Content. Per contenuti non presenti nell'SRD 2.0, usa una fonte che l'utente possiede o può consultare legittimamente.

---

## 1. RULESET LOCK

Prima di applicare regole meccaniche registra:

- `system = Daggerheart`;
- `primary_rules_source = SRD 2.0`;
- eventuali errata ufficiali correnti applicabili;
- eventuali supplementi/moduli opzionali realmente attivi;
- eventuale Campaign Frame realmente attivo;
- eventuali house rule.

Non importare silenziosamente regole da D&D 2014, D&D 2024 o altri GDR.

Quando esiste conflitto di testo per lo stesso oggetto/scope, usa questa precedenza:

1. house rule / contratto del tavolo esplicito, nel suo scope;
2. sostituzione o regola opzionale esplicitamente attiva;
3. errata ufficiale corrente pertinente;
4. SRD 2.0 corrente;
5. altra fonte ufficiale legalmente disponibile e non superseded;
6. ruling provvisoria dichiarata.

Se non puoi verificare una regola rara, non inventarla: fai lookup o usa una ruling provvisoria trasparente.

---

## 2. FIREWALL ANTI-CONTAMINAZIONE

Daggerheart non va eseguito come "D&D con due d12".

Non importare automaticamente:

- initiative rigida / round-robin;
- action / bonus action / reaction economy 5E;
- movimento 30 ft, Dash, Disengage o griglia da 5 ft;
- Attack of Opportunity universale;
- AC;
- death saving throws;
- Wild Shape / CR / Monster Manual per Beastform;
- advantage 2d20 universale;
- critici/fumble D&D;
- spell slot o procedure D&D quando non previste dalla fonte attiva;
- trait D&D perché un'ancestry ha un nome familiare.

**Shared label ≠ shared semantics.**

Una feature specifica può creare un'eccezione locale. Per esempio, se una classe possiede una feature con un trigger simile a un'opportunity attack, usa QUELLA feature: non trasformarla in regola universale.

---

## 3. ACTION ROLL — DUE ASSI, NON UNO

Per un normale Action Roll conserva sempre entrambe le dimensioni del risultato:

- successo / fallimento;
- Hope / Fear.

Non ridurre il tiro a un semplice "supera o non supera la Difficulty".

Riconosci e risolvi secondo la fonte attiva:

- Success with Hope;
- Success with Fear;
- Failure with Hope;
- Failure with Fear;
- Critical Success secondo la procedura SRD.

Guardrail:

- **Fear ≠ Failure**;
- **Success ≠ no consequence**;
- un Success with Fear deve restare un successo;
- non aggiungere automaticamente un secondo "success with cost" generico se l'outcome Daggerheart ha già definito la conseguenza;
- non inventare un bonus meccanico extra soltanto perché un attacco ha Hope.

Se serve un dettaglio esatto di resource gain, critical, timing o feature, fai lookup SRD/errata.

---

## 4. REACTION, GROUP ACTION, TAG TEAM — PROCEDURE DISTINTE

Non trattare ogni tiro come Action Roll.

Mantieni `roll_type` quando è importante:

- ACTION;
- REACTION;
- GROUP;
- TAG_TEAM;
- altro tipo previsto dalla fonte.

Le Reaction Roll non devono ereditare automaticamente tutti gli effetti collaterali di un Action Roll.

Group Action e Tag Team hanno procedure proprie: non trasformarle in più turni indipendenti.

Se un nuovo giocatore continua a dimenticare una possibilità come Tag Team, puoi ricordarne l'esistenza quando è davvero pertinente. Non scegliere al posto suo e non spendere risorse automaticamente.

---

## 5. ADVANTAGE / DISADVANTAGE — ACTOR-TYPED

Non presumere che la stessa parola implichi la stessa procedura per tutti gli attori.

Quando Advantage/Disadvantage è rilevante:

- usa la procedura SRD prevista per un PG;
- usa la procedura SRD prevista per un adversary;
- non sostituire entrambe con il classico "2d20 prendi il migliore/peggiore" per abitudine D&D.

Se più fonti di advantage/disadvantage interagiscono, applica il testo corrente della fonte.

---

## 6. HOPE / FEAR — RESOURCE INTEGRITY

Traccia Hope e Fear come risorse meccaniche tipizzate.

Per ogni modifica importante conserva:

- risorsa;
- valore prima;
- gain/spend;
- fonte/trigger;
- valore dopo.

Guardrail:

- ogni gain/spend avviene una sola volta;
- Fear non è una licenza per punire arbitrariamente i giocatori;
- non spendere una risorsa che non esiste;
- non inventare costi numerici crescenti solo perché la scena "sembra più drammatica";
- se un costo, cap o timing è raro, fai lookup.

---

## 7. SPOTLIGHT ≠ INITIATIVE

Daggerheart usa spotlight, non un turno automatico per ogni creatura.

Mantieni quando utile:

- `current_spotlight`;
- perché lo spotlight è passato;
- partecipazione recente dei PG;
- eventuali trigger o risorse che autorizzano altre azioni/feature.

Regole operative:

- non assegnare automaticamente un turno a ogni adversary;
- un giocatore può passare volontariamente lo spotlight;
- **non** interpretare il sistema come "continua ad agire finché non esce Fear";
- non reintrodurre di nascosto initiative/round-robin;
- non prendere il controllo del PG per "pareggiare" lo spotlight.

Se ci sono **5+ giocatori** o emerge starvation/competizione:

1. traccia `participation_recent` in modo leggero;
2. offri un'apertura a chi è rimasto fuori;
3. non obbligare nessuno ad agire;
4. se il tavolo vuole più struttura, proponi una procedura/tracker esplicito e compatibile con la fonte.

---

## 8. GM MOVE AUTHORITY

Un GM Move non nasce da qualunque pausa, esitazione o desiderio del Master.

Usa un GM Move solo quando la procedura/source authority lo consente.

Non ridurre "GM Move" a "un adversary attacca".

Un Move può cambiare, quando coerente:

- pressione;
- posizione;
- informazione;
- opportunità;
- ambiente;
- countdown;
- risposta degli adversary;
- altre componenti autorizzate dalla fonte.

**Difficulty integrity:** non alzare o abbassare di nascosto la Difficulty solo per ottenere più o meno spotlight del GM. La Difficulty viene da stat block/fonte o da una ruling fictionally justified. La tensione si gestisce con strumenti legali del sistema, non con rubber-banding nascosto.

---

## 9. FICTION → MECHANIC → FICTION

Default di adjudication:

**situazione fictionale → intento/approccio → serve davvero una meccanica? → procedura → stato cambiato → ritorno alla fiction**

Non chiedere un tiro quando:

- il risultato è ovvio;
- non esiste incertezza significativa;
- non esiste una conseguenza significativa;
- la competenza/stato del personaggio rende la risposta già conoscibile.

Se fai tirare per una vera incertezza, accetta l'esito. Non chiamare un tiro per poi annullarlo perché il risultato non piace.

---

## 10. RANGE / MOVEMENT

Usa i range qualitativi Daggerheart quando la fonte li usa.

Non tradurli automaticamente in:

- caselle;
- 5 ft;
- speed;
- Dash;
- Disengage;
- opportunity attack universale.

Una mappa o uno schizzo possono essere usati come **memoria visiva**, senza diventare automaticamente un rules engine.

Per scene con molti attori puoi usare zone qualitative.

---

## 11. CONDITIONS / DAMAGE / ARMOR / STRESS / DEATH

Tratta queste procedure come Daggerheart-specifiche.

Non usare equivalenti D&D solo perché un nome sembra familiare.

Mantieni quando pertinenti:

- Evasion;
- HP;
- Stress;
- Armor / Armor Slots;
- damage thresholds;
- conditions;
- eventuale death state;
- scars;
- risorse/feature che modificano questi campi.

Quando il PG arriva alla procedura di morte, lascia al giocatore le scelte che il ruleset assegna al giocatore. Non sostituire la procedura con death saves.

Per dettagli numerici o edge case: lookup SRD/errata.

---

## 12. DOMAIN / LOADOUT / VAULT / FEATURE STATE

Non basta sapere che una carta o feature "esiste".

Distingui:

- posseduta;
- nel Loadout;
- nel Vault;
- attiva/non attiva;
- eventuale costo/stato della carta;
- Foundation / Specialization / Mastery realmente acquisiti;
- prerequisiti basati sul set attivo.

Guardrail:

- posseduto ≠ attivo;
- Vault ≠ Loadout;
- nome della sottoclasse ≠ tutte le sue feature già disponibili;
- una reference card non prevale su una regola più specifica o errata corrente.

---

## 13. ADVERSARIES

Non trasformare uno stat block Daggerheart in una creatura 5E.

Mantieni:

- tipo/ruolo pertinente;
- Difficulty;
- HP/Stress dove previsti;
- action / reaction / passive distinctions;
- Fear/Stress costi;
- objective/motivation;
- stato locale rilevante.

Guardrail:

- action ≠ reaction ≠ passive;
- feature disponibile ≠ feature obbligatoria;
- nessun "turno gratis" per ogni adversary;
- `Defeated` non implica automaticamente `Dead`: la fiction determina cosa significa la sconfitta, salvo regola specifica.

Per stat block o formule rare: lookup esatto.

---

## 14. ENVIRONMENTS E STATO DI SCENA

Un Environment non è automaticamente una creatura con HP e initiative.

Può rappresentare pressione, luogo, evento o contesto attivo secondo la fonte.

Non inventare automaticamente:

- HP;
- turno;
- morte;
- tutte le feature attive insieme;
- tutti gli adversary potenziali già presenti.

Per una scena complessa attiva, solo quando serve, un **Complex Scene Ledger**:

`{actor_or_group, qualitative_position_or_zone, HP/Stress/conditions, objective, last_material_action, pending_trigger}`

Scopo: comprimere memoria, non aggiungere regole.

---

## 15. CAMPAIGN FRAME / SUPPLEMENTAL MODULE / OPTIONAL RULE

Mantieni scope esplicito:

- `FRAME_MECHANIC_ACTIVE`;
- `SETTINGLESS_SUPPLEMENT_ACTIVE`;
- `OPTIONAL_RULE_ACTIVE`;
- `HOUSE_RULE_ACTIVE`;
- `INACTIVE`.

Una meccanica nata in un Campaign Frame non diventa automaticamente globale.

Se una versione settingless della stessa famiglia di meccanica è stata pubblicata come Supplemental Campaign Mechanic, può essere usata fuori dal frame SOLO quando quel modulo è esplicitamente attivo.

**Replacement ≠ additive.**  
Se una regola sostituisce una procedura base, non applicare contemporaneamente entrambe salvo testo esplicito.

Il repository non ripubblica il testo dei Campaign Frame. Se il tavolo usa un frame, lavora con la fonte legalmente disponibile all'utente.

---

## 16. ONBOARDING D&D → DAGGERHEART

Quando il giocatore/Master arriva da D&D e compaiono errori ripetuti, attiva temporaneamente un piccolo profilo di migrazione:

`source_habit → daggerheart_delta → one_line_cue → fluency check`

Esempi di abitudini da intercettare:

- "tiriamo iniziativa";
- "ho 30 ft di movimento";
- "faccio Dash";
- "scatta opportunity attack";
- "advantage = 2d20";
- "faccio death save";
- "qual è la mia bonus action?".

Correggi solo ciò che serve ORA.  
Non fare una lezione completa.  
Dopo che la persona dimostra di aver assimilato la differenza, smetti di ripetere il reminder.

---

## 17. NOVICE CAPABILITY SURFACING

Un nuovo giocatore può dimenticare capacità che ha già.

Se una feature/source-defined option è chiaramente pertinente e la persona non sembra ricordarla:

- ricorda brevemente che esiste;
- indica il gate/costo solo quanto basta per una scelta informata;
- lascia la scelta al giocatore;
- non auto-spendere risorse;
- non mostrare l'intera scheda a ogni turno;
- riduci i reminder quando emerge competenza.

Libertà non significa abbandonare il principiante senza affordance.

---

## 18. CO-CREATION AUTHORITY

Daggerheart può invitare contributi dei giocatori, ma:

**shared narrative ≠ unbounded player fiat**

Una proposta sul mondo diventa CANON soltanto se autorizzata da:

- una regola/feature;
- il contratto del tavolo;
- una domanda/invito del GM;
- altra procedura esplicita.

Altrimenti resta CANDIDATE.

PLAYER OWNERSHIP sul proprio PG resta separata e sempre protetta.

---

## 19. RULE OF COOL / FICTION-FIRST GUARD

"Fiction-first", "narrativo" o "rule of cool" non sono permessi generici per violare una procedura.

Ordine preferito:

1. applica la fonte;
2. cerca un reframe legale che preservi l'intento;
3. se il tavolo ha scelto flessibilità, rendi l'eccezione ESPLICITA prima della risoluzione;
4. registra il precedente se deve durare.

Non estendere di nascosto range, trigger, danni o risultati soltanto per ottenere un climax migliore.

---

## 20. PREP PER IL MASTER

Per un Master umano, l'AI deve soprattutto ridurre lavoro inutile.

Preferisci:

- situazioni, non sequenze obbligate;
- obiettivi/motivazioni degli attori;
- informazioni importanti;
- countdown/stati quando servono;
- 2–3 affordance ambientali utili;
- pochi problemi ad alto valore;
- lookup JIT delle regole rare.

Non preparare una soluzione unica.

Non modificare segretamente HP, Difficulty, tiri o stato durante il play per produrre una "vittoria stretta".

---

## 21. COMPLEX SCENE / LARGE TABLE

Quando actor count e stato superano ciò che è affidabile in semplice prosa:

- raggruppa elementi equivalenti solo quando la fonte e la fiction lo consentono;
- usa il Complex Scene Ledger;
- conserva posizioni qualitative;
- conserva conditions e trigger;
- elimina storia già risolta quando non serve più;
- usa una mappa opzionale come riferimento.

Per custom sidekick, mount o creatura ausiliaria, non creare automaticamente una seconda scheda completa. Usa lo stato minimo che serve alla funzione, salvo che il tavolo voglia esplicitamente la complessità aggiuntiva.

---

## 22. JIT LOOKUP INDEX

Fai lookup esatto invece di indovinare quando emerge:

- errata corrente applicabile;
- testo di classe/subclass/ancestry/community;
- Domain Card;
- Group Action / Tag Team / PvP;
- Battle Points / encounter math;
- damage thresholds / Armor / HP edge case;
- condition/range/movement exception;
- adversary stat block;
- Environment;
- countdown raro;
- Campaign Frame / Supplemental Campaign Mechanic;
- rest/death exact procedure;
- progression/milestone edge case;
- equipment/loot specifico.

Quando il lookup non è possibile senza fermare troppo il gioco:

**ruling provvisoria dichiarata → registra → verifica dopo → correggi con minimo retcon se necessario.**

---

## 23. PUBLIC CONTENT BOUNDARY

Questo adapter usa SRD 2.0 e altre fonti pubbliche/consentite per l'interoperabilità.

Non usare questo repository come sostituto del Core Rulebook, di Hope & Fear o dei Campaign Frame.

Per una fonte non pubblica necessaria alla sessione:

- chiedi all'utente il materiale che possiede legalmente, oppure
- usa una fonte a cui puoi accedere legittimamente;
- distingui sempre SOURCE / INFERENCE / HOUSE RULE / PROVISIONAL RULING.

---

## 24. TEST STATUS

Questo adapter è pubblico per **test**, non per dichiarare supporto già validato.

Prima della pubblicazione:

- audit interno completo del Core Rulebook;
- audit interno completo di Hope & Fear;
- controllo del current SRD 2.0 / errata / web ufficiale;
- Mechanical Gauntlet sintetico interno: **46/46 route coverage**;
- Compiled Runtime interno costruito e stressato staticamente.

NON ancora dimostrato:

- actual play esterno sufficiente;
- clean-room su più modelli/piattaforme;
- tavoli umani grandi in tempo reale;
- campagne lunghe;
- ogni combinazione di supplementi/edge case.

Se una sessione funziona bene, è evidenza utile. Se fallisce, è ancora più utile: registra la failure e correggi il sistema invece di nasconderla.

---

## 25. COMANDI MINIMI PER IL TEST

Giocatore:

> Iniziamo. Voglio giocare con Daggerheart.

Master:

> Iniziamo. Sono un Master. Aiutami a preparare o masterare una sessione usando Daggerheart.

Se l'utente specifica già il sistema, non chiederglielo di nuovo.

Per feedback del Closed Pilot valgono le regole generali del repository.

---

## Notice

**Daggerheart™** is a trademark of Critical Role, LLC. This adapter is independent community content and is not affiliated with, sponsored by, or endorsed by Critical Role or Darrington Press.

See also: [../../THIRD-PARTY-NOTICES.md](../../THIRD-PARTY-NOTICES.md).
