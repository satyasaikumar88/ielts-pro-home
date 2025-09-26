# IELTS Pro Institute – React + Tailwind Homepage

A modern, responsive homepage for a fictional IELTS institute built with React (Vite) and Tailwind CSS.

## Setup

1. Install dependencies
```
npm install
```

2. Start the dev server
```
npm run dev
```

3. Build for production
```
npm run build
```

## Tech & Structure
- React 18 + Vite for fast dev and builds
- Tailwind CSS for utility-first, consistent styling
- Component-based structure under `src/components/`
  - `Navbar.jsx`
  - `Hero.jsx`
  - `Features.jsx`
  - `Testimonials.jsx`
  - `Footer.jsx`

## Design Choices
- Clean, professional look with strong typography (`Inter`) and brand teal accent.
- Clear visual hierarchy: bold hero, concise features, social proof via testimonials.
- Responsive grid and spacing scale: fully mobile-first with accessible tap targets and readable line lengths.
- Subtle depth using soft shadows and low-contrast borders to keep it modern.

## What to Evaluate
- UI polish and consistency (spacing, colors, hover states)
- Responsiveness (navbar collapse, grid layouts)
- Code clarity (small components, meaningful class names, minimal complexity)

## Deploy
You can deploy to any static host (e.g., Netlify, Vercel):
```
npm run build
```
Upload the `dist/` folder.

## GitHub
Initialize a repository and push:
```
git init
git add .
git commit -m "feat: IELTS Pro homepage (React + Tailwind)"
# Create a new repo on GitHub and follow their instructions, e.g.:
# git remote add origin https://github.com/<your-username>/ielts-pro-home.git
# git branch -M main
# git push -u origin main
```

