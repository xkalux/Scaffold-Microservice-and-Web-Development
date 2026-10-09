# Shared agent instructions

## Instructor-authorized verification continuation (2026-10-09, Asia/Bangkok)

For this continuation task, also read `TESTING-HANDOFF.md` and `docs/verification-prompts.md`. The instructor explicitly authorized draft publication, portable verification tooling, shared handoff updates and the VS Code how-to. This authority does not approve untested lessons or dependency changes. Shared `scripts/`, `verification/` and the handoff documents are instructor-owned. Perform package source work as separate scoped Microservices and Web tasks.

The portable ZIP places the 30 Thai student lessons under root `Contents/`; the original Drive project places them beside `Scaffold/`. Tools must support both layouts. Course source snapshots under `course-sources/` and the original three Drive files remain read-only. Do not add nested agent instructions, a root manifest, or another lockfile.

Read current lesson case/checklist hashes and actual evidence before claiming a pass. A scaffold baseline is not per-lesson verification. Preserve FAIL/NOT_RUN/SKIPPED records and checkpoint after each pair. The existing clean-install exception applies only to clean install. For another agent runtime, load these instructions and applicable skills explicitly and verify the supported workflow; do not assume Codex discovery rules apply.

## Start here

Read `docs/index.md`, then open only the documents needed for the task. `docs/codemap.md` maps paths to owners and checks. Keep shared developer documentation in English; student-facing weekly lessons in `../Contents/` are written in Thai.

## Course ownership and scope

- `microservices/` is owned by the Microservices Architecture Development course. Do not edit `web/` while working on a Microservices task.
- `web/` is owned by the Web Development course. Do not edit `microservices/` while working on a Web task.
- `docs/contracts/` is owned by Microservices for the current API contract. Web may review it and maintain consumer notes in `docs/web/`; Web requests contract changes through a Change Request and must not edit the contract directly.
- `docs/microservices/` is owned by Microservices; `docs/web/` is owned by Web.
- `docs/index.md`, `docs/codemap.md`, `docs/toolchain.md`, `docs/ai-skills.md`, and the shared handoff/index structure are instructor-owned.
- There is one root `AGENTS.md`; do not add nested `AGENTS.md` files. Respect the ownership table even when a requested task spans both courses; report cross-scope work for separate handling.

## Package manager and version policy

- Use Bun **1.4.2** as the only package manager. Use `bun install`, `bun add`, `bun remove`, `bun run`, and `bunx` as appropriate.
- Run package commands from the relevant course folder. `microservices/` and `web/` each have their own `package.json` and `bun.lock`. Do not create a root `package.json`, workspace, or another package-manager lockfile.
- Use only the exact stable versions pinned in each `package.json` and `bun.lock`. Do not silently upgrade or add dependencies. Update `docs/toolchain.md` through an instructor-reviewed change before changing pins.
- Do not include npm, npx, pnpm, or yarn commands in learner workflows. Convert instructions to Bun commands and test the converted command.

## Required implementation practices

- Both packages use ESLint flat config. Run the scoped `bun run lint`, then the relevant type check and tests. Web changes also require a successful build.
- Microservices uses Elysia TypeBox `t` schemas at API input/output boundaries and Drizzle ORM with `drizzle-orm/bun-sqlite` over Bun's `bun:sqlite` driver. Each service owns its schema, migrations, database file, and seed data.
- Authentication context is request-scoped and created with Elysia `derive()`. `derive()` runs before route validation: never treat `body`, `query`, or `params` as validated there. Validate route inputs first, then enforce authentication, role, and ownership checks before any handler with side effects. Do not trust user IDs or roles supplied by a client.
- Web uses SvelteKit and Tailwind CSS. Follow Svelte 5 runes and current SvelteKit guidance; the SvelteKit 3 setup configures the framework through the Vite plugin and uses `#lib` if an app-library alias is needed.
- Web consumes the accepted API contract or an explicit mock/fixture. It never imports Microservices database code or edits that package.

## Official AI skills and documentation

Read `docs/ai-skills.md` for official sources, applicability, and current verification status. Load the official framework skills for applicable work from the single `.agents/skills/` location or the supported Codex plugin. A URL in a document is not proof that a skill was installed or used. For Svelte components, run the official documentation lookup/autofixer workflow before finalizing when the skill is available. Report honestly if it cannot be loaded or run.

## Review and reporting

- Inspect changed paths before finishing and confirm they stay within the requested ownership scope.
- Report the exact commands run and actual results. Never claim a check, skill, dependency resolution, or runtime test passed unless it was executed successfully.
- If an official behavior is unclear, a required skill/runtime is unavailable, or a dependency has a breaking change/security issue affecting the work, stop only the affected change and ask the instructor. Preserve a checkpoint in `docs/handoff.md`.
- Keep completed Change Requests concise in `docs/change-requests/index.md`; move detailed closed records to `docs/archive/` while preserving IDs and links.
