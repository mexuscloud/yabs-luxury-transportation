# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

YABS Luxury Transportation is a static single-page website for a premium chauffeured transportation company based in the Dallas/Fort Worth area. No build tools, frameworks, or package managers — open `index.html` directly in a browser or serve with a local HTTP server.

## Previewing the Site

```bash
npx serve -l 3000 .
```
Then open `http://localhost:3000`. This is also configured in `.claude/launch.json` for the Claude Code preview panel.

## File Structure

| File | Purpose |
|------|---------|
| `index.html` | All HTML markup — no inline styles or scripts |
| `css/styles.css` | All styling: CSS variables, layout, components, animations, responsive breakpoints |
| `js/main.js` | Scroll-triggered nav shrink, Intersection Observer fade-ins, booking form handler |
| `images/` | Local image assets (currently empty — hero uses an Unsplash CDN URL) |

## Design System

Defined as CSS custom properties at the top of `css/styles.css`:

- **Colors**: `--black` `--deep` `--surface` `--gold` `--gold-light` `--gold-dim` `--text` `--muted` `--border`
- **Fonts**: `Playfair Display` (headings, italic accents) · `Inter` (body, UI)
- **Style**: Dark OLED + Glassmorphism — gold (`#c9a84c`) on deep black, glass cards with `backdrop-filter: blur`

Always use CSS variables for colors. Never hardcode hex values outside of `:root`.

## Page Sections (in order)

`nav` → `#hero` → `#services` → `#experience` → `#testimonials` → `#booking` → `footer`

## Key Details

- **Phone**: +1 651 468 6614 (appears in `#booking` contact and footer)
- **Email**: reservations@yabsluxury.com
- **Hero background**: Unsplash CDN image via `background-image` in `.hero-bg` in `css/styles.css`
- **Responsive breakpoints**: 1024px (tablet) and 640px (mobile) in `css/styles.css`
- **Animations**: Hero elements use `fadeUp` keyframe with staggered `animation-delay`. Section cards use Intersection Observer in `js/main.js`

## Pushing Changes to GitHub

```bash
git add .
git commit -m "your message"
git push
```

Remote: `https://github.com/mexuscloud/yabs-luxury-transportation`
