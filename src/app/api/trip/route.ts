import { connectDb } from "@/db/connect-db";
import Contact from "@/schemas/contact.schema";
import Flight from "@/schemas/flight.schema";
import Hotel from "@/schemas/hotel.schema";
import Program from "@/schemas/program.schema";
import Trip from "@/schemas/trip.schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  connectDb();
  const data = await req.json();
  const { trip, contact, hotel, flight, program } = data;
  const tripIsExist = await Trip.findOne({ trip_name: trip.trip_name });
  if (tripIsExist) {
    return NextResponse.json(
      { message: "Trip already exist" },
      { status: 401 }
    );
  }
  const newTrip = await Trip.create(trip);
  if (newTrip) {
    await Contact.create({ trip_id: newTrip._id, ...contact });
    await Hotel.create({ trip_id: newTrip._id, ...hotel });
    await Flight.create({ trip_id: newTrip._id, ...flight });
    await Program.create({ trip_id: newTrip._id, ...program });
  }
  return NextResponse.json(
    {
      message: "Trip created successfully"
    },
    { status: 201 }
  );
}
export async function PUT(req: NextRequest) {
  connectDb();
  const data = await req.json();
  const { trip, contact, hotel, flight, program } = data;
  const tripIsExist = await Trip.findById(trip.id);
  if (tripIsExist && tripIsExist.trip_name !== trip.trip_name) {
    const find = await Trip.findOne({ trip_name: trip.trip_name });
    if (find) {
      return NextResponse.json(
        { message: "Trip already exist" },
        { status: 401 }
      );
    }
  }
  console.log(tripIsExist);
  await Trip.findOneAndUpdate(
    {
      _id: trip.id
    },
    {
      $set: {
        trip_name: trip.trip_name,
        start_date: trip.start_date,
        end_date: trip.end_date,
        supervisor_name: trip.supervisor_name,
        supervisor_phone: trip.supervisor_phone,
        destination_trip: trip.destination_trip,
        trip_status: trip.trip_status,
        trip_description: trip.trip_description
      }
    },
    { new: true }
  );
  await Contact.findOneAndUpdate(
    {
      trip_id: trip.id
    },
    {
      ...contact
    },
    { new: true }
  );
  await Hotel.findOneAndUpdate(
    {
      trip_id: trip.id
    },
    {
      ...hotel
    },
    { new: true }
  );
  await Program.findOneAndUpdate(
    {
      trip_id: trip.id
    },
    {
      ...program
    },
    { new: true }
  );
  await Flight.findOneAndUpdate(
    {
      trip_id: trip.id
    },
    {
      ...flight
    },
    { new: true }
  );
  return NextResponse.json({
    message: "Trip updated successfully",
    status: 200
  });
}

export async function DELETE(req: NextRequest) {
  connectDb();
  const {id} = await req.json();
  const trip = await Trip.findById(JSON.parse(id));
  console.log(trip);

  if (trip) {
    await Trip.findByIdAndDelete( trip._id , { new: true});
    await Contact.findOneAndDelete({ trip_id:trip._id } , { new: true });
    await Hotel.findOneAndDelete({ trip_id:trip._id } , { new: true });
    await Flight.findOneAndDelete({ trip_id:trip._id } , { new: true });
    await Program.findOneAndDelete({ trip_id:trip._id } , { new: true });
  }else{
    return NextResponse.json({ message: "Trip not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Trip deleted successfully" }, { status: 200 });
}

export async function GET() {
  connectDb();
  const trips = await Trip.find().select({ trip_name: 1, _id: 1 });
  return NextResponse.json(trips);
}
