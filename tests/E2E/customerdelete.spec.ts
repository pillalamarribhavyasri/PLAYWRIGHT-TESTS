import {test } from '../utils/pagefixtures'

test.describe('Customer Tests',() =>{
    test.beforeEach(async({loginpage}) => {
        await loginpage.doLogin("mngr663722","aruqYbA")
    })

    test (' Verify New Customer Form Submission and rechecking', async({customerpage,deletecustomerpage,page})=>{
        const date = new Date();
        await customerpage.navigateToNewCustomerPage();
        await customerpage.fillNewCustomerForm('jaanu','2005-10-01','123 Main St','New York','NY','123456','1234567890',`jaanu${date.getTime()}@example.com`,'password123');
        await customerpage.clickSubmitButton();
        await customerpage.successregistrationmsgvalidation();
        const customerId = await customerpage.getCustomerIdFromTable();
        console.log('Customer ID:', customerId);
        await deletecustomerpage.navigateToDeleteCustomerPage();
        await deletecustomerpage.enterCustomerIdInput(customerId!);
        await deletecustomerpage.HandleAlertwithAccept();
        await deletecustomerpage.clickSubmitButton();

        await page.goBack();
        await deletecustomerpage.navigateToDeleteCustomerPage();
        await deletecustomerpage.enterCustomerIdInput(customerId!);
        await deletecustomerpage.clickSubmitButton();
    }) 
})