Term Results Portal — Local Hosting

This folder contains the static site `index (12).html` for the Term Results Portal.

Quick ways to serve the site locally (choose one):

1) Python 3 (recommended, zero dependencies):

```bash
python -m http.server 8000 --directory .
```

Open http://localhost:8000 and the server will serve `index (12).html`.

2) Node.js (if you prefer Node):

```bash
node server.js 8000
```

3) Windows convenience scripts:

- Run `serve.bat` from PowerShell or CMD: `serve.bat`
- Run `serve.ps1` from PowerShell: `.\serve.ps1`

Notes:
- If you want this site publicly accessible, I can help deploy to GitHub Pages, Netlify, or Vercel (requires a repo/account).
- The built-in Node server uses `index (12).html` as the default index file.

Publish to GitHub Pages (automatic via Actions):

1. Create a new GitHub repository (empty) under your account.
2. From this folder, run:

```bash
git init
git add .
git commit -m "Initial commit: Term Results Portal"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

3. The included GitHub Actions workflow `.github/workflows/deploy-to-pages.yml` will upload the repository root and publish it to GitHub Pages automatically after the push.

Notes about other options:
- Netlify: log into Netlify, "New site from Git", connect the GitHub repo and deploy (or drag-and-drop the folder in Netlify's Deploys page).
- Vercel: install the Vercel CLI or connect the GitHub repo in the Vercel dashboard; it will detect and deploy static sites automatically.

If you want, I can create the GitHub repo for you and push the code — you'll need to provide a repository URL or grant access (I cannot authenticate for you). Tell me whether to prepare the remote commands or proceed with manual instructions.
