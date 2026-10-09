# Web library modules

Place Web-owned Svelte components, API clients, and presentation-only shared utilities here. Keep service database code and Microservices implementation out of this folder.

SvelteKit 3 does not provide the former `$lib` alias by default. If the project needs an alias, configure a package subpath import such as `#lib/*` and verify it with `svelte-check` and a production build.
