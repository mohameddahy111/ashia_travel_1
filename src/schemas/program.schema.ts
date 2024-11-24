import mongoose from "mongoose";

export const programSchema = new mongoose.Schema(
  {
    trip_id: {
    type: mongoose.Types.ObjectId,
      ref: "Trip",
      required: true
    },
    tripDays: { type: String, required: true },
    program: [
      {
        day: { type: String , required: true },
        program: { type: String , required: true}
      }
    ]
  },
  { timestamps: true }
);

const Program = mongoose.models.Program || mongoose.model("Program", programSchema);

export default Program;
