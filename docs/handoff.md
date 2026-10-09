# Current verification handoff

Updated: 2026-10-09, Asia/Bangkok.

## Checkpoint

All 30 Thai weekly lessons are authored and statically reviewed. The instructor explicitly requested saving all drafts to Drive and preparing this scaffold for local Codex/other-agent verification. Current lesson approval remains NOT_APPROVED and Bun-dependent checks NOT_RUN. Publication is authorized; runtime approval is not.

Read [../TESTING-HANDOFF.md](../TESTING-HANDOFF.md), [verification-prompts.md](verification-prompts.md) and the Thai [VS Code how-to](../HOW-TO-CODEX-VSCODE.md). Use verification/lesson-cases.json and the complete checklist. Do not regenerate the curriculum or overwrite existing evidence.

## Completed

- Full three authoritative course sources read; snapshots and original Drive files preserved read-only.
- Paired 15-week course map, 30 complete lesson drafts, structural and checklist review records.
- Portable workspace retaining 107 original scaffold files and unchanged course manifests/lockfiles/skill lock.
- Python helpers for structure, per-example/Action inventory, actual scoped baseline logs and fail-closed completion checks.
- Detailed VS Code guide and continuation/export prompts, applicable to Codex or another agent with explicit instruction loading.

## Current blocked gates

Bun install/lint/typecheck/test/build and lesson-specific runtime behavior, real browser interactions, current Svelte docs/autofixer diagnostics and actual local agent discovery remain open. The real course GitHub URL/access is not supplied; ask only when a case genuinely requires that remote. The old socket EPERM is historical: a later socket bind passed, which still does not prove an HTTP app or browser interaction.

## Next exact action

Open this root locally, check Bun 1.4.2 and Python/Git, then run scripts/verify_structure.py and scripts/run_checks.py --clean-install --http --database --skills. Review actual diagnostics. Verify M1/W1 completely before carrying the standard through the paired weeks. Record completed/blocked case IDs, current hashes and next action here after every pair. Keep the clean-install waiver narrow if used.

## Historical record

The full prior checkpoint is retained in [archive/handoff-2026-10-07.md](archive/handoff-2026-10-07.md). Its scaffold install/build observations apply to that earlier date and scope only. Its statements that only pilot drafts existed, Contents was empty, or uploads were prohibited until all gates closed have been superseded by completed authoring and the instructor's current draft-publication instruction. Do not use historical runtime results to approve current lesson examples.
