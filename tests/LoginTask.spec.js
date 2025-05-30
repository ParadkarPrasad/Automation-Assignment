import { test, expect, describe } from '@playwright/test';
describe('Login ', async () => {
  test("Login and Enroll", async ({ page }) => {
    await page.goto('/login')

    // Assertions
    const emailInput1 = page.locator("#email1")
    await expect(emailInput1).toBeVisible()
    await expect(emailInput1).toBeEnabled()
    await emailInput1.fill("theo@gmail.com")
    expect(await emailInput1.inputValue()).toBe('theo@gmail.com')

    const passwordInput1 = page.locator("#password1")
    await expect(passwordInput1).toBeVisible()
    await expect(passwordInput1).toBeEnabled()
    await passwordInput1.fill("Automation")
    expect(await passwordInput1.inputValue()).toBe('Automation')
    await page.click('button[type="submit"]')

    // Wait for page to load
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/");

    // Wait for products to load
    await page.locator('button:has-text("Add to Cart")').first().waitFor({ state: 'visible' });

    let added = 0;

    while (added < 3) {
      await page.locator('button:has-text("Add to Cart")').first().click({ force: true });
      added++;
    }

    // console.log(`Added ${added} items to the cart.`);

    // Click on cart
    await page.click('.cartBtn')
    await expect(page).toHaveURL('/cart')

    // Click on Enroll Button
    await page.click('button:has-text("Enroll Now")')

    // Fill the form
    await page.locator('textarea#address').fill("Mumbai")
    await page.locator('input#phone').fill('4523412011')
    // Click on Enroll Button after filling the form
    await page.locator('button.action-btn').last().click()

    // capture the text
    const EnrollId = await page.locator('.uniqueId').textContent();

    // cancel button
    await page.locator('button.action-btn.white-action-btn', { hasText: 'Cancel' }).click()
    await page.close()
  })
})
