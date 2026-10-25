// V0.1 landing: controlli statici, senza dipendenze o servizi esterni.
// Non sostituiscono un test browser/actual play con utenti indipendenti.
import fs from "node:fs";
import vm from "node:vm";
import {execFileSync} from "node:child_process";
import assert from "node:assert/strict";

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("landing.css", "utf8");
const js = fs.readFileSync("landing.js", "utf8");
const png = fs.readFileSync("assets/visual-hammer/DIVERTOSCOPIO-visual-hammer-lime.png");
const tests = [];
function check(name, run) {
  try { run(); tests.push([name, true]); console.log("PASS", name); }
  catch(e) { tests.push([name, false]); console.error("FAIL", name, e.message); }
}

check("Headline: target, brand positioning, battlecry", () => {
  assert.match(html, /PER GIOCATORI E MASTER ITALIANI/);
  assert.match(html, /<h1[^>]*>Il Divertoscopio è il primo strumento italiano per il GDR semplice, con l’/);
  assert.match(html, /Ultra-Garanzia del Prezzo Negativo/);
  assert.match(html, /Lascia al caso i dadi, non il divertimento/);
  assert.match(html, /meta name="description" content="Il Divertoscopio è il primo strumento italiano per il GDR semplice/);
  assert.match(html, /og:description" content="Il Divertoscopio è il primo strumento italiano per il GDR semplice/);
  const official = "Il Divertoscopio è il primo strumento italiano per il GDR semplice, con l’Ultra-Garanzia del Prezzo Negativo.";
  const hero = html.match(/<h1 id="hero-title">([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]*>/g, "");
  assert.equal(hero, official, "La headline deve usare la formula ufficiale esatta");
  assert.ok(html.includes('<meta name="description" content="' + official));
  assert.ok(html.includes('<meta property="og:description" content="' + official));
});
check("Visual Hammer originale, non sostituito da illustrazioni", () => {
  assert.match(html, /<div class="hero-art"[^>]*>[\s\S]*?<img src="assets\/visual-hammer\/DIVERTOSCOPIO-visual-hammer-lime.png"/);
  assert.equal(png.subarray(0,8).toString("hex"), "89504e470d0a1a0a");
});
check("Narrativa direct-response completa", () => {
  for(const id of ["perche","come-funziona","inizia","garanzia","faq"]) assert.ok(html.includes('id="'+id+'"'),id);
  assert.match(html, /Il problema/i);assert.match(html,/La risposta/i);
  assert.match(html, /PER GIOCATORI/);assert.match(html, /GIOCATORI E MASTER/);
  assert.match(html, /TRASPARENZA/);
});
check("Garanzia: condizioni e link corretti", () => {
  assert.match(html, /maggiorenne/); assert.match(html, /100 richieste qualificate/);
  assert.match(html, /verificata manualmente/); assert.match(html, /14 giorni/);
  assert.match(html, /1FAIpQLSc1JT6yfYhYokvZ2b1DKNeqKExl9PLGa2aMSMJGS_-XCs7ibg/);
  for(const path of ["ULTRA-GARANZIA.md","ULTRA-GARANZIA-REGISTRO.md","PRIVACY.md","KNOWN-LIMITATIONS.md"]) assert.ok(html.includes("https://github.com/massimilianobanini/divertoscopio/blob/main/"+path));
});
check("Supporto reale: ChatGPT soltanto", () => {
  assert.match(html, /supportato pubblicamente su ChatGPT/);
  assert.match(html, /Gemini e Claude non sono dichiarati supportati/);
  assert.doesNotMatch(html, /Copia e apri Gemini/);
});
check("JavaScript sintatticamente valido", () => { new vm.Script(js, {filename:"landing.js"}); });
check("Landing: avvio unico senza salti dei menu", () => {
  assert.match(html, /id="start-divertoscopio"/);
  const intro = html.slice(html.indexOf('<div class="start-panel">'), html.indexOf('id="start-divertoscopio"'));
  assert.match(intro, /Pronto a iniziare\?/);
  assert.match(intro, /scegli <strong>«Gioca subito»<\/strong>/);
  assert.match(intro, /poche impostazioni iniziali/);
  assert.match(intro, /prima scelta giocabile in circa 2 minuti/);
  assert.match(intro, /Tempo indicativo, da verificare su smartphone/);
  assert.ok(intro.indexOf("Pronto a iniziare?") < intro.indexOf("Link GitHub"));
  assert.match(css, /\.start-speed-note\{/);
  assert.match(html, /Un solo link\. Poi scegli tu/);
  assert.match(html, /Sono un Master/);
  assert.match(html, /Sono un Giocatore/);
  assert.match(html, /Personalizza prima/);
  assert.match(html, /Nessuna impostazione o storia viene scelta da questa pagina/);
  assert.match(js, /const START_PROMPT = REPO \+ "\\n\\nIniziamo"/);
  assert.match(js, /querySelectorAll\("\[data-start-divertoscopio\]"\)/);
  assert.equal((html.match(/data-start-divertoscopio/g)||[]).length,4);
  assert.doesNotMatch(html, /data-flow=|id="custom-task"|id="custom-go"/);
  assert.doesNotMatch(js, /Scegli tutto tu|Iniziamo\. Sono un giocatore|Iniziamo\. Sono un Master|FLOWS|customTask/);
  const modalIntro = html.slice(html.indexOf('id="modal-heading"'),html.indexOf('<label for="generated-prompt">'));
  assert.match(modalIntro, /Se scegli <strong>«Gioca subito»<\/strong>/);
  assert.match(modalIntro, /poche impostazioni iniziali/);
  assert.match(modalIntro, /obiettivo è arrivare alla prima scelta giocabile in circa 2 minuti/);
  assert.match(modalIntro, /senza scelte preimpostate dalla pagina/);
  assert.match(modalIntro, /Meno attrito, meno preparazione, più gioco\./);
  assert.ok(modalIntro.indexOf("Meno attrito") < html.indexOf('<label for="generated-prompt">'));
  assert.match(css, /\.modal p\.modal-tagline\{/);
  assert.match(html, /Non serve per i primi menu di scelta/);
  assert.match(html, /data-github-file="BOOTSTRAP\.md"/);
});
check("ChatGPT apre soltanto dopo copia confermata, con fallback", () => {
  assert.match(js, /const START_PROMPT = REPO \+ "\\n\\nIniziamo"/);
  assert.doesNotMatch(js, /const CHATGPT_PREFILL|encodeURIComponent\(START_PROMPT\)|location\.assign\(CHATGPT_PREFILL\)/);
  assert.match(js, /const copyAttempt = copyPrompt\(\)/);
  assert.match(js, /const copied = await copyAttempt/);
  assert.match(js, /if \(!copied\) \{/);
  assert.match(js, /window.open\("about:blank", "_blank"\)/);
  assert.match(js, /chatTab.location.replace\(CHATGPT\)/);
  assert.doesNotMatch(js, /window.location.assign\(CHATGPT\)/);
  const primary = js.slice(js.indexOf('launchButton.addEventListener'),js.indexOf("// I documenti canonici"));
  assert.ok(primary.indexOf("if (!copied)") < primary.indexOf("chatTab.location.replace"));
  assert.match(primary, /if \(!chatTab \|\| chatTab.closed\)/);
  assert.match(js, /navigator.clipboard.writeText/);
  assert.match(js, /document.execCommand\("copy"\)/);
  assert.doesNotMatch(html, /id="copy-only"/);
  assert.doesNotMatch(js, /getElementById\("copy-only"\)/);
  assert.match(html, /id="generated-prompt"/);
  assert.doesNotMatch(html, /id="manual-chatgpt"/);
  assert.doesNotMatch(js, /manualChatGPT/);
  assert.doesNotMatch(html, /href="https:\/\/chatgpt\.com\/?"/);
  assert.equal((html.match(/id="copy-and-open"/g)||[]).length,1);
  assert.equal((js.match(/chatTab\.location\.replace\(CHATGPT\)/g)||[]).length,1);
  assert.match(html, /Copia e apri in ChatGPT/);
});
check("Instagram in-app simulated stress suite", () => {
  execFileSync("node",["testing/instagram-launch.stress.test.mjs"],{stdio:"pipe"});
});

check("Privacy: testo locale, senza tracker o chiamate backend", () => {
  assert.doesNotMatch(js, /\bfetch\s*\(/);
  assert.doesNotMatch(js, /\bXMLHttpRequest\b|\blocalStorage\b|\bsendBeacon\b/);
  assert.doesNotMatch(html, /google-analytics|googletagmanager|facebook\.com\/tr\?/i);
});
check("Responsive e accessibilità minima", () => {
  assert.match(html, /name="viewport"/); assert.match(css, /@media\(max-width:520px\)/);
  assert.match(css, /prefers-reduced-motion/);assert.match(css, /focus-visible/);
  assert.match(html, /class="skip-link"/); assert.match(html, /aria-modal="true"/);
  assert.match(js, /event.key === "Escape"/);
});
check("Hero compatta: CTA e Visual Hammer prima possibile senza scroll", () => {
  assert.match(html, /<p class="hero-lead">Vuoi giocare anche senza un Master\? O preparare meglio le tue sessioni\?<\/p>/);
  assert.doesNotMatch(html.match(/<p class="hero-lead">[\s\S]*?<\/p>/)?.[0] || "", /prompt complicati|nuovo regolamento/);
  assert.match(css, /\.hero\{padding:28px 0 0/);
  assert.match(css, /\.hero-content\{padding:0 0 12px/);
  assert.match(css, /font-size:clamp\(2\.65rem,min\(4\.25vw,8\.2vh\),4\.25rem\)/);
  assert.match(css, /\.hero-art\{[^}]*display:flex;justify-content:center;align-items:flex-start;align-self:start;margin-top:0/);
  assert.match(css, /@media\(max-height:720px\) and \(min-width:841px\)/);
  assert.match(css, /@media\(max-width:840px\)/);
  assert.match(css, /@media\(max-width:520px\)/);
  assert.match(css, /\.hero h1\{font-size:clamp\(1\.66rem,7\.15vw,2\.3rem\)/);
  const ctaPos = html.indexOf('INIZIA SUBITO GRATIS con il Divertoscopio');
  assert.ok(html.indexOf('Lascia al caso i dadi, non il divertimento.') < ctaPos);
  assert.ok(ctaPos < html.indexOf('class="hero-art"'));
});
check("Hero più corta: visual allineato in alto e meno spazio sotto CTA", () => {
  assert.match(css, /\.hero-art img\{width:min\(100%,445px\);height:auto/);
  assert.match(css, /\.hero-bottom\{min-height:54px/);
  assert.match(css, /\.hero-art\{min-height:0;margin-top:0;padding:0 0 14px\}/);
  assert.match(css, /\.hero-art img\{width:min\(58%,320px\)\}/);
  assert.match(css, /@media\(max-height:720px\) and \(min-width:841px\)\{[\s\S]*?\.hero-art\{margin-top:0\}/);
  assert.ok(html.includes('INIZIA SUBITO GRATIS con il Divertoscopio'));
});
check("Promessa di GDR semplice e divertimento più rapido", () => {
  assert.match(html, /Meno attesa prima di divertirti\./);
  assert.match(html, /mette le basi per il GDR semplice/);
  assert.match(html, /Che cosa significa «GDR semplice»\? È un nuovo gioco\?/);
  assert.match(html, /non un gioco di ruolo nuovo né un regolamento semplificato/);
  assert.match(html, /meno preparazione superflua e più tempo per giocare davvero/);
  assert.match(css, /\.answer-heading \.first-fun\{/);
  assert.ok(html.indexOf('class="first-fun"') > html.indexOf('id="answer-title"'));
  assert.ok(html.indexOf('class="first-fun"') < html.indexOf('class="benefit-stack"'));
});
check("Evita vuoti verticali da grid e centra il Visual Hammer senza alterarlo", () => {
  assert.match(css, /\.hero-art\{[^}]*display:flex;justify-content:center;align-items:flex-start/);
  assert.doesNotMatch(css, /\.hero-art\{[^}]*display:grid;place-items:center/);
  assert.match(css, /\.hero-art img\{width:min\(100%,445px\);height:auto/);
  assert.match(css, /@media\(max-height:720px\) and \(min-width:841px\)\{[\s\S]*?\.hero h1\{font-size:clamp\(2\.5rem,min\(4\.1vw,8vh\),3\.85rem\)/);
  assert.match(css, /@media\(max-width:520px\)/);
  assert.match(html, /Ultra-Garanzia del Prezzo Negativo/);
});

check("FAQ utili su modalità ragionamento e immagini", () => {
  assert.match(html, /Come faccio a ottenere il massimo valore dal Divertoscopio\?/);
  assert.match(html, /un livello di ragionamento più approfondito/);
  assert.match(html, /non garantisce risultati perfetti/);
  assert.match(html, /Posso arricchire l'esperienza con immagini durante la chat\?/);
  assert.match(html, /generare immagini/);
  assert.match(html, /interrompere il ritmo e creare attrito/);
  assert.equal((html.match(/<summary>/g)||[]).length,13);
});
check("Manifesto completo nella landing, 11 principi, niente doppio link", () => {
  const opening = html.indexOf('<section class="section manifesto"');
  const ending = html.indexOf('<section class="final-cta"');
  const footer = html.indexOf('<footer class="footer">');
  assert.ok(opening > html.indexOf('id="faq"'));
  assert.ok(ending > opening && footer > ending);
  assert.equal((html.match(/class="principle-number"/g)||[]).length,11);
  assert.equal((html.match(/data-github-file="MANIFESTO\.md"/g)||[]).length,1);
  assert.match(html, /id="manifesto"/);
  assert.match(html, /href="#manifesto"/);
  assert.match(css, /\.manifesto-principles\{display:grid/);
  assert.match(css, /\.manifesto-principles\{grid-template-columns:1fr\}/);
});


check("Risorse per scettici e uso consapevole, facoltative e responsive", () => {
  assert.match(html, /<section class="section learn" id="risorse"/);
  assert.match(html, /La creatività resta tua/);
  assert.match(html, /Nessuna configurazione obbligatoria/);
  assert.match(css, /\.learn-grid\{display:grid;grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
  assert.match(css, /\.pain-grid,\.steps,\.learn-grid\{grid-template-columns:1fr\}/);
  for (const path of ["PERCHE-USARE-IL-DIVERTOSCOPIO.md", "COME-OTTENERE-IL-MASSIMO.md"]) {
    assert.ok(fs.statSync(path).size > 1000);
    assert.ok((html.split('data-github-file="' + path + '"').length-1) >= 2);
  }
  assert.ok(html.indexOf('id="risorse"') > html.indexOf('class="section honest"'));
  assert.ok(html.indexOf('id="risorse"') < html.indexOf('id="faq"'));
});

check("FAQ obiezioni reali, nessun dato privato e nessuna falsa promessa", () => {
  assert.ok(html.includes("L'AI non rischia di togliere il divertimento della preparazione?"));
  assert.ok(html.includes("Perché non usare ChatGPT normale o le mie tabelle casuali?"));
  assert.ok(html.includes("Perché giocare con l'AI invece che a un videogioco?"));
  assert.ok(html.includes("Posso salvare la campagna su Google Drive senza perdere dettagli o avere spoiler?"));
  assert.ok(html.includes("Non è stata dimostrata una superiorità generale"));
  assert.ok(html.includes("non si aggiornano automaticamente"));
  assert.ok(html.includes("non è una protezione tecnica"));
  assert.ok(html.includes("08 / DOMANDE FREQUENTI"));
  assert.ok(html.includes("09 / IL MANIFESTO DEL DIVERTOSCOPIO"));
  assert.doesNotMatch(html, /Francesco Siciliano|WhatsApp/);
});

check("File statici e GitHub Pages", () => {
  for(const f of ["index.html","landing.css","landing.js",".github/workflows/landing-pages.yml"]) assert.ok(fs.statSync(f).size>0);
  assert.match(html,/landing.css\?v=7/);assert.match(html,/landing.js\?v=8/);
});

const pass = tests.filter(x=>x[1]).length;
console.log("\nLanding static checks:",pass+"/"+tests.length);
if(pass !== tests.length) process.exitCode=1;
