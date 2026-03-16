# RealWorld Academy

A free, open-source web encyclopedia for practical life skills — the knowledge school never taught you. Built as a pure static site (no frameworks, no build tools), deployable anywhere.

**Live site:** https://saumitraphatak.github.io/realworld-academy/

---

## What It Covers

| Category | Topics |
|---|---|
| **Finance** | Compound interest, budgeting, investing, taxes, credit scores |
| **Psychology** | Cognitive biases, memory techniques, emotional intelligence, mindset |
| **Philosophy** | Stoicism, logical fallacies, ethics, decision-making frameworks |
| **Science** | Newton's laws, why the sky is blue, vaccines, how GPS works |
| **Geography** | Interactive world map with clickable regions and geo-facts |
| **History** | Key historical patterns and timeline of world events |
| **Health** | Nutrition, sleep science, exercise principles, gut health |
| **Meditation** | Interactive breathing timer with 4 guided techniques |
| **Puzzles** | Age-appropriate puzzle guide + cognitive skills reference table |
| **Books** | Curated reading list of 40+ books across 7 life-skill categories |

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — zero dependencies, zero build step
- **Chart.js** (via CDN) — compound interest chart on the Finance page
- **Google Fonts** (Inter) — loaded via CDN
- **SVG world map** — fully inline, no third-party map library

No npm. No webpack. No frameworks. Open any `.html` file directly in a browser and it works.

---

## Project Structure

```
realworld-academy/
├── index.html              # Home page — category grid
├── css/
│   └── styles.css          # Full design system (CSS variables, all components)
├── js/
│   └── nav.js              # Shared nav renderer + accordion / tab / region JS
└── pages/
    ├── finance.html
    ├── psychology.html
    ├── philosophy.html
    ├── science.html
    ├── geography.html
    ├── history.html
    ├── health.html
    ├── meditation.html
    ├── puzzles.html
    └── books.html
```

---

## Design System

Accent colors are defined as CSS custom properties so each category has its own visual identity:

```css
--finance:    #10b981;
--psych:      #8b5cf6;
--philosophy: #f59e0b;
--science:    #3b82f6;
--geography:  #06b6d4;
--history:    #ef4444;
--health:     #ec4899;
```

### Component patterns

| Pattern | How it works |
|---|---|
| **Accordion topics** | `.topic-card` > `.topic-header` + `.topic-body` — click to expand |
| **Tabs** | `.tab-bar[data-group]` > `.tab-btn[data-tab]` handled by `initTabs()` |
| **Region cards** | `data-region` + `id="region-{key}"` for map ↔ sidebar linking |
| **Active nav** | `renderNav(activeKey)` called on each page with its key |

---

## Running Locally

```bash
git clone https://github.com/saumitraphatak/realworld-academy.git
cd realworld-academy
open index.html        # macOS
# or
xdg-open index.html    # Linux
# or just drag index.html into a browser
```

No server required. No install step.

---

## Deployment

The site is deployed via **GitHub Pages** from the `main` branch root.

To deploy your own fork:
1. Fork this repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://<your-username>.github.io/realworld-academy/`

---

## Contributing

Contributions welcome — new topics, corrections, design improvements.

1. Fork the repo
2. Create a branch: `git checkout -b feature/topic-name`
3. Edit the relevant `.html` file(s) and follow the existing component patterns
4. Open a Pull Request

Please keep the zero-dependency philosophy — no npm packages, no build tools.

---

## Author

**Saumitra Phatak**
- GitHub: [@saumitraphatak](https://github.com/saumitraphatak)

---

## License

MIT — free to use, modify, and distribute.
