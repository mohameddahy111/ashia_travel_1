"use client";

import { DeleteOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import * as React from "react";

export interface IDeleteButtonProps {
  url: string;
  id: string;
}

export default function DeleteButton({ url, id }: IDeleteButtonProps) {
  console.log(id);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const handleDelete = async () => {
    await axios
      .delete(url, { data: { id } })
      .then((response) => {
        if (response.status === 200) {
          enqueueSnackbar("Deleted successfully", {
            variant: "success"
          });
          router.refresh();
        }
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar(error.response.data.message, {
          variant: "error"
        });
      });
  };
  return (
    <IconButton onClick={handleDelete}>
      <DeleteOutline sx={{ color: red[500] }} />
    </IconButton>
  );
}
