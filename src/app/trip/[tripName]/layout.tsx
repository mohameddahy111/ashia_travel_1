import { AppBar, Toolbar } from "@mui/material";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import React from "react";

export interface ITripLayoutProps {
  children: React.ReactNode;
  params: Promise<{ tripName: string }>;
}
export default async function TripLayout({
  children,
  params
}: ITripLayoutProps) {
  const { tripName } = await params;
  const trip = (await cookies()).get("trip")?.value;
  if (!trip) {
    redirect("/");
  }
  const data = JSON.parse(trip ?? JSON.stringify(trip));
  if (data?.trip_name !== tripName) {
    notFound();
  }

  return (
    <div>
      <AppBar
        elevation={0}
        position="static"
        sx={{ bgcolor: "transparent", color: "#203040" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Link href="/" style={{ padding: "20px" }}>
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
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}
