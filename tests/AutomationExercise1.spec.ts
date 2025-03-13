import { test, expect, type Page, type Locator } from "@playwright/test";
import { HomePage } from "./pages/HomePage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { AccountPage } from "./pages/AccountPage";
import { faker } from "@faker-js/faker";

test.describe("Automation Exercise", () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goTo();
        await page.locator('.fc-button.fc-cta-consent.fc-primary-button'). click()
        await expect(page).toHaveTitle(await page.title());
    });

    test("Test Case 1: Register User", async ({ page }) => {
        const homePage = new HomePage(page);
        const signupPage = new SignupPage(page);
        const accountPage = new AccountPage(page);
        const loginPage = new LoginPage(page);

        await homePage.navigateToSignup();
        await loginPage.verifynewUserSignupVisible()

        await signupPage.fillSignupForm('Anna');
        await signupPage.submitSignup();

        await signupPage.verifyEnterAccountInformation()

        await signupPage.fillAccountDetails();

        await signupPage.submitAccountCreation();
        await accountPage.verifyAccountCreated();

        await homePage.verifyLoggedUsername('Anna')

        await homePage.deleteAccount();
        await accountPage.checkDeleteAccount()

    });

    test("Test Case 2: Login User with correct email and password", async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const accountPage = new AccountPage(page);

        await homePage.navigateToSignup();
        await loginPage.loginWithValidCredentials();
        await accountPage.verifyUserLoggedIn();
        await homePage.deleteAccount();
    });

    test("Test Case 3: Login User with incorrect email and password", async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await homePage.navigateToSignup();
        await loginPage.loginWithInvalidCredentials();
        await loginPage.verifyLoginError();
    });

    test("Test Case 4: Logout User", async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const accountPage = new AccountPage(page);

        await homePage.navigateToSignup();
        await loginPage.loginWithValidCredentials();
        await accountPage.logout();
        await loginPage.verifyLoginPageVisible();
    });
});