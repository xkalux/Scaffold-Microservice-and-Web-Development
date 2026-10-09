# Official AI skills

This is the single project-local location for agent skills. The official Elysia skill and the two official Svelte skills are installed here for Codex. Keep the upstream skill names and attribution files. The Svelte skills are covered by the included MIT license; the Elysia source repository does not publish a license file, so retain its source link and use the upstream installer as documented. Do not create course-specific copies that drift from upstream.

`skills-lock.json` records each source and copied-content hash. To list project skills that Codex can discover, run `bunx skills list --agent codex --json` from this scaffold root. Record upstream revisions and command results in `docs/ai-skills.md`. A listed skill must still be read and followed for the task; its presence alone is not evidence that it was used.
