"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {  TranslateOutlined } from "@mui/icons-material";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { setLocale } from "@/app/actions";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0"
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300]
    })
  }
}));

export default function LanguageMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (lang : string) => {
    setLocale(lang)
    setAnchorEl(null);
  };
function closeList (){
  setAnchorEl(null);
}
  return (
    <Box p={5}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <TranslateOutlined />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={closeList}
      >
        <MenuItem onClick={()=>handleClose("pl")} disableRipple>
          <Image priority
            src={
              "https://i0.wp.com/www.seattlepolishnews.org/wp-content/uploads/2022/01/Flag-of-Poland-1200.jpg?fit=1200%2C777&ssl=1"
            }
            width={30}
            height={20}
            alt="Polish Flag"
          />
          <Typography px={2}>Polish</Typography>
        </MenuItem>
        <MenuItem onClick={()=>handleClose("en")} disableRipple>
          <Image priority
            src={
                "https://pic.uhomes.com/onlineblog/cdn/uploads/2024/02/closeup-union-jack-flag.jpg"
            }
            width={30}
            height={20}
            alt="Polish Flag"
          />
          <Typography px={2}>English</Typography>
        </MenuItem>
      </StyledMenu>
    </Box>
  );
}
