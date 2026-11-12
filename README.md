# erikweihs.com

The source of my personal website, [erikweihs.com](https://erikweihs.com): a single page about my work as a solution architect and engineering lead, and what I do outside of it.

It is a small site, but it is built and deployed the way I would set up a production frontend: a static Next.js export on S3 and CloudFront, deployed from GitHub Actions without stored AWS keys.

## How It's Built

- **[Next.js 16](https://nextjs.org/)** with the App Router and `output: "export"`, so `next build` produces plain static files in `out/`
- **TypeScript** and **[Tailwind CSS v4](https://tailwindcss.com/)**, with the brand colours as theme tokens in `app/globals.css`
- **Generated images**: the Open Graph image and logo are rendered at build time from `app/opengraph-image.tsx` and `app/logo/route.tsx`
- **Shared standards**: lint, dead-code, formatting and TypeScript settings, plus the CI check, come from [`@eweihs/engineering-standards`](https://github.com/eweihs/engineering-standards)
- **Privacy-friendly analytics** with [Umami](https://umami.is/), only in the production build

```txt
app/          routes, layout, metadata, icons and generated images
components/   the page sections, from the hero to the contact footer
public/       photos
```

## Development

Requires Node.js 20.9 or later; the deploy workflow uses Node.js 24.

```bash
npm ci
npm run dev
```

| Command                | What it does                                |
| ---------------------- | ------------------------------------------- |
| `npm run build`        | Builds the static site into `out/`          |
| `npm run check`        | Runs every check below; CI runs it on PRs   |
| `npm run typecheck`    | Type-checks with `tsc`                      |
| `npm run lint`         | Lints with the shared Next.js ESLint preset |
| `npm run lint:unused`  | Finds unused files, exports and deps (knip) |
| `npm run format`       | Formats with Prettier                       |
| `npm run format:check` | Checks formatting without changing files    |

Set `ENV=prod` when building to include analytics, as production deploys do.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site, uploads it to S3 and invalidates the CloudFront cache.

- Every push to `main` deploys to a password-protected dev site.
- **Run workflow** in the Actions tab deploys any branch to dev, or `main` to production.
- The workflow signs in to AWS with GitHub's OIDC tokens, so no AWS credentials are stored in GitHub. The only setting it needs is the repository variable `AWS_ACCOUNT_ID`.

The AWS infrastructure (S3, CloudFront, certificates and the deploy roles) is defined with CDK in a separate private repository.

## License

The code is licensed under the [MIT License](LICENSE).

The content is not: the text, the photos in `public/`, and the logo, icons and Open Graph image are © Erik Weihs, all rights reserved. The fonts in `app/fonts/` (DM Sans and Fraunces) are under their own [SIL Open Font License](https://openfontlicense.org/).
