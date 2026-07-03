# RealWorld Academy

RealWorld Academy is a free, open-source website that teaches the practical life skills school typically skips — personal finance, psychology, philosophy, everyday science, geography, history, health, meditation, puzzles, books, and home skills. Each subject is its own page with expandable lesson cards, interactive tools (a compound interest calculator, a clickable world map, a guided breathing timer), and curated further-reading/watching resources. It's a pure static site — no frameworks, no build tools, no account required — so it's simple to run locally and deploy anywhere.

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
| **Home Skills** | Plumbing basics, electrical safety, essential tools, seasonal maintenance |

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — zero dependencies, zero build step
- **Chart.js** (via CDN) — compound interest chart on the Finance page
- **Google Fonts** (Inter) — loaded via CDN
- **SVG world map** — fully inline, no third-party map library
- **localStorage** — powers the dark/light theme toggle and per-page reading-progress tracking, no backend involved

No npm. No webpack. No frameworks. Open any `.html` file directly in a browser and it works.

---

## Project Structure

```
realworld-academy/
├── index.html              # Home page — category grid
├── css/
│   └── styles.css          # Full design system (CSS variables, light + dark themes, all components)
├── js/
│   ├── nav.js              # Shared nav renderer, dark-mode toggle, accordion / tab / region JS, reading-progress tracker
│   └── resources.js        # Per-page "Sources & Further Watching" data + renderer
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
    ├── books.html
    └── home-skills.html
```

---

## Design System

Accent colors are defined as CSS custom properties so each category has its own visual identity (see `:root` in `css/styles.css` for the full list, e.g. `--finance`, `--psych`, `--philosophy`, `--science`, `--geo`, `--history`, `--health`, `--meditate`, `--puzzles`, `--books`, `--home`). A dark theme is layered on top via a `[data-theme="dark"]` attribute selector, toggled by the moon/sun button in the nav.

### Component patterns

| Pattern | How it works |
|---|---|
| **Accordion topics** | `.topic-card` > `.topic-header` + `.topic-body` — click to expand, handled by `initAccordions()` |
| **Tabs** | `.tab-bar[data-group]` > `.tab-btn[data-tab]` handled by `initTabs()` |
| **Region cards** | `data-region` + `id="region-{key}"` for map ↔ sidebar linking, handled by `initRegions()` |
| **Active nav** | `renderNav(activeKey)` called on each page with its key |
| **Sources & videos** | `renderResources(activeKey)` renders each page's curated links from `js/resources.js` |

For the full set of conventions (nav internals, CSS variable reference, HTML page boilerplate, "how to add a new page" checklist), see [`CLAUDE.md`](./CLAUDE.md).

---

## Running Locally

No build step and no dependencies to install — just get the files and open them.

```bash
git clone https://github.com/saumitraphatak/realworld-academy.git
cd realworld-academy
open index.html        # macOS
# or
xdg-open index.html    # Linux
# or just drag index.html into a browser
```

Alternatively, serve it with any local web server (recommended if you want relative paths/fonts to behave exactly like production):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

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
