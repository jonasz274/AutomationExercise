import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goTo() {
    await this.page.goto('https://automationexercise.com/');
    //await this.page.getByLabel('Consent').click();
    await this.page.locator('button:has-text("Consent")').click();

  }

  async getTitle() {
    return this.page.title();

  }

  signupLogin = this.page.getByRole('link', { name: 'Signup / Login' });

  
}


export class LoginPage {
  constructor(private page: Page) {}

  signupLogin = this.page.getByRole('link', { name: 'Signup / Login' });

  
}