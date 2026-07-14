import {test } from '../utils/pagefixtures'

test.describe('dashboard Tests',() =>{

     test.beforeEach(async({loginpage}) => {
        await loginpage.doLogin("mngr663722","aruqYbA")
    })

    test('Verify Dashboard Page Title', async({dashboardpage})=>{
        await dashboardpage.pageTitle();
    })

    test('Verify Welcome Message', async({dashboardpage})=>{
        await dashboardpage.getwelcomeMessage();
    })

    test('Verify Menu Items Count Should Be Fifteen', async({dashboardpage})=>{
        await dashboardpage.getMenuItemsCountShouldBeFiften();
    })
    

})