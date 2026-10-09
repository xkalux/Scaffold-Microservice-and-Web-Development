# Shared agent instructions

## Session handoff

When a task resumes work from another AI or session, read `docs/index.md` and `docs/handoff.md`. Use the handoff as a concise checkpoint, then open only the canonical documentation and evidence needed for the current task. It does not replace this file, technical source documents, or the user's latest instruction. Recheck relevant results when files or the execution environment have changed.

Student lessons are maintained in the project-level Drive `Contents/`, outside this repository. Do not add lesson content, Python verification scripts, or a lesson case ledger unless the instructor asks for them.

## Start here

Read `docs/index.md` first. Treat it as the entry point and active-document catalog, then open only the documents needed for the task. For resumed work, follow the session-handoff rule above. Use `docs/codemap.md` to choose paths, owners and checks. Keep shared developer documentation in English. Student-facing weekly lessons are in Thai and maintained separately in the project-level Drive `Contents/`.

## Documentation organization

- Keep shared project guidance in `docs/` and course-specific guidance in `docs/microservices/` or `docs/web/`, following the ownership and purpose listed in `docs/index.md` and `docs/codemap.md`. Keep student lessons outside this repository; do not duplicate them in `docs/`.
- Put each active topic in its canonical document and link to it instead of maintaining duplicate instructions. When adding, moving or renaming active documentation, update `docs/index.md` and `docs/codemap.md` when their catalog, ownership or path/check information changes.
- Keep `docs/archive/` for concise records of completed Change Requests using the numbering policy in `docs/archive/README.md`. Keep active contracts, setup guidance and unresolved issues in the active documentation. Treat archived material as historical reference, not current policy.
- Track cross-scope requests in `docs/change-requests/index.md`. Keep active request details, scope, acceptance criteria, dependencies and latest verification available. On completion, keep the index entry concise and move detailed discussion to `docs/archive/`, preserving the request ID and links in both directions.

## Course ownership and scope

- This single root `AGENTS.md` and the relevant shared documents in `docs/` provide common project guidance for both courses. Shared guidance does not merge package ownership or authorize changes to the other course's source.
- A Microservices feature or bug task may change source only in `microservices/`; a Web task may change source only in `web/`. Do not edit the other package or make incidental cross-package changes.
- Read shared documents as needed. Edit course-owned docs only when relevant to the requested feature; edit instructor-owned shared docs only when specifically in scope and authorized by their owner. Task agents may update the current `docs/handoff.md` checkpoint and record their cross-scope request in `docs/change-requests/index.md` as part of their authorized task; this does not authorize changing shared policy or the other course. If completing a task depends on a change in the other package, describe that dependency and leave the other package unchanged unless the user requests a cross-course task.
- `docs/contracts/` is owned by Microservices for the current API contract. Web may review it and maintain consumer notes in `docs/web/`; Web requests contract changes through a Change Request and must not edit the contract directly.
- `docs/microservices/` is owned by Microservices; `docs/web/` is owned by Web.
- `docs/index.md`, `docs/codemap.md`, `docs/toolchain.md`, `docs/ai-skills.md`, `docs/testing.md`, `docs/handoff.md`, `docs/change-requests/index.md`, `docs/archive/` policy, `docs/agent-prompts.md`, and shared verification evidence are instructor-owned.
- There is one root `AGENTS.md`; do not add nested `AGENTS.md` files. If the user explicitly authorizes both course scopes, work in separately scoped steps and verify each affected package. Otherwise, report a cross-course dependency without editing the other package.

## Package manager and version policy

- Use Bun **1.4.2** as the only package manager. Use `bun install`, `bun add`, `bun remove`, `bun run`, and `bunx` as appropriate.
- Run package commands from the relevant course folder. `microservices/` and `web/` each have their own `package.json` and `bun.lock`. Do not create a root `package.json`, workspace, or another package-manager lockfile.
- Use only the exact stable versions pinned in each `package.json` and `bun.lock`. Do not silently upgrade or add dependencies. Update `docs/toolchain.md` through an instructor-reviewed change before changing pins.
- Do not include npm, npx, pnpm, or yarn commands in learner workflows. Convert instructions to Bun commands and test the converted command.

## Required implementation practices

