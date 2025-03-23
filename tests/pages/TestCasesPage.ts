import { expect, Locator, Page } from "@playwright/test";

export class TestCasesPage {
  readonly page: Page;
  readonly testCasesTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.testCasesTitle = page.getByRole('heading', { name: 'Test Cases', exact: true })
  }

  async veryfiTestCasesTitle() {
    await expect(this.testCasesTitle).toBeVisible();
  }
}
