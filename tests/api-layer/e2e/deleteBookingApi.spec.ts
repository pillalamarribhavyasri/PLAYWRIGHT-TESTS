import { test, expect, APIResponse } from '../fixtures/generateApiTokenFixture'
import { createBooking } from "../utility/types/createBookingInterface";
import { createBookingApi, deleteBookingApi } from "../services/bookingsApiService";
import Payload from "../utility/payloads/createApiPayload.json";

test.describe("Delete Booking API", () => {
    let bookingId: number;
    let deleteBookingApiresponse: APIResponse;

    test.beforeEach("creating id ,token and deletion of id", async ({ request,authToken}) => {
        const createBookingResponse = await createBookingApi(request, Payload.createBookingPayload);
        const createBookingBody = await createBookingResponse.json();
        bookingId = createBookingBody.bookingid;
        console.log(`Booking Id:${bookingId}`);
        deleteBookingApiresponse = await deleteBookingApi(request, bookingId, authToken);

    });

    test("status is 201", async () => {
        expect(deleteBookingApiresponse.status()).toBe(201);
        expect(deleteBookingApiresponse.statusText()).toBe("Created");
    })
})