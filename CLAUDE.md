# RealWorld Academy — AI Coding Guide

## Overview

RealWorld Academy is a free, static educational website covering 11 life-skill categories that school typically ignores: personal finance, psychology, philosophy, science, geography, history, health, meditation, puzzles, books, and home skills. The tagline is "Everything School Forgot to Teach You."

- **Live URL:** https://saumitraphatak.github.io/realworld-academy/
- **GitHub:** https://github.com/saumitraphatak/realworld-academy
- **Author:** Saumitra Phatak

---

## Tech Stack & Hard Constraints

- **Pure static HTML/CSS/Vanilla JS.** No Node, no npm, no bun, no build tools, no bundlers.
- **No package.json.** Do not create one. Do not suggest `npm install`.
- **CDN libraries only:**
  - Chart.js `4.4.0` via jsDelivr (`https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js`) — used only on `finance.html`
  - Google Fonts (Inter) via `https://fonts.googleapis.com`
- **SVG world map** on `geography.html` is inline HTML — no third-party map library.
- **Git** is available (`/usr/bin/git`), branch is `main`.
- **Python 3** is available at `/Users/curious/anaconda3/bin/python3` (useful for local server: `python3 -m http.server`).
- To preview locally, open any HTML file directly in a browser or run `python3 -m http.server` from the project root.

---

## File & Directory Structure

```
realworld-academy/
├── index.html              # Home page — category grid (lives at root, NOT in pages/)
├── css/
│   └── styles.css          # Full design system: CSS variables, reset, all component styles
├── js/
│   └── nav.js              # Shared nav renderer + accordion / tab / region interactivity
└── pages/
    ├── finance.html        # Compound interest calculator + budgeting / investing / tax / credit
    ├── psychology.html     # Cognitive biases, memory techniques, emotional intelligence, mindset
    ├── philosophy.html     # Stoicism, logical fallacies, ethics, decision-making
    ├── science.html        # Newton's laws, why sky is blue, vaccines, GPS, everyday science
    ├── geography.html      # Interactive inline SVG world map with clickable regions
    ├── history.html        # Timeline of key world historical events and patterns
    ├── health.html         # Tabbed: Nutrition / Sleep / Exercise / Gut Health
    ├── meditation.html     # Interactive breathing timer with 4 techniques
    ├── puzzles.html        # Age-tabbed puzzle guide + cognitive skills table
    ├── books.html          # 40+ books across 7 life-skill tab categories
    └── home-skills.html    # Practical home and DIY skills (plumbing, electrical, tools, maintenance)
```

---

## Navigation System

Navigation is rendered by `js/nav.js`. Every page includes this script and calls `renderNav()`.

### NAV_LINKS array (defined in `js/nav.js`):

```javascript
const NAV_LINKS = [
  { href: '../index.html',      label: '🏠 Home',        key: 'home' },
  { href: 'finance.html',       label: '💰 Finance',     key: 'finance' },
  { href: 'psychology.html',    label: '🧠 Psychology',  key: 'psychology' },
  { href: 'philosophy.html',    label: '🏛️ Philosophy',  key: 'philosophy' },
  { href: 'science.html',       label: '🔬 Science',     key: 'science' },
  { href: 'geography.html',     label: '🌍 Geography',   key: 'geography' },
  { href: 'history.html',       label: '📜 History',     key: 'history' },
  { href: 'health.html',        label: '🥗 Health',      key: 'health' },
  { href: 'meditation.html',    label: '🧘 Meditation',  key: 'meditation' },
  { href: 'puzzles.html',       label: '🧩 Puzzles',     key: 'puzzles' },
  { href: 'books.html',         label: '📚 Books',       key: 'books' },
  { href: 'home-skills.html',   label: '🔧 Home Skills', key: 'home-skills' },
];
```

### How `renderNav(activeKey)` works:

- Reads `activeKey` to mark the active nav link
- If `activeKey === 'home'`, links are prefixed with `pages/` (because `index.html` is at the root)
- If called from any page inside `pages/`, links are relative (e.g., `finance.html` not `pages/finance.html`)
- Injects HTML into `<nav class="nav" id="main-nav"></nav>`

### How to call it:

```html
<!-- On index.html (root) -->
<script src="js/nav.js"></script>
<script>renderNav('home');</script>

<!-- On pages/*.html -->
<script src="../js/nav.js"></script>
<script>renderNav('finance');   /* replace with the page's key */</script>
```

### Adding a new page:

1. Add an entry to `NAV_LINKS` in `js/nav.js` with a unique `key`.
2. Create `pages/your-page.html` following the existing page template.
3. Call `renderNav('your-key')` at the bottom of the new page.
4. Add a category card to `index.html` linking to `pages/your-page.html`.
5. Define a CSS accent color variable in `css/styles.css` under `:root`.

