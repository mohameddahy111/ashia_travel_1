import { Box, Card, CardMedia, Grid2, Typography } from "@mui/material";
import * as React from "react";

export interface IFeaturesProps {
  ele: any;
}

export default function Features({ ele }: IFeaturesProps) {
  return (
    <Grid2 size={{ sm: 6, xs: 6}}>
      <Card
        sx={{
          width: "100%",
          maxWidth: "300px",
          margin: "auto",
            // border: " 3px solid #f58c54",
            borderRadius: "20px",
          bgcolor: "rgba(255, 255, 255, 0.1)",
          color: "white",
          boxShadow: "0 0px 15px  #f58c54",
          cursor: "pointer",
          ":active": {
            boxShadow: "0 0px 4px  #f58c54"
          }
        }}
      >
        <Box
        component={"a"}
        href={ele.link}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          justifyContent={"end"}
          alignItems={"center"}
          sx={{
            backgroundImage: `url(${ele.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            width: "100%",
            position: "relative"
          }}
        >
        </Box>
        <Box>
            <Typography variant="h6" textAlign={'center'} fontWeight={600} color="#f58d54">
              {ele.title}
            </Typography>
            <Typography  component={'p'} variant="caption" textAlign={'center'}>
              {ele.content}
            </Typography>

        </Box>
      </Card>
    </Grid2>
  );
}
