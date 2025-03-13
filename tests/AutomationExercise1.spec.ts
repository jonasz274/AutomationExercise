import { test, expect, type Page, type Locator } from "@playwright/test";
import { HomePage } from "./pages/HomePage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { AccountPage } from "./pages/AccountPage";
import { faker } from "@faker-js/faker";
import { ContactUsPage } from "./pages/ContactUsPage";

test.describe("Automation Exercise", () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goTo();
    await page.locator(".fc-button.fc-cta-consent.fc-primary-button").click();
    await expect(page).toHaveTitle(await page.title());
  });

  test("Test Case 1: Register User", async ({ page }) => {
    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);
    const accountPage = new AccountPage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigateToSignup();
    await loginPage.verifynewUserSignupVisible();
    await signupPage.fillSignupForm("Anna", "Jeanne633@yahoo.com");
    await signupPage.submitSignup();
    await signupPage.verifyEnterAccountInformation();
    await signupPage.fillAccountDetails("superPassword");
    await signupPage.submitAccountCreation();
    await accountPage.verifyAccountCreated();
    await homePage.verifyLoggedUsername("Anna");
    await homePage.deleteAccount();
    await accountPage.checkDeleteAccount();
  });

  test("Test Case 2: Login User with correct email and password", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);
    const signupPage = new SignupPage(page);

    await homePage.navigateToSignup();
    await loginPage.verifyLoginPageVisible();

    await signupPage.createUserToTest();
    await homePage.logout();

    await loginPage.verifyLoginPageVisible();
    await loginPage.loginWithValidCredentials(
      "Jeanee6378@yahoo.com",
      "password123"
    );
    await accountPage.verifyUserLoggedIn();

    await homePage.deleteAccount();
    await accountPage.checkDeleteAccount();
  });

  test("Test Case 3: Login User with incorrect email and password", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigateToSignup();
    await loginPage.loginWithInvalidCredentials();
    await loginPage.verifyLoginError();
  });

  test("Test Case 4: Logout User", async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);

    await homePage.navigateToSignup();
    await loginPage.verifyLoginPageVisible();
    await signupPage.createUserToTest();
    await homePage.logout();
    await loginPage.verifyLoginPageVisible();
  });

  test("Test Case 5: Register User with existing email", async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);

    await homePage.navigateToSignup();
    await loginPage.verifyLoginPageVisible();

    await signupPage.fillSignupForm("Anna", "Jeanee6378@yahoo.com");
    await signupPage.submitSignup();
    await signupPage.verifyErrorEmail();
  });

  test("Test Case 6: Contact Us Form", async ({ page }) => {
    const homePage = new HomePage(page);
    const contactUs = new ContactUsPage(page);

    await homePage.contact();

    await contactUs.verifyGetInTouch();
    await contactUs.fillName();
    await contactUs.fillEmail();
    await contactUs.fillSubject();
    await contactUs.fillMessage();
    await contactUs.cubmitClick();
  });
});
