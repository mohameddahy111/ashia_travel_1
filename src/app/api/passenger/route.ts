import { connectDb } from "@/db/connect-db";
import Passenger from "@/schemas/passenger.schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(res: NextRequest) {
    connectDb();
  const data = await res.json();
  const isExist = await Passenger.findOne().or([
    {phone: data.phone},
    {email: data.email}
  ])
  if (isExist) {
    return NextResponse.json(
      { message: "Passenger already exist" },
      { status: 401 }
    );
  }
  await Passenger.create(data);
  return NextResponse.json({
    message: "Passenger created successfully",
  
  },{  status: 201});
}

