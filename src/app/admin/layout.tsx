"use client";

import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import { sideAdminList } from "@/helper/data";
import { usePathname, useRouter } from "next/navigation";
import { authAdmin } from "../actions";
import AdminMenu from "@/components/admin/adminMenu";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden",
  backgroundColor: "#333333",
  boxShadow: "0 0px 5px #fff"
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  backgroundColor: "#333333",

  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      }
    }
  ]
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
      }
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
      }
    }
  ]
}));

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [list, setList] = React.useState<any>([]);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const pathName = usePathname();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    authAdmin().then((data) => {
      const list = data?.role?.map((ele: string) => {
        return sideAdminList.find((v) => v.namespace === ele);
      });
      setList(list);
    });
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ bgcolor: "#333333" }}
        open={open}
      >
        <Toolbar sx={{display:"flex" , justifyContent:"space-between"}}>
          <Box display={"flex"} alignItems={"center"} gap={2}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
                color: "#f58d54"
              },
              open && { display: "none" }
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Box >
            <Image
              src={"https://vcdn.merlinx.eu/image//getbyid/490654"}
              priority
              width={50}
              height={50}
              alt="ashia"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                boxShadow: "0px 0px 2px #fff",
                borderRadius: "50%",
                cursor: "pointer"
              }}
              className="Img_bg"
            />
          </Box>

          </Box>
          <Box>
         <AdminMenu/>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ bgcolor: "#333333" }}>
          <IconButton onClick={handleDrawerClose} sx={{ color: "#f58d54" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {list?.map((ele: any, index: number) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block", ":hover": { bgcolor: "#33333c" } }}
            >
              <ListItemButton
                LinkComponent={"a"}
                href={ele?.link}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    boxShadow:
                      ele?.link === pathName ? "0 0px 10px #f58d54" : null,
                    borderRadius: "10px",
                    m: "5px"
                  },

                  open
                    ? {
                        justifyContent: "initial"
                      }
                    : {
                        justifyContent: "center"
                      }
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center"
                    },
                    open
                      ? {
                          mr: 3
                        }
                      : {
                          mr: "auto"
                        }
                  ]}
                >
                  {ele?.icon}
                </ListItemIcon>
                <ListItemText
                  primary={ele?.title}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                          color: "#fff"
                        }
                      : {
                          opacity: 0
                        }
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          borderRadius: "10px",
          height: "100vh",
          bgcolor: "#222222",
          overflowY: "scroll"
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
