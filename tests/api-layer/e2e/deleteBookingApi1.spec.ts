// import { test, expect, APIResponse } from "@playwright/test";
// import { generateToken } from "../services/generateToken";
// import { deleteBookingApi } from "../services/bookingsApiService";

// test.describe("delete booking api", () => {

//     let tokenResponse: APIResponse;
//     let token: string;
//     let deleteBookingApiResponse: APIResponse;

//     test.beforeEach("deletion tests",async ({ request }) => {

//         tokenResponse = await generateToken(request);
//         expect(tokenResponse.status()).toBe(200);
//         const tokenResponseBody = await tokenResponse.json();
//         token = tokenResponseBody.token;
//         deleteBookingApiResponse = await deleteBookingApi(request, 5, token);

//     });

//     test("status is 201", async () => {
//         expect(deleteBookingApiResponse.status()).toBe(201);
//         expect(deleteBookingApiResponse.statusText()).toBe("Created");

//     })
// })