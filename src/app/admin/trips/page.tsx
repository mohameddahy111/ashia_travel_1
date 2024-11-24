import { GetAllTrips } from "@/app/actions";
import TableTrips from "@/components/admin/tabel-trip";
import DarkBox from "@/components/DarkBox";
import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import * as React from "react";

export interface ITripsPageProps {}

export default async function TripsPage({}: ITripsPageProps) {
  const trips = await GetAllTrips();
  return (
    <Box
      sx={{
        borderRadius: "20px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 3
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography component={"h4"} variant="h4" fontWeight={700}>
          Trips
        </Typography>
        <Button
          LinkComponent={"a"}
          href="trips/new-trip"
          startIcon={<Add />}
          variant="contained"
          sx={{ color: "#fff", bgcolor: "#f58d54" }}
        >
          Add Trip
        </Button>
      </Box>
      <DarkBox>
        <TableTrips  data={trips} />
      </DarkBox>
    </Box>
  );
}
