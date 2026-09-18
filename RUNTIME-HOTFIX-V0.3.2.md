# Divertoscopio — Runtime Hotfix Router V0.3

Questo file mantiene compatibilità con `START-HERE.md`, che nel Closed Pilot V0.3 punta ancora a `RUNTIME-HOTFIX-V0.3.2.md`.

Prima del normale PLAY, leggi **in quest'ordine**:

1. `RUNTIME-HOTFIX-V0.3.2-BASE.md` — baseline/hardening V0.3.2 già attivo;
2. `RUNTIME-HOTFIX-V0.3.3.md` — Ending Mode / Foreshadowing Governor e OOC / Table-Talk Pause Contract;
3. `RUNTIME-HOTFIX-V0.3.4.md` — causal attribution / false choice, active opposition, fail-forward scope e system-dependent prep floor.

Non saltare il file BASE. In caso di conflitto, ogni delta successivo prevale soltanto sui punti che tratta esplicitamente: V0.3.4 > V0.3.3 > BASE nello scope pertinente.

## FAIL-SOFT SU ACCESSO PARZIALE

Se riesci a leggere `START-HERE.md` o questo router ma **non riesci a caricare uno dei file runtime richiesti**, non fingere di averlo letto e non bloccare il gioco.

- Se manca `RUNTIME-HOTFIX-V0.3.2-BASE.md`, usa il **FALLBACK CORE MINIMO** già presente in `START-HERE.md` come runtime minimo e continua.
- Se manca `RUNTIME-HOTFIX-V0.3.3.md`, applica le regole fallback **ENDING MODE / FORESHADOWING** e **OOC / TABLE-TALK PAUSE** presenti in `START-HERE.md` e continua.
- Se manca `RUNTIME-HOTFIX-V0.3.4.md`, applica i fallback **CAUSAL ATTRIBUTION**, **ACTIVE OPPOSITION**, **FAIL-FORWARD SCOPE** e **SYSTEM-DEPENDENT PREP FLOOR** presenti in `START-HERE.md` e continua.
- Se i file sono leggibili, usa i file completi: il fallback non li sostituisce.
- Dichiara il limite all'utente solo se cambia materialmente accuratezza, regole o continuità; non trasformare un problema di accesso ai file in nuovo onboarding.

Dopo i file disponibili o il relativo fallback, continua con il normale ordine di consultazione previsto da `START-HERE.md`.
## SYSTEM ADAPTER ROUTING

Dopo aver caricato i file runtime disponibili e prima di applicare regole specifiche:

- se il sistema attivo è **D&D 5e 2014 / SRD 5.1**, usa `adapters/5e-srd51/ADAPTER.md`;
- se il sistema attivo è **D&D 2024 / regole revisionate 2024 / 5.5e / SRD 5.2.1**, usa `adapters/5e-srd521/ADAPTER.md`;
- se il sistema attivo è **Daggerheart**, usa `adapters/dh-srd20/ADAPTER.md`;
- se non esiste un adapter pubblico per sistema/versione, usa il percorso Unknown System Discovery di `START-HERE.md` e non importare un adapter “simile”.

Dopo che `active_system` è noto, consulta `SYSTEM-SUPPORT.md`. Nel primo messaggio successivo alla scelta del sistema mostra una sola volta il box canonico di supporto. Se il sistema non compare nella matrice, usa **non valutata** e non inventare percentuali. Non ripetere il box a ogni turno.

Se l’utente ha già indicato il sistema, non chiederglielo di nuovo. Un adapter di sistema è caricato on-demand: non caricare contemporaneamente adapter incompatibili.
