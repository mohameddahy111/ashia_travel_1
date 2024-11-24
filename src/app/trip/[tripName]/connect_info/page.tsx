import DarkBox from "@/components/DarkBox";
import { connectDb } from "@/db/connect-db";
import Contact from "@/schemas/contact.schema";
import { Box, Grid2, Typography } from "@mui/material";
import { cookies } from "next/headers";
import React from "react";

export default async function ConnectPage() {
  connectDb();
  const trip = (await cookies()).get("trip")?.value;
  const data = JSON.parse(trip ?? JSON.stringify(trip));
  const contact = await Contact.findOne({ trip_id: data?._id }).then((result) =>
    JSON.stringify(result)
  );
  const contactJson = await JSON.parse(contact ?? JSON.stringify(contact));

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={5}
      width={"100%"}
      overflow={"hidden"}
    >
      <Typography
        variant={"h4"}
        textTransform={"capitalize"}
        align={"center"}
        fontWeight={700}
        width={"100%"}
        p={5}
      >
        Connect with us
      </Typography>
      <DarkBox>
        <Grid2 container spacing={3}>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              supervisor phone
            </Typography>
            <Typography
              align="center"
              px={5}
              color="#fff"
              variant={"body1"}
              textTransform={"capitalize"}
              p={3}
            >
              {contactJson?.supervisor_phone_contact}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              hotel phone
            </Typography>
            <Typography
              align="center"
              px={5}
              color="#fff"
              variant={"body1"}
              textTransform={"capitalize"}
              p={3}
            >
              {contactJson?.hotel_phone_contact}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              aisha phone
            </Typography>
            <Typography
              align="center"
              px={5}
              color="#fff"
              variant={"body1"}
              textTransform={"capitalize"}
              p={3}
            >
              {contactJson?.aisha_phone_contact}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              email
            </Typography>
            <Typography
              align="center"
              px={5}
              color="#fff"
              variant={"body1"}
              textTransform={"capitalize"}
              p={3}
              display={"block"}
              component={"a"}
              target={"_blank"}
              href={`mailto:${contactJson?.email_contact}`}
            >
              {contactJson?.email_contact}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              whatsapp_Number
            </Typography>
            <Typography
              align="center"
              px={5}
              color="#fff"
              variant={"body1"}
              textTransform={"capitalize"}
              p={3}
              display={"block"}
            >
              {contactJson?.email_contact}
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              align="center"
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              embassy number
            </Typography>
            <Typography
              align="center"
              px={5}
              color="#fff"
              variant={"body1"}
              textTransform={"capitalize"}
              p={3}
              display={"block"}
            >
              {contactJson?.embassy_number_contact}
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <Typography
              variant={"h6"}
              textTransform={"capitalize"}
              fontWeight={700}
              width={"100%"}
              color="#f58d53"
            >
              more instructions
            </Typography>
            <Typography
              px={5}
              color="#fff"
              variant={"body1"}
              textTransform={"capitalize"}
              p={3}
              display={"block"}
            >
              {contactJson?.more_instructions_contact}
            </Typography>
          </Grid2>
        </Grid2>
      </DarkBox>
    </Box>
  );
}
