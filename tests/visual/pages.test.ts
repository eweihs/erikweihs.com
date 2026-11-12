import { expect, test } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "desktop", width: 1440, height: 900 },
];

const pages = [
  { name: "home", path: "/" },
  { name: "not-found", path: "/does-not-exist" },
];

for (const viewport of viewports) {
  test.describe(viewport.name, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const { name, path } of pages) {
      test(`${name} page`, async ({ page }) => {
        await page.goto(path);
        await page.evaluate(() => document.fonts.ready);

        await expect(page).toHaveScreenshot(`${name}-${viewport.name}.png`, { fullPage: true });
      });
    }
  });
}
