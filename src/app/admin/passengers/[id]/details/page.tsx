import EditPassenger from "@/components/admin/passengger-edit";
import Passenger from "@/schemas/passenger.schema";

export interface IPassengersDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function PassengersDetails({
  params
}: IPassengersDetailsProps) {
  const { id } = await params;
  const passengerDetails = await Passenger.findById(id);


  return (
    <div>
      <EditPassenger
        info={JSON.stringify(passengerDetails)}
   
      />
    </div>
  );
}
