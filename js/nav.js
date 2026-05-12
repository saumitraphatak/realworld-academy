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

const QUIZ_QUESTIONS = [
  { category: 'Finance',    icon: '💰', q: 'Compound interest means:', opts: ['Interest only on the original principal', 'Interest on both principal AND previously earned interest', 'A type of index mutual fund', 'A government tax on savings'], ans: 1, explain: 'Compound interest "snowballs" — you earn interest on your interest. Starting to invest a decade earlier can mean $300,000+ more at retirement with the same monthly amount.' },
  { category: 'Psychology', icon: '🧠', q: 'The "sunk cost fallacy" means:', opts: ['Calculating future opportunity costs', 'Continuing a bad decision because of past investment', 'Investing in physical assets', 'Forgetting past financial losses'], ans: 1, explain: 'You keep watching a bad movie because you paid for the ticket. Past costs are gone — decisions should be based on future value, not past spending.' },
  { category: 'Philosophy', icon: '🏛️', q: 'The core Stoic idea is:', opts: ['Suppress all emotions completely', 'Pleasure is the highest human good', 'Focus only on what you control; accept what you cannot', 'Logic alone determines right from wrong'], ans: 2, explain: 'Epictetus: "Some things are in our control and others not." Stoicism is about focusing energy where it matters — your own responses and choices.' },
  { category: 'Science',    icon: '🔬', q: 'Why is the sky blue?', opts: ['Water vapour reflects blue wavelengths', 'The sun emits mostly blue light', 'The atmosphere absorbs red wavelengths', 'Blue light scatters far more than red (Rayleigh scattering)'], ans: 3, explain: 'Rayleigh scattering: shorter blue wavelengths scatter in all directions much more than longer red ones. At sunset, light travels through more atmosphere, so only red/orange gets through.' },
  { category: 'Geography',  icon: '🌍', q: 'Which continent has the most countries?', opts: ['Asia', 'Europe', 'Africa', 'South America'], ans: 2, explain: 'Africa has 54 recognised countries — more than any other continent. Europe has 44, Asia 48. Africa\'s many borders are partly a legacy of colonial-era line-drawing.' },
  { category: 'History',    icon: '📜', q: 'Who invented the movable-type printing press (~1440)?', opts: ['Leonardo da Vinci', 'Isaac Newton', 'Johannes Gutenberg', 'Nikola Tesla'], ans: 2, explain: 'Gutenberg\'s press in Mainz, Germany shattered the Church\'s monopoly on written knowledge and directly triggered the Protestant Reformation within 80 years.' },
  { category: 'Health',     icon: '🥗', q: 'Most adults need how much sleep per night?', opts: ['4–5 hours', '5–6 hours', '6–7 hours', '7–9 hours'], ans: 3, explain: 'The CDC and WHO both recommend 7–9 hours. Less than 7 impairs decision-making as significantly as alcohol and raises risks for obesity, diabetes, and heart disease.' },
  { category: 'Meditation', icon: '🧘', q: 'Box breathing involves:', opts: ['4 sec inhale, 4 hold, 4 exhale, 4 hold', '6 sec inhale, 2 hold, 6 sec exhale', 'Breathing only through the left nostril', 'Rapid 20-breath inhalation cycles'], ans: 0, explain: 'Box breathing (4-4-4-4) activates the parasympathetic nervous system within minutes. The same technique is used by Navy SEALs and surgeons to stay calm under extreme pressure.' },
  { category: 'Puzzles',    icon: '🧩', q: 'Which activity most develops spatial reasoning?', opts: ['Crossword puzzles', 'Sudoku', 'Rubik\'s Cube', 'Word search'], ans: 2, explain: 'The Rubik\'s Cube requires mental rotation of 3D shapes — the exact definition of spatial reasoning. Studies show regular solving enlarges activity in the parietal lobe.' },
  { category: 'Books',      icon: '📚', q: '"The Psychology of Money" was written by:', opts: ['Malcolm Gladwell', 'Daniel Kahneman', 'Robert Kiyosaki', 'Morgan Housel'], ans: 3, explain: 'Morgan Housel\'s central argument: financial success depends mostly on behaviour, not intelligence. The maths of investing is simple — controlling your own psychology is the hard part.' },
  { category: 'Home Skills',icon: '🔧', q: 'What do you use to locate wall studs before drilling?', opts: ['A spirit level', 'A stud finder', 'A multimeter', 'A wire stripper'], ans: 1, explain: 'Stud finders detect the density change where wooden studs sit behind drywall. Always anchor heavy objects into studs — drywall alone cannot bear significant load.' },
  { category: 'Finance',    icon: '💰', q: 'Einstein reportedly called this "the 8th wonder of the world":', opts: ['The internet', 'Index fund investing', 'Compound interest', 'The global stock market'], ans: 2, explain: '"He who understands it, earns it; he who doesn\'t, pays it." Compound growth is slow at first, then dramatic over decades — the classic hockey-stick curve.' },
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

function initQuiz() {
  const trigger = document.createElement('button');
  trigger.className = 'quiz-trigger';
  trigger.innerHTML = '🧠 Quiz me';
  document.body.appendChild(trigger);

  const overlay = document.createElement('div');
  overlay.className = 'quiz-overlay';
  overlay.innerHTML = `
    <div class="quiz-panel">
      <div class="quiz-panel-top">
        <span class="quiz-cat-pill" id="qz-cat">—</span>
        <span class="quiz-score-display" id="qz-score">Score: 0 / 0</span>
        <button class="quiz-close" id="qz-close" aria-label="Close">✕</button>
      </div>
      <div class="quiz-body">
        <div class="quiz-progress"><div class="quiz-progress-fill" id="qz-bar" style="width:0%"></div></div>
        <div class="quiz-question" id="qz-q"></div>
        <div class="quiz-options" id="qz-opts"></div>
        <div class="quiz-feedback" id="qz-fb"></div>
      </div>
      <div class="quiz-footer">
        <span class="quiz-result" id="qz-result"></span>
        <button class="quiz-next-btn" id="qz-next">Next question →</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  let score = 0, total = 0, answered = false, lastIdx = -1;

  function pick() {
    let idx;
    do { idx = Math.floor(Math.random() * QUIZ_QUESTIONS.length); } while (idx === lastIdx);
    return (lastIdx = idx, QUIZ_QUESTIONS[idx]);
  }

  function show() {
    answered = false;
    const q = pick();
    document.getElementById('qz-cat').textContent = q.icon + ' ' + q.category;
    document.getElementById('qz-q').textContent = q.q;
    document.getElementById('qz-fb').className = 'quiz-feedback';
    document.getElementById('qz-next').className = 'quiz-next-btn';
    document.getElementById('qz-bar').style.width = Math.min(total / QUIZ_QUESTIONS.length * 100, 100) + '%';
    const opts = document.getElementById('qz-opts');
    opts.innerHTML = '';
    q.opts.forEach((text, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt';
      btn.textContent = text;
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        total++;
        const correct = i === q.ans;
        if (correct) score++;
        opts.querySelectorAll('.quiz-opt').forEach((b, j) => {
          b.disabled = true;
          if (j === q.ans) b.classList.add('correct');
          else if (j === i) b.classList.add('wrong');
        });
        const fb = document.getElementById('qz-fb');
        fb.innerHTML = `<strong>${correct ? '✓ Correct!' : '✗ Not quite.'}</strong> ${q.explain}`;
        fb.classList.add('show');
        document.getElementById('qz-score').textContent = `Score: ${score} / ${total}`;
        document.getElementById('qz-result').textContent = `${score} correct out of ${total}`;
        document.getElementById('qz-next').className = 'quiz-next-btn show';
      });
      opts.appendChild(btn);
    });
  }

  const open  = () => { overlay.classList.add('open'); show(); };
  const close = () => overlay.classList.remove('open');

  trigger.addEventListener('click', open);
  document.getElementById('qz-close').addEventListener('click', close);
  document.getElementById('qz-next').addEventListener('click', show);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

function initReadTracking() {
  const topicCards = document.querySelectorAll('.topic-card');
  if (!topicCards.length) return;
  const filename = window.location.pathname.split('/').pop();
  const pageKey = filename.replace('.html', '');
  if (!pageKey || pageKey === 'index') return;
  const storageKey = 'rwa-prog-' + pageKey;
  const saved = JSON.parse(localStorage.getItem(storageKey) || 'null') || { read: [], total: 0 };
  const readSet = new Set(saved.read || []);
  if (saved.total !== topicCards.length) {
    localStorage.setItem(storageKey, JSON.stringify({ read: Array.from(readSet), total: topicCards.length }));
  }
  topicCards.forEach((card, i) => {
    const header = card.querySelector('.topic-header');
    const chevron = header && header.querySelector('.topic-chevron');
    if (!header || !chevron) return;
    const done = readSet.has(i);
    const btn = document.createElement('button');
    btn.className = 'read-btn' + (done ? ' read-done' : '');
    btn.textContent = done ? '✓' : '○';
    btn.title = done ? 'Marked as read — click to undo' : 'Mark as read';
    btn.setAttribute('aria-label', done ? 'Mark as unread' : 'Mark as read');
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (readSet.has(i)) {
        readSet.delete(i);
        btn.className = 'read-btn';
        btn.textContent = '○';
        btn.title = 'Mark as read';
      } else {
        readSet.add(i);
        btn.className = 'read-btn read-done';
        btn.textContent = '✓';
        btn.title = 'Marked as read — click to undo';
      }
      localStorage.setItem(storageKey, JSON.stringify({ read: Array.from(readSet), total: topicCards.length }));
    });
    header.insertBefore(btn, chevron);
  });
}

function renderHomepageProgress() {
  if (!_navIsHome) return;
  document.querySelectorAll('.cat-card').forEach(card => {
    const href = card.getAttribute('href') || '';
    const m = href.match(/pages\/(.+)\.html/);
    if (!m) return;
    const data = JSON.parse(localStorage.getItem('rwa-prog-' + m[1]) || 'null');
    if (!data || !data.total || !(data.read || []).length) return;
    const count = data.read.length;
    const pct = Math.round(count / data.total * 100);
    const el = document.createElement('div');
    el.className = 'cat-progress';
    el.innerHTML = `
      <div class="cat-prog-bar">
        <div class="cat-prog-fill${count === data.total ? ' complete' : ''}" style="width:${pct}%"></div>
      </div>
      <span class="cat-prog-label">${count} / ${data.total} read</span>`;
    card.appendChild(el);
  });
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
  initQuiz();
  initReadTracking();
  renderHomepageProgress();
  initAccordions();
  initTabs();
  initRegions();
});
