"use client";

import { useGetData } from "@/hooks/hooks";
import { VisibilityOutlined } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  IconButton,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import * as React from "react";

export interface IPassengersTableProps {}

export default function PassengersTable({}: IPassengersTableProps) {
  const { data, loading } = useGetData("https://ashia-travel-1.vercel.app//api/trip/");
  const [passengers, setPassengers] = React.useState([]);
  const [tripid, setTripid] = React.useState<string>("");

  async function getPassengers() {
    const data = await axios.get(
      `https://ashia-travel-1.vercel.app//api/trip/${tripid}/passengers`
    );
    setPassengers(data.data);
  }

  React.useEffect(() => {
    if (tripid) {
      getPassengers();
    }
  }, [tripid]);
  React.useEffect(() => {
    if (data && data.length > 0) {
      Promise.all(
        data.map((trip: any, index: number) => {
          if (index === 0) {
            setTripid(trip._id);
          }
        })
      );
    }
  }, [data]);
  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          borderRadius: "10px",
          color: "#203040",
          bgcolor: "#f3f3f3",
          p: 3,
          my: 3
        }}
      >
        <TextField
          select
          value={tripid as string}
          onChange={(event) => setTripid(event.target.value)}
          name="trip_id"
          size="small"
          label="Select Trip"
          sx={{ width: "130px", my: 3 }}
          slotProps={{
            input: {
              sx: {
                borderRadius: "20px"
              }
            }
          }}
        >
          {data?.map((trip: any) => (
            <MenuItem key={trip._id} value={trip._id}>
              {trip.trip_name}
            </MenuItem>
          ))}
        </TextField>
            {data && data.length > 0 ? (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700 }} align="center">
                        Name
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }} align="center">
                        Email
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }} align="center">
                        Phone
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }} align="center">
                        Gender
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }} align="center">
                        Status
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }} align="center" />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {passengers?.map((item: any) => (
                      <TableRow key={item._id}>
                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="center">
                          <Typography
                            component={"a"}
                            href={`mailto:${item.email}`}
                            variant="body1"
                            fontWeight={600}
                            color="primary"
                          >
                            {item.email}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">{item.phone}</TableCell>
                        <TableCell align="center">{item.gender}</TableCell>
                        <TableCell align="center">{item.status}</TableCell>
                        <TableCell align="center">
                          <IconButton
                            LinkComponent={"a"}
                            href={`/admin/passengers/${item._id}/details`}
                          >
                            <VisibilityOutlined />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Box sx={{ display: "flex", justifyContent: "center"  ,alignItems: "center" , gap: 2 }}>
                <CircularProgress size={20} />
                <p>Loading...</p>
              </Box>
            )}
      </Paper>
    </Box>
  );
}
