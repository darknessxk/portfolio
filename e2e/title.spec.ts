import { expect, test } from "@playwright/test"

test("has correct title", async ({ page }) => {
    await page.goto("./")
    await expect(page).toHaveTitle(/Luiz Felipe @ portfolio/)
})
