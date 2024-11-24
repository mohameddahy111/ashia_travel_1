import DarkBox from "@/components/DarkBox";
import { connectDb } from "@/db/connect-db";
import Flight from "@/schemas/flight.schema";
import { Box, Divider, Grid2, Typography } from "@mui/material";
import { cookies } from "next/headers";
import * as React from "react";

export interface IFlightPageProps {
  params: Promise<{ tripName: string }>;
}

export default async function FlightPage({ params }: IFlightPageProps) {
  const { tripName } = await params;
  connectDb();
  const trip = (await cookies()).get("trip")?.value;
  const data = JSON.parse(trip ?? JSON.stringify(trip));
  const flight = await Flight.findOne({ trip_id: data?._id }).then((result) =>
    JSON.stringify(result)
  );
  const flightJson = await JSON.parse(flight ?? JSON.stringify(flight));

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      gap={5}
      flexDirection={"column"}
      width={"90vw"}
      margin={"auto"}
      overflow={"hidden"}
      py={5}
    >
      <Typography
        variant={"h4"}
        textTransform={"capitalize"}
        align="center"
        fontWeight={700}
      >
        {tripName} Flight Schedule
      </Typography>
      <DarkBox>
      <Typography variant='body1' textTransform={'capitalize'}  fontWeight={500} color={'#fff'} >
            * all time in 24 hours system
        </Typography>

        <Typography
          my={3}
          variant={"h4"}
          textTransform={"capitalize"}
          fontWeight={700}
          width={"100%"}
        >
          departure
        </Typography>
        <Grid2 container spacing={3}>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"

            >
              Gathering point
            </Typography>
            <Typography align="center" color="#fff" variant={"body1"} textTransform={"capitalize"} p={3}>
              {flightJson?.gathering_point}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              Gathering time
            </Typography>
            <Typography
              color="#fff"
              variant={"body1"}
              align="center"
              textTransform={"capitalize"}
              p={3}
            >
              {flightJson?.gathering_time}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              Departure date
            </Typography>
            <Typography align="center" color="#fff" variant={"body1"} textTransform={"capitalize"} p={3}>
              {Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              }).format(new Date(flightJson?.departure_date))}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
             flight number
            </Typography>
            <Typography align="center" color="#fff" variant={"body1"} textTransform={"capitalize"} p={3}>
              {flightJson?.flight_number}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              take off time
            </Typography>
            <Typography align="center" color="#fff" variant={"body1"} textTransform={"capitalize"} p={3}>
              {flightJson?.take_off_time_departure}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              gate number
            </Typography>
            <Typography align="center" color="#fff" variant={"body1"} textTransform={"capitalize"} p={3}>
              {flightJson?.gate_number}
            </Typography>
          </Grid2>
          <Box bgcolor={"#fff"} width={"90%"} borderRadius={"10px"}>

          <Divider sx={{ bgcolor: "#f58d54" }} />
          </Box>
          <Typography 
                    my={3}
                    variant={"h4"}
                    textTransform={"capitalize"}
                    fontWeight={700}
                    width={"100%"}
          
          >
            Return
          </Typography>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              gathering point
            </Typography>
            <Typography align="center" color="#fff" variant={"body1"} textTransform={"capitalize"} p={3}>
              {flightJson?.gathering_point_return}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              gathering time
            </Typography>
            <Typography align="center" color="#fff" variant={"body1"} textTransform={"capitalize"} p={3}>
              {flightJson?.gathering_time_return}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>  
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              return date
            </Typography>
            <Typography align="center" color="#fff" variant={"body1"} textTransform={"capitalize"} p={3}>
              {Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              }).format(new Date(flightJson?.return_date))}
            </Typography>
              </Grid2>
              <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
             flight number
            </Typography>
            <Typography align="center" color="#fff" variant={"body1"} textTransform={"capitalize"} p={3}>
              {flightJson?.flight_number_return}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              take off time
            </Typography>
            <Typography align="center" color="#fff" variant={"body1"} textTransform={"capitalize"} p={3}>
              {flightJson?.take_off_time_return}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              gate number
            </Typography>
            <Typography align="center" color="#fff" variant={"body1"} textTransform={"capitalize"} p={3}>
              {flightJson?.gate_number_return}
            </Typography>
          </Grid2>
          <Box bgcolor={"#fff"} width={"90%"} borderRadius={"10px"}>

          <Divider sx={{ bgcolor: "#f58d54" }} />
          </Box>

          <Grid2 size={{xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              flight instructions
            </Typography>
            <Typography display={'flex'} px={5}  width={"90%"}  color="#fff" variant={"body1"} textTransform={"capitalize"} p={3}>
              {flightJson?.flight_instructions}
            </Typography>
          </Grid2>
        </Grid2>
      </DarkBox>
    </Box>
  );
}
