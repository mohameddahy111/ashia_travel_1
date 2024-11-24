import { GetAllTrips } from "@/app/actions";
import AdmisCard from "@/components/admin/admins-card";
import TableTrips from "@/components/admin/tabel-trip";
import DarkBox from "@/components/DarkBox";
import { Box, Grid2, Typography } from "@mui/material";
import * as React from "react";

export interface IDashboardPageProps {}

export default async function DashboardPage({}: IDashboardPageProps) {
    const trips = await GetAllTrips();
  
  return (
    <Box
      sx={{
        color: "#fff",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 3
      }}
    >
      <Typography component={"h4"} variant="h4" fontWeight={700} width={"100%"}>
        Dashboard
      </Typography>
      <DarkBox>
        <Grid2 container spacing={3}>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <AdmisCard  hit={"Trip"}title="Number of trips" data={trips} />
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <AdmisCard hit={'travel'} title="Number of travels" data={[]} />
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <AdmisCard  hit={'travel'} title="Number of travels" data={[]}/>
          </Grid2>
        </Grid2>
      </DarkBox>
      <DarkBox>
        <TableTrips data={trips} />
      </DarkBox>
    </Box>
  );
}
