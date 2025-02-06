import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {
// Step 1: Launch browser and navigate to URL
await page.goto('http://automationexercise.com');

// Step 2: Verify that home page is visible successfully
await expect(page).toHaveTitle(/Automation Exercise/);

// Step 3: Click on 'Signup / Login' button
await page.click('text=Signup / Login');

// Step 4: Verify 'New User Signup!' is visible
await expect(page.locator('text=New User Signup!')).toBeVisible();

// Step 5: Enter name and email address
await page.fill('[data-qa="signup-name"]', 'John Doe');
await page.fill('[data-qa="signup-email"]', 'johndoe1@example.com');

// Step 6: Click 'Signup' button
await page.click('[data-qa="signup-button"]');

// Step 7: Verify that 'ENTER ACCOUNT INFORMATION' is visible
await expect(page.locator('text=ENTER ACCOUNT INFORMATION')).toBeVisible();

// Step 8: Fill details: Title, Name, Email, Password, Date of birth
await page.check('#id_gender1');
await page.fill('#password', 'SecurePassword123');
await page.selectOption('#days', '10');
await page.selectOption('#months', '5');
await page.selectOption('#years', '1990');

// Step 9: Select checkboxes
await page.check('#newsletter');
await page.check('#optin');

// Step 10: Fill additional details
await page.fill('#first_name', 'John');
await page.fill('#last_name', 'Doe');
await page.fill('#company', 'Example Inc.');
await page.fill('#address1', '123 Main Street');
await page.fill('#address2', 'Apt 4B');
await page.selectOption('#country', 'United States');
await page.fill('#state', 'California');
await page.fill('#city', 'Los Angeles');
await page.fill('#zipcode', '90001');
await page.fill('#mobile_number', '1234567890');

// Step 11: Click 'Create Account' button
await page.click('[data-qa="create-account"]');

// Step 12: Verify that 'ACCOUNT CREATED!' is visible
await expect(page.locator('text=ACCOUNT CREATED!')).toBeVisible();

// Step 13: Click 'Continue' button
await page.click('text=Continue');

// Step 14: Verify that 'Logged in as username' is visible
await expect(page.locator('text=Logged in as John Doe')).toBeVisible();

// Step 15: Click 'Delete Account' button
await page.click('text=Delete Account');

// Step 16: Verify that 'ACCOUNT DELETED!' is visible
await expect(page.locator('text=ACCOUNT DELETED!')).toBeVisible();
await page.click('text=Continue');
});

