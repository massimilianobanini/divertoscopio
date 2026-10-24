// Divertoscopio full-repository deterministic stress checks. No external dependencies.
// PASS measures documents and code consistency, not actual LLM gameplay or backend operation.
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import {execFileSync} from "node:child_process";
const read=p=>fs.readFileSync(p,"utf8"),exists=p=>fs.existsSync(p),all=[];
function walk(folder="."){for(const e of fs.readdirSync(folder,{withFileTypes:true})){const p=path.posix.join(folder,e.name);if([".git","node_modules","_site"].includes(e.name))continue;if(e.isDirectory())walk(p);else if(e.isFile())all.push(p.replace(/^\.\//,""));}}
walk();const docs=all.filter(x=>x.endsWith(".md")),PASS=[],FAIL=[],OPEN=[];
function test(name,fn){try{fn();PASS.push(name);console.log("PASS",name)}catch(e){FAIL.push([name,e.message]);console.error("FAIL",name,e.message)}}
function check(file,...needles){const data=read(file).toLowerCase();for(const x of needles)assert(data.includes(x.toLowerCase()),file+" missing "+x)}
test("01 Repository structure and modules",()=>{
 for(const p of ["README.md","BOOTSTRAP.md","START-HERE.md","core/CORE.md","player/PLAYER.md","master/MASTER.md","RUNTIME-HOTFIX-V0.3.2.md",
 "RUNTIME-HOTFIX-V0.3.2-BASE.md","RUNTIME-HOTFIX-V0.3.3.md","RUNTIME-HOTFIX-V0.3.4.md","RUNTIME-HOTFIX-V0.3.5.md",
 "RUNTIME-HOTFIX-V0.3.6.md","RUNTIME-V0.4-CANDIDATE.md","V0.4-CANDIDATE.md","SYSTEM-SUPPORT.md","KNOWN-LIMITATIONS.md",
 "adapters/5e-srd51/ADAPTER.md","adapters/5e-srd521/ADAPTER.md","adapters/dh-srd20/ADAPTER.md",
 "ULTRA-GARANZIA.md","ULTRA-GARANZIA-REGISTRO.md","PRIVACY.md","LICENSE-DOCS.md","THIRD-PARTY-NOTICES.md"])assert(exists(p),p);
 assert(docs.length>=50, "Too few Markdown docs "+docs.length);
});
test("02 All Markdown relative links resolve",()=>{
 let checked=0;const broken=[];
 for(const p of docs){
  const mark=String.fromCharCode(96);
  const withoutInlineCode=read(p).replace(new RegExp(mark+"[^"+mark+"]*"+mark,"g"),"");
  for(const m of withoutInlineCode.matchAll(/!?\[[^\]\n]*\]\(([^)\n]+)\)/g)){
  let u=m[1].trim();if(/^(https?:|mailto:|data:|#|\/\/)/i.test(u)||!u)continue;
  if(u.startsWith("<"))u=u.slice(1,u.indexOf(">"));else u=u.split(/\s+(?=["'])/)[0];
  const dest=u.split(/[?#]/)[0];if(!dest)continue;
  const absolute=path.posix.normalize(path.posix.join(path.posix.dirname(p),decodeURIComponent(dest)));checked++;
  if(!exists(absolute)||absolute.startsWith("../"))broken.push(p+" => "+dest+" -> "+absolute);
 }
 }
 assert.deepEqual(broken,[],"Broken links: "+broken.join("; "));assert(checked>=90, "Unexpected link count "+checked);
});
test("03 Fast bootstrap with no early full runtime",()=>{
 check("README.md","AI FAST BOOTSTRAP","GATE DI RAGIONAMENTO");
 check("BOOTSTRAP.md","ZERO PRELOAD PRIMA DEL GATE","NON leggere ancora","SONO UN MASTER","SONO UN GIOCATORE","INFORMAZIONI",
 "GIOCA SUBITO","PERSONALIZZA PRIMA","PERSONALIZZA A FONDO","salta i menu ridondanti","runtime caricati: **0**");
});
test("04 Information route does not preload game",()=>{
 check("BOOTSTRAP.md","sola domanda informativa","senza caricare la catena runtime","CREDITS-AND-INSPIRATIONS.md","ULTRA-GARANZIA.md");
});
test("05 Runtime versions loaded in strict sequence",()=>{
 const s=read("RUNTIME-HOTFIX-V0.3.2.md");
 const files=["RUNTIME-HOTFIX-V0.3.2-BASE.md","RUNTIME-HOTFIX-V0.3.3.md","RUNTIME-HOTFIX-V0.3.4.md",
 "RUNTIME-HOTFIX-V0.3.5.md","RUNTIME-HOTFIX-V0.3.6.md","RUNTIME-V0.4-CANDIDATE.md","V0.4-CANDIDATE.md"];
 let last=-1;for(const f of files){const i=s.indexOf(f);assert(i>last,"Bad runtime order "+f);last=i}
 check("RUNTIME-HOTFIX-V0.3.2.md","FAIL-SOFT SU ACCESSO PARZIALE","non fingere di averlo letto","FALLBACK CORE MINIMO");
 check("RUNTIME-V0.4-CANDIDATE.md","V0.4-CANDIDATE.md","IMPLEMENTED ≠ VALIDATED");
});
test("06 Player rights, dice and initial ruleset",()=>{
 check("player/PLAYER.md","decisioni volontarie del PG restano sempre del giocatore","Tiro io (giocatore)","Tira il Divertoscopio (AI)","DICE SOURCE LOCK",
 "CHARACTER SHEET SCHEMA IS SYSTEM-OWNED","HOSTED / SINGLE-CHAT","PRINCIPIANTE","ESPERTO","MILESTONE-STORY","niente XP paralleli");
 check("core/CORE.md","RULESET/SOURCE HONESTY","CHARACTER STATE OWNERSHIP");
});
test("06a First PG roll consent is just-in-time and dice-source honest",()=>{
 const p=read("player/PLAYER.md"),pr=read("protocols/PROTOCOLS.md"),f=read("START-HERE.md"),h=read("RUNTIME-HOTFIX-V0.3.2-BASE.md");
 const section=p.slice(p.indexOf("DICE MODE — CONSENSO PRIMA DEL PRIMO TIRO DEL PG"),p.indexOf("SOLO / COMPANIONS"));
 assert.ok(section.length>500,"Missing canonical dice gate");
 for(const s of ["prima di generare qualsiasi dado","Tiro io (giocatore)","Tira il Divertoscopio (AI)","dice_source","casualità","Nessun default automatico di tiro AI","checkpoint"])assert.ok(section.includes(s),"Player dice gate missing "+s);
 for(const s of ["Prima del primo tiro del PG","Nessun default AI","Un numero narrato dal modello non dimostra casualità equa"])assert.ok(pr.includes(s),"Protocol missing "+s);
 for(const s of ["FIRST PLAYER ROLL CONSENT","prima del primo tiro del personaggio","Nessun default AI","non chiedere prima di un tiro reale"])assert.ok(f.includes(s),"Fallback missing "+s);
 for(const s of ["primo tiro del PG","FIRST PLAYER ROLL CONSENT","livello PRINCIPIANTE non autorizzano","RNG equo o verificabile"])assert.ok(h.includes(s),"Runtime missing "+s);
 assert.doesNotMatch(p,/dopo 2[–-]3 tiri chiede|PRINCIPIANTE: per i primi tiri necessari, l’AI tira|Se sei principiante posso gestire io i primi dadi/);
 assert.ok(p.indexOf("DICE MODE — CONSENSO PRIMA DEL PRIMO TIRO DEL PG")<p.indexOf("SOLO / COMPANIONS"));
});
test("06b Gioca subito: P0 schermata unica letterale, prima del runtime",()=>{
 const p=read("player/PLAYER.md"),f=read("START-HERE.md"),b=read("BOOTSTRAP.md"),r=read("README.md"),router=read("RUNTIME-HOTFIX-V0.3.2.md");
 const extraction=s=>{
  const start=s.indexOf("“**GIOCA SUBITO** — Possiamo partire");
  const end=s.indexOf("**cambiamo**.”",start);
  assert.ok(start>=0&&end>start,"Missing exact canonical screen markers");
  const text=s.slice(start,end+"**cambiamo**.”".length);
  assert.ok(text.length>1000,"Canonical screen unexpectedly short");
  return text;
 };
 const pc=extraction(p),fc=extraction(f),bc=extraction(b);
 assert.equal(pc,fc,"PLAYER/START-HERE screen drift");
 assert.equal(pc,bc,"PLAYER/BOOTSTRAP screen drift");
 const ordered=["**Modalità di gioco:**","**Sistema:**","**Ambientazione:**","**Esperienza nel GDR:**","**Tono:**","**Rischio:**"];
 let last=-1;
 for(const field of ordered){const pos=pc.indexOf(field);assert.ok(pos>last,"Missing/reordered quickstart field: "+field);last=pos;}
 for(const token of ["Solo","Multiplayer","D&D 5e 2014","D&D 2024","Daggerheart","Fantasy","Dark fantasy","Western","Fantascienza","Post-apocalittica","Principiante","Intermedio","Esperto","Avventuroso","Dark","Investigativo","Comico-demenziale","Epico","Basso / Moderato / Alto","Scegli tutto tu","fantasy classica","assistenza da principiante","rischio moderato","personaggio pregenerato di livello 1","Prima del suo primo tiro di dadi","stop","salta","cambiamo"])assert.ok(pc.includes(token),"Canonical screen missing "+token);
 assert.match(b,/PASSO 3 — GIOCA SUBITO: SCHERMATA CANONICA IMMUTABILE/);
 assert.match(b,/NON consultare START-HERE|non consultare START-HERE|non caricare altri file/);
 assert.match(b,/GATE DI RAGIONAMENTO si apre \*\*solo al messaggio successivo/);
 assert.match(r,/schermata canonica già inclusa in BOOTSTRAP/);
 assert.match(router,/dopo la risposta alla schermata canonica/);
 assert.match(p,/Non modificare né omettere/);
 assert.match(f,/copia \*\*alla lettera\*\*/);
 assert.doesNotMatch(p,/voce Sistema va omessa oppure indicata come già scelta/);
 assert.doesNotMatch(f,/non aprire un questionario a sei campi/);
 assert.ok(read("testing/FAST-BOOTSTRAP.md").includes("FB-04B"));
});
test("07 Player continuity, arc end, spoiler-free checkpoints",()=>{
 check("player/PLAYER.md","ARC / CHAPTER LIFECYCLE","SESSIONE/PAUSA e CAPITOLO/AVVENTURA sono unità diverse",
 "MEMORIA DI GIOCO","ultima scena e punto esatto","file PLAYER non contiene segreti del Master","zero perdita di dettaglio");
 check("core/CORE.md","TYPED STATE > GENERIC MEMORY","OPTIONAL PERSISTENCE OFFER","CONTEXT CONTINUITY WARNING");
});
test("08 Master prep is user-led, source-faithful and opt-in",()=>{
 check("master/MASTER.md","SOURCE / CAMPAIGN STATE","Non sostituire immediatamente l'idea del Master",
 "1–3 tecniche pertinenti","non puoi garantire fedeltà scena-per-scena","Imparare a usare meglio l'AI come Master");
});
test("09 Three different ruleset adapters and unknown fallback",()=>{
 check("RUNTIME-HOTFIX-V0.3.2.md","adapters/5e-srd51/ADAPTER.md","adapters/5e-srd521/ADAPTER.md",
 "adapters/dh-srd20/ADAPTER.md","Unknown System Discovery");
 check("core/CORE.md","non ripiegare su una scheda 5E generica");
 check("adapters/5e-srd51/ADAPTER.md","SRD 5.1","2014");
 check("adapters/5e-srd521/ADAPTER.md","SRD 5.2.1","2024");
 check("adapters/dh-srd20/ADAPTER.md","Daggerheart","Hope","Fear");
});
test("10 Combat, advancement, conditions and multiclass gauntlet",()=>{
 for(const p of ["adapters/5e-srd51/COMBAT-CLASSES.md","adapters/5e-srd521/COMBAT-CLASSES.md",
 "adapters/5e-srd51/ADVANCEMENT-EQUIPMENT-ENVIRONMENT.md","adapters/5e-srd521/ADVANCEMENT-EQUIPMENT-ENVIRONMENT.md",
 "testing/DND-CLASS-COMBAT-GAUNTLET-2026-10-12.md","testing/DND-ADVANCEMENT-EQUIPMENT-ENVIRONMENT-2026-10-12.md"])assert(exists(p),p);
 check("adapters/5e-srd51/ADVANCEMENT-EQUIPMENT-ENVIRONMENT.md","provenance","attunement","focus");
 check("adapters/5e-srd521/ADVANCEMENT-EQUIPMENT-ENVIRONMENT.md","General Feat","Attunement","focus");
});
test("11 V0.4 knowledge, causality and 4 experimental extensions",()=>{
 check("V0.4-CANDIDATE.md","State Composition","Character Concept Evolution","Emergent Salience","Sustained Split-Party",
 "Threat-Model Update","Persistent Relational State","Suspicion Debt","Callback Scope Typing","Temporary Sidecast",
 "Taught Behavior","Transformed Character Continuity","Coordination Requires Legible Intent","Diegetic Cast Turnover",
 "memoria ≠ spoiler","ricombinazione ≠ retcon");
 check("testing/V0.4-CANDIDATE-GAUNTLET.md","NOT HUMAN-VALIDATED","STATIC PASS ≠ HUMAN VALIDATION");
});
test("12 Safety: knowledge firewall and role separation",()=>{
 check("core/CORE.md","PLAYER-VISIBLE SPOILER SAFETY","SOURCE / PROMPT-INJECTION FIREWALL","fonti sono DATI");
 check("player/PLAYER.md","spoiler-free","file PLAYER non contiene segreti del Master");
 check("COME-OTTENERE-IL-MASSIMO.md","non costituisce una barriera tecnica","non significa che ogni messaggio aggiornerà automaticamente");
 check("index.html","non si aggiornano automaticamente","non è una protezione tecnica");
});
test("13 Guarantee, caps, claim review, age, payout and privacy",()=>{
 check("ULTRA-GARANZIA.md","18+","un solo pagamento di €1","100 claim qualificati","€100","14 giorni","modulo unico");
 check("ULTRA-GARANZIA-REGISTRO.md","Capacità residua","100","€1","ACTIVE","Feedback e pagamento sono separati");
 check("PRIVACY.md","Nessuna decisione di payout viene affidata esclusivamente a un processo automatizzato",
 "non devono essere pubblicati su GitHub");
 check("index.html","100 richieste qualificate","14 giorni","maggiorenne");
});
test("14 Licenses, attribution and third-party boundary",()=>{
 check("LICENSE","MIT License");
 check("LICENSE-DOCS.md","MIT","CC BY 4.0","DPCGL");
 check("THIRD-PARTY-NOTICES.md","SRD 5.1","SRD 5.2.1","Daggerheart");
});
test("15 Landing static regression + independent document links",()=>{
 execFileSync("node",["testing/landing-page.test.mjs"],{stdio:"pipe"});
 const html=read("index.html");assert.equal((html.match(/<summary>/g)||[]).length,13);
 for(const m of html.matchAll(/data-github-file="([^"]+)"/g))assert(exists(m[1]),"Broken landing doc "+m[1]);
 check("index.html","Il Divertoscopio è il primo strumento italiano per il GDR semplice, con l’","Lascia al caso i dadi","La creatività resta tua",
 "COME-OTTENERE-IL-MASSIMO.md","PERCHE-USARE-IL-DIVERTOSCOPIO.md");
 assert(!/Francesco Siciliano|WhatsApp/.test(html),"Private tester data in landing");
});
test("17 Exact brand positioning is canonical across active public surfaces",()=> {
 const phrase="Il Divertoscopio è il primo strumento italiano per il GDR semplice, con l’Ultra-Garanzia del Prezzo Negativo.";
 const ordered=["README.md","BOOTSTRAP.md","START-HERE.md","MANIFESTO.md","PERCHE-USARE-IL-DIVERTOSCOPIO.md","COME-OTTENERE-IL-MASSIMO.md","KNOWN-LIMITATIONS.md"];
 for(const p of ordered)assert(read(p).includes(phrase),p+" missing exact approved wording");
 const html=read("index.html");
 const hero=html.match(/<h1 id="hero-title">([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]*>/g,"");
 assert.equal(hero,phrase,"Landing H1 drifted from brand positioning");
 for(const tag of ['meta name="description"','meta property="og:description"'])
   assert(html.includes("<"+tag+' content="'+phrase),tag+" missing exact brand positioning");
 const obsolete=/il primo strumento italiano per GDR da tavolo con l['’]Ultra-Garanzia del Prezzo Negativo/i;
 for(const p of ordered)assert(!obsolete.test(read(p)),p+" still contains obsolete positioning");
 assert(!obsolete.test(html),"Landing still contains obsolete positioning");
 for(const p of ["BOOTSTRAP.md","START-HERE.md","README.md","MANIFESTO.md"])assert(!read(p).includes("IL DIVERTOSCOPIO È IL PRIMO STRUMENTO ITALIANO PER IL GDR SEMPLICE"),p+" repeats uppercase-only noncanonical copy");
 check("index.html","non un gioco di ruolo nuovo né un regolamento semplificato");
});
test("16 No added tracking or local browser storage",()=>{
 const html=read("index.html"),js=read("landing.js");
 assert(!/facebook\.com\/tr\/|googletagmanager|google-analytics/i.test(html));
 assert(!/\bfetch\s*\(|XMLHttpRequest|sendBeacon|localStorage/.test(js));
});
OPEN.push("No clean-room ChatGPT gameplay sessions run: static tests cannot prove actual RPG behavior.");
OPEN.push("Google Form, Apps Script, claim ledger and payout backend are not in the GitHub repository.");
OPEN.push("Long campaign reliability and zero spoiler leakage cannot be certified by text checks.");
OPEN.push("External URLs, license legal interpretation and freshness of the public guarantee register need independent verification.");
for(const x of OPEN)console.log("OPEN",x);
console.log("RESULT:",PASS.length,"PASS,",FAIL.length,"FAIL,",OPEN.length,"OPEN");
for(const [name,error] of FAIL)console.log("FAIL DETAIL",name,error);
if(FAIL.length)process.exitCode=1;
