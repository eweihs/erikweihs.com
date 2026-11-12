import { defineConfig, devices } from "@playwright/test";

const port = 4173;

export default defineConfig({
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? "github" : [["list"], ["html", { open: "never" }]],
  use: { baseURL: `http://localhost:${port}` },
  projects: [
    { name: "integration", testDir: "tests/integration", use: devices["Desktop Chrome"] },
    { name: "visual", testDir: "tests/visual", use: devices["Desktop Chrome"] },
  ],
  webServer: {
    // Test the static export that gets deployed, not the dev server
    command: `npm run build && node tests/serve-out.mjs ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
