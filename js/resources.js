// ===== RealWorld Academy — Sources & Resources =====
// Each page's credibility sources + YouTube video recommendations
// Rendered into #page-resources div on each page

const PAGE_RESOURCES = {

  finance: {
    intro: 'All financial concepts are grounded in official government guidance, academic research, and established investment principles.',
    videos: [
      {
        emoji: '📈',
        title: 'Introduction to Compound Interest',
        channel: 'Khan Academy',
        url: 'https://www.youtube.com/results?search_query=compound+interest+khan+academy'
      },
      {
        emoji: '💰',
        title: 'Index Funds — The Simple Path to Wealth',
        channel: 'The Plain Bagel',
        url: 'https://www.youtube.com/@ThePlainBagel'
      },
      {
        emoji: '🏦',
        title: 'How the Stock Market Works',
        channel: 'Crash Course Economics',
        url: 'https://www.youtube.com/results?search_query=how+stock+market+works+crash+course+economics'
      },
      {
        emoji: '📊',
        title: 'How to Budget (50/30/20 Rule)',
        channel: 'NerdWallet',
        url: 'https://www.youtube.com/results?search_query=50+30+20+budget+rule+explained+nerdwallet'
      },
      {
        emoji: '🧾',
        title: 'How US Federal Income Tax Works',
        channel: 'Crash Course Economics',
        url: 'https://www.youtube.com/results?search_query=how+us+income+tax+works+explained+simply'
      },
      {
        emoji: '🔑',
        title: 'Personal Finance for Beginners',
        channel: 'Graham Stephan',
        url: 'https://www.youtube.com/@GrahamStephan'
      },
    ],
    sources: [
      { name: 'Investopedia', url: 'https://www.investopedia.com', desc: 'Comprehensive financial terms, guides & tutorials' },
      { name: 'Khan Academy — Finance', url: 'https://www.khanacademy.org/economics-finance-domain', desc: 'Free courses on banking, investing & personal finance' },
      { name: 'Investor.gov (SEC)', url: 'https://www.investor.gov', desc: 'Official U.S. Securities & Exchange Commission resources' },
      { name: 'CFPB', url: 'https://www.consumerfinance.gov', desc: 'Consumer Financial Protection Bureau — budgeting tools & guides' },
      { name: 'IRS — Tax Info', url: 'https://www.irs.gov/individuals', desc: 'Official U.S. tax information for individuals' },
      { name: 'Federal Reserve Education', url: 'https://www.federalreserveeducation.org', desc: 'Economic & financial literacy resources from the Fed' },
      { name: 'MyMoney.gov', url: 'https://www.mymoney.gov', desc: 'U.S. government financial literacy portal' },
    ]
  },

  psychology: {
    intro: 'Psychology content draws from peer-reviewed research, APA publications, and Nobel Prize–winning findings in behavioural economics.',
    videos: [
      {
        emoji: '🧠',
        title: 'Cognitive Biases — Crash Course Psychology',
        channel: 'CrashCourse',
        url: 'https://www.youtube.com/results?search_query=cognitive+biases+crash+course+psychology'
      },
      {
        emoji: '⚡',
        title: 'Thinking Fast and Slow — Daniel Kahneman',
        channel: 'TED',
        url: 'https://www.youtube.com/results?search_query=daniel+kahneman+ted+talk+thinking+fast+slow'
      },
      {
        emoji: '🌱',
        title: 'The Power of Believing You Can Improve',
        channel: 'TED — Carol Dweck',
        url: 'https://www.youtube.com/results?search_query=carol+dweck+growth+mindset+ted+talk'
      },
      {
        emoji: '💡',
        title: 'How Memory Works',
        channel: 'SciShow Psych',
        url: 'https://www.youtube.com/results?search_query=how+memory+works+brain+science+scishow'
      },
      {
        emoji: '❤️',
        title: 'What Is Emotional Intelligence?',
        channel: 'Kurzgesagt',
        url: 'https://www.youtube.com/results?search_query=emotional+intelligence+explained+science'
      },
      {
        emoji: '🎯',
        title: 'The Science of Productivity',
        channel: 'AsapSCIENCE',
        url: 'https://www.youtube.com/results?search_query=science+of+productivity+asapscience'
      },
    ],
    sources: [
      { name: 'APA', url: 'https://www.apa.org', desc: 'American Psychological Association — research & guidelines' },
      { name: 'NIH — Mental Health', url: 'https://www.nimh.nih.gov', desc: 'National Institute of Mental Health — evidence-based information' },
      { name: 'Psychology Today', url: 'https://www.psychologytoday.com', desc: 'Expert-written articles on psychology & behaviour' },
      { name: 'Carol Dweck — Stanford', url: 'https://profiles.stanford.edu/carol-dweck', desc: 'Original growth mindset research at Stanford University' },
      { name: 'Cognitive Biases — Wikipedia', url: 'https://en.wikipedia.org/wiki/List_of_cognitive_biases', desc: 'Comprehensive list of documented cognitive biases' },
      { name: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov', desc: 'National Library of Medicine — peer-reviewed psychology research' },
    ]
  },

  philosophy: {
    intro: 'Philosophy content references primary sources (Marcus Aurelius, Epictetus, Kant, Sartre) and the leading academic philosophy encyclopaedias.',
    videos: [
      {
        emoji: '🏛️',
        title: 'Stoicism as a Philosophy for Life',
        channel: 'Einzelgänger',
        url: 'https://www.youtube.com/results?search_query=stoicism+philosophy+for+life+explained'
      },
      {
        emoji: '⚔️',
        title: 'Meditations by Marcus Aurelius — Summary',
        channel: 'Ryan Holiday',
        url: 'https://www.youtube.com/results?search_query=marcus+aurelius+meditations+summary+stoicism'
      },
      {
        emoji: '🤔',
        title: 'Logical Fallacies Explained',
        channel: 'Wireless Philosophy',
        url: 'https://www.youtube.com/@WirelessPhilosophy'
      },
      {
        emoji: '🕯️',
        title: 'Existentialism — Sartre, Camus, Frankl',
        channel: 'CrashCourse Philosophy',
        url: 'https://www.youtube.com/results?search_query=existentialism+explained+crash+course+philosophy'
      },
      {
        emoji: '❓',
        title: 'How to Think Critically',
        channel: 'TED-Ed',
        url: 'https://www.youtube.com/results?search_query=how+to+think+critically+ted+ed'
      },
      {
        emoji: '🧭',
        title: 'Ethics — Utilitarianism vs Deontology',
        channel: 'CrashCourse Philosophy',
        url: 'https://www.youtube.com/results?search_query=utilitarianism+vs+deontology+crash+course'
      },
    ],
    sources: [
      { name: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu', desc: 'Peer-reviewed philosophy reference maintained by Stanford' },
      { name: 'Internet Encyclopedia of Philosophy', url: 'https://iep.utm.edu', desc: 'Scholarly, peer-reviewed philosophy reference' },
      { name: 'Meditations — Free Text', url: 'https://www.gutenberg.org/ebooks/2680', desc: 'Marcus Aurelius\'s Meditations — free full text via Project Gutenberg' },
      { name: 'Wikipedia — Stoicism', url: 'https://en.wikipedia.org/wiki/Stoicism', desc: 'Overview of Stoic philosophy with scholarly citations' },
      { name: 'Logical Fallacies — Your Fallacy Is', url: 'https://yourlogicalfallacyis.com', desc: 'Visual guide to 24 common logical fallacies' },
      { name: 'Philosophy Bites Podcast', url: 'https://philosophybites.com', desc: 'Short philosophy interviews with leading academics' },
    ]
  },

  science: {
    intro: 'Science content is sourced from NASA, NIH, and peer-reviewed publications. All explanations align with current scientific consensus.',
    videos: [
      {
        emoji: '🌤️',
        title: 'Why Is the Sky Blue?',
        channel: 'Veritasium',
        url: 'https://www.youtube.com/results?search_query=why+is+the+sky+blue+veritasium'
      },
      {
        emoji: '💉',
        title: 'How mRNA Vaccines Work',
        channel: 'Kurzgesagt',
        url: 'https://www.youtube.com/results?search_query=how+mrna+vaccines+work+kurzgesagt'
      },
      {
        emoji: '🚀',
        title: 'Newton\'s Laws of Motion',
        channel: 'CrashCourse Physics',
        url: 'https://www.youtube.com/results?search_query=newton+laws+of+motion+crash+course+physics'
      },
      {
        emoji: '📡',
        title: 'How GPS Works — Including Einstein\'s Relativity',
        channel: 'Veritasium',
        url: 'https://www.youtube.com/results?search_query=how+gps+works+relativity+veritasium'
      },
      {
        emoji: '♾️',
        title: 'Entropy & the Arrow of Time',
        channel: 'PBS Space Time',
        url: 'https://www.youtube.com/results?search_query=entropy+explained+arrow+of+time+physics'
      },
      {
        emoji: '⚡',
        title: 'Electricity Explained Simply',
        channel: 'SciShow',
        url: 'https://www.youtube.com/results?search_query=how+electricity+works+voltage+current+resistance'
      },
    ],
    sources: [
      { name: 'NASA', url: 'https://www.nasa.gov', desc: 'Authoritative source for physics, space, and earth science' },
      { name: 'Khan Academy — Science', url: 'https://www.khanacademy.org/science', desc: 'Free science courses from physics to biology' },
      { name: 'Scientific American', url: 'https://www.scientificamerican.com', desc: 'Peer-reviewed science journalism since 1845' },
      { name: 'NIH — Science of Health', url: 'https://www.nih.gov', desc: 'National Institutes of Health — biological & medical science' },
      { name: 'Wikipedia — Physics', url: 'https://en.wikipedia.org/wiki/Physics', desc: 'Comprehensive physics articles with academic citations' },
      { name: 'HowStuffWorks — Science', url: 'https://science.howstuffworks.com', desc: 'Clear explanations of how everyday science works' },
    ]
  },

  geography: {
    intro: 'Geography data sourced from the World Bank, UN, CIA World Factbook, and peer-reviewed geographic research.',
    videos: [
      {
        emoji: '🗺️',
        title: 'Every Country\'s Size and Population',
        channel: 'RealLifeLore',
        url: 'https://www.youtube.com/@RealLifeLore'
      },
      {
        emoji: '🌍',
        title: 'Why Most World Maps Are Wrong',
        channel: 'Vox',
        url: 'https://www.youtube.com/results?search_query=why+most+world+maps+are+wrong+mercator+vox'
      },
      {
        emoji: '✈️',
        title: 'How Geography Shapes Nations',
        channel: 'Wendover Productions',
        url: 'https://www.youtube.com/@Wendover'
      },
      {
        emoji: '🌐',
        title: 'Geography Now — Every Country',
        channel: 'Geography Now',
        url: 'https://www.youtube.com/@geographynow'
      },
      {
        emoji: '⏰',
        title: 'Time Zones Explained',
        channel: 'CGP Grey',
        url: 'https://www.youtube.com/results?search_query=time+zones+explained+cgp+grey'
      },
      {
        emoji: '☁️',
        title: 'Climate Zones of the World',
        channel: 'TED-Ed',
        url: 'https://www.youtube.com/results?search_query=climate+zones+world+explained+ted+ed'
      },
    ],
    sources: [
      { name: 'CIA World Factbook', url: 'https://www.cia.gov/the-world-factbook', desc: 'Country profiles, statistics & geography — updated annually' },
      { name: 'World Bank Open Data', url: 'https://data.worldbank.org', desc: 'Global development statistics — GDP, population, poverty' },
      { name: 'National Geographic', url: 'https://www.nationalgeographic.com', desc: 'Geographic, cultural, and environmental journalism' },
      { name: 'UN Data', url: 'https://data.un.org', desc: 'United Nations global statistics and data' },
      { name: 'Our World in Data', url: 'https://ourworldindata.org', desc: 'Research-grounded charts on global development trends' },
      { name: 'Wikipedia — Countries', url: 'https://en.wikipedia.org/wiki/List_of_countries_by_population', desc: 'Comprehensive country data with citation sources' },
    ]
  },

  history: {
    intro: 'Historical content draws from Encyclopaedia Britannica, the Library of Congress, and acclaimed peer-reviewed historical scholarship.',
    videos: [
      {
        emoji: '📜',
        title: 'Crash Course World History',
        channel: 'CrashCourse',
        url: 'https://www.youtube.com/results?search_query=crash+course+world+history+playlist'
      },
      {
        emoji: '💥',
        title: 'World War I & II — Simplified',
        channel: 'Oversimplified',
        url: 'https://www.youtube.com/@OverSimplified'
      },
      {
        emoji: '📰',
        title: 'How the Printing Press Changed the World',
        channel: 'TED-Ed',
        url: 'https://www.youtube.com/results?search_query=gutenberg+printing+press+changed+world+ted+ed'
      },
      {
        emoji: '❄️',
        title: 'The Cold War — Complete History',
        channel: 'Kings and Generals',
        url: 'https://www.youtube.com/@KingsandGenerals'
      },
      {
        emoji: '🏭',
        title: 'The Industrial Revolution Explained',
        channel: 'CrashCourse History',
        url: 'https://www.youtube.com/results?search_query=industrial+revolution+explained+crash+course'
      },
      {
        emoji: '🌍',
        title: 'Sapiens — Brief History of Humankind',
        channel: 'Yuval Noah Harari',
        url: 'https://www.youtube.com/results?search_query=sapiens+yuval+noah+harari+summary+talk'
      },
    ],
    sources: [
      { name: 'Encyclopaedia Britannica', url: 'https://www.britannica.com', desc: 'Peer-reviewed encyclopaedia covering 240 years of scholarship' },
      { name: 'Library of Congress', url: 'https://www.loc.gov', desc: 'Primary source documents, photos, and historical records' },
      { name: 'Wikipedia — Modern History', url: 'https://en.wikipedia.org/wiki/Modern_history', desc: 'Extensively cited historical overviews' },
      { name: 'Khan Academy — World History', url: 'https://www.khanacademy.org/humanities/world-history', desc: 'Free world history courses with primary sources' },
      { name: 'History.com', url: 'https://www.history.com', desc: 'Accessible history journalism with expert contributors' },
      { name: 'National Archives', url: 'https://www.archives.gov', desc: 'Official U.S. historical documents and government records' },
    ]
  },

  health: {
    intro: 'Health content is based on peer-reviewed medical research, NIH publications, Mayo Clinic guidelines, and Harvard Medical School.',
    videos: [
      {
        emoji: '😴',
        title: 'Sleep Is Your Superpower — Matt Walker',
        channel: 'TED',
        url: 'https://www.youtube.com/results?search_query=matt+walker+sleep+superpower+ted+talk'
      },
      {
        emoji: '🏃',
        title: 'The Science of Exercise & the Brain',
        channel: 'Andrew Huberman Lab',
        url: 'https://www.youtube.com/@hubermanlab'
      },
      {
        emoji: '🥗',
        title: 'The Science of Nutrition',
        channel: 'CrashCourse Biology',
        url: 'https://www.youtube.com/results?search_query=nutrition+science+crash+course+biology'
      },
      {
        emoji: '🦠',
        title: 'The Gut Microbiome Explained',
        channel: 'Kurzgesagt',
        url: 'https://www.youtube.com/results?search_query=gut+microbiome+explained+kurzgesagt'
      },
      {
        emoji: '🍬',
        title: 'What Does Sugar Actually Do to You?',
        channel: 'SciShow',
        url: 'https://www.youtube.com/results?search_query=what+does+sugar+do+to+your+body+science'
      },
      {
        emoji: '💪',
        title: 'How Exercise Changes Your Body',
        channel: 'AsapSCIENCE',
        url: 'https://www.youtube.com/results?search_query=how+exercise+changes+your+body+asapscience'
      },
    ],
    sources: [
      { name: 'NIH', url: 'https://www.nih.gov', desc: 'National Institutes of Health — primary source for medical research' },
      { name: 'Mayo Clinic', url: 'https://www.mayoclinic.org', desc: 'Evidence-based medical advice from leading U.S. medical center' },
      { name: 'Harvard Health', url: 'https://www.health.harvard.edu', desc: 'Health information from Harvard Medical School experts' },
      { name: 'WHO', url: 'https://www.who.int', desc: 'World Health Organization — global health standards & data' },
      { name: 'CDC', url: 'https://www.cdc.gov', desc: 'Centers for Disease Control — nutrition, sleep & exercise guidelines' },
      { name: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov', desc: 'National Library of Medicine — 35M+ peer-reviewed research papers' },
    ]
  },

  meditation: {
    intro: 'Meditation content is backed by NIH-funded research, Harvard Medical School studies, and clinical trials from MBSR programmes.',
    videos: [
      {
        emoji: '🧘',
        title: 'The Neuroscience of Meditation',
        channel: 'Andrew Huberman Lab',
        url: 'https://www.youtube.com/results?search_query=neuroscience+meditation+huberman+lab'
      },
      {
        emoji: '🌬️',
        title: 'Box Breathing — The Navy SEAL Technique',
        channel: 'Andrew Huberman',
        url: 'https://www.youtube.com/results?search_query=box+breathing+technique+navy+seal+science'
      },
      {
        emoji: '🌊',
        title: 'Guided Mindfulness Meditation',
        channel: 'Headspace',
        url: 'https://www.youtube.com/@Headspace'
      },
      {
        emoji: '🧠',
        title: 'How Meditation Changes Your Brain',
        channel: 'Big Think',
        url: 'https://www.youtube.com/results?search_query=how+meditation+changes+your+brain+science+big+think'
      },
      {
        emoji: '🕊️',
        title: 'Introduction to Mindfulness — Jon Kabat-Zinn',
        channel: 'Google Talks',
        url: 'https://www.youtube.com/results?search_query=jon+kabat-zinn+mindfulness+introduction+google+talk'
      },
      {
        emoji: '😤',
        title: 'The Physiological Sigh — Stanford Research',
        channel: 'Andrew Huberman',
        url: 'https://www.youtube.com/results?search_query=physiological+sigh+andrew+huberman+stanford'
      },
    ],
    sources: [
      { name: 'NIH — Meditation in Depth', url: 'https://www.nccih.nih.gov/health/meditation-in-depth', desc: 'National Center for Complementary & Integrative Health — research summary' },
      { name: 'APA — Mindfulness', url: 'https://www.apa.org/topics/mindfulness', desc: 'American Psychological Association on mindfulness research' },
      { name: 'Harvard Health — Meditation', url: 'https://www.health.harvard.edu/topics/meditation', desc: 'Harvard Medical School on meditation benefits and techniques' },
      { name: 'Mindful.org', url: 'https://www.mindful.org', desc: 'Evidence-based mindfulness practice guides and research' },
      { name: 'MBSR — UMass Medical', url: 'https://www.umassmed.edu/cfm/mindfulness-based-programs/mbsr-courses', desc: 'Original Mindfulness-Based Stress Reduction programme' },
      { name: 'Greater Good Science Center', url: 'https://ggsc.berkeley.edu', desc: 'UC Berkeley — science behind wellbeing, meditation, compassion' },
    ]
  },

  puzzles: {
    intro: 'Cognitive development claims are sourced from peer-reviewed journals in educational psychology and neuroscience.',
    videos: [
      {
        emoji: '🎲',
        title: 'Rubik\'s Cube for Beginners — Full Tutorial',
        channel: 'J Perm',
        url: 'https://www.youtube.com/@JPerm'
      },
      {
        emoji: '♟️',
        title: 'Chess Fundamentals — Every Beginner Needs This',
        channel: 'GothamChess',
        url: 'https://www.youtube.com/@GothamChess'
      },
      {
        emoji: '🧠',
        title: 'How Puzzles Benefit Brain Development',
        channel: 'SciShow',
        url: 'https://www.youtube.com/results?search_query=how+puzzles+benefit+brain+development+cognitive+science'
      },
      {
        emoji: '🎮',
        title: 'Are Video Games Good for Your Brain?',
        channel: 'Kurzgesagt',
        url: 'https://www.youtube.com/results?search_query=are+video+games+good+for+your+brain+kurzgesagt'
      },
      {
        emoji: '🔢',
        title: 'The Science of Sudoku',
        channel: 'Numberphile',
        url: 'https://www.youtube.com/results?search_query=sudoku+science+mathematics+numberphile'
      },
      {
        emoji: '🌊',
        title: 'Neuroplasticity — How the Brain Changes',
        channel: 'TED-Ed',
        url: 'https://www.youtube.com/results?search_query=neuroplasticity+how+brain+changes+ted+ed'
      },
    ],
    sources: [
      { name: 'APA — Play & Learning', url: 'https://www.apa.org/topics/video-games', desc: 'American Psychological Association on cognitive effects of games' },
      { name: 'NIH — Cognitive Training', url: 'https://www.nih.gov', desc: 'National Institutes of Health on brain training evidence' },
      { name: 'Scientific American — Games', url: 'https://www.scientificamerican.com', desc: 'Peer-reviewed articles on puzzles and brain health' },
      { name: 'Journal of Ed. Psychology', url: 'https://www.apa.org/pubs/journals/edu', desc: 'APA journal on chess & spatial reasoning in education research' },
      { name: 'World Cube Association', url: 'https://www.worldcubeassociation.org', desc: 'Official Rubik\'s Cube competition organisation' },
      { name: 'Chess.com — Learn', url: 'https://www.chess.com/learn-how-to-play-chess', desc: 'Free interactive chess lessons for all levels' },
    ]
  },

  books: {
    intro: 'All recommended books are widely acclaimed, peer-reviewed or fact-checked, and available through public libraries worldwide.',
    videos: [
      {
        emoji: '📖',
        title: 'How to Read More Books',
        channel: 'Thomas Frank',
        url: 'https://www.youtube.com/results?search_query=how+to+read+more+books+efficiently+thomas+frank'
      },
      {
        emoji: '🧠',
        title: 'How to Remember What You Read',
        channel: 'Ali Abdaal',
        url: 'https://www.youtube.com/results?search_query=how+to+remember+what+you+read+ali+abdaal'
      },
      {
        emoji: '⚡',
        title: 'Thinking Fast and Slow — Book Summary',
        channel: 'OnePercentBetter',
        url: 'https://www.youtube.com/results?search_query=thinking+fast+and+slow+book+summary+kahneman'
      },
      {
        emoji: '🔄',
        title: 'Atomic Habits — Animated Book Summary',
        channel: 'FightMediocrity',
        url: 'https://www.youtube.com/results?search_query=atomic+habits+animated+book+summary'
      },
      {
        emoji: '💰',
        title: 'Psychology of Money — Key Ideas',
        channel: 'Book Summary',
        url: 'https://www.youtube.com/results?search_query=psychology+of+money+morgan+housel+summary'
      },
      {
        emoji: '🌍',
        title: 'Sapiens — Summary & Key Lessons',
        channel: 'Einzelgänger',
        url: 'https://www.youtube.com/results?search_query=sapiens+yuval+harari+book+summary+animated'
      },
    ],
    sources: [
      { name: 'Goodreads', url: 'https://www.goodreads.com', desc: 'Reviews, ratings & community discussions for every book' },
      { name: 'Open Library', url: 'https://openlibrary.org', desc: 'Free digital library — borrow many of these books online' },
      { name: 'Project Gutenberg', url: 'https://www.gutenberg.org', desc: 'Free classic books — Meditations, Epictetus, and more' },
      { name: 'Libby / OverDrive', url: 'https://www.overdrive.com', desc: 'Borrow ebooks & audiobooks free with your library card' },
      { name: 'SparkNotes', url: 'https://www.sparknotes.com', desc: 'Study guides and summaries for classic literature' },
      { name: 'Blinkist', url: 'https://www.blinkist.com', desc: '15-minute book summaries for non-fiction books' },
    ]
  }

};

// ─── Renderer ────────────────────────────────────────────────────────────────
function renderResources(pageKey) {
  const el = document.getElementById('page-resources');
  if (!el) return;
  const data = PAGE_RESOURCES[pageKey];
  if (!data) return;

  const videosHTML = data.videos.map(v => `
    <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="vid-card">
      <div class="vid-thumb">
        <span class="vid-emoji">${v.emoji}</span>
        <span class="vid-play">▶</span>
      </div>
      <div class="vid-meta">
        <div class="vid-channel">${v.channel}</div>
        <div class="vid-title">${v.title}</div>
      </div>
    </a>
  `).join('');

  const sourcesHTML = data.sources.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="src-pill" title="${s.desc}">
      🔗 ${s.name}
    </a>
  `).join('');

  el.innerHTML = `
    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="resources-wrap">
          <div class="resources-header">
            <h2>📚 Sources & Further Learning</h2>
            <p>${data.intro}</p>
          </div>

          <div style="padding:1.5rem 2rem 0.25rem;border-bottom:none">
            <h3 style="font-size:1rem;color:var(--text)">🎥 Watch & Learn</h3>
            <p style="font-size:0.85rem;margin-top:0.25rem">Curated videos from leading educators — click any to search or visit the channel.</p>
          </div>
          <div class="vid-grid">${videosHTML}</div>

          <div class="src-groups">
            <div class="src-groups-title">📄 Credible Sources</div>
            <div class="src-pills">${sourcesHTML}</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
