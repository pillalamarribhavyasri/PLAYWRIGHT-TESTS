import{test,expect, APIResponse}from '@playwright/test'
import {generateToken}  from '../services/generateToken'
import { updateBookingAPi } from '../services/bookingsApiService'
import payload from '../utility/payloads/createApiPayload.json'
test.describe('update bookings api',()=>{
   let tokenResponse:APIResponse
   let token:string
   let updateBookingApiResponse:any
    
   test.beforeEach(async({request})=>{
       tokenResponse = await generateToken(request)
       expect(await tokenResponse.status()).toBe(200)
       const tokenResponsebody = await tokenResponse.json()
       token=tokenResponsebody.token
       updateBookingApiResponse = await updateBookingAPi(request,payload.createBookingPayload, token)
   })

    test('status is 200', async ({ request })=>{
        console.log(await updateBookingApiResponse.status())
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