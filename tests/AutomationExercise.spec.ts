import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/HomePage";

test.describe("Automation Exercise", () => {
    test.beforeEach(async ({ page }) => {
        // TODO: open the page
        const homePage = new HomePage(page);
        await homePage.goTo();

    });

    // test.afterEach(async ({ page }) => {
    //     // TODO: clear the data after the test

    // });

    test("Test Case 1: Register User", async ({ page }) => {
        
        // Arrange:
        const pageTitle = await page.title();

        const loginName = "Name"
        const emailAddress = "email@gmail"
        

        // Act:
        console.log("Page Titlee: ", pageTitle)
        // Assert:
        await expect(page).toHaveTitle(pageTitle);

        // Act:
        await page.getByRole('link', { name: 'Signup / Login' }).click();

        // Assert:
        await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible;

        // Act:
        await page.getByPlaceholder('Name').fill(loginName);
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(emailAddress);
        await page.getByRole('button', { name: 'Signup' }).click();

        // Assert:
        await expect(page.getByText('Enter Account Information')).toBeVisible;

        // Act:
        await page.locator('#uniform-id_gender1').click();
  
        await page.getByLabel('Password *').fill('Password');
        await page.locator('#days').selectOption('6');
        await page.locator('#months').selectOption('9');
        await page.locator('#years').selectOption('2003');
        await page.getByLabel('Sign up for our newsletter!').check();
        await page.getByLabel('Receive special offers from').check();

        await page.getByLabel('First name *').fill('First name');

        await page.getByLabel('Last name *').fill('Last name');
   
        await page.getByLabel('Company', { exact: true }).fill('Company');

        await page.getByLabel('Address * (Street address, P.').fill('streat, 35 ');
        await page.getByLabel('Country *').selectOption('United States');

        await page.getByLabel('State *').fill('State');

        await page.getByLabel('City *').fill('City');

        await page.locator('#zipcode').fill('894-132');

        await page.getByLabel('Mobile Number *').fill('123456797');
        await page.getByRole('button', { name: 'Create Account' }).click();

        // Assert:
        await expect(page.getByText('Account Created!')).toBeVisible()

        await page.getByRole('link', { name: 'Continue' }).click();
        // Assert:
        await expect(page.getByText('Logged in as Name')).toBeVisible();
        //await expect(page.getByText('Logged in as ${}')).toBeVisible();

        await page.getByRole('link', { name: ' Delete Account' }).click();
        // Assert:
        await expect(page.getByText('Account Deleted!')).toBeVisible();

        await page.getByRole('link', { name: 'Continue' }).click();

    });


    test("Test Case 2: Login User with correct email and password", async ({ page }) => {
        // Arrange:

        // Act:

        // Assert:

    });


});
