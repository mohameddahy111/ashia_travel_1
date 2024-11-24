import { Box, Card, CardHeader, Typography } from "@mui/material";
import * as React from "react";

export interface IAdmisCardProps {
  title:string;
  data:any;
  hit :string

}

export default function AdmisCard({title , data , hit}: IAdmisCardProps) {
  return (
    <Card
      sx={{ borderRadius: "10px", color: "#000", bgcolor: "#f3f3f3", p: 3 , my:3 }}
    >
      <Typography variant="h6" textTransform={'capitalize'} component="div" fontWeight={700}>
      {title}
      </Typography>
      <Box display={'flex'} justifyContent={'space-between'} >
        <Typography variant="body1" component="div" fontWeight={400}>
          Total {hit}
        </Typography>
          <Typography variant="body1" component="span" fontWeight={700}>
            {data?.length} {hit}
          </Typography>

      </Box>
    </Card>
  );
}
