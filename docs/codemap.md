# Codemap

Use this map to select the smallest relevant scope. Run package commands from the course directory, never from the repository root.

| Path | Owner | Role | Review / checks |
|---|---|---|---|
| `AGENTS.md`, `README.md`, shared `docs/` | Instructor | Common policy, setup and continuation | Consistency, links, commands against manifests/config |
| `docs/microservices/` | Microservices | Service-specific development notes | Match service code and accepted contract |
| `docs/web/` | Web | Consumer and browser notes | Match Web code, fixtures and accepted contract |
| `docs/contracts/` | Microservices | API contract; Web requests changes | Schema, errors, authorization and consumer fixtures |
| `docs/change-requests/`, `docs/archive/` | Instructor | Cross-scope requests and completed decisions | IDs, status, acceptance and reciprocal links |
| `.agents/skills/`, `skills-lock.json` | Instructor | Shared official skill copies and source/hash record | [AI skill workflow](ai-skills.md); no automatic upgrades |
| `microservices/package.json`, `microservices/bun.lock` | Microservices; pin changes require instructor review | Independent package | Frozen install and package check after authorized changes |
| `microservices/src/app.ts`, `microservices/src/index.ts` | Microservices | Routes and server startup | Boundary/regression tests; `bun run check` |
| `microservices/src/db/`, `microservices/drizzle/`, `microservices/drizzle.config.ts` | Microservices | Schema, SQLite client, seed and migrations | Isolated database checks and relevant tests |
| `microservices/test/` | Microservices | Bun tests | Behavioral Red/Green or characterization as appropriate |
| `web/package.json`, `web/bun.lock` | Web; pin changes require instructor review | Independent package | Frozen install and package check after authorized changes |
| `web/src/routes/`, `web/src/lib/`, `web/src/app.css`, `web/src/app.html` | Web | Pages, modules, layout and styles | Applicable Svelte skills, rule tests and `bun run check` |
| `web/static/` | Web | Static beginner exercises and assets | Relevant browser behavior and scope review |
| `web/vite.config.ts`, `web/tsconfig.json`, `web/eslint.config.mjs` | Web | SvelteKit, Tailwind, type/lint configuration | Typecheck, lint, production build and affected E2E |
| `web/playwright.config.ts`, `web/e2e/` | Web | Browser configuration and journey tests | Focused E2E, then package check |
| `verification/runs/` | Instructor/shared evidence | Retained actual execution evidence | Read the relevant result, command log and limitations |

Generated dependencies, build output, browser reports and SQLite data are not source templates. Preserve task evidence before a new run overwrites generated reports. See [testing](testing.md) for gates and [toolchain](toolchain.md) for version policy.

Web may consume only an accepted contract or an explicit Web-owned mock/fixture. It must not import Microservices database code. If a task explicitly authorizes both scopes, keep the changes and verification separable.
