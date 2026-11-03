# Project Guidelines

## Overview

Erik Weihs's personal site at https://erikweihs.com: a single page with a hero, About, Selected work, Career and Outside work sections and a contact footer, a 404 page, and generated icons and social images. There is no backend; everything is built at deploy time.

## Tech Stack

- Next.js 16 (App Router) with `output: "export"`: `next build` writes a static site to `out/`
- TypeScript, with the `@/*` path alias pointing at the project root (there is no `src/`)
- Tailwind CSS v4

## Structure

- `app/` holds the routes, plus `opengraph-image.tsx` and `logo/route.tsx`, which generate images at build time
- `app/favicon.ico`, `app/icon.png` and `app/apple-icon.png` are static files, committed as they are
- `components/` holds the page sections

The AWS infrastructure lives in the private repo `eweihs/erikweihs-shared-infra`, checked out at `~/work/erikweihs/erikweihs-shared-infra`. Its README lists what this repo depends on.

## Styling

Brand tokens are in the `@theme` block of `app/globals.css`: `paper`, `ink` and `amber` shades, plus `border`. Use them through Tailwind utilities such as `text-ink-muted` and `bg-paper-dark`.

## Static Export on CloudFront

The static export makes `/opengraph-image` and `/logo` extensionless PNG files. Two places depend on that list:

1. The deploy workflow re-uploads them with `content-type: image/png`
2. The viewer-request function in `lib/frontend-stack.ts` in the infra repo doesn't rewrite them to `index.html`

Adding another generated image route means updating both, and deploying the infra change first.

## Environments

The build reads `ENV` (`dev` or `prod`). Umami analytics is only included when `ENV=prod`.

- Dev: https://dev.erikweihs.com, behind basic auth and `noindex`
- Prod: https://erikweihs.com, with `www.erikweihs.com` and `erik.weihs.nl` redirecting to it

## Deployment

Deploys only run in GitHub Actions, in `.github/workflows/deploy.yml`:

- Every push to `main` deploys to dev.
- **Run workflow** deploys any branch to dev, or `main` to prod.

The workflow relies on the infra repo's stack names (`FrontendStackDev`, `FrontendStackProd`), their `DistributionId` output and the `erik-weihs-website-<env>` buckets. It assumes the `erik-weihs-website-deploy-<env>` roles, which trust this repo by its numeric GitHub ID.

## AWS Access for Claude Code

Use the `erikweihs-claude-readonly` profile for read-only checks: CloudFormation stack status, CloudWatch logs, CloudFront distributions and invalidations, and listing the site buckets. It can't read IAM or bucket contents.
