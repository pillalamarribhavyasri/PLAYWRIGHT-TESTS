import { expect, Locator, Page } from '@playwright/test';
export class Dashboardpage {
    private readonly page: Page;
    readonly menuItems: Locator;
    readonly welcomeMessage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.welcomeMessage = page.getByText('welcome to Manager')
        this.menuItems = page.locator('ul.menusubnav li');
    }

    async pageTitle() {
        await expect(this.page).toHaveTitle('Guru99 Bank Manager HomePage');
    }

    async getwelcomeMessage() {
        await expect(this.welcomeMessage).toBeVisible();
    }

    async getMenuItemsCountShouldBeFiften() {
        await expect(this.menuItems).toHaveCount(15);
    }

}