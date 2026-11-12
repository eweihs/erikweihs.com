import { expect, test } from "@playwright/test";

test("shows the 404 page for an unknown URL", async ({ page }) => {
  const response = await page.goto("/does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1, name: "Page not found" })).toBeVisible();
});

test("the 404 page links back to the home page", async ({ page }) => {
  await page.goto("/does-not-exist");
  await page.getByRole("link", { name: "Back to home" }).click();

  await expect(page).toHaveURL("/");
  await expect(page.getByRole("heading", { level: 1, name: "Erik Weihs" })).toBeVisible();
});
