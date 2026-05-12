// Shared navigation component

const DAILY_WISDOM = [
  { key: 'finance',    icon: '💰', color: 'var(--finance)',    bg: 'var(--finance-bg)', category: 'Finance',    title: 'Compound Interest',       file: 'finance.html',    fact: 'Starting to invest $200/month at 22 instead of 32 can mean $300,000 more at retirement — same money, just a decade earlier.' },
  { key: 'psychology', icon: '🧠', color: 'var(--psych)',      bg: 'var(--psych-bg)',   category: 'Psychology', title: 'Confirmation Bias',        file: 'psychology.html', fact: 'Your brain actively seeks out information that confirms what you already believe and quietly discards everything that doesn\'t. Naming it is the first defence.' },
  { key: 'philosophy', icon: '🏛️', color: 'var(--philosophy)', bg: 'var(--phil-bg)',    category: 'Philosophy', title: 'Dichotomy of Control',     file: 'philosophy.html', fact: 'The Stoics divided all things into two: what you control (your thoughts, effort, responses) and what you don\'t. Worrying only about the first is the entire game.' },
  { key: 'science',    icon: '🔬', color: 'var(--science)',    bg: 'var(--sci-bg)',     category: 'Science',    title: 'Newton\'s Third Law',      file: 'science.html',    fact: 'Every action has an equal and opposite reaction. You use it when walking: your foot pushes Earth backward, and Earth pushes you forward.' },
  { key: 'geography',  icon: '🌍', color: 'var(--geo)',        bg: 'var(--geo-bg)',     category: 'Geography',  title: 'Why Rivers Made Cities',   file: 'geography.html',  fact: 'Almost every ancient civilisation — Egypt, Mesopotamia, Indus Valley, China — grew along rivers. Geography doesn\'t just show where things are; it explains why.' },
  { key: 'history',    icon: '📜', color: 'var(--history)',    bg: 'var(--hist-bg)',    category: 'History',    title: 'The Printing Press Effect',file: 'history.html',    fact: 'Gutenberg\'s press (1440) didn\'t just spread books — it shattered the Church\'s monopoly on knowledge and triggered the Protestant Reformation within 80 years.' },
  { key: 'health',     icon: '🥗', color: 'var(--health)',     bg: 'var(--health-bg)',  category: 'Health',     title: 'Sleep & Decision-Making',  file: 'health.html',     fact: 'Just one night under 7 hours reduces prefrontal cortex activity enough to impair decision-making as significantly as being legally drunk.' },
  { key: 'meditation', icon: '🧘', color: 'var(--meditate)',   bg: 'var(--med-bg)',     category: 'Meditation', title: 'Box Breathing',            file: 'meditation.html', fact: 'Inhale 4 counts, hold 4, exhale 4, hold 4. Used by Navy SEALs under fire. It activates your parasympathetic nervous system in under 2 minutes.' },
  { key: 'puzzles',    icon: '🧩', color: 'var(--puzzles)',    bg: 'var(--puz-bg)',     category: 'Puzzles',    title: 'Why Chess Matters',        file: 'puzzles.html',    fact: 'Chess players develop larger prefrontal cortices over time. It\'s not about memorising openings — it\'s about training the brain to evaluate long consequence chains.' },
  { key: 'books',      icon: '📚', color: 'var(--books)',      bg: 'var(--books-bg)',   category: 'Books',      title: 'One Book Changes Everything', file: 'books.html',   fact: '"The Psychology of Money" argues that financial success depends less on maths and more on behaviour. The maths is easy; the behaviour is hard.' },
  { key: 'home-skills',icon: '🔧', color: 'var(--home)',       bg: 'var(--home-bg)',    category: 'Home Skills',title: 'The Three Essential Tools', file: 'home-skills.html',fact: 'A drill, a set of screwdrivers, and a stud finder can handle 80% of home repairs. Most people overspend on tools they never use instead of mastering three simple ones.' },
];

let _navIsHome = false;

