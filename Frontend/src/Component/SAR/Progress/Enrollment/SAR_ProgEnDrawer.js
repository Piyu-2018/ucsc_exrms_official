import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Grid} from "@mui/material";
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

import SAR_ProgEnBar from './SAR_ProgEnBar';
import SAR_ProgEnTable from './SAR_ProgEnTable';
import SAR_Sidebar from '../../SAR_Sidebar';

function SAR_EnDrawer() {
  const open = true;
  console.log(open);

  return (
    <>
      {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}
      

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <SAR_Sidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <SAR_ProgEnBar/><br></br>
            <SAR_ProgEnTable/>
          </Grid>
          
        </Grid>
    </>
  );
}

export default SAR_EnDrawer;

