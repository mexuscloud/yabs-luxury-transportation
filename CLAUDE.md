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

---

## Pending: Email Setup (reservations@yabsluxury.com)

The email address in the site is a placeholder. To make it live:

**Step 1 — Buy the domain `yabsluxury.com`**
- Namecheap (namecheap.com) — ~$10/year (recommended)
- Google Domains (squarespace.com/domains) — ~$12/year
- GoDaddy — ~$12/year

**Step 2 — Set up a business email host**
- **Zoho Mail** — free tier for 1 user, good starting point
- **Google Workspace** — $6/month, Gmail interface with custom domain

**Step 3 — Connect domain to email host**
- The email host will provide MX records
- Add those MX records to your domain's DNS settings at your registrar
- Both Zoho and Google Workspace walk you through this step by step

**Step 4 — Update the website**
Once email is live, update the `tel` href in `index.html` booking section and footer:
```html
<a href="mailto:reservations@yabsluxury.com">reservations@yabsluxury.com</a>
```
Also wire up the booking form to Formspree (see Formspree section above) using the live email.

**Recommended path:** Namecheap for domain + Zoho Mail free tier to start.

---

## Web Agency Operations (Managing Multiple Clients)

### Domains
- **Cloudflare Registrar** — at-cost pricing, excellent DNS, free to use across all clients (recommended)
- **Namecheap Reseller** — wholesale pricing, single dashboard for all client domains
- **Rule:** Always register domains in the client's name/account, not yours. You manage it on their behalf — if they leave, the domain goes with them cleanly.

#### Domain Ownership — Detailed Explanation

**❌ Wrong way — register in YOUR account**
- You buy the domain on your own Namecheap/Cloudflare account
- The domain is legally yours
- If the client stops paying or moves to another developer, you hold the domain hostage (intentionally or not)
- If something happens to your account, their business is affected
- Creates legal and trust problems

**✅ Right way — register in THEIR account**
- Create a Cloudflare/Namecheap account *for the client* using their email and billing info
- The domain is legally theirs from day one
- Ask them to add you as an admin/team member so you can manage DNS on their behalf
- If they leave you, remove yourself — their domain and email keep working without interruption
- No disputes, no leverage, clean separation

**How to get admin access without owning the account:**
- **Cloudflare** → client's account → Members → invite your email as Admin
- **Namecheap** → client's account → Profile → Manage Users → add your email

You get full control to update DNS, connect hosting, set up email — without owning the asset.

**The business reason:**
Clients trust you more when they know they own everything. Use it as a selling point — *"You own your domain and email. I just manage it for you."* Agencies that hold domains hostage develop a bad reputation fast.

### Email
- **Google Workspace Reseller** — manage all client email from one admin panel, built-in billing margin
- **Zoho Mail Partner Program** — multi-domain management, good free starting tier

### Hosting (Static Sites)
- **Netlify** — free tier per site, simple per-client deployment, easy custom domain setup
- **Cloudflare Pages** — free, fast, pairs perfectly with Cloudflare Registrar

### Code
- **GitHub** — one repo per client site (like this one), keep all repos under your GitHub account or transfer to client account when needed

### Recommended Stack Per Client

| Tool | Purpose |
|------|---------|
| Cloudflare | Domain registration + DNS |
| Netlify or Cloudflare Pages | Static site hosting |
| Google Workspace Reseller | Client email accounts |
| GitHub | One repo per client site |

### Client Tracking (Most Important)
Keep a master spreadsheet or Notion doc with the following for every client:

| Field | Example |
|-------|---------|
| Client name | YABS Luxury Transportation |
| Domain | yabsluxury.com |
| Domain expiry date | 2027-07-03 |
| Registrar | Cloudflare |
| Hosting | Netlify |
| Hosting URL | yabs.netlify.app |
| Email provider | Zoho / Google Workspace |
| GitHub repo | github.com/mexuscloud/yabs-luxury-transportation |
| Email addresses | reservations@yabsluxury.com |

> ⚠️ Domains expiring without notice is the #1 way agencies lose clients. Set calendar reminders 60 days before every domain expiry.
