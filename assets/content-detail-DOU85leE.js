import{n as j}from"./core-DDXb6Xp5.js";import{I as L}from"./icons-MAhxDzb9.js";import{r as N,e as V,b as O}from"./charts-BQDrhLXk.js";import{s as P,d as F,c as H}from"./parsers-Bt4hCy--.js";import"./design-system-BaUf1BHL.js";const q=[{key:"hotspots",icon:L.hot.emoji,label:"热点趋势"},{key:"calendar",icon:L.calendar.emoji,label:"内容日历"},{key:"insights",icon:L.insight.emoji,label:"趋势洞察"}],A="content",_="#F59E0B",y="245,158,11",B=160;let T=null;function K(){T||(T=document.createElement("style"),T.id="content-detail-styles",T.textContent=`
/* ─── Layout ─── */
.cd-detail { display: flex; flex-direction: column; height: 100%; min-height: calc(100vh - 60px); }
.cd-topbar {
  display: flex; align-items: center; gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-border-default);
  background: var(--color-bg-raised);
}
.cd-topbar-title { font-size: 18px; font-weight: 700; letter-spacing: -0.02em; color: var(--color-text-primary); }
.cd-back-btn {
  display: inline-flex; align-items: center; gap: var(--space-1);
  font-size: 13px; font-weight: 500; color: var(--color-text-secondary);
  background: none; border: none; cursor: pointer; padding: 6px 10px;
  border-radius: var(--radius-md); transition: all var(--transition-fast);
}
.cd-back-btn:hover { color: var(--color-text-primary); background: rgba(255,255,255,0.05); }

/* ─── KPI Strip (3 cards) ─── */
.cd-kpi-strip {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
}
.cd-kpi-card {
  background: rgba(255,255,255,0.03); backdrop-filter: blur(12px);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: 16px 20px;
  transition: border-color var(--transition-normal), transform var(--transition-normal), background var(--transition-normal);
}
.cd-kpi-card:hover {
  background: rgba(255,255,255,0.05);
  border-color: rgba(${y},0.30);
  transform: translateY(-2px);
}
.cd-kpi-label { font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-accent); margin-bottom: 6px; }
.cd-kpi-value {
  font-family: var(--font-mono); font-size: 32px; font-weight: 700;
  font-variant-numeric: tabular-nums; color: var(--color-text-primary); line-height: 1.1;
}
.cd-kpi-delta {
  display: inline-flex; align-items: center; gap: 3px;
  font-size: 13px; font-weight: 500; margin-top: 4px; color: var(--color-text-secondary);
}
.cd-kpi-delta.pos { color: var(--color-success); }
.cd-kpi-delta.neg { color: var(--color-danger); }

/* ─── Body Split ─── */
.cd-body { display: flex; flex: 1; overflow: hidden; }
.cd-nav {
  width: ${B}px; flex-shrink: 0;
  border-right: 1px solid var(--color-border-default);
  padding: var(--space-3) 0; overflow-y: auto;
  background: var(--color-bg-base);
}
.cd-nav-item {
  display: flex; align-items: center; gap: var(--space-2);
  padding: 10px 14px; margin: 2px var(--space-2);
  font-size: 13px; font-weight: 500; color: var(--color-text-secondary);
  border-radius: var(--radius-md); cursor: pointer;
  transition: all var(--transition-fast); position: relative;
}
.cd-nav-item:hover { color: var(--color-text-primary); background: rgba(255,255,255,0.03); }
.cd-nav-item.active {
  color: var(--color-accent);
  background: rgba(${y}, 0.08);
}
.cd-nav-item.active::before {
  content: ''; position: absolute; left: 0; top: 6px; bottom: 6px;
  width: 2px; background: var(--color-accent); border-radius: 0 2px 2px 0;
}

/* ─── Main Content ─── */
.cd-main { flex: 1; overflow-y: auto; padding: var(--space-6); }

/* ─── Date Pills ─── */
.cd-date-bar { display: flex; align-items: center; gap: var(--space-2); flex-wrap: wrap; margin-bottom: var(--space-5); }
.cd-date-label { font-size: 12px; font-weight: 500; color: var(--color-text-tertiary); margin-right: 2px; }
.cd-date-pill {
  font-size: 12px; font-weight: 500; color: var(--color-text-secondary);
  background: rgba(255,255,255,0.04); border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full); padding: 5px 14px; cursor: pointer;
  transition: all var(--transition-fast); font-variant-numeric: tabular-nums;
}
.cd-date-pill:hover { color: var(--color-text-primary); border-color: var(--color-border-strong); }
.cd-date-pill.active {
  color: var(--color-accent); background: rgba(${y},0.12);
  border-color: rgba(${y},0.30);
}

/* ─── Glass Card ─── */
.cd-card {
  background: rgba(255,255,255,0.03); backdrop-filter: blur(12px);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: var(--space-5);
  margin-bottom: var(--space-4);
  transition: border-color var(--transition-normal), transform var(--transition-normal);
}
.cd-card:hover { border-color: rgba(${y},0.12); transform: translateY(-2px); }
.cd-card-title {
  font-size: 12px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-text-tertiary);
  margin-bottom: var(--space-4);
}

/* ─── View 1: Hotspots ─── */
.cd-hotspot-list { display: flex; flex-direction: column; gap: 2px; }
.cd-hotspot-item {
  display: flex; align-items: flex-start; gap: var(--space-3);
  padding: 10px 0; min-height: 40px;
  border-bottom: 1px solid var(--color-border-default);
}
.cd-hotspot-item:last-child { border-bottom: none; }
.cd-hotspot-rank {
  font-family: var(--font-mono); font-size: 20px; font-weight: 700;
  color: var(--color-accent); min-width: 32px; text-align: right;
  font-variant-numeric: tabular-nums; line-height: 1.2; flex-shrink: 0;
}
.cd-hotspot-body { flex: 1; min-width: 0; }
.cd-hotspot-title { font-size: 14px; font-weight: 500; color: var(--color-text-primary); line-height: 1.4; margin-bottom: 4px; }
.cd-hotspot-meta { display: flex; align-items: center; gap: var(--space-3); font-size: 11px; color: var(--color-text-tertiary); }

/* ─── Keyword Pills (accent bg 10% + accent border, 12px, max 15 flex-wrap) ─── */
.cd-pills-wrap { display: flex; flex-wrap: wrap; gap: var(--space-2); margin-bottom: var(--space-4); }
.cd-pill {
  font-size: 12px; font-weight: 500; color: var(--color-accent);
  background: rgba(${y},0.10); border: 1px solid rgba(${y},0.25);
  border-radius: var(--radius-full); padding: 4px 12px;
}

/* ─── Chart Box ─── */
.cd-chart-box { margin-bottom: var(--space-5); }
.cd-sub-title {
  font-size: 12px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-text-tertiary);
  margin-bottom: var(--space-3);
}

/* ─── View 2: Calendar (7×5-6 grid) ─── */
.cd-calendar-month { margin-bottom: var(--space-5); }
.cd-calendar-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: var(--space-3);
}
.cd-calendar-month-title { font-size: 14px; font-weight: 600; color: var(--color-text-primary); }
.cd-calendar-count { font-size: 12px; font-weight: 500; color: var(--color-text-tertiary); }
.cd-calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
.cd-calendar-cell {
  aspect-ratio: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  border-radius: var(--radius-sm); font-size: 12px; font-weight: 500;
  font-variant-numeric: tabular-nums;
  border: 1px solid transparent; cursor: default;
  transition: all var(--transition-fast); position: relative;
}
.cd-calendar-cell.empty { pointer-events: none; }
.cd-calendar-cell.default { color: var(--color-text-disabled); background: transparent; }
.cd-calendar-cell.has-data {
  color: var(--color-text-primary);
  background: rgba(${y},0.09);
  border-color: rgba(${y},0.12);
  cursor: pointer;
}
.cd-calendar-cell.has-data:hover { background: rgba(${y},0.16); border-color: rgba(${y},0.25); }
.cd-calendar-cell.has-data.selected { background: rgba(${y},0.20); border-color: rgba(${y},0.40); }
.cd-calendar-dot {
  width: 4px; height: 4px; border-radius: 50%;
  background: var(--color-accent); margin-top: 2px;
}

/* ─── Calendar Day Detail ─── */
.cd-day-detail {
  background: rgba(255,255,255,0.02); border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: var(--space-4); margin-top: var(--space-3);
  animation: cd-fadein 200ms ease-out;
}
.cd-day-article {
  display: flex; align-items: center; gap: var(--space-3);
  padding: 8px 0; border-bottom: 1px solid var(--color-border-default);
}
.cd-day-article:last-child { border-bottom: none; }
.cd-day-article-title { font-size: 14px; font-weight: 500; color: var(--color-text-primary); flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cd-day-article-tag {
  font-size: 11px; font-weight: 500; padding: 2px 8px;
  border-radius: var(--radius-full); flex-shrink: 0;
  background: rgba(${y},0.10); color: var(--color-accent);
  border: 1px solid rgba(${y},0.20);
}
.cd-day-article-wc { font-size: 12px; color: var(--color-text-tertiary); font-variant-numeric: tabular-nums; min-width: 50px; text-align: right; flex-shrink: 0; }

/* ─── View 3: Insights Dual Column ─── */
.cd-insights-dual { display: grid; grid-template-columns: 55% 45%; gap: var(--space-5); margin-bottom: var(--space-5); }

/* ─── Insights Table ─── */
.cd-table-wrap { overflow-x: auto; }
.cd-table { width: 100%; border-collapse: collapse; font-variant-numeric: tabular-nums; }
.cd-table th {
  font-size: 11px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.04em; color: var(--color-text-tertiary);
  text-align: left; padding: 10px 14px;
  border-bottom: 1px solid var(--color-border-default);
}
.cd-table td {
  font-size: 13px; color: var(--color-text-primary); padding: 10px 14px;
  border-bottom: 1px solid var(--color-border-default); height: 40px; vertical-align: middle;
}
.cd-table tbody tr:nth-child(even) td { background: rgba(255,255,255,0.015); }
.cd-table tbody tr:nth-child(odd) td  { background: transparent; }
.cd-table .pos { color: var(--color-success); font-weight: 500; }
.cd-table .neg { color: var(--color-danger);  font-weight: 500; }

/* ─── Skeleton / Pulse ─── */
@keyframes cd-pulse { 0% { opacity: 0.2; } 50% { opacity: 0.5; } 100% { opacity: 0.2; } }
.cd-skeleton { background: var(--color-bg-overlay); border-radius: var(--radius-md); animation: cd-pulse 1.8s ease-in-out infinite; }
.cd-skeleton-kpi { height: 40px; width: 70%; margin-bottom: 8px; }
.cd-skeleton-line { height: 13px; margin-bottom: 8px; }
.cd-skeleton-line:last-child { width: 55%; }

/* ─── Empty State ─── */
.cd-empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: var(--space-8); color: var(--color-text-tertiary);
  text-align: center; min-height: 200px;
}
.cd-empty-icon { font-size: 36px; margin-bottom: var(--space-3); opacity: 0.3; }
.cd-empty-text { font-size: 13px; color: var(--color-text-secondary); }

/* ─── Fade In ─── */
@keyframes cd-fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
.cd-fade { animation: cd-fadein 200ms ease-out; }

@media (prefers-reduced-motion: reduce) {
  .cd-fade { animation: none; }
  .cd-kpi-card, .cd-nav-item, .cd-date-pill, .cd-calendar-cell, .cd-card { transition: none; }
}
`,document.head.appendChild(T))}function Y(c){return`./content/${c}`}async function G(c){const d={};return await Promise.all(c.map(async p=>{try{const e=await fetch(Y(p));e.ok&&(d[p]=await e.text())}catch{}})),d}function U(c){const d=c.match(/^(\d{4}-\d{2}-\d{2})/);return d?d[1]:null}function Z(c){const d=[],p=[],e=[];return c.forEach(r=>{const a=r.match(/^(\d{4}-\d{2}-\d{2})-(hotspots|health-article)\.md$/);if(a){const s=a[1];a[2]==="hotspots"?d.push({date:s,file:r}):p.push({date:s,file:r});return}const t=r.match(/^(\d{4}-\d{2}-\d{2})\.md$/);t&&e.push({date:t[1],file:r})}),{hotspots:d,articles:p,dailies:e}}function J(c){const p=P(c).split(`
`),e={date:"",title:"",hotspots:[],trends:[],suggestions:[]};let r=null,a=null;for(let t=0;t<p.length;t++){const s=p[t].trim();if(!s)continue;const o=s.match(/^#\s*(?:健康热点日报|内容运营日报)[\s·]+(\d{4})年(\d{1,2})月(\d{1,2})日/);if(o){e.title=s,e.date=`${o[1]}-${o[2].padStart(2,"0")}-${o[3].padStart(2,"0")}`;continue}if(s.match(/^#\s*健康热点日报/)&&!e.date){e.title=s,e.date=F(s)||"";continue}const f=s.match(/^###\s*(🔴|🟠|🟡|🟢)\s*热点[一二三四五六七八九十\d]+[：:]\s*(.+)/);if(f){r&&e.hotspots.push(r),r={level:{"🔴":"P0","🟠":"P1","🟡":"P2","🟢":"P3"}[f[1]]||"P0",levelEmoji:f[1],title:f[2].trim(),points:[],source:"",heat:0},a="hotspot";continue}if(s.startsWith("##")&&(s.includes("趋势判断")||s.includes("趋势"))){r&&(e.hotspots.push(r),r=null),a="trends";continue}if(s.startsWith("##")&&(s.includes("选题")||s.includes("建议"))){a="suggestions";continue}if(s.startsWith("##")){r&&(e.hotspots.push(r),r=null),a=null;continue}if(a==="hotspot"&&r){if(s.startsWith("- ")&&!s.startsWith("- 🔗")){const u=s.replace(/^-\s*/,"");u&&!u.startsWith("🔗")&&r.points.push(u)}s.startsWith("🔗")&&(r.source=s.replace(/^🔗\s*/,""))}if(a==="trends"&&s.startsWith("- **")&&e.trends.push(s.replace(/^-\s*\*\*/,"").replace(/\*\*.*$/,"").trim()),a==="suggestions"&&s.startsWith("|")&&s.endsWith("|")&&!s.includes("---")&&!s.includes("选题")){const u=s.split("|").slice(1,-1).map(g=>g.trim());u.length>=2&&u[0]&&u[1]&&e.suggestions.push({priority:u[0],direction:u[1]||"",angle:u[2]||"",reason:u[3]||""})}}return r&&e.hotspots.push(r),e.hotspots.forEach(t=>{const s={P0:10,P1:6,P2:3,P3:1};t.heat=(s[t.level]||3)+Math.min(t.points.length,5)}),e}function Q(c){const p=P(c).split(`
`),e={date:"",title:"",sectionTitles:[],wordCount:0,paragraphs:[]};for(const r of p){const a=r.trim();if(!a)continue;const t=a.match(/^#\s+(.+)/);if(t&&!e.title){e.title=t[1],e.date=F(a)||"";continue}a.startsWith("## ")&&!a.includes("---")&&e.sectionTitles.push(a.replace(/^##\s*/,"")),a.length>5&&!a.startsWith("AIGC")&&!a.startsWith("#")&&(e.wordCount+=a.length)}return e}function X(c){const p=P(c).split(`
`),e={date:"",title:"",platforms:[],articles:[],candidates:[]};let r=null;for(const a of p){const t=a.trim();if(!t)continue;const s=t.match(/^#\s*内容运营日报[-\s]+(\d{4})年(\d{1,2})月(\d{1,2})日/);if(s){e.title=t,e.date=`${s[1]}-${s[2].padStart(2,"0")}-${s[3].padStart(2,"0")}`;continue}if(t.startsWith("## 数据概览")){r="data";continue}if(t.startsWith("## ")&&t.includes("今日发布")){r="publish";continue}if(t.startsWith("## ")&&(t.includes("选题")||t.includes("候选"))){r="candidates";continue}if(t.startsWith("## ")){r=null;continue}if(r==="data"&&t.startsWith("|")&&t.endsWith("|")&&!t.includes("---")){const o=t.split("|").slice(1,-1).map(f=>f.trim());o.length>=3&&o[0]!=="平台"&&e.platforms.push({platform:o[0],published:o[1],reads:o[2],likes:o[3]||"",saves:o[4]||"",follows:o[5]||""})}if(r==="publish"&&t.startsWith("###")){const o=t.includes("知乎");e.articles.push({title:t.replace(/^###\s*(?:公众号文章[：:]?|知乎回答[：:]?)?\s*/,""),platform:o?"知乎":"公众号"})}if(r==="candidates"&&t.startsWith("|")&&t.endsWith("|")&&!t.includes("---")&&!t.includes("选题")){const o=t.split("|").slice(1,-1).map(f=>f.trim());o.length>=2&&e.candidates.push({topic:o[0],priority:o[1]||"",eta:o[2]||""})}}return e}function tt(c){const d={},p=[["三伏","三伏天"],["暑假","暑假安排"],["减","健康减重"],["近视","近视防控"],["AI","AI教育"],["人工智能","AI教育"],["教育","教育政策"],["儿童","儿童健康"],["传染病","疾病防控"],["手足口","疾病防控"],["诺如","疾病防控"],["体重","健康减重"],["减肥","健康减重"],["营养","饮食营养"],["饮食","饮食营养"],["户外","户外活动"],["运动","运动健身"],["OK镜","近视防控"],["睡眠","睡眠健康"],["养生","养生保健"],["中医","养生保健"],["家长","家庭教育"],["孩子","家庭教育"],["亲子","家庭教育"],["游戏","屏幕管理"],["手机","屏幕管理"],["CAR-T","医疗突破"],["量化","量化投资"],["投资","量化投资"],["合同","法律AI"],["供应链","供应链"]];return c.forEach(e=>{e.hotspots.forEach(r=>{const a=[r.title,...r.points].join(" ");p.forEach(([t,s])=>{a.includes(t)&&(d[s]=(d[s]||0)+1)})})}),Object.entries(d).filter(([,e])=>e>=1).sort((e,r)=>r[1]-e[1]).map(([e,r])=>({tag:e,freq:r}))}function et(c){const d=new Set;return c.forEach(p=>{const e=U(p);e&&d.add(e)}),[...d].sort().reverse()}function at(c,d,p){const e={},r=a=>(e[a]||(e[a]={total:0,articles:0,dailies:0,hotspots:0,wordCount:0,reposted:0,engagement:0}),e[a]);return c.forEach(a=>{if(!a.date)return;const t=a.date.substring(0,7),s=r(t);s.articles++,s.total++,s.wordCount+=a.wordCount||0}),d.forEach(a=>{if(!a.date)return;const t=a.date.substring(0,7),s=r(t);s.dailies++,s.total++,s.reposted++,a.platforms&&a.platforms.forEach(o=>{s.engagement+=H(o.reads)+H(o.likes)})}),p.forEach(a=>{if(!a.date)return;const t=a.date.substring(0,7),s=r(t);s.hotspots++,s.total++}),Object.entries(e).sort((a,t)=>t[0].localeCompare(a[0])).map(([a,t])=>({month:a,total:t.total,original:t.hotspots+t.articles,reposted:t.dailies,avgWordCount:t.articles>0?Math.round(t.wordCount/t.articles):0,engagementRate:t.total>0?Math.round(t.engagement/t.total):0}))}function st(c){const{allHotspotsData:d,allDates:p,selectedDate:e,hotspotTags:r,el:a}=c,t=e?d.filter(i=>i.date===e):d,s=t.length>0?t:d;let o='<div class="cd-fade">';r.length>0&&(o+='<div class="cd-pills-wrap">',r.slice(0,15).forEach(i=>{o+=`<span class="cd-pill">${i.tag} · ${i.freq}</span>`}),o+="</div>");const f=rt(d,p);o+='<div class="cd-chart-box"><div class="cd-sub-title">热点数量趋势</div>',o+='<canvas id="cd-hotspots-line" style="width:100%;height:260px"></canvas></div>',o+='<div class="cd-card"><div class="cd-card-title">头条排行</div><div class="cd-hotspot-list">';const u=[];s.forEach(i=>i.hotspots.forEach(n=>u.push({...n,date:i.date}))),u.sort((i,n)=>(n.heat||0)-(i.heat||0)),u.length>0?u.slice(0,20).forEach((i,n)=>{o+=`<div class="cd-hotspot-item">
        <span class="cd-hotspot-rank">${String(n+1).padStart(2,"0")}</span>
        <div class="cd-hotspot-body">
          <div class="cd-hotspot-title">${i.title}</div>
          <div class="cd-hotspot-meta"><span>${i.date}</span><span>${i.level}</span>${i.source?`<span>${i.source.substring(0,24)}</span>`:""}</div>
        </div>
      </div>`}):o+='<div class="cd-empty"><div class="cd-empty-icon">🔥</div><div class="cd-empty-text">暂无热点数据</div></div>',o+="</div></div></div>",a.innerHTML=o;const g=a.querySelector("#cd-hotspots-line");g&&f.labels.length>0&&requestAnimationFrame(()=>{O(g,f,{area:A})})}function rt(c,d){const p={};c.forEach(t=>{t.date&&(p[t.date]=t.hotspots.length)});const e=d.slice(0,14).sort(),r=e.map(t=>t.substring(5)),a=e.map(t=>p[t]||0);return{labels:r,series:[{name:"热点数",data:a,color:_}]}}function ot(c){const{allHotspotsData:d,allArticlesData:p,allDailiesData:e,allDates:r,selectedDay:a,el:t,setSelectedDay:s}=c,o={};p.forEach(n=>{n.date&&(o[n.date]=o[n.date]||[],o[n.date].push({type:"article",...n}))}),d.forEach(n=>{n.date&&(o[n.date]=o[n.date]||[],o[n.date].push({type:"hotspot",...n}))}),e.forEach(n=>{n.date&&(o[n.date]=o[n.date]||[],o[n.date].push({type:"daily",...n}))});const f={};r.forEach(n=>{const[v,$]=n.split("-"),k=`${v}-${$}`;f[k]||(f[k]=[]),f[k].push(n)});const u=Object.keys(f).sort().reverse(),g=["日","一","二","三","四","五","六"];let i='<div class="cd-fade">';u.forEach(n=>{const v=f[n].sort(),[$,k]=n.split("-"),E=`${$}年${parseInt(k)}月`,M=new Date(`${v[0]}T00:00:00+08:00`).getDay(),C=new Date(parseInt($),parseInt(k),0).getDate(),W=v.reduce((b,x)=>b+(o[x]||[]).length,0);i+=`<div class="cd-calendar-month">
      <div class="cd-calendar-header">
        <span class="cd-calendar-month-title">${E}</span>
        <span class="cd-calendar-count">本月 ${W} 篇</span>
      </div>
      <div class="cd-calendar-grid">`,g.forEach(b=>{i+=`<span style="font-size:11px;font-weight:500;color:var(--color-text-tertiary);text-align:center;padding:6px 0">${b}</span>`});for(let b=0;b<M;b++)i+='<div class="cd-calendar-cell empty"></div>';for(let b=1;b<=C;b++){const x=`${$}-${String(k).padStart(2,"0")}-${String(b).padStart(2,"0")}`,S=v.includes(x);i+=`<div class="cd-calendar-cell ${S?"has-data":"default"}${a===x?" selected":""}" data-date="${S?x:""}">${b}${S?'<span class="cd-calendar-dot"></span>':""}</div>`}if(i+="</div>",a&&v.includes(a)){const b=o[a]||[];b.length>0&&(i+='<div class="cd-day-detail">',b.forEach(x=>{const S=x.type==="hotspot"?"热点":x.type==="article"?"长文":"日报",z=x.wordCount||(x.hotspots?x.hotspots.length*80:0);i+=`<div class="cd-day-article">
            <span class="cd-day-article-title">${(x.title||"").substring(0,40)}</span>
            <span class="cd-day-article-tag">${S}</span>
            <span class="cd-day-article-wc">${z} 字</span>
          </div>`}),i+="</div>")}i+="</div>"}),u.length===0&&(i+='<div class="cd-empty"><div class="cd-empty-icon">📅</div><div class="cd-empty-text">暂无日历数据</div></div>'),i+="</div>",t.innerHTML=i,t.querySelectorAll(".cd-calendar-cell.has-data").forEach(n=>{n.addEventListener("click",()=>{const v=n.dataset.date;s(v===a?null:v)})})}function it(c){const{allArticlesData:d,allDailiesData:p,allHotspotsData:e,el:r}=c,a=[{label:"热点日报",value:e.length},{label:"健康长文",value:d.length},{label:"综合日报",value:p.length}].filter(v=>v.value>0),t=at(d,p,e),s=t.slice(0,6).reverse(),o=s.map(v=>v.month.substring(5)),f=s.map(v=>v.total),u=Math.max(...f,1)*1.2;let g='<div class="cd-fade">';g+='<div class="cd-insights-dual">',g+='<div class="cd-chart-box"><div class="cd-sub-title">内容来源分布</div><canvas id="cd-insights-pie" style="width:100%;height:260px"></canvas></div>',g+='<div class="cd-chart-box"><div class="cd-sub-title">月度产出量</div><canvas id="cd-insights-bar" style="width:100%;height:260px"></canvas></div>',g+="</div>",g+='<div class="cd-card"><div class="cd-card-title">月度统计</div><div class="cd-table-wrap"><table class="cd-table"><thead><tr>',["月份","总产出","原创","转载","平均字数","互动率"].forEach(v=>g+=`<th>${v}</th>`),g+="</tr></thead><tbody>",t.forEach(v=>{const $=v.engagementRate>8?"pos":v.engagementRate<5?"neg":"";g+=`<tr><td>${v.month}</td><td>${v.total}</td><td>${v.original}</td><td>${v.reposted}</td><td>${v.avgWordCount}</td><td class="${$}">${v.engagementRate}%</td></tr>`}),g+="</tbody></table></div></div></div>",r.innerHTML=g;const i=r.querySelector("#cd-insights-pie");i&&a.length>0&&requestAnimationFrame(()=>{N(i,a,{area:A})});const n=r.querySelector("#cd-insights-bar");n&&o.length>0&&requestAnimationFrame(()=>{V(n,{labels:o,values:f},{area:A,maxValue:u})})}function nt(c){c.innerHTML=`
    <div class="cd-detail">
      <div class="cd-topbar"><div class="cd-skeleton" style="width:60px;height:16px"></div><div class="cd-skeleton" style="width:100px;height:20px"></div></div>
      <div class="cd-kpi-strip">${Array(3).fill('<div class="cd-kpi-card"><div class="cd-skeleton cd-skeleton-kpi"></div><div class="cd-skeleton cd-skeleton-line"></div></div>').join("")}</div>
      <div class="cd-body">
        <div class="cd-nav" style="width:${B}px">${Array(3).fill('<div class="cd-skeleton cd-skeleton-line" style="margin:8px 12px;height:36px"></div>').join("")}</div>
        <div class="cd-main">
          <div class="cd-skeleton" style="height:24px;width:40%;margin-bottom:16px"></div>
          <div class="cd-skeleton cd-skeleton-line" style="width:100%"></div>
          <div class="cd-skeleton cd-skeleton-line" style="width:100%"></div>
          <div class="cd-skeleton cd-skeleton-line" style="width:70%"></div>
        </div>
      </div>
    </div>`}function ct(c,d,p,e){const r=e[0]||"",t=c.filter(i=>i.date===r).reduce((i,n)=>i+n.hotspots.length,0),s=new Date,o=new Date(s.getTime()-7*24*3600*1e3).toISOString().substring(0,10),f=d.filter(i=>i.date>=o).length+p.filter(i=>i.date>=o).length+c.filter(i=>i.date>=o).length;let u=0;p.forEach(i=>{i.platforms&&i.platforms.forEach(n=>{u+=H(n.reads)+H(n.likes)})});const g=Math.round(u/Math.max(1,p.length));return{todayCount:t,weekTotal:f,engagementRate:g}}async function ht(c,d,p){K(),nt(c);const e=document.getElementById("header"),r=document.getElementById("site-title");e&&(e.style.background="",e.style.boxShadow=""),r&&(r.innerHTML="✍️&nbsp;&nbsp;内容运营",r.classList.add("detail-badge"),r.style.color="");let a=[];try{const l=await fetch("./content/index.json");l.ok&&(a=await l.json())}catch{}if(a.length===0){c.innerHTML='<div class="cd-empty" style="margin-top:80px"><div class="cd-empty-icon">✍️</div><div class="cd-empty-text">暂无内容数据</div></div>';return}const t=a.filter(l=>l.endsWith(".md")),s=await G(t),{hotspots:o,articles:f,dailies:u}=Z(t),g=o.map(({date:l,file:h})=>{const m=s[h];if(!m)return null;const w=J(m);return w.date=w.date||l,w}).filter(Boolean).sort((l,h)=>h.date.localeCompare(l.date)),i=f.map(({date:l,file:h})=>{const m=s[h];if(!m)return null;const w=Q(m);return w.date=w.date||l,w}).filter(Boolean).sort((l,h)=>h.date.localeCompare(l.date)),n=u.map(({date:l,file:h})=>{const m=s[h];if(!m)return null;const w=X(m);return w.date=w.date||l,w}).filter(Boolean).sort((l,h)=>h.date.localeCompare(l.date)),v=et(t),$=tt(g),k=(location.hash.slice(1)||"").split("/").filter(Boolean);let E="hotspots";k.length>=2&&q.find(l=>l.key===k[1])&&(E=k[1]);let D=v[0]||"",M=null;const C=ct(g,i,n,v),W="cd-section-content";function b(){c.innerHTML=`
      <div class="cd-detail theme-${A}">
        <div class="cd-topbar">
          <button class="cd-back-btn" id="cd-back-btn">← 首页</button>
          <span class="cd-topbar-title">内容运营 · 数据看板</span>
        </div>
        <div class="cd-kpi-strip" id="cd-kpi-strip"></div>
        <div class="cd-body">
          <nav class="cd-nav" id="cd-nav"></nav>
          <main class="cd-main">
            <div class="cd-date-bar" id="cd-date-bar"></div>
            <div id="${W}"></div>
          </main>
        </div>
      </div>`,c.querySelector("#cd-back-btn").addEventListener("click",l=>{l.preventDefault(),j("")}),x(),S(),z(),I()}function x(){const l=c.querySelector("#cd-date-bar");if(!l)return;const h=v.slice(0,14);l.innerHTML=`
      <span class="cd-date-label">日期：</span>
      <button class="cd-date-pill${D?"":" active"}" data-date="">全部</button>
      ${h.map(m=>`<button class="cd-date-pill${m===D?" active":""}" data-date="${m}">${m.substring(5)}</button>`).join("")}
    `,l.querySelectorAll(".cd-date-pill").forEach(m=>{m.addEventListener("click",()=>{D=m.dataset.date,x(),I()})})}function S(){const l=c.querySelector("#cd-nav");l&&(l.innerHTML=q.map(h=>`<div class="cd-nav-item${h.key===E?" active":""}" data-section="${h.key}"><span>${h.icon}</span><span>${h.label}</span></div>`).join(""),l.querySelectorAll(".cd-nav-item").forEach(h=>{h.addEventListener("click",()=>{l.querySelectorAll(".cd-nav-item").forEach(m=>m.classList.remove("active")),h.classList.add("active"),E=h.dataset.section,j(`#${A}/${E}`),I()})}))}function z(){const l=c.querySelector("#cd-kpi-strip");l&&(l.innerHTML=`
      <div class="cd-kpi-card"><div class="cd-kpi-label">今日热点</div><div class="cd-kpi-value">${C.todayCount}</div><div class="cd-kpi-delta">当日追踪</div></div>
      <div class="cd-kpi-card"><div class="cd-kpi-label">本周发布</div><div class="cd-kpi-value">${C.weekTotal}</div><div class="cd-kpi-delta">近 7 日产出</div></div>
      <div class="cd-kpi-card"><div class="cd-kpi-label">互动率</div><div class="cd-kpi-value">${C.engagementRate}</div><div class="cd-kpi-delta">阅读+点赞均值</div></div>`)}function R(){I()}function I(){const l=c.querySelector(`#${W}`);if(!l)return;const h={allHotspotsData:g,allArticlesData:i,allDailiesData:n,allDates:v,hotspotTags:$,el:l,mdContents:s,selectedDay:M};switch(E){case"hotspots":st({...h,selectedDate:D});break;case"calendar":ot({...h,setSelectedDay:m=>{M=m,R()}});break;case"insights":it(h);break}}b()}export{q as SECTIONS,ct as computeKPIs,ht as renderContentDetail};
