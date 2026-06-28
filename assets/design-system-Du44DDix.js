const n={investing:{name:"投资分析",color:"#22C55E",colorLight:"#4ADE80",colorDark:"#16A34A",gradient:"linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",gradientLight:"linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(22,163,74,0.06) 100%)",icon:"📈",dir:"investing"},education:{name:"学情报告",color:"#818CF8",colorLight:"#A5B4FC",colorDark:"#6366F1",gradient:"linear-gradient(135deg, #818CF8 0%, #6366F1 100%)",gradientLight:"linear-gradient(135deg, rgba(129,140,248,0.12) 0%, rgba(99,102,241,0.06) 100%)",icon:"📚",dir:"education"},legal:{name:"法律工作",color:"#F87171",colorLight:"#FCA5A5",colorDark:"#EF4444",gradient:"linear-gradient(135deg, #F87171 0%, #EF4444 100%)",gradientLight:"linear-gradient(135deg, rgba(248,113,113,0.12) 0%, rgba(239,68,68,0.06) 100%)",icon:"⚖️",dir:"legal"},content:{name:"内容运营",color:"#F59E0B",colorLight:"#FBBF24",colorDark:"#D97706",gradient:"linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",gradientLight:"linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(217,119,6,0.06) 100%)",icon:"✍️",dir:"content"}},b=Object.keys(n);function c(r){const o=document.documentElement;return getComputedStyle(o).getPropertyValue(`--${r}`).trim()}const t={education:{accent:"#818CF8",accentRGB:"129, 140, 248",accentLight:"#A5B4FC",accentDark:"#6366F1",name:"学情报告"},investing:{accent:"#22C55E",accentRGB:"34, 197, 94",accentLight:"#4ADE80",accentDark:"#16A34A",name:"投资分析"},content:{accent:"#F59E0B",accentRGB:"245, 158, 11",accentLight:"#FBBF24",accentDark:"#D97706",name:"内容运营"},legal:{accent:"#F87171",accentRGB:"248, 113, 113",accentLight:"#FCA5A5",accentDark:"#EF4444",name:"法律工作"}};function s(r){return t[r]||t.education}function d(){return`
/* ================================================================
   CSS Custom Properties — Design Tokens
   ================================================================ */
:root {
  /* ── Background Hierarchy ── */
  --color-bg-base:       #0A0A0F;
  --color-bg-raised:     #13131A;
  --color-bg-overlay:    #1A1A24;

  /* ── Text Hierarchy ── */
  --color-text-primary:   #F0F0F5;
  --color-text-secondary: #8B8B9E;
  --color-text-tertiary:  #5A5A6E;
  --color-text-disabled:  #3A3A4A;

  /* ── Default Accent (Education) ── */
  --color-accent:        #818CF8;
  --color-accent-rgb:    129, 140, 248;

  /* ── Semantic Colors ── */
  --color-success:  #22C55E;
  --color-danger:   #F87171;
  --color-warning:  #F59E0B;
  --color-info:     #60A5FA;

  /* ── Borders ── */
  --color-border-default: rgba(255, 255, 255, 0.06);
  --color-border-strong:  rgba(255, 255, 255, 0.10);
  --color-border-active:  var(--color-accent);

  /* ── Typography ── */
  --font-sans:  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono:  'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace;

  /* ── Radii ── */
  --radius-sm:   6px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-full: 9999px;

  /* ── Spacing (4px grid) ── */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-7:  28px;
  --space-8:  32px;

  /* ── Shadows ── */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.6);

  /* ── Layout ── */
  --sidebar-width: 240px;

  /* ── Transitions ── */
  --transition-fast:   150ms ease-out;
  --transition-normal: 200ms ease-out;
}

/* ─── Area Theme Overrides ───────────────────────────────────── */
${Object.entries(t).map(([r,o])=>`
.theme-${r} {
  --color-accent:     ${o.accent};
  --color-accent-rgb: ${o.accentRGB};
}
`).join("")}

/* ================================================================
   Global Reset & Base
   ================================================================ */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  color-scheme: dark;
}

body {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.6;
  font-weight: 400;
  color: var(--color-text-primary);
  background: var(--color-bg-base);
  min-height: 100vh;
  overflow-x: hidden;
}

body.dark {
  color-scheme: dark;
}

::selection {
  background: var(--color-accent);
  color: #0A0A0F;
}

::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--color-text-tertiary); border-radius: var(--radius-full); }
::-webkit-scrollbar-thumb:hover { background: var(--color-text-secondary); }

a { color: var(--color-accent); text-decoration: none; transition: color var(--transition-fast); }
a:hover { opacity: 0.8; }

/* ================================================================
   Sidebar
   ================================================================ */
.sidebar {
  position: fixed; top: 0; left: 0;
  width: var(--sidebar-width); height: 100vh;
  background: #0D0D14;
  border-right: 1px solid var(--color-border-default);
  display: flex; flex-direction: column; z-index: 100; overflow-y: auto;
}

.sidebar-logo {
  padding: var(--space-6); font-size: 20px; font-weight: 700;
  letter-spacing: -0.02em; color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-border-default);
}

.sidebar-nav {
  flex: 1; padding: var(--space-3);
  display: flex; flex-direction: column; gap: var(--space-1);
}

.sidebar-nav a,
.sidebar-nav-item {
  display: flex; align-items: center; gap: var(--space-3);
  padding: 10px 16px; border-radius: var(--radius-md);
  font-size: 14px; font-weight: 500; color: var(--color-text-secondary);
  text-decoration: none; transition: all var(--transition-fast); position: relative;
}

.sidebar-nav a:hover,
.sidebar-nav-item:hover {
  color: var(--color-text-primary); background: rgba(255,255,255,0.03);
}

.sidebar-nav a.active,
.sidebar-nav-item.active {
  color: var(--color-accent); background: rgba(var(--color-accent-rgb), 0.10);
}

.sidebar-nav a.active::before,
.sidebar-nav-item.active::before {
  content: ''; position: absolute; left: 0; top: 8px; bottom: 8px;
  width: 2px; background: var(--color-accent); border-radius: 0 2px 2px 0;
}

.sidebar-footer {
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--color-border-default);
  font-size: 11px; color: var(--color-text-tertiary);
}

/* ================================================================
   Main Content
   ================================================================ */
.main-content {
  margin-left: var(--sidebar-width); padding: var(--space-6); min-height: 100vh;
}

.page-header { margin-bottom: var(--space-8); }
.page-header h1 { font-size: 24px; font-weight: 700; letter-spacing: -0.02em; color: var(--color-text-primary); margin-bottom: var(--space-1); }
.page-header p { font-size: 14px; color: var(--color-text-secondary); }

/* ================================================================
   Cards — Glassmorphism
   ================================================================ */
.card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: 20px 24px;
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  transition: border-color var(--transition-normal), background var(--transition-normal);
}
.card:hover { background: rgba(255,255,255,0.05); border-color: rgba(var(--color-accent-rgb),0.30); }
.card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4); }
.card-section-title {
  font-size: 12px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-text-tertiary); margin-bottom: var(--space-4);
}
.card-footer { margin-top: var(--space-4); padding-top: var(--space-4); border-top: 1px solid var(--color-border-default); font-size: 12px; color: var(--color-text-tertiary); }

/* ================================================================
   KPI Number Cards — Stripe Style
   ================================================================ */
.kpi-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg); padding: 20px 24px;
  transition: border-color var(--transition-normal), background var(--transition-normal);
}
.kpi-card:hover { background: rgba(255,255,255,0.05); border-color: rgba(var(--color-accent-rgb),0.30); }
.kpi-label { font-size: 12px; font-weight: 500; color: var(--color-text-secondary); margin-bottom: var(--space-2); }
.kpi-value { font-size: 32px; font-weight: 700; font-variant-numeric: tabular-nums; font-family: var(--font-sans); letter-spacing: -0.02em; color: var(--color-text-primary); line-height: 1.1; }
.kpi-delta { display: inline-flex; align-items: center; gap: 4px; font-size: 14px; font-weight: 500; margin-top: var(--space-2); }
.kpi-delta.positive { color: var(--color-success); }
.kpi-delta.negative { color: var(--color-danger); }
.kpi-sparkline { margin-top: var(--space-3); height: 40px; opacity: 0.6; }

/* ================================================================
   Grid & Layout
   ================================================================ */
.kpi-strip { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-8); }
.section { margin-bottom: var(--space-8); }
.section-title { font-size: 16px; font-weight: 600; letter-spacing: -0.02em; color: var(--color-text-primary); margin-bottom: var(--space-4); }

/* ================================================================
   Typography Utilities
   ================================================================ */
.text-mono { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
.text-xs { font-size: 11px; } .text-sm { font-size: 12px; }
.text-base { font-size: 14px; } .text-lg { font-size: 16px; }
.text-xl { font-size: 18px; } .text-2xl { font-size: 20px; }
.text-3xl { font-size: 24px; }
.font-normal { font-weight: 400; } .font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; } .font-bold { font-weight: 700; }
.text-primary { color: var(--color-text-primary); }
.text-secondary { color: var(--color-text-secondary); }
.text-tertiary { color: var(--color-text-tertiary); }
.text-accent { color: var(--color-accent); }
.text-success { color: var(--color-success); }
.text-danger { color: var(--color-danger); }
.text-warning { color: var(--color-warning); }

/* ================================================================
   Badges
   ================================================================ */
.badge { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: var(--radius-full); font-size: 11px; font-weight: 500; }
.badge-success { background: rgba(34,197,94,0.12); color: var(--color-success); }
.badge-danger { background: rgba(248,113,113,0.12); color: var(--color-danger); }
.badge-warning { background: rgba(245,158,11,0.12); color: var(--color-warning); }
.badge-info { background: rgba(96,165,250,0.12); color: var(--color-info); }

/* ================================================================
   Buttons
   ================================================================ */
.btn { display: inline-flex; align-items: center; gap: var(--space-2); padding: 8px 16px; border-radius: var(--radius-md); font-size: 14px; font-weight: 500; border: 1px solid transparent; cursor: pointer; transition: all var(--transition-fast); font-family: var(--font-sans); }
.btn-primary { background: var(--color-accent); color: #0A0A0F; border-color: var(--color-accent); }
.btn-primary:hover { opacity: 0.9; filter: brightness(1.1); }
.btn-secondary { background: rgba(255,255,255,0.05); color: var(--color-text-primary); border-color: var(--color-border-strong); }
.btn-secondary:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); }
.btn-ghost { background: transparent; color: var(--color-text-secondary); border-color: transparent; }
.btn-ghost:hover { color: var(--color-text-primary); background: rgba(255,255,255,0.03); }
.btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* ================================================================
   Tables
   ================================================================ */
table { width: 100%; border-collapse: collapse; }
table th { font-size: 12px; font-weight: 600; color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.04em; text-align: left; padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border-default); }
table td { font-size: 14px; color: var(--color-text-primary); padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border-default); font-variant-numeric: tabular-nums; }
table tbody tr:hover td { background: rgba(255,255,255,0.02); }

/* ================================================================
   Skeleton / Loading
   ================================================================ */
@keyframes skeleton-pulse { 0% { opacity: 0.3; } 50% { opacity: 0.6; } 100% { opacity: 0.3; } }
.skeleton { background: var(--color-bg-overlay); border-radius: var(--radius-md); animation: skeleton-pulse 2s ease-in-out infinite; }
.skeleton-text { height: 14px; margin-bottom: var(--space-2); }
.skeleton-text:last-child { width: 60%; }
.skeleton-heading { height: 20px; width: 40%; margin-bottom: var(--space-3); }
.skeleton-kpi { height: 40px; width: 70%; margin-bottom: var(--space-2); }

/* ================================================================
   Empty States
   ================================================================ */
.empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: var(--space-8); color: var(--color-text-tertiary); text-align: center; }
.empty-state-icon { font-size: 32px; margin-bottom: var(--space-3); opacity: 0.4; }
.empty-state-text { font-size: 14px; color: var(--color-text-secondary); }

/* ================================================================
   Animations
   ================================================================ */
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
.fade-in { animation: fade-in 150ms ease-out; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}

/* ================================================================
   Responsive
   ================================================================ */
@media (max-width: 768px) {
  .sidebar { transform: translateX(-100%); transition: transform var(--transition-normal); }
  .sidebar.open { transform: translateX(0); }
  .main-content { margin-left: 0; padding: var(--space-4); }
  .kpi-strip { grid-template-columns: repeat(2, 1fr); }
}

@media print {
  .sidebar { display: none; }
  .main-content { margin-left: 0; }
}

:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
`}let e=null,a=null;function i(){e&&e.remove(),e=document.createElement("style"),e.id="design-system-core",e.textContent=d(),document.head.appendChild(e)}function l(r){a&&document.body.classList.remove(`theme-${a}`),a=r,document.body.classList.add(`theme-${r}`)}i();const p={applyDesignSystem:i,setTheme:l,getPalette:s,token:c,AREAS:n},m=Object.freeze(Object.defineProperty({__proto__:null,AREAS:n,applyDesignSystem:i,default:p,getPalette:s,setTheme:l,token:c},Symbol.toStringTag,{value:"Module"}));export{n as A,b as a,m as d};
