import { Box } from "@mui/material";
import * as React from "react";
export interface IDarkBoxProps {
  children: React.ReactNode; 
  mt?:number
}

export default function DarkBox({ children , mt  }: IDarkBoxProps) {
  return (
    <Box
mt={mt}
      sx={{
        width: "100%",
        bgcolor: "#333333",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px gray",
        p: 3,
      }}
    >
      {children}
    </Box>
  );
}
