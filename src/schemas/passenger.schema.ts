import mongoose from "mongoose";

export const passengerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    nationality: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    status: { type: String, required: true },
    trip_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true
    }
  },
  { timestamps: true }
);

const Passenger =
  mongoose.models.Passenger || mongoose.model("Passenger", passengerSchema);

export default Passenger;
