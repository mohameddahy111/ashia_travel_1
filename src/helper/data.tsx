import { DashboardOutlined, Groups2, HikingOutlined, PublicOutlined } from "@mui/icons-material";

export const sideAdminList=[
    {
        link:"/admin/dashboard",
        title:"Dashboard",
        icon:<DashboardOutlined sx={{color:"#f58d54"}}/>,
        namespace:"dashboard"
    },
    {
        link:"/admin/passengers",
        title:"Passengers",
        icon:<HikingOutlined sx={{color:"#f58d54"}}/>,
        namespace:"passengers"
    },
    {
        link:"/admin/trips",
        title:"Trips",
        icon:<PublicOutlined sx={{color:"#f58d54"}}/>,
        namespace:"trips"
    },
    {
        link:"/admin/admins",
        title:"Admins",
        icon:<Groups2 sx={{color:"#f58d54"}}/>,
        namespace:"admins"
    },
]