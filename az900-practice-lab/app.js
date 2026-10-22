// App logic. Questions live in questions.js (loaded first).
const Q=RAW.map(([t,p,o,c],i)=>({id:i,t,p,o,c}));
// ---------- State & storage ----------
let S={};const $=s=>document.querySelector(s),app=$("#app");
let prog={};try{prog=JSON.parse(localStorage.getItem("az900")||"{}")}catch(e){}
const save=()=>{try{localStorage.setItem("az900",JSON.stringify(prog))}catch(e){}};
const pct=k=>{const ids=Q.filter(q=>q.t===k);const b=ids.filter(q=>prog[q.id]).length;return Math.round(100*b/ids.length)};
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};

// ---------- Views ----------
function home(){
 const mastered=Object.keys(T).filter(k=>pct(k)===100).length;
 app.innerHTML=`<h1>AZ-900 Practice Lab</h1><span class="tag">Unofficial study tool · not affiliated with or endorsed by Microsoft</span>
 <p class="lead">Pick a topic, answer, and see right away why each choice is right or wrong. Questions are original and follow the public AZ-900 skills outline on Microsoft Learn.</p>
 <button class="primary" id="mix">Start mixed challenge (${Q.length} questions)</button>
 <div class="topics">${Object.entries(T).map(([k,n])=>`<button class="topic" data-k="${k}"><b>${n}</b><span class="badge">${pct(k)===100?"Mastered":pct(k)+"%"}</span><small>${Q.filter(q=>q.t===k).length} questions</small><span class="bar"><i data-w="${pct(k)}"></i></span></button>`).join("")}</div>
 <footer>${mastered} of 6 topics mastered. Progress is saved in this browser only. Always confirm details in the official Microsoft Learn documentation.</footer>`;
 requestAnimationFrame(()=>document.querySelectorAll(".bar i").forEach(i=>i.style.width=i.dataset.w+"%"));
 $("#mix").onclick=()=>start(Q);
 document.querySelectorAll(".topic").forEach(b=>b.onclick=()=>start(Q.filter(q=>q.t===b.dataset.k)));
}
function start(list){S={list:shuffle(list).map(q=>{const order=shuffle(q.o.map((_,i)=>i));return{...q,order}}),i:0,score:0,streak:0,best:0,miss:[],per:{},done:false};ask()}
function ask(){
 const q=S.list[S.i];S.locked=false;
 app.innerHTML=`<div class="top"><button class="ghost" id="quit" aria-label="Back to topics">Exit</button><div class="prog"><i style="width:${S.i/S.list.length*100}%"></i></div><div class="streak" id="st">${S.streak>1?"🔥 ×"+S.streak:""}</div></div>
 <div class="qtopic">${T[q.t]} · Question ${S.i+1} of ${S.list.length}</div><div class="q">${q.p}</div>
 <div class="opts">${q.order.map((oi,n)=>`<button class="opt" data-o="${oi}"><kbd>${n+1}</kbd><span>${q.o[oi][0]}</span></button>`).join("")}</div><div id="fb" aria-live="polite"></div>`;
 $("#quit").onclick=home;
 document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>pick(+b.dataset.o));
}
function pick(oi){
 if(S.locked)return;S.locked=true;
 const q=S.list[S.i],ok=oi===q.c;
 document.querySelectorAll(".opt").forEach(b=>{const o=+b.dataset.o;b.disabled=true;if(o===q.c)b.classList.add("ok");else if(o===oi)b.classList.add("bad")});
 S.per[q.t]=S.per[q.t]||[0,0];S.per[q.t][1]++;
 if(ok){S.score++;S.streak++;S.per[q.t][0]++;S.best=Math.max(S.best,S.streak);prog[q.id]=1}else{S.streak=0;S.miss.push(q)}
 save();
 const st=$("#st");st.textContent=S.streak>1?"🔥 ×"+S.streak:"";st.classList.add("pop");setTimeout(()=>st.classList.remove("pop"),220);
 const cheer=S.streak>=5?"Unstoppable!":S.streak>=3?"On a roll!":"Correct!";
 $("#fb").innerHTML=`<div class="fb ${ok?"ok":"bad"}"><h3>${ok?cheer:"Not quite"}</h3>
 ${ok?"":`<p><b>Your answer:</b> ${q.o[oi][1].replace(/^Wrong: /,"")}</p>`}
 <p><b>${ok?"Why it’s right:":"Correct answer — "+q.o[q.c][0]+":"}</b> ${q.o[q.c][1].replace(/^Right: /,"")}</p>
 ${q.o.some((_,i)=>i!==q.c&&i!==oi)?`<details><summary>Why the other options don’t fit</summary>${q.o.map((o,i)=>i===q.c||i===oi?"":`<p><b>${o[0]}:</b> ${o[1].replace(/^Wrong: /,"")}</p>`).join("")}</details>`:""}</div>
 <button class="primary next" id="nx">${S.i+1<S.list.length?"Next question":"See results"}</button>`;
 $("#nx").onclick=next;$("#nx").focus();
 if(ok&&(S.streak===3||S.streak===5||S.streak%5===0))boom(S.streak>=5?160:80);
}
function next(){S.i++;S.i<S.list.length?ask():results()}
function results(){
 const n=S.list.length,p=Math.round(100*S.score/n),C=2*Math.PI*72;
 const msg=p===100?"Flawless. You’re ready to move on.":p>=80?"Strong result. A little review will lock it in.":p>=50?"Solid start. Review the missed ones below.":"Good first pass. The explanations are where the learning happens.";
 app.innerHTML=`<h1>Round complete</h1><div class="ring"><svg width="170" height="170"><circle cx="85" cy="85" r="72" stroke="var(--line)"/><circle id="arc" cx="85" cy="85" r="72" stroke="var(--accent)" stroke-dasharray="${C}" stroke-dashoffset="${C}" style="transition:stroke-dashoffset 1.2s cubic-bezier(.2,.8,.2,1)"/></svg><div class="n" id="num">0%</div></div>
 <p class="lead" style="margin-top:0">${S.score} of ${n} correct · best streak ${S.best}. ${msg}</p>
 <div class="bd">${Object.entries(S.per).map(([k,v])=>`<div><span>${T[k]}</span><b>${v[0]}/${v[1]}</b></div>`).join("")}</div>
 <div class="row">${S.miss.length?`<button class="primary" id="rm">Retry ${S.miss.length} missed</button>`:""}<button class="ghost" id="hm">Back to topics</button></div>`;
 requestAnimationFrame(()=>$("#arc").style.strokeDashoffset=C*(1-p/100));
 let t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1200);$("#num")&&($("#num").textContent=Math.round(p*k)+"%");if(k<1)requestAnimationFrame(f)})(t0);
 if(p>=80)boom(220);
 $("#hm").onclick=home;if(S.miss.length)$("#rm").onclick=()=>start(S.miss);
}
// ---------- Confetti ----------
const cv=$("#fx"),cx=cv.getContext("2d");let ps=[];
function sz(){cv.width=innerWidth;cv.height=innerHeight}addEventListener("resize",sz);sz();
function boom(n){if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
 const cols=["#2f5bff","#0b8a5f","#e8920c","#d1343b","#7b97ff"];
 for(let i=0;i<n;i++)ps.push({x:innerWidth/2,y:innerHeight*.4,vx:(Math.random()-.5)*14,vy:-Math.random()*13-3,r:Math.random()*6+3,c:cols[i%5],l:90});
 if(ps.length===n)loop()}
function loop(){cx.clearRect(0,0,cv.width,cv.height);ps=ps.filter(p=>p.l>0);
 ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.35;p.l--;cx.globalAlpha=Math.min(1,p.l/30);cx.fillStyle=p.c;cx.fillRect(p.x,p.y,p.r,p.r*.6)});
 if(ps.length)requestAnimationFrame(loop);else cx.clearRect(0,0,cv.width,cv.height)}
// ---------- Keyboard: 1-4 to answer, Enter for next ----------
addEventListener("keydown",e=>{if(!S.list||!$(".opt"))return;
 const n=+e.key;if(n>=1&&n<=4&&!S.locked){const b=document.querySelectorAll(".opt")[n-1];b&&b.click()}});
home();
