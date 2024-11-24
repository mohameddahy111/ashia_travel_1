import Passenger from "@/schemas/passenger.schema";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const body = await request.json();
  const passenger = await Passenger.findByIdAndUpdate(id, body);
  if (!passenger) {
    return NextResponse.json({ message: "Passenger not found" }, { status: 404 });
  } else {
    return NextResponse.json({ message: "Passenger updated successfully" } , { status: 200 });
  }
}
