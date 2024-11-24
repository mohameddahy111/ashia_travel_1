"use client";

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid2,
  TextField,
  Typography
} from "@mui/material";
import { useFormik } from "formik";

export interface IAddAdminProps {}

export default function AddAdmin(props: IAddAdminProps) {
  const [open, setOpen] = React.useState(false);
  const [roles, setRoles] = React.useState<string[]>([]);
  function openHandler() {
    setOpen(true);
  }
  function closeHandler() {
    setOpen(false);
  }
  const formik = useFormik({
    validationSchema: "",
    initialValues: {
      name: "",
      phone: "",
      password: "",
      role: [],
      lastActive: "",
      email: ""
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });
  return (
    <Box>
      <Button variant="contained" onClick={openHandler}>
        Add Admin
      </Button>
      <Dialog open={open} onClose={closeHandler} fullWidth>
        <DialogTitle>Add Admin</DialogTitle>
        <form onSubmit={formik.handleSubmit} style={{ padding: "10px" }}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                size="small"
                name="name"
                type="text"
                label="Name"
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                size="small"
                name="password"
                type="text"
                label="Password"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                size="small"
                name="phone"
                type="text"
                label="Phone Number"
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <TextField
                name="email"
                type="text"
                label="email"
                fullWidth
                size="small"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Box
                my={3}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={3}
                width={"100%"}
              >
                <FormControl sx={{ width: "100%" }} size="small">
                  <FormLabel>
                    <Typography>Select Admin Role</Typography>
                  </FormLabel>
                  <FormGroup
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      gap: 2
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Admin"
                      defaultChecked={
                        formik.values.role?.find((v) => v === "admin") != null
                      }
                      onChange={formik.handleChange}
                      name="role"
                      value={"admin"}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Pessanger"
                      defaultChecked={
                        formik.values.role?.find((v) => v === "pessanger") !=
                        null
                      }
                      onChange={formik.handleChange}
                      name="role"
                      value={"pessanger"}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Trip"
                      defaultChecked={
                        formik.values.role?.find((v) => v === "trip") != null
                      }
                      onChange={formik.handleChange}
                      name="role"
                      value={"trip"}
                    />
                  </FormGroup>
                </FormControl>
              </Box>
            </Grid2>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#f58d54", borderRadius: "20px" }}
            >
              save
            </Button>
          </Grid2>
        </form>
      </Dialog>
    </Box>
  );
}
