import{test,expect, APIResponse}from '@playwright/test'
import { getAllBooksApi } from '../services/bookingsApiService'
test.describe('get all-books API tests',()=>{
   let response:any
    
   test.beforeEach(async({request})=>{
     response= await getAllBooksApi(request)
   })

    test('status is 200', async ({ request })=>{
        const responsebody=await response.json()
        console.log(responsebody)
         await expect(response.status()).toBe(200)
})

    test('bookingid validation', async ({ request })=>{
        const responsebody=await response.json()
        console.log(responsebody)
       responsebody.forEach((element:any ) => {
        expect(element).toHaveProperty('bookingid')
         expect(typeof element.bookingid).toBe('number')
        
      });
})
})
