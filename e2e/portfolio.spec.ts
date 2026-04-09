import { test, expect } from "@playwright/test";

test("homepage renders hero and all featured projects", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Jonathan");
  await expect(page.getByText("Full-Stack Engineer", { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Hostalytics", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Good Boy Guide" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Poll Sports", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
});

test("case study pages load with correct content", async ({ page }) => {
  const slugs = ["hostalytics", "good-boy-guide", "poll-sports"];
  for (const slug of slugs) {
    await page.goto(`/projects/${slug}`);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("text=The Problem")).toBeVisible();
    await expect(page.locator("text=The Approach")).toBeVisible();
    await expect(page.locator("text=Key Insight")).toBeVisible();
  }
});

test("invalid project slug returns 404", async ({ page }) => {
  const response = await page.goto("/projects/nonexistent");
  expect(response?.status()).toBe(404);
  await expect(page.locator("text=404")).toBeVisible();
});

test("homepage navigation to case study and back", async ({ page }) => {
  await page.goto("/");
  await page.locator("a", { hasText: "Read case study" }).first().click();
  await expect(page.getByText("The Problem", { exact: true })).toBeVisible();
  await page.locator("a", { hasText: "Back" }).click();
  await expect(page.locator("h1")).toContainText("Jonathan");
});

test("mobile viewport renders without horizontal scroll", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  const viewportWidth = await page.evaluate(() => window.innerWidth);
  expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
});
