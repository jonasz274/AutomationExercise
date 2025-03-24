import { expect, Locator, Page } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly allProductsTitle: Locator;
  readonly productsList: Locator;
  readonly firstProductsView: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allProductsTitle = page.getByRole('heading', { name: 'All Products' })
    this.productsList = page.locator('.features_items')
    this.firstProductsView = page.locator('.choose').first()
  }

  async veryfiAllProductsTitle() {
    await expect(this.allProductsTitle).toBeVisible();
  }
  async veryfiProductsList() {
    await expect(this.productsList).toBeVisible();
  }
  async firstProductsViewClick() {
    await this.firstProductsView.click()
  }
}
