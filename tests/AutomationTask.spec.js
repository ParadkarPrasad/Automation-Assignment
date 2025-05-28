import { test, expect, describe } from '@playwright/test';

describe('New User Registration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login')
  })

  // Sign Up
  test("New User Sign Up", async ({ page }) => {
    await page.click('.subLink');
    await expect(page).toHaveURL('/signup')

    // Assertions
    const nameInput = page.locator('#name')
    // Visibility check for the name field
    await expect(nameInput).toBeVisible()
    // Enabled state check: Make sure the field is enabled and can be typed into
    await expect(nameInput).toBeEnabled()
    // Type into the name field
    await nameInput.fill("Mark")
    expect(await nameInput.inputValue()).toBe('Mark')

    const emailInput = page.locator('#email')
    // Visibility check for the email field
    await expect(emailInput).toBeVisible()
    // Enabled state check: Make sure the field is enabled and can be typed into
    await expect(emailInput).toBeEnabled()
    // Type into the email field
    await emailInput.fill("mark123@gmail.com")
    expect(await emailInput.inputValue()).toBe('mark123@gmail.com')

    const passwordInput = page.locator('#password')
    // Visibility check for the password field
    await expect(passwordInput).toBeVisible()
    // Enable state check: Make sure the field is enabled and can be typed into
    await expect(passwordInput).toBeEnabled()
    // Type into the password Field
    await passwordInput.fill("Automation")
    expect(await passwordInput.inputValue()).toBe('Automation')

    // CheckBox

    const checkboxLocators = [
      '[for="683616c6936adb25136a9597"]',
      '[for="67fc818c148027b98a9af15d"]',
      '[for="67fc8181148027b98a9af153"]'
    ]

    for (const locator of checkboxLocators) {
      await page.locator(locator).click()
    }

    // Radio Buttons
    const maleOption = page.locator('#gender1')
    // Verify the male radio button visible on the page
    await expect(maleOption).toBeVisible()
    await maleOption.click();
    await expect(maleOption).toBeChecked()
    // Dropdown selection
    await page.locator('#state').selectOption({ label: 'Maharashtra' })


    // Multidropdown selection
    await page.selectOption('#hobbies', ['Reading', 'Swimming'])

    // Sign up button
    await page.click('//button[normalize-space()="Sign up"]')
    await expect(page).toHaveURL('/login')
    await page.close()
  })

})