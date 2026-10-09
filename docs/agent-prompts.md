# Short agent prompts

Replace bracketed text with the actual task. Read files from the current checkout rather than copying them into a conversation.

## Start a task

> Read AGENTS.md and docs/index.md. Task: [observable requirement and acceptance criteria]. Authorized scope: [microservices/, web/, or explicitly both]. Inspect only relevant docs and source. Follow the test-first and review rules. Complete the task, record actual checks and blockers, and update docs/handoff.md before stopping. Do not silently change pins or the other course.

## Resume with another agent or session

> Read AGENTS.md, docs/index.md and docs/handoff.md. Verify the actual branch, HEAD and working changes against the checkpoint. Continue the current task from its next action. Load only the linked docs/code/evidence needed. Preserve unrelated changes and report a material mismatch before relying on stale results.

## Checkpoint before pausing

> Update docs/handoff.md with one concise checkpoint: task/status, acceptance criteria, scope, branch/observed commit, uncommitted paths, decisions, actual checks and evidence links, blocker, and exact next action. Replace the old checkpoint; do not append conversation history.

## Review a completed change

> Review the diff against the task, ownership, AGENTS.md and relevant canonical docs. Check correctness, affected tests, browser behavior where applicable, and concrete performance costs. Fix in-scope findings and repeat affected checks. Distinguish executed passes, failures and checks not run; report remaining blockers.
