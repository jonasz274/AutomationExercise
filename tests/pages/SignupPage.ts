import { faker } from "@faker-js/faker";
import { expect, Locator, Page } from "@playwright/test";
import { AccountPage } from "./AccountPage";

export class SignupPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInputSignup: Locator;
  readonly signupButton: Locator;
  readonly genderRadio: Locator;
  readonly passwordInput: Locator;
  readonly daysDropdown: Locator;
  readonly monthsDropdown: Locator;
  readonly yearsDropdown: Locator;
  readonly createAccountButton: Locator;
  readonly enterAccountInformation: Locator;
  readonly signUpForOurNewsletterCheckbox: Locator;
  readonly receiveSpecialFffersFromCheckbox: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly company: Locator;
  readonly address: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipcode: Locator;
  readonly mobileNumber: Locator;
  readonly errorEmail: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByPlaceholder("Name");
    this.emailInputSignup = page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address");
    this.signupButton = page.getByRole("button", { name: "Signup" });
    this.errorEmail = page.getByText("Email Address already exist!");
    this.enterAccountInformation = page.getByText("Enter Account Information");
    this.genderRadio = page.locator("#uniform-id_gender1");
    this.passwordInput = page.getByLabel("Password *");
    this.daysDropdown = page.locator("#days");
    this.monthsDropdown = page.locator("#months");
    this.yearsDropdown = page.locator("#years");
    this.signUpForOurNewsletterCheckbox = page.getByLabel(
      "Sign up for our newsletter!"
    );
    this.receiveSpecialFffersFromCheckbox = page.getByLabel(
      "Receive special offers from"
    );
    this.firstName = page.getByLabel("First name *");
    this.lastName = page.getByLabel("Last name *");
    this.company = page.getByLabel("Company", { exact: true });
    this.address = page.getByLabel("Address * (Street address, P.");
    this.country = page.getByLabel("Country *");
    this.state = page.getByLabel("State *");
    this.city = page.getByLabel("City *");
    this.zipcode = page.locator("#zipcode");
    this.mobileNumber = page.getByLabel("Mobile Number *");

    this.createAccountButton = page.getByRole("button", {
      name: "Create Account",
    });
  }

  async fillSignupForm(username: string, email: string) {
    await this.nameInput.fill(username);
    await this.emailInputSignup.fill(email);
  }
  async verifyEnterAccountInformation() {
    await expect(this.enterAccountInformation).toBeVisible();
  }
  async submitSignup() {
    await this.signupButton.click();
  }

  async fillAccountDetails(password: string) {
    await this.genderRadio.click();
    await this.passwordInput.fill(password);
    await this.daysDropdown.selectOption("6");
    await this.monthsDropdown.selectOption("9");
    await this.yearsDropdown.selectOption("2003");

    await this.signUpForOurNewsletterCheckbox.check();
    await this.receiveSpecialFffersFromCheckbox.check();

    await this.firstName.fill(faker.person.firstName());
    await this.lastName.fill(faker.person.lastName());
    await this.company.fill(faker.company.name());
    await this.address.fill(faker.location.streetAddress());
    await this.country.selectOption("Australia");
    await this.state.fill(faker.location.state());
    await this.city.fill(faker.location.city());
    await this.zipcode.fill(faker.location.zipCode());
    await this.mobileNumber.fill(faker.phone.number());
  }

  async submitAccountCreation() {
    await this.createAccountButton.click();
  }
  async createUserToTest() {
    const accountPage = new AccountPage(this.page);
    await this.fillSignupForm("Anna", "Jeane635778@yahoo.com");
    await this.submitSignup();
    await this.verifyEnterAccountInformation();
    await this.fillAccountDetails("password123");
    await this.submitAccountCreation();
    await accountPage.verifyAccountCreated();
  }
  async verifyErrorEmail() {
    await expect(this.errorEmail).toBeVisible();
  }
}
