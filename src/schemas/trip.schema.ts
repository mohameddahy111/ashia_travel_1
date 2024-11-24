import mongoose from "mongoose";

export const tripSchema = new mongoose.Schema({
  trip_name: { type: String, required: true, unique: true },
  start_date: { type: String, required: true },
  end_date: { type: String, required: true },
  supervisor_name: { type: String, required: true },
  supervisor_phone: { type: String, required: true },
  destination_trip: { type: String },
  trip_status: { type: String, required: true },
  trip_description: { type: String }
},{timestamps:true});


const Trip = mongoose.models.Trip || mongoose.model("Trip", tripSchema);

export default Trip;
