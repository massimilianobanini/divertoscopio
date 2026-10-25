(() => {
  "use strict";
  const REPO = "https://github.com/massimilianobanini/divertoscopio";
  const CHATGPT = "https://chatgpt.com/";
  const START_PROMPT = REPO + "\n\nIniziamo";
  // Precompilazione: ChatGPT può richiedere che l’utente prema Invia.
  // Se il parametro URL non è supportato dal browser, resta il pulsante «Copia soltanto».
  const CHATGPT_PREFILL = CHATGPT + "?q=" + encodeURIComponent(START_PROMPT);
  const modal = document.getElementById("prompt-modal");
  const generatedPrompt = document.getElementById("generated-prompt");
  const copyStatus = document.getElementById("copy-status");
  const closeButton = document.getElementById("modal-close");
  let returnFocus = null;

  function openPrompt() {
    returnFocus = document.activeElement;
    generatedPrompt.value = START_PROMPT;
    copyStatus.textContent = "Apri ChatGPT con l’istruzione già scritta e premi Invia. Se il testo non compare, usa «Copia soltanto» e incollalo manualmente.";
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

  document.getElementById("copy-and-open").addEventListener("click", () => {
    // Non dipendere dagli appunti: le WebView di Instagram possono negare la copia
    // e lasciare negli appunti un vecchio URL, come osservato nel test Samsung.
    // Usa una navigazione diretta per evitare anche i popup bloccati.
    // La query precompila il messaggio quando supportata; NON lo invia da sola.
    window.location.assign(CHATGPT_PREFILL);
  });

  // I documenti canonici vivono nel repository, non nel sito statico.
  document.querySelectorAll("[data-github-file]").forEach((link) => {
    const file = link.getAttribute("data-github-file");
    if (file && /^[A-Za-z0-9._/-]+$/.test(file)) {
      link.href = REPO + "/blob/main/" + file;
    }
  });
})();
