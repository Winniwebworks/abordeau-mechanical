# A. Bordeau Mechanical LLC — Website

A static multi-page demo website for A. Bordeau Mechanical LLC, an HVAC company serving all of New Hampshire. No build step, no backend, no frameworks — just HTML, CSS, JS, self-hosted fonts, and hand-drawn SVG icons, ready to push straight to GitHub Pages.

## What's included

```
index.html               Home page (hero, about, services, request service, contact, footer)
projects.html             Recent Projects page (own page, same header/nav/footer as home)
owner.html                 About the Owner page (own page, same header/nav/footer as home)
special-offers.html         Special Offers page (own page, same header/nav/footer as home)
css/styles.css            All styling — colors, type, layout, responsive rules (shared by every page)
js/main.js                 Mobile nav, gauge tick-mark dividers, accordion, quote/contact forms (shared by every page)
fonts/                     Self-hosted woff2 font files (Oswald, Inter, IBM Plex Mono)
assets/icons/               Source SVG icons (each page also inlines its own icon sprite so it works standalone)
assets/images/               Favicon
```

## Design notes

The visual language is built around an HVAC gauge/dial: **blue** represents cooling, **red** represents heating, and **black** is the instrument panel they sit on. That split shows up in the hero gauge graphic, service icon colors, section eyebrows, and the tick-mark divider rule. Headings use **Oswald** (a condensed, industrial display face), body copy uses **Inter**, and small labels/phone numbers/eyebrows use **IBM Plex Mono** for a technical, readout feel.

## Pages

**index.html (Home)**
1. **Hero** — action-statement headline + the company motto ("Honest Work. Fair Pricing.") + primary CTAs
2. **About the Company** — "Why Choose" checklist alongside the company description
3. **Services Available** — a click-to-expand accordion covering all service categories, plus a full 24/7 availability panel
4. **Request Service / Contact** — a service-request form and a contact form (both submit via `mailto:`, no backend needed), plus phone/email/hours cards and Facebook/Instagram links
5. **Footer** — full contact info, sitemap, and social links; a sticky "Call now" bar appears on mobile

**projects.html** — a horizontally-scrollable gallery of recent project cards, with its own back-to-home link and closing call-to-action.

**owner.html** — Andrew Bordeau's bio, credentials checklist, and a closing call-to-action.

**special-offers.html** — current promotional offers as individual cards, plus the offer terms and conditions.

Every page ships the same header (logo, nav, phone, Request Service button, mobile hamburger menu) and footer, so navigation feels seamless across the site. From subpages, nav links to `#about`/`#services`/`#contact` point back to `index.html#section`; `Projects`, `The Owner`, and `Special Offers` link directly between their own pages.

The quote and contact forms open the visitor's email client pre-filled with their answers, addressed to `abordeaumechanical@gmail.com` — this works on GitHub Pages with zero backend. If you'd rather have real form submissions land in an inbox or spreadsheet, swap the JS `mailto:` logic for a form service like Formspree or Getform (a few lines of change in `js/main.js`).

## Before this goes live for a real client

- **Facebook/Instagram links** currently point to the generic facebook.com / instagram.com — swap in the real profile URLs (search for `social-btn` — it appears in each page's footer, plus the contact section on `index.html`).
- **Owner photo** — the owner page currently uses a monogram badge ("AB") instead of a real photo, since none was provided. Swap in an actual photo by adding an `<img>` inside `.owner-badge` in `owner.html` and adjusting the `.owner-badge` / `.owner-monogram` styles in `css/styles.css`.
- **Address** — no physical business address was provided, so none is shown. Add one to the footer and contact section if the business has a public address.
- **Business license/insurance numbers**, if the client wants to display them for trust/compliance, can go in the footer legal row.
- **Editing shared header/footer/nav**: since this is a plain static site (no templating), the header, footer, and nav markup is duplicated across all four HTML files. If you add a nav item or change the footer, update it in `index.html`, `projects.html`, `owner.html`, and `special-offers.html` to keep them in sync.

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
5. Save. GitHub will publish the site at `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a minute or two. Subpages will be reachable at `.../projects.html`, `.../owner.html`, and `.../special-offers.html`.

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
