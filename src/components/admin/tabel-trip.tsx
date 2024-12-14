

import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import * as React from "react";
import DeleteButton from "../delete-button";

export interface ITableTripsProps {
  data?: any;
}

export default function TableTrips({ data }: ITableTripsProps) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Trip Name
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Date
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Status
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Passengers
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item: any) => (
            <TableRow key={item.trip._id}>
              <TableCell align="center" sx={{ color: "#fff" }}>
                <Typography
                  variant="body1"
                  fontWeight={700}
                  textTransform={"capitalize"}
                  component="div"
                >
                  {item.trip.trip_name}
                </Typography>
              </TableCell>
              <TableCell align="center" sx={{ color: "#fff" }}>
                {Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                }).format(new Date(item.trip.start_date))}
              </TableCell>
              <TableCell align="center" sx={{ color: "#fff" }}>
                <Typography
                  className={
                    item.trip.trip_status === "active"
                      ? "active"
                      : item.trip.trip_status === "infuture"
                        ? "infuture"
                        : "disactive"
                  }
                  variant="body1"
                  fontWeight={700}
                  textTransform={"capitalize"}
                  component="div"
                >
                  {item.trip.trip_status}
                </Typography>
              </TableCell>
              <TableCell align="center" sx={{ color: "#fff" }}>{item.passengers}</TableCell>
              <TableCell align="center" sx={{ color: "#fff" }}>
                <IconButton
                  LinkComponent={"a"}
                  href={`/admin/trips/${item?.trip?._id}/edit_trip`}
                >
                  <EditOutlined sx={{ color: "#fff" }} />
                </IconButton>
                <DeleteButton url={`https://ashia-travel-1.vercel.app//api/trip`} id={JSON.stringify(item?.trip?._id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
