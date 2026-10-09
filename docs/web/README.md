# Web development notes

**Owner:** Web

Pages, components, API clients, mocks, fixtures, static exercises and browser tests belong in `web/`. Run commands from that directory. The starter uses sample catalog/cart state; it is not connected to a service.

Use Svelte 5 runes, the SvelteKit Vite configuration and Tailwind CSS. The current manifest has no library alias configured; use relative imports. Keep API assumptions beside Web-owned mocks until a contract is accepted.

- Setup and startup: [root README](../../README.md).
- Business rule tests, browser checks and OS setup: [testing](../testing.md). The final `bun run check` includes build/E2E; run added rule-level tests separately.
- Required Svelte skill workflow: [AI skills](../ai-skills.md).
- Accepted API and cross-course delivery rules: [contracts](../contracts/index.md).
- Dependency changes: [toolchain](../toolchain.md).

Record consumer feedback and course-specific decisions here in English. Request contract changes through [Change Requests](../change-requests/index.md); do not edit Microservices source or its contract.
