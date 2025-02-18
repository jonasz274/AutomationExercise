import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/HomePage";
import { faker } from '@faker-js/faker';


test.describe("Automation Exercise", () => {
    test.beforeEach(async ({ page }) => {
        // TODO: open the page
        const homePage = new HomePage(page);
        await homePage.goTo();

        // Arrange:
        const pageTitle = await page.title();
        // Act:
        console.log("Page Titlee: ", pageTitle)
        // Assert:
        await expect(page).toHaveTitle(pageTitle);

    });

    // test.afterEach(async ({ page }) => {
    //     // TODO: clear the data after the test

    // });

    // Arrange:
    let loginName = "Name"
    //const emailAddress = "email1@gmail"
    let emailAddress = faker.internet.email();
    let password = 'Password'
    let randomPassword = faker.internet.password();
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let company = faker.company.name();
    let address = faker.location.streetAddress();
    let city = faker.location.city();
    let zipCode = faker.location.zipCode();
    let mobileNhone = faker.phone.number();



    async function CreateAcoundt(page) {

        // Act:
        await page.getByPlaceholder('Name').fill(loginName);
        //await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(emailAddress);
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('Jeanne63@yahoo.com');

        //Jeanne63@yahoo.com
        await page.getByRole('button', { name: 'Signup' }).click();

        // Assert:
        await expect(page.getByText('Enter Account Information')).toBeVisible;

        // Act:
        await page.locator('#uniform-id_gender1').click();
        await page.getByLabel('Password *').fill(password);
        await page.locator('#days').selectOption('6');
        await page.locator('#months').selectOption('9');
        await page.locator('#years').selectOption('2003');
        await page.getByLabel('Sign up for our newsletter!').check();
        await page.getByLabel('Receive special offers from').check();
        await page.getByLabel('First name *').fill(firstName);
        await page.getByLabel('Last name *').fill(lastName);
        await page.getByLabel('Company', { exact: true }).fill(company);
        await page.getByLabel('Address * (Street address, P.').fill(address);
        await page.getByLabel('Country *').selectOption('United States');
        await page.getByLabel('State *').fill('State');
        await page.getByLabel('City *').fill(city);
        await page.locator('#zipcode').fill(zipCode);
        await page.getByLabel('Mobile Number *').fill(mobileNhone);
        await page.getByRole('button', { name: 'Create Account' }).click();

        // Assert:
        await expect(page.getByText('Account Created!')).toBeVisible()

        // Act:
        await page.getByRole('link', { name: 'Continue' }).click();
        // Assert:
        await expect(page.getByText('Logged in as Name')).toBeVisible();


    }

    test("Test Case 1: Register User", async ({ page }) => {

        // Arrange:
        const homePage = new HomePage(page);

        // Act:
        //await page.getByRole('link', { name: 'Signup / Login' }).click();
        await homePage.signupLogin.click();

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
        await page.getByLabel('Password *').fill(password);
        await page.locator('#days').selectOption('6');
        await page.locator('#months').selectOption('9');
        await page.locator('#years').selectOption('2003');
        await page.getByLabel('Sign up for our newsletter!').check();
        await page.getByLabel('Receive special offers from').check();
        await page.getByLabel('First name *').fill(firstName);
        await page.getByLabel('Last name *').fill(lastName);
        await page.getByLabel('Company', { exact: true }).fill(company);
        await page.getByLabel('Address * (Street address, P.').fill(address);
        await page.getByLabel('Country *').selectOption('United States');
        await page.getByLabel('State *').fill('State');
        await page.getByLabel('City *').fill(city);
        await page.locator('#zipcode').fill(zipCode);
        await page.getByLabel('Mobile Number *').fill(mobileNhone);
        await page.getByRole('button', { name: 'Create Account' }).click();

        // Assert:
        await expect(page.getByText('Account Created!')).toBeVisible()

        // Act:
        await page.getByRole('link', { name: 'Continue' }).click();
        // Assert:
        await expect(page.getByText('Logged in as Name')).toBeVisible();

        // Act:
        await page.getByRole('link', { name: 'Delete Account' }).click();
        // Assert:
        await expect(page.getByText('Account Deleted!')).toBeVisible();

        // Act:
        await page.getByRole('link', { name: 'Continue' }).click();

    });


    test("Test Case 2: Login User with correct email and password", async ({ page }) => {

        // Arrange:
        const homePage = new HomePage(page);

        // Act:
        //await page.getByRole('link', { name: 'Signup / Login' }).click();
        await homePage.signupLogin.click();

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
        await page.getByLabel('Password *').fill(password);
        await page.locator('#days').selectOption('6');
        await page.locator('#months').selectOption('9');
        await page.locator('#years').selectOption('2003');
        await page.getByLabel('Sign up for our newsletter!').check();
        await page.getByLabel('Receive special offers from').check();
        await page.getByLabel('First name *').fill(firstName);
        await page.getByLabel('Last name *').fill(lastName);
        await page.getByLabel('Company', { exact: true }).fill(company);
        await page.getByLabel('Address * (Street address, P.').fill(address);
        await page.getByLabel('Country *').selectOption('United States');
        await page.getByLabel('State *').fill('State');
        await page.getByLabel('City *').fill(city);
        await page.locator('#zipcode').fill(zipCode);
        await page.getByLabel('Mobile Number *').fill(mobileNhone);
        await page.getByRole('button', { name: 'Create Account' }).click();

        // Assert:
        await expect(page.getByText('Account Created!')).toBeVisible()

        // Act:
        await page.getByRole('link', { name: 'Continue' }).click();

        // Assert:
        await expect(page.getByText('Logged in as Name')).toBeVisible();


        // Login user 
        await page.getByRole('link', { name: 'Logout' }).click();
        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(emailAddress)
        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button', { name: 'Login' }).click();

        // Assert:
        await expect(page.getByText('Logged in as Name')).toBeVisible();

        // Act:
        await page.getByRole('link', { name: 'Delete Account' }).click();

        // Assert:
        await expect(page.getByText('Account Deleted!')).toBeVisible();

    });

    test("Test Case 3: Login User with incorrect email and password", async ({ page }) => {

        // Arrange:
        const homePage = new HomePage(page);

        // Act:
        //await page.getByRole('link', { name: 'Signup / Login' }).click();
        await homePage.signupLogin.click();

        // Assert:
        await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

        // Act:
        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(emailAddress);
        await page.getByPlaceholder('Password').fill(randomPassword);
        await page.getByRole('button', { name: 'Login' }).click();

        // Assert:
        await expect(page.getByText('Your email or password is')).toBeVisible();
    });


    test("Test Case 4: Logout User", async ({ page }) => {

        // Arrange:
        const homePage = new HomePage(page);

        // Act:
        //await page.getByRole('link', { name: 'Signup / Login' }).click();
        await homePage.signupLogin.click();

        await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

        await CreateAcoundt(page);

        await page.getByRole('link', { name: 'Logout' }).click();

        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('Jeanne63@yahoo.com');

        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button', { name: 'Login' }).click();
        //Jeanne63@yahoo.com
        
        //await expect(page.getByText('Logged in as Name')).toBeVisible();
        await expect(page.locator('b')).toContainText(loginName);

        await page.getByRole('link', { name: ' Logout' }).click();
        await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
    });
    

});
