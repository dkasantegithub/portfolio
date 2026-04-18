# David's Portfolio — React + Tailwind CSS

A professional developer portfolio built with React, Tailwind CSS v4, and Framer Motion.

## Stack
- **React 19** via Vite
- **Tailwind CSS v4** (Vite plugin)
- **Framer Motion** — scroll animations & transitions
- **React Icons** — tech stack icons

## Getting Started

```bash
npm install
npm run dev    # dev server at http://localhost:5173
npm run build  # production build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx    ← fixed nav with scroll blur effect
│   ├── Hero.jsx      ← landing with animated headline + CTAs
│   ├── About.jsx     ← bio, stats, photo placeholder
│   ├── Skills.jsx    ← tech stack grouped by category
│   ├── Projects.jsx  ← project cards with hover effects
│   ├── Contact.jsx   ← contact form (connect EmailJS)
│   └── Footer.jsx    ← footer with social links
├── data/
│   └── projects.js   ← edit your projects & skills here
├── assets/           ← put your photo + CV PDF here
├── App.jsx
└── main.jsx
```

## Customisation Checklist

- [ ] `src/data/projects.js` — add real projects + GitHub/live links
- [ ] `src/components/About.jsx` — replace photo placeholder with your `<img>`
- [ ] `src/components/Hero.jsx` — update name, tagline, stack pills
- [ ] `src/components/Footer.jsx` — update GitHub, LinkedIn, email
- [ ] `src/components/Navbar.jsx` — update logo text
- [ ] `public/cv.pdf` — add your CV
- [ ] `src/components/Contact.jsx` — connect EmailJS (see .env.example)

## Contact Form — EmailJS Setup

1. Sign up at https://emailjs.com (free tier works)
2. Get your Service ID, Template ID, Public Key
3. Copy `.env.example` to `.env` and fill in values
4. Install: `npm install @emailjs/browser`
5. Uncomment the emailjs.send() call in Contact.jsx

## Deploy to Vercel

Push to GitHub → connect repo at vercel.com → done.
Auto-deploys on every push to main.

## Design Tokens

| Token           | Value      | Used For              |
|-----------------|------------|-----------------------|
| --accent        | #00E5A0    | CTAs, highlights      |
| --font-display  | Syne       | Headings, labels      |
| --font-body     | DM Sans    | Body text             |
| Background      | #080c10    | Page background       |
