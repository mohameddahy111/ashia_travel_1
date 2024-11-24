"use client";
import { useTranslations } from "next-intl";

import { Box, Button, InputBase, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { login } from "./actions";
import { useSnackbar } from "notistack";

export default function Home() {
  const t = useTranslations();
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const { enqueueSnackbar } = useSnackbar();

  async function loginHandler() {
    await login(phoneNumber).then((result) => {
      if (result) {
        enqueueSnackbar(`${result.message}`, { variant: "error" });
      }
    });
  }

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('/img/pool_view-wallpaper-1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          position: "relative"
        }}
      >
        <Box position={"relative"} alignSelf={"flex-start"} zIndex={2}>
          <Link href={"https://aishatravel.pl/"} target={"_blank"} zIndex={3}>
            <Image
              src="https://vcdn.merlinx.eu/image//getbyid/490654"
              width={100}
              height={100}
              alt={"ashia"}
            />
          </Link>
        </Box>

        <Box
          position={"absolute"}
          bgcolor={"#00000051"}
          top={"0"}
          left={"0"}
          bottom={"0"}
          right={"0"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Box
            position={"relative"}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              component={"h1"}
              variant="h4"
              sx={{
                fontSize: "3.5rem",
                fontWeight: "bold",
                color: "#f58d54",
                textShadow: "0px 0px 10px #000000"
              }}
            >
              AISHA
            </Typography>
            <Typography
              component={"h1"}
              variant="h4"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "white",
                textShadow: "0px 0px 10px #000000",
                textAlign: "center",
                maxWidth: "90vw",
                margin: "auto"
              }}
            >
              {t("welcome")}
            </Typography>
            <Typography color="#fff">{t("phone_label")}</Typography>
            <Box>
              <InputBase
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                size={"small"}
                placeholder={" +48 660 630 099"}
                sx={{
                  bgcolor: "#ffffffca",
                  px: "15px",
                  py: "10px",
                  borderRadius: "20px"
                }}
                type={"tel"}
              />
            </Box>
            <Box>
              <Button
                onClick={loginHandler}
                variant="contained"
                sx={{
                  backgroundColor: "#f58d54",
                  color: "white",
                  textShadow: "0px 0px 10px #000000",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  marginTop: "20px"
                }}
              >
                {t("getStat")}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box
        position={"relative"}
        sx={{ translate: "0 -25%" }}
        width={"100%"}
        height={"100%"}
      >
        <Grid2 container spacing={1}>
          <Grid2 size={{md:6 , lg:3 , sm:6 , xs:12}}>
            <Features />
          </Grid2>
          <Grid2 size={{md:6 , lg:3 , sm:6 , xs:12}}>
            <Features />
          </Grid2>
          <Grid2 size={{md:6 , lg:3 , sm:6 , xs:12}}>
            <Features />
          </Grid2>
          <Grid2 size={{md:6 , lg:3 , sm:6 , xs:12}}>
            <Features />
          </Grid2>
        </Grid2>
      </Box> */}
    </Box>
  );
}
