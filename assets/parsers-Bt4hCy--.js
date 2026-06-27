function g(t){Array.isArray(t)||(t=t.split(`
`));let i=0;const e={};if(t.length>0&&t[0].trim()==="---"){let n=1;for(;n<t.length&&t[n].trim()!=="---";){const r=t[n].match(/^(\w[\w_-]*)\s*:\s*(.+)/);r&&(e[r[1]]=r[2].trim()),n++}i=n+1}return{lines:t.slice(i),meta:e}}function b(t){const{lines:i}=g(typeof t=="string"?t.split(`
`):t);return i.join(`
`)}function u(t){const i=typeof t=="string"?t.split(`
`):t;let e=!1,n=[];const r=[];for(const s of i){const a=s.trim();if(a.startsWith("|")&&a.endsWith("|")){if(a.includes("---")){e=!0;continue}const l=a.split("|").slice(1,-1).map(f=>f.trim());if(!e){n=l,e=!0;continue}l.length>0&&r.push(l)}else if(e&&a==="")break}return{headers:n,rows:r}}function c(t,i){const e=t.split(`
`);let n=-1;for(let s=0;s<e.length;s++)if(e[s].trim().match(i)){n=s+1;break}if(n===-1)return"";const r=[];for(let s=n;s<e.length&&!e[s].trim().startsWith("## ");s++)r.push(e[s]);return r.join(`
`)}function S(t){const i=t.split(`
`),e=[];let n="",r=[];for(const s of i){const a=s.trim();a.startsWith("### ")?(n&&e.push({title:n,content:r.join(`
`).trim()}),n=a.replace(/^###\s*/,""),r=[]):r.push(s)}return n&&e.push({title:n,content:r.join(`
`).trim()}),e}function T(t){const i=t.match(/^(\d{4}-\d{2}-\d{2})/);return i?i[1]:null}function k(t){const i=t.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);return i?`${i[1]}-${i[2].padStart(2,"0")}-${i[3].padStart(2,"0")}`:null}function W(t){if(!t&&t!==0)return null;const i=(t+"").match(/([+-]?\d+\.?\d*)\s*%/);return i?parseFloat(i[1]):null}function w(t){const i=parseFloat((t||"").toString().replace(/[,，%+\\-]/g,""));return isNaN(i)?0:i}function F(t,i){if(!t)return v("investing","investing-daily","empty content");const e=b(t);e.split(`
`);const n={},r=c(e,/^##\s*大盘综述/);n.overviewText=r.split(`
`).filter(o=>o.trim()&&!o.trim().startsWith("#")&&!o.trim().startsWith("|")).join(`
`).trim();const s=c(e,/^##\s*三大指数收盘/);s&&(n.indexTable=u(s));const a=c(e,/^##\s*核心持仓表现/);a&&(n.holdingsTable=u(a));const l=c(e,/^##\s*板块热点/);l&&(n.sectorSubs=S(l),n.otherSectorsTable=u(l),n.sectorBullets=l.split(`
`).filter(o=>o.trim().startsWith("-")).map(o=>o.replace(/^-\s*\*?\*?/,"").trim()));const f=c(e,/^##\s*预测复盘/);if(f){n.predictionTable=u(f);const o=f.match(/\*\*最大偏差\*\*[：:]\s*(.+)/);n.maxDeviation=o?o[1]:""}const m=c(e,/^##\s*明[日天].*策略/);m&&(n.strategyTable=u(m));const p=c(e,/^##\s*走势预判/);p&&(n.outlookTable=u(p));const d=c(e,/^##\s*风险评估/);d&&(n.riskItems=d.split(`
`).filter(o=>o.trim().startsWith("-")).map(o=>o.replace(/^-\s*/,"").trim()));const h=c(e,/^##\s*今日操作建议/);return h&&(n.suggestionTable=u(h)),{meta:{date:i?T(i):null,type:"investing-daily"},data:n}}function v(t,i,e){return{meta:{date:null,type:`${t}-${i}`},data:null,error:e}}export{W as a,F as b,w as c,k as d,c as e,u as p,b as s};
