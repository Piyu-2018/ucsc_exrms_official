import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Grid} from "@mui/material";
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

import DirectorProgEnBar from './DirectorProgEnBar';
import DirectorProgEnTable from './DirectorProgEnTable';
import DirectorSidebar from '../../DirectorSidebar';

function DirectorEnDrawer() {
  const open = true;
  console.log(open);

  return (
    <>
      {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}
      

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <DirectorSidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <DirectorProgEnBar/><br></br>
            <DirectorProgEnTable/>
          </Grid>
          
        </Grid>
    </>
  );
}

export default DirectorEnDrawer;

