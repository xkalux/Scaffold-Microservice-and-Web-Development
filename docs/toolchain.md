# Toolchain and pinned versions

**Owner:** Instructor

**Manifest/configuration review:** 2026-10-09

**Official compatibility documentation review:** 2026-10-09

**Runtime tests during this documentation change:** Not run; manifests, lockfiles and source are unchanged.

**Latest-stable comparison:** Not reverified in this documentation change. The table records repository pins, not a claim that every pin is the latest release.

## Prerequisites

Use **Bun 1.4.2** as the only package manager. Each course has its own `package.json` and `bun.lock`; there is no root package or workspace. Install from the relevant course folder with `bun install --frozen-lockfile`. A failure is a setup blocker, not permission to regenerate the lock.

The [SvelteKit 3 migration guide](https://svelte.dev/docs/kit/migrating-to-sveltekit-3) specifies Node.js **22.17+**, TypeScript 6, Svelte 5.57.1+, Vite 8.0.12+, and the Svelte Vite plugin 7+. The manifests below meet those version minima. They do not declare an `engines` field; the Node prerequisite is documented rather than enforced by that field.

Bun is the package manager, while [bunx](https://bun.com/docs/pm/bunx) can honor a tool's Node shebang. Keep a compatible Node installation available for the Web toolchain. `bunx --bun` forces Bun for the external Svelte helper workflow. Playwright additionally requires browser binaries matching its installed version and operating-system libraries; see [testing](testing.md).

## Manifest pins

| Package | Microservices | Web |
|---|---|---|
| `@eslint/js` | 10.0.1 | 10.0.1 |
| `@playwright/test` | — | 1.64.0 |
| `@sveltejs/adapter-auto` | — | 8.0.0 |
| `@sveltejs/kit` | — | 3.0.1 |
| `@sveltejs/vite-plugin-svelte` | — | 7.3.1 |
| `@tailwindcss/vite` | — | 4.3.3 |
| `@types/bun` | 1.4.2 | 1.4.2 |
| `drizzle-kit` | 0.31.11 | — |
| `drizzle-orm` | 0.45.3 | — |
| `elysia` | 1.4.30 | — |
| `eslint` | 10.12.0 | 10.12.0 |
| `eslint-plugin-svelte` | — | 3.23.0 |
| `svelte` | — | 5.57.2 |
| `svelte-check` | — | 4.7.6 |
| `tailwindcss` | — | 4.3.3 |
| `typescript` | 6.0.2 | 6.0.2 |
| `typescript-eslint` | 8.71.1 | 8.71.1 |
| `vite` | — | 8.3.3 |

Both manifests declare `packageManager: bun@1.4.2`. Exact transitive resolutions belong to each package's checked-in lockfile; do not hand-edit or combine lockfiles.

The external documentation/autofixer helper uses `@sveltejs/mcp@0.1.26` via Bun. It is not a course dependency and is not in either Bun lockfile. [AI skills](ai-skills.md) describes its scope and unexecuted workflow status. [skills-lock.json](../skills-lock.json) records copied skill sources and hashes separately.

## Configuration facts

SvelteKit is configured with `sveltekit({ adapter: adapter() })` in [web/vite.config.ts](../web/vite.config.ts), alongside the Tailwind Vite plugin. Do not add legacy `svelte.config.js` guidance. The current Web manifest has no `imports` alias: use relative imports. An authorized `#lib` alias needs an explicit package-imports entry and verification.

Microservices uses `drizzle-orm/bun-sqlite` with `bun:sqlite`. Both packages use ESLint flat configuration. The Web `check` script includes lint, type checking, production build and Playwright; added business rule tests must also run separately as described in [testing](testing.md).

## Retained execution evidence

[The Web starter result](../verification/runs/2026-10-09-web-e2e-setup/result.json) records a 2026-10-09 Web check with three passing Chromium tests, plus setup failures and limitations. It applies to the files and host recorded there; it does not prove a new checkout, skill discovery, Microservices, or external lesson examples passed. Its temporary paths are evidence, not reusable setup instructions.

## Version changes

Keep the term's pins stable. An instructor-authorized dependency or tool update must record the affected package, previous/proposed version, release-check date, official release/security sources, stable status, breaking changes and compatibility rationale. Compare against latest stable at that time; do not silently replace a pin with a prerelease.

Test a clean frozen install and relevant lint/type/unit/integration/build/E2E gates in the target environment. Record the separate test date, exact commands, actual results and evidence. Update the manifest, Bun-generated lockfile and this record together only after the required review; do not present an untested change as approved.

Release sources: [Bun](https://github.com/oven-sh/bun/releases), [Elysia](https://github.com/elysiajs/elysia/releases), [Drizzle](https://github.com/drizzle-team/drizzle-orm/releases), [TypeScript](https://github.com/microsoft/TypeScript/releases), [ESLint](https://github.com/eslint/eslint/releases), [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/releases), [SvelteKit/adapters](https://github.com/sveltejs/kit/releases), [Svelte](https://github.com/sveltejs/svelte/releases), [Vite](https://github.com/vitejs/vite/releases), [Svelte Vite plugin](https://github.com/sveltejs/vite-plugin-svelte/releases), [Tailwind](https://github.com/tailwindlabs/tailwindcss/releases), [Svelte ESLint](https://github.com/sveltejs/eslint-plugin-svelte/releases), [Svelte language tools](https://github.com/sveltejs/language-tools/releases), [Playwright](https://github.com/microsoft/playwright/releases), [Svelte AI tools](https://github.com/sveltejs/ai-tools/releases). Check published package metadata for the exact package as well; repository release tags need not match every package's version.
