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
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import React from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { useState } from "react";
// import { styled} from "@mui/material/styles";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import GradingIcon from "@mui/icons-material/Grading";
import {
  Attachment,
  CalendarMonth,
  Chat,
  Grade,
  Notifications,
} from "@mui/icons-material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
// import { Link } from "react-router-dom";
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

function AdminSidebar(props) {
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

  // function renderLink(param) {
  //   switch (param) {
  //     case 0:
  //       return "/lec_assign_list";
  //     case 1:
  //       return "/lec_grading";
  //     case 2:
  //       return "/lec_assign_timetable";
  //   }
  // }

  const link = [
    "/admin_home",
    "/admin_logins",
    "/admin_lec_activity",
    "/admin_users",
    // "/lec_exam_timetable",
    // "/lec_grading",
    // "/lec_exampaper",
    // "/lec_course_grading",
  ];

  function renderSwitch(param) {
    switch (param) {
      case 0:
        return <HomeRoundedIcon />;
      case 1:
        return <DashboardRoundedIcon />;
      case 2:
        return <AssignmentIcon />;
      case 3:
        return <GradingIcon />;
      // case 4:
      //   return <CalendarMonth />;
      // case 5:
      //   return <Grade />;
      // case 6:
      //   return <Attachment />;
      // case 7:
      //   return <PlaylistAddCheckIcon />;
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
                "Home",
                "Login Activity",
                "Lectuerer Activity",
                "Users",
                // "Exam Timetable",
                // "Grades",
                // "Exam Paper",
                // "Subject Wise Progress",
              ].map((text, index) => (
                <>
                  <ListItem key={text} sx={{ height: "80px" }} disablePadding>
                    <ListItemButton to={link[index]}>
                      <ListItemIcon>
                        {renderSwitch(index)}
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                      </ListItemIcon>
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

export default AdminSidebar;
