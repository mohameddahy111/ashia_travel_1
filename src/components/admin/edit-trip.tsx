"use client";

import DarkBox from "@/components/DarkBox";
import { nweTripSchema } from "@/vailtion/yup.schema";
import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  createTheme,
  CssBaseline,
  Grid2,
  MenuItem,
  TextField,
  ThemeProvider,
  Typography
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import * as React from "react";

export interface INewTripPageProps {
  data: any;
}

export default function EditTrip({ data }: INewTripPageProps) {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [tripStatus, setTripStatus] = React.useState<string>("active");
  const [tripDays, setTripDays] = React.useState<string>(
    (data?.programDetails?.tripDays as string) || "1"
  );
  const [imagesHotel, setImagesHotel] = React.useState<File[]>([]);
  const handleImageChange = (files: File[]) => {
    if (files.length > 4) {
      enqueueSnackbar("You can only upload 4 images", { variant: "error" });
      return;
    } else {
      setImagesHotel(files);
    }
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#f58d54"
      },
      secondary: {
        main: "#fff"
      }
    }
  });
  const formik = useFormik({
    validationSchema: nweTripSchema,
    initialValues: {
      trip: {
        id: data?.tripDetails?._id,
        trip_name: (data?.tripDetails?.trip_name as string) || "",
        start_date: (data?.tripDetails?.start_date as string) || "",
        end_date: (data?.tripDetails?.end_date as string) || "",
        supervisor_name: (data?.tripDetails?.supervisor_name as string) || "",
        supervisor_phone: (data?.tripDetails?.supervisor_phone as string) || "",
        destination_trip: (data?.tripDetails?.destination_trip as string) || "",
        trip_status: (data?.tripDetails?.trip_status as string) || tripStatus,
        trip_description: (data?.tripDetails?.trip_description as string) || ""
      },
      contact: {
        supervisor_phone_contact:
          (data?.contactDetails?.supervisor_phone_contact as string) || "",
        hotel_phone_contact:
          (data?.contactDetails?.hotel_phone_contact as string) || "",
        aisha_phone_contact:
          (data?.contactDetails?.aisha_phone_contact as string) || "",
        email_contact: (data?.contactDetails?.email_contact as string) || "",
        whatsapp_contact:
          (data?.contactDetails?.whatsapp_contact as string) || "",
        embassy_number_contact:
          (data?.contactDetails?.embassy_number_contact as string) || "",
        more_instructions_contact:
          (data?.contactDetails?.more_instructions_contact as string) || ""
      },
      hotel: {
        hotel_name: (data?.hotelsDetails?.hotel_name as string) || "",
        hotel_address: (data?.hotelsDetails?.hotel_address as string) || "",
        hotel_phone: (data?.hotelsDetails?.hotel_phone as string) || "",
        hotel_rating: (data?.hotelsDetails?.hotel_rating as string) || "",
        google_link: (data?.hotelsDetails?.google_link as string) || "",
        booking_link: (data?.hotelsDetails?.booking_link as string) || "",
        hotel_description:
          (data?.hotelsDetails?.hotel_description as string) || ""
      },
      flight: {
        gathering_point: (data.flightDetails.gathering_point as string) || "",
        gathering_point_return:
          (data?.flightDetails?.gathering_point_return as string) || "",
        gathering_time: (data?.flightDetails?.gathering_time as string) || "",
        gathering_time_return:
          (data?.flightDetails?.gathering_time_return as string) || "",
        departure_date: (data.flightDetails.departure_date as string) || "",
        return_date: (data?.flightDetails?.return_date as string) || "",
        flight_number: (data?.flightDetails?.flight_number as string) || "",
        flight_number_return:
          (data?.flightDetails?.flight_number_return as string) || "",
        take_off_time_departure:
          (data?.flightDetails?.take_off_time_departure as string) || "",
        take_off_time_return:
          (data?.flightDetails?.take_off_time_return as string) || "",
        gate_number: (data?.flightDetails?.gate_number as string) || "",
        gate_number_return:
          (data?.flightDetails?.gate_number_return as string) || "",
        flight_instructions:
          (data?.flightDetails?.flight_instructions as string) || ""
      },
      program: {
        tripDays: tripDays,
        program:
          data?.programDetails?.program ||
          [...Array(tripDays).keys()].map((key) => ({
            day: key + 1,
            program: ""
          }))
      }
    },
    onSubmit: async (values) => {
      await axios
        .put(`http://localhost:3000/api/trip`, values)
        .then((response) => {
          console.log(response);
          if (response.data.status === 200) {
            console.log(response.data.message);
            enqueueSnackbar(`${response.data.message}`, { variant: "success" });
            router.push("/admin/trips");
          }
        })
        .catch((error) => {
          enqueueSnackbar(`${error.response.data.message}`, {
            variant: "error"
          });
        });
    }
  });
  // React.useEffect(() => {
  //   if (tripDays) {
  //     formik.values.program.program = [
  //       ...Array(tripDays).keys()
  //     ].map((key) => ({
  //       day: key + 1,
  //       program: ""
  //     }));
  //   }
  // }, [tripDays]);

  React.useEffect(() => {
    formik.values.program.tripDays = data.programDetails.tripDays;
    formik.values.program.program = data.programDetails.program;
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ borderRadius: "20px" }}>
        <DarkBox>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
                gap: 3,
                flexDirection: "column",
                color: "white"
              }}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h6" component="h4" fontWeight={700}>
                  Trip Inofrmtion
                </Typography>
                <Box>
                  <Typography variant="body1" component="h6" fontWeight={700}>
                    Trip Status
                  </Typography>
                  <TextField
                    select
                    value={formik.values.trip.trip_status}
                    onChange={formik.handleChange}
                    slotProps={{
                      input: {
                        sx: {
                          borderRadius: "20px",
                          // width: "150px",
                          bgcolor:
                            formik.values.trip.trip_status === "active"
                              ? "#00e676"
                              : formik.values.trip.trip_status === "infuture"
                                ? "#81d4fa"
                                : "#ff5252"
                        }
                      }
                    }}
                    name="trip.trip_status"
                    size="small"
                  >
                    <MenuItem value={"disactive"}>Disactive</MenuItem>
                    <MenuItem value={"active"}>Active</MenuItem>
                    <MenuItem value={"infuture"}>InFuture</MenuItem>
                  </TextField>
                </Box>
              </Box>
              <Grid2
                container
                spacing={2}
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "10px",

                  p: 2,
                  boxShadow: "0px 0px 20px #333333"
                }}
              >
                <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                  <TextField
                    label="Trip Name"
                    name="trip.trip_name"
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: "20px" }}
                    fullWidth
                    value={formik.values.trip.trip_name}
                    helperText={
                      formik.touched.trip?.trip_name &&
                      formik.errors.trip?.trip_name
                    }
                    error={
                      formik.touched.trip?.trip_name &&
                      Boolean(formik.errors.trip?.trip_name)
                    }
                    onChange={formik.handleChange}
                  />
                </Grid2>
                <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                  <TextField
                    label="Start Date"
                    name="trip.start_date"
                    variant="outlined"
                    size="small"
                    fullWidth
                    focused
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.trip.start_date}
                    helperText={
                      formik.touched.trip?.start_date &&
                      formik.errors.trip?.start_date
                    }
                    error={
                      formik.touched.trip?.start_date &&
                      Boolean(formik.errors.trip?.start_date)
                    }
                  />
                </Grid2>
                <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                  <TextField
                    label="End Date"
                    name="trip.end_date"
                    variant="outlined"
                    size="small"
                    fullWidth
                    focused
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.trip.end_date}
                    helperText={
                      formik.touched.trip?.end_date &&
                      formik.errors.trip?.end_date
                    }
                    error={
                      formik.touched.trip?.end_date &&
                      Boolean(formik.errors.trip?.end_date)
                    }
                  />
                </Grid2>
                <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                  <TextField
                    name="trip.supervisor_name"
                    label="Supervisor name"
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: "20px" }}
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.trip.supervisor_name}
                    helperText={
                      formik.touched.trip?.supervisor_name &&
                      formik.errors.trip?.supervisor_name
                    }
                    error={
                      formik.touched.trip?.supervisor_name &&
                      Boolean(formik.errors.trip?.supervisor_name)
                    }
                  />
                </Grid2>
                <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                  <TextField
                    name="trip.supervisor_phone"
                    label="Supervisor Phone"
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: "20px" }}
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.trip.supervisor_phone}
                    helperText={
                      formik.touched.trip?.supervisor_phone &&
                      formik.errors.trip?.supervisor_phone
                    }
                    error={
                      formik.touched.trip?.supervisor_phone &&
                      Boolean(formik.errors.trip?.supervisor_phone)
                    }
                  />
                </Grid2>
                <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                  <TextField
                    label="Distination Trip"
                    name="trip.destination_trip"
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: "20px" }}
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.trip.destination_trip}
                    helperText={
                      formik.touched.trip?.destination_trip &&
                      formik.errors.trip?.destination_trip
                    }
                    error={
                      formik.touched.trip?.destination_trip &&
                      Boolean(formik.errors.trip?.destination_trip)
                    }
                  />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <TextField
                    name="trip.trip_description"
                    fullWidth
                    multiline
                    rows={4}
                    label="Description"
                    onChange={formik.handleChange}
                    value={formik.values.trip.trip_description}
                    helperText={
                      formik.touched.trip?.trip_description &&
                      formik.errors.trip?.trip_description
                    }
                    error={
                      formik.touched.trip?.trip_description &&
                      Boolean(formik.errors.trip?.trip_description)
                    }
                  />
                </Grid2>
              </Grid2>
              {/* Hotel Inofrmtion */}
              <Box>
                <Typography mb={3} variant="h6" component="h4" fontWeight={700}>
                  Hotel Inofrmtion
                </Typography>
                <Box>
                  <Grid2
                    container
                    spacing={3}
                    sx={{
                      bgcolor: "#fff",
                      borderRadius: "10px",
                      p: 2,
                      boxShadow: "0px 0px 20px #333333"
                    }}
                  >
                    <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                      <TextField
                        label="Hotel Name"
                        name="hotel.hotel_name"
                        variant="outlined"
                        size="small"
                        sx={{ borderRadius: "20px" }}
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.hotel.hotel_name}
                        helperText={
                          formik.touched.hotel?.hotel_name &&
                          formik.errors.hotel?.hotel_name
                        }
                        error={
                          formik.touched.hotel?.hotel_name &&
                          Boolean(formik.errors.hotel?.hotel_name)
                        }
                      />
                    </Grid2>
                    <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                      <TextField
                        label="Hotel Address"
                        name="hotel.hotel_address"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.hotel.hotel_address}
                        helperText={
                          formik.touched.hotel?.hotel_address &&
                          formik.errors.hotel?.hotel_address
                        }
                        error={
                          formik.touched.hotel?.hotel_address &&
                          Boolean(formik.errors.hotel?.hotel_address)
                        }
                      />
                    </Grid2>
                    <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                      <TextField
                        label="Hotel Phone"
                        name="hotel.hotel_phone"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.hotel.hotel_phone}
                        helperText={
                          formik.touched.hotel?.hotel_phone &&
                          formik.errors.hotel?.hotel_phone
                        }
                        error={
                          formik.touched.hotel?.hotel_phone &&
                          Boolean(formik.errors.hotel?.hotel_phone)
                        }
                      />
                    </Grid2>
                    <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                      <TextField
                        name="hotel.hotel_rating"
                        label="Hotel Rating"
                        variant="outlined"
                        size="small"
                        sx={{ borderRadius: "20px" }}
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.hotel.hotel_rating}
                        helperText={
                          formik.touched.hotel?.hotel_rating &&
                          formik.errors.hotel?.hotel_rating
                        }
                        error={
                          formik.touched.hotel?.hotel_rating &&
                          Boolean(formik.errors.hotel?.hotel_rating)
                        }
                      />
                    </Grid2>
                    <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                      <TextField
                        name="hotel.google_link"
                        label="Googel Link"
                        variant="outlined"
                        size="small"
                        sx={{ borderRadius: "20px" }}
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.hotel.google_link}
                        helperText={
                          formik.touched.hotel?.google_link &&
                          formik.errors.hotel?.google_link
                        }
                        error={
                          formik.touched.hotel?.google_link &&
                          Boolean(formik.errors.hotel?.google_link)
                        }
                      />
                    </Grid2>
                    <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                      <TextField
                        label="Booking Link"
                        name="hotel.booking_link"
                        variant="outlined"
                        size="small"
                        sx={{ borderRadius: "20px" }}
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.hotel.booking_link}
                        helperText={
                          formik.touched.hotel?.booking_link &&
                          formik.errors.hotel?.booking_link
                        }
                        error={
                          formik.touched.hotel?.booking_link &&
                          Boolean(formik.errors.hotel?.booking_link)
                        }
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        name="hotel.hotel_description"
                        label="Description"
                        onChange={formik.handleChange}
                        value={formik.values.hotel.hotel_description}
                        helperText={
                          formik.touched.hotel?.hotel_description &&
                          formik.errors.hotel?.hotel_description
                        }
                        error={
                          formik.touched.hotel?.hotel_description &&
                          Boolean(formik.errors.hotel?.hotel_description)
                        }
                      />
                    </Grid2>
                    <Grid2
                      display={"flex"}
                      justifyContent={"center"}
                      size={{ xs: 12 }}
                    >
                      <Box
                        sx={{
                          width: "70px",
                          height: "70px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow: "0px 0px 10px #333333",
                          borderRadius: "50%",
                          cursor: "pointer",
                          my: 2
                        }}
                      >
                        <input
                          accept="image/*"
                          id="hotel_image"
                          type="file"
                          hidden
                          multiple
                          maxLength={4}
                          onChange={(e: any) =>
                            handleImageChange(e.target.files)
                          }
                        />
                        <label
                          style={{ cursor: "pointer" }}
                          htmlFor="hotel_image"
                        >
                          <AddPhotoAlternateOutlined
                            sx={{
                              color: "#f58d54",
                              fontSize: "3rem",
                              textAlign: "center"
                            }}
                          />
                        </label>
                      </Box>
                    </Grid2>
                    {imagesHotel.length > 0 && (
                      <Grid2 container spacing={2}>
                        {Object.keys(imagesHotel).map((ele, index) => (
                          <Grid2
                            size={{ xs: 12, md: 6, lg: 3, sm: 6 }}
                            key={index}
                          >
                            {imagesHotel[index] && (
                              <img
                                src={URL.createObjectURL(imagesHotel[index])}
                                alt="ashia"
                                width={"100%"}
                                height={"100%"}
                              />
                            )}
                          </Grid2>
                        ))}
                      </Grid2>
                    )}
                  </Grid2>
                </Box>
              </Box>
              {/* Contact Info */}
              <Box>
                <Typography mb={3} variant="h6" component="h4" fontWeight={700}>
                  Contact Info
                </Typography>
                <Grid2
                  container
                  spacing={3}
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "10px",
                    p: 2,
                    boxShadow: "0px 0px 20px #333333"
                  }}
                >
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Supervisor Phone"
                      name="contact.supervisor_phone_contact"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.contact.supervisor_phone_contact}
                      helperText={
                        formik.touched.contact?.supervisor_phone_contact &&
                        formik.errors.contact?.supervisor_phone_contact
                      }
                      error={
                        formik.touched.contact?.supervisor_phone_contact &&
                        Boolean(formik.errors.contact?.supervisor_phone_contact)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Hotel Phone"
                      name="contact.hotel_phone_contact"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.contact.hotel_phone_contact}
                      helperText={
                        formik.touched.contact?.hotel_phone_contact &&
                        formik.errors.contact?.hotel_phone_contact
                      }
                      error={
                        formik.touched.contact?.hotel_phone_contact &&
                        Boolean(formik.errors.contact?.hotel_phone_contact)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Aisha travel Phone"
                      name="contact.aisha_phone_contact"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.contact.aisha_phone_contact}
                      helperText={
                        formik.touched.contact?.aisha_phone_contact &&
                        formik.errors.contact?.aisha_phone_contact
                      }
                      error={
                        formik.touched.contact?.aisha_phone_contact &&
                        Boolean(formik.errors.contact?.aisha_phone_contact)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      name="contact.email_contact"
                      label="Email"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.contact.email_contact}
                      helperText={
                        formik.touched.contact?.email_contact &&
                        formik.errors.contact?.email_contact
                      }
                      error={
                        formik.touched.contact?.email_contact &&
                        Boolean(formik.errors.contact?.email_contact)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      name="contact.whatsapp_contact"
                      label="Whatsapp"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.contact.whatsapp_contact}
                      helperText={
                        formik.touched.contact?.whatsapp_contact &&
                        formik.errors.contact?.whatsapp_contact
                      }
                      error={
                        formik.touched.contact?.whatsapp_contact &&
                        Boolean(formik.errors.contact?.whatsapp_contact)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Embassy number"
                      name="contact.embassy_number_contact"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.contact.embassy_number_contact}
                      helperText={
                        formik.touched.contact?.embassy_number_contact &&
                        formik.errors.contact?.embassy_number_contact
                      }
                      error={
                        formik.touched.contact?.embassy_number_contact &&
                        Boolean(formik.errors.contact?.embassy_number_contact)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      name="contact.more_instructions_contact"
                      label="More instructions"
                      onChange={formik.handleChange}
                      value={formik.values.contact.more_instructions_contact}
                      helperText={
                        formik.touched.contact?.more_instructions_contact &&
                        formik.errors.contact?.more_instructions_contact
                      }
                      error={
                        formik.touched.contact?.more_instructions_contact &&
                        Boolean(
                          formik.errors.contact?.more_instructions_contact
                        )
                      }
                    />
                  </Grid2>
                </Grid2>
              </Box>
              {/* Flight Schedule */}
              <Box>
                <Typography mb={3} variant="h6" component="h4" fontWeight={700}>
                  Flight Schedule
                </Typography>

                <Grid2
                  container
                  spacing={3}
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "10px",
                    p: 2,
                    boxShadow: "0px 0px 20px #333333"
                  }}
                >
                  <Typography
                    variant="h6"
                    width={"100%"}
                    component="h6"
                    color="red"
                    fontWeight={700}
                  >
                    Departure
                  </Typography>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Gathering point"
                      name="flight.gathering_point"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.flight.gathering_point}
                      helperText={
                        formik.touched.flight?.gathering_point &&
                        formik.errors.flight?.gathering_point
                      }
                      error={
                        formik.touched.flight?.gathering_point &&
                        Boolean(formik.errors.flight?.gathering_point)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Gathering time"
                      name="flight.gathering_time"
                      variant="outlined"
                      size="small"
                      type="time"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      focused
                      onChange={formik.handleChange}
                      value={formik.values.flight.gathering_time}
                      helperText={
                        formik.touched.flight?.gathering_time &&
                        formik.errors.flight?.gathering_time
                      }
                      error={
                        formik.touched.flight?.gathering_time &&
                        Boolean(formik.errors.flight?.gathering_time)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Departure date"
                      name="flight.departure_date"
                      variant="outlined"
                      size="small"
                      type="date"
                      focused
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.flight.departure_date}
                      helperText={
                        formik.touched.flight?.departure_date &&
                        (formik.errors.flight?.departure_date as string)
                      }
                      error={
                        formik.touched.flight?.departure_date &&
                        Boolean(formik.errors.flight?.departure_date)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Flight number"
                      name="flight.flight_number"
                      variant="outlined"
                      size="small"
                      type="text"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.flight.flight_number}
                      helperText={
                        formik.touched.flight?.flight_number &&
                        formik.errors.flight?.flight_number
                      }
                      error={
                        formik.touched.flight?.flight_number &&
                        Boolean(formik.errors.flight?.flight_number)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Take off time"
                      name="flight.take_off_time_departure"
                      variant="outlined"
                      size="small"
                      type="time"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      focused
                      onChange={formik.handleChange}
                      value={formik.values.flight.take_off_time_departure}
                      helperText={
                        formik.touched.flight?.take_off_time_departure &&
                        formik.errors.flight?.take_off_time_departure
                      }
                      error={
                        formik.touched.flight?.take_off_time_departure &&
                        Boolean(formik.errors.flight?.take_off_time_departure)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Gate number"
                      name="flight.gate_number"
                      variant="outlined"
                      size="small"
                      type="text"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.flight.gate_number}
                      helperText={
                        formik.touched.flight?.gate_number &&
                        formik.errors.flight?.gate_number
                      }
                      error={
                        formik.touched.flight?.gate_number &&
                        Boolean(formik.errors.flight?.gate_number)
                      }
                    />
                  </Grid2>
                  <Typography
                    variant="h6"
                    width={"100%"}
                    component="h6"
                    color="red"
                    fontWeight={700}
                  >
                    Return
                  </Typography>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Gathering point"
                      name="flight.gathering_point_return"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.flight.gathering_point_return}
                      helperText={
                        formik.touched.flight?.gathering_point_return &&
                        formik.errors.flight?.gathering_point_return
                      }
                      error={
                        formik.touched.flight?.gathering_point_return &&
                        Boolean(formik.errors.flight?.gathering_point_return)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Gathering time"
                      name="flight.gathering_time_return"
                      variant="outlined"
                      size="small"
                      type="time"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      focused
                      onChange={formik.handleChange}
                      value={formik.values.flight.gathering_time_return}
                      helperText={
                        formik.touched.flight?.gathering_time_return &&
                        formik.errors.flight?.gathering_time_return
                      }
                      error={
                        formik.touched.flight?.gathering_time_return &&
                        Boolean(formik.errors.flight?.gathering_time_return)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Retun date"
                      name="flight.return_date"
                      variant="outlined"
                      size="small"
                      type="date"
                      focused
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.flight.return_date}
                      helperText={
                        formik.touched.flight?.return_date &&
                        (formik.errors.flight?.return_date as string)
                      }
                      error={
                        formik.touched.flight?.return_date &&
                        Boolean(formik.errors.flight?.return_date)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Flight number"
                      name="flight.flight_number_return"
                      variant="outlined"
                      size="small"
                      type="text"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.flight.flight_number_return}
                      helperText={
                        formik.touched.flight?.flight_number_return &&
                        formik.errors.flight?.flight_number_return
                      }
                      error={
                        formik.touched.flight?.flight_number_return &&
                        Boolean(formik.errors.flight?.flight_number_return)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Take off time"
                      name="flight.take_off_time_return"
                      variant="outlined"
                      size="small"
                      type="time"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      focused
                      onChange={formik.handleChange}
                      value={formik.values.flight.take_off_time_return}
                      helperText={
                        formik.touched.flight?.take_off_time_return &&
                        formik.errors.flight?.take_off_time_return
                      }
                      error={
                        formik.touched.flight?.take_off_time_return &&
                        Boolean(formik.errors.flight?.take_off_time_return)
                      }
                    />
                  </Grid2>
                  <Grid2 size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Gate number"
                      name="flight.gate_number_return"
                      variant="outlined"
                      size="small"
                      type="text"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.flight.gate_number_return}
                      helperText={
                        formik.touched.flight?.gate_number_return &&
                        formik.errors.flight?.gate_number_return
                      }
                      error={
                        formik.touched.flight?.gate_number_return &&
                        Boolean(formik.errors.flight?.gate_number_return)
                      }
                    />
                  </Grid2>

                  <Grid2 size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      name="flight.flight_instructions"
                      label="More instructions"
                      onChange={formik.handleChange}
                      value={formik.values.flight.flight_instructions}
                      helperText={
                        formik.touched.flight?.flight_instructions &&
                        formik.errors.flight?.flight_instructions
                      }
                      error={
                        formik.touched.flight?.flight_instructions &&
                        Boolean(formik.errors.flight?.flight_instructions)
                      }
                    />
                  </Grid2>
                </Grid2>
              </Box>
              {/* Trip programm */}
              <Box>
                <Typography mb={3} variant="h6" component="h4" fontWeight={700}>
                  Trip programm
                </Typography>
              </Box>
              <Box
                bgcolor={"#fff"}
                borderRadius={"10px"}
                p={2}
                boxShadow={"0px 0px 20px #333333"}
                display={"flex"}
                justifyContent={"center"}
                gap={3}
                flexDirection={"column"}
              >
                <TextField
                  select
                  size="small"
                  label="Select Program Days"
                  sx={{ width: "130px" }}
                  name="program.tripDays"
                  value={formik.values.program.tripDays}
                  //   onChange={formik.handleChange}

                  onChange={(e) => {
                    formik.handleChange(e);
                    setTripDays(e.target.value);
                  }}
                >
                  {[...Array(30).keys()].map((key) => (
                    <MenuItem key={key} value={key + 1}>
                      {key + 1}
                    </MenuItem>
                  ))}
                </TextField>
                <Box>
                  {/* {[...Array(tripDays).keys()].map((key) => (
                    <TextField
                      key={key}
                      fullWidth
                      multiline
                      rows={4}
                      label={
                        key + 1 == 1
                          ? "First Day"
                          : key + 1 == 2
                            ? " secondary Day"
                            : key + 1 + " Days"
                      }
                      name={`program.program.${key}.program`}
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px", my: 2 }}
                      onChange={formik.handleChange}
                      value={formik.values?.program?.program?.[key]?.program}
                      // helperText={
                      //   formik.touched.program?.program?.[key].program &&
                      //   (formik.errors.program?.program?.[key]
                      //     ?.program as string)
                      // }
                      error={
                        formik.touched.program?.program?.[key].program &&
                        Boolean(formik.errors.program?.program)
                      }
                    />
                  ))} */}
                  {[
                    ...Array(Number(formik.values.program.tripDays)).keys()
                  ].map((key) => (
                    <TextField
                      key={key}
                      fullWidth
                      multiline
                      rows={4}
                      label={
                        key + 1 == 1
                          ? "First Day"
                          : key + 1 == 2
                            ? " secondary Day"
                            : key + 1 + " Days"
                      }
                      name={`program.program.${key}.program`}
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px", my: 2 }}
                      onChange={formik.handleChange}
                      value={formik.values?.program?.program?.[key]?.program}
                    />
                  ))}
                </Box>
              </Box>

              {/* Save Button */}
              <Box display={"flex"} justifyContent={"end"} gap={3}>
                <LoadingButton
                  type="submit"
                  loading={formik.isSubmitting}
                  variant="contained"
                  color="primary"
                  sx={{ bgcolor: "#f58d54" }}
                >
                  Save
                </LoadingButton>
              </Box>
            </Box>
          </form>
        </DarkBox>
      </Box>
    </ThemeProvider>
  );
}
