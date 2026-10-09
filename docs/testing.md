# Shared testing standard

**Owner:** Instructor

**Status:** Active policy for both courses. Record current task results in [handoff.md](handoff.md) with links to evidence; retained starter evidence is linked in [toolchain.md](toolchain.md).

Both courses use this standard while keeping source, tests, fixtures and package commands inside their own package. Read [../AGENTS.md](../AGENTS.md) for ownership and [toolchain.md](toolchain.md) before changing dependencies.

## Business logic workflow

For every new or changed business rule, use this sequence before changing production behavior:

1. Identify the observable requirement and relevant boundary, error and rejection cases. Business logic includes calculations, eligibility, authorization/ownership decisions and state transitions in services or Web code.
2. Write a focused unit test or boundary integration test against the current implementation. For a bug, reproduce the defect first.
3. Run the test and inspect its failure. Red means the intended behavioral assertion fails; a missing dependency, import error, unavailable server or browser does not prove the rule is tested. Minimal scaffolding may be needed to reach the assertion, but must not implement the new rule first.
4. Implement the smallest correct change, then rerun the test and relevant regression suite until they pass (Green).
5. Refactor and review correctness, algorithmic cost, query counts and data structures. Rerun affected tests after changes.

Repeat for additional rules and cases. A previously passing baseline does not replace a new failing test for changed behavior. For a behavior-preserving refactor, establish passing characterization tests before the refactor. Documentation and presentation-only changes need appropriate review, without fabricated business logic tests.

Tests assert observable outcomes rather than private implementation details. Cover representative success and failure paths, boundaries and denied operations with no unintended side effects. Use isolated data and controlled external dependencies. Keep time and randomness deterministic when they affect a rule. Do not weaken a valid assertion to make the implementation pass.

## Microservices checks

Use the existing Bun test runner from `microservices/`. Keep tests and temporary databases service-owned. Boundary tests should exercise validation, authentication, authorization and ownership before writes, as applicable to the changed behavior.

For a focused Red/Green cycle, run the actual relevant test path with Bun. For example, the existing starter test runs with `bun test test/health.test.ts`; it is baseline evidence, not Red for a future business rule. The final package gate is `bun run check`, which runs lint, type checking and tests. Record the actual commands with resolved paths and results for the task.

## Web checks and Playwright E2E

Test business rules with focused unit/integration tests before implementing them. Pure TypeScript rules can use Bun's built-in test runner: run `bun test` with the actual rule test path after creating that test. Do not run an invented placeholder path or mix the browser specs into the Bun unit suite. Choose a component-aware runner only when needed and follow the dependency policy first. Run Bun unit tests separately from Playwright specs.

Every new or changed browser journey must also have Playwright coverage written before the behavior change. Cover its success path and relevant visible errors, validation or denied actions. Use real browser interactions and assert rendered outcomes; an HTTP check alone is insufficient. Baseline tests for an unchanged starter page are characterization evidence, not proof of a business logic Red/Green cycle.

Playwright configuration and specs belong in `web/playwright.config.ts` and `web/e2e/`. Use:

- Independent tests with fresh browser state and controlled fixtures. Use an accepted API contract or explicitly identified Web-owned mocks; tests must not edit Microservices or depend on an unfinished service.
- Accessible role/label locators and awaited Playwright assertions. Use built-in waiting instead of fixed sleeps.
- A dedicated local server and port with strict port handling. Wait for Vite's listening message before starting browser navigation, with bounded startup and overall run time. Do not reuse an unknown server or a shared development session.
- Chromium as the starter browser; add other browsers when required by the feature's acceptance criteria and record which ran.
- Failure traces, screenshots and an HTML report for diagnosis. Keep failed attempts and report flaky outcomes; retries or skipped tests do not close a failing gate.

Run these commands from `web/` with Bun 1.4.2:

```sh
bun install --frozen-lockfile
bun run test:e2e:install
bun run check
```

The browser install command installs Chromium for the pinned Playwright version; required operating-system libraries must also be available. During iteration, use `bun run test:e2e` for a focused browser cycle. For final verification, run `check` once; it already includes that gate, so do not add another unchanged E2E run after a successful `check`. `test:e2e` builds the application and runs Playwright against its local production preview. `check` runs lint, type checking and `test`, which currently invokes this build/E2E gate. Run any added business unit/integration tests as well; the starter currently has no separate business unit suite.

### Browser setup failure

If Chromium reports missing system libraries on a supported Linux host, run the local pinned CLI from `web/` to install OS dependencies:

```sh
bunx --no-install playwright install-deps chromium
```

This may require system-administrator privileges; follow the host's permitted installation method. On a restricted host, record the missing libraries and stop the affected browser gate until an approved environment is available. Do not silently switch Playwright versions. See [Playwright browser setup](https://playwright.dev/docs/browsers) for supported hosts and dependencies.

### Ports and evidence

Playwright uses `http://127.0.0.1:4173`, separate from Svelte/Vite's development port `5173`. The preview command uses `--strictPort`: an occupied E2E port fails instead of switching to another port. Keep the preview command, readiness pattern and browser `baseURL` aligned when changing the E2E port.

Generated output is under `web/test-results/` and `web/playwright-report/` and is ignored by Git. Preserve relevant reports outside these overwritten directories when recording verification evidence. Never commit cookies, credentials or browser authentication state.

## Completion review

Before finishing a source task:

1. Review the changed paths against course ownership and the requested scope.
2. Check the test-first sequence and map changed rules to their tests. Record Red/Green commands and actual outcomes, including expected rejection and side effects. Label characterization evidence accurately.
3. Review affected code for avoidable nested iteration, repeated scans and N+1 database/API calls. Evaluate input bounds and choose arrays, sets or maps according to access patterns and required semantics.
4. Run the scoped lint, type check, relevant unit/integration tests and, for Web, build and affected Playwright E2E checks. Inspect diagnostics and reports, fix in-scope findings and repeat affected checks until they pass.
5. Report remaining blockers, skipped/not-run checks and exact next action. Missing tools stop the affected implementation; they do not waive the test-first or browser gates. Package checks do not approve all lesson examples.

## Official references

- [Bun test runner](https://bun.com/docs/test/writing-tests)
- [Playwright best practices](https://playwright.dev/docs/best-practices)
- [Playwright test configuration](https://playwright.dev/docs/test-configuration)
- [Playwright local web server](https://playwright.dev/docs/test-webserver)
