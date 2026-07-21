import { test, expect, APIResponse } from "@playwright/test"
import { getAllBooksApiById } from "../services/bookingsApiService"
import { getAllBooksApi } from "../services/bookingsApiService"
test.describe('Get All Books API Tests', () => {

    let responseAllBooksApi: APIResponse
    let response: any

    test.beforeEach(async ({ request }) => {
        responseAllBooksApi = await getAllBooksApi(request)
        const responseBodyAllBooksApi = await responseAllBooksApi.json()
        const id = responseBodyAllBooksApi[0].bookingid
        console.log(`Id from get API: ${id}`)
        response = await getAllBooksApiById(request, id)
    })

    test('status is 200', async ({ request }) => {
        const responseBody = await response.json()
        console.log(responseBody)
        await expect(response.status()).toBe(200)
    })

    test('property validations', async ({ request }) => {
        const responseBody = await response.json()
        console.log(responseBody)
        await expect(responseBody).toHaveProperty("firstname")
        await expect(responseBody).toHaveProperty("lastname")
        await expect(responseBody).toHaveProperty("totalprice")
        await expect(responseBody).toHaveProperty("depositpaid")
        await expect(responseBody).toHaveProperty("bookingdates")
        await expect(responseBody.bookingdates).toHaveProperty("checkin")
        await expect(responseBody.bookingdates).toHaveProperty("checkout")
    })

})
test.describe('Get All Books API Invalid Tests', () => {


    test('status code is 404 for Id:0', async ({ request }) => {
        const response = await getAllBooksApiById(request, 0)
        expect(response.status()).toBe(404)
    })
    test('status code is 404 for Id negative: -10', async ({ request }) => {
        const response = await getAllBooksApiById(request, -10)
        expect(response.status()).toBe(404)
    })
    test('status code is 400 for special chars "&*^"', async ({ request }) => {
        const response = await getAllBooksApiById(request, "!@#$")
        console.log(response.status());
        console.log(await response.text());
        expect(response.status()).toBe(404)
    })

})