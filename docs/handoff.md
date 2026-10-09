# Current verification handoff

Updated: 2026-10-09, Asia/Bangkok.

## Checkpoint

All 30 Thai weekly lessons are authored and statically reviewed. The instructor explicitly requested saving all drafts to Drive and preparing this scaffold for local Codex/other-agent verification. Current lesson approval remains NOT_APPROVED and Bun-dependent checks NOT_RUN. Publication is authorized; runtime approval is not.

Read [verification-prompts.md](verification-prompts.md) and the Thai [VS Code how-to](../HOW-TO-CODEX-VSCODE.md). Use verification/lesson-cases.json and the complete checklist. Do not regenerate the curriculum or overwrite existing evidence.

## Completed

- Full three authoritative course sources read; snapshots and original Drive files preserved read-only.
- Paired 15-week course map, 30 complete lesson drafts, structural and checklist review records.
- Portable workspace retaining 107 original scaffold files and unchanged course manifests/lockfiles/skill lock.
- Python helpers for structure, per-example/Action inventory, actual scoped baseline logs and fail-closed completion checks.
- Detailed VS Code guide and continuation/export prompts, applicable to Codex or another agent with explicit instruction loading.

## Current blocked gates

Lesson-specific runtime behavior, browser interactions beyond the starter, current Svelte docs/autofixer diagnostics and actual local agent discovery remain open. The Web starter install/lint/typecheck/build/E2E results below apply only to that scope; Microservices runtime checks were not rerun in this task. The real course GitHub URL/access is not supplied; ask only when a case genuinely requires that remote. Socket permission depends on the execution environment; successful browser evidence below used authorized execution outside the sandbox.

## Local Web testing setup (2026-10-09, Asia/Bangkok)

The instructor requested test-first business logic in both packages and explicitly confirmed Playwright installation/setup in Web. The shared policy is [testing.md](testing.md). Source/config work stays in `web/`; Microservices source, manifests and lockfile are unchanged. Existing Web dependency pins are preserved, with only exact `@playwright/test@1.64.0` and its dependencies added.

Actual versions: default Bun 1.4.0; checks used portable Bun 1.4.2 from `/tmp/week6-bun142/bun-linux-x64`. Node 24.12.0; Playwright 1.64.0; Chromium 156.0.8078.4, revision 1248. Chromium required portable Linux libraries from `/tmp/scaffold-testing-4m9j9vik/chromium-libs/usr/lib/x86_64-linux-gnu`; global system libraries were not installed. A normal host must provide the browser's required libraries as described in the [Playwright installation guide](https://playwright.dev/docs/intro).

| Command / scope | Actual result |
|---|---|
| `bun install --frozen-lockfile`, original Web baseline with Bun 1.4.2 | Exit 0 after an authorized network retry; initial sandbox attempt failed with DNSResolveFailed |
| `bun add --dev --exact @playwright/test@1.64.0`, Web | Exit 0; Bun generated the updated lockfile, existing direct pins preserved |
| `bun install --frozen-lockfile`, clean isolated Web copy | Exit 0; 181 packages installed using the task cache |
| `bun run test:e2e:install`, Web | Exit 0; matching Chromium available |
| `bun run lint`, `bun run typecheck`, Web | Exit 0; 0 Svelte errors and 0 warnings |
| `bun run check`, Web, with portable runtime/libraries and authorized localhost access | Exit 0; lint, typecheck, production build and 3 Chromium E2E tests passed, no skips or retries |
| `bun run dev --host 127.0.0.1 --strictPort`, isolated Web copy | Exit 1 because development port 5173 was already occupied; existing process left running |

The successful full check used this environment from `web/`:

```sh
env PATH="/tmp/week6-bun142/bun-linux-x64:$PATH" LD_LIBRARY_PATH=/tmp/scaffold-testing-4m9j9vik/chromium-libs/usr/lib/x86_64-linux-gnu bun run check
```

Playwright opened a separate production preview on `127.0.0.1:4173` while development port 5173 was occupied. Strict port handling prevents automatic port switching. Review caught a readiness hang when probing an unopened port: the final config waits for Vite's listening message and bounds startup/overall runtime. Earlier sandbox EPERM, interrupted/timed-out probe attempts and 3 missing-library browser-launch failures are recorded alongside the successful result in [verification evidence](../verification/runs/2026-10-09-web-e2e-setup/result.json). Actual logs, failure traces and tested-source/artifact hashes are retained there.

The three E2E tests characterize existing catalog navigation, repeated sample-cart increments and reload reset. No production business rule changed; no business logic Red/Green cycle is claimed, and Web has no separate business unit suite yet. Future changed rules require focused failing unit/integration tests first, in addition to affected browser coverage. Missing local Svelte skills and an unrun docs/autofixer workflow are recorded in [ai-skills.md](ai-skills.md). Lesson approval remains NOT_APPROVED.

Ignore audit (2026-10-09): root rules now cover `.db`, `.sqlite` and `.sqlite3` files with their sidecars, `.env.*` secrets, build/typecheck outputs, coverage and Playwright reports/auth state. Web-local rules repeat package outputs for portability. `git check-ignore -v` confirmed these paths are ignored and `.env.example` templates remain unignored. The current Web `tsconfig.json` parses and `bun run typecheck` completed with 0 errors and 0 warnings.

## Next exact action

Open this root locally, check Bun 1.4.2 and Python/Git, then run scripts/verify_structure.py and scripts/run_checks.py --clean-install --http --database --skills. Review actual diagnostics. Verify M1/W1 completely before carrying the standard through the paired weeks. Record completed/blocked case IDs, current hashes and next action here after every pair. Keep the clean-install waiver narrow if used.

## Historical record

The full prior checkpoint is retained in [archive/handoff-2026-10-07.md](archive/handoff-2026-10-07.md). Its scaffold install/build observations apply to that earlier date and scope only. Its statements that only pilot drafts existed, Contents was empty, or uploads were prohibited until all gates closed have been superseded by completed authoring and the instructor's current draft-publication instruction. Do not use historical runtime results to approve current lesson examples.
