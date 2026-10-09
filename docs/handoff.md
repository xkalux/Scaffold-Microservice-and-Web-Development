# Current handoff

This file is one replaceable checkpoint for another AI agent or session. It does not assign work or replace [AGENTS.md](../AGENTS.md). Detailed evidence belongs in linked files, not copied logs.

## Current checkpoint

- **Task/status:** Student starter ready for an instructor-assigned task; no implementation task is active.
- **Scope:** Two independent packages, `microservices/` and `web/`; shared English documentation.
- **Branch:** Expected `main`; verify the actual checkout before working.
- **Changes in progress:** None carried forward from the documentation refresh.
- **Verification:** Documentation baseline reviewed on 2026-10-09; see [CR-0001](archive/0001-documentation-baseline.md). This was a documentation-only change; no new runtime pass is claimed.
- **Blockers:** None for the documentation baseline. Package/runtime checks and skill discovery must be established in the environment used for the next task.
- **Next action:** Read the user's task, verify the checkout below, select paths with [codemap](codemap.md), then follow the relevant testing and skill rules.

## Resume

At the repository root:

```sh
git status --short --branch
git rev-parse HEAD
```

Compare the branch, commit and working changes with the checkpoint and latest user instruction. Preserve unrelated changes. Open only the task-relevant canonical docs, code and evidence. Rerun checks when relevant code or the execution environment has changed.

## Replace this checkpoint before pausing

Record the task and acceptance criteria; status (active, blocked or completed); authorized scope; branch and last observed commit; changed/uncommitted paths; decisions needed to continue; exact checks with actual results and evidence paths; blocker; and one concrete next action. Identify uncommitted work separately from the observed commit.

Keep one checkpoint. Move a completed cross-scope request to [Change Requests](change-requests/index.md) and its numbered archive record. Do not append chat transcripts or old checkpoints here.
