import { expect, Locator,Page } from "@playwright/test";
import { midDefaultTimeout } from "../utils/helpers";
export class CustomerPage {
    private readonly page: Page;
    readonly nameInput: Locator;
     readonly menuItems: Locator;
     readonly dobInput: Locator;
     readonly addressInput: Locator;
     readonly cityInput: Locator;
     readonly stateInput: Locator;
     readonly pinInput: Locator;
     readonly mobileNumberInput: Locator;
     readonly emailInput: Locator;
     readonly passwordInput: Locator;
     readonly submitBtn:Locator; 
//customer registration success msg page!!!
readonly customerRegistrationSuccessMsg: Locator;
//pincode error msg
readonly pincodeErrorMsg: Locator;
readonly customerIdtable:Locator;
     

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator("input[name='name']");
        this.menuItems = page.locator('.menusubnav>li>a');
        this.dobInput = page.locator("input[id='dob']");
        this.addressInput = page.locator("textarea[name='addr']");
        this.cityInput = page.locator("input[name='city']");
        this.stateInput = page.locator("input[name='state']");
        this.pinInput = page.locator("input[name='pinno']");
        this.mobileNumberInput = page.locator("input[name='telephoneno']");
        this.emailInput = page.locator("input[name='emailid']");
        this.passwordInput = page.locator("input[name='password']");
        this.submitBtn = page.locator('input[name="sub"]');
         //pinno error
        this.pincodeErrorMsg = page.getByText("PIN Code must have 6 Digits", { exact: true });
        //customer registration success msg
        this.customerRegistrationSuccessMsg =page.getByText("Customer Registered Successfully!!!", { exact: true });
        this.customerIdtable=page.locator("table#customer")
    }

    async navigateToNewCustomerPage() {
     await this.page.locator("text=New Customer").click();

    }
    async fillNewCustomerForm(name: string,dob: string,address: string,city: string,state: string,pin: string,mobileNumber: string,email: string,password: string
    ) {
        await this.nameInput.fill(name);
        await this.dobInput.fill(dob);
        await this.addressInput.fill(address);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.pinInput.fill(pin);
        await this.mobileNumberInput.fill(mobileNumber);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    async clickSubmitButton() {
        await this.submitBtn.click();
    }
    async successregistrationmsgvalidation() {
        await expect(this.customerRegistrationSuccessMsg).toBeVisible({timeout:midDefaultTimeout})
        await expect(this.customerRegistrationSuccessMsg).toBeVisible();
    }
    async getCustomerIdFromTable() {
        await expect(this.customerIdtable.first()).toBeVisible({timeout:midDefaultTimeout})
         return await this.customerIdtable.getByRole('row').nth(3).locator('td').nth(1).textContent();
        }
    async invalidpincodeerrormsgvalidation() {
        await expect(this.pincodeErrorMsg).toBeVisible({ timeout: midDefaultTimeout });
    }
}