# A. Bordeau Mechanical LLC — Website

A static one-page demo website for A. Bordeau Mechanical LLC, an HVAC company serving all of New Hampshire. No build step, no backend, no frameworks — just HTML, CSS, JS, self-hosted fonts, and hand-drawn SVG icons, ready to push straight to GitHub Pages.

## What's included

```
index.html          Full one-page site (hero, about, services, owner, quote, contact, footer)
css/styles.css       All styling — colors, type, layout, responsive rules
js/main.js            Mobile nav, gauge tick-mark dividers, quote/contact forms
fonts/                 Self-hosted woff2 font files (Oswald, Inter, IBM Plex Mono)
assets/icons/          Source SVG icons (also inlined as a sprite in index.html)
assets/images/         Favicon
```

## Design notes

The visual language is built around an HVAC gauge/dial: **blue** represents cooling, **red** represents heating, and **black** is the instrument panel they sit on. That split shows up in the hero gauge graphic, the service-card icon colors, the section eyebrows, and the tick-mark divider rule. Headings use **Oswald** (a condensed, industrial display face), body copy uses **Inter**, and small labels/phone numbers/eyebrows use **IBM Plex Mono** for a technical, readout feel.

## Sections on the page

1. **Hero** — action-statement headline + the company motto ("Honest Work. Fair Pricing.") + primary CTAs
2. **About the Company** — company description, service area (all of NH), and a quick-stat row
3. **Services Available** — all 8 services with icons, plus a 24/7 emergency-service callout
4. **About the Owner** — Andrew Bordeau bio and credentials
5. **Get a Quote** — a consultation-request form (submits via `mailto:`, no backend needed)
6. **Contact** — phone/email/service-area/hours cards, a question form, and Facebook/Instagram icon links
7. **Footer** — full contact info, sitemap, and social links; a sticky "Call now" bar appears on mobile

The quote and contact forms open the visitor's email client pre-filled with their answers, addressed to `abordeaumechanical@gmail.com` — this works on GitHub Pages with zero backend. If you'd rather have real form submissions land in an inbox or spreadsheet, swap the JS `mailto:` logic for a form service like Formspree or Getform (a few lines of change in `js/main.js`).

## Before this goes live for a real client

- **Facebook/Instagram links** currently point to the generic facebook.com / instagram.com — swap in the real profile URLs in `index.html` (search for `social-btn`).
- **Owner photo** — the owner section currently uses a monogram badge ("AB") instead of a real photo, since none was provided. Swap in an actual photo of Andrew by adding an `<img>` inside `.owner-badge` in `index.html` and adjusting `.owner-badge` / `.owner-monogram` styles in `css/styles.css`.
- **Address** — no physical business address was provided, so none is shown. Add one to the footer and contact section if the business has a public address.
- **Business license/insurance numbers**, if the client wants to display them for trust/compliance, can go in the footer legal row.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `abordeau-mechanical`).
2. Push this folder's contents to the repository root:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. GitHub will publish the site at `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a minute or two.

No build tools, no `npm install`, no server — it's a static site, so this is the entire deployment process.

## Local preview

Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Fonts

Self-hosted under `fonts/`, all licensed under the SIL Open Font License 1.1 (free for commercial use, redistribution, and modification):

- **Oswald** — designed by Vernon Adams et al. — https://github.com/googlefonts/OswaldFont
- **Inter** — designed by Rasmus Andersson — https://github.com/rsms/inter
- **IBM Plex Mono** — designed by IBM — https://github.com/IBM/plex
