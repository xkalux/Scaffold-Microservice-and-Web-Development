# Web documentation

**Owner:** Web Development  
Use this folder for SvelteKit routes, components, client state, API integration, accessibility/UX, and Web tests.

Use an accepted contract from `../contracts/` or an explicit mock/fixture. Report API feedback through a Change Request. Do not document or change Microservices internals here.

Follow the shared [testing standard](../testing.md): write and run failing tests before implementing changed business rules, and add Playwright E2E coverage before changing browser journeys. Keep configuration, specs and fixtures in `web/`; use `bun run check` for the Web lint/typecheck/build/E2E gate and run relevant business unit tests separately.
