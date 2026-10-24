(() => {
  "use strict";
  const REPO = "https://github.com/massimilianobanini/divertoscopio";
  const CHATGPT = "https://chatgpt.com/";
  const START_PROMPT = REPO + "\n\nIniziamo";
  const modal = document.getElementById("prompt-modal");
  const generatedPrompt = document.getElementById("generated-prompt");
  const copyStatus = document.getElementById("copy-status");
  const closeButton = document.getElementById("modal-close");
  let returnFocus = null;

  function openPrompt() {
    returnFocus = document.activeElement;
    generatedPrompt.value = START_PROMPT;
    copyStatus.textContent = "L'istruzione non viene inviata dal sito. Dovrai incollarla tu in ChatGPT.";
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
    // Apri prima del risultato asincrono della Clipboard API per preservare il gesto dell'utente.
    window.open(CHATGPT, "_blank", "noopener,noreferrer");
    copyPrompt().then((copied) => {
      copyStatus.textContent = copied ?
        "Istruzione copiata. Nella scheda ChatGPT incolla e invia. Se non si è aperta, usa il collegamento qui sotto." :
        "ChatGPT è stato richiesto al browser. Seleziona e copia manualmente l'istruzione qui sopra, poi incollala. Se la nuova scheda è bloccata, usa il collegamento qui sotto.";
    });
  });

  // I documenti canonici vivono nel repository, non nel sito statico.
  document.querySelectorAll("[data-github-file]").forEach((link) => {
    const file = link.getAttribute("data-github-file");
    if (file && /^[A-Za-z0-9._/-]+$/.test(file)) {
      link.href = REPO + "/blob/main/" + file;
    }
  });
})();
