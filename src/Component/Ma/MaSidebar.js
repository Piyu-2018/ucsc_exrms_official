import { AppBar, Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import {useState} from 'react'
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PaymentsIcon from '@mui/icons-material/Payments';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ForumIcon from '@mui/icons-material/Forum';
import SourceIcon from '@mui/icons-material/Source';
import { styled, useTheme } from '@mui/material/styles';


const drawerWidth = 220;

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


function MaSidebar(toggle) {
    
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
        return <PeopleIcon/>;
      case 1:
        return <SourceIcon/> 
      case 2:
        return <DescriptionIcon/>
      case 3:
        return <AttachEmailIcon/>
      case 4:
        return <AssignmentIndIcon/>
      case 5:
        return <PaymentsIcon />
      case 6:
        return <HowToRegIcon/>
      case 7:
        return <AssessmentIcon/>     
      case 8:
        return <SourceIcon/>  

    }
  }

  const link = ["/ma_undergraduates","/ma_admission","/MaLetters","/ma_letters","/#","/#","/ma_attendance","/ma_exam_report","/ma_courses"];

  return (
    <>
    <Box sx={{display:"flex", flexDirection:"column", width:"250px",backgroundColor:"#E4EBF5"}}>
    

            
            
    
    <Drawer sx={{
          width: drawerWidth,
          backgroundColor:"#E4EBF5",
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
      <Box sx={{ overflow: 'auto',backgroundColor:"#E4EBF5" }}>     
      <List>
        {['Undergraduates','Admissions', 'Examinations', 'Letters', 'Registration', 'Payments','Attendance','Reports', 'Courses','',''].map((text, index) => (
          <>
          <ListItem key={text} sx={{height:"60px"}} disablePadding>
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
    </Box>
    {/* <Button variant="contained" onClick={handleDrawerOpen}>Contained</Button> */}
        
    </>

  )
}

export default MaSidebar