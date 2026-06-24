Deployment steps for GitHub Pages (gh-pages)

1. Ensure you're logged into Git and have remote origin pointing to your GitHub repo.
2. Install deps and build + deploy with gh-pages (this project already includes gh-pages):

# from project root (PowerShell or cmd)
pnpm install
pnpm run deploy

3. The script runs `vite build` and `gh-pages -d dist`, publishing the `dist` folder to the gh-pages branch.

Notes:
- We switched to `HashRouter` so client-side routes won't 404 on GitHub Pages.
- If you prefer a different domain/path, update `homepage` in `package.json` accordingly.
- If `pnpm run deploy` fails due to gh-pages authentication, push the built `dist` folder manually or enable GitHub Actions deployment.
