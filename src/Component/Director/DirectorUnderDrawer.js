import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Navbar from '../Navbar';
import DirectorUnderContent from './DirectorUnderContent';
import DirectorUnderYear from './DirectorUnderyear';
import DirectorUnderSeach from './DirectorUnderSeach';
import DirectorUnderTable from './DirectorUnderTable';

import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';


const drawerWidth = 240;



const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    overflowX: "hidden",
    backgroundColor: "#E4EBF5",
    
    
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
  




export default function DirectorDash() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>

    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" style={{backgroundColor:"transparent" , color: "blue", boxShadow:"0px 0px 0px 0px",}} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
            >
            <MenuIcon />
          </IconButton>
          <Navbar />
          <Typography variant="h6" noWrap component="div">
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer variant="permanent" position="relative" open={open} backgroundColor= "#E4EBF5" >
          <DrawerHeader sx={{backgroundColor: "#E4EBF5" }}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Box sx={{backgroundColor: "#E4EBF5" }}>
            <List sx={{backgroundColor: "#E4EBF5" }}>
              {['Dashboard', 'Undergraduates', 'Examination', 'Progress', 'Reports', 'Chats', 'Notification'].map((text, index) => (
                <ListItem key={text}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {index === 0 ? <DashboardRoundedIcon/> : index === 1 ? <PeopleAltRoundedIcon/> : index === 2 ? <ArticleRoundedIcon/>  : index === 3 ? <ShowChartRoundedIcon/> : index === 4 ? <SummarizeRoundedIcon /> : index === 5 ? <ChatRoundedIcon/> : index === 6 ? <NotificationsActiveRoundedIcon/> : <NotificationsActiveRoundedIcon/>}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

          </Box>

        
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <DirectorUnderContent/>
        <DirectorUnderYear/> 
        <DirectorUnderSeach/>
        <DirectorUnderTable/>
      </Box>

    </Box>
    </div>
  );
}

