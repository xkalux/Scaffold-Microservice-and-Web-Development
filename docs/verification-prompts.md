# Prompts for portable verification

Updated: 2026-10-09, Asia/Bangkok. These prompts work without a particular agent vendor. Explicitly reading instructions is required when an agent does not automatically discover `AGENTS.md` or `.agents/skills/`.

## First run: baseline and pilot pair

```text
Continue this existing course-verification project. Do not regenerate the lessons from scratch.
Read root AGENTS.md, docs/index.md, docs/codemap.md and docs/handoff.md, then the complete three course-sources Markdown documents in their stated precedence. Read verification/course-map.json, full-checklist-review.json and lesson-cases.json.
Summarize the current checkpoint and unresolved case IDs briefly, then act.
Use the existing Bun 1.4.2 pins, independent course package.json and bun.lock files, one root AGENTS.md and shared docs. Do not upgrade dependencies, alter lockfiles, create a root workspace or edit read-only course sources. Shared verification docs/scripts are instructor-authorized; source fixes must stay within each course's scope.
Check actual agent discovery of the installed applicable skills by reporting the files you loaded and following their workflow. A URL or folder is not evidence of execution.
Before any business logic fix, follow docs/testing.md: write and run the failing behavioral test first, implement, then refactor and rerun relevant tests. Web journey changes also require Playwright E2E coverage; keep tests and fixtures within the affected package. Record actual Red/Green evidence and browser results without treating setup failures as behavioral failures.
Run python scripts/verify_structure.py. Run python scripts/run_checks.py --clean-install --http --database --skills, using the available Python launcher for this operating system. Record actual tool versions, UTC timestamps, exact commands, exit status and logs. Read diagnostics; do not label all lessons approved from a scaffold baseline pass. The clean-install waiver may be used only for clean install, with an explicit recorded exception.
Next verify the complete Microservices Week 1 and Web Week 1 pair: read every fenced block and Action, classify fragments/prompts/transcripts, reproduce runnable examples in the correct scoped context, check actual expected behavior and review all specification checklist criteria. Real browser/DevTools checks need real evidence. Preserve positive and negative test outcomes.
Update verification/lesson-cases.json and the full checklist only for work actually completed, using current lesson hashes. Record the checkpoint in docs/handoff.md. If one case needs the real course GitHub URL/access or unavailable tools, mark only that case blocked and continue independent cases. Ask only the specific necessary question, quoting the conflicting source or diagnostic.
Keep all remaining lessons NOT_APPROVED until all applicable criteria and runtime/skill/browser gates are closed. Do not manufacture dates/results. Explain any fix and rerun affected checks/pairs.
```

## Continue after the pilot

```text
Read the root instructions, docs/handoff.md and latest verification ledger/reports.
Continue from the first unresolved case without repeating completed evidence whose source/code hashes still match.
After M1/W1 genuinely pass, work through paired weeks 2–13, then the special Week 14 demo and Week 15 review guides. Enforce previous-week dependency or explicit contract/mock/fixture without assuming same-week course order. Check every Action acceptance criterion and runnable example. Review Week 10 research/progress separately, no new research in Week 13, no new assignments in Weeks 14–15, and no real exams or answers in Week 15.
Refresh official references/releases on today's actual date, compare pinned vs stable versions without changing pins, and follow installed framework skills for relevant source work. Use isolated fixtures because the starter is not a finished ecommerce system.
For fixes, keep course ownership boundaries, preserve useful existing content, rerun changed and dependent cases, retain failed logs and update current hashes. Save progress after every pair. Never stop at a plan or sample. Report genuine blockers without declaring approval.
Apply the test-first and Web Playwright E2E gates in docs/testing.md to source fixes. Review and correct findings, then rerun affected checks; record unresolved blockers without claiming completion.
```

## Review and export

Evidence schema: add `checked_at_utc`, `reviewed_by` and an `evidence` array of `{ "path": "verification/runs/.../case-result.json", "sha256": "actual-file-sha256" }` to each completed case and checklist item. Evidence paths are relative to this root and must exist with matching hashes. The evidence file records expected/actual behavior, commands, versions, fixture provenance, diagnostics and review reasoning. Never mark `NOT_APPLICABLE` without a specific explanation and source evidence. Preserve all case IDs and all 25 original checklist texts. A clean-install exception can apply only to a dedicated criterion with `scope: clean_install`, `authorized_by: Instructor` and the actual authorization note; it cannot close a broader runtime/skills criterion.

```text
Compare all 30 complete lessons against the complete three source documents and every specification checklist item.
Recheck links/anchors, headings/fences, 240-minute agendas, exact Actions, CLO alignment, weekly exceptions, pair dependencies, contract/mock provenance, separate dates, exact versions and real execution evidence.
Run scripts/verify_structure.py and scripts/check_completion.py. A zero exit status is only an evidence-index check, not a substitute for semantic review. Inspect current hashes and every applicable criterion before any approval.
Create a concise final review report and updated handoff; include open cases and exact next action. Package only changed content and verification evidence, excluding secrets, node_modules, .git and temporary databases. Reuse verification/drive-delivery.json IDs for later Drive updates. Do not upload or push to a remote without the user's explicit instruction and an available authorized connection.
```
