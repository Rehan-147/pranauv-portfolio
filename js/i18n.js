(function () {
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  // Site content is now English-first for Pranauv. Keep lang in sync.
  const lang = browserLang.startsWith('fr') ? 'fr' : 'en';
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  window.__I18N_LANG = lang;

  window.getCharHTML = function (ch) {
    if (ch === ' ') return '&nbsp;';
    if (ch === '🡲' || ch === '🡺') return '<svg style="width: 1.25em; height: 1.25em; vertical-align: -0.25em;" viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/></svg>';
    if (ch === '🡼') return '<svg style="width: 1.25em; height: 1.25em; vertical-align: -0.25em;" viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-135 42 42.5)"><path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/></g></svg>';
    if (ch === '🞣') return '<svg style="width: 0.9em; height: 0.9em; vertical-align: -0.1em; transform: translateY(-0.1em);" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"/></svg>';
    return ch;
  };

  // French visitors see the HTML as-is (now English). English dictionary below keeps EN consistent.
  if (lang === 'fr') {
    window.__t = function (key) { return null; };
    return;
  }

  const T = {
    'meta.description': 'Pranauv Shrinaath is a founder and systems engineer building difficult systems across distributed computing, cryptography, post-quantum security, trusted computing and AI infrastructure.',

    'index.title': 'Pranauv Shrinaath — Founder & Systems Engineer',
    'index.h1': 'Pranauv Shrinaath S, Founder & Systems Engineer in Chennai, building distributed systems, cryptography, trusted computing and AI infrastructure.',
    'index.hero.tagline': 'Founder & Systems Engineer, <span class="other-accent">I build unusual systems</span> from scratch,<br>and turn them into real products.',
    'index.about.text': 'As a<span class="other-accent"> founder & systems engineer</span>, I build difficult technical systems from scratch, blending low-level engineering and <span class="other-accent">real products</span>.',
    'index.about.sub': "I'm Pranauv — most people call me Keni. Founder & Systems Engineer in Chennai, CEO & Founder of NorthWind Cipher. 60+ projects across systems, security, AI, cryptography and blockchain — including my own OS, language & compiler. Former Intern @ NUS.",
    'index.cg.phrase': "Every project is an opportunity to <span class=\"other-accent\">understand something deeper</span>, build something <span class=\"other-accent\">real</span> and push the boundary further.",
    'index.skills.subtitle': 'Skills',
    'index.skills.text': 'Founder and systems engineer building across the stack — from low-level computing and distributed systems to cryptography, trusted infrastructure, quantum computing and AI.',
    'index.skills.frontend': 'Languages',
    'index.skills.animation': 'Systems',
    'index.skills.backend': 'Cryptography',
    'index.skills.database': 'Trusted Computing',
    'index.skills.devops': 'Distributed Systems',
    'index.skills.security': 'AI Systems & Quantum',
    'index.skills.design': 'Blockchain & Infra',
    'index.contact.title': 'Contact',
    'index.contact.dispo1': "CEO & Founder at <span class=\"other-accent\">NorthWind Cipher</span> — building verifiable AI, security and cryptographic infrastructure.",
    'index.contact.dispo2': "Available for <span class=\"other-accent\">selected technical collaborations</span>, product engineering and conversations around <span class=\"other-accent\">difficult systems problems</span>.",
    'index.proj.label': 'Preview',
    'index.detail.visit': 'VISIT 🡲',
    'index.detail.back': '🡼BACK',

    'info.title': 'Info — Pranauv Shrinaath',
    'info.eyebrow': 'About',
    'info.role': 'Founder & Systems Engineer — distributed systems, cryptography, trusted computing & AI infrastructure.',
    'info.desc': "I'm Pranauv, but most people call me Keni. Obsessed with how complex systems work at the lowest level — OS, networking, distributed systems, PQC, TEEs, quantum and AI infra. CEO & Founder of NorthWind Cipher, ex-NUS Intern.",
    'info.meta.based': 'Based in',
    'info.meta.status': 'Status',
    'info.meta.based.value': 'Chennai, India',
    'info.meta.status.value': 'CEO & Founder — NorthWind Cipher | B.Tech CSE AI&ML, SRM — 2028',
    'info.skills.frontend': 'Languages',
    'info.skills.animation': 'Systems & Crypto',
    'info.skills.backend': 'Distributed & AI',
    'info.skills.security': 'Education & Infra',

    'contact.title': 'Contact — Pranauv Shrinaath',
    'contact.panel.title': "Let's build something.",
    'contact.panel.copy': "Have an idea, a difficult technical problem, or something you want to build from scratch? Let's talk.",
    'contact.meta.base': 'Based in',
    'contact.meta.status': 'Status',
    'contact.meta.delay': 'Book a call',
    'contact.meta.base.value': 'Chennai, India',
    'contact.meta.status.value': 'Founder / Systems Engineer',
    'contact.meta.delay.value': 'cal.com/pranauvshrinaath',
    'contact.eyebrow': 'Contact',
    'contact.role': 'Founder & Systems Engineer — AI, security, cryptography, distributed systems.',
    'contact.desc': "I build products, systems and infrastructure across AI, security, cryptography, distributed systems and software engineering.",
    'contact.shortcuts': 'Links',
    'contact.brief': 'Focus',
    'contact.maildirect': 'pranauvkeni@gmail.com',
    'contact.brief.product': 'Verifiable AI',
    'contact.brief.deadline': 'Post-Quantum Crypto',
    'contact.brief.stack': 'TEE / Confidential Computing',
    'contact.brief.deliverables': 'Distributed Systems',

    'works.title': 'Work — Pranauv Shrinaath',
    'works.h1': 'Projects — Pranauv Shrinaath. A collection of systems, products and experiments built from the ground up.',

    'common.aria.back': 'Back to home',
    'common.aria.menu': 'Main navigation',
    'common.aria.social': 'Social links',
    'common.aria.footer': 'Footer navigation',

    '404.title': '404 — Pranauv Shrinaath',
    '404.subtitle': 'This page got lost in the void.<br><span class="subtitle-dim">It doesn\'t exist, or no longer does.</span>',
    '404.ticker': '— PAGE NOT FOUND — SIGNAL LOST — ERROR 0x404 — THIS PAGE DOESN\'T EXIST — COORDINATES: NULL — UNKNOWN DESTINATION — ',
    '404.aria.back': 'Back to home',
  };

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (T[key] != null) el.innerHTML = T[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split('|').forEach(function (pair) {
      const idx = pair.indexOf(':');
      if (idx < 0) return;
      const attr = pair.slice(0, idx).trim();
      const key = pair.slice(idx + 1).trim();
      if (T[key] != null) el.setAttribute(attr, T[key]);
    });
  });

  const titleKey = document.documentElement.getAttribute('data-i18n-title');
  if (titleKey && T[titleKey]) document.title = T[titleKey];

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && T['meta.description']) descMeta.setAttribute('content', T['meta.description']);

  window.__t = function (key) { return T[key]; };
})();
