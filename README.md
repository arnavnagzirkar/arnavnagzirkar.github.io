# arnavnagzirkar.github.io

This project contains your portfolio website, scaffolded to run with Vite + React + Tailwind CSS.

## Run locally

- Dev server
  - Starts a local server with hot reload at http://localhost:5173

```
npm run dev --prefix "c:\\Users\\arnav\\OneDrive\\Desktop\\Website\\arnavnagzirkar.github.io"
```

- Production build

```
npm run build --prefix "c:\\Users\\arnav\\OneDrive\\Desktop\\Website\\arnavnagzirkar.github.io"
```

- Preview production build

```
npm run preview --prefix "c:\\Users\\arnav\\OneDrive\\Desktop\\Website\\arnavnagzirkar.github.io"
```

## Notes

- The Figma export used versioned import specifiers like `@radix-ui/react-slot@1.1.2`. The Vite config includes a small resolver that strips version suffixes at build time. If you want full TypeScript type-checking in-editor without errors, we can bulk-update imports to the unversioned package names.
- Tailwind is configured to use CSS variables defined in `styles/globals.css` for colors (background, foreground, primary, etc.).

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml` that builds on every push to `main` and deploys to GitHub Pages.

- In your GitHub repository settings, under Pages, set the "Build and deployment" Source to "GitHub Actions".
- After pushing, wait for the `Deploy to GitHub Pages` workflow to complete. Your site will be available at: https://arnavnagzirkar.github.io/
