// V0.1 landing: controlli statici, senza dipendenze o servizi esterni.
// Non sostituiscono un test browser/actual play con utenti indipendenti.
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("landing.css", "utf8");
const js = fs.readFileSync("landing.js", "utf8");
const png = fs.readFileSync("assets/visual-hammer/DIVERTOSCOPIO-visual-hammer-lime.png");
const flowTests = [
  ["player-fast", "Iniziamo. Sono un giocatore. Voglio giocare subito. Scegli tutto tu."],
  ["player-custom", "Iniziamo. Sono un giocatore. Voglio personalizzare prima l'avventura."],
  ["master-prepare", "Iniziamo. Sono un Master. Voglio preparare la prossima sessione."],
  ["master-problem", "Iniziamo. Sono un Master. Voglio risolvere un problema al tavolo."],
];
const tests = [];
function check(name, run) {
  try { run(); tests.push([name, true]); console.log("PASS", name); }
  catch(e) { tests.push([name, false]); console.error("FAIL", name, e.message); }
}

check("Headline: target, brand positioning, battlecry", () => {
  assert.match(html, /PER GIOCATORI E MASTER ITALIANI/);
  assert.match(html, /<h1[^>]*>Il Divertoscopio è il primo strumento italiano per GDR da tavolo con l’/);
  assert.match(html, /Ultra-Garanzia del Prezzo Negativo/);
  assert.match(html, /Lascia al caso i dadi, non il divertimento/);
});
check("Visual Hammer originale, non sostituito da illustrazioni", () => {
  assert.match(html, /<div class="hero-art"[^>]*>[\s\S]*?<img src="assets\/visual-hammer\/DIVERTOSCOPIO-visual-hammer-lime.png"/);
  assert.equal(png.subarray(0,8).toString("hex"), "89504e470d0a1a0a");
});
check("Narrativa direct-response completa", () => {
  for(const id of ["perche","come-funziona","inizia","garanzia","faq"]) assert.ok(html.includes('id="'+id+'"'),id);
  assert.match(html, /Il problema/i);assert.match(html,/La risposta/i);
  assert.match(html, /PER GIOCATORI/);assert.match(html, /PER MASTER/);
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
check("4 flussi instradati, senza ripetere ruolo", () => {
  for(const [id,prompt] of flowTests){ assert.ok(html.includes('data-flow="'+id+'"'),id); assert.ok(js.includes(prompt),id); }
  assert.match(js, /REPO \+ "\\n\\n" \+ task.trim\(\)/);
});
check("Copia + apertura ChatGPT e fallback", () => {
  assert.match(js, /navigator.clipboard.writeText/);
  assert.match(js, /document.execCommand\("copy"\)/);
  assert.match(js, /window.open\(CHATGPT/);
  assert.match(html, /id="generated-prompt"/);
  assert.match(html, /id="manual-chatgpt"/);
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
  assert.match(css, /\.hero\{padding:28px 0 0/);
  assert.match(css, /\.hero-content\{padding:0 0 38px/);
  assert.match(css, /font-size:clamp\(2\.15rem,min\(3\.15vw,5\.9vh\),3\.15rem\)/);
  assert.match(css, /\.hero-art\{[^}]*align-self:start;margin-top:58px/);
  assert.match(css, /@media\(max-height:720px\) and \(min-width:841px\)/);
  assert.match(css, /@media\(max-width:840px\)/);
  assert.match(css, /@media\(max-width:520px\)/);
  assert.match(css, /\.hero h1\{font-size:clamp\(1\.66rem,7\.15vw,2\.3rem\)/);
  const ctaPos = html.indexOf('Voglio provare il Divertoscopio');
  assert.ok(html.indexOf('Lascia al caso i dadi, non il divertimento.') < ctaPos);
  assert.ok(ctaPos < html.indexOf('class="hero-art"'));
});
check("FAQ utili su modalità ragionamento e immagini", () => {
  assert.match(html, /Come faccio a ottenere il massimo valore dal Divertoscopio\?/);
  assert.match(html, /livello di ragionamento più alto o approfondito disponibile/);
  assert.match(html, /non garantisce risultati perfetti/);
  assert.match(html, /Posso arricchire l'esperienza con immagini durante la chat\?/);
  assert.match(html, /generare immagini/);
  assert.match(html, /interrompere il ritmo e creare attrito/);
  assert.equal((html.match(/<summary>/g)||[]).length,8);
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

check("File statici e GitHub Pages", () => {
  for(const f of ["index.html","landing.css","landing.js",".github/workflows/landing-pages.yml"]) assert.ok(fs.statSync(f).size>0);
  assert.match(html,/landing.css\?v=2/);assert.match(html,/landing.js\?v=1/);
});

const pass = tests.filter(x=>x[1]).length;
console.log("\nLanding static checks:",pass+"/"+tests.length);
if(pass !== tests.length) process.exitCode=1;
