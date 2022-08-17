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
import Navbar from '../../Navbar';
import DirectorUnderContent from './DirectorUnderContent';
import DirectorUnderYear from './DirectorUnderyear';
import DirectorUnderSeach from './DirectorUnderSeach';
import DirectorUnderTable from './DirectorUnderTable';
import DirectorSidebar from '../DirectorSidebar';
import { Grid} from "@mui/material";

function DirectorUnderDrawer() {
  const open = true;
  console.log(open);

  return (
    <>
      {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}
      

        <Grid container spacing={1} justifyContent="space-between">
          <Grid item sm={4} md={2}>
            <DirectorSidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10} paddingRight = "40px">
            <DirectorUnderYear/> <br></br>
            <DirectorUnderSeach/><br></br>
            <DirectorUnderTable/>
          </Grid>
          
        </Grid>
    </>
  );
}

export default DirectorUnderDrawer;


