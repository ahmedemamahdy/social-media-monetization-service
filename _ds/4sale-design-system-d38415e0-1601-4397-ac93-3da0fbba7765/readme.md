# 4SALE Design System

The brand and UI system for **4SALE** (q84sale.com) — Kuwait's largest classifieds
marketplace for cars, real estate, electronics, furniture and more. Built from the
official **4SALE Brand Manual V01 (2023, updated 2026)**.

> **Sources used:** `uploads/4SALE-Brand Manual_Update2026.pdf` (92pp), the master
> logo lockups (`Logo_4Sale.png`, `Logo_4Sale-1.png`), and the brand's licensed
> webfonts (Somar variable + Sakr Pro). No product codebase or Figma was provided —
> the marketplace UI kit is a **brand-led recreation**, not a copy of shipped code.

---

## Brand in one line
**Worry Free · ريّح بالك.** Fast, trusted and effortless buying & selling. The brand
voice is confident and human; the look is bold blue, rounded, and high-contrast.

---

## CONTENT FUNDAMENTALS (voice & copy)
- **Tone:** confident, friendly, effortless. The marketing promise is speed —
  "Your Fastest Destination", "سهل.. سريع.. شامل" (Easy.. Fast.. Comprehensive).
- **Person:** speaks to *you* ("your fastest destination", "sell your stuff").
  Imperative verbs lead: *Buy, Sell, Rent, Post your ad*.
- **Casing:** Headlines in Sentence case or short ALL-CAPS labels (FEATURED, SOLD).
  Avoid Title Case Everywhere.
- **Bilingual:** English + Arabic are first-class. English is **left-aligned**,
  Arabic is **right-aligned** (manual 4.3) — never mix alignments in one block.
- **Length:** short. Price + 1-line title + location is the core unit of content.
- **Emoji:** not part of the brand. Use the icon set instead.
- **Slogan lockups:** "Worry Free" / "ريّح بالك" accompany the logo when space allows.

## VISUAL FOUNDATIONS
- **Colour:** built on **Risd Blue `#1D4AFF`** — the single colour that represents
  the brand, used everywhere. Supported by **Sky Blue `#8DE3FF`** and **Navy
  `#0E1A61`**. A curated set of secondary accents (yellow, spring green, orange,
  red, violet, slate blue) add energy *sparingly*. The manual's colour balance is
  **Blue 50% · Sky 25% · Blue(deep) 10% · White 10% · Black 5%** — blue-dominant.
- **Type:** display/headlines = **Somar** (the brand's replacement for DIN Next LT),
  used ExtraBold/Bold with tight tracking (−2.5%). Body/UI/Arabic = **Sakr Pro**
  (SS Sakr Soft). Big, confident headings; clean legible body.
- **Shape language (manual 6.1):** drawn from the logo — **rounded edges** = speed,
  softness, connection; **sharp edges** = bold, dynamic. Translated here as generous
  pill/rounded radii on interactive elements.
- **Backgrounds:** solid brand-blue fields for hero/marketing; soft `#F4F6FB` app
  background; white cards. Occasional soft radial "glows" in sky/violet on blue
  panels echo the logo's rounded forms. No heavy gradients, no noise/grain.
- **Cards:** white, `--r-lg` (18px) rounding, hairline `--line` border, soft
  **blue-tinted** shadow (`--sh-*` use navy alpha, never neutral grey). Featured
  state = blue border + yellow FEATURED ribbon.
- **Elevation/shadows:** soft and blue-tinted; primary buttons carry a brand-blue
  glow (`--sh-brand`). Never harsh black shadows.
- **Motion:** quick and springy (the brand reads as *fast*). Buttons scale down
  ~0.96 on press; drawers slide with an ease-out curve; ~120–320ms.
- **Hover:** subtle `brightness(0.94)` darken + small lift on cards. **Press:**
  scale-down, no colour invert.
- **Borders:** 1.5px is the default control border; icons use 1.5–2px strokes.
- **Radii:** sm 10 · md 14 · lg 18 · xl 24 · pill 999. Pills for buttons, tags,
  search, avatars; lg for cards.
- **Imagery:** bright, warm, real people with genuine smiles; vibrant, well-lit
  events/office photography (manual 9.x). Never cold or desaturated.

## ICONOGRAPHY (manual 6.2)
4SALE ships a **custom icon suite**: outlined (unfilled), single weight, with
**exterior corners rounded and interior corners sharp**, icons **face forward**
(no tilt/3D), simplified — "avoid complex icons". Stroke weights: light 1px,
regular 1.5px, bold 2px; a filled variant exists for emphasis.

> **Substitution flag:** the manual's *custom* icon binaries were not provided, so
> this system draws icons inline in a **Lucide-style** (outlined, rounded, ~1.8px,
> forward-facing) which matches the brand's stated rules. Swap in the official
> 4SALE icon set when available. Emoji are not used.

## Logo
`assets/logo/4sale-blue.png` (primary, on light) and `assets/logo/4sale-white.png`
(reversed, on blue/dark). Use original colours only; keep clear space ≥ the height
of the "4". Never stretch, outline, recolour, add shadow, or change letter spacing
(manual 2.8).

---

## INDEX
- **`styles.css`** — single entry point (consumers link this). `@import`s only.
- **`tokens/`** — `fonts.css` (@font-face), `colors.css`, `typography.css`,
  `spacing.css` (radii/shadows/motion), `base.css` (element resets).
- **`assets/fonts/`** — Somar (variable `SomarGX.ttf` + static heavies) & Sakr Pro.
- **`assets/logo/`** — blue + white lockups.
- **`guidelines/cards/`** — Design System tab specimen cards (colours, type,
  spacing, brand).
- **`components/`** — React primitives:
  - `buttons/` — **Button**, **IconButton**
  - `forms/` — **Input**, **SearchBar**, **Switch**
  - `display/` — **Badge**, **Tag**, **Avatar**, **Tabs**
  - `marketplace/` — **ListingCard**, **CategoryTile**
- **`ui_kits/marketplace/`** — interactive q84sale.com home recreation (header,
  hero search, category grid, featured listings, detail drawer, footer).
- **`SKILL.md`** — Agent-Skill manifest for downloading into Claude Code.

### Namespace
Components are exposed at `window.Ds4SALEDesignSystem_d38415` in card/kit HTML.

### Caveats
- Marketplace UI kit + listing photos are **placeholders / brand-led**, not derived
  from production code — provide the codebase or Figma to make it pixel-exact.
- Official **custom icons** and brand **illustrations/patterns** from the manual were
  not supplied as assets — Lucide-style icons substitute for now.
