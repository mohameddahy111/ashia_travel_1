import AddAdmin from "@/components/admin/add-admin";
import AdminsTable from "@/components/admin/admins-table";
import DarkBox from "@/components/DarkBox";
import { connectDb } from "@/db/connect-db";
import Admin from "@/schemas/admins.schema";
import { Box, Typography } from "@mui/material";
import * as React from "react";

export interface IAdminsPageProps {}

export default async function AdminsPage({}: IAdminsPageProps) {
    connectDb()
    // const allAdmins = await Admin.find({});


    
  return (
    <Box
      color={"#fff"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      width={"100%"}
      height={"100vh"}
    >
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
      <Typography variant="h4" fontWeight={700} component={"h4"}>
        Admins
      </Typography>
      <AddAdmin/>

        </Box>
      <DarkBox mt={5}>
        <AdminsTable data={[]} />
      </DarkBox>
    
    </Box>
  );
}
