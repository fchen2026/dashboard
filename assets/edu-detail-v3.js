
/**
 * Education Detail v3 — data-driven with 5 tabs
 * Uses existing chart library (Canvas-based) from charts-BVitNI1m.js
 */

import { n as navigate } from "./core-B_Wlt-Ld.js";
import {
  r as radar,
  a as donut,
  b as bar,
  c as knowledgeGraph,
  d as line,
  e as timeline,
  f as gauge,
  g as getColors,
} from "./charts-BVitNI1m.js";

const TABS = [
  { key: "overview", label: "总览" },
  { key: "daily", label: "每日详情" },
  { key: "knowledge", label: "知识图谱" },
  { key: "errors", label: "错题分析" },
  { key: "weekly", label: "周度报告" },
];

const COLORS = {
  accent: "#818CF8",
  chinese: "#818CF8",
  math: "#22C55E",
  combined: "#F59E0B",
  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#F87171",
  mastered: "#34D399",
  weak: "#F87171",
  improving: "#F59E0B",
};

const EL_COLORS = {
  edu: getColors ? getColors("education") : { accent: "#818CF8", accent15: "rgba(129,140,248,0.15)", accent25: "rgba(129,140,248,0.25)", accent50: "rgba(129,140,248,0.50)" },
};

let styleEl = null;
let currentTab = "overview";
let eduData = null;

