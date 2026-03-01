# kmsolution-website

A professional, fully responsive business website for **KM Solution**, built with clean HTML, CSS, and JavaScript. No frameworks or build tools required — open the file in any browser and it just works.

---

## 📁 File Structure

```
index.html     → Styles.css → Script.css
README.md      → This documentation
```

---

## 🌐 Pages & Sections

The website is a single-page application with the following sections:

| Section | ID | Description |
|---|---|---|
| Navigation | — | Fixed top nav with mobile hamburger menu |
| Hero | — | Main banner with headline and call-to-action |
| Services | `#services` | 5 service cards |
| Stay Safe Online | `#cybersecurity` | Digital self-protection education for individuals |
| Our Process | `#process` | 5-step delivery process |
| Training | `#training` | Public cybersecurity training courses |
| Get Started | `#contact` | CTA section linking to services and training |
| Footer | — | Navigation links and copyright |

---

## 🛠️ Technology Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties (variables), Flexbox, CSS Grid, responsive media queries
- **Vanilla JavaScript** — mobile menu toggle, active nav highlighting on scroll
- **Google Fonts** — Inter (body) + Playfair Display (headings)
- No frameworks, no build tools, no dependencies

---

## 🎨 Design

| Token | Value |
|---|---|
| Primary Navy | `#0a1f44` |
| Primary Blue | `#1657c5` |
| Light Blue | `#2d6fe8` |
| Sky (tint) | `#e8f0fd` |
| Background | `#ffffff` |
| Body Font | Inter |
| Heading Font | Playfair Display |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 1024px` | Full desktop layout — 2-column hero, 3-column services grid |
| `≤ 1024px` | Tablet — stacked hero, 2-column services, single-column training |
| `≤ 768px` | Mobile — hamburger nav, single-column everything |
| `≤ 480px` | Small mobile — reduced font sizes, compact padding |

---

## ♿ Accessibility

- **Skip-to-content link** for keyboard and screen reader users
- All interactive elements have visible **focus rings**
- `aria-label`, `aria-expanded`, `aria-hidden`, `aria-current`, `aria-live` used throughout
- Minimum **48px touch targets** on all buttons and inputs
- Semantic HTML: `<main>`, `<nav>`, `<footer>`, `<article>`, `<ol>`, `<address>`
- Mobile menu closes on **Escape key** press

---

## 🔍 SEO

The following SEO features are built in:

- **`<title>`** and **`<meta name="description">`** tags
- **Open Graph tags** — rich previews on LinkedIn, Facebook, WhatsApp
- **Twitter/X Card** — large image card format
- **JSON-LD Structured Data** — `ProfessionalService` schema for Google rich results
- **Canonical URL** tag
- Google Fonts loaded with `rel="preconnect"` for performance

### To update SEO for your domain:
1. Open `index.html`
2. Replace all instances of `https://www.nexcore.tech` with your actual domain
3. Replace `@NexCoreTech` with your actual Twitter/X handle
4. Update the `og:image` URL to point to a real 1200×630 image hosted on your server

---

## ✏️ Customisation Guide

### Change the Business Name
Search and replace `NexCore` / `NexCore Technologies` throughout `index.html`.

### Change Colours
Edit the CSS variables at the top of the `<style>` block:
```css
:root {
  --navy:    #0a1f44;   /* dark navy — headings, footer */
  --blue:    #1657c5;   /* primary blue — buttons, accents */
  --blue-lt: #2d6fe8;   /* lighter blue — gradients */
  --sky:     #e8f0fd;   /* very light blue — card backgrounds */
}
```

### Add/Edit Services
Find the `<!-- SERVICES -->` section in `index.html`. Each service is an `<article class="svc-card">`. Copy any existing card and update the icon emoji, heading, description, and tag pills.

### Add/Edit Training Courses
Find the `<!-- TRAINING -->` section. Each course is an `<li class="course-item">`. Available badge classes:
- `.beg` — green, Beginner
- `.int` — yellow, Intermediate
- `.adv` — red, Advanced
- `.all` — blue, All Levels

### Update Navigation Links
The navigation appears in three places:
1. Desktop nav — `<ul class="nav-links">`
2. Mobile drawer — `<nav id="mobileMenu">`
3. Footer — `<nav class="footer-links">`

Update all three when adding new sections.




## 📄 License

This website was custom-built for NexCore Technologies. All rights reserved © 2026 NexCore Technologies.
