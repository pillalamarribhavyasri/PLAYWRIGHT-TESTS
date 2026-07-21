import { APIRequestContext } from "@playwright/test"
import { tokenGenerationUrl } from "../utility/apiConfis"
export async function generateToken(request: APIRequestContext) {
    const response = await request.post(`${tokenGenerationUrl}`, {
        headers: { "Content-Type": "application/json" },

        data: {

            "username": "admin",
            "password": "password123"
        }
    })
    return response

}