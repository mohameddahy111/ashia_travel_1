'use client'

import { adminLogin } from "@/app/actions";
import DarkBox from "@/components/DarkBox";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Card,
  CardMedia,
  Grid2,
  List,
  ListItem,
  TextField,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import * as React from "react";

export interface ILogainPageProps {}

export default function LogainPage({}: ILogainPageProps) {
  const {enqueueSnackbar} = useSnackbar();
    const formik = useFormik({
        initialValues: {
            phone: "",
            password: ""
        },
        onSubmit:async (values) => {
          const respones = await adminLogin(values);
          console.log(respones)
          if(respones.status===200){
            enqueueSnackbar(respones.message, {
              variant: "success",
            });
            
            
          }else{
            enqueueSnackbar(respones.message, {
              variant: "error",
            });
          }
        }
    });
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
      <Box
        width={"60%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <DarkBox>
          <Typography
            variant={"h4"}
            textTransform={"capitalize"}
            align="center"
            fontWeight={700}
            width={"100%"}
            py={3}
          >
            Logain
          </Typography>
          <Card sx={{ backgroundColor: "#f8f8f8", p: 3 }}>
            <form onSubmit={formik.handleSubmit}>
            <Grid2 container spacing={3}>
              <Grid2 size={{ sm: 6, xs: 12 }}>
                <List
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <ListItem>
                    <TextField
                      type="tel"
                      slotProps={{
                        input: {
                          sx: {
                            borderRadius: "20px"
                          }
                        }
                      }}
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      required
                      size="small"
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      type="password"
                      slotProps={{
                        input: {
                          sx: {
                            borderRadius: "20px"
                          }
                        }
                      }}
                      label="password"
                      variant="outlined"
                      fullWidth
                      required
                      size="small"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />
                  </ListItem>
                  <ListItem>
                    <LoadingButton
                      fullWidth
                      type="submit"
                      loading={formik.isSubmitting}
                      variant="contained"
                      sx={{ backgroundColor: "#f58d54", borderRadius: "20px" }}
                    >
                      Logain
                    </LoadingButton>
                  </ListItem>
                </List>
              </Grid2>
              <Grid2 size={{ sm: 6, xs: 12 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://vcdn.merlinx.eu/image//getbyid/490654"
                  alt="ashia"
                  width={"140"}
                />
              </Grid2>
            </Grid2>

            </form>
          </Card>
        </DarkBox>
      </Box>
    </Box>
  );
}
