import { Edit, EditOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import * as React from "react";

export interface IAdminsTableProps {
  data: any;
}

export default function AdminsTable({ data }: IAdminsTableProps) {
  const dataJson = JSON.parse(JSON.stringify(data));
  return (
    <Box >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ color: "#fff", fontWeight:600 }}>
                Name
              </TableCell>
              <TableCell align="center" sx={{ color: "#fff", fontWeight:600 }}>
                phone
              </TableCell>
              <TableCell align="center" sx={{ color: "#fff", fontWeight:600 }}>
                last active
              </TableCell>
              <TableCell align="center" sx={{ color: "#fff", fontWeight:600 }}> Action</TableCell>
        
           
            </TableRow>
          </TableHead>
          <TableBody>
            {dataJson?.length > 0 ? (
              <React.Fragment>
                {dataJson.map((item: any) => (
                  <TableRow key={item._id}>
                    <TableCell align="center" sx={{ color: "#fff" }}>
                      {item.name}
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#fff" }}>
                      {item.phone}
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#fff" }}>
                      {item.lastActive ? (
                        <>
                                              {Intl.DateTimeFormat("en-US" ,{
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      }).format(new Date(item.lastActive))}

                        </>
                      ):"New"}
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#fff" }}>
                        <IconButton>
                            <EditOutlined sx={{color:"#fff"}} />
                        </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ color: "#fff" }}>
                  you don't have any admin
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
