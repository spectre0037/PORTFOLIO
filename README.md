# Abdullah Bin Zubair Portfolio

A premium, cinematic AI developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, GSAP, Lenis, Lucide, and React Three Fiber.

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- GSAP ScrollTrigger
- Lenis smooth scrolling
- React Three Fiber
- Lucide React icons

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` handles layout, navigation, theme toggle, command palette, and page composition.
- `src/data/portfolio.js` holds the portfolio content and reusable section data.
- `src/components/sections/` contains each portfolio section as a reusable component.
- `src/components/ui/` contains shared UI primitives.
- `src/components/ThreeHeroScene.jsx` provides the subtle 3D hero background.
- `src/styles.css` defines the visual system, glass surfaces, gradients, and texture.

## Deployment

### Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use the default build command: `npm run build`.
4. Use the output directory: `dist`.

### Netlify

1. Push this project to GitHub.
2. Create a new site from the repository.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist`.

## Notes

- The portfolio is intentionally motion-heavy but structured to stay responsive.
- CTA links, social links, and resume/download actions can be connected to real assets or profiles as needed.
- The design uses dark-first glassmorphism with optional light mode support.
