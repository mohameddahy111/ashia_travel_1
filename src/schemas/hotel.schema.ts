import mongoose from "mongoose";

export const hotelSchema = new mongoose.Schema(
  {
    trip_id: {
    type: mongoose.Types.ObjectId,
      ref: "Trip",
      required: true
    },
    hotel_name: { type: String, required: true},
    hotel_address: { type: String, required: true },
    hotel_phone: { type: String, required: true },
    hotel_rating: { type: Number, required: true },
    google_link: { type: String, required: true },
    booking_link: { type: String, required: true },
    hotel_description: { type: String },
    img: [
      {
        img_url: { type: String },
        img_id: { type: String }
      }
    ]
  },
  { timestamps: true }
);

const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);

export default Hotel;