function injectStyles() {
  if (styleEl) return;
  styleEl = document.createElement("style");
  styleEl.id = "edu-detail-v3-styles";
  styleEl.textContent = `
.edu-v3-wrap { display: flex; flex-direction: column; width: 100%; flex: 1; min-height: 0; background: #0A0A0F; color: #F0F0F5; font-family: 'Inter', -apple-system, sans-serif; }
.edu-v3-topbar { display: flex; align-items: center; gap: 16px; padding: 12px 24px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.edu-v3-topbar-title { font-size: 18px; font-weight: 700; color: #F0F0F5; }
.edu-v3-back { font-size: 13px; color: #A0A0B8; background: none; border: none; cursor: pointer; padding: 6px 10px; border-radius: 8px; }
.edu-v3-back:hover { color: #F0F0F5; background: rgba(255,255,255,0.05); }

.edu-v3-nav { display: flex; gap: 0; padding: 0 24px; border-bottom: 1px solid rgba(255,255,255,0.06); overflow-x: auto; }
.edu-v3-nav-btn { padding: 12px 20px; font-size: 14px; font-weight: 500; color: #5A5A6E; background: none; border: none; border-bottom: 2px solid transparent; cursor: pointer; white-space: nowrap; transition: all 0.2s; }
.edu-v3-nav-btn:hover { color: #A0A0B8; }
.edu-v3-nav-btn.active { color: #818CF8; border-bottom-color: #818CF8; }

/* KPI cards */
.edu-v3-kpi { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; padding: 16px 24px; }
.edu-v3-kpi-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px 20px; }
.edu-v3-kpi-val { font-size: 28px; font-weight: 700; color: #F0F0F5; }
.edu-v3-kpi-label { font-size: 12px; color: #5A5A6E; margin-top: 4px; }
.edu-v3-kpi-sub { font-size: 11px; color: #A0A0B8; margin-top: 2px; }

/* Content area */
.edu-v3-content { flex: 1; padding: 20px 24px; overflow-y: auto; }

/* Chart containers */
.edu-v3-chart-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
.edu-v3-chart-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 16px; }
.edu-v3-chart-card.full { grid-column: 1 / -1; }
.edu-v3-chart-title { font-size: 14px; font-weight: 600; color: #A0A0B8; margin-bottom: 12px; }
.edu-v3-chart-title small { font-weight: 400; font-size: 11px; color: #5A5A6E; }

.edu-v3-chart-canvas { width: 100%; height: 240px; }

/* Daily list */
.edu-v3-daily-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 8px; margin-bottom: 20px; }
.edu-v3-daily-dot { padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); cursor: pointer; transition: all 0.2s; text-align: center; position: relative; }
.edu-v3-daily-dot:hover { border-color: rgba(255,255,255,0.15); background: rgba(255,255,255,0.03); }
.edu-v3-daily-dot.selected { border-color: #818CF8; background: rgba(129,140,248,0.08); }
.edu-v3-daily-dot.no-data { opacity: 0.35; cursor: default; }
.edu-v3-daily-dot .dot-date { font-size: 11px; color: #8B8B9E; }
.edu-v3-daily-dot .dot-rate { font-size: 18px; font-weight: 700; margin: 2px 0; }
.edu-v3-daily-dot .dot-detail { font-size: 10px; color: #5A5A6E; }

/* Error list */
.edu-v3-error-item { display: flex; align-items: center; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); gap: 8px; }
.edu-v3-error-rank { width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; background: rgba(129,140,248,0.15); color: #818CF8; }
.edu-v3-error-name { flex: 1; font-size: 13px; }
.edu-v3-error-count { font-size: 12px; color: #F87171; font-weight: 600; }

/* Knowledge tree */
.edu-v3-kp-module { margin-bottom: 24px; }
.edu-v3-kp-module-title { font-size: 13px; font-weight: 600; color: #A0A0B8; margin-bottom: 8px; padding-left: 4px; }
.edu-v3-kp-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.edu-v3-kp-tag { padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 500; }
.edu-v3-kp-tag.mastered { background: rgba(52,211,153,0.1); color: #34D399; border: 1px solid rgba(52,211,153,0.2); }
.edu-v3-kp-tag.improving { background: rgba(245,158,11,0.1); color: #F59E0B; border: 1px solid rgba(245,158,11,0.2); }
.edu-v3-kp-tag.weak { background: rgba(248,113,113,0.1); color: #F87171; border: 1px solid rgba(248,113,113,0.2); }

/* Weekly */
.edu-v3-weekly-section { margin-bottom: 32px; padding: 20px; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; background: rgba(255,255,255,0.02); overflow-x: auto; }
.edu-v3-weekly-section h3 { font-size: 16px; color: #818CF8; margin: 0 0 16px 0; }
.edu-v3-weekly-section pre, .edu-v3-weekly-section code, .edu-v3-weekly-section div { white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; }
.edu-v3-weekly-section table { display: block; overflow-x: auto; white-space: nowrap; }

/* P0 cards */
.edu-v3-p0-card { padding: 10px 14px; border-radius: 8px; background: rgba(248,113,113,0.06); border: 1px solid rgba(248,113,113,0.15); margin-bottom: 8px; }
.edu-v3-p0-card .p0-name { font-size: 13px; font-weight: 600; color: #F87171; }
.edu-v3-p0-card .p0-detail { font-size: 11px; color: #A0A0B8; margin-top: 2px; }

/* Responsive */
@media (max-width: 768px) {
  .edu-v3-kpi { grid-template-columns: repeat(2, 1fr); }
  .edu-v3-chart-row { grid-template-columns: 1fr; }
  .edu-v3-daily-grid { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); }
}
@media (max-width: 480px) {
  .edu-v3-kpi { grid-template-columns: 1fr 1fr; }
  .edu-v3-daily-grid { grid-template-columns: repeat(4, 1fr); }
}
`;
  document.head.appendChild(styleEl);
}

// ─── Data Loading ───────────────────────────
async function loadData() {
  if (eduData) return eduData;
  try {
    const resp = await fetch("./edu-data.json");
    if (!resp.ok) throw new Error("edu-data.json not found");
    eduData = await resp.json();
    return eduData;
  } catch (e) {
    console.error("Failed to load edu data:", e);
    return null;
  }
}

// ─── Helpers ───────────────────────────────
function pctColor(rate) {
  if (rate >= 90) return COLORS.success;
  if (rate >= 75) return COLORS.combined;
  if (rate >= 60) return COLORS.warning;
  return COLORS.danger;
}

function getDailyRecords(data) {
  return (data?.dailyRecords || []).filter(r => r.dataComplete && r.totalRate != null);
}

function formatDate(d) {
  const parts = d.split("-");
  return parts[1] + "/" + parts[2];
}

