# Official AI skills and practices

## Current continuation status (2026-10-09, Asia/Bangkok)

The dated 2026-10-07 records below are historical scaffold evidence. Current lesson runtime and local agent-discovery checks are NOT_RUN in this hosted continuation because Bun is unavailable. The bundle retains the existing skill files and `skills-lock.json` without reinstalling or upgrading them. Codex project discovery uses `.agents/skills/`; verify actual loading in the local extension and record the paths read. Other agents must load the applicable skills explicitly if their discovery differs.

`scripts/run_checks.py --skills` uses `bun x --bun @sveltejs/mcp@0.1.26` with argv rather than shell interpolation. It collects docs/autofixer output for starter components only, keeps diagnostic review pending, and does not claim those checks validate all lesson examples. Read findings, address them, rerun affected checks and record per-lesson evidence. A URL, copied folder or CLI zero exit status is insufficient by itself.

**Reviewed:** 2026-10-07  
**Checked:** 2026-10-07 with `skills` CLI 1.7.1 and Bun 1.4.2. `bunx skills list --agent codex --json` reports all three skills as project-scope Codex skills under `.agents/skills/`. This hosted Work session read the installed `SKILL.md` files directly. The target VS Code/Codex CLI should run the list command after opening the scaffold root to confirm its local discovery.

## Microservices

- Elysia official best practices: <https://elysiajs.com/essential/best-practice>
- Elysia lifecycle and `derive()`: <https://elysiajs.com/essential/life-cycle>
- Elysia TypeBox `t`: <https://elysiajs.com/patterns/typebox>
- Official Elysia AI skills: <https://elysiajs.com/table-of-content.html#ai-skills-for-llms>
- Installed from the official source with `bunx skills add elysiajs/skills --agent codex --copy --yes`; the installer reported `./.agents/skills/elysiajs`. The upstream `main` HEAD checked on 2026-10-07 was `8fd8031b83bce42e903ed0e38e6170213876c20e`. The skill was read; its instruction to consult `elysiajs.com/llms.txt` was followed. 
- Drizzle + Bun SQLite: <https://orm.drizzle.team/docs/sqlite/connect-bun-sqlite>
- Bun SQLite: <https://bun.com/docs/runtime/sqlite>

## Web

- Svelte best practices: <https://svelte.dev/docs/svelte/best-practices>
- Svelte AI skills: <https://svelte.dev/docs/ai/skills>
- Required official skills: `svelte-code-writer` and `svelte-core-bestpractices`.
- Installed from `sveltejs/ai-tools` with the Bun skills CLI, targeting Codex's project-local `.agents/skills/`; `bunx skills list --agent codex --json` reports both names as installed for Codex. Upstream `main` HEAD checked on 2026-10-07: `6b5d0dab3c9c083387247ab20dc684573481076b`; `skills-lock.json` records the content hashes of the copied files. The official release tags checked the same day were `svelte-code-writer-v2026.10.03-125549` and `svelte-core-bestpractices-v2026.10.03-125548` at commit `1a3ba88bba598c6734533c48e23cb5d37424b618`. Both installed `SKILL.md` files were read in this session.
- The `svelte-code-writer` workflow requires documentation lookup when syntax is uncertain and `svelte-autofixer` before finalizing Svelte component/module work. Upstream `npx` examples were converted to the pinned `bunx @sveltejs/mcp@0.1.26` commands. The `list-sections` and `svelte-autofixer` commands were attempted with Bun 1.4.2, but both failed when the runtime could not resolve `svelte.dev` (`EAI_AGAIN`); do not mark the skill workflow passed until this blocker is resolved.
- Tailwind with SvelteKit: <https://tailwindcss.com/docs/installation/framework-guides/sveltekit>
- ESLint Svelte plugin: <https://sveltejs.github.io/eslint-plugin-svelte/user-guide/>

## Verification record

| Skill/tool | Source | Revision | Install path | Agent discovery | Command/check result |
|---|---|---|---|---|---|
| Elysia official skill | Elysia docs / `elysiajs/skills` | `8fd8031` (main HEAD checked 2026-10-07) | `.agents/skills/elysiajs` | `bunx skills list --agent codex --json`: listed for Codex; `SKILL.md` read | Consulted `https://elysiajs.com/llms.txt`; package checks pass |
| `svelte-code-writer` | Svelte AI docs / `sveltejs/ai-tools` | `main` HEAD `6b5d0da` checked 2026-10-07; file hash in `skills-lock.json` | `.agents/skills/svelte-code-writer` | `bunx skills list --agent codex --json`: listed for Codex; `SKILL.md` read | `bunx @sveltejs/mcp@0.1.26 list-sections` and `svelte-autofixer` attempted; both blocked by runtime DNS `EAI_AGAIN svelte.dev` |
| `svelte-core-bestpractices` | Svelte AI docs / `sveltejs/ai-tools` | `main` HEAD `6b5d0da` checked 2026-10-07; file hash in `skills-lock.json` | `.agents/skills/svelte-core-bestpractices` | `bunx skills list --agent codex --json`: listed for Codex; `SKILL.md` read | Guidance applied; workflow status remains pending the Svelte CLI/autofixer network check |
