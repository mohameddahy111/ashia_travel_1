import { GetTripDetails } from '@/app/actions';
import EditTrip from '@/components/admin/edit-trip';
import * as React from 'react';

export interface IEditPageProps {
  params: Promise<{ id: string }>
}

export default async function EditPage ({params}: IEditPageProps) {
  const { id } =( await params)
  const tripDetails = await GetTripDetails(id);
  

  return (
    <div>
     <EditTrip data={JSON.parse(tripDetails)} />  
    </div>
  ); 
}
