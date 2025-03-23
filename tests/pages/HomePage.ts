import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly signupLink: Locator;
  readonly loggedUsername: Locator;
  readonly deleteAccountLink: Locator;
  readonly logoutLink: Locator;
  readonly contactUs: Locator;
  readonly testCases: Locator;
  readonly productsButton: Locator;

  readonly cookieButton: Locator;
  readonly urlHome: string;

  constructor(page: Page) {
    this.page = page;
    this.signupLink = page.getByRole("link", { name: "Signup / Login" });
    this.loggedUsername = page.locator("b");
    this.deleteAccountLink = page.getByRole("link", { name: "Delete Account" });
    this.logoutLink = page.getByRole("link", { name: "Logout" });
    this.contactUs = page.getByRole("link", { name: "Contact us" });
    this.testCases = page.locator('li').filter({ hasText: 'Test Cases' });
    this.productsButton = page.getByRole('link', { name: 'Products' })


    this.cookieButton = page.locator(".fc-button.fc-cta-consent.fc-primary-button");
    this.urlHome = "https://automationexercise.com";
  }

  async goTo() {
    await this.page.goto(this.urlHome);
  }
  async cookieAccept() {
    await this.cookieButton.click();
  }
  async navigateToSignup() {
    await this.signupLink.click();
  }
  async verifyLoggedUsername(username: string) {
    await expect(this.loggedUsername).toContainText(username);
  }
  async deleteAccount() {
    await this.deleteAccountLink.click();
  }
  async logout() {
    await this.logoutLink.click();
  }
  async contact() {
    await this.contactUs.click();
  }
  async testCasesClick() {
    await this.testCases.click();
  }
  async productsButtonClick() {
    await this.productsButton.click();
  }
}