// ─── Tab: Overview ──────────────────────────
function renderOverview(container, data) {
  const records = data.dailyRecords || [];
  const complete = records.filter(r => r.dataComplete && r.totalRate != null);
  
  // KPI calculations
  const totalDays = complete.length;
  const weightedRate = complete.length > 0
    ? Math.round(complete.reduce((s, r) => s + r.totalRate, 0) / complete.length * 10) / 10
    : 0;
  const totalQ = complete.reduce((s, r) => s + r.totalQ, 0);
  const totalCorrect = complete.reduce((s, r) => s + r.totalCorrect, 0);
  
  // P0 count — collect unique P0 names from all records
  const allP0 = new Set();
  complete.forEach(r => {
    (r.p0List || []).forEach(p => allP0.add(p.name));
  });
  const p0Count = allP0.size;
  
  // Latest date
  const lastRecord = complete.length > 0 ? complete[complete.length - 1] : null;
  const latestDate = lastRecord ? lastRecord.date : "-";
  
  container.innerHTML = `
    <div class="edu-v3-kpi">
      <div class="edu-v3-kpi-card">
        <div class="edu-v3-kpi-val">${totalDays}<span style="font-size:14px;color:#5A5A6E">天</span></div>
        <div class="edu-v3-kpi-label">累计学习天数</div>
        <div class="edu-v3-kpi-sub">${records.length}天记录 · 最近${latestDate}</div>
      </div>
      <div class="edu-v3-kpi-card">
        <div class="edu-v3-kpi-val" style="color:${pctColor(weightedRate)}">${weightedRate}%</div>
        <div class="edu-v3-kpi-label">加权平均正确率</div>
        <div class="edu-v3-kpi-sub">正确${totalCorrect} / 总${totalQ}题</div>
      </div>
      <div class="edu-v3-kpi-card">
        <div class="edu-v3-kpi-val">${totalQ}</div>
        <div class="edu-v3-kpi-label">累计做题量</div>
        <div class="edu-v3-kpi-sub">日均${complete.length > 0 ? Math.round(totalQ / complete.length) : 0}题</div>
      </div>
      <div class="edu-v3-kpi-card">
        <div class="edu-v3-kpi-val" style="color:#F87171">${p0Count}</div>
        <div class="edu-v3-kpi-label">P0 薄弱点</div>
        <div class="edu-v3-kpi-sub">需重点突破</div>
      </div>
    </div>
    <div class="edu-v3-chart-row">
      <div class="edu-v3-chart-card">
        <div class="edu-v3-chart-title">语文 vs 数学 双科对比 <small>（最近7天）</small></div>
        <canvas class="edu-v3-chart-canvas" id="chart-bar-dual"></canvas>
      </div>
      <div class="edu-v3-chart-card">
        <div class="edu-v3-chart-title">4周 KPI 趋势</div>
        <canvas class="edu-v3-chart-canvas" id="chart-line-kpi"></canvas>
      </div>
    </div>
  `;

  // Bar chart: last 7 days subject rates
  requestAnimationFrame(() => {
    const recent = complete.slice(-7);
    const labels = recent.map(r => formatDate(r.date));
    const chineseVals = recent.map(r => r.subjects?.语文?.pct || null);
    const mathVals = recent.map(r => r.subjects?.数学?.pct || null);
    
    const canvas = container.querySelector("#chart-bar-dual");
    if (canvas && bar) {
      bar(canvas, {
        labels,
        series: [
          { name: "语文", data: chineseVals, color: COLORS.chinese },
          { name: "数学", data: mathVals, color: COLORS.math },
        ],
        values: labels.length > 0 ? [...chineseVals, ...mathVals] : [],
      }, {
        area: "education",
        minValue: 50,
        maxValue: 100,
        dataLabels: true,
        hideLegend: false,
      });
    }

    // Line chart: weekly KPI trend
    const weeks = data.weeklySummaries || [];
    const weekLabels = weeks.filter(w => w.week >= 23 && w.week <= 26).map(w => "第" + w.week + "周");
    const weekRates = weeks.filter(w => w.week >= 23 && w.week <= 26).map(w => {
      const kpiVal = w.kpi?.["综合正确率"] || w.kpi?.["综合正确率"] || "";
      const m = (kpiVal + "").match(/([\d.]+)/);
      return m ? parseFloat(m[1]) : null;
    });
    
    const canvas2 = container.querySelector("#chart-line-kpi");
    if (canvas2 && line) {
      line(canvas2, {
        labels: weekLabels,
        series: [{ name: "综合正确率", data: weekRates, color: COLORS.accent }],
        values: weekRates.filter(v => v != null),
      }, {
        area: "education",
        minValue: 50,
        maxValue: 100,
        dataLabels: true,
      });
    }
  });
}

