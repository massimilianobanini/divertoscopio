// Consistency contract for the project's "no paid credits/turns" positioning.
// Static tests only: no human GDR sessions, browser devices or billing backend tested.
import fs from "node:fs";
import assert from "node:assert/strict";
const read = (name) => fs.readFileSync(name,"utf8");
const files={
  html:read("index.html"),
  css:read("landing.css"),
  js:read("landing.js"),
  readme:read("README.md"),
  bootstrap:read("BOOTSTRAP.md"),
  limits:read("KNOWN-LIMITATIONS.md"),
  why:read("PERCHE-USARE-IL-DIVERTOSCOPIO.md"),
  guarantee:read("ULTRA-GARANZIA.md"),
  guide:read("COME-OTTENERE-IL-MASSIMO.md")
};
const results=[];
function check(name,run){
  run(); results.push(name);console.log("PASS",name);
}
function section(html,openTag,nextTag){
  const first=html.indexOf(openTag);
  assert.notEqual(first,-1,"Missing section "+openTag);
  const last=html.indexOf(nextTag,first+openTag.length);
  assert.notEqual(last,-1,"Missing section terminator "+nextTag);
  return html.slice(first,last);
}
function validateClaims(d){
  const hero=section(d.html,'<p class="no-turn-credits">','</p>');
  const micro=section(d.html,'<p class="micro">','</p>');
  const faqFree=section(d.html,'<summary>Il Divertoscopio è davvero gratis?</summary>','</details>');
  const faqTurns=section(d.html,"<summary>La partita o l'aiuto al Master consumano crediti a ogni turno?</summary>",'</details>');
  for(const [name,part,pattern] of [
    ["hero cost claim",hero,/Gioca senza comprare crediti per turno/],
    ["hero no per-choice charge",hero,/non fa pagare le scelte in partita/],
    ["hero covers Masters",hero,/richieste di aiuto come Master/],
    ["near-hero host disclaimer",micro,/ChatGPT, con i limiti del tuo account/],
    ["FAQ zero project credits",faqFree,/né acquistare crediti o token del progetto/],
    ["FAQ ChatGPT separate plan",faqFree,/un eventuale abbonamento ChatGPT è distinto dal Divertoscopio/],
    ["FAQ Master no credit turn cost",faqTurns,/non vende crediti o pacchetti di turni/],
    ["FAQ no per-scene price",faqTurns,/costo per ogni decisione, scena o domanda da Master/],
    ["FAQ separate platform limits",faqTurns,/ChatGPT può avere limiti differenti/],
    ["FAQ no infinity guarantee",faqTurns,/non promettiamo uso infinito o privo di interruzioni/],
    ["FAQ external official resource",faqTurns,/help\.openai\.com\/it-it\/articles\/9275245-chatgpt-free-tier-faq/]
  ])assert.match(part,pattern,name);
  assert.match(d.html,/<h3>Nessun credito Divertoscopio da esaurire<\/h3>/);
  assert.match(d.html,/ChatGPT mantiene i propri limiti e le campagne lunghe possono richiedere un checkpoint/);
  assert.match(d.readme,/Nessun credito da acquistare e nessun costo per turno imposto dal Divertoscopio/);
  assert.match(d.readme,/Non vendiamo token, pacchetti di mosse o abbonamenti al progetto/);
  assert.match(d.readme,/Si applicano comunque i piani e i limiti di ChatGPT/);
  assert.match(d.readme,/non promettiamo sessioni infinite né prive di interruzioni/);
  assert.match(d.bootstrap,/non vende crediti o pacchetti di turni/);
  assert.match(d.bootstrap,/ChatGPT ha piani e limiti propri/);
  assert.match(d.bootstrap,/Domanda specifica su «crediti»/);
  assert.match(d.bootstrap,/Non promettere uso illimitato o un salvataggio perfetto/);
  assert.match(d.limits,/Nessun credito, token a consumo, tariffa per turno o abbonamento del Divertoscopio/);
  assert.match(d.limits,/Nessuna garanzia di gioco infinito o senza pause/);
  assert.match(d.limits,/Non attribuire a tutti i concorrenti un modello a crediti senza verificare ciascun prodotto/);
  assert.match(d.why,/non vende crediti o token, non fa pagare ogni turno/);
  assert.match(d.why,/non i limiti del servizio ChatGPT che lo ospita/);
  assert.match(d.why,/ancora da validare completamente/);
  assert.match(d.guide,/checkpoint/i);
  assert.match(d.guarantee,/gratuito/i);
  assert.match(d.guarantee,/un solo pagamento di €1/i);
  assert.match(d.css,/\.hero \.no-turn-credits\{/);
  assert.match(d.html,/<meta name="description"[^>]*nessun credito del progetto o costo per turno/i);
  assert.doesNotMatch(d.html,/gioca all['’]infinito senza limiti|nessuna interruzione garantita|tutti i concorrenti (?:fanno )?pagare/i);
  assert.doesNotMatch(d.html+/n/+d.readme,/compra [0-9]+ crediti Divertoscopio|ogni turno costa €|Divertoscopio richiede un abbonamento/i);
  // The static frontend does not handle billing, collect payment cards or store credit balances.
  assert.doesNotMatch(d.js,/fetch\(|XMLHttpRequest|localStorage|sessionStorage|sendBeacon|stripe|paypal/i);
  assert.doesNotMatch(d.html,/<input[^>]*(?:type=["'](?:number|password|email)["']|name=["'](?:credit_card|card_number|credits_balance)["'])/i);
  // Avoid unintentional regression of the single CTA and new-tab UX.
  assert.match(d.js,/const START_PROMPT = REPO \+ "\\n\\nIniziamo"/);
  assert.match(d.js,/window\.open\("about:blank", "_blank"\)/);
  assert.match(d.js,/if \(!copied\)/);
  assert.match(d.js,/chatTab\.location\.replace\(CHATGPT\)/);
  assert.doesNotMatch(d.js,/window\.location\.assign\(CHATGPT\)/);
  assert.equal((d.html.match(/id="copy-and-open"/g)||[]).length,1);
  assert.doesNotMatch(d.html,/id="copy-only"|id="manual-chatgpt"/);
}
check("Canonical marketing, FAQ and GitHub no-credit contract",()=>validateClaims(files));
check("Link-only boot remains a best-effort intent, not a fake guarantee",()=>{
  assert.match(files.readme,/il tuo messaggio contiene solo l’URL di questo repository/);
  assert.match(files.readme,/ChatGPT può comunque interpretare diversamente un link isolato/);
  assert.match(files.bootstrap,/soltanto.*URL di questo repository|soltanto.*https:\/\/github\.com\/massimilianobanini\/divertoscopio/s);
  assert.match(files.bootstrap,/il solo URL non garantisce il risultato/);
});
check("Mutation: missing per-turn hero claim is detected",()=>{
  const d={...files,html:files.html.replace("Gioca senza comprare crediti per turno.","Gioca quando vuoi.")};
  assert.throws(()=>validateClaims(d),assert.AssertionError);
});
check("Mutation: removal of ChatGPT usage-limit disclaimer is detected",()=>{
  const d={...files,html:files.html.replace("non promettiamo uso infinito o privo di interruzioni","nessun problema di utilizzo")};
  assert.throws(()=>validateClaims(d),assert.AssertionError);
});
check("Mutation: hidden price-per-turn monetization is detected",()=>{
  const d={...files,readme:files.readme+"\nOgni turno costa €1."};
  assert.throws(()=>validateClaims(d),assert.AssertionError);
});
check("Mutation: promise of infinite uninterrupted play is detected",()=>{
  const d={...files,html:files.html+"\nGioca all'infinito senza limiti"};
  assert.throws(()=>validateClaims(d),assert.AssertionError);
});
check("Mutation: opening ChatGPT in same tab is detected",()=>{
  const d={...files,js:files.js.replace('chatTab.location.replace(CHATGPT)','window.location.assign(CHATGPT)')};
  assert.throws(()=>validateClaims(d),assert.AssertionError);
});
check("Mutation: second Copy only button is detected",()=>{
  const d={...files,html:files.html+'<button id="copy-only">Copia soltanto</button>'};
  assert.throws(()=>validateClaims(d),assert.AssertionError);
});
console.log("No-credit-cost stress:",results.length,"PASS / 0 FAIL");
