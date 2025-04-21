import { expect, Locator, Page } from "@playwright/test";

export class ProductsDetails1Page {
  readonly page: Page;
  readonly allProductsTitle: Locator;
  readonly urlProducts1: string;
  readonly productName: Locator;
  readonly productCategory: Locator;
  readonly productPrice: Locator;
  readonly productAvailability: Locator;
  readonly productCondition: Locator;
  readonly productBrand: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allProductsTitle = page.getByRole("heading", { name: "All Products" });
    this.urlProducts1 = "https://automationexercise.com/product_details/1";

    this.productName = page.locator(".product-information > h2");
    this.productCategory = page.locator(".product-information > p ").first();

    this.productPrice = page.getByText("Rs.");
    this.productAvailability = page.getByText("Availability: In Stock");
    this.productCondition = page.getByText("Condition: New");
    this.productBrand = page.getByText("Brand: Polo");
  }

  async veryfiProducts1Url() {
    await expect(this.page).toHaveURL(this.urlProducts1);
  }
  async veryfiProducts1Name() {
    await expect(this.productName).toBeVisible();
  }
  async veryfiProducts1Category() {
    await expect(this.productCategory).toBeVisible();
  }
  async veryfiProducts1Price() {
    await expect(this.productPrice).toBeVisible();
  }
  async veryfiProducts1Availability() {
    await expect(this.productAvailability).toBeVisible();
  }
  async veryfiProducts1Condition() {
    await expect(this.productCondition).toBeVisible();
  }
  async veryfiProducts1Brand() {
    await expect(this.productBrand).toBeVisible();
  }
}
