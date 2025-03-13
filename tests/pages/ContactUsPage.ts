import { expect, Locator, Page } from "@playwright/test";
import { faker, Faker } from "@faker-js/faker";

export class ContactUsPage {
  readonly page: Page;
  readonly getInTouch: Locator;
  readonly name: Locator;
  readonly email: Locator;
  readonly subject: Locator;
  readonly message: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getInTouch = page.getByRole("heading", { name: "Get In Touch" });
    this.name = page.getByPlaceholder("Name");
    this.email = page.getByPlaceholder("Email", { exact: true });
    this.subject = page.getByPlaceholder("Subject");
    this.message = page.getByPlaceholder("Your Message Here");
    this.submit = page.getByRole("button", { name: "Submit" });
  }

  async verifyGetInTouch() {
    await expect(this.getInTouch).toBeVisible();
  }
  async fillName() {
    await this.name.fill(faker.person.fullName());
  }
  async fillEmail() {
    await this.email.fill(faker.internet.email());
  }
  async fillSubject() {
    await this.subject.fill(faker.hacker.phrase());
  }
  async fillMessage() {
    await this.message.fill(faker.lorem.paragraphs());
  }
  async cubmitClick() {
    await this.submit.click();
  }
}
