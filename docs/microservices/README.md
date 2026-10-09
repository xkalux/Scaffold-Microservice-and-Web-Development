# Microservices development notes

**Owner:** Microservices

Source, tests, schema, migrations, SQLite files and seed data belong in `microservices/`. Run commands from that directory. The starter implements only `GET /health`; the sample product table and seed do not expose a product API.

Use Elysia TypeBox `t` for route boundaries and Drizzle's Bun SQLite driver. Follow [AGENTS.md](../../AGENTS.md) for request-scoped authentication, validation and authorization order. Keep each future service's data and migrations service-owned.

- Setup and startup: [root README](../../README.md).
- Checks and Red/Green rules: [testing](../testing.md); the final package gate is `bun run check`.
- Framework workflow: [AI skills](../ai-skills.md).
- Accepted interfaces and fixtures: [contracts](../contracts/index.md).
- Dependency changes: [toolchain](../toolchain.md).

Add service-specific decisions here only when needed. Publish API deliveries in English. Do not edit Web source to complete a service task.