const NAV_LINKS = [
  { href: '../index.html', label: '🏠 Home', key: 'home' },
  { href: 'finance.html', label: '💰 Finance', key: 'finance' },
  { href: 'psychology.html', label: '🧠 Psychology', key: 'psychology' },
  { href: 'philosophy.html', label: '🏛️ Philosophy', key: 'philosophy' },
  { href: 'science.html', label: '🔬 Science', key: 'science' },
  { href: 'geography.html', label: '🌍 Geography', key: 'geography' },
  { href: 'history.html', label: '📜 History', key: 'history' },
  { href: 'health.html', label: '🥗 Health', key: 'health' },
  { href: 'meditation.html', label: '🧘 Meditation', key: 'meditation' },
  { href: 'puzzles.html', label: '🧩 Puzzles', key: 'puzzles' },
  { href: 'books.html', label: '📚 Books', key: 'books' },
  { href: 'home-skills.html', label: '🔧 Home Skills', key: 'home-skills' },
];

function renderNav(activeKey) {
  _navIsHome = activeKey === 'home';

  // Apply saved theme immediately to prevent flash of unstyled content
  const savedTheme = localStorage.getItem('rwa-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Inject reading progress bar before nav
  if (!document.getElementById('reading-progress')) {
    const bar = document.createElement('div');
    bar.id = 'reading-progress';
    document.body.insertBefore(bar, document.body.firstChild);
  }

  const nav = document.getElementById('main-nav');
  if (!nav) return;
  const isHome = activeKey === 'home';
  const prefix = isHome ? 'pages/' : '';
  const homeLink = isHome ? 'index.html' : '../index.html';
  const isDark = savedTheme === 'dark';

  nav.innerHTML = `
    <div class="nav-inner">
      <a href="${homeLink}" class="nav-brand">
        <span class="logo">🎓</span>
        <span>RealWorld Academy</span>
      </a>
      <ul class="nav-links">
        ${NAV_LINKS.map(l => {
          const href = isHome ? prefix + l.href.replace('../', '') : l.href;
          const active = l.key === activeKey ? 'active' : '';
          return `<li><a href="${href}" class="${active}">${l.label}</a></li>`;
        }).join('')}
      </ul>
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">
        ${isDark ? '☀️' : '🌙'}
      </button>
    </div>
  `;
}

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rwa-theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

function initReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
  }, { passive: true });
}

function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      if (e.target.classList.contains('category-grid')) {
        e.target.classList.add('animated');
      } else {
        e.target.classList.add('visible');
      }
      obs.unobserve(e.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal, .category-grid').forEach(el => obs.observe(el));
}

function initDailyWisdom() {
  const el = document.getElementById('daily-wisdom');
  if (!el) return;
  const dayIndex = Math.floor(Date.now() / 86400000) % DAILY_WISDOM.length;
  const w = DAILY_WISDOM[dayIndex];
  const prefix = _navIsHome ? 'pages/' : '';
  el.innerHTML = `
    <div class="daily-widget">
      <div class="daily-deco">${w.icon}</div>
      <div class="daily-icon" style="background:${w.bg}">${w.icon}</div>
      <div class="daily-meta">
        <div class="daily-eyebrow">Today's lesson &nbsp;·&nbsp; <span class="dw-cat">${w.category}</span></div>
        <h3>${w.title}</h3>
        <p>${w.fact}</p>
      </div>
      <a class="daily-action" href="${prefix}${w.file}"
         style="color:${w.color};background:${w.bg}">
        Explore →
      </a>
    </div>
  `;
  const widget = el.querySelector('.daily-widget');
  widget.style.setProperty('--dw-color', w.color);
}

// Accordion for topic cards
function initAccordions() {
  document.querySelectorAll('.topic-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.topic-card');
      const isOpen = card.classList.contains('open');
      // Close all
      document.querySelectorAll('.topic-card.open').forEach(c => c.classList.remove('open'));
      if (!isOpen) card.classList.add('open');
    });
  });
}

// Tabs
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      const target = btn.dataset.tab;
      document.querySelectorAll(`.tab-btn[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`.tab-panel[data-group="${group}"]`).forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector(`.tab-panel[data-group="${group}"][data-tab="${target}"]`)?.classList.add('active');
    });
  });
}

// Region selector for geography
function initRegions() {
  document.querySelectorAll('.region-card').forEach(card => {
    card.addEventListener('click', () => {
      const region = card.dataset.region;
      document.querySelectorAll('.region-card').forEach(c => c.classList.remove('active'));
      document.querySelectorAll('.region-detail').forEach(d => d.classList.remove('visible'));
      card.classList.add('active');
      document.getElementById(`region-${region}`)?.classList.add('visible');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initReadingProgress();
  initScrollReveal();
  initDailyWisdom();
  initAccordions();
  initTabs();
  initRegions();
});
