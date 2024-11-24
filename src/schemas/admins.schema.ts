import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    phone: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: [],
    lastActive: { type: String }
  },
  { timestamps: true }
);

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

export default Admin;
