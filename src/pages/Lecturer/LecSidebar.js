import { AppBar, Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useState} from 'react'
import { styled, useTheme } from '@mui/material/styles';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GradingIcon from '@mui/icons-material/Grading';
import { Attachment, CalendarMonth, Chat, Grade, Notifications } from '@mui/icons-material';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );


function LecSidebar(toggle) {
    
const [open, setOpen] = useState(true);
// const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    if(open===true){
        console.log("Hi");
        setOpen(false)
    }else{
        setOpen(true)
    }
  };

// sx={{display:{xs:"none",sm:"none",md:"block"}}}

  function renderSwitch(param){
    switch(param){
      case 0:
        return <AssignmentIcon/>;
      case 1:
        return <GradingIcon/>
      case 2:
        return <CalendarMonth/>
      case 3:
        return <Grade/>
      case 4:
        return <Attachment/>
      case 5:
        return <Chat/>
      case 6:
        return <Notifications/>          

    }
  }

  return (
    <>
    <Box sx={{display:"flex", flexDirection:"column", width:"100px" }}>
    

            
            
    
    <Drawer sx={{
          width: drawerWidth,
          overflow:"auto",  
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
      <Toolbar/>
      <Box sx={{ overflow: 'auto' }}>     
      <List>
        {['Assignments', 'Exam Marks', 'Exam Timetable', 'Grades','Exam Paper','Chat','Notifications'].map((text, index) => (
          <>
          <ListItem key={text} sx={{height:"80px"}} disablePadding>
            <ListItemButton>
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
    </Box>
    {/* <Button variant="contained" onClick={handleDrawerOpen}>Contained</Button> */}
        
    </>

  )
}

export default LecSidebar