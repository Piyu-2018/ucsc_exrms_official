import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { styled, useTheme } from "@mui/material/styles";
import {Box,Drawer,Toolbar, Divider,Link} from "@mui/material";
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import LocalPostOfficeRoundedIcon from '@mui/icons-material/LocalPostOfficeRounded';
import NoteRoundedIcon from '@mui/icons-material/NoteRounded';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function DirectorSidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "230px", backgroundColor:'white'}}>
      <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        </ListSubheader>
      }
    >
      <ListItemButton to='/directorDash'>
        <ListItemIcon>
          <HomeRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <Divider />
      <ListItemButton to='/directorDashboard'>
        <ListItemIcon>
          <DashboardRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <Divider />
      <ListItemButton to='/directorUnder'>
        <ListItemIcon>
          <PeopleAltRoundedIcon/>
        </ListItemIcon>
        <ListItemText primary="Undergraduates" />
      </ListItemButton>
      <Divider />
      <ListItemButton to='/directorExamRe'>
        <ListItemIcon>
          <ArticleRoundedIcon/>
        </ListItemIcon>
        <ListItemText primary="Examination" />
      </ListItemButton>
      <Divider />
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ShowChartRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Progress" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} to='/directorEnProgress'>
            <ListItemIcon>
              <ContactMailRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Intake Details" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} to='/directorRegProg'>
            <ListItemIcon>
              <HowToRegRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Registration" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} to='/directorConfirmProg'>
            <ListItemIcon>
              <LocalPostOfficeRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Letters" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} to='/directorTransProg'>
            <ListItemIcon>
              <NoteRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Transcript Letter" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} to='/directorRescruProg'>
            <ListItemIcon>
              <NoteAltRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Rescruthinization" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} to='/directorSubProg'>
            <ListItemIcon>
              <SubjectRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Subjects" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} to='/directorFourthProg'>
            <ListItemIcon>
              <ContactPageRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Fourth Year" />
          </ListItemButton>
        </List>
          </Collapse>
          <Divider />
      <ListItemButton>
        <ListItemIcon>
          <SummarizeRoundedIcon/>
        </ListItemIcon>
        <ListItemText primary="Summary Report" />
      </ListItemButton>
      <Divider />
      <ListItemButton to='/directorChat'>
        <ListItemIcon>
          <ChatRoundedIcon/>
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <NotificationsActiveRoundedIcon/>
        </ListItemIcon>
        <ListItemText primary="Notification" />
      </ListItemButton>
      <Divider />
        </List>

    </Box>
    
  );
}
