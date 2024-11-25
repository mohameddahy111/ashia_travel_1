import EditPassenger from "@/components/admin/passengger-edit";
import { connectDb } from "@/db/connect-db";
import Passenger from "@/schemas/passenger.schema";

export interface IPassengersDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function PassengersDetails({
  params
}: IPassengersDetailsProps) {
  const { id } = await params;
  connectDb()
  const passengerDetails = await Passenger.findById(id);


  return (
    <div>
      <EditPassenger
        info={JSON.stringify(passengerDetails)}
   
      />
    </div>
  );
}
