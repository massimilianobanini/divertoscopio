// Deterministic browser-equivalent stress test for Instagram's in-app browser.
// Does not prove that ChatGPT responds correctly or that clipboard is allowed
// on a physical Samsung; it verifies our own navigation and failure handling.
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const code = fs.readFileSync("landing.js", "utf8");
const EXPECT = "https://github.com/massimilianobanini/divertoscopio\n\nIniziamo";
const REDIRECT = "https://l.instagram.com/?u=https%3A%2F%2Fmassimilianobanini.github.io%2Fdivertoscopio%3Futm_source%3Dig%26fbclid%3DFakeTracking";
const checks=[];

function harness({clipboard="ok", fallback=false, failExec=false}={}) {
  const events = {};
  const log = {navigations:[],writes:[],selections:0,exec:0};
  const nodes = new Map();
  const create=(id)=>({
    id,hidden:id==="prompt-modal",value:"",textContent:"",style:{},
    focus(){document.activeElement=this},
    select(){log.selections++},
    getClientRects(){return [1]},
    addEventListener(name,cb){(events[id]??={})[name]=cb},
    getAttribute(){return null}
  });
  const document={
    activeElement:null, body:{style:{}},
    getElementById(id){if(!nodes.has(id))nodes.set(id,create(id));return nodes.get(id)},
    querySelectorAll(selector){return selector==="[data-start-divertoscopio]"?Array.from({length:4},(_,i)=>this.getElementById("start-"+i)):[]},
    addEventListener(name,cb){(events.document??={})[name]=cb},
    execCommand(command){assert.equal(command,"copy");log.exec++;if(failExec)throw Error("execCommand not allowed");return fallback}
  };
  const navigator={};
  if(clipboard!=="absent")navigator.clipboard={writeText:async text=>{
    log.writes.push(text);
    if(clipboard==="denied")throw Error("clipboard denied");
    return undefined;
  }};
  const window={location:{href:REDIRECT,assign(url){log.navigations.push(url)}}};
  const context={document,navigator,window};
  vm.runInNewContext(code,context,{filename:"landing.js"});
  const click=async(id)=>{const cb=events[id]?.click;assert.equal(typeof cb,"function",id+" callback");await cb()};
  return {log,click,node:id=>document.getElementById(id),document};
}
async function check(label,test){
  await test();
  checks.push(label);
  console.log("PASS",label);
}

await check("4 CTA open same clean prompt, without UTM/fbclid",async()=>{
  const h=harness();
  for(let i=0;i<4;i++){
    await h.click("start-"+i);
    assert.equal(h.node("generated-prompt").value,EXPECT);
    assert.equal(h.node("prompt-modal").hidden,false);
    assert.ok(!h.node("generated-prompt").value.includes("instagram"));
  }
  assert.equal(h.log.navigations.length,0);
});
await check("Success: copy exact GitHub + Iniziamo, THEN open clean ChatGPT",async()=>{
  const h=harness({clipboard:"ok"});
  await h.click("start-0");
  await h.click("copy-and-open");
  assert.deepEqual(h.log.writes,[EXPECT]);
  assert.deepEqual(h.log.navigations,["https://chatgpt.com/"]);
  assert.ok(!h.log.navigations[0].includes("?q="));
  assert.ok(!h.log.navigations[0].includes("l.instagram.com"));
});
await check("Denied permission: no navigation, only the primary CTA",async()=>{
  const h=harness({clipboard:"denied",fallback:false});
  await h.click("start-0");
  await h.click("copy-and-open");
  assert.deepEqual(h.log.writes,[EXPECT]);
  assert.equal(h.log.navigations.length,0);
  assert.equal(h.log.selections,1);
  assert.match(h.node("copy-status").textContent,/NON è stato aperto/);
});

await check("Clipboard API absent + execCommand success: open ChatGPT",async()=>{
  const h=harness({clipboard:"absent",fallback:true});
  await h.click("start-1");
  await h.click("copy-and-open");
  assert.equal(h.log.exec,1);
  assert.equal(h.log.selections,1);
  assert.deepEqual(h.log.navigations,["https://chatgpt.com/"]);
});
await check("Clipboard API denied but execCommand success: open ChatGPT",async()=>{
  const h=harness({clipboard:"denied",fallback:true});
  await h.click("start-2");
  await h.click("copy-and-open");
  assert.equal(h.log.exec,1);
  assert.deepEqual(h.log.navigations,["https://chatgpt.com/"]);
});
await check("Both copying methods fail or throw: stay on landing",async()=>{
  const h=harness({clipboard:"denied",failExec:true});
  await h.click("start-3");
  await h.click("copy-and-open");
  assert.equal(h.log.navigations.length,0);
  assert.match(h.node("copy-status").textContent,/copia automatica non è riuscita/);
});
await check("No secondary copy-only / manual-open buttons or listeners",async()=>{
  const html=fs.readFileSync("index.html","utf8");
  assert.doesNotMatch(html,/id="copy-only"|id="manual-chatgpt"/);
  assert.doesNotMatch(code,/getElementById\("copy-only"\)|manualChatGPT/);
  assert.equal((html.match(/id="copy-and-open"/g)||[]).length,1);
  const h=harness();
  await h.click("start-0");
  assert.equal(h.log.navigations.length,0);
  await h.click("copy-and-open");
  assert.deepEqual(h.log.navigations,["https://chatgpt.com/"]);
});

await check("Copy denied twice: never redirect or reuse tracking URL",async()=>{
  const h=harness({clipboard:"denied",fallback:false});
  await h.click("start-0");
  await h.click("copy-and-open");
  await h.click("copy-and-open");
  assert.equal(h.log.navigations.length,0);
  assert.equal(h.log.writes.length,2);
  assert.ok(h.log.writes.every(x=>x===EXPECT));
});

await check("Close / reopen resets prompt and does not navigate",async()=>{
  const h=harness();
  await h.click("start-0");
  h.node("generated-prompt").value="junk";
  await h.click("modal-close");
  assert.equal(h.node("prompt-modal").hidden,true);
  await h.click("start-1");
  assert.equal(h.node("generated-prompt").value,EXPECT);
  assert.equal(h.log.navigations.length,0);
});

console.log("Instagram launch stress:",checks.length,"PASS / 0 FAIL");
