import { expect, Locator, Page } from "@playwright/test";

export class ProductsDetails1Page {
  readonly page: Page;
  readonly allProductsTitle: Locator;
  readonly urlProducts1: string;


  constructor(page: Page) {
    this.page = page;
    this.allProductsTitle = page.getByRole('heading', { name: 'All Products' })


    this.urlProducts1 = "https://automationexercise.com/product_details/1";
  }

  async veryfiProducts1Url() {
    await expect(this.page).toHaveURL(this.urlProducts1);
  }

}
