import {expect, Locator, Page} from "@playwright/test";
export class LoginPage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor( private page: Page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="uid"]');
        this.passwordInput = page.locator("input[name='password']");
        this.loginButton = page.locator("input[type='submit']");
    }
     async doLogin(username: string, password: string) {
        await this.page.goto(" ");
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        
       
  
    }}