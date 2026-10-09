# Documentation index

Read this index first. If resuming work from another AI or session, read [handoff.md](handoff.md) for the concise checkpoint. Then open only the active document needed for the current task; archived records are reference-only. The handoff is a context-transfer note, not a source of technical requirements or test evidence.

| Document | Owner | Status | When to read |
|---|---|---|---|
| [codemap.md](codemap.md) | Instructor | Active | Before choosing files or running checks |
| [toolchain.md](toolchain.md) | Instructor | Active; Web starter checks recorded 2026-10-09, earlier package checks dated 2026-10-07 | Before installing packages or changing versions |
| [ai-skills.md](ai-skills.md) | Instructor | Active; project skills present, local discovery/workflow NOT_RUN | Before AI-assisted framework work |
| [testing.md](testing.md) | Instructor | Active policy | Before business logic changes, Web E2E work or code review |
| [handoff.md](handoff.md) | Instructor | Active | When resuming work or recording a blocker |
| [contracts/](contracts/) | Microservices | Contract not yet frozen | Before connecting Web to a service |
| [microservices/](microservices/) | Microservices | Active | For service implementation and database work |
| [web/](web/) | Web | Active | For SvelteKit pages, state, API integration, and UX |
| [change-requests/index.md](change-requests/index.md) | Instructor | Active | Before requesting a cross-scope or contract change |
| [archive/README.md](archive/README.md) | Instructor | Active policy | Before archiving completed decisions or Change Requests |

## Ownership

Both course scopes use these shared docs as common project guidance, while the packages remain separate working scopes with separate manifests and Bun lockfiles. Shared docs do not authorize either course to edit the other's source. Microservices owns current API contracts; Web records consumer feedback and requests changes through a Change Request.
