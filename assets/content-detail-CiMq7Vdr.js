import{_ as V,n as j}from"./core-B_Wlt-Ld.js";import{I as L}from"./icons-De6BiXEo.js";import{a as N,d as O,b as K}from"./charts-BVitNI1m.js";import{s as P,g as _,f as H}from"./parsers-C5lwdAJe.js";import"./design-system-Du44DDix.js";const q=[{key:"hotspots",icon:L.hot.emoji,label:"热点趋势"},{key:"calendar",icon:L.calendar.emoji,label:"内容日历"},{key:"insights",icon:L.insight.emoji,label:"趋势洞察"}],M="content",Y="#F59E0B",x="245,158,11",F=160;let A=null;function G(){A||(A=document.createElement("style"),A.id="content-detail-styles",A.textContent=`
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
  border-color: rgba(${x},0.30);
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
  width: ${F}px; flex-shrink: 0;
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
  background: rgba(${x}, 0.08);
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
  color: var(--color-accent); background: rgba(${x},0.12);
  border-color: rgba(${x},0.30);
}

/* ─── Glass Card ─── */
.cd-card {
  background: rgba(255,255,255,0.03); backdrop-filter: blur(12px);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: var(--space-5);
  margin-bottom: var(--space-4);
  transition: border-color var(--transition-normal), transform var(--transition-normal);
}
.cd-card:hover { border-color: rgba(${x},0.12); transform: translateY(-2px); }
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
  background: rgba(${x},0.10); border: 1px solid rgba(${x},0.25);
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
  background: rgba(${x},0.09);
  border-color: rgba(${x},0.12);
  cursor: pointer;
}
.cd-calendar-cell.has-data:hover { background: rgba(${x},0.16); border-color: rgba(${x},0.25); }
.cd-calendar-cell.has-data.selected { background: rgba(${x},0.20); border-color: rgba(${x},0.40); }
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
  background: rgba(${x},0.10); color: var(--color-accent);
  border: 1px solid rgba(${x},0.20);
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
`,document.head.appendChild(A))}function U(c){return`./content/${c}`}async function Z(c){const d={};return await Promise.all(c.map(async p=>{try{const a=await fetch(U(p));a.ok&&(d[p]=await a.text())}catch{}})),d}function J(c){const d=c.match(/^(\d{4}-\d{2}-\d{2})/);return d?d[1]:null}function Q(c){const d=[],p=[],a=[];return c.forEach(r=>{const e=r.match(/^(\d{4}-\d{2}-\d{2})-(hotspots|health-article)\.md$/);if(e){const s=e[1];e[2]==="hotspots"?d.push({date:s,file:r}):p.push({date:s,file:r});return}const t=r.match(/^(\d{4}-\d{2}-\d{2})\.md$/);t&&a.push({date:t[1],file:r})}),{hotspots:d,articles:p,dailies:a}}function X(c){const p=P(c).split(`
`),a={date:"",title:"",hotspots:[],trends:[],suggestions:[]};let r=null,e=null;for(let t=0;t<p.length;t++){const s=p[t].trim();if(!s)continue;const o=s.match(/^#\s*(?:健康热点日报|内容运营日报)[\s·]+(\d{4})年(\d{1,2})月(\d{1,2})日/);if(o){a.title=s,a.date=`${o[1]}-${o[2].padStart(2,"0")}-${o[3].padStart(2,"0")}`;continue}if(s.match(/^#\s*健康热点日报/)&&!a.date){a.title=s,a.date=_(s)||"";continue}const f=s.match(/^###\s*(🔴|🟠|🟡|🟢)\s*热点[一二三四五六七八九十\d]+[：:]\s*(.+)/);if(f){r&&a.hotspots.push(r),r={level:{"🔴":"P0","🟠":"P1","🟡":"P2","🟢":"P3"}[f[1]]||"P0",levelEmoji:f[1],title:f[2].trim(),points:[],source:"",heat:0},e="hotspot";continue}if(s.startsWith("##")&&(s.includes("趋势判断")||s.includes("趋势"))){r&&(a.hotspots.push(r),r=null),e="trends";continue}if(s.startsWith("##")&&(s.includes("选题")||s.includes("建议"))){e="suggestions";continue}if(s.startsWith("##")){r&&(a.hotspots.push(r),r=null),e=null;continue}if(e==="hotspot"&&r){if(s.startsWith("- ")&&!s.startsWith("- 🔗")){const u=s.replace(/^-\s*/,"");u&&!u.startsWith("🔗")&&r.points.push(u)}s.startsWith("🔗")&&(r.source=s.replace(/^🔗\s*/,""))}if(e==="trends"&&s.startsWith("- **")&&a.trends.push(s.replace(/^-\s*\*\*/,"").replace(/\*\*.*$/,"").trim()),e==="suggestions"&&s.startsWith("|")&&s.endsWith("|")&&!s.includes("---")&&!s.includes("选题")){const u=s.split("|").slice(1,-1).map(g=>g.trim());u.length>=2&&u[0]&&u[1]&&a.suggestions.push({priority:u[0],direction:u[1]||"",angle:u[2]||"",reason:u[3]||""})}}return r&&a.hotspots.push(r),a.hotspots.forEach(t=>{const s={P0:10,P1:6,P2:3,P3:1};t.heat=(s[t.level]||3)+Math.min(t.points.length,5)}),a}function tt(c){const p=P(c).split(`
`),a={date:"",title:"",sectionTitles:[],wordCount:0,paragraphs:[]};for(const r of p){const e=r.trim();if(!e)continue;const t=e.match(/^#\s+(.+)/);if(t&&!a.title){a.title=t[1],a.date=_(e)||"";continue}e.startsWith("## ")&&!e.includes("---")&&a.sectionTitles.push(e.replace(/^##\s*/,"")),e.length>5&&!e.startsWith("AIGC")&&!e.startsWith("#")&&(a.wordCount+=e.length)}return a}function et(c){const p=P(c).split(`
`),a={date:"",title:"",platforms:[],articles:[],candidates:[]};let r=null;for(const e of p){const t=e.trim();if(!t)continue;const s=t.match(/^#\s*内容运营日报[-\s]+(\d{4})年(\d{1,2})月(\d{1,2})日/);if(s){a.title=t,a.date=`${s[1]}-${s[2].padStart(2,"0")}-${s[3].padStart(2,"0")}`;continue}if(t.startsWith("## 数据概览")){r="data";continue}if(t.startsWith("## ")&&t.includes("今日发布")){r="publish";continue}if(t.startsWith("## ")&&(t.includes("选题")||t.includes("候选"))){r="candidates";continue}if(t.startsWith("## ")){r=null;continue}if(r==="data"&&t.startsWith("|")&&t.endsWith("|")&&!t.includes("---")){const o=t.split("|").slice(1,-1).map(f=>f.trim());o.length>=3&&o[0]!=="平台"&&a.platforms.push({platform:o[0],published:o[1],reads:o[2],likes:o[3]||"",saves:o[4]||"",follows:o[5]||""})}if(r==="publish"&&t.startsWith("###")){const o=t.includes("知乎");a.articles.push({title:t.replace(/^###\s*(?:公众号文章[：:]?|知乎回答[：:]?)?\s*/,""),platform:o?"知乎":"公众号"})}if(r==="candidates"&&t.startsWith("|")&&t.endsWith("|")&&!t.includes("---")&&!t.includes("选题")){const o=t.split("|").slice(1,-1).map(f=>f.trim());o.length>=2&&a.candidates.push({topic:o[0],priority:o[1]||"",eta:o[2]||""})}}return a}function at(c){const d={},p=[["三伏","三伏天"],["暑假","暑假安排"],["减","健康减重"],["近视","近视防控"],["AI","AI教育"],["人工智能","AI教育"],["教育","教育政策"],["儿童","儿童健康"],["传染病","疾病防控"],["手足口","疾病防控"],["诺如","疾病防控"],["体重","健康减重"],["减肥","健康减重"],["营养","饮食营养"],["饮食","饮食营养"],["户外","户外活动"],["运动","运动健身"],["OK镜","近视防控"],["睡眠","睡眠健康"],["养生","养生保健"],["中医","养生保健"],["家长","家庭教育"],["孩子","家庭教育"],["亲子","家庭教育"],["游戏","屏幕管理"],["手机","屏幕管理"],["CAR-T","医疗突破"],["量化","量化投资"],["投资","量化投资"],["合同","法律AI"],["供应链","供应链"]];return c.forEach(a=>{a.hotspots.forEach(r=>{const e=[r.title,...r.points].join(" ");p.forEach(([t,s])=>{e.includes(t)&&(d[s]=(d[s]||0)+1)})})}),Object.entries(d).filter(([,a])=>a>=1).sort((a,r)=>r[1]-a[1]).map(([a,r])=>({tag:a,freq:r}))}function st(c){const d=new Set;return c.forEach(p=>{const a=J(p);a&&d.add(a)}),[...d].sort().reverse()}function rt(c,d,p){const a={},r=e=>(a[e]||(a[e]={total:0,articles:0,dailies:0,hotspots:0,wordCount:0,reposted:0,engagement:0}),a[e]);return c.forEach(e=>{if(!e.date)return;const t=e.date.substring(0,7),s=r(t);s.articles++,s.total++,s.wordCount+=e.wordCount||0}),d.forEach(e=>{if(!e.date)return;const t=e.date.substring(0,7),s=r(t);s.dailies++,s.total++,s.reposted++,e.platforms&&e.platforms.forEach(o=>{s.engagement+=H(o.reads)+H(o.likes)})}),p.forEach(e=>{if(!e.date)return;const t=e.date.substring(0,7),s=r(t);s.hotspots++,s.total++}),Object.entries(a).sort((e,t)=>t[0].localeCompare(e[0])).map(([e,t])=>({month:e,total:t.total,original:t.hotspots+t.articles,reposted:t.dailies,avgWordCount:t.articles>0?Math.round(t.wordCount/t.articles):0,engagementRate:t.total>0?Math.round(t.engagement/t.total):0}))}function ot(c){const{allHotspotsData:d,allDates:p,selectedDate:a,hotspotTags:r,el:e}=c,t=a?d.filter(i=>i.date===a):d,s=t.length>0?t:d;let o='<div class="cd-fade">';r.length>0&&(o+='<div class="cd-pills-wrap">',r.slice(0,15).forEach(i=>{o+=`<span class="cd-pill">${i.tag} · ${i.freq}</span>`}),o+="</div>");const f=it(d,p);o+='<div class="cd-chart-box"><div class="cd-sub-title">热点数量趋势</div>',o+='<canvas id="cd-hotspots-line" style="width:100%;height:260px"></canvas></div>',o+='<div class="cd-card"><div class="cd-card-title">头条排行</div><div class="cd-hotspot-list">';const u=[];s.forEach(i=>i.hotspots.forEach(n=>u.push({...n,date:i.date}))),u.sort((i,n)=>(n.heat||0)-(i.heat||0)),u.length>0?u.slice(0,20).forEach((i,n)=>{o+=`<div class="cd-hotspot-item">
        <span class="cd-hotspot-rank">${String(n+1).padStart(2,"0")}</span>
        <div class="cd-hotspot-body">
          <div class="cd-hotspot-title">${i.title}</div>
          <div class="cd-hotspot-meta"><span>${i.date}</span><span>${i.level}</span>${i.source?`<span>${i.source.substring(0,24)}</span>`:""}</div>
        </div>
      </div>`}):o+='<div class="cd-empty"><div class="cd-empty-icon">🔥</div><div class="cd-empty-text">暂无热点数据</div></div>',o+="</div></div></div>",e.innerHTML=o;const g=e.querySelector("#cd-hotspots-line");g&&f.labels.length>0&&requestAnimationFrame(()=>{K(g,f,{area:M})})}function it(c,d){const p={};c.forEach(t=>{t.date&&(p[t.date]=t.hotspots.length)});const a=d.slice(0,14).sort(),r=a.map(t=>t.substring(5)),e=a.map(t=>p[t]||0);return{labels:r,series:[{name:"热点数",data:e,color:Y}]}}function nt(c){const{allHotspotsData:d,allArticlesData:p,allDailiesData:a,allDates:r,selectedDay:e,el:t,setSelectedDay:s}=c,o={};p.forEach(n=>{n.date&&(o[n.date]=o[n.date]||[],o[n.date].push({type:"article",...n}))}),d.forEach(n=>{n.date&&(o[n.date]=o[n.date]||[],o[n.date].push({type:"hotspot",...n}))}),a.forEach(n=>{n.date&&(o[n.date]=o[n.date]||[],o[n.date].push({type:"daily",...n}))});const f={};r.forEach(n=>{const[v,k]=n.split("-"),$=`${v}-${k}`;f[$]||(f[$]=[]),f[$].push(n)});const u=Object.keys(f).sort().reverse(),g=["日","一","二","三","四","五","六"];let i='<div class="cd-fade">';u.forEach(n=>{const v=f[n].sort(),[k,$]=n.split("-"),C=`${k}年${parseInt($)}月`,S=new Date(`${v[0]}T00:00:00+08:00`).getDay(),W=new Date(parseInt(k),parseInt($),0).getDate(),T=v.reduce((b,y)=>b+(o[y]||[]).length,0);i+=`<div class="cd-calendar-month">
      <div class="cd-calendar-header">
        <span class="cd-calendar-month-title">${C}</span>
        <span class="cd-calendar-count">本月 ${T} 篇</span>
      </div>
      <div class="cd-calendar-grid">`,g.forEach(b=>{i+=`<span style="font-size:11px;font-weight:500;color:var(--color-text-tertiary);text-align:center;padding:6px 0">${b}</span>`});for(let b=0;b<S;b++)i+='<div class="cd-calendar-cell empty"></div>';for(let b=1;b<=W;b++){const y=`${k}-${String($).padStart(2,"0")}-${String(b).padStart(2,"0")}`,E=v.includes(y);i+=`<div class="cd-calendar-cell ${E?"has-data":"default"}${e===y?" selected":""}" data-date="${E?y:""}">${b}${E?'<span class="cd-calendar-dot"></span>':""}</div>`}if(i+="</div>",e&&v.includes(e)){const b=o[e]||[];b.length>0&&(i+='<div class="cd-day-detail">',b.forEach(y=>{const E=y.type==="hotspot"?"热点":y.type==="article"?"长文":"日报",z=y.wordCount||(y.hotspots?y.hotspots.length*80:0);i+=`<div class="cd-day-article">
            <span class="cd-day-article-title">${(y.title||"").substring(0,40)}</span>
            <span class="cd-day-article-tag">${E}</span>
            <span class="cd-day-article-wc">${z} 字</span>
          </div>`}),i+="</div>")}i+="</div>"}),u.length===0&&(i+='<div class="cd-empty"><div class="cd-empty-icon">📅</div><div class="cd-empty-text">暂无日历数据</div></div>'),i+="</div>",t.innerHTML=i,t.querySelectorAll(".cd-calendar-cell.has-data").forEach(n=>{n.addEventListener("click",()=>{const v=n.dataset.date;s(v===e?null:v)})})}function ct(c){const{allArticlesData:d,allDailiesData:p,allHotspotsData:a,el:r}=c,e=[{label:"热点日报",value:a.length},{label:"健康长文",value:d.length},{label:"综合日报",value:p.length}].filter(v=>v.value>0),t=rt(d,p,a),s=t.slice(0,6).reverse(),o=s.map(v=>v.month.substring(5)),f=s.map(v=>v.total),u=Math.max(...f,1)*1.2;let g='<div class="cd-fade">';g+='<div class="cd-insights-dual">',g+='<div class="cd-chart-box"><div class="cd-sub-title">内容来源分布</div><canvas id="cd-insights-pie" style="width:100%;height:260px"></canvas></div>',g+='<div class="cd-chart-box"><div class="cd-sub-title">月度产出量</div><canvas id="cd-insights-bar" style="width:100%;height:260px"></canvas></div>',g+="</div>",g+='<div class="cd-card"><div class="cd-card-title">月度统计</div><div class="cd-table-wrap"><table class="cd-table"><thead><tr>',["月份","总产出","原创","转载","平均字数","互动率"].forEach(v=>g+=`<th>${v}</th>`),g+="</tr></thead><tbody>",t.forEach(v=>{const k=v.engagementRate>8?"pos":v.engagementRate<5?"neg":"";g+=`<tr><td>${v.month}</td><td>${v.total}</td><td>${v.original}</td><td>${v.reposted}</td><td>${v.avgWordCount}</td><td class="${k}">${v.engagementRate}%</td></tr>`}),g+="</tbody></table></div></div></div>",r.innerHTML=g;const i=r.querySelector("#cd-insights-pie");i&&e.length>0&&requestAnimationFrame(()=>{N(i,e,{area:M})});const n=r.querySelector("#cd-insights-bar");n&&o.length>0&&requestAnimationFrame(()=>{O(n,{labels:o,values:f},{area:M,maxValue:u})})}function lt(c){c.innerHTML=`
    <div class="cd-detail">
      <div class="cd-topbar"><div class="cd-skeleton" style="width:60px;height:16px"></div><div class="cd-skeleton" style="width:100px;height:20px"></div></div>
      <div class="cd-kpi-strip">${Array(3).fill('<div class="cd-kpi-card"><div class="cd-skeleton cd-skeleton-kpi"></div><div class="cd-skeleton cd-skeleton-line"></div></div>').join("")}</div>
      <div class="cd-body">
        <div class="cd-nav" style="width:${F}px">${Array(3).fill('<div class="cd-skeleton cd-skeleton-line" style="margin:8px 12px;height:36px"></div>').join("")}</div>
        <div class="cd-main">
          <div class="cd-skeleton" style="height:24px;width:40%;margin-bottom:16px"></div>
          <div class="cd-skeleton cd-skeleton-line" style="width:100%"></div>
          <div class="cd-skeleton cd-skeleton-line" style="width:100%"></div>
          <div class="cd-skeleton cd-skeleton-line" style="width:70%"></div>
        </div>
      </div>
    </div>`}function dt(c,d,p,a){const r=a[0]||"",t=c.filter(i=>i.date===r).reduce((i,n)=>i+n.hotspots.length,0),s=new Date,o=new Date(s.getTime()-7*24*3600*1e3).toISOString().substring(0,10),f=d.filter(i=>i.date>=o).length+p.filter(i=>i.date>=o).length+c.filter(i=>i.date>=o).length;let u=0;p.forEach(i=>{i.platforms&&i.platforms.forEach(n=>{u+=H(n.reads)+H(n.likes)})});const g=Math.round(u/Math.max(1,p.length));return{todayCount:t,weekTotal:f,engagementRate:g}}async function gt(c,d,p){G(),lt(c);const[{setTheme:a}]=await Promise.all([V(()=>import("./design-system-Du44DDix.js").then(l=>l.d),[])]);a("content");const r=document.getElementById("header"),e=document.getElementById("site-title");r&&(r.style.background="",r.style.boxShadow=""),e&&(e.innerHTML="✍️&nbsp;&nbsp;内容运营",e.classList.add("detail-badge"),e.style.color="");let t=[];try{const l=await fetch("./content/index.json");l.ok&&(t=await l.json())}catch{}if(t.length===0){c.innerHTML='<div class="cd-empty" style="margin-top:80px"><div class="cd-empty-icon">✍️</div><div class="cd-empty-text">暂无内容数据</div></div>';return}const s=t.filter(l=>l.endsWith(".md")),o=await Z(s),{hotspots:f,articles:u,dailies:g}=Q(s),i=f.map(({date:l,file:h})=>{const m=o[h];if(!m)return null;const w=X(m);return w.date=w.date||l,w}).filter(Boolean).sort((l,h)=>h.date.localeCompare(l.date)),n=u.map(({date:l,file:h})=>{const m=o[h];if(!m)return null;const w=tt(m);return w.date=w.date||l,w}).filter(Boolean).sort((l,h)=>h.date.localeCompare(l.date)),v=g.map(({date:l,file:h})=>{const m=o[h];if(!m)return null;const w=et(m);return w.date=w.date||l,w}).filter(Boolean).sort((l,h)=>h.date.localeCompare(l.date)),k=st(s),$=at(i),C=(location.hash.slice(1)||"").split("/").filter(Boolean);let D="hotspots";C.length>=2&&q.find(l=>l.key===C[1])&&(D=C[1]);let S=k[0]||"",W=null;const T=dt(i,n,v,k),b="cd-section-content";function y(){c.innerHTML=`
      <div class="cd-detail theme-${M}">
        <div class="cd-topbar">
          <button class="cd-back-btn" id="cd-back-btn">← 首页</button>
          <span class="cd-topbar-title">内容运营 · 数据看板</span>
        </div>
        <div class="cd-kpi-strip" id="cd-kpi-strip"></div>
        <div class="cd-body">
          <nav class="cd-nav" id="cd-nav"></nav>
          <main class="cd-main">
            <div class="cd-date-bar" id="cd-date-bar"></div>
            <div id="${b}"></div>
          </main>
        </div>
      </div>`,c.querySelector("#cd-back-btn").addEventListener("click",l=>{l.preventDefault(),j("")}),E(),z(),B(),I()}function E(){const l=c.querySelector("#cd-date-bar");if(!l)return;const h=k.slice(0,14);l.innerHTML=`
      <span class="cd-date-label">日期：</span>
      <button class="cd-date-pill${S?"":" active"}" data-date="">全部</button>
      ${h.map(m=>`<button class="cd-date-pill${m===S?" active":""}" data-date="${m}">${m.substring(5)}</button>`).join("")}
    `,l.querySelectorAll(".cd-date-pill").forEach(m=>{m.addEventListener("click",()=>{S=m.dataset.date,E(),I()})})}function z(){const l=c.querySelector("#cd-nav");l&&(l.innerHTML=q.map(h=>`<div class="cd-nav-item${h.key===D?" active":""}" data-section="${h.key}"><span>${h.icon}</span><span>${h.label}</span></div>`).join(""),l.querySelectorAll(".cd-nav-item").forEach(h=>{h.addEventListener("click",()=>{l.querySelectorAll(".cd-nav-item").forEach(m=>m.classList.remove("active")),h.classList.add("active"),D=h.dataset.section,j(`#${M}/${D}`),I()})}))}function B(){const l=c.querySelector("#cd-kpi-strip");l&&(l.innerHTML=`
      <div class="cd-kpi-card"><div class="cd-kpi-label">今日热点</div><div class="cd-kpi-value">${T.todayCount}</div><div class="cd-kpi-delta">当日追踪</div></div>
      <div class="cd-kpi-card"><div class="cd-kpi-label">本周发布</div><div class="cd-kpi-value">${T.weekTotal}</div><div class="cd-kpi-delta">近 7 日产出</div></div>
      <div class="cd-kpi-card"><div class="cd-kpi-label">互动率</div><div class="cd-kpi-value">${T.engagementRate}</div><div class="cd-kpi-delta">阅读+点赞均值</div></div>`)}function R(){I()}function I(){const l=c.querySelector(`#${b}`);if(!l)return;const h={allHotspotsData:i,allArticlesData:n,allDailiesData:v,allDates:k,hotspotTags:$,el:l,mdContents:o,selectedDay:W};switch(D){case"hotspots":ot({...h,selectedDate:S});break;case"calendar":nt({...h,setSelectedDay:m=>{W=m,R()}});break;case"insights":ct(h);break}}y()}export{q as SECTIONS,dt as computeKPIs,gt as renderContentDetail};
