import { Box, Typography } from "@mui/material";
import * as React from "react";

export interface INotFoundProps {}

export default function NotFound(props: INotFoundProps) {
  return (
    <Box
      color={"#fff"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={2}
      width={"100%"}
      height={"100vh"}
    >
      <Typography
        variant={"h4"}
        textTransform={"capitalize"}
        align="center"
        fontWeight={700}
        width={"100%"}
      >
        This page is not found
      </Typography>
      <Typography variant={"body1"} textTransform={"capitalize"}>
        Please check the URL or try again later
      </Typography>
      <Typography variant={"body1"} textTransform={"capitalize"}>
        If the problem persists, please contact us
      </Typography>
      <Typography variant={"body1"} textTransform={"capitalize"}>
        +48 660 630 099
      </Typography>
      <Typography variant={"body1"} textTransform={"capitalize"}>
        aishatravel@gmail.com
      </Typography>
      <Typography variant={"body1"} color="#f58d53" component={"a"} href="/" textTransform={"capitalize"}>
        Back to home
      </Typography>
    </Box>
  );
}
