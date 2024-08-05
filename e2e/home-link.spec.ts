import { test, expect } from "@playwright/test";

test("should display the correct header elements", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/");

  // Verify the presence of the header elements
  await expect(page.locator("h1")).toHaveText("Welcome to Tech Insights");
  await expect(page.locator("h2")).toHaveText("Hello World");
});

test("should display the navigation links", async ({ page }) => {
  // Start from the index page
  await page.goto("http://localhost:3000/");

  // Verify the presence of the navigation links
  const navLinks = ["About", "Contact", "Blog"];
  for (const linkText of navLinks) {
    await expect(page.locator(`text=${linkText}`)).toBeVisible();
  }
});

test("should display the search input", async ({ page }) => {
  // Start from the index page
  await page.goto("http://localhost:3000/");

  // Verify the presence of the search input
  const searchInput = page.locator('input[placeholder="Search"]');
  await expect(searchInput).toBeVisible();
});

test("should navigate to the about page", async ({ page }) => {
  // Start from the index page
  await page.goto("http://localhost:3000/");

  // Navigate to the About page
  await page.click("text=About");

  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("http://localhost:3000/about");

  // The new page should contain an h2 with "About"
  await expect(page.locator("h2")).toContainText("About");
});
