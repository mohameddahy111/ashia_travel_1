import Features from "@/components/client/features";
// import SwiperImage from "@/components/swiper/SwiperImage";
import { HikingOutlined } from "@mui/icons-material";
import { Box, Grid2, Typography } from "@mui/material";
import { cookies } from "next/headers";
// import { useTranslations } from "next-intl";
import React from "react";


export default async function TripPage() {
  const trip = (await cookies()).get("trip")?.value;

  const data = JSON.parse(trip ?? JSON.stringify(trip));
  const list = [
    {
      title: "Program Tipe",
      content: `${data?.trip_name} Program Tipe`,
      icon: (
        <HikingOutlined
          sx={{ color: "#f58d54", fontSize: "5rem", textAlign: "center" }}
        />
      ),
      image: "/img/trip_program.jpg",
      link:`/trip/${data?.trip_name}/program`
    },
    {
      title: "Flight Schedules",
      content: `${data?.trip_name} Flight Schedules`,
      image: "/img/take_off.jpg",
      link: `/trip/${data?.trip_name}/flight`
    },
    {
      title: "Hotel",
      content: `${data?.trip_name} Hotel`,
      image: "/img/hotels2.jpg",
      link: `/trip/${data?.trip_name}/hotel`
    },
    {
      title: "Connect us",
      content: `${data?.trip_name} Connect us`,
      image: "/img/help.jpg",
      link: `/trip/${data?.trip_name}/connect_info`
    }
  ];
  

  return (
    <Box>
      {/* <Box my={10}>
        <SwiperImage />
      </Box> */}
      <Box
        width={"90%"}
        maxWidth={"1000px"}
        mx={"auto"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={"start"}
        gap={3}
        py={5}
        px={2}
        color={"white"}
      >
        <Typography
          textTransform={"capitalize"}
          variant="h4"
          width={"100%"}
          textAlign={"center"}
        >
          {data?.trip_name}
        </Typography>
        <Typography variant="body1" width={"100%"} textAlign={"center"}>
          {Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
          }).format(new Date(data?.start_date))}{" "}
          -{" "}
          {Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
          }).format(new Date(data?.end_date))}
        </Typography>
        <Box margin={"auto"} mt={10}>
          <Grid2 container spacing={3}>
            {list.map((item, index) => (
              <Features key={index} ele={item} />
            ))}
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
}
