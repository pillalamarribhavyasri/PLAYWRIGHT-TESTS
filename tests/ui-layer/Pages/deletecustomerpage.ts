 import {test, Locator, Page, expect} from '@playwright/test';
import { midDefaultTimeout } from '../utils/helpers';
export class DeleteCustomerPage {
    HandleAlertwithAcceptForDeleteCustomerCheck() {
        throw new Error('Method not implemented.');
    }
    
    readonly page: Page;
    readonly deleteCustomerMenuItem : Locator;
    readonly customerIdInput: Locator;
    readonly submitButton: Locator;

    constructor( page: Page) {

        this.page = page;
        this.deleteCustomerMenuItem = page.getByRole('link', { name: 'Delete Customer', exact: true });
        this.customerIdInput = page.locator('input[name="cusid"]');
        this.submitButton = page.getByRole('button', { name: 'Submit' });


    }

    async navigateToDeleteCustomerPage() {
        await expect(this.deleteCustomerMenuItem).toBeEnabled({ timeout:midDefaultTimeout });
        await this.deleteCustomerMenuItem.click();
    }

    async enterCustomerIdInput(customerIdInput: string) {
        await this.customerIdInput.fill(customerIdInput, { timeout:midDefaultTimeout });
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

    async HandleAlertwithAccept() {
            this.page.on('dialog', async dialog => {
            const message = dialog.message();
            if (message.includes('Do you really want to delete this Customer?')) {
                console.log(message);
                await dialog.accept();
            } else if (message.includes('Customer does not exist!!')) {
                console.log(message);
                expect(message).toBe('Customer does not exist!!');
                await dialog.accept();
            }
        });
    }
}      