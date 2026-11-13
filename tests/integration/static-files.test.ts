import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { expect, test } from "@playwright/test";

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

// The deploy workflow and the CloudFront viewer-request function both expect these
// routes as extensionless PNG files in out/; see .claude/guidelines/project.md
for (const route of ["opengraph-image", "logo"]) {
  test(`exports /${route} as an extensionless PNG file`, async () => {
    const file = await readFile(join(__dirname, "..", "..", "out", route));

    expect(file.subarray(0, 8)).toEqual(PNG_SIGNATURE);
  });
}

test("serves robots.txt pointing at the sitemap", async ({ request }) => {
  const response = await request.get("/robots.txt");

  expect(response.status()).toBe(200);
  expect(await response.text()).toContain("Sitemap: https://erikweihs.com/sitemap.xml");
});

test("serves the release the build was made from", async ({ request }) => {
  const response = await request.get("/version.txt");

  expect(response.status()).toBe(200);
  expect(await response.text()).toBe("local\n");
});

test("serves a sitemap listing the home page", async ({ request }) => {
  const response = await request.get("/sitemap.xml");

  expect(response.status()).toBe(200);
  expect(await response.text()).toContain("<loc>https://erikweihs.com</loc>");
});
