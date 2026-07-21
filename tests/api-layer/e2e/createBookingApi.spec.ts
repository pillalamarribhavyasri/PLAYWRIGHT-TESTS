import { test,expect, request } from "@playwright/test"
import { createBookingApi } from "../services/bookingsApiService"
import Payload from "../utility/payloads/createApiPayload.json"
import { createBooking } from "../utility/types/createBookingInterface"

test.describe('create booking api', () => {

    let responseBodyCreateBookingApi:createBooking
    let response: any
    let bookingId:number

    test.beforeEach(async ({ request }) => {

        response = await createBookingApi(request,Payload.createBookingPayload)
        responseBodyCreateBookingApi = await response.json()
        bookingId = responseBodyCreateBookingApi.bookingid;
        console.log(`Booking Id:${bookingId}`);
        console.log(responseBodyCreateBookingApi)
        

    })

    test('status is 200', async ({ request }) => {
        expect(await response.status()).toBe(200)
    })
    test('response data validation', async () => {
        expect(responseBodyCreateBookingApi.booking.firstname).toBe(Payload.createBookingPayload.firstname)
        expect(responseBodyCreateBookingApi.booking.lastname).toBe(Payload.createBookingPayload.lastname)
    })
    test('schema validation', async () => {
        expect(typeof responseBodyCreateBookingApi.bookingid).toBe('number')
        expect(typeof responseBodyCreateBookingApi.booking).toBe('object')
        expect(typeof responseBodyCreateBookingApi.booking.bookingdates).toBe('object')
        expect(typeof responseBodyCreateBookingApi.booking.firstname).toBe('string')
    })

})
test.describe('create booking api', () => {
    test("removing required parameters in payload", async ({request}) => {
      const response = await createBookingApi(request,Payload.createBookingPayloadwithinvalid)
      expect(await response.status()).toBe(500)

    })
})
