import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("renders every section of the home page", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1, name: "Erik Weihs" })).toBeVisible();
  await expect(page.locator("#about")).toContainText("About");
  await expect(page.getByRole("heading", { level: 2, name: "Selected work" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Career" })).toBeVisible();
  await expect(page.locator("#outside")).toContainText("Outside work");
  await expect(page.getByRole("contentinfo")).toContainText("Get in touch");
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "hello@erikweihs.com" }),
  ).toHaveAttribute("href", "mailto:hello@erikweihs.com");
});

// <main> is not focusable, so the skip link moves where the next Tab starts from rather
// than document.activeElement. What a keyboard user sees is that Tab skips the header.
test("skip link makes the next Tab land in the main content", async ({ page }) => {
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();

  await page.keyboard.press("Enter");
  await page.keyboard.press("Tab");
  await expect(page.locator("#main-content a").first()).toBeFocused();
});