---

## CSS Design System (`css/styles.css`)

### Root CSS Variables

**Background / Surface:**
```css
--bg:           #f0f4f8;    /* page background (light grey) */
--surface:      #ffffff;    /* card / panel background */
--surface-2:    #f8fafc;    /* secondary surface */
--border:       #e2e8f0;
--text:         #0f172a;
--text-muted:   #64748b;
--text-light:   #94a3b8;
```

**Brand:**
```css
--primary:       #4f46e5;   /* indigo */
--primary-light: #eef2ff;
--primary-dark:  #3730a3;
```

**Category Accent Colors (used for icons, borders, highlights):**
```css
--finance:    #059669;   --finance-bg: #ecfdf5;   /* emerald */
--psych:      #7c3aed;   --psych-bg:   #f5f3ff;   /* violet */
--philosophy: #0891b2;   --phil-bg:    #ecfeff;   /* cyan */
--science:    #2563eb;   --sci-bg:     #eff6ff;   /* blue */
--geo:        #16a34a;   --geo-bg:     #f0fdf4;   /* green */
--history:    #b45309;   --hist-bg:    #fffbeb;   /* amber */
--health:     #dc2626;   --health-bg:  #fef2f2;   /* red */
--meditate:   #6d28d9;   --med-bg:     #faf5ff;   /* purple */
--puzzles:    #d97706;   --puz-bg:     #fffbeb;   /* amber */
--books:      #92400e;   --books-bg:   #fef3c7;   /* brown */
--home:       #0d9488;   --home-bg:    #f0fdfa;   /* teal */
```

**Spacing scale:** `--space-1` (0.25rem) through `--space-16` (4rem).

**Typography:** `--font-sans: 'Inter', system-ui, -apple-system, sans-serif`

**Border radii:** `--radius-sm` (0.375rem), `--radius` (0.75rem), `--radius-lg` (1rem), `--radius-xl` (1.5rem)

---

## Component Patterns

### 1. Accordion (Topic Cards)

Used on most content pages. One card open at a time — clicking an open card closes it.

```html
<div class="topic-card">
  <div class="topic-header">
    <div class="topic-header-left">
      <div class="topic-num" style="background:var(--finance-bg);color:var(--finance)">1</div>
      <div>
        <h3 class="topic-title">Topic Title</h3>
        <p class="topic-meta">Short subtitle</p>
      </div>
    </div>
    <span class="topic-arrow">›</span>
  </div>
  <div class="topic-body">
    <!-- expanded content goes here -->
  </div>
</div>
```

JS: `initAccordions()` in `nav.js` handles clicks. Adding `class="open"` to `.topic-card` shows the body.

### 2. Tabs

Used on `health.html`, `books.html`, `puzzles.html`, and others. Group buttons and panels by a shared `data-group` value.

```html
<div class="tab-bar">
  <button class="tab-btn active" data-group="health" data-tab="nutrition">Nutrition</button>
  <button class="tab-btn"        data-group="health" data-tab="sleep">Sleep</button>
</div>

<div class="tab-panel active" data-group="health" data-tab="nutrition">
  <!-- content -->
</div>
<div class="tab-panel" data-group="health" data-tab="sleep">
  <!-- content -->
</div>
```

JS: `initTabs()` in `nav.js` handles clicks. Multiple independent tab groups on one page are supported via different `data-group` values.

### 3. Region Cards (Geography Page)

```html
<!-- Clickable region selector -->
<div class="region-card" data-region="europe">Europe</div>

<!-- Detail panel that appears when region is selected -->
<div class="region-detail" id="region-europe">
  <!-- content -->
</div>
```

JS: `initRegions()` in `nav.js` adds `.active` to the card and `.visible` to the matching detail panel.

### 4. Chart.js (Finance Page Only)

Chart.js is loaded from CDN only on `finance.html`. Do not add it to other pages.

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
```

The compound interest chart is a `<canvas>` element rendered with `new Chart(ctx, config)`.

### 5. Page Hero Section

Every content page starts with a hero section using the category accent color:

```html
<section class="page-hero section">
  <div class="container">
    <div class="breadcrumb">
      <a href="../index.html">Home</a> <span>›</span> <span>Page Name</span>
    </div>
    <div class="page-hero-icon" style="background:var(--finance-bg)">💰</div>
    <h1>Page Title</h1>
    <p class="lead">Short description of the page.</p>
  </div>
