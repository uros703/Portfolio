# Portfolio — project guidelines

Static one-page portfolio: `index.html`, `styles.css`, `assets/`. Bootstrap 5.2.3 + Inter / IBM Plex Mono from CDNs. No build step — open `index.html` in a browser.

## Structure (HTML)
1. **Every new section is a `<section>` with an `id` matching the nav link** (`#about`, `#skills`, `#projects`, `#achievements`, `#contact`). Follow the About pattern:
   ```html
   <!-- SKILLS SEKCIJA -->
   <section id="skills" class="container-fluid sekcija sekcija-lg">
     <p class="green-text fs-12px">02 / SKILLS</p>
     <h2 class="fw-semibold fs-32px fs-lg-40px mb-32px">What I work with.</h2>
     ...
   </section>
   ```
2. **Heading hierarchy:** one `<h1>` (the name in the hero), `<h2>` for section titles, `<h3>` for titles inside a section. Choose tags by meaning, size them with classes.
3. **`<a>` when it goes somewhere, `<button>` only when it does something on the page.** External links get `target="_blank" rel="noopener"`.
4. **Every `<img>` has `alt`, `width` and `height`.** Decorative images use `alt=""`.
5. **No unnecessary wrappers** — don't wrap a single `<p>` in a `d-flex` div.

## Styling (CSS)
6. **No hard-coded hex colors in classes** — use `var(--...)` from `:root`; add new colors to `:root` first.
7. **Alternate section backgrounds:** default (dark page background) → `bg-surface` → default…
8. **Bootstrap first, custom classes second.** Use Bootstrap utilities (`d-flex`, `gap-3`, `row`/`col-lg-6`, `mb-4`) when they exist; write custom classes only for values Bootstrap lacks.
9. **Custom class naming:** `fs-18px` / `fs-lg-40px` (font size), `mb-32px` / `mx-24px` (spacing). `-lg-` variants go inside the `@media (min-width: 992px)` block.
10. **Font sizes in `rem`** (px ÷ 16), even though class names use the px design value.
11. **Mobile-first:** base styles target phones, the `lg` media query adjusts for desktop. Check both widths.
12. **Keep `styles.css` grouped:** `:root` → Bootstrap overrides → own classes → spacing → font sizes → desktop media query.
13. **No inline `style="..."`** — create a small class instead (e.g. `.brand-dot`).
14. Comments may be in Serbian, matching the existing ones.

## Workflow
15. **One branch per section** (`about`, `skills`, `projects`…), merged into `main` when done.
16. **Small commits with clear messages** — one logical change per commit.
17. **Before committing, check:** no console errors (F12), nav link scrolls to the section, looks right on mobile and desktop (Ctrl+Shift+M), keyboard Tab shows the green focus ring.

## Design
Built from the Figma design "Midnight portfolio" (Desktop + Mobile PNG exports). Icons come from Bootstrap Icons (`<i class="bi bi-...">`). Cards use Bootstrap `.card` with overrides in `styles.css`; `.card-dark` is the darker variant for `bg-surface` sections. Milestones is a scroll-snap slider (`.slider-track` / `.slider-slide`, arrows wired by id in `script.js`): 3 cards visible on desktop, 2 on tablet, 1 + peek on mobile.

## Open TODOs
- Replace bracketed placeholder content: the 3 project cards (swap `div.project-img` for a real `<img class="project-img">`).
- Remove the "BRACKETED CONTENT IS A PLACEHOLDER." note and "PLACEHOLDER" labels once real content is in.
- Open Graph link-preview tags (`og:title`, `og:image`, …) once the site has a public URL — `og:url`/`og:image` must be absolute.
- Possible upgrade to Bootstrap 5.3 (built-in dark mode would replace most `--bs-*` overrides).
