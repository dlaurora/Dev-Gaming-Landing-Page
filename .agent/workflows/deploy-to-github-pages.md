---
description: How to deploy the Neon Horizon landing page to GitHub Pages
---

# Deploying to GitHub Pages

Since this is a Vite + React project, it requires a **build step** before it can be hosted. You cannot simply point GitHub Pages to your source code branch.

## 1. The Deployment Process

We have configured a script that does the following:
1.  Builds the project (creates a `dist` folder with optimized HTML/CSS/JS).
2.  Adds a `.nojekyll` file (to prevent 404 errors).
3.  Pushes **only the `dist` folder** to a special branch called `gh-pages`.

## 2. How to Deploy

Run this command in your terminal whenever you want to update the live site:

```bash
npm run deploy
```

*Note: This will ask for your GitHub credentials if they aren't cached.*

## 3. Configuring GitHub Settings (CRITICAL)

For the site to work, you must tell GitHub to serve the site from the `gh-pages` branch, NOT your main or test branch.

1.  Go to your GitHub Repository.
2.  Click **Settings** (top right tab).
3.  Click **Pages** (left sidebar).
4.  Under **Build and deployment**:
    *   **Source**: Select `Deploy from a branch`.
    *   **Branch**: Select `gh-pages` from the dropdown.
    *   **Folder**: Select `/ (root)`.
5.  Click **Save**.

## 4. Troubleshooting 404s

If you still see a 404:
1.  **Wait**: It can take 1-2 minutes for GitHub to update.
2.  **Hard Refresh**: Press `Cmd + Shift + R` (Mac) or `Ctrl + F5` (Windows).
3.  **Check URL**: Ensure you are visiting `https://dlaurora.github.io/Dev-Gaming-Landing-Page/`.
