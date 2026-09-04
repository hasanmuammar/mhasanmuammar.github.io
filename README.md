# Muhammad Manjur Hasan Muammar — Portfolio

A dependency-free personal landing page built with semantic HTML, modern CSS, and vanilla JavaScript.

## Features

- **4-language i18n** — English, Arabic (Classical), Indonesian, and Bangla
- **Auto language detection** — uses browser language, persists user preference
- **RTL support** — Arabic flips to right-to-left layout
- **Language-aware fonts** — Noto Naskh Arabic (Arabic), Noto Sans Bengali (Bangla), Inter (English/Indonesian)
- **CV download** — linked from the About section
- **GitHub Pages ready** — no build step required

## Run locally

```bash
cd /var/home/hasan/Projects/muhammad-hasan
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

## Deploy to GitHub Pages

1. Push this repository to GitHub (repo named `<username>.github.io`)
2. Go to **Settings → Pages**
3. Choose **Deploy from a branch** → `main` / `/ (root)`
4. Save

No build step required — GitHub Pages serves the static files directly.

## Project structure

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── i18n.js
├── assets/
│   ├── images/hasan-selfie.jpeg
│   └── documents/cv-hasan.pdf
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── .nojekyll
```

## Customisation

- Edit `index.html` to update static content
- Edit `js/i18n.js` to update translations (4 languages)
- Edit `css/style.css` for visual styling

No third-party libraries, frameworks, or build tools are required.
