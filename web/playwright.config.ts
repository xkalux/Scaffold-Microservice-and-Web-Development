import { defineConfig, devices } from "@playwright/test";

const baseURL = "http://127.0.0.1:4173";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: true,
  retries: 0,
  workers: 2,
  globalTimeout: 120_000,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],
  webServer: {
    command: "bun run preview --host 127.0.0.1 --port 4173 --strictPort",
    // Wait for Vite's listening message; probing an unopened port can stall on firewalls.
    wait: { stdout: /Local:\s+http:\/\/127\.0\.0\.1:4173\// },
    stdout: "pipe",
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
