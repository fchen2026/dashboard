import{n as R}from"./core-DDXb6Xp5.js";import{I as k}from"./icons-MAhxDzb9.js";import{r as Q,a as Y,b as B,g as N}from"./charts-BQDrhLXk.js";import{s as K,p as U,e as F,a as w}from"./parsers-Bt4hCy--.js";import"./design-system-BaUf1BHL.js";const V=[{key:"daily",key_cn:"每日详情",icon:k.overview.emoji,label:"每日详情"},{key:"trend",key_cn:"周度趋势",icon:k.knowledge.emoji,label:"周度趋势"},{key:"knowledge",key_cn:"知识点",icon:k.weakness.emoji,label:"知识点"},{key:"errors",key_cn:"错题分析",icon:k.dailylog.emoji,label:"错题分析"}],J=160;let y=null;function X(){y||(y=document.createElement("style"),y.id="edu-detail-styles",y.textContent=`
/* Layout */
.edu-wrap { display: flex; flex-direction: column; height: 100%; min-height: calc(100vh - 60px); }
.edu-topbar {
  display: flex; align-items: center; gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-border-default);
  background: var(--color-bg-raised);
}
.edu-topbar-title { font-size: 18px; font-weight: 700; letter-spacing: -0.02em; color: var(--color-text-primary); }
.edu-back-btn {
  display: inline-flex; align-items: center; gap: var(--space-1);
  font-size: 13px; font-weight: 500; color: var(--color-text-secondary);
  background: none; border: none; cursor: pointer; padding: 6px 10px;
  border-radius: var(--radius-md); transition: all var(--transition-fast);
}
.edu-back-btn:hover { color: var(--color-text-primary); background: rgba(255,255,255,0.05); }

/* KPI Strip */
.edu-kpi-strip {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
}
.edu-kpi-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: 16px 20px;
  transition: border-color var(--transition-normal), background var(--transition-normal), transform var(--transition-normal);
}
.edu-kpi-card:hover { background: rgba(255,255,255,0.05); border-color: rgba(129,140,248,0.30); transform: translateY(-2px); }
.edu-kpi-label { font-size: 12px; font-weight: 500; color: var(--color-text-secondary); margin-bottom: 6px; }
.edu-kpi-value {
  font-size: 32px; font-weight: 700; letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums; color: var(--color-text-primary); line-height: 1.1;
}
.edu-kpi-delta {
  display: inline-flex; align-items: center; gap: 3px;
  font-size: 13px; font-weight: 500; margin-top: 4px;
}
.edu-kpi-delta.pos { color: var(--color-success); }
.edu-kpi-delta.neg { color: var(--color-danger); }

/* Body Split */
.edu-body { display: flex; flex: 1; overflow: hidden; }
.edu-nav {
  width: ${J}px; flex-shrink: 0;
  border-right: 1px solid var(--color-border-default);
  padding: var(--space-3) 0; overflow-y: auto;
  background: var(--color-bg-base);
}
.edu-nav-item {
  display: flex; align-items: center; gap: var(--space-2);
  padding: 10px 14px; margin: 2px var(--space-2);
  font-size: 13px; font-weight: 500; color: var(--color-text-secondary);
  border-radius: var(--radius-md); cursor: pointer;
  transition: all var(--transition-fast); position: relative;
}
.edu-nav-item:hover { color: var(--color-text-primary); background: rgba(255,255,255,0.03); }
.edu-nav-item.active {
  color: var(--color-accent);
  background: rgba(129,140,248, 0.08);
}
.edu-nav-item.active::before {
  content: ''; position: absolute; left: 0; top: 6px; bottom: 6px;
  width: 2px; background: var(--color-accent); border-radius: 0 2px 2px 0;
}

/* Main Content */
.edu-main { flex: 1; overflow-y: auto; padding: var(--space-6); }
.edu-date-bar {
  display: flex; align-items: center; gap: var(--space-2); flex-wrap: wrap;
  margin-bottom: var(--space-6);
}
.edu-date-label { font-size: 12px; font-weight: 500; color: var(--color-text-tertiary); margin-right: var(--space-2); }
.edu-date-pill {
  font-size: 12px; font-weight: 500; color: var(--color-text-secondary);
  padding: 5px 12px; border-radius: var(--radius-full);
  border: 1px solid var(--color-border-default); background: transparent;
  cursor: pointer; transition: all var(--transition-fast);
  font-variant-numeric: tabular-nums; font-family: var(--font-sans);
}
.edu-date-pill:hover { border-color: var(--color-border-strong); color: var(--color-text-primary); }
.edu-date-pill.active { background: var(--color-accent); color: #0A0A0F; border-color: var(--color-accent); }

/* Section Headers */
.edu-section-title {
  font-size: 16px; font-weight: 600; letter-spacing: -0.02em;
  color: var(--color-text-primary); margin-bottom: var(--space-5);
}
.edu-sub-title {
  font-size: 12px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-text-tertiary); margin-bottom: var(--space-3);
}

/* Cards */
.edu-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: 20px 24px;
  margin-bottom: var(--space-4);
  transition: border-color var(--transition-normal), transform var(--transition-normal);
}
.edu-card:hover { border-color: rgba(129,140,248,0.20); transform: translateY(-2px); }

/* Donut + Big Numbers */
.edu-daily-layout { display: grid; grid-template-columns: 220px 1fr; gap: var(--space-5); align-items: start; margin-bottom: var(--space-5); }
.edu-big-numbers { display: flex; flex-direction: column; gap: var(--space-3); justify-content: center; }
.edu-big-num-row { display: flex; align-items: baseline; gap: var(--space-2); padding: 8px 12px; border-radius: var(--radius-md); background: rgba(255,255,255,0.02); }
.edu-big-num {
  font-size: 28px; font-weight: 700; font-variant-numeric: tabular-nums;
  font-family: var(--font-mono); line-height: 1.1;
}
.edu-big-num.green { color: var(--color-success); }
.edu-big-num.red { color: var(--color-danger); }
.edu-big-num.gray { color: var(--color-text-secondary); }
.edu-big-label { font-size: 13px; color: var(--color-text-tertiary); }

/* Question List */
.edu-q-list { max-height: 480px; overflow-y: auto; }
.edu-q-item {
  display: flex; align-items: center; gap: var(--space-3);
  padding: 0 16px; height: 48px; border-bottom: 1px solid var(--color-border-default);
  transition: background var(--transition-fast);
}
.edu-q-item:hover { background: rgba(255,255,255,0.02); }
.edu-q-icon { width: 20px; font-size: 14px; flex-shrink: 0; text-align: center; }
.edu-q-icon.correct { color: var(--color-success); }
.edu-q-icon.wrong { color: var(--color-danger); }
.edu-q-icon.skip { color: var(--color-text-tertiary); }
.edu-q-name { flex: 1; font-size: 13px; color: var(--color-text-primary); }
.edu-q-meta { font-size: 12px; color: var(--color-text-tertiary); font-variant-numeric: tabular-nums; white-space: nowrap; }

/* Dual Chart Column */
.edu-dual { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
.edu-heatmap-wrap { margin-bottom: var(--space-5); }

/* Knowledge Table */
.edu-table-wrap { overflow-x: auto; }
.edu-table { width: 100%; border-collapse: collapse; }
.edu-table th {
  font-size: 11px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.04em; color: var(--color-text-tertiary);
  text-align: left; padding: 10px 14px;
  border-bottom: 1px solid var(--color-border-default);
}
.edu-table td {
  font-size: 13px; color: var(--color-text-primary); padding: 12px 14px;
  border-bottom: 1px solid var(--color-border-default);
  font-variant-numeric: tabular-nums; height: 44px; vertical-align: middle;
}
.edu-table tbody tr { transition: background var(--transition-fast); }
.edu-table tbody tr:hover td { background: rgba(255,255,255,0.02); }
.edu-progress-bar-bg { width: 100%; height: 6px; border-radius: var(--radius-full); background: rgba(255,255,255,0.05); overflow: hidden; }
.edu-progress-bar-fill { height: 100%; border-radius: var(--radius-full); transition: width 400ms ease-out; }

/* Error List */
.edu-error-list { display: flex; flex-direction: column; gap: var(--space-2); }
.edu-error-item {
  display: flex; align-items: center; gap: var(--space-3);
  padding: 10px 14px; border-radius: var(--radius-md);
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--color-border-default);
  transition: border-color var(--transition-fast);
}
.edu-error-item:hover { border-color: rgba(129,140,248,0.20); }
.edu-error-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; background: var(--color-danger); }
.edu-error-topic { flex: 1; font-size: 13px; color: var(--color-text-primary); }
.edu-error-count { font-size: 12px; font-weight: 600; color: var(--color-danger); font-variant-numeric: tabular-nums; }
.edu-error-sub { font-size: 12px; color: var(--color-text-tertiary); }

/* Skeleton */
@keyframes edu-pulse { 0% { opacity: 0.2; } 50% { opacity: 0.5; } 100% { opacity: 0.2; } }
.edu-skeleton { background: var(--color-bg-overlay); border-radius: var(--radius-md); animation: edu-pulse 1.8s ease-in-out infinite; }
.edu-skeleton-kpi { height: 40px; width: 70%; margin-bottom: 8px; }
.edu-skeleton-line { height: 13px; margin-bottom: 8px; }
.edu-skeleton-line:last-child { width: 55%; }

/* Empty State */
.edu-empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: var(--space-8); color: var(--color-text-tertiary);
  text-align: center; min-height: 200px;
}
.edu-empty-icon { font-size: 36px; margin-bottom: var(--space-3); opacity: 0.3; }
.edu-empty-text { font-size: 13px; color: var(--color-text-secondary); }

/* Fade In */
@keyframes edu-fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
.edu-fade { animation: edu-fadein 200ms ease-out; }

@media (prefers-reduced-motion: reduce) {
  .edu-fade { animation: none; }
  .edu-kpi-card, .edu-nav-item, .edu-date-pill, .edu-card, .edu-table tbody tr, .edu-error-item { transition: none; }
}
`,document.head.appendChild(y))}function Z(c){return`./education/${c}`}async function ee(c){const i={};return await Promise.all(c.map(async d=>{try{const t=await fetch(Z(d));t.ok&&(i[d]=await t.text())}catch{}})),i}function x(c){const i=c.match(/^(\d{4}-\d{2}-\d{2})\.md$/);return i?i[1]:null}function te(c){const i={};return c.forEach(d=>{const t=x(d);t&&(i[t]||(i[t]=[]),i[t].push(d))}),Object.entries(i).sort((d,t)=>t[0].localeCompare(d[0]))}function ae(c){const i={};return c.forEach(d=>{const t=x(d);if(!t)return;const o=new Date(`${t}T00:00:00+08:00`),e=24+Math.floor((o-new Date("2026-06-08T00:00:00+08:00"))/864e5/7);i[e]||(i[e]=[]),i[e].push(d)}),Object.entries(i).map(([d,t])=>({week:+d,files:t.sort().reverse()})).sort((d,t)=>t.week-d.week)}function re(c){const i=K(c),d={date:"",title:"",totalRate:0,totalCorrect:0,totalQ:0,subjects:{},questions:[]},t=i.match(/\*\*总分\*\*[：:]\s*(\d+)\/(\d+)\s*\(([\d.]+)%\)/);if(t)d.totalCorrect=parseInt(t[1]),d.totalQ=parseInt(t[2]),d.totalRate=parseFloat(t[3]);else{const e=i.match(/正确率[：:]\s*([\d.]+)%/);e&&(d.totalRate=parseFloat(e[1]))}U(F(i,"科目得分")).rows.forEach(e=>{const r=e[0]||"",a=parseInt(e[2])||0,s=parseInt(e[3])||0;r&&(d.subjects[r]={score:e[1]||"",correct:a,total:s,pct:w(e[4])||w(e[2])||0})});const l=["错题解析","题目解析","答题解析"];for(const e of l){const r=F(i,e);if(!r)continue;const a=r.split(`
`);for(const s of a){const p=s.trim(),u=p.match(/^[-✓✗—]\s*(.+)/);if(u){const v=p[0];d.questions.push({name:u[1],status:v==="✓"||v==="-"?v==="✓"?"correct":"skip":"wrong",icon:v})}}if(d.questions.length>0)break}return d}function ie(c){const i=[],d=(c||"").split(`
`);let t=null,o=null;for(const l of d){const e=l.trim(),r=e.match(/^##\s*第(\d+)周/);if(r){t&&i.push(t),t={week:+r[1],kpis:{},p0:[],mastered:[],changes:[]},o=null;continue}if(t){if(e.startsWith("###")&&e.includes("数据概览")){o="overview";continue}if(e.startsWith("###")&&e.includes("P0")){o="p0";continue}if(e.startsWith("###")&&e.includes("已攻克")){o="mastered";continue}if(e.startsWith("###")&&e.includes("知识点")){o="changes";continue}if(e.startsWith("###")||e.startsWith("##")){o=null;continue}if(o==="overview"&&e.startsWith("|")&&e.endsWith("|")&&!e.includes("---")){const a=e.split("|").slice(1,-1).map(s=>s.trim());a.length>=2&&(t.kpis[a[0]]=a[1])}if(o==="p0"&&/^\d+\./.test(e)&&t.p0.push(e.replace(/^\d+\.\s*/,"")),o==="changes"&&e.startsWith("|")&&e.endsWith("|")&&!e.includes("---")&&!e.includes("类型")){const a=e.split("|").slice(1,-1).map(s=>s.trim());a.length>=2&&t.changes.push(a)}}}return t&&i.push(t),i}function oe(c){const{el:i,dailyData:d,selectedDate:t,theme:o}=c,l=d[t];let e='<div class="edu-fade">';if(!l){i.innerHTML=e+`<div class="edu-empty"><div class="edu-empty-icon">📭</div><div class="edu-empty-text">${t} 暂无数据</div></div></div>`;return}const r=l.totalCorrect||0,a=(l.totalQ||0)-r,s=l.totalQ||0;e+=`<div class="edu-section-title">${t} 学习详情</div>`,e+='<div class="edu-daily-layout">',e+='<div><canvas id="edu-daily-donut" style="width:100%;height:200px"></canvas></div>',e+='<div class="edu-big-numbers">',e+=`<div class="edu-big-num-row"><span class="edu-big-num green">${r}</span><span class="edu-big-label">正确</span></div>`,e+=`<div class="edu-big-num-row"><span class="edu-big-num red">${a}</span><span class="edu-big-label">错误</span></div>`,e+=`<div class="edu-big-num-row"><span class="edu-big-num gray">${s}</span><span class="edu-big-label">总题量</span></div>`,e+="</div></div>";const p=l.questions||[];p.length>0&&(e+='<div class="edu-sub-title">题目列表</div><div class="edu-q-list edu-card">',p.forEach((u,v)=>{const h=u.status==="correct"?"✓":u.status==="wrong"?"✗":"—",m=u.status==="correct"?"correct":u.status==="wrong"?"wrong":"skip";e+=`<div class="edu-q-item"><span class="edu-q-icon ${m}">${h}</span><span class="edu-q-name">${u.name}</span><span class="edu-q-meta">#${v+1}</span></div>`}),e+="</div>"),e+="</div>",i.innerHTML=e,setTimeout(()=>{const u=[];r>0&&u.push({label:"正确",value:r,color:o.accent}),a>0&&u.push({label:"错误",value:a,color:"#F87171"}),u.length===0&&s>0&&u.push({label:"未做",value:s,color:"#3A3A4A"});const v=document.getElementById("edu-daily-donut");v&&u.length>0&&Q(v,u,{area:"education"})},50)}function se(c){const{el:i,weekGroups:d,dailyData:t,theme:o}=c;let l='<div class="edu-fade"><div class="edu-section-title">周度正确率 & 题量趋势</div>';const e=[...d].sort((p,u)=>p.week-u.week),r=e.map(p=>`第${p.week}周`),a=[],s=[];if(e.forEach(p=>{const u=p.files.map(g=>x(g)).filter(Boolean);let v=0,h=0,m=0;u.forEach(g=>{const b=t[g];b&&b.totalRate&&(v+=b.totalRate,m++),b&&b.totalQ&&(h+=b.totalQ)}),a.push(m>0?Math.round(v/m):null),s.push(h)}),r.length<2){i.innerHTML=l+'<div class="edu-empty"><div class="edu-empty-text">需要至少 2 周数据才能展示趋势</div></div></div>';return}l+='<div class="edu-dual">',l+='<div class="edu-card"><canvas id="edu-trend-rate" style="width:100%;height:280px"></canvas></div>',l+='<div class="edu-card"><canvas id="edu-trend-volume" style="width:100%;height:280px"></canvas></div>',l+="</div></div>",i.innerHTML=l,setTimeout(()=>{const p=document.getElementById("edu-trend-rate");p&&B(p,{labels:r,series:[{name:"正确率",data:a,color:o.accent}]},{area:"education",minValue:50,maxValue:100});const u=document.getElementById("edu-trend-volume");u&&B(u,{labels:r,series:[{name:"题量",data:s,color:o.accent}]},{area:"education",minValue:0})},50)}function ne(c){const{el:i,weeklySummary:d,theme:t}=c;let o='<div class="edu-fade"><div class="edu-section-title">知识点掌握度分析</div>';const l={};d.forEach(r=>{(r.changes||[]).forEach(a=>{const s=a[0]||"";if(!s||s==="知识点")return;const p=w(a[1])||w(a[2])||0;l[s]||(l[s]={name:s,mastery:p,status:a[1]||a[2]||"",advice:a[3]||a[4]||"",count:0}),l[s].count++,l[s].mastery=Math.max(l[s].mastery,p)})});const e=Object.values(l).sort((r,a)=>r.mastery-a.mastery);if(e.length===0){i.innerHTML=o+'<div class="edu-empty"><div class="edu-empty-icon">📚</div><div class="edu-empty-text">暂无知识点数据</div></div></div>';return}o+='<div class="edu-heatmap-wrap"><div class="edu-sub-title">掌握度热力图</div>',o+='<div class="edu-card"><canvas id="edu-heatmap" style="width:100%;height:220px"></canvas></div></div>',o+='<div class="edu-sub-title">知识点明细</div>',o+='<div class="edu-table-wrap edu-card"><table class="edu-table"><thead><tr><th>知识点</th><th>掌握度</th><th>进度</th><th>建议</th></tr></thead><tbody>',e.forEach(r=>{const a=r.mastery||0;o+=`<tr><td>${r.name}</td><td style="font-variant-numeric:tabular-nums">${a}%</td><td><div class="edu-progress-bar-bg"><div class="edu-progress-bar-fill" style="width:${a}%;background:linear-gradient(90deg,${t.accent}50,${t.accent})"></div></div></td><td style="font-size:12px;color:var(--color-text-tertiary)">${r.advice||r.status||"—"}</td></tr>`}),o+="</tbody></table></div></div>",i.innerHTML=o,setTimeout(()=>{const r=Math.min(e.length,8),a=Math.ceil(e.length/r),s=[];for(let u=0;u<a;u++){const v=[];for(let h=0;h<r;h++){const m=u*r+h;v.push(m<e.length?{label:e[m].name,value:e[m].mastery}:{label:"",value:0})}s.push(v)}const p=document.getElementById("edu-heatmap");if(p){const u=s.map(m=>{var g,b;return((b=(g=m[0])==null?void 0:g.label)==null?void 0:b.substring(0,8))||""}),v=s[0].map(m=>{var g;return((g=m==null?void 0:m.label)==null?void 0:g.substring(0,8))||""}),h=s.map(m=>m.map(g=>g.value>0?g.value:null));Y(p,{rows:u,cols:v,values:h},{area:"education"})}},50)}function de(c){const{el:i,dailyData:d}=c;let t='<div class="edu-fade"><div class="edu-section-title">错题分析</div>';const o={};Object.values(d).forEach(e=>{(e.questions||[]).forEach(r=>{if(r.status==="wrong"){const a=r.name.substring(0,24);o[a]||(o[a]={name:a,count:0,examples:[]}),o[a].count++,o[a].examples.length<3&&o[a].examples.push(r.name)}})});const l=Object.values(o).sort((e,r)=>r.count-e.count);if(l.length===0){i.innerHTML=t+'<div class="edu-empty"><div class="edu-empty-icon">🎉</div><div class="edu-empty-text">暂无错题记录</div></div></div>';return}t+='<div style="display:grid;grid-template-columns:260px 1fr;gap:var(--space-5);align-items:start">',t+='<div><canvas id="edu-error-pie" style="width:100%;height:240px"></canvas></div>',t+='<div class="edu-error-list">',l.forEach(e=>{t+=`<div class="edu-error-item"><span class="edu-error-dot"></span><span class="edu-error-topic">${e.name}</span><span class="edu-error-count">${e.count}题</span><span class="edu-error-sub">${e.examples[0]||""}</span></div>`}),t+="</div></div></div>",i.innerHTML=t,setTimeout(()=>{const e=l.slice(0,6).map((a,s)=>{const p=(1-s*.12).toFixed(2);return{label:a.name,value:a.count,color:`rgba(129,140,248,${p})`}});if(l.length>6){const a=l.slice(6).reduce((s,p)=>s+p.count,0);a>0&&e.push({label:"其他",value:a,color:"rgba(129,140,248,0.10)"})}const r=document.getElementById("edu-error-pie");r&&e.length>0&&Q(r,e,{area:"education"})},50)}function le(){return`
    <div class="edu-wrap">
      <div class="edu-topbar"><div class="edu-skeleton" style="width:120px;height:28px"></div></div>
      <div class="edu-kpi-strip">${Array(4).fill('<div class="edu-kpi-card"><div class="edu-skeleton edu-skeleton-kpi"></div><div class="edu-skeleton edu-skeleton-line"></div></div>').join("")}</div>
      <div class="edu-body">
        <div class="edu-nav">${Array(4).fill('<div style="padding:8px 14px"><div class="edu-skeleton edu-skeleton-line"></div></div>').join("")}</div>
        <main class="edu-main">
          <div class="edu-card"><div class="edu-skeleton edu-skeleton-kpi"></div><div class="edu-skeleton edu-skeleton-line"></div><div class="edu-skeleton edu-skeleton-line"></div><div class="edu-skeleton edu-skeleton-line"></div></div>
        </main>
      </div>
    </div>`}async function fe(c,i,d){var I;X();const t=document.getElementById("header"),o=document.getElementById("site-title");t&&(t.style.background="",t.style.boxShadow=""),o&&(o.innerHTML="📚&nbsp;&nbsp;学情报告",o.style.color="");let l=[];try{const n=await fetch("./education/index.json");n.ok&&(l=await n.json())}catch{}if(l.length===0){c.innerHTML='<div class="edu-empty"><div class="edu-empty-icon">📭</div><div class="edu-empty-text">暂无学情数据</div></div>';return}c.innerHTML=le();const e=l.filter(n=>n.endsWith(".md")),r=await ee(e),a=te(e),s=ae(e),p={};e.forEach(n=>{const f=r[n];if(!f)return;const T=x(n);if(!T)return;const L=re(f);L.date=T;const A=f.match(/^#\s*(.+)/m);A&&(L.title=A[1]),p[T]=L});const u=ie(r["weekly-summary.md"]||""),v=a.map(([n])=>n),h=v.length>0?v[0]:"";let m=h;const g=V.find(n=>n.key===d);let b=g?g.key:"daily";const _=N("education");c.innerHTML=`
    <div class="edu-wrap">
      <div class="edu-topbar">
        <button class="edu-back-btn" data-nav="">← 首页</button>
        <span class="edu-topbar-title">📚 学情报告</span>
      </div>
      <div class="edu-kpi-strip" id="edu-kpi-strip"></div>
      <div class="edu-body">
        <nav class="edu-nav" id="edu-nav"></nav>
        <main class="edu-main" id="edu-main">
          <div class="edu-date-bar" id="edu-date-bar"></div>
          <div id="edu-content"></div>
        </main>
      </div>
    </div>`,(I=c.querySelector(".edu-back-btn"))==null||I.addEventListener("click",n=>{n.preventDefault(),R("")});const S=p[h],D=s.find(n=>n.week===(s.length>0?s[0].week:26)),O=D?D.files.map(n=>x(n)).filter(Boolean):[];let q=0,z=0,j=0,$=0;O.forEach(n=>{const f=p[n];f&&(q+=f.totalCorrect||0,z+=f.totalQ||0,f.totalRate&&(j+=f.totalRate,$++))});const G=$>0?Math.round(j/$):0,P=c.querySelector("#edu-kpi-strip");P.innerHTML=`
    <div class="edu-kpi-card"><div class="edu-kpi-label">今日正确率</div><div class="edu-kpi-value">${S?S.totalRate+"%":"—"}</div></div>
    <div class="edu-kpi-card"><div class="edu-kpi-label">本周正确率</div><div class="edu-kpi-value">${G}%</div></div>
    <div class="edu-kpi-card"><div class="edu-kpi-label">本周正确数</div><div class="edu-kpi-value">${q}</div></div>
    <div class="edu-kpi-card"><div class="edu-kpi-label">本周总题量</div><div class="edu-kpi-value">${z}</div></div>`;const E=c.querySelector("#edu-nav");E.innerHTML=V.map(n=>`<div class="edu-nav-item${n.key===b?" active":""}" data-section="${n.key}"><span>${n.icon}</span><span>${n.label}</span></div>`).join(""),E.querySelectorAll(".edu-nav-item").forEach(n=>{n.addEventListener("click",()=>{E.querySelectorAll(".edu-nav-item").forEach(f=>f.classList.remove("active")),n.classList.add("active"),b=n.dataset.section,R(`#education/${b}`),M()})});const C=c.querySelector("#edu-date-bar");function W(){const n=v.slice(0,12);C.innerHTML=`<span class="edu-date-label">📅 日期：</span>${n.map(f=>`<button class="edu-date-pill${f===m?" active":""}" data-date="${f}">${f.slice(5)}</button>`).join("")}`,C.querySelectorAll(".edu-date-pill").forEach(f=>{f.addEventListener("click",()=>{m=f.dataset.date,W(),M()})})}W();const H=c.querySelector("#edu-content");function M(){const n={el:H,dailyData:p,weekGroups:s,weeklySummary:u,selectedDate:m,theme:_};switch(H.classList.add("edu-fade"),b){case"daily":oe(n);break;case"trend":se(n);break;case"knowledge":ne(n);break;case"errors":de(n);break}}M()}export{V as SECTIONS,fe as renderEduDetail};
