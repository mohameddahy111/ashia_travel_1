    import mongoose from "mongoose";

    export const flightSchema = new mongoose.Schema({
      trip_id: {
    type: mongoose.Types.ObjectId,
        ref: "Trip",
        required: true
      },
      gathering_point: { type: String, required: true },
      gathering_point_return: { type: String, required: true },
      gathering_time: { type: String, required: true },
      gathering_time_return: { type: String, required: true },
      departure_date: { type: String, required: true },
      gate_number: { type: String, required: true },
      return_date: { type: String, required: true },
      flight_number: { type: String, required: true },
      flight_number_return: { type: String, required: true },
      take_off_time_departure: { type: String, required: true },
      take_off_time_return: { type: String, required: true },
      gate_number_return: { type: String, required: true },
      flight_instructions: { type: String },

    },{timestamps:true});


    const Flight = mongoose.models.Flight || mongoose.model("Flight", flightSchema);

    export default Flight;