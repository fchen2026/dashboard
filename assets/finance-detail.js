/**
 * Finance Detail — 财金板块 · 股票周度总结报告
 * Uses Canvas-based chart library from charts-BVitNI1m.js
 * Dark theme with gold accent matching stock market convention
 */

import { n as navigate } from "./core-B_Wlt-Ld.js";
import {
  a as donut,
  b as bar,
  d as line,
  g as getColors,
} from "./charts-BVitNI1m.js";
const StateLifecycle={IDLE:"idle",LOADING:"loading",LOADED:"loaded",EMPTY:"empty",ERROR:"error",STALE:"stale"};function createStateManager(){let g=StateLifecycle.IDLE;const m=new Map;let f=null;const s=new Set;return{setGlobal(t){g=t;s.forEach(e=>e("global",t))},getGlobal(){return g},setSection(t,e){m.set(t,e);s.forEach(r=>r(t,e))},getSection(t){return m.get(t)||StateLifecycle.IDLE},allLoaded(){return g===StateLifecycle.LOADED&&[...m.values()].every(t=>t===StateLifecycle.LOADED)},markFetchTime(){f=Date.now()},isStale(ttl=6e5){return f?Date.now()-f>ttl:!0},reset(){g=StateLifecycle.IDLE;m.clear();f=null},subscribe(t){s.add(t);return()=>s.delete(t)},getLastFetchTime(){return f}}}
let gStateManager=createStateManager();


const TABS = [
  { key: "overview", label: "总览" },
  { key: "accuracy", label: "预测准确率" },
  { key: "rotation", label: "行业轮动" },
  { key: "events", label: "核心事件" },
  { key: "factors", label: "因子与规则" },
  { key: "mistakes", label: "失误分析" },
  { key: "outlook", label: "下周展望" },
];

const COLORS = {
  accent: "#D4A017",
  accentLight: "#F0C050",
  accentDark: "#B8860B",
  up: "#E74C3C",
  upLight: "rgba(231,76,60,0.15)",
  down: "#2ECC71",
  downLight: "rgba(46,204,113,0.15)",
  warn: "#F39C12",
  gray: "#5A5A6E",
  grayLight: "#8B8B9E",
  cardBg: "rgba(255,255,255,0.03)",
  cardBorder: "rgba(255,255,255,0.06)",
  textPrimary: "#F0F0F5",
  textMuted: "#5A5A6E",
  bg: "#0A0A0F",
};

let styleEl = null;
let currentTab = "overview";
let financeData = null;

