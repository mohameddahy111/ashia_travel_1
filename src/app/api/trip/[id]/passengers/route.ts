import Passenger from "@/schemas/passenger.schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const allPasseengers = await Passenger.find({ trip_id: id });
  return NextResponse.json(allPasseengers);
}
