import {
  AppBar,
  Box,
  List,
  ListItemButton,
  Toolbar,
  Typography
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TripLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("trip");
  return (
    <div>
      <AppBar
        elevation={0}
        position="static"
        sx={{ bgcolor: "transparent", color: "#203040" }}
      >
        <Toolbar sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <Link href="/" style={{padding:"20px"}}> 

            <Image
              src={"https://vcdn.merlinx.eu/image//getbyid/490654"}
              priority
              width={70}
              height={70}
              alt="ashia"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                boxShadow: "0px 0px 2px #fff",
                borderRadius: "50%",
                cursor: "pointer"

              }}
              className="Img_bg"
            />
          </Link>
          {/* <Box>
            <List sx={{display: "flex", justifyContent:"center", alignItems:"center", gap: 1}}>
              <ListItemButton LinkComponent={"a"} href="/trip/">
                <Typography variant="body1" color="#f58d54" fontWeight={700}  textTransform={"capitalize"}>
                  {t("menu.trip program")}
                </Typography>
              </ListItemButton>
              <ListItemButton LinkComponent={"a"} href="/trip/connect_info/">
                <Typography variant="body1" color="#f58d54" fontWeight={700} textTransform={"capitalize"}>
                  {t("menu.connect info")}
                </Typography>
              </ListItemButton>
            </List>
          </Box> */}
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}
