# Code map

## Portable verification paths (instructor-owned)

| Path | Purpose / check |
|---|---|
| `HOW-TO-CODEX-VSCODE.md` | Thai step-by-step user guide |
| `docs/handoff.md`, `docs/verification-prompts.md` | Current checkpoint and vendor-independent prompts |
| `scripts/verify_structure.py` | Python-only structural checks, not approval |
| `scripts/run_checks.py` | Real scoped baseline with immutable logs; exact Bun pin and frozen independent installs |
| `scripts/extract_examples.py` | Per-example/Action case inventory, never blind execution |
| `scripts/check_completion.py` | Fail-closed evidence-index check |
| `verification/` | Course map, checklist, case ledger, original hashes, Drive IDs and evidence |
| `course-sources/` | Read-only copies of the three authoritative course documents |
| `Contents/` or `../Contents/` | Thai student lessons, course-owned; portable ZIP or original Drive layout |
| `.verification-work/` | Only tool-owned isolated fixtures/database/install directories; not durable evidence |

| Path | Responsibility | Owner | Entry point / checks |
|---|---|---|---|
| web/static/week1/ | Static semantic HTML used to introduce browser and DOM basics | Web | bun run dev, then open /week1/index.html |
| `AGENTS.md` | Instructions shared by both packages; course ownership boundaries | Instructor | Read before work |
| `.gitignore` | Shared local secrets, databases and generated outputs | Instructor | Review with `git check-ignore -v` |
| `.agents/skills/` | Official project-local agent skills | Instructor | Check `docs/ai-skills.md` |
| `docs/testing.md` | Shared test-first policy and review gates for both packages | Instructor | Read before business logic changes or code review |
| `microservices/src/index.ts` | Bun server entry point | Microservices | `cd microservices && bun run dev` |
| `microservices/src/app.ts` | Elysia application and route registration | Microservices | `bun run lint`, `bun run typecheck`, `bun run test` |
| `microservices/src/db/` | Drizzle schema, SQLite adapter, migrations, seed | Microservices | `bun run db:generate`, `bun run db:migrate`, `bun run db:seed` |
| `microservices/drizzle.config.ts` | Drizzle Kit schema/migration configuration | Microservices | `bun run db:generate` |
| `web/vite.config.ts` | SvelteKit 3 and Tailwind Vite plugins | Web | `bun run dev`, `bun run check` |
| `web/.gitignore` | Web-local env files, builds, coverage, Playwright output/auth | Web | Review with `git check-ignore -v` |
| `web/src/routes/` | SvelteKit pages and layouts | Web | `bun run check`; test changed journeys first per `docs/testing.md` |
| `web/src/lib/` | Web-owned components and API client | Web | Test changed business rules first; keep API client aligned to accepted contract |
| `web/playwright.config.ts`, `web/e2e/` | Browser E2E configuration and isolated Web journeys | Web | `bun run test:e2e:install`, `bun run test:e2e`; see `docs/testing.md` |
| `docs/contracts/` | Accepted OpenAPI/API contract and fixtures | Microservices (contract); Web (consumer review) | Web uses mock until status is accepted |
| `docs/microservices/` | Service boundaries, data ownership, security, testing | Microservices | Read only for relevant service task |
| `docs/web/` | Routes, components, state, API integration, UX, testing | Web | Read only for relevant Web task |
| `docs/change-requests/` | Current cross-scope requests | Instructor | Link completed details to archive |
| `docs/archive/` | Closed decisions and superseded details | Instructor | Reference only |
