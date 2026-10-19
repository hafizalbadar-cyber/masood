# Masood | eBay Account Health & Consultancy

Modern, international portfolio built with Vite and React. Only React and React DOM at runtime.

## Run

    npm install
    npm run dev       # local preview
    npm run build     # production build in dist/

## Edit content

All copy is in `src/content.js`. Replace each `TODO` (email, Fiverr and LinkedIn links).
Update the domain in `index.html` (canonical, og:url, og:image, JSON-LD) before launch.

## Before launch checklist

- Replace placeholder domain and contact links.
- Confirm the FAQ promises (privacy, response) match how you actually work.
- Run a Lighthouse check (performance, accessibility, SEO).
- Test on a real phone and in dark mode.

## Notes

- Outcome language is deliberately careful. eBay decides on appeals; avoid guarantees in new copy.
- Do not publish screenshots that show buyer names, emails or order details.
- eBay is a trademark of eBay Inc. The footer says this portfolio is not affiliated with eBay.

## Deploy

Vercel, Netlify or Cloudflare Pages. Build command `npm run build`, output directory `dist`.
