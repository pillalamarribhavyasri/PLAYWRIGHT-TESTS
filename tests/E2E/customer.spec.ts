import { test } from '../utils/pagefixtures';
import { expect } from "@playwright/test";

test.describe("Customer Tests", () => {

    test.beforeEach(async ({ loginpage }) => {
        await loginpage.doLogin("mngr663722", "aruqYbA");
    });

    test('verify new customer form submission', async ({ customerpage }) => {

        await customerpage.navigateToNewCustomerPage();

        await customerpage.fillNewCustomerForm(
            "Jaanu",
            "1990-01-01",
            "123 Main St",
            "Newcity",
            "NY",
            "100001",
            "1234567890",
            `jaanu${Date.now()}@example.com`,
            "password123"
        );

        await customerpage.clickSubmitButton();

        await customerpage.successregistrationmsgvalidation();

        const customerId = await customerpage.getCustomerIdFromTable();

        console.log(`Customer ID: ${customerId}`);
    });

    test('verify new customer form submission with 5 pincode error msg', async ({ customerpage }) => {

        await customerpage.navigateToNewCustomerPage();

        await customerpage.fillNewCustomerForm(
            "Jaanu",
            "1990-01-01",
            "123 Main St",
            "New York",
            "NY",
            "10000",
            "1234567890",
            `jaanu${Date.now()}@example.com`,
            "password123"
        );

        await customerpage.clickSubmitButton();

        await customerpage.invalidpincodeerrormsgvalidation();
    });

    test('submit form without filling data and display validation messages', async ({ customerpage, page }) => {

        await customerpage.navigateToNewCustomerPage();

        page.once('dialog', async dialog => {
            expect(dialog.message()).toContain("please fill all fields");
            await dialog.accept();
        });

        await customerpage.clickSubmitButton();
    });

});