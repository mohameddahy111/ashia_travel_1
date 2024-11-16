import Features from "@/components/client/features";
import SwiperImage from "@/components/swiper/SwiperImage";
import { HikingOutlined } from "@mui/icons-material";
import { Box, Grid2, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const list = [
  {
    title: "Program Tipe",
    content: "Egyptian Pyramid Tour",
    icon: <HikingOutlined sx={{ color: "#f58d54" ,fontSize:"5rem" , textAlign:"center" }} />,
    image: "/img/trip_program.jpg"
  },
  {
    title: "Flight Schedules",
    content: "Egyptian Pyramid Tour",
    image: "/img/take_off.jpg"

  },
  {
    title: "Hotel",
    content: "Egyptian Pyramid Tour",
    image: "/img/hotels2.jpg"

  },
  {
    title: "Connect us",
    content: "Egyptian Pyramid Tour",
    image: "/img/help.jpg"  },
];

export default function TripPage() {
  // git push https://github.com/mohameddahy111/ashia_travel.git branch-to-move:main
  const t = useTranslations("trip");

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
        <Typography variant="h4" width={"100%"} textAlign={"center"}>
          {t("title")}
        </Typography>
        <Typography variant="body1" width={"100%"} textAlign={"center"}>
          8, Dec - 18, Dec 2024
        </Typography>
      <Box  margin={'auto'}  mt={10} >
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