// ─── Tab: Daily Detail ──────────────────────
function renderDaily(container, data) {
  const records = data.dailyRecords || [];
  const complete = getDailyRecords(data);
  
  // Build trend data (all days, null for missing/empty)
  const allDates = records.map(r => formatDate(r.date));
  const dailyRates = records.map(r => r.dataComplete ? r.totalRate : null);
  const chineseRates = records.map(r => r.dataComplete ? (r.subjects?.语文?.pct || null) : null);
  const mathRates = records.map(r => r.dataComplete ? (r.subjects?.数学?.pct || null) : null);
  
  // Daily dots
  const dotsHtml = records.map((r, i) => {
    const cls = r.dataComplete ? "" : " no-data";
    const id = "day-" + i;
    const rateStr = r.dataComplete ? r.totalRate + "%" : "—";
    const rateColor = r.dataComplete ? pctColor(r.totalRate) : "#5A5A6E";
    return `<div class="edu-v3-daily-dot${cls}" data-idx="${i}" id="${id}">
      <div class="dot-date">${formatDate(r.date)}</div>
      <div class="dot-rate" style="color:${rateColor}">${rateStr}</div>
      <div class="dot-detail">D${r.day || "?"} · ${r.totalQ || 0}题</div>
    </div>`;
  }).join("");

  container.innerHTML = `
    <div class="edu-v3-chart-card full" style="margin-bottom:20px">
      <div class="edu-v3-chart-title">26天正确率趋势 <small>（点击下方日期查看详情）</small></div>
      <canvas class="edu-v3-chart-canvas" id="chart-daily-trend" style="height:280px"></canvas>
    </div>
    <div class="edu-v3-chart-title" style="margin-bottom:10px">每日概览 <small>（点击查看错题明细）</small></div>
    <div class="edu-v3-daily-grid">${dotsHtml}</div>
    <div id="edu-v3-daily-detail" style="margin-top:16px"></div>
  `;

  // Trend chart
  requestAnimationFrame(() => {
    const canvas = container.querySelector("#chart-daily-trend");
    if (canvas && line) {
      line(canvas, {
        labels: allDates,
        series: [
          { name: "语文", data: chineseRates, color: COLORS.chinese },
          { name: "数学", data: mathRates, color: COLORS.math },
          { name: "综合", data: dailyRates, color: COLORS.combined, lineWidth: 3 },
        ],
        values: dailyRates.filter(v => v != null),
      }, {
        area: "education",
        minValue: 0,
        maxValue: 100,
        dataLabels: false,
      });
    }
  });

  // Click handler
  container.querySelectorAll(".edu-v3-daily-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.dataset.idx);
      const r = records[idx];
      if (!r?.dataComplete) return;
      
      // Highlight
      container.querySelectorAll(".edu-v3-daily-dot").forEach(d => d.classList.remove("selected"));
      dot.classList.add("selected");
      
      showDailyDetail(container.querySelector("#edu-v3-daily-detail"), r);
    });
  });
}

