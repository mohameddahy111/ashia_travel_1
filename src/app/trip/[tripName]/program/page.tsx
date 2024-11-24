import DarkBox from "@/components/DarkBox";
import { connectDb } from "@/db/connect-db";
import Program from "@/schemas/program.schema";
import { Box, Typography } from "@mui/material";
import { cookies } from "next/headers";
import * as React from "react";

export interface IProgramPageProps {
  params: Promise<{ tripName: string }>;
}

export default async function ProgramPage({ params }: IProgramPageProps) {
  const { tripName } = await params;
  connectDb();
  const trip = (await cookies()).get("trip")?.value;
  const data = JSON.parse(trip ?? JSON.stringify(trip));
  const program = await Program.findOne({ trip_id: data?._id }).then((result) =>
    JSON.stringify(result)
  );
  const programJson = await JSON.parse(program ?? JSON.stringify(program));

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      gap={3}
      flexDirection={"column"}
    >
      <Typography
        variant={"h4"}
        textTransform={"capitalize"}
        align="center"
        fontWeight={700}
        width={"100%"}
      >
        {tripName} Program
      </Typography>
      <Box color={"#fff"}>
        <Typography variant={"h6"} align="center" textTransform={"capitalize"} width={"100%"}>
          {programJson?.tripDays} Days
        </Typography>
        {programJson?.program.map((item: any, index: number) => (
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap:5,
            flexDirection: "column",
            width: "90%",
            margin: "20px auto"
          }}  key={index}>
            <DarkBox >
              <Typography variant={"h6"} textTransform={"capitalize"}>
                {item.day} Day
              </Typography>
              <Typography variant={"body1"} textTransform={"capitalize"} p={3}>
                {item.program}
              </Typography>
            </DarkBox>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
