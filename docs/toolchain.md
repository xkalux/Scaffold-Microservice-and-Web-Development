# Toolchain and version record

**Checked against public release/package metadata:** 2026-10-07  
**Bun install and dependency-resolution test:** Bun 1.4.2 installed each package from its own frozen lockfile after removing generated dependencies on 2026-10-07.  
**Stable status:** Pins below match the latest stable releases checked on this date except where a documented compatibility constraint requires an older compatible TypeScript line. Command results and the Svelte CLI DNS blocker are recorded in `docs/handoff.md`.

## Selected pins

| Tool/package | Pin | Latest stable checked | Source / note |
|---|---:|---:|---|
| Bun | 1.4.2 | 1.4.2 | [Bun](https://bun.com/); [Bun 1.4 release notes](https://bun.com/blog/bun-v1.4) |
| Elysia | 1.4.30 | 1.4.30 | [Elysia releases](https://github.com/elysiajs/elysia/releases); the 2.x line is prerelease |
| Drizzle ORM | 0.45.3 | 0.45.3 | [Drizzle ORM releases](https://github.com/drizzle-team/drizzle-orm/releases); 1.0 remains RC |
| Drizzle Kit | 0.31.11 | 0.31.11 | [npm package versions](https://www.npmjs.com/package/drizzle-kit?activeTab=versions); 1.0 remains RC |
| TypeScript | 6.0.2 (both packages) | 7.0.2 | [TypeScript 6 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html); 7.0.2 is the newest stable line, but SvelteKit 3 declares the 6.x line as its TypeScript peer range |
| ESLint | 10.12.0 | 10.12.0 | [ESLint release notes](https://eslint.org/blog/2026/10/eslint-v10.12.0-released/) |
| `@eslint/js` | 10.0.1 | 10.0.1 | Package version is independent of ESLint's; verified from the npm registry with Bun on 2026-10-07 |
| typescript-eslint | 8.71.1 | 8.71.1 | [typescript-eslint releases](https://github.com/typescript-eslint/typescript-eslint/releases) |
| SvelteKit | 3.0.1 | 3.0.1 | [SvelteKit releases](https://github.com/sveltejs/kit/releases); released 2026-10-06 |
| Svelte | 5.57.2 | 5.57.2 | [Svelte package](https://www.npmjs.com/package/svelte) |
| Vite | 8.3.3 | 8.3.3 | [Vite package](https://www.npmjs.com/package/vite); SvelteKit 3 requires at least 8.0.12 |
| `@sveltejs/vite-plugin-svelte` | 7.3.1 | 7.3.1 | [Svelte Vite plugin](https://www.npmjs.com/package/@sveltejs/vite-plugin-svelte) |
| `@sveltejs/adapter-auto` | 8.0.0 | 8.0.0 | [Svelte adapter releases](https://github.com/sveltejs/kit/releases) |
| Tailwind CSS | 4.3.3 | 4.3.3 | [Tailwind v4.3 release](https://tailwindcss.com/blog/tailwindcss-v4-3) |
| `@tailwindcss/vite` | 4.3.3 | 4.3.3 | [Tailwind Vite package](https://www.npmjs.com/package/@tailwindcss/vite) |
| `eslint-plugin-svelte` | 3.23.0 | 3.23.0 | [Svelte ESLint plugin](https://www.npmjs.com/package/eslint-plugin-svelte) |
| `@types/bun` | 1.4.2 | 1.4.2 | [Bun types package](https://www.npmjs.com/package/@types/bun) |
| `svelte-check` | 4.7.6 | 4.7.6 | [svelte-check package](https://www.npmjs.com/package/svelte-check) |
| `@playwright/test` (Web only) | 1.64.0 | 1.64.0 (checked 2026-10-09) | [Package metadata](https://registry.npmjs.org/@playwright/test/1.64.0); clean frozen install and 3 Chromium E2E tests passed with portable Linux libraries; see `docs/handoff.md` |
| Svelte documentation/autofixer CLI | `@sveltejs/mcp` 0.1.26 via `bunx` | 0.1.26 | [Svelte AI tools releases](https://github.com/sveltejs/ai-tools/releases); the exact commands resolve the package but its docs/autofixer request is blocked by runtime DNS to `svelte.dev` (see handoff) |

## Compatibility notes

- SvelteKit 3 removes `svelte.config.js`; configuration belongs in `vite.config.ts` through `sveltekit()`. Its current migration guide requires Node 22.17+, TypeScript 6, Svelte 5.57.1+, Vite 8.0.12+, and `@sveltejs/vite-plugin-svelte` 7+. The package uses Bun 1.4.2 as the requested runtime/package manager; its install, typecheck, lint, and production build are tested in the handoff record.
- SvelteKit 3 replaces the generated `$lib` alias with `#lib` configured through package imports. Avoid `$lib` in new code.
- Each course has its own Bun-generated `bun.lock`; do not hand-author or combine lockfiles.
- `typescript@7.0.2` is latest stable as of the check date, but the scaffold pins `6.0.2` because SvelteKit 3's published peer range is `^6.0.0`. Keep the shared TypeScript major aligned across the two packages during the term.
- Fresh frozen-lockfile installs passed with `bun install --frozen-lockfile` in each package. Microservices `bun run check` passed (lint, typecheck, 1 test); Drizzle generation/migration/seed passed on a fresh temporary database. Web `bun run check` passed (lint, Svelte check with 0 errors and 0 warnings, production build). See `docs/handoff.md` for complete commands and the separate AI-skill tool limitation.

## Update policy

The instructor requested Playwright E2E setup for Web on 2026-10-09. Add only exact `@playwright/test@1.64.0` to Web, preserving existing dependency pins and using its Bun-generated lockfile. The package declares Node >=20; this environment has Node 24.12.0. Use Bun 1.4.2 for package commands and install the matching Chromium build with the local Playwright CLI. See [testing.md](testing.md) for the workflow and [handoff.md](handoff.md) for actual results. This authorization does not change Microservices dependencies.

Keep stable versions pinned for a teaching term. Before changing one, compare the current release with this record, review official breaking changes/security notes, test the clean install and all relevant checks, then update both the package manifest/lockfile and this document in an instructor-reviewed change.
