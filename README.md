# Shivansh Soni — Portfolio

A cinematic personal portfolio built with Next.js, TypeScript, and Motion for React.

## Run locally

1. Install Node.js 20.9 or newer.
2. In this folder, run `npm install`.
3. Run `npm run dev` and open [http://localhost:3000](http://localhost:3000).

## Make it yours

- Edit project cards and capability tags in `src/app/page.tsx`.
- Replace the contact email (`hello@shivanshsoni.dev`) with the address you want to publish.
- Add social links, a real resume, and richer project details when ready.
- Update the title and description in `src/app/layout.tsx`.

## Deploy using only GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set the publishing source to **GitHub Actions**.
3. The included workflow builds the static site and publishes it. After its first successful run, the Pages settings will show the live URL. Future pushes to `main` publish updates automatically.

The workflow handles GitHub Pages' repository subpath automatically. An account site named `yourname.github.io` is served at the domain root; other repositories are served beneath `/<repository-name>`.

This is a static site, which suits this portfolio. Server-side Next.js features such as API routes, server actions, or request-time rendering need a server host; the portfolio would need another host if we add those later.

The current copy is a starter draft. Review project descriptions, links, and contact details before publishing.
