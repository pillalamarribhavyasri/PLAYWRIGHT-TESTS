import { APIRequestContext } from "@playwright/test"
import { apiBaseUrl } from "../utility/apiConfis"
export async function getAllBooksApi(request: APIRequestContext) {
   const response = await request.get(`${apiBaseUrl}/booking`)
   return response

}
export async function getAllBooksApiById(request: APIRequestContext, id: any) {
   const response = await request.get(`${apiBaseUrl}/booking/${id}`)
   return response

}
export async function createBookingApi(request: APIRequestContext, payload: object) {
   const response = await request.post(`${apiBaseUrl}/booking`, {
      data: payload
   })
   return response

}
export async function updateBookingAPi(request: APIRequestContext, payload: object, token: string) {
   const response = await request.put(`${apiBaseUrl}/booking/3`, {
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
         "Cookie": `token=${token}`
      },
      data: payload
   })
   return response

}
export async function deleteBookingApi(request: APIRequestContext,id: number,token: string) {
   const response = await request.delete(`${apiBaseUrl}/booking/${id}`, {
      headers: {
         "Content-Type": "application/json",
         "Cookie": `token=${token}`
      }
   });

   return response;
}