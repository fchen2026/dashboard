import{_ as A,n as M}from"./core-B_Wlt-Ld.js";import{I as T}from"./icons-De6BiXEo.js";import{e as F,f as j,a as q,b as B}from"./charts-BVitNI1m.js";import{e as R,b as y,f as V}from"./parsers-C5lwdAJe.js";import"./design-system-Du44DDix.js";const StateLifecycle={IDLE:"idle",LOADING:"loading",LOADED:"loaded",EMPTY:"empty",ERROR:"error",STALE:"stale"};function createStateManager(){let g=StateLifecycle.IDLE;const m=new Map;let f=null;const s=new Set;return{setGlobal(t){g=t;s.forEach(e=>e("global",t))},getGlobal(){return g},setSection(t,e){m.set(t,e);s.forEach(r=>r(t,e))},getSection(t){return m.get(t)||StateLifecycle.IDLE},allLoaded(){return g===StateLifecycle.LOADED&&[...m.values()].every(t=>t===StateLifecycle.LOADED)},markFetchTime(){f=Date.now()},isStale(ttl=3e5){return f?Date.now()-f>ttl:!0},reset(){g=StateLifecycle.IDLE;m.clear();f=null},subscribe(t){s.add(t);return()=>s.delete(t)},getLastFetchTime(){return f}}}let gStateManager=createStateManager();const z=[{key:"overview",icon:T.overview.emoji,label:"市场全景"},{key:"holdings",icon:T.holdings.emoji,label:"持仓分析"},{key:"risk",icon:T.risk.emoji,label:"风险评估"},{key:"strategy",icon:T.strategy.emoji,label:"操作复盘"}],$="investing",D=160;let w=null;function O(){w||(w=document.createElement("style"),w.id="investing-detail-styles",w.textContent=`
/* ─── Layout ─── */
.inv-detail { display: flex; flex-direction: column; height: 100%; min-height: calc(100vh - 60px); }
.inv-topbar {
  display: flex; align-items: center; gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-border-default);
  background: var(--color-bg-raised);
}
.inv-topbar-title { font-size: 18px; font-weight: 700; letter-spacing: -0.02em; color: var(--color-text-primary); }
.inv-back-btn {
  display: inline-flex; align-items: center; gap: var(--space-1);
  font-size: 13px; font-weight: 500; color: var(--color-text-secondary);
  background: none; border: none; cursor: pointer; padding: 6px 10px;
  border-radius: var(--radius-md); transition: all var(--transition-fast);
}
.inv-back-btn:hover { color: var(--color-text-primary); background: rgba(255,255,255,0.05); }

/* ─── KPI Strip ─── */
.inv-kpi-strip {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  background: linear-gradient(180deg, var(--color-bg-raised) 0%, var(--color-bg-base) 100%);
}
.inv-kpi-card {
  background: var(--color-bg-overlay);
  border: none;
  border-radius: var(--radius-lg);
  padding: 18px 22px;
  box-shadow: var(--shadow-md);
  transition: box-shadow var(--transition-normal), transform var(--transition-normal);
  position: relative; overflow: hidden;
}
.inv-kpi-card::after {
  content: ''; position: absolute; top: 0; left: 0; right: 0;
  height: 2px; background: var(--color-accent); opacity: 0.4;
  transform: scaleX(0); transform-origin: left;
  transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.inv-kpi-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); }
.inv-kpi-card:hover::after { transform: scaleX(1); }
.inv-kpi-label { font-size: 12px; font-weight: 500; color: var(--color-text-secondary); margin-bottom: 6px; }
.inv-kpi-value {
  font-size: 32px; font-weight: 700; letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums; color: var(--color-text-primary); line-height: 1.1;
}
.inv-kpi-delta {
  display: inline-flex; align-items: center; gap: 3px;
  font-size: 13px; font-weight: 500; margin-top: 4px;
}
.inv-kpi-delta.pos { color: var(--color-success); }
.inv-kpi-delta.neg { color: var(--color-danger); }

/* ─── Body Split ─── */
.inv-body { display: flex; flex: 1; overflow: hidden; background: var(--color-bg-base); }
.inv-nav {
  width: ${D}px; flex-shrink: 0;
  border-right: 1px solid var(--color-border-default);
  padding: var(--space-3) 0; overflow-y: auto;
  background: var(--color-bg-raised);
}
.inv-nav-item {
  display: flex; align-items: center; gap: var(--space-2);
  padding: 10px 14px; margin: 2px var(--space-2);
  font-size: 13px; font-weight: 500; color: var(--color-text-secondary);
  border-radius: var(--radius-md); cursor: pointer;
  transition: all var(--transition-fast); position: relative;
}
.inv-nav-item:hover { color: var(--color-text-primary); background: rgba(255,255,255,0.03); }
.inv-nav-item.active {
  color: var(--color-accent);
  background: rgba(var(--color-accent-rgb), 0.08);
}
.inv-nav-item.active::before {
  content: ''; position: absolute; left: 0; top: 6px; bottom: 6px;
  width: 2px; background: var(--color-accent); border-radius: 0 2px 2px 0;
}

/* ─── Main Content ─── */
.inv-main { flex: 1; overflow-y: auto; padding: var(--space-6); }
.inv-date-bar {
  display: flex; align-items: center; gap: var(--space-2); flex-wrap: wrap;
  margin-bottom: var(--space-6);
}
.inv-date-label { font-size: 12px; font-weight: 500; color: var(--color-text-tertiary); margin-right: var(--space-2); }
.inv-date-pill {
  font-size: 12px; font-weight: 500; color: var(--color-text-secondary);
  padding: 5px 12px; border-radius: var(--radius-full);
  border: none; background: transparent;
  box-shadow: var(--shadow-sm);
  cursor: pointer; transition: all var(--transition-fast);
  font-variant-numeric: tabular-nums; font-family: var(--font-sans);
}
.inv-date-pill:hover { border-color: var(--color-border-strong); color: var(--color-text-primary); }
.inv-date-pill.active { background: var(--color-accent); color: #0A0A0F; border-color: var(--color-accent); }

/* ─── Section Headers ─── */
.inv-section-title {
  font-size: 18px; font-weight: 600; letter-spacing: -0.01em;
  color: var(--color-text-primary); margin-bottom: var(--space-5);
}
.inv-sub-title {
  font-size: 12px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-text-tertiary); margin-bottom: var(--space-3);
}

/* ─── Cards ─── */
.inv-card {
  background: var(--color-bg-overlay);
  border: none;
  border-radius: var(--radius-lg); padding: 20px 24px;
  margin-bottom: var(--space-4);
  box-shadow: var(--shadow-md);
}
.inv-card-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: var(--space-4);
}
.inv-card-title { font-size: 14px; font-weight: 600; color: var(--color-text-primary); }

/* ─── Index Mini Cards ─── */
.inv-index-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); margin-bottom: var(--space-5); }
.inv-index-mini {
  background: rgba(255,255,255,0.03);
  border: none;
  border-radius: var(--radius-lg); padding: 14px 16px;
  box-shadow: var(--shadow-sm);
  transition: border-color var(--transition-fast);
}
.inv-index-mini:hover { border-color: rgba(var(--color-accent-rgb),0.25); }
.inv-index-name { font-size: 12px; font-weight: 500; color: var(--color-text-secondary); margin-bottom: 6px; }
.inv-index-value {
  font-size: 24px; font-weight: 700; letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums; color: var(--color-text-primary); line-height: 1.2;
}
.inv-index-change { font-size: 13px; font-weight: 500; margin-top: 2px; }
.inv-index-change.pos { color: var(--color-success); }
.inv-index-change.neg { color: var(--color-danger); }

/* ─── Dual Column ─── */
.inv-dual { display: grid; grid-template-columns: 60% 40%; gap: var(--space-4); }
.inv-chart-box { background: rgba(255,255,255,0.02); border-radius: var(--radius-lg); padding: 12px; }

/* ─── Sector Heat Top 5 ─── */
.inv-sector-list { display: flex; flex-direction: column; gap: var(--space-2); }
.inv-sector-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 14px; border-radius: var(--radius-md);
  background: rgba(255,255,255,0.02); transition: background var(--transition-fast);
}
.inv-sector-row:hover { background: rgba(255,255,255,0.04); }
.inv-sector-rank { width: 20px; font-size: 12px; font-weight: 600; color: var(--color-text-tertiary); }
.inv-sector-name { flex: 1; font-size: 13px; font-weight: 500; color: var(--color-text-primary); }
.inv-sector-bar-wrap { flex: 1; margin: 0 var(--space-3); height: 6px; border-radius: var(--radius-full); background: rgba(255,255,255,0.05); overflow: hidden; }
.inv-sector-bar { height: 100%; border-radius: var(--radius-full); background: var(--color-accent); transition: width 300ms ease-out; }
.inv-sector-pct { font-size: 12px; font-weight: 500; font-variant-numeric: tabular-nums; min-width: 42px; text-align: right; }
.inv-sector-pct.pos { color: var(--color-success); }
.inv-sector-pct.neg { color: var(--color-danger); }

/* ─── Donut + Table Layout ─── */
.inv-holdings-layout { display: grid; grid-template-columns: 260px 1fr; gap: var(--space-5); align-items: start; }

/* ─── Holdings Table ─── */
.inv-table-wrap { overflow-x: auto; }
.inv-table { width: 100%; border-collapse: collapse; }
.inv-table th {
  font-size: 11px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.04em; color: var(--color-text-tertiary);
  text-align: left; padding: 10px 14px;
  border-bottom: 1px solid var(--color-border-default);
}
.inv-table td {
  font-size: 13px; color: var(--color-text-primary); padding: 12px 14px;
  border-bottom: 1px solid var(--color-border-default);
  font-variant-numeric: tabular-nums; height: 44px; vertical-align: middle;
}
.inv-table tbody tr { transition: background var(--transition-fast); }
.inv-table tbody tr:hover td { background: rgba(255,255,255,0.02); }
.inv-table .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: normal; }
.inv-table .pos { color: var(--color-success); }
.inv-table .neg { color: var(--color-danger); }

/* ─── Risk Grid ─── */
.inv-risk-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-bottom: var(--space-5); }
.inv-metric-card {
  background: var(--color-bg-overlay);
  border: none;
  border-radius: var(--radius-lg); padding: 16px 20px;
  box-shadow: var(--shadow-md);
}
.inv-metric-value { font-size: 28px; font-weight: 700; font-variant-numeric: tabular-nums; color: var(--color-text-primary); line-height: 1.2; }
.inv-metric-label { font-size: 12px; font-weight: 500; color: var(--color-text-secondary); margin-top: 4px; }
.inv-metric-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 6px; flex-shrink: 0; }
.inv-metric-dot.green { background: var(--color-success); }
.inv-metric-dot.yellow { background: var(--color-warning); }
.inv-metric-dot.red { background: var(--color-danger); }
.inv-metric-status { display: flex; align-items: center; font-size: 12px; color: var(--color-text-secondary); margin-top: 4px; }

/* ─── Risk Summary ─── */
.inv-risk-summary { font-size: 13px; line-height: 1.7; color: var(--color-text-secondary); padding: var(--space-4); border-radius: var(--radius-lg); background: rgba(255,255,255,0.02); border: none; }

/* ─── Timeline Section ─── */
.inv-timeline-wrap { margin-bottom: var(--space-5); }
.inv-stats-footer {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3);
  padding: var(--space-5) 0; border-top: 1px solid var(--color-border-default);
}
.inv-stat-card { text-align: center; }
.inv-stat-value { font-size: 24px; font-weight: 700; font-variant-numeric: tabular-nums; color: var(--color-text-primary); }
.inv-stat-label { font-size: 12px; color: var(--color-text-tertiary); margin-top: 2px; }
.inv-stat-delta { font-size: 12px; font-weight: 500; margin-top: 2px; }
.inv-stat-delta.pos { color: var(--color-success); }
.inv-stat-delta.neg { color: var(--color-danger); }

/* ─── Skeleton ─── */
.inv-stale-banner {
  padding: 8px 16px; margin-bottom: var(--space-4);
  background: rgba(240,168,0,0.08);
  border: 1px solid rgba(240,168,0,0.2);
  border-radius: var(--radius-md);
  font-size: 12px; color: var(--color-warning);
  display: flex; align-items: center; gap: 8px;
}
.inv-stale-banner button {
  padding: 2px 10px; border: 1px solid var(--color-warning);
  border-radius: var(--radius-sm); background: transparent;
  color: var(--color-warning); cursor: pointer; font-size: 11px;
}
/* ─── Skeleton ─── */
@keyframes inv-pulse { 0% { opacity: 0.2; } 50% { opacity: 0.5; } 100% { opacity: 0.2; } }
.inv-skeleton { background: var(--color-bg-overlay); border-radius: var(--radius-md); animation: inv-pulse 1.8s ease-in-out infinite; }
.inv-skeleton-kpi { height: 40px; width: 70%; margin-bottom: 8px; }
.inv-skeleton-line { height: 13px; margin-bottom: 8px; }
.inv-skeleton-line:last-child { width: 55%; }

/* ─── Empty State ─── */
.inv-empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: var(--space-8); color: var(--color-text-tertiary);
  text-align: center; min-height: 200px;
}
.inv-empty-icon { font-size: 36px; margin-bottom: var(--space-3); opacity: 0.3; }
.inv-empty-text { font-size: 13px; color: var(--color-text-secondary); }

/* ─── Overview Text ─── */
.inv-overview-text { font-size: 13px; line-height: 1.7; color: var(--color-text-secondary); margin-bottom: var(--space-5); padding: var(--space-4); border-left: 3px solid var(--color-accent); border-radius: var(--radius-lg); background: rgba(255,255,255,0.02); border: none; }

/* ─── Fade In ─── */
@keyframes inv-fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
.inv-fade { animation: inv-fadein 200ms ease-out; }

@media (prefers-reduced-motion: reduce) {
  .inv-fade { animation: none; }
  .inv-kpi-card, .inv-nav-item, .inv-date-pill, .inv-index-mini, .inv-sector-row, .inv-table tbody tr { transition: none; }
}
`,document.head.appendChild(w))}function N(c){return`./investing/${c}`}async function K(c){const o={};return await Promise.all(c.map(async t=>{try{const i=await fetch(N(t));i.ok&&(o[t]=await i.text())}catch{}})),o}function C(c){let o=c.replace(/\.md$/i,"");return o=o.replace(/^(.+?)_(\d{6})_(.+)$/,"$1($2) $3"),o=o.replace(/_(v\d+(\.\d+)?)$/g,""),o=o.replace(/_\d{4}H\d$/g,""),o=o.replace(/_\d{4}-\d{2}-\d{2}$/g,""),o=o.replace(/_/g," "),o.trim()}function H(c){const o=(c||"").replace(/\s/g,"");return o.includes("上证")||o.includes("沪指")?"上证综指":o.includes("深证")||o.includes("深成")?"深证成指":o.includes("创业")?"创业板指":c||""}function P(c){const o=c||{};let t=0,i=0,r=0,v=0;if(o.holdingsTable&&o.holdingsTable.rows.length>0){const s=o.holdingsTable.rows;let d=0,n=0;s.forEach(e=>{const a=e.find(m=>y(m)!==null),p=a&&y(a)||0;d+=p,p<n&&(n=p),r++}),t=d,v=n}if(o.predictionTable&&o.predictionTable.rows.length>0){let s=0,d=0;o.predictionTable.rows.forEach(n=>{for(const e of n){const a=(e||"").split("/");a.length===2&&(s+=parseInt(a[0])||0,d+=parseInt(a[1])||0)}}),d>0&&(i=Math.round(s/d*100))}return{totalPL:t,winRate:i,tradeCount:r,maxDrawdown:v}}function Y(c,o,t){gStateManager.setSection("tab-overview",StateLifecycle.LOADING);if(!o){gStateManager.setSection("tab-overview",StateLifecycle.EMPTY);c.innerHTML='<div class="inv-empty"><div class="inv-empty-icon">📊</div><div class="inv-empty-text">暂无市场全景数据</div></div>';return}const i=o||{};let r='<div class="inv-fade">';r+='<div id="inv-date-bar-placeholder"></div>',i.overviewText&&(r+=`<div class="inv-overview-text">${i.overviewText.replace(/\n/g,"<br>")}</div>`),i.indexTable&&i.indexTable.rows.length>0&&(r+='<div class="inv-index-strip">',i.indexTable.rows.forEach(v=>{const s=v[0]||"",d=v[1]||"—",n=(v[2]||"").replace(/[%％]/g,""),e=parseFloat(n)||0,a=e>=0?"pos":"neg",p=e>=0?"▲":"▼";r+=`<div class="inv-index-mini">
        <div class="inv-index-name">${H(s)}</div>
        <div class="inv-index-value">${d}</div>
        <div class="inv-index-change ${a}">${p} ${Math.abs(e).toFixed(2)}%</div>
      </div>`}),r+="</div>"),r+='<div class="inv-dual">',r+='<div class="inv-chart-box"><div class="inv-sub-title">指数走势</div>',r+='<canvas id="inv-overview-line" style="width:100%;height:280px"></canvas></div>',r+='<div class="inv-chart-box"><div class="inv-sub-title">板块热度 TOP5</div>',r+='<div class="inv-sector-list">',i.sectorSubs&&i.sectorSubs.length>0?i.sectorSubs.slice(0,5).forEach((v,s)=>{const d=(v.content||"").match(/([+-]?\d+\.?\d*)\s*%/),n=d?parseFloat(d[1]):0,e=Math.abs(n),a=n>=0?"pos":"neg";r+=`<div class="inv-sector-row">
        <span class="inv-sector-rank">${s+1}</span>
        <span class="inv-sector-name">${v.title.substring(0,8)}</span>
        <div class="inv-sector-bar-wrap"><div class="inv-sector-bar" style="width:${Math.min(e*6,100)}%"></div></div>
        <span class="inv-sector-pct ${a}">${n>=0?"+":""}${n.toFixed(2)}%</span>
      </div>`}):i.sectorBullets&&i.sectorBullets.length>0?i.sectorBullets.slice(0,5).forEach((v,s)=>{const d=v.match(/([+-]?\d+\.?\d*)\s*%/),n=d?parseFloat(d[1]):0,e=Math.abs(n),a=n>=0?"pos":"neg";r+=`<div class="inv-sector-row">
        <span class="inv-sector-rank">${s+1}</span>
        <span class="inv-sector-name">${v.substring(0,10)}</span>
        <div class="inv-sector-bar-wrap"><div class="inv-sector-bar" style="width:${Math.min(e*6,100)}%"></div></div>
        <span class="inv-sector-pct ${a}">${n>=0?"+":""}${n.toFixed(2)}%</span>
      </div>`}):r+='<div class="inv-empty"><div class="inv-empty-icon">🔥</div><div class="inv-empty-text">暂无板块热点数据</div></div>',r+="</div></div></div>",r+="</div>",c.innerHTML=r,gStateManager.setSection("tab-overview",StateLifecycle.LOADED),requestAnimationFrame(()=>{const v=document.getElementById("inv-overview-line");if(!v||v.offsetWidth===0||v.offsetHeight===0){gStateManager.setSection("chart-overview",StateLifecycle.ERROR);return}if(!i.indexTable)return;const s=i.indexTable.rows;if(s.length===0)return;const d=s.map(e=>H(e[0]||"")),n=s.map(e=>{const a=(e[2]||"").replace(/[%％]/g,"");return parseFloat(a)||0});B(v,{labels:d,series:[{name:"涨跌幅%",data:n,color:"#22C55E"}]},{area:$,hideLegend:!0})})}function G(c,o){gStateManager.setSection("tab-holdings",StateLifecycle.LOADING);if(!o){gStateManager.setSection("tab-holdings",StateLifecycle.EMPTY);c.innerHTML='<div class="inv-empty"><div class="inv-empty-icon">💼</div><div class="inv-empty-text">暂无持仓数据</div></div>';return}const t=o||{};let i='<div class="inv-fade">';if(i+='<div id="inv-date-bar-placeholder"></div>',!t.holdingsTable||t.holdingsTable.rows.length===0){i+='<div class="inv-empty"><div class="inv-empty-icon">💼</div><div class="inv-empty-text">暂无持仓数据</div></div>',i+="</div>",c.innerHTML=i;return}const r=t.holdingsTable.rows;t.holdingsTable.headers;const v=r.map((s,d)=>({label:(s[1]||s[0]||"").substring(0,6),value:Math.abs(V(s[s.length-1])||10+d)}));i+='<div class="inv-holdings-layout">',i+='<div class="inv-chart-box"><div class="inv-sub-title">仓位分布</div>',i+='<canvas id="inv-holdings-donut" style="width:100%;height:240px"></canvas></div>',i+='<div class="inv-table-wrap"><table class="inv-table"><thead><tr>',i+="<th>代码</th><th>名称</th><th>成本价</th><th>现价</th><th>盈亏</th><th>占比</th>",i+="</tr></thead><tbody>",r.forEach(s=>{const d=(s[0]||"").substring(0,10),n=(s[1]||s[0]||"").substring(0,8),e=s[2]||"—",a=s[3]||"—",p=s[4]||s.find(h=>y(h)!==null)||"—",m=y(p),g=m!==null?m>=0?"pos":"neg":"",u=s[s.length-1]||"—";i+=`<tr>
      <td class="mono">${d}</td>
      <td>${n}</td>
      <td>${e}</td>
      <td>${a}</td>
      <td class="${g}">${p}</td>
      <td>${u}</td>
    </tr>`}),i+="</tbody></table></div></div>",i+="</div>",c.innerHTML=i,gStateManager.setSection("tab-holdings",StateLifecycle.LOADED),requestAnimationFrame(()=>{const s=document.getElementById("inv-holdings-donut");if(!s||s.offsetWidth===0||s.offsetHeight===0){gStateManager.setSection("chart-holdings",StateLifecycle.ERROR)}else{q(s,v,{area:$})}})}function U(c,o){gStateManager.setSection("tab-risk",StateLifecycle.LOADING);if(!o){gStateManager.setSection("tab-risk",StateLifecycle.EMPTY);c.innerHTML='<div class="inv-empty"><div class="inv-empty-icon">⚠️</div><div class="inv-empty-text">暂无风险评估数据</div></div>';return}const t=o||{};let i='<div class="inv-fade">';i+='<div id="inv-date-bar-placeholder"></div>';let r=0,v=0,s=0,d=0,n=0;if(t.predictionTable&&t.predictionTable.rows.length>0){const e=t.predictionTable.rows;let a=0,p=0;e.forEach(m=>{v++;for(const g of m){const u=(g||"").split("/");u.length===2&&(a+=parseInt(u[0])||0,p+=parseInt(u[1])||0)}}),p>0&&(r=Math.round(a/p*100))}t.riskItems&&t.riskItems.length>0&&t.riskItems.forEach(e=>{(e.includes("高")||e.includes("减弱")||e.includes("缩小"))&&s++}),t.strategyTable&&t.strategyTable.rows.length>0&&t.strategyTable.rows.forEach(e=>{const a=(e[0]||"").trim();(a.includes("买入")||a.includes("增仓")||a.includes("关注"))&&d++,(a.includes("卖出")||a.includes("减仓")||a.includes("谨慎"))&&n++}),i+='<div class="inv-holdings-layout">',i+='<div class="inv-chart-box"><div class="inv-sub-title">综合风险指数</div>',i+='<canvas id="inv-risk-gauge" style="width:100%;height:220px"></canvas></div>',i+='<div class="inv-risk-grid">',i+=x("预测准确率",`${r}%`,r>=70?"green":r>=40?"yellow":"red",r>=70?"准确":r>=40?"一般":"偏低"),i+=x("最大偏差",t.maxDeviation||"—",(t.maxDeviation||"").includes("大")?"red":"yellow","关注"),i+=x("风险信号",`${s}`,s===0?"green":s<=1?"yellow":"red",s===0?"无异常":`活跃${s}项`),i+=x("看多/看空",`${d}/${n}`,d>=n?"green":"red",d>=n?"偏多":"偏空"),i+=x("评估维度",`${v}`,v>=3?"green":"yellow",v>=3?"充分":"不足"),i+=x("操作建议",t.suggestionTable?`${t.suggestionTable.rows.length}条`:"—","yellow","已生成"),i+="</div></div>",t.riskItems&&t.riskItems.length>0&&(i+='<div class="inv-sub-title" style="margin-top:var(--space-5)">风险摘要</div>',i+='<div class="inv-risk-summary">',t.riskItems.forEach(e=>{const a=e.includes("高")?"🔴":e.includes("减弱")?"🟡":"🟢";i+=`<div style="margin-bottom:6px">${a} ${e}</div>`}),i+="</div>"),t.outlookTable&&t.outlookTable.rows.length>0&&(i+='<div class="inv-sub-title" style="margin-top:var(--space-5)">走势预判情景</div>',i+='<div class="inv-table-wrap"><table class="inv-table"><thead><tr>',(t.outlookTable.headers||["情景","概率","依据"]).forEach(e=>i+=`<th>${e}</th>`),i+="</tr></thead><tbody>",t.outlookTable.rows.forEach(e=>{i+="<tr>",e.forEach((a,p)=>{const m=y(a);let g="";m!==null&&(g=m>=50?"pos":"neg"),i+=`<td class="${g}">${a}</td>`}),i+="</tr>"}),i+="</tbody></table></div>"),i+="</div>",c.innerHTML=i,gStateManager.setSection("tab-risk",StateLifecycle.LOADED),requestAnimationFrame(()=>{const e=document.getElementById("inv-risk-gauge");if(!e||e.offsetWidth===0||e.offsetHeight===0){gStateManager.setSection("chart-risk",StateLifecycle.ERROR)}else{j(e,{value:r>0?r:50,max:100,min:0,label:"综合准确率"},{area:$})}})}function x(c,o,t,i){return`<div class="inv-metric-card">
    <div class="inv-metric-value">${o}</div>
    <div class="inv-metric-label">${c}</div>
    <div class="inv-metric-status"><span class="inv-metric-dot ${t}"></span>${i}</div>
  </div>`}function W(c,o){gStateManager.setSection("tab-strategy",StateLifecycle.LOADING);if(!o){gStateManager.setSection("tab-strategy",StateLifecycle.EMPTY);c.innerHTML='<div class="inv-empty"><div class="inv-empty-icon">📜</div><div class="inv-empty-text">暂无操作复盘数据</div></div>';return}const t=o||{};let i='<div class="inv-fade">';i+='<div id="inv-date-bar-placeholder"></div>';const r=[];if(t.predictionTable&&t.predictionTable.rows.length>0){const n=t.predictionTable.rows,e=t.predictionTable.headers;n.forEach(a=>{const p=a[0]||"",m=e.findIndex(f=>f&&(f.includes("正确")||f.includes("/"))),g=e.findIndex(f=>f&&f.includes("准确率"));let u="";m>=0&&a[m]?u=`正确 ${a[m]}`:g>=0&&a[g]&&(u=`准确率 ${a[g]}`);const h=g>=0&&y(a[g])||0;r.push({date:"预测",title:p.substring(0,20)||"维度评估",description:u,status:h>=70?"success":h>=40?"warning":"danger"})})}t.strategyTable&&t.strategyTable.rows.length>0&&t.strategyTable.rows.forEach(e=>{const a=(e[0]||"").trim(),p=e[1]||"",m=a.includes("买入")||a.includes("增仓")||a.includes("关注"),g=a.includes("卖出")||a.includes("减仓");r.push({date:m?"买入":g?"卖出":"持有",title:p.substring(0,20)||a.substring(0,20),description:a,status:m?"success":g?"danger":"warning"})}),t.suggestionTable&&t.suggestionTable.rows.length>0&&t.suggestionTable.rows.forEach((n,e)=>{r.push({date:`建议${e+1}`,title:(n[1]||n[0]||"").substring(0,20),description:(n[0]||"").substring(0,30),status:"info"})}),i+='<div class="inv-timeline-wrap"><div class="inv-sub-title">操作时间线</div>',r.length>0?i+=`<canvas id="inv-timeline" style="width:100%;height:${Math.max(280,r.length*64+20)}px"></canvas>`:i+='<div class="inv-empty"><div class="inv-empty-icon">📜</div><div class="inv-empty-text">暂无操作记录</div></div>',i+="</div>",t.strategyTable&&t.strategyTable.rows.length>0&&(i+='<div class="inv-sub-title">明日策略</div>',i+='<div class="inv-table-wrap"><table class="inv-table"><thead><tr>',(t.strategyTable.headers||["策略","标的","理由"]).forEach(n=>i+=`<th>${n}</th>`),i+="</tr></thead><tbody>",t.strategyTable.rows.forEach(n=>{const e=(n[0]||"").trim();let a="";e.includes("买入")||e.includes("增仓")?a=' style="border-left:2px solid var(--color-success)"':(e.includes("卖出")||e.includes("减仓"))&&(a=' style="border-left:2px solid var(--color-danger)"'),i+=`<tr${a}>`,n.forEach(p=>i+=`<td>${p}</td>`),i+="</tr>"}),i+="</tbody></table></div>");const v=r.length,s=r.filter(n=>n.status==="success").length,d=r.filter(n=>n.status==="danger").length;i+='<div class="inv-stats-footer">',i+=`<div class="inv-stat-card"><div class="inv-stat-value">${v}</div><div class="inv-stat-label">总操作数</div></div>`,i+=`<div class="inv-stat-card"><div class="inv-stat-value">${s}</div><div class="inv-stat-label">买入/增仓</div><div class="inv-stat-delta pos">看多</div></div>`,i+=`<div class="inv-stat-card"><div class="inv-stat-value">${d}</div><div class="inv-stat-label">卖出/减仓</div><div class="inv-stat-delta neg">看空</div></div>`,i+="</div>",t.maxDeviation&&(i+=`<div style="margin-top:var(--space-4);padding:10px 14px;border-radius:var(--radius-md);background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.20);font-size:12px;color:var(--color-warning);"><strong>最大偏差：</strong>${t.maxDeviation}</div>`),i+="</div>",c.innerHTML=i,gStateManager.setSection("tab-strategy",StateLifecycle.LOADED),requestAnimationFrame(()=>{const n=document.getElementById("inv-timeline");if(!n||n.offsetWidth===0||n.offsetHeight===0){gStateManager.setSection("chart-timeline",StateLifecycle.ERROR)}else if(r.length>0){F(n,r,{area:$,itemHeight:64})}})}function J(c){c.innerHTML=`
    <div class="inv-detail">
      <div class="inv-topbar">
        <div class="inv-skeleton" style="width:60px;height:16px"></div>
        <div class="inv-skeleton" style="width:100px;height:20px"></div>
      </div>
      <div class="inv-kpi-strip">
        ${Array(4).fill('<div class="inv-kpi-card"><div class="inv-skeleton inv-skeleton-kpi"></div><div class="inv-skeleton inv-skeleton-line"></div></div>').join("")}
      </div>
      <div class="inv-body">
        <div class="inv-nav" style="width:${D}px">
          ${Array(4).fill('<div class="inv-skeleton inv-skeleton-line" style="margin:8px 12px;height:36px"></div>').join("")}
        </div>
        <div class="inv-main">
          <div class="inv-skeleton" style="height:24px;width:40%;margin-bottom:16px"></div>
          <div class="inv-skeleton inv-skeleton-line" style="width:100%"></div>
          <div class="inv-skeleton inv-skeleton-line" style="width:100%"></div>
          <div class="inv-skeleton inv-skeleton-line" style="width:70%"></div>
        </div>
      </div>
    </div>`}async function ti(c,o,t){O(),J(c);const[{setTheme:i}]=await Promise.all([A(()=>import("./design-system-Du44DDix.js").then(l=>l.d),[])]);i("investing");const r=document.getElementById("header"),v=document.getElementById("site-title");r&&(r.style.background="",r.style.boxShadow=""),v&&(v.innerHTML="📈&nbsp;&nbsp;投资分析",v.classList.add("detail-badge"),v.style.color="");let s=[];try{const l=await fetch("./investing/index.json");l.ok&&(s=await l.json())}catch{}if(s.length===0){c.innerHTML='<div class="inv-empty" style="margin-top:80px"><div class="inv-empty-icon">📈</div><div class="inv-empty-text">暂无投资数据</div></div>';return}const d=s.filter(l=>/\.md$/i.test(l)),n=await K(d);gStateManager.markFetchTime();if(d.length===0){c.innerHTML='<div class="inv-empty" style="margin-top:80px"><div class="inv-empty-icon">📈</div><div class="inv-empty-text">暂无研究报告数据</div></div>';return}let e=d[0];if(t){const l=d.find(b=>b===t);l&&(e=l)}const a=(location.hash.slice(1)||"").split("/").filter(Boolean);let p="overview";a.length>=2&&z.find(l=>l.key===a[1])&&(p=a[1]);function m(l){const b=n[l]||"";return R(b,l).data}let g=m(e);const u=P(g);function h(){const l="inv-section-content";c.innerHTML=`
      <div class="inv-detail theme-${$}">
        <div class="inv-topbar">
          <button class="inv-back-btn" id="inv-back-btn">← 首页</button>
          <span class="inv-topbar-title">投资分析 · 研究报告</span>
        </div>
        <div class="inv-kpi-strip" id="inv-kpi-strip"></div>
        <div class="inv-body">
          <nav class="inv-nav" id="inv-nav"></nav>
          <main class="inv-main">
            <div class="inv-date-bar" id="inv-date-bar"></div>
            <div id="${l}"></div>
          </main>
        </div>
      </div>`,c.querySelector("#inv-back-btn").addEventListener("click",b=>{b.preventDefault(),M("")}),f(),S(),E(),I()}function f(){const l=c.querySelector("#inv-date-bar");l&&(l.innerHTML=`
      <span class="inv-date-label">研究报告：</span>
      ${d.map(b=>`<button class="inv-date-pill${b===e?" active":""}" data-file="${b}">${C(b)}</button>`).join("")}
    `,l.querySelectorAll(".inv-date-pill").forEach(b=>{b.addEventListener("click",()=>{e=b.dataset.file,g=m(e);gStateManager.markFetchTime();const k=P(g);Object.assign(u,k),f(),I(),E(),S()})}))}function S(){const l=c.querySelector("#inv-nav");l&&(l.innerHTML=z.map(b=>`<div class="inv-nav-item${b.key===p?" active":""}" data-section="${b.key}">
        <span>${b.icon}</span><span>${b.label}</span>
      </div>`).join(""),l.querySelectorAll(".inv-nav-item").forEach(b=>{b.addEventListener("click",()=>{l.querySelectorAll(".inv-nav-item").forEach(k=>k.classList.remove("active")),b.classList.add("active"),p=b.dataset.section,M(`#investing/${p}`),E()})}))}function I(){const l=c.querySelector("#inv-kpi-strip");if(!l)return;if(u.totalPL===0&&u.tradeCount===0){l.innerHTML=`
        <div class="inv-kpi-card" data-section="kpi-title">
          <div class="inv-kpi-label">报告标题</div>
          <div class="inv-kpi-value" style="font-size:18px">${C(e)}</div>
          <div class="inv-kpi-delta">研究报告</div>
        </div>
        <div class="inv-kpi-card" data-section="kpi-filename">
          <div class="inv-kpi-label">文件名</div>
          <div class="inv-kpi-value" style="font-size:14px">${e.replace(".md","")}</div>
          <div class="inv-kpi-delta">原始文件</div>
        </div>
        <div class="inv-kpi-card" data-section="kpi-count">
          <div class="inv-kpi-label">报告数量</div>
          <div class="inv-kpi-value">${d.length}</div>
          <div class="inv-kpi-delta">共 ${d.length} 份研究报告</div>
        </div>
        <div class="inv-kpi-card" data-section="kpi-views">
          <div class="inv-kpi-label">数据视图</div>
          <div class="inv-kpi-value" style="font-size:20px">${z.length}</div>
          <div class="inv-kpi-delta">市场全景 / 持仓分析 / 风险评估 / 操作复盘</div>
        </div>`;return}const b=u.totalPL>=0?"pos":"neg",k=u.totalPL>=0?"▲":"▼",_=u.winRate>=60?"pos":u.winRate>=40?"":"neg",L=u.maxDrawdown>=-3?"pos":"neg";l.innerHTML=`
      <div class="inv-kpi-card" data-section="kpi-totalpl">
        <div class="inv-kpi-label">总盈亏</div>
        <div class="inv-kpi-value ${b}">${u.totalPL>=0?"+":""}${u.totalPL.toFixed(2)}%</div>
        <div class="inv-kpi-delta ${b}">${k} 当日汇总</div>
      </div>
      <div class="inv-kpi-card" data-section="kpi-winrate">
        <div class="inv-kpi-label">胜率</div>
        <div class="inv-kpi-value">${u.winRate}%</div>
        <div class="inv-kpi-delta ${_}">预测维度准确率</div>
      </div>
      <div class="inv-kpi-card" data-section="kpi-tradecount">
        <div class="inv-kpi-label">交易次数</div>
        <div class="inv-kpi-value">${u.tradeCount}</div>
        <div class="inv-kpi-delta">持仓标的数</div>
      </div>
      <div class="inv-kpi-card" data-section="kpi-maxdd">
        <div class="inv-kpi-label">最大回撤</div>
        <div class="inv-kpi-value ${L}">${u.maxDrawdown.toFixed(2)}%</div>
        <div class="inv-kpi-delta ${L}">${Math.abs(u.maxDrawdown)<=3?"可控":"关注"}</div>
      </div>`;gStateManager.setSection('kpi-strip',StateLifecycle.LOADED)}function showStaleBanner(){const e=document.querySelector(".inv-stale-banner");e&&e.remove();const t=document.createElement("div");t.className="inv-stale-banner";const n=gStateManager.getLastFetchTime()?Math.floor((Date.now()-gStateManager.getLastFetchTime())/6e4):0;t.innerHTML='\u26a0\ufe0f 数据可能已过期，上次更新：'+n+'分钟前 <button id="inv-refresh-btn">刷新</button>',c.querySelector(".inv-main").insertBefore(t,c.querySelector(".inv-main").firstChild),document.getElementById("inv-refresh-btn").addEventListener("click",()=>{gStateManager.markFetchTime();const r=c.querySelector(".inv-stale-banner");r&&r.remove();E()})}function E(){const l=c.querySelector("#inv-section-content");if(l){if(!g){l.innerHTML='<div class="inv-empty"><div class="inv-empty-icon">📄</div><div class="inv-empty-text">暂无该报告数据</div></div>';return}if(gStateManager.isStale(6e5)){showStaleBanner()}switch(p){case"overview":Y(l,g);break;case"holdings":G(l,g);break;case"risk":U(l,g);break;case"strategy":W(l,g);break}}}h()}export{z as SECTIONS,P as computeKPIs,ti as renderInvestingDetail};
