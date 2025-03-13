import { expect, Locator, Page } from "@playwright/test";

export class AccountPage {
    readonly page: Page;
    readonly accountCreatedText: Locator;
    readonly continueLink: Locator;
    readonly loggedInText: Locator;
    //readonly deleteAccountLink: Locator;
    readonly accountDeletedText: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountCreatedText = page.getByText('Account Created!');
        this.continueLink = page.getByRole('link', { name: 'Continue' });
        this.loggedInText = page.getByText('Logged in as');
        //this.deleteAccountLink = page.getByRole('link', { name: 'Delete Account' });
        this.accountDeletedText = page.getByText('Account Deleted!');
        this.logoutLink = page.getByRole('link', { name: 'Logout' });


    }

    async verifyAccountCreated() {
        await expect(this.accountCreatedText).toBeVisible();
        await this.continueLink.click();
    }

    async verifyUserLoggedIn() {
        await expect(this.loggedInText).toBeVisible();
    }

    async checkDeleteAccount() {
        await expect(this.accountDeletedText).toBeVisible();
        await this.continueLink.click()
    }

    async logout() {
        await this.logoutLink.click();
    }
}
