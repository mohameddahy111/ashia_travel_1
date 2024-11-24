import * as yup from "yup";



export const nweTripSchema = yup.object({
    trip: yup.object({
        trip_name: yup.string().required("Trip name is required"),
        start_date: yup.string().required("Start date is required"),
        end_date: yup.date().required("End date is required"),
        supervisor_name: yup.string().required("Supervisor name is required"),
        supervisor_phone: yup.string().required("Supervisor phone is required"),
        destination_trip: yup.string().required("Destination trip is required"),
        trip_status: yup.string().required("Trip status is required"),
        trip_description: yup.string().required("Trip description is required"),
    }),
    contact: yup.object({
        supervisor_phone_contact: yup.string().required("Supervisor phone contact is required"),
        hotel_phone_contact: yup.string().required("Hotel phone contact is required"),
        aisha_phone_contact: yup.string().required("Aisha phone contact is required"),
        email_contact: yup.string().email("Email contact is required").required("Email contact is required"),
        whatsapp_contact: yup.string().required("Whatsapp contact is required"),
        embassy_number_contact: yup.string().required("Embassy number contact is required"),
        more_instructions_contact: yup.string()
    }),
    hotel: yup.object({
        hotel_name: yup.string().required("Hotel name is required"),
        hotel_address: yup.string().required("Hotel address is required"),
        hotel_phone: yup.string().required("Hotel phone is required"),
        hotel_rating: yup.number().required("Hotel rating is required"),
        google_link: yup.string().required("Google link is required"),
        booking_link: yup.string().required("Booking link is required"),
        hotel_description: yup.string().required("Hotel description is required"),
    }),
    flight: yup.object({
        gathering_point: yup.string().required("Gathering point is required"),
        gathering_point_return: yup.string().required("Gathering point return is required"),
        gathering_time: yup.string().required("Gathering time is required"),
        gathering_time_return: yup.string().required("Gathering time return is required"),
        departure_date: yup.string().required("Departure date is required"),
        return_date: yup.string().required("Return date is required"),
        flight_number: yup.string().required("Flight number is required"),
        flight_number_return: yup.string().required("Flight number return is required"),
        take_off_time_departure: yup.string().required("Take off time departure is required"),
        take_off_time_return: yup.string().required("Take off time return is required"),
        gate_number: yup.string().required("Gate number is required"),
        gate_number_return: yup.string().required("Gate number return is required"),
        flight_instructions: yup.string()
    }),
    // program: yup.object({  
    //     tripDays: yup.string().required("Day is required"),
    //     program: yup.array(yup.object({
    //         program : yup.string().required(" Program is required"),
    //         day: yup.string().required(" Day is required"),
    //     }))
    // })
})