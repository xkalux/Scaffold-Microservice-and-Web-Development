# Official AI skill workflow

**Owner:** Instructor

**Documentation reviewed:** 2026-10-09

**Runtime status:** Skill files are present. Discovery and tool execution must be verified in the agent/environment used for a task; this documentation refresh did not execute them.

## Load only applicable skills

| Work | Project-local skill | Official source |
|---|---|---|
| Elysia source/design | [elysiajs](../.agents/skills/elysiajs/SKILL.md) | [elysiajs/skills](https://github.com/elysiajs/skills) |
| Create, edit or analyze `.svelte`, `.svelte.ts`, `.svelte.js` | [svelte-code-writer](../.agents/skills/svelte-code-writer/SKILL.md) | [Svelte AI skills](https://svelte.dev/docs/ai/skills) |
| Svelte architecture and implementation | [svelte-core-bestpractices](../.agents/skills/svelte-core-bestpractices/SKILL.md) | [sveltejs/ai-tools](https://github.com/sveltejs/ai-tools) |

Read the actual applicable `SKILL.md` and relevant referenced guidance. A link or installed directory does not prove discovery or use. If automatic project discovery is unavailable, explicitly load the applicable skill from its path using the agent's file-reading capability. Record the paths read and tools used; do not claim automatic discovery from manual loading.

[skills-lock.json](../skills-lock.json) records source paths and copied-content hashes, not upstream commit SHAs. Keep upstream names and attribution files. Do not reinstall or update skills silently; an authorized update must record the resolved upstream revision and regenerate the lock through the appropriate installer.

## Svelte documentation and autofixer

For applicable Svelte work, consult documentation when syntax is uncertain and run the autofixer before finalizing. Read its issues and suggestions, fix relevant findings and repeat; a zero exit code alone is insufficient. Package checks remain required. Documentation-only work does not invoke this framework workflow.

The helper pin is `@sveltejs/mcp@0.1.26`; it is an external CLI, not a course dependency. Run these Bun equivalents from `web/`. The documentation example uses the official section path; choose actual relevant paths returned by the catalog.

```sh
bunx --bun @sveltejs/mcp@0.1.26 list-sections
bunx --bun @sveltejs/mcp@0.1.26 get-documentation 'svelte/$state'
bunx --bun @sveltejs/mcp@0.1.26 svelte-autofixer ./src/routes/+page.svelte --svelte-version 5
```

Single quotes preserve rune names in a POSIX shell. Prefer a file path over interpolating inline code. Follow the installed skill for other Svelte module types and verify the helper supports the input being checked; an unsupported file is not a successful analysis.

These commands were checked against [official CLI syntax](https://svelte.dev/docs/ai/cli) and the installed skill, but were **not executed in this documentation refresh**. Run them in the target environment and record actual diagnostics. If a required tool, supported input, or network access is unavailable, checkpoint the blocker in [handoff](handoff.md) and stop only the affected work; do not claim the workflow passed.

## Official technical references

- [Elysia best practices](https://elysiajs.com/essential/best-practice) and [lifecycle](https://elysiajs.com/essential/life-cycle): `derive()` precedes validation; authorization runs after validation and before side effects.
- [Elysia TypeBox](https://elysiajs.com/patterns/typebox)
- [Drizzle with Bun SQLite](https://orm.drizzle.team/docs/sqlite/connect-bun-sqlite)
- [Bun SQLite](https://bun.com/docs/runtime/sqlite)
- [Tailwind with SvelteKit](https://tailwindcss.com/docs/installation/framework-guides/sveltekit)
- [Svelte ESLint plugin](https://sveltejs.github.io/eslint-plugin-svelte/user-guide/)

When behavior is uncertain, check official docs for the pinned version and current release notes. Preserve pins throughout the term unless the instructor authorizes a change; see [toolchain](toolchain.md).
