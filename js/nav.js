// Shared navigation component
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
];

function renderNav(activeKey) {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  const isHome = activeKey === 'home';
  const prefix = isHome ? 'pages/' : '';
  const homeLink = isHome ? 'index.html' : '../index.html';

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
    </div>
  `;
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
  initAccordions();
  initTabs();
  initRegions();
});
