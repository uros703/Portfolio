# Portfolio — project guidelines

Static one-page portfolio: `index.html`, `styles.css`, `assets/`. Bootstrap 5.2.3 + Archivo (variable width) from CDNs. No build step — open `index.html` in a browser.

## Structure (HTML)
1. **Every new section is a `<section>` with an `id` matching the nav link** (`#about`, `#skills`, `#projects`, `#achievements`, `#contact`). Follow the About pattern:
   ```html
   <!-- SKILLS SEKCIJA -->
   <section id="skills" class="sekcija sekcija-lg">
     <h2 class="node wide fw-heavy fs-32px fs-lg-56px mb-3">Skills and tools</h2>
     <p class="measure text-soft fs-18px mb-48px">One plain sentence about the section.</p>
     ...
   </section>
   ```
   The `.node` class puts the heading on the circuit wire. No eyebrow labels or "02 / ..." numbering above headings.
2. **Heading hierarchy:** one `<h1>` (the name in the hero), `<h2>` for section titles, `<h3>` for titles inside a section. Choose tags by meaning, size them with classes.
3. **`<a>` when it goes somewhere, `<button>` only when it does something on the page.** External links get `target="_blank" rel="noopener"`.
4. **Every `<img>` has `alt`, `width` and `height`.** Decorative images use `alt=""`.
5. **No unnecessary wrappers** — don't wrap a single `<p>` in a `d-flex` div.

## Styling (CSS)
6. **No hard-coded hex colors in classes** — use `var(--...)` from `:root`; add new colors to `:root` first.
7. **Alternate section backgrounds:** default (grid paper) → `bg-deep` → default…
8. **Bootstrap first, custom classes second.** Use Bootstrap utilities (`d-flex`, `gap-3`, `row`/`col-lg-6`, `mb-4`) when they exist; write custom classes only for values Bootstrap lacks.
9. **Custom class naming:** `fs-18px` / `fs-lg-40px` (font size), `mb-32px` / `mx-24px` (spacing). `-lg-` variants go inside the `@media (min-width: 992px)` block, `-xl-` inside the 1200px block.
10. **Font sizes in `rem`** (px ÷ 16), even though class names use the px design value.
11. **Mobile-first:** base styles target phones, the `lg` media query adjusts for desktop. Check both widths.
12. **Keep `styles.css` grouped:** `:root` → Bootstrap overrides → own classes → spacing → font sizes → desktop media query.
13. **No inline `style="..."`** — create a small class instead (e.g. `.brand-logo`).
14. Comments may be in Serbian, matching the existing ones.

## Workflow
15. **One branch per section** (`about`, `skills`, `projects`…), merged into `main` when done.
16. **Small commits with clear messages** — one logical change per commit.
17. **Before committing, check:** no console errors (F12), nav link scrolls to the section, looks right on mobile and desktop (Ctrl+Shift+M), keyboard Tab shows the amber focus ring.

## Design
"Schematic sheet" redesign (branch `redesign`), replacing the original Figma "Midnight portfolio" dark design. The page reads like an engineering drawing: cool grid paper (`--paper`), dark ink (`--ink`), and one accent, `--live` (amber "current"), used only for the wire, charged nodes and focus (`--live-deep` where contrast matters). One type family, Archivo: `.wide` (expanded) for the name and headings, normal width for body, `.narrow` for small labels. No all-caps labels, no monospace, no "01 /" numbering.

- **The circuit:** `main.circuit` draws a wire down the left margin (`--rail-x`), starting under the nav logo and ending in a ground symbol under Contact. Every `.node` heading gets a dot and a branch. `script.js` fills the wire with current (`--charge`) down to the section being read, marks those nodes `.is-charged` and highlights the nav link. This is the one animated moment on the page, so don't add more entrance animations.
- Content starts at `--content-x`; sections use `.sekcija` padding, so the nodes line up automatically.
- Skills are "parts lists" (`table.parts`, refs S1…, T1…). Projects are full-width `.project` rows. Milestones are a newest-first `ol.milestone-list`; each row opens the shared `#milestoneModal`.
- Empty images use the hatched `.project-img` / `.event-photo` placeholder. Footer is a drawing "title block".
- Logo for the light background: `assets/logo-ink.svg`; favicon is amber on ink.

## Open TODOs
- Replace bracketed placeholder content: the 3 project cards (swap `div.project-img` for a real `<img class="project-img">`).
- Add a photo, description and the real year (`[Year]`) to each milestone: edit the hidden `.milestone-details` block inside each row (it is shown in the shared `#milestoneModal`); put photos in `assets/milestones/`.
- Remove the "BRACKETED CONTENT IS A PLACEHOLDER." note and "PLACEHOLDER" labels once real content is in.
- SEO once the site has a public URL (see TODO in `<head>`): add `<link rel="canonical">`, `og:url`, `og:image` (1200×630 image, absolute URL), `url`/`image` in the JSON-LD, a `sitemap.xml`, and a `Sitemap:` line in `robots.txt`. Title, description, partial OG tags, JSON-LD Person and icons are already done.
- Possible upgrade to Bootstrap 5.3.
