# FlowPilot — Less chaos. More momentum.

FlowPilot is a premium SaaS landing website for a fictional productivity
platform that helps teams manage projects, organise tasks, collaborate and
track performance from one workspace.

This is a **front-end demonstration website**. There is no backend, no
account system and no payment processing. Pricing, product screenshots and
contact details are illustrative and labelled as such on the site.

## Features

- **Sticky navigation** with mobile hamburger menu and an honest
  "sign-in is not available in this demo" notice instead of fake auth.
- **Hero with a realistic product dashboard** built entirely in HTML/CSS —
  sidebar, project KPIs, task list, progress bar and team activity feed.
- **Product overview** in an editorial split layout explaining the problem
  FlowPilot solves (no card grid).
- **Six features, six distinct visual treatments** — mini kanban board,
  ranked priority list, comment thread, progress bars, Gantt timeline and
  insight rows with sparklines.
- **How It Works** — a clean three-step process on a dark navy section.
- **Product showcase** with working Board / Timeline / Insights tabs.
- **Pricing** — Free / Pro / Team with a working monthly–yearly toggle
  (yearly saves ~17%, labelled as proposed demo pricing).
- **FAQ accordion** — six realistic questions, keyboard accessible.
- **Contact / Get Started form** with frontend validation, inline errors
  and a success state. Honest note: submissions are not sent anywhere.
- **Footer** with a clearly labelled demo email (`hello@flowpilot.demo`).
  No invented social links.

## Technology stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 + Vite 8 |
| Language | JavaScript (JSX) |
| Styling | Custom CSS (`src/index.css`, no CSS framework) |
| Icons | `lucide-react` (the only extra dependency) |
| Fonts | Inter + Fraunces via Google Fonts, with system fallbacks |

## Folder structure

```
flowpilot/
├── index.html                 # Title, meta description, font links
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Page composition
    ├── index.css              # Full design system (~1,000 lines)
    └── components/
        ├── Navbar.jsx         # Sticky nav, mobile menu, sign-in notice
        ├── Hero.jsx           # Headline, CTAs, hero trust notes
        ├── DashboardPreview.jsx # CSS-built product dashboard
        ├── Overview.jsx       # Editorial problem/solution section
        ├── Features.jsx       # Six features, distinct visuals
        ├── HowItWorks.jsx     # Three-step process
        ├── Showcase.jsx       # Tabbed product views
        ├── Pricing.jsx        # Plans + billing toggle
        ├── Faq.jsx            # Accessible accordion
        ├── ContactForm.jsx    # Validated demo form
        └── Footer.jsx         # Brand, links, demo contact
```

## Installation

```bash
npm install
```

Requires Node.js 18+.

## Local development

```bash
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). Hot module
replacement is enabled.

## Production build

```bash
npm run build
npm run preview   # serves the production build locally for a final check
```

## Design decisions

- **Palette:** warm off-white paper (`#faf8f3`), deep navy ink (`#0f1b2d`),
  one restrained lime accent (`#9be515` / `#65a30d`) used sparingly for
  emphasis and success states. No gradients, no glassmorphism, no glow.
- **Typography:** Fraunces (serif display) for headlines gives the site an
  editorial voice; Inter handles UI and body copy. Clear hierarchy through
  size and weight, not decoration.
- **Layout:** asymmetric editorial sections, generous whitespace, hairline
  dividers and numbered rows instead of repeating rounded-card grids.
  Dark navy is reserved for the "How it works" section and the footer so
  the page has rhythm without decoration overload.
- **Honesty-first copy:** no fake testimonials, customer logos, statistics
  or integrations. Workspace data inside the product previews is labelled
  as illustrative. Pricing is labelled as proposed/demo pricing, the form
  says it sends nothing, and sign-in says it is unavailable.
- **Accessibility:** semantic landmarks, skip link, labelled form fields
  with `aria-invalid`/`aria-describedby`, `aria-expanded` on the menu and
  accordion, `role="switch"` on the billing toggle, focus-visible outlines,
  and `prefers-reduced-motion` support.

## Known limitations

- Demo only: no backend, authentication, payments, or data persistence.
  The contact form validates locally and stores nothing.
- Product previews are static CSS mock-ups with illustrative data, not a
  working app.
- Analytics, SEO verification files and a real contact inbox are not
  included.
- Fonts load from Google Fonts; if offline, the system font stack applies.

## Deployment

The production output is a static site (`dist/` after `npm run build`).

- **GitHub Pages (live):** deployed automatically by
  `.github/workflows/deploy.yml` on every push to `main` — build with
  `npm ci` + `npm run build`, then publish `dist/` via the
  `deploy-pages` action. One-time setup: repo Settings → Pages → Build
  and deployment → Source: **GitHub Actions**. Live URL:
  https://sudhanshupandey1234.github.io/FlowPilot/
  (Vite `base` is set to `/FlowPilot/` so assets resolve under the
  project-page path.)
- **Vercel:** import the repository, framework preset "Vite", build command
  `npm run build`, output directory `dist`.
- **Netlify:** same settings, or drag the `dist/` folder onto Netlify Drop.

## License

Demo project — free to use and adapt.
