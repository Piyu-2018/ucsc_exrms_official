import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Drawer, Toolbar, Divider, Link } from "@mui/material";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import LocalPostOfficeRoundedIcon from "@mui/icons-material/LocalPostOfficeRounded";
import NoteRoundedIcon from "@mui/icons-material/NoteRounded";
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";
import SubjectRoundedIcon from "@mui/icons-material/SubjectRounded";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";

export default function HoESidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "230px",
        backgroundColor: "white",
      }}
    >
      <List
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
          ></ListSubheader>
        }
      >
        <ListItemButton to="/HoEDash">
          <ListItemIcon>
            <DashboardRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <Divider />
        <ListItemButton to="/hoEExamRe">
          <ListItemIcon>
            <ArticleRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Examination" />
        </ListItemButton>
        <Divider />
        <ListItemButton to="hoESummaryReport">
          <ListItemIcon>
            <SummarizeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Summary Report" />
        </ListItemButton>
        <Divider />
        <ListItemButton to="/hoEChat">
          <ListItemIcon>
            <ChatRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <NotificationsActiveRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Notification" />
        </ListItemButton>
        <Divider />
      </List>
    </Box>
  );
}
