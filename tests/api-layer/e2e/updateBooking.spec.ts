import{test,expect, APIResponse}from '../fixtures/generateApiTokenFixture'
import { updateBookingAPi } from '../services/bookingsApiService'
import payload from '../utility/payloads/createApiPayload.json'
test.describe('update bookings api',()=>{
  
   let updateBookingApiResponse:APIResponse
    
   test.beforeEach(async({request,authToken})=>{
      
       updateBookingApiResponse = await updateBookingAPi(request,payload.createBookingPayload,authToken)
   })

    test('status is 200', async ({ request })=>{
        console.log(await updateBookingApiResponse.status())
        console.log("Status:", updateBookingApiResponse.status());
        expect(updateBookingApiResponse.status()).toBe(200);
        const responsebody = await updateBookingApiResponse.json()
        
        console.log(responsebody)
        await expect(updateBookingApiResponse.status()).toBe(200)
})
    test('response data validation', async () => {
        const responseBody = await updateBookingApiResponse.json()
        expect(responseBody.firstname).toBe(payload.createBookingPayload.firstname)
        expect(responseBody.lastname).toBe(payload.createBookingPayload.lastname)
    })
})

test.describe('update bookings api', () => {
   


    test('invalid test response is 403', async ({ request }) => {
        
       const updateBookingApiResponse = await updateBookingAPi(request, payload.createBookingPayload,"2323434r45")
        await expect(updateBookingApiResponse.status()).toBe(403)
    })
    test('empty token- response is 403', async ({ request }) => {

        const updateBookingApiResponse = await updateBookingAPi(request, payload.createBookingPayload, "")
        await expect(updateBookingApiResponse.status()).toBe(403)
    })
})