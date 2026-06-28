const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/edu-detail-v3.js","assets/design-system-Du44DDix.js","assets/charts-BVitNI1m.js","assets/investing-detail-B_ZJJI2G.js","assets/icons-De6BiXEo.js","assets/content-detail-CiMq7Vdr.js","assets/legal-detail-BjLFAXkK.js","assets/finance-detail.js"])))=>i.map(i=>d[i]);
import{A as k,a as x}from"./design-system-Du44DDix.js";const T="modulepreload",q=function(a){return"/dashboard/"+a},A={},b=function(e,i,r){let o=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),n=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));o=Promise.allSettled(i.map(s=>{if(s=q(s),s in A)return;A[s]=!0;const h=s.endsWith(".css"),g=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${g}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":T,h||(u.as="script"),u.crossOrigin="",u.href=s,n&&u.setAttribute("nonce",n),document.head.appendChild(u),h)return new Promise((E,$)=>{u.addEventListener("load",E),u.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${s}`)))})}))}function d(t){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t}return o.then(t=>{for(const n of t||[])n.status==="rejected"&&d(n.reason);return e().catch(d)})};function H(a){return`./${a.dir}/index.json`}function I(a,e){return`./${a.dir}/${e}`}async function D(a){try{const e=await fetch(H(a));return e.ok?await e.json():[]}catch{return[]}}function M(a){const e=document.createElement("div");return e.textContent=a,e.innerHTML}async function P(a){R();const e=await Promise.all(x.map(async t=>{const n=k[t],s=await D(n);return{key:t,area:n,count:s.length,files:s}})),i=e.map(t=>{const n=t.area;return`<div class="area-cover" data-area="${t.key}" style="--cover-color:${n.color}">
      <div class="area-cover-bg"></div>
      <div class="area-cover-content">
        <span class="area-cover-icon">${n.icon}</span>
        <div class="area-cover-name">${n.name}</div>
        <div class="area-cover-stat">${t.count}</div>
        <div class="area-cover-label">份报告</div>
        <div class="area-cover-divider"></div>
      </div>
    </div>`}).join(""),r=[];e.forEach(t=>{t.files.slice(0,4).forEach(n=>{r.push({area:t.area,key:t.key,file:n,date:n.replace(".md","")})})}),r.sort((t,n)=>n.date.localeCompare(t.date));const o=r.slice(0,8).map(t=>{const n=t.area;return`<div class="tl-row" data-area="${t.key}" data-file="${t.file}">
      <div class="tl-dot" style="background:${n.color}"></div>
      <div class="tl-info">
        <div class="tl-date">${t.date}</div>
        <div class="tl-name">${t.file}</div>
        <div class="tl-area-tag">${n.icon} ${n.name}</div>
      </div>
    </div>`}).join(""),d=new Date().toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"});a.innerHTML=`
    <div class="home-page">
      <aside class="home-sidebar">
        <div class="sidebar-header">
          <div class="sidebar-title">最近更新</div>
          <span class="sidebar-updated">${d}</span>
        </div>
        <div class="sidebar-list">${o}</div>
      </aside>
      <main class="home-main">
        <div class="area-grid">${i}</div>
      </main>
    </div>`,a.querySelectorAll(".area-cover").forEach(t=>{t.addEventListener("click",()=>w(`#${t.dataset.area}`))}),a.querySelectorAll(".tl-row").forEach(t=>{t.addEventListener("click",()=>w(`#${t.dataset.area}/${t.dataset.file}`))})}async function C(a,e,i){const r=k[e];if(!r){a.innerHTML='<p style="padding:80px;text-align:center;color:var(--text-muted)">未知领域</p>';return}O(r);const o=await D(r);let d=i||(o.length>0?o[0]:null);a.innerHTML=`
    <div class="detail-wrap" style="--area-color:${r.color}">
      <nav class="detail-nav">
        <div class="detail-breadcrumb" id="bc"></div>
        <div class="pill-nav-bar" id="fl" style="--pill-active-bg:${r.color}"></div>
        <div class="detail-toc" id="toc-area" style="display:none">
          <div class="detail-toc-title">目录</div>
          <ul class="detail-toc-list" id="toc-list"></ul>
        </div>
      </nav>
      <article class="detail-content" id="dc"></article>
    </div>`;const t=a.querySelector("#fl"),n=a.querySelector("#dc"),s=a.querySelector("#toc-list"),h=a.querySelector("#toc-area"),g=a.querySelector("#bc");function u(v){t&&(t.innerHTML=o.map(l=>{const p=l.replace(".md","");return`<button class="pill-nav-btn${l===v?" active":""}" data-file="${l}">${p}</button>`}).join(""),t.querySelectorAll(".pill-nav-btn").forEach(l=>{l.addEventListener("click",async()=>{d=l.dataset.file,w(`#${e}/${d}`),await S(d),u(d)})}))}function E(v){g&&(g.innerHTML=`<a href="#" data-nav="">首页</a><span class="bc-sep">&nbsp;/&nbsp;</span><a href="#${e}" data-nav="${e}">${r.name}</a>${v?`<span class="bc-sep">&nbsp;/&nbsp;</span><span class="bc-current">${v.replace(".md","")}</span>`:""}`,g.querySelectorAll("a").forEach(l=>{l.addEventListener("click",p=>{p.preventDefault(),w(`#${l.dataset.nav}`)})}))}function $(){if(!s||!h)return;const v=n==null?void 0:n.querySelector(".markdown-body");if(!v){h.style.display="none";return}const l=v.querySelectorAll("h2,h3");if(l.length===0){h.style.display="none";return}h.style.display="";let p="";l.forEach((c,f)=>{const m=`s-${f}`;c.id=m,p+=`<li class="detail-toc-item"><a href="#${m}" class="detail-toc-link" style="padding-left:${c.tagName==="H3"?"12px":"0"}">${M(c.textContent)}</a></li>`}),s.innerHTML=p,s.querySelectorAll(".detail-toc-link").forEach(c=>{c.addEventListener("click",f=>{var m;f.preventDefault(),(m=document.getElementById(c.getAttribute("href").slice(1)))==null||m.scrollIntoView({behavior:"smooth",block:"start"}),s.querySelectorAll(".detail-toc-link").forEach(_=>_.classList.remove("active")),c.classList.add("active")})});const L=new IntersectionObserver(c=>{c.forEach(f=>{var m;f.isIntersecting&&(s.querySelectorAll(".detail-toc-link").forEach(_=>_.classList.remove("active")),(m=s.querySelector(`[href="#${f.target.id}"]`))==null||m.classList.add("active"))})},{rootMargin:"-80px 0px -70% 0px"});l.forEach(c=>L.observe(c))}async function S(v){if(!n||!v)return;n.innerHTML='<div style="padding:80px 0;text-align:center;color:var(--text-muted)">加载中...</div>';const l=await fetch(I(r,v));if(!l.ok){n.innerHTML='<div style="padding:80px 0;text-align:center;color:var(--text-muted)">无法加载报告</div>';return}const p=await l.text(),{renderMarkdown:L}=await b(async()=>{const{renderMarkdown:f}=await import("./renderer-7WwOHpzy.js");return{renderMarkdown:f}},[]);n.innerHTML=`<div class="markdown-body">${L(p)}</div>`;const c=n.querySelector(".markdown-body");if(c)try{const{enhanceWithCharts:f}=await b(async()=>{const{enhanceWithCharts:m}=await import("./charts-xlrTpLVa.js");return{enhanceWithCharts:m}},[]);f(c,r.color)}catch{}$(),E(v)}u(d),E(d),d&&await S(d)}function R(){const a=document.getElementById("header"),e=document.getElementById("site-title");a&&(a.style.background="",a.style.boxShadow=""),e&&(e.innerHTML="数据看板",e.classList.remove("detail-badge"),e.style.color="")}function O(a){const e=document.getElementById("header"),i=document.getElementById("site-title");e&&(e.style.background="",e.style.boxShadow=""),i&&(i.innerHTML=`${a.icon}&nbsp;&nbsp;${a.name}`,i.classList.add("detail-badge"),i.style.color="")}const y=document.getElementById("main-content");function B(){const e=(location.hash.slice(1)||"").split("/").filter(Boolean);return e.length===0?{page:"home"}:x.includes(e[0])?{page:"detail",area:e[0],file:e[1]||null}:{page:"home"}}async function V(){initThemeControls();const{page:a,area:e,file:i}=B();if(a==="detail"&&e)if(e==="education"){const{renderEduDetail:r}=await b(async()=>{const{renderEduDetail:o}=await import("./edu-detail-v3.js");return{renderEduDetail:o}},__vite__mapDeps([0,1,2,3]));await r({element:y,area:e,files:i?[i]:[]})}else if(e==="investing"){const{renderInvestingDetail:r}=await b(async()=>{const{renderInvestingDetail:o}=await import("./investing-detail-B_ZJJI2G.js");return{renderInvestingDetail:o}},__vite__mapDeps([4,5,1,2,3]));await r(y,k[e],i)}else if(e==="content"){const{renderContentDetail:r}=await b(async()=>{const{renderContentDetail:o}=await import("./content-detail-CiMq7Vdr.js");return{renderContentDetail:o}},__vite__mapDeps([6,5,1,2,3]));await r(y,e,i)}else if(e==="legal"){const{renderLegalDetail:r}=await b(async()=>{const{renderLegalDetail:o}=await import("./legal-detail-BjLFAXkK.js");return{renderLegalDetail:o}},__vite__mapDeps([7,1,2,3]));await r(y,e,i)}else if(e==="finance"){const{renderFinanceDetail:r}=await b(async()=>{const{renderFinanceDetail:o}=await import("./finance-detail.js");return{renderFinanceDetail:o}},__vite__mapDeps([8,1,2,3]));await r({element:y,area:e,files:i?[i]:[]})}else await C(y,e,i);else await P(y)}function w(a){location.hash=a}window.addEventListener("hashchange",V);
function initThemeControls(){
const e=document.getElementById("header");
if(!e||e.querySelector(".theme-controls"))return;
const t=document.createElement("div");
t.className="theme-controls";
t.innerHTML=`
    <div class="style-switcher" id="style-switcher">
      <button data-style="newspaper" title="报纸风格">报</button>
      <button data-style="magazine" title="杂志风格">志</button>
      <button data-style="tech" class="active" title="科技风格">技</button>
    </div>
    <div class="theme-switcher" id="theme-switcher">
      <button data-color="dark" class="active" title="深色">暗</button>
      <button data-color="mid" title="中间色">中</button>
      <button data-color="light" title="浅色">亮</button>
    </div>
  `;
e.appendChild(t);
const o=localStorage.getItem("dashboard-color-mode")||"dark",
r=localStorage.getItem("dashboard-style")||"tech";
document.documentElement.setAttribute("data-color-mode",o),
document.documentElement.setAttribute("data-style",r),
document.querySelectorAll("#theme-switcher button").forEach(n=>{
n.classList.toggle("active",n.dataset.color===o),
n.addEventListener("click",()=>{
const s=n.dataset.color;
document.documentElement.setAttribute("data-color-mode",s),
localStorage.setItem("dashboard-color-mode",s),
document.querySelectorAll("#theme-switcher button").forEach(d=>d.classList.remove("active")),
n.classList.add("active")
})
}),
document.querySelectorAll("#style-switcher button").forEach(n=>{
n.classList.toggle("active",n.dataset.style===r),
n.addEventListener("click",()=>{
const s=n.dataset.style;
document.documentElement.setAttribute("data-style",s),
localStorage.setItem("dashboard-style",s),
document.querySelectorAll("#style-switcher button").forEach(d=>d.classList.remove("active")),
n.classList.add("active")
})
})
}
export{b as _,w as n,V as r};
