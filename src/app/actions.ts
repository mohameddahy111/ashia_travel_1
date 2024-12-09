"use server";

import { connectDb } from "@/db/connect-db";
import Contact from "@/schemas/contact.schema";
import Flight from "@/schemas/flight.schema";
import Hotel from "@/schemas/hotel.schema";
import Program from "@/schemas/program.schema";
import Trip from "@/schemas/trip.schema";
import { cookies } from "next/headers";
import Passenger from "@/schemas/passenger.schema";
import { redirect } from "next/navigation";
import Admin from "@/schemas/admins.schema";
import bcryptjs from "bcryptjs";
import { UTApi } from "uploadthing/server";
export const setLocale = async (locale: string) => {
  (await cookies()).set("locale", locale);
};

export const GetAllTrips = async () => {
  connectDb();
  const data = await Trip.find().sort({ trip_status: 1 });
  const list = data.map(async (ele) => {
    return {
      trip: ele,
      passengers: (await Passenger.find({ trip_id: ele._id })).length
    };
  });
  const result = await Promise.all(list);
  return result;
};

export const GetTripDetails = async (id: string) => {
  connectDb();
  const tripDetails = await Trip.findById(id);
  const hotelsDetails = await Hotel.findOne({ trip_id: id });
  const flightDetails = await Flight.findOne({ trip_id: id });
  const programDetails = await Program.findOne({ trip_id: id });
  const contactDetails = await Contact.findOne({ trip_id: id });
  return JSON.stringify({
    tripDetails,
    hotelsDetails,
    flightDetails,
    programDetails,
    contactDetails
  });
};

export const deletePessager = async (id: string) => {
  connectDb();
  await Passenger.findByIdAndDelete({ _id: id });
  return {
    message: "Passenger deleted successfully"
  };
};
export const adminLogin = async (val: { phone: string; password: string }) => {
  connectDb();
  const user = await Admin.findOne({ phone: val.phone });
  if (!user) {
    return {
      message: "this phone is not available",
      status: 401
    };
  }
  const isMatch = bcryptjs.compareSync(val.password, user.password);
  if (!isMatch) {
    return {
      message: "this password is not correct",
      status: 401
    };
  }

  await Admin.findByIdAndUpdate(
    user?._id,
    { lastActive: new Date() },
    { new: true }
  );
  (await cookies()).set("admin", JSON.stringify(user), {
    maxAge: 60 * 60 * 24
  });
  redirect(`/admin/dashboard`);
};
export async function createAdmin(values: any) {
  connectDb();
  const isExist = await Admin.findOne({ phone: values.phone });
  if (isExist) {
    return {
      message: "Admin already exist",
      status: 401
    };
  }
  const hashPassword = bcryptjs.hashSync(values.password, 10);
  values.password = hashPassword;
  await Admin.create(values);
  return {
    message: "Admin created successfully",
    status: 201
  };
}
export async function authAdmin() {
  const admin = (await cookies()).get("admin")?.value;
  if (!admin) {
    redirect("/auth/login");
  }
  const role = JSON.parse(admin).role;
  return {
    role
  };
}
export async function logoutAdmin() {
  (await cookies()).delete("admin");
  redirect("/auth/login");
}
export async function deleteImage(key: string) {
  const utapi = new UTApi();
  const res = await utapi.deleteFiles(key)
return {
  success:res.success
}
}

// ----------------------------------- client sied------------------------------------------//

export const login = async (phone: string) => {
  connectDb();
  const admin = await Admin.findOne({ phone });
  if (admin) {
    redirect("/auth/login");
  }
  const user = await Passenger.findOne({ phone });
  if (!user) {
    return {
      message: " you are not add to trip ",
      status: 401
    };
  }
  const trip = await Trip.findOne({ _id: user.trip_id });
  if (!trip) {
    return {
      message: " your trip is not active ",
      status: 401
    };
  }
  (await cookies()).set("user", JSON.stringify(user), { maxAge: 60 * 60 * 24 });
  (await cookies()).set("trip", JSON.stringify(trip), { maxAge: 60 * 60 * 24 });
  redirect(`/trip/${String(trip.trip_name).trim()}`);
};
