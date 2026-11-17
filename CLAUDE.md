# Portfolio — project guidelines

Static one-page portfolio: `index.html`, `styles.css`, `assets/`. Bootstrap 5.2.3 (CSS only) + Instrument Sans / Instrument Serif from CDNs. No build step — open `index.html` in a browser.

## Structure (HTML)
1. **Every new section is a `<section>` with an `id` matching the nav link** (`#about`, `#now`, `#projects`, `#achievements`, `#skills`, `#contact`). Follow the About pattern:
   ```html
   <!-- SKILLS SEKCIJA -->
   <section id="skills" class="sekcija">
     <h2 class="section-title">Skills</h2>
     ...
   </section>
   ```
2. **Heading hierarchy:** one `<h1>` (the name in the hero), `<h2>` for section titles, `<h3>` for titles inside a section. Choose tags by meaning, size them with classes.
3. **`<a>` when it goes somewhere, `<button>` only when it does something on the page.** External links get `target="_blank" rel="noopener"`.
4. **Every `<img>` has `alt`, `width` and `height`.** Decorative images use `alt=""`.
5. **No unnecessary wrappers** — don't wrap a single `<p>` in a `d-flex` div.

## Styling (CSS)
6. **No hard-coded hex colors in classes** — use `var(--...)` from `:root`; add new colors to `:root` first.
7. **One background for the whole page.** Sections are separated by a thin top rule (`.sekcija`), not by alternating colors.
8. **Bootstrap first, custom classes second.** Use Bootstrap utilities (`d-flex`, `gap-3`, `row`/`col-lg-6`, `mb-4`) when they exist; write custom classes only for values Bootstrap lacks.
9. **Custom class naming:** `fs-18px` / `fs-lg-40px` (font size), `mb-32px` / `mx-24px` (spacing). `-lg-` variants go inside the `@media (min-width: 992px)` block.
10. **Font sizes in `rem`** (px ÷ 16), even though class names use the px design value.
11. **Mobile-first:** base styles target phones, the `lg` media query adjusts for desktop. Check both widths.
12. **Keep `styles.css` grouped:** `:root` → Bootstrap overrides → own classes → spacing → font sizes → desktop media query.
13. **No inline `style="..."`** — create a small class instead (e.g. `.brand-logo`).
14. Comments may be in Serbian, matching the existing ones.

## Workflow
15. **One branch per section** (`about`, `skills`, `projects`…), merged into `main` when done.
16. **Small commits with clear messages** — one logical change per commit.
17. **Before committing, check:** no console errors (F12), nav link scrolls to the section, looks right on mobile and desktop (Ctrl+Shift+M), keyboard Tab shows the blue focus ring, and the page works in both light and dark system themes.

## Design
Minimal single-column design (branch `minimal`), in the style of modern text-first developer sites. Content sits in one 640px column, left-aligned and centered on the page. Instrument Serif is used only for the name; everything else is Instrument Sans. Light and dark themes follow the system (`prefers-color-scheme` in `:root`). The only accent is the link blue (`--link`). No cards, sliders, icons or entrance animations.

- The header shows the avatar, name and Novi Sad local time (filled in by `script.js`).
- **Now** is a short list of what you're currently doing; update it and its "Updated" date every few months.
- Projects are plain rows (`.row-link`); once a project has a URL, turn its `div.row-link` into an `<a>`.
- Achievements are native `<details>` rows that expand to show a photo and description, so they need no JS.

## Open TODOs
- Replace bracketed placeholder content in Projects and Now, and add links to the project rows.
- Add the year, a photo and a description to each achievement (inside its `<details>`); put photos in `assets/milestones/`.
- Remove the "Project details are placeholders." note once real content is in.
- SEO once the site has a public URL (see TODO in `<head>`): add `<link rel="canonical">`, `og:url`, `og:image` (1200×630 image, absolute URL), `url`/`image` in the JSON-LD, a `sitemap.xml`, and a `Sitemap:` line in `robots.txt`. Title, description, partial OG tags, JSON-LD Person and icons are already done.
- Bootstrap is barely used here; it could be dropped entirely.
