# CLAUDE.md

General rules come from the shared standards package (`@eweihs/engineering-standards`). Project-specific facts live in `.claude/guidelines/project.md`.

Before making changes, read:

1. `.claude/guidelines/project.md`
2. `node_modules/@eweihs/engineering-standards/guidelines/general.md`
3. `node_modules/@eweihs/engineering-standards/guidelines/git.md`
4. `node_modules/@eweihs/engineering-standards/guidelines/files.md`
5. `node_modules/@eweihs/engineering-standards/guidelines/components.md`
6. `node_modules/@eweihs/engineering-standards/guidelines/hooks.md`
7. `node_modules/@eweihs/engineering-standards/guidelines/styling.md`

Run `npm ci` first if `node_modules` is missing.

Before committing, run `npm run lint`, `npm run format:check` and `npx tsc --noEmit`.