function injectStyles() {
  if (styleEl) return;
  styleEl = document.createElement("style");
  styleEl.id = "finance-detail-styles";
  styleEl.textContent = `
.fin-wrap { display: flex; flex-direction: column; width: 100%; flex: 1; min-height: 0; background: #0A0A0F; color: #F0F0F5; font-family: 'Inter', -apple-system, sans-serif; }
.fin-topbar { display: flex; align-items: center; gap: 16px; padding: 12px 24px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.fin-topbar-title { font-size: 18px; font-weight: 700; color: #F0F0F5; }
.fin-back { font-size: 13px; color: #A0A0B8; background: none; border: none; cursor: pointer; padding: 6px 10px; border-radius: 8px; }
.fin-back:hover { color: #F0F0F5; background: rgba(255,255,255,0.05); }

.fin-nav { display: flex; gap: 0; padding: 0 24px; border-bottom: 1px solid rgba(255,255,255,0.06); overflow-x: auto; }
.fin-nav-btn { padding: 12px 20px; font-size: 14px; font-weight: 500; color: #5A5A6E; background: none; border: none; border-bottom: 2px solid transparent; cursor: pointer; white-space: nowrap; transition: all 0.2s; }
.fin-nav-btn:hover { color: #A0A0B8; }
.fin-nav-btn.active { color: #D4A017; border-bottom-color: #D4A017; }

.fin-content { flex: 1; padding: 20px 24px; overflow-y: auto; }

.fin-kpi { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; }
.fin-kpi-card {
  background: var(--color-bg-overlay);
  border: none;
  border-radius: var(--radius-lg);
  padding: 18px 22px; text-align: center;
  box-shadow: var(--shadow-md);
  transition: box-shadow var(--transition-normal), transform var(--transition-normal);
  position: relative; overflow: hidden;
}
.fin-kpi-card::after {
  content: ''; position: absolute; top: 0; left: 0; right: 0;
  height: 2px; background: #D4A017; opacity: 0.4;
  transform: scaleX(0); transform-origin: left;
  transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.fin-kpi-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); }
.fin-kpi-card:hover::after { transform: scaleX(1); }
.fin-kpi-val { font-size: 28px; font-weight: 700; font-family: var(--font-sans); }
.fin-kpi-label { font-size: 12px; color: var(--color-text-secondary); margin-top: 4px; }

.fin-chart-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
.fin-chart-card {
  background: var(--color-bg-overlay);
  border: none;
  border-radius: var(--radius-lg); padding: 16px;
  box-shadow: var(--shadow-sm);
}
.fin-chart-card.full { grid-column: 1 / -1; }
.fin-chart-title { font-size: 14px; font-weight: 600; color: var(--color-text-secondary); margin-bottom: 12px; font-family: var(--font-sans); }
.fin-chart-canvas { width: 100%; height: 240px; }

.fin-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 12px 0; }
.fin-table th { background: rgba(255,255,255,0.04); color: #8B8B9E; padding: 8px 12px; text-align: left; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 1px solid rgba(255,255,255,0.06); }
.fin-table td { padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,0.04); color: #A0A0B8; }
.fin-table tr:hover td { background: rgba(255,255,255,0.02); }
.fin-table .up { color: #E74C3C; font-weight: 600; }
.fin-table .down { color: #2ECC71; font-weight: 600; }

.fin-timeline { position: relative; padding-left: 24px; margin: 16px 0; }
.fin-timeline::before { content: ''; position: absolute; left: 8px; top: 4px; bottom: 4px; width: 2px; background: rgba(255,255,255,0.08); }
.fin-tl-item { position: relative; margin-bottom: 16px; padding-left: 12px; }
.fin-tl-item::before { content: ''; position: absolute; left: -20px; top: 6px; width: 10px; height: 10px; border-radius: 50%; background: #D4A017; }
.fin-tl-date { font-size: 12px; font-weight: 700; color: #D4A017; }
.fin-tl-content { font-size: 13px; color: #A0A0B8; margin-top: 4px; line-height: 1.7; }
.fin-tl-triggers { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
.fin-tag { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; }
.fin-tag-red { background: rgba(231,76,60,0.12); color: #E74C3C; }
.fin-tag-green { background: rgba(46,204,113,0.12); color: #2ECC71; }
.fin-tag-gold { background: rgba(212,160,23,0.12); color: #D4A017; }
.fin-tag-blue { background: rgba(96,165,250,0.12); color: #60A5FA; }
.fin-tag-gray { background: rgba(255,255,255,0.06); color: #8B8B9E; }

.fin-callout { padding: 12px 16px; border-radius: 8px; margin: 12px 0; font-size: 13px; border-left: 4px solid; }
.fin-callout.red { background: rgba(231,76,60,0.06); border-color: #E74C3C; }
.fin-callout.green { background: rgba(46,204,113,0.06); border-color: #2ECC71; }
.fin-callout.gold { background: rgba(212,160,23,0.06); border-color: #D4A017; }
.fin-callout.blue { background: rgba(96,165,250,0.06); border-color: #60A5FA; }

.fin-stock-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; margin: 12px 0; }
.fin-stock-card {
  background: var(--color-bg-overlay);
  border: none;
  border-radius: var(--radius-lg); padding: 12px; text-align: center;
  box-shadow: var(--shadow-sm);
}
.fin-stock-name { font-weight: 700; font-size: 14px; }
.fin-stock-code { font-size: 11px; color: #5A5A6E; margin-top: 2px; }
.fin-stock-signal { font-size: 12px; font-weight: 600; margin-top: 6px; padding: 2px 10px; border-radius: 4px; display: inline-block; }
.fin-stock-signal.green { background: rgba(46,204,113,0.12); color: #2ECC71; }
.fin-stock-signal.flat { background: rgba(255,255,255,0.06); color: #8B8B9E; }

.fin-mistake-card { padding: 12px 16px; border-radius: 8px; margin-bottom: 8px; }
.fin-mistake-card.P0 { background: rgba(231,76,60,0.06); border: 1px solid rgba(231,76,60,0.15); }
.fin-mistake-card.P1 { background: rgba(212,160,23,0.06); border: 1px solid rgba(212,160,23,0.15); }
.fin-mistake-level { font-size: 11px; font-weight: 700; margin-right: 8px; padding: 1px 6px; border-radius: 4px; }
.fin-mistake-level.p0 { background: rgba(231,76,60,0.15); color: #E74C3C; }
.fin-mistake-level.p1 { background: rgba(212,160,23,0.15); color: #D4A017; }
.fin-mistake-desc { font-size: 13px; color: #A0A0B8; line-height: 1.6; }

.fin-factor-change { font-size: 11px; font-weight: 600; padding: 1px 6px; border-radius: 4px; display: inline-block; }
.fin-factor-change.red { background: rgba(231,76,60,0.12); color: #E74C3C; }
.fin-factor-change.gold { background: rgba(212,160,23,0.12); color: #D4A017; }
.fin-factor-change.green { background: rgba(46,204,113,0.12); color: #2ECC71; }

.fin-rotation-bar { display: flex; align-items: center; height: 24px; border-radius: 4px; margin: 2px 0; min-width: 20px; }
.fin-rotation-bar.s1 { background: rgba(231,76,60,0.15); }
.fin-rotation-bar.s2 { background: rgba(231,76,60,0.25); }
.fin-rotation-bar.s3 { background: rgba(212,160,23,0.25); }
.fin-rotation-bar.s4 { background: rgba(46,204,113,0.25); }
.fin-rotation-bar.s5 { background: rgba(46,204,113,0.35); }

.fin-scenario-card {
  text-align: center; padding: 20px;
  border-radius: var(--radius-lg);
  background: var(--color-bg-overlay);
  border: none;
  box-shadow: var(--shadow-sm);
}
.fin-scenario-prob { font-size: 36px; font-weight: 800; }
.fin-scenario-label { font-size: 13px; margin-top: 4px; }

.fin-section-title { font-size: 15px; font-weight: 600; color: var(--color-text-primary); padding-bottom: 8px; border-bottom: 1px solid var(--color-border-default); margin: 20px 0 12px; font-family: var(--font-sans); }

/* ─── Stale Banner ─── */
.fin-stale-banner {
  padding: 8px 16px; margin-bottom: 20px;
  background: rgba(240,168,0,0.08);
  border: 1px solid rgba(240,168,0,0.2);
  border-radius: var(--radius-md);
  font-size: 12px; color: var(--color-warning);
  display: flex; align-items: center; gap: 8px;
}
.fin-stale-banner button {
  padding: 2px 10px; border: 1px solid var(--color-warning);
  border-radius: var(--radius-sm); background: transparent;
  color: var(--color-warning); cursor: pointer; font-size: 11px;
}
/* ─── Skeleton ─── */
@keyframes fin-pulse { 0% { opacity: 0.2; } 50% { opacity: 0.5; } 100% { opacity: 0.2; } }
.fin-skeleton { background: var(--color-bg-overlay); border-radius: var(--radius-md); animation: fin-pulse 1.8s ease-in-out infinite; }
.fin-skeleton-kpi { height: 40px; width: 70%; margin-bottom: 8px; }
.fin-skeleton-line { height: 13px; margin-bottom: 8px; }
.fin-skeleton-line:last-child { width: 55%; }
/* ─── Empty State ─── */
.fin-empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: var(--space-8); color: var(--color-text-tertiary);
  text-align: center; min-height: 200px;
}
.fin-empty-icon { font-size: 36px; margin-bottom: var(--space-3); opacity: 0.3; }
.fin-empty-text { font-size: 13px; color: var(--color-text-secondary); }
/* ─── Fade In ─── */
@keyframes fin-fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
.fin-fade { animation: fin-fadein 200ms ease-out; }

@media (prefers-reduced-motion: reduce) {
  .fin-fade { animation: none; }
  .fin-kpi-card, .fin-nav-btn { transition: none; }
}

@media (max-width: 768px) {
  .fin-kpi { grid-template-columns: repeat(2, 1fr); }
  .fin-chart-row { grid-template-columns: 1fr; }
}

h3 { font-size: 14px; font-weight: 600; color: #D4A017; margin: 16px 0 8px; font-family: var(--font-sans); }
`;
  document.head.appendChild(styleEl);
}

