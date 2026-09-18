# GEMINI START — avvio supportato

Gemini gestisce i repository GitHub in modo diverso da molte altre AI.

## Avvio corretto su Gemini

Nella **web app Gemini su computer**:

1. apri una nuova chat;
2. premi **+ / Aggiungi file**;
3. scegli **Altri caricamenti → Importa codice**;
4. incolla:
   `https://github.com/massimilianobanini/divertoscopio`
5. premi **Importa**;
6. quando il repository è allegato alla chat, scrivi semplicemente:

> **Iniziamo.**

Da quel momento usa `START-HERE.md` come router, quindi applica il runtime pubblico e gli adapter pertinenti.

## Importante

**Incollare soltanto l'URL GitHub nel testo del prompt non equivale a importare il repository su Gemini.**

Se il repository non è stato importato come codice, Gemini non deve concludere che sia vuoto o privo di file. Deve distinguere:

- `REPOSITORY NOT IMPORTED / NOT ACCESSIBLE`
- da
- `REPOSITORY EMPTY`.

Se non riesci a leggere il repository, dillo esplicitamente e indica il percorso **Aggiungi file → Altri caricamenti → Importa codice**. Non inventare il contenuto del repository e non assegnare un alto grado di certezza alla sua presunta assenza.

## Mobile

L'importazione diretta di repository GitHub è attualmente una funzione della **web app Gemini su computer**. Dopo aver importato il repository in quella chat, la conversazione può poi essere continuata da altri dispositivi quando disponibile.

## Fallback manuale

Se l'importazione GitHub non è disponibile, apri `START-HERE.md` dal repository, copiane il contenuto nella chat e scrivi **Iniziamo**.
