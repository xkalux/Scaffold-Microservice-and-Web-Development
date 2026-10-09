# Microservices and Web Development starter

This repository is a student starting point for two courses. Each course has an independent package and Bun lockfile; shared development guidance is in [docs/index.md](docs/index.md). Weekly lessons and assignment instructions are provided separately by the instructor.

## Before starting

Install Git and **Bun 1.4.2**. The Web toolchain also requires **Node.js 22.17 or newer**, because tools may invoke Node through their executable shebang. Bun remains the only package manager. Playwright requires matching Chromium binaries and supported operating-system libraries; see [testing](docs/testing.md).

Clone this repository, or the copy assigned by the instructor, and open its root in your editor:

```sh
git clone https://github.com/xkalux/Scaffold-Microservice-and-Web-Development.git
cd Scaffold-Microservice-and-Web-Development
bun --version
node --version
```

A private repository requires GitHub access. Confirm the versions against [toolchain](docs/toolchain.md) before installing. Do not update dependencies or lockfiles to resolve a setup failure without instructor authorization.

## Start Microservices

From the repository root:

```sh
cd microservices
bun install --frozen-lockfile
bun run db:migrate
bun run db:seed
bun run check
bun run dev
```

The starter serves `GET /health` at `http://localhost:3000/health` by default. SQLite migration and seed commands prepare `microservices/data/catalog.sqlite`. The starter does not yet expose product or authentication APIs. Stop the server with Ctrl+C.

## Start Web

Open another terminal at the repository root:

```sh
cd web
bun install --frozen-lockfile
bun run test:e2e:install
bun run check
bun run dev
```

Open the development URL printed by Vite. The page uses sample data; it does not connect to Microservices. `check` includes a production build and Chromium E2E tests. If browser libraries are missing, follow [testing](docs/testing.md) before retrying. Stop the server with Ctrl+C.

## Work with an AI agent

Open the repository root so the agent can read [AGENTS.md](AGENTS.md). Give it a concrete task and a course scope. For another agent or session, use [handoff](docs/handoff.md) and the short [agent prompts](docs/agent-prompts.md). Read the relevant [skill workflow](docs/ai-skills.md) for framework work.

Change only the assigned course package. Keep shared development documents and API handoffs in English. Follow [testing](docs/testing.md), and report checks that could not run.
