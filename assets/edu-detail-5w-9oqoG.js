import{n as H}from"./core-B_Wlt-Ld.js";import"./design-system-Du44DDix.js";import{r as N,a as O,b as L,c as V,d as W,g as G}from"./charts-BVitNI1m.js";import{p as Q,a as _,b as K,c as Y,d as U}from"./parsers-C5lwdAJe.js";const J=[{key:"overview",label:"总览",icon:"📊"},{key:"daily",label:"每日详情",icon:"📅"},{key:"knowledge",label:"知识点",icon:"🧠"},{key:"errors",label:"错题分析",icon:"❌"},{key:"correlation",label:"关联分析",icon:"🔗"}],X=160,F={accent:"#818CF8",success:"#22C55E",warning:"#F59E0B",danger:"#F87171",mastered:"#34D399"};let $=null;function Z(){$||($=document.createElement("style"),$.id="edu-detail-styles-v2",$.textContent=`
/* ── Layout ── */
.edu-wrap { display: flex; flex-direction: column; height: 100%; min-height: calc(100vh - 60px); }
.edu-topbar {
  display: flex; align-items: center; gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-border-default);
  background: var(--color-bg-raised);
}
.edu-topbar-title { font-size: 18px; font-weight: 700; letter-spacing: -0.02em; color: var(--color-text-primary, #F0F0F5); }
.edu-back-btn {
  display: inline-flex; align-items: center; gap: var(--space-1);
  font-size: 13px; font-weight: 500; color: var(--color-text-secondary, #A0A0B8);
  background: none; border: none; cursor: pointer; padding: 6px 10px;
  border-radius: var(--radius-md); transition: all var(--transition-fast);
}
.edu-back-btn:hover { color: var(--color-text-primary, #F0F0F5); background: rgba(255,255,255,0.05); }

/* ── KPI Strip ── */
.edu-kpi-strip {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
}
.edu-kpi-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg, 12px); padding: 16px 20px;
  transition: border-color var(--transition-normal), background var(--transition-normal), transform var(--transition-normal);
  position: relative; overflow: hidden;
}
.edu-kpi-card::before {
  content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle at 30% 20%, rgba(129,140,248,0.04) 0%, transparent 60%);
  opacity: 0; transition: opacity var(--transition-normal);
}
.edu-kpi-card:hover { background: rgba(255,255,255,0.05); border-color: rgba(129,140,248,0.30); transform: translateY(-2px); }
.edu-kpi-card:hover::before { opacity: 1; }
.edu-kpi-label { font-size: 12px; font-weight: 500; color: var(--color-text-secondary, #A0A0B8); margin-bottom: 6px; position: relative; z-index: 1; }
.edu-kpi-value {
  font-size: 32px; font-weight: 700; letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums; color: var(--color-text-primary, #F0F0F5); line-height: 1.1;
  position: relative; z-index: 1;
}
.edu-kpi-delta {
  display: inline-flex; align-items: center; gap: 3px;
  font-size: 13px; font-weight: 500; margin-top: 4px; position: relative; z-index: 1;
}
.edu-kpi-delta.pos { color: var(--color-success, #22C55E); }
.edu-kpi-delta.neg { color: var(--color-danger, #F87171); }

/* ── Body Split ── */
.edu-body { display: flex; flex: 1; overflow: hidden; }
.edu-nav {
  width: ${X}px; flex-shrink: 0;
  border-right: 1px solid var(--color-border-default);
  padding: var(--space-3) 0; overflow-y: auto;
  background: var(--color-bg-base);
}
.edu-nav-item {
  display: flex; align-items: center; gap: var(--space-2);
  padding: 10px 14px; margin: 2px var(--space-2);
  font-size: 13px; font-weight: 500; color: var(--color-text-secondary, #A0A0B8);
  border-radius: var(--radius-md); cursor: pointer;
  transition: all var(--transition-fast); position: relative;
}
.edu-nav-item:hover { color: var(--color-text-primary, #F0F0F5); background: rgba(255,255,255,0.03); }
.edu-nav-item.active {
  color: var(--color-accent, #818CF8);
  background: rgba(129,140,248, 0.08);
}
.edu-nav-item.active::before {
  content: ''; position: absolute; left: 0; top: 6px; bottom: 6px;
  width: 2px; background: var(--color-accent, #818CF8); border-radius: 0 2px 2px 0;
}

/* ── Main Content ── */
.edu-main { flex: 1; overflow-y: auto; padding: var(--space-6); scroll-behavior: smooth; }
.edu-main::-webkit-scrollbar { width: 4px; }
.edu-main::-webkit-scrollbar-track { background: transparent; }
.edu-main::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }

/* ── Date Bar ── */
.edu-date-bar {
  display: flex; align-items: center; gap: var(--space-2); flex-wrap: wrap;
  margin-bottom: var(--space-6);
}
.edu-date-pill {
  font-size: 12px; font-weight: 500; color: var(--color-text-secondary, #A0A0B8);
  padding: 5px 12px; border-radius: var(--radius-full);
  border: 1px solid var(--color-border-default); background: transparent;
  cursor: pointer; transition: all var(--transition-fast);
  font-variant-numeric: tabular-nums; font-family: var(--font-sans);
}
.edu-date-pill:hover { border-color: var(--color-border-strong); color: var(--color-text-primary, #F0F0F5); }
.edu-date-pill.active { background: var(--color-accent, #818CF8); color: #0A0A0F; border-color: var(--color-accent, #818CF8); }

/* ── Section Headers ── */
.edu-section-title {
  font-size: 16px; font-weight: 600; letter-spacing: -0.02em;
  color: var(--color-text-primary, #F0F0F5); margin-bottom: var(--space-5);
}
.edu-sub-title {
  font-size: 12px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-text-secondary, #A0A0B8); margin-bottom: var(--space-3);
}

/* ── Cards ── */
.edu-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg, 12px); padding: 20px 24px;
  margin-bottom: var(--space-4);
  transition: border-color var(--transition-normal), transform var(--transition-normal);
  min-height: 250px;
}
.edu-card:hover { border-color: rgba(129,140,248,0.20); transform: translateY(-2px); }

/* ── Overview Layout ── */
.edu-overview-charts { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-bottom: var(--space-5); }
.edu-overview-full { margin-bottom: var(--space-5); }

/* ── Daily Layout ── */
.edu-daily-top { display: grid; grid-template-columns: 220px 1fr; gap: var(--space-5); align-items: start; margin-bottom: var(--space-5); }
.edu-big-numbers { display: flex; flex-direction: column; gap: var(--space-3); justify-content: center; }
.edu-big-num-row { display: flex; align-items: baseline; gap: var(--space-2); padding: 8px 12px; border-radius: var(--radius-md); background: rgba(255,255,255,0.02); }
.edu-big-num {
  font-size: 28px; font-weight: 700; font-variant-numeric: tabular-nums;
  font-family: var(--font-mono); line-height: 1.1;
}
.edu-big-num.c-green { color: var(--color-success, #22C55E); }
.edu-big-num.c-red  { color: var(--color-danger, #F87171); }
.edu-big-num.c-gray { color: var(--color-text-secondary, #A0A0B8); }
.edu-big-label { font-size: 13px; color: var(--color-text-tertiary, #5A5A6E); }

/* ── Question List ── */
.edu-q-list { max-height: 480px; overflow-y: auto; }
.edu-q-list::-webkit-scrollbar { width: 4px; }
.edu-q-list::-webkit-scrollbar-track { background: transparent; }
.edu-q-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }
.edu-q-item {
  display: flex; align-items: center; gap: var(--space-3);
  padding: 0 16px; height: 48px; border-bottom: 1px solid var(--color-border-default);
  transition: background var(--transition-fast);
}
.edu-q-item:hover { background: rgba(255,255,255,0.02); }
.edu-q-icon { width: 20px; font-size: 14px; flex-shrink: 0; text-align: center; }
.edu-q-icon.correct { color: var(--color-success, #22C55E); }
.edu-q-icon.wrong { color: var(--color-danger, #F87171); }
.edu-q-icon.skip { color: var(--color-text-tertiary, #5A5A6E); }
.edu-q-name { flex: 1; font-size: 13px; color: var(--color-text-primary, #F0F0F5); }
.edu-q-meta { font-size: 12px; color: var(--color-text-tertiary, #5A5A6E); font-variant-numeric: tabular-nums; white-space: nowrap; }
.edu-q-reason { font-size: 11px; color: #F59E0B; margin-left: auto; margin-right: 8px; white-space: nowrap; }

/* ── Knowledge Graph ── */
.edu-kg-container { height: 450px; min-height: 450px; position: relative; }
.edu-kg-container canvas { width: 100%; height: 100%; }

/* ── Knowledge Table ── */
.edu-table-wrap { overflow-x: auto; }
.edu-table-wrap::-webkit-scrollbar { height: 4px; }
.edu-table-wrap::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }
.edu-table { width: 100%; border-collapse: collapse; min-width: 600px; }
.edu-table th {
  font-size: 11px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.04em; color: var(--color-text-secondary, #A0A0B8);
  text-align: left; padding: 10px 14px;
  border-bottom: 1px solid var(--color-border-default);
}
.edu-table td {
  font-size: 13px; color: var(--color-text-primary, #F0F0F5); padding: 12px 14px;
  border-bottom: 1px solid var(--color-border-default);
  font-variant-numeric: tabular-nums; height: 44px; vertical-align: middle;
}
.edu-table tbody tr { transition: background var(--transition-fast); }
.edu-table tbody tr:hover td { background: rgba(255,255,255,0.02); }
.edu-progress-bar-bg { width: 100%; height: 6px; border-radius: var(--radius-full); background: rgba(255,255,255,0.05); overflow: hidden; }
.edu-progress-bar-fill { height: 100%; border-radius: var(--radius-full); transition: width 400ms ease-out; }

/* ── Error List ── */
.edu-error-list { display: flex; flex-direction: column; gap: var(--space-2); }
.edu-error-item {
  display: flex; align-items: center; gap: var(--space-3);
  padding: 10px 14px; border-radius: var(--radius-md);
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--color-border-default);
  transition: border-color var(--transition-fast);
}
.edu-error-item:hover { border-color: rgba(129,140,248,0.20); }
.edu-error-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.edu-error-topic { flex: 1; font-size: 13px; color: var(--color-text-primary, #F0F0F5); }
.edu-error-count { font-size: 12px; font-weight: 600; color: var(--color-danger, #F87171); font-variant-numeric: tabular-nums; }

/* ── Correlation Cards ── */
.edu-corr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-bottom: var(--space-5); }
.edu-corr-full { margin-bottom: var(--space-5); }
.edu-p0-list { display: flex; flex-direction: column; gap: var(--space-2); }
.edu-p0-item {
  display: flex; align-items: center; gap: var(--space-2);
  font-size: 13px; color: var(--color-text-primary, #F0F0F5);
  padding: 8px 12px; border-radius: var(--radius-md); background: rgba(248,113,113,0.06);
  border-left: 3px solid var(--color-danger, #F87171);
}

/* ── Fade In ── */
@keyframes edu-fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
.edu-fade { animation: edu-fadein 200ms ease-out; }

@media (prefers-reduced-motion: reduce) {
  .edu-fade { animation: none; }
  .edu-kpi-card, .edu-nav-item, .edu-date-pill, .edu-card, .edu-table tbody tr, .edu-error-item { transition: none; }
}
`,document.head.appendChild($))}function ee(v){return`./education/${v}`}async function q(v){const s={};return await Promise.all(v.map(async p=>{try{const n=await fetch(ee(p));n.ok&&(s[p]=await n.text())}catch{}})),s}function M(v){const s=v.match(/^(\d{4}-\d{2}-\d{2})\.md$/);return s?s[1]:null}function te(v){const s={};return v.forEach(p=>{const n=M(p);if(!n)return;const i=new Date(`${n}T00:00:00+08:00`),e=24+Math.floor((i-new Date("2026-06-08T00:00:00+08:00"))/864e5/7);s[e]||(s[e]=[]),s[e].push(p)}),Object.entries(s).map(([p,n])=>({week:+p,files:n.sort().reverse()})).sort((p,n)=>n.week-p.week)}function R(v){return v>=100?F.mastered:v>=85?F.success:v>=60?F.warning:F.danger}function ae(v){const{el:s,dailyData:p,weekGroups:n,theme:i}=v,r=Object.keys(p).sort();let e='<div class="edu-fade">';const m=r.length,c=m>0?Math.round(r.reduce((a,g)=>{var u;return a+(((u=p[g])==null?void 0:u.totalRate)||0)},0)/m):0,t=r.reduce((a,g)=>{var u;return a+(((u=p[g])==null?void 0:u.totalQ)||0)},0),o=r.reduce((a,g)=>{var u;return a+(((u=p[g])==null?void 0:u.totalCorrect)||0)},0),l=r.reduce((a,g)=>{var u,h;return a+(((h=(u=p[g])==null?void 0:u.p0List)==null?void 0:h.length)||0)},0);e+='<div class="edu-section-title">学习总览</div>',e+=`<div class="edu-kpi-strip">
    <div class="edu-kpi-card"><div class="edu-kpi-label">累计天数</div><div class="edu-kpi-value">${m}</div></div>
    <div class="edu-kpi-card"><div class="edu-kpi-label">平均正确率</div><div class="edu-kpi-value">${c}%</div></div>
    <div class="edu-kpi-card"><div class="edu-kpi-label">总题量</div><div class="edu-kpi-value">${t}</div><div class="edu-kpi-delta pos">正确 ${o}</div></div>
    <div class="edu-kpi-card"><div class="edu-kpi-label">P0薄弱点</div><div class="edu-kpi-value">${l<20?l:20}+</div></div>
  </div>`,e+='<div class="edu-overview-charts">',e+='<div class="edu-card"><div class="edu-sub-title">每日双科正确率趋势</div><canvas id="edu-overview-rate" style="width:100%;height:280px"></canvas></div>',e+='<div class="edu-card"><div class="edu-sub-title">每日题量分布</div><canvas id="edu-overview-volume" style="width:100%;height:280px"></canvas></div>',e+="</div>";const d=[...n].sort((a,g)=>a.week-g.week);d.length>0&&(e+='<div class="edu-overview-full"><div class="edu-card"><div class="edu-sub-title">周度趋势对比</div><canvas id="edu-overview-weekly" style="width:100%;height:240px"></canvas></div></div>'),e+="</div>",s.innerHTML=e,setTimeout(()=>{re(p,r),ie(p,r),d.length>0&&se(p,d)},60)}function re(v,s,p){const n=document.getElementById("edu-overview-rate");if(!n||s.length===0)return;const i=s.map(c=>c.slice(5)),r=s.map(c=>{var t;return((t=v[c])==null?void 0:t.totalRate)||0}),e=s.map(c=>{var t,o,l;return((l=(o=(t=v[c])==null?void 0:t.subjects)==null?void 0:o.语文)==null?void 0:l.pct)||null}),m=s.map(c=>{var t,o,l;return((l=(o=(t=v[c])==null?void 0:t.subjects)==null?void 0:o.数学)==null?void 0:l.pct)||null});L(n,{labels:i,series:[{name:"语文",values:e,color:"#818CF8"},{name:"数学",values:m,color:"#22C55E"},{name:"总正确率",values:r,color:"#F0F0F5",width:2.5,dashed:!0}]},{area:"education"})}function ie(v,s,p){const n=document.getElementById("edu-overview-volume");if(!n||s.length===0)return;const i=s.map(e=>e.slice(5)),{volumeTrends:r}=U(v);r.map(e=>e.correct||0),r.map(e=>e.wrong||0),W(n,{labels:i},{area:"education"})}function se(v,s,p){const n=document.getElementById("edu-overview-weekly");if(!n||s.length===0)return;const i=s.map(e=>`第${e.week}周`),r=[];s.forEach(e=>{let m=0,c=0;e.files.forEach(t=>{const o=M(t);o&&v[o]&&(m+=v[o].totalRate||0,c++)}),r.push(c>0?Math.round(m/c):0)}),L(n,{labels:i,series:[{name:"周正确率",values:r,color:"#818CF8"}]},{area:"education"})}function oe(v){const{el:s,dailyData:p,selectedDate:n,theme:i}=v,r=p[n];let e='<div class="edu-fade">';if(!r){s.innerHTML=e+`<div class="edu-empty"><div class="edu-empty-icon">📭</div><div class="edu-empty-text">${n} 暂无数据</div></div></div>`;return}const m=r.totalCorrect||0,c=(r.totalQ||0)-m,t=r.totalQ||0,o=r.subjects||{},l=Object.keys(o).filter(a=>a!=="合计"&&(o[a].score>0||o[a].maxScore>0));e+=`<div class="edu-section-title">${n} 学习详情</div>`,e+='<div class="edu-daily-top">',e+='<div><canvas id="edu-daily-donut" style="width:100%;height:200px"></canvas></div>',e+='<div class="edu-big-numbers">',e+=`<div class="edu-big-num-row"><span class="edu-big-num c-green">${m}</span><span class="edu-big-label">正确</span></div>`,e+=`<div class="edu-big-num-row"><span class="edu-big-num c-red">${c}</span><span class="edu-big-label">错误</span></div>`,e+=`<div class="edu-big-num-row"><span class="edu-big-num c-gray">${t}</span><span class="edu-big-label">总题量</span></div>`,e+=`<div class="edu-big-num-row"><span class="edu-big-num c-gray">${r.totalRate||0}%</span><span class="edu-big-label">正确率</span></div>`,e+="</div></div>",l.length>0&&(e+='<div class="edu-sub-title">科目得分</div>',e+='<div class="edu-card"><canvas id="edu-subj-bar" style="width:100%;height:200px"></canvas></div>');const d=r.questions||[];d.length>0&&(e+='<div class="edu-sub-title">题目列表</div><div class="edu-q-list edu-card">',d.forEach((a,g)=>{const u=a.status==="correct"?"✓":a.status==="wrong"?"✗":"—",h=a.status==="correct"?"correct":a.status==="wrong"?"wrong":"skip",f=a.reason||a.category||"";e+=`<div class="edu-q-item"><span class="edu-q-icon ${h}">${u}</span>`,e+=`<span class="edu-q-name">${a.name}</span>`,f&&a.status==="wrong"&&(e+=`<span class="edu-q-reason">${f}</span>`),e+=`<span class="edu-q-meta">#${g+1}</span></div>`}),e+="</div>"),e+="</div>",s.innerHTML=e,setTimeout(()=>{const a=[];m>0&&a.push({label:"正确",value:m,color:i.accent||F.accent}),c>0&&a.push({label:"错误",value:c,color:F.danger}),a.length===0&&t>0&&a.push({label:"未做",value:t,color:"#3A3A4A"});const g=document.getElementById("edu-daily-donut");g&&a.length>0&&O(g,a,{area:"education"});const u=document.getElementById("edu-subj-bar");if(u&&l.length>0){const h=l;l.map(f=>o[f].score||0),l.map(f=>o[f].maxScore||0),W(u,{labels:h},{area:"education"})}},50)}function de(v){const{el:s,dailyData:p,weekGroups:n,weeklyData:i,theme:r}=v;let e='<div class="edu-fade"><div class="edu-section-title">知识点掌握度</div>';e+='<div class="edu-card edu-kg-container"><canvas id="edu-kg-canvas"></canvas></div>';const c=(i[i.length-1]||{}).changes||[];c.length>0&&(e+='<div class="edu-sub-title">知识点明细</div><div class="edu-card"><div class="edu-table-wrap"><table class="edu-table"><thead><tr>',e+="<th>知识点</th><th>掌握度</th><th>进度</th><th>状态</th><th>建议</th>",e+="</tr></thead><tbody>",c.forEach(t=>{const o=t[0]||"",l=t[1]||"",d=t[2]||"",a=K(d)||0,g=R(a),u=a>=100?"已攻克":a>=85?"已掌握":a>=60?"学习中":"薄弱",f={表面积vs体积概念混淆:"实物演示+对比游戏","比例缩放规律·面积换算":"线性→面积²三级训练","深层阅读理解·概括":"三层追问法日常化","作文·细节描写":"每日仿写1段","解决问题·相遇·排水法":"方程建模专项",相遇问题方程建模:"画图+等量关系训练"}[l]||(a<60?"需专项训练":a<85?"加强巩固":"保持");e+=`<tr>
        <td><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${g};margin-right:8px;vertical-align:middle"></span>${l||o}</td>
        <td style="font-weight:600">${a}%</td>
        <td><div class="edu-progress-bar-bg"><div class="edu-progress-bar-fill" style="width:${a}%;background:${g}"></div></div></td>
        <td><span style="color:${g};font-weight:500">${u}</span></td>
        <td style="color:var(--color-text-secondary, #A0A0B8);font-size:12px">${f}</td>
      </tr>`}),e+="</tbody></table></div></div>"),e+="</div>",s.innerHTML=e,setTimeout(()=>{const t=document.getElementById("edu-kg-canvas");if(t&&c.length>0){const o=Y(p,i);V(t,o,{})}},80)}function ne(v){const{el:s,dailyData:p,theme:n}=v;let i='<div class="edu-fade"><div class="edu-section-title">错题分析</div>';const r=[],e={},m={},c=Object.keys(p).sort();c.forEach(d=>{const a=p[d];a&&(m[d]=0,(a.questions||[]).forEach(g=>{if(g.status==="wrong"){r.push({...g,date:d}),m[d]=(m[d]||0)+1;const u=g.reason||g.category||"其他";e[u]=(e[u]||0)+1}}))});const t=Object.entries(e).sort((d,a)=>a[1]-d[1]);t.length>0?(i+='<div class="edu-overview-charts">',i+='<div class="edu-card"><div class="edu-sub-title">错误原因分布</div><canvas id="edu-error-pie" style="width:100%;height:280px"></canvas></div>',i+='<div class="edu-card"><div class="edu-sub-title">每日错题数趋势</div><canvas id="edu-error-trend" style="width:100%;height:280px"></canvas></div>',i+="</div>"):i+='<div class="edu-card"><div class="edu-sub-title">错误原因分布</div><canvas id="edu-error-pie" style="width:100%;height:280px"></canvas></div>';const o={};r.forEach(d=>{const a=(d.name||"").split(" · ")[0]||d.name||"未知";o[a]=(o[a]||0)+1});const l=Object.entries(o).sort((d,a)=>a[1]-d[1]).slice(0,10);l.length>0&&(i+='<div class="edu-sub-title">高频错题知识点</div><div class="edu-card"><div class="edu-error-list">',l.forEach(([d,a])=>{i+=`<div class="edu-error-item"><span class="edu-error-dot" style="background:${F.danger}"></span><span class="edu-error-topic">${d}</span><span class="edu-error-count">${a}次</span></div>`}),i+="</div></div>"),t.length>0&&(i+='<div class="edu-sub-title">错题列表（按错误原因分类）</div>',t.forEach(([d,a])=>{const g=r.filter(u=>(u.reason||u.category||"其他")===d);i+=`<div class="edu-card" style="min-height:auto"><div style="font-size:14px;font-weight:600;color:#F0F0F5;margin-bottom:10px">${d} <span style="font-weight:400;color:#A0A0B8;font-size:12px">(${a}题)</span></div>`,g.slice(0,8).forEach((u,h)=>{i+=`<div class="edu-q-item" style="border-bottom:none;padding:6px 8px"><span class="edu-q-icon wrong">✗</span><span class="edu-q-name">${u.name}</span><span class="edu-q-meta">${u.date}</span></div>`}),g.length>8&&(i+=`<div style="color:#5A5A6E;font-size:12px;padding:4px 8px">... 还有 ${g.length-8} 题</div>`),i+="</div>"})),i+="</div>",s.innerHTML=i,setTimeout(()=>{const d=document.getElementById("edu-error-pie");if(d&&t.length>0){const g=["#F87171","#F59E0B","#818CF8","#22C55E","#34D399","#A78BFA","#FB923C"];O(d,t.map(([u,h],f)=>({label:u,value:h,color:g[f%g.length]})),{area:"education"})}const a=document.getElementById("edu-error-trend");if(a&&c.length>0){const g=c.map(h=>h.slice(5)),u=c.map(h=>m[h]||0);L(a,{labels:g,series:[{name:"错题数",values:u,color:F.danger}]},{area:"education"})}},60)}function le(v){const{el:s,dailyData:p,weeklyData:n,theme:i}=v;let r='<div class="edu-fade"><div class="edu-section-title">跨学科关联分析</div>';const e=_(p,n);r+='<div class="edu-corr-grid">',r+='<div class="edu-card"><div class="edu-sub-title">双科雷达图 — 各维度掌握度对比</div><canvas id="edu-corr-radar" style="width:100%;height:340px"></canvas></div>';const m=e.commonWeakness||[];r+='<div class="edu-card"><div class="edu-sub-title">双科P0薄弱点交集分析</div>',m.length>0?(r+='<div class="edu-p0-list">',m.forEach(o=>{r+=`<div class="edu-p0-item"><span style="width:8px;height:8px;border-radius:50%;background:#F87171;flex-shrink:0"></span>${o.chinese} → ${o.math}</div>`}),r+="</div>"):r+='<div style="color:#A0A0B8;font-size:13px">当前暂无跨学科P0交集。已攻克知识点包括：修辞手法·比喻vs拟人、关联词运用、单位"1"辨析、病句辨析。</div>',r+="</div></div>",e.correlations&&e.correlations.length>0&&(r+='<div class="edu-corr-full"><div class="edu-card"><div class="edu-sub-title">知识点跨学科关联</div><div class="edu-table-wrap"><table class="edu-table"><thead><tr><th>语文学科知识点</th><th>掌握度</th><th>关联数学知识点</th></tr></thead><tbody>',e.correlations.forEach(o=>{const l=R(o.mastery);r+=`<tr><td><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${l};margin-right:8px;vertical-align:middle"></span>${o.name}</td><td style="font-weight:600">${o.mastery}%</td><td style="color:#A0A0B8;font-size:12px">${(o.relatedMath||[]).join("，")||"暂无直接关联"}</td></tr>`}),r+="</tbody></table></div></div></div>");const c=new Map;Object.values(p).forEach(o=>{(o.p0List||[]).forEach(l=>{const d=l.name||"";d&&(c.has(d)||c.set(d,{name:d,status:l.status||"",count:0}),c.get(d).count++)})});const t=[...c.values()].sort((o,l)=>l.count-o.count);t.length>0&&(r+='<div class="edu-corr-full"><div class="edu-card"><div class="edu-sub-title">P0薄弱点全景追踪</div><div class="edu-table-wrap"><table class="edu-table"><thead><tr><th>知识点</th><th>状态</th><th>出现天数</th></tr></thead><tbody>',t.forEach(o=>{r+=`<tr><td>${o.name}</td><td style="color:#F87171;font-weight:500">🔴 P0</td><td>${o.count}天</td></tr>`}),r+="</tbody></table></div></div></div>"),r+="</div>",s.innerHTML=r,setTimeout(()=>{const o=document.getElementById("edu-corr-radar");o&&e.radarData&&N(o,e.radarData,{})},80)}function ce(v){const s=[],p=(v||"").split(`
`);let n=null,i=null;for(const c of p){const t=c.trim(),o=t.match(/^##\s*第(\d+)周/);if(o){n&&s.push(n),n={week:+o[1],kpis:{},p0:[],mastered:[],changes:[]},i=null;continue}if(n){if(t.startsWith("###")&&/数据概览/i.test(t)){i="overview";continue}if(t.startsWith("###")&&/P0/i.test(t)){i="p0";continue}if(t.startsWith("###")&&/已攻克/i.test(t)){i="mastered";continue}if(t.includes("| 类型 | 知识点 | 状态 |")){i="changes";continue}if(t.startsWith("###")||t.startsWith("##")){i=null;continue}if(i==="overview"&&t.startsWith("|")&&t.endsWith("|")&&!t.includes("---")){const l=t.split("|").slice(1,-1).map(d=>d.trim());l.length>=2&&(n.kpis[l[0]]=l[1])}if(i==="p0"&&/^\d+\./.test(t)&&n.p0.push(t.replace(/^\d+\.\s*/,"")),i==="mastered"&&t.startsWith("|")&&t.endsWith("|")&&!t.includes("---")&&!t.includes("原状态")){const l=t.split("|").slice(1,-1).map(d=>d.trim());l.length>=2&&l[0]&&n.mastered.push({name:l[0],original:l[1]||"",current:l[2]||""})}if(i==="changes"&&t.startsWith("|")&&t.endsWith("|")&&!t.includes("---")&&!t.includes("类型")){const l=t.split("|").slice(1,-1).map(d=>d.trim());l.length>=2&&n.changes.push(l)}}}n&&s.push(n);const r=[],e=[],m=[];return s.forEach(c=>{r.push(...c.changes),e.push(...c.mastered||[]),m.push(...c.p0||[])}),s._mergedChanges=r,s._mergedMastered=e,s._mergedP0=m,s}async function me(v){const{element:s,area:p,files:n}=v;if(!s)return;Z();let i=n;if(!i||i.length===0)try{const b=await fetch("./education/index.json");b.ok&&(i=await b.json())}catch{i=[]}const r=i.filter(b=>/\d{4}-\d{2}-\d{2}\.md$/.test(b)),e=i.filter(b=>/weekly-\d+\.md$/.test(b)).sort().reverse(),[m,c]=await Promise.all([q(r),q(e)]);if(!s.isConnected)return;const t={};Object.entries(m).forEach(([b,x])=>{const E=M(b);if(E){const A=Q(x);A.date=E,t[E]=A}});const o=Object.values(c).join(`

`),l=ce(o),d=te(r),a=Object.keys(t).sort().reverse(),g=G(p||"education");let u="overview",h=a[0]||"";const f={el:s,dailyData:t,weekGroups:d,weeklyData:l,selectedDate:h,theme:g};function S(){var j;s.innerHTML="";const b=document.createElement("div");b.className="edu-wrap";const x=document.createElement("div");x.className="edu-topbar",x.innerHTML='<button class="edu-back-btn">&larr; 首页</button><span class="edu-topbar-title">学情报告 v2</span>',x.querySelector(".edu-back-btn").addEventListener("click",()=>H("/")),b.appendChild(x);const E=a.length,A=E>0?Math.round(a.reduce((y,w)=>{var k;return y+(((k=t[w])==null?void 0:k.totalRate)||0)},0)/E):0,I=a.reduce((y,w)=>{var k;return y+(((k=t[w])==null?void 0:k.totalQ)||0)},0),P=a.reduce((y,w)=>{var k;return y+(((k=t[w])==null?void 0:k.totalCorrect)||0)},0),B=document.createElement("div");B.className="edu-kpi-strip",B.innerHTML=`
      <div class="edu-kpi-card"><div class="edu-kpi-label">累计天数</div><div class="edu-kpi-value">${E}</div></div>
      <div class="edu-kpi-card"><div class="edu-kpi-label">平均正确率</div><div class="edu-kpi-value">${A}%</div></div>
      <div class="edu-kpi-card"><div class="edu-kpi-label">总题量</div><div class="edu-kpi-value">${I}</div><div class="edu-kpi-delta pos">正确 ${P}</div></div>
      <div class="edu-kpi-card"><div class="edu-kpi-label">最新日期</div><div class="edu-kpi-value" style="font-size:24px">${((j=a[0])==null?void 0:j.slice(5))||"—"}</div></div>
    `,b.appendChild(B);const D=document.createElement("div");D.className="edu-body";const z=document.createElement("nav");z.className="edu-nav";const C=document.createElement("div");C.className="edu-main",C.id="edu-main-content",J.forEach(y=>{const w=document.createElement("div");w.className="edu-nav-item"+(y.key===u?" active":""),w.innerHTML=`${y.icon} ${y.label}`,w.addEventListener("click",()=>{u!==y.key&&(u=y.key,z.querySelectorAll(".edu-nav-item").forEach(k=>k.classList.remove("active")),w.classList.add("active"),T(C,f))}),z.appendChild(w)}),D.appendChild(z),D.appendChild(C),b.appendChild(D),s.appendChild(b),T(C,f)}function T(b,x){switch(x.el=b,u){case"overview":ae(x);break;case"daily":oe(x);break;case"knowledge":de(x);break;case"errors":ne(x);break;case"correlation":le(x);break}}S()}export{me as renderEduDetail};
