(() => {
  "use strict";
  const REPO = "https://github.com/massimilianobanini/divertoscopio";
  const CHATGPT = "https://chatgpt.com/";
  const FLOWS = Object.freeze({
    "player-fast": {
      title: "Pronto a giocare.",
      description: "L'istruzione dice al Divertoscopio che vuoi giocare subito e gli lasci scegliere i dettagli iniziali.",
      task: "Iniziamo. Sono un giocatore. Voglio giocare subito. Scegli tutto tu."
    },
    "player-custom": {
      title: "La tua avventura, le tue preferenze.",
      description: "Il Divertoscopio partirà dal percorso Personalizza prima, senza chiederti nuovamente se sei un giocatore.",
      task: "Iniziamo. Sono un giocatore. Voglio personalizzare prima l'avventura."
    },
    "master-prepare": {
      title: "Prepara la prossima sessione.",
      description: "Il Divertoscopio sa già che sei un Master e vuoi lavorare sulla preparazione.",
      task: "Iniziamo. Sono un Master. Voglio preparare la prossima sessione."
    },
    "master-problem": {
      title: "Affronta un problema al tavolo.",
      description: "Il Divertoscopio sa già che sei un Master: ti chiederà il problema concreto, senza menu ridondanti.",
      task: "Iniziamo. Sono un Master. Voglio risolvere un problema al tavolo. Chiedimi di descriverlo in una frase."
    }
  });
  const modal = document.getElementById("prompt-modal");
  const modalHeading = document.getElementById("modal-heading");
  const modalDescription = document.getElementById("modal-description");
  const generatedPrompt = document.getElementById("generated-prompt");
  const copyStatus = document.getElementById("copy-status");
  const closeButton = document.getElementById("modal-close");
  const customTask = document.getElementById("custom-task");
  let returnFocus = null;

  function buildPrompt(task) {
    return REPO + "\n\n" + task.trim();
  }

  function openPrompt(task, title, description) {
    returnFocus = document.activeElement;
    generatedPrompt.value = buildPrompt(task);
    modalHeading.textContent = title;
    modalDescription.textContent = description;
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

  document.querySelectorAll("[data-flow]").forEach((button) => {
    button.addEventListener("click", () => {
      const flow = FLOWS[button.getAttribute("data-flow")];
      if (flow) openPrompt(flow.task, flow.title, flow.description);
    });
  });

  document.getElementById("custom-go").addEventListener("click", () => {
    const task = customTask.value.trim();
    if (!task) {
      customTask.setCustomValidity("Scrivi prima cosa vuoi fare.");
      customTask.reportValidity();
      customTask.focus();
      return;
    }
    customTask.setCustomValidity("");
    openPrompt("Iniziamo. " + task, "Hai già un obiettivo preciso.", "L'istruzione contiene quello che hai scritto, senza aggiungere una scelta di ruolo che non hai fatto.");
  });
  customTask.addEventListener("input", () => customTask.setCustomValidity(""));
  customTask.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") document.getElementById("custom-go").click();
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