</section>
```

---

## Page-by-Page Summary

| Page | Key | Main Content |
|------|-----|-------------|
| `index.html` | `home` | Hero + category grid (11 cards) + featured lessons + footer |
| `finance.html` | `finance` | Compound interest (with Chart.js calculator), budgeting (50/30/20 rule), investing basics (index funds, ETFs), taxes, credit scores |
| `psychology.html` | `psychology` | Cognitive biases (confirmation bias, availability heuristic, sunk cost, etc.), how memory works, emotional intelligence, growth vs fixed mindset |
| `philosophy.html` | `philosophy` | Stoicism (Marcus Aurelius, memento mori, dichotomy of control), logical fallacies (ad hominem, straw man, false dichotomy), ethics frameworks, decision-making |
| `science.html` | `science` | Newton's 3 laws in everyday life, why the sky is blue (Rayleigh scattering), how vaccines work, how GPS works, entropy |
| `geography.html` | `geography` | Inline SVG world map, clickable region cards (Europe, Asia, Americas, Africa, Oceania), climate zones, time zones, geopolitics |
| `history.html` | `history` | Key world events timeline: printing press, French Revolution, Industrial Revolution, WWI/WWII, Cold War, digital age; historical patterns |
| `health.html` | `health` | Tabbed: Nutrition (macros, micronutrients, reading labels), Sleep (sleep cycles, REM, sleep hygiene), Exercise (cardio, strength, HIIT), Gut Health (microbiome, probiotics) |
| `meditation.html` | `meditation` | Interactive breathing timer for 4 techniques: box breathing (4-4-4-4), 4-7-8 breathing, diaphragmatic, alternate nostril; neuroscience of mindfulness |
| `puzzles.html` | `puzzles` | Age-tabbed puzzle guide (ages 3–5, 6–9, 10–13, 14+), Rubik's Cube cognitive benefits, chess, Sudoku, cognitive skills table |
| `books.html` | `books` | 40+ books in 7 tab categories: Finance, Psychology, Philosophy, Science, History, Health, General |
| `home-skills.html` | `home-skills` | Plumbing basics (unclogging, fixing leaks), electrical safety, essential tools list, seasonal maintenance checklist |

---

## HTML Page Boilerplate

Every `pages/*.html` file follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title — RealWorld Academy</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <meta name="description" content="...">
  <meta name="author" content="Saumitra Phatak">
  <link rel="canonical" href="https://saumitraphatak.github.io/realworld-academy/pages/page.html">
  <link rel="stylesheet" href="../css/styles.css">
  <!-- CDN scripts (Chart.js only on finance.html) -->
</head>
<body>

<nav class="nav" id="main-nav"></nav>

<section class="page-hero section">...</section>

<!-- Page content sections -->

<footer class="footer">...</footer>

<script src="../js/nav.js"></script>
<script>renderNav('page-key');</script>
</body>
</html>
```

---

## Development Workflow

1. **No build step.** Edit HTML/CSS/JS files directly.
2. **Local preview:** Open `index.html` in a browser, or run `python3 -m http.server 8000` from the project root and visit `http://localhost:8000`.
3. **Adding a page:** Follow the steps in the "Adding a new page" section above.
4. **Deploy:** `git push origin main` — GitHub Pages serves the `main` branch automatically.

---

## Known Gotchas & Watch-outs

1. **Path prefix for home page:** `index.html` is at the root, so it uses `src="js/nav.js"` and `href="css/styles.css"`. Sub-pages use `../` prefixes. Do not mix these up.
2. **`renderNav('home')` special case:** When called with `'home'`, the nav function prepends `pages/` to all page hrefs. Any other key does not prepend.
3. **Chart.js only on finance.html:** Do not include the Chart.js CDN script on other pages — it adds unnecessary load.
4. **Accordion single-open behaviour:** `initAccordions()` closes all other `.topic-card.open` elements before opening the clicked one. This is intentional.
5. **Tab group isolation:** If you have two tab groups on one page, they must have different `data-group` values or they will interfere with each other.
6. **Region detail IDs must match:** The `id` attribute on `.region-detail` must be `region-{data-region value}` exactly, or `initRegions()` will silently fail.
7. **CSS variable names are inconsistent** between categories (e.g., `--psych` not `--psychology`, `--meditate` not `--meditation`, `--geo` not `--geography`, `--phil-bg` not `--philosophy-bg`). Always check `styles.css :root` before referencing a variable.
8. **No JavaScript modules:** All JS is plain scripts with global scope. Do not use `import`/`export` or `type="module"`.
9. **Fonts load from Google Fonts CDN** — the site requires internet access to render Inter correctly. No local font fallback is bundled.
10. **git is at `/usr/bin/git`** — the environment has no npm/node/bun/pnpm/yarn.
