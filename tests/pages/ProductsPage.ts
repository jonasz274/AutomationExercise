import { expect, Locator, Page } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly allProductsTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allProductsTitle = page.getByRole('heading', { name: 'All Products' })
  }

  async veryfiAllProductsTitle() {
    await expect(this.allProductsTitle).toBeVisible();
  }
}