function showDailyDetail(el, r) {
  if (!el) return;
  
  const subjHtml = Object.entries(r.subjects || {}).map(([k, v]) => {
    return `<span style="margin-right:16px;font-size:13px"><b>${k}</b> ${v.correct}/${v.total} (${v.pct}%)</span>`;
  }).join("") || "暂无科目数据";

  const errHtml = (r.errors || []).length > 0
    ? (r.errors || []).map(e => {
        const reasonTag = e.reason ? ` <span style="color:#5A5A6E;font-size:10px">[${e.reason}]</span>` : "";
        const subjTag = e.subject ? ` <span style="color:#818CF8;font-size:10px">${e.subject}</span>` : "";
        return `<div class="edu-v3-error-item">
          <span style="color:#F87171;margin-right:8px">✗</span>
          <span class="edu-v3-error-name">${e.name}${reasonTag}${subjTag}</span>
        </div>`;
      }).join("")
    : '<div style="padding:12px;color:#5A5A6E;font-size:12px">该日无错题记录</div>';

  const kpHtml = [
    ...(r.knowledgePoints?.mastered || []).map(n => `<span class="edu-v3-kp-tag mastered">${n}</span>`),
    ...(r.knowledgePoints?.newWeak || []).map(n => `<span class="edu-v3-kp-tag weak">${n}</span>`),
    ...(r.knowledgePoints?.persistentWeak || []).map(n => `<span class="edu-v3-kp-tag weak">${n}</span>`),
  ].join("") || '<span style="color:#5A5A6E;font-size:11px">无知识点记录</span>';

  const p0Html = (r.p0List || []).map(p => `<div class="edu-v3-p0-card"><div class="p0-name">${p.name}</div>${p.details ? `<div class="p0-detail">${p.details}</div>` : ""}</div>`).join("");

  el.innerHTML = `
    <div class="edu-v3-chart-card" style="margin-bottom:12px">
      <div class="edu-v3-chart-title">${r.date} Day${r.day || "?"} · 正确率 <span style="color:${pctColor(r.totalRate)}">${r.totalRate}%</span> (${r.totalCorrect}/${r.totalQ})</div>
      <div style="margin-bottom:10px">${subjHtml}</div>
    </div>
    <div class="edu-v3-chart-row">
      <div class="edu-v3-chart-card">
        <div class="edu-v3-chart-title">错题明细 (${r.errors?.length || 0}题)</div>
        ${errHtml}
      </div>
      <div class="edu-v3-chart-card">
        <div class="edu-v3-chart-title">知识点变化</div>
        <div class="edu-v3-kp-tags">${kpHtml}</div>
        ${p0Html ? `<div style="margin-top:12px"><div class="edu-v3-chart-title">P0 薄弱点</div>${p0Html}</div>` : ""}
      </div>
    </div>
  `;
}

// ─── Tab: Knowledge Graph ───────────────────
function renderKnowledge(container, data) {
  const graph = data.knowledgeGraph || {};
  
  // Calculate distribution
  let mastered = 0, improving = 0, weak = 0;
  for (const subj of ["语文", "数学"]) {
    for (const kp of (graph[subj] || [])) {
      if (kp.level === "已掌握") mastered++;
      else if (kp.level === "薄弱") weak++;
      else improving++;
    }
  }

  const chineseKps = graph["语文"] || [];
  const mathKps = graph["数学"] || [];

  // Group by module
  function groupByModule(kps) {
    const map = {};
    kps.forEach(kp => {
      const m = kp.module || "其他";
      if (!map[m]) map[m] = [];
      map[m].push(kp);
    });
    return map;
  }

  const chineseModules = groupByModule(chineseKps);
  const mathModules = groupByModule(mathKps);

  function renderModuleTree(title, modules) {
    const sections = Object.entries(modules).map(([mod, kps]) => {
      const tags = kps.map(kp => {
        const cls = kp.level === "已掌握" ? "mastered" : kp.level === "薄弱" ? "weak" : "improving";
        return `<span class="edu-v3-kp-tag ${cls}">${kp.name}</span>`;
      }).join("");
      return `<div class="edu-v3-kp-module">
        <div class="edu-v3-kp-module-title">${mod} (${kps.length})</div>
        <div class="edu-v3-kp-tags">${tags}</div>
      </div>`;
    }).join("");
    return `<div class="edu-v3-chart-card">
      <div class="edu-v3-chart-title">${title} · ${title === '语文' ? chineseKps.length : mathKps.length}个知识点</div>
      ${sections}
    </div>`;
  }

  // Collect P0 items across all records
  const allP0 = [];
  const seenP0 = new Set();
  (data.dailyRecords || []).forEach(r => {
    (r.p0List || []).forEach(p => {
      if (!seenP0.has(p.name)) {
        seenP0.add(p.name);
        allP0.push(p);
      }
    });
  });

  container.innerHTML = `
    <div class="edu-v3-chart-row">
      <div class="edu-v3-chart-card" style="grid-column:1">
        <div class="edu-v3-chart-title">掌握度分布</div>
        <canvas class="edu-v3-chart-canvas" id="chart-donut-mastery" style="height:200px"></canvas>
      </div>
      <div class="edu-v3-chart-card">
        <div class="edu-v3-chart-title">P0 薄弱点专项 <small>（${allP0.length}个）</small></div>
        ${allP0.slice(0, 6).map(p => `<div class="edu-v3-p0-card"><div class="p0-name">${p.name}</div>${p.details ? `<div class="p0-detail">${p.details}</div>` : ""}</div>`).join("") || '<div style="color:#5A5A6E;padding:12px;font-size:12px">暂无P0薄弱点数据</div>'}
      </div>
    </div>
    <div class="edu-v3-chart-row" style="grid-template-columns:1fr">
      ${renderModuleTree("语文", chineseModules)}
      ${renderModuleTree("数学", mathModules)}
    </div>
  `;

  requestAnimationFrame(() => {
    const canvas = container.querySelector("#chart-donut-mastery");
    if (canvas && donut) {
      donut(canvas, [
        { name: "已掌握", value: mastered, color: COLORS.mastered },
        { name: "待巩固", value: improving, color: COLORS.improving },
        { name: "薄弱", value: weak, color: COLORS.weak },
      ], { area: "education" });
    }
  });
}

