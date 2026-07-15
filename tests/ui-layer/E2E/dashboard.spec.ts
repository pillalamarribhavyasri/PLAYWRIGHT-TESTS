import {test } from '../utils/pagefixtures'

test.describe('dashboard Tests',() =>{

     test.beforeEach(async({loginpage}) => {
        await loginpage
        
    })

    test('@dashboard @regression Verify Dashboard Page Title', async({dashboardpage})=>{
        await dashboardpage.pageTitle();
    })

    test('@dashboard @regression Verify Welcome Message', async({dashboardpage})=>{
        await dashboardpage.getwelcomeMessage();
    })

    test('@dashboard @regression Verify Menu Items Count Should Be Fifteen', async({dashboardpage})=>{
        await dashboardpage.getMenuItemsCountShouldBeFiften();
    })
    

})