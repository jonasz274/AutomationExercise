import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginErrorMessage: Locator;
  readonly loginHeading: Locator;
  readonly newUserSignup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.loginErrorMessage = page.getByText(
      "Your email or password is incorrect!"
    );
    this.loginHeading = page.getByRole("heading", {
      name: "Login to your account",
    });
    this.newUserSignup = page.getByRole("heading", {
      name: "New User Signup!",
    });
  }

  async loginWithValidCredentials(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithInvalidCredentials() {
    await this.emailInput.fill("invalid@example.com");
    await this.passwordInput.fill("wrongpassword");
    await this.loginButton.click();
  }

  async verifyLoginError() {
    await expect(this.loginErrorMessage).toBeVisible();
  }

  async verifyLoginPageVisible() {
    await expect(this.loginHeading).toBeVisible();
  }
  async verifynewUserSignupVisible() {
    await expect(this.newUserSignup).toBeVisible();
    await expect(this.newUserSignup).toBeVisible();
  }
}
