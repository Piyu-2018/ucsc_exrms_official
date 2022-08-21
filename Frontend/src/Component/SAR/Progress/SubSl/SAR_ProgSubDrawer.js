import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Grid} from "@mui/material";
import SAR_ProgSubSl from './SAR_ProgSubSl';
import SAR_ProgSubChart from './SAR_ProgSubChart';
import SAR_ProgSubTable from './SAR_ProgSubTable';
import SAR_Sidebar from '../../SAR_Sidebar';

function SAR_ProgSubDrawer() {
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
            <SAR_ProgSubSl/><br></br>
            <SAR_ProgSubChart/><br></br>
            <SAR_ProgSubTable/>
          </Grid>
          
        </Grid>
    </>
  );
}

export default SAR_ProgSubDrawer;






