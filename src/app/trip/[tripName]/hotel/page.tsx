import DarkBox from "@/components/DarkBox";
import SwiperImage from "@/components/swiper/SwiperImage";
import { connectDb } from "@/db/connect-db";
import Hotel from "@/schemas/hotel.schema";
import { Star, StarOutline } from "@mui/icons-material";
import { Box, Grid2, Rating, Typography } from "@mui/material";
import { cookies } from "next/headers";
import Image from "next/image";
import * as React from "react";

export interface IProgramPageProps {
}

export default async function HotelPage({}: IProgramPageProps) {
  connectDb();
  const trip = (await cookies()).get("trip")?.value;
  const data = JSON.parse(trip ?? JSON.stringify(trip));
  const hotel = await Hotel.findOne({ trip_id: data?._id }).then((result) =>
    JSON.stringify(result)
  );
  const hotelJson = await JSON.parse(hotel ?? JSON.stringify(hotel));

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      gap={3}
      flexDirection={"column"}
    >
      <Typography
        variant={"h4"}
        textTransform={"capitalize"}
        align="center"
        fontWeight={700}
        width={"100%"}
      >
        {hotelJson?.hotel_name} Hotel
      </Typography>
      <Box color={"#fff"} display={"flex"} justifyContent={"center"} gap={3}>
        <Rating
          name="size-medium"
          emptyIcon={
            <StarOutline
              sx={{ opacity: 0.55, stroke: "#fff" }}
              fontSize="inherit"
            />
          }
          defaultValue={hotelJson?.hotel_rating}
          precision={0.1}
          readOnly
        />
      </Box>
      <SwiperImage />
      <Box
        display={"flex"}
        sx={{ width: "90%", margin: "auto", position: "relative" }}
      >
        <iframe
          src={hotelJson?.google_link}
          style={{ borderRadius: "20px", border: "none", opacity: ".5" }}
          width="100%"
          height="350"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
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
            Hotel address
          </Typography>
          <Typography
            align="center"
            px={5}
            color="#fff"
            variant={"body1"}
            textTransform={"capitalize"}
            p={3}
          >
            {hotelJson?.hotel_address}
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
            Hotel Booking Link
          </Typography>
          <Typography
            align="center"
            px={5}
            color="#fff"
            variant={"body1"}
            textTransform={"capitalize"}
            p={3}
          >
            {hotelJson?.booking_link}
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
            Hotel phone number
          </Typography>
          <Typography
            align="center"
            px={5}
            color="#fff"
            variant={"body1"}
            textTransform={"capitalize"}
            p={3}
          >
            {hotelJson?.hotel_phone}
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              fontWeight={700}
              color="#f58d53"
              px={5}
            >
              Hotel description
            </Typography>
            <Typography
              px={5}
              color="#fff"
              variant={"body1"}
              textTransform={"capitalize"}
              p={3}
            >
              {hotelJson?.hotel_description}
            </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}