- Both packages use ESLint flat config. After the test-first cycle below, run scoped lint, type checks and relevant tests. Web changes also require a successful build and Playwright E2E checks for affected browser flows. Follow `docs/testing.md` for commands and completion gates.
- Microservices uses Elysia TypeBox `t` schemas at API input/output boundaries and Drizzle ORM with `drizzle-orm/bun-sqlite` over Bun's `bun:sqlite` driver. Each service owns its schema, migrations, database file, and seed data.
- Authentication context is request-scoped and created with Elysia `derive()`. `derive()` runs before route validation: never treat `body`, `query`, or `params` as validated there. Validate route inputs first, then enforce authentication, role, and ownership checks before any handler with side effects. Do not trust user IDs or roles supplied by a client.
- Web uses SvelteKit and Tailwind CSS. Follow Svelte 5 runes and current SvelteKit guidance; the SvelteKit 3 setup configures the framework through the Vite plugin. The current package has no library alias configured; use relative imports. Configure `#lib` through package imports only in an authorized change and verify it.
- Web consumes the accepted API contract or an explicit mock/fixture. It never imports Microservices database code or edits that package.

## Business logic: tests before implementation

- Before adding or changing business logic in either package, write a meaningful automated test for the intended rule and run it against the unchanged implementation. Confirm it fails because the required behavior is missing or incorrect (Red), implement the smallest correct change (Green), then refactor while keeping tests passing. This also applies to bug fixes and changes to existing rules.
- Cover business decisions such as calculations, eligibility, permissions, ownership and state transitions with focused unit tests; add integration tests for boundaries and side effects where needed. For a bug, first reproduce the defect with a failing regression test. Test observable outcomes, including applicable boundary and rejection cases.
- For behavior-preserving refactors of existing business logic, first add or confirm passing characterization tests, then refactor. Any changed rule still requires a failing test first. Documentation and presentation-only changes do not require invented business tests.
- Web features that add or change a user journey must also have Playwright E2E coverage. Write the new or updated flow test before changing its behavior, confirm the relevant behavioral failure, then make it pass. Keep rule-level tests as well as browser coverage, and use the accepted contract or an explicit Web-owned mock/fixture.
- Record the test-first sequence, exact commands and actual results. Missing tools, setup errors, skipped tests and a green baseline are not evidence of Red/Green. If the required test cannot run, stop the affected implementation, record the blocker in `docs/handoff.md` and report it; do not bypass this gate or change the other package.

## Official AI skills and documentation

Read `docs/ai-skills.md` for official sources, applicability, and current verification status. Load the official framework skills for applicable work from the single `.agents/skills/` location or the supported Codex plugin. A URL in a document is not proof that a skill was installed or used. For work on `.svelte`, `.svelte.ts`, or `.svelte.js` files, follow the required Svelte skill workflow: consult official documentation when syntax is uncertain and run the autofixer before finalizing. Documentation-only work does not require this framework workflow. Report honestly if it cannot be loaded or run.

## Review and reporting

- Inspect changed paths before finishing and confirm they stay within the requested ownership scope.
- Review the test-first evidence, changed-rule coverage and affected Web E2E results against `docs/testing.md`. Fix findings and rerun affected checks until they pass; report any unresolved blocker and keep the affected work incomplete. Preserve failed results instead of weakening assertions or hiding failures with skips/retries.
- For every code feature or bug fix, review the changed code paths for avoidable time, memory, database and network costs. Check for nested iteration whose cost grows with input size, repeated work that can be shared, and database/API calls made once per item (N+1 patterns); consider batching or joins where appropriate.
- Check repeated membership lookups: use a `Set` or `Map` instead of repeatedly scanning an array when the collection size and lookup pattern make that more efficient and ordering or duplicate behavior does not require an array. Keep arrays where their ordering, duplicates or small bounded size are useful.
- Judge complexity against expected input sizes and actual constraints. A nested loop or array lookup is not automatically a defect; report concrete likely costs, and avoid adding complexity for speculative gains. Fix in-scope inefficiencies; if a fix would cross package ownership, report the dependency without changing the other package.
- Report the exact commands run and actual results. Never claim a check, skill, dependency resolution, or runtime test passed unless it was executed successfully.
- If an official behavior is unclear, a required skill/runtime is unavailable, or a dependency has a breaking change/security issue affecting the work, stop only the affected change and ask the instructor. Preserve a checkpoint in `docs/handoff.md`.
- Follow the documentation and Change Request storage rules above. Keep completed Change Requests concise in `docs/change-requests/index.md`; move detailed closed records to `docs/archive/` while preserving IDs and links in both directions.