// ─── Data Loading ───────────────────────────
async function loadData() {
  if (financeData) return financeData;
  try {
    const resp = await fetch("./finance-data.json");
    if (!resp.ok) throw new Error("finance-data.json not found");
    financeData = await resp.json();
    return financeData;
  } catch (e) {
    console.error("Failed to load finance data:", e);
    return null;
  }
}

function fmtPct(v) {
  if (v == null) return "—";
  return (v * 100).toFixed(1) + "%";
}

function pctClass(v) {
  if (v == null) return "";
  return v >= 0 ? "up" : "down";
}

function pctSign(v) {
  if (v == null) return "—";
  if (v >= 0) return "+" + fmtPct(v);
  return fmtPct(v);
}

// ─── Tab 1: Overview ────────────────────────
function renderOverview(container, data) {
  const kpi = data.kpi;
  const tl = data.timeline;

  const kpiCards = [
    { val: fmtPct(kpi.weekly_accuracy.value), label: kpi.weekly_accuracy.label, color: "#F39C12" },
    { val: pctSign(kpi.star50_weekly.value), label: kpi.star50_weekly.label, color: "#2ECC71" },
    { val: pctSign(kpi.shanghai_weekly.value), label: kpi.shanghai_weekly.label, color: "#E74C3C" },
    { val: fmtPct(kpi.best_day.value), label: kpi.best_day.label + " · " + kpi.best_day.day, color: "#2ECC71" },
    { val: fmtPct(kpi.worst_day.value), label: kpi.worst_day.label + " · " + kpi.worst_day.day, color: "#E74C3C" },
    { val: pctSign(kpi.friday_shanghai.value), label: kpi.friday_shanghai.label, color: "#E74C3C" },
  ];

  const tlHtml = tl.map(t => {
    const tagCls = t.tag === "green" ? "fin-tag-green" : t.tag === "red" ? "fin-tag-red" : "fin-tag-gray";
    const triggers = (t.triggers || []).map(tr => `<span class="fin-tag fin-tag-gray">${tr}</span>`).join(" ");
    const prices = [];
    if (t.shanghai != null) prices.push(`上证 <span class="${pctClass(t.shanghai)}">${pctSign(t.shanghai)}</span>`);
    if (t.star50 != null) prices.push(`科创50 <span class="${pctClass(t.star50)}">${pctSign(t.star50)}</span>`);
    if (t.gem != null) prices.push(`创业板 <span class="${pctClass(t.gem)}">${pctSign(t.gem)}</span>`);
    return `<div class="fin-tl-item">
      <div class="fin-tl-date">${t.date} · <span class="fin-tag ${tagCls}">${t.label}</span></div>
      <div class="fin-tl-content">${prices.join(" · ") || t.note || ""}</div>
      ${triggers ? `<div class="fin-tl-triggers">${triggers}</div>` : ""}
      ${t.note ? `<div style="font-size:12px;color:#8B8B9E;margin-top:4px">${t.note}</div>` : ""}
    </div>`;
  }).join("");

  container.innerHTML = `
    <div style="font-size:14px;color:#A0A0B8;margin-bottom:16px;line-height:1.8">${data.summary_pie.description}</div>
    <div class="fin-kpi">
      ${kpiCards.map(c => `<div class="fin-kpi-card">
        <div class="fin-kpi-val" style="color:${c.color}">${c.val}</div>
        <div class="fin-kpi-label">${c.label}</div>
      </div>`).join("")}
    </div>
    <div class="fin-chart-card full">
      <div class="fin-chart-title">本周行情时间线</div>
      <div class="fin-timeline">${tlHtml}</div>
    </div>
  `;
}

