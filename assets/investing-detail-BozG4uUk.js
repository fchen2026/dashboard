import{n as C}from"./core-DDXb6Xp5.js";import{I as T}from"./icons-MAhxDzb9.js";import{c as A,d as F,r as P,b as B}from"./charts-BQDrhLXk.js";import{b as q,a as w,c as O}from"./parsers-Bt4hCy--.js";import"./design-system-BaUf1BHL.js";const L=[{key:"overview",icon:T.overview.emoji,label:"市场全景"},{key:"holdings",icon:T.holdings.emoji,label:"持仓分析"},{key:"risk",icon:T.risk.emoji,label:"风险评估"},{key:"strategy",icon:T.strategy.emoji,label:"操作复盘"}],$="investing",j=160;let k=null;function V(){k||(k=document.createElement("style"),k.id="investing-detail-styles",k.textContent=`
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
}
.inv-kpi-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: 16px 20px;
  transition: border-color var(--transition-normal), background var(--transition-normal);
}
.inv-kpi-card:hover { background: rgba(255,255,255,0.05); border-color: rgba(var(--color-accent-rgb),0.30); }
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
.inv-body { display: flex; flex: 1; overflow: hidden; }
.inv-nav {
  width: ${j}px; flex-shrink: 0;
  border-right: 1px solid var(--color-border-default);
  padding: var(--space-3) 0; overflow-y: auto;
  background: var(--color-bg-base);
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
  border: 1px solid var(--color-border-default); background: transparent;
  cursor: pointer; transition: all var(--transition-fast);
  font-variant-numeric: tabular-nums; font-family: var(--font-sans);
}
.inv-date-pill:hover { border-color: var(--color-border-strong); color: var(--color-text-primary); }
.inv-date-pill.active { background: var(--color-accent); color: #0A0A0F; border-color: var(--color-accent); }

/* ─── Section Headers ─── */
.inv-section-title {
  font-size: 16px; font-weight: 600; letter-spacing: -0.02em;
  color: var(--color-text-primary); margin-bottom: var(--space-5);
}
.inv-sub-title {
  font-size: 12px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-text-tertiary); margin-bottom: var(--space-3);
}

/* ─── Cards ─── */
.inv-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: 20px 24px;
  margin-bottom: var(--space-4);
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
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: 14px 16px;
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
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: 16px 20px;
}
.inv-metric-value { font-size: 28px; font-weight: 700; font-variant-numeric: tabular-nums; color: var(--color-text-primary); line-height: 1.2; }
.inv-metric-label { font-size: 12px; font-weight: 500; color: var(--color-text-secondary); margin-top: 4px; }
.inv-metric-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 6px; flex-shrink: 0; }
.inv-metric-dot.green { background: var(--color-success); }
.inv-metric-dot.yellow { background: var(--color-warning); }
.inv-metric-dot.red { background: var(--color-danger); }
.inv-metric-status { display: flex; align-items: center; font-size: 12px; color: var(--color-text-secondary); margin-top: 4px; }

/* ─── Risk Summary ─── */
.inv-risk-summary { font-size: 13px; line-height: 1.7; color: var(--color-text-secondary); padding: var(--space-4); border-radius: var(--radius-lg); background: rgba(255,255,255,0.02); border: 1px solid var(--color-border-default); }

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
.inv-overview-text { font-size: 13px; line-height: 1.7; color: var(--color-text-secondary); margin-bottom: var(--space-5); padding: var(--space-4); border-radius: var(--radius-lg); background: rgba(255,255,255,0.02); border: 1px solid var(--color-border-default); }

/* ─── Fade In ─── */
@keyframes inv-fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
.inv-fade { animation: inv-fadein 200ms ease-out; }

@media (prefers-reduced-motion: reduce) {
  .inv-fade { animation: none; }
  .inv-kpi-card, .inv-nav-item, .inv-date-pill, .inv-index-mini, .inv-sector-row, .inv-table tbody tr { transition: none; }
}
`,document.head.appendChild(k))}function R(o){return`./investing/${o}`}async function N(o){const c={};return await Promise.all(o.map(async t=>{try{const i=await fetch(R(t));i.ok&&(c[t]=await i.text())}catch{}})),c}function K(o){const c={};return o.forEach(i=>{const a=i.match(/^(\d{4}-\d{2}-\d{2})\.md$/);if(!a)return;const d=a[1];c[d]||(c[d]=[]),c[d].push(i)}),Object.entries(c).sort((i,a)=>a[0].localeCompare(i[0])).map(([i,a])=>({date:i,files:a}))}function D(o){const c=(o||"").replace(/\s/g,"");return c.includes("上证")||c.includes("沪指")?"上证综指":c.includes("深证")||c.includes("深成")?"深证成指":c.includes("创业")?"创业板指":o||""}function H(o){const c=o||{};let t=0,i=0,a=0,d=0;if(c.holdingsTable&&c.holdingsTable.rows.length>0){const s=c.holdingsTable.rows;let v=0,r=0;s.forEach(e=>{const n=e.find(m=>w(m)!==null),g=n&&w(n)||0;v+=g,g<r&&(r=g),a++}),t=v,d=r}if(c.predictionTable&&c.predictionTable.rows.length>0){let s=0,v=0;c.predictionTable.rows.forEach(r=>{for(const e of r){const n=(e||"").split("/");n.length===2&&(s+=parseInt(n[0])||0,v+=parseInt(n[1])||0)}}),v>0&&(i=Math.round(s/v*100))}return{totalPL:t,winRate:i,tradeCount:a,maxDrawdown:d}}function _(o,c,t){const i=c||{};let a='<div class="inv-fade">';a+='<div id="inv-date-bar-placeholder"></div>',i.overviewText&&(a+=`<div class="inv-overview-text">${i.overviewText.replace(/\n/g,"<br>")}</div>`),i.indexTable&&i.indexTable.rows.length>0&&(a+='<div class="inv-index-strip">',i.indexTable.rows.forEach(d=>{const s=d[0]||"",v=d[1]||"—",r=(d[2]||"").replace(/[%％]/g,""),e=parseFloat(r)||0,n=e>=0?"pos":"neg",g=e>=0?"▲":"▼";a+=`<div class="inv-index-mini">
        <div class="inv-index-name">${D(s)}</div>
        <div class="inv-index-value">${v}</div>
        <div class="inv-index-change ${n}">${g} ${Math.abs(e).toFixed(2)}%</div>
      </div>`}),a+="</div>"),a+='<div class="inv-dual">',a+='<div class="inv-chart-box"><div class="inv-sub-title">指数走势</div>',a+='<canvas id="inv-overview-line" style="width:100%;height:280px"></canvas></div>',a+='<div class="inv-chart-box"><div class="inv-sub-title">板块热度 TOP5</div>',a+='<div class="inv-sector-list">',i.sectorSubs&&i.sectorSubs.length>0?i.sectorSubs.slice(0,5).forEach((d,s)=>{const v=(d.content||"").match(/([+-]?\d+\.?\d*)\s*%/),r=v?parseFloat(v[1]):0,e=Math.abs(r),n=r>=0?"pos":"neg";a+=`<div class="inv-sector-row">
        <span class="inv-sector-rank">${s+1}</span>
        <span class="inv-sector-name">${d.title.substring(0,8)}</span>
        <div class="inv-sector-bar-wrap"><div class="inv-sector-bar" style="width:${Math.min(e*6,100)}%"></div></div>
        <span class="inv-sector-pct ${n}">${r>=0?"+":""}${r.toFixed(2)}%</span>
      </div>`}):i.sectorBullets&&i.sectorBullets.length>0?i.sectorBullets.slice(0,5).forEach((d,s)=>{const v=d.match(/([+-]?\d+\.?\d*)\s*%/),r=v?parseFloat(v[1]):0,e=Math.abs(r),n=r>=0?"pos":"neg";a+=`<div class="inv-sector-row">
        <span class="inv-sector-rank">${s+1}</span>
        <span class="inv-sector-name">${d.substring(0,10)}</span>
        <div class="inv-sector-bar-wrap"><div class="inv-sector-bar" style="width:${Math.min(e*6,100)}%"></div></div>
        <span class="inv-sector-pct ${n}">${r>=0?"+":""}${r.toFixed(2)}%</span>
      </div>`}):a+='<div class="inv-empty"><div class="inv-empty-icon">🔥</div><div class="inv-empty-text">暂无板块热点数据</div></div>',a+="</div></div></div>",a+="</div>",o.innerHTML=a,requestAnimationFrame(()=>{const d=document.getElementById("inv-overview-line");if(!d||!i.indexTable)return;const s=i.indexTable.rows;if(s.length===0)return;const v=s.map(e=>D(e[0]||"")),r=s.map(e=>{const n=(e[2]||"").replace(/[%％]/g,"");return parseFloat(n)||0});B(d,{labels:v,series:[{name:"涨跌幅%",data:r,color:"#22C55E"}]},{area:$,hideLegend:!0})})}function G(o,c){const t=c||{};let i='<div class="inv-fade">';if(i+='<div id="inv-date-bar-placeholder"></div>',!t.holdingsTable||t.holdingsTable.rows.length===0){i+='<div class="inv-empty"><div class="inv-empty-icon">💼</div><div class="inv-empty-text">暂无持仓数据</div></div>',i+="</div>",o.innerHTML=i;return}const a=t.holdingsTable.rows;t.holdingsTable.headers;const d=a.map((s,v)=>({label:(s[1]||s[0]||"").substring(0,6),value:Math.abs(O(s[s.length-1])||10+v)}));i+='<div class="inv-holdings-layout">',i+='<div class="inv-chart-box"><div class="inv-sub-title">仓位分布</div>',i+='<canvas id="inv-holdings-donut" style="width:100%;height:240px"></canvas></div>',i+='<div class="inv-table-wrap"><table class="inv-table"><thead><tr>',i+="<th>代码</th><th>名称</th><th>成本价</th><th>现价</th><th>盈亏</th><th>占比</th>",i+="</tr></thead><tbody>",a.forEach(s=>{const v=(s[0]||"").substring(0,10),r=(s[1]||s[0]||"").substring(0,8),e=s[2]||"—",n=s[3]||"—",g=s[4]||s.find(x=>w(x)!==null)||"—",m=w(g),u=m!==null?m>=0?"pos":"neg":"",b=s[s.length-1]||"—";i+=`<tr>
      <td class="mono">${v}</td>
      <td>${r}</td>
      <td>${e}</td>
      <td>${n}</td>
      <td class="${u}">${g}</td>
      <td>${b}</td>
    </tr>`}),i+="</tbody></table></div></div>",i+="</div>",o.innerHTML=i,requestAnimationFrame(()=>{const s=document.getElementById("inv-holdings-donut");s&&P(s,d,{area:$})})}function Y(o,c){const t=c||{};let i='<div class="inv-fade">';i+='<div id="inv-date-bar-placeholder"></div>';let a=0,d=0,s=0,v=0,r=0;if(t.predictionTable&&t.predictionTable.rows.length>0){const e=t.predictionTable.rows;let n=0,g=0;e.forEach(m=>{d++;for(const u of m){const b=(u||"").split("/");b.length===2&&(n+=parseInt(b[0])||0,g+=parseInt(b[1])||0)}}),g>0&&(a=Math.round(n/g*100))}t.riskItems&&t.riskItems.length>0&&t.riskItems.forEach(e=>{(e.includes("高")||e.includes("减弱")||e.includes("缩小"))&&s++}),t.strategyTable&&t.strategyTable.rows.length>0&&t.strategyTable.rows.forEach(e=>{const n=(e[0]||"").trim();(n.includes("买入")||n.includes("增仓")||n.includes("关注"))&&v++,(n.includes("卖出")||n.includes("减仓")||n.includes("谨慎"))&&r++}),i+='<div class="inv-holdings-layout">',i+='<div class="inv-chart-box"><div class="inv-sub-title">综合风险指数</div>',i+='<canvas id="inv-risk-gauge" style="width:100%;height:220px"></canvas></div>',i+='<div class="inv-risk-grid">',i+=y("预测准确率",`${a}%`,a>=70?"green":a>=40?"yellow":"red",a>=70?"准确":a>=40?"一般":"偏低"),i+=y("最大偏差",t.maxDeviation||"—",(t.maxDeviation||"").includes("大")?"red":"yellow","关注"),i+=y("风险信号",`${s}`,s===0?"green":s<=1?"yellow":"red",s===0?"无异常":`活跃${s}项`),i+=y("看多/看空",`${v}/${r}`,v>=r?"green":"red",v>=r?"偏多":"偏空"),i+=y("评估维度",`${d}`,d>=3?"green":"yellow",d>=3?"充分":"不足"),i+=y("操作建议",t.suggestionTable?`${t.suggestionTable.rows.length}条`:"—","yellow","已生成"),i+="</div></div>",t.riskItems&&t.riskItems.length>0&&(i+='<div class="inv-sub-title" style="margin-top:var(--space-5)">风险摘要</div>',i+='<div class="inv-risk-summary">',t.riskItems.forEach(e=>{const n=e.includes("高")?"🔴":e.includes("减弱")?"🟡":"🟢";i+=`<div style="margin-bottom:6px">${n} ${e}</div>`}),i+="</div>"),t.outlookTable&&t.outlookTable.rows.length>0&&(i+='<div class="inv-sub-title" style="margin-top:var(--space-5)">走势预判情景</div>',i+='<div class="inv-table-wrap"><table class="inv-table"><thead><tr>',(t.outlookTable.headers||["情景","概率","依据"]).forEach(e=>i+=`<th>${e}</th>`),i+="</tr></thead><tbody>",t.outlookTable.rows.forEach(e=>{i+="<tr>",e.forEach((n,g)=>{const m=w(n);let u="";m!==null&&(u=m>=50?"pos":"neg"),i+=`<td class="${u}">${n}</td>`}),i+="</tr>"}),i+="</tbody></table></div>"),i+="</div>",o.innerHTML=i,requestAnimationFrame(()=>{const e=document.getElementById("inv-risk-gauge");e&&F(e,{value:a>0?a:50,max:100,min:0,label:"综合准确率"},{area:$})})}function y(o,c,t,i){return`<div class="inv-metric-card">
    <div class="inv-metric-value">${c}</div>
    <div class="inv-metric-label">${o}</div>
    <div class="inv-metric-status"><span class="inv-metric-dot ${t}"></span>${i}</div>
  </div>`}function U(o,c){const t=c||{};let i='<div class="inv-fade">';i+='<div id="inv-date-bar-placeholder"></div>';const a=[];if(t.predictionTable&&t.predictionTable.rows.length>0){const r=t.predictionTable.rows,e=t.predictionTable.headers;r.forEach(n=>{const g=n[0]||"",m=e.findIndex(f=>f&&(f.includes("正确")||f.includes("/"))),u=e.findIndex(f=>f&&f.includes("准确率"));let b="";m>=0&&n[m]?b=`正确 ${n[m]}`:u>=0&&n[u]&&(b=`准确率 ${n[u]}`);const x=u>=0&&w(n[u])||0;a.push({date:"预测",title:g.substring(0,20)||"维度评估",description:b,status:x>=70?"success":x>=40?"warning":"danger"})})}t.strategyTable&&t.strategyTable.rows.length>0&&t.strategyTable.rows.forEach(e=>{const n=(e[0]||"").trim(),g=e[1]||"",m=n.includes("买入")||n.includes("增仓")||n.includes("关注"),u=n.includes("卖出")||n.includes("减仓");a.push({date:m?"买入":u?"卖出":"持有",title:g.substring(0,20)||n.substring(0,20),description:n,status:m?"success":u?"danger":"warning"})}),t.suggestionTable&&t.suggestionTable.rows.length>0&&t.suggestionTable.rows.forEach((r,e)=>{a.push({date:`建议${e+1}`,title:(r[1]||r[0]||"").substring(0,20),description:(r[0]||"").substring(0,30),status:"info"})}),i+='<div class="inv-timeline-wrap"><div class="inv-sub-title">操作时间线</div>',a.length>0?i+=`<canvas id="inv-timeline" style="width:100%;height:${Math.max(280,a.length*64+20)}px"></canvas>`:i+='<div class="inv-empty"><div class="inv-empty-icon">📜</div><div class="inv-empty-text">暂无操作记录</div></div>',i+="</div>",t.strategyTable&&t.strategyTable.rows.length>0&&(i+='<div class="inv-sub-title">明日策略</div>',i+='<div class="inv-table-wrap"><table class="inv-table"><thead><tr>',(t.strategyTable.headers||["策略","标的","理由"]).forEach(r=>i+=`<th>${r}</th>`),i+="</tr></thead><tbody>",t.strategyTable.rows.forEach(r=>{const e=(r[0]||"").trim();let n="";e.includes("买入")||e.includes("增仓")?n=' style="border-left:2px solid var(--color-success)"':(e.includes("卖出")||e.includes("减仓"))&&(n=' style="border-left:2px solid var(--color-danger)"'),i+=`<tr${n}>`,r.forEach(g=>i+=`<td>${g}</td>`),i+="</tr>"}),i+="</tbody></table></div>");const d=a.length,s=a.filter(r=>r.status==="success").length,v=a.filter(r=>r.status==="danger").length;i+='<div class="inv-stats-footer">',i+=`<div class="inv-stat-card"><div class="inv-stat-value">${d}</div><div class="inv-stat-label">总操作数</div></div>`,i+=`<div class="inv-stat-card"><div class="inv-stat-value">${s}</div><div class="inv-stat-label">买入/增仓</div><div class="inv-stat-delta pos">看多</div></div>`,i+=`<div class="inv-stat-card"><div class="inv-stat-value">${v}</div><div class="inv-stat-label">卖出/减仓</div><div class="inv-stat-delta neg">看空</div></div>`,i+="</div>",t.maxDeviation&&(i+=`<div style="margin-top:var(--space-4);padding:10px 14px;border-radius:var(--radius-md);background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.20);font-size:12px;color:var(--color-warning);"><strong>最大偏差：</strong>${t.maxDeviation}</div>`),i+="</div>",o.innerHTML=i,requestAnimationFrame(()=>{const r=document.getElementById("inv-timeline");!r||a.length===0||A(r,a,{area:$,itemHeight:64})})}function W(o){o.innerHTML=`
    <div class="inv-detail">
      <div class="inv-topbar">
        <div class="inv-skeleton" style="width:60px;height:16px"></div>
        <div class="inv-skeleton" style="width:100px;height:20px"></div>
      </div>
      <div class="inv-kpi-strip">
        ${Array(4).fill('<div class="inv-kpi-card"><div class="inv-skeleton inv-skeleton-kpi"></div><div class="inv-skeleton inv-skeleton-line"></div></div>').join("")}
      </div>
      <div class="inv-body">
        <div class="inv-nav" style="width:${j}px">
          ${Array(4).fill('<div class="inv-skeleton inv-skeleton-line" style="margin:8px 12px;height:36px"></div>').join("")}
        </div>
        <div class="inv-main">
          <div class="inv-skeleton" style="height:24px;width:40%;margin-bottom:16px"></div>
          <div class="inv-skeleton inv-skeleton-line" style="width:100%"></div>
          <div class="inv-skeleton inv-skeleton-line" style="width:100%"></div>
          <div class="inv-skeleton inv-skeleton-line" style="width:70%"></div>
        </div>
      </div>
    </div>`}async function ti(o,c,t){V(),W(o);const i=document.getElementById("header"),a=document.getElementById("site-title");i&&(i.style.background="",i.style.boxShadow=""),a&&(a.innerHTML="📈&nbsp;&nbsp;投资分析",a.classList.add("detail-badge"),a.style.color="");let d=[];try{const l=await fetch("./investing/index.json");l.ok&&(d=await l.json())}catch{}if(d.length===0){o.innerHTML='<div class="inv-empty" style="margin-top:80px"><div class="inv-empty-icon">📈</div><div class="inv-empty-text">暂无投资数据</div></div>';return}const s=d.filter(l=>/^\d{4}-\d{2}-\d{2}\.md$/.test(l)),v=await N(s),r=K(s);if(r.length===0){o.innerHTML='<div class="inv-empty" style="margin-top:80px"><div class="inv-empty-icon">📈</div><div class="inv-empty-text">无有效日期数据</div></div>';return}let e=r[0].date;if(t){const l=t.replace(".md","");r.find(p=>p.date===l)&&(e=l)}const n=(location.hash.slice(1)||"").split("/").filter(Boolean);let g="overview";n.length>=2&&L.find(l=>l.key===n[1])&&(g=n[1]);function m(l){const p=r.find(S=>S.date===l);if(!p)return null;const h=v[p.files[0]]||"";return q(h,p.files[0]).data}let u=m(e);const b=H(u);function x(){const l="inv-section-content";o.innerHTML=`
      <div class="inv-detail theme-${$}">
        <div class="inv-topbar">
          <button class="inv-back-btn" id="inv-back-btn">← 首页</button>
          <span class="inv-topbar-title">投资分析 · 日报</span>
        </div>
        <div class="inv-kpi-strip" id="inv-kpi-strip"></div>
        <div class="inv-body">
          <nav class="inv-nav" id="inv-nav"></nav>
          <main class="inv-main">
            <div class="inv-date-bar" id="inv-date-bar"></div>
            <div id="${l}"></div>
          </main>
        </div>
      </div>`,o.querySelector("#inv-back-btn").addEventListener("click",p=>{p.preventDefault(),C("")}),f(),I(),E(),M()}function f(){const l=o.querySelector("#inv-date-bar");l&&(l.innerHTML=`
      <span class="inv-date-label">交易日：</span>
      ${r.map(p=>`<button class="inv-date-pill${p.date===e?" active":""}" data-date="${p.date}">${p.date}</button>`).join("")}
    `,l.querySelectorAll(".inv-date-pill").forEach(p=>{p.addEventListener("click",()=>{e=p.dataset.date,u=m(e);const h=H(u);Object.assign(b,h),f(),M(),E(),I()})}))}function I(){const l=o.querySelector("#inv-nav");l&&(l.innerHTML=L.map(p=>`<div class="inv-nav-item${p.key===g?" active":""}" data-section="${p.key}">
        <span>${p.icon}</span><span>${p.label}</span>
      </div>`).join(""),l.querySelectorAll(".inv-nav-item").forEach(p=>{p.addEventListener("click",()=>{l.querySelectorAll(".inv-nav-item").forEach(h=>h.classList.remove("active")),p.classList.add("active"),g=p.dataset.section,C(`#investing/${g}`),E()})}))}function M(){const l=o.querySelector("#inv-kpi-strip");if(!l)return;const p=b.totalPL>=0?"pos":"neg",h=b.totalPL>=0?"▲":"▼",S=b.winRate>=60?"pos":b.winRate>=40?"":"neg",z=b.maxDrawdown>=-3?"pos":"neg";l.innerHTML=`
      <div class="inv-kpi-card">
        <div class="inv-kpi-label">总盈亏</div>
        <div class="inv-kpi-value ${p}">${b.totalPL>=0?"+":""}${b.totalPL.toFixed(2)}%</div>
        <div class="inv-kpi-delta ${p}">${h} 当日汇总</div>
      </div>
      <div class="inv-kpi-card">
        <div class="inv-kpi-label">胜率</div>
        <div class="inv-kpi-value">${b.winRate}%</div>
        <div class="inv-kpi-delta ${S}">预测维度准确率</div>
      </div>
      <div class="inv-kpi-card">
        <div class="inv-kpi-label">交易次数</div>
        <div class="inv-kpi-value">${b.tradeCount}</div>
        <div class="inv-kpi-delta">持仓标的数</div>
      </div>
      <div class="inv-kpi-card">
        <div class="inv-kpi-label">最大回撤</div>
        <div class="inv-kpi-value ${z}">${b.maxDrawdown.toFixed(2)}%</div>
        <div class="inv-kpi-delta ${z}">${Math.abs(b.maxDrawdown)<=3?"可控":"关注"}</div>
      </div>`}function E(){const l=o.querySelector("#inv-section-content");if(l){if(!u){l.innerHTML='<div class="inv-empty"><div class="inv-empty-icon">📅</div><div class="inv-empty-text">暂无该日交易数据</div></div>';return}switch(g){case"overview":_(l,u);break;case"holdings":G(l,u);break;case"risk":Y(l,u);break;case"strategy":U(l,u);break}}}x()}export{L as SECTIONS,H as computeKPIs,ti as renderInvestingDetail};
