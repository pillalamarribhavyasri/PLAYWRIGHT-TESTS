export interface createBooking {
    bookingid: number,
    booking: booking
}

export interface booking {
    firstname: string,
    lastname: string,
    totalprice: number,
    depositpaid: boolean,
    additionalneeds: string,
    bookingdates: bookingdates
}

export interface bookingdates {
    checkin: string,
    checkout: string
}