
import mongoose from "mongoose";

export const contactSchema = new mongoose.Schema({
  trip_id: {
    type: mongoose.Types.ObjectId,
    ref: "Trip",
    required: true
  },
  supervisor_phone_contact: { type: String, required: true },
  hotel_phone_contact: { type: String, required: true },
  aisha_phone_contact: { type: String, required: true },
  email_contact: { type: String, required: true },
  whatsapp_contact: { type: String, required: true },
  embassy_number_contact: { type: String, required: true },
  more_instructions_contact: { type: String, required: true }
},{timestamps:true});


const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;