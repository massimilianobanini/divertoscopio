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
    copyStatus.textContent = "Premi «Copia e apri ChatGPT»: il messaggio verrà copiato prima di aprire ChatGPT. Poi incollalo e premi Invia.";
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

  document.getElementById("copy-only").addEventListener("click", async () => {
    const copied = await copyPrompt();
    copyStatus.textContent = copied ? "Istruzione copiata. Apri ChatGPT e incollala nella chat." : "La copia automatica non è disponibile: seleziona e copia l'istruzione qui sopra.";
  });

  document.getElementById("copy-and-open").addEventListener("click", async () => {
    // Non navigare MAI se la copia non è confermata: potrebbe rimanere negli
    // appunti un vecchio redirect l.instagram.com con tracking e fbclid.
    // La stessa scheda evita i popup bloccati dei browser interni.
    const copied = await copyPrompt();
    if (!copied) {
      copyStatus.textContent = "La copia automatica non è riuscita. ChatGPT NON è stato aperto: seleziona e copia il testo pulito qui sopra, poi usa «Apri ChatGPT manualmente».";
      return;
    }
    copyStatus.textContent = "Istruzione copiata. In ChatGPT incolla il messaggio e premi Invia.";
    window.location.assign(CHATGPT);
  });

  // I documenti canonici vivono nel repository, non nel sito statico.
  document.querySelectorAll("[data-github-file]").forEach((link) => {
    const file = link.getAttribute("data-github-file");
    if (file && /^[A-Za-z0-9._/-]+$/.test(file)) {
      link.href = REPO + "/blob/main/" + file;
    }
  });
})();