// ─── Tab: Error Analysis ────────────────────
function renderErrors(container, data) {
  const stats = data.errorStats || [];
  const top10 = stats.slice(0, 10);

  // Error type distribution from all records
  const typeCount = {};
  (data.dailyRecords || []).forEach(r => {
    (r.errors || []).forEach(e => {
      const reason = e.reason || "未分类";
      typeCount[reason] = (typeCount[reason] || 0) + 1;
    });
  });

  const typeItems = Object.entries(typeCount)
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1]);

  const COLORS_LIST = ["#818CF8", "#22C55E", "#F59E0B", "#F87171", "#C084FC", "#FB923C", "#38BDF8"];

  container.innerHTML = `
    <div class="edu-v3-chart-row">
      <div class="edu-v3-chart-card">
        <div class="edu-v3-chart-title">Top 10 错题排名</div>
        ${top10.map((e, i) => {
          const rankColor = i < 3 ? "#F87171" : "#5A5A6E";
          return `<div class="edu-v3-error-item">
            <div class="edu-v3-error-rank" style="background:rgba(129,140,248,0.15);color:${rankColor}">${i + 1}</div>
            <span class="edu-v3-error-name">${e.name}</span>
            <span class="edu-v3-error-count">${e.count}次</span>
          </div>`;
        }).join("")}
        ${top10.length === 0 ? '<div style="color:#5A5A6E;padding:12px;font-size:12px">暂无错题统计</div>' : ""}
      </div>
      <div class="edu-v3-chart-card">
        <div class="edu-v3-chart-title">错误类型分布</div>
        ${typeItems.length > 0 ? '<canvas class="edu-v3-chart-canvas" id="chart-donut-errors" style="height:200px"></canvas>' : '<div style="color:#5A5A6E;padding:12px;font-size:12px">暂无错误类型数据</div>'}
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    const canvas = container.querySelector("#chart-donut-errors");
    if (canvas && donut && typeItems.length > 0) {
      donut(canvas, typeItems.map(([name, count], i) => ({
        name,
        value: count,
        color: COLORS_LIST[i % COLORS_LIST.length],
      })), { area: "education" });
    }
  });
}

// ─── Tab: Weekly Reports ────────────────────
function renderWeekly(container, data) {
  const weeks = (data.weeklySummaries || [])
    .filter(w => w.week >= 23 && w.week <= 26)
    .sort((a, b) => a.week - b.week);

  const navHtml = weeks.map((w, i) => {
    const kpiStr = Object.entries(w.kpi || {}).slice(0, 3).map(([k, v]) => `${k}: ${v}`).join(" · ");
    return `<div class="edu-v3-daily-dot" data-week-idx="${i}" id="week-nav-${i}">
      <div style="font-size:11px;color:#5A5A6E">第${w.week}周</div>
      <div style="font-size:13px;font-weight:600;color:#F0F0F5">${w.fileName}</div>
      <div style="font-size:10px;color:#5A5A6E;margin-top:4px">${kpiStr || "无KPI数据"}</div>
    </div>`;
  }).join("");

  container.innerHTML = `
    <div class="edu-v3-chart-title" style="margin-bottom:10px">选择周报</div>
    <div class="edu-v3-daily-grid">${navHtml}</div>
    <div id="edu-v3-weekly-content"></div>
  `;

  // Click handler
  container.querySelectorAll(".edu-v3-daily-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.dataset.weekIdx);
      container.querySelectorAll(".edu-v3-daily-dot").forEach(d => d.classList.remove("selected"));
      dot.classList.add("selected");
      showWeeklyDetail(container.querySelector("#edu-v3-weekly-content"), weeks[idx]);
    });
  });

  // Auto-select first week
  if (weeks.length > 0) {
    const firstDot = container.querySelector("#week-nav-0");
    if (firstDot) firstDot.click();
  }
}

function showWeeklyDetail(el, week) {
  if (!el || !week) return;

  // Render raw body as markdown-like HTML
  const bodyText = week.rawBody || "";
  // Simple markdown conversion
  const html = bodyText
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^### (.+)$/gm, "<h4 style='color:#A0A0B8;margin:16px 0 8px'>$1</h4>")
    .replace(/^## (.+)$/gm, "<h3 style='color:#818CF8;margin:20px 0 10px'>$1</h3>")
    .replace(/^# (.+)$/gm, "<h2 style='color:#F0F0F5;margin:24px 0 12px'>$1</h2>")
    .replace(/^- (.+)$/gm, "<li style='color:#A0A0B8;margin-left:16px'>$1</li>")
    .replace(/\n\n/g, "<br><br>");

  // Convert tables
  const tableRegex = /\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g;
  const withTables = html.replace(tableRegex, (match, header, rows) => {
    const headers = header.split("|").map(h => h.trim()).filter(Boolean);
    const rowLines = rows.trim().split("\n");
    const rowHtml = rowLines.map(row => {
      const cells = row.split("|").map(c => c.trim()).filter(Boolean);
      return "<tr>" + cells.map(c => `<td style="border:1px solid rgba(255,255,255,0.08);padding:6px 12px;font-size:12px;color:#A0A0B8">${c}</td>`).join("") + "</tr>";
    }).join("");
    const headerHtml = "<tr>" + headers.map(h => `<th style="border:1px solid rgba(255,255,255,0.08);padding:6px 12px;font-size:12px;color:#F0F0F5;background:rgba(255,255,255,0.03)">${h}</th>`).join("") + "</tr>";
    return `<table style="border-collapse:collapse;margin:12px 0;width:100%">${headerHtml}${rowHtml}</table>`;
  });

  el.innerHTML = `<div class="edu-v3-weekly-section">
    <h3>第${week.week}周 学情报告</h3>
    <div style="font-size:13px;line-height:1.8;color:#A0A0B8">${withTables}</div>
  </div>`;
}

// ─── Main Render ────────────────────────────
async function renderEduDetail({ element, area, files }) {
  injectStyles();
  
  const data = await loadData();
  if (!data) {
    element.innerHTML = '<div style="padding:80px;text-align:center;color:#A0A0B8">无法加载学情数据 (edu-data.json)</div>';
    return;
  }

  element.innerHTML = `
    <div class="edu-v3-wrap">
      <div class="edu-v3-topbar">
        <button class="edu-v3-back" id="edu-v3-back">← 返回首页</button>
        <span class="edu-v3-topbar-title">学情报告 v3</span>
      </div>
      <div class="edu-v3-nav" id="edu-v3-nav">
        ${TABS.map(t => `<button class="edu-v3-nav-btn${t.key === currentTab ? " active" : ""}" data-tab="${t.key}">${t.label}</button>`).join("")}
      </div>
      <div class="edu-v3-content" id="edu-v3-content"></div>
    </div>
  `;

  // Back button
  element.querySelector("#edu-v3-back").addEventListener("click", () => {
    navigate("#");
  });

  // Tab switching
  element.querySelectorAll(".edu-v3-nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentTab = btn.dataset.tab;
      element.querySelectorAll(".edu-v3-nav-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderTab(element.querySelector("#edu-v3-content"), data);
    });
  });

  // Initial render
  renderTab(element.querySelector("#edu-v3-content"), data);
}

function renderTab(container, data) {
  container.innerHTML = "";
  switch (currentTab) {
    case "overview": renderOverview(container, data); break;
    case "daily": renderDaily(container, data); break;
    case "knowledge": renderKnowledge(container, data); break;
    case "errors": renderErrors(container, data); break;
    case "weekly": renderWeekly(container, data); break;
    default: renderOverview(container, data);
  }
}

export { renderEduDetail };
