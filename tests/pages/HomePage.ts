import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly signupLink: Locator;
  readonly loggedUsername: Locator;
  readonly deleteAccountLink: Locator;

  constructor(page: Page) {
      this.page = page;
      this.signupLink = page.getByRole('link', { name: 'Signup / Login' });
      this.loggedUsername = page.locator('b')
      this.deleteAccountLink = page.getByRole('link', { name: 'Delete Account' });

  }

  async goTo() {
      await this.page.goto("https://automationexercise.com");
  }

  async navigateToSignup() {
      await this.signupLink.click();
  }
  async verifyLoggedUsername(username: string) {
    await expect(this.loggedUsername).toContainText(username)
}
async deleteAccount() {
    await this.deleteAccountLink.click();

}

}

