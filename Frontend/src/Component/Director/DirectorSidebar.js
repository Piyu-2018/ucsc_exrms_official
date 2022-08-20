import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { useState } from "react";
// import { styled} from "@mui/material/styles";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import Link from "@mui/material/Link";
const drawerWidth = 220;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

function DirectorSidebar(props) {
  // const [open, setOpen] = useState(true);
  // const [open, setOpen] = useState(false);

  const open = props.open;

  // const handleDrawerOpen = () => {
  //   if (open === true) {
  //     console.log("Hi");
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  // };

  // sx={{display:{xs:"none",sm:"none",md:"block"}}}

  function renderSwitch(param) {
    switch (param) {
      case 0:
        return <PeopleAltRoundedIcon />;
      case 1:
        return <DashboardRoundedIcon />;
      case 2:
        return <ArticleRoundedIcon />;
      case 3:
        return <ShowChartRoundedIcon />;
      case 4:
        return <SummarizeRoundedIcon />;
      case 5:
        return <ChatRoundedIcon />;
      case 6:
        return <NotificationsActiveRoundedIcon />;
    }
  }

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            overflow: "auto",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {[
                <Link href="/">Link</Link>,
                "Undergraduates",
                "Examination",
                "Progress",
                "Reports",
                "Chats",
                "Notification",
              ].map((text, index) => (
                <>
                  <ListItem key={text} sx={{ height: "80px" }} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{renderSwitch(index)}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
            {/* <Divider /> */}
            {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
          </Box>
        </Drawer>
        {/* <Button variant="contained" onClick={handleDrawerOpen}>
            Contained
          </Button> */}
      </Box>
    </>
  );
}

export default DirectorSidebar;
