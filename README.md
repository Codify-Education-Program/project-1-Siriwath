[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/cDYxNwY7)
# Project 1 — Personal Site (HTML + CSS)

Build a single scrolling page with sections, Flexbox layout, and one embedded iframe (Spotify/YouTube/Map). Deploy on GitHub Pages.

## What to build

Sections (in this order):

* **Home** (Your name)
* **About** (2–3 short paragraphs + one image with `alt`)
* **Music/Embed** (iframe)
* **Contact** (mailto link, optional socials)

## Rules

* One file: `index.html` + one stylesheet `style.css`
* HTML5 boilerplate, semantic structure (`header`, `main`, `section`, `footer`)
* Use **Flexbox** at least once

## How to build (quick steps)

1. Create files needed: `index.html`, `styles.css`
2. Make `index.html` with boilerplate + sections + IDs: `#home #about #projects #music #contact`
3. Add a top **nav** with anchor links to those IDs
4. Write real content, add at least one image (with `alt`)
5. Create `style.css` and link it in `<head>`
6. Style: colors, fonts, spacing, hover/focus states
7. Use **Flexbox** for nav or a responsive projects grid
8. Add an **iframe** (Spotify/YouTube/Map) in the Music section

## Git (minimal)
* Push to `main` and keep going
* Example:

  ```bash
  git add .
  git commit -m "add projects section + flex grid"
  git push
  ```

---

## ✅ P0 Checklist (must-haves)

**Structure**

* [ ] `index.html` uses HTML5 boilerplate
* [ ] Sections: Home, About, Projects, Music, Contact
* [ ] Sticky/top nav with anchor links to each section
* [ ] Exactly one `<h1>` (in Home), logical `<h2>` for section titles

**Content**

* [ ] About has 2–3 short paragraphs
* [ ] ≥ 1 image with meaningful `alt`
* [ ] iframe: 1 working `<iframe>` embed
* [ ] Contact: `mailto:` link (socials optional)

**Style**

* [ ] External CSS at `style.css`
* [ ] Custom background + readable text colors
* [ ] Custom font (Google Fonts ok)
* [ ] **Flexbox** used (nav row or projects grid)
* [ ] Comfortable spacing, link/button hover states
* [ ] Mobile friendly (no horizontal scroll; cards stack)

---

## 🚀 P1 Stretch Goals (pick 2–4)

* [ ] Add a **favicon**
* [ ] Smooth scroll for anchor links (pure CSS `scroll-behavior: smooth`)
* [ ] Add a second **iframe** (e.g., Google Map on Contact)
* [ ] “Back to top” link in footer
* [ ] Use CSS variables (`:root`) for a tiny **design system**
* [ ] Add a reusable **`.card`** class and use it 3+ times
* [ ] Improve **accessibility**: higher contrast, focus styles, skip-link
* [ ] Add a **dark mode** (CSS only: `prefers-color-scheme`)
* [ ] Print stylesheet (`@media print`) for a clean resume view

## Tips

* Keep copy short, readable, honest.
* Use real links. No lorem ipsum.
* Commit early, commit often.
* Don't use AI. 
