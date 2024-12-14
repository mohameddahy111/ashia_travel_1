"use client";

import { GetAllTrips } from "@/app/actions";
import { useGetData } from "@/hooks/hooks";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import * as React from "react";

export interface INewPassengerPageProps {}

export default function NewPassengerPage({}: INewPassengerPageProps) {
  const router = useRouter();
  const trips = useGetData(`https://ashia-travel-1.vercel.app//api/trip`);

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
    // validationSchema: nwePassengerSchema,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      nationality: "",
      age: "",
      gender: "",
      photo: "",
      status: "",
      trip_id: ""
    },
    onSubmit: async (values) => {
      await axios
        .post(`https://ashia-travel-1.vercel.app//api/passenger`, values)
        .then((response) => {
          if (response.status === 201) {
            enqueueSnackbar(`${response.data.message}`, { variant: "success" });
            formik.resetForm();
            router.push("/admin/passengers");
          }
        })
        .catch((error) => {
          console.log(error)
          enqueueSnackbar(`${error.response.data.message}`, {
            variant: "error"
          });
        });
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <form onSubmit={formik.handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          gap={3}
        >
          <Box>
            <Typography variant="h6" component="h4" fontWeight={700}>
              New Passenger
            </Typography>
          </Box>
          <Box width={"100%"} bgcolor={"#fff"} borderRadius={"10px"} p={2}>
            <Grid2 container spacing={2}>
              <Grid2
                py={1}
                size={{ sm: 4, xs: 12 }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  src="https://i.pinimg.com/originals/11/df/2b/11df2bc889722dab6946142dc9c70151.gif"
                  alt="passenger"
                  width={200}
                  height={200}
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    boxShadow: "0px 0px 10px #f58d54"
                  }}
                />
              </Grid2>
              <Grid2 py={1} size={{ sm: 8, xs: 12 }}>
                <Grid2 container spacing={2}>
                  <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      select
                      label="Select Trip"
                      name="trip_id"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={formik.values.trip_id}
                      helperText={
                        formik.touched.trip_id && formik.errors.trip_id
                      }
                      error={
                        formik.touched.trip_id && Boolean(formik.errors.trip_id)
                      }
                      onChange={formik.handleChange}
                    >
                      {trips?.data?.map((ele: any) => (
                        <MenuItem key={ele?._id} value={ele?._id as string}>
                          {ele?.trip_name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid2>

                  <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Name"
                      name="name"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      value={formik.values.name}
                      helperText={formik.touched.name && formik.errors.name}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      onChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Email"
                      name="email"
                      variant="outlined"
                      size="small"
                      type="email"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      value={formik.values.email}
                      helperText={formik.touched.email && formik.errors.email}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      onChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Age"
                      name="age"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      value={formik.values.age}
                      helperText={formik.touched.age && formik.errors.age}
                      error={formik.touched.age && Boolean(formik.errors.age)}
                      onChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Gender"
                      name="gender"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      value={formik.values.gender}
                      helperText={formik.touched.gender && formik.errors.gender}
                      error={
                        formik.touched.gender && Boolean(formik.errors.gender)
                      }
                      onChange={formik.handleChange}
                    />
                  </Grid2>

                  <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Phone"
                      name="phone"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      value={formik.values.phone}
                      helperText={formik.touched.phone && formik.errors.phone}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      onChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Address"
                      name="address"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      value={formik.values.address}
                      helperText={
                        formik.touched.address && formik.errors.address
                      }
                      error={
                        formik.touched.address && Boolean(formik.errors.address)
                      }
                      onChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="City"
                      name="city"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      value={formik.values.city}
                      helperText={formik.touched.city && formik.errors.city}
                      error={formik.touched.city && Boolean(formik.errors.city)}
                      onChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Country"
                      name="country"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      value={formik.values.country}
                      helperText={
                        formik.touched.country && formik.errors.country
                      }
                      error={
                        formik.touched.country && Boolean(formik.errors.country)
                      }
                      onChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Nationality"
                      name="nationality"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      value={formik.values.nationality}
                      helperText={
                        formik.touched.nationality && formik.errors.nationality
                      }
                      error={
                        formik.touched.nationality &&
                        Boolean(formik.errors.nationality)
                      }
                      onChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <TextField
                      label="Status"
                      name="status"
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: "20px" }}
                      fullWidth
                      value={formik.values.status}
                      helperText={formik.touched.status && formik.errors.status}
                      error={
                        formik.touched.status && Boolean(formik.errors.status)
                      }
                      onChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 py={1} size={{ md: 6, lg: 4, sm: 6, xs: 12 }}>
                    <LoadingButton
                      loading={formik.isSubmitting}
                      type="submit"
                      sx={{
                        bgcolor: "#f58d54",
                        color: "#fff",
                        borderRadius: "20px"
                      }}
                      fullWidth
                      variant="contained"
                    >
                      Save
                    </LoadingButton>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </form>
    </ThemeProvider>
  );
}
