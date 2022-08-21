import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Grid} from "@mui/material";
import SAR_ProgConfirmChart from './SAR_ProgConfirmChart';
import SAR_ProgConfirmTable from './SAR_ProgConfirmTable';
import SAR_ProgYearSl from './SAR_ProgYearSl';
import SAR_Sidebar from '../../SAR_Sidebar';

function SAR_ProgConfirmDrawer() {
  const open = true;
  console.log(open);

  return (
    <>
    
      

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <SAR_Sidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <SAR_ProgYearSl/><br></br>
            <SAR_ProgConfirmChart/><br></br>
            <SAR_ProgConfirmTable/>
          </Grid>
          
        </Grid>
    </>
  );
}

export default SAR_ProgConfirmDrawer;


