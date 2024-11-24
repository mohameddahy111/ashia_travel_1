

import PassengersTable from "@/components/admin/passengers-table";
import DarkBox from "@/components/DarkBox";
import { Box, Button,  Typography } from "@mui/material";
import * as React from "react";

export interface IPassengersPageProps {}

export default async function PassengersPage({}: IPassengersPageProps) {
  return (
    <DarkBox>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3
        }}
      >
        <Typography variant="h4" fontWeight={600} component="h4" gutterBottom>
          Passengers
        </Typography>
        <Button
          variant="contained"
          LinkComponent={"a"}
          href="passengers/new_passenger"
          color="primary"
          sx={{ bgcolor: "#f58d54" }}
        >
          Add Passenger
        </Button>
      </Box>
      <Box>
        <PassengersTable/>

      </Box>



    </DarkBox>
  );
}