// ─── Tab 2: Accuracy ────────────────────────
function renderAccuracy(container, data) {
  const da = data.daily_accuracy;
  const sa = data.sector_accuracy;
  const sta = data.stock_accuracy;

  // Bar chart: daily accuracy
  const labels = da.map(d => d.day);
  const marketVals = da.map(d => d.market * 100);
  const sectorVals = da.map(d => d.sector * 100);
  const stockVals = da.map(d => d.stock * 100);

  const sectorRows = sa.map(s => `
    <tr>
      <td>${s.rank <= 3 ? ["🥇","🥈","🥉"][s.rank-1] : s.rank}</td>
      <td>${s.sector}</td>
      <td class="${s.accuracy >= 0.8 ? 'up' : s.accuracy >= 0.6 ? '' : 'down'}">${fmtPct(s.accuracy)}</td>
      <td><span class="fin-tag ${s.trend_icon === 'green' ? 'fin-tag-green' : s.trend_icon === 'red' ? 'fin-tag-red' : 'fin-tag-gold'}">${s.trend}</span></td>
    </tr>`).join("");

  const stockRows = sta.map(s => `
    <tr>
      <td>${s.name}</td>
      <td>${s.predictions}</td>
      <td>${s.correct}</td>
      <td class="${s.accuracy >= 0.8 ? 'up' : s.accuracy === 0 ? 'down' : ''}">${fmtPct(s.accuracy)}</td>
    </tr>`).join("");

  container.innerHTML = `
    <div class="fin-chart-row">
      <div class="fin-chart-card full">
        <div class="fin-chart-title">逐日预测准确率对比</div>
        <canvas class="fin-chart-canvas" id="chart-accuracy-daily" style="height:260px"></canvas>
      </div>
    </div>
    <div class="fin-chart-row">
      <div class="fin-chart-card">
        <div class="fin-chart-title">分行业准确率排名</div>
        <table class="fin-table">
          <tr><th>排名</th><th>行业</th><th>准确率</th><th>趋势</th></tr>
          ${sectorRows}
        </table>
      </div>
      <div class="fin-chart-card">
        <div class="fin-chart-title">个股准确率排名</div>
        <table class="fin-table">
          <tr><th>股票</th><th>预测</th><th>正确</th><th>准确率</th></tr>
          ${stockRows}
        </table>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    const canvas = container.querySelector("#chart-accuracy-daily");
    if (!canvas || canvas.offsetWidth===0 || canvas.offsetHeight===0) {gStateManager.setSection("chart-accuracy",StateLifecycle.ERROR); return;}
    if (canvas && bar) {
      bar(canvas, {
        labels,
        series: [
          { name: "大盘方向", data: marketVals, color: "#D4A017" },
          { name: "行业方向", data: sectorVals, color: "#60A5FA" },
          { name: "个股方向", data: stockVals, color: "#C084FC" },
        ],
        values: [...marketVals, ...sectorVals, ...stockVals],
      }, {
        area: "finance",
        minValue: 0,
        maxValue: 100,
        dataLabels: true,
        hideLegend: false,
      });
    }
  });
}

// ─── Tab 3: Rotation ────────────────────────
function renderRotation(container, data) {
  const m = data.rotation.matrix;
  const patterns = data.rotation.patterns;

  const days = ["周二", "周三", "周四", "周五"];
  const intensityMap = { 1: "s1", 2: "s2", 3: "s3", 4: "s4", 5: "s5" };
  const starMap = { 1: "★", 2: "★★", 3: "★★★", 4: "★★★★", 5: "★★★★★" };

  // Build heatmap table
  const headerRow = `<tr><th>行业</th>${days.map(d => `<th style="text-align:center">${d}</th>`).join("")}<th>周度强度</th></tr>`;
  const bodyRows = m.map(row => {
    const cells = ["tue","wed","thu","fri"].map(k => {
      const v = row[k];
      return `<td style="text-align:center"><span class="fin-rotation-bar ${intensityMap[v]}" style="width:${v*16+4}px;display:inline-block;vertical-align:middle;margin-right:4px"></span>${starMap[v]}</td>`;
    }).join("");
    return `<tr><td style="font-weight:600">${row.sector}</td>${cells}<td style="font-weight:600">${row.weekly_intensity}</td></tr>`;
  }).join("");

  const patternCards = patterns.map(p => `
    <div class="fin-callout gold">
      <strong>规律${p.id}：${p.title}</strong><br>
      <span style="font-size:12px;color:#8B8B9E">${p.detail}</span>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="fin-chart-card full" style="margin-bottom:16px">
      <div class="fin-chart-title">行业强度变化矩阵（★越多越强）</div>
      <table class="fin-table">${headerRow}${bodyRows}</table>
    </div>
    <div class="fin-chart-card full">
      <div class="fin-chart-title">四项轮动规律</div>
      ${patternCards}
    </div>
  `;
}

// ─── Tab 4: Events ─────────────────────────
function renderEvents(container, data) {
  const ev = data.events;
  const bt = data.bottleneck_theory;

  const primaryRows = ev.primary.map(e => `
    <tr>
      <td><span class="fin-tag ${e.color === 'red' ? 'fin-tag-red' : 'fin-tag-gold'}">🔴${e.id}</span></td>
      <td><strong>${e.event}</strong></td>
      <td>${e.weight}</td>
      <td>${e.impact}</td>
    </tr>`).join("");

  const secondaryRows = ev.secondary.map(e => `
    <tr>
      <td>${e.id}</td>
      <td>${e.event}</td>
      <td>${e.weight}</td>
      <td>${e.sector}</td>
    </tr>`).join("");

  const noiseHtml = ev.noise_removed.map(n => `<span class="fin-tag fin-tag-gray">${n}</span>`).join(" ");

  const btRows = bt.map(b => `
    <tr>
      <td>${b.level}</td>
      <td>${b.link}</td>
      <td>${b.representative}</td>
      <td class="${b.highlight ? 'up' : ''}">${b.weekly_performance}</td>
    </tr>`).join("");

  container.innerHTML = `
    <div class="fin-section-title">一级冲击（权重≥15）</div>
    <table class="fin-table">
      <tr><th>#</th><th>事件</th><th>权重</th><th>影响</th></tr>
      ${primaryRows}
    </table>

    <div class="fin-section-title">二级催化（权重8-14）</div>
    <table class="fin-table">
      <tr><th>#</th><th>事件</th><th>权重</th><th>影响板块</th></tr>
      ${secondaryRows}
    </table>

    <div class="fin-section-title">已剔除噪音</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px">${noiseHtml}</div>

    <div class="fin-section-title">瓶颈理论映射</div>
    <table class="fin-table">
      <tr><th>层级</th><th>环节</th><th>代表标的</th><th>本周表现</th></tr>
      ${btRows}
    </table>

    <div class="fin-callout green">
      <strong>关键发现：</strong>${data.bottleneck_finding}
    </div>
  `;
}

// ─── Tab 5: Factors & Rules ────────────────
function renderFactors(container, data) {
  const fu = data.factor_updates;
  const nr = data.new_rules;

  const factorRows = fu.map(f => {
    const oldStr = f.old_weight != null ? fmtPct(f.old_weight) : "—";
    const changeTag = f.tag === "red" ? "fin-factor-change red" : f.tag === "green" ? "fin-factor-change green" : "fin-factor-change gold";
    return `<tr>
      <td>${f.factor}</td>
      <td>${oldStr}</td>
      <td><strong>${fmtPct(f.new_weight)}</strong></td>
      <td><span class="${changeTag}">${f.change}</span></td>
    </tr>`;
  }).join("");

  const ruleCards = nr.map(r => `
    <div class="fin-callout blue">
      <strong>${r.title}</strong><br>
      <span style="font-size:12px;color:#8B8B9E">${r.content}</span>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="fin-chart-card full" style="margin-bottom:16px">
      <div class="fin-chart-title">因子权重更新表</div>
      <table class="fin-table">
        <tr><th>因子</th><th>旧权重</th><th>新权重</th><th>调整</th></tr>
        ${factorRows}
      </table>
    </div>
    <div class="fin-chart-card full">
      <div class="fin-chart-title">新增4条全局规则</div>
      ${ruleCards}
    </div>
  `;
}

// ─── Tab 6: Mistakes ───────────────────────
function renderMistakes(container, data) {
  const ms = data.mistakes;
  const roots = data.mistake_roots;

  const mistakeCards = ms.map(m => `
    <div class="fin-mistake-card ${m.level.startsWith('P0') ? 'P0' : 'P1'}">
      <span class="fin-mistake-level ${m.level.startsWith('P0') ? 'p0' : 'p1'}">${m.level}</span>
      <span class="fin-mistake-desc">${m.description}</span>
    </div>
  `).join("");

  const rootCards = roots.map(r => `
    <div class="fin-callout ${r.color}">
      <strong>${r.type}类·${r.category}</strong><br>
      <span style="font-size:12px;color:#8B8B9E">${r.detail}</span>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="fin-chart-row">
      <div class="fin-chart-card">
        <div class="fin-chart-title">重大失误清单</div>
        ${mistakeCards}
      </div>
      <div class="fin-chart-card">
        <div class="fin-chart-title">偏差根因分类</div>
        ${rootCards}
      </div>
    </div>
  `;
}

// ─── Tab 7: Outlook ────────────────────────
function renderOutlook(container, data) {
  const nw = data.next_week;

  const scenarioCards = nw.scenarios.map(s => `
    <div class="fin-scenario-card" style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06)">
      <div class="fin-scenario-prob" style="color:${s.color === 'warn' ? '#F39C12' : s.color}">${(s.probability * 100).toFixed(0)}%</div>
      <div class="fin-scenario-label" style="color:#8B8B9E">${s.label}</div>
    </div>
  `).join("");

  const stockCards = nw.stocks.map(s => `
    <div class="fin-stock-card">
      <div class="fin-stock-name">${s.name}</div>
      <div class="fin-stock-code">${s.code}</div>
      <div class="fin-stock-signal ${s.signal_type === 'green' ? 'green' : 'flat'}">${s.signal}</div>
    </div>
  `).join("");

  const stratRows = nw.strategies.map(s => {
    const tagCls = s.type === "关注" ? "fin-tag-green" : "fin-tag-gold";
    return `<tr>
      <td><span class="fin-tag ${tagCls}">${s.type}</span></td>
      <td>${s.content}</td>
    </tr>`;
  }).join("");

  container.innerHTML = `
    <div class="fin-chart-row" style="grid-template-columns:repeat(3,1fr)">
      ${scenarioCards}
    </div>
    <div class="fin-chart-card full" style="margin-top:16px">
      <div class="fin-chart-title">关注标的</div>
      <div class="fin-stock-grid">${stockCards}</div>
    </div>
    <div class="fin-chart-card full" style="margin-top:16px">
      <div class="fin-chart-title">操作策略</div>
      <table class="fin-table">
        <tr><th>策略</th><th>内容</th></tr>
        ${stratRows}
      </table>
    </div>
    <div class="fin-callout red" style="margin-top:16px">
      <strong>市场脆弱性检查：</strong>${nw.risk_check}
    </div>
  `;
}

// ─── Skeleton Loading ──────────────────────
function J(element) {
  element.innerHTML = `
    <div class="fin-wrap">
      <div class="fin-topbar">
        <div class="fin-skeleton" style="width:60px;height:16px"></div>
        <div class="fin-skeleton" style="width:120px;height:20px"></div>
      </div>
      <div class="fin-kpi" style="padding:16px 24px">
        ${Array(3).fill('<div class="fin-kpi-card"><div class="fin-skeleton fin-skeleton-kpi"></div><div class="fin-skeleton fin-skeleton-line"></div></div>').join("")}
      </div>
      <div style="display:flex;flex:1;padding:0 24px">
        <div style="width:100%">
          <div class="fin-skeleton fin-skeleton-line" style="width:100%"></div>
          <div class="fin-skeleton fin-skeleton-line" style="width:100%"></div>
          <div class="fin-skeleton fin-skeleton-line" style="width:70%"></div>
        </div>
      </div>
    </div>`;
}

// ─── Main Render ────────────────────────────
async function renderFinanceDetail({ element, area, files }) {
  injectStyles();
  J(element);

  const data = await loadData();
  if (!data) {
    element.innerHTML = '<div class="fin-empty" style="margin-top:80px"><div class="fin-empty-icon">📈</div><div class="fin-empty-text">无法加载财金数据 (finance-data.json)</div></div>';
    return;
  }

  gStateManager.markFetchTime();

  element.innerHTML = `
    <div class="fin-wrap">
      <div class="fin-topbar">
        <button class="fin-back" id="fin-back">← 返回首页</button>
        <span class="fin-topbar-title">财金 · ${data.meta.week}周报</span>
      </div>
      <div class="fin-nav" id="fin-nav">
        ${TABS.map(t => `<button class="fin-nav-btn${t.key === currentTab ? " active" : ""}" data-tab="${t.key}">${t.label}</button>`).join("")}
      </div>
      <div class="fin-content" id="fin-content"></div>
    </div>
  `;

  element.querySelector("#fin-back").addEventListener("click", () => {
    navigate("#");
  });

  element.querySelectorAll(".fin-nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentTab = btn.dataset.tab;
      element.querySelectorAll(".fin-nav-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderTab(element.querySelector("#fin-content"), data);
    });
  });

  renderTab(element.querySelector("#fin-content"), data);
}

function showStaleBanner(container) {
  const existing = document.querySelector(".fin-stale-banner");
  existing && existing.remove();
  const banner = document.createElement("div");
  banner.className = "fin-stale-banner";
  const mins = gStateManager.getLastFetchTime() ? Math.floor((Date.now() - gStateManager.getLastFetchTime()) / 6e4) : 0;
  banner.innerHTML = '\u26a0\ufe0f 数据可能已过期，上次更新：' + mins + '分钟前 <button id="fin-refresh-btn">刷新</button>';
  container.parentElement.insertBefore(banner, container);
  document.getElementById("fin-refresh-btn").addEventListener("click", async () => {
    const b = document.querySelector(".fin-stale-banner");
    b && b.remove();
    gStateManager.markFetchTime();
    const newData = await loadData();
    if (newData) {
      financeData = newData;
      renderTab(document.querySelector("#fin-content"), newData);
    }
  });
}

function renderTab(container, data) {
  container.innerHTML = "";
  if (gStateManager.isStale(6e5)) {
    showStaleBanner(container);
  }
  switch (currentTab) {
    case "overview": gStateManager.setSection("tab-overview",StateLifecycle.LOADING);renderOverview(container, data);gStateManager.setSection("tab-overview",data?StateLifecycle.LOADED:StateLifecycle.EMPTY); break;
    case "accuracy": gStateManager.setSection("tab-accuracy",StateLifecycle.LOADING);renderAccuracy(container, data);gStateManager.setSection("tab-accuracy",data?StateLifecycle.LOADED:StateLifecycle.EMPTY); break;
    case "rotation": gStateManager.setSection("tab-rotation",StateLifecycle.LOADING);renderRotation(container, data);gStateManager.setSection("tab-rotation",data?StateLifecycle.LOADED:StateLifecycle.EMPTY); break;
    case "events": gStateManager.setSection("tab-events",StateLifecycle.LOADING);renderEvents(container, data);gStateManager.setSection("tab-events",data?StateLifecycle.LOADED:StateLifecycle.EMPTY); break;
    case "factors": gStateManager.setSection("tab-factors",StateLifecycle.LOADING);renderFactors(container, data);gStateManager.setSection("tab-factors",data?StateLifecycle.LOADED:StateLifecycle.EMPTY); break;
    case "mistakes": gStateManager.setSection("tab-mistakes",StateLifecycle.LOADING);renderMistakes(container, data);gStateManager.setSection("tab-mistakes",data?StateLifecycle.LOADED:StateLifecycle.EMPTY); break;
    case "outlook": gStateManager.setSection("tab-outlook",StateLifecycle.LOADING);renderOutlook(container, data);gStateManager.setSection("tab-outlook",data?StateLifecycle.LOADED:StateLifecycle.EMPTY); break;
    default: renderOverview(container, data);
  }
}

export { renderFinanceDetail };
