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
- Pushing a `v*` tag deploys that release to prod.
- **Run workflow** deploys any branch or tag to dev, or a release tag to prod, which is how to roll back.

Prod refuses to deploy anything but a tag that equals `v` plus the `version` in `package.json`. GitHub and AWS enforce the same: each deploy runs in the GitHub environment `dev` or `production`, `production` only accepts `v*` tags, and each deploy role in the infra repo only trusts its own environment. Both environments are set up in the repository settings.

The workflow relies on the infra repo's stack names (`FrontendStackDev`, `FrontendStackProd`), their `DistributionId` output and the `erik-weihs-website-<env>` buckets. It assumes the `erik-weihs-website-deploy-<env>` roles, which trust this repo by its numeric GitHub ID.

`/version.txt` shows what an environment runs: the tag in prod, the commit in dev and `local` in a local build.

## Releases

Follow the shared release guideline. For this site:

1. Merge to `main`; the push deploys it to dev.
2. Check the dev site, and that `https://dev.erikweihs.com/version.txt` shows the commit. There is no `test:e2e`, because the site has no backend. Run `test:visual` on that commit against a baseline from the previous release.
3. On that commit of `main`, run `npm version <major|minor|patch> -m "chore(release): %s"`. Its `postversion` script runs `git push --follow-tags`, which pushes the release commit and the tag. A person does this: the tag is the decision to release.
4. The tag push deploys to prod. Check that `https://erikweihs.com/version.txt` shows the tag.
5. Create the GitHub release with `gh release create "v$(node -p "require('./package.json').version")" --verify-tag --generate-notes`, and edit the notes into Features and Fixes.

To roll back, run the Deploy workflow from the previous tag with `prod`, then fix forward with a new patch release.

## Checks

`npm run check` runs `typecheck`, `lint`, `lint:unused`, `format:check` and `test:integration`. There is no pure logic worth a unit test, so there is no `test:unit` script.

The Playwright tests run in Chromium against the static export, not the dev server: the `webServer` in `playwright.config.ts` runs `npm run build` and serves `out/` with `tests/serve-out.mjs`, which copies the CloudFront viewer-request rewrite (an extensionless path gets `/index.html`, except the image routes) and answers a missing file with `404.html` and a 404 status. Keep it in step with the infra repo's function.

- `tests/integration/` covers the home page sections, the skip link, the 404 page, `robots.txt`, `sitemap.xml`, and that `/opengraph-image` and `/logo` are exported as extensionless PNG files (see above)
- `tests/visual/` screenshots the home and 404 pages at 375px and 1440px. The baseline is local and not committed: run `test:visual:update` on `main`, then `test:visual` on the branch

## High-Risk Paths

Treat changes to these as high risk in a pull request:

- `.github/workflows/`, especially `deploy.yml`, which decides what reaches prod
- `.claude/settings.json`
- `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `knip.config.js`
- `app/layout.tsx`, which loads the analytics script

## AWS Access for Claude Code

Use the `erikweihs-claude-readonly` profile for read-only checks: CloudFormation stack status, CloudWatch logs, CloudFront distributions and invalidations, and listing the site buckets. It can't read IAM or bucket contents.
