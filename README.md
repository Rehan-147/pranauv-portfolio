# Pranauv Shrinaath S — Portfolio

Founder & Systems Engineer portfolio. Static frontend, no backend, no build step.

Live: https://friend-portfolio-delta.vercel.app

## Run locally

From this folder run:

    python -m http.server 8080

Then open http://localhost:8080. Use a server rather than double-clicking index.html (the JavaScript uses ES modules in places). Pages: `/`, `/info/`, `/works/`, `/contact/`. Google Fonts is the only online dependency.

## Where content lives

- `index.html` — hero, about, projects list, gallery, skills, achievements, contact, footer.
- `info/index.html` — bio, education, skills.
- `contact/index.html` — contact details, social links, booking link.
- `works/index.html` — projects page shell (data comes from `js/works.js`).
- `js/i18n.js` — English strings (overwrites HTML when the browser is set to English, so edit both).
- `js/index.js` — homepage project details (`PROJECTS`), animations, Hire Me reveal wiring.
- `js/works.js` — projects page data (`PROJECTS`).
- `assets/images/profile/pranauv.jpg` — profile photo (also preloaded).
- `assets/images/cover/cover.jpg` — 1200×630 social preview, generated from the profile photo.
- `robots.txt`, `sitemap.xml`, `llms.txt`, `404.html` — SEO/AI-crawler files.
- `js/vendor/` — GSAP, ScrollTrigger, Lenis (third-party, licensed by their authors).

## Still to replace with real assets

- `assets/images/projects/` covers and gallery screenshots are placeholders — swap in real project screenshots keeping the same filenames.
- `assets/images/hero sequence/` — 341-frame scroll canvas; keep or replace as one set.
