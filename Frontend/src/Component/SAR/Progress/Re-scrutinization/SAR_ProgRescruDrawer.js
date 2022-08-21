import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import SAR_ProgRescruSl from './SAR_ProgRescruSl';
import { Grid} from "@mui/material";
import SAR_ProgRescruTable from './SAR_ProgRescruTable';
import SAR_Sidebar from '../../SAR_Sidebar';

function SAR_ProgRescruDrawer() {
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
            <SAR_ProgRescruSl/><br></br><br></br>
            <SAR_ProgRescruTable/><br></br>
          </Grid>
          
        </Grid>
    </>
  );
}

export default SAR_ProgRescruDrawer;





