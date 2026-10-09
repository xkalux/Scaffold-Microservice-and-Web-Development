# Documentation index

## Verification continuation

Read [../TESTING-HANDOFF.md](../TESTING-HANDOFF.md) for the current checkpoint and [verification-prompts.md](verification-prompts.md) to continue with Codex or another agent. User instructions are in [../HOW-TO-CODEX-VSCODE.md](../HOW-TO-CODEX-VSCODE.md). `verification/` and `scripts/` are instructor-owned; read-only source snapshots are in `course-sources/`. The current 30-file draft publication supersedes the historical empty-folder checkpoint. Current runtime checks remain unverified until local evidence is recorded.

Read this index first. Open only the active document needed for the task; archived records are reference-only.

| Document | Owner | Status | When to read |
|---|---|---|---|
| [codemap.md](codemap.md) | Instructor | Active | Before choosing files or running checks |
| [toolchain.md](toolchain.md) | Instructor | Active, package checks recorded 2026-10-07 | Before installing packages or changing versions |
| [ai-skills.md](ai-skills.md) | Instructor | Active, Svelte docs/autofixer network check pending | Before AI-assisted framework work |
| [handoff.md](handoff.md) | Instructor | Active | When resuming work or recording a blocker |
| [contracts/](contracts/) | Microservices | Contract not yet frozen | Before connecting Web to a service |
| [microservices/](microservices/) | Microservices | Active | For service implementation and database work |
| [web/](web/) | Web | Active | For SvelteKit pages, state, API integration, and UX |
| [change-requests/index.md](change-requests/index.md) | Instructor | Active | Before requesting a cross-scope or contract change |
| [archive/README.md](archive/README.md) | Instructor | Active policy | Before archiving completed decisions or Change Requests |

## Ownership

The course packages are separate working scopes. `microservices/` and `web/` have separate manifests and Bun lockfiles. Shared docs do not authorize either course to edit the other's source. Microservices owns current API contracts; Web records consumer feedback and requests changes through a Change Request.
