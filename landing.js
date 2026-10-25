(() => {
  "use strict";
  const REPO = "https://github.com/massimilianobanini/divertoscopio";
  const CHATGPT = "https://chatgpt.com/";
  const START_PROMPT = REPO + "\n\nIniziamo";
  // La precompilazione via ?q= non è un contratto pubblico ChatGPT: NON usarla.
  // Il solo contenuto copiato è il prompt canonico; nessun URL di Instagram o UTM.
  const modal = document.getElementById("prompt-modal");
  const generatedPrompt = document.getElementById("generated-prompt");
  const copyStatus = document.getElementById("copy-status");
  const closeButton = document.getElementById("modal-close");
  let returnFocus = null;

  function openPrompt() {
    returnFocus = document.activeElement;
    generatedPrompt.value = START_PROMPT;
    copyStatus.textContent = "Premi «Copia e apri in ChatGPT»: il messaggio verrà copiato prima di aprire ChatGPT. Poi incollalo e premi Invia.";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeButton.focus();
  }

  function closePrompt() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (returnFocus && typeof returnFocus.focus === "function") returnFocus.focus();
  }

  async function copyPrompt() {
    const value = generatedPrompt.value;
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      try {
        await navigator.clipboard.writeText(value);
        return true;
      } catch (_) { /* Prova il fallback manuale del browser. */ }
    }
    generatedPrompt.focus();
    generatedPrompt.select();
    try {
      if (document.execCommand("copy")) return true;
    } catch (_) { /* Copia manuale ancora possibile dal campo selezionato. */ }
    return false;
  }

  // Ogni CTA primaria avvia lo stesso prompt canonico, senza pre-selezioni.
  document.querySelectorAll("[data-start-divertoscopio]").forEach((button) => {
    button.addEventListener("click", openPrompt);
  });

  closeButton.addEventListener("click", closePrompt);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closePrompt();
  });
  document.addEventListener("keydown", (event) => {
    if (modal.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closePrompt();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(modal.querySelectorAll("button, a[href], textarea")).filter((element) => !element.disabled && element.getClientRects().length);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  const launchButton = document.getElementById("copy-and-open");
  let launchInProgress = false;
  launchButton.addEventListener("click", async () => {
    if (launchInProgress) return;
    launchInProgress = true;
    launchButton.disabled = true;

    // Avvia la copia durante il gesto dell'utente, PRIMA di aprire una nuova scheda.
    // Pre-apri una scheda vuota senza attendere la Promise: i browser bloccano
    // spesso i popup aperti dopo un await. La landing resta nella scheda originale.
    const copyAttempt = copyPrompt();
    let chatTab = null;
    try {
      chatTab = window.open("about:blank", "_blank");
      if (chatTab) chatTab.opener = null;
    } catch (_) { /* Popup non consentito: non usare mai la scheda corrente. */ }

    try {
      const copied = await copyAttempt;
      if (!copied) {
        if (chatTab && !chatTab.closed) chatTab.close();
        copyStatus.textContent = "La copia non è riuscita. Non è stata aperta alcuna chat: seleziona e copia manualmente l’istruzione visualizzata qui sopra, oppure consenti gli appunti e riprova.";
        return;
      }
      if (!chatTab || chatTab.closed) {
        copyStatus.textContent = "Istruzione copiata, ma il browser ha bloccato la nuova scheda. Consenti le finestre popup per questo sito e premi nuovamente «Copia e apri in ChatGPT». La landing è ancora aperta.";
        return;
      }
      try {
        chatTab.location.replace(CHATGPT);
        copyStatus.textContent = "Istruzione copiata. ChatGPT è stato aperto in una nuova scheda: incolla il messaggio e premi Invia. Questa pagina rimane disponibile.";
      } catch (_) {
        try { chatTab.close(); } catch (_) { /* Il browser potrebbe impedire la chiusura. */ }
        copyStatus.textContent = "Istruzione copiata, ma non sono riuscito ad aprire ChatGPT nella nuova scheda. Controlla le autorizzazioni popup e riprova.";
      }
    } finally {
      launchInProgress = false;
      launchButton.disabled = false;
    }
  });

  // I documenti canonici vivono nel repository, non nel sito statico.
  document.querySelectorAll("[data-github-file]").forEach((link) => {
    const file = link.getAttribute("data-github-file");
    if (file && /^[A-Za-z0-9._/-]+$/.test(file)) {
      link.href = REPO + "/blob/main/" + file;
    }
  });
})();
