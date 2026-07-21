import { test, expect, APIResponse } from "@playwright/test";
import { createBooking } from "../utility/types/createBookingInterface";
import { createBookingApi, deleteBookingApi } from "../services/bookingsApiService";
import { generateToken } from "../services/generateToken";
import Payload from "../utility/payloads/createApiPayload.json";

test.describe("Delete Booking API", () => {

    let tokenResponse: APIResponse;
    let token: string;
    let bookingId: number;
    let deleteBookingApiresponse: APIResponse;

    test.beforeEach("creating id ,token and deletion of id", async ({ request }) => {
        const createBookingResponse = await createBookingApi(request, Payload.createBookingPayload);
        const createBookingBody = await createBookingResponse.json();
        bookingId = createBookingBody.bookingid;
        console.log(`Booking Id:${bookingId}`);
        tokenResponse = await generateToken(request);
        const tokenBody = await tokenResponse.json();
        token = tokenBody.token;
        console.log(`token:${token}`);
        deleteBookingApiresponse = await deleteBookingApi(request, bookingId, token);

    });

    test("status is 201", async () => {
        expect(deleteBookingApiresponse.status()).toBe(201);
        expect(deleteBookingApiresponse.statusText()).toBe("Created");
    })
})