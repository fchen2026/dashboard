import{_,n as E}from"./core-B_Wlt-Ld.js";import"./design-system-Du44DDix.js";import{f as H}from"./charts-BVitNI1m.js";import{s as P,h as p,i as x,b as L}from"./parsers-C5lwdAJe.js";const z=[{key:"cases",key_cn:"案件总览",label:"案件总览"},{key:"timeline",key_cn:"时间线",label:"时间线"},{key:"risks",key_cn:"风险分析",label:"风险分析"}],j=160;let v=null;function A(){v||(v=document.createElement("style"),v.id="legal-detail-styles",v.textContent=`
.legal-wrap { display: flex; flex-direction: column; height: 100%; min-height: calc(100vh - 60px); }
.legal-topbar {
  display: flex; align-items: center; gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-border-default);
  background: var(--color-bg-raised);
}
.legal-topbar-title { font-size: 18px; font-weight: 700; letter-spacing: -0.02em; color: var(--color-text-primary); }
.legal-back-btn {
  display: inline-flex; align-items: center; gap: var(--space-1);
  font-size: 13px; font-weight: 500; color: var(--color-text-secondary);
  background: none; border: none; cursor: pointer; padding: 6px 10px;
  border-radius: var(--radius-md); transition: all var(--transition-fast);
}
.legal-back-btn:hover { color: var(--color-text-primary); background: rgba(255,255,255,0.05); }

/* KPI Strip */
.legal-kpi-strip {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
}
.legal-kpi-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: 16px 20px;
  transition: border-color var(--transition-normal), background var(--transition-normal), transform var(--transition-normal);
}
.legal-kpi-card:hover { background: rgba(255,255,255,0.05); border-color: rgba(248,113,113,0.30); transform: translateY(-2px); }
.legal-kpi-label { font-size: 12px; font-weight: 500; color: var(--color-text-secondary); margin-bottom: 6px; }
.legal-kpi-value {
  font-size: 32px; font-weight: 700; letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums; color: var(--color-text-primary); line-height: 1.1;
}

/* Body Split */
.legal-body { display: flex; flex: 1; overflow: hidden; }
.legal-nav {
  width: ${j}px; flex-shrink: 0;
  border-right: 1px solid var(--color-border-default);
  padding: var(--space-3) 0; overflow-y: auto;
  background: var(--color-bg-base);
}
.legal-nav-item {
  display: flex; align-items: center; gap: var(--space-2);
  padding: 10px 14px; margin: 2px var(--space-2);
  font-size: 13px; font-weight: 500; color: var(--color-text-secondary);
  border-radius: var(--radius-md); cursor: pointer;
  transition: all var(--transition-fast); position: relative;
}
.legal-nav-item:hover { color: var(--color-text-primary); background: rgba(255,255,255,0.03); }
.legal-nav-item.active {
  color: var(--color-accent);
  background: rgba(248,113,113, 0.08);
}
.legal-nav-item.active::before {
  content: ''; position: absolute; left: 0; top: 6px; bottom: 6px;
  width: 2px; background: var(--color-accent); border-radius: 0 2px 2px 0;
}

/* Main Content */
.legal-main { flex: 1; overflow-y: auto; padding: var(--space-6); }

/* Section Headers */
.legal-section-title {
  font-size: 16px; font-weight: 600; letter-spacing: -0.02em;
  color: var(--color-text-primary); margin-bottom: var(--space-5);
}
.legal-sub-title {
  font-size: 12px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-text-tertiary); margin-bottom: var(--space-3);
}

/* Cards */
.legal-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: 20px 24px;
  margin-bottom: var(--space-4);
  transition: border-color var(--transition-normal), transform var(--transition-normal);
}
.legal-card:hover { border-color: rgba(248,113,113,0.20); transform: translateY(-2px); }

/* Case Card List */
.legal-case-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: 16px 20px;
  margin-bottom: var(--space-3);
  transition: border-color var(--transition-normal), transform var(--transition-normal);
}
.legal-case-card:hover { border-color: rgba(248,113,113,0.20); transform: translateY(-2px); }
.legal-case-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: var(--space-2); }
.legal-case-id { font-family: var(--font-mono); font-size: 12px; color: var(--color-text-tertiary); letter-spacing: 0.02em; }
.legal-case-name { font-size: 15px; font-weight: 600; color: var(--color-text-primary); }
.legal-case-type { font-size: 11px; color: var(--color-text-secondary); }
.legal-case-row { display: flex; align-items: center; gap: var(--space-3); flex-wrap: wrap; margin-bottom: 6px; }
.legal-case-date { font-size: 12px; color: var(--color-text-tertiary); font-variant-numeric: tabular-nums; }
.legal-case-summary { font-size: 12px; color: var(--color-text-secondary); line-height: 1.5; margin-top: 6px; }

/* Status Pills */
.legal-pill {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 11px; font-weight: 500; padding: 3px 10px;
  border-radius: var(--radius-full); letter-spacing: 0.02em;
}
.legal-pill.active { background: rgba(245,158,11,0.12); color: var(--color-warning); }
.legal-pill.closed { background: rgba(34,197,94,0.12); color: var(--color-success); }
.legal-pill.pending { background: rgba(248,113,113,0.12); color: var(--color-danger); }

/* Timeline */
.legal-timeline { position: relative; padding-left: 28px; }
.legal-timeline::before { content: ''; position: absolute; left: 5px; top: 0; bottom: 0; width: 0; border-left: 2px dashed rgba(248,113,113,0.30); }
.legal-tl-item { position: relative; margin-bottom: var(--space-5); padding-left: 20px; }
.legal-tl-node {
  position: absolute; left: -23px; top: 4px;
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--color-bg-base);
  border: 2px solid var(--color-accent);
}
.legal-tl-date { font-size: 12px; color: var(--color-text-tertiary); font-variant-numeric: tabular-nums; margin-bottom: 4px; }
.legal-tl-title { font-size: 14px; font-weight: 600; color: var(--color-text-primary); margin-bottom: 2px; }
.legal-tl-desc { font-size: 12px; color: var(--color-text-secondary); line-height: 1.5; }
.legal-tl-pill {
  display: inline-block; font-size: 10px; font-weight: 500; padding: 2px 8px;
  border-radius: var(--radius-full); letter-spacing: 0.04em; margin-top: 4px;
  background: rgba(248,113,113,0.10); color: var(--color-accent);
}

/* Risk Gauge */
.legal-risk-layout { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-5); align-items: start; }
.legal-risk-factors { display: flex; flex-direction: column; gap: var(--space-3); }
.legal-risk-factor {
  padding: 10px 14px; border-radius: var(--radius-md);
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--color-border-default);
}
.legal-risk-factor-name { font-size: 13px; font-weight: 500; color: var(--color-text-primary); margin-bottom: 6px; }
.legal-risk-bar-bg { width: 100%; height: 5px; border-radius: var(--radius-full); background: rgba(255,255,255,0.05); overflow: hidden; }
.legal-risk-bar-fill { height: 100%; border-radius: var(--radius-full); transition: width 400ms ease-out; }
.legal-risk-factor-pct { font-size: 12px; font-weight: 600; color: var(--color-text-secondary); margin-top: 4px; font-variant-numeric: tabular-nums; }

/* Risk Summary */
.legal-risk-summary {
  font-size: 13px; color: var(--color-text-secondary);
  line-height: 1.6; padding: 16px 20px;
  background: rgba(248,113,113,0.04);
  border-left: 3px solid var(--color-accent);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  margin-top: var(--space-4);
}

/* Skeleton */
@keyframes legal-pulse { 0% { opacity: 0.2; } 50% { opacity: 0.5; } 100% { opacity: 0.2; } }
.legal-skeleton { background: var(--color-bg-overlay); border-radius: var(--radius-md); animation: legal-pulse 1.8s ease-in-out infinite; }
.legal-skeleton-kpi { height: 40px; width: 70%; margin-bottom: 8px; }
.legal-skeleton-line { height: 13px; margin-bottom: 8px; }
.legal-skeleton-line:last-child { width: 55%; }

/* Empty State */
.legal-empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: var(--space-8); color: var(--color-text-tertiary);
  text-align: center; min-height: 200px;
}
.legal-empty-icon { font-size: 36px; margin-bottom: var(--space-3); opacity: 0.3; }
.legal-empty-text { font-size: 13px; color: var(--color-text-secondary); }

/* Fade In */
@keyframes legal-fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
.legal-fade { animation: legal-fadein 200ms ease-out; }

@media (prefers-reduced-motion: reduce) {
  .legal-fade { animation: none; }
  .legal-kpi-card, .legal-nav-item, .legal-case-card, .legal-card { transition: none; }
}
`,document.head.appendChild(v))}function F(o){return`./legal/${o}`}async function I(o){const s={};return await Promise.all(o.map(async r=>{try{const e=await fetch(F(r));e.ok&&(s[r]=await e.text())}catch{}})),s}function M(o){const s=P(o),r={cases:[],timeline:[],risks:[]},e=p(s,"案件列表")||p(s,"案件总览")||"";x(e).rows.forEach(a=>{a.length<3||r.cases.push({caseNo:a[0]||"",name:a[1]||"",type:a[2]||"",status:(a[3]||"").trim(),date:a[4]||"",summary:a[5]||"",amount:a[6]||a[5]||""})});const t=p(s,"时间线")||p(s,"案件时间线")||"";x(t).rows.forEach(a=>{a.length<2||r.timeline.push({date:a[0]||"",event:a[1]||"",type:a[2]||"",caseRef:a[3]||"",note:a[4]||""})});const i=p(s,"风险评估")||p(s,"风险分析")||"";return x(i).rows.forEach(a=>{a.length<2||r.risks.push({factor:a[0]||"",level:a[1]||"",pct:L(a[2])||L(a[1])||0,mitigation:a[3]||a[2]||""})}),r}function N(o){const s=new Date("2026-06-26"),r=`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`;let e=0,n=0,t=0,c=0;return o.forEach(i=>{const d=(i.status||"").trim();/进行中|处理中|审理中|仲裁中/i.test(d)?c++:/已结案|已判决|已裁决|closed/i.test(d)?t++:e++,i.date&&i.date.startsWith(r)&&n++}),{active:e,monthlyNew:n,closed:t,inProgress:c}}function R(o){const{el:s,cases:r}=o;let e='<div class="legal-fade"><div class="legal-section-title">案件总览</div>';if(r.length===0){e+='<div class="legal-empty"><div class="legal-empty-icon">⚖️</div><div class="legal-empty-text">暂无案件数据</div></div></div>',s.innerHTML=e;return}r.forEach(n=>{const t=(n.status||"").trim();let c,i;/进行中|处理中|审理中|仲裁中/i.test(t)?(c="active",i=t||"进行中"):/已结案|已判决|已裁决|closed/i.test(t)?(c="closed",i=t||"已结案"):(c="pending",i=t||"待处理"),e+=`<div class="legal-case-card">
      <div class="legal-case-header">
        <span class="legal-case-id">${n.caseNo||"—"}</span>
        <span class="legal-pill ${c}">${i}</span>
      </div>
      <div class="legal-case-name">${n.name}</div>
      <div class="legal-case-row">
        <span class="legal-case-type">${n.type||""}</span>
        <span class="legal-case-date">${n.date||""}</span>
      </div>
      <div class="legal-case-summary">${n.summary||""}</div>
    </div>`}),e+="</div>",s.innerHTML=e}function Y(o){const{el:s,timeline:r}=o;let e='<div class="legal-fade"><div class="legal-section-title">案件时间线</div>';if(r.length===0){e+='<div class="legal-empty"><div class="legal-empty-icon">📅</div><div class="legal-empty-text">暂无时间线数据</div></div></div>',s.innerHTML=e;return}const n=[...r].sort((t,c)=>{const i=t.date.replace(/[年月]/g,"-").replace(/日/g,"");return c.date.replace(/[年月]/g,"-").replace(/日/g,"").localeCompare(i)});e+='<div class="legal-timeline">',n.forEach(t=>{e+=`<div class="legal-tl-item">
      <div class="legal-tl-node"></div>
      <div class="legal-tl-date">${t.date||""}</div>
      <div class="legal-tl-title">${t.event||""}</div>
      ${t.note?`<div class="legal-tl-desc">${t.note}</div>`:""}
      ${t.type?`<span class="legal-tl-pill">${t.type}</span>`:""}
    </div>`}),e+="</div></div>",s.innerHTML=e}function q(o){const{el:s,risks:r}=o;let e='<div class="legal-fade"><div class="legal-section-title">风险分析</div>';if(r.length===0){e+='<div class="legal-empty"><div class="legal-empty-icon">🛡️</div><div class="legal-empty-text">暂无风险评估数据</div></div></div>',s.innerHTML=e;return}Math.max(...r.map(i=>i.pct||0),1);const n=Math.round(r.reduce((i,d)=>i+(d.pct||0),0)/r.length);e+='<div class="legal-risk-layout">',e+='<div class="legal-card"><canvas id="legal-gauge" style="width:100%;height:240px"></canvas></div>',e+='<div class="legal-risk-factors">',e+='<div class="legal-sub-title">风险因素</div>',r.forEach(i=>{const d=i.pct||0,a=d>=70?"linear-gradient(90deg, #F87171, rgba(248,113,113,0.30))":d>=40?"linear-gradient(90deg, #F59E0B, rgba(245,158,11,0.30))":"linear-gradient(90deg, #22C55E, rgba(34,197,94,0.30))";e+=`<div class="legal-risk-factor">
      <div class="legal-risk-factor-name">${i.factor}</div>
      <div class="legal-risk-bar-bg"><div class="legal-risk-bar-fill" style="width:${d}%;background:${a}"></div></div>
      <div class="legal-risk-factor-pct">${d}%</div>
    </div>`}),e+="</div></div>";const t=r.filter(i=>(i.pct||0)>=60);let c="";t.length>0?c=`⚠️ 当前有 ${t.length} 个高风险因素需关注：${t.map(i=>i.factor).join("、")}。综合风险评分 ${n}%，建议优先处理。`:c=`✅ 当前整体风险可控，综合风险评分 ${n}%。各风险因素均在可接受范围内。`,e+='<div class="legal-risk-summary">'+c+"</div>",e+="</div>",s.innerHTML=e,setTimeout(()=>{H("legal-gauge",{value:Math.min(n,100),max:100,label:"综合风险"})},50)}function V(){return`
    <div class="legal-wrap">
      <div class="legal-topbar"><div class="legal-skeleton" style="width:120px;height:28px"></div></div>
      <div class="legal-kpi-strip">${Array(4).fill('<div class="legal-kpi-card"><div class="legal-skeleton legal-skeleton-kpi"></div><div class="legal-skeleton legal-skeleton-line"></div></div>').join("")}</div>
      <div class="legal-body">
        <div class="legal-nav">${Array(3).fill('<div style="padding:8px 14px"><div class="legal-skeleton legal-skeleton-line"></div></div>').join("")}</div>
        <main class="legal-main">
          <div class="legal-card"><div class="legal-skeleton legal-skeleton-kpi"></div><div class="legal-skeleton legal-skeleton-line"></div><div class="legal-skeleton legal-skeleton-line"></div></div>
        </main>
      </div>
    </div>`}async function K(o,s,r){var T;A();const[{setTheme:e}]=await Promise.all([_(()=>import("./design-system-Du44DDix.js").then(l=>l.d),[])]);e("legal");const n=document.getElementById("header"),t=document.getElementById("site-title");n&&(n.style.background="",n.style.boxShadow=""),t&&(t.innerHTML="⚖️&nbsp;&nbsp;法务看板",t.style.color="",t.classList.add("detail-badge"));let c=[];try{const l=await fetch("./legal/index.json");l.ok&&(c=await l.json())}catch{}if(c.length===0){o.innerHTML='<div class="legal-empty"><div class="legal-empty-icon">⚖️</div><div class="legal-empty-text">暂无法律案件数据</div></div>';return}o.innerHTML=V();const i=c.filter(l=>l.endsWith(".md")),d=await I(i);let a=[];i.forEach(l=>{const g=d[l];if(!g)return;const u=M(g);a.push(...u.cases)});let k=[],y=[];i.forEach(l=>{const g=d[l];if(!g)return;const u=M(g);k.push(...u.timeline),y.push(...u.risks)});const h=new Set;a=a.filter(l=>{const g=l.caseNo+l.name;return h.has(g)?!1:(h.add(g),!0)});const w=z.find(l=>l.key===r);let m=w?w.key:"cases";const f=N(a);o.innerHTML=`
    <div class="legal-wrap">
      <div class="legal-topbar">
        <button class="legal-back-btn" data-nav="">← 首页</button>
        <span class="legal-topbar-title">⚖️ 法务看板</span>
      </div>
      <div class="legal-kpi-strip" id="legal-kpi-strip"></div>
      <div class="legal-body">
        <nav class="legal-nav" id="legal-nav"></nav>
        <main class="legal-main" id="legal-main">
          <div id="legal-content"></div>
        </main>
      </div>
    </div>`,(T=o.querySelector(".legal-back-btn"))==null||T.addEventListener("click",l=>{l.preventDefault(),E("")});const C=o.querySelector("#legal-kpi-strip");C.innerHTML=`
    <div class="legal-kpi-card"><div class="legal-kpi-label">活跃案件</div><div class="legal-kpi-value">${f.active}</div></div>
    <div class="legal-kpi-card"><div class="legal-kpi-label">本月新增</div><div class="legal-kpi-value">${f.monthlyNew}</div></div>
    <div class="legal-kpi-card"><div class="legal-kpi-label">已结案</div><div class="legal-kpi-value">${f.closed}</div></div>
    <div class="legal-kpi-card"><div class="legal-kpi-label">进行中</div><div class="legal-kpi-value">${f.inProgress}</div></div>`;const b=o.querySelector("#legal-nav");b.innerHTML=z.map(l=>`<div class="legal-nav-item${l.key===m?" active":""}" data-section="${l.key}"><span>${l.label}</span></div>`).join(""),b.querySelectorAll(".legal-nav-item").forEach(l=>{l.addEventListener("click",()=>{b.querySelectorAll(".legal-nav-item").forEach(g=>g.classList.remove("active")),l.classList.add("active"),m=l.dataset.section,E(`#legal/${m}`),S()})});const $=o.querySelector("#legal-content");function S(){const l={el:$,cases:a,timeline:k,risks:y};switch($.classList.add("legal-fade"),m){case"cases":R(l);break;case"timeline":Y(l);break;case"risks":q(l);break}}S()}export{z as SECTIONS,N as computeKPIs,K as renderLegalDetail};
